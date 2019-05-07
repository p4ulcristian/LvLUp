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

{"szeged" {:tarsas {1 {} 2 {} 3 {} 4 {} 5 {} 6 {} 7 {} 8 {} 9 {} 10 {} 11 {} 12 {} 13 {}}
           :prices {:items {:monster 450, :beginner 1750, :medium 3500, :hardcore 7000}, :systems {:pc {:price 175, :start [350 350]}, :ps {:price 150, :start [300 300]}, :xbox {:price 150, :start [300 300]}, :vr {:price 500, :start [550 550 990]}}}, :dungeon {7 {:number 7, :type "pc", :color "#222", :players {}}, 1 {:number 1, :type "pc", :color "#222", :players {}}, 4 {:number 4, :type "pc", :color "#222", :players {}}, 13 {:number 13, :type "ps", :color "#222", :players {}}, 6 {:number 6, :type "pc", :color "#222", :players {}}, 3 {:number 3, :type "pc", :color "#222", :players {}}, 12 {:number 12, :type "ps", :color "#222", :players {}}, 2 {:number 2, :type "pc", :color "#222", :players {}}, 11 {:number 11, :type "xbox", :color "#222", :players {}}, 9 {:number 9, :type "pc", :color "#222", :players {}}, 5 {:number 5, :type "pc", :color "#222", :players {}}, 14 {:number 14, :type "ps", :color "#222", :players {}}, 10 {:number 10, :type "pc", :color "#222", :players {}}, 8 {:number 8, :type "pc", :color "#222", :players {}}}, :checkout {:unpayed {"151ea20e-6476-49d9-bc80-48f16a54d8c5" {:member-id 1718, :controller :one, :color "#222", :number 10, :payed false, :name nil, :start "20181121T182430", :type "pc", :finish "20181121T195532", :id "151ea20e-6476-49d9-bc80-48f16a54d8c5", :price 525}, "e956a0e1-89b2-4cab-a531-14eba0886519" {:member-id 2182, :controller :one, :color "#222", :number 12, :payed false, :name nil, :start "20190305T220127", :type "ps", :spent-time "1 óra 22 perc ", :finish "20190305T232337", :id "e956a0e1-89b2-4cab-a531-14eba0886519", :discount false, :price 450, :datum-interval [:div "már. 5." [:b " " "Kedd"] [:div "22:01" " - " "23:23"]]}, "c7077cac-20b8-4360-89fe-220bbccb2ad1" {:member-id 2023, :controller :one, :color "#222", :number 9, :payed false, :name nil, :start "20190122T182523", :type "pc", :spent-time "0 óra 0 perc ", :finish "20190122T182524", :id "c7077cac-20b8-4360-89fe-220bbccb2ad1", :discount false, :price 350, :datum-interval [:div "jan. 22." [:b " " "Kedd"] [:div "18:25" " - " "18:25"]]}, "ffeadadc-910d-48a5-945d-e6e03915a7a0" {:member-id 1270, :controller :one, :color "#222", :number 13, :payed false, :name nil, :start "20180829T203706", :type "ps", :finish "20180829T212845", :id "ffeadadc-910d-48a5-945d-e6e03915a7a0", :price 300}, "5ac2c761-bb82-41fe-b6f8-05ec6a7844f0" {:member-id 1270, :controller :two, :color "#222", :number 13, :payed false, :name nil, :start "20180829T203707", :type "ps", :finish "20180829T212845", :id "5ac2c761-bb82-41fe-b6f8-05ec6a7844f0", :price 300}, "44c2a602-98be-4b89-9fbf-27085c1fafe8" {:member-id 312, :controller :one, :color "#222", :number 2, :payed false, :name nil, :start "20180811T151210", :type "pc", :finish "20180811T170129", :id "44c2a602-98be-4b89-9fbf-27085c1fafe8", :price 700}, "b10819e4-0e17-4e91-acac-c008d9146423" {:member-id 1514, :controller :one, :color "#222", :number 4, :payed false, :name nil, :start "20180905T141518", :type "pc", :finish "20180905T153849", :id "b10819e4-0e17-4e91-acac-c008d9146423", :price 525}, "e45647f4-d11a-47ec-91e7-10986aa57678" {:member-id 1692, :controller :two, :color "#222", :number 14, :payed false, :name nil, :start "20190307T210504", :type "ps", :spent-time "3 óra 0 perc ", :finish "20190308T000548", :id "e45647f4-d11a-47ec-91e7-10986aa57678", :discount false, :price 900, :datum-interval [:div "már. 7." [:b " " "Csütörtök"] [:div "21:05" " - " "00:05"]]}, "5464ac84-d6a1-41f1-8e7c-47a406ec3598" {:member-id 1914, :controller :one, :color "rgb(146,3,45)", :number 8, :payed false, :name nil, :start "20181214T000954", :type "pc", :spent-time "0 óra 59 perc ", :finish "20181214T010924", :id "5464ac84-d6a1-41f1-8e7c-47a406ec3598", :price 350, :datum-interval [:div "dec. 14." [:b " " "Péntek"] [:div "00:09" " - " "01:09"]]}, "a0714a8a-1e06-4fc1-816c-6c2cce723cbf" {:member-id 1568, :controller :one, :color "#222", :number 4, :payed false, :name nil, :start "20180913T151405", :type "pc", :finish "20180913T151447", :id "a0714a8a-1e06-4fc1-816c-6c2cce723cbf", :price 350}, "02591e54-06d8-4b3c-a6f3-26299b6227cd" {:member-id 171, :controller :one, :color "#222", :number 3, :payed false, :name nil, :start "20181215T180615", :type "pc", :spent-time "0 óra 50 perc ", :finish "20181215T185648", :id "02591e54-06d8-4b3c-a6f3-26299b6227cd", :discount false, :price 0, :datum-interval [:div "dec. 15." [:b " " "Szombat"] [:div "18:06" " - " "18:56"]]}, "c70ea457-427e-49b1-bc49-a9c7a23ed2be" {:member-id 1429, :controller :two, :color "#222", :number 13, :payed false, :name nil, :start "20180811T215508", :type "ps", :finish "20180812T010037", :id "c70ea457-427e-49b1-bc49-a9c7a23ed2be", :price 900}, "c8dd0998-d0e2-4b99-ada7-3e7c5a202ab3" {:member-id 312, :controller :one, :color "#222", :number 3, :payed false, :name nil, :start "20180811T151434", :type "pc", :finish "20180811T170130", :id "c8dd0998-d0e2-4b99-ada7-3e7c5a202ab3", :price 700}, "543aeaa6-f21a-42eb-93d5-5c4df267ea90" {:id "543aeaa6-f21a-42eb-93d5-5c4df267ea90", :type "monster", :price 450, :member-id 751, :finish "20190125T152336", :spent-time "-", :datum-interval [:div "jan. 25." [:b " " "Péntek"] [:div "15:23"]], :start ""}, "51519a00-c107-4850-9a5f-fc123fe29ba3" {:id "51519a00-c107-4850-9a5f-fc123fe29ba3", :type "monster", :price 450, :member-id 1034, :finish "20180811T221635"}, "456537ba-aa63-4e53-a8d1-1c4df68f964a" {:member-id 1914, :controller :one, :color "#222", :number 4, :payed false, :name nil, :start "20181214T000955", :type "pc", :spent-time "0 óra 59 perc ", :finish "20181214T010925", :id "456537ba-aa63-4e53-a8d1-1c4df68f964a", :price 350, :datum-interval [:div "dec. 14." [:b " " "Péntek"] [:div "00:09" " - " "01:09"]]}, "bd3a2a6c-3d70-4bbc-957c-3784cd807bd0" {:member-id 661, :controller :one, :color "#222", :number 15, :payed false, :name nil, :start "20180804T233044", :type "vr", :finish "20180805T004420", :id "bd3a2a6c-3d70-4bbc-957c-3784cd807bd0", :price 1490}, "9e1aa189-33fb-4065-998e-443cbaf84a63" {:member-id 2182, :controller :two, :color "#222", :number 12, :payed false, :name nil, :start "20190305T220128", :type "ps", :spent-time "1 óra 22 perc ", :finish "20190305T232337", :id "9e1aa189-33fb-4065-998e-443cbaf84a63", :discount false, :price 450, :datum-interval [:div "már. 5." [:b " " "Kedd"] [:div "22:01" " - " "23:23"]]}, "a99e5e8c-26f6-4adb-9ff9-e0217b9460d6" {:member-id 2123, :controller :two, :color "#222", :number 11, :payed false, :name nil, :start "20190216T234415", :type "xbox", :spent-time "0 óra 30 perc ", :finish "20190217T001417", :id "a99e5e8c-26f6-4adb-9ff9-e0217b9460d6", :discount false, :price 300, :datum-interval [:div "feb. 16." [:b " " "Vasárnap"] [:div "23:44" " - " "00:14"]]}, "38f23c2d-b9ab-4ead-adc4-93408544b58e" {:member-id 1993, :controller :two, :color "#222", :number 11, :payed false, :name nil, :start "20190113T004039", :type "xbox", :spent-time "0 óra 39 perc ", :finish "20190113T011943", :id "38f23c2d-b9ab-4ead-adc4-93408544b58e", :discount false, :price 300, :datum-interval [:div "jan. 13." [:b " " "Vasárnap"] [:div "00:40" " - " "01:19"]]}, "50aeef3f-98d9-4c73-85c6-52cbf451be80" {:member-id 2123, :controller :two, :color "#222", :number 11, :payed false, :name nil, :start "20190216T234420", :type "xbox", :spent-time "0 óra 30 perc ", :finish "20190217T001422", :id "50aeef3f-98d9-4c73-85c6-52cbf451be80", :discount false, :price 300, :datum-interval [:div "feb. 16." [:b " " "Vasárnap"] [:div "23:44" " - " "00:14"]]}, "03099157-c791-4c23-b303-d70bd023ba3b" {:member-id 1101, :controller :one, :color "#222", :number 5, :payed false, :name nil, :start "20181212T175327", :type "pc", :spent-time "2 óra 53 perc ", :finish "20181212T204700", :id "03099157-c791-4c23-b303-d70bd023ba3b", :price 1050, :datum-interval [:div "dec. 12." [:b " " "Szerda"] [:div "17:53" " - " "20:47"]]}, "4a62bc0f-f913-4c54-8d40-85c01caf1ec3" {:member-id 1692, :controller :one, :color "#222", :number 14, :payed false, :name nil, :start "20190307T210503", :type "ps", :spent-time "3 óra 0 perc ", :finish "20190308T000547", :id "4a62bc0f-f913-4c54-8d40-85c01caf1ec3", :discount false, :price 900, :datum-interval [:div "már. 7." [:b " " "Csütörtök"] [:div "21:05" " - " "00:05"]]}, "c394c5f6-5cf9-45b5-b060-b92117afbccd" {:id "c394c5f6-5cf9-45b5-b060-b92117afbccd", :type "monster", :price 450, :member-id 751, :finish "20190125T152335", :spent-time "-", :datum-interval [:div "jan. 25." [:b " " "Péntek"] [:div "15:23"]], :start ""}, "0e2b3e4d-ed87-4439-80df-074f281770ae" {:member-id 1993, :controller :one, :color "#222", :number 11, :payed false, :name nil, :start "20190113T004038", :type "xbox", :spent-time "0 óra 39 perc ", :finish "20190113T011943", :id "0e2b3e4d-ed87-4439-80df-074f281770ae", :discount false, :price 300, :datum-interval [:div "jan. 13." [:b " " "Vasárnap"] [:div "00:40" " - " "01:19"]]}}, :progress {"623b925b-f07e-401f-bcba-f61a3bc24200" {:member-id 1962, :controller :one, :color "#222", :number 9, :payed false, :name nil, :start "20190322T200841", :type "pc", :finish "20190322T221613", :id "623b925b-f07e-401f-bcba-f61a3bc24200", :discount false, :price 700}, "f0ea04d8-4572-4efb-b67b-6ec6d6759140" {:member-id 174, :controller :one, :color "#222", :number 10, :payed false, :name nil, :start "20190328T222910", :type "pc", :finish "20190328T233821", :id "f0ea04d8-4572-4efb-b67b-6ec6d6759140", :discount false, :price 350}, "a67a6f80-f6a2-4259-92ec-d62132555ba9" {:member-id 56, :controller :two, :color "#222", :number 12, :payed false, :name nil, :start "20190328T200620", :type "ps", :finish "20190328T224027", :id "a67a6f80-f6a2-4259-92ec-d62132555ba9", :discount false, :price 750}, "f56b1281-1067-4124-bff4-3cd444a8ad91" {:id "f56b1281-1067-4124-bff4-3cd444a8ad91", :type "medium", :price 3500, :member-id 268, :finish "20190328T195344"}, "610db1ad-cf6b-4321-bdbe-91b76ca3cd35" {:member-id 1877, :controller :one, :color "#222", :number 10, :payed false, :name nil, :start "20190324T115444", :type "pc", :finish "20190324T142447", :id "610db1ad-cf6b-4321-bdbe-91b76ca3cd35", :discount false, :price 875}, "fdf44cf4-836f-4904-8ed9-09855b70f397" {:member-id 174, :controller :one, :color "#222", :number 9, :payed false, :name nil, :start "20190328T222911", :type "pc", :finish "20190328T233822", :id "fdf44cf4-836f-4904-8ed9-09855b70f397", :discount false, :price 350}, "06c0568a-5b76-404e-9038-dde74dc2e9f2" {:member-id 56, :controller :one, :color "#222", :number 12, :payed false, :name nil, :start "20190328T200620", :type "ps", :finish "20190328T224026", :id "06c0568a-5b76-404e-9038-dde74dc2e9f2", :discount false, :price 750}}}, :discounts {}}
 "debrecen" {:tarsas {1 {} 2 {} 3 {} 4 {} 5 {} 6 {} 7 {} 8 {} 9 {} 10 {} 11 {} 12 {} 13 {}}
             :prices {:items {:monster 480, :beginner 1750, :medium 3500, :hardcore 7000}, :systems {:pc {:price 175, :start [350 350]}, :ps {:price 150, :start [300 300]}, :xbox {:price 150, :start [300 300]}, :vr {:price 500, :start [550 550 990]}}}, :dungeon {7 {:number 7, :type "pc", :color "#222", :players {}}, 1 {:number 1, :type "pc", :color "#222", :players {}}, 4 {:number 4, :type "pc", :color "#222", :players {}}, 15 {:number 15, :type "ps", :color "#222", :players {}}, 13 {:number 13, :type "ps", :color "#222", :players {}}, 6 {:number 6, :type "pc", :color "#222", :players {}}, 17 {:number 17, :type "xbox", :color "#222", :players {}}, 3 {:number 3, :type "pc", :color "#222", :players {}}, 12 {:number 12, :type "pc", :color "#222", :players {}}, 2 {:number 2, :type "pc", :color "#222", :players {}}, 19 {:number 19, :type "vr", :color "#222", :players {}}, 11 {:number 11, :type "pc", :color "#222", :players {}}, 9 {:number 9, :type "pc", :color "#222", :players {}}, 5 {:number 5, :type "pc", :color "#222", :players {}}, 14 {:number 14, :type "ps", :color "#222", :players {}}, 16 {:number 16, :type "ps", :color "#222", :players {}}, 10 {:number 10, :type "pc", :color "#222", :players {}}, 18 {:number 18, :type "vr", :color "#222", :players {}}, 8 {:number 8, :type "pc", :color "#222", :players {}}}, :checkout {:unpayed {"08712297-9574-4180-ac32-670584cffb20" {:member-id 1695, :controller :one, :color "#222", :number 14, :payed false, :name nil, :start "20190109T225551", :type "ps", :spent-time "1 óra 5 perc ", :finish "20190110T000143", :id "08712297-9574-4180-ac32-670584cffb20", :discount false, :price 300, :datum-interval [:div "jan. 9." [:b " " "Szerda"] [:div "22:55" " - " "00:01"]]}, "2d3cef35-f90e-4316-ab01-a476d7e58641" {:member-id 1543, :controller :one, :color "#222", :number 17, :payed false, :name nil, :start "20190216T192327", :type "xbox", :spent-time "0 óra 45 perc ", :finish "20190216T200840", :id "2d3cef35-f90e-4316-ab01-a476d7e58641", :discount false, :price 300, :datum-interval [:div "feb. 16." [:b " " "Szombat"] [:div "19:23" " - " "20:08"]]}, "3a1d6f71-53f0-4a0e-bc87-1545e6711ada" {:member-id 1917, :controller :one, :color "#222", :number 2, :payed false, :name nil, :start "20181217T145318", :type "pc", :spent-time "1 óra 26 perc ", :finish "20181217T161925", :id "3a1d6f71-53f0-4a0e-bc87-1545e6711ada", :discount false, :price 525, :datum-interval [:div "dec. 17." [:b " " "Hétfő"] [:div "14:53" " - " "16:19"]]}, "e9c1db6a-dcf3-45ed-a7b1-deb5809be0a1" {:member-id 1037, :controller :three, :color "#222", :number 13, :payed false, :start "20180918T153424", :type "ps", :finish "20180918T155251", :id "e9c1db6a-dcf3-45ed-a7b1-deb5809be0a1", :price 300}, "26818c63-93c4-4fbc-9672-aa6107e7f23b" {:member-id 2380, :controller :one, :color "#222", :number 13, :payed false, :name nil, :start "20190222T211557", :type "ps", :spent-time "0 óra 33 perc ", :finish "20190222T214925", :id "26818c63-93c4-4fbc-9672-aa6107e7f23b", :discount false, :price 300, :datum-interval [:div "feb. 22." [:b " " "Péntek"] [:div "21:15" " - " "21:49"]]}, "1e09e2d7-400a-4b0a-bbbc-940f1d138958" {:member-id 1543, :controller :two, :color "#222", :number 17, :payed false, :name nil, :start "20190216T192328", :type "xbox", :spent-time "0 óra 45 perc ", :finish "20190216T200840", :id "1e09e2d7-400a-4b0a-bbbc-940f1d138958", :discount false, :price 300, :datum-interval [:div "feb. 16." [:b " " "Szombat"] [:div "19:23" " - " "20:08"]]}, "4e918c40-2233-4f8e-b51d-5b3d26ed6ef4" {:member-id 1037, :controller :two, :color "#222", :number 13, :payed false, :start "20180918T145052", :type "ps", :finish "20180918T155252", :id "4e918c40-2233-4f8e-b51d-5b3d26ed6ef4", :price 300}, "8c226ea0-d2d0-4a7e-bb2e-7f3f84e17b08" {:member-id 137, :controller :one, :color "#222", :number 13, :payed false, :name nil, :start "20190127T151225", :type "ps", :spent-time "1 óra 48 perc ", :finish "20190127T170102", :id "8c226ea0-d2d0-4a7e-bb2e-7f3f84e17b08", :discount false, :price 600, :datum-interval [:div "jan. 27." [:b " " "Vasárnap"] [:div "15:12" " - " "17:01"]]}, "b10642f0-193e-41f5-8a53-472a39b63142" {:id "b10642f0-193e-41f5-8a53-472a39b63142", :type "monster", :price 450, :member-id 2551, :finish "20190316T220519", :spent-time "-", :datum-interval [:div "már. 16." [:b " " "Szombat"] [:div "22:05"]], :start ""}, "b304b75f-6af6-427a-bc97-63a557fa50d5" {:member-id 2380, :controller :two, :color "#222", :number 13, :payed false, :name nil, :start "20190222T211558", :type "ps", :spent-time "0 óra 33 perc ", :finish "20190222T214926", :id "b304b75f-6af6-427a-bc97-63a557fa50d5", :discount false, :price 300, :datum-interval [:div "feb. 22." [:b " " "Péntek"] [:div "21:15" " - " "21:49"]]}, "d3b43dbd-1783-4512-a195-cb41f63bcffa" {:member-id 1695, :controller :two, :color "#222", :number 14, :payed false, :name nil, :start "20190109T225553", :type "ps", :spent-time "1 óra 5 perc ", :finish "20190110T000145", :id "d3b43dbd-1783-4512-a195-cb41f63bcffa", :discount false, :price 300, :datum-interval [:div "jan. 9." [:b " " "Szerda"] [:div "22:55" " - " "00:01"]]}, "3420784f-5559-4251-bf1c-554b9f9be153" {:member-id 1558, :controller :one, :color "#222", :number 12, :payed false, :name nil, :start "20181106T224601", :type "pc", :finish "20181106T233623", :id "3420784f-5559-4251-bf1c-554b9f9be153", :price 350}, "97314a7f-c23a-4e34-b70b-8c8e4a8a49b3" {:member-id 1809, :controller :one, :color "#222", :number 18, :start "20190121T193447", :type "vr", :spent-time "1 óra 12 perc ", :finish "20190121T204732", :id "97314a7f-c23a-4e34-b70b-8c8e4a8a49b3", :price 990, :datum-interval [:div "jan. 21." [:b " " "Hétfő"] [:div "19:34" " - " "20:47"]]}}, :progress {}}, :discounts {}}
 "szombathely" {:tarsas {1 {} 2 {} 3 {} 4 {} 5 {} 6 {} 7 {} 8 {} 9 {} 10 {} 11 {} 12 {} 13 {}}
                :prices {:items {:kis-monster 390, :monster 490, :beginner 2500, :medium 5000, :hardcore 10000}, :systems {:pc {:price 250, :start [500 500]}, :ps {:price 250, :start [500 500]}, :xbox {:price 250, :start [500 500]}, :vr {:price 500, :start [550 550 990]}}}, :dungeon {7 {:number 7, :type "pc", :color "#222", :players {}}, 1 {:number 1, :type "pc", :color "#222", :players {}}, 4 {:number 4, :type "pc", :color "#222", :players {}}, 15 {:number 15, :type "xbox", :color "rgb(94,255,0)", :players {}}, 13 {:number 13, :type "ps", :color "#222", :players {}}, 6 {:number 6, :type "pc", :color "#222", :players {}}, 3 {:number 3, :type "pc", :color "#222", :players {}}, 12 {:number 12, :type "ps", :color "#222", :players {}}, 2 {:number 2, :type "pc", :color "#222", :players {}}, 11 {:number 11, :type "ps", :color "#222", :players {}}, 9 {:number 9, :type "pc", :color "#222", :players {}}, 5 {:number 5, :type "pc", :color "#222", :players {}}, 14 {:number 14, :type "xbox", :color "#222", :players {}}, 10 {:number 10, :type "pc", :color "#222", :players {}}, 8 {:number 8, :type "pc", :color "#222", :players {}}}, :checkout {:unpayed {"fc4ff4f4-e90c-4579-9569-a42f70c7134b" {:id "fc4ff4f4-e90c-4579-9569-a42f70c7134b", :type "monster", :price 490, :member-id 755, :finish "20190215T183941", :spent-time "-", :datum-interval [:div "feb. 15." [:b " " "Péntek"] [:div "18:39"]], :start ""}, "63ddf898-6706-4c7d-b98f-e343610ec307" {:id "63ddf898-6706-4c7d-b98f-e343610ec307", :type "monster", :price 490, :member-id 813, :finish "20190215T183944", :spent-time "-", :datum-interval [:div "feb. 15." [:b " " "Péntek"] [:div "18:39"]], :start ""}}, :progress {}}}}

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
     atallas-egy (t/date-time this-year 03 30)
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

  (defn tarsas-change [{:keys [event]} req]
    ":tarsas változása városonként"
    (let [[key change-map] event]
      (reset! local-db
              (assoc-in @local-db
                        [(:city (:session req)) :tarsas (first change-map)]
                        (second change-map)))))

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
    "Ez itt eldönti hogy több dátumot, vagy dátumintervallumot,
    valamint hogy tökmindegy melyik nap, vagy nem tökmindegy melyik
    nap."
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

