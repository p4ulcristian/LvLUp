// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__37382__auto__,writer__37383__auto__,opt__37384__auto__){
return cljs.core._write.call(null,writer__37383__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52739 = arguments.length;
var i__37852__auto___52740 = (0);
while(true){
if((i__37852__auto___52740 < len__37851__auto___52739)){
args__37858__auto__.push((arguments[i__37852__auto___52740]));

var G__52741 = (i__37852__auto___52740 + (1));
i__37852__auto___52740 = G__52741;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq52738){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52738));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52743 = arguments.length;
var i__37852__auto___52744 = (0);
while(true){
if((i__37852__auto___52744 < len__37851__auto___52743)){
args__37858__auto__.push((arguments[i__37852__auto___52744]));

var G__52745 = (i__37852__auto___52744 + (1));
i__37852__auto___52744 = G__52745;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq52742){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52742));
});

var g_QMARK__52746 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_52747 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__52746){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__52746))
,null));
var mkg_52748 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__52746,g_52747){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__52746,g_52747))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__52746,g_52747,mkg_52748){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__52746).call(null,x);
});})(g_QMARK__52746,g_52747,mkg_52748))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__52746,g_52747,mkg_52748){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_52748).call(null,gfn);
});})(g_QMARK__52746,g_52747,mkg_52748))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__52746,g_52747,mkg_52748){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_52747).call(null,generator);
});})(g_QMARK__52746,g_52747,mkg_52748))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__52710__auto___52767 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__52710__auto___52767){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52768 = arguments.length;
var i__37852__auto___52769 = (0);
while(true){
if((i__37852__auto___52769 < len__37851__auto___52768)){
args__37858__auto__.push((arguments[i__37852__auto___52769]));

var G__52770 = (i__37852__auto___52769 + (1));
i__37852__auto___52769 = G__52770;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});})(g__52710__auto___52767))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52710__auto___52767){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52710__auto___52767),args);
});})(g__52710__auto___52767))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__52710__auto___52767){
return (function (seq52749){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52749));
});})(g__52710__auto___52767))
;


var g__52710__auto___52771 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__52710__auto___52771){
return (function cljs$spec$impl$gen$list(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52772 = arguments.length;
var i__37852__auto___52773 = (0);
while(true){
if((i__37852__auto___52773 < len__37851__auto___52772)){
args__37858__auto__.push((arguments[i__37852__auto___52773]));

var G__52774 = (i__37852__auto___52773 + (1));
i__37852__auto___52773 = G__52774;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});})(g__52710__auto___52771))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52710__auto___52771){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52710__auto___52771),args);
});})(g__52710__auto___52771))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__52710__auto___52771){
return (function (seq52750){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52750));
});})(g__52710__auto___52771))
;


var g__52710__auto___52775 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__52710__auto___52775){
return (function cljs$spec$impl$gen$map(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52776 = arguments.length;
var i__37852__auto___52777 = (0);
while(true){
if((i__37852__auto___52777 < len__37851__auto___52776)){
args__37858__auto__.push((arguments[i__37852__auto___52777]));

var G__52778 = (i__37852__auto___52777 + (1));
i__37852__auto___52777 = G__52778;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});})(g__52710__auto___52775))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52710__auto___52775){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52710__auto___52775),args);
});})(g__52710__auto___52775))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__52710__auto___52775){
return (function (seq52751){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52751));
});})(g__52710__auto___52775))
;


var g__52710__auto___52779 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__52710__auto___52779){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52780 = arguments.length;
var i__37852__auto___52781 = (0);
while(true){
if((i__37852__auto___52781 < len__37851__auto___52780)){
args__37858__auto__.push((arguments[i__37852__auto___52781]));

var G__52782 = (i__37852__auto___52781 + (1));
i__37852__auto___52781 = G__52782;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});})(g__52710__auto___52779))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52710__auto___52779){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52710__auto___52779),args);
});})(g__52710__auto___52779))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__52710__auto___52779){
return (function (seq52752){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52752));
});})(g__52710__auto___52779))
;


var g__52710__auto___52783 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__52710__auto___52783){
return (function cljs$spec$impl$gen$set(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52784 = arguments.length;
var i__37852__auto___52785 = (0);
while(true){
if((i__37852__auto___52785 < len__37851__auto___52784)){
args__37858__auto__.push((arguments[i__37852__auto___52785]));

var G__52786 = (i__37852__auto___52785 + (1));
i__37852__auto___52785 = G__52786;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});})(g__52710__auto___52783))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52710__auto___52783){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52710__auto___52783),args);
});})(g__52710__auto___52783))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__52710__auto___52783){
return (function (seq52753){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52753));
});})(g__52710__auto___52783))
;


var g__52710__auto___52787 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__52710__auto___52787){
return (function cljs$spec$impl$gen$vector(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52788 = arguments.length;
var i__37852__auto___52789 = (0);
while(true){
if((i__37852__auto___52789 < len__37851__auto___52788)){
args__37858__auto__.push((arguments[i__37852__auto___52789]));

var G__52790 = (i__37852__auto___52789 + (1));
i__37852__auto___52789 = G__52790;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});})(g__52710__auto___52787))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52710__auto___52787){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52710__auto___52787),args);
});})(g__52710__auto___52787))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__52710__auto___52787){
return (function (seq52754){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52754));
});})(g__52710__auto___52787))
;


var g__52710__auto___52791 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__52710__auto___52791){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52792 = arguments.length;
var i__37852__auto___52793 = (0);
while(true){
if((i__37852__auto___52793 < len__37851__auto___52792)){
args__37858__auto__.push((arguments[i__37852__auto___52793]));

var G__52794 = (i__37852__auto___52793 + (1));
i__37852__auto___52793 = G__52794;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});})(g__52710__auto___52791))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52710__auto___52791){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52710__auto___52791),args);
});})(g__52710__auto___52791))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__52710__auto___52791){
return (function (seq52755){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52755));
});})(g__52710__auto___52791))
;


var g__52710__auto___52795 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__52710__auto___52795){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52796 = arguments.length;
var i__37852__auto___52797 = (0);
while(true){
if((i__37852__auto___52797 < len__37851__auto___52796)){
args__37858__auto__.push((arguments[i__37852__auto___52797]));

var G__52798 = (i__37852__auto___52797 + (1));
i__37852__auto___52797 = G__52798;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});})(g__52710__auto___52795))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52710__auto___52795){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52710__auto___52795),args);
});})(g__52710__auto___52795))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__52710__auto___52795){
return (function (seq52756){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52756));
});})(g__52710__auto___52795))
;


var g__52710__auto___52799 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__52710__auto___52799){
return (function cljs$spec$impl$gen$elements(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52800 = arguments.length;
var i__37852__auto___52801 = (0);
while(true){
if((i__37852__auto___52801 < len__37851__auto___52800)){
args__37858__auto__.push((arguments[i__37852__auto___52801]));

var G__52802 = (i__37852__auto___52801 + (1));
i__37852__auto___52801 = G__52802;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});})(g__52710__auto___52799))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52710__auto___52799){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52710__auto___52799),args);
});})(g__52710__auto___52799))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__52710__auto___52799){
return (function (seq52757){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52757));
});})(g__52710__auto___52799))
;


var g__52710__auto___52803 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__52710__auto___52803){
return (function cljs$spec$impl$gen$bind(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52804 = arguments.length;
var i__37852__auto___52805 = (0);
while(true){
if((i__37852__auto___52805 < len__37851__auto___52804)){
args__37858__auto__.push((arguments[i__37852__auto___52805]));

var G__52806 = (i__37852__auto___52805 + (1));
i__37852__auto___52805 = G__52806;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});})(g__52710__auto___52803))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52710__auto___52803){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52710__auto___52803),args);
});})(g__52710__auto___52803))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__52710__auto___52803){
return (function (seq52758){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52758));
});})(g__52710__auto___52803))
;


var g__52710__auto___52807 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__52710__auto___52807){
return (function cljs$spec$impl$gen$choose(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52808 = arguments.length;
var i__37852__auto___52809 = (0);
while(true){
if((i__37852__auto___52809 < len__37851__auto___52808)){
args__37858__auto__.push((arguments[i__37852__auto___52809]));

var G__52810 = (i__37852__auto___52809 + (1));
i__37852__auto___52809 = G__52810;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});})(g__52710__auto___52807))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52710__auto___52807){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52710__auto___52807),args);
});})(g__52710__auto___52807))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__52710__auto___52807){
return (function (seq52759){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52759));
});})(g__52710__auto___52807))
;


var g__52710__auto___52811 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__52710__auto___52811){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52812 = arguments.length;
var i__37852__auto___52813 = (0);
while(true){
if((i__37852__auto___52813 < len__37851__auto___52812)){
args__37858__auto__.push((arguments[i__37852__auto___52813]));

var G__52814 = (i__37852__auto___52813 + (1));
i__37852__auto___52813 = G__52814;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});})(g__52710__auto___52811))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52710__auto___52811){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52710__auto___52811),args);
});})(g__52710__auto___52811))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__52710__auto___52811){
return (function (seq52760){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52760));
});})(g__52710__auto___52811))
;


var g__52710__auto___52815 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__52710__auto___52815){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52816 = arguments.length;
var i__37852__auto___52817 = (0);
while(true){
if((i__37852__auto___52817 < len__37851__auto___52816)){
args__37858__auto__.push((arguments[i__37852__auto___52817]));

var G__52818 = (i__37852__auto___52817 + (1));
i__37852__auto___52817 = G__52818;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});})(g__52710__auto___52815))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52710__auto___52815){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52710__auto___52815),args);
});})(g__52710__auto___52815))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__52710__auto___52815){
return (function (seq52761){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52761));
});})(g__52710__auto___52815))
;


var g__52710__auto___52819 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__52710__auto___52819){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52820 = arguments.length;
var i__37852__auto___52821 = (0);
while(true){
if((i__37852__auto___52821 < len__37851__auto___52820)){
args__37858__auto__.push((arguments[i__37852__auto___52821]));

var G__52822 = (i__37852__auto___52821 + (1));
i__37852__auto___52821 = G__52822;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});})(g__52710__auto___52819))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52710__auto___52819){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52710__auto___52819),args);
});})(g__52710__auto___52819))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__52710__auto___52819){
return (function (seq52762){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52762));
});})(g__52710__auto___52819))
;


var g__52710__auto___52823 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__52710__auto___52823){
return (function cljs$spec$impl$gen$sample(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52824 = arguments.length;
var i__37852__auto___52825 = (0);
while(true){
if((i__37852__auto___52825 < len__37851__auto___52824)){
args__37858__auto__.push((arguments[i__37852__auto___52825]));

var G__52826 = (i__37852__auto___52825 + (1));
i__37852__auto___52825 = G__52826;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});})(g__52710__auto___52823))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52710__auto___52823){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52710__auto___52823),args);
});})(g__52710__auto___52823))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__52710__auto___52823){
return (function (seq52763){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52763));
});})(g__52710__auto___52823))
;


var g__52710__auto___52827 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__52710__auto___52827){
return (function cljs$spec$impl$gen$return(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52828 = arguments.length;
var i__37852__auto___52829 = (0);
while(true){
if((i__37852__auto___52829 < len__37851__auto___52828)){
args__37858__auto__.push((arguments[i__37852__auto___52829]));

var G__52830 = (i__37852__auto___52829 + (1));
i__37852__auto___52829 = G__52830;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});})(g__52710__auto___52827))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52710__auto___52827){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52710__auto___52827),args);
});})(g__52710__auto___52827))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__52710__auto___52827){
return (function (seq52764){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52764));
});})(g__52710__auto___52827))
;


var g__52710__auto___52831 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__52710__auto___52831){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52832 = arguments.length;
var i__37852__auto___52833 = (0);
while(true){
if((i__37852__auto___52833 < len__37851__auto___52832)){
args__37858__auto__.push((arguments[i__37852__auto___52833]));

var G__52834 = (i__37852__auto___52833 + (1));
i__37852__auto___52833 = G__52834;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});})(g__52710__auto___52831))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52710__auto___52831){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52710__auto___52831),args);
});})(g__52710__auto___52831))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__52710__auto___52831){
return (function (seq52765){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52765));
});})(g__52710__auto___52831))
;


var g__52710__auto___52835 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__52710__auto___52835){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52836 = arguments.length;
var i__37852__auto___52837 = (0);
while(true){
if((i__37852__auto___52837 < len__37851__auto___52836)){
args__37858__auto__.push((arguments[i__37852__auto___52837]));

var G__52838 = (i__37852__auto___52837 + (1));
i__37852__auto___52837 = G__52838;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});})(g__52710__auto___52835))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52710__auto___52835){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52710__auto___52835),args);
});})(g__52710__auto___52835))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__52710__auto___52835){
return (function (seq52766){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52766));
});})(g__52710__auto___52835))
;

var g__52723__auto___52860 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__52723__auto___52860){
return (function cljs$spec$impl$gen$any(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52861 = arguments.length;
var i__37852__auto___52862 = (0);
while(true){
if((i__37852__auto___52862 < len__37851__auto___52861)){
args__37858__auto__.push((arguments[i__37852__auto___52862]));

var G__52863 = (i__37852__auto___52862 + (1));
i__37852__auto___52862 = G__52863;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});})(g__52723__auto___52860))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52723__auto___52860){
return (function (args){
return cljs.core.deref.call(null,g__52723__auto___52860);
});})(g__52723__auto___52860))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__52723__auto___52860){
return (function (seq52839){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52839));
});})(g__52723__auto___52860))
;


var g__52723__auto___52864 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__52723__auto___52864){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52865 = arguments.length;
var i__37852__auto___52866 = (0);
while(true){
if((i__37852__auto___52866 < len__37851__auto___52865)){
args__37858__auto__.push((arguments[i__37852__auto___52866]));

var G__52867 = (i__37852__auto___52866 + (1));
i__37852__auto___52866 = G__52867;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});})(g__52723__auto___52864))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52723__auto___52864){
return (function (args){
return cljs.core.deref.call(null,g__52723__auto___52864);
});})(g__52723__auto___52864))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__52723__auto___52864){
return (function (seq52840){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52840));
});})(g__52723__auto___52864))
;


var g__52723__auto___52868 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__52723__auto___52868){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52869 = arguments.length;
var i__37852__auto___52870 = (0);
while(true){
if((i__37852__auto___52870 < len__37851__auto___52869)){
args__37858__auto__.push((arguments[i__37852__auto___52870]));

var G__52871 = (i__37852__auto___52870 + (1));
i__37852__auto___52870 = G__52871;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});})(g__52723__auto___52868))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52723__auto___52868){
return (function (args){
return cljs.core.deref.call(null,g__52723__auto___52868);
});})(g__52723__auto___52868))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__52723__auto___52868){
return (function (seq52841){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52841));
});})(g__52723__auto___52868))
;


var g__52723__auto___52872 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__52723__auto___52872){
return (function cljs$spec$impl$gen$char(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52873 = arguments.length;
var i__37852__auto___52874 = (0);
while(true){
if((i__37852__auto___52874 < len__37851__auto___52873)){
args__37858__auto__.push((arguments[i__37852__auto___52874]));

var G__52875 = (i__37852__auto___52874 + (1));
i__37852__auto___52874 = G__52875;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});})(g__52723__auto___52872))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52723__auto___52872){
return (function (args){
return cljs.core.deref.call(null,g__52723__auto___52872);
});})(g__52723__auto___52872))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__52723__auto___52872){
return (function (seq52842){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52842));
});})(g__52723__auto___52872))
;


var g__52723__auto___52876 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__52723__auto___52876){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52877 = arguments.length;
var i__37852__auto___52878 = (0);
while(true){
if((i__37852__auto___52878 < len__37851__auto___52877)){
args__37858__auto__.push((arguments[i__37852__auto___52878]));

var G__52879 = (i__37852__auto___52878 + (1));
i__37852__auto___52878 = G__52879;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});})(g__52723__auto___52876))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52723__auto___52876){
return (function (args){
return cljs.core.deref.call(null,g__52723__auto___52876);
});})(g__52723__auto___52876))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__52723__auto___52876){
return (function (seq52843){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52843));
});})(g__52723__auto___52876))
;


var g__52723__auto___52880 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__52723__auto___52880){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52881 = arguments.length;
var i__37852__auto___52882 = (0);
while(true){
if((i__37852__auto___52882 < len__37851__auto___52881)){
args__37858__auto__.push((arguments[i__37852__auto___52882]));

var G__52883 = (i__37852__auto___52882 + (1));
i__37852__auto___52882 = G__52883;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});})(g__52723__auto___52880))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52723__auto___52880){
return (function (args){
return cljs.core.deref.call(null,g__52723__auto___52880);
});})(g__52723__auto___52880))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__52723__auto___52880){
return (function (seq52844){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52844));
});})(g__52723__auto___52880))
;


var g__52723__auto___52884 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__52723__auto___52884){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52885 = arguments.length;
var i__37852__auto___52886 = (0);
while(true){
if((i__37852__auto___52886 < len__37851__auto___52885)){
args__37858__auto__.push((arguments[i__37852__auto___52886]));

var G__52887 = (i__37852__auto___52886 + (1));
i__37852__auto___52886 = G__52887;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});})(g__52723__auto___52884))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52723__auto___52884){
return (function (args){
return cljs.core.deref.call(null,g__52723__auto___52884);
});})(g__52723__auto___52884))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__52723__auto___52884){
return (function (seq52845){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52845));
});})(g__52723__auto___52884))
;


var g__52723__auto___52888 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__52723__auto___52888){
return (function cljs$spec$impl$gen$double(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52889 = arguments.length;
var i__37852__auto___52890 = (0);
while(true){
if((i__37852__auto___52890 < len__37851__auto___52889)){
args__37858__auto__.push((arguments[i__37852__auto___52890]));

var G__52891 = (i__37852__auto___52890 + (1));
i__37852__auto___52890 = G__52891;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});})(g__52723__auto___52888))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52723__auto___52888){
return (function (args){
return cljs.core.deref.call(null,g__52723__auto___52888);
});})(g__52723__auto___52888))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__52723__auto___52888){
return (function (seq52846){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52846));
});})(g__52723__auto___52888))
;


var g__52723__auto___52892 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__52723__auto___52892){
return (function cljs$spec$impl$gen$int(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52893 = arguments.length;
var i__37852__auto___52894 = (0);
while(true){
if((i__37852__auto___52894 < len__37851__auto___52893)){
args__37858__auto__.push((arguments[i__37852__auto___52894]));

var G__52895 = (i__37852__auto___52894 + (1));
i__37852__auto___52894 = G__52895;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});})(g__52723__auto___52892))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52723__auto___52892){
return (function (args){
return cljs.core.deref.call(null,g__52723__auto___52892);
});})(g__52723__auto___52892))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__52723__auto___52892){
return (function (seq52847){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52847));
});})(g__52723__auto___52892))
;


var g__52723__auto___52896 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__52723__auto___52896){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52897 = arguments.length;
var i__37852__auto___52898 = (0);
while(true){
if((i__37852__auto___52898 < len__37851__auto___52897)){
args__37858__auto__.push((arguments[i__37852__auto___52898]));

var G__52899 = (i__37852__auto___52898 + (1));
i__37852__auto___52898 = G__52899;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});})(g__52723__auto___52896))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52723__auto___52896){
return (function (args){
return cljs.core.deref.call(null,g__52723__auto___52896);
});})(g__52723__auto___52896))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__52723__auto___52896){
return (function (seq52848){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52848));
});})(g__52723__auto___52896))
;


var g__52723__auto___52900 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__52723__auto___52900){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52901 = arguments.length;
var i__37852__auto___52902 = (0);
while(true){
if((i__37852__auto___52902 < len__37851__auto___52901)){
args__37858__auto__.push((arguments[i__37852__auto___52902]));

var G__52903 = (i__37852__auto___52902 + (1));
i__37852__auto___52902 = G__52903;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});})(g__52723__auto___52900))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52723__auto___52900){
return (function (args){
return cljs.core.deref.call(null,g__52723__auto___52900);
});})(g__52723__auto___52900))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__52723__auto___52900){
return (function (seq52849){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52849));
});})(g__52723__auto___52900))
;


var g__52723__auto___52904 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__52723__auto___52904){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52905 = arguments.length;
var i__37852__auto___52906 = (0);
while(true){
if((i__37852__auto___52906 < len__37851__auto___52905)){
args__37858__auto__.push((arguments[i__37852__auto___52906]));

var G__52907 = (i__37852__auto___52906 + (1));
i__37852__auto___52906 = G__52907;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});})(g__52723__auto___52904))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52723__auto___52904){
return (function (args){
return cljs.core.deref.call(null,g__52723__auto___52904);
});})(g__52723__auto___52904))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__52723__auto___52904){
return (function (seq52850){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52850));
});})(g__52723__auto___52904))
;


var g__52723__auto___52908 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__52723__auto___52908){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52909 = arguments.length;
var i__37852__auto___52910 = (0);
while(true){
if((i__37852__auto___52910 < len__37851__auto___52909)){
args__37858__auto__.push((arguments[i__37852__auto___52910]));

var G__52911 = (i__37852__auto___52910 + (1));
i__37852__auto___52910 = G__52911;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});})(g__52723__auto___52908))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52723__auto___52908){
return (function (args){
return cljs.core.deref.call(null,g__52723__auto___52908);
});})(g__52723__auto___52908))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__52723__auto___52908){
return (function (seq52851){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52851));
});})(g__52723__auto___52908))
;


var g__52723__auto___52912 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__52723__auto___52912){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52913 = arguments.length;
var i__37852__auto___52914 = (0);
while(true){
if((i__37852__auto___52914 < len__37851__auto___52913)){
args__37858__auto__.push((arguments[i__37852__auto___52914]));

var G__52915 = (i__37852__auto___52914 + (1));
i__37852__auto___52914 = G__52915;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});})(g__52723__auto___52912))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52723__auto___52912){
return (function (args){
return cljs.core.deref.call(null,g__52723__auto___52912);
});})(g__52723__auto___52912))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__52723__auto___52912){
return (function (seq52852){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52852));
});})(g__52723__auto___52912))
;


var g__52723__auto___52916 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__52723__auto___52916){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52917 = arguments.length;
var i__37852__auto___52918 = (0);
while(true){
if((i__37852__auto___52918 < len__37851__auto___52917)){
args__37858__auto__.push((arguments[i__37852__auto___52918]));

var G__52919 = (i__37852__auto___52918 + (1));
i__37852__auto___52918 = G__52919;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});})(g__52723__auto___52916))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52723__auto___52916){
return (function (args){
return cljs.core.deref.call(null,g__52723__auto___52916);
});})(g__52723__auto___52916))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__52723__auto___52916){
return (function (seq52853){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52853));
});})(g__52723__auto___52916))
;


var g__52723__auto___52920 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__52723__auto___52920){
return (function cljs$spec$impl$gen$string(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52921 = arguments.length;
var i__37852__auto___52922 = (0);
while(true){
if((i__37852__auto___52922 < len__37851__auto___52921)){
args__37858__auto__.push((arguments[i__37852__auto___52922]));

var G__52923 = (i__37852__auto___52922 + (1));
i__37852__auto___52922 = G__52923;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});})(g__52723__auto___52920))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52723__auto___52920){
return (function (args){
return cljs.core.deref.call(null,g__52723__auto___52920);
});})(g__52723__auto___52920))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__52723__auto___52920){
return (function (seq52854){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52854));
});})(g__52723__auto___52920))
;


var g__52723__auto___52924 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__52723__auto___52924){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52925 = arguments.length;
var i__37852__auto___52926 = (0);
while(true){
if((i__37852__auto___52926 < len__37851__auto___52925)){
args__37858__auto__.push((arguments[i__37852__auto___52926]));

var G__52927 = (i__37852__auto___52926 + (1));
i__37852__auto___52926 = G__52927;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});})(g__52723__auto___52924))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52723__auto___52924){
return (function (args){
return cljs.core.deref.call(null,g__52723__auto___52924);
});})(g__52723__auto___52924))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__52723__auto___52924){
return (function (seq52855){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52855));
});})(g__52723__auto___52924))
;


var g__52723__auto___52928 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__52723__auto___52928){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52929 = arguments.length;
var i__37852__auto___52930 = (0);
while(true){
if((i__37852__auto___52930 < len__37851__auto___52929)){
args__37858__auto__.push((arguments[i__37852__auto___52930]));

var G__52931 = (i__37852__auto___52930 + (1));
i__37852__auto___52930 = G__52931;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});})(g__52723__auto___52928))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52723__auto___52928){
return (function (args){
return cljs.core.deref.call(null,g__52723__auto___52928);
});})(g__52723__auto___52928))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__52723__auto___52928){
return (function (seq52856){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52856));
});})(g__52723__auto___52928))
;


var g__52723__auto___52932 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__52723__auto___52932){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52933 = arguments.length;
var i__37852__auto___52934 = (0);
while(true){
if((i__37852__auto___52934 < len__37851__auto___52933)){
args__37858__auto__.push((arguments[i__37852__auto___52934]));

var G__52935 = (i__37852__auto___52934 + (1));
i__37852__auto___52934 = G__52935;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});})(g__52723__auto___52932))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52723__auto___52932){
return (function (args){
return cljs.core.deref.call(null,g__52723__auto___52932);
});})(g__52723__auto___52932))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__52723__auto___52932){
return (function (seq52857){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52857));
});})(g__52723__auto___52932))
;


var g__52723__auto___52936 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__52723__auto___52936){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52937 = arguments.length;
var i__37852__auto___52938 = (0);
while(true){
if((i__37852__auto___52938 < len__37851__auto___52937)){
args__37858__auto__.push((arguments[i__37852__auto___52938]));

var G__52939 = (i__37852__auto___52938 + (1));
i__37852__auto___52938 = G__52939;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});})(g__52723__auto___52936))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52723__auto___52936){
return (function (args){
return cljs.core.deref.call(null,g__52723__auto___52936);
});})(g__52723__auto___52936))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__52723__auto___52936){
return (function (seq52858){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52858));
});})(g__52723__auto___52936))
;


var g__52723__auto___52940 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__52723__auto___52940){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52941 = arguments.length;
var i__37852__auto___52942 = (0);
while(true){
if((i__37852__auto___52942 < len__37851__auto___52941)){
args__37858__auto__.push((arguments[i__37852__auto___52942]));

var G__52943 = (i__37852__auto___52942 + (1));
i__37852__auto___52942 = G__52943;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});})(g__52723__auto___52940))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52723__auto___52940){
return (function (args){
return cljs.core.deref.call(null,g__52723__auto___52940);
});})(g__52723__auto___52940))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__52723__auto___52940){
return (function (seq52859){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52859));
});})(g__52723__auto___52940))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__37858__auto__ = [];
var len__37851__auto___52946 = arguments.length;
var i__37852__auto___52947 = (0);
while(true){
if((i__37852__auto___52947 < len__37851__auto___52946)){
args__37858__auto__.push((arguments[i__37852__auto___52947]));

var G__52948 = (i__37852__auto___52947 + (1));
i__37852__auto___52947 = G__52948;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__52944_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__52944_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq52945){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52945));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__52949_SHARP_){
return (new Date(p1__52949_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map