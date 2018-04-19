(ns lvlup.subs
  (:require [re-frame.core :refer [reg-sub subscribe]]))

(reg-sub
  :data
  (fn [db [_ the-key]]
    (get
         db
         (keyword the-key))))
