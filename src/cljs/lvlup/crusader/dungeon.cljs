(ns lvlup.crusader.dungeon
  (:require
   [reagent.core :as reagent :refer [atom]]
   [lvlup.sente :refer [chsk-send! start-router! chsk-reconnect! chsk-disconnect!]]
   [reagent.session :as session]
   [clojure.string  :as str]
  ; [jayq.core :refer [$]]
   [lvlup.utils :as utils :refer [notification]]
   [cljs.core.async :as async  :refer (<! >! put! chan timeout)]
   [goog.events :as events]
   [goog.events.EventType :as EventType]
   [goog.dom :as dom]
   [cljs-time.core :as core]
   [cljs-time.format :as format]
   [cljs-time.coerce :as coerce]
   [cljs.reader :refer [read-string]]
   [re-frame.core :refer [subscribe dispatch dispatch-sync]]
   [lvlup.events]
   [taoensso.sente  :as sente  :refer (cb-success?)]
   [lvlup.subs])
  (:require-macros
   [cljs.core.async.macros :as asyncm :refer (go go-loop)]))

(defn convert-to-clojurescript-time [ido]
  ;(js/String (coerce/from-long (js/parseInt ido)))
  (if (= 13 (count ido))
    (js/String (coerce/from-long (js/parseInt ido)))
    ido))

(defn iterate-convert [players]
  (reduce merge {}
          (map #(if (:start (second %))
                  (assoc {} (first %) (assoc (second %)
                                        :start (convert-to-clojurescript-time
                                                 (str
                                                   (:start (second %))))))
                  (assoc {} (first %) (second %)))
               players)))

(def system-colors
  ["#222"
   "rgb(255,102,0)"
   "rgb(255,147,0)"
   "rgb(255,239,0)"
   "rgb(94,255,0)"
   "rgb(201,255,0)"
   "rgb(0,255,249)"
   "rgb(0,53,255)"
   "rgb(236,131,240)"
   "rgb(228,17,160)"
   "rgb(146,3,45)"])

(defn get-photo-by-type [type]
  (case type
    "ps" "/Icons/ps.svg"
    "xbox" "/Icons/xbox.svg"
    "vr" "/Icons/vr.svg"
    "pc" "/Icons/pc.svg"
    "monster" "/Icons/monster.png"
    "beginner" "/Icons/bronze.png"
    "medium" "/Icons/silver.png"
    "hardcore" "/Icons/gold.png"
    "hmm"))




(defn abs [n] (max n (- n)))

(defn includes? [word text]
  (clojure.string/includes? text word))

(defn lower [word]
  (clojure.string/lower-case word))


(defn filter-by-name-and-id [members search-term keep?]
  (if (not= "" @search-term)
    (doall
     (filter
      #(or (includes? (lower @search-term)
                      (lower (:name %)))
           (= (js/parseInt @search-term) (:id %)))
      members))
    (if keep? members [])))

(def timeformat (format/formatter "HH:mm"))

(defn convert-time [origin]
  (format/unparse timeformat (coerce/from-long origin)))


(defn calculate-time-zone []
  (let [date (atom (js/Date.))]
    (core/minus
      (core/now)
      (core/hours (/ (.getTimezoneOffset @date) 60)))))





(defn calculate-time-interval [time-one time-two]
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

(defn count-time-halves [start finish]
  (let [seconds (if (core/before?
                      start
                      finish)
                  (calculate-time-interval
                    start
                    finish)
                  0)
        minutes (quot
                  (abs seconds)
                  60)]

    (if minutes
      (* 0.5
         (+
           (quot
             minutes
             30)
           (if (< 10 (mod
                       minutes
                       30))
             1
             0)))
      0)))


(defn get-halves [seconds]
  (let [minutes (quot seconds 60)
        remaining-minutes (mod minutes 30)]
    (if (> 10 remaining-minutes)
      (quot minutes 30)
      (inc (quot minutes 30)))))




(defn type-money [seconds type]
  (let [halves (get-halves seconds)
        prices (subscribe [:the-prices])
        type-price (-> @prices :systems (get (keyword type)) :price)]
    (* halves type-price)))




(defn make-hour-vec [hour-str]
  (let [hour-str-vec (clojure.string/split hour-str #"-")
        from (clojure.string/split (first hour-str-vec) #":")
        to (clojure.string/split (second hour-str-vec) #":")
        from-hour (first from)
        from-minutes (second from)
        to-hour  (first to)
        to-minutes (second to)
        now (core/now)
        year (core/year now)
        month (core/month now)
        day (core/day now)]
    [(core/date-time year month day from-hour from-minutes)
     (core/date-time year month day to-hour to-minutes)]))


(defn minute-to-money [seconds type]
  (let [minutes (quot seconds 60)
        remaining-minutes (mod minutes 30)
        halves (get-halves seconds)
        prices (subscribe [:the-prices])
        get-start (-> @prices :systems (get (keyword type)) :start)
        type-price (-> @prices :systems (get (keyword type)) :price)]

    (if (neg? seconds)
      0
      (if get-start
        (if
          (< halves (count get-start))
          (get get-start halves)
          (+
            (get get-start (dec (count get-start)))
            (* (- halves (count get-start))
               type-price)))
        (type-money seconds type)))))

(defn total-price [discount type start spent-time total]
  (let [hour-range (make-hour-vec (:hours discount))
        every? (js/parseInt (:frequency discount))
        percentage (js/parseInt (:percentage discount))
        every-in-sec (* every? 30 60)
        halves (get-halves spent-time)]
    (if (> spent-time 0)
      (if (and
            (and (core/after? start (first hour-range))
                 (core/before? start (second hour-range)))
            (>= halves every?))
        (do
          (total-price
            discount
            type
            (core/plus start
                       (core/minutes (* 30 every?)))
            (- spent-time every-in-sec)
            (+ total (*
                       (/ percentage 100)
                       (minute-to-money
                         (* every? 30 60)
                         type)))))
        (+ total (type-money spent-time type)))
      total)))





(defn all-items-to-hours [player-id]
  (let [all-systems (subscribe [:dungeon])
        all-players (filter (fn [a] (and (not= a {}) (not= a nil))) (map #(:players %) @all-systems))
        this-player-systems (doall
                             (filter #(= (js/parseInt player-id) (:member-id %))
                                     (doall
                                      (filter (fn [a] (contains? a :start))
                                              (map #(second (first %))
                                                   all-players)))))
        total-price (reduce + (map #(count-time-halves
                                     (:start %)
                                     (calculate-time-zone))
                                   this-player-systems))]

    total-price))



(defn all-items-to-money [player-id]
  (let [all-systems (subscribe [:dungeon])
        all-players (filter (fn [a] (and (not= a {}) (not= a nil))) (map #(:players %) @all-systems))
        this-player-systems (doall
                             (filter #(= (js/parseInt player-id) (:member-id %))
                                     (doall
                                      (filter (fn [a] (contains? a :start))
                                              (map #(second (first %))
                                                   all-players)))))
        total-price (reduce + (map #(minute-to-money (if
                                                      (core/before?
                                                       (:start %)
                                                       (calculate-time-zone))
                                                      (core/in-seconds
                                                       (core/interval
                                                        (:start %)
                                                        (calculate-time-zone)))
                                                      0)
                                                     (:type %))
                                   this-player-systems))]
    total-price))
      ;total-price))



(defn elapsing-time [seconds]
  (let [seconds-negated (* -1 seconds)]
    (if (neg? seconds)
      (str "- " (quot seconds-negated 3600) "h " (mod (quot seconds-negated 60) 60) "m " (mod seconds-negated 60) "s")
      (str (quot seconds 3600) "h " (mod (quot seconds 60) 60) "m " (mod seconds 60) "s"))))



(defn day-to-number [date]
  (case date
    "sunday" 0
    "monday" 1
    "tuesday" 2
    "wednesday" 3
    "thursday" 4
    "friday" 5
    "saturday" 6))


(defn get-open-date []
  (.getDay (core/now)))












(defn compare-to-today [date]
  (= (day-to-number date) (get-open-date)))


(defn filter-discount [item]
  (let [now (calculate-time-zone)
        discounts (subscribe [:discounts-data])]
    (first
      (filter
        #(let [[from to] (:range (:dates %))
               hour-range (make-hour-vec (:hours %))]
           (and
             (and
               (core/after? now (first hour-range))
               (core/before? now (second hour-range)))
             (some
               (fn [a] (= a (:type item)))
               (:type %))
             (some
               (fn [a] (compare-to-today a))
               (:days %))
             (and
               (core/before? now (apply core/date-time to))
               (core/after? now (apply core/date-time from)))))
        (map val @discounts)))))






(defn pay-action [item player-number]
  (let [disc-id (:discount-id (get (:players item) player-number))
        disc-players (if disc-id
                       (map key (filter #(= disc-id (:discount-id (val %)))
                                        (:players item)))
                       (vector player-number))]

    (dispatch
      [:dungeon/change
       (assoc item :color "#222" :players (apply dissoc (iterate-convert (:players item))
                                                 disc-players))])
    (doseq [player-number disc-players]
      (dispatch
        [:dungeon/add-invoice
         [:progress
          (assoc  {}
            :id (str (random-uuid))
            :color (:color item)
            :discount (if (:discount (get (:players item) player-number))
                        true
                        false)
            :number (:number item)
            :type (:type item)
            :controller player-number
            :name (:name item)
            :member-id (:member-id (get (:players item) player-number))
            :payed false
            :start (convert-to-clojurescript-time (str (:start (get (:players item) player-number))))
            :finish (convert-to-clojurescript-time (str (calculate-time-zone)))
            :price (if (:discount (get (:players item) player-number))
                     (total-price
                       (:discount (get (:players item) player-number))
                       (:type item)
                       (:start (get (:players item) player-number))
                       (core/in-seconds (core/interval
                                          (:start (get (:players item) player-number))
                                          (calculate-time-zone)))
                       0)
                     (minute-to-money
                       (core/in-seconds
                         (core/interval
                           (:start (get (:players item) player-number))
                           (calculate-time-zone)))
                       (:type item))))]]
        8000 ; Timeout
        (fn [reply] ; Reply is arbitrary Clojure data
          (if (sente/cb-success? reply) ; Checks for :chsk/closed, :chsk/timeout, :chsk/error
            (dispatch [:set-loading false])))))))

(defn pay [player-number item name]
  (let [first-time? (atom true)]
    (fn [player-number item name]
      [:button.uk-button-small.uk-button.uk-button-primary.uk-width-1-3
       {;:disabled @loading
        :data-uk-icon "icon: cart"
        :data-uk-tooltip "title: Kasszához küldés"
        :on-click #(if
                     @first-time?
                     (do
                       (reset! first-time? true)
                       (notification (str name " kasszához küldve!"))
                       ;(dispatch [:set-loading true])
                       (pay-action item player-number)))}])))

(defn pay-with-season-pass [player-number item name]
  (let [first-time? (atom true)]
    (fn [player-number item name]
      [:button.uk-button-small.uk-button.uk-button-primary.uk-width-1-3
       {:data-uk-icon "icon: credit-card"
        :data-uk-tooltip "title: Bérlettel fizetés"
        :on-click #(if first-time?
                     (do
                       (reset! first-time? false)
                       (notification (str name " fizetett bérlettel!"))
                       (dispatch [:dungeon/add-invoice
                                  [:payed (assoc  {}
                                            :id (str (random-uuid))
                                            :color (:color item)
                                            :number (:number item)
                                            :type (:type item)
                                            :controller player-number
                                            :name (:name item)
                                            :member-id (:member-id (get (:players item) player-number))
                                            :start (convert-to-clojurescript-time (str (:start (get (:players item) player-number))))
                                            :finish (convert-to-clojurescript-time (str (calculate-time-zone)))
                                            :price 0)]])
                       (dispatch
                        [:dungeon/change
                         (assoc item :players (dissoc (iterate-convert (:players item))
                                                      player-number))])
                       (dispatch [:dungeon/season-pass
                                  {:quantity
                                   (* -1
                                      (count-time-halves
                                        (:start (get (:players item) player-number))
                                        (calculate-time-zone)))
                                   :member-id (:member-id (get (:players item) player-number))}])))}])))






(defn modify-time [player-number item elojel how-much name]
  (fn [player-number item elojel how-much name]
    [:button.uk-button-small.uk-button.uk-button-danger.uk-width-1-4
     {:disabled (if (= nil (:start (get (:players item) player-number))) true false)
      :data-uk-icon (str "icon: " (if (= elojel "-")
                                    "history"
                                    "future"))
      :data-uk-tooltip (str "title: "
                            (if (= "+" elojel)
                              (str name " + "how-much" perc")
                              (str name " - "how-much" perc")))
      :on-click #(do
                   (notification (if (= "+" elojel)
                                   (str name " + "how-much" perc")
                                   (str name " - "how-much" perc")))
                   (dispatch [:dungeon/change
                              (assoc item
                                :players
                                (assoc-in (iterate-convert (:players item))
                                          [player-number :start]
                                          (if (= "+" elojel)
                                            (convert-to-clojurescript-time
                                              (str
                                                (core/minus (:start (get (:players item) player-number))
                                                            (core/minutes how-much))))
                                            (convert-to-clojurescript-time
                                              (str
                                                (core/plus (:start (get (:players item) player-number))
                                                           (core/minutes how-much)))))))]))}]))





(defn modify-color [item color]
  (let [systems (subscribe [:dungeon])]
    [:div.one-color.uk-modal-close
     {:style {:height "50px" :width "50px" :background color}
      :on-click #(dispatch
                   [:dungeon/change
                    (assoc (get @systems @item)
                      :color color)])}]))

(defn color-panel []
  (let [item (subscribe [:data :active-system])]
    (fn []
      [:div.uk-flex-top
       {:data-uk-modal true
        :id (str "color-choose")}
       [:div.uk-modal-dialog.uk-margin-auto-vertical {:style {:background "rgba(0,0,0,0)"}}
        [:div.uk-flex.uk-child-width-extend.uk-margin-remove.uk-flex-center
         {:data-uk-grid true}
         (map-indexed #(-> ^{:key %1}[modify-color item %2])
                      system-colors)]]])))

(defn cancel [player-number item name]
  (let []
    (fn [player-number item]

      [:button.uk-button-small.uk-button.uk-button-primary.uk-width-1-3
       {:data-uk-icon "icon: close"
        :data-uk-tooltip "Mégse"
        :on-click #(do
                     (notification (str name " mégsézve!"))
                     (dispatch
                      [:dungeon/change
                       (assoc item :color "#222" :players (dissoc (iterate-convert(:players item))
                                                                  player-number))]))}])))




(defn start-button [player-number item the-atom name]
  [:button.uk-button.uk-button.uk-button-primary.uk-width-1-1.uk-margin-small-top
   {:data-uk-icon "icon: play"
    :on-click #(do
                 (notification (str name " ideje elindítva!"))
                 (reset! the-atom 0)
                 (dispatch
                  [:dungeon/change
                   (assoc item :players
                               (assoc-in
                                 (iterate-convert (:players item))
                                 [player-number :start]
                                 (convert-to-clojurescript-time
                                   (str (calculate-time-zone)))))]))}])

(defn just-the-time [data player-number system time-elapsed player]
  (if (:start data)
    [:div
     [:div.uk-text-center
      (str (convert-time (:start data))
           " - "
           (if (:discount data)
             (str (total-price
                    (:discount data)
                    (:type data)
                    (:start data)
                    @time-elapsed
                    0))
             (str (minute-to-money
                    @time-elapsed
                    (:type data))))
           " Ft")]
     [:h3.uk-text-center.uk-padding-remove.uk-margin-remove (elapsing-time @time-elapsed)]]
    [start-button player-number system time-elapsed (:number @player)]))



(defn player-playing [index system [player-number data]]
  (let [active-member (subscribe [:data :active-member])
        start-data (atom (:start data))
        time-elapsed (atom (if (:start data)
                             (calculate-time-interval
                              @start-data
                              (calculate-time-zone))))
        valami (atom (js/setInterval #(reset! time-elapsed (inc @time-elapsed)) 1000))
        player (subscribe [:player (:member-id data)])]
    (reagent/create-class
      {:reagent-render
       (fn [index system [player-number data]]
         (if (not= @start-data (:start data))
           (reset! time-elapsed (calculate-time-interval
                                  (:start data)
                                  (calculate-time-zone))))
         [:div.uk-padding-remove.uk-animation-fade
          [:div.uk-padding-small.uk-padding-remove-bottom.uk-padding-remove-horizontal
           {:class (if (= (:member-id data) @active-member)
                     "active-border"
                     "")
            :on-click #(do (dispatch [:set-active-member (:id @player)]))}
           [:div.uk-text-center [:b (:id @player)] (str  " - " (:name @player))]
           (if (:discount data)
             [:div.uk-text-center "Akciós ár $$$"])
           [just-the-time data player-number system time-elapsed player]]
          [modify-time player-number system "-" 30  (:number @player)]
          [modify-time player-number system "-" 5 (:number @player)]
          [modify-time player-number system "+" 5 (:number @player)]
          [modify-time player-number system "+" 30 (:number @player)]
          [cancel player-number system (:n @player)]
          (if (not= "vr" (:type system))
            [pay-with-season-pass player-number system (:name @player)]
            [:div.uk-width-1-3.uk-button.uk-button-small])
          [pay player-number system (:name @player)]])})))

          ;[:input {:type "color" :placeholder "#222"}]])})))


(defn places-on-console [players how-many]
  (let [places [:one :two :three :four]
        free-places  (filter #(not (get players %))
                             places)]

    (take how-many free-places)))

(defn change [member-id [key filtered-system discount rand]]
  (let [member-map {:type (:type filtered-system)
                    :member-id (js/parseInt member-id)}]


    (case (:type filtered-system)
      "pc" (if (and
                 (= (:type filtered-system) "pc")
                 (= 0 (count (:players filtered-system))))
             (dispatch
               [:dungeon/change
                (assoc filtered-system
                  :number key
                  :players {:one
                            (if discount
                                (assoc member-map :discount-id rand
                                                  :discount (select-keys discount [:hours :percentage :frequency]))
                                member-map)})])
             (notification "Több játékos nem fér el!"))
      (if (= 4 (count (:players filtered-system)))
        (notification "Több játékos nem fér el!")
        (dispatch
          [:dungeon/change
           (assoc filtered-system
             :number key
             :players
             (merge
               (iterate-convert (:players filtered-system))
               (zipmap
                 (places-on-console (iterate-convert (:players filtered-system))
                                    (if discount
                                      (js/parseInt (:at-count discount))
                                      1))
                 (repeat (if discount
                           (assoc member-map :discount-id rand
                                             :discount (select-keys discount [:hours :percentage :frequency]))
                           member-map)))))])))))



(defn decide-full [ type players-count]
  (let [selected-user (subscribe [:data :active-member])]
    (if (not= 0 @selected-user)
      (case type
        "pc" (if (= 0 players-count)
               true
               false)
        (if (< players-count 4)
          true
          false))
      false)))

(defn system [[number item] data]
  (let [selected-user (subscribe [:data :active-member])
        selected-system (subscribe [:data :active-system])]
    (reagent/create-class
     {:reagent-render
      (fn [[number item] data]
        [:li
         {:class "uk-width-1-5@l uk-width-1-4@m uk-width-1-3@s uk-width-1-1"
          :id (:number item)
          :on-click #(dispatch [:set-active-system (:number item)])}
        ; (str item)
         [:div.uk-card.uk-card-secondary
          {:style {:border "solid 2px"
                   :background "rgba(0,0,0,0.25)"
                   :border-color (if (= @selected-system (:number item))
                                   "rgba(255,0,0,0.2)"
                                   "rgba(255,255,255,0.2)")

                   :border-radius "5px"}}
          [:div.uk-padding-remove
           {:style {:padding-top "5px" :cursor "pointer"
                    :background (:color item)
                    :border "2px solid #222"
                    :border-radius "5px"}}
           ; :data-uk-toggle (str "target: #color-choose" (:number item))}
          ; (str item)
           [:div.uk-margin-remove {:data-uk-grid true}

            [:div.uk-text-center.uk-padding-small.uk-padding-remove-vertical
             {:data-uk-toggle (str "target: #color-choose")
              :data-uk-tooltip "title: Válassz színt! (Csoportosítás)"
              :style {:background (:color item)}}

             [:b.uk-text-large
               {:style {:color "white"}}
               (str (:number item) " ")]
             [:img
               {:src (get-photo-by-type (:type item))
                :height "40"
                :width "40"}]]
            (if (and @selected-system
                     (not= @selected-system (:number item)))

              [:div.uk-width-expand.uk-text-right
               {:style {:cursor "pointer"}

                ;:data-uk-icon "move"
                :data-uk-tooltip "title: Átültetem ide (kijelölt gépet)"
                :on-click #(dispatch [:transfer (:number item)])}
               [:div.uk-button-default.uk-button.uk-padding-small.uk-padding-remove-vertical "Átültetem"]])]]

         ; (str (:number item) "-" (:member-id (second (first (:players item)))))
          ^{:key (str (:number item) "-" (:member-id (second (first (:players item)))))}
          [:div {:id (:number item)
                 :style {:cursor "pointer"}}
           (if
             (decide-full (:type item) (count (:players item)))
             [:div.uk-width-1-1.uk-padding-small.uk-padding-remove-horizontal
              [:button.uk-button.uk-button-default.uk-align-center
               {:style {:cursor "pointer"}
                :data-uk-icon "sign-in"
                :data-uk-tooltip "title: Leültetem ide (a kiválasztott játékost);pos: bottom"
                :on-click #(change @selected-user [number item])}
               "Leültetem"]

              (if
                (filter-discount item)
                (let [discount (filter-discount item)
                      rand (str (random-uuid))]
                  [:button.uk-button.uk-button-default.uk-align-center
                   {:style {:cursor "pointer"}
                    :data-uk-icon "sign-in"
                    :data-uk-tooltip "title: Leültetem ide (a kiválasztott játékost);pos: bottom"
                    :on-click #(change @selected-user
                                       [number item discount rand])}
                   "Akció $$$"]))])
           (map-indexed
            #(-> ^{:key (first %2)}
                 [player-playing %1 item %2])
            (:players item))]]])})));[:button {:on-click #(.notification js/UIkit "Halika")} "dsads"]


(defn plays? [id]
  (let [systems (subscribe [:dungeon])]
    (if (= 0
           (count
            (filter (fn [b] (= (:member-id b) id))
                    (map (fn [a] (second (first a)))
                         (map :players
                              (filter #(and (not= nil (:players %)) (not= {} (:players %)))
                                      @systems))))))
      false
      true)))

(defn player [data]
  (let [app-state (subscribe [:data :app-state])]
    (reagent/create-class
     {:reagent-render
      (fn [data]
        [:li.search-player
         {:style {:color (if (some #(= (:member-id %) (:id data))
                               (-> @app-state :checkout :unpayed))
                             "red"
                             "black")}
          :on-click #(do
                       (.hide (js/UIkit.drop "#search-drop"))
                       (dispatch [:set-active-member (:id data)]))
          :id (:id data)}
         [:div.container
          [:div
           [:div [:b (str (:id data) ". ")] (:name data)]]]])})))

(defn gamers []
  (let [players (subscribe [:searched-players])]
    (reagent/create-class
     {:reagent-render
      (fn []
        [:ul.uk-list.uk-list-striped.uk-child-width-1-1.uk-margin-remove.uk-width-1-1
         {:style {:background "lightgrey"}
          :data-uk-grid true}
         (map-indexed  #(-> ^{:key (:id %2)} [player %2])
                       (sort-by :id #(> %1 %2)
                         (map val @players)))])})))

(defn system-row []
  (let [systems (subscribe [:dungeon])]
    (fn []
      [:div.uk-width-1-1.uk-padding-remove
       [color-panel]
       [:div.uk-grid-match.uk-grid-small.uk-animation-fade {:data-uk-grid true}
        (map-indexed
         #(-> ^{:key (key %2)} [system %2])
         (sort-by :number @systems))]])))



(defn invoice-action [item member-id trans-type]
  (let [{:keys [type start finish]} item
        start-str (convert-to-clojurescript-time (str start))
        finish-str (convert-to-clojurescript-time (str finish))
        user (subscribe [:data :user])
        loading (atom false)]
    (fn [item member-id trans-type]
      [:div.uk-flex-center {:data-uk-grid true :style {:cursor "pointer"}}
       (if (and (or (= type "pc") (= type "ps") (= type "xbox"))
                (= :progress trans-type))
           [:span.invoice-icon
            {:data-uk-icon "icon: sign-in; ratio: 1"
             :data-uk-tooltip "title: Visszaültetés a dungeonbe"
             :on-click #(do
                          (reset! loading true)
                          (dispatch [:sit-back
                                     item]))}])

       (if (and (= type "monster") (= (:role @user) "gm")
                (= :progress trans-type))
         [:span.invoice-icon
          {:data-uk-icon "icon: close; ratio: 1"
           :data-uk-tooltip "title: Mégse vett :/"
           :on-click #(do
                        (reset! loading true)
                        (dispatch [:dungeon/modify-invoice (assoc item
                                                             :start start-str
                                                             :finish finish-str)]))}])

       (if (and (or (= type "beginner") (= type "medium") (= type "hardcore"))
                (= (:role @user) "gm")
                (= :progress trans-type))
         [:span.invoice-icon
          {:data-uk-icon "icon: close; ratio: 1"
           :data-uk-tooltip "title: Mégse vett :/"
           :on-click #(do
                        (reset! loading true)
                        (dispatch [:dungeon/modify-invoice (assoc item
                                                             :start start-str
                                                             :finish finish-str)])
                        (dispatch [:dungeon/season-pass {:quantity (* -1 (case type
                                                                           "beginner" 6
                                                                           "medium" 13
                                                                           "hardcore" 28))
                                                         :member-id member-id}]))}])

       (if (= :progress trans-type)
         [:span.invoice-icon
          {:data-uk-icon "icon: ban; ratio: 1"
           :data-uk-tooltip "title: Nem fizetett :'("
           :on-click #(do
                        (reset! loading true)
                        (dispatch [:dungeon/add-invoice [:unpayed
                                                         (assoc item
                                                           :start start-str
                                                           :finish finish-str)]]))}])

       (if (or (= type "pc") (= type "ps") (= type "xbox"))
           [:span.invoice-icon
            {:data-uk-icon "icon: credit-card; ratio: 1"
             :data-uk-tooltip "title: Bérlettel fizet"
             :on-click #(do
                          (reset! loading true)
                          (dispatch [:dungeon/modify-invoice (assoc item
                                                              :start start-str
                                                              :finish finish-str)])
                          (dispatch [:dungeon/add-invoice
                                     [:payed (assoc item :price 0
                                                         :start start-str
                                                         :finish finish-str)]])
                          (dispatch [:dungeon/season-pass {:quantity (* -1 (count-time-halves
                                                                             start
                                                                             finish))
                                                           :member-id member-id}]))}])

       [:span.invoice-icon
        {:data-uk-icon "icon: check; ratio: 1"
         :data-uk-tooltip "title: Készpénzzel fizet $$$"
         :on-click #(do
                      (dispatch [:dungeon/add-invoice
                                 [:payed (dissoc
                                           (assoc item
                                             :start start-str
                                             :finish finish-str)
                                           :spent-time
                                           :datum-interval
                                           :pay-date-str)]]))}]])))



(defn invoice [[id member-id] type]
  (let [one-invoice (subscribe [:checkout-invoice type id])
        member (subscribe [:player member-id])
        checkout (subscribe [:checkout])]
    (reagent/create-class
      {:reagent-render
       (fn [[id member-id] type]
         [:tr.uk-text-center.uk-padding-small
          {:style {:background (if
                                 (and
                                   (= type :progress)
                                   (not= 0 (count (filter #(= (:member-id @one-invoice)
                                                              (:member-id %))
                                                          (map val (:unpayed @checkout))))))
                                 "rgba(255,0,0,0.6)"
                                 (if (plays? (:member-id @one-invoice))
                                     "#FFA500"
                                     ""))}}
          [:td.uk-padding-small.uk-inline
           {:style {:background (if (:color @one-invoice) (:color @one-invoice) "#222")}}
           [:img
            {:src (get-photo-by-type (:type @one-invoice))
             :height "40"
             :width "40"}]
           (if (or (= type "pc") (= type "ps") (= type "xbox"))
               [:div.uk-badge.uk-position-bottom-right (:number @one-invoice)])]


          [:td [:b member-id ". "]]
          [:td (str (:name @member))]
          [:td (:datum-interval @one-invoice)]
          [:td (:spent-time @one-invoice)]
          [:td (:season-pass @member)]
          [:td
           (str (if (:discount @one-invoice)
                  "Akció: "
                  "")
                (:price @one-invoice) " Ft")]
          [:td [invoice-action @one-invoice member-id type]]])})))







(defn invoice-player [item gamer-system]
  (let [{:keys [color type number]} gamer-system
        [place the-player] item
        {:keys [member-id start]} the-player
        player (subscribe [:player member-id])
        {:keys [name]} @player
        loading (atom false)]

    (reagent/create-class
      {:reagent-render
       (fn [item gamer-system]
         [:div.uk-grid-collapse.uk-padding-remove.uk-width-1-1 {:data-uk-grid true}
           [:div.uk-padding-small [:b member-id] [:span (str " - " (:name @player))]]
           [:div.uk-width-expand
            [:button.uk-button.uk-button-primary.uk-margin-remove.uk-align-right
             {:disabled @loading
              :data-uk-icon "icon: sign-out"
              :data-uk-tooltip (str "title: " (if start
                                                (str (utils/read-hour start) "-kor kezdett")
                                                "Most ült le!"))
              :style {:height "20px !important" :cursor "pointer"}
              :on-click #(if start
                           (do
                             (reset! loading true)
                             (dispatch
                               [:dungeon/change
                                (assoc gamer-system :color "#222" :players (dissoc (:players gamer-system) place))])

                             (dispatch
                               [:dungeon/add-invoice
                                [:progress
                                 (assoc  {}
                                   :id (str (random-uuid))
                                   :color color
                                   :number number
                                   :controller place
                                   :type type
                                   :member-id member-id
                                   :start (convert-to-clojurescript-time (str start))
                                   :finish (convert-to-clojurescript-time (str (calculate-time-zone)))
                                   :price (minute-to-money (core/in-seconds (core/interval
                                                                              start
                                                                              (calculate-time-zone)))
                                                           (:type gamer-system)))]]
                               8000 ; Timeout

                               (fn [reply] ; Reply is arbitrary Clojure data
                                 (if (sente/cb-success? reply) ; Checks for :chsk/closed, :chsk/timeout, :chsk/error
                                   (dispatch [:set-loading false]))))))}]]])})))




     ;(str item)]))

(defn still-gaming [gamer-system]
  (let [{:keys [number type color players]} gamer-system]
    [:div.uk-margin-remove.uk-grid-collapse.uk-flex-center
     {:data-uk-grid true
      :style {:border-bottom "1px solid black"}}
     [:h1.uk-margin-remove.uk-padding-small.uk-padding-remove-vertical.uk-width-expand.uk-inline
      [:span.uk-padding-small {:style {:color color}} number]
      [:img
       {:src (get-photo-by-type type)
        :height "30"
        :width "30"}]]
     (map-indexed #(-> ^{:key %2}[invoice-player %2 gamer-system])
                  players)]))

(defn smart-pult []
  (let [systems (subscribe [:still-gaming])
        free-systems (subscribe [:free-systems])]
    (fn []
      [:div
       [:div.uk-button.uk-button-danger.uk-align-center
        {:data-uk-sticky "offset: 87"
         :style {:font-size "3em" :padding "10px"}}
        @free-systems]
       [:div.uk-child-width-auto.uk-grid-collapse.uk-padding-remove.uk-card-default.uk-card.uk-height-large.uk-overflow-auto
        {:data-uk-drop "mode: click; pos: bottom-center"
         :data-uk-grid true :style {:padding-top "10px"}}
        (map-indexed
          #(-> ^{:key %2}[still-gaming %2])
          (filter #(not= (:players %) {}) @systems))]])))

(defn sort-buttons [type]
  (let []
    [:div.uk-inline {:style {:cursor "pointer"
                             :padding-left "5px"
                             :font-size "10px"}}
     [:div.sort-arrow
      {:on-click #(dispatch [:set-checkout-sort-type type :up])}
      " ▲"]
     [:div.sort-arrow
      {:on-click #(dispatch [:set-checkout-sort-type type :down])}
      " ▼"]]))

(defn table-head [name type]
  [:th.uk-text-center [:b name]
   [sort-buttons type]])

(defn checkout-tab [type]
  (let [invoices-keys (subscribe [:checkout-keys type])]
    (fn [type]
      [:div.uk-width-1-1
       [:div.uk-overflow-auto
        [:table.uk-table.uk-table-middle.uk-table-striped.uk-table-responsive
         [:thead ;{:style {:background "rgba(255,255,255,0.1)"}}
          [:tr
           [table-head "Típus" :type]
           [table-head "Id" :member-id]
           [table-head "Vevő" :name]
           [table-head "Intervallum" :start]
           [table-head "Eltelt idő" :spent-time]
           [table-head "Bérlet" :season-pass]
           [table-head "Ár" :price]
           [:th.uk-text-center
            {:style {:line-height "24px"}}
            [:b "Action"]]]]
         [:tbody
          (map
            #(-> ^{:key (first %)} [invoice % type])
            @invoices-keys)]]]
       (if (= 0 (count @invoices-keys))
         [:div.uk-background-contain.uk-height-medium.uk-panel.uk-flex.uk-flex-center.uk-flex-middle
          {:style {:background-image "url(../img/pipboy-gangster.png)"}}])])))


(defn payed-invoice [[id member-id]]
  (let [one-invoice (subscribe [:payed-invoice id])
        member (subscribe [:player member-id])]
    (reagent/create-class
      {:reagent-render
       (fn [[id member-id]]
         [:tr.uk-text-center.uk-padding-small
          [:td.uk-padding-small.uk-inline
           {:style {:background (if (:color @one-invoice) (:color @one-invoice) "#222")}}
           [:img
            {:src (get-photo-by-type (:type @one-invoice))
             :height "40"
             :width "40"}]]
          [:td [:b member-id ". "]]
          [:td (:name @member)]
          [:td (:datum-interval @one-invoice)]
          [:td (:spent-time @one-invoice)]
          [:td (:pay-date-str @one-invoice)]
          [:td (str (:price @one-invoice) " Ft")]])})))



(defn payed-tab []
  (let [invoices (subscribe [:invoices-keys])
        number (atom 20)]
    (fn []
      [:div.uk-width-1-1
       [:div
        [:table.uk-table.uk-table-middle.uk-table-striped
         [:thead {:style {:background "rgba(255,255,255,0.1)"}}
          [:tr
           [table-head "Típus" :type]
           [table-head "Id" :member-id]
           [table-head "Vevő" :name]
           [table-head "Mikor?" :start]
           [table-head "Mennyit?" :spent-time]
           [table-head "Fizetés időpontja" :pay-date]
           [table-head "Ár" :price]]]
         [:tbody
          (map
           #(-> ^{:key %}[payed-invoice %])
           @invoices)]]

        [:button.uk-width-1-1.uk-button.uk-button-primary
         {:on-click #(do
                       (dispatch [:dungeon/get-invoices @number])
                       (reset! number (+ 20 @number)))}
         "Mutass többet ..."]]])))

(defn checkout []
  (let [checkout (subscribe [:data :app-state])]
    (reagent/create-class
     {:reagent-render
      (fn []
        [:div.uk-container
         [:div.uk-card.uk-card-default
          [:div {:data-uk-sticky "offset: 60"}
           [:ul.uk-subnav.uk-flex-center.uk-subnav-pill.uk-card-default.uk-margin-remove
            {:data-uk-switcher "connect: .uk-switcher ;animation: uk-animation-fade"
             :data-uk-tab true}
            [:li.uk-active {:on-click #(.scrollTo js/window 0 0)}
             [:a "Fizetendő"]]
            [:li {:on-click #(.scrollTo js/window 0 0)}
             [:a "Fizetetlen"]]
            [:li {:on-click #(.scrollTo js/window 0 0)}
             [:a "Fizetett"]]]]
          [smart-pult]
          [:ul.uk-switcher
           [:li [checkout-tab :progress]]
           [:li [checkout-tab :unpayed]]
           [:li [payed-tab]]]]




         [:div.uk-width-1-4]])})))



(defn lazy-load? []
  (let [d (.-documentElement js/document)
        offset (+ (.-scrollTop d) (.-innerHeight js/window))
        height (.-offsetHeight d)]

    (if (= offset height)
      true
      false)))

(defn- get-scroll []
  (-> (dom/getDocumentScroll) (.-y)))

(defn- events->chan [el event-type c]
  (events/listen el event-type #(put! c %))
  c)

(defn scroll-chan-events []
  (events->chan js/window EventType/SCROLL (chan 1 (map get-scroll))))

(defn listen! []
  (let [chan (scroll-chan-events)]
    (go-loop []
      (let [new-y (<! chan)
            lazy-number (subscribe [:data :lazy-number])
            search (subscribe [:data :search-member])
            active-page (subscribe [:data :actual-page])]

        (if (and (lazy-load?) (= @active-page "registration"))
          (do
            (dispatch [:dungeon/get-members {:number @lazy-number :search @search}])
            (dispatch [:set-lazy-number (+ 20 @lazy-number)])))
        ;(reset! cur-scroll-y (max 0 new-y))
        (recur)))))


(defn show-20-more [number]
  (let [search (subscribe [:data :search-member])]
    (fn []
      [:button.uk-width-2-3.uk-button.uk-button-primary
       {:on-click #(do
                     (dispatch [:dungeon/get-members {:number @number :search @search}]))}
       "Mutass többet..."])))
                            ;(count @players)])))


(defn player-data [data]
  (let [edit (atom false)
        name (atom nil)]

    (reagent/create-class
      {;:component-will-update #(reset! modify-atom data)
       :reagent-render
       (fn [data]
         [:div
          [:div
           (if @edit
             [:div.uk-width-1-1.uk-grid-collapse {:data-uk-grid true}
              [:div.uk-width-expand [:input.uk-input.uk-text-center
                                     {:style {:height "30px"}
                                      :auto-focus true
                                      :on-blur #(.setTimeout
                                                  js/window
                                                  (fn [a] (reset! edit false))
                                                  500)
                                      :on-change #(reset! name (-> % .-target .-value)) :default-value (:name data)}]]
              [:div.uk-width-auto.uk-padding-small.uk-padding-remove-vertical
               {:style {:cursor "pointer"
                        :height "30px"}}
               [:span
                {:on-click #(do
                              (notification "Név frissítve!")
                              (reset! edit false)
                              (chsk-send!
                                [:dungeon/update-member
                                 (assoc data :name (if @name @name (:name data)))]))
                 :data-uk-icon "icon: check"}]]]

             [:span
              {:on-click #(reset! edit true)}
              [:b
               (str (:id data)
                    ". ")]
              (:name data) " "
              [:span {:data-uk-icon "icon: credit-card"}]
              " "
              (:season-pass data)])]
          [:div
           [:span {:data-uk-icon "icon: cart"}]
           " "
           (all-items-to-hours (:id data)) " óra -> "
           (all-items-to-money (:id data)) "  Ft"]])})))





(defn season-pass-panel [member]
  (let [the-prices (subscribe [:the-prices])
        modify-atom (atom member)]
    (fn [member]
      [:div.uk-padding-remove.uk-card-secondary.uk-margin-remove.uk-child-width-expand.uk-grid-collapse
       {:data-uk-height-match true
        :data-uk-grid true
        :style {:cursor "pointer"}
        ;:class "active-border"
        :class "active-border"}
       ;(str member)
       [:div.uk-inline
         [:div.uk-position-center
          [:div.uk-grid-collapse.uk-child-width-1-1.uk-width-1-1 {:data-uk-grid true}
           [:div.uk-card-default.uk-text-center
            {:data-uk-tooltip "title: - 0.5 bérletóra (hibajavításra)"
             :on-click #(do
                          (notification "- 0.5")
                          (chsk-send! [:dungeon/update-member
                                       (assoc member :season-pass (- (:season-pass member) 0.5))]))}

            "- 0.5"]
           [:div.uk-card-default.uk-text-center
            {:data-uk-tooltip "title: - 1 bérletóra (hibajavításra)"
             :on-click #(do
                          (notification "- 1")
                          (chsk-send! [:dungeon/update-member
                                       (assoc member :season-pass (- (:season-pass member) 1))]))}
            "- 1"]]]]


       [:div.uk-padding-small.uk-padding-remove-vertical
        {:data-uk-tooltip (str "title: Beginner bérlet: 6 óra - " (-> @the-prices :items :beginner)
                               " Ft")
         :on-click #(do
                      (dispatch [:dungeon/add-invoice
                                 [:progress
                                  {:id (str (random-uuid))
                                   :type "beginner"
                                   :price (-> @the-prices :items :beginner)
                                   :member-id (:id member)
                                   :finish (convert-to-clojurescript-time (str (calculate-time-zone)))}]])
                      (swap! modify-atom assoc :season-pass (+ (:season-pass member) 6))
                      (chsk-send! [:dungeon/update-member
                                   (assoc member :season-pass (+ 6 (:season-pass member)))])
                      (notification (str (:name @modify-atom) " kapott egy Beginner bérletet!")))}

        [:img {:src "/Icons/bronze.png" :width "50px"}]]
       [:div.uk-padding-small.uk-padding-remove-vertical
        {:data-uk-tooltip (str "title: Medium bérlet: 13 óra - "(-> @the-prices :items :medium)" Ft")
         :on-click #(do
                      (dispatch [:dungeon/add-invoice
                                 [:progress
                                  {:id (str (random-uuid))
                                   :type "medium"
                                   :price (-> @the-prices :items :medium)
                                   :member-id (:id member)
                                   :finish (convert-to-clojurescript-time (str (calculate-time-zone)))}]])
                      (swap! modify-atom assoc :season-pass (+ (:season-pass member) 13))
                      (chsk-send! [:dungeon/update-member
                                   (assoc member :season-pass (+ 13 (:season-pass member)))])
                      (notification (str (:name member) " kapott egy Medium bérletet!")))}
        [:img {:src "/Icons/silver.png" :width "50px"}]]
       [:div.uk-padding-small.uk-padding-remove-vertical
        {:data-uk-tooltip (str "title: Hardcore bérlet: 28 óra - " (-> @the-prices :items :hardcore) " Ft")
         :on-click #(do
                      (dispatch [:dungeon/add-invoice
                                 [:progress
                                  {:id (str (random-uuid))
                                   :type "hardcore"
                                   :price (-> @the-prices :items :hardcore)
                                   :member-id (:id member)
                                   :finish (convert-to-clojurescript-time (str (calculate-time-zone)))}]])
                      (swap! modify-atom assoc :season-pass (+ (:season-pass member) 13))
                      (chsk-send! [:dungeon/update-member
                                   (assoc member :season-pass (+  28 (:season-pass member)))])
                      (notification (str (:name member) " kapott egy Hardcore bérletet!")))}
        [:img {:src "/Icons/gold.png" :width "50px"}]]
       [:div.uk-inline
        [:div.uk-position-center
         [:div.uk-grid-collapse.uk-child-width-1-1.uk-width-1-1 {:data-uk-grid true}
          [:div.uk-card-default.uk-text-center
           {:data-uk-tooltip "title: +0.5 bérletóra (hibajavításra)"
            :on-click #(do
                         (notification "+ 0.5")
                         (chsk-send! [:dungeon/update-member
                                      (assoc member :season-pass (+ (:season-pass member) 0.5))]))}
           "+ 0.5"]
          [:div.uk-card-default.uk-text-center
           {:data-uk-tooltip "title: + 1 bérletóra (hibajavításra)"
            :on-click #(do
                         (notification "+ 1")
                         (chsk-send! [:dungeon/update-member
                                      (assoc member :season-pass (+ (:season-pass member) 1))]))}
           "+ 1"]]]]

       [:div.uk-inline
        {:data-uk-tooltip "title: + 1 Monster (nagy), pultnál fizeti"
         :style {:vertical-align "middle"}
         :on-click #(do
                      (notification (str (:name member) " kapott egy Monstert!"))
                      (dispatch [:dungeon/add-invoice
                                 [:progress
                                  {:id (str (random-uuid))
                                   :type "monster"
                                   :price (-> @the-prices :items :monster)
                                   :member-id (:id member)
                                   :finish (convert-to-clojurescript-time (str (calculate-time-zone)))}]]))}


        [:img.uk-position-center {:src "/Icons/monster.png" :width "25px" :style {:vertical-align "middle"}}]]
       (if
         (-> @the-prices :items :kis-monster)
         [:div.uk-inline
          {:data-uk-tooltip "title: + 1 Monster (kicsi), pultnál fizeti"
           :style {:vertical-align "middle"}
           :on-click #(do
                        (notification (str (:name member) " kapott egy Monstert!"))
                        (dispatch [:dungeon/add-invoice
                                   [:progress
                                    {:id (str (random-uuid))
                                     :type "monster"
                                     :price (-> @the-prices :items :kis-monster)
                                     :member-id (:id member)
                                     :finish (convert-to-clojurescript-time (str (calculate-time-zone)))}]]))}

          [:img.uk-position-center {:src "/Icons/monster.png" :width "25px" :style {:vertical-align "middle"}}]])
       [:div.uk-inline
        [:span.uk-position-center {:style {:pointer "pointer"}
                                   :data-uk-icon "close"
                                   :data-uk-tooltip "title: Kiválasztások resetelése"
                                   :on-click #(do
                                                (dispatch [:set-active-system nil])
                                                (dispatch [:set-active-member 0]))}]]])))




(defn selected-user []
  (let [selected-user (subscribe [:data :active-member])
        search-number (subscribe [:search-number])
        the-timeout (atom nil)
        loading (atom false)
        search (subscribe [:data :search-member])]
    (reagent/create-class
      {:component-did-mount #(do
                               (dispatch [:dungeon/get-members {:number 0 :search ""}])
                               (dispatch [:dungeon/get-member-with-id [@selected-user]]))
       ;:component-will-update #(dispatch [:dungeon/get-member-with-id [@selected-user]])
       :reagent-render
       (fn []
         [:div.uk-width-1-1
          [:div.uk-margin-remove.uk-padding-remove.uk-flex-center
           {:class "uk-child-width-1-1 uk-child-width-1-3@s"
            :data-uk-grid true}
           [:div.uk-padding-remove.uk-card-secondary
            {:class (if (= 0 @selected-user) "" "active-border")}
            (if (not= 0 @selected-user)
              [:div
               [:h4.uk-text-center.uk-margin-remove
                [player-data (deref (subscribe [:player @selected-user]))]]])]
           [:div.uk-padding-remove.uk-margin-remove
            [:form.uk-search.uk-search-large.uk-width-1-1.uk-card-secondary
             {:style {:height "100%"}}
             [:input.uk-search-input.uk-text-center
              {:on-change #(do
                             (.show (.drop js/UIkit "#search-drop"))
                             (if @the-timeout (.clearTimeout js/window @the-timeout))
                             (reset! the-timeout
                                     (.setTimeout
                                       js/window
                                       (fn [a] (dispatch [:set-search-member a @search-number]))
                                       500
                                       (-> % .-target .-value))))
               :placeholder (if
                              (not= 0 @selected-user)
                              "Keresés"
                              "Ki akar játszani?")
               :type "search"}]]
            ;:auto-focus true}]]
            [:div#search-drop.uk-height-large.uk-overflow-auto.uk-margin-remove
             {:data-uk-drop "pos: bottom-justify; mode: click"}
             [:div.uk-margin-remove.uk-grid-collapse {:data-uk-grid true}
              ;:placeholder "Search...",}]]
              ;:type "search"}]]
              ;[:div.uk-width-1-1 (str "dsadsadsa" @members)]
              [gamers]
              [show-20-more search-number]
              [:button.uk-width-1-3
               {:class (if @loading "uk-button-secondary" "uk-button-danger")
                :data-uk-tooltip (if-not @loading "Hozzáadás" "Loading...")
                :on-click #(if-not @loading
                             (do
                               (reset! loading true)
                               (chsk-send! [:dungeon/add-member {:name @search}]
                                           8000
                                           (fn [reply] ; Reply is arbitrary Clojure data
                                             (if (cb-success? reply)
                                               (do
                                                 (reset! loading false)
                                                 (dispatch [:set-search-range [(:id reply)]])
                                                 (dispatch [:add-player (assoc {} (:id reply) reply)])))))))}
                                               ;(reset! loading false))))))}
               [:span {:data-uk-icon "icon: plus;"}]
               [:span {:data-uk-icon "icon: user;"}]]]]]
           (if (not= 0 @selected-user)
             [season-pass-panel (deref (subscribe [:player @selected-user]))]
             [:div.uk-card-secondary])]])})))

(defn dungeon []
  (let [user (subscribe [:data :user])]
    (reagent/create-class
     {;:component-did-mount #(dispatch [:handle-drag])
      :reagent-render
      (fn []
        (if (or (= "admin" (:role @user)) (= "gm" (:role @user)))
          [:div.uk-background-cover.uk-offcanvas-content.svg-cursor
           [selected-user]
           [:div.uk-padding-small.uk-margin-remove
            {:data-uk-grid true}
            [system-row]]]
          [:h1.uk-headding {:style {:color "white"}} "Szólj a GM-nek :) !"]))})))
