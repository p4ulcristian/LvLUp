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
goog.require('cljs_time.core');
goog.require('clojure.set');
goog.require('cljs_time.format');
goog.require('jayq.core');
goog.require('lvlup.events');
goog.require('cljs_time.coerce');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('re_frame.core');
lvlup.crusader.reservation.szeged_tables = (function lvlup$crusader$reservation$szeged_tables(){
var numbers = cljs.core.range.call(null,(1),(13));
return cljs.core.vec.call(null,cljs.core.map.call(null,((function (numbers){
return (function (p1__136537_SHARP_){
return cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348),"table",new cljs.core.Keyword(null,"number","number",1570378438),p1__136537_SHARP_,new cljs.core.Keyword(null,"reservation-type","reservation-type",-936885670),"tavern");
});})(numbers))
,numbers));
});
lvlup.crusader.reservation.reservation_type = reagent.core.atom.call(null,"dungeon");
lvlup.crusader.reservation.systems_to_reservations = (function lvlup$crusader$reservation$systems_to_reservations(systems){
return cljs.core.map.call(null,(function (p1__136538_SHARP_){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,p1__136538_SHARP_,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"name","name",1843675177)),new cljs.core.Keyword(null,"reservation-type","reservation-type",-936885670),"dungeon");
}),systems);
});
lvlup.crusader.reservation.reservation_systems = (function lvlup$crusader$reservation$reservation_systems(system_map){
return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"number","number",1570378438),(function (){var G__136540 = cljs.core.deref.call(null,lvlup.crusader.reservation.reservation_type);
switch (G__136540) {
case "tavern":
return lvlup.crusader.reservation.szeged_tables.call(null);

break;
case "dungeon":
return cljs.core.map.call(null,((function (G__136540){
return (function (a){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,a,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"players","players",-1361554569)),new cljs.core.Keyword(null,"reservation-type","reservation-type",-936885670),"dungeon");
});})(G__136540))
,lvlup.crusader.reservation.systems_to_reservations.call(null,cljs.core.deref.call(null,system_map)));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.deref.call(null,lvlup.crusader.reservation.reservation_type))].join('')));

}
})());
});
lvlup.crusader.reservation.slider_atom = reagent.core.atom.call(null,null);
lvlup.crusader.reservation.szeged_opening_hours = new cljs.core.PersistentArrayMap(null, 7, [(0),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(48),new cljs.core.Keyword(null,"to","to",192099007),(92)], null),(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(48),new cljs.core.Keyword(null,"to","to",192099007),(96)], null),(2),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(48),new cljs.core.Keyword(null,"to","to",192099007),(96)], null),(3),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(48),new cljs.core.Keyword(null,"to","to",192099007),(96)], null),(4),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(48),new cljs.core.Keyword(null,"to","to",192099007),(104)], null),(5),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(48),new cljs.core.Keyword(null,"to","to",192099007),(104)], null),(6),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(48),new cljs.core.Keyword(null,"to","to",192099007),(104)], null)], null);
lvlup.crusader.reservation.opening_hours = (function lvlup$crusader$reservation$opening_hours(a){
return cljs.core.get.call(null,lvlup.crusader.reservation.szeged_opening_hours,a.getDay());
});
lvlup.crusader.reservation.convert_iso_to_read = (function lvlup$crusader$reservation$convert_iso_to_read(time){
return [cljs.core.str(goog.string.format("%04d",time.getFullYear())),cljs.core.str("-"),cljs.core.str(goog.string.format("%02d",(time.getMonth() + (1)))),cljs.core.str("-"),cljs.core.str(goog.string.format("%02d",time.getDate()))].join('');
});
lvlup.crusader.reservation.timeformat = cljs_time.format.formatter.call(null,"HH:mm");
lvlup.crusader.reservation.dateformat = cljs_time.format.formatter.call(null,"yyyy MM dd");
lvlup.crusader.reservation.convert_date = (function lvlup$crusader$reservation$convert_date(origin){
return cljs_time.format.unparse.call(null,lvlup.crusader.reservation.dateformat,cljs_time.core.plus.call(null,cljs_time.coerce.from_long.call(null,origin),cljs_time.core.days.call(null,(1))));
});
lvlup.crusader.reservation.convert_time = (function lvlup$crusader$reservation$convert_time(origin){
return cljs_time.format.unparse.call(null,lvlup.crusader.reservation.timeformat,cljs_time.coerce.from_long.call(null,origin));
});
lvlup.crusader.reservation.quarters = (function lvlup$crusader$reservation$quarters(quarter){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-text-right","div.uk-text-right",-1941585944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"10px"], null)], null),quarter], null);
});
lvlup.crusader.reservation.to_24_pm = (function lvlup$crusader$reservation$to_24_pm(hour){
if(((23) < hour)){
return (hour - (24));
} else {
return hour;
}
});
lvlup.crusader.reservation.hours_time = (function lvlup$crusader$reservation$hours_time(hour){
var minutes = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["00",(15),(30),(45)], null);
return ((function (minutes){
return (function (hour__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-grid.uk-grid-match.uk-margin-remove","div.uk-grid.uk-grid-match.uk-margin-remove",1409389156),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-expand.uk-padding-remove","div.uk-width-expand.uk-padding-remove",617652681),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-inline","div.uk-inline",-2089757713),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-margin-small.uk-position-center","div.uk-margin-small.uk-position-center",-1007702107),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.8em"], null)], null),lvlup.crusader.reservation.to_24_pm.call(null,hour__$1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-expand.uk-padding-remove","div.uk-width-expand.uk-padding-remove",617652681),cljs.core.map_indexed.call(null,((function (minutes){
return (function (p1__136543_SHARP_,p2__136542_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.quarters,p2__136542_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p2__136542_SHARP_], null));
});})(minutes))
,minutes)], null)], null);
});
;})(minutes))
});
lvlup.crusader.reservation.days = new cljs.core.PersistentArrayMap(null, 7, [(0),"Vas\u00E1rnap",(1),"H\u00E9tf\u0151",(2),"Kedd",(3),"Szerda",(4),"Cs\u00FCt\u00F6rt\u00F6k",(5),"P\u00E9ntek",(6),"Szombat"], null);
lvlup.crusader.reservation.yesterday = (function lvlup$crusader$reservation$yesterday(now){
return (new Date((now.getTime() - (86400000))));
});
lvlup.crusader.reservation.which_quarter = (function lvlup$crusader$reservation$which_quarter(number){
var G__136545 = number;
switch (G__136545) {
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
lvlup.crusader.reservation.quarter_to_time = (function lvlup$crusader$reservation$quarter_to_time(quarter){
return [cljs.core.str(goog.string.format("%02d",lvlup.crusader.reservation.to_24_pm.call(null,cljs.core.quot.call(null,quarter,(4))))),cljs.core.str(":"),cljs.core.str(lvlup.crusader.reservation.which_quarter.call(null,cljs.core.mod.call(null,quarter,(4))))].join('');
});
lvlup.crusader.reservation.reservation_dates = (function lvlup$crusader$reservation$reservation_dates(){
var date = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"date"], null));
var hours = ((function (date){
return (function (){
return cljs.core.vec.call(null,cljs.core.range.call(null,cljs.core.quot.call(null,new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(lvlup.crusader.reservation.opening_hours.call(null,cljs.core.deref.call(null,date))),(4)),cljs.core.quot.call(null,new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(lvlup.crusader.reservation.opening_hours.call(null,cljs.core.deref.call(null,date))),(4))));
});})(date))
;
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (date,hours){
return (function (){
if(!((cljs.core.quot.call(null,new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(lvlup.crusader.reservation.opening_hours.call(null,cljs.core.deref.call(null,date))),(4)) < cljs.core.deref.call(null,date).getHours()))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-date","set-date",1040663559),lvlup.crusader.reservation.yesterday.call(null,cljs.core.deref.call(null,date))], null));
} else {
return null;
}
});})(date,hours))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (date,hours){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card.uk-card-secondary.uk-padding-remove.uk-margin-remove","div.uk-card.uk-card-secondary.uk-padding-remove.uk-margin-remove",1620528508),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"80px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-inline.uk-margin-small.uk-padding-small.uk-padding-remove-vertical","div.uk-inline.uk-margin-small.uk-padding-small.uk-padding-remove-vertical",-593766542),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data-uk-sticky","data-uk-sticky",1691370808)," bottom: #top",new cljs.core.Keyword(null,"data-uk-toggle","data-uk-toggle",848108070),"target: #my-id",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (date,hours){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-reservation-modal","set-reservation-modal",-1194693674),"reset",null], null));
});})(date,hours))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),"980"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.add-reservation","img.add-reservation",216323966),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),"/Icons/plus.svg",new cljs.core.Keyword(null,"height","height",1025178622),"50",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"padding","padding",1660304693),"3px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"100px"], null),new cljs.core.Keyword(null,"width","width",-384071477),"50"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map_indexed.call(null,((function (date,hours){
return (function (p1__136548_SHARP_,p2__136547_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.hours_time,p2__136547_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p2__136547_SHARP_], null));
});})(date,hours))
,cljs.core.filter.call(null,((function (date,hours){
return (function (p1__136549_SHARP_){
return ((p1__136549_SHARP_ >= (12))) && ((p1__136549_SHARP_ <= (25)));
});})(date,hours))
,hours.call(null)))], null)], null)], null)], null);
});})(date,hours))
], null));
});
lvlup.crusader.reservation.to_monogram = (function lvlup$crusader$reservation$to_monogram(name){
return [cljs.core.str(clojure.string.upper_case.call(null,clojure.string.join.call(null,". ",cljs.core.map.call(null,cljs.core.first,clojure.string.split.call(null,name,/ /))))),cljs.core.str(".")].join('');
});
lvlup.crusader.reservation.one_reservation = (function lvlup$crusader$reservation$one_reservation(reservation){
var date = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"date"], null));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (date){
return (function (){
return cljs.core.List.EMPTY;
});})(date))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (date){
return (function (reservation__$1){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card.uk-card-default.uk-padding-small.uk-inline.one-reservation","div.uk-card.uk-card-default.uk-padding-small.uk-inline.one-reservation",-1003438267),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-uk-toggle","data-uk-toggle",848108070),"target: #my-id",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (date){
return (function (){
cljs.core.deref.call(null,lvlup.crusader.reservation.slider_atom).updateOptions(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(reservation__$1),new cljs.core.Keyword(null,"finish","finish",-586688046).cljs$core$IFn$_invoke$arity$1(reservation__$1)], null),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 2, ["min",new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(lvlup.crusader.reservation.opening_hours.call(null,(new Date(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(reservation__$1))))),"max",new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(lvlup.crusader.reservation.opening_hours.call(null,(new Date(new cljs.core.Keyword(null,"finish","finish",-586688046).cljs$core$IFn$_invoke$arity$1(reservation__$1)))))], null)], null)),true);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-reservation-modal","set-reservation-modal",-1194693674),"replace",reservation__$1], null));
});})(date))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"transition","transition",765692007),"transform .05s ease-in-out",new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str(((18) * (new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(reservation__$1) - new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(lvlup.crusader.reservation.opening_hours.call(null,cljs.core.deref.call(null,date)))))),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str(((18) * (new cljs.core.Keyword(null,"finish","finish",-586688046).cljs$core$IFn$_invoke$arity$1(reservation__$1) - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(reservation__$1)))),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-position-center.uk-text-center","div.uk-position-center.uk-text-center",918369503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uk-tooltip","data-uk-tooltip",604665367),[cljs.core.str("title: "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(reservation__$1)),cljs.core.str("; pos: bottom")].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"20px",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"20px"], null)], null),lvlup.crusader.reservation.to_monogram.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(reservation__$1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.uk-label.uk-label-success.uk-position-top","span.uk-label.uk-label-success.uk-position-top",925433143),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uk-tooltip","data-uk-tooltip",604665367),[cljs.core.str("title: "),cljs.core.str(lvlup.crusader.reservation.quarter_to_time.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(reservation__$1))),cljs.core.str("; pos: top")].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"25px",new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.uk-label.uk-label-success.uk-position-bottom","span.uk-label.uk-label-success.uk-position-bottom",1706688522),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uk-tooltip","data-uk-tooltip",604665367),[cljs.core.str("title: "),cljs.core.str(lvlup.crusader.reservation.quarter_to_time.call(null,new cljs.core.Keyword(null,"finish","finish",-586688046).cljs$core$IFn$_invoke$arity$1(reservation__$1))),cljs.core.str("; pos: bottom")].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"25px",new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null)], null)], null)], null);
});})(date))
], null));
});
lvlup.crusader.reservation.reservation_column = (function lvlup$crusader$reservation$reservation_column(item){
var reservations = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"reservations"], null));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (reservations){
return (function (){
dragscroll.reset();

window.reservationInteract();

return window.interact(".dropzone").dropzone(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"accept","accept",1874130431),".draggable-reservation",new cljs.core.Keyword(null,"ondragenter","ondragenter",667057179),((function (reservations){
return (function (e){
return UIkit.notification("mukodik");
});})(reservations))
,new cljs.core.Keyword(null,"ondrop","ondrop",-1343708790),((function (reservations){
return (function (e){
return UIkit.notification("meh");
});})(reservations))
], null)));
});})(reservations))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (reservations){
return (function (item__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-small.uk-padding-remove-vertical.uk-width-auto","div.uk-padding-small.uk-padding-remove-vertical.uk-width-auto",81290182),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-remove","div.uk-padding-remove",-1054351263),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-text-center","div.uk-text-center",-1334382774),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-inline.uk-margin-small.uk-align-center","div.uk-inline.uk-margin-small.uk-align-center",1454861638),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),(function (){var G__136555 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item__$1);
switch (G__136555) {
case "ps":
return "/Icons/ps.svg";

break;
case "xbox":
return "/Icons/xbox.svg";

break;
case "pc":
return "/Icons/pc.svg";

break;
case "table":
return "/Icons/table.svg";

break;
default:
return "hmm";

}
})(),new cljs.core.Keyword(null,"height","height",1025178622),"50",new cljs.core.Keyword(null,"width","width",-384071477),"50"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.uk-badge.uk-position-bottom-left","span.uk-badge.uk-position-bottom-left",-873791917),new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(item__$1)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-grid.uk-margin-remove.uk-height-1-1","div.uk-grid.uk-margin-remove.uk-height-1-1",295745793),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"calc(100% - 60px)"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-1-1.dropzone.uk-padding-remove","div.uk-width-1-1.dropzone.uk-padding-remove",-761869684),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),cljs.core.map_indexed.call(null,((function (reservations){
return (function (p1__136551_SHARP_,p2__136552_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.one_reservation,p2__136552_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__136551_SHARP_], null));
});})(reservations))
,cljs.core.filter.call(null,((function (reservations){
return (function (p1__136553_SHARP_){
return cljs.core.some.call(null,((function (reservations){
return (function (a){
return cljs.core._EQ_.call(null,[cljs.core.str(new cljs.core.Keyword(null,"reservation-type","reservation-type",-936885670).cljs$core$IFn$_invoke$arity$1(a)),cljs.core.str(new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(a))].join(''),[cljs.core.str(new cljs.core.Keyword(null,"reservation-type","reservation-type",-936885670).cljs$core$IFn$_invoke$arity$1(item__$1)),cljs.core.str(new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(item__$1))].join(''));
});})(reservations))
,new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(p1__136553_SHARP_));
});})(reservations))
,cljs.core.deref.call(null,reservations)))], null)], null)], null)], null);
});})(reservations))
], null));
});
lvlup.crusader.reservation.add_or_remove = (function lvlup$crusader$reservation$add_or_remove(item,array){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__136557_SHARP_){
return cljs.core._EQ_.call(null,item,p1__136557_SHARP_);
}),array))){
return cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__136558_SHARP_){
return cljs.core._EQ_.call(null,item,p1__136558_SHARP_);
}),array));
} else {
return cljs.core.vec.call(null,cljs.core.conj.call(null,array,item));
}
});
lvlup.crusader.reservation.get_column_reservations = (function lvlup$crusader$reservation$get_column_reservations(one_reservation,item,id_name){
if(cljs.core.truth_(cljs.core.some.call(null,(function (a){
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(a))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"reservation-type","reservation-type",-936885670).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"reservation-type","reservation-type",-936885670).cljs$core$IFn$_invoke$arity$1(a)))) && (cljs.core.not_EQ_.call(null,id_name,[cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(one_reservation)),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(one_reservation))].join('')));
}),new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(one_reservation)))){
return cljs.core.conj.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(one_reservation),new cljs.core.Keyword(null,"finish","finish",-586688046).cljs$core$IFn$_invoke$arity$1(one_reservation));
} else {
return null;
}
});
lvlup.crusader.reservation.get_column_ranges = (function lvlup$crusader$reservation$get_column_ranges(reservations,item,id_name){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__136559_SHARP_){
return lvlup.crusader.reservation.get_column_reservations.call(null,p1__136559_SHARP_,item,id_name);
}),cljs.core.deref.call(null,reservations)));
});
lvlup.crusader.reservation.decide_fade = (function lvlup$crusader$reservation$decide_fade(ranges,this_start,this_finish){
return cljs.core.some.call(null,(function (p1__136560_SHARP_){
return (((this_start >= cljs.core.first.call(null,p1__136560_SHARP_))) && ((this_finish <= cljs.core.second.call(null,p1__136560_SHARP_)))) || (((this_finish > cljs.core.first.call(null,p1__136560_SHARP_))) && ((this_finish < cljs.core.second.call(null,p1__136560_SHARP_)))) || (((this_start > cljs.core.first.call(null,p1__136560_SHARP_))) && ((this_start < cljs.core.second.call(null,p1__136560_SHARP_)))) || (((this_start <= cljs.core.first.call(null,p1__136560_SHARP_))) && ((this_finish >= cljs.core.second.call(null,p1__136560_SHARP_))));
}),ranges);
});
lvlup.crusader.reservation.one_system = (function lvlup$crusader$reservation$one_system(item,details,reservations){
var reservation_details = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"reservation-modal"], null));
return ((function (reservation_details){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-small.uk-padding-remove-vertical.uk-margin-small-top","div.uk-padding-small.uk-padding-remove-vertical.uk-margin-small-top",1535078240),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-padding-small.uk-button.uk-button-default","button.uk-padding-small.uk-button.uk-button-default",860002923),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"10px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.some.call(null,((function (reservation_details){
return (function (p1__136561_SHARP_){
return cljs.core._EQ_.call(null,item,p1__136561_SHARP_);
});})(reservation_details))
,new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,details))))?"reserve-system chosen-system":"reserve-system"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (reservation_details){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-reservation-modal","set-reservation-modal",-1194693674),new cljs.core.Keyword(null,"places","places",1043491706),lvlup.crusader.reservation.add_or_remove.call(null,item,new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,details)))], null));
});})(reservation_details))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),lvlup.crusader.reservation.decide_fade.call(null,lvlup.crusader.reservation.get_column_ranges.call(null,reservations,item,[cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reservation_details))),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reservation_details)))].join('')),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reservation_details)),new cljs.core.Keyword(null,"finish","finish",-586688046).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reservation_details)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.uk-align-center.uk-margin-remove-vertical","img.uk-align-center.uk-margin-remove-vertical",1879814900),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),(function (){var G__136563 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item);
switch (G__136563) {
case "ps":
return "/Icons/ps.svg";

break;
case "xbox":
return "/Icons/xbox.svg";

break;
case "pc":
return "/Icons/pc.svg";

break;
case "table":
return "/Icons/table.svg";

break;
default:
return "hmm";

}
})(),new cljs.core.Keyword(null,"height","height",1025178622),"50",new cljs.core.Keyword(null,"width","width",-384071477),"50"], null)], null)], null)], null);
});
;})(reservation_details))
});
lvlup.crusader.reservation.choose_systems = (function lvlup$crusader$reservation$choose_systems(details){
var system_map = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"system-map"], null));
var reservations = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"reservations"], null));
return ((function (system_map,reservations){
return (function (details__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-margin-remove.uk-width-1-1.uk-child-width-1-5.uk-grid","div.uk-margin-remove.uk-width-1-1.uk-child-width-1-5.uk-grid",-1993208322),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),(function (){var iter__37582__auto__ = ((function (system_map,reservations){
return (function lvlup$crusader$reservation$choose_systems_$_iter__136569(s__136570){
return (new cljs.core.LazySeq(null,((function (system_map,reservations){
return (function (){
var s__136570__$1 = s__136570;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__136570__$1);
if(temp__4657__auto__){
var s__136570__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__136570__$2)){
var c__37580__auto__ = cljs.core.chunk_first.call(null,s__136570__$2);
var size__37581__auto__ = cljs.core.count.call(null,c__37580__auto__);
var b__136572 = cljs.core.chunk_buffer.call(null,size__37581__auto__);
if((function (){var i__136571 = (0);
while(true){
if((i__136571 < size__37581__auto__)){
var item = cljs.core._nth.call(null,c__37580__auto__,i__136571);
cljs.core.chunk_append.call(null,b__136572,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.one_system,item,details__$1,reservations], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(new cljs.core.Keyword(null,"reservation-type","reservation-type",-936885670).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str(new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(item))].join('')], null)));

var G__136573 = (i__136571 + (1));
i__136571 = G__136573;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__136572),lvlup$crusader$reservation$choose_systems_$_iter__136569.call(null,cljs.core.chunk_rest.call(null,s__136570__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__136572),null);
}
} else {
var item = cljs.core.first.call(null,s__136570__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.one_system,item,details__$1,reservations], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(new cljs.core.Keyword(null,"reservation-type","reservation-type",-936885670).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str(new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(item))].join('')], null)),lvlup$crusader$reservation$choose_systems_$_iter__136569.call(null,cljs.core.rest.call(null,s__136570__$2)));
}
} else {
return null;
}
break;
}
});})(system_map,reservations))
,null,null));
});})(system_map,reservations))
;
return iter__37582__auto__.call(null,lvlup.crusader.reservation.reservation_systems.call(null,system_map));
})()], null);
});
;})(system_map,reservations))
});
lvlup.crusader.reservation.display_time = (function lvlup$crusader$reservation$display_time(p__136574){
var vec__136578 = p__136574;
var from = cljs.core.nth.call(null,vec__136578,(0),null);
var to = cljs.core.nth.call(null,vec__136578,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.uk-text-center.uk-margin-remove","h1.uk-text-center.uk-margin-remove",2059739132),[cljs.core.str(lvlup.crusader.reservation.quarter_to_time.call(null,from)),cljs.core.str(" - "),cljs.core.str(lvlup.crusader.reservation.quarter_to_time.call(null,to))].join('')], null);
});
lvlup.crusader.reservation.all_data_QMARK_ = (function lvlup$crusader$reservation$all_data_QMARK_(details){
if(cljs.core._EQ_.call(null,(0),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,details)))){
return false;
} else {
if(cljs.core._EQ_.call(null,(0),new cljs.core.Keyword(null,"finish","finish",-586688046).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,details)))){
return false;
} else {
if(cljs.core._EQ_.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,details)))){
return false;
} else {
if(cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,details)))){
return false;
} else {
return true;

}
}
}
}
});
lvlup.crusader.reservation.reservation_modal = (function lvlup$crusader$reservation$reservation_modal(){
var date = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"date"], null));
var flatpickr = reagent.core.atom.call(null,null);
var reservation_details = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"reservation-modal"], null));
var reservations = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"reservations"], null));
var slider_values = reagent.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (date,flatpickr,reservation_details,reservations,slider_values){
return (function (){
return cljs.core.deref.call(null,flatpickr).setDate((new Date(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reservation_details)))));
});})(date,flatpickr,reservation_details,reservations,slider_values))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (date,flatpickr,reservation_details,reservations,slider_values){
return (function (){
cljs.core.reset_BANG_.call(null,lvlup.crusader.reservation.slider_atom,noUiSlider.create(document.getElementById("no-ui-slider"),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reservation_details)),new cljs.core.Keyword(null,"finish","finish",-586688046).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reservation_details))], null),new cljs.core.Keyword(null,"connect","connect",1232828233),true,new cljs.core.Keyword(null,"step","step",1288888124),(1),new cljs.core.Keyword(null,"margin","margin",-995903681),(4),new cljs.core.Keyword(null,"behaviour","behaviour",-2039639833),"drag-tap",new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 2, ["min",new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(lvlup.crusader.reservation.opening_hours.call(null,cljs.core.deref.call(null,date))),"max",new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(lvlup.crusader.reservation.opening_hours.call(null,cljs.core.deref.call(null,date)))], null)], null))));

cljs.core.reset_BANG_.call(null,flatpickr,window.flatpickr("#flatpickr",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, ["altInput",true,"altFormat","F j, Y","dateFormat","Y-m-d","locale","hu","minDate",(new Date()).fp_incr((-1)),"onChange",((function (date,flatpickr,reservation_details,reservations,slider_values){
return (function (a,b,c){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-reservation-modal","set-reservation-modal",-1194693674),new cljs.core.Keyword(null,"date","date",-1463434462),a], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-date","set-date",1040663559),a], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-reservations","dungeon/get-reservations",436689929),b], null));

return cljs.core.deref.call(null,lvlup.crusader.reservation.slider_atom).updateOptions(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 2, ["min",new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(lvlup.crusader.reservation.opening_hours.call(null,(new Date(b)))),"max",new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(lvlup.crusader.reservation.opening_hours.call(null,(new Date(b))))], null)], null)),true);
});})(date,flatpickr,reservation_details,reservations,slider_values))
], null))));

return cljs.core.deref.call(null,lvlup.crusader.reservation.slider_atom).on("update",((function (date,flatpickr,reservation_details,reservations,slider_values){
return (function (e){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-reservation-modal","set-reservation-modal",-1194693674),new cljs.core.Keyword(null,"start","start",-355208981),parseInt(cljs.core.first.call(null,cljs.core.js__GT_clj.call(null,e)))], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-reservation-modal","set-reservation-modal",-1194693674),new cljs.core.Keyword(null,"finish","finish",-586688046),parseInt(cljs.core.second.call(null,cljs.core.js__GT_clj.call(null,e)))], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-reservation-modal","set-reservation-modal",-1194693674),new cljs.core.Keyword(null,"places","places",1043491706),cljs.core.remove.call(null,((function (date,flatpickr,reservation_details,reservations,slider_values){
return (function (d){
return lvlup.crusader.reservation.decide_fade.call(null,lvlup.crusader.reservation.get_column_ranges.call(null,reservations,d,[cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reservation_details))),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reservation_details)))].join('')),parseInt(cljs.core.first.call(null,cljs.core.js__GT_clj.call(null,e))),parseInt(cljs.core.second.call(null,cljs.core.js__GT_clj.call(null,e))));
});})(date,flatpickr,reservation_details,reservations,slider_values))
,new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reservation_details)))], null));

return cljs.core.reset_BANG_.call(null,slider_values,cljs.core.js__GT_clj.call(null,e));
});})(date,flatpickr,reservation_details,reservations,slider_values))
);
});})(date,flatpickr,reservation_details,reservations,slider_values))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (date,flatpickr,reservation_details,reservations,slider_values){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#my-id","div#my-id",1187691370),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uk-modal","data-uk-modal",278480993),"",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),0.95], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-modal-dialog","div.uk-modal-dialog",-1415146233),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-modal-header.uk-grid.uk-margin-remove.uk-padding-small","div.uk-modal-header.uk-grid.uk-margin-remove.uk-padding-small",-1504131587),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-text-truncate.uk-width-4-5","div.uk-text-truncate.uk-width-4-5",-1109440620),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2em"], null)], null),((cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reservation_details))))?"Foglal\u00E1s":[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reservation_details)))].join(''))], null),(cljs.core.truth_(lvlup.crusader.reservation.all_data_QMARK_.call(null,reservation_details))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-primary.uk-float-right.uk-width-1-5.uk-modal-close","button.uk-button.uk-button-primary.uk-float-right.uk-width-1-5.uk-modal-close",797464005),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (date,flatpickr,reservation_details,reservations,slider_values){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","add-reservations","dungeon/add-reservations",-137546198),cljs.core.assoc.call(null,cljs.core.deref.call(null,reservation_details),new cljs.core.Keyword(null,"date","date",-1463434462),lvlup.crusader.reservation.convert_iso_to_read.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reservation_details))))], null));
});})(date,flatpickr,reservation_details,reservations,slider_values))
,new cljs.core.Keyword(null,"type","type",1174270348),"button"], null),"Ment\u00E9s"], null):null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-modal-body.uk-padding-remove-vertical","div.uk-modal-body.uk-padding-remove-vertical",-123096698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-form.uk-padding-small.remove-padding-vertical","div.uk-form.uk-padding-small.remove-padding-vertical",-1647809023),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-child-width-expand.uk-margin-remove","div.uk-child-width-expand.uk-margin-remove",742489009),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.uk-margin-small.uk-text-center.uk-form-medium.uk-margin-remove.uk-input.uk-padding-remove","input.uk-margin-small.uk-text-center.uk-form-medium.uk-margin-remove.uk-input.uk-padding-remove",625658246),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Id",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (date,flatpickr,reservation_details,reservations,slider_values){
return (function (p1__136581_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-reservation-modal","set-reservation-modal",-1194693674),new cljs.core.Keyword(null,"id","id",-1388402092),p1__136581_SHARP_.target.value], null));
});})(date,flatpickr,reservation_details,reservations,slider_values))
,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reservation_details))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#flatpickr.uk-input.uk-form-width-medium.uk-form-medium.uk-text-center.uk-padding-remove","input#flatpickr.uk-input.uk-form-width-medium.uk-form-medium.uk-text-center.uk-padding-remove",-1245637176),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"D\u00E1tum"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.uk-margin-small.uk-text-center.uk-form-medium.uk-margin-remove.uk-input.uk-padding-remove","input.uk-margin-small.uk-text-center.uk-form-medium.uk-margin-remove.uk-input.uk-padding-remove",625658246),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Teljes n\u00E9v",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (date,flatpickr,reservation_details,reservations,slider_values){
return (function (p1__136582_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-reservation-modal","set-reservation-modal",-1194693674),new cljs.core.Keyword(null,"name","name",1843675177),p1__136582_SHARP_.target.value], null));
});})(date,flatpickr,reservation_details,reservations,slider_values))
,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reservation_details))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.display_time,cljs.core.deref.call(null,slider_values)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#no-ui-slider.uk-margin-small","div#no-ui-slider.uk-margin-small",232703003)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.choose_systems,reservation_details], null)], null)], null)], null);
});})(date,flatpickr,reservation_details,reservations,slider_values))
], null));
});
lvlup.crusader.reservation.display_date = (function lvlup$crusader$reservation$display_date(date){
return cljs.core.get.call(null,lvlup.crusader.reservation.days,date.getDay());
});
lvlup.crusader.reservation.panel_img = (function lvlup$crusader$reservation$panel_img(item,img){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,lvlup.crusader.reservation.reservation_type,item);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str("/Icons/"),cljs.core.str(img),cljs.core.str(".svg")].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,item,cljs.core.deref.call(null,lvlup.crusader.reservation.reservation_type)))?"active-category":null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"5px"], null),new cljs.core.Keyword(null,"height","height",1025178622),"40",new cljs.core.Keyword(null,"width","width",-384071477),"40"], null)], null)], null);
});
lvlup.crusader.reservation.reservation_categories = (function lvlup$crusader$reservation$reservation_categories(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-grid.uk-margin-remove.uk-float-right.uk-child-width-expand","div.uk-grid.uk-margin-remove.uk-float-right.uk-child-width-expand",-1535484373),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.panel_img,"dungeon","console"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.panel_img,"tavern","table"], null)], null);
});
lvlup.crusader.reservation.choose_date_panel = (function lvlup$crusader$reservation$choose_date_panel(){
var flatpickr = reagent.core.atom.call(null,null);
var date = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"date"], null));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (flatpickr,date){
return (function (){
cljs.core.deref.call(null,flatpickr).setDate((new Date(cljs.core.deref.call(null,date))));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-reservations","dungeon/get-reservations",436689929),lvlup.crusader.reservation.convert_iso_to_read.call(null,cljs.core.deref.call(null,date))], null));
});})(flatpickr,date))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (flatpickr,date){
return (function (){
return cljs.core.reset_BANG_.call(null,flatpickr,window.flatpickr("#choose-date",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, ["altInput",true,"altFormat","F j, Y","dateFormat","Y-m-d","locale","hu","minDate",(new Date()).fp_incr((-1)),"onChange",((function (flatpickr,date){
return (function (a,b,c){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-date","set-date",1040663559),a], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-reservations","dungeon/get-reservations",436689929),b], null));
});})(flatpickr,date))
], null))));
});})(flatpickr,date))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (flatpickr,date){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card.uk-card-secondary.uk-margin-remove.uk-padding-remove.uk-width-1-1","div.uk-card.uk-card-secondary.uk-margin-remove.uk-padding-remove.uk-width-1-1",82378238),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-grid.uk-child-width-expand.uk-padding-small.uk-margin-remove","div.uk-grid.uk-child-width-expand.uk-padding-small.uk-margin-remove",833147212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.uk-text-left.uk-heading-bullet","h3.uk-text-left.uk-heading-bullet",-1721724732),lvlup.crusader.reservation.display_date.call(null,cljs.core.deref.call(null,date))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#choose-date.uk-text-center.uk-padding-remove","input#choose-date.uk-text-center.uk-padding-remove",-1270617799),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"V\u00E1lassz d\u00E1tumot"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.reservation_categories], null)], null)], null);
});})(flatpickr,date))
], null));
});
lvlup.crusader.reservation.reservation = (function lvlup$crusader$reservation$reservation(){
var date = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"date"], null));
var system_map = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"system-map"], null));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (date,system_map){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-reservations","dungeon/get-reservations",436689929),lvlup.crusader.reservation.convert_iso_to_read.call(null,cljs.core.deref.call(null,date))], null));
});})(date,system_map))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (date,system_map){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),0.8], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.choose_date_panel], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-grid","div.uk-grid",-1239721458),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.reservation_modal], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.reservation_dates], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-remove.uk-margin-remove.dragscroll","div.uk-padding-remove.uk-margin-remove.dragscroll",513989244),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"calc(100vw - 80px)",new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"scroll",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"visible"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-grid.uk-child-width-auto.reservation-grid.uk-margin-remove.uk-card.uk-card-secondary.restrict","div.uk-grid.uk-child-width-auto.reservation-grid.uk-margin-remove.uk-card.uk-card-secondary.restrict",672128121),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"calc(100vw - 80px)",new cljs.core.Keyword(null,"width","width",-384071477),"max-content",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),(function (){var iter__37582__auto__ = ((function (date,system_map){
return (function lvlup$crusader$reservation$reservation_$_iter__136587(s__136588){
return (new cljs.core.LazySeq(null,((function (date,system_map){
return (function (){
var s__136588__$1 = s__136588;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__136588__$1);
if(temp__4657__auto__){
var s__136588__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__136588__$2)){
var c__37580__auto__ = cljs.core.chunk_first.call(null,s__136588__$2);
var size__37581__auto__ = cljs.core.count.call(null,c__37580__auto__);
var b__136590 = cljs.core.chunk_buffer.call(null,size__37581__auto__);
if((function (){var i__136589 = (0);
while(true){
if((i__136589 < size__37581__auto__)){
var item = cljs.core._nth.call(null,c__37580__auto__,i__136589);
cljs.core.chunk_append.call(null,b__136590,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.reservation_column,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("h"),cljs.core.str(item)].join('')], null)));

var G__136591 = (i__136589 + (1));
i__136589 = G__136591;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__136590),lvlup$crusader$reservation$reservation_$_iter__136587.call(null,cljs.core.chunk_rest.call(null,s__136588__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__136590),null);
}
} else {
var item = cljs.core.first.call(null,s__136588__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.reservation_column,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("h"),cljs.core.str(item)].join('')], null)),lvlup$crusader$reservation$reservation_$_iter__136587.call(null,cljs.core.rest.call(null,s__136588__$2)));
}
} else {
return null;
}
break;
}
});})(date,system_map))
,null,null));
});})(date,system_map))
;
return iter__37582__auto__.call(null,lvlup.crusader.reservation.reservation_systems.call(null,system_map));
})()], null)], null)], null)], null);
});})(date,system_map))
], null));
});

//# sourceMappingURL=reservation.js.map