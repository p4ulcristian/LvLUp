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
var vec__48282 = x;
var ev_id = cljs.core.nth.call(null,vec__48282,(0),null);
var _ = cljs.core.nth.call(null,vec__48282,(1),null);
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
var and__36790__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__36790__auto__){
var and__36790__auto____$1 = taoensso.encore.ks_EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__36790__auto____$1){
var map__48295 = x;
var map__48295__$1 = ((((!((map__48295 == null)))?((((map__48295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48295):map__48295);
var ch_recv = cljs.core.get.call(null,map__48295__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__48295__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__48295__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__48295__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__36790__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__36790__auto____$2){
var and__36790__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__36790__auto____$3){
var and__36790__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(and__36790__auto____$4){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__36790__auto____$4;
}
} else {
return and__36790__auto____$3;
}
} else {
return and__36790__auto____$2;
}
} else {
return and__36790__auto____$1;
}
} else {
return and__36790__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__36790__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__36790__auto__){
var and__36790__auto____$1 = taoensso.encore.ks_EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__36790__auto____$1){
var map__48307 = x;
var map__48307__$1 = ((((!((map__48307 == null)))?((((map__48307.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48307.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48307):map__48307);
var ch_recv = cljs.core.get.call(null,map__48307__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__48307__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__48307__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.call(null,map__48307__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.call(null,map__48307__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.call(null,map__48307__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__48307__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var and__36790__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__36790__auto____$2){
var and__36790__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__36790__auto____$3){
var and__36790__auto____$4 = taoensso.encore.atom_QMARK_.call(null,connected_uids);
if(and__36790__auto____$4){
var and__36790__auto____$5 = cljs.core.map_QMARK_.call(null,ring_req);
if(and__36790__auto____$5){
var and__36790__auto____$6 = taoensso.encore.nblank_str_QMARK_.call(null,client_id);
if(and__36790__auto____$6){
var and__36790__auto____$7 = taoensso.sente.event_QMARK_.call(null,event);
if(cljs.core.truth_(and__36790__auto____$7)){
return ((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_reply_fn));
} else {
return and__36790__auto____$7;
}
} else {
return and__36790__auto____$6;
}
} else {
return and__36790__auto____$5;
}
} else {
return and__36790__auto____$4;
}
} else {
return and__36790__auto____$3;
}
} else {
return and__36790__auto____$2;
}
} else {
return and__36790__auto____$1;
}
} else {
return and__36790__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__48309){
var map__48315 = p__48309;
var map__48315__$1 = ((((!((map__48315 == null)))?((((map__48315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48315):map__48315);
var ev_msg = map__48315__$1;
var event = cljs.core.get.call(null,map__48315__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__48315__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__48317 = taoensso.sente.as_event.call(null,event);
var ev_id = cljs.core.nth.call(null,vec__48317,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__48317,(1),null);
var valid_event = vec__48317;
var ev_msg_STAR_ = cljs.core.merge.call(null,ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null));
if(cljs.core.not.call(null,taoensso.sente.server_event_msg_QMARK_.call(null,ev_msg_STAR_))){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",187,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__48317,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__48315,map__48315__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__48317,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__48315,map__48315__$1,ev_msg,event,_QMARK_reply_fn))
,null)),null,-2032400459);
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
}catch (e48327){var t = e48327;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",208,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (t,wrapped_QMARK_,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t,wrapped_QMARK_,pstr))
,null)),null,-844434652);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),pstr], null);
}})();
var vec__48324 = ((wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__48324,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__48324,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",214,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (wrapped_QMARK_,pstr,clj,vec__48324,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(wrapped_QMARK_,pstr,clj,vec__48324,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null,343497999);

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
var args48328 = [];
var len__37877__auto___48331 = arguments.length;
var i__37878__auto___48332 = (0);
while(true){
if((i__37878__auto___48332 < len__37877__auto___48331)){
args48328.push((arguments[i__37878__auto___48332]));

var G__48333 = (i__37878__auto___48332 + (1));
i__37878__auto___48332 = G__48333;
continue;
} else {
}
break;
}

var G__48330 = args48328.length;
switch (G__48330) {
case 3:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48328.length)].join('')));

}
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,_QMARK_packer_meta,clj){
var pstr = [cljs.core.str("-"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,clj,_QMARK_packer_meta)))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",224,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (unwrapped): %s -> %s",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_packer_meta,clj], null),pstr], null);
});})(pstr))
,null)),null,-130246765);

return pstr;
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4 = (function (packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
var pstr = [cljs.core.str("+"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,wrapped_clj,_QMARK_packer_meta)))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",234,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_uuid__$1,wrapped_clj,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (wrapped): %s -> %s",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_packer_meta,clj,_QMARK_cb_uuid__$1], null),pstr], null);
});})(_QMARK_cb_uuid__$1,wrapped_clj,pstr))
,null)),null,-1893794134);

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

taoensso.sente.EdnPacker.cljs$lang$ctorPrWriter = (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"taoensso.sente/EdnPacker");
});

taoensso.sente.__GT_EdnPacker = (function taoensso$sente$__GT_EdnPacker(){
return (new taoensso.sente.EdnPacker());
});

taoensso.sente.default_edn_packer = (new taoensso.sente.EdnPacker());
taoensso.sente.coerce_packer = (function taoensso$sente$coerce_packer(x){
if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"edn","edn",1317840885))){
return taoensso.sente.default_edn_packer;
} else {
var e = (function (){try{if((function (p1__48335_SHARP_){
if(!((p1__48335_SHARP_ == null))){
if((false) || (p1__48335_SHARP_.taoensso$sente$interfaces$IPacker$)){
return true;
} else {
if((!p1__48335_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__48335_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__48335_SHARP_);
}
}).call(null,x)){
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
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__48335#] (satisfies? interfaces/IPacker p1__48335#)) x)",x,e,null);
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
var args__37884__auto__ = [];
var len__37877__auto___48646 = arguments.length;
var i__37878__auto___48647 = (0);
while(true){
if((i__37878__auto___48647 < len__37877__auto___48646)){
args__37884__auto__.push((arguments[i__37878__auto___48647]));

var G__48648 = (i__37878__auto___48647 + (1));
i__37878__auto___48647 = G__48648;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__48343){
var vec__48344 = p__48343;
var map__48347 = cljs.core.nth.call(null,vec__48344,(0),null);
var map__48347__$1 = ((((!((map__48347 == null)))?((((map__48347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48347):map__48347);
var recv_buf_or_n = cljs.core.get.call(null,map__48347__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(1000)));
var ws_kalive_ms = cljs.core.get.call(null,map__48347__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(25)));
var lp_timeout_ms = cljs.core.get.call(null,map__48347__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var send_buf_ms_ajax = cljs.core.get.call(null,map__48347__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var send_buf_ms_ws = cljs.core.get.call(null,map__48347__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var user_id_fn = cljs.core.get.call(null,map__48347__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),((function (vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
});})(vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.call(null,map__48347__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),((function (vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
return (function (ring_req){
var or__36802__auto__ = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
var or__36802__auto____$1 = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__36802__auto____$1)){
return or__36802__auto____$1;
} else {
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
});})(vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.call(null,map__48347__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),((function (vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.call(null,map__48347__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48349){if((e48349 instanceof Error)){
var e = e48349;
return e;
} else {
throw e48349;

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
}catch (e48350){if((e48350 instanceof Error)){
var e = e48350;
return e;
} else {
throw e48350;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e,null);
}
})()], null);

var e_48649 = (function (){try{if(((function (vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__48340_SHARP_){
if(!((p1__48340_SHARP_ == null))){
if((false) || (p1__48340_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)){
return true;
} else {
if((!p1__48340_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__48340_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__48340_SHARP_);
}
});})(vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
.call(null,web_server_ch_adapter)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48351){if((e48351 instanceof Error)){
var e = e48351;
return e;
} else {
throw e48351;

}
}})();
if((e_48649 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__48340#] (satisfies? interfaces/IServerChanAdapter p1__48340#)) web-server-ch-adapter)",web_server_ch_adapter,e_48649,null);
}

var max_ms_48650 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_48650)){
throw cljs.core.ex_info.call(null,[cljs.core.str(":lp-timeout-ms must be < "),cljs.core.str(max_ms_48650)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),lp_timeout_ms,new cljs.core.Keyword(null,"default-client-side-ajax-timeout-ms","default-client-side-ajax-timeout-ms",1149929762),max_ms_48650], null));
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var ch_recv = cljs.core.async.chan.call(null,recv_buf_or_n);
var user_id_fn__$1 = ((function (packer__$1,ch_recv,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__36802__auto__ = user_id_fn.call(null,cljs.core.assoc.call(null,ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id));
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});})(packer__$1,ch_recv,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var conns_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var upd_conn_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var G__48651 = null;
var G__48651__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var vec__48353 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.call(null,vec__48353,(0),null);
var _udt = cljs.core.nth.call(null,vec__48353,(1),null);
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),_QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
var G__48651__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),new__QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
G__48651 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__48651__3.call(this,conn_type,uid,client_id);
case 4:
return G__48651__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48651.cljs$core$IFn$_invoke$arity$3 = G__48651__3;
G__48651.cljs$core$IFn$_invoke$arity$4 = G__48651__4;
return G__48651;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48356){if((e48356 instanceof Error)){
var e = e48356;
return e;
} else {
throw e48356;

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

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__48357){
var map__48358 = p__48357;
var map__48358__$1 = ((((!((map__48358 == null)))?((((map__48358.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48358.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48358):map__48358);
var old_m = map__48358__$1;
var ws = cljs.core.get.call(null,map__48358__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax__$1 = cljs.core.get.call(null,map__48358__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__48358__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__48360 = (((conn_type instanceof cljs.core.Keyword))?conn_type.fqn:null);
switch (G__48360) {
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
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48361){if((e48361 instanceof Error)){
var e = e48361;
return e;
} else {
throw e48361;

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

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__48362){
var map__48363 = p__48362;
var map__48363__$1 = ((((!((map__48363 == null)))?((((map__48363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48363):map__48363);
var old_m = map__48363__$1;
var ws = cljs.core.get.call(null,map__48363__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax__$1 = cljs.core.get.call(null,map__48363__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__48363__$1,new cljs.core.Keyword(null,"any","any",1705907423));
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
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__48653__delegate = function (user_id,ev,p__48365){
var vec__48366 = p__48365;
var map__48369 = cljs.core.nth.call(null,vec__48366,(0),null);
var map__48369__$1 = ((((!((map__48369 == null)))?((((map__48369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48369):map__48369);
var opts = map__48369__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__48369__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_48654 = ((cljs.core._EQ_.call(null,user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __48655 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",405,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_48654,vec__48366,map__48369,map__48369__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_48654,ev], null);
});})(uid_48654,vec__48366,map__48369,map__48369__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-822723205);
var __48656__$1 = (cljs.core.truth_(uid_48654)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Support for sending to `nil` user-ids has been REMOVED. "),cljs.core.str("Please send to `:sente/all-users-without-uid` instead.")].join('')),cljs.core.str("\n"),cljs.core.str("uid")].join('')))})());
var __48657__$2 = taoensso.sente.assert_event.call(null,ev);
var ev_uuid_48658 = taoensso.encore.uuid_str.call(null);
var flush_buffer_BANG__48659 = ((function (uid_48654,__48655,__48656__$1,__48657__$2,ev_uuid_48658,vec__48366,map__48369,map__48369__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type){
var temp__4657__auto__ = taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),((function (uid_48654,__48655,__48656__$1,__48657__$2,ev_uuid_48658,vec__48366,map__48369,map__48369__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__48371 = cljs.core.get.call(null,m,uid_48654);
var ___$3 = cljs.core.nth.call(null,vec__48371,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__48371,(1),null);
if(cljs.core.contains_QMARK_.call(null,ev_uuids,ev_uuid_48658)){
return taoensso.encore.swapped.call(null,cljs.core.dissoc.call(null,m,uid_48654),cljs.core.get.call(null,m,uid_48654));
} else {
return taoensso.encore.swapped.call(null,m,null);
}
});})(uid_48654,__48655,__48656__$1,__48657__$2,ev_uuid_48658,vec__48366,map__48369,map__48369__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__4657__auto__)){
var pulled = temp__4657__auto__;
var vec__48374 = pulled;
var buffered_evs = cljs.core.nth.call(null,vec__48374,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__48374,(1),null);
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",441,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__48374,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_48654,__48655,__48656__$1,__48657__$2,ev_uuid_48658,vec__48366,map__48369,map__48369__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s (with meta %s)",buffered_evs_ppstr,combined_packer_meta], null);
});})(packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__48374,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_48654,__48655,__48656__$1,__48657__$2,ev_uuid_48658,vec__48366,map__48369,map__48369__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1408744435);

var G__48377 = (((conn_type instanceof cljs.core.Keyword))?conn_type.fqn:null);
switch (G__48377) {
case "ws":
return taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_48654,buffered_evs_ppstr,upd_conn_BANG_);

break;
case "ajax":
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_48654,buffered_evs_ppstr);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(conn_type)].join('')));

}
} else {
return null;
}
});})(uid_48654,__48655,__48656__$1,__48657__$2,ev_uuid_48658,vec__48366,map__48369,map__48369__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.call(null,ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",452,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_48654,__48655,__48656__$1,__48657__$2,ev_uuid_48658,flush_buffer_BANG__48659,vec__48366,map__48369,map__48369__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_48654], null);
});})(uid_48654,__48655,__48656__$1,__48657__$2,ev_uuid_48658,flush_buffer_BANG__48659,vec__48366,map__48369,map__48369__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1341637050);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__48659.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__48659.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
}

var seq__48378_48661 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_48654], null))));
var chunk__48379_48662 = null;
var count__48380_48663 = (0);
var i__48381_48664 = (0);
while(true){
if((i__48381_48664 < count__48380_48663)){
var vec__48382_48665 = cljs.core._nth.call(null,chunk__48379_48662,i__48381_48664);
var _QMARK_sch_48666 = cljs.core.nth.call(null,vec__48382_48665,(0),null);
var _udt_48667 = cljs.core.nth.call(null,vec__48382_48665,(1),null);
var temp__4657__auto___48668 = _QMARK_sch_48666;
if(cljs.core.truth_(temp__4657__auto___48668)){
var sch_48669 = temp__4657__auto___48668;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_48669);
} else {
}

var G__48670 = seq__48378_48661;
var G__48671 = chunk__48379_48662;
var G__48672 = count__48380_48663;
var G__48673 = (i__48381_48664 + (1));
seq__48378_48661 = G__48670;
chunk__48379_48662 = G__48671;
count__48380_48663 = G__48672;
i__48381_48664 = G__48673;
continue;
} else {
var temp__4657__auto___48674 = cljs.core.seq.call(null,seq__48378_48661);
if(temp__4657__auto___48674){
var seq__48378_48675__$1 = temp__4657__auto___48674;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48378_48675__$1)){
var c__37613__auto___48676 = cljs.core.chunk_first.call(null,seq__48378_48675__$1);
var G__48677 = cljs.core.chunk_rest.call(null,seq__48378_48675__$1);
var G__48678 = c__37613__auto___48676;
var G__48679 = cljs.core.count.call(null,c__37613__auto___48676);
var G__48680 = (0);
seq__48378_48661 = G__48677;
chunk__48379_48662 = G__48678;
count__48380_48663 = G__48679;
i__48381_48664 = G__48680;
continue;
} else {
var vec__48385_48681 = cljs.core.first.call(null,seq__48378_48675__$1);
var _QMARK_sch_48682 = cljs.core.nth.call(null,vec__48385_48681,(0),null);
var _udt_48683 = cljs.core.nth.call(null,vec__48385_48681,(1),null);
var temp__4657__auto___48684__$1 = _QMARK_sch_48682;
if(cljs.core.truth_(temp__4657__auto___48684__$1)){
var sch_48685 = temp__4657__auto___48684__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_48685);
} else {
}

var G__48686 = cljs.core.next.call(null,seq__48378_48675__$1);
var G__48687 = null;
var G__48688 = (0);
var G__48689 = (0);
seq__48378_48661 = G__48686;
chunk__48379_48662 = G__48687;
count__48380_48663 = G__48688;
i__48381_48664 = G__48689;
continue;
}
} else {
}
}
break;
}

var seq__48388_48690 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_48654], null))));
var chunk__48389_48691 = null;
var count__48390_48692 = (0);
var i__48391_48693 = (0);
while(true){
if((i__48391_48693 < count__48390_48692)){
var vec__48392_48694 = cljs.core._nth.call(null,chunk__48389_48691,i__48391_48693);
var _QMARK_sch_48695 = cljs.core.nth.call(null,vec__48392_48694,(0),null);
var _udt_48696 = cljs.core.nth.call(null,vec__48392_48694,(1),null);
var temp__4657__auto___48697 = _QMARK_sch_48695;
if(cljs.core.truth_(temp__4657__auto___48697)){
var sch_48698 = temp__4657__auto___48697;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_48698);
} else {
}

var G__48699 = seq__48388_48690;
var G__48700 = chunk__48389_48691;
var G__48701 = count__48390_48692;
var G__48702 = (i__48391_48693 + (1));
seq__48388_48690 = G__48699;
chunk__48389_48691 = G__48700;
count__48390_48692 = G__48701;
i__48391_48693 = G__48702;
continue;
} else {
var temp__4657__auto___48703 = cljs.core.seq.call(null,seq__48388_48690);
if(temp__4657__auto___48703){
var seq__48388_48704__$1 = temp__4657__auto___48703;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48388_48704__$1)){
var c__37613__auto___48705 = cljs.core.chunk_first.call(null,seq__48388_48704__$1);
var G__48706 = cljs.core.chunk_rest.call(null,seq__48388_48704__$1);
var G__48707 = c__37613__auto___48705;
var G__48708 = cljs.core.count.call(null,c__37613__auto___48705);
var G__48709 = (0);
seq__48388_48690 = G__48706;
chunk__48389_48691 = G__48707;
count__48390_48692 = G__48708;
i__48391_48693 = G__48709;
continue;
} else {
var vec__48395_48710 = cljs.core.first.call(null,seq__48388_48704__$1);
var _QMARK_sch_48711 = cljs.core.nth.call(null,vec__48395_48710,(0),null);
var _udt_48712 = cljs.core.nth.call(null,vec__48395_48710,(1),null);
var temp__4657__auto___48713__$1 = _QMARK_sch_48711;
if(cljs.core.truth_(temp__4657__auto___48713__$1)){
var sch_48714 = temp__4657__auto___48713__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_48714);
} else {
}

var G__48715 = cljs.core.next.call(null,seq__48388_48704__$1);
var G__48716 = null;
var G__48717 = (0);
var G__48718 = (0);
seq__48388_48690 = G__48715;
chunk__48389_48691 = G__48716;
count__48390_48692 = G__48717;
i__48391_48693 = G__48718;
continue;
}
} else {
}
}
break;
}
} else {
var seq__48398_48719 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__48399_48720 = null;
var count__48400_48721 = (0);
var i__48401_48722 = (0);
while(true){
if((i__48401_48722 < count__48400_48721)){
var conn_type_48723 = cljs.core._nth.call(null,chunk__48399_48720,i__48401_48722);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_48723,uid_48654], null),((function (seq__48398_48719,chunk__48399_48720,count__48400_48721,i__48401_48722,conn_type_48723,uid_48654,__48655,__48656__$1,__48657__$2,ev_uuid_48658,flush_buffer_BANG__48659,vec__48366,map__48369,map__48369__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_48658], true)], null);
} else {
var vec__48402 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__48402,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__48402,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_48658)], null);
}
});})(seq__48398_48719,chunk__48399_48720,count__48400_48721,i__48401_48722,conn_type_48723,uid_48654,__48655,__48656__$1,__48657__$2,ev_uuid_48658,flush_buffer_BANG__48659,vec__48366,map__48369,map__48369__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__48724 = seq__48398_48719;
var G__48725 = chunk__48399_48720;
var G__48726 = count__48400_48721;
var G__48727 = (i__48401_48722 + (1));
seq__48398_48719 = G__48724;
chunk__48399_48720 = G__48725;
count__48400_48721 = G__48726;
i__48401_48722 = G__48727;
continue;
} else {
var temp__4657__auto___48728 = cljs.core.seq.call(null,seq__48398_48719);
if(temp__4657__auto___48728){
var seq__48398_48729__$1 = temp__4657__auto___48728;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48398_48729__$1)){
var c__37613__auto___48730 = cljs.core.chunk_first.call(null,seq__48398_48729__$1);
var G__48731 = cljs.core.chunk_rest.call(null,seq__48398_48729__$1);
var G__48732 = c__37613__auto___48730;
var G__48733 = cljs.core.count.call(null,c__37613__auto___48730);
var G__48734 = (0);
seq__48398_48719 = G__48731;
chunk__48399_48720 = G__48732;
count__48400_48721 = G__48733;
i__48401_48722 = G__48734;
continue;
} else {
var conn_type_48735 = cljs.core.first.call(null,seq__48398_48729__$1);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_48735,uid_48654], null),((function (seq__48398_48719,chunk__48399_48720,count__48400_48721,i__48401_48722,conn_type_48735,seq__48398_48729__$1,temp__4657__auto___48728,uid_48654,__48655,__48656__$1,__48657__$2,ev_uuid_48658,flush_buffer_BANG__48659,vec__48366,map__48369,map__48369__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_48658], true)], null);
} else {
var vec__48405 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__48405,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__48405,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_48658)], null);
}
});})(seq__48398_48719,chunk__48399_48720,count__48400_48721,i__48401_48722,conn_type_48735,seq__48398_48729__$1,temp__4657__auto___48728,uid_48654,__48655,__48656__$1,__48657__$2,ev_uuid_48658,flush_buffer_BANG__48659,vec__48366,map__48369,map__48369__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__48736 = cljs.core.next.call(null,seq__48398_48729__$1);
var G__48737 = null;
var G__48738 = (0);
var G__48739 = (0);
seq__48398_48719 = G__48736;
chunk__48399_48720 = G__48737;
count__48400_48721 = G__48738;
i__48401_48722 = G__48739;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__48659.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__48659.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
var ws_timeout_48740 = cljs.core.async.timeout.call(null,send_buf_ms_ws);
var ajax_timeout_48741 = cljs.core.async.timeout.call(null,send_buf_ms_ajax);
var c__40679__auto___48742 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40679__auto___48742,ws_timeout_48740,ajax_timeout_48741,uid_48654,__48655,__48656__$1,__48657__$2,ev_uuid_48658,flush_buffer_BANG__48659,vec__48366,map__48369,map__48369__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__40680__auto__ = (function (){var switch__40567__auto__ = ((function (c__40679__auto___48742,ws_timeout_48740,ajax_timeout_48741,uid_48654,__48655,__48656__$1,__48657__$2,ev_uuid_48658,flush_buffer_BANG__48659,vec__48366,map__48369,map__48369__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_48412){
var state_val_48413 = (state_48412[(1)]);
if((state_val_48413 === (1))){
var state_48412__$1 = state_48412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48412__$1,(2),ws_timeout_48740);
} else {
if((state_val_48413 === (2))){
var inst_48409 = (state_48412[(2)]);
var inst_48410 = flush_buffer_BANG__48659.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));
var state_48412__$1 = (function (){var statearr_48414 = state_48412;
(statearr_48414[(7)] = inst_48409);

return statearr_48414;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48412__$1,inst_48410);
} else {
return null;
}
}
});})(c__40679__auto___48742,ws_timeout_48740,ajax_timeout_48741,uid_48654,__48655,__48656__$1,__48657__$2,ev_uuid_48658,flush_buffer_BANG__48659,vec__48366,map__48369,map__48369__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__40567__auto__,c__40679__auto___48742,ws_timeout_48740,ajax_timeout_48741,uid_48654,__48655,__48656__$1,__48657__$2,ev_uuid_48658,flush_buffer_BANG__48659,vec__48366,map__48369,map__48369__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__40568__auto__ = null;
var taoensso$sente$state_machine__40568__auto____0 = (function (){
var statearr_48418 = [null,null,null,null,null,null,null,null];
(statearr_48418[(0)] = taoensso$sente$state_machine__40568__auto__);

(statearr_48418[(1)] = (1));

return statearr_48418;
});
var taoensso$sente$state_machine__40568__auto____1 = (function (state_48412){
while(true){
var ret_value__40569__auto__ = (function (){try{while(true){
var result__40570__auto__ = switch__40567__auto__.call(null,state_48412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40570__auto__;
}
break;
}
}catch (e48419){if((e48419 instanceof Object)){
var ex__40571__auto__ = e48419;
var statearr_48420_48743 = state_48412;
(statearr_48420_48743[(5)] = ex__40571__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48744 = state_48412;
state_48412 = G__48744;
continue;
} else {
return ret_value__40569__auto__;
}
break;
}
});
taoensso$sente$state_machine__40568__auto__ = function(state_48412){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40568__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40568__auto____1.call(this,state_48412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40568__auto____0;
taoensso$sente$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40568__auto____1;
return taoensso$sente$state_machine__40568__auto__;
})()
;})(switch__40567__auto__,c__40679__auto___48742,ws_timeout_48740,ajax_timeout_48741,uid_48654,__48655,__48656__$1,__48657__$2,ev_uuid_48658,flush_buffer_BANG__48659,vec__48366,map__48369,map__48369__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__40681__auto__ = (function (){var statearr_48421 = f__40680__auto__.call(null);
(statearr_48421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40679__auto___48742);

return statearr_48421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40681__auto__);
});})(c__40679__auto___48742,ws_timeout_48740,ajax_timeout_48741,uid_48654,__48655,__48656__$1,__48657__$2,ev_uuid_48658,flush_buffer_BANG__48659,vec__48366,map__48369,map__48369__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__40679__auto___48745 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40679__auto___48745,ws_timeout_48740,ajax_timeout_48741,uid_48654,__48655,__48656__$1,__48657__$2,ev_uuid_48658,flush_buffer_BANG__48659,vec__48366,map__48369,map__48369__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__40680__auto__ = (function (){var switch__40567__auto__ = ((function (c__40679__auto___48745,ws_timeout_48740,ajax_timeout_48741,uid_48654,__48655,__48656__$1,__48657__$2,ev_uuid_48658,flush_buffer_BANG__48659,vec__48366,map__48369,map__48369__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_48426){
var state_val_48427 = (state_48426[(1)]);
if((state_val_48427 === (1))){
var state_48426__$1 = state_48426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48426__$1,(2),ajax_timeout_48741);
} else {
if((state_val_48427 === (2))){
var inst_48423 = (state_48426[(2)]);
var inst_48424 = flush_buffer_BANG__48659.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_48426__$1 = (function (){var statearr_48428 = state_48426;
(statearr_48428[(7)] = inst_48423);

return statearr_48428;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48426__$1,inst_48424);
} else {
return null;
}
}
});})(c__40679__auto___48745,ws_timeout_48740,ajax_timeout_48741,uid_48654,__48655,__48656__$1,__48657__$2,ev_uuid_48658,flush_buffer_BANG__48659,vec__48366,map__48369,map__48369__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__40567__auto__,c__40679__auto___48745,ws_timeout_48740,ajax_timeout_48741,uid_48654,__48655,__48656__$1,__48657__$2,ev_uuid_48658,flush_buffer_BANG__48659,vec__48366,map__48369,map__48369__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__40568__auto__ = null;
var taoensso$sente$state_machine__40568__auto____0 = (function (){
var statearr_48432 = [null,null,null,null,null,null,null,null];
(statearr_48432[(0)] = taoensso$sente$state_machine__40568__auto__);

(statearr_48432[(1)] = (1));

return statearr_48432;
});
var taoensso$sente$state_machine__40568__auto____1 = (function (state_48426){
while(true){
var ret_value__40569__auto__ = (function (){try{while(true){
var result__40570__auto__ = switch__40567__auto__.call(null,state_48426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40570__auto__;
}
break;
}
}catch (e48433){if((e48433 instanceof Object)){
var ex__40571__auto__ = e48433;
var statearr_48434_48746 = state_48426;
(statearr_48434_48746[(5)] = ex__40571__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48747 = state_48426;
state_48426 = G__48747;
continue;
} else {
return ret_value__40569__auto__;
}
break;
}
});
taoensso$sente$state_machine__40568__auto__ = function(state_48426){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40568__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40568__auto____1.call(this,state_48426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40568__auto____0;
taoensso$sente$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40568__auto____1;
return taoensso$sente$state_machine__40568__auto__;
})()
;})(switch__40567__auto__,c__40679__auto___48745,ws_timeout_48740,ajax_timeout_48741,uid_48654,__48655,__48656__$1,__48657__$2,ev_uuid_48658,flush_buffer_BANG__48659,vec__48366,map__48369,map__48369__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__40681__auto__ = (function (){var statearr_48435 = f__40680__auto__.call(null);
(statearr_48435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40679__auto___48745);

return statearr_48435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40681__auto__);
});})(c__40679__auto___48745,ws_timeout_48740,ajax_timeout_48741,uid_48654,__48655,__48656__$1,__48657__$2,ev_uuid_48658,flush_buffer_BANG__48659,vec__48366,map__48369,map__48369__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}
}

return null;
};
var G__48653 = function (user_id,ev,var_args){
var p__48365 = null;
if (arguments.length > 2) {
var G__48748__i = 0, G__48748__a = new Array(arguments.length -  2);
while (G__48748__i < G__48748__a.length) {G__48748__a[G__48748__i] = arguments[G__48748__i + 2]; ++G__48748__i;}
  p__48365 = new cljs.core.IndexedSeq(G__48748__a,0);
} 
return G__48653__delegate.call(this,user_id,ev,p__48365);};
G__48653.cljs$lang$maxFixedArity = 2;
G__48653.cljs$lang$applyTo = (function (arglist__48749){
var user_id = cljs.core.first(arglist__48749);
arglist__48749 = cljs.core.next(arglist__48749);
var ev = cljs.core.first(arglist__48749);
var p__48365 = cljs.core.rest(arglist__48749);
return G__48653__delegate(user_id,ev,p__48365);
});
G__48653.cljs$core$IFn$_invoke$arity$variadic = G__48653__delegate;
return G__48653;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.not.call(null,websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__48436 = taoensso.sente.unpack.call(null,packer__$1,ppstr);
var clj = cljs.core.nth.call(null,vec__48436,(0),null);
var has_cb_QMARK_ = cljs.core.nth.call(null,vec__48436,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.call(null,false);
return ((function (replied_QMARK__,params,ppstr,client_id,vec__48436,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (resp_clj){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,replied_QMARK__,false,true))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",521,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (replied_QMARK__,params,ppstr,client_id,vec__48436,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
});})(replied_QMARK__,params,ppstr,client_id,vec__48436,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-2119744020);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj));
} else {
return null;
}
});
;})(replied_QMARK__,params,ppstr,client_id,vec__48436,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1.call(null,ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__4657__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__40679__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40679__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__48436,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__40680__auto__ = (function (){var switch__40567__auto__ = ((function (c__40679__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__48436,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_48444){
var state_val_48445 = (state_48444[(1)]);
if((state_val_48445 === (1))){
var inst_48439 = cljs.core.async.timeout.call(null,ms);
var state_48444__$1 = state_48444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48444__$1,(2),inst_48439);
} else {
if((state_val_48445 === (2))){
var inst_48441 = (state_48444[(2)]);
var inst_48442 = reply_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_48444__$1 = (function (){var statearr_48446 = state_48444;
(statearr_48446[(7)] = inst_48441);

return statearr_48446;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48444__$1,inst_48442);
} else {
return null;
}
}
});})(c__40679__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__48436,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__40567__auto__,c__40679__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__48436,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__40568__auto__ = null;
var taoensso$sente$state_machine__40568__auto____0 = (function (){
var statearr_48450 = [null,null,null,null,null,null,null,null];
(statearr_48450[(0)] = taoensso$sente$state_machine__40568__auto__);

(statearr_48450[(1)] = (1));

return statearr_48450;
});
var taoensso$sente$state_machine__40568__auto____1 = (function (state_48444){
while(true){
var ret_value__40569__auto__ = (function (){try{while(true){
var result__40570__auto__ = switch__40567__auto__.call(null,state_48444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40570__auto__;
}
break;
}
}catch (e48451){if((e48451 instanceof Object)){
var ex__40571__auto__ = e48451;
var statearr_48452_48750 = state_48444;
(statearr_48452_48750[(5)] = ex__40571__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48751 = state_48444;
state_48444 = G__48751;
continue;
} else {
return ret_value__40569__auto__;
}
break;
}
});
taoensso$sente$state_machine__40568__auto__ = function(state_48444){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40568__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40568__auto____1.call(this,state_48444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40568__auto____0;
taoensso$sente$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40568__auto____1;
return taoensso$sente$state_machine__40568__auto__;
})()
;})(switch__40567__auto__,c__40679__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__48436,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__40681__auto__ = (function (){var statearr_48453 = f__40680__auto__.call(null);
(statearr_48453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40679__auto__);

return statearr_48453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40681__auto__);
});})(c__40679__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__48436,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__40679__auto__;
} else {
return null;
}
} else {
return reply_fn.call(null,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var sch_uuid = taoensso.encore.uuid_str.call(null,(6));
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var csrf_token = csrf_token_fn.call(null,ring_req);
var uid = user_id_fn__$1.call(null,ring_req,client_id);
var receive_event_msg_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
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
;})(sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_handshake_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",566,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-handshake!"], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-998107646);

var _QMARK_handshake_data = handshake_data_fn.call(null,ring_req);
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,null,handshake_ev));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_.call(null,client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",577,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(err_msg),cljs.core.str(": %s")].join(''),ring_req], null);
});})(err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1798337823);

throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",586,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-612763603);
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
var c__40679__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40679__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__40680__auto__ = (function (){var switch__40567__auto__ = ((function (c__40679__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_48489){
var state_val_48490 = (state_48489[(1)]);
if((state_val_48490 === (7))){
var inst_48485 = (state_48489[(2)]);
var state_48489__$1 = state_48489;
var statearr_48491_48752 = state_48489__$1;
(statearr_48491_48752[(2)] = inst_48485);

(statearr_48491_48752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48490 === (1))){
var inst_48454 = udt_open;
var state_48489__$1 = (function (){var statearr_48492 = state_48489;
(statearr_48492[(7)] = inst_48454);

return statearr_48492;
})();
var statearr_48493_48753 = state_48489__$1;
(statearr_48493_48753[(2)] = null);

(statearr_48493_48753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48490 === (4))){
var inst_48463 = (state_48489[(8)]);
var inst_48458 = (state_48489[(2)]);
var inst_48459 = cljs.core.deref.call(null,conns_);
var inst_48460 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48461 = [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id];
var inst_48462 = (new cljs.core.PersistentVector(null,3,(5),inst_48460,inst_48461,null));
var inst_48463__$1 = cljs.core.get_in.call(null,inst_48459,inst_48462);
var state_48489__$1 = (function (){var statearr_48494 = state_48489;
(statearr_48494[(9)] = inst_48458);

(statearr_48494[(8)] = inst_48463__$1);

return statearr_48494;
})();
if(cljs.core.truth_(inst_48463__$1)){
var statearr_48495_48754 = state_48489__$1;
(statearr_48495_48754[(1)] = (5));

} else {
var statearr_48496_48755 = state_48489__$1;
(statearr_48496_48755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48490 === (13))){
var inst_48469 = (state_48489[(10)]);
var inst_48478 = (state_48489[(2)]);
var inst_48454 = inst_48469;
var state_48489__$1 = (function (){var statearr_48497 = state_48489;
(statearr_48497[(11)] = inst_48478);

(statearr_48497[(7)] = inst_48454);

return statearr_48497;
})();
var statearr_48498_48756 = state_48489__$1;
(statearr_48498_48756[(2)] = null);

(statearr_48498_48756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48490 === (6))){
var state_48489__$1 = state_48489;
var statearr_48499_48757 = state_48489__$1;
(statearr_48499_48757[(2)] = null);

(statearr_48499_48757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48490 === (3))){
var inst_48487 = (state_48489[(2)]);
var state_48489__$1 = state_48489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48489__$1,inst_48487);
} else {
if((state_val_48490 === (12))){
var state_48489__$1 = state_48489;
var statearr_48500_48758 = state_48489__$1;
(statearr_48500_48758[(2)] = null);

(statearr_48500_48758[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48490 === (2))){
var inst_48456 = cljs.core.async.timeout.call(null,ms);
var state_48489__$1 = state_48489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48489__$1,(4),inst_48456);
} else {
if((state_val_48490 === (11))){
var inst_48474 = taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304));
var inst_48475 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_48474);
var state_48489__$1 = state_48489;
var statearr_48501_48759 = state_48489__$1;
(statearr_48501_48759[(2)] = inst_48475);

(statearr_48501_48759[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48490 === (9))){
var state_48489__$1 = state_48489;
var statearr_48502_48760 = state_48489__$1;
(statearr_48502_48760[(2)] = null);

(statearr_48502_48760[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48490 === (5))){
var inst_48463 = (state_48489[(8)]);
var inst_48468 = cljs.core.nth.call(null,inst_48463,(0),null);
var inst_48469 = cljs.core.nth.call(null,inst_48463,(1),null);
var inst_48470 = taoensso.sente.interfaces.sch_open_QMARK_.call(null,server_ch);
var state_48489__$1 = (function (){var statearr_48503 = state_48489;
(statearr_48503[(10)] = inst_48469);

(statearr_48503[(12)] = inst_48468);

return statearr_48503;
})();
if(cljs.core.truth_(inst_48470)){
var statearr_48504_48761 = state_48489__$1;
(statearr_48504_48761[(1)] = (8));

} else {
var statearr_48505_48762 = state_48489__$1;
(statearr_48505_48762[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48490 === (10))){
var inst_48482 = (state_48489[(2)]);
var state_48489__$1 = state_48489;
var statearr_48506_48763 = state_48489__$1;
(statearr_48506_48763[(2)] = inst_48482);

(statearr_48506_48763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48490 === (8))){
var inst_48469 = (state_48489[(10)]);
var inst_48454 = (state_48489[(7)]);
var inst_48472 = cljs.core._EQ_.call(null,inst_48469,inst_48454);
var state_48489__$1 = state_48489;
if(inst_48472){
var statearr_48507_48764 = state_48489__$1;
(statearr_48507_48764[(1)] = (11));

} else {
var statearr_48508_48765 = state_48489__$1;
(statearr_48508_48765[(1)] = (12));

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
});})(c__40679__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__40567__auto__,c__40679__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__40568__auto__ = null;
var taoensso$sente$state_machine__40568__auto____0 = (function (){
var statearr_48512 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48512[(0)] = taoensso$sente$state_machine__40568__auto__);

(statearr_48512[(1)] = (1));

return statearr_48512;
});
var taoensso$sente$state_machine__40568__auto____1 = (function (state_48489){
while(true){
var ret_value__40569__auto__ = (function (){try{while(true){
var result__40570__auto__ = switch__40567__auto__.call(null,state_48489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40570__auto__;
}
break;
}
}catch (e48513){if((e48513 instanceof Object)){
var ex__40571__auto__ = e48513;
var statearr_48514_48766 = state_48489;
(statearr_48514_48766[(5)] = ex__40571__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48767 = state_48489;
state_48489 = G__48767;
continue;
} else {
return ret_value__40569__auto__;
}
break;
}
});
taoensso$sente$state_machine__40568__auto__ = function(state_48489){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40568__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40568__auto____1.call(this,state_48489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40568__auto____0;
taoensso$sente$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40568__auto____1;
return taoensso$sente$state_machine__40568__auto__;
})()
;})(switch__40567__auto__,c__40679__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__40681__auto__ = (function (){var statearr_48515 = f__40680__auto__.call(null);
(statearr_48515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40679__auto__);

return statearr_48515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40681__auto__);
});})(c__40679__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__40679__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",615,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-731529392);
var updated_conn = upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var handshake_QMARK_ = (function (){var or__36802__auto__ = new cljs.core.Keyword(null,"init?","init?",438181499).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
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
var c__40679__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40679__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__40680__auto__ = (function (){var switch__40567__auto__ = ((function (c__40679__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_48541){
var state_val_48542 = (state_48541[(1)]);
if((state_val_48542 === (1))){
var inst_48516 = cljs.core.async.timeout.call(null,ms);
var state_48541__$1 = state_48541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48541__$1,(2),inst_48516);
} else {
if((state_val_48542 === (2))){
var inst_48523 = (state_48541[(7)]);
var inst_48518 = (state_48541[(2)]);
var inst_48519 = cljs.core.deref.call(null,conns_);
var inst_48520 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48521 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id];
var inst_48522 = (new cljs.core.PersistentVector(null,3,(5),inst_48520,inst_48521,null));
var inst_48523__$1 = cljs.core.get_in.call(null,inst_48519,inst_48522);
var state_48541__$1 = (function (){var statearr_48543 = state_48541;
(statearr_48543[(8)] = inst_48518);

(statearr_48543[(7)] = inst_48523__$1);

return statearr_48543;
})();
if(cljs.core.truth_(inst_48523__$1)){
var statearr_48544_48768 = state_48541__$1;
(statearr_48544_48768[(1)] = (3));

} else {
var statearr_48545_48769 = state_48541__$1;
(statearr_48545_48769[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48542 === (3))){
var inst_48523 = (state_48541[(7)]);
var inst_48528 = cljs.core.nth.call(null,inst_48523,(0),null);
var inst_48529 = cljs.core.nth.call(null,inst_48523,(1),null);
var inst_48530 = cljs.core._EQ_.call(null,inst_48529,udt_open);
var state_48541__$1 = (function (){var statearr_48546 = state_48541;
(statearr_48546[(9)] = inst_48528);

return statearr_48546;
})();
if(inst_48530){
var statearr_48547_48770 = state_48541__$1;
(statearr_48547_48770[(1)] = (6));

} else {
var statearr_48548_48771 = state_48541__$1;
(statearr_48548_48771[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48542 === (4))){
var state_48541__$1 = state_48541;
var statearr_48549_48772 = state_48541__$1;
(statearr_48549_48772[(2)] = null);

(statearr_48549_48772[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48542 === (5))){
var inst_48539 = (state_48541[(2)]);
var state_48541__$1 = state_48541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48541__$1,inst_48539);
} else {
if((state_val_48542 === (6))){
var inst_48532 = taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var inst_48533 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_48532);
var state_48541__$1 = state_48541;
var statearr_48550_48773 = state_48541__$1;
(statearr_48550_48773[(2)] = inst_48533);

(statearr_48550_48773[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48542 === (7))){
var state_48541__$1 = state_48541;
var statearr_48551_48774 = state_48541__$1;
(statearr_48551_48774[(2)] = null);

(statearr_48551_48774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48542 === (8))){
var inst_48536 = (state_48541[(2)]);
var state_48541__$1 = state_48541;
var statearr_48552_48775 = state_48541__$1;
(statearr_48552_48775[(2)] = inst_48536);

(statearr_48552_48775[(1)] = (5));


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
});})(c__40679__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__40567__auto__,c__40679__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__40568__auto__ = null;
var taoensso$sente$state_machine__40568__auto____0 = (function (){
var statearr_48556 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48556[(0)] = taoensso$sente$state_machine__40568__auto__);

(statearr_48556[(1)] = (1));

return statearr_48556;
});
var taoensso$sente$state_machine__40568__auto____1 = (function (state_48541){
while(true){
var ret_value__40569__auto__ = (function (){try{while(true){
var result__40570__auto__ = switch__40567__auto__.call(null,state_48541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40570__auto__;
}
break;
}
}catch (e48557){if((e48557 instanceof Object)){
var ex__40571__auto__ = e48557;
var statearr_48558_48776 = state_48541;
(statearr_48558_48776[(5)] = ex__40571__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48777 = state_48541;
state_48541 = G__48777;
continue;
} else {
return ret_value__40569__auto__;
}
break;
}
});
taoensso$sente$state_machine__40568__auto__ = function(state_48541){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40568__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40568__auto____1.call(this,state_48541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40568__auto____0;
taoensso$sente$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40568__auto____1;
return taoensso$sente$state_machine__40568__auto__;
})()
;})(switch__40567__auto__,c__40679__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__40681__auto__ = (function (){var statearr_48559 = f__40680__auto__.call(null);
(statearr_48559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40679__auto__);

return statearr_48559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40681__auto__);
});})(c__40679__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__40679__auto__;
} else {
return null;
}
}
}
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

var vec__48560 = taoensso.sente.unpack.call(null,packer__$1,req_ppstr);
var clj = cljs.core.nth.call(null,vec__48560,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__48560,(1),null);
return receive_event_msg_BANG_.call(null,clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__48560,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",645,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__48560,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__48560,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-2081302263);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj,_QMARK_cb_uuid));
});})(vec__48560,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443):new cljs.core.Keyword(null,"ajax","ajax",814345549));
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",654,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
});})(conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,690780619);
var updated_conn = upd_conn_BANG_.call(null,conn_type,uid,client_id,null);
var udt_close = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__40679__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40679__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__40680__auto__ = (function (){var switch__40567__auto__ = ((function (c__40679__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_48614){
var state_val_48615 = (state_48614[(1)]);
if((state_val_48615 === (7))){
var state_48614__$1 = state_48614;
var statearr_48616_48778 = state_48614__$1;
(statearr_48616_48778[(2)] = null);

(statearr_48616_48778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (1))){
var inst_48563 = cljs.core.async.timeout.call(null,(5000));
var state_48614__$1 = state_48614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48614__$1,(2),inst_48563);
} else {
if((state_val_48615 === (4))){
var state_48614__$1 = state_48614;
var statearr_48617_48779 = state_48614__$1;
(statearr_48617_48779[(2)] = null);

(statearr_48617_48779[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (13))){
var state_48614__$1 = state_48614;
var statearr_48618_48780 = state_48614__$1;
(statearr_48618_48780[(2)] = null);

(statearr_48618_48780[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (6))){
var inst_48575 = (state_48614[(7)]);
var inst_48573 = (state_48614[(8)]);
var inst_48574 = (state_48614[(9)]);
var inst_48591 = (state_48614[(10)]);
var inst_48586 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48587 = [conn_type,uid,client_id];
var inst_48588 = (new cljs.core.PersistentVector(null,3,(5),inst_48586,inst_48587,null));
var inst_48590 = (function (){var vec__48566 = inst_48573;
var __QMARK_sch = inst_48574;
var udt_t1 = inst_48575;
return ((function (vec__48566,__QMARK_sch,udt_t1,inst_48575,inst_48573,inst_48574,inst_48591,inst_48586,inst_48587,inst_48588,state_val_48615,c__40679__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__48589){
var vec__48619 = p__48589;
var _sch = cljs.core.nth.call(null,vec__48619,(0),null);
var udt_t1__$1 = cljs.core.nth.call(null,vec__48619,(1),null);
if(cljs.core._EQ_.call(null,udt_t1__$1,udt_close)){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),true);
} else {
return taoensso.encore.swapped.call(null,udt_t1__$1,false);
}
});
;})(vec__48566,__QMARK_sch,udt_t1,inst_48575,inst_48573,inst_48574,inst_48591,inst_48586,inst_48587,inst_48588,state_val_48615,c__40679__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_48591__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_48588,inst_48590);
var state_48614__$1 = (function (){var statearr_48622 = state_48614;
(statearr_48622[(10)] = inst_48591__$1);

return statearr_48622;
})();
if(cljs.core.truth_(inst_48591__$1)){
var statearr_48623_48781 = state_48614__$1;
(statearr_48623_48781[(1)] = (9));

} else {
var statearr_48624_48782 = state_48614__$1;
(statearr_48624_48782[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (3))){
var inst_48575 = (state_48614[(7)]);
var inst_48573 = (state_48614[(8)]);
var inst_48574 = (state_48614[(9)]);
var inst_48578 = (function (){var vec__48566 = inst_48573;
var __QMARK_sch = inst_48574;
var udt_t1 = inst_48575;
return ((function (vec__48566,__QMARK_sch,udt_t1,inst_48575,inst_48573,inst_48574,state_val_48615,c__40679__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.call(null,udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
;})(vec__48566,__QMARK_sch,udt_t1,inst_48575,inst_48573,inst_48574,state_val_48615,c__40679__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_48579 = (new cljs.core.Delay(inst_48578,null));
var inst_48580 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",668,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_48579,null,-1026281241);
var state_48614__$1 = state_48614;
var statearr_48625_48783 = state_48614__$1;
(statearr_48625_48783[(2)] = inst_48580);

(statearr_48625_48783[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (12))){
var inst_48600 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48601 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678),uid];
var inst_48602 = (new cljs.core.PersistentVector(null,2,(5),inst_48600,inst_48601,null));
var inst_48603 = receive_event_msg_BANG_.call(null,inst_48602);
var state_48614__$1 = state_48614;
var statearr_48626_48784 = state_48614__$1;
(statearr_48626_48784[(2)] = inst_48603);

(statearr_48626_48784[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (2))){
var inst_48573 = (state_48614[(8)]);
var inst_48565 = (state_48614[(2)]);
var inst_48569 = cljs.core.deref.call(null,conns_);
var inst_48570 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48571 = [conn_type,uid,client_id];
var inst_48572 = (new cljs.core.PersistentVector(null,3,(5),inst_48570,inst_48571,null));
var inst_48573__$1 = cljs.core.get_in.call(null,inst_48569,inst_48572);
var inst_48574 = cljs.core.nth.call(null,inst_48573__$1,(0),null);
var inst_48575 = cljs.core.nth.call(null,inst_48573__$1,(1),null);
var inst_48576 = cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__);
var state_48614__$1 = (function (){var statearr_48627 = state_48614;
(statearr_48627[(7)] = inst_48575);

(statearr_48627[(8)] = inst_48573__$1);

(statearr_48627[(9)] = inst_48574);

(statearr_48627[(11)] = inst_48565);

return statearr_48627;
})();
if(cljs.core.truth_(inst_48576)){
var statearr_48628_48785 = state_48614__$1;
(statearr_48628_48785[(1)] = (3));

} else {
var statearr_48629_48786 = state_48614__$1;
(statearr_48629_48786[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (11))){
var inst_48609 = (state_48614[(2)]);
var state_48614__$1 = state_48614;
var statearr_48630_48787 = state_48614__$1;
(statearr_48630_48787[(2)] = inst_48609);

(statearr_48630_48787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (9))){
var inst_48575 = (state_48614[(7)]);
var inst_48573 = (state_48614[(8)]);
var inst_48574 = (state_48614[(9)]);
var inst_48591 = (state_48614[(10)]);
var inst_48593 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48594 = [conn_type,uid];
var inst_48595 = (new cljs.core.PersistentVector(null,2,(5),inst_48593,inst_48594,null));
var inst_48596 = (function (){var vec__48566 = inst_48573;
var __QMARK_sch = inst_48574;
var udt_t1 = inst_48575;
var disconnect_QMARK_ = inst_48591;
return ((function (vec__48566,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_48575,inst_48573,inst_48574,inst_48591,inst_48593,inst_48594,inst_48595,state_val_48615,c__40679__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_.call(null,_QMARK_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return _QMARK_m;
}
});
;})(vec__48566,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_48575,inst_48573,inst_48574,inst_48591,inst_48593,inst_48594,inst_48595,state_val_48615,c__40679__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_48597 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_48595,inst_48596);
var inst_48598 = upd_connected_uid_BANG_.call(null,uid);
var state_48614__$1 = (function (){var statearr_48631 = state_48614;
(statearr_48631[(12)] = inst_48597);

return statearr_48631;
})();
if(cljs.core.truth_(inst_48598)){
var statearr_48632_48788 = state_48614__$1;
(statearr_48632_48788[(1)] = (12));

} else {
var statearr_48633_48789 = state_48614__$1;
(statearr_48633_48789[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (5))){
var inst_48575 = (state_48614[(7)]);
var inst_48583 = (state_48614[(2)]);
var inst_48584 = cljs.core._EQ_.call(null,inst_48575,udt_close);
var state_48614__$1 = (function (){var statearr_48634 = state_48614;
(statearr_48634[(13)] = inst_48583);

return statearr_48634;
})();
if(inst_48584){
var statearr_48635_48790 = state_48614__$1;
(statearr_48635_48790[(1)] = (6));

} else {
var statearr_48636_48791 = state_48614__$1;
(statearr_48636_48791[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (14))){
var inst_48606 = (state_48614[(2)]);
var state_48614__$1 = state_48614;
var statearr_48637_48792 = state_48614__$1;
(statearr_48637_48792[(2)] = inst_48606);

(statearr_48637_48792[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (10))){
var state_48614__$1 = state_48614;
var statearr_48638_48793 = state_48614__$1;
(statearr_48638_48793[(2)] = null);

(statearr_48638_48793[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (8))){
var inst_48612 = (state_48614[(2)]);
var state_48614__$1 = state_48614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48614__$1,inst_48612);
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
});})(c__40679__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__40567__auto__,c__40679__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__40568__auto__ = null;
var taoensso$sente$state_machine__40568__auto____0 = (function (){
var statearr_48642 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48642[(0)] = taoensso$sente$state_machine__40568__auto__);

(statearr_48642[(1)] = (1));

return statearr_48642;
});
var taoensso$sente$state_machine__40568__auto____1 = (function (state_48614){
while(true){
var ret_value__40569__auto__ = (function (){try{while(true){
var result__40570__auto__ = switch__40567__auto__.call(null,state_48614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40570__auto__;
}
break;
}
}catch (e48643){if((e48643 instanceof Object)){
var ex__40571__auto__ = e48643;
var statearr_48644_48794 = state_48614;
(statearr_48644_48794[(5)] = ex__40571__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48795 = state_48614;
state_48614 = G__48795;
continue;
} else {
return ret_value__40569__auto__;
}
break;
}
});
taoensso$sente$state_machine__40568__auto__ = function(state_48614){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40568__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40568__auto____1.call(this,state_48614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40568__auto____0;
taoensso$sente$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40568__auto____1;
return taoensso$sente$state_machine__40568__auto__;
})()
;})(switch__40567__auto__,c__40679__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__40681__auto__ = (function (){var statearr_48645 = f__40680__auto__.call(null);
(statearr_48645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40679__auto__);

return statearr_48645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40681__auto__);
});})(c__40679__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__40679__auto__;
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",690,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1242105127);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48344,map__48347,map__48347__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq48341){
var G__48342 = cljs.core.first.call(null,seq48341);
var seq48341__$1 = cljs.core.next.call(null,seq48341);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48342,seq48341__$1);
});

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",696,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null,18975117);

var seq__48812 = cljs.core.seq.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null)));
var chunk__48813 = null;
var count__48814 = (0);
var i__48815 = (0);
while(true){
if((i__48815 < count__48814)){
var vec__48816 = cljs.core._nth.call(null,chunk__48813,i__48815);
var client_id = cljs.core.nth.call(null,vec__48816,(0),null);
var vec__48819 = cljs.core.nth.call(null,vec__48816,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__48819,(0),null);
var _udt = cljs.core.nth.call(null,vec__48819,(1),null);
var temp__4657__auto___48828 = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto___48828)){
var sch_48829 = temp__4657__auto___48828;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_48829,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__48830 = seq__48812;
var G__48831 = chunk__48813;
var G__48832 = count__48814;
var G__48833 = (i__48815 + (1));
seq__48812 = G__48830;
chunk__48813 = G__48831;
count__48814 = G__48832;
i__48815 = G__48833;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__48812);
if(temp__4657__auto__){
var seq__48812__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48812__$1)){
var c__37613__auto__ = cljs.core.chunk_first.call(null,seq__48812__$1);
var G__48834 = cljs.core.chunk_rest.call(null,seq__48812__$1);
var G__48835 = c__37613__auto__;
var G__48836 = cljs.core.count.call(null,c__37613__auto__);
var G__48837 = (0);
seq__48812 = G__48834;
chunk__48813 = G__48835;
count__48814 = G__48836;
i__48815 = G__48837;
continue;
} else {
var vec__48822 = cljs.core.first.call(null,seq__48812__$1);
var client_id = cljs.core.nth.call(null,vec__48822,(0),null);
var vec__48825 = cljs.core.nth.call(null,vec__48822,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__48825,(0),null);
var _udt = cljs.core.nth.call(null,vec__48825,(1),null);
var temp__4657__auto___48838__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto___48838__$1)){
var sch_48839 = temp__4657__auto___48838__$1;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_48839,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__48840 = cljs.core.next.call(null,seq__48812__$1);
var G__48841 = null;
var G__48842 = (0);
var G__48843 = (0);
seq__48812 = G__48840;
chunk__48813 = G__48841;
count__48814 = G__48842;
i__48815 = G__48843;
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",706,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
}),null)),null,-1565231010);

var ms_backoffs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(1440)], null);
var client_ids_unsatisfied = cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_.call(null,client_ids_unsatisfied)){
return null;
} else {
var c__40679__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40679__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (){
var f__40680__auto__ = (function (){var switch__40567__auto__ = ((function (c__40679__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (state_48974){
var state_val_48975 = (state_48974[(1)]);
if((state_val_48975 === (7))){
var inst_48929 = (state_48974[(7)]);
var inst_48930 = (state_48974[(8)]);
var inst_48936 = (state_48974[(9)]);
var inst_48946 = (function (){var n = inst_48929;
var client_ids_satisfied = inst_48930;
var _QMARK_pulled = inst_48936;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_48929,inst_48930,inst_48936,state_val_48975,c__40679__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (s,client_id,p__48945){
var vec__48976 = p__48945;
var _QMARK_sch = cljs.core.nth.call(null,vec__48976,(0),null);
var _udt = cljs.core.nth.call(null,vec__48976,(1),null);
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
;})(n,client_ids_satisfied,_QMARK_pulled,inst_48929,inst_48930,inst_48936,state_val_48975,c__40679__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_48947 = cljs.core.PersistentHashSet.EMPTY;
var inst_48948 = cljs.core.reduce_kv.call(null,inst_48946,inst_48947,inst_48936);
var state_48974__$1 = state_48974;
var statearr_48979_49012 = state_48974__$1;
(statearr_48979_49012[(2)] = inst_48948);

(statearr_48979_49012[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48975 === (1))){
var inst_48928 = cljs.core.PersistentHashSet.EMPTY;
var inst_48929 = (0);
var inst_48930 = inst_48928;
var state_48974__$1 = (function (){var statearr_48980 = state_48974;
(statearr_48980[(7)] = inst_48929);

(statearr_48980[(8)] = inst_48930);

return statearr_48980;
})();
var statearr_48981_49013 = state_48974__$1;
(statearr_48981_49013[(2)] = null);

(statearr_48981_49013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48975 === (4))){
var state_48974__$1 = state_48974;
var statearr_48982_49014 = state_48974__$1;
(statearr_48982_49014[(2)] = true);

(statearr_48982_49014[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48975 === (15))){
var inst_48967 = (state_48974[(2)]);
var state_48974__$1 = state_48974;
var statearr_48983_49015 = state_48974__$1;
(statearr_48983_49015[(2)] = inst_48967);

(statearr_48983_49015[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48975 === (13))){
var inst_48953 = (state_48974[(10)]);
var inst_48958 = cljs.core.rand_int.call(null,inst_48953);
var inst_48959 = (inst_48953 + inst_48958);
var inst_48960 = cljs.core.async.timeout.call(null,inst_48959);
var state_48974__$1 = state_48974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48974__$1,(16),inst_48960);
} else {
if((state_val_48975 === (6))){
var inst_48936 = (state_48974[(9)]);
var inst_48943 = (state_48974[(2)]);
var state_48974__$1 = (function (){var statearr_48984 = state_48974;
(statearr_48984[(11)] = inst_48943);

return statearr_48984;
})();
if(cljs.core.truth_(inst_48936)){
var statearr_48985_49016 = state_48974__$1;
(statearr_48985_49016[(1)] = (7));

} else {
var statearr_48986_49017 = state_48974__$1;
(statearr_48986_49017[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48975 === (3))){
var inst_48972 = (state_48974[(2)]);
var state_48974__$1 = state_48974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48974__$1,inst_48972);
} else {
if((state_val_48975 === (12))){
var inst_48970 = (state_48974[(2)]);
var state_48974__$1 = state_48974;
var statearr_48987_49018 = state_48974__$1;
(statearr_48987_49018[(2)] = inst_48970);

(statearr_48987_49018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48975 === (2))){
var inst_48929 = (state_48974[(7)]);
var inst_48930 = (state_48974[(8)]);
var inst_48936 = (state_48974[(9)]);
var inst_48932 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48933 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_48934 = (new cljs.core.PersistentVector(null,2,(5),inst_48932,inst_48933,null));
var inst_48935 = (function (){var n = inst_48929;
var client_ids_satisfied = inst_48930;
return ((function (n,client_ids_satisfied,inst_48929,inst_48930,inst_48936,inst_48932,inst_48933,inst_48934,state_val_48975,c__40679__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m){
var ks_to_pull = cljs.core.remove.call(null,client_ids_satisfied,cljs.core.keys.call(null,m));
if(cljs.core.empty_QMARK_.call(null,ks_to_pull)){
return taoensso.encore.swapped.call(null,m,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.reduce.call(null,((function (ks_to_pull,n,client_ids_satisfied,inst_48929,inst_48930,inst_48936,inst_48932,inst_48933,inst_48934,state_val_48975,c__40679__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m__$1,k){
var vec__48988 = cljs.core.get.call(null,m__$1,k);
var _QMARK_sch = cljs.core.nth.call(null,vec__48988,(0),null);
var udt = cljs.core.nth.call(null,vec__48988,(1),null);
return cljs.core.assoc.call(null,m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_48929,inst_48930,inst_48936,inst_48932,inst_48933,inst_48934,state_val_48975,c__40679__auto__,ms_backoffs,client_ids_unsatisfied))
,m,ks_to_pull),cljs.core.select_keys.call(null,m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_48929,inst_48930,inst_48936,inst_48932,inst_48933,inst_48934,state_val_48975,c__40679__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_48936__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_48934,inst_48935);
var inst_48937 = (function (){var n = inst_48929;
var client_ids_satisfied = inst_48930;
var _QMARK_pulled = inst_48936__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_48929,inst_48930,inst_48936,inst_48932,inst_48933,inst_48934,inst_48935,inst_48936__$1,state_val_48975,c__40679__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (x){
var or__36802__auto__ = (x == null);
if(or__36802__auto__){
return or__36802__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,x);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_48929,inst_48930,inst_48936,inst_48932,inst_48933,inst_48934,inst_48935,inst_48936__$1,state_val_48975,c__40679__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_48938 = inst_48937.call(null,inst_48936__$1);
var state_48974__$1 = (function (){var statearr_48991 = state_48974;
(statearr_48991[(9)] = inst_48936__$1);

return statearr_48991;
})();
if(cljs.core.truth_(inst_48938)){
var statearr_48992_49019 = state_48974__$1;
(statearr_48992_49019[(1)] = (4));

} else {
var statearr_48993_49020 = state_48974__$1;
(statearr_48993_49020[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48975 === (11))){
var state_48974__$1 = state_48974;
var statearr_48994_49021 = state_48974__$1;
(statearr_48994_49021[(2)] = null);

(statearr_48994_49021[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48975 === (9))){
var inst_48929 = (state_48974[(7)]);
var inst_48930 = (state_48974[(8)]);
var inst_48953 = (state_48974[(10)]);
var inst_48951 = (state_48974[(2)]);
var inst_48952 = cljs.core.into.call(null,inst_48930,inst_48951);
var inst_48953__$1 = cljs.core.get.call(null,ms_backoffs,inst_48929);
var state_48974__$1 = (function (){var statearr_48995 = state_48974;
(statearr_48995[(12)] = inst_48952);

(statearr_48995[(10)] = inst_48953__$1);

return statearr_48995;
})();
if(cljs.core.truth_(inst_48953__$1)){
var statearr_48996_49022 = state_48974__$1;
(statearr_48996_49022[(1)] = (10));

} else {
var statearr_48997_49023 = state_48974__$1;
(statearr_48997_49023[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48975 === (5))){
var inst_48936 = (state_48974[(9)]);
var inst_48941 = taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:or nil? map?] ?pulled)",inst_48936,null,null);
var state_48974__$1 = state_48974;
var statearr_48998_49024 = state_48974__$1;
(statearr_48998_49024[(2)] = inst_48941);

(statearr_48998_49024[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48975 === (14))){
var state_48974__$1 = state_48974;
var statearr_48999_49025 = state_48974__$1;
(statearr_48999_49025[(2)] = null);

(statearr_48999_49025[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48975 === (16))){
var inst_48929 = (state_48974[(7)]);
var inst_48952 = (state_48974[(12)]);
var inst_48962 = (state_48974[(2)]);
var inst_48963 = (inst_48929 + (1));
var inst_48929__$1 = inst_48963;
var inst_48930 = inst_48952;
var state_48974__$1 = (function (){var statearr_49000 = state_48974;
(statearr_49000[(7)] = inst_48929__$1);

(statearr_49000[(8)] = inst_48930);

(statearr_49000[(13)] = inst_48962);

return statearr_49000;
})();
var statearr_49001_49026 = state_48974__$1;
(statearr_49001_49026[(2)] = null);

(statearr_49001_49026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48975 === (10))){
var inst_48952 = (state_48974[(12)]);
var inst_48955 = cljs.core.complement.call(null,inst_48952);
var inst_48956 = taoensso.encore.rsome.call(null,inst_48955,client_ids_unsatisfied);
var state_48974__$1 = state_48974;
if(cljs.core.truth_(inst_48956)){
var statearr_49002_49027 = state_48974__$1;
(statearr_49002_49027[(1)] = (13));

} else {
var statearr_49003_49028 = state_48974__$1;
(statearr_49003_49028[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48975 === (8))){
var state_48974__$1 = state_48974;
var statearr_49004_49029 = state_48974__$1;
(statearr_49004_49029[(2)] = null);

(statearr_49004_49029[(1)] = (9));


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
});})(c__40679__auto__,ms_backoffs,client_ids_unsatisfied))
;
return ((function (switch__40567__auto__,c__40679__auto__,ms_backoffs,client_ids_unsatisfied){
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40568__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40568__auto____0 = (function (){
var statearr_49008 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49008[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40568__auto__);

(statearr_49008[(1)] = (1));

return statearr_49008;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40568__auto____1 = (function (state_48974){
while(true){
var ret_value__40569__auto__ = (function (){try{while(true){
var result__40570__auto__ = switch__40567__auto__.call(null,state_48974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40570__auto__;
}
break;
}
}catch (e49009){if((e49009 instanceof Object)){
var ex__40571__auto__ = e49009;
var statearr_49010_49030 = state_48974;
(statearr_49010_49030[(5)] = ex__40571__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49031 = state_48974;
state_48974 = G__49031;
continue;
} else {
return ret_value__40569__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40568__auto__ = function(state_48974){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40568__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40568__auto____1.call(this,state_48974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40568__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40568__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40568__auto__;
})()
;})(switch__40567__auto__,c__40679__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var state__40681__auto__ = (function (){var statearr_49011 = f__40680__auto__.call(null);
(statearr_49011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40679__auto__);

return statearr_49011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40681__auto__);
});})(c__40679__auto__,ms_backoffs,client_ids_unsatisfied))
);

return c__40679__auto__;
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
var x__37465__auto__ = (((chsk == null))?null:chsk);
var m__37466__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__37465__auto__)]);
if(!((m__37466__auto__ == null))){
return m__37466__auto__.call(null,chsk);
} else {
var m__37466__auto____$1 = (taoensso.sente._chsk_connect_BANG_["_"]);
if(!((m__37466__auto____$1 == null))){
return m__37466__auto____$1.call(null,chsk);
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
var x__37465__auto__ = (((chsk == null))?null:chsk);
var m__37466__auto__ = (taoensso.sente._chsk_disconnect_BANG_[goog.typeOf(x__37465__auto__)]);
if(!((m__37466__auto__ == null))){
return m__37466__auto__.call(null,chsk,reason);
} else {
var m__37466__auto____$1 = (taoensso.sente._chsk_disconnect_BANG_["_"]);
if(!((m__37466__auto____$1 == null))){
return m__37466__auto____$1.call(null,chsk,reason);
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
var x__37465__auto__ = (((chsk == null))?null:chsk);
var m__37466__auto__ = (taoensso.sente._chsk_reconnect_BANG_[goog.typeOf(x__37465__auto__)]);
if(!((m__37466__auto__ == null))){
return m__37466__auto__.call(null,chsk);
} else {
var m__37466__auto____$1 = (taoensso.sente._chsk_reconnect_BANG_["_"]);
if(!((m__37466__auto____$1 == null))){
return m__37466__auto____$1.call(null,chsk);
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
var x__37465__auto__ = (((chsk == null))?null:chsk);
var m__37466__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__37465__auto__)]);
if(!((m__37466__auto__ == null))){
return m__37466__auto__.call(null,chsk,ev,opts);
} else {
var m__37466__auto____$1 = (taoensso.sente._chsk_send_BANG_["_"]);
if(!((m__37466__auto____$1 == null))){
return m__37466__auto____$1.call(null,chsk,ev,opts);
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
var args49032 = [];
var len__37877__auto___49035 = arguments.length;
var i__37878__auto___49036 = (0);
while(true){
if((i__37878__auto___49036 < len__37877__auto___49035)){
args49032.push((arguments[i__37878__auto___49036]));

var G__49037 = (i__37878__auto___49036 + (1));
i__37878__auto___49036 = G__49037;
continue;
} else {
}
break;
}

var G__49034 = args49032.length;
switch (G__49034) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49032.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",783,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null,127375258);

return taoensso.sente._chsk_send_BANG_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",788,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null,263623664);

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
var vec__49042 = taoensso.encore.swap_in_BANG_.call(null,new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = f.call(null,old_state);
var new_state__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(old_state))?cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),false):new_state);
var new_state__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state__$1))?cljs.core.dissoc.call(null,new_state__$1,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)):new_state__$1);
return taoensso.encore.swapped.call(null,new_state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$2], null));
}));
var old_state = cljs.core.nth.call(null,vec__49042,(0),null);
var new_state = cljs.core.nth.call(null,vec__49042,(1),null);
if(cljs.core.not_EQ_.call(null,old_state,new_state)){
var output = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null);
cljs.core.async.put_BANG_.call(null,cljs.core.get_in.call(null,chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),output], null));

return output;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_49049 = (function (){try{if(cljs.core.map_QMARK_.call(null,state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e49047){if((e49047 instanceof Error)){
var e = e49047;
return e;
} else {
throw e49047;

}
}})();
if((e_49049 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(map? state)",state,e_49049,null);
}

var e_49050 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641),null,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720),null,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707),null], null), null)),x);
}).call(null,reason)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e49048){if((e49048 instanceof Error)){
var e = e49048;
return e;
} else {
throw e49048;

}
}})();
if((e_49050 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:el #{:requested-disconnect :downgrading-ws-to-ajax :unexpected :requested-reconnect}] reason)",reason,e_49050,null);
}

if(cljs.core.truth_((function (){var or__36802__auto__ = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
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
var e_49059 = (function (){try{if(taoensso.encore.chan_QMARK_.call(null,_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e49055){if((e49055 instanceof Error)){
var e = e49055;
return e;
} else {
throw e49055;

}
}})();
if((e_49059 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/chan? ?cb)",_QMARK_cb,e_49059,null);
}

taoensso.sente.assert_event.call(null,ev);

var vec__49056 = ev;
var ev_id = cljs.core.nth.call(null,vec__49056,(0),null);
var _ = cljs.core.nth.call(null,vec__49056,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__49056,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.as_qname.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__49056,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",868,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null,1086482905);

var buffered_evs = ((cljs.core.vector_QMARK_.call(null,clj))?clj:taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? clj)",clj,null,null));
var seq__49070 = cljs.core.seq.call(null,buffered_evs);
var chunk__49071 = null;
var count__49072 = (0);
var i__49073 = (0);
while(true){
if((i__49073 < count__49072)){
var ev = cljs.core._nth.call(null,chunk__49071,i__49073);
taoensso.sente.assert_event.call(null,ev);

var vec__49074_49080 = ev;
var id_49081 = cljs.core.nth.call(null,vec__49074_49080,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_49081),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__49082 = seq__49070;
var G__49083 = chunk__49071;
var G__49084 = count__49072;
var G__49085 = (i__49073 + (1));
seq__49070 = G__49082;
chunk__49071 = G__49083;
count__49072 = G__49084;
i__49073 = G__49085;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49070);
if(temp__4657__auto__){
var seq__49070__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49070__$1)){
var c__37613__auto__ = cljs.core.chunk_first.call(null,seq__49070__$1);
var G__49086 = cljs.core.chunk_rest.call(null,seq__49070__$1);
var G__49087 = c__37613__auto__;
var G__49088 = cljs.core.count.call(null,c__37613__auto__);
var G__49089 = (0);
seq__49070 = G__49086;
chunk__49071 = G__49087;
count__49072 = G__49088;
i__49073 = G__49089;
continue;
} else {
var ev = cljs.core.first.call(null,seq__49070__$1);
taoensso.sente.assert_event.call(null,ev);

var vec__49077_49090 = ev;
var id_49091 = cljs.core.nth.call(null,vec__49077_49090,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_49091),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__49092 = cljs.core.next.call(null,seq__49070__$1);
var G__49093 = null;
var G__49094 = (0);
var G__49095 = (0);
seq__49070 = G__49092;
chunk__49071 = G__49093;
count__49072 = G__49094;
i__49073 = G__49095;
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
var and__36790__auto__ = cljs.core.vector_QMARK_.call(null,x);
if(and__36790__auto__){
var vec__49105 = x;
var x1 = cljs.core.nth.call(null,vec__49105,(0),null);
return cljs.core._EQ_.call(null,x1,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686));
} else {
return and__36790__auto__;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_49129 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null], null), null)),x);
}).call(null,chsk_type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e49119){if((e49119 instanceof Error)){
var e = e49119;
return e;
} else {
throw e49119;

}
}})();
if((e_49129 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_49129,null);
}

var e_49130 = (function (){try{if(cljs.core.truth_(taoensso.sente.handshake_QMARK_.call(null,clj))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e49120){if((e49120 instanceof Error)){
var e = e49120;
return e;
} else {
throw e49120;

}
}})();
if((e_49130 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(handshake? clj)",clj,e_49130,null);
}

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",885,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null,1698004668);

var vec__49121 = clj;
var _ = cljs.core.nth.call(null,vec__49121,(0),null);
var vec__49124 = cljs.core.nth.call(null,vec__49121,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__49124,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__49124,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__49124,(2),null);
var map__49127 = chsk;
var map__49127__$1 = ((((!((map__49127 == null)))?((((map__49127.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49127.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49127):map__49127);
var chs = cljs.core.get.call(null,map__49127__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var ever_opened_QMARK__ = cljs.core.get.call(null,map__49127__$1,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913));
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_.call(null,ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),chsk_type,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),_QMARK_csrf_token,new cljs.core.Keyword(null,"handshake-data","handshake-data",-278378864),_QMARK_handshake_data,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event.call(null,handshake_ev);

if(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",904,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__49121,_,vec__49124,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__49127,map__49127__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__49121,_,vec__49124,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__49127,map__49127__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
,null)),null,-1096739586);
} else {
}

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk,((function (vec__49121,_,vec__49124,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__49127,map__49127__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (p1__49108_SHARP_){
return cljs.core.merge.call(null,p1__49108_SHARP_,new_state);
});})(vec__49121,_,vec__49124,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__49127,map__49127__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
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
if(cljs.core.truth_((function (){var and__36790__auto__ = taoensso.sente.node_target_QMARK_;
if(cljs.core.truth_(and__36790__auto__)){
return typeof require !== 'undefined';
} else {
return and__36790__auto__;
}
})())){
try{return require("websocket");
}catch (e49131){var e = e49131;
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
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__37424__auto__,k__37425__auto__){
var self__ = this;
var this__37424__auto____$1 = this;
return cljs.core._lookup.call(null,this__37424__auto____$1,k__37425__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__37426__auto__,k49138,else__37427__auto__){
var self__ = this;
var this__37426__auto____$1 = this;
var G__49140 = (((k49138 instanceof cljs.core.Keyword))?k49138.fqn:null);
switch (G__49140) {
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
return cljs.core.get.call(null,self__.__extmap,k49138,else__37427__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__37438__auto__,writer__37439__auto__,opts__37440__auto__){
var self__ = this;
var this__37438__auto____$1 = this;
var pr_pair__37441__auto__ = ((function (this__37438__auto____$1){
return (function (keyval__37442__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__37439__auto__,cljs.core.pr_writer,""," ","",opts__37440__auto__,keyval__37442__auto__);
});})(this__37438__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__37439__auto__,pr_pair__37441__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__37440__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49137){
var self__ = this;
var G__49137__$1 = this;
return (new cljs.core.RecordIter((0),G__49137__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__37422__auto__){
var self__ = this;
var this__37422__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__37418__auto__){
var self__ = this;
var this__37418__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__37428__auto__){
var self__ = this;
var this__37428__auto____$1 = this;
return (14 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__37419__auto__){
var self__ = this;
var this__37419__auto____$1 = this;
var h__37237__auto__ = self__.__hash;
if(!((h__37237__auto__ == null))){
return h__37237__auto__;
} else {
var h__37237__auto____$1 = cljs.core.hash_imap.call(null,this__37419__auto____$1);
self__.__hash = h__37237__auto____$1;

return h__37237__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__37420__auto__,other__37421__auto__){
var self__ = this;
var this__37420__auto____$1 = this;
if(cljs.core.truth_((function (){var and__36790__auto__ = other__37421__auto__;
if(cljs.core.truth_(and__36790__auto__)){
var and__36790__auto____$1 = (this__37420__auto____$1.constructor === other__37421__auto__.constructor);
if(and__36790__auto____$1){
return cljs.core.equiv_map.call(null,this__37420__auto____$1,other__37421__auto__);
} else {
return and__36790__auto____$1;
}
} else {
return and__36790__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__37433__auto__,k__37434__auto__){
var self__ = this;
var this__37433__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__37434__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__37433__auto____$1),self__.__meta),k__37434__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__37434__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__37431__auto__,k__37432__auto__,G__49137){
var self__ = this;
var this__37431__auto____$1 = this;
var pred__49141 = cljs.core.keyword_identical_QMARK_;
var expr__49142 = k__37432__auto__;
if(cljs.core.truth_(pred__49141.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__49142))){
return (new taoensso.sente.ChWebSocket(G__49137,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49141.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__49142))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__49137,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49141.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__49142))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__49137,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49141.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__49142))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__49137,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49141.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__49142))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__49137,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49141.call(null,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),expr__49142))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__49137,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49141.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__49142))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,G__49137,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49141.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__49142))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,G__49137,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49141.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__49142))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,G__49137,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49141.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__49142))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,G__49137,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49141.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__49142))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,G__49137,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49141.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__49142))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__49137,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49141.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__49142))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__49137,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49141.call(null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),expr__49142))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__49137,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__37432__auto__,G__49137),null));
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

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__37436__auto__){
var self__ = this;
var this__37436__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__37423__auto__,G__49137){
var self__ = this;
var this__37423__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__49137,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__37429__auto__,entry__37430__auto__){
var self__ = this;
var this__37429__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__37430__auto__)){
return cljs.core._assoc.call(null,this__37429__auto____$1,cljs.core._nth.call(null,entry__37430__auto__,(0)),cljs.core._nth.call(null,entry__37430__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__37429__auto____$1,entry__37430__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (chsk__$1){
return (function (p1__49132_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__49132_SHARP_,reason);
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
var map__49144 = opts;
var map__49144__$1 = ((((!((map__49144 == null)))?((((map__49144.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49144.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49144):map__49144);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__49144__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__49144__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__49144__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__4657__auto___49235 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___49235)){
var cb_uuid_49236 = temp__4657__auto___49235;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_49236], null),(function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e49146){if((e49146 instanceof Error)){
var e = e49146;
return e;
} else {
throw e49146;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__4657__auto___49237__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4657__auto___49237__$1)){
var timeout_ms_49238 = temp__4657__auto___49237__$1;
var c__40679__auto___49239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40679__auto___49239,timeout_ms_49238,temp__4657__auto___49237__$1,cb_uuid_49236,temp__4657__auto___49235,_QMARK_cb_uuid,ppstr,map__49144,map__49144__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
var f__40680__auto__ = (function (){var switch__40567__auto__ = ((function (c__40679__auto___49239,timeout_ms_49238,temp__4657__auto___49237__$1,cb_uuid_49236,temp__4657__auto___49235,_QMARK_cb_uuid,ppstr,map__49144,map__49144__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (state_49157){
var state_val_49158 = (state_49157[(1)]);
if((state_val_49158 === (1))){
var inst_49147 = cljs.core.async.timeout.call(null,timeout_ms_49238);
var state_49157__$1 = state_49157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49157__$1,(2),inst_49147);
} else {
if((state_val_49158 === (2))){
var inst_49150 = (state_49157[(7)]);
var inst_49149 = (state_49157[(2)]);
var inst_49150__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_49157__$1 = (function (){var statearr_49159 = state_49157;
(statearr_49159[(7)] = inst_49150__$1);

(statearr_49159[(8)] = inst_49149);

return statearr_49159;
})();
if(cljs.core.truth_(inst_49150__$1)){
var statearr_49160_49240 = state_49157__$1;
(statearr_49160_49240[(1)] = (3));

} else {
var statearr_49161_49241 = state_49157__$1;
(statearr_49161_49241[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49158 === (3))){
var inst_49150 = (state_49157[(7)]);
var inst_49152 = inst_49150.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_49157__$1 = state_49157;
var statearr_49162_49242 = state_49157__$1;
(statearr_49162_49242[(2)] = inst_49152);

(statearr_49162_49242[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49158 === (4))){
var state_49157__$1 = state_49157;
var statearr_49163_49243 = state_49157__$1;
(statearr_49163_49243[(2)] = null);

(statearr_49163_49243[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49158 === (5))){
var inst_49155 = (state_49157[(2)]);
var state_49157__$1 = state_49157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49157__$1,inst_49155);
} else {
return null;
}
}
}
}
}
});})(c__40679__auto___49239,timeout_ms_49238,temp__4657__auto___49237__$1,cb_uuid_49236,temp__4657__auto___49235,_QMARK_cb_uuid,ppstr,map__49144,map__49144__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
return ((function (switch__40567__auto__,c__40679__auto___49239,timeout_ms_49238,temp__4657__auto___49237__$1,cb_uuid_49236,temp__4657__auto___49235,_QMARK_cb_uuid,ppstr,map__49144,map__49144__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function() {
var taoensso$sente$state_machine__40568__auto__ = null;
var taoensso$sente$state_machine__40568__auto____0 = (function (){
var statearr_49167 = [null,null,null,null,null,null,null,null,null];
(statearr_49167[(0)] = taoensso$sente$state_machine__40568__auto__);

(statearr_49167[(1)] = (1));

return statearr_49167;
});
var taoensso$sente$state_machine__40568__auto____1 = (function (state_49157){
while(true){
var ret_value__40569__auto__ = (function (){try{while(true){
var result__40570__auto__ = switch__40567__auto__.call(null,state_49157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40570__auto__;
}
break;
}
}catch (e49168){if((e49168 instanceof Object)){
var ex__40571__auto__ = e49168;
var statearr_49169_49244 = state_49157;
(statearr_49169_49244[(5)] = ex__40571__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49245 = state_49157;
state_49157 = G__49245;
continue;
} else {
return ret_value__40569__auto__;
}
break;
}
});
taoensso$sente$state_machine__40568__auto__ = function(state_49157){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40568__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40568__auto____1.call(this,state_49157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40568__auto____0;
taoensso$sente$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40568__auto____1;
return taoensso$sente$state_machine__40568__auto__;
})()
;})(switch__40567__auto__,c__40679__auto___49239,timeout_ms_49238,temp__4657__auto___49237__$1,cb_uuid_49236,temp__4657__auto___49235,_QMARK_cb_uuid,ppstr,map__49144,map__49144__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
})();
var state__40681__auto__ = (function (){var statearr_49170 = f__40680__auto__.call(null);
(statearr_49170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40679__auto___49239);

return statearr_49170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40681__auto__);
});})(c__40679__auto___49239,timeout_ms_49238,temp__4657__auto___49237__$1,cb_uuid_49236,temp__4657__auto___49235,_QMARK_cb_uuid,ppstr,map__49144,map__49144__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.udt_last_comms_,taoensso.encore.now_udt.call(null));

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e49171){var e = e49171;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",986,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,map__49144,map__49144__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,map__49144,map__49144__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,-886344886);

var temp__4657__auto___49246 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___49246)){
var cb_uuid_49247 = temp__4657__auto___49246;
var cb_fn_STAR__49248 = (function (){var or__36802__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_49247);
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
var e__$1 = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e49172){if((e49172 instanceof Error)){
var e__$1 = e49172;
return e__$1;
} else {
throw e49172;

}
}})();
if((e__$1 == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e__$1,null);
}
}
})();
cb_fn_STAR__49248.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = (function (){var or__36802__auto__ = taoensso.encore.oget.call(null,goog.global,"WebSocket");
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
var or__36802__auto____$1 = taoensso.encore.oget.call(null,goog.global,"MozWebSocket");
if(cljs.core.truth_(or__36802__auto____$1)){
return or__36802__auto____$1;
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",1011,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,932590287);

goog.global.setTimeout(taoensso$sente$connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__49133_SHARP_){
return cljs.core.assoc.call(null,p1__49133_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
;
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string.call(null,self__.url,cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null)))));
}catch (e49179){var e = e49179;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",1025,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket error"], null);
});})(e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,2139502345);

return null;
}})();
if(cljs.core.not.call(null,_QMARK_socket)){
return retry_fn.call(null);
} else {
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__49180 = _QMARK_socket;
(G__49180["onerror"] = ((function (G__49180,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",1035,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__49180,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.call(null,ws_ev);
}catch (e49181){var _ = e49181;
return ws_ev;
}})()], null);
});})(G__49180,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-676852611);

var last_ws_error = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev], null);
return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (last_ws_error,G__49180,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__49134_SHARP_){
return cljs.core.assoc.call(null,p1__49134_SHARP_,new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502),last_ws_error);
});})(last_ws_error,G__49180,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
});})(G__49180,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__49180["onmessage"] = ((function (G__49180,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.call(null,ws_ev,"data");
var vec__49182 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__49182,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__49182,(1),null);
cljs.core.reset_BANG_.call(null,self__.udt_last_comms_,taoensso.encore.now_udt.call(null));

var or__36802__auto__ = (cljs.core.truth_(taoensso.sente.handshake_QMARK_.call(null,clj))?(function (){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),chsk__$1,clj);

cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));

return new cljs.core.Keyword(null,"handshake","handshake",68079331);
})()
:null);
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
var or__36802__auto____$1 = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)))?(function (){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(self__.chs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__36802__auto____$1)){
return or__36802__auto____$1;
} else {
var temp__4655__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4655__auto__)){
var cb_uuid = temp__4655__auto__;
var temp__4655__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4655__auto____$1)){
var cb_fn = temp__4655__auto____$1;
return cb_fn.call(null,clj);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",1071,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__36802__auto____$1,or__36802__auto__,ppstr,vec__49182,clj,_QMARK_cb_uuid,G__49180,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__36802__auto____$1,or__36802__auto__,ppstr,vec__49182,clj,_QMARK_cb_uuid,G__49180,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-1604109216);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
}
});})(G__49180,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__49180["onclose"] = ((function (G__49180,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var clean_QMARK_ = taoensso.encore.oget.call(null,ws_ev,"wasClean");
var code = taoensso.encore.oget.call(null,ws_ev,"code");
var reason = taoensso.encore.oget.call(null,ws_ev,"reason");
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev,new cljs.core.Keyword(null,"clean?","clean?",-1675631009),clean_QMARK_,new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null);
if(cljs.core.truth_(clean_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",1093,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (clean_QMARK_,code,reason,last_ws_close,G__49180,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean WebSocket close, will not attempt reconnect"], null);
});})(clean_QMARK_,code,reason,last_ws_close,G__49180,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-1313911316);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__49180,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__49135_SHARP_){
return cljs.core.assoc.call(null,p1__49135_SHARP_,new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__49180,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__49180,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__49136_SHARP_){
return cljs.core.assoc.call(null,taoensso.sente.chsk_state__GT_closed.call(null,p1__49136_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424)),new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__49180,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

return retry_fn.call(null);
}
});})(G__49180,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

return G__49180;
})());
}
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
;
var temp__4657__auto___49249__$1 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__4657__auto___49249__$1)){
var ms_49250 = temp__4657__auto___49249__$1;
var c__40679__auto___49251 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40679__auto___49251,ms_49250,temp__4657__auto___49249__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
var f__40680__auto__ = (function (){var switch__40567__auto__ = ((function (c__40679__auto___49251,ms_49250,temp__4657__auto___49249__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function (state_49212){
var state_val_49213 = (state_49212[(1)]);
if((state_val_49213 === (7))){
var inst_49208 = (state_49212[(2)]);
var state_49212__$1 = state_49212;
var statearr_49214_49252 = state_49212__$1;
(statearr_49214_49252[(2)] = inst_49208);

(statearr_49214_49252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49213 === (1))){
var state_49212__$1 = state_49212;
var statearr_49215_49253 = state_49212__$1;
(statearr_49215_49253[(2)] = null);

(statearr_49215_49253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49213 === (4))){
var inst_49189 = (state_49212[(2)]);
var inst_49190 = have_handle_QMARK_.call(null);
var state_49212__$1 = (function (){var statearr_49216 = state_49212;
(statearr_49216[(7)] = inst_49189);

return statearr_49216;
})();
if(cljs.core.truth_(inst_49190)){
var statearr_49217_49254 = state_49212__$1;
(statearr_49217_49254[(1)] = (5));

} else {
var statearr_49218_49255 = state_49212__$1;
(statearr_49218_49255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49213 === (6))){
var state_49212__$1 = state_49212;
var statearr_49219_49256 = state_49212__$1;
(statearr_49219_49256[(2)] = null);

(statearr_49219_49256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49213 === (3))){
var inst_49210 = (state_49212[(2)]);
var state_49212__$1 = state_49212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49212__$1,inst_49210);
} else {
if((state_val_49213 === (2))){
var inst_49186 = cljs.core.deref.call(null,self__.udt_last_comms_);
var inst_49187 = cljs.core.async.timeout.call(null,ms_49250);
var state_49212__$1 = (function (){var statearr_49220 = state_49212;
(statearr_49220[(8)] = inst_49186);

return statearr_49220;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49212__$1,(4),inst_49187);
} else {
if((state_val_49213 === (9))){
var state_49212__$1 = state_49212;
var statearr_49221_49257 = state_49212__$1;
(statearr_49221_49257[(2)] = null);

(statearr_49221_49257[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49213 === (5))){
var inst_49186 = (state_49212[(8)]);
var inst_49192 = cljs.core.deref.call(null,self__.udt_last_comms_);
var inst_49193 = cljs.core._EQ_.call(null,inst_49186,inst_49192);
var state_49212__$1 = state_49212;
if(inst_49193){
var statearr_49222_49258 = state_49212__$1;
(statearr_49222_49258[(1)] = (8));

} else {
var statearr_49223_49259 = state_49212__$1;
(statearr_49223_49259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49213 === (10))){
var inst_49204 = (state_49212[(2)]);
var state_49212__$1 = (function (){var statearr_49224 = state_49212;
(statearr_49224[(9)] = inst_49204);

return statearr_49224;
})();
var statearr_49225_49260 = state_49212__$1;
(statearr_49225_49260[(2)] = null);

(statearr_49225_49260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49213 === (8))){
var inst_49195 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49196 = [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)];
var inst_49197 = (new cljs.core.PersistentVector(null,1,(5),inst_49195,inst_49196,null));
var inst_49198 = [new cljs.core.Keyword(null,"flush?","flush?",-108887231)];
var inst_49199 = [true];
var inst_49200 = cljs.core.PersistentHashMap.fromArrays(inst_49198,inst_49199);
var inst_49201 = taoensso.sente._chsk_send_BANG_.call(null,chsk__$1,inst_49197,inst_49200);
var state_49212__$1 = state_49212;
var statearr_49226_49261 = state_49212__$1;
(statearr_49226_49261[(2)] = inst_49201);

(statearr_49226_49261[(1)] = (10));


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
});})(c__40679__auto___49251,ms_49250,temp__4657__auto___49249__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
;
return ((function (switch__40567__auto__,c__40679__auto___49251,ms_49250,temp__4657__auto___49249__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function() {
var taoensso$sente$state_machine__40568__auto__ = null;
var taoensso$sente$state_machine__40568__auto____0 = (function (){
var statearr_49230 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49230[(0)] = taoensso$sente$state_machine__40568__auto__);

(statearr_49230[(1)] = (1));

return statearr_49230;
});
var taoensso$sente$state_machine__40568__auto____1 = (function (state_49212){
while(true){
var ret_value__40569__auto__ = (function (){try{while(true){
var result__40570__auto__ = switch__40567__auto__.call(null,state_49212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40570__auto__;
}
break;
}
}catch (e49231){if((e49231 instanceof Object)){
var ex__40571__auto__ = e49231;
var statearr_49232_49262 = state_49212;
(statearr_49232_49262[(5)] = ex__40571__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49263 = state_49212;
state_49212 = G__49263;
continue;
} else {
return ret_value__40569__auto__;
}
break;
}
});
taoensso$sente$state_machine__40568__auto__ = function(state_49212){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40568__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40568__auto____1.call(this,state_49212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40568__auto____0;
taoensso$sente$state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40568__auto____1;
return taoensso$sente$state_machine__40568__auto__;
})()
;})(switch__40567__auto__,c__40679__auto___49251,ms_49250,temp__4657__auto___49249__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
})();
var state__40681__auto__ = (function (){var statearr_49233 = f__40680__auto__.call(null);
(statearr_49233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40679__auto___49251);

return statearr_49233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40681__auto__);
});})(c__40679__auto___49251,ms_49250,temp__4657__auto___49249__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
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

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__37458__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__37458__auto__,writer__37459__auto__){
return cljs.core._write.call(null,writer__37459__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__49139){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__49139),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__49139),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__49139),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__49139),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__49139),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968).cljs$core$IFn$_invoke$arity$1(G__49139),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__49139),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__49139),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__49139),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__49139),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__49139),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__49139),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__49139),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639).cljs$core$IFn$_invoke$arity$1(G__49139),null,cljs.core.dissoc.call(null,G__49139,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)),null));
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
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__37424__auto__,k__37425__auto__){
var self__ = this;
var this__37424__auto____$1 = this;
return cljs.core._lookup.call(null,this__37424__auto____$1,k__37425__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__37426__auto__,k49271,else__37427__auto__){
var self__ = this;
var this__37426__auto____$1 = this;
var G__49273 = (((k49271 instanceof cljs.core.Keyword))?k49271.fqn:null);
switch (G__49273) {
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
return cljs.core.get.call(null,self__.__extmap,k49271,else__37427__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__37438__auto__,writer__37439__auto__,opts__37440__auto__){
var self__ = this;
var this__37438__auto____$1 = this;
var pr_pair__37441__auto__ = ((function (this__37438__auto____$1){
return (function (keyval__37442__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__37439__auto__,cljs.core.pr_writer,""," ","",opts__37440__auto__,keyval__37442__auto__);
});})(this__37438__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__37439__auto__,pr_pair__37441__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__37440__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49270){
var self__ = this;
var G__49270__$1 = this;
return (new cljs.core.RecordIter((0),G__49270__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__37422__auto__){
var self__ = this;
var this__37422__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__37418__auto__){
var self__ = this;
var this__37418__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__37428__auto__){
var self__ = this;
var this__37428__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__37419__auto__){
var self__ = this;
var this__37419__auto____$1 = this;
var h__37237__auto__ = self__.__hash;
if(!((h__37237__auto__ == null))){
return h__37237__auto__;
} else {
var h__37237__auto____$1 = cljs.core.hash_imap.call(null,this__37419__auto____$1);
self__.__hash = h__37237__auto____$1;

return h__37237__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__37420__auto__,other__37421__auto__){
var self__ = this;
var this__37420__auto____$1 = this;
if(cljs.core.truth_((function (){var and__36790__auto__ = other__37421__auto__;
if(cljs.core.truth_(and__36790__auto__)){
var and__36790__auto____$1 = (this__37420__auto____$1.constructor === other__37421__auto__.constructor);
if(and__36790__auto____$1){
return cljs.core.equiv_map.call(null,this__37420__auto____$1,other__37421__auto__);
} else {
return and__36790__auto____$1;
}
} else {
return and__36790__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__37433__auto__,k__37434__auto__){
var self__ = this;
var this__37433__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__37434__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__37433__auto____$1),self__.__meta),k__37434__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__37434__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__37431__auto__,k__37432__auto__,G__49270){
var self__ = this;
var this__37431__auto____$1 = this;
var pred__49274 = cljs.core.keyword_identical_QMARK_;
var expr__49275 = k__37432__auto__;
if(cljs.core.truth_(pred__49274.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__49275))){
return (new taoensso.sente.ChAjaxSocket(G__49270,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49274.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__49275))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__49270,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49274.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__49275))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__49270,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49274.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__49275))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__49270,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49274.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__49275))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__49270,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49274.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__49275))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__49270,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49274.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__49275))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__49270,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49274.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__49275))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,G__49270,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49274.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__49275))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,G__49270,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49274.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__49275))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__49270,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49274.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__49275))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__49270,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__37432__auto__,G__49270),null));
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__37436__auto__){
var self__ = this;
var this__37436__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__37423__auto__,G__49270){
var self__ = this;
var this__37423__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__49270,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__37429__auto__,entry__37430__auto__){
var self__ = this;
var this__37429__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__37430__auto__)){
return cljs.core._assoc.call(null,this__37429__auto____$1,cljs.core._nth.call(null,entry__37430__auto__,(0)),cljs.core._nth.call(null,entry__37430__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__37429__auto____$1,entry__37430__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (chsk__$1){
return (function (p1__49264_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__49264_SHARP_,reason);
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
var map__49277 = opts;
var map__49277__$1 = ((((!((map__49277 == null)))?((((map__49277.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49277.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49277):map__49277);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__49277__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__49277__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__49277__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var csrf_token = new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_));
taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__36802__auto__ = _QMARK_timeout_ms;
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
var or__36802__auto____$1 = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__36802__auto____$1)){
return or__36802__auto____$1;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),csrf_token], null)),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token,new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null));
})()], null)),((function (csrf_token,map__49277,map__49277__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function taoensso$sente$ajax_cb(p__49279){
var map__49285 = p__49279;
var map__49285__$1 = ((((!((map__49285 == null)))?((((map__49285.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49285.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49285):map__49285);
var _QMARK_error = cljs.core.get.call(null,map__49285__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__49285__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (map__49285,map__49285__$1,_QMARK_error,_QMARK_content,csrf_token,map__49277,map__49277__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__49265_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__49265_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
});})(map__49285,map__49285__$1,_QMARK_error,_QMARK_content,csrf_token,map__49277,map__49277__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
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
var vec__49287 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__49287,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__49287,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",1213,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (content,resp_ppstr,vec__49287,resp_clj,___$1,map__49285,map__49285__$1,_QMARK_error,_QMARK_content,csrf_token,map__49277,map__49277__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__49287,resp_clj,___$1,map__49285,map__49285__$1,_QMARK_error,_QMARK_content,csrf_token,map__49277,map__49277__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,757250654);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (content,resp_ppstr,vec__49287,resp_clj,___$1,map__49285,map__49285__$1,_QMARK_error,_QMARK_content,csrf_token,map__49277,map__49277__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__49266_SHARP_){
return cljs.core.assoc.call(null,p1__49266_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
});})(content,resp_ppstr,vec__49287,resp_clj,___$1,map__49285,map__49285__$1,_QMARK_error,_QMARK_content,csrf_token,map__49277,map__49277__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);
}
});})(csrf_token,map__49277,map__49277__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",1223,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,-45150733);

if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
var udt_next_reconnect = (taoensso.encore.now_udt.call(null) + backoff_ms);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",1231,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,2014967611);

goog.global.setTimeout(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return taoensso$sente$poll_fn.call(null,retry_count_STAR_);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__49267_SHARP_){
return cljs.core.assoc.call(null,p1__49267_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__36802__auto__ = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null)))], null)),((function (retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn_$_ajax_cb(p__49301){
var map__49307 = p__49301;
var map__49307__$1 = ((((!((map__49307 == null)))?((((map__49307.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49307.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49307):map__49307);
var _QMARK_error = cljs.core.get.call(null,map__49307__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__49307__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn.call(null,(0));
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (map__49307,map__49307__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__49268_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__49268_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
});})(map__49307,map__49307__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

return retry_fn.call(null);

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__49309 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__49309,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_.call(null,clj);
if(cljs.core.truth_(handshake_QMARK_)){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (content,ppstr,vec__49309,clj,handshake_QMARK_,map__49307,map__49307__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__49269_SHARP_){
return cljs.core.assoc.call(null,p1__49269_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
});})(content,ppstr,vec__49309,clj,handshake_QMARK_,map__49307,map__49307__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

taoensso$sente$poll_fn.call(null,(0));

if(cljs.core.truth_(handshake_QMARK_)){
return null;
} else {
var or__36802__auto__ = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)))?(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__))){
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("debug","timeout","debug/timeout",309499949)], null)], null));
} else {
}

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
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

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__37458__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__37458__auto__,writer__37459__auto__){
return cljs.core._write.call(null,writer__37459__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__49272){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__49272),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__49272),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__49272),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__49272),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__49272),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__49272),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__49272),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__49272),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__49272),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__49272),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__49272),null,cljs.core.dissoc.call(null,G__49272,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)),null));
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
taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__37424__auto__,k__37425__auto__){
var self__ = this;
var this__37424__auto____$1 = this;
return cljs.core._lookup.call(null,this__37424__auto____$1,k__37425__auto__,null);
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__37426__auto__,k49314,else__37427__auto__){
var self__ = this;
var this__37426__auto____$1 = this;
var G__49316 = (((k49314 instanceof cljs.core.Keyword))?k49314.fqn:null);
switch (G__49316) {
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
return cljs.core.get.call(null,self__.__extmap,k49314,else__37427__auto__);

}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__37438__auto__,writer__37439__auto__,opts__37440__auto__){
var self__ = this;
var this__37438__auto____$1 = this;
var pr_pair__37441__auto__ = ((function (this__37438__auto____$1){
return (function (keyval__37442__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__37439__auto__,cljs.core.pr_writer,""," ","",opts__37440__auto__,keyval__37442__auto__);
});})(this__37438__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__37439__auto__,pr_pair__37441__auto__,"#taoensso.sente.ChAutoSocket{",", ","}",opts__37440__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49313){
var self__ = this;
var G__49313__$1 = this;
return (new cljs.core.RecordIter((0),G__49313__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__37422__auto__){
var self__ = this;
var this__37422__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__37418__auto__){
var self__ = this;
var this__37418__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__37428__auto__){
var self__ = this;
var this__37428__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__37419__auto__){
var self__ = this;
var this__37419__auto____$1 = this;
var h__37237__auto__ = self__.__hash;
if(!((h__37237__auto__ == null))){
return h__37237__auto__;
} else {
var h__37237__auto____$1 = cljs.core.hash_imap.call(null,this__37419__auto____$1);
self__.__hash = h__37237__auto____$1;

return h__37237__auto____$1;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__37420__auto__,other__37421__auto__){
var self__ = this;
var this__37420__auto____$1 = this;
if(cljs.core.truth_((function (){var and__36790__auto__ = other__37421__auto__;
if(cljs.core.truth_(and__36790__auto__)){
var and__36790__auto____$1 = (this__37420__auto____$1.constructor === other__37421__auto__.constructor);
if(and__36790__auto____$1){
return cljs.core.equiv_map.call(null,this__37420__auto____$1,other__37421__auto__);
} else {
return and__36790__auto____$1;
}
} else {
return and__36790__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__37433__auto__,k__37434__auto__){
var self__ = this;
var this__37433__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl_","impl_",1218818179),null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),null,new cljs.core.Keyword(null,"state_","state_",957667102),null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),null], null), null),k__37434__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__37433__auto____$1),self__.__meta),k__37434__auto__);
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__37434__auto__)),null));
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__37431__auto__,k__37432__auto__,G__49313){
var self__ = this;
var this__37431__auto____$1 = this;
var pred__49317 = cljs.core.keyword_identical_QMARK_;
var expr__49318 = k__37432__auto__;
if(cljs.core.truth_(pred__49317.call(null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__49318))){
return (new taoensso.sente.ChAutoSocket(G__49313,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49317.call(null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__49318))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__49313,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49317.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__49318))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__49313,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49317.call(null,new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__49318))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__49313,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__37432__auto__,G__49313),null));
}
}
}
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__37436__auto__){
var self__ = this;
var this__37436__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__37423__auto__,G__49313){
var self__ = this;
var this__37423__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__49313,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__37429__auto__,entry__37430__auto__){
var self__ = this;
var this__37429__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__37430__auto__)){
return cljs.core._assoc.call(null,this__37429__auto____$1,cljs.core._nth.call(null,entry__37430__auto__,(0)),cljs.core._nth.call(null,entry__37430__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__37429__auto____$1,entry__37430__auto__);
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
var map__49320 = opts;
var map__49320__$1 = ((((!((map__49320 == null)))?((((map__49320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49320):map__49320);
var _QMARK_cb = cljs.core.get.call(null,map__49320__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
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
var downgraded_QMARK___49323 = cljs.core.atom.call(null,false);
cljs.core.add_watch.call(null,self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080),((function (downgraded_QMARK___49323,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
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
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,downgraded_QMARK___49323,false,true))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",1359,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (ever_opened_QMARK__,temp__4657__auto____$1,impl,temp__4657__auto__,downgraded_QMARK___49323,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
});})(ever_opened_QMARK__,temp__4657__auto____$1,impl,temp__4657__auto__,downgraded_QMARK___49323,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
,null)),null,1654798816);

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
});})(downgraded_QMARK___49323,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
);

return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.new_ChWebSocket.call(null,ws_chsk_opts__$1));
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
;
cljs.core.reset_BANG_.call(null,self__.impl_,(function (){var or__36802__auto__ = ws_conn_BANG_.call(null);
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
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

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrSeq = (function (this__37458__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrWriter = (function (this__37458__auto__,writer__37459__auto__){
return cljs.core._write.call(null,writer__37459__auto__,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.__GT_ChAutoSocket = (function taoensso$sente$__GT_ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_){
return (new taoensso.sente.ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_,null,null,null));
});

taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__49315){
return (new taoensso.sente.ChAutoSocket(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104).cljs$core$IFn$_invoke$arity$1(G__49315),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327).cljs$core$IFn$_invoke$arity$1(G__49315),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__49315),new cljs.core.Keyword(null,"impl_","impl_",1218818179).cljs$core$IFn$_invoke$arity$1(G__49315),null,cljs.core.dissoc.call(null,G__49315,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts){
return taoensso.sente.map__GT_ChAutoSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false], null)),new cljs.core.Keyword(null,"impl_","impl_",1218818179),cljs.core.atom.call(null,null)], null),opts));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__49328 = (((protocol instanceof cljs.core.Keyword))?protocol.fqn:null);
switch (G__49328) {
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
}catch (e49329){if((e49329 instanceof Error)){
var e = e49329;
return e;
} else {
throw e49329;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:el #{\"https:\" \"http:\"}] protocol)",protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__49330 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__49330) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__49331 = protocol__$2;
switch (G__49331) {
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
var args__37884__auto__ = [];
var len__37877__auto___49352 = arguments.length;
var i__37878__auto___49353 = (0);
while(true){
if((i__37878__auto___49353 < len__37877__auto___49352)){
args__37884__auto__.push((arguments[i__37878__auto___49353]));

var G__49354 = (i__37878__auto___49353 + (1));
i__37878__auto___49353 = G__49354;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__49337){
var vec__49338 = p__49337;
var map__49341 = cljs.core.nth.call(null,vec__49338,(0),null);
var map__49341__$1 = ((((!((map__49341 == null)))?((((map__49341.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49341.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49341):map__49341);
var opts = map__49341__$1;
var ajax_opts = cljs.core.get.call(null,map__49341__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.call(null,map__49341__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var client_id = cljs.core.get.call(null,map__49341__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__36802__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var protocol = cljs.core.get.call(null,map__49341__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var packer = cljs.core.get.call(null,map__49341__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.call(null,map__49341__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.call(null,map__49341__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.call(null,map__49341__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.call(null,map__49341__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var backoff_ms_fn = cljs.core.get.call(null,map__49341__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__49341__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__49338,(1),null);
var e_49355 = (function (){try{if(((function (vec__49338,map__49341,map__49341__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)),x);
});})(vec__49338,map__49341,map__49341__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e49343){if((e49343 instanceof Error)){
var e = e49343;
return e;
} else {
throw e49343;

}
}})();
if((e_49355 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:in #{:ws :ajax :auto}] type)",type,e_49355,null);
}

var e_49356 = (function (){try{if(taoensso.encore.nblank_str_QMARK_.call(null,client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e49344){if((e49344 instanceof Error)){
var e = e49344;
return e;
} else {
throw e49344;

}
}})();
if((e_49356 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/nblank-str? client-id)",client_id,e_49356,null);
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",1424,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__49338,map__49341,map__49341__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__49338,map__49341,map__49341__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,-1036362186);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",1425,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__49338,map__49341,map__49341__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__49338,map__49341,map__49341__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,1718994051);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var vec__49345 = (function (){var win_loc = taoensso.encore.get_win_loc.call(null);
var path__$1 = (function (){var or__36802__auto__ = path;
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
var temp__4655__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ws","ws",86841443)),f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
} else {
var protocol__$1 = (function (){var or__36802__auto__ = protocol;
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
var or__36802__auto____$1 = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_loc);
if(cljs.core.truth_(or__36802__auto____$1)){
return or__36802__auto____$1;
} else {
return new cljs.core.Keyword(null,"http","http",382524695);
}
}
})();
var host__$1 = (function (){var or__36802__auto__ = host;
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.sente.get_chsk_url.call(null,protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443)),taoensso.sente.get_chsk_url.call(null,protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
}
})();
var ws_url = cljs.core.nth.call(null,vec__49345,(0),null);
var ajax_url = cljs.core.nth.call(null,vec__49345,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(128))),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),(function (){var buf = cljs.core.async.sliding_buffer.call(null,(512));
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.chan.call(null,buf,cljs.core.map.call(null,((function (buf,packer__$1,vec__49345,ws_url,ajax_url,vec__49338,map__49341,map__49341__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(buf,packer__$1,vec__49345,ws_url,ajax_url,vec__49338,map__49341,map__49341__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
} else {
return cljs.core.async.chan.call(null,buf);
}
})()], null);
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),ws_kalive_ms], null);
var ws_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),ws_url,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var ajax_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),ajax_url,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),ajax_opts,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),ws_chsk_opts,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_.call(null,(function (){var G__49348 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__49348) {
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
var ev_msg_ch = cljs.core.async.chan.call(null,(1),cljs.core.map.call(null,((function (chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__4655__auto__,packer__$1,vec__49345,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__49338,map__49341,map__49341__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__49349 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__49349,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__49349,(1),null);
var ev__$1 = vec__49349;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),internal_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),chsk_state_,new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__4655__auto__,packer__$1,vec__49345,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__49338,map__49341,map__49341__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
cljs.core.async.pipe.call(null,ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ev_msg_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",1513,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto__,packer__$1,vec__49345,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__49338,map__49341,map__49341__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
});})(temp__4655__auto__,packer__$1,vec__49345,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__49338,map__49341,map__49341__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,1417721771);
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq49335){
var G__49336 = cljs.core.first.call(null,seq49335);
var seq49335__$1 = cljs.core.next.call(null,seq49335);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__49336,seq49335__$1);
});

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__49437 = opts;
var map__49437__$1 = ((((!((map__49437 == null)))?((((map__49437.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49437.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49437):map__49437);
var trace_evs_QMARK_ = cljs.core.get.call(null,map__49437__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__49437__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.call(null,map__49437__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
var ch_ctrl = cljs.core.async.chan.call(null);
var execute1 = ((function (map__49437,map__49437__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl){
return (function (f){
return f.call(null);
});})(map__49437,map__49437__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl))
;
var c__40679__auto___49516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40679__auto___49516,map__49437,map__49437__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
var f__40680__auto__ = (function (){var switch__40567__auto__ = ((function (c__40679__auto___49516,map__49437,map__49437__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (state_49483){
var state_val_49484 = (state_49483[(1)]);
if((state_val_49484 === (7))){
var inst_49479 = (state_49483[(2)]);
var state_49483__$1 = state_49483;
var statearr_49485_49517 = state_49483__$1;
(statearr_49485_49517[(2)] = inst_49479);

(statearr_49485_49517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49484 === (1))){
var state_49483__$1 = state_49483;
var statearr_49486_49518 = state_49483__$1;
(statearr_49486_49518[(2)] = null);

(statearr_49486_49518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49484 === (4))){
var inst_49450 = (state_49483[(7)]);
var inst_49447 = (state_49483[(8)]);
var inst_49449 = (state_49483[(9)]);
var inst_49447__$1 = (state_49483[(2)]);
var inst_49448 = cljs.core.nth.call(null,inst_49447__$1,(0),null);
var inst_49449__$1 = cljs.core.nth.call(null,inst_49447__$1,(1),null);
var inst_49450__$1 = cljs.core._EQ_.call(null,inst_49449__$1,ch_ctrl);
var state_49483__$1 = (function (){var statearr_49487 = state_49483;
(statearr_49487[(10)] = inst_49448);

(statearr_49487[(7)] = inst_49450__$1);

(statearr_49487[(8)] = inst_49447__$1);

(statearr_49487[(9)] = inst_49449__$1);

return statearr_49487;
})();
if(inst_49450__$1){
var statearr_49488_49519 = state_49483__$1;
(statearr_49488_49519[(1)] = (5));

} else {
var statearr_49489_49520 = state_49483__$1;
(statearr_49489_49520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49484 === (15))){
var inst_49448 = (state_49483[(10)]);
var state_49483__$1 = state_49483;
var statearr_49490_49521 = state_49483__$1;
(statearr_49490_49521[(2)] = inst_49448);

(statearr_49490_49521[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49484 === (13))){
var inst_49465 = (state_49483[(2)]);
var state_49483__$1 = state_49483;
var statearr_49491_49522 = state_49483__$1;
(statearr_49491_49522[(2)] = inst_49465);

(statearr_49491_49522[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49484 === (6))){
var inst_49448 = (state_49483[(10)]);
var inst_49455 = (inst_49448 == null);
var inst_49456 = cljs.core.not.call(null,inst_49455);
var state_49483__$1 = state_49483;
if(inst_49456){
var statearr_49492_49523 = state_49483__$1;
(statearr_49492_49523[(1)] = (8));

} else {
var statearr_49493_49524 = state_49483__$1;
(statearr_49493_49524[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49484 === (3))){
var inst_49481 = (state_49483[(2)]);
var state_49483__$1 = state_49483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49483__$1,inst_49481);
} else {
if((state_val_49484 === (12))){
var state_49483__$1 = state_49483;
var statearr_49494_49525 = state_49483__$1;
(statearr_49494_49525[(2)] = false);

(statearr_49494_49525[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49484 === (2))){
var inst_49443 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49444 = [ch_recv,ch_ctrl];
var inst_49445 = (new cljs.core.PersistentVector(null,2,(5),inst_49443,inst_49444,null));
var state_49483__$1 = state_49483;
return cljs.core.async.ioc_alts_BANG_.call(null,state_49483__$1,(4),inst_49445);
} else {
if((state_val_49484 === (11))){
var state_49483__$1 = state_49483;
var statearr_49495_49526 = state_49483__$1;
(statearr_49495_49526[(2)] = true);

(statearr_49495_49526[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49484 === (9))){
var state_49483__$1 = state_49483;
var statearr_49496_49527 = state_49483__$1;
(statearr_49496_49527[(2)] = false);

(statearr_49496_49527[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49484 === (5))){
var state_49483__$1 = state_49483;
var statearr_49497_49528 = state_49483__$1;
(statearr_49497_49528[(2)] = null);

(statearr_49497_49528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49484 === (14))){
var inst_49448 = (state_49483[(10)]);
var inst_49470 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49448);
var state_49483__$1 = state_49483;
var statearr_49498_49529 = state_49483__$1;
(statearr_49498_49529[(2)] = inst_49470);

(statearr_49498_49529[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49484 === (16))){
var inst_49448 = (state_49483[(10)]);
var inst_49450 = (state_49483[(7)]);
var inst_49447 = (state_49483[(8)]);
var inst_49449 = (state_49483[(9)]);
var inst_49473 = (state_49483[(2)]);
var inst_49474 = cljs.core.get.call(null,inst_49473,new cljs.core.Keyword(null,"event","event",301435442));
var inst_49475 = (function (){var vec__49440 = inst_49447;
var v = inst_49448;
var p = inst_49449;
var stop_QMARK_ = inst_49450;
var map__49453 = inst_49473;
var event_msg = inst_49473;
var event = inst_49474;
return ((function (vec__49440,v,p,stop_QMARK_,map__49453,event_msg,event,inst_49448,inst_49450,inst_49447,inst_49449,inst_49473,inst_49474,state_val_49484,c__40679__auto___49516,map__49437,map__49437__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",1540,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__49440,v,p,stop_QMARK_,map__49453,event_msg,event,inst_49448,inst_49450,inst_49447,inst_49449,inst_49473,inst_49474,state_val_49484,c__40679__auto___49516,map__49437,map__49437__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});})(vec__49440,v,p,stop_QMARK_,map__49453,event_msg,event,inst_49448,inst_49450,inst_49447,inst_49449,inst_49473,inst_49474,state_val_49484,c__40679__auto___49516,map__49437,map__49437__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-1994471165);
} else {
}

return event_msg_handler.call(null,(cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.sente.server_event_msg_QMARK_.call(null,event_msg))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e49501){if((e49501 instanceof Error)){
var e = e49501;
return e;
} else {
throw e49501;

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
}catch (e49502){if((e49502 instanceof Error)){
var e = e49502;
return e;
} else {
throw e49502;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,"(client-event-msg? event-msg)",event_msg,e,null);
}
})()));
}catch (e49499){if((e49499 instanceof Error)){
var e1 = e49499;
try{var temp__4655__auto__ = error_handler;
if(cljs.core.truth_(temp__4655__auto__)){
var eh = temp__4655__auto__;
return error_handler.call(null,e1,event_msg);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",1549,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto__,e1,vec__49440,v,p,stop_QMARK_,map__49453,event_msg,event,inst_49448,inst_49450,inst_49447,inst_49449,inst_49473,inst_49474,state_val_49484,c__40679__auto___49516,map__49437,map__49437__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,"Chsk router `event-msg-handler` error: %s",event], null);
});})(temp__4655__auto__,e1,vec__49440,v,p,stop_QMARK_,map__49453,event_msg,event,inst_49448,inst_49450,inst_49447,inst_49449,inst_49473,inst_49474,state_val_49484,c__40679__auto___49516,map__49437,map__49437__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,540812778);
}
}catch (e49500){if((e49500 instanceof Error)){
var e2 = e49500;
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/0n/hwvnrjw10j5dhxmqy9s65bx40000gn/T/form-init3258075155749591276.clj",1550,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e2,e1,vec__49440,v,p,stop_QMARK_,map__49453,event_msg,event,inst_49448,inst_49450,inst_49447,inst_49449,inst_49473,inst_49474,state_val_49484,c__40679__auto___49516,map__49437,map__49437__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});})(e2,e1,vec__49440,v,p,stop_QMARK_,map__49453,event_msg,event,inst_49448,inst_49450,inst_49447,inst_49449,inst_49473,inst_49474,state_val_49484,c__40679__auto___49516,map__49437,map__49437__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-1258035924);
} else {
throw e49500;

}
}} else {
throw e49499;

}
}});
;})(vec__49440,v,p,stop_QMARK_,map__49453,event_msg,event,inst_49448,inst_49450,inst_49447,inst_49449,inst_49473,inst_49474,state_val_49484,c__40679__auto___49516,map__49437,map__49437__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var inst_49476 = execute1.call(null,inst_49475);
var state_49483__$1 = (function (){var statearr_49503 = state_49483;
(statearr_49503[(11)] = inst_49476);

return statearr_49503;
})();
var statearr_49504_49530 = state_49483__$1;
(statearr_49504_49530[(2)] = null);

(statearr_49504_49530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49484 === (10))){
var inst_49468 = (state_49483[(2)]);
var state_49483__$1 = state_49483;
if(cljs.core.truth_(inst_49468)){
var statearr_49505_49531 = state_49483__$1;
(statearr_49505_49531[(1)] = (14));

} else {
var statearr_49506_49532 = state_49483__$1;
(statearr_49506_49532[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49484 === (8))){
var inst_49448 = (state_49483[(10)]);
var inst_49458 = inst_49448.cljs$lang$protocol_mask$partition0$;
var inst_49459 = (inst_49458 & (64));
var inst_49460 = inst_49448.cljs$core$ISeq$;
var inst_49461 = (inst_49459) || (inst_49460);
var state_49483__$1 = state_49483;
if(cljs.core.truth_(inst_49461)){
var statearr_49507_49533 = state_49483__$1;
(statearr_49507_49533[(1)] = (11));

} else {
var statearr_49508_49534 = state_49483__$1;
(statearr_49508_49534[(1)] = (12));

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
});})(c__40679__auto___49516,map__49437,map__49437__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
;
return ((function (switch__40567__auto__,c__40679__auto___49516,map__49437,map__49437__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__40568__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__40568__auto____0 = (function (){
var statearr_49512 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49512[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__40568__auto__);

(statearr_49512[(1)] = (1));

return statearr_49512;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__40568__auto____1 = (function (state_49483){
while(true){
var ret_value__40569__auto__ = (function (){try{while(true){
var result__40570__auto__ = switch__40567__auto__.call(null,state_49483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40570__auto__;
}
break;
}
}catch (e49513){if((e49513 instanceof Object)){
var ex__40571__auto__ = e49513;
var statearr_49514_49535 = state_49483;
(statearr_49514_49535[(5)] = ex__40571__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49536 = state_49483;
state_49483 = G__49536;
continue;
} else {
return ret_value__40569__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__40568__auto__ = function(state_49483){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__40568__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__40568__auto____1.call(this,state_49483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__40568__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__40568__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__40568__auto__;
})()
;})(switch__40567__auto__,c__40679__auto___49516,map__49437,map__49437__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var state__40681__auto__ = (function (){var statearr_49515 = f__40680__auto__.call(null);
(statearr_49515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40679__auto___49516);

return statearr_49515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40681__auto__);
});})(c__40679__auto___49516,map__49437,map__49437__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
);


return ((function (map__49437,map__49437__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(map__49437,map__49437__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
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
var args__37884__auto__ = [];
var len__37877__auto___49546 = arguments.length;
var i__37878__auto___49547 = (0);
while(true){
if((i__37878__auto___49547 < len__37877__auto___49546)){
args__37884__auto__.push((arguments[i__37878__auto___49547]));

var G__49548 = (i__37878__auto___49547 + (1));
i__37878__auto___49547 = G__49548;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((2) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37885__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__49540){
var vec__49541 = p__49540;
var map__49544 = cljs.core.nth.call(null,vec__49541,(0),null);
var map__49544__$1 = ((((!((map__49544 == null)))?((((map__49544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49544):map__49544);
var opts = map__49544__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__49544__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__49544__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.call(null,map__49544__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
return taoensso.sente._start_chsk_router_BANG_.call(null,new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq49537){
var G__49538 = cljs.core.first.call(null,seq49537);
var seq49537__$1 = cljs.core.next.call(null,seq49537);
var G__49539 = cljs.core.first.call(null,seq49537__$1);
var seq49537__$2 = cljs.core.next.call(null,seq49537__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__49538,G__49539,seq49537__$2);
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
var args__37884__auto__ = [];
var len__37877__auto___49558 = arguments.length;
var i__37878__auto___49559 = (0);
while(true){
if((i__37878__auto___49559 < len__37877__auto___49558)){
args__37884__auto__.push((arguments[i__37878__auto___49559]));

var G__49560 = (i__37878__auto___49559 + (1));
i__37878__auto___49559 = G__49560;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((2) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37885__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__49552){
var vec__49553 = p__49552;
var map__49556 = cljs.core.nth.call(null,vec__49553,(0),null);
var map__49556__$1 = ((((!((map__49556 == null)))?((((map__49556.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49556.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49556):map__49556);
var opts = map__49556__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__49556__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__49556__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,cljs.core.not.call(null,new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq49549){
var G__49550 = cljs.core.first.call(null,seq49549);
var seq49549__$1 = cljs.core.next.call(null,seq49549);
var G__49551 = cljs.core.first.call(null,seq49549__$1);
var seq49549__$2 = cljs.core.next.call(null,seq49549__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__49550,G__49551,seq49549__$2);
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
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__49561,websocket_QMARK_){
var map__49564 = p__49561;
var map__49564__$1 = ((((!((map__49564 == null)))?((((map__49564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49564):map__49564);
var location = map__49564__$1;
var protocol = cljs.core.get.call(null,map__49564__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.call(null,map__49564__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__49564__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.call(null,protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str(protocol__$1),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__36802__auto__ = path;
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=sente.js.map