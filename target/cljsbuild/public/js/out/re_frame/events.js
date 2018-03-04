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
var make_chain = (function (p1__38857_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__38857_SHARP_));
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

var temp__4657__auto___38858 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___38858)){
var not_i_38859 = temp__4657__auto___38858;
if(cljs.core.fn_QMARK_.call(null,not_i_38859)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_38859);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected interceptors, but got:")].join(''),not_i_38859);
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
var _STAR_handling_STAR_38874 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_38875 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__38792__auto___38888 = re_frame.interop.now.call(null);
var duration__38793__auto___38889 = (end__38792__auto___38888 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__38876_38890 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__38877_38891 = null;
var count__38878_38892 = (0);
var i__38879_38893 = (0);
while(true){
if((i__38879_38893 < count__38878_38892)){
var vec__38880_38894 = cljs.core._nth.call(null,chunk__38877_38891,i__38879_38893);
var k__38794__auto___38895 = cljs.core.nth.call(null,vec__38880_38894,(0),null);
var cb__38795__auto___38896 = cljs.core.nth.call(null,vec__38880_38894,(1),null);
try{cb__38795__auto___38896.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38793__auto___38889,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e38883){if((e38883 instanceof java.lang.Exception)){
var e__38796__auto___38897 = e38883;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__38794__auto___38895,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__38796__auto___38897);
} else {
throw e38883;

}
}
var G__38898 = seq__38876_38890;
var G__38899 = chunk__38877_38891;
var G__38900 = count__38878_38892;
var G__38901 = (i__38879_38893 + (1));
seq__38876_38890 = G__38898;
chunk__38877_38891 = G__38899;
count__38878_38892 = G__38900;
i__38879_38893 = G__38901;
continue;
} else {
var temp__4657__auto___38902 = cljs.core.seq.call(null,seq__38876_38890);
if(temp__4657__auto___38902){
var seq__38876_38903__$1 = temp__4657__auto___38902;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38876_38903__$1)){
var c__37613__auto___38904 = cljs.core.chunk_first.call(null,seq__38876_38903__$1);
var G__38905 = cljs.core.chunk_rest.call(null,seq__38876_38903__$1);
var G__38906 = c__37613__auto___38904;
var G__38907 = cljs.core.count.call(null,c__37613__auto___38904);
var G__38908 = (0);
seq__38876_38890 = G__38905;
chunk__38877_38891 = G__38906;
count__38878_38892 = G__38907;
i__38879_38893 = G__38908;
continue;
} else {
var vec__38884_38909 = cljs.core.first.call(null,seq__38876_38903__$1);
var k__38794__auto___38910 = cljs.core.nth.call(null,vec__38884_38909,(0),null);
var cb__38795__auto___38911 = cljs.core.nth.call(null,vec__38884_38909,(1),null);
try{cb__38795__auto___38911.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38793__auto___38889,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e38887){if((e38887 instanceof java.lang.Exception)){
var e__38796__auto___38912 = e38887;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__38794__auto___38910,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__38796__auto___38912);
} else {
throw e38887;

}
}
var G__38913 = cljs.core.next.call(null,seq__38876_38903__$1);
var G__38914 = null;
var G__38915 = (0);
var G__38916 = (0);
seq__38876_38890 = G__38913;
chunk__38877_38891 = G__38914;
count__38878_38892 = G__38915;
i__38879_38893 = G__38916;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_38875;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_38874;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map