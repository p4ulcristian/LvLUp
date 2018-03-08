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
return cljs.core.doall.call(null,cljs.core.filter.call(null,(function (p1__124909_SHARP_){
var or__36776__auto__ = lvlup.crusader.dungeon.includes_QMARK_.call(null,lvlup.crusader.dungeon.lower.call(null,cljs.core.deref.call(null,search_term)),lvlup.crusader.dungeon.lower.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__124909_SHARP_)));
if(cljs.core.truth_(or__36776__auto__)){
return or__36776__auto__;
} else {
return cljs.core._EQ_.call(null,parseInt(cljs.core.deref.call(null,search_term)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__124909_SHARP_));
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
var type_price = (function (){var G__124911 = type;
switch (G__124911) {
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
if(((60) > minutes)){
return ((2) * type_price);
} else {
if(((5) > remaining_minutes)){
return (halves * type_price);
} else {
return ((halves + (1)) * type_price);
}
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
return (function (p1__124913_SHARP_){
return cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__124913_SHARP_),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__124913_SHARP_));
});})(all_systems))
,cljs.core.deref.call(null,all_systems)));
var this_player_all_systems = cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (p1__124914_SHARP_){
return cljs.core._EQ_.call(null,parseInt(player_id),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__124914_SHARP_)))));
});})(all_systems,all_players))
,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (a){
return cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(a))),new cljs.core.Keyword(null,"member-id","member-id",606659713));
});})(all_systems,all_players))
,all_players))));
var this_player_systems = cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players,this_player_all_systems){
return (function (p1__124915_SHARP_){
return cljs.core._EQ_.call(null,parseInt(player_id),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__124915_SHARP_)))));
});})(all_systems,all_players,this_player_all_systems))
,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players,this_player_all_systems){
return (function (a){
return cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(a))),new cljs.core.Keyword(null,"start","start",-355208981));
});})(all_systems,all_players,this_player_all_systems))
,all_players))));
var seq__124978_125038 = cljs.core.seq.call(null,this_player_systems);
var chunk__124979_125039 = null;
var count__124980_125040 = (0);
var i__124981_125041 = (0);
while(true){
if((i__124981_125041 < count__124980_125040)){
var system_125042 = cljs.core._nth.call(null,chunk__124979_125039,i__124981_125041);
var number_125043 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system_125042);
var player_125044 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system_125042);
var vec__124982_125045 = cljs.core.filter.call(null,((function (seq__124978_125038,chunk__124979_125039,count__124980_125040,i__124981_125041,number_125043,player_125044,system_125042,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__124916_SHARP_){
return cljs.core._EQ_.call(null,number_125043,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__124916_SHARP_));
});})(seq__124978_125038,chunk__124979_125039,count__124980_125040,i__124981_125041,number_125043,player_125044,system_125042,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_125046 = cljs.core.nth.call(null,vec__124982_125045,(0),null);
var seq__124985_125047 = cljs.core.seq.call(null,player_125044);
var chunk__124986_125048 = null;
var count__124987_125049 = (0);
var i__124988_125050 = (0);
while(true){
if((i__124988_125050 < count__124987_125049)){
var vec__124989_125051 = cljs.core._nth.call(null,chunk__124986_125048,i__124988_125050);
var the_key_125052 = cljs.core.nth.call(null,vec__124989_125051,(0),null);
var place_125053 = cljs.core.nth.call(null,vec__124989_125051,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","add-invoice","dungeon/add-invoice",-1470910835),cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_125053),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place_125053),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id,new cljs.core.Keyword(null,"start","start",-355208981),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_125053)),new cljs.core.Keyword(null,"finish","finish",-586688046),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,[cljs.core.str(cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))].join('')),new cljs.core.Keyword(null,"price","price",22129180),lvlup.crusader.dungeon.minute_to_money.call(null,cljs_time.core.in_seconds.call(null,cljs_time.core.interval.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_125053)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_125053)))], null));

var G__125054 = seq__124985_125047;
var G__125055 = chunk__124986_125048;
var G__125056 = count__124987_125049;
var G__125057 = (i__124988_125050 + (1));
seq__124985_125047 = G__125054;
chunk__124986_125048 = G__125055;
count__124987_125049 = G__125056;
i__124988_125050 = G__125057;
continue;
} else {
var temp__4657__auto___125058 = cljs.core.seq.call(null,seq__124985_125047);
if(temp__4657__auto___125058){
var seq__124985_125059__$1 = temp__4657__auto___125058;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__124985_125059__$1)){
var c__37587__auto___125060 = cljs.core.chunk_first.call(null,seq__124985_125059__$1);
var G__125061 = cljs.core.chunk_rest.call(null,seq__124985_125059__$1);
var G__125062 = c__37587__auto___125060;
var G__125063 = cljs.core.count.call(null,c__37587__auto___125060);
var G__125064 = (0);
seq__124985_125047 = G__125061;
chunk__124986_125048 = G__125062;
count__124987_125049 = G__125063;
i__124988_125050 = G__125064;
continue;
} else {
var vec__124992_125065 = cljs.core.first.call(null,seq__124985_125059__$1);
var the_key_125066 = cljs.core.nth.call(null,vec__124992_125065,(0),null);
var place_125067 = cljs.core.nth.call(null,vec__124992_125065,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","add-invoice","dungeon/add-invoice",-1470910835),cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_125067),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place_125067),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id,new cljs.core.Keyword(null,"start","start",-355208981),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_125067)),new cljs.core.Keyword(null,"finish","finish",-586688046),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,[cljs.core.str(cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))].join('')),new cljs.core.Keyword(null,"price","price",22129180),lvlup.crusader.dungeon.minute_to_money.call(null,cljs_time.core.in_seconds.call(null,cljs_time.core.interval.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_125067)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_125067)))], null));

var G__125068 = cljs.core.next.call(null,seq__124985_125059__$1);
var G__125069 = null;
var G__125070 = (0);
var G__125071 = (0);
seq__124985_125047 = G__125068;
chunk__124986_125048 = G__125069;
count__124987_125049 = G__125070;
i__124988_125050 = G__125071;
continue;
}
} else {
}
}
break;
}

var G__125072 = seq__124978_125038;
var G__125073 = chunk__124979_125039;
var G__125074 = count__124980_125040;
var G__125075 = (i__124981_125041 + (1));
seq__124978_125038 = G__125072;
chunk__124979_125039 = G__125073;
count__124980_125040 = G__125074;
i__124981_125041 = G__125075;
continue;
} else {
var temp__4657__auto___125076 = cljs.core.seq.call(null,seq__124978_125038);
if(temp__4657__auto___125076){
var seq__124978_125077__$1 = temp__4657__auto___125076;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__124978_125077__$1)){
var c__37587__auto___125078 = cljs.core.chunk_first.call(null,seq__124978_125077__$1);
var G__125079 = cljs.core.chunk_rest.call(null,seq__124978_125077__$1);
var G__125080 = c__37587__auto___125078;
var G__125081 = cljs.core.count.call(null,c__37587__auto___125078);
var G__125082 = (0);
seq__124978_125038 = G__125079;
chunk__124979_125039 = G__125080;
count__124980_125040 = G__125081;
i__124981_125041 = G__125082;
continue;
} else {
var system_125083 = cljs.core.first.call(null,seq__124978_125077__$1);
var number_125084 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system_125083);
var player_125085 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system_125083);
var vec__124995_125086 = cljs.core.filter.call(null,((function (seq__124978_125038,chunk__124979_125039,count__124980_125040,i__124981_125041,number_125084,player_125085,system_125083,seq__124978_125077__$1,temp__4657__auto___125076,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__124916_SHARP_){
return cljs.core._EQ_.call(null,number_125084,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__124916_SHARP_));
});})(seq__124978_125038,chunk__124979_125039,count__124980_125040,i__124981_125041,number_125084,player_125085,system_125083,seq__124978_125077__$1,temp__4657__auto___125076,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_125087 = cljs.core.nth.call(null,vec__124995_125086,(0),null);
var seq__124998_125088 = cljs.core.seq.call(null,player_125085);
var chunk__124999_125089 = null;
var count__125000_125090 = (0);
var i__125001_125091 = (0);
while(true){
if((i__125001_125091 < count__125000_125090)){
var vec__125002_125092 = cljs.core._nth.call(null,chunk__124999_125089,i__125001_125091);
var the_key_125093 = cljs.core.nth.call(null,vec__125002_125092,(0),null);
var place_125094 = cljs.core.nth.call(null,vec__125002_125092,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","add-invoice","dungeon/add-invoice",-1470910835),cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_125094),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place_125094),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id,new cljs.core.Keyword(null,"start","start",-355208981),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_125094)),new cljs.core.Keyword(null,"finish","finish",-586688046),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,[cljs.core.str(cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))].join('')),new cljs.core.Keyword(null,"price","price",22129180),lvlup.crusader.dungeon.minute_to_money.call(null,cljs_time.core.in_seconds.call(null,cljs_time.core.interval.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_125094)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_125094)))], null));

var G__125095 = seq__124998_125088;
var G__125096 = chunk__124999_125089;
var G__125097 = count__125000_125090;
var G__125098 = (i__125001_125091 + (1));
seq__124998_125088 = G__125095;
chunk__124999_125089 = G__125096;
count__125000_125090 = G__125097;
i__125001_125091 = G__125098;
continue;
} else {
var temp__4657__auto___125099__$1 = cljs.core.seq.call(null,seq__124998_125088);
if(temp__4657__auto___125099__$1){
var seq__124998_125100__$1 = temp__4657__auto___125099__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__124998_125100__$1)){
var c__37587__auto___125101 = cljs.core.chunk_first.call(null,seq__124998_125100__$1);
var G__125102 = cljs.core.chunk_rest.call(null,seq__124998_125100__$1);
var G__125103 = c__37587__auto___125101;
var G__125104 = cljs.core.count.call(null,c__37587__auto___125101);
var G__125105 = (0);
seq__124998_125088 = G__125102;
chunk__124999_125089 = G__125103;
count__125000_125090 = G__125104;
i__125001_125091 = G__125105;
continue;
} else {
var vec__125005_125106 = cljs.core.first.call(null,seq__124998_125100__$1);
var the_key_125107 = cljs.core.nth.call(null,vec__125005_125106,(0),null);
var place_125108 = cljs.core.nth.call(null,vec__125005_125106,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","add-invoice","dungeon/add-invoice",-1470910835),cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_125108),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place_125108),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id,new cljs.core.Keyword(null,"start","start",-355208981),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_125108)),new cljs.core.Keyword(null,"finish","finish",-586688046),lvlup.crusader.dungeon.convert_to_clojurescript_time.call(null,[cljs.core.str(cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))].join('')),new cljs.core.Keyword(null,"price","price",22129180),lvlup.crusader.dungeon.minute_to_money.call(null,cljs_time.core.in_seconds.call(null,cljs_time.core.interval.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(place_125108)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(place_125108)))], null));

var G__125109 = cljs.core.next.call(null,seq__124998_125100__$1);
var G__125110 = null;
var G__125111 = (0);
var G__125112 = (0);
seq__124998_125088 = G__125109;
chunk__124999_125089 = G__125110;
count__125000_125090 = G__125111;
i__125001_125091 = G__125112;
continue;
}
} else {
}
}
break;
}

var G__125113 = cljs.core.next.call(null,seq__124978_125077__$1);
var G__125114 = null;
var G__125115 = (0);
var G__125116 = (0);
seq__124978_125038 = G__125113;
chunk__124979_125039 = G__125114;
count__124980_125040 = G__125115;
i__124981_125041 = G__125116;
continue;
}
} else {
}
}
break;
}

lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-members-with-id","dungeon/get-members-with-id",-1097562328),cljs.core.vec.call(null,player_id)], null));

var seq__125008 = cljs.core.seq.call(null,this_player_all_systems);
var chunk__125009 = null;
var count__125010 = (0);
var i__125011 = (0);
while(true){
if((i__125011 < count__125010)){
var system = cljs.core._nth.call(null,chunk__125009,i__125011);
var number_125117 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system);
var player_125118 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system);
var vec__125012_125119 = cljs.core.filter.call(null,((function (seq__125008,chunk__125009,count__125010,i__125011,number_125117,player_125118,system,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__124917_SHARP_){
return cljs.core._EQ_.call(null,number_125117,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__124917_SHARP_));
});})(seq__125008,chunk__125009,count__125010,i__125011,number_125117,player_125118,system,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_125120 = cljs.core.nth.call(null,vec__125012_125119,(0),null);
var seq__125015_125121 = cljs.core.seq.call(null,player_125118);
var chunk__125016_125122 = null;
var count__125017_125123 = (0);
var i__125018_125124 = (0);
while(true){
if((i__125018_125124 < count__125017_125123)){
var vec__125019_125125 = cljs.core._nth.call(null,chunk__125016_125122,i__125018_125124);
var the_key_125126 = cljs.core.nth.call(null,vec__125019_125125,(0),null);
var place_125127 = cljs.core.nth.call(null,vec__125019_125125,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_125120,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_125120),the_key_125126))], null));

var G__125128 = seq__125015_125121;
var G__125129 = chunk__125016_125122;
var G__125130 = count__125017_125123;
var G__125131 = (i__125018_125124 + (1));
seq__125015_125121 = G__125128;
chunk__125016_125122 = G__125129;
count__125017_125123 = G__125130;
i__125018_125124 = G__125131;
continue;
} else {
var temp__4657__auto___125132 = cljs.core.seq.call(null,seq__125015_125121);
if(temp__4657__auto___125132){
var seq__125015_125133__$1 = temp__4657__auto___125132;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__125015_125133__$1)){
var c__37587__auto___125134 = cljs.core.chunk_first.call(null,seq__125015_125133__$1);
var G__125135 = cljs.core.chunk_rest.call(null,seq__125015_125133__$1);
var G__125136 = c__37587__auto___125134;
var G__125137 = cljs.core.count.call(null,c__37587__auto___125134);
var G__125138 = (0);
seq__125015_125121 = G__125135;
chunk__125016_125122 = G__125136;
count__125017_125123 = G__125137;
i__125018_125124 = G__125138;
continue;
} else {
var vec__125022_125139 = cljs.core.first.call(null,seq__125015_125133__$1);
var the_key_125140 = cljs.core.nth.call(null,vec__125022_125139,(0),null);
var place_125141 = cljs.core.nth.call(null,vec__125022_125139,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_125120,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_125120),the_key_125140))], null));

var G__125142 = cljs.core.next.call(null,seq__125015_125133__$1);
var G__125143 = null;
var G__125144 = (0);
var G__125145 = (0);
seq__125015_125121 = G__125142;
chunk__125016_125122 = G__125143;
count__125017_125123 = G__125144;
i__125018_125124 = G__125145;
continue;
}
} else {
}
}
break;
}

var G__125146 = seq__125008;
var G__125147 = chunk__125009;
var G__125148 = count__125010;
var G__125149 = (i__125011 + (1));
seq__125008 = G__125146;
chunk__125009 = G__125147;
count__125010 = G__125148;
i__125011 = G__125149;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__125008);
if(temp__4657__auto__){
var seq__125008__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__125008__$1)){
var c__37587__auto__ = cljs.core.chunk_first.call(null,seq__125008__$1);
var G__125150 = cljs.core.chunk_rest.call(null,seq__125008__$1);
var G__125151 = c__37587__auto__;
var G__125152 = cljs.core.count.call(null,c__37587__auto__);
var G__125153 = (0);
seq__125008 = G__125150;
chunk__125009 = G__125151;
count__125010 = G__125152;
i__125011 = G__125153;
continue;
} else {
var system = cljs.core.first.call(null,seq__125008__$1);
var number_125154 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system);
var player_125155 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system);
var vec__125025_125156 = cljs.core.filter.call(null,((function (seq__125008,chunk__125009,count__125010,i__125011,number_125154,player_125155,system,seq__125008__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__124917_SHARP_){
return cljs.core._EQ_.call(null,number_125154,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__124917_SHARP_));
});})(seq__125008,chunk__125009,count__125010,i__125011,number_125154,player_125155,system,seq__125008__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_125157 = cljs.core.nth.call(null,vec__125025_125156,(0),null);
var seq__125028_125158 = cljs.core.seq.call(null,player_125155);
var chunk__125029_125159 = null;
var count__125030_125160 = (0);
var i__125031_125161 = (0);
while(true){
if((i__125031_125161 < count__125030_125160)){
var vec__125032_125162 = cljs.core._nth.call(null,chunk__125029_125159,i__125031_125161);
var the_key_125163 = cljs.core.nth.call(null,vec__125032_125162,(0),null);
var place_125164 = cljs.core.nth.call(null,vec__125032_125162,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_125157,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_125157),the_key_125163))], null));

var G__125165 = seq__125028_125158;
var G__125166 = chunk__125029_125159;
var G__125167 = count__125030_125160;
var G__125168 = (i__125031_125161 + (1));
seq__125028_125158 = G__125165;
chunk__125029_125159 = G__125166;
count__125030_125160 = G__125167;
i__125031_125161 = G__125168;
continue;
} else {
var temp__4657__auto___125169__$1 = cljs.core.seq.call(null,seq__125028_125158);
if(temp__4657__auto___125169__$1){
var seq__125028_125170__$1 = temp__4657__auto___125169__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__125028_125170__$1)){
var c__37587__auto___125171 = cljs.core.chunk_first.call(null,seq__125028_125170__$1);
var G__125172 = cljs.core.chunk_rest.call(null,seq__125028_125170__$1);
var G__125173 = c__37587__auto___125171;
var G__125174 = cljs.core.count.call(null,c__37587__auto___125171);
var G__125175 = (0);
seq__125028_125158 = G__125172;
chunk__125029_125159 = G__125173;
count__125030_125160 = G__125174;
i__125031_125161 = G__125175;
continue;
} else {
var vec__125035_125176 = cljs.core.first.call(null,seq__125028_125170__$1);
var the_key_125177 = cljs.core.nth.call(null,vec__125035_125176,(0),null);
var place_125178 = cljs.core.nth.call(null,vec__125035_125176,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_125157,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_125157),the_key_125177))], null));

var G__125179 = cljs.core.next.call(null,seq__125028_125170__$1);
var G__125180 = null;
var G__125181 = (0);
var G__125182 = (0);
seq__125028_125158 = G__125179;
chunk__125029_125159 = G__125180;
count__125030_125160 = G__125181;
i__125031_125161 = G__125182;
continue;
}
} else {
}
}
break;
}

var G__125183 = cljs.core.next.call(null,seq__125008__$1);
var G__125184 = null;
var G__125185 = (0);
var G__125186 = (0);
seq__125008 = G__125183;
chunk__125009 = G__125184;
count__125010 = G__125185;
i__125011 = G__125186;
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
return (function (p1__125187_SHARP_){
return new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__125187_SHARP_);
});})(all_systems))
,cljs.core.deref.call(null,all_systems)));
var this_player_systems = cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (p1__125188_SHARP_){
return cljs.core._EQ_.call(null,parseInt(player_id),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(p1__125188_SHARP_));
});})(all_systems,all_players))
,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (a){
return cljs.core.contains_QMARK_.call(null,a,new cljs.core.Keyword(null,"start","start",-355208981));
});})(all_systems,all_players))
,cljs.core.map.call(null,((function (all_systems,all_players){
return (function (p1__125189_SHARP_){
return cljs.core.second.call(null,cljs.core.first.call(null,p1__125189_SHARP_));
});})(all_systems,all_players))
,all_players)))));
var total_price = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (all_systems,all_players,this_player_systems){
return (function (p1__125190_SHARP_){
return lvlup.crusader.dungeon.count_time_halves.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(p1__125190_SHARP_)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))));
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
return (function (p1__125191_SHARP_){
return cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__125191_SHARP_),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__125191_SHARP_));
});})(all_systems))
,cljs.core.deref.call(null,all_systems)));
var this_player_all_systems = cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (p1__125192_SHARP_){
return cljs.core._EQ_.call(null,parseInt(player_id),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__125192_SHARP_)))));
});})(all_systems,all_players))
,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (a){
return cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(a))),new cljs.core.Keyword(null,"member-id","member-id",606659713));
});})(all_systems,all_players))
,all_players))));
var this_player_systems = cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players,this_player_all_systems){
return (function (p1__125193_SHARP_){
return cljs.core._EQ_.call(null,parseInt(player_id),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__125193_SHARP_)))));
});})(all_systems,all_players,this_player_all_systems))
,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players,this_player_all_systems){
return (function (a){
return cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(a))),new cljs.core.Keyword(null,"start","start",-355208981));
});})(all_systems,all_players,this_player_all_systems))
,all_players))));
console.log([cljs.core.str("wtf: "),cljs.core.str(all_players)].join(''));

var seq__125286 = cljs.core.seq.call(null,this_player_systems);
var chunk__125287 = null;
var count__125288 = (0);
var i__125289 = (0);
while(true){
if((i__125289 < count__125288)){
var system = cljs.core._nth.call(null,chunk__125287,i__125289);
var number_125376 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system);
var player_125377 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system);
var vec__125290_125378 = cljs.core.filter.call(null,((function (seq__125286,chunk__125287,count__125288,i__125289,number_125376,player_125377,system,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__125194_SHARP_){
return cljs.core._EQ_.call(null,number_125376,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__125194_SHARP_));
});})(seq__125286,chunk__125287,count__125288,i__125289,number_125376,player_125377,system,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_125379 = cljs.core.nth.call(null,vec__125290_125378,(0),null);
var seq__125293_125380 = cljs.core.seq.call(null,player_125377);
var chunk__125294_125381 = null;
var count__125295_125382 = (0);
var i__125296_125383 = (0);
while(true){
if((i__125296_125383 < count__125295_125382)){
var vec__125297_125384 = cljs.core._nth.call(null,chunk__125294_125381,i__125296_125383);
var the_key_125385 = cljs.core.nth.call(null,vec__125297_125384,(0),null);
var place_125386 = cljs.core.nth.call(null,vec__125297_125384,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","season-pass","dungeon/season-pass",-766369009),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"quantity","quantity",-1929050694),((-1) * lvlup.crusader.dungeon.all_items_to_hours.call(null,player_id)),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id], null)], null));

var G__125387 = seq__125293_125380;
var G__125388 = chunk__125294_125381;
var G__125389 = count__125295_125382;
var G__125390 = (i__125296_125383 + (1));
seq__125293_125380 = G__125387;
chunk__125294_125381 = G__125388;
count__125295_125382 = G__125389;
i__125296_125383 = G__125390;
continue;
} else {
var temp__4657__auto___125391 = cljs.core.seq.call(null,seq__125293_125380);
if(temp__4657__auto___125391){
var seq__125293_125392__$1 = temp__4657__auto___125391;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__125293_125392__$1)){
var c__37587__auto___125393 = cljs.core.chunk_first.call(null,seq__125293_125392__$1);
var G__125394 = cljs.core.chunk_rest.call(null,seq__125293_125392__$1);
var G__125395 = c__37587__auto___125393;
var G__125396 = cljs.core.count.call(null,c__37587__auto___125393);
var G__125397 = (0);
seq__125293_125380 = G__125394;
chunk__125294_125381 = G__125395;
count__125295_125382 = G__125396;
i__125296_125383 = G__125397;
continue;
} else {
var vec__125300_125398 = cljs.core.first.call(null,seq__125293_125392__$1);
var the_key_125399 = cljs.core.nth.call(null,vec__125300_125398,(0),null);
var place_125400 = cljs.core.nth.call(null,vec__125300_125398,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","season-pass","dungeon/season-pass",-766369009),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"quantity","quantity",-1929050694),((-1) * lvlup.crusader.dungeon.all_items_to_hours.call(null,player_id)),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id], null)], null));

var G__125401 = cljs.core.next.call(null,seq__125293_125392__$1);
var G__125402 = null;
var G__125403 = (0);
var G__125404 = (0);
seq__125293_125380 = G__125401;
chunk__125294_125381 = G__125402;
count__125295_125382 = G__125403;
i__125296_125383 = G__125404;
continue;
}
} else {
}
}
break;
}

var seq__125303_125405 = cljs.core.seq.call(null,this_player_all_systems);
var chunk__125304_125406 = null;
var count__125305_125407 = (0);
var i__125306_125408 = (0);
while(true){
if((i__125306_125408 < count__125305_125407)){
var system_125409__$1 = cljs.core._nth.call(null,chunk__125304_125406,i__125306_125408);
var number_125410__$1 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system_125409__$1);
var player_125411__$1 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system_125409__$1);
var vec__125307_125412 = cljs.core.filter.call(null,((function (seq__125303_125405,chunk__125304_125406,count__125305_125407,i__125306_125408,seq__125286,chunk__125287,count__125288,i__125289,number_125410__$1,player_125411__$1,system_125409__$1,number_125376,player_125377,vec__125290_125378,filtered_system_125379,system,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__125195_SHARP_){
return cljs.core._EQ_.call(null,number_125410__$1,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__125195_SHARP_));
});})(seq__125303_125405,chunk__125304_125406,count__125305_125407,i__125306_125408,seq__125286,chunk__125287,count__125288,i__125289,number_125410__$1,player_125411__$1,system_125409__$1,number_125376,player_125377,vec__125290_125378,filtered_system_125379,system,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_125413__$1 = cljs.core.nth.call(null,vec__125307_125412,(0),null);
var seq__125310_125414 = cljs.core.seq.call(null,player_125411__$1);
var chunk__125311_125415 = null;
var count__125312_125416 = (0);
var i__125313_125417 = (0);
while(true){
if((i__125313_125417 < count__125312_125416)){
var vec__125314_125418 = cljs.core._nth.call(null,chunk__125311_125415,i__125313_125417);
var the_key_125419 = cljs.core.nth.call(null,vec__125314_125418,(0),null);
var place_125420 = cljs.core.nth.call(null,vec__125314_125418,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_125413__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_125413__$1),the_key_125419))], null));

var G__125421 = seq__125310_125414;
var G__125422 = chunk__125311_125415;
var G__125423 = count__125312_125416;
var G__125424 = (i__125313_125417 + (1));
seq__125310_125414 = G__125421;
chunk__125311_125415 = G__125422;
count__125312_125416 = G__125423;
i__125313_125417 = G__125424;
continue;
} else {
var temp__4657__auto___125425 = cljs.core.seq.call(null,seq__125310_125414);
if(temp__4657__auto___125425){
var seq__125310_125426__$1 = temp__4657__auto___125425;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__125310_125426__$1)){
var c__37587__auto___125427 = cljs.core.chunk_first.call(null,seq__125310_125426__$1);
var G__125428 = cljs.core.chunk_rest.call(null,seq__125310_125426__$1);
var G__125429 = c__37587__auto___125427;
var G__125430 = cljs.core.count.call(null,c__37587__auto___125427);
var G__125431 = (0);
seq__125310_125414 = G__125428;
chunk__125311_125415 = G__125429;
count__125312_125416 = G__125430;
i__125313_125417 = G__125431;
continue;
} else {
var vec__125317_125432 = cljs.core.first.call(null,seq__125310_125426__$1);
var the_key_125433 = cljs.core.nth.call(null,vec__125317_125432,(0),null);
var place_125434 = cljs.core.nth.call(null,vec__125317_125432,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_125413__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_125413__$1),the_key_125433))], null));

var G__125435 = cljs.core.next.call(null,seq__125310_125426__$1);
var G__125436 = null;
var G__125437 = (0);
var G__125438 = (0);
seq__125310_125414 = G__125435;
chunk__125311_125415 = G__125436;
count__125312_125416 = G__125437;
i__125313_125417 = G__125438;
continue;
}
} else {
}
}
break;
}

var G__125439 = seq__125303_125405;
var G__125440 = chunk__125304_125406;
var G__125441 = count__125305_125407;
var G__125442 = (i__125306_125408 + (1));
seq__125303_125405 = G__125439;
chunk__125304_125406 = G__125440;
count__125305_125407 = G__125441;
i__125306_125408 = G__125442;
continue;
} else {
var temp__4657__auto___125443 = cljs.core.seq.call(null,seq__125303_125405);
if(temp__4657__auto___125443){
var seq__125303_125444__$1 = temp__4657__auto___125443;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__125303_125444__$1)){
var c__37587__auto___125445 = cljs.core.chunk_first.call(null,seq__125303_125444__$1);
var G__125446 = cljs.core.chunk_rest.call(null,seq__125303_125444__$1);
var G__125447 = c__37587__auto___125445;
var G__125448 = cljs.core.count.call(null,c__37587__auto___125445);
var G__125449 = (0);
seq__125303_125405 = G__125446;
chunk__125304_125406 = G__125447;
count__125305_125407 = G__125448;
i__125306_125408 = G__125449;
continue;
} else {
var system_125450__$1 = cljs.core.first.call(null,seq__125303_125444__$1);
var number_125451__$1 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system_125450__$1);
var player_125452__$1 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system_125450__$1);
var vec__125320_125453 = cljs.core.filter.call(null,((function (seq__125303_125405,chunk__125304_125406,count__125305_125407,i__125306_125408,seq__125286,chunk__125287,count__125288,i__125289,number_125451__$1,player_125452__$1,system_125450__$1,seq__125303_125444__$1,temp__4657__auto___125443,number_125376,player_125377,vec__125290_125378,filtered_system_125379,system,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__125195_SHARP_){
return cljs.core._EQ_.call(null,number_125451__$1,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__125195_SHARP_));
});})(seq__125303_125405,chunk__125304_125406,count__125305_125407,i__125306_125408,seq__125286,chunk__125287,count__125288,i__125289,number_125451__$1,player_125452__$1,system_125450__$1,seq__125303_125444__$1,temp__4657__auto___125443,number_125376,player_125377,vec__125290_125378,filtered_system_125379,system,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_125454__$1 = cljs.core.nth.call(null,vec__125320_125453,(0),null);
var seq__125323_125455 = cljs.core.seq.call(null,player_125452__$1);
var chunk__125324_125456 = null;
var count__125325_125457 = (0);
var i__125326_125458 = (0);
while(true){
if((i__125326_125458 < count__125325_125457)){
var vec__125327_125459 = cljs.core._nth.call(null,chunk__125324_125456,i__125326_125458);
var the_key_125460 = cljs.core.nth.call(null,vec__125327_125459,(0),null);
var place_125461 = cljs.core.nth.call(null,vec__125327_125459,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_125454__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_125454__$1),the_key_125460))], null));

var G__125462 = seq__125323_125455;
var G__125463 = chunk__125324_125456;
var G__125464 = count__125325_125457;
var G__125465 = (i__125326_125458 + (1));
seq__125323_125455 = G__125462;
chunk__125324_125456 = G__125463;
count__125325_125457 = G__125464;
i__125326_125458 = G__125465;
continue;
} else {
var temp__4657__auto___125466__$1 = cljs.core.seq.call(null,seq__125323_125455);
if(temp__4657__auto___125466__$1){
var seq__125323_125467__$1 = temp__4657__auto___125466__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__125323_125467__$1)){
var c__37587__auto___125468 = cljs.core.chunk_first.call(null,seq__125323_125467__$1);
var G__125469 = cljs.core.chunk_rest.call(null,seq__125323_125467__$1);
var G__125470 = c__37587__auto___125468;
var G__125471 = cljs.core.count.call(null,c__37587__auto___125468);
var G__125472 = (0);
seq__125323_125455 = G__125469;
chunk__125324_125456 = G__125470;
count__125325_125457 = G__125471;
i__125326_125458 = G__125472;
continue;
} else {
var vec__125330_125473 = cljs.core.first.call(null,seq__125323_125467__$1);
var the_key_125474 = cljs.core.nth.call(null,vec__125330_125473,(0),null);
var place_125475 = cljs.core.nth.call(null,vec__125330_125473,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_125454__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_125454__$1),the_key_125474))], null));

var G__125476 = cljs.core.next.call(null,seq__125323_125467__$1);
var G__125477 = null;
var G__125478 = (0);
var G__125479 = (0);
seq__125323_125455 = G__125476;
chunk__125324_125456 = G__125477;
count__125325_125457 = G__125478;
i__125326_125458 = G__125479;
continue;
}
} else {
}
}
break;
}

var G__125480 = cljs.core.next.call(null,seq__125303_125444__$1);
var G__125481 = null;
var G__125482 = (0);
var G__125483 = (0);
seq__125303_125405 = G__125480;
chunk__125304_125406 = G__125481;
count__125305_125407 = G__125482;
i__125306_125408 = G__125483;
continue;
}
} else {
}
}
break;
}

var G__125484 = seq__125286;
var G__125485 = chunk__125287;
var G__125486 = count__125288;
var G__125487 = (i__125289 + (1));
seq__125286 = G__125484;
chunk__125287 = G__125485;
count__125288 = G__125486;
i__125289 = G__125487;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__125286);
if(temp__4657__auto__){
var seq__125286__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__125286__$1)){
var c__37587__auto__ = cljs.core.chunk_first.call(null,seq__125286__$1);
var G__125488 = cljs.core.chunk_rest.call(null,seq__125286__$1);
var G__125489 = c__37587__auto__;
var G__125490 = cljs.core.count.call(null,c__37587__auto__);
var G__125491 = (0);
seq__125286 = G__125488;
chunk__125287 = G__125489;
count__125288 = G__125490;
i__125289 = G__125491;
continue;
} else {
var system = cljs.core.first.call(null,seq__125286__$1);
var number_125492 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system);
var player_125493 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system);
var vec__125333_125494 = cljs.core.filter.call(null,((function (seq__125286,chunk__125287,count__125288,i__125289,number_125492,player_125493,system,seq__125286__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__125194_SHARP_){
return cljs.core._EQ_.call(null,number_125492,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__125194_SHARP_));
});})(seq__125286,chunk__125287,count__125288,i__125289,number_125492,player_125493,system,seq__125286__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_125495 = cljs.core.nth.call(null,vec__125333_125494,(0),null);
var seq__125336_125496 = cljs.core.seq.call(null,player_125493);
var chunk__125337_125497 = null;
var count__125338_125498 = (0);
var i__125339_125499 = (0);
while(true){
if((i__125339_125499 < count__125338_125498)){
var vec__125340_125500 = cljs.core._nth.call(null,chunk__125337_125497,i__125339_125499);
var the_key_125501 = cljs.core.nth.call(null,vec__125340_125500,(0),null);
var place_125502 = cljs.core.nth.call(null,vec__125340_125500,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","season-pass","dungeon/season-pass",-766369009),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"quantity","quantity",-1929050694),((-1) * lvlup.crusader.dungeon.all_items_to_hours.call(null,player_id)),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id], null)], null));

var G__125503 = seq__125336_125496;
var G__125504 = chunk__125337_125497;
var G__125505 = count__125338_125498;
var G__125506 = (i__125339_125499 + (1));
seq__125336_125496 = G__125503;
chunk__125337_125497 = G__125504;
count__125338_125498 = G__125505;
i__125339_125499 = G__125506;
continue;
} else {
var temp__4657__auto___125507__$1 = cljs.core.seq.call(null,seq__125336_125496);
if(temp__4657__auto___125507__$1){
var seq__125336_125508__$1 = temp__4657__auto___125507__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__125336_125508__$1)){
var c__37587__auto___125509 = cljs.core.chunk_first.call(null,seq__125336_125508__$1);
var G__125510 = cljs.core.chunk_rest.call(null,seq__125336_125508__$1);
var G__125511 = c__37587__auto___125509;
var G__125512 = cljs.core.count.call(null,c__37587__auto___125509);
var G__125513 = (0);
seq__125336_125496 = G__125510;
chunk__125337_125497 = G__125511;
count__125338_125498 = G__125512;
i__125339_125499 = G__125513;
continue;
} else {
var vec__125343_125514 = cljs.core.first.call(null,seq__125336_125508__$1);
var the_key_125515 = cljs.core.nth.call(null,vec__125343_125514,(0),null);
var place_125516 = cljs.core.nth.call(null,vec__125343_125514,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","season-pass","dungeon/season-pass",-766369009),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"quantity","quantity",-1929050694),((-1) * lvlup.crusader.dungeon.all_items_to_hours.call(null,player_id)),new cljs.core.Keyword(null,"member-id","member-id",606659713),player_id], null)], null));

var G__125517 = cljs.core.next.call(null,seq__125336_125508__$1);
var G__125518 = null;
var G__125519 = (0);
var G__125520 = (0);
seq__125336_125496 = G__125517;
chunk__125337_125497 = G__125518;
count__125338_125498 = G__125519;
i__125339_125499 = G__125520;
continue;
}
} else {
}
}
break;
}

var seq__125346_125521 = cljs.core.seq.call(null,this_player_all_systems);
var chunk__125347_125522 = null;
var count__125348_125523 = (0);
var i__125349_125524 = (0);
while(true){
if((i__125349_125524 < count__125348_125523)){
var system_125525__$1 = cljs.core._nth.call(null,chunk__125347_125522,i__125349_125524);
var number_125526__$1 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system_125525__$1);
var player_125527__$1 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system_125525__$1);
var vec__125350_125528 = cljs.core.filter.call(null,((function (seq__125346_125521,chunk__125347_125522,count__125348_125523,i__125349_125524,seq__125286,chunk__125287,count__125288,i__125289,number_125526__$1,player_125527__$1,system_125525__$1,number_125492,player_125493,vec__125333_125494,filtered_system_125495,system,seq__125286__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__125195_SHARP_){
return cljs.core._EQ_.call(null,number_125526__$1,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__125195_SHARP_));
});})(seq__125346_125521,chunk__125347_125522,count__125348_125523,i__125349_125524,seq__125286,chunk__125287,count__125288,i__125289,number_125526__$1,player_125527__$1,system_125525__$1,number_125492,player_125493,vec__125333_125494,filtered_system_125495,system,seq__125286__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_125529__$1 = cljs.core.nth.call(null,vec__125350_125528,(0),null);
var seq__125353_125530 = cljs.core.seq.call(null,player_125527__$1);
var chunk__125354_125531 = null;
var count__125355_125532 = (0);
var i__125356_125533 = (0);
while(true){
if((i__125356_125533 < count__125355_125532)){
var vec__125357_125534 = cljs.core._nth.call(null,chunk__125354_125531,i__125356_125533);
var the_key_125535 = cljs.core.nth.call(null,vec__125357_125534,(0),null);
var place_125536 = cljs.core.nth.call(null,vec__125357_125534,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_125529__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_125529__$1),the_key_125535))], null));

var G__125537 = seq__125353_125530;
var G__125538 = chunk__125354_125531;
var G__125539 = count__125355_125532;
var G__125540 = (i__125356_125533 + (1));
seq__125353_125530 = G__125537;
chunk__125354_125531 = G__125538;
count__125355_125532 = G__125539;
i__125356_125533 = G__125540;
continue;
} else {
var temp__4657__auto___125541__$1 = cljs.core.seq.call(null,seq__125353_125530);
if(temp__4657__auto___125541__$1){
var seq__125353_125542__$1 = temp__4657__auto___125541__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__125353_125542__$1)){
var c__37587__auto___125543 = cljs.core.chunk_first.call(null,seq__125353_125542__$1);
var G__125544 = cljs.core.chunk_rest.call(null,seq__125353_125542__$1);
var G__125545 = c__37587__auto___125543;
var G__125546 = cljs.core.count.call(null,c__37587__auto___125543);
var G__125547 = (0);
seq__125353_125530 = G__125544;
chunk__125354_125531 = G__125545;
count__125355_125532 = G__125546;
i__125356_125533 = G__125547;
continue;
} else {
var vec__125360_125548 = cljs.core.first.call(null,seq__125353_125542__$1);
var the_key_125549 = cljs.core.nth.call(null,vec__125360_125548,(0),null);
var place_125550 = cljs.core.nth.call(null,vec__125360_125548,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_125529__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_125529__$1),the_key_125549))], null));

var G__125551 = cljs.core.next.call(null,seq__125353_125542__$1);
var G__125552 = null;
var G__125553 = (0);
var G__125554 = (0);
seq__125353_125530 = G__125551;
chunk__125354_125531 = G__125552;
count__125355_125532 = G__125553;
i__125356_125533 = G__125554;
continue;
}
} else {
}
}
break;
}

var G__125555 = seq__125346_125521;
var G__125556 = chunk__125347_125522;
var G__125557 = count__125348_125523;
var G__125558 = (i__125349_125524 + (1));
seq__125346_125521 = G__125555;
chunk__125347_125522 = G__125556;
count__125348_125523 = G__125557;
i__125349_125524 = G__125558;
continue;
} else {
var temp__4657__auto___125559__$1 = cljs.core.seq.call(null,seq__125346_125521);
if(temp__4657__auto___125559__$1){
var seq__125346_125560__$1 = temp__4657__auto___125559__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__125346_125560__$1)){
var c__37587__auto___125561 = cljs.core.chunk_first.call(null,seq__125346_125560__$1);
var G__125562 = cljs.core.chunk_rest.call(null,seq__125346_125560__$1);
var G__125563 = c__37587__auto___125561;
var G__125564 = cljs.core.count.call(null,c__37587__auto___125561);
var G__125565 = (0);
seq__125346_125521 = G__125562;
chunk__125347_125522 = G__125563;
count__125348_125523 = G__125564;
i__125349_125524 = G__125565;
continue;
} else {
var system_125566__$1 = cljs.core.first.call(null,seq__125346_125560__$1);
var number_125567__$1 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(system_125566__$1);
var player_125568__$1 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(system_125566__$1);
var vec__125363_125569 = cljs.core.filter.call(null,((function (seq__125346_125521,chunk__125347_125522,count__125348_125523,i__125349_125524,seq__125286,chunk__125287,count__125288,i__125289,number_125567__$1,player_125568__$1,system_125566__$1,seq__125346_125560__$1,temp__4657__auto___125559__$1,number_125492,player_125493,vec__125333_125494,filtered_system_125495,system,seq__125286__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems){
return (function (p1__125195_SHARP_){
return cljs.core._EQ_.call(null,number_125567__$1,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__125195_SHARP_));
});})(seq__125346_125521,chunk__125347_125522,count__125348_125523,i__125349_125524,seq__125286,chunk__125287,count__125288,i__125289,number_125567__$1,player_125568__$1,system_125566__$1,seq__125346_125560__$1,temp__4657__auto___125559__$1,number_125492,player_125493,vec__125333_125494,filtered_system_125495,system,seq__125286__$1,temp__4657__auto__,all_systems,all_players,this_player_all_systems,this_player_systems))
,cljs.core.deref.call(null,all_systems));
var filtered_system_125570__$1 = cljs.core.nth.call(null,vec__125363_125569,(0),null);
var seq__125366_125571 = cljs.core.seq.call(null,player_125568__$1);
var chunk__125367_125572 = null;
var count__125368_125573 = (0);
var i__125369_125574 = (0);
while(true){
if((i__125369_125574 < count__125368_125573)){
var vec__125370_125575 = cljs.core._nth.call(null,chunk__125367_125572,i__125369_125574);
var the_key_125576 = cljs.core.nth.call(null,vec__125370_125575,(0),null);
var place_125577 = cljs.core.nth.call(null,vec__125370_125575,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_125570__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_125570__$1),the_key_125576))], null));

var G__125578 = seq__125366_125571;
var G__125579 = chunk__125367_125572;
var G__125580 = count__125368_125573;
var G__125581 = (i__125369_125574 + (1));
seq__125366_125571 = G__125578;
chunk__125367_125572 = G__125579;
count__125368_125573 = G__125580;
i__125369_125574 = G__125581;
continue;
} else {
var temp__4657__auto___125582__$2 = cljs.core.seq.call(null,seq__125366_125571);
if(temp__4657__auto___125582__$2){
var seq__125366_125583__$1 = temp__4657__auto___125582__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__125366_125583__$1)){
var c__37587__auto___125584 = cljs.core.chunk_first.call(null,seq__125366_125583__$1);
var G__125585 = cljs.core.chunk_rest.call(null,seq__125366_125583__$1);
var G__125586 = c__37587__auto___125584;
var G__125587 = cljs.core.count.call(null,c__37587__auto___125584);
var G__125588 = (0);
seq__125366_125571 = G__125585;
chunk__125367_125572 = G__125586;
count__125368_125573 = G__125587;
i__125369_125574 = G__125588;
continue;
} else {
var vec__125373_125589 = cljs.core.first.call(null,seq__125366_125583__$1);
var the_key_125590 = cljs.core.nth.call(null,vec__125373_125589,(0),null);
var place_125591 = cljs.core.nth.call(null,vec__125373_125589,(1),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system_125570__$1,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system_125570__$1),the_key_125590))], null));

var G__125592 = cljs.core.next.call(null,seq__125366_125583__$1);
var G__125593 = null;
var G__125594 = (0);
var G__125595 = (0);
seq__125366_125571 = G__125592;
chunk__125367_125572 = G__125593;
count__125368_125573 = G__125594;
i__125369_125574 = G__125595;
continue;
}
} else {
}
}
break;
}

var G__125596 = cljs.core.next.call(null,seq__125346_125560__$1);
var G__125597 = null;
var G__125598 = (0);
var G__125599 = (0);
seq__125346_125521 = G__125596;
chunk__125347_125522 = G__125597;
count__125348_125523 = G__125598;
i__125349_125524 = G__125599;
continue;
}
} else {
}
}
break;
}

var G__125600 = cljs.core.next.call(null,seq__125286__$1);
var G__125601 = null;
var G__125602 = (0);
var G__125603 = (0);
seq__125286 = G__125600;
chunk__125287 = G__125601;
count__125288 = G__125602;
i__125289 = G__125603;
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
return (function (p1__125604_SHARP_){
return new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__125604_SHARP_);
});})(all_systems))
,cljs.core.deref.call(null,all_systems)));
var this_player_systems = cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (p1__125605_SHARP_){
return cljs.core._EQ_.call(null,parseInt(player_id),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(p1__125605_SHARP_));
});})(all_systems,all_players))
,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (all_systems,all_players){
return (function (a){
return cljs.core.contains_QMARK_.call(null,a,new cljs.core.Keyword(null,"start","start",-355208981));
});})(all_systems,all_players))
,cljs.core.map.call(null,((function (all_systems,all_players){
return (function (p1__125606_SHARP_){
return cljs.core.second.call(null,cljs.core.first.call(null,p1__125606_SHARP_));
});})(all_systems,all_players))
,all_players)))));
var total_price = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (all_systems,all_players,this_player_systems){
return (function (p1__125607_SHARP_){
return lvlup.crusader.dungeon.minute_to_money.call(null,(cljs.core.truth_(cljs_time.core.before_QMARK_.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(p1__125607_SHARP_)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1)))))?cljs_time.core.in_seconds.call(null,cljs_time.core.interval.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(p1__125607_SHARP_)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1))))):(0)),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__125607_SHARP_));
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
lvlup.crusader.dungeon.player_playing = (function lvlup$crusader$dungeon$player_playing(system,p__125609){
var vec__125617 = p__125609;
var player_number = cljs.core.nth.call(null,vec__125617,(0),null);
var data = cljs.core.nth.call(null,vec__125617,(1),null);
var active_member = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"active-member"], null));
var loading = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"loading"], null));
var time_elapsed = reagent.core.atom.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(data))?lvlup.crusader.dungeon.calculate_time_interval.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(data)),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(1)))):null));
var valami = reagent.core.atom.call(null,setInterval(((function (active_member,loading,time_elapsed,vec__125617,player_number,data){
return (function (){
return cljs.core.reset_BANG_.call(null,time_elapsed,(cljs.core.deref.call(null,time_elapsed) + (1)));
});})(active_member,loading,time_elapsed,vec__125617,player_number,data))
,(1000)));
var players = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"players-data"], null));
var this_player = ((function (active_member,loading,time_elapsed,valami,players,vec__125617,player_number,data){
return (function (){
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (active_member,loading,time_elapsed,valami,players,vec__125617,player_number,data){
return (function (p1__125608_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__125608_SHARP_),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(data));
});})(active_member,loading,time_elapsed,valami,players,vec__125617,player_number,data))
,cljs.core.deref.call(null,players)));
});})(active_member,loading,time_elapsed,valami,players,vec__125617,player_number,data))
;
return ((function (active_member,loading,time_elapsed,valami,players,this_player,vec__125617,player_number,data){
return (function (system__$1,p__125620){
var vec__125621 = p__125620;
var player_number__$1 = cljs.core.nth.call(null,vec__125621,(0),null);
var data__$1 = cljs.core.nth.call(null,vec__125621,(1),null);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-remove.uk-animation-fade","div.uk-padding-remove.uk-animation-fade",1654815180),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1px solid white"], null),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(data__$1),cljs.core.deref.call(null,active_member)))?"uk-card-primary":"uk-card-secondary")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-small.uk-padding-remove-bottom","div.uk-padding-small.uk-padding-remove-bottom",-1972330897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(this_player.call(null))),cljs.core.str(" - "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this_player.call(null)))].join('')], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(data__$1))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-text-center","div.uk-text-center",-1334382774),[cljs.core.str(lvlup.crusader.dungeon.convert_time.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(data__$1)))),cljs.core.str(" - "),cljs.core.str(lvlup.crusader.dungeon.minute_to_money.call(null,cljs.core.deref.call(null,time_elapsed),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data__$1))),cljs.core.str(" Ft")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.uk-text-center.uk-padding-remove.uk-margin-remove","h3.uk-text-center.uk-padding-remove.uk-margin-remove",-1159920840),lvlup.crusader.dungeon.elapsing_time.call(null,cljs.core.deref.call(null,time_elapsed))], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.start_button,player_number__$1,system__$1,time_elapsed,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this_player.call(null))], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.modify_time,player_number__$1,system__$1,"-",time_elapsed,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this_player.call(null))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.modify_time,player_number__$1,system__$1,"+",time_elapsed,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this_player.call(null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.cancel,player_number__$1,system__$1,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this_player.call(null))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.pay_with_season_pass,player_number__$1,system__$1,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this_player.call(null)),cljs.core.deref.call(null,loading)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.pay,player_number__$1,system__$1,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this_player.call(null)),cljs.core.deref.call(null,loading)], null)], null);
});
;})(active_member,loading,time_elapsed,valami,players,this_player,vec__125617,player_number,data))
});
lvlup.crusader.dungeon.system = (function lvlup$crusader$dungeon$system(item){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (item__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.uk-width-1-5.valami.dropzone.dropzone2","li.uk-width-1-5.valami.dropzone.dropzone2",-1746359548),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(item__$1),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),0.91], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card.uk-card-secondary","div.uk-card.uk-card-secondary",725560384),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"5px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card-header.uk-padding-small","div.uk-card-header.uk-padding-small",-1952210389),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-grid-small.uk-flex-middle","div.uk-grid-small.uk-flex-middle",-831865867),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-auto","div.uk-width-auto",-1506646300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),(function (){var G__125627 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item__$1);
switch (G__125627) {
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
})(),new cljs.core.Keyword(null,"height","height",1025178622),"40",new cljs.core.Keyword(null,"width","width",-384071477),"40"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-expand","div.uk-width-expand",2031751938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.uk-card-title.uk-margin-remove-bottom.uk-text-truncate","h3.uk-card-title.uk-margin-remove-bottom.uk-text-truncate",-1609379787),[cljs.core.str(new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(item__$1)),cljs.core.str(" - "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item__$1))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.uk-text-meta.uk-margin-remove-top","p.uk-text-meta.uk-margin-remove-top",-506306409),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(item__$1)], null)], null)], null)], null),((cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(item__$1))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.uk-heading.uk-text-center","h3.uk-heading.uk-text-center",391565416),"Foglal\u00E1sok m\u00E1ra... Soon"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.masvalami.draggable","div.masvalami.draggable",829437924),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(item__$1),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"move"], null)], null),cljs.core.map_indexed.call(null,(function (p1__125625_SHARP_,p2__125624_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.player_playing,item__$1,p2__125624_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first.call(null,p2__125624_SHARP_)], null));
}),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(item__$1))], null))], null)], null);
})], null));
});
lvlup.crusader.dungeon.get_member_systems = (function lvlup$crusader$dungeon$get_member_systems(player){
var systems = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"system-map"], null));
return cljs.core.filter.call(null,((function (systems){
return (function (p1__125629_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"member-id","member-id",606659713).cljs$core$IFn$_invoke$arity$1(p1__125629_SHARP_));
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
return (function (p1__125630_SHARP_){
return (cljs.core.not_EQ_.call(null,null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__125630_SHARP_))) && (cljs.core.not_EQ_.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(p1__125630_SHARP_)));
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
return (function (p1__125631_SHARP_){
return cljs.core._EQ_.call(null,p1__125631_SHARP_,data__$1);
});})(invoices,pool,sidenav_state,active_member))
,cljs.core.deref.call(null,pool))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-position-bottom-right","div.uk-position-bottom-right",-1068712487),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-padding-remove.to-the-waiting-pool","button.uk-button.uk-padding-remove.to-the-waiting-pool",210619391),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (invoices,pool,sidenav_state,active_member){
return (function (){
return lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","add-to-waiting-pool","dungeon/add-to-waiting-pool",1741760159),data__$1], null));
});})(invoices,pool,sidenav_state,active_member))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.uk-border-circle","img.uk-border-circle",1982878954),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"30",new cljs.core.Keyword(null,"width","width",-384071477),"30",new cljs.core.Keyword(null,"src","src",-1651076051),"/Icons/time-left.svg"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-position-bottom-right","div.uk-position-bottom-right",-1068712487),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-padding-remove.to-the-waiting-pool","button.uk-button.uk-padding-remove.to-the-waiting-pool",210619391),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (invoices,pool,sidenav_state,active_member){
return (function (){
return lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","remove-from-waiting-pool","dungeon/remove-from-waiting-pool",-1590819980),data__$1], null));
});})(invoices,pool,sidenav_state,active_member))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.uk-border-circle","img.uk-border-circle",1982878954),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"30",new cljs.core.Keyword(null,"width","width",-384071477),"30",new cljs.core.Keyword(null,"src","src",-1651076051),"/Icons/remove.svg"], null)], null)], null)], null)], null):null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card-body.uk-padding-small.uk-margin-remove.uk-width-2-3.uk-dark","div.uk-card-body.uk-padding-small.uk-margin-remove.uk-width-2-3.uk-dark",432627079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data__$1),cljs.core.deref.call(null,active_member)))?"uk-card-primary":"uk-card-default")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.4em",new cljs.core.Keyword(null,"padding","padding",1660304693),"3px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.name-animated","div.name-animated",807272306),[cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data__$1)),cljs.core.str(".-"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(data__$1))].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str("B\u00E9rlet: "),cljs.core.str(new cljs.core.Keyword(null,"season-pass","season-pass",1518775969).cljs$core$IFn$_invoke$arity$1(data__$1))].join('')," \u00F3ra"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str("XP: "),cljs.core.str(new cljs.core.Keyword(null,"total-hours","total-hours",-509359517).cljs$core$IFn$_invoke$arity$1(data__$1))].join('')], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data__$1),cljs.core.deref.call(null,active_member)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str("\u00D6sszesen: "),cljs.core.str(lvlup.crusader.dungeon.all_items_to_money.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data__$1))),cljs.core.str(" Ft")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str("J\u00E1tszott \u00F3r\u00E1k: "),cljs.core.str(lvlup.crusader.dungeon.all_items_to_hours.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data__$1))),cljs.core.str(" \u00F3ra")].join('')], null)], null):null)], null)], null)], null);
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
return (function (p1__125633_SHARP_,p2__125632_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.player,p2__125632_SHARP_,p1__125633_SHARP_,(4)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__125632_SHARP_)], null));
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
return (function (p1__125634_SHARP_){
return cljs.core.some.call(null,((function (players,systems,invoices,get_member_data){
return (function (a){
return cljs.core._EQ_.call(null,a,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__125634_SHARP_));
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
return (function (p1__125636_SHARP_,p2__125635_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.player,p2__125635_SHARP_,p1__125636_SHARP_,(3)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__125635_SHARP_)], null));
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
return (function (p1__125637_SHARP_){
return cljs.core.some.call(null,((function (players,systems,get_players_playing){
return (function (a){
return cljs.core._EQ_.call(null,a,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__125637_SHARP_));
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
return (function (p1__125639_SHARP_,p2__125638_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.player,p2__125638_SHARP_,p1__125639_SHARP_,(2)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__125638_SHARP_)], null));
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
return (function (p1__125641_SHARP_,p2__125640_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.player,p2__125640_SHARP_,p1__125641_SHARP_,(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__125640_SHARP_)], null));
});})(players,systems,search,switched_member))
,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),((function (players,systems,search,switched_member){
return (function (p1__125642_SHARP_,p2__125643_SHARP_){
return (p1__125642_SHARP_ > p2__125643_SHARP_);
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
return (function (p1__125644_SHARP_){
return cljs.core.some.call(null,((function (systems,players,get_players_playing){
return (function (a){
return cljs.core._EQ_.call(null,a,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__125644_SHARP_));
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
return (function (p1__125646_SHARP_,p2__125645_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.system,p2__125645_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p2__125645_SHARP_)], null));
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
var vec__125652 = cljs.core.filter.call(null,((function (systems,system_name,member_id){
return (function (p1__125647_SHARP_){
return cljs.core._EQ_.call(null,system_name,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__125647_SHARP_));
});})(systems,system_name,member_id))
,cljs.core.deref.call(null,systems));
var filtered_system = cljs.core.nth.call(null,vec__125652,(0),null);
lvlup.crusader.dungeon.notification.call(null,[cljs.core.str(member_id),cljs.core.str(". -> "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(filtered_system))].join(''));

var G__125655 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system);
switch (G__125655) {
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
var vec__125665 = cljs.core.filter.call(null,((function (systems,system_name,other_system){
return (function (p1__125657_SHARP_){
return cljs.core._EQ_.call(null,system_name,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__125657_SHARP_));
});})(systems,system_name,other_system))
,cljs.core.deref.call(null,systems));
var filtered_system = cljs.core.nth.call(null,vec__125665,(0),null);
var vec__125668 = cljs.core.filter.call(null,((function (systems,system_name,other_system,vec__125665,filtered_system){
return (function (p1__125658_SHARP_){
return cljs.core._EQ_.call(null,other_system,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__125658_SHARP_));
});})(systems,system_name,other_system,vec__125665,filtered_system))
,cljs.core.deref.call(null,systems));
var filtered_system2 = cljs.core.nth.call(null,vec__125668,(0),null);
lvlup.crusader.dungeon.notification.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(filtered_system)),cljs.core.str(" <-> "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(filtered_system2))].join(''));

if(((cljs.core._EQ_.call(null,"pc",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system))) && (cljs.core._EQ_.call(null,"pc",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system2)))) || ((cljs.core._EQ_.call(null,"xbox",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system))) && (cljs.core._EQ_.call(null,"xbox",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system2)))) || ((cljs.core._EQ_.call(null,"ps",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system))) && (cljs.core._EQ_.call(null,"ps",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system2)))) || ((cljs.core._EQ_.call(null,"xbox",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system))) && (cljs.core._EQ_.call(null,"ps",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system2)))) || ((cljs.core._EQ_.call(null,"ps",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system))) && (cljs.core._EQ_.call(null,"xbox",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(filtered_system2))))){
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system2))], null));

return lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","change","dungeon/change",848358116),cljs.core.assoc.call(null,filtered_system2,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(filtered_system))], null));
} else {
return lvlup.crusader.dungeon.notification.call(null,"Csak k\u00E9t azonos t\u00EDpus\u00FA rendszert tudsz cser\u00E9lni!");
}
});
lvlup.crusader.dungeon.one_item = (function lvlup$crusader$dungeon$one_item(item,member){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),(30),new cljs.core.Keyword(null,"width","width",-384071477),(30),new cljs.core.Keyword(null,"src","src",-1651076051),(function (){var G__125672 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item);
switch (G__125672) {
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
var members = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"players-data"], null));
var systems = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"system-map"], null));
var member = ((function (members,systems){
return (function (){
return cljs.core.first.call(null,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (members,systems){
return (function (p1__125674_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__125674_SHARP_),cljs.core.first.call(null,item));
});})(members,systems))
,cljs.core.deref.call(null,members))));
});})(members,systems))
;
return ((function (members,systems,member){
return (function (item__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"uk-width-1-2@s uk-width-1-2@m uk-width-1-3@l"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card.uk-card-secondary.uk-padding-remove.uk-dark","div.uk-card.uk-card-secondary.uk-padding-remove.uk-dark",-928433420),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opacity","opacity",397153780),0.87,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"10px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-small","div.uk-padding-small",1857323497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-float-right","div.uk-float-right",446370919),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.uk-margin-remove.uk-padding-remove.uk-text-right","h3.uk-margin-remove.uk-padding-remove.uk-text-right",-403492373),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),[cljs.core.str(cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"price","price",22129180),cljs.core.second.call(null,item__$1)))),cljs.core.str(" Ft ")].join('')], null),(cljs.core.truth_(lvlup.crusader.dungeon.plays_QMARK_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(member.call(null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.uk-padding-remove.uk-margin-remove.uk-float-right","h5.uk-padding-remove.uk-margin-remove.uk-float-right",-1121405685),"NEM J\u00C1TSZIK"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.uk-margin-remove.uk-padding-remove.uk-float-right","h5.uk-margin-remove.uk-padding-remove.uk-float-right",-739768631),"J\u00C1TSZIK M\u00C9G"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.uk-margin-remove.uk-text-truncate","h4.uk-margin-remove.uk-text-truncate",-813948027),[cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(member.call(null))),cljs.core.str(".- "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member.call(null)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.uk-margin-remove","h5.uk-margin-remove",1940144770),[cljs.core.str("B\u00E9rlet \u00F3r\u00E1k: "),cljs.core.str(new cljs.core.Keyword(null,"season-pass","season-pass",1518775969).cljs$core$IFn$_invoke$arity$1(member.call(null)))].join('')], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-divider-icon.uk-margin-small.uk-margin-remove-top","div.uk-divider-icon.uk-margin-small.uk-margin-remove-top",-1810725832)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-overflow-auto.uk-width-1-1","div.uk-overflow-auto.uk-width-1-1",-467337532),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"180px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.uk-width-1-1.uk-table-striped.uk-table.uk-table-middle","table.uk-width-1-1.uk-table-striped.uk-table.uk-table-middle",293470447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (members,systems,member){
return (function (p1__125676_SHARP_,p2__125675_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.one_item,p2__125675_SHARP_,member.call(null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p2__125675_SHARP_], null));
});})(members,systems,member))
,cljs.core.second.call(null,item__$1)))], null)], null)], null)], null)], null);
});
;})(members,systems,member))
});
lvlup.crusader.dungeon.checkout = (function lvlup$crusader$dungeon$checkout(){
var invoices = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"invoices"], null));
var get_member_data = ((function (invoices){
return (function (){
return cljs.core.vec.call(null,cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"member-id","member-id",606659713),cljs.core.deref.call(null,invoices))));
});})(invoices))
;
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (invoices,get_member_data){
return (function (){
return lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-members-with-id","dungeon/get-members-with-id",-1097562328),get_member_data.call(null)], null));
});})(invoices,get_member_data))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (invoices,get_member_data){
return (function (){
return lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-members-with-id","dungeon/get-members-with-id",-1097562328),get_member_data.call(null)], null));
});})(invoices,get_member_data))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (invoices,get_member_data){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-remove.uk-margin-remove.uk-grid.uk-child-width-1-1","div.uk-padding-remove.uk-margin-remove.uk-grid.uk-child-width-1-1",974873195),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,invoices),cljs.core.PersistentVector.EMPTY))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-inline","div.uk-inline",-2089757713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/img/pipboy-gangster.png"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.uk-overlay.uk-overlay-primary.uk-position-top-left","h1.uk-overlay.uk-overlay-primary.uk-position-top-left",-1152169278),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"20px"], null)], null),"Senkinek sincs fizetetlen sz\u00E1ml\u00E1ja! :)"], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-grid.uk-grid-small.uk-margin-top","div.uk-grid.uk-grid-small.uk-margin-top",2098034051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),cljs.core.map_indexed.call(null,((function (invoices,get_member_data){
return (function (p1__125678_SHARP_,p2__125677_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.invoice,p2__125677_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p2__125677_SHARP_], null));
});})(invoices,get_member_data))
,cljs.core.sort_by.call(null,cljs.core.first,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"member-id","member-id",606659713),cljs.core.deref.call(null,invoices))))], null))], null);
});})(invoices,get_member_data))
], null));
});
lvlup.crusader.dungeon.modify_member_input = (function lvlup$crusader$dungeon$modify_member_input(){
return null;
});
lvlup.crusader.dungeon.modify_member = (function lvlup$crusader$dungeon$modify_member(member,index){
var modify_atom = reagent.core.atom.call(null,member);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (modify_atom){
return (function (member__$1,index__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-1-2","div.uk-width-1-2",-985513944),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card.uk-card-secondary","div.uk-card.uk-card-secondary",725560384),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-1-1.uk-padding-remove","div.uk-width-1-1.uk-padding-remove",1908070775),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.uk-heading-bullet.uk-width-1-1.uk-padding-remove","h1.uk-heading-bullet.uk-width-1-1.uk-padding-remove",1256829395),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white !important"], null)], null),[cljs.core.str("Id: "),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(member__$1)),cljs.core.str("  - B\u00E9rlet: "),cljs.core.str(new cljs.core.Keyword(null,"season-pass","season-pass",1518775969).cljs$core$IFn$_invoke$arity$1(member__$1))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-position-top-right","div.uk-position-top-right",1203574573),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"data-uk-icon","data-uk-icon",1809176669),"icon: check; ratio: 2.5",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (modify_atom){
return (function (){
lvlup.crusader.dungeon.notification.call(null,"N\u00E9v friss\u00EDtve!");

return lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","update-member","dungeon/update-member",380816955),cljs.core.deref.call(null,modify_atom)], null));
});})(modify_atom))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"data-uk-icon","data-uk-icon",1809176669),"icon: close; ratio: 2.5",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (modify_atom){
return (function (){
lvlup.crusader.dungeon.notification.call(null,"Felhaszn\u00E1l\u00F3 t\u00F6r\u00F6lve!");

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-member","remove-member",1811515040),cljs.core.conj.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(member__$1)], null))], null));

return lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","remove-member","dungeon/remove-member",-481418406),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(member__$1)], null));
});})(modify_atom))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-default.uk-width-1-4.uk-margin-remove","button.uk-button.uk-button-default.uk-width-1-4.uk-margin-remove",-1385383208),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (modify_atom){
return (function (){
cljs.core.swap_BANG_.call(null,modify_atom,cljs.core.assoc,new cljs.core.Keyword(null,"season-pass","season-pass",1518775969),(new cljs.core.Keyword(null,"season-pass","season-pass",1518775969).cljs$core$IFn$_invoke$arity$1(member__$1) - (1)));

lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","update-member","dungeon/update-member",380816955),cljs.core.assoc.call(null,cljs.core.deref.call(null,modify_atom),new cljs.core.Keyword(null,"season-pass","season-pass",1518775969),(new cljs.core.Keyword(null,"season-pass","season-pass",1518775969).cljs$core$IFn$_invoke$arity$1(member__$1) - (1)))], null));

return lvlup.crusader.dungeon.notification.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,modify_atom))),cljs.core.str(" - b\u00E9rlete 1-gyel cs\u00F6kkent")].join(''));
});})(modify_atom))
], null),"-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-default.uk-width-1-4.uk-margin-remove","button.uk-button.uk-button-default.uk-width-1-4.uk-margin-remove",-1385383208),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (modify_atom){
return (function (){
cljs.core.swap_BANG_.call(null,modify_atom,cljs.core.assoc,new cljs.core.Keyword(null,"season-pass","season-pass",1518775969),(new cljs.core.Keyword(null,"season-pass","season-pass",1518775969).cljs$core$IFn$_invoke$arity$1(member__$1) - 0.5));

lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","update-member","dungeon/update-member",380816955),cljs.core.assoc.call(null,cljs.core.deref.call(null,modify_atom),new cljs.core.Keyword(null,"season-pass","season-pass",1518775969),(new cljs.core.Keyword(null,"season-pass","season-pass",1518775969).cljs$core$IFn$_invoke$arity$1(member__$1) - 0.5))], null));

return lvlup.crusader.dungeon.notification.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,modify_atom))),cljs.core.str(" - b\u00E9rlete 0.5-gyel cs\u00F6kkent")].join(''));
});})(modify_atom))
], null),"-.5"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-default.uk-width-1-4.uk-margin-remove","button.uk-button.uk-button-default.uk-width-1-4.uk-margin-remove",-1385383208),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (modify_atom){
return (function (){
cljs.core.swap_BANG_.call(null,modify_atom,cljs.core.assoc,new cljs.core.Keyword(null,"season-pass","season-pass",1518775969),(new cljs.core.Keyword(null,"season-pass","season-pass",1518775969).cljs$core$IFn$_invoke$arity$1(member__$1) + 0.5));

lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","update-member","dungeon/update-member",380816955),cljs.core.assoc.call(null,cljs.core.deref.call(null,modify_atom),new cljs.core.Keyword(null,"season-pass","season-pass",1518775969),(0.5 + new cljs.core.Keyword(null,"season-pass","season-pass",1518775969).cljs$core$IFn$_invoke$arity$1(member__$1)))], null));

return lvlup.crusader.dungeon.notification.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,modify_atom))),cljs.core.str(" - b\u00E9rlete 0.5-gyel n\u0151tt")].join(''));
});})(modify_atom))
], null),"+.5"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-default.uk-width-1-4.uk-margin-remove","button.uk-button.uk-button-default.uk-width-1-4.uk-margin-remove",-1385383208),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (modify_atom){
return (function (){
cljs.core.swap_BANG_.call(null,modify_atom,cljs.core.assoc,new cljs.core.Keyword(null,"season-pass","season-pass",1518775969),(new cljs.core.Keyword(null,"season-pass","season-pass",1518775969).cljs$core$IFn$_invoke$arity$1(member__$1) + (1)));

lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","update-member","dungeon/update-member",380816955),cljs.core.assoc.call(null,cljs.core.deref.call(null,modify_atom),new cljs.core.Keyword(null,"season-pass","season-pass",1518775969),((1) + new cljs.core.Keyword(null,"season-pass","season-pass",1518775969).cljs$core$IFn$_invoke$arity$1(member__$1)))], null));

return lvlup.crusader.dungeon.notification.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,modify_atom)))),cljs.core.str(" - b\u00E9rlete 1-gyel n\u0151tt")].join(''));
});})(modify_atom))
], null),"+1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-1-1.uk-padding-remove.uk-margin-remove","div.uk-width-1-1.uk-padding-remove.uk-margin-remove",-786170666),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.uk-input.uk-text-center","input.uk-input.uk-text-center",1779317614),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (modify_atom){
return (function (p1__125679_SHARP_){
return cljs.core.swap_BANG_.call(null,modify_atom,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),p1__125679_SHARP_.target.value);
});})(modify_atom))
,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,modify_atom))], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-grid.uk-child-width-1-3.uk-margin-remove.uk-width-1-1.uk-padding-remove","div.uk-grid.uk-child-width-1-3.uk-margin-remove.uk-width-1-1.uk-padding-remove",-875820281),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-default","button.uk-button.uk-button-default",161862613),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (modify_atom){
return (function (){
cljs.core.swap_BANG_.call(null,modify_atom,cljs.core.assoc,new cljs.core.Keyword(null,"season-pass","season-pass",1518775969),(new cljs.core.Keyword(null,"season-pass","season-pass",1518775969).cljs$core$IFn$_invoke$arity$1(member__$1) + (6)));

lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","update-member","dungeon/update-member",380816955),cljs.core.assoc.call(null,cljs.core.deref.call(null,modify_atom),new cljs.core.Keyword(null,"season-pass","season-pass",1518775969),((6) + new cljs.core.Keyword(null,"season-pass","season-pass",1518775969).cljs$core$IFn$_invoke$arity$1(member__$1)))], null));

return lvlup.crusader.dungeon.notification.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,modify_atom))),cljs.core.str(" kapott egy Beginner b\u00E9rletet!")].join(''));
});})(modify_atom))
], null),"+Beginner"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-default","button.uk-button.uk-button-default",161862613),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (modify_atom){
return (function (){
cljs.core.swap_BANG_.call(null,modify_atom,cljs.core.assoc,new cljs.core.Keyword(null,"season-pass","season-pass",1518775969),(new cljs.core.Keyword(null,"season-pass","season-pass",1518775969).cljs$core$IFn$_invoke$arity$1(member__$1) + (13)));

lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","update-member","dungeon/update-member",380816955),cljs.core.assoc.call(null,cljs.core.deref.call(null,modify_atom),new cljs.core.Keyword(null,"season-pass","season-pass",1518775969),((13) + new cljs.core.Keyword(null,"season-pass","season-pass",1518775969).cljs$core$IFn$_invoke$arity$1(member__$1)))], null));

return lvlup.crusader.dungeon.notification.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,modify_atom))),cljs.core.str(" kapott egy Medium b\u00E9rletet!")].join(''));
});})(modify_atom))
], null),"+Medium"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-default","button.uk-button.uk-button-default",161862613),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (modify_atom){
return (function (){
cljs.core.swap_BANG_.call(null,modify_atom,cljs.core.assoc,new cljs.core.Keyword(null,"season-pass","season-pass",1518775969),(new cljs.core.Keyword(null,"season-pass","season-pass",1518775969).cljs$core$IFn$_invoke$arity$1(member__$1) + (28)));

lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","update-member","dungeon/update-member",380816955),cljs.core.assoc.call(null,cljs.core.deref.call(null,modify_atom),new cljs.core.Keyword(null,"season-pass","season-pass",1518775969),((28) + new cljs.core.Keyword(null,"season-pass","season-pass",1518775969).cljs$core$IFn$_invoke$arity$1(member__$1)))], null));

return lvlup.crusader.dungeon.notification.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,modify_atom))),cljs.core.str(" kapott egy Hardcore b\u00E9rletet!")].join(''));
});})(modify_atom))
], null),"+Hardcore"], null)], null)], null)], null);
});})(modify_atom))
], null));
});
lvlup.crusader.dungeon.registration_input = (function lvlup$crusader$dungeon$registration_input(members){
var max_id = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"max-id"], null));
var search = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"search-member"], null));
var the_timeout = reagent.core.atom.call(null,null);
return ((function (max_id,search,the_timeout){
return (function (members__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-1-1.uk-sticky.uk-card.uk-grid.uk-grid-stack.uk-margin-remove","div.uk-width-1-1.uk-sticky.uk-card.uk-grid.uk-grid-stack.uk-margin-remove",-900224372),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),"true",new cljs.core.Keyword(null,"data-uk-sticky","data-uk-sticky",1691370808),"true"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#username.uk-input.uk-text-center.uk-padding-remove.uk-first-column","input#username.uk-input.uk-text-center.uk-padding-remove.uk-first-column",-904509676),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (max_id,search,the_timeout){
return (function (p1__125680_SHARP_){
if(cljs.core.truth_(cljs.core.deref.call(null,the_timeout))){
window.clearTimeout(cljs.core.deref.call(null,the_timeout));
} else {
}

return cljs.core.reset_BANG_.call(null,the_timeout,window.setTimeout(((function (max_id,search,the_timeout){
return (function (a){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-search-member","set-search-member",-293591708),a], null));
});})(max_id,search,the_timeout))
,(500),p1__125680_SHARP_.target.value));
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
goog.events.listen(el,event_type,(function (p1__125681_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__125681_SHARP_);
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
return (function (state_125770){
var state_val_125771 = (state_125770[(1)]);
if((state_val_125771 === (1))){
var state_125770__$1 = state_125770;
var statearr_125772_125788 = state_125770__$1;
(statearr_125772_125788[(2)] = null);

(statearr_125772_125788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125771 === (2))){
var state_125770__$1 = state_125770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_125770__$1,(4),chan);
} else {
if((state_val_125771 === (3))){
var inst_125768 = (state_125770[(2)]);
var state_125770__$1 = state_125770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_125770__$1,inst_125768);
} else {
if((state_val_125771 === (4))){
var inst_125737 = (state_125770[(2)]);
var inst_125738 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_125739 = [new cljs.core.Keyword(null,"data","data",-232669377),"lazy-number"];
var inst_125740 = (new cljs.core.PersistentVector(null,2,(5),inst_125738,inst_125739,null));
var inst_125741 = re_frame.core.subscribe.call(null,inst_125740);
var inst_125742 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_125743 = [new cljs.core.Keyword(null,"data","data",-232669377),"search-member"];
var inst_125744 = (new cljs.core.PersistentVector(null,2,(5),inst_125742,inst_125743,null));
var inst_125745 = re_frame.core.subscribe.call(null,inst_125744);
var inst_125746 = lvlup.crusader.dungeon.lazy_load_QMARK_.call(null);
var state_125770__$1 = (function (){var statearr_125773 = state_125770;
(statearr_125773[(7)] = inst_125745);

(statearr_125773[(8)] = inst_125737);

(statearr_125773[(9)] = inst_125741);

return statearr_125773;
})();
if(cljs.core.truth_(inst_125746)){
var statearr_125774_125789 = state_125770__$1;
(statearr_125774_125789[(1)] = (5));

} else {
var statearr_125775_125790 = state_125770__$1;
(statearr_125775_125790[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125771 === (5))){
var inst_125745 = (state_125770[(7)]);
var inst_125741 = (state_125770[(9)]);
var inst_125748 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_125749 = [new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"search","search",1564939822)];
var inst_125750 = cljs.core.deref.call(null,inst_125741);
var inst_125751 = cljs.core.deref.call(null,inst_125745);
var inst_125752 = [inst_125750,inst_125751];
var inst_125753 = cljs.core.PersistentHashMap.fromArrays(inst_125749,inst_125752);
var inst_125754 = [new cljs.core.Keyword("dungeon","get-members","dungeon/get-members",188408482),inst_125753];
var inst_125755 = (new cljs.core.PersistentVector(null,2,(5),inst_125748,inst_125754,null));
var inst_125756 = lvlup.sente.chsk_send_BANG_.call(null,inst_125755);
var inst_125757 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_125758 = cljs.core.deref.call(null,inst_125741);
var inst_125759 = ((20) + inst_125758);
var inst_125760 = [new cljs.core.Keyword(null,"set-lazy-number","set-lazy-number",1553898441),inst_125759];
var inst_125761 = (new cljs.core.PersistentVector(null,2,(5),inst_125757,inst_125760,null));
var inst_125762 = re_frame.core.dispatch.call(null,inst_125761);
var state_125770__$1 = (function (){var statearr_125776 = state_125770;
(statearr_125776[(10)] = inst_125756);

return statearr_125776;
})();
var statearr_125777_125791 = state_125770__$1;
(statearr_125777_125791[(2)] = inst_125762);

(statearr_125777_125791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125771 === (6))){
var state_125770__$1 = state_125770;
var statearr_125778_125792 = state_125770__$1;
(statearr_125778_125792[(2)] = null);

(statearr_125778_125792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125771 === (7))){
var inst_125765 = (state_125770[(2)]);
var state_125770__$1 = (function (){var statearr_125779 = state_125770;
(statearr_125779[(11)] = inst_125765);

return statearr_125779;
})();
var statearr_125780_125793 = state_125770__$1;
(statearr_125780_125793[(2)] = null);

(statearr_125780_125793[(1)] = (2));


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
var statearr_125784 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_125784[(0)] = lvlup$crusader$dungeon$listen_BANG__$_state_machine__39736__auto__);

(statearr_125784[(1)] = (1));

return statearr_125784;
});
var lvlup$crusader$dungeon$listen_BANG__$_state_machine__39736__auto____1 = (function (state_125770){
while(true){
var ret_value__39737__auto__ = (function (){try{while(true){
var result__39738__auto__ = switch__39735__auto__.call(null,state_125770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39738__auto__;
}
break;
}
}catch (e125785){if((e125785 instanceof Object)){
var ex__39739__auto__ = e125785;
var statearr_125786_125794 = state_125770;
(statearr_125786_125794[(5)] = ex__39739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_125770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e125785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__125795 = state_125770;
state_125770 = G__125795;
continue;
} else {
return ret_value__39737__auto__;
}
break;
}
});
lvlup$crusader$dungeon$listen_BANG__$_state_machine__39736__auto__ = function(state_125770){
switch(arguments.length){
case 0:
return lvlup$crusader$dungeon$listen_BANG__$_state_machine__39736__auto____0.call(this);
case 1:
return lvlup$crusader$dungeon$listen_BANG__$_state_machine__39736__auto____1.call(this,state_125770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lvlup$crusader$dungeon$listen_BANG__$_state_machine__39736__auto__.cljs$core$IFn$_invoke$arity$0 = lvlup$crusader$dungeon$listen_BANG__$_state_machine__39736__auto____0;
lvlup$crusader$dungeon$listen_BANG__$_state_machine__39736__auto__.cljs$core$IFn$_invoke$arity$1 = lvlup$crusader$dungeon$listen_BANG__$_state_machine__39736__auto____1;
return lvlup$crusader$dungeon$listen_BANG__$_state_machine__39736__auto__;
})()
;})(switch__39735__auto__,c__39756__auto__,chan))
})();
var state__39758__auto__ = (function (){var statearr_125787 = f__39757__auto__.call(null);
(statearr_125787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39756__auto__);

return statearr_125787;
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
return (function (p1__125797_SHARP_,p2__125796_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.modify_member,p2__125796_SHARP_,p1__125797_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__125796_SHARP_)], null));
});})(members,search))
,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),((function (members,search){
return (function (p1__125798_SHARP_,p2__125799_SHARP_){
return (p1__125798_SHARP_ > p2__125799_SHARP_);
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
var the_timeout = reagent.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (sidenav_state,number,the_timeout){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-search-member","set-search-member",-293591708),""], null));
});})(sidenav_state,number,the_timeout))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (sidenav_state,number,the_timeout){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#sidenav","div#sidenav",-372957880),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-offcanvas","data-uk-offcanvas",-993697617),"flip: true"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-offcanvas-bar.uk-padding-remove","div.uk-offcanvas-bar.uk-padding-remove",847248213),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-grid.uk-child-width-1-4.uk-padding-small","div.uk-grid.uk-child-width-1-4.uk-padding-small",-1316736813),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (sidenav_state,number,the_timeout){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-sidenav-state","set-sidenav-state",-670452979),(1)], null));
});})(sidenav_state,number,the_timeout))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),((cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sidenav_state),(1)))?"/Icons/search.svg":"/Icons/search-active.svg")], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (sidenav_state,number,the_timeout){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-sidenav-state","set-sidenav-state",-670452979),(2)], null));
});})(sidenav_state,number,the_timeout))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),((cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sidenav_state),(2)))?"/Icons/playing.svg":"/Icons/playing-active.svg")], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (sidenav_state,number,the_timeout){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-sidenav-state","set-sidenav-state",-670452979),(3)], null));
});})(sidenav_state,number,the_timeout))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),((cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sidenav_state),(3)))?"/Icons/payment-method.svg":"/Icons/cash-active.svg")], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (sidenav_state,number,the_timeout){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-sidenav-state","set-sidenav-state",-670452979),(4)], null));
});})(sidenav_state,number,the_timeout))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),((cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sidenav_state),(4)))?"/Icons/waiting.svg":"/Icons/waiting-active.svg")], null)], null)], null)], null),(function (){var G__125802 = cljs.core.deref.call(null,sidenav_state);
switch (G__125802) {
case (1):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.uk-search.uk-search-large.uk-padding-small.uk-padding-remove-vertical","form.uk-search.uk-search-large.uk-padding-small.uk-padding-remove-vertical",-488520674),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.uk-search-input.uk-animation-slide-top","input.uk-search-input.uk-animation-slide-top",-386031068),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (G__125802,sidenav_state,number,the_timeout){
return (function (p1__125800_SHARP_){
cljs.core.reset_BANG_.call(null,number,(20));

if(cljs.core.truth_(cljs.core.deref.call(null,the_timeout))){
window.clearTimeout(cljs.core.deref.call(null,the_timeout));
} else {
}

return cljs.core.reset_BANG_.call(null,the_timeout,window.setTimeout(((function (G__125802,sidenav_state,number,the_timeout){
return (function (a){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-search-member","set-search-member",-293591708),a], null));
});})(G__125802,sidenav_state,number,the_timeout))
,(500),p1__125800_SHARP_.target.value));
});})(G__125802,sidenav_state,number,the_timeout))
,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Keres\u00E9s",new cljs.core.Keyword(null,"type","type",1174270348),"search"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.gamers], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvlup.crusader.dungeon.show_20_more,number], null)], null);

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
});})(sidenav_state,number,the_timeout))
], null));
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