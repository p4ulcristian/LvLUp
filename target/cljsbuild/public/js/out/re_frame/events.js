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
var make_chain = (function (p1__38856_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__38856_SHARP_));
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

var temp__4657__auto___38857 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___38857)){
var not_i_38858 = temp__4657__auto___38857;
if(cljs.core.fn_QMARK_.call(null,not_i_38858)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_38858);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected interceptors, but got:")].join(''),not_i_38858);
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
var _STAR_handling_STAR_38873 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_38874 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__38791__auto___38887 = re_frame.interop.now.call(null);
var duration__38792__auto___38888 = (end__38791__auto___38887 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__38875_38889 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__38876_38890 = null;
var count__38877_38891 = (0);
var i__38878_38892 = (0);
while(true){
if((i__38878_38892 < count__38877_38891)){
var vec__38879_38893 = cljs.core._nth.call(null,chunk__38876_38890,i__38878_38892);
var k__38793__auto___38894 = cljs.core.nth.call(null,vec__38879_38893,(0),null);
var cb__38794__auto___38895 = cljs.core.nth.call(null,vec__38879_38893,(1),null);
try{cb__38794__auto___38895.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38792__auto___38888,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e38882){if((e38882 instanceof java.lang.Exception)){
var e__38795__auto___38896 = e38882;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__38793__auto___38894,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__38795__auto___38896);
} else {
throw e38882;

}
}
var G__38897 = seq__38875_38889;
var G__38898 = chunk__38876_38890;
var G__38899 = count__38877_38891;
var G__38900 = (i__38878_38892 + (1));
seq__38875_38889 = G__38897;
chunk__38876_38890 = G__38898;
count__38877_38891 = G__38899;
i__38878_38892 = G__38900;
continue;
} else {
var temp__4657__auto___38901 = cljs.core.seq.call(null,seq__38875_38889);
if(temp__4657__auto___38901){
var seq__38875_38902__$1 = temp__4657__auto___38901;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38875_38902__$1)){
var c__37613__auto___38903 = cljs.core.chunk_first.call(null,seq__38875_38902__$1);
var G__38904 = cljs.core.chunk_rest.call(null,seq__38875_38902__$1);
var G__38905 = c__37613__auto___38903;
var G__38906 = cljs.core.count.call(null,c__37613__auto___38903);
var G__38907 = (0);
seq__38875_38889 = G__38904;
chunk__38876_38890 = G__38905;
count__38877_38891 = G__38906;
i__38878_38892 = G__38907;
continue;
} else {
var vec__38883_38908 = cljs.core.first.call(null,seq__38875_38902__$1);
var k__38793__auto___38909 = cljs.core.nth.call(null,vec__38883_38908,(0),null);
var cb__38794__auto___38910 = cljs.core.nth.call(null,vec__38883_38908,(1),null);
try{cb__38794__auto___38910.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38792__auto___38888,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e38886){if((e38886 instanceof java.lang.Exception)){
var e__38795__auto___38911 = e38886;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__38793__auto___38909,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__38795__auto___38911);
} else {
throw e38886;

}
}
var G__38912 = cljs.core.next.call(null,seq__38875_38902__$1);
var G__38913 = null;
var G__38914 = (0);
var G__38915 = (0);
seq__38875_38889 = G__38912;
chunk__38876_38890 = G__38913;
count__38877_38891 = G__38914;
i__38878_38892 = G__38915;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_38874;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_38873;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map