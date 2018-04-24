(ns lvlup.subs
  (:require [re-frame.core :refer [reg-sub subscribe]]))

(reg-sub
  :data
  (fn [db [_ the-key]]
    (get
         db
         (keyword the-key))))

(reg-sub
  :player
  (fn [db [_ id]]
    (first (filter #(= id (:id %)) (:players db)))))

(reg-sub
  :still-gaming
  (fn [db [_]]
   (filter
     #(not= (:players %) {})
     (:system-map db))))
