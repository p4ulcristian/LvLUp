// Compiled by ClojureScript 1.9.229 {}
goog.provide('lvlup.crusader.dungeon');
goog.require('cljs.core');
goog.require('lvlup.subs');
goog.require('taoensso.sente');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('goog.events.EventType');
goog.require('cljs.core.async');
goog.require('cljs_time.coerce');
goog.require('lvlup.sente');
goog.require('cljs_time.core');
goog.require('goog.events');
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
return cljs.core.doall.call(null,cljs.core.filter.call(null,(function (p1__83655_SHARP_){
var or__36776__auto__ = lvlup.crusader.dungeon.includes_QMARK_.call(null,lvlup.crusader.dungeon.lower.call(null,cljs.core.deref.call(null,search_term)),lvlup.crusader.dungeon.lower.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__83655_SHARP_)));
if(cljs.core.truth_(or__36776__auto__)){
return or__36776__auto__;
} else {
return cljs.core._EQ_.call(null,parseInt(cljs.core.deref.call(null,search_term)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__83655_SHARP_));
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
var type_price = (function (){var G__83657 = type;
switch (G__83657) {
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
var x__37107__auto__ = n;
var y__37108__auto__ = (- n);
return ((x__37107__auto__ > y__37108__auto__) ? x__37107__auto__ : y__37108__auto__);
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
return (function (p1__83659_SHARP_){
return cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__83659_SHARP_),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__83659_SHARP_));
});})(all_systems))
,cljs.core.deref.call(null,all_systems)));
var this_player_all_systems = cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (p1__83660_SHARP_){
return cljs.core._EQ_.call(null,parseInt(player_id),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__83660_SHARP_)))));
});})(all_systems,all_players))
,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (a){
return cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(a))),new cljs.core.Keyword(null,"member-id","member-id",606659713));
});})(all_systems,all_players))
,all_players))));
var this_player_systems = cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players,this_player_all_systems){
return (function (p1__83661_SHARP_){
return cljs.core._EQ_.call(null,parseInt(player_id),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__83661_SHARP_)))));
});})(all_systems,all_players,this_player_all_systems))
,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players,this_player_all_systems){
return (function (a){
return cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(a))),new cljs.core.Keyword(null,"start","start",-355208981));
});})(all_systems,all_players,this_player_all_systems))
,all_players))));
var seq__83724_83784 = cljs.core.seq.call(null,this_player_systems);
var chunk__83725_83785 = null;
var count__83726_83786 = (0);
var i__83727_83787 = (0);
while(true){
if((i__83727_83787 < count__83726_83786)){
var system_83788 = cljs.core._nth.call(null,chunk__83725_83785,i__83727_83787);
var number_83789 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system_83788);
var player_83790 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system_83788);
var vec__83728_83791 = cljs.core.filter.call(null,((function (seq__83724_83784,chunk__83725_83785,count__83726_83786,i__83727_83787,number_83789,player_83790,system_83788,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__83662_SHARP_){
return cljs.core._EQ_.call(null,number_83789,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__83662_SHARP_));
});})(seq__83724_83784,chunk__83725_83785,count__83726_83786,i__83727_83787,number_83789,player_83790,system_83788,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_83792 = cljs.core.nth.call(null,vec__83728_83791,(0),null);
var seq__83731_83793 = cljs.core.seq.call(null,player_83790);
var chunk__83732_83794 = null;
var count__83733_83795 = (0);
var i__83734_83796 = (0);
while(true){
if((i__83734_83796 < count__83733_83795)){
var vec__83735_83797 = cljs.core._nth.call(null,chunk__83732_83794,i__83734_83796);
var the_key_83798 = cljs.core.nth.call(null,vec__83735_83797,(0),null);
var place_83799 = cljs.core.nth.call(null,vec__83735_83797,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","add-invoice","dungeon/add-invoice",-1470910835),cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_83799),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place_83799),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id,new cljs.core.Keyword(null,"start","start",-355208981),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_83799)),new cljs.core.Keyword(null,"finish","finish",-586688046),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,[cljs.core.str(cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))].join('')),new cljs.core.Keyword(null,"price","price",22129180),lvlup.crusader.dungeon.minute_to_money.call(null,cljs_time.core.in_seconds.call(null,cljs_time.core.interval.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_83799)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_83799)))], null));

var G__83800 = seq__83731_83793;
var G__83801 = chunk__83732_83794;
var G__83802 = count__83733_83795;
var G__83803 = (i__83734_83796 + (1));
seq__83731_83793 = G__83800;
chunk__83732_83794 = G__83801;
count__83733_83795 = G__83802;
i__83734_83796 = G__83803;
continue;
} else {
var temp__4657__auto___83804 = cljs.core.seq.call(null,seq__83731_83793);
if(temp__4657__auto___83804){
var seq__83731_83805__$1 = temp__4657__auto___83804;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83731_83805__$1)){
var c__37587__auto___83806 = cljs.core.chunk_first.call(null,seq__83731_83805__$1);
var G__83807 = cljs.core.chunk_rest.call(null,seq__83731_83805__$1);
var G__83808 = c__37587__auto___83806;
var G__83809 = cljs.core.count.call(null,c__37587__auto___83806);
var G__83810 = (0);
seq__83731_83793 = G__83807;
chunk__83732_83794 = G__83808;
count__83733_83795 = G__83809;
i__83734_83796 = G__83810;
continue;
} else {
var vec__83738_83811 = cljs.core.first.call(null,seq__83731_83805__$1);
var the_key_83812 = cljs.core.nth.call(null,vec__83738_83811,(0),null);
var place_83813 = cljs.core.nth.call(null,vec__83738_83811,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","add-invoice","dungeon/add-invoice",-1470910835),cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_83813),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place_83813),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id,new cljs.core.Keyword(null,"start","start",-355208981),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_83813)),new cljs.core.Keyword(null,"finish","finish",-586688046),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,[cljs.core.str(cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))].join('')),new cljs.core.Keyword(null,"price","price",22129180),lvlup.crusader.dungeon.minute_to_money.call(null,cljs_time.core.in_seconds.call(null,cljs_time.core.interval.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_83813)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_83813)))], null));

var G__83814 = cljs.core.next.call(null,seq__83731_83805__$1);
var G__83815 = null;
var G__83816 = (0);
var G__83817 = (0);
seq__83731_83793 = G__83814;
chunk__83732_83794 = G__83815;
count__83733_83795 = G__83816;
i__83734_83796 = G__83817;
continue;
}
} else {
}
}
break;
}

var G__83818 = seq__83724_83784;
var G__83819 = chunk__83725_83785;
var G__83820 = count__83726_83786;
var G__83821 = (i__83727_83787 + (1));
seq__83724_83784 = G__83818;
chunk__83725_83785 = G__83819;
count__83726_83786 = G__83820;
i__83727_83787 = G__83821;
continue;
} else {
var temp__4657__auto___83822 = cljs.core.seq.call(null,seq__83724_83784);
if(temp__4657__auto___83822){
var seq__83724_83823__$1 = temp__4657__auto___83822;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83724_83823__$1)){
var c__37587__auto___83824 = cljs.core.chunk_first.call(null,seq__83724_83823__$1);
var G__83825 = cljs.core.chunk_rest.call(null,seq__83724_83823__$1);
var G__83826 = c__37587__auto___83824;
var G__83827 = cljs.core.count.call(null,c__37587__auto___83824);
var G__83828 = (0);
seq__83724_83784 = G__83825;
chunk__83725_83785 = G__83826;
count__83726_83786 = G__83827;
i__83727_83787 = G__83828;
continue;
} else {
var system_83829 = cljs.core.first.call(null,seq__83724_83823__$1);
var number_83830 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system_83829);
var player_83831 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system_83829);
var vec__83741_83832 = cljs.core.filter.call(null,((function (seq__83724_83784,chunk__83725_83785,count__83726_83786,i__83727_83787,number_83830,player_83831,system_83829,seq__83724_83823__$1,temp__4657__auto___83822,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__83662_SHARP_){
return cljs.core._EQ_.call(null,number_83830,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__83662_SHARP_));
});})(seq__83724_83784,chunk__83725_83785,count__83726_83786,i__83727_83787,number_83830,player_83831,system_83829,seq__83724_83823__$1,temp__4657__auto___83822,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_83833 = cljs.core.nth.call(null,vec__83741_83832,(0),null);
var seq__83744_83834 = cljs.core.seq.call(null,player_83831);
var chunk__83745_83835 = null;
var count__83746_83836 = (0);
var i__83747_83837 = (0);
while(true){
if((i__83747_83837 < count__83746_83836)){
var vec__83748_83838 = cljs.core._nth.call(null,chunk__83745_83835,i__83747_83837);
var the_key_83839 = cljs.core.nth.call(null,vec__83748_83838,(0),null);
var place_83840 = cljs.core.nth.call(null,vec__83748_83838,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","add-invoice","dungeon/add-invoice",-1470910835),cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_83840),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place_83840),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id,new cljs.core.Keyword(null,"start","start",-355208981),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_83840)),new cljs.core.Keyword(null,"finish","finish",-586688046),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,[cljs.core.str(cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))].join('')),new cljs.core.Keyword(null,"price","price",22129180),lvlup.crusader.dungeon.minute_to_money.call(null,cljs_time.core.in_seconds.call(null,cljs_time.core.interval.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_83840)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_83840)))], null));

var G__83841 = seq__83744_83834;
var G__83842 = chunk__83745_83835;
var G__83843 = count__83746_83836;
var G__83844 = (i__83747_83837 + (1));
seq__83744_83834 = G__83841;
chunk__83745_83835 = G__83842;
count__83746_83836 = G__83843;
i__83747_83837 = G__83844;
continue;
} else {
var temp__4657__auto___83845__$1 = cljs.core.seq.call(null,seq__83744_83834);
if(temp__4657__auto___83845__$1){
var seq__83744_83846__$1 = temp__4657__auto___83845__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83744_83846__$1)){
var c__37587__auto___83847 = cljs.core.chunk_first.call(null,seq__83744_83846__$1);
var G__83848 = cljs.core.chunk_rest.call(null,seq__83744_83846__$1);
var G__83849 = c__37587__auto___83847;
var G__83850 = cljs.core.count.call(null,c__37587__auto___83847);
var G__83851 = (0);
seq__83744_83834 = G__83848;
chunk__83745_83835 = G__83849;
count__83746_83836 = G__83850;
i__83747_83837 = G__83851;
continue;
} else {
var vec__83751_83852 = cljs.core.first.call(null,seq__83744_83846__$1);
var the_key_83853 = cljs.core.nth.call(null,vec__83751_83852,(0),null);
var place_83854 = cljs.core.nth.call(null,vec__83751_83852,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","add-invoice","dungeon/add-invoice",-1470910835),cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_83854),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place_83854),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id,new cljs.core.Keyword(null,"start","start",-355208981),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_83854)),new cljs.core.Keyword(null,"finish","finish",-586688046),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,[cljs.core.str(cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))].join('')),new cljs.core.Keyword(null,"price","price",22129180),lvlup.crusader.dungeon.minute_to_money.call(null,cljs_time.core.in_seconds.call(null,cljs_time.core.interval.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_83854)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_83854)))], null));

var G__83855 = cljs.core.next.call(null,seq__83744_83846__$1);
var G__83856 = null;
var G__83857 = (0);
var G__83858 = (0);
seq__83744_83834 = G__83855;
chunk__83745_83835 = G__83856;
count__83746_83836 = G__83857;
i__83747_83837 = G__83858;
continue;
}
} else {
}
}
break;
}

var G__83859 = cljs.core.next.call(null,seq__83724_83823__$1);
var G__83860 = null;
var G__83861 = (0);
var G__83862 = (0);
seq__83724_83784 = G__83859;
chunk__83725_83785 = G__83860;
count__83726_83786 = G__83861;
i__83727_83787 = G__83862;
continue;
}
} else {
}
}
break;
}

lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-members-with-id","dungeon/get-members-with-id",-1097562328),cljs.core.vec.call(null,player_id)], null));

var seq__83754 = cljs.core.seq.call(null,this_player_all_systems);
var chunk__83755 = null;
var count__83756 = (0);
var i__83757 = (0);
while(true){
if((i__83757 < count__83756)){
var system = cljs.core._nth.call(null,chunk__83755,i__83757);
var number_83863 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system);
var player_83864 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system);
var vec__83758_83865 = cljs.core.filter.call(null,((function (seq__83754,chunk__83755,count__83756,i__83757,number_83863,player_83864,system,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__83663_SHARP_){
return cljs.core._EQ_.call(null,number_83863,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__83663_SHARP_));
});})(seq__83754,chunk__83755,count__83756,i__83757,number_83863,player_83864,system,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_83866 = cljs.core.nth.call(null,vec__83758_83865,(0),null);
var seq__83761_83867 = cljs.core.seq.call(null,player_83864);
var chunk__83762_83868 = null;
var count__83763_83869 = (0);
var i__83764_83870 = (0);
while(true){
if((i__83764_83870 < count__83763_83869)){
var vec__83765_83871 = cljs.core._nth.call(null,chunk__83762_83868,i__83764_83870);
var the_key_83872 = cljs.core.nth.call(null,vec__83765_83871,(0),null);
var place_83873 = cljs.core.nth.call(null,vec__83765_83871,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_83866,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_83866),the_key_83872))], null));

var G__83874 = seq__83761_83867;
var G__83875 = chunk__83762_83868;
var G__83876 = count__83763_83869;
var G__83877 = (i__83764_83870 + (1));
seq__83761_83867 = G__83874;
chunk__83762_83868 = G__83875;
count__83763_83869 = G__83876;
i__83764_83870 = G__83877;
continue;
} else {
var temp__4657__auto___83878 = cljs.core.seq.call(null,seq__83761_83867);
if(temp__4657__auto___83878){
var seq__83761_83879__$1 = temp__4657__auto___83878;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83761_83879__$1)){
var c__37587__auto___83880 = cljs.core.chunk_first.call(null,seq__83761_83879__$1);
var G__83881 = cljs.core.chunk_rest.call(null,seq__83761_83879__$1);
var G__83882 = c__37587__auto___83880;
var G__83883 = cljs.core.count.call(null,c__37587__auto___83880);
var G__83884 = (0);
seq__83761_83867 = G__83881;
chunk__83762_83868 = G__83882;
count__83763_83869 = G__83883;
i__83764_83870 = G__83884;
continue;
} else {
var vec__83768_83885 = cljs.core.first.call(null,seq__83761_83879__$1);
var the_key_83886 = cljs.core.nth.call(null,vec__83768_83885,(0),null);
var place_83887 = cljs.core.nth.call(null,vec__83768_83885,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_83866,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_83866),the_key_83886))], null));

var G__83888 = cljs.core.next.call(null,seq__83761_83879__$1);
var G__83889 = null;
var G__83890 = (0);
var G__83891 = (0);
seq__83761_83867 = G__83888;
chunk__83762_83868 = G__83889;
count__83763_83869 = G__83890;
i__83764_83870 = G__83891;
continue;
}
} else {
}
}
break;
}

var G__83892 = seq__83754;
var G__83893 = chunk__83755;
var G__83894 = count__83756;
var G__83895 = (i__83757 + (1));
seq__83754 = G__83892;
chunk__83755 = G__83893;
count__83756 = G__83894;
i__83757 = G__83895;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__83754);
if(temp__4657__auto__){
var seq__83754__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83754__$1)){
var c__37587__auto__ = cljs.core.chunk_first.call(null,seq__83754__$1);
var G__83896 = cljs.core.chunk_rest.call(null,seq__83754__$1);
var G__83897 = c__37587__auto__;
var G__83898 = cljs.core.count.call(null,c__37587__auto__);
var G__83899 = (0);
seq__83754 = G__83896;
chunk__83755 = G__83897;
count__83756 = G__83898;
i__83757 = G__83899;
continue;
} else {
var system = cljs.core.first.call(null,seq__83754__$1);
var number_83900 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system);
var player_83901 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system);
var vec__83771_83902 = cljs.core.filter.call(null,((function (seq__83754,chunk__83755,count__83756,i__83757,number_83900,player_83901,system,seq__83754__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__83663_SHARP_){
return cljs.core._EQ_.call(null,number_83900,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__83663_SHARP_));
});})(seq__83754,chunk__83755,count__83756,i__83757,number_83900,player_83901,system,seq__83754__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_83903 = cljs.core.nth.call(null,vec__83771_83902,(0),null);
var seq__83774_83904 = cljs.core.seq.call(null,player_83901);
var chunk__83775_83905 = null;
var count__83776_83906 = (0);
var i__83777_83907 = (0);
while(true){
if((i__83777_83907 < count__83776_83906)){
var vec__83778_83908 = cljs.core._nth.call(null,chunk__83775_83905,i__83777_83907);
var the_key_83909 = cljs.core.nth.call(null,vec__83778_83908,(0),null);
var place_83910 = cljs.core.nth.call(null,vec__83778_83908,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_83903,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_83903),the_key_83909))], null));

var G__83911 = seq__83774_83904;
var G__83912 = chunk__83775_83905;
var G__83913 = count__83776_83906;
var G__83914 = (i__83777_83907 + (1));
seq__83774_83904 = G__83911;
chunk__83775_83905 = G__83912;
count__83776_83906 = G__83913;
i__83777_83907 = G__83914;
continue;
} else {
var temp__4657__auto___83915__$1 = cljs.core.seq.call(null,seq__83774_83904);
if(temp__4657__auto___83915__$1){
var seq__83774_83916__$1 = temp__4657__auto___83915__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83774_83916__$1)){
var c__37587__auto___83917 = cljs.core.chunk_first.call(null,seq__83774_83916__$1);
var G__83918 = cljs.core.chunk_rest.call(null,seq__83774_83916__$1);
var G__83919 = c__37587__auto___83917;
var G__83920 = cljs.core.count.call(null,c__37587__auto___83917);
var G__83921 = (0);
seq__83774_83904 = G__83918;
chunk__83775_83905 = G__83919;
count__83776_83906 = G__83920;
i__83777_83907 = G__83921;
continue;
} else {
var vec__83781_83922 = cljs.core.first.call(null,seq__83774_83916__$1);
var the_key_83923 = cljs.core.nth.call(null,vec__83781_83922,(0),null);
var place_83924 = cljs.core.nth.call(null,vec__83781_83922,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_83903,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_83903),the_key_83923))], null));

var G__83925 = cljs.core.next.call(null,seq__83774_83916__$1);
var G__83926 = null;
var G__83927 = (0);
var G__83928 = (0);
seq__83774_83904 = G__83925;
chunk__83775_83905 = G__83926;
count__83776_83906 = G__83927;
i__83777_83907 = G__83928;
continue;
}
} else {
}
}
break;
}

var G__83929 = cljs.core.next.call(null,seq__83754__$1);
var G__83930 = null;
var G__83931 = (0);
var G__83932 = (0);
seq__83754 = G__83929;
chunk__83755 = G__83930;
count__83756 = G__83931;
i__83757 = G__83932;
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
return (function (p1__83933_SHARP_){
return new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__83933_SHARP_);
});})(all_systems))
,cljs.core.deref.call(null,all_systems)));
var this_player_systems = cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (p1__83934_SHARP_){
return cljs.core._EQ_.call(null,parseInt(player_id),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(p1__83934_SHARP_));
});})(all_systems,all_players))
,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (a){
return cljs.core.contains_QMARK_.call(null,a,new cljs.core.Keyword(null,"start","start",-355208981));
});})(all_systems,all_players))
,cljs.core.map.call(null,((function (all_systems,all_players){
return (function (p1__83935_SHARP_){
return cljs.core.second.call(null,cljs.core.first.call(null,p1__83935_SHARP_));
});})(all_systems,all_players))
,all_players)))));
var total_price = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (all_systems,all_players,this_player_systems){
return (function (p1__83936_SHARP_){
return lvlup.crusader.dungeon.count_time_halves.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(p1__83936_SHARP_)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))));
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
return (function (p1__83937_SHARP_){
return cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__83937_SHARP_),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__83937_SHARP_));
});})(all_systems))
,cljs.core.deref.call(null,all_systems)));
var this_player_all_systems = cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (p1__83938_SHARP_){
return cljs.core._EQ_.call(null,parseInt(player_id),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__83938_SHARP_)))));
});})(all_systems,all_players))
,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (a){
return cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(a))),new cljs.core.Keyword(null,"member-id","member-id",606659713));
});})(all_systems,all_players))
,all_players))));
var this_player_systems = cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players,this_player_all_systems){
return (function (p1__83939_SHARP_){
return cljs.core._EQ_.call(null,parseInt(player_id),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__83939_SHARP_)))));
});})(all_systems,all_players,this_player_all_systems))
,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players,this_player_all_systems){
return (function (a){
return cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(a))),new cljs.core.Keyword(null,"start","start",-355208981));
});})(all_systems,all_players,this_player_all_systems))
,all_players))));
console.log([cljs.core.str("wtf: "),cljs.core.str(all_players)].join(''));

var seq__84032 = cljs.core.seq.call(null,this_player_systems);
var chunk__84033 = null;
var count__84034 = (0);
var i__84035 = (0);
while(true){
if((i__84035 < count__84034)){
var system = cljs.core._nth.call(null,chunk__84033,i__84035);
var number_84122 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system);
var player_84123 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system);
var vec__84036_84124 = cljs.core.filter.call(null,((function (seq__84032,chunk__84033,count__84034,i__84035,number_84122,player_84123,system,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__83940_SHARP_){
return cljs.core._EQ_.call(null,number_84122,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__83940_SHARP_));
});})(seq__84032,chunk__84033,count__84034,i__84035,number_84122,player_84123,system,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_84125 = cljs.core.nth.call(null,vec__84036_84124,(0),null);
var seq__84039_84126 = cljs.core.seq.call(null,player_84123);
var chunk__84040_84127 = null;
var count__84041_84128 = (0);
var i__84042_84129 = (0);
while(true){
if((i__84042_84129 < count__84041_84128)){
var vec__84043_84130 = cljs.core._nth.call(null,chunk__84040_84127,i__84042_84129);
var the_key_84131 = cljs.core.nth.call(null,vec__84043_84130,(0),null);
var place_84132 = cljs.core.nth.call(null,vec__84043_84130,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","season-pass","dungeon/season-pass",-766369009),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"quantity","quantity",-1929050694),((-1) * lvlup.crusader.dungeon.all_items_to_hours.call(null,player_id)),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id], null)], null));

var G__84133 = seq__84039_84126;
var G__84134 = chunk__84040_84127;
var G__84135 = count__84041_84128;
var G__84136 = (i__84042_84129 + (1));
seq__84039_84126 = G__84133;
chunk__84040_84127 = G__84134;
count__84041_84128 = G__84135;
i__84042_84129 = G__84136;
continue;
} else {
var temp__4657__auto___84137 = cljs.core.seq.call(null,seq__84039_84126);
if(temp__4657__auto___84137){
var seq__84039_84138__$1 = temp__4657__auto___84137;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__84039_84138__$1)){
var c__37587__auto___84139 = cljs.core.chunk_first.call(null,seq__84039_84138__$1);
var G__84140 = cljs.core.chunk_rest.call(null,seq__84039_84138__$1);
var G__84141 = c__37587__auto___84139;
var G__84142 = cljs.core.count.call(null,c__37587__auto___84139);
var G__84143 = (0);
seq__84039_84126 = G__84140;
chunk__84040_84127 = G__84141;
count__84041_84128 = G__84142;
i__84042_84129 = G__84143;
continue;
} else {
var vec__84046_84144 = cljs.core.first.call(null,seq__84039_84138__$1);
var the_key_84145 = cljs.core.nth.call(null,vec__84046_84144,(0),null);
var place_84146 = cljs.core.nth.call(null,vec__84046_84144,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","season-pass","dungeon/season-pass",-766369009),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"quantity","quantity",-1929050694),((-1) * lvlup.crusader.dungeon.all_items_to_hours.call(null,player_id)),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id], null)], null));

var G__84147 = cljs.core.next.call(null,seq__84039_84138__$1);
var G__84148 = null;
var G__84149 = (0);
var G__84150 = (0);
seq__84039_84126 = G__84147;
chunk__84040_84127 = G__84148;
count__84041_84128 = G__84149;
i__84042_84129 = G__84150;
continue;
}
} else {
}
}
break;
}

var seq__84049_84151 = cljs.core.seq.call(null,this_player_all_systems);
var chunk__84050_84152 = null;
var count__84051_84153 = (0);
var i__84052_84154 = (0);
while(true){
if((i__84052_84154 < count__84051_84153)){
var system_84155__$1 = cljs.core._nth.call(null,chunk__84050_84152,i__84052_84154);
var number_84156__$1 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system_84155__$1);
var player_84157__$1 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system_84155__$1);
var vec__84053_84158 = cljs.core.filter.call(null,((function (seq__84049_84151,chunk__84050_84152,count__84051_84153,i__84052_84154,seq__84032,chunk__84033,count__84034,i__84035,number_84156__$1,player_84157__$1,system_84155__$1,number_84122,player_84123,vec__84036_84124,filtered_system_84125,system,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__83941_SHARP_){
return cljs.core._EQ_.call(null,number_84156__$1,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__83941_SHARP_));
});})(seq__84049_84151,chunk__84050_84152,count__84051_84153,i__84052_84154,seq__84032,chunk__84033,count__84034,i__84035,number_84156__$1,player_84157__$1,system_84155__$1,number_84122,player_84123,vec__84036_84124,filtered_system_84125,system,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_84159__$1 = cljs.core.nth.call(null,vec__84053_84158,(0),null);
var seq__84056_84160 = cljs.core.seq.call(null,player_84157__$1);
var chunk__84057_84161 = null;
var count__84058_84162 = (0);
var i__84059_84163 = (0);
while(true){
if((i__84059_84163 < count__84058_84162)){
var vec__84060_84164 = cljs.core._nth.call(null,chunk__84057_84161,i__84059_84163);
var the_key_84165 = cljs.core.nth.call(null,vec__84060_84164,(0),null);
var place_84166 = cljs.core.nth.call(null,vec__84060_84164,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_84159__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_84159__$1),the_key_84165))], null));

var G__84167 = seq__84056_84160;
var G__84168 = chunk__84057_84161;
var G__84169 = count__84058_84162;
var G__84170 = (i__84059_84163 + (1));
seq__84056_84160 = G__84167;
chunk__84057_84161 = G__84168;
count__84058_84162 = G__84169;
i__84059_84163 = G__84170;
continue;
} else {
var temp__4657__auto___84171 = cljs.core.seq.call(null,seq__84056_84160);
if(temp__4657__auto___84171){
var seq__84056_84172__$1 = temp__4657__auto___84171;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__84056_84172__$1)){
var c__37587__auto___84173 = cljs.core.chunk_first.call(null,seq__84056_84172__$1);
var G__84174 = cljs.core.chunk_rest.call(null,seq__84056_84172__$1);
var G__84175 = c__37587__auto___84173;
var G__84176 = cljs.core.count.call(null,c__37587__auto___84173);
var G__84177 = (0);
seq__84056_84160 = G__84174;
chunk__84057_84161 = G__84175;
count__84058_84162 = G__84176;
i__84059_84163 = G__84177;
continue;
} else {
var vec__84063_84178 = cljs.core.first.call(null,seq__84056_84172__$1);
var the_key_84179 = cljs.core.nth.call(null,vec__84063_84178,(0),null);
var place_84180 = cljs.core.nth.call(null,vec__84063_84178,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_84159__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_84159__$1),the_key_84179))], null));

var G__84181 = cljs.core.next.call(null,seq__84056_84172__$1);
var G__84182 = null;
var G__84183 = (0);
var G__84184 = (0);
seq__84056_84160 = G__84181;
chunk__84057_84161 = G__84182;
count__84058_84162 = G__84183;
i__84059_84163 = G__84184;
continue;
}
} else {
}
}
break;
}

var G__84185 = seq__84049_84151;
var G__84186 = chunk__84050_84152;
var G__84187 = count__84051_84153;
var G__84188 = (i__84052_84154 + (1));
seq__84049_84151 = G__84185;
chunk__84050_84152 = G__84186;
count__84051_84153 = G__84187;
i__84052_84154 = G__84188;
continue;
} else {
var temp__4657__auto___84189 = cljs.core.seq.call(null,seq__84049_84151);
if(temp__4657__auto___84189){
var seq__84049_84190__$1 = temp__4657__auto___84189;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__84049_84190__$1)){
var c__37587__auto___84191 = cljs.core.chunk_first.call(null,seq__84049_84190__$1);
var G__84192 = cljs.core.chunk_rest.call(null,seq__84049_84190__$1);
var G__84193 = c__37587__auto___84191;
var G__84194 = cljs.core.count.call(null,c__37587__auto___84191);
var G__84195 = (0);
seq__84049_84151 = G__84192;
chunk__84050_84152 = G__84193;
count__84051_84153 = G__84194;
i__84052_84154 = G__84195;
continue;
} else {
var system_84196__$1 = cljs.core.first.call(null,seq__84049_84190__$1);
var number_84197__$1 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system_84196__$1);
var player_84198__$1 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system_84196__$1);
var vec__84066_84199 = cljs.core.filter.call(null,((function (seq__84049_84151,chunk__84050_84152,count__84051_84153,i__84052_84154,seq__84032,chunk__84033,count__84034,i__84035,number_84197__$1,player_84198__$1,system_84196__$1,seq__84049_84190__$1,temp__4657__auto___84189,number_84122,player_84123,vec__84036_84124,filtered_system_84125,system,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__83941_SHARP_){
return cljs.core._EQ_.call(null,number_84197__$1,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__83941_SHARP_));
});})(seq__84049_84151,chunk__84050_84152,count__84051_84153,i__84052_84154,seq__84032,chunk__84033,count__84034,i__84035,number_84197__$1,player_84198__$1,system_84196__$1,seq__84049_84190__$1,temp__4657__auto___84189,number_84122,player_84123,vec__84036_84124,filtered_system_84125,system,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_84200__$1 = cljs.core.nth.call(null,vec__84066_84199,(0),null);
var seq__84069_84201 = cljs.core.seq.call(null,player_84198__$1);
var chunk__84070_84202 = null;
var count__84071_84203 = (0);
var i__84072_84204 = (0);
while(true){
if((i__84072_84204 < count__84071_84203)){
var vec__84073_84205 = cljs.core._nth.call(null,chunk__84070_84202,i__84072_84204);
var the_key_84206 = cljs.core.nth.call(null,vec__84073_84205,(0),null);
var place_84207 = cljs.core.nth.call(null,vec__84073_84205,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_84200__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_84200__$1),the_key_84206))], null));

var G__84208 = seq__84069_84201;
var G__84209 = chunk__84070_84202;
var G__84210 = count__84071_84203;
var G__84211 = (i__84072_84204 + (1));
seq__84069_84201 = G__84208;
chunk__84070_84202 = G__84209;
count__84071_84203 = G__84210;
i__84072_84204 = G__84211;
continue;
} else {
var temp__4657__auto___84212__$1 = cljs.core.seq.call(null,seq__84069_84201);
if(temp__4657__auto___84212__$1){
var seq__84069_84213__$1 = temp__4657__auto___84212__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__84069_84213__$1)){
var c__37587__auto___84214 = cljs.core.chunk_first.call(null,seq__84069_84213__$1);
var G__84215 = cljs.core.chunk_rest.call(null,seq__84069_84213__$1);
var G__84216 = c__37587__auto___84214;
var G__84217 = cljs.core.count.call(null,c__37587__auto___84214);
var G__84218 = (0);
seq__84069_84201 = G__84215;
chunk__84070_84202 = G__84216;
count__84071_84203 = G__84217;
i__84072_84204 = G__84218;
continue;
} else {
var vec__84076_84219 = cljs.core.first.call(null,seq__84069_84213__$1);
var the_key_84220 = cljs.core.nth.call(null,vec__84076_84219,(0),null);
var place_84221 = cljs.core.nth.call(null,vec__84076_84219,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_84200__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_84200__$1),the_key_84220))], null));

var G__84222 = cljs.core.next.call(null,seq__84069_84213__$1);
var G__84223 = null;
var G__84224 = (0);
var G__84225 = (0);
seq__84069_84201 = G__84222;
chunk__84070_84202 = G__84223;
count__84071_84203 = G__84224;
i__84072_84204 = G__84225;
continue;
}
} else {
}
}
break;
}

var G__84226 = cljs.core.next.call(null,seq__84049_84190__$1);
var G__84227 = null;
var G__84228 = (0);
var G__84229 = (0);
seq__84049_84151 = G__84226;
chunk__84050_84152 = G__84227;
count__84051_84153 = G__84228;
i__84052_84154 = G__84229;
continue;
}
} else {
}
}
break;
}

var G__84230 = seq__84032;
var G__84231 = chunk__84033;
var G__84232 = count__84034;
var G__84233 = (i__84035 + (1));
seq__84032 = G__84230;
chunk__84033 = G__84231;
count__84034 = G__84232;
i__84035 = G__84233;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__84032);
if(temp__4657__auto__){
var seq__84032__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__84032__$1)){
var c__37587__auto__ = cljs.core.chunk_first.call(null,seq__84032__$1);
var G__84234 = cljs.core.chunk_rest.call(null,seq__84032__$1);
var G__84235 = c__37587__auto__;
var G__84236 = cljs.core.count.call(null,c__37587__auto__);
var G__84237 = (0);
seq__84032 = G__84234;
chunk__84033 = G__84235;
count__84034 = G__84236;
i__84035 = G__84237;
continue;
} else {
var system = cljs.core.first.call(null,seq__84032__$1);
var number_84238 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system);
var player_84239 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system);
var vec__84079_84240 = cljs.core.filter.call(null,((function (seq__84032,chunk__84033,count__84034,i__84035,number_84238,player_84239,system,seq__84032__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__83940_SHARP_){
return cljs.core._EQ_.call(null,number_84238,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__83940_SHARP_));
});})(seq__84032,chunk__84033,count__84034,i__84035,number_84238,player_84239,system,seq__84032__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_84241 = cljs.core.nth.call(null,vec__84079_84240,(0),null);
var seq__84082_84242 = cljs.core.seq.call(null,player_84239);
var chunk__84083_84243 = null;
var count__84084_84244 = (0);
var i__84085_84245 = (0);
while(true){
if((i__84085_84245 < count__84084_84244)){
var vec__84086_84246 = cljs.core._nth.call(null,chunk__84083_84243,i__84085_84245);
var the_key_84247 = cljs.core.nth.call(null,vec__84086_84246,(0),null);
var place_84248 = cljs.core.nth.call(null,vec__84086_84246,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","season-pass","dungeon/season-pass",-766369009),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"quantity","quantity",-1929050694),((-1) * lvlup.crusader.dungeon.all_items_to_hours.call(null,player_id)),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id], null)], null));

var G__84249 = seq__84082_84242;
var G__84250 = chunk__84083_84243;
var G__84251 = count__84084_84244;
var G__84252 = (i__84085_84245 + (1));
seq__84082_84242 = G__84249;
chunk__84083_84243 = G__84250;
count__84084_84244 = G__84251;
i__84085_84245 = G__84252;
continue;
} else {
var temp__4657__auto___84253__$1 = cljs.core.seq.call(null,seq__84082_84242);
if(temp__4657__auto___84253__$1){
var seq__84082_84254__$1 = temp__4657__auto___84253__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__84082_84254__$1)){
var c__37587__auto___84255 = cljs.core.chunk_first.call(null,seq__84082_84254__$1);
var G__84256 = cljs.core.chunk_rest.call(null,seq__84082_84254__$1);
var G__84257 = c__37587__auto___84255;
var G__84258 = cljs.core.count.call(null,c__37587__auto___84255);
var G__84259 = (0);
seq__84082_84242 = G__84256;
chunk__84083_84243 = G__84257;
count__84084_84244 = G__84258;
i__84085_84245 = G__84259;
continue;
} else {
var vec__84089_84260 = cljs.core.first.call(null,seq__84082_84254__$1);
var the_key_84261 = cljs.core.nth.call(null,vec__84089_84260,(0),null);
var place_84262 = cljs.core.nth.call(null,vec__84089_84260,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","season-pass","dungeon/season-pass",-766369009),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"quantity","quantity",-1929050694),((-1) * lvlup.crusader.dungeon.all_items_to_hours.call(null,player_id)),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id], null)], null));

var G__84263 = cljs.core.next.call(null,seq__84082_84254__$1);
var G__84264 = null;
var G__84265 = (0);
var G__84266 = (0);
seq__84082_84242 = G__84263;
chunk__84083_84243 = G__84264;
count__84084_84244 = G__84265;
i__84085_84245 = G__84266;
continue;
}
} else {
}
}
break;
}

var seq__84092_84267 = cljs.core.seq.call(null,this_player_all_systems);
var chunk__84093_84268 = null;
var count__84094_84269 = (0);
var i__84095_84270 = (0);
while(true){
if((i__84095_84270 < count__84094_84269)){
var system_84271__$1 = cljs.core._nth.call(null,chunk__84093_84268,i__84095_84270);
var number_84272__$1 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system_84271__$1);
var player_84273__$1 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system_84271__$1);
var vec__84096_84274 = cljs.core.filter.call(null,((function (seq__84092_84267,chunk__84093_84268,count__84094_84269,i__84095_84270,seq__84032,chunk__84033,count__84034,i__84035,number_84272__$1,player_84273__$1,system_84271__$1,number_84238,player_84239,vec__84079_84240,filtered_system_84241,system,seq__84032__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__83941_SHARP_){
return cljs.core._EQ_.call(null,number_84272__$1,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__83941_SHARP_));
});})(seq__84092_84267,chunk__84093_84268,count__84094_84269,i__84095_84270,seq__84032,chunk__84033,count__84034,i__84035,number_84272__$1,player_84273__$1,system_84271__$1,number_84238,player_84239,vec__84079_84240,filtered_system_84241,system,seq__84032__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_84275__$1 = cljs.core.nth.call(null,vec__84096_84274,(0),null);
var seq__84099_84276 = cljs.core.seq.call(null,player_84273__$1);
var chunk__84100_84277 = null;
var count__84101_84278 = (0);
var i__84102_84279 = (0);
while(true){
if((i__84102_84279 < count__84101_84278)){
var vec__84103_84280 = cljs.core._nth.call(null,chunk__84100_84277,i__84102_84279);
var the_key_84281 = cljs.core.nth.call(null,vec__84103_84280,(0),null);
var place_84282 = cljs.core.nth.call(null,vec__84103_84280,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_84275__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_84275__$1),the_key_84281))], null));

var G__84283 = seq__84099_84276;
var G__84284 = chunk__84100_84277;
var G__84285 = count__84101_84278;
var G__84286 = (i__84102_84279 + (1));
seq__84099_84276 = G__84283;
chunk__84100_84277 = G__84284;
count__84101_84278 = G__84285;
i__84102_84279 = G__84286;
continue;
} else {
var temp__4657__auto___84287__$1 = cljs.core.seq.call(null,seq__84099_84276);
if(temp__4657__auto___84287__$1){
var seq__84099_84288__$1 = temp__4657__auto___84287__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__84099_84288__$1)){
var c__37587__auto___84289 = cljs.core.chunk_first.call(null,seq__84099_84288__$1);
var G__84290 = cljs.core.chunk_rest.call(null,seq__84099_84288__$1);
var G__84291 = c__37587__auto___84289;
var G__84292 = cljs.core.count.call(null,c__37587__auto___84289);
var G__84293 = (0);
seq__84099_84276 = G__84290;
chunk__84100_84277 = G__84291;
count__84101_84278 = G__84292;
i__84102_84279 = G__84293;
continue;
} else {
var vec__84106_84294 = cljs.core.first.call(null,seq__84099_84288__$1);
var the_key_84295 = cljs.core.nth.call(null,vec__84106_84294,(0),null);
var place_84296 = cljs.core.nth.call(null,vec__84106_84294,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_84275__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_84275__$1),the_key_84295))], null));

var G__84297 = cljs.core.next.call(null,seq__84099_84288__$1);
var G__84298 = null;
var G__84299 = (0);
var G__84300 = (0);
seq__84099_84276 = G__84297;
chunk__84100_84277 = G__84298;
count__84101_84278 = G__84299;
i__84102_84279 = G__84300;
continue;
}
} else {
}
}
break;
}

var G__84301 = seq__84092_84267;
var G__84302 = chunk__84093_84268;
var G__84303 = count__84094_84269;
var G__84304 = (i__84095_84270 + (1));
seq__84092_84267 = G__84301;
chunk__84093_84268 = G__84302;
count__84094_84269 = G__84303;
i__84095_84270 = G__84304;
continue;
} else {
var temp__4657__auto___84305__$1 = cljs.core.seq.call(null,seq__84092_84267);
if(temp__4657__auto___84305__$1){
var seq__84092_84306__$1 = temp__4657__auto___84305__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__84092_84306__$1)){
var c__37587__auto___84307 = cljs.core.chunk_first.call(null,seq__84092_84306__$1);
var G__84308 = cljs.core.chunk_rest.call(null,seq__84092_84306__$1);
var G__84309 = c__37587__auto___84307;
var G__84310 = cljs.core.count.call(null,c__37587__auto___84307);
var G__84311 = (0);
seq__84092_84267 = G__84308;
chunk__84093_84268 = G__84309;
count__84094_84269 = G__84310;
i__84095_84270 = G__84311;
continue;
} else {
var system_84312__$1 = cljs.core.first.call(null,seq__84092_84306__$1);
var number_84313__$1 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system_84312__$1);
var player_84314__$1 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system_84312__$1);
var vec__84109_84315 = cljs.core.filter.call(null,((function (seq__84092_84267,chunk__84093_84268,count__84094_84269,i__84095_84270,seq__84032,chunk__84033,count__84034,i__84035,number_84313__$1,player_84314__$1,system_84312__$1,seq__84092_84306__$1,temp__4657__auto___84305__$1,number_84238,player_84239,vec__84079_84240,filtered_system_84241,system,seq__84032__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__83941_SHARP_){
return cljs.core._EQ_.call(null,number_84313__$1,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__83941_SHARP_));
});})(seq__84092_84267,chunk__84093_84268,count__84094_84269,i__84095_84270,seq__84032,chunk__84033,count__84034,i__84035,number_84313__$1,player_84314__$1,system_84312__$1,seq__84092_84306__$1,temp__4657__auto___84305__$1,number_84238,player_84239,vec__84079_84240,filtered_system_84241,system,seq__84032__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_84316__$1 = cljs.core.nth.call(null,vec__84109_84315,(0),null);
var seq__84112_84317 = cljs.core.seq.call(null,player_84314__$1);
var chunk__84113_84318 = null;
var count__84114_84319 = (0);
var i__84115_84320 = (0);
while(true){
if((i__84115_84320 < count__84114_84319)){
var vec__84116_84321 = cljs.core._nth.call(null,chunk__84113_84318,i__84115_84320);
var the_key_84322 = cljs.core.nth.call(null,vec__84116_84321,(0),null);
var place_84323 = cljs.core.nth.call(null,vec__84116_84321,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_84316__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_84316__$1),the_key_84322))], null));

var G__84324 = seq__84112_84317;
var G__84325 = chunk__84113_84318;
var G__84326 = count__84114_84319;
var G__84327 = (i__84115_84320 + (1));
seq__84112_84317 = G__84324;
chunk__84113_84318 = G__84325;
count__84114_84319 = G__84326;
i__84115_84320 = G__84327;
continue;
} else {
var temp__4657__auto___84328__$2 = cljs.core.seq.call(null,seq__84112_84317);
if(temp__4657__auto___84328__$2){
var seq__84112_84329__$1 = temp__4657__auto___84328__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__84112_84329__$1)){
var c__37587__auto___84330 = cljs.core.chunk_first.call(null,seq__84112_84329__$1);
var G__84331 = cljs.core.chunk_rest.call(null,seq__84112_84329__$1);
var G__84332 = c__37587__auto___84330;
var G__84333 = cljs.core.count.call(null,c__37587__auto___84330);
var G__84334 = (0);
seq__84112_84317 = G__84331;
chunk__84113_84318 = G__84332;
count__84114_84319 = G__84333;
i__84115_84320 = G__84334;
continue;
} else {
var vec__84119_84335 = cljs.core.first.call(null,seq__84112_84329__$1);
var the_key_84336 = cljs.core.nth.call(null,vec__84119_84335,(0),null);
var place_84337 = cljs.core.nth.call(null,vec__84119_84335,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_84316__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_84316__$1),the_key_84336))], null));

var G__84338 = cljs.core.next.call(null,seq__84112_84329__$1);
var G__84339 = null;
var G__84340 = (0);
var G__84341 = (0);
seq__84112_84317 = G__84338;
chunk__84113_84318 = G__84339;
count__84114_84319 = G__84340;
i__84115_84320 = G__84341;
continue;
}
} else {
}
}
break;
}

var G__84342 = cljs.core.next.call(null,seq__84092_84306__$1);
var G__84343 = null;
var G__84344 = (0);
var G__84345 = (0);
seq__84092_84267 = G__84342;
chunk__84093_84268 = G__84343;
count__84094_84269 = G__84344;
i__84095_84270 = G__84345;
continue;
}
} else {
}
}
break;
}

var G__84346 = cljs.core.next.call(null,seq__84032__$1);
var G__84347 = null;
var G__84348 = (0);
var G__84349 = (0);
seq__84032 = G__84346;
chunk__84033 = G__84347;
count__84034 = G__84348;
i__84035 = G__84349;
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
return (function (p1__84350_SHARP_){
return new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__84350_SHARP_);
});})(all_systems))
,cljs.core.deref.call(null,all_systems)));
var this_player_systems = cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (p1__84351_SHARP_){
return cljs.core._EQ_.call(null,parseInt(player_id),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(p1__84351_SHARP_));
});})(all_systems,all_players))
,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (a){
return cljs.core.contains_QMARK_.call(null,a,new cljs.core.Keyword(null,"start","start",-355208981));
});})(all_systems,all_players))
,cljs.core.map.call(null,((function (all_systems,all_players){
return (function (p1__84352_SHARP_){
return cljs.core.second.call(null,cljs.core.first.call(null,p1__84352_SHARP_));
});})(all_systems,all_players))
,all_players)))));
var total_price = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (all_systems,all_players,this_player_systems){
return (function (p1__84353_SHARP_){
return lvlup.crusader.dungeon.minute_to_money.call(null,(cljs.core.truth_(cljs_time.core.before_QMARK_.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(p1__84353_SHARP_)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1)))))?cljs_time.core.in_seconds.call(null,cljs_time.core.interval.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(p1__84353_SHARP_)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))):(0)),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__84353_SHARP_));
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
lvlup.crusader.dungeon.player_playing = (function lvlup$crusader$dungeon$player_playing(system,p__84355){
var vec__84363 = p__84355;
var player_number = cljs.core.nth.call(null,vec__84363,(0),null);
var data = cljs.core.nth.call(null,vec__84363,(1),null);
var active_member = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"active-member"], null));
var loading = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"loading"], null));
var time_elapsed = reagent.core.atom.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(data))?lvlup.crusader.dungeon.calculate_time_interval.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(data)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1)))):null));
var valami = reagent.core.atom.call(null,setInterval(((function (active_member,loading,time_elapsed,vec__84363,player_number,data){
return (function (){
return cljs.core.reset_BANG_.call(null,time_elapsed,(cljs.core.deref.call(null,time_elapsed) + (1)));
});})(active_member,loading,time_elapsed,vec__84363,player_number,data))
,(1000)));
var players = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"players"], null));
var this_player = ((function (active_member,loading,time_elapsed,valami,players,vec__84363,player_number,data){
return (function (){
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (active_member,loading,time_elapsed,valami,players,vec__84363,player_number,data){
return (function (p1__84354_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__84354_SHARP_),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(data));
});})(active_member,loading,time_elapsed,valami,players,vec__84363,player_number,data))
,cljs.core.deref.call(null,players)));
});})(active_member,loading,time_elapsed,valami,players,vec__84363,player_number,data))
;
return ((function (active_member,loading,time_elapsed,valami,players,this_player,vec__84363,player_number,data){
return (function (system__$1,p__84366){
var vec__84367 = p__84366;
var player_number__$1 = cljs.core.nth.call(null,vec__84367,(0),null);
var data__$1 = cljs.core.nth.call(null,vec__84367,(1),null);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-remove.uk-animation-fade","div.uk-padding-remove.uk-animation-fade",1654815180),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1px solid white"], null),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(data__$1),cljs.core.deref.call(null,active_member)))?"uk-card-primary":"uk-card-secondary")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-small.uk-padding-remove-bottom","div.uk-padding-small.uk-padding-remove-bottom",-1972330897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(this_player.call(null))),cljs.core.str(" - "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this_player.call(null)))].join('')], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(data__$1))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-text-center","div.uk-text-center",-1334382774),[cljs.core.str(lvlup.crusader.dungeon.convert_time.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(data__$1)))),cljs.core.str(" - "),cljs.core.str(lvlup.crusader.dungeon.minute_to_money.call(null,cljs.core.deref.call(null,time_elapsed),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data__$1))),cljs.core.str(" Ft")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.uk-text-center.uk-padding-remove.uk-margin-remove","h3.uk-text-center.uk-padding-remove.uk-margin-remove",-1159920840),lvlup.crusader.dungeon.elapsing_time.call(null,cljs.core.deref.call(null,time_elapsed))], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.start_button,player_number__$1,system__$1,time_elapsed,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this_player.call(null))], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.modify_time,player_number__$1,system__$1,"-",time_elapsed,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this_player.call(null))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.modify_time,player_number__$1,system__$1,"+",time_elapsed,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this_player.call(null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.cancel,player_number__$1,system__$1,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this_player.call(null))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.pay_with_season_pass,player_number__$1,system__$1,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this_player.call(null)),cljs.core.deref.call(null,loading)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.pay,player_number__$1,system__$1,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this_player.call(null)),cljs.core.deref.call(null,loading)], null)], null);
});
;})(active_member,loading,time_elapsed,valami,players,this_player,vec__84363,player_number,data))
});
lvlup.crusader.dungeon.system = (function lvlup$crusader$dungeon$system(item){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (item__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.uk-width-1-5.valami.dropzone.dropzone2","li.uk-width-1-5.valami.dropzone.dropzone2",-1746359548),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(item__$1),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),0.91], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card.uk-card-secondary","div.uk-card.uk-card-secondary",725560384),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"5px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card-header.uk-padding-small","div.uk-card-header.uk-padding-small",-1952210389),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-grid-small.uk-flex-middle","div.uk-grid-small.uk-flex-middle",-831865867),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-auto","div.uk-width-auto",-1506646300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),(function (){var G__84373 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item__$1);
switch (G__84373) {
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
})(),new cljs.core.Keyword(null,"height","height",1025178622),"40",new cljs.core.Keyword(null,"width","width",-384071477),"40"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-expand","div.uk-width-expand",2031751938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.uk-card-title.uk-margin-remove-bottom.uk-text-truncate","h3.uk-card-title.uk-margin-remove-bottom.uk-text-truncate",-1609379787),[cljs.core.str(new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(item__$1)),cljs.core.str(" - "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item__$1))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.uk-text-meta.uk-margin-remove-top","p.uk-text-meta.uk-margin-remove-top",-506306409),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(item__$1)], null)], null)], null)], null),((cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(item__$1))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.uk-heading.uk-text-center","h3.uk-heading.uk-text-center",391565416),"Foglal\u00E1sok m\u00E1ra... Soon"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.masvalami.draggable","div.masvalami.draggable",829437924),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(item__$1),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"move"], null)], null),cljs.core.map_indexed.call(null,(function (p1__84371_SHARP_,p2__84370_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.player_playing,item__$1,p2__84370_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first.call(null,p2__84370_SHARP_)], null));
}),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(item__$1))], null))], null)], null);
})], null));
});
lvlup.crusader.dungeon.get_member_systems = (function lvlup$crusader$dungeon$get_member_systems(player){
var systems = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"system-map"], null));
return cljs.core.filter.call(null,((function (systems){
return (function (p1__84375_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(p1__84375_SHARP_));
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
return (function (p1__84376_SHARP_){
return (cljs.core.not_EQ_.call(null,null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__84376_SHARP_))) && (cljs.core.not_EQ_.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__84376_SHARP_)));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-small.uk-padding-remove-vertical.uk-margin-small.uk-animation-fade","div.uk-padding-small.uk-padding-remove-vertical.uk-margin-small.uk-animation-fade",354159052),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.valami.uk-padding-remove.draggable.uk-card.uk-card-default.uk-margin-remove.uk-grid-collapse.uk-margin","div.valami.uk-padding-remove.draggable.uk-card.uk-card-default.uk-margin-remove.uk-grid-collapse.uk-margin",766586883),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"5px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (invoices,pool,sidenav_state,active_member){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-member","set-active-member",-1587885058),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data__$1)], null));
});})(invoices,pool,sidenav_state,active_member))
,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data__$1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-1-3","div.uk-width-1-3",-68418982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-inline","div.uk-inline",-2089757713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.uk-border-circle","img.uk-border-circle",1982878954),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/img/logos/unnamed.png"], null)], null),((cljs.core.not.call(null,cljs.core.some.call(null,((function (invoices,pool,sidenav_state,active_member){
return (function (p1__84377_SHARP_){
return cljs.core._EQ_.call(null,p1__84377_SHARP_,data__$1);
});})(invoices,pool,sidenav_state,active_member))
,cljs.core.deref.call(null,pool))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-position-bottom-right","div.uk-position-bottom-right",-1068712487),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-padding-remove.to-the-waiting-pool","button.uk-button.uk-padding-remove.to-the-waiting-pool",210619391),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (invoices,pool,sidenav_state,active_member){
return (function (){
return lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","add-to-waiting-pool","dungeon/add-to-waiting-pool",1741760159),data__$1], null));
});})(invoices,pool,sidenav_state,active_member))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.uk-border-circle","img.uk-border-circle",1982878954),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"30",new cljs.core.Keyword(null,"width","width",-384071477),"30",new cljs.core.Keyword(null,"src","src",-1651076051),"/Icons/time-left.svg"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-position-bottom-right","div.uk-position-bottom-right",-1068712487),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-padding-remove.to-the-waiting-pool","button.uk-button.uk-padding-remove.to-the-waiting-pool",210619391),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (invoices,pool,sidenav_state,active_member){
return (function (){
return lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","remove-from-waiting-pool","dungeon/remove-from-waiting-pool",-1590819980),data__$1], null));
});})(invoices,pool,sidenav_state,active_member))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.uk-border-circle","img.uk-border-circle",1982878954),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"30",new cljs.core.Keyword(null,"width","width",-384071477),"30",new cljs.core.Keyword(null,"src","src",-1651076051),"/Icons/remove.svg"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card-body.uk-padding-small.uk-margin-remove.uk-width-2-3.uk-dark","div.uk-card-body.uk-padding-small.uk-margin-remove.uk-width-2-3.uk-dark",432627079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data__$1),cljs.core.deref.call(null,active_member)))?"uk-card-primary":"uk-card-default")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.4em",new cljs.core.Keyword(null,"padding","padding",1660304693),"3px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.name-animated","div.name-animated",807272306),[cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data__$1)),cljs.core.str(".-"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(data__$1))].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str("B\u00E9rlet: "),cljs.core.str(new cljs.core.Keyword(null,"season-pass","season-pass",1518775969).cljs$core$IFn$_invoke$arity$1(data__$1))].join('')," \u00F3ra"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str("XP: "),cljs.core.str(new cljs.core.Keyword(null,"total-hours","total-hours",-509359517).cljs$core$IFn$_invoke$arity$1(data__$1))].join('')], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data__$1),cljs.core.deref.call(null,active_member)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str("\u00D6sszesen: "),cljs.core.str(lvlup.crusader.dungeon.all_items_to_money.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data__$1))),cljs.core.str(" Ft")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str("J\u00E1tszott \u00F3r\u00E1k: "),cljs.core.str(lvlup.crusader.dungeon.all_items_to_hours.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data__$1))),cljs.core.str(" \u00F3ra")].join('')], null)], null):null)], null)], null):null)], null)], null)], null)], null);
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
return (function (p1__84379_SHARP_,p2__84378_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.player,p2__84378_SHARP_,p1__84379_SHARP_,(4)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__84378_SHARP_)], null));
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
return (function (p1__84380_SHARP_){
return cljs.core.some.call(null,((function (players,systems,invoices,get_member_data){
return (function (a){
return cljs.core._EQ_.call(null,a,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__84380_SHARP_));
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
return (function (p1__84382_SHARP_,p2__84381_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.player,p2__84381_SHARP_,p1__84382_SHARP_,(3)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__84381_SHARP_)], null));
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
return (function (p1__84383_SHARP_){
return cljs.core.some.call(null,((function (players,systems,get_players_playing){
return (function (a){
return cljs.core._EQ_.call(null,a,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__84383_SHARP_));
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
return (function (p1__84385_SHARP_,p2__84384_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.player,p2__84384_SHARP_,p1__84385_SHARP_,(2)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__84384_SHARP_)], null));
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
return (function (p1__84387_SHARP_,p2__84386_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.player,p2__84386_SHARP_,p1__84387_SHARP_,(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__84386_SHARP_)], null));
});})(players,systems,search,switched_member))
,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),((function (players,systems,search,switched_member){
return (function (p1__84388_SHARP_,p2__84389_SHARP_){
return (p1__84388_SHARP_ > p2__84389_SHARP_);
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
return (function (p1__84390_SHARP_){
return cljs.core.some.call(null,((function (systems,players,get_players_playing){
return (function (a){
return cljs.core._EQ_.call(null,a,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__84390_SHARP_));
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
return (function (p1__84392_SHARP_,p2__84391_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.system,p2__84391_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p2__84391_SHARP_)], null));
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
var vec__84398 = cljs.core.filter.call(null,((function (systems,system_name,member_id){
return (function (p1__84393_SHARP_){
return cljs.core._EQ_.call(null,system_name,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__84393_SHARP_));
});})(systems,system_name,member_id))
,cljs.core.deref.call(null,systems));
var filtered_system = cljs.core.nth.call(null,vec__84398,(0),null);
lvlup.crusader.dungeon.notification.call(null,[cljs.core.str(member_id),cljs.core.str(". -> "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(filtered_system))].join(''));

var G__84401 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system);
switch (G__84401) {
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
var vec__84411 = cljs.core.filter.call(null,((function (systems,system_name,other_system){
return (function (p1__84403_SHARP_){
return cljs.core._EQ_.call(null,system_name,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__84403_SHARP_));
});})(systems,system_name,other_system))
,cljs.core.deref.call(null,systems));
var filtered_system = cljs.core.nth.call(null,vec__84411,(0),null);
var vec__84414 = cljs.core.filter.call(null,((function (systems,system_name,other_system,vec__84411,filtered_system){
return (function (p1__84404_SHARP_){
return cljs.core._EQ_.call(null,other_system,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__84404_SHARP_));
});})(systems,system_name,other_system,vec__84411,filtered_system))
,cljs.core.deref.call(null,systems));
var filtered_system2 = cljs.core.nth.call(null,vec__84414,(0),null);
lvlup.crusader.dungeon.notification.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(filtered_system)),cljs.core.str(" <-> "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(filtered_system2))].join(''));

if(((cljs.core._EQ_.call(null,"pc",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system))) && (cljs.core._EQ_.call(null,"pc",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system2)))) || ((cljs.core._EQ_.call(null,"xbox",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system))) && (cljs.core._EQ_.call(null,"xbox",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system2)))) || ((cljs.core._EQ_.call(null,"ps",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system))) && (cljs.core._EQ_.call(null,"ps",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system2)))) || ((cljs.core._EQ_.call(null,"xbox",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system))) && (cljs.core._EQ_.call(null,"ps",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system2)))) || ((cljs.core._EQ_.call(null,"ps",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system))) && (cljs.core._EQ_.call(null,"xbox",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system2))))){
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system2))], null));

return lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system2,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system))], null));
} else {
return lvlup.crusader.dungeon.notification.call(null,"Csak k\u00E9t azonos t\u00EDpus\u00FA rendszert tudsz cser\u00E9lni!");
}
});
lvlup.crusader.dungeon.one_item = (function lvlup$crusader$dungeon$one_item(item,member){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),(30),new cljs.core.Keyword(null,"width","width",-384071477),(30),new cljs.core.Keyword(null,"src","src",-1651076051),(function (){var G__84418 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item);
switch (G__84418) {
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
return (function (p1__84420_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__84420_SHARP_),cljs.core.first.call(null,item));
});})(members,systems))
,cljs.core.deref.call(null,members))));
});})(members,systems))
;
return ((function (members,systems,member){
return (function (item__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"uk-width-1-2@s uk-width-1-2@m uk-width-1-3@l"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card.uk-card-secondary.uk-padding-remove.uk-dark","div.uk-card.uk-card-secondary.uk-padding-remove.uk-dark",-928433420),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opacity","opacity",397153780),0.87,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"10px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-small","div.uk-padding-small",1857323497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-float-right","div.uk-float-right",446370919),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.uk-margin-remove.uk-padding-remove.uk-text-right","h3.uk-margin-remove.uk-padding-remove.uk-text-right",-403492373),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),[cljs.core.str(cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"price","price",22129180),cljs.core.second.call(null,item__$1)))),cljs.core.str(" Ft ")].join('')], null),(cljs.core.truth_(lvlup.crusader.dungeon.plays_QMARK_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(member.call(null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.uk-padding-remove.uk-margin-remove.uk-float-right","h5.uk-padding-remove.uk-margin-remove.uk-float-right",-1121405685),"NEM J\u00C1TSZIK"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.uk-margin-remove.uk-padding-remove.uk-float-right","h5.uk-margin-remove.uk-padding-remove.uk-float-right",-739768631),"J\u00C1TSZIK M\u00C9G"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.uk-margin-remove.uk-text-truncate","h4.uk-margin-remove.uk-text-truncate",-813948027),[cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(member.call(null))),cljs.core.str(".- "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member.call(null)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.uk-margin-remove","h5.uk-margin-remove",1940144770),[cljs.core.str("B\u00E9rlet \u00F3r\u00E1k: "),cljs.core.str(new cljs.core.Keyword(null,"season-pass","season-pass",1518775969).cljs$core$IFn$_invoke$arity$1(member.call(null)))].join('')], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-divider-icon.uk-margin-small.uk-margin-remove-top","div.uk-divider-icon.uk-margin-small.uk-margin-remove-top",-1810725832)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-overflow-auto.uk-width-1-1","div.uk-overflow-auto.uk-width-1-1",-467337532),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"180px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.uk-width-1-1.uk-table-striped.uk-table.uk-table-middle","table.uk-width-1-1.uk-table-striped.uk-table.uk-table-middle",293470447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (members,systems,member){
return (function (p1__84422_SHARP_,p2__84421_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.one_item,p2__84421_SHARP_,member.call(null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p2__84421_SHARP_], null));
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
return (function (p1__84424_SHARP_,p2__84423_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.invoice,p2__84423_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p2__84423_SHARP_], null));
});})(invoices,members,get_member_data))
,cljs.core.sort_by.call(null,cljs.core.first,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"member-id","member-id",606659713),cljs.core.deref.call(null,invoices))))], null))], null);
});})(invoices,members,get_member_data))
], null));
});
lvlup.crusader.dungeon.modify_member = (function lvlup$crusader$dungeon$modify_member(member,index){
var modify_atom = reagent.core.atom.call(null,member);
var scrollspy = reagent.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (modify_atom,scrollspy){
return (function (){
cljs.core.reset_BANG_.call(null,scrollspy,UIkit.scrollspy([cljs.core.str("#load-"),cljs.core.str(index)].join(''),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cls","cls",-1270350575),null,new cljs.core.Keyword(null,"hidden","hidden",-312506092),false], null))));

if(cljs.core._EQ_.call(null,(0),cljs.core.mod.call(null,((10) + index),(20)))){
return jayq.core.$.call(null,document).on("inview",[cljs.core.str("#us-"),cljs.core.str(index)].join(''),((function (modify_atom,scrollspy){
return (function (a){
return lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-members","dungeon/get-members",188408482),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number","number",1570378438),((10) + index),new cljs.core.Keyword(null,"search","search",1564939822),""], null)], null));
});})(modify_atom,scrollspy))
);
} else {
return null;
}
});})(modify_atom,scrollspy))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (modify_atom,scrollspy){
return (function (member__$1,index__$1){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-1-2","div.uk-width-1-2",-985513944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-emergence","data-emergence",364204356),((cljs.core._EQ_.call(null,(0),cljs.core.mod.call(null,((10) + index__$1),(20))))?"hidden":false),new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str("load-"),cljs.core.str(index__$1)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card.uk-card-secondary","div.uk-card.uk-card-secondary",725560384),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-1-1.uk-padding-remove.uk-inline","div.uk-width-1-1.uk-padding-remove.uk-inline",-964084036),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.uk-heading-bullet.uk-width-1-1.uk-padding-remove","h1.uk-heading-bullet.uk-width-1-1.uk-padding-remove",1256829395),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white !important"], null)], null),[cljs.core.str("Id: "),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(member__$1)),cljs.core.str("  - B\u00E9rlet: "),cljs.core.str(new cljs.core.Keyword(null,"season-pass","season-pass",1518775969).cljs$core$IFn$_invoke$arity$1(member__$1))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-position-top-right","div.uk-position-top-right",1203574573),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"data-uk-icon","data-uk-icon",1809176669),"icon: check; ratio: 2.5",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (modify_atom,scrollspy){
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
], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-default.uk-width-1-4.uk-margin-remove","button.uk-button.uk-button-default.uk-width-1-4.uk-margin-remove",-1385383208),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (modify_atom,scrollspy){
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
return (function (p1__84425_SHARP_){
return cljs.core.swap_BANG_.call(null,modify_atom,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),p1__84425_SHARP_.target.value);
});})(modify_atom,scrollspy))
,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,modify_atom))], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-grid.uk-child-width-1-3.uk-margin-remove.uk-width-1-1.uk-padding-remove","div.uk-grid.uk-child-width-1-3.uk-margin-remove.uk-width-1-1.uk-padding-remove",-875820281),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-default","button.uk-button.uk-button-default",161862613),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (modify_atom,scrollspy){
return (function (){
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","update-member","dungeon/update-member",380816955),cljs.core.assoc.call(null,cljs.core.deref.call(null,modify_atom),new cljs.core.Keyword(null,"season-pass","season-pass",1518775969),((6) + new cljs.core.Keyword(null,"season-pass","season-pass",1518775969).cljs$core$IFn$_invoke$arity$1(member__$1)))], null));

return lvlup.crusader.dungeon.notification.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,modify_atom))),cljs.core.str(" kapott egy Beginner b\u00E9rletet!")].join(''));
});})(modify_atom,scrollspy))
], null),"+ Beginner"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-default","button.uk-button.uk-button-default",161862613),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (modify_atom,scrollspy){
return (function (){
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","update-member","dungeon/update-member",380816955),cljs.core.assoc.call(null,cljs.core.deref.call(null,modify_atom),new cljs.core.Keyword(null,"season-pass","season-pass",1518775969),((13) + new cljs.core.Keyword(null,"season-pass","season-pass",1518775969).cljs$core$IFn$_invoke$arity$1(member__$1)))], null));

return lvlup.crusader.dungeon.notification.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,modify_atom))),cljs.core.str(" kapott egy Medium b\u00E9rletet!")].join(''));
});})(modify_atom,scrollspy))
], null),"+ Medium"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-default","button.uk-button.uk-button-default",161862613),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (modify_atom,scrollspy){
return (function (){
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","update-member","dungeon/update-member",380816955),cljs.core.assoc.call(null,cljs.core.deref.call(null,modify_atom),new cljs.core.Keyword(null,"season-pass","season-pass",1518775969),((28) + new cljs.core.Keyword(null,"season-pass","season-pass",1518775969).cljs$core$IFn$_invoke$arity$1(member__$1)))], null));

return lvlup.crusader.dungeon.notification.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,modify_atom))),cljs.core.str(" kapott egy Hardcore b\u00E9rletet!")].join(''));
});})(modify_atom,scrollspy))
], null),"+ Hardcore"], null)], null)], null);
});})(modify_atom,scrollspy))
], null));
});
lvlup.crusader.dungeon.registration_input = (function lvlup$crusader$dungeon$registration_input(members){
var max_id = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"max-id"], null));
var search = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"search-member"], null));
var the_timeout = reagent.core.atom.call(null,null);
return ((function (max_id,search,the_timeout){
return (function (members__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-1-1.uk-sticky.uk-card.uk-grid.uk-grid-stack.uk-margin-remove","div.uk-width-1-1.uk-sticky.uk-card.uk-grid.uk-grid-stack.uk-margin-remove",-900224372),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),"true",new cljs.core.Keyword(null,"data-uk-sticky","data-uk-sticky",1691370808),"true"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#username.uk-input.uk-text-center.uk-padding-remove.uk-first-column","input#username.uk-input.uk-text-center.uk-padding-remove.uk-first-column",-904509676),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (max_id,search,the_timeout){
return (function (p1__84426_SHARP_){
if(cljs.core.truth_(cljs.core.deref.call(null,the_timeout))){
window.clearTimeout(cljs.core.deref.call(null,the_timeout));
} else {
}

return cljs.core.reset_BANG_.call(null,the_timeout,window.setTimeout(((function (max_id,search,the_timeout){
return (function (a){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-search-member","set-search-member",-293591708),a], null));
});})(max_id,search,the_timeout))
,(500),p1__84426_SHARP_.target.value));
});})(max_id,search,the_timeout))
,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Regisztr\u00E1ci\u00F3/Keres\u00E9s",new cljs.core.Keyword(null,"type","type",1174270348),"text"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-primary.uk-align-center.uk-margin-remove.uk-padding-remove.uk-width-1-1.uk-grid-margin.uk-first-column","button.uk-button.uk-button-primary.uk-align-center.uk-margin-remove.uk-padding-remove.uk-width-1-1.uk-grid-margin.uk-first-column",-1299134742),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (max_id,search,the_timeout){
return (function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-max-id","set-max-id",1529872056),(cljs.core.deref.call(null,max_id) + (1))], null));

return lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","add-member","dungeon/add-member",87016383),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.deref.call(null,max_id),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.deref.call(null,search)], null)], null));
});})(max_id,search,the_timeout))
], null),[cljs.core.str(cljs.core.deref.call(null,max_id))].join(''),". gamer hozz\u00E1ad\u00E1sa!"], null)], null);
});
;})(max_id,search,the_timeout))
});
lvlup.crusader.dungeon.lazy_load_QMARK_ = (function lvlup$crusader$dungeon$lazy_load_QMARK_(){
var d = document.documentElement;
var offset = (d.scrollTop + window.innerHeight);
var height = d.offsetHeight;
if(cljs.core._EQ_.call(null,offset,height)){
return true;
} else {
return false;
}
});
lvlup.crusader.dungeon.get_scroll = (function lvlup$crusader$dungeon$get_scroll(){
return goog.dom.getDocumentScroll().y;
});
lvlup.crusader.dungeon.events__GT_chan = (function lvlup$crusader$dungeon$events__GT_chan(el,event_type,c){
goog.events.listen(el,event_type,(function (p1__84427_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__84427_SHARP_);
}));

return c;
});
lvlup.crusader.dungeon.scroll_chan_events = (function lvlup$crusader$dungeon$scroll_chan_events(){
return lvlup.crusader.dungeon.events__GT_chan.call(null,window,goog.events.EventType.SCROLL,cljs.core.async.chan.call(null,(1),cljs.core.map.call(null,lvlup.crusader.dungeon.get_scroll)));
});
lvlup.crusader.dungeon.listen_BANG_ = (function lvlup$crusader$dungeon$listen_BANG_(){
var chan = lvlup.crusader.dungeon.scroll_chan_events.call(null);
var c__39756__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39756__auto__,chan){
return (function (){
var f__39757__auto__ = (function (){var switch__39735__auto__ = ((function (c__39756__auto__,chan){
return (function (state_84516){
var state_val_84517 = (state_84516[(1)]);
if((state_val_84517 === (1))){
var state_84516__$1 = state_84516;
var statearr_84518_84534 = state_84516__$1;
(statearr_84518_84534[(2)] = null);

(statearr_84518_84534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84517 === (2))){
var state_84516__$1 = state_84516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_84516__$1,(4),chan);
} else {
if((state_val_84517 === (3))){
var inst_84514 = (state_84516[(2)]);
var state_84516__$1 = state_84516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84516__$1,inst_84514);
} else {
if((state_val_84517 === (4))){
var inst_84483 = (state_84516[(2)]);
var inst_84484 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_84485 = [new cljs.core.Keyword(null,"data","data",-232669377),"lazy-number"];
var inst_84486 = (new cljs.core.PersistentVector(null,2,(5),inst_84484,inst_84485,null));
var inst_84487 = re_frame.core.subscribe.call(null,inst_84486);
var inst_84488 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_84489 = [new cljs.core.Keyword(null,"data","data",-232669377),"search-member"];
var inst_84490 = (new cljs.core.PersistentVector(null,2,(5),inst_84488,inst_84489,null));
var inst_84491 = re_frame.core.subscribe.call(null,inst_84490);
var inst_84492 = lvlup.crusader.dungeon.lazy_load_QMARK_.call(null);
var state_84516__$1 = (function (){var statearr_84519 = state_84516;
(statearr_84519[(7)] = inst_84491);

(statearr_84519[(8)] = inst_84483);

(statearr_84519[(9)] = inst_84487);

return statearr_84519;
})();
if(cljs.core.truth_(inst_84492)){
var statearr_84520_84535 = state_84516__$1;
(statearr_84520_84535[(1)] = (5));

} else {
var statearr_84521_84536 = state_84516__$1;
(statearr_84521_84536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84517 === (5))){
var inst_84491 = (state_84516[(7)]);
var inst_84487 = (state_84516[(9)]);
var inst_84494 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_84495 = [new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"search","search",1564939822)];
var inst_84496 = cljs.core.deref.call(null,inst_84487);
var inst_84497 = cljs.core.deref.call(null,inst_84491);
var inst_84498 = [inst_84496,inst_84497];
var inst_84499 = cljs.core.PersistentHashMap.fromArrays(inst_84495,inst_84498);
var inst_84500 = [new cljs.core.Keyword("dungeon","get-members","dungeon/get-members",188408482),inst_84499];
var inst_84501 = (new cljs.core.PersistentVector(null,2,(5),inst_84494,inst_84500,null));
var inst_84502 = lvlup.sente.chsk_send_BANG_.call(null,inst_84501);
var inst_84503 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_84504 = cljs.core.deref.call(null,inst_84487);
var inst_84505 = ((20) + inst_84504);
var inst_84506 = [new cljs.core.Keyword(null,"set-lazy-number","set-lazy-number",1553898441),inst_84505];
var inst_84507 = (new cljs.core.PersistentVector(null,2,(5),inst_84503,inst_84506,null));
var inst_84508 = re_frame.core.dispatch.call(null,inst_84507);
var state_84516__$1 = (function (){var statearr_84522 = state_84516;
(statearr_84522[(10)] = inst_84502);

return statearr_84522;
})();
var statearr_84523_84537 = state_84516__$1;
(statearr_84523_84537[(2)] = inst_84508);

(statearr_84523_84537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84517 === (6))){
var state_84516__$1 = state_84516;
var statearr_84524_84538 = state_84516__$1;
(statearr_84524_84538[(2)] = null);

(statearr_84524_84538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84517 === (7))){
var inst_84511 = (state_84516[(2)]);
var state_84516__$1 = (function (){var statearr_84525 = state_84516;
(statearr_84525[(11)] = inst_84511);

return statearr_84525;
})();
var statearr_84526_84539 = state_84516__$1;
(statearr_84526_84539[(2)] = null);

(statearr_84526_84539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__39756__auto__,chan))
;
return ((function (switch__39735__auto__,c__39756__auto__,chan){
return (function() {
var lvlup$crusader$dungeon$listen_BANG__$_state_machine__39736__auto__ = null;
var lvlup$crusader$dungeon$listen_BANG__$_state_machine__39736__auto____0 = (function (){
var statearr_84530 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_84530[(0)] = lvlup$crusader$dungeon$listen_BANG__$_state_machine__39736__auto__);

(statearr_84530[(1)] = (1));

return statearr_84530;
});
var lvlup$crusader$dungeon$listen_BANG__$_state_machine__39736__auto____1 = (function (state_84516){
while(true){
var ret_value__39737__auto__ = (function (){try{while(true){
var result__39738__auto__ = switch__39735__auto__.call(null,state_84516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39738__auto__;
}
break;
}
}catch (e84531){if((e84531 instanceof Object)){
var ex__39739__auto__ = e84531;
var statearr_84532_84540 = state_84516;
(statearr_84532_84540[(5)] = ex__39739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e84531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__84541 = state_84516;
state_84516 = G__84541;
continue;
} else {
return ret_value__39737__auto__;
}
break;
}
});
lvlup$crusader$dungeon$listen_BANG__$_state_machine__39736__auto__ = function(state_84516){
switch(arguments.length){
case 0:
return lvlup$crusader$dungeon$listen_BANG__$_state_machine__39736__auto____0.call(this);
case 1:
return lvlup$crusader$dungeon$listen_BANG__$_state_machine__39736__auto____1.call(this,state_84516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lvlup$crusader$dungeon$listen_BANG__$_state_machine__39736__auto__.cljs$core$IFn$_invoke$arity$0 = lvlup$crusader$dungeon$listen_BANG__$_state_machine__39736__auto____0;
lvlup$crusader$dungeon$listen_BANG__$_state_machine__39736__auto__.cljs$core$IFn$_invoke$arity$1 = lvlup$crusader$dungeon$listen_BANG__$_state_machine__39736__auto____1;
return lvlup$crusader$dungeon$listen_BANG__$_state_machine__39736__auto__;
})()
;})(switch__39735__auto__,c__39756__auto__,chan))
})();
var state__39758__auto__ = (function (){var statearr_84533 = f__39757__auto__.call(null);
(statearr_84533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39756__auto__);

return statearr_84533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39758__auto__);
});})(c__39756__auto__,chan))
);

return c__39756__auto__;
});
lvlup.crusader.dungeon.registration = (function lvlup$crusader$dungeon$registration(){
var members = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"players"], null));
var search = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"search-member"], null));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (members,search){
return (function (){
return lvlup.crusader.dungeon.listen_BANG_.call(null);
});})(members,search))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (members,search){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-container","div.uk-container",-1148299242),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.registration_input,members], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-grid.uk-margin-remove.uk-padding-small","div.uk-grid.uk-margin-remove.uk-padding-small",1683256741),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"member",new cljs.core.Keyword(null,"class","class",-2030961996),"uk-child-width-1-3@m member",new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),cljs.core.map_indexed.call(null,((function (members,search){
return (function (p1__84543_SHARP_,p2__84542_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.modify_member,p2__84542_SHARP_,p1__84543_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__84542_SHARP_)], null));
});})(members,search))
,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),((function (members,search){
return (function (p1__84544_SHARP_,p2__84545_SHARP_){
return (p1__84544_SHARP_ > p2__84545_SHARP_);
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
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),((cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sidenav_state),(4)))?"/Icons/waiting.svg":"/Icons/waiting-active.svg")], null)], null)], null)], null),(function (){var G__84548 = cljs.core.deref.call(null,sidenav_state);
switch (G__84548) {
case (1):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.uk-search.uk-search-large.uk-padding-small.uk-padding-remove-vertical","form.uk-search.uk-search-large.uk-padding-small.uk-padding-remove-vertical",-488520674),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.uk-search-input.uk-animation-slide-top","input.uk-search-input.uk-animation-slide-top",-386031068),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (G__84548,sidenav_state,number,search){
return (function (p1__84546_SHARP_){
cljs.core.reset_BANG_.call(null,number,(20));

lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-members","dungeon/get-members",188408482),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number","number",1570378438),(0),new cljs.core.Keyword(null,"search","search",1564939822),p1__84546_SHARP_.target.value], null)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-search-member","set-search-member",-293591708),p1__84546_SHARP_.target.value], null));
});})(G__84548,sidenav_state,number,search))
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