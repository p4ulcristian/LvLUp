(ns lvlup.handler
  (:require [compojure.core :refer [GET POST defroutes]]
            [compojure.route :refer [not-found resources files]]
            [hiccup.page :refer [include-js include-css html5]]
            [hiccup.form :refer [hidden-field]]
            [lvlup.middleware :refer [wrap-middleware]]
            [ring.middleware.transit :refer [wrap-transit]]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.middleware.multipart-params :refer [wrap-multipart-params]]
            [compojure.response :refer [render]]
            [clojure.java.io :as io]
            [lvlup.db :as db]
            [ring.util.response :refer [response redirect content-type resource-response file-response]]
            [ring.middleware.gzip :refer [wrap-gzip]]
            [hiccup.element :refer [javascript-tag]]
            [ring.middleware.session :refer [wrap-session]]
            [postal.core :refer [send-message]]
            ;[ring.middleware.logger :refer [wrap-with-logger]]
            [lvlup.crusader :as crusader]
            [ring.middleware.anti-forgery :refer :all :as anti-forgery]
            ;[ring.util.anti-forgery :refer [wrap-anti-forgery]]
            [ring.middleware.params :refer [wrap-params]]
            [buddy.hashers :as hashers]
            [bidi.ring :refer [make-handler ->Resources ->ResourcesMaybe]]
            [buddy.auth :refer [authenticated? throw-unauthorized]]
            [buddy.auth.backends.session :refer [session-backend]]
            [buddy.auth.middleware :refer [wrap-authentication wrap-authorization]]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults site-defaults secure-site-defaults]]
            [config.core :refer [env]]))


(defn stop!  []  (crusader/stop-router!)) ;(crusader/stop-web-server!))
(defn start! [] (crusader/start-router!))

(def version "?v=323")

(start!)

(def pass "jokaiutca17")

(def server-email "info@lvlup.hu")

(def conn {:host "smtp.zoho.eu"
           :ssl true
           :user server-email
           :pass pass
           :port 465})

(defn send-email-to-fellow-gamer [req]
  (let []
    (send-message conn {:from "info@lvlup.hu"
                        :to "paul931224@gmail.com"
                        :subject "Gondolnád?"
                        :body [{:type "text/html; charset=utf-8"
                                :content (str
                                          "<h1>Szép volt!</h1>")}]})))

(defn mount-target []
  [:div#app
   [:div#sente-csrf-token {:data-csrf-token anti-forgery/*anti-forgery-token*}]
   [:div.uk-card.uk-card-primary.uk-height-viewport.uk-width-viewport.uk-inline
    {:style "background: url(../img/cash.jpg);
              background-size: cover;
              min-height: 100vh;
              min-width: 100vw"}
    [:span.uk-position-center {
                               :data-uk-spinner "ratio: 4"}]]])


(defn head []
  [:head
   [:meta {:charset "utf-8"}]
   [:meta {:name "viewport"
           :content "width=device-width, initial-scale=1"}]
   [:title "LvL Up"]
   ;[:meta {:name "description" :content ""}]
   [:link {:rel "icon" :href "/favicon.png"}]
   (javascript-tag "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                   (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                   m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                   })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
                   ga('create', 'UA-99055366-1', 'auto');
                   ga('send', 'pageview');")
   (include-css "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.8/css/uikit.min.css")
   (include-css (str "/css/style.css" version))])

(defn head-crusader []
  [:head
   [:meta {:charset "utf-8"}]
   [:meta {:name "viewport"
           :content "width=device-width, initial-scale=1"}]
   [:title "LvLUP Crusader"]
   [:link {:rel "icon" :href "/favicon.png"}]

   (include-css "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.8/css/uikit.min.css")
   (include-css "/css/timetablejs.css")
   (include-css "https://npmcdn.com/flatpickr/dist/themes/dark.css")
   (include-css "/css/classic.css")
   (include-css "/css/nouislider.min.css")
   (include-css (str "/css/crusader.css" version))

   (include-css "/css/classic.date.css")
   (include-css "/css/classic.time.css")
   (include-css "https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css")])

(defn loading-page-crusader [req]
  (if-not (authenticated? (:session req))
    (throw-unauthorized)
    (html5
     (head-crusader)
     [:body#fullscreen {:class "body-container"}
      (mount-target)
      (include-js "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js")
      (include-js "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.8/js/uikit.min.js")
      (include-js "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.8/js/uikit-icons.min.js")
      ;(include-js "https://cdnjs.cloudflare.com/ajax/libs/interact.js/1.2.8/interact.min.js")
      (include-js "https://cdn.jsdelivr.net/npm/flatpickr")
      (include-js "/externaljs/timetable.min.js")
      (include-js "/externaljs/picker.js")
      (include-js "/externaljs/nouislider.min.js")
      (include-js "/externaljs/picker.date.js")
      (include-js "https://npmcdn.com/flatpickr/dist/l10n/hu.js")
      (include-js "/externaljs/picker.time.js")
      (include-js "/externaljs/dragscroll.js")
      (include-js "/externaljs/fullscreen.js")
      (include-js "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js")
      (include-js (str "/js/app.js" version))])))

(defn loading-page []
  (html5
   (head)
   [:body {:class "body-container"}
    (mount-target)
    (include-js "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.8/js/uikit.min.js")
    (include-js "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.8/js/uikit-icons.min.js")
    (include-js (str "/js/app.js" version))]))

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
            (mount-target)
            (include-js "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js") (include-js "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.28/js/uikit.min.js")
            (include-js "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.28/js/uikit-icons.min.js")
            (include-js "/js/app3.js")])))

(defn login
  [request text]
  (let []
    (html5
      (head-crusader)
      [:body
       [:div {:style "height: 100vh; background-image: url(\"/img/login.jpg\")"
              :class "uk-background-blend-darken uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle"}
        ;[:img {:src "/img/login.jpg"}]
        [:div
         [:form.uk-padding {:method "post" :style "background: rgba(255,255,255,0.4); border-radius: 20px "}
          [:div {:class "uk-width-1-1@s uk-width-1-2@m uk-align-center"} [:img.uk-align-center {:src "/img/lvlup-logo-transparent.png"}]]
          [:div.uk-form {:class "uk-center uk-width-1-1@s uk-width-1-2@m uk-align-center" :data-uk-grid true}
           [:input.uk-input.uk-text-center {:placeholder "Felhasználónév" :name "username" :type "text" :id "username"}]
           [:input {:type "hidden" :name "__anti-forgery-token" :value (force *anti-forgery-token*)}]
           [:input.uk-input.uk-text-center {:placeholder "Jelszó" :name "password" :type "password"}]
           [:input.uk-button.uk-button-secondary.uk-align-center {:type "submit" :value "Bejelentkezés!"}]]]]]])))

(defn login-authenticate
  [request]
  (let [username (get-in request [:form-params "username"])
        password (get-in request [:form-params "password"])
        session (:session request)
        user (db/find-user username)]
    (if (hashers/check password (:password user))
      (let [next-url (get-in request [:query-params :next] "/crusader")
            updated-session (assoc session :identity username :uid username :role (:role user) :city (:city user))]
                                           ;:city (:city user))]
        (-> (redirect next-url)
            (assoc :session updated-session)))

      (let []
        (-> (redirect "/login")
            (assoc :session nil))))))

(def routes
  ["/"
   [["chsk" {:get (fn [req] (crusader/ring-ajax-get-or-ws-handshake req))
             :post (fn [req] (crusader/ring-ajax-post req))}]
    ["login" {:get (fn [req] {:status 200 :body (login req "LvLUP StaFF") :headers {"Content-Type" "text/html"}})
              :post (fn [req] (login-authenticate req))}]
    ["file" (->ResourcesMaybe {:prefix "public/"})]
    ["logout" (fn [req] (-> (redirect "/login")
                            (assoc :session {})))] ;:session {}))
    ["send-email" (fn [req] (send-email-to-fellow-gamer req))]
    ["crusader" {true (fn [req] {:status 200 :body (loading-page-crusader req) :headers {"Content-Type" "text/html"}})}]
    [true (fn [req] {:status 200 :body (loading-page) :headers {"Content-Type" "text/html"}})]]])

(def app
  (let [handler (make-handler routes)]
    (-> handler
        (wrap-authorization auth-backend)
        (wrap-authentication auth-backend)
        (wrap-defaults (assoc site-defaults :proxy true)); :cookies false))
        (wrap-reload)
        ;(wrap-anti-forgery)
        ;ring.middleware.keyword-params/wrap-keyword-params
        ;ring.middleware.params/wrap-params
        (wrap-transit)
        (wrap-params)
        (wrap-multipart-params)
        ;(wrap-with-logger)
        (wrap-session)
        (wrap-gzip))))
