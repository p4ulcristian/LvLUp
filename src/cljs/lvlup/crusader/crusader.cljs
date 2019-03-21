(ns lvlup.crusader.crusader
  (:require
    [reagent.core :as reagent]))




(defn patch-card [title content]
  [:div
   [:h1.uk-center.uk-heading-line.uk-margin-remove.uk-text-center [:span title]]
   [:ul.uk-list.uk-list-striped.uk-text-center
    (map-indexed #(-> ^{:key %1} [:li %2])
                 content)]])


(defn crusader []
  [:div.uk-align-center.uk-container.uk-padding-large.uk-width-2-3
   [:div.uk-card.uk-card-default
    {:style {:border-radius "5px"
             :background "rgba(255,255,255,0.7)"}}
    [:div.uk-card-body
     [:p.uk-text-meta.uk-text-center "Minden új verzió után érdemes Ctrl+Shift+R-rel frissíteni az oldalt."]
     [patch-card "Welcome Szombathely"
      [[:div "Kérdéseket, felvetéseket, problémabejelentéseket ide küldjétek -> " [:a {:href "mailto:paul931224@gmail.com"} "paul931224@gmail.com"]]
       [:h2 "Bugfix/Miscellaneous"]
       [:li "Kassza visual bug javítva"]
       [:li "Beállítható árak báronként"]
       [:li "Új item, kis monster"]
       [:li "Dungeonben kis rendezés"]]]
     [patch-card "Patch 199"
      [[:b "Pult"]
       [:div "A monsternél megjelenik a vásárlás időpontja"]
       [:div "Továbbra is pirossal jelennek meg azok akiknek van nem fizetett számlájuk."]
       [:div "Akinek még van a nevén gép, narancssárgával jelenik meg."]
       [:div "A fizetett számláknál \"Mutass többet \" gomb betölt még 20 számlát, időrendben"]
       [:b "GM"]
       [:div "A keresés mostantól nem érzékeny az ékezetekre, szóval \"noemi\" kiadja Noémit"]
       [:div "Bekerült egy -0.5 és egy +0.5-ös bérletgomb közkívánatra."]
       [:div "Foglalás kezdőintervalluma 16:00->21:00 helyett 16:00->19:00 lett"]
       [:div "Új eszköz: VR. Árak félóránként: 550->990->1490->1990->+ 500 félóránként"]
       [:b "fail :("]
       [:div "Nem fizetett számlák csak kép formájában vannak meg, elvesztek update alatt. Akinek kell írjon nyugodtan."]]]

     [patch-card "Welcome Debrecen"
      [[:div "Kérdéseket, felvetéseket, problémabejelentéseket ide küldjétek -> " [:a {:href "mailto:paul931224@gmail.com"} "\\O.O/"]]
       [:div.uk-text-center "Good luck, have fun!"]
       [:div [:img {:src "/img/debrecen.jpg"}]]]]
     [patch-card "Patch 178 (gm)"
      ["Színek müködnek, új design"
       "Regisztráció javítva 0 regisztrált felhasználónál"]]
     [patch-card "Patch 177 (pultos)"
      ["A fizetendő számlák rózsaszínek, ha a játékosnak van fizetetlen számlája!"]]

     [patch-card "Patch 176 (pultos)"
      ["Világoskékek a számlák, ha még lent játszik egy eszközön"
       "Számlák rendezve id alapján."]]
     [patch-card "Patch 175 (gm)"
      ["Leültetés gomb megint nagy (praktikusági szempontok)"
       "Átültetés megjelenítési bugja javítva"]]
     [patch-card "Patch 174 (gm)"
      ["Átültetés gomb hozzáadva, mostmár gépet is kilehet választani, nem csak embert"
       "Regisztráció menete újragondolva, '11'-es probléma megoldva"
       "18 óra 28-ra javítva tooltipben"]]

     [patch-card "Patch 172"
      ["Kassza már nem törli lassan az elemeket, valamint nem lehet duplikálni semmit."
       "Dungeonben a monster gomb is értesítést küld"
       "bugfix, kevesebb renderelés"]]
     [patch-card "Patch 171" ["Kasszában nagyobb gomb, jelzi hány szabad hely van még, fizetésgombok nagyobb térköz"
                              "Dungeon regisztráció javítva"]]
     [patch-card "Patch 170" ["bugfix, foglalás"]]
     [patch-card "Patch 169 - Kassza"
      ["Három szekcióra lett bontva a kassza, Fizetendő, Fizetetlen, Fizetett."
       "A dungeonben kiütött számlák (gépek, Monster!, Bérletek!) a Fizetendő fül alá kerülnek"
       "A nem fizetett kategóriába helyezett emberek piros betűvel jelennek meg a GM-nek"
       "A DUNGEON gomb a még lent játszó embereket mutatja meg, és ki lehet számláztatni őket itt is, a GM segítsége nélkül"
       "A fizetendő kategóriából még vissza lehet ültetni az embereket a dungeonbe, amennyiben nem lett elfoglalva a helyük."
       "A fizetetlen kategóriából csak fizetettbe lehet átrakni, bérlettel vagy készpénzzel"
       "A fizetett kategóriában a legutóbbi 10 számla jelenik meg, bérlettel fizetés esetén 0 Ft-os számla keletkeződik"]]
     [patch-card "Patch 169 - Dungeon"
      ["Nem kell többet behúzni az embereket az oldalpanelból, valamint oldalpanel sincsen."
       "A kereső mostmár felcserélt nevek esetén és kiadja a keresett személyt."
       "A keresőben pirossal megjelenőknek fizetetlen számlájuk van (nem csak fizetendőbe vannak, hanem át lettek rakva a fizetetlenbe)"
       "A keresőben kattintás kijelöli a személyt."
       "A kijelölt személyt nevét a nevére való kattintással szerkeszthetünk."
       "A bérletek számlákat generálnak! Kivéve a +-1 gombok, azok hibajavításra vannak."
       "A kijelölt személyt az ide ültetem gombra kattintva bárhol leültethetem."
       "Mobiloptimalizált! (elvileg)"
       "A gépről gépre áthúzás továbbra is müködik."]]
     [patch-card "Patch 169 - General"
      ["Új oldalmenü (megint)"
       "Szerepek: GM, Pultos, Tulajdonos, Admin"
       "Városok: Szeged, Debrecen"
       "Jelszavak kódolva vannak tárolva."
       "A dungeon és kassza állapota külön választva a members, reservation és final-invoices adatbázisoktól."]]

     [patch-card "Patch notes 145 (hot-fix)"
      ["A vasárnap beálltával random hiba, megoldva, nem fordul elő többet."
       "Ha hamarabb megjelent az oldal mint betöltött, akkor sosem töltötte be a neveket, javítva."]]
     [patch-card "Patch notes 144 (bugfix)" []]



     [patch-card "Patch notes 143 (bugfix)"
      ["A keresés már nem feledteti el a már ülő emberek neveit. :)"
       "Patch notes menüpont hozzáadva!"
       "A menüanimáció balról jön be, fentről bebuggolt gyors váltássorozat esetén"]]

     [patch-card "Patch notes 141 - Kassza"
      ["A gépekhez mostmár színek társulnak, amiket a GM-ek választanak ki, így jelezve egy társaság egymáshoz tartozását"
       "Dungeon felirat alatt a jelenleg foglalt gépeket lehet látni"
       "Minden számlánál a plusz jelre kattintva előhoz egy Összesen panelt, melyben a számlák lesznek összeadva"]]
      ;[:li "Elvileg már nem lehet többszörös számlát vagy bérletlevonást csinálni."]]
     [patch-card "Patch notes 141 - Dungeon"
      ["A gépekhez színeket lehet rendelni, a gép nevére kattintva"
       "Elvileg már nem lehet többszörös számlát vagy bérletlevonást csinálni."]]]]])
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
