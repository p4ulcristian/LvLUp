// Compiled by ClojureScript 1.9.229 {}
goog.provide('lvlup.crusader.reservation');
goog.require('cljs.core');
goog.require('lvlup.subs');
goog.require('taoensso.sente');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('goog.string');
goog.require('reagent.session');
goog.require('cljs.core.async');
goog.require('lvlup.sente');
goog.require('cljs_time.core');
goog.require('clojure.set');
goog.require('cljs_time.format');
goog.require('jayq.core');
goog.require('lvlup.events');
goog.require('cljs_time.coerce');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('re_frame.core');
lvlup.crusader.reservation.type_atom = reagent.core.atom.call(null,null);
lvlup.crusader.reservation.timeformat = cljs_time.format.formatter.call(null,"HH:mm");
lvlup.crusader.reservation.dateformat = cljs_time.format.formatter.call(null,"yyyy MM dd");
lvlup.crusader.reservation.convert_date = (function lvlup$crusader$reservation$convert_date(origin){
return cljs_time.format.unparse.call(null,lvlup.crusader.reservation.dateformat,cljs_time.core.plus.call(null,cljs_time.coerce.from_long.call(null,origin),cljs_time.core.days.call(null,(1))));
});
lvlup.crusader.reservation.convert_time = (function lvlup$crusader$reservation$convert_time(origin){
return cljs_time.format.unparse.call(null,lvlup.crusader.reservation.timeformat,cljs_time.coerce.from_long.call(null,origin));
});
lvlup.crusader.reservation.date_picker = (function lvlup$crusader$reservation$date_picker(placeholder,the_atom){
var reservation = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"reservation-data"], null));
var date_picker_dom = reagent.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (reservation,date_picker_dom){
return (function (){
return cljs.core.reset_BANG_.call(null,date_picker_dom,jayq.core.$.call(null,".date-picker").pickadate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["onSet",((function (reservation,date_picker_dom){
return (function (a){
if(cljs.core.not_EQ_.call(null,null,cljs.core.get.call(null,cljs.core.js__GT_clj.call(null,a),"select"))){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-reservation-data","set-reservation-data",-220938308),new cljs.core.Keyword(null,"date","date",-1463434462),lvlup.crusader.reservation.convert_date.call(null,cljs.core.get.call(null,cljs.core.js__GT_clj.call(null,a),"select"))], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-date","set-date",1040663559),lvlup.crusader.reservation.convert_date.call(null,cljs.core.get.call(null,cljs.core.js__GT_clj.call(null,a),"select")),cljs.core.type], null));
} else {
return null;
}
});})(reservation,date_picker_dom))
], null))));
});})(reservation,date_picker_dom))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (reservation,date_picker_dom){
return (function (placeholder__$1,the_atom__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-inline","div.uk-inline",-2089757713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.date-picker.uk-input.uk-text-small.uk-text-center","input.date-picker.uk-input.uk-text-small.uk-text-center",-950354451),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder__$1,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reservation))], null)], null)], null);
});})(reservation,date_picker_dom))
], null));
});
lvlup.crusader.reservation.time_picker = (function lvlup$crusader$reservation$time_picker(placeholder,the_key){
var reservation = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"reservation-data"], null));
var time_picker_dom = reagent.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (reservation,time_picker_dom){
return (function (){
return cljs.core.reset_BANG_.call(null,time_picker_dom,jayq.core.$.call(null,[cljs.core.str(".time-picker"),cljs.core.str(cljs.core.name.call(null,the_key))].join('')).pickatime(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, ["onSet",((function (reservation,time_picker_dom){
return (function (a){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-reservation-data","set-reservation-data",-220938308),the_key,[cljs.core.str(cljs.core.quot.call(null,cljs.core.get.call(null,cljs.core.js__GT_clj.call(null,a),"select"),(60))),cljs.core.str(":"),cljs.core.str(cljs.core.rem.call(null,cljs.core.get.call(null,cljs.core.js__GT_clj.call(null,a),"select"),(60)))].join('')], null));
});})(reservation,time_picker_dom))
,new cljs.core.Keyword(null,"disable","disable",1717637504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(30)], null)], null)], null),new cljs.core.Keyword(null,"format","format",-1306924766),"HH:i"], null))));
});})(reservation,time_picker_dom))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (reservation,time_picker_dom){
return (function (placeholder__$1,the_key__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-inline","div.uk-inline",-2089757713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.uk-input.uk-text-small.uk-text-center","input.uk-input.uk-text-small.uk-text-center",1453384435),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,cljs.core.deref.call(null,reservation),the_key__$1),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("time-picker"),cljs.core.str(cljs.core.name.call(null,the_key__$1))].join(''),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder__$1], null)], null)], null);
});})(reservation,time_picker_dom))
], null));
});
lvlup.crusader.reservation.system_checkbox = (function lvlup$crusader$reservation$system_checkbox(reservation,item){
var reservation__$1 = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"reservation-data"], null));
var actual_page = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"actual-page"], null));
return ((function (reservation__$1,actual_page){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.not_EQ_.call(null,(0),cljs.core.count.call(null,cljs.core.filter.call(null,((function (reservation__$1,actual_page){
return (function (b){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),b);
});})(reservation__$1,actual_page))
,new cljs.core.Keyword(null,"system-name","system-name",1074560532).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reservation__$1))))))?"system-active":"")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.name,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (reservation__$1,actual_page){
return (function (a){
if(cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,cljs.core.filter.call(null,((function (reservation__$1,actual_page){
return (function (b){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),b);
});})(reservation__$1,actual_page))
,new cljs.core.Keyword(null,"system-name","system-name",1074560532).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reservation__$1)))))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-reservation-data","set-reservation-data",-220938308),new cljs.core.Keyword(null,"system-name","system-name",1074560532),cljs.core.conj.call(null,new cljs.core.Keyword(null,"system-name","system-name",1074560532).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reservation__$1)),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item))], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-reservation-data","set-reservation-data",-220938308),new cljs.core.Keyword(null,"system-name","system-name",1074560532),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,((function (reservation__$1,actual_page){
return (function (c){
return cljs.core._EQ_.call(null,c,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item));
});})(reservation__$1,actual_page))
,new cljs.core.Keyword(null,"system-name","system-name",1074560532).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reservation__$1))))], null));
}
});})(reservation__$1,actual_page))
], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item)], null)], null);
});
;})(reservation__$1,actual_page))
});
lvlup.crusader.reservation.reservation_item = (function lvlup$crusader$reservation$reservation_item(item){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-primary.uk-width-1-1","button.uk-button.uk-button-primary.uk-width-1-1",-488926781),[cljs.core.str(new cljs.core.Keyword(null,"system-name","system-name",1074560532).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str(" : "),cljs.core.str(new cljs.core.Keyword(null,"start-hour","start-hour",380944413).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str(" - "),cljs.core.str(new cljs.core.Keyword(null,"finish-hour","finish-hour",-1036026812).cljs$core$IFn$_invoke$arity$1(item))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-default.uk-width-2-3","button.uk-button.uk-button-default.uk-width-2-3",1223064313),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-default.uk-width-1-3","button.uk-button.uk-button-default.uk-width-1-3",1949423727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-reservation","delete-reservation",1158232287),new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(item),cljs.core.type], null));
})], null),"X"], null)], null);
});
lvlup.crusader.reservation.delete_reservation = (function lvlup$crusader$reservation$delete_reservation(){
var date = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"time"], null));
var reservation = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"date","date",-1463434462),null], null));
var reservations = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"reservations"], null));
return ((function (date,reservation,reservations){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.uk-heading-bullet","h2.uk-heading-bullet",-1605805287),"Edit reservation!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-child-width-1-1","div.uk-child-width-1-1",-1931150107),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-inline","div.uk-inline",-2089757713),cljs.core.map_indexed.call(null,((function (date,reservation,reservations){
return (function (p1__55440_SHARP_,p2__55441_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.reservation_item,p2__55441_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__55440_SHARP_], null));
});})(date,reservation,reservations))
,cljs.core.deref.call(null,reservations))], null)], null)], null);
});
;})(date,reservation,reservations))
});
lvlup.crusader.reservation.add_reservation = (function lvlup$crusader$reservation$add_reservation(){
var actual_page = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"actual-page"], null));
var system_map = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"system-map"], null));
var reservation = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"reservation-data"], null));
return ((function (actual_page,system_map,reservation){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.uk-heading-bullet","h2.uk-heading-bullet",-1605805287),"Add reservation!"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-child-width-1-1","div.uk-child-width-1-1",-1931150107),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.uk-input.uk-text-small.uk-text-center","input.uk-input.uk-text-small.uk-text-center",1453384435),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Name",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reservation)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (actual_page,system_map,reservation){
return (function (p1__55442_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-reservation-data","set-reservation-data",-220938308),new cljs.core.Keyword(null,"name","name",1843675177),p1__55442_SHARP_.target.value], null));
});})(actual_page,system_map,reservation))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.date_picker,"Date",cljs.core.type], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.time_picker,"Start",new cljs.core.Keyword(null,"start-hour","start-hour",380944413)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.time_picker,"Finish",new cljs.core.Keyword(null,"finish-hour","finish-hour",-1036026812)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-inline","div.uk-inline",-2089757713),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-default.uk-align-center.uk-width-1-1.uk-margin-remove","button.uk-button.uk-button-default.uk-align-center.uk-width-1-1.uk-margin-remove",945695720),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"button"], null),"Helyek"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-dropdown","data-uk-dropdown",1759033746),"mode: click; pos: bottom-center; animation: uk-animation-slide-top-small; duration: 250"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.uk-nav.uk-dropdown-nav","ul.uk-nav.uk-dropdown-nav",1381351296),cljs.core.map_indexed.call(null,((function (actual_page,system_map,reservation){
return (function (p1__55444_SHARP_,p2__55443_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.system_checkbox,reservation,p2__55443_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p2__55443_SHARP_)], null));
});})(actual_page,system_map,reservation))
,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"number","number",1570378438),cljs.core.deref.call(null,system_map)))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-button.uk-button-primary.uk-width-1-1.uk-margin-remove.uk-align-center","div.uk-button.uk-button-primary.uk-width-1-1.uk-margin-remove.uk-align-center",-381671095),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (actual_page,system_map,reservation){
return (function (){
if(cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,new cljs.core.Keyword(null,"system-name","system-name",1074560532).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reservation))))){
return UIkit.notification("Nem v\u00E1lasztott\u00E1l ki g\u00E9pet :(",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["pos","top-right"], null)));
} else {
if(cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"start-hour","start-hour",380944413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reservation)))){
return UIkit.notification("Nem adt\u00E1l meg kezd\u0151id\u0151pontot :/",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["pos","top-right"], null)));
} else {
if(cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reservation)))){
return UIkit.notification("Nem adt\u00E1l meg nevet :/",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["pos","top-right"], null)));
} else {
if(cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reservation)))){
return UIkit.notification("Nem adt\u00E1l meg d\u00E1tumot :/",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["pos","top-right"], null)));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-reservation","add-reservation",-773621221),cljs.core.assoc.call(null,cljs.core.deref.call(null,reservation),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.deref.call(null,actual_page))], null));

}
}
}
}
});})(actual_page,system_map,reservation))
], null),"Foglal\u00E1s!"], null)], null)], null);
});
;})(actual_page,system_map,reservation))
});
lvlup.crusader.reservation.sidebar_delete_reservation = (function lvlup$crusader$reservation$sidebar_delete_reservation(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#my-id2","div#my-id2",707701210),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-offcanvas","data-uk-offcanvas",-993697617),"mode: flip; overlay: true; flip: true"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-offcanvas-bar","div.uk-offcanvas-bar",-1472308011),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-offcanvas-close","button.uk-offcanvas-close",-1973070779),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uk-close","data-uk-close",-997254796),"uk-close",new cljs.core.Keyword(null,"type","type",1174270348),"button"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.delete_reservation], null)], null)], null);
});
lvlup.crusader.reservation.sidebar_reservation = (function lvlup$crusader$reservation$sidebar_reservation(){
var actual_page = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"actual-page"], null));
return ((function (actual_page){
return (function (){
cljs.core.deref.call(null,actual_page);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#my-id","div#my-id",1187691370),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-offcanvas","data-uk-offcanvas",-993697617),"mode: flip; overlay: true"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-offcanvas-bar","div.uk-offcanvas-bar",-1472308011),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-offcanvas-close","button.uk-offcanvas-close",-1973070779),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uk-close","data-uk-close",-997254796),"uk-close",new cljs.core.Keyword(null,"type","type",1174270348),"button"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.add_reservation], null)], null)], null);
});
;})(actual_page))
});
lvlup.crusader.reservation.get_day = (function lvlup$crusader$reservation$get_day(nap){
var G__55446 = nap;
switch (G__55446) {
case (1):
return "H\u00E9tf\u0151";

break;
case (2):
return "Kedd";

break;
case (3):
return "Szerda";

break;
case (4):
return "Cs\u00FCt\u00F6rt\u00F6k";

break;
case (5):
return "P\u00E9ntek";

break;
case (6):
return "Szombat";

break;
case (0):
return "Vas\u00E1rnap";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(nap)].join('')));

}
});
lvlup.crusader.reservation.write_date = (function lvlup$crusader$reservation$write_date(date){
return [cljs.core.str(cljs.core.deref.call(null,date).getFullYear()),cljs.core.str("-"),cljs.core.str((cljs.core.deref.call(null,date).getMonth() + (1))),cljs.core.str("-"),cljs.core.str(cljs.core.deref.call(null,date).getDate())].join('');
});
lvlup.crusader.reservation.get_date = (function lvlup$crusader$reservation$get_date(date){
return [cljs.core.str((function (){var G__55449 = (cljs.core.deref.call(null,date).getMonth() + (1));
switch (G__55449) {
case (1):
return "Janu\u00E1r";

break;
case (2):
return "Febru\u00E1r";

break;
case (3):
return "M\u00E1rcius";

break;
case (4):
return "\u00C1prilis";

break;
case (5):
return "M\u00E1jus";

break;
case (6):
return "J\u00FAnius";

break;
case (7):
return "J\u00FAlius";

break;
case (8):
return "Augusztus";

break;
case (9):
return "Szeptember";

break;
case (10):
return "Okt\u00F3ber";

break;
case (11):
return "November";

break;
case (12):
return "December";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str((cljs.core.deref.call(null,date).getMonth() + (1)))].join('')));

}
})()),cljs.core.str(" "),cljs.core.str(cljs.core.deref.call(null,date).getDate()),cljs.core.str(".")].join('');
});
lvlup.crusader.reservation.reservation_2 = (function lvlup$crusader$reservation$reservation_2(){
var reservation = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"date","date",-1463434462),null], null));
var date = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"time"], null));
var reservations = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"reservations"], null));
var counter = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"counter"], null));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (reservation,date,reservations,counter){
return (function (){
lvlup.sente.start_router_BANG_.call(null);

return lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-dungeon","dungeon/get-dungeon",1397841491)], null));
});})(reservation,date,reservations,counter))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (reservation,date,reservations,counter){
return (function (){
cljs.core.deref.call(null,counter);

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-offcanvas-content","div.uk-offcanvas-content",-1929050977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card.uk-card-secondary","div.uk-card.uk-card-secondary",725560384),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-child-width-1-3.uk-grid","div.uk-child-width-1-3.uk-grid",-1359645409),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.uk-text-left","a.uk-text-left",655235022),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (reservation,date,reservations,counter){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-date","change-date",576629252),"sub"], null));
});})(reservation,date,reservations,counter))
,new cljs.core.Keyword(null,"data-uk-icon","data-uk-icon",1809176669),"icon: chevron-left; ratio: 3"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.uk-margin-remove.uk-text-center","h1.uk-margin-remove.uk-text-center",1936914079),lvlup.crusader.reservation.get_date.call(null,date)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.uk-margin-remove.uk-text-center","h3.uk-margin-remove.uk-text-center",1865617160),lvlup.crusader.reservation.get_day.call(null,cljs.core.deref.call(null,date).getDay())], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.uk-text-right","a.uk-text-right",-1876983629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (reservation,date,reservations,counter){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-date","change-date",576629252),"add"], null));
});})(reservation,date,reservations,counter))
,new cljs.core.Keyword(null,"data-uk-icon","data-uk-icon",1809176669),"icon: chevron-right; ratio: 3"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.sidebar_reservation], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.sidebar_delete_reservation], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-child-width-1-3","div.uk-child-width-1-3",31583329),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data-uk-icon","data-uk-icon",1809176669),"icon: plus-circle; ratio: 1.5",new cljs.core.Keyword(null,"class","class",-2030961996),"uk-button uk-button-primary",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-uk-toggle","data-uk-toggle",848108070),"target: #my-id"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.date_picker,"Date",reservation], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data-uk-icon","data-uk-icon",1809176669),"icon: file-edit; ratio: 1.5",new cljs.core.Keyword(null,"class","class",-2030961996),"uk-button uk-button-primary",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-uk-toggle","data-uk-toggle",848108070),"target: #my-id2"], null)], null)], null)], null),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,reservations),null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img#loading","img#loading",664187973),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"auto",new cljs.core.Keyword(null,"height","height",1025178622),"300px",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),"50%",new cljs.core.Keyword(null,"top","top",-1856271961),"50%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"-150px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"-150px"], null),new cljs.core.Keyword(null,"src","src",-1651076051),"/img/lvlup-logo-transparent.png"], null)], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.timetable","div.timetable",711303639)], null)], null);
});})(reservation,date,reservations,counter))
], null));
});
lvlup.crusader.reservation.quarters = (function lvlup$crusader$reservation$quarters(hour,quarter){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-text-right","div.uk-text-right",-1941585944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"10px"], null)], null),quarter], null);
});
lvlup.crusader.reservation.hours_time = (function lvlup$crusader$reservation$hours_time(hour){
var minutes = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["00",(15),(30),(45)], null);
return ((function (minutes){
return (function (hour__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-grid.uk-grid-match.uk-margin-remove","div.uk-grid.uk-grid-match.uk-margin-remove",1409389156),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-expand.uk-padding-remove","div.uk-width-expand.uk-padding-remove",617652681),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-inline","div.uk-inline",-2089757713),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-margin-small.uk-position-center","div.uk-margin-small.uk-position-center",-1007702107),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.8em"], null)], null),hour__$1], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-expand.uk-padding-remove","div.uk-width-expand.uk-padding-remove",617652681),cljs.core.map_indexed.call(null,((function (minutes){
return (function (p1__55452_SHARP_,p2__55451_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.quarters,hour__$1,p2__55451_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p2__55451_SHARP_], null));
});})(minutes))
,minutes)], null)], null);
});
;})(minutes))
});
lvlup.crusader.reservation.reservation_dates = (function lvlup$crusader$reservation$reservation_dates(){
var hours = cljs.core.vec.call(null,cljs.core.range.call(null,(12),(26)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card.uk-card-secondary.uk-padding-remove","div.uk-card.uk-card-secondary.uk-padding-remove",-1751767830),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"80px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-inline.uk-margin-small.uk-padding-small.uk-padding-remove-vertical.uk-card.uk-card-secondary","div.uk-inline.uk-margin-small.uk-padding-small.uk-padding-remove-vertical.uk-card.uk-card-secondary",60238338),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uk-sticky","data-uk-sticky",1691370808)," bottom: #top",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),"980",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"30px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"/Icons/time.svg",new cljs.core.Keyword(null,"height","height",1025178622),"50",new cljs.core.Keyword(null,"width","width",-384071477),"50"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map_indexed.call(null,((function (hours){
return (function (p1__55454_SHARP_,p2__55453_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.hours_time,p2__55453_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p2__55453_SHARP_], null));
});})(hours))
,cljs.core.filter.call(null,((function (hours){
return (function (p1__55455_SHARP_){
return ((p1__55455_SHARP_ >= (12))) && ((p1__55455_SHARP_ <= (25)));
});})(hours))
,hours))], null)], null)], null)], null);
});
lvlup.crusader.reservation.calc_top = (function lvlup$crusader$reservation$calc_top(item){
return null;
});
lvlup.crusader.reservation.calc_height = (function lvlup$crusader$reservation$calc_height(item){
return null;
});
lvlup.crusader.reservation.one_reservation = (function lvlup$crusader$reservation$one_reservation(reservation){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card.uk-card-default.uk-padding-small.uk-margin-small.uk-inline.one-reservation","div.uk-card.uk-card-default.uk-padding-small.uk-margin-small.uk-inline.one-reservation",1713358822),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uk-toggle","data-uk-toggle",848108070),"target: #my-id",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"transition","transition",765692007),"transform .05s ease-in-out",new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str(((18) * lvlup.crusader.reservation.calc_top.call(null,new cljs.core.Keyword(null,"start-hour","start-hour",380944413).cljs$core$IFn$_invoke$arity$1(reservation)))),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str(((18) * lvlup.crusader.reservation.calc_height.call(null,new cljs.core.Keyword(null,"start-hour","start-hour",380944413).cljs$core$IFn$_invoke$arity$1(reservation)))),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-position-center","div.uk-position-center",531257079),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uk-tooltip","data-uk-tooltip",604665367),"title: Morvai Viktor; pos: bottom",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),"M. V."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.uk-label.uk-label-success.uk-position-top","span.uk-label.uk-label-success.uk-position-top",925433143),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uk-tooltip","data-uk-tooltip",604665367),"title: 12:30; pos: top",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"20px",new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.uk-label.uk-label-success.uk-position-bottom","span.uk-label.uk-label-success.uk-position-bottom",1706688522),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uk-tooltip","data-uk-tooltip",604665367),"title: 15:45; pos: bottom",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"25px",new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null)], null)], null)], null);
});
lvlup.crusader.reservation.reservation_column = (function lvlup$crusader$reservation$reservation_column(item){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
dragscroll.reset();

window.reservationInteract();

return window.interact(".dropzone").dropzone(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"accept","accept",1874130431),".draggable-reservation",new cljs.core.Keyword(null,"ondragenter","ondragenter",667057179),(function (e){
return UIkit.notification("mukodik");
}),new cljs.core.Keyword(null,"ondrop","ondrop",-1343708790),(function (e){
return UIkit.notification("meh");
})], null)));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-small.uk-padding-remove-vertical.uk-width-auto","div.uk-padding-small.uk-padding-remove-vertical.uk-width-auto",81290182),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-remove","div.uk-padding-remove",-1054351263),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-text-center","div.uk-text-center",-1334382774),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-inline.uk-margin-small.uk-align-center","div.uk-inline.uk-margin-small.uk-align-center",1454861638),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),(function (){var G__55457 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item);
switch (G__55457) {
case "ps":
return "/Icons/ps.svg";

break;
case "xbox":
return "/Icons/xbox.svg";

break;
case "pc":
return "/Icons/pc.svg";

break;
default:
return "hmm";

}
})(),new cljs.core.Keyword(null,"height","height",1025178622),"50",new cljs.core.Keyword(null,"width","width",-384071477),"50"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.uk-badge.uk-position-bottom-left","span.uk-badge.uk-position-bottom-left",-873791917),new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(item)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-grid.uk-margin-remove.uk-height-1-1","div.uk-grid.uk-margin-remove.uk-height-1-1",295745793),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"calc(100% - 60px)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-1-1.dropzone.uk-padding-remove","div.uk-width-1-1.dropzone.uk-padding-remove",-761869684),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.one_reservation], null)], null)], null)], null)], null);
})], null));
});
lvlup.crusader.reservation.choose_systems = (function lvlup$crusader$reservation$choose_systems(){
var system_map = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"system-map"], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-grid.uk-margin","div.uk-grid.uk-margin",-2000332511),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),(function (){var iter__37538__auto__ = ((function (system_map){
return (function lvlup$crusader$reservation$choose_systems_$_iter__55467(s__55468){
return (new cljs.core.LazySeq(null,((function (system_map){
return (function (){
var s__55468__$1 = s__55468;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__55468__$1);
if(temp__4657__auto__){
var s__55468__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55468__$2)){
var c__37536__auto__ = cljs.core.chunk_first.call(null,s__55468__$2);
var size__37537__auto__ = cljs.core.count.call(null,c__37536__auto__);
var b__55470 = cljs.core.chunk_buffer.call(null,size__37537__auto__);
if((function (){var i__55469 = (0);
while(true){
if((i__55469 < size__37537__auto__)){
var item = cljs.core._nth.call(null,c__37536__auto__,i__55469);
cljs.core.chunk_append.call(null,b__55470,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-1-4.uk-padding-small.reserve-system","div.uk-width-1-4.uk-padding-small.reserve-system",-972633902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.uk-align-center","img.uk-align-center",-723062974),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),(function (){var G__55473 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item);
switch (G__55473) {
case "ps":
return "/Icons/ps.svg";

break;
case "xbox":
return "/Icons/xbox.svg";

break;
case "pc":
return "/Icons/pc.svg";

break;
default:
return "hmm";

}
})(),new cljs.core.Keyword(null,"height","height",1025178622),"50",new cljs.core.Keyword(null,"width","width",-384071477),"50"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(item)], null)));

var G__55476 = (i__55469 + (1));
i__55469 = G__55476;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55470),lvlup$crusader$reservation$choose_systems_$_iter__55467.call(null,cljs.core.chunk_rest.call(null,s__55468__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55470),null);
}
} else {
var item = cljs.core.first.call(null,s__55468__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-1-4.uk-padding-small.reserve-system","div.uk-width-1-4.uk-padding-small.reserve-system",-972633902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.uk-align-center","img.uk-align-center",-723062974),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),(function (){var G__55474 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item);
switch (G__55474) {
case "ps":
return "/Icons/ps.svg";

break;
case "xbox":
return "/Icons/xbox.svg";

break;
case "pc":
return "/Icons/pc.svg";

break;
default:
return "hmm";

}
})(),new cljs.core.Keyword(null,"height","height",1025178622),"50",new cljs.core.Keyword(null,"width","width",-384071477),"50"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(item)], null)),lvlup$crusader$reservation$choose_systems_$_iter__55467.call(null,cljs.core.rest.call(null,s__55468__$2)));
}
} else {
return null;
}
break;
}
});})(system_map))
,null,null));
});})(system_map))
;
return iter__37538__auto__.call(null,cljs.core.deref.call(null,system_map));
})()], null);
});
lvlup.crusader.reservation.szeged_opening_hours = new cljs.core.PersistentArrayMap(null, 7, [(0),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(48),new cljs.core.Keyword(null,"to","to",192099007),(92)], null),(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(48),new cljs.core.Keyword(null,"to","to",192099007),(96)], null),(2),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(48),new cljs.core.Keyword(null,"to","to",192099007),(96)], null),(3),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(48),new cljs.core.Keyword(null,"to","to",192099007),(96)], null),(4),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(48),new cljs.core.Keyword(null,"to","to",192099007),(104)], null),(5),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(48),new cljs.core.Keyword(null,"to","to",192099007),(104)], null),(6),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(48),new cljs.core.Keyword(null,"to","to",192099007),(104)], null)], null);
lvlup.crusader.reservation.which_quarter = (function lvlup$crusader$reservation$which_quarter(number){
var G__55479 = number;
switch (G__55479) {
case (0):
return "00";

break;
case (1):
return "15";

break;
case (2):
return "30";

break;
case (3):
return "45";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(number)].join('')));

}
});
lvlup.crusader.reservation.to_24_pm = (function lvlup$crusader$reservation$to_24_pm(hour){
if(((23) < hour)){
return (hour - (24));
} else {
return hour;
}
});
lvlup.crusader.reservation.quarter_to_time = (function lvlup$crusader$reservation$quarter_to_time(quarter){
return [cljs.core.str(goog.string.format("%02d",lvlup.crusader.reservation.to_24_pm.call(null,cljs.core.quot.call(null,quarter,(4))))),cljs.core.str(":"),cljs.core.str(lvlup.crusader.reservation.which_quarter.call(null,cljs.core.mod.call(null,quarter,(4))))].join('');
});
lvlup.crusader.reservation.display_time = (function lvlup$crusader$reservation$display_time(p__55481){
var vec__55485 = p__55481;
var from = cljs.core.nth.call(null,vec__55485,(0),null);
var to = cljs.core.nth.call(null,vec__55485,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.uk-text-center","h1.uk-text-center",-826267756),[cljs.core.str(lvlup.crusader.reservation.quarter_to_time.call(null,from)),cljs.core.str(" - "),cljs.core.str(lvlup.crusader.reservation.quarter_to_time.call(null,to))].join('')], null);
});
lvlup.crusader.reservation.reservation_modal = (function lvlup$crusader$reservation$reservation_modal(){
var date = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"time"], null));
var modal_day = reagent.core.atom.call(null,(0));
var opening_hours = ((function (date,modal_day){
return (function (){
return cljs.core.get.call(null,lvlup.crusader.reservation.szeged_opening_hours,cljs.core.deref.call(null,modal_day));
});})(date,modal_day))
;
var slider_atom = reagent.core.atom.call(null,null);
var slider_values = reagent.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (date,modal_day,opening_hours,slider_atom,slider_values){
return (function (){
window.flatpickr("#flatpickr",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, ["altInput",true,"altFormat","F j, Y","dateFormat","Y-m-d","locale","hu","onChange",((function (date,modal_day,opening_hours,slider_atom,slider_values){
return (function (a,b,c){
cljs.core.reset_BANG_.call(null,modal_day,cljs.core.first.call(null,a).getDay());

return cljs.core.deref.call(null,slider_atom).updateOptions(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 2, ["min",new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(opening_hours.call(null)),"max",new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(opening_hours.call(null))], null)], null)),true);
});})(date,modal_day,opening_hours,slider_atom,slider_values))
], null)));

cljs.core.reset_BANG_.call(null,slider_atom,noUiSlider.create(document.getElementById("no-ui-slider"),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(55),(66)], null),new cljs.core.Keyword(null,"connect","connect",1232828233),true,new cljs.core.Keyword(null,"step","step",1288888124),(1),new cljs.core.Keyword(null,"margin","margin",-995903681),(4),new cljs.core.Keyword(null,"behaviour","behaviour",-2039639833),"drag-tap",new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 2, ["min",new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(opening_hours.call(null)),"max",new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(opening_hours.call(null))], null)], null))));

return cljs.core.deref.call(null,slider_atom).on("update",((function (date,modal_day,opening_hours,slider_atom,slider_values){
return (function (e){
return cljs.core.reset_BANG_.call(null,slider_values,cljs.core.js__GT_clj.call(null,e));
});})(date,modal_day,opening_hours,slider_atom,slider_values))
);
});})(date,modal_day,opening_hours,slider_atom,slider_values))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (date,modal_day,opening_hours,slider_atom,slider_values){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#my-id","div#my-id",1187691370),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uk-modal","data-uk-modal",278480993),"bg-close:\tfalse",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),0.95], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-modal-dialog","div.uk-modal-dialog",-1415146233),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-modal-close-default","button.uk-modal-close-default",-844937770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uk-close","data-uk-close",-997254796),true,new cljs.core.Keyword(null,"type","type",1174270348),"button"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-modal-header","div.uk-modal-header",-1067934196),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.uk-modal-title","h2.uk-modal-title",-1469061271),"Foglal\u00E1s m\u00F3dos\u00EDt\u00E1sa"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-modal-body","div.uk-modal-body",-1571978562),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.uk-form","form.uk-form",1740095923),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-margin","div.uk-margin",1820567476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#flatpickr.uk-input.uk-form-width-medium.uk-form-large.uk-text-center.uk-width-1-2","input#flatpickr.uk-input.uk-form-width-medium.uk-form-large.uk-text-center.uk-width-1-2",2135213550),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"D\u00E1tum"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.uk-margin-small.uk-width-1-2.uk-text-center.uk-text-truncate","h2.uk-margin-small.uk-width-1-2.uk-text-center.uk-text-truncate",-364189312),"Asztalos \u00C1d\u00E1m"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.display_time,cljs.core.deref.call(null,slider_values)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#no-ui-slider","div#no-ui-slider",-411163583)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.choose_systems], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-modal-footer.uk-text-right","div.uk-modal-footer.uk-text-right",1102032848),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-default.uk-modal-close","button.uk-button.uk-button-default.uk-modal-close",1760120283),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"button"], null),"M\u00E9gsem"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-primary","button.uk-button.uk-button-primary",-1963381556),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"button"], null),"Ment\u00E9s"], null)], null)], null)], null);
});})(date,modal_day,opening_hours,slider_atom,slider_values))
], null));
});
lvlup.crusader.reservation.reservation = (function lvlup$crusader$reservation$reservation(){
var system_map = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"system-map"], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-grid.uk-margin-top","div.uk-grid.uk-margin-top",-134738251),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.reservation_modal], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.reservation_dates], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-remove.uk-margin-remove.dragscroll","div.uk-padding-remove.uk-margin-remove.dragscroll",513989244),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"calc(100vw - 100px)",new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"scroll",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"visible"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-grid.uk-child-width-auto.reservation-grid.uk-margin-remove.uk-card.uk-card-secondary.restrict","div.uk-grid.uk-child-width-auto.reservation-grid.uk-margin-remove.uk-card.uk-card-secondary.restrict",672128121),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"max-content",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),(function (){var iter__37538__auto__ = ((function (system_map){
return (function lvlup$crusader$reservation$reservation_$_iter__55492(s__55493){
return (new cljs.core.LazySeq(null,((function (system_map){
return (function (){
var s__55493__$1 = s__55493;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__55493__$1);
if(temp__4657__auto__){
var s__55493__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55493__$2)){
var c__37536__auto__ = cljs.core.chunk_first.call(null,s__55493__$2);
var size__37537__auto__ = cljs.core.count.call(null,c__37536__auto__);
var b__55495 = cljs.core.chunk_buffer.call(null,size__37537__auto__);
if((function (){var i__55494 = (0);
while(true){
if((i__55494 < size__37537__auto__)){
var item = cljs.core._nth.call(null,c__37536__auto__,i__55494);
cljs.core.chunk_append.call(null,b__55495,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.reservation_column,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("h"),cljs.core.str(item)].join('')], null)));

var G__55496 = (i__55494 + (1));
i__55494 = G__55496;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55495),lvlup$crusader$reservation$reservation_$_iter__55492.call(null,cljs.core.chunk_rest.call(null,s__55493__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55495),null);
}
} else {
var item = cljs.core.first.call(null,s__55493__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.reservation_column,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("h"),cljs.core.str(item)].join('')], null)),lvlup$crusader$reservation$reservation_$_iter__55492.call(null,cljs.core.rest.call(null,s__55493__$2)));
}
} else {
return null;
}
break;
}
});})(system_map))
,null,null));
});})(system_map))
;
return iter__37538__auto__.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"number","number",1570378438),cljs.core.deref.call(null,system_map)));
})()], null)], null)], null);
});

//# sourceMappingURL=reservation.js.map