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
var vec__49271 = x;
var ev_id = cljs.core.nth.call(null,vec__49271,(0),null);
var _ = cljs.core.nth.call(null,vec__49271,(1),null);
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
var and__36760__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__36760__auto__){
var and__36760__auto____$1 = taoensso.encore.ks_EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__36760__auto____$1){
var map__49284 = x;
var map__49284__$1 = ((((!((map__49284 == null)))?((((map__49284.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49284.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49284):map__49284);
var ch_recv = cljs.core.get.call(null,map__49284__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__49284__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__49284__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__49284__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__36760__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__36760__auto____$2){
var and__36760__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__36760__auto____$3){
var and__36760__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(and__36760__auto____$4){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__36760__auto____$4;
}
} else {
return and__36760__auto____$3;
}
} else {
return and__36760__auto____$2;
}
} else {
return and__36760__auto____$1;
}
} else {
return and__36760__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__36760__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__36760__auto__){
var and__36760__auto____$1 = taoensso.encore.ks_EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__36760__auto____$1){
var map__49296 = x;
var map__49296__$1 = ((((!((map__49296 == null)))?((((map__49296.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49296.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49296):map__49296);
var ch_recv = cljs.core.get.call(null,map__49296__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__49296__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__49296__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.call(null,map__49296__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.call(null,map__49296__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.call(null,map__49296__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__49296__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var and__36760__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__36760__auto____$2){
var and__36760__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__36760__auto____$3){
var and__36760__auto____$4 = taoensso.encore.atom_QMARK_.call(null,connected_uids);
if(and__36760__auto____$4){
var and__36760__auto____$5 = cljs.core.map_QMARK_.call(null,ring_req);
if(and__36760__auto____$5){
var and__36760__auto____$6 = taoensso.encore.nblank_str_QMARK_.call(null,client_id);
if(and__36760__auto____$6){
var and__36760__auto____$7 = taoensso.sente.event_QMARK_.call(null,event);
if(cljs.core.truth_(and__36760__auto____$7)){
return ((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_reply_fn));
} else {
return and__36760__auto____$7;
}
} else {
return and__36760__auto____$6;
}
} else {
return and__36760__auto____$5;
}
} else {
return and__36760__auto____$4;
}
} else {
return and__36760__auto____$3;
}
} else {
return and__36760__auto____$2;
}
} else {
return and__36760__auto____$1;
}
} else {
return and__36760__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__49298){
var map__49304 = p__49298;
var map__49304__$1 = ((((!((map__49304 == null)))?((((map__49304.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49304.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49304):map__49304);
var ev_msg = map__49304__$1;
var event = cljs.core.get.call(null,map__49304__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__49304__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__49306 = taoensso.sente.as_event.call(null,event);
var ev_id = cljs.core.nth.call(null,vec__49306,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__49306,(1),null);
var valid_event = vec__49306;
var ev_msg_STAR_ = cljs.core.merge.call(null,ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null));
if(cljs.core.not.call(null,taoensso.sente.server_event_msg_QMARK_.call(null,ev_msg_STAR_))){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",187,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__49306,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__49304,map__49304__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__49306,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__49304,map__49304__$1,ev_msg,event,_QMARK_reply_fn))
,null)),null,340479870);
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
}catch (e49316){var t = e49316;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",208,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (t,wrapped_QMARK_,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t,wrapped_QMARK_,pstr))
,null)),null,-772991834);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),pstr], null);
}})();
var vec__49313 = ((wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__49313,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__49313,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",214,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (wrapped_QMARK_,pstr,clj,vec__49313,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(wrapped_QMARK_,pstr,clj,vec__49313,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null,404939389);

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
var args49317 = [];
var len__37847__auto___49320 = arguments.length;
var i__37848__auto___49321 = (0);
while(true){
if((i__37848__auto___49321 < len__37847__auto___49320)){
args49317.push((arguments[i__37848__auto___49321]));

var G__49322 = (i__37848__auto___49321 + (1));
i__37848__auto___49321 = G__49322;
continue;
} else {
}
break;
}

var G__49319 = args49317.length;
switch (G__49319) {
case 3:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49317.length)].join('')));

}
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,_QMARK_packer_meta,clj){
var pstr = [cljs.core.str("-"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,clj,_QMARK_packer_meta)))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",224,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (unwrapped): %s -> %s",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_packer_meta,clj], null),pstr], null);
});})(pstr))
,null)),null,425661738);

return pstr;
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4 = (function (packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
var pstr = [cljs.core.str("+"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,wrapped_clj,_QMARK_packer_meta)))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",234,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_uuid__$1,wrapped_clj,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (wrapped): %s -> %s",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_packer_meta,clj,_QMARK_cb_uuid__$1], null),pstr], null);
});})(_QMARK_cb_uuid__$1,wrapped_clj,pstr))
,null)),null,1346573890);

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

taoensso.sente.EdnPacker.cljs$lang$ctorPrWriter = (function (this__37378__auto__,writer__37379__auto__,opt__37380__auto__){
return cljs.core._write.call(null,writer__37379__auto__,"taoensso.sente/EdnPacker");
});

taoensso.sente.__GT_EdnPacker = (function taoensso$sente$__GT_EdnPacker(){
return (new taoensso.sente.EdnPacker());
});

taoensso.sente.default_edn_packer = (new taoensso.sente.EdnPacker());
taoensso.sente.coerce_packer = (function taoensso$sente$coerce_packer(x){
if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"edn","edn",1317840885))){
return taoensso.sente.default_edn_packer;
} else {
var e = (function (){try{if((function (p1__49324_SHARP_){
if(!((p1__49324_SHARP_ == null))){
if((false) || (p1__49324_SHARP_.taoensso$sente$interfaces$IPacker$)){
return true;
} else {
if((!p1__49324_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__49324_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__49324_SHARP_);
}
}).call(null,x)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e49327){if((e49327 instanceof Error)){
var e = e49327;
return e;
} else {
throw e49327;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__49324#] (satisfies? interfaces/IPacker p1__49324#)) x)",x,e,null);
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
var args__37854__auto__ = [];
var len__37847__auto___49635 = arguments.length;
var i__37848__auto___49636 = (0);
while(true){
if((i__37848__auto___49636 < len__37847__auto___49635)){
args__37854__auto__.push((arguments[i__37848__auto___49636]));

var G__49637 = (i__37848__auto___49636 + (1));
i__37848__auto___49636 = G__49637;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((1) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37855__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__49332){
var vec__49333 = p__49332;
var map__49336 = cljs.core.nth.call(null,vec__49333,(0),null);
var map__49336__$1 = ((((!((map__49336 == null)))?((((map__49336.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49336.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49336):map__49336);
var recv_buf_or_n = cljs.core.get.call(null,map__49336__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(1000)));
var ws_kalive_ms = cljs.core.get.call(null,map__49336__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(25)));
var lp_timeout_ms = cljs.core.get.call(null,map__49336__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var send_buf_ms_ajax = cljs.core.get.call(null,map__49336__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var send_buf_ms_ws = cljs.core.get.call(null,map__49336__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var user_id_fn = cljs.core.get.call(null,map__49336__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),((function (vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
});})(vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.call(null,map__49336__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),((function (vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
return (function (ring_req){
var or__36772__auto__ = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__36772__auto__)){
return or__36772__auto__;
} else {
var or__36772__auto____$1 = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__36772__auto____$1)){
return or__36772__auto____$1;
} else {
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
});})(vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.call(null,map__49336__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),((function (vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.call(null,map__49336__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e49338){if((e49338 instanceof Error)){
var e = e49338;
return e;
} else {
throw e49338;

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
}catch (e49339){if((e49339 instanceof Error)){
var e = e49339;
return e;
} else {
throw e49339;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e,null);
}
})()], null);

var e_49638 = (function (){try{if(((function (vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__49329_SHARP_){
if(!((p1__49329_SHARP_ == null))){
if((false) || (p1__49329_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)){
return true;
} else {
if((!p1__49329_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__49329_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__49329_SHARP_);
}
});})(vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
.call(null,web_server_ch_adapter)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e49340){if((e49340 instanceof Error)){
var e = e49340;
return e;
} else {
throw e49340;

}
}})();
if((e_49638 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__49329#] (satisfies? interfaces/IServerChanAdapter p1__49329#)) web-server-ch-adapter)",web_server_ch_adapter,e_49638,null);
}

var max_ms_49639 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_49639)){
throw cljs.core.ex_info.call(null,[cljs.core.str(":lp-timeout-ms must be < "),cljs.core.str(max_ms_49639)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),lp_timeout_ms,new cljs.core.Keyword(null,"default-client-side-ajax-timeout-ms","default-client-side-ajax-timeout-ms",1149929762),max_ms_49639], null));
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var ch_recv = cljs.core.async.chan.call(null,recv_buf_or_n);
var user_id_fn__$1 = ((function (packer__$1,ch_recv,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__36772__auto__ = user_id_fn.call(null,cljs.core.assoc.call(null,ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id));
if(cljs.core.truth_(or__36772__auto__)){
return or__36772__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});})(packer__$1,ch_recv,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var conns_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var upd_conn_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var G__49640 = null;
var G__49640__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var vec__49342 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.call(null,vec__49342,(0),null);
var _udt = cljs.core.nth.call(null,vec__49342,(1),null);
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),_QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
var G__49640__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),new__QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
G__49640 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__49640__3.call(this,conn_type,uid,client_id);
case 4:
return G__49640__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__49640.cljs$core$IFn$_invoke$arity$3 = G__49640__3;
G__49640.cljs$core$IFn$_invoke$arity$4 = G__49640__4;
return G__49640;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e49345){if((e49345 instanceof Error)){
var e = e49345;
return e;
} else {
throw e49345;

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

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__49346){
var map__49347 = p__49346;
var map__49347__$1 = ((((!((map__49347 == null)))?((((map__49347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49347):map__49347);
var old_m = map__49347__$1;
var ws = cljs.core.get.call(null,map__49347__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax__$1 = cljs.core.get.call(null,map__49347__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__49347__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__49349 = (((conn_type instanceof cljs.core.Keyword))?conn_type.fqn:null);
switch (G__49349) {
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
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e49350){if((e49350 instanceof Error)){
var e = e49350;
return e;
} else {
throw e49350;

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

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__49351){
var map__49352 = p__49351;
var map__49352__$1 = ((((!((map__49352 == null)))?((((map__49352.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49352.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49352):map__49352);
var old_m = map__49352__$1;
var ws = cljs.core.get.call(null,map__49352__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax__$1 = cljs.core.get.call(null,map__49352__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__49352__$1,new cljs.core.Keyword(null,"any","any",1705907423));
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
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__49642__delegate = function (user_id,ev,p__49354){
var vec__49355 = p__49354;
var map__49358 = cljs.core.nth.call(null,vec__49355,(0),null);
var map__49358__$1 = ((((!((map__49358 == null)))?((((map__49358.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49358.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49358):map__49358);
var opts = map__49358__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__49358__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_49643 = ((cljs.core._EQ_.call(null,user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __49644 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",405,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_49643,vec__49355,map__49358,map__49358__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_49643,ev], null);
});})(uid_49643,vec__49355,map__49358,map__49358__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1536884000);
var __49645__$1 = (cljs.core.truth_(uid_49643)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Support for sending to `nil` user-ids has been REMOVED. "),cljs.core.str("Please send to `:sente/all-users-without-uid` instead.")].join('')),cljs.core.str("\n"),cljs.core.str("uid")].join('')))})());
var __49646__$2 = taoensso.sente.assert_event.call(null,ev);
var ev_uuid_49647 = taoensso.encore.uuid_str.call(null);
var flush_buffer_BANG__49648 = ((function (uid_49643,__49644,__49645__$1,__49646__$2,ev_uuid_49647,vec__49355,map__49358,map__49358__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type){
var temp__4657__auto__ = taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),((function (uid_49643,__49644,__49645__$1,__49646__$2,ev_uuid_49647,vec__49355,map__49358,map__49358__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__49360 = cljs.core.get.call(null,m,uid_49643);
var ___$3 = cljs.core.nth.call(null,vec__49360,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__49360,(1),null);
if(cljs.core.contains_QMARK_.call(null,ev_uuids,ev_uuid_49647)){
return taoensso.encore.swapped.call(null,cljs.core.dissoc.call(null,m,uid_49643),cljs.core.get.call(null,m,uid_49643));
} else {
return taoensso.encore.swapped.call(null,m,null);
}
});})(uid_49643,__49644,__49645__$1,__49646__$2,ev_uuid_49647,vec__49355,map__49358,map__49358__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__4657__auto__)){
var pulled = temp__4657__auto__;
var vec__49363 = pulled;
var buffered_evs = cljs.core.nth.call(null,vec__49363,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__49363,(1),null);
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",441,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__49363,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_49643,__49644,__49645__$1,__49646__$2,ev_uuid_49647,vec__49355,map__49358,map__49358__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s (with meta %s)",buffered_evs_ppstr,combined_packer_meta], null);
});})(packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__49363,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_49643,__49644,__49645__$1,__49646__$2,ev_uuid_49647,vec__49355,map__49358,map__49358__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1111175595);

var G__49366 = (((conn_type instanceof cljs.core.Keyword))?conn_type.fqn:null);
switch (G__49366) {
case "ws":
return taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_49643,buffered_evs_ppstr,upd_conn_BANG_);

break;
case "ajax":
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_49643,buffered_evs_ppstr);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(conn_type)].join('')));

}
} else {
return null;
}
});})(uid_49643,__49644,__49645__$1,__49646__$2,ev_uuid_49647,vec__49355,map__49358,map__49358__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.call(null,ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",452,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_49643,__49644,__49645__$1,__49646__$2,ev_uuid_49647,flush_buffer_BANG__49648,vec__49355,map__49358,map__49358__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_49643], null);
});})(uid_49643,__49644,__49645__$1,__49646__$2,ev_uuid_49647,flush_buffer_BANG__49648,vec__49355,map__49358,map__49358__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1484150550);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__49648.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__49648.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
}

var seq__49367_49650 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_49643], null))));
var chunk__49368_49651 = null;
var count__49369_49652 = (0);
var i__49370_49653 = (0);
while(true){
if((i__49370_49653 < count__49369_49652)){
var vec__49371_49654 = cljs.core._nth.call(null,chunk__49368_49651,i__49370_49653);
var _QMARK_sch_49655 = cljs.core.nth.call(null,vec__49371_49654,(0),null);
var _udt_49656 = cljs.core.nth.call(null,vec__49371_49654,(1),null);
var temp__4657__auto___49657 = _QMARK_sch_49655;
if(cljs.core.truth_(temp__4657__auto___49657)){
var sch_49658 = temp__4657__auto___49657;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_49658);
} else {
}

var G__49659 = seq__49367_49650;
var G__49660 = chunk__49368_49651;
var G__49661 = count__49369_49652;
var G__49662 = (i__49370_49653 + (1));
seq__49367_49650 = G__49659;
chunk__49368_49651 = G__49660;
count__49369_49652 = G__49661;
i__49370_49653 = G__49662;
continue;
} else {
var temp__4657__auto___49663 = cljs.core.seq.call(null,seq__49367_49650);
if(temp__4657__auto___49663){
var seq__49367_49664__$1 = temp__4657__auto___49663;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49367_49664__$1)){
var c__37583__auto___49665 = cljs.core.chunk_first.call(null,seq__49367_49664__$1);
var G__49666 = cljs.core.chunk_rest.call(null,seq__49367_49664__$1);
var G__49667 = c__37583__auto___49665;
var G__49668 = cljs.core.count.call(null,c__37583__auto___49665);
var G__49669 = (0);
seq__49367_49650 = G__49666;
chunk__49368_49651 = G__49667;
count__49369_49652 = G__49668;
i__49370_49653 = G__49669;
continue;
} else {
var vec__49374_49670 = cljs.core.first.call(null,seq__49367_49664__$1);
var _QMARK_sch_49671 = cljs.core.nth.call(null,vec__49374_49670,(0),null);
var _udt_49672 = cljs.core.nth.call(null,vec__49374_49670,(1),null);
var temp__4657__auto___49673__$1 = _QMARK_sch_49671;
if(cljs.core.truth_(temp__4657__auto___49673__$1)){
var sch_49674 = temp__4657__auto___49673__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_49674);
} else {
}

var G__49675 = cljs.core.next.call(null,seq__49367_49664__$1);
var G__49676 = null;
var G__49677 = (0);
var G__49678 = (0);
seq__49367_49650 = G__49675;
chunk__49368_49651 = G__49676;
count__49369_49652 = G__49677;
i__49370_49653 = G__49678;
continue;
}
} else {
}
}
break;
}

var seq__49377_49679 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_49643], null))));
var chunk__49378_49680 = null;
var count__49379_49681 = (0);
var i__49380_49682 = (0);
while(true){
if((i__49380_49682 < count__49379_49681)){
var vec__49381_49683 = cljs.core._nth.call(null,chunk__49378_49680,i__49380_49682);
var _QMARK_sch_49684 = cljs.core.nth.call(null,vec__49381_49683,(0),null);
var _udt_49685 = cljs.core.nth.call(null,vec__49381_49683,(1),null);
var temp__4657__auto___49686 = _QMARK_sch_49684;
if(cljs.core.truth_(temp__4657__auto___49686)){
var sch_49687 = temp__4657__auto___49686;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_49687);
} else {
}

var G__49688 = seq__49377_49679;
var G__49689 = chunk__49378_49680;
var G__49690 = count__49379_49681;
var G__49691 = (i__49380_49682 + (1));
seq__49377_49679 = G__49688;
chunk__49378_49680 = G__49689;
count__49379_49681 = G__49690;
i__49380_49682 = G__49691;
continue;
} else {
var temp__4657__auto___49692 = cljs.core.seq.call(null,seq__49377_49679);
if(temp__4657__auto___49692){
var seq__49377_49693__$1 = temp__4657__auto___49692;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49377_49693__$1)){
var c__37583__auto___49694 = cljs.core.chunk_first.call(null,seq__49377_49693__$1);
var G__49695 = cljs.core.chunk_rest.call(null,seq__49377_49693__$1);
var G__49696 = c__37583__auto___49694;
var G__49697 = cljs.core.count.call(null,c__37583__auto___49694);
var G__49698 = (0);
seq__49377_49679 = G__49695;
chunk__49378_49680 = G__49696;
count__49379_49681 = G__49697;
i__49380_49682 = G__49698;
continue;
} else {
var vec__49384_49699 = cljs.core.first.call(null,seq__49377_49693__$1);
var _QMARK_sch_49700 = cljs.core.nth.call(null,vec__49384_49699,(0),null);
var _udt_49701 = cljs.core.nth.call(null,vec__49384_49699,(1),null);
var temp__4657__auto___49702__$1 = _QMARK_sch_49700;
if(cljs.core.truth_(temp__4657__auto___49702__$1)){
var sch_49703 = temp__4657__auto___49702__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_49703);
} else {
}

var G__49704 = cljs.core.next.call(null,seq__49377_49693__$1);
var G__49705 = null;
var G__49706 = (0);
var G__49707 = (0);
seq__49377_49679 = G__49704;
chunk__49378_49680 = G__49705;
count__49379_49681 = G__49706;
i__49380_49682 = G__49707;
continue;
}
} else {
}
}
break;
}
} else {
var seq__49387_49708 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__49388_49709 = null;
var count__49389_49710 = (0);
var i__49390_49711 = (0);
while(true){
if((i__49390_49711 < count__49389_49710)){
var conn_type_49712 = cljs.core._nth.call(null,chunk__49388_49709,i__49390_49711);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_49712,uid_49643], null),((function (seq__49387_49708,chunk__49388_49709,count__49389_49710,i__49390_49711,conn_type_49712,uid_49643,__49644,__49645__$1,__49646__$2,ev_uuid_49647,flush_buffer_BANG__49648,vec__49355,map__49358,map__49358__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_49647], true)], null);
} else {
var vec__49391 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__49391,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__49391,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_49647)], null);
}
});})(seq__49387_49708,chunk__49388_49709,count__49389_49710,i__49390_49711,conn_type_49712,uid_49643,__49644,__49645__$1,__49646__$2,ev_uuid_49647,flush_buffer_BANG__49648,vec__49355,map__49358,map__49358__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__49713 = seq__49387_49708;
var G__49714 = chunk__49388_49709;
var G__49715 = count__49389_49710;
var G__49716 = (i__49390_49711 + (1));
seq__49387_49708 = G__49713;
chunk__49388_49709 = G__49714;
count__49389_49710 = G__49715;
i__49390_49711 = G__49716;
continue;
} else {
var temp__4657__auto___49717 = cljs.core.seq.call(null,seq__49387_49708);
if(temp__4657__auto___49717){
var seq__49387_49718__$1 = temp__4657__auto___49717;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49387_49718__$1)){
var c__37583__auto___49719 = cljs.core.chunk_first.call(null,seq__49387_49718__$1);
var G__49720 = cljs.core.chunk_rest.call(null,seq__49387_49718__$1);
var G__49721 = c__37583__auto___49719;
var G__49722 = cljs.core.count.call(null,c__37583__auto___49719);
var G__49723 = (0);
seq__49387_49708 = G__49720;
chunk__49388_49709 = G__49721;
count__49389_49710 = G__49722;
i__49390_49711 = G__49723;
continue;
} else {
var conn_type_49724 = cljs.core.first.call(null,seq__49387_49718__$1);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_49724,uid_49643], null),((function (seq__49387_49708,chunk__49388_49709,count__49389_49710,i__49390_49711,conn_type_49724,seq__49387_49718__$1,temp__4657__auto___49717,uid_49643,__49644,__49645__$1,__49646__$2,ev_uuid_49647,flush_buffer_BANG__49648,vec__49355,map__49358,map__49358__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_49647], true)], null);
} else {
var vec__49394 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__49394,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__49394,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_49647)], null);
}
});})(seq__49387_49708,chunk__49388_49709,count__49389_49710,i__49390_49711,conn_type_49724,seq__49387_49718__$1,temp__4657__auto___49717,uid_49643,__49644,__49645__$1,__49646__$2,ev_uuid_49647,flush_buffer_BANG__49648,vec__49355,map__49358,map__49358__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__49725 = cljs.core.next.call(null,seq__49387_49718__$1);
var G__49726 = null;
var G__49727 = (0);
var G__49728 = (0);
seq__49387_49708 = G__49725;
chunk__49388_49709 = G__49726;
count__49389_49710 = G__49727;
i__49390_49711 = G__49728;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__49648.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__49648.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
var ws_timeout_49729 = cljs.core.async.timeout.call(null,send_buf_ms_ws);
var ajax_timeout_49730 = cljs.core.async.timeout.call(null,send_buf_ms_ajax);
var c__41583__auto___49731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41583__auto___49731,ws_timeout_49729,ajax_timeout_49730,uid_49643,__49644,__49645__$1,__49646__$2,ev_uuid_49647,flush_buffer_BANG__49648,vec__49355,map__49358,map__49358__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__41584__auto__ = (function (){var switch__41471__auto__ = ((function (c__41583__auto___49731,ws_timeout_49729,ajax_timeout_49730,uid_49643,__49644,__49645__$1,__49646__$2,ev_uuid_49647,flush_buffer_BANG__49648,vec__49355,map__49358,map__49358__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_49401){
var state_val_49402 = (state_49401[(1)]);
if((state_val_49402 === (1))){
var state_49401__$1 = state_49401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49401__$1,(2),ws_timeout_49729);
} else {
if((state_val_49402 === (2))){
var inst_49398 = (state_49401[(2)]);
var inst_49399 = flush_buffer_BANG__49648.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));
var state_49401__$1 = (function (){var statearr_49403 = state_49401;
(statearr_49403[(7)] = inst_49398);

return statearr_49403;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49401__$1,inst_49399);
} else {
return null;
}
}
});})(c__41583__auto___49731,ws_timeout_49729,ajax_timeout_49730,uid_49643,__49644,__49645__$1,__49646__$2,ev_uuid_49647,flush_buffer_BANG__49648,vec__49355,map__49358,map__49358__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__41471__auto__,c__41583__auto___49731,ws_timeout_49729,ajax_timeout_49730,uid_49643,__49644,__49645__$1,__49646__$2,ev_uuid_49647,flush_buffer_BANG__49648,vec__49355,map__49358,map__49358__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__41472__auto__ = null;
var taoensso$sente$state_machine__41472__auto____0 = (function (){
var statearr_49407 = [null,null,null,null,null,null,null,null];
(statearr_49407[(0)] = taoensso$sente$state_machine__41472__auto__);

(statearr_49407[(1)] = (1));

return statearr_49407;
});
var taoensso$sente$state_machine__41472__auto____1 = (function (state_49401){
while(true){
var ret_value__41473__auto__ = (function (){try{while(true){
var result__41474__auto__ = switch__41471__auto__.call(null,state_49401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41474__auto__;
}
break;
}
}catch (e49408){if((e49408 instanceof Object)){
var ex__41475__auto__ = e49408;
var statearr_49409_49732 = state_49401;
(statearr_49409_49732[(5)] = ex__41475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49733 = state_49401;
state_49401 = G__49733;
continue;
} else {
return ret_value__41473__auto__;
}
break;
}
});
taoensso$sente$state_machine__41472__auto__ = function(state_49401){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__41472__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__41472__auto____1.call(this,state_49401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__41472__auto____0;
taoensso$sente$state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__41472__auto____1;
return taoensso$sente$state_machine__41472__auto__;
})()
;})(switch__41471__auto__,c__41583__auto___49731,ws_timeout_49729,ajax_timeout_49730,uid_49643,__49644,__49645__$1,__49646__$2,ev_uuid_49647,flush_buffer_BANG__49648,vec__49355,map__49358,map__49358__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__41585__auto__ = (function (){var statearr_49410 = f__41584__auto__.call(null);
(statearr_49410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41583__auto___49731);

return statearr_49410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41585__auto__);
});})(c__41583__auto___49731,ws_timeout_49729,ajax_timeout_49730,uid_49643,__49644,__49645__$1,__49646__$2,ev_uuid_49647,flush_buffer_BANG__49648,vec__49355,map__49358,map__49358__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__41583__auto___49734 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41583__auto___49734,ws_timeout_49729,ajax_timeout_49730,uid_49643,__49644,__49645__$1,__49646__$2,ev_uuid_49647,flush_buffer_BANG__49648,vec__49355,map__49358,map__49358__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__41584__auto__ = (function (){var switch__41471__auto__ = ((function (c__41583__auto___49734,ws_timeout_49729,ajax_timeout_49730,uid_49643,__49644,__49645__$1,__49646__$2,ev_uuid_49647,flush_buffer_BANG__49648,vec__49355,map__49358,map__49358__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_49415){
var state_val_49416 = (state_49415[(1)]);
if((state_val_49416 === (1))){
var state_49415__$1 = state_49415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49415__$1,(2),ajax_timeout_49730);
} else {
if((state_val_49416 === (2))){
var inst_49412 = (state_49415[(2)]);
var inst_49413 = flush_buffer_BANG__49648.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_49415__$1 = (function (){var statearr_49417 = state_49415;
(statearr_49417[(7)] = inst_49412);

return statearr_49417;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49415__$1,inst_49413);
} else {
return null;
}
}
});})(c__41583__auto___49734,ws_timeout_49729,ajax_timeout_49730,uid_49643,__49644,__49645__$1,__49646__$2,ev_uuid_49647,flush_buffer_BANG__49648,vec__49355,map__49358,map__49358__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__41471__auto__,c__41583__auto___49734,ws_timeout_49729,ajax_timeout_49730,uid_49643,__49644,__49645__$1,__49646__$2,ev_uuid_49647,flush_buffer_BANG__49648,vec__49355,map__49358,map__49358__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__41472__auto__ = null;
var taoensso$sente$state_machine__41472__auto____0 = (function (){
var statearr_49421 = [null,null,null,null,null,null,null,null];
(statearr_49421[(0)] = taoensso$sente$state_machine__41472__auto__);

(statearr_49421[(1)] = (1));

return statearr_49421;
});
var taoensso$sente$state_machine__41472__auto____1 = (function (state_49415){
while(true){
var ret_value__41473__auto__ = (function (){try{while(true){
var result__41474__auto__ = switch__41471__auto__.call(null,state_49415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41474__auto__;
}
break;
}
}catch (e49422){if((e49422 instanceof Object)){
var ex__41475__auto__ = e49422;
var statearr_49423_49735 = state_49415;
(statearr_49423_49735[(5)] = ex__41475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49736 = state_49415;
state_49415 = G__49736;
continue;
} else {
return ret_value__41473__auto__;
}
break;
}
});
taoensso$sente$state_machine__41472__auto__ = function(state_49415){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__41472__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__41472__auto____1.call(this,state_49415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__41472__auto____0;
taoensso$sente$state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__41472__auto____1;
return taoensso$sente$state_machine__41472__auto__;
})()
;})(switch__41471__auto__,c__41583__auto___49734,ws_timeout_49729,ajax_timeout_49730,uid_49643,__49644,__49645__$1,__49646__$2,ev_uuid_49647,flush_buffer_BANG__49648,vec__49355,map__49358,map__49358__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__41585__auto__ = (function (){var statearr_49424 = f__41584__auto__.call(null);
(statearr_49424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41583__auto___49734);

return statearr_49424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41585__auto__);
});})(c__41583__auto___49734,ws_timeout_49729,ajax_timeout_49730,uid_49643,__49644,__49645__$1,__49646__$2,ev_uuid_49647,flush_buffer_BANG__49648,vec__49355,map__49358,map__49358__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}
}

return null;
};
var G__49642 = function (user_id,ev,var_args){
var p__49354 = null;
if (arguments.length > 2) {
var G__49737__i = 0, G__49737__a = new Array(arguments.length -  2);
while (G__49737__i < G__49737__a.length) {G__49737__a[G__49737__i] = arguments[G__49737__i + 2]; ++G__49737__i;}
  p__49354 = new cljs.core.IndexedSeq(G__49737__a,0);
} 
return G__49642__delegate.call(this,user_id,ev,p__49354);};
G__49642.cljs$lang$maxFixedArity = 2;
G__49642.cljs$lang$applyTo = (function (arglist__49738){
var user_id = cljs.core.first(arglist__49738);
arglist__49738 = cljs.core.next(arglist__49738);
var ev = cljs.core.first(arglist__49738);
var p__49354 = cljs.core.rest(arglist__49738);
return G__49642__delegate(user_id,ev,p__49354);
});
G__49642.cljs$core$IFn$_invoke$arity$variadic = G__49642__delegate;
return G__49642;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.not.call(null,websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__49425 = taoensso.sente.unpack.call(null,packer__$1,ppstr);
var clj = cljs.core.nth.call(null,vec__49425,(0),null);
var has_cb_QMARK_ = cljs.core.nth.call(null,vec__49425,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.call(null,false);
return ((function (replied_QMARK__,params,ppstr,client_id,vec__49425,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (resp_clj){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,replied_QMARK__,false,true))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",521,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (replied_QMARK__,params,ppstr,client_id,vec__49425,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
});})(replied_QMARK__,params,ppstr,client_id,vec__49425,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1534390872);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj));
} else {
return null;
}
});
;})(replied_QMARK__,params,ppstr,client_id,vec__49425,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1.call(null,ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__4657__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__41583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41583__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__49425,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__41584__auto__ = (function (){var switch__41471__auto__ = ((function (c__41583__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__49425,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_49433){
var state_val_49434 = (state_49433[(1)]);
if((state_val_49434 === (1))){
var inst_49428 = cljs.core.async.timeout.call(null,ms);
var state_49433__$1 = state_49433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49433__$1,(2),inst_49428);
} else {
if((state_val_49434 === (2))){
var inst_49430 = (state_49433[(2)]);
var inst_49431 = reply_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_49433__$1 = (function (){var statearr_49435 = state_49433;
(statearr_49435[(7)] = inst_49430);

return statearr_49435;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49433__$1,inst_49431);
} else {
return null;
}
}
});})(c__41583__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__49425,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__41471__auto__,c__41583__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__49425,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__41472__auto__ = null;
var taoensso$sente$state_machine__41472__auto____0 = (function (){
var statearr_49439 = [null,null,null,null,null,null,null,null];
(statearr_49439[(0)] = taoensso$sente$state_machine__41472__auto__);

(statearr_49439[(1)] = (1));

return statearr_49439;
});
var taoensso$sente$state_machine__41472__auto____1 = (function (state_49433){
while(true){
var ret_value__41473__auto__ = (function (){try{while(true){
var result__41474__auto__ = switch__41471__auto__.call(null,state_49433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41474__auto__;
}
break;
}
}catch (e49440){if((e49440 instanceof Object)){
var ex__41475__auto__ = e49440;
var statearr_49441_49739 = state_49433;
(statearr_49441_49739[(5)] = ex__41475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49740 = state_49433;
state_49433 = G__49740;
continue;
} else {
return ret_value__41473__auto__;
}
break;
}
});
taoensso$sente$state_machine__41472__auto__ = function(state_49433){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__41472__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__41472__auto____1.call(this,state_49433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__41472__auto____0;
taoensso$sente$state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__41472__auto____1;
return taoensso$sente$state_machine__41472__auto__;
})()
;})(switch__41471__auto__,c__41583__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__49425,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__41585__auto__ = (function (){var statearr_49442 = f__41584__auto__.call(null);
(statearr_49442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41583__auto__);

return statearr_49442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41585__auto__);
});})(c__41583__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__49425,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__41583__auto__;
} else {
return null;
}
} else {
return reply_fn.call(null,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var sch_uuid = taoensso.encore.uuid_str.call(null,(6));
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var csrf_token = csrf_token_fn.call(null,ring_req);
var uid = user_id_fn__$1.call(null,ring_req,client_id);
var receive_event_msg_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
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
;})(sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_handshake_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",566,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-handshake!"], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1275204761);

var _QMARK_handshake_data = handshake_data_fn.call(null,ring_req);
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,null,handshake_ev));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_.call(null,client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",577,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(err_msg),cljs.core.str(": %s")].join(''),ring_req], null);
});})(err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-857560842);

throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",586,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-761405739);
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
var c__41583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41583__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__41584__auto__ = (function (){var switch__41471__auto__ = ((function (c__41583__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_49478){
var state_val_49479 = (state_49478[(1)]);
if((state_val_49479 === (7))){
var inst_49474 = (state_49478[(2)]);
var state_49478__$1 = state_49478;
var statearr_49480_49741 = state_49478__$1;
(statearr_49480_49741[(2)] = inst_49474);

(statearr_49480_49741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49479 === (1))){
var inst_49443 = udt_open;
var state_49478__$1 = (function (){var statearr_49481 = state_49478;
(statearr_49481[(7)] = inst_49443);

return statearr_49481;
})();
var statearr_49482_49742 = state_49478__$1;
(statearr_49482_49742[(2)] = null);

(statearr_49482_49742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49479 === (4))){
var inst_49452 = (state_49478[(8)]);
var inst_49447 = (state_49478[(2)]);
var inst_49448 = cljs.core.deref.call(null,conns_);
var inst_49449 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49450 = [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id];
var inst_49451 = (new cljs.core.PersistentVector(null,3,(5),inst_49449,inst_49450,null));
var inst_49452__$1 = cljs.core.get_in.call(null,inst_49448,inst_49451);
var state_49478__$1 = (function (){var statearr_49483 = state_49478;
(statearr_49483[(9)] = inst_49447);

(statearr_49483[(8)] = inst_49452__$1);

return statearr_49483;
})();
if(cljs.core.truth_(inst_49452__$1)){
var statearr_49484_49743 = state_49478__$1;
(statearr_49484_49743[(1)] = (5));

} else {
var statearr_49485_49744 = state_49478__$1;
(statearr_49485_49744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49479 === (13))){
var inst_49458 = (state_49478[(10)]);
var inst_49467 = (state_49478[(2)]);
var inst_49443 = inst_49458;
var state_49478__$1 = (function (){var statearr_49486 = state_49478;
(statearr_49486[(11)] = inst_49467);

(statearr_49486[(7)] = inst_49443);

return statearr_49486;
})();
var statearr_49487_49745 = state_49478__$1;
(statearr_49487_49745[(2)] = null);

(statearr_49487_49745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49479 === (6))){
var state_49478__$1 = state_49478;
var statearr_49488_49746 = state_49478__$1;
(statearr_49488_49746[(2)] = null);

(statearr_49488_49746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49479 === (3))){
var inst_49476 = (state_49478[(2)]);
var state_49478__$1 = state_49478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49478__$1,inst_49476);
} else {
if((state_val_49479 === (12))){
var state_49478__$1 = state_49478;
var statearr_49489_49747 = state_49478__$1;
(statearr_49489_49747[(2)] = null);

(statearr_49489_49747[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49479 === (2))){
var inst_49445 = cljs.core.async.timeout.call(null,ms);
var state_49478__$1 = state_49478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49478__$1,(4),inst_49445);
} else {
if((state_val_49479 === (11))){
var inst_49463 = taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304));
var inst_49464 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_49463);
var state_49478__$1 = state_49478;
var statearr_49490_49748 = state_49478__$1;
(statearr_49490_49748[(2)] = inst_49464);

(statearr_49490_49748[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49479 === (9))){
var state_49478__$1 = state_49478;
var statearr_49491_49749 = state_49478__$1;
(statearr_49491_49749[(2)] = null);

(statearr_49491_49749[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49479 === (5))){
var inst_49452 = (state_49478[(8)]);
var inst_49457 = cljs.core.nth.call(null,inst_49452,(0),null);
var inst_49458 = cljs.core.nth.call(null,inst_49452,(1),null);
var inst_49459 = taoensso.sente.interfaces.sch_open_QMARK_.call(null,server_ch);
var state_49478__$1 = (function (){var statearr_49492 = state_49478;
(statearr_49492[(10)] = inst_49458);

(statearr_49492[(12)] = inst_49457);

return statearr_49492;
})();
if(cljs.core.truth_(inst_49459)){
var statearr_49493_49750 = state_49478__$1;
(statearr_49493_49750[(1)] = (8));

} else {
var statearr_49494_49751 = state_49478__$1;
(statearr_49494_49751[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49479 === (10))){
var inst_49471 = (state_49478[(2)]);
var state_49478__$1 = state_49478;
var statearr_49495_49752 = state_49478__$1;
(statearr_49495_49752[(2)] = inst_49471);

(statearr_49495_49752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49479 === (8))){
var inst_49458 = (state_49478[(10)]);
var inst_49443 = (state_49478[(7)]);
var inst_49461 = cljs.core._EQ_.call(null,inst_49458,inst_49443);
var state_49478__$1 = state_49478;
if(inst_49461){
var statearr_49496_49753 = state_49478__$1;
(statearr_49496_49753[(1)] = (11));

} else {
var statearr_49497_49754 = state_49478__$1;
(statearr_49497_49754[(1)] = (12));

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
});})(c__41583__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__41471__auto__,c__41583__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__41472__auto__ = null;
var taoensso$sente$state_machine__41472__auto____0 = (function (){
var statearr_49501 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49501[(0)] = taoensso$sente$state_machine__41472__auto__);

(statearr_49501[(1)] = (1));

return statearr_49501;
});
var taoensso$sente$state_machine__41472__auto____1 = (function (state_49478){
while(true){
var ret_value__41473__auto__ = (function (){try{while(true){
var result__41474__auto__ = switch__41471__auto__.call(null,state_49478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41474__auto__;
}
break;
}
}catch (e49502){if((e49502 instanceof Object)){
var ex__41475__auto__ = e49502;
var statearr_49503_49755 = state_49478;
(statearr_49503_49755[(5)] = ex__41475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49756 = state_49478;
state_49478 = G__49756;
continue;
} else {
return ret_value__41473__auto__;
}
break;
}
});
taoensso$sente$state_machine__41472__auto__ = function(state_49478){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__41472__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__41472__auto____1.call(this,state_49478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__41472__auto____0;
taoensso$sente$state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__41472__auto____1;
return taoensso$sente$state_machine__41472__auto__;
})()
;})(switch__41471__auto__,c__41583__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__41585__auto__ = (function (){var statearr_49504 = f__41584__auto__.call(null);
(statearr_49504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41583__auto__);

return statearr_49504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41585__auto__);
});})(c__41583__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__41583__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",615,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,974909173);
var updated_conn = upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var handshake_QMARK_ = (function (){var or__36772__auto__ = new cljs.core.Keyword(null,"init?","init?",438181499).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(or__36772__auto__)){
return or__36772__auto__;
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
var c__41583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41583__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__41584__auto__ = (function (){var switch__41471__auto__ = ((function (c__41583__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_49530){
var state_val_49531 = (state_49530[(1)]);
if((state_val_49531 === (1))){
var inst_49505 = cljs.core.async.timeout.call(null,ms);
var state_49530__$1 = state_49530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49530__$1,(2),inst_49505);
} else {
if((state_val_49531 === (2))){
var inst_49512 = (state_49530[(7)]);
var inst_49507 = (state_49530[(2)]);
var inst_49508 = cljs.core.deref.call(null,conns_);
var inst_49509 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49510 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id];
var inst_49511 = (new cljs.core.PersistentVector(null,3,(5),inst_49509,inst_49510,null));
var inst_49512__$1 = cljs.core.get_in.call(null,inst_49508,inst_49511);
var state_49530__$1 = (function (){var statearr_49532 = state_49530;
(statearr_49532[(7)] = inst_49512__$1);

(statearr_49532[(8)] = inst_49507);

return statearr_49532;
})();
if(cljs.core.truth_(inst_49512__$1)){
var statearr_49533_49757 = state_49530__$1;
(statearr_49533_49757[(1)] = (3));

} else {
var statearr_49534_49758 = state_49530__$1;
(statearr_49534_49758[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49531 === (3))){
var inst_49512 = (state_49530[(7)]);
var inst_49517 = cljs.core.nth.call(null,inst_49512,(0),null);
var inst_49518 = cljs.core.nth.call(null,inst_49512,(1),null);
var inst_49519 = cljs.core._EQ_.call(null,inst_49518,udt_open);
var state_49530__$1 = (function (){var statearr_49535 = state_49530;
(statearr_49535[(9)] = inst_49517);

return statearr_49535;
})();
if(inst_49519){
var statearr_49536_49759 = state_49530__$1;
(statearr_49536_49759[(1)] = (6));

} else {
var statearr_49537_49760 = state_49530__$1;
(statearr_49537_49760[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49531 === (4))){
var state_49530__$1 = state_49530;
var statearr_49538_49761 = state_49530__$1;
(statearr_49538_49761[(2)] = null);

(statearr_49538_49761[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49531 === (5))){
var inst_49528 = (state_49530[(2)]);
var state_49530__$1 = state_49530;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49530__$1,inst_49528);
} else {
if((state_val_49531 === (6))){
var inst_49521 = taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var inst_49522 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_49521);
var state_49530__$1 = state_49530;
var statearr_49539_49762 = state_49530__$1;
(statearr_49539_49762[(2)] = inst_49522);

(statearr_49539_49762[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49531 === (7))){
var state_49530__$1 = state_49530;
var statearr_49540_49763 = state_49530__$1;
(statearr_49540_49763[(2)] = null);

(statearr_49540_49763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49531 === (8))){
var inst_49525 = (state_49530[(2)]);
var state_49530__$1 = state_49530;
var statearr_49541_49764 = state_49530__$1;
(statearr_49541_49764[(2)] = inst_49525);

(statearr_49541_49764[(1)] = (5));


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
});})(c__41583__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__41471__auto__,c__41583__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__41472__auto__ = null;
var taoensso$sente$state_machine__41472__auto____0 = (function (){
var statearr_49545 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49545[(0)] = taoensso$sente$state_machine__41472__auto__);

(statearr_49545[(1)] = (1));

return statearr_49545;
});
var taoensso$sente$state_machine__41472__auto____1 = (function (state_49530){
while(true){
var ret_value__41473__auto__ = (function (){try{while(true){
var result__41474__auto__ = switch__41471__auto__.call(null,state_49530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41474__auto__;
}
break;
}
}catch (e49546){if((e49546 instanceof Object)){
var ex__41475__auto__ = e49546;
var statearr_49547_49765 = state_49530;
(statearr_49547_49765[(5)] = ex__41475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49766 = state_49530;
state_49530 = G__49766;
continue;
} else {
return ret_value__41473__auto__;
}
break;
}
});
taoensso$sente$state_machine__41472__auto__ = function(state_49530){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__41472__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__41472__auto____1.call(this,state_49530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__41472__auto____0;
taoensso$sente$state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__41472__auto____1;
return taoensso$sente$state_machine__41472__auto__;
})()
;})(switch__41471__auto__,c__41583__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__41585__auto__ = (function (){var statearr_49548 = f__41584__auto__.call(null);
(statearr_49548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41583__auto__);

return statearr_49548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41585__auto__);
});})(c__41583__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__41583__auto__;
} else {
return null;
}
}
}
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

var vec__49549 = taoensso.sente.unpack.call(null,packer__$1,req_ppstr);
var clj = cljs.core.nth.call(null,vec__49549,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__49549,(1),null);
return receive_event_msg_BANG_.call(null,clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__49549,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",645,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__49549,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__49549,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1072640380);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj,_QMARK_cb_uuid));
});})(vec__49549,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443):new cljs.core.Keyword(null,"ajax","ajax",814345549));
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",654,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
});})(conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,2046266383);
var updated_conn = upd_conn_BANG_.call(null,conn_type,uid,client_id,null);
var udt_close = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__41583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41583__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__41584__auto__ = (function (){var switch__41471__auto__ = ((function (c__41583__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_49603){
var state_val_49604 = (state_49603[(1)]);
if((state_val_49604 === (7))){
var state_49603__$1 = state_49603;
var statearr_49605_49767 = state_49603__$1;
(statearr_49605_49767[(2)] = null);

(statearr_49605_49767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49604 === (1))){
var inst_49552 = cljs.core.async.timeout.call(null,(5000));
var state_49603__$1 = state_49603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49603__$1,(2),inst_49552);
} else {
if((state_val_49604 === (4))){
var state_49603__$1 = state_49603;
var statearr_49606_49768 = state_49603__$1;
(statearr_49606_49768[(2)] = null);

(statearr_49606_49768[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49604 === (13))){
var state_49603__$1 = state_49603;
var statearr_49607_49769 = state_49603__$1;
(statearr_49607_49769[(2)] = null);

(statearr_49607_49769[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49604 === (6))){
var inst_49564 = (state_49603[(7)]);
var inst_49562 = (state_49603[(8)]);
var inst_49563 = (state_49603[(9)]);
var inst_49580 = (state_49603[(10)]);
var inst_49575 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49576 = [conn_type,uid,client_id];
var inst_49577 = (new cljs.core.PersistentVector(null,3,(5),inst_49575,inst_49576,null));
var inst_49579 = (function (){var vec__49555 = inst_49562;
var __QMARK_sch = inst_49563;
var udt_t1 = inst_49564;
return ((function (vec__49555,__QMARK_sch,udt_t1,inst_49564,inst_49562,inst_49563,inst_49580,inst_49575,inst_49576,inst_49577,state_val_49604,c__41583__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__49578){
var vec__49608 = p__49578;
var _sch = cljs.core.nth.call(null,vec__49608,(0),null);
var udt_t1__$1 = cljs.core.nth.call(null,vec__49608,(1),null);
if(cljs.core._EQ_.call(null,udt_t1__$1,udt_close)){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),true);
} else {
return taoensso.encore.swapped.call(null,udt_t1__$1,false);
}
});
;})(vec__49555,__QMARK_sch,udt_t1,inst_49564,inst_49562,inst_49563,inst_49580,inst_49575,inst_49576,inst_49577,state_val_49604,c__41583__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_49580__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_49577,inst_49579);
var state_49603__$1 = (function (){var statearr_49611 = state_49603;
(statearr_49611[(10)] = inst_49580__$1);

return statearr_49611;
})();
if(cljs.core.truth_(inst_49580__$1)){
var statearr_49612_49770 = state_49603__$1;
(statearr_49612_49770[(1)] = (9));

} else {
var statearr_49613_49771 = state_49603__$1;
(statearr_49613_49771[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49604 === (3))){
var inst_49564 = (state_49603[(7)]);
var inst_49562 = (state_49603[(8)]);
var inst_49563 = (state_49603[(9)]);
var inst_49567 = (function (){var vec__49555 = inst_49562;
var __QMARK_sch = inst_49563;
var udt_t1 = inst_49564;
return ((function (vec__49555,__QMARK_sch,udt_t1,inst_49564,inst_49562,inst_49563,state_val_49604,c__41583__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.call(null,udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
;})(vec__49555,__QMARK_sch,udt_t1,inst_49564,inst_49562,inst_49563,state_val_49604,c__41583__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_49568 = (new cljs.core.Delay(inst_49567,null));
var inst_49569 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",668,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_49568,null,1269091673);
var state_49603__$1 = state_49603;
var statearr_49614_49772 = state_49603__$1;
(statearr_49614_49772[(2)] = inst_49569);

(statearr_49614_49772[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49604 === (12))){
var inst_49589 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49590 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678),uid];
var inst_49591 = (new cljs.core.PersistentVector(null,2,(5),inst_49589,inst_49590,null));
var inst_49592 = receive_event_msg_BANG_.call(null,inst_49591);
var state_49603__$1 = state_49603;
var statearr_49615_49773 = state_49603__$1;
(statearr_49615_49773[(2)] = inst_49592);

(statearr_49615_49773[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49604 === (2))){
var inst_49562 = (state_49603[(8)]);
var inst_49554 = (state_49603[(2)]);
var inst_49558 = cljs.core.deref.call(null,conns_);
var inst_49559 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49560 = [conn_type,uid,client_id];
var inst_49561 = (new cljs.core.PersistentVector(null,3,(5),inst_49559,inst_49560,null));
var inst_49562__$1 = cljs.core.get_in.call(null,inst_49558,inst_49561);
var inst_49563 = cljs.core.nth.call(null,inst_49562__$1,(0),null);
var inst_49564 = cljs.core.nth.call(null,inst_49562__$1,(1),null);
var inst_49565 = cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__);
var state_49603__$1 = (function (){var statearr_49616 = state_49603;
(statearr_49616[(7)] = inst_49564);

(statearr_49616[(8)] = inst_49562__$1);

(statearr_49616[(9)] = inst_49563);

(statearr_49616[(11)] = inst_49554);

return statearr_49616;
})();
if(cljs.core.truth_(inst_49565)){
var statearr_49617_49774 = state_49603__$1;
(statearr_49617_49774[(1)] = (3));

} else {
var statearr_49618_49775 = state_49603__$1;
(statearr_49618_49775[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49604 === (11))){
var inst_49598 = (state_49603[(2)]);
var state_49603__$1 = state_49603;
var statearr_49619_49776 = state_49603__$1;
(statearr_49619_49776[(2)] = inst_49598);

(statearr_49619_49776[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49604 === (9))){
var inst_49564 = (state_49603[(7)]);
var inst_49562 = (state_49603[(8)]);
var inst_49563 = (state_49603[(9)]);
var inst_49580 = (state_49603[(10)]);
var inst_49582 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49583 = [conn_type,uid];
var inst_49584 = (new cljs.core.PersistentVector(null,2,(5),inst_49582,inst_49583,null));
var inst_49585 = (function (){var vec__49555 = inst_49562;
var __QMARK_sch = inst_49563;
var udt_t1 = inst_49564;
var disconnect_QMARK_ = inst_49580;
return ((function (vec__49555,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_49564,inst_49562,inst_49563,inst_49580,inst_49582,inst_49583,inst_49584,state_val_49604,c__41583__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_.call(null,_QMARK_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return _QMARK_m;
}
});
;})(vec__49555,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_49564,inst_49562,inst_49563,inst_49580,inst_49582,inst_49583,inst_49584,state_val_49604,c__41583__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_49586 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_49584,inst_49585);
var inst_49587 = upd_connected_uid_BANG_.call(null,uid);
var state_49603__$1 = (function (){var statearr_49620 = state_49603;
(statearr_49620[(12)] = inst_49586);

return statearr_49620;
})();
if(cljs.core.truth_(inst_49587)){
var statearr_49621_49777 = state_49603__$1;
(statearr_49621_49777[(1)] = (12));

} else {
var statearr_49622_49778 = state_49603__$1;
(statearr_49622_49778[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49604 === (5))){
var inst_49564 = (state_49603[(7)]);
var inst_49572 = (state_49603[(2)]);
var inst_49573 = cljs.core._EQ_.call(null,inst_49564,udt_close);
var state_49603__$1 = (function (){var statearr_49623 = state_49603;
(statearr_49623[(13)] = inst_49572);

return statearr_49623;
})();
if(inst_49573){
var statearr_49624_49779 = state_49603__$1;
(statearr_49624_49779[(1)] = (6));

} else {
var statearr_49625_49780 = state_49603__$1;
(statearr_49625_49780[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49604 === (14))){
var inst_49595 = (state_49603[(2)]);
var state_49603__$1 = state_49603;
var statearr_49626_49781 = state_49603__$1;
(statearr_49626_49781[(2)] = inst_49595);

(statearr_49626_49781[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49604 === (10))){
var state_49603__$1 = state_49603;
var statearr_49627_49782 = state_49603__$1;
(statearr_49627_49782[(2)] = null);

(statearr_49627_49782[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49604 === (8))){
var inst_49601 = (state_49603[(2)]);
var state_49603__$1 = state_49603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49603__$1,inst_49601);
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
});})(c__41583__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__41471__auto__,c__41583__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__41472__auto__ = null;
var taoensso$sente$state_machine__41472__auto____0 = (function (){
var statearr_49631 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49631[(0)] = taoensso$sente$state_machine__41472__auto__);

(statearr_49631[(1)] = (1));

return statearr_49631;
});
var taoensso$sente$state_machine__41472__auto____1 = (function (state_49603){
while(true){
var ret_value__41473__auto__ = (function (){try{while(true){
var result__41474__auto__ = switch__41471__auto__.call(null,state_49603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41474__auto__;
}
break;
}
}catch (e49632){if((e49632 instanceof Object)){
var ex__41475__auto__ = e49632;
var statearr_49633_49783 = state_49603;
(statearr_49633_49783[(5)] = ex__41475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49784 = state_49603;
state_49603 = G__49784;
continue;
} else {
return ret_value__41473__auto__;
}
break;
}
});
taoensso$sente$state_machine__41472__auto__ = function(state_49603){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__41472__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__41472__auto____1.call(this,state_49603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__41472__auto____0;
taoensso$sente$state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__41472__auto____1;
return taoensso$sente$state_machine__41472__auto__;
})()
;})(switch__41471__auto__,c__41583__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__41585__auto__ = (function (){var statearr_49634 = f__41584__auto__.call(null);
(statearr_49634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41583__auto__);

return statearr_49634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41585__auto__);
});})(c__41583__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__41583__auto__;
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",690,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1990197883);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__49333,map__49336,map__49336__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq49330){
var G__49331 = cljs.core.first.call(null,seq49330);
var seq49330__$1 = cljs.core.next.call(null,seq49330);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__49331,seq49330__$1);
});

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",696,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null,743583760);

var seq__49801 = cljs.core.seq.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null)));
var chunk__49802 = null;
var count__49803 = (0);
var i__49804 = (0);
while(true){
if((i__49804 < count__49803)){
var vec__49805 = cljs.core._nth.call(null,chunk__49802,i__49804);
var client_id = cljs.core.nth.call(null,vec__49805,(0),null);
var vec__49808 = cljs.core.nth.call(null,vec__49805,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__49808,(0),null);
var _udt = cljs.core.nth.call(null,vec__49808,(1),null);
var temp__4657__auto___49817 = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto___49817)){
var sch_49818 = temp__4657__auto___49817;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_49818,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__49819 = seq__49801;
var G__49820 = chunk__49802;
var G__49821 = count__49803;
var G__49822 = (i__49804 + (1));
seq__49801 = G__49819;
chunk__49802 = G__49820;
count__49803 = G__49821;
i__49804 = G__49822;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49801);
if(temp__4657__auto__){
var seq__49801__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49801__$1)){
var c__37583__auto__ = cljs.core.chunk_first.call(null,seq__49801__$1);
var G__49823 = cljs.core.chunk_rest.call(null,seq__49801__$1);
var G__49824 = c__37583__auto__;
var G__49825 = cljs.core.count.call(null,c__37583__auto__);
var G__49826 = (0);
seq__49801 = G__49823;
chunk__49802 = G__49824;
count__49803 = G__49825;
i__49804 = G__49826;
continue;
} else {
var vec__49811 = cljs.core.first.call(null,seq__49801__$1);
var client_id = cljs.core.nth.call(null,vec__49811,(0),null);
var vec__49814 = cljs.core.nth.call(null,vec__49811,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__49814,(0),null);
var _udt = cljs.core.nth.call(null,vec__49814,(1),null);
var temp__4657__auto___49827__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto___49827__$1)){
var sch_49828 = temp__4657__auto___49827__$1;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_49828,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__49829 = cljs.core.next.call(null,seq__49801__$1);
var G__49830 = null;
var G__49831 = (0);
var G__49832 = (0);
seq__49801 = G__49829;
chunk__49802 = G__49830;
count__49803 = G__49831;
i__49804 = G__49832;
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",706,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
}),null)),null,-891510780);

var ms_backoffs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(1440)], null);
var client_ids_unsatisfied = cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_.call(null,client_ids_unsatisfied)){
return null;
} else {
var c__41583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41583__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (){
var f__41584__auto__ = (function (){var switch__41471__auto__ = ((function (c__41583__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (state_49963){
var state_val_49964 = (state_49963[(1)]);
if((state_val_49964 === (7))){
var inst_49919 = (state_49963[(7)]);
var inst_49918 = (state_49963[(8)]);
var inst_49925 = (state_49963[(9)]);
var inst_49935 = (function (){var n = inst_49918;
var client_ids_satisfied = inst_49919;
var _QMARK_pulled = inst_49925;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_49919,inst_49918,inst_49925,state_val_49964,c__41583__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (s,client_id,p__49934){
var vec__49965 = p__49934;
var _QMARK_sch = cljs.core.nth.call(null,vec__49965,(0),null);
var _udt = cljs.core.nth.call(null,vec__49965,(1),null);
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
;})(n,client_ids_satisfied,_QMARK_pulled,inst_49919,inst_49918,inst_49925,state_val_49964,c__41583__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_49936 = cljs.core.PersistentHashSet.EMPTY;
var inst_49937 = cljs.core.reduce_kv.call(null,inst_49935,inst_49936,inst_49925);
var state_49963__$1 = state_49963;
var statearr_49968_50001 = state_49963__$1;
(statearr_49968_50001[(2)] = inst_49937);

(statearr_49968_50001[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (1))){
var inst_49917 = cljs.core.PersistentHashSet.EMPTY;
var inst_49918 = (0);
var inst_49919 = inst_49917;
var state_49963__$1 = (function (){var statearr_49969 = state_49963;
(statearr_49969[(7)] = inst_49919);

(statearr_49969[(8)] = inst_49918);

return statearr_49969;
})();
var statearr_49970_50002 = state_49963__$1;
(statearr_49970_50002[(2)] = null);

(statearr_49970_50002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (4))){
var state_49963__$1 = state_49963;
var statearr_49971_50003 = state_49963__$1;
(statearr_49971_50003[(2)] = true);

(statearr_49971_50003[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (15))){
var inst_49956 = (state_49963[(2)]);
var state_49963__$1 = state_49963;
var statearr_49972_50004 = state_49963__$1;
(statearr_49972_50004[(2)] = inst_49956);

(statearr_49972_50004[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (13))){
var inst_49942 = (state_49963[(10)]);
var inst_49947 = cljs.core.rand_int.call(null,inst_49942);
var inst_49948 = (inst_49942 + inst_49947);
var inst_49949 = cljs.core.async.timeout.call(null,inst_49948);
var state_49963__$1 = state_49963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49963__$1,(16),inst_49949);
} else {
if((state_val_49964 === (6))){
var inst_49925 = (state_49963[(9)]);
var inst_49932 = (state_49963[(2)]);
var state_49963__$1 = (function (){var statearr_49973 = state_49963;
(statearr_49973[(11)] = inst_49932);

return statearr_49973;
})();
if(cljs.core.truth_(inst_49925)){
var statearr_49974_50005 = state_49963__$1;
(statearr_49974_50005[(1)] = (7));

} else {
var statearr_49975_50006 = state_49963__$1;
(statearr_49975_50006[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (3))){
var inst_49961 = (state_49963[(2)]);
var state_49963__$1 = state_49963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49963__$1,inst_49961);
} else {
if((state_val_49964 === (12))){
var inst_49959 = (state_49963[(2)]);
var state_49963__$1 = state_49963;
var statearr_49976_50007 = state_49963__$1;
(statearr_49976_50007[(2)] = inst_49959);

(statearr_49976_50007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (2))){
var inst_49919 = (state_49963[(7)]);
var inst_49918 = (state_49963[(8)]);
var inst_49925 = (state_49963[(9)]);
var inst_49921 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49922 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_49923 = (new cljs.core.PersistentVector(null,2,(5),inst_49921,inst_49922,null));
var inst_49924 = (function (){var n = inst_49918;
var client_ids_satisfied = inst_49919;
return ((function (n,client_ids_satisfied,inst_49919,inst_49918,inst_49925,inst_49921,inst_49922,inst_49923,state_val_49964,c__41583__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m){
var ks_to_pull = cljs.core.remove.call(null,client_ids_satisfied,cljs.core.keys.call(null,m));
if(cljs.core.empty_QMARK_.call(null,ks_to_pull)){
return taoensso.encore.swapped.call(null,m,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.reduce.call(null,((function (ks_to_pull,n,client_ids_satisfied,inst_49919,inst_49918,inst_49925,inst_49921,inst_49922,inst_49923,state_val_49964,c__41583__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m__$1,k){
var vec__49977 = cljs.core.get.call(null,m__$1,k);
var _QMARK_sch = cljs.core.nth.call(null,vec__49977,(0),null);
var udt = cljs.core.nth.call(null,vec__49977,(1),null);
return cljs.core.assoc.call(null,m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_49919,inst_49918,inst_49925,inst_49921,inst_49922,inst_49923,state_val_49964,c__41583__auto__,ms_backoffs,client_ids_unsatisfied))
,m,ks_to_pull),cljs.core.select_keys.call(null,m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_49919,inst_49918,inst_49925,inst_49921,inst_49922,inst_49923,state_val_49964,c__41583__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_49925__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_49923,inst_49924);
var inst_49926 = (function (){var n = inst_49918;
var client_ids_satisfied = inst_49919;
var _QMARK_pulled = inst_49925__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_49919,inst_49918,inst_49925,inst_49921,inst_49922,inst_49923,inst_49924,inst_49925__$1,state_val_49964,c__41583__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (x){
var or__36772__auto__ = (x == null);
if(or__36772__auto__){
return or__36772__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,x);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_49919,inst_49918,inst_49925,inst_49921,inst_49922,inst_49923,inst_49924,inst_49925__$1,state_val_49964,c__41583__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_49927 = inst_49926.call(null,inst_49925__$1);
var state_49963__$1 = (function (){var statearr_49980 = state_49963;
(statearr_49980[(9)] = inst_49925__$1);

return statearr_49980;
})();
if(cljs.core.truth_(inst_49927)){
var statearr_49981_50008 = state_49963__$1;
(statearr_49981_50008[(1)] = (4));

} else {
var statearr_49982_50009 = state_49963__$1;
(statearr_49982_50009[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (11))){
var state_49963__$1 = state_49963;
var statearr_49983_50010 = state_49963__$1;
(statearr_49983_50010[(2)] = null);

(statearr_49983_50010[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (9))){
var inst_49919 = (state_49963[(7)]);
var inst_49942 = (state_49963[(10)]);
var inst_49918 = (state_49963[(8)]);
var inst_49940 = (state_49963[(2)]);
var inst_49941 = cljs.core.into.call(null,inst_49919,inst_49940);
var inst_49942__$1 = cljs.core.get.call(null,ms_backoffs,inst_49918);
var state_49963__$1 = (function (){var statearr_49984 = state_49963;
(statearr_49984[(10)] = inst_49942__$1);

(statearr_49984[(12)] = inst_49941);

return statearr_49984;
})();
if(cljs.core.truth_(inst_49942__$1)){
var statearr_49985_50011 = state_49963__$1;
(statearr_49985_50011[(1)] = (10));

} else {
var statearr_49986_50012 = state_49963__$1;
(statearr_49986_50012[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (5))){
var inst_49925 = (state_49963[(9)]);
var inst_49930 = taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:or nil? map?] ?pulled)",inst_49925,null,null);
var state_49963__$1 = state_49963;
var statearr_49987_50013 = state_49963__$1;
(statearr_49987_50013[(2)] = inst_49930);

(statearr_49987_50013[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (14))){
var state_49963__$1 = state_49963;
var statearr_49988_50014 = state_49963__$1;
(statearr_49988_50014[(2)] = null);

(statearr_49988_50014[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (16))){
var inst_49918 = (state_49963[(8)]);
var inst_49941 = (state_49963[(12)]);
var inst_49951 = (state_49963[(2)]);
var inst_49952 = (inst_49918 + (1));
var inst_49918__$1 = inst_49952;
var inst_49919 = inst_49941;
var state_49963__$1 = (function (){var statearr_49989 = state_49963;
(statearr_49989[(7)] = inst_49919);

(statearr_49989[(8)] = inst_49918__$1);

(statearr_49989[(13)] = inst_49951);

return statearr_49989;
})();
var statearr_49990_50015 = state_49963__$1;
(statearr_49990_50015[(2)] = null);

(statearr_49990_50015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (10))){
var inst_49941 = (state_49963[(12)]);
var inst_49944 = cljs.core.complement.call(null,inst_49941);
var inst_49945 = taoensso.encore.rsome.call(null,inst_49944,client_ids_unsatisfied);
var state_49963__$1 = state_49963;
if(cljs.core.truth_(inst_49945)){
var statearr_49991_50016 = state_49963__$1;
(statearr_49991_50016[(1)] = (13));

} else {
var statearr_49992_50017 = state_49963__$1;
(statearr_49992_50017[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (8))){
var state_49963__$1 = state_49963;
var statearr_49993_50018 = state_49963__$1;
(statearr_49993_50018[(2)] = null);

(statearr_49993_50018[(1)] = (9));


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
});})(c__41583__auto__,ms_backoffs,client_ids_unsatisfied))
;
return ((function (switch__41471__auto__,c__41583__auto__,ms_backoffs,client_ids_unsatisfied){
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__41472__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__41472__auto____0 = (function (){
var statearr_49997 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49997[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__41472__auto__);

(statearr_49997[(1)] = (1));

return statearr_49997;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__41472__auto____1 = (function (state_49963){
while(true){
var ret_value__41473__auto__ = (function (){try{while(true){
var result__41474__auto__ = switch__41471__auto__.call(null,state_49963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41474__auto__;
}
break;
}
}catch (e49998){if((e49998 instanceof Object)){
var ex__41475__auto__ = e49998;
var statearr_49999_50019 = state_49963;
(statearr_49999_50019[(5)] = ex__41475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50020 = state_49963;
state_49963 = G__50020;
continue;
} else {
return ret_value__41473__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__41472__auto__ = function(state_49963){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__41472__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__41472__auto____1.call(this,state_49963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__41472__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__41472__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__41472__auto__;
})()
;})(switch__41471__auto__,c__41583__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var state__41585__auto__ = (function (){var statearr_50000 = f__41584__auto__.call(null);
(statearr_50000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41583__auto__);

return statearr_50000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41585__auto__);
});})(c__41583__auto__,ms_backoffs,client_ids_unsatisfied))
);

return c__41583__auto__;
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
var x__37435__auto__ = (((chsk == null))?null:chsk);
var m__37436__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,chsk);
} else {
var m__37436__auto____$1 = (taoensso.sente._chsk_connect_BANG_["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,chsk);
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
var x__37435__auto__ = (((chsk == null))?null:chsk);
var m__37436__auto__ = (taoensso.sente._chsk_disconnect_BANG_[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,chsk,reason);
} else {
var m__37436__auto____$1 = (taoensso.sente._chsk_disconnect_BANG_["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,chsk,reason);
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
var x__37435__auto__ = (((chsk == null))?null:chsk);
var m__37436__auto__ = (taoensso.sente._chsk_reconnect_BANG_[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,chsk);
} else {
var m__37436__auto____$1 = (taoensso.sente._chsk_reconnect_BANG_["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,chsk);
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
var x__37435__auto__ = (((chsk == null))?null:chsk);
var m__37436__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,chsk,ev,opts);
} else {
var m__37436__auto____$1 = (taoensso.sente._chsk_send_BANG_["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,chsk,ev,opts);
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
var args50021 = [];
var len__37847__auto___50024 = arguments.length;
var i__37848__auto___50025 = (0);
while(true){
if((i__37848__auto___50025 < len__37847__auto___50024)){
args50021.push((arguments[i__37848__auto___50025]));

var G__50026 = (i__37848__auto___50025 + (1));
i__37848__auto___50025 = G__50026;
continue;
} else {
}
break;
}

var G__50023 = args50021.length;
switch (G__50023) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50021.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",783,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null,427925675);

return taoensso.sente._chsk_send_BANG_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",788,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null,-1350151411);

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
var vec__50031 = taoensso.encore.swap_in_BANG_.call(null,new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = f.call(null,old_state);
var new_state__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(old_state))?cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),false):new_state);
var new_state__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state__$1))?cljs.core.dissoc.call(null,new_state__$1,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)):new_state__$1);
return taoensso.encore.swapped.call(null,new_state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$2], null));
}));
var old_state = cljs.core.nth.call(null,vec__50031,(0),null);
var new_state = cljs.core.nth.call(null,vec__50031,(1),null);
if(cljs.core.not_EQ_.call(null,old_state,new_state)){
var output = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null);
cljs.core.async.put_BANG_.call(null,cljs.core.get_in.call(null,chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),output], null));

return output;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_50038 = (function (){try{if(cljs.core.map_QMARK_.call(null,state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e50036){if((e50036 instanceof Error)){
var e = e50036;
return e;
} else {
throw e50036;

}
}})();
if((e_50038 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(map? state)",state,e_50038,null);
}

var e_50039 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641),null,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720),null,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707),null], null), null)),x);
}).call(null,reason)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e50037){if((e50037 instanceof Error)){
var e = e50037;
return e;
} else {
throw e50037;

}
}})();
if((e_50039 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:el #{:requested-disconnect :downgrading-ws-to-ajax :unexpected :requested-reconnect}] reason)",reason,e_50039,null);
}

if(cljs.core.truth_((function (){var or__36772__auto__ = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__36772__auto__)){
return or__36772__auto__;
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
var e_50048 = (function (){try{if(taoensso.encore.chan_QMARK_.call(null,_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e50044){if((e50044 instanceof Error)){
var e = e50044;
return e;
} else {
throw e50044;

}
}})();
if((e_50048 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/chan? ?cb)",_QMARK_cb,e_50048,null);
}

taoensso.sente.assert_event.call(null,ev);

var vec__50045 = ev;
var ev_id = cljs.core.nth.call(null,vec__50045,(0),null);
var _ = cljs.core.nth.call(null,vec__50045,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__50045,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.as_qname.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__50045,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",868,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null,-1315973050);

var buffered_evs = ((cljs.core.vector_QMARK_.call(null,clj))?clj:taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? clj)",clj,null,null));
var seq__50059 = cljs.core.seq.call(null,buffered_evs);
var chunk__50060 = null;
var count__50061 = (0);
var i__50062 = (0);
while(true){
if((i__50062 < count__50061)){
var ev = cljs.core._nth.call(null,chunk__50060,i__50062);
taoensso.sente.assert_event.call(null,ev);

var vec__50063_50069 = ev;
var id_50070 = cljs.core.nth.call(null,vec__50063_50069,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_50070),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__50071 = seq__50059;
var G__50072 = chunk__50060;
var G__50073 = count__50061;
var G__50074 = (i__50062 + (1));
seq__50059 = G__50071;
chunk__50060 = G__50072;
count__50061 = G__50073;
i__50062 = G__50074;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50059);
if(temp__4657__auto__){
var seq__50059__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50059__$1)){
var c__37583__auto__ = cljs.core.chunk_first.call(null,seq__50059__$1);
var G__50075 = cljs.core.chunk_rest.call(null,seq__50059__$1);
var G__50076 = c__37583__auto__;
var G__50077 = cljs.core.count.call(null,c__37583__auto__);
var G__50078 = (0);
seq__50059 = G__50075;
chunk__50060 = G__50076;
count__50061 = G__50077;
i__50062 = G__50078;
continue;
} else {
var ev = cljs.core.first.call(null,seq__50059__$1);
taoensso.sente.assert_event.call(null,ev);

var vec__50066_50079 = ev;
var id_50080 = cljs.core.nth.call(null,vec__50066_50079,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_50080),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__50081 = cljs.core.next.call(null,seq__50059__$1);
var G__50082 = null;
var G__50083 = (0);
var G__50084 = (0);
seq__50059 = G__50081;
chunk__50060 = G__50082;
count__50061 = G__50083;
i__50062 = G__50084;
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
var and__36760__auto__ = cljs.core.vector_QMARK_.call(null,x);
if(and__36760__auto__){
var vec__50094 = x;
var x1 = cljs.core.nth.call(null,vec__50094,(0),null);
return cljs.core._EQ_.call(null,x1,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686));
} else {
return and__36760__auto__;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_50118 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null], null), null)),x);
}).call(null,chsk_type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e50108){if((e50108 instanceof Error)){
var e = e50108;
return e;
} else {
throw e50108;

}
}})();
if((e_50118 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_50118,null);
}

var e_50119 = (function (){try{if(cljs.core.truth_(taoensso.sente.handshake_QMARK_.call(null,clj))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e50109){if((e50109 instanceof Error)){
var e = e50109;
return e;
} else {
throw e50109;

}
}})();
if((e_50119 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(handshake? clj)",clj,e_50119,null);
}

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",885,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null,-416340371);

var vec__50110 = clj;
var _ = cljs.core.nth.call(null,vec__50110,(0),null);
var vec__50113 = cljs.core.nth.call(null,vec__50110,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__50113,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__50113,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__50113,(2),null);
var map__50116 = chsk;
var map__50116__$1 = ((((!((map__50116 == null)))?((((map__50116.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50116.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50116):map__50116);
var chs = cljs.core.get.call(null,map__50116__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var ever_opened_QMARK__ = cljs.core.get.call(null,map__50116__$1,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913));
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_.call(null,ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),chsk_type,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),_QMARK_csrf_token,new cljs.core.Keyword(null,"handshake-data","handshake-data",-278378864),_QMARK_handshake_data,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event.call(null,handshake_ev);

if(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",904,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__50110,_,vec__50113,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__50116,map__50116__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__50110,_,vec__50113,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__50116,map__50116__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
,null)),null,607937864);
} else {
}

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk,((function (vec__50110,_,vec__50113,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__50116,map__50116__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (p1__50097_SHARP_){
return cljs.core.merge.call(null,p1__50097_SHARP_,new_state);
});})(vec__50110,_,vec__50113,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__50116,map__50116__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
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
if(cljs.core.truth_((function (){var and__36760__auto__ = taoensso.sente.node_target_QMARK_;
if(cljs.core.truth_(and__36760__auto__)){
return typeof require !== 'undefined';
} else {
return and__36760__auto__;
}
})())){
try{return require("websocket");
}catch (e50120){var e = e50120;
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
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__37394__auto__,k__37395__auto__){
var self__ = this;
var this__37394__auto____$1 = this;
return cljs.core._lookup.call(null,this__37394__auto____$1,k__37395__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__37396__auto__,k50127,else__37397__auto__){
var self__ = this;
var this__37396__auto____$1 = this;
var G__50129 = (((k50127 instanceof cljs.core.Keyword))?k50127.fqn:null);
switch (G__50129) {
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
return cljs.core.get.call(null,self__.__extmap,k50127,else__37397__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__37408__auto__,writer__37409__auto__,opts__37410__auto__){
var self__ = this;
var this__37408__auto____$1 = this;
var pr_pair__37411__auto__ = ((function (this__37408__auto____$1){
return (function (keyval__37412__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__37409__auto__,cljs.core.pr_writer,""," ","",opts__37410__auto__,keyval__37412__auto__);
});})(this__37408__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__37409__auto__,pr_pair__37411__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__37410__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50126){
var self__ = this;
var G__50126__$1 = this;
return (new cljs.core.RecordIter((0),G__50126__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__37392__auto__){
var self__ = this;
var this__37392__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__37388__auto__){
var self__ = this;
var this__37388__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__37398__auto__){
var self__ = this;
var this__37398__auto____$1 = this;
return (14 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__37389__auto__){
var self__ = this;
var this__37389__auto____$1 = this;
var h__37207__auto__ = self__.__hash;
if(!((h__37207__auto__ == null))){
return h__37207__auto__;
} else {
var h__37207__auto____$1 = cljs.core.hash_imap.call(null,this__37389__auto____$1);
self__.__hash = h__37207__auto____$1;

return h__37207__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__37390__auto__,other__37391__auto__){
var self__ = this;
var this__37390__auto____$1 = this;
if(cljs.core.truth_((function (){var and__36760__auto__ = other__37391__auto__;
if(cljs.core.truth_(and__36760__auto__)){
var and__36760__auto____$1 = (this__37390__auto____$1.constructor === other__37391__auto__.constructor);
if(and__36760__auto____$1){
return cljs.core.equiv_map.call(null,this__37390__auto____$1,other__37391__auto__);
} else {
return and__36760__auto____$1;
}
} else {
return and__36760__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__37403__auto__,k__37404__auto__){
var self__ = this;
var this__37403__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__37404__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__37403__auto____$1),self__.__meta),k__37404__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__37404__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__37401__auto__,k__37402__auto__,G__50126){
var self__ = this;
var this__37401__auto____$1 = this;
var pred__50130 = cljs.core.keyword_identical_QMARK_;
var expr__50131 = k__37402__auto__;
if(cljs.core.truth_(pred__50130.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__50131))){
return (new taoensso.sente.ChWebSocket(G__50126,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50130.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__50131))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__50126,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50130.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__50131))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__50126,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50130.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__50131))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__50126,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50130.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__50131))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__50126,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50130.call(null,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),expr__50131))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__50126,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50130.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__50131))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,G__50126,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50130.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__50131))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,G__50126,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50130.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__50131))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,G__50126,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50130.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__50131))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,G__50126,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50130.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__50131))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,G__50126,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50130.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__50131))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__50126,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50130.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__50131))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__50126,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50130.call(null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),expr__50131))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__50126,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__37402__auto__,G__50126),null));
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

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__37406__auto__){
var self__ = this;
var this__37406__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__37393__auto__,G__50126){
var self__ = this;
var this__37393__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__50126,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__37399__auto__,entry__37400__auto__){
var self__ = this;
var this__37399__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__37400__auto__)){
return cljs.core._assoc.call(null,this__37399__auto____$1,cljs.core._nth.call(null,entry__37400__auto__,(0)),cljs.core._nth.call(null,entry__37400__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__37399__auto____$1,entry__37400__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (chsk__$1){
return (function (p1__50121_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__50121_SHARP_,reason);
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
var map__50133 = opts;
var map__50133__$1 = ((((!((map__50133 == null)))?((((map__50133.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50133.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50133):map__50133);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__50133__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__50133__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__50133__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__4657__auto___50224 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___50224)){
var cb_uuid_50225 = temp__4657__auto___50224;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_50225], null),(function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e50135){if((e50135 instanceof Error)){
var e = e50135;
return e;
} else {
throw e50135;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__4657__auto___50226__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4657__auto___50226__$1)){
var timeout_ms_50227 = temp__4657__auto___50226__$1;
var c__41583__auto___50228 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41583__auto___50228,timeout_ms_50227,temp__4657__auto___50226__$1,cb_uuid_50225,temp__4657__auto___50224,_QMARK_cb_uuid,ppstr,map__50133,map__50133__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
var f__41584__auto__ = (function (){var switch__41471__auto__ = ((function (c__41583__auto___50228,timeout_ms_50227,temp__4657__auto___50226__$1,cb_uuid_50225,temp__4657__auto___50224,_QMARK_cb_uuid,ppstr,map__50133,map__50133__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (state_50146){
var state_val_50147 = (state_50146[(1)]);
if((state_val_50147 === (1))){
var inst_50136 = cljs.core.async.timeout.call(null,timeout_ms_50227);
var state_50146__$1 = state_50146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50146__$1,(2),inst_50136);
} else {
if((state_val_50147 === (2))){
var inst_50139 = (state_50146[(7)]);
var inst_50138 = (state_50146[(2)]);
var inst_50139__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_50146__$1 = (function (){var statearr_50148 = state_50146;
(statearr_50148[(8)] = inst_50138);

(statearr_50148[(7)] = inst_50139__$1);

return statearr_50148;
})();
if(cljs.core.truth_(inst_50139__$1)){
var statearr_50149_50229 = state_50146__$1;
(statearr_50149_50229[(1)] = (3));

} else {
var statearr_50150_50230 = state_50146__$1;
(statearr_50150_50230[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50147 === (3))){
var inst_50139 = (state_50146[(7)]);
var inst_50141 = inst_50139.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_50146__$1 = state_50146;
var statearr_50151_50231 = state_50146__$1;
(statearr_50151_50231[(2)] = inst_50141);

(statearr_50151_50231[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50147 === (4))){
var state_50146__$1 = state_50146;
var statearr_50152_50232 = state_50146__$1;
(statearr_50152_50232[(2)] = null);

(statearr_50152_50232[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50147 === (5))){
var inst_50144 = (state_50146[(2)]);
var state_50146__$1 = state_50146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50146__$1,inst_50144);
} else {
return null;
}
}
}
}
}
});})(c__41583__auto___50228,timeout_ms_50227,temp__4657__auto___50226__$1,cb_uuid_50225,temp__4657__auto___50224,_QMARK_cb_uuid,ppstr,map__50133,map__50133__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
return ((function (switch__41471__auto__,c__41583__auto___50228,timeout_ms_50227,temp__4657__auto___50226__$1,cb_uuid_50225,temp__4657__auto___50224,_QMARK_cb_uuid,ppstr,map__50133,map__50133__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function() {
var taoensso$sente$state_machine__41472__auto__ = null;
var taoensso$sente$state_machine__41472__auto____0 = (function (){
var statearr_50156 = [null,null,null,null,null,null,null,null,null];
(statearr_50156[(0)] = taoensso$sente$state_machine__41472__auto__);

(statearr_50156[(1)] = (1));

return statearr_50156;
});
var taoensso$sente$state_machine__41472__auto____1 = (function (state_50146){
while(true){
var ret_value__41473__auto__ = (function (){try{while(true){
var result__41474__auto__ = switch__41471__auto__.call(null,state_50146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41474__auto__;
}
break;
}
}catch (e50157){if((e50157 instanceof Object)){
var ex__41475__auto__ = e50157;
var statearr_50158_50233 = state_50146;
(statearr_50158_50233[(5)] = ex__41475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50234 = state_50146;
state_50146 = G__50234;
continue;
} else {
return ret_value__41473__auto__;
}
break;
}
});
taoensso$sente$state_machine__41472__auto__ = function(state_50146){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__41472__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__41472__auto____1.call(this,state_50146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__41472__auto____0;
taoensso$sente$state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__41472__auto____1;
return taoensso$sente$state_machine__41472__auto__;
})()
;})(switch__41471__auto__,c__41583__auto___50228,timeout_ms_50227,temp__4657__auto___50226__$1,cb_uuid_50225,temp__4657__auto___50224,_QMARK_cb_uuid,ppstr,map__50133,map__50133__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
})();
var state__41585__auto__ = (function (){var statearr_50159 = f__41584__auto__.call(null);
(statearr_50159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41583__auto___50228);

return statearr_50159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41585__auto__);
});})(c__41583__auto___50228,timeout_ms_50227,temp__4657__auto___50226__$1,cb_uuid_50225,temp__4657__auto___50224,_QMARK_cb_uuid,ppstr,map__50133,map__50133__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.udt_last_comms_,taoensso.encore.now_udt.call(null));

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e50160){var e = e50160;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",986,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,map__50133,map__50133__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,map__50133,map__50133__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,-1328773627);

var temp__4657__auto___50235 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___50235)){
var cb_uuid_50236 = temp__4657__auto___50235;
var cb_fn_STAR__50237 = (function (){var or__36772__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_50236);
if(cljs.core.truth_(or__36772__auto__)){
return or__36772__auto__;
} else {
var e__$1 = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e50161){if((e50161 instanceof Error)){
var e__$1 = e50161;
return e__$1;
} else {
throw e50161;

}
}})();
if((e__$1 == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e__$1,null);
}
}
})();
cb_fn_STAR__50237.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = (function (){var or__36772__auto__ = taoensso.encore.oget.call(null,goog.global,"WebSocket");
if(cljs.core.truth_(or__36772__auto__)){
return or__36772__auto__;
} else {
var or__36772__auto____$1 = taoensso.encore.oget.call(null,goog.global,"MozWebSocket");
if(cljs.core.truth_(or__36772__auto____$1)){
return or__36772__auto____$1;
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",1011,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-1517373970);

goog.global.setTimeout(taoensso$sente$connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__50122_SHARP_){
return cljs.core.assoc.call(null,p1__50122_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
;
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string.call(null,self__.url,cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null)))));
}catch (e50168){var e = e50168;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",1025,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket error"], null);
});})(e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,1102885893);

return null;
}})();
if(cljs.core.not.call(null,_QMARK_socket)){
return retry_fn.call(null);
} else {
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__50169 = _QMARK_socket;
(G__50169["onerror"] = ((function (G__50169,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",1035,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__50169,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.call(null,ws_ev);
}catch (e50170){var _ = e50170;
return ws_ev;
}})()], null);
});})(G__50169,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-1301125795);

var last_ws_error = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev], null);
return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (last_ws_error,G__50169,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__50123_SHARP_){
return cljs.core.assoc.call(null,p1__50123_SHARP_,new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502),last_ws_error);
});})(last_ws_error,G__50169,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
});})(G__50169,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__50169["onmessage"] = ((function (G__50169,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.call(null,ws_ev,"data");
var vec__50171 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__50171,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__50171,(1),null);
cljs.core.reset_BANG_.call(null,self__.udt_last_comms_,taoensso.encore.now_udt.call(null));

var or__36772__auto__ = (cljs.core.truth_(taoensso.sente.handshake_QMARK_.call(null,clj))?(function (){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),chsk__$1,clj);

cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));

return new cljs.core.Keyword(null,"handshake","handshake",68079331);
})()
:null);
if(cljs.core.truth_(or__36772__auto__)){
return or__36772__auto__;
} else {
var or__36772__auto____$1 = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)))?(function (){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(self__.chs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__36772__auto____$1)){
return or__36772__auto____$1;
} else {
var temp__4655__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4655__auto__)){
var cb_uuid = temp__4655__auto__;
var temp__4655__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4655__auto____$1)){
var cb_fn = temp__4655__auto____$1;
return cb_fn.call(null,clj);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",1071,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__36772__auto____$1,or__36772__auto__,ppstr,vec__50171,clj,_QMARK_cb_uuid,G__50169,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__36772__auto____$1,or__36772__auto__,ppstr,vec__50171,clj,_QMARK_cb_uuid,G__50169,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-841221061);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
}
});})(G__50169,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__50169["onclose"] = ((function (G__50169,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var clean_QMARK_ = taoensso.encore.oget.call(null,ws_ev,"wasClean");
var code = taoensso.encore.oget.call(null,ws_ev,"code");
var reason = taoensso.encore.oget.call(null,ws_ev,"reason");
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev,new cljs.core.Keyword(null,"clean?","clean?",-1675631009),clean_QMARK_,new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null);
if(cljs.core.truth_(clean_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",1093,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (clean_QMARK_,code,reason,last_ws_close,G__50169,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean WebSocket close, will not attempt reconnect"], null);
});})(clean_QMARK_,code,reason,last_ws_close,G__50169,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,2080536935);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__50169,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__50124_SHARP_){
return cljs.core.assoc.call(null,p1__50124_SHARP_,new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__50169,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__50169,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__50125_SHARP_){
return cljs.core.assoc.call(null,taoensso.sente.chsk_state__GT_closed.call(null,p1__50125_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424)),new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__50169,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

return retry_fn.call(null);
}
});})(G__50169,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

return G__50169;
})());
}
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
;
var temp__4657__auto___50238__$1 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__4657__auto___50238__$1)){
var ms_50239 = temp__4657__auto___50238__$1;
var c__41583__auto___50240 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41583__auto___50240,ms_50239,temp__4657__auto___50238__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
var f__41584__auto__ = (function (){var switch__41471__auto__ = ((function (c__41583__auto___50240,ms_50239,temp__4657__auto___50238__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function (state_50201){
var state_val_50202 = (state_50201[(1)]);
if((state_val_50202 === (7))){
var inst_50197 = (state_50201[(2)]);
var state_50201__$1 = state_50201;
var statearr_50203_50241 = state_50201__$1;
(statearr_50203_50241[(2)] = inst_50197);

(statearr_50203_50241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50202 === (1))){
var state_50201__$1 = state_50201;
var statearr_50204_50242 = state_50201__$1;
(statearr_50204_50242[(2)] = null);

(statearr_50204_50242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50202 === (4))){
var inst_50178 = (state_50201[(2)]);
var inst_50179 = have_handle_QMARK_.call(null);
var state_50201__$1 = (function (){var statearr_50205 = state_50201;
(statearr_50205[(7)] = inst_50178);

return statearr_50205;
})();
if(cljs.core.truth_(inst_50179)){
var statearr_50206_50243 = state_50201__$1;
(statearr_50206_50243[(1)] = (5));

} else {
var statearr_50207_50244 = state_50201__$1;
(statearr_50207_50244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50202 === (6))){
var state_50201__$1 = state_50201;
var statearr_50208_50245 = state_50201__$1;
(statearr_50208_50245[(2)] = null);

(statearr_50208_50245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50202 === (3))){
var inst_50199 = (state_50201[(2)]);
var state_50201__$1 = state_50201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50201__$1,inst_50199);
} else {
if((state_val_50202 === (2))){
var inst_50175 = cljs.core.deref.call(null,self__.udt_last_comms_);
var inst_50176 = cljs.core.async.timeout.call(null,ms_50239);
var state_50201__$1 = (function (){var statearr_50209 = state_50201;
(statearr_50209[(8)] = inst_50175);

return statearr_50209;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50201__$1,(4),inst_50176);
} else {
if((state_val_50202 === (9))){
var state_50201__$1 = state_50201;
var statearr_50210_50246 = state_50201__$1;
(statearr_50210_50246[(2)] = null);

(statearr_50210_50246[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50202 === (5))){
var inst_50175 = (state_50201[(8)]);
var inst_50181 = cljs.core.deref.call(null,self__.udt_last_comms_);
var inst_50182 = cljs.core._EQ_.call(null,inst_50175,inst_50181);
var state_50201__$1 = state_50201;
if(inst_50182){
var statearr_50211_50247 = state_50201__$1;
(statearr_50211_50247[(1)] = (8));

} else {
var statearr_50212_50248 = state_50201__$1;
(statearr_50212_50248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50202 === (10))){
var inst_50193 = (state_50201[(2)]);
var state_50201__$1 = (function (){var statearr_50213 = state_50201;
(statearr_50213[(9)] = inst_50193);

return statearr_50213;
})();
var statearr_50214_50249 = state_50201__$1;
(statearr_50214_50249[(2)] = null);

(statearr_50214_50249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50202 === (8))){
var inst_50184 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50185 = [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)];
var inst_50186 = (new cljs.core.PersistentVector(null,1,(5),inst_50184,inst_50185,null));
var inst_50187 = [new cljs.core.Keyword(null,"flush?","flush?",-108887231)];
var inst_50188 = [true];
var inst_50189 = cljs.core.PersistentHashMap.fromArrays(inst_50187,inst_50188);
var inst_50190 = taoensso.sente._chsk_send_BANG_.call(null,chsk__$1,inst_50186,inst_50189);
var state_50201__$1 = state_50201;
var statearr_50215_50250 = state_50201__$1;
(statearr_50215_50250[(2)] = inst_50190);

(statearr_50215_50250[(1)] = (10));


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
});})(c__41583__auto___50240,ms_50239,temp__4657__auto___50238__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
;
return ((function (switch__41471__auto__,c__41583__auto___50240,ms_50239,temp__4657__auto___50238__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function() {
var taoensso$sente$state_machine__41472__auto__ = null;
var taoensso$sente$state_machine__41472__auto____0 = (function (){
var statearr_50219 = [null,null,null,null,null,null,null,null,null,null];
(statearr_50219[(0)] = taoensso$sente$state_machine__41472__auto__);

(statearr_50219[(1)] = (1));

return statearr_50219;
});
var taoensso$sente$state_machine__41472__auto____1 = (function (state_50201){
while(true){
var ret_value__41473__auto__ = (function (){try{while(true){
var result__41474__auto__ = switch__41471__auto__.call(null,state_50201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41474__auto__;
}
break;
}
}catch (e50220){if((e50220 instanceof Object)){
var ex__41475__auto__ = e50220;
var statearr_50221_50251 = state_50201;
(statearr_50221_50251[(5)] = ex__41475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50252 = state_50201;
state_50201 = G__50252;
continue;
} else {
return ret_value__41473__auto__;
}
break;
}
});
taoensso$sente$state_machine__41472__auto__ = function(state_50201){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__41472__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__41472__auto____1.call(this,state_50201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__41472__auto____0;
taoensso$sente$state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__41472__auto____1;
return taoensso$sente$state_machine__41472__auto__;
})()
;})(switch__41471__auto__,c__41583__auto___50240,ms_50239,temp__4657__auto___50238__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
})();
var state__41585__auto__ = (function (){var statearr_50222 = f__41584__auto__.call(null);
(statearr_50222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41583__auto___50240);

return statearr_50222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41585__auto__);
});})(c__41583__auto___50240,ms_50239,temp__4657__auto___50238__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
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

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__37428__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__37428__auto__,writer__37429__auto__){
return cljs.core._write.call(null,writer__37429__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__50128){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__50128),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__50128),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__50128),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__50128),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__50128),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968).cljs$core$IFn$_invoke$arity$1(G__50128),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__50128),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__50128),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__50128),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__50128),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__50128),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__50128),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__50128),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639).cljs$core$IFn$_invoke$arity$1(G__50128),null,cljs.core.dissoc.call(null,G__50128,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)),null));
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
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__37394__auto__,k__37395__auto__){
var self__ = this;
var this__37394__auto____$1 = this;
return cljs.core._lookup.call(null,this__37394__auto____$1,k__37395__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__37396__auto__,k50260,else__37397__auto__){
var self__ = this;
var this__37396__auto____$1 = this;
var G__50262 = (((k50260 instanceof cljs.core.Keyword))?k50260.fqn:null);
switch (G__50262) {
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
return cljs.core.get.call(null,self__.__extmap,k50260,else__37397__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__37408__auto__,writer__37409__auto__,opts__37410__auto__){
var self__ = this;
var this__37408__auto____$1 = this;
var pr_pair__37411__auto__ = ((function (this__37408__auto____$1){
return (function (keyval__37412__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__37409__auto__,cljs.core.pr_writer,""," ","",opts__37410__auto__,keyval__37412__auto__);
});})(this__37408__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__37409__auto__,pr_pair__37411__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__37410__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50259){
var self__ = this;
var G__50259__$1 = this;
return (new cljs.core.RecordIter((0),G__50259__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__37392__auto__){
var self__ = this;
var this__37392__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__37388__auto__){
var self__ = this;
var this__37388__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__37398__auto__){
var self__ = this;
var this__37398__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__37389__auto__){
var self__ = this;
var this__37389__auto____$1 = this;
var h__37207__auto__ = self__.__hash;
if(!((h__37207__auto__ == null))){
return h__37207__auto__;
} else {
var h__37207__auto____$1 = cljs.core.hash_imap.call(null,this__37389__auto____$1);
self__.__hash = h__37207__auto____$1;

return h__37207__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__37390__auto__,other__37391__auto__){
var self__ = this;
var this__37390__auto____$1 = this;
if(cljs.core.truth_((function (){var and__36760__auto__ = other__37391__auto__;
if(cljs.core.truth_(and__36760__auto__)){
var and__36760__auto____$1 = (this__37390__auto____$1.constructor === other__37391__auto__.constructor);
if(and__36760__auto____$1){
return cljs.core.equiv_map.call(null,this__37390__auto____$1,other__37391__auto__);
} else {
return and__36760__auto____$1;
}
} else {
return and__36760__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__37403__auto__,k__37404__auto__){
var self__ = this;
var this__37403__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__37404__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__37403__auto____$1),self__.__meta),k__37404__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__37404__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__37401__auto__,k__37402__auto__,G__50259){
var self__ = this;
var this__37401__auto____$1 = this;
var pred__50263 = cljs.core.keyword_identical_QMARK_;
var expr__50264 = k__37402__auto__;
if(cljs.core.truth_(pred__50263.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__50264))){
return (new taoensso.sente.ChAjaxSocket(G__50259,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50263.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__50264))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__50259,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50263.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__50264))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__50259,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50263.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__50264))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__50259,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50263.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__50264))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__50259,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50263.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__50264))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__50259,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50263.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__50264))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__50259,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50263.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__50264))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,G__50259,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50263.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__50264))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,G__50259,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50263.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__50264))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__50259,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50263.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__50264))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__50259,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__37402__auto__,G__50259),null));
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__37406__auto__){
var self__ = this;
var this__37406__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__37393__auto__,G__50259){
var self__ = this;
var this__37393__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__50259,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__37399__auto__,entry__37400__auto__){
var self__ = this;
var this__37399__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__37400__auto__)){
return cljs.core._assoc.call(null,this__37399__auto____$1,cljs.core._nth.call(null,entry__37400__auto__,(0)),cljs.core._nth.call(null,entry__37400__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__37399__auto____$1,entry__37400__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (chsk__$1){
return (function (p1__50253_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__50253_SHARP_,reason);
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
var map__50266 = opts;
var map__50266__$1 = ((((!((map__50266 == null)))?((((map__50266.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50266.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50266):map__50266);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__50266__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__50266__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__50266__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var csrf_token = new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_));
taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__36772__auto__ = _QMARK_timeout_ms;
if(cljs.core.truth_(or__36772__auto__)){
return or__36772__auto__;
} else {
var or__36772__auto____$1 = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__36772__auto____$1)){
return or__36772__auto____$1;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),csrf_token], null)),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token,new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null));
})()], null)),((function (csrf_token,map__50266,map__50266__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function taoensso$sente$ajax_cb(p__50268){
var map__50274 = p__50268;
var map__50274__$1 = ((((!((map__50274 == null)))?((((map__50274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50274):map__50274);
var _QMARK_error = cljs.core.get.call(null,map__50274__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__50274__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (map__50274,map__50274__$1,_QMARK_error,_QMARK_content,csrf_token,map__50266,map__50266__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__50254_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__50254_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
});})(map__50274,map__50274__$1,_QMARK_error,_QMARK_content,csrf_token,map__50266,map__50266__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
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
var vec__50276 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__50276,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__50276,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",1213,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (content,resp_ppstr,vec__50276,resp_clj,___$1,map__50274,map__50274__$1,_QMARK_error,_QMARK_content,csrf_token,map__50266,map__50266__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__50276,resp_clj,___$1,map__50274,map__50274__$1,_QMARK_error,_QMARK_content,csrf_token,map__50266,map__50266__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,237413199);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (content,resp_ppstr,vec__50276,resp_clj,___$1,map__50274,map__50274__$1,_QMARK_error,_QMARK_content,csrf_token,map__50266,map__50266__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__50255_SHARP_){
return cljs.core.assoc.call(null,p1__50255_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
});})(content,resp_ppstr,vec__50276,resp_clj,___$1,map__50274,map__50274__$1,_QMARK_error,_QMARK_content,csrf_token,map__50266,map__50266__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);
}
});})(csrf_token,map__50266,map__50266__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",1223,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,-878671869);

if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
var udt_next_reconnect = (taoensso.encore.now_udt.call(null) + backoff_ms);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",1231,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,-372141073);

goog.global.setTimeout(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return taoensso$sente$poll_fn.call(null,retry_count_STAR_);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__50256_SHARP_){
return cljs.core.assoc.call(null,p1__50256_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__36772__auto__ = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__36772__auto__)){
return or__36772__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null)))], null)),((function (retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn_$_ajax_cb(p__50290){
var map__50296 = p__50290;
var map__50296__$1 = ((((!((map__50296 == null)))?((((map__50296.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50296.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50296):map__50296);
var _QMARK_error = cljs.core.get.call(null,map__50296__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__50296__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn.call(null,(0));
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (map__50296,map__50296__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__50257_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__50257_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
});})(map__50296,map__50296__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

return retry_fn.call(null);

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__50298 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__50298,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_.call(null,clj);
if(cljs.core.truth_(handshake_QMARK_)){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (content,ppstr,vec__50298,clj,handshake_QMARK_,map__50296,map__50296__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__50258_SHARP_){
return cljs.core.assoc.call(null,p1__50258_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
});})(content,ppstr,vec__50298,clj,handshake_QMARK_,map__50296,map__50296__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

taoensso$sente$poll_fn.call(null,(0));

if(cljs.core.truth_(handshake_QMARK_)){
return null;
} else {
var or__36772__auto__ = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)))?(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__))){
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("debug","timeout","debug/timeout",309499949)], null)], null));
} else {
}

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__36772__auto__)){
return or__36772__auto__;
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

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__37428__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__37428__auto__,writer__37429__auto__){
return cljs.core._write.call(null,writer__37429__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__50261){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__50261),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__50261),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__50261),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__50261),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__50261),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__50261),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__50261),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__50261),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__50261),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__50261),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__50261),null,cljs.core.dissoc.call(null,G__50261,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)),null));
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
taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__37394__auto__,k__37395__auto__){
var self__ = this;
var this__37394__auto____$1 = this;
return cljs.core._lookup.call(null,this__37394__auto____$1,k__37395__auto__,null);
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__37396__auto__,k50303,else__37397__auto__){
var self__ = this;
var this__37396__auto____$1 = this;
var G__50305 = (((k50303 instanceof cljs.core.Keyword))?k50303.fqn:null);
switch (G__50305) {
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
return cljs.core.get.call(null,self__.__extmap,k50303,else__37397__auto__);

}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__37408__auto__,writer__37409__auto__,opts__37410__auto__){
var self__ = this;
var this__37408__auto____$1 = this;
var pr_pair__37411__auto__ = ((function (this__37408__auto____$1){
return (function (keyval__37412__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__37409__auto__,cljs.core.pr_writer,""," ","",opts__37410__auto__,keyval__37412__auto__);
});})(this__37408__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__37409__auto__,pr_pair__37411__auto__,"#taoensso.sente.ChAutoSocket{",", ","}",opts__37410__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50302){
var self__ = this;
var G__50302__$1 = this;
return (new cljs.core.RecordIter((0),G__50302__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__37392__auto__){
var self__ = this;
var this__37392__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__37388__auto__){
var self__ = this;
var this__37388__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__37398__auto__){
var self__ = this;
var this__37398__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__37389__auto__){
var self__ = this;
var this__37389__auto____$1 = this;
var h__37207__auto__ = self__.__hash;
if(!((h__37207__auto__ == null))){
return h__37207__auto__;
} else {
var h__37207__auto____$1 = cljs.core.hash_imap.call(null,this__37389__auto____$1);
self__.__hash = h__37207__auto____$1;

return h__37207__auto____$1;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__37390__auto__,other__37391__auto__){
var self__ = this;
var this__37390__auto____$1 = this;
if(cljs.core.truth_((function (){var and__36760__auto__ = other__37391__auto__;
if(cljs.core.truth_(and__36760__auto__)){
var and__36760__auto____$1 = (this__37390__auto____$1.constructor === other__37391__auto__.constructor);
if(and__36760__auto____$1){
return cljs.core.equiv_map.call(null,this__37390__auto____$1,other__37391__auto__);
} else {
return and__36760__auto____$1;
}
} else {
return and__36760__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__37403__auto__,k__37404__auto__){
var self__ = this;
var this__37403__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl_","impl_",1218818179),null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),null,new cljs.core.Keyword(null,"state_","state_",957667102),null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),null], null), null),k__37404__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__37403__auto____$1),self__.__meta),k__37404__auto__);
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__37404__auto__)),null));
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__37401__auto__,k__37402__auto__,G__50302){
var self__ = this;
var this__37401__auto____$1 = this;
var pred__50306 = cljs.core.keyword_identical_QMARK_;
var expr__50307 = k__37402__auto__;
if(cljs.core.truth_(pred__50306.call(null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__50307))){
return (new taoensso.sente.ChAutoSocket(G__50302,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50306.call(null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__50307))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__50302,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50306.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__50307))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__50302,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50306.call(null,new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__50307))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__50302,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__37402__auto__,G__50302),null));
}
}
}
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__37406__auto__){
var self__ = this;
var this__37406__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__37393__auto__,G__50302){
var self__ = this;
var this__37393__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__50302,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__37399__auto__,entry__37400__auto__){
var self__ = this;
var this__37399__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__37400__auto__)){
return cljs.core._assoc.call(null,this__37399__auto____$1,cljs.core._nth.call(null,entry__37400__auto__,(0)),cljs.core._nth.call(null,entry__37400__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__37399__auto____$1,entry__37400__auto__);
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
var map__50309 = opts;
var map__50309__$1 = ((((!((map__50309 == null)))?((((map__50309.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50309.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50309):map__50309);
var _QMARK_cb = cljs.core.get.call(null,map__50309__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
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
var downgraded_QMARK___50312 = cljs.core.atom.call(null,false);
cljs.core.add_watch.call(null,self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080),((function (downgraded_QMARK___50312,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
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
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,downgraded_QMARK___50312,false,true))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",1359,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (ever_opened_QMARK__,temp__4657__auto____$1,impl,temp__4657__auto__,downgraded_QMARK___50312,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
});})(ever_opened_QMARK__,temp__4657__auto____$1,impl,temp__4657__auto__,downgraded_QMARK___50312,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
,null)),null,1580221246);

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
});})(downgraded_QMARK___50312,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
);

return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.new_ChWebSocket.call(null,ws_chsk_opts__$1));
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
;
cljs.core.reset_BANG_.call(null,self__.impl_,(function (){var or__36772__auto__ = ws_conn_BANG_.call(null);
if(cljs.core.truth_(or__36772__auto__)){
return or__36772__auto__;
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

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrSeq = (function (this__37428__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrWriter = (function (this__37428__auto__,writer__37429__auto__){
return cljs.core._write.call(null,writer__37429__auto__,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.__GT_ChAutoSocket = (function taoensso$sente$__GT_ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_){
return (new taoensso.sente.ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_,null,null,null));
});

taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__50304){
return (new taoensso.sente.ChAutoSocket(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104).cljs$core$IFn$_invoke$arity$1(G__50304),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327).cljs$core$IFn$_invoke$arity$1(G__50304),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__50304),new cljs.core.Keyword(null,"impl_","impl_",1218818179).cljs$core$IFn$_invoke$arity$1(G__50304),null,cljs.core.dissoc.call(null,G__50304,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts){
return taoensso.sente.map__GT_ChAutoSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false], null)),new cljs.core.Keyword(null,"impl_","impl_",1218818179),cljs.core.atom.call(null,null)], null),opts));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__50317 = (((protocol instanceof cljs.core.Keyword))?protocol.fqn:null);
switch (G__50317) {
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
}catch (e50318){if((e50318 instanceof Error)){
var e = e50318;
return e;
} else {
throw e50318;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:el #{\"https:\" \"http:\"}] protocol)",protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__50319 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__50319) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__50320 = protocol__$2;
switch (G__50320) {
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
var args__37854__auto__ = [];
var len__37847__auto___50341 = arguments.length;
var i__37848__auto___50342 = (0);
while(true){
if((i__37848__auto___50342 < len__37847__auto___50341)){
args__37854__auto__.push((arguments[i__37848__auto___50342]));

var G__50343 = (i__37848__auto___50342 + (1));
i__37848__auto___50342 = G__50343;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((1) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37855__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__50326){
var vec__50327 = p__50326;
var map__50330 = cljs.core.nth.call(null,vec__50327,(0),null);
var map__50330__$1 = ((((!((map__50330 == null)))?((((map__50330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50330):map__50330);
var opts = map__50330__$1;
var ajax_opts = cljs.core.get.call(null,map__50330__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.call(null,map__50330__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var client_id = cljs.core.get.call(null,map__50330__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__36772__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__36772__auto__)){
return or__36772__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var protocol = cljs.core.get.call(null,map__50330__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var packer = cljs.core.get.call(null,map__50330__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.call(null,map__50330__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.call(null,map__50330__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.call(null,map__50330__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.call(null,map__50330__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var backoff_ms_fn = cljs.core.get.call(null,map__50330__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__50330__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__50327,(1),null);
var e_50344 = (function (){try{if(((function (vec__50327,map__50330,map__50330__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)),x);
});})(vec__50327,map__50330,map__50330__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e50332){if((e50332 instanceof Error)){
var e = e50332;
return e;
} else {
throw e50332;

}
}})();
if((e_50344 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:in #{:ws :ajax :auto}] type)",type,e_50344,null);
}

var e_50345 = (function (){try{if(taoensso.encore.nblank_str_QMARK_.call(null,client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e50333){if((e50333 instanceof Error)){
var e = e50333;
return e;
} else {
throw e50333;

}
}})();
if((e_50345 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/nblank-str? client-id)",client_id,e_50345,null);
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",1424,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__50327,map__50330,map__50330__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__50327,map__50330,map__50330__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,1811849484);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",1425,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__50327,map__50330,map__50330__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__50327,map__50330,map__50330__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,1124364643);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var vec__50334 = (function (){var win_loc = taoensso.encore.get_win_loc.call(null);
var path__$1 = (function (){var or__36772__auto__ = path;
if(cljs.core.truth_(or__36772__auto__)){
return or__36772__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
var temp__4655__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ws","ws",86841443)),f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
} else {
var protocol__$1 = (function (){var or__36772__auto__ = protocol;
if(cljs.core.truth_(or__36772__auto__)){
return or__36772__auto__;
} else {
var or__36772__auto____$1 = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_loc);
if(cljs.core.truth_(or__36772__auto____$1)){
return or__36772__auto____$1;
} else {
return new cljs.core.Keyword(null,"http","http",382524695);
}
}
})();
var host__$1 = (function (){var or__36772__auto__ = host;
if(cljs.core.truth_(or__36772__auto__)){
return or__36772__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.sente.get_chsk_url.call(null,protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443)),taoensso.sente.get_chsk_url.call(null,protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
}
})();
var ws_url = cljs.core.nth.call(null,vec__50334,(0),null);
var ajax_url = cljs.core.nth.call(null,vec__50334,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(128))),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),(function (){var buf = cljs.core.async.sliding_buffer.call(null,(512));
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.chan.call(null,buf,cljs.core.map.call(null,((function (buf,packer__$1,vec__50334,ws_url,ajax_url,vec__50327,map__50330,map__50330__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(buf,packer__$1,vec__50334,ws_url,ajax_url,vec__50327,map__50330,map__50330__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
} else {
return cljs.core.async.chan.call(null,buf);
}
})()], null);
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),ws_kalive_ms], null);
var ws_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),ws_url,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var ajax_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),ajax_url,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),ajax_opts,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),ws_chsk_opts,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_.call(null,(function (){var G__50337 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__50337) {
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
var ev_msg_ch = cljs.core.async.chan.call(null,(1),cljs.core.map.call(null,((function (chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__4655__auto__,packer__$1,vec__50334,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__50327,map__50330,map__50330__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__50338 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__50338,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__50338,(1),null);
var ev__$1 = vec__50338;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),internal_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),chsk_state_,new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__4655__auto__,packer__$1,vec__50334,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__50327,map__50330,map__50330__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
cljs.core.async.pipe.call(null,ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ev_msg_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",1513,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto__,packer__$1,vec__50334,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__50327,map__50330,map__50330__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
});})(temp__4655__auto__,packer__$1,vec__50334,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__50327,map__50330,map__50330__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,-681748183);
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq50324){
var G__50325 = cljs.core.first.call(null,seq50324);
var seq50324__$1 = cljs.core.next.call(null,seq50324);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__50325,seq50324__$1);
});

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__50426 = opts;
var map__50426__$1 = ((((!((map__50426 == null)))?((((map__50426.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50426.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50426):map__50426);
var trace_evs_QMARK_ = cljs.core.get.call(null,map__50426__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__50426__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.call(null,map__50426__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
var ch_ctrl = cljs.core.async.chan.call(null);
var execute1 = ((function (map__50426,map__50426__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl){
return (function (f){
return f.call(null);
});})(map__50426,map__50426__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl))
;
var c__41583__auto___50505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41583__auto___50505,map__50426,map__50426__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
var f__41584__auto__ = (function (){var switch__41471__auto__ = ((function (c__41583__auto___50505,map__50426,map__50426__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (state_50472){
var state_val_50473 = (state_50472[(1)]);
if((state_val_50473 === (7))){
var inst_50468 = (state_50472[(2)]);
var state_50472__$1 = state_50472;
var statearr_50474_50506 = state_50472__$1;
(statearr_50474_50506[(2)] = inst_50468);

(statearr_50474_50506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50473 === (1))){
var state_50472__$1 = state_50472;
var statearr_50475_50507 = state_50472__$1;
(statearr_50475_50507[(2)] = null);

(statearr_50475_50507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50473 === (4))){
var inst_50439 = (state_50472[(7)]);
var inst_50436 = (state_50472[(8)]);
var inst_50438 = (state_50472[(9)]);
var inst_50436__$1 = (state_50472[(2)]);
var inst_50437 = cljs.core.nth.call(null,inst_50436__$1,(0),null);
var inst_50438__$1 = cljs.core.nth.call(null,inst_50436__$1,(1),null);
var inst_50439__$1 = cljs.core._EQ_.call(null,inst_50438__$1,ch_ctrl);
var state_50472__$1 = (function (){var statearr_50476 = state_50472;
(statearr_50476[(7)] = inst_50439__$1);

(statearr_50476[(10)] = inst_50437);

(statearr_50476[(8)] = inst_50436__$1);

(statearr_50476[(9)] = inst_50438__$1);

return statearr_50476;
})();
if(inst_50439__$1){
var statearr_50477_50508 = state_50472__$1;
(statearr_50477_50508[(1)] = (5));

} else {
var statearr_50478_50509 = state_50472__$1;
(statearr_50478_50509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50473 === (15))){
var inst_50437 = (state_50472[(10)]);
var state_50472__$1 = state_50472;
var statearr_50479_50510 = state_50472__$1;
(statearr_50479_50510[(2)] = inst_50437);

(statearr_50479_50510[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50473 === (13))){
var inst_50454 = (state_50472[(2)]);
var state_50472__$1 = state_50472;
var statearr_50480_50511 = state_50472__$1;
(statearr_50480_50511[(2)] = inst_50454);

(statearr_50480_50511[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50473 === (6))){
var inst_50437 = (state_50472[(10)]);
var inst_50444 = (inst_50437 == null);
var inst_50445 = cljs.core.not.call(null,inst_50444);
var state_50472__$1 = state_50472;
if(inst_50445){
var statearr_50481_50512 = state_50472__$1;
(statearr_50481_50512[(1)] = (8));

} else {
var statearr_50482_50513 = state_50472__$1;
(statearr_50482_50513[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50473 === (3))){
var inst_50470 = (state_50472[(2)]);
var state_50472__$1 = state_50472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50472__$1,inst_50470);
} else {
if((state_val_50473 === (12))){
var state_50472__$1 = state_50472;
var statearr_50483_50514 = state_50472__$1;
(statearr_50483_50514[(2)] = false);

(statearr_50483_50514[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50473 === (2))){
var inst_50432 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50433 = [ch_recv,ch_ctrl];
var inst_50434 = (new cljs.core.PersistentVector(null,2,(5),inst_50432,inst_50433,null));
var state_50472__$1 = state_50472;
return cljs.core.async.ioc_alts_BANG_.call(null,state_50472__$1,(4),inst_50434);
} else {
if((state_val_50473 === (11))){
var state_50472__$1 = state_50472;
var statearr_50484_50515 = state_50472__$1;
(statearr_50484_50515[(2)] = true);

(statearr_50484_50515[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50473 === (9))){
var state_50472__$1 = state_50472;
var statearr_50485_50516 = state_50472__$1;
(statearr_50485_50516[(2)] = false);

(statearr_50485_50516[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50473 === (5))){
var state_50472__$1 = state_50472;
var statearr_50486_50517 = state_50472__$1;
(statearr_50486_50517[(2)] = null);

(statearr_50486_50517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50473 === (14))){
var inst_50437 = (state_50472[(10)]);
var inst_50459 = cljs.core.apply.call(null,cljs.core.hash_map,inst_50437);
var state_50472__$1 = state_50472;
var statearr_50487_50518 = state_50472__$1;
(statearr_50487_50518[(2)] = inst_50459);

(statearr_50487_50518[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50473 === (16))){
var inst_50439 = (state_50472[(7)]);
var inst_50437 = (state_50472[(10)]);
var inst_50436 = (state_50472[(8)]);
var inst_50438 = (state_50472[(9)]);
var inst_50462 = (state_50472[(2)]);
var inst_50463 = cljs.core.get.call(null,inst_50462,new cljs.core.Keyword(null,"event","event",301435442));
var inst_50464 = (function (){var vec__50429 = inst_50436;
var v = inst_50437;
var p = inst_50438;
var stop_QMARK_ = inst_50439;
var map__50442 = inst_50462;
var event_msg = inst_50462;
var event = inst_50463;
return ((function (vec__50429,v,p,stop_QMARK_,map__50442,event_msg,event,inst_50439,inst_50437,inst_50436,inst_50438,inst_50462,inst_50463,state_val_50473,c__41583__auto___50505,map__50426,map__50426__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",1540,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__50429,v,p,stop_QMARK_,map__50442,event_msg,event,inst_50439,inst_50437,inst_50436,inst_50438,inst_50462,inst_50463,state_val_50473,c__41583__auto___50505,map__50426,map__50426__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});})(vec__50429,v,p,stop_QMARK_,map__50442,event_msg,event,inst_50439,inst_50437,inst_50436,inst_50438,inst_50462,inst_50463,state_val_50473,c__41583__auto___50505,map__50426,map__50426__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-1807701616);
} else {
}

return event_msg_handler.call(null,(cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.sente.server_event_msg_QMARK_.call(null,event_msg))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e50490){if((e50490 instanceof Error)){
var e = e50490;
return e;
} else {
throw e50490;

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
}catch (e50491){if((e50491 instanceof Error)){
var e = e50491;
return e;
} else {
throw e50491;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,"(client-event-msg? event-msg)",event_msg,e,null);
}
})()));
}catch (e50488){if((e50488 instanceof Error)){
var e1 = e50488;
try{var temp__4655__auto__ = error_handler;
if(cljs.core.truth_(temp__4655__auto__)){
var eh = temp__4655__auto__;
return error_handler.call(null,e1,event_msg);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",1549,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto__,e1,vec__50429,v,p,stop_QMARK_,map__50442,event_msg,event,inst_50439,inst_50437,inst_50436,inst_50438,inst_50462,inst_50463,state_val_50473,c__41583__auto___50505,map__50426,map__50426__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,"Chsk router `event-msg-handler` error: %s",event], null);
});})(temp__4655__auto__,e1,vec__50429,v,p,stop_QMARK_,map__50442,event_msg,event,inst_50439,inst_50437,inst_50436,inst_50438,inst_50462,inst_50463,state_val_50473,c__41583__auto___50505,map__50426,map__50426__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,1461498662);
}
}catch (e50489){if((e50489 instanceof Error)){
var e2 = e50489;
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init6386674077898673356.clj",1550,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e2,e1,vec__50429,v,p,stop_QMARK_,map__50442,event_msg,event,inst_50439,inst_50437,inst_50436,inst_50438,inst_50462,inst_50463,state_val_50473,c__41583__auto___50505,map__50426,map__50426__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});})(e2,e1,vec__50429,v,p,stop_QMARK_,map__50442,event_msg,event,inst_50439,inst_50437,inst_50436,inst_50438,inst_50462,inst_50463,state_val_50473,c__41583__auto___50505,map__50426,map__50426__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,596830610);
} else {
throw e50489;

}
}} else {
throw e50488;

}
}});
;})(vec__50429,v,p,stop_QMARK_,map__50442,event_msg,event,inst_50439,inst_50437,inst_50436,inst_50438,inst_50462,inst_50463,state_val_50473,c__41583__auto___50505,map__50426,map__50426__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var inst_50465 = execute1.call(null,inst_50464);
var state_50472__$1 = (function (){var statearr_50492 = state_50472;
(statearr_50492[(11)] = inst_50465);

return statearr_50492;
})();
var statearr_50493_50519 = state_50472__$1;
(statearr_50493_50519[(2)] = null);

(statearr_50493_50519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50473 === (10))){
var inst_50457 = (state_50472[(2)]);
var state_50472__$1 = state_50472;
if(cljs.core.truth_(inst_50457)){
var statearr_50494_50520 = state_50472__$1;
(statearr_50494_50520[(1)] = (14));

} else {
var statearr_50495_50521 = state_50472__$1;
(statearr_50495_50521[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50473 === (8))){
var inst_50437 = (state_50472[(10)]);
var inst_50447 = inst_50437.cljs$lang$protocol_mask$partition0$;
var inst_50448 = (inst_50447 & (64));
var inst_50449 = inst_50437.cljs$core$ISeq$;
var inst_50450 = (inst_50448) || (inst_50449);
var state_50472__$1 = state_50472;
if(cljs.core.truth_(inst_50450)){
var statearr_50496_50522 = state_50472__$1;
(statearr_50496_50522[(1)] = (11));

} else {
var statearr_50497_50523 = state_50472__$1;
(statearr_50497_50523[(1)] = (12));

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
});})(c__41583__auto___50505,map__50426,map__50426__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
;
return ((function (switch__41471__auto__,c__41583__auto___50505,map__50426,map__50426__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__41472__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__41472__auto____0 = (function (){
var statearr_50501 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50501[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__41472__auto__);

(statearr_50501[(1)] = (1));

return statearr_50501;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__41472__auto____1 = (function (state_50472){
while(true){
var ret_value__41473__auto__ = (function (){try{while(true){
var result__41474__auto__ = switch__41471__auto__.call(null,state_50472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41474__auto__;
}
break;
}
}catch (e50502){if((e50502 instanceof Object)){
var ex__41475__auto__ = e50502;
var statearr_50503_50524 = state_50472;
(statearr_50503_50524[(5)] = ex__41475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50525 = state_50472;
state_50472 = G__50525;
continue;
} else {
return ret_value__41473__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__41472__auto__ = function(state_50472){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__41472__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__41472__auto____1.call(this,state_50472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__41472__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__41472__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__41472__auto__;
})()
;})(switch__41471__auto__,c__41583__auto___50505,map__50426,map__50426__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var state__41585__auto__ = (function (){var statearr_50504 = f__41584__auto__.call(null);
(statearr_50504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41583__auto___50505);

return statearr_50504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41585__auto__);
});})(c__41583__auto___50505,map__50426,map__50426__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
);


return ((function (map__50426,map__50426__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(map__50426,map__50426__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
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
var args__37854__auto__ = [];
var len__37847__auto___50535 = arguments.length;
var i__37848__auto___50536 = (0);
while(true){
if((i__37848__auto___50536 < len__37847__auto___50535)){
args__37854__auto__.push((arguments[i__37848__auto___50536]));

var G__50537 = (i__37848__auto___50536 + (1));
i__37848__auto___50536 = G__50537;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((2) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37855__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__50529){
var vec__50530 = p__50529;
var map__50533 = cljs.core.nth.call(null,vec__50530,(0),null);
var map__50533__$1 = ((((!((map__50533 == null)))?((((map__50533.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50533.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50533):map__50533);
var opts = map__50533__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__50533__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__50533__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.call(null,map__50533__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
return taoensso.sente._start_chsk_router_BANG_.call(null,new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq50526){
var G__50527 = cljs.core.first.call(null,seq50526);
var seq50526__$1 = cljs.core.next.call(null,seq50526);
var G__50528 = cljs.core.first.call(null,seq50526__$1);
var seq50526__$2 = cljs.core.next.call(null,seq50526__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__50527,G__50528,seq50526__$2);
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
var args__37854__auto__ = [];
var len__37847__auto___50547 = arguments.length;
var i__37848__auto___50548 = (0);
while(true){
if((i__37848__auto___50548 < len__37847__auto___50547)){
args__37854__auto__.push((arguments[i__37848__auto___50548]));

var G__50549 = (i__37848__auto___50548 + (1));
i__37848__auto___50548 = G__50549;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((2) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37855__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__50541){
var vec__50542 = p__50541;
var map__50545 = cljs.core.nth.call(null,vec__50542,(0),null);
var map__50545__$1 = ((((!((map__50545 == null)))?((((map__50545.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50545.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50545):map__50545);
var opts = map__50545__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__50545__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__50545__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,cljs.core.not.call(null,new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq50538){
var G__50539 = cljs.core.first.call(null,seq50538);
var seq50538__$1 = cljs.core.next.call(null,seq50538);
var G__50540 = cljs.core.first.call(null,seq50538__$1);
var seq50538__$2 = cljs.core.next.call(null,seq50538__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__50539,G__50540,seq50538__$2);
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
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__50550,websocket_QMARK_){
var map__50553 = p__50550;
var map__50553__$1 = ((((!((map__50553 == null)))?((((map__50553.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50553.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50553):map__50553);
var location = map__50553__$1;
var protocol = cljs.core.get.call(null,map__50553__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.call(null,map__50553__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__50553__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.call(null,protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str(protocol__$1),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__36772__auto__ = path;
if(cljs.core.truth_(or__36772__auto__)){
return or__36772__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=sente.js.map