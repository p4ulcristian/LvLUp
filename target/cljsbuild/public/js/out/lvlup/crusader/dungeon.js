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
return cljs.core.doall.call(null,cljs.core.filter.call(null,(function (p1__56946_SHARP_){
var or__36758__auto__ = lvlup.crusader.dungeon.includes_QMARK_.call(null,lvlup.crusader.dungeon.lower.call(null,cljs.core.deref.call(null,search_term)),lvlup.crusader.dungeon.lower.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__56946_SHARP_)));
if(cljs.core.truth_(or__36758__auto__)){
return or__36758__auto__;
} else {
return cljs.core._EQ_.call(null,parseInt(cljs.core.deref.call(null,search_term)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56946_SHARP_));
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
var type_price = (function (){var G__56948 = type;
switch (G__56948) {
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
var x__37089__auto__ = n;
var y__37090__auto__ = (- n);
return ((x__37089__auto__ > y__37090__auto__) ? x__37089__auto__ : y__37090__auto__);
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
return (function (p1__56950_SHARP_){
return cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__56950_SHARP_),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__56950_SHARP_));
});})(all_systems))
,cljs.core.deref.call(null,all_systems)));
var this_player_all_systems = cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (p1__56951_SHARP_){
return cljs.core._EQ_.call(null,parseInt(player_id),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__56951_SHARP_)))));
});})(all_systems,all_players))
,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (a){
return cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(a))),new cljs.core.Keyword(null,"member-id","member-id",606659713));
});})(all_systems,all_players))
,all_players))));
var this_player_systems = cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players,this_player_all_systems){
return (function (p1__56952_SHARP_){
return cljs.core._EQ_.call(null,parseInt(player_id),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__56952_SHARP_)))));
});})(all_systems,all_players,this_player_all_systems))
,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players,this_player_all_systems){
return (function (a){
return cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(a))),new cljs.core.Keyword(null,"start","start",-355208981));
});})(all_systems,all_players,this_player_all_systems))
,all_players))));
var seq__57015_57075 = cljs.core.seq.call(null,this_player_systems);
var chunk__57016_57076 = null;
var count__57017_57077 = (0);
var i__57018_57078 = (0);
while(true){
if((i__57018_57078 < count__57017_57077)){
var system_57079 = cljs.core._nth.call(null,chunk__57016_57076,i__57018_57078);
var number_57080 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system_57079);
var player_57081 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system_57079);
var vec__57019_57082 = cljs.core.filter.call(null,((function (seq__57015_57075,chunk__57016_57076,count__57017_57077,i__57018_57078,number_57080,player_57081,system_57079,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__56953_SHARP_){
return cljs.core._EQ_.call(null,number_57080,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__56953_SHARP_));
});})(seq__57015_57075,chunk__57016_57076,count__57017_57077,i__57018_57078,number_57080,player_57081,system_57079,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_57083 = cljs.core.nth.call(null,vec__57019_57082,(0),null);
var seq__57022_57084 = cljs.core.seq.call(null,player_57081);
var chunk__57023_57085 = null;
var count__57024_57086 = (0);
var i__57025_57087 = (0);
while(true){
if((i__57025_57087 < count__57024_57086)){
var vec__57026_57088 = cljs.core._nth.call(null,chunk__57023_57085,i__57025_57087);
var the_key_57089 = cljs.core.nth.call(null,vec__57026_57088,(0),null);
var place_57090 = cljs.core.nth.call(null,vec__57026_57088,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","add-invoice","dungeon/add-invoice",-1470910835),cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_57090),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place_57090),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id,new cljs.core.Keyword(null,"start","start",-355208981),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_57090)),new cljs.core.Keyword(null,"finish","finish",-586688046),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,[cljs.core.str(cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))].join('')),new cljs.core.Keyword(null,"price","price",22129180),lvlup.crusader.dungeon.minute_to_money.call(null,cljs_time.core.in_seconds.call(null,cljs_time.core.interval.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_57090)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_57090)))], null));

var G__57091 = seq__57022_57084;
var G__57092 = chunk__57023_57085;
var G__57093 = count__57024_57086;
var G__57094 = (i__57025_57087 + (1));
seq__57022_57084 = G__57091;
chunk__57023_57085 = G__57092;
count__57024_57086 = G__57093;
i__57025_57087 = G__57094;
continue;
} else {
var temp__4657__auto___57095 = cljs.core.seq.call(null,seq__57022_57084);
if(temp__4657__auto___57095){
var seq__57022_57096__$1 = temp__4657__auto___57095;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57022_57096__$1)){
var c__37569__auto___57097 = cljs.core.chunk_first.call(null,seq__57022_57096__$1);
var G__57098 = cljs.core.chunk_rest.call(null,seq__57022_57096__$1);
var G__57099 = c__37569__auto___57097;
var G__57100 = cljs.core.count.call(null,c__37569__auto___57097);
var G__57101 = (0);
seq__57022_57084 = G__57098;
chunk__57023_57085 = G__57099;
count__57024_57086 = G__57100;
i__57025_57087 = G__57101;
continue;
} else {
var vec__57029_57102 = cljs.core.first.call(null,seq__57022_57096__$1);
var the_key_57103 = cljs.core.nth.call(null,vec__57029_57102,(0),null);
var place_57104 = cljs.core.nth.call(null,vec__57029_57102,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","add-invoice","dungeon/add-invoice",-1470910835),cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_57104),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place_57104),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id,new cljs.core.Keyword(null,"start","start",-355208981),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_57104)),new cljs.core.Keyword(null,"finish","finish",-586688046),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,[cljs.core.str(cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))].join('')),new cljs.core.Keyword(null,"price","price",22129180),lvlup.crusader.dungeon.minute_to_money.call(null,cljs_time.core.in_seconds.call(null,cljs_time.core.interval.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_57104)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_57104)))], null));

var G__57105 = cljs.core.next.call(null,seq__57022_57096__$1);
var G__57106 = null;
var G__57107 = (0);
var G__57108 = (0);
seq__57022_57084 = G__57105;
chunk__57023_57085 = G__57106;
count__57024_57086 = G__57107;
i__57025_57087 = G__57108;
continue;
}
} else {
}
}
break;
}

var G__57109 = seq__57015_57075;
var G__57110 = chunk__57016_57076;
var G__57111 = count__57017_57077;
var G__57112 = (i__57018_57078 + (1));
seq__57015_57075 = G__57109;
chunk__57016_57076 = G__57110;
count__57017_57077 = G__57111;
i__57018_57078 = G__57112;
continue;
} else {
var temp__4657__auto___57113 = cljs.core.seq.call(null,seq__57015_57075);
if(temp__4657__auto___57113){
var seq__57015_57114__$1 = temp__4657__auto___57113;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57015_57114__$1)){
var c__37569__auto___57115 = cljs.core.chunk_first.call(null,seq__57015_57114__$1);
var G__57116 = cljs.core.chunk_rest.call(null,seq__57015_57114__$1);
var G__57117 = c__37569__auto___57115;
var G__57118 = cljs.core.count.call(null,c__37569__auto___57115);
var G__57119 = (0);
seq__57015_57075 = G__57116;
chunk__57016_57076 = G__57117;
count__57017_57077 = G__57118;
i__57018_57078 = G__57119;
continue;
} else {
var system_57120 = cljs.core.first.call(null,seq__57015_57114__$1);
var number_57121 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system_57120);
var player_57122 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system_57120);
var vec__57032_57123 = cljs.core.filter.call(null,((function (seq__57015_57075,chunk__57016_57076,count__57017_57077,i__57018_57078,number_57121,player_57122,system_57120,seq__57015_57114__$1,temp__4657__auto___57113,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__56953_SHARP_){
return cljs.core._EQ_.call(null,number_57121,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__56953_SHARP_));
});})(seq__57015_57075,chunk__57016_57076,count__57017_57077,i__57018_57078,number_57121,player_57122,system_57120,seq__57015_57114__$1,temp__4657__auto___57113,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_57124 = cljs.core.nth.call(null,vec__57032_57123,(0),null);
var seq__57035_57125 = cljs.core.seq.call(null,player_57122);
var chunk__57036_57126 = null;
var count__57037_57127 = (0);
var i__57038_57128 = (0);
while(true){
if((i__57038_57128 < count__57037_57127)){
var vec__57039_57129 = cljs.core._nth.call(null,chunk__57036_57126,i__57038_57128);
var the_key_57130 = cljs.core.nth.call(null,vec__57039_57129,(0),null);
var place_57131 = cljs.core.nth.call(null,vec__57039_57129,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","add-invoice","dungeon/add-invoice",-1470910835),cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_57131),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place_57131),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id,new cljs.core.Keyword(null,"start","start",-355208981),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_57131)),new cljs.core.Keyword(null,"finish","finish",-586688046),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,[cljs.core.str(cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))].join('')),new cljs.core.Keyword(null,"price","price",22129180),lvlup.crusader.dungeon.minute_to_money.call(null,cljs_time.core.in_seconds.call(null,cljs_time.core.interval.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_57131)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_57131)))], null));

var G__57132 = seq__57035_57125;
var G__57133 = chunk__57036_57126;
var G__57134 = count__57037_57127;
var G__57135 = (i__57038_57128 + (1));
seq__57035_57125 = G__57132;
chunk__57036_57126 = G__57133;
count__57037_57127 = G__57134;
i__57038_57128 = G__57135;
continue;
} else {
var temp__4657__auto___57136__$1 = cljs.core.seq.call(null,seq__57035_57125);
if(temp__4657__auto___57136__$1){
var seq__57035_57137__$1 = temp__4657__auto___57136__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57035_57137__$1)){
var c__37569__auto___57138 = cljs.core.chunk_first.call(null,seq__57035_57137__$1);
var G__57139 = cljs.core.chunk_rest.call(null,seq__57035_57137__$1);
var G__57140 = c__37569__auto___57138;
var G__57141 = cljs.core.count.call(null,c__37569__auto___57138);
var G__57142 = (0);
seq__57035_57125 = G__57139;
chunk__57036_57126 = G__57140;
count__57037_57127 = G__57141;
i__57038_57128 = G__57142;
continue;
} else {
var vec__57042_57143 = cljs.core.first.call(null,seq__57035_57137__$1);
var the_key_57144 = cljs.core.nth.call(null,vec__57042_57143,(0),null);
var place_57145 = cljs.core.nth.call(null,vec__57042_57143,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","add-invoice","dungeon/add-invoice",-1470910835),cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_57145),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place_57145),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id,new cljs.core.Keyword(null,"start","start",-355208981),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_57145)),new cljs.core.Keyword(null,"finish","finish",-586688046),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,[cljs.core.str(cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))].join('')),new cljs.core.Keyword(null,"price","price",22129180),lvlup.crusader.dungeon.minute_to_money.call(null,cljs_time.core.in_seconds.call(null,cljs_time.core.interval.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_57145)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_57145)))], null));

var G__57146 = cljs.core.next.call(null,seq__57035_57137__$1);
var G__57147 = null;
var G__57148 = (0);
var G__57149 = (0);
seq__57035_57125 = G__57146;
chunk__57036_57126 = G__57147;
count__57037_57127 = G__57148;
i__57038_57128 = G__57149;
continue;
}
} else {
}
}
break;
}

var G__57150 = cljs.core.next.call(null,seq__57015_57114__$1);
var G__57151 = null;
var G__57152 = (0);
var G__57153 = (0);
seq__57015_57075 = G__57150;
chunk__57016_57076 = G__57151;
count__57017_57077 = G__57152;
i__57018_57078 = G__57153;
continue;
}
} else {
}
}
break;
}

lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-members-with-id","dungeon/get-members-with-id",-1097562328),cljs.core.vec.call(null,player_id)], null));

var seq__57045 = cljs.core.seq.call(null,this_player_all_systems);
var chunk__57046 = null;
var count__57047 = (0);
var i__57048 = (0);
while(true){
if((i__57048 < count__57047)){
var system = cljs.core._nth.call(null,chunk__57046,i__57048);
var number_57154 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system);
var player_57155 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system);
var vec__57049_57156 = cljs.core.filter.call(null,((function (seq__57045,chunk__57046,count__57047,i__57048,number_57154,player_57155,system,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__56954_SHARP_){
return cljs.core._EQ_.call(null,number_57154,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__56954_SHARP_));
});})(seq__57045,chunk__57046,count__57047,i__57048,number_57154,player_57155,system,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_57157 = cljs.core.nth.call(null,vec__57049_57156,(0),null);
var seq__57052_57158 = cljs.core.seq.call(null,player_57155);
var chunk__57053_57159 = null;
var count__57054_57160 = (0);
var i__57055_57161 = (0);
while(true){
if((i__57055_57161 < count__57054_57160)){
var vec__57056_57162 = cljs.core._nth.call(null,chunk__57053_57159,i__57055_57161);
var the_key_57163 = cljs.core.nth.call(null,vec__57056_57162,(0),null);
var place_57164 = cljs.core.nth.call(null,vec__57056_57162,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_57157,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_57157),the_key_57163))], null));

var G__57165 = seq__57052_57158;
var G__57166 = chunk__57053_57159;
var G__57167 = count__57054_57160;
var G__57168 = (i__57055_57161 + (1));
seq__57052_57158 = G__57165;
chunk__57053_57159 = G__57166;
count__57054_57160 = G__57167;
i__57055_57161 = G__57168;
continue;
} else {
var temp__4657__auto___57169 = cljs.core.seq.call(null,seq__57052_57158);
if(temp__4657__auto___57169){
var seq__57052_57170__$1 = temp__4657__auto___57169;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57052_57170__$1)){
var c__37569__auto___57171 = cljs.core.chunk_first.call(null,seq__57052_57170__$1);
var G__57172 = cljs.core.chunk_rest.call(null,seq__57052_57170__$1);
var G__57173 = c__37569__auto___57171;
var G__57174 = cljs.core.count.call(null,c__37569__auto___57171);
var G__57175 = (0);
seq__57052_57158 = G__57172;
chunk__57053_57159 = G__57173;
count__57054_57160 = G__57174;
i__57055_57161 = G__57175;
continue;
} else {
var vec__57059_57176 = cljs.core.first.call(null,seq__57052_57170__$1);
var the_key_57177 = cljs.core.nth.call(null,vec__57059_57176,(0),null);
var place_57178 = cljs.core.nth.call(null,vec__57059_57176,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_57157,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_57157),the_key_57177))], null));

var G__57179 = cljs.core.next.call(null,seq__57052_57170__$1);
var G__57180 = null;
var G__57181 = (0);
var G__57182 = (0);
seq__57052_57158 = G__57179;
chunk__57053_57159 = G__57180;
count__57054_57160 = G__57181;
i__57055_57161 = G__57182;
continue;
}
} else {
}
}
break;
}

var G__57183 = seq__57045;
var G__57184 = chunk__57046;
var G__57185 = count__57047;
var G__57186 = (i__57048 + (1));
seq__57045 = G__57183;
chunk__57046 = G__57184;
count__57047 = G__57185;
i__57048 = G__57186;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__57045);
if(temp__4657__auto__){
var seq__57045__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57045__$1)){
var c__37569__auto__ = cljs.core.chunk_first.call(null,seq__57045__$1);
var G__57187 = cljs.core.chunk_rest.call(null,seq__57045__$1);
var G__57188 = c__37569__auto__;
var G__57189 = cljs.core.count.call(null,c__37569__auto__);
var G__57190 = (0);
seq__57045 = G__57187;
chunk__57046 = G__57188;
count__57047 = G__57189;
i__57048 = G__57190;
continue;
} else {
var system = cljs.core.first.call(null,seq__57045__$1);
var number_57191 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system);
var player_57192 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system);
var vec__57062_57193 = cljs.core.filter.call(null,((function (seq__57045,chunk__57046,count__57047,i__57048,number_57191,player_57192,system,seq__57045__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__56954_SHARP_){
return cljs.core._EQ_.call(null,number_57191,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__56954_SHARP_));
});})(seq__57045,chunk__57046,count__57047,i__57048,number_57191,player_57192,system,seq__57045__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_57194 = cljs.core.nth.call(null,vec__57062_57193,(0),null);
var seq__57065_57195 = cljs.core.seq.call(null,player_57192);
var chunk__57066_57196 = null;
var count__57067_57197 = (0);
var i__57068_57198 = (0);
while(true){
if((i__57068_57198 < count__57067_57197)){
var vec__57069_57199 = cljs.core._nth.call(null,chunk__57066_57196,i__57068_57198);
var the_key_57200 = cljs.core.nth.call(null,vec__57069_57199,(0),null);
var place_57201 = cljs.core.nth.call(null,vec__57069_57199,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_57194,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_57194),the_key_57200))], null));

var G__57202 = seq__57065_57195;
var G__57203 = chunk__57066_57196;
var G__57204 = count__57067_57197;
var G__57205 = (i__57068_57198 + (1));
seq__57065_57195 = G__57202;
chunk__57066_57196 = G__57203;
count__57067_57197 = G__57204;
i__57068_57198 = G__57205;
continue;
} else {
var temp__4657__auto___57206__$1 = cljs.core.seq.call(null,seq__57065_57195);
if(temp__4657__auto___57206__$1){
var seq__57065_57207__$1 = temp__4657__auto___57206__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57065_57207__$1)){
var c__37569__auto___57208 = cljs.core.chunk_first.call(null,seq__57065_57207__$1);
var G__57209 = cljs.core.chunk_rest.call(null,seq__57065_57207__$1);
var G__57210 = c__37569__auto___57208;
var G__57211 = cljs.core.count.call(null,c__37569__auto___57208);
var G__57212 = (0);
seq__57065_57195 = G__57209;
chunk__57066_57196 = G__57210;
count__57067_57197 = G__57211;
i__57068_57198 = G__57212;
continue;
} else {
var vec__57072_57213 = cljs.core.first.call(null,seq__57065_57207__$1);
var the_key_57214 = cljs.core.nth.call(null,vec__57072_57213,(0),null);
var place_57215 = cljs.core.nth.call(null,vec__57072_57213,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_57194,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_57194),the_key_57214))], null));

var G__57216 = cljs.core.next.call(null,seq__57065_57207__$1);
var G__57217 = null;
var G__57218 = (0);
var G__57219 = (0);
seq__57065_57195 = G__57216;
chunk__57066_57196 = G__57217;
count__57067_57197 = G__57218;
i__57068_57198 = G__57219;
continue;
}
} else {
}
}
break;
}

var G__57220 = cljs.core.next.call(null,seq__57045__$1);
var G__57221 = null;
var G__57222 = (0);
var G__57223 = (0);
seq__57045 = G__57220;
chunk__57046 = G__57221;
count__57047 = G__57222;
i__57048 = G__57223;
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
return (function (p1__57224_SHARP_){
return new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__57224_SHARP_);
});})(all_systems))
,cljs.core.deref.call(null,all_systems)));
var this_player_systems = cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (p1__57225_SHARP_){
return cljs.core._EQ_.call(null,parseInt(player_id),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(p1__57225_SHARP_));
});})(all_systems,all_players))
,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (a){
return cljs.core.contains_QMARK_.call(null,a,new cljs.core.Keyword(null,"start","start",-355208981));
});})(all_systems,all_players))
,cljs.core.map.call(null,((function (all_systems,all_players){
return (function (p1__57226_SHARP_){
return cljs.core.second.call(null,cljs.core.first.call(null,p1__57226_SHARP_));
});})(all_systems,all_players))
,all_players)))));
var total_price = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (all_systems,all_players,this_player_systems){
return (function (p1__57227_SHARP_){
return lvlup.crusader.dungeon.count_time_halves.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(p1__57227_SHARP_)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))));
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
return (function (p1__57228_SHARP_){
return cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__57228_SHARP_),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__57228_SHARP_));
});})(all_systems))
,cljs.core.deref.call(null,all_systems)));
var this_player_all_systems = cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (p1__57229_SHARP_){
return cljs.core._EQ_.call(null,parseInt(player_id),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__57229_SHARP_)))));
});})(all_systems,all_players))
,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (a){
return cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(a))),new cljs.core.Keyword(null,"member-id","member-id",606659713));
});})(all_systems,all_players))
,all_players))));
var this_player_systems = cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players,this_player_all_systems){
return (function (p1__57230_SHARP_){
return cljs.core._EQ_.call(null,parseInt(player_id),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__57230_SHARP_)))));
});})(all_systems,all_players,this_player_all_systems))
,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players,this_player_all_systems){
return (function (a){
return cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(a))),new cljs.core.Keyword(null,"start","start",-355208981));
});})(all_systems,all_players,this_player_all_systems))
,all_players))));
console.log([cljs.core.str("wtf: "),cljs.core.str(all_players)].join(''));

var seq__57323 = cljs.core.seq.call(null,this_player_systems);
var chunk__57324 = null;
var count__57325 = (0);
var i__57326 = (0);
while(true){
if((i__57326 < count__57325)){
var system = cljs.core._nth.call(null,chunk__57324,i__57326);
var number_57413 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system);
var player_57414 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system);
var vec__57327_57415 = cljs.core.filter.call(null,((function (seq__57323,chunk__57324,count__57325,i__57326,number_57413,player_57414,system,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__57231_SHARP_){
return cljs.core._EQ_.call(null,number_57413,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__57231_SHARP_));
});})(seq__57323,chunk__57324,count__57325,i__57326,number_57413,player_57414,system,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_57416 = cljs.core.nth.call(null,vec__57327_57415,(0),null);
var seq__57330_57417 = cljs.core.seq.call(null,player_57414);
var chunk__57331_57418 = null;
var count__57332_57419 = (0);
var i__57333_57420 = (0);
while(true){
if((i__57333_57420 < count__57332_57419)){
var vec__57334_57421 = cljs.core._nth.call(null,chunk__57331_57418,i__57333_57420);
var the_key_57422 = cljs.core.nth.call(null,vec__57334_57421,(0),null);
var place_57423 = cljs.core.nth.call(null,vec__57334_57421,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","season-pass","dungeon/season-pass",-766369009),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"quantity","quantity",-1929050694),((-1) * lvlup.crusader.dungeon.all_items_to_hours.call(null,player_id)),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id], null)], null));

var G__57424 = seq__57330_57417;
var G__57425 = chunk__57331_57418;
var G__57426 = count__57332_57419;
var G__57427 = (i__57333_57420 + (1));
seq__57330_57417 = G__57424;
chunk__57331_57418 = G__57425;
count__57332_57419 = G__57426;
i__57333_57420 = G__57427;
continue;
} else {
var temp__4657__auto___57428 = cljs.core.seq.call(null,seq__57330_57417);
if(temp__4657__auto___57428){
var seq__57330_57429__$1 = temp__4657__auto___57428;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57330_57429__$1)){
var c__37569__auto___57430 = cljs.core.chunk_first.call(null,seq__57330_57429__$1);
var G__57431 = cljs.core.chunk_rest.call(null,seq__57330_57429__$1);
var G__57432 = c__37569__auto___57430;
var G__57433 = cljs.core.count.call(null,c__37569__auto___57430);
var G__57434 = (0);
seq__57330_57417 = G__57431;
chunk__57331_57418 = G__57432;
count__57332_57419 = G__57433;
i__57333_57420 = G__57434;
continue;
} else {
var vec__57337_57435 = cljs.core.first.call(null,seq__57330_57429__$1);
var the_key_57436 = cljs.core.nth.call(null,vec__57337_57435,(0),null);
var place_57437 = cljs.core.nth.call(null,vec__57337_57435,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","season-pass","dungeon/season-pass",-766369009),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"quantity","quantity",-1929050694),((-1) * lvlup.crusader.dungeon.all_items_to_hours.call(null,player_id)),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id], null)], null));

var G__57438 = cljs.core.next.call(null,seq__57330_57429__$1);
var G__57439 = null;
var G__57440 = (0);
var G__57441 = (0);
seq__57330_57417 = G__57438;
chunk__57331_57418 = G__57439;
count__57332_57419 = G__57440;
i__57333_57420 = G__57441;
continue;
}
} else {
}
}
break;
}

var seq__57340_57442 = cljs.core.seq.call(null,this_player_all_systems);
var chunk__57341_57443 = null;
var count__57342_57444 = (0);
var i__57343_57445 = (0);
while(true){
if((i__57343_57445 < count__57342_57444)){
var system_57446__$1 = cljs.core._nth.call(null,chunk__57341_57443,i__57343_57445);
var number_57447__$1 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system_57446__$1);
var player_57448__$1 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system_57446__$1);
var vec__57344_57449 = cljs.core.filter.call(null,((function (seq__57340_57442,chunk__57341_57443,count__57342_57444,i__57343_57445,seq__57323,chunk__57324,count__57325,i__57326,number_57447__$1,player_57448__$1,system_57446__$1,number_57413,player_57414,vec__57327_57415,filtered_system_57416,system,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__57232_SHARP_){
return cljs.core._EQ_.call(null,number_57447__$1,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__57232_SHARP_));
});})(seq__57340_57442,chunk__57341_57443,count__57342_57444,i__57343_57445,seq__57323,chunk__57324,count__57325,i__57326,number_57447__$1,player_57448__$1,system_57446__$1,number_57413,player_57414,vec__57327_57415,filtered_system_57416,system,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_57450__$1 = cljs.core.nth.call(null,vec__57344_57449,(0),null);
var seq__57347_57451 = cljs.core.seq.call(null,player_57448__$1);
var chunk__57348_57452 = null;
var count__57349_57453 = (0);
var i__57350_57454 = (0);
while(true){
if((i__57350_57454 < count__57349_57453)){
var vec__57351_57455 = cljs.core._nth.call(null,chunk__57348_57452,i__57350_57454);
var the_key_57456 = cljs.core.nth.call(null,vec__57351_57455,(0),null);
var place_57457 = cljs.core.nth.call(null,vec__57351_57455,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_57450__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_57450__$1),the_key_57456))], null));

var G__57458 = seq__57347_57451;
var G__57459 = chunk__57348_57452;
var G__57460 = count__57349_57453;
var G__57461 = (i__57350_57454 + (1));
seq__57347_57451 = G__57458;
chunk__57348_57452 = G__57459;
count__57349_57453 = G__57460;
i__57350_57454 = G__57461;
continue;
} else {
var temp__4657__auto___57462 = cljs.core.seq.call(null,seq__57347_57451);
if(temp__4657__auto___57462){
var seq__57347_57463__$1 = temp__4657__auto___57462;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57347_57463__$1)){
var c__37569__auto___57464 = cljs.core.chunk_first.call(null,seq__57347_57463__$1);
var G__57465 = cljs.core.chunk_rest.call(null,seq__57347_57463__$1);
var G__57466 = c__37569__auto___57464;
var G__57467 = cljs.core.count.call(null,c__37569__auto___57464);
var G__57468 = (0);
seq__57347_57451 = G__57465;
chunk__57348_57452 = G__57466;
count__57349_57453 = G__57467;
i__57350_57454 = G__57468;
continue;
} else {
var vec__57354_57469 = cljs.core.first.call(null,seq__57347_57463__$1);
var the_key_57470 = cljs.core.nth.call(null,vec__57354_57469,(0),null);
var place_57471 = cljs.core.nth.call(null,vec__57354_57469,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_57450__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_57450__$1),the_key_57470))], null));

var G__57472 = cljs.core.next.call(null,seq__57347_57463__$1);
var G__57473 = null;
var G__57474 = (0);
var G__57475 = (0);
seq__57347_57451 = G__57472;
chunk__57348_57452 = G__57473;
count__57349_57453 = G__57474;
i__57350_57454 = G__57475;
continue;
}
} else {
}
}
break;
}

var G__57476 = seq__57340_57442;
var G__57477 = chunk__57341_57443;
var G__57478 = count__57342_57444;
var G__57479 = (i__57343_57445 + (1));
seq__57340_57442 = G__57476;
chunk__57341_57443 = G__57477;
count__57342_57444 = G__57478;
i__57343_57445 = G__57479;
continue;
} else {
var temp__4657__auto___57480 = cljs.core.seq.call(null,seq__57340_57442);
if(temp__4657__auto___57480){
var seq__57340_57481__$1 = temp__4657__auto___57480;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57340_57481__$1)){
var c__37569__auto___57482 = cljs.core.chunk_first.call(null,seq__57340_57481__$1);
var G__57483 = cljs.core.chunk_rest.call(null,seq__57340_57481__$1);
var G__57484 = c__37569__auto___57482;
var G__57485 = cljs.core.count.call(null,c__37569__auto___57482);
var G__57486 = (0);
seq__57340_57442 = G__57483;
chunk__57341_57443 = G__57484;
count__57342_57444 = G__57485;
i__57343_57445 = G__57486;
continue;
} else {
var system_57487__$1 = cljs.core.first.call(null,seq__57340_57481__$1);
var number_57488__$1 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system_57487__$1);
var player_57489__$1 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system_57487__$1);
var vec__57357_57490 = cljs.core.filter.call(null,((function (seq__57340_57442,chunk__57341_57443,count__57342_57444,i__57343_57445,seq__57323,chunk__57324,count__57325,i__57326,number_57488__$1,player_57489__$1,system_57487__$1,seq__57340_57481__$1,temp__4657__auto___57480,number_57413,player_57414,vec__57327_57415,filtered_system_57416,system,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__57232_SHARP_){
return cljs.core._EQ_.call(null,number_57488__$1,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__57232_SHARP_));
});})(seq__57340_57442,chunk__57341_57443,count__57342_57444,i__57343_57445,seq__57323,chunk__57324,count__57325,i__57326,number_57488__$1,player_57489__$1,system_57487__$1,seq__57340_57481__$1,temp__4657__auto___57480,number_57413,player_57414,vec__57327_57415,filtered_system_57416,system,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_57491__$1 = cljs.core.nth.call(null,vec__57357_57490,(0),null);
var seq__57360_57492 = cljs.core.seq.call(null,player_57489__$1);
var chunk__57361_57493 = null;
var count__57362_57494 = (0);
var i__57363_57495 = (0);
while(true){
if((i__57363_57495 < count__57362_57494)){
var vec__57364_57496 = cljs.core._nth.call(null,chunk__57361_57493,i__57363_57495);
var the_key_57497 = cljs.core.nth.call(null,vec__57364_57496,(0),null);
var place_57498 = cljs.core.nth.call(null,vec__57364_57496,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_57491__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_57491__$1),the_key_57497))], null));

var G__57499 = seq__57360_57492;
var G__57500 = chunk__57361_57493;
var G__57501 = count__57362_57494;
var G__57502 = (i__57363_57495 + (1));
seq__57360_57492 = G__57499;
chunk__57361_57493 = G__57500;
count__57362_57494 = G__57501;
i__57363_57495 = G__57502;
continue;
} else {
var temp__4657__auto___57503__$1 = cljs.core.seq.call(null,seq__57360_57492);
if(temp__4657__auto___57503__$1){
var seq__57360_57504__$1 = temp__4657__auto___57503__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57360_57504__$1)){
var c__37569__auto___57505 = cljs.core.chunk_first.call(null,seq__57360_57504__$1);
var G__57506 = cljs.core.chunk_rest.call(null,seq__57360_57504__$1);
var G__57507 = c__37569__auto___57505;
var G__57508 = cljs.core.count.call(null,c__37569__auto___57505);
var G__57509 = (0);
seq__57360_57492 = G__57506;
chunk__57361_57493 = G__57507;
count__57362_57494 = G__57508;
i__57363_57495 = G__57509;
continue;
} else {
var vec__57367_57510 = cljs.core.first.call(null,seq__57360_57504__$1);
var the_key_57511 = cljs.core.nth.call(null,vec__57367_57510,(0),null);
var place_57512 = cljs.core.nth.call(null,vec__57367_57510,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_57491__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_57491__$1),the_key_57511))], null));

var G__57513 = cljs.core.next.call(null,seq__57360_57504__$1);
var G__57514 = null;
var G__57515 = (0);
var G__57516 = (0);
seq__57360_57492 = G__57513;
chunk__57361_57493 = G__57514;
count__57362_57494 = G__57515;
i__57363_57495 = G__57516;
continue;
}
} else {
}
}
break;
}

var G__57517 = cljs.core.next.call(null,seq__57340_57481__$1);
var G__57518 = null;
var G__57519 = (0);
var G__57520 = (0);
seq__57340_57442 = G__57517;
chunk__57341_57443 = G__57518;
count__57342_57444 = G__57519;
i__57343_57445 = G__57520;
continue;
}
} else {
}
}
break;
}

var G__57521 = seq__57323;
var G__57522 = chunk__57324;
var G__57523 = count__57325;
var G__57524 = (i__57326 + (1));
seq__57323 = G__57521;
chunk__57324 = G__57522;
count__57325 = G__57523;
i__57326 = G__57524;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__57323);
if(temp__4657__auto__){
var seq__57323__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57323__$1)){
var c__37569__auto__ = cljs.core.chunk_first.call(null,seq__57323__$1);
var G__57525 = cljs.core.chunk_rest.call(null,seq__57323__$1);
var G__57526 = c__37569__auto__;
var G__57527 = cljs.core.count.call(null,c__37569__auto__);
var G__57528 = (0);
seq__57323 = G__57525;
chunk__57324 = G__57526;
count__57325 = G__57527;
i__57326 = G__57528;
continue;
} else {
var system = cljs.core.first.call(null,seq__57323__$1);
var number_57529 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system);
var player_57530 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system);
var vec__57370_57531 = cljs.core.filter.call(null,((function (seq__57323,chunk__57324,count__57325,i__57326,number_57529,player_57530,system,seq__57323__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__57231_SHARP_){
return cljs.core._EQ_.call(null,number_57529,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__57231_SHARP_));
});})(seq__57323,chunk__57324,count__57325,i__57326,number_57529,player_57530,system,seq__57323__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_57532 = cljs.core.nth.call(null,vec__57370_57531,(0),null);
var seq__57373_57533 = cljs.core.seq.call(null,player_57530);
var chunk__57374_57534 = null;
var count__57375_57535 = (0);
var i__57376_57536 = (0);
while(true){
if((i__57376_57536 < count__57375_57535)){
var vec__57377_57537 = cljs.core._nth.call(null,chunk__57374_57534,i__57376_57536);
var the_key_57538 = cljs.core.nth.call(null,vec__57377_57537,(0),null);
var place_57539 = cljs.core.nth.call(null,vec__57377_57537,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","season-pass","dungeon/season-pass",-766369009),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"quantity","quantity",-1929050694),((-1) * lvlup.crusader.dungeon.all_items_to_hours.call(null,player_id)),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id], null)], null));

var G__57540 = seq__57373_57533;
var G__57541 = chunk__57374_57534;
var G__57542 = count__57375_57535;
var G__57543 = (i__57376_57536 + (1));
seq__57373_57533 = G__57540;
chunk__57374_57534 = G__57541;
count__57375_57535 = G__57542;
i__57376_57536 = G__57543;
continue;
} else {
var temp__4657__auto___57544__$1 = cljs.core.seq.call(null,seq__57373_57533);
if(temp__4657__auto___57544__$1){
var seq__57373_57545__$1 = temp__4657__auto___57544__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57373_57545__$1)){
var c__37569__auto___57546 = cljs.core.chunk_first.call(null,seq__57373_57545__$1);
var G__57547 = cljs.core.chunk_rest.call(null,seq__57373_57545__$1);
var G__57548 = c__37569__auto___57546;
var G__57549 = cljs.core.count.call(null,c__37569__auto___57546);
var G__57550 = (0);
seq__57373_57533 = G__57547;
chunk__57374_57534 = G__57548;
count__57375_57535 = G__57549;
i__57376_57536 = G__57550;
continue;
} else {
var vec__57380_57551 = cljs.core.first.call(null,seq__57373_57545__$1);
var the_key_57552 = cljs.core.nth.call(null,vec__57380_57551,(0),null);
var place_57553 = cljs.core.nth.call(null,vec__57380_57551,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","season-pass","dungeon/season-pass",-766369009),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"quantity","quantity",-1929050694),((-1) * lvlup.crusader.dungeon.all_items_to_hours.call(null,player_id)),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id], null)], null));

var G__57554 = cljs.core.next.call(null,seq__57373_57545__$1);
var G__57555 = null;
var G__57556 = (0);
var G__57557 = (0);
seq__57373_57533 = G__57554;
chunk__57374_57534 = G__57555;
count__57375_57535 = G__57556;
i__57376_57536 = G__57557;
continue;
}
} else {
}
}
break;
}

var seq__57383_57558 = cljs.core.seq.call(null,this_player_all_systems);
var chunk__57384_57559 = null;
var count__57385_57560 = (0);
var i__57386_57561 = (0);
while(true){
if((i__57386_57561 < count__57385_57560)){
var system_57562__$1 = cljs.core._nth.call(null,chunk__57384_57559,i__57386_57561);
var number_57563__$1 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system_57562__$1);
var player_57564__$1 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system_57562__$1);
var vec__57387_57565 = cljs.core.filter.call(null,((function (seq__57383_57558,chunk__57384_57559,count__57385_57560,i__57386_57561,seq__57323,chunk__57324,count__57325,i__57326,number_57563__$1,player_57564__$1,system_57562__$1,number_57529,player_57530,vec__57370_57531,filtered_system_57532,system,seq__57323__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__57232_SHARP_){
return cljs.core._EQ_.call(null,number_57563__$1,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__57232_SHARP_));
});})(seq__57383_57558,chunk__57384_57559,count__57385_57560,i__57386_57561,seq__57323,chunk__57324,count__57325,i__57326,number_57563__$1,player_57564__$1,system_57562__$1,number_57529,player_57530,vec__57370_57531,filtered_system_57532,system,seq__57323__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_57566__$1 = cljs.core.nth.call(null,vec__57387_57565,(0),null);
var seq__57390_57567 = cljs.core.seq.call(null,player_57564__$1);
var chunk__57391_57568 = null;
var count__57392_57569 = (0);
var i__57393_57570 = (0);
while(true){
if((i__57393_57570 < count__57392_57569)){
var vec__57394_57571 = cljs.core._nth.call(null,chunk__57391_57568,i__57393_57570);
var the_key_57572 = cljs.core.nth.call(null,vec__57394_57571,(0),null);
var place_57573 = cljs.core.nth.call(null,vec__57394_57571,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_57566__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_57566__$1),the_key_57572))], null));

var G__57574 = seq__57390_57567;
var G__57575 = chunk__57391_57568;
var G__57576 = count__57392_57569;
var G__57577 = (i__57393_57570 + (1));
seq__57390_57567 = G__57574;
chunk__57391_57568 = G__57575;
count__57392_57569 = G__57576;
i__57393_57570 = G__57577;
continue;
} else {
var temp__4657__auto___57578__$1 = cljs.core.seq.call(null,seq__57390_57567);
if(temp__4657__auto___57578__$1){
var seq__57390_57579__$1 = temp__4657__auto___57578__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57390_57579__$1)){
var c__37569__auto___57580 = cljs.core.chunk_first.call(null,seq__57390_57579__$1);
var G__57581 = cljs.core.chunk_rest.call(null,seq__57390_57579__$1);
var G__57582 = c__37569__auto___57580;
var G__57583 = cljs.core.count.call(null,c__37569__auto___57580);
var G__57584 = (0);
seq__57390_57567 = G__57581;
chunk__57391_57568 = G__57582;
count__57392_57569 = G__57583;
i__57393_57570 = G__57584;
continue;
} else {
var vec__57397_57585 = cljs.core.first.call(null,seq__57390_57579__$1);
var the_key_57586 = cljs.core.nth.call(null,vec__57397_57585,(0),null);
var place_57587 = cljs.core.nth.call(null,vec__57397_57585,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_57566__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_57566__$1),the_key_57586))], null));

var G__57588 = cljs.core.next.call(null,seq__57390_57579__$1);
var G__57589 = null;
var G__57590 = (0);
var G__57591 = (0);
seq__57390_57567 = G__57588;
chunk__57391_57568 = G__57589;
count__57392_57569 = G__57590;
i__57393_57570 = G__57591;
continue;
}
} else {
}
}
break;
}

var G__57592 = seq__57383_57558;
var G__57593 = chunk__57384_57559;
var G__57594 = count__57385_57560;
var G__57595 = (i__57386_57561 + (1));
seq__57383_57558 = G__57592;
chunk__57384_57559 = G__57593;
count__57385_57560 = G__57594;
i__57386_57561 = G__57595;
continue;
} else {
var temp__4657__auto___57596__$1 = cljs.core.seq.call(null,seq__57383_57558);
if(temp__4657__auto___57596__$1){
var seq__57383_57597__$1 = temp__4657__auto___57596__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57383_57597__$1)){
var c__37569__auto___57598 = cljs.core.chunk_first.call(null,seq__57383_57597__$1);
var G__57599 = cljs.core.chunk_rest.call(null,seq__57383_57597__$1);
var G__57600 = c__37569__auto___57598;
var G__57601 = cljs.core.count.call(null,c__37569__auto___57598);
var G__57602 = (0);
seq__57383_57558 = G__57599;
chunk__57384_57559 = G__57600;
count__57385_57560 = G__57601;
i__57386_57561 = G__57602;
continue;
} else {
var system_57603__$1 = cljs.core.first.call(null,seq__57383_57597__$1);
var number_57604__$1 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system_57603__$1);
var player_57605__$1 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system_57603__$1);
var vec__57400_57606 = cljs.core.filter.call(null,((function (seq__57383_57558,chunk__57384_57559,count__57385_57560,i__57386_57561,seq__57323,chunk__57324,count__57325,i__57326,number_57604__$1,player_57605__$1,system_57603__$1,seq__57383_57597__$1,temp__4657__auto___57596__$1,number_57529,player_57530,vec__57370_57531,filtered_system_57532,system,seq__57323__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__57232_SHARP_){
return cljs.core._EQ_.call(null,number_57604__$1,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__57232_SHARP_));
});})(seq__57383_57558,chunk__57384_57559,count__57385_57560,i__57386_57561,seq__57323,chunk__57324,count__57325,i__57326,number_57604__$1,player_57605__$1,system_57603__$1,seq__57383_57597__$1,temp__4657__auto___57596__$1,number_57529,player_57530,vec__57370_57531,filtered_system_57532,system,seq__57323__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_57607__$1 = cljs.core.nth.call(null,vec__57400_57606,(0),null);
var seq__57403_57608 = cljs.core.seq.call(null,player_57605__$1);
var chunk__57404_57609 = null;
var count__57405_57610 = (0);
var i__57406_57611 = (0);
while(true){
if((i__57406_57611 < count__57405_57610)){
var vec__57407_57612 = cljs.core._nth.call(null,chunk__57404_57609,i__57406_57611);
var the_key_57613 = cljs.core.nth.call(null,vec__57407_57612,(0),null);
var place_57614 = cljs.core.nth.call(null,vec__57407_57612,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_57607__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_57607__$1),the_key_57613))], null));

var G__57615 = seq__57403_57608;
var G__57616 = chunk__57404_57609;
var G__57617 = count__57405_57610;
var G__57618 = (i__57406_57611 + (1));
seq__57403_57608 = G__57615;
chunk__57404_57609 = G__57616;
count__57405_57610 = G__57617;
i__57406_57611 = G__57618;
continue;
} else {
var temp__4657__auto___57619__$2 = cljs.core.seq.call(null,seq__57403_57608);
if(temp__4657__auto___57619__$2){
var seq__57403_57620__$1 = temp__4657__auto___57619__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57403_57620__$1)){
var c__37569__auto___57621 = cljs.core.chunk_first.call(null,seq__57403_57620__$1);
var G__57622 = cljs.core.chunk_rest.call(null,seq__57403_57620__$1);
var G__57623 = c__37569__auto___57621;
var G__57624 = cljs.core.count.call(null,c__37569__auto___57621);
var G__57625 = (0);
seq__57403_57608 = G__57622;
chunk__57404_57609 = G__57623;
count__57405_57610 = G__57624;
i__57406_57611 = G__57625;
continue;
} else {
var vec__57410_57626 = cljs.core.first.call(null,seq__57403_57620__$1);
var the_key_57627 = cljs.core.nth.call(null,vec__57410_57626,(0),null);
var place_57628 = cljs.core.nth.call(null,vec__57410_57626,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_57607__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_57607__$1),the_key_57627))], null));

var G__57629 = cljs.core.next.call(null,seq__57403_57620__$1);
var G__57630 = null;
var G__57631 = (0);
var G__57632 = (0);
seq__57403_57608 = G__57629;
chunk__57404_57609 = G__57630;
count__57405_57610 = G__57631;
i__57406_57611 = G__57632;
continue;
}
} else {
}
}
break;
}

var G__57633 = cljs.core.next.call(null,seq__57383_57597__$1);
var G__57634 = null;
var G__57635 = (0);
var G__57636 = (0);
seq__57383_57558 = G__57633;
chunk__57384_57559 = G__57634;
count__57385_57560 = G__57635;
i__57386_57561 = G__57636;
continue;
}
} else {
}
}
break;
}

var G__57637 = cljs.core.next.call(null,seq__57323__$1);
var G__57638 = null;
var G__57639 = (0);
var G__57640 = (0);
seq__57323 = G__57637;
chunk__57324 = G__57638;
count__57325 = G__57639;
i__57326 = G__57640;
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
return (function (p1__57641_SHARP_){
return new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__57641_SHARP_);
});})(all_systems))
,cljs.core.deref.call(null,all_systems)));
var this_player_systems = cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (p1__57642_SHARP_){
return cljs.core._EQ_.call(null,parseInt(player_id),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(p1__57642_SHARP_));
});})(all_systems,all_players))
,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (a){
return cljs.core.contains_QMARK_.call(null,a,new cljs.core.Keyword(null,"start","start",-355208981));
});})(all_systems,all_players))
,cljs.core.map.call(null,((function (all_systems,all_players){
return (function (p1__57643_SHARP_){
return cljs.core.second.call(null,cljs.core.first.call(null,p1__57643_SHARP_));
});})(all_systems,all_players))
,all_players)))));
var total_price = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (all_systems,all_players,this_player_systems){
return (function (p1__57644_SHARP_){
return lvlup.crusader.dungeon.minute_to_money.call(null,(cljs.core.truth_(cljs_time.core.before_QMARK_.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(p1__57644_SHARP_)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1)))))?cljs_time.core.in_seconds.call(null,cljs_time.core.interval.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(p1__57644_SHARP_)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))):(0)),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__57644_SHARP_));
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
lvlup.crusader.dungeon.player_playing = (function lvlup$crusader$dungeon$player_playing(system,p__57646){
var vec__57654 = p__57646;
var player_number = cljs.core.nth.call(null,vec__57654,(0),null);
var data = cljs.core.nth.call(null,vec__57654,(1),null);
var active_member = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"active-member"], null));
var loading = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"loading"], null));
var time_elapsed = reagent.core.atom.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(data))?lvlup.crusader.dungeon.calculate_time_interval.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(data)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1)))):null));
var valami = reagent.core.atom.call(null,setInterval(((function (active_member,loading,time_elapsed,vec__57654,player_number,data){
return (function (){
return cljs.core.reset_BANG_.call(null,time_elapsed,(cljs.core.deref.call(null,time_elapsed) + (1)));
});})(active_member,loading,time_elapsed,vec__57654,player_number,data))
,(1000)));
var players = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"players"], null));
var this_player = ((function (active_member,loading,time_elapsed,valami,players,vec__57654,player_number,data){
return (function (){
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (active_member,loading,time_elapsed,valami,players,vec__57654,player_number,data){
return (function (p1__57645_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__57645_SHARP_),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(data));
});})(active_member,loading,time_elapsed,valami,players,vec__57654,player_number,data))
,cljs.core.deref.call(null,players)));
});})(active_member,loading,time_elapsed,valami,players,vec__57654,player_number,data))
;
return ((function (active_member,loading,time_elapsed,valami,players,this_player,vec__57654,player_number,data){
return (function (system__$1,p__57657){
var vec__57658 = p__57657;
var player_number__$1 = cljs.core.nth.call(null,vec__57658,(0),null);
var data__$1 = cljs.core.nth.call(null,vec__57658,(1),null);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-remove.uk-animation-fade","div.uk-padding-remove.uk-animation-fade",1654815180),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1px solid white"], null),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(data__$1),cljs.core.deref.call(null,active_member)))?"uk-card-primary":"uk-card-secondary")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-small.uk-padding-remove-bottom","div.uk-padding-small.uk-padding-remove-bottom",-1972330897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(this_player.call(null))),cljs.core.str(" - "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this_player.call(null)))].join('')], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(data__$1))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-text-center","div.uk-text-center",-1334382774),[cljs.core.str(lvlup.crusader.dungeon.convert_time.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(data__$1)))),cljs.core.str(" - "),cljs.core.str(lvlup.crusader.dungeon.minute_to_money.call(null,cljs.core.deref.call(null,time_elapsed),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data__$1))),cljs.core.str(" Ft")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.uk-text-center.uk-padding-remove.uk-margin-remove","h3.uk-text-center.uk-padding-remove.uk-margin-remove",-1159920840),lvlup.crusader.dungeon.elapsing_time.call(null,cljs.core.deref.call(null,time_elapsed))], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.start_button,player_number__$1,system__$1,time_elapsed,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this_player.call(null))], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.modify_time,player_number__$1,system__$1,"-",time_elapsed,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this_player.call(null))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.modify_time,player_number__$1,system__$1,"+",time_elapsed,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this_player.call(null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.cancel,player_number__$1,system__$1,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this_player.call(null))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.pay_with_season_pass,player_number__$1,system__$1,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this_player.call(null)),cljs.core.deref.call(null,loading)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.pay,player_number__$1,system__$1,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this_player.call(null)),cljs.core.deref.call(null,loading)], null)], null);
});
;})(active_member,loading,time_elapsed,valami,players,this_player,vec__57654,player_number,data))
});
lvlup.crusader.dungeon.system = (function lvlup$crusader$dungeon$system(item){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (item__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.uk-width-1-5.valami.dropzone.dropzone2","li.uk-width-1-5.valami.dropzone.dropzone2",-1746359548),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(item__$1),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),0.91], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card.uk-card-secondary","div.uk-card.uk-card-secondary",725560384),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"5px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card-header.uk-padding-small","div.uk-card-header.uk-padding-small",-1952210389),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-grid-small.uk-flex-middle","div.uk-grid-small.uk-flex-middle",-831865867),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-auto","div.uk-width-auto",-1506646300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),(function (){var G__57664 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item__$1);
switch (G__57664) {
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
})(),new cljs.core.Keyword(null,"height","height",1025178622),"40",new cljs.core.Keyword(null,"width","width",-384071477),"40"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-expand","div.uk-width-expand",2031751938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.uk-card-title.uk-margin-remove-bottom.uk-text-truncate","h3.uk-card-title.uk-margin-remove-bottom.uk-text-truncate",-1609379787),[cljs.core.str(new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(item__$1)),cljs.core.str(" - "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item__$1))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.uk-text-meta.uk-margin-remove-top","p.uk-text-meta.uk-margin-remove-top",-506306409),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(item__$1)], null)], null)], null)], null),((cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(item__$1))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.uk-heading.uk-text-center","h3.uk-heading.uk-text-center",391565416),"Foglal\u00E1sok m\u00E1ra... Soon"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.masvalami.draggable","div.masvalami.draggable",829437924),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(item__$1),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"move"], null)], null),cljs.core.map_indexed.call(null,(function (p1__57662_SHARP_,p2__57661_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.player_playing,item__$1,p2__57661_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first.call(null,p2__57661_SHARP_)], null));
}),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(item__$1))], null))], null)], null);
})], null));
});
lvlup.crusader.dungeon.get_member_systems = (function lvlup$crusader$dungeon$get_member_systems(player){
var systems = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"system-map"], null));
return cljs.core.filter.call(null,((function (systems){
return (function (p1__57666_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(p1__57666_SHARP_));
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
return (function (p1__57667_SHARP_){
return (cljs.core.not_EQ_.call(null,null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__57667_SHARP_))) && (cljs.core.not_EQ_.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__57667_SHARP_)));
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
return (function (p1__57668_SHARP_){
return cljs.core._EQ_.call(null,p1__57668_SHARP_,data__$1);
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
return (function (p1__57670_SHARP_,p2__57669_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.player,p2__57669_SHARP_,p1__57670_SHARP_,(4)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__57669_SHARP_)], null));
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
return (function (p1__57671_SHARP_){
return cljs.core.some.call(null,((function (players,systems,invoices,get_member_data){
return (function (a){
return cljs.core._EQ_.call(null,a,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__57671_SHARP_));
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
return (function (p1__57673_SHARP_,p2__57672_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.player,p2__57672_SHARP_,p1__57673_SHARP_,(3)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__57672_SHARP_)], null));
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
return (function (p1__57674_SHARP_){
return cljs.core.some.call(null,((function (players,systems,get_players_playing){
return (function (a){
return cljs.core._EQ_.call(null,a,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__57674_SHARP_));
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
return (function (p1__57676_SHARP_,p2__57675_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.player,p2__57675_SHARP_,p1__57676_SHARP_,(2)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__57675_SHARP_)], null));
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
return (function (p1__57678_SHARP_,p2__57677_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.player,p2__57677_SHARP_,p1__57678_SHARP_,(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__57677_SHARP_)], null));
});})(players,systems,search,switched_member))
,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),((function (players,systems,search,switched_member){
return (function (p1__57679_SHARP_,p2__57680_SHARP_){
return (p1__57679_SHARP_ > p2__57680_SHARP_);
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
return (function (p1__57681_SHARP_){
return cljs.core.some.call(null,((function (systems,players,get_players_playing){
return (function (a){
return cljs.core._EQ_.call(null,a,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__57681_SHARP_));
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
return (function (p1__57683_SHARP_,p2__57682_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.system,p2__57682_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p2__57682_SHARP_)], null));
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
var vec__57689 = cljs.core.filter.call(null,((function (systems,system_name,member_id){
return (function (p1__57684_SHARP_){
return cljs.core._EQ_.call(null,system_name,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__57684_SHARP_));
});})(systems,system_name,member_id))
,cljs.core.deref.call(null,systems));
var filtered_system = cljs.core.nth.call(null,vec__57689,(0),null);
lvlup.crusader.dungeon.notification.call(null,[cljs.core.str(member_id),cljs.core.str(". -> "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(filtered_system))].join(''));

var G__57692 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system);
switch (G__57692) {
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
var vec__57702 = cljs.core.filter.call(null,((function (systems,system_name,other_system){
return (function (p1__57694_SHARP_){
return cljs.core._EQ_.call(null,system_name,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__57694_SHARP_));
});})(systems,system_name,other_system))
,cljs.core.deref.call(null,systems));
var filtered_system = cljs.core.nth.call(null,vec__57702,(0),null);
var vec__57705 = cljs.core.filter.call(null,((function (systems,system_name,other_system,vec__57702,filtered_system){
return (function (p1__57695_SHARP_){
return cljs.core._EQ_.call(null,other_system,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__57695_SHARP_));
});})(systems,system_name,other_system,vec__57702,filtered_system))
,cljs.core.deref.call(null,systems));
var filtered_system2 = cljs.core.nth.call(null,vec__57705,(0),null);
lvlup.crusader.dungeon.notification.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(filtered_system)),cljs.core.str(" <-> "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(filtered_system2))].join(''));

if(((cljs.core._EQ_.call(null,"pc",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system))) && (cljs.core._EQ_.call(null,"pc",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system2)))) || ((cljs.core._EQ_.call(null,"xbox",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system))) && (cljs.core._EQ_.call(null,"xbox",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system2)))) || ((cljs.core._EQ_.call(null,"ps",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system))) && (cljs.core._EQ_.call(null,"ps",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system2)))) || ((cljs.core._EQ_.call(null,"xbox",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system))) && (cljs.core._EQ_.call(null,"ps",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system2)))) || ((cljs.core._EQ_.call(null,"ps",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system))) && (cljs.core._EQ_.call(null,"xbox",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system2))))){
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system2))], null));

return lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system2,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system))], null));
} else {
return lvlup.crusader.dungeon.notification.call(null,"Csak k\u00E9t azonos t\u00EDpus\u00FA rendszert tudsz cser\u00E9lni!");
}
});
lvlup.crusader.dungeon.one_item = (function lvlup$crusader$dungeon$one_item(item,member){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),(30),new cljs.core.Keyword(null,"width","width",-384071477),(30),new cljs.core.Keyword(null,"src","src",-1651076051),(function (){var G__57709 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item);
switch (G__57709) {
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
return (function (p1__57711_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__57711_SHARP_),cljs.core.first.call(null,item));
});})(members,systems))
,cljs.core.deref.call(null,members))));
});})(members,systems))
;
return ((function (members,systems,member){
return (function (item__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"uk-width-1-2@s uk-width-1-2@m uk-width-1-3@l"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card.uk-card-secondary.uk-padding-remove.uk-dark","div.uk-card.uk-card-secondary.uk-padding-remove.uk-dark",-928433420),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opacity","opacity",397153780),0.87,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"10px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-small","div.uk-padding-small",1857323497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-float-right","div.uk-float-right",446370919),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.uk-margin-remove.uk-padding-remove.uk-text-right","h3.uk-margin-remove.uk-padding-remove.uk-text-right",-403492373),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),[cljs.core.str(cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"price","price",22129180),cljs.core.second.call(null,item__$1)))),cljs.core.str(" Ft ")].join('')], null),(cljs.core.truth_(lvlup.crusader.dungeon.plays_QMARK_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(member.call(null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.uk-padding-remove.uk-margin-remove.uk-float-right","h5.uk-padding-remove.uk-margin-remove.uk-float-right",-1121405685),"NEM J\u00C1TSZIK"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.uk-margin-remove.uk-padding-remove.uk-float-right","h5.uk-margin-remove.uk-padding-remove.uk-float-right",-739768631),"J\u00C1TSZIK M\u00C9G"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.uk-margin-remove.uk-text-truncate","h4.uk-margin-remove.uk-text-truncate",-813948027),[cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(member.call(null))),cljs.core.str(".- "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member.call(null)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.uk-margin-remove","h5.uk-margin-remove",1940144770),[cljs.core.str("B\u00E9rlet \u00F3r\u00E1k: "),cljs.core.str(new cljs.core.Keyword(null,"season-pass","season-pass",1518775969).cljs$core$IFn$_invoke$arity$1(member.call(null)))].join('')], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-divider-icon.uk-margin-small.uk-margin-remove-top","div.uk-divider-icon.uk-margin-small.uk-margin-remove-top",-1810725832)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-overflow-auto.uk-width-1-1","div.uk-overflow-auto.uk-width-1-1",-467337532),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"180px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.uk-width-1-1.uk-table-striped.uk-table.uk-table-middle","table.uk-width-1-1.uk-table-striped.uk-table.uk-table-middle",293470447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (members,systems,member){
return (function (p1__57713_SHARP_,p2__57712_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.one_item,p2__57712_SHARP_,member.call(null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p2__57712_SHARP_], null));
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
return (function (p1__57715_SHARP_,p2__57714_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.invoice,p2__57714_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p2__57714_SHARP_], null));
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
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (modify_atom,scrollspy){
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
return (function (p1__57716_SHARP_){
return cljs.core.swap_BANG_.call(null,modify_atom,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),p1__57716_SHARP_.target.value);
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
], null),"+ Hardcore"], null)], null)], null)], null);
});})(modify_atom,scrollspy))
], null));
});
lvlup.crusader.dungeon.registration_input = (function lvlup$crusader$dungeon$registration_input(members){
var max_id = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"max-id"], null));
var search = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"search-member"], null));
return ((function (max_id,search){
return (function (members__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-1-1.uk-sticky.uk-card.uk-grid.uk-grid-stack.uk-margin-remove","div.uk-width-1-1.uk-sticky.uk-card.uk-grid.uk-grid-stack.uk-margin-remove",-900224372),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),"true",new cljs.core.Keyword(null,"data-uk-sticky","data-uk-sticky",1691370808),"true"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#username.uk-input.uk-text-center.uk-padding-remove.uk-first-column","input#username.uk-input.uk-text-center.uk-padding-remove.uk-first-column",-904509676),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (max_id,search){
return (function (p1__57717_SHARP_){
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-members","dungeon/get-members",188408482),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number","number",1570378438),(0),new cljs.core.Keyword(null,"search","search",1564939822),p1__57717_SHARP_.target.value], null)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-search-member","set-search-member",-293591708),p1__57717_SHARP_.target.value], null));
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
return (function (p1__57719_SHARP_,p2__57718_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.modify_member,p2__57718_SHARP_,p1__57719_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__57718_SHARP_)], null));
});})(members,search))
,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),((function (members,search){
return (function (p1__57720_SHARP_,p2__57721_SHARP_){
return (p1__57720_SHARP_ > p2__57721_SHARP_);
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
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),((cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sidenav_state),(4)))?"/Icons/waiting.svg":"/Icons/waiting-active.svg")], null)], null)], null)], null),(function (){var G__57724 = cljs.core.deref.call(null,sidenav_state);
switch (G__57724) {
case (1):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.uk-search.uk-search-large.uk-padding-small.uk-padding-remove-vertical","form.uk-search.uk-search-large.uk-padding-small.uk-padding-remove-vertical",-488520674),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.uk-search-input.uk-animation-slide-top","input.uk-search-input.uk-animation-slide-top",-386031068),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (G__57724,sidenav_state,number,search){
return (function (p1__57722_SHARP_){
cljs.core.reset_BANG_.call(null,number,(20));

lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-members","dungeon/get-members",188408482),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number","number",1570378438),(0),new cljs.core.Keyword(null,"search","search",1564939822),p1__57722_SHARP_.target.value], null)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-search-member","set-search-member",-293591708),p1__57722_SHARP_.target.value], null));
});})(G__57724,sidenav_state,number,search))
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