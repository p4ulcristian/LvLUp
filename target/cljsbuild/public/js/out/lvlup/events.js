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
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoices","invoices",1154128192),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"modal-data","modal-data",-1303581308),new cljs.core.Keyword(null,"search-member","search-member",-722973557),new cljs.core.Keyword(null,"reservation-modal","reservation-modal",-625486901),new cljs.core.Keyword(null,"connection-state","connection-state",-1405147924),new cljs.core.Keyword(null,"lazy-number","lazy-number",-2086010932),new cljs.core.Keyword(null,"time-table","time-table",-791601298),new cljs.core.Keyword(null,"counter","counter",804008177),new cljs.core.Keyword(null,"sidenav-state","sidenav-state",-1117163405),new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"waiting-pool","waiting-pool",929771156),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"players-data","players-data",462007384),new cljs.core.Keyword(null,"system-map","system-map",-1269318920),new cljs.core.Keyword(null,"actual-page","actual-page",1366885368),new cljs.core.Keyword(null,"reservations","reservations",1033801659),new cljs.core.Keyword(null,"active-member","active-member",715735357),new cljs.core.Keyword(null,"max-id","max-id",-1584630242)],[cljs.core.PersistentVector.EMPTY,(new Date()),null,"",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"id","id",-1388402092),"",new cljs.core.Keyword(null,"date","date",-1463434462),(new Date()),new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"finish","finish",-586688046),(0),new cljs.core.Keyword(null,"places","places",1043491706),cljs.core.PersistentVector.EMPTY], null),false,(20),null,(0),(1),false,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,(0),(0)]);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-any-data","set-any-data",1867210995),(function (db,p__117027){
var vec__117028 = p__117027;
var _ = cljs.core.nth.call(null,vec__117028,(0),null);
var the_key = cljs.core.nth.call(null,vec__117028,(1),null);
var the_map = cljs.core.nth.call(null,vec__117028,(2),null);
return cljs.core.assoc.call(null,db,the_key,the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-search-member","set-search-member",-293591708),(function (db,p__117031){
var vec__117032 = p__117031;
var _ = cljs.core.nth.call(null,vec__117032,(0),null);
var the_map = cljs.core.nth.call(null,vec__117032,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-members","dungeon/get-members",188408482),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number","number",1570378438),(0),new cljs.core.Keyword(null,"search","search",1564939822),the_map], null)], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"search-member","search-member",-722973557),the_map,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.PersistentVector.EMPTY);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-connection-state","set-connection-state",1425405326),(function (db,p__117035){
var vec__117036 = p__117035;
var _ = cljs.core.nth.call(null,vec__117036,(0),null);
var the_map = cljs.core.nth.call(null,vec__117036,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"connection-state","connection-state",-1405147924),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-waiting-pool","set-waiting-pool",2014675583),(function (db,p__117039){
var vec__117040 = p__117039;
var _ = cljs.core.nth.call(null,vec__117040,(0),null);
var the_map = cljs.core.nth.call(null,vec__117040,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"waiting-pool","waiting-pool",929771156),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-loading","set-loading",984627975),(function (db,p__117043){
var vec__117044 = p__117043;
var _ = cljs.core.nth.call(null,vec__117044,(0),null);
var the_map = cljs.core.nth.call(null,vec__117044,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-active-member","set-active-member",-1587885058),(function (db,p__117047){
var vec__117048 = p__117047;
var _ = cljs.core.nth.call(null,vec__117048,(0),null);
var the_map = cljs.core.nth.call(null,vec__117048,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-member","active-member",715735357),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("dungeon","get-reservations","dungeon/get-reservations",436689929),(function (db,p__117051){
var vec__117052 = p__117051;
var _ = cljs.core.nth.call(null,vec__117052,(0),null);
var the_map = cljs.core.nth.call(null,vec__117052,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-reservations","dungeon/get-reservations",436689929),the_map], null),(8000),((function (vec__117052,_,the_map){
return (function (reply){
if(cljs.core.truth_(taoensso.sente.cb_success_QMARK_.call(null,reply))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-any-data","set-any-data",1867210995),new cljs.core.Keyword(null,"reservations","reservations",1033801659),cljs.reader.read_string.call(null,reply)], null));
} else {
return null;
}
});})(vec__117052,_,the_map))
);

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("dungeon","add-reservations","dungeon/add-reservations",-137546198),(function (db,p__117055){
var vec__117056 = p__117055;
var _ = cljs.core.nth.call(null,vec__117056,(0),null);
var the_map = cljs.core.nth.call(null,vec__117056,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","add-reservations","dungeon/add-reservations",-137546198),the_map], null),(8000),((function (vec__117056,_,the_map){
return (function (reply){
if(cljs.core.truth_(taoensso.sente.cb_success_QMARK_.call(null,reply))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-any-data","set-any-data",1867210995),new cljs.core.Keyword(null,"reservations","reservations",1033801659),cljs.reader.read_string.call(null,reply)], null));
} else {
return null;
}
});})(vec__117056,_,the_map))
);

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-reservation-modal","set-reservation-modal",-1194693674),(function (db,p__117059){
var vec__117060 = p__117059;
var _ = cljs.core.nth.call(null,vec__117060,(0),null);
var what_key = cljs.core.nth.call(null,vec__117060,(1),null);
var the_map = cljs.core.nth.call(null,vec__117060,(2),null);
console.log([cljs.core.str(what_key)].join(''));

var G__117063 = what_key;
if(cljs.core._EQ_.call(null,"replace",G__117063)){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"reservation-modal","reservation-modal",-625486901),cljs.core.assoc.call(null,the_map,new cljs.core.Keyword(null,"date","date",-1463434462),(new Date(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(the_map)))));
} else {
if(cljs.core._EQ_.call(null,"reset",G__117063)){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"reservation-modal","reservation-modal",-625486901),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"id","id",-1388402092),"",new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"finish","finish",-586688046),(0),new cljs.core.Keyword(null,"places","places",1043491706),cljs.core.PersistentVector.EMPTY], null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"date","date",-1463434462),G__117063)){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"reservation-modal","reservation-modal",-625486901),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"reservation-modal","reservation-modal",-625486901).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"date","date",-1463434462),(new Date(the_map))),new cljs.core.Keyword(null,"date","date",-1463434462),(new Date(the_map)));
} else {
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"reservation-modal","reservation-modal",-625486901),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"reservation-modal","reservation-modal",-625486901).cljs$core$IFn$_invoke$arity$1(db),what_key,the_map));

}
}
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-system","set-system",1839231132),(function (db,p__117065){
var vec__117066 = p__117065;
var _ = cljs.core.nth.call(null,vec__117066,(0),null);
var the_map = cljs.core.nth.call(null,vec__117066,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"system-map","system-map",-1269318920),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,cljs.core.remove.call(null,((function (vec__117066,_,the_map){
return (function (p1__117064_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__117064_SHARP_),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(the_map));
});})(vec__117066,_,the_map))
,new cljs.core.Keyword(null,"system-map","system-map",-1269318920).cljs$core$IFn$_invoke$arity$1(db)),the_map)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-max-id","set-max-id",1529872056),(function (db,p__117069){
var vec__117070 = p__117069;
var _ = cljs.core.nth.call(null,vec__117070,(0),null);
var number = cljs.core.nth.call(null,vec__117070,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"max-id","max-id",-1584630242),number);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-actual-page","set-actual-page",322486751),(function (db,p__117073){
var vec__117074 = p__117073;
var _ = cljs.core.nth.call(null,vec__117074,(0),null);
var page = cljs.core.nth.call(null,vec__117074,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"actual-page","actual-page",1366885368),page);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-systems","set-systems",-1796466809),(function (db,p__117077){
var vec__117078 = p__117077;
var _ = cljs.core.nth.call(null,vec__117078,(0),null);
var the_map = cljs.core.nth.call(null,vec__117078,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"system-map","system-map",-1269318920),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-invoices","set-invoices",1477487363),(function (db,p__117081){
var vec__117082 = p__117081;
var _ = cljs.core.nth.call(null,vec__117082,(0),null);
var the_map = cljs.core.nth.call(null,vec__117082,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"invoices","invoices",1154128192),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-sidenav-state","set-sidenav-state",-670452979),(function (db,p__117085){
var vec__117086 = p__117085;
var _ = cljs.core.nth.call(null,vec__117086,(0),null);
var the_map = cljs.core.nth.call(null,vec__117086,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"sidenav-state","sidenav-state",-1117163405),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-lazy-number","set-lazy-number",1553898441),(function (db,p__117089){
var vec__117090 = p__117089;
var _ = cljs.core.nth.call(null,vec__117090,(0),null);
var the_map = cljs.core.nth.call(null,vec__117090,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"lazy-number","lazy-number",-2086010932),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-players-data","set-players-data",-843286169),(function (db,p__117093){
var vec__117094 = p__117093;
var _ = cljs.core.nth.call(null,vec__117094,(0),null);
var the_map = cljs.core.nth.call(null,vec__117094,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"players-data","players-data",462007384),cljs.core.concat.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(db),the_map));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-members","set-members",-691682377),(function (db,p__117097){
var vec__117098 = p__117097;
var _ = cljs.core.nth.call(null,vec__117098,(0),null);
var the_map = cljs.core.nth.call(null,vec__117098,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.concat.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(db),the_map));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"remove-member","remove-member",1811515040),(function (db,p__117102){
var vec__117103 = p__117102;
var _ = cljs.core.nth.call(null,vec__117103,(0),null);
var the_map = cljs.core.nth.call(null,vec__117103,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.vec.call(null,cljs.core.remove.call(null,((function (vec__117103,_,the_map){
return (function (p1__117101_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__117101_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(the_map));
});})(vec__117103,_,the_map))
,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(db))));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"replace-member","replace-member",-1697677995),(function (db,p__117107){
var vec__117108 = p__117107;
var _ = cljs.core.nth.call(null,vec__117108,(0),null);
var the_map = cljs.core.nth.call(null,vec__117108,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.vec.call(null,cljs.core.conj.call(null,cljs.core.remove.call(null,((function (vec__117108,_,the_map){
return (function (p1__117106_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__117106_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(the_map));
});})(vec__117108,_,the_map))
,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(db)),the_map)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-reservations","set-reservations",-756242129),(function (db,p__117111){
var vec__117112 = p__117111;
var _ = cljs.core.nth.call(null,vec__117112,(0),null);
var reservations = cljs.core.nth.call(null,vec__117112,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"reservations","reservations",1033801659),reservations);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-modal-data","set-modal-data",1887382702),(function (db,p__117115){
var vec__117116 = p__117115;
var _ = cljs.core.nth.call(null,vec__117116,(0),null);
var reservations = cljs.core.nth.call(null,vec__117116,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"modal-data","modal-data",-1303581308),reservations);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-date","set-date",1040663559),(function (db,p__117119){
var vec__117120 = p__117119;
var _ = cljs.core.nth.call(null,vec__117120,(0),null);
var date = cljs.core.nth.call(null,vec__117120,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"date","date",-1463434462),(new Date(date)));
}));

//# sourceMappingURL=events.js.map