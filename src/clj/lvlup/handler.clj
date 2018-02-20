(ns lvlup.handler
  (:require [compojure.core :refer [GET POST defroutes]]
            [compojure.route :refer [not-found resources]]
            [hiccup.page :refer [include-js include-css html5]]
            [lvlup.middleware :refer [wrap-middleware]]
            [ring.middleware.transit :refer [wrap-transit]]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.middleware.multipart-params :refer [wrap-multipart-params]]
            [compojure.response :refer [render]]
            [clojure.java.io :as io]
            [ring.util.response :refer [response redirect content-type resource-response]]
            [ring.middleware.gzip :refer [wrap-gzip]]
            [hiccup.element :refer [javascript-tag]]
            [ring.middleware.session :refer [wrap-session]]
            [postal.core :refer [send-message]]
            [ring.middleware.logger :refer [wrap-with-logger]]
            [lvlup.crusader :as crusader]
            [ring.middleware.params :refer [wrap-params]]
            [monger.core :as mg]
            [monger.collection :refer [insert update update-by-id remove-by-id] :as mc]
            [monger.query :refer :all]
            [monger.operators :refer :all]
            [buddy.auth :refer [authenticated? throw-unauthorized]]
            [buddy.auth.backends.session :refer [session-backend]]
            [buddy.auth.middleware :refer [wrap-authentication wrap-authorization]]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults site-defaults]]
            [config.core :refer [env]])
  (:import [org.bson.types ObjectId]
           [com.mongodb DB WriteConcern]))


(defn stop!  []  (crusader/stop-router!)) ;(crusader/stop-web-server!))
(defn start! [] (crusader/start-router!))

(start!)


(def pass "jokaiutca17")

(def server-email "info@lvlup.hu")

(def conn {:host "smtp.zoho.eu"
           :ssl true
           :user server-email
           :pass pass
           :port 465})

(let [^MongoOptions opts (mg/mongo-options {:threads-allowed-to-block-for-connection-multiplier 300})
      ^ServerAddress sa  (mg/server-address "127.0.0.1" 27017)
      conn               (mg/connect sa opts)
      db   (mg/get-db conn "lvlup")]

    (defn add-reservation [item]
      (let [systems (:system-name item)]
          ;(mc/remove db "foglalasok")
          (doseq [system systems]
            (mc/insert-and-return db "foglalasok" (assoc (dissoc item :system-name :_id) :system-name system)))
          "Siker"))

    (defn delete-reservation [id]

            (mc/remove-by-id db "foglalasok" (ObjectId. id))
          "Siker")

    (defn get-reservations [type date]
      (let []
          (str
            (vec
              (map
               #(assoc % :_id (str (:_id %)))
               (with-collection db "foglalasok"
                (find {:date date :type type})))))))

    (defn get-systems []
          (str
            (vec
              (map
               #(assoc % :_id (str (:_id %)))
               (with-collection db "dungeon")))))










    (defn delete-from-anything [collection id]
     (let []
         (mc/remove-by-id db collection (ObjectId. id))
         "Siker"))


    (defn get-from-anything [collection]
       (str (vec (map #(assoc % :_id (str (:_id %))) (mc/find-maps db collection)))))
    (defn get-products []
       (str (vec (map #(assoc % :_id (str (:_id %)) :vehicle-link "") (mc/find-maps db "products"))))))

(defn send-email-to-fellow-gamer [req]
    (let []
     (send-message conn {
                         :from "info@lvlup.hu"
                         :to "paul931224@gmail.com"
                         :subject "Gondolnád?"
                         :body [{:type "text/html; charset=utf-8"
                                 :content (str
                                           "<h1>Szép volt!</h1>")}]})))





(def mount-target
  [:div#app
   [:div#loading-screen.row.valign-wrapper

         [:div.col.offset-s3.s6.progress.valign
           [:div.indeterminate]]]])


(defn head []
  [:head
   [:meta {:charset "utf-8"}]
   [:meta {:name "viewport"
           :content "width=device-width, initial-scale=1"}]
   [:title "LvL Up"]
   [:link {:rel "icon" :href "/favicon.png"}]
   (javascript-tag "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-99055366-1', 'auto');
  ga('send', 'pageview');")
   (include-css "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/css/materialize.min.css")
   (include-css "/css/normalize.css")
   (include-css "externaljs/albumviewer/jquery.fb.albumbrowser.css")
   (include-css "https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css")
   (include-css "https://fonts.googleapis.com/icon?family=Material+Icons")

   (include-css "/css/style.css")])

(defn head-crusader []
     [:head
      [:meta {:charset "utf-8"}]
      [:meta {:name "viewport"
              :content "width=device-width, initial-scale=1"}]
      [:title "LvLUP Crusader"]
      [:link {:rel "icon" :href "/favicon.png"}]

      (include-css "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/css/uikit.min.css")

      (include-css "/css/timetablejs.css")
      (include-css "/css/classic.css")
      (include-css "/css/nouislider.min.css")
      (include-css "/css/crusader.css")
      (include-css "/css/classic.date.css")
      (include-css "/css/classic.time.css")
      (include-css "https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css")])



(defn loading-page-crusader [req]
  (if-not
        (authenticated? (:session req))

        (throw-unauthorized)

        (html5
          (head-crusader)
          [:body {:class "body-container"}
           mount-target

           (include-js "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js")
           (include-js "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/js/uikit.min.js")
           (include-js "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/js/uikit-icons.min.js")
           (include-js "https://cdnjs.cloudflare.com/ajax/libs/interact.js/1.2.8/interact.min.js")
           (include-js "/externaljs/timetable.min.js")
           (include-js "https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js")
           (include-js "/externaljs/dragging.js")
           (include-js "/externaljs/picker.js")
           (include-js "/externaljs/nouislider.min.js")
           (include-js "/externaljs/picker.date.js")
           (include-js "/externaljs/picker.time.js")
           (include-js "/js/app.1.21.js")])))

(defn loading-page []
  (html5
    (head)
    [:body {:class "body-container"}
     mount-target
     (include-js "https://maps.googleapis.com/maps/api/js?key=AIzaSyCt16ohB_WYucOx-6S-d8je1Nor8Kw9pOY")
     (include-js "/externaljs/particle.js")
     (include-js "https://code.jquery.com/jquery-2.1.1.min.js")

     (include-js "externaljs/albumviewer/jquery.fb.albumbrowser.js")
     (include-js "externaljs/album-init.js")
     (include-js "externaljs/table-button.js")
     (include-js "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.28/js/uikit.min.js")
     (include-js "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.28/js/uikit-icons.min.js")


     (include-js "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/js/materialize.min.js")
     (include-js "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js")




     (include-js "https://use.fontawesome.com/cb88aeea27.js")
     (include-js "/js/app.1.21.js")]))



(defonce    web-server_ (atom nil)) ; (fn stop [])






(def authdata
  "Global var that stores valid users with their
   respective passwords."
  {:lvlup "foglalas"
   :paul "hip-hop93"})

(defn unauthorized-handler
 [request metadata]
 (cond
   ;; If request is authenticated, raise 403 instead
   ;; of 401 (because user is authenticated but permission
   ;; denied is raised).
   (authenticated? request)
   (-> (render (slurp (io/resource "error.html")) request)
       (assoc :status 403))
   ;; In other cases, redirect the user to login page.
   :else
   (let [current-url (:uri request)]
     (redirect (format "/login?next=%s" current-url)))))

(def auth-backend
  (session-backend {:unauthorized-handler unauthorized-handler}))

(defn admin [req]
      (if-not (authenticated? (:session req))

          (throw-unauthorized)
          (html5 (head)
           [:body {:class "body-container"}
                 mount-target

                 (include-js "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js")


                 (include-js "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.28/js/uikit.min.js")
                 (include-js "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.28/js/uikit-icons.min.js")
                 (include-js "/js/app3.js")])))


(defn login
  [request text]
  (let []
    (html5
        (head-crusader)
        [:body
            [:div.uk-card.uk-card-secondary {:style "height: 100vh"}

              [:div

                 [:form.uk-padding {:method "post"}
                    [:div {:class "uk-width-1-1@s uk-width-1-2@m uk-align-center"} [:img.uk-align-center { :src "/img/lvlup-logo-transparent.png"}]]
                    [:div.uk-form {:class "uk-center uk-width-1-1@s uk-width-1-2@m uk-align-center" :data-uk-grid true}
                       [:input.uk-input.uk-text-center {:placeholder "Felhasználónév" :name "username" :type "text" :id "username"}]
                       [:input.uk-input.uk-text-center {:placeholder "Jelszó" :name "password" :type "password"}]
                       [:input.uk-button.uk-button-primary.uk-align-center {:type "submit" :value "Bejelentkezés!"}]]]]]])))







(defn login-authenticate
 "Check request username and password against authdata
 username and passwords.
 On successful authentication, set appropriate user
 into the session and redirect to the value of
 (:next (:query-params request)). On failed
 authentication, renders the login page."
 [request]
 (let [username (get-in request [:form-params "username"])
       password (get-in request [:form-params "password"])
       session (:session request)
       found-password (get authdata (keyword username))]
   (if (and found-password (= found-password password))
     (let [next-url (get-in request [:query-params :next] "/crusader")
           updated-session (assoc session :identity (keyword username))]
       (-> (redirect next-url)
           (assoc :session updated-session)))

     (let []
       (login request "Rossz felhasználó-jelszó páros!")))))



(defroutes routes


  (GET "/" [] (loading-page))


  (GET "/crusader" req (loading-page-crusader req))
  (GET "/crusader/:a" req (loading-page-crusader req))
  (GET "/crusader/:a/:b" req (loading-page-crusader req))
  (POST "/send-email" req (send-email-to-fellow-gamer req))
  (GET  "/chsk" req (crusader/ring-ajax-get-or-ws-handshake req))
  (POST "/chsk" req (crusader/ring-ajax-post                req))
  (GET "/login" req (login req "LvLUP StaFF"))
  (POST "/login" [] login-authenticate)

  (GET "/foglalasok/:a/:b" [a b] (get-reservations a b))
  (GET "/systems" [] (get-systems))
  (POST "/add-foglalasok" req
    (let [p (:transit-params req)]
        (add-reservation
            { :date (:date p)
              :name (:name p)
              :type (:type p)
              :start-hour (:start-hour p)
              :finish-hour (:finish-hour p)
              :system-name (:system-name p)})))
  (POST "/delete-reservation" req
    (let [p (:transit-params req)]
        (delete-reservation p)))




  (GET "*" [] (loading-page))

  (resources "/")
  (not-found "Not Found"))





(def app
    (-> routes
        (wrap-defaults
            (assoc (assoc-in site-defaults [:security :anti-forgery] false) :proxy true))
        (wrap-reload)
        ring.middleware.keyword-params/wrap-keyword-params
        ring.middleware.params/wrap-params
        (wrap-authorization auth-backend)
        (wrap-authentication auth-backend)
        (wrap-transit)
        (wrap-params)
        (wrap-multipart-params)
        (wrap-with-logger)
        (wrap-session)
        (wrap-gzip)))
