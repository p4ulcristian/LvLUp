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
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoices","invoices",1154128192),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"modal-data","modal-data",-1303581308),new cljs.core.Keyword(null,"search-member","search-member",-722973557),new cljs.core.Keyword(null,"reservation-modal","reservation-modal",-625486901),new cljs.core.Keyword(null,"connection-state","connection-state",-1405147924),new cljs.core.Keyword(null,"lazy-number","lazy-number",-2086010932),new cljs.core.Keyword(null,"time-table","time-table",-791601298),new cljs.core.Keyword(null,"counter","counter",804008177),new cljs.core.Keyword(null,"sidenav-state","sidenav-state",-1117163405),new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"waiting-pool","waiting-pool",929771156),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"system-map","system-map",-1269318920),new cljs.core.Keyword(null,"actual-page","actual-page",1366885368),new cljs.core.Keyword(null,"reservations","reservations",1033801659),new cljs.core.Keyword(null,"active-member","active-member",715735357),new cljs.core.Keyword(null,"max-id","max-id",-1584630242)],[cljs.core.PersistentVector.EMPTY,(new Date()),null,"",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"id","id",-1388402092),"",new cljs.core.Keyword(null,"date","date",-1463434462),(new Date()),new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"finish","finish",-586688046),(0),new cljs.core.Keyword(null,"places","places",1043491706),cljs.core.PersistentVector.EMPTY], null),false,(20),null,(0),(1),false,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,(0),(0)]);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-any-data","set-any-data",1867210995),(function (db,p__80609){
var vec__80610 = p__80609;
var _ = cljs.core.nth.call(null,vec__80610,(0),null);
var the_key = cljs.core.nth.call(null,vec__80610,(1),null);
var the_map = cljs.core.nth.call(null,vec__80610,(2),null);
return cljs.core.assoc.call(null,db,the_key,the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-search-member","set-search-member",-293591708),(function (db,p__80613){
var vec__80614 = p__80613;
var _ = cljs.core.nth.call(null,vec__80614,(0),null);
var the_map = cljs.core.nth.call(null,vec__80614,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-members","dungeon/get-members",188408482),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number","number",1570378438),(0),new cljs.core.Keyword(null,"search","search",1564939822),the_map], null)], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"search-member","search-member",-722973557),the_map,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.PersistentVector.EMPTY);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-connection-state","set-connection-state",1425405326),(function (db,p__80617){
var vec__80618 = p__80617;
var _ = cljs.core.nth.call(null,vec__80618,(0),null);
var the_map = cljs.core.nth.call(null,vec__80618,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"connection-state","connection-state",-1405147924),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-waiting-pool","set-waiting-pool",2014675583),(function (db,p__80621){
var vec__80622 = p__80621;
var _ = cljs.core.nth.call(null,vec__80622,(0),null);
var the_map = cljs.core.nth.call(null,vec__80622,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"waiting-pool","waiting-pool",929771156),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-loading","set-loading",984627975),(function (db,p__80625){
var vec__80626 = p__80625;
var _ = cljs.core.nth.call(null,vec__80626,(0),null);
var the_map = cljs.core.nth.call(null,vec__80626,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-active-member","set-active-member",-1587885058),(function (db,p__80629){
var vec__80630 = p__80629;
var _ = cljs.core.nth.call(null,vec__80630,(0),null);
var the_map = cljs.core.nth.call(null,vec__80630,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-member","active-member",715735357),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("dungeon","get-reservations","dungeon/get-reservations",436689929),(function (db,p__80633){
var vec__80634 = p__80633;
var _ = cljs.core.nth.call(null,vec__80634,(0),null);
var the_map = cljs.core.nth.call(null,vec__80634,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-reservations","dungeon/get-reservations",436689929),the_map], null),(8000),((function (vec__80634,_,the_map){
return (function (reply){
if(cljs.core.truth_(taoensso.sente.cb_success_QMARK_.call(null,reply))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-any-data","set-any-data",1867210995),new cljs.core.Keyword(null,"reservations","reservations",1033801659),cljs.reader.read_string.call(null,reply)], null));
} else {
return null;
}
});})(vec__80634,_,the_map))
);

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("dungeon","add-reservations","dungeon/add-reservations",-137546198),(function (db,p__80637){
var vec__80638 = p__80637;
var _ = cljs.core.nth.call(null,vec__80638,(0),null);
var the_map = cljs.core.nth.call(null,vec__80638,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","add-reservations","dungeon/add-reservations",-137546198),the_map], null),(8000),((function (vec__80638,_,the_map){
return (function (reply){
if(cljs.core.truth_(taoensso.sente.cb_success_QMARK_.call(null,reply))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-any-data","set-any-data",1867210995),new cljs.core.Keyword(null,"reservations","reservations",1033801659),cljs.reader.read_string.call(null,reply)], null));
} else {
return null;
}
});})(vec__80638,_,the_map))
);

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-reservation-modal","set-reservation-modal",-1194693674),(function (db,p__80641){
var vec__80642 = p__80641;
var _ = cljs.core.nth.call(null,vec__80642,(0),null);
var what_key = cljs.core.nth.call(null,vec__80642,(1),null);
var the_map = cljs.core.nth.call(null,vec__80642,(2),null);
console.log([cljs.core.str(what_key)].join(''));

var G__80645 = what_key;
if(cljs.core._EQ_.call(null,"replace",G__80645)){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"reservation-modal","reservation-modal",-625486901),cljs.core.assoc.call(null,the_map,new cljs.core.Keyword(null,"date","date",-1463434462),(new Date(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(the_map)))));
} else {
if(cljs.core._EQ_.call(null,"reset",G__80645)){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"reservation-modal","reservation-modal",-625486901),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"id","id",-1388402092),"",new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"finish","finish",-586688046),(0),new cljs.core.Keyword(null,"places","places",1043491706),cljs.core.PersistentVector.EMPTY], null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"date","date",-1463434462),G__80645)){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"reservation-modal","reservation-modal",-625486901),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"reservation-modal","reservation-modal",-625486901).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"date","date",-1463434462),(new Date(the_map))),new cljs.core.Keyword(null,"date","date",-1463434462),(new Date(the_map)));
} else {
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"reservation-modal","reservation-modal",-625486901),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"reservation-modal","reservation-modal",-625486901).cljs$core$IFn$_invoke$arity$1(db),what_key,the_map));

}
}
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-system","set-system",1839231132),(function (db,p__80647){
var vec__80648 = p__80647;
var _ = cljs.core.nth.call(null,vec__80648,(0),null);
var the_map = cljs.core.nth.call(null,vec__80648,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"system-map","system-map",-1269318920),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,cljs.core.remove.call(null,((function (vec__80648,_,the_map){
return (function (p1__80646_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__80646_SHARP_),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(the_map));
});})(vec__80648,_,the_map))
,new cljs.core.Keyword(null,"system-map","system-map",-1269318920).cljs$core$IFn$_invoke$arity$1(db)),the_map)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-max-id","set-max-id",1529872056),(function (db,p__80651){
var vec__80652 = p__80651;
var _ = cljs.core.nth.call(null,vec__80652,(0),null);
var number = cljs.core.nth.call(null,vec__80652,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"max-id","max-id",-1584630242),number);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-actual-page","set-actual-page",322486751),(function (db,p__80655){
var vec__80656 = p__80655;
var _ = cljs.core.nth.call(null,vec__80656,(0),null);
var page = cljs.core.nth.call(null,vec__80656,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"actual-page","actual-page",1366885368),page);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-systems","set-systems",-1796466809),(function (db,p__80659){
var vec__80660 = p__80659;
var _ = cljs.core.nth.call(null,vec__80660,(0),null);
var the_map = cljs.core.nth.call(null,vec__80660,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"system-map","system-map",-1269318920),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-invoices","set-invoices",1477487363),(function (db,p__80663){
var vec__80664 = p__80663;
var _ = cljs.core.nth.call(null,vec__80664,(0),null);
var the_map = cljs.core.nth.call(null,vec__80664,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"invoices","invoices",1154128192),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-sidenav-state","set-sidenav-state",-670452979),(function (db,p__80667){
var vec__80668 = p__80667;
var _ = cljs.core.nth.call(null,vec__80668,(0),null);
var the_map = cljs.core.nth.call(null,vec__80668,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"sidenav-state","sidenav-state",-1117163405),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-lazy-number","set-lazy-number",1553898441),(function (db,p__80671){
var vec__80672 = p__80671;
var _ = cljs.core.nth.call(null,vec__80672,(0),null);
var the_map = cljs.core.nth.call(null,vec__80672,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"lazy-number","lazy-number",-2086010932),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-members","set-members",-691682377),(function (db,p__80675){
var vec__80676 = p__80675;
var _ = cljs.core.nth.call(null,vec__80676,(0),null);
var the_map = cljs.core.nth.call(null,vec__80676,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.concat.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(db),the_map));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"remove-member","remove-member",1811515040),(function (db,p__80680){
var vec__80681 = p__80680;
var _ = cljs.core.nth.call(null,vec__80681,(0),null);
var the_map = cljs.core.nth.call(null,vec__80681,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.vec.call(null,cljs.core.remove.call(null,((function (vec__80681,_,the_map){
return (function (p1__80679_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__80679_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(the_map));
});})(vec__80681,_,the_map))
,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(db))));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"replace-member","replace-member",-1697677995),(function (db,p__80685){
var vec__80686 = p__80685;
var _ = cljs.core.nth.call(null,vec__80686,(0),null);
var the_map = cljs.core.nth.call(null,vec__80686,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.vec.call(null,cljs.core.conj.call(null,cljs.core.remove.call(null,((function (vec__80686,_,the_map){
return (function (p1__80684_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__80684_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(the_map));
});})(vec__80686,_,the_map))
,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(db)),the_map)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-reservations","set-reservations",-756242129),(function (db,p__80689){
var vec__80690 = p__80689;
var _ = cljs.core.nth.call(null,vec__80690,(0),null);
var reservations = cljs.core.nth.call(null,vec__80690,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"reservations","reservations",1033801659),reservations);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-modal-data","set-modal-data",1887382702),(function (db,p__80693){
var vec__80694 = p__80693;
var _ = cljs.core.nth.call(null,vec__80694,(0),null);
var reservations = cljs.core.nth.call(null,vec__80694,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"modal-data","modal-data",-1303581308),reservations);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-date","set-date",1040663559),(function (db,p__80697){
var vec__80698 = p__80697;
var _ = cljs.core.nth.call(null,vec__80698,(0),null);
var date = cljs.core.nth.call(null,vec__80698,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"date","date",-1463434462),(new Date(date)));
}));

//# sourceMappingURL=events.js.map