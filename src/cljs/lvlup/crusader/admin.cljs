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
  [:div.uk-card.uk-flex-center.uk-child-width-1-4.uk-text-center.uk-padding-small.uk-margin-remove.admin-users
   {:data-uk-grid true}
   [:div [:b (:username data)]]
   [:div.uk-text-truncate (:password data)]
   [:div (:role data)]
   [:span {:on-click #(dispatch [:crusader/remove-user (:username data)])
           :data-uk-icon "icon: close; ratio: 1"}]])



(defn the-users []
  (let [all-users (subscribe [:data :users])
        user-atom (atom {:username ""
                         :password ""
                         :role ""
                         :city ""})]
    (reagent/create-class
      {:component-did-mount #(dispatch [:crusader/get-users])
       :reagent-render
       (fn []
         [:div.uk-padding
          [:div.uk-form.uk-card-default
           {:style {:border-radius "20px"}}
           [:form.uk-form.uk-padding.uk-grid-collapse.uk-child-width-1-2
            {:data-uk-grid true}
            [:input.uk-input.uk-text-center {:placeholder "Username" :on-change #(swap! user-atom assoc :username (-> % .-target .-value))}]
            [:input.uk-input.uk-text-center {:placeholder "Password" :on-change #(swap! user-atom assoc :password (-> % .-target .-value))}]
            [:input.uk-input.uk-text-center {:placeholder "Role"  :on-change #(swap! user-atom assoc :role (-> % .-target .-value))}]
            [:input.uk-input.uk-text-center {:placeholder "City"  :on-change #(swap! user-atom assoc :city (-> % .-target .-value))}]

            [:div.uk-button.uk-width-1-1.uk-button-primary.uk-margin-remove
             {:on-click #(dispatch [:crusader/add-user @user-atom])}
             "Hozzáadás"]]
           [:div.uk-padding.uk-padding-small.uk-margin-remove
            (map-indexed #(-> ^{:key %1}[user %2]) @all-users)]]])})))



(defn toggled [item active]
  [:div.admin-button
   {:on-click #(reset! active item)
    :class (if (= item @active)
             "active"
             "")}
   (str item)])

(defn toggler [items active]
  [:div.uk-flex-center {:data-uk-grid true}
   (map-indexed
     #(-> ^{:key %1}[toggled %2 active])
     items)])


(def random-colors
  ["Aqua" "lightgreen" "PaleTurquoise" "lime" "Bisque" "tan" "lightpink"
   "aqumarine" "aqua" "peachpuff" "lavender" "slategrey" "slateblue"])


(defn process-tree [tree number]
  (if tree
    (if (map? tree)
      [:div {:style {:padding-left (str (* number 10) "px")
                     :border "1px solid white"}}

       (map-indexed
         #(-> ^{:key %1}[:div
                         [:span.tree-design
                          {:style {:color "#E8B53B"
                                   :width "100%"}}
                          (str (key %2))]
                         (process-tree (second %2) (inc number))])
         tree)]
      [:span.uk-margin-small-left [:b (str tree)]])
    ""))

(defn the-dungeons []
  (let [dungeons (subscribe [:data :admin-dungeons])]
    (reagent/create-class
      {:component-did-mount #(dispatch [:admin/get-dungeons])
       :reagent-render
       (fn []
         [:div.uk-padding
          [:div.uk-card-default.uk-padding
           {:style {:border-radius "20px"}}
           [process-tree @dungeons 0]]])})))

(defn one-profile [[the-key data]]
  [:div [:b the-key]
   [:ul (map-indexed #(-> ^{:key %1}[:li (str (first %2))])
                     data)]])


(defn connected-users []
  (let [users (subscribe [:data :admin-uuids])]
    (reagent/create-class
      {:component-did-mount #(dispatch [:admin/get-uuids])
       :reagent-render
       (fn []
         [:div.uk-padding
          [:div.uk-card-default.uk-padding
           {:style {:border-radius "20px"}}

           (map-indexed #(-> ^{:key %1}[one-profile %2])
                        (group-by #(:uid (second %)) @users))]])})))

(defn admin []
  (let [active (atom :users)]
    (fn []
      [:div
       [toggler
        [:users :dungeon :connected-users :prices]
        active]
       (case @active
         :users [the-users]
         :dungeon [the-dungeons]
         :connected-users [connected-users]
         :else)])))



