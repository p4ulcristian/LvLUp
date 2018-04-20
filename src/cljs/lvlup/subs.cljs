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
    (first (filter #(= id (:id %)) (:players-data db)))))
