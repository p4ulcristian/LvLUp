(ns lvlup.core

  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [secretary.core :as secretary :include-macros true]
            [accountant.core :as accountant]
            [clojure.string :as string]
            [lvlup.sente :refer [start-router! chsk-send! chsk-reconnect! chsk-disconnect!]]
              ;[lvlup.crusader.sente :refer [chsk-send! start-router! chsk-reconnect! chsk-disconnect!]]
            [lvlup.crusader.reservation :refer [reservation]]
            [lvlup.crusader.crusader :refer [crusader]]
            [lvlup.crusader.dungeon :refer [dungeon checkout registration filter-by-name-and-id sidenav]]
            [ajax.core :refer [GET POST]]
            [re-frame.core :refer [dispatch-sync dispatch subscribe]]
            [cljs-time.core :as tcore]
            [lvlup.utils :as utils :refer [read-now]]

            [jayq.core :refer [$ css html]]))



;; -------------------------
;; Ez itt a LvLUp view


;;State hogy a routeok által hozott href linkek müködjenek az idetévedőknek
(defonce app-state (atom {:page nil
                          :parameters nil}))

;;;;;;;;;;;
;;Galéria;;
;;;;;;;;;;;

(defn gallery []
  (let []
    (reagent/create-class
     {:component-did-mount #(do (.facebook js/window "lvlupesport" ".lvlupesport") (.facebook js/window "LvLUpBar" ".LvLUpBar"))
      :component-did-update #(do (.facebook js/window "lvlupesport" ".lvlupesport") (.facebook js/window "LvLUpBar" ".LvLUpBar"))
      :reagent-render
      (fn []
        [:div.row.noselect
         [:div#p5.page2.col.s11 {:style {:height "100vh" :overflow-y "auto"}}
          [:div.row
           [:div.col.s12.m6.l6.lvlupesport {:style {:height "100vh" :overflow-y "auto"}}]
           [:div.col.s12.m6.l6.LvLUpBar {:style {:height "100vh" :overflow-y "auto"}}]]]])})))

;;;;;;;;;;;
;;Itallap;;
;;;;;;;;;;;

(def drink {1 ["Ristretto" "220.-"]
            2 ["Espresso (more espresso, less depresso)" "220.-"]
            3 ["Hosszú kávé" "220.-"]
            4 ["Cappuccino" "270.-"]
            5 ["Latte Macchiato" "270.-"]
            6 ["Melange" "320.-"]
            7 ["Tea (Gyümölcs, Herbál, Fekete, Zöld, Rooibos)" "200.-"]
            8 ["Forró Csoki (Barna, fehér, Banán, Rum, Mogyi, Narancs-fahéj)" "360.-"]
            9 ["Tejszín" "30.-"]
            10 ["Tej, Tejszínhab" "50.-"]
            11 ["Méz" "100.-"]
            12 ["Monster Energy" "420.- (0,5 l)"]
            13 ["Coca-Cola, Coca-Cola Zero" "390.- (0,5 l)"]
            14 ["Fanta Narancs" "390.- (0,5 l)"]
            15 ["Sprite" "390.- (0,5 l)"]
            16 ["Kinley gyömbér, Kinley tonic" "390.- (0,5 l)"]
            17 ["Cappy Ice Fruit" "390.- (0,5 l)"]
            18 ["Nestea" "390.- (0,5 l)"]
            19 ["Natur Aqua" "290.- (0,5 l)"]
            20 ["Limonádé" "250.- (0,3 l)"]
            21 ["Arany Ászok csapolt:" "350.- (0,5 l)"]
            22 ["LvL Up sör csapolt:" "320.- (0,5 l)"]
            23 ["HB búza csapolt:" "520.- (0,5 l)"]
            24 ["Pilsner Urquelle dobozos:" "500.- (0,5 l)"]
            25 ["Dreher dobozos:" "400.- (0,5 l)"]
            26 ["Kozel dobozos:" "350.- (0,5 l)"]
            27 ["Dreher 24 Alkoholmentes dobozos:" "400.- (0,5 l)"]
            28 ["Nyakas Irsai Olivér (sz)" "350.- (0,1 l) 2650.- üveg"]
            29 ["Frittmann Kékfrankos (sz)" "350.- (0,1 l) 2650.- üveg"]
            30 ["Frittmann Kékfr. Rosé (sz)" "350.- (0,1 l) 2650.- üveg"]
            31 ["BB pezsgő (száraz, édes)" "1650.- Üveg"]
            32 ["Jack Daniel’s" "325.- (2 cl) 650.- (4 cl)"]
            33 ["Jim Beam" "250.- (2 cl) 500.- (4 cl)"]
            34 ["Johnnie Walker" "250.- (2 cl) 500.- (4 cl)"]
            35 ["Ballantine’s" "250.- (2 cl) 500.- (4 cl)"]
            36 ["Nyírségi Fogó Pálinka(Szilva, Körte, Alma, Meggy, Cseresznye, Kajszi, Őszi)" "240.- (2 cl) 480.- (4 cl)"]
            37 ["Fütyülős(Csokis mogyi, Epres Rosé, Mézes bodza, Mézes málna)" "225.- (2 cl) 450.- (4 cl)"]
            38 ["Captain Morgan" "250.- (2 cl) 500.- (4 cl)"]
            39 ["Bacardi" "240.- (2 cl) 480.- (4 cl)"]
            40 ["Finlandia vodka" "250.- (2 cl) 500.- (4 cl)"]
            41 ["Royal vodka" "175.- (2 cl) 350.- (4 cl)"]
            42 ["Finsbury Gin" "225.- (2 cl) 450.- (4 cl)"]
            43 ["Ouzo" "200.- (2 cl) 400.- (4 cl)"]
            44 ["Carolans likőr" "210- (2 cl) 420.- (4 cl)"]
            45 ["Sierra Tequila (silver, gold)" "275.- (2 cl) 550.- (4 cl)"]
            46 ["Unicum, Unicum Szilva" "210.- (2 cl) 420.- (4 cl)"]
            47 ["Becherovka" "260.- (2 cl) 520.- (4 cl)"]
            48 ["St. Hubertus" "190.- (2 cl) 380.- (4 cl)"]
            49 ["Jägermeister" "225.- (2 cl) 450.- (4 cl)"]
            50 ["Metaxa" "225.- (2 cl) 450.- (4 cl)"]
            51 ["Aperol" "210.- (2 cl) 420.- (4 cl)"]})

(defn get-th [pia]
  [:tr [:th (first pia)] [:th (second pia)]])

(defn drink-page []
  [:div.row
   [:div#p3.page2.col.s11
    [:div.row {:style {:height "100vh" :padding "0px" :overflow-y "auto"}}
     [:h2.center "Itallap"]
     [:table {:class "centered highlight"}
      [:thead
       [:tr
        [:th "Italok"]
        [:th "Árak"]]]
      [:tbody
       (map-indexed #(-> ^{:key %1} [get-th (val %2)]) (into (sorted-map) drink))]]]]])

;;;;;;;;;;;;;
;;Kapcsolat;;
;;;;;;;;;;;;;

(defn google-maps-did-mount [this]
  (let [map-canvas (reagent/dom-node this)

        map-options (clj->js {"scrollwheel" false
                              "center" (google.maps.LatLng. 46.248210, 20.146316)
                              "zoom" 15})
        map-with-marker (clj->js  {"position" (google.maps.LatLng. 46.248210, 20.146316)
                                   "map" (js/google.maps.Map. map-canvas map-options)})]
    (js/google.maps.Marker. map-with-marker)))

(defn google-maps-render []
  [:div {:style {:height "500px"}}])

(defn google-maps []
  (reagent/create-class {:reagent-render google-maps-render
                         :component-did-mount google-maps-did-mount}))

(defn opening-hours []
  [:div {:style {:padding-top "20px"}}
   [:table {:class "centered highlight"}
    [:thead
     [:tr
      [:th "Nap"]
      [:th "Nyitvatartás"]]]
    [:tbody
     [:tr
      [:th.center "Hétfő"]
      [:th.center "12:00-24:00"]]
     [:tr
      [:th.center "Kedd"]
      [:th.center "12:00-24:00"]]
     [:tr
      [:th.center "Szerda"]
      [:th.center "12:00-24:00"]]
     [:tr
      [:th.center "Csütörtök"]
      [:th.center "12:00-02:00"]]
     [:tr
      [:th.center "Péntek"]
      [:th.center "12:00-02:00"]]
     [:tr
      [:th.center "Szombat"]
      [:th.center "12:00-02:00"]]
     [:tr
      [:th.center "Vasárnap"]
      [:th.center "Zárva"]]]]])

(defn send-email [email]
  (POST "/send-email"
        {:params email
         :handler #(js/alert %)
         :error-handler #(js/alert %)}))

(defn check-email [email]
  (if (= "" (:first-name email))
    (js/alert "Add meg a keresztneved")
    (if (= "" (:email email))
      (js/alert "Add meg az email-címed!")
      (if (= "" (:message email))
        (js/alert "Üzenj is valamit!")
        (send-email email)))))

(defn email-form []
  (let [email-atom (atom
                    {:first-name ""
                     :last-name ""
                     :email ""
                     :message ""})]
    (fn []
      [:div#email-form
       [:form.col.s12
        [:div.row
         [:div.input-field.col.s12
          [:i.material-icons.prefix "email"]
          [:input {:id "icon_email" :type "tel" :class "validate" :on-change #(swap! email-atom assoc :email (-> % .-target .-value))}]
          [:label {:for "icon_email"} "Email-cím (Azért hogy tudjunk válaszolni!)"]]
         [:div.input-field.col.s6
          [:i.material-icons.prefix "account_circle"]
          [:input {:id "icon_prefix" :type "text" :class "validate" :on-change #(swap! email-atom assoc :first-name (-> % .-target .-value))}]
          [:label {:for "icon_prefix"} "Keresztnév (Csak formalitás)"]]

         [:div.input-field.col.s6
          [:i.material-icons.prefix "account_circle"]
          [:input {:id "icon_prefix2" :type "text" :class "validate" :on-change #(swap! email-atom assoc :last-name (-> % .-target .-value))}]
          [:label {:for "icon_prefix2"} "Vezetéknév (Csak formalitás"]]

         [:div.input-field.col.s12
          [:i.material-icons.prefix "mode_edit"]
          [:textarea {:id "icon_text" :class "materialize-textarea" :on-change #(swap! email-atom assoc :message (-> % .-target .-value))}]
          [:label {:for "icon_text"} "Üzenet"]] [:button.btn.right.transparent.white-text {:type "button" :on-click #(check-email @email-atom)} "Üzenet küldése ->"]]]])))

(defn contact []
  (let []
    (reagent/create-class {;:component-did-mount #(.tablebutton js/window js/document "script")
                           :reagent-render
                           (fn []
                             [:div.row
                              [:div#p4.page2.col.s11 {:style {:height "100vh" :overflow "auto"}}
                               [:div.row.center [:h2 "Kapcsolat, Nyitvatartás"]]
                               [:div.row
                                                ;ez felel a foglalásos szarért [:div#resmio-lvl-up-esport-bar.center.col.l4.s12]
                                [:div.col.l6.m6.s12
                                 [opening-hours]]
                                [:div.col.l6.m6.s12.center
                                 [google-maps]]]

                               [:div.row

                                [:div.col.s12.l12
                                 [:h4 "Keress bátran!"]
                                 [:h5 "Alábbi elérhetőségeinken bármikor bátran kereshetsz. Kérdéseidet, ötleteidet örömmel várjuk.
                                        Foglalással kapcsolatban is itt írhatsz!"]

                                 [:ul.collection
                                  [:li.collection-item "Email: info@lvlup.hu"]
                                  [:li.collection-item "Telefonszám: wait for it..."]
                                  [:li.collection-item "Cím: Szeged, Jókai utca 7-9"]]]]]])})))
                                                 ;[:div.col.s12.l8 {:style {:padding "20px"}} [email-form]]


;;;;;;;;;;;;;;;;;;;;;;
;;Események, oldalak;;
;;;;;;;;;;;;;;;;;;;;;;


(defn events []
  [:div.row
   [:div#p2.page2.col.s11.noselect {:style {:height "100vh" :overflow-y "auto"}}
    [:div.row
     [:div.center [:h2 "Eseményeink"]]]
    [:div.row
     [:div.col.s12.m6.l6.center
      [:h3 "LvL Up Esport Bár"]
      [:a {:href "https://www.facebook.com/pg/LvLUpBar/events/"} [:img.responsive-img {:src "/img/kocsma.png"}]]
      [:p.flow-text "Látogass el hozzánk, és vegyél részt a számtalan eseményünk egyikén! Vagy az összesen!
                    1v1 bajnokságok, társasjáték estek, konzol házi versenyek, és természetesen a legnépszerűbb játékok bajnokságai,
                        a LvL Up eSport bárban megrendezve! "]
      [:p.flow-text "Kattints a képre az aktuális eseményeinkért!"]]
     [:div.col.s12.m6.l6.center
      [:h3 "LvL Up"]
      [:a {:href "https://www.facebook.com/lvlupesport/events/"} [:img.responsive-img {:src "/img/bar.jpg"}]]
      [:p.flow-text "Neked már nem elég a 'kocsmai verekedés' és komolyabb szinten is megmérettetnéd magad,
                        értékesebb nyereményekért, és az életre szóló dicsőségért?"]
      [:p.flow-text "Kattints a fenti képre, hogy megtaláld a nagyobb szabású eseményeinket!"]]]]])

;;;;;;;;;;;;;;;;;;;
;;Jobboldali menü;;
;;;;;;;;;;;;;;;;;;;

(defn side-menu []
  (let []
    (reagent/create-class
     {:component-did-mount #(.tooltip ($ ".tooltipped"))
      :component-did-update #(.tooltip ($ ".tooltipped"))
      :reagent-render
      (fn []
        [:div#side-menu.valign.center  {:style {:width "100%"}} [:div

                                                                 [:div.col.s12.offset-l4.l4.m6.offset-m3.side-icon
                                                                  [:a.tooltipped {:href "https://www.facebook.com/pg/LvLUpBar" :data-position "left" :data-delay "25" :data-tooltip "Facebook - LvL Up Bár"}
                                                                   [:div.facebook-pub]]]
                                                                 [:div.col.s12.offset-l4.l4.m6.offset-m3.side-icon
                                                                  [:a.tooltipped {:href "https://www.facebook.com/pg/lvlupesport" :data-position "left" :data-delay "25" :data-tooltip "Facebook - LvL Up Közösség"}
                                                                   [:div.facebook-community]]]
                                                                 [:div.col.s12.offset-l4.l4.m6.offset-m3.side-icon
                                                                  [:a.tooltipped {:href "https://gaming.youtube.com/channel/UCviWLrAxuMwqdk93C4hqBdQ" :data-position "left" :data-delay "25" :data-tooltip "Youtube"}
                                                                   [:div.youtube-icon]]]
                                                                 [:div.col.s12.offset-l4.l4.m6.offset-m3.side-icon
                                                                  [:a.tooltipped {:href "https://www.instagram.com/lvlupesport" :data-position "left" :data-delay "25" :data-tooltip "Instagram"}
                                                                   [:div.instagram-icon]]]]])})))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;Főoldal, az első pár sor a baloldali menü;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn helper-href [link]
  (let [actual-href (str "#" (last (string/split (last (string/split (.-location js/window) "/")) "#")))]
    (if (= link actual-href)
      "#t1"
      link)))

(defn main-page []
  (let []
    (reagent/create-class
     {:component-did-mount #(.particle js/window) ;(do (.tooltip ($ ".maintooltipped")) )
      :component-did-update #(.particle js/window) ;(do (.tooltip ($ ".maintooltipped")) (.particle js/window))
      :reagent-render
      (fn []
        [:div#p1.page.noselect
         [:div.row
          [:div.col.s1.valign-wrapper {:style {:height "100vh" :padding "0px"}}
           [:ul#menu.valign

            [:a.maintooltipped {:data-position "bottom" :data-delay "25" :data-tooltip "Főoldal" :on-click #(set! (.-location js/window) "#t1")} [:li#home-page.icon.fa.fa-home]]
            [:a.maintooltipped {:data-position "bottom" :data-delay "25" :data-tooltip "Eseményeink" :on-click #(set! (.-location js/window) (helper-href "#t2"))} [:li#events.icon.fa.fa-calendar]]
            [:a.maintooltipped {:data-position "bottom" :data-delay "25" :data-tooltip "Itallap" :on-click #(set! (.-location js/window) (helper-href "#t3"))} [:li#stream.icon.fa.fa-beer]]
            [:a.maintooltipped {:data-position "bottom" :data-delay "25" :data-tooltip "Kontakt" :on-click #(set! (.-location js/window) (helper-href "#t4"))} [:li#opening.icon.fa.fa-clock-o]]
            [:a.maintooltipped {:data-position "bottom" :data-delay "25" :data-tooltip "Galléria" :on-click #(set! (.-location js/window) (helper-href "#t5"))} [:li#gallery.icon.fa.fa-picture-o]]]]
          [:div.row
           [:div#home.col.s10  {:style {:overflow-y "auto" :z-index "0" :position "relative" :height "100vh"}}
            [:div#particles-js.col.s10.m10.l10 {:style {:position "fixed" :z-index "0" :height "100vh"}}]
            [:div.row {:style {:position "relative"}}
             [:div.col.offset-l4.l4.offset-s1.s10.m6.offset-m3
              [:img#logo.responsive-img {:src "/img/lvlup-logo-white.png"}]]
             [:div.col.s12.flow-text {:style {:text-align "center"}}
              [:p "A LvL Up már 2015 óta szerves részét képezi a szegedi és a dél-alföldi eSport világnak.
                                A régió talán legnagyobb versenyeit és rendezvényeit magunk mögött tudva biztosítjuk a lehető legjobb
                                szórakozást minden kedves vendégünknek, legyen vérbeli GAMER, igazi kocka, vagy csupán egy kíváncsi érdeklődő.
                                Ha szereted a virtuális játékokat, érdekelnek a közvetítések, esetleg beugranál egy sörre egy kávéra vagy egy
                                társasra a haverokkal, akkor nálunk a helyed! Vérbeli gémereket és kíváncsi betérőket egyaránt szívesen fogadunk!
                                Fedezd fel magadnak az igazi szegedi eSport bár élményt!"]]
             [:div.col.s12
              [:div.row
               [:div.col.s12.m6.l4 [:img.responsive-img {:src "/img/logos/bluechip.png"}]]
               [:div.col.s12.m6.l4 [:img.responsive-img {:src "/img/logos/cenex.png"}]]
               [:div.col.s12.m6.l4 [:img.responsive-img {:src "/img/logos/samsung.png"}]]
               [:div.col.s12.m6.l4 [:img.responsive-img {:src "/img/logos/deltavision.png"}]]
               [:div.col.s12.m6.l4 [:img.responsive-img {:src "/img/logos/monster.png"}]]

               [:div.col.s12.m6.l4 [:img.responsive-img {:src "/img/logos/telekom.png"}]]]]]]

           [:div#contact.col.s1.valign-wrapper {:style {:height "100vh"}}
            [side-menu]]]]])})))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;Mivel az oldal one-pager animációkkal így csak home-page van;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn home-page [link-to-div]
  (let []
    (fn [link-to-div]
      [:div#t1.ct
       [:div#t2.ct
        [:div#t3.ct
         [:div#t4.ct
          [:div#t5.ct
           [main-page]
           [events]
           [drink-page]
           [contact]
           [gallery]]]]]

       (if (not= nil)
         (set! (.-location js/window) link-to-div))])))

;;;;;;;;;;;;;;;;;;;
;;Jelenlegi oldal;;
;;;;;;;;;;;;;;;;;;;

()

(defn not-found []
  [:div "404"])

(defn decide-title [title]
  (case title
    "table" "Asztalfoglalás"
    "registration" "Felhasználókezelés"
    "checkout" "Kassza"
    "system" "Gépfoglalás"
    "dungeon" "Dungeon"
    "Crusader"))

(defn member-name [member search-atom]
  [:div.uk-width-1-1.uk-padding-small.uk-margin-remove
   [:span.uk-text-middle.uk-padding-remove.uk-text-truncate (str (:id member) ". " (:name member))]

   [:span.uk-float-right  {:data-uk-icon "icon: plus-circle"
                           :on-click #(do
                                        (chsk-send! [:dungeon/add-member (assoc member :playing true)])
                                        (reset! search-atom "")
                                        (.notification js/UIkit (str (:name member) " lemegy a dungeonbe!")))}]])












(defn one-menu [name picture url]
  ;[:a {:style {:color "white !important"} :href url}
   [:div.uk-inline-clip.uk-transition-toggle.uk-padding-small
    {:style {:cursor "pointer"}}

    [:div {:style {:border "1px solid white" :border-radius "4px"}}

     [:img.uk-align-center.uk-margin-remove-vertical {:alt "", :src picture :width "150px"}]
     [:a.uk-transition-fade.uk-position-cover.uk-position-small.uk-overlay.uk-overlay-default.uk-flex.uk-flex-center.uk-flex-middle {:style {:text-decoration "none"} :href url}
      [:h1.uk-margin-remove {:style {:color "black"}}  name]]]])

(defn full-screen-nav []

   [:div.uk-inline.uk-padding-remove
    {:style {:height "100vh" :width "100vw"}
     :data-uk-toggle "target: #container-nav"}

      ;[:div.uk-text-meta.uk-text-small.uk-text-center.uk-margin-remove [read-now]]]]
    [:div.uk-position-center
     [:div.uk-flex.uk-flex-center.uk-child-width-1-2.uk-grid.uk-margin-remove {:data-uk-grid true}

      [one-menu "Foglalás" "/Icons/reservation2.svg" "/crusader/reservation"]
      [one-menu "Kassza" "/Icons/checkout.svg" "/crusader/checkout"]
      [one-menu "Felhasználók" "/Icons/users.svg" "/crusader/registration"]
      [one-menu "Dungeon" "/Icons/dungeon.svg" "/crusader/dungeon"]
      [one-menu "Patch notes" "/Icons/info.svg" "/crusader"]]]])


(defn crusader-navbar []
  (let [members (subscribe [:data "players"])
        search (atom "")
        connection-state (subscribe [:data "connection-state"])
        actual-page (subscribe [:data "actual-page"])]
    (reagent/create-class
      {

       :reagent-render
       (fn []
         [:div {:style {:height "60px"} :class (if (= @actual-page "home-page") "uk-hidden" "")}
          [:div#container-nav {:data-uk-offcanvas true}
           [:div.uk-offcanvas-bar.uk-padding-remove {:style {:width "100vw" :background "rgba(0,0,0,0.7)"}}
            [full-screen-nav]]]
          [:nav#stick
           {:data-uk-grid true
            :style {:z-index 1000 :cursor "pointer"}

            :data-uk-sticky true}
           [sidenav]

           [:div.uk-navbar-left.uk-animation-fade
              [:div.stick-logo.scale-hover
               [:img.rotate {:src "/img/lvlup-logo-transparent.png" :data-uk-toggle "target :#container-nav"}]]]
           [:div.uk-navbar-center.uk-padding-remove
              { :data-uk-toggle "target :#container-nav"}
            [:div
             [:div {:href "/crusader"}
              [:h1.uk-margin-remove.uk-padding-remove.uk-text-center
               {:style {:font-size "2em" :color "white"}}
               (decide-title (str @actual-page))]]
             [:div.uk-text-meta.uk-text-small.uk-text-center.uk-margin-remove [read-now]]]]




              ;[:li.uk-nav-divider]
              ;[:li [:a {:href "/logout"} "Kijelentkezés"]]]]]]]
           [:div.uk-navbar-right
             [:div.uk-grid.uk-animation-fade.uk-padding.uk-padding-remove-vertical {:data-uk-grid true}
              [:img.scale-hover {:width "65px"
                                 :data-uk-tooltip (if @connection-state
                                                    "Kapcsolódva"
                                                    "Szétkapcsolódva")
                                 :src (if
                                       @connection-state
                                        "/Icons/connected.svg"
                                        "/Icons/disconnected.svg")}]
              [:img.scale-hover {:data-uk-toggle "target: #sidenav" :src "/Icons/parachute.svg" :width "70px"}]
              [:div.uk-width-1-1.uk-card.uk-card-secondary.uk-margin-remove.uk-padding-remove {:style {:max-height "50vh" :overflow "auto" :z-index 1000}}
               (doall
                (map-indexed
                 #(-> ^{:key %1} [member-name %2 search])
                 (if (= "" (:id @search))
                   []
                   (filter-by-name-and-id  @members search false))))]]]]])})))


(defn loading-screen []
  [:div.uk-inline {:style {:height "100vh" :width "100vw" :position "fixed" :background "rgba(0,0,0,0.9)" :z-index "200000"}}
    [:div.uk-position-center {:data-uk-spinner "ratio: 5" :style {:color "white"}}]])

(defn current-page []
  (let [actual-page (subscribe [:data "actual-page"])
        loading (subscribe [:data "loading"])]
    (reagent/create-class
      {
       :reagent-render
       (fn []
         [:div.uk-offcanvas-content {:style {:background-image "url('../img/cash.jpg')" :background-size "cover" :min-height "100vh" :min-width "100vw"}}
          [crusader-navbar]



          (if @loading [loading-screen])
          (case @actual-page
            "crusader"    [:div.uk-inline
                           {:style {:background-image "url('../img/cash.jpg')" :background-size "cover" :min-height "100vh" :min-width "100vw"}}
                           [:img.uk-position-center {:src "/img/lvlup-logo-transparent.png"}]

                           [crusader]]

            "dungeon"    [:div {:style {:background-image "url('../img/cash.jpg')" :background-size "cover" :min-height "100vh"}}

                          [dungeon]]
            "checkout"    [:div {:style {:background-image "url('../img/cash.jpg')" :background-size "cover" :min-height "100vh"}}

                           [checkout]]
            "registration"  [:div

                             [registration]]
            "reservation"  [:div {:style {:background-image "url('/img/cash.jpg')" :background-size "cover" :min-height "100vh"}}

                            [reservation]]
            "home-page"   [home-page (:parameters @app-state)]
            [not-found])])})))

;; -------------------------
;; Routes

(secretary/defroute "/" []
                    (dispatch [:set-actual-page "home-page"]))

(secretary/defroute "/hu" []
                    (dispatch [:set-actual-page "home-page"]))

(secretary/defroute "/crusader" []
                    (start-router!)
                    (dispatch [:set-actual-page "crusader"]))
                    ;(chsk-send! [:dungeon/get-members {:number 0 :search ""}]))

(secretary/defroute "/crusader/reservation" []
                    (start-router!)

                    (dispatch [:set-actual-page "reservation"]))
                    ;(chsk-send! [:dungeon/get-members {:number 0 :search ""}])


(secretary/defroute "/crusader/checkout" []
                    (start-router!)
                    (dispatch [:set-actual-page "checkout"]))
      ;(chsk-send! [:dungeon/get-members {:number 0 :search ""}])
      ;(chsk-send! [:dungeon/get-members])


(secretary/defroute "/crusader/registration" []
                    (start-router!)
                    (dispatch [:set-actual-page "registration"])
                    (chsk-send! [:dungeon/get-max-id]))

                    ;(chsk-send! [:dungeon/get-members {:number 0 :search ""}]))

(secretary/defroute "/crusader/dungeon" []
                    (start-router!)
                    ;(chsk-send! [:dungeon/get-dungeon])
                    ;(chsk-send! [:dungeon/get-members {:number 0 :search ""}])
                    ;(chsk-send! [:dungeon/get-invoices])
                    (dispatch [:set-actual-page "dungeon"]))

(secretary/defroute "/hu:a" [a]
                    (swap! app-state assoc :page "home-page" :parameters a))

;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (dispatch-sync [:initialize])
  (accountant/configure-navigation!
   {:nav-handler
    (fn [path]
      (secretary/dispatch! path))
    :path-exists?
    (fn [path]
      (secretary/locate-route path))})
  (accountant/dispatch-current!)
  (mount-root))
