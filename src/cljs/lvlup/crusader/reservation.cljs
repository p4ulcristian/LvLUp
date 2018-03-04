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

(def szeged-opening-hours
  ;Vasarnap az elso nap utana hetfo
  {0 {:from 48 :to 92}
   1 {:from 48 :to 96}
   2 {:from 48 :to 96}
   3 {:from 48 :to 96}
   4 {:from 48 :to 104}
   5 {:from 48 :to 104}
   6 {:from 48 :to 104}})

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

(defn reservation-dates []
  (let [date (subscribe [:data "date"])
        get-opening-hours (fn [a] (if a (get szeged-opening-hours (.getDay a))))
        opening-hours (fn [] (get-opening-hours @date))
        hours (fn []
                (vec (range (quot (:from (opening-hours)) 4)
                            (quot (:to (opening-hours)) 4))))]

    (reagent/create-class
     {:component-did-mount #(if-not (<
                                     (quot
                                      (:from (get-opening-hours @date))
                                      4))
                              (.getHours @date)
                              (dispatch [:set-date (yesterday @date)]))
                                      ;(get-opening-hours (yesterday @date))))
      :reagent-render
      (fn []
        [:div
         [:div.uk-card.uk-card-secondary.uk-padding-remove.uk-margin-remove
          ;
          [:div {:style {:width "80px"}}
           [:div.uk-inline.uk-margin-small.uk-padding-small.uk-padding-remove-vertical.uk-card.uk-card-secondary
            {:data-uk-sticky " bottom: #top"
             :data-uk-toggle "target: #my-id"
             :on-click (dispatch [:set-modal-data {}])
             :style {:z-index "980" :border-radius "30px"}}
            [:img.add-reservation {:src "/Icons/plus.svg"
                                   :height "50"
                                   :width "50"}]]
           [:div
            (str @date)
            (str (opening-hours))
            (map-indexed
             #(-> ^{:key %2} [hours-time %2])
             (filter #(and (>= % 12) (<= % 25))
                     (hours)))]]]])})))

      ;[:span.uk-badge.uk-position-bottom-left (:number item)]]]]])


(defn one-reservation [reservation]
  [:div.uk-card.uk-card-default.uk-padding-small.uk-margin-small.uk-inline.one-reservation
   {:data-uk-toggle "target: #my-id"
    :on-click (dispatch [:set-modal-data reservation])
    :style {:transition "transform .05s ease-in-out"
            :top (str
                  (* 18 (:start reservation))
                  "px")
            :height (str
                     (* 18 (:finish reservation))
                     "px")
            :width "100%"}};}
   [:div.uk-position-center {:data-uk-tooltip "title: Morvai Viktor; pos: bottom" :style {:color "white"}} "M. V."]
   [:span.uk-label.uk-label-success.uk-position-top {:data-uk-tooltip "title: 12:30; pos: top" :style {:height "20px" :opacity 0}}]
   [:span.uk-label.uk-label-success.uk-position-bottom {:data-uk-tooltip "title: 15:45; pos: bottom" :style {:height "25px" :opacity 0}}]])

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
      (fn []
        [:div.uk-padding-small.uk-padding-remove-vertical.uk-width-auto
         [:div.uk-padding-remove {:style {:height "100%"}}
          [:div.uk-text-center
           [:div.uk-inline.uk-margin-small.uk-align-center
            [:img
             {:src (case (:type item)
                     "ps" "/Icons/ps.svg"
                     "xbox" "/Icons/xbox.svg"
                     "pc" "/Icons/pc.svg"
                     "hmm")
              :height "50"
              :width "50"}]
            [:span.uk-badge.uk-position-bottom-left (:number item)]]]
          [:div.uk-grid.uk-margin-remove.uk-height-1-1 {:data-uk-grid true :style {:height "calc(100% - 60px)"}} ;:style {:height "100%"}}
           [:div.uk-width-1-1.dropzone.uk-padding-remove
            (map-indexed
             #(-> ^{:key %2} [one-reservation %2])
             @reservations)]]]])})))
                 ;[:div (:number item)]]]])


(defn choose-systems []
  (let [system-map (subscribe [:data "system-map"])]
    [:div.uk-grid.uk-child-width-1-6.uk-margin-remove.uk-width-1-1 {:data-uk-grid true}
     (for [item @system-map]
       (-> ^{:key (:number item)}
        [:div.uk-padding-small.reserve-system
         [:img.uk-align-center
          {:src (case (:type item)
                  "ps" "/Icons/ps.svg"
                  "xbox" "/Icons/xbox.svg"
                  "pc" "/Icons/pc.svg"
                  "hmm")
           :height "50"
           :width "50"}]]))]))

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

(defn display-time [[from to]]
  (let []
    [:h1.uk-text-center.uk-margin-remove
     (str (quarter-to-time from)
          " - "
          (quarter-to-time to))]))

(defn reservation-modal []
  (let [date (subscribe [:data "date"])
        modal-data (subscribe [:data "modal-data"])
        modal-day (atom 0)
        opening-hours (fn [] (get szeged-opening-hours @modal-day))
        slider-atom (atom nil)
        slider-values (atom nil)]
    (reagent/create-class
     {:component-did-mount #(do
                              (chsk-send! [:dungeon/get-reservations])
                              (.flatpickr
                               js/window
                               "#flatpickr"
                               (clj->js {"altInput" true
                                         "altFormat" "F j, Y"
                                         "dateFormat" "Y-m-d"
                                         "locale" "hu"
                                         "inline" true
                                         "minDate" (.fp_incr (js/Date.) -1)
                                         "onChange"

                                         (fn [a b c]
                                           (reset! modal-day (.getDay (first a)))
                                           (.updateOptions

                                            @slider-atom
                                            (clj->js
                                             {:range {"min" (:from (opening-hours))
                                                      "max" (:to (opening-hours))}})
                                            true))}))
                              (reset! slider-atom
                                      (.create js/noUiSlider (.getElementById js/document "no-ui-slider")
                                               (clj->js
                                                {:start [55 66]
                                                 :connect true
                                                 :step 1
                                                 :margin 4
                                                 :behaviour "drag-tap"
                                                 :range {"min" (:from (opening-hours))
                                                         "max" (:to (opening-hours))}})))

                              (.on @slider-atom "update" (fn [e] (reset! slider-values (js->clj e)))))
                              ;

      :reagent-render
      (fn []
        [:div#my-id.uk-modal-container
         {:data-uk-modal "bg-close:	false" :style {:opacity 0.95}}
         [:div.uk-modal-dialog
          [:button.uk-modal-close-default
           {:data-uk-close true :type "button"}]
          [:div.uk-modal-header [:h2.uk-modal-title "Foglalás módosítása"]]
          [:div.uk-modal-body.uk-padding-remove-vertical
           [:form.uk-form.uk-padding-small.remove-padding-vertical
            [:div {:data-uk-grid true}
             [:input#flatpickr.uk-input.uk-form-width-medium.uk-form-large.uk-text-center.uk-width-1-2 {:placeholder "Dátum"}]
             [:h2.uk-margin-small.uk-width-1-2.uk-text-center.uk-text-truncate "Asztalos Ádám"]]]
           [display-time @slider-values]
           ;(str @reservations)
           [:div#no-ui-slider.uk-margin-small]; [:div (str range-config)]
           [choose-systems]]

          [:div.uk-modal-footer.uk-text-right
           [:button.uk-button.uk-button-default.uk-modal-close
            {:type "button"}
            "Mégsem"]
           [:button.uk-button.uk-button-primary
            {:type "button"}
            "Mentés"]]]])})))

(defn choose-date-panel []
  (let [date (subscribe [:data "date"])
        modal-data (subscribe [:data "modal-data"])
        modal-day (atom 0)
        opening-hours (fn [] (get szeged-opening-hours @modal-day))
        slider-atom (atom nil)
        slider-values (atom nil)]
    (reagent/create-class
     {:component-did-mount #(do
                              (chsk-send! [:dungeon/get-reservations])
                              (.flatpickr
                               js/window
                               "#choose-date"
                               (clj->js {"altInput" true
                                         "altFormat" "F j, Y"
                                         "dateFormat" "Y-m-d"
                                         "locale" "hu"
                                         "minDate" (.fp_incr (js/Date.) -1)
                                         "onChange"

                                         (fn [a b c]
                                           (dispatch [:set-date b]))})))
      :reagent-render
      (fn []
        [:div.uk-card.uk-card-secondary.uk-margin-remove.uk-padding-remove.uk-width-1-1
         [:div.uk-grid.uk-child-width-expand.uk-padding-small
          {:data-uk-grid true}
          [:input#choose-date {:placeholder "Válassz dátumot!"}]
          [:h3.uk-text-right (str @date)]]])})))
(defn reservation []
  (let [system-map (subscribe [:data "system-map"])]
    [:div {:style {:opacity 0.8}}
     [choose-date-panel]
     [:div.uk-grid
      {:data-uk-grid true}

      [reservation-modal]
      [reservation-dates]
      [:div.uk-padding-remove.uk-margin-remove.dragscroll {:style {:width "calc(100vw - 80px)" :overflow-x "scroll" :overflow-y "visible"}}
       [:div.uk-grid.uk-child-width-auto.reservation-grid.uk-margin-remove.uk-card.uk-card-secondary.restrict
        {:data-uk-grid true :style {:width "max-content" :height "100%"}};}}

        (for [item (sort-by :number @system-map)]
          (-> ^{:key (str "h" item)} [reservation-column item]))]]]]))
