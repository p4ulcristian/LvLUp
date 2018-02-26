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
var make_chain = (function (p1__39641_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__39641_SHARP_));
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

var temp__4657__auto___39642 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___39642)){
var not_i_39643 = temp__4657__auto___39642;
if(cljs.core.fn_QMARK_.call(null,not_i_39643)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_39643);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected interceptors, but got:")].join(''),not_i_39643);
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
var _STAR_handling_STAR_39658 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_39659 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__39576__auto___39672 = re_frame.interop.now.call(null);
var duration__39577__auto___39673 = (end__39576__auto___39672 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__39660_39674 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__39661_39675 = null;
var count__39662_39676 = (0);
var i__39663_39677 = (0);
while(true){
if((i__39663_39677 < count__39662_39676)){
var vec__39664_39678 = cljs.core._nth.call(null,chunk__39661_39675,i__39663_39677);
var k__39578__auto___39679 = cljs.core.nth.call(null,vec__39664_39678,(0),null);
var cb__39579__auto___39680 = cljs.core.nth.call(null,vec__39664_39678,(1),null);
try{cb__39579__auto___39680.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__39577__auto___39673,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e39667){if((e39667 instanceof java.lang.Exception)){
var e__39580__auto___39681 = e39667;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__39578__auto___39679,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__39580__auto___39681);
} else {
throw e39667;

}
}
var G__39682 = seq__39660_39674;
var G__39683 = chunk__39661_39675;
var G__39684 = count__39662_39676;
var G__39685 = (i__39663_39677 + (1));
seq__39660_39674 = G__39682;
chunk__39661_39675 = G__39683;
count__39662_39676 = G__39684;
i__39663_39677 = G__39685;
continue;
} else {
var temp__4657__auto___39686 = cljs.core.seq.call(null,seq__39660_39674);
if(temp__4657__auto___39686){
var seq__39660_39687__$1 = temp__4657__auto___39686;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39660_39687__$1)){
var c__37583__auto___39688 = cljs.core.chunk_first.call(null,seq__39660_39687__$1);
var G__39689 = cljs.core.chunk_rest.call(null,seq__39660_39687__$1);
var G__39690 = c__37583__auto___39688;
var G__39691 = cljs.core.count.call(null,c__37583__auto___39688);
var G__39692 = (0);
seq__39660_39674 = G__39689;
chunk__39661_39675 = G__39690;
count__39662_39676 = G__39691;
i__39663_39677 = G__39692;
continue;
} else {
var vec__39668_39693 = cljs.core.first.call(null,seq__39660_39687__$1);
var k__39578__auto___39694 = cljs.core.nth.call(null,vec__39668_39693,(0),null);
var cb__39579__auto___39695 = cljs.core.nth.call(null,vec__39668_39693,(1),null);
try{cb__39579__auto___39695.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__39577__auto___39673,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e39671){if((e39671 instanceof java.lang.Exception)){
var e__39580__auto___39696 = e39671;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__39578__auto___39694,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__39580__auto___39696);
} else {
throw e39671;

}
}
var G__39697 = cljs.core.next.call(null,seq__39660_39687__$1);
var G__39698 = null;
var G__39699 = (0);
var G__39700 = (0);
seq__39660_39674 = G__39697;
chunk__39661_39675 = G__39698;
count__39662_39676 = G__39699;
i__39663_39677 = G__39700;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_39659;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_39658;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map