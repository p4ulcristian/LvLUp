// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor.call(null,reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__37885__auto__ = [];
var len__37878__auto___39586 = arguments.length;
var i__37879__auto___39587 = (0);
while(true){
if((i__37879__auto___39587 < len__37878__auto___39586)){
args__37885__auto__.push((arguments[i__37879__auto___39587]));

var G__39588 = (i__37879__auto___39587 + (1));
i__37879__auto___39587 = G__39588;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((1) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37886__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__39582){
var vec__39583 = p__39582;
var default$ = cljs.core.nth.call(null,vec__39583,(0),null);
var temp_a = reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!((cljs.core.deref.call(null,temp_a) == null))){
return cljs.core.deref.call(null,temp_a);
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq39580){
var G__39581 = cljs.core.first.call(null,seq39580);
var seq39580__$1 = cljs.core.next.call(null,seq39580);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__39581,seq39580__$1);
});

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__37885__auto__ = [];
var len__37878__auto___39595 = arguments.length;
var i__37879__auto___39596 = (0);
while(true){
if((i__37879__auto___39596 < len__37878__auto___39595)){
args__37885__auto__.push((arguments[i__37879__auto___39596]));

var G__39597 = (i__37879__auto___39596 + (1));
i__37879__auto___39596 = G__39597;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((1) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37886__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__39591){
var vec__39592 = p__39591;
var default$ = cljs.core.nth.call(null,vec__39592,(0),null);
var or__36802__auto__ = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq39589){
var G__39590 = cljs.core.first.call(null,seq39589);
var seq39589__$1 = cljs.core.next.call(null,seq39589);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__39590,seq39589__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__37885__auto__ = [];
var len__37878__auto___39600 = arguments.length;
var i__37879__auto___39601 = (0);
while(true){
if((i__37879__auto___39601 < len__37878__auto___39600)){
args__37885__auto__.push((arguments[i__37879__auto___39601]));

var G__39602 = (i__37879__auto___39601 + (1));
i__37879__auto___39601 = G__39602;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((1) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37886__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq39598){
var G__39599 = cljs.core.first.call(null,seq39598);
var seq39598__$1 = cljs.core.next.call(null,seq39598);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39599,seq39598__$1);
});

/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__37885__auto__ = [];
var len__37878__auto___39609 = arguments.length;
var i__37879__auto___39610 = (0);
while(true){
if((i__37879__auto___39610 < len__37878__auto___39609)){
args__37885__auto__.push((arguments[i__37879__auto___39610]));

var G__39611 = (i__37879__auto___39610 + (1));
i__37879__auto___39610 = G__39611;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((1) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37886__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__39605){
var vec__39606 = p__39605;
var default$ = cljs.core.nth.call(null,vec__39606,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq39603){
var G__39604 = cljs.core.first.call(null,seq39603);
var seq39603__$1 = cljs.core.next.call(null,seq39603);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39604,seq39603__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__37885__auto__ = [];
var len__37878__auto___39618 = arguments.length;
var i__37879__auto___39619 = (0);
while(true){
if((i__37879__auto___39619 < len__37878__auto___39618)){
args__37885__auto__.push((arguments[i__37879__auto___39619]));

var G__39620 = (i__37879__auto___39619 + (1));
i__37879__auto___39619 = G__39620;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((1) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37886__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__39614){
var vec__39615 = p__39614;
var default$ = cljs.core.nth.call(null,vec__39615,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq39612){
var G__39613 = cljs.core.first.call(null,seq39612);
var seq39612__$1 = cljs.core.next.call(null,seq39612);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39613,seq39612__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__37885__auto__ = [];
var len__37878__auto___39625 = arguments.length;
var i__37879__auto___39626 = (0);
while(true){
if((i__37879__auto___39626 < len__37878__auto___39625)){
args__37885__auto__.push((arguments[i__37879__auto___39626]));

var G__39627 = (i__37879__auto___39626 + (1));
i__37879__auto___39626 = G__39627;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((2) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37886__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__39621_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__39621_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq39622){
var G__39623 = cljs.core.first.call(null,seq39622);
var seq39622__$1 = cljs.core.next.call(null,seq39622);
var G__39624 = cljs.core.first.call(null,seq39622__$1);
var seq39622__$2 = cljs.core.next.call(null,seq39622__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39623,G__39624,seq39622__$2);
});

/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__37885__auto__ = [];
var len__37878__auto___39632 = arguments.length;
var i__37879__auto___39633 = (0);
while(true){
if((i__37879__auto___39633 < len__37878__auto___39632)){
args__37885__auto__.push((arguments[i__37879__auto___39633]));

var G__39634 = (i__37879__auto___39633 + (1));
i__37879__auto___39633 = G__39634;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((2) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37886__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__39628_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__39628_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq39629){
var G__39630 = cljs.core.first.call(null,seq39629);
var seq39629__$1 = cljs.core.next.call(null,seq39629);
var G__39631 = cljs.core.first.call(null,seq39629__$1);
var seq39629__$2 = cljs.core.next.call(null,seq39629__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39630,G__39631,seq39629__$2);
});


//# sourceMappingURL=session.js.map