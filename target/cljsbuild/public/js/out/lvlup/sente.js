// Compiled by ClojureScript 1.9.229 {}
goog.provide('lvlup.sente');
goog.require('cljs.core');
goog.require('taoensso.sente');
goog.require('taoensso.sente.packers.transit');
goog.require('taoensso.timbre');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('taoensso.encore');
goog.require('cljs.reader');
goog.require('re_frame.core');
lvlup.sente.notification = (function lvlup$sente$notification(valami){
return UIkit.notification([cljs.core.str("<div class='uk-padding-small uk-card uk-card-secondary notification-style'><span uk-icon='icon: check'></span> "),cljs.core.str(valami),cljs.core.str("</div>")].join(''),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),"bottom-left"], null)));
});
lvlup.sente.notification_sente = (function lvlup$sente$notification_sente(var_args){
var args__37858__auto__ = [];
var len__37851__auto___114647 = arguments.length;
var i__37852__auto___114648 = (0);
while(true){
if((i__37852__auto___114648 < len__37851__auto___114647)){
args__37858__auto__.push((arguments[i__37852__auto___114648]));

var G__114649 = (i__37852__auto___114648 + (1));
i__37852__auto___114648 = G__114649;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((1) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((1)),(0),null)):null);
return lvlup.sente.notification_sente.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37859__auto__);
});

lvlup.sente.notification_sente.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
var msg = cljs.core.apply.call(null,taoensso.encore.format,fmt,args);
return lvlup.sente.notification.call(null,[cljs.core.str(msg)].join(''));
});

lvlup.sente.notification_sente.cljs$lang$maxFixedArity = (1);

lvlup.sente.notification_sente.cljs$lang$applyTo = (function (seq114645){
var G__114646 = cljs.core.first.call(null,seq114645);
var seq114645__$1 = cljs.core.next.call(null,seq114645);
return lvlup.sente.notification_sente.cljs$core$IFn$_invoke$arity$variadic(G__114646,seq114645__$1);
});

var rand_chsk_type_114652 = new cljs.core.Keyword(null,"auto","auto",-566279492);
var packer_114653 = new cljs.core.Keyword(null,"edn","edn",1317840885);
var map__114650_114654 = taoensso.sente.make_channel_socket_client_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),rand_chsk_type_114652,new cljs.core.Keyword(null,"packer","packer",66077544),packer_114653], null));
var map__114650_114655__$1 = ((((!((map__114650_114654 == null)))?((((map__114650_114654.cljs$lang$protocol_mask$partition0$ & (64))) || (map__114650_114654.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__114650_114654):map__114650_114654);
var chsk_114656 = cljs.core.get.call(null,map__114650_114655__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_114657 = cljs.core.get.call(null,map__114650_114655__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_114658 = cljs.core.get.call(null,map__114650_114655__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_114659 = cljs.core.get.call(null,map__114650_114655__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
lvlup.sente.chsk = chsk_114656;

lvlup.sente.ch_chsk = ch_recv_114657;

lvlup.sente.chsk_send_BANG_ = send_fn_114658;

lvlup.sente.chsk_state = state_114659;
if(typeof lvlup.sente._event_msg_handler !== 'undefined'){
} else {
/**
 * Multimethod to handle Sente `event-msg`s
 */
lvlup.sente._event_msg_handler = (function (){var method_table__37701__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__37702__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__37703__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__37704__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__37705__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"lvlup.sente","-event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__37705__auto__,method_table__37701__auto__,prefer_table__37702__auto__,method_cache__37703__auto__,cached_hierarchy__37704__auto__));
})();
}
/**
 * Wraps `-event-msg-handler` with logging, error catching, etc.
 */
lvlup.sente.event_msg_handler = (function lvlup$sente$event_msg_handler(p__114660){
var map__114663 = p__114660;
var map__114663__$1 = ((((!((map__114663 == null)))?((((map__114663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__114663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__114663):map__114663);
var ev_msg = map__114663__$1;
var id = cljs.core.get.call(null,map__114663__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.call(null,map__114663__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.call(null,map__114663__$1,new cljs.core.Keyword(null,"event","event",301435442));
return lvlup.sente._event_msg_handler.call(null,ev_msg);
});
cljs.core._add_method.call(null,lvlup.sente._event_msg_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__114665){
var map__114666 = p__114665;
var map__114666__$1 = ((((!((map__114666 == null)))?((((map__114666.cljs$lang$protocol_mask$partition0$ & (64))) || (map__114666.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__114666):map__114666);
var ev_msg = map__114666__$1;
var event = cljs.core.get.call(null,map__114666__$1,new cljs.core.Keyword(null,"event","event",301435442));
return lvlup.sente.notification_sente.call(null,"Unhandled event: %s",event);
}));
cljs.core._add_method.call(null,lvlup.sente._event_msg_handler,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__114668){
var map__114669 = p__114668;
var map__114669__$1 = ((((!((map__114669 == null)))?((((map__114669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__114669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__114669):map__114669);
var ev_msg = map__114669__$1;
var _QMARK_data = cljs.core.get.call(null,map__114669__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var open_QMARK_ = cljs.core.get.call(null,map__114669__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var vec__114671 = (function (){var e = (function (){try{if(cljs.core.vector_QMARK_.call(null,_QMARK_data)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e114674){if((e114674 instanceof Error)){
var e = e114674;
return e;
} else {
throw e114674;

}
}})();
if((e == null)){
return _QMARK_data;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"lvlup.sente",null,"(vector? ?data)",_QMARK_data,e,null);
}
})();
var old_state_map = cljs.core.nth.call(null,vec__114671,(0),null);
var new_state_map = cljs.core.nth.call(null,vec__114671,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(new_state_map))){
lvlup.sente.notification_sente.call(null,"Connected to LvLUp :)",new_state_map);
} else {
}

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-connection-state","set-connection-state",1425405326),new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state_map)], null));
}));
cljs.core._add_method.call(null,lvlup.sente._event_msg_handler,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__114675){
var map__114676 = p__114675;
var map__114676__$1 = ((((!((map__114676 == null)))?((((map__114676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__114676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__114676):map__114676);
var ev_msg = map__114676__$1;
var _QMARK_data = cljs.core.get.call(null,map__114676__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var actual_page = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"actual-page"], null));
var vec__114678 = _QMARK_data;
var action_type = cljs.core.nth.call(null,vec__114678,(0),null);
var data = cljs.core.nth.call(null,vec__114678,(1),null);
var G__114681 = (((action_type instanceof cljs.core.Keyword))?action_type.fqn:null);
switch (G__114681) {
case "dungeon/get-members":
console.log(data);

lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-max-id","dungeon/get-max-id",-1922889201)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-members","set-members",-691682377),cljs.reader.read_string.call(null,data)], null));

break;
case "dungeon/change":
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-system","set-system",1839231132),data], null));

break;
case "dungeon/get-reservations":
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-reservations","set-reservations",-756242129),cljs.reader.read_string.call(null,data)], null));

break;
case "dungeon/set-players-data":
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-players-data","set-players-data",-843286169),cljs.reader.read_string.call(null,data)], null));

break;
case "dungeon/get-invoices":
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-invoices","set-invoices",1477487363),cljs.reader.read_string.call(null,data)], null));

break;
case "dungeon/get-dungeon":
var G__114682 = cljs.core.deref.call(null,actual_page);
switch (G__114682) {
default:
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-systems","set-systems",-1796466809),cljs.reader.read_string.call(null,data)], null));

}

break;
case "dungeon/max-id":
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-max-id","set-max-id",1529872056),data], null));

break;
case "dungeon/waiting-pool":
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-waiting-pool","set-waiting-pool",2014675583),cljs.reader.read_string.call(null,data)], null));

break;
case "dungeon/bug-check":
return console.log([cljs.core.str(data)].join(''));

break;
case "dungeon/replace-member":
console.log([cljs.core.str(data)].join(''));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-member","replace-member",-1697677995),data], null));

break;
default:
return console.log([cljs.core.str(action_type),cljs.core.str(" - "),cljs.core.str(data)].join(''));

}
}));
cljs.core._add_method.call(null,lvlup.sente._event_msg_handler,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (p__114685){
var map__114686 = p__114685;
var map__114686__$1 = ((((!((map__114686 == null)))?((((map__114686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__114686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__114686):map__114686);
var ev_msg = map__114686__$1;
var _QMARK_data = cljs.core.get.call(null,map__114686__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var actual_page = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"actual-page"], null));
var vec__114688 = _QMARK_data;
var _QMARK_uid = cljs.core.nth.call(null,vec__114688,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__114688,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__114688,(2),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-dungeon","dungeon/get-dungeon",1397841491)], null));

lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-max-id","dungeon/get-max-id",-1922889201)], null));

lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-invoices","dungeon/get-invoices",1865227055)], null));

return lvlup.sente.notification.call(null,[cljs.core.str("Hello "),cljs.core.str(_QMARK_uid)].join(''));
}));
lvlup.sente.chsk_disconnect_BANG_ = (function lvlup$sente$chsk_disconnect_BANG_(){
return taoensso.sente.chsk_disconnect_BANG_.call(null,lvlup.sente.chsk);
});
lvlup.sente.chsk_reconnect_BANG_ = (function lvlup$sente$chsk_reconnect_BANG_(){
return taoensso.sente.chsk_reconnect_BANG_.call(null,lvlup.sente.chsk);
});
if(typeof lvlup.sente.router_ !== 'undefined'){
} else {
lvlup.sente.router_ = cljs.core.atom.call(null,null);
}
lvlup.sente.stop_router_BANG_ = (function lvlup$sente$stop_router_BANG_(){
var temp__4657__auto__ = cljs.core.deref.call(null,lvlup.sente.router_);
if(cljs.core.truth_(temp__4657__auto__)){
var stop_f = temp__4657__auto__;
return stop_f.call(null);
} else {
return null;
}
});
lvlup.sente.start_router_BANG_ = (function lvlup$sente$start_router_BANG_(){
lvlup.sente.stop_router_BANG_.call(null);

return cljs.core.reset_BANG_.call(null,lvlup.sente.router_,taoensso.sente.start_client_chsk_router_BANG_.call(null,lvlup.sente.ch_chsk,lvlup.sente.event_msg_handler));
});

//# sourceMappingURL=sente.js.map