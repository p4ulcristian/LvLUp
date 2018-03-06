// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__39000 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__39001 = null;
var count__39002 = (0);
var i__39003 = (0);
while(true){
if((i__39003 < count__39002)){
var vec__39004 = cljs.core._nth.call(null,chunk__39001,i__39003);
var effect_k = cljs.core.nth.call(null,vec__39004,(0),null);
var value = cljs.core.nth.call(null,vec__39004,(1),null);
var temp__4655__auto___39010 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___39010)){
var effect_fn_39011 = temp__4655__auto___39010;
effect_fn_39011.call(null,value);
} else {
}

var G__39012 = seq__39000;
var G__39013 = chunk__39001;
var G__39014 = count__39002;
var G__39015 = (i__39003 + (1));
seq__39000 = G__39012;
chunk__39001 = G__39013;
count__39002 = G__39014;
i__39003 = G__39015;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39000);
if(temp__4657__auto__){
var seq__39000__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39000__$1)){
var c__37613__auto__ = cljs.core.chunk_first.call(null,seq__39000__$1);
var G__39016 = cljs.core.chunk_rest.call(null,seq__39000__$1);
var G__39017 = c__37613__auto__;
var G__39018 = cljs.core.count.call(null,c__37613__auto__);
var G__39019 = (0);
seq__39000 = G__39016;
chunk__39001 = G__39017;
count__39002 = G__39018;
i__39003 = G__39019;
continue;
} else {
var vec__39007 = cljs.core.first.call(null,seq__39000__$1);
var effect_k = cljs.core.nth.call(null,vec__39007,(0),null);
var value = cljs.core.nth.call(null,vec__39007,(1),null);
var temp__4655__auto___39020 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___39020)){
var effect_fn_39021 = temp__4655__auto___39020;
effect_fn_39021.call(null,value);
} else {
}

var G__39022 = cljs.core.next.call(null,seq__39000__$1);
var G__39023 = null;
var G__39024 = (0);
var G__39025 = (0);
seq__39000 = G__39022;
chunk__39001 = G__39023;
count__39002 = G__39024;
i__39003 = G__39025;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__39026 = cljs.core.seq.call(null,value);
var chunk__39027 = null;
var count__39028 = (0);
var i__39029 = (0);
while(true){
if((i__39029 < count__39028)){
var map__39030 = cljs.core._nth.call(null,chunk__39027,i__39029);
var map__39030__$1 = ((((!((map__39030 == null)))?((((map__39030.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39030.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39030):map__39030);
var effect = map__39030__$1;
var ms = cljs.core.get.call(null,map__39030__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__39030__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__39026,chunk__39027,count__39028,i__39029,map__39030,map__39030__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__39026,chunk__39027,count__39028,i__39029,map__39030,map__39030__$1,effect,ms,dispatch))
,ms);
}

var G__39034 = seq__39026;
var G__39035 = chunk__39027;
var G__39036 = count__39028;
var G__39037 = (i__39029 + (1));
seq__39026 = G__39034;
chunk__39027 = G__39035;
count__39028 = G__39036;
i__39029 = G__39037;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39026);
if(temp__4657__auto__){
var seq__39026__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39026__$1)){
var c__37613__auto__ = cljs.core.chunk_first.call(null,seq__39026__$1);
var G__39038 = cljs.core.chunk_rest.call(null,seq__39026__$1);
var G__39039 = c__37613__auto__;
var G__39040 = cljs.core.count.call(null,c__37613__auto__);
var G__39041 = (0);
seq__39026 = G__39038;
chunk__39027 = G__39039;
count__39028 = G__39040;
i__39029 = G__39041;
continue;
} else {
var map__39032 = cljs.core.first.call(null,seq__39026__$1);
var map__39032__$1 = ((((!((map__39032 == null)))?((((map__39032.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39032.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39032):map__39032);
var effect = map__39032__$1;
var ms = cljs.core.get.call(null,map__39032__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__39032__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__39026,chunk__39027,count__39028,i__39029,map__39032,map__39032__$1,effect,ms,dispatch,seq__39026__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__39026,chunk__39027,count__39028,i__39029,map__39032,map__39032__$1,effect,ms,dispatch,seq__39026__$1,temp__4657__auto__))
,ms);
}

var G__39042 = cljs.core.next.call(null,seq__39026__$1);
var G__39043 = null;
var G__39044 = (0);
var G__39045 = (0);
seq__39026 = G__39042;
chunk__39027 = G__39043;
count__39028 = G__39044;
i__39029 = G__39045;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
}

var seq__39046 = cljs.core.seq.call(null,value);
var chunk__39047 = null;
var count__39048 = (0);
var i__39049 = (0);
while(true){
if((i__39049 < count__39048)){
var event = cljs.core._nth.call(null,chunk__39047,i__39049);
re_frame.router.dispatch.call(null,event);

var G__39050 = seq__39046;
var G__39051 = chunk__39047;
var G__39052 = count__39048;
var G__39053 = (i__39049 + (1));
seq__39046 = G__39050;
chunk__39047 = G__39051;
count__39048 = G__39052;
i__39049 = G__39053;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39046);
if(temp__4657__auto__){
var seq__39046__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39046__$1)){
var c__37613__auto__ = cljs.core.chunk_first.call(null,seq__39046__$1);
var G__39054 = cljs.core.chunk_rest.call(null,seq__39046__$1);
var G__39055 = c__37613__auto__;
var G__39056 = cljs.core.count.call(null,c__37613__auto__);
var G__39057 = (0);
seq__39046 = G__39054;
chunk__39047 = G__39055;
count__39048 = G__39056;
i__39049 = G__39057;
continue;
} else {
var event = cljs.core.first.call(null,seq__39046__$1);
re_frame.router.dispatch.call(null,event);

var G__39058 = cljs.core.next.call(null,seq__39046__$1);
var G__39059 = null;
var G__39060 = (0);
var G__39061 = (0);
seq__39046 = G__39058;
chunk__39047 = G__39059;
count__39048 = G__39060;
i__39049 = G__39061;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__39062 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__39063 = null;
var count__39064 = (0);
var i__39065 = (0);
while(true){
if((i__39065 < count__39064)){
var event = cljs.core._nth.call(null,chunk__39063,i__39065);
clear_event.call(null,event);

var G__39066 = seq__39062;
var G__39067 = chunk__39063;
var G__39068 = count__39064;
var G__39069 = (i__39065 + (1));
seq__39062 = G__39066;
chunk__39063 = G__39067;
count__39064 = G__39068;
i__39065 = G__39069;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39062);
if(temp__4657__auto__){
var seq__39062__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39062__$1)){
var c__37613__auto__ = cljs.core.chunk_first.call(null,seq__39062__$1);
var G__39070 = cljs.core.chunk_rest.call(null,seq__39062__$1);
var G__39071 = c__37613__auto__;
var G__39072 = cljs.core.count.call(null,c__37613__auto__);
var G__39073 = (0);
seq__39062 = G__39070;
chunk__39063 = G__39071;
count__39064 = G__39072;
i__39065 = G__39073;
continue;
} else {
var event = cljs.core.first.call(null,seq__39062__$1);
clear_event.call(null,event);

var G__39074 = cljs.core.next.call(null,seq__39062__$1);
var G__39075 = null;
var G__39076 = (0);
var G__39077 = (0);
seq__39062 = G__39074;
chunk__39063 = G__39075;
count__39064 = G__39076;
i__39065 = G__39077;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map