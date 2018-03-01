// Compiled by ClojureScript 1.9.229 {}
goog.provide('lvlup.events');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoices","invoices",1154128192),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"reservation-data","reservation-data",-507699446),new cljs.core.Keyword(null,"search-member","search-member",-722973557),new cljs.core.Keyword(null,"connection-state","connection-state",-1405147924),new cljs.core.Keyword(null,"time-table","time-table",-791601298),new cljs.core.Keyword(null,"counter","counter",804008177),new cljs.core.Keyword(null,"sidenav-state","sidenav-state",-1117163405),new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"waiting-pool","waiting-pool",929771156),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"system-map","system-map",-1269318920),new cljs.core.Keyword(null,"actual-page","actual-page",1366885368),new cljs.core.Keyword(null,"reservations","reservations",1033801659),new cljs.core.Keyword(null,"active-member","active-member",715735357),new cljs.core.Keyword(null,"max-id","max-id",-1584630242)],[cljs.core.PersistentVector.EMPTY,(new Date()),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"date","date",-1463434462),"",new cljs.core.Keyword(null,"start-hour","start-hour",380944413),"",new cljs.core.Keyword(null,"finish-hour","finish-hour",-1036026812),"",new cljs.core.Keyword(null,"system-name","system-name",1074560532),cljs.core.PersistentVector.EMPTY], null),"",false,null,(0),(1),false,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,null,(0),(0)]);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"render-time-table","render-time-table",500046061),(function (db,p__40345){
var vec__40346 = p__40345;
var _ = cljs.core.nth.call(null,vec__40346,(0),null);
var reservations = cljs.core.nth.call(null,vec__40346,(1),null);
var time_40353 = cljs.core.atom.call(null,null);
new cljs.core.Keyword(null,"time-table","time-table",-791601298).cljs$core$IFn$_invoke$arity$1(db).setScope((12),(2));

new cljs.core.Keyword(null,"time-table","time-table",-791601298).cljs$core$IFn$_invoke$arity$1(db).addLocations(cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (time_40353,vec__40346,_,reservations){
return (function (a){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(a);
});})(time_40353,vec__40346,_,reservations))
,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"system-map","system-map",-1269318920).cljs$core$IFn$_invoke$arity$1(db))))));

var seq__40349_40354 = cljs.core.seq.call(null,reservations);
var chunk__40350_40355 = null;
var count__40351_40356 = (0);
var i__40352_40357 = (0);
while(true){
if((i__40352_40357 < count__40351_40356)){
var reservation_40358 = cljs.core._nth.call(null,chunk__40350_40355,i__40352_40357);
cljs.core.reset_BANG_.call(null,time_40353,(new Date(parseInt(cljs.core.first.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(reservation_40358),/ /))),parseInt(cljs.core.second.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(reservation_40358),/ /))),parseInt(cljs.core.nth.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(reservation_40358),/ /),(2))),(0),(0))));

if((parseInt(cljs.core.first.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"finish-hour","finish-hour",-1036026812).cljs$core$IFn$_invoke$arity$1(reservation_40358),/:/))) < (4))){
cljs.core.deref.call(null,time_40353).setDate((cljs.core.deref.call(null,time_40353).getDate() + (1)));

cljs.core.deref.call(null,time_40353).setHours(cljs.core.first.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"finish-hour","finish-hour",-1036026812).cljs$core$IFn$_invoke$arity$1(reservation_40358),/:/)));

cljs.core.deref.call(null,time_40353).setMinutes(cljs.core.second.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"finish-hour","finish-hour",-1036026812).cljs$core$IFn$_invoke$arity$1(reservation_40358),/:/)));
} else {
if((parseInt(cljs.core.first.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"finish-hour","finish-hour",-1036026812).cljs$core$IFn$_invoke$arity$1(reservation_40358),/:/))) > (4))){
cljs.core.deref.call(null,time_40353).setDate(cljs.core.deref.call(null,time_40353).getDate());

cljs.core.deref.call(null,time_40353).setHours(cljs.core.first.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"finish-hour","finish-hour",-1036026812).cljs$core$IFn$_invoke$arity$1(reservation_40358),/:/)));

cljs.core.deref.call(null,time_40353).setMinutes(cljs.core.second.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"finish-hour","finish-hour",-1036026812).cljs$core$IFn$_invoke$arity$1(reservation_40358),/:/)));
} else {
if(cljs.core._EQ_.call(null,null,new cljs.core.Keyword(null,"finish-hour","finish-hour",-1036026812).cljs$core$IFn$_invoke$arity$1(reservation_40358))){
cljs.core.deref.call(null,time_40353).setDate((cljs.core.deref.call(null,time_40353).getDate() + (1)));

cljs.core.deref.call(null,time_40353).setHours((2));

cljs.core.deref.call(null,time_40353).setMinutes((0));
} else {
}
}
}

new cljs.core.Keyword(null,"time-table","time-table",-791601298).cljs$core$IFn$_invoke$arity$1(db).addEvent(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(reservation_40358),new cljs.core.Keyword(null,"system-name","system-name",1074560532).cljs$core$IFn$_invoke$arity$1(reservation_40358),(new Date(parseInt(cljs.core.first.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(reservation_40358),/ /))),parseInt(cljs.core.second.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(reservation_40358),/ /))),parseInt(cljs.core.nth.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(reservation_40358),/ /),(2))),parseInt(cljs.core.first.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"start-hour","start-hour",380944413).cljs$core$IFn$_invoke$arity$1(reservation_40358),/:/))),parseInt(cljs.core.second.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"start-hour","start-hour",380944413).cljs$core$IFn$_invoke$arity$1(reservation_40358),/:/))))),cljs.core.deref.call(null,time_40353));

var G__40359 = seq__40349_40354;
var G__40360 = chunk__40350_40355;
var G__40361 = count__40351_40356;
var G__40362 = (i__40352_40357 + (1));
seq__40349_40354 = G__40359;
chunk__40350_40355 = G__40360;
count__40351_40356 = G__40361;
i__40352_40357 = G__40362;
continue;
} else {
var temp__4657__auto___40363 = cljs.core.seq.call(null,seq__40349_40354);
if(temp__4657__auto___40363){
var seq__40349_40364__$1 = temp__4657__auto___40363;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40349_40364__$1)){
var c__37569__auto___40365 = cljs.core.chunk_first.call(null,seq__40349_40364__$1);
var G__40366 = cljs.core.chunk_rest.call(null,seq__40349_40364__$1);
var G__40367 = c__37569__auto___40365;
var G__40368 = cljs.core.count.call(null,c__37569__auto___40365);
var G__40369 = (0);
seq__40349_40354 = G__40366;
chunk__40350_40355 = G__40367;
count__40351_40356 = G__40368;
i__40352_40357 = G__40369;
continue;
} else {
var reservation_40370 = cljs.core.first.call(null,seq__40349_40364__$1);
cljs.core.reset_BANG_.call(null,time_40353,(new Date(parseInt(cljs.core.first.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(reservation_40370),/ /))),parseInt(cljs.core.second.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(reservation_40370),/ /))),parseInt(cljs.core.nth.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(reservation_40370),/ /),(2))),(0),(0))));

if((parseInt(cljs.core.first.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"finish-hour","finish-hour",-1036026812).cljs$core$IFn$_invoke$arity$1(reservation_40370),/:/))) < (4))){
cljs.core.deref.call(null,time_40353).setDate((cljs.core.deref.call(null,time_40353).getDate() + (1)));

cljs.core.deref.call(null,time_40353).setHours(cljs.core.first.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"finish-hour","finish-hour",-1036026812).cljs$core$IFn$_invoke$arity$1(reservation_40370),/:/)));

cljs.core.deref.call(null,time_40353).setMinutes(cljs.core.second.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"finish-hour","finish-hour",-1036026812).cljs$core$IFn$_invoke$arity$1(reservation_40370),/:/)));
} else {
if((parseInt(cljs.core.first.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"finish-hour","finish-hour",-1036026812).cljs$core$IFn$_invoke$arity$1(reservation_40370),/:/))) > (4))){
cljs.core.deref.call(null,time_40353).setDate(cljs.core.deref.call(null,time_40353).getDate());

cljs.core.deref.call(null,time_40353).setHours(cljs.core.first.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"finish-hour","finish-hour",-1036026812).cljs$core$IFn$_invoke$arity$1(reservation_40370),/:/)));

cljs.core.deref.call(null,time_40353).setMinutes(cljs.core.second.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"finish-hour","finish-hour",-1036026812).cljs$core$IFn$_invoke$arity$1(reservation_40370),/:/)));
} else {
if(cljs.core._EQ_.call(null,null,new cljs.core.Keyword(null,"finish-hour","finish-hour",-1036026812).cljs$core$IFn$_invoke$arity$1(reservation_40370))){
cljs.core.deref.call(null,time_40353).setDate((cljs.core.deref.call(null,time_40353).getDate() + (1)));

cljs.core.deref.call(null,time_40353).setHours((2));

cljs.core.deref.call(null,time_40353).setMinutes((0));
} else {
}
}
}

new cljs.core.Keyword(null,"time-table","time-table",-791601298).cljs$core$IFn$_invoke$arity$1(db).addEvent(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(reservation_40370),new cljs.core.Keyword(null,"system-name","system-name",1074560532).cljs$core$IFn$_invoke$arity$1(reservation_40370),(new Date(parseInt(cljs.core.first.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(reservation_40370),/ /))),parseInt(cljs.core.second.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(reservation_40370),/ /))),parseInt(cljs.core.nth.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(reservation_40370),/ /),(2))),parseInt(cljs.core.first.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"start-hour","start-hour",380944413).cljs$core$IFn$_invoke$arity$1(reservation_40370),/:/))),parseInt(cljs.core.second.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"start-hour","start-hour",380944413).cljs$core$IFn$_invoke$arity$1(reservation_40370),/:/))))),cljs.core.deref.call(null,time_40353));

var G__40371 = cljs.core.next.call(null,seq__40349_40364__$1);
var G__40372 = null;
var G__40373 = (0);
var G__40374 = (0);
seq__40349_40354 = G__40371;
chunk__40350_40355 = G__40372;
count__40351_40356 = G__40373;
i__40352_40357 = G__40374;
continue;
}
} else {
}
}
break;
}

(new Timetable.Renderer(new cljs.core.Keyword(null,"time-table","time-table",-791601298).cljs$core$IFn$_invoke$arity$1(db))).draw(".timetable");

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"counter","counter",804008177),(new cljs.core.Keyword(null,"counter","counter",804008177).cljs$core$IFn$_invoke$arity$1(db) + (1)),new cljs.core.Keyword(null,"reservations","reservations",1033801659),reservations);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-search-member","set-search-member",-293591708),(function (db,p__40375){
var vec__40376 = p__40375;
var _ = cljs.core.nth.call(null,vec__40376,(0),null);
var the_map = cljs.core.nth.call(null,vec__40376,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"search-member","search-member",-722973557),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-connection-state","set-connection-state",1425405326),(function (db,p__40379){
var vec__40380 = p__40379;
var _ = cljs.core.nth.call(null,vec__40380,(0),null);
var the_map = cljs.core.nth.call(null,vec__40380,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"connection-state","connection-state",-1405147924),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-waiting-pool","set-waiting-pool",2014675583),(function (db,p__40383){
var vec__40384 = p__40383;
var _ = cljs.core.nth.call(null,vec__40384,(0),null);
var the_map = cljs.core.nth.call(null,vec__40384,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"waiting-pool","waiting-pool",929771156),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-reservation","add-reservation",-773621221),(function (db,p__40388){
var vec__40389 = p__40388;
var _ = cljs.core.nth.call(null,vec__40389,(0),null);
var the_map = cljs.core.nth.call(null,vec__40389,(1),null);
ajax.core.POST.call(null,"/add-foglalasok",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),the_map,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__40389,_,the_map){
return (function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-reservations","get-reservations",-1846361693),new cljs.core.Keyword(null,"actual-page","actual-page",1366885368).cljs$core$IFn$_invoke$arity$1(db)], null));

return UIkit.notification("Foglal\u00E1s hozz\u00E1adva!",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["pos","top-right"], null)));
});})(vec__40389,_,the_map))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (vec__40389,_,the_map){
return (function (p1__40387_SHARP_){
return alert([cljs.core.str("Valamit j\u00F3l elrontott\u00E1l :( :"),cljs.core.str(p1__40387_SHARP_)].join(''));
});})(vec__40389,_,the_map))
], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-loading","set-loading",984627975),(function (db,p__40392){
var vec__40393 = p__40392;
var _ = cljs.core.nth.call(null,vec__40393,(0),null);
var the_map = cljs.core.nth.call(null,vec__40393,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-active-member","set-active-member",-1587885058),(function (db,p__40396){
var vec__40397 = p__40396;
var _ = cljs.core.nth.call(null,vec__40397,(0),null);
var the_map = cljs.core.nth.call(null,vec__40397,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-member","active-member",715735357),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-reservation-data","set-reservation-data",-220938308),(function (db,p__40400){
var vec__40401 = p__40400;
var _ = cljs.core.nth.call(null,vec__40401,(0),null);
var what_key = cljs.core.nth.call(null,vec__40401,(1),null);
var the_map = cljs.core.nth.call(null,vec__40401,(2),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"reservation-data","reservation-data",-507699446),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"reservation-data","reservation-data",-507699446).cljs$core$IFn$_invoke$arity$1(db),what_key,the_map));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"init-reservation-data","init-reservation-data",-1972330552),(function (db,p__40404){
var vec__40405 = p__40404;
var _ = cljs.core.nth.call(null,vec__40405,(0),null);
var what_key = cljs.core.nth.call(null,vec__40405,(1),null);
var the_map = cljs.core.nth.call(null,vec__40405,(2),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"reservation-data","reservation-data",-507699446),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"date","date",-1463434462),"",new cljs.core.Keyword(null,"start-hour","start-hour",380944413),"",new cljs.core.Keyword(null,"finish-hour","finish-hour",-1036026812),"",new cljs.core.Keyword(null,"system-name","system-name",1074560532),cljs.core.PersistentVector.EMPTY], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-system","set-system",1839231132),(function (db,p__40409){
var vec__40410 = p__40409;
var _ = cljs.core.nth.call(null,vec__40410,(0),null);
var the_map = cljs.core.nth.call(null,vec__40410,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"system-map","system-map",-1269318920),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,cljs.core.remove.call(null,((function (vec__40410,_,the_map){
return (function (p1__40408_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__40408_SHARP_),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(the_map));
});})(vec__40410,_,the_map))
,new cljs.core.Keyword(null,"system-map","system-map",-1269318920).cljs$core$IFn$_invoke$arity$1(db)),the_map)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-max-id","set-max-id",1529872056),(function (db,p__40413){
var vec__40414 = p__40413;
var _ = cljs.core.nth.call(null,vec__40414,(0),null);
var number = cljs.core.nth.call(null,vec__40414,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"max-id","max-id",-1584630242),number);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-actual-page","set-actual-page",322486751),(function (db,p__40417){
var vec__40418 = p__40417;
var _ = cljs.core.nth.call(null,vec__40418,(0),null);
var page = cljs.core.nth.call(null,vec__40418,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"actual-page","actual-page",1366885368),page);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-systems","set-systems",-1796466809),(function (db,p__40421){
var vec__40422 = p__40421;
var _ = cljs.core.nth.call(null,vec__40422,(0),null);
var the_map = cljs.core.nth.call(null,vec__40422,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"system-map","system-map",-1269318920),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-invoices","set-invoices",1477487363),(function (db,p__40425){
var vec__40426 = p__40425;
var _ = cljs.core.nth.call(null,vec__40426,(0),null);
var the_map = cljs.core.nth.call(null,vec__40426,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"invoices","invoices",1154128192),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-sidenav-state","set-sidenav-state",-670452979),(function (db,p__40429){
var vec__40430 = p__40429;
var _ = cljs.core.nth.call(null,vec__40430,(0),null);
var the_map = cljs.core.nth.call(null,vec__40430,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"sidenav-state","sidenav-state",-1117163405),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-members","set-members",-691682377),(function (db,p__40433){
var vec__40434 = p__40433;
var _ = cljs.core.nth.call(null,vec__40434,(0),null);
var the_map = cljs.core.nth.call(null,vec__40434,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.set.call(null,clojure.set.union.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(db),the_map)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"remove-member","remove-member",1811515040),(function (db,p__40438){
var vec__40439 = p__40438;
var _ = cljs.core.nth.call(null,vec__40439,(0),null);
var the_map = cljs.core.nth.call(null,vec__40439,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.remove.call(null,((function (vec__40439,_,the_map){
return (function (p1__40437_SHARP_){
return cljs.core.some.call(null,((function (vec__40439,_,the_map){
return (function (a){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__40437_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(a));
});})(vec__40439,_,the_map))
,the_map);
});})(vec__40439,_,the_map))
,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(db)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"delete-reservation","delete-reservation",1158232287),(function (db,p__40442){
var vec__40443 = p__40442;
var _ = cljs.core.nth.call(null,vec__40443,(0),null);
var id = cljs.core.nth.call(null,vec__40443,(1),null);
ajax.core.POST.call(null,"/delete-reservation",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),id,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__40443,_,id){
return (function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-reservations","get-reservations",-1846361693)], null));

return UIkit.notification("Foglal\u00E1s t\u00F6r\u00F6lve!",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["pos","top-right"], null)));
});})(vec__40443,_,id))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (vec__40443,_,id){
return (function (){
return alert("semmi");
});})(vec__40443,_,id))
], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"get-reservations","get-reservations",-1846361693),(function (db,p__40447){
var vec__40448 = p__40447;
var _ = cljs.core.nth.call(null,vec__40448,(0),null);
ajax.core.GET.call(null,[cljs.core.str("/foglalasok/"),cljs.core.str(new cljs.core.Keyword(null,"actual-page","actual-page",1366885368).cljs$core$IFn$_invoke$arity$1(db)),cljs.core.str("/"),cljs.core.str(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(db).getFullYear()),cljs.core.str(" "),cljs.core.str(goog.string.format("%02d",(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(db).getMonth() + (1)))),cljs.core.str(" "),cljs.core.str(goog.string.format("%02d",new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(db).getDate()))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__40448,_){
return (function (p1__40446_SHARP_){
return console.log(cljs.reader.read_string.call(null,p1__40446_SHARP_));
});})(vec__40448,_))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (vec__40448,_){
return (function (){
return cljs.core.List.EMPTY;
});})(vec__40448,_))
], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"time-table","time-table",-791601298),(new Timetable()));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-date","set-date",1040663559),(function (db,p__40451){
var vec__40452 = p__40451;
var _ = cljs.core.nth.call(null,vec__40452,(0),null);
var date = cljs.core.nth.call(null,vec__40452,(1),null);
new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(db).setDate(parseInt(cljs.core.nth.call(null,clojure.string.split.call(null,date,/ /),(2))));

new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(db).setMonth((parseInt(cljs.core.second.call(null,clojure.string.split.call(null,date,/ /))) - (1)));

new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(db).setFullYear(parseInt(cljs.core.first.call(null,clojure.string.split.call(null,date,/ /))));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-reservations","get-reservations",-1846361693),new cljs.core.Keyword(null,"actual-page","actual-page",1366885368).cljs$core$IFn$_invoke$arity$1(db)], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"counter","counter",804008177),(new cljs.core.Keyword(null,"counter","counter",804008177).cljs$core$IFn$_invoke$arity$1(db) + (1)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"change-date","change-date",576629252),(function (db,p__40455){
var vec__40456 = p__40455;
var _ = cljs.core.nth.call(null,vec__40456,(0),null);
var how = cljs.core.nth.call(null,vec__40456,(1),null);
var G__40459_40460 = how;
switch (G__40459_40460) {
case "add":
new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(db).setDate((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(db).getDate() + (1)));

break;
case "sub":
new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(db).setDate((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(db).getDate() - (1)));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(how)].join('')));

}

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-reservations","get-reservations",-1846361693),new cljs.core.Keyword(null,"actual-page","actual-page",1366885368).cljs$core$IFn$_invoke$arity$1(db)], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"counter","counter",804008177),(new cljs.core.Keyword(null,"counter","counter",804008177).cljs$core$IFn$_invoke$arity$1(db) + (1)));
}));

//# sourceMappingURL=events.js.map