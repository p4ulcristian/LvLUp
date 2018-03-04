// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__38908_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__38908_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected a collection of interceptors, got:")].join(''),interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering"),cljs.core.str(id),cljs.core.str(", given an empty interceptor chain")].join(''));
} else {
}

var temp__4657__auto___38909 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___38909)){
var not_i_38910 = temp__4657__auto___38909;
if(cljs.core.fn_QMARK_.call(null,not_i_38910)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_38910);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected interceptors, but got:")].join(''),not_i_38910);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * An `event handler` will likely be at the end of the chain (wrapped in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector, look up the associated intercepter chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: while handling \""),cljs.core.str(re_frame.events._STAR_handling_STAR_),cljs.core.str("\", dispatch-sync was called for \""),cljs.core.str(event_v),cljs.core.str("\". You can't call dispatch-sync within an event handler.")].join(''));
} else {
var _STAR_handling_STAR_38925 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_38926 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__38843__auto___38939 = re_frame.interop.now.call(null);
var duration__38844__auto___38940 = (end__38843__auto___38939 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__38927_38941 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__38928_38942 = null;
var count__38929_38943 = (0);
var i__38930_38944 = (0);
while(true){
if((i__38930_38944 < count__38929_38943)){
var vec__38931_38945 = cljs.core._nth.call(null,chunk__38928_38942,i__38930_38944);
var k__38845__auto___38946 = cljs.core.nth.call(null,vec__38931_38945,(0),null);
var cb__38846__auto___38947 = cljs.core.nth.call(null,vec__38931_38945,(1),null);
try{cb__38846__auto___38947.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38844__auto___38940,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e38934){if((e38934 instanceof java.lang.Exception)){
var e__38847__auto___38948 = e38934;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__38845__auto___38946,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__38847__auto___38948);
} else {
throw e38934;

}
}
var G__38949 = seq__38927_38941;
var G__38950 = chunk__38928_38942;
var G__38951 = count__38929_38943;
var G__38952 = (i__38930_38944 + (1));
seq__38927_38941 = G__38949;
chunk__38928_38942 = G__38950;
count__38929_38943 = G__38951;
i__38930_38944 = G__38952;
continue;
} else {
var temp__4657__auto___38953 = cljs.core.seq.call(null,seq__38927_38941);
if(temp__4657__auto___38953){
var seq__38927_38954__$1 = temp__4657__auto___38953;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38927_38954__$1)){
var c__37613__auto___38955 = cljs.core.chunk_first.call(null,seq__38927_38954__$1);
var G__38956 = cljs.core.chunk_rest.call(null,seq__38927_38954__$1);
var G__38957 = c__37613__auto___38955;
var G__38958 = cljs.core.count.call(null,c__37613__auto___38955);
var G__38959 = (0);
seq__38927_38941 = G__38956;
chunk__38928_38942 = G__38957;
count__38929_38943 = G__38958;
i__38930_38944 = G__38959;
continue;
} else {
var vec__38935_38960 = cljs.core.first.call(null,seq__38927_38954__$1);
var k__38845__auto___38961 = cljs.core.nth.call(null,vec__38935_38960,(0),null);
var cb__38846__auto___38962 = cljs.core.nth.call(null,vec__38935_38960,(1),null);
try{cb__38846__auto___38962.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38844__auto___38940,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e38938){if((e38938 instanceof java.lang.Exception)){
var e__38847__auto___38963 = e38938;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__38845__auto___38961,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__38847__auto___38963);
} else {
throw e38938;

}
}
var G__38964 = cljs.core.next.call(null,seq__38927_38954__$1);
var G__38965 = null;
var G__38966 = (0);
var G__38967 = (0);
seq__38927_38941 = G__38964;
chunk__38928_38942 = G__38965;
count__38929_38943 = G__38966;
i__38930_38944 = G__38967;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_38926;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_38925;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map