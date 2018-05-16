(ns lvlup.sente
  (:require
   [cljs.core.async :as async  :refer (<! >! put! chan)]
   [taoensso.encore :as encore :refer-macros (have have?)]
   [taoensso.timbre :as timbre :refer-macros (tracef debugf infof warnf errorf)]
   [taoensso.sente  :as sente  :refer (cb-success?)]
   [taoensso.sente.packers.transit :as sente-transit]
   [cljs.reader :refer [read-string]]
   [re-frame.core :refer [subscribe dispatch dispatch-sync]]
   ;[lvlup.events]
   ;[lvlup.subs]
   [cljs.core.async :as async :refer (<! >! put! chan)]
   [taoensso.sente  :as sente :refer (cb-success?)]
   [jayq.core :refer [$ css html]])
  (:require-macros
   [cljs.core.async.macros :as asyncm :refer (go go-loop)]))

(defn notification [valami]
  (.notification js/UIkit (str "<div class='uk-padding-small uk-card uk-card-secondary notification-style'><span uk-icon='icon: check'></span> " valami "</div>") (clj->js {:pos "bottom-left"})))

(defn notification-sente [fmt & args]
  (let [msg (apply encore/format fmt args)]
    ;(timbre/debug msg)
    (notification (str msg))))

(let [;; For this example, select a random protocol:
      rand-chsk-type :auto
             ;_ (notification-sente "Randomly selected chsk type: %s" rand-chsk-type)

             ;; Serializtion format, must use same val for client + server:
      packer :edn ; Default packer, a good choice in most cases
             ;; (sente-transit/get-transit-packer) ; Needs Transit dep

      {:keys [chsk ch-recv send-fn state]}
      (sente/make-channel-socket-client!
       "/chsk" ; Must match server Ring routing URL
       {:type   rand-chsk-type
        :packer packer})]

  (def chsk       chsk)
  (def ch-chsk    ch-recv) ; ChannelSocket's receive channel
  (def chsk-send! send-fn) ; ChannelSocket's send API fn
  (def chsk-state state))

(defmulti -event-msg-handler
  "Multimethod to handle Sente `event-msg`s"
  :id) ; Dispatch on event-id


(defn event-msg-handler
  "Wraps `-event-msg-handler` with logging, error catching, etc."
  [{:as ev-msg :keys [id ?data event]}]
  (-event-msg-handler ev-msg))

(defmethod -event-msg-handler
  :default ; Default/fallback case (no other matching handler)
  [{:as ev-msg :keys [event]}]
  (notification-sente "Unhandled event: %s" event))

(defmethod -event-msg-handler :chsk/state
  [{:as ev-msg :keys [?data open?]}]
  (let [[old-state-map new-state-map] (have vector? ?data)]

    (if (:first-open? new-state-map)
      ;(notification-sente "Channel socket successfully established!: %s" new-state-map)
      (notification-sente (str "Connected to LvLUp :)" new-state-map)))
    (dispatch [:set-connection-state (:open? new-state-map)])))
      ;(notification-sente "Channel socket state change: %s"  new-state-map))))

(defmethod -event-msg-handler :chsk/recv
  [{:as ev-msg :keys [?data]}]
  (let [actual-page (subscribe [:data "actual-page"])
        [action-type data] ?data]
    ;(.log js/console (str action-type ?data))
    ;(dispatch [:set-loading false])
    (case action-type
      :dungeon/bug-check (.log js/console (str data))
      :dungeon/change (dispatch [:set-system data])
      :dungeon/get-reservations (dispatch [:set-reservations (read-string data)])
      :dungeon/max-id (dispatch [:set-max-id data])
      :dungeon/get-dungeon (do
                             (case @actual-page
                               (dispatch [:set-systems (read-string data)])))
      :dungeon/replace-member (do
                                (js/console.log (str data))
                                (dispatch [:add-player data]))
                               ;(chsk-send! [:dungeon/get-max-id])
                               ;(dispatch [:set-members (read-string data)]))


      :dungeon/waiting-pool (dispatch [:set-waiting-pool (read-string data)])
      :dungeon/get-invoices (dispatch [:set-invoices (read-string data)])
      (.log js/console (str action-type " - " data)))))

    ;(notification (str ev-msg))))

(defmethod -event-msg-handler :chsk/handshake
  [{:as ev-msg :keys [?data]}]
  (let [actual-page (subscribe [:data "actual-page"])
        [?uid ?csrf-token ?handshake-data] ?data]
      (case @actual-page
        "registration" (chsk-send! [:dungeon/get-max-id])
        "checkout" (dispatch [:dungeon/get-invoices])
        "dungeon" (dispatch [:dungeon/get-dungeon])
        "reservation" (dispatch [:dungeon/get-reservations])
        (notification (str "Hello " ?uid)))))

(defn chsk-disconnect! []
  (sente/chsk-disconnect! chsk))

(defn chsk-reconnect! []
  (sente/chsk-reconnect! chsk))

(defonce router_ (atom nil))
(defn  stop-router! [] (when-let [stop-f @router_] (stop-f)))
(defn start-router! []
  (stop-router!)
  (reset! router_
          (sente/start-client-chsk-router!
           ch-chsk event-msg-handler)))
