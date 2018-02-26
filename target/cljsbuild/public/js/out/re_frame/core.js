// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.core');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.subs');
goog.require('clojure.set');
goog.require('re_frame.cofx');
goog.require('re_frame.interceptor');
goog.require('re_frame.fx');
goog.require('re_frame.events');
goog.require('re_frame.loggers');
goog.require('re_frame.registrar');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.std_interceptors');
re_frame.core.dispatch = re_frame.router.dispatch;
re_frame.core.dispatch_sync = re_frame.router.dispatch_sync;
re_frame.core.__GT_interceptor = re_frame.interceptor.__GT_interceptor;
re_frame.core.enqueue = re_frame.interceptor.enqueue;
re_frame.core.get_coeffect = re_frame.interceptor.get_coeffect;
re_frame.core.get_effect = re_frame.interceptor.get_effect;
re_frame.core.assoc_effect = re_frame.interceptor.assoc_effect;
re_frame.core.assoc_coeffect = re_frame.interceptor.assoc_coeffect;
re_frame.core.debug = re_frame.std_interceptors.debug;
re_frame.core.path = re_frame.std_interceptors.path;
re_frame.core.enrich = re_frame.std_interceptors.enrich;
re_frame.core.trim_v = re_frame.std_interceptors.trim_v;
re_frame.core.after = re_frame.std_interceptors.after;
re_frame.core.on_changes = re_frame.std_interceptors.on_changes;
/**
 * Associate a given `query id` with a given subscription handler function `handler-fn`
 * which is expected to take two arguments: app-db and query vector, and return
 * a `reaction`.
 * 
 *   This is a low level, advanced function.  You should probably be using reg-sub
 *   instead.
 */
re_frame.core.reg_sub_raw = (function re_frame$core$reg_sub_raw(query_id,handler_fn){
return re_frame.registrar.register_handler.call(null,re_frame.subs.kind,query_id,handler_fn);
});
re_frame.core.reg_sub = re_frame.subs.reg_sub;
re_frame.core.subscribe = re_frame.subs.subscribe;
re_frame.core.clear_sub = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.subs.kind);
re_frame.core.clear_subscription_cache_BANG_ = re_frame.subs.clear_subscription_cache_BANG_;
re_frame.core.reg_fx = re_frame.fx.register;
re_frame.core.clear_fx = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.fx.kind);
re_frame.core.reg_cofx = re_frame.cofx.register;
re_frame.core.inject_cofx = re_frame.cofx.inject_cofx;
re_frame.core.clear_cofx = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.cofx.kind);
re_frame.core.clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
/**
 * Register the given `id`, typically a keyword, with the combination of
 *   `db-handler` and an interceptor chain.
 *   `db-handler` is a function: (db event) -> db
 *   `interceptors` is a collection of interceptors, possibly nested (needs flattening).
 *   `db-handler` is wrapped in an interceptor and added to the end of the chain, so in the end
 * there is only a chain.
 * The necessary effects and coeffects handler are added to the front of the
 * interceptor chain.  These interceptors ensure that app-db is available and updated.
 */
re_frame.core.reg_event_db = (function re_frame$core$reg_event_db(var_args){
var args40289 = [];
var len__37847__auto___40292 = arguments.length;
var i__37848__auto___40293 = (0);
while(true){
if((i__37848__auto___40293 < len__37847__auto___40292)){
args40289.push((arguments[i__37848__auto___40293]));

var G__40294 = (i__37848__auto___40293 + (1));
i__37848__auto___40293 = G__40294;
continue;
} else {
}
break;
}

var G__40291 = args40289.length;
switch (G__40291) {
case 2:
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40289.length)].join('')));

}
});

re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2 = (function (id,db_handler){
return re_frame.core.reg_event_db.call(null,id,null,db_handler);
});

re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,db_handler){
return re_frame.events.register.call(null,id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,interceptors,re_frame.std_interceptors.db_handler__GT_interceptor.call(null,db_handler)], null));
});

re_frame.core.reg_event_db.cljs$lang$maxFixedArity = 3;

re_frame.core.reg_event_fx = (function re_frame$core$reg_event_fx(var_args){
var args40296 = [];
var len__37847__auto___40299 = arguments.length;
var i__37848__auto___40300 = (0);
while(true){
if((i__37848__auto___40300 < len__37847__auto___40299)){
args40296.push((arguments[i__37848__auto___40300]));

var G__40301 = (i__37848__auto___40300 + (1));
i__37848__auto___40300 = G__40301;
continue;
} else {
}
break;
}

var G__40298 = args40296.length;
switch (G__40298) {
case 2:
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40296.length)].join('')));

}
});

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2 = (function (id,fx_handler){
return re_frame.core.reg_event_fx.call(null,id,null,fx_handler);
});

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,fx_handler){
return re_frame.events.register.call(null,id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,interceptors,re_frame.std_interceptors.fx_handler__GT_interceptor.call(null,fx_handler)], null));
});

re_frame.core.reg_event_fx.cljs$lang$maxFixedArity = 3;

re_frame.core.reg_event_ctx = (function re_frame$core$reg_event_ctx(var_args){
var args40303 = [];
var len__37847__auto___40306 = arguments.length;
var i__37848__auto___40307 = (0);
while(true){
if((i__37848__auto___40307 < len__37847__auto___40306)){
args40303.push((arguments[i__37848__auto___40307]));

var G__40308 = (i__37848__auto___40307 + (1));
i__37848__auto___40307 = G__40308;
continue;
} else {
}
break;
}

var G__40305 = args40303.length;
switch (G__40305) {
case 2:
return re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40303.length)].join('')));

}
});

re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return re_frame.core.reg_event_ctx.call(null,id,null,handler);
});

re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return re_frame.events.register.call(null,id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,interceptors,re_frame.std_interceptors.ctx_handler__GT_interceptor.call(null,handler)], null));
});

re_frame.core.reg_event_ctx.cljs$lang$maxFixedArity = 3;

re_frame.core.set_loggers_BANG_ = re_frame.loggers.set_loggers_BANG_;
re_frame.core.console = re_frame.loggers.console;
/**
 * Checkpoints the state of re-frame and returns a function which, when
 *   later called, will restore re-frame to that checkpointed state.
 * 
 *   Checkpoint includes app-db, all registered handlers and all subscriptions.
 *   
 */
re_frame.core.make_restore_fn = (function re_frame$core$make_restore_fn(){
var handlers = cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler);
var app_db = cljs.core.deref.call(null,re_frame.db.app_db);
var subs_cache = cljs.core.deref.call(null,re_frame.subs.query__GT_reaction);
return ((function (handlers,app_db,subs_cache){
return (function (){
var original_subs_40318 = cljs.core.set.call(null,cljs.core.vals.call(null,subs_cache));
var current_subs_40319 = cljs.core.set.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction)));
var seq__40314_40320 = cljs.core.seq.call(null,clojure.set.difference.call(null,current_subs_40319,original_subs_40318));
var chunk__40315_40321 = null;
var count__40316_40322 = (0);
var i__40317_40323 = (0);
while(true){
if((i__40317_40323 < count__40316_40322)){
var sub_40324 = cljs.core._nth.call(null,chunk__40315_40321,i__40317_40323);
re_frame.interop.dispose_BANG_.call(null,sub_40324);

var G__40325 = seq__40314_40320;
var G__40326 = chunk__40315_40321;
var G__40327 = count__40316_40322;
var G__40328 = (i__40317_40323 + (1));
seq__40314_40320 = G__40325;
chunk__40315_40321 = G__40326;
count__40316_40322 = G__40327;
i__40317_40323 = G__40328;
continue;
} else {
var temp__4657__auto___40329 = cljs.core.seq.call(null,seq__40314_40320);
if(temp__4657__auto___40329){
var seq__40314_40330__$1 = temp__4657__auto___40329;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40314_40330__$1)){
var c__37583__auto___40331 = cljs.core.chunk_first.call(null,seq__40314_40330__$1);
var G__40332 = cljs.core.chunk_rest.call(null,seq__40314_40330__$1);
var G__40333 = c__37583__auto___40331;
var G__40334 = cljs.core.count.call(null,c__37583__auto___40331);
var G__40335 = (0);
seq__40314_40320 = G__40332;
chunk__40315_40321 = G__40333;
count__40316_40322 = G__40334;
i__40317_40323 = G__40335;
continue;
} else {
var sub_40336 = cljs.core.first.call(null,seq__40314_40330__$1);
re_frame.interop.dispose_BANG_.call(null,sub_40336);

var G__40337 = cljs.core.next.call(null,seq__40314_40330__$1);
var G__40338 = null;
var G__40339 = (0);
var G__40340 = (0);
seq__40314_40320 = G__40337;
chunk__40315_40321 = G__40338;
count__40316_40322 = G__40339;
i__40317_40323 = G__40340;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_.call(null,re_frame.registrar.kind__GT_id__GT_handler,handlers);

cljs.core.reset_BANG_.call(null,re_frame.db.app_db,app_db);

return null;
});
;})(handlers,app_db,subs_cache))
});
/**
 * Registers a function `f` to be called after each event is processed
 * `f` will be called with two arguments:
 *  - `event`: a vector. The event just processed.
 *  - `queue`: a PersistentQueue, possibly empty, of events yet to be processed.
 * 
 * This is useful in advanced cases like:
 *   - you are implementing a complex bootstrap pipeline
 *   - you want to create your own handling infrastructure, with perhaps multiple
 *     handlers for the one event, etc.  Hook in here.
 *   - libraries providing 'isomorphic javascript' rendering on  Nodejs or Nashorn.
 * 
 *   'id' is typically a keyword. Supplied at "add time" so it can subsequently
 *   be used at "remove time" to get rid of the right callback.
 *   
 */
re_frame.core.add_post_event_callback = (function re_frame$core$add_post_event_callback(var_args){
var args40341 = [];
var len__37847__auto___40344 = arguments.length;
var i__37848__auto___40345 = (0);
while(true){
if((i__37848__auto___40345 < len__37847__auto___40344)){
args40341.push((arguments[i__37848__auto___40345]));

var G__40346 = (i__37848__auto___40345 + (1));
i__37848__auto___40345 = G__40346;
continue;
} else {
}
break;
}

var G__40343 = args40341.length;
switch (G__40343) {
case 1:
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40341.length)].join('')));

}
});

re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1 = (function (f){
return re_frame.core.add_post_event_callback.call(null,f,f);
});

re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2 = (function (id,f){
return re_frame.router.add_post_event_callback.call(null,re_frame.router.event_queue,id,f);
});

re_frame.core.add_post_event_callback.cljs$lang$maxFixedArity = 2;

re_frame.core.remove_post_event_callback = (function re_frame$core$remove_post_event_callback(id){
return re_frame.router.remove_post_event_callback.call(null,re_frame.router.event_queue,id);
});
re_frame.core.register_handler = (function re_frame$core$register_handler(var_args){
var args__37854__auto__ = [];
var len__37847__auto___40349 = arguments.length;
var i__37848__auto___40350 = (0);
while(true){
if((i__37848__auto___40350 < len__37847__auto___40349)){
args__37854__auto__.push((arguments[i__37848__auto___40350]));

var G__40351 = (i__37848__auto___40350 + (1));
i__37848__auto___40350 = G__40351;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});

re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic = (function (args){
re_frame.core.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame:  \"register-handler\" has been renamed \"reg-event-db\" (look for registration of ",[cljs.core.str(cljs.core.first.call(null,args))].join(''),")");

return cljs.core.apply.call(null,re_frame.core.reg_event_db,args);
});

re_frame.core.register_handler.cljs$lang$maxFixedArity = (0);

re_frame.core.register_handler.cljs$lang$applyTo = (function (seq40348){
return re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40348));
});

re_frame.core.register_sub = (function re_frame$core$register_sub(var_args){
var args__37854__auto__ = [];
var len__37847__auto___40353 = arguments.length;
var i__37848__auto___40354 = (0);
while(true){
if((i__37848__auto___40354 < len__37847__auto___40353)){
args__37854__auto__.push((arguments[i__37848__auto___40354]));

var G__40355 = (i__37848__auto___40354 + (1));
i__37848__auto___40354 = G__40355;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});

re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
re_frame.core.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame:  \"register-sub\" is deprecated. Use \"reg-sub-raw\" (look for registration of ",[cljs.core.str(cljs.core.first.call(null,args))].join(''),")");

return cljs.core.apply.call(null,re_frame.core.reg_sub_raw,args);
});

re_frame.core.register_sub.cljs$lang$maxFixedArity = (0);

re_frame.core.register_sub.cljs$lang$applyTo = (function (seq40352){
return re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40352));
});


//# sourceMappingURL=core.js.map