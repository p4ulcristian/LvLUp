// Compiled by ClojureScript 1.9.229 {}
goog.provide('lvlup.crusader.dungeon');
goog.require('cljs.core');
goog.require('lvlup.subs');
goog.require('taoensso.sente');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('cljs.core.async');
goog.require('cljs_time.coerce');
goog.require('lvlup.sente');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('jayq.core');
goog.require('lvlup.events');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('re_frame.core');
lvlup.crusader.dungeon.convert_to_clojurescript_time = (function lvlup$crusader$dungeon$convert_to_clojurescript_time(ido){
String(cljs_time.coerce.from_long.call(null,parseInt(ido)));

if(cljs.core._EQ_.call(null,(13),cljs.core.count.call(null,ido))){
return String(cljs_time.coerce.from_long.call(null,parseInt(ido)));
} else {
return ido;
}
});
lvlup.crusader.dungeon.notification = (function lvlup$crusader$dungeon$notification(valami){
return UIkit.notification([cljs.core.str("<div class='uk-padding-small uk-card uk-card-primary notification-style'><span uk-icon='icon: check'></span> "),cljs.core.str(valami),cljs.core.str("</div>")].join(''),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),"top-left",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(700)], null)));
});
lvlup.crusader.dungeon.includes_QMARK_ = (function lvlup$crusader$dungeon$includes_QMARK_(word,text){
return clojure.string.includes_QMARK_.call(null,text,word);
});
lvlup.crusader.dungeon.lower = (function lvlup$crusader$dungeon$lower(word){
return clojure.string.lower_case.call(null,word);
});
lvlup.crusader.dungeon.filter_by_name_and_id = (function lvlup$crusader$dungeon$filter_by_name_and_id(members,search_term,keep_QMARK_){
if(cljs.core.not_EQ_.call(null,"",cljs.core.deref.call(null,search_term))){
return cljs.core.doall.call(null,cljs.core.filter.call(null,(function (p1__55601_SHARP_){
var or__36802__auto__ = lvlup.crusader.dungeon.includes_QMARK_.call(null,lvlup.crusader.dungeon.lower.call(null,cljs.core.deref.call(null,search_term)),lvlup.crusader.dungeon.lower.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__55601_SHARP_)));
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return cljs.core._EQ_.call(null,parseInt(cljs.core.deref.call(null,search_term)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__55601_SHARP_));
}
}),members));
} else {
if(cljs.core.truth_(keep_QMARK_)){
return members;
} else {
return cljs.core.PersistentVector.EMPTY;
}
}
});
lvlup.crusader.dungeon.timeformat = cljs_time.format.formatter.call(null,"HH:mm");
lvlup.crusader.dungeon.convert_time = (function lvlup$crusader$dungeon$convert_time(origin){
return cljs_time.format.unparse.call(null,lvlup.crusader.dungeon.timeformat,cljs_time.coerce.from_long.call(null,origin));
});
lvlup.crusader.dungeon.minute_to_money = (function lvlup$crusader$dungeon$minute_to_money(seconds,type){
var minutes = cljs.core.quot.call(null,seconds,(60));
var halves = cljs.core.quot.call(null,minutes,(30));
var remaining_minutes = cljs.core.mod.call(null,minutes,(30));
var type_price = (function (){var G__55603 = type;
switch (G__55603) {
case "xbox":
return (150);

break;
case "ps":
return (150);

break;
case "pc":
return (175);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
if((seconds < (0))){
return (0);
} else {
if(((10) > remaining_minutes)){
return (halves * type_price);
} else {
return ((halves + (1)) * type_price);
}
}
});
lvlup.crusader.dungeon.calculate_time_interval = (function lvlup$crusader$dungeon$calculate_time_interval(time_one,time_two){
if(cljs.core.truth_(cljs_time.core.before_QMARK_.call(null,time_one,time_two))){
return cljs_time.core.in_seconds.call(null,cljs_time.core.interval.call(null,time_one,time_two));
} else {
return ((-1) * cljs_time.core.in_seconds.call(null,cljs_time.core.interval.call(null,time_two,time_one)));
}
});
lvlup.crusader.dungeon.abs = (function lvlup$crusader$dungeon$abs(n){
var x__37133__auto__ = n;
var y__37134__auto__ = (- n);
return ((x__37133__auto__ > y__37134__auto__) ? x__37133__auto__ : y__37134__auto__);
});
lvlup.crusader.dungeon.count_time_halves = (function lvlup$crusader$dungeon$count_time_halves(start,finish){
if(cljs.core.truth_(cljs_time.core.before_QMARK_.call(null,start,finish))){
return (0.5 * (cljs.core.quot.call(null,cljs.core.quot.call(null,lvlup.crusader.dungeon.abs.call(null,lvlup.crusader.dungeon.calculate_time_interval.call(null,start,finish)),(60)),(30)) + ((((5) < cljs.core.mod.call(null,cljs.core.quot.call(null,lvlup.crusader.dungeon.abs.call(null,lvlup.crusader.dungeon.calculate_time_interval.call(null,start,finish)),(60)),(30))))?(1):(0))));
} else {
return (0);
}
});
lvlup.crusader.dungeon.all_items_to_invoices = (function lvlup$crusader$dungeon$all_items_to_invoices(player_id){
var all_systems = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"system-map"], null));
var all_players = cljs.core.filter.call(null,((function (all_systems){
return (function (a){
return (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(a),cljs.core.PersistentArrayMap.EMPTY)) && (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(a),null));
});})(all_systems))
,cljs.core.map.call(null,((function (all_systems){
return (function (p1__55605_SHARP_){
return cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__55605_SHARP_),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__55605_SHARP_));
});})(all_systems))
,cljs.core.deref.call(null,all_systems)));
var this_player_all_systems = cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (p1__55606_SHARP_){
return cljs.core._EQ_.call(null,parseInt(player_id),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__55606_SHARP_)))));
});})(all_systems,all_players))
,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (a){
return cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(a))),new cljs.core.Keyword(null,"member-id","member-id",606659713));
});})(all_systems,all_players))
,all_players))));
var this_player_systems = cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players,this_player_all_systems){
return (function (p1__55607_SHARP_){
return cljs.core._EQ_.call(null,parseInt(player_id),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__55607_SHARP_)))));
});})(all_systems,all_players,this_player_all_systems))
,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players,this_player_all_systems){
return (function (a){
return cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(a))),new cljs.core.Keyword(null,"start","start",-355208981));
});})(all_systems,all_players,this_player_all_systems))
,all_players))));
var seq__55670_55730 = cljs.core.seq.call(null,this_player_systems);
var chunk__55671_55731 = null;
var count__55672_55732 = (0);
var i__55673_55733 = (0);
while(true){
if((i__55673_55733 < count__55672_55732)){
var system_55734 = cljs.core._nth.call(null,chunk__55671_55731,i__55673_55733);
var number_55735 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system_55734);
var player_55736 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system_55734);
var vec__55674_55737 = cljs.core.filter.call(null,((function (seq__55670_55730,chunk__55671_55731,count__55672_55732,i__55673_55733,number_55735,player_55736,system_55734,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__55608_SHARP_){
return cljs.core._EQ_.call(null,number_55735,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__55608_SHARP_));
});})(seq__55670_55730,chunk__55671_55731,count__55672_55732,i__55673_55733,number_55735,player_55736,system_55734,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_55738 = cljs.core.nth.call(null,vec__55674_55737,(0),null);
var seq__55677_55739 = cljs.core.seq.call(null,player_55736);
var chunk__55678_55740 = null;
var count__55679_55741 = (0);
var i__55680_55742 = (0);
while(true){
if((i__55680_55742 < count__55679_55741)){
var vec__55681_55743 = cljs.core._nth.call(null,chunk__55678_55740,i__55680_55742);
var the_key_55744 = cljs.core.nth.call(null,vec__55681_55743,(0),null);
var place_55745 = cljs.core.nth.call(null,vec__55681_55743,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","add-invoice","dungeon/add-invoice",-1470910835),cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_55745),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place_55745),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id,new cljs.core.Keyword(null,"start","start",-355208981),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_55745)),new cljs.core.Keyword(null,"finish","finish",-586688046),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,[cljs.core.str(cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))].join('')),new cljs.core.Keyword(null,"price","price",22129180),lvlup.crusader.dungeon.minute_to_money.call(null,cljs_time.core.in_seconds.call(null,cljs_time.core.interval.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_55745)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_55745)))], null));

var G__55746 = seq__55677_55739;
var G__55747 = chunk__55678_55740;
var G__55748 = count__55679_55741;
var G__55749 = (i__55680_55742 + (1));
seq__55677_55739 = G__55746;
chunk__55678_55740 = G__55747;
count__55679_55741 = G__55748;
i__55680_55742 = G__55749;
continue;
} else {
var temp__4657__auto___55750 = cljs.core.seq.call(null,seq__55677_55739);
if(temp__4657__auto___55750){
var seq__55677_55751__$1 = temp__4657__auto___55750;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55677_55751__$1)){
var c__37613__auto___55752 = cljs.core.chunk_first.call(null,seq__55677_55751__$1);
var G__55753 = cljs.core.chunk_rest.call(null,seq__55677_55751__$1);
var G__55754 = c__37613__auto___55752;
var G__55755 = cljs.core.count.call(null,c__37613__auto___55752);
var G__55756 = (0);
seq__55677_55739 = G__55753;
chunk__55678_55740 = G__55754;
count__55679_55741 = G__55755;
i__55680_55742 = G__55756;
continue;
} else {
var vec__55684_55757 = cljs.core.first.call(null,seq__55677_55751__$1);
var the_key_55758 = cljs.core.nth.call(null,vec__55684_55757,(0),null);
var place_55759 = cljs.core.nth.call(null,vec__55684_55757,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","add-invoice","dungeon/add-invoice",-1470910835),cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_55759),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place_55759),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id,new cljs.core.Keyword(null,"start","start",-355208981),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_55759)),new cljs.core.Keyword(null,"finish","finish",-586688046),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,[cljs.core.str(cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))].join('')),new cljs.core.Keyword(null,"price","price",22129180),lvlup.crusader.dungeon.minute_to_money.call(null,cljs_time.core.in_seconds.call(null,cljs_time.core.interval.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_55759)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_55759)))], null));

var G__55760 = cljs.core.next.call(null,seq__55677_55751__$1);
var G__55761 = null;
var G__55762 = (0);
var G__55763 = (0);
seq__55677_55739 = G__55760;
chunk__55678_55740 = G__55761;
count__55679_55741 = G__55762;
i__55680_55742 = G__55763;
continue;
}
} else {
}
}
break;
}

var G__55764 = seq__55670_55730;
var G__55765 = chunk__55671_55731;
var G__55766 = count__55672_55732;
var G__55767 = (i__55673_55733 + (1));
seq__55670_55730 = G__55764;
chunk__55671_55731 = G__55765;
count__55672_55732 = G__55766;
i__55673_55733 = G__55767;
continue;
} else {
var temp__4657__auto___55768 = cljs.core.seq.call(null,seq__55670_55730);
if(temp__4657__auto___55768){
var seq__55670_55769__$1 = temp__4657__auto___55768;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55670_55769__$1)){
var c__37613__auto___55770 = cljs.core.chunk_first.call(null,seq__55670_55769__$1);
var G__55771 = cljs.core.chunk_rest.call(null,seq__55670_55769__$1);
var G__55772 = c__37613__auto___55770;
var G__55773 = cljs.core.count.call(null,c__37613__auto___55770);
var G__55774 = (0);
seq__55670_55730 = G__55771;
chunk__55671_55731 = G__55772;
count__55672_55732 = G__55773;
i__55673_55733 = G__55774;
continue;
} else {
var system_55775 = cljs.core.first.call(null,seq__55670_55769__$1);
var number_55776 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system_55775);
var player_55777 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system_55775);
var vec__55687_55778 = cljs.core.filter.call(null,((function (seq__55670_55730,chunk__55671_55731,count__55672_55732,i__55673_55733,number_55776,player_55777,system_55775,seq__55670_55769__$1,temp__4657__auto___55768,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__55608_SHARP_){
return cljs.core._EQ_.call(null,number_55776,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__55608_SHARP_));
});})(seq__55670_55730,chunk__55671_55731,count__55672_55732,i__55673_55733,number_55776,player_55777,system_55775,seq__55670_55769__$1,temp__4657__auto___55768,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_55779 = cljs.core.nth.call(null,vec__55687_55778,(0),null);
var seq__55690_55780 = cljs.core.seq.call(null,player_55777);
var chunk__55691_55781 = null;
var count__55692_55782 = (0);
var i__55693_55783 = (0);
while(true){
if((i__55693_55783 < count__55692_55782)){
var vec__55694_55784 = cljs.core._nth.call(null,chunk__55691_55781,i__55693_55783);
var the_key_55785 = cljs.core.nth.call(null,vec__55694_55784,(0),null);
var place_55786 = cljs.core.nth.call(null,vec__55694_55784,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","add-invoice","dungeon/add-invoice",-1470910835),cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_55786),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place_55786),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id,new cljs.core.Keyword(null,"start","start",-355208981),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_55786)),new cljs.core.Keyword(null,"finish","finish",-586688046),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,[cljs.core.str(cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))].join('')),new cljs.core.Keyword(null,"price","price",22129180),lvlup.crusader.dungeon.minute_to_money.call(null,cljs_time.core.in_seconds.call(null,cljs_time.core.interval.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_55786)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_55786)))], null));

var G__55787 = seq__55690_55780;
var G__55788 = chunk__55691_55781;
var G__55789 = count__55692_55782;
var G__55790 = (i__55693_55783 + (1));
seq__55690_55780 = G__55787;
chunk__55691_55781 = G__55788;
count__55692_55782 = G__55789;
i__55693_55783 = G__55790;
continue;
} else {
var temp__4657__auto___55791__$1 = cljs.core.seq.call(null,seq__55690_55780);
if(temp__4657__auto___55791__$1){
var seq__55690_55792__$1 = temp__4657__auto___55791__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55690_55792__$1)){
var c__37613__auto___55793 = cljs.core.chunk_first.call(null,seq__55690_55792__$1);
var G__55794 = cljs.core.chunk_rest.call(null,seq__55690_55792__$1);
var G__55795 = c__37613__auto___55793;
var G__55796 = cljs.core.count.call(null,c__37613__auto___55793);
var G__55797 = (0);
seq__55690_55780 = G__55794;
chunk__55691_55781 = G__55795;
count__55692_55782 = G__55796;
i__55693_55783 = G__55797;
continue;
} else {
var vec__55697_55798 = cljs.core.first.call(null,seq__55690_55792__$1);
var the_key_55799 = cljs.core.nth.call(null,vec__55697_55798,(0),null);
var place_55800 = cljs.core.nth.call(null,vec__55697_55798,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","add-invoice","dungeon/add-invoice",-1470910835),cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_55800),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place_55800),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id,new cljs.core.Keyword(null,"start","start",-355208981),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_55800)),new cljs.core.Keyword(null,"finish","finish",-586688046),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,[cljs.core.str(cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))].join('')),new cljs.core.Keyword(null,"price","price",22129180),lvlup.crusader.dungeon.minute_to_money.call(null,cljs_time.core.in_seconds.call(null,cljs_time.core.interval.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_55800)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_55800)))], null));

var G__55801 = cljs.core.next.call(null,seq__55690_55792__$1);
var G__55802 = null;
var G__55803 = (0);
var G__55804 = (0);
seq__55690_55780 = G__55801;
chunk__55691_55781 = G__55802;
count__55692_55782 = G__55803;
i__55693_55783 = G__55804;
continue;
}
} else {
}
}
break;
}

var G__55805 = cljs.core.next.call(null,seq__55670_55769__$1);
var G__55806 = null;
var G__55807 = (0);
var G__55808 = (0);
seq__55670_55730 = G__55805;
chunk__55671_55731 = G__55806;
count__55672_55732 = G__55807;
i__55673_55733 = G__55808;
continue;
}
} else {
}
}
break;
}

lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-members-with-id","dungeon/get-members-with-id",-1097562328),cljs.core.vec.call(null,player_id)], null));

var seq__55700 = cljs.core.seq.call(null,this_player_all_systems);
var chunk__55701 = null;
var count__55702 = (0);
var i__55703 = (0);
while(true){
if((i__55703 < count__55702)){
var system = cljs.core._nth.call(null,chunk__55701,i__55703);
var number_55809 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system);
var player_55810 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system);
var vec__55704_55811 = cljs.core.filter.call(null,((function (seq__55700,chunk__55701,count__55702,i__55703,number_55809,player_55810,system,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__55609_SHARP_){
return cljs.core._EQ_.call(null,number_55809,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__55609_SHARP_));
});})(seq__55700,chunk__55701,count__55702,i__55703,number_55809,player_55810,system,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_55812 = cljs.core.nth.call(null,vec__55704_55811,(0),null);
var seq__55707_55813 = cljs.core.seq.call(null,player_55810);
var chunk__55708_55814 = null;
var count__55709_55815 = (0);
var i__55710_55816 = (0);
while(true){
if((i__55710_55816 < count__55709_55815)){
var vec__55711_55817 = cljs.core._nth.call(null,chunk__55708_55814,i__55710_55816);
var the_key_55818 = cljs.core.nth.call(null,vec__55711_55817,(0),null);
var place_55819 = cljs.core.nth.call(null,vec__55711_55817,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_55812,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_55812),the_key_55818))], null));

var G__55820 = seq__55707_55813;
var G__55821 = chunk__55708_55814;
var G__55822 = count__55709_55815;
var G__55823 = (i__55710_55816 + (1));
seq__55707_55813 = G__55820;
chunk__55708_55814 = G__55821;
count__55709_55815 = G__55822;
i__55710_55816 = G__55823;
continue;
} else {
var temp__4657__auto___55824 = cljs.core.seq.call(null,seq__55707_55813);
if(temp__4657__auto___55824){
var seq__55707_55825__$1 = temp__4657__auto___55824;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55707_55825__$1)){
var c__37613__auto___55826 = cljs.core.chunk_first.call(null,seq__55707_55825__$1);
var G__55827 = cljs.core.chunk_rest.call(null,seq__55707_55825__$1);
var G__55828 = c__37613__auto___55826;
var G__55829 = cljs.core.count.call(null,c__37613__auto___55826);
var G__55830 = (0);
seq__55707_55813 = G__55827;
chunk__55708_55814 = G__55828;
count__55709_55815 = G__55829;
i__55710_55816 = G__55830;
continue;
} else {
var vec__55714_55831 = cljs.core.first.call(null,seq__55707_55825__$1);
var the_key_55832 = cljs.core.nth.call(null,vec__55714_55831,(0),null);
var place_55833 = cljs.core.nth.call(null,vec__55714_55831,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_55812,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_55812),the_key_55832))], null));

var G__55834 = cljs.core.next.call(null,seq__55707_55825__$1);
var G__55835 = null;
var G__55836 = (0);
var G__55837 = (0);
seq__55707_55813 = G__55834;
chunk__55708_55814 = G__55835;
count__55709_55815 = G__55836;
i__55710_55816 = G__55837;
continue;
}
} else {
}
}
break;
}

var G__55838 = seq__55700;
var G__55839 = chunk__55701;
var G__55840 = count__55702;
var G__55841 = (i__55703 + (1));
seq__55700 = G__55838;
chunk__55701 = G__55839;
count__55702 = G__55840;
i__55703 = G__55841;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__55700);
if(temp__4657__auto__){
var seq__55700__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55700__$1)){
var c__37613__auto__ = cljs.core.chunk_first.call(null,seq__55700__$1);
var G__55842 = cljs.core.chunk_rest.call(null,seq__55700__$1);
var G__55843 = c__37613__auto__;
var G__55844 = cljs.core.count.call(null,c__37613__auto__);
var G__55845 = (0);
seq__55700 = G__55842;
chunk__55701 = G__55843;
count__55702 = G__55844;
i__55703 = G__55845;
continue;
} else {
var system = cljs.core.first.call(null,seq__55700__$1);
var number_55846 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system);
var player_55847 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system);
var vec__55717_55848 = cljs.core.filter.call(null,((function (seq__55700,chunk__55701,count__55702,i__55703,number_55846,player_55847,system,seq__55700__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__55609_SHARP_){
return cljs.core._EQ_.call(null,number_55846,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__55609_SHARP_));
});})(seq__55700,chunk__55701,count__55702,i__55703,number_55846,player_55847,system,seq__55700__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_55849 = cljs.core.nth.call(null,vec__55717_55848,(0),null);
var seq__55720_55850 = cljs.core.seq.call(null,player_55847);
var chunk__55721_55851 = null;
var count__55722_55852 = (0);
var i__55723_55853 = (0);
while(true){
if((i__55723_55853 < count__55722_55852)){
var vec__55724_55854 = cljs.core._nth.call(null,chunk__55721_55851,i__55723_55853);
var the_key_55855 = cljs.core.nth.call(null,vec__55724_55854,(0),null);
var place_55856 = cljs.core.nth.call(null,vec__55724_55854,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_55849,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_55849),the_key_55855))], null));

var G__55857 = seq__55720_55850;
var G__55858 = chunk__55721_55851;
var G__55859 = count__55722_55852;
var G__55860 = (i__55723_55853 + (1));
seq__55720_55850 = G__55857;
chunk__55721_55851 = G__55858;
count__55722_55852 = G__55859;
i__55723_55853 = G__55860;
continue;
} else {
var temp__4657__auto___55861__$1 = cljs.core.seq.call(null,seq__55720_55850);
if(temp__4657__auto___55861__$1){
var seq__55720_55862__$1 = temp__4657__auto___55861__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55720_55862__$1)){
var c__37613__auto___55863 = cljs.core.chunk_first.call(null,seq__55720_55862__$1);
var G__55864 = cljs.core.chunk_rest.call(null,seq__55720_55862__$1);
var G__55865 = c__37613__auto___55863;
var G__55866 = cljs.core.count.call(null,c__37613__auto___55863);
var G__55867 = (0);
seq__55720_55850 = G__55864;
chunk__55721_55851 = G__55865;
count__55722_55852 = G__55866;
i__55723_55853 = G__55867;
continue;
} else {
var vec__55727_55868 = cljs.core.first.call(null,seq__55720_55862__$1);
var the_key_55869 = cljs.core.nth.call(null,vec__55727_55868,(0),null);
var place_55870 = cljs.core.nth.call(null,vec__55727_55868,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_55849,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_55849),the_key_55869))], null));

var G__55871 = cljs.core.next.call(null,seq__55720_55862__$1);
var G__55872 = null;
var G__55873 = (0);
var G__55874 = (0);
seq__55720_55850 = G__55871;
chunk__55721_55851 = G__55872;
count__55722_55852 = G__55873;
i__55723_55853 = G__55874;
continue;
}
} else {
}
}
break;
}

var G__55875 = cljs.core.next.call(null,seq__55700__$1);
var G__55876 = null;
var G__55877 = (0);
var G__55878 = (0);
seq__55700 = G__55875;
chunk__55701 = G__55876;
count__55702 = G__55877;
i__55703 = G__55878;
continue;
}
} else {
return null;
}
}
break;
}
});
lvlup.crusader.dungeon.all_items_to_hours = (function lvlup$crusader$dungeon$all_items_to_hours(player_id){
var all_systems = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"system-map"], null));
var all_players = cljs.core.filter.call(null,((function (all_systems){
return (function (a){
return (cljs.core.not_EQ_.call(null,a,cljs.core.PersistentArrayMap.EMPTY)) && (cljs.core.not_EQ_.call(null,a,null));
});})(all_systems))
,cljs.core.map.call(null,((function (all_systems){
return (function (p1__55879_SHARP_){
return new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__55879_SHARP_);
});})(all_systems))
,cljs.core.deref.call(null,all_systems)));
var this_player_systems = cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (p1__55880_SHARP_){
return cljs.core._EQ_.call(null,parseInt(player_id),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(p1__55880_SHARP_));
});})(all_systems,all_players))
,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (a){
return cljs.core.contains_QMARK_.call(null,a,new cljs.core.Keyword(null,"start","start",-355208981));
});})(all_systems,all_players))
,cljs.core.map.call(null,((function (all_systems,all_players){
return (function (p1__55881_SHARP_){
return cljs.core.second.call(null,cljs.core.first.call(null,p1__55881_SHARP_));
});})(all_systems,all_players))
,all_players)))));
var total_price = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (all_systems,all_players,this_player_systems){
return (function (p1__55882_SHARP_){
return lvlup.crusader.dungeon.count_time_halves.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(p1__55882_SHARP_)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))));
});})(all_systems,all_players,this_player_systems))
,this_player_systems));
return total_price;
});
lvlup.crusader.dungeon.all_items_to_season_pass = (function lvlup$crusader$dungeon$all_items_to_season_pass(player_id){
var all_systems = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"system-map"], null));
var all_players = cljs.core.filter.call(null,((function (all_systems){
return (function (a){
return (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(a),cljs.core.PersistentArrayMap.EMPTY)) && (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(a),null));
});})(all_systems))
,cljs.core.map.call(null,((function (all_systems){
return (function (p1__55883_SHARP_){
return cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__55883_SHARP_),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__55883_SHARP_));
});})(all_systems))
,cljs.core.deref.call(null,all_systems)));
var this_player_all_systems = cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (p1__55884_SHARP_){
return cljs.core._EQ_.call(null,parseInt(player_id),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__55884_SHARP_)))));
});})(all_systems,all_players))
,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (a){
return cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(a))),new cljs.core.Keyword(null,"member-id","member-id",606659713));
});})(all_systems,all_players))
,all_players))));
var this_player_systems = cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players,this_player_all_systems){
return (function (p1__55885_SHARP_){
return cljs.core._EQ_.call(null,parseInt(player_id),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__55885_SHARP_)))));
});})(all_systems,all_players,this_player_all_systems))
,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players,this_player_all_systems){
return (function (a){
return cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(a))),new cljs.core.Keyword(null,"start","start",-355208981));
});})(all_systems,all_players,this_player_all_systems))
,all_players))));
console.log([cljs.core.str("wtf: "),cljs.core.str(all_players)].join(''));

var seq__55978 = cljs.core.seq.call(null,this_player_systems);
var chunk__55979 = null;
var count__55980 = (0);
var i__55981 = (0);
while(true){
if((i__55981 < count__55980)){
var system = cljs.core._nth.call(null,chunk__55979,i__55981);
var number_56068 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system);
var player_56069 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system);
var vec__55982_56070 = cljs.core.filter.call(null,((function (seq__55978,chunk__55979,count__55980,i__55981,number_56068,player_56069,system,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__55886_SHARP_){
return cljs.core._EQ_.call(null,number_56068,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__55886_SHARP_));
});})(seq__55978,chunk__55979,count__55980,i__55981,number_56068,player_56069,system,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_56071 = cljs.core.nth.call(null,vec__55982_56070,(0),null);
var seq__55985_56072 = cljs.core.seq.call(null,player_56069);
var chunk__55986_56073 = null;
var count__55987_56074 = (0);
var i__55988_56075 = (0);
while(true){
if((i__55988_56075 < count__55987_56074)){
var vec__55989_56076 = cljs.core._nth.call(null,chunk__55986_56073,i__55988_56075);
var the_key_56077 = cljs.core.nth.call(null,vec__55989_56076,(0),null);
var place_56078 = cljs.core.nth.call(null,vec__55989_56076,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","season-pass","dungeon/season-pass",-766369009),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"quantity","quantity",-1929050694),((-1) * lvlup.crusader.dungeon.all_items_to_hours.call(null,player_id)),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id], null)], null));

var G__56079 = seq__55985_56072;
var G__56080 = chunk__55986_56073;
var G__56081 = count__55987_56074;
var G__56082 = (i__55988_56075 + (1));
seq__55985_56072 = G__56079;
chunk__55986_56073 = G__56080;
count__55987_56074 = G__56081;
i__55988_56075 = G__56082;
continue;
} else {
var temp__4657__auto___56083 = cljs.core.seq.call(null,seq__55985_56072);
if(temp__4657__auto___56083){
var seq__55985_56084__$1 = temp__4657__auto___56083;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55985_56084__$1)){
var c__37613__auto___56085 = cljs.core.chunk_first.call(null,seq__55985_56084__$1);
var G__56086 = cljs.core.chunk_rest.call(null,seq__55985_56084__$1);
var G__56087 = c__37613__auto___56085;
var G__56088 = cljs.core.count.call(null,c__37613__auto___56085);
var G__56089 = (0);
seq__55985_56072 = G__56086;
chunk__55986_56073 = G__56087;
count__55987_56074 = G__56088;
i__55988_56075 = G__56089;
continue;
} else {
var vec__55992_56090 = cljs.core.first.call(null,seq__55985_56084__$1);
var the_key_56091 = cljs.core.nth.call(null,vec__55992_56090,(0),null);
var place_56092 = cljs.core.nth.call(null,vec__55992_56090,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","season-pass","dungeon/season-pass",-766369009),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"quantity","quantity",-1929050694),((-1) * lvlup.crusader.dungeon.all_items_to_hours.call(null,player_id)),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id], null)], null));

var G__56093 = cljs.core.next.call(null,seq__55985_56084__$1);
var G__56094 = null;
var G__56095 = (0);
var G__56096 = (0);
seq__55985_56072 = G__56093;
chunk__55986_56073 = G__56094;
count__55987_56074 = G__56095;
i__55988_56075 = G__56096;
continue;
}
} else {
}
}
break;
}

var seq__55995_56097 = cljs.core.seq.call(null,this_player_all_systems);
var chunk__55996_56098 = null;
var count__55997_56099 = (0);
var i__55998_56100 = (0);
while(true){
if((i__55998_56100 < count__55997_56099)){
var system_56101__$1 = cljs.core._nth.call(null,chunk__55996_56098,i__55998_56100);
var number_56102__$1 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system_56101__$1);
var player_56103__$1 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system_56101__$1);
var vec__55999_56104 = cljs.core.filter.call(null,((function (seq__55995_56097,chunk__55996_56098,count__55997_56099,i__55998_56100,seq__55978,chunk__55979,count__55980,i__55981,number_56102__$1,player_56103__$1,system_56101__$1,number_56068,player_56069,vec__55982_56070,filtered_system_56071,system,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__55887_SHARP_){
return cljs.core._EQ_.call(null,number_56102__$1,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__55887_SHARP_));
});})(seq__55995_56097,chunk__55996_56098,count__55997_56099,i__55998_56100,seq__55978,chunk__55979,count__55980,i__55981,number_56102__$1,player_56103__$1,system_56101__$1,number_56068,player_56069,vec__55982_56070,filtered_system_56071,system,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_56105__$1 = cljs.core.nth.call(null,vec__55999_56104,(0),null);
var seq__56002_56106 = cljs.core.seq.call(null,player_56103__$1);
var chunk__56003_56107 = null;
var count__56004_56108 = (0);
var i__56005_56109 = (0);
while(true){
if((i__56005_56109 < count__56004_56108)){
var vec__56006_56110 = cljs.core._nth.call(null,chunk__56003_56107,i__56005_56109);
var the_key_56111 = cljs.core.nth.call(null,vec__56006_56110,(0),null);
var place_56112 = cljs.core.nth.call(null,vec__56006_56110,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_56105__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_56105__$1),the_key_56111))], null));

var G__56113 = seq__56002_56106;
var G__56114 = chunk__56003_56107;
var G__56115 = count__56004_56108;
var G__56116 = (i__56005_56109 + (1));
seq__56002_56106 = G__56113;
chunk__56003_56107 = G__56114;
count__56004_56108 = G__56115;
i__56005_56109 = G__56116;
continue;
} else {
var temp__4657__auto___56117 = cljs.core.seq.call(null,seq__56002_56106);
if(temp__4657__auto___56117){
var seq__56002_56118__$1 = temp__4657__auto___56117;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56002_56118__$1)){
var c__37613__auto___56119 = cljs.core.chunk_first.call(null,seq__56002_56118__$1);
var G__56120 = cljs.core.chunk_rest.call(null,seq__56002_56118__$1);
var G__56121 = c__37613__auto___56119;
var G__56122 = cljs.core.count.call(null,c__37613__auto___56119);
var G__56123 = (0);
seq__56002_56106 = G__56120;
chunk__56003_56107 = G__56121;
count__56004_56108 = G__56122;
i__56005_56109 = G__56123;
continue;
} else {
var vec__56009_56124 = cljs.core.first.call(null,seq__56002_56118__$1);
var the_key_56125 = cljs.core.nth.call(null,vec__56009_56124,(0),null);
var place_56126 = cljs.core.nth.call(null,vec__56009_56124,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_56105__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_56105__$1),the_key_56125))], null));

var G__56127 = cljs.core.next.call(null,seq__56002_56118__$1);
var G__56128 = null;
var G__56129 = (0);
var G__56130 = (0);
seq__56002_56106 = G__56127;
chunk__56003_56107 = G__56128;
count__56004_56108 = G__56129;
i__56005_56109 = G__56130;
continue;
}
} else {
}
}
break;
}

var G__56131 = seq__55995_56097;
var G__56132 = chunk__55996_56098;
var G__56133 = count__55997_56099;
var G__56134 = (i__55998_56100 + (1));
seq__55995_56097 = G__56131;
chunk__55996_56098 = G__56132;
count__55997_56099 = G__56133;
i__55998_56100 = G__56134;
continue;
} else {
var temp__4657__auto___56135 = cljs.core.seq.call(null,seq__55995_56097);
if(temp__4657__auto___56135){
var seq__55995_56136__$1 = temp__4657__auto___56135;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55995_56136__$1)){
var c__37613__auto___56137 = cljs.core.chunk_first.call(null,seq__55995_56136__$1);
var G__56138 = cljs.core.chunk_rest.call(null,seq__55995_56136__$1);
var G__56139 = c__37613__auto___56137;
var G__56140 = cljs.core.count.call(null,c__37613__auto___56137);
var G__56141 = (0);
seq__55995_56097 = G__56138;
chunk__55996_56098 = G__56139;
count__55997_56099 = G__56140;
i__55998_56100 = G__56141;
continue;
} else {
var system_56142__$1 = cljs.core.first.call(null,seq__55995_56136__$1);
var number_56143__$1 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system_56142__$1);
var player_56144__$1 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system_56142__$1);
var vec__56012_56145 = cljs.core.filter.call(null,((function (seq__55995_56097,chunk__55996_56098,count__55997_56099,i__55998_56100,seq__55978,chunk__55979,count__55980,i__55981,number_56143__$1,player_56144__$1,system_56142__$1,seq__55995_56136__$1,temp__4657__auto___56135,number_56068,player_56069,vec__55982_56070,filtered_system_56071,system,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__55887_SHARP_){
return cljs.core._EQ_.call(null,number_56143__$1,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__55887_SHARP_));
});})(seq__55995_56097,chunk__55996_56098,count__55997_56099,i__55998_56100,seq__55978,chunk__55979,count__55980,i__55981,number_56143__$1,player_56144__$1,system_56142__$1,seq__55995_56136__$1,temp__4657__auto___56135,number_56068,player_56069,vec__55982_56070,filtered_system_56071,system,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_56146__$1 = cljs.core.nth.call(null,vec__56012_56145,(0),null);
var seq__56015_56147 = cljs.core.seq.call(null,player_56144__$1);
var chunk__56016_56148 = null;
var count__56017_56149 = (0);
var i__56018_56150 = (0);
while(true){
if((i__56018_56150 < count__56017_56149)){
var vec__56019_56151 = cljs.core._nth.call(null,chunk__56016_56148,i__56018_56150);
var the_key_56152 = cljs.core.nth.call(null,vec__56019_56151,(0),null);
var place_56153 = cljs.core.nth.call(null,vec__56019_56151,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_56146__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_56146__$1),the_key_56152))], null));

var G__56154 = seq__56015_56147;
var G__56155 = chunk__56016_56148;
var G__56156 = count__56017_56149;
var G__56157 = (i__56018_56150 + (1));
seq__56015_56147 = G__56154;
chunk__56016_56148 = G__56155;
count__56017_56149 = G__56156;
i__56018_56150 = G__56157;
continue;
} else {
var temp__4657__auto___56158__$1 = cljs.core.seq.call(null,seq__56015_56147);
if(temp__4657__auto___56158__$1){
var seq__56015_56159__$1 = temp__4657__auto___56158__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56015_56159__$1)){
var c__37613__auto___56160 = cljs.core.chunk_first.call(null,seq__56015_56159__$1);
var G__56161 = cljs.core.chunk_rest.call(null,seq__56015_56159__$1);
var G__56162 = c__37613__auto___56160;
var G__56163 = cljs.core.count.call(null,c__37613__auto___56160);
var G__56164 = (0);
seq__56015_56147 = G__56161;
chunk__56016_56148 = G__56162;
count__56017_56149 = G__56163;
i__56018_56150 = G__56164;
continue;
} else {
var vec__56022_56165 = cljs.core.first.call(null,seq__56015_56159__$1);
var the_key_56166 = cljs.core.nth.call(null,vec__56022_56165,(0),null);
var place_56167 = cljs.core.nth.call(null,vec__56022_56165,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_56146__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_56146__$1),the_key_56166))], null));

var G__56168 = cljs.core.next.call(null,seq__56015_56159__$1);
var G__56169 = null;
var G__56170 = (0);
var G__56171 = (0);
seq__56015_56147 = G__56168;
chunk__56016_56148 = G__56169;
count__56017_56149 = G__56170;
i__56018_56150 = G__56171;
continue;
}
} else {
}
}
break;
}

var G__56172 = cljs.core.next.call(null,seq__55995_56136__$1);
var G__56173 = null;
var G__56174 = (0);
var G__56175 = (0);
seq__55995_56097 = G__56172;
chunk__55996_56098 = G__56173;
count__55997_56099 = G__56174;
i__55998_56100 = G__56175;
continue;
}
} else {
}
}
break;
}

var G__56176 = seq__55978;
var G__56177 = chunk__55979;
var G__56178 = count__55980;
var G__56179 = (i__55981 + (1));
seq__55978 = G__56176;
chunk__55979 = G__56177;
count__55980 = G__56178;
i__55981 = G__56179;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__55978);
if(temp__4657__auto__){
var seq__55978__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55978__$1)){
var c__37613__auto__ = cljs.core.chunk_first.call(null,seq__55978__$1);
var G__56180 = cljs.core.chunk_rest.call(null,seq__55978__$1);
var G__56181 = c__37613__auto__;
var G__56182 = cljs.core.count.call(null,c__37613__auto__);
var G__56183 = (0);
seq__55978 = G__56180;
chunk__55979 = G__56181;
count__55980 = G__56182;
i__55981 = G__56183;
continue;
} else {
var system = cljs.core.first.call(null,seq__55978__$1);
var number_56184 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system);
var player_56185 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system);
var vec__56025_56186 = cljs.core.filter.call(null,((function (seq__55978,chunk__55979,count__55980,i__55981,number_56184,player_56185,system,seq__55978__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__55886_SHARP_){
return cljs.core._EQ_.call(null,number_56184,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__55886_SHARP_));
});})(seq__55978,chunk__55979,count__55980,i__55981,number_56184,player_56185,system,seq__55978__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_56187 = cljs.core.nth.call(null,vec__56025_56186,(0),null);
var seq__56028_56188 = cljs.core.seq.call(null,player_56185);
var chunk__56029_56189 = null;
var count__56030_56190 = (0);
var i__56031_56191 = (0);
while(true){
if((i__56031_56191 < count__56030_56190)){
var vec__56032_56192 = cljs.core._nth.call(null,chunk__56029_56189,i__56031_56191);
var the_key_56193 = cljs.core.nth.call(null,vec__56032_56192,(0),null);
var place_56194 = cljs.core.nth.call(null,vec__56032_56192,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","season-pass","dungeon/season-pass",-766369009),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"quantity","quantity",-1929050694),((-1) * lvlup.crusader.dungeon.all_items_to_hours.call(null,player_id)),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id], null)], null));

var G__56195 = seq__56028_56188;
var G__56196 = chunk__56029_56189;
var G__56197 = count__56030_56190;
var G__56198 = (i__56031_56191 + (1));
seq__56028_56188 = G__56195;
chunk__56029_56189 = G__56196;
count__56030_56190 = G__56197;
i__56031_56191 = G__56198;
continue;
} else {
var temp__4657__auto___56199__$1 = cljs.core.seq.call(null,seq__56028_56188);
if(temp__4657__auto___56199__$1){
var seq__56028_56200__$1 = temp__4657__auto___56199__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56028_56200__$1)){
var c__37613__auto___56201 = cljs.core.chunk_first.call(null,seq__56028_56200__$1);
var G__56202 = cljs.core.chunk_rest.call(null,seq__56028_56200__$1);
var G__56203 = c__37613__auto___56201;
var G__56204 = cljs.core.count.call(null,c__37613__auto___56201);
var G__56205 = (0);
seq__56028_56188 = G__56202;
chunk__56029_56189 = G__56203;
count__56030_56190 = G__56204;
i__56031_56191 = G__56205;
continue;
} else {
var vec__56035_56206 = cljs.core.first.call(null,seq__56028_56200__$1);
var the_key_56207 = cljs.core.nth.call(null,vec__56035_56206,(0),null);
var place_56208 = cljs.core.nth.call(null,vec__56035_56206,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","season-pass","dungeon/season-pass",-766369009),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"quantity","quantity",-1929050694),((-1) * lvlup.crusader.dungeon.all_items_to_hours.call(null,player_id)),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id], null)], null));

var G__56209 = cljs.core.next.call(null,seq__56028_56200__$1);
var G__56210 = null;
var G__56211 = (0);
var G__56212 = (0);
seq__56028_56188 = G__56209;
chunk__56029_56189 = G__56210;
count__56030_56190 = G__56211;
i__56031_56191 = G__56212;
continue;
}
} else {
}
}
break;
}

var seq__56038_56213 = cljs.core.seq.call(null,this_player_all_systems);
var chunk__56039_56214 = null;
var count__56040_56215 = (0);
var i__56041_56216 = (0);
while(true){
if((i__56041_56216 < count__56040_56215)){
var system_56217__$1 = cljs.core._nth.call(null,chunk__56039_56214,i__56041_56216);
var number_56218__$1 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system_56217__$1);
var player_56219__$1 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system_56217__$1);
var vec__56042_56220 = cljs.core.filter.call(null,((function (seq__56038_56213,chunk__56039_56214,count__56040_56215,i__56041_56216,seq__55978,chunk__55979,count__55980,i__55981,number_56218__$1,player_56219__$1,system_56217__$1,number_56184,player_56185,vec__56025_56186,filtered_system_56187,system,seq__55978__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__55887_SHARP_){
return cljs.core._EQ_.call(null,number_56218__$1,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__55887_SHARP_));
});})(seq__56038_56213,chunk__56039_56214,count__56040_56215,i__56041_56216,seq__55978,chunk__55979,count__55980,i__55981,number_56218__$1,player_56219__$1,system_56217__$1,number_56184,player_56185,vec__56025_56186,filtered_system_56187,system,seq__55978__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_56221__$1 = cljs.core.nth.call(null,vec__56042_56220,(0),null);
var seq__56045_56222 = cljs.core.seq.call(null,player_56219__$1);
var chunk__56046_56223 = null;
var count__56047_56224 = (0);
var i__56048_56225 = (0);
while(true){
if((i__56048_56225 < count__56047_56224)){
var vec__56049_56226 = cljs.core._nth.call(null,chunk__56046_56223,i__56048_56225);
var the_key_56227 = cljs.core.nth.call(null,vec__56049_56226,(0),null);
var place_56228 = cljs.core.nth.call(null,vec__56049_56226,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_56221__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_56221__$1),the_key_56227))], null));

var G__56229 = seq__56045_56222;
var G__56230 = chunk__56046_56223;
var G__56231 = count__56047_56224;
var G__56232 = (i__56048_56225 + (1));
seq__56045_56222 = G__56229;
chunk__56046_56223 = G__56230;
count__56047_56224 = G__56231;
i__56048_56225 = G__56232;
continue;
} else {
var temp__4657__auto___56233__$1 = cljs.core.seq.call(null,seq__56045_56222);
if(temp__4657__auto___56233__$1){
var seq__56045_56234__$1 = temp__4657__auto___56233__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56045_56234__$1)){
var c__37613__auto___56235 = cljs.core.chunk_first.call(null,seq__56045_56234__$1);
var G__56236 = cljs.core.chunk_rest.call(null,seq__56045_56234__$1);
var G__56237 = c__37613__auto___56235;
var G__56238 = cljs.core.count.call(null,c__37613__auto___56235);
var G__56239 = (0);
seq__56045_56222 = G__56236;
chunk__56046_56223 = G__56237;
count__56047_56224 = G__56238;
i__56048_56225 = G__56239;
continue;
} else {
var vec__56052_56240 = cljs.core.first.call(null,seq__56045_56234__$1);
var the_key_56241 = cljs.core.nth.call(null,vec__56052_56240,(0),null);
var place_56242 = cljs.core.nth.call(null,vec__56052_56240,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_56221__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_56221__$1),the_key_56241))], null));

var G__56243 = cljs.core.next.call(null,seq__56045_56234__$1);
var G__56244 = null;
var G__56245 = (0);
var G__56246 = (0);
seq__56045_56222 = G__56243;
chunk__56046_56223 = G__56244;
count__56047_56224 = G__56245;
i__56048_56225 = G__56246;
continue;
}
} else {
}
}
break;
}

var G__56247 = seq__56038_56213;
var G__56248 = chunk__56039_56214;
var G__56249 = count__56040_56215;
var G__56250 = (i__56041_56216 + (1));
seq__56038_56213 = G__56247;
chunk__56039_56214 = G__56248;
count__56040_56215 = G__56249;
i__56041_56216 = G__56250;
continue;
} else {
var temp__4657__auto___56251__$1 = cljs.core.seq.call(null,seq__56038_56213);
if(temp__4657__auto___56251__$1){
var seq__56038_56252__$1 = temp__4657__auto___56251__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56038_56252__$1)){
var c__37613__auto___56253 = cljs.core.chunk_first.call(null,seq__56038_56252__$1);
var G__56254 = cljs.core.chunk_rest.call(null,seq__56038_56252__$1);
var G__56255 = c__37613__auto___56253;
var G__56256 = cljs.core.count.call(null,c__37613__auto___56253);
var G__56257 = (0);
seq__56038_56213 = G__56254;
chunk__56039_56214 = G__56255;
count__56040_56215 = G__56256;
i__56041_56216 = G__56257;
continue;
} else {
var system_56258__$1 = cljs.core.first.call(null,seq__56038_56252__$1);
var number_56259__$1 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system_56258__$1);
var player_56260__$1 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system_56258__$1);
var vec__56055_56261 = cljs.core.filter.call(null,((function (seq__56038_56213,chunk__56039_56214,count__56040_56215,i__56041_56216,seq__55978,chunk__55979,count__55980,i__55981,number_56259__$1,player_56260__$1,system_56258__$1,seq__56038_56252__$1,temp__4657__auto___56251__$1,number_56184,player_56185,vec__56025_56186,filtered_system_56187,system,seq__55978__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__55887_SHARP_){
return cljs.core._EQ_.call(null,number_56259__$1,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__55887_SHARP_));
});})(seq__56038_56213,chunk__56039_56214,count__56040_56215,i__56041_56216,seq__55978,chunk__55979,count__55980,i__55981,number_56259__$1,player_56260__$1,system_56258__$1,seq__56038_56252__$1,temp__4657__auto___56251__$1,number_56184,player_56185,vec__56025_56186,filtered_system_56187,system,seq__55978__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_56262__$1 = cljs.core.nth.call(null,vec__56055_56261,(0),null);
var seq__56058_56263 = cljs.core.seq.call(null,player_56260__$1);
var chunk__56059_56264 = null;
var count__56060_56265 = (0);
var i__56061_56266 = (0);
while(true){
if((i__56061_56266 < count__56060_56265)){
var vec__56062_56267 = cljs.core._nth.call(null,chunk__56059_56264,i__56061_56266);
var the_key_56268 = cljs.core.nth.call(null,vec__56062_56267,(0),null);
var place_56269 = cljs.core.nth.call(null,vec__56062_56267,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_56262__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_56262__$1),the_key_56268))], null));

var G__56270 = seq__56058_56263;
var G__56271 = chunk__56059_56264;
var G__56272 = count__56060_56265;
var G__56273 = (i__56061_56266 + (1));
seq__56058_56263 = G__56270;
chunk__56059_56264 = G__56271;
count__56060_56265 = G__56272;
i__56061_56266 = G__56273;
continue;
} else {
var temp__4657__auto___56274__$2 = cljs.core.seq.call(null,seq__56058_56263);
if(temp__4657__auto___56274__$2){
var seq__56058_56275__$1 = temp__4657__auto___56274__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56058_56275__$1)){
var c__37613__auto___56276 = cljs.core.chunk_first.call(null,seq__56058_56275__$1);
var G__56277 = cljs.core.chunk_rest.call(null,seq__56058_56275__$1);
var G__56278 = c__37613__auto___56276;
var G__56279 = cljs.core.count.call(null,c__37613__auto___56276);
var G__56280 = (0);
seq__56058_56263 = G__56277;
chunk__56059_56264 = G__56278;
count__56060_56265 = G__56279;
i__56061_56266 = G__56280;
continue;
} else {
var vec__56065_56281 = cljs.core.first.call(null,seq__56058_56275__$1);
var the_key_56282 = cljs.core.nth.call(null,vec__56065_56281,(0),null);
var place_56283 = cljs.core.nth.call(null,vec__56065_56281,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_56262__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_56262__$1),the_key_56282))], null));

var G__56284 = cljs.core.next.call(null,seq__56058_56275__$1);
var G__56285 = null;
var G__56286 = (0);
var G__56287 = (0);
seq__56058_56263 = G__56284;
chunk__56059_56264 = G__56285;
count__56060_56265 = G__56286;
i__56061_56266 = G__56287;
continue;
}
} else {
}
}
break;
}

var G__56288 = cljs.core.next.call(null,seq__56038_56252__$1);
var G__56289 = null;
var G__56290 = (0);
var G__56291 = (0);
seq__56038_56213 = G__56288;
chunk__56039_56214 = G__56289;
count__56040_56215 = G__56290;
i__56041_56216 = G__56291;
continue;
}
} else {
}
}
break;
}

var G__56292 = cljs.core.next.call(null,seq__55978__$1);
var G__56293 = null;
var G__56294 = (0);
var G__56295 = (0);
seq__55978 = G__56292;
chunk__55979 = G__56293;
count__55980 = G__56294;
i__55981 = G__56295;
continue;
}
} else {
return null;
}
}
break;
}
});
lvlup.crusader.dungeon.all_items_to_money = (function lvlup$crusader$dungeon$all_items_to_money(player_id){
var all_systems = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"system-map"], null));
var all_players = cljs.core.filter.call(null,((function (all_systems){
return (function (a){
return (cljs.core.not_EQ_.call(null,a,cljs.core.PersistentArrayMap.EMPTY)) && (cljs.core.not_EQ_.call(null,a,null));
});})(all_systems))
,cljs.core.map.call(null,((function (all_systems){
return (function (p1__56296_SHARP_){
return new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__56296_SHARP_);
});})(all_systems))
,cljs.core.deref.call(null,all_systems)));
var this_player_systems = cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (p1__56297_SHARP_){
return cljs.core._EQ_.call(null,parseInt(player_id),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(p1__56297_SHARP_));
});})(all_systems,all_players))
,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (a){
return cljs.core.contains_QMARK_.call(null,a,new cljs.core.Keyword(null,"start","start",-355208981));
});})(all_systems,all_players))
,cljs.core.map.call(null,((function (all_systems,all_players){
return (function (p1__56298_SHARP_){
return cljs.core.second.call(null,cljs.core.first.call(null,p1__56298_SHARP_));
});})(all_systems,all_players))
,all_players)))));
var total_price = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (all_systems,all_players,this_player_systems){
return (function (p1__56299_SHARP_){
return lvlup.crusader.dungeon.minute_to_money.call(null,(cljs.core.truth_(cljs_time.core.before_QMARK_.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(p1__56299_SHARP_)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1)))))?cljs_time.core.in_seconds.call(null,cljs_time.core.interval.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(p1__56299_SHARP_)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))):(0)),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__56299_SHARP_));
});})(all_systems,all_players,this_player_systems))
,this_player_systems));
return total_price;
});
lvlup.crusader.dungeon.elapsing_time_no_seconds = (function lvlup$crusader$dungeon$elapsing_time_no_seconds(seconds){
var seconds_negated = ((-1) * seconds);
if((seconds < (0))){
return [cljs.core.str("- "),cljs.core.str(cljs.core.quot.call(null,seconds_negated,(3600))),cljs.core.str("h "),cljs.core.str(cljs.core.mod.call(null,cljs.core.quot.call(null,seconds_negated,(60)),(60))),cljs.core.str("m "),cljs.core.str(cljs.core.mod.call(null,seconds_negated,(60))),cljs.core.str("s")].join('');
} else {
return [cljs.core.str(cljs.core.quot.call(null,seconds,(3600))),cljs.core.str(" \u00F3ra "),cljs.core.str(cljs.core.mod.call(null,cljs.core.quot.call(null,seconds,(60)),(60))),cljs.core.str(" perc ")].join('');
}
});
lvlup.crusader.dungeon.elapsing_time = (function lvlup$crusader$dungeon$elapsing_time(seconds){
var seconds_negated = ((-1) * seconds);
if((seconds < (0))){
return [cljs.core.str("- "),cljs.core.str(cljs.core.quot.call(null,seconds_negated,(3600))),cljs.core.str("h "),cljs.core.str(cljs.core.mod.call(null,cljs.core.quot.call(null,seconds_negated,(60)),(60))),cljs.core.str("m "),cljs.core.str(cljs.core.mod.call(null,seconds_negated,(60))),cljs.core.str("s")].join('');
} else {
return [cljs.core.str(cljs.core.quot.call(null,seconds,(3600))),cljs.core.str("h "),cljs.core.str(cljs.core.mod.call(null,cljs.core.quot.call(null,seconds,(60)),(60))),cljs.core.str("m "),cljs.core.str(cljs.core.mod.call(null,seconds,(60))),cljs.core.str("s")].join('');
}
});
lvlup.crusader.dungeon.pay = (function lvlup$crusader$dungeon$pay(player_number,item,name,loading){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button-small.uk-button.uk-button-primary.uk-width-1-3","button.uk-button-small.uk-button.uk-button-primary.uk-width-1-3",2054586188),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),loading,new cljs.core.Keyword(null,"data-uk-icon","data-uk-icon",1809176669),"icon: sign-out",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
lvlup.crusader.dungeon.notification.call(null,[cljs.core.str(name),cljs.core.str(" kassz\u00E1hoz k\u00FCldve!")].join(''));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-loading","set-loading",984627975),true], null));

lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(item),player_number))], null));

return lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","add-invoice","dungeon/add-invoice",-1470910835),cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"member-id","member-id",606659713),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(item),player_number)),new cljs.core.Keyword(null,"start","start",-355208981),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(item),player_number))),new cljs.core.Keyword(null,"finish","finish",-586688046),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,[cljs.core.str(cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))].join('')),new cljs.core.Keyword(null,"price","price",22129180),lvlup.crusader.dungeon.minute_to_money.call(null,cljs_time.core.in_seconds.call(null,cljs_time.core.interval.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(item),player_number))),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item)))], null),(8000),(function (reply){
if(cljs.core.truth_(taoensso.sente.cb_success_QMARK_.call(null,reply))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-loading","set-loading",984627975),false], null));
} else {
return null;
}
}));
})], null)], null);
});
lvlup.crusader.dungeon.pay_with_season_pass = (function lvlup$crusader$dungeon$pay_with_season_pass(player_number,item,name,loading){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button-small.uk-button.uk-button-primary.uk-width-1-3","button.uk-button-small.uk-button.uk-button-primary.uk-width-1-3",2054586188),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-uk-icon","data-uk-icon",1809176669),"icon: credit-card",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),loading,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
lvlup.crusader.dungeon.notification.call(null,[cljs.core.str(name),cljs.core.str(" fizetett b\u00E9rlettel!")].join(''));

lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(item),player_number))], null));

return lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","season-pass","dungeon/season-pass",-766369009),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"quantity","quantity",-1929050694),((-1) * lvlup.crusader.dungeon.count_time_halves.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(item),player_number))),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))),new cljs.core.Keyword(null,"member-id","member-id",606659713),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(item),player_number))], null)], null));
})], null)], null);
});
lvlup.crusader.dungeon.modify_time = (function lvlup$crusader$dungeon$modify_time(player_number,item,elojel,the_atom,name){
return (function (player_number__$1,item__$1,elojel__$1,the_atom__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button-small.uk-button.uk-button-danger.uk-width-1-2","button.uk-button-small.uk-button.uk-button-danger.uk-width-1-2",737076362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),((cljs.core._EQ_.call(null,null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(item__$1),player_number__$1))))?true:false),new cljs.core.Keyword(null,"data-uk-icon","data-uk-icon",1809176669),[cljs.core.str("icon: "),cljs.core.str(((cljs.core._EQ_.call(null,elojel__$1,"-"))?"history":"future"))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
lvlup.crusader.dungeon.notification.call(null,((cljs.core._EQ_.call(null,"+",elojel__$1))?[cljs.core.str(name),cljs.core.str(" + 5 perc")].join(''):[cljs.core.str(name),cljs.core.str(" - 5 perc")].join('')));

lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc_in.call(null,item__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),player_number__$1,new cljs.core.Keyword(null,"start","start",-355208981)], null),((cljs.core._EQ_.call(null,"+",elojel__$1))?lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,[cljs.core.str(cljs_time.core.minus.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(item__$1),player_number__$1))),cljs_time.core.minutes.call(null,(5))))].join('')):lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,[cljs.core.str(cljs_time.core.plus.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(item__$1),player_number__$1))),cljs_time.core.minutes.call(null,(5))))].join(''))))], null));

return cljs.core.reset_BANG_.call(null,the_atom__$1,lvlup.crusader.dungeon.calculate_time_interval.call(null,((cljs.core._EQ_.call(null,"+",elojel__$1))?cljs_time.core.minus.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(item__$1),player_number__$1))),cljs_time.core.minutes.call(null,(5))):cljs_time.core.plus.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(item__$1),player_number__$1))),cljs_time.core.minutes.call(null,(5)))),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1)))));
})], null)], null);
});
});
lvlup.crusader.dungeon.cancel = (function lvlup$crusader$dungeon$cancel(player_number,item,name){
return (function (player_number__$1,item__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button-small.uk-button.uk-button-primary.uk-width-1-3","button.uk-button-small.uk-button.uk-button-primary.uk-width-1-3",2054586188),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uk-icon","data-uk-icon",1809176669),"icon: close",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
lvlup.crusader.dungeon.notification.call(null,[cljs.core.str(name),cljs.core.str(" m\u00E9gs\u00E9zve!")].join(''));

return lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,item__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(item__$1),player_number__$1))], null));
})], null)], null);
});
});
lvlup.crusader.dungeon.start_button = (function lvlup$crusader$dungeon$start_button(player_number,item,the_atom,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button.uk-button-primary.uk-width-1-1.uk-margin-small-top","button.uk-button.uk-button.uk-button-primary.uk-width-1-1.uk-margin-small-top",-744189598),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uk-icon","data-uk-icon",1809176669),"icon: play",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
lvlup.crusader.dungeon.notification.call(null,[cljs.core.str(name),cljs.core.str(" ideje elind\u00EDtva!")].join(''));

cljs.core.reset_BANG_.call(null,the_atom,(0));

return lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.assoc_in.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [player_number,new cljs.core.Keyword(null,"start","start",-355208981)], null),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,[cljs.core.str(cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))].join(''))))], null));
})], null)], null);
});
lvlup.crusader.dungeon.player_playing = (function lvlup$crusader$dungeon$player_playing(system,p__56301){
var vec__56309 = p__56301;
var player_number = cljs.core.nth.call(null,vec__56309,(0),null);
var data = cljs.core.nth.call(null,vec__56309,(1),null);
var active_member = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"active-member"], null));
var loading = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"loading"], null));
var time_elapsed = reagent.core.atom.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(data))?lvlup.crusader.dungeon.calculate_time_interval.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(data)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1)))):null));
var valami = reagent.core.atom.call(null,setInterval(((function (active_member,loading,time_elapsed,vec__56309,player_number,data){
return (function (){
return cljs.core.reset_BANG_.call(null,time_elapsed,(cljs.core.deref.call(null,time_elapsed) + (1)));
});})(active_member,loading,time_elapsed,vec__56309,player_number,data))
,(1000)));
var players = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"players"], null));
var this_player = ((function (active_member,loading,time_elapsed,valami,players,vec__56309,player_number,data){
return (function (){
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (active_member,loading,time_elapsed,valami,players,vec__56309,player_number,data){
return (function (p1__56300_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56300_SHARP_),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(data));
});})(active_member,loading,time_elapsed,valami,players,vec__56309,player_number,data))
,cljs.core.deref.call(null,players)));
});})(active_member,loading,time_elapsed,valami,players,vec__56309,player_number,data))
;
return ((function (active_member,loading,time_elapsed,valami,players,this_player,vec__56309,player_number,data){
return (function (system__$1,p__56312){
var vec__56313 = p__56312;
var player_number__$1 = cljs.core.nth.call(null,vec__56313,(0),null);
var data__$1 = cljs.core.nth.call(null,vec__56313,(1),null);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-remove.uk-animation-fade","div.uk-padding-remove.uk-animation-fade",1654815180),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1px solid white"], null),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(data__$1),cljs.core.deref.call(null,active_member)))?"uk-card-primary":"uk-card-secondary")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-small.uk-padding-remove-bottom","div.uk-padding-small.uk-padding-remove-bottom",-1972330897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(this_player.call(null))),cljs.core.str(" - "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this_player.call(null)))].join('')], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(data__$1))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-text-center","div.uk-text-center",-1334382774),[cljs.core.str(lvlup.crusader.dungeon.convert_time.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(data__$1)))),cljs.core.str(" - "),cljs.core.str(lvlup.crusader.dungeon.minute_to_money.call(null,cljs.core.deref.call(null,time_elapsed),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data__$1))),cljs.core.str(" Ft")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.uk-text-center.uk-padding-remove.uk-margin-remove","h3.uk-text-center.uk-padding-remove.uk-margin-remove",-1159920840),lvlup.crusader.dungeon.elapsing_time.call(null,cljs.core.deref.call(null,time_elapsed))], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.start_button,player_number__$1,system__$1,time_elapsed,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this_player.call(null))], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.modify_time,player_number__$1,system__$1,"-",time_elapsed,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this_player.call(null))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.modify_time,player_number__$1,system__$1,"+",time_elapsed,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this_player.call(null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.cancel,player_number__$1,system__$1,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this_player.call(null))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.pay_with_season_pass,player_number__$1,system__$1,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this_player.call(null)),cljs.core.deref.call(null,loading)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.pay,player_number__$1,system__$1,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this_player.call(null)),cljs.core.deref.call(null,loading)], null)], null);
});
;})(active_member,loading,time_elapsed,valami,players,this_player,vec__56309,player_number,data))
});
lvlup.crusader.dungeon.system = (function lvlup$crusader$dungeon$system(item){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (item__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.uk-width-1-5.valami.dropzone.dropzone2","li.uk-width-1-5.valami.dropzone.dropzone2",-1746359548),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(item__$1),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),0.91], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card.uk-card-secondary","div.uk-card.uk-card-secondary",725560384),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"5px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card-header.uk-padding-small","div.uk-card-header.uk-padding-small",-1952210389),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-grid-small.uk-flex-middle","div.uk-grid-small.uk-flex-middle",-831865867),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-auto","div.uk-width-auto",-1506646300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),(function (){var G__56319 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item__$1);
switch (G__56319) {
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
})(),new cljs.core.Keyword(null,"height","height",1025178622),"40",new cljs.core.Keyword(null,"width","width",-384071477),"40"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-expand","div.uk-width-expand",2031751938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.uk-card-title.uk-margin-remove-bottom.uk-text-truncate","h3.uk-card-title.uk-margin-remove-bottom.uk-text-truncate",-1609379787),[cljs.core.str(new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(item__$1)),cljs.core.str(" - "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item__$1))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.uk-text-meta.uk-margin-remove-top","p.uk-text-meta.uk-margin-remove-top",-506306409),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(item__$1)], null)], null)], null)], null),((cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(item__$1))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.uk-heading.uk-text-center","h3.uk-heading.uk-text-center",391565416),"Foglal\u00E1sok m\u00E1ra... Soon"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.masvalami.draggable","div.masvalami.draggable",829437924),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(item__$1),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"move"], null)], null),cljs.core.map_indexed.call(null,(function (p1__56317_SHARP_,p2__56316_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.player_playing,item__$1,p2__56316_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first.call(null,p2__56316_SHARP_)], null));
}),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(item__$1))], null))], null)], null);
})], null));
});
lvlup.crusader.dungeon.get_member_systems = (function lvlup$crusader$dungeon$get_member_systems(player){
var systems = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"system-map"], null));
return cljs.core.filter.call(null,((function (systems){
return (function (p1__56321_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(p1__56321_SHARP_));
});})(systems))
,cljs.core.deref.call(null,systems));
});
lvlup.crusader.dungeon.plays_QMARK_ = (function lvlup$crusader$dungeon$plays_QMARK_(id){
var systems = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"system-map"], null));
if(cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,cljs.core.filter.call(null,((function (systems){
return (function (b){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(b),id);
});})(systems))
,cljs.core.map.call(null,((function (systems){
return (function (a){
return cljs.core.second.call(null,cljs.core.first.call(null,a));
});})(systems))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.filter.call(null,((function (systems){
return (function (p1__56322_SHARP_){
return (cljs.core.not_EQ_.call(null,null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__56322_SHARP_))) && (cljs.core.not_EQ_.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__56322_SHARP_)));
});})(systems))
,cljs.core.deref.call(null,systems)))))))){
return true;
} else {
return false;
}
});
lvlup.crusader.dungeon.player = (function lvlup$crusader$dungeon$player(data,index,which_tab){
var invoices = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"invoices"], null));
var pool = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"waiting-pool"], null));
var sidenav_state = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"sidenav-state"], null));
var active_member = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"active-member"], null));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (invoices,pool,sidenav_state,active_member){
return (function (data__$1,index__$1,which_tab__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-small.uk-padding-remove-vertical.uk-margin-small.uk-animation-fade","div.uk-padding-small.uk-padding-remove-vertical.uk-margin-small.uk-animation-fade",354159052),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.valami.uk-padding-remove.draggable.uk-card.uk-card-default.uk-margin-remove.uk-grid-collapse.uk-margin","div.valami.uk-padding-remove.draggable.uk-card.uk-card-default.uk-margin-remove.uk-grid-collapse.uk-margin",766586883),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"5px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (invoices,pool,sidenav_state,active_member){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-member","set-active-member",-1587885058),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data__$1)], null));
});})(invoices,pool,sidenav_state,active_member))
,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data__$1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-1-3","div.uk-width-1-3",-68418982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-inline","div.uk-inline",-2089757713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.uk-border-circle","img.uk-border-circle",1982878954),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/img/logos/unnamed.png"], null)], null),((cljs.core.not.call(null,cljs.core.some.call(null,((function (invoices,pool,sidenav_state,active_member){
return (function (p1__56323_SHARP_){
return cljs.core._EQ_.call(null,p1__56323_SHARP_,data__$1);
});})(invoices,pool,sidenav_state,active_member))
,cljs.core.deref.call(null,pool))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-position-bottom-right","div.uk-position-bottom-right",-1068712487),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-padding-remove.to-the-waiting-pool","button.uk-button.uk-padding-remove.to-the-waiting-pool",210619391),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (invoices,pool,sidenav_state,active_member){
return (function (){
return lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","add-to-waiting-pool","dungeon/add-to-waiting-pool",1741760159),data__$1], null));
});})(invoices,pool,sidenav_state,active_member))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.uk-border-circle","img.uk-border-circle",1982878954),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"30",new cljs.core.Keyword(null,"width","width",-384071477),"30",new cljs.core.Keyword(null,"src","src",-1651076051),"/Icons/time-left.svg"], null)], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-position-bottom-right","div.uk-position-bottom-right",-1068712487),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-padding-remove.to-the-waiting-pool","button.uk-button.uk-padding-remove.to-the-waiting-pool",210619391),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (invoices,pool,sidenav_state,active_member){
return (function (){
return lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","remove-from-waiting-pool","dungeon/remove-from-waiting-pool",-1590819980),data__$1], null));
});})(invoices,pool,sidenav_state,active_member))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.uk-border-circle","img.uk-border-circle",1982878954),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"30",new cljs.core.Keyword(null,"width","width",-384071477),"30",new cljs.core.Keyword(null,"src","src",-1651076051),"/Icons/remove.svg"], null)], null)], null)], null))], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card-body.uk-padding-small.uk-margin-remove.uk-width-2-3.uk-dark","div.uk-card-body.uk-padding-small.uk-margin-remove.uk-width-2-3.uk-dark",432627079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data__$1),cljs.core.deref.call(null,active_member)))?"uk-card-primary":"uk-card-default")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.4em",new cljs.core.Keyword(null,"padding","padding",1660304693),"3px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.name-animated","div.name-animated",807272306),[cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data__$1)),cljs.core.str(".-"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(data__$1))].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str("B\u00E9rlet: "),cljs.core.str(new cljs.core.Keyword(null,"season-pass","season-pass",1518775969).cljs$core$IFn$_invoke$arity$1(data__$1))].join('')," \u00F3ra"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str("XP: "),cljs.core.str(new cljs.core.Keyword(null,"total-hours","total-hours",-509359517).cljs$core$IFn$_invoke$arity$1(data__$1))].join('')], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data__$1),cljs.core.deref.call(null,active_member)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str("\u00D6sszesen: "),cljs.core.str(lvlup.crusader.dungeon.all_items_to_money.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data__$1))),cljs.core.str(" Ft")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str("J\u00E1tszott \u00F3r\u00E1k: "),cljs.core.str(lvlup.crusader.dungeon.all_items_to_hours.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data__$1))),cljs.core.str(" \u00F3ra")].join('')], null)], null):null)], null)], null)], null);
});})(invoices,pool,sidenav_state,active_member))
], null));
});
lvlup.crusader.dungeon.waiting_pool = (function lvlup$crusader$dungeon$waiting_pool(){
var pool = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"waiting-pool"], null));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (pool){
return (function (){
return lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-waiting-pool","dungeon/get-waiting-pool",1082975135)], null));
});})(pool))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (pool){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map_indexed.call(null,((function (pool){
return (function (p1__56325_SHARP_,p2__56324_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.player,p2__56324_SHARP_,p1__56325_SHARP_,(4)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__56324_SHARP_)], null));
});})(pool))
,cljs.core.deref.call(null,pool))], null);
});})(pool))
], null));
});
lvlup.crusader.dungeon.paying_gamers = (function lvlup$crusader$dungeon$paying_gamers(){
var players = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"players"], null));
var systems = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"system-map"], null));
var invoices = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"invoices"], null));
var get_member_data = ((function (players,systems,invoices){
return (function (){
return cljs.core.vec.call(null,cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"member-id","member-id",606659713),cljs.core.deref.call(null,invoices))));
});})(players,systems,invoices))
;
var the_players_playing = ((function (players,systems,invoices,get_member_data){
return (function (){
return cljs.core.doall.call(null,cljs.core.filter.call(null,((function (players,systems,invoices,get_member_data){
return (function (p1__56326_SHARP_){
return cljs.core.some.call(null,((function (players,systems,invoices,get_member_data){
return (function (a){
return cljs.core._EQ_.call(null,a,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56326_SHARP_));
});})(players,systems,invoices,get_member_data))
,cljs.core.vec.call(null,cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"member-id","member-id",606659713),cljs.core.deref.call(null,invoices)))));
});})(players,systems,invoices,get_member_data))
,cljs.core.deref.call(null,players)));
});})(players,systems,invoices,get_member_data))
;
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (players,systems,invoices,get_member_data,the_players_playing){
return (function (){
return lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-members-with-id","dungeon/get-members-with-id",-1097562328),get_member_data.call(null)], null));
});})(players,systems,invoices,get_member_data,the_players_playing))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (players,systems,invoices,get_member_data,the_players_playing){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map_indexed.call(null,((function (players,systems,invoices,get_member_data,the_players_playing){
return (function (p1__56328_SHARP_,p2__56327_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.player,p2__56327_SHARP_,p1__56328_SHARP_,(3)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__56327_SHARP_)], null));
});})(players,systems,invoices,get_member_data,the_players_playing))
,the_players_playing.call(null))], null);
});})(players,systems,invoices,get_member_data,the_players_playing))
], null));
});
lvlup.crusader.dungeon.gaming_gamers = (function lvlup$crusader$dungeon$gaming_gamers(){
var players = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"players"], null));
var systems = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"system-map"], null));
var get_players_playing = ((function (players,systems){
return (function (){
return cljs.core.vec.call(null,cljs.core.set.call(null,cljs.core.remove.call(null,((function (players,systems){
return (function (a){
return cljs.core._EQ_.call(null,a,null);
});})(players,systems))
,cljs.core.flatten.call(null,cljs.core.map.call(null,((function (players,systems){
return (function (a){
return cljs.core.conj.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.get_in.call(null,a,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"one","one",935007904),new cljs.core.Keyword(null,"member-id","member-id",606659713)], null)),cljs.core.get_in.call(null,a,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"two","two",627606869),new cljs.core.Keyword(null,"member-id","member-id",606659713)], null)),cljs.core.get_in.call(null,a,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"three","three",-1651831795),new cljs.core.Keyword(null,"member-id","member-id",606659713)], null)),cljs.core.get_in.call(null,a,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"four","four",1338555054),new cljs.core.Keyword(null,"member-id","member-id",606659713)], null)));
});})(players,systems))
,cljs.core.deref.call(null,systems))))));
});})(players,systems))
;
var the_players_playing = ((function (players,systems,get_players_playing){
return (function (){
return cljs.core.doall.call(null,cljs.core.filter.call(null,((function (players,systems,get_players_playing){
return (function (p1__56329_SHARP_){
return cljs.core.some.call(null,((function (players,systems,get_players_playing){
return (function (a){
return cljs.core._EQ_.call(null,a,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56329_SHARP_));
});})(players,systems,get_players_playing))
,get_players_playing.call(null));
});})(players,systems,get_players_playing))
,cljs.core.deref.call(null,players)));
});})(players,systems,get_players_playing))
;
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (players,systems,get_players_playing,the_players_playing){
return (function (){
return lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-members-with-id","dungeon/get-members-with-id",-1097562328),get_players_playing.call(null)], null));
});})(players,systems,get_players_playing,the_players_playing))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (players,systems,get_players_playing,the_players_playing){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map_indexed.call(null,((function (players,systems,get_players_playing,the_players_playing){
return (function (p1__56331_SHARP_,p2__56330_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.player,p2__56330_SHARP_,p1__56331_SHARP_,(2)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__56330_SHARP_)], null));
});})(players,systems,get_players_playing,the_players_playing))
,the_players_playing.call(null))], null);
});})(players,systems,get_players_playing,the_players_playing))
], null));
});
lvlup.crusader.dungeon.gamers = (function lvlup$crusader$dungeon$gamers(){
var players = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"players"], null));
var systems = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"system-map"], null));
var search = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"search-member"], null));
var switched_member = reagent.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (players,systems,search,switched_member){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map_indexed.call(null,((function (players,systems,search,switched_member){
return (function (p1__56333_SHARP_,p2__56332_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.player,p2__56332_SHARP_,p1__56333_SHARP_,(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__56332_SHARP_)], null));
});})(players,systems,search,switched_member))
,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),((function (players,systems,search,switched_member){
return (function (p1__56334_SHARP_,p2__56335_SHARP_){
return (p1__56334_SHARP_ > p2__56335_SHARP_);
});})(players,systems,search,switched_member))
,lvlup.crusader.dungeon.filter_by_name_and_id.call(null,cljs.core.deref.call(null,players),search,true)))], null);
});})(players,systems,search,switched_member))
], null));
});
lvlup.crusader.dungeon.system_row = (function lvlup$crusader$dungeon$system_row(){
var systems = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"system-map"], null));
var players = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"players"], null));
var get_players_playing = ((function (systems,players){
return (function (){
return cljs.core.vec.call(null,cljs.core.set.call(null,cljs.core.remove.call(null,((function (systems,players){
return (function (a){
return cljs.core._EQ_.call(null,a,null);
});})(systems,players))
,cljs.core.flatten.call(null,cljs.core.map.call(null,((function (systems,players){
return (function (a){
return cljs.core.conj.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.get_in.call(null,a,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"one","one",935007904),new cljs.core.Keyword(null,"member-id","member-id",606659713)], null)),cljs.core.get_in.call(null,a,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"two","two",627606869),new cljs.core.Keyword(null,"member-id","member-id",606659713)], null)),cljs.core.get_in.call(null,a,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"three","three",-1651831795),new cljs.core.Keyword(null,"member-id","member-id",606659713)], null)),cljs.core.get_in.call(null,a,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"four","four",1338555054),new cljs.core.Keyword(null,"member-id","member-id",606659713)], null)));
});})(systems,players))
,cljs.core.deref.call(null,systems))))));
});})(systems,players))
;
var the_players_playing = ((function (systems,players,get_players_playing){
return (function (){
return cljs.core.doall.call(null,cljs.core.filter.call(null,((function (systems,players,get_players_playing){
return (function (p1__56336_SHARP_){
return cljs.core.some.call(null,((function (systems,players,get_players_playing){
return (function (a){
return cljs.core._EQ_.call(null,a,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56336_SHARP_));
});})(systems,players,get_players_playing))
,get_players_playing.call(null));
});})(systems,players,get_players_playing))
,cljs.core.deref.call(null,players)));
});})(systems,players,get_players_playing))
;
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (systems,players,get_players_playing,the_players_playing){
return (function (){
return lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-members-with-id","dungeon/get-members-with-id",-1097562328),get_players_playing.call(null)], null));
});})(systems,players,get_players_playing,the_players_playing))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (systems,players,get_players_playing,the_players_playing){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-1-1","div.uk-width-1-1",-1131177597),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-grid-match.uk-grid-small.uk-animation-slide-right","div.uk-grid-match.uk-grid-small.uk-animation-slide-right",129594924),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),cljs.core.map_indexed.call(null,((function (systems,players,get_players_playing,the_players_playing){
return (function (p1__56338_SHARP_,p2__56337_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.system,p2__56337_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p2__56337_SHARP_)], null));
});})(systems,players,get_players_playing,the_players_playing))
,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"number","number",1570378438),cljs.core.deref.call(null,systems)))], null)], null);
});})(systems,players,get_players_playing,the_players_playing))
], null));
});
lvlup.crusader.dungeon.places_on_console = (function lvlup$crusader$dungeon$places_on_console(players){
if(cljs.core._EQ_.call(null,null,new cljs.core.Keyword(null,"one","one",935007904).cljs$core$IFn$_invoke$arity$1(players))){
return new cljs.core.Keyword(null,"one","one",935007904);
} else {
if(cljs.core._EQ_.call(null,null,new cljs.core.Keyword(null,"two","two",627606869).cljs$core$IFn$_invoke$arity$1(players))){
return new cljs.core.Keyword(null,"two","two",627606869);
} else {
if(cljs.core._EQ_.call(null,null,new cljs.core.Keyword(null,"three","three",-1651831795).cljs$core$IFn$_invoke$arity$1(players))){
return new cljs.core.Keyword(null,"three","three",-1651831795);
} else {
if(cljs.core._EQ_.call(null,null,new cljs.core.Keyword(null,"four","four",1338555054).cljs$core$IFn$_invoke$arity$1(players))){
return new cljs.core.Keyword(null,"four","four",1338555054);
} else {
return null;
}
}
}
}
});
lvlup.crusader.dungeon.change = (function lvlup$crusader$dungeon$change(e){
var systems = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"system-map"], null));
var system_name = parseInt(e.target.id);
var member_id = e.relatedTarget.id;
var vec__56344 = cljs.core.filter.call(null,((function (systems,system_name,member_id){
return (function (p1__56339_SHARP_){
return cljs.core._EQ_.call(null,system_name,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__56339_SHARP_));
});})(systems,system_name,member_id))
,cljs.core.deref.call(null,systems));
var filtered_system = cljs.core.nth.call(null,vec__56344,(0),null);
lvlup.crusader.dungeon.notification.call(null,[cljs.core.str(member_id),cljs.core.str(". -> "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(filtered_system))].join(''));

var G__56347 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system);
switch (G__56347) {
case "pc":
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system),"pc")) && (cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system))))){
return lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"one","one",935007904),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system),new cljs.core.Keyword(null,"member-id","member-id",606659713),parseInt(member_id)], null)], null))], null));
} else {
return lvlup.crusader.dungeon.notification.call(null,"T\u00F6bb j\u00E1t\u00E9kos nem f\u00E9r el!");
}

break;
default:
if(cljs.core._EQ_.call(null,(4),cljs.core.count.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system)))){
return lvlup.crusader.dungeon.notification.call(null,"T\u00F6bb j\u00E1t\u00E9kos nem f\u00E9r el!");
} else {
return lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system),lvlup.crusader.dungeon.places_on_console.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system),new cljs.core.Keyword(null,"member-id","member-id",606659713),parseInt(member_id)], null)))], null));
}

}
});
lvlup.crusader.dungeon.transfer = (function lvlup$crusader$dungeon$transfer(e){
var systems = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"system-map"], null));
var system_name = parseInt(e.relatedTarget.id);
var other_system = parseInt(e.target.id);
var vec__56357 = cljs.core.filter.call(null,((function (systems,system_name,other_system){
return (function (p1__56349_SHARP_){
return cljs.core._EQ_.call(null,system_name,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__56349_SHARP_));
});})(systems,system_name,other_system))
,cljs.core.deref.call(null,systems));
var filtered_system = cljs.core.nth.call(null,vec__56357,(0),null);
var vec__56360 = cljs.core.filter.call(null,((function (systems,system_name,other_system,vec__56357,filtered_system){
return (function (p1__56350_SHARP_){
return cljs.core._EQ_.call(null,other_system,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__56350_SHARP_));
});})(systems,system_name,other_system,vec__56357,filtered_system))
,cljs.core.deref.call(null,systems));
var filtered_system2 = cljs.core.nth.call(null,vec__56360,(0),null);
lvlup.crusader.dungeon.notification.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(filtered_system)),cljs.core.str(" <-> "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(filtered_system2))].join(''));

if(((cljs.core._EQ_.call(null,"pc",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system))) && (cljs.core._EQ_.call(null,"pc",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system2)))) || ((cljs.core._EQ_.call(null,"xbox",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system))) && (cljs.core._EQ_.call(null,"xbox",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system2)))) || ((cljs.core._EQ_.call(null,"ps",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system))) && (cljs.core._EQ_.call(null,"ps",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system2)))) || ((cljs.core._EQ_.call(null,"xbox",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system))) && (cljs.core._EQ_.call(null,"ps",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system2)))) || ((cljs.core._EQ_.call(null,"ps",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system))) && (cljs.core._EQ_.call(null,"xbox",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system2))))){
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system2))], null));

return lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system2,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system))], null));
} else {
return lvlup.crusader.dungeon.notification.call(null,"Csak k\u00E9t azonos t\u00EDpus\u00FA rendszert tudsz cser\u00E9lni!");
}
});
lvlup.crusader.dungeon.one_item = (function lvlup$crusader$dungeon$one_item(item,member){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),(30),new cljs.core.Keyword(null,"width","width",-384071477),(30),new cljs.core.Keyword(null,"src","src",-1651076051),(function (){var G__56364 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item);
switch (G__56364) {
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
})()], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str(new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str(" Ft")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),[cljs.core.str(lvlup.crusader.dungeon.convert_time.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(item)))),cljs.core.str(" - "),cljs.core.str(lvlup.crusader.dungeon.convert_time.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"finish","finish",-586688046).cljs$core$IFn$_invoke$arity$1(item))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str(lvlup.crusader.dungeon.elapsing_time_no_seconds.call(null,cljs_time.core.in_seconds.call(null,cljs_time.core.interval.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(item)),cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"finish","finish",-586688046).cljs$core$IFn$_invoke$arity$1(item))))))].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.invoice-icon","span.invoice-icon",830138754),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uk-icon","data-uk-icon",1809176669),"icon: credit-card; ratio: 1.7",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
lvlup.crusader.dungeon.notification.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member)),cljs.core.str(" b\u00E9rlettel fizetett!")].join(''));

lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","modify-invoice","dungeon/modify-invoice",-2087311547),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(item)], null)], null));

return lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","season-pass","dungeon/season-pass",-766369009),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"quantity","quantity",-1929050694),((-1) * lvlup.crusader.dungeon.count_time_halves.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(item)),cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"finish","finish",-586688046).cljs$core$IFn$_invoke$arity$1(item)))),new cljs.core.Keyword(null,"member-id","member-id",606659713),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(item)], null)], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.invoice-icon","span.invoice-icon",830138754),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uk-icon","data-uk-icon",1809176669),"icon: check; ratio: 1.7",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
lvlup.crusader.dungeon.notification.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member)),cljs.core.str(" k\u00E9szp\u00E9nzzel fizetett!")].join(''));

return lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","modify-invoice","dungeon/modify-invoice",-2087311547),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(item)], null)], null));
})], null)], null)], null)], null);
});
lvlup.crusader.dungeon.invoice = (function lvlup$crusader$dungeon$invoice(item){
var members = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"players"], null));
var systems = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"system-map"], null));
var member = ((function (members,systems){
return (function (){
return cljs.core.first.call(null,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (members,systems){
return (function (p1__56366_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56366_SHARP_),cljs.core.first.call(null,item));
});})(members,systems))
,cljs.core.deref.call(null,members))));
});})(members,systems))
;
return ((function (members,systems,member){
return (function (item__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"uk-width-1-2@s uk-width-1-2@m uk-width-1-3@l"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card.uk-card-secondary.uk-padding-remove.uk-dark","div.uk-card.uk-card-secondary.uk-padding-remove.uk-dark",-928433420),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opacity","opacity",397153780),0.87,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"10px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-small","div.uk-padding-small",1857323497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-float-right","div.uk-float-right",446370919),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.uk-margin-remove.uk-padding-remove.uk-text-right","h3.uk-margin-remove.uk-padding-remove.uk-text-right",-403492373),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),[cljs.core.str(cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"price","price",22129180),cljs.core.second.call(null,item__$1)))),cljs.core.str(" Ft ")].join('')], null),(cljs.core.truth_(lvlup.crusader.dungeon.plays_QMARK_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(member.call(null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.uk-padding-remove.uk-margin-remove.uk-float-right","h5.uk-padding-remove.uk-margin-remove.uk-float-right",-1121405685),"NEM J\u00C1TSZIK"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.uk-margin-remove.uk-padding-remove.uk-float-right","h5.uk-margin-remove.uk-padding-remove.uk-float-right",-739768631),"J\u00C1TSZIK M\u00C9G"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.uk-margin-remove.uk-text-truncate","h4.uk-margin-remove.uk-text-truncate",-813948027),[cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(member.call(null))),cljs.core.str(".- "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member.call(null)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.uk-margin-remove","h5.uk-margin-remove",1940144770),[cljs.core.str("B\u00E9rlet \u00F3r\u00E1k: "),cljs.core.str(new cljs.core.Keyword(null,"season-pass","season-pass",1518775969).cljs$core$IFn$_invoke$arity$1(member.call(null)))].join('')], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-divider-icon.uk-margin-small.uk-margin-remove-top","div.uk-divider-icon.uk-margin-small.uk-margin-remove-top",-1810725832)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-overflow-auto.uk-width-1-1","div.uk-overflow-auto.uk-width-1-1",-467337532),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"180px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.uk-width-1-1.uk-table-striped.uk-table.uk-table-middle","table.uk-width-1-1.uk-table-striped.uk-table.uk-table-middle",293470447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (members,systems,member){
return (function (p1__56368_SHARP_,p2__56367_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.one_item,p2__56367_SHARP_,member.call(null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p2__56367_SHARP_], null));
});})(members,systems,member))
,cljs.core.second.call(null,item__$1)))], null)], null)], null)], null)], null);
});
;})(members,systems,member))
});
lvlup.crusader.dungeon.checkout = (function lvlup$crusader$dungeon$checkout(){
var invoices = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"invoices"], null));
var members = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"players"], null));
var get_member_data = ((function (invoices,members){
return (function (){
return cljs.core.vec.call(null,cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"member-id","member-id",606659713),cljs.core.deref.call(null,invoices))));
});})(invoices,members))
;
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (invoices,members,get_member_data){
return (function (){
return lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-members-with-id","dungeon/get-members-with-id",-1097562328),get_member_data.call(null)], null));
});})(invoices,members,get_member_data))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (invoices,members,get_member_data){
return (function (){
return lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-members-with-id","dungeon/get-members-with-id",-1097562328),get_member_data.call(null)], null));
});})(invoices,members,get_member_data))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (invoices,members,get_member_data){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-remove.uk-margin-remove.uk-grid.uk-child-width-1-1","div.uk-padding-remove.uk-margin-remove.uk-grid.uk-child-width-1-1",974873195),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,invoices),cljs.core.PersistentVector.EMPTY))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-inline","div.uk-inline",-2089757713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/img/pipboy-gangster.png"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.uk-overlay.uk-overlay-primary.uk-position-top-left","h1.uk-overlay.uk-overlay-primary.uk-position-top-left",-1152169278),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"20px"], null)], null),"Senkinek sincs fizetetlen sz\u00E1ml\u00E1ja! :)"], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-grid.uk-grid-small.uk-margin-top","div.uk-grid.uk-grid-small.uk-margin-top",2098034051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),cljs.core.map_indexed.call(null,((function (invoices,members,get_member_data){
return (function (p1__56370_SHARP_,p2__56369_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.invoice,p2__56369_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p2__56369_SHARP_], null));
});})(invoices,members,get_member_data))
,cljs.core.sort_by.call(null,cljs.core.first,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"member-id","member-id",606659713),cljs.core.deref.call(null,invoices))))], null))], null);
});})(invoices,members,get_member_data))
], null));
});
lvlup.crusader.dungeon.modify_member = (function lvlup$crusader$dungeon$modify_member(member,index){
var modify_atom = reagent.core.atom.call(null,member);
var scrollspy = reagent.core.atom.call(null,null);
reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (modify_atom,scrollspy){
return (function (){
cljs.core.reset_BANG_.call(null,scrollspy,UIkit.scrollspy([cljs.core.str("#user-"),cljs.core.str(index)].join(''),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cls","cls",-1270350575),null,new cljs.core.Keyword(null,"hidden","hidden",-312506092),false], null))));

if(cljs.core._EQ_.call(null,(0),cljs.core.mod.call(null,((10) + index),(20)))){
return jayq.core.$.call(null,document).on("inview",[cljs.core.str("#user-"),cljs.core.str(index)].join(''),((function (modify_atom,scrollspy){
return (function (a){
return lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-members","dungeon/get-members",188408482),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number","number",1570378438),((10) + index),new cljs.core.Keyword(null,"search","search",1564939822),""], null)], null));
});})(modify_atom,scrollspy))
);
} else {
return null;
}
});})(modify_atom,scrollspy))
], null));


return ((function (modify_atom,scrollspy){
return (function (member__$1,index__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-1-2","div.uk-width-1-2",-985513944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str("user-"),cljs.core.str(index__$1)].join('')], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card.uk-card-secondary","div.uk-card.uk-card-secondary",725560384),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),0.85], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-1-1.uk-padding-remove.uk-inline","div.uk-width-1-1.uk-padding-remove.uk-inline",-964084036),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.uk-heading-bullet.uk-width-1-1.uk-padding-remove","h1.uk-heading-bullet.uk-width-1-1.uk-padding-remove",1256829395),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white !important"], null)], null),[cljs.core.str("Id: "),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(member__$1)),cljs.core.str("  - B\u00E9rlet: "),cljs.core.str(new cljs.core.Keyword(null,"season-pass","season-pass",1518775969).cljs$core$IFn$_invoke$arity$1(member__$1))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-position-top-right","div.uk-position-top-right",1203574573),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"data-uk-icon","data-uk-icon",1809176669),"icon: check; ratio: 2.5",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (modify_atom,scrollspy){
return (function (){
lvlup.crusader.dungeon.notification.call(null,"N\u00E9v friss\u00EDtve!");

return lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","update-member","dungeon/update-member",380816955),cljs.core.deref.call(null,modify_atom)], null));
});})(modify_atom,scrollspy))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"data-uk-icon","data-uk-icon",1809176669),"icon: close; ratio: 2.5",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (modify_atom,scrollspy){
return (function (){
lvlup.crusader.dungeon.notification.call(null,"Felhaszn\u00E1l\u00F3 t\u00F6r\u00F6lve!");

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-member","remove-member",1811515040),cljs.core.conj.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(member__$1)], null))], null));

return lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","remove-member","dungeon/remove-member",-481418406),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(member__$1)], null));
});})(modify_atom,scrollspy))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-default.uk-width-1-4.uk-margin-remove","button.uk-button.uk-button-default.uk-width-1-4.uk-margin-remove",-1385383208),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (modify_atom,scrollspy){
return (function (){
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","update-member","dungeon/update-member",380816955),cljs.core.assoc.call(null,cljs.core.deref.call(null,modify_atom),new cljs.core.Keyword(null,"season-pass","season-pass",1518775969),(new cljs.core.Keyword(null,"season-pass","season-pass",1518775969).cljs$core$IFn$_invoke$arity$1(member__$1) - (1)))], null));

return lvlup.crusader.dungeon.notification.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,modify_atom))),cljs.core.str(" - b\u00E9rlete 1-gyel cs\u00F6kkent")].join(''));
});})(modify_atom,scrollspy))
], null),"- 1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-default.uk-width-1-4.uk-margin-remove","button.uk-button.uk-button-default.uk-width-1-4.uk-margin-remove",-1385383208),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (modify_atom,scrollspy){
return (function (){
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","update-member","dungeon/update-member",380816955),cljs.core.assoc.call(null,cljs.core.deref.call(null,modify_atom),new cljs.core.Keyword(null,"season-pass","season-pass",1518775969),(new cljs.core.Keyword(null,"season-pass","season-pass",1518775969).cljs$core$IFn$_invoke$arity$1(member__$1) - 0.5))], null));

return lvlup.crusader.dungeon.notification.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,modify_atom))),cljs.core.str(" - b\u00E9rlete 0.5-gyel cs\u00F6kkent")].join(''));
});})(modify_atom,scrollspy))
], null),"- 0.5"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-default.uk-width-1-4.uk-margin-remove","button.uk-button.uk-button-default.uk-width-1-4.uk-margin-remove",-1385383208),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (modify_atom,scrollspy){
return (function (){
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","update-member","dungeon/update-member",380816955),cljs.core.assoc.call(null,cljs.core.deref.call(null,modify_atom),new cljs.core.Keyword(null,"season-pass","season-pass",1518775969),(0.5 + new cljs.core.Keyword(null,"season-pass","season-pass",1518775969).cljs$core$IFn$_invoke$arity$1(member__$1)))], null));

return lvlup.crusader.dungeon.notification.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,modify_atom))),cljs.core.str(" - b\u00E9rlete 0.5-gyel n\u0151tt")].join(''));
});})(modify_atom,scrollspy))
], null),"+ 0.5"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-default.uk-width-1-4.uk-margin-remove","button.uk-button.uk-button-default.uk-width-1-4.uk-margin-remove",-1385383208),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (modify_atom,scrollspy){
return (function (){
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","update-member","dungeon/update-member",380816955),cljs.core.assoc.call(null,cljs.core.deref.call(null,modify_atom),new cljs.core.Keyword(null,"season-pass","season-pass",1518775969),((1) + new cljs.core.Keyword(null,"season-pass","season-pass",1518775969).cljs$core$IFn$_invoke$arity$1(member__$1)))], null));

return lvlup.crusader.dungeon.notification.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,modify_atom)))),cljs.core.str(" - b\u00E9rlete 1-gyel n\u0151tt")].join(''));
});})(modify_atom,scrollspy))
], null),"+ 1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-1-1.uk-padding-remove.uk-margin-remove","div.uk-width-1-1.uk-padding-remove.uk-margin-remove",-786170666),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.uk-input.uk-text-center","input.uk-input.uk-text-center",1779317614),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (modify_atom,scrollspy){
return (function (p1__56371_SHARP_){
return cljs.core.swap_BANG_.call(null,modify_atom,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),p1__56371_SHARP_.target.value);
});})(modify_atom,scrollspy))
,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,modify_atom))], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-grid.uk-child-width-1-3.uk-margin-remove.uk-width-1-1.uk-padding-remove","div.uk-grid.uk-child-width-1-3.uk-margin-remove.uk-width-1-1.uk-padding-remove",-875820281),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-default","button.uk-button.uk-button-default",161862613),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (modify_atom,scrollspy){
return (function (){
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","update-member","dungeon/update-member",380816955),cljs.core.assoc.call(null,cljs.core.deref.call(null,modify_atom),new cljs.core.Keyword(null,"season-pass","season-pass",1518775969),((6) + new cljs.core.Keyword(null,"season-pass","season-pass",1518775969).cljs$core$IFn$_invoke$arity$1(member__$1)))], null));

return lvlup.crusader.dungeon.notification.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,modify_atom))),cljs.core.str(" kapott egy Beginner b\u00E9rletet!")].join(''));
});})(modify_atom,scrollspy))
], null),"+ Beginner"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-default","button.uk-button.uk-button-default",161862613),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (modify_atom,scrollspy){
return (function (){
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","update-member","dungeon/update-member",380816955),cljs.core.assoc.call(null,cljs.core.deref.call(null,modify_atom),new cljs.core.Keyword(null,"season-pass","season-pass",1518775969),((13) + new cljs.core.Keyword(null,"season-pass","season-pass",1518775969).cljs$core$IFn$_invoke$arity$1(member__$1)))], null));

return lvlup.crusader.dungeon.notification.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,modify_atom))),cljs.core.str(" kapott egy Medium b\u00E9rletet!")].join(''));
});})(modify_atom,scrollspy))
], null),"+ Medium"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-default","button.uk-button.uk-button-default",161862613),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (modify_atom,scrollspy){
return (function (){
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","update-member","dungeon/update-member",380816955),cljs.core.assoc.call(null,cljs.core.deref.call(null,modify_atom),new cljs.core.Keyword(null,"season-pass","season-pass",1518775969),((28) + new cljs.core.Keyword(null,"season-pass","season-pass",1518775969).cljs$core$IFn$_invoke$arity$1(member__$1)))], null));

return lvlup.crusader.dungeon.notification.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,modify_atom))),cljs.core.str(" kapott egy Hardcore b\u00E9rletet!")].join(''));
});})(modify_atom,scrollspy))
], null)], null),"+ Hardcore"], null)], null)], null);
});
;})(modify_atom,scrollspy))
});
lvlup.crusader.dungeon.registration_input = (function lvlup$crusader$dungeon$registration_input(members){
var max_id = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"max-id"], null));
var search = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"search-member"], null));
return ((function (max_id,search){
return (function (members__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-1-1.uk-sticky.uk-card.uk-grid.uk-grid-stack.uk-margin-remove","div.uk-width-1-1.uk-sticky.uk-card.uk-grid.uk-grid-stack.uk-margin-remove",-900224372),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),"true",new cljs.core.Keyword(null,"data-uk-sticky","data-uk-sticky",1691370808),"true"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#username.uk-input.uk-text-center.uk-padding-remove.uk-first-column","input#username.uk-input.uk-text-center.uk-padding-remove.uk-first-column",-904509676),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (max_id,search){
return (function (p1__56372_SHARP_){
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-members","dungeon/get-members",188408482),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number","number",1570378438),(0),new cljs.core.Keyword(null,"search","search",1564939822),p1__56372_SHARP_.target.value], null)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-search-member","set-search-member",-293591708),p1__56372_SHARP_.target.value], null));
});})(max_id,search))
,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Regisztr\u00E1ci\u00F3/Keres\u00E9s",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,search)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-primary.uk-align-center.uk-margin-remove.uk-padding-remove.uk-width-1-1.uk-grid-margin.uk-first-column","button.uk-button.uk-button-primary.uk-align-center.uk-margin-remove.uk-padding-remove.uk-width-1-1.uk-grid-margin.uk-first-column",-1299134742),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (max_id,search){
return (function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-max-id","set-max-id",1529872056),(cljs.core.deref.call(null,max_id) + (1))], null));

return lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","add-member","dungeon/add-member",87016383),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.deref.call(null,max_id),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.deref.call(null,search)], null)], null));
});})(max_id,search))
], null),[cljs.core.str(cljs.core.deref.call(null,max_id))].join(''),". gamer hozz\u00E1ad\u00E1sa!"], null)], null);
});
;})(max_id,search))
});
lvlup.crusader.dungeon.registration = (function lvlup$crusader$dungeon$registration(){
var members = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"players"], null));
var search = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"search-member"], null));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (members,search){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-container","div.uk-container",-1148299242),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.registration_input,members], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-grid.uk-margin-remove.uk-padding-small","div.uk-grid.uk-margin-remove.uk-padding-small",1683256741),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"member",new cljs.core.Keyword(null,"class","class",-2030961996),"uk-child-width-1-3@m member",new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),cljs.core.map_indexed.call(null,((function (members,search){
return (function (p1__56374_SHARP_,p2__56373_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.modify_member,p2__56373_SHARP_,p1__56374_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__56373_SHARP_)], null));
});})(members,search))
,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),((function (members,search){
return (function (p1__56375_SHARP_,p2__56376_SHARP_){
return (p1__56375_SHARP_ > p2__56376_SHARP_);
});})(members,search))
,lvlup.crusader.dungeon.filter_by_name_and_id.call(null,cljs.core.deref.call(null,members),search,true)))], null)], null);
});})(members,search))
], null));
});
lvlup.crusader.dungeon.show_20_more = (function lvlup$crusader$dungeon$show_20_more(number){
var search = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"search-member"], null));
return ((function (search){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-width-1-1.uk-button.uk-button-primary","button.uk-width-1-1.uk-button.uk-button-primary",1678260927),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (search){
return (function (){
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-members","dungeon/get-members",188408482),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number","number",1570378438),cljs.core.deref.call(null,number),new cljs.core.Keyword(null,"search","search",1564939822),cljs.core.deref.call(null,search)], null)], null));

return cljs.core.reset_BANG_.call(null,number,((20) + cljs.core.deref.call(null,number)));
});})(search))
], null),"Mutass t\u00F6bbet..."], null);
});
;})(search))
});
lvlup.crusader.dungeon.sidenav = (function lvlup$crusader$dungeon$sidenav(){
var sidenav_state = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"sidenav-state"], null));
var number = reagent.core.atom.call(null,(20));
var search = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"search-member"], null));
return ((function (sidenav_state,number,search){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#sidenav","div#sidenav",-372957880),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-offcanvas","data-uk-offcanvas",-993697617),"flip: true"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-offcanvas-bar.uk-padding-remove","div.uk-offcanvas-bar.uk-padding-remove",847248213),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-grid.uk-child-width-1-4.uk-padding-small","div.uk-grid.uk-child-width-1-4.uk-padding-small",-1316736813),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (sidenav_state,number,search){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-sidenav-state","set-sidenav-state",-670452979),(1)], null));
});})(sidenav_state,number,search))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),((cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sidenav_state),(1)))?"/Icons/search.svg":"/Icons/search-active.svg")], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (sidenav_state,number,search){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-sidenav-state","set-sidenav-state",-670452979),(2)], null));
});})(sidenav_state,number,search))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),((cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sidenav_state),(2)))?"/Icons/playing.svg":"/Icons/playing-active.svg")], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (sidenav_state,number,search){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-sidenav-state","set-sidenav-state",-670452979),(3)], null));
});})(sidenav_state,number,search))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),((cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sidenav_state),(3)))?"/Icons/payment-method.svg":"/Icons/cash-active.svg")], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (sidenav_state,number,search){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-sidenav-state","set-sidenav-state",-670452979),(4)], null));
});})(sidenav_state,number,search))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),((cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sidenav_state),(4)))?"/Icons/waiting.svg":"/Icons/waiting-active.svg")], null)], null)], null)], null),(function (){var G__56379 = cljs.core.deref.call(null,sidenav_state);
switch (G__56379) {
case (1):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.uk-search.uk-search-large.uk-padding-small.uk-padding-remove-vertical","form.uk-search.uk-search-large.uk-padding-small.uk-padding-remove-vertical",-488520674),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.uk-search-input.uk-animation-slide-top","input.uk-search-input.uk-animation-slide-top",-386031068),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (G__56379,sidenav_state,number,search){
return (function (p1__56377_SHARP_){
cljs.core.reset_BANG_.call(null,number,(20));

lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-members","dungeon/get-members",188408482),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number","number",1570378438),(0),new cljs.core.Keyword(null,"search","search",1564939822),p1__56377_SHARP_.target.value], null)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-search-member","set-search-member",-293591708),p1__56377_SHARP_.target.value], null));
});})(G__56379,sidenav_state,number,search))
,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,search),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Keres\u00E9s",new cljs.core.Keyword(null,"type","type",1174270348),"search"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.gamers], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.show_20_more,number], null)], null);

break;
case (2):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.uk-heading-bullet.uk-animation-slide-top","h3.uk-heading-bullet.uk-animation-slide-top",1123016779),"Dungeonben"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(2)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.gaming_gamers], null)], null);

break;
case (3):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.uk-heading-bullet.uk-animation-slide-top","h3.uk-heading-bullet.uk-animation-slide-top",1123016779),"Kassz\u00E1n\u00E1l"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.paying_gamers], null)], null);

break;
case (4):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.uk-heading-bullet.uk-animation-slide-top","h3.uk-heading-bullet.uk-animation-slide-top",1123016779),"V\u00E1r\u00F3terem"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(4)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.waiting_pool], null)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.deref.call(null,sidenav_state))].join('')));

}
})()], null)], null);
});
;})(sidenav_state,number,search))
});
lvlup.crusader.dungeon.dungeon = (function lvlup$crusader$dungeon$dungeon(){
var systems = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"system-map"], null));
var sidenav_canvas = reagent.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (systems,sidenav_canvas){
return (function (){
cljs.core.reset_BANG_.call(null,sidenav_canvas,UIkit.offcanvas(jayq.core.$.call(null,"#sidenav")));

window.dragging();

window.interact(".dropzone").dropzone(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"accept","accept",1874130431),".valami",new cljs.core.Keyword(null,"ondragenter","ondragenter",667057179),((function (systems,sidenav_canvas){
return (function (e){
return cljs.core.deref.call(null,sidenav_canvas).hide();
});})(systems,sidenav_canvas))
,new cljs.core.Keyword(null,"ondrop","ondrop",-1343708790),((function (systems,sidenav_canvas){
return (function (e){
return lvlup.crusader.dungeon.change.call(null,e);
});})(systems,sidenav_canvas))
], null)));

return window.interact(".dropzone2").dropzone(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"accept","accept",1874130431),".masvalami",new cljs.core.Keyword(null,"ondrop","ondrop",-1343708790),((function (systems,sidenav_canvas){
return (function (e){
return lvlup.crusader.dungeon.transfer.call(null,e);
});})(systems,sidenav_canvas))
], null)));
});})(systems,sidenav_canvas))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (systems,sidenav_canvas){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-background-cover.uk-offcanvas-content.svg-cursor","div.uk-background-cover.uk-offcanvas-content.svg-cursor",2131815911),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,systems),cljs.core.PersistentVector.EMPTY))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img#loading","img#loading",664187973),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"auto",new cljs.core.Keyword(null,"height","height",1025178622),"300px",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),"50%",new cljs.core.Keyword(null,"top","top",-1856271961),"50%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"-150px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"-150px"], null),new cljs.core.Keyword(null,"src","src",-1651076051),"/img/lvlup-logo-transparent.png"], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-small","div.uk-padding-small",1857323497),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.system_row], null)], null))], null);
});})(systems,sidenav_canvas))
], null));
});

//# sourceMappingURL=dungeon.js.map