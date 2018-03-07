// Compiled by ClojureScript 1.9.229 {}
goog.provide('lvlup.events');
goog.require('cljs.core');
goog.require('taoensso.sente');
goog.require('ajax.core');
goog.require('goog.string');
goog.require('lvlup.sente');
goog.require('clojure.set');
goog.require('goog.string.format');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoices","invoices",1154128192),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"modal-data","modal-data",-1303581308),new cljs.core.Keyword(null,"search-member","search-member",-722973557),new cljs.core.Keyword(null,"reservation-modal","reservation-modal",-625486901),new cljs.core.Keyword(null,"connection-state","connection-state",-1405147924),new cljs.core.Keyword(null,"time-table","time-table",-791601298),new cljs.core.Keyword(null,"counter","counter",804008177),new cljs.core.Keyword(null,"sidenav-state","sidenav-state",-1117163405),new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"waiting-pool","waiting-pool",929771156),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"system-map","system-map",-1269318920),new cljs.core.Keyword(null,"actual-page","actual-page",1366885368),new cljs.core.Keyword(null,"reservations","reservations",1033801659),new cljs.core.Keyword(null,"active-member","active-member",715735357),new cljs.core.Keyword(null,"max-id","max-id",-1584630242)],[cljs.core.PersistentVector.EMPTY,(new Date()),null,"",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"id","id",-1388402092),"",new cljs.core.Keyword(null,"date","date",-1463434462),(new Date()),new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"finish","finish",-586688046),(0),new cljs.core.Keyword(null,"places","places",1043491706),cljs.core.PersistentVector.EMPTY], null),false,null,(0),(1),false,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,(0),(0)]);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-any-data","set-any-data",1867210995),(function (db,p__61285){
var vec__61286 = p__61285;
var _ = cljs.core.nth.call(null,vec__61286,(0),null);
var the_key = cljs.core.nth.call(null,vec__61286,(1),null);
var the_map = cljs.core.nth.call(null,vec__61286,(2),null);
return cljs.core.assoc.call(null,db,the_key,the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-search-member","set-search-member",-293591708),(function (db,p__61289){
var vec__61290 = p__61289;
var _ = cljs.core.nth.call(null,vec__61290,(0),null);
var the_map = cljs.core.nth.call(null,vec__61290,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"search-member","search-member",-722973557),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-connection-state","set-connection-state",1425405326),(function (db,p__61293){
var vec__61294 = p__61293;
var _ = cljs.core.nth.call(null,vec__61294,(0),null);
var the_map = cljs.core.nth.call(null,vec__61294,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"connection-state","connection-state",-1405147924),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-waiting-pool","set-waiting-pool",2014675583),(function (db,p__61297){
var vec__61298 = p__61297;
var _ = cljs.core.nth.call(null,vec__61298,(0),null);
var the_map = cljs.core.nth.call(null,vec__61298,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"waiting-pool","waiting-pool",929771156),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-loading","set-loading",984627975),(function (db,p__61301){
var vec__61302 = p__61301;
var _ = cljs.core.nth.call(null,vec__61302,(0),null);
var the_map = cljs.core.nth.call(null,vec__61302,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-active-member","set-active-member",-1587885058),(function (db,p__61305){
var vec__61306 = p__61305;
var _ = cljs.core.nth.call(null,vec__61306,(0),null);
var the_map = cljs.core.nth.call(null,vec__61306,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-member","active-member",715735357),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("dungeon","get-reservations","dungeon/get-reservations",436689929),(function (db,p__61309){
var vec__61310 = p__61309;
var _ = cljs.core.nth.call(null,vec__61310,(0),null);
var the_map = cljs.core.nth.call(null,vec__61310,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-reservations","dungeon/get-reservations",436689929),the_map], null),(8000),((function (vec__61310,_,the_map){
return (function (reply){
if(cljs.core.truth_(taoensso.sente.cb_success_QMARK_.call(null,reply))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-any-data","set-any-data",1867210995),new cljs.core.Keyword(null,"reservations","reservations",1033801659),cljs.reader.read_string.call(null,reply)], null));
} else {
return null;
}
});})(vec__61310,_,the_map))
);

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("dungeon","add-reservations","dungeon/add-reservations",-137546198),(function (db,p__61313){
var vec__61314 = p__61313;
var _ = cljs.core.nth.call(null,vec__61314,(0),null);
var the_map = cljs.core.nth.call(null,vec__61314,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","add-reservations","dungeon/add-reservations",-137546198),the_map], null),(8000),((function (vec__61314,_,the_map){
return (function (reply){
if(cljs.core.truth_(taoensso.sente.cb_success_QMARK_.call(null,reply))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-any-data","set-any-data",1867210995),new cljs.core.Keyword(null,"reservations","reservations",1033801659),cljs.reader.read_string.call(null,reply)], null));
} else {
return null;
}
});})(vec__61314,_,the_map))
);

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-reservation-modal","set-reservation-modal",-1194693674),(function (db,p__61317){
var vec__61318 = p__61317;
var _ = cljs.core.nth.call(null,vec__61318,(0),null);
var what_key = cljs.core.nth.call(null,vec__61318,(1),null);
var the_map = cljs.core.nth.call(null,vec__61318,(2),null);
console.log([cljs.core.str(what_key)].join(''));

var G__61321 = what_key;
if(cljs.core._EQ_.call(null,"replace",G__61321)){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"reservation-modal","reservation-modal",-625486901),cljs.core.assoc.call(null,the_map,new cljs.core.Keyword(null,"date","date",-1463434462),(new Date(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(the_map)))));
} else {
if(cljs.core._EQ_.call(null,"reset",G__61321)){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"reservation-modal","reservation-modal",-625486901),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"id","id",-1388402092),"",new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"finish","finish",-586688046),(0),new cljs.core.Keyword(null,"places","places",1043491706),cljs.core.PersistentVector.EMPTY], null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"date","date",-1463434462),G__61321)){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"reservation-modal","reservation-modal",-625486901),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"reservation-modal","reservation-modal",-625486901).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"date","date",-1463434462),(new Date(the_map))),new cljs.core.Keyword(null,"date","date",-1463434462),(new Date(the_map)));
} else {
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"reservation-modal","reservation-modal",-625486901),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"reservation-modal","reservation-modal",-625486901).cljs$core$IFn$_invoke$arity$1(db),what_key,the_map));

}
}
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-system","set-system",1839231132),(function (db,p__61323){
var vec__61324 = p__61323;
var _ = cljs.core.nth.call(null,vec__61324,(0),null);
var the_map = cljs.core.nth.call(null,vec__61324,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"system-map","system-map",-1269318920),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,cljs.core.remove.call(null,((function (vec__61324,_,the_map){
return (function (p1__61322_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__61322_SHARP_),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(the_map));
});})(vec__61324,_,the_map))
,new cljs.core.Keyword(null,"system-map","system-map",-1269318920).cljs$core$IFn$_invoke$arity$1(db)),the_map)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-max-id","set-max-id",1529872056),(function (db,p__61327){
var vec__61328 = p__61327;
var _ = cljs.core.nth.call(null,vec__61328,(0),null);
var number = cljs.core.nth.call(null,vec__61328,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"max-id","max-id",-1584630242),number);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-actual-page","set-actual-page",322486751),(function (db,p__61331){
var vec__61332 = p__61331;
var _ = cljs.core.nth.call(null,vec__61332,(0),null);
var page = cljs.core.nth.call(null,vec__61332,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"actual-page","actual-page",1366885368),page);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-systems","set-systems",-1796466809),(function (db,p__61335){
var vec__61336 = p__61335;
var _ = cljs.core.nth.call(null,vec__61336,(0),null);
var the_map = cljs.core.nth.call(null,vec__61336,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"system-map","system-map",-1269318920),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-invoices","set-invoices",1477487363),(function (db,p__61339){
var vec__61340 = p__61339;
var _ = cljs.core.nth.call(null,vec__61340,(0),null);
var the_map = cljs.core.nth.call(null,vec__61340,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"invoices","invoices",1154128192),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-sidenav-state","set-sidenav-state",-670452979),(function (db,p__61343){
var vec__61344 = p__61343;
var _ = cljs.core.nth.call(null,vec__61344,(0),null);
var the_map = cljs.core.nth.call(null,vec__61344,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"sidenav-state","sidenav-state",-1117163405),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-members","set-members",-691682377),(function (db,p__61347){
var vec__61348 = p__61347;
var _ = cljs.core.nth.call(null,vec__61348,(0),null);
var the_map = cljs.core.nth.call(null,vec__61348,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.concat.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(db),the_map));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"remove-member","remove-member",1811515040),(function (db,p__61352){
var vec__61353 = p__61352;
var _ = cljs.core.nth.call(null,vec__61353,(0),null);
var the_map = cljs.core.nth.call(null,vec__61353,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.vec.call(null,cljs.core.remove.call(null,((function (vec__61353,_,the_map){
return (function (p1__61351_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__61351_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(the_map));
});})(vec__61353,_,the_map))
,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(db))));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"replace-member","replace-member",-1697677995),(function (db,p__61357){
var vec__61358 = p__61357;
var _ = cljs.core.nth.call(null,vec__61358,(0),null);
var the_map = cljs.core.nth.call(null,vec__61358,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.vec.call(null,cljs.core.conj.call(null,cljs.core.remove.call(null,((function (vec__61358,_,the_map){
return (function (p1__61356_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__61356_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(the_map));
});})(vec__61358,_,the_map))
,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(db)),the_map)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-reservations","set-reservations",-756242129),(function (db,p__61361){
var vec__61362 = p__61361;
var _ = cljs.core.nth.call(null,vec__61362,(0),null);
var reservations = cljs.core.nth.call(null,vec__61362,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"reservations","reservations",1033801659),reservations);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-modal-data","set-modal-data",1887382702),(function (db,p__61365){
var vec__61366 = p__61365;
var _ = cljs.core.nth.call(null,vec__61366,(0),null);
var reservations = cljs.core.nth.call(null,vec__61366,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"modal-data","modal-data",-1303581308),reservations);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-date","set-date",1040663559),(function (db,p__61369){
var vec__61370 = p__61369;
var _ = cljs.core.nth.call(null,vec__61370,(0),null);
var date = cljs.core.nth.call(null,vec__61370,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"date","date",-1463434462),(new Date(date)));
}));

//# sourceMappingURL=events.js.map