(ns lvlup.crusader
  "Official Sente reference example: server"
  {:author "Peter Taoussanis (@ptaoussanis)"}
  (:require
   [clojure.string     :as str]
   [clojure.data     :as data]
   [taoensso.nippy :as nippy]
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
   [lvlup.db :as db]
   [differ.core :as differ]
   [hiccup.page :refer [include-js include-css html5]]
   [org.httpkit.server :as http-kit]
   [taoensso.sente.server-adapters.http-kit :refer (get-sch-adapter)]
   [taoensso.sente.packers.transit :as sente-transit]))


(reset! sente/debug-mode?_ true) ; Uncomment for extra debug info

(let [;; Serialization format, must use same val for client + server:
      packer :edn ; Default packer, a good choice in most cases
      ;; (sente-transit/get-transit-packer) ; Needs Transit dep

      chsk-server
      (sente/make-channel-socket-server!
       (get-sch-adapter)
       {:handshake-data-fn (fn [ring-req] {:role (:role (:session ring-req)) :city (:city (:session ring-req))})
        :packer packer})

      {:keys [ch-recv send-fn connected-uids
              ajax-post-fn ajax-get-or-ws-handshake-fn]}
      chsk-server]

  (def ring-ajax-post                ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-chsk                       ch-recv) ; ChannelSocket's receive channel
  (def chsk-send!                    send-fn) ; ChannelSocket's send API fn
  (def connected-uids                connected-uids)) ; Watchable, read-only atom


(defn send-all [message]
  (let [uids (:any @connected-uids)]
    (doseq [uid uids]
      (chsk-send! uid message))))





(defn broadcast-city
  "Broadcast data to all connected clients"
  [city data]
  (let [city-users (db/get-users-by-city city)]
    (doseq [uid (:any @connected-uids)]
      (if (some #(= uid %) city-users)
        (do (chsk-send! uid data)
            (chsk-send! uid [:dungeon/bug-check city]))))))

(add-watch db/local-db :watch-local
           (fn [k reference old-state new-state]
             (let [the-diff (differ/diff old-state new-state)]
               (doseq [city db/cities]
                 (if (or (contains? (second the-diff) city)
                         (contains? (first the-diff) city))
                   (broadcast-city
                     city
                     [:state/diff
                      (differ/diff
                        (get old-state city)
                        (get new-state city))]))))))


(defn format-date [date]
  (let
    [date-time (clojure.string/split date #"T")
     year (clojure.string/join (first (split-at 4 (first date-time))))
     month (clojure.string/join (first (split-at 2 (second (split-at 4 (first date-time))))))
     day (clojure.string/join (second (split-at 2 (second (split-at 4 (first date-time))))))
     hour (clojure.string/join (first (split-at 2 (second date-time))))
     minute (clojure.string/join (first (split-at 2 (second (split-at 2 (second date-time))))))]
    (str year "." month "." day " - " hour ":" minute)))


(comment (defn save-statistics []
           (let [wb (xls/create-workbook "Számlák"
                                     (conj (vec (map #(vector (format-date (:start %))
                                                              (format-date (:finish %))
                                                              (:price %)
                                                              (:member-id %))
                                                     (db/get-payed-invoices)))))




                 sheet (xls/select-sheet "Számlák" wb)
                 header-row (first (xls/row-seq sheet))]
             (xls/set-row-style! header-row (xls/create-cell-style! wb {:background :yellow,
                                                                        :font {:bold true}}))
             (xls/save-workbook! "invoices.xlsx" wb))))


;; We can watch this atom for changes if we like
(add-watch connected-uids :connected-uids
           (fn [_ _ old new]
             (when (not= old new)
               (infof "Connected uids change: %s" new))))

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



(defn flatten-map [path the-key m]
  (if (map? m)
    (mapcat (fn [[k v]] (flatten-map (conj path k) k v)) m)
    [[path the-key m]]))

(defn find-in [coll x]
  (->> (flatten-map [] :member-id coll)
       (filter (fn [[_ the-key v]] (= the-key x)))
       (map (fn [a] (assoc {} :key-vec (first a)
                              :value (nth a 2))))))

(defn find-all-nested
  [m k]
  ;(.log js/console "érdekes: " (str (tree-seq (or map? vector?) vals m)))
  (->> (tree-seq map? vals m)
       (filter map?)
       (keep k)))

(defmethod -event-msg-handler :discounts/add-discount
  [{:as ev-msg :keys [?reply-fn ring-req]}]
  (db/add-discount ev-msg ring-req))

(defmethod -event-msg-handler :discounts/remove-discount
  [{:as ev-msg :keys [?reply-fn ring-req]}]
  (db/remove-discount ev-msg ring-req))

(defmethod -event-msg-handler :dungeon/add-invoice
  [{:as ev-msg :keys [?reply-fn ring-req]}]
  (?reply-fn (db/add-invoice ev-msg ring-req)))

(defmethod -event-msg-handler :dungeon/add-reservations
  [{:as ev-msg :keys [?reply-fn ring-req]}]
  (?reply-fn (db/add-reservations ev-msg ring-req)))

(defmethod -event-msg-handler :dungeon/remove-reservations
  [{:as ev-msg :keys [?reply-fn ring-req]}]
  (?reply-fn (db/remove-reservations ev-msg ring-req)))

(defmethod -event-msg-handler :dungeon/get-reservations
  [{:as ev-msg :keys [?reply-fn ring-req]}]
  (?reply-fn (db/get-reservations ev-msg ring-req)))

(defmethod -event-msg-handler :dungeon/add-member
  [{:as ev-msg :keys [?reply-fn ring-req]}]
  (?reply-fn (db/add-member ev-msg ring-req)))


(defmethod -event-msg-handler :dungeon/update-member
  [{:as ev-msg :keys [?reply-fn ring-req]}]
  (broadcast-city (-> ring-req :session :city)  [:dungeon/replace-member (db/update-member ev-msg ring-req)]))

(defmethod -event-msg-handler :dungeon/season-pass
  [{:as ev-msg :keys [?reply-fn ring-req]}]
  (send-all [:dungeon/replace-member
             (db/season-pass ev-msg ring-req)])
  (?reply-fn true))

(defmethod -event-msg-handler :state/get-state
  [{:as ev-msg :keys [?reply-fn ring-req]}]
  (if
    (= "admin" (:role (:session ring-req)))
    (?reply-fn (find-all-nested @db/local-db :member-id))
    (?reply-fn (get @db/local-db (:city (:session ring-req))))))

(defmethod -event-msg-handler :dungeon/get-invoices
  [{:as ev-msg :keys [?reply-fn ring-req]}]
  (?reply-fn (db/get-invoices ev-msg ring-req)))

(defmethod -event-msg-handler :dungeon/modify-invoice
  [{:as ev-msg :keys [?reply-fn ring-req]}]
  (?reply-fn (db/modify-invoice ev-msg ring-req)))

(defmethod -event-msg-handler :dungeon/get-members
  [{:as ev-msg :keys [?reply-fn ring-req]}] (?reply-fn (db/get-members ev-msg ring-req)))

(defmethod -event-msg-handler :bosses/get-statistics-data
  [{:as ev-msg :keys [?reply-fn ring-req]}]
  (?reply-fn (str (vec (db/get-statistic (-> ring-req :session :city)
                                         (:days (-> ev-msg :event second))
                                         (:dates (-> ev-msg :event second)))))))

(defmethod -event-msg-handler :dungeon/get-member-with-id
  [{:as ev-msg :keys [?reply-fn ring-req event]}]
  (?reply-fn (db/get-member-with-id (second event)
                                    ring-req)))

(defmethod -event-msg-handler :crusader/add-user
  [{:as ev-msg :keys [?reply-fn]}]
  (db/add-user ev-msg))
(defmethod -event-msg-handler :crusader/remove-user
  [{:as ev-msg :keys [?reply-fn]}]
  (db/remove-user ev-msg))
(defmethod -event-msg-handler :crusader/get-users
  [{:as ev-msg :keys [?reply-fn]}]
  (?reply-fn (db/get-users ev-msg)))
(defmethod -event-msg-handler :dungeon/change
  [{:as ev-msg :keys [?reply-fn ring-req]}]
  (db/dungeon-change ev-msg ring-req))



(defonce router_ (atom nil))
(defn  stop-router! [] (when-let [stop-fn @router_] (stop-fn)))
(defn start-router! []
  (stop-router!)
  ;(start-example-broadcaster!)
  (reset! router_
          (sente/start-server-chsk-router!
           ch-chsk event-msg-handler)))
