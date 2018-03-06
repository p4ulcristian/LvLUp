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
var args__37884__auto__ = [];
var len__37877__auto___39585 = arguments.length;
var i__37878__auto___39586 = (0);
while(true){
if((i__37878__auto___39586 < len__37877__auto___39585)){
args__37884__auto__.push((arguments[i__37878__auto___39586]));

var G__39587 = (i__37878__auto___39586 + (1));
i__37878__auto___39586 = G__39587;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__39581){
var vec__39582 = p__39581;
var default$ = cljs.core.nth.call(null,vec__39582,(0),null);
var temp_a = reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!((cljs.core.deref.call(null,temp_a) == null))){
return cljs.core.deref.call(null,temp_a);
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq39579){
var G__39580 = cljs.core.first.call(null,seq39579);
var seq39579__$1 = cljs.core.next.call(null,seq39579);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__39580,seq39579__$1);
});

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__37884__auto__ = [];
var len__37877__auto___39594 = arguments.length;
var i__37878__auto___39595 = (0);
while(true){
if((i__37878__auto___39595 < len__37877__auto___39594)){
args__37884__auto__.push((arguments[i__37878__auto___39595]));

var G__39596 = (i__37878__auto___39595 + (1));
i__37878__auto___39595 = G__39596;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__39590){
var vec__39591 = p__39590;
var default$ = cljs.core.nth.call(null,vec__39591,(0),null);
var or__36802__auto__ = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq39588){
var G__39589 = cljs.core.first.call(null,seq39588);
var seq39588__$1 = cljs.core.next.call(null,seq39588);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__39589,seq39588__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__37884__auto__ = [];
var len__37877__auto___39599 = arguments.length;
var i__37878__auto___39600 = (0);
while(true){
if((i__37878__auto___39600 < len__37877__auto___39599)){
args__37884__auto__.push((arguments[i__37878__auto___39600]));

var G__39601 = (i__37878__auto___39600 + (1));
i__37878__auto___39600 = G__39601;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq39597){
var G__39598 = cljs.core.first.call(null,seq39597);
var seq39597__$1 = cljs.core.next.call(null,seq39597);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39598,seq39597__$1);
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
var args__37884__auto__ = [];
var len__37877__auto___39608 = arguments.length;
var i__37878__auto___39609 = (0);
while(true){
if((i__37878__auto___39609 < len__37877__auto___39608)){
args__37884__auto__.push((arguments[i__37878__auto___39609]));

var G__39610 = (i__37878__auto___39609 + (1));
i__37878__auto___39609 = G__39610;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__39604){
var vec__39605 = p__39604;
var default$ = cljs.core.nth.call(null,vec__39605,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq39602){
var G__39603 = cljs.core.first.call(null,seq39602);
var seq39602__$1 = cljs.core.next.call(null,seq39602);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39603,seq39602__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__37884__auto__ = [];
var len__37877__auto___39617 = arguments.length;
var i__37878__auto___39618 = (0);
while(true){
if((i__37878__auto___39618 < len__37877__auto___39617)){
args__37884__auto__.push((arguments[i__37878__auto___39618]));

var G__39619 = (i__37878__auto___39618 + (1));
i__37878__auto___39618 = G__39619;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__39613){
var vec__39614 = p__39613;
var default$ = cljs.core.nth.call(null,vec__39614,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq39611){
var G__39612 = cljs.core.first.call(null,seq39611);
var seq39611__$1 = cljs.core.next.call(null,seq39611);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39612,seq39611__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__37884__auto__ = [];
var len__37877__auto___39624 = arguments.length;
var i__37878__auto___39625 = (0);
while(true){
if((i__37878__auto___39625 < len__37877__auto___39624)){
args__37884__auto__.push((arguments[i__37878__auto___39625]));

var G__39626 = (i__37878__auto___39625 + (1));
i__37878__auto___39625 = G__39626;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((2) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37885__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__39620_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__39620_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq39621){
var G__39622 = cljs.core.first.call(null,seq39621);
var seq39621__$1 = cljs.core.next.call(null,seq39621);
var G__39623 = cljs.core.first.call(null,seq39621__$1);
var seq39621__$2 = cljs.core.next.call(null,seq39621__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39622,G__39623,seq39621__$2);
});

/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__37884__auto__ = [];
var len__37877__auto___39631 = arguments.length;
var i__37878__auto___39632 = (0);
while(true){
if((i__37878__auto___39632 < len__37877__auto___39631)){
args__37884__auto__.push((arguments[i__37878__auto___39632]));

var G__39633 = (i__37878__auto___39632 + (1));
i__37878__auto___39632 = G__39633;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((2) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37885__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__39627_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__39627_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq39628){
var G__39629 = cljs.core.first.call(null,seq39628);
var seq39628__$1 = cljs.core.next.call(null,seq39628);
var G__39630 = cljs.core.first.call(null,seq39628__$1);
var seq39628__$2 = cljs.core.next.call(null,seq39628__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39629,G__39630,seq39628__$2);
});


//# sourceMappingURL=session.js.map