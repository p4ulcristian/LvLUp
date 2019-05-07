(ns crusader.core
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [secretary.core :as secretary :include-macros true]
            [accountant.core :as accountant]
            [clojure.string :as string]
            [crusader.sente :refer [start-router! chsk-send! chsk-reconnect! chsk-disconnect!]]
            ;[crusader.crusader.sente :refer [chsk-send! start-router! chsk-reconnect! chsk-disconnect!]]
            [crusader.crusader.reservation :refer [reservation]]
            [ajax.core :as ajax]
            [crusader.crusader.admin :refer [admin]]
            [crusader.crusader.bosses :refer [discounts statistics]]
            [crusader.crusader.crusader :refer [crusader]]
            [crusader.crusader.dungeon :refer [dungeon checkout filter-by-name-and-id]]
            [ajax.core :refer [GET POST]]
            [re-frame.core :refer [dispatch-sync dispatch subscribe]]
            [cljs-time.core :as tcore]
            [crusader.utils :as utils :refer [read-now]]))



(defn logo-img []
  (let [show? (atom false)]
    (fn []
      [:div
       {:style {:height "250px"}}
       [:img.uk-align-center.the-logo.uk-animation-slide-top.uk-margin-remove-bottom
        {:style {:display (if @show? "block" "none")}
         :on-load #(reset! show? true)
         :src "/img/lvlup-logo-white.png" :width "250"}]])))


(defn time-table []
  [:table.uk-table.uk-table-striped
   [:thead
    [:tr
     [:th "Nap"]
     [:th "Nyitvatartás"]]]

   [:tbody
    [:tr
     [:td "Hétfő"]
     [:td "Table Data"]]
    [:tr
     [:td "Kedd"]
     [:td "Table Data"]]
    [:tr
     [:td "Szerda"]
     [:td "Table Data"]]]])





(defn home-template []
  (let [actual-page (subscribe [:data :actual-page])]
    (reagent/create-class
      {:component-did-mount #(.scrollTo js/window 0 0)
       :reagent-render (fn []
                         (case @actual-page
                           "szeged" [:div
                                     [:a {:href "/" :data-uk-tooltip "title: Vissza a főoldalra"} [logo-img]]
                                     [:h1.uk-text-center
                                      {:style {:color "white"}}
                                      "Szeged"]
                                     [:div.uk-container.uk-container-large
                                      [:div.uk-grid-collapse {:data-uk-grid true}
                                       [:div.uk-width-1-1
                                        [:div.uk-card-default
                                         {:style {:border-radius "20px"}}
                                         [:div.uk-card-body
                                          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."]]]
                                       [:div.uk-width-1-1.uk-padding-small
                                        [:div.uk-align-center.uk-background-fixed.uk-height-medium.uk-background-norepeat.uk-background-cover
                                         {:style {:background-image "url(../img/franchise.jpg)"}}]]
                                       [:div.uk-width-1-3.uk-padding-small
                                        [:div.uk-card-default
                                         {:style {:border-radius "20px"}}
                                         [:div.uk-card-body "Kapcsolat, nyitvatartás, telefonszám"
                                          [time-table]]]]
                                       [:div.uk-width-2-3.uk-padding-small
                                        [:div.uk-card-secondary
                                         {:style {:border-radius "20px"}}
                                         [:div.uk-card-body "Ide sincsen még szöveg, facebook link"]]]
                                       [:div.uk-width-1-1.uk-padding-small
                                        [:div.uk-card-default
                                         {:style {:border-radius "20px"}}
                                         [:div.uk-card-body "Foglalás feltételei, ide is kell szöveg"]]]
                                       [:div.uk-width-1-1.uk-padding-small
                                        [:div.uk-card-default
                                         {:style {:border-radius "20px"}}
                                         [:div.uk-card-body.uk-text-center "Dungeon jelenlegi állapota"]]]]]]

                           "debrecen" [:div]
                           [:div]))})))


(defn one-logo [src]
  [:div.uk-padding-small
   [:div {:style {:display "flex"
                  :align-items "center"
                  :justify-content "center"}}
    [:img.uk-text-middle

      {:data-src (str "/img/logos/" src) :data-uk-img true}]]])

(defn home-page []
  (let []
    (fn []
      [:div.uk-container.uk-container-large
       [:div.uk-flex-center {:data-uk-grid true}
        [logo-img]
        [:h1.uk-text-center.uk-width-1-1.uk-animation-slide-bottom.uk-margin-remove-top
         {:style {:color "white"}}
         "LvL Up"]
        [:div.pointer.uk-flex-center
         {:class "uk-width-1-1 uk-width-1-2@m uk-child-width-1-1 uk-child-width-1-2@s uk-grid-collapse uk-text-center"
          :data-uk-grid true}
         [:div
          [:a.hover-anim
           {:href "https://lvlupstore.fwscart.com/"}
           [:img
            {:src "/img/logos/store.png"}]]]
         [:div
          [:a.hover-anim
           {:href "/franchise"}
           [:img
            {:src "/img/logos/franchise.png"}]]]]
        [:div.uk-width-1-1]
        [:div.uk-padding.uk-margin-remove.uk-grid-collapse
         {:class "uk-width-1-1 uk-width-1-2@m uk-child-width-1-1 uk-child-width-1-2@s uk-grid-collapse uk-text-center"
          :data-uk-grid true}
         [:div
          [:a.hover-anim
           {:href "https://www.facebook.com/LvLUpBar"}
           [:img
            {:src "/img/logos/szeged.png"}]]]
         [:div
          [:a.hover-anim
           {:href "https://www.facebook.com/LvLUpDebrecen/"}
           [:img
            {:src "/img/logos/debrecen.png"}]]]]
        [:div.uk-width-1-1]
        [:div
         {:class "uk-width-1-1 uk-width-1-2@m"}
         [:h1.uk-heading-line.uk-text-center
          [:span
           {:style {:color "white"}}
           "Szponzoraink"]
          [:div.uk-grid-collapse.uk-grid-match.uk-flex-center
           {:class "uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l"
            :data-uk-grid true}
           [one-logo "dreher.png"]
           [one-logo "urage.png"]
           [one-logo "telekom.png"]
           [one-logo "ujcenex.png"]
           [one-logo "pepsi.png"]
           [one-logo "monster.png"]
           [one-logo "gemklub.png"]
           [one-logo "esport.png"]]]]]])))
                      ;:style {:background-image "url(../img/debrecennext.jpg)"}}]]]])))




;;;;;;;;;;;;;;;;;;;
;;Jelenlegi oldal;;
;;;;;;;;;;;;;;;;;;;


(defn not-found []
  [:div "404"])

(defn decide-title [title]
  (case title
    "table" "Asztalfoglalás"
    "checkout" "Kassza"
    "system" "Gépfoglalás"
    "dungeon" "Dungeon"
    "Crusader"))

(defn crusader-sidenav []
 (let [user (subscribe [:data :user])]
   (fn []
     [:ul.uk-nav.uk-nav-primary.uk-nav-center.uk-margin-auto-vertical;
      (if (or (= "boss" (:role @user)) (= "admin" (:role @user)))
        [:li
         [:a
          {:data-uk-toggle "target: #container-nav"
           :href "/crusader/statistics"}
          [:span.uk-margin-small-right {:data-uk-icon "icon: bookmark"}]
          " Statistics"]])
      (if (or (= "boss" (:role @user)) (= "admin" (:role @user)))
        [:li
         [:a
          {:data-uk-toggle "target: #container-nav"
           :href "/crusader/discounts"}
          [:span.uk-margin-small-right {:data-uk-icon "icon: bolt"}]
          " Discounts"]])
      (if (= "gm" (:role @user))
        [:li
         [:a
          {:data-uk-toggle "target: #container-nav"
           :href "/crusader/dungeon"}
          [:span.uk-margin-small-right {:data-uk-icon "icon: happy"}]
          " Dungeon"]])
      [:li
       [:a
        {:data-uk-toggle "target: #container-nav"
         :href "/crusader/checkout"}
        [:span.uk-margin-small-right {:data-uk-icon "icon: credit-card"}]
        " Kassza"]]
      [:li
       [:a
        {:href "/crusader/reservation"}
        [:span.uk-margin-small-right {:data-uk-icon "icon: calendar"}]
        " Foglalások"]]
      [:li
       [:a
        {:href "/crusader"}
        [:span.uk-margin-small-right {:data-uk-icon "icon: info"}]
        " Patch notes"]]
      (if (= "admin" (:role @user))
        [:li
         [:a
          {:href "/crusader/admin"}
          [:span.uk-margin-small-right {:data-uk-icon "icon: code"}]
          " Admin"]])
      [:li.uk-nav-divider]
      [:li
       [:a
        {:href "/logout"}
        [:span.uk-margin-small-right {:data-uk-icon "icon: sign-out"}]
        " Kijelentkezés"]]])))



(defn crusader-navbar []
  (let [user (subscribe [:data :user])
        actual-page (subscribe [:data :actual-page])]
    (reagent/create-class
      {:reagent-render
       (fn []
         [:div {:style {:height "60px"} :class (if (= @actual-page "home-page") "uk-hidden" "")}
          [:div#container-nav {:data-uk-offcanvas true}
           [:div.uk-offcanvas-bar.uk-padding-remove.uk-flex.uk-flex-column
            {:style {:background "rgba(0,0,0,0.9)"}}
            [crusader-sidenav]]]
          [:nav#stick
           {:data-uk-grid true
            :style {:z-index 1000 :cursor "pointer"}}

           [:div.uk-navbar-left
              [:div.stick-logo.scale-hover
               [:img.rotate.uk-margin-small-left
                {:src "/img/lvlup-logo-transparent.png" :data-uk-toggle "target :#container-nav"}]]]
           [:div.uk-padding-remove
              {:data-uk-toggle "target :#container-nav"}
            [:div.uk-margin-left
             [:div {:href "/crusader"}
              [:h1.uk-margin-remove.uk-padding-remove.uk-text-center
               {:style {:font-size "2em" :color "white"}}
               (decide-title (str @actual-page))]]
             [:div.uk-text-meta.uk-text-small.uk-text-center.uk-margin-remove [read-now]]]]
              ;[:li.uk-nav-divider]
              ;[:li [:a {:href "/logout"} "Kijelentkezés"]]]]]]]
           [:div.uk-navbar-right
            [:h1.uk-heading-bullet.uk-padding-small.uk-margin-remove.uk-padding-remove-vertical
             {:style {:color "white"}}
             (str
               (:city @user)
               "-"
               (:role @user))]
            (comment [:div.uk-margin-remove.uk-padding-small
                      {:data-uk-tooltip "Fullscreen"
                       :on-click #(.fullscreen js/window)}
                      [:img {:width "20"
                             :src "/Icons/fullscreen.svg"}]])]]])})))



(defn franchise-slider []
  [:div.uk-position-relative.uk-visible-toggle.uk-light
   {:data-uk-slideshow "animation: pull; autoplay: true; autoplay-interval: 3000"}
   [:ul.uk-slideshow-items
    (map-indexed #(-> ^{:key %1}[:li {:style {:border-radius "10px"}}
                                 [:img
                                  {
                                   :data-uk-cover "uk-cover",
                                   :alt "",
                                   :src (str "/img/slider/" %2 ".jpg")}]])
                 (map inc (range 6)))]



   [:a.uk-position-center-left.uk-position-small
    {:data-uk-slideshow-item "previous",
     :data-uk-slidenav-previous "",
     :href "#"}]
   [:a.uk-position-center-right.uk-position-small
    {:data-uk-slideshow-item "next",
     :data-uk-slidenav-next "",
     :href "#"}]])

(defn franchise []
  [:div.uk-container.uk-container-large
   [:div.uk-flex-center {:data-uk-grid true}
    [:div {:class "uk-width-3-4@s uk-width-2-3@m uk-width-1-1"}
     [:div.uk-card.uk-card-body
      [:div [:a {:href "/" :data-uk-tooltip "title: Vissza a főoldalra"}
             [:img {:src "/img/bar.jpg"}]]]
      [:h1.uk-heading-line.uk-text-center.franchise-szoveg
       [:span "Nyiss Te is eSport Bárt!"]]
      [:div.franchise-szoveg
       [:p "Légy Te is részese Magyarország egyik leggyorsabban fejlődő és legfelkapottabb jelenségének: az eSportnak és az eSport Bároknak!"]
       [:p "Az eSport bárok mára már a magyarországi videojátékos közösség éltető központjai és irányítói lettek, különböző versenyek szervezésével, a közösség szüntelen építésével és olyan saját eSportolók nevelésével, akik európai szinten is megállják a helyüket.\n"]
       [:p "Ez az eSport bárak esszenciája, legalábbis szerintünk. \n"]
       [:p "Mi a LvL Up-nál hiszünk a közösség erejében, abban, hogy ami jó, azt még jobbá lehet tenni és hogy a videojátékok és az eSport világa szinte végtelen potenciált rejt magában."]
       [:p "Ennek a víziónak a megvalósítására keresünk partnereket, akik hasonlóan gondolkoznak és elég elhivatottsággal rendelkeznek, hogy nyissanak és üzemeltessenek egy saját eSport bárt."]
       [:p "A LvL Up mára az ország egyik legnagyobb és legelismertebb eSport szervezetévé nőtte ki magát, eSportolóink a legnagyobb hazai versenyeken vesznek részt és érnek el komoly eredményeket."]]]]


    [:div.uk-margin-remove {:class "uk-width-3-4@s uk-width-2-3@m uk-width-1-1"}
     [franchise-slider]]
    [:div.franchise-szoveg {:class "uk-width-3-4@s uk-width-2-3@m uk-width-1-1"}
     [:div.uk-card.uk-card-body
      [:ul.uk-list.uk-list-bullet.uk-text-left "Amiket nyújtani tudunk Franchise partnereinknek:"
       [:li "Szponzorok és bevált partneri kapcsolatok"]
       [:li "A LvL Up által már elért kedvezmények és akciók"]
       [:li "Háttértámogatás"]
       [:li "Marketing támogatás"]
       [:li "Dinamikus, fiatal csapat"]
       [:li "Rugalmasság minden téren"]
       [:li "Folyamatos innováció"]
       [:li "Know How"]]
      [:ul.uk-list.uk-list-bullet.uk-text-left "Amit elvárunk Franchise partnereinktől:"
       [:li "Megbízhatóság"]
       [:li "Kitartás"]
       [:li "Lelkesedés"]
       [:li "Önállóság"]
       [:li "Érdeklődés az eSport világa felé"]]
      [:p "Ha úgy érzed, hogy Téged is érdekel ez a dolog, vagy csak többet akarsz megtudni,
       esetleg kérdésed van, ne hezitálj, hívd Szilágyi Botondot a " [:a {:href "tel:06204648245"} "0620/4648245"]
       " -ös
       telefonszámon, vagy írj nekünk az "
       [:a {:href "mailto:info@lvlup.hu"} "info@lvlup.hu"]
       " címre!\n"]]]]])




(defn current-page []
  (let [user (subscribe [:data :user])
        actual-page (subscribe [:data :actual-page])]
    (reagent/create-class
      {:reagent-render
       (fn []
         [:div.uk-offcanvas-content
          {:style
           {:background-image "url('../img/shattered-island.gif')" :min-height "100vh" :min-width "100vw"}}
          ;"loooool"
          (if (some #(= % @actual-page) ["admin" "crusader" "dungeon" "reservation" "checkout" "statistics" "discounts"])
            [crusader-navbar])
          ;(str "Muhaha: " @actual-page)
          (case @actual-page
            "franchise" [franchise]
            "szeged" [home-template]
            "debrecen" [home-template]
            "admin" [:div
                     (if (= "admin" (:role @user))
                       [admin]
                       [:h2.uk-heading-hero "Mondd hogy jóbarát és lépj be!"])]
            "crusader"  [:div.uk-width-1-1
                         [crusader]]
            "dungeon"    [:div ;{:style {:background-image "url('../img/cash.jpg')" :background-size "cover"}} ;:min-height "100vh"}}
                          [dungeon]]
            "checkout"    [checkout]
            "reservation"   [:div {:style {:background-image "url('/img/cash.jpg')" :background-size "cover" :min-height "100vh"}}
                             [reservation]]
            "discounts"  [:div {:style {:background-image "url('/img/cash.jpg')" :background-size "cover" :min-height "100vh"}}
                          [discounts]]
            "statistics"  [:div {:style {:background-image "url('/img/cash.jpg')" :background-size "cover" :min-height "100vh"}}
                           [statistics]]
            "home-page"   [home-page]
            [not-found])])})))

;; -------------------------
;; Routes

(secretary/defroute "/" []
                    (dispatch [:set-actual-page "home-page"]))

(secretary/defroute "/franchise" []
                    (dispatch [:set-actual-page "franchise"]))

(secretary/defroute "/szeged" []
                    (dispatch [:set-actual-page "szeged"]))

(secretary/defroute "/debrecen" []
                    (dispatch [:set-actual-page "debrecen"]))

(secretary/defroute "/crusader" []
                    (start-router!)
                    (dispatch [:set-actual-page "crusader"]))



(secretary/defroute "/crusader/:a"  [a]
                    (start-router!)

                    (dispatch [:set-actual-page a]))



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
