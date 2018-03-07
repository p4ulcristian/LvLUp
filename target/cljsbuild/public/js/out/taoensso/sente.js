// Compiled by ClojureScript 1.9.229 {}
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('taoensso.timbre');
goog.require('taoensso.sente.interfaces');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('clojure.string');
if(cljs.core.vector_QMARK_.call(null,taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(79),(1)], null));
} else {
taoensso.encore.assert_min_encore_version.call(null,2.79);
}
/**
 * Useful for identifying client/server mismatch
 */
taoensso.sente.sente_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(11),(0)], null);
taoensso.sente.node_target_QMARK_ = cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs");
if(typeof taoensso.sente.debug_mode_QMARK__ !== 'undefined'){
} else {
taoensso.sente.debug_mode_QMARK__ = cljs.core.atom.call(null,false);
}
taoensso.sente.expected = (function taoensso$sente$expected(expected__$1,x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expected","expected",1583670997),expected__$1,new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null)], null);
});
/**
 * Returns nil if given argument is a valid [ev-id ?ev-data] form. Otherwise
 *   returns a map of validation errors like `{:wrong-type {:expected _ :actual _}}`.
 */
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915),taoensso.sente.expected.call(null,new cljs.core.Keyword(null,"vector","vector",1902966158),x)], null);
} else {
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,cljs.core.count.call(null,x)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281),taoensso.sente.expected.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),x)], null);
} else {
var vec__47572 = x;
var ev_id = cljs.core.nth.call(null,vec__47572,(0),null);
var _ = cljs.core.nth.call(null,vec__47572,(1),null);
if(!((ev_id instanceof cljs.core.Keyword))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689),taoensso.sente.expected.call(null,new cljs.core.Keyword(null,"keyword","keyword",811389747),ev_id)], null);
} else {
if(cljs.core.not.call(null,cljs.core.namespace.call(null,ev_id))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772),taoensso.sente.expected.call(null,new cljs.core.Keyword(null,"namespaced-keyword","namespaced-keyword",131372895),ev_id)], null);
} else {
return null;

}
}

}
}
});
/**
 * Returns given argument if it is a valid [ev-id ?ev-data] form. Otherwise
 *   throws a validation exception.
 */
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__4657__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__4657__auto__)){
var errs = temp__4657__auto__;
throw cljs.core.ex_info.call(null,"Invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"errors","errors",-908790718),errs], null));
} else {
return null;
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event.call(null,x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
var temp__4655__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var errs = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
} else {
return x;
}
});
taoensso.sente.client_event_msg_QMARK_ = (function taoensso$sente$client_event_msg_QMARK_(x){
var and__36792__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__36792__auto__){
var and__36792__auto____$1 = taoensso.encore.ks_EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__36792__auto____$1){
var map__47585 = x;
var map__47585__$1 = ((((!((map__47585 == null)))?((((map__47585.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47585.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47585):map__47585);
var ch_recv = cljs.core.get.call(null,map__47585__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__47585__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__47585__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__47585__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__36792__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__36792__auto____$2){
var and__36792__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__36792__auto____$3){
var and__36792__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(and__36792__auto____$4){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__36792__auto____$4;
}
} else {
return and__36792__auto____$3;
}
} else {
return and__36792__auto____$2;
}
} else {
return and__36792__auto____$1;
}
} else {
return and__36792__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__36792__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__36792__auto__){
var and__36792__auto____$1 = taoensso.encore.ks_EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__36792__auto____$1){
var map__47597 = x;
var map__47597__$1 = ((((!((map__47597 == null)))?((((map__47597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47597):map__47597);
var ch_recv = cljs.core.get.call(null,map__47597__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__47597__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__47597__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.call(null,map__47597__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.call(null,map__47597__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.call(null,map__47597__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__47597__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var and__36792__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__36792__auto____$2){
var and__36792__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__36792__auto____$3){
var and__36792__auto____$4 = taoensso.encore.atom_QMARK_.call(null,connected_uids);
if(and__36792__auto____$4){
var and__36792__auto____$5 = cljs.core.map_QMARK_.call(null,ring_req);
if(and__36792__auto____$5){
var and__36792__auto____$6 = taoensso.encore.nblank_str_QMARK_.call(null,client_id);
if(and__36792__auto____$6){
var and__36792__auto____$7 = taoensso.sente.event_QMARK_.call(null,event);
if(cljs.core.truth_(and__36792__auto____$7)){
return ((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_reply_fn));
} else {
return and__36792__auto____$7;
}
} else {
return and__36792__auto____$6;
}
} else {
return and__36792__auto____$5;
}
} else {
return and__36792__auto____$4;
}
} else {
return and__36792__auto____$3;
}
} else {
return and__36792__auto____$2;
}
} else {
return and__36792__auto____$1;
}
} else {
return and__36792__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__47599){
var map__47605 = p__47599;
var map__47605__$1 = ((((!((map__47605 == null)))?((((map__47605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47605):map__47605);
var ev_msg = map__47605__$1;
var event = cljs.core.get.call(null,map__47605__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__47605__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__47607 = taoensso.sente.as_event.call(null,event);
var ev_id = cljs.core.nth.call(null,vec__47607,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__47607,(1),null);
var valid_event = vec__47607;
var ev_msg_STAR_ = cljs.core.merge.call(null,ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null));
if(cljs.core.not.call(null,taoensso.sente.server_event_msg_QMARK_.call(null,ev_msg_STAR_))){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",187,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__47607,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__47605,map__47605__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__47607,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__47605,map__47605__$1,ev_msg,event,_QMARK_reply_fn))
,null)),null,-1633877198);
} else {
return cljs.core.async.put_BANG_.call(null,ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null).call(null,cb_reply_clj);
});
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not.call(null,taoensso.sente.cb_error_QMARK_.call(null,cb_reply_clj));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
if(typeof prefixed_pstr === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(string? prefixed-pstr)",prefixed_pstr,null,null);
}

var wrapped_QMARK_ = taoensso.encore.str_starts_with_QMARK_.call(null,prefixed_pstr,"+");
var pstr = cljs.core.subs.call(null,prefixed_pstr,(1));
var clj = (function (){try{return taoensso.sente.interfaces.unpack.call(null,packer,pstr);
}catch (e47617){var t = e47617;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",208,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (t,wrapped_QMARK_,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t,wrapped_QMARK_,pstr))
,null)),null,-1874664316);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),pstr], null);
}})();
var vec__47614 = ((wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__47614,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__47614,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",214,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (wrapped_QMARK_,pstr,clj,vec__47614,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(wrapped_QMARK_,pstr,clj,vec__47614,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null,1969769838);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});
taoensso.sente.with__QMARK_meta = (function taoensso$sente$with__QMARK_meta(x,_QMARK_m){
if(cljs.core.seq.call(null,_QMARK_m)){
return cljs.core.with_meta.call(null,x,_QMARK_m);
} else {
return x;
}
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var args47618 = [];
var len__37879__auto___47621 = arguments.length;
var i__37880__auto___47622 = (0);
while(true){
if((i__37880__auto___47622 < len__37879__auto___47621)){
args47618.push((arguments[i__37880__auto___47622]));

var G__47623 = (i__37880__auto___47622 + (1));
i__37880__auto___47622 = G__47623;
continue;
} else {
}
break;
}

var G__47620 = args47618.length;
switch (G__47620) {
case 3:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47618.length)].join('')));

}
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,_QMARK_packer_meta,clj){
var pstr = [cljs.core.str("-"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,clj,_QMARK_packer_meta)))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",224,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (unwrapped): %s -> %s",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_packer_meta,clj], null),pstr], null);
});})(pstr))
,null)),null,139134791);

return pstr;
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4 = (function (packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
var pstr = [cljs.core.str("+"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,wrapped_clj,_QMARK_packer_meta)))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",234,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_uuid__$1,wrapped_clj,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (wrapped): %s -> %s",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_packer_meta,clj,_QMARK_cb_uuid__$1], null),pstr], null);
});})(_QMARK_cb_uuid__$1,wrapped_clj,pstr))
,null)),null,-1222548488);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = 4;


/**
* @constructor
 * @implements {taoensso.sente.interfaces.IPacker}
*/
taoensso.sente.EdnPacker = (function (){
})
taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$ = true;

taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$pack$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return taoensso.encore.pr_edn.call(null,x);
});

taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return taoensso.encore.read_edn.call(null,s);
});

taoensso.sente.EdnPacker.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.sente.EdnPacker.cljs$lang$type = true;

taoensso.sente.EdnPacker.cljs$lang$ctorStr = "taoensso.sente/EdnPacker";

taoensso.sente.EdnPacker.cljs$lang$ctorPrWriter = (function (this__37410__auto__,writer__37411__auto__,opt__37412__auto__){
return cljs.core._write.call(null,writer__37411__auto__,"taoensso.sente/EdnPacker");
});

taoensso.sente.__GT_EdnPacker = (function taoensso$sente$__GT_EdnPacker(){
return (new taoensso.sente.EdnPacker());
});

taoensso.sente.default_edn_packer = (new taoensso.sente.EdnPacker());
taoensso.sente.coerce_packer = (function taoensso$sente$coerce_packer(x){
if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"edn","edn",1317840885))){
return taoensso.sente.default_edn_packer;
} else {
var e = (function (){try{if((function (p1__47625_SHARP_){
if(!((p1__47625_SHARP_ == null))){
if((false) || (p1__47625_SHARP_.taoensso$sente$interfaces$IPacker$)){
return true;
} else {
if((!p1__47625_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__47625_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__47625_SHARP_);
}
}).call(null,x)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e47628){if((e47628 instanceof Error)){
var e = e47628;
return e;
} else {
throw e47628;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__47625#] (satisfies? interfaces/IPacker p1__47625#)) x)",x,e,null);
}
}
});
taoensso.sente.next_idx_BANG_ = taoensso.encore.idx_fn.call(null);


/**
 * Takes a web server adapter[1] and returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *  :send-fn ; (fn [user-id ev] for server>user push.
 *  :ajax-post-fn                ; (fn [ring-req]) for Ring CSRF-POST + chsk URL.
 *  :ajax-get-or-ws-handshake-fn ; (fn [ring-req]) for Ring GET + chsk URL.
 *  :connected-uids ; Watchable, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 * 
 *   Common options:
 *  :user-id-fn        ; (fn [ring-req]) -> unique user-id for server>user push.
 *  :csrf-token-fn     ; (fn [ring-req]) -> CSRF token for Ajax POSTs.
 *  :handshake-data-fn ; (fn [ring-req]) -> arb user data to append to handshake evs.
 *  :ws-kalive-ms      ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to client's :ws-kalive-ms.
 *  :lp-timeout-ms     ; Timeout (repoll) long-polling Ajax conns after given msecs.
 *  :send-buf-ms-ajax  ; [2]
 *  :send-buf-ms-ws    ; [2]
 *  :packer            ; :edn (default), or an IPacker implementation.
 * 
 *   [1] e.g. `(taoensso.sente.server-adapters.http-kit/get-sch-adapter)` or
 *         `(taoensso.sente.server-adapters.immutant/get-sch-adapter)`.
 *    You must have the necessary web-server dependency in your project.clj and
 *    the necessary entry in your namespace's `ns` form.
 * 
 *   [2] Optimization to allow transparent batching of rapidly-triggered
 *    server>user pushes. This is esp. important for Ajax clients which use a
 *    (slow) reconnecting poller. Actual event dispatch may occur <= given ms
 *    after send call (larger values => larger batch windows).
 */
taoensso.sente.make_channel_socket_server_BANG_ = (function taoensso$sente$make_channel_socket_server_BANG_(var_args){
var args__37886__auto__ = [];
var len__37879__auto___47936 = arguments.length;
var i__37880__auto___47937 = (0);
while(true){
if((i__37880__auto___47937 < len__37879__auto___47936)){
args__37886__auto__.push((arguments[i__37880__auto___47937]));

var G__47938 = (i__37880__auto___47937 + (1));
i__37880__auto___47937 = G__47938;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((1) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37887__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__47633){
var vec__47634 = p__47633;
var map__47637 = cljs.core.nth.call(null,vec__47634,(0),null);
var map__47637__$1 = ((((!((map__47637 == null)))?((((map__47637.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47637.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47637):map__47637);
var recv_buf_or_n = cljs.core.get.call(null,map__47637__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(1000)));
var ws_kalive_ms = cljs.core.get.call(null,map__47637__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(25)));
var lp_timeout_ms = cljs.core.get.call(null,map__47637__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var send_buf_ms_ajax = cljs.core.get.call(null,map__47637__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var send_buf_ms_ws = cljs.core.get.call(null,map__47637__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var user_id_fn = cljs.core.get.call(null,map__47637__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),((function (vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
});})(vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.call(null,map__47637__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),((function (vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
return (function (ring_req){
var or__36804__auto__ = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__36804__auto__)){
return or__36804__auto__;
} else {
var or__36804__auto____$1 = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__36804__auto____$1)){
return or__36804__auto____$1;
} else {
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
});})(vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.call(null,map__47637__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),((function (vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.call(null,map__47637__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e47639){if((e47639 instanceof Error)){
var e = e47639;
return e;
} else {
throw e47639;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ajax)",send_buf_ms_ajax,e,null);
}
})(),(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,send_buf_ms_ws)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e47640){if((e47640 instanceof Error)){
var e = e47640;
return e;
} else {
throw e47640;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e,null);
}
})()], null);

var e_47939 = (function (){try{if(((function (vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__47630_SHARP_){
if(!((p1__47630_SHARP_ == null))){
if((false) || (p1__47630_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)){
return true;
} else {
if((!p1__47630_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__47630_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__47630_SHARP_);
}
});})(vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
.call(null,web_server_ch_adapter)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e47641){if((e47641 instanceof Error)){
var e = e47641;
return e;
} else {
throw e47641;

}
}})();
if((e_47939 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__47630#] (satisfies? interfaces/IServerChanAdapter p1__47630#)) web-server-ch-adapter)",web_server_ch_adapter,e_47939,null);
}

var max_ms_47940 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_47940)){
throw cljs.core.ex_info.call(null,[cljs.core.str(":lp-timeout-ms must be < "),cljs.core.str(max_ms_47940)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),lp_timeout_ms,new cljs.core.Keyword(null,"default-client-side-ajax-timeout-ms","default-client-side-ajax-timeout-ms",1149929762),max_ms_47940], null));
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var ch_recv = cljs.core.async.chan.call(null,recv_buf_or_n);
var user_id_fn__$1 = ((function (packer__$1,ch_recv,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__36804__auto__ = user_id_fn.call(null,cljs.core.assoc.call(null,ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id));
if(cljs.core.truth_(or__36804__auto__)){
return or__36804__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});})(packer__$1,ch_recv,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var conns_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var upd_conn_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var G__47941 = null;
var G__47941__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var vec__47643 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.call(null,vec__47643,(0),null);
var _udt = cljs.core.nth.call(null,vec__47643,(1),null);
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),_QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
var G__47941__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),new__QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
G__47941 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__47941__3.call(this,conn_type,uid,client_id);
case 4:
return G__47941__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47941.cljs$core$IFn$_invoke$arity$3 = G__47941__3;
G__47941.cljs$core$IFn$_invoke$arity$4 = G__47941__4;
return G__47941;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e47646){if((e47646 instanceof Error)){
var e = e47646;
return e;
} else {
throw e47646;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__47647){
var map__47648 = p__47647;
var map__47648__$1 = ((((!((map__47648 == null)))?((((map__47648.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47648.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47648):map__47648);
var old_m = map__47648__$1;
var ws = cljs.core.get.call(null,map__47648__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__47648__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__47648__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__47650 = (((conn_type instanceof cljs.core.Keyword))?conn_type.fqn:null);
switch (G__47650) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.conj.call(null,ws,uid),new cljs.core.Keyword(null,"ajax","ajax",814345549),ajax,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.conj.call(null,ajax,uid),new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(conn_type)].join('')));

}
})();
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((!(cljs.core.contains_QMARK_.call(null,old_any,uid))) && (cljs.core.contains_QMARK_.call(null,new_any,uid))){
return new cljs.core.Keyword(null,"newly-connected","newly-connected",-2029862681);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e47651){if((e47651 instanceof Error)){
var e = e47651;
return e;
} else {
throw e47651;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__47652){
var map__47653 = p__47652;
var map__47653__$1 = ((((!((map__47653 == null)))?((((map__47653.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47653.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47653):map__47653);
var old_m = map__47653__$1;
var ws = cljs.core.get.call(null,map__47653__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__47653__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__47653__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var conns_SINGLEQUOTE_ = cljs.core.deref.call(null,conns_);
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = (any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_);
var new_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),((any_ws_clients_QMARK_)?cljs.core.conj.call(null,ws,uid):cljs.core.disj.call(null,ws,uid)),new cljs.core.Keyword(null,"ajax","ajax",814345549),((any_ajax_clients_QMARK_)?cljs.core.conj.call(null,ajax,uid):cljs.core.disj.call(null,ajax,uid)),new cljs.core.Keyword(null,"any","any",1705907423),((any_clients_QMARK_)?cljs.core.conj.call(null,any,uid):cljs.core.disj.call(null,any,uid))], null);
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((cljs.core.contains_QMARK_.call(null,old_any,uid)) && (!(cljs.core.contains_QMARK_.call(null,new_any,uid)))){
return new cljs.core.Keyword(null,"newly-disconnected","newly-disconnected",-1586164962);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__47943__delegate = function (user_id,ev,p__47655){
var vec__47656 = p__47655;
var map__47659 = cljs.core.nth.call(null,vec__47656,(0),null);
var map__47659__$1 = ((((!((map__47659 == null)))?((((map__47659.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47659.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47659):map__47659);
var opts = map__47659__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__47659__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_47944 = ((cljs.core._EQ_.call(null,user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __47945 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",405,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_47944,vec__47656,map__47659,map__47659__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_47944,ev], null);
});})(uid_47944,vec__47656,map__47659,map__47659__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,330506065);
var __47946__$1 = (cljs.core.truth_(uid_47944)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Support for sending to `nil` user-ids has been REMOVED. "),cljs.core.str("Please send to `:sente/all-users-without-uid` instead.")].join('')),cljs.core.str("\n"),cljs.core.str("uid")].join('')))})());
var __47947__$2 = taoensso.sente.assert_event.call(null,ev);
var ev_uuid_47948 = taoensso.encore.uuid_str.call(null);
var flush_buffer_BANG__47949 = ((function (uid_47944,__47945,__47946__$1,__47947__$2,ev_uuid_47948,vec__47656,map__47659,map__47659__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type){
var temp__4657__auto__ = taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),((function (uid_47944,__47945,__47946__$1,__47947__$2,ev_uuid_47948,vec__47656,map__47659,map__47659__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__47661 = cljs.core.get.call(null,m,uid_47944);
var ___$3 = cljs.core.nth.call(null,vec__47661,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__47661,(1),null);
if(cljs.core.contains_QMARK_.call(null,ev_uuids,ev_uuid_47948)){
return taoensso.encore.swapped.call(null,cljs.core.dissoc.call(null,m,uid_47944),cljs.core.get.call(null,m,uid_47944));
} else {
return taoensso.encore.swapped.call(null,m,null);
}
});})(uid_47944,__47945,__47946__$1,__47947__$2,ev_uuid_47948,vec__47656,map__47659,map__47659__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__4657__auto__)){
var pulled = temp__4657__auto__;
var vec__47664 = pulled;
var buffered_evs = cljs.core.nth.call(null,vec__47664,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__47664,(1),null);
if(cljs.core.vector_QMARK_.call(null,buffered_evs)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? buffered-evs)",buffered_evs,null,null);
}

if(cljs.core.set_QMARK_.call(null,ev_uuids)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(set? ev-uuids)",ev_uuids,null,null);
}

var packer_metas = cljs.core.mapv.call(null,cljs.core.meta,buffered_evs);
var combined_packer_meta = cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,packer_metas);
var buffered_evs_ppstr = taoensso.sente.pack.call(null,packer__$1,combined_packer_meta,buffered_evs);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",441,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__47664,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_47944,__47945,__47946__$1,__47947__$2,ev_uuid_47948,vec__47656,map__47659,map__47659__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s (with meta %s)",buffered_evs_ppstr,combined_packer_meta], null);
});})(packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__47664,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_47944,__47945,__47946__$1,__47947__$2,ev_uuid_47948,vec__47656,map__47659,map__47659__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1134778238);

var G__47667 = (((conn_type instanceof cljs.core.Keyword))?conn_type.fqn:null);
switch (G__47667) {
case "ws":
return taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_47944,buffered_evs_ppstr,upd_conn_BANG_);

break;
case "ajax":
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_47944,buffered_evs_ppstr);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(conn_type)].join('')));

}
} else {
return null;
}
});})(uid_47944,__47945,__47946__$1,__47947__$2,ev_uuid_47948,vec__47656,map__47659,map__47659__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.call(null,ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",452,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_47944,__47945,__47946__$1,__47947__$2,ev_uuid_47948,flush_buffer_BANG__47949,vec__47656,map__47659,map__47659__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_47944], null);
});})(uid_47944,__47945,__47946__$1,__47947__$2,ev_uuid_47948,flush_buffer_BANG__47949,vec__47656,map__47659,map__47659__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,677633601);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__47949.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__47949.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
}

var seq__47668_47951 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_47944], null))));
var chunk__47669_47952 = null;
var count__47670_47953 = (0);
var i__47671_47954 = (0);
while(true){
if((i__47671_47954 < count__47670_47953)){
var vec__47672_47955 = cljs.core._nth.call(null,chunk__47669_47952,i__47671_47954);
var _QMARK_sch_47956 = cljs.core.nth.call(null,vec__47672_47955,(0),null);
var _udt_47957 = cljs.core.nth.call(null,vec__47672_47955,(1),null);
var temp__4657__auto___47958 = _QMARK_sch_47956;
if(cljs.core.truth_(temp__4657__auto___47958)){
var sch_47959 = temp__4657__auto___47958;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_47959);
} else {
}

var G__47960 = seq__47668_47951;
var G__47961 = chunk__47669_47952;
var G__47962 = count__47670_47953;
var G__47963 = (i__47671_47954 + (1));
seq__47668_47951 = G__47960;
chunk__47669_47952 = G__47961;
count__47670_47953 = G__47962;
i__47671_47954 = G__47963;
continue;
} else {
var temp__4657__auto___47964 = cljs.core.seq.call(null,seq__47668_47951);
if(temp__4657__auto___47964){
var seq__47668_47965__$1 = temp__4657__auto___47964;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47668_47965__$1)){
var c__37615__auto___47966 = cljs.core.chunk_first.call(null,seq__47668_47965__$1);
var G__47967 = cljs.core.chunk_rest.call(null,seq__47668_47965__$1);
var G__47968 = c__37615__auto___47966;
var G__47969 = cljs.core.count.call(null,c__37615__auto___47966);
var G__47970 = (0);
seq__47668_47951 = G__47967;
chunk__47669_47952 = G__47968;
count__47670_47953 = G__47969;
i__47671_47954 = G__47970;
continue;
} else {
var vec__47675_47971 = cljs.core.first.call(null,seq__47668_47965__$1);
var _QMARK_sch_47972 = cljs.core.nth.call(null,vec__47675_47971,(0),null);
var _udt_47973 = cljs.core.nth.call(null,vec__47675_47971,(1),null);
var temp__4657__auto___47974__$1 = _QMARK_sch_47972;
if(cljs.core.truth_(temp__4657__auto___47974__$1)){
var sch_47975 = temp__4657__auto___47974__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_47975);
} else {
}

var G__47976 = cljs.core.next.call(null,seq__47668_47965__$1);
var G__47977 = null;
var G__47978 = (0);
var G__47979 = (0);
seq__47668_47951 = G__47976;
chunk__47669_47952 = G__47977;
count__47670_47953 = G__47978;
i__47671_47954 = G__47979;
continue;
}
} else {
}
}
break;
}

var seq__47678_47980 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_47944], null))));
var chunk__47679_47981 = null;
var count__47680_47982 = (0);
var i__47681_47983 = (0);
while(true){
if((i__47681_47983 < count__47680_47982)){
var vec__47682_47984 = cljs.core._nth.call(null,chunk__47679_47981,i__47681_47983);
var _QMARK_sch_47985 = cljs.core.nth.call(null,vec__47682_47984,(0),null);
var _udt_47986 = cljs.core.nth.call(null,vec__47682_47984,(1),null);
var temp__4657__auto___47987 = _QMARK_sch_47985;
if(cljs.core.truth_(temp__4657__auto___47987)){
var sch_47988 = temp__4657__auto___47987;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_47988);
} else {
}

var G__47989 = seq__47678_47980;
var G__47990 = chunk__47679_47981;
var G__47991 = count__47680_47982;
var G__47992 = (i__47681_47983 + (1));
seq__47678_47980 = G__47989;
chunk__47679_47981 = G__47990;
count__47680_47982 = G__47991;
i__47681_47983 = G__47992;
continue;
} else {
var temp__4657__auto___47993 = cljs.core.seq.call(null,seq__47678_47980);
if(temp__4657__auto___47993){
var seq__47678_47994__$1 = temp__4657__auto___47993;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47678_47994__$1)){
var c__37615__auto___47995 = cljs.core.chunk_first.call(null,seq__47678_47994__$1);
var G__47996 = cljs.core.chunk_rest.call(null,seq__47678_47994__$1);
var G__47997 = c__37615__auto___47995;
var G__47998 = cljs.core.count.call(null,c__37615__auto___47995);
var G__47999 = (0);
seq__47678_47980 = G__47996;
chunk__47679_47981 = G__47997;
count__47680_47982 = G__47998;
i__47681_47983 = G__47999;
continue;
} else {
var vec__47685_48000 = cljs.core.first.call(null,seq__47678_47994__$1);
var _QMARK_sch_48001 = cljs.core.nth.call(null,vec__47685_48000,(0),null);
var _udt_48002 = cljs.core.nth.call(null,vec__47685_48000,(1),null);
var temp__4657__auto___48003__$1 = _QMARK_sch_48001;
if(cljs.core.truth_(temp__4657__auto___48003__$1)){
var sch_48004 = temp__4657__auto___48003__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_48004);
} else {
}

var G__48005 = cljs.core.next.call(null,seq__47678_47994__$1);
var G__48006 = null;
var G__48007 = (0);
var G__48008 = (0);
seq__47678_47980 = G__48005;
chunk__47679_47981 = G__48006;
count__47680_47982 = G__48007;
i__47681_47983 = G__48008;
continue;
}
} else {
}
}
break;
}
} else {
var seq__47688_48009 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__47689_48010 = null;
var count__47690_48011 = (0);
var i__47691_48012 = (0);
while(true){
if((i__47691_48012 < count__47690_48011)){
var conn_type_48013 = cljs.core._nth.call(null,chunk__47689_48010,i__47691_48012);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_48013,uid_47944], null),((function (seq__47688_48009,chunk__47689_48010,count__47690_48011,i__47691_48012,conn_type_48013,uid_47944,__47945,__47946__$1,__47947__$2,ev_uuid_47948,flush_buffer_BANG__47949,vec__47656,map__47659,map__47659__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_47948], true)], null);
} else {
var vec__47692 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__47692,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__47692,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_47948)], null);
}
});})(seq__47688_48009,chunk__47689_48010,count__47690_48011,i__47691_48012,conn_type_48013,uid_47944,__47945,__47946__$1,__47947__$2,ev_uuid_47948,flush_buffer_BANG__47949,vec__47656,map__47659,map__47659__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__48014 = seq__47688_48009;
var G__48015 = chunk__47689_48010;
var G__48016 = count__47690_48011;
var G__48017 = (i__47691_48012 + (1));
seq__47688_48009 = G__48014;
chunk__47689_48010 = G__48015;
count__47690_48011 = G__48016;
i__47691_48012 = G__48017;
continue;
} else {
var temp__4657__auto___48018 = cljs.core.seq.call(null,seq__47688_48009);
if(temp__4657__auto___48018){
var seq__47688_48019__$1 = temp__4657__auto___48018;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47688_48019__$1)){
var c__37615__auto___48020 = cljs.core.chunk_first.call(null,seq__47688_48019__$1);
var G__48021 = cljs.core.chunk_rest.call(null,seq__47688_48019__$1);
var G__48022 = c__37615__auto___48020;
var G__48023 = cljs.core.count.call(null,c__37615__auto___48020);
var G__48024 = (0);
seq__47688_48009 = G__48021;
chunk__47689_48010 = G__48022;
count__47690_48011 = G__48023;
i__47691_48012 = G__48024;
continue;
} else {
var conn_type_48025 = cljs.core.first.call(null,seq__47688_48019__$1);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_48025,uid_47944], null),((function (seq__47688_48009,chunk__47689_48010,count__47690_48011,i__47691_48012,conn_type_48025,seq__47688_48019__$1,temp__4657__auto___48018,uid_47944,__47945,__47946__$1,__47947__$2,ev_uuid_47948,flush_buffer_BANG__47949,vec__47656,map__47659,map__47659__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_47948], true)], null);
} else {
var vec__47695 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__47695,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__47695,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_47948)], null);
}
});})(seq__47688_48009,chunk__47689_48010,count__47690_48011,i__47691_48012,conn_type_48025,seq__47688_48019__$1,temp__4657__auto___48018,uid_47944,__47945,__47946__$1,__47947__$2,ev_uuid_47948,flush_buffer_BANG__47949,vec__47656,map__47659,map__47659__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__48026 = cljs.core.next.call(null,seq__47688_48019__$1);
var G__48027 = null;
var G__48028 = (0);
var G__48029 = (0);
seq__47688_48009 = G__48026;
chunk__47689_48010 = G__48027;
count__47690_48011 = G__48028;
i__47691_48012 = G__48029;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__47949.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__47949.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
var ws_timeout_48030 = cljs.core.async.timeout.call(null,send_buf_ms_ws);
var ajax_timeout_48031 = cljs.core.async.timeout.call(null,send_buf_ms_ajax);
var c__40731__auto___48032 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto___48032,ws_timeout_48030,ajax_timeout_48031,uid_47944,__47945,__47946__$1,__47947__$2,ev_uuid_47948,flush_buffer_BANG__47949,vec__47656,map__47659,map__47659__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto___48032,ws_timeout_48030,ajax_timeout_48031,uid_47944,__47945,__47946__$1,__47947__$2,ev_uuid_47948,flush_buffer_BANG__47949,vec__47656,map__47659,map__47659__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_47702){
var state_val_47703 = (state_47702[(1)]);
if((state_val_47703 === (1))){
var state_47702__$1 = state_47702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47702__$1,(2),ws_timeout_48030);
} else {
if((state_val_47703 === (2))){
var inst_47699 = (state_47702[(2)]);
var inst_47700 = flush_buffer_BANG__47949.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));
var state_47702__$1 = (function (){var statearr_47704 = state_47702;
(statearr_47704[(7)] = inst_47699);

return statearr_47704;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47702__$1,inst_47700);
} else {
return null;
}
}
});})(c__40731__auto___48032,ws_timeout_48030,ajax_timeout_48031,uid_47944,__47945,__47946__$1,__47947__$2,ev_uuid_47948,flush_buffer_BANG__47949,vec__47656,map__47659,map__47659__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__40619__auto__,c__40731__auto___48032,ws_timeout_48030,ajax_timeout_48031,uid_47944,__47945,__47946__$1,__47947__$2,ev_uuid_47948,flush_buffer_BANG__47949,vec__47656,map__47659,map__47659__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__40620__auto__ = null;
var taoensso$sente$state_machine__40620__auto____0 = (function (){
var statearr_47708 = [null,null,null,null,null,null,null,null];
(statearr_47708[(0)] = taoensso$sente$state_machine__40620__auto__);

(statearr_47708[(1)] = (1));

return statearr_47708;
});
var taoensso$sente$state_machine__40620__auto____1 = (function (state_47702){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_47702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e47709){if((e47709 instanceof Object)){
var ex__40623__auto__ = e47709;
var statearr_47710_48033 = state_47702;
(statearr_47710_48033[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48034 = state_47702;
state_47702 = G__48034;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
taoensso$sente$state_machine__40620__auto__ = function(state_47702){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40620__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40620__auto____1.call(this,state_47702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40620__auto____0;
taoensso$sente$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40620__auto____1;
return taoensso$sente$state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto___48032,ws_timeout_48030,ajax_timeout_48031,uid_47944,__47945,__47946__$1,__47947__$2,ev_uuid_47948,flush_buffer_BANG__47949,vec__47656,map__47659,map__47659__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__40733__auto__ = (function (){var statearr_47711 = f__40732__auto__.call(null);
(statearr_47711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto___48032);

return statearr_47711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto___48032,ws_timeout_48030,ajax_timeout_48031,uid_47944,__47945,__47946__$1,__47947__$2,ev_uuid_47948,flush_buffer_BANG__47949,vec__47656,map__47659,map__47659__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__40731__auto___48035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto___48035,ws_timeout_48030,ajax_timeout_48031,uid_47944,__47945,__47946__$1,__47947__$2,ev_uuid_47948,flush_buffer_BANG__47949,vec__47656,map__47659,map__47659__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto___48035,ws_timeout_48030,ajax_timeout_48031,uid_47944,__47945,__47946__$1,__47947__$2,ev_uuid_47948,flush_buffer_BANG__47949,vec__47656,map__47659,map__47659__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_47716){
var state_val_47717 = (state_47716[(1)]);
if((state_val_47717 === (1))){
var state_47716__$1 = state_47716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47716__$1,(2),ajax_timeout_48031);
} else {
if((state_val_47717 === (2))){
var inst_47713 = (state_47716[(2)]);
var inst_47714 = flush_buffer_BANG__47949.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_47716__$1 = (function (){var statearr_47718 = state_47716;
(statearr_47718[(7)] = inst_47713);

return statearr_47718;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47716__$1,inst_47714);
} else {
return null;
}
}
});})(c__40731__auto___48035,ws_timeout_48030,ajax_timeout_48031,uid_47944,__47945,__47946__$1,__47947__$2,ev_uuid_47948,flush_buffer_BANG__47949,vec__47656,map__47659,map__47659__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__40619__auto__,c__40731__auto___48035,ws_timeout_48030,ajax_timeout_48031,uid_47944,__47945,__47946__$1,__47947__$2,ev_uuid_47948,flush_buffer_BANG__47949,vec__47656,map__47659,map__47659__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__40620__auto__ = null;
var taoensso$sente$state_machine__40620__auto____0 = (function (){
var statearr_47722 = [null,null,null,null,null,null,null,null];
(statearr_47722[(0)] = taoensso$sente$state_machine__40620__auto__);

(statearr_47722[(1)] = (1));

return statearr_47722;
});
var taoensso$sente$state_machine__40620__auto____1 = (function (state_47716){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_47716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e47723){if((e47723 instanceof Object)){
var ex__40623__auto__ = e47723;
var statearr_47724_48036 = state_47716;
(statearr_47724_48036[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48037 = state_47716;
state_47716 = G__48037;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
taoensso$sente$state_machine__40620__auto__ = function(state_47716){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40620__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40620__auto____1.call(this,state_47716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40620__auto____0;
taoensso$sente$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40620__auto____1;
return taoensso$sente$state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto___48035,ws_timeout_48030,ajax_timeout_48031,uid_47944,__47945,__47946__$1,__47947__$2,ev_uuid_47948,flush_buffer_BANG__47949,vec__47656,map__47659,map__47659__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__40733__auto__ = (function (){var statearr_47725 = f__40732__auto__.call(null);
(statearr_47725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto___48035);

return statearr_47725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto___48035,ws_timeout_48030,ajax_timeout_48031,uid_47944,__47945,__47946__$1,__47947__$2,ev_uuid_47948,flush_buffer_BANG__47949,vec__47656,map__47659,map__47659__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}
}

return null;
};
var G__47943 = function (user_id,ev,var_args){
var p__47655 = null;
if (arguments.length > 2) {
var G__48038__i = 0, G__48038__a = new Array(arguments.length -  2);
while (G__48038__i < G__48038__a.length) {G__48038__a[G__48038__i] = arguments[G__48038__i + 2]; ++G__48038__i;}
  p__47655 = new cljs.core.IndexedSeq(G__48038__a,0);
} 
return G__47943__delegate.call(this,user_id,ev,p__47655);};
G__47943.cljs$lang$maxFixedArity = 2;
G__47943.cljs$lang$applyTo = (function (arglist__48039){
var user_id = cljs.core.first(arglist__48039);
arglist__48039 = cljs.core.next(arglist__48039);
var ev = cljs.core.first(arglist__48039);
var p__47655 = cljs.core.rest(arglist__48039);
return G__47943__delegate(user_id,ev,p__47655);
});
G__47943.cljs$core$IFn$_invoke$arity$variadic = G__47943__delegate;
return G__47943;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.not.call(null,websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__47726 = taoensso.sente.unpack.call(null,packer__$1,ppstr);
var clj = cljs.core.nth.call(null,vec__47726,(0),null);
var has_cb_QMARK_ = cljs.core.nth.call(null,vec__47726,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.call(null,false);
return ((function (replied_QMARK__,params,ppstr,client_id,vec__47726,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (resp_clj){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,replied_QMARK__,false,true))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",521,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (replied_QMARK__,params,ppstr,client_id,vec__47726,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
});})(replied_QMARK__,params,ppstr,client_id,vec__47726,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1352845017);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj));
} else {
return null;
}
});
;})(replied_QMARK__,params,ppstr,client_id,vec__47726,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1.call(null,ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__4657__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__40731__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__47726,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__47726,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_47734){
var state_val_47735 = (state_47734[(1)]);
if((state_val_47735 === (1))){
var inst_47729 = cljs.core.async.timeout.call(null,ms);
var state_47734__$1 = state_47734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47734__$1,(2),inst_47729);
} else {
if((state_val_47735 === (2))){
var inst_47731 = (state_47734[(2)]);
var inst_47732 = reply_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_47734__$1 = (function (){var statearr_47736 = state_47734;
(statearr_47736[(7)] = inst_47731);

return statearr_47736;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47734__$1,inst_47732);
} else {
return null;
}
}
});})(c__40731__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__47726,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__40619__auto__,c__40731__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__47726,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__40620__auto__ = null;
var taoensso$sente$state_machine__40620__auto____0 = (function (){
var statearr_47740 = [null,null,null,null,null,null,null,null];
(statearr_47740[(0)] = taoensso$sente$state_machine__40620__auto__);

(statearr_47740[(1)] = (1));

return statearr_47740;
});
var taoensso$sente$state_machine__40620__auto____1 = (function (state_47734){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_47734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e47741){if((e47741 instanceof Object)){
var ex__40623__auto__ = e47741;
var statearr_47742_48040 = state_47734;
(statearr_47742_48040[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48041 = state_47734;
state_47734 = G__48041;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
taoensso$sente$state_machine__40620__auto__ = function(state_47734){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40620__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40620__auto____1.call(this,state_47734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40620__auto____0;
taoensso$sente$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40620__auto____1;
return taoensso$sente$state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__47726,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__40733__auto__ = (function (){var statearr_47743 = f__40732__auto__.call(null);
(statearr_47743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto__);

return statearr_47743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__47726,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__40731__auto__;
} else {
return null;
}
} else {
return reply_fn.call(null,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var sch_uuid = taoensso.encore.uuid_str.call(null,(6));
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var csrf_token = csrf_token_fn.call(null,ring_req);
var uid = user_id_fn__$1.call(null,ring_req,client_id);
var receive_event_msg_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$self = null;
var taoensso$sente$self__1 = (function (event){
return taoensso$sente$self.call(null,event,null);
});
var taoensso$sente$self__2 = (function (event,_QMARK_reply_fn){
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)));
});
taoensso$sente$self = function(event,_QMARK_reply_fn){
switch(arguments.length){
case 1:
return taoensso$sente$self__1.call(this,event);
case 2:
return taoensso$sente$self__2.call(this,event,_QMARK_reply_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$self.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$self__1;
taoensso$sente$self.cljs$core$IFn$_invoke$arity$2 = taoensso$sente$self__2;
return taoensso$sente$self;
})()
;})(sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_handshake_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",566,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-handshake!"], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,200685558);

var _QMARK_handshake_data = handshake_data_fn.call(null,ring_req);
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,null,handshake_ev));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_.call(null,client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",577,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(err_msg),cljs.core.str(": %s")].join(''),ring_req], null);
});})(err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1529981875);

throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",586,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,2017240504);
var updated_conn = upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

send_handshake_BANG_.call(null,server_ch,websocket_QMARK_);

var temp__4657__auto__ = ws_kalive_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__40731__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_47779){
var state_val_47780 = (state_47779[(1)]);
if((state_val_47780 === (7))){
var inst_47775 = (state_47779[(2)]);
var state_47779__$1 = state_47779;
var statearr_47781_48042 = state_47779__$1;
(statearr_47781_48042[(2)] = inst_47775);

(statearr_47781_48042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47780 === (1))){
var inst_47744 = udt_open;
var state_47779__$1 = (function (){var statearr_47782 = state_47779;
(statearr_47782[(7)] = inst_47744);

return statearr_47782;
})();
var statearr_47783_48043 = state_47779__$1;
(statearr_47783_48043[(2)] = null);

(statearr_47783_48043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47780 === (4))){
var inst_47753 = (state_47779[(8)]);
var inst_47748 = (state_47779[(2)]);
var inst_47749 = cljs.core.deref.call(null,conns_);
var inst_47750 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47751 = [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id];
var inst_47752 = (new cljs.core.PersistentVector(null,3,(5),inst_47750,inst_47751,null));
var inst_47753__$1 = cljs.core.get_in.call(null,inst_47749,inst_47752);
var state_47779__$1 = (function (){var statearr_47784 = state_47779;
(statearr_47784[(9)] = inst_47748);

(statearr_47784[(8)] = inst_47753__$1);

return statearr_47784;
})();
if(cljs.core.truth_(inst_47753__$1)){
var statearr_47785_48044 = state_47779__$1;
(statearr_47785_48044[(1)] = (5));

} else {
var statearr_47786_48045 = state_47779__$1;
(statearr_47786_48045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47780 === (13))){
var inst_47759 = (state_47779[(10)]);
var inst_47768 = (state_47779[(2)]);
var inst_47744 = inst_47759;
var state_47779__$1 = (function (){var statearr_47787 = state_47779;
(statearr_47787[(7)] = inst_47744);

(statearr_47787[(11)] = inst_47768);

return statearr_47787;
})();
var statearr_47788_48046 = state_47779__$1;
(statearr_47788_48046[(2)] = null);

(statearr_47788_48046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47780 === (6))){
var state_47779__$1 = state_47779;
var statearr_47789_48047 = state_47779__$1;
(statearr_47789_48047[(2)] = null);

(statearr_47789_48047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47780 === (3))){
var inst_47777 = (state_47779[(2)]);
var state_47779__$1 = state_47779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47779__$1,inst_47777);
} else {
if((state_val_47780 === (12))){
var state_47779__$1 = state_47779;
var statearr_47790_48048 = state_47779__$1;
(statearr_47790_48048[(2)] = null);

(statearr_47790_48048[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47780 === (2))){
var inst_47746 = cljs.core.async.timeout.call(null,ms);
var state_47779__$1 = state_47779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47779__$1,(4),inst_47746);
} else {
if((state_val_47780 === (11))){
var inst_47764 = taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304));
var inst_47765 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_47764);
var state_47779__$1 = state_47779;
var statearr_47791_48049 = state_47779__$1;
(statearr_47791_48049[(2)] = inst_47765);

(statearr_47791_48049[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47780 === (9))){
var state_47779__$1 = state_47779;
var statearr_47792_48050 = state_47779__$1;
(statearr_47792_48050[(2)] = null);

(statearr_47792_48050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47780 === (5))){
var inst_47753 = (state_47779[(8)]);
var inst_47758 = cljs.core.nth.call(null,inst_47753,(0),null);
var inst_47759 = cljs.core.nth.call(null,inst_47753,(1),null);
var inst_47760 = taoensso.sente.interfaces.sch_open_QMARK_.call(null,server_ch);
var state_47779__$1 = (function (){var statearr_47793 = state_47779;
(statearr_47793[(12)] = inst_47758);

(statearr_47793[(10)] = inst_47759);

return statearr_47793;
})();
if(cljs.core.truth_(inst_47760)){
var statearr_47794_48051 = state_47779__$1;
(statearr_47794_48051[(1)] = (8));

} else {
var statearr_47795_48052 = state_47779__$1;
(statearr_47795_48052[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47780 === (10))){
var inst_47772 = (state_47779[(2)]);
var state_47779__$1 = state_47779;
var statearr_47796_48053 = state_47779__$1;
(statearr_47796_48053[(2)] = inst_47772);

(statearr_47796_48053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47780 === (8))){
var inst_47759 = (state_47779[(10)]);
var inst_47744 = (state_47779[(7)]);
var inst_47762 = cljs.core._EQ_.call(null,inst_47759,inst_47744);
var state_47779__$1 = state_47779;
if(inst_47762){
var statearr_47797_48054 = state_47779__$1;
(statearr_47797_48054[(1)] = (11));

} else {
var statearr_47798_48055 = state_47779__$1;
(statearr_47798_48055[(1)] = (12));

}

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
}
}
}
}
}
}
});})(c__40731__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__40619__auto__,c__40731__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__40620__auto__ = null;
var taoensso$sente$state_machine__40620__auto____0 = (function (){
var statearr_47802 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47802[(0)] = taoensso$sente$state_machine__40620__auto__);

(statearr_47802[(1)] = (1));

return statearr_47802;
});
var taoensso$sente$state_machine__40620__auto____1 = (function (state_47779){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_47779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e47803){if((e47803 instanceof Object)){
var ex__40623__auto__ = e47803;
var statearr_47804_48056 = state_47779;
(statearr_47804_48056[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48057 = state_47779;
state_47779 = G__48057;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
taoensso$sente$state_machine__40620__auto__ = function(state_47779){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40620__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40620__auto____1.call(this,state_47779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40620__auto____0;
taoensso$sente$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40620__auto____1;
return taoensso$sente$state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__40733__auto__ = (function (){var statearr_47805 = f__40732__auto__.call(null);
(statearr_47805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto__);

return statearr_47805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__40731__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",615,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-168026882);
var updated_conn = upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var handshake_QMARK_ = (function (){var or__36804__auto__ = new cljs.core.Keyword(null,"init?","init?",438181499).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(or__36804__auto__)){
return or__36804__auto__;
} else {
return new cljs.core.Keyword(null,"handshake?","handshake?",-423743093).cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

if(cljs.core.truth_(handshake_QMARK_)){
return send_handshake_BANG_.call(null,server_ch,websocket_QMARK_);
} else {
var temp__4657__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__40731__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_47831){
var state_val_47832 = (state_47831[(1)]);
if((state_val_47832 === (1))){
var inst_47806 = cljs.core.async.timeout.call(null,ms);
var state_47831__$1 = state_47831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47831__$1,(2),inst_47806);
} else {
if((state_val_47832 === (2))){
var inst_47813 = (state_47831[(7)]);
var inst_47808 = (state_47831[(2)]);
var inst_47809 = cljs.core.deref.call(null,conns_);
var inst_47810 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47811 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id];
var inst_47812 = (new cljs.core.PersistentVector(null,3,(5),inst_47810,inst_47811,null));
var inst_47813__$1 = cljs.core.get_in.call(null,inst_47809,inst_47812);
var state_47831__$1 = (function (){var statearr_47833 = state_47831;
(statearr_47833[(8)] = inst_47808);

(statearr_47833[(7)] = inst_47813__$1);

return statearr_47833;
})();
if(cljs.core.truth_(inst_47813__$1)){
var statearr_47834_48058 = state_47831__$1;
(statearr_47834_48058[(1)] = (3));

} else {
var statearr_47835_48059 = state_47831__$1;
(statearr_47835_48059[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47832 === (3))){
var inst_47813 = (state_47831[(7)]);
var inst_47818 = cljs.core.nth.call(null,inst_47813,(0),null);
var inst_47819 = cljs.core.nth.call(null,inst_47813,(1),null);
var inst_47820 = cljs.core._EQ_.call(null,inst_47819,udt_open);
var state_47831__$1 = (function (){var statearr_47836 = state_47831;
(statearr_47836[(9)] = inst_47818);

return statearr_47836;
})();
if(inst_47820){
var statearr_47837_48060 = state_47831__$1;
(statearr_47837_48060[(1)] = (6));

} else {
var statearr_47838_48061 = state_47831__$1;
(statearr_47838_48061[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47832 === (4))){
var state_47831__$1 = state_47831;
var statearr_47839_48062 = state_47831__$1;
(statearr_47839_48062[(2)] = null);

(statearr_47839_48062[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47832 === (5))){
var inst_47829 = (state_47831[(2)]);
var state_47831__$1 = state_47831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47831__$1,inst_47829);
} else {
if((state_val_47832 === (6))){
var inst_47822 = taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var inst_47823 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_47822);
var state_47831__$1 = state_47831;
var statearr_47840_48063 = state_47831__$1;
(statearr_47840_48063[(2)] = inst_47823);

(statearr_47840_48063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47832 === (7))){
var state_47831__$1 = state_47831;
var statearr_47841_48064 = state_47831__$1;
(statearr_47841_48064[(2)] = null);

(statearr_47841_48064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47832 === (8))){
var inst_47826 = (state_47831[(2)]);
var state_47831__$1 = state_47831;
var statearr_47842_48065 = state_47831__$1;
(statearr_47842_48065[(2)] = inst_47826);

(statearr_47842_48065[(1)] = (5));


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
}
});})(c__40731__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__40619__auto__,c__40731__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__40620__auto__ = null;
var taoensso$sente$state_machine__40620__auto____0 = (function (){
var statearr_47846 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47846[(0)] = taoensso$sente$state_machine__40620__auto__);

(statearr_47846[(1)] = (1));

return statearr_47846;
});
var taoensso$sente$state_machine__40620__auto____1 = (function (state_47831){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_47831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e47847){if((e47847 instanceof Object)){
var ex__40623__auto__ = e47847;
var statearr_47848_48066 = state_47831;
(statearr_47848_48066[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48067 = state_47831;
state_47831 = G__48067;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
taoensso$sente$state_machine__40620__auto__ = function(state_47831){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40620__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40620__auto____1.call(this,state_47831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40620__auto____0;
taoensso$sente$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40620__auto____1;
return taoensso$sente$state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__40733__auto__ = (function (){var statearr_47849 = f__40732__auto__.call(null);
(statearr_47849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto__);

return statearr_47849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__40731__auto__;
} else {
return null;
}
}
}
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

var vec__47850 = taoensso.sente.unpack.call(null,packer__$1,req_ppstr);
var clj = cljs.core.nth.call(null,vec__47850,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__47850,(1),null);
return receive_event_msg_BANG_.call(null,clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__47850,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",645,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__47850,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__47850,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1159440942);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj,_QMARK_cb_uuid));
});})(vec__47850,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443):new cljs.core.Keyword(null,"ajax","ajax",814345549));
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",654,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
});})(conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1362968360);
var updated_conn = upd_conn_BANG_.call(null,conn_type,uid,client_id,null);
var udt_close = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__40731__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_47904){
var state_val_47905 = (state_47904[(1)]);
if((state_val_47905 === (7))){
var state_47904__$1 = state_47904;
var statearr_47906_48068 = state_47904__$1;
(statearr_47906_48068[(2)] = null);

(statearr_47906_48068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47905 === (1))){
var inst_47853 = cljs.core.async.timeout.call(null,(5000));
var state_47904__$1 = state_47904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47904__$1,(2),inst_47853);
} else {
if((state_val_47905 === (4))){
var state_47904__$1 = state_47904;
var statearr_47907_48069 = state_47904__$1;
(statearr_47907_48069[(2)] = null);

(statearr_47907_48069[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47905 === (13))){
var state_47904__$1 = state_47904;
var statearr_47908_48070 = state_47904__$1;
(statearr_47908_48070[(2)] = null);

(statearr_47908_48070[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47905 === (6))){
var inst_47881 = (state_47904[(7)]);
var inst_47863 = (state_47904[(8)]);
var inst_47864 = (state_47904[(9)]);
var inst_47865 = (state_47904[(10)]);
var inst_47876 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47877 = [conn_type,uid,client_id];
var inst_47878 = (new cljs.core.PersistentVector(null,3,(5),inst_47876,inst_47877,null));
var inst_47880 = (function (){var vec__47856 = inst_47863;
var __QMARK_sch = inst_47864;
var udt_t1 = inst_47865;
return ((function (vec__47856,__QMARK_sch,udt_t1,inst_47881,inst_47863,inst_47864,inst_47865,inst_47876,inst_47877,inst_47878,state_val_47905,c__40731__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__47879){
var vec__47909 = p__47879;
var _sch = cljs.core.nth.call(null,vec__47909,(0),null);
var udt_t1__$1 = cljs.core.nth.call(null,vec__47909,(1),null);
if(cljs.core._EQ_.call(null,udt_t1__$1,udt_close)){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),true);
} else {
return taoensso.encore.swapped.call(null,udt_t1__$1,false);
}
});
;})(vec__47856,__QMARK_sch,udt_t1,inst_47881,inst_47863,inst_47864,inst_47865,inst_47876,inst_47877,inst_47878,state_val_47905,c__40731__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_47881__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_47878,inst_47880);
var state_47904__$1 = (function (){var statearr_47912 = state_47904;
(statearr_47912[(7)] = inst_47881__$1);

return statearr_47912;
})();
if(cljs.core.truth_(inst_47881__$1)){
var statearr_47913_48071 = state_47904__$1;
(statearr_47913_48071[(1)] = (9));

} else {
var statearr_47914_48072 = state_47904__$1;
(statearr_47914_48072[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47905 === (3))){
var inst_47863 = (state_47904[(8)]);
var inst_47864 = (state_47904[(9)]);
var inst_47865 = (state_47904[(10)]);
var inst_47868 = (function (){var vec__47856 = inst_47863;
var __QMARK_sch = inst_47864;
var udt_t1 = inst_47865;
return ((function (vec__47856,__QMARK_sch,udt_t1,inst_47863,inst_47864,inst_47865,state_val_47905,c__40731__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.call(null,udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
;})(vec__47856,__QMARK_sch,udt_t1,inst_47863,inst_47864,inst_47865,state_val_47905,c__40731__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_47869 = (new cljs.core.Delay(inst_47868,null));
var inst_47870 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",668,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_47869,null,1249873718);
var state_47904__$1 = state_47904;
var statearr_47915_48073 = state_47904__$1;
(statearr_47915_48073[(2)] = inst_47870);

(statearr_47915_48073[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47905 === (12))){
var inst_47890 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47891 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678),uid];
var inst_47892 = (new cljs.core.PersistentVector(null,2,(5),inst_47890,inst_47891,null));
var inst_47893 = receive_event_msg_BANG_.call(null,inst_47892);
var state_47904__$1 = state_47904;
var statearr_47916_48074 = state_47904__$1;
(statearr_47916_48074[(2)] = inst_47893);

(statearr_47916_48074[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47905 === (2))){
var inst_47863 = (state_47904[(8)]);
var inst_47855 = (state_47904[(2)]);
var inst_47859 = cljs.core.deref.call(null,conns_);
var inst_47860 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47861 = [conn_type,uid,client_id];
var inst_47862 = (new cljs.core.PersistentVector(null,3,(5),inst_47860,inst_47861,null));
var inst_47863__$1 = cljs.core.get_in.call(null,inst_47859,inst_47862);
var inst_47864 = cljs.core.nth.call(null,inst_47863__$1,(0),null);
var inst_47865 = cljs.core.nth.call(null,inst_47863__$1,(1),null);
var inst_47866 = cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__);
var state_47904__$1 = (function (){var statearr_47917 = state_47904;
(statearr_47917[(11)] = inst_47855);

(statearr_47917[(8)] = inst_47863__$1);

(statearr_47917[(9)] = inst_47864);

(statearr_47917[(10)] = inst_47865);

return statearr_47917;
})();
if(cljs.core.truth_(inst_47866)){
var statearr_47918_48075 = state_47904__$1;
(statearr_47918_48075[(1)] = (3));

} else {
var statearr_47919_48076 = state_47904__$1;
(statearr_47919_48076[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47905 === (11))){
var inst_47899 = (state_47904[(2)]);
var state_47904__$1 = state_47904;
var statearr_47920_48077 = state_47904__$1;
(statearr_47920_48077[(2)] = inst_47899);

(statearr_47920_48077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47905 === (9))){
var inst_47881 = (state_47904[(7)]);
var inst_47863 = (state_47904[(8)]);
var inst_47864 = (state_47904[(9)]);
var inst_47865 = (state_47904[(10)]);
var inst_47883 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47884 = [conn_type,uid];
var inst_47885 = (new cljs.core.PersistentVector(null,2,(5),inst_47883,inst_47884,null));
var inst_47886 = (function (){var vec__47856 = inst_47863;
var __QMARK_sch = inst_47864;
var udt_t1 = inst_47865;
var disconnect_QMARK_ = inst_47881;
return ((function (vec__47856,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_47881,inst_47863,inst_47864,inst_47865,inst_47883,inst_47884,inst_47885,state_val_47905,c__40731__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_.call(null,_QMARK_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return _QMARK_m;
}
});
;})(vec__47856,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_47881,inst_47863,inst_47864,inst_47865,inst_47883,inst_47884,inst_47885,state_val_47905,c__40731__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_47887 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_47885,inst_47886);
var inst_47888 = upd_connected_uid_BANG_.call(null,uid);
var state_47904__$1 = (function (){var statearr_47921 = state_47904;
(statearr_47921[(12)] = inst_47887);

return statearr_47921;
})();
if(cljs.core.truth_(inst_47888)){
var statearr_47922_48078 = state_47904__$1;
(statearr_47922_48078[(1)] = (12));

} else {
var statearr_47923_48079 = state_47904__$1;
(statearr_47923_48079[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47905 === (5))){
var inst_47865 = (state_47904[(10)]);
var inst_47873 = (state_47904[(2)]);
var inst_47874 = cljs.core._EQ_.call(null,inst_47865,udt_close);
var state_47904__$1 = (function (){var statearr_47924 = state_47904;
(statearr_47924[(13)] = inst_47873);

return statearr_47924;
})();
if(inst_47874){
var statearr_47925_48080 = state_47904__$1;
(statearr_47925_48080[(1)] = (6));

} else {
var statearr_47926_48081 = state_47904__$1;
(statearr_47926_48081[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47905 === (14))){
var inst_47896 = (state_47904[(2)]);
var state_47904__$1 = state_47904;
var statearr_47927_48082 = state_47904__$1;
(statearr_47927_48082[(2)] = inst_47896);

(statearr_47927_48082[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47905 === (10))){
var state_47904__$1 = state_47904;
var statearr_47928_48083 = state_47904__$1;
(statearr_47928_48083[(2)] = null);

(statearr_47928_48083[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47905 === (8))){
var inst_47902 = (state_47904[(2)]);
var state_47904__$1 = state_47904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47904__$1,inst_47902);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40731__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__40619__auto__,c__40731__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__40620__auto__ = null;
var taoensso$sente$state_machine__40620__auto____0 = (function (){
var statearr_47932 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47932[(0)] = taoensso$sente$state_machine__40620__auto__);

(statearr_47932[(1)] = (1));

return statearr_47932;
});
var taoensso$sente$state_machine__40620__auto____1 = (function (state_47904){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_47904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e47933){if((e47933 instanceof Object)){
var ex__40623__auto__ = e47933;
var statearr_47934_48084 = state_47904;
(statearr_47934_48084[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48085 = state_47904;
state_47904 = G__48085;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
taoensso$sente$state_machine__40620__auto__ = function(state_47904){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40620__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40620__auto____1.call(this,state_47904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40620__auto____0;
taoensso$sente$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40620__auto____1;
return taoensso$sente$state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__40733__auto__ = (function (){var statearr_47935 = f__40732__auto__.call(null);
(statearr_47935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto__);

return statearr_47935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__40731__auto__;
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",690,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,2144561488);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47634,map__47637,map__47637__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq47631){
var G__47632 = cljs.core.first.call(null,seq47631);
var seq47631__$1 = cljs.core.next.call(null,seq47631);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47632,seq47631__$1);
});

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",696,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null,85001267);

var seq__48102 = cljs.core.seq.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null)));
var chunk__48103 = null;
var count__48104 = (0);
var i__48105 = (0);
while(true){
if((i__48105 < count__48104)){
var vec__48106 = cljs.core._nth.call(null,chunk__48103,i__48105);
var client_id = cljs.core.nth.call(null,vec__48106,(0),null);
var vec__48109 = cljs.core.nth.call(null,vec__48106,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__48109,(0),null);
var _udt = cljs.core.nth.call(null,vec__48109,(1),null);
var temp__4657__auto___48118 = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto___48118)){
var sch_48119 = temp__4657__auto___48118;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_48119,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__48120 = seq__48102;
var G__48121 = chunk__48103;
var G__48122 = count__48104;
var G__48123 = (i__48105 + (1));
seq__48102 = G__48120;
chunk__48103 = G__48121;
count__48104 = G__48122;
i__48105 = G__48123;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__48102);
if(temp__4657__auto__){
var seq__48102__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48102__$1)){
var c__37615__auto__ = cljs.core.chunk_first.call(null,seq__48102__$1);
var G__48124 = cljs.core.chunk_rest.call(null,seq__48102__$1);
var G__48125 = c__37615__auto__;
var G__48126 = cljs.core.count.call(null,c__37615__auto__);
var G__48127 = (0);
seq__48102 = G__48124;
chunk__48103 = G__48125;
count__48104 = G__48126;
i__48105 = G__48127;
continue;
} else {
var vec__48112 = cljs.core.first.call(null,seq__48102__$1);
var client_id = cljs.core.nth.call(null,vec__48112,(0),null);
var vec__48115 = cljs.core.nth.call(null,vec__48112,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__48115,(0),null);
var _udt = cljs.core.nth.call(null,vec__48115,(1),null);
var temp__4657__auto___48128__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto___48128__$1)){
var sch_48129 = temp__4657__auto___48128__$1;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_48129,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__48130 = cljs.core.next.call(null,seq__48102__$1);
var G__48131 = null;
var G__48132 = (0);
var G__48133 = (0);
seq__48102 = G__48130;
chunk__48103 = G__48131;
count__48104 = G__48132;
i__48105 = G__48133;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's Ajax conns.
 *   Allows some time for possible Ajax poller reconnects.
 */
taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",706,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
}),null)),null,-916503002);

var ms_backoffs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(1440)], null);
var client_ids_unsatisfied = cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_.call(null,client_ids_unsatisfied)){
return null;
} else {
var c__40731__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (state_48264){
var state_val_48265 = (state_48264[(1)]);
if((state_val_48265 === (7))){
var inst_48220 = (state_48264[(7)]);
var inst_48219 = (state_48264[(8)]);
var inst_48226 = (state_48264[(9)]);
var inst_48236 = (function (){var n = inst_48219;
var client_ids_satisfied = inst_48220;
var _QMARK_pulled = inst_48226;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_48220,inst_48219,inst_48226,state_val_48265,c__40731__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (s,client_id,p__48235){
var vec__48266 = p__48235;
var _QMARK_sch = cljs.core.nth.call(null,vec__48266,(0),null);
var _udt = cljs.core.nth.call(null,vec__48266,(1),null);
var sent_QMARK_ = (function (){var temp__4657__auto__ = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto__)){
var sch = temp__4657__auto__;
return taoensso.sente.interfaces.sch_send_BANG_.call(null,_QMARK_sch,cljs.core.not.call(null,new cljs.core.Keyword(null,"websocket","websocket",-1714963101)),buffered_evs_pstr);
} else {
return null;
}
})();
if(cljs.core.truth_(sent_QMARK_)){
return cljs.core.conj.call(null,s,client_id);
} else {
return s;
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_48220,inst_48219,inst_48226,state_val_48265,c__40731__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_48237 = cljs.core.PersistentHashSet.EMPTY;
var inst_48238 = cljs.core.reduce_kv.call(null,inst_48236,inst_48237,inst_48226);
var state_48264__$1 = state_48264;
var statearr_48269_48302 = state_48264__$1;
(statearr_48269_48302[(2)] = inst_48238);

(statearr_48269_48302[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48265 === (1))){
var inst_48218 = cljs.core.PersistentHashSet.EMPTY;
var inst_48219 = (0);
var inst_48220 = inst_48218;
var state_48264__$1 = (function (){var statearr_48270 = state_48264;
(statearr_48270[(7)] = inst_48220);

(statearr_48270[(8)] = inst_48219);

return statearr_48270;
})();
var statearr_48271_48303 = state_48264__$1;
(statearr_48271_48303[(2)] = null);

(statearr_48271_48303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48265 === (4))){
var state_48264__$1 = state_48264;
var statearr_48272_48304 = state_48264__$1;
(statearr_48272_48304[(2)] = true);

(statearr_48272_48304[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48265 === (15))){
var inst_48257 = (state_48264[(2)]);
var state_48264__$1 = state_48264;
var statearr_48273_48305 = state_48264__$1;
(statearr_48273_48305[(2)] = inst_48257);

(statearr_48273_48305[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48265 === (13))){
var inst_48243 = (state_48264[(10)]);
var inst_48248 = cljs.core.rand_int.call(null,inst_48243);
var inst_48249 = (inst_48243 + inst_48248);
var inst_48250 = cljs.core.async.timeout.call(null,inst_48249);
var state_48264__$1 = state_48264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48264__$1,(16),inst_48250);
} else {
if((state_val_48265 === (6))){
var inst_48226 = (state_48264[(9)]);
var inst_48233 = (state_48264[(2)]);
var state_48264__$1 = (function (){var statearr_48274 = state_48264;
(statearr_48274[(11)] = inst_48233);

return statearr_48274;
})();
if(cljs.core.truth_(inst_48226)){
var statearr_48275_48306 = state_48264__$1;
(statearr_48275_48306[(1)] = (7));

} else {
var statearr_48276_48307 = state_48264__$1;
(statearr_48276_48307[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48265 === (3))){
var inst_48262 = (state_48264[(2)]);
var state_48264__$1 = state_48264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48264__$1,inst_48262);
} else {
if((state_val_48265 === (12))){
var inst_48260 = (state_48264[(2)]);
var state_48264__$1 = state_48264;
var statearr_48277_48308 = state_48264__$1;
(statearr_48277_48308[(2)] = inst_48260);

(statearr_48277_48308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48265 === (2))){
var inst_48220 = (state_48264[(7)]);
var inst_48219 = (state_48264[(8)]);
var inst_48226 = (state_48264[(9)]);
var inst_48222 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48223 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_48224 = (new cljs.core.PersistentVector(null,2,(5),inst_48222,inst_48223,null));
var inst_48225 = (function (){var n = inst_48219;
var client_ids_satisfied = inst_48220;
return ((function (n,client_ids_satisfied,inst_48220,inst_48219,inst_48226,inst_48222,inst_48223,inst_48224,state_val_48265,c__40731__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m){
var ks_to_pull = cljs.core.remove.call(null,client_ids_satisfied,cljs.core.keys.call(null,m));
if(cljs.core.empty_QMARK_.call(null,ks_to_pull)){
return taoensso.encore.swapped.call(null,m,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.reduce.call(null,((function (ks_to_pull,n,client_ids_satisfied,inst_48220,inst_48219,inst_48226,inst_48222,inst_48223,inst_48224,state_val_48265,c__40731__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m__$1,k){
var vec__48278 = cljs.core.get.call(null,m__$1,k);
var _QMARK_sch = cljs.core.nth.call(null,vec__48278,(0),null);
var udt = cljs.core.nth.call(null,vec__48278,(1),null);
return cljs.core.assoc.call(null,m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_48220,inst_48219,inst_48226,inst_48222,inst_48223,inst_48224,state_val_48265,c__40731__auto__,ms_backoffs,client_ids_unsatisfied))
,m,ks_to_pull),cljs.core.select_keys.call(null,m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_48220,inst_48219,inst_48226,inst_48222,inst_48223,inst_48224,state_val_48265,c__40731__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_48226__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_48224,inst_48225);
var inst_48227 = (function (){var n = inst_48219;
var client_ids_satisfied = inst_48220;
var _QMARK_pulled = inst_48226__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_48220,inst_48219,inst_48226,inst_48222,inst_48223,inst_48224,inst_48225,inst_48226__$1,state_val_48265,c__40731__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (x){
var or__36804__auto__ = (x == null);
if(or__36804__auto__){
return or__36804__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,x);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_48220,inst_48219,inst_48226,inst_48222,inst_48223,inst_48224,inst_48225,inst_48226__$1,state_val_48265,c__40731__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_48228 = inst_48227.call(null,inst_48226__$1);
var state_48264__$1 = (function (){var statearr_48281 = state_48264;
(statearr_48281[(9)] = inst_48226__$1);

return statearr_48281;
})();
if(cljs.core.truth_(inst_48228)){
var statearr_48282_48309 = state_48264__$1;
(statearr_48282_48309[(1)] = (4));

} else {
var statearr_48283_48310 = state_48264__$1;
(statearr_48283_48310[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48265 === (11))){
var state_48264__$1 = state_48264;
var statearr_48284_48311 = state_48264__$1;
(statearr_48284_48311[(2)] = null);

(statearr_48284_48311[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48265 === (9))){
var inst_48243 = (state_48264[(10)]);
var inst_48220 = (state_48264[(7)]);
var inst_48219 = (state_48264[(8)]);
var inst_48241 = (state_48264[(2)]);
var inst_48242 = cljs.core.into.call(null,inst_48220,inst_48241);
var inst_48243__$1 = cljs.core.get.call(null,ms_backoffs,inst_48219);
var state_48264__$1 = (function (){var statearr_48285 = state_48264;
(statearr_48285[(10)] = inst_48243__$1);

(statearr_48285[(12)] = inst_48242);

return statearr_48285;
})();
if(cljs.core.truth_(inst_48243__$1)){
var statearr_48286_48312 = state_48264__$1;
(statearr_48286_48312[(1)] = (10));

} else {
var statearr_48287_48313 = state_48264__$1;
(statearr_48287_48313[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48265 === (5))){
var inst_48226 = (state_48264[(9)]);
var inst_48231 = taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:or nil? map?] ?pulled)",inst_48226,null,null);
var state_48264__$1 = state_48264;
var statearr_48288_48314 = state_48264__$1;
(statearr_48288_48314[(2)] = inst_48231);

(statearr_48288_48314[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48265 === (14))){
var state_48264__$1 = state_48264;
var statearr_48289_48315 = state_48264__$1;
(statearr_48289_48315[(2)] = null);

(statearr_48289_48315[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48265 === (16))){
var inst_48219 = (state_48264[(8)]);
var inst_48242 = (state_48264[(12)]);
var inst_48252 = (state_48264[(2)]);
var inst_48253 = (inst_48219 + (1));
var inst_48219__$1 = inst_48253;
var inst_48220 = inst_48242;
var state_48264__$1 = (function (){var statearr_48290 = state_48264;
(statearr_48290[(13)] = inst_48252);

(statearr_48290[(7)] = inst_48220);

(statearr_48290[(8)] = inst_48219__$1);

return statearr_48290;
})();
var statearr_48291_48316 = state_48264__$1;
(statearr_48291_48316[(2)] = null);

(statearr_48291_48316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48265 === (10))){
var inst_48242 = (state_48264[(12)]);
var inst_48245 = cljs.core.complement.call(null,inst_48242);
var inst_48246 = taoensso.encore.rsome.call(null,inst_48245,client_ids_unsatisfied);
var state_48264__$1 = state_48264;
if(cljs.core.truth_(inst_48246)){
var statearr_48292_48317 = state_48264__$1;
(statearr_48292_48317[(1)] = (13));

} else {
var statearr_48293_48318 = state_48264__$1;
(statearr_48293_48318[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48265 === (8))){
var state_48264__$1 = state_48264;
var statearr_48294_48319 = state_48264__$1;
(statearr_48294_48319[(2)] = null);

(statearr_48294_48319[(1)] = (9));


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
}
}
}
}
}
}
}
}
}
});})(c__40731__auto__,ms_backoffs,client_ids_unsatisfied))
;
return ((function (switch__40619__auto__,c__40731__auto__,ms_backoffs,client_ids_unsatisfied){
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40620__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40620__auto____0 = (function (){
var statearr_48298 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48298[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40620__auto__);

(statearr_48298[(1)] = (1));

return statearr_48298;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40620__auto____1 = (function (state_48264){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_48264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e48299){if((e48299 instanceof Object)){
var ex__40623__auto__ = e48299;
var statearr_48300_48320 = state_48264;
(statearr_48300_48320[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48321 = state_48264;
state_48264 = G__48321;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40620__auto__ = function(state_48264){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40620__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40620__auto____1.call(this,state_48264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40620__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40620__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var state__40733__auto__ = (function (){var statearr_48301 = f__40732__auto__.call(null);
(statearr_48301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto__);

return statearr_48301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto__,ms_backoffs,client_ids_unsatisfied))
);

return c__40731__auto__;
}
});
/**
 * Alias of `taoensso.encore/ajax-lite`
 */
taoensso.sente.ajax_lite = taoensso.encore.ajax_lite;

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

taoensso.sente._chsk_connect_BANG_ = (function taoensso$sente$_chsk_connect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(chsk);
} else {
var x__37467__auto__ = (((chsk == null))?null:chsk);
var m__37468__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__37467__auto__)]);
if(!((m__37468__auto__ == null))){
return m__37468__auto__.call(null,chsk);
} else {
var m__37468__auto____$1 = (taoensso.sente._chsk_connect_BANG_["_"]);
if(!((m__37468__auto____$1 == null))){
return m__37468__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-connect!",chsk);
}
}
}
});

taoensso.sente._chsk_disconnect_BANG_ = (function taoensso$sente$_chsk_disconnect_BANG_(chsk,reason){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(chsk,reason);
} else {
var x__37467__auto__ = (((chsk == null))?null:chsk);
var m__37468__auto__ = (taoensso.sente._chsk_disconnect_BANG_[goog.typeOf(x__37467__auto__)]);
if(!((m__37468__auto__ == null))){
return m__37468__auto__.call(null,chsk,reason);
} else {
var m__37468__auto____$1 = (taoensso.sente._chsk_disconnect_BANG_["_"]);
if(!((m__37468__auto____$1 == null))){
return m__37468__auto____$1.call(null,chsk,reason);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-disconnect!",chsk);
}
}
}
});

taoensso.sente._chsk_reconnect_BANG_ = (function taoensso$sente$_chsk_reconnect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1(chsk);
} else {
var x__37467__auto__ = (((chsk == null))?null:chsk);
var m__37468__auto__ = (taoensso.sente._chsk_reconnect_BANG_[goog.typeOf(x__37467__auto__)]);
if(!((m__37468__auto__ == null))){
return m__37468__auto__.call(null,chsk);
} else {
var m__37468__auto____$1 = (taoensso.sente._chsk_reconnect_BANG_["_"]);
if(!((m__37468__auto____$1 == null))){
return m__37468__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-reconnect!",chsk);
}
}
}
});

taoensso.sente._chsk_send_BANG_ = (function taoensso$sente$_chsk_send_BANG_(chsk,ev,opts){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(chsk,ev,opts);
} else {
var x__37467__auto__ = (((chsk == null))?null:chsk);
var m__37468__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__37467__auto__)]);
if(!((m__37468__auto__ == null))){
return m__37468__auto__.call(null,chsk,ev,opts);
} else {
var m__37468__auto____$1 = (taoensso.sente._chsk_send_BANG_["_"]);
if(!((m__37468__auto____$1 == null))){
return m__37468__auto____$1.call(null,chsk,ev,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-send!",chsk);
}
}
}
});

taoensso.sente.chsk_connect_BANG_ = (function taoensso$sente$chsk_connect_BANG_(chsk){
return taoensso.sente._chsk_connect_BANG_.call(null,chsk);
});

taoensso.sente.chsk_disconnect_BANG_ = (function taoensso$sente$chsk_disconnect_BANG_(chsk){
return taoensso.sente._chsk_disconnect_BANG_.call(null,chsk,new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641));
});

/**
 * Useful for reauthenticating after login/logout, etc.
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
return taoensso.sente._chsk_reconnect_BANG_.call(null,chsk);
});

/**
 * Deprecated
 */
taoensso.sente.chsk_destroy_BANG_ = taoensso.sente.chsk_disconnect_BANG_;
/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var args48322 = [];
var len__37879__auto___48325 = arguments.length;
var i__37880__auto___48326 = (0);
while(true){
if((i__37880__auto___48326 < len__37879__auto___48325)){
args48322.push((arguments[i__37880__auto___48326]));

var G__48327 = (i__37880__auto___48326 + (1));
i__37880__auto___48326 = G__48327;
continue;
} else {
}
break;
}

var G__48324 = args48322.length;
switch (G__48324) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48322.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",783,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null,-352072579);

return taoensso.sente._chsk_send_BANG_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",788,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null,611898167);

if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
}

return false;
});
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event.call(null,x);

if((((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null))) || (taoensso.encore.nat_int_QMARK_.call(null,_QMARK_timeout_ms))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("cb requires a timeout; timeout-ms should be a +ive integer: "),cljs.core.str(_QMARK_timeout_ms)].join('')),cljs.core.str("\n"),cljs.core.str("(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nat-int? ?timeout-ms)))")].join('')));
}

if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb)) || (taoensso.encore.chan_QMARK_.call(null,_QMARK_cb))){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("cb should be nil, an ifn, or a channel: "),cljs.core.str(cljs.core.type.call(null,_QMARK_cb))].join('')),cljs.core.str("\n"),cljs.core.str("(or (nil? ?cb) (ifn? ?cb) (enc/chan? ?cb))")].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__4657__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto__)){
var cb_uuid = temp__4657__auto__;
return taoensso.encore.swap_in_BANG_.call(null,cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),((function (cb_uuid,temp__4657__auto__){
return (function (_QMARK_f){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
});})(cb_uuid,temp__4657__auto__))
);
} else {
return null;
}
});
/**
 * Atomically swaps the value of chk's :state_ atom.
 */
taoensso.sente.swap_chsk_state_BANG_ = (function taoensso$sente$swap_chsk_state_BANG_(chsk,f){
var vec__48332 = taoensso.encore.swap_in_BANG_.call(null,new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = f.call(null,old_state);
var new_state__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(old_state))?cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),false):new_state);
var new_state__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state__$1))?cljs.core.dissoc.call(null,new_state__$1,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)):new_state__$1);
return taoensso.encore.swapped.call(null,new_state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$2], null));
}));
var old_state = cljs.core.nth.call(null,vec__48332,(0),null);
var new_state = cljs.core.nth.call(null,vec__48332,(1),null);
if(cljs.core.not_EQ_.call(null,old_state,new_state)){
var output = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null);
cljs.core.async.put_BANG_.call(null,cljs.core.get_in.call(null,chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),output], null));

return output;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_48339 = (function (){try{if(cljs.core.map_QMARK_.call(null,state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48337){if((e48337 instanceof Error)){
var e = e48337;
return e;
} else {
throw e48337;

}
}})();
if((e_48339 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(map? state)",state,e_48339,null);
}

var e_48340 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641),null,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720),null,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707),null], null), null)),x);
}).call(null,reason)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48338){if((e48338 instanceof Error)){
var e = e48338;
return e;
} else {
throw e48338;

}
}})();
if((e_48340 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:el #{:requested-disconnect :downgrading-ws-to-ajax :unexpected :requested-reconnect}] reason)",reason,e_48340,null);
}

if(cljs.core.truth_((function (){var or__36804__auto__ = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__36804__auto__)){
return or__36804__auto__;
} else {
return cljs.core.not_EQ_.call(null,reason,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}
})())){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"last-close","last-close",-2054255782),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null));
} else {
return state;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb))){
return _QMARK_cb;
} else {
var e_48349 = (function (){try{if(taoensso.encore.chan_QMARK_.call(null,_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48345){if((e48345 instanceof Error)){
var e = e48345;
return e;
} else {
throw e48345;

}
}})();
if((e_48349 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/chan? ?cb)",_QMARK_cb,e_48349,null);
}

taoensso.sente.assert_event.call(null,ev);

var vec__48346 = ev;
var ev_id = cljs.core.nth.call(null,vec__48346,(0),null);
var _ = cljs.core.nth.call(null,vec__48346,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__48346,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.as_qname.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__48346,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",868,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null,214784790);

var buffered_evs = ((cljs.core.vector_QMARK_.call(null,clj))?clj:taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? clj)",clj,null,null));
var seq__48360 = cljs.core.seq.call(null,buffered_evs);
var chunk__48361 = null;
var count__48362 = (0);
var i__48363 = (0);
while(true){
if((i__48363 < count__48362)){
var ev = cljs.core._nth.call(null,chunk__48361,i__48363);
taoensso.sente.assert_event.call(null,ev);

var vec__48364_48370 = ev;
var id_48371 = cljs.core.nth.call(null,vec__48364_48370,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_48371),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__48372 = seq__48360;
var G__48373 = chunk__48361;
var G__48374 = count__48362;
var G__48375 = (i__48363 + (1));
seq__48360 = G__48372;
chunk__48361 = G__48373;
count__48362 = G__48374;
i__48363 = G__48375;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__48360);
if(temp__4657__auto__){
var seq__48360__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48360__$1)){
var c__37615__auto__ = cljs.core.chunk_first.call(null,seq__48360__$1);
var G__48376 = cljs.core.chunk_rest.call(null,seq__48360__$1);
var G__48377 = c__37615__auto__;
var G__48378 = cljs.core.count.call(null,c__37615__auto__);
var G__48379 = (0);
seq__48360 = G__48376;
chunk__48361 = G__48377;
count__48362 = G__48378;
i__48363 = G__48379;
continue;
} else {
var ev = cljs.core.first.call(null,seq__48360__$1);
taoensso.sente.assert_event.call(null,ev);

var vec__48367_48380 = ev;
var id_48381 = cljs.core.nth.call(null,vec__48367_48380,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_48381),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__48382 = cljs.core.next.call(null,seq__48360__$1);
var G__48383 = null;
var G__48384 = (0);
var G__48385 = (0);
seq__48360 = G__48382;
chunk__48361 = G__48383;
count__48362 = G__48384;
i__48363 = G__48385;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handshake_QMARK_ = (function taoensso$sente$handshake_QMARK_(x){
var and__36792__auto__ = cljs.core.vector_QMARK_.call(null,x);
if(and__36792__auto__){
var vec__48395 = x;
var x1 = cljs.core.nth.call(null,vec__48395,(0),null);
return cljs.core._EQ_.call(null,x1,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686));
} else {
return and__36792__auto__;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_48419 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null], null), null)),x);
}).call(null,chsk_type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48409){if((e48409 instanceof Error)){
var e = e48409;
return e;
} else {
throw e48409;

}
}})();
if((e_48419 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_48419,null);
}

var e_48420 = (function (){try{if(cljs.core.truth_(taoensso.sente.handshake_QMARK_.call(null,clj))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48410){if((e48410 instanceof Error)){
var e = e48410;
return e;
} else {
throw e48410;

}
}})();
if((e_48420 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(handshake? clj)",clj,e_48420,null);
}

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",885,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null,-746285519);

var vec__48411 = clj;
var _ = cljs.core.nth.call(null,vec__48411,(0),null);
var vec__48414 = cljs.core.nth.call(null,vec__48411,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__48414,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__48414,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__48414,(2),null);
var map__48417 = chsk;
var map__48417__$1 = ((((!((map__48417 == null)))?((((map__48417.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48417.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48417):map__48417);
var chs = cljs.core.get.call(null,map__48417__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var ever_opened_QMARK__ = cljs.core.get.call(null,map__48417__$1,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913));
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_.call(null,ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),chsk_type,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),_QMARK_csrf_token,new cljs.core.Keyword(null,"handshake-data","handshake-data",-278378864),_QMARK_handshake_data,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event.call(null,handshake_ev);

if(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",904,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__48411,_,vec__48414,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__48417,map__48417__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__48411,_,vec__48414,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__48417,map__48417__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
,null)),null,-39362083);
} else {
}

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk,((function (vec__48411,_,vec__48414,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__48417,map__48417__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (p1__48398_SHARP_){
return cljs.core.merge.call(null,p1__48398_SHARP_,new_state);
});})(vec__48411,_,vec__48414,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__48417,map__48417__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
});
/**
 * nnil iff the websocket npm library[1] is available.
 *   Easiest way to install:
 *     1. Add the lein-npm[2] plugin to your `project.clj`,
 *     2. Add: `:npm {:dependencies [[websocket "1.0.23"]]}`
 * 
 *   [1] Ref. https://www.npmjs.com/package/websocket
 *   [2] Ref. https://github.com/RyanMcG/lein-npm
 */
taoensso.sente._QMARK_node_npm_websocket_ = (new cljs.core.Delay((function (){
if(cljs.core.truth_((function (){var and__36792__auto__ = taoensso.sente.node_target_QMARK_;
if(cljs.core.truth_(and__36792__auto__)){
return typeof require !== 'undefined';
} else {
return and__36792__auto__;
}
})())){
try{return require("websocket");
}catch (e48421){var e = e48421;
return null;
}} else {
return null;
}
}),null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.ws_kalive_ms = ws_kalive_ms;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.retry_count_ = retry_count_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.cbs_waiting_ = cbs_waiting_;
this.socket_ = socket_;
this.udt_last_comms_ = udt_last_comms_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__37426__auto__,k__37427__auto__){
var self__ = this;
var this__37426__auto____$1 = this;
return cljs.core._lookup.call(null,this__37426__auto____$1,k__37427__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__37428__auto__,k48428,else__37429__auto__){
var self__ = this;
var this__37428__auto____$1 = this;
var G__48430 = (((k48428 instanceof cljs.core.Keyword))?k48428.fqn:null);
switch (G__48430) {
case "ws-kalive-ms":
return self__.ws_kalive_ms;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "client-id":
return self__.client_id;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "udt-last-comms_":
return self__.udt_last_comms_;

break;
case "params":
return self__.params;

break;
case "retry-count_":
return self__.retry_count_;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "socket_":
return self__.socket_;

break;
case "url":
return self__.url;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k48428,else__37429__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__37440__auto__,writer__37441__auto__,opts__37442__auto__){
var self__ = this;
var this__37440__auto____$1 = this;
var pr_pair__37443__auto__ = ((function (this__37440__auto____$1){
return (function (keyval__37444__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__37441__auto__,cljs.core.pr_writer,""," ","",opts__37442__auto__,keyval__37444__auto__);
});})(this__37440__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__37441__auto__,pr_pair__37443__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__37442__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48427){
var self__ = this;
var G__48427__$1 = this;
return (new cljs.core.RecordIter((0),G__48427__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__37424__auto__){
var self__ = this;
var this__37424__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__37420__auto__){
var self__ = this;
var this__37420__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__37430__auto__){
var self__ = this;
var this__37430__auto____$1 = this;
return (14 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__37421__auto__){
var self__ = this;
var this__37421__auto____$1 = this;
var h__37239__auto__ = self__.__hash;
if(!((h__37239__auto__ == null))){
return h__37239__auto__;
} else {
var h__37239__auto____$1 = cljs.core.hash_imap.call(null,this__37421__auto____$1);
self__.__hash = h__37239__auto____$1;

return h__37239__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__37422__auto__,other__37423__auto__){
var self__ = this;
var this__37422__auto____$1 = this;
if(cljs.core.truth_((function (){var and__36792__auto__ = other__37423__auto__;
if(cljs.core.truth_(and__36792__auto__)){
var and__36792__auto____$1 = (this__37422__auto____$1.constructor === other__37423__auto__.constructor);
if(and__36792__auto____$1){
return cljs.core.equiv_map.call(null,this__37422__auto____$1,other__37423__auto__);
} else {
return and__36792__auto____$1;
}
} else {
return and__36792__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__37435__auto__,k__37436__auto__){
var self__ = this;
var this__37435__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__37436__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__37435__auto____$1),self__.__meta),k__37436__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__37436__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__37433__auto__,k__37434__auto__,G__48427){
var self__ = this;
var this__37433__auto____$1 = this;
var pred__48431 = cljs.core.keyword_identical_QMARK_;
var expr__48432 = k__37434__auto__;
if(cljs.core.truth_(pred__48431.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__48432))){
return (new taoensso.sente.ChWebSocket(G__48427,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__48431.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__48432))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__48427,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__48431.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__48432))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__48427,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__48431.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__48432))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__48427,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__48431.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__48432))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__48427,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__48431.call(null,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),expr__48432))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__48427,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__48431.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__48432))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,G__48427,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__48431.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__48432))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,G__48427,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__48431.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__48432))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,G__48427,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__48431.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__48432))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,G__48427,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__48431.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__48432))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,G__48427,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__48431.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__48432))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__48427,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__48431.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__48432))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__48427,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__48431.call(null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),expr__48432))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__48427,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__37434__auto__,G__48427),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__37438__auto__){
var self__ = this;
var this__37438__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__37425__auto__,G__48427){
var self__ = this;
var this__37425__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__48427,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__37431__auto__,entry__37432__auto__){
var self__ = this;
var this__37431__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__37432__auto__)){
return cljs.core._assoc.call(null,this__37431__auto____$1,cljs.core._nth.call(null,entry__37432__auto__,(0)),cljs.core._nth.call(null,entry__37432__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__37431__auto____$1,entry__37432__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (chsk__$1){
return (function (p1__48422_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__48422_SHARP_,reason);
});})(chsk__$1))
);

var temp__4657__auto__ = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4657__auto__)){
var s = temp__4657__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente._chsk_disconnect_BANG_.call(null,chsk__$1,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__48434 = opts;
var map__48434__$1 = ((((!((map__48434 == null)))?((((map__48434.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48434.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48434):map__48434);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__48434__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__48434__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__48434__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__4657__auto___48525 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___48525)){
var cb_uuid_48526 = temp__4657__auto___48525;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_48526], null),(function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48436){if((e48436 instanceof Error)){
var e = e48436;
return e;
} else {
throw e48436;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__4657__auto___48527__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4657__auto___48527__$1)){
var timeout_ms_48528 = temp__4657__auto___48527__$1;
var c__40731__auto___48529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto___48529,timeout_ms_48528,temp__4657__auto___48527__$1,cb_uuid_48526,temp__4657__auto___48525,_QMARK_cb_uuid,ppstr,map__48434,map__48434__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto___48529,timeout_ms_48528,temp__4657__auto___48527__$1,cb_uuid_48526,temp__4657__auto___48525,_QMARK_cb_uuid,ppstr,map__48434,map__48434__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (state_48447){
var state_val_48448 = (state_48447[(1)]);
if((state_val_48448 === (1))){
var inst_48437 = cljs.core.async.timeout.call(null,timeout_ms_48528);
var state_48447__$1 = state_48447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48447__$1,(2),inst_48437);
} else {
if((state_val_48448 === (2))){
var inst_48440 = (state_48447[(7)]);
var inst_48439 = (state_48447[(2)]);
var inst_48440__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_48447__$1 = (function (){var statearr_48449 = state_48447;
(statearr_48449[(8)] = inst_48439);

(statearr_48449[(7)] = inst_48440__$1);

return statearr_48449;
})();
if(cljs.core.truth_(inst_48440__$1)){
var statearr_48450_48530 = state_48447__$1;
(statearr_48450_48530[(1)] = (3));

} else {
var statearr_48451_48531 = state_48447__$1;
(statearr_48451_48531[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48448 === (3))){
var inst_48440 = (state_48447[(7)]);
var inst_48442 = inst_48440.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_48447__$1 = state_48447;
var statearr_48452_48532 = state_48447__$1;
(statearr_48452_48532[(2)] = inst_48442);

(statearr_48452_48532[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48448 === (4))){
var state_48447__$1 = state_48447;
var statearr_48453_48533 = state_48447__$1;
(statearr_48453_48533[(2)] = null);

(statearr_48453_48533[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48448 === (5))){
var inst_48445 = (state_48447[(2)]);
var state_48447__$1 = state_48447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48447__$1,inst_48445);
} else {
return null;
}
}
}
}
}
});})(c__40731__auto___48529,timeout_ms_48528,temp__4657__auto___48527__$1,cb_uuid_48526,temp__4657__auto___48525,_QMARK_cb_uuid,ppstr,map__48434,map__48434__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
return ((function (switch__40619__auto__,c__40731__auto___48529,timeout_ms_48528,temp__4657__auto___48527__$1,cb_uuid_48526,temp__4657__auto___48525,_QMARK_cb_uuid,ppstr,map__48434,map__48434__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function() {
var taoensso$sente$state_machine__40620__auto__ = null;
var taoensso$sente$state_machine__40620__auto____0 = (function (){
var statearr_48457 = [null,null,null,null,null,null,null,null,null];
(statearr_48457[(0)] = taoensso$sente$state_machine__40620__auto__);

(statearr_48457[(1)] = (1));

return statearr_48457;
});
var taoensso$sente$state_machine__40620__auto____1 = (function (state_48447){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_48447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e48458){if((e48458 instanceof Object)){
var ex__40623__auto__ = e48458;
var statearr_48459_48534 = state_48447;
(statearr_48459_48534[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48535 = state_48447;
state_48447 = G__48535;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
taoensso$sente$state_machine__40620__auto__ = function(state_48447){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40620__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40620__auto____1.call(this,state_48447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40620__auto____0;
taoensso$sente$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40620__auto____1;
return taoensso$sente$state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto___48529,timeout_ms_48528,temp__4657__auto___48527__$1,cb_uuid_48526,temp__4657__auto___48525,_QMARK_cb_uuid,ppstr,map__48434,map__48434__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
})();
var state__40733__auto__ = (function (){var statearr_48460 = f__40732__auto__.call(null);
(statearr_48460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto___48529);

return statearr_48460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto___48529,timeout_ms_48528,temp__4657__auto___48527__$1,cb_uuid_48526,temp__4657__auto___48525,_QMARK_cb_uuid,ppstr,map__48434,map__48434__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.udt_last_comms_,taoensso.encore.now_udt.call(null));

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e48461){var e = e48461;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",986,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,map__48434,map__48434__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,map__48434,map__48434__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,-72639352);

var temp__4657__auto___48536 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___48536)){
var cb_uuid_48537 = temp__4657__auto___48536;
var cb_fn_STAR__48538 = (function (){var or__36804__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_48537);
if(cljs.core.truth_(or__36804__auto__)){
return or__36804__auto__;
} else {
var e__$1 = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48462){if((e48462 instanceof Error)){
var e__$1 = e48462;
return e__$1;
} else {
throw e48462;

}
}})();
if((e__$1 == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e__$1,null);
}
}
})();
cb_fn_STAR__48538.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = (function (){var or__36804__auto__ = taoensso.encore.oget.call(null,goog.global,"WebSocket");
if(cljs.core.truth_(or__36804__auto__)){
return or__36804__auto__;
} else {
var or__36804__auto____$1 = taoensso.encore.oget.call(null,goog.global,"MozWebSocket");
if(cljs.core.truth_(or__36804__auto____$1)){
return or__36804__auto____$1;
} else {
return taoensso.encore.oget.call(null,cljs.core.deref.call(null,taoensso.sente._QMARK_node_npm_websocket_),"w3cwebsocket");
}
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var WebSocket = temp__4657__auto__;
var instance_handle = cljs.core.reset_BANG_.call(null,self__.instance_handle_,taoensso.encore.uuid_str.call(null));
var have_handle_QMARK_ = ((function (instance_handle,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.instance_handle_),instance_handle);
});})(instance_handle,WebSocket,temp__4657__auto__,chsk__$1))
;
var connect_fn = ((function (instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function taoensso$sente$connect_fn(){
if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_count_STAR_ = cljs.core.swap_BANG_.call(null,self__.retry_count_,cljs.core.inc);
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
var udt_next_reconnect = (taoensso.encore.now_udt.call(null) + backoff_ms);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",1011,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-361525621);

goog.global.setTimeout(taoensso$sente$connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__48423_SHARP_){
return cljs.core.assoc.call(null,p1__48423_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
;
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string.call(null,self__.url,cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null)))));
}catch (e48469){var e = e48469;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",1025,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket error"], null);
});})(e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,1131150480);

return null;
}})();
if(cljs.core.not.call(null,_QMARK_socket)){
return retry_fn.call(null);
} else {
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__48470 = _QMARK_socket;
(G__48470["onerror"] = ((function (G__48470,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",1035,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__48470,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.call(null,ws_ev);
}catch (e48471){var _ = e48471;
return ws_ev;
}})()], null);
});})(G__48470,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,1679042377);

var last_ws_error = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev], null);
return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (last_ws_error,G__48470,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__48424_SHARP_){
return cljs.core.assoc.call(null,p1__48424_SHARP_,new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502),last_ws_error);
});})(last_ws_error,G__48470,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
});})(G__48470,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__48470["onmessage"] = ((function (G__48470,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.call(null,ws_ev,"data");
var vec__48472 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__48472,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__48472,(1),null);
cljs.core.reset_BANG_.call(null,self__.udt_last_comms_,taoensso.encore.now_udt.call(null));

var or__36804__auto__ = (cljs.core.truth_(taoensso.sente.handshake_QMARK_.call(null,clj))?(function (){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),chsk__$1,clj);

cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));

return new cljs.core.Keyword(null,"handshake","handshake",68079331);
})()
:null);
if(cljs.core.truth_(or__36804__auto__)){
return or__36804__auto__;
} else {
var or__36804__auto____$1 = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)))?(function (){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(self__.chs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__36804__auto____$1)){
return or__36804__auto____$1;
} else {
var temp__4655__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4655__auto__)){
var cb_uuid = temp__4655__auto__;
var temp__4655__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4655__auto____$1)){
var cb_fn = temp__4655__auto____$1;
return cb_fn.call(null,clj);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",1071,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__36804__auto____$1,or__36804__auto__,ppstr,vec__48472,clj,_QMARK_cb_uuid,G__48470,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__36804__auto____$1,or__36804__auto__,ppstr,vec__48472,clj,_QMARK_cb_uuid,G__48470,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-2039267211);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
}
});})(G__48470,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__48470["onclose"] = ((function (G__48470,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var clean_QMARK_ = taoensso.encore.oget.call(null,ws_ev,"wasClean");
var code = taoensso.encore.oget.call(null,ws_ev,"code");
var reason = taoensso.encore.oget.call(null,ws_ev,"reason");
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev,new cljs.core.Keyword(null,"clean?","clean?",-1675631009),clean_QMARK_,new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null);
if(cljs.core.truth_(clean_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",1093,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (clean_QMARK_,code,reason,last_ws_close,G__48470,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean WebSocket close, will not attempt reconnect"], null);
});})(clean_QMARK_,code,reason,last_ws_close,G__48470,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-1415845510);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__48470,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__48425_SHARP_){
return cljs.core.assoc.call(null,p1__48425_SHARP_,new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__48470,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__48470,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__48426_SHARP_){
return cljs.core.assoc.call(null,taoensso.sente.chsk_state__GT_closed.call(null,p1__48426_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424)),new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__48470,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

return retry_fn.call(null);
}
});})(G__48470,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

return G__48470;
})());
}
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
;
var temp__4657__auto___48539__$1 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__4657__auto___48539__$1)){
var ms_48540 = temp__4657__auto___48539__$1;
var c__40731__auto___48541 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto___48541,ms_48540,temp__4657__auto___48539__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto___48541,ms_48540,temp__4657__auto___48539__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function (state_48502){
var state_val_48503 = (state_48502[(1)]);
if((state_val_48503 === (7))){
var inst_48498 = (state_48502[(2)]);
var state_48502__$1 = state_48502;
var statearr_48504_48542 = state_48502__$1;
(statearr_48504_48542[(2)] = inst_48498);

(statearr_48504_48542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48503 === (1))){
var state_48502__$1 = state_48502;
var statearr_48505_48543 = state_48502__$1;
(statearr_48505_48543[(2)] = null);

(statearr_48505_48543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48503 === (4))){
var inst_48479 = (state_48502[(2)]);
var inst_48480 = have_handle_QMARK_.call(null);
var state_48502__$1 = (function (){var statearr_48506 = state_48502;
(statearr_48506[(7)] = inst_48479);

return statearr_48506;
})();
if(cljs.core.truth_(inst_48480)){
var statearr_48507_48544 = state_48502__$1;
(statearr_48507_48544[(1)] = (5));

} else {
var statearr_48508_48545 = state_48502__$1;
(statearr_48508_48545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48503 === (6))){
var state_48502__$1 = state_48502;
var statearr_48509_48546 = state_48502__$1;
(statearr_48509_48546[(2)] = null);

(statearr_48509_48546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48503 === (3))){
var inst_48500 = (state_48502[(2)]);
var state_48502__$1 = state_48502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48502__$1,inst_48500);
} else {
if((state_val_48503 === (2))){
var inst_48476 = cljs.core.deref.call(null,self__.udt_last_comms_);
var inst_48477 = cljs.core.async.timeout.call(null,ms_48540);
var state_48502__$1 = (function (){var statearr_48510 = state_48502;
(statearr_48510[(8)] = inst_48476);

return statearr_48510;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48502__$1,(4),inst_48477);
} else {
if((state_val_48503 === (9))){
var state_48502__$1 = state_48502;
var statearr_48511_48547 = state_48502__$1;
(statearr_48511_48547[(2)] = null);

(statearr_48511_48547[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48503 === (5))){
var inst_48476 = (state_48502[(8)]);
var inst_48482 = cljs.core.deref.call(null,self__.udt_last_comms_);
var inst_48483 = cljs.core._EQ_.call(null,inst_48476,inst_48482);
var state_48502__$1 = state_48502;
if(inst_48483){
var statearr_48512_48548 = state_48502__$1;
(statearr_48512_48548[(1)] = (8));

} else {
var statearr_48513_48549 = state_48502__$1;
(statearr_48513_48549[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48503 === (10))){
var inst_48494 = (state_48502[(2)]);
var state_48502__$1 = (function (){var statearr_48514 = state_48502;
(statearr_48514[(9)] = inst_48494);

return statearr_48514;
})();
var statearr_48515_48550 = state_48502__$1;
(statearr_48515_48550[(2)] = null);

(statearr_48515_48550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48503 === (8))){
var inst_48485 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48486 = [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)];
var inst_48487 = (new cljs.core.PersistentVector(null,1,(5),inst_48485,inst_48486,null));
var inst_48488 = [new cljs.core.Keyword(null,"flush?","flush?",-108887231)];
var inst_48489 = [true];
var inst_48490 = cljs.core.PersistentHashMap.fromArrays(inst_48488,inst_48489);
var inst_48491 = taoensso.sente._chsk_send_BANG_.call(null,chsk__$1,inst_48487,inst_48490);
var state_48502__$1 = state_48502;
var statearr_48516_48551 = state_48502__$1;
(statearr_48516_48551[(2)] = inst_48491);

(statearr_48516_48551[(1)] = (10));


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
}
}
}
});})(c__40731__auto___48541,ms_48540,temp__4657__auto___48539__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
;
return ((function (switch__40619__auto__,c__40731__auto___48541,ms_48540,temp__4657__auto___48539__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function() {
var taoensso$sente$state_machine__40620__auto__ = null;
var taoensso$sente$state_machine__40620__auto____0 = (function (){
var statearr_48520 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48520[(0)] = taoensso$sente$state_machine__40620__auto__);

(statearr_48520[(1)] = (1));

return statearr_48520;
});
var taoensso$sente$state_machine__40620__auto____1 = (function (state_48502){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_48502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e48521){if((e48521 instanceof Object)){
var ex__40623__auto__ = e48521;
var statearr_48522_48552 = state_48502;
(statearr_48522_48552[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48553 = state_48502;
state_48502 = G__48553;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
taoensso$sente$state_machine__40620__auto__ = function(state_48502){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40620__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40620__auto____1.call(this,state_48502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40620__auto____0;
taoensso$sente$state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40620__auto____1;
return taoensso$sente$state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto___48541,ms_48540,temp__4657__auto___48539__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
})();
var state__40733__auto__ = (function (){var statearr_48523 = f__40732__auto__.call(null);
(statearr_48523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto___48541);

return statearr_48523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto___48541,ms_48540,temp__4657__auto___48539__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
);

} else {
}

cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));

connect_fn.call(null);

return chsk__$1;
} else {
return null;
}
});

taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"ws-kalive-ms","ws-kalive-ms",-1212255801,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"instance-handle_","instance-handle_",-282852930,null),new cljs.core.Symbol(null,"retry-count_","retry-count_",1660769620,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null),new cljs.core.Symbol(null,"udt-last-comms_","udt-last-comms_",1494731888,null)], null);
});

taoensso.sente.ChWebSocket.cljs$lang$type = true;

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__37460__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__37460__auto__,writer__37461__auto__){
return cljs.core._write.call(null,writer__37461__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__48429){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__48429),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__48429),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__48429),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__48429),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__48429),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968).cljs$core$IFn$_invoke$arity$1(G__48429),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__48429),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__48429),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__48429),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__48429),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__48429),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__48429),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__48429),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639).cljs$core$IFn$_invoke$arity$1(G__48429),null,cljs.core.dissoc.call(null,G__48429,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)),null));
});

taoensso.sente.new_ChWebSocket = (function taoensso$sente$new_ChWebSocket(opts){
return taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false], null)),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),cljs.core.atom.call(null,(0)),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.call(null,false),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"socket_","socket_",-361048908),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),cljs.core.atom.call(null,null)], null),opts));
});
/**
 * We must set *some* client-side timeout otherwise an unpredictable (and
 *   probably too short) browser default will be used. Must be > server's
 *   :lp-timeout-ms.
 */
taoensso.sente.default_client_side_ajax_timeout_ms = taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(60));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__37426__auto__,k__37427__auto__){
var self__ = this;
var this__37426__auto____$1 = this;
return cljs.core._lookup.call(null,this__37426__auto____$1,k__37427__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__37428__auto__,k48561,else__37429__auto__){
var self__ = this;
var this__37428__auto____$1 = this;
var G__48563 = (((k48561 instanceof cljs.core.Keyword))?k48561.fqn:null);
switch (G__48563) {
case "curr-xhr_":
return self__.curr_xhr_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "client-id":
return self__.client_id;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "url":
return self__.url;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k48561,else__37429__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__37440__auto__,writer__37441__auto__,opts__37442__auto__){
var self__ = this;
var this__37440__auto____$1 = this;
var pr_pair__37443__auto__ = ((function (this__37440__auto____$1){
return (function (keyval__37444__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__37441__auto__,cljs.core.pr_writer,""," ","",opts__37442__auto__,keyval__37444__auto__);
});})(this__37440__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__37441__auto__,pr_pair__37443__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__37442__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48560){
var self__ = this;
var G__48560__$1 = this;
return (new cljs.core.RecordIter((0),G__48560__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__37424__auto__){
var self__ = this;
var this__37424__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__37420__auto__){
var self__ = this;
var this__37420__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__37430__auto__){
var self__ = this;
var this__37430__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__37421__auto__){
var self__ = this;
var this__37421__auto____$1 = this;
var h__37239__auto__ = self__.__hash;
if(!((h__37239__auto__ == null))){
return h__37239__auto__;
} else {
var h__37239__auto____$1 = cljs.core.hash_imap.call(null,this__37421__auto____$1);
self__.__hash = h__37239__auto____$1;

return h__37239__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__37422__auto__,other__37423__auto__){
var self__ = this;
var this__37422__auto____$1 = this;
if(cljs.core.truth_((function (){var and__36792__auto__ = other__37423__auto__;
if(cljs.core.truth_(and__36792__auto__)){
var and__36792__auto____$1 = (this__37422__auto____$1.constructor === other__37423__auto__.constructor);
if(and__36792__auto____$1){
return cljs.core.equiv_map.call(null,this__37422__auto____$1,other__37423__auto__);
} else {
return and__36792__auto____$1;
}
} else {
return and__36792__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__37435__auto__,k__37436__auto__){
var self__ = this;
var this__37435__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__37436__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__37435__auto____$1),self__.__meta),k__37436__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__37436__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__37433__auto__,k__37434__auto__,G__48560){
var self__ = this;
var this__37433__auto____$1 = this;
var pred__48564 = cljs.core.keyword_identical_QMARK_;
var expr__48565 = k__37434__auto__;
if(cljs.core.truth_(pred__48564.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__48565))){
return (new taoensso.sente.ChAjaxSocket(G__48560,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__48564.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__48565))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__48560,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__48564.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__48565))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__48560,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__48564.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__48565))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__48560,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__48564.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__48565))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__48560,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__48564.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__48565))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__48560,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__48564.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__48565))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__48560,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__48564.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__48565))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,G__48560,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__48564.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__48565))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,G__48560,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__48564.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__48565))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__48560,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__48564.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__48565))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__48560,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__37434__auto__,G__48560),null));
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__37438__auto__){
var self__ = this;
var this__37438__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__37425__auto__,G__48560){
var self__ = this;
var this__37425__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__48560,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__37431__auto__,entry__37432__auto__){
var self__ = this;
var this__37431__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__37432__auto__)){
return cljs.core._assoc.call(null,this__37431__auto____$1,cljs.core._nth.call(null,entry__37432__auto__,(0)),cljs.core._nth.call(null,entry__37432__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__37431__auto____$1,entry__37432__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (chsk__$1){
return (function (p1__48554_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__48554_SHARP_,reason);
});})(chsk__$1))
);

var temp__4657__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4657__auto__)){
var x = temp__4657__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente._chsk_disconnect_BANG_.call(null,chsk__$1,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__48567 = opts;
var map__48567__$1 = ((((!((map__48567 == null)))?((((map__48567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48567):map__48567);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__48567__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__48567__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__48567__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var csrf_token = new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_));
taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__36804__auto__ = _QMARK_timeout_ms;
if(cljs.core.truth_(or__36804__auto__)){
return or__36804__auto__;
} else {
var or__36804__auto____$1 = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__36804__auto____$1)){
return or__36804__auto____$1;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),csrf_token], null)),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token,new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null));
})()], null)),((function (csrf_token,map__48567,map__48567__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function taoensso$sente$ajax_cb(p__48569){
var map__48575 = p__48569;
var map__48575__$1 = ((((!((map__48575 == null)))?((((map__48575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48575):map__48575);
var _QMARK_error = cljs.core.get.call(null,map__48575__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__48575__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (map__48575,map__48575__$1,_QMARK_error,_QMARK_content,csrf_token,map__48567,map__48567__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__48555_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__48555_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
});})(map__48575,map__48575__$1,_QMARK_error,_QMARK_content,csrf_token,map__48567,map__48567__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__48577 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__48577,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__48577,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",1213,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (content,resp_ppstr,vec__48577,resp_clj,___$1,map__48575,map__48575__$1,_QMARK_error,_QMARK_content,csrf_token,map__48567,map__48567__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__48577,resp_clj,___$1,map__48575,map__48575__$1,_QMARK_error,_QMARK_content,csrf_token,map__48567,map__48567__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,1917926575);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (content,resp_ppstr,vec__48577,resp_clj,___$1,map__48575,map__48575__$1,_QMARK_error,_QMARK_content,csrf_token,map__48567,map__48567__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__48556_SHARP_){
return cljs.core.assoc.call(null,p1__48556_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
});})(content,resp_ppstr,vec__48577,resp_clj,___$1,map__48575,map__48575__$1,_QMARK_error,_QMARK_content,csrf_token,map__48567,map__48567__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);
}
});})(csrf_token,map__48567,map__48567__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var instance_handle = cljs.core.reset_BANG_.call(null,self__.instance_handle_,taoensso.encore.uuid_str.call(null));
var have_handle_QMARK_ = ((function (instance_handle,chsk__$1){
return (function (){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.instance_handle_),instance_handle);
});})(instance_handle,chsk__$1))
;
var poll_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn(retry_count){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",1223,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,-1073546033);

if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
var udt_next_reconnect = (taoensso.encore.now_udt.call(null) + backoff_ms);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",1231,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,-1902914117);

goog.global.setTimeout(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return taoensso$sente$poll_fn.call(null,retry_count_STAR_);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__48557_SHARP_){
return cljs.core.assoc.call(null,p1__48557_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__36804__auto__ = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__36804__auto__)){
return or__36804__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null)))], null)),((function (retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn_$_ajax_cb(p__48591){
var map__48597 = p__48591;
var map__48597__$1 = ((((!((map__48597 == null)))?((((map__48597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48597):map__48597);
var _QMARK_error = cljs.core.get.call(null,map__48597__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__48597__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn.call(null,(0));
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (map__48597,map__48597__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__48558_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__48558_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
});})(map__48597,map__48597__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

return retry_fn.call(null);

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__48599 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__48599,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_.call(null,clj);
if(cljs.core.truth_(handshake_QMARK_)){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (content,ppstr,vec__48599,clj,handshake_QMARK_,map__48597,map__48597__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__48559_SHARP_){
return cljs.core.assoc.call(null,p1__48559_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
});})(content,ppstr,vec__48599,clj,handshake_QMARK_,map__48597,map__48597__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

taoensso$sente$poll_fn.call(null,(0));

if(cljs.core.truth_(handshake_QMARK_)){
return null;
} else {
var or__36804__auto__ = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)))?(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__))){
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("debug","timeout","debug/timeout",309499949)], null)], null));
} else {
}

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__36804__auto__)){
return or__36804__auto__;
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
}
});})(retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
));
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
poll_fn.call(null,(0));

return chsk__$1;
});

taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"instance-handle_","instance-handle_",-282852930,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"ajax-opts","ajax-opts",1122292418,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null)], null);
});

taoensso.sente.ChAjaxSocket.cljs$lang$type = true;

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__37460__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__37460__auto__,writer__37461__auto__){
return cljs.core._write.call(null,writer__37461__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__48562){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__48562),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__48562),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__48562),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__48562),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__48562),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__48562),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__48562),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__48562),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__48562),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__48562),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__48562),null,cljs.core.dissoc.call(null,G__48562,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)),null));
});

taoensso.sente.new_ChAjaxSocket = (function taoensso$sente$new_ChAjaxSocket(opts){
return taoensso.sente.map__GT_ChAjaxSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false], null)),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.call(null,false),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),cljs.core.atom.call(null,null)], null),opts));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAutoSocket = (function (ws_chsk_opts,ajax_chsk_opts,state_,impl_,__meta,__extmap,__hash){
this.ws_chsk_opts = ws_chsk_opts;
this.ajax_chsk_opts = ajax_chsk_opts;
this.state_ = state_;
this.impl_ = impl_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__37426__auto__,k__37427__auto__){
var self__ = this;
var this__37426__auto____$1 = this;
return cljs.core._lookup.call(null,this__37426__auto____$1,k__37427__auto__,null);
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__37428__auto__,k48604,else__37429__auto__){
var self__ = this;
var this__37428__auto____$1 = this;
var G__48606 = (((k48604 instanceof cljs.core.Keyword))?k48604.fqn:null);
switch (G__48606) {
case "ws-chsk-opts":
return self__.ws_chsk_opts;

break;
case "ajax-chsk-opts":
return self__.ajax_chsk_opts;

break;
case "state_":
return self__.state_;

break;
case "impl_":
return self__.impl_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k48604,else__37429__auto__);

}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__37440__auto__,writer__37441__auto__,opts__37442__auto__){
var self__ = this;
var this__37440__auto____$1 = this;
var pr_pair__37443__auto__ = ((function (this__37440__auto____$1){
return (function (keyval__37444__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__37441__auto__,cljs.core.pr_writer,""," ","",opts__37442__auto__,keyval__37444__auto__);
});})(this__37440__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__37441__auto__,pr_pair__37443__auto__,"#taoensso.sente.ChAutoSocket{",", ","}",opts__37442__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48603){
var self__ = this;
var G__48603__$1 = this;
return (new cljs.core.RecordIter((0),G__48603__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__37424__auto__){
var self__ = this;
var this__37424__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__37420__auto__){
var self__ = this;
var this__37420__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__37430__auto__){
var self__ = this;
var this__37430__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__37421__auto__){
var self__ = this;
var this__37421__auto____$1 = this;
var h__37239__auto__ = self__.__hash;
if(!((h__37239__auto__ == null))){
return h__37239__auto__;
} else {
var h__37239__auto____$1 = cljs.core.hash_imap.call(null,this__37421__auto____$1);
self__.__hash = h__37239__auto____$1;

return h__37239__auto____$1;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__37422__auto__,other__37423__auto__){
var self__ = this;
var this__37422__auto____$1 = this;
if(cljs.core.truth_((function (){var and__36792__auto__ = other__37423__auto__;
if(cljs.core.truth_(and__36792__auto__)){
var and__36792__auto____$1 = (this__37422__auto____$1.constructor === other__37423__auto__.constructor);
if(and__36792__auto____$1){
return cljs.core.equiv_map.call(null,this__37422__auto____$1,other__37423__auto__);
} else {
return and__36792__auto____$1;
}
} else {
return and__36792__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__37435__auto__,k__37436__auto__){
var self__ = this;
var this__37435__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl_","impl_",1218818179),null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),null,new cljs.core.Keyword(null,"state_","state_",957667102),null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),null], null), null),k__37436__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__37435__auto____$1),self__.__meta),k__37436__auto__);
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__37436__auto__)),null));
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__37433__auto__,k__37434__auto__,G__48603){
var self__ = this;
var this__37433__auto____$1 = this;
var pred__48607 = cljs.core.keyword_identical_QMARK_;
var expr__48608 = k__37434__auto__;
if(cljs.core.truth_(pred__48607.call(null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__48608))){
return (new taoensso.sente.ChAutoSocket(G__48603,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__48607.call(null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__48608))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__48603,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__48607.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__48608))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__48603,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__48607.call(null,new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__48608))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__48603,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__37434__auto__,G__48603),null));
}
}
}
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__37438__auto__){
var self__ = this;
var this__37438__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__37425__auto__,G__48603){
var self__ = this;
var this__37425__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__48603,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__37431__auto__,entry__37432__auto__){
var self__ = this;
var this__37431__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__37432__auto__)){
return cljs.core._assoc.call(null,this__37431__auto____$1,cljs.core._nth.call(null,entry__37432__auto__,(0)),cljs.core._nth.call(null,entry__37432__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__37431__auto____$1,entry__37432__auto__);
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__4657__auto__)){
var impl = temp__4657__auto__;
return taoensso.sente._chsk_disconnect_BANG_.call(null,impl,reason);
} else {
return null;
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__4657__auto__)){
var impl = temp__4657__auto__;
taoensso.sente._chsk_disconnect_BANG_.call(null,impl,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
} else {
return null;
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var temp__4655__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__4655__auto__)){
var impl = temp__4655__auto__;
return taoensso.sente._chsk_send_BANG_.call(null,impl,ev,opts);
} else {
var map__48610 = opts;
var map__48610__$1 = ((((!((map__48610 == null)))?((((map__48610.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48610.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48610):map__48610);
var _QMARK_cb = cljs.core.get.call(null,map__48610__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var ajax_chsk_opts__$1 = cljs.core.assoc.call(null,self__.ajax_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ws_chsk_opts__$1 = cljs.core.assoc.call(null,self__.ws_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ajax_conn_BANG_ = ((function (ajax_chsk_opts__$1,ws_chsk_opts__$1,chsk__$1){
return (function (){
cljs.core.remove_watch.call(null,self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080));

return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.new_ChAjaxSocket.call(null,ajax_chsk_opts__$1));
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,chsk__$1))
;
var ws_conn_BANG_ = ((function (ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
var downgraded_QMARK___48613 = cljs.core.atom.call(null,false);
cljs.core.add_watch.call(null,self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080),((function (downgraded_QMARK___48613,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (_,___$1,old_state,new_state){
var temp__4657__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__4657__auto__)){
var impl = temp__4657__auto__;
var temp__4657__auto____$1 = new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(impl);
if(cljs.core.truth_(temp__4657__auto____$1)){
var ever_opened_QMARK__ = temp__4657__auto____$1;
if(cljs.core.truth_(cljs.core.deref.call(null,ever_opened_QMARK__))){
return null;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"last-error","last-error",1848699973).cljs$core$IFn$_invoke$arity$1(new_state))){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,downgraded_QMARK___48613,false,true))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",1359,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (ever_opened_QMARK__,temp__4657__auto____$1,impl,temp__4657__auto__,downgraded_QMARK___48613,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
});})(ever_opened_QMARK__,temp__4657__auto____$1,impl,temp__4657__auto__,downgraded_QMARK___48613,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
,null)),null,201263138);

taoensso.sente._chsk_disconnect_BANG_.call(null,impl,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720));

return cljs.core.reset_BANG_.call(null,self__.impl_,ajax_conn_BANG_.call(null));
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});})(downgraded_QMARK___48613,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
);

return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.new_ChWebSocket.call(null,ws_chsk_opts__$1));
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
;
cljs.core.reset_BANG_.call(null,self__.impl_,(function (){var or__36804__auto__ = ws_conn_BANG_.call(null);
if(cljs.core.truth_(or__36804__auto__)){
return or__36804__auto__;
} else {
return ajax_conn_BANG_.call(null);
}
})());

return chsk__$1;
});

taoensso.sente.ChAutoSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ws-chsk-opts","ws-chsk-opts",-349638577,null),new cljs.core.Symbol(null,"ajax-chsk-opts","ajax-chsk-opts",-1051844442,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"impl_","impl_",-1435617590,null)], null);
});

taoensso.sente.ChAutoSocket.cljs$lang$type = true;

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrSeq = (function (this__37460__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrWriter = (function (this__37460__auto__,writer__37461__auto__){
return cljs.core._write.call(null,writer__37461__auto__,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.__GT_ChAutoSocket = (function taoensso$sente$__GT_ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_){
return (new taoensso.sente.ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_,null,null,null));
});

taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__48605){
return (new taoensso.sente.ChAutoSocket(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104).cljs$core$IFn$_invoke$arity$1(G__48605),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327).cljs$core$IFn$_invoke$arity$1(G__48605),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__48605),new cljs.core.Keyword(null,"impl_","impl_",1218818179).cljs$core$IFn$_invoke$arity$1(G__48605),null,cljs.core.dissoc.call(null,G__48605,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts){
return taoensso.sente.map__GT_ChAutoSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false], null)),new cljs.core.Keyword(null,"impl_","impl_",1218818179),cljs.core.atom.call(null,null)], null),opts));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__48618 = (((protocol instanceof cljs.core.Keyword))?protocol.fqn:null);
switch (G__48618) {
case "http":
return "http:";

break;
case "https":
return "https:";

break;
default:
return protocol;

}
})();
var protocol__$2 = (function (){var e = (function (){try{if(((function (protocol__$1){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:",null,"http:",null], null), null)),x);
});})(protocol__$1))
.call(null,protocol__$1)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48619){if((e48619 instanceof Error)){
var e = e48619;
return e;
} else {
throw e48619;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:el #{\"https:\" \"http:\"}] protocol)",protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__48620 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__48620) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__48621 = protocol__$2;
switch (G__48621) {
case "https:":
return "wss:";

break;
case "http:":
return "ws:";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(protocol__$2)].join('')));

}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
return [cljs.core.str(protocol__$3),cljs.core.str("//"),cljs.core.str(taoensso.encore.path.call(null,host,path))].join('');
});
/**
 * Returns nil on failure, or a map with keys:
 *     :ch-recv ; core.async channel to receive `event-msg`s (internal or from
 *              ; clients). May `put!` (inject) arbitrary `event`s to this channel.
 *     :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *     :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *     :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Common options:
 *     :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto).
 *     :protocol       ; Server protocol, e/o #{:http :https}.
 *     :host           ; Server host (defaults to current page's host).
 *     :params         ; Map of any params to incl. in chsk Ring requests (handy
 *                     ; for application-level auth, etc.).
 *     :packer         ; :edn (default), or an IPacker implementation.
 *     :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-lite`.
 *     :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 *     :ws-kalive-ms   ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to server's :ws-kalive-ms.
 */
taoensso.sente.make_channel_socket_client_BANG_ = (function taoensso$sente$make_channel_socket_client_BANG_(var_args){
var args__37886__auto__ = [];
var len__37879__auto___48642 = arguments.length;
var i__37880__auto___48643 = (0);
while(true){
if((i__37880__auto___48643 < len__37879__auto___48642)){
args__37886__auto__.push((arguments[i__37880__auto___48643]));

var G__48644 = (i__37880__auto___48643 + (1));
i__37880__auto___48643 = G__48644;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((1) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37887__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__48627){
var vec__48628 = p__48627;
var map__48631 = cljs.core.nth.call(null,vec__48628,(0),null);
var map__48631__$1 = ((((!((map__48631 == null)))?((((map__48631.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48631.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48631):map__48631);
var opts = map__48631__$1;
var ajax_opts = cljs.core.get.call(null,map__48631__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.call(null,map__48631__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var client_id = cljs.core.get.call(null,map__48631__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__36804__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__36804__auto__)){
return or__36804__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var protocol = cljs.core.get.call(null,map__48631__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var packer = cljs.core.get.call(null,map__48631__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.call(null,map__48631__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.call(null,map__48631__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.call(null,map__48631__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.call(null,map__48631__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var backoff_ms_fn = cljs.core.get.call(null,map__48631__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__48631__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__48628,(1),null);
var e_48645 = (function (){try{if(((function (vec__48628,map__48631,map__48631__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)),x);
});})(vec__48628,map__48631,map__48631__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48633){if((e48633 instanceof Error)){
var e = e48633;
return e;
} else {
throw e48633;

}
}})();
if((e_48645 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:in #{:ws :ajax :auto}] type)",type,e_48645,null);
}

var e_48646 = (function (){try{if(taoensso.encore.nblank_str_QMARK_.call(null,client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48634){if((e48634 instanceof Error)){
var e = e48634;
return e;
} else {
throw e48634;

}
}})();
if((e_48646 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/nblank-str? client-id)",client_id,e_48646,null);
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",1424,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__48628,map__48631,map__48631__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__48628,map__48631,map__48631__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,-1512905684);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",1425,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__48628,map__48631,map__48631__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__48628,map__48631,map__48631__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,749229037);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var vec__48635 = (function (){var win_loc = taoensso.encore.get_win_loc.call(null);
var path__$1 = (function (){var or__36804__auto__ = path;
if(cljs.core.truth_(or__36804__auto__)){
return or__36804__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
var temp__4655__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ws","ws",86841443)),f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
} else {
var protocol__$1 = (function (){var or__36804__auto__ = protocol;
if(cljs.core.truth_(or__36804__auto__)){
return or__36804__auto__;
} else {
var or__36804__auto____$1 = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_loc);
if(cljs.core.truth_(or__36804__auto____$1)){
return or__36804__auto____$1;
} else {
return new cljs.core.Keyword(null,"http","http",382524695);
}
}
})();
var host__$1 = (function (){var or__36804__auto__ = host;
if(cljs.core.truth_(or__36804__auto__)){
return or__36804__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.sente.get_chsk_url.call(null,protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443)),taoensso.sente.get_chsk_url.call(null,protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
}
})();
var ws_url = cljs.core.nth.call(null,vec__48635,(0),null);
var ajax_url = cljs.core.nth.call(null,vec__48635,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(128))),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),(function (){var buf = cljs.core.async.sliding_buffer.call(null,(512));
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.chan.call(null,buf,cljs.core.map.call(null,((function (buf,packer__$1,vec__48635,ws_url,ajax_url,vec__48628,map__48631,map__48631__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(buf,packer__$1,vec__48635,ws_url,ajax_url,vec__48628,map__48631,map__48631__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
} else {
return cljs.core.async.chan.call(null,buf);
}
})()], null);
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),ws_kalive_ms], null);
var ws_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),ws_url,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var ajax_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),ajax_url,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),ajax_opts,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),ws_chsk_opts,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_.call(null,(function (){var G__48638 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__48638) {
case "ws":
return taoensso.sente.new_ChWebSocket.call(null,ws_chsk_opts);

break;
case "ajax":
return taoensso.sente.new_ChAjaxSocket.call(null,ajax_chsk_opts);

break;
case "auto":
return taoensso.sente.new_ChAutoSocket.call(null,auto_chsk_opts);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})());
var temp__4655__auto__ = _QMARK_chsk;
if(cljs.core.truth_(temp__4655__auto__)){
var chsk = temp__4655__auto__;
var chsk_state_ = new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk);
var internal_ch = new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs);
var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);
var ev_ch = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs)], null),recv_buf_or_n);
var ev_msg_ch = cljs.core.async.chan.call(null,(1),cljs.core.map.call(null,((function (chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__4655__auto__,packer__$1,vec__48635,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__48628,map__48631,map__48631__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__48639 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__48639,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__48639,(1),null);
var ev__$1 = vec__48639;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),internal_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),chsk_state_,new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__4655__auto__,packer__$1,vec__48635,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__48628,map__48631,map__48631__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
cljs.core.async.pipe.call(null,ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ev_msg_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",1513,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto__,packer__$1,vec__48635,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__48628,map__48631,map__48631__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
});})(temp__4655__auto__,packer__$1,vec__48635,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__48628,map__48631,map__48631__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,2062699453);
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq48625){
var G__48626 = cljs.core.first.call(null,seq48625);
var seq48625__$1 = cljs.core.next.call(null,seq48625);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48626,seq48625__$1);
});

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__48727 = opts;
var map__48727__$1 = ((((!((map__48727 == null)))?((((map__48727.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48727.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48727):map__48727);
var trace_evs_QMARK_ = cljs.core.get.call(null,map__48727__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__48727__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.call(null,map__48727__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
var ch_ctrl = cljs.core.async.chan.call(null);
var execute1 = ((function (map__48727,map__48727__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl){
return (function (f){
return f.call(null);
});})(map__48727,map__48727__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl))
;
var c__40731__auto___48806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto___48806,map__48727,map__48727__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto___48806,map__48727,map__48727__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (state_48773){
var state_val_48774 = (state_48773[(1)]);
if((state_val_48774 === (7))){
var inst_48769 = (state_48773[(2)]);
var state_48773__$1 = state_48773;
var statearr_48775_48807 = state_48773__$1;
(statearr_48775_48807[(2)] = inst_48769);

(statearr_48775_48807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48774 === (1))){
var state_48773__$1 = state_48773;
var statearr_48776_48808 = state_48773__$1;
(statearr_48776_48808[(2)] = null);

(statearr_48776_48808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48774 === (4))){
var inst_48739 = (state_48773[(7)]);
var inst_48737 = (state_48773[(8)]);
var inst_48740 = (state_48773[(9)]);
var inst_48737__$1 = (state_48773[(2)]);
var inst_48738 = cljs.core.nth.call(null,inst_48737__$1,(0),null);
var inst_48739__$1 = cljs.core.nth.call(null,inst_48737__$1,(1),null);
var inst_48740__$1 = cljs.core._EQ_.call(null,inst_48739__$1,ch_ctrl);
var state_48773__$1 = (function (){var statearr_48777 = state_48773;
(statearr_48777[(7)] = inst_48739__$1);

(statearr_48777[(8)] = inst_48737__$1);

(statearr_48777[(10)] = inst_48738);

(statearr_48777[(9)] = inst_48740__$1);

return statearr_48777;
})();
if(inst_48740__$1){
var statearr_48778_48809 = state_48773__$1;
(statearr_48778_48809[(1)] = (5));

} else {
var statearr_48779_48810 = state_48773__$1;
(statearr_48779_48810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48774 === (15))){
var inst_48738 = (state_48773[(10)]);
var state_48773__$1 = state_48773;
var statearr_48780_48811 = state_48773__$1;
(statearr_48780_48811[(2)] = inst_48738);

(statearr_48780_48811[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48774 === (13))){
var inst_48755 = (state_48773[(2)]);
var state_48773__$1 = state_48773;
var statearr_48781_48812 = state_48773__$1;
(statearr_48781_48812[(2)] = inst_48755);

(statearr_48781_48812[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48774 === (6))){
var inst_48738 = (state_48773[(10)]);
var inst_48745 = (inst_48738 == null);
var inst_48746 = cljs.core.not.call(null,inst_48745);
var state_48773__$1 = state_48773;
if(inst_48746){
var statearr_48782_48813 = state_48773__$1;
(statearr_48782_48813[(1)] = (8));

} else {
var statearr_48783_48814 = state_48773__$1;
(statearr_48783_48814[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48774 === (3))){
var inst_48771 = (state_48773[(2)]);
var state_48773__$1 = state_48773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48773__$1,inst_48771);
} else {
if((state_val_48774 === (12))){
var state_48773__$1 = state_48773;
var statearr_48784_48815 = state_48773__$1;
(statearr_48784_48815[(2)] = false);

(statearr_48784_48815[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48774 === (2))){
var inst_48733 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48734 = [ch_recv,ch_ctrl];
var inst_48735 = (new cljs.core.PersistentVector(null,2,(5),inst_48733,inst_48734,null));
var state_48773__$1 = state_48773;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48773__$1,(4),inst_48735);
} else {
if((state_val_48774 === (11))){
var state_48773__$1 = state_48773;
var statearr_48785_48816 = state_48773__$1;
(statearr_48785_48816[(2)] = true);

(statearr_48785_48816[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48774 === (9))){
var state_48773__$1 = state_48773;
var statearr_48786_48817 = state_48773__$1;
(statearr_48786_48817[(2)] = false);

(statearr_48786_48817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48774 === (5))){
var state_48773__$1 = state_48773;
var statearr_48787_48818 = state_48773__$1;
(statearr_48787_48818[(2)] = null);

(statearr_48787_48818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48774 === (14))){
var inst_48738 = (state_48773[(10)]);
var inst_48760 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48738);
var state_48773__$1 = state_48773;
var statearr_48788_48819 = state_48773__$1;
(statearr_48788_48819[(2)] = inst_48760);

(statearr_48788_48819[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48774 === (16))){
var inst_48739 = (state_48773[(7)]);
var inst_48737 = (state_48773[(8)]);
var inst_48738 = (state_48773[(10)]);
var inst_48740 = (state_48773[(9)]);
var inst_48763 = (state_48773[(2)]);
var inst_48764 = cljs.core.get.call(null,inst_48763,new cljs.core.Keyword(null,"event","event",301435442));
var inst_48765 = (function (){var vec__48730 = inst_48737;
var v = inst_48738;
var p = inst_48739;
var stop_QMARK_ = inst_48740;
var map__48743 = inst_48763;
var event_msg = inst_48763;
var event = inst_48764;
return ((function (vec__48730,v,p,stop_QMARK_,map__48743,event_msg,event,inst_48739,inst_48737,inst_48738,inst_48740,inst_48763,inst_48764,state_val_48774,c__40731__auto___48806,map__48727,map__48727__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",1540,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__48730,v,p,stop_QMARK_,map__48743,event_msg,event,inst_48739,inst_48737,inst_48738,inst_48740,inst_48763,inst_48764,state_val_48774,c__40731__auto___48806,map__48727,map__48727__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});})(vec__48730,v,p,stop_QMARK_,map__48743,event_msg,event,inst_48739,inst_48737,inst_48738,inst_48740,inst_48763,inst_48764,state_val_48774,c__40731__auto___48806,map__48727,map__48727__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-956778123);
} else {
}

return event_msg_handler.call(null,(cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.sente.server_event_msg_QMARK_.call(null,event_msg))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48791){if((e48791 instanceof Error)){
var e = e48791;
return e;
} else {
throw e48791;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,"(server-event-msg? event-msg)",event_msg,e,null);
}
})():(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.sente.client_event_msg_QMARK_.call(null,event_msg))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48792){if((e48792 instanceof Error)){
var e = e48792;
return e;
} else {
throw e48792;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,"(client-event-msg? event-msg)",event_msg,e,null);
}
})()));
}catch (e48789){if((e48789 instanceof Error)){
var e1 = e48789;
try{var temp__4655__auto__ = error_handler;
if(cljs.core.truth_(temp__4655__auto__)){
var eh = temp__4655__auto__;
return error_handler.call(null,e1,event_msg);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",1549,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto__,e1,vec__48730,v,p,stop_QMARK_,map__48743,event_msg,event,inst_48739,inst_48737,inst_48738,inst_48740,inst_48763,inst_48764,state_val_48774,c__40731__auto___48806,map__48727,map__48727__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,"Chsk router `event-msg-handler` error: %s",event], null);
});})(temp__4655__auto__,e1,vec__48730,v,p,stop_QMARK_,map__48743,event_msg,event,inst_48739,inst_48737,inst_48738,inst_48740,inst_48763,inst_48764,state_val_48774,c__40731__auto___48806,map__48727,map__48727__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-956650264);
}
}catch (e48790){if((e48790 instanceof Error)){
var e2 = e48790;
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init2026011416408674511.clj",1550,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e2,e1,vec__48730,v,p,stop_QMARK_,map__48743,event_msg,event,inst_48739,inst_48737,inst_48738,inst_48740,inst_48763,inst_48764,state_val_48774,c__40731__auto___48806,map__48727,map__48727__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});})(e2,e1,vec__48730,v,p,stop_QMARK_,map__48743,event_msg,event,inst_48739,inst_48737,inst_48738,inst_48740,inst_48763,inst_48764,state_val_48774,c__40731__auto___48806,map__48727,map__48727__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-1283499255);
} else {
throw e48790;

}
}} else {
throw e48789;

}
}});
;})(vec__48730,v,p,stop_QMARK_,map__48743,event_msg,event,inst_48739,inst_48737,inst_48738,inst_48740,inst_48763,inst_48764,state_val_48774,c__40731__auto___48806,map__48727,map__48727__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var inst_48766 = execute1.call(null,inst_48765);
var state_48773__$1 = (function (){var statearr_48793 = state_48773;
(statearr_48793[(11)] = inst_48766);

return statearr_48793;
})();
var statearr_48794_48820 = state_48773__$1;
(statearr_48794_48820[(2)] = null);

(statearr_48794_48820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48774 === (10))){
var inst_48758 = (state_48773[(2)]);
var state_48773__$1 = state_48773;
if(cljs.core.truth_(inst_48758)){
var statearr_48795_48821 = state_48773__$1;
(statearr_48795_48821[(1)] = (14));

} else {
var statearr_48796_48822 = state_48773__$1;
(statearr_48796_48822[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48774 === (8))){
var inst_48738 = (state_48773[(10)]);
var inst_48748 = inst_48738.cljs$lang$protocol_mask$partition0$;
var inst_48749 = (inst_48748 & (64));
var inst_48750 = inst_48738.cljs$core$ISeq$;
var inst_48751 = (inst_48749) || (inst_48750);
var state_48773__$1 = state_48773;
if(cljs.core.truth_(inst_48751)){
var statearr_48797_48823 = state_48773__$1;
(statearr_48797_48823[(1)] = (11));

} else {
var statearr_48798_48824 = state_48773__$1;
(statearr_48798_48824[(1)] = (12));

}

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
}
}
}
}
}
}
}
}
}
});})(c__40731__auto___48806,map__48727,map__48727__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
;
return ((function (switch__40619__auto__,c__40731__auto___48806,map__48727,map__48727__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__40620__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__40620__auto____0 = (function (){
var statearr_48802 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48802[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__40620__auto__);

(statearr_48802[(1)] = (1));

return statearr_48802;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__40620__auto____1 = (function (state_48773){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_48773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e48803){if((e48803 instanceof Object)){
var ex__40623__auto__ = e48803;
var statearr_48804_48825 = state_48773;
(statearr_48804_48825[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48826 = state_48773;
state_48773 = G__48826;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__40620__auto__ = function(state_48773){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__40620__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__40620__auto____1.call(this,state_48773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__40620__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__40620__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto___48806,map__48727,map__48727__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var state__40733__auto__ = (function (){var statearr_48805 = f__40732__auto__.call(null);
(statearr_48805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto___48806);

return statearr_48805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto___48806,map__48727,map__48727__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
);


return ((function (map__48727,map__48727__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(map__48727,map__48727__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
});
/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 * 
 *   Or for simple automatic future-based threading of every request, enable
 *   the `:simple-auto-threading?` opt (disabled by default).
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__37886__auto__ = [];
var len__37879__auto___48836 = arguments.length;
var i__37880__auto___48837 = (0);
while(true){
if((i__37880__auto___48837 < len__37879__auto___48836)){
args__37886__auto__.push((arguments[i__37880__auto___48837]));

var G__48838 = (i__37880__auto___48837 + (1));
i__37880__auto___48837 = G__48838;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((2) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37887__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__48830){
var vec__48831 = p__48830;
var map__48834 = cljs.core.nth.call(null,vec__48831,(0),null);
var map__48834__$1 = ((((!((map__48834 == null)))?((((map__48834.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48834.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48834):map__48834);
var opts = map__48834__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__48834__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__48834__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.call(null,map__48834__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
return taoensso.sente._start_chsk_router_BANG_.call(null,new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq48827){
var G__48828 = cljs.core.first.call(null,seq48827);
var seq48827__$1 = cljs.core.next.call(null,seq48827);
var G__48829 = cljs.core.first.call(null,seq48827__$1);
var seq48827__$2 = cljs.core.next.call(null,seq48827__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48828,G__48829,seq48827__$2);
});

/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__37886__auto__ = [];
var len__37879__auto___48848 = arguments.length;
var i__37880__auto___48849 = (0);
while(true){
if((i__37880__auto___48849 < len__37879__auto___48848)){
args__37886__auto__.push((arguments[i__37880__auto___48849]));

var G__48850 = (i__37880__auto___48849 + (1));
i__37880__auto___48849 = G__48850;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((2) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37887__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__48842){
var vec__48843 = p__48842;
var map__48846 = cljs.core.nth.call(null,vec__48843,(0),null);
var map__48846__$1 = ((((!((map__48846 == null)))?((((map__48846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48846):map__48846);
var opts = map__48846__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__48846__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__48846__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,cljs.core.not.call(null,new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq48839){
var G__48840 = cljs.core.first.call(null,seq48839);
var seq48839__$1 = cljs.core.next.call(null,seq48839);
var G__48841 = cljs.core.first.call(null,seq48839__$1);
var seq48839__$2 = cljs.core.next.call(null,seq48839__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48840,G__48841,seq48839__$2);
});

taoensso.sente.event_msg_QMARK_ = taoensso.sente.client_event_msg_QMARK_;
/**
 * Platform-specific alias for `make-channel-socket-server!` or
 *   `make-channel-socket-client!`. Please see the appropriate aliased fn
 * docstring for details.
 */
taoensso.sente.make_channel_socket_BANG_ = taoensso.sente.make_channel_socket_client_BANG_;
/**
 * Platform-specific alias for `start-server-chsk-router!` or
 *   `start-client-chsk-router!`. Please see the appropriate aliased fn
 *   docstring for details.
 */
taoensso.sente.start_chsk_router_BANG_ = taoensso.sente.start_client_chsk_router_BANG_;
/**
 * DEPRECATED: Please use `start-chsk-router!` instead
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_client_chsk_router_BANG_.call(null,ch_recv,(function (ev_msg){
return event_handler.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg));
}));
});

/**
 * DEPRECATED. Please use `timbre/set-level!` instead
 */
taoensso.sente.set_logging_level_BANG_ = taoensso.timbre.set_level_BANG_;

/**
 * DEPRECATED: Please use `ajax-lite` instead
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;

/**
 * DEPRECATED
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__48851,websocket_QMARK_){
var map__48854 = p__48851;
var map__48854__$1 = ((((!((map__48854 == null)))?((((map__48854.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48854.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48854):map__48854);
var location = map__48854__$1;
var protocol = cljs.core.get.call(null,map__48854__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.call(null,map__48854__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__48854__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.call(null,protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str(protocol__$1),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__36804__auto__ = path;
if(cljs.core.truth_(or__36804__auto__)){
return or__36804__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=sente.js.map