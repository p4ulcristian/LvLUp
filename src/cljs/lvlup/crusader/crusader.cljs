(ns lvlup.crusader.crusader)

(defn crusader []
  [:div {:data-uk-grid true}
        [:div {:class "uk-width-1-1@s uk-width-1-2@m uk-align-center"}]])
         
        ;[:img.uk-width-1-1 {:src "/img/fallout.png"}]])
        ;[:h1.uk-text-center {:style {:border-bottom "solid 2px red"}} "Under construction"]])

(comment
          [:div.uk-child-width-1-2 {:style {:height "100vh"} :data-uk-grid true}
           [:div.uk-card.uk-card-default.uk-text-center.uk-inline
            [:a.uk-position-center {:href "/crusader/reservation"}
                  [:img {:src "/Icons/reservation.svg"}]]]

           [:div.uk-card.uk-card-secondary.uk-text-center.uk-inline
            [:a.uk-position-center {:href "/crusader/dungeon"}
                      [:img {:src "/Icons/pc-white.svg"}]]]])
