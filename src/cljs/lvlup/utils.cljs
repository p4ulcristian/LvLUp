(ns lvlup.utils
  (:require-macros
    [cljs.core.async.macros :as asyncm :refer (go go-loop)])
  (:require
    [re-frame.core :refer [subscribe dispatch]]
    [cljs.core.async :as async  :refer (<! >! put! chan timeout)]
    [reagent.core :as reagent :refer [atom]]
    [cljs-time.coerce :as coerce]
    [cljs-time.format :as format]
    [cljs-time.core :as tcore]))


(defn notification [valami]
  (.notification js/UIkit (str "<div class='uk-padding-small uk-card uk-card-primary notification-style'><span uk-icon='icon: check'></span> " valami "</div>") (clj->js {:pos "bottom-left" :timeout 700})))

(defn two-zeros [number]
  (if (< number 10)
    (str "0" number)
    number))

(defn get-day [number]
  (case number
    0 "Vasárnap"
    1 "Hétfő"
    2 "Kedd"
    3 "Szerda"
    4 "Csütörtök"
    5 "Péntek"
    6 "Szombat"))



(defn get-month [number]
  (case number
    1 "jan."
    2 "feb."
    3 "már."
    4 "ápr."
    5 "máj."
    6 "jún."
    7 "júl."
    8 "aug."
    9 "sze."
    10 "okt."
    11 "nov."
    12 "dec."))

(def timeformat (format/formatter "HH:mm"))

(defn convert-time [origin]
  (format/unparse timeformat (coerce/from-long origin)))

(def custom-formatter (format/formatter "yyyy-MM-dd'T'HH:mm:ss"))


(defn make-date-vector [the-string]
  (let []
    {:year (subs the-string 0 4)
     :month (subs the-string 4 6)
     :day (subs the-string 6 8)
     :hour (subs the-string 9 11)
     :minute (subs the-string 11 13)}))



(defn read-date
  ([]
   (let [now (subscribe [:data "now"])]
     [:div (str
             (get-month (tcore/month @now))
             " "
             (tcore/day @now)
             ".")
           [:b " " (get-day (.getDay (js/Date. @now)))]]))
  ([finish]
   (let []
     [:div
      (str
        (get-month (tcore/month finish))
        " "
        (tcore/day finish)
        ".")
      [:b " " (get-day (.getDay (js/Date. finish)))]
      [:div (convert-time finish)]]))
  ([start finish]
   (let []
     ;(.log js/console "Túl lassú: " (make-date-vector start?))
     [:div (str
             (get-month (tcore/month start))
             " "
             (tcore/day start)
             ".")
        [:b " " (get-day (.getDay (js/Date. start)))]
        [:div (str
                (convert-time start)) " - " (convert-time finish)]])))


(defn parse-date [date]
  (let [the-date (if
                   (not= "" date)
                   (format/parse custom-formatter
                                 (first (clojure.string/split date #"\."))))]
    (if
      (not= "" date)
      (str (tcore/year the-date)
           "."
           (tcore/month the-date)
           "."
           (tcore/day the-date)
           " - "
           (tcore/hour the-date)
           ":"
           (tcore/minute the-date)))))



(defn read-hour
  ([]
   (let [now (subscribe [:data "now"])]
     [:div (str
             " - "
             (two-zeros (tcore/hour @now))
             ":"
             (two-zeros (tcore/minute @now)))]))
  ([hour]
   (str
     (two-zeros (tcore/hour hour))
     ":"
     (two-zeros (tcore/minute hour)))))


(defn read-now []
  (let [now (atom (tcore/now))]
    (reagent/create-class
      {:component-did-mount #(.setInterval js/window
                                      (fn [a] (do
                                               ; (.notification js/UIkit (str  @now))
                                                (reset! now (tcore/minus
                                                              (tcore/now)
                                                              (tcore/hours (/ (.getTimezoneOffset (js/Date.)) 60))))))
                                      1000)
       :reagent-render
       (fn []
         [:div
          (str
            (get-month (tcore/month @now))
            " "
            (tcore/day @now)
            ".")
          [:b " " (get-day (.getDay (js/Date. @now)))]
          (str
            " - "
            (two-zeros (tcore/hour @now))
            ":"
            (two-zeros (tcore/minute @now)))])})))

