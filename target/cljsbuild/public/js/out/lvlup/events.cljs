(ns lvlup.events
  (:require
   [ajax.core :refer [GET POST]]
   [cljs.reader :refer [read-string]]
   [clojure.string :as str]
   [clojure.set]
   [goog.string :as gstring]
   [goog.string.format]
   [re-frame.core :refer [reg-event-db reg-event-fx inject-cofx path trim-v
                          after debug dispatch]]))

(reg-event-db
 :initialize
 (fn [_ _]
   {:system-map []
    :invoices []
    :max-id 0
    :active-member 0
    :connection-state false
    :reservation-data {:name ""
                       :date ""

                       :start-hour ""
                       :finish-hour ""
                       :system-name []}
    :modal-data {}
    :waiting-pool []
    :sidenav-state 1
    :search-member ""
    :actual-page nil
    :players []
    :reservations []
    :date (js/Date.)
    :time-table nil
    :loading false
    :counter 0}))

(reg-event-db
 :set-search-member
 (fn [db [_ the-map]] (assoc db :search-member the-map)))

(reg-event-db
 :set-connection-state
 (fn [db [_ the-map]] (assoc db :connection-state the-map)))

(reg-event-db
 :set-waiting-pool
 (fn [db [_ the-map]]
   (assoc db :waiting-pool the-map)))

(reg-event-db
 :set-loading
 (fn [db [_ the-map]]
   (assoc db :loading the-map)))

(reg-event-db
 :set-active-member
 (fn [db [_ the-map]]
   (assoc db :active-member the-map)))

(reg-event-db
 :set-reservation-data
 (fn [db [_ what-key the-map]]
   (assoc db :reservation-data (assoc (:reservation-data db) what-key the-map))))

(reg-event-db
 :init-reservation-data
 (fn [db [_ what-key the-map]]
   (assoc db :reservation-data {:name ""
                                :date ""

                                :start-hour ""
                                :finish-hour ""
                                :system-name []})))

(reg-event-db
 :set-system
 (fn [db [_ the-map]]
   (assoc db :system-map (into [] (conj (remove #(= (:name %) (:name the-map)) (:system-map db)) the-map)))))

(reg-event-db
 :set-max-id
 (fn [db [_ number]]
   (assoc db :max-id number)))

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
   (assoc db :invoices the-map)))

(reg-event-db
 :set-sidenav-state
 (fn [db [_ the-map]]
   (assoc db :sidenav-state the-map)))

(reg-event-db
 :set-members
 (fn [db [_ the-map]]
      ;  (.log js/console (str (set (clojure.set/union (:players db) the-map))))
   (assoc db :players (set (clojure.set/union (:players db) the-map)))))

(reg-event-db
 :remove-member
 (fn [db [_ the-map]]
        ;(.log js/console (str (:players (assoc db :players (clojure.set/union (:players db) the-map)))))
        ;(.log js/console (str (remove #(some (fn [a] (= (:id %) (:id a))) the-map)) (:players db)))
   (assoc db :players (remove
                       #(some
                         (fn [a] (= (:id %) (:id a)))
                         the-map)
                       (:players db)))))

(reg-event-db
 :delete-reservation
 (fn [db [_ id]]
   (POST "/delete-reservation"
         {:params id
          :handler #(do
                      (dispatch [:get-reservations])
                      (.notification js/UIkit "Foglalás törölve!" (clj->js {"pos" "top-right"})))
          :error-handler #(js/alert "semmi")})
   db))

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
