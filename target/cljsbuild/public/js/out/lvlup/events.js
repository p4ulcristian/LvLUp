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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-any-data","set-any-data",1867210995),(function (db,p__56160){
var vec__56161 = p__56160;
var _ = cljs.core.nth.call(null,vec__56161,(0),null);
var the_key = cljs.core.nth.call(null,vec__56161,(1),null);
var the_map = cljs.core.nth.call(null,vec__56161,(2),null);
return cljs.core.assoc.call(null,db,the_key,the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-search-member","set-search-member",-293591708),(function (db,p__56164){
var vec__56165 = p__56164;
var _ = cljs.core.nth.call(null,vec__56165,(0),null);
var the_map = cljs.core.nth.call(null,vec__56165,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"search-member","search-member",-722973557),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-connection-state","set-connection-state",1425405326),(function (db,p__56168){
var vec__56169 = p__56168;
var _ = cljs.core.nth.call(null,vec__56169,(0),null);
var the_map = cljs.core.nth.call(null,vec__56169,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"connection-state","connection-state",-1405147924),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-waiting-pool","set-waiting-pool",2014675583),(function (db,p__56172){
var vec__56173 = p__56172;
var _ = cljs.core.nth.call(null,vec__56173,(0),null);
var the_map = cljs.core.nth.call(null,vec__56173,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"waiting-pool","waiting-pool",929771156),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-loading","set-loading",984627975),(function (db,p__56176){
var vec__56177 = p__56176;
var _ = cljs.core.nth.call(null,vec__56177,(0),null);
var the_map = cljs.core.nth.call(null,vec__56177,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-active-member","set-active-member",-1587885058),(function (db,p__56180){
var vec__56181 = p__56180;
var _ = cljs.core.nth.call(null,vec__56181,(0),null);
var the_map = cljs.core.nth.call(null,vec__56181,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-member","active-member",715735357),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("dungeon","get-reservations","dungeon/get-reservations",436689929),(function (db,p__56184){
var vec__56185 = p__56184;
var _ = cljs.core.nth.call(null,vec__56185,(0),null);
var the_map = cljs.core.nth.call(null,vec__56185,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-reservations","dungeon/get-reservations",436689929),the_map], null),(8000),((function (vec__56185,_,the_map){
return (function (reply){
if(cljs.core.truth_(taoensso.sente.cb_success_QMARK_.call(null,reply))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-any-data","set-any-data",1867210995),new cljs.core.Keyword(null,"reservations","reservations",1033801659),cljs.reader.read_string.call(null,reply)], null));
} else {
return null;
}
});})(vec__56185,_,the_map))
);

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("dungeon","add-reservations","dungeon/add-reservations",-137546198),(function (db,p__56188){
var vec__56189 = p__56188;
var _ = cljs.core.nth.call(null,vec__56189,(0),null);
var the_map = cljs.core.nth.call(null,vec__56189,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","add-reservations","dungeon/add-reservations",-137546198),the_map], null),(8000),((function (vec__56189,_,the_map){
return (function (reply){
if(cljs.core.truth_(taoensso.sente.cb_success_QMARK_.call(null,reply))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-any-data","set-any-data",1867210995),new cljs.core.Keyword(null,"reservations","reservations",1033801659),cljs.reader.read_string.call(null,reply)], null));
} else {
return null;
}
});})(vec__56189,_,the_map))
);

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-reservation-modal","set-reservation-modal",-1194693674),(function (db,p__56192){
var vec__56193 = p__56192;
var _ = cljs.core.nth.call(null,vec__56193,(0),null);
var what_key = cljs.core.nth.call(null,vec__56193,(1),null);
var the_map = cljs.core.nth.call(null,vec__56193,(2),null);
console.log([cljs.core.str(what_key)].join(''));

var G__56196 = what_key;
if(cljs.core._EQ_.call(null,"replace",G__56196)){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"reservation-modal","reservation-modal",-625486901),cljs.core.assoc.call(null,the_map,new cljs.core.Keyword(null,"date","date",-1463434462),(new Date(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(the_map)))));
} else {
if(cljs.core._EQ_.call(null,"reset",G__56196)){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"reservation-modal","reservation-modal",-625486901),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"id","id",-1388402092),"",new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"finish","finish",-586688046),(0),new cljs.core.Keyword(null,"places","places",1043491706),cljs.core.PersistentVector.EMPTY], null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"date","date",-1463434462),G__56196)){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"reservation-modal","reservation-modal",-625486901),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"reservation-modal","reservation-modal",-625486901).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"date","date",-1463434462),(new Date(the_map))),new cljs.core.Keyword(null,"date","date",-1463434462),(new Date(the_map)));
} else {
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"reservation-modal","reservation-modal",-625486901),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"reservation-modal","reservation-modal",-625486901).cljs$core$IFn$_invoke$arity$1(db),what_key,the_map));

}
}
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-system","set-system",1839231132),(function (db,p__56198){
var vec__56199 = p__56198;
var _ = cljs.core.nth.call(null,vec__56199,(0),null);
var the_map = cljs.core.nth.call(null,vec__56199,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"system-map","system-map",-1269318920),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,cljs.core.remove.call(null,((function (vec__56199,_,the_map){
return (function (p1__56197_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__56197_SHARP_),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(the_map));
});})(vec__56199,_,the_map))
,new cljs.core.Keyword(null,"system-map","system-map",-1269318920).cljs$core$IFn$_invoke$arity$1(db)),the_map)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-max-id","set-max-id",1529872056),(function (db,p__56202){
var vec__56203 = p__56202;
var _ = cljs.core.nth.call(null,vec__56203,(0),null);
var number = cljs.core.nth.call(null,vec__56203,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"max-id","max-id",-1584630242),number);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-actual-page","set-actual-page",322486751),(function (db,p__56206){
var vec__56207 = p__56206;
var _ = cljs.core.nth.call(null,vec__56207,(0),null);
var page = cljs.core.nth.call(null,vec__56207,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"actual-page","actual-page",1366885368),page);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-systems","set-systems",-1796466809),(function (db,p__56210){
var vec__56211 = p__56210;
var _ = cljs.core.nth.call(null,vec__56211,(0),null);
var the_map = cljs.core.nth.call(null,vec__56211,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"system-map","system-map",-1269318920),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-invoices","set-invoices",1477487363),(function (db,p__56214){
var vec__56215 = p__56214;
var _ = cljs.core.nth.call(null,vec__56215,(0),null);
var the_map = cljs.core.nth.call(null,vec__56215,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"invoices","invoices",1154128192),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-sidenav-state","set-sidenav-state",-670452979),(function (db,p__56218){
var vec__56219 = p__56218;
var _ = cljs.core.nth.call(null,vec__56219,(0),null);
var the_map = cljs.core.nth.call(null,vec__56219,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"sidenav-state","sidenav-state",-1117163405),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-members","set-members",-691682377),(function (db,p__56222){
var vec__56223 = p__56222;
var _ = cljs.core.nth.call(null,vec__56223,(0),null);
var the_map = cljs.core.nth.call(null,vec__56223,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.set.call(null,clojure.set.union.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(db),the_map)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"remove-member","remove-member",1811515040),(function (db,p__56227){
var vec__56228 = p__56227;
var _ = cljs.core.nth.call(null,vec__56228,(0),null);
var the_map = cljs.core.nth.call(null,vec__56228,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.remove.call(null,((function (vec__56228,_,the_map){
return (function (p1__56226_SHARP_){
return cljs.core.some.call(null,((function (vec__56228,_,the_map){
return (function (a){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56226_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(a));
});})(vec__56228,_,the_map))
,the_map);
});})(vec__56228,_,the_map))
,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(db)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-reservations","set-reservations",-756242129),(function (db,p__56231){
var vec__56232 = p__56231;
var _ = cljs.core.nth.call(null,vec__56232,(0),null);
var reservations = cljs.core.nth.call(null,vec__56232,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"reservations","reservations",1033801659),reservations);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-modal-data","set-modal-data",1887382702),(function (db,p__56235){
var vec__56236 = p__56235;
var _ = cljs.core.nth.call(null,vec__56236,(0),null);
var reservations = cljs.core.nth.call(null,vec__56236,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"modal-data","modal-data",-1303581308),reservations);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-date","set-date",1040663559),(function (db,p__56239){
var vec__56240 = p__56239;
var _ = cljs.core.nth.call(null,vec__56240,(0),null);
var date = cljs.core.nth.call(null,vec__56240,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"date","date",-1463434462),(new Date(date)));
}));

//# sourceMappingURL=events.js.map