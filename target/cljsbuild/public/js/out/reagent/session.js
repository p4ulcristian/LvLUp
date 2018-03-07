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
var args__37886__auto__ = [];
var len__37879__auto___39588 = arguments.length;
var i__37880__auto___39589 = (0);
while(true){
if((i__37880__auto___39589 < len__37879__auto___39588)){
args__37886__auto__.push((arguments[i__37880__auto___39589]));

var G__39590 = (i__37880__auto___39589 + (1));
i__37880__auto___39589 = G__39590;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((1) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37887__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__39584){
var vec__39585 = p__39584;
var default$ = cljs.core.nth.call(null,vec__39585,(0),null);
var temp_a = reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!((cljs.core.deref.call(null,temp_a) == null))){
return cljs.core.deref.call(null,temp_a);
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq39582){
var G__39583 = cljs.core.first.call(null,seq39582);
var seq39582__$1 = cljs.core.next.call(null,seq39582);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__39583,seq39582__$1);
});

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__37886__auto__ = [];
var len__37879__auto___39597 = arguments.length;
var i__37880__auto___39598 = (0);
while(true){
if((i__37880__auto___39598 < len__37879__auto___39597)){
args__37886__auto__.push((arguments[i__37880__auto___39598]));

var G__39599 = (i__37880__auto___39598 + (1));
i__37880__auto___39598 = G__39599;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((1) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37887__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__39593){
var vec__39594 = p__39593;
var default$ = cljs.core.nth.call(null,vec__39594,(0),null);
var or__36804__auto__ = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if(cljs.core.truth_(or__36804__auto__)){
return or__36804__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq39591){
var G__39592 = cljs.core.first.call(null,seq39591);
var seq39591__$1 = cljs.core.next.call(null,seq39591);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__39592,seq39591__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__37886__auto__ = [];
var len__37879__auto___39602 = arguments.length;
var i__37880__auto___39603 = (0);
while(true){
if((i__37880__auto___39603 < len__37879__auto___39602)){
args__37886__auto__.push((arguments[i__37880__auto___39603]));

var G__39604 = (i__37880__auto___39603 + (1));
i__37880__auto___39603 = G__39604;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((1) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37887__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq39600){
var G__39601 = cljs.core.first.call(null,seq39600);
var seq39600__$1 = cljs.core.next.call(null,seq39600);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39601,seq39600__$1);
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
var args__37886__auto__ = [];
var len__37879__auto___39611 = arguments.length;
var i__37880__auto___39612 = (0);
while(true){
if((i__37880__auto___39612 < len__37879__auto___39611)){
args__37886__auto__.push((arguments[i__37880__auto___39612]));

var G__39613 = (i__37880__auto___39612 + (1));
i__37880__auto___39612 = G__39613;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((1) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37887__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__39607){
var vec__39608 = p__39607;
var default$ = cljs.core.nth.call(null,vec__39608,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq39605){
var G__39606 = cljs.core.first.call(null,seq39605);
var seq39605__$1 = cljs.core.next.call(null,seq39605);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39606,seq39605__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__37886__auto__ = [];
var len__37879__auto___39620 = arguments.length;
var i__37880__auto___39621 = (0);
while(true){
if((i__37880__auto___39621 < len__37879__auto___39620)){
args__37886__auto__.push((arguments[i__37880__auto___39621]));

var G__39622 = (i__37880__auto___39621 + (1));
i__37880__auto___39621 = G__39622;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((1) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37887__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__39616){
var vec__39617 = p__39616;
var default$ = cljs.core.nth.call(null,vec__39617,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq39614){
var G__39615 = cljs.core.first.call(null,seq39614);
var seq39614__$1 = cljs.core.next.call(null,seq39614);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39615,seq39614__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__37886__auto__ = [];
var len__37879__auto___39627 = arguments.length;
var i__37880__auto___39628 = (0);
while(true){
if((i__37880__auto___39628 < len__37879__auto___39627)){
args__37886__auto__.push((arguments[i__37880__auto___39628]));

var G__39629 = (i__37880__auto___39628 + (1));
i__37880__auto___39628 = G__39629;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((2) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37887__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__39623_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__39623_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq39624){
var G__39625 = cljs.core.first.call(null,seq39624);
var seq39624__$1 = cljs.core.next.call(null,seq39624);
var G__39626 = cljs.core.first.call(null,seq39624__$1);
var seq39624__$2 = cljs.core.next.call(null,seq39624__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39625,G__39626,seq39624__$2);
});

/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__37886__auto__ = [];
var len__37879__auto___39634 = arguments.length;
var i__37880__auto___39635 = (0);
while(true){
if((i__37880__auto___39635 < len__37879__auto___39634)){
args__37886__auto__.push((arguments[i__37880__auto___39635]));

var G__39636 = (i__37880__auto___39635 + (1));
i__37880__auto___39635 = G__39636;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((2) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37887__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__39630_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__39630_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq39631){
var G__39632 = cljs.core.first.call(null,seq39631);
var seq39631__$1 = cljs.core.next.call(null,seq39631);
var G__39633 = cljs.core.first.call(null,seq39631__$1);
var seq39631__$2 = cljs.core.next.call(null,seq39631__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39632,G__39633,seq39631__$2);
});


//# sourceMappingURL=session.js.map