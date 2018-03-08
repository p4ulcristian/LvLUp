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
var args__37858__auto__ = [];
var len__37851__auto___39559 = arguments.length;
var i__37852__auto___39560 = (0);
while(true){
if((i__37852__auto___39560 < len__37851__auto___39559)){
args__37858__auto__.push((arguments[i__37852__auto___39560]));

var G__39561 = (i__37852__auto___39560 + (1));
i__37852__auto___39560 = G__39561;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((1) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37859__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__39555){
var vec__39556 = p__39555;
var default$ = cljs.core.nth.call(null,vec__39556,(0),null);
var temp_a = reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!((cljs.core.deref.call(null,temp_a) == null))){
return cljs.core.deref.call(null,temp_a);
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq39553){
var G__39554 = cljs.core.first.call(null,seq39553);
var seq39553__$1 = cljs.core.next.call(null,seq39553);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__39554,seq39553__$1);
});

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__37858__auto__ = [];
var len__37851__auto___39568 = arguments.length;
var i__37852__auto___39569 = (0);
while(true){
if((i__37852__auto___39569 < len__37851__auto___39568)){
args__37858__auto__.push((arguments[i__37852__auto___39569]));

var G__39570 = (i__37852__auto___39569 + (1));
i__37852__auto___39569 = G__39570;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((1) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37859__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__39564){
var vec__39565 = p__39564;
var default$ = cljs.core.nth.call(null,vec__39565,(0),null);
var or__36776__auto__ = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if(cljs.core.truth_(or__36776__auto__)){
return or__36776__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq39562){
var G__39563 = cljs.core.first.call(null,seq39562);
var seq39562__$1 = cljs.core.next.call(null,seq39562);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__39563,seq39562__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__37858__auto__ = [];
var len__37851__auto___39573 = arguments.length;
var i__37852__auto___39574 = (0);
while(true){
if((i__37852__auto___39574 < len__37851__auto___39573)){
args__37858__auto__.push((arguments[i__37852__auto___39574]));

var G__39575 = (i__37852__auto___39574 + (1));
i__37852__auto___39574 = G__39575;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((1) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37859__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq39571){
var G__39572 = cljs.core.first.call(null,seq39571);
var seq39571__$1 = cljs.core.next.call(null,seq39571);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39572,seq39571__$1);
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
var args__37858__auto__ = [];
var len__37851__auto___39582 = arguments.length;
var i__37852__auto___39583 = (0);
while(true){
if((i__37852__auto___39583 < len__37851__auto___39582)){
args__37858__auto__.push((arguments[i__37852__auto___39583]));

var G__39584 = (i__37852__auto___39583 + (1));
i__37852__auto___39583 = G__39584;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((1) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37859__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__39578){
var vec__39579 = p__39578;
var default$ = cljs.core.nth.call(null,vec__39579,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq39576){
var G__39577 = cljs.core.first.call(null,seq39576);
var seq39576__$1 = cljs.core.next.call(null,seq39576);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39577,seq39576__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__37858__auto__ = [];
var len__37851__auto___39591 = arguments.length;
var i__37852__auto___39592 = (0);
while(true){
if((i__37852__auto___39592 < len__37851__auto___39591)){
args__37858__auto__.push((arguments[i__37852__auto___39592]));

var G__39593 = (i__37852__auto___39592 + (1));
i__37852__auto___39592 = G__39593;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((1) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37859__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__39587){
var vec__39588 = p__39587;
var default$ = cljs.core.nth.call(null,vec__39588,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq39585){
var G__39586 = cljs.core.first.call(null,seq39585);
var seq39585__$1 = cljs.core.next.call(null,seq39585);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39586,seq39585__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__37858__auto__ = [];
var len__37851__auto___39598 = arguments.length;
var i__37852__auto___39599 = (0);
while(true){
if((i__37852__auto___39599 < len__37851__auto___39598)){
args__37858__auto__.push((arguments[i__37852__auto___39599]));

var G__39600 = (i__37852__auto___39599 + (1));
i__37852__auto___39599 = G__39600;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((2) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37859__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__39594_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__39594_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq39595){
var G__39596 = cljs.core.first.call(null,seq39595);
var seq39595__$1 = cljs.core.next.call(null,seq39595);
var G__39597 = cljs.core.first.call(null,seq39595__$1);
var seq39595__$2 = cljs.core.next.call(null,seq39595__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39596,G__39597,seq39595__$2);
});

/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__37858__auto__ = [];
var len__37851__auto___39605 = arguments.length;
var i__37852__auto___39606 = (0);
while(true){
if((i__37852__auto___39606 < len__37851__auto___39605)){
args__37858__auto__.push((arguments[i__37852__auto___39606]));

var G__39607 = (i__37852__auto___39606 + (1));
i__37852__auto___39606 = G__39607;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((2) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37859__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__39601_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__39601_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq39602){
var G__39603 = cljs.core.first.call(null,seq39602);
var seq39602__$1 = cljs.core.next.call(null,seq39602);
var G__39604 = cljs.core.first.call(null,seq39602__$1);
var seq39602__$2 = cljs.core.next.call(null,seq39602__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39603,G__39604,seq39602__$2);
});


//# sourceMappingURL=session.js.map