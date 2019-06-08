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

(defn scroll-magic []
  (js/ScrollMagic.Controller.))

(defn get-height [id]
  (let [el (.getElementById js/document id)]
    (if el
      (.-clientHeight el)
      0)))

(def app-state (atom {:loading-images 4
                      :chosen-city nil
                      :chosen-part "tarsas"
                      :scroll-magic (scroll-magic)})) ;tarsas/itallap/dungeon






(defn scroll-to [id]
  (.scrollIntoView
    (.getElementById js/document id)
    (clj->js {:behavior "smooth" :block "start"})))

(defn scroll-some [quantity]
  (.scrollTo js/window (clj->js {:top quantity
                                 :behavior "smooth"})))

(def google-map-styles
  (.parse js/JSON "[\n    {\n        \"featureType\": \"all\",\n        \"elementType\": \"labels.text.fill\",\n        \"stylers\": [\n            {\n                \"saturation\": 36\n            },\n            {\n                \"color\": \"#000000\"\n            },\n            {\n                \"lightness\": 40\n            }\n        ]\n    },\n    {\n        \"featureType\": \"all\",\n        \"elementType\": \"labels.text.stroke\",\n        \"stylers\": [\n            {\n                \"visibility\": \"on\"\n            },\n            {\n                \"color\": \"#000000\"\n            },\n            {\n                \"lightness\": 16\n            }\n        ]\n    },\n    {\n        \"featureType\": \"all\",\n        \"elementType\": \"labels.icon\",\n        \"stylers\": [\n            {\n                \"visibility\": \"off\"\n            }\n        ]\n    },\n    {\n        \"featureType\": \"administrative\",\n        \"elementType\": \"all\",\n        \"stylers\": [\n            {\n                \"hue\": \"#ff0000\"\n            }\n        ]\n    },\n    {\n        \"featureType\": \"administrative\",\n        \"elementType\": \"geometry\",\n        \"stylers\": [\n            {\n                \"color\": \"#b93131\"\n            },\n            {\n                \"visibility\": \"on\"\n            }\n        ]\n    },\n    {\n        \"featureType\": \"administrative\",\n        \"elementType\": \"geometry.fill\",\n        \"stylers\": [\n            {\n                \"color\": \"#000000\"\n            },\n            {\n                \"lightness\": 20\n            },\n            {\n                \"visibility\": \"on\"\n            }\n        ]\n    },\n    {\n        \"featureType\": \"administrative\",\n        \"elementType\": \"geometry.stroke\",\n        \"stylers\": [\n            {\n                \"color\": \"#000000\"\n            },\n            {\n                \"lightness\": 17\n            },\n            {\n                \"weight\": 1.2\n            },\n            {\n                \"visibility\": \"on\"\n            }\n        ]\n    },\n    {\n        \"featureType\": \"administrative.country\",\n        \"elementType\": \"geometry\",\n        \"stylers\": [\n            {\n                \"visibility\": \"on\"\n            },\n            {\n                \"color\": \"#af0f0f\"\n            }\n        ]\n    },\n    {\n        \"featureType\": \"landscape\",\n        \"elementType\": \"geometry\",\n        \"stylers\": [\n            {\n                \"color\": \"#000000\"\n            },\n            {\n                \"lightness\": 20\n            }\n        ]\n    },\n    {\n        \"featureType\": \"poi\",\n        \"elementType\": \"geometry\",\n        \"stylers\": [\n            {\n                \"color\": \"#000000\"\n            },\n            {\n                \"lightness\": 21\n            }\n        ]\n    },\n    {\n        \"featureType\": \"road.highway\",\n        \"elementType\": \"geometry.fill\",\n        \"stylers\": [\n            {\n                \"color\": \"#0f0b2c\"\n            },\n            {\n                \"lightness\": 17\n            }\n        ]\n    },\n    {\n        \"featureType\": \"road.highway\",\n        \"elementType\": \"geometry.stroke\",\n        \"stylers\": [\n            {\n                \"color\": \"#000000\"\n            },\n            {\n                \"lightness\": 29\n            },\n            {\n                \"weight\": 0.2\n            }\n        ]\n    },\n    {\n        \"featureType\": \"road.arterial\",\n        \"elementType\": \"geometry\",\n        \"stylers\": [\n            {\n                \"color\": \"#000000\"\n            },\n            {\n                \"lightness\": 18\n            }\n        ]\n    },\n    {\n        \"featureType\": \"road.arterial\",\n        \"elementType\": \"geometry.fill\",\n        \"stylers\": [\n            {\n                \"visibility\": \"on\"\n            },\n            {\n                \"color\": \"#271e78\"\n            }\n        ]\n    },\n    {\n        \"featureType\": \"road.local\",\n        \"elementType\": \"geometry\",\n        \"stylers\": [\n            {\n                \"color\": \"#000000\"\n            },\n            {\n                \"lightness\": 16\n            }\n        ]\n    },\n    {\n        \"featureType\": \"road.local\",\n        \"elementType\": \"geometry.fill\",\n        \"stylers\": [\n            {\n                \"visibility\": \"on\"\n            },\n            {\n                \"color\": \"#192059\"\n            }\n        ]\n    },\n    {\n        \"featureType\": \"transit\",\n        \"elementType\": \"geometry\",\n        \"stylers\": [\n            {\n                \"color\": \"#000000\"\n            },\n            {\n                \"lightness\": 19\n            }\n        ]\n    },\n    {\n        \"featureType\": \"water\",\n        \"elementType\": \"geometry\",\n        \"stylers\": [\n            {\n                \"color\": \"#367791\"\n            },\n            {\n                \"lightness\": 17\n            }\n        ]\n    }\n]"))

(comment (def google-map-styles
           (clj->js [])))


(defn google-maps-did-mount [this coordinates]
  (let [[the-first the-second] coordinates
        map-canvas (reagent/dom-node this)
        map-options (clj->js {"scrollwheel" false
                              "center" (google.maps.LatLng. the-first the-second)
                              "zoom" 16
                              "mapTypeControl" false
                              "fullscreenControl" false
                              "streetViewControl" true
                              "styles" google-map-styles})
        the-map (js/google.maps.Map. map-canvas map-options)

        map-with-marker (clj->js  {"position" (google.maps.LatLng. the-first the-second)
                                   "map" the-map
                                   "icon" "/img/marker2.png"})]
    (js/google.maps.Marker. ^js/google.maps.Marker map-with-marker)))

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











(defn logo-anim-if []
  (swap! app-state update :loading-images dec)
  (do
    (tween-to "#logo" 0.8 (clj->js {:ease js/Bounce.easeOut :opacity 1 :delay 0.3 :scale 1}))
    (tween-to "#logo" 0.8 (clj->js {:ease js/Bounce.easeOut  ;(-> js/Elastic.easeOut (.config 1 0.3))
                                    :transform "rotate(0deg)" :delay 1.1}))))

(defn one-city [{:keys [name]}]
  (let [lower-name (clojure.string/lower-case name)]
    (fn [{:keys [name]}]
      [:div.one-bar.uk-width-expand
       [:div.city-container.uk-width-1-1 {:class (if (= lower-name (:chosen-city @app-state))
                                                   "active" "")
                                          :on-click #(do
                                                       (swap! app-state assoc :chosen-city lower-name)
                                                       (scroll-some (get-height "scrollmagic")))}

        [:div.uk-inline
         [:img.uk-align-center.one-city-margin
          {:src "/img/lvlup-logo-transparent.png"
           :on-load #(logo-anim-if)}]
         [:img.hover-city.one-city-margin
          {:src "/img/lvlup-logo-white.png"
           :on-load #(logo-anim-if)}]]
        [:h5.neon.uk-text-center.uk-margin-remove
         (clojure.string/upper-case name)]]])))

(defn all-cities []
  [:div.uk-width-1-1
   [:div#which-city.uk-width-1-1
    [:h1.uk-text-center.monster.neon.uk-animation-slide-bottom.which-city-margin
     "Melyik városba látogatnál el?"]]
   [:div#bars.uk-flex-center.uk-grid-collapse {:data-uk-grid true}
    [:div.uk-width-1-2 {:data-uk-grid true}
     [one-city {:name "Debrecen"}]
     [one-city {:name "Szombathely"}]
     [one-city {:name "Szeged"}]]]])

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
  [:div
   [:div.uk-inline
    [:button.one-system.uk-padding-small
     {;:data-uk-tooltip "title: Foglalások: 17:30-18:30; 19:30-20:30"
      :style {:border-radius "8px"}
      :class (rand-nth ["one-system-free" "one-system-not-free"])}
     [:img {:src (get-system-photo data)}]]
    [:div {:data-uk-drop "pos: left; mode: click"}
     "pff"]]])





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
  [:div.uk-width-1-3
   [:div.uk-padding-small
    {:style {:padding "10px"}}
    [:div.board-game.uk-padding-small {:style {:border-radius "5px"}}
     [:a {:href url :target "_blank"}
      [:b {:style {:color "white"}}
       name]]]]])


(defn board-games []
  (reagent/create-class
    {:reagent-render
     (fn []
       [:div#board
        {:class (if (= "tarsas" (:chosen-part @app-state))
                  "seen"
                  "not-seen")
         :style {:width "100%"}}
        [:div.uk-grid-collapse {:data-uk-grid true}

         [:div.uk-width-1-3
          [:div.uk-inline {:style {:width "100%" :height "100%"}}
           [:div.uk-padding.monster.white-text.board-text
            [:p "Több mint 50 féle társasjáték várja, hogy szórakoztasson téged és barátaid egy finom ital kíséretében!"]
            [:p " Fogyasztás fejében, minden játékunk ingyenesen játszható!
           Érdemes asztalt foglalnotok, hogy biztosan legyen helyetek, amit az oldalunknak irt facebook üzenetben tudtok megtenni:"]
            [:a.uk-text-center.uk-align-center
             {:style {:font-size "2em" :font-weight "bold"}
              :href "https://www.facebook.com/pg/LvLUpBar"
              :target "_blank"}
             "Foglalj facebook üzenetben!"]]]]
         [:div.uk-width-2-3.uk-inline
          [:div.tarsas-front
           [:div.uk-padding-small
            [:input.uk-input.uk-text-center.uk-width-1-3.uk-align-center.uk-margin-remove-bottom
             {:placeholder "Keresés..." :style {:color "#222"}}]]
           [:div.uk-overflow-auto.uk-grid-collapse {:data-uk-grid true}
            (map-indexed #(-> ^{:key %1} [board-game %2])
                         tarsasok)]]]]])}))


(defn dungeon []
  (reagent/create-class
    {:reagent-render
     (fn []
       [:div.uk-inline
        {:class (if (= "dungeon" (:chosen-part @app-state))
                  "seen"
                  "not-seen")
         :style {:width "100%"}}
        [:div.dungeon-back]
        [:div.uk-grid-collapse.dungeon-front {:data-uk-grid true}
         [:div.uk-width-1-2.uk-inline
          [:h2.monster.white-text.uk-padding "Játékterem"]
          [:div.uk-padding.monster.white-text.uk-position-center.board-text
           [:p "Minden LvL Up Bár rendelkezik a maga gaming részlegével, ahol igazi gamer gépeken és konzolokon játszhattok a legújabb játékokkal valamint lehetőségetek nyílik legújabb VR szemüvegeinket is kipróbálni vagy éppen egy kinect előtt Just Dance-re táncolni, a legfinomabb koktéljaink kíséretében! "]
           [:p "Gépet foglalni a facebook oldalunknak írt üzenetben tudtok:"]
           [:a.uk-text-center.uk-align-center
            {:style {:font-size "2em" :font-weight "bold"}
             :href "https://www.facebook.com/pg/LvLUpBar"
             :target "_blank"}
            "Foglalj facebookon!"]]]
         [:div.uk-width-1-2.uk-padding-small  {:style {:border-left "0.5px solid white"}}
          [:h2.monster.white-text.uk-padding-small.uk-text-right.uk-margin-remove-bottom "Szabad helyek"]
          [:h4.monster.white-text.uk-padding-small.uk-text-right.uk-margin-remove.uk-padding-remove-top
           "2019.05.07 15:34"]
          [:div.uk-height-large.uk-overflow-auto.uk-child-width-1-5.uk-padding
           {:data-uk-grid true}
           (comment (map-indexed
                      #(-> ^{:key %1}[system %2])
                      systems))]]]])}))


(def sponsors
  ["cenex420.png" "gemklub420.png" "lays420.png" "monster420.png"
   "pepsi420.png" "telekom420.png" "urage420.png"])

(defn egyesulet []
  [:section#egyesulet.uk-width-1-1
   {:style {:width "100%":height "100%"}}
   [:div.esport-front
    [:div {:class "" :id "" :style {:color "white"}}
     [:h1.white-text.monster.uk-text-center.uk-padding-small "Egyesület"]
     [:div.uk-container.uk-container-large
      [:div.uk-padding-small.board-text
       [:p.monster "Hitvallásunk szerint a videojátékoknak közösségépítő ereje van, melyet megfelelő tapasztalattal és szakértelemmel kihasználva nem csak szórakozásra, hanem az egyének és akár egy nagyobb közösség javára is lehet fordítani."]
       [:p.monster "Célunk a LvL Up Egyesülettel kétirányú. Egyfelől egy olyan közösség életre hívása, ahol a tagok és játékosok szívesen nyitnak egymás felé és a hazai eSport közösség részeként erősítik azt.\n"]
       [:p.monster "Másik oldalról pedig olyan tehetséges fiatal játékosoknak és csapatoknak szeretnénk lehetőséget biztosítani, akik országos, de akár regionális szinten is jó eredményeket érhetnek el, ezzel öregbítve országunk, valamint a LvL Up esport Egyesület hírnevét. Jelenleg több mint 37 igazolt tagunk van és ez a szám folyamatosan nő, hála az országban egyre felkapottabb esport kultúrának. \n"]
       [:p.monster "Ezen alapelvek mentén szeretnénk a LvL Up Esport Egyesületet továbbra is a hazai élet meghatározó multi platform és multi gaming szervezeteként fejleszteni."]
       [:p.monster "További információkért a facebook oldalunknak irt üzenetben tudtok érdeklődni! (: "]]
      [:a.uk-text-center.uk-align-center
       {:style {:font-size "2em" :font-weight "bold"}
        :href "https://www.facebook.com/pg/LvLUpBar"
        :target "_blank"}
       "Facebook oldal"]]
     [:div.uk-child-width-1-2.uk-text-center.uk-padding-small {:data-uk-grid true}
      [:div
       [:h2.white-text.monster "Csapataink"]
       [:div.monster.white-text
        [:div "Hulkeinstenék"]
        [:div "Dudiék"]]]
      [:div
       [:h2.white-text.monster "Eredményeink"]
       [:div.monster.white-text
        [:div "Magyar Bajnoki PUBG Kupa 5. hely- Chres"]
        [:div "Olasz Hearthstone bajnokság 3. hely - Dudi"]]]]]]])


(defn youtube []
  [:div#youtube-wrapper
   [:iframe#youtube
    {:data-uk-video "mute: true"
     :height "400"
     :width "100%"
     :src "https://www.youtube.com/embed/qTxa2rvoyfo"}]])

(defn choose-part [name part]
  [:div.neon.uk-flex-auto
   {:class (if (= part (:chosen-part @app-state))
             "active"
             "")
    :on-click #(swap! app-state assoc :chosen-part part)}
   [:div name]])

(defn nyitvatartas []
  [:div
   [:div#nyitvatartas.uk-width-auto.uk-align-center "Nyitvatartás"]
   [:div.uk-padding-remove-vertical
    [:table.monster.opening-text.uk-table
     [:tbody
      [:tr
       [:td  [:b"hetfo"]]
       [:td.uk-text-nowrap.uk-text-right.uk-table-shrink "20:00-22:00"]]
      [:tr
       [:td [:b "kedd"]]
       [:td.uk-text-nowrap.uk-text-right.uk-table-shrink "20:00-22:00"]]
      [:tr
       [:td [:b "szerda"]]
       [:td.uk-text-nowrap.uk-text-right.uk-table-shrink "20:00-22:00"]]
      [:tr
       [:td [:b "csutortok"]]
       [:td.uk-text-nowrap.uk-text-right.uk-table-shrink "20:00-22:00"]]
      [:tr
       [:td [:b "pentek"]]
       [:td.uk-text-nowrap.uk-text-right.uk-table-shrink "20:00-22:00"]]
      [:tr
       [:td [:b "szombat"]]
       [:td.uk-text-nowrap.uk-text-right.uk-table-shrink "20:00-22:00"]]
      [:tr
       [:td [:b "vasarnap"]]
       [:td.uk-text-nowrap.uk-text-right "Zarva"]]]]]])



(defn day-hours [day hours]
  [:tr
   [:td day]
   [:td hours]])


(defn str-hours [a]
  (if (= 2 (count a))
    (clojure.string/join "-" a)
    "Zárva"))

(defn contact []
  (let []
    (fn []
      (let [shop (:shop-data @app-state)
            open (:opening-hours shop)
            address (:contact-address shop)
            phone (:contact-phone shop)
            email (:email shop)
            facebook (:facebook shop)]

        [:div.uk-flex-center {:data-uk-grid true}
         [:div.uk-grid-collapse.uk-padding-small
          {:data-uk-grid true}
          [:div.contact
           [:h2.title.uk-text-center.monster.white-text.glitch
            {:style {:margin-left "46px"}
             :data-text "Kapcsolat"}
            "Kapcsolat"]

           [:div.uk-grid-collapse.uk-margin {:data-uk-grid true}
            [:span.uk-width-auto.uk-margin-right {:data-uk-icon "icon: mail; ratio: 1.3"}]
            [:div.uk-text-center.uk-width-expand {:style {:word-break "break-all"}}
             [:a {:href (str "mailto:" email)}
              email "lvlup@lvlup.hu"]]]
           [:div.uk-grid-collapse.uk-margin {:data-uk-grid true}
            [:span.uk-width-auto.uk-margin-right {:data-uk-icon "icon: receiver; ratio: 1.3"}]
            [:div.uk-text-center.uk-width-expand
             [:a {:href (str "tel:" phone)}
              phone "+36 30 457 7157"]]]
           [:div.uk-grid-collapse.uk-margin {:data-uk-grid true}
            [:span.uk-width-auto.uk-margin-right {:data-uk-icon "icon: facebook; ratio: 1.3"}]
            [:div.uk-text-center.uk-width-expand
             [:a {:href (str "https://facebook.com/" facebook)}
              (str "@" facebook) "lvlupesportbar"]]]
           [:div.uk-grid-collapse.uk-margin {:data-uk-grid true}
            [:span.uk-width-auto.uk-margin-right {:data-uk-icon "icon: youtube; ratio: 1.3"}]
            [:div.uk-text-center.uk-width-expand
             "link"]]]]]))))


(defn itallap []
  [:div.uk-container.uk-container-small
   { :class (if (= "itallap" (:chosen-part @app-state))
              "seen"
              "not-seen")}
   [:div.uk-position-relative.uk-visible-toggle.uk-light
    {:data-uk-slider "uk-slider", :tab-index "-1" :data-uk-lightbox ""}
    [:ul.uk-slider-items.uk-child-width-1-2.uk-child-width-1-3.uk-grid-small
     [:li
      [:div.uk-panel
       [:a {:href "/itallap/szeged/b.png"}
        [:img {:alt "", :src "/itallap/szeged/b.png"}]]
       [:div.uk-position-center.uk-panel [:h1 "1"]]]]
     [:li
      [:div.uk-panel
       [:a {:href "/itallap/szeged/c.png"}
        [:img {:alt "", :src "/itallap/szeged/c.png"}]]
       [:div.uk-position-center.uk-panel [:h1 "2"]]]]
     [:li
      [:div.uk-panel
       [:img {:alt "", :src "/itallap/szeged/d.png"}]
       [:div.uk-position-center.uk-panel [:h1 "3"]]]]
     [:li
      [:div.uk-panel
       [:img {:alt "", :src "/itallap/szeged/e.png"}]
       [:div.uk-position-center.uk-panel [:h1 "3"]]]]]

    [:a.uk-position-center-left.uk-position-small.uk-hidden-hover
     {:data-uk-slider-item "previous",
      :data-uk-slidenav-previous "uk-slidenav-previous",
      :href "#"}]
    [:a.uk-position-center-right.uk-position-small.uk-hidden-hover
     {:data-uk-slider-item "next",
      :data-uk-slidenav-next "uk-slidenav-next",
      :href "#"}]]])


(defn contact-details []
  [:div {:class (if (= "contact" (:chosen-part @app-state))
                  "seen"
                  "not-seen")}
   [:div#contact.uk-grid-collapse
    {:data-uk-grid true
     :style {:width "100%"}}
    [:div.uk-width-1-3 {:style {:overflow "hidden"}}
     [:div.uk-padding-small
      [:div
       [nyitvatartas]
       [contact]]]]
    [:div.uk-width-2-3
     [:div.uk-padding-small
      [youtube]]
     [:div.uk-padding-small
      [google-maps [46.248214 20.146354]]]]]])

(defn city-details []
  [:div {:class "uk-width-1-1 uk-align-center"}
   [itallap]
   [dungeon]
   [contact-details]
   [board-games]])




(defn sponsors-list []
  [:div#sponsors.uk-container
   {:class ["uk-text-center"
            "uk-grid-collapse"
            "uk-flex-center"
            "uk-animation-slide-bottom"]
    :data-uk-grid true
    :style {:margin-bottom "auto"
            :padding-left "30px" :padding-right "30px"}}
   (map-indexed #(-> ^{:key %1}[:div.uk-width-auto.uk-padding
                                [:img {:width "75"
                                       :src (str "/img/logos/" %2)}]])
                sponsors)])


(defn logos-animation []
  (reagent/create-class
    {:reagent-render
     (fn []
       [:div.uk-width-1-1
        [:div {:class "uk-align-center"
               :style {:width "300px"}}
         [:img#logo
          {:style {:width "300px"
                   :z-index 100
                   :border "10px"
                   :opacity 0
                   :transform "scale(2) rotate(15deg)"}
           :on-load #(logo-anim-if)
           :height "auto"
           :src "/img/lvlup-logo-white.png"}]]])}))


(defn hero-section []
  [:div.nice-back.uk-grid-collapse {:data-uk-grid true}
   [:div.uk-width-1-1
    [:div.neon-menu-red.monster.uk-animation-slide-top.uk-align-left.uk-margin-remove-bottom.uk-padding-remove-bottom
     [:a {:style {:color "red"}
          :href "#egyesulet"
          :data-uk-scroll true} "Egyesület"]]
    [:div.neon-menu-blue.monster.uk-animation-slide-top.uk-align-right.uk-margin-remove-bottom.uk-padding-remove-bottom
     [:a {:style {:color "#222" :font-weight 800}
          :href "#"} "Franchise"]]]
   [logos-animation]
   [all-cities]
   (if (= nil (:chosen-city @app-state))
       [sponsors-list])])

(defn current-page []
  (reagent/create-class
    {:component-did-mount #(do
                             (stagger-from
                               ".one-bar" 1
                               (clj->js
                                 {:delay 1.5
                                  :x "100vw"
                                  :opacity 0
                                  :ease (js/Elastic.easeInOut.config 1 1)}) 0.2)
                             (tween-from
                               "#which-city" 1
                               (clj->js
                                 {:delay 2.5
                                  :y "-60px"
                                  :opacity 0
                                  :ease (js/Elastic.easeInOut.config 1 1)}) 0.2))
     :reagent-render
     (fn []
       [:div
        [hero-section]
        (if (:chosen-city @app-state)
          [:section.city-back.uk-padding
           [:div.uk-grid-collapse {:data-uk-grid true
                                   :class "uk-flex-center"
                                   :style {:background "#222"}}

            [:div.uk-width-3-4
             [:div.uk-box-shadow-medium.uk-grid-collapse
              {:data-uk-sticky "bottom: true"
               :id "city-menu"
               :class "uk-text-center city-menu monster uk-width-1-1"
               :data-uk-grid true}
              [choose-part "Kapcsolat" "contact"]
              [choose-part "Társasjátékok" "tarsas"]
              [choose-part "Itallap" "itallap"]
              [choose-part "Foglalás" "dungeon"]]
             [city-details]]]])
        [egyesulet]])}))

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
