(ns lvlup.crusader.reservation
  (:require-macros
   [cljs.core.async.macros :as asyncm :refer (go go-loop)])
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [clojure.string :as str]
            [goog.string :as gstring]
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

(def colors
  [{:background "#000" :color "black"}
   {:background "white" :color "black"}
   {:background "red" :color "blue"}])

(defn szeged-tables []
  (let [numbers (range 1 13)]
    (vec
     (map #(assoc {} :type "table" :number % :reservation-type "tavern")
          numbers))))

(def reservation-type (atom "dungeon"))

(defn systems-to-reservations [systems]
  (map #(assoc
         (dissoc % :players :name)
         :reservation-type "dungeon")
       systems))

(defn reservation-systems [system-map]
  (sort-by :number
           (case @reservation-type
             "tavern" (szeged-tables)
             "dungeon" (map (fn [a]
                              (assoc (dissoc a :name :players) :reservation-type "dungeon"))
                            (systems-to-reservations @system-map)))))

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

(defn convert-iso-to-read [time]
  (str (gstring/format "%04d" (.getFullYear time))
       "-"
       (gstring/format "%02d" (inc (.getMonth time)))
       "-"
       (gstring/format "%02d" (.getDate time))))

(def timeformat (tformat/formatter "HH:mm"))
(def dateformat (tformat/formatter "yyyy MM dd"))

(defn convert-date [origin]
  (tformat/unparse dateformat (tcore/plus (coerce/from-long origin) (tcore/days 1))))

(defn convert-time [origin]
  (tformat/unparse timeformat (coerce/from-long origin)))

(defn quarters [quarter]
  [:div.uk-text-right {:style {:padding-right "10px" :color "white"}} quarter])

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
          {:style {:font-size "1.8em" :color "white"}}
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
     {:reagent-render
      (fn []
        [:div
         [:div.uk-padding-remove.uk-margin-remove.trans-black {:style {:border-bottom-left-radius "20px"}}
          ;
          [:div {:style {:width "80px"}};}};}}
           [:div.uk-inline.uk-margin-small.uk-padding-small.uk-padding-remove-vertical
            {:data-uk-sticky " bottom: #top"
             :data-uk-toggle "target: #my-id"
             :on-click #(do
                          (.updateOptions
                           @slider-atom
                           (clj->js
                            {:start [64 84]})

                           true)
                          (dispatch [:set-reservation-modal "reset" "valami"]))
             :style {:z-index "980"}}

            [:img.add-reservation {:src "/Icons/plus.svg"
                                   :height "50"
                                   :style {:background "white"
                                           :padding "3px"
                                           :border-radius "100px"}
                                   :width "50"}]]
           [:div {:style {:padding-bottom "18px"}}

            (map-indexed
             #(-> ^{:key %2} [hours-time %2])
             (filter #(and (>= % 12) (<= % 25))
                     (hours)))]]]])})))

      ;[:span.uk-badge.uk-position-bottom-left (:number item)]]]]])

(defn to-monogram [name]
  (str
   (clojure.string/upper-case
    (clojure.string/join
     ". "
     (map first
          (clojure.string/split name #" "))))
   "."))

(defn one-reservation [reservation]
  (let [date (subscribe [:data "date"])]

    (reagent/create-class
     {:component-did-mount #()
      :reagent-render
      (fn [reservation]
        [:div.uk-card.uk-card-default.uk-padding-small.uk-inline.one-reservation
         {:data-uk-toggle "target: #my-id"
          :class (str "colorset-" (:color reservation))
          :on-click #(do
                       (.updateOptions
                        @slider-atom
                        (clj->js
                         {:start [(:start reservation) (:finish reservation)]
                          :range {"min" (:from (opening-hours (js/Date. (:date reservation))))
                                  "max" (:to (opening-hours (js/Date. (:date reservation))))}})
                        true)

                       (dispatch [:set-reservation-modal "replace" reservation]))
          :style  {:cursor "pointer"

                   :position "absolute"
                   :transition "transform .05s ease-in-out"
                   :top (str
                         (* 18 (- (:start reservation) (:from (opening-hours @date))))
                         "px")
                   :height (str
                            (* 18 (- (:finish reservation)
                                     (:start reservation)))
                            "px")
                   :width "100%"}}

         [:div.uk-position-center.uk-text-center.uk-inline
          {:data-uk-tooltip (str "title: " (:name reservation) "; pos: left; cls: uk-active")
           :style {:width "100%" :height "100%" :padding-bottom "20px" :padding-top "20px"}}
          ;(str (:color reservation))
          [:div.uk-position-center (to-monogram (:name reservation))]]
         [:span.uk-label.uk-label-success.uk-position-top
          {:data-uk-tooltip (str "title: " (quarter-to-time (:start reservation)) "; pos: top") :style {:height "25px" :opacity 0}}]
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
        [:div.uk-padding-small.uk-padding-remove-vertical.uk-width-auto.uk-margin-remove
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
            ;(str (str (:reservation-type item) (:number item)))
            ;(str (map #(:places %) @reservations))

            (map-indexed
             #(-> ^{:key %1} [one-reservation %2])
             (filter #(some
                       (fn [a]
                         (= (str (:reservation-type a) (:number a))
                            (str (:reservation-type item) (:number item))))
                       (:places %))
                     @reservations))]]]])})))
                 ;[:div (:number item)]]]])


(defn add-or-remove [item array]
  (if (some #(= item %) array)
    (vec (remove #(= item %) array))
    (vec (conj array item))))

(defn get-column-reservations [one-reservation item id-name]
  (if (some
       (fn [a] (and
                (and
                 (= (:number item) (:number a))
                 (= (:reservation-type item) (:reservation-type a)))
                (not= id-name (str (:id one-reservation) (:name one-reservation)))))
       (:places one-reservation))
    (conj [] (:start one-reservation) (:finish one-reservation))))

(defn get-column-ranges [reservations item id-name]
  (remove nil?
          (map
           #(get-column-reservations % item id-name)
           @reservations)))

(defn decide-fade [ranges this-start this-finish]
  (some #(or
          (and
           (>= this-start (first %))
           (<= this-finish (second %)))
          (and
           (> this-finish (first %))
           (< this-finish (second %)))
          (and
           (> this-start (first %))
           (< this-start (second %)))
          (and
           (<= this-start (first %))
           (>= this-finish (second %))))

        ranges))

(defn one-system [item details reservations]
  (let [reservation-details (subscribe [:data "reservation-modal"])]
    (fn [item details reservations]
      [:div.uk-padding-small.uk-padding-remove-vertical.uk-margin-small-top

       [:button.uk-padding-small.uk-button.uk-button-default
        {:style {:border-radius "5px"}
         :class (if-not (decide-fade
                         (get-column-ranges reservations item (str (:id @reservation-details) (:name @reservation-details)))
                         (:start @reservation-details)
                         (:finish @reservation-details))
                  (if (some #(= item %) (:places @reservation-details))
                    "reserve-system chosen-system"
                    "reserve-system")
                  "system-disabled")
         :on-click #(dispatch [:set-reservation-modal :places (add-or-remove item (:places @details))])
         :disabled (decide-fade
                    (get-column-ranges reservations item (str (:id @reservation-details) (:name @reservation-details)))
                    (:start @reservation-details)
                    (:finish @reservation-details))}
        [:img.uk-align-center.uk-margin-remove-vertical
         {:src (case (:type item)
                 "ps" "/Icons/ps.svg"
                 "xbox" "/Icons/xbox.svg"
                 "pc" "/Icons/pc.svg"
                 "table" "/Icons/table.svg"
                 "hmm")
          :height "50"
          :width "50"}]]])))

(defn choose-systems [details]
  (let [system-map (subscribe [:data "system-map"])
        reservations (subscribe [:data "reservations"])]
    (fn [details]
      [:div.uk-margin-remove.uk-width-1-1.uk-child-width-1-5.uk-grid
       {:data-uk-grid true :style {:padding-bottom "15px"}}

       (for [item (reservation-systems system-map)]
         (-> ^{:key (str (:reservation-type item) (:number item))}
          [one-system item details reservations]))])))

(defn display-time [[from to]]
  (let []
    [:h1.uk-text-center.uk-margin-remove
     (str (quarter-to-time from)
          " - "
          (quarter-to-time to))]))

(defn all-data? [details]
  (cond
    (= 0 (:start @details)) false
    (= 0 (:finish @details)) false
    (= [] (:places @details)) false
    (= "" (:name @details)) false
    :else true))

(defn reservation-modal []
  (let [date (subscribe [:data "date"])
        flatpickr (atom nil)
        reservation-details (subscribe [:data "reservation-modal"])
        reservations (subscribe [:data "reservations"])
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
                                (dispatch [:set-reservation-modal :date a])
                                (dispatch [:set-date a])
                                (dispatch [:dungeon/get-reservations b]))
                              (dispatch [:set-reservation-modal :places
                                           (remove
                                             (fn [d]
                                               (decide-fade
                                                 (get-column-ranges
                                                   reservations
                                                   d
                                                   (str (:id @reservation-details) (:name @reservation-details)))
                                                 (js/parseInt (first @slider-values))
                                                 (js/parseInt (second @slider-values))))
                                             (:places @reservation-details))])
                              (.updateOptions
                               @slider-atom
                               (clj->js
                                {:range {"min" (:from (opening-hours (js/Date. b)))
                                         "max" (:to (opening-hours (js/Date. b)))}})

                               true))})))
         (.on @slider-atom "update" (fn [e] (do
                                              (dispatch [:set-reservation-modal :start (js/parseInt (first (js->clj e)))])
                                              (dispatch [:set-reservation-modal :finish (js/parseInt (second (js->clj e)))])
                                              (dispatch [:set-reservation-modal :places (remove
                                                                                         (fn [d]
                                                                                           (decide-fade
                                                                                            (get-column-ranges
                                                                                             reservations
                                                                                             d
                                                                                             (str (:id @reservation-details) (:name @reservation-details)))
                                                                                            (js/parseInt (first (js->clj e)))
                                                                                            (js/parseInt (second (js->clj e)))))
                                                                                         (:places @reservation-details))])
                                              (reset! slider-values (js->clj e))))))
                              ;

      :reagent-render
      (fn []

        [:div#my-id

         {:data-uk-modal ""}

         [:div.uk-modal-dialog

          ;[:button.uk-modal-close-default
          ; {:data-uk-close true :type "button"}
          ;[:div (str @reservation-details)]
          [:div.uk-modal-header.uk-grid.uk-padding-remove {:data-uk-grid true}
           (if (:_id @reservation-details)
             [:button.uk-button.uk-button-danger.uk-button-small.uk-modal-close.uk-text-center.uk-width-1-2.uk-padding-remove
              {:on-click #(dispatch [:dungeon/remove-reservations
                                     (assoc @reservation-details
                                            :date (convert-iso-to-read (:date @reservation-details)))])
               :type "button"}
              "Törlés"])
           (if (all-data? reservation-details)
             [:button.uk-button.uk-button-primary.uk-button-small.uk-modal-close.uk-text-center.uk-padding-remove
              {:class (if (:_id @reservation-details) "uk-width-1-2" "uk-width-1-1")
               :on-click #(dispatch [:dungeon/add-reservations
                                     (assoc @reservation-details
                                            :date (convert-iso-to-read (:date @reservation-details)))])
               :type "button"}
              "Mentés"])
           [:div.uk-text-truncate.uk-width-1-1.uk-margin-remove {:style {:font-size "2em" :padding-top "10px"}}
            (if (= "" (:name @reservation-details))
              "Foglalás"
              (str  (:name @reservation-details)))]
           [:div.uk-modal-body.uk-padding-remove-vertical.uk-margin-remove-top
            [:div.uk-form.uk-padding-small.remove-padding-vertical
             [:div.uk-child-width-expand.uk-margin-remove {:data-uk-grid true}
             ;[:button {:on-click #} "Hello"]

              [:input.uk-margin-small.uk-text-center.uk-form-medium.uk-margin-remove.uk-input.uk-padding-remove
               {:placeholder "Id"
                :type "number"
                :on-change #(dispatch [:set-reservation-modal :id (-> % .-target .-value)])
                :value (:id @reservation-details)}]
              [:input#flatpickr.uk-input.uk-form-width-medium.uk-form-medium.uk-text-center.uk-padding-remove.uk-margin-remove
               {:placeholder "Dátum"}]
              [:input.uk-margin-small.uk-text-center.uk-form-medium.uk-margin-remove.uk-input.uk-padding-remove
               {:placeholder "Teljes név"
                :on-change #(dispatch [:set-reservation-modal :name (-> % .-target .-value)])
                :value (:name @reservation-details)}]]]
            [display-time @slider-values]
           ;(str (convert-iso-to-read @date))
            [:div#no-ui-slider.uk-margin-small]; [:div (str range-config)]
            [choose-systems reservation-details]]]]])})))

(defn display-date [date]
  (get days (.getDay date)))

(defn panel-img [item img]
  [:div {:style {:cursor "pointer"}
         :on-click #(reset! reservation-type item)} [:img
                                                     {:src (str "/Icons/" img ".svg")
                                                      :class (if (= item @reservation-type) "active-category")
                                                      :style {:padding "5px"}
                                                      :height "40"
                                                      :width "40"}]])

(defn reservation-categories []
  [:div.uk-grid.uk-margin-remove.uk-float-right.uk-child-width-expand {:data-uk-grid true}
   [panel-img "dungeon" "console"]
   [panel-img "tavern" "table"]])

(defn choose-date-panel []
  (let [flatpickr (atom nil)
        date (subscribe [:data "date"])]
    (reagent/create-class
     {:component-did-update #(do
                               (.setDate @flatpickr
                                         (js/Date. @date))
                               (dispatch [:dungeon/get-reservations (convert-iso-to-read @date)]))
      :component-did-mount #(do

                              (reset! flatpickr
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
                                                   (dispatch [:set-date a])
                                                   (dispatch [:dungeon/get-reservations b]))}))))
      :reagent-render
      (fn []
        [:div.uk-margin-remove.uk-padding-remove.uk-width-1-1.trans-black {:style {:border-top-left-radius "20px" :border-top-right-radius "20px"}}
         [:div.uk-grid.uk-child-width-expand.uk-padding-small.uk-margin-remove
          {:data-uk-grid true}
          [:h3.uk-text-left.uk-heading-bullet {:style {:color "white"}} (display-date @date)]
          [:input#choose-date.uk-text-center.uk-padding-remove {:placeholder "Válassz dátumot"}]
          [reservation-categories]]])})))

(defn calc-scrollbar []
  (let [d (.-body js/document)
        offset (-  (.-innerWidth js/window) (.-clientWidth d))]
    (+ 84 offset)))

(defn reservation []
  (let [time-tracker (atom 0)
        date (subscribe [:data "date"])
        system-map (subscribe [:data "system-map"])]

    (reagent/create-class
     {:component-did-mount #(do
                              (dispatch [:dungeon/get-reservations (convert-iso-to-read @date)])
                              (dispatch [:dungeon/get-dungeon])
                              (.setInterval
                               js/window
                               (fn [b] (reset! time-tracker (+ @time-tracker (/ 18 15))))
                               60000)
                              (reset! time-tracker
                                      (+ 60
                                         (* 18
                                            (-
                                             (* 4 (.getHours (js/Date.)))
                                             (:from (opening-hours (js/Date.)))))
                                         (+
                                          (* 18 (quot (.getMinutes (js/Date.)) 15))
                                          (* (/ 18 15) (mod (.getMinutes (js/Date.)) 15))))))
     ; :component-will-unmount #(dispatch [:open-menu false])
      :reagent-render
      (fn []
        [:div.uk-container.uk-container-expand.uk-margin-small-top
         ;(str "calc(100vw -  " @scroll-bar-width "px)")
         [choose-date-panel]
             ;[:input.uk-margin-small.uk-text-center.uk-form-large.uk-margin-remove.uk-width-auto {:placeholder "Id"}]
         [:div.uk-grid.uk-margin-large-bottom
          {:data-uk-grid true :style {:position "relative"}}

          [reservation-modal]
          [reservation-dates]

          [:div.uk-padding-remove.uk-margin-remove.dragscroll.trans-black.uk-width-expand.uk-animation-fade
           {:style {:overflow-x "scroll" :overflow-y "visible" :position "relative"}}
           [:div.uk-grid.uk-child-width-auto.reservation-grid.uk-margin-remove.uk-card.uk-card-secondary.restrict.uk-grid-match.reservation-background.trans-black
            {:data-uk-grid true :style {:height "100%" :padding-bottom "18px" :border-bottom-right-radius "20px"}};}}
            ;(str (.getMinutes (js/Date.)))
            (for [item (reservation-systems system-map)]
              (-> ^{:key (str "h" item)} [reservation-column item]))
            [:div.realtime-tracker
             {:style
              {:top (str
                     @time-tracker
                     "px")}}]]]]])})))
