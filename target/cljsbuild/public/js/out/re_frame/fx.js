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
var seq__39001 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__39002 = null;
var count__39003 = (0);
var i__39004 = (0);
while(true){
if((i__39004 < count__39003)){
var vec__39005 = cljs.core._nth.call(null,chunk__39002,i__39004);
var effect_k = cljs.core.nth.call(null,vec__39005,(0),null);
var value = cljs.core.nth.call(null,vec__39005,(1),null);
var temp__4655__auto___39011 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___39011)){
var effect_fn_39012 = temp__4655__auto___39011;
effect_fn_39012.call(null,value);
} else {
}

var G__39013 = seq__39001;
var G__39014 = chunk__39002;
var G__39015 = count__39003;
var G__39016 = (i__39004 + (1));
seq__39001 = G__39013;
chunk__39002 = G__39014;
count__39003 = G__39015;
i__39004 = G__39016;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39001);
if(temp__4657__auto__){
var seq__39001__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39001__$1)){
var c__37613__auto__ = cljs.core.chunk_first.call(null,seq__39001__$1);
var G__39017 = cljs.core.chunk_rest.call(null,seq__39001__$1);
var G__39018 = c__37613__auto__;
var G__39019 = cljs.core.count.call(null,c__37613__auto__);
var G__39020 = (0);
seq__39001 = G__39017;
chunk__39002 = G__39018;
count__39003 = G__39019;
i__39004 = G__39020;
continue;
} else {
var vec__39008 = cljs.core.first.call(null,seq__39001__$1);
var effect_k = cljs.core.nth.call(null,vec__39008,(0),null);
var value = cljs.core.nth.call(null,vec__39008,(1),null);
var temp__4655__auto___39021 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___39021)){
var effect_fn_39022 = temp__4655__auto___39021;
effect_fn_39022.call(null,value);
} else {
}

var G__39023 = cljs.core.next.call(null,seq__39001__$1);
var G__39024 = null;
var G__39025 = (0);
var G__39026 = (0);
seq__39001 = G__39023;
chunk__39002 = G__39024;
count__39003 = G__39025;
i__39004 = G__39026;
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
var seq__39027 = cljs.core.seq.call(null,value);
var chunk__39028 = null;
var count__39029 = (0);
var i__39030 = (0);
while(true){
if((i__39030 < count__39029)){
var map__39031 = cljs.core._nth.call(null,chunk__39028,i__39030);
var map__39031__$1 = ((((!((map__39031 == null)))?((((map__39031.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39031.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39031):map__39031);
var effect = map__39031__$1;
var ms = cljs.core.get.call(null,map__39031__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__39031__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__39027,chunk__39028,count__39029,i__39030,map__39031,map__39031__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__39027,chunk__39028,count__39029,i__39030,map__39031,map__39031__$1,effect,ms,dispatch))
,ms);
}

var G__39035 = seq__39027;
var G__39036 = chunk__39028;
var G__39037 = count__39029;
var G__39038 = (i__39030 + (1));
seq__39027 = G__39035;
chunk__39028 = G__39036;
count__39029 = G__39037;
i__39030 = G__39038;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39027);
if(temp__4657__auto__){
var seq__39027__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39027__$1)){
var c__37613__auto__ = cljs.core.chunk_first.call(null,seq__39027__$1);
var G__39039 = cljs.core.chunk_rest.call(null,seq__39027__$1);
var G__39040 = c__37613__auto__;
var G__39041 = cljs.core.count.call(null,c__37613__auto__);
var G__39042 = (0);
seq__39027 = G__39039;
chunk__39028 = G__39040;
count__39029 = G__39041;
i__39030 = G__39042;
continue;
} else {
var map__39033 = cljs.core.first.call(null,seq__39027__$1);
var map__39033__$1 = ((((!((map__39033 == null)))?((((map__39033.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39033.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39033):map__39033);
var effect = map__39033__$1;
var ms = cljs.core.get.call(null,map__39033__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__39033__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__39027,chunk__39028,count__39029,i__39030,map__39033,map__39033__$1,effect,ms,dispatch,seq__39027__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__39027,chunk__39028,count__39029,i__39030,map__39033,map__39033__$1,effect,ms,dispatch,seq__39027__$1,temp__4657__auto__))
,ms);
}

var G__39043 = cljs.core.next.call(null,seq__39027__$1);
var G__39044 = null;
var G__39045 = (0);
var G__39046 = (0);
seq__39027 = G__39043;
chunk__39028 = G__39044;
count__39029 = G__39045;
i__39030 = G__39046;
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

var seq__39047 = cljs.core.seq.call(null,value);
var chunk__39048 = null;
var count__39049 = (0);
var i__39050 = (0);
while(true){
if((i__39050 < count__39049)){
var event = cljs.core._nth.call(null,chunk__39048,i__39050);
re_frame.router.dispatch.call(null,event);

var G__39051 = seq__39047;
var G__39052 = chunk__39048;
var G__39053 = count__39049;
var G__39054 = (i__39050 + (1));
seq__39047 = G__39051;
chunk__39048 = G__39052;
count__39049 = G__39053;
i__39050 = G__39054;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39047);
if(temp__4657__auto__){
var seq__39047__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39047__$1)){
var c__37613__auto__ = cljs.core.chunk_first.call(null,seq__39047__$1);
var G__39055 = cljs.core.chunk_rest.call(null,seq__39047__$1);
var G__39056 = c__37613__auto__;
var G__39057 = cljs.core.count.call(null,c__37613__auto__);
var G__39058 = (0);
seq__39047 = G__39055;
chunk__39048 = G__39056;
count__39049 = G__39057;
i__39050 = G__39058;
continue;
} else {
var event = cljs.core.first.call(null,seq__39047__$1);
re_frame.router.dispatch.call(null,event);

var G__39059 = cljs.core.next.call(null,seq__39047__$1);
var G__39060 = null;
var G__39061 = (0);
var G__39062 = (0);
seq__39047 = G__39059;
chunk__39048 = G__39060;
count__39049 = G__39061;
i__39050 = G__39062;
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
var seq__39063 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__39064 = null;
var count__39065 = (0);
var i__39066 = (0);
while(true){
if((i__39066 < count__39065)){
var event = cljs.core._nth.call(null,chunk__39064,i__39066);
clear_event.call(null,event);

var G__39067 = seq__39063;
var G__39068 = chunk__39064;
var G__39069 = count__39065;
var G__39070 = (i__39066 + (1));
seq__39063 = G__39067;
chunk__39064 = G__39068;
count__39065 = G__39069;
i__39066 = G__39070;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39063);
if(temp__4657__auto__){
var seq__39063__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39063__$1)){
var c__37613__auto__ = cljs.core.chunk_first.call(null,seq__39063__$1);
var G__39071 = cljs.core.chunk_rest.call(null,seq__39063__$1);
var G__39072 = c__37613__auto__;
var G__39073 = cljs.core.count.call(null,c__37613__auto__);
var G__39074 = (0);
seq__39063 = G__39071;
chunk__39064 = G__39072;
count__39065 = G__39073;
i__39066 = G__39074;
continue;
} else {
var event = cljs.core.first.call(null,seq__39063__$1);
clear_event.call(null,event);

var G__39075 = cljs.core.next.call(null,seq__39063__$1);
var G__39076 = null;
var G__39077 = (0);
var G__39078 = (0);
seq__39063 = G__39075;
chunk__39064 = G__39076;
count__39065 = G__39077;
i__39066 = G__39078;
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