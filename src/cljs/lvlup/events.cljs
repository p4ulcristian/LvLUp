(ns lvlup.events
  (:require
    [ajax.core :refer [GET POST]]
    [cljs.reader :refer [read-string]]
    [clojure.string :as str]
    [goog.string :as gstring]
    [goog.string.format]
    [re-frame.core :refer [reg-event-db reg-event-fx inject-cofx path trim-v
                           after debug dispatch]]))


(reg-event-db
 :initialize
    (fn [_ _]
       {
        :system-map []
        :invoices []
        :max-id 0
        :active-member 0
        :connection-state false
        :reservation-data {:name ""
                           :date ""

                           :start-hour ""
                           :finish-hour ""
                           :system-name []}
        :waiting-pool []
        :sidenav-state 1
        :search-member ""
        :actual-page nil
        :players []
        :reservations nil
        :time (js/Date.)
        :time-table nil
        :counter 0}))



(reg-event-db
  :render-time-table
    (fn [db [_ reservations]]
      (let [time (atom nil)]

         (.setScope (:time-table db) 12 02)
         (.addLocations (:time-table db) (clj->js (into [] (map (fn [a] (:name a)) (sort-by :number (:system-map db))))))
         (doseq [reservation reservations]
           (reset! time
               (js/Date.
                 (js/parseInt (first (str/split (:date reservation) #" ")))
                 (js/parseInt (second (str/split (:date reservation) #" ")))
                 (js/parseInt (nth (str/split (:date reservation) #" ") 2))
                 00
                 00))
           ;(if (< (js/parseInt (first (str/split (:finish-hour reservation) #":"))) 4) (js/alert "hmm") (js/alert (str "meh" (js/parseInt (first (str/split (:finish-hour reservation) #":"))))))
           (cond
             (< (js/parseInt (first (str/split (:finish-hour reservation) #":"))) 4)
             (do
               (.setDate @time (inc (.getDate @time)))
               (.setHours @time (first (str/split (:finish-hour reservation) #":")))
               (.setMinutes @time (second (str/split (:finish-hour reservation) #":"))))
             (> (js/parseInt (first (str/split (:finish-hour reservation) #":"))) 4)
             (do
               (.setDate @time (.getDate @time))
               (.setHours @time (first (str/split (:finish-hour reservation) #":")))
               (.setMinutes @time (second (str/split (:finish-hour reservation) #":"))))
             (= nil (:finish-hour reservation))
             (do

                  (.setDate @time (inc (.getDate @time)))
                  (.setHours @time 02)
                  (.setMinutes @time 00)))
           ;(js/alert @time (inc (.getDate @time)))
               ;(= nil (:finish-hour reservation))
               ;  (.setDate @time (inc (.getDate @time))))

           (.addEvent
              (:time-table db)
              (:name reservation)
              (:system-name reservation)
              (js/Date.
                (js/parseInt (first (str/split (:date reservation) #" ")))
                (js/parseInt (second (str/split (:date reservation) #" ")))
                (js/parseInt (nth (str/split (:date reservation) #" ") 2))
                (js/parseInt (first (str/split (:start-hour reservation) #":")))
                (js/parseInt (second (str/split (:start-hour reservation) #":"))))
              @time)))

      (.draw (js/Timetable.Renderer. (:time-table db)) ".timetable")
      (assoc db :counter (inc (:counter db)) :reservations reservations)))

(reg-event-db
  :set-search-member
      (fn [db [_ the-map]]


        (assoc db :search-member the-map)))

(reg-event-db
  :set-connection-state
      (fn [db [_ the-map]]


        (assoc db :connection-state the-map)))


(reg-event-db
  :set-waiting-pool
      (fn [db [_ the-map]]
        (assoc db :waiting-pool the-map)))

(reg-event-db
  :add-reservation
    (fn [db [_ the-map]]
      (POST "/add-foglalasok"
            {:params the-map
             :handler #(do
                         ;(.notification js/UIkit (:actual-page db) (clj->js {"pos" "top-right"}))
                         (dispatch [:get-reservations (:actual-page db)])

                         (.notification js/UIkit "Foglalás hozzáadva!" (clj->js {"pos" "top-right"})))

             :error-handler #(js/alert (str "Valamit jól elrontottál :( :" %))})
      db))



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
  :get-reservations
    (fn [db [_]]
      (GET (str "/foglalasok/" (:actual-page db) "/"
                (.getFullYear (:time db))
                " "
                (gstring/format "%02d" (inc (.getMonth (:time db))))
                " "
                (gstring/format "%02d" (.getDate (:time db))))
          {:handler #(dispatch [:render-time-table (read-string %)])
           :error-handler #()})
      (assoc db :time-table (js/Timetable.))))



(reg-event-db
  :set-date
    (fn [db [_ date]]
      (do
        (.setDate (:time db) (js/parseInt (nth (str/split date #" ") 2)))
        (.setMonth (:time db) (dec (js/parseInt (second (str/split date #" ")))))
        (.setFullYear (:time db) (js/parseInt (first (str/split date #" ")))))


      (dispatch [:get-reservations (:actual-page db)])
      (assoc db :counter (inc (:counter db)))))

(reg-event-db
  :change-date
    (fn [db [_ how]]
      (case how
        "add" (.setDate (:time db) (inc (.getDate (:time db))))
        "sub" (.setDate (:time db) (dec (.getDate (:time db)))))
      (dispatch [:get-reservations (:actual-page db)])
      (assoc db :counter (inc (:counter db)))))
