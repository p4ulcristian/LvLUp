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
var args__37886__auto__ = [];
var len__37879__auto___55714 = arguments.length;
var i__37880__auto___55715 = (0);
while(true){
if((i__37880__auto___55715 < len__37879__auto___55714)){
args__37886__auto__.push((arguments[i__37880__auto___55715]));

var G__55716 = (i__37880__auto___55715 + (1));
i__37880__auto___55715 = G__55716;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((1) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((1)),(0),null)):null);
return lvlup.sente.notification_sente.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37887__auto__);
});

lvlup.sente.notification_sente.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
var msg = cljs.core.apply.call(null,taoensso.encore.format,fmt,args);
return lvlup.sente.notification.call(null,[cljs.core.str(msg)].join(''));
});

lvlup.sente.notification_sente.cljs$lang$maxFixedArity = (1);

lvlup.sente.notification_sente.cljs$lang$applyTo = (function (seq55712){
var G__55713 = cljs.core.first.call(null,seq55712);
var seq55712__$1 = cljs.core.next.call(null,seq55712);
return lvlup.sente.notification_sente.cljs$core$IFn$_invoke$arity$variadic(G__55713,seq55712__$1);
});

var rand_chsk_type_55719 = new cljs.core.Keyword(null,"auto","auto",-566279492);
var packer_55720 = new cljs.core.Keyword(null,"edn","edn",1317840885);
var map__55717_55721 = taoensso.sente.make_channel_socket_client_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),rand_chsk_type_55719,new cljs.core.Keyword(null,"packer","packer",66077544),packer_55720], null));
var map__55717_55722__$1 = ((((!((map__55717_55721 == null)))?((((map__55717_55721.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55717_55721.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55717_55721):map__55717_55721);
var chsk_55723 = cljs.core.get.call(null,map__55717_55722__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_55724 = cljs.core.get.call(null,map__55717_55722__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_55725 = cljs.core.get.call(null,map__55717_55722__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_55726 = cljs.core.get.call(null,map__55717_55722__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
lvlup.sente.chsk = chsk_55723;

lvlup.sente.ch_chsk = ch_recv_55724;

lvlup.sente.chsk_send_BANG_ = send_fn_55725;

lvlup.sente.chsk_state = state_55726;
if(typeof lvlup.sente._event_msg_handler !== 'undefined'){
} else {
/**
 * Multimethod to handle Sente `event-msg`s
 */
lvlup.sente._event_msg_handler = (function (){var method_table__37729__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__37730__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__37731__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__37732__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__37733__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"lvlup.sente","-event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__37733__auto__,method_table__37729__auto__,prefer_table__37730__auto__,method_cache__37731__auto__,cached_hierarchy__37732__auto__));
})();
}
/**
 * Wraps `-event-msg-handler` with logging, error catching, etc.
 */
lvlup.sente.event_msg_handler = (function lvlup$sente$event_msg_handler(p__55727){
var map__55730 = p__55727;
var map__55730__$1 = ((((!((map__55730 == null)))?((((map__55730.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55730.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55730):map__55730);
var ev_msg = map__55730__$1;
var id = cljs.core.get.call(null,map__55730__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.call(null,map__55730__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.call(null,map__55730__$1,new cljs.core.Keyword(null,"event","event",301435442));
return lvlup.sente._event_msg_handler.call(null,ev_msg);
});
cljs.core._add_method.call(null,lvlup.sente._event_msg_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__55732){
var map__55733 = p__55732;
var map__55733__$1 = ((((!((map__55733 == null)))?((((map__55733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55733):map__55733);
var ev_msg = map__55733__$1;
var event = cljs.core.get.call(null,map__55733__$1,new cljs.core.Keyword(null,"event","event",301435442));
return lvlup.sente.notification_sente.call(null,"Unhandled event: %s",event);
}));
cljs.core._add_method.call(null,lvlup.sente._event_msg_handler,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__55735){
var map__55736 = p__55735;
var map__55736__$1 = ((((!((map__55736 == null)))?((((map__55736.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55736.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55736):map__55736);
var ev_msg = map__55736__$1;
var _QMARK_data = cljs.core.get.call(null,map__55736__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var open_QMARK_ = cljs.core.get.call(null,map__55736__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var vec__55738 = (function (){var e = (function (){try{if(cljs.core.vector_QMARK_.call(null,_QMARK_data)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e55741){if((e55741 instanceof Error)){
var e = e55741;
return e;
} else {
throw e55741;

}
}})();
if((e == null)){
return _QMARK_data;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"lvlup.sente",null,"(vector? ?data)",_QMARK_data,e,null);
}
})();
var old_state_map = cljs.core.nth.call(null,vec__55738,(0),null);
var new_state_map = cljs.core.nth.call(null,vec__55738,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(new_state_map))){
lvlup.sente.notification_sente.call(null,"Connected to LvLUp :)",new_state_map);
} else {
}

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-connection-state","set-connection-state",1425405326),new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state_map)], null));
}));
cljs.core._add_method.call(null,lvlup.sente._event_msg_handler,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__55742){
var map__55743 = p__55742;
var map__55743__$1 = ((((!((map__55743 == null)))?((((map__55743.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55743.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55743):map__55743);
var ev_msg = map__55743__$1;
var _QMARK_data = cljs.core.get.call(null,map__55743__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var actual_page = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"actual-page"], null));
var vec__55745 = _QMARK_data;
var action_type = cljs.core.nth.call(null,vec__55745,(0),null);
var data = cljs.core.nth.call(null,vec__55745,(1),null);
var G__55748 = (((action_type instanceof cljs.core.Keyword))?action_type.fqn:null);
switch (G__55748) {
case "dungeon/bug-check":
return console.log([cljs.core.str(data)].join(''));

break;
case "dungeon/change":
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-system","set-system",1839231132),data], null));

break;
case "dungeon/get-reservations":
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-reservations","set-reservations",-756242129),cljs.reader.read_string.call(null,data)], null));

break;
case "dungeon/max-id":
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-max-id","set-max-id",1529872056),data], null));

break;
case "dungeon/get-dungeon":
var G__55749 = cljs.core.deref.call(null,actual_page);
switch (G__55749) {
default:
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-systems","set-systems",-1796466809),cljs.reader.read_string.call(null,data)], null));

}

break;
case "dungeon/replace-member":
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-member","replace-member",-1697677995),data], null));

break;
case "dungeon/get-members":
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-member","remove-member",1811515040),cljs.reader.read_string.call(null,data)], null));

lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-max-id","dungeon/get-max-id",-1922889201)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-members","set-members",-691682377),cljs.reader.read_string.call(null,data)], null));

break;
case "dungeon/waiting-pool":
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-waiting-pool","set-waiting-pool",2014675583),cljs.reader.read_string.call(null,data)], null));

break;
case "dungeon/get-invoices":
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-invoices","set-invoices",1477487363),cljs.reader.read_string.call(null,data)], null));

break;
default:
return console.log([cljs.core.str(action_type),cljs.core.str(" - "),cljs.core.str(data)].join(''));

}
}));
cljs.core._add_method.call(null,lvlup.sente._event_msg_handler,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (p__55752){
var map__55753 = p__55752;
var map__55753__$1 = ((((!((map__55753 == null)))?((((map__55753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55753):map__55753);
var ev_msg = map__55753__$1;
var _QMARK_data = cljs.core.get.call(null,map__55753__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var actual_page = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"actual-page"], null));
var vec__55755 = _QMARK_data;
var _QMARK_uid = cljs.core.nth.call(null,vec__55755,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__55755,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__55755,(2),null);
lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-dungeon","dungeon/get-dungeon",1397841491)], null));

lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-max-id","dungeon/get-max-id",-1922889201)], null),lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-reservations","dungeon/get-reservations",436689929)], null)));

lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-invoices","dungeon/get-invoices",1865227055)], null));

lvlup.sente.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dungeon","get-members","dungeon/get-members",188408482),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number","number",1570378438),(0),new cljs.core.Keyword(null,"search","search",1564939822),""], null)], null));

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