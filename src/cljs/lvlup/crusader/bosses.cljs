(ns lvlup.crusader.bosses
  (:require
    [reagent.core :as reagent :refer [atom]]
    [cljs-time.core :as time]
    [cljs-time.format :as time-format]
    [re-frame.core :refer [subscribe dispatch dispatch-sync]]))



(defn make-chart [the-atom data id]
  (reset! the-atom (new js/Chart id
                       (clj->js data))))





(def background-colors
  ["rgba(255, 99, 132, 0.5)"
   "rgba(54, 162, 235, 0.5)"
   "rgba(255, 206, 86, 0.5)"
   "rgba(75, 192, 192, 0.5)"
   "rgba(153, 102, 255, 0.5)"
   "rgba(255, 159, 64, 0.5)"
   "rgba(230, 230, 230, 0.5)"
   "rgba(0, 0, 0, 0.5)"
   "rgba(128, 204, 255,0.5)"
   "rgba(221, 255, 179, 0.5)"
   "rgba(255, 179, 221, 0.5)"
   "rgba(213, 168, 255, 0.5)"
   "rgba(255, 219, 199, 0.5)"
   "rgba(158, 153, 255,0.5)"
   "rgba(255, 169, 153, 0.5)"
   "rgba(255, 225, 128, 0.5)"
   "rgba(143, 241, 255, 0.5)"])

(def border-colors
  ["rgba(255,99,132,1)" "rgba(54, 162, 235, 1)" "rgba(255, 206, 86, 1)" "rgba(75, 192, 192, 1)" "rgba(153, 102, 255, 1)" "rgba(255, 159, 64, 1)" "rgba(255, 255, 255, 1)" "rgba(0, 0, 0, 1)"])


(def chart-options
  {:options {;:responsive true
             ;:maintainAspectRatio false
             :scales {:yAxes [{:ticks {:beginAtZero true}}]}}})

(defn get-next-color [which-color]
  (let [color (get background-colors @which-color)]
    (reset! which-color (inc @which-color))
    color))

(defn pie-chart [data]
  (let [which-color (atom 0)
        data-needed (map #(assoc {} (first %) (reduce + (map :price (second %))))
                         (group-by :type data))
        labels (vec (flatten (map
                               #(keys %) data-needed)))
        the-data (vec (flatten (map
                                 #(vals %) data-needed)))]
    (merge {:type "pie"
            :data {:labels labels
                   :datasets [{:data the-data
                               :backgroundColor background-colors
                               :borderColor border-colors
                               :borderWidth 1}]}}
           chart-options)))




(defn get-only-hours [the-str]
  (js/parseInt (first (clojure.string/split the-str #":"))))

(defn get-all-types-frequencies [data]
  (map #(assoc {}
          (first %)
          (frequencies (flatten (map :when (second %)))))
       (group-by :type data)))

(defn calc-range [[start finish]]
  (let [start-hour (get-only-hours start)
        finish-hour (get-only-hours finish)]
    (if (<= start-hour finish-hour)
      (range start-hour (inc finish-hour))
      (concat (range 0 (inc finish-hour))
              (range start-hour 25)))))



(defn assembly-data [data]
  (vec
    (for [number (range 0 25)]
      (get data number))))


(defn project-days [day-and-prices]
  (let [seven-days (vec (range 1 8))
        days-with-dates (vec (map #(first (keys %))
                                  day-and-prices))]

    (flatten
      (cons (map #(assoc {} :day % :price nil)
               (first
                 (clojure.data/diff
                   (set seven-days)
                   (set days-with-dates))))
            (map #(assoc {} :day (first (keys %))
                            :price (first (vals %)))
                 day-and-prices)))))



(defn bar-chart-days [data]
  (let [which-color (atom 0)
        needed (map
                 #(assoc {} :type (first %)
                            :data (sort-by first (map (fn [a] (assoc
                                                                {}
                                                                (first a)
                                                                (reduce +
                                                                        (map :price (second a)))))
                                                      (group-by :day (second %)))))
                 (group-by :type data))]

    (merge chart-options
           {:type "bar"
            :data {:labels  ["Hétfő" "Kedd" "Szerda" "Csütörtök" "Péntek" "Szombat" "Vasárnap"]
                   :datasets (vec (for
                                    [one-type needed]
                                    {:label (:type one-type)
                                     :data (map :price (sort-by :day (project-days (:data one-type))))
                                     :backgroundColor (get-next-color which-color)
                                     ;:borderColor ["rgba(255,99,132,1)" "rgba(54, 162, 235, 1)" "rgba(255, 206, 86, 1)" "rgba(75, 192, 192, 1)" "rgba(153, 102, 255, 1)" "rgba(255, 159, 64, 1)"]
                                     :borderWidth 1
                                     :steppedLine "before"}))}})))




(defn bar-chart-hour [data]
  (let [which-color (atom 0)
        needed (map #(assoc {} :type (:type %)
                               :when (calc-range (:when %)))
                    (remove (fn [a] (= nil (first (:when a))))
                            data))
        data-needed (get-all-types-frequencies needed)]
    (merge
      chart-options
      {:type "bar"
       :data {:labels  (vec (range 0 25))
              :datasets(vec (for [the-data data-needed]
                              {:label (first (keys the-data))
                               :data (assembly-data (first (vals the-data)))
                               :backgroundColor (get-next-color which-color)
                               ;:borderColor ["rgba(255,99,132,1)" "rgba(54, 162, 235, 1)" "rgba(255, 206, 86, 1)" "rgba(75, 192, 192, 1)" "rgba(153, 102, 255, 1)" "rgba(255, 159, 64, 1)"]
                               :borderWidth 1
                               :steppedLine "before"}))}})))


(defn get-dates-chart-data [by-dates]
  (map #(assoc {}
          (first %)
          (map (fn [a]
                 (assoc {} (first a)
                           (reduce +
                                   (map :price
                                        (second a)))))
               (group-by :type (second %))))
       by-dates))


(defn get-day-name [number]
  (let [days
        {1 "Hétfő"
         2 "Kedd"
         3 "Szerda"
         4 "Csütörtök"
         5 "Péntek"
         6 "Szombat"
         7 "Vasárnap"}]
    (get days number)))


(defn format-chart-date [date]
  (str
    date
    " "
    (get-day-name
      (time/day-of-week
        (apply time/date-time
          (vec (map js/parseInt (clojure.string/split date #"-"))))))))

(defn bar-chart-dates [data]
  (let [which-color (atom 0)
        grouped-by-dates (group-by :dateToString data)
        grouped-by-types (group-by :type data)]

    (js/console.log (str))
    (merge
      chart-options
      {:type "bar"
       :data {:labels  (vec (map #(format-chart-date (first %))
                                 grouped-by-dates))
              :datasets (vec
                          (for [the-data grouped-by-types]
                            {:label (first the-data)
                             :data (vec (map
                                          #(reduce + (map :price (second %)))
                                          (group-by
                                            :dateToString
                                            (get grouped-by-types (first the-data)))))
                             :backgroundColor (get-next-color which-color)
                             ;:borderColor ["rgba(255,99,132,1)" "rgba(54, 162, 235, 1)" "rgba(255, 206, 86, 1)" "rgba(75, 192, 192, 1)" "rgba(153, 102, 255, 1)" "rgba(255, 159, 64, 1)"]
                             :borderWidth 1
                             :steppedLine "before"}))}})))



    ;(map vals (flatten (map vals data-needed)))))


(defn call-new [chart-obj type data id]
  (let [obj @chart-obj]
    (make-chart
      chart-obj
      (case type
        "money" (pie-chart data)
        "days" (bar-chart-days data)
        "hours" (bar-chart-hour data)
        "dates" (bar-chart-dates data))
      id)
    (if obj
        (.destroy obj))))


(defn change-chart-type [chart-obj show-name type data id]
  (let [all-data (subscribe [:data :statistic])]
    (fn [chart-obj show-name type data id]
      [:button.uk-button.uk-button-default.uk-animation-fade
       {:on-click #(call-new chart-obj type data id)}
       show-name])))

(defn label [name day config-map]
  (fn [name day config-map]
    [:label
     [:input.uk-checkbox.uk-margin-right.uk-margin-left
      {:type "checkbox"
       :on-change #(if (some (fn [a] (= day a))
                             (:days @config-map))
                     (swap! config-map assoc :days (vec (remove (fn [a] (= a day))
                                                                (:days @config-map))))
                     (swap! config-map assoc :days (vec (conj (:days @config-map) day))))

       :checked (if (some #(= day %)
                          (:days @config-map))
                  true false)}]
     name]))

(defn choose-days [config-map]
  (let [days [["Hétfők" "monday"]
              ["Keddek" "tuesday"]
              ["Szerdák" "wednesday"]
              ["Csütörtökök" "thursday"]
              ["Péntekek" "friday"]
              ["Szombatok" "saturday"]
              ["Vasárnapok" "sunday"]]]
    (fn [config-map]
      [:div.uk-flex-center.uk-child-width-auto.uk-padding-small.uk-card-secondary.uk-form-controls.uk-grid-collapse
       {:data-uk-grid true}
       (map-indexed #(-> ^{:key %1}[label (first %2) (second %2) config-map])
                    days)])))


(defn slice-date [date]
  (vec
    (map js/parseInt
         (clojure.string/split date #"-"))))

(defn get-dates-multiple [the-string]
  (let [splitted (clojure.string/split the-string #", ")]
    (vec (map #(clojure.string/split % #"-") splitted))))

(defn get-dates-range [the-string]
  (let [splitted (clojure.string/split the-string #" to ")
        how-many (count splitted)]
    (case how-many
      1 [(slice-date the-string)]
      2 [(slice-date (first splitted))
         (slice-date (second splitted))]
      0)))


(defn init-flatpickr [the-atom id type func]
  (reset! the-atom
          (.flatpickr
            js/window
            id
            (clj->js {:mode type
                      :dateFormat "Y-m-d"
                      :onChange (fn [a b c]
                                  (.log js/console (str (func b))))}))))

(defn choose-date [config-map]
  (let [flatpickr (atom nil)
        input-type (atom nil)]
    (reagent/create-class
      {:reagent-render
       (fn [config-map]
         [:div
          [:div.uk-width-1-1.uk-grid-collapse
           {:class (if @input-type "uk-child-width-1-3" "uk-child-width-1-2")
            :data-uk-grid true}
           [:div.uk-button.uk-buttton-primary.calendar-choose
            {:on-click #(do (reset! input-type "range")
                            (init-flatpickr flatpickr
                              "#flatpickr" "range"
                              (fn [a] (swap! config-map assoc :dates {:range (get-dates-range a)}))))}
            "Intervallum"]
           [:input.uk-input.uk-text-center
            {:style {:display (if @input-type
                                ""
                                "none")}
             :id "flatpickr"
             :placeholder "Kiválasztás"}]
           [:div.uk-button.uk-buttton-primary.calendar-choose
            {:on-click #(do (reset! input-type "multiple")
                            (init-flatpickr flatpickr
                              "#flatpickr" "multiple"
                              (fn [a] (swap! config-map assoc :dates {:multiple (get-dates-multiple a)}))))}
            "Dátumok"]]])})))






(defn control-panel [id]
  (let [all-data (subscribe [:statistic id])
        config-map (atom {:days []
                          :dates {}})
        chart-obj (atom nil)]

    (reagent/create-class
      {:reagent-render
       (fn [id]
         (if (:loading? @all-data)
           [:div.uk-height-medium.uk-inline.uk-width-viewport
            [:span.uk-position-center {:data-uk-spinner "ratio: 4"}]]
           [:div.uk-padding-small

            [choose-date config-map]
            [choose-days config-map]
            (if
              (not= {}
                    (:dates @config-map))
              [:button.uk-button.uk-button-danger.uk-width-1-1.uk-margin-remove
               {:on-click
                #(do (dispatch [:bosses/get-statistics-data id @config-map])
                     (if @chart-obj (.destroy @chart-obj)))}
               "Adat lekérése"])
            (if (:data @all-data)
              [:div.uk-flex-center.uk-child-width-expand.uk-margin-remove {:data-uk-grid true}
                 [change-chart-type chart-obj "Ft / Típus" "money" (:data @all-data) id]
                 [change-chart-type chart-obj "Ft / Nap / Típus" "days" (:data @all-data) id]
                 [change-chart-type chart-obj "Játékosok / Óra" "hours" (:data @all-data) id]
                 [change-chart-type chart-obj "Ft / Dátumok" "dates" (:data @all-data) id]])
            [:div
             [:h4.uk-text-center.uk-padding-small.uk-margin-remove
              (str (cond
                     (contains? (:dates @config-map) :multiple)
                     (clojure.string/join ", " (map #(clojure.string/join "-" %)
                                                    (-> @config-map :dates :multiple)))
                     (contains? (:dates @config-map) :range)
                     (str (clojure.string/join "-" (vec (first (-> @config-map :dates :range))))
                          "-tól "
                          (clojure.string/join "-" (vec (second (-> @config-map :dates :range))))
                          "-ig")))]]]))})))



(defn one-statistic [id]
  (let [stat-data (subscribe [:statistic id])]
    (reagent/create-class
      {:reagent-render
       (fn [id]
         [:div.uk-padding-large
          [:div.uk-card-secondary.uk-card
           [:div.uk-padding-small
            [:div.uk-position-top-right
             [:span {:on-click #(dispatch [:remove-statistic id])
                     :data-uk-icon "icon: close; ratio: 1.4"}]]]
           [control-panel id]
           [:h2.uk-text-center.uk-margin-remove.uk-padding-small
            (str "Összesen: "
                 (reduce + (map :price (:data @stat-data)))
                 " Ft, "
                 (count (:data @stat-data))
                 " tétel")]
           [:div.uk-padding-small
            [:canvas
             {:id id
              :style
              {:visibility (if
                             (:data @stat-data)
                             ""
                             "hidden")
               :height "400px"
               :width "100vw"
               :background "rgba(255,255,255,0.8)"}}]]]])})))



(defn statistics []
  (let [statistic-data (subscribe [:data :statistic])]
    (reagent/create-class
      {:reagent-render
         (fn []
           [:div
            (map-indexed #(-> ^{:key %1}[one-statistic (first %2)])
                         @statistic-data)
            [:div.uk-padding-large.uk-width-1-1
             [:button.uk-button.uk-width-large.uk-align-center
              {:on-click #(dispatch [:add-statistic (str (random-uuid))])}
              "Tábla hozzáadása"]]])})))


(defn discount-input [class name the-atom the-key]
  [:div.uk-padding-small
   {:class class}
   [:input.uk-input.uk-input-default
    {:on-change #(swap! the-atom assoc the-key (-> % .-target .-value))
     :placeholder name}]])


(defn label-type [name day config-map]
  (fn [name day config-map]
    [:label
     [:input.uk-checkbox.uk-margin-right.uk-margin-left
      {:type "checkbox"
       :on-change #(if (some (fn [a] (= day a))
                             (:type @config-map))
                     (swap! config-map assoc :type (vec (remove (fn [a] (= a day))
                                                                (:type @config-map))))
                     (swap! config-map assoc :type (vec (conj (:type @config-map) day))))

       :checked (if (some #(= day %)
                          (:type @config-map))
                  true false)}]
     name]))

(defn choose-type [config-map]
  (let [days [["PS" "ps"]
              ["XBOX" "xbox"]
              ["PC" "pc"]
              ["VR" "vr"]]]
    (fn [config-map]
      [:div.uk-flex-center.uk-child-width-auto.uk-padding-small.uk-card-secondary.uk-form-controls.uk-grid-collapse
       {:data-uk-grid true}
       (map-indexed #(-> ^{:key %1}[label-type (first %2) (second %2) config-map])
                    days)])))

(defn add-discount []
  (let [discount (atom {})
        flatpickr (atom nil)]
    (reagent/create-class
      {:component-did-mount #(init-flatpickr flatpickr
                                             "#discount-picker" "range"
                                             (fn [a] (swap! discount assoc :dates {:range (get-dates-range a)})))

       :reagent-render
       (fn []
         [:div (str @discount)
          [:div.uk-card-default.uk-grid-collapse
           {:data-uk-grid true}

           [:div.uk-padding-small.uk-width-1-2
            [:input#discount-picker.uk-input.uk-input-default
             {:placeholder "Dátum Intervallum"}]]
           [discount-input "uk-width-1-2" "Óra intervallum (pl.: 13:30-14:30)" discount :hours]
           [:div.uk-width-1-1
            [choose-days discount]
            [choose-type discount]]
           [discount-input "uk-width-1-3" "Hány félóránként? (pl.: 4)" discount :frequency]
           [discount-input "uk-width-1-3" "Mekkora kedvezmény %-ban? (pl.: 50)" discount :percentage]
           [discount-input "uk-width-1-3" "Hány embernél? (pl.: 2)" discount :at-count]
           [:button.uk-button.uk-button-danger.uk-width-1-1
            {:on-click #(dispatch [:add-discount @discount])}
            "Akció hozzáadása"]]])})))


(defn one-discount [[the-key {:keys [dates hours type frequency at-count days percentage]}]]
  [:div.uk-padding-small
   [:div.uk-card.uk-card-default.uk-grid-collapse {:data-uk-grid true}
    [:div.uk-grid-collapse.uk-width-child-auto.uk-padding-small.uk-width-expand
     {:style {:font-size "1.3em"}}
     [:div
          (str (:range dates)) [:span {:style {:color "red"}} " dátumok között, "]
          (str " " days) [:span {:style {:color "red"}} " napokon, "]
          hours [:span {:style {:color "red"}} " órák között, "]
          (str type) [:span {:style {:color "red"}} " rendszereken, "]
          at-count [:span {:style {:color "red"}} " játékostól, "]
          frequency " db" [:span {:style {:color "red"}} " félóránként "]
          percentage "%" [:span {:style {:color "red"}} " kedvezmény"]]]
    [:div.uk-align-right
     [:button.uk-button-default
      {:on-click #(dispatch [:remove-discount the-key])
       :type "button"}
      [:span.uk-margin-small-right.uk-margin-small-top
       {:data-uk-icon "close"}]]]]])

(defn discounts []
  (let [discount-data (subscribe [:discounts-data])]
    (reagent/create-class
      {:reagent-render
       (fn []
         [:div
          [:div.uk-padding-large
           [add-discount]
           (map-indexed
             #(-> ^{:key (first %2)}[one-discount %2])
             @discount-data)]])})))








