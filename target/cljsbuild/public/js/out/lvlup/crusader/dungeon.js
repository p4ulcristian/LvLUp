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
return cljs.core.doall.call(null,cljs.core.filter.call(null,(function (p1__50561_SHARP_){
var or__36802__auto__ = lvlup.crusader.dungeon.includes_QMARK_.call(null,lvlup.crusader.dungeon.lower.call(null,cljs.core.deref.call(null,search_term)),lvlup.crusader.dungeon.lower.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__50561_SHARP_)));
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return cljs.core._EQ_.call(null,parseInt(cljs.core.deref.call(null,search_term)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__50561_SHARP_));
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
var type_price = (function (){var G__50563 = type;
switch (G__50563) {
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
return (function (p1__50565_SHARP_){
return cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__50565_SHARP_),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__50565_SHARP_));
});})(all_systems))
,cljs.core.deref.call(null,all_systems)));
var this_player_all_systems = cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (p1__50566_SHARP_){
return cljs.core._EQ_.call(null,parseInt(player_id),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__50566_SHARP_)))));
});})(all_systems,all_players))
,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (a){
return cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(a))),new cljs.core.Keyword(null,"member-id","member-id",606659713));
});})(all_systems,all_players))
,all_players))));
var this_player_systems = cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players,this_player_all_systems){
return (function (p1__50567_SHARP_){
return cljs.core._EQ_.call(null,parseInt(player_id),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__50567_SHARP_)))));
});})(all_systems,all_players,this_player_all_systems))
,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players,this_player_all_systems){
return (function (a){
return cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(a))),new cljs.core.Keyword(null,"start","start",-355208981));
});})(all_systems,all_players,this_player_all_systems))
,all_players))));
var seq__50630_50690 = cljs.core.seq.call(null,this_player_systems);
var chunk__50631_50691 = null;
var count__50632_50692 = (0);
var i__50633_50693 = (0);
while(true){
if((i__50633_50693 < count__50632_50692)){
var system_50694 = cljs.core._nth.call(null,chunk__50631_50691,i__50633_50693);
var number_50695 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system_50694);
var player_50696 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system_50694);
var vec__50634_50697 = cljs.core.filter.call(null,((function (seq__50630_50690,chunk__50631_50691,count__50632_50692,i__50633_50693,number_50695,player_50696,system_50694,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__50568_SHARP_){
return cljs.core._EQ_.call(null,number_50695,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__50568_SHARP_));
});})(seq__50630_50690,chunk__50631_50691,count__50632_50692,i__50633_50693,number_50695,player_50696,system_50694,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_50698 = cljs.core.nth.call(null,vec__50634_50697,(0),null);
var seq__50637_50699 = cljs.core.seq.call(null,player_50696);
var chunk__50638_50700 = null;
var count__50639_50701 = (0);
var i__50640_50702 = (0);
while(true){
if((i__50640_50702 < count__50639_50701)){
var vec__50641_50703 = cljs.core._nth.call(null,chunk__50638_50700,i__50640_50702);
var the_key_50704 = cljs.core.nth.call(null,vec__50641_50703,(0),null);
var place_50705 = cljs.core.nth.call(null,vec__50641_50703,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","add-invoice","dungeon/add-invoice",-1470910835),cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_50705),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place_50705),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id,new cljs.core.Keyword(null,"start","start",-355208981),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_50705)),new cljs.core.Keyword(null,"finish","finish",-586688046),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,[cljs.core.str(cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))].join('')),new cljs.core.Keyword(null,"price","price",22129180),lvlup.crusader.dungeon.minute_to_money.call(null,cljs_time.core.in_seconds.call(null,cljs_time.core.interval.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_50705)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_50705)))], null));

var G__50706 = seq__50637_50699;
var G__50707 = chunk__50638_50700;
var G__50708 = count__50639_50701;
var G__50709 = (i__50640_50702 + (1));
seq__50637_50699 = G__50706;
chunk__50638_50700 = G__50707;
count__50639_50701 = G__50708;
i__50640_50702 = G__50709;
continue;
} else {
var temp__4657__auto___50710 = cljs.core.seq.call(null,seq__50637_50699);
if(temp__4657__auto___50710){
var seq__50637_50711__$1 = temp__4657__auto___50710;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50637_50711__$1)){
var c__37613__auto___50712 = cljs.core.chunk_first.call(null,seq__50637_50711__$1);
var G__50713 = cljs.core.chunk_rest.call(null,seq__50637_50711__$1);
var G__50714 = c__37613__auto___50712;
var G__50715 = cljs.core.count.call(null,c__37613__auto___50712);
var G__50716 = (0);
seq__50637_50699 = G__50713;
chunk__50638_50700 = G__50714;
count__50639_50701 = G__50715;
i__50640_50702 = G__50716;
continue;
} else {
var vec__50644_50717 = cljs.core.first.call(null,seq__50637_50711__$1);
var the_key_50718 = cljs.core.nth.call(null,vec__50644_50717,(0),null);
var place_50719 = cljs.core.nth.call(null,vec__50644_50717,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","add-invoice","dungeon/add-invoice",-1470910835),cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_50719),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place_50719),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id,new cljs.core.Keyword(null,"start","start",-355208981),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_50719)),new cljs.core.Keyword(null,"finish","finish",-586688046),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,[cljs.core.str(cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))].join('')),new cljs.core.Keyword(null,"price","price",22129180),lvlup.crusader.dungeon.minute_to_money.call(null,cljs_time.core.in_seconds.call(null,cljs_time.core.interval.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_50719)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_50719)))], null));

var G__50720 = cljs.core.next.call(null,seq__50637_50711__$1);
var G__50721 = null;
var G__50722 = (0);
var G__50723 = (0);
seq__50637_50699 = G__50720;
chunk__50638_50700 = G__50721;
count__50639_50701 = G__50722;
i__50640_50702 = G__50723;
continue;
}
} else {
}
}
break;
}

var G__50724 = seq__50630_50690;
var G__50725 = chunk__50631_50691;
var G__50726 = count__50632_50692;
var G__50727 = (i__50633_50693 + (1));
seq__50630_50690 = G__50724;
chunk__50631_50691 = G__50725;
count__50632_50692 = G__50726;
i__50633_50693 = G__50727;
continue;
} else {
var temp__4657__auto___50728 = cljs.core.seq.call(null,seq__50630_50690);
if(temp__4657__auto___50728){
var seq__50630_50729__$1 = temp__4657__auto___50728;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50630_50729__$1)){
var c__37613__auto___50730 = cljs.core.chunk_first.call(null,seq__50630_50729__$1);
var G__50731 = cljs.core.chunk_rest.call(null,seq__50630_50729__$1);
var G__50732 = c__37613__auto___50730;
var G__50733 = cljs.core.count.call(null,c__37613__auto___50730);
var G__50734 = (0);
seq__50630_50690 = G__50731;
chunk__50631_50691 = G__50732;
count__50632_50692 = G__50733;
i__50633_50693 = G__50734;
continue;
} else {
var system_50735 = cljs.core.first.call(null,seq__50630_50729__$1);
var number_50736 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system_50735);
var player_50737 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system_50735);
var vec__50647_50738 = cljs.core.filter.call(null,((function (seq__50630_50690,chunk__50631_50691,count__50632_50692,i__50633_50693,number_50736,player_50737,system_50735,seq__50630_50729__$1,temp__4657__auto___50728,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__50568_SHARP_){
return cljs.core._EQ_.call(null,number_50736,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__50568_SHARP_));
});})(seq__50630_50690,chunk__50631_50691,count__50632_50692,i__50633_50693,number_50736,player_50737,system_50735,seq__50630_50729__$1,temp__4657__auto___50728,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_50739 = cljs.core.nth.call(null,vec__50647_50738,(0),null);
var seq__50650_50740 = cljs.core.seq.call(null,player_50737);
var chunk__50651_50741 = null;
var count__50652_50742 = (0);
var i__50653_50743 = (0);
while(true){
if((i__50653_50743 < count__50652_50742)){
var vec__50654_50744 = cljs.core._nth.call(null,chunk__50651_50741,i__50653_50743);
var the_key_50745 = cljs.core.nth.call(null,vec__50654_50744,(0),null);
var place_50746 = cljs.core.nth.call(null,vec__50654_50744,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","add-invoice","dungeon/add-invoice",-1470910835),cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_50746),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place_50746),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id,new cljs.core.Keyword(null,"start","start",-355208981),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_50746)),new cljs.core.Keyword(null,"finish","finish",-586688046),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,[cljs.core.str(cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))].join('')),new cljs.core.Keyword(null,"price","price",22129180),lvlup.crusader.dungeon.minute_to_money.call(null,cljs_time.core.in_seconds.call(null,cljs_time.core.interval.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_50746)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_50746)))], null));

var G__50747 = seq__50650_50740;
var G__50748 = chunk__50651_50741;
var G__50749 = count__50652_50742;
var G__50750 = (i__50653_50743 + (1));
seq__50650_50740 = G__50747;
chunk__50651_50741 = G__50748;
count__50652_50742 = G__50749;
i__50653_50743 = G__50750;
continue;
} else {
var temp__4657__auto___50751__$1 = cljs.core.seq.call(null,seq__50650_50740);
if(temp__4657__auto___50751__$1){
var seq__50650_50752__$1 = temp__4657__auto___50751__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50650_50752__$1)){
var c__37613__auto___50753 = cljs.core.chunk_first.call(null,seq__50650_50752__$1);
var G__50754 = cljs.core.chunk_rest.call(null,seq__50650_50752__$1);
var G__50755 = c__37613__auto___50753;
var G__50756 = cljs.core.count.call(null,c__37613__auto___50753);
var G__50757 = (0);
seq__50650_50740 = G__50754;
chunk__50651_50741 = G__50755;
count__50652_50742 = G__50756;
i__50653_50743 = G__50757;
continue;
} else {
var vec__50657_50758 = cljs.core.first.call(null,seq__50650_50752__$1);
var the_key_50759 = cljs.core.nth.call(null,vec__50657_50758,(0),null);
var place_50760 = cljs.core.nth.call(null,vec__50657_50758,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","add-invoice","dungeon/add-invoice",-1470910835),cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_50760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place_50760),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id,new cljs.core.Keyword(null,"start","start",-355208981),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_50760)),new cljs.core.Keyword(null,"finish","finish",-586688046),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,[cljs.core.str(cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))].join('')),new cljs.core.Keyword(null,"price","price",22129180),lvlup.crusader.dungeon.minute_to_money.call(null,cljs_time.core.in_seconds.call(null,cljs_time.core.interval.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_50760)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_50760)))], null));

var G__50761 = cljs.core.next.call(null,seq__50650_50752__$1);
var G__50762 = null;
var G__50763 = (0);
var G__50764 = (0);
seq__50650_50740 = G__50761;
chunk__50651_50741 = G__50762;
count__50652_50742 = G__50763;
i__50653_50743 = G__50764;
continue;
}
} else {
}
}
break;
}

var G__50765 = cljs.core.next.call(null,seq__50630_50729__$1);
var G__50766 = null;
var G__50767 = (0);
var G__50768 = (0);
seq__50630_50690 = G__50765;
chunk__50631_50691 = G__50766;
count__50632_50692 = G__50767;
i__50633_50693 = G__50768;
continue;
}
} else {
}
}
break;
}

lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-members-with-id","dungeon/get-members-with-id",-1097562328),cljs.core.vec.call(null,player_id)], null));

var seq__50660 = cljs.core.seq.call(null,this_player_all_systems);
var chunk__50661 = null;
var count__50662 = (0);
var i__50663 = (0);
while(true){
if((i__50663 < count__50662)){
var system = cljs.core._nth.call(null,chunk__50661,i__50663);
var number_50769 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system);
var player_50770 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system);
var vec__50664_50771 = cljs.core.filter.call(null,((function (seq__50660,chunk__50661,count__50662,i__50663,number_50769,player_50770,system,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__50569_SHARP_){
return cljs.core._EQ_.call(null,number_50769,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__50569_SHARP_));
});})(seq__50660,chunk__50661,count__50662,i__50663,number_50769,player_50770,system,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_50772 = cljs.core.nth.call(null,vec__50664_50771,(0),null);
var seq__50667_50773 = cljs.core.seq.call(null,player_50770);
var chunk__50668_50774 = null;
var count__50669_50775 = (0);
var i__50670_50776 = (0);
while(true){
if((i__50670_50776 < count__50669_50775)){
var vec__50671_50777 = cljs.core._nth.call(null,chunk__50668_50774,i__50670_50776);
var the_key_50778 = cljs.core.nth.call(null,vec__50671_50777,(0),null);
var place_50779 = cljs.core.nth.call(null,vec__50671_50777,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_50772,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_50772),the_key_50778))], null));

var G__50780 = seq__50667_50773;
var G__50781 = chunk__50668_50774;
var G__50782 = count__50669_50775;
var G__50783 = (i__50670_50776 + (1));
seq__50667_50773 = G__50780;
chunk__50668_50774 = G__50781;
count__50669_50775 = G__50782;
i__50670_50776 = G__50783;
continue;
} else {
var temp__4657__auto___50784 = cljs.core.seq.call(null,seq__50667_50773);
if(temp__4657__auto___50784){
var seq__50667_50785__$1 = temp__4657__auto___50784;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50667_50785__$1)){
var c__37613__auto___50786 = cljs.core.chunk_first.call(null,seq__50667_50785__$1);
var G__50787 = cljs.core.chunk_rest.call(null,seq__50667_50785__$1);
var G__50788 = c__37613__auto___50786;
var G__50789 = cljs.core.count.call(null,c__37613__auto___50786);
var G__50790 = (0);
seq__50667_50773 = G__50787;
chunk__50668_50774 = G__50788;
count__50669_50775 = G__50789;
i__50670_50776 = G__50790;
continue;
} else {
var vec__50674_50791 = cljs.core.first.call(null,seq__50667_50785__$1);
var the_key_50792 = cljs.core.nth.call(null,vec__50674_50791,(0),null);
var place_50793 = cljs.core.nth.call(null,vec__50674_50791,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_50772,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_50772),the_key_50792))], null));

var G__50794 = cljs.core.next.call(null,seq__50667_50785__$1);
var G__50795 = null;
var G__50796 = (0);
var G__50797 = (0);
seq__50667_50773 = G__50794;
chunk__50668_50774 = G__50795;
count__50669_50775 = G__50796;
i__50670_50776 = G__50797;
continue;
}
} else {
}
}
break;
}

var G__50798 = seq__50660;
var G__50799 = chunk__50661;
var G__50800 = count__50662;
var G__50801 = (i__50663 + (1));
seq__50660 = G__50798;
chunk__50661 = G__50799;
count__50662 = G__50800;
i__50663 = G__50801;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50660);
if(temp__4657__auto__){
var seq__50660__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50660__$1)){
var c__37613__auto__ = cljs.core.chunk_first.call(null,seq__50660__$1);
var G__50802 = cljs.core.chunk_rest.call(null,seq__50660__$1);
var G__50803 = c__37613__auto__;
var G__50804 = cljs.core.count.call(null,c__37613__auto__);
var G__50805 = (0);
seq__50660 = G__50802;
chunk__50661 = G__50803;
count__50662 = G__50804;
i__50663 = G__50805;
continue;
} else {
var system = cljs.core.first.call(null,seq__50660__$1);
var number_50806 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system);
var player_50807 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system);
var vec__50677_50808 = cljs.core.filter.call(null,((function (seq__50660,chunk__50661,count__50662,i__50663,number_50806,player_50807,system,seq__50660__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__50569_SHARP_){
return cljs.core._EQ_.call(null,number_50806,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__50569_SHARP_));
});})(seq__50660,chunk__50661,count__50662,i__50663,number_50806,player_50807,system,seq__50660__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_50809 = cljs.core.nth.call(null,vec__50677_50808,(0),null);
var seq__50680_50810 = cljs.core.seq.call(null,player_50807);
var chunk__50681_50811 = null;
var count__50682_50812 = (0);
var i__50683_50813 = (0);
while(true){
if((i__50683_50813 < count__50682_50812)){
var vec__50684_50814 = cljs.core._nth.call(null,chunk__50681_50811,i__50683_50813);
var the_key_50815 = cljs.core.nth.call(null,vec__50684_50814,(0),null);
var place_50816 = cljs.core.nth.call(null,vec__50684_50814,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_50809,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_50809),the_key_50815))], null));

var G__50817 = seq__50680_50810;
var G__50818 = chunk__50681_50811;
var G__50819 = count__50682_50812;
var G__50820 = (i__50683_50813 + (1));
seq__50680_50810 = G__50817;
chunk__50681_50811 = G__50818;
count__50682_50812 = G__50819;
i__50683_50813 = G__50820;
continue;
} else {
var temp__4657__auto___50821__$1 = cljs.core.seq.call(null,seq__50680_50810);
if(temp__4657__auto___50821__$1){
var seq__50680_50822__$1 = temp__4657__auto___50821__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50680_50822__$1)){
var c__37613__auto___50823 = cljs.core.chunk_first.call(null,seq__50680_50822__$1);
var G__50824 = cljs.core.chunk_rest.call(null,seq__50680_50822__$1);
var G__50825 = c__37613__auto___50823;
var G__50826 = cljs.core.count.call(null,c__37613__auto___50823);
var G__50827 = (0);
seq__50680_50810 = G__50824;
chunk__50681_50811 = G__50825;
count__50682_50812 = G__50826;
i__50683_50813 = G__50827;
continue;
} else {
var vec__50687_50828 = cljs.core.first.call(null,seq__50680_50822__$1);
var the_key_50829 = cljs.core.nth.call(null,vec__50687_50828,(0),null);
var place_50830 = cljs.core.nth.call(null,vec__50687_50828,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_50809,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_50809),the_key_50829))], null));

var G__50831 = cljs.core.next.call(null,seq__50680_50822__$1);
var G__50832 = null;
var G__50833 = (0);
var G__50834 = (0);
seq__50680_50810 = G__50831;
chunk__50681_50811 = G__50832;
count__50682_50812 = G__50833;
i__50683_50813 = G__50834;
continue;
}
} else {
}
}
break;
}

var G__50835 = cljs.core.next.call(null,seq__50660__$1);
var G__50836 = null;
var G__50837 = (0);
var G__50838 = (0);
seq__50660 = G__50835;
chunk__50661 = G__50836;
count__50662 = G__50837;
i__50663 = G__50838;
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
return (function (p1__50839_SHARP_){
return new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__50839_SHARP_);
});})(all_systems))
,cljs.core.deref.call(null,all_systems)));
var this_player_systems = cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (p1__50840_SHARP_){
return cljs.core._EQ_.call(null,parseInt(player_id),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(p1__50840_SHARP_));
});})(all_systems,all_players))
,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (a){
return cljs.core.contains_QMARK_.call(null,a,new cljs.core.Keyword(null,"start","start",-355208981));
});})(all_systems,all_players))
,cljs.core.map.call(null,((function (all_systems,all_players){
return (function (p1__50841_SHARP_){
return cljs.core.second.call(null,cljs.core.first.call(null,p1__50841_SHARP_));
});})(all_systems,all_players))
,all_players)))));
var total_price = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (all_systems,all_players,this_player_systems){
return (function (p1__50842_SHARP_){
return lvlup.crusader.dungeon.count_time_halves.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(p1__50842_SHARP_)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))));
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
return (function (p1__50843_SHARP_){
return cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__50843_SHARP_),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__50843_SHARP_));
});})(all_systems))
,cljs.core.deref.call(null,all_systems)));
var this_player_all_systems = cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (p1__50844_SHARP_){
return cljs.core._EQ_.call(null,parseInt(player_id),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__50844_SHARP_)))));
});})(all_systems,all_players))
,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (a){
return cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(a))),new cljs.core.Keyword(null,"member-id","member-id",606659713));
});})(all_systems,all_players))
,all_players))));
var this_player_systems = cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players,this_player_all_systems){
return (function (p1__50845_SHARP_){
return cljs.core._EQ_.call(null,parseInt(player_id),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__50845_SHARP_)))));
});})(all_systems,all_players,this_player_all_systems))
,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players,this_player_all_systems){
return (function (a){
return cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(a))),new cljs.core.Keyword(null,"start","start",-355208981));
});})(all_systems,all_players,this_player_all_systems))
,all_players))));
console.log([cljs.core.str("wtf: "),cljs.core.str(all_players)].join(''));

var seq__50938 = cljs.core.seq.call(null,this_player_systems);
var chunk__50939 = null;
var count__50940 = (0);
var i__50941 = (0);
while(true){
if((i__50941 < count__50940)){
var system = cljs.core._nth.call(null,chunk__50939,i__50941);
var number_51028 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system);
var player_51029 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system);
var vec__50942_51030 = cljs.core.filter.call(null,((function (seq__50938,chunk__50939,count__50940,i__50941,number_51028,player_51029,system,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__50846_SHARP_){
return cljs.core._EQ_.call(null,number_51028,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__50846_SHARP_));
});})(seq__50938,chunk__50939,count__50940,i__50941,number_51028,player_51029,system,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_51031 = cljs.core.nth.call(null,vec__50942_51030,(0),null);
var seq__50945_51032 = cljs.core.seq.call(null,player_51029);
var chunk__50946_51033 = null;
var count__50947_51034 = (0);
var i__50948_51035 = (0);
while(true){
if((i__50948_51035 < count__50947_51034)){
var vec__50949_51036 = cljs.core._nth.call(null,chunk__50946_51033,i__50948_51035);
var the_key_51037 = cljs.core.nth.call(null,vec__50949_51036,(0),null);
var place_51038 = cljs.core.nth.call(null,vec__50949_51036,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","season-pass","dungeon/season-pass",-766369009),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"quantity","quantity",-1929050694),((-1) * lvlup.crusader.dungeon.all_items_to_hours.call(null,player_id)),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id], null)], null));

var G__51039 = seq__50945_51032;
var G__51040 = chunk__50946_51033;
var G__51041 = count__50947_51034;
var G__51042 = (i__50948_51035 + (1));
seq__50945_51032 = G__51039;
chunk__50946_51033 = G__51040;
count__50947_51034 = G__51041;
i__50948_51035 = G__51042;
continue;
} else {
var temp__4657__auto___51043 = cljs.core.seq.call(null,seq__50945_51032);
if(temp__4657__auto___51043){
var seq__50945_51044__$1 = temp__4657__auto___51043;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50945_51044__$1)){
var c__37613__auto___51045 = cljs.core.chunk_first.call(null,seq__50945_51044__$1);
var G__51046 = cljs.core.chunk_rest.call(null,seq__50945_51044__$1);
var G__51047 = c__37613__auto___51045;
var G__51048 = cljs.core.count.call(null,c__37613__auto___51045);
var G__51049 = (0);
seq__50945_51032 = G__51046;
chunk__50946_51033 = G__51047;
count__50947_51034 = G__51048;
i__50948_51035 = G__51049;
continue;
} else {
var vec__50952_51050 = cljs.core.first.call(null,seq__50945_51044__$1);
var the_key_51051 = cljs.core.nth.call(null,vec__50952_51050,(0),null);
var place_51052 = cljs.core.nth.call(null,vec__50952_51050,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","season-pass","dungeon/season-pass",-766369009),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"quantity","quantity",-1929050694),((-1) * lvlup.crusader.dungeon.all_items_to_hours.call(null,player_id)),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id], null)], null));

var G__51053 = cljs.core.next.call(null,seq__50945_51044__$1);
var G__51054 = null;
var G__51055 = (0);
var G__51056 = (0);
seq__50945_51032 = G__51053;
chunk__50946_51033 = G__51054;
count__50947_51034 = G__51055;
i__50948_51035 = G__51056;
continue;
}
} else {
}
}
break;
}

var seq__50955_51057 = cljs.core.seq.call(null,this_player_all_systems);
var chunk__50956_51058 = null;
var count__50957_51059 = (0);
var i__50958_51060 = (0);
while(true){
if((i__50958_51060 < count__50957_51059)){
var system_51061__$1 = cljs.core._nth.call(null,chunk__50956_51058,i__50958_51060);
var number_51062__$1 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system_51061__$1);
var player_51063__$1 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system_51061__$1);
var vec__50959_51064 = cljs.core.filter.call(null,((function (seq__50955_51057,chunk__50956_51058,count__50957_51059,i__50958_51060,seq__50938,chunk__50939,count__50940,i__50941,number_51062__$1,player_51063__$1,system_51061__$1,number_51028,player_51029,vec__50942_51030,filtered_system_51031,system,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__50847_SHARP_){
return cljs.core._EQ_.call(null,number_51062__$1,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__50847_SHARP_));
});})(seq__50955_51057,chunk__50956_51058,count__50957_51059,i__50958_51060,seq__50938,chunk__50939,count__50940,i__50941,number_51062__$1,player_51063__$1,system_51061__$1,number_51028,player_51029,vec__50942_51030,filtered_system_51031,system,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_51065__$1 = cljs.core.nth.call(null,vec__50959_51064,(0),null);
var seq__50962_51066 = cljs.core.seq.call(null,player_51063__$1);
var chunk__50963_51067 = null;
var count__50964_51068 = (0);
var i__50965_51069 = (0);
while(true){
if((i__50965_51069 < count__50964_51068)){
var vec__50966_51070 = cljs.core._nth.call(null,chunk__50963_51067,i__50965_51069);
var the_key_51071 = cljs.core.nth.call(null,vec__50966_51070,(0),null);
var place_51072 = cljs.core.nth.call(null,vec__50966_51070,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_51065__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_51065__$1),the_key_51071))], null));

var G__51073 = seq__50962_51066;
var G__51074 = chunk__50963_51067;
var G__51075 = count__50964_51068;
var G__51076 = (i__50965_51069 + (1));
seq__50962_51066 = G__51073;
chunk__50963_51067 = G__51074;
count__50964_51068 = G__51075;
i__50965_51069 = G__51076;
continue;
} else {
var temp__4657__auto___51077 = cljs.core.seq.call(null,seq__50962_51066);
if(temp__4657__auto___51077){
var seq__50962_51078__$1 = temp__4657__auto___51077;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50962_51078__$1)){
var c__37613__auto___51079 = cljs.core.chunk_first.call(null,seq__50962_51078__$1);
var G__51080 = cljs.core.chunk_rest.call(null,seq__50962_51078__$1);
var G__51081 = c__37613__auto___51079;
var G__51082 = cljs.core.count.call(null,c__37613__auto___51079);
var G__51083 = (0);
seq__50962_51066 = G__51080;
chunk__50963_51067 = G__51081;
count__50964_51068 = G__51082;
i__50965_51069 = G__51083;
continue;
} else {
var vec__50969_51084 = cljs.core.first.call(null,seq__50962_51078__$1);
var the_key_51085 = cljs.core.nth.call(null,vec__50969_51084,(0),null);
var place_51086 = cljs.core.nth.call(null,vec__50969_51084,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_51065__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_51065__$1),the_key_51085))], null));

var G__51087 = cljs.core.next.call(null,seq__50962_51078__$1);
var G__51088 = null;
var G__51089 = (0);
var G__51090 = (0);
seq__50962_51066 = G__51087;
chunk__50963_51067 = G__51088;
count__50964_51068 = G__51089;
i__50965_51069 = G__51090;
continue;
}
} else {
}
}
break;
}

var G__51091 = seq__50955_51057;
var G__51092 = chunk__50956_51058;
var G__51093 = count__50957_51059;
var G__51094 = (i__50958_51060 + (1));
seq__50955_51057 = G__51091;
chunk__50956_51058 = G__51092;
count__50957_51059 = G__51093;
i__50958_51060 = G__51094;
continue;
} else {
var temp__4657__auto___51095 = cljs.core.seq.call(null,seq__50955_51057);
if(temp__4657__auto___51095){
var seq__50955_51096__$1 = temp__4657__auto___51095;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50955_51096__$1)){
var c__37613__auto___51097 = cljs.core.chunk_first.call(null,seq__50955_51096__$1);
var G__51098 = cljs.core.chunk_rest.call(null,seq__50955_51096__$1);
var G__51099 = c__37613__auto___51097;
var G__51100 = cljs.core.count.call(null,c__37613__auto___51097);
var G__51101 = (0);
seq__50955_51057 = G__51098;
chunk__50956_51058 = G__51099;
count__50957_51059 = G__51100;
i__50958_51060 = G__51101;
continue;
} else {
var system_51102__$1 = cljs.core.first.call(null,seq__50955_51096__$1);
var number_51103__$1 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system_51102__$1);
var player_51104__$1 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system_51102__$1);
var vec__50972_51105 = cljs.core.filter.call(null,((function (seq__50955_51057,chunk__50956_51058,count__50957_51059,i__50958_51060,seq__50938,chunk__50939,count__50940,i__50941,number_51103__$1,player_51104__$1,system_51102__$1,seq__50955_51096__$1,temp__4657__auto___51095,number_51028,player_51029,vec__50942_51030,filtered_system_51031,system,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__50847_SHARP_){
return cljs.core._EQ_.call(null,number_51103__$1,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__50847_SHARP_));
});})(seq__50955_51057,chunk__50956_51058,count__50957_51059,i__50958_51060,seq__50938,chunk__50939,count__50940,i__50941,number_51103__$1,player_51104__$1,system_51102__$1,seq__50955_51096__$1,temp__4657__auto___51095,number_51028,player_51029,vec__50942_51030,filtered_system_51031,system,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_51106__$1 = cljs.core.nth.call(null,vec__50972_51105,(0),null);
var seq__50975_51107 = cljs.core.seq.call(null,player_51104__$1);
var chunk__50976_51108 = null;
var count__50977_51109 = (0);
var i__50978_51110 = (0);
while(true){
if((i__50978_51110 < count__50977_51109)){
var vec__50979_51111 = cljs.core._nth.call(null,chunk__50976_51108,i__50978_51110);
var the_key_51112 = cljs.core.nth.call(null,vec__50979_51111,(0),null);
var place_51113 = cljs.core.nth.call(null,vec__50979_51111,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_51106__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_51106__$1),the_key_51112))], null));

var G__51114 = seq__50975_51107;
var G__51115 = chunk__50976_51108;
var G__51116 = count__50977_51109;
var G__51117 = (i__50978_51110 + (1));
seq__50975_51107 = G__51114;
chunk__50976_51108 = G__51115;
count__50977_51109 = G__51116;
i__50978_51110 = G__51117;
continue;
} else {
var temp__4657__auto___51118__$1 = cljs.core.seq.call(null,seq__50975_51107);
if(temp__4657__auto___51118__$1){
var seq__50975_51119__$1 = temp__4657__auto___51118__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50975_51119__$1)){
var c__37613__auto___51120 = cljs.core.chunk_first.call(null,seq__50975_51119__$1);
var G__51121 = cljs.core.chunk_rest.call(null,seq__50975_51119__$1);
var G__51122 = c__37613__auto___51120;
var G__51123 = cljs.core.count.call(null,c__37613__auto___51120);
var G__51124 = (0);
seq__50975_51107 = G__51121;
chunk__50976_51108 = G__51122;
count__50977_51109 = G__51123;
i__50978_51110 = G__51124;
continue;
} else {
var vec__50982_51125 = cljs.core.first.call(null,seq__50975_51119__$1);
var the_key_51126 = cljs.core.nth.call(null,vec__50982_51125,(0),null);
var place_51127 = cljs.core.nth.call(null,vec__50982_51125,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_51106__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_51106__$1),the_key_51126))], null));

var G__51128 = cljs.core.next.call(null,seq__50975_51119__$1);
var G__51129 = null;
var G__51130 = (0);
var G__51131 = (0);
seq__50975_51107 = G__51128;
chunk__50976_51108 = G__51129;
count__50977_51109 = G__51130;
i__50978_51110 = G__51131;
continue;
}
} else {
}
}
break;
}

var G__51132 = cljs.core.next.call(null,seq__50955_51096__$1);
var G__51133 = null;
var G__51134 = (0);
var G__51135 = (0);
seq__50955_51057 = G__51132;
chunk__50956_51058 = G__51133;
count__50957_51059 = G__51134;
i__50958_51060 = G__51135;
continue;
}
} else {
}
}
break;
}

var G__51136 = seq__50938;
var G__51137 = chunk__50939;
var G__51138 = count__50940;
var G__51139 = (i__50941 + (1));
seq__50938 = G__51136;
chunk__50939 = G__51137;
count__50940 = G__51138;
i__50941 = G__51139;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50938);
if(temp__4657__auto__){
var seq__50938__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50938__$1)){
var c__37613__auto__ = cljs.core.chunk_first.call(null,seq__50938__$1);
var G__51140 = cljs.core.chunk_rest.call(null,seq__50938__$1);
var G__51141 = c__37613__auto__;
var G__51142 = cljs.core.count.call(null,c__37613__auto__);
var G__51143 = (0);
seq__50938 = G__51140;
chunk__50939 = G__51141;
count__50940 = G__51142;
i__50941 = G__51143;
continue;
} else {
var system = cljs.core.first.call(null,seq__50938__$1);
var number_51144 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system);
var player_51145 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system);
var vec__50985_51146 = cljs.core.filter.call(null,((function (seq__50938,chunk__50939,count__50940,i__50941,number_51144,player_51145,system,seq__50938__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__50846_SHARP_){
return cljs.core._EQ_.call(null,number_51144,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__50846_SHARP_));
});})(seq__50938,chunk__50939,count__50940,i__50941,number_51144,player_51145,system,seq__50938__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_51147 = cljs.core.nth.call(null,vec__50985_51146,(0),null);
var seq__50988_51148 = cljs.core.seq.call(null,player_51145);
var chunk__50989_51149 = null;
var count__50990_51150 = (0);
var i__50991_51151 = (0);
while(true){
if((i__50991_51151 < count__50990_51150)){
var vec__50992_51152 = cljs.core._nth.call(null,chunk__50989_51149,i__50991_51151);
var the_key_51153 = cljs.core.nth.call(null,vec__50992_51152,(0),null);
var place_51154 = cljs.core.nth.call(null,vec__50992_51152,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","season-pass","dungeon/season-pass",-766369009),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"quantity","quantity",-1929050694),((-1) * lvlup.crusader.dungeon.all_items_to_hours.call(null,player_id)),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id], null)], null));

var G__51155 = seq__50988_51148;
var G__51156 = chunk__50989_51149;
var G__51157 = count__50990_51150;
var G__51158 = (i__50991_51151 + (1));
seq__50988_51148 = G__51155;
chunk__50989_51149 = G__51156;
count__50990_51150 = G__51157;
i__50991_51151 = G__51158;
continue;
} else {
var temp__4657__auto___51159__$1 = cljs.core.seq.call(null,seq__50988_51148);
if(temp__4657__auto___51159__$1){
var seq__50988_51160__$1 = temp__4657__auto___51159__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50988_51160__$1)){
var c__37613__auto___51161 = cljs.core.chunk_first.call(null,seq__50988_51160__$1);
var G__51162 = cljs.core.chunk_rest.call(null,seq__50988_51160__$1);
var G__51163 = c__37613__auto___51161;
var G__51164 = cljs.core.count.call(null,c__37613__auto___51161);
var G__51165 = (0);
seq__50988_51148 = G__51162;
chunk__50989_51149 = G__51163;
count__50990_51150 = G__51164;
i__50991_51151 = G__51165;
continue;
} else {
var vec__50995_51166 = cljs.core.first.call(null,seq__50988_51160__$1);
var the_key_51167 = cljs.core.nth.call(null,vec__50995_51166,(0),null);
var place_51168 = cljs.core.nth.call(null,vec__50995_51166,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","season-pass","dungeon/season-pass",-766369009),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"quantity","quantity",-1929050694),((-1) * lvlup.crusader.dungeon.all_items_to_hours.call(null,player_id)),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id], null)], null));

var G__51169 = cljs.core.next.call(null,seq__50988_51160__$1);
var G__51170 = null;
var G__51171 = (0);
var G__51172 = (0);
seq__50988_51148 = G__51169;
chunk__50989_51149 = G__51170;
count__50990_51150 = G__51171;
i__50991_51151 = G__51172;
continue;
}
} else {
}
}
break;
}

var seq__50998_51173 = cljs.core.seq.call(null,this_player_all_systems);
var chunk__50999_51174 = null;
var count__51000_51175 = (0);
var i__51001_51176 = (0);
while(true){
if((i__51001_51176 < count__51000_51175)){
var system_51177__$1 = cljs.core._nth.call(null,chunk__50999_51174,i__51001_51176);
var number_51178__$1 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system_51177__$1);
var player_51179__$1 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system_51177__$1);
var vec__51002_51180 = cljs.core.filter.call(null,((function (seq__50998_51173,chunk__50999_51174,count__51000_51175,i__51001_51176,seq__50938,chunk__50939,count__50940,i__50941,number_51178__$1,player_51179__$1,system_51177__$1,number_51144,player_51145,vec__50985_51146,filtered_system_51147,system,seq__50938__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__50847_SHARP_){
return cljs.core._EQ_.call(null,number_51178__$1,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__50847_SHARP_));
});})(seq__50998_51173,chunk__50999_51174,count__51000_51175,i__51001_51176,seq__50938,chunk__50939,count__50940,i__50941,number_51178__$1,player_51179__$1,system_51177__$1,number_51144,player_51145,vec__50985_51146,filtered_system_51147,system,seq__50938__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_51181__$1 = cljs.core.nth.call(null,vec__51002_51180,(0),null);
var seq__51005_51182 = cljs.core.seq.call(null,player_51179__$1);
var chunk__51006_51183 = null;
var count__51007_51184 = (0);
var i__51008_51185 = (0);
while(true){
if((i__51008_51185 < count__51007_51184)){
var vec__51009_51186 = cljs.core._nth.call(null,chunk__51006_51183,i__51008_51185);
var the_key_51187 = cljs.core.nth.call(null,vec__51009_51186,(0),null);
var place_51188 = cljs.core.nth.call(null,vec__51009_51186,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_51181__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_51181__$1),the_key_51187))], null));

var G__51189 = seq__51005_51182;
var G__51190 = chunk__51006_51183;
var G__51191 = count__51007_51184;
var G__51192 = (i__51008_51185 + (1));
seq__51005_51182 = G__51189;
chunk__51006_51183 = G__51190;
count__51007_51184 = G__51191;
i__51008_51185 = G__51192;
continue;
} else {
var temp__4657__auto___51193__$1 = cljs.core.seq.call(null,seq__51005_51182);
if(temp__4657__auto___51193__$1){
var seq__51005_51194__$1 = temp__4657__auto___51193__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51005_51194__$1)){
var c__37613__auto___51195 = cljs.core.chunk_first.call(null,seq__51005_51194__$1);
var G__51196 = cljs.core.chunk_rest.call(null,seq__51005_51194__$1);
var G__51197 = c__37613__auto___51195;
var G__51198 = cljs.core.count.call(null,c__37613__auto___51195);
var G__51199 = (0);
seq__51005_51182 = G__51196;
chunk__51006_51183 = G__51197;
count__51007_51184 = G__51198;
i__51008_51185 = G__51199;
continue;
} else {
var vec__51012_51200 = cljs.core.first.call(null,seq__51005_51194__$1);
var the_key_51201 = cljs.core.nth.call(null,vec__51012_51200,(0),null);
var place_51202 = cljs.core.nth.call(null,vec__51012_51200,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_51181__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_51181__$1),the_key_51201))], null));

var G__51203 = cljs.core.next.call(null,seq__51005_51194__$1);
var G__51204 = null;
var G__51205 = (0);
var G__51206 = (0);
seq__51005_51182 = G__51203;
chunk__51006_51183 = G__51204;
count__51007_51184 = G__51205;
i__51008_51185 = G__51206;
continue;
}
} else {
}
}
break;
}

var G__51207 = seq__50998_51173;
var G__51208 = chunk__50999_51174;
var G__51209 = count__51000_51175;
var G__51210 = (i__51001_51176 + (1));
seq__50998_51173 = G__51207;
chunk__50999_51174 = G__51208;
count__51000_51175 = G__51209;
i__51001_51176 = G__51210;
continue;
} else {
var temp__4657__auto___51211__$1 = cljs.core.seq.call(null,seq__50998_51173);
if(temp__4657__auto___51211__$1){
var seq__50998_51212__$1 = temp__4657__auto___51211__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50998_51212__$1)){
var c__37613__auto___51213 = cljs.core.chunk_first.call(null,seq__50998_51212__$1);
var G__51214 = cljs.core.chunk_rest.call(null,seq__50998_51212__$1);
var G__51215 = c__37613__auto___51213;
var G__51216 = cljs.core.count.call(null,c__37613__auto___51213);
var G__51217 = (0);
seq__50998_51173 = G__51214;
chunk__50999_51174 = G__51215;
count__51000_51175 = G__51216;
i__51001_51176 = G__51217;
continue;
} else {
var system_51218__$1 = cljs.core.first.call(null,seq__50998_51212__$1);
var number_51219__$1 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system_51218__$1);
var player_51220__$1 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system_51218__$1);
var vec__51015_51221 = cljs.core.filter.call(null,((function (seq__50998_51173,chunk__50999_51174,count__51000_51175,i__51001_51176,seq__50938,chunk__50939,count__50940,i__50941,number_51219__$1,player_51220__$1,system_51218__$1,seq__50998_51212__$1,temp__4657__auto___51211__$1,number_51144,player_51145,vec__50985_51146,filtered_system_51147,system,seq__50938__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__50847_SHARP_){
return cljs.core._EQ_.call(null,number_51219__$1,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__50847_SHARP_));
});})(seq__50998_51173,chunk__50999_51174,count__51000_51175,i__51001_51176,seq__50938,chunk__50939,count__50940,i__50941,number_51219__$1,player_51220__$1,system_51218__$1,seq__50998_51212__$1,temp__4657__auto___51211__$1,number_51144,player_51145,vec__50985_51146,filtered_system_51147,system,seq__50938__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_51222__$1 = cljs.core.nth.call(null,vec__51015_51221,(0),null);
var seq__51018_51223 = cljs.core.seq.call(null,player_51220__$1);
var chunk__51019_51224 = null;
var count__51020_51225 = (0);
var i__51021_51226 = (0);
while(true){
if((i__51021_51226 < count__51020_51225)){
var vec__51022_51227 = cljs.core._nth.call(null,chunk__51019_51224,i__51021_51226);
var the_key_51228 = cljs.core.nth.call(null,vec__51022_51227,(0),null);
var place_51229 = cljs.core.nth.call(null,vec__51022_51227,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_51222__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_51222__$1),the_key_51228))], null));

var G__51230 = seq__51018_51223;
var G__51231 = chunk__51019_51224;
var G__51232 = count__51020_51225;
var G__51233 = (i__51021_51226 + (1));
seq__51018_51223 = G__51230;
chunk__51019_51224 = G__51231;
count__51020_51225 = G__51232;
i__51021_51226 = G__51233;
continue;
} else {
var temp__4657__auto___51234__$2 = cljs.core.seq.call(null,seq__51018_51223);
if(temp__4657__auto___51234__$2){
var seq__51018_51235__$1 = temp__4657__auto___51234__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51018_51235__$1)){
var c__37613__auto___51236 = cljs.core.chunk_first.call(null,seq__51018_51235__$1);
var G__51237 = cljs.core.chunk_rest.call(null,seq__51018_51235__$1);
var G__51238 = c__37613__auto___51236;
var G__51239 = cljs.core.count.call(null,c__37613__auto___51236);
var G__51240 = (0);
seq__51018_51223 = G__51237;
chunk__51019_51224 = G__51238;
count__51020_51225 = G__51239;
i__51021_51226 = G__51240;
continue;
} else {
var vec__51025_51241 = cljs.core.first.call(null,seq__51018_51235__$1);
var the_key_51242 = cljs.core.nth.call(null,vec__51025_51241,(0),null);
var place_51243 = cljs.core.nth.call(null,vec__51025_51241,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_51222__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_51222__$1),the_key_51242))], null));

var G__51244 = cljs.core.next.call(null,seq__51018_51235__$1);
var G__51245 = null;
var G__51246 = (0);
var G__51247 = (0);
seq__51018_51223 = G__51244;
chunk__51019_51224 = G__51245;
count__51020_51225 = G__51246;
i__51021_51226 = G__51247;
continue;
}
} else {
}
}
break;
}

var G__51248 = cljs.core.next.call(null,seq__50998_51212__$1);
var G__51249 = null;
var G__51250 = (0);
var G__51251 = (0);
seq__50998_51173 = G__51248;
chunk__50999_51174 = G__51249;
count__51000_51175 = G__51250;
i__51001_51176 = G__51251;
continue;
}
} else {
}
}
break;
}

var G__51252 = cljs.core.next.call(null,seq__50938__$1);
var G__51253 = null;
var G__51254 = (0);
var G__51255 = (0);
seq__50938 = G__51252;
chunk__50939 = G__51253;
count__50940 = G__51254;
i__50941 = G__51255;
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
return (function (p1__51256_SHARP_){
return new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__51256_SHARP_);
});})(all_systems))
,cljs.core.deref.call(null,all_systems)));
var this_player_systems = cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (p1__51257_SHARP_){
return cljs.core._EQ_.call(null,parseInt(player_id),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(p1__51257_SHARP_));
});})(all_systems,all_players))
,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (a){
return cljs.core.contains_QMARK_.call(null,a,new cljs.core.Keyword(null,"start","start",-355208981));
});})(all_systems,all_players))
,cljs.core.map.call(null,((function (all_systems,all_players){
return (function (p1__51258_SHARP_){
return cljs.core.second.call(null,cljs.core.first.call(null,p1__51258_SHARP_));
});})(all_systems,all_players))
,all_players)))));
var total_price = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (all_systems,all_players,this_player_systems){
return (function (p1__51259_SHARP_){
return lvlup.crusader.dungeon.minute_to_money.call(null,(cljs.core.truth_(cljs_time.core.before_QMARK_.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(p1__51259_SHARP_)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1)))))?cljs_time.core.in_seconds.call(null,cljs_time.core.interval.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(p1__51259_SHARP_)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))):(0)),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__51259_SHARP_));
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
lvlup.crusader.dungeon.player_playing = (function lvlup$crusader$dungeon$player_playing(system,p__51261){
var vec__51269 = p__51261;
var player_number = cljs.core.nth.call(null,vec__51269,(0),null);
var data = cljs.core.nth.call(null,vec__51269,(1),null);
var active_member = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"active-member"], null));
var loading = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"loading"], null));
var time_elapsed = reagent.core.atom.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(data))?lvlup.crusader.dungeon.calculate_time_interval.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(data)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1)))):null));
var valami = reagent.core.atom.call(null,setInterval(((function (active_member,loading,time_elapsed,vec__51269,player_number,data){
return (function (){
return cljs.core.reset_BANG_.call(null,time_elapsed,(cljs.core.deref.call(null,time_elapsed) + (1)));
});})(active_member,loading,time_elapsed,vec__51269,player_number,data))
,(1000)));
var players = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"players"], null));
var this_player = ((function (active_member,loading,time_elapsed,valami,players,vec__51269,player_number,data){
return (function (){
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (active_member,loading,time_elapsed,valami,players,vec__51269,player_number,data){
return (function (p1__51260_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__51260_SHARP_),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(data));
});})(active_member,loading,time_elapsed,valami,players,vec__51269,player_number,data))
,cljs.core.deref.call(null,players)));
});})(active_member,loading,time_elapsed,valami,players,vec__51269,player_number,data))
;
return ((function (active_member,loading,time_elapsed,valami,players,this_player,vec__51269,player_number,data){
return (function (system__$1,p__51272){
var vec__51273 = p__51272;
var player_number__$1 = cljs.core.nth.call(null,vec__51273,(0),null);
var data__$1 = cljs.core.nth.call(null,vec__51273,(1),null);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-remove.uk-animation-fade","div.uk-padding-remove.uk-animation-fade",1654815180),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1px solid white"], null),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(data__$1),cljs.core.deref.call(null,active_member)))?"uk-card-primary":"uk-card-secondary")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-small.uk-padding-remove-bottom","div.uk-padding-small.uk-padding-remove-bottom",-1972330897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(this_player.call(null))),cljs.core.str(" - "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this_player.call(null)))].join('')], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(data__$1))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-text-center","div.uk-text-center",-1334382774),[cljs.core.str(lvlup.crusader.dungeon.convert_time.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(data__$1)))),cljs.core.str(" - "),cljs.core.str(lvlup.crusader.dungeon.minute_to_money.call(null,cljs.core.deref.call(null,time_elapsed),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data__$1))),cljs.core.str(" Ft")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.uk-text-center.uk-padding-remove.uk-margin-remove","h3.uk-text-center.uk-padding-remove.uk-margin-remove",-1159920840),lvlup.crusader.dungeon.elapsing_time.call(null,cljs.core.deref.call(null,time_elapsed))], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.start_button,player_number__$1,system__$1,time_elapsed,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this_player.call(null))], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.modify_time,player_number__$1,system__$1,"-",time_elapsed,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this_player.call(null))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.modify_time,player_number__$1,system__$1,"+",time_elapsed,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this_player.call(null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.cancel,player_number__$1,system__$1,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this_player.call(null))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.pay_with_season_pass,player_number__$1,system__$1,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this_player.call(null)),cljs.core.deref.call(null,loading)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.pay,player_number__$1,system__$1,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this_player.call(null)),cljs.core.deref.call(null,loading)], null)], null);
});
;})(active_member,loading,time_elapsed,valami,players,this_player,vec__51269,player_number,data))
});
lvlup.crusader.dungeon.system = (function lvlup$crusader$dungeon$system(item){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (item__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.uk-width-1-5.valami.dropzone.dropzone2","li.uk-width-1-5.valami.dropzone.dropzone2",-1746359548),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(item__$1),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),0.91], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card.uk-card-secondary","div.uk-card.uk-card-secondary",725560384),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"5px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card-header.uk-padding-small","div.uk-card-header.uk-padding-small",-1952210389),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-grid-small.uk-flex-middle","div.uk-grid-small.uk-flex-middle",-831865867),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-auto","div.uk-width-auto",-1506646300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),(function (){var G__51279 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item__$1);
switch (G__51279) {
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
})(),new cljs.core.Keyword(null,"height","height",1025178622),"40",new cljs.core.Keyword(null,"width","width",-384071477),"40"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-expand","div.uk-width-expand",2031751938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.uk-card-title.uk-margin-remove-bottom.uk-text-truncate","h3.uk-card-title.uk-margin-remove-bottom.uk-text-truncate",-1609379787),[cljs.core.str(new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(item__$1)),cljs.core.str(" - "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item__$1))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.uk-text-meta.uk-margin-remove-top","p.uk-text-meta.uk-margin-remove-top",-506306409),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(item__$1)], null)], null)], null)], null),((cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(item__$1))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.uk-heading.uk-text-center","h3.uk-heading.uk-text-center",391565416),"Foglal\u00E1sok m\u00E1ra... Soon"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.masvalami.draggable","div.masvalami.draggable",829437924),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(item__$1),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"move"], null)], null),cljs.core.map_indexed.call(null,(function (p1__51277_SHARP_,p2__51276_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.player_playing,item__$1,p2__51276_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first.call(null,p2__51276_SHARP_)], null));
}),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(item__$1))], null))], null)], null);
})], null));
});
lvlup.crusader.dungeon.get_member_systems = (function lvlup$crusader$dungeon$get_member_systems(player){
var systems = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"system-map"], null));
return cljs.core.filter.call(null,((function (systems){
return (function (p1__51281_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(p1__51281_SHARP_));
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
return (function (p1__51282_SHARP_){
return (cljs.core.not_EQ_.call(null,null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__51282_SHARP_))) && (cljs.core.not_EQ_.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__51282_SHARP_)));
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
return (function (p1__51283_SHARP_){
return cljs.core._EQ_.call(null,p1__51283_SHARP_,data__$1);
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
return (function (p1__51285_SHARP_,p2__51284_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.player,p2__51284_SHARP_,p1__51285_SHARP_,(4)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__51284_SHARP_)], null));
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
return (function (p1__51286_SHARP_){
return cljs.core.some.call(null,((function (players,systems,invoices,get_member_data){
return (function (a){
return cljs.core._EQ_.call(null,a,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__51286_SHARP_));
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
return (function (p1__51288_SHARP_,p2__51287_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.player,p2__51287_SHARP_,p1__51288_SHARP_,(3)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__51287_SHARP_)], null));
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
return (function (p1__51289_SHARP_){
return cljs.core.some.call(null,((function (players,systems,get_players_playing){
return (function (a){
return cljs.core._EQ_.call(null,a,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__51289_SHARP_));
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
return (function (p1__51291_SHARP_,p2__51290_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.player,p2__51290_SHARP_,p1__51291_SHARP_,(2)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__51290_SHARP_)], null));
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
return (function (p1__51293_SHARP_,p2__51292_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.player,p2__51292_SHARP_,p1__51293_SHARP_,(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__51292_SHARP_)], null));
});})(players,systems,search,switched_member))
,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),((function (players,systems,search,switched_member){
return (function (p1__51294_SHARP_,p2__51295_SHARP_){
return (p1__51294_SHARP_ > p2__51295_SHARP_);
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
return (function (p1__51296_SHARP_){
return cljs.core.some.call(null,((function (systems,players,get_players_playing){
return (function (a){
return cljs.core._EQ_.call(null,a,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__51296_SHARP_));
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
return (function (p1__51298_SHARP_,p2__51297_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.system,p2__51297_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p2__51297_SHARP_)], null));
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
var vec__51304 = cljs.core.filter.call(null,((function (systems,system_name,member_id){
return (function (p1__51299_SHARP_){
return cljs.core._EQ_.call(null,system_name,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__51299_SHARP_));
});})(systems,system_name,member_id))
,cljs.core.deref.call(null,systems));
var filtered_system = cljs.core.nth.call(null,vec__51304,(0),null);
lvlup.crusader.dungeon.notification.call(null,[cljs.core.str(member_id),cljs.core.str(". -> "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(filtered_system))].join(''));

var G__51307 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system);
switch (G__51307) {
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
var vec__51317 = cljs.core.filter.call(null,((function (systems,system_name,other_system){
return (function (p1__51309_SHARP_){
return cljs.core._EQ_.call(null,system_name,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__51309_SHARP_));
});})(systems,system_name,other_system))
,cljs.core.deref.call(null,systems));
var filtered_system = cljs.core.nth.call(null,vec__51317,(0),null);
var vec__51320 = cljs.core.filter.call(null,((function (systems,system_name,other_system,vec__51317,filtered_system){
return (function (p1__51310_SHARP_){
return cljs.core._EQ_.call(null,other_system,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__51310_SHARP_));
});})(systems,system_name,other_system,vec__51317,filtered_system))
,cljs.core.deref.call(null,systems));
var filtered_system2 = cljs.core.nth.call(null,vec__51320,(0),null);
lvlup.crusader.dungeon.notification.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(filtered_system)),cljs.core.str(" <-> "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(filtered_system2))].join(''));

if(((cljs.core._EQ_.call(null,"pc",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system))) && (cljs.core._EQ_.call(null,"pc",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system2)))) || ((cljs.core._EQ_.call(null,"xbox",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system))) && (cljs.core._EQ_.call(null,"xbox",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system2)))) || ((cljs.core._EQ_.call(null,"ps",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system))) && (cljs.core._EQ_.call(null,"ps",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system2)))) || ((cljs.core._EQ_.call(null,"xbox",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system))) && (cljs.core._EQ_.call(null,"ps",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system2)))) || ((cljs.core._EQ_.call(null,"ps",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system))) && (cljs.core._EQ_.call(null,"xbox",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system2))))){
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system2))], null));

return lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system2,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system))], null));
} else {
return lvlup.crusader.dungeon.notification.call(null,"Csak k\u00E9t azonos t\u00EDpus\u00FA rendszert tudsz cser\u00E9lni!");
}
});
lvlup.crusader.dungeon.one_item = (function lvlup$crusader$dungeon$one_item(item,member){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),(30),new cljs.core.Keyword(null,"width","width",-384071477),(30),new cljs.core.Keyword(null,"src","src",-1651076051),(function (){var G__51324 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item);
switch (G__51324) {
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
return (function (p1__51326_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__51326_SHARP_),cljs.core.first.call(null,item));
});})(members,systems))
,cljs.core.deref.call(null,members))));
});})(members,systems))
;
return ((function (members,systems,member){
return (function (item__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"uk-width-1-2@s uk-width-1-2@m uk-width-1-3@l"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card.uk-card-secondary.uk-padding-remove.uk-dark","div.uk-card.uk-card-secondary.uk-padding-remove.uk-dark",-928433420),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opacity","opacity",397153780),0.87,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"10px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-small","div.uk-padding-small",1857323497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-float-right","div.uk-float-right",446370919),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.uk-margin-remove.uk-padding-remove.uk-text-right","h3.uk-margin-remove.uk-padding-remove.uk-text-right",-403492373),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),[cljs.core.str(cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"price","price",22129180),cljs.core.second.call(null,item__$1)))),cljs.core.str(" Ft ")].join('')], null),(cljs.core.truth_(lvlup.crusader.dungeon.plays_QMARK_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(member.call(null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.uk-padding-remove.uk-margin-remove.uk-float-right","h5.uk-padding-remove.uk-margin-remove.uk-float-right",-1121405685),"NEM J\u00C1TSZIK"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.uk-margin-remove.uk-padding-remove.uk-float-right","h5.uk-margin-remove.uk-padding-remove.uk-float-right",-739768631),"J\u00C1TSZIK M\u00C9G"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.uk-margin-remove.uk-text-truncate","h4.uk-margin-remove.uk-text-truncate",-813948027),[cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(member.call(null))),cljs.core.str(".- "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member.call(null)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.uk-margin-remove","h5.uk-margin-remove",1940144770),[cljs.core.str("B\u00E9rlet \u00F3r\u00E1k: "),cljs.core.str(new cljs.core.Keyword(null,"season-pass","season-pass",1518775969).cljs$core$IFn$_invoke$arity$1(member.call(null)))].join('')], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-divider-icon.uk-margin-small.uk-margin-remove-top","div.uk-divider-icon.uk-margin-small.uk-margin-remove-top",-1810725832)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-overflow-auto.uk-width-1-1","div.uk-overflow-auto.uk-width-1-1",-467337532),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"180px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.uk-width-1-1.uk-table-striped.uk-table.uk-table-middle","table.uk-width-1-1.uk-table-striped.uk-table.uk-table-middle",293470447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (members,systems,member){
return (function (p1__51328_SHARP_,p2__51327_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.one_item,p2__51327_SHARP_,member.call(null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p2__51327_SHARP_], null));
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
return (function (p1__51330_SHARP_,p2__51329_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.invoice,p2__51329_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p2__51329_SHARP_], null));
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
return (function (p1__51331_SHARP_){
return cljs.core.swap_BANG_.call(null,modify_atom,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),p1__51331_SHARP_.target.value);
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
return (function (p1__51332_SHARP_){
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-members","dungeon/get-members",188408482),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number","number",1570378438),(0),new cljs.core.Keyword(null,"search","search",1564939822),p1__51332_SHARP_.target.value], null)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-search-member","set-search-member",-293591708),p1__51332_SHARP_.target.value], null));
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
return (function (p1__51334_SHARP_,p2__51333_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.modify_member,p2__51333_SHARP_,p1__51334_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__51333_SHARP_)], null));
});})(members,search))
,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),((function (members,search){
return (function (p1__51335_SHARP_,p2__51336_SHARP_){
return (p1__51335_SHARP_ > p2__51336_SHARP_);
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
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),((cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sidenav_state),(4)))?"/Icons/waiting.svg":"/Icons/waiting-active.svg")], null)], null)], null)], null),(function (){var G__51339 = cljs.core.deref.call(null,sidenav_state);
switch (G__51339) {
case (1):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.uk-search.uk-search-large.uk-padding-small.uk-padding-remove-vertical","form.uk-search.uk-search-large.uk-padding-small.uk-padding-remove-vertical",-488520674),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.uk-search-input.uk-animation-slide-top","input.uk-search-input.uk-animation-slide-top",-386031068),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (G__51339,sidenav_state,number,search){
return (function (p1__51337_SHARP_){
cljs.core.reset_BANG_.call(null,number,(20));

lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-members","dungeon/get-members",188408482),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number","number",1570378438),(0),new cljs.core.Keyword(null,"search","search",1564939822),p1__51337_SHARP_.target.value], null)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-search-member","set-search-member",-293591708),p1__51337_SHARP_.target.value], null));
});})(G__51339,sidenav_state,number,search))
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