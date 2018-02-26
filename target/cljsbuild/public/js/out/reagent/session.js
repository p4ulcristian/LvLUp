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
var args__37854__auto__ = [];
var len__37847__auto___40489 = arguments.length;
var i__37848__auto___40490 = (0);
while(true){
if((i__37848__auto___40490 < len__37847__auto___40489)){
args__37854__auto__.push((arguments[i__37848__auto___40490]));

var G__40491 = (i__37848__auto___40490 + (1));
i__37848__auto___40490 = G__40491;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((1) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37855__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__40485){
var vec__40486 = p__40485;
var default$ = cljs.core.nth.call(null,vec__40486,(0),null);
var temp_a = reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!((cljs.core.deref.call(null,temp_a) == null))){
return cljs.core.deref.call(null,temp_a);
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq40483){
var G__40484 = cljs.core.first.call(null,seq40483);
var seq40483__$1 = cljs.core.next.call(null,seq40483);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__40484,seq40483__$1);
});

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__37854__auto__ = [];
var len__37847__auto___40498 = arguments.length;
var i__37848__auto___40499 = (0);
while(true){
if((i__37848__auto___40499 < len__37847__auto___40498)){
args__37854__auto__.push((arguments[i__37848__auto___40499]));

var G__40500 = (i__37848__auto___40499 + (1));
i__37848__auto___40499 = G__40500;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((1) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37855__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__40494){
var vec__40495 = p__40494;
var default$ = cljs.core.nth.call(null,vec__40495,(0),null);
var or__36772__auto__ = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if(cljs.core.truth_(or__36772__auto__)){
return or__36772__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq40492){
var G__40493 = cljs.core.first.call(null,seq40492);
var seq40492__$1 = cljs.core.next.call(null,seq40492);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__40493,seq40492__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__37854__auto__ = [];
var len__37847__auto___40503 = arguments.length;
var i__37848__auto___40504 = (0);
while(true){
if((i__37848__auto___40504 < len__37847__auto___40503)){
args__37854__auto__.push((arguments[i__37848__auto___40504]));

var G__40505 = (i__37848__auto___40504 + (1));
i__37848__auto___40504 = G__40505;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((1) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37855__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq40501){
var G__40502 = cljs.core.first.call(null,seq40501);
var seq40501__$1 = cljs.core.next.call(null,seq40501);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40502,seq40501__$1);
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
var args__37854__auto__ = [];
var len__37847__auto___40512 = arguments.length;
var i__37848__auto___40513 = (0);
while(true){
if((i__37848__auto___40513 < len__37847__auto___40512)){
args__37854__auto__.push((arguments[i__37848__auto___40513]));

var G__40514 = (i__37848__auto___40513 + (1));
i__37848__auto___40513 = G__40514;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((1) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37855__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__40508){
var vec__40509 = p__40508;
var default$ = cljs.core.nth.call(null,vec__40509,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq40506){
var G__40507 = cljs.core.first.call(null,seq40506);
var seq40506__$1 = cljs.core.next.call(null,seq40506);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40507,seq40506__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__37854__auto__ = [];
var len__37847__auto___40521 = arguments.length;
var i__37848__auto___40522 = (0);
while(true){
if((i__37848__auto___40522 < len__37847__auto___40521)){
args__37854__auto__.push((arguments[i__37848__auto___40522]));

var G__40523 = (i__37848__auto___40522 + (1));
i__37848__auto___40522 = G__40523;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((1) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37855__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__40517){
var vec__40518 = p__40517;
var default$ = cljs.core.nth.call(null,vec__40518,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq40515){
var G__40516 = cljs.core.first.call(null,seq40515);
var seq40515__$1 = cljs.core.next.call(null,seq40515);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40516,seq40515__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__37854__auto__ = [];
var len__37847__auto___40528 = arguments.length;
var i__37848__auto___40529 = (0);
while(true){
if((i__37848__auto___40529 < len__37847__auto___40528)){
args__37854__auto__.push((arguments[i__37848__auto___40529]));

var G__40530 = (i__37848__auto___40529 + (1));
i__37848__auto___40529 = G__40530;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((2) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37855__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__40524_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__40524_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq40525){
var G__40526 = cljs.core.first.call(null,seq40525);
var seq40525__$1 = cljs.core.next.call(null,seq40525);
var G__40527 = cljs.core.first.call(null,seq40525__$1);
var seq40525__$2 = cljs.core.next.call(null,seq40525__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40526,G__40527,seq40525__$2);
});

/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__37854__auto__ = [];
var len__37847__auto___40535 = arguments.length;
var i__37848__auto___40536 = (0);
while(true){
if((i__37848__auto___40536 < len__37847__auto___40535)){
args__37854__auto__.push((arguments[i__37848__auto___40536]));

var G__40537 = (i__37848__auto___40536 + (1));
i__37848__auto___40536 = G__40537;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((2) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37855__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__40531_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__40531_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq40532){
var G__40533 = cljs.core.first.call(null,seq40532);
var seq40532__$1 = cljs.core.next.call(null,seq40532);
var G__40534 = cljs.core.first.call(null,seq40532__$1);
var seq40532__$2 = cljs.core.next.call(null,seq40532__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40533,G__40534,seq40532__$2);
});


//# sourceMappingURL=session.js.map