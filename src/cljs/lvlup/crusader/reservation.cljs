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

(def type-atom (atom nil))

(def timeformat (tformat/formatter "HH:mm"))
(def dateformat (tformat/formatter "yyyy MM dd"))

(defn convert-date [origin]
  (tformat/unparse dateformat (tcore/plus (coerce/from-long origin) (tcore/days 1))))

(defn convert-time [origin]
  (tformat/unparse timeformat (coerce/from-long origin)))

(defn date-picker [placeholder the-atom]
  (let [reservation (subscribe [:data "reservation-data"])
        date-picker-dom (atom nil)]
    (reagent/create-class
     {:component-did-mount #(do
                              (reset! date-picker-dom
                                      (.pickadate ($ ".date-picker")
                                                  (clj->js
                                                   {"onSet"
                                                    (fn [a]
                                                      (if (not= nil (get (js->clj a) "select"))
                                                        (do
                                                          (dispatch [:set-reservation-data :date
                                                                     (convert-date
                                                                      (get (js->clj a) "select"))])
                                                          (dispatch
                                                           [:set-date
                                                            (convert-date
                                                             (get (js->clj a) "select"))
                                                            type]))))}))));(render-time-table time-table renderer @date)
                                                       ;(reset! counter (inc @counter))))}))))
      :reagent-render
      (fn [placeholder the-atom]
        [:div.uk-inline
         [:input.date-picker.uk-input.uk-text-small.uk-text-center
          {:placeholder placeholder
           :value (:date @reservation)}]])})))

(defn time-picker [placeholder the-key]
  (let [reservation (subscribe [:data "reservation-data"])
        time-picker-dom (atom nil)]
    (reagent/create-class
     {:component-did-mount #(reset! time-picker-dom
                                    (.pickatime ($ (str ".time-picker" (name the-key)))
                                                (clj->js {"onSet" (fn [a]
                                                                    (dispatch [:set-reservation-data the-key

                                                                               (str
                                                                                (quot (get (js->clj a) "select") 60)
                                                                                ":"
                                                                                (rem (get (js->clj a) "select") 60))]))
                                                          :disable [{:from [2 0] :to [11 30]}]
                                                          :format "HH:i"})))
      :reagent-render
      (fn [placeholder the-key]
        [:div.uk-inline
         [:input.uk-input.uk-text-small.uk-text-center
          {:value (get @reservation the-key)
           :class (str "time-picker" (name the-key))
           :placeholder placeholder}]])})))

(defn system-checkbox [reservation item]
  (let [reservation (subscribe [:data "reservation-data"])
        actual-page (subscribe [:data "actual-page"])]
    (fn []

      [:li {:class (if (not= 0 (count (filter (fn [b] (= (:name item) b)) (:system-name @reservation)))) "system-active" "")}
       [:a
        {:id name
         :on-click (fn [a] (if (= 0 (count (filter (fn [b] (= (:name item) b)) (:system-name @reservation))))
                             (dispatch [:set-reservation-data :system-name (conj (:system-name @reservation) (:name item))])
                             (dispatch [:set-reservation-data :system-name (into [] (remove (fn [c] (= c (:name item))) (:system-name @reservation)))])))}
                                   ;(swap! reservation assoc :system-name)))}

        (:name item)]])))

(defn reservation-item [item] [:div

                               [:button.uk-button.uk-button-primary.uk-width-1-1
                                (str (:system-name item) " : " (:start-hour item) " - " (:finish-hour item))]
                               [:button.uk-button.uk-button-default.uk-width-2-3
                                (:name item)]
                               [:button.uk-button.uk-button-default.uk-width-1-3
                                {:on-click #(dispatch [:delete-reservation (:_id item) type])}
                      ;(render-time-table time-table renderer @date))}

                                "X"]])

(defn delete-reservation []
  (let [date (subscribe [:data "time"])
        reservation (atom {:date nil})
        reservations (subscribe [:data "reservations"])]
    (fn []
      [:div
       [:h2.uk-heading-bullet "Edit reservation!"]

       [:div.uk-child-width-1-1
           ;[date-picker "Date" reservation]
        [:div.uk-inline
         (map-indexed #(-> ^{:key %1} [reservation-item %2]) @reservations)]]])))

(defn add-reservation []
  (let [actual-page (subscribe [:data "actual-page"])
        system-map (subscribe [:data "system-map"])
        reservation (subscribe [:data "reservation-data"])]

    (fn []

      [:div
       [:h2.uk-heading-bullet "Add reservation!"]
            ;[:h1 @actual-page]
       [:div.uk-child-width-1-1
        [:input.uk-input.uk-text-small.uk-text-center
         {:placeholder "Name"
          :value (:name @reservation)
          :on-change #(dispatch [:set-reservation-data :name (-> % .-target .-value)])}]

        [date-picker "Date" type]
        [time-picker "Start" :start-hour]
        [time-picker "Finish" :finish-hour]
            ;  (str @system-map)
        [:div.uk-inline
         [:button.uk-button.uk-button-default.uk-align-center.uk-width-1-1.uk-margin-remove {:type "button"} "Helyek"]
         [:div
          {:data-uk-dropdown "mode: click; pos: bottom-center; animation: uk-animation-slide-top-small; duration: 250"}

          [:div
           [:ul.uk-nav.uk-dropdown-nav

            (map-indexed
             #(-> ^{:key (:name %2)} [system-checkbox reservation %2])
             (sort-by :number @system-map))]]]] [:div.uk-button.uk-button-primary.uk-width-1-1.uk-margin-remove.uk-align-center
                                                 {:on-click #(cond
                                                               (= 0 (count (:system-name @reservation))) (.notification js/UIkit "Nem választottál ki gépet :(" (clj->js {"pos" "top-right"}))
                                                               (= "" (:start-hour @reservation)) (.notification js/UIkit "Nem adtál meg kezdőidőpontot :/" (clj->js {"pos" "top-right"}))
                                                               (= "" (:name @reservation)) (.notification js/UIkit "Nem adtál meg nevet :/" (clj->js {"pos" "top-right"}))
                                                               (= "" (:date @reservation)) (.notification js/UIkit "Nem adtál meg dátumot :/" (clj->js {"pos" "top-right"}))
                                                               :else (dispatch [:add-reservation (assoc @reservation :type @actual-page)]))}

                                                 "Foglalás!"]]])))

(defn sidebar-delete-reservation []
  [:div#my-id2
   {:data-uk-offcanvas "mode: flip; overlay: true; flip: true"}
   [:div.uk-offcanvas-bar
    [:button.uk-offcanvas-close
     {:data-uk-close "uk-close", :type "button"}]
    [delete-reservation]]])

(defn sidebar-reservation []
  (let [actual-page (subscribe [:data "actual-page"])]
    (fn []
      @actual-page
      [:div#my-id
       {:data-uk-offcanvas "mode: flip; overlay: true"}
       [:div.uk-offcanvas-bar

        [:button.uk-offcanvas-close
         {:data-uk-close "uk-close", :type "button"}]
        [add-reservation]]])))

(defn get-day [nap]
  (case nap
    1 "Hétfő"
    2 "Kedd"
    3 "Szerda"
    4 "Csütörtök"
    5 "Péntek"
    6 "Szombat"
    0 "Vasárnap"))

(defn write-date [date]
  (str (.getFullYear @date) "-" (inc (.getMonth @date)) "-" (.getDate @date)))

(defn get-date [date]
  (str
   (case (inc (.getMonth @date))
     1 "Január"
     2 "Február"
     3 "Március"
     4 "Április"
     5 "Május"
     6 "Június"
     7 "Július"
     8 "Augusztus"
     9 "Szeptember"
     10 "Október"
     11 "November"
     12 "December")
   " "
   (.getDate @date)
   "."))

(defn reservation-2 []
  (let [reservation (atom {:date nil})
        date (subscribe [:data "time"])
        reservations (subscribe [:data "reservations"])
        counter (subscribe [:data "counter"])]

    (reagent/create-class
     {:component-did-mount #(do

                              (start-router!)
                              (chsk-send! [:dungeon/get-dungeon]))
                                   ;do (render-time-table time-table renderer @date))
      :reagent-render
      (fn []
        @counter
        [:div.uk-offcanvas-content {:style {:user-select "none"}}

         [:div.uk-card.uk-card-secondary ;{:data-uk-sticky "show-on-up: true; uk-animation-slide-top;"}
          [:div.uk-child-width-1-3.uk-grid {:data-uk-grid true}
           [:a.uk-text-left
            {:on-click #(do (dispatch [:change-date "sub"]))
             :data-uk-icon "icon: chevron-left; ratio: 3"}]
           [:div
            [:h1.uk-margin-remove.uk-text-center (get-date date)]
            [:h3.uk-margin-remove.uk-text-center (get-day (.getDay @date))]]
           [:a.uk-text-right
            {:on-click #(do (dispatch [:change-date "add"]))
             :data-uk-icon "icon: chevron-right; ratio: 3"}]
           [sidebar-reservation]
           [sidebar-delete-reservation]]
          [:div.uk-child-width-1-3
           [:a  {:data-uk-icon "icon: plus-circle; ratio: 1.5"
                 :class "uk-button uk-button-primary"
                 :type "button"
                 :data-uk-toggle "target: #my-id"}]

           [date-picker "Date" reservation]

           [:a  {:data-uk-icon "icon: file-edit; ratio: 1.5"
                 :class "uk-button uk-button-primary"
                 :type "button"
                 :data-uk-toggle "target: #my-id2"}]]]
         (if   (= @reservations nil)

           [:img#loading
            {:style {:width "auto"
                     :height "300px"
                     :position "absolute"
                     :left "50%"
                     :top "50%"
                     :margin-left "-150px"
                     :margin-top "-150px"}
             :src "/img/lvlup-logo-transparent.png"}])
         [:div.timetable]])})))

(defn quarters [hour quarter]
  [:div.uk-text-right {:style {:padding-right "10px"}} quarter])

(defn hours-time [hour]
  (let [minutes ["00" 15 30 45]]
    (fn [hour]
      [:div.uk-grid.uk-grid-match.uk-margin-remove {:data-uk-grid true};;:style {:border-bottom "1px solid red"}}
       [:div.uk-width-expand.uk-padding-remove
        [:div.uk-inline
         [:div.uk-margin-small.uk-position-center
          {:style {:font-size "1.8em"}}
          hour]]]
       [:div.uk-width-expand.uk-padding-remove
        (map-indexed
         #(-> ^{:key %2} [quarters hour %2])
         minutes)]])))

(defn reservation-dates []
  (let [hours (vec (range 12 26))]
    [:div
     [:div.uk-card.uk-card-secondary.uk-padding-remove

      [:div {:style {:width "80px"}}
       [:div.uk-inline.uk-margin-small.uk-padding-small.uk-padding-remove-vertical.uk-card.uk-card-secondary {:data-uk-sticky " bottom: #top", :style {:z-index "980" :border-radius "30px"}}
        [:img {:src "/Icons/time.svg"

               :height "50"
               :width "50"}]]
       [:div
        (map-indexed
         #(-> ^{:key %2} [hours-time %2])
         (filter #(and (>= % 12) (<= % 25))
                 hours))]]]]))

      ;[:span.uk-badge.uk-position-bottom-left (:number item)]]]]])

(defn calc-top [item])

(defn calc-height [item])

(defn one-reservation [reservation]
  [:div.uk-card.uk-card-default.uk-padding-small.uk-margin-small.uk-inline.one-reservation
   {:data-uk-toggle "target: #my-id"
    :style {:transition "transform .05s ease-in-out"
            :top (str
                  (* 18 (calc-top (:start-hour reservation)))
                  "px")
            :height (str
                     (* 18 (calc-height (:start-hour reservation)))
                     "px")
            :width "100%"}};}
   [:div.uk-position-center {:data-uk-tooltip "title: Morvai Viktor; pos: bottom" :style {:color "white"}} "M. V."]
   [:span.uk-label.uk-label-success.uk-position-top {:data-uk-tooltip "title: 12:30; pos: top" :style {:height "20px" :opacity 0}}]
   [:span.uk-label.uk-label-success.uk-position-bottom {:data-uk-tooltip "title: 15:45; pos: bottom" :style {:height "25px" :opacity 0}}]])

(defn reservation-column [item]
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
          [one-reservation]]]]])}))
              ;[:div (:number item)]]]])


(defn choose-systems []
  (let [system-map (subscribe [:data "system-map"])]
    [:div.uk-grid.uk-margin {:data-uk-grid true}
     (for [item @system-map]
       (-> ^{:key (:number item)} [:div.uk-width-1-4.uk-padding-small.reserve-system
                                   [:img.uk-align-center
                                    {:src (case (:type item)
                                            "ps" "/Icons/ps.svg"
                                            "xbox" "/Icons/xbox.svg"
                                            "pc" "/Icons/pc.svg"
                                            "hmm")
                                     :height "50"
                                     :width "50"}]]))]))

(def szeged-opening-hours
  ;Vasarnap az elso nap utana hetfo
  {0 {:from 48 :to 92}
   1 {:from 48 :to 96}
   2 {:from 48 :to 96}
   3 {:from 48 :to 96}
   4 {:from 48 :to 104}
   5 {:from 48 :to 104}
   6 {:from 48 :to 104}})

(defn which-quarter [number]
  (case number
    0 "00"
    1 "15"
    2 "30"
    3 "45"))

(defn to-24-pm [hour]
  (if (< 23 hour)
    (- hour 24)
    hour))

(defn quarter-to-time [quarter]
  (str (gstring/format "%02d" (to-24-pm (quot quarter 4)))
       ":"
       (which-quarter (mod quarter 4))))

(defn display-time [[from to]]
  (let []
    [:h1.uk-text-center
     (str (quarter-to-time from)
          " - "
          (quarter-to-time to))]))

(defn reservation-modal []
  (let [date (subscribe [:data "time"])
        modal-day (atom 0)
        opening-hours (fn [] (get szeged-opening-hours @modal-day))
        slider-atom (atom nil)
        slider-values (atom nil)]
    (reagent/create-class
     {:component-did-mount #(do
                              (.flatpickr
                               js/window
                               "#flatpickr"
                               (clj->js {"altInput" true
                                         "altFormat" "F j, Y"
                                         "dateFormat" "Y-m-d"
                                         "locale" "hu"
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
        [:div#my-id
         {:data-uk-modal "bg-close:	false" :style {:opacity 0.95}}
         [:div.uk-modal-dialog
          [:button.uk-modal-close-default
           {:data-uk-close true :type "button"}]
          [:div.uk-modal-header [:h2.uk-modal-title "Foglalás módosítása"]]
          [:div.uk-modal-body
           [:form.uk-form
            [:div.uk-margin {:data-uk-grid true}
             [:input#flatpickr.uk-input.uk-form-width-medium.uk-form-large.uk-text-center.uk-width-1-2 {:placeholder "Dátum"}]
             [:h2.uk-margin-small.uk-width-1-2.uk-text-center.uk-text-truncate "Asztalos Ádám"]]]
           [display-time @slider-values]

           [:div#no-ui-slider]; [:div (str range-config)]
           [choose-systems]]

          [:div.uk-modal-footer.uk-text-right
           [:button.uk-button.uk-button-default.uk-modal-close
            {:type "button"}
            "Mégsem"]
           [:button.uk-button.uk-button-primary
            {:type "button"}
            "Mentés"]]]])})))

(defn reservation []
  (let [system-map (subscribe [:data "system-map"])]
    [:div.uk-grid.uk-margin-top

     {:data-uk-grid true}
     [reservation-modal]
     [reservation-dates]
     [:div.uk-padding-remove.uk-margin-remove.dragscroll {:style {:width "calc(100vw - 100px)" :overflow-x "scroll" :overflow-y "visible"}}
      [:div.uk-grid.uk-child-width-auto.reservation-grid.uk-margin-remove.uk-card.uk-card-secondary.restrict
       {:data-uk-grid true :style {:width "max-content" :height "100%"}};}}

       (for [item (sort-by :number @system-map)]
         (-> ^{:key (str "h" item)} [reservation-column item]))]]]))
