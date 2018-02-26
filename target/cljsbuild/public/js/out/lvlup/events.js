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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"render-time-table","render-time-table",500046061),(function (db,p__40868){
var vec__40869 = p__40868;
var _ = cljs.core.nth.call(null,vec__40869,(0),null);
var reservations = cljs.core.nth.call(null,vec__40869,(1),null);
var time_40876 = cljs.core.atom.call(null,null);
new cljs.core.Keyword(null,"time-table","time-table",-791601298).cljs$core$IFn$_invoke$arity$1(db).setScope((12),(2));

new cljs.core.Keyword(null,"time-table","time-table",-791601298).cljs$core$IFn$_invoke$arity$1(db).addLocations(cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (time_40876,vec__40869,_,reservations){
return (function (a){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(a);
});})(time_40876,vec__40869,_,reservations))
,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"system-map","system-map",-1269318920).cljs$core$IFn$_invoke$arity$1(db))))));

var seq__40872_40877 = cljs.core.seq.call(null,reservations);
var chunk__40873_40878 = null;
var count__40874_40879 = (0);
var i__40875_40880 = (0);
while(true){
if((i__40875_40880 < count__40874_40879)){
var reservation_40881 = cljs.core._nth.call(null,chunk__40873_40878,i__40875_40880);
cljs.core.reset_BANG_.call(null,time_40876,(new Date(parseInt(cljs.core.first.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(reservation_40881),/ /))),parseInt(cljs.core.second.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(reservation_40881),/ /))),parseInt(cljs.core.nth.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(reservation_40881),/ /),(2))),(0),(0))));

if((parseInt(cljs.core.first.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"finish-hour","finish-hour",-1036026812).cljs$core$IFn$_invoke$arity$1(reservation_40881),/:/))) < (4))){
cljs.core.deref.call(null,time_40876).setDate((cljs.core.deref.call(null,time_40876).getDate() + (1)));

cljs.core.deref.call(null,time_40876).setHours(cljs.core.first.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"finish-hour","finish-hour",-1036026812).cljs$core$IFn$_invoke$arity$1(reservation_40881),/:/)));

cljs.core.deref.call(null,time_40876).setMinutes(cljs.core.second.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"finish-hour","finish-hour",-1036026812).cljs$core$IFn$_invoke$arity$1(reservation_40881),/:/)));
} else {
if((parseInt(cljs.core.first.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"finish-hour","finish-hour",-1036026812).cljs$core$IFn$_invoke$arity$1(reservation_40881),/:/))) > (4))){
cljs.core.deref.call(null,time_40876).setDate(cljs.core.deref.call(null,time_40876).getDate());

cljs.core.deref.call(null,time_40876).setHours(cljs.core.first.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"finish-hour","finish-hour",-1036026812).cljs$core$IFn$_invoke$arity$1(reservation_40881),/:/)));

cljs.core.deref.call(null,time_40876).setMinutes(cljs.core.second.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"finish-hour","finish-hour",-1036026812).cljs$core$IFn$_invoke$arity$1(reservation_40881),/:/)));
} else {
if(cljs.core._EQ_.call(null,null,new cljs.core.Keyword(null,"finish-hour","finish-hour",-1036026812).cljs$core$IFn$_invoke$arity$1(reservation_40881))){
cljs.core.deref.call(null,time_40876).setDate((cljs.core.deref.call(null,time_40876).getDate() + (1)));

cljs.core.deref.call(null,time_40876).setHours((2));

cljs.core.deref.call(null,time_40876).setMinutes((0));
} else {
}
}
}

new cljs.core.Keyword(null,"time-table","time-table",-791601298).cljs$core$IFn$_invoke$arity$1(db).addEvent(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(reservation_40881),new cljs.core.Keyword(null,"system-name","system-name",1074560532).cljs$core$IFn$_invoke$arity$1(reservation_40881),(new Date(parseInt(cljs.core.first.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(reservation_40881),/ /))),parseInt(cljs.core.second.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(reservation_40881),/ /))),parseInt(cljs.core.nth.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(reservation_40881),/ /),(2))),parseInt(cljs.core.first.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"start-hour","start-hour",380944413).cljs$core$IFn$_invoke$arity$1(reservation_40881),/:/))),parseInt(cljs.core.second.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"start-hour","start-hour",380944413).cljs$core$IFn$_invoke$arity$1(reservation_40881),/:/))))),cljs.core.deref.call(null,time_40876));

var G__40882 = seq__40872_40877;
var G__40883 = chunk__40873_40878;
var G__40884 = count__40874_40879;
var G__40885 = (i__40875_40880 + (1));
seq__40872_40877 = G__40882;
chunk__40873_40878 = G__40883;
count__40874_40879 = G__40884;
i__40875_40880 = G__40885;
continue;
} else {
var temp__4657__auto___40886 = cljs.core.seq.call(null,seq__40872_40877);
if(temp__4657__auto___40886){
var seq__40872_40887__$1 = temp__4657__auto___40886;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40872_40887__$1)){
var c__37585__auto___40888 = cljs.core.chunk_first.call(null,seq__40872_40887__$1);
var G__40889 = cljs.core.chunk_rest.call(null,seq__40872_40887__$1);
var G__40890 = c__37585__auto___40888;
var G__40891 = cljs.core.count.call(null,c__37585__auto___40888);
var G__40892 = (0);
seq__40872_40877 = G__40889;
chunk__40873_40878 = G__40890;
count__40874_40879 = G__40891;
i__40875_40880 = G__40892;
continue;
} else {
var reservation_40893 = cljs.core.first.call(null,seq__40872_40887__$1);
cljs.core.reset_BANG_.call(null,time_40876,(new Date(parseInt(cljs.core.first.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(reservation_40893),/ /))),parseInt(cljs.core.second.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(reservation_40893),/ /))),parseInt(cljs.core.nth.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(reservation_40893),/ /),(2))),(0),(0))));

if((parseInt(cljs.core.first.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"finish-hour","finish-hour",-1036026812).cljs$core$IFn$_invoke$arity$1(reservation_40893),/:/))) < (4))){
cljs.core.deref.call(null,time_40876).setDate((cljs.core.deref.call(null,time_40876).getDate() + (1)));

cljs.core.deref.call(null,time_40876).setHours(cljs.core.first.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"finish-hour","finish-hour",-1036026812).cljs$core$IFn$_invoke$arity$1(reservation_40893),/:/)));

cljs.core.deref.call(null,time_40876).setMinutes(cljs.core.second.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"finish-hour","finish-hour",-1036026812).cljs$core$IFn$_invoke$arity$1(reservation_40893),/:/)));
} else {
if((parseInt(cljs.core.first.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"finish-hour","finish-hour",-1036026812).cljs$core$IFn$_invoke$arity$1(reservation_40893),/:/))) > (4))){
cljs.core.deref.call(null,time_40876).setDate(cljs.core.deref.call(null,time_40876).getDate());

cljs.core.deref.call(null,time_40876).setHours(cljs.core.first.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"finish-hour","finish-hour",-1036026812).cljs$core$IFn$_invoke$arity$1(reservation_40893),/:/)));

cljs.core.deref.call(null,time_40876).setMinutes(cljs.core.second.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"finish-hour","finish-hour",-1036026812).cljs$core$IFn$_invoke$arity$1(reservation_40893),/:/)));
} else {
if(cljs.core._EQ_.call(null,null,new cljs.core.Keyword(null,"finish-hour","finish-hour",-1036026812).cljs$core$IFn$_invoke$arity$1(reservation_40893))){
cljs.core.deref.call(null,time_40876).setDate((cljs.core.deref.call(null,time_40876).getDate() + (1)));

cljs.core.deref.call(null,time_40876).setHours((2));

cljs.core.deref.call(null,time_40876).setMinutes((0));
} else {
}
}
}

new cljs.core.Keyword(null,"time-table","time-table",-791601298).cljs$core$IFn$_invoke$arity$1(db).addEvent(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(reservation_40893),new cljs.core.Keyword(null,"system-name","system-name",1074560532).cljs$core$IFn$_invoke$arity$1(reservation_40893),(new Date(parseInt(cljs.core.first.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(reservation_40893),/ /))),parseInt(cljs.core.second.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(reservation_40893),/ /))),parseInt(cljs.core.nth.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(reservation_40893),/ /),(2))),parseInt(cljs.core.first.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"start-hour","start-hour",380944413).cljs$core$IFn$_invoke$arity$1(reservation_40893),/:/))),parseInt(cljs.core.second.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"start-hour","start-hour",380944413).cljs$core$IFn$_invoke$arity$1(reservation_40893),/:/))))),cljs.core.deref.call(null,time_40876));

var G__40894 = cljs.core.next.call(null,seq__40872_40887__$1);
var G__40895 = null;
var G__40896 = (0);
var G__40897 = (0);
seq__40872_40877 = G__40894;
chunk__40873_40878 = G__40895;
count__40874_40879 = G__40896;
i__40875_40880 = G__40897;
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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-search-member","set-search-member",-293591708),(function (db,p__40898){
var vec__40899 = p__40898;
var _ = cljs.core.nth.call(null,vec__40899,(0),null);
var the_map = cljs.core.nth.call(null,vec__40899,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"search-member","search-member",-722973557),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-connection-state","set-connection-state",1425405326),(function (db,p__40902){
var vec__40903 = p__40902;
var _ = cljs.core.nth.call(null,vec__40903,(0),null);
var the_map = cljs.core.nth.call(null,vec__40903,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"connection-state","connection-state",-1405147924),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-waiting-pool","set-waiting-pool",2014675583),(function (db,p__40906){
var vec__40907 = p__40906;
var _ = cljs.core.nth.call(null,vec__40907,(0),null);
var the_map = cljs.core.nth.call(null,vec__40907,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"waiting-pool","waiting-pool",929771156),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-reservation","add-reservation",-773621221),(function (db,p__40911){
var vec__40912 = p__40911;
var _ = cljs.core.nth.call(null,vec__40912,(0),null);
var the_map = cljs.core.nth.call(null,vec__40912,(1),null);
ajax.core.POST.call(null,"/add-foglalasok",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),the_map,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__40912,_,the_map){
return (function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-reservations","get-reservations",-1846361693),new cljs.core.Keyword(null,"actual-page","actual-page",1366885368).cljs$core$IFn$_invoke$arity$1(db)], null));

return UIkit.notification("Foglal\u00E1s hozz\u00E1adva!",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["pos","top-right"], null)));
});})(vec__40912,_,the_map))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (vec__40912,_,the_map){
return (function (p1__40910_SHARP_){
return alert([cljs.core.str("Valamit j\u00F3l elrontott\u00E1l :( :"),cljs.core.str(p1__40910_SHARP_)].join(''));
});})(vec__40912,_,the_map))
], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-loading","set-loading",984627975),(function (db,p__40915){
var vec__40916 = p__40915;
var _ = cljs.core.nth.call(null,vec__40916,(0),null);
var the_map = cljs.core.nth.call(null,vec__40916,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-active-member","set-active-member",-1587885058),(function (db,p__40919){
var vec__40920 = p__40919;
var _ = cljs.core.nth.call(null,vec__40920,(0),null);
var the_map = cljs.core.nth.call(null,vec__40920,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-member","active-member",715735357),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-reservation-data","set-reservation-data",-220938308),(function (db,p__40923){
var vec__40924 = p__40923;
var _ = cljs.core.nth.call(null,vec__40924,(0),null);
var what_key = cljs.core.nth.call(null,vec__40924,(1),null);
var the_map = cljs.core.nth.call(null,vec__40924,(2),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"reservation-data","reservation-data",-507699446),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"reservation-data","reservation-data",-507699446).cljs$core$IFn$_invoke$arity$1(db),what_key,the_map));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"init-reservation-data","init-reservation-data",-1972330552),(function (db,p__40927){
var vec__40928 = p__40927;
var _ = cljs.core.nth.call(null,vec__40928,(0),null);
var what_key = cljs.core.nth.call(null,vec__40928,(1),null);
var the_map = cljs.core.nth.call(null,vec__40928,(2),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"reservation-data","reservation-data",-507699446),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"date","date",-1463434462),"",new cljs.core.Keyword(null,"start-hour","start-hour",380944413),"",new cljs.core.Keyword(null,"finish-hour","finish-hour",-1036026812),"",new cljs.core.Keyword(null,"system-name","system-name",1074560532),cljs.core.PersistentVector.EMPTY], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-system","set-system",1839231132),(function (db,p__40932){
var vec__40933 = p__40932;
var _ = cljs.core.nth.call(null,vec__40933,(0),null);
var the_map = cljs.core.nth.call(null,vec__40933,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"system-map","system-map",-1269318920),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,cljs.core.remove.call(null,((function (vec__40933,_,the_map){
return (function (p1__40931_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__40931_SHARP_),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(the_map));
});})(vec__40933,_,the_map))
,new cljs.core.Keyword(null,"system-map","system-map",-1269318920).cljs$core$IFn$_invoke$arity$1(db)),the_map)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-max-id","set-max-id",1529872056),(function (db,p__40936){
var vec__40937 = p__40936;
var _ = cljs.core.nth.call(null,vec__40937,(0),null);
var number = cljs.core.nth.call(null,vec__40937,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"max-id","max-id",-1584630242),number);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-actual-page","set-actual-page",322486751),(function (db,p__40940){
var vec__40941 = p__40940;
var _ = cljs.core.nth.call(null,vec__40941,(0),null);
var page = cljs.core.nth.call(null,vec__40941,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"actual-page","actual-page",1366885368),page);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-systems","set-systems",-1796466809),(function (db,p__40944){
var vec__40945 = p__40944;
var _ = cljs.core.nth.call(null,vec__40945,(0),null);
var the_map = cljs.core.nth.call(null,vec__40945,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"system-map","system-map",-1269318920),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-invoices","set-invoices",1477487363),(function (db,p__40948){
var vec__40949 = p__40948;
var _ = cljs.core.nth.call(null,vec__40949,(0),null);
var the_map = cljs.core.nth.call(null,vec__40949,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"invoices","invoices",1154128192),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-sidenav-state","set-sidenav-state",-670452979),(function (db,p__40952){
var vec__40953 = p__40952;
var _ = cljs.core.nth.call(null,vec__40953,(0),null);
var the_map = cljs.core.nth.call(null,vec__40953,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"sidenav-state","sidenav-state",-1117163405),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-members","set-members",-691682377),(function (db,p__40956){
var vec__40957 = p__40956;
var _ = cljs.core.nth.call(null,vec__40957,(0),null);
var the_map = cljs.core.nth.call(null,vec__40957,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.set.call(null,clojure.set.union.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(db),the_map)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"remove-member","remove-member",1811515040),(function (db,p__40961){
var vec__40962 = p__40961;
var _ = cljs.core.nth.call(null,vec__40962,(0),null);
var the_map = cljs.core.nth.call(null,vec__40962,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.remove.call(null,((function (vec__40962,_,the_map){
return (function (p1__40960_SHARP_){
return cljs.core.some.call(null,((function (vec__40962,_,the_map){
return (function (a){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__40960_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(a));
});})(vec__40962,_,the_map))
,the_map);
});})(vec__40962,_,the_map))
,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(db)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"delete-reservation","delete-reservation",1158232287),(function (db,p__40965){
var vec__40966 = p__40965;
var _ = cljs.core.nth.call(null,vec__40966,(0),null);
var id = cljs.core.nth.call(null,vec__40966,(1),null);
ajax.core.POST.call(null,"/delete-reservation",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),id,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__40966,_,id){
return (function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-reservations","get-reservations",-1846361693)], null));

return UIkit.notification("Foglal\u00E1s t\u00F6r\u00F6lve!",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["pos","top-right"], null)));
});})(vec__40966,_,id))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (vec__40966,_,id){
return (function (){
return alert("semmi");
});})(vec__40966,_,id))
], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"get-reservations","get-reservations",-1846361693),(function (db,p__40970){
var vec__40971 = p__40970;
var _ = cljs.core.nth.call(null,vec__40971,(0),null);
ajax.core.GET.call(null,[cljs.core.str("/foglalasok/"),cljs.core.str(new cljs.core.Keyword(null,"actual-page","actual-page",1366885368).cljs$core$IFn$_invoke$arity$1(db)),cljs.core.str("/"),cljs.core.str(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(db).getFullYear()),cljs.core.str(" "),cljs.core.str(goog.string.format("%02d",(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(db).getMonth() + (1)))),cljs.core.str(" "),cljs.core.str(goog.string.format("%02d",new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(db).getDate()))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__40971,_){
return (function (p1__40969_SHARP_){
return console.log(cljs.reader.read_string.call(null,p1__40969_SHARP_));
});})(vec__40971,_))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (vec__40971,_){
return (function (){
return cljs.core.List.EMPTY;
});})(vec__40971,_))
], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"time-table","time-table",-791601298),(new Timetable()));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-date","set-date",1040663559),(function (db,p__40974){
var vec__40975 = p__40974;
var _ = cljs.core.nth.call(null,vec__40975,(0),null);
var date = cljs.core.nth.call(null,vec__40975,(1),null);
new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(db).setDate(parseInt(cljs.core.nth.call(null,clojure.string.split.call(null,date,/ /),(2))));

new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(db).setMonth((parseInt(cljs.core.second.call(null,clojure.string.split.call(null,date,/ /))) - (1)));

new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(db).setFullYear(parseInt(cljs.core.first.call(null,clojure.string.split.call(null,date,/ /))));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-reservations","get-reservations",-1846361693),new cljs.core.Keyword(null,"actual-page","actual-page",1366885368).cljs$core$IFn$_invoke$arity$1(db)], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"counter","counter",804008177),(new cljs.core.Keyword(null,"counter","counter",804008177).cljs$core$IFn$_invoke$arity$1(db) + (1)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"change-date","change-date",576629252),(function (db,p__40978){
var vec__40979 = p__40978;
var _ = cljs.core.nth.call(null,vec__40979,(0),null);
var how = cljs.core.nth.call(null,vec__40979,(1),null);
var G__40982_40983 = how;
switch (G__40982_40983) {
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