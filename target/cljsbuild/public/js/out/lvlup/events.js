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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-any-data","set-any-data",1867210995),(function (db,p__133433){
var vec__133434 = p__133433;
var _ = cljs.core.nth.call(null,vec__133434,(0),null);
var the_key = cljs.core.nth.call(null,vec__133434,(1),null);
var the_map = cljs.core.nth.call(null,vec__133434,(2),null);
return cljs.core.assoc.call(null,db,the_key,the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-search-member","set-search-member",-293591708),(function (db,p__133437){
var vec__133438 = p__133437;
var _ = cljs.core.nth.call(null,vec__133438,(0),null);
var the_map = cljs.core.nth.call(null,vec__133438,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"search-member","search-member",-722973557),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-connection-state","set-connection-state",1425405326),(function (db,p__133441){
var vec__133442 = p__133441;
var _ = cljs.core.nth.call(null,vec__133442,(0),null);
var the_map = cljs.core.nth.call(null,vec__133442,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"connection-state","connection-state",-1405147924),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-waiting-pool","set-waiting-pool",2014675583),(function (db,p__133445){
var vec__133446 = p__133445;
var _ = cljs.core.nth.call(null,vec__133446,(0),null);
var the_map = cljs.core.nth.call(null,vec__133446,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"waiting-pool","waiting-pool",929771156),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-loading","set-loading",984627975),(function (db,p__133449){
var vec__133450 = p__133449;
var _ = cljs.core.nth.call(null,vec__133450,(0),null);
var the_map = cljs.core.nth.call(null,vec__133450,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-active-member","set-active-member",-1587885058),(function (db,p__133453){
var vec__133454 = p__133453;
var _ = cljs.core.nth.call(null,vec__133454,(0),null);
var the_map = cljs.core.nth.call(null,vec__133454,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-member","active-member",715735357),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("dungeon","get-reservations","dungeon/get-reservations",436689929),(function (db,p__133457){
var vec__133458 = p__133457;
var _ = cljs.core.nth.call(null,vec__133458,(0),null);
var the_map = cljs.core.nth.call(null,vec__133458,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-reservations","dungeon/get-reservations",436689929),the_map], null),(8000),((function (vec__133458,_,the_map){
return (function (reply){
if(cljs.core.truth_(taoensso.sente.cb_success_QMARK_.call(null,reply))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-any-data","set-any-data",1867210995),new cljs.core.Keyword(null,"reservations","reservations",1033801659),cljs.reader.read_string.call(null,reply)], null));
} else {
return null;
}
});})(vec__133458,_,the_map))
);

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("dungeon","add-reservations","dungeon/add-reservations",-137546198),(function (db,p__133461){
var vec__133462 = p__133461;
var _ = cljs.core.nth.call(null,vec__133462,(0),null);
var the_map = cljs.core.nth.call(null,vec__133462,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","add-reservations","dungeon/add-reservations",-137546198),the_map], null),(8000),((function (vec__133462,_,the_map){
return (function (reply){
if(cljs.core.truth_(taoensso.sente.cb_success_QMARK_.call(null,reply))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-any-data","set-any-data",1867210995),new cljs.core.Keyword(null,"reservations","reservations",1033801659),cljs.reader.read_string.call(null,reply)], null));
} else {
return null;
}
});})(vec__133462,_,the_map))
);

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-reservation-modal","set-reservation-modal",-1194693674),(function (db,p__133465){
var vec__133466 = p__133465;
var _ = cljs.core.nth.call(null,vec__133466,(0),null);
var what_key = cljs.core.nth.call(null,vec__133466,(1),null);
var the_map = cljs.core.nth.call(null,vec__133466,(2),null);
console.log([cljs.core.str(what_key)].join(''));

var G__133469 = what_key;
if(cljs.core._EQ_.call(null,"replace",G__133469)){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"reservation-modal","reservation-modal",-625486901),cljs.core.assoc.call(null,the_map,new cljs.core.Keyword(null,"date","date",-1463434462),(new Date(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(the_map)))));
} else {
if(cljs.core._EQ_.call(null,"reset",G__133469)){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"reservation-modal","reservation-modal",-625486901),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"id","id",-1388402092),"",new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"finish","finish",-586688046),(0),new cljs.core.Keyword(null,"places","places",1043491706),cljs.core.PersistentVector.EMPTY], null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"date","date",-1463434462),G__133469)){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"reservation-modal","reservation-modal",-625486901),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"reservation-modal","reservation-modal",-625486901).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"date","date",-1463434462),(new Date(the_map))),new cljs.core.Keyword(null,"date","date",-1463434462),(new Date(the_map)));
} else {
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"reservation-modal","reservation-modal",-625486901),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"reservation-modal","reservation-modal",-625486901).cljs$core$IFn$_invoke$arity$1(db),what_key,the_map));

}
}
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-system","set-system",1839231132),(function (db,p__133471){
var vec__133472 = p__133471;
var _ = cljs.core.nth.call(null,vec__133472,(0),null);
var the_map = cljs.core.nth.call(null,vec__133472,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"system-map","system-map",-1269318920),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,cljs.core.remove.call(null,((function (vec__133472,_,the_map){
return (function (p1__133470_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__133470_SHARP_),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(the_map));
});})(vec__133472,_,the_map))
,new cljs.core.Keyword(null,"system-map","system-map",-1269318920).cljs$core$IFn$_invoke$arity$1(db)),the_map)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-max-id","set-max-id",1529872056),(function (db,p__133475){
var vec__133476 = p__133475;
var _ = cljs.core.nth.call(null,vec__133476,(0),null);
var number = cljs.core.nth.call(null,vec__133476,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"max-id","max-id",-1584630242),number);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-actual-page","set-actual-page",322486751),(function (db,p__133479){
var vec__133480 = p__133479;
var _ = cljs.core.nth.call(null,vec__133480,(0),null);
var page = cljs.core.nth.call(null,vec__133480,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"actual-page","actual-page",1366885368),page);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-systems","set-systems",-1796466809),(function (db,p__133483){
var vec__133484 = p__133483;
var _ = cljs.core.nth.call(null,vec__133484,(0),null);
var the_map = cljs.core.nth.call(null,vec__133484,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"system-map","system-map",-1269318920),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-invoices","set-invoices",1477487363),(function (db,p__133487){
var vec__133488 = p__133487;
var _ = cljs.core.nth.call(null,vec__133488,(0),null);
var the_map = cljs.core.nth.call(null,vec__133488,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"invoices","invoices",1154128192),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-sidenav-state","set-sidenav-state",-670452979),(function (db,p__133491){
var vec__133492 = p__133491;
var _ = cljs.core.nth.call(null,vec__133492,(0),null);
var the_map = cljs.core.nth.call(null,vec__133492,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"sidenav-state","sidenav-state",-1117163405),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-members","set-members",-691682377),(function (db,p__133495){
var vec__133496 = p__133495;
var _ = cljs.core.nth.call(null,vec__133496,(0),null);
var the_map = cljs.core.nth.call(null,vec__133496,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.set.call(null,clojure.set.union.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(db),the_map)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"remove-member","remove-member",1811515040),(function (db,p__133500){
var vec__133501 = p__133500;
var _ = cljs.core.nth.call(null,vec__133501,(0),null);
var the_map = cljs.core.nth.call(null,vec__133501,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.remove.call(null,((function (vec__133501,_,the_map){
return (function (p1__133499_SHARP_){
return cljs.core.some.call(null,((function (vec__133501,_,the_map){
return (function (a){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__133499_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(a));
});})(vec__133501,_,the_map))
,the_map);
});})(vec__133501,_,the_map))
,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(db)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-reservations","set-reservations",-756242129),(function (db,p__133504){
var vec__133505 = p__133504;
var _ = cljs.core.nth.call(null,vec__133505,(0),null);
var reservations = cljs.core.nth.call(null,vec__133505,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"reservations","reservations",1033801659),reservations);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-modal-data","set-modal-data",1887382702),(function (db,p__133508){
var vec__133509 = p__133508;
var _ = cljs.core.nth.call(null,vec__133509,(0),null);
var reservations = cljs.core.nth.call(null,vec__133509,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"modal-data","modal-data",-1303581308),reservations);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-date","set-date",1040663559),(function (db,p__133512){
var vec__133513 = p__133512;
var _ = cljs.core.nth.call(null,vec__133513,(0),null);
var date = cljs.core.nth.call(null,vec__133513,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"date","date",-1463434462),(new Date(date)));
}));

//# sourceMappingURL=events.js.map