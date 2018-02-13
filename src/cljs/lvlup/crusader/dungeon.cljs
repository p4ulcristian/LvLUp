(ns lvlup.crusader.dungeon
  (:require     [reagent.core :as reagent :refer [atom]]
                [lvlup.crusader.sente :refer [chsk-send! start-router! chsk-reconnect! chsk-disconnect!]]

                [reagent.session :as session]
                [clojure.string  :as str]
                [jayq.core :refer [$]]

                [cljs.core.async :as async  :refer (<! >! put! chan timeout)]

                ;[cljs.core.async :refer [<! timeout]]
                ;[lvlup.sente :refer [crusader-navbar]]
                [cljs-time.core :as tcore]
                [cljs-time.format :as tformat]
                [cljs-time.coerce :as coerce]

                [cljs-time.core :as tcore]
                [cljs-time.format :as tformat]
                [cljs-time.coerce :as tcoerce]
                [cljs.reader :refer [read-string]]
                [re-frame.core :refer [subscribe dispatch dispatch-sync]]
                [lvlup.events]
                [lvlup.subs])
  (:require-macros
     [cljs.core.async.macros :as asyncm :refer (go go-loop)]))



;;Decides if time needs converting
;;Needed because cljs compilation breaks string on time

(defn convert-to-clojurescript-time [ido]
  (js/String (tcoerce/from-long (js/parseInt ido)))
  (if (= 13 (count ido))
      (js/String (tcoerce/from-long (js/parseInt ido)))
      ido))

;(defn events->unlisten
;  [el event-type] (events/unlisten el event-type))

;(defn events->chan
;  ([el event-type] (events->chan el event-type (chan)))
;  ([el event-type c] (events/listen el event-type (fn [e] (put! c e))) c))
(defn notification [valami]
  (.notification js/UIkit (str "<div class='uk-padding-small uk-card uk-card-secondary' style = 'color: red'><span uk-icon='icon: check'></span> " valami "</div>") (clj->js {:pos "bottom-right"})))

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

(def timeformat (tformat/formatter "HH:mm"))

(defn convert-time [origin]
  (tformat/unparse timeformat (coerce/from-long origin)))

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
        (if (> 10 remaining-minutes)
            (* halves type-price)
            (* (inc halves) type-price)))))

(defn calculate-time-interval [time-one time-two]
      ;(.log js/console (str "start? " time-one))
      ;(.log js/console (str "finish? " time-two))
      (if (tcore/before?
              time-one
              time-two)
          (tcore/in-seconds (tcore/interval
                                      time-one
                                      time-two))
          (* -1
            (tcore/in-seconds (tcore/interval
                                      time-two
                                      time-one)))))

(defn abs [n] (max n (- n)))

(defn count-time-halves [start finish]
  (if
    (tcore/before?
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







(defn all-items-to-invoices [player-id]
    (let [all-systems (subscribe [:data "system-map"])
          all-players (filter (fn [a] (and (not= (:players a) {}) (not= (:players a) nil)))
                              (map #(assoc {} :number (:number %) :players (:players %))
                                   @all-systems))
          this-player-all-systems (doall
                                    (filter #(= (js/parseInt player-id) (:member-id (second (first (:players %)))))
                                            (doall
                                              (filter (fn [a] (contains? (second (first (:players a))) :member-id))
                                                      all-players))))
          this-player-systems (doall
                                 (filter #(= (js/parseInt player-id) (:member-id (second (first (:players %)))))
                                         (doall
                                           (filter (fn [a] (contains? (second (first (:players a))) :start))
                                                   all-players))))]



      (doseq [system this-player-systems]
        (let [number (:number system)
              player (:players system)


              [filtered-system] (filter #(= number (:number %))
                                        @all-systems)]
            ; (.log js/console (str "wtf" the-val))
             (doseq [[the-key place] player]
                    (chsk-send!
                         [:dungeon/add-invoice
                             (assoc {}
                                    :type (:type place)
                                    :name (:name place)
                                    :member-id player-id
                                    :payed false
                                    :start (convert-to-clojurescript-time (:start place))
                                    :finish (convert-to-clojurescript-time (str (tcore/plus (tcore/now) (tcore/hours 1))))
                                    :price (minute-to-money (tcore/in-seconds (tcore/interval
                                                                                (tformat/parse (:start place))
                                                                                (tcore/plus (tcore/now) (tcore/hours 1))))
                                                            (:type place)))]))))
      (chsk-send! [:dungeon/get-members-with-id (vec player-id)])
      (doseq [system this-player-all-systems]
           (let [number (:number system)
                 player (:players system)


                 [filtered-system] (filter #(= number (:number %))
                                           @all-systems)]
               ; (.log js/console (str "wtf" the-val))
                (doseq [[the-key place] player]
                       ;(.log js/console (str "wtf" the-key)
                      (chsk-send!
                                           [:dungeon/change
                                               (assoc
                                                 filtered-system
                                                 :players (dissoc
                                                            (:players
                                                              filtered-system)
                                                            the-key))]))))))





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
                                        (tformat/parse (:start %))
                                        (tcore/plus (tcore/now) (tcore/hours 1)))
                                     this-player-systems))]
      ;(.log js/console (str "wtf" this-player-systems))
      total-price))



(defn all-items-to-season-pass [player-id]
    (let [all-systems (subscribe [:data "system-map"])
          all-players (filter (fn [a] (and (not= (:players a) {}) (not= (:players a) nil)))
                              (map #(assoc {} :number (:number %) :players (:players %))
                                   @all-systems))
          this-player-all-systems (doall
                                   (filter #(= (js/parseInt player-id) (:member-id (second (first (:players %)))))
                                           (doall
                                             (filter (fn [a] (contains? (second (first (:players a))) :member-id))
                                                     all-players))))
          this-player-systems (doall
                                 (filter #(= (js/parseInt player-id) (:member-id (second (first (:players %)))))
                                         (doall
                                           (filter (fn [a] (contains? (second (first (:players a))) :start))
                                                   all-players))))]


      (.log js/console (str "wtf: " all-players))
      (doseq [system this-player-systems]
        (let [number (:number system)
              player (:players system)


              [filtered-system] (filter #(= number (:number %))
                                        @all-systems)]

             (doseq [[the-key place] player]
                  ;  (.log js/console (str "wtf" the-key))
                    (chsk-send!
                         [:dungeon/season-pass
                                {:quantity
                                      (* -1
                                         (all-items-to-hours player-id))
                                 :member-id player-id}]))

             (doseq [system this-player-all-systems]
               (let [number (:number system)
                     player (:players system)


                     [filtered-system] (filter #(= number (:number %))
                                               @all-systems)]
                   ; (.log js/console (str "wtf" the-val))
                    (doseq [[the-key place] player]

                           (.log js/console (str "wtf" (assoc
                                                           filtered-system
                                                           :players (dissoc
                                                                      (:players
                                                                        filtered-system)
                                                                      the-key))))

                           (chsk-send!
                                         [:dungeon/change
                                             (assoc
                                               filtered-system
                                               :players (dissoc
                                                          (:players
                                                            filtered-system)
                                                          the-key))]))))))))



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
                                                         (tcore/before?
                                                                (tformat/parse (:start %))
                                                                (tcore/plus (tcore/now) (tcore/hours 1)))
                                                         (tcore/in-seconds
                                                            (tcore/interval
                                                                (tformat/parse (:start %))
                                                                (tcore/plus (tcore/now) (tcore/hours 1))))
                                                         0)
                                                       (:type %))
                                     this-player-systems))]
      ;(.log js/console (str "wtf" this-player-systems))
      total-price))
      ;total-price))

(defn elapsing-time-no-seconds [seconds]
  (let [seconds-negated (* -1 seconds)]
    (if (neg? seconds)
      (str "- "(quot seconds-negated 3600) "h " (mod (quot seconds-negated 60) 60) "m " (mod seconds-negated 60) "s")
      (str (quot seconds 3600) " óra " (mod (quot seconds 60) 60) " perc "))))

(defn elapsing-time [seconds]
  (let [seconds-negated (* -1 seconds)]
    (if (neg? seconds)
      (str "- "(quot seconds-negated 3600) "h " (mod (quot seconds-negated 60) 60) "m " (mod seconds-negated 60) "s")
      (str (quot seconds 3600) "h " (mod (quot seconds 60) 60) "m " (mod seconds 60) "s"))))

(defn pay [player-number item]
  [:button.uk-button-small.uk-button.uk-button-primary.uk-width-1-3
       { :data-uk-icon "icon: sign-out"
         :on-click #(do
                      ;(.log js/console item)
                      (chsk-send!
                                    [:dungeon/change
                                        (assoc item :players (dissoc (:players item) player-number))])
                      (chsk-send!
                           [:dungeon/add-invoice
                              (assoc  {}
                                      :type (:type item)
                                      :name (:name item)
                                      :member-id (:member-id (get (:players item) player-number))
                                      :payed false
                                      :start (convert-to-clojurescript-time (:start (get (:players item) player-number)))
                                      :finish (convert-to-clojurescript-time (str (tcore/plus (tcore/now) (tcore/hours 1))))
                                      :price (minute-to-money (tcore/in-seconds (tcore/interval
                                                                                  (tformat/parse (:start (get (:players item) player-number)))
                                                                                  (tcore/plus (tcore/now) (tcore/hours 1))))
                                                              (:type item)))]))}])







(defn pay-with-season-pass [player-number item]
         [:button.uk-button-small.uk-button.uk-button-primary.uk-width-1-3
              { :data-uk-icon "icon: credit-card"

                :on-click #(do
                             (.log js/console item)
                             (chsk-send!
                               [:dungeon/change
                                   (assoc item :players (dissoc (:players item) player-number))])
                             (chsk-send! [:dungeon/season-pass
                                                   {:quantity
                                                         (* -1
                                                            (count-time-halves
                                                                   (tformat/parse (:start (get (:players item) player-number)))
                                                                   (tcore/plus (tcore/now) (tcore/hours 1))))
                                                    :member-id (:member-id (get (:players item) player-number))}]))}])




(defn modify-time [player-number item elojel the-atom]
  (fn [player-number item elojel the-atom]
    [:button.uk-button-small.uk-button.uk-button-danger.uk-width-1-2
       { :disabled (if (= nil (:start (get (:players item) player-number))) true false)
         :data-uk-icon (str "icon: " (if (= elojel "-")
                                         "history"
                                         "future"))
         :on-click #(do
                         (notification (if
                                         (= "+" elojel)
                                         "+ 5 perc"
                                         "- 5 perc"))
                         (chsk-send! [:dungeon/change
                                       (assoc-in item
                                               [:players player-number :start]
                                               (if
                                                 (= "+" elojel)
                                                 (convert-to-clojurescript-time (str (tcore/minus (tformat/parse (:start (get (:players item) player-number))) (tcore/minutes 5))))
                                                 (convert-to-clojurescript-time (str (tcore/plus (tformat/parse (:start (get (:players item) player-number))) (tcore/minutes 5))))))])
                         (reset! the-atom
                                             (calculate-time-interval

                                               (if (= "+" elojel)
                                                 (tcore/minus (tformat/parse (:start (get (:players item) player-number))) (tcore/minutes 5))
                                                 (tcore/plus (tformat/parse (:start (get (:players item) player-number))) (tcore/minutes 5)))
                                               (tcore/plus (tcore/now) (tcore/hours 1)))))}]))

(defn cancel [player-number item]
  (let [];system (subscribe [:data "system-map"])]
    (fn [player-number item]

      [:button.uk-button-small.uk-button.uk-button-primary.uk-width-1-3
           {:data-uk-icon "icon: close"
            :on-click #(do
                         (chsk-send!
                           [:dungeon/change
                               (assoc item :players (dissoc (:players item) player-number))]))}])))



(defn start-button [player-number item the-atom]
  [:button.uk-button.uk-button.uk-button-primary.uk-width-1-1.uk-margin-small-top
       {:data-uk-icon "icon: play"
        :on-click #(do
                     (reset! the-atom 0)
                     (chsk-send!
                       [:dungeon/change
                           (assoc item :players (assoc-in (:players item) [player-number :start] (convert-to-clojurescript-time (str (tcore/plus (tcore/now) (tcore/hours 1))))))]))}])







(defn player-playing [system [player-number data]]
      (let [
            active-member (subscribe [:data "active-member"])
            time-elapsed (atom (if (:start data)
                                   (calculate-time-interval
                                     (tformat/parse (:start data))
                                     (tcore/plus (tcore/now) (tcore/hours 1)))))
            valami (atom (js/setInterval #(reset! time-elapsed (inc @time-elapsed)) 1000))
            players (subscribe [:data "players"])
            this-player (fn [] (first
                                 (filter
                                   #(= (:id %) (:member-id data))
                                   @players)))]

        (fn [system [player-number data]]

         [:div.uk-padding-remove.uk-animation-fade {
                                                    :style {:border "1px solid red"}
                                                    :class (if (= (:member-id data) @active-member)
                                                               "uk-card-primary"
                                                               "uk-card-secondary")}
           [:div.uk-padding-small.uk-padding-remove-bottom

                [:div (str (:id (this-player)) " - " (:name (this-player)))]]

           (if (:start data)
               [:div
                     [:div.uk-text-center
                        (str (convert-time (tformat/parse (:start data)))
                             " - "
                             (minute-to-money
                               @time-elapsed
                               (:type data))
                             " Ft")]
                     [:h3.uk-text-center.uk-padding-remove.uk-margin-remove (elapsing-time @time-elapsed)]]
               [start-button player-number system time-elapsed])
           [modify-time player-number system "-" time-elapsed]
           [modify-time player-number system "+" time-elapsed]
           [cancel player-number system]
           [pay-with-season-pass player-number system]
           [pay player-number system]])))


(defn system [item]
  (let []
    (reagent/create-class
      {:reagent-render
              (fn [item]
                 [:li.uk-width-1-5.valami.dropzone.dropzone2
                    {:id (:number item)}
                    [:div.uk-card.uk-card-secondary
                       [:div.uk-card-header.uk-padding-small
                        [:div.uk-grid-small.uk-flex-middle {:data-uk-grid true}
                         [:div.uk-width-auto
                              [:img
                               {:src (case (:type item)
                                           "ps" "/Icons/ps.svg"
                                           "xbox" "/Icons/xbox.svg"
                                           "pc" "/Icons/pc.svg"
                                           "hmm")
                                :height "40"
                                :width "40"}]]
                         [:div.uk-width-expand
                           [:h3.uk-card-title.uk-margin-remove-bottom.uk-text-truncate (str (:number item) " - " (:name item))]
                           [:p.uk-text-meta.uk-margin-remove-top (:member-id item)]]]]
                            ;[:time {:datetime "2016-04-01T19:00"} "April 01, 2016"]]]]]
                       (if (= 0 (count (:players item)))
                           [:h3.uk-heading.uk-text-center "Foglalások mára... Soon"]
                           [:div.masvalami.draggable {:id (:number item) :style {:cursor "move"}}
                              (map-indexed
                                #(-> ^{:key (first %2)}[player-playing item %2])
                                (:players item))])]])})))





                     ;[:button {:on-click #(.notification js/UIkit "Halika")} "dsads"]

(defn get-member-systems [player]
  (let [systems (subscribe [:data "system-map"])]
     (filter #(= (:id player) (:member-id %)) @systems)))




(defn plays? [id]
  (let [systems (subscribe [:data "system-map"])]

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
  (let [invoices (subscribe [:data "invoices"])
        pool (subscribe [:data "waiting-pool"])
        sidenav-state (subscribe [:data "sidenav-state"])
        active-member (subscribe [:data "active-member"])]


    (reagent/create-class
          {
            :reagent-render

              (fn [data index which-tab]
                [:div.uk-padding-small.uk-padding-remove-vertical.uk-margin-small.uk-animation-fade
                       {:style {:cursor "pointer"}}
                     [:div.valami.uk-padding-remove.draggable.uk-card.uk-card-default.uk-margin-remove.uk-grid-collapse.uk-margin
                          {:data-uk-grid true
                           :on-click #(dispatch [:set-active-member (:id data)])
                           :id (:id data)}
                        [:div.uk-width-1-3
                            [:div.uk-inline
                              [:img.uk-border-circle {:src "/img/logos/unnamed.png"}]
                              (if
                                (not (some #(= % data) @pool))
                                [:div.uk-position-bottom-right
                                    [:button.uk-button.uk-padding-remove.to-the-waiting-pool {:on-click #(chsk-send! [:dungeon/add-to-waiting-pool data])}
                                        [:img.uk-border-circle {:height "30" :width "30" :src "/Icons/time-left.svg"}]]]
                                [:div.uk-position-bottom-right
                                    [:button.uk-button.uk-padding-remove.to-the-waiting-pool {:on-click #(chsk-send! [:dungeon/remove-from-waiting-pool data])}
                                        [:img.uk-border-circle {:height "30" :width "30" :src "/Icons/remove.svg"}]]])]]


                        [:div.uk-card-body.uk-padding-small.uk-margin-remove.uk-width-2-3.uk-dark
                                  {:class (if (= (:id data) @active-member)
                                             "uk-card-primary"
                                             "uk-card-default")}
                              [:div.uk-text-truncate {:style {:font-size "1.4em" :padding "3px"}} (str (:id data) ".-"(:name data))]
                              [:div.uk-text-truncate (str "Bérlet: " (:season-pass data)) " óra"]
                              [:div.uk-text-truncate (str "XP: " (:total-hours data))]
                              (if (= (:id data) @active-member)
                                  [:div
                                        [:div (str "Összesen: "(all-items-to-money (:id data)) " Ft")]
                                        [:div (str "Játszott órák: "(all-items-to-hours (:id data)) " óra")]])]]])})))
                                        ;[:div (str "Bérlet: "(:season-pass data)) " óra"]])]]
                     ;(if (= (:id data) @active-member)
                      ;   [:div.uk-grid.uk-margin-remove.uk-padding-remove {:data-uk-grid true}
                      ;     [:button.uk-button.uk-button-primary.uk-width-1-2.uk-padding-remove
                      ;                       {:style {:border "1px red solid"}
                      ;                        :data-uk-icon "icon: credit-card"
                      ;                        :on-click #(all-items-to-season-pass (:id data))]])
                      ;     [:button.uk-button.uk-button-primary.uk-width-1-2.uk-padding-remove
                      ;                       {:data-uk-icon "icon: sign-out"
                      ;                        :style {:border "1px red solid"}
                      ;                        :on-click #(all-items-to-invoices (:id data))]])]]])})))











(defn waiting-pool []
  (let [pool (subscribe [:data "waiting-pool"])]

    (reagent/create-class
      {:component-did-mount #(chsk-send! [:dungeon/get-waiting-pool])
       :reagent-render
            (fn []
              [:div
                (map-indexed  #(-> ^{:key (:id %2)}[player %2 %1 4]) @pool)])})))

(defn paying-gamers []
  (let [players (subscribe [:data "players"])
        systems (subscribe [:data "system-map"])
        invoices (subscribe [:data "invoices"])
        get-member-data (fn [] (vec (set (map :member-id @invoices))))
        the-players-playing (fn [] (doall (filter #(some (fn [a] (= a (:id %))) (vec (set (map :member-id @invoices))) ) @players)))]


    (reagent/create-class
      {:component-did-mount #(chsk-send! [:dungeon/get-members-with-id (get-member-data)])
       :reagent-render
            (fn []
              [:div
                (map-indexed  #(-> ^{:key (:id %2)}[player %2 %1 3]) (the-players-playing))])})))

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
        the-players-playing (fn [] (doall (filter #(some (fn [a] (= a (:id %))) (get-players-playing) ) @players)))]


    (reagent/create-class
      {:component-did-mount #(chsk-send! [:dungeon/get-members-with-id (get-players-playing)])
       :reagent-render
            (fn []
              [:div
                (map-indexed  #(-> ^{:key (:id %2)}[player %2 %1 2]) (the-players-playing))])})))






(defn gamers []
  (let [players (subscribe [:data "players"])
        systems (subscribe [:data "system-map"])
        search (subscribe [:data "search-member"])
        switched-member (atom nil)]

    (reagent/create-class
      {


        :reagent-render
            (fn []
              [:div
                  ;(str @players)
                  (map-indexed  #(-> ^{:key (:id %2)}[player %2 %1 1])
                                (sort-by :id #(> %1 %2) (filter-by-name-and-id  @players search true)))])})))



(defn system-row []
  (let [systems (subscribe [:data "system-map"])
        players (subscribe [:data "players"])
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
        the-players-playing (fn [] (doall (filter #(some (fn [a] (= a (:id %))) (get-players-playing) ) @players)))]

      (reagent/create-class
        {:component-did-mount #(chsk-send! [:dungeon/get-members-with-id (get-players-playing)])
          :reagent-render
                            (fn []
                              [:div.uk-width-1-1

                                [:div.uk-grid-match.uk-grid-small.uk-animation-slide-right { :data-uk-grid true} ;:style {:height "90vh" :overflow "auto"}}
                                    (map-indexed
                                              #(-> ^{:key (:name %2)} [system %2])
                                              (sort-by :number @systems))]])})))




(defn places-on-console [players]
  (cond
    (= nil (:one players)) :one
    (= nil (:two players)) :two
    (= nil (:three players)) :three
    (= nil (:four players)) :four))


(defn change [e]
  (let [systems (subscribe [:data "system-map"])
        system-name (js/parseInt (.-id (.-target e)))
        member-id (.-id (.-relatedTarget e))
        [filtered-system] (filter #(= system-name (:number %)) @systems)]
    (notification (str member-id ". -> " (:name filtered-system)))
    ;(places-on-console (:players filtered-system))
    (.log js/console (= (:type filtered-system) "pc"))
    (if (= (:type filtered-system) "pc")
        (chsk-send!
          [:dungeon/change
            (assoc filtered-system
              :players {:one {:type (:type filtered-system)
                              :member-id (js/parseInt member-id)}})])

        (if (= 4 (count (:players filtered-system)))
            (notification "Több játékos nem fér el!")
            (chsk-send!
                [:dungeon/change
                  (assoc filtered-system :players
                    (assoc (:players filtered-system)
                           (places-on-console (:players filtered-system))
                           {:type (:type filtered-system)
                            :member-id (js/parseInt member-id)}))])))))








(defn transfer [e]
  (let [systems (subscribe [:data "system-map"])
        system-name (js/parseInt (.-id (.-relatedTarget e)))
        other-system (js/parseInt (.-id (.-target e)))
        [filtered-system] (filter #(= system-name (:number %)) @systems)
        [filtered-system2] (filter #(= other-system (:number %)) @systems)]
    (notification (str (:name filtered-system) " <-> " (:name filtered-system2)))
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
          (chsk-send!
            [:dungeon/change
              (assoc filtered-system :players (:players filtered-system2))])

          (chsk-send!
            [:dungeon/change
              (assoc filtered-system2
                :players (:players filtered-system))]))

     (notification "Csak két azonos típusú rendszert tudsz cserélni!"))))



(defn one-item [item season-pass]
  [:div.uk-width-1-2.uk-animation-slide-bottom-medium
     [:div.uk-card-secondary
       [:div.uk-width-1-1.uk-padding-small

          [:div.uk-grid {:data-uk-grid true}
                [:div.uk-width-2-5
                   [:img
                    { :height 30
                      :width 30
                      :src (case (:type item)
                                "ps" "/Icons/ps.svg"
                                "xbox" "/Icons/xbox.svg"
                                "pc" "/Icons/pc.svg"
                                "hmm")}]]

                ;[:div (str "Kezdés: "(convert-time (tformat/parse (:start item))))]
                ;[:div (str "Finish: "(convert-time (tformat/parse (:finish item))))]
                [:h3.uk-padding-remove.uk-margin-remove.uk-text-right.uk-width-3-5 {:style {:color "red"}} (str (:price item) " Ft")]]
          [:hr.uk-margin-small]
          [:div
           [:div.uk-text-center (str (convert-time (tformat/parse (:start item))) " - " (convert-time (tformat/parse (:finish item))))]
           [:div.uk-text-center (str  (elapsing-time-no-seconds
                                        (tcore/in-seconds
                                          (tcore/interval
                                            (tformat/parse (:start item))
                                            (tformat/parse (:finish item))))))]]]


       [:div.uk-width-1-1.uk-child-width-1-2.uk-margin-remove.uk-padding-remove {:data-uk-grid true :style {:cursor "pointer"}}

                [:button.uk-button-small.uk-button-danger.uk-padding-remove-horizontal.uk-text-center
                                              { :data-uk-icon "icon: credit-card"
                                                :on-click #(do

                                                             (chsk-send! [:dungeon/modify-invoice {:id (:_id item)}])
                                                             (chsk-send! [:dungeon/season-pass {:quantity (* -1 (count-time-halves
                                                                                                                  (tformat/parse (:start item))
                                                                                                                  (tformat/parse (:finish item))))
                                                                                                :member-id (:member-id item)}]))}]
                                                ;:disabled (if (>= (count-time-halves (:start item) (:finish item)) season-pass) true false)}

                [:button.uk-button-small.uk-button-success.uk-padding-remove-horizontal.uk-text-center
                                              { :data-uk-icon "icon: check"
                                                :on-click #(do

                                                             (chsk-send! [:dungeon/modify-invoice {:id (:_id item)}]))}]]]])




(defn invoice [item]
  (let [members (subscribe [:data "players"])
        systems (subscribe [:data "system-map"])
        member (fn [] (first (doall (filter #(= (:id %) (first item)) @members))))]
    (fn [item]
      [:div.uk-width-1-3.uk-animation-fade
        ; (str @members)
         [:div.uk-card.uk-card-default.uk-padding-small {:style {:border "2px black solid"}}
           [:h4.uk-margin-remove.uk-text-truncate

               (str  (:id (member))
                     ".- "
                     (:name (member)))]
           [:h5.uk-margin-remove (str "Bérlet órák: " (:season-pass (member)))]



           (if (plays? (:id (member)))
               [:h5.uk-padding-remove.uk-margin-remove "NEM JÁTSZIK"]

               [:div [:h5.uk-margin-remove.uk-padding-remove "JÁTSZIK MÉG"]])

                     ;[:button.uk-button-small.uk-button-danger.uk-width-1-2.uk-padding-remove
                    ;                    {;:style {:border "1px red solid"}
                    ;                     :data-uk-icon "icon: credit-card"
                    ;                     :on-click #(all-items-to-season-pass (:id (member)))]
                     ;[:button.uk-button-small.uk-button-default.uk-width-1-2.uk-padding-remove
                      ;                  {:data-uk-icon "icon: sign-out"
                      ;                   :style {:border "1px red solid"}
                      ;                   :on-click #(all-items-to-invoices (:id (member)))]])
           [:h3.uk-margin-remove.uk-padding-remove.uk-text-right {:style {:color "red"}}
               (str
                 "Összesen: "
                 (reduce + (map :price (second item)))
                 " Ft ")]

           [:div.uk-divider-icon.uk-margin-small.uk-margin-remove-top]
           [:div.uk-grid-small {:data-uk-grid true}
                         (doall (map-indexed
                                    #(-> ^{:key %2}[one-item %2 (:season-pass (member))])
                                    (second item)))]]])))








(defn checkout []
  (let [invoices (subscribe [:data "invoices"])
        members (subscribe [:data "players"])
        get-member-data (fn [] (vec (set (map :member-id @invoices))))]


   (reagent/create-class
     {:component-did-update #(chsk-send! [:dungeon/get-members-with-id (get-member-data)])
      :reagent-render
        (fn []
          [:div.uk-padding-remove.uk-margin-remove.uk-grid.uk-child-width-1-1
              ;  (str @members)
            ;  [:button {:on-click #(chsk-send! [:dungeon/get-members-with-id (get-member-data)])} "hello"]
              ;:{:style {:background-image "url('../img/cash.jpg')" :overflow "auto" :min-height "100vh"}}
              (if (= @invoices [])
                  [:div
                        [:h1.uk-heading-hero.uk-text-center "Senkinek sincs fizetetlen számlája!"]]
                  [:div.uk-grid.uk-margin-top {:data-uk-grid true}

                       (map-indexed
                         #(-> ^{:key %2}[invoice %2])
                         (sort-by first (group-by :member-id @invoices)))])])})))

(defn modify-member [member index]
  (let [modify-atom (atom member)
        scrollspy (atom nil)]

    (reagent/create-class
      {:component-did-mount #(do
                               (reset!
                                 scrollspy
                                 (.scrollspy
                                     js/UIkit
                                     (str "#user-" index)
                                     (clj->js {:cls (if (even? index) "uk-animation-slide-right" "uk-animation-slide-left")
                                               :hidden false})))
                               (if
                                 (= 0 (mod (+ 10 index) 20))
                                 (.on
                                      ($ js/document)
                                      "inview"
                                      (str "#user-" index)
                                      (fn [a] (chsk-send! [:dungeon/get-members {:number (+ 10 index) :search ""}])))))





       :reagent-render
        (fn [member index]
            [:div.uk-width-1-2 {:id (str "user-" index)}

               [:div.uk-card.uk-card-default.uk-padding-remove {:data-uk-grid true :style {:border "solid white 2px"}}
                 [:h1.uk-heading-bullet.uk-width-1-2.uk-padding-remove (str "Id: " ( :id member) "  - Bérlet: " ( :season-pass member))]

                 [:div.uk-width-1-2.uk-padding-remove

                                                        [:button.uk-button-danger.uk-button.uk-align-right {:on-click #(do

                                                                                                                          (chsk-send! [:dungeon/update-member
                                                                                                                                          @modify-atom]))}
                                                                                                     "Mentés!"]]

                 [:button.uk-button.uk-button-default.uk-width-1-4.uk-margin-remove
                                                                   {:on-click #(do

                                                                                 (chsk-send! [:dungeon/update-member
                                                                                                     (assoc @modify-atom :season-pass (- (:season-pass member) 1))])
                                                                                 (notification (str (:name @modify-atom) " - bérlete 1-gyel csökkent")))}
                                                               "- 1"]
                 [:button.uk-button.uk-button-default.uk-width-1-4.uk-margin-remove
                                                                   {:on-click #(do

                                                                                 (chsk-send! [:dungeon/update-member
                                                                                                     (assoc @modify-atom :season-pass (- (:season-pass member) 0.5))])
                                                                                 (notification (str (:name @modify-atom) " - bérlete 1-gyel csökkent")))}
                                                               "- 0.5"]
                 [:button.uk-button.uk-button-default.uk-width-1-4.uk-margin-remove
                                                                 {:on-click #(do

                                                                                 (chsk-send! [:dungeon/update-member
                                                                                                     (assoc @modify-atom :season-pass (+ 0.5 (:season-pass member)))])
                                                                                 (notification (str (:name @modify-atom) " - bérlete 1-gyel nőtt")))}
                                                  "+ 0.5"]
                 [:button.uk-button.uk-button-default.uk-width-1-4.uk-margin-remove
                                                                 {:on-click #(do

                                                                                 (chsk-send! [:dungeon/update-member
                                                                                                     (assoc @modify-atom :season-pass (+ 1 (:season-pass member)))])
                                                                                 (notification (str (:name (:id @modify-atom)) " - bérlete 1-gyel nőtt")))}
                                                  "+ 1"]
                 ;[:h6.uk-heading-bullet.uk-width-1-1.uk-padding-remove]
                 [:div.uk-width-1-1.uk-padding-remove.uk-margin-remove
                    [:input.uk-input.uk-text-center {:on-change #(swap! modify-atom assoc :name (-> % .-target .-value)) :value (:name @modify-atom)}]]
                 ;[:input.uk-input {:on-change #(swap! modify-atom assoc :season-pass (-> % .-target .-value)) :value (:season-pass member)}]
                 ;[:input.uk-input {:on-change #(swap! modify-atom assoc :name (-> % .-target .-value)) :value (str (:playing @modify-atom))}]
                 [:div.uk-grid.uk-child-width-1-3.uk-margin-remove.uk-width-1-1.uk-padding-remove {:data-uk-grid true}
                    [:button.uk-button.uk-button-default {:on-click #(do

                                                                       (chsk-send! [:dungeon/update-member
                                                                                           (assoc @modify-atom :season-pass (+ 6 (:season-pass member)))])
                                                                       (notification (str (:name @modify-atom) " kapott egy Beginner bérletet!")))}
                                                     "+ Beginner"]
                    [:button.uk-button.uk-button-default {:on-click #(do

                                                                       (chsk-send! [:dungeon/update-member
                                                                                           (assoc @modify-atom :season-pass (+ 13 (:season-pass member)))])
                                                                       (notification (str (:name @modify-atom) " kapott egy Medium bérletet!")))}
                                                     "+ Medium"]
                    [:button.uk-button.uk-button-default {:on-click #(do

                                                                         (chsk-send! [:dungeon/update-member
                                                                                      (assoc @modify-atom :season-pass (+ 28 (:season-pass member)))])

                                                                         (notification (str (:name @modify-atom) " kapott egy Hardcore bérletet!")))}
                                                   "+ Hardcore"]]]])})))


(defn registration-input [members]
  (let [max-id (subscribe [:data "max-id"])
        search (subscribe [:data "search-member"])]
    (fn [members]
     [:div.uk-width-1-1.uk-sticky.uk-card.uk-margin-remove.uk-grid.uk-grid-stack
        {:data-uk-grid "true", :data-uk-sticky "true"}
        ;[:div.uk-width-1-1 (str @members)]
        [:input#username.uk-input.uk-text-center.uk-padding-remove.uk-first-column
           {:on-change #(do
                          (chsk-send! [:dungeon/get-members
                                        {:number 0 :search (-> % .-target .-value)}])
                          (dispatch [:set-search-member (-> % .-target .-value)]))
            :placeholder "Regisztráció/Keresés",
            :type "text"
            :value @search}]
        [:button.uk-button.uk-button-primary.uk-align-center.uk-margin-remove.uk-padding-remove.uk-width-1-1.uk-grid-margin.uk-first-column
           {:on-click #(chsk-send! [:dungeon/add-member {:id (inc @max-id) :name @search}])}
           (str (inc @max-id) ". gamer hozzáadása!")]])))




(defn registration []
  (let [members (subscribe [:data "players"])
        search (subscribe [:data "search-member"])]


    (reagent/create-class
      {


       :reagent-render
          (fn []
            [:div.uk-width-1-1

               ;[:div (str (filter-by-name-and-id  @members search true))]

               [registration-input members]

               [:div.uk-card.uk-grid.uk-margin-remove

                               {:id "member"
                                :class "uk-child-width-1-3@m member"
                                ;:data-uk-scrollspy
                                ;"cls: uk-animation-slide-left; target: > div > .uk-card; delay: 0; repeat: true"
                                :data-uk-grid "uk-grid"}

                             ;[:h3 (str "hello" @members)]
                             ;(str (sort-by :id #(> %2 %1) (filter-by-name-and-id  @members search true)))

                             (map-indexed
                               #(-> ^{:key (:id %2)}[modify-member %2 %1])
                               (sort-by :id #(> %1 %2) (filter-by-name-and-id  @members search true)))]])})))


(defn show-20-more [number]
  (let [

        search (subscribe [:data "search-member"])]
    (fn []
      [:button.uk-width-1-1.uk-button.uk-button-primary
                              {:on-click #(do
                                            (chsk-send! [:dungeon/get-members {:number @number :search @search}])
                                            (reset! number (+ 20 @number)))}
                            "Mutass többet..."])))
                            ;(count @players)])))

(defn sidenav []
  (let [sidenav-state (subscribe [:data "sidenav-state"])
        number (atom 20)
        search (subscribe [:data "search-member"])]

    (fn []
      [:div#sidenav {:data-uk-offcanvas "flip: true"}
                    [:div.uk-offcanvas-bar.uk-padding-remove

                      [:div.uk-grid.uk-child-width-1-4.uk-padding-small { :data-uk-grid true}
                         [:div {:on-click #(dispatch [:set-sidenav-state 1])}
                               [:img { :src (if
                                                (not= @sidenav-state 1)
                                                "/Icons/search.svg"
                                                "/Icons/search-active.svg")}]]
                         [:div {:on-click #(dispatch [:set-sidenav-state 2])}
                               [:img { :src (if
                                                (not= @sidenav-state 2)
                                                "/Icons/playing.svg"
                                                "/Icons/playing-active.svg")}]]
                         [:div {:on-click #(dispatch [:set-sidenav-state 3])}
                               [:img {:src  (if
                                                (not= @sidenav-state 3)
                                                "/Icons/payment-method.svg"
                                                "/Icons/cash-active.svg")}]]
                         [:div {:on-click #(dispatch [:set-sidenav-state 4])}
                               [:img { :src (if
                                                (not= @sidenav-state 4)
                                                "/Icons/waiting.svg"
                                                "/Icons/waiting-active.svg")}]]]


                      (case @sidenav-state
                          1 [:div
                              [:form.uk-search.uk-search-large.uk-padding-small.uk-padding-remove-vertical
                                 [:input.uk-search-input.uk-animation-slide-top
                                  {:on-change #(do
                                                 (reset! number 20)
                                                 (chsk-send! [:dungeon/get-members
                                                               {:number 0 :search (-> % .-target .-value)}])
                                                 (dispatch [:set-search-member (-> % .-target .-value)]))
                                   ;:placeholder "Regisztráció/Keresés",

                                   :value @search
                                   :placeholder "Keresés", :type "search"}]]
                              [gamers]
                              [show-20-more number]]

                          2 [:div
                                  ^{:key 2}[:h3.uk-heading-bullet.uk-animation-slide-top "Dungeonben"]
                                           [gaming-gamers]]
                          3 [:div
                                  ^{:key 3}[:h3.uk-heading-bullet.uk-animation-slide-top "Kasszánál"]
                                           [paying-gamers]]
                          4 [:div
                                  ^{:key 4}[:h3.uk-heading-bullet.uk-animation-slide-top "Váróterem"]
                                           [waiting-pool]])]])))




(defn dungeon []
      (let [systems (subscribe [:data "system-map"])
            sidenav-canvas (atom nil)]
          (reagent/create-class
            {:component-did-mount #(do

                                     (reset! sidenav-canvas (.offcanvas js/UIkit ($ "#sidenav")))

                                     (.dragging js/window)
                                     (.dropzone
                                       (.interact js/window ".dropzone")
                                       (clj->js {:accept ".valami"
                                                    ;:overlap 0.75
                                                    :ondragenter (fn [e] (.hide @sidenav-canvas))
                                                    ;:ondragleave (fn [e] (.notification js/UIkit "Elhagytál, Csengő Zolival megcsaltáll"))
                                                    :ondrop (fn [e] (change e))}))
                                     (.dropzone
                                       (.interact js/window ".dropzone2")
                                       (clj->js {:accept ".masvalami"
                                                    ;:overlap 0.75
                                                    ;:ondragenter (fn [e] (istenem e))
                                                    ;:ondragleave (fn [e] (.notification js/UIkit "Elhagytál, Csengő Zolival megcsaltáll"))
                                                    :ondrop (fn [e] (transfer e))})))


             :reagent-render
              (fn []
                [:div.uk-background-cover.uk-offcanvas-content.svg-cursor
                         {:style {:background-image "url('../img/wow.jpg')" :min-height "100vh"}}
                         [:button#btn5 {:type "button"
                                        :on-click (fn [ev]
                                                    (notification "Disconnecting")
                                                    (chsk-disconnect!))}
                                   "Disconnect"]
                         [:button#btn6 {:type "button"
                                        :on-click (fn [ev]
                                                     (notification "Reconnecting")
                                                     (chsk-reconnect!))}
                                    "Reconnect"]



                         ;[sidenav]












                        (if   (= @systems [])

                              [:img#loading
                                    {:style { :width "auto"
                                                      :height "300px"
                                                      :position "absolute"
                                                      :left "50%"
                                                      :top "50%"
                                                      :margin-left "-150px"
                                                      :margin-top "-150px"}
                                     :src "/img/lvlup-logo-transparent.png"}]

                        ;[usage]

                            [:div.uk-padding-small {:data-uk-grid true} ;:style {:background-color "#0076CC"}}
                                     ;[gamers]

                                     [system-row]])])})))



(comment
                         smple/button2 {:had-a-callback? "nope"}
                                   :type "button"
                                "csak példa"
                        [:button#btn2.uk-button.uk-button-default
                                      {:on-click (fn [ev]
                                                    (notification "Comeback")
                                                    (chsk-send!
                                                        [:example/button2]
                                                        2000
                                                        (fn [cb-reply] (notification (str cb-reply)))))
                                       :type "button"}
                                    "chsk-send! (w/o reply)"]
                        [:button {:on-click (fn [ev]
                                                (notification-sente "Button 2 was clicked (will receive reply from server)")
                                                (chsk-send! [:example/test-rapid-push {:had-a-callback? "indeed"}] 5000
                                                  (fn [cb-reply] (notification-sente "wat wat wat" cb-reply))))
                                       :type "button"}
                                "MIAFASZ"]
                        [:button.uk-button.uk-button-default
                                      {:type "button"
                                       :on-click (fn [ev]
                                                   (notification-sente "Számold meg")
                                                   (chsk-send! [:example/count-clicks] 2000 (fn [ev] (notification-sente "Callback miután a szerver visszajelzett" ev))))}
                                    "Megszámol"

                                    (comment
                                       [:button#btn4 {:type "button"
                                                      :on-click (fn [ev]
                                                                  (notification-sente "Button 4 was clicked (will toggle async broadcast loop)")
                                                                  (chsk-send! [:example/toggle-broadcast] 5000
                                                                    (fn [cb-reply]
                                                                      (when (cb-success? cb-reply)
                                                                        (let [loop-enabled? cb-reply]
                                                                          (if loop-enabled?
                                                                            (notification-sente "Async broadcast loop now enabled")
                                                                            (notification-sente "Async broadcast loop now disabled")))))))}
                                                   "Toggle server>user async broadcast push loop"]
                                       [:button#btn5 {:type "button"
                                                      :on-click (fn [ev]
                                                                  (notification-sente "Disconnecting")
                                                                  (sente/chsk-disconnect! chsk))}
                                                 "Disconnect"]
                                       [:button#btn6 {:type "button"
                                                      :on-click (fn [ev]
                                                                   (notification-sente "Reconnecting")
                                                                   (sente/chsk-reconnect! chsk))}
                                                 "Reconnect"]
                                       [:p
                                        [:input#user {:type "text" :placeholder "User-id"}]
                                        [:input#pass {:type "text" :placeholder "User-Pass"}]
                                        [:button#btn-login {:type "button"
                                                            :on-click (fn [ev]
                                                                        (let [user-id (.-value (.getElementById js/document "user"))
                                                                              user-password (.-value (.getElementById js/document "pass"))]
                                                                          (tr/blank? user-id
                                                                            (js/alert "Please enter a user-id first")
                                                                            (do
                                                                              (notification-sente "Logging in with user-id %s" user-id)

                                                                              ;;; Use any login procedure you'd like. Here we'll trigger an Ajax
                                                                              ;;; POST request that resets our server-side session. Then we ask
                                                                              ;;; our channel socket to reconnect, thereby picking up the new
                                                                              ;;; session.

                                                                              (sente/ajax-lite "/login"
                                                                                {:method :post
                                                                                 :headers {:X-CSRF-Token (:csrf-token @chsk-state)}
                                                                                 :params  {:user-id (str user-id)
                                                                                           :user-pass (str user-password)}}

                                                                                (fn [ajax-resp]
                                                                                  (notification-sente "Ajax login response: %s" ajax-resp)
                                                                                  (let [login-successful? true] ; Your logic here

                                                                                    (if-not login-successful?
                                                                                      (notification-sente "Login failed")
                                                                                      (do
                                                                                        (notification-sente "Login successful")
                                                                                        (sente/chsk-reconnect! chsk))))))))))}
                                                    "Secure login!"]]
                                       [:button#btn3 {:type "button"
                                                      :on-click (fn [ev]
                                                                  (notification "Button 3 was clicked (will ask server to test rapid async push)")
                                                                  (chsk-send! [:example/test-rapid-push]))}
                                                   "Test rapid server>user async pushes"])])
