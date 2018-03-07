// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.interceptor');
goog.require('cljs.core');
goog.require('re_frame.loggers');
goog.require('re_frame.interop');
re_frame.interceptor.mandatory_interceptor_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"after","after",594996914),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"before","before",-1633692388),null], null), null);
re_frame.interceptor.interceptor_QMARK_ = (function re_frame$interceptor$interceptor_QMARK_(m){
return (cljs.core.map_QMARK_.call(null,m)) && (cljs.core._EQ_.call(null,re_frame.interceptor.mandatory_interceptor_keys,cljs.core.set.call(null,cljs.core.keys.call(null,m))));
});
/**
 * Create an interceptor from named arguments
 */
re_frame.interceptor.__GT_interceptor = (function re_frame$interceptor$__GT_interceptor(var_args){
var args__37886__auto__ = [];
var len__37879__auto___38694 = arguments.length;
var i__37880__auto___38695 = (0);
while(true){
if((i__37880__auto___38695 < len__37879__auto___38694)){
args__37886__auto__.push((arguments[i__37880__auto___38695]));

var G__38696 = (i__37880__auto___38695 + (1));
i__37880__auto___38695 = G__38696;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});

re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic = (function (p__38691){
var map__38692 = p__38691;
var map__38692__$1 = ((((!((map__38692 == null)))?((((map__38692.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38692.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38692):map__38692);
var m = map__38692__$1;
var id = cljs.core.get.call(null,map__38692__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var before = cljs.core.get.call(null,map__38692__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var after = cljs.core.get.call(null,map__38692__$1,new cljs.core.Keyword(null,"after","after",594996914));
if(re_frame.interop.debug_enabled_QMARK_){
var temp__4655__auto___38697 = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),re_frame.interceptor.mandatory_interceptor_keys));
if(temp__4655__auto___38697){
var unknown_keys_38698 = temp__4655__auto___38697;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ->interceptor ",m," has unknown keys:",unknown_keys_38698);
} else {
}
} else {
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__36804__auto__ = id;
if(cljs.core.truth_(or__36804__auto__)){
return or__36804__auto__;
} else {
return new cljs.core.Keyword(null,"unnamed","unnamed",-26044928);
}
})(),new cljs.core.Keyword(null,"before","before",-1633692388),before,new cljs.core.Keyword(null,"after","after",594996914),after], null);
});

re_frame.interceptor.__GT_interceptor.cljs$lang$maxFixedArity = (0);

re_frame.interceptor.__GT_interceptor.cljs$lang$applyTo = (function (seq38690){
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38690));
});

re_frame.interceptor.get_effect = (function re_frame$interceptor$get_effect(var_args){
var args38699 = [];
var len__37879__auto___38702 = arguments.length;
var i__37880__auto___38703 = (0);
while(true){
if((i__37880__auto___38703 < len__37879__auto___38702)){
args38699.push((arguments[i__37880__auto___38703]));

var G__38704 = (i__37880__auto___38703 + (1));
i__37880__auto___38703 = G__38704;
continue;
} else {
}
break;
}

var G__38701 = args38699.length;
switch (G__38701) {
case 1:
return re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38699.length)].join('')));

}
});

re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1 = (function (context){
return new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
});

re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2 = (function (context,key){
return cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),key], null));
});

re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3 = (function (context,key,not_found){
return cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),key], null),not_found);
});

re_frame.interceptor.get_effect.cljs$lang$maxFixedArity = 3;

re_frame.interceptor.assoc_effect = (function re_frame$interceptor$assoc_effect(context,key,value){
return cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),key], null),value);
});
re_frame.interceptor.get_coeffect = (function re_frame$interceptor$get_coeffect(var_args){
var args38706 = [];
var len__37879__auto___38709 = arguments.length;
var i__37880__auto___38710 = (0);
while(true){
if((i__37880__auto___38710 < len__37879__auto___38709)){
args38706.push((arguments[i__37880__auto___38710]));

var G__38711 = (i__37880__auto___38710 + (1));
i__37880__auto___38710 = G__38711;
continue;
} else {
}
break;
}

var G__38708 = args38706.length;
switch (G__38708) {
case 1:
return re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38706.length)].join('')));

}
});

re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1 = (function (context){
return new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
});

re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2 = (function (context,key){
return cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),key], null));
});

re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$3 = (function (context,key,not_found){
return cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),key], null),not_found);
});

re_frame.interceptor.get_coeffect.cljs$lang$maxFixedArity = 3;

re_frame.interceptor.assoc_coeffect = (function re_frame$interceptor$assoc_coeffect(context,key,value){
return cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),key], null),value);
});
re_frame.interceptor.update_coeffect = (function re_frame$interceptor$update_coeffect(var_args){
var args__37886__auto__ = [];
var len__37879__auto___38717 = arguments.length;
var i__37880__auto___38718 = (0);
while(true){
if((i__37880__auto___38718 < len__37879__auto___38717)){
args__37886__auto__.push((arguments[i__37880__auto___38718]));

var G__38719 = (i__37880__auto___38718 + (1));
i__37880__auto___38718 = G__38719;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((3) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((3)),(0),null)):null);
return re_frame.interceptor.update_coeffect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37887__auto__);
});

re_frame.interceptor.update_coeffect.cljs$core$IFn$_invoke$arity$variadic = (function (context,key,f,args){
return cljs.core.apply.call(null,cljs.core.update_in,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),key], null),f,args);
});

re_frame.interceptor.update_coeffect.cljs$lang$maxFixedArity = (3);

re_frame.interceptor.update_coeffect.cljs$lang$applyTo = (function (seq38713){
var G__38714 = cljs.core.first.call(null,seq38713);
var seq38713__$1 = cljs.core.next.call(null,seq38713);
var G__38715 = cljs.core.first.call(null,seq38713__$1);
var seq38713__$2 = cljs.core.next.call(null,seq38713__$1);
var G__38716 = cljs.core.first.call(null,seq38713__$2);
var seq38713__$3 = cljs.core.next.call(null,seq38713__$2);
return re_frame.interceptor.update_coeffect.cljs$core$IFn$_invoke$arity$variadic(G__38714,G__38715,G__38716,seq38713__$3);
});

re_frame.interceptor.invoke_interceptor_fn = (function re_frame$interceptor$invoke_interceptor_fn(context,interceptor,direction){
var temp__4655__auto__ = cljs.core.get.call(null,interceptor,direction);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,context);
} else {
return context;
}
});
/**
 * Loop over all interceptors, calling `direction` function on each,
 *   threading the value of `context` through every call.
 * 
 *   `direction` is one of `:before` or `:after`.
 * 
 *   Each iteration, the next interceptor to process is obtained from
 *   context's `:queue`. After they are processed, interceptors are popped
 *   from `:queue` and added to `:stack`.
 * 
 *   After sufficient iteration, `:queue` will be empty, and `:stack` will
 *   contain all interceptors processed.
 * 
 *   Returns updated `context`. Ie. the `context` which has been threaded
 *   through all interceptor functions.
 * 
 *   Generally speaking, an interceptor's `:before` function will (if present)
 *   add to a `context's` `:coeffects`, while it's `:after` function
 *   will modify the `context`'s `:effects`.  Very approximately.
 * 
 *   But because all interceptor functions are given `context`, and can
 *   return a modified version of it, the way is clear for an interceptor
 *   to introspect the stack or queue, or even modify the queue
 *   (add new interceptors via `enqueue`?). This is a very fluid arrangement.
 */
re_frame.interceptor.invoke_interceptors = (function re_frame$interceptor$invoke_interceptors(context,direction){
var context__$1 = context;
while(true){
var queue = new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(context__$1);
if(cljs.core.empty_QMARK_.call(null,queue)){
return context__$1;
} else {
var interceptor = cljs.core.peek.call(null,queue);
var stack = new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(context__$1);
var G__38720 = re_frame.interceptor.invoke_interceptor_fn.call(null,cljs.core.assoc.call(null,context__$1,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.pop.call(null,queue),new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj.call(null,stack,interceptor)),interceptor,direction);
context__$1 = G__38720;
continue;
}
break;
}
});
/**
 * Add a collection of `interceptors` to the end of `context's` execution `:queue`.
 *   Returns the updated `context`.
 * 
 *   In an advanced case, this function could allow an interceptor to add new
 *   interceptors to the `:queue` of a context.
 */
re_frame.interceptor.enqueue = (function re_frame$interceptor$enqueue(context,interceptors){
return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.fnil.call(null,cljs.core.into,re_frame.interop.empty_queue),interceptors);
});
/**
 * Create a fresh context
 */
re_frame.interceptor.context = (function re_frame$interceptor$context(var_args){
var args38721 = [];
var len__37879__auto___38724 = arguments.length;
var i__37880__auto___38725 = (0);
while(true){
if((i__37880__auto___38725 < len__37879__auto___38724)){
args38721.push((arguments[i__37880__auto___38725]));

var G__38726 = (i__37880__auto___38725 + (1));
i__37880__auto___38725 = G__38726;
continue;
} else {
}
break;
}

var G__38723 = args38721.length;
switch (G__38723) {
case 2:
return re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38721.length)].join('')));

}
});

re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$2 = (function (event,interceptors){
return re_frame.interceptor.enqueue.call(null,re_frame.interceptor.assoc_coeffect.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"event","event",301435442),event),interceptors);
});

re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$3 = (function (event,interceptors,db){
return re_frame.interceptor.assoc_coeffect.call(null,re_frame.interceptor.context.call(null,event,interceptors),new cljs.core.Keyword(null,"db","db",993250759),db);
});

re_frame.interceptor.context.cljs$lang$maxFixedArity = 3;

/**
 * Called on completion of `:before` processing, this function prepares/modifies
 * `context` for the backwards sweep of processing in which an interceptor
 * chain's `:after` fns are called.
 * 
 *   At this point in processing, the `:queue` is empty and `:stack` holds all
 *   the previously run interceptors. So this function enables the backwards walk
 *   by priming `:queue` with what's currently in `:stack`
 */
re_frame.interceptor.change_direction = (function re_frame$interceptor$change_direction(context){
return re_frame.interceptor.enqueue.call(null,cljs.core.dissoc.call(null,context,new cljs.core.Keyword(null,"queue","queue",1455835879)),new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(context));
});
/**
 * Executes the given chain (coll) of interceptors.
 * 
 * Each interceptor has this form:
 *     {:before  (fn [context] ...)     ;; returns possibly modified context
 *      :after   (fn [context] ...)}    ;; `identity` would be a noop
 * 
 * Walks the queue of iterceptors from beginning to end, calling the
 * `:before` fn on each, then reverse direction and walk backwards,
 * calling the `:after` fn on each.
 * 
 * The last interceptor in the chain presumably wraps an event
 * handler fn. So the overall goal of the process is to "handle
 * the given event".
 * 
 * Thread a `context` through all calls. `context` has this form:
 * 
 *   {:coeffects {:event [:a-query-id :some-param]
 *                :db    <original contents of app-db>}
 *    :effects   {:db    <new value for app-db>
 *                :dispatch  [:an-event-id :param1]}
 *    :queue     <a collection of further interceptors>
 *    :stack     <a collection of interceptors already walked>}
 * 
 * `context` has `:coeffects` and `:effects` which, if this was a web
 * server, would be somewhat anologous to `request` and `response`
 * respectively.
 * 
 * `coeffects` will contain data like `event` and the initial
 * state of `db` -  the inputs required by the event handler
 * (sitting presumably on the end of the chain), while handler-returned
 * side effects are put into `:effects` including, but not limited to,
 * new values for `db`.
 * 
 * The first few interceptors in a chain will likely have `:before`
 * functions which "prime" the `context` by adding the event, and
 * the current state of app-db into `:coeffects`. But interceptors can
 * add whatever they want to `:coeffects` - perhaps the event handler needs
 * some information from localstore, or a random number, or access to
 * a DataScript connection.
 * 
 * Equally, some interceptors in the chain will have `:after` fn
 * which can process the side effects accumulated into `:effects`
 * including but, not limited to, updates to app-db.
 * 
 * Through both stages (before and after), `context` contains a `:queue`
 * of interceptors yet to be processed, and a `:stack` of interceptors
 * already done.  In advanced cases, these values can be modified by the
 * functions through which the context is threaded.
 */
re_frame.interceptor.execute = (function re_frame$interceptor$execute(event_v,interceptors){
return re_frame.interceptor.invoke_interceptors.call(null,re_frame.interceptor.change_direction.call(null,re_frame.interceptor.invoke_interceptors.call(null,re_frame.interceptor.context.call(null,event_v,interceptors),new cljs.core.Keyword(null,"before","before",-1633692388))),new cljs.core.Keyword(null,"after","after",594996914));
});

//# sourceMappingURL=interceptor.js.map