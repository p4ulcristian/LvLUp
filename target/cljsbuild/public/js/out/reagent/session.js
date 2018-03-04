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
var len__37877__auto___39637 = arguments.length;
var i__37878__auto___39638 = (0);
while(true){
if((i__37878__auto___39638 < len__37877__auto___39637)){
args__37884__auto__.push((arguments[i__37878__auto___39638]));

var G__39639 = (i__37878__auto___39638 + (1));
i__37878__auto___39638 = G__39639;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__39633){
var vec__39634 = p__39633;
var default$ = cljs.core.nth.call(null,vec__39634,(0),null);
var temp_a = reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!((cljs.core.deref.call(null,temp_a) == null))){
return cljs.core.deref.call(null,temp_a);
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq39631){
var G__39632 = cljs.core.first.call(null,seq39631);
var seq39631__$1 = cljs.core.next.call(null,seq39631);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__39632,seq39631__$1);
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
var len__37877__auto___39646 = arguments.length;
var i__37878__auto___39647 = (0);
while(true){
if((i__37878__auto___39647 < len__37877__auto___39646)){
args__37884__auto__.push((arguments[i__37878__auto___39647]));

var G__39648 = (i__37878__auto___39647 + (1));
i__37878__auto___39647 = G__39648;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__39642){
var vec__39643 = p__39642;
var default$ = cljs.core.nth.call(null,vec__39643,(0),null);
var or__36802__auto__ = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq39640){
var G__39641 = cljs.core.first.call(null,seq39640);
var seq39640__$1 = cljs.core.next.call(null,seq39640);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__39641,seq39640__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__37884__auto__ = [];
var len__37877__auto___39651 = arguments.length;
var i__37878__auto___39652 = (0);
while(true){
if((i__37878__auto___39652 < len__37877__auto___39651)){
args__37884__auto__.push((arguments[i__37878__auto___39652]));

var G__39653 = (i__37878__auto___39652 + (1));
i__37878__auto___39652 = G__39653;
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

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq39649){
var G__39650 = cljs.core.first.call(null,seq39649);
var seq39649__$1 = cljs.core.next.call(null,seq39649);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39650,seq39649__$1);
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
var len__37877__auto___39660 = arguments.length;
var i__37878__auto___39661 = (0);
while(true){
if((i__37878__auto___39661 < len__37877__auto___39660)){
args__37884__auto__.push((arguments[i__37878__auto___39661]));

var G__39662 = (i__37878__auto___39661 + (1));
i__37878__auto___39661 = G__39662;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__39656){
var vec__39657 = p__39656;
var default$ = cljs.core.nth.call(null,vec__39657,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq39654){
var G__39655 = cljs.core.first.call(null,seq39654);
var seq39654__$1 = cljs.core.next.call(null,seq39654);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39655,seq39654__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__37884__auto__ = [];
var len__37877__auto___39669 = arguments.length;
var i__37878__auto___39670 = (0);
while(true){
if((i__37878__auto___39670 < len__37877__auto___39669)){
args__37884__auto__.push((arguments[i__37878__auto___39670]));

var G__39671 = (i__37878__auto___39670 + (1));
i__37878__auto___39670 = G__39671;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__39665){
var vec__39666 = p__39665;
var default$ = cljs.core.nth.call(null,vec__39666,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq39663){
var G__39664 = cljs.core.first.call(null,seq39663);
var seq39663__$1 = cljs.core.next.call(null,seq39663);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39664,seq39663__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__37884__auto__ = [];
var len__37877__auto___39676 = arguments.length;
var i__37878__auto___39677 = (0);
while(true){
if((i__37878__auto___39677 < len__37877__auto___39676)){
args__37884__auto__.push((arguments[i__37878__auto___39677]));

var G__39678 = (i__37878__auto___39677 + (1));
i__37878__auto___39677 = G__39678;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((2) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37885__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__39672_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__39672_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq39673){
var G__39674 = cljs.core.first.call(null,seq39673);
var seq39673__$1 = cljs.core.next.call(null,seq39673);
var G__39675 = cljs.core.first.call(null,seq39673__$1);
var seq39673__$2 = cljs.core.next.call(null,seq39673__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39674,G__39675,seq39673__$2);
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
var len__37877__auto___39683 = arguments.length;
var i__37878__auto___39684 = (0);
while(true){
if((i__37878__auto___39684 < len__37877__auto___39683)){
args__37884__auto__.push((arguments[i__37878__auto___39684]));

var G__39685 = (i__37878__auto___39684 + (1));
i__37878__auto___39684 = G__39685;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((2) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37885__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__39679_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__39679_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq39680){
var G__39681 = cljs.core.first.call(null,seq39680);
var seq39680__$1 = cljs.core.next.call(null,seq39680);
var G__39682 = cljs.core.first.call(null,seq39680__$1);
var seq39680__$2 = cljs.core.next.call(null,seq39680__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39681,G__39682,seq39680__$2);
});


//# sourceMappingURL=session.js.map