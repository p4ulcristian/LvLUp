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
lvlup.crusader.reservation.szeged_tables = (function lvlup$crusader$reservation$szeged_tables(){
var numbers = cljs.core.range.call(null,(1),(13));
return cljs.core.vec.call(null,cljs.core.map.call(null,((function (numbers){
return (function (p1__56083_SHARP_){
return cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348),"table",new cljs.core.Keyword(null,"number","number",1570378438),p1__56083_SHARP_,new cljs.core.Keyword(null,"reservation-type","reservation-type",-936885670),"tavern");
});})(numbers))
,numbers));
});
lvlup.crusader.reservation.szeged_opening_hours = new cljs.core.PersistentArrayMap(null, 7, [(0),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(48),new cljs.core.Keyword(null,"to","to",192099007),(92)], null),(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(48),new cljs.core.Keyword(null,"to","to",192099007),(96)], null),(2),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(48),new cljs.core.Keyword(null,"to","to",192099007),(96)], null),(3),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(48),new cljs.core.Keyword(null,"to","to",192099007),(96)], null),(4),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(48),new cljs.core.Keyword(null,"to","to",192099007),(104)], null),(5),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(48),new cljs.core.Keyword(null,"to","to",192099007),(104)], null),(6),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(48),new cljs.core.Keyword(null,"to","to",192099007),(104)], null)], null);
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
return (function (p1__56085_SHARP_,p2__56084_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.quarters,p2__56084_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p2__56084_SHARP_], null));
});})(minutes))
,minutes)], null)], null);
});
;})(minutes))
});
lvlup.crusader.reservation.days = new cljs.core.PersistentArrayMap(null, 7, [(0),"Vas\u00E1rnap",(1),"H\u00E9tf\u0151",(2),"Kedd",(3),"Szerda",(4),"Cs\u00FCt\u00F6rt\u00F6k",(5),"P\u00E9ntek",(6),"Szombat"], null);
lvlup.crusader.reservation.yesterday = (function lvlup$crusader$reservation$yesterday(now){
return (new Date((now.getTime() - (86400000))));
});
lvlup.crusader.reservation.reservation_dates = (function lvlup$crusader$reservation$reservation_dates(){
var date = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"date"], null));
var get_opening_hours = ((function (date){
return (function (a){
if(cljs.core.truth_(a)){
return cljs.core.get.call(null,lvlup.crusader.reservation.szeged_opening_hours,a.getDay());
} else {
return null;
}
});})(date))
;
var opening_hours = ((function (date,get_opening_hours){
return (function (){
return get_opening_hours.call(null,cljs.core.deref.call(null,date));
});})(date,get_opening_hours))
;
var hours = ((function (date,get_opening_hours,opening_hours){
return (function (){
return cljs.core.vec.call(null,cljs.core.range.call(null,cljs.core.quot.call(null,new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(opening_hours.call(null)),(4)),cljs.core.quot.call(null,new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(opening_hours.call(null)),(4))));
});})(date,get_opening_hours,opening_hours))
;
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (date,get_opening_hours,opening_hours,hours){
return (function (){
if(!(true)){
return cljs.core.deref.call(null,date).getHours();
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-date","set-date",1040663559),lvlup.crusader.reservation.yesterday.call(null,cljs.core.deref.call(null,date))], null));
}
});})(date,get_opening_hours,opening_hours,hours))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (date,get_opening_hours,opening_hours,hours){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card.uk-card-secondary.uk-padding-remove.uk-margin-remove","div.uk-card.uk-card-secondary.uk-padding-remove.uk-margin-remove",1620528508),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"80px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-inline.uk-margin-small.uk-padding-small.uk-padding-remove-vertical","div.uk-inline.uk-margin-small.uk-padding-small.uk-padding-remove-vertical",-593766542),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data-uk-sticky","data-uk-sticky",1691370808)," bottom: #top",new cljs.core.Keyword(null,"data-uk-toggle","data-uk-toggle",848108070),"target: #my-id",new cljs.core.Keyword(null,"on-click","on-click",1632826543),re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-modal-data","set-modal-data",1887382702),cljs.core.PersistentArrayMap.EMPTY], null)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),"980"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.add-reservation","img.add-reservation",216323966),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),"/Icons/plus.svg",new cljs.core.Keyword(null,"height","height",1025178622),"50",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"padding","padding",1660304693),"3px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"100px"], null),new cljs.core.Keyword(null,"width","width",-384071477),"50"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map_indexed.call(null,((function (date,get_opening_hours,opening_hours,hours){
return (function (p1__56087_SHARP_,p2__56086_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.hours_time,p2__56086_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p2__56086_SHARP_], null));
});})(date,get_opening_hours,opening_hours,hours))
,cljs.core.filter.call(null,((function (date,get_opening_hours,opening_hours,hours){
return (function (p1__56088_SHARP_){
return ((p1__56088_SHARP_ >= (12))) && ((p1__56088_SHARP_ <= (25)));
});})(date,get_opening_hours,opening_hours,hours))
,hours.call(null)))], null)], null)], null)], null);
});})(date,get_opening_hours,opening_hours,hours))
], null));
});
lvlup.crusader.reservation.one_reservation = (function lvlup$crusader$reservation$one_reservation(reservation){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card.uk-card-default.uk-padding-small.uk-margin-small.uk-inline.one-reservation","div.uk-card.uk-card-default.uk-padding-small.uk-margin-small.uk-inline.one-reservation",1713358822),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-uk-toggle","data-uk-toggle",848108070),"target: #my-id",new cljs.core.Keyword(null,"on-click","on-click",1632826543),re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-modal-data","set-modal-data",1887382702),reservation], null)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"transition","transition",765692007),"transform .05s ease-in-out",new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str(((18) * new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(reservation))),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str(((18) * new cljs.core.Keyword(null,"finish","finish",-586688046).cljs$core$IFn$_invoke$arity$1(reservation))),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-position-center","div.uk-position-center",531257079),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uk-tooltip","data-uk-tooltip",604665367),"title: Morvai Viktor; pos: bottom",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),"M. V."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.uk-label.uk-label-success.uk-position-top","span.uk-label.uk-label-success.uk-position-top",925433143),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uk-tooltip","data-uk-tooltip",604665367),"title: 12:30; pos: top",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"20px",new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.uk-label.uk-label-success.uk-position-bottom","span.uk-label.uk-label-success.uk-position-bottom",1706688522),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uk-tooltip","data-uk-tooltip",604665367),"title: 15:45; pos: bottom",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"25px",new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null)], null)], null)], null);
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
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-small.uk-padding-remove-vertical.uk-width-auto","div.uk-padding-small.uk-padding-remove-vertical.uk-width-auto",81290182),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-remove","div.uk-padding-remove",-1054351263),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-text-center","div.uk-text-center",-1334382774),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-inline.uk-margin-small.uk-align-center","div.uk-inline.uk-margin-small.uk-align-center",1454861638),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),(function (){var G__56092 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item);
switch (G__56092) {
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
})(),new cljs.core.Keyword(null,"height","height",1025178622),"50",new cljs.core.Keyword(null,"width","width",-384071477),"50"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.uk-badge.uk-position-bottom-left","span.uk-badge.uk-position-bottom-left",-873791917),new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(item)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-grid.uk-margin-remove.uk-height-1-1","div.uk-grid.uk-margin-remove.uk-height-1-1",295745793),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"calc(100% - 60px)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-1-1.dropzone.uk-padding-remove","div.uk-width-1-1.dropzone.uk-padding-remove",-761869684),cljs.core.map_indexed.call(null,((function (reservations){
return (function (p1__56090_SHARP_,p2__56089_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.one_reservation,p2__56089_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p2__56089_SHARP_], null));
});})(reservations))
,cljs.core.deref.call(null,reservations))], null)], null)], null)], null);
});})(reservations))
], null));
});
lvlup.crusader.reservation.choose_systems = (function lvlup$crusader$reservation$choose_systems(){
var system_map = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"system-map"], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-grid.uk-child-width-1-6.uk-margin-remove.uk-width-1-1","div.uk-grid.uk-child-width-1-6.uk-margin-remove.uk-width-1-1",-126256825),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),(function (){var iter__37582__auto__ = ((function (system_map){
return (function lvlup$crusader$reservation$choose_systems_$_iter__56102(s__56103){
return (new cljs.core.LazySeq(null,((function (system_map){
return (function (){
var s__56103__$1 = s__56103;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__56103__$1);
if(temp__4657__auto__){
var s__56103__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__56103__$2)){
var c__37580__auto__ = cljs.core.chunk_first.call(null,s__56103__$2);
var size__37581__auto__ = cljs.core.count.call(null,c__37580__auto__);
var b__56105 = cljs.core.chunk_buffer.call(null,size__37581__auto__);
if((function (){var i__56104 = (0);
while(true){
if((i__56104 < size__37581__auto__)){
var item = cljs.core._nth.call(null,c__37580__auto__,i__56104);
cljs.core.chunk_append.call(null,b__56105,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-small.reserve-system","div.uk-padding-small.reserve-system",586201753),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.uk-align-center","img.uk-align-center",-723062974),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),(function (){var G__56108 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item);
switch (G__56108) {
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
})(),new cljs.core.Keyword(null,"height","height",1025178622),"50",new cljs.core.Keyword(null,"width","width",-384071477),"50"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(item)], null)));

var G__56111 = (i__56104 + (1));
i__56104 = G__56111;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56105),lvlup$crusader$reservation$choose_systems_$_iter__56102.call(null,cljs.core.chunk_rest.call(null,s__56103__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56105),null);
}
} else {
var item = cljs.core.first.call(null,s__56103__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-small.reserve-system","div.uk-padding-small.reserve-system",586201753),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.uk-align-center","img.uk-align-center",-723062974),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),(function (){var G__56109 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item);
switch (G__56109) {
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
})(),new cljs.core.Keyword(null,"height","height",1025178622),"50",new cljs.core.Keyword(null,"width","width",-384071477),"50"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(item)], null)),lvlup$crusader$reservation$choose_systems_$_iter__56102.call(null,cljs.core.rest.call(null,s__56103__$2)));
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
return iter__37582__auto__.call(null,cljs.core.deref.call(null,system_map));
})()], null);
});
lvlup.crusader.reservation.which_quarter = (function lvlup$crusader$reservation$which_quarter(number){
var G__56114 = number;
switch (G__56114) {
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
lvlup.crusader.reservation.display_time = (function lvlup$crusader$reservation$display_time(p__56116){
var vec__56120 = p__56116;
var from = cljs.core.nth.call(null,vec__56120,(0),null);
var to = cljs.core.nth.call(null,vec__56120,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.uk-text-center.uk-margin-remove","h1.uk-text-center.uk-margin-remove",2059739132),[cljs.core.str(lvlup.crusader.reservation.quarter_to_time.call(null,from)),cljs.core.str(" - "),cljs.core.str(lvlup.crusader.reservation.quarter_to_time.call(null,to))].join('')], null);
});
lvlup.crusader.reservation.reservation_modal = (function lvlup$crusader$reservation$reservation_modal(){
var date = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"date"], null));
var modal_data = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"modal-data"], null));
var opening_hours = ((function (date,modal_data){
return (function (){
return cljs.core.get.call(null,lvlup.crusader.reservation.szeged_opening_hours,cljs.core.deref.call(null,date).getDay());
});})(date,modal_data))
;
var slider_atom = reagent.core.atom.call(null,null);
var reservation_details = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"date","date",-1463434462),"",new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"places","places",1043491706),cljs.core.PersistentVector.EMPTY], null));
var slider_values = reagent.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (date,modal_data,opening_hours,slider_atom,reservation_details,slider_values){
return (function (){
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-reservations","dungeon/get-reservations",436689929)], null));

window.flatpickr("#flatpickr",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, ["altInput",true,"altFormat","F j, Y","dateFormat","Y-m-d","locale","hu","minDate",(new Date()).fp_incr((-1)),"onChange",((function (date,modal_data,opening_hours,slider_atom,reservation_details,slider_values){
return (function (a,b,c){
cljs.core.swap_BANG_.call(null,reservation_details,cljs.core.assoc,new cljs.core.Keyword(null,"date","date",-1463434462),b);

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-date","set-date",1040663559),b], null));

return cljs.core.deref.call(null,slider_atom).updateOptions(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 2, ["min",new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(opening_hours.call(null)),"max",new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(opening_hours.call(null))], null)], null)),true);
});})(date,modal_data,opening_hours,slider_atom,reservation_details,slider_values))
], null)));

cljs.core.reset_BANG_.call(null,slider_atom,noUiSlider.create(document.getElementById("no-ui-slider"),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(55),(66)], null),new cljs.core.Keyword(null,"connect","connect",1232828233),true,new cljs.core.Keyword(null,"step","step",1288888124),(1),new cljs.core.Keyword(null,"margin","margin",-995903681),(4),new cljs.core.Keyword(null,"behaviour","behaviour",-2039639833),"drag-tap",new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 2, ["min",new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(opening_hours.call(null)),"max",new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(opening_hours.call(null))], null)], null))));

return cljs.core.deref.call(null,slider_atom).on("update",((function (date,modal_data,opening_hours,slider_atom,reservation_details,slider_values){
return (function (e){
return cljs.core.reset_BANG_.call(null,slider_values,cljs.core.js__GT_clj.call(null,e));
});})(date,modal_data,opening_hours,slider_atom,reservation_details,slider_values))
);
});})(date,modal_data,opening_hours,slider_atom,reservation_details,slider_values))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (date,modal_data,opening_hours,slider_atom,reservation_details,slider_values){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#my-id.uk-modal-container","div#my-id.uk-modal-container",-1133419344),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uk-modal","data-uk-modal",278480993),"bg-close:\tfalse",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),0.95], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-modal-dialog","div.uk-modal-dialog",-1415146233),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-modal-close-default","button.uk-modal-close-default",-844937770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uk-close","data-uk-close",-997254796),true,new cljs.core.Keyword(null,"type","type",1174270348),"button"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-modal-header","div.uk-modal-header",-1067934196),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.uk-modal-title","h2.uk-modal-title",-1469061271),"Foglal\u00E1s m\u00F3dos\u00EDt\u00E1sa"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-modal-body.uk-padding-remove-vertical","div.uk-modal-body.uk-padding-remove-vertical",-123096698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-form.uk-padding-small.remove-padding-vertical","div.uk-form.uk-padding-small.remove-padding-vertical",-1647809023),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-child-width-expand","div.uk-child-width-expand",417188456),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#flatpickr.uk-input.uk-form-width-medium.uk-form-large.uk-text-center","input#flatpickr.uk-input.uk-form-width-medium.uk-form-large.uk-text-center",-1461346923),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"D\u00E1tum"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.uk-margin-small.uk-text-center.uk-form-large.uk-margin-remove.uk-input","input.uk-margin-small.uk-text-center.uk-form-large.uk-margin-remove.uk-input",504068733),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Id"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.uk-margin-small.uk-text-center.uk-form-large.uk-margin-remove.uk-input","input.uk-margin-small.uk-text-center.uk-form-large.uk-margin-remove.uk-input",504068733),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Teljes n\u00E9v"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.display_time,cljs.core.deref.call(null,slider_values)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#no-ui-slider.uk-margin-small","div#no-ui-slider.uk-margin-small",232703003)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.choose_systems], null),[cljs.core.str(cljs.core.deref.call(null,reservation_details))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-modal-footer.uk-text-right","div.uk-modal-footer.uk-text-right",1102032848),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-default.uk-modal-close","button.uk-button.uk-button-default.uk-modal-close",1760120283),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"button"], null),"M\u00E9gsem"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-primary","button.uk-button.uk-button-primary",-1963381556),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"button"], null),"Ment\u00E9s"], null)], null)], null)], null);
});})(date,modal_data,opening_hours,slider_atom,reservation_details,slider_values))
], null));
});
lvlup.crusader.reservation.display_date = (function lvlup$crusader$reservation$display_date(date){
return cljs.core.get.call(null,lvlup.crusader.reservation.days,date.getDay());
});
lvlup.crusader.reservation.panel_img = (function lvlup$crusader$reservation$panel_img(item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str("/Icons/"),cljs.core.str(item),cljs.core.str(".svg")].join(''),new cljs.core.Keyword(null,"height","height",1025178622),"35",new cljs.core.Keyword(null,"width","width",-384071477),"35"], null)], null)], null);
});
lvlup.crusader.reservation.reservation_categories = (function lvlup$crusader$reservation$reservation_categories(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-grid.uk-margin-remove.uk-float-right.uk-child-width-expand","div.uk-grid.uk-margin-remove.uk-float-right.uk-child-width-expand",-1535484373),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.panel_img,"pc"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.panel_img,"console"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.panel_img,"table"], null)], null);
});
lvlup.crusader.reservation.choose_date_panel = (function lvlup$crusader$reservation$choose_date_panel(){
var date = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"date"], null));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (date){
return (function (){
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-reservations","dungeon/get-reservations",436689929)], null));

return window.flatpickr("#choose-date",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, ["altInput",true,"altFormat","F j, Y","dateFormat","Y-m-d","locale","hu","minDate",(new Date()).fp_incr((-1)),"onChange",((function (date){
return (function (a,b,c){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-date","set-date",1040663559),b], null));
});})(date))
], null)));
});})(date))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (date){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card.uk-card-secondary.uk-margin-remove.uk-padding-remove.uk-width-1-1","div.uk-card.uk-card-secondary.uk-margin-remove.uk-padding-remove.uk-width-1-1",82378238),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-grid.uk-child-width-expand.uk-padding-small.uk-margin-remove","div.uk-grid.uk-child-width-expand.uk-padding-small.uk-margin-remove",833147212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.uk-text-left.uk-heading-bullet","h3.uk-text-left.uk-heading-bullet",-1721724732),lvlup.crusader.reservation.display_date.call(null,cljs.core.deref.call(null,date))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#choose-date.uk-text-center.uk-padding-remove","input#choose-date.uk-text-center.uk-padding-remove",-1270617799),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"V\u00E1lassz d\u00E1tumot"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.reservation_categories], null)], null)], null);
});})(date))
], null));
});
lvlup.crusader.reservation.systems_to_reservations = (function lvlup$crusader$reservation$systems_to_reservations(systems){
return cljs.core.map.call(null,(function (p1__56123_SHARP_){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,p1__56123_SHARP_,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"name","name",1843675177)),new cljs.core.Keyword(null,"reservation-type","reservation-type",-936885670),"dungeon");
}),systems);
});
lvlup.crusader.reservation.reservation = (function lvlup$crusader$reservation$reservation(){
var system_map = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"system-map"], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),0.8], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.choose_date_panel], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-grid","div.uk-grid",-1239721458),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.reservation_modal], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.reservation_dates], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-remove.uk-margin-remove.dragscroll","div.uk-padding-remove.uk-margin-remove.dragscroll",513989244),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"calc(100vw - 80px)",new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"scroll",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"visible"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-grid.uk-child-width-auto.reservation-grid.uk-margin-remove.uk-card.uk-card-secondary.restrict","div.uk-grid.uk-child-width-auto.reservation-grid.uk-margin-remove.uk-card.uk-card-secondary.restrict",672128121),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"calc(100vw - 80px)",new cljs.core.Keyword(null,"width","width",-384071477),"max-content",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),(function (){var iter__37582__auto__ = ((function (system_map){
return (function lvlup$crusader$reservation$reservation_$_iter__56128(s__56129){
return (new cljs.core.LazySeq(null,((function (system_map){
return (function (){
var s__56129__$1 = s__56129;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__56129__$1);
if(temp__4657__auto__){
var s__56129__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__56129__$2)){
var c__37580__auto__ = cljs.core.chunk_first.call(null,s__56129__$2);
var size__37581__auto__ = cljs.core.count.call(null,c__37580__auto__);
var b__56131 = cljs.core.chunk_buffer.call(null,size__37581__auto__);
if((function (){var i__56130 = (0);
while(true){
if((i__56130 < size__37581__auto__)){
var item = cljs.core._nth.call(null,c__37580__auto__,i__56130);
cljs.core.chunk_append.call(null,b__56131,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.reservation_column,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("h"),cljs.core.str(item)].join('')], null)));

var G__56132 = (i__56130 + (1));
i__56130 = G__56132;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56131),lvlup$crusader$reservation$reservation_$_iter__56128.call(null,cljs.core.chunk_rest.call(null,s__56129__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56131),null);
}
} else {
var item = cljs.core.first.call(null,s__56129__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.reservation.reservation_column,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("h"),cljs.core.str(item)].join('')], null)),lvlup$crusader$reservation$reservation_$_iter__56128.call(null,cljs.core.rest.call(null,s__56129__$2)));
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
return iter__37582__auto__.call(null,cljs.core.sort_by.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"reservation-type","reservation-type",-936885670),new cljs.core.Keyword(null,"number","number",1570378438)),cljs.core.concat.call(null,lvlup.crusader.reservation.systems_to_reservations.call(null,cljs.core.deref.call(null,system_map)),lvlup.crusader.reservation.szeged_tables.call(null))));
})()], null)], null)], null)], null);
});

//# sourceMappingURL=reservation.js.map