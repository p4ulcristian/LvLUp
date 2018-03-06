// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.subs');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('re_frame.utils');
goog.require('re_frame.registrar');
goog.require('re_frame.trace');
re_frame.subs.kind = new cljs.core.Keyword(null,"sub","sub",-2093760025);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.subs.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.subs.query__GT_reaction = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Runs on-dispose for all subscriptions we have in the subscription cache.
 *   Used to force recreation of new subscriptions. Should only be necessary
 *   in development.
 * 
 *   The on-dispose functions for the subscriptions will remove themselves from the
 *   cache.
 * 
 *   Useful when reloading Figwheel code after a React exception, as React components
 *   aren't cleaned up properly. This means a subscription's on-dispose function isn't
 *   run when the components are destroyed. If a bad subscription caused your exception,
 *   then you can't fix it without reloading your browser.
 */
re_frame.subs.clear_subscription_cache_BANG_ = (function re_frame$subs$clear_subscription_cache_BANG_(){
var seq__39167_39177 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction));
var chunk__39168_39178 = null;
var count__39169_39179 = (0);
var i__39170_39180 = (0);
while(true){
if((i__39170_39180 < count__39169_39179)){
var vec__39171_39181 = cljs.core._nth.call(null,chunk__39168_39178,i__39170_39180);
var k_39182 = cljs.core.nth.call(null,vec__39171_39181,(0),null);
var rxn_39183 = cljs.core.nth.call(null,vec__39171_39181,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_39183);

var G__39184 = seq__39167_39177;
var G__39185 = chunk__39168_39178;
var G__39186 = count__39169_39179;
var G__39187 = (i__39170_39180 + (1));
seq__39167_39177 = G__39184;
chunk__39168_39178 = G__39185;
count__39169_39179 = G__39186;
i__39170_39180 = G__39187;
continue;
} else {
var temp__4657__auto___39188 = cljs.core.seq.call(null,seq__39167_39177);
if(temp__4657__auto___39188){
var seq__39167_39189__$1 = temp__4657__auto___39188;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39167_39189__$1)){
var c__37613__auto___39190 = cljs.core.chunk_first.call(null,seq__39167_39189__$1);
var G__39191 = cljs.core.chunk_rest.call(null,seq__39167_39189__$1);
var G__39192 = c__37613__auto___39190;
var G__39193 = cljs.core.count.call(null,c__37613__auto___39190);
var G__39194 = (0);
seq__39167_39177 = G__39191;
chunk__39168_39178 = G__39192;
count__39169_39179 = G__39193;
i__39170_39180 = G__39194;
continue;
} else {
var vec__39174_39195 = cljs.core.first.call(null,seq__39167_39189__$1);
var k_39196 = cljs.core.nth.call(null,vec__39174_39195,(0),null);
var rxn_39197 = cljs.core.nth.call(null,vec__39174_39195,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_39197);

var G__39198 = cljs.core.next.call(null,seq__39167_39189__$1);
var G__39199 = null;
var G__39200 = (0);
var G__39201 = (0);
seq__39167_39177 = G__39198;
chunk__39168_39178 = G__39199;
count__39169_39179 = G__39200;
i__39170_39180 = G__39201;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Subscription cache should be empty after clearing it.");
} else {
return null;
}
});
/**
 * Unregisters all existing subscription handlers
 */
re_frame.subs.clear_all_handlers_BANG_ = (function re_frame$subs$clear_all_handlers_BANG_(){
re_frame.registrar.clear_handlers.call(null,re_frame.subs.kind);

return re_frame.subs.clear_subscription_cache_BANG_.call(null);
});
/**
 * cache the reaction r
 */
re_frame.subs.cache_and_return = (function re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
re_frame.interop.add_on_dispose_BANG_.call(null,r,((function (cache_key){
return (function (){
cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.dissoc,cache_key);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_39215 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null));

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__38791__auto___39228 = re_frame.interop.now.call(null);
var duration__38792__auto___39229 = (end__38791__auto___39228 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__39216_39230 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__39217_39231 = null;
var count__39218_39232 = (0);
var i__39219_39233 = (0);
while(true){
if((i__39219_39233 < count__39218_39232)){
var vec__39220_39234 = cljs.core._nth.call(null,chunk__39217_39231,i__39219_39233);
var k__38793__auto___39235 = cljs.core.nth.call(null,vec__39220_39234,(0),null);
var cb__38794__auto___39236 = cljs.core.nth.call(null,vec__39220_39234,(1),null);
try{cb__38794__auto___39236.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38792__auto___39229,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e39223){if((e39223 instanceof java.lang.Exception)){
var e__38795__auto___39237 = e39223;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__38793__auto___39235,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__38795__auto___39237);
} else {
throw e39223;

}
}
var G__39238 = seq__39216_39230;
var G__39239 = chunk__39217_39231;
var G__39240 = count__39218_39232;
var G__39241 = (i__39219_39233 + (1));
seq__39216_39230 = G__39238;
chunk__39217_39231 = G__39239;
count__39218_39232 = G__39240;
i__39219_39233 = G__39241;
continue;
} else {
var temp__4657__auto___39242 = cljs.core.seq.call(null,seq__39216_39230);
if(temp__4657__auto___39242){
var seq__39216_39243__$1 = temp__4657__auto___39242;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39216_39243__$1)){
var c__37613__auto___39244 = cljs.core.chunk_first.call(null,seq__39216_39243__$1);
var G__39245 = cljs.core.chunk_rest.call(null,seq__39216_39243__$1);
var G__39246 = c__37613__auto___39244;
var G__39247 = cljs.core.count.call(null,c__37613__auto___39244);
var G__39248 = (0);
seq__39216_39230 = G__39245;
chunk__39217_39231 = G__39246;
count__39218_39232 = G__39247;
i__39219_39233 = G__39248;
continue;
} else {
var vec__39224_39249 = cljs.core.first.call(null,seq__39216_39243__$1);
var k__38793__auto___39250 = cljs.core.nth.call(null,vec__39224_39249,(0),null);
var cb__38794__auto___39251 = cljs.core.nth.call(null,vec__39224_39249,(1),null);
try{cb__38794__auto___39251.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38792__auto___39229,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e39227){if((e39227 instanceof java.lang.Exception)){
var e__38795__auto___39252 = e39227;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__38793__auto___39250,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__38795__auto___39252);
} else {
throw e39227;

}
}
var G__39253 = cljs.core.next.call(null,seq__39216_39243__$1);
var G__39254 = null;
var G__39255 = (0);
var G__39256 = (0);
seq__39216_39230 = G__39253;
chunk__39217_39231 = G__39254;
count__39218_39232 = G__39255;
i__39219_39233 = G__39256;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_39215;
}} else {
return null;
}
});})(cache_key))
);

cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__38796__auto___39257 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__38796__auto___39257;

} else {
}

return r;
});
re_frame.subs.cache_lookup = (function re_frame$subs$cache_lookup(var_args){
var args39258 = [];
var len__37877__auto___39261 = arguments.length;
var i__37878__auto___39262 = (0);
while(true){
if((i__37878__auto___39262 < len__37877__auto___39261)){
args39258.push((arguments[i__37878__auto___39262]));

var G__39263 = (i__37878__auto___39262 + (1));
i__37878__auto___39262 = G__39263;
continue;
} else {
}
break;
}

var G__39260 = args39258.length;
switch (G__39260) {
case 1:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39258.length)].join('')));

}
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return re_frame.subs.cache_lookup.call(null,query_v,cljs.core.PersistentVector.EMPTY);
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
});

re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2;

/**
 * Returns a Reagent/reaction which contains a computation
 */
re_frame.subs.subscribe = (function re_frame$subs$subscribe(var_args){
var args39265 = [];
var len__37877__auto___39294 = arguments.length;
var i__37878__auto___39295 = (0);
while(true){
if((i__37878__auto___39295 < len__37877__auto___39294)){
args39265.push((arguments[i__37878__auto___39295]));

var G__39296 = (i__37878__auto___39295 + (1));
i__37878__auto___39295 = G__39296;
continue;
} else {
}
break;
}

var G__39267 = args39265.length;
switch (G__39267) {
case 1:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39265.length)].join('')));

}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_39268 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,query_v);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__38796__auto___39298 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__38796__auto___39298;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query_v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__38796__auto___39299 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__38796__auto___39299;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__38796__auto___39300 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__38796__auto___39300;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: no subscription handler registered for: \""),cljs.core.str(query_id),cljs.core.str("\". Returning a nil subscription.")].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query_v,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query_v));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__38791__auto___39301 = re_frame.interop.now.call(null);
var duration__38792__auto___39302 = (end__38791__auto___39301 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__39269_39303 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__39270_39304 = null;
var count__39271_39305 = (0);
var i__39272_39306 = (0);
while(true){
if((i__39272_39306 < count__39271_39305)){
var vec__39273_39307 = cljs.core._nth.call(null,chunk__39270_39304,i__39272_39306);
var k__38793__auto___39308 = cljs.core.nth.call(null,vec__39273_39307,(0),null);
var cb__38794__auto___39309 = cljs.core.nth.call(null,vec__39273_39307,(1),null);
try{cb__38794__auto___39309.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38792__auto___39302,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e39276){if((e39276 instanceof java.lang.Exception)){
var e__38795__auto___39310 = e39276;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__38793__auto___39308,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__38795__auto___39310);
} else {
throw e39276;

}
}
var G__39311 = seq__39269_39303;
var G__39312 = chunk__39270_39304;
var G__39313 = count__39271_39305;
var G__39314 = (i__39272_39306 + (1));
seq__39269_39303 = G__39311;
chunk__39270_39304 = G__39312;
count__39271_39305 = G__39313;
i__39272_39306 = G__39314;
continue;
} else {
var temp__4657__auto___39315 = cljs.core.seq.call(null,seq__39269_39303);
if(temp__4657__auto___39315){
var seq__39269_39316__$1 = temp__4657__auto___39315;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39269_39316__$1)){
var c__37613__auto___39317 = cljs.core.chunk_first.call(null,seq__39269_39316__$1);
var G__39318 = cljs.core.chunk_rest.call(null,seq__39269_39316__$1);
var G__39319 = c__37613__auto___39317;
var G__39320 = cljs.core.count.call(null,c__37613__auto___39317);
var G__39321 = (0);
seq__39269_39303 = G__39318;
chunk__39270_39304 = G__39319;
count__39271_39305 = G__39320;
i__39272_39306 = G__39321;
continue;
} else {
var vec__39277_39322 = cljs.core.first.call(null,seq__39269_39316__$1);
var k__38793__auto___39323 = cljs.core.nth.call(null,vec__39277_39322,(0),null);
var cb__38794__auto___39324 = cljs.core.nth.call(null,vec__39277_39322,(1),null);
try{cb__38794__auto___39324.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38792__auto___39302,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e39280){if((e39280 instanceof java.lang.Exception)){
var e__38795__auto___39325 = e39280;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__38793__auto___39323,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__38795__auto___39325);
} else {
throw e39280;

}
}
var G__39326 = cljs.core.next.call(null,seq__39269_39316__$1);
var G__39327 = null;
var G__39328 = (0);
var G__39329 = (0);
seq__39269_39303 = G__39326;
chunk__39270_39304 = G__39327;
count__39271_39305 = G__39328;
i__39272_39306 = G__39329;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_39268;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,query_v);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__38796__auto___39330 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__38796__auto___39330;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query_v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__38796__auto___39331 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__38796__auto___39331;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__38796__auto___39332 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__38796__auto___39332;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: no subscription handler registered for: \""),cljs.core.str(query_id),cljs.core.str("\". Returning a nil subscription.")].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query_v,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query_v));
}
}
}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (v,dynv){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_39281 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),v,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dynv], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,v,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__38796__auto___39333 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__38796__auto___39333;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__38796__auto___39334 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__38796__auto___39334;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___39335 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___39335)){
var not_reactive_39336 = temp__4657__auto___39335;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_39336);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__38796__auto___39337 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__38796__auto___39337;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: no subscription handler registered for: \""),cljs.core.str(query_id),cljs.core.str("\". Returning a nil subscription.")].join(''));
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_39281){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_39281))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_39281){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,v,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_39281))
);
return re_frame.subs.cache_and_return.call(null,v,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_39281){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_39281))
));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__38791__auto___39338 = re_frame.interop.now.call(null);
var duration__38792__auto___39339 = (end__38791__auto___39338 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__39282_39340 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__39283_39341 = null;
var count__39284_39342 = (0);
var i__39285_39343 = (0);
while(true){
if((i__39285_39343 < count__39284_39342)){
var vec__39286_39344 = cljs.core._nth.call(null,chunk__39283_39341,i__39285_39343);
var k__38793__auto___39345 = cljs.core.nth.call(null,vec__39286_39344,(0),null);
var cb__38794__auto___39346 = cljs.core.nth.call(null,vec__39286_39344,(1),null);
try{cb__38794__auto___39346.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38792__auto___39339,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e39289){if((e39289 instanceof java.lang.Exception)){
var e__38795__auto___39347 = e39289;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__38793__auto___39345,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__38795__auto___39347);
} else {
throw e39289;

}
}
var G__39348 = seq__39282_39340;
var G__39349 = chunk__39283_39341;
var G__39350 = count__39284_39342;
var G__39351 = (i__39285_39343 + (1));
seq__39282_39340 = G__39348;
chunk__39283_39341 = G__39349;
count__39284_39342 = G__39350;
i__39285_39343 = G__39351;
continue;
} else {
var temp__4657__auto___39352 = cljs.core.seq.call(null,seq__39282_39340);
if(temp__4657__auto___39352){
var seq__39282_39353__$1 = temp__4657__auto___39352;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39282_39353__$1)){
var c__37613__auto___39354 = cljs.core.chunk_first.call(null,seq__39282_39353__$1);
var G__39355 = cljs.core.chunk_rest.call(null,seq__39282_39353__$1);
var G__39356 = c__37613__auto___39354;
var G__39357 = cljs.core.count.call(null,c__37613__auto___39354);
var G__39358 = (0);
seq__39282_39340 = G__39355;
chunk__39283_39341 = G__39356;
count__39284_39342 = G__39357;
i__39285_39343 = G__39358;
continue;
} else {
var vec__39290_39359 = cljs.core.first.call(null,seq__39282_39353__$1);
var k__38793__auto___39360 = cljs.core.nth.call(null,vec__39290_39359,(0),null);
var cb__38794__auto___39361 = cljs.core.nth.call(null,vec__39290_39359,(1),null);
try{cb__38794__auto___39361.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38792__auto___39339,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e39293){if((e39293 instanceof java.lang.Exception)){
var e__38795__auto___39362 = e39293;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__38793__auto___39360,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__38795__auto___39362);
} else {
throw e39293;

}
}
var G__39363 = cljs.core.next.call(null,seq__39282_39353__$1);
var G__39364 = null;
var G__39365 = (0);
var G__39366 = (0);
seq__39282_39340 = G__39363;
chunk__39283_39341 = G__39364;
count__39284_39342 = G__39365;
i__39285_39343 = G__39366;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_39281;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,v,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__38796__auto___39367 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__38796__auto___39367;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__38796__auto___39368 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__38796__auto___39368;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___39369 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___39369)){
var not_reactive_39370 = temp__4657__auto___39369;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_39370);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__38796__auto___39371 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__38796__auto___39371;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: no subscription handler registered for: \""),cljs.core.str(query_id),cljs.core.str("\". Returning a nil subscription.")].join(''));
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__4655__auto__){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,v,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__))
);
return re_frame.subs.cache_and_return.call(null,v,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__))
));
}
}
}
});

re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
re_frame.subs.map_vals = (function re_frame$subs$map_vals(f,m){
return cljs.core.into.call(null,cljs.core.empty.call(null,m),cljs.core.map.call(null,(function (p__39376){
var vec__39377 = p__39376;
var k = cljs.core.nth.call(null,vec__39377,(0),null);
var v = cljs.core.nth.call(null,vec__39377,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
})),m);
});
re_frame.subs.deref_input_signals = (function re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_.call(null,signals))?cljs.core.map.call(null,cljs.core.deref,signals):((cljs.core.map_QMARK_.call(null,signals))?re_frame.subs.map_vals.call(null,cljs.core.deref,signals):(cljs.core.truth_(re_frame.interop.deref_QMARK_.call(null,signals))?cljs.core.deref.call(null,signals):re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals)
)));
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__38796__auto___39380 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__38796__auto___39380;

} else {
}

return signals__$1;
});
/**
 * Associate the given `query id` with a handler function and an optional signal function.
 * 
 *   There's 3 ways this function can be called
 * 
 *   1. (reg-sub
 *     :test-sub
 *     (fn [db [_]] db))
 *   The value in app-db is passed to the computation function as the 1st argument.
 * 
 *   2. (reg-sub
 *     :a-b-sub
 *     (fn [q-vec d-vec]
 *       [(subs/subscribe [:a-sub])
 *        (subs/subscribe [:b-sub])])
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   Two functions provided. The 2nd is computation function, as before. The 1st
 *   is returns what `input signals` should be provided to the computation. The
 *   `input signals` function is called with two arguments: the query vector
 *   and the dynamic vector. The return value can be singleton reaction or
 *   a sequence of reactions.
 * 
 *   3. (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))```
 *   This 3rd variation is just syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. `:<-` is supplied followed by the subscription
 *   vector.
 *   
 */
re_frame.subs.reg_sub = (function re_frame$subs$reg_sub(var_args){
var args__37884__auto__ = [];
var len__37877__auto___39439 = arguments.length;
var i__37878__auto___39440 = (0);
while(true){
if((i__37878__auto___39440 < len__37877__auto___39439)){
args__37884__auto__.push((arguments[i__37878__auto___39440]));

var G__39441 = (i__37878__auto___39440 + (1));
i__37878__auto___39440 = G__39441;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last.call(null,args);
var input_args = cljs.core.butlast.call(null,args);
var err_header = [cljs.core.str("re-frame: reg-sub for "),cljs.core.str(query_id),cljs.core.str(", ")].join('');
var inputs_fn = (function (){var G__39383 = cljs.core.count.call(null,input_args);
switch (G__39383) {
case (0):
return ((function (G__39383,computation_fn,input_args,err_header){
return (function() {
var G__39443 = null;
var G__39443__1 = (function (_){
return re_frame.db.app_db;
});
var G__39443__2 = (function (_,___$1){
return re_frame.db.app_db;
});
G__39443 = function(_,___$1){
switch(arguments.length){
case 1:
return G__39443__1.call(this,_);
case 2:
return G__39443__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__39443.cljs$core$IFn$_invoke$arity$1 = G__39443__1;
G__39443.cljs$core$IFn$_invoke$arity$2 = G__39443__2;
return G__39443;
})()
;})(G__39383,computation_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first.call(null,input_args);
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"2nd argument expected to be an inputs function, got:",f);
}

return f;

break;
case (2):
var vec__39384 = input_args;
var marker = cljs.core.nth.call(null,vec__39384,(0),null);
var vec = cljs.core.nth.call(null,vec__39384,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"<-","<-",760412998),marker)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected :<-, got:",marker);
}

return ((function (vec__39384,marker,vec,G__39383,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return re_frame.subs.subscribe.call(null,vec);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return re_frame.subs.subscribe.call(null,vec);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(vec__39384,marker,vec,G__39383,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.call(null,(2),input_args);
var markers = cljs.core.map.call(null,cljs.core.first,pairs);
var vecs = cljs.core.map.call(null,cljs.core.last,pairs);
if((cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"<-","<-",760412998),null], null), null),markers)) && (cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,vecs))){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected pairs of :<- and vectors, got:",pairs);
}

return ((function (pairs,markers,vecs,G__39383,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.call(null,re_frame.subs.subscribe,vecs);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.call(null,re_frame.subs.subscribe,vecs);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(pairs,markers,vecs,G__39383,computation_fn,input_args,err_header))

}
})();
return re_frame.registrar.register_handler.call(null,re_frame.subs.kind,query_id,((function (computation_fn,input_args,err_header,inputs_fn){
return (function() {
var re_frame$subs$subs_handler_fn = null;
var re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = inputs_fn.call(null,query_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_39413 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__38791__auto___39444 = re_frame.interop.now.call(null);
var duration__38792__auto___39445 = (end__38791__auto___39444 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__39414_39446 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__39415_39447 = null;
var count__39416_39448 = (0);
var i__39417_39449 = (0);
while(true){
if((i__39417_39449 < count__39416_39448)){
var vec__39418_39450 = cljs.core._nth.call(null,chunk__39415_39447,i__39417_39449);
var k__38793__auto___39451 = cljs.core.nth.call(null,vec__39418_39450,(0),null);
var cb__38794__auto___39452 = cljs.core.nth.call(null,vec__39418_39450,(1),null);
try{cb__38794__auto___39452.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38792__auto___39445,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e39421){if((e39421 instanceof java.lang.Exception)){
var e__38795__auto___39453 = e39421;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__38793__auto___39451,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__38795__auto___39453);
} else {
throw e39421;

}
}
var G__39454 = seq__39414_39446;
var G__39455 = chunk__39415_39447;
var G__39456 = count__39416_39448;
var G__39457 = (i__39417_39449 + (1));
seq__39414_39446 = G__39454;
chunk__39415_39447 = G__39455;
count__39416_39448 = G__39456;
i__39417_39449 = G__39457;
continue;
} else {
var temp__4657__auto___39458 = cljs.core.seq.call(null,seq__39414_39446);
if(temp__4657__auto___39458){
var seq__39414_39459__$1 = temp__4657__auto___39458;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39414_39459__$1)){
var c__37613__auto___39460 = cljs.core.chunk_first.call(null,seq__39414_39459__$1);
var G__39461 = cljs.core.chunk_rest.call(null,seq__39414_39459__$1);
var G__39462 = c__37613__auto___39460;
var G__39463 = cljs.core.count.call(null,c__37613__auto___39460);
var G__39464 = (0);
seq__39414_39446 = G__39461;
chunk__39415_39447 = G__39462;
count__39416_39448 = G__39463;
i__39417_39449 = G__39464;
continue;
} else {
var vec__39422_39465 = cljs.core.first.call(null,seq__39414_39459__$1);
var k__38793__auto___39466 = cljs.core.nth.call(null,vec__39422_39465,(0),null);
var cb__38794__auto___39467 = cljs.core.nth.call(null,vec__39422_39465,(1),null);
try{cb__38794__auto___39467.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38792__auto___39445,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e39425){if((e39425 instanceof java.lang.Exception)){
var e__38795__auto___39468 = e39425;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__38793__auto___39466,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__38795__auto___39468);
} else {
throw e39425;

}
}
var G__39469 = cljs.core.next.call(null,seq__39414_39459__$1);
var G__39470 = null;
var G__39471 = (0);
var G__39472 = (0);
seq__39414_39446 = G__39469;
chunk__39415_39447 = G__39470;
count__39416_39448 = G__39471;
i__39417_39449 = G__39472;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_39413;
}} else {
return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
var re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = inputs_fn.call(null,query_vec,dyn_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_39426 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dyn_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__38791__auto___39473 = re_frame.interop.now.call(null);
var duration__38792__auto___39474 = (end__38791__auto___39473 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__39427_39475 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__39428_39476 = null;
var count__39429_39477 = (0);
var i__39430_39478 = (0);
while(true){
if((i__39430_39478 < count__39429_39477)){
var vec__39431_39479 = cljs.core._nth.call(null,chunk__39428_39476,i__39430_39478);
var k__38793__auto___39480 = cljs.core.nth.call(null,vec__39431_39479,(0),null);
var cb__38794__auto___39481 = cljs.core.nth.call(null,vec__39431_39479,(1),null);
try{cb__38794__auto___39481.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38792__auto___39474,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e39434){if((e39434 instanceof java.lang.Exception)){
var e__38795__auto___39482 = e39434;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__38793__auto___39480,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__38795__auto___39482);
} else {
throw e39434;

}
}
var G__39483 = seq__39427_39475;
var G__39484 = chunk__39428_39476;
var G__39485 = count__39429_39477;
var G__39486 = (i__39430_39478 + (1));
seq__39427_39475 = G__39483;
chunk__39428_39476 = G__39484;
count__39429_39477 = G__39485;
i__39430_39478 = G__39486;
continue;
} else {
var temp__4657__auto___39487 = cljs.core.seq.call(null,seq__39427_39475);
if(temp__4657__auto___39487){
var seq__39427_39488__$1 = temp__4657__auto___39487;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39427_39488__$1)){
var c__37613__auto___39489 = cljs.core.chunk_first.call(null,seq__39427_39488__$1);
var G__39490 = cljs.core.chunk_rest.call(null,seq__39427_39488__$1);
var G__39491 = c__37613__auto___39489;
var G__39492 = cljs.core.count.call(null,c__37613__auto___39489);
var G__39493 = (0);
seq__39427_39475 = G__39490;
chunk__39428_39476 = G__39491;
count__39429_39477 = G__39492;
i__39430_39478 = G__39493;
continue;
} else {
var vec__39435_39494 = cljs.core.first.call(null,seq__39427_39488__$1);
var k__38793__auto___39495 = cljs.core.nth.call(null,vec__39435_39494,(0),null);
var cb__38794__auto___39496 = cljs.core.nth.call(null,vec__39435_39494,(1),null);
try{cb__38794__auto___39496.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38792__auto___39474,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e39438){if((e39438 instanceof java.lang.Exception)){
var e__38795__auto___39497 = e39438;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__38793__auto___39495,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__38795__auto___39497);
} else {
throw e39438;

}
}
var G__39498 = cljs.core.next.call(null,seq__39427_39488__$1);
var G__39499 = null;
var G__39500 = (0);
var G__39501 = (0);
seq__39427_39475 = G__39498;
chunk__39428_39476 = G__39499;
count__39429_39477 = G__39500;
i__39430_39478 = G__39501;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_39426;
}} else {
return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$subs_handler_fn__2;
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = re_frame$subs$subs_handler_fn__3;
return re_frame$subs$subs_handler_fn;
})()
;})(computation_fn,input_args,err_header,inputs_fn))
);
});

re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1);

re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq39381){
var G__39382 = cljs.core.first.call(null,seq39381);
var seq39381__$1 = cljs.core.next.call(null,seq39381);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(G__39382,seq39381__$1);
});


//# sourceMappingURL=subs.js.map