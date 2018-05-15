(ns lvlup.crusader
  "Official Sente reference example: server"
  {:author "Peter Taoussanis (@ptaoussanis)"}

  (:require
   [clojure.string     :as str]
   [clojure.data     :as data]

   [monger.core :as mg]
   [monger.collection :refer [insert update update-by-id remove-by-id] :as mc]
   [monger.query :refer :all]
   [monger.operators :refer :all]
   [dk.ative.docjure.spreadsheet :as xls]
   [hiccup.core        :as hiccup]
   [clojure.core.async :as async  :refer (<! <!! >! >!! put! chan go go-loop timeout)]
   [taoensso.encore    :as encore :refer (have have?)]
   [taoensso.timbre    :as timbre :refer (tracef debugf infof warnf errorf)]
   [taoensso.sente     :as sente]

   [hiccup.page :refer [include-js include-css html5]]

   ;;; TODO Choose (uncomment) a supported web server + adapter -------------
   [org.httpkit.server :as http-kit]
   [taoensso.sente.server-adapters.http-kit :refer (get-sch-adapter)]
   ;;
   ;; [immutant.web :as immutant]
   ;; [taoensso.sente.server-adapters.immutant :refer (get-sch-adapter)]
   ;;
   ;; [nginx.clojure.embed :as nginx-clojure]
   ;; [taoensso.sente.server-adapters.nginx-clojure :refer (get-sch-adapter)]
   ;;
   ;; [aleph.http :as aleph]
   ;; [taoensso.sente.server-adapters.aleph :refer (get-sch-adapter)]
   ;; -----------------------------------------------------------------------

   ;; Optional, for Transit encoding:
   [taoensso.sente.packers.transit :as sente-transit])
  (:import [org.bson.types ObjectId]
           [com.mongodb DB WriteConcern]))

;; (timbre/set-level! :trace) ; Uncomment for more logging
(reset! sente/debug-mode?_ true) ; Uncomment for extra debug info

;;;; Define our Sente channel socket (chsk) server

(let [;; Serialization format, must use same val for client + server:
      packer :edn ; Default packer, a good choice in most cases
      ;; (sente-transit/get-transit-packer) ; Needs Transit dep

      chsk-server
      (sente/make-channel-socket-server!
       (get-sch-adapter) {:packer packer})

      {:keys [ch-recv send-fn connected-uids
              ajax-post-fn ajax-get-or-ws-handshake-fn]}
      chsk-server]

  (def ring-ajax-post                ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-chsk                       ch-recv) ; ChannelSocket's receive channel
  (def chsk-send!                    send-fn) ; ChannelSocket's send API fn
  (def connected-uids                connected-uids)) ; Watchable, read-only atom


(def clicks (atom 0))

;Utility functions


(defn send-all [message]
  (let [uids (:any @connected-uids)] (doseq [uid uids]

                                       (chsk-send! uid
                                                   message))))

(def waiting-pool (atom []))

(defn get-waiting-pool []
  (send-all [:dungeon/waiting-pool (str @waiting-pool)]))

(defn add-to-waiting-pool [{:keys [event]}]
  (let [[key change-map] event]
    (reset! waiting-pool (vec (set (conj @waiting-pool change-map))))
    (get-waiting-pool)))

(defn remove-from-waiting-pool [{:keys [event]}]
  (let [[key change-map] event]
    (reset! waiting-pool (vec (remove  #(= change-map %) @waiting-pool)))
    (get-waiting-pool)))

(let [^MongoOptions opts (mg/mongo-options {:threads-allowed-to-block-for-connection-multiplier 300})
      ^ServerAddress sa  (mg/server-address "127.0.0.1" 27017)
      conn               (mg/connect sa opts)
      db   (mg/get-db conn "lvlup")]



  (defn get-max-id []
    (let [all-member-id
          (+ 11 (mc/count db "members" {}))] (send-all [:dungeon/max-id all-member-id])))

  (defn dungeon-change [{:keys [event]}]
    (let [[key change-map] event]
      (mc/update db "dungeon" {:name (:name change-map)}
                 change-map)

      (send-all [:dungeon/change change-map])))

  (defn modify-invoice [{:keys [event]}]
    (let [[key change-map] event
          oid (ObjectId. (:id change-map))
          the-invoice (fn [] (mc/find-one-as-map db "unpayedinvoices" {:_id oid}))]
      ;(send-all [:dungeon/bug-check (str oid " halika " (mc/find-one-as-map db "unpayedinvoices" {:_id oid}))

      (mc/insert db "invoices" (the-invoice))
      (mc/remove-by-id db "unpayedinvoices" oid)

      (send-all [:dungeon/get-invoices
                 (str
                  (vec
                   (map
                    #(assoc % :_id (str (:_id %)))
                    (with-collection db "unpayedinvoices"))))])))
   ;(find {:payed false})))))])))

  (defn add-invoice [{:keys [event]}]
    (let [[key change-map] event]
      (mc/insert db "unpayedinvoices" change-map)
      ;  (mc/update db "members" {:id (:id change-map)} {$set {:total-hours}})
      (send-all [:dungeon/get-invoices
                 (str
                  (vec
                   (map
                    #(assoc % :_id (str (:_id %)))
                    (with-collection db "unpayedinvoices"))))])))
                                ;(find {:payed false})))))])))

  (defn season-pass [{:keys [event]}]
    (let [[key change-map] event]
      (mc/update db "members" {:id (:member-id change-map)} {$inc {:season-pass (:quantity change-map)}})
      (send-all [:dungeon/replace-member
                 (dissoc
                   (mc/find-one-as-map db "members" {:id (:member-id change-map)})
                   :_id)])))
  (defn get-invoices []

    (vec
     (map
      #(assoc % :_id (str (:_id %)))
      (with-collection db "unpayedinvoices"))))

  (defn get-payed-invoices []

    (vec
      (map
         #(assoc % :_id (str (:_id %)))
         (with-collection db "invoices"))))
                                ;(find {:payed false})))))]))

  (defn update-member [{:keys [event]}]
    (let [[key change-map] event]
      (mc/update db "members" {:id (:id change-map)} change-map)
      ;(mc/find db "members" {:id (:id change-map)})
      (send-all [:dungeon/replace-member (dissoc
                                          (mc/find-one-as-map db "members" {:id (:id change-map)})
                                          :_id)])))

  (defn remove-member [{:keys [event id ?data ring-req ?reply-fn send-fn]}]
    (let [[key change-map] event]
      (mc/remove db "members" {:id change-map})))

  (defn add-member [{:keys [event]}]
    (let [[key change-map] event]
      (mc/insert db "members" (assoc change-map :season-pass 0 :total-hours 0))
      (send-all [:dungeon/replace-member
                 (dissoc
                  (mc/find-one-as-map db "members"
                                      {:id (:id change-map)})
                  :_id)])))

  (defn get-members [{:keys [event]}]
    (let [[key change-map] event]
      (vec
       (map
        #(dissoc % :_id)
        (with-collection
         db "members"
         (find {$or [(if (= "" (:search change-map))
                       {}
                       {$or [{:name {$regex (str (:search change-map) ".*") $options "i"}}
                             {:id (read-string (:search change-map))}]})]})

                                                  ;(fields [:id :name :season-pass])
                                                  ;; it is VERY IMPORTANT to use array maps with sort
         (sort (array-map :id -1 :name 1))
         (limit 20)
         (skip (:number change-map)))))))

  (defn get-reservations [{:keys [event]}]
    (let [[key change-map] event]
      (str
       (vec
        (map
         #(assoc % :_id (str (:_id %)))
         (with-collection db "reservations"
                          (find {:date change-map})))))))

  (defn remove-reservations [{:keys [event]}]
    (let [[key change-map] event]
      (mc/remove-by-id db "reservations" (ObjectId. (:_id change-map)))
      (str
       (vec
        (map
         #(assoc % :_id (str (:_id %)))
         (with-collection db "reservations"
                          (find {:date (:date change-map)})))))))

  (defn add-reservations [{:keys [event]}]
    (let [[key change-map] event]
      (if (:_id change-map)
        (mc/update-by-id db "reservations"
                         (ObjectId. (:_id change-map))
                         (dissoc change-map :_id))
        (mc/insert db "reservations" change-map))
      (str
       (vec
        (map
         #(assoc % :_id (str (:_id %)))
         (with-collection db "reservations"
                          (find {:date (:date change-map)})))))))

  (defn get-members-with-id [{:keys [event]}]
    (let [[key change-map] event]
      (vec
       (map
        #(dissoc % :_id)
        (with-collection db "members"
                         (find (if (not= [] change-map)
                                 {$or
                                  (vec
                                   (map (fn [a] (assoc {} :id a))
                                        change-map))}
                                 {})))))))

  (defn get-member-with-id [{:keys [event]}]
    (let [[key change-map] event]
      (dissoc
        (mc/find-one-as-map
          db "members"
          {:id (:id change-map)})
        :_id)))



  (defn get-dungeon []
     (vec
      (map
       #(dissoc % :_id)
       (with-collection db "dungeon")))))



(defn format-date [date]
  (let
    [date-time (clojure.string/split date #"T")
     year (clojure.string/join (first (split-at 4 (first date-time))))
     month (clojure.string/join (first (split-at 2 (second (split-at 4 (first date-time))))))
     day (clojure.string/join (second (split-at 2 (second (split-at 4 (first date-time))))))
     hour (clojure.string/join (first (split-at 2 (second date-time))))
     minute (clojure.string/join (first (split-at 2 (second (split-at 2 (second date-time))))))]
    (str year "." month "." day " - " hour ":" minute)))


(defn save-statistics []
  (let [wb (xls/create-workbook "Számlák"
                            (conj (vec (map #(vector (format-date (:start %))
                                                     (format-date (:finish %))
                                                     (:price %)
                                                     (:member-id %))
                                            (get-payed-invoices)))))




        sheet (xls/select-sheet "Számlák" wb)
        header-row (first (xls/row-seq sheet))]
    (xls/set-row-style! header-row (xls/create-cell-style! wb {:background :yellow,
                                                               :font {:bold true}}))
    (xls/save-workbook! "invoices.xlsx" wb)))


;; We can watch this atom for changes if we like
(add-watch connected-uids :connected-uids
           (fn [_ _ old new]
             (when (not= old new)
               (infof "Connected uids change: %s" new))))

(defn login-handler
  "Here's where you'll add your server-side login/auth procedure (Friend, etc.).
  In our simplified example we'll just always successfully authenticate the user
  with whatever user-id they provided in the auth request."
  [ring-req]
  (let [{:keys [session params]} ring-req
        {:keys [user-id user-pass]} params] {:status 200 :session (assoc session :uid user-id)}))

;;;; dungeon/get-dungeon server>user async push examples


(defn random-stuff []
  (doseq [uid (:any @connected-uids)]
    (chsk-send! uid [:count/clicks {:valami "más"}])))

(defn count-clicks []
  (doseq [uid (:any @connected-uids)]

    (reset! clicks (inc @clicks))
    (chsk-send! uid [:count/clicks {:number @clicks}])))

(defn test-fast-server>user-pushes
  "Quickly pushes 100 events to all connected users. Note that this'll be
  fast+reliable even over Ajax!"
  []
  (doseq [uid (:any @connected-uids)]
    (doseq [i (range 100)]
      (chsk-send! uid [:fast-push/is-fast (str "hello " i "!!")]))))

(comment (test-fast-server>user-pushes)

         (defonce broadcast-enabled?_ (atom true))

         (let [broadcast!
               (fn [i]
                 (let [uids (:any @connected-uids)]
                   (debugf "Broadcasting server>user: %s uids" (count uids))
                   (doseq [uid uids]
                     (chsk-send! uid
                                 [:dungeon/get-dungeon
                                  {:what-is-this "Paul async broadcast pushed from server"
                                   :how-often "Every 10 seconds"
                                   :to-whom uid
                                   :how-many (str uids)
                                   :connected-users (str (second (:any @connected-uids)))
                                   :hmm "halika"
                                   :i i}]))))]

           (go-loop [i 0]
             (<! (async/timeout 10000))
             (when @broadcast-enabled?_ (broadcast! i))
             (recur (inc i)))))

;;;; Sente event handlers

(defmulti -event-msg-handler
  "Multimethod to handle Sente `event-msg`s"
  :id) ; Dispatch on event-id


(defn event-msg-handler
  "Wraps `-event-msg-handler` with logging, error catching, etc."
  [{:as ev-msg :keys [id ?data event]}]
  (-event-msg-handler ev-msg)) ; Handle event-msgs on a single thread
  ;; (future (-event-msg-handler ev-msg)) ; Handle event-msgs on a thread pool


(defmethod -event-msg-handler
  :default ; Default/fallback case (no other matching handler)
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (let [session (:session ring-req)
        uid     (:uid     session)]
    (debugf "Unhandled event: %s" event)
    (when ?reply-fn
      (?reply-fn {:umatched-event-as-echoed-from-from-server event}))))

(defmethod -event-msg-handler :example/test-rapid-push
  [ev-msg] (test-fast-server>user-pushes))

(defmethod -event-msg-handler :example/button2
  [ev-msg] (random-stuff))

(defmethod -event-msg-handler :dungeon/get-dungeon
  [{:as ev-msg :keys [?reply-fn]}]
  (?reply-fn (get-dungeon)))

(defmethod -event-msg-handler :dungeon/add-invoice
  [{:as ev-msg :keys [?reply-fn]}]
  (add-invoice ev-msg)
  (?reply-fn true))

(defmethod -event-msg-handler :dungeon/add-reservations
  [{:as ev-msg :keys [?reply-fn]}]
  (?reply-fn (add-reservations ev-msg)))

(defmethod -event-msg-handler :dungeon/remove-reservations
  [{:as ev-msg :keys [?reply-fn]}]
  (?reply-fn (remove-reservations ev-msg)))

(defmethod -event-msg-handler :dungeon/get-reservations
  [{:as ev-msg :keys [?reply-fn]}]
  (?reply-fn (get-reservations ev-msg)))

(defmethod -event-msg-handler :dungeon/add-member
  [ev-msg] (add-member ev-msg))

(defmethod -event-msg-handler :dungeon/remove-member
  [ev-msg] (remove-member ev-msg))

(defmethod -event-msg-handler :dungeon/update-member
  [ev-msg] (update-member ev-msg))

(defmethod -event-msg-handler :dungeon/get-max-id
  [ev-msg] (get-max-id))

(defmethod -event-msg-handler :dungeon/season-pass
  [{:as ev-msg :keys [?reply-fn]}]
  (season-pass ev-msg)
  (?reply-fn true))

(defmethod -event-msg-handler :dungeon/get-invoices
  [{:as ev-msg :keys [?reply-fn]}] (?reply-fn (get-invoices)))

(defmethod -event-msg-handler :dungeon/modify-invoice
  [{:as ev-msg :keys [?reply-fn]}]
  (modify-invoice ev-msg)
  (?reply-fn true))

(defmethod -event-msg-handler :dungeon/get-members
  [{:as ev-msg :keys [?reply-fn]}] (?reply-fn (get-members ev-msg)))

(defmethod -event-msg-handler :dungeon/add-to-waiting-pool
  [ev-msg] (add-to-waiting-pool ev-msg))

(defmethod -event-msg-handler :dungeon/remove-from-waiting-pool
  [ev-msg] (remove-from-waiting-pool ev-msg))

(defmethod -event-msg-handler :dungeon/get-waiting-pool
  [ev-msg] (get-waiting-pool))

(defmethod -event-msg-handler :dungeon/get-members-with-id
  [{:as ev-msg :keys [?reply-fn]}]
  (?reply-fn (get-members-with-id ev-msg)))

(defmethod -event-msg-handler :dungeon/get-member-with-id
  [{:as ev-msg :keys [?reply-fn]}]
  (?reply-fn (get-member-with-id ev-msg)))

(defmethod -event-msg-handler :dungeon/change
  [{:as ev-msg :keys [?reply-fn]}]
  (dungeon-change ev-msg))
        ;(?reply-fn "mifasz"))

(defmethod -event-msg-handler :example/count-clicks
  [ev-msg] (count-clicks))

(comment
  (defmethod -event-msg-handler :example/toggle-broadcast
    [{:as ev-msg :keys [?reply-fn]}]
    (let [loop-enabled? (swap! broadcast-enabled?_ not)]
      (?reply-fn loop-enabled?))))

;; TODO Add your (defmethod -event-msg-handler <event-id> [ev-msg] <body>)s here...

;;;; Sente event router (our `event-msg-handler` loop)

(defonce router_ (atom nil))
(defn  stop-router! [] (when-let [stop-fn @router_] (stop-fn)))
(defn start-router! []
  (stop-router!)
  ;(start-example-broadcaster!)
  (reset! router_
          (sente/start-server-chsk-router!
           ch-chsk event-msg-handler)))
