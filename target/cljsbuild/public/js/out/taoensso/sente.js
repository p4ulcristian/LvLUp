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
var vec__48328 = x;
var ev_id = cljs.core.nth.call(null,vec__48328,(0),null);
var _ = cljs.core.nth.call(null,vec__48328,(1),null);
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
var and__36746__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__36746__auto__){
var and__36746__auto____$1 = taoensso.encore.ks_EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__36746__auto____$1){
var map__48341 = x;
var map__48341__$1 = ((((!((map__48341 == null)))?((((map__48341.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48341.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48341):map__48341);
var ch_recv = cljs.core.get.call(null,map__48341__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__48341__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__48341__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__48341__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__36746__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__36746__auto____$2){
var and__36746__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__36746__auto____$3){
var and__36746__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(and__36746__auto____$4){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__36746__auto____$4;
}
} else {
return and__36746__auto____$3;
}
} else {
return and__36746__auto____$2;
}
} else {
return and__36746__auto____$1;
}
} else {
return and__36746__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__36746__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__36746__auto__){
var and__36746__auto____$1 = taoensso.encore.ks_EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__36746__auto____$1){
var map__48353 = x;
var map__48353__$1 = ((((!((map__48353 == null)))?((((map__48353.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48353.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48353):map__48353);
var ch_recv = cljs.core.get.call(null,map__48353__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__48353__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__48353__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.call(null,map__48353__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.call(null,map__48353__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.call(null,map__48353__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__48353__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var and__36746__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__36746__auto____$2){
var and__36746__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__36746__auto____$3){
var and__36746__auto____$4 = taoensso.encore.atom_QMARK_.call(null,connected_uids);
if(and__36746__auto____$4){
var and__36746__auto____$5 = cljs.core.map_QMARK_.call(null,ring_req);
if(and__36746__auto____$5){
var and__36746__auto____$6 = taoensso.encore.nblank_str_QMARK_.call(null,client_id);
if(and__36746__auto____$6){
var and__36746__auto____$7 = taoensso.sente.event_QMARK_.call(null,event);
if(cljs.core.truth_(and__36746__auto____$7)){
return ((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_reply_fn));
} else {
return and__36746__auto____$7;
}
} else {
return and__36746__auto____$6;
}
} else {
return and__36746__auto____$5;
}
} else {
return and__36746__auto____$4;
}
} else {
return and__36746__auto____$3;
}
} else {
return and__36746__auto____$2;
}
} else {
return and__36746__auto____$1;
}
} else {
return and__36746__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__48355){
var map__48361 = p__48355;
var map__48361__$1 = ((((!((map__48361 == null)))?((((map__48361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48361):map__48361);
var ev_msg = map__48361__$1;
var event = cljs.core.get.call(null,map__48361__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__48361__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__48363 = taoensso.sente.as_event.call(null,event);
var ev_id = cljs.core.nth.call(null,vec__48363,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__48363,(1),null);
var valid_event = vec__48363;
var ev_msg_STAR_ = cljs.core.merge.call(null,ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null));
if(cljs.core.not.call(null,taoensso.sente.server_event_msg_QMARK_.call(null,ev_msg_STAR_))){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",187,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__48363,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__48361,map__48361__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__48363,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__48361,map__48361__$1,ev_msg,event,_QMARK_reply_fn))
,null)),null,-42529466);
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
}catch (e48373){var t = e48373;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",208,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (t,wrapped_QMARK_,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t,wrapped_QMARK_,pstr))
,null)),null,1288093473);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),pstr], null);
}})();
var vec__48370 = ((wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__48370,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__48370,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",214,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (wrapped_QMARK_,pstr,clj,vec__48370,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(wrapped_QMARK_,pstr,clj,vec__48370,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null,-65343257);

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
var args48374 = [];
var len__37833__auto___48377 = arguments.length;
var i__37834__auto___48378 = (0);
while(true){
if((i__37834__auto___48378 < len__37833__auto___48377)){
args48374.push((arguments[i__37834__auto___48378]));

var G__48379 = (i__37834__auto___48378 + (1));
i__37834__auto___48378 = G__48379;
continue;
} else {
}
break;
}

var G__48376 = args48374.length;
switch (G__48376) {
case 3:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48374.length)].join('')));

}
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,_QMARK_packer_meta,clj){
var pstr = [cljs.core.str("-"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,clj,_QMARK_packer_meta)))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",224,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (unwrapped): %s -> %s",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_packer_meta,clj], null),pstr], null);
});})(pstr))
,null)),null,-1858809014);

return pstr;
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4 = (function (packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
var pstr = [cljs.core.str("+"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,wrapped_clj,_QMARK_packer_meta)))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",234,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_uuid__$1,wrapped_clj,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (wrapped): %s -> %s",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_packer_meta,clj,_QMARK_cb_uuid__$1], null),pstr], null);
});})(_QMARK_cb_uuid__$1,wrapped_clj,pstr))
,null)),null,-1267666957);

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

taoensso.sente.EdnPacker.cljs$lang$ctorPrWriter = (function (this__37364__auto__,writer__37365__auto__,opt__37366__auto__){
return cljs.core._write.call(null,writer__37365__auto__,"taoensso.sente/EdnPacker");
});

taoensso.sente.__GT_EdnPacker = (function taoensso$sente$__GT_EdnPacker(){
return (new taoensso.sente.EdnPacker());
});

taoensso.sente.default_edn_packer = (new taoensso.sente.EdnPacker());
taoensso.sente.coerce_packer = (function taoensso$sente$coerce_packer(x){
if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"edn","edn",1317840885))){
return taoensso.sente.default_edn_packer;
} else {
var e = (function (){try{if((function (p1__48381_SHARP_){
if(!((p1__48381_SHARP_ == null))){
if((false) || (p1__48381_SHARP_.taoensso$sente$interfaces$IPacker$)){
return true;
} else {
if((!p1__48381_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__48381_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__48381_SHARP_);
}
}).call(null,x)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48384){if((e48384 instanceof Error)){
var e = e48384;
return e;
} else {
throw e48384;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__48381#] (satisfies? interfaces/IPacker p1__48381#)) x)",x,e,null);
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
var args__37840__auto__ = [];
var len__37833__auto___48692 = arguments.length;
var i__37834__auto___48693 = (0);
while(true){
if((i__37834__auto___48693 < len__37833__auto___48692)){
args__37840__auto__.push((arguments[i__37834__auto___48693]));

var G__48694 = (i__37834__auto___48693 + (1));
i__37834__auto___48693 = G__48694;
continue;
} else {
}
break;
}

var argseq__37841__auto__ = ((((1) < args__37840__auto__.length))?(new cljs.core.IndexedSeq(args__37840__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37841__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__48389){
var vec__48390 = p__48389;
var map__48393 = cljs.core.nth.call(null,vec__48390,(0),null);
var map__48393__$1 = ((((!((map__48393 == null)))?((((map__48393.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48393.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48393):map__48393);
var recv_buf_or_n = cljs.core.get.call(null,map__48393__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(1000)));
var ws_kalive_ms = cljs.core.get.call(null,map__48393__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(25)));
var lp_timeout_ms = cljs.core.get.call(null,map__48393__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var send_buf_ms_ajax = cljs.core.get.call(null,map__48393__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var send_buf_ms_ws = cljs.core.get.call(null,map__48393__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var user_id_fn = cljs.core.get.call(null,map__48393__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),((function (vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
});})(vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.call(null,map__48393__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),((function (vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
return (function (ring_req){
var or__36758__auto__ = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__36758__auto__)){
return or__36758__auto__;
} else {
var or__36758__auto____$1 = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__36758__auto____$1)){
return or__36758__auto____$1;
} else {
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
});})(vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.call(null,map__48393__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),((function (vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.call(null,map__48393__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48395){if((e48395 instanceof Error)){
var e = e48395;
return e;
} else {
throw e48395;

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
}catch (e48396){if((e48396 instanceof Error)){
var e = e48396;
return e;
} else {
throw e48396;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e,null);
}
})()], null);

var e_48695 = (function (){try{if(((function (vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__48386_SHARP_){
if(!((p1__48386_SHARP_ == null))){
if((false) || (p1__48386_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)){
return true;
} else {
if((!p1__48386_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__48386_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__48386_SHARP_);
}
});})(vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
.call(null,web_server_ch_adapter)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48397){if((e48397 instanceof Error)){
var e = e48397;
return e;
} else {
throw e48397;

}
}})();
if((e_48695 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__48386#] (satisfies? interfaces/IServerChanAdapter p1__48386#)) web-server-ch-adapter)",web_server_ch_adapter,e_48695,null);
}

var max_ms_48696 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_48696)){
throw cljs.core.ex_info.call(null,[cljs.core.str(":lp-timeout-ms must be < "),cljs.core.str(max_ms_48696)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),lp_timeout_ms,new cljs.core.Keyword(null,"default-client-side-ajax-timeout-ms","default-client-side-ajax-timeout-ms",1149929762),max_ms_48696], null));
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var ch_recv = cljs.core.async.chan.call(null,recv_buf_or_n);
var user_id_fn__$1 = ((function (packer__$1,ch_recv,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__36758__auto__ = user_id_fn.call(null,cljs.core.assoc.call(null,ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id));
if(cljs.core.truth_(or__36758__auto__)){
return or__36758__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});})(packer__$1,ch_recv,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var conns_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var upd_conn_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var G__48697 = null;
var G__48697__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var vec__48399 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.call(null,vec__48399,(0),null);
var _udt = cljs.core.nth.call(null,vec__48399,(1),null);
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),_QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
var G__48697__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),new__QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
G__48697 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__48697__3.call(this,conn_type,uid,client_id);
case 4:
return G__48697__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48697.cljs$core$IFn$_invoke$arity$3 = G__48697__3;
G__48697.cljs$core$IFn$_invoke$arity$4 = G__48697__4;
return G__48697;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48402){if((e48402 instanceof Error)){
var e = e48402;
return e;
} else {
throw e48402;

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

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__48403){
var map__48404 = p__48403;
var map__48404__$1 = ((((!((map__48404 == null)))?((((map__48404.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48404.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48404):map__48404);
var old_m = map__48404__$1;
var ws = cljs.core.get.call(null,map__48404__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax__$1 = cljs.core.get.call(null,map__48404__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__48404__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__48406 = (((conn_type instanceof cljs.core.Keyword))?conn_type.fqn:null);
switch (G__48406) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.conj.call(null,ws,uid),new cljs.core.Keyword(null,"ajax","ajax",814345549),ajax__$1,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.conj.call(null,ajax__$1,uid),new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

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
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48407){if((e48407 instanceof Error)){
var e = e48407;
return e;
} else {
throw e48407;

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

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__48408){
var map__48409 = p__48408;
var map__48409__$1 = ((((!((map__48409 == null)))?((((map__48409.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48409.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48409):map__48409);
var old_m = map__48409__$1;
var ws = cljs.core.get.call(null,map__48409__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax__$1 = cljs.core.get.call(null,map__48409__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__48409__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var conns_SINGLEQUOTE_ = cljs.core.deref.call(null,conns_);
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = (any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_);
var new_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),((any_ws_clients_QMARK_)?cljs.core.conj.call(null,ws,uid):cljs.core.disj.call(null,ws,uid)),new cljs.core.Keyword(null,"ajax","ajax",814345549),((any_ajax_clients_QMARK_)?cljs.core.conj.call(null,ajax__$1,uid):cljs.core.disj.call(null,ajax__$1,uid)),new cljs.core.Keyword(null,"any","any",1705907423),((any_clients_QMARK_)?cljs.core.conj.call(null,any,uid):cljs.core.disj.call(null,any,uid))], null);
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((cljs.core.contains_QMARK_.call(null,old_any,uid)) && (!(cljs.core.contains_QMARK_.call(null,new_any,uid)))){
return new cljs.core.Keyword(null,"newly-disconnected","newly-disconnected",-1586164962);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__48699__delegate = function (user_id,ev,p__48411){
var vec__48412 = p__48411;
var map__48415 = cljs.core.nth.call(null,vec__48412,(0),null);
var map__48415__$1 = ((((!((map__48415 == null)))?((((map__48415.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48415.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48415):map__48415);
var opts = map__48415__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__48415__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_48700 = ((cljs.core._EQ_.call(null,user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __48701 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",405,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_48700,vec__48412,map__48415,map__48415__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_48700,ev], null);
});})(uid_48700,vec__48412,map__48415,map__48415__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-710109455);
var __48702__$1 = (cljs.core.truth_(uid_48700)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Support for sending to `nil` user-ids has been REMOVED. "),cljs.core.str("Please send to `:sente/all-users-without-uid` instead.")].join('')),cljs.core.str("\n"),cljs.core.str("uid")].join('')))})());
var __48703__$2 = taoensso.sente.assert_event.call(null,ev);
var ev_uuid_48704 = taoensso.encore.uuid_str.call(null);
var flush_buffer_BANG__48705 = ((function (uid_48700,__48701,__48702__$1,__48703__$2,ev_uuid_48704,vec__48412,map__48415,map__48415__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type){
var temp__4657__auto__ = taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),((function (uid_48700,__48701,__48702__$1,__48703__$2,ev_uuid_48704,vec__48412,map__48415,map__48415__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__48417 = cljs.core.get.call(null,m,uid_48700);
var ___$3 = cljs.core.nth.call(null,vec__48417,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__48417,(1),null);
if(cljs.core.contains_QMARK_.call(null,ev_uuids,ev_uuid_48704)){
return taoensso.encore.swapped.call(null,cljs.core.dissoc.call(null,m,uid_48700),cljs.core.get.call(null,m,uid_48700));
} else {
return taoensso.encore.swapped.call(null,m,null);
}
});})(uid_48700,__48701,__48702__$1,__48703__$2,ev_uuid_48704,vec__48412,map__48415,map__48415__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__4657__auto__)){
var pulled = temp__4657__auto__;
var vec__48420 = pulled;
var buffered_evs = cljs.core.nth.call(null,vec__48420,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__48420,(1),null);
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",441,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__48420,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_48700,__48701,__48702__$1,__48703__$2,ev_uuid_48704,vec__48412,map__48415,map__48415__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s (with meta %s)",buffered_evs_ppstr,combined_packer_meta], null);
});})(packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__48420,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_48700,__48701,__48702__$1,__48703__$2,ev_uuid_48704,vec__48412,map__48415,map__48415__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-90256353);

var G__48423 = (((conn_type instanceof cljs.core.Keyword))?conn_type.fqn:null);
switch (G__48423) {
case "ws":
return taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_48700,buffered_evs_ppstr,upd_conn_BANG_);

break;
case "ajax":
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_48700,buffered_evs_ppstr);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(conn_type)].join('')));

}
} else {
return null;
}
});})(uid_48700,__48701,__48702__$1,__48703__$2,ev_uuid_48704,vec__48412,map__48415,map__48415__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.call(null,ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",452,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_48700,__48701,__48702__$1,__48703__$2,ev_uuid_48704,flush_buffer_BANG__48705,vec__48412,map__48415,map__48415__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_48700], null);
});})(uid_48700,__48701,__48702__$1,__48703__$2,ev_uuid_48704,flush_buffer_BANG__48705,vec__48412,map__48415,map__48415__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1285555122);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__48705.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__48705.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
}

var seq__48424_48707 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_48700], null))));
var chunk__48425_48708 = null;
var count__48426_48709 = (0);
var i__48427_48710 = (0);
while(true){
if((i__48427_48710 < count__48426_48709)){
var vec__48428_48711 = cljs.core._nth.call(null,chunk__48425_48708,i__48427_48710);
var _QMARK_sch_48712 = cljs.core.nth.call(null,vec__48428_48711,(0),null);
var _udt_48713 = cljs.core.nth.call(null,vec__48428_48711,(1),null);
var temp__4657__auto___48714 = _QMARK_sch_48712;
if(cljs.core.truth_(temp__4657__auto___48714)){
var sch_48715 = temp__4657__auto___48714;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_48715);
} else {
}

var G__48716 = seq__48424_48707;
var G__48717 = chunk__48425_48708;
var G__48718 = count__48426_48709;
var G__48719 = (i__48427_48710 + (1));
seq__48424_48707 = G__48716;
chunk__48425_48708 = G__48717;
count__48426_48709 = G__48718;
i__48427_48710 = G__48719;
continue;
} else {
var temp__4657__auto___48720 = cljs.core.seq.call(null,seq__48424_48707);
if(temp__4657__auto___48720){
var seq__48424_48721__$1 = temp__4657__auto___48720;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48424_48721__$1)){
var c__37569__auto___48722 = cljs.core.chunk_first.call(null,seq__48424_48721__$1);
var G__48723 = cljs.core.chunk_rest.call(null,seq__48424_48721__$1);
var G__48724 = c__37569__auto___48722;
var G__48725 = cljs.core.count.call(null,c__37569__auto___48722);
var G__48726 = (0);
seq__48424_48707 = G__48723;
chunk__48425_48708 = G__48724;
count__48426_48709 = G__48725;
i__48427_48710 = G__48726;
continue;
} else {
var vec__48431_48727 = cljs.core.first.call(null,seq__48424_48721__$1);
var _QMARK_sch_48728 = cljs.core.nth.call(null,vec__48431_48727,(0),null);
var _udt_48729 = cljs.core.nth.call(null,vec__48431_48727,(1),null);
var temp__4657__auto___48730__$1 = _QMARK_sch_48728;
if(cljs.core.truth_(temp__4657__auto___48730__$1)){
var sch_48731 = temp__4657__auto___48730__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_48731);
} else {
}

var G__48732 = cljs.core.next.call(null,seq__48424_48721__$1);
var G__48733 = null;
var G__48734 = (0);
var G__48735 = (0);
seq__48424_48707 = G__48732;
chunk__48425_48708 = G__48733;
count__48426_48709 = G__48734;
i__48427_48710 = G__48735;
continue;
}
} else {
}
}
break;
}

var seq__48434_48736 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_48700], null))));
var chunk__48435_48737 = null;
var count__48436_48738 = (0);
var i__48437_48739 = (0);
while(true){
if((i__48437_48739 < count__48436_48738)){
var vec__48438_48740 = cljs.core._nth.call(null,chunk__48435_48737,i__48437_48739);
var _QMARK_sch_48741 = cljs.core.nth.call(null,vec__48438_48740,(0),null);
var _udt_48742 = cljs.core.nth.call(null,vec__48438_48740,(1),null);
var temp__4657__auto___48743 = _QMARK_sch_48741;
if(cljs.core.truth_(temp__4657__auto___48743)){
var sch_48744 = temp__4657__auto___48743;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_48744);
} else {
}

var G__48745 = seq__48434_48736;
var G__48746 = chunk__48435_48737;
var G__48747 = count__48436_48738;
var G__48748 = (i__48437_48739 + (1));
seq__48434_48736 = G__48745;
chunk__48435_48737 = G__48746;
count__48436_48738 = G__48747;
i__48437_48739 = G__48748;
continue;
} else {
var temp__4657__auto___48749 = cljs.core.seq.call(null,seq__48434_48736);
if(temp__4657__auto___48749){
var seq__48434_48750__$1 = temp__4657__auto___48749;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48434_48750__$1)){
var c__37569__auto___48751 = cljs.core.chunk_first.call(null,seq__48434_48750__$1);
var G__48752 = cljs.core.chunk_rest.call(null,seq__48434_48750__$1);
var G__48753 = c__37569__auto___48751;
var G__48754 = cljs.core.count.call(null,c__37569__auto___48751);
var G__48755 = (0);
seq__48434_48736 = G__48752;
chunk__48435_48737 = G__48753;
count__48436_48738 = G__48754;
i__48437_48739 = G__48755;
continue;
} else {
var vec__48441_48756 = cljs.core.first.call(null,seq__48434_48750__$1);
var _QMARK_sch_48757 = cljs.core.nth.call(null,vec__48441_48756,(0),null);
var _udt_48758 = cljs.core.nth.call(null,vec__48441_48756,(1),null);
var temp__4657__auto___48759__$1 = _QMARK_sch_48757;
if(cljs.core.truth_(temp__4657__auto___48759__$1)){
var sch_48760 = temp__4657__auto___48759__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_48760);
} else {
}

var G__48761 = cljs.core.next.call(null,seq__48434_48750__$1);
var G__48762 = null;
var G__48763 = (0);
var G__48764 = (0);
seq__48434_48736 = G__48761;
chunk__48435_48737 = G__48762;
count__48436_48738 = G__48763;
i__48437_48739 = G__48764;
continue;
}
} else {
}
}
break;
}
} else {
var seq__48444_48765 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__48445_48766 = null;
var count__48446_48767 = (0);
var i__48447_48768 = (0);
while(true){
if((i__48447_48768 < count__48446_48767)){
var conn_type_48769 = cljs.core._nth.call(null,chunk__48445_48766,i__48447_48768);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_48769,uid_48700], null),((function (seq__48444_48765,chunk__48445_48766,count__48446_48767,i__48447_48768,conn_type_48769,uid_48700,__48701,__48702__$1,__48703__$2,ev_uuid_48704,flush_buffer_BANG__48705,vec__48412,map__48415,map__48415__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_48704], true)], null);
} else {
var vec__48448 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__48448,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__48448,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_48704)], null);
}
});})(seq__48444_48765,chunk__48445_48766,count__48446_48767,i__48447_48768,conn_type_48769,uid_48700,__48701,__48702__$1,__48703__$2,ev_uuid_48704,flush_buffer_BANG__48705,vec__48412,map__48415,map__48415__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__48770 = seq__48444_48765;
var G__48771 = chunk__48445_48766;
var G__48772 = count__48446_48767;
var G__48773 = (i__48447_48768 + (1));
seq__48444_48765 = G__48770;
chunk__48445_48766 = G__48771;
count__48446_48767 = G__48772;
i__48447_48768 = G__48773;
continue;
} else {
var temp__4657__auto___48774 = cljs.core.seq.call(null,seq__48444_48765);
if(temp__4657__auto___48774){
var seq__48444_48775__$1 = temp__4657__auto___48774;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48444_48775__$1)){
var c__37569__auto___48776 = cljs.core.chunk_first.call(null,seq__48444_48775__$1);
var G__48777 = cljs.core.chunk_rest.call(null,seq__48444_48775__$1);
var G__48778 = c__37569__auto___48776;
var G__48779 = cljs.core.count.call(null,c__37569__auto___48776);
var G__48780 = (0);
seq__48444_48765 = G__48777;
chunk__48445_48766 = G__48778;
count__48446_48767 = G__48779;
i__48447_48768 = G__48780;
continue;
} else {
var conn_type_48781 = cljs.core.first.call(null,seq__48444_48775__$1);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_48781,uid_48700], null),((function (seq__48444_48765,chunk__48445_48766,count__48446_48767,i__48447_48768,conn_type_48781,seq__48444_48775__$1,temp__4657__auto___48774,uid_48700,__48701,__48702__$1,__48703__$2,ev_uuid_48704,flush_buffer_BANG__48705,vec__48412,map__48415,map__48415__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_48704], true)], null);
} else {
var vec__48451 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__48451,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__48451,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_48704)], null);
}
});})(seq__48444_48765,chunk__48445_48766,count__48446_48767,i__48447_48768,conn_type_48781,seq__48444_48775__$1,temp__4657__auto___48774,uid_48700,__48701,__48702__$1,__48703__$2,ev_uuid_48704,flush_buffer_BANG__48705,vec__48412,map__48415,map__48415__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__48782 = cljs.core.next.call(null,seq__48444_48775__$1);
var G__48783 = null;
var G__48784 = (0);
var G__48785 = (0);
seq__48444_48765 = G__48782;
chunk__48445_48766 = G__48783;
count__48446_48767 = G__48784;
i__48447_48768 = G__48785;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__48705.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__48705.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
var ws_timeout_48786 = cljs.core.async.timeout.call(null,send_buf_ms_ws);
var ajax_timeout_48787 = cljs.core.async.timeout.call(null,send_buf_ms_ajax);
var c__41620__auto___48788 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto___48788,ws_timeout_48786,ajax_timeout_48787,uid_48700,__48701,__48702__$1,__48703__$2,ev_uuid_48704,flush_buffer_BANG__48705,vec__48412,map__48415,map__48415__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto___48788,ws_timeout_48786,ajax_timeout_48787,uid_48700,__48701,__48702__$1,__48703__$2,ev_uuid_48704,flush_buffer_BANG__48705,vec__48412,map__48415,map__48415__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_48458){
var state_val_48459 = (state_48458[(1)]);
if((state_val_48459 === (1))){
var state_48458__$1 = state_48458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48458__$1,(2),ws_timeout_48786);
} else {
if((state_val_48459 === (2))){
var inst_48455 = (state_48458[(2)]);
var inst_48456 = flush_buffer_BANG__48705.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));
var state_48458__$1 = (function (){var statearr_48460 = state_48458;
(statearr_48460[(7)] = inst_48455);

return statearr_48460;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48458__$1,inst_48456);
} else {
return null;
}
}
});})(c__41620__auto___48788,ws_timeout_48786,ajax_timeout_48787,uid_48700,__48701,__48702__$1,__48703__$2,ev_uuid_48704,flush_buffer_BANG__48705,vec__48412,map__48415,map__48415__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__41458__auto__,c__41620__auto___48788,ws_timeout_48786,ajax_timeout_48787,uid_48700,__48701,__48702__$1,__48703__$2,ev_uuid_48704,flush_buffer_BANG__48705,vec__48412,map__48415,map__48415__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__41459__auto__ = null;
var taoensso$sente$state_machine__41459__auto____0 = (function (){
var statearr_48464 = [null,null,null,null,null,null,null,null];
(statearr_48464[(0)] = taoensso$sente$state_machine__41459__auto__);

(statearr_48464[(1)] = (1));

return statearr_48464;
});
var taoensso$sente$state_machine__41459__auto____1 = (function (state_48458){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_48458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e48465){if((e48465 instanceof Object)){
var ex__41462__auto__ = e48465;
var statearr_48466_48789 = state_48458;
(statearr_48466_48789[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48790 = state_48458;
state_48458 = G__48790;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
taoensso$sente$state_machine__41459__auto__ = function(state_48458){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__41459__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__41459__auto____1.call(this,state_48458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__41459__auto____0;
taoensso$sente$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__41459__auto____1;
return taoensso$sente$state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto___48788,ws_timeout_48786,ajax_timeout_48787,uid_48700,__48701,__48702__$1,__48703__$2,ev_uuid_48704,flush_buffer_BANG__48705,vec__48412,map__48415,map__48415__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__41622__auto__ = (function (){var statearr_48467 = f__41621__auto__.call(null);
(statearr_48467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto___48788);

return statearr_48467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto___48788,ws_timeout_48786,ajax_timeout_48787,uid_48700,__48701,__48702__$1,__48703__$2,ev_uuid_48704,flush_buffer_BANG__48705,vec__48412,map__48415,map__48415__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__41620__auto___48791 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto___48791,ws_timeout_48786,ajax_timeout_48787,uid_48700,__48701,__48702__$1,__48703__$2,ev_uuid_48704,flush_buffer_BANG__48705,vec__48412,map__48415,map__48415__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto___48791,ws_timeout_48786,ajax_timeout_48787,uid_48700,__48701,__48702__$1,__48703__$2,ev_uuid_48704,flush_buffer_BANG__48705,vec__48412,map__48415,map__48415__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_48472){
var state_val_48473 = (state_48472[(1)]);
if((state_val_48473 === (1))){
var state_48472__$1 = state_48472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48472__$1,(2),ajax_timeout_48787);
} else {
if((state_val_48473 === (2))){
var inst_48469 = (state_48472[(2)]);
var inst_48470 = flush_buffer_BANG__48705.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_48472__$1 = (function (){var statearr_48474 = state_48472;
(statearr_48474[(7)] = inst_48469);

return statearr_48474;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48472__$1,inst_48470);
} else {
return null;
}
}
});})(c__41620__auto___48791,ws_timeout_48786,ajax_timeout_48787,uid_48700,__48701,__48702__$1,__48703__$2,ev_uuid_48704,flush_buffer_BANG__48705,vec__48412,map__48415,map__48415__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__41458__auto__,c__41620__auto___48791,ws_timeout_48786,ajax_timeout_48787,uid_48700,__48701,__48702__$1,__48703__$2,ev_uuid_48704,flush_buffer_BANG__48705,vec__48412,map__48415,map__48415__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__41459__auto__ = null;
var taoensso$sente$state_machine__41459__auto____0 = (function (){
var statearr_48478 = [null,null,null,null,null,null,null,null];
(statearr_48478[(0)] = taoensso$sente$state_machine__41459__auto__);

(statearr_48478[(1)] = (1));

return statearr_48478;
});
var taoensso$sente$state_machine__41459__auto____1 = (function (state_48472){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_48472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e48479){if((e48479 instanceof Object)){
var ex__41462__auto__ = e48479;
var statearr_48480_48792 = state_48472;
(statearr_48480_48792[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48793 = state_48472;
state_48472 = G__48793;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
taoensso$sente$state_machine__41459__auto__ = function(state_48472){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__41459__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__41459__auto____1.call(this,state_48472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__41459__auto____0;
taoensso$sente$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__41459__auto____1;
return taoensso$sente$state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto___48791,ws_timeout_48786,ajax_timeout_48787,uid_48700,__48701,__48702__$1,__48703__$2,ev_uuid_48704,flush_buffer_BANG__48705,vec__48412,map__48415,map__48415__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__41622__auto__ = (function (){var statearr_48481 = f__41621__auto__.call(null);
(statearr_48481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto___48791);

return statearr_48481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto___48791,ws_timeout_48786,ajax_timeout_48787,uid_48700,__48701,__48702__$1,__48703__$2,ev_uuid_48704,flush_buffer_BANG__48705,vec__48412,map__48415,map__48415__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}
}

return null;
};
var G__48699 = function (user_id,ev,var_args){
var p__48411 = null;
if (arguments.length > 2) {
var G__48794__i = 0, G__48794__a = new Array(arguments.length -  2);
while (G__48794__i < G__48794__a.length) {G__48794__a[G__48794__i] = arguments[G__48794__i + 2]; ++G__48794__i;}
  p__48411 = new cljs.core.IndexedSeq(G__48794__a,0);
} 
return G__48699__delegate.call(this,user_id,ev,p__48411);};
G__48699.cljs$lang$maxFixedArity = 2;
G__48699.cljs$lang$applyTo = (function (arglist__48795){
var user_id = cljs.core.first(arglist__48795);
arglist__48795 = cljs.core.next(arglist__48795);
var ev = cljs.core.first(arglist__48795);
var p__48411 = cljs.core.rest(arglist__48795);
return G__48699__delegate(user_id,ev,p__48411);
});
G__48699.cljs$core$IFn$_invoke$arity$variadic = G__48699__delegate;
return G__48699;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.not.call(null,websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__48482 = taoensso.sente.unpack.call(null,packer__$1,ppstr);
var clj = cljs.core.nth.call(null,vec__48482,(0),null);
var has_cb_QMARK_ = cljs.core.nth.call(null,vec__48482,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.call(null,false);
return ((function (replied_QMARK__,params,ppstr,client_id,vec__48482,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (resp_clj){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,replied_QMARK__,false,true))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",521,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (replied_QMARK__,params,ppstr,client_id,vec__48482,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
});})(replied_QMARK__,params,ppstr,client_id,vec__48482,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1656532678);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj));
} else {
return null;
}
});
;})(replied_QMARK__,params,ppstr,client_id,vec__48482,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1.call(null,ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__4657__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__41620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__48482,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__48482,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_48490){
var state_val_48491 = (state_48490[(1)]);
if((state_val_48491 === (1))){
var inst_48485 = cljs.core.async.timeout.call(null,ms);
var state_48490__$1 = state_48490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48490__$1,(2),inst_48485);
} else {
if((state_val_48491 === (2))){
var inst_48487 = (state_48490[(2)]);
var inst_48488 = reply_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_48490__$1 = (function (){var statearr_48492 = state_48490;
(statearr_48492[(7)] = inst_48487);

return statearr_48492;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48490__$1,inst_48488);
} else {
return null;
}
}
});})(c__41620__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__48482,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__41458__auto__,c__41620__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__48482,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__41459__auto__ = null;
var taoensso$sente$state_machine__41459__auto____0 = (function (){
var statearr_48496 = [null,null,null,null,null,null,null,null];
(statearr_48496[(0)] = taoensso$sente$state_machine__41459__auto__);

(statearr_48496[(1)] = (1));

return statearr_48496;
});
var taoensso$sente$state_machine__41459__auto____1 = (function (state_48490){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_48490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e48497){if((e48497 instanceof Object)){
var ex__41462__auto__ = e48497;
var statearr_48498_48796 = state_48490;
(statearr_48498_48796[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48797 = state_48490;
state_48490 = G__48797;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
taoensso$sente$state_machine__41459__auto__ = function(state_48490){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__41459__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__41459__auto____1.call(this,state_48490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__41459__auto____0;
taoensso$sente$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__41459__auto____1;
return taoensso$sente$state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__48482,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__41622__auto__ = (function (){var statearr_48499 = f__41621__auto__.call(null);
(statearr_48499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto__);

return statearr_48499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__48482,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__41620__auto__;
} else {
return null;
}
} else {
return reply_fn.call(null,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var sch_uuid = taoensso.encore.uuid_str.call(null,(6));
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var csrf_token = csrf_token_fn.call(null,ring_req);
var uid = user_id_fn__$1.call(null,ring_req,client_id);
var receive_event_msg_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
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
;})(sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_handshake_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",566,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-handshake!"], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,330652376);

var _QMARK_handshake_data = handshake_data_fn.call(null,ring_req);
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,null,handshake_ev));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_.call(null,client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",577,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(err_msg),cljs.core.str(": %s")].join(''),ring_req], null);
});})(err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1657133474);

throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",586,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-983836775);
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
var c__41620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_48535){
var state_val_48536 = (state_48535[(1)]);
if((state_val_48536 === (7))){
var inst_48531 = (state_48535[(2)]);
var state_48535__$1 = state_48535;
var statearr_48537_48798 = state_48535__$1;
(statearr_48537_48798[(2)] = inst_48531);

(statearr_48537_48798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48536 === (1))){
var inst_48500 = udt_open;
var state_48535__$1 = (function (){var statearr_48538 = state_48535;
(statearr_48538[(7)] = inst_48500);

return statearr_48538;
})();
var statearr_48539_48799 = state_48535__$1;
(statearr_48539_48799[(2)] = null);

(statearr_48539_48799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48536 === (4))){
var inst_48509 = (state_48535[(8)]);
var inst_48504 = (state_48535[(2)]);
var inst_48505 = cljs.core.deref.call(null,conns_);
var inst_48506 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48507 = [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id];
var inst_48508 = (new cljs.core.PersistentVector(null,3,(5),inst_48506,inst_48507,null));
var inst_48509__$1 = cljs.core.get_in.call(null,inst_48505,inst_48508);
var state_48535__$1 = (function (){var statearr_48540 = state_48535;
(statearr_48540[(8)] = inst_48509__$1);

(statearr_48540[(9)] = inst_48504);

return statearr_48540;
})();
if(cljs.core.truth_(inst_48509__$1)){
var statearr_48541_48800 = state_48535__$1;
(statearr_48541_48800[(1)] = (5));

} else {
var statearr_48542_48801 = state_48535__$1;
(statearr_48542_48801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48536 === (13))){
var inst_48515 = (state_48535[(10)]);
var inst_48524 = (state_48535[(2)]);
var inst_48500 = inst_48515;
var state_48535__$1 = (function (){var statearr_48543 = state_48535;
(statearr_48543[(7)] = inst_48500);

(statearr_48543[(11)] = inst_48524);

return statearr_48543;
})();
var statearr_48544_48802 = state_48535__$1;
(statearr_48544_48802[(2)] = null);

(statearr_48544_48802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48536 === (6))){
var state_48535__$1 = state_48535;
var statearr_48545_48803 = state_48535__$1;
(statearr_48545_48803[(2)] = null);

(statearr_48545_48803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48536 === (3))){
var inst_48533 = (state_48535[(2)]);
var state_48535__$1 = state_48535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48535__$1,inst_48533);
} else {
if((state_val_48536 === (12))){
var state_48535__$1 = state_48535;
var statearr_48546_48804 = state_48535__$1;
(statearr_48546_48804[(2)] = null);

(statearr_48546_48804[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48536 === (2))){
var inst_48502 = cljs.core.async.timeout.call(null,ms);
var state_48535__$1 = state_48535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48535__$1,(4),inst_48502);
} else {
if((state_val_48536 === (11))){
var inst_48520 = taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304));
var inst_48521 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_48520);
var state_48535__$1 = state_48535;
var statearr_48547_48805 = state_48535__$1;
(statearr_48547_48805[(2)] = inst_48521);

(statearr_48547_48805[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48536 === (9))){
var state_48535__$1 = state_48535;
var statearr_48548_48806 = state_48535__$1;
(statearr_48548_48806[(2)] = null);

(statearr_48548_48806[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48536 === (5))){
var inst_48509 = (state_48535[(8)]);
var inst_48514 = cljs.core.nth.call(null,inst_48509,(0),null);
var inst_48515 = cljs.core.nth.call(null,inst_48509,(1),null);
var inst_48516 = taoensso.sente.interfaces.sch_open_QMARK_.call(null,server_ch);
var state_48535__$1 = (function (){var statearr_48549 = state_48535;
(statearr_48549[(12)] = inst_48514);

(statearr_48549[(10)] = inst_48515);

return statearr_48549;
})();
if(cljs.core.truth_(inst_48516)){
var statearr_48550_48807 = state_48535__$1;
(statearr_48550_48807[(1)] = (8));

} else {
var statearr_48551_48808 = state_48535__$1;
(statearr_48551_48808[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48536 === (10))){
var inst_48528 = (state_48535[(2)]);
var state_48535__$1 = state_48535;
var statearr_48552_48809 = state_48535__$1;
(statearr_48552_48809[(2)] = inst_48528);

(statearr_48552_48809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48536 === (8))){
var inst_48515 = (state_48535[(10)]);
var inst_48500 = (state_48535[(7)]);
var inst_48518 = cljs.core._EQ_.call(null,inst_48515,inst_48500);
var state_48535__$1 = state_48535;
if(inst_48518){
var statearr_48553_48810 = state_48535__$1;
(statearr_48553_48810[(1)] = (11));

} else {
var statearr_48554_48811 = state_48535__$1;
(statearr_48554_48811[(1)] = (12));

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
});})(c__41620__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__41458__auto__,c__41620__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__41459__auto__ = null;
var taoensso$sente$state_machine__41459__auto____0 = (function (){
var statearr_48558 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48558[(0)] = taoensso$sente$state_machine__41459__auto__);

(statearr_48558[(1)] = (1));

return statearr_48558;
});
var taoensso$sente$state_machine__41459__auto____1 = (function (state_48535){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_48535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e48559){if((e48559 instanceof Object)){
var ex__41462__auto__ = e48559;
var statearr_48560_48812 = state_48535;
(statearr_48560_48812[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48813 = state_48535;
state_48535 = G__48813;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
taoensso$sente$state_machine__41459__auto__ = function(state_48535){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__41459__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__41459__auto____1.call(this,state_48535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__41459__auto____0;
taoensso$sente$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__41459__auto____1;
return taoensso$sente$state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__41622__auto__ = (function (){var statearr_48561 = f__41621__auto__.call(null);
(statearr_48561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto__);

return statearr_48561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__41620__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",615,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1673943070);
var updated_conn = upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var handshake_QMARK_ = (function (){var or__36758__auto__ = new cljs.core.Keyword(null,"init?","init?",438181499).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(or__36758__auto__)){
return or__36758__auto__;
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
var c__41620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_48587){
var state_val_48588 = (state_48587[(1)]);
if((state_val_48588 === (1))){
var inst_48562 = cljs.core.async.timeout.call(null,ms);
var state_48587__$1 = state_48587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48587__$1,(2),inst_48562);
} else {
if((state_val_48588 === (2))){
var inst_48569 = (state_48587[(7)]);
var inst_48564 = (state_48587[(2)]);
var inst_48565 = cljs.core.deref.call(null,conns_);
var inst_48566 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48567 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id];
var inst_48568 = (new cljs.core.PersistentVector(null,3,(5),inst_48566,inst_48567,null));
var inst_48569__$1 = cljs.core.get_in.call(null,inst_48565,inst_48568);
var state_48587__$1 = (function (){var statearr_48589 = state_48587;
(statearr_48589[(7)] = inst_48569__$1);

(statearr_48589[(8)] = inst_48564);

return statearr_48589;
})();
if(cljs.core.truth_(inst_48569__$1)){
var statearr_48590_48814 = state_48587__$1;
(statearr_48590_48814[(1)] = (3));

} else {
var statearr_48591_48815 = state_48587__$1;
(statearr_48591_48815[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (3))){
var inst_48569 = (state_48587[(7)]);
var inst_48574 = cljs.core.nth.call(null,inst_48569,(0),null);
var inst_48575 = cljs.core.nth.call(null,inst_48569,(1),null);
var inst_48576 = cljs.core._EQ_.call(null,inst_48575,udt_open);
var state_48587__$1 = (function (){var statearr_48592 = state_48587;
(statearr_48592[(9)] = inst_48574);

return statearr_48592;
})();
if(inst_48576){
var statearr_48593_48816 = state_48587__$1;
(statearr_48593_48816[(1)] = (6));

} else {
var statearr_48594_48817 = state_48587__$1;
(statearr_48594_48817[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (4))){
var state_48587__$1 = state_48587;
var statearr_48595_48818 = state_48587__$1;
(statearr_48595_48818[(2)] = null);

(statearr_48595_48818[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (5))){
var inst_48585 = (state_48587[(2)]);
var state_48587__$1 = state_48587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48587__$1,inst_48585);
} else {
if((state_val_48588 === (6))){
var inst_48578 = taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var inst_48579 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_48578);
var state_48587__$1 = state_48587;
var statearr_48596_48819 = state_48587__$1;
(statearr_48596_48819[(2)] = inst_48579);

(statearr_48596_48819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (7))){
var state_48587__$1 = state_48587;
var statearr_48597_48820 = state_48587__$1;
(statearr_48597_48820[(2)] = null);

(statearr_48597_48820[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (8))){
var inst_48582 = (state_48587[(2)]);
var state_48587__$1 = state_48587;
var statearr_48598_48821 = state_48587__$1;
(statearr_48598_48821[(2)] = inst_48582);

(statearr_48598_48821[(1)] = (5));


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
});})(c__41620__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__41458__auto__,c__41620__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__41459__auto__ = null;
var taoensso$sente$state_machine__41459__auto____0 = (function (){
var statearr_48602 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48602[(0)] = taoensso$sente$state_machine__41459__auto__);

(statearr_48602[(1)] = (1));

return statearr_48602;
});
var taoensso$sente$state_machine__41459__auto____1 = (function (state_48587){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_48587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e48603){if((e48603 instanceof Object)){
var ex__41462__auto__ = e48603;
var statearr_48604_48822 = state_48587;
(statearr_48604_48822[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48823 = state_48587;
state_48587 = G__48823;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
taoensso$sente$state_machine__41459__auto__ = function(state_48587){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__41459__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__41459__auto____1.call(this,state_48587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__41459__auto____0;
taoensso$sente$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__41459__auto____1;
return taoensso$sente$state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__41622__auto__ = (function (){var statearr_48605 = f__41621__auto__.call(null);
(statearr_48605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto__);

return statearr_48605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__41620__auto__;
} else {
return null;
}
}
}
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

var vec__48606 = taoensso.sente.unpack.call(null,packer__$1,req_ppstr);
var clj = cljs.core.nth.call(null,vec__48606,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__48606,(1),null);
return receive_event_msg_BANG_.call(null,clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__48606,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",645,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__48606,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__48606,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-59002636);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj,_QMARK_cb_uuid));
});})(vec__48606,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443):new cljs.core.Keyword(null,"ajax","ajax",814345549));
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",654,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
});})(conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1722947746);
var updated_conn = upd_conn_BANG_.call(null,conn_type,uid,client_id,null);
var udt_close = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__41620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_48660){
var state_val_48661 = (state_48660[(1)]);
if((state_val_48661 === (7))){
var state_48660__$1 = state_48660;
var statearr_48662_48824 = state_48660__$1;
(statearr_48662_48824[(2)] = null);

(statearr_48662_48824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48661 === (1))){
var inst_48609 = cljs.core.async.timeout.call(null,(5000));
var state_48660__$1 = state_48660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48660__$1,(2),inst_48609);
} else {
if((state_val_48661 === (4))){
var state_48660__$1 = state_48660;
var statearr_48663_48825 = state_48660__$1;
(statearr_48663_48825[(2)] = null);

(statearr_48663_48825[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48661 === (13))){
var state_48660__$1 = state_48660;
var statearr_48664_48826 = state_48660__$1;
(statearr_48664_48826[(2)] = null);

(statearr_48664_48826[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48661 === (6))){
var inst_48620 = (state_48660[(7)]);
var inst_48619 = (state_48660[(8)]);
var inst_48621 = (state_48660[(9)]);
var inst_48637 = (state_48660[(10)]);
var inst_48632 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48633 = [conn_type,uid,client_id];
var inst_48634 = (new cljs.core.PersistentVector(null,3,(5),inst_48632,inst_48633,null));
var inst_48636 = (function (){var vec__48612 = inst_48619;
var __QMARK_sch = inst_48620;
var udt_t1 = inst_48621;
return ((function (vec__48612,__QMARK_sch,udt_t1,inst_48620,inst_48619,inst_48621,inst_48637,inst_48632,inst_48633,inst_48634,state_val_48661,c__41620__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__48635){
var vec__48665 = p__48635;
var _sch = cljs.core.nth.call(null,vec__48665,(0),null);
var udt_t1__$1 = cljs.core.nth.call(null,vec__48665,(1),null);
if(cljs.core._EQ_.call(null,udt_t1__$1,udt_close)){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),true);
} else {
return taoensso.encore.swapped.call(null,udt_t1__$1,false);
}
});
;})(vec__48612,__QMARK_sch,udt_t1,inst_48620,inst_48619,inst_48621,inst_48637,inst_48632,inst_48633,inst_48634,state_val_48661,c__41620__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_48637__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_48634,inst_48636);
var state_48660__$1 = (function (){var statearr_48668 = state_48660;
(statearr_48668[(10)] = inst_48637__$1);

return statearr_48668;
})();
if(cljs.core.truth_(inst_48637__$1)){
var statearr_48669_48827 = state_48660__$1;
(statearr_48669_48827[(1)] = (9));

} else {
var statearr_48670_48828 = state_48660__$1;
(statearr_48670_48828[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48661 === (3))){
var inst_48620 = (state_48660[(7)]);
var inst_48619 = (state_48660[(8)]);
var inst_48621 = (state_48660[(9)]);
var inst_48624 = (function (){var vec__48612 = inst_48619;
var __QMARK_sch = inst_48620;
var udt_t1 = inst_48621;
return ((function (vec__48612,__QMARK_sch,udt_t1,inst_48620,inst_48619,inst_48621,state_val_48661,c__41620__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.call(null,udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
;})(vec__48612,__QMARK_sch,udt_t1,inst_48620,inst_48619,inst_48621,state_val_48661,c__41620__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_48625 = (new cljs.core.Delay(inst_48624,null));
var inst_48626 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",668,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_48625,null,2098836321);
var state_48660__$1 = state_48660;
var statearr_48671_48829 = state_48660__$1;
(statearr_48671_48829[(2)] = inst_48626);

(statearr_48671_48829[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48661 === (12))){
var inst_48646 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48647 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678),uid];
var inst_48648 = (new cljs.core.PersistentVector(null,2,(5),inst_48646,inst_48647,null));
var inst_48649 = receive_event_msg_BANG_.call(null,inst_48648);
var state_48660__$1 = state_48660;
var statearr_48672_48830 = state_48660__$1;
(statearr_48672_48830[(2)] = inst_48649);

(statearr_48672_48830[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48661 === (2))){
var inst_48619 = (state_48660[(8)]);
var inst_48611 = (state_48660[(2)]);
var inst_48615 = cljs.core.deref.call(null,conns_);
var inst_48616 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48617 = [conn_type,uid,client_id];
var inst_48618 = (new cljs.core.PersistentVector(null,3,(5),inst_48616,inst_48617,null));
var inst_48619__$1 = cljs.core.get_in.call(null,inst_48615,inst_48618);
var inst_48620 = cljs.core.nth.call(null,inst_48619__$1,(0),null);
var inst_48621 = cljs.core.nth.call(null,inst_48619__$1,(1),null);
var inst_48622 = cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__);
var state_48660__$1 = (function (){var statearr_48673 = state_48660;
(statearr_48673[(7)] = inst_48620);

(statearr_48673[(11)] = inst_48611);

(statearr_48673[(8)] = inst_48619__$1);

(statearr_48673[(9)] = inst_48621);

return statearr_48673;
})();
if(cljs.core.truth_(inst_48622)){
var statearr_48674_48831 = state_48660__$1;
(statearr_48674_48831[(1)] = (3));

} else {
var statearr_48675_48832 = state_48660__$1;
(statearr_48675_48832[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48661 === (11))){
var inst_48655 = (state_48660[(2)]);
var state_48660__$1 = state_48660;
var statearr_48676_48833 = state_48660__$1;
(statearr_48676_48833[(2)] = inst_48655);

(statearr_48676_48833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48661 === (9))){
var inst_48620 = (state_48660[(7)]);
var inst_48619 = (state_48660[(8)]);
var inst_48621 = (state_48660[(9)]);
var inst_48637 = (state_48660[(10)]);
var inst_48639 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48640 = [conn_type,uid];
var inst_48641 = (new cljs.core.PersistentVector(null,2,(5),inst_48639,inst_48640,null));
var inst_48642 = (function (){var vec__48612 = inst_48619;
var __QMARK_sch = inst_48620;
var udt_t1 = inst_48621;
var disconnect_QMARK_ = inst_48637;
return ((function (vec__48612,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_48620,inst_48619,inst_48621,inst_48637,inst_48639,inst_48640,inst_48641,state_val_48661,c__41620__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_.call(null,_QMARK_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return _QMARK_m;
}
});
;})(vec__48612,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_48620,inst_48619,inst_48621,inst_48637,inst_48639,inst_48640,inst_48641,state_val_48661,c__41620__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_48643 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_48641,inst_48642);
var inst_48644 = upd_connected_uid_BANG_.call(null,uid);
var state_48660__$1 = (function (){var statearr_48677 = state_48660;
(statearr_48677[(12)] = inst_48643);

return statearr_48677;
})();
if(cljs.core.truth_(inst_48644)){
var statearr_48678_48834 = state_48660__$1;
(statearr_48678_48834[(1)] = (12));

} else {
var statearr_48679_48835 = state_48660__$1;
(statearr_48679_48835[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48661 === (5))){
var inst_48621 = (state_48660[(9)]);
var inst_48629 = (state_48660[(2)]);
var inst_48630 = cljs.core._EQ_.call(null,inst_48621,udt_close);
var state_48660__$1 = (function (){var statearr_48680 = state_48660;
(statearr_48680[(13)] = inst_48629);

return statearr_48680;
})();
if(inst_48630){
var statearr_48681_48836 = state_48660__$1;
(statearr_48681_48836[(1)] = (6));

} else {
var statearr_48682_48837 = state_48660__$1;
(statearr_48682_48837[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48661 === (14))){
var inst_48652 = (state_48660[(2)]);
var state_48660__$1 = state_48660;
var statearr_48683_48838 = state_48660__$1;
(statearr_48683_48838[(2)] = inst_48652);

(statearr_48683_48838[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48661 === (10))){
var state_48660__$1 = state_48660;
var statearr_48684_48839 = state_48660__$1;
(statearr_48684_48839[(2)] = null);

(statearr_48684_48839[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48661 === (8))){
var inst_48658 = (state_48660[(2)]);
var state_48660__$1 = state_48660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48660__$1,inst_48658);
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
});})(c__41620__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__41458__auto__,c__41620__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__41459__auto__ = null;
var taoensso$sente$state_machine__41459__auto____0 = (function (){
var statearr_48688 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48688[(0)] = taoensso$sente$state_machine__41459__auto__);

(statearr_48688[(1)] = (1));

return statearr_48688;
});
var taoensso$sente$state_machine__41459__auto____1 = (function (state_48660){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_48660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e48689){if((e48689 instanceof Object)){
var ex__41462__auto__ = e48689;
var statearr_48690_48840 = state_48660;
(statearr_48690_48840[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48841 = state_48660;
state_48660 = G__48841;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
taoensso$sente$state_machine__41459__auto__ = function(state_48660){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__41459__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__41459__auto____1.call(this,state_48660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__41459__auto____0;
taoensso$sente$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__41459__auto____1;
return taoensso$sente$state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__41622__auto__ = (function (){var statearr_48691 = f__41621__auto__.call(null);
(statearr_48691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto__);

return statearr_48691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__41620__auto__;
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",690,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1484673003);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48390,map__48393,map__48393__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq48387){
var G__48388 = cljs.core.first.call(null,seq48387);
var seq48387__$1 = cljs.core.next.call(null,seq48387);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48388,seq48387__$1);
});

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",696,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null,513668650);

var seq__48858 = cljs.core.seq.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null)));
var chunk__48859 = null;
var count__48860 = (0);
var i__48861 = (0);
while(true){
if((i__48861 < count__48860)){
var vec__48862 = cljs.core._nth.call(null,chunk__48859,i__48861);
var client_id = cljs.core.nth.call(null,vec__48862,(0),null);
var vec__48865 = cljs.core.nth.call(null,vec__48862,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__48865,(0),null);
var _udt = cljs.core.nth.call(null,vec__48865,(1),null);
var temp__4657__auto___48874 = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto___48874)){
var sch_48875 = temp__4657__auto___48874;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_48875,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__48876 = seq__48858;
var G__48877 = chunk__48859;
var G__48878 = count__48860;
var G__48879 = (i__48861 + (1));
seq__48858 = G__48876;
chunk__48859 = G__48877;
count__48860 = G__48878;
i__48861 = G__48879;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__48858);
if(temp__4657__auto__){
var seq__48858__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48858__$1)){
var c__37569__auto__ = cljs.core.chunk_first.call(null,seq__48858__$1);
var G__48880 = cljs.core.chunk_rest.call(null,seq__48858__$1);
var G__48881 = c__37569__auto__;
var G__48882 = cljs.core.count.call(null,c__37569__auto__);
var G__48883 = (0);
seq__48858 = G__48880;
chunk__48859 = G__48881;
count__48860 = G__48882;
i__48861 = G__48883;
continue;
} else {
var vec__48868 = cljs.core.first.call(null,seq__48858__$1);
var client_id = cljs.core.nth.call(null,vec__48868,(0),null);
var vec__48871 = cljs.core.nth.call(null,vec__48868,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__48871,(0),null);
var _udt = cljs.core.nth.call(null,vec__48871,(1),null);
var temp__4657__auto___48884__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto___48884__$1)){
var sch_48885 = temp__4657__auto___48884__$1;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_48885,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__48886 = cljs.core.next.call(null,seq__48858__$1);
var G__48887 = null;
var G__48888 = (0);
var G__48889 = (0);
seq__48858 = G__48886;
chunk__48859 = G__48887;
count__48860 = G__48888;
i__48861 = G__48889;
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",706,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
}),null)),null,-2086256269);

var ms_backoffs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(1440)], null);
var client_ids_unsatisfied = cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_.call(null,client_ids_unsatisfied)){
return null;
} else {
var c__41620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (state_49020){
var state_val_49021 = (state_49020[(1)]);
if((state_val_49021 === (7))){
var inst_48975 = (state_49020[(7)]);
var inst_48976 = (state_49020[(8)]);
var inst_48982 = (state_49020[(9)]);
var inst_48992 = (function (){var n = inst_48975;
var client_ids_satisfied = inst_48976;
var _QMARK_pulled = inst_48982;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_48975,inst_48976,inst_48982,state_val_49021,c__41620__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (s,client_id,p__48991){
var vec__49022 = p__48991;
var _QMARK_sch = cljs.core.nth.call(null,vec__49022,(0),null);
var _udt = cljs.core.nth.call(null,vec__49022,(1),null);
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
;})(n,client_ids_satisfied,_QMARK_pulled,inst_48975,inst_48976,inst_48982,state_val_49021,c__41620__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_48993 = cljs.core.PersistentHashSet.EMPTY;
var inst_48994 = cljs.core.reduce_kv.call(null,inst_48992,inst_48993,inst_48982);
var state_49020__$1 = state_49020;
var statearr_49025_49058 = state_49020__$1;
(statearr_49025_49058[(2)] = inst_48994);

(statearr_49025_49058[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49021 === (1))){
var inst_48974 = cljs.core.PersistentHashSet.EMPTY;
var inst_48975 = (0);
var inst_48976 = inst_48974;
var state_49020__$1 = (function (){var statearr_49026 = state_49020;
(statearr_49026[(7)] = inst_48975);

(statearr_49026[(8)] = inst_48976);

return statearr_49026;
})();
var statearr_49027_49059 = state_49020__$1;
(statearr_49027_49059[(2)] = null);

(statearr_49027_49059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49021 === (4))){
var state_49020__$1 = state_49020;
var statearr_49028_49060 = state_49020__$1;
(statearr_49028_49060[(2)] = true);

(statearr_49028_49060[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49021 === (15))){
var inst_49013 = (state_49020[(2)]);
var state_49020__$1 = state_49020;
var statearr_49029_49061 = state_49020__$1;
(statearr_49029_49061[(2)] = inst_49013);

(statearr_49029_49061[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49021 === (13))){
var inst_48999 = (state_49020[(10)]);
var inst_49004 = cljs.core.rand_int.call(null,inst_48999);
var inst_49005 = (inst_48999 + inst_49004);
var inst_49006 = cljs.core.async.timeout.call(null,inst_49005);
var state_49020__$1 = state_49020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49020__$1,(16),inst_49006);
} else {
if((state_val_49021 === (6))){
var inst_48982 = (state_49020[(9)]);
var inst_48989 = (state_49020[(2)]);
var state_49020__$1 = (function (){var statearr_49030 = state_49020;
(statearr_49030[(11)] = inst_48989);

return statearr_49030;
})();
if(cljs.core.truth_(inst_48982)){
var statearr_49031_49062 = state_49020__$1;
(statearr_49031_49062[(1)] = (7));

} else {
var statearr_49032_49063 = state_49020__$1;
(statearr_49032_49063[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49021 === (3))){
var inst_49018 = (state_49020[(2)]);
var state_49020__$1 = state_49020;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49020__$1,inst_49018);
} else {
if((state_val_49021 === (12))){
var inst_49016 = (state_49020[(2)]);
var state_49020__$1 = state_49020;
var statearr_49033_49064 = state_49020__$1;
(statearr_49033_49064[(2)] = inst_49016);

(statearr_49033_49064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49021 === (2))){
var inst_48975 = (state_49020[(7)]);
var inst_48976 = (state_49020[(8)]);
var inst_48982 = (state_49020[(9)]);
var inst_48978 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48979 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_48980 = (new cljs.core.PersistentVector(null,2,(5),inst_48978,inst_48979,null));
var inst_48981 = (function (){var n = inst_48975;
var client_ids_satisfied = inst_48976;
return ((function (n,client_ids_satisfied,inst_48975,inst_48976,inst_48982,inst_48978,inst_48979,inst_48980,state_val_49021,c__41620__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m){
var ks_to_pull = cljs.core.remove.call(null,client_ids_satisfied,cljs.core.keys.call(null,m));
if(cljs.core.empty_QMARK_.call(null,ks_to_pull)){
return taoensso.encore.swapped.call(null,m,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.reduce.call(null,((function (ks_to_pull,n,client_ids_satisfied,inst_48975,inst_48976,inst_48982,inst_48978,inst_48979,inst_48980,state_val_49021,c__41620__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m__$1,k){
var vec__49034 = cljs.core.get.call(null,m__$1,k);
var _QMARK_sch = cljs.core.nth.call(null,vec__49034,(0),null);
var udt = cljs.core.nth.call(null,vec__49034,(1),null);
return cljs.core.assoc.call(null,m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_48975,inst_48976,inst_48982,inst_48978,inst_48979,inst_48980,state_val_49021,c__41620__auto__,ms_backoffs,client_ids_unsatisfied))
,m,ks_to_pull),cljs.core.select_keys.call(null,m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_48975,inst_48976,inst_48982,inst_48978,inst_48979,inst_48980,state_val_49021,c__41620__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_48982__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_48980,inst_48981);
var inst_48983 = (function (){var n = inst_48975;
var client_ids_satisfied = inst_48976;
var _QMARK_pulled = inst_48982__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_48975,inst_48976,inst_48982,inst_48978,inst_48979,inst_48980,inst_48981,inst_48982__$1,state_val_49021,c__41620__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (x){
var or__36758__auto__ = (x == null);
if(or__36758__auto__){
return or__36758__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,x);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_48975,inst_48976,inst_48982,inst_48978,inst_48979,inst_48980,inst_48981,inst_48982__$1,state_val_49021,c__41620__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_48984 = inst_48983.call(null,inst_48982__$1);
var state_49020__$1 = (function (){var statearr_49037 = state_49020;
(statearr_49037[(9)] = inst_48982__$1);

return statearr_49037;
})();
if(cljs.core.truth_(inst_48984)){
var statearr_49038_49065 = state_49020__$1;
(statearr_49038_49065[(1)] = (4));

} else {
var statearr_49039_49066 = state_49020__$1;
(statearr_49039_49066[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49021 === (11))){
var state_49020__$1 = state_49020;
var statearr_49040_49067 = state_49020__$1;
(statearr_49040_49067[(2)] = null);

(statearr_49040_49067[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49021 === (9))){
var inst_48975 = (state_49020[(7)]);
var inst_48999 = (state_49020[(10)]);
var inst_48976 = (state_49020[(8)]);
var inst_48997 = (state_49020[(2)]);
var inst_48998 = cljs.core.into.call(null,inst_48976,inst_48997);
var inst_48999__$1 = cljs.core.get.call(null,ms_backoffs,inst_48975);
var state_49020__$1 = (function (){var statearr_49041 = state_49020;
(statearr_49041[(12)] = inst_48998);

(statearr_49041[(10)] = inst_48999__$1);

return statearr_49041;
})();
if(cljs.core.truth_(inst_48999__$1)){
var statearr_49042_49068 = state_49020__$1;
(statearr_49042_49068[(1)] = (10));

} else {
var statearr_49043_49069 = state_49020__$1;
(statearr_49043_49069[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49021 === (5))){
var inst_48982 = (state_49020[(9)]);
var inst_48987 = taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:or nil? map?] ?pulled)",inst_48982,null,null);
var state_49020__$1 = state_49020;
var statearr_49044_49070 = state_49020__$1;
(statearr_49044_49070[(2)] = inst_48987);

(statearr_49044_49070[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49021 === (14))){
var state_49020__$1 = state_49020;
var statearr_49045_49071 = state_49020__$1;
(statearr_49045_49071[(2)] = null);

(statearr_49045_49071[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49021 === (16))){
var inst_48975 = (state_49020[(7)]);
var inst_48998 = (state_49020[(12)]);
var inst_49008 = (state_49020[(2)]);
var inst_49009 = (inst_48975 + (1));
var inst_48975__$1 = inst_49009;
var inst_48976 = inst_48998;
var state_49020__$1 = (function (){var statearr_49046 = state_49020;
(statearr_49046[(7)] = inst_48975__$1);

(statearr_49046[(8)] = inst_48976);

(statearr_49046[(13)] = inst_49008);

return statearr_49046;
})();
var statearr_49047_49072 = state_49020__$1;
(statearr_49047_49072[(2)] = null);

(statearr_49047_49072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49021 === (10))){
var inst_48998 = (state_49020[(12)]);
var inst_49001 = cljs.core.complement.call(null,inst_48998);
var inst_49002 = taoensso.encore.rsome.call(null,inst_49001,client_ids_unsatisfied);
var state_49020__$1 = state_49020;
if(cljs.core.truth_(inst_49002)){
var statearr_49048_49073 = state_49020__$1;
(statearr_49048_49073[(1)] = (13));

} else {
var statearr_49049_49074 = state_49020__$1;
(statearr_49049_49074[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49021 === (8))){
var state_49020__$1 = state_49020;
var statearr_49050_49075 = state_49020__$1;
(statearr_49050_49075[(2)] = null);

(statearr_49050_49075[(1)] = (9));


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
});})(c__41620__auto__,ms_backoffs,client_ids_unsatisfied))
;
return ((function (switch__41458__auto__,c__41620__auto__,ms_backoffs,client_ids_unsatisfied){
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__41459__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__41459__auto____0 = (function (){
var statearr_49054 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49054[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__41459__auto__);

(statearr_49054[(1)] = (1));

return statearr_49054;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__41459__auto____1 = (function (state_49020){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_49020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e49055){if((e49055 instanceof Object)){
var ex__41462__auto__ = e49055;
var statearr_49056_49076 = state_49020;
(statearr_49056_49076[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49077 = state_49020;
state_49020 = G__49077;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__41459__auto__ = function(state_49020){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__41459__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__41459__auto____1.call(this,state_49020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__41459__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__41459__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var state__41622__auto__ = (function (){var statearr_49057 = f__41621__auto__.call(null);
(statearr_49057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto__);

return statearr_49057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto__,ms_backoffs,client_ids_unsatisfied))
);

return c__41620__auto__;
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
var x__37421__auto__ = (((chsk == null))?null:chsk);
var m__37422__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__37421__auto__)]);
if(!((m__37422__auto__ == null))){
return m__37422__auto__.call(null,chsk);
} else {
var m__37422__auto____$1 = (taoensso.sente._chsk_connect_BANG_["_"]);
if(!((m__37422__auto____$1 == null))){
return m__37422__auto____$1.call(null,chsk);
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
var x__37421__auto__ = (((chsk == null))?null:chsk);
var m__37422__auto__ = (taoensso.sente._chsk_disconnect_BANG_[goog.typeOf(x__37421__auto__)]);
if(!((m__37422__auto__ == null))){
return m__37422__auto__.call(null,chsk,reason);
} else {
var m__37422__auto____$1 = (taoensso.sente._chsk_disconnect_BANG_["_"]);
if(!((m__37422__auto____$1 == null))){
return m__37422__auto____$1.call(null,chsk,reason);
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
var x__37421__auto__ = (((chsk == null))?null:chsk);
var m__37422__auto__ = (taoensso.sente._chsk_reconnect_BANG_[goog.typeOf(x__37421__auto__)]);
if(!((m__37422__auto__ == null))){
return m__37422__auto__.call(null,chsk);
} else {
var m__37422__auto____$1 = (taoensso.sente._chsk_reconnect_BANG_["_"]);
if(!((m__37422__auto____$1 == null))){
return m__37422__auto____$1.call(null,chsk);
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
var x__37421__auto__ = (((chsk == null))?null:chsk);
var m__37422__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__37421__auto__)]);
if(!((m__37422__auto__ == null))){
return m__37422__auto__.call(null,chsk,ev,opts);
} else {
var m__37422__auto____$1 = (taoensso.sente._chsk_send_BANG_["_"]);
if(!((m__37422__auto____$1 == null))){
return m__37422__auto____$1.call(null,chsk,ev,opts);
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
var args49078 = [];
var len__37833__auto___49081 = arguments.length;
var i__37834__auto___49082 = (0);
while(true){
if((i__37834__auto___49082 < len__37833__auto___49081)){
args49078.push((arguments[i__37834__auto___49082]));

var G__49083 = (i__37834__auto___49082 + (1));
i__37834__auto___49082 = G__49083;
continue;
} else {
}
break;
}

var G__49080 = args49078.length;
switch (G__49080) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49078.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",783,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null,1142161025);

return taoensso.sente._chsk_send_BANG_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",788,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null,1537663622);

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
var vec__49088 = taoensso.encore.swap_in_BANG_.call(null,new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = f.call(null,old_state);
var new_state__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(old_state))?cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),false):new_state);
var new_state__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state__$1))?cljs.core.dissoc.call(null,new_state__$1,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)):new_state__$1);
return taoensso.encore.swapped.call(null,new_state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$2], null));
}));
var old_state = cljs.core.nth.call(null,vec__49088,(0),null);
var new_state = cljs.core.nth.call(null,vec__49088,(1),null);
if(cljs.core.not_EQ_.call(null,old_state,new_state)){
var output = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null);
cljs.core.async.put_BANG_.call(null,cljs.core.get_in.call(null,chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),output], null));

return output;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_49095 = (function (){try{if(cljs.core.map_QMARK_.call(null,state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e49093){if((e49093 instanceof Error)){
var e = e49093;
return e;
} else {
throw e49093;

}
}})();
if((e_49095 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(map? state)",state,e_49095,null);
}

var e_49096 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641),null,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720),null,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707),null], null), null)),x);
}).call(null,reason)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e49094){if((e49094 instanceof Error)){
var e = e49094;
return e;
} else {
throw e49094;

}
}})();
if((e_49096 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:el #{:requested-disconnect :downgrading-ws-to-ajax :unexpected :requested-reconnect}] reason)",reason,e_49096,null);
}

if(cljs.core.truth_((function (){var or__36758__auto__ = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__36758__auto__)){
return or__36758__auto__;
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
var e_49105 = (function (){try{if(taoensso.encore.chan_QMARK_.call(null,_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e49101){if((e49101 instanceof Error)){
var e = e49101;
return e;
} else {
throw e49101;

}
}})();
if((e_49105 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/chan? ?cb)",_QMARK_cb,e_49105,null);
}

taoensso.sente.assert_event.call(null,ev);

var vec__49102 = ev;
var ev_id = cljs.core.nth.call(null,vec__49102,(0),null);
var _ = cljs.core.nth.call(null,vec__49102,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__49102,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.as_qname.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__49102,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",868,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null,41073535);

var buffered_evs = ((cljs.core.vector_QMARK_.call(null,clj))?clj:taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? clj)",clj,null,null));
var seq__49116 = cljs.core.seq.call(null,buffered_evs);
var chunk__49117 = null;
var count__49118 = (0);
var i__49119 = (0);
while(true){
if((i__49119 < count__49118)){
var ev = cljs.core._nth.call(null,chunk__49117,i__49119);
taoensso.sente.assert_event.call(null,ev);

var vec__49120_49126 = ev;
var id_49127 = cljs.core.nth.call(null,vec__49120_49126,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_49127),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__49128 = seq__49116;
var G__49129 = chunk__49117;
var G__49130 = count__49118;
var G__49131 = (i__49119 + (1));
seq__49116 = G__49128;
chunk__49117 = G__49129;
count__49118 = G__49130;
i__49119 = G__49131;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49116);
if(temp__4657__auto__){
var seq__49116__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49116__$1)){
var c__37569__auto__ = cljs.core.chunk_first.call(null,seq__49116__$1);
var G__49132 = cljs.core.chunk_rest.call(null,seq__49116__$1);
var G__49133 = c__37569__auto__;
var G__49134 = cljs.core.count.call(null,c__37569__auto__);
var G__49135 = (0);
seq__49116 = G__49132;
chunk__49117 = G__49133;
count__49118 = G__49134;
i__49119 = G__49135;
continue;
} else {
var ev = cljs.core.first.call(null,seq__49116__$1);
taoensso.sente.assert_event.call(null,ev);

var vec__49123_49136 = ev;
var id_49137 = cljs.core.nth.call(null,vec__49123_49136,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_49137),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__49138 = cljs.core.next.call(null,seq__49116__$1);
var G__49139 = null;
var G__49140 = (0);
var G__49141 = (0);
seq__49116 = G__49138;
chunk__49117 = G__49139;
count__49118 = G__49140;
i__49119 = G__49141;
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
var and__36746__auto__ = cljs.core.vector_QMARK_.call(null,x);
if(and__36746__auto__){
var vec__49151 = x;
var x1 = cljs.core.nth.call(null,vec__49151,(0),null);
return cljs.core._EQ_.call(null,x1,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686));
} else {
return and__36746__auto__;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_49175 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null], null), null)),x);
}).call(null,chsk_type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e49165){if((e49165 instanceof Error)){
var e = e49165;
return e;
} else {
throw e49165;

}
}})();
if((e_49175 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_49175,null);
}

var e_49176 = (function (){try{if(cljs.core.truth_(taoensso.sente.handshake_QMARK_.call(null,clj))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e49166){if((e49166 instanceof Error)){
var e = e49166;
return e;
} else {
throw e49166;

}
}})();
if((e_49176 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(handshake? clj)",clj,e_49176,null);
}

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",885,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null,-1611413054);

var vec__49167 = clj;
var _ = cljs.core.nth.call(null,vec__49167,(0),null);
var vec__49170 = cljs.core.nth.call(null,vec__49167,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__49170,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__49170,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__49170,(2),null);
var map__49173 = chsk;
var map__49173__$1 = ((((!((map__49173 == null)))?((((map__49173.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49173.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49173):map__49173);
var chs = cljs.core.get.call(null,map__49173__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var ever_opened_QMARK__ = cljs.core.get.call(null,map__49173__$1,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913));
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_.call(null,ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),chsk_type,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),_QMARK_csrf_token,new cljs.core.Keyword(null,"handshake-data","handshake-data",-278378864),_QMARK_handshake_data,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event.call(null,handshake_ev);

if(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",904,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__49167,_,vec__49170,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__49173,map__49173__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__49167,_,vec__49170,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__49173,map__49173__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
,null)),null,-1160177896);
} else {
}

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk,((function (vec__49167,_,vec__49170,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__49173,map__49173__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (p1__49154_SHARP_){
return cljs.core.merge.call(null,p1__49154_SHARP_,new_state);
});})(vec__49167,_,vec__49170,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__49173,map__49173__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
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
if(cljs.core.truth_((function (){var and__36746__auto__ = taoensso.sente.node_target_QMARK_;
if(cljs.core.truth_(and__36746__auto__)){
return typeof require !== 'undefined';
} else {
return and__36746__auto__;
}
})())){
try{return require("websocket");
}catch (e49177){var e = e49177;
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
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__37380__auto__,k__37381__auto__){
var self__ = this;
var this__37380__auto____$1 = this;
return cljs.core._lookup.call(null,this__37380__auto____$1,k__37381__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__37382__auto__,k49184,else__37383__auto__){
var self__ = this;
var this__37382__auto____$1 = this;
var G__49186 = (((k49184 instanceof cljs.core.Keyword))?k49184.fqn:null);
switch (G__49186) {
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
return cljs.core.get.call(null,self__.__extmap,k49184,else__37383__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__37394__auto__,writer__37395__auto__,opts__37396__auto__){
var self__ = this;
var this__37394__auto____$1 = this;
var pr_pair__37397__auto__ = ((function (this__37394__auto____$1){
return (function (keyval__37398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__37395__auto__,cljs.core.pr_writer,""," ","",opts__37396__auto__,keyval__37398__auto__);
});})(this__37394__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__37395__auto__,pr_pair__37397__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__37396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49183){
var self__ = this;
var G__49183__$1 = this;
return (new cljs.core.RecordIter((0),G__49183__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__37378__auto__){
var self__ = this;
var this__37378__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__37374__auto__){
var self__ = this;
var this__37374__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__37384__auto__){
var self__ = this;
var this__37384__auto____$1 = this;
return (14 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__37375__auto__){
var self__ = this;
var this__37375__auto____$1 = this;
var h__37193__auto__ = self__.__hash;
if(!((h__37193__auto__ == null))){
return h__37193__auto__;
} else {
var h__37193__auto____$1 = cljs.core.hash_imap.call(null,this__37375__auto____$1);
self__.__hash = h__37193__auto____$1;

return h__37193__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__37376__auto__,other__37377__auto__){
var self__ = this;
var this__37376__auto____$1 = this;
if(cljs.core.truth_((function (){var and__36746__auto__ = other__37377__auto__;
if(cljs.core.truth_(and__36746__auto__)){
var and__36746__auto____$1 = (this__37376__auto____$1.constructor === other__37377__auto__.constructor);
if(and__36746__auto____$1){
return cljs.core.equiv_map.call(null,this__37376__auto____$1,other__37377__auto__);
} else {
return and__36746__auto____$1;
}
} else {
return and__36746__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__37389__auto__,k__37390__auto__){
var self__ = this;
var this__37389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__37390__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__37389__auto____$1),self__.__meta),k__37390__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__37390__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__37387__auto__,k__37388__auto__,G__49183){
var self__ = this;
var this__37387__auto____$1 = this;
var pred__49187 = cljs.core.keyword_identical_QMARK_;
var expr__49188 = k__37388__auto__;
if(cljs.core.truth_(pred__49187.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__49188))){
return (new taoensso.sente.ChWebSocket(G__49183,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49187.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__49188))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__49183,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49187.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__49188))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__49183,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49187.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__49188))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__49183,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49187.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__49188))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__49183,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49187.call(null,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),expr__49188))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__49183,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49187.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__49188))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,G__49183,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49187.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__49188))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,G__49183,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49187.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__49188))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,G__49183,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49187.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__49188))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,G__49183,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49187.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__49188))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,G__49183,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49187.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__49188))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__49183,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49187.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__49188))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__49183,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49187.call(null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),expr__49188))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__49183,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__37388__auto__,G__49183),null));
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

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__37392__auto__){
var self__ = this;
var this__37392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__37379__auto__,G__49183){
var self__ = this;
var this__37379__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__49183,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__37385__auto__,entry__37386__auto__){
var self__ = this;
var this__37385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__37386__auto__)){
return cljs.core._assoc.call(null,this__37385__auto____$1,cljs.core._nth.call(null,entry__37386__auto__,(0)),cljs.core._nth.call(null,entry__37386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__37385__auto____$1,entry__37386__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (chsk__$1){
return (function (p1__49178_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__49178_SHARP_,reason);
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
var map__49190 = opts;
var map__49190__$1 = ((((!((map__49190 == null)))?((((map__49190.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49190.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49190):map__49190);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__49190__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__49190__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__49190__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__4657__auto___49281 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___49281)){
var cb_uuid_49282 = temp__4657__auto___49281;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_49282], null),(function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e49192){if((e49192 instanceof Error)){
var e = e49192;
return e;
} else {
throw e49192;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__4657__auto___49283__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4657__auto___49283__$1)){
var timeout_ms_49284 = temp__4657__auto___49283__$1;
var c__41620__auto___49285 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto___49285,timeout_ms_49284,temp__4657__auto___49283__$1,cb_uuid_49282,temp__4657__auto___49281,_QMARK_cb_uuid,ppstr,map__49190,map__49190__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto___49285,timeout_ms_49284,temp__4657__auto___49283__$1,cb_uuid_49282,temp__4657__auto___49281,_QMARK_cb_uuid,ppstr,map__49190,map__49190__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (state_49203){
var state_val_49204 = (state_49203[(1)]);
if((state_val_49204 === (1))){
var inst_49193 = cljs.core.async.timeout.call(null,timeout_ms_49284);
var state_49203__$1 = state_49203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49203__$1,(2),inst_49193);
} else {
if((state_val_49204 === (2))){
var inst_49196 = (state_49203[(7)]);
var inst_49195 = (state_49203[(2)]);
var inst_49196__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_49203__$1 = (function (){var statearr_49205 = state_49203;
(statearr_49205[(8)] = inst_49195);

(statearr_49205[(7)] = inst_49196__$1);

return statearr_49205;
})();
if(cljs.core.truth_(inst_49196__$1)){
var statearr_49206_49286 = state_49203__$1;
(statearr_49206_49286[(1)] = (3));

} else {
var statearr_49207_49287 = state_49203__$1;
(statearr_49207_49287[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49204 === (3))){
var inst_49196 = (state_49203[(7)]);
var inst_49198 = inst_49196.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_49203__$1 = state_49203;
var statearr_49208_49288 = state_49203__$1;
(statearr_49208_49288[(2)] = inst_49198);

(statearr_49208_49288[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49204 === (4))){
var state_49203__$1 = state_49203;
var statearr_49209_49289 = state_49203__$1;
(statearr_49209_49289[(2)] = null);

(statearr_49209_49289[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49204 === (5))){
var inst_49201 = (state_49203[(2)]);
var state_49203__$1 = state_49203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49203__$1,inst_49201);
} else {
return null;
}
}
}
}
}
});})(c__41620__auto___49285,timeout_ms_49284,temp__4657__auto___49283__$1,cb_uuid_49282,temp__4657__auto___49281,_QMARK_cb_uuid,ppstr,map__49190,map__49190__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
return ((function (switch__41458__auto__,c__41620__auto___49285,timeout_ms_49284,temp__4657__auto___49283__$1,cb_uuid_49282,temp__4657__auto___49281,_QMARK_cb_uuid,ppstr,map__49190,map__49190__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function() {
var taoensso$sente$state_machine__41459__auto__ = null;
var taoensso$sente$state_machine__41459__auto____0 = (function (){
var statearr_49213 = [null,null,null,null,null,null,null,null,null];
(statearr_49213[(0)] = taoensso$sente$state_machine__41459__auto__);

(statearr_49213[(1)] = (1));

return statearr_49213;
});
var taoensso$sente$state_machine__41459__auto____1 = (function (state_49203){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_49203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e49214){if((e49214 instanceof Object)){
var ex__41462__auto__ = e49214;
var statearr_49215_49290 = state_49203;
(statearr_49215_49290[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49291 = state_49203;
state_49203 = G__49291;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
taoensso$sente$state_machine__41459__auto__ = function(state_49203){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__41459__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__41459__auto____1.call(this,state_49203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__41459__auto____0;
taoensso$sente$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__41459__auto____1;
return taoensso$sente$state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto___49285,timeout_ms_49284,temp__4657__auto___49283__$1,cb_uuid_49282,temp__4657__auto___49281,_QMARK_cb_uuid,ppstr,map__49190,map__49190__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
})();
var state__41622__auto__ = (function (){var statearr_49216 = f__41621__auto__.call(null);
(statearr_49216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto___49285);

return statearr_49216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto___49285,timeout_ms_49284,temp__4657__auto___49283__$1,cb_uuid_49282,temp__4657__auto___49281,_QMARK_cb_uuid,ppstr,map__49190,map__49190__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.udt_last_comms_,taoensso.encore.now_udt.call(null));

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e49217){var e = e49217;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",986,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,map__49190,map__49190__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,map__49190,map__49190__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,1388854483);

var temp__4657__auto___49292 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___49292)){
var cb_uuid_49293 = temp__4657__auto___49292;
var cb_fn_STAR__49294 = (function (){var or__36758__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_49293);
if(cljs.core.truth_(or__36758__auto__)){
return or__36758__auto__;
} else {
var e__$1 = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e49218){if((e49218 instanceof Error)){
var e__$1 = e49218;
return e__$1;
} else {
throw e49218;

}
}})();
if((e__$1 == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e__$1,null);
}
}
})();
cb_fn_STAR__49294.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = (function (){var or__36758__auto__ = taoensso.encore.oget.call(null,goog.global,"WebSocket");
if(cljs.core.truth_(or__36758__auto__)){
return or__36758__auto__;
} else {
var or__36758__auto____$1 = taoensso.encore.oget.call(null,goog.global,"MozWebSocket");
if(cljs.core.truth_(or__36758__auto____$1)){
return or__36758__auto____$1;
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",1011,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,1945940804);

goog.global.setTimeout(taoensso$sente$connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__49179_SHARP_){
return cljs.core.assoc.call(null,p1__49179_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
;
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string.call(null,self__.url,cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null)))));
}catch (e49225){var e = e49225;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",1025,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket error"], null);
});})(e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-329480115);

return null;
}})();
if(cljs.core.not.call(null,_QMARK_socket)){
return retry_fn.call(null);
} else {
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__49226 = _QMARK_socket;
(G__49226["onerror"] = ((function (G__49226,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",1035,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__49226,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.call(null,ws_ev);
}catch (e49227){var _ = e49227;
return ws_ev;
}})()], null);
});})(G__49226,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,239235833);

var last_ws_error = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev], null);
return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (last_ws_error,G__49226,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__49180_SHARP_){
return cljs.core.assoc.call(null,p1__49180_SHARP_,new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502),last_ws_error);
});})(last_ws_error,G__49226,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
});})(G__49226,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__49226["onmessage"] = ((function (G__49226,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.call(null,ws_ev,"data");
var vec__49228 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__49228,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__49228,(1),null);
cljs.core.reset_BANG_.call(null,self__.udt_last_comms_,taoensso.encore.now_udt.call(null));

var or__36758__auto__ = (cljs.core.truth_(taoensso.sente.handshake_QMARK_.call(null,clj))?(function (){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),chsk__$1,clj);

cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));

return new cljs.core.Keyword(null,"handshake","handshake",68079331);
})()
:null);
if(cljs.core.truth_(or__36758__auto__)){
return or__36758__auto__;
} else {
var or__36758__auto____$1 = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)))?(function (){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(self__.chs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__36758__auto____$1)){
return or__36758__auto____$1;
} else {
var temp__4655__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4655__auto__)){
var cb_uuid = temp__4655__auto__;
var temp__4655__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4655__auto____$1)){
var cb_fn = temp__4655__auto____$1;
return cb_fn.call(null,clj);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",1071,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__36758__auto____$1,or__36758__auto__,ppstr,vec__49228,clj,_QMARK_cb_uuid,G__49226,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__36758__auto____$1,or__36758__auto__,ppstr,vec__49228,clj,_QMARK_cb_uuid,G__49226,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,2033315193);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
}
});})(G__49226,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__49226["onclose"] = ((function (G__49226,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var clean_QMARK_ = taoensso.encore.oget.call(null,ws_ev,"wasClean");
var code = taoensso.encore.oget.call(null,ws_ev,"code");
var reason = taoensso.encore.oget.call(null,ws_ev,"reason");
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev,new cljs.core.Keyword(null,"clean?","clean?",-1675631009),clean_QMARK_,new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null);
if(cljs.core.truth_(clean_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",1093,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (clean_QMARK_,code,reason,last_ws_close,G__49226,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean WebSocket close, will not attempt reconnect"], null);
});})(clean_QMARK_,code,reason,last_ws_close,G__49226,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-327512114);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__49226,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__49181_SHARP_){
return cljs.core.assoc.call(null,p1__49181_SHARP_,new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__49226,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__49226,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__49182_SHARP_){
return cljs.core.assoc.call(null,taoensso.sente.chsk_state__GT_closed.call(null,p1__49182_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424)),new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__49226,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

return retry_fn.call(null);
}
});})(G__49226,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

return G__49226;
})());
}
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
;
var temp__4657__auto___49295__$1 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__4657__auto___49295__$1)){
var ms_49296 = temp__4657__auto___49295__$1;
var c__41620__auto___49297 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto___49297,ms_49296,temp__4657__auto___49295__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto___49297,ms_49296,temp__4657__auto___49295__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function (state_49258){
var state_val_49259 = (state_49258[(1)]);
if((state_val_49259 === (7))){
var inst_49254 = (state_49258[(2)]);
var state_49258__$1 = state_49258;
var statearr_49260_49298 = state_49258__$1;
(statearr_49260_49298[(2)] = inst_49254);

(statearr_49260_49298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49259 === (1))){
var state_49258__$1 = state_49258;
var statearr_49261_49299 = state_49258__$1;
(statearr_49261_49299[(2)] = null);

(statearr_49261_49299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49259 === (4))){
var inst_49235 = (state_49258[(2)]);
var inst_49236 = have_handle_QMARK_.call(null);
var state_49258__$1 = (function (){var statearr_49262 = state_49258;
(statearr_49262[(7)] = inst_49235);

return statearr_49262;
})();
if(cljs.core.truth_(inst_49236)){
var statearr_49263_49300 = state_49258__$1;
(statearr_49263_49300[(1)] = (5));

} else {
var statearr_49264_49301 = state_49258__$1;
(statearr_49264_49301[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49259 === (6))){
var state_49258__$1 = state_49258;
var statearr_49265_49302 = state_49258__$1;
(statearr_49265_49302[(2)] = null);

(statearr_49265_49302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49259 === (3))){
var inst_49256 = (state_49258[(2)]);
var state_49258__$1 = state_49258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49258__$1,inst_49256);
} else {
if((state_val_49259 === (2))){
var inst_49232 = cljs.core.deref.call(null,self__.udt_last_comms_);
var inst_49233 = cljs.core.async.timeout.call(null,ms_49296);
var state_49258__$1 = (function (){var statearr_49266 = state_49258;
(statearr_49266[(8)] = inst_49232);

return statearr_49266;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49258__$1,(4),inst_49233);
} else {
if((state_val_49259 === (9))){
var state_49258__$1 = state_49258;
var statearr_49267_49303 = state_49258__$1;
(statearr_49267_49303[(2)] = null);

(statearr_49267_49303[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49259 === (5))){
var inst_49232 = (state_49258[(8)]);
var inst_49238 = cljs.core.deref.call(null,self__.udt_last_comms_);
var inst_49239 = cljs.core._EQ_.call(null,inst_49232,inst_49238);
var state_49258__$1 = state_49258;
if(inst_49239){
var statearr_49268_49304 = state_49258__$1;
(statearr_49268_49304[(1)] = (8));

} else {
var statearr_49269_49305 = state_49258__$1;
(statearr_49269_49305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49259 === (10))){
var inst_49250 = (state_49258[(2)]);
var state_49258__$1 = (function (){var statearr_49270 = state_49258;
(statearr_49270[(9)] = inst_49250);

return statearr_49270;
})();
var statearr_49271_49306 = state_49258__$1;
(statearr_49271_49306[(2)] = null);

(statearr_49271_49306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49259 === (8))){
var inst_49241 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49242 = [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)];
var inst_49243 = (new cljs.core.PersistentVector(null,1,(5),inst_49241,inst_49242,null));
var inst_49244 = [new cljs.core.Keyword(null,"flush?","flush?",-108887231)];
var inst_49245 = [true];
var inst_49246 = cljs.core.PersistentHashMap.fromArrays(inst_49244,inst_49245);
var inst_49247 = taoensso.sente._chsk_send_BANG_.call(null,chsk__$1,inst_49243,inst_49246);
var state_49258__$1 = state_49258;
var statearr_49272_49307 = state_49258__$1;
(statearr_49272_49307[(2)] = inst_49247);

(statearr_49272_49307[(1)] = (10));


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
});})(c__41620__auto___49297,ms_49296,temp__4657__auto___49295__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
;
return ((function (switch__41458__auto__,c__41620__auto___49297,ms_49296,temp__4657__auto___49295__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function() {
var taoensso$sente$state_machine__41459__auto__ = null;
var taoensso$sente$state_machine__41459__auto____0 = (function (){
var statearr_49276 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49276[(0)] = taoensso$sente$state_machine__41459__auto__);

(statearr_49276[(1)] = (1));

return statearr_49276;
});
var taoensso$sente$state_machine__41459__auto____1 = (function (state_49258){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_49258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e49277){if((e49277 instanceof Object)){
var ex__41462__auto__ = e49277;
var statearr_49278_49308 = state_49258;
(statearr_49278_49308[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49309 = state_49258;
state_49258 = G__49309;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
taoensso$sente$state_machine__41459__auto__ = function(state_49258){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__41459__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__41459__auto____1.call(this,state_49258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__41459__auto____0;
taoensso$sente$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__41459__auto____1;
return taoensso$sente$state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto___49297,ms_49296,temp__4657__auto___49295__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
})();
var state__41622__auto__ = (function (){var statearr_49279 = f__41621__auto__.call(null);
(statearr_49279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto___49297);

return statearr_49279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto___49297,ms_49296,temp__4657__auto___49295__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
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

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__37414__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__37414__auto__,writer__37415__auto__){
return cljs.core._write.call(null,writer__37415__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__49185){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__49185),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__49185),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__49185),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__49185),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__49185),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968).cljs$core$IFn$_invoke$arity$1(G__49185),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__49185),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__49185),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__49185),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__49185),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__49185),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__49185),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__49185),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639).cljs$core$IFn$_invoke$arity$1(G__49185),null,cljs.core.dissoc.call(null,G__49185,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)),null));
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
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__37380__auto__,k__37381__auto__){
var self__ = this;
var this__37380__auto____$1 = this;
return cljs.core._lookup.call(null,this__37380__auto____$1,k__37381__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__37382__auto__,k49317,else__37383__auto__){
var self__ = this;
var this__37382__auto____$1 = this;
var G__49319 = (((k49317 instanceof cljs.core.Keyword))?k49317.fqn:null);
switch (G__49319) {
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
return cljs.core.get.call(null,self__.__extmap,k49317,else__37383__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__37394__auto__,writer__37395__auto__,opts__37396__auto__){
var self__ = this;
var this__37394__auto____$1 = this;
var pr_pair__37397__auto__ = ((function (this__37394__auto____$1){
return (function (keyval__37398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__37395__auto__,cljs.core.pr_writer,""," ","",opts__37396__auto__,keyval__37398__auto__);
});})(this__37394__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__37395__auto__,pr_pair__37397__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__37396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49316){
var self__ = this;
var G__49316__$1 = this;
return (new cljs.core.RecordIter((0),G__49316__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__37378__auto__){
var self__ = this;
var this__37378__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__37374__auto__){
var self__ = this;
var this__37374__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__37384__auto__){
var self__ = this;
var this__37384__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__37375__auto__){
var self__ = this;
var this__37375__auto____$1 = this;
var h__37193__auto__ = self__.__hash;
if(!((h__37193__auto__ == null))){
return h__37193__auto__;
} else {
var h__37193__auto____$1 = cljs.core.hash_imap.call(null,this__37375__auto____$1);
self__.__hash = h__37193__auto____$1;

return h__37193__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__37376__auto__,other__37377__auto__){
var self__ = this;
var this__37376__auto____$1 = this;
if(cljs.core.truth_((function (){var and__36746__auto__ = other__37377__auto__;
if(cljs.core.truth_(and__36746__auto__)){
var and__36746__auto____$1 = (this__37376__auto____$1.constructor === other__37377__auto__.constructor);
if(and__36746__auto____$1){
return cljs.core.equiv_map.call(null,this__37376__auto____$1,other__37377__auto__);
} else {
return and__36746__auto____$1;
}
} else {
return and__36746__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__37389__auto__,k__37390__auto__){
var self__ = this;
var this__37389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__37390__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__37389__auto____$1),self__.__meta),k__37390__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__37390__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__37387__auto__,k__37388__auto__,G__49316){
var self__ = this;
var this__37387__auto____$1 = this;
var pred__49320 = cljs.core.keyword_identical_QMARK_;
var expr__49321 = k__37388__auto__;
if(cljs.core.truth_(pred__49320.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__49321))){
return (new taoensso.sente.ChAjaxSocket(G__49316,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49320.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__49321))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__49316,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49320.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__49321))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__49316,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49320.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__49321))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__49316,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49320.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__49321))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__49316,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49320.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__49321))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__49316,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49320.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__49321))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__49316,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49320.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__49321))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,G__49316,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49320.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__49321))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,G__49316,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49320.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__49321))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__49316,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49320.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__49321))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__49316,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__37388__auto__,G__49316),null));
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__37392__auto__){
var self__ = this;
var this__37392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__37379__auto__,G__49316){
var self__ = this;
var this__37379__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__49316,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__37385__auto__,entry__37386__auto__){
var self__ = this;
var this__37385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__37386__auto__)){
return cljs.core._assoc.call(null,this__37385__auto____$1,cljs.core._nth.call(null,entry__37386__auto__,(0)),cljs.core._nth.call(null,entry__37386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__37385__auto____$1,entry__37386__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (chsk__$1){
return (function (p1__49310_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__49310_SHARP_,reason);
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
var map__49323 = opts;
var map__49323__$1 = ((((!((map__49323 == null)))?((((map__49323.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49323.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49323):map__49323);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__49323__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__49323__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__49323__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var csrf_token = new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_));
taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__36758__auto__ = _QMARK_timeout_ms;
if(cljs.core.truth_(or__36758__auto__)){
return or__36758__auto__;
} else {
var or__36758__auto____$1 = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__36758__auto____$1)){
return or__36758__auto____$1;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),csrf_token], null)),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token,new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null));
})()], null)),((function (csrf_token,map__49323,map__49323__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function taoensso$sente$ajax_cb(p__49325){
var map__49331 = p__49325;
var map__49331__$1 = ((((!((map__49331 == null)))?((((map__49331.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49331.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49331):map__49331);
var _QMARK_error = cljs.core.get.call(null,map__49331__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__49331__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (map__49331,map__49331__$1,_QMARK_error,_QMARK_content,csrf_token,map__49323,map__49323__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__49311_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__49311_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
});})(map__49331,map__49331__$1,_QMARK_error,_QMARK_content,csrf_token,map__49323,map__49323__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
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
var vec__49333 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__49333,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__49333,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",1213,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (content,resp_ppstr,vec__49333,resp_clj,___$1,map__49331,map__49331__$1,_QMARK_error,_QMARK_content,csrf_token,map__49323,map__49323__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__49333,resp_clj,___$1,map__49331,map__49331__$1,_QMARK_error,_QMARK_content,csrf_token,map__49323,map__49323__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,-2036505328);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (content,resp_ppstr,vec__49333,resp_clj,___$1,map__49331,map__49331__$1,_QMARK_error,_QMARK_content,csrf_token,map__49323,map__49323__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__49312_SHARP_){
return cljs.core.assoc.call(null,p1__49312_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
});})(content,resp_ppstr,vec__49333,resp_clj,___$1,map__49331,map__49331__$1,_QMARK_error,_QMARK_content,csrf_token,map__49323,map__49323__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);
}
});})(csrf_token,map__49323,map__49323__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",1223,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,360614534);

if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
var udt_next_reconnect = (taoensso.encore.now_udt.call(null) + backoff_ms);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",1231,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,1812089728);

goog.global.setTimeout(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return taoensso$sente$poll_fn.call(null,retry_count_STAR_);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__49313_SHARP_){
return cljs.core.assoc.call(null,p1__49313_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__36758__auto__ = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__36758__auto__)){
return or__36758__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null)))], null)),((function (retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn_$_ajax_cb(p__49347){
var map__49353 = p__49347;
var map__49353__$1 = ((((!((map__49353 == null)))?((((map__49353.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49353.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49353):map__49353);
var _QMARK_error = cljs.core.get.call(null,map__49353__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__49353__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn.call(null,(0));
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (map__49353,map__49353__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__49314_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__49314_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
});})(map__49353,map__49353__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

return retry_fn.call(null);

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__49355 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__49355,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_.call(null,clj);
if(cljs.core.truth_(handshake_QMARK_)){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (content,ppstr,vec__49355,clj,handshake_QMARK_,map__49353,map__49353__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__49315_SHARP_){
return cljs.core.assoc.call(null,p1__49315_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
});})(content,ppstr,vec__49355,clj,handshake_QMARK_,map__49353,map__49353__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

taoensso$sente$poll_fn.call(null,(0));

if(cljs.core.truth_(handshake_QMARK_)){
return null;
} else {
var or__36758__auto__ = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)))?(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__))){
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("debug","timeout","debug/timeout",309499949)], null)], null));
} else {
}

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__36758__auto__)){
return or__36758__auto__;
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

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__37414__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__37414__auto__,writer__37415__auto__){
return cljs.core._write.call(null,writer__37415__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__49318){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__49318),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__49318),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__49318),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__49318),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__49318),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__49318),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__49318),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__49318),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__49318),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__49318),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__49318),null,cljs.core.dissoc.call(null,G__49318,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)),null));
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
taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__37380__auto__,k__37381__auto__){
var self__ = this;
var this__37380__auto____$1 = this;
return cljs.core._lookup.call(null,this__37380__auto____$1,k__37381__auto__,null);
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__37382__auto__,k49360,else__37383__auto__){
var self__ = this;
var this__37382__auto____$1 = this;
var G__49362 = (((k49360 instanceof cljs.core.Keyword))?k49360.fqn:null);
switch (G__49362) {
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
return cljs.core.get.call(null,self__.__extmap,k49360,else__37383__auto__);

}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__37394__auto__,writer__37395__auto__,opts__37396__auto__){
var self__ = this;
var this__37394__auto____$1 = this;
var pr_pair__37397__auto__ = ((function (this__37394__auto____$1){
return (function (keyval__37398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__37395__auto__,cljs.core.pr_writer,""," ","",opts__37396__auto__,keyval__37398__auto__);
});})(this__37394__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__37395__auto__,pr_pair__37397__auto__,"#taoensso.sente.ChAutoSocket{",", ","}",opts__37396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49359){
var self__ = this;
var G__49359__$1 = this;
return (new cljs.core.RecordIter((0),G__49359__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__37378__auto__){
var self__ = this;
var this__37378__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__37374__auto__){
var self__ = this;
var this__37374__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__37384__auto__){
var self__ = this;
var this__37384__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__37375__auto__){
var self__ = this;
var this__37375__auto____$1 = this;
var h__37193__auto__ = self__.__hash;
if(!((h__37193__auto__ == null))){
return h__37193__auto__;
} else {
var h__37193__auto____$1 = cljs.core.hash_imap.call(null,this__37375__auto____$1);
self__.__hash = h__37193__auto____$1;

return h__37193__auto____$1;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__37376__auto__,other__37377__auto__){
var self__ = this;
var this__37376__auto____$1 = this;
if(cljs.core.truth_((function (){var and__36746__auto__ = other__37377__auto__;
if(cljs.core.truth_(and__36746__auto__)){
var and__36746__auto____$1 = (this__37376__auto____$1.constructor === other__37377__auto__.constructor);
if(and__36746__auto____$1){
return cljs.core.equiv_map.call(null,this__37376__auto____$1,other__37377__auto__);
} else {
return and__36746__auto____$1;
}
} else {
return and__36746__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__37389__auto__,k__37390__auto__){
var self__ = this;
var this__37389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl_","impl_",1218818179),null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),null,new cljs.core.Keyword(null,"state_","state_",957667102),null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),null], null), null),k__37390__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__37389__auto____$1),self__.__meta),k__37390__auto__);
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__37390__auto__)),null));
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__37387__auto__,k__37388__auto__,G__49359){
var self__ = this;
var this__37387__auto____$1 = this;
var pred__49363 = cljs.core.keyword_identical_QMARK_;
var expr__49364 = k__37388__auto__;
if(cljs.core.truth_(pred__49363.call(null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__49364))){
return (new taoensso.sente.ChAutoSocket(G__49359,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49363.call(null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__49364))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__49359,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49363.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__49364))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__49359,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49363.call(null,new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__49364))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__49359,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__37388__auto__,G__49359),null));
}
}
}
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__37392__auto__){
var self__ = this;
var this__37392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__37379__auto__,G__49359){
var self__ = this;
var this__37379__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__49359,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__37385__auto__,entry__37386__auto__){
var self__ = this;
var this__37385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__37386__auto__)){
return cljs.core._assoc.call(null,this__37385__auto____$1,cljs.core._nth.call(null,entry__37386__auto__,(0)),cljs.core._nth.call(null,entry__37386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__37385__auto____$1,entry__37386__auto__);
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
var map__49366 = opts;
var map__49366__$1 = ((((!((map__49366 == null)))?((((map__49366.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49366.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49366):map__49366);
var _QMARK_cb = cljs.core.get.call(null,map__49366__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
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
var downgraded_QMARK___49369 = cljs.core.atom.call(null,false);
cljs.core.add_watch.call(null,self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080),((function (downgraded_QMARK___49369,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
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
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,downgraded_QMARK___49369,false,true))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",1359,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (ever_opened_QMARK__,temp__4657__auto____$1,impl,temp__4657__auto__,downgraded_QMARK___49369,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
});})(ever_opened_QMARK__,temp__4657__auto____$1,impl,temp__4657__auto__,downgraded_QMARK___49369,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
,null)),null,-1122971043);

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
});})(downgraded_QMARK___49369,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
);

return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.new_ChWebSocket.call(null,ws_chsk_opts__$1));
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
;
cljs.core.reset_BANG_.call(null,self__.impl_,(function (){var or__36758__auto__ = ws_conn_BANG_.call(null);
if(cljs.core.truth_(or__36758__auto__)){
return or__36758__auto__;
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

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrSeq = (function (this__37414__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrWriter = (function (this__37414__auto__,writer__37415__auto__){
return cljs.core._write.call(null,writer__37415__auto__,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.__GT_ChAutoSocket = (function taoensso$sente$__GT_ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_){
return (new taoensso.sente.ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_,null,null,null));
});

taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__49361){
return (new taoensso.sente.ChAutoSocket(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104).cljs$core$IFn$_invoke$arity$1(G__49361),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327).cljs$core$IFn$_invoke$arity$1(G__49361),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__49361),new cljs.core.Keyword(null,"impl_","impl_",1218818179).cljs$core$IFn$_invoke$arity$1(G__49361),null,cljs.core.dissoc.call(null,G__49361,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts){
return taoensso.sente.map__GT_ChAutoSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false], null)),new cljs.core.Keyword(null,"impl_","impl_",1218818179),cljs.core.atom.call(null,null)], null),opts));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__49374 = (((protocol instanceof cljs.core.Keyword))?protocol.fqn:null);
switch (G__49374) {
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
}catch (e49375){if((e49375 instanceof Error)){
var e = e49375;
return e;
} else {
throw e49375;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:el #{\"https:\" \"http:\"}] protocol)",protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__49376 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__49376) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__49377 = protocol__$2;
switch (G__49377) {
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
var args__37840__auto__ = [];
var len__37833__auto___49398 = arguments.length;
var i__37834__auto___49399 = (0);
while(true){
if((i__37834__auto___49399 < len__37833__auto___49398)){
args__37840__auto__.push((arguments[i__37834__auto___49399]));

var G__49400 = (i__37834__auto___49399 + (1));
i__37834__auto___49399 = G__49400;
continue;
} else {
}
break;
}

var argseq__37841__auto__ = ((((1) < args__37840__auto__.length))?(new cljs.core.IndexedSeq(args__37840__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37841__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__49383){
var vec__49384 = p__49383;
var map__49387 = cljs.core.nth.call(null,vec__49384,(0),null);
var map__49387__$1 = ((((!((map__49387 == null)))?((((map__49387.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49387.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49387):map__49387);
var opts = map__49387__$1;
var ajax_opts = cljs.core.get.call(null,map__49387__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.call(null,map__49387__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var client_id = cljs.core.get.call(null,map__49387__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__36758__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__36758__auto__)){
return or__36758__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var protocol = cljs.core.get.call(null,map__49387__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var packer = cljs.core.get.call(null,map__49387__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.call(null,map__49387__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.call(null,map__49387__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.call(null,map__49387__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.call(null,map__49387__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var backoff_ms_fn = cljs.core.get.call(null,map__49387__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__49387__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__49384,(1),null);
var e_49401 = (function (){try{if(((function (vec__49384,map__49387,map__49387__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)),x);
});})(vec__49384,map__49387,map__49387__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e49389){if((e49389 instanceof Error)){
var e = e49389;
return e;
} else {
throw e49389;

}
}})();
if((e_49401 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:in #{:ws :ajax :auto}] type)",type,e_49401,null);
}

var e_49402 = (function (){try{if(taoensso.encore.nblank_str_QMARK_.call(null,client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e49390){if((e49390 instanceof Error)){
var e = e49390;
return e;
} else {
throw e49390;

}
}})();
if((e_49402 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/nblank-str? client-id)",client_id,e_49402,null);
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",1424,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__49384,map__49387,map__49387__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__49384,map__49387,map__49387__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,1479166272);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",1425,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__49384,map__49387,map__49387__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__49384,map__49387,map__49387__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,11299829);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var vec__49391 = (function (){var win_loc = taoensso.encore.get_win_loc.call(null);
var path__$1 = (function (){var or__36758__auto__ = path;
if(cljs.core.truth_(or__36758__auto__)){
return or__36758__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
var temp__4655__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ws","ws",86841443)),f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
} else {
var protocol__$1 = (function (){var or__36758__auto__ = protocol;
if(cljs.core.truth_(or__36758__auto__)){
return or__36758__auto__;
} else {
var or__36758__auto____$1 = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_loc);
if(cljs.core.truth_(or__36758__auto____$1)){
return or__36758__auto____$1;
} else {
return new cljs.core.Keyword(null,"http","http",382524695);
}
}
})();
var host__$1 = (function (){var or__36758__auto__ = host;
if(cljs.core.truth_(or__36758__auto__)){
return or__36758__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.sente.get_chsk_url.call(null,protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443)),taoensso.sente.get_chsk_url.call(null,protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
}
})();
var ws_url = cljs.core.nth.call(null,vec__49391,(0),null);
var ajax_url = cljs.core.nth.call(null,vec__49391,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(128))),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),(function (){var buf = cljs.core.async.sliding_buffer.call(null,(512));
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.chan.call(null,buf,cljs.core.map.call(null,((function (buf,packer__$1,vec__49391,ws_url,ajax_url,vec__49384,map__49387,map__49387__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(buf,packer__$1,vec__49391,ws_url,ajax_url,vec__49384,map__49387,map__49387__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
} else {
return cljs.core.async.chan.call(null,buf);
}
})()], null);
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),ws_kalive_ms], null);
var ws_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),ws_url,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var ajax_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),ajax_url,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),ajax_opts,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),ws_chsk_opts,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_.call(null,(function (){var G__49394 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__49394) {
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
var ev_msg_ch = cljs.core.async.chan.call(null,(1),cljs.core.map.call(null,((function (chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__4655__auto__,packer__$1,vec__49391,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__49384,map__49387,map__49387__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__49395 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__49395,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__49395,(1),null);
var ev__$1 = vec__49395;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),internal_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),chsk_state_,new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__4655__auto__,packer__$1,vec__49391,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__49384,map__49387,map__49387__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
cljs.core.async.pipe.call(null,ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ev_msg_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",1513,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto__,packer__$1,vec__49391,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__49384,map__49387,map__49387__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
});})(temp__4655__auto__,packer__$1,vec__49391,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__49384,map__49387,map__49387__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,-955189165);
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq49381){
var G__49382 = cljs.core.first.call(null,seq49381);
var seq49381__$1 = cljs.core.next.call(null,seq49381);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__49382,seq49381__$1);
});

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__49483 = opts;
var map__49483__$1 = ((((!((map__49483 == null)))?((((map__49483.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49483.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49483):map__49483);
var trace_evs_QMARK_ = cljs.core.get.call(null,map__49483__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__49483__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.call(null,map__49483__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
var ch_ctrl = cljs.core.async.chan.call(null);
var execute1 = ((function (map__49483,map__49483__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl){
return (function (f){
return f.call(null);
});})(map__49483,map__49483__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl))
;
var c__41620__auto___49562 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto___49562,map__49483,map__49483__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto___49562,map__49483,map__49483__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (state_49529){
var state_val_49530 = (state_49529[(1)]);
if((state_val_49530 === (7))){
var inst_49525 = (state_49529[(2)]);
var state_49529__$1 = state_49529;
var statearr_49531_49563 = state_49529__$1;
(statearr_49531_49563[(2)] = inst_49525);

(statearr_49531_49563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (1))){
var state_49529__$1 = state_49529;
var statearr_49532_49564 = state_49529__$1;
(statearr_49532_49564[(2)] = null);

(statearr_49532_49564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (4))){
var inst_49495 = (state_49529[(7)]);
var inst_49496 = (state_49529[(8)]);
var inst_49493 = (state_49529[(9)]);
var inst_49493__$1 = (state_49529[(2)]);
var inst_49494 = cljs.core.nth.call(null,inst_49493__$1,(0),null);
var inst_49495__$1 = cljs.core.nth.call(null,inst_49493__$1,(1),null);
var inst_49496__$1 = cljs.core._EQ_.call(null,inst_49495__$1,ch_ctrl);
var state_49529__$1 = (function (){var statearr_49533 = state_49529;
(statearr_49533[(10)] = inst_49494);

(statearr_49533[(7)] = inst_49495__$1);

(statearr_49533[(8)] = inst_49496__$1);

(statearr_49533[(9)] = inst_49493__$1);

return statearr_49533;
})();
if(inst_49496__$1){
var statearr_49534_49565 = state_49529__$1;
(statearr_49534_49565[(1)] = (5));

} else {
var statearr_49535_49566 = state_49529__$1;
(statearr_49535_49566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (15))){
var inst_49494 = (state_49529[(10)]);
var state_49529__$1 = state_49529;
var statearr_49536_49567 = state_49529__$1;
(statearr_49536_49567[(2)] = inst_49494);

(statearr_49536_49567[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (13))){
var inst_49511 = (state_49529[(2)]);
var state_49529__$1 = state_49529;
var statearr_49537_49568 = state_49529__$1;
(statearr_49537_49568[(2)] = inst_49511);

(statearr_49537_49568[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (6))){
var inst_49494 = (state_49529[(10)]);
var inst_49501 = (inst_49494 == null);
var inst_49502 = cljs.core.not.call(null,inst_49501);
var state_49529__$1 = state_49529;
if(inst_49502){
var statearr_49538_49569 = state_49529__$1;
(statearr_49538_49569[(1)] = (8));

} else {
var statearr_49539_49570 = state_49529__$1;
(statearr_49539_49570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (3))){
var inst_49527 = (state_49529[(2)]);
var state_49529__$1 = state_49529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49529__$1,inst_49527);
} else {
if((state_val_49530 === (12))){
var state_49529__$1 = state_49529;
var statearr_49540_49571 = state_49529__$1;
(statearr_49540_49571[(2)] = false);

(statearr_49540_49571[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (2))){
var inst_49489 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49490 = [ch_recv,ch_ctrl];
var inst_49491 = (new cljs.core.PersistentVector(null,2,(5),inst_49489,inst_49490,null));
var state_49529__$1 = state_49529;
return cljs.core.async.ioc_alts_BANG_.call(null,state_49529__$1,(4),inst_49491);
} else {
if((state_val_49530 === (11))){
var state_49529__$1 = state_49529;
var statearr_49541_49572 = state_49529__$1;
(statearr_49541_49572[(2)] = true);

(statearr_49541_49572[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (9))){
var state_49529__$1 = state_49529;
var statearr_49542_49573 = state_49529__$1;
(statearr_49542_49573[(2)] = false);

(statearr_49542_49573[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (5))){
var state_49529__$1 = state_49529;
var statearr_49543_49574 = state_49529__$1;
(statearr_49543_49574[(2)] = null);

(statearr_49543_49574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (14))){
var inst_49494 = (state_49529[(10)]);
var inst_49516 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49494);
var state_49529__$1 = state_49529;
var statearr_49544_49575 = state_49529__$1;
(statearr_49544_49575[(2)] = inst_49516);

(statearr_49544_49575[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (16))){
var inst_49494 = (state_49529[(10)]);
var inst_49495 = (state_49529[(7)]);
var inst_49496 = (state_49529[(8)]);
var inst_49493 = (state_49529[(9)]);
var inst_49519 = (state_49529[(2)]);
var inst_49520 = cljs.core.get.call(null,inst_49519,new cljs.core.Keyword(null,"event","event",301435442));
var inst_49521 = (function (){var vec__49486 = inst_49493;
var v = inst_49494;
var p = inst_49495;
var stop_QMARK_ = inst_49496;
var map__49499 = inst_49519;
var event_msg = inst_49519;
var event = inst_49520;
return ((function (vec__49486,v,p,stop_QMARK_,map__49499,event_msg,event,inst_49494,inst_49495,inst_49496,inst_49493,inst_49519,inst_49520,state_val_49530,c__41620__auto___49562,map__49483,map__49483__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",1540,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__49486,v,p,stop_QMARK_,map__49499,event_msg,event,inst_49494,inst_49495,inst_49496,inst_49493,inst_49519,inst_49520,state_val_49530,c__41620__auto___49562,map__49483,map__49483__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});})(vec__49486,v,p,stop_QMARK_,map__49499,event_msg,event,inst_49494,inst_49495,inst_49496,inst_49493,inst_49519,inst_49520,state_val_49530,c__41620__auto___49562,map__49483,map__49483__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,1755076109);
} else {
}

return event_msg_handler.call(null,(cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.sente.server_event_msg_QMARK_.call(null,event_msg))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e49547){if((e49547 instanceof Error)){
var e = e49547;
return e;
} else {
throw e49547;

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
}catch (e49548){if((e49548 instanceof Error)){
var e = e49548;
return e;
} else {
throw e49548;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,"(client-event-msg? event-msg)",event_msg,e,null);
}
})()));
}catch (e49545){if((e49545 instanceof Error)){
var e1 = e49545;
try{var temp__4655__auto__ = error_handler;
if(cljs.core.truth_(temp__4655__auto__)){
var eh = temp__4655__auto__;
return error_handler.call(null,e1,event_msg);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",1549,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto__,e1,vec__49486,v,p,stop_QMARK_,map__49499,event_msg,event,inst_49494,inst_49495,inst_49496,inst_49493,inst_49519,inst_49520,state_val_49530,c__41620__auto___49562,map__49483,map__49483__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,"Chsk router `event-msg-handler` error: %s",event], null);
});})(temp__4655__auto__,e1,vec__49486,v,p,stop_QMARK_,map__49499,event_msg,event,inst_49494,inst_49495,inst_49496,inst_49493,inst_49519,inst_49520,state_val_49530,c__41620__auto___49562,map__49483,map__49483__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,1599522588);
}
}catch (e49546){if((e49546 instanceof Error)){
var e2 = e49546;
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init8968526720476792321.clj",1550,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e2,e1,vec__49486,v,p,stop_QMARK_,map__49499,event_msg,event,inst_49494,inst_49495,inst_49496,inst_49493,inst_49519,inst_49520,state_val_49530,c__41620__auto___49562,map__49483,map__49483__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});})(e2,e1,vec__49486,v,p,stop_QMARK_,map__49499,event_msg,event,inst_49494,inst_49495,inst_49496,inst_49493,inst_49519,inst_49520,state_val_49530,c__41620__auto___49562,map__49483,map__49483__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,1076276638);
} else {
throw e49546;

}
}} else {
throw e49545;

}
}});
;})(vec__49486,v,p,stop_QMARK_,map__49499,event_msg,event,inst_49494,inst_49495,inst_49496,inst_49493,inst_49519,inst_49520,state_val_49530,c__41620__auto___49562,map__49483,map__49483__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var inst_49522 = execute1.call(null,inst_49521);
var state_49529__$1 = (function (){var statearr_49549 = state_49529;
(statearr_49549[(11)] = inst_49522);

return statearr_49549;
})();
var statearr_49550_49576 = state_49529__$1;
(statearr_49550_49576[(2)] = null);

(statearr_49550_49576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (10))){
var inst_49514 = (state_49529[(2)]);
var state_49529__$1 = state_49529;
if(cljs.core.truth_(inst_49514)){
var statearr_49551_49577 = state_49529__$1;
(statearr_49551_49577[(1)] = (14));

} else {
var statearr_49552_49578 = state_49529__$1;
(statearr_49552_49578[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (8))){
var inst_49494 = (state_49529[(10)]);
var inst_49504 = inst_49494.cljs$lang$protocol_mask$partition0$;
var inst_49505 = (inst_49504 & (64));
var inst_49506 = inst_49494.cljs$core$ISeq$;
var inst_49507 = (inst_49505) || (inst_49506);
var state_49529__$1 = state_49529;
if(cljs.core.truth_(inst_49507)){
var statearr_49553_49579 = state_49529__$1;
(statearr_49553_49579[(1)] = (11));

} else {
var statearr_49554_49580 = state_49529__$1;
(statearr_49554_49580[(1)] = (12));

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
});})(c__41620__auto___49562,map__49483,map__49483__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
;
return ((function (switch__41458__auto__,c__41620__auto___49562,map__49483,map__49483__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__41459__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__41459__auto____0 = (function (){
var statearr_49558 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49558[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__41459__auto__);

(statearr_49558[(1)] = (1));

return statearr_49558;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__41459__auto____1 = (function (state_49529){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_49529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e49559){if((e49559 instanceof Object)){
var ex__41462__auto__ = e49559;
var statearr_49560_49581 = state_49529;
(statearr_49560_49581[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49582 = state_49529;
state_49529 = G__49582;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__41459__auto__ = function(state_49529){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__41459__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__41459__auto____1.call(this,state_49529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__41459__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__41459__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto___49562,map__49483,map__49483__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var state__41622__auto__ = (function (){var statearr_49561 = f__41621__auto__.call(null);
(statearr_49561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto___49562);

return statearr_49561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto___49562,map__49483,map__49483__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
);


return ((function (map__49483,map__49483__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(map__49483,map__49483__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
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
var args__37840__auto__ = [];
var len__37833__auto___49592 = arguments.length;
var i__37834__auto___49593 = (0);
while(true){
if((i__37834__auto___49593 < len__37833__auto___49592)){
args__37840__auto__.push((arguments[i__37834__auto___49593]));

var G__49594 = (i__37834__auto___49593 + (1));
i__37834__auto___49593 = G__49594;
continue;
} else {
}
break;
}

var argseq__37841__auto__ = ((((2) < args__37840__auto__.length))?(new cljs.core.IndexedSeq(args__37840__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37841__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__49586){
var vec__49587 = p__49586;
var map__49590 = cljs.core.nth.call(null,vec__49587,(0),null);
var map__49590__$1 = ((((!((map__49590 == null)))?((((map__49590.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49590.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49590):map__49590);
var opts = map__49590__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__49590__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__49590__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.call(null,map__49590__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
return taoensso.sente._start_chsk_router_BANG_.call(null,new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq49583){
var G__49584 = cljs.core.first.call(null,seq49583);
var seq49583__$1 = cljs.core.next.call(null,seq49583);
var G__49585 = cljs.core.first.call(null,seq49583__$1);
var seq49583__$2 = cljs.core.next.call(null,seq49583__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__49584,G__49585,seq49583__$2);
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
var args__37840__auto__ = [];
var len__37833__auto___49604 = arguments.length;
var i__37834__auto___49605 = (0);
while(true){
if((i__37834__auto___49605 < len__37833__auto___49604)){
args__37840__auto__.push((arguments[i__37834__auto___49605]));

var G__49606 = (i__37834__auto___49605 + (1));
i__37834__auto___49605 = G__49606;
continue;
} else {
}
break;
}

var argseq__37841__auto__ = ((((2) < args__37840__auto__.length))?(new cljs.core.IndexedSeq(args__37840__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37841__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__49598){
var vec__49599 = p__49598;
var map__49602 = cljs.core.nth.call(null,vec__49599,(0),null);
var map__49602__$1 = ((((!((map__49602 == null)))?((((map__49602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49602):map__49602);
var opts = map__49602__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__49602__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__49602__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,cljs.core.not.call(null,new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq49595){
var G__49596 = cljs.core.first.call(null,seq49595);
var seq49595__$1 = cljs.core.next.call(null,seq49595);
var G__49597 = cljs.core.first.call(null,seq49595__$1);
var seq49595__$2 = cljs.core.next.call(null,seq49595__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__49596,G__49597,seq49595__$2);
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
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__49607,websocket_QMARK_){
var map__49610 = p__49607;
var map__49610__$1 = ((((!((map__49610 == null)))?((((map__49610.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49610.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49610):map__49610);
var location = map__49610__$1;
var protocol = cljs.core.get.call(null,map__49610__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.call(null,map__49610__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__49610__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.call(null,protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str(protocol__$1),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__36758__auto__ = path;
if(cljs.core.truth_(or__36758__auto__)){
return or__36758__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=sente.js.map