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
var seq__38974 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__38975 = null;
var count__38976 = (0);
var i__38977 = (0);
while(true){
if((i__38977 < count__38976)){
var vec__38978 = cljs.core._nth.call(null,chunk__38975,i__38977);
var effect_k = cljs.core.nth.call(null,vec__38978,(0),null);
var value = cljs.core.nth.call(null,vec__38978,(1),null);
var temp__4655__auto___38984 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___38984)){
var effect_fn_38985 = temp__4655__auto___38984;
effect_fn_38985.call(null,value);
} else {
}

var G__38986 = seq__38974;
var G__38987 = chunk__38975;
var G__38988 = count__38976;
var G__38989 = (i__38977 + (1));
seq__38974 = G__38986;
chunk__38975 = G__38987;
count__38976 = G__38988;
i__38977 = G__38989;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38974);
if(temp__4657__auto__){
var seq__38974__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38974__$1)){
var c__37587__auto__ = cljs.core.chunk_first.call(null,seq__38974__$1);
var G__38990 = cljs.core.chunk_rest.call(null,seq__38974__$1);
var G__38991 = c__37587__auto__;
var G__38992 = cljs.core.count.call(null,c__37587__auto__);
var G__38993 = (0);
seq__38974 = G__38990;
chunk__38975 = G__38991;
count__38976 = G__38992;
i__38977 = G__38993;
continue;
} else {
var vec__38981 = cljs.core.first.call(null,seq__38974__$1);
var effect_k = cljs.core.nth.call(null,vec__38981,(0),null);
var value = cljs.core.nth.call(null,vec__38981,(1),null);
var temp__4655__auto___38994 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___38994)){
var effect_fn_38995 = temp__4655__auto___38994;
effect_fn_38995.call(null,value);
} else {
}

var G__38996 = cljs.core.next.call(null,seq__38974__$1);
var G__38997 = null;
var G__38998 = (0);
var G__38999 = (0);
seq__38974 = G__38996;
chunk__38975 = G__38997;
count__38976 = G__38998;
i__38977 = G__38999;
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
var seq__39000 = cljs.core.seq.call(null,value);
var chunk__39001 = null;
var count__39002 = (0);
var i__39003 = (0);
while(true){
if((i__39003 < count__39002)){
var map__39004 = cljs.core._nth.call(null,chunk__39001,i__39003);
var map__39004__$1 = ((((!((map__39004 == null)))?((((map__39004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39004):map__39004);
var effect = map__39004__$1;
var ms = cljs.core.get.call(null,map__39004__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__39004__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__39000,chunk__39001,count__39002,i__39003,map__39004,map__39004__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__39000,chunk__39001,count__39002,i__39003,map__39004,map__39004__$1,effect,ms,dispatch))
,ms);
}

var G__39008 = seq__39000;
var G__39009 = chunk__39001;
var G__39010 = count__39002;
var G__39011 = (i__39003 + (1));
seq__39000 = G__39008;
chunk__39001 = G__39009;
count__39002 = G__39010;
i__39003 = G__39011;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39000);
if(temp__4657__auto__){
var seq__39000__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39000__$1)){
var c__37587__auto__ = cljs.core.chunk_first.call(null,seq__39000__$1);
var G__39012 = cljs.core.chunk_rest.call(null,seq__39000__$1);
var G__39013 = c__37587__auto__;
var G__39014 = cljs.core.count.call(null,c__37587__auto__);
var G__39015 = (0);
seq__39000 = G__39012;
chunk__39001 = G__39013;
count__39002 = G__39014;
i__39003 = G__39015;
continue;
} else {
var map__39006 = cljs.core.first.call(null,seq__39000__$1);
var map__39006__$1 = ((((!((map__39006 == null)))?((((map__39006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39006):map__39006);
var effect = map__39006__$1;
var ms = cljs.core.get.call(null,map__39006__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__39006__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__39000,chunk__39001,count__39002,i__39003,map__39006,map__39006__$1,effect,ms,dispatch,seq__39000__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__39000,chunk__39001,count__39002,i__39003,map__39006,map__39006__$1,effect,ms,dispatch,seq__39000__$1,temp__4657__auto__))
,ms);
}

var G__39016 = cljs.core.next.call(null,seq__39000__$1);
var G__39017 = null;
var G__39018 = (0);
var G__39019 = (0);
seq__39000 = G__39016;
chunk__39001 = G__39017;
count__39002 = G__39018;
i__39003 = G__39019;
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

var seq__39020 = cljs.core.seq.call(null,value);
var chunk__39021 = null;
var count__39022 = (0);
var i__39023 = (0);
while(true){
if((i__39023 < count__39022)){
var event = cljs.core._nth.call(null,chunk__39021,i__39023);
re_frame.router.dispatch.call(null,event);

var G__39024 = seq__39020;
var G__39025 = chunk__39021;
var G__39026 = count__39022;
var G__39027 = (i__39023 + (1));
seq__39020 = G__39024;
chunk__39021 = G__39025;
count__39022 = G__39026;
i__39023 = G__39027;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39020);
if(temp__4657__auto__){
var seq__39020__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39020__$1)){
var c__37587__auto__ = cljs.core.chunk_first.call(null,seq__39020__$1);
var G__39028 = cljs.core.chunk_rest.call(null,seq__39020__$1);
var G__39029 = c__37587__auto__;
var G__39030 = cljs.core.count.call(null,c__37587__auto__);
var G__39031 = (0);
seq__39020 = G__39028;
chunk__39021 = G__39029;
count__39022 = G__39030;
i__39023 = G__39031;
continue;
} else {
var event = cljs.core.first.call(null,seq__39020__$1);
re_frame.router.dispatch.call(null,event);

var G__39032 = cljs.core.next.call(null,seq__39020__$1);
var G__39033 = null;
var G__39034 = (0);
var G__39035 = (0);
seq__39020 = G__39032;
chunk__39021 = G__39033;
count__39022 = G__39034;
i__39023 = G__39035;
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
var seq__39036 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__39037 = null;
var count__39038 = (0);
var i__39039 = (0);
while(true){
if((i__39039 < count__39038)){
var event = cljs.core._nth.call(null,chunk__39037,i__39039);
clear_event.call(null,event);

var G__39040 = seq__39036;
var G__39041 = chunk__39037;
var G__39042 = count__39038;
var G__39043 = (i__39039 + (1));
seq__39036 = G__39040;
chunk__39037 = G__39041;
count__39038 = G__39042;
i__39039 = G__39043;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39036);
if(temp__4657__auto__){
var seq__39036__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39036__$1)){
var c__37587__auto__ = cljs.core.chunk_first.call(null,seq__39036__$1);
var G__39044 = cljs.core.chunk_rest.call(null,seq__39036__$1);
var G__39045 = c__37587__auto__;
var G__39046 = cljs.core.count.call(null,c__37587__auto__);
var G__39047 = (0);
seq__39036 = G__39044;
chunk__39037 = G__39045;
count__39038 = G__39046;
i__39039 = G__39047;
continue;
} else {
var event = cljs.core.first.call(null,seq__39036__$1);
clear_event.call(null,event);

var G__39048 = cljs.core.next.call(null,seq__39036__$1);
var G__39049 = null;
var G__39050 = (0);
var G__39051 = (0);
seq__39036 = G__39048;
chunk__39037 = G__39049;
count__39038 = G__39050;
i__39039 = G__39051;
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