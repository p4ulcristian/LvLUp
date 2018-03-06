(ns lvlup.crusader.reservation
  (:require-macros
   [cljs.core.async.macros :as asyncm :refer (go go-loop)])
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [clojure.string :as str]
            [goog.string :as gstring]
            [lvlup.sente :refer [chsk-send! start-router!]]
            [ajax.core :refer [GET POST]]
            [clojure.set :refer [union]]
            [cljs-time.core :as tcore]
            [cljs-time.format :as tformat]
            [cljs-time.coerce :as coerce]
            [cljs.reader :refer [read-string]]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]
            [lvlup.events]

            [lvlup.subs]
            [cljs.core.async :as async :refer (<! >! put! chan)]
            [taoensso.sente  :as sente :refer (cb-success?)]
            [jayq.core :refer [$ css html]]))

(defn szeged-tables []
  (let [numbers (range 1 13)]
    (vec
     (map #(assoc {} :type "table" :number % :reservation-type "tavern")
          numbers))))

(def slider-atom (atom nil))

(def szeged-opening-hours
  ;Vasarnap az elso nap utana hetfo
  {0 {:from 48 :to 92}
   1 {:from 48 :to 96}
   2 {:from 48 :to 96}
   3 {:from 48 :to 96}
   4 {:from 48 :to 104}
   5 {:from 48 :to 104}
   6 {:from 48 :to 104}})

(defn opening-hours [a]
  (get szeged-opening-hours (.getDay a)))

(def timeformat (tformat/formatter "HH:mm"))
(def dateformat (tformat/formatter "yyyy MM dd"))

(defn convert-date [origin]
  (tformat/unparse dateformat (tcore/plus (coerce/from-long origin) (tcore/days 1))))

(defn convert-time [origin]
  (tformat/unparse timeformat (coerce/from-long origin)))

(defn quarters [quarter]
  [:div.uk-text-right {:style {:padding-right "10px"}} quarter])

(defn to-24-pm [hour]
  (if (< 23 hour)
    (- hour 24)
    hour))

(defn hours-time [hour]
  (let [minutes ["00" 15 30 45]]
    (fn [hour]
      [:div.uk-grid.uk-grid-match.uk-margin-remove {:data-uk-grid true};;:style {:border-bottom "1px solid red"}}
       [:div.uk-width-expand.uk-padding-remove
        [:div.uk-inline
         [:div.uk-margin-small.uk-position-center
          {:style {:font-size "1.8em"}}
          (to-24-pm hour)]]]
       [:div.uk-width-expand.uk-padding-remove
        (map-indexed
         #(-> ^{:key %2} [quarters %2])
         minutes)]])))

(def days
  {0 "Vasárnap"
   1 "Hétfő"
   2 "Kedd"
   3 "Szerda"
   4 "Csütörtök"
   5 "Péntek"
   6 "Szombat"})

(defn yesterday [now]
  (js/Date. (- (.getTime now) 86400000)))

(defn which-quarter [number]
  (case number
    0 "00"
    1 "15"
    2 "30"
    3 "45"))

(defn quarter-to-time [quarter]
  (str (gstring/format "%02d" (to-24-pm (quot quarter 4)))
       ":"
       (which-quarter (mod quarter 4))))

(defn reservation-dates []
  (let [date (subscribe [:data "date"])
        ;get-opening-hours (fn [a] (if a (get szeged-opening-hours (.getDay a))))

        hours (fn []
                (vec (range (quot (:from (opening-hours @date)) 4)
                            (quot (:to (opening-hours @date)) 4))))]

    (reagent/create-class
     {:component-did-mount #(if-not (<
                                     (quot
                                      (:from (opening-hours @date))
                                      4)
                                     (.getHours @date))
                              (dispatch [:set-date (yesterday @date)]))
                                      ;(get-opening-hours (yesterday @date))))
      :reagent-render
      (fn []
        [:div
         [:div.uk-card.uk-card-secondary.uk-padding-remove.uk-margin-remove
          ;
          [:div {:style {:width "80px"}}
           [:div.uk-inline.uk-margin-small.uk-padding-small.uk-padding-remove-vertical
            {:data-uk-sticky " bottom: #top"
             :data-uk-toggle "target: #my-id"
             :on-click #(dispatch [:set-reservation-modal "reset" nil])
             :style {:z-index "980"}}
            [:img.add-reservation {:src "/Icons/plus.svg"
                                   :height "50"
                                   :style {:background "white"
                                           :padding "3px"
                                           :border-radius "100px"}
                                   :width "50"}]]
           [:div

            (map-indexed
             #(-> ^{:key %2} [hours-time %2])
             (filter #(and (>= % 12) (<= % 25))
                     (hours)))]]]])})))

      ;[:span.uk-badge.uk-position-bottom-left (:number item)]]]]])


(defn one-reservation [reservation]
  (let [date (subscribe [:data "date"])]

    (reagent/create-class
     {:component-did-mount #()
      :reagent-render
      (fn []
        [:div.uk-card.uk-card-default.uk-padding-small.uk-inline.one-reservation
         {:data-uk-toggle "target: #my-id"
          :on-click #(do
                       (.updateOptions
                        @slider-atom
                        (clj->js
                         {:start [(:start reservation) (:finish reservation)]
                          :range {"min" (:from (opening-hours (js/Date. (:start reservation))))
                                  "max" (:to (opening-hours (js/Date. (:finish reservation))))}})
                        true)

                       (dispatch [:set-reservation-modal "replace" reservation]))
          :style {:position "absolute"
                  :transition "transform .05s ease-in-out"
                  :top (str
                        (* 18 (- (:start reservation) (:from (opening-hours @date))))
                        "px")
                  :height (str
                           (* 18 (- (:finish reservation)
                                    (:start reservation)))
                           "px")
                  :width "100%"}};}
         ;(str (* 18 (- (:start reservation) (:from (opening-hours)))))
         [:div.uk-position-center {:data-uk-tooltip "title: Morvai Viktor; pos: bottom" :style {:color "white"}} "M. V."]
         [:span.uk-label.uk-label-success.uk-position-top
          {:data-uk-tooltip (str "title: " (quarter-to-time (:start reservation)) "; pos: top") :style {:height "20px" :opacity 0}}]
         [:span.uk-label.uk-label-success.uk-position-bottom
          {:data-uk-tooltip (str "title: " (quarter-to-time (:finish reservation)) "; pos: bottom") :style {:height "25px" :opacity 0}}]])})))

(defn reservation-column [item]
  (let [reservations (subscribe [:data "reservations"])]
    (reagent/create-class
     {:component-did-mount #(do
                              (.reset js/dragscroll)
                              (.reservationInteract js/window)
                              (.dropzone
                               (.interact js/window ".dropzone")
                               (clj->js {:accept ".draggable-reservation"
                                                     ;:overlap 0.75
                                         :ondragenter (fn [e] (.notification js/UIkit "mukodik")) ;(.hide @sidenav-canvas))
                                                     ;:ondragleave (fn [e] (.notification js/UIkit "Elhagytál, Csengő Zolival megcsaltáll"))
                                         :ondrop (fn [e] (.notification js/UIkit "meh"))})))
      :reagent-render
      (fn [item]
        [:div.uk-padding-small.uk-padding-remove-vertical.uk-width-auto
         [:div.uk-padding-remove {:style {:height "100%"}}
          [:div.uk-text-center
           [:div.uk-inline.uk-margin-small.uk-align-center
            [:img
             {:src (case (:type item)
                     "ps" "/Icons/ps.svg"
                     "xbox" "/Icons/xbox.svg"
                     "pc" "/Icons/pc.svg"
                     "table" "/Icons/table.svg"
                     "hmm")
              :height "50"
              :width "50"}]
            [:span.uk-badge.uk-position-bottom-left (:number item)]]]
          [:div.uk-grid.uk-margin-remove.uk-height-1-1 {:data-uk-grid true :style {:height "calc(100% - 60px)"}} ;:style {:height "100%"}}
           [:div.uk-width-1-1.dropzone.uk-padding-remove {:style {:position "relative"}}
            (map-indexed
             #(-> ^{:key %1} [one-reservation %2])
             @reservations)]]]])})))
                 ;[:div (:number item)]]]])


(defn add-or-remove [item array]
  (if (some #(= item %) array)
    (remove #(= item %) array)
    (conj array item)))

(defn one-system [item details]
  [:div
   {:on-click #(dispatch [:set-reservation-modal :places (add-or-remove item (:places @details))])}
   [:div.uk-padding-small
    {:class (if (some #(= item %) (:places @details))
              "reserve-system chosen-system"
              "reserve-system")}
    (:place @details)
    [:img.uk-align-center.uk-margin-remove-vertical
     {:src (case (:type item)
             "ps" "/Icons/ps.svg"
             "xbox" "/Icons/xbox.svg"
             "pc" "/Icons/pc.svg"
             "table" "/Icons/table.svg"
             "hmm")
      :height "50"
      :width "50"}]]])

(defn choose-systems [details]
  (let [system-map (subscribe [:data "system-map"])]
    (fn [details]
      [:div.uk-flex-center.uk-margin-remove.uk-width-1-1.uk-padding-small {:data-uk-grid true}
       (for [item @system-map]
         (-> ^{:key (:number item)}
          [one-system item details]))])))

(defn display-time [[from to]]
  (let []
    [:h1.uk-text-center.uk-margin-remove
     (str (quarter-to-time from)
          " - "
          (quarter-to-time to))]))

(defn reservation-modal []
  (let [date (subscribe [:data "date"])

        flatpickr (atom nil)

        reservation-details (subscribe [:data "reservation-modal"])

        slider-values (atom nil)]
    (reagent/create-class
     {:component-did-update #(.setDate @flatpickr
                                       (js/Date. (:date @reservation-details)))
      :component-did-mount
      #(do
         (reset! slider-atom
                 (.create js/noUiSlider (.getElementById js/document "no-ui-slider")
                          (clj->js
                           {:start [(:start @reservation-details) (:finish @reservation-details)]
                            :connect true
                            :step 1
                            :margin 4
                            :behaviour "drag-tap"
                            :range {"min" (:from (opening-hours @date))
                                    "max" (:to (opening-hours @date))}})))
         (reset! flatpickr

                 (.flatpickr
                  js/window
                  "#flatpickr"
                  (clj->js {"altInput" true
                            "altFormat" "F j, Y"
                            "dateFormat" "Y-m-d"
                            "locale" "hu"
                            ;"defaultDate" "2018-03-10"         ;"inline" true
                            "minDate" (.fp_incr (js/Date.) -1)
                            "onChange"
                            (fn [a b c]
                              (do
                                (dispatch [:set-reservation-modal :date (str b)])
                                (dispatch [:set-date b])
                                (.updateOptions
                                 @slider-atom
                                 (clj->js
                                  {:range {"min" (:from (opening-hours (js/Date. b)))
                                           "max" (:to (opening-hours (js/Date. b)))}})
                                 true)))})))
         (.on @slider-atom "update" (fn [e] (do
                                              (dispatch [:set-reservation-modal :start (js/parseInt (first (js->clj e)))])
                                              (dispatch [:set-reservation-modal :finish (js/parseInt (second (js->clj e)))])

                                              (reset! slider-values (js->clj e))))))
                              ;

      :reagent-render
      (fn []

        [:div#my-id.uk-modal-container

         {:data-uk-modal "bg-close:	false" :style {:opacity 0.95}}
         [:div.uk-modal-dialog
          [:button.uk-modal-close-default
           {:data-uk-close true :type "button"}]
          ;[:div (str @reservation-details)]
          [:div.uk-modal-header
           [:div.uk-text-truncate {:style {:font-size "2em"}}
            (if (= "" (:name @reservation-details))
              "Foglalás"
              (str  (:name @reservation-details) " foglalása"))]]
          [:div.uk-modal-body.uk-padding-remove-vertical
           [:div.uk-form.uk-padding-small.remove-padding-vertical
            [:div.uk-child-width-expand.uk-margin-remove {:data-uk-grid true}
             ;[:button {:on-click #} "Hello"]
             [:input.uk-margin-small.uk-text-center.uk-form-small.uk-margin-remove.uk-input
              {:placeholder "Id"
               :type "number"
               :on-change #(dispatch [:set-reservation-modal :id (-> % .-target .-value)])
               :value (:id @reservation-details)}]
             [:input#flatpickr.uk-input.uk-form-width-medium.uk-form-small.uk-text-center
              {:placeholder "Dátum"}]
             [:input.uk-margin-small.uk-text-center.uk-form-small.uk-margin-remove.uk-input
              {:placeholder "Teljes név"
               :on-change #(dispatch [:set-reservation-modal :name (-> % .-target .-value)])
               :value (:name @reservation-details)}]]]
           [display-time @slider-values]

           [:div#no-ui-slider.uk-margin-small]; [:div (str range-config)]
           [choose-systems reservation-details]
           [:div.uk-modal-footer.uk-text-right
            [:button.uk-button.uk-button-default.uk-modal-close
             {:type "button"}
             "Mégsem"]

            [:button.uk-button.uk-button-primary
             {:on-click #(chsk-send! [:dungeon/add-reservations @reservation-details])
              :type "button"}
             "Mentés"]]]]])})))

(defn display-date [date]
  (get days (.getDay date)))

(defn panel-img [item]
  [:div
   [:img {:src (str "/Icons/" item ".svg")
          :height "35"
          :width "35"}]])

(defn reservation-categories []
  [:div.uk-grid.uk-margin-remove.uk-float-right.uk-child-width-expand {:data-uk-grid true}
   [panel-img "pc"]
   [panel-img "console"]
   [panel-img "table"]])

(defn choose-date-panel []
  (let [date (subscribe [:data "date"])]
    (reagent/create-class
     {:component-did-mount
      #(do
         (chsk-send! [:dungeon/get-reservations])
         (.flatpickr
          js/window
          "#choose-date"
          (clj->js {"altInput" true
                    "altFormat" "F j, Y"
                    "dateFormat" "Y-m-d"
                    "defaultDate" (js/Date.)
                    "locale" "hu"
                    "minDate" (.fp_incr (js/Date.) -1)
                    "onChange"
                    (fn [a b c]
                      (dispatch [:set-date b]))})))
      :reagent-render
      (fn []
        [:div.uk-card.uk-card-secondary.uk-margin-remove.uk-padding-remove.uk-width-1-1
         [:div.uk-grid.uk-child-width-expand.uk-padding-small.uk-margin-remove
          {:data-uk-grid true}
          [:h3.uk-text-left.uk-heading-bullet (display-date @date)]
          [:input#choose-date.uk-text-center.uk-padding-remove {:placeholder "Válassz dátumot"}]
          [reservation-categories]]])})))

(defn systems-to-reservations [systems]
  (map #(assoc
         (dissoc % :players :name)
         :reservation-type "dungeon")
       systems))

(defn reservation []
  (let [system-map (subscribe [:data "system-map"])]
    [:div {:style {:opacity 0.8}}
     [choose-date-panel]
     ;[:input.uk-margin-small.uk-text-center.uk-form-large.uk-margin-remove.uk-width-auto {:placeholder "Id"}]
     [:div.uk-grid
      {:data-uk-grid true}

      [reservation-modal]
      [reservation-dates]
      [:div.uk-padding-remove.uk-margin-remove.dragscroll {:style {:width "calc(100vw - 80px)" :overflow-x "scroll" :overflow-y "visible"}}
       [:div.uk-grid.uk-child-width-auto.reservation-grid.uk-margin-remove.uk-card.uk-card-secondary.restrict
        {:data-uk-grid true :style {:min-width "calc(100vw - 80px)" :width "max-content" :height "100%"}};}}
        ;(str (systems-to-reservations @system-map))
        (for [item (sort-by
                    (juxt :reservation-type :number)
                    (concat
                     (map #(assoc (dissoc % :name :players) :reservation-type "dungeon") (systems-to-reservations @system-map))
                     (szeged-tables)))]
          (-> ^{:key (str "h" item)} [reservation-column item]))]]]]))
