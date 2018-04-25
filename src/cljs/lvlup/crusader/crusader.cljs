(ns lvlup.crusader.crusader)

(defn crusader []
  [:div.uk-container.uk-padding-small {:data-uk-grid true}
        [:div {:class "uk-width-1-1@s uk-width-1-2@m uk-align-center"}
              [:div.uk-card.uk-card-secondary
               [:div.uk-card-body
                [:p.uk-text-meta.uk-text-center "Minden új verzió után érdemes Ctrl+Shift+R-rel frissíteni az oldalt."]

                [:h1.uk-center.uk-heading-line.uk-margin-remove.uk-text-center [:span "Patch notes 1.4.3"]]
                [:ul.uk-list-striped
                  [:li "A keresés már nem feledteti el a már ülő emberek neveit. :)"]
                  [:li "Patch notes menüpont hozzáadva!"]
                  [:li "A menüanimáció balról jön be, fentről bebuggolt gyors váltássorozat esetén"]]

                [:h1.uk-center.uk-heading-line.uk-margin-remove.uk-text-center [:span "Patch notes 1.4.1"]]
                [:h4 "Kassza"]
                [:ul.uk-list.uk-list-striped
                 [:li "A gépekhez mostmár színek társulnak, amiket a GM-ek választanak ki, így jelezve egy társaság egymáshoz tartozását"]
                 [:li "Dungeon felirat alatt a jelenleg foglalt gépeket lehet látni"]
                 [:li "Minden számlánál a plusz jelre kattintva előhoz egy Összesen panelt, melyben a számlák lesznek összeadva"]]
                 ;[:li "Elvileg már nem lehet többszörös számlát vagy bérletlevonást csinálni."]]
                [:h4 "Dungeon"]
                [:ul.uk-list.uk-list-striped
                 [:li "A gépekhez színeket lehet rendelni, a gép nevére kattintva"]
                 [:li "Elvileg már nem lehet többszörös számlát vagy bérletlevonást csinálni."]]]]]])
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
