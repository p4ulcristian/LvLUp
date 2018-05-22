(ns lvlup.events
  (:require
   [ajax.core :refer [GET POST]]
   [cljs.reader :refer [read-string]]
   [clojure.string :as str]
   [taoensso.sente  :as sente :refer (cb-success?)]
   [lvlup.sente :refer [chsk-send! start-router!]]
   [clojure.set]
   [lvlup.utils :as utils]
   [goog.string :as gstring]
   [cljs-time.core :as tcore]
   [differ.core :as differ]
   [goog.string.format]
   [re-frame.core :refer [reg-event-db reg-event-fx inject-cofx path trim-v
                          after debug dispatch]]))

(reg-event-db
 :initialize
 (fn [_ _]
   {:app-state nil
    :users {}
    :system-map []
    :invoices []
    :max-id 0
    :open-menu false

    :active-member 0
    :connection-state false
    :reservation-modal {:name ""
                        :id ""
                        :date (js/Date.)
                        :start 0
                        :finish 0
                        :places []}
    :now (tcore/now)
    :lazy-number 20
    :modal-data nil
    :waiting-pool []
    :sidenav-state 1
    :search-member ""
    :actual-page nil
    :players []
    :search-pool []
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
  :open-menu
  (fn [db [_ bool]]
    (assoc db :open-menu bool)))

(reg-event-db
 :set-search-member
 (fn [db [_ the-map]]
   (dispatch [:dungeon/get-members
              {:number 0 :search the-map}])
   (assoc db :search-member the-map :search-pool [])))

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
                   (dispatch [:add-players reply]))))
   db))





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
      :search-pool (if (some
                         #(= (:id the-map) (:id %))
                         (:search-pool db))
                     (conj (remove #(= (:id the-map) (:id %))
                                   (:search-pool db))
                           the-map)
                     (:search-pool db))

      :players (conj
                 (remove #(= (:id the-map) (:id %))
                         (:players db))
                 the-map))))

(reg-event-db
  :add-players
  (fn [db [_ the-map]]
    (assoc db :search-pool (concat
                             (remove #(some (fn [a] (= (:id %) (:id a)))
                                            the-map)
                                     (:search-pool db))
                             the-map))))







(reg-event-db
  :dungeon/get-member-with-id
  (fn [db [_ the-map]]
    ;(.log js/console (str "szia" the-map))
    (if (not (some #(= (:id %) the-map) (:players db)))
      (chsk-send! [:dungeon/get-member-with-id {:id the-map}]
                  8000 ; Timeout
                  ;; Optional callback:
                  (fn [reply]
                    (if (cb-success? reply) ; Checks for :chsk/closed, :chsk/timeout, :chsk/error
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
  :dungeon/get-dungeon
  (fn [db [_]]


    (chsk-send! [:dungeon/get-dungeon]
                8000 ; Timeout
                ;; Optional callback:

                (fn [reply] ; Reply is arbitrary Clojure data
                  (if (cb-success? reply) ; Checks for :chsk/closed, :chsk/timeout, :chsk/error

                      (dispatch [:set-systems reply]))))


    db))


(reg-event-db
  :dungeon/change
  (fn [db [_ the-map]]


    (chsk-send! [:dungeon/change the-map]
                5000
                (fn [reply] ; Reply is arbitrary Clojure data
                  (if (cb-success? reply)
                    ())))


    db))

(reg-event-db
  :dungeon/modify-invoice
  (fn [db [_ the-map]]


    (chsk-send! [:dungeon/modify-invoice the-map]
                5000
                (fn [reply] ; Reply is arbitrary Clojure data
                  (if (cb-success? reply)
                    (dispatch [:set-loading false]))))


    (assoc db :loading true)))

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
  :dungeon/add-invoice
  (fn [db [_ the-map]]


    (chsk-send! [:dungeon/add-invoice the-map]
                5000
                (fn [reply] ; Reply is arbitrary Clojure data
                  (if (cb-success? reply)
                    (dispatch [:set-loading false]))))


    (assoc db :loading true)))

(reg-event-db
  :dungeon/get-invoices
  (fn [db [_]]

    (chsk-send! [:dungeon/get-invoices]
                8000 ; Timeout
                ;; Optional callback:
                (fn [reply] ; Reply is arbitrary Clojure data
                  (if (cb-success? reply) ; Checks for :chsk/closed, :chsk/timeout, :chsk/error
                    (do
                      (.log js/console (str reply))
                      (dispatch [:set-invoices reply])))))
                        ;(assoc db :open-menu false)))))
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
    (chsk-send! [:state/get-state]
                8000
                (fn [reply]
                  (if (cb-success? reply)
                    (do
                      (dispatch [:set-any-data :app-state reply])))))
    db))

(reg-event-db
  :state/diff
  (fn [db [_ new-state]]
    (.log js/console (str new-state))
    (assoc db :app-state (differ/patch (:app-state db) new-state))))


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

