(ns lvlup.events
  (:require
   [ajax.core :refer [GET POST]]
   [cljs.reader :refer [read-string]]
   [clojure.string :as str]
   [taoensso.sente  :as sente :refer (cb-success?)]
   [lvlup.sente :refer [chsk-send! start-router!]]
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
    :players-data []
    :max-id 0

    :active-member 0
    :connection-state false
    :reservation-modal {:name ""
                        :id ""
                        :date (js/Date.)
                        :start 0
                        :finish 0
                        :places []}
    :lazy-number 20
    :modal-data nil
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
 :set-any-data
 (fn [db [_ the-key the-map]]
   (assoc db the-key the-map)))

(reg-event-db
 :set-search-member
 (fn [db [_ the-map]]
   (dispatch [:dungeon/get-members
              {:number 0 :search the-map}])
   (assoc db :search-member the-map :players [])))

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
 :dungeon/get-reservations
 (fn [db [_ the-map]]
   (chsk-send! [:dungeon/get-reservations the-map]
               8000 ; Timeout
               ;; Optional callback:
               (fn [reply] ; Reply is arbitrary Clojure data
                 (if (cb-success? reply)
                   (dispatch [:set-any-data
                              :reservations
                              (read-string reply)])))) ; Checks for :chsk/closed, :chsk/timeout, :chsk/error
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
                   (dispatch [:set-members reply]))))
   db))

(reg-event-db
 :dungeon/get-members-with-id
 (fn [db [_ the-map]]
   ;(.log js/console (str "szia" the-map))
   (chsk-send! [:dungeon/get-members-with-id the-map]
               8000 ; Timeout
               ;; Optional callback:
               (fn [reply] ; Reply is arbitrary Clojure data
                ; (.log js/console (str reply))
                 (.log js/console (str "hello" the-map))
                 (if (cb-success? reply) ; Checks for :chsk/closed, :chsk/timeout, :chsk/error
                   (dispatch [:set-players-data reply]))))
   db))

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
   (.log js/console (str what-key))
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
 :set-lazy-number
 (fn [db [_ the-map]]
   (assoc db :lazy-number the-map)))

(reg-event-db
 :set-players-data
 (fn [db [_ the-map]]
      ;  (.log js/console (str (set (clojure.set/union (:players db) the-map))))
   (assoc db :players-data the-map)))

(reg-event-db
 :set-members
 (fn [db [_ the-map]]
      ;  (.log js/console (str (set (clojure.set/union (:players db) the-map))))
   (assoc db :players (concat (:players db) the-map))))

(reg-event-db
 :remove-member
 (fn [db [_ the-map]]
   (assoc db :players (vec
                       (remove
                        #(= (:id %) the-map)
                        (:players db))))))

(reg-event-db
 :replace-member
 (fn [db [_ the-map]]
   (assoc db :players (vec
                       (conj
                        (remove
                         #(= (:id %) (:id the-map))
                         (:players db))
                        the-map)))))

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
