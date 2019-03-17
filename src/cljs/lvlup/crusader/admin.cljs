(ns lvlup.crusader.admin
  (:require
    [reagent.core :as reagent :refer [atom]]
    [lvlup.sente :refer [chsk-send! start-router! chsk-reconnect! chsk-disconnect!]]
    [clojure.string  :as str]
    [cljs.core.async :as async  :refer (<! >! put! chan timeout)]
    [re-frame.core :refer [subscribe dispatch dispatch-sync]]
    [lvlup.events]
    [taoensso.sente  :as sente  :refer (cb-success?)]
    [lvlup.subs])
  (:require-macros
    [cljs.core.async.macros :as asyncm :refer (go go-loop)]))


(defn user [data]
  [:div.uk-card.uk-flex-center.uk-child-width-1-4.uk-text-center.uk-padding-small.uk-margin-remove
   {:data-uk-grid true}
   [:h4 (:username data)]
   [:h4.uk-text-truncate (:password data)]
   [:h4 (:role data)]
   [:span {:on-click #(dispatch [:crusader/remove-user (:username data)])
           :data-uk-icon "icon: close; ratio: 1.5"}]])

(defn admin []
  (let [dungeon (subscribe [:data "app-state"])
        all-users (subscribe [:data "users"])
        user-atom (atom {:username ""
                         :password ""
                         :role ""
                         :city ""})]
    (reagent/create-class
      {:component-did-mount #(dispatch [:crusader/get-users])
       :reagent-render
       (fn []
         [:div.uk-grid-collapse.uk-child-width-1-2 {:data-uk-grid true}
          [:div.uk-form.uk-card-secondary
           [:div.uk-grid.uk-flex-center.uk-child-width-1-3.uk-padding.uk-margin-remove {:data-uk-grid true}
            [:input.uk-text-center {:placeholder "Username" :on-change #(swap! user-atom assoc :username (-> % .-target .-value))}]
            [:input.uk-text-center {:placeholder "Password" :on-change #(swap! user-atom assoc :password (-> % .-target .-value))}]
            [:input.uk-text-center {:placeholder "Role"  :on-change #(swap! user-atom assoc :role (-> % .-target .-value))}]
            [:input.uk-text-center {:placeholder "City"  :on-change #(swap! user-atom assoc :city (-> % .-target .-value))}]

            [:div.uk-button.uk-width-1-1.uk-button-primary.uk-margin-remove
             {:on-click #(dispatch [:crusader/add-user @user-atom])}
             "Hozzáadás"]]
           [:div.uk-padding.uk-padding-small.uk-margin-remove
            (map-indexed #(-> ^{:key %1}[user %2]) @all-users)]
           (str @dungeon)]])})))