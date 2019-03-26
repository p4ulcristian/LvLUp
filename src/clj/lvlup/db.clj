(ns lvlup.db
  (:require ;[com.mongodb DB WriteConcern]
            [monger.core :as mg]
            [monger.collection :as mc]
            [monger.query :refer :all]
            [monger.operators :refer :all]
            [monger.joda-time]
            [buddy.hashers :as hashers]
            [clj-time.core :as t]
            [clj-time.predicates :as pr]
            [duratom.core :refer [duratom]]
            [clj-time.format :as f])
  (:import [org.bson.types ObjectId]))



(def opening-hours
  {1 [12 0]
   2 [12 0]
   3 [12 0]
   4 [12 2]
   5 [12 2]
   6 [12 2]
   7 [12 0]})

(defn decide-day [date open-hour]
  (if (<
        (t/hour date)
        open-hour)
    (t/minus date (t/days 1))
    date))

(defn is-offset? [date]
  (let
    [this-year (t/year date)
     atallas-egy (t/date-time this-year 03 25)
     atallas-ketto (t/date-time this-year 10 28)]
    (if (t/within?
          (t/interval atallas-egy atallas-ketto)
          date)
      true
      false)))

(defn add-offset [date offset]
  (t/to-time-zone
    date
    (t/time-zone-for-offset offset)))

(defn make-hun-time [date]
  (if (is-offset? date)
    (t/minus (add-offset date +2) (t/hours 2))
    (t/minus (add-offset date +1) (t/hours 1))))



(defn date-with-opening [date]
  (let [date-day (decide-day date
                             (first
                               (get opening-hours
                                    (t/day-of-week date))))]
    (make-hun-time
      (t/date-time
        (t/year date-day)
        (t/month date-day)
        (t/day date-day)))))






;magyar eltolás az időnek okt-marc
(defn hun-time [date]
  (if (is-offset? date)
    (add-offset date +2)
    (add-offset date +1)))



;magyar ido most
(defn hun-now []
  (hun-time (t/now)))

;Óra lekerese hh:mm formatum
(defn get-hour [date]
  (if date
    (t/hour date)))

;Ékezetek eltávolítása
(defn deaccent [str]
  "Remove accent from string"
  ;; http://www.matt-reid.co.uk/blog_post.php?id=69
  (let [normalized (java.text.Normalizer/normalize str java.text.Normalizer$Form/NFD)]
    (clojure.string/replace normalized #"\p{InCombiningDiacriticalMarks}+" "")))

;Varosok
(def cities
  ["szeged" "debrecen" "szombathely"])

;helyi atom
(def local-db
  (duratom
    :local-file
    :file-path "db/shared.edn"
    :init {"szeged" {}}))
;:rw {:read nippy/thaw-from-file
;     :write nippy/freeze-to-file))


(defn get-dungeons []
  (str @local-db))

;Adatbazis kezdete
(let [^MongoOptions opts (mg/mongo-options {:threads-allowed-to-block-for-connection-multiplier 300})
      ^ServerAddress sa  (mg/server-address "127.0.0.1" 27017)
      conn               (mg/connect sa opts)
      db   (mg/get-db conn "lvlup")]

  (defn get-member-with-id [member-ids req]
    (vec
      (map
        #(dissoc % :_id)
        (with-collection
         db (str (-> req :session :city) "members")
         (find {$or [{$or (apply vector
                                 (map (fn [a] (assoc {} :id a))
                                      member-ids))}]})
         (sort (array-map :id -1 :name 1))))))


  ;felhasznalok kereses varos alapjan
  (defn get-users-by-city [city]
    (vec
      (map
        :username
        (with-collection db "users"
                         (find {:city city})))))

  ;user megtalalasa
  (defn find-user [username]
    (let []
      (dissoc (mc/find-one-as-map db "users" {:username username}) :_id)))


  (defn find-users [usernames]
    (let []
      (str (vec (for [username usernames]
                  (dissoc (mc/find-one-as-map db "users" {:username username}) :_id))))))


  ;user megtalalasa
  (defn update-user [username req]
    (let []
      (mc/update db "users"
         {:username username}
         {"$addToSet"
          {:logged-in (str
                        (:value (get (:cookies req) "ring-session")))}})))



  ;osszes user lekerese, veszelyes
  (defn get-users [{:keys [event]}]
    (let [[key change-map] event]
      (vec
        (map
          #(dissoc % :_id)
          (with-collection db "users")))))


  ;user hozzaadasa
  (defn add-user [{:keys [event]}]
    (let [[key change-map] event]
      (mc/insert db "users" (assoc change-map :password (hashers/derive (:password change-map))))))

  ;user torlese
  (defn remove-user [{:keys [event]}]
    (let [[key change-map] event]
      (mc/remove-by-id db "users" (:_id (mc/find-one-as-map db "users" {:username change-map})))))

  ;Amikor a dungeonbe tortenik valami
  (defn dungeon-change [{:keys [event]} req]
   (let [[key change-map] event]
     (reset! local-db
             (assoc-in @local-db
                       [(:city (:session req)) :dungeon (:number change-map)]
                       change-map))))

  (defn add-discount [{:keys [event]} req]
    (let [[key change-map] event]
      (reset! local-db
              (assoc-in @local-db
                        [(:city (:session req)) :discounts (first change-map)]
                        (second change-map)))))

  (defn remove-discount [{:keys [event]} req]
    (let [[key change-map] event]
      (reset! local-db
              (assoc-in @local-db
                        [(:city (:session req)) :discounts]
                        (dissoc (get-in @local-db
                                        [(:city (:session req)) :discounts])
                                change-map)))))

  ;szamla valtoztatasa
  (defn modify-invoice [{:keys [event]} req]
    (let [[key change-map] event]
      (swap! local-db
              #(assoc-in %
                         [(:city (:session req)) :checkout]
                         (assoc {} :unpayed (dissoc
                                              (get-in % [(:city (:session req))
                                                         :checkout :unpayed])
                                              (:id change-map))
                                   :progress (dissoc
                                               (get-in % [(:city (:session req))
                                                          :checkout :progress])
                                               (:id change-map)))))))


  (defn get-invoices [{:keys [event]} req]
    (let [[key change-map] event]
      (vec
        (map
          #(dissoc
             (assoc % :_id (str (:_id %))
                      :start (str (:start %))
                      :finish (str (:finish %))
                      :pay-date (str (:pay-date %)))
             :open-date)
          (with-collection db (str (-> req :session :city) "invoices")
                           (find {})
                           (sort {:pay-date -1})
                           (skip change-map)
                           (limit 20))))))

  (defn get-payed-invoices [{:keys [event]} req]
    (let [[key change-map] event]
      (vec
        (map
          #(assoc % :_id (str (:_id %)))
          (with-collection db (str (-> req :session :city) "invoices"))))))


  ; (skip 0))))))

  (defn season-pass [{:keys [event]} req]
    (let [[key change-map] event]
      (mc/update db (str (-> req :session :city) "members") {:id (:member-id change-map)}
                 {$inc {:season-pass (:quantity change-map)}})
      (dissoc
        (mc/find-one-as-map db (str (-> req :session :city) "members") {:id (:member-id change-map)})
        :_id)))

  (defn update-member [{:keys [event]} req]
    (let [[key change-map] event]
      (mc/update db (str (-> req :session :city) "members") {:id (:id change-map)} change-map)
      ;(mc/find db "members" {:id (:id change-map)})
      (dissoc
        (mc/find-one-as-map db (str (-> req :session :city) "members") {:id (:id change-map)})
        :_id)))


  (defn add-member [{:keys [event]} req]
    (let [[key change-map] event
          max (:id (first (with-collection db (str (-> req :session :city) "members")
                                           (find {})
                                           (sort (array-map :id -1))
                                           (limit 1))))]

      (dissoc
        (mc/insert-and-return db (str (-> req :session :city) "members")
                              (assoc change-map :id (if max (inc max) 1)
                                                :search-name (clojure.string/lower-case (deaccent (:name change-map)))
                                                :season-pass 0
                                                :total-hours 0))
        :_id)))
  ;(send-all [:dungeon/replace-member
  ;           (dissoc
  ;            (mc/find-one-as-map db (str (-> req :session :city) "-members")
  ;                                {:id (:id change-map)}
  ;            :_id)))

  (defn make-searchable [the-map]
    (-> the-map :search deaccent clojure.string/lower-case))

  (defn get-members [{:keys [event]} req]
    (let [[key change-map] event]
      (vec
        (map
           #(dissoc % :_id)
           (with-collection
            db (str (-> req :session :city) "members")
            (find {$or [(if (= "" (:search change-map))
                          {}
                          {$or [(cond
                                  (= (count (clojure.string/split (make-searchable change-map)  #" ")) 1)
                                  {:search-name {$regex (str (make-searchable change-map)  ".*")  $options "i"}}
                                  (= (count (clojure.string/split (make-searchable change-map)  #" ")) 2)
                                  {:search-name {$regex (str (second (clojure.string/split (make-searchable change-map) #" "))
                                                             ".*."
                                                             (first (clojure.string/split (make-searchable change-map)  #" "))
                                                             "|"
                                                             (first (clojure.string/split (make-searchable change-map) #" "))
                                                             ".*."
                                                             (second (clojure.string/split (make-searchable change-map)  #" ")))  $options "i"}}
                                  :else {:search-name {$regex (str (make-searchable change-map)  ".*")  $options "i"}})



                                {:id (read-string (:search change-map))}]})]})

               ;(fields [:id :name :season-pass])
               ;; it is VERY IMPORTANT to use array maps with sort
            (sort (array-map :id -1 :name 1))
            (limit 20)
            (skip (:number change-map)))))))

  (defn get-reservations [{:keys [event]} req]
    (let [[key change-map] event]
      (str
        (vec
           (map
            #(assoc % :_id (str (:_id %)))
            (with-collection db (str (-> req :session :city) "reservations")
                             (find {:date change-map})))))))

  (defn remove-reservations [{:keys [event]} req]
    (let [[key change-map] event]
      (mc/remove-by-id db (str (-> req :session :city) "reservations") (ObjectId. (:_id change-map)))
      (str
        (vec
           (map
            #(assoc % :_id (str (:_id %)))
            (with-collection db (str (-> req :session :city) "reservations")
                             (find {:date (:date change-map)})))))))

  (defn add-reservations [{:keys [event]} req]
    (let [[key change-map] event]
      (if (:_id change-map)
        (mc/update-by-id db (str (-> req :session :city) "reservations")
                         (ObjectId. (:_id change-map))
                         (dissoc change-map :_id))
        (mc/insert db (str (-> req :session :city) "reservations") change-map))
      (str
        (vec
           (map
            #(assoc % :_id (str (:_id %)))
            (with-collection db (str (-> req :session :city) "reservations")
                             (find {:date (:date change-map)})))))))

  (def custom-format
      (f/formatter "yyyy-MM-dd'T'HH:mm:ss.SSS"))

  (def custom-format-two
      (f/formatter "yyyyMMdd'T'HHmmss"))

  (def custom-format-three
    (f/formatter "yyyyMMdd"))

  (def custom-format-four
    (f/formatter "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"))

  (defn parse-date-str [one-item]
    (if (and one-item (not= "" one-item))
      (make-hun-time (f/parse custom-format-two one-item))
      ""))

  (defn parse-date-str-two [one-item]
    (if one-item
      (hun-time (f/parse custom-format one-item))))


  (defn days [the-days date]
    (let [decide (fn [day] (some #(= day %) the-days))]
      (cond
        (decide "monday") (pr/monday? date))))

  (def day-to-number
    {"sunday" 7
     "monday" 1
     "tuesday" 2
     "wednesday" 3
     "thursday" 4
     "friday" 5
     "saturday" 6})

  (defn get-day-numbers [days]
    (vec (map #(get day-to-number %)
              days)))


  (defn generate-date-from-vector [date-vector]
    (apply t/date-time date-vector))

  (defn actual-convert [a]
    (if a
      (make-hun-time a)))





  (def data-we-need
    {$project {:day {$dayOfWeek {:date "$open-date"}}
               :dateToString {"$dateToString" {:date "$open-date" :format "%Y-%m-%d" :timezone "Europe/Budapest"}}
               :price "$price"
               :type "$type"
               :start "$start"
               :finish "$finish"
               :member-id "$member-id"
               :open-date "$open-date"
               :number "$number"}})

  (defn date-range [first-date second-date]
    {$match {:open-date {$gte (hun-time (apply t/date-time first-date))
                         $lte (t/plus (hun-time (apply t/date-time second-date))
                                      (t/days 1))}}})

  (defn date-conditions [days dates]
    (let [{:keys [range multiple]} dates]
      (vec (remove #(= nil %)
                   [(if range (date-range (first range) (second range)))
                    data-we-need
                    (if multiple {$match {$or
                                          (vec (map (fn [a] (assoc {} :dateToString (clojure.string/join "-" a)))
                                                    multiple))}})
                    {$match (if (= 0 (count days))
                              {}
                              {$or (vec (map (fn [a]
                                               (assoc {} :day a))
                                             (get-day-numbers days)))})}]))))


  (defn client-format [offset]
    (f/with-zone
     (f/formatter "HH:mm")
     (offset)))

  (defn unparse-pls [date]
    (let [offset (fn [] (if (is-offset? date)
                          #(t/time-zone-for-offset 2)
                          #(t/time-zone-for-offset 1)))]
      (if (and (not= nil date) (not= "" date))
        (f/unparse (client-format (offset))
                 date)
        nil)))



  ;multiple or range {:range/:multiple [[2018 10 20] [] []]}
  ;days ["monday" ...]/[]
  (defn get-statistic [city days dates]
    (let [coll (str city "invoices")]
      (map
        (fn [b] (dissoc
                  (assoc b
                    :when [(unparse-pls (:start b))
                           (unparse-pls (:finish b))]
                    :finish (str (:finish b)))

                  :_id
                  :start :open-date))

        (mc/aggregate db coll
           (date-conditions days dates)
           :cursor {:batch-size 0}))))




  ;;Segítség a júliusi hibák kijavitasahoz
  (defn remove-short-dates []
    (for [city cities]
      (let [coll (str city "invoices")
            short-dates (vec (map (fn [a] (str (:_id a)))
                                  (get (group-by #(count (:pay-date %))
                                                 (for
                                                   [one-item (vec (mc/find-maps db coll {}))]
                                                   one-item))
                                       19)))]

        (for [the-date-id short-dates]
          (mc/remove-by-id db coll (ObjectId. the-date-id))))))


  ;Átkovertálom a szöveges dátumokat nem szövegessé, hogy a mongodb-vel is tudjak lekéréseket készíteni

  (defn add-open-dates []
    (for [item cities]
      (let [coll (str item "invoices")]
        (for
          [one-item (vec (mc/find-maps db coll {}))]
          (mc/update-by-id
            db
            coll
            (:_id one-item)
            (assoc (dissoc one-item :_id)
              :open-date (date-with-opening (:finish one-item))))))))

  (defn convert-dates []
    (for [item cities]
      (let [coll (str item "invoices")]
        (for
          [one-item (vec (mc/find-maps db coll {}))]
          (if (string? (:finish one-item))
            (mc/update-by-id
              db
              coll
              (:_id one-item)
              (assoc
                (dissoc one-item :_id)
                :finish (parse-date-str (:finish one-item))
                :start (parse-date-str (:start one-item))
                :pay-date (parse-date-str-two (:pay-date one-item)))))))))

  (defn do-all-nov []
    (do
      (remove-short-dates)
      (convert-dates)
      (add-open-dates)))

  (defn add-invoice [{:keys [event]} req]
    (let [[key change-map] event
          [what new-data] change-map
          checkout-way [(:city (:session req)) :checkout]
          checkout (get-in @local-db checkout-way)]
      (case what
        :unpayed
        (swap! local-db
                #(assoc-in % checkout-way
                   (assoc {}
                     :unpayed (assoc (:unpayed checkout) (:id new-data) new-data)
                     :progress (dissoc (:progress checkout) (:id new-data)))))
        :progress
        (swap! local-db
                #(assoc-in % checkout-way
                   (assoc {}
                     :progress (assoc
                                 (:progress checkout)
                                 (:id new-data)
                                 new-data)
                     :unpayed (dissoc (:unpayed checkout)
                                      (:id new-data)))))
        :payed
        (do
          (swap! local-db
                  #(assoc-in % checkout-way
                     (assoc {}
                       :unpayed (dissoc (:unpayed checkout) (:id new-data))
                       :progress (dissoc (:progress checkout) (:id new-data)))))
          (mc/insert db (str (-> req :session :city) "invoices")
                     (assoc new-data
                       :finish (parse-date-str (:finish new-data))
                       :start (parse-date-str (:start new-data))
                       :pay-date (hun-now)
                       :open-date (date-with-opening (hun-now))))))
      "Success"))

  (defn get-dates [coll]
    (map first (group-by #(count (str (:pay-date %)))
                         (vec (mc/find-maps db coll {})))))






  (defn add-reservation [item]
    (let [systems (:system-name item)]
      ;(mc/remove db "foglalasok")
      (doseq [system systems]
        (mc/insert-and-return db "foglalasok" (assoc (dissoc item :system-name :_id) :system-name system)))
      "Siker"))

  (defn delete-reservation [id]

    (mc/remove-by-id db "foglalasok" (ObjectId. id))
    "Siker")

  (defn get-reservations [{:keys [event]} req]
    (let [[key change-map] event]
      (str
        (vec
          (map
           #(assoc % :_id (str (:_id %)))
           (with-collection db (str (-> req :session :city) "reservations")
                            (find {:date change-map})))))))

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

