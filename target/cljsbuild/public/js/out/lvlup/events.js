// Compiled by ClojureScript 1.9.229 {}
goog.provide('lvlup.events');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoices","invoices",1154128192),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"modal-data","modal-data",-1303581308),new cljs.core.Keyword(null,"reservation-data","reservation-data",-507699446),new cljs.core.Keyword(null,"search-member","search-member",-722973557),new cljs.core.Keyword(null,"connection-state","connection-state",-1405147924),new cljs.core.Keyword(null,"time-table","time-table",-791601298),new cljs.core.Keyword(null,"counter","counter",804008177),new cljs.core.Keyword(null,"sidenav-state","sidenav-state",-1117163405),new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"waiting-pool","waiting-pool",929771156),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"system-map","system-map",-1269318920),new cljs.core.Keyword(null,"actual-page","actual-page",1366885368),new cljs.core.Keyword(null,"reservations","reservations",1033801659),new cljs.core.Keyword(null,"active-member","active-member",715735357),new cljs.core.Keyword(null,"max-id","max-id",-1584630242)],[cljs.core.PersistentVector.EMPTY,(new Date()),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"date","date",-1463434462),"",new cljs.core.Keyword(null,"start-hour","start-hour",380944413),"",new cljs.core.Keyword(null,"finish-hour","finish-hour",-1036026812),"",new cljs.core.Keyword(null,"system-name","system-name",1074560532),cljs.core.PersistentVector.EMPTY], null),"",false,null,(0),(1),false,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,(0),(0)]);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-search-member","set-search-member",-293591708),(function (db,p__54370){
var vec__54371 = p__54370;
var _ = cljs.core.nth.call(null,vec__54371,(0),null);
var the_map = cljs.core.nth.call(null,vec__54371,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"search-member","search-member",-722973557),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-connection-state","set-connection-state",1425405326),(function (db,p__54374){
var vec__54375 = p__54374;
var _ = cljs.core.nth.call(null,vec__54375,(0),null);
var the_map = cljs.core.nth.call(null,vec__54375,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"connection-state","connection-state",-1405147924),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-waiting-pool","set-waiting-pool",2014675583),(function (db,p__54378){
var vec__54379 = p__54378;
var _ = cljs.core.nth.call(null,vec__54379,(0),null);
var the_map = cljs.core.nth.call(null,vec__54379,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"waiting-pool","waiting-pool",929771156),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-loading","set-loading",984627975),(function (db,p__54382){
var vec__54383 = p__54382;
var _ = cljs.core.nth.call(null,vec__54383,(0),null);
var the_map = cljs.core.nth.call(null,vec__54383,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-active-member","set-active-member",-1587885058),(function (db,p__54386){
var vec__54387 = p__54386;
var _ = cljs.core.nth.call(null,vec__54387,(0),null);
var the_map = cljs.core.nth.call(null,vec__54387,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-member","active-member",715735357),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-reservation-data","set-reservation-data",-220938308),(function (db,p__54390){
var vec__54391 = p__54390;
var _ = cljs.core.nth.call(null,vec__54391,(0),null);
var what_key = cljs.core.nth.call(null,vec__54391,(1),null);
var the_map = cljs.core.nth.call(null,vec__54391,(2),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"reservation-data","reservation-data",-507699446),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"reservation-data","reservation-data",-507699446).cljs$core$IFn$_invoke$arity$1(db),what_key,the_map));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"init-reservation-data","init-reservation-data",-1972330552),(function (db,p__54394){
var vec__54395 = p__54394;
var _ = cljs.core.nth.call(null,vec__54395,(0),null);
var what_key = cljs.core.nth.call(null,vec__54395,(1),null);
var the_map = cljs.core.nth.call(null,vec__54395,(2),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"reservation-data","reservation-data",-507699446),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"date","date",-1463434462),"",new cljs.core.Keyword(null,"start-hour","start-hour",380944413),"",new cljs.core.Keyword(null,"finish-hour","finish-hour",-1036026812),"",new cljs.core.Keyword(null,"system-name","system-name",1074560532),cljs.core.PersistentVector.EMPTY], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-system","set-system",1839231132),(function (db,p__54399){
var vec__54400 = p__54399;
var _ = cljs.core.nth.call(null,vec__54400,(0),null);
var the_map = cljs.core.nth.call(null,vec__54400,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"system-map","system-map",-1269318920),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,cljs.core.remove.call(null,((function (vec__54400,_,the_map){
return (function (p1__54398_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__54398_SHARP_),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(the_map));
});})(vec__54400,_,the_map))
,new cljs.core.Keyword(null,"system-map","system-map",-1269318920).cljs$core$IFn$_invoke$arity$1(db)),the_map)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-max-id","set-max-id",1529872056),(function (db,p__54403){
var vec__54404 = p__54403;
var _ = cljs.core.nth.call(null,vec__54404,(0),null);
var number = cljs.core.nth.call(null,vec__54404,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"max-id","max-id",-1584630242),number);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-actual-page","set-actual-page",322486751),(function (db,p__54407){
var vec__54408 = p__54407;
var _ = cljs.core.nth.call(null,vec__54408,(0),null);
var page = cljs.core.nth.call(null,vec__54408,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"actual-page","actual-page",1366885368),page);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-systems","set-systems",-1796466809),(function (db,p__54411){
var vec__54412 = p__54411;
var _ = cljs.core.nth.call(null,vec__54412,(0),null);
var the_map = cljs.core.nth.call(null,vec__54412,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"system-map","system-map",-1269318920),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-invoices","set-invoices",1477487363),(function (db,p__54415){
var vec__54416 = p__54415;
var _ = cljs.core.nth.call(null,vec__54416,(0),null);
var the_map = cljs.core.nth.call(null,vec__54416,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"invoices","invoices",1154128192),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-sidenav-state","set-sidenav-state",-670452979),(function (db,p__54419){
var vec__54420 = p__54419;
var _ = cljs.core.nth.call(null,vec__54420,(0),null);
var the_map = cljs.core.nth.call(null,vec__54420,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"sidenav-state","sidenav-state",-1117163405),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-members","set-members",-691682377),(function (db,p__54423){
var vec__54424 = p__54423;
var _ = cljs.core.nth.call(null,vec__54424,(0),null);
var the_map = cljs.core.nth.call(null,vec__54424,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.set.call(null,clojure.set.union.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(db),the_map)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"remove-member","remove-member",1811515040),(function (db,p__54428){
var vec__54429 = p__54428;
var _ = cljs.core.nth.call(null,vec__54429,(0),null);
var the_map = cljs.core.nth.call(null,vec__54429,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.remove.call(null,((function (vec__54429,_,the_map){
return (function (p1__54427_SHARP_){
return cljs.core.some.call(null,((function (vec__54429,_,the_map){
return (function (a){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__54427_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(a));
});})(vec__54429,_,the_map))
,the_map);
});})(vec__54429,_,the_map))
,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(db)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"delete-reservation","delete-reservation",1158232287),(function (db,p__54432){
var vec__54433 = p__54432;
var _ = cljs.core.nth.call(null,vec__54433,(0),null);
var id = cljs.core.nth.call(null,vec__54433,(1),null);
ajax.core.POST.call(null,"/delete-reservation",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),id,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__54433,_,id){
return (function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-reservations","get-reservations",-1846361693)], null));

return UIkit.notification("Foglal\u00E1s t\u00F6r\u00F6lve!",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["pos","top-right"], null)));
});})(vec__54433,_,id))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (vec__54433,_,id){
return (function (){
return alert("semmi");
});})(vec__54433,_,id))
], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-reservations","set-reservations",-756242129),(function (db,p__54436){
var vec__54437 = p__54436;
var _ = cljs.core.nth.call(null,vec__54437,(0),null);
var reservations = cljs.core.nth.call(null,vec__54437,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"reservations","reservations",1033801659),reservations);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-modal-data","set-modal-data",1887382702),(function (db,p__54440){
var vec__54441 = p__54440;
var _ = cljs.core.nth.call(null,vec__54441,(0),null);
var reservations = cljs.core.nth.call(null,vec__54441,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"modal-data","modal-data",-1303581308),reservations);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-date","set-date",1040663559),(function (db,p__54444){
var vec__54445 = p__54444;
var _ = cljs.core.nth.call(null,vec__54445,(0),null);
var date = cljs.core.nth.call(null,vec__54445,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"date","date",-1463434462),(new Date(date)));
}));

//# sourceMappingURL=events.js.map