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
var args__37840__auto__ = [];
var len__37833__auto___40476 = arguments.length;
var i__37834__auto___40477 = (0);
while(true){
if((i__37834__auto___40477 < len__37833__auto___40476)){
args__37840__auto__.push((arguments[i__37834__auto___40477]));

var G__40478 = (i__37834__auto___40477 + (1));
i__37834__auto___40477 = G__40478;
continue;
} else {
}
break;
}

var argseq__37841__auto__ = ((((1) < args__37840__auto__.length))?(new cljs.core.IndexedSeq(args__37840__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37841__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__40472){
var vec__40473 = p__40472;
var default$ = cljs.core.nth.call(null,vec__40473,(0),null);
var temp_a = reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!((cljs.core.deref.call(null,temp_a) == null))){
return cljs.core.deref.call(null,temp_a);
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq40470){
var G__40471 = cljs.core.first.call(null,seq40470);
var seq40470__$1 = cljs.core.next.call(null,seq40470);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__40471,seq40470__$1);
});

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__37840__auto__ = [];
var len__37833__auto___40485 = arguments.length;
var i__37834__auto___40486 = (0);
while(true){
if((i__37834__auto___40486 < len__37833__auto___40485)){
args__37840__auto__.push((arguments[i__37834__auto___40486]));

var G__40487 = (i__37834__auto___40486 + (1));
i__37834__auto___40486 = G__40487;
continue;
} else {
}
break;
}

var argseq__37841__auto__ = ((((1) < args__37840__auto__.length))?(new cljs.core.IndexedSeq(args__37840__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37841__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__40481){
var vec__40482 = p__40481;
var default$ = cljs.core.nth.call(null,vec__40482,(0),null);
var or__36758__auto__ = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if(cljs.core.truth_(or__36758__auto__)){
return or__36758__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq40479){
var G__40480 = cljs.core.first.call(null,seq40479);
var seq40479__$1 = cljs.core.next.call(null,seq40479);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__40480,seq40479__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__37840__auto__ = [];
var len__37833__auto___40490 = arguments.length;
var i__37834__auto___40491 = (0);
while(true){
if((i__37834__auto___40491 < len__37833__auto___40490)){
args__37840__auto__.push((arguments[i__37834__auto___40491]));

var G__40492 = (i__37834__auto___40491 + (1));
i__37834__auto___40491 = G__40492;
continue;
} else {
}
break;
}

var argseq__37841__auto__ = ((((1) < args__37840__auto__.length))?(new cljs.core.IndexedSeq(args__37840__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37841__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq40488){
var G__40489 = cljs.core.first.call(null,seq40488);
var seq40488__$1 = cljs.core.next.call(null,seq40488);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40489,seq40488__$1);
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
var args__37840__auto__ = [];
var len__37833__auto___40499 = arguments.length;
var i__37834__auto___40500 = (0);
while(true){
if((i__37834__auto___40500 < len__37833__auto___40499)){
args__37840__auto__.push((arguments[i__37834__auto___40500]));

var G__40501 = (i__37834__auto___40500 + (1));
i__37834__auto___40500 = G__40501;
continue;
} else {
}
break;
}

var argseq__37841__auto__ = ((((1) < args__37840__auto__.length))?(new cljs.core.IndexedSeq(args__37840__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37841__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__40495){
var vec__40496 = p__40495;
var default$ = cljs.core.nth.call(null,vec__40496,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq40493){
var G__40494 = cljs.core.first.call(null,seq40493);
var seq40493__$1 = cljs.core.next.call(null,seq40493);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40494,seq40493__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__37840__auto__ = [];
var len__37833__auto___40508 = arguments.length;
var i__37834__auto___40509 = (0);
while(true){
if((i__37834__auto___40509 < len__37833__auto___40508)){
args__37840__auto__.push((arguments[i__37834__auto___40509]));

var G__40510 = (i__37834__auto___40509 + (1));
i__37834__auto___40509 = G__40510;
continue;
} else {
}
break;
}

var argseq__37841__auto__ = ((((1) < args__37840__auto__.length))?(new cljs.core.IndexedSeq(args__37840__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37841__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__40504){
var vec__40505 = p__40504;
var default$ = cljs.core.nth.call(null,vec__40505,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq40502){
var G__40503 = cljs.core.first.call(null,seq40502);
var seq40502__$1 = cljs.core.next.call(null,seq40502);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40503,seq40502__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__37840__auto__ = [];
var len__37833__auto___40515 = arguments.length;
var i__37834__auto___40516 = (0);
while(true){
if((i__37834__auto___40516 < len__37833__auto___40515)){
args__37840__auto__.push((arguments[i__37834__auto___40516]));

var G__40517 = (i__37834__auto___40516 + (1));
i__37834__auto___40516 = G__40517;
continue;
} else {
}
break;
}

var argseq__37841__auto__ = ((((2) < args__37840__auto__.length))?(new cljs.core.IndexedSeq(args__37840__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37841__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__40511_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__40511_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq40512){
var G__40513 = cljs.core.first.call(null,seq40512);
var seq40512__$1 = cljs.core.next.call(null,seq40512);
var G__40514 = cljs.core.first.call(null,seq40512__$1);
var seq40512__$2 = cljs.core.next.call(null,seq40512__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40513,G__40514,seq40512__$2);
});

/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__37840__auto__ = [];
var len__37833__auto___40522 = arguments.length;
var i__37834__auto___40523 = (0);
while(true){
if((i__37834__auto___40523 < len__37833__auto___40522)){
args__37840__auto__.push((arguments[i__37834__auto___40523]));

var G__40524 = (i__37834__auto___40523 + (1));
i__37834__auto___40523 = G__40524;
continue;
} else {
}
break;
}

var argseq__37841__auto__ = ((((2) < args__37840__auto__.length))?(new cljs.core.IndexedSeq(args__37840__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37841__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__40518_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__40518_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq40519){
var G__40520 = cljs.core.first.call(null,seq40519);
var seq40519__$1 = cljs.core.next.call(null,seq40519);
var G__40521 = cljs.core.first.call(null,seq40519__$1);
var seq40519__$2 = cljs.core.next.call(null,seq40519__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40520,G__40521,seq40519__$2);
});


//# sourceMappingURL=session.js.map