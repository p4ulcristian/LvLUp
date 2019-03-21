(ns lvlup.subs
  (:require [re-frame.core :refer [reg-sub subscribe]]
            [cljs-time.core :as core]
            [lvlup.utils :as utils]
            [cljs-time.format :as format]))


(reg-sub
  :data
  (fn [db [_ the-key]]
    (get
      db
      the-key)))

(reg-sub
  :dungeon
  (fn [db [_]]
    (get-in
      db
      [:app-state :dungeon])))

(reg-sub
  :searched-players
  (fn [db [_]]
    (let [search-range (:search-range db)
          players (:players db)]
      (filter
        (fn [a]
          (some (fn [b] (= (key a) b))
                search-range))
        players))))


(reg-sub
  :the-prices
  (fn [db [_]]
    (get-in db [:app-state :prices])))

(reg-sub
  :search-number
  (fn [db [_]]
    (:search-number db)))

(reg-sub
  :checkout
  (fn [db [_]]
    (get-in
      db
      [:app-state :checkout])))

(defn elapsing-time-no-seconds [seconds]
  (let [seconds-negated (* -1 seconds)]
    (if (neg? seconds)
      (str "- " (quot seconds-negated 3600) "h " (mod (quot seconds-negated 60) 60) "m " (mod seconds-negated 60) "s")
      (str (quot seconds 3600) " óra " (mod (quot seconds 60) 60) " perc "))))

(defn strip [coll chars]
  (apply str (remove #((set chars) %) coll)))

(reg-sub
  :payed-invoice
  (fn [db [_ id]]
    (let [invoice (get-in db [:invoices id])
          {:keys [start finish pay-date]} invoice]
      (assoc
        invoice
        :datum-interval (if (and start finish)
                          (utils/read-date start finish)
                          (utils/read-date finish))
        :pay-date-str (utils/read-date pay-date)))))





(reg-sub
  :checkout-invoices
  (fn [db [_ type ids]]
    (let [invoices (for [id ids]
                     (get-in
                       db
                       [:app-state :checkout type id]))]

      (for [invoice invoices]
        (let [{:keys [start finish]} invoice
              start (if (= start "") nil start)]
          (assoc
            invoice
            :spent-time (if (and start finish)
                          (elapsing-time-no-seconds
                            (core/in-seconds
                              (core/interval
                                start
                                finish)))
                          "-")
            :datum-interval (if (and start finish)
                              (utils/read-date start finish)
                              (utils/read-date finish))))))))

(reg-sub
  :checkout-invoice
  (fn [db [_ type id]]
    (let [invoice (get-in
                    db
                    [:app-state :checkout type id])
          {:keys [start finish]} invoice
          start (if (= start "") nil start)]
      (assoc
        invoice
        :spent-time (if (and start finish)
                      (elapsing-time-no-seconds
                        (core/in-seconds
                          (core/interval
                            start
                            finish)))
                      "-")
        :datum-interval (if (and start finish)
                          (utils/read-date start finish)
                          (utils/read-date finish))))))

(reg-sub
  :checkout-invoice
  (fn [db [_ type id]]
    (let [invoice (get-in
                    db
                    [:app-state :checkout type id])
          {:keys [start finish]} invoice
          start (if (= start "") nil start)]
      (assoc
        invoice
        :spent-time (if (and start finish)
                      (elapsing-time-no-seconds
                        (core/in-seconds
                          (core/interval
                            start
                            finish)))
                      "-")
        :datum-interval (if (and start finish)
                          (utils/read-date start finish)
                          (utils/read-date finish))))))


(defn sort-spent [a direction])

(defn decide-sort [sort-type sort-direction data db]
  (let [spent-time (fn [a b]
                     (core/in-seconds
                       (core/interval
                         a b)))
        decide-direction (fn [func]
                           (case sort-direction
                             :down (not (func))
                             :up (func)))
        make-bool (fn [a]
                    (if (< 0 a)
                      false
                      true))]
    ;(.log js/console (str "mit keresek: " sort-type))
    (case sort-type
      :name (sort-by (fn [a]
                       (cond-> (:name (get-in db [:players (:member-id (val a))]))
                               (not nil) (clojure.string/upper-case)))
                     (fn [a b] (decide-direction #(make-bool (compare a b))))
                  data)
      :spent-time
        (sort-by
          (fn [a] (if (and (:start (val a)) (:finish (val a)))
                    (spent-time (:start (val a))
                                (:finish (val a)))
                    0))
          (fn [a b] (decide-direction
                      #(make-bool (compare a b))))
          data)
      :start (sort-by
               (fn [a] (if (:start (val a))
                         (:start (val a))
                         (:finish (val a))))
               (fn [time-one time-two]
                 (decide-direction
                   #(core/before?
                      time-one
                      time-two)))
               data)
      :pay-date (sort-by
                  (fn [a] (:pay-date (val a)))
                  (fn [time-one time-two]
                    (if (and time-one time-two)
                      (decide-direction
                        #(core/before?
                           time-one
                           time-two))
                      true))
                  data)
      (sort-by (fn [a] (get (val a) sort-type))
               (fn [a b] (decide-direction #(make-bool (compare a b))))
               data))))


(reg-sub
  :checkout-keys-grouped
  (fn [db [_ the-key]]
    (map (fn [a] (vector (key a)
                         (vec (map first (val a)))))
         (group-by
              #(:member-id (val %))
              (get-in
                db
                [:app-state :checkout the-key])))))


(reg-sub
  :checkout-keys
  (fn [db [_ the-key]]
    (map #(vector (key %) (:member-id (val %)))
         (decide-sort
           (:checkout-sort-type db)
           (:checkout-sort-direction db)
           (get-in
             db
             [:app-state :checkout the-key])
           db))))

(reg-sub
  :invoices-keys
  (fn [db [_]]
    (map #(vector (key %) (:member-id (val %)))
         (decide-sort
           (:checkout-sort-type db)
           (:checkout-sort-direction db)
           (:invoices db)
           db))))


(reg-sub
  :player
  (fn [db [_ id]]
    (get (:players db)
         id)))

(defn calculate-time-zone []
  (let [date (atom (js/Date.))]
    (core/minus
      (core/now)
      (core/hours (/ (.getTimezoneOffset @date) 60)))))

(defn calculate-time-interval [time-one time-two]
  ;(.log js/console (str "start? " time-one))
  ;(.log js/console (str "finish? " time-two))
  (if (core/before?
        time-one
        time-two)
    (core/in-seconds (core/interval
                       time-one
                       time-two))
    (* -1
       (core/in-seconds (core/interval
                          time-two
                          time-one)))))

(reg-sub
  :miklos-time
  (fn [db [_ number player-number]]
    (calculate-time-interval
      (format/parse
         (:start (get (:players (first (filter
                                         #(= number (:number %))
                                         (get-in
                                           db
                                           [:app-state :dungeon]))))
                      player-number)))
      (calculate-time-zone))))

(reg-sub
  :statistic
  (fn [db [_ id]]
    (get
      (:statistic db)
      id)))


(reg-sub
  :discounts-data
  (fn [db [_]]
    (get
      (:app-state db)
      :discounts)))

(reg-sub
  :still-gaming
  (fn [db [_]]
   (filter
     #(not= (:players %) {})
     (map val (:dungeon (:app-state db))))))

(reg-sub
  :free-systems
  (fn [db [_]]
    (str
      (clojure.string/join
        ", "(map #(str (count (second %)) " " (first %))
                 (group-by :type (filter
                                   #(= (:players %) {})
                                    (map val (:dungeon (:app-state db)))))))
      " szabad még")))
