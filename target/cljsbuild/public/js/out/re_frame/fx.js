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
var seq__39003 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__39004 = null;
var count__39005 = (0);
var i__39006 = (0);
while(true){
if((i__39006 < count__39005)){
var vec__39007 = cljs.core._nth.call(null,chunk__39004,i__39006);
var effect_k = cljs.core.nth.call(null,vec__39007,(0),null);
var value = cljs.core.nth.call(null,vec__39007,(1),null);
var temp__4655__auto___39013 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___39013)){
var effect_fn_39014 = temp__4655__auto___39013;
effect_fn_39014.call(null,value);
} else {
}

var G__39015 = seq__39003;
var G__39016 = chunk__39004;
var G__39017 = count__39005;
var G__39018 = (i__39006 + (1));
seq__39003 = G__39015;
chunk__39004 = G__39016;
count__39005 = G__39017;
i__39006 = G__39018;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39003);
if(temp__4657__auto__){
var seq__39003__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39003__$1)){
var c__37615__auto__ = cljs.core.chunk_first.call(null,seq__39003__$1);
var G__39019 = cljs.core.chunk_rest.call(null,seq__39003__$1);
var G__39020 = c__37615__auto__;
var G__39021 = cljs.core.count.call(null,c__37615__auto__);
var G__39022 = (0);
seq__39003 = G__39019;
chunk__39004 = G__39020;
count__39005 = G__39021;
i__39006 = G__39022;
continue;
} else {
var vec__39010 = cljs.core.first.call(null,seq__39003__$1);
var effect_k = cljs.core.nth.call(null,vec__39010,(0),null);
var value = cljs.core.nth.call(null,vec__39010,(1),null);
var temp__4655__auto___39023 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___39023)){
var effect_fn_39024 = temp__4655__auto___39023;
effect_fn_39024.call(null,value);
} else {
}

var G__39025 = cljs.core.next.call(null,seq__39003__$1);
var G__39026 = null;
var G__39027 = (0);
var G__39028 = (0);
seq__39003 = G__39025;
chunk__39004 = G__39026;
count__39005 = G__39027;
i__39006 = G__39028;
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
var seq__39029 = cljs.core.seq.call(null,value);
var chunk__39030 = null;
var count__39031 = (0);
var i__39032 = (0);
while(true){
if((i__39032 < count__39031)){
var map__39033 = cljs.core._nth.call(null,chunk__39030,i__39032);
var map__39033__$1 = ((((!((map__39033 == null)))?((((map__39033.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39033.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39033):map__39033);
var effect = map__39033__$1;
var ms = cljs.core.get.call(null,map__39033__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__39033__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__39029,chunk__39030,count__39031,i__39032,map__39033,map__39033__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__39029,chunk__39030,count__39031,i__39032,map__39033,map__39033__$1,effect,ms,dispatch))
,ms);
}

var G__39037 = seq__39029;
var G__39038 = chunk__39030;
var G__39039 = count__39031;
var G__39040 = (i__39032 + (1));
seq__39029 = G__39037;
chunk__39030 = G__39038;
count__39031 = G__39039;
i__39032 = G__39040;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39029);
if(temp__4657__auto__){
var seq__39029__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39029__$1)){
var c__37615__auto__ = cljs.core.chunk_first.call(null,seq__39029__$1);
var G__39041 = cljs.core.chunk_rest.call(null,seq__39029__$1);
var G__39042 = c__37615__auto__;
var G__39043 = cljs.core.count.call(null,c__37615__auto__);
var G__39044 = (0);
seq__39029 = G__39041;
chunk__39030 = G__39042;
count__39031 = G__39043;
i__39032 = G__39044;
continue;
} else {
var map__39035 = cljs.core.first.call(null,seq__39029__$1);
var map__39035__$1 = ((((!((map__39035 == null)))?((((map__39035.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39035.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39035):map__39035);
var effect = map__39035__$1;
var ms = cljs.core.get.call(null,map__39035__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__39035__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__39029,chunk__39030,count__39031,i__39032,map__39035,map__39035__$1,effect,ms,dispatch,seq__39029__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__39029,chunk__39030,count__39031,i__39032,map__39035,map__39035__$1,effect,ms,dispatch,seq__39029__$1,temp__4657__auto__))
,ms);
}

var G__39045 = cljs.core.next.call(null,seq__39029__$1);
var G__39046 = null;
var G__39047 = (0);
var G__39048 = (0);
seq__39029 = G__39045;
chunk__39030 = G__39046;
count__39031 = G__39047;
i__39032 = G__39048;
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

var seq__39049 = cljs.core.seq.call(null,value);
var chunk__39050 = null;
var count__39051 = (0);
var i__39052 = (0);
while(true){
if((i__39052 < count__39051)){
var event = cljs.core._nth.call(null,chunk__39050,i__39052);
re_frame.router.dispatch.call(null,event);

var G__39053 = seq__39049;
var G__39054 = chunk__39050;
var G__39055 = count__39051;
var G__39056 = (i__39052 + (1));
seq__39049 = G__39053;
chunk__39050 = G__39054;
count__39051 = G__39055;
i__39052 = G__39056;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39049);
if(temp__4657__auto__){
var seq__39049__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39049__$1)){
var c__37615__auto__ = cljs.core.chunk_first.call(null,seq__39049__$1);
var G__39057 = cljs.core.chunk_rest.call(null,seq__39049__$1);
var G__39058 = c__37615__auto__;
var G__39059 = cljs.core.count.call(null,c__37615__auto__);
var G__39060 = (0);
seq__39049 = G__39057;
chunk__39050 = G__39058;
count__39051 = G__39059;
i__39052 = G__39060;
continue;
} else {
var event = cljs.core.first.call(null,seq__39049__$1);
re_frame.router.dispatch.call(null,event);

var G__39061 = cljs.core.next.call(null,seq__39049__$1);
var G__39062 = null;
var G__39063 = (0);
var G__39064 = (0);
seq__39049 = G__39061;
chunk__39050 = G__39062;
count__39051 = G__39063;
i__39052 = G__39064;
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
var seq__39065 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__39066 = null;
var count__39067 = (0);
var i__39068 = (0);
while(true){
if((i__39068 < count__39067)){
var event = cljs.core._nth.call(null,chunk__39066,i__39068);
clear_event.call(null,event);

var G__39069 = seq__39065;
var G__39070 = chunk__39066;
var G__39071 = count__39067;
var G__39072 = (i__39068 + (1));
seq__39065 = G__39069;
chunk__39066 = G__39070;
count__39067 = G__39071;
i__39068 = G__39072;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39065);
if(temp__4657__auto__){
var seq__39065__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39065__$1)){
var c__37615__auto__ = cljs.core.chunk_first.call(null,seq__39065__$1);
var G__39073 = cljs.core.chunk_rest.call(null,seq__39065__$1);
var G__39074 = c__37615__auto__;
var G__39075 = cljs.core.count.call(null,c__37615__auto__);
var G__39076 = (0);
seq__39065 = G__39073;
chunk__39066 = G__39074;
count__39067 = G__39075;
i__39068 = G__39076;
continue;
} else {
var event = cljs.core.first.call(null,seq__39065__$1);
clear_event.call(null,event);

var G__39077 = cljs.core.next.call(null,seq__39065__$1);
var G__39078 = null;
var G__39079 = (0);
var G__39080 = (0);
seq__39065 = G__39077;
chunk__39066 = G__39078;
count__39067 = G__39079;
i__39068 = G__39080;
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