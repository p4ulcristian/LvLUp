(ns lvlup.crusader.dungeon
  (:require
   [reagent.core :as reagent :refer [atom]]
   [lvlup.sente :refer [chsk-send! start-router! chsk-reconnect! chsk-disconnect!]]
   [reagent.session :as session]
   [clojure.string  :as str]
  ; [jayq.core :refer [$]]

   [lvlup.utils :as utils]
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

(def event-channel (chan))

(go
  (while true
    (let [e (<! event-channel)]
      (dispatch e))))



(defn convert-to-clojurescript-time [ido]
  (js/String (coerce/from-long (js/parseInt ido)))
  (if (= 13 (count ido))
    (js/String (coerce/from-long (js/parseInt ido)))
    ido))


(defn notification [valami]
  (.notification js/UIkit (str "<div class='uk-padding-small uk-card uk-card-primary notification-style'><span uk-icon='icon: check'></span> " valami "</div>") (clj->js {:pos "bottom-left" :timeout 700})))

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

(defn minute-to-money [seconds type]
  (let [minutes (quot seconds 60)
        halves (quot minutes 30)
        remaining-minutes (mod minutes 30)
        type-price (case type
                     "xbox" 150
                     "ps" 150
                     "pc" 175)]
    (if (neg? seconds)
      0
      (if (> 60 minutes)
        (* 2 type-price)
        (if (> 10 remaining-minutes)
          (* halves type-price)
          (* (inc halves) type-price))))))

(defn calculate-time-interval [time-one time-two]
      ;(.log js/console (str "start? " time-one))
      ;(.log js/console (str "finish? " time-two))
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

(defn abs [n] (max n (- n)))

(defn count-time-halves [start finish]
  (if (core/before?
       start
       finish)
    (* 0.5
       (+
        (quot
         (quot
          (abs (calculate-time-interval
                start
                finish))
          60)
         30)
        (if (< 5 (mod
                  (quot
                   (abs (calculate-time-interval
                         start
                         finish))
                   60)
                  30))
          1
          0)))
    0))


(defn all-items-to-hours [player-id]
  (let [all-systems (subscribe [:data "system-map"])
        all-players (filter (fn [a] (and (not= a {}) (not= a nil))) (map #(:players %) @all-systems))
        this-player-systems (doall
                             (filter #(= (js/parseInt player-id) (:member-id %))
                                     (doall
                                      (filter (fn [a] (contains? a :start))
                                              (map #(second (first %))
                                                   all-players)))))
        total-price (reduce + (map #(count-time-halves
                                     (format/parse (:start %))
                                     (calculate-time-zone))
                                   this-player-systems))]
      ;(.log js/console (str "wtf" this-player-systems))
    total-price))



(defn all-items-to-money [player-id]
  (let [all-systems (subscribe [:data "system-map"])
        all-players (filter (fn [a] (and (not= a {}) (not= a nil))) (map #(:players %) @all-systems))
        this-player-systems (doall
                             (filter #(= (js/parseInt player-id) (:member-id %))
                                     (doall
                                      (filter (fn [a] (contains? a :start))
                                              (map #(second (first %))
                                                   all-players)))))
        total-price (reduce + (map #(minute-to-money (if
                                                      (core/before?
                                                       (format/parse (:start %))
                                                       (calculate-time-zone))
                                                      (core/in-seconds
                                                       (core/interval
                                                        (format/parse (:start %))
                                                        (calculate-time-zone)))
                                                      0)
                                                     (:type %))
                                   this-player-systems))]
      ;(.log js/console (str "wtf" this-player-systems))
    total-price))
      ;total-price))

(defn elapsing-time-no-seconds [seconds]
  (let [seconds-negated (* -1 seconds)]
    (if (neg? seconds)
      (str "- " (quot seconds-negated 3600) "h " (mod (quot seconds-negated 60) 60) "m " (mod seconds-negated 60) "s")
      (str (quot seconds 3600) " óra " (mod (quot seconds 60) 60) " perc "))))

(defn elapsing-time [seconds]
  (let [seconds-negated (* -1 seconds)]
    (if (neg? seconds)
      (str "- " (quot seconds-negated 3600) "h " (mod (quot seconds-negated 60) 60) "m " (mod seconds-negated 60) "s")
      (str (quot seconds 3600) "h " (mod (quot seconds 60) 60) "m " (mod seconds 60) "s"))))

(defn pay [player-number item name]
  (let [loading (atom false)]
    (fn [player-number item name]
      [:button.uk-button-small.uk-button.uk-button-primary.uk-width-1-3
       {:disabled @loading
        :data-uk-icon "icon: sign-out"
        :on-click #(do
                     (reset! loading true)
                     (notification (str name " kasszához küldve!"))
                     ;(dispatch [:set-loading true])
                     (dispatch
                      [:dungeon/change
                       (assoc item :color "#222)" :players (dissoc (:players item) player-number))])

                     (dispatch
                      [:dungeon/add-invoice
                       (assoc  {}
                               :color (:color item)
                               :number (:number item)
                               :type (:type item)
                               :name (:name item)
                               :member-id (:member-id (get (:players item) player-number))
                               :payed false
                               :start (convert-to-clojurescript-time (:start (get (:players item) player-number)))
                               :finish (convert-to-clojurescript-time (str (calculate-time-zone)))
                               :price (minute-to-money (core/in-seconds (core/interval
                                                                          (format/parse (:start (get (:players item) player-number)))
                                                                          (calculate-time-zone)))
                                                       (:type item)))]
                      8000 ; Timeout

                      (fn [reply] ; Reply is arbitrary Clojure data
                        (if (sente/cb-success? reply) ; Checks for :chsk/closed, :chsk/timeout, :chsk/error
                          (dispatch [:set-loading false])))))}])))

(defn pay-with-season-pass [player-number item name]
  (let [loading (atom false)]
    (fn [player-number item name]
      [:button.uk-button-small.uk-button.uk-button-primary.uk-width-1-3
       {:data-uk-icon "icon: credit-card"
        :disabled @loading
        :on-click #(do
                     (reset! loading true)
                     (notification (str name " fizetett bérlettel!"))
                     (dispatch
                      [:dungeon/change
                       (assoc item :players (dissoc (:players item) player-number))])
                     (dispatch [:dungeon/season-pass
                                {:quantity
                                 (* -1
                                    (count-time-halves
                                     (format/parse (:start (get (:players item) player-number)))
                                     (calculate-time-zone)))
                                 :member-id (:member-id (get (:players item) player-number))}]))}])))






(defn modify-time [player-number item elojel how-much the-atom name]
  (fn [player-number item elojel how-much the-atom]
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
                              (assoc-in item
                                        [:players player-number :start]
                                        (if (= "+" elojel)
                                          (convert-to-clojurescript-time (str (core/minus (format/parse (:start (get (:players item) player-number))) (core/minutes how-much))))
                                          (convert-to-clojurescript-time (str (core/plus (format/parse (:start (get (:players item) player-number))) (core/minutes how-much))))))])
                   (reset! the-atom
                           (calculate-time-interval

                            (if (= "+" elojel)
                              (core/minus (format/parse (:start (get (:players item) player-number))) (core/minutes how-much))
                              (core/plus (format/parse (:start (get (:players item) player-number))) (core/minutes how-much)))
                            (calculate-time-zone))))}]))

(defn modify-color [item color]
  [:div.one-color.uk-modal-close
   {:style {:height "50px" :width "50px" :background color}
    :on-click #(dispatch
                 [:dungeon/change
                  (assoc item :color color)])}])

(defn cancel [player-number item name]
  (let [];system (subscribe [:data "system-map"])]
    (fn [player-number item]

      [:button.uk-button-small.uk-button.uk-button-primary.uk-width-1-3
       {:data-uk-icon "icon: close"
        :on-click #(do
                     (notification (str name " mégsézve!"))
                     (dispatch
                      [:dungeon/change
                       (assoc item :color "#222" :players (dissoc (:players item) player-number))]))}])))

(defn start-button [player-number item the-atom name]
  [:button.uk-button.uk-button.uk-button-primary.uk-width-1-1.uk-margin-small-top
   {:data-uk-icon "icon: play"
    :on-click #(do
                 (calculate-time-zone)
                 (notification (str name " ideje elindítva!"))
                 (reset! the-atom 0)
                 (dispatch
                  [:dungeon/change
                   (assoc item :players (assoc-in (:players item) [player-number :start] (convert-to-clojurescript-time (str (calculate-time-zone)))))]))}])

(defn player-playing [system [player-number data]]
  (let [active-member (subscribe [:data "active-member"])
        loading (subscribe [:data "loading"])
        time-elapsed (atom (if (:start data)
                             (calculate-time-interval
                              (format/parse (:start data))
                              (calculate-time-zone))))
        valami (atom (js/setInterval #(reset! time-elapsed (inc @time-elapsed)) 1000))

        player (subscribe [:player (:member-id data)])]


    (reagent/create-class
      {:component-did-mount #(dispatch [:dungeon/get-member-with-id (:member-id data)])

       :reagent-render
       (fn [system [player-number data]]

         [:div.uk-padding-remove.uk-animation-fade


          [:div.uk-padding-small.uk-padding-remove-bottom.uk-padding-remove-horizontal
           { :class (if (= (:member-id data) @active-member)
                      "active-border"
                      "")
            :on-click #(dispatch [:set-active-member (:id @player)])}

           [:div.uk-text-center [:b (:id @player)] (str  " - " (:name @player))]

           (if (:start data)
             [:div
              [:div.uk-text-center
               (str (convert-time (format/parse (:start data)))
                    " - "
                    (minute-to-money
                     @time-elapsed
                     (:type data))
                    " Ft")]
              [:h3.uk-text-center.uk-padding-remove.uk-margin-remove (elapsing-time @time-elapsed)]]
             [start-button player-number system time-elapsed (:number @player)])]
          [modify-time player-number system "-" 30 time-elapsed (:number @player)]
          [modify-time player-number system "-" 5 time-elapsed (:number @player)]
          [modify-time player-number system "+" 5 time-elapsed (:number @player)]
          [modify-time player-number system "+" 30 time-elapsed (:number @player)]
          [cancel player-number system (:n @player)]
          [pay-with-season-pass player-number system (:name @player)]
          [pay player-number system (:name @player)]])})))


(defn places-on-console [players]
  (cond
    (= nil (:one players)) :one
    (= nil (:two players)) :two
    (= nil (:three players)) :three
    (= nil (:four players)) :four))

(defn change [member-id filtered-system]
  (let []
    ;[filtered-system] (filter #(= system-name (:number %)) @systems)]
    ;(notification (str member-id ". -> " (:number filtered-system)))
    ;(places-on-console (:players filtered-system))


    (case (:type filtered-system)
      "pc" (if (and
                 (= (:type filtered-system) "pc")
                 (= 0 (count (:players filtered-system))))
             (dispatch
               [:dungeon/change
                (assoc filtered-system
                  :players {:one {:type (:type filtered-system)
                                  :member-id (js/parseInt member-id)}})])
             (notification "Több játékos nem fér el!"))
      (if (= 4 (count (:players filtered-system)))
        (notification "Több játékos nem fér el!")
        (dispatch
          [:dungeon/change
           (assoc filtered-system :players
                                  (assoc (:players filtered-system)
                                    (places-on-console (:players filtered-system))
                                    {:type (:type filtered-system)
                                     :member-id (js/parseInt member-id)}))])))))


(defn decide-full [ type players-count]
  (let [selected-user (subscribe [:data "active-member"])]
    (if (not= 0 @selected-user)
      (case type
        "pc" (if (= 0 players-count)
               true
               false)
        (if (< players-count 4)
          true
          false))
      false)))

(defn system [index item]
  (let [selected-user (subscribe [:data "active-member"])]
    (reagent/create-class
     {:reagent-render
      (fn [index item]
        [:li.uk-width-1-5.valami.dropzone2
         {:id (:number item)}
         [:div.uk-card.uk-card-secondary.system-wall
          {:style {:border-radius "5px"}}
          [:div.uk-flex-top
           {:data-uk-modal true
            :id (str "color-choose" (:number item))}
           [:div.uk-modal-dialog.uk-margin-auto-vertical {:style {:background "rgba(0,0,0,0)"}}
            [:div.uk-flex.uk-child-width-extend.uk-margin-remove.uk-flex-center
             {:data-uk-grid true}
             (map-indexed #(-> ^{:key %1}[modify-color item %2]) system-colors)]]]
          [:div.uk-padding-remove
           {:data-uk-toggle (str "target: #color-choose" (:number item))
            :style {:padding-top "5px" :cursor "pointer" :background (:color item)}}
           ; :data-uk-toggle (str "target: #color-choose" (:number item))}
          ; (str item)
           [:div.uk-flex-center.uk-margin-remove {:data-uk-grid true}

            [:div.uk-width-auto.uk-text-center.uk-padding-small.uk-padding-remove-vertical
             {:style {:background "#222"}}
             [:b.uk-text-large
               (str (:number item) " ")]
             [:img
               {:src (case (:type item)
                      "ps" "/Icons/ps.svg"
                      "xbox" "/Icons/xbox.svg"
                      "pc" "/Icons/pc.svg"
                      "hmm")
                :height "40"
                :width "40"}]]]]
          (if
            (decide-full (:type item) (count (:players item)))
            [:button.uk-button.uk-button-secondary.uk-align-center.uk-width-1-1
             {:style {:cursor "pointer"}
              :type "button"
              :on-click #(change @selected-user item)}
             "Ide ültetem"])
          [:div.masvalami.draggable {:id (:number item) :style {:cursor "move"}}
           (map-indexed
            #(-> ^{:key (first %2)} [player-playing item %2])
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
      true
      false)))

(defn player [data index which-tab]
  (let [active-member (subscribe [:data "active-member"])]
    (reagent/create-class
     {
      :reagent-render
      (fn [data index which-tab]
        [:li.search-player
         {:on-click #(do
                       (.hide (.drop js/UIkit "#search-drop"))
                       (dispatch [:set-active-member (:id data)]))
          :id (:id data)}
         [:div.container
          [:div
           [:div [:b (str (:id data) ". ")] (:name data)]]]])})))
           ;[:div (str "Bérlet: " (:season-pass data)) " óra"]
           ;[:div (str "XP: " (:total-hours data))]
           ;(if (= (:id data) @active-member)
            ; [:div
             ; [:div (str "Összesen: " (all-items-to-money (:id data)) " Ft")]
              ;[:div (str "Játszott órák: " (all-items-to-hours (:id data)) " óra")]]]]]]])})))

(defn waiting-pool []
  (let [pool (subscribe [:data "waiting-pool"])]

    (reagent/create-class
     {:component-did-mount #(chsk-send! [:dungeon/get-waiting-pool])
      :reagent-render
      (fn []
        [:div
         (map-indexed  #(-> ^{:key (:id %2)} [player %2 %1 4]) @pool)])})))

(defn paying-gamers []
  (let [players (subscribe [:data "players"])
      ;  systems (subscribe [:data "system-map"])
        invoices (subscribe [:data "invoices"])
        get-member-data (fn [] (vec (set (map :member-id @invoices))))
        the-players-playing (fn [] (doall (filter #(some (fn [a] (= a (:id %))) (vec (set (map :member-id @invoices)))) @players)))]
    (reagent/create-class
     {:reagent-render
      (fn []
        [:div

         ;(str (get-member-data))
         (map-indexed  #(-> ^{:key (:id %2)} [player %2 %1 3]) (the-players-playing))])})))

(defn gaming-gamers []
  (let [players (subscribe [:data "players"])
        systems (subscribe [:data "system-map"])
        get-players-playing (fn []
                              (vec
                               (set
                                (remove
                                 (fn [a] (= a nil))
                                 (flatten
                                  (map (fn [a]
                                         (conj []
                                               (get-in a [:players :one :member-id])
                                               (get-in a [:players :two :member-id])
                                               (get-in a [:players :three :member-id])
                                               (get-in a [:players :four :member-id])))
                                       @systems))))))
        the-players-playing (fn [] (doall (filter #(some (fn [a] (= a (:id %))) (get-players-playing)) @players)))]
    (reagent/create-class
     {:reagent-render
      (fn []
        [:div
         (map-indexed  #(-> ^{:key (:id %2)} [player %2 %1 2]) (the-players-playing))])})))

(defn gamers []
  (let [players (subscribe [:data "search-pool"])
        search (subscribe [:data "search-member"])]
    (reagent/create-class
     {:reagent-render
      (fn []
        [:ul.uk-list.uk-list-striped.uk-child-width-1-1.uk-margin-remove.uk-width-1-1
         {:style {:background "lightgrey"}
          :data-uk-grid true}
         (map-indexed  #(-> ^{:key (:id %2)} [player %2 %1])
                       (sort-by :id #(> %1 %2) @players))])})))

(defn system-row []
  (let [systems (subscribe [:dungeon])]
    (fn []
      [:div.uk-width-1-1.uk-padding-remove
       [:div.uk-grid-match.uk-grid-small.uk-animation-fade {:data-uk-grid true}
        (map-indexed
         #(-> ^{:key (:number %2)} [system %1 %2])
         (sort-by :number @systems))]])))

(defn transfer [e]
  (let [systems (subscribe [:dungeon])
        system-name (js/parseInt (.-id (.-relatedTarget e)))
        other-system (js/parseInt (.-id (.-target e)))
        [filtered-system] (filter #(= system-name (:number %)) @systems)
        [filtered-system2] (filter #(= other-system (:number %)) @systems)]
    (notification (str (:number filtered-system) " <-> " (:number filtered-system2)))
    ;(notification (str (:color filtered-system2) " - "(:color filtered-system)))
    (if
     (or
      (and
       (= "pc" (:type filtered-system))
       (= "pc" (:type filtered-system2)))
      (and
       (= "xbox" (:type filtered-system))
       (= "xbox" (:type filtered-system2)))
      (and
       (= "ps" (:type filtered-system))
       (= "ps" (:type filtered-system2)))
      (and
       (= "xbox" (:type filtered-system))
       (= "ps" (:type filtered-system2)))
      (and
       (= "ps" (:type filtered-system))
       (= "xbox" (:type filtered-system2))))

     (do
       (dispatch
        [:dungeon/change
         (assoc filtered-system :players (:players filtered-system2) :color (:color filtered-system2))])

       (dispatch
        [:dungeon/change
         (assoc filtered-system2
                :players (:players filtered-system) :color (:color filtered-system))]))

     (notification "Csak két azonos típusú rendszert tudsz cserélni!"))))



(defn invoice [item]
  (let [the-cart (subscribe [:data "cart"])
        {:keys [member-id color number start finish type price]} item
        member (subscribe [:player member-id])
        {:keys [name season-pass]} @member]
    (reagent/create-class
      {:component-did-mount #(dispatch [:dungeon/get-member-with-id member-id])
       :component-did-update #(dispatch [:dungeon/get-member-with-id member-id])
       :reagent-render
       (fn [item]
         [:tr.uk-text-center.one-invoice.uk-padding-small
          {:style {:background "rgba(0,0,0,0.5)"
                   :border-top "1px solid white"

                   :color "rgba(255,255,255,0.8)"}}
          [:td.uk-padding-small.uk-inline
           {:style {:background color}}
           [:img
            {:src (case type
                    "ps" "/Icons/ps.svg"
                    "xbox" "/Icons/xbox.svg"
                    "pc" "/Icons/pc.svg"
                    "hmm")
             :height "40"
             :width "40"}]
           [:div.uk-badge.uk-position-bottom-right number]]

          [:td member-id]
          [:td (:name @member)]
          [:td (utils/read-date (format/parse start))
               (str
                 (convert-time (format/parse start)) " - " (convert-time (format/parse finish)))]

          [:td
           (elapsing-time-no-seconds
             (core/in-seconds
               (core/interval
                 (format/parse start)
                 (format/parse finish))))]
          [:td (:season-pass @member)]
          [:td (str price " Ft")]
          [:td [:div.uk-grid.uk-child-width-1-3.uk-grid-small {:data-uk-grid true :style {:cursor "pointer"}}
                [:span.invoice-icon
                 {
                  :data-uk-icon "icon: credit-card; ratio: 1"
                  :on-click #(do
                               ;(notification (str name) " bérlettel fizetett!")
                               (dispatch [:dungeon/modify-invoice {:id (:_id item)}])

                               (dispatch [:dungeon/season-pass {:quantity (* -1 (count-time-halves
                                                                                  (format/parse start)
                                                                                  (format/parse finish)))
                                                                :member-id member-id}]))}]
                [:span.invoice-icon
                 {
                  :data-uk-icon "icon: check; ratio: 1"
                  :on-click #(do
                               (notification (str (:name member) " készpénzzel fizetett!"))
                               (dispatch [:dungeon/modify-invoice {:id (:_id item)}]))}]
                [:span.invoice-icon
                 {:style {:color (if (some #(= item %)
                                           @the-cart)
                                   "yellow")}

                  :data-uk-icon (str "icon: "
                                     (if (some #(= item %)
                                           @the-cart)
                                         "minus-circle"
                                         "plus-circle")
                                     "; ratio: 1")
                  :on-click #(do
                               (notification (str (:name member) " összegzőhöz"))
                               (dispatch [:add-to-cart item]))}]]]])})))


(defn invoice-player [item gamer-system]
  (let [{:keys [color type number ]} gamer-system
        [place the-player] item
        {:keys [member-id start]} the-player
        player (subscribe [:player member-id])
        {:keys [name]} @player
        loading (atom false)]

    (reagent/create-class
      {:component-did-mount #(dispatch [:dungeon/get-member-with-id (:member-id (second item))])
       :reagent-render
       (fn [item gamer-system]
         [:button.uk-button.uk-button-default.uk-width-1-1.uk-margin-remove.uk-padding-remove.one-invoice
          {:disabled @loading
           :data-uk-tooltip (str "title: " (if start
                                             (str (utils/read-hour  (format/parse start)) "-kor kezdett")
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
                             (assoc  {}
                               :color color
                               :number number
                               :type type
                               :member-id member-id
                               :payed false
                               :start start
                               :finish (convert-to-clojurescript-time (str (calculate-time-zone)))
                               :price (minute-to-money (core/in-seconds (core/interval
                                                                          (format/parse start)
                                                                          (calculate-time-zone)))
                                                       (:type gamer-system)))]
                            8000 ; Timeout

                            (fn [reply] ; Reply is arbitrary Clojure data
                              (if (sente/cb-success? reply) ; Checks for :chsk/closed, :chsk/timeout, :chsk/error
                                (dispatch [:set-loading false]))))))}


          [:div.uk-text-truncate.uk-padding-remove.uk-text-center
           (str member-id " - " (:name @player) " ")
           [:span {:data-uk-icon "icon: sign-out"}]]])})))

     ;(str item)]))

(defn still-gaming [gamer-system]
  (let [{:keys [number type color players]} gamer-system]
    [:div.uk-grid.uk-margin-remove.uk-card.uk-card-secondary {:data-uk-grid true}


      [:div.uk-width-1-1.uk-padding-remove
       {:style {:background (if color color "rgba(0,0,0,0.6)")}}
       [:h1.uk-heading-bullet.uk-margin-remove.uk-padding-remove-vertical
        [:img
         {:src (case type
                 "ps" "/Icons/ps.svg"
                 "xbox" "/Icons/xbox.svg"
                 "pc" "/Icons/pc.svg"
                 "hmm")
          :height "30"
          :width "30"}]
        (str " "  number)]]

      (map-indexed #(-> ^{:key %2}[invoice-player %2 gamer-system])
                   players)]))

        ;[:td (str gamer)]]]]]))

(defn cart-item [item]
  (let [{:keys [member-id price]} item
        player (subscribe [:player member-id])
        {:keys [name]} @player]
    (fn [item]
      [:div
        [:div {:style {:color "white"}} name]
        [:div.uk-text-right {:style {:color "white"}} (str price " Ft")]])))

(defn cart []
  (let [the-cart (subscribe [:data "cart"])]
    (fn []
      [:div {:style {:background "rgba(0,0,0,0.5)"}}
       [:h1.uk-text-center.uk-heading-line.uk-margin-remove [:span {:style {:color "white"}} "Összesen"]]
       [:div.uk-padding-small (map-indexed #(-> ^{:key %2}[cart-item %2])
                                           (sort-by #(.parseInt js/window (:number %))  @the-cart))]
       [:hr.uk-margin-remove]
       [:h4.uk-text-center.uk-margin-remove.uk-padding-small
        {:style {:color "white"}}
        (str "Végösszeg: "
             (reduce + (map :price @the-cart))
             " Ft")]
       [:div.uk-grid.uk-margin-remove.uk-padding-remove
        {:data-uk-grid true}
        [:button.uk-button.uk-button-secondary.uk-width-1-1
          {:on-click #(doseq [item @the-cart]
                        (do
                          (dispatch [:add-to-cart item])
                          (dispatch [:dungeon/modify-invoice {:id (:_id item)}])))
           :data-uk-icon "icon: check"}]]])))

(defn smart-pult []
  (let [the-cart (subscribe [:data "cart"])
        systems (subscribe [:still-gaming])]
    (reagent/create-class
      {:component-did-mount #(dispatch [:dungeon/get-dungeon])
       :reagent-render
       (fn []
         (if (= 0 (count @the-cart))
           [:div {:style {:background "rgba(0,0,0,0.5)"}}
            [:h1.uk-text-center.uk-heading-line.uk-margin-remove [:span {:style {:color "white"}} "Dungeon"]]

            [:div {:style {:padding-top "10px"}}
             (map-indexed
               #(-> ^{:key %2}[still-gaming %2])
               (filter #(not= (:players %) {}) @systems))]]
           [cart]))})))

(defn checkout []
  (let [players (subscribe [:data "players"])
        invoices (subscribe [:data "invoices"])]
    (reagent/create-class
     {
      :component-did-mount #(dispatch [:dungeon/get-invoices])
      :reagent-render
      (fn []
        [:div.uk-grid.uk-grid-small.uk-padding-small.uk-margin-remove {:data-uk-grid true}
         ;[:button {:on-click #} (str @players)]
         [:div.uk-container.uk-width-1-1.uk-card-secondary
          [:ul.uk-subnav.uk-flex-center
           {:data-uk-sticky true
            :data-uk-switcher "connect: .uk-switcher ;animation: uk-animation-fade"
            :data-uk-tab true}
           [:li.uk-active {:on-click #(.scrollTo js/window 0 0)}
            [:a "Fizetetlen számlák"]]
           [:li {:on-click #(.scrollTo js/window 0 0)}
            [:a "Fizetendő számlák"]]
           [:li {:on-click #(.scrollTo js/window 0 0)}
            [:a "Fizetett számlák"]]]

          [:ul.uk-switcher
           [:li "dsadsasda3"]
           [:li "dsadsasda324234"]
           [:li "dsadsasdadsad"]]]

         [:div.uk-width-3-4
          [:div
           [:table.uk-table.uk-table-middle
            [:thead {:style {:background "rgba(255,255,255,0.1)"}}
             [:tr
              [:th.uk-text-center "Típus"]

              [:th.uk-text-center "ID"]
              [:th.uk-text-center "Név"]
              [:th.uk-text-center "Intervallum"]

              [:th.uk-text-center "Eltelt idő"]
              [:th.uk-text-center "Bérlet"]
              [:th.uk-text-center "Ár"]
              [:th.uk-text-center "Action"]]]
            [:tbody
             (map-indexed
              #(-> ^{:key %2} [invoice %2])
              (reverse (sort-by :color @invoices)))]]]]
         [:div.uk-width-1-4
           [smart-pult]]])})))

(defn modify-member [member index]
  (let [modify-atom (atom member)]
    (reagent/create-class
     {:reagent-render
      (fn [member index]
        [:div.uk-width-1-2.uk-padding-small.uk-margin-remove.uk-animation-fade {}

         [:div.uk-card.uk-card-secondary ;{:style {:opacity 0.85}}

          [:div.uk-width-1-1.uk-padding-remove
           [:h1.uk-heading-bullet.uk-width-1-1.uk-padding-remove {:style {:color "white !important"}}
            (str "Id: " (:id member) "  - Bérlet: " (:season-pass member))]
           [:div.uk-position-top-right [:span {:style {:cursor "pointer"}
                                               :data-uk-icon "icon: check; ratio: 2.5"
                                               :on-click #(do
                                                            (notification "Név frissítve!")
                                                            (chsk-send! [:dungeon/update-member
                                                                         @modify-atom]))}]]]

            ;[:span {:style {:cursor "pointer"}
            ;        :data-uk-icon "icon: close; ratio: 2.5"
            ;        :on-click #(do
            ;                     (notification "Felhasználó törölve!")
            ;                     (dispatch [:remove-member
            ;                                (:id member)]
            ;                     (chsk-send! [:dungeon/remove-member
            ;                                  (:id member)]
            ;                     (chsk-send! [:dungeon/get-max-id])]]
          [:button.uk-button.uk-button-default.uk-width-1-4.uk-margin-remove
           {:on-click #(do
                         (swap! modify-atom assoc :season-pass (- (:season-pass member) 1))
                         (chsk-send! [:dungeon/update-member
                                      (update @modify-atom :season-pass dec)])
                         (notification (str (:name @modify-atom) " - bérlete 1-gyel csökkent")))}
           "-1"]
          [:button.uk-button.uk-button-default.uk-width-1-4.uk-margin-remove
           {:on-click #(do
                         (swap! modify-atom assoc :season-pass (- (:season-pass member) 0.5))
                         (chsk-send! [:dungeon/update-member
                                      (assoc @modify-atom :season-pass (- (:season-pass member) 0.5))])
                         (notification (str (:name @modify-atom) " - bérlete 0.5-gyel csökkent")))}
           "-.5"]
          [:button.uk-button.uk-button-default.uk-width-1-4.uk-margin-remove
           {:on-click #(do
                         (swap! modify-atom assoc :season-pass (+ (:season-pass member) 0.5))
                         (chsk-send! [:dungeon/update-member
                                      (assoc @modify-atom :season-pass (+ 0.5 (:season-pass member)))])
                         (notification (str (:name @modify-atom) " - bérlete 0.5-gyel nőtt")))}
           "+.5"]
          [:button.uk-button.uk-button-default.uk-width-1-4.uk-margin-remove
           {:on-click #(do
                         (swap! modify-atom assoc :season-pass (+ (:season-pass member) 1))
                         (chsk-send! [:dungeon/update-member
                                      (assoc @modify-atom :season-pass (+ 1 (:season-pass member)))])
                         (notification (str (:name (:id @modify-atom)) " - bérlete 1-gyel nőtt")))}
           "+1"]
                   ;[:h6.uk-heading-bullet.uk-width-1-1.uk-padding-remove]
          [:div.uk-width-1-1.uk-padding-remove.uk-margin-remove
           [:input.uk-input.uk-text-center {:on-change #(swap! modify-atom assoc :name (-> % .-target .-value)) :value (:name @modify-atom)}]]
                   ;[:input.uk-input {:on-change #(swap! modify-atom assoc :season-pass (-> % .-target .-value)) :value (:season-pass member)}]
                   ;[:input.uk-input {:on-change #(swap! modify-atom assoc :name (-> % .-target .-value)) :value (str (:playing @modify-atom))}]
          [:div.uk-grid.uk-child-width-1-3.uk-margin-remove.uk-width-1-1.uk-padding-remove {:data-uk-grid true}
           [:button.uk-button.uk-button-default {:on-click #(do
                                                              (swap! modify-atom assoc :season-pass (+ (:season-pass member) 6))
                                                              (chsk-send! [:dungeon/update-member
                                                                           (assoc @modify-atom :season-pass (+ 6 (:season-pass member)))])
                                                              (notification (str (:name @modify-atom) " kapott egy Beginner bérletet!")))}
            "+Beginner"]
           [:button.uk-button.uk-button-default {:on-click #(do
                                                              (swap! modify-atom assoc :season-pass (+ (:season-pass member) 13))
                                                              (chsk-send! [:dungeon/update-member
                                                                           (assoc @modify-atom :season-pass (+ 13 (:season-pass member)))])
                                                              (notification (str (:name @modify-atom) " kapott egy Medium bérletet!")))}
            "+Medium"]
           [:button.uk-button.uk-button-default {:on-click #(do
                                                              (swap! modify-atom assoc :season-pass (+ (:season-pass member) 28))
                                                              (chsk-send! [:dungeon/update-member
                                                                           (assoc @modify-atom :season-pass (+ 28 (:season-pass member)))])

                                                              (notification (str (:name @modify-atom) " kapott egy Hardcore bérletet!")))}
            "+Hardcore"]]]])})))

(defn registration-input [members]
  (let [max-id (subscribe [:data "max-id"])
        search (subscribe [:data "search-member"])
        the-timeout (atom nil)]
        ;input-value (atom "")]
    (reagent/create-class
      {:component-did-mount #(chsk-send! [:dungeon/get-max-id])
       :reagent-render
       (fn [members]
         [:div.uk-sticky.uk-card.uk-grid.uk-grid-stack.uk-margin-remove.uk-animation-fade
          {:data-uk-grid "true" :data-uk-sticky "offset: 60"}
           ;[:div.uk-width-1-1 (str @members)]
          [:input#username.uk-input.uk-text-center.uk-padding-remove.uk-first-column
           {:on-change #(do
                          ;(reset! input-value %)
                          (if @the-timeout (.clearTimeout js/window @the-timeout))
                          (reset! the-timeout
                                  (.setTimeout
                                   js/window
                                   (fn [a] (dispatch [:set-search-member a]))
                                   500
                                   (-> % .-target .-value))))
            :placeholder "Regisztráció/Keresés"
            :type "text"}]

          [:button.uk-button.uk-button-primary.uk-align-center.uk-margin-remove.uk-padding-remove.uk-width-1-1.uk-grid-margin.uk-first-column
           {:disabled (if (= 0 @max-id) true false)
            :on-click #(do (dispatch [:set-max-id (inc @max-id)])
                           (chsk-send! [:dungeon/add-member {:id @max-id :name @search}]))}
           (str @max-id) ". gamer hozzáadása!"]])})))

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
            lazy-number (subscribe [:data "lazy-number"])
            search (subscribe [:data "search-member"])
            active-page (subscribe [:data "actual-page"])]

        (if (and (lazy-load?) (= @active-page "registration"))
          (do
            (dispatch [:dungeon/get-members {:number @lazy-number :search @search}])
            (dispatch [:set-lazy-number (+ 20 @lazy-number)])))
        ;(reset! cur-scroll-y (max 0 new-y))
        (recur)))))

(defn registration []
  (let [members (subscribe [:data "search-pool"])
        search (subscribe [:data "search-member"])]
    (reagent/create-class

     {:component-did-mount #(do (listen!)
                                (dispatch [:dungeon/get-members {:number 0 :search ""}]))

      ;:component-will-unmount #(unlisten!)

      :reagent-render
      (fn []
        [:div.uk-container

               ;[:div (str (filter-by-name-and-id  @members search true))]

         [registration-input members]

         [:div.uk-grid.uk-margin-remove.uk-padding-small

          {:id "member"
           :class "uk-child-width-1-3@m member"
                                ;:data-uk-scrollspy
                                ;"cls: uk-animation-slide-left; target: > div > .uk-card; delay: 0; repeat: true"
           :data-uk-grid true}

                             ;[:h3 (str "hello" @members)]
                             ;(str (sort-by :id #(> %2 %1) (filter-by-name-and-id  @members search true)))

          (map-indexed
           #(-> ^{:key (:id %2)} [modify-member %2 %1])
           (sort-by :id #(> %1 %2) (filter-by-name-and-id  @members search true)))]])})))

(defn show-20-more [number]
  (let [search (subscribe [:data "search-member"])
        number (atom 20)]
    (fn []
      [:button.uk-width-2-3.uk-button.uk-button-primary
       {:on-click #(do
                    ; (.scrollTo js/window 0 0)
                     (dispatch [:dungeon/get-members {:number @number :search @search}])
                     (reset! number (+ 20 @number)))}
       "Mutass többet..."])))
                            ;(count @players)])))

(defn sidenav []
  (let [sidenav-state (subscribe [:data "sidenav-state"])
        number (atom 20)
        the-timeout (atom nil)]

    (reagent/create-class
     {:component-did-mount #(dispatch [:set-search-member ""])
      :reagent-render

      (fn []
        [:div#sidenav {:data-uk-offcanvas "flip: true"}
         [:div.uk-offcanvas-bar.uk-padding-remove

          [:div.uk-grid.uk-child-width-1-4.uk-padding-small {:data-uk-grid true}
           [:div {:on-click #(dispatch [:set-sidenav-state 1])}
            [:img {:src (if (not= @sidenav-state 1)
                          "/Icons/search.svg"
                          "/Icons/search-active.svg")}]]
           [:div {:on-click #(dispatch [:set-sidenav-state 2])}
            [:img {:src (if (not= @sidenav-state 2)
                          "/Icons/playing.svg"
                          "/Icons/playing-active.svg")}]]
           [:div {:on-click #(dispatch [:set-sidenav-state 3])}
            [:img {:src  (if (not= @sidenav-state 3)
                           "/Icons/payment-method.svg"
                           "/Icons/cash-active.svg")}]]
           [:div {:on-click #(dispatch [:set-sidenav-state 4])}
            [:img {:src (if (not= @sidenav-state 4)
                          "/Icons/waiting.svg"
                          "/Icons/waiting-active.svg")}]]]
          (case @sidenav-state
            1 [:div
               [:form.uk-search.uk-search-large.uk-padding-small.uk-padding-remove-vertical
                [:input.uk-search-input.uk-animation-slide-top
                 {:on-change #(do
                                (reset! number 20)
                                (if @the-timeout (.clearTimeout js/window @the-timeout))
                                (reset! the-timeout
                                        (.setTimeout
                                          js/window
                                          (fn [a] (dispatch [:set-search-member a]))
                                          500
                                          (-> % .-target .-value))))

                  ;(dispatch [:set-search-member (-> % .-target .-value)]))
                  ;:placeholder "Regisztráció/Keresés",


                  :placeholder "Keresés...", :type "search"}]]
               [:div.uk-width-1-1
                [gamers]
                [show-20-more number]]]

            2 [:div
               ^{:key 2} [:h3.uk-heading-bullet.uk-animation-slide-top "Dungeonben"]
               [gaming-gamers]]
            3 [:div
               ^{:key 3} [:h3.uk-heading-bullet.uk-animation-slide-top "Kasszánál"]
               [paying-gamers]]
            4 [:div
               ^{:key 4} [:h3.uk-heading-bullet.uk-animation-slide-top "Váróterem"]
               [waiting-pool]])]])})))

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
                {
                 :on-click #(do
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
  (let [modify-atom (atom member)]
    (fn [member]
      [:div.uk-padding-remove.uk-card-secondary.uk-margin-remove.uk-child-width-expand.uk-grid-collapse
       {:data-uk-height-match true
        :data-uk-grid true
        ;:class "active-border"
        :class "active-border"}
       ;(str member)
       [:div.uk-inline
         [:span.uk-position-center
          {:data-uk-tooltip "title: -1 bérletóra (hibajavításra)"
           :on-click #(chsk-send! [:dungeon/update-member
                                   (assoc @modify-atom :season-pass (- (:season-pass member) 1))])
           :data-uk-icon "icon: minus"}]]

       [:div
        {:data-uk-tooltip "title: Beginner bérlet: 6 óra - 1750 Ft"
         :on-click #(do
                      (swap! modify-atom assoc :season-pass (+ (:season-pass member) 6))
                      (chsk-send! [:dungeon/update-member
                                   (assoc @modify-atom :season-pass (+ 6 (:season-pass member)))])
                      (notification (str (:name @modify-atom) " kapott egy Beginner bérletet!")))}
        [:img {:src "/Icons/bronze.png" :width "50px"}]]
       [:div
        {:data-uk-tooltip "title: Medium bérlet: 13 óra - 3500 Ft"
         :on-click #(do
                      (swap! modify-atom assoc :season-pass (+ (:season-pass member) 13))
                      (chsk-send! [:dungeon/update-member
                                   (assoc @modify-atom :season-pass (+ 13 (:season-pass member)))])
                      (notification (str (:name @modify-atom) " kapott egy Medium bérletet!")))}
        [:img {:src "/Icons/silver.png" :width "50px"}]]
       [:div
        {:data-uk-tooltip "title: Hardcore bérlet: 18 óra - 7000 Ft"
         :on-click #(do
                      (swap! modify-atom assoc :season-pass (+ (:season-pass member) 13))
                      (chsk-send! [:dungeon/update-member
                                   (assoc @modify-atom :season-pass (+  28 (:season-pass member)))])
                      (notification (str (:name @modify-atom) " kapott egy Medium bérletet!")))}
        [:img {:src "/Icons/gold.png" :width "50px"}]]
       [:div.uk-inline
        [:span.uk-position-center
         {:on-click #(chsk-send! [:dungeon/update-member
                                  (assoc @modify-atom :season-pass (+ (:season-pass member) 1))])
          :data-uk-icon "icon: plus"
          :data-uk-tooltip "title: +1 bérletóra (hibajavításra)"}]]

       [:div.uk-inline
        {:data-uk-tooltip "title: + 1 Monster, pultnál fizeti"
         :style {:vertical-align "middle"}
         :on-click #(chsk-send! [:dungeon/update-member
                                 (assoc @modify-atom :season-pass (+ (:season-pass member) 1))])}
        [:img.uk-position-center {:src "/Icons/monster.png" :width "25px" :style {:vertical-align "middle"}}]]
       [:div.uk-inline
        [:span.uk-position-center {:style {:pointer "pointer"}
                                   :data-uk-icon "close"
                                   :data-uk-tooltip "title: Kiválasztás resetelése"
                                   :on-click #(dispatch [:set-active-member 0])}]]])))




(defn selected-user []
  (let [selected-user (subscribe [:data :active-member])
        number (atom 20)
        the-timeout (atom nil)

        search (subscribe [:data "search-member"])
        max-id (subscribe [:data "max-id"])]
    (reagent/create-class
      {:component-did-mount #(do
                               (dispatch [:dungeon/get-members {:number 0 :search ""}])
                               (dispatch [:dungeon/get-member-with-id @selected-user]))

       :component-will-update #(dispatch [:dungeon/get-member-with-id @selected-user])
       :reagent-render
       (fn []
         [:div.uk-width-1-1
          [:div.uk-margin-remove.uk-padding-remove.uk-flex-center.uk-child-width-1-3
           {:data-uk-grid true :data-uk-sticky "offset: 60"}
           [:div.uk-padding-remove.uk-card-secondary
            {:class (if (= 0 @selected-user) "" "active-border")}
            (if (not= 0 @selected-user)
              [:div
               [:h4.uk-text-center.uk-margin-remove
                [player-data (deref (subscribe [:player @selected-user]))]]])]


           [:div.uk-padding-remove
            [:form.uk-search.uk-search-large.uk-width-1-1.uk-card-secondary
             {:style {:height "100%"}}
             [:input.uk-search-input.uk-text-center
              {;:value @search

               ;:on-blur #(.hide (.drop js/UIkit "#search-drop"))
               ;:on-click #(reset! edit false)
               :on-change #(do
                             (.show (.drop js/UIkit "#search-drop"))
                             (reset! number 20)
                             (if @the-timeout (.clearTimeout js/window @the-timeout))
                             (reset! the-timeout
                                     (.setTimeout
                                       js/window
                                       (fn [a] (dispatch [:set-search-member a]))
                                       500
                                       (-> % .-target .-value))))

               ;(dispatch [:set-search-member (-> % .-target .-value)]))
               ;:placeholder "Regisztráció/Keresés",


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
              [show-20-more]
              [:button.uk-width-1-3.uk-button-danger
               {:on-click #(do (dispatch [:set-max-id (inc @max-id)])
                               (chsk-send! [:dungeon/add-member {:id @max-id :name @search}])
                               (dispatch [:set-search-member @search]))}
               (str @max-id ". ")
               [:span {:data-uk-icon "icon: plus;"}]

               [:span {:data-uk-icon "icon: user;"}]]]]]
           (if (not= 0 @selected-user)
             [season-pass-panel (deref (subscribe [:player @selected-user]))]
             [:div.uk-card-secondary])]])})))







       ;(if (not= 0 @selected-user)
       ;  [:h2.uk-card.uk-card-default "Hova ül?"]
       ;  [:h2.uk-card.uk-card-default "Ki ül"]]]])))







(defn dungeon []
  (let [app-state (subscribe [:dungeon])
        systems (subscribe [:data "system-map"])
        sidenav-canvas (atom nil)]
    (reagent/create-class
     {:component-did-mount #(do

                              (dispatch [:dungeon/get-dungeon])

                              

                              (.dragging js/window)
                              (.dropzone
                               (.interact js/window ".dropzone")
                               (clj->js {:accept ".valami"
                                                    ;:overlap 0.75
                                         :ondragenter (fn [e] (.hide @sidenav-canvas))}))
                                                    ;:ondragleave (fn [e] (.notification js/UIkit "Elhagytál, Csengő Zolival megcsaltáll"))
                                         ;:ondrop (fn [e] (change e))}))
                              (.dropzone
                               (.interact js/window ".dropzone2")
                               (clj->js {:accept ".masvalami"
                                                    ;:overlap 0.75
                                                    ;:ondragenter (fn [e] (istenem e))
                                                    ;:ondragleave (fn [e] (.notification js/UIkit "Elhagytál, Csengő Zolival megcsaltáll"))
                                         :ondrop (fn [e] (transfer e))}))) :reagent-render
      (fn []
        [:div.uk-background-cover.uk-offcanvas-content.svg-cursor
         (str @app-state)
         [selected-user]

         (if   (= @systems [])

           [:img#loading
            {:style {:width "auto"
                     :height "300px"
                     :position "absolute"
                     :left "50%"
                     :top "50%"
                     :margin-left "-150px"
                     :margin-top "-150px"}
             :src "/img/lvlup-logo-transparent.png"}]

                        ;[usage]

           [:div.uk-padding-small.uk-margin-remove {:data-uk-grid true} ;:style {:background-color "#0076CC"}}
                                     ;[gamers]

            [system-row]])])})))
