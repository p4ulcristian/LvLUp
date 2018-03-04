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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-search-member","set-search-member",-293591708),(function (db,p__44695){
var vec__44696 = p__44695;
var _ = cljs.core.nth.call(null,vec__44696,(0),null);
var the_map = cljs.core.nth.call(null,vec__44696,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"search-member","search-member",-722973557),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-connection-state","set-connection-state",1425405326),(function (db,p__44699){
var vec__44700 = p__44699;
var _ = cljs.core.nth.call(null,vec__44700,(0),null);
var the_map = cljs.core.nth.call(null,vec__44700,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"connection-state","connection-state",-1405147924),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-waiting-pool","set-waiting-pool",2014675583),(function (db,p__44703){
var vec__44704 = p__44703;
var _ = cljs.core.nth.call(null,vec__44704,(0),null);
var the_map = cljs.core.nth.call(null,vec__44704,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"waiting-pool","waiting-pool",929771156),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-loading","set-loading",984627975),(function (db,p__44707){
var vec__44708 = p__44707;
var _ = cljs.core.nth.call(null,vec__44708,(0),null);
var the_map = cljs.core.nth.call(null,vec__44708,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-active-member","set-active-member",-1587885058),(function (db,p__44711){
var vec__44712 = p__44711;
var _ = cljs.core.nth.call(null,vec__44712,(0),null);
var the_map = cljs.core.nth.call(null,vec__44712,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-member","active-member",715735357),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-reservation-data","set-reservation-data",-220938308),(function (db,p__44715){
var vec__44716 = p__44715;
var _ = cljs.core.nth.call(null,vec__44716,(0),null);
var what_key = cljs.core.nth.call(null,vec__44716,(1),null);
var the_map = cljs.core.nth.call(null,vec__44716,(2),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"reservation-data","reservation-data",-507699446),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"reservation-data","reservation-data",-507699446).cljs$core$IFn$_invoke$arity$1(db),what_key,the_map));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"init-reservation-data","init-reservation-data",-1972330552),(function (db,p__44719){
var vec__44720 = p__44719;
var _ = cljs.core.nth.call(null,vec__44720,(0),null);
var what_key = cljs.core.nth.call(null,vec__44720,(1),null);
var the_map = cljs.core.nth.call(null,vec__44720,(2),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"reservation-data","reservation-data",-507699446),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"date","date",-1463434462),"",new cljs.core.Keyword(null,"start-hour","start-hour",380944413),"",new cljs.core.Keyword(null,"finish-hour","finish-hour",-1036026812),"",new cljs.core.Keyword(null,"system-name","system-name",1074560532),cljs.core.PersistentVector.EMPTY], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-system","set-system",1839231132),(function (db,p__44724){
var vec__44725 = p__44724;
var _ = cljs.core.nth.call(null,vec__44725,(0),null);
var the_map = cljs.core.nth.call(null,vec__44725,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"system-map","system-map",-1269318920),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,cljs.core.remove.call(null,((function (vec__44725,_,the_map){
return (function (p1__44723_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__44723_SHARP_),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(the_map));
});})(vec__44725,_,the_map))
,new cljs.core.Keyword(null,"system-map","system-map",-1269318920).cljs$core$IFn$_invoke$arity$1(db)),the_map)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-max-id","set-max-id",1529872056),(function (db,p__44728){
var vec__44729 = p__44728;
var _ = cljs.core.nth.call(null,vec__44729,(0),null);
var number = cljs.core.nth.call(null,vec__44729,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"max-id","max-id",-1584630242),number);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-actual-page","set-actual-page",322486751),(function (db,p__44732){
var vec__44733 = p__44732;
var _ = cljs.core.nth.call(null,vec__44733,(0),null);
var page = cljs.core.nth.call(null,vec__44733,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"actual-page","actual-page",1366885368),page);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-systems","set-systems",-1796466809),(function (db,p__44736){
var vec__44737 = p__44736;
var _ = cljs.core.nth.call(null,vec__44737,(0),null);
var the_map = cljs.core.nth.call(null,vec__44737,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"system-map","system-map",-1269318920),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-invoices","set-invoices",1477487363),(function (db,p__44740){
var vec__44741 = p__44740;
var _ = cljs.core.nth.call(null,vec__44741,(0),null);
var the_map = cljs.core.nth.call(null,vec__44741,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"invoices","invoices",1154128192),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-sidenav-state","set-sidenav-state",-670452979),(function (db,p__44744){
var vec__44745 = p__44744;
var _ = cljs.core.nth.call(null,vec__44745,(0),null);
var the_map = cljs.core.nth.call(null,vec__44745,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"sidenav-state","sidenav-state",-1117163405),the_map);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-members","set-members",-691682377),(function (db,p__44748){
var vec__44749 = p__44748;
var _ = cljs.core.nth.call(null,vec__44749,(0),null);
var the_map = cljs.core.nth.call(null,vec__44749,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.set.call(null,clojure.set.union.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(db),the_map)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"remove-member","remove-member",1811515040),(function (db,p__44753){
var vec__44754 = p__44753;
var _ = cljs.core.nth.call(null,vec__44754,(0),null);
var the_map = cljs.core.nth.call(null,vec__44754,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.remove.call(null,((function (vec__44754,_,the_map){
return (function (p1__44752_SHARP_){
return cljs.core.some.call(null,((function (vec__44754,_,the_map){
return (function (a){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__44752_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(a));
});})(vec__44754,_,the_map))
,the_map);
});})(vec__44754,_,the_map))
,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(db)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"delete-reservation","delete-reservation",1158232287),(function (db,p__44757){
var vec__44758 = p__44757;
var _ = cljs.core.nth.call(null,vec__44758,(0),null);
var id = cljs.core.nth.call(null,vec__44758,(1),null);
ajax.core.POST.call(null,"/delete-reservation",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),id,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__44758,_,id){
return (function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-reservations","get-reservations",-1846361693)], null));

return UIkit.notification("Foglal\u00E1s t\u00F6r\u00F6lve!",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["pos","top-right"], null)));
});})(vec__44758,_,id))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (vec__44758,_,id){
return (function (){
return alert("semmi");
});})(vec__44758,_,id))
], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-reservations","set-reservations",-756242129),(function (db,p__44761){
var vec__44762 = p__44761;
var _ = cljs.core.nth.call(null,vec__44762,(0),null);
var reservations = cljs.core.nth.call(null,vec__44762,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"reservations","reservations",1033801659),reservations);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-modal-data","set-modal-data",1887382702),(function (db,p__44765){
var vec__44766 = p__44765;
var _ = cljs.core.nth.call(null,vec__44766,(0),null);
var reservations = cljs.core.nth.call(null,vec__44766,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"modal-data","modal-data",-1303581308),reservations);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-date","set-date",1040663559),(function (db,p__44769){
var vec__44770 = p__44769;
var _ = cljs.core.nth.call(null,vec__44770,(0),null);
var date = cljs.core.nth.call(null,vec__44770,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"date","date",-1463434462),(new Date(date)));
}));

//# sourceMappingURL=events.js.map