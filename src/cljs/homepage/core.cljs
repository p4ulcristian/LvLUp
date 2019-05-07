(ns homepage.core
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [secretary.core :as secretary :include-macros true]
            [accountant.core :as accountant]
            [clojure.string :as string]
            [ajax.core :as ajax]
            [ajax.core :refer [GET POST]]
            [re-frame.core :refer [dispatch-sync dispatch subscribe]]
            [cljs-time.core :as tcore]))


(def google-map-styles
  (.parse js/JSON "[\n    {\n        \"featureType\": \"all\",\n        \"elementType\": \"labels.text.fill\",\n        \"stylers\": [\n            {\n                \"saturation\": 36\n            },\n            {\n                \"color\": \"#000000\"\n            },\n            {\n                \"lightness\": 40\n            }\n        ]\n    },\n    {\n        \"featureType\": \"all\",\n        \"elementType\": \"labels.text.stroke\",\n        \"stylers\": [\n            {\n                \"visibility\": \"on\"\n            },\n            {\n                \"color\": \"#000000\"\n            },\n            {\n                \"lightness\": 16\n            }\n        ]\n    },\n    {\n        \"featureType\": \"all\",\n        \"elementType\": \"labels.icon\",\n        \"stylers\": [\n            {\n                \"visibility\": \"off\"\n            }\n        ]\n    },\n    {\n        \"featureType\": \"administrative\",\n        \"elementType\": \"all\",\n        \"stylers\": [\n            {\n                \"hue\": \"#ff0000\"\n            }\n        ]\n    },\n    {\n        \"featureType\": \"administrative\",\n        \"elementType\": \"geometry\",\n        \"stylers\": [\n            {\n                \"color\": \"#b93131\"\n            },\n            {\n                \"visibility\": \"on\"\n            }\n        ]\n    },\n    {\n        \"featureType\": \"administrative\",\n        \"elementType\": \"geometry.fill\",\n        \"stylers\": [\n            {\n                \"color\": \"#000000\"\n            },\n            {\n                \"lightness\": 20\n            },\n            {\n                \"visibility\": \"on\"\n            }\n        ]\n    },\n    {\n        \"featureType\": \"administrative\",\n        \"elementType\": \"geometry.stroke\",\n        \"stylers\": [\n            {\n                \"color\": \"#000000\"\n            },\n            {\n                \"lightness\": 17\n            },\n            {\n                \"weight\": 1.2\n            },\n            {\n                \"visibility\": \"on\"\n            }\n        ]\n    },\n    {\n        \"featureType\": \"administrative.country\",\n        \"elementType\": \"geometry\",\n        \"stylers\": [\n            {\n                \"visibility\": \"on\"\n            },\n            {\n                \"color\": \"#af0f0f\"\n            }\n        ]\n    },\n    {\n        \"featureType\": \"landscape\",\n        \"elementType\": \"geometry\",\n        \"stylers\": [\n            {\n                \"color\": \"#000000\"\n            },\n            {\n                \"lightness\": 20\n            }\n        ]\n    },\n    {\n        \"featureType\": \"poi\",\n        \"elementType\": \"geometry\",\n        \"stylers\": [\n            {\n                \"color\": \"#000000\"\n            },\n            {\n                \"lightness\": 21\n            }\n        ]\n    },\n    {\n        \"featureType\": \"road.highway\",\n        \"elementType\": \"geometry.fill\",\n        \"stylers\": [\n            {\n                \"color\": \"#0f0b2c\"\n            },\n            {\n                \"lightness\": 17\n            }\n        ]\n    },\n    {\n        \"featureType\": \"road.highway\",\n        \"elementType\": \"geometry.stroke\",\n        \"stylers\": [\n            {\n                \"color\": \"#000000\"\n            },\n            {\n                \"lightness\": 29\n            },\n            {\n                \"weight\": 0.2\n            }\n        ]\n    },\n    {\n        \"featureType\": \"road.arterial\",\n        \"elementType\": \"geometry\",\n        \"stylers\": [\n            {\n                \"color\": \"#000000\"\n            },\n            {\n                \"lightness\": 18\n            }\n        ]\n    },\n    {\n        \"featureType\": \"road.arterial\",\n        \"elementType\": \"geometry.fill\",\n        \"stylers\": [\n            {\n                \"visibility\": \"on\"\n            },\n            {\n                \"color\": \"#271e78\"\n            }\n        ]\n    },\n    {\n        \"featureType\": \"road.local\",\n        \"elementType\": \"geometry\",\n        \"stylers\": [\n            {\n                \"color\": \"#000000\"\n            },\n            {\n                \"lightness\": 16\n            }\n        ]\n    },\n    {\n        \"featureType\": \"road.local\",\n        \"elementType\": \"geometry.fill\",\n        \"stylers\": [\n            {\n                \"visibility\": \"on\"\n            },\n            {\n                \"color\": \"#192059\"\n            }\n        ]\n    },\n    {\n        \"featureType\": \"transit\",\n        \"elementType\": \"geometry\",\n        \"stylers\": [\n            {\n                \"color\": \"#000000\"\n            },\n            {\n                \"lightness\": 19\n            }\n        ]\n    },\n    {\n        \"featureType\": \"water\",\n        \"elementType\": \"geometry\",\n        \"stylers\": [\n            {\n                \"color\": \"#367791\"\n            },\n            {\n                \"lightness\": 17\n            }\n        ]\n    }\n]"))

(comment (def google-map-styles
           (clj->js [])))


(defn google-maps-did-mount [this coordinates]
  (let [[the-first the-second] coordinates
        map-canvas (reagent/dom-node this)
        map-options (clj->js {"scrollwheel" false
                              "center" (google.maps.LatLng. the-first the-second)
                              "zoom" 6.5
                              "styles" google-map-styles
                              "disableDefaultUI" true})
        the-map (js/google.maps.Map. map-canvas map-options)

        map-with-marker (clj->js  {"position" (google.maps.LatLng. the-first the-second)
                                   "map" the-map
                                   "icon" "/img/marker2.png"})
        map-with-marker2 (clj->js  {"position" (google.maps.LatLng. (+ 2 the-first)
                                                                    (+ 2 the-second))
                                    "map" the-map

                                    "icon" "/img/marker2.png"})
        map-with-marker3 (clj->js  {"position" (google.maps.LatLng. (+ 2 the-first)
                                                                    (+ 2 the-second))
                                    "map" the-map

                                    "icon" "/img/marker2.png"})]
    (js/google.maps.Marker. ^js/google.maps.Marker map-with-marker)
    (js/google.maps.Marker. ^js/google.maps.Marker map-with-marker2)
    (js/google.maps.Marker. ^js/google.maps.Marker map-with-marker3)))

(defn google-maps-render [coordinates]
  [:div.noselect {:style {:height "400px"}}])

(defn google-maps [coordinates]
  (reagent/create-class {:reagent-render #(google-maps-render coordinates)
                         :component-did-mount #(google-maps-did-mount % coordinates)}))



(defn anim-timeline []
  (js/TimelineMax. (clj->js {:paused true}) 0.5))

(defn tween-to [& args]
  (apply js/TweenMax.to args))

(defn tween-from [& args]
  (apply js/TweenMax.from args))

(defn stagger-to [& args]
  (apply js/TweenMax.staggerTo args))

(defn stagger-from [& args]
  (apply js/TweenMax.staggerFrom args))





(defn logo []
  [:img#logo
   {:style {:z-index 100
            :border "10px"
            :margin-top "-150px"
            :filter "brightness(20%)"
            :transform "rotate(15deg)"};}

    :width 300
    :height "auto"

    :src "/img/lvlup-logo-white.png"}])

(defn logos-animation []
  (reagent/create-class
    {:component-did-mount #(do
                             ;(tween-from "#logo" 0.4 (clj->js {:ease js/Power1.easeIn :opacity 0 :delay 0.85 :scale 1.3}))

                             (tween-from "#logo" 0.8 (clj->js {:ease js/Bounce.easeOut :opacity 0 :delay 0 :scale 3}))
                             (tween-to "#logo" 1.2 (clj->js {:ease js/Bounce.easeOut  ;(-> js/Elastic.easeOut (.config 1 0.3))
                                                             :transform "rotate(0deg)" :delay 0.8}))
                             (tween-to "#logo" 0.4 (clj->js {:ease js/Power1.easeIn  :delay 0.4 :filter "brightness(100%)"})))



     :reagent-render
     (fn []
       [:div {:style {:width "300px"}}
        [logo]])}))







(defn black-bar []
  [:div.uk-width-1-1.uk-flex-bottom.nav-wall-right
   {:style {:margin-top "-25px"
            :height "50px" :background-color "black"}}])

(defn nav []
  (reagent/create-class
    {:component-did-mount #(do
                             (tween-from ".nav-right" 1 (clj->js {:opacity 0 :x "50vw" :y -50
                                                                  :border-radius "20px"}))
                             (tween-from ".nav-left" 1 (clj->js {:opacity 0 :x "-50vw" :y -50
                                                                 :border-radius "20px"})))

     :reagent-render
     (fn []
       [:nav.uk-flex.uk-flex-row {:data-uk-navbar true :style {:height "150px"}}
        [:div.uk-flex.uk-flex-auto.uk-flex-middle.nav-left
         [:div.uk-width-1-1.uk-flex-bottom.nav-wall-left
          {:style {:margin-top "-25px"
                   :height "50px"}}]]

        [:div.uk-flex.uk-flex-auto.uk-flex-middle.nav-right
         [:div.uk-width-1-1.uk-flex-bottom.nav-wall-right
          {:style {:margin-top "-25px"
                   :height "50px"}}]]

        [:div.uk-position-center
           [logos-animation]]
        [:div
         [:div#blink.blink
          [:p#blinkText "lel"]]]])}))
           ;[logo]]])}))







(defn one-bar [{:keys [src name]}]
  [:div.one-bar.uk-align-center.uk-margin-remove-top {:style { :padding "20px"}}
   ;[:img {:src src :width "300px"}]
   [:h1.neon.uk-text-center.uk-margin-remove
    (clojure.string/upper-case
      name)]])


(defn get-system-photo [type]
  (case type
    "ps" "/Icons/ps.svg"
    "xbox" "/Icons/xbox.svg"
    "vr" "/Icons/vr.svg"
    "pc" "/Icons/pc.svg"))

(def systems
  ["pc" "pc" "pc" "pc" "pc" "pc" "pc" "pc" "pc" "pc"
   "ps" "ps" "ps"
   "xbox" "vr"])

(defn system [data]
  [:div.uk-padding-small
   [:div.one-system
    {:style {:padding "25px" :border-radius "8px"}
     :class (rand-nth ["one-system-free" "one-system-not-free"])}
    [:img {:src (get-system-photo data)}]]])


(defn dungeon []
  [:div.uk-grid-collapse.uk-child-width-1-5
   {:data-uk-grid true}
   (map-indexed
     #(-> ^{:key %1}[system %2])
     systems)])


(def tarsasok
  [["A Mars terraformálása"
    "1 - 5 játékos, 2 óra, 12+ évestől. Közepesen nyelvfüggő. Közepesen összetett"
    "https://tarsasjatekok.com/tarsasjatek/a-mars-terraformalasa-2016"]
   ["A Mars terraformálása"
    "1 - 5 játékos, 2 óra, 12+ évestől. Közepesen nyelvfüggő. Közepesen összetett"
    "https://tarsasjatekok.com/tarsasjatek/a-mars-terraformalasa-2016"]
   ["A Mars terraformálása"
    "1 - 5 játékos, 2 óra, 12+ évestől. Közepesen nyelvfüggő. Közepesen összetett"
    "https://tarsasjatekok.com/tarsasjatek/a-mars-terraformalasa-2016"]
   ["A Mars terraformálása"
    "1 - 5 játékos, 2 óra, 12+ évestől. Közepesen nyelvfüggő. Közepesen összetett"
    "https://tarsasjatekok.com/tarsasjatek/a-mars-terraformalasa-2016"]
   ["A Mars terraformálása"
    "1 - 5 játékos, 2 óra, 12+ évestől. Közepesen nyelvfüggő. Közepesen összetett"
    "https://tarsasjatekok.com/tarsasjatek/a-mars-terraformalasa-2016"]
   ["A Mars terraformálása"
    "1 - 5 játékos, 2 óra, 12+ évestől. Közepesen nyelvfüggő. Közepesen összetett"
    "https://tarsasjatekok.com/tarsasjatek/a-mars-terraformalasa-2016"]
   ["A Mars terraformálása"
    "1 - 5 játékos2 óra12+ évestőlKözepesen nyelvfüggőKözepesen összetett"
    "https://tarsasjatekok.com/tarsasjatek/a-mars-terraformalasa-2016"]])



(defn board-game [[name desc url]]
  [:div.uk-flex {:style {:background "rgba(0,0,0,0.6)"
                         :margin "10px"
                         :border-bottom "1px solid white"
                         :border-radius "5px"}}
   [:div
    {:style {:padding "10px"}}
    [:a {:href url :target "_blank"}
     [:b {:style {:color "white"}}
      name]]]
   [:div
    {:style {:padding "10px"
             :color "white"}}
    desc]])

(defn board-games []
  (reagent/create-class
    {:reagent-render
     (fn []
       [:div.uk-grid-collapse.uk-height-large.uk-overflow-auto {:data-uk-grid true}
        [:div.uk-padding
         (map-indexed #(-> ^{:key %1} [board-game %2])
                      tarsasok)]])}))

(defn cities []
  (reagent/create-class
    {:component-did-mount #(do
                             (stagger-from ".choose-city" 0.5 (clj->js {:y 100 :opacity 0}))
                             (stagger-from ".one-bar" 1 (clj->js
                                                         {:delay 0.1
                                                          :x "50vw"
                                                          :opacity 0
                                                          :ease (js/Elastic.easeInOut.config 1 1)})
                                                    0.2)
                             (stagger-from ".anim-city" 0.3 (clj->js
                                                              {:delay 1
                                                               :y -50
                                                               :opacity 0})

                                           0.2))
     :reagent-render
     (fn []
       [:div#main.nice-back-rev
        [:div.uk-grid-collapse
         {:data-uk-grid true}
         [:div.uk-width-1-3
          [:div.uk-padding
           [:div.uk-card-secondary.uk-card.red-shadow.anim-city {:style {:border-radius "10px"}}
            [:div {:style {:padding "10px 0px 10px 20px"}}
             [:h4.glitch.monster {:data-text "Koktéllap"} "Koktéllap"]]
            [:div.uk-padding-small
             [:img {:src "/img/cocktail.png"}]]]]
          (comment
            [:div.uk-padding.uk-padding-remove-top.anim-city
             [google-maps [46.248214 20.146354]]])
          [:div.uk-padding.uk-padding-remove-top
           [:div.uk-card-secondary.uk-card.red-shadow.anim-city {:style {:border-radius "10px" :padding-top "15px"}}
            [:div#nyitvatartas.uk-width-auto.uk-align-center "Nyitvatartás"]
            [:div.uk-flex.uk-flex-column.monster.uk-text-center.uk-padding-small
             [:div "Hétfő - 12:00 - 20:00"]
             [:div "Kedd - 12:00 - 20:00"]
             [:div "Szerda - 12:00 - 20:00"]
             [:div "Csütörtök - 12:00 - 20:00"]
             [:div "Péntek - 12:00 - 20:00"]
             [:div "Szombat - 12:00 - 20:00"]
             [:div "Vasárnap - Zárva"]]]]]

         [:div.uk-width-2-3
          [:div.uk-padding.uk-padding-remove-top
           [:div.uk-card-secondary.uk-card.blue-shadow.anim-city {:style {:border-radius "10px"}}
            [:div {:style {:padding "10px 20px 10px 20px" :height "40px"}}
             [:h4.glitch.uk-width-auto.monster.uk-align-right {:data-text "Társasok"} "Társasok"]]
            [:div.uk-inline
             [:div.tarsas-back]
             [:div.uk-padding [board-games]]]
            [:div.uk-text-right.uk-padding-small.monster "Szeretettel várunk egy kellemes társas estre. :)"]]]
          [:div.uk-padding
           [:div.uk-card-secondary.uk-card.blue-shadow.anim-city {:style {:border-radius "10px"}}
            [:div {:style {:padding "10px 20px 10px 20px" :height "40px"}}
             [:h4.glitch.uk-width-auto.monster.uk-align-right {:data-text "Dungeon"} "Dungeon"]]
            [:div.uk-inline
             [:div.dungeon-back]
             [dungeon]]
            [:div.uk-text-right.uk-padding-small.monster [:b "2 Pc, 2 Xbox csak rád vár. :)"]]]]]]])}))

(def sponsors
  ["bluechip.png" "dreher.png" "esport.png" "gemklub.png"
   "pepsi.png" "telekom.png" "cenex.png" "urage.png"])

(defn egyesulet []
  [:div.uk-padding-small.egyesulet
   [:div {:class "" :id "" :style {:color "white"}}
    [:h1.white-text.monster "Egyesület"]
    [:div.monster.white-text "A szegedi inditattású egyesület immáron több eredménnyel is rendelkezik, és még csapataik is vannak,
    esport több területén is. Látogass meg minket, légy része"]
    [:h2.white-text.monster "Csapataink"]
    [:div.monster.white-text
     [:div "Hulkeinstenék"]
     [:div "Dudiék"]]
    [:h2.white-text.monster "Eredményeink"]
    [:div.monster.white-text
     [:div "Magyar Bajnoki PUBG Kupa 5. hely- Chres"]
     [:div "Olasz Hearthstone bajnokság 3. hely - Dudi"]]]])

(defn page-root []
  (reagent/create-class
    {:component-did-mount #(tween-from "#chevron" 1 (clj->js {:y -100 :opacity 0 :delay 1}))
     :reagent-render
     (fn []
       [:div
        [:div.full-page.nice-back.uk-inline

            ;[nav]
         [:div.uk-position-top-left.neon-menu-red.monster
          [:a {:style {:color "white"}
               :href "#egyesulet"
               :data-uk-scroll true}
           "Egyesület"]]
         [:div.uk-position-top-right.neon-menu-blue.monster
          [:a {:style {:color "white"}
               :href "#"}

           "Franchise"]]
         [:div.uk-position-center [logos-animation]]
         [:div.uk-position-bottom.uk-text-center
          [:div.uk-flex.uk-width-1-1.uk-flex-between
           (comment [:div.red-blue-wall
                     [:div.valami]
                     [:div.mas]])
           [one-bar {:src "/img/debrecenbar.png"  :name "Debrecen"}]
           [one-bar {:src "/img/szombathelybar.png" :name "Szombathely"}]
           [one-bar {:src "/img/szegedbar.png" :name "Szeged"}]]

          [:div [:a {:href "#main" :data-uk-scroll true}
                 [:img#chevron.neonfilter.bounce {:src "/img/down-arrow.png" :width "50px"}]]]]
         [:div.uk-grid-collapse {:data-uk-grid "masonry: true"}
          ;[bars-gallery]
          [:div.uk-width-1-1
           ;[google-maps [46.248214 20.146354]]
           [:div.uk-width-1-1.uk-card-default]]]]
        [:section
         [cities]
         (comment [:div
                   [:div.uk-grid-collapse
                    {:data-uk-grid true
                     :style {:background "black" :position "relative"}}]
                   [:div.uk-width-1-2.uk-card-secondary
                    [:div#nyitvatartas.uk-width-auto "Nyitvatartás"]
                    [:div.uk-width-1-1
                     "Hétfő 00-00: 00:00"]]
                   [:img {:src "/img/boardgame.jpg"}]
                   [:img {:src "/img/egyesulet.jpg"}]
                   [:img {:src "/img/gamer.jpg"}]
                   [:div]
                   [:div.glitch.uk-text-center {:data-text "Eredményeink"}
                     "Eredményeink"]])]
        [:section#egyesulet.esport-back.uk-height-viewport.uk-width-1-1.uk-inline
         {:data-uk-parallax "bgy: 400"}
         [:div.uk-position-center.uk-container.uk-container-xsmall
          [egyesulet]]]

        [:section.uk-card-secondary.uk-card.uk-card-body.nice-back-simple
         [:div.uk-margin.uk-flex.uk-flex-center {:data-uk-grid "true" :style {:padding-top "30px"}}
          (map-indexed #(-> ^{:key %1} [:div.uk-width-1-3
                                        [:img {:src (str "/img/logos/"%2)}]])
                       sponsors)]]])}))








(defn current-page []
  (let [tl (anim-timeline)
        tlready (atom nil)
        tl2 (anim-timeline)
        tl2ready (atom nil)]
    (reagent/create-class
      {:component-did-mount #(do
                               (reset! tl2ready
                                       (-> tl2
                                           (.add (.staggerTo js/TweenMax
                                                             ".box" 0.5 (clj->js
                                                                          {:cycle {:y [-25 25]}})
                                                                        0.2))))

                               (reset! tlready
                                       (-> tl
                                           (.add (tween-to ".green" 1 (clj->js {:x 100 :border-radius "5px"})))
                                           (.add (tween-to ".green" 1 (clj->js {:y 50 :border-radius "40px"})))
                                           (.add (tween-to ".green" 1 (clj->js {:x "+=100" :border-radius "0px"})))
                                           (.add (tween-to ".green" 1 (clj->js {:y "+=100" :rotation "+=45"})))
                                           (.add (tween-to ".green" 1 (clj->js {:x "+=100" :rotation "+=45"})))
                                           (.add (tween-to ".green" 1 (clj->js {:height "50" :width "50" :x "+=100" :rotation "+=90"}))))))

       :reagent-render
       (fn []
         [:div.tween
          [page-root]
          (comment [:div
                    [:button {:on-click #(.restart @tlready)}
                     "start"]
                    [:button {:on-click #(.resume @tlready)}
                     "resume"]
                    [:button {:on-click #(.pause @tlready)}
                     "pause"]
                    [:button {:on-click #(.reverse @tlready)}
                     "Reverse"]
                    [:div.green "green"]
                    [:button {:on-click #(.restart @tl2ready)}
                     "Huhúúú"]
                    [:div.boxes
                     [:div.box]
                     [:div.box]
                     [:div.box]
                     [:div.box]
                     [:div.box]
                     [:div.box]
                     [:div.box]
                     [:div.box]]

                    [:div.red "red"]])])})))



(secretary/defroute "/" []
                    (dispatch [:set-actual-page "home-page"]))

(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn init! []
  ;(dispatch-sync [:initialize])
  (accountant/configure-navigation!
   {:nav-handler
    (fn [path]
      (secretary/dispatch! path))
    :path-exists?
    (fn [path]
      (secretary/locate-route path))})
  (accountant/dispatch-current!)
  (mount-root))
