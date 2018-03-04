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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__37884__auto__ = [];
var len__37877__auto___52642 = arguments.length;
var i__37878__auto___52643 = (0);
while(true){
if((i__37878__auto___52643 < len__37877__auto___52642)){
args__37884__auto__.push((arguments[i__37878__auto___52643]));

var G__52644 = (i__37878__auto___52643 + (1));
i__37878__auto___52643 = G__52644;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq52641){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52641));
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
var args__37884__auto__ = [];
var len__37877__auto___52646 = arguments.length;
var i__37878__auto___52647 = (0);
while(true){
if((i__37878__auto___52647 < len__37877__auto___52646)){
args__37884__auto__.push((arguments[i__37878__auto___52647]));

var G__52648 = (i__37878__auto___52647 + (1));
i__37878__auto___52647 = G__52648;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq52645){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52645));
});

var g_QMARK__52649 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_52650 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__52649){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__52649))
,null));
var mkg_52651 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__52649,g_52650){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__52649,g_52650))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__52649,g_52650,mkg_52651){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__52649).call(null,x);
});})(g_QMARK__52649,g_52650,mkg_52651))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__52649,g_52650,mkg_52651){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_52651).call(null,gfn);
});})(g_QMARK__52649,g_52650,mkg_52651))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__52649,g_52650,mkg_52651){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_52650).call(null,generator);
});})(g_QMARK__52649,g_52650,mkg_52651))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__52613__auto___52670 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__52613__auto___52670){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52671 = arguments.length;
var i__37878__auto___52672 = (0);
while(true){
if((i__37878__auto___52672 < len__37877__auto___52671)){
args__37884__auto__.push((arguments[i__37878__auto___52672]));

var G__52673 = (i__37878__auto___52672 + (1));
i__37878__auto___52672 = G__52673;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});})(g__52613__auto___52670))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52613__auto___52670){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52613__auto___52670),args);
});})(g__52613__auto___52670))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__52613__auto___52670){
return (function (seq52652){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52652));
});})(g__52613__auto___52670))
;


var g__52613__auto___52674 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__52613__auto___52674){
return (function cljs$spec$impl$gen$list(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52675 = arguments.length;
var i__37878__auto___52676 = (0);
while(true){
if((i__37878__auto___52676 < len__37877__auto___52675)){
args__37884__auto__.push((arguments[i__37878__auto___52676]));

var G__52677 = (i__37878__auto___52676 + (1));
i__37878__auto___52676 = G__52677;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});})(g__52613__auto___52674))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52613__auto___52674){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52613__auto___52674),args);
});})(g__52613__auto___52674))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__52613__auto___52674){
return (function (seq52653){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52653));
});})(g__52613__auto___52674))
;


var g__52613__auto___52678 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__52613__auto___52678){
return (function cljs$spec$impl$gen$map(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52679 = arguments.length;
var i__37878__auto___52680 = (0);
while(true){
if((i__37878__auto___52680 < len__37877__auto___52679)){
args__37884__auto__.push((arguments[i__37878__auto___52680]));

var G__52681 = (i__37878__auto___52680 + (1));
i__37878__auto___52680 = G__52681;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});})(g__52613__auto___52678))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52613__auto___52678){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52613__auto___52678),args);
});})(g__52613__auto___52678))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__52613__auto___52678){
return (function (seq52654){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52654));
});})(g__52613__auto___52678))
;


var g__52613__auto___52682 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__52613__auto___52682){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52683 = arguments.length;
var i__37878__auto___52684 = (0);
while(true){
if((i__37878__auto___52684 < len__37877__auto___52683)){
args__37884__auto__.push((arguments[i__37878__auto___52684]));

var G__52685 = (i__37878__auto___52684 + (1));
i__37878__auto___52684 = G__52685;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});})(g__52613__auto___52682))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52613__auto___52682){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52613__auto___52682),args);
});})(g__52613__auto___52682))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__52613__auto___52682){
return (function (seq52655){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52655));
});})(g__52613__auto___52682))
;


var g__52613__auto___52686 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__52613__auto___52686){
return (function cljs$spec$impl$gen$set(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52687 = arguments.length;
var i__37878__auto___52688 = (0);
while(true){
if((i__37878__auto___52688 < len__37877__auto___52687)){
args__37884__auto__.push((arguments[i__37878__auto___52688]));

var G__52689 = (i__37878__auto___52688 + (1));
i__37878__auto___52688 = G__52689;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});})(g__52613__auto___52686))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52613__auto___52686){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52613__auto___52686),args);
});})(g__52613__auto___52686))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__52613__auto___52686){
return (function (seq52656){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52656));
});})(g__52613__auto___52686))
;


var g__52613__auto___52690 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__52613__auto___52690){
return (function cljs$spec$impl$gen$vector(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52691 = arguments.length;
var i__37878__auto___52692 = (0);
while(true){
if((i__37878__auto___52692 < len__37877__auto___52691)){
args__37884__auto__.push((arguments[i__37878__auto___52692]));

var G__52693 = (i__37878__auto___52692 + (1));
i__37878__auto___52692 = G__52693;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});})(g__52613__auto___52690))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52613__auto___52690){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52613__auto___52690),args);
});})(g__52613__auto___52690))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__52613__auto___52690){
return (function (seq52657){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52657));
});})(g__52613__auto___52690))
;


var g__52613__auto___52694 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__52613__auto___52694){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52695 = arguments.length;
var i__37878__auto___52696 = (0);
while(true){
if((i__37878__auto___52696 < len__37877__auto___52695)){
args__37884__auto__.push((arguments[i__37878__auto___52696]));

var G__52697 = (i__37878__auto___52696 + (1));
i__37878__auto___52696 = G__52697;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});})(g__52613__auto___52694))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52613__auto___52694){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52613__auto___52694),args);
});})(g__52613__auto___52694))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__52613__auto___52694){
return (function (seq52658){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52658));
});})(g__52613__auto___52694))
;


var g__52613__auto___52698 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__52613__auto___52698){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52699 = arguments.length;
var i__37878__auto___52700 = (0);
while(true){
if((i__37878__auto___52700 < len__37877__auto___52699)){
args__37884__auto__.push((arguments[i__37878__auto___52700]));

var G__52701 = (i__37878__auto___52700 + (1));
i__37878__auto___52700 = G__52701;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});})(g__52613__auto___52698))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52613__auto___52698){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52613__auto___52698),args);
});})(g__52613__auto___52698))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__52613__auto___52698){
return (function (seq52659){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52659));
});})(g__52613__auto___52698))
;


var g__52613__auto___52702 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__52613__auto___52702){
return (function cljs$spec$impl$gen$elements(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52703 = arguments.length;
var i__37878__auto___52704 = (0);
while(true){
if((i__37878__auto___52704 < len__37877__auto___52703)){
args__37884__auto__.push((arguments[i__37878__auto___52704]));

var G__52705 = (i__37878__auto___52704 + (1));
i__37878__auto___52704 = G__52705;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});})(g__52613__auto___52702))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52613__auto___52702){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52613__auto___52702),args);
});})(g__52613__auto___52702))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__52613__auto___52702){
return (function (seq52660){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52660));
});})(g__52613__auto___52702))
;


var g__52613__auto___52706 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__52613__auto___52706){
return (function cljs$spec$impl$gen$bind(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52707 = arguments.length;
var i__37878__auto___52708 = (0);
while(true){
if((i__37878__auto___52708 < len__37877__auto___52707)){
args__37884__auto__.push((arguments[i__37878__auto___52708]));

var G__52709 = (i__37878__auto___52708 + (1));
i__37878__auto___52708 = G__52709;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});})(g__52613__auto___52706))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52613__auto___52706){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52613__auto___52706),args);
});})(g__52613__auto___52706))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__52613__auto___52706){
return (function (seq52661){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52661));
});})(g__52613__auto___52706))
;


var g__52613__auto___52710 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__52613__auto___52710){
return (function cljs$spec$impl$gen$choose(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52711 = arguments.length;
var i__37878__auto___52712 = (0);
while(true){
if((i__37878__auto___52712 < len__37877__auto___52711)){
args__37884__auto__.push((arguments[i__37878__auto___52712]));

var G__52713 = (i__37878__auto___52712 + (1));
i__37878__auto___52712 = G__52713;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});})(g__52613__auto___52710))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52613__auto___52710){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52613__auto___52710),args);
});})(g__52613__auto___52710))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__52613__auto___52710){
return (function (seq52662){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52662));
});})(g__52613__auto___52710))
;


var g__52613__auto___52714 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__52613__auto___52714){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52715 = arguments.length;
var i__37878__auto___52716 = (0);
while(true){
if((i__37878__auto___52716 < len__37877__auto___52715)){
args__37884__auto__.push((arguments[i__37878__auto___52716]));

var G__52717 = (i__37878__auto___52716 + (1));
i__37878__auto___52716 = G__52717;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});})(g__52613__auto___52714))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52613__auto___52714){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52613__auto___52714),args);
});})(g__52613__auto___52714))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__52613__auto___52714){
return (function (seq52663){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52663));
});})(g__52613__auto___52714))
;


var g__52613__auto___52718 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__52613__auto___52718){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52719 = arguments.length;
var i__37878__auto___52720 = (0);
while(true){
if((i__37878__auto___52720 < len__37877__auto___52719)){
args__37884__auto__.push((arguments[i__37878__auto___52720]));

var G__52721 = (i__37878__auto___52720 + (1));
i__37878__auto___52720 = G__52721;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});})(g__52613__auto___52718))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52613__auto___52718){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52613__auto___52718),args);
});})(g__52613__auto___52718))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__52613__auto___52718){
return (function (seq52664){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52664));
});})(g__52613__auto___52718))
;


var g__52613__auto___52722 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__52613__auto___52722){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52723 = arguments.length;
var i__37878__auto___52724 = (0);
while(true){
if((i__37878__auto___52724 < len__37877__auto___52723)){
args__37884__auto__.push((arguments[i__37878__auto___52724]));

var G__52725 = (i__37878__auto___52724 + (1));
i__37878__auto___52724 = G__52725;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});})(g__52613__auto___52722))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52613__auto___52722){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52613__auto___52722),args);
});})(g__52613__auto___52722))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__52613__auto___52722){
return (function (seq52665){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52665));
});})(g__52613__auto___52722))
;


var g__52613__auto___52726 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__52613__auto___52726){
return (function cljs$spec$impl$gen$sample(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52727 = arguments.length;
var i__37878__auto___52728 = (0);
while(true){
if((i__37878__auto___52728 < len__37877__auto___52727)){
args__37884__auto__.push((arguments[i__37878__auto___52728]));

var G__52729 = (i__37878__auto___52728 + (1));
i__37878__auto___52728 = G__52729;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});})(g__52613__auto___52726))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52613__auto___52726){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52613__auto___52726),args);
});})(g__52613__auto___52726))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__52613__auto___52726){
return (function (seq52666){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52666));
});})(g__52613__auto___52726))
;


var g__52613__auto___52730 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__52613__auto___52730){
return (function cljs$spec$impl$gen$return(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52731 = arguments.length;
var i__37878__auto___52732 = (0);
while(true){
if((i__37878__auto___52732 < len__37877__auto___52731)){
args__37884__auto__.push((arguments[i__37878__auto___52732]));

var G__52733 = (i__37878__auto___52732 + (1));
i__37878__auto___52732 = G__52733;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});})(g__52613__auto___52730))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52613__auto___52730){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52613__auto___52730),args);
});})(g__52613__auto___52730))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__52613__auto___52730){
return (function (seq52667){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52667));
});})(g__52613__auto___52730))
;


var g__52613__auto___52734 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__52613__auto___52734){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52735 = arguments.length;
var i__37878__auto___52736 = (0);
while(true){
if((i__37878__auto___52736 < len__37877__auto___52735)){
args__37884__auto__.push((arguments[i__37878__auto___52736]));

var G__52737 = (i__37878__auto___52736 + (1));
i__37878__auto___52736 = G__52737;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});})(g__52613__auto___52734))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52613__auto___52734){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52613__auto___52734),args);
});})(g__52613__auto___52734))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__52613__auto___52734){
return (function (seq52668){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52668));
});})(g__52613__auto___52734))
;


var g__52613__auto___52738 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__52613__auto___52738){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52739 = arguments.length;
var i__37878__auto___52740 = (0);
while(true){
if((i__37878__auto___52740 < len__37877__auto___52739)){
args__37884__auto__.push((arguments[i__37878__auto___52740]));

var G__52741 = (i__37878__auto___52740 + (1));
i__37878__auto___52740 = G__52741;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});})(g__52613__auto___52738))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52613__auto___52738){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52613__auto___52738),args);
});})(g__52613__auto___52738))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__52613__auto___52738){
return (function (seq52669){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52669));
});})(g__52613__auto___52738))
;

var g__52626__auto___52763 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__52626__auto___52763){
return (function cljs$spec$impl$gen$any(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52764 = arguments.length;
var i__37878__auto___52765 = (0);
while(true){
if((i__37878__auto___52765 < len__37877__auto___52764)){
args__37884__auto__.push((arguments[i__37878__auto___52765]));

var G__52766 = (i__37878__auto___52765 + (1));
i__37878__auto___52765 = G__52766;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});})(g__52626__auto___52763))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52626__auto___52763){
return (function (args){
return cljs.core.deref.call(null,g__52626__auto___52763);
});})(g__52626__auto___52763))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__52626__auto___52763){
return (function (seq52742){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52742));
});})(g__52626__auto___52763))
;


var g__52626__auto___52767 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__52626__auto___52767){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52768 = arguments.length;
var i__37878__auto___52769 = (0);
while(true){
if((i__37878__auto___52769 < len__37877__auto___52768)){
args__37884__auto__.push((arguments[i__37878__auto___52769]));

var G__52770 = (i__37878__auto___52769 + (1));
i__37878__auto___52769 = G__52770;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});})(g__52626__auto___52767))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52626__auto___52767){
return (function (args){
return cljs.core.deref.call(null,g__52626__auto___52767);
});})(g__52626__auto___52767))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__52626__auto___52767){
return (function (seq52743){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52743));
});})(g__52626__auto___52767))
;


var g__52626__auto___52771 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__52626__auto___52771){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52772 = arguments.length;
var i__37878__auto___52773 = (0);
while(true){
if((i__37878__auto___52773 < len__37877__auto___52772)){
args__37884__auto__.push((arguments[i__37878__auto___52773]));

var G__52774 = (i__37878__auto___52773 + (1));
i__37878__auto___52773 = G__52774;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});})(g__52626__auto___52771))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52626__auto___52771){
return (function (args){
return cljs.core.deref.call(null,g__52626__auto___52771);
});})(g__52626__auto___52771))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__52626__auto___52771){
return (function (seq52744){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52744));
});})(g__52626__auto___52771))
;


var g__52626__auto___52775 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__52626__auto___52775){
return (function cljs$spec$impl$gen$char(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52776 = arguments.length;
var i__37878__auto___52777 = (0);
while(true){
if((i__37878__auto___52777 < len__37877__auto___52776)){
args__37884__auto__.push((arguments[i__37878__auto___52777]));

var G__52778 = (i__37878__auto___52777 + (1));
i__37878__auto___52777 = G__52778;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});})(g__52626__auto___52775))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52626__auto___52775){
return (function (args){
return cljs.core.deref.call(null,g__52626__auto___52775);
});})(g__52626__auto___52775))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__52626__auto___52775){
return (function (seq52745){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52745));
});})(g__52626__auto___52775))
;


var g__52626__auto___52779 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__52626__auto___52779){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52780 = arguments.length;
var i__37878__auto___52781 = (0);
while(true){
if((i__37878__auto___52781 < len__37877__auto___52780)){
args__37884__auto__.push((arguments[i__37878__auto___52781]));

var G__52782 = (i__37878__auto___52781 + (1));
i__37878__auto___52781 = G__52782;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});})(g__52626__auto___52779))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52626__auto___52779){
return (function (args){
return cljs.core.deref.call(null,g__52626__auto___52779);
});})(g__52626__auto___52779))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__52626__auto___52779){
return (function (seq52746){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52746));
});})(g__52626__auto___52779))
;


var g__52626__auto___52783 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__52626__auto___52783){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52784 = arguments.length;
var i__37878__auto___52785 = (0);
while(true){
if((i__37878__auto___52785 < len__37877__auto___52784)){
args__37884__auto__.push((arguments[i__37878__auto___52785]));

var G__52786 = (i__37878__auto___52785 + (1));
i__37878__auto___52785 = G__52786;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});})(g__52626__auto___52783))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52626__auto___52783){
return (function (args){
return cljs.core.deref.call(null,g__52626__auto___52783);
});})(g__52626__auto___52783))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__52626__auto___52783){
return (function (seq52747){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52747));
});})(g__52626__auto___52783))
;


var g__52626__auto___52787 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__52626__auto___52787){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52788 = arguments.length;
var i__37878__auto___52789 = (0);
while(true){
if((i__37878__auto___52789 < len__37877__auto___52788)){
args__37884__auto__.push((arguments[i__37878__auto___52789]));

var G__52790 = (i__37878__auto___52789 + (1));
i__37878__auto___52789 = G__52790;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});})(g__52626__auto___52787))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52626__auto___52787){
return (function (args){
return cljs.core.deref.call(null,g__52626__auto___52787);
});})(g__52626__auto___52787))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__52626__auto___52787){
return (function (seq52748){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52748));
});})(g__52626__auto___52787))
;


var g__52626__auto___52791 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__52626__auto___52791){
return (function cljs$spec$impl$gen$double(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52792 = arguments.length;
var i__37878__auto___52793 = (0);
while(true){
if((i__37878__auto___52793 < len__37877__auto___52792)){
args__37884__auto__.push((arguments[i__37878__auto___52793]));

var G__52794 = (i__37878__auto___52793 + (1));
i__37878__auto___52793 = G__52794;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});})(g__52626__auto___52791))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52626__auto___52791){
return (function (args){
return cljs.core.deref.call(null,g__52626__auto___52791);
});})(g__52626__auto___52791))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__52626__auto___52791){
return (function (seq52749){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52749));
});})(g__52626__auto___52791))
;


var g__52626__auto___52795 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__52626__auto___52795){
return (function cljs$spec$impl$gen$int(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52796 = arguments.length;
var i__37878__auto___52797 = (0);
while(true){
if((i__37878__auto___52797 < len__37877__auto___52796)){
args__37884__auto__.push((arguments[i__37878__auto___52797]));

var G__52798 = (i__37878__auto___52797 + (1));
i__37878__auto___52797 = G__52798;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});})(g__52626__auto___52795))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52626__auto___52795){
return (function (args){
return cljs.core.deref.call(null,g__52626__auto___52795);
});})(g__52626__auto___52795))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__52626__auto___52795){
return (function (seq52750){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52750));
});})(g__52626__auto___52795))
;


var g__52626__auto___52799 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__52626__auto___52799){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52800 = arguments.length;
var i__37878__auto___52801 = (0);
while(true){
if((i__37878__auto___52801 < len__37877__auto___52800)){
args__37884__auto__.push((arguments[i__37878__auto___52801]));

var G__52802 = (i__37878__auto___52801 + (1));
i__37878__auto___52801 = G__52802;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});})(g__52626__auto___52799))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52626__auto___52799){
return (function (args){
return cljs.core.deref.call(null,g__52626__auto___52799);
});})(g__52626__auto___52799))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__52626__auto___52799){
return (function (seq52751){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52751));
});})(g__52626__auto___52799))
;


var g__52626__auto___52803 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__52626__auto___52803){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52804 = arguments.length;
var i__37878__auto___52805 = (0);
while(true){
if((i__37878__auto___52805 < len__37877__auto___52804)){
args__37884__auto__.push((arguments[i__37878__auto___52805]));

var G__52806 = (i__37878__auto___52805 + (1));
i__37878__auto___52805 = G__52806;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});})(g__52626__auto___52803))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52626__auto___52803){
return (function (args){
return cljs.core.deref.call(null,g__52626__auto___52803);
});})(g__52626__auto___52803))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__52626__auto___52803){
return (function (seq52752){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52752));
});})(g__52626__auto___52803))
;


var g__52626__auto___52807 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__52626__auto___52807){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52808 = arguments.length;
var i__37878__auto___52809 = (0);
while(true){
if((i__37878__auto___52809 < len__37877__auto___52808)){
args__37884__auto__.push((arguments[i__37878__auto___52809]));

var G__52810 = (i__37878__auto___52809 + (1));
i__37878__auto___52809 = G__52810;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});})(g__52626__auto___52807))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52626__auto___52807){
return (function (args){
return cljs.core.deref.call(null,g__52626__auto___52807);
});})(g__52626__auto___52807))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__52626__auto___52807){
return (function (seq52753){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52753));
});})(g__52626__auto___52807))
;


var g__52626__auto___52811 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__52626__auto___52811){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52812 = arguments.length;
var i__37878__auto___52813 = (0);
while(true){
if((i__37878__auto___52813 < len__37877__auto___52812)){
args__37884__auto__.push((arguments[i__37878__auto___52813]));

var G__52814 = (i__37878__auto___52813 + (1));
i__37878__auto___52813 = G__52814;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});})(g__52626__auto___52811))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52626__auto___52811){
return (function (args){
return cljs.core.deref.call(null,g__52626__auto___52811);
});})(g__52626__auto___52811))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__52626__auto___52811){
return (function (seq52754){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52754));
});})(g__52626__auto___52811))
;


var g__52626__auto___52815 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__52626__auto___52815){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52816 = arguments.length;
var i__37878__auto___52817 = (0);
while(true){
if((i__37878__auto___52817 < len__37877__auto___52816)){
args__37884__auto__.push((arguments[i__37878__auto___52817]));

var G__52818 = (i__37878__auto___52817 + (1));
i__37878__auto___52817 = G__52818;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});})(g__52626__auto___52815))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52626__auto___52815){
return (function (args){
return cljs.core.deref.call(null,g__52626__auto___52815);
});})(g__52626__auto___52815))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__52626__auto___52815){
return (function (seq52755){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52755));
});})(g__52626__auto___52815))
;


var g__52626__auto___52819 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__52626__auto___52819){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52820 = arguments.length;
var i__37878__auto___52821 = (0);
while(true){
if((i__37878__auto___52821 < len__37877__auto___52820)){
args__37884__auto__.push((arguments[i__37878__auto___52821]));

var G__52822 = (i__37878__auto___52821 + (1));
i__37878__auto___52821 = G__52822;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});})(g__52626__auto___52819))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52626__auto___52819){
return (function (args){
return cljs.core.deref.call(null,g__52626__auto___52819);
});})(g__52626__auto___52819))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__52626__auto___52819){
return (function (seq52756){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52756));
});})(g__52626__auto___52819))
;


var g__52626__auto___52823 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__52626__auto___52823){
return (function cljs$spec$impl$gen$string(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52824 = arguments.length;
var i__37878__auto___52825 = (0);
while(true){
if((i__37878__auto___52825 < len__37877__auto___52824)){
args__37884__auto__.push((arguments[i__37878__auto___52825]));

var G__52826 = (i__37878__auto___52825 + (1));
i__37878__auto___52825 = G__52826;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});})(g__52626__auto___52823))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52626__auto___52823){
return (function (args){
return cljs.core.deref.call(null,g__52626__auto___52823);
});})(g__52626__auto___52823))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__52626__auto___52823){
return (function (seq52757){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52757));
});})(g__52626__auto___52823))
;


var g__52626__auto___52827 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__52626__auto___52827){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52828 = arguments.length;
var i__37878__auto___52829 = (0);
while(true){
if((i__37878__auto___52829 < len__37877__auto___52828)){
args__37884__auto__.push((arguments[i__37878__auto___52829]));

var G__52830 = (i__37878__auto___52829 + (1));
i__37878__auto___52829 = G__52830;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});})(g__52626__auto___52827))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52626__auto___52827){
return (function (args){
return cljs.core.deref.call(null,g__52626__auto___52827);
});})(g__52626__auto___52827))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__52626__auto___52827){
return (function (seq52758){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52758));
});})(g__52626__auto___52827))
;


var g__52626__auto___52831 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__52626__auto___52831){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52832 = arguments.length;
var i__37878__auto___52833 = (0);
while(true){
if((i__37878__auto___52833 < len__37877__auto___52832)){
args__37884__auto__.push((arguments[i__37878__auto___52833]));

var G__52834 = (i__37878__auto___52833 + (1));
i__37878__auto___52833 = G__52834;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});})(g__52626__auto___52831))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52626__auto___52831){
return (function (args){
return cljs.core.deref.call(null,g__52626__auto___52831);
});})(g__52626__auto___52831))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__52626__auto___52831){
return (function (seq52759){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52759));
});})(g__52626__auto___52831))
;


var g__52626__auto___52835 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__52626__auto___52835){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52836 = arguments.length;
var i__37878__auto___52837 = (0);
while(true){
if((i__37878__auto___52837 < len__37877__auto___52836)){
args__37884__auto__.push((arguments[i__37878__auto___52837]));

var G__52838 = (i__37878__auto___52837 + (1));
i__37878__auto___52837 = G__52838;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});})(g__52626__auto___52835))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52626__auto___52835){
return (function (args){
return cljs.core.deref.call(null,g__52626__auto___52835);
});})(g__52626__auto___52835))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__52626__auto___52835){
return (function (seq52760){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52760));
});})(g__52626__auto___52835))
;


var g__52626__auto___52839 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__52626__auto___52839){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52840 = arguments.length;
var i__37878__auto___52841 = (0);
while(true){
if((i__37878__auto___52841 < len__37877__auto___52840)){
args__37884__auto__.push((arguments[i__37878__auto___52841]));

var G__52842 = (i__37878__auto___52841 + (1));
i__37878__auto___52841 = G__52842;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});})(g__52626__auto___52839))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52626__auto___52839){
return (function (args){
return cljs.core.deref.call(null,g__52626__auto___52839);
});})(g__52626__auto___52839))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__52626__auto___52839){
return (function (seq52761){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52761));
});})(g__52626__auto___52839))
;


var g__52626__auto___52843 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__52626__auto___52843){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52844 = arguments.length;
var i__37878__auto___52845 = (0);
while(true){
if((i__37878__auto___52845 < len__37877__auto___52844)){
args__37884__auto__.push((arguments[i__37878__auto___52845]));

var G__52846 = (i__37878__auto___52845 + (1));
i__37878__auto___52845 = G__52846;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});})(g__52626__auto___52843))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52626__auto___52843){
return (function (args){
return cljs.core.deref.call(null,g__52626__auto___52843);
});})(g__52626__auto___52843))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__52626__auto___52843){
return (function (seq52762){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52762));
});})(g__52626__auto___52843))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__37884__auto__ = [];
var len__37877__auto___52849 = arguments.length;
var i__37878__auto___52850 = (0);
while(true){
if((i__37878__auto___52850 < len__37877__auto___52849)){
args__37884__auto__.push((arguments[i__37878__auto___52850]));

var G__52851 = (i__37878__auto___52850 + (1));
i__37878__auto___52850 = G__52851;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__52847_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__52847_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq52848){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52848));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__52852_SHARP_){
return (new Date(p1__52852_SHARP_));
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