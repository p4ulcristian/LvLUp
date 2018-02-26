// Compiled by ClojureScript 1.9.229 {}
goog.provide('lvlup.crusader.reservation');
goog.require('cljs.core');
goog.require('lvlup.subs');
goog.require('taoensso.sente');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('reagent.session');
goog.require('cljs.core.async');
goog.require('lvlup.sente');
goog.require('cljs_time.core');
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
return (function (p1__42945_SHARP_,p2__42946_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.reservation_item,p2__42946_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__42945_SHARP_], null));
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
return (function (p1__42947_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-reservation-data","set-reservation-data",-220938308),new cljs.core.Keyword(null,"name","name",1843675177),p1__42947_SHARP_.target.value], null));
});})(actual_page,system_map,reservation))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.date_picker,"Date",cljs.core.type], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.time_picker,"Start",new cljs.core.Keyword(null,"start-hour","start-hour",380944413)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.time_picker,"Finish",new cljs.core.Keyword(null,"finish-hour","finish-hour",-1036026812)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-inline","div.uk-inline",-2089757713),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-default.uk-align-center.uk-width-1-1.uk-margin-remove","button.uk-button.uk-button-default.uk-align-center.uk-width-1-1.uk-margin-remove",945695720),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"button"], null),"Helyek"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-dropdown","data-uk-dropdown",1759033746),"mode: click; pos: bottom-center; animation: uk-animation-slide-top-small; duration: 250"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.uk-nav.uk-dropdown-nav","ul.uk-nav.uk-dropdown-nav",1381351296),cljs.core.map_indexed.call(null,((function (actual_page,system_map,reservation){
return (function (p1__42949_SHARP_,p2__42948_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.system_checkbox,reservation,p2__42948_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p2__42948_SHARP_)], null));
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
var G__42951 = nap;
switch (G__42951) {
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
return [cljs.core.str((function (){var G__42954 = (cljs.core.deref.call(null,date).getMonth() + (1));
switch (G__42954) {
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
lvlup.crusader.reservation.reservation = (function lvlup$crusader$reservation$reservation(){
var reservation__$1 = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"date","date",-1463434462),null], null));
var date = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"time"], null));
var reservations = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"reservations"], null));
var counter = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"counter"], null));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (reservation__$1,date,reservations,counter){
return (function (){
lvlup.sente.start_router_BANG_.call(null);

return lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-dungeon","dungeon/get-dungeon",1397841491)], null));
});})(reservation__$1,date,reservations,counter))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (reservation__$1,date,reservations,counter){
return (function (){
cljs.core.deref.call(null,counter);

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-offcanvas-content","div.uk-offcanvas-content",-1929050977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card.uk-card-secondary","div.uk-card.uk-card-secondary",725560384),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-child-width-1-3.uk-grid","div.uk-child-width-1-3.uk-grid",-1359645409),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.uk-text-left","a.uk-text-left",655235022),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (reservation__$1,date,reservations,counter){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-date","change-date",576629252),"sub"], null));
});})(reservation__$1,date,reservations,counter))
,new cljs.core.Keyword(null,"data-uk-icon","data-uk-icon",1809176669),"icon: chevron-left; ratio: 3"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.uk-margin-remove.uk-text-center","h1.uk-margin-remove.uk-text-center",1936914079),lvlup.crusader.reservation.get_date.call(null,date)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.uk-margin-remove.uk-text-center","h3.uk-margin-remove.uk-text-center",1865617160),lvlup.crusader.reservation.get_day.call(null,cljs.core.deref.call(null,date).getDay())], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.uk-text-right","a.uk-text-right",-1876983629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (reservation__$1,date,reservations,counter){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-date","change-date",576629252),"add"], null));
});})(reservation__$1,date,reservations,counter))
,new cljs.core.Keyword(null,"data-uk-icon","data-uk-icon",1809176669),"icon: chevron-right; ratio: 3"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.sidebar_reservation], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.sidebar_delete_reservation], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-child-width-1-3","div.uk-child-width-1-3",31583329),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data-uk-icon","data-uk-icon",1809176669),"icon: plus-circle; ratio: 1.5",new cljs.core.Keyword(null,"class","class",-2030961996),"uk-button uk-button-primary",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-uk-toggle","data-uk-toggle",848108070),"target: #my-id"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.date_picker,"Date",reservation__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data-uk-icon","data-uk-icon",1809176669),"icon: file-edit; ratio: 1.5",new cljs.core.Keyword(null,"class","class",-2030961996),"uk-button uk-button-primary",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-uk-toggle","data-uk-toggle",848108070),"target: #my-id2"], null)], null)], null)], null),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,reservations),null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img#loading","img#loading",664187973),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"auto",new cljs.core.Keyword(null,"height","height",1025178622),"300px",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),"50%",new cljs.core.Keyword(null,"top","top",-1856271961),"50%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"-150px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"-150px"], null),new cljs.core.Keyword(null,"src","src",-1651076051),"/img/lvlup-logo-transparent.png"], null)], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.timetable","div.timetable",711303639)], null)], null);
});})(reservation__$1,date,reservations,counter))
], null));
});

//# sourceMappingURL=reservation.js.map