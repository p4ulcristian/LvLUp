(ns lvlup.events
  (:require
   [ajax.core :refer [GET POST]]
   [cljs.reader :refer [read-string]]
   [clojure.string :as str]
   [lvlup.sente :refer [chsk-send! start-router!]]
   [clojure.set]
   [lvlup.utils :as utils :refer [notification]]
   [goog.string :as gstring]
   [cljs-time.core :as tcore]
   [cljs-time.format :as tformat]
   [differ.core :as differ]
   [cljs-time.coerce :as coerce]
   [goog.string.format]
   [re-frame.core :refer [reg-event-db reg-event-fx inject-cofx path trim-v
                          after debug dispatch]]
   [taoensso.sente  :as sente :refer (cb-success?)]))

(reg-event-db
 :initialize
 (fn [_ _]
   {:app-state nil
    :users {}
    :invoices {}
    :open-menu false
    :active-member 0
    :active-system nil
    :connection-state false
    :reservation-modal {:name ""
                        :id ""
                        :date (js/Date.)
                        :start 0
                        :finish 0
                        :places []}
    :checkout-sort-type :type
    :checkout-sort-direction :down
    :now (tcore/now)
    :lazy-number 20
    :search-range []
    :search-number 0
    :modal-data nil
    :search-member ""
    :actual-page "home-page"
    :players {}
    :search-pool []
    :reservations []
    :date (js/Date.)
    :time-table nil
    :loading false
    :counter 0}))


(defn flatten-map [path the-key m]
  (if (map? m)
    (mapcat (fn [[k v]] (flatten-map (conj path k) k v)) m)
    [[path the-key m]]))

(defn find-in [coll x]
  (->> (flatten-map [] :member-id coll)
       (filter (fn [[_ the-key v]] (= the-key x)))
       (map (fn [a] (assoc {} :key-vec (first a))))))


(defn find-all-nested
  [m k]
  ;(.log js/console "érdekes: " (str (tree-seq (or map? vector?) vals m)))
  (->> (tree-seq map? vals m)
       (filter map?)
       (keep k)))

(defn merge-recur [the-keys coll func]
  (if (= 0 (count the-keys))
    coll
    (merge-recur
      (rest the-keys)
      (assoc-in coll
                (first the-keys)
        (func (get-in coll (first the-keys))))
      func)))

(defn process-dates [new-state]
  (let [remove-prices-key-vec (fn [coll] (remove #(= (first %) :prices) coll))
        all-routes (remove-prices-key-vec
                     (mapcat
                       (fn [a]
                         (map :key-vec (find-in new-state a)))
                       [:start :finish]))]
    (merge-recur all-routes new-state (fn [a] (tformat/parse a)))))

(defn process-dates-str [new-state]
  (let [all-routes (mapcat
                     (fn [a]
                       (map :key-vec (find-in new-state a)))
                     [:start :finish])]
    (merge-recur all-routes new-state (fn [a] (str a)))))

;012123454
;20181201T123030.012Z
(defn convert-to-clojurescript-time [ido]
  (if (= 13 (count ido))
    (js/String (coerce/from-long (js/parseInt ido)))
    ido))

(defn iterate-convert [players]
  (reduce merge {}
          (map #(if (:start (second %))
                  (assoc {} (first %) (assoc (second %)
                                        :start (convert-to-clojurescript-time
                                                 (str
                                                   (:start (second %))))))
                  (assoc {} (first %) (second %)))
               players)))

(defn transfer [the-number db]
  (let [[filtered-system] (filter #(= the-number (:number %))
                                  (map val (:dungeon (:app-state db))))
        [filtered-system2] (filter #(= (:active-system db)
                                       (:number %))
                                   (map val (:dungeon (:app-state db

                                                              (:system-map db)))))]
    (notification (str  (:active-system db)" <-> " the-number))
    (.log js/console (str filtered-system " " filtered-system2))
    ;(notification (str (:color filtered-system2) " - "(:color filtered-system)))
    (if
      (or
         (and
          (= "pc" (:type filtered-system))
          (= "pc" (:type filtered-system2)))
         (and
          (= "xbox" (:type filtered-system))
          (= "xbox" (:type filtered-system2)))
         (and
          (= "ps" (:type filtered-system))
          (= "ps" (:type filtered-system2)))
         (and
          (= "xbox" (:type filtered-system))
          (= "ps" (:type filtered-system2)))
         (and
          (= "ps" (:type filtered-system))
          (= "xbox" (:type filtered-system2))))

      (do
        (dispatch [:set-active-system (:number filtered-system)])
        (dispatch
           [:dungeon/change
            (assoc filtered-system
              :players (iterate-convert (:players filtered-system2))
              :color (:color filtered-system2))])

        (dispatch
           [:dungeon/change
            (assoc filtered-system2
                :players (iterate-convert (:players filtered-system))
                :color (:color filtered-system))]))


      (notification "Csak két azonos típusú rendszert tudsz cserélni!"))))

(reg-event-db
  :transfer
  (fn [db [_ the-map]]
    (transfer the-map db)
    db))

(reg-event-db
 :set-any-data
 (fn [db [_ the-key the-map]]
   (assoc db the-key the-map)))

(reg-event-db
  :set-active-system
  (fn [db [_ the-map]]
    (assoc db :active-system the-map)))

(reg-event-db
  :open-menu
  (fn [db [_ bool]]
    (assoc db :open-menu bool)))

(reg-event-db
 :set-search-member
 (fn [db [_ the-map]]
   (dispatch [:dungeon/get-members
              {:number 0 :search the-map}])
   (assoc db :search-member the-map
             :search-range []
             :search-number 20)))

(reg-event-db
 :set-connection-state
 (fn [db [_ the-map]] (assoc db :connection-state the-map)))

(reg-event-db
  :set-search-range
  (fn [db [_ the-map]]
    (assoc db :search-range (concat (:search-range db) the-map))))


(reg-event-db
 :set-waiting-pool
 (fn [db [_ the-map]]
   (assoc db :waiting-pool the-map)))

(reg-event-db
  :set-checkout-sort-type
  (fn [db [_ type direction]]
    (assoc db :checkout-sort-type type
              :checkout-sort-direction direction)))

(reg-event-db
 :set-loading
 (fn [db [_ the-map]]
   (assoc db :loading the-map)))

(reg-event-db
 :set-active-member
 (fn [db [_ the-map]]
   (assoc db :active-member the-map)))


(reg-event-db
  :add-discount
  (fn [db [_ the-map]]
    (chsk-send! [:discounts/add-discount [(str (random-uuid)) the-map]])
    db))

(reg-event-db
  :remove-discount
  (fn [db [_ the-map]]
    (chsk-send! [:discounts/remove-discount the-map])
    db))

(reg-event-db
 :dungeon/get-reservations
 (fn [db [_ the-map]]
   (chsk-send! [:dungeon/get-reservations the-map]
               8000 ; Timeout
               ;; Optional callback:
               (fn [reply] ; Reply is arbitrary Clojure data
                 (if (cb-success? reply)
                   (dispatch [:set-any-data
                              :reservations
                              (read-string reply)])
                   (.log js/console "nem siker")))) ; Checks for :chsk/closed, :chsk/timeout, :chsk/error
   db))

(reg-event-db
 :dungeon/remove-reservations
 (fn [db [_ the-map]]
   (chsk-send! [:dungeon/remove-reservations the-map]
               8000 ; Timeout
               ;; Optional callback:
               (fn [reply] ; Reply is arbitrary Clojure data
                 (if (cb-success? reply) ; Checks for :chsk/closed, :chsk/timeout, :chsk/error
                   (dispatch [:set-any-data :reservations (read-string reply)]))))
   db))

(reg-event-db
 :dungeon/get-members
 (fn [db [_ the-map]]
   (chsk-send! [:dungeon/get-members the-map]
               8000 ; Timeout
               ;; Optional callback:
               (fn [reply] ; Reply is arbitrary Clojure data
                 ;(.log js/console (str reply))
                 (if (cb-success? reply) ; Checks for :chsk/closed, :chsk/timeout, :chsk/error
                   (do
                     (dispatch [:set-search-range (vec (map :id reply))])
                     (dispatch [:add-player (reduce merge (map #(assoc {} (:id %) %)
                                                               reply))])))))
   (assoc db :search-number (+ 20 (:search-number db)))))





(reg-event-db
  :add-to-cart
  (fn [db [_ item]]
    (let [cart (:cart db)]
      (assoc db :cart (if (some #(= item %)
                                cart)
                          (remove #(= % item)
                                  (:cart db))
                          (conj cart item))))))



(reg-event-db
  :add-player
  (fn [db [_ the-map]]
    (assoc db
      :players
      (merge (:players db)
             (if-not (map? the-map)
               (reduce
                 merge
                 (map #(assoc {} (:id %) %)
                      the-map))
               the-map)))))


(reg-event-db
  :dungeon/get-member-with-id
  (fn [db [_ the-map]]
    (if-not (some #(= (:id %) the-map)
                  (:players db))
      (chsk-send! [:dungeon/get-member-with-id the-map]
                  8000
                  (fn [reply]
                    (if (cb-success? reply)
                      (do
                        (dispatch [:add-player reply]))))))
    db))


(reg-event-db
  :set-user-data
  (fn [db [_ the-map]]
    (assoc db :user the-map)))

(reg-event-db
 :dungeon/add-reservations
 (fn [db [_ the-map]]
   (chsk-send! [:dungeon/add-reservations the-map]
               8000 ; Timeout
               ;; Optional callback:
               (fn [reply] ; Reply is arbitrary Clojure data
                 (if (cb-success? reply) ; Checks for :chsk/closed, :chsk/timeout, :chsk/error
                   (dispatch [:set-any-data :reservations (read-string reply)]))))
   db))

(reg-event-db
 :set-reservation-modal
 (fn [db [_ what-key the-map]]

   (case what-key

     "replace" (assoc db :reservation-modal (assoc the-map :date (js/Date. (:date the-map))))
     "reset" (assoc db :reservation-modal {:places []
                                           :name ""
                                           :id ""
                                           :date (:date db)
                                           :start 64
                                           :finish 84})

     :date (assoc db
                  :reservation-modal (assoc (:reservation-modal db) :date (js/Date. the-map))
                  :date (js/Date. the-map))
     (assoc db :reservation-modal (assoc (:reservation-modal db) what-key the-map)))))

(reg-event-db
 :set-system
 (fn [db [_ the-map]]
   (assoc db :system-map
             (into []
                   (conj
                     (remove
                       #(= (:name %)
                           (:name the-map))
                       (:system-map db))
                     the-map)))))



(reg-event-db
 :set-actual-page
 (fn [db [_ page]]
   (assoc db :actual-page page)))

(reg-event-db
 :set-systems
 (fn [db [_ the-map]]
   (assoc db :system-map the-map)))

(reg-event-db
 :set-invoices
 (fn [db [_ the-map]]
   (assoc db :invoices
     (merge
       (:invoices db)
       (reduce merge
               (map #(assoc {} (:id %) (assoc % :start
                                                (tformat/parse (:start %))
                                                :finish
                                                (tformat/parse (:finish %))
                                                :pay-date
                                                (tformat/parse (:pay-date %))
                                                :open-date
                                                (tformat/parse (:open-date %))))

                     the-map))))))

(reg-event-db
 :set-sidenav-state
 (fn [db [_ the-map]]
   (assoc db :sidenav-state the-map)))

(reg-event-db
 :set-lazy-number
 (fn [db [_ the-map]]
   (assoc db :lazy-number the-map)))



(reg-event-db
 :set-members
 (fn [db [_ the-map]]
      ;  (.log js/console (str (set (clojure.set/union (:players db) the-map))))
   (assoc db :players (concat (:players db) the-map))))

(reg-event-db
  :now
  (fn [db [_ the-map]]
     ;  (.log js/console (str (set (clojure.set/union (:players db) the-map))))
    (assoc db :now the-map)))

(reg-event-db
 :remove-member
 (fn [db [_ the-map]]
   (assoc db :players (vec
                       (remove
                        #(= (:id %) the-map)
                        (:players db))))))

(reg-event-db
 :set-reservations
 (fn [db [_ reservations]]
   (assoc db :reservations reservations)))

(reg-event-db
 :set-modal-data
 (fn [db [_ reservations]]
   (assoc db :modal-data reservations)))

(reg-event-db
 :set-date
 (fn [db [_ date]]
   (assoc db :date (js/Date. date))))


(reg-event-db
  :dungeon/change
  (fn [db [_ the-map]]
    (let [the-map (process-dates-str the-map)]
      (chsk-send! [:dungeon/change the-map]
                  5000
                  (fn [reply] ; Reply is arbitrary Clojure data
                    (if (cb-success? reply)
                      ()))))
    ;(assoc-in db [:app-state :dungeon (:number the-map)] the-map)))
    db))




(reg-event-db
  :sit-back
  (fn [db [_ item]]
    (let [item (dissoc item :spent-time :datum-interval)
          system (get
                   (:dungeon (:app-state db))
                   (:number item))]
      (if (get (:players system)
               (:controller item))
        (notification "Már leültek a helyére :/")
        (do
          (.log js/console (str "mi is van?" (assoc-in system [:players (:controller item)]
                                                       {:type (:type item)
                                                        :member-id (:member-id item)
                                                        :start (convert-to-clojurescript-time
                                                                 (str (:start item)))})))
          (chsk-send! [:dungeon/change
                       (assoc-in (assoc system :players
                                               (iterate-convert (:players system)))
                                 [:players (:controller item)]
                                 {:type (:type item)
                                  :member-id (:member-id item)
                                  :start (convert-to-clojurescript-time
                                           (str (:start item)))})])

          (chsk-send! [:dungeon/modify-invoice
                       (assoc
                         item :start (convert-to-clojurescript-time
                                       (str (:start item)))
                              :finish (convert-to-clojurescript-time
                                        (str (:finish item))))]
                      5000
                      (fn [reply] ; Reply is arbitrary Clojure data
                        (if (cb-success? reply)
                          (dispatch [:set-loading false])))))))
    db))

(reg-event-db
  :dungeon/modify-invoice
  (fn [db [_ the-map]]
    (chsk-send! [:dungeon/modify-invoice the-map]
                5000
                (fn [reply] ; Reply is arbitrary Clojure data
                  (if (cb-success? reply)
                    (dispatch [:set-loading false]))))

    db));(assoc db :loading true)))

(reg-event-db
  :set-statistic-data
  (fn [db [_ id the-map]]
     (-> db
         (assoc-in [:statistic id :data]
                   (cljs.reader/read-string the-map))
         (assoc-in [:statistic id :loading?]
                   false))))

(reg-event-db
  :remove-statistic
  (fn [db [_ id]]
    (assoc db :statistic (dissoc (:statistic db)
                                 id))))

(reg-event-db
  :bosses/get-statistics-data
  (fn [db [_ id data]]
    (chsk-send! [:bosses/get-statistics-data
                 data]
                5000
                (fn [reply] ; Reply is arbitrary Clojure data
                  (if (cb-success? reply)
                    (dispatch [:set-statistic-data id reply])
                    (do
                      (.log js/console "mi a lekérés: " (str id " " data))
                      (.log js/console "mi a baj: " reply)))))
    (assoc-in db [:statistic id :loading?] true)))

(reg-event-db
  :dungeon/season-pass
  (fn [db [_ the-map]]
    (chsk-send! [:dungeon/season-pass the-map]
                5000
                (fn [reply] ; Reply is arbitrary Clojure data
                  (if (cb-success? reply)
                    (dispatch [:set-loading false]))))


    (assoc db :loading true)))

(reg-event-db
  :add-statistic
  (fn [db [_ id]]
    (assoc-in db [:statistic id] {:data nil})))

(reg-event-db
  :dungeon/add-invoice
  (fn [db [_ the-map]]
    (.log js/console (str "add-invoice-esete: " (str the-map)))
    (chsk-send! [:dungeon/add-invoice the-map]
                5000
                (fn [reply] ; Reply is arbitrary Clojure data
                  (if (cb-success? reply)
                    (.log js/console (str "add-invoice-válasz: "
                                          (str reply)))
                    (dispatch [:set-loading false]))))
    db))

(defn members-i-really-need [what-i-have what-i-need]
  (vec (remove
         (fn [a] (some
                   (fn [b] (= a b))
                   what-i-have))
         what-i-need)))


(reg-event-db
  :dungeon/get-invoices
  (fn [db [_ number]]
    (chsk-send! [:dungeon/get-invoices number]
                8000 ; Timeout
                ;; Optional callback:
                (fn [reply] ; Reply is arbitrary Clojure data
                  (if (cb-success? reply) ; Checks for :chsk/closed, :chsk/timeout, :chsk/error
                    (do
                      (dispatch [:dungeon/get-member-with-id
                                 (members-i-really-need
                                   (vec (map :id (:players db)))
                                   (vec (map :member-id reply)))])
                      (dispatch [:set-invoices reply]))
                    (js/console.log (str "Sikertelen számlalekérés: " reply)))))
                    ;  (dispatch [:dungeon/get-members-with-id  (vec (set (map :member-id reply)))])))))
    db))


(reg-event-db
  :crusader/remove-user
  (fn [db [_ change-map]]
    (chsk-send! [:crusader/remove-user change-map])
    db))



(reg-event-db
  :state/get-state
  (fn [db [_]]
    (let [member-ids (fn [new-state] (members-i-really-need
                                       (vec (map :id (:players db)))
                                       (vec (set (find-all-nested new-state :member-id)))))
          start (fn [new-state] (find-all-nested new-state :start))]
      (chsk-send! [:state/get-state]
                  8000
                  (fn [new-state]
                    (if (cb-success? new-state)
                      (do
                        ;(.log js/console (str (process-checkout new-state)))
                        (if-not (= 0 (count (member-ids new-state)))
                          (dispatch [:dungeon/get-member-with-id
                                     (member-ids new-state)]))
                        (dispatch [:set-any-data :app-state
                                   (process-dates new-state)])))))
      db)))



(reg-event-db
  :state/diff
  (fn [db [_ new-state]]
    (let [member-ids (members-i-really-need
                       (vec (map :id (:players db)))
                       (vec (set (find-all-nested (first new-state) :member-id))))]
      (if-not (= 0 (count member-ids))
        (dispatch [:dungeon/get-member-with-id
                   member-ids]))
      (assoc db :app-state (differ/patch
                             (:app-state db)
                             [(process-dates (first new-state))
                              (second new-state)])))))


(reg-event-db
  :crusader/add-user
  (fn [db [_ user-map]]
    (chsk-send! [:crusader/add-user user-map])
    db))

(reg-event-db
  :set-users
  (fn [db [_ the-map]]
    (assoc db :users the-map)))

(reg-event-db
  :crusader/get-users
  (fn [db [_]]
    (chsk-send! [:crusader/get-users]
                8000 ; Timeout
                (fn [reply] ; Reply is arbitrary Clojure data
                  (if (cb-success? reply) ; Checks for :chsk/closed, :chsk/timeout, :chsk/error
                    (do
                      (dispatch [:set-users reply])))))
    db))



