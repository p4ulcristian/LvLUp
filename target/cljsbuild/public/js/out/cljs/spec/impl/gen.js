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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__37378__auto__,writer__37379__auto__,opt__37380__auto__){
return cljs.core._write.call(null,writer__37379__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__37854__auto__ = [];
var len__37847__auto___41649 = arguments.length;
var i__37848__auto___41650 = (0);
while(true){
if((i__37848__auto___41650 < len__37847__auto___41649)){
args__37854__auto__.push((arguments[i__37848__auto___41650]));

var G__41651 = (i__37848__auto___41650 + (1));
i__37848__auto___41650 = G__41651;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq41648){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41648));
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
var args__37854__auto__ = [];
var len__37847__auto___41653 = arguments.length;
var i__37848__auto___41654 = (0);
while(true){
if((i__37848__auto___41654 < len__37847__auto___41653)){
args__37854__auto__.push((arguments[i__37848__auto___41654]));

var G__41655 = (i__37848__auto___41654 + (1));
i__37848__auto___41654 = G__41655;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq41652){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41652));
});

var g_QMARK__41656 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_41657 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__41656){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__41656))
,null));
var mkg_41658 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__41656,g_41657){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__41656,g_41657))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__41656,g_41657,mkg_41658){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__41656).call(null,x);
});})(g_QMARK__41656,g_41657,mkg_41658))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__41656,g_41657,mkg_41658){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_41658).call(null,gfn);
});})(g_QMARK__41656,g_41657,mkg_41658))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__41656,g_41657,mkg_41658){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_41657).call(null,generator);
});})(g_QMARK__41656,g_41657,mkg_41658))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__41620__auto___41677 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__41620__auto___41677){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41678 = arguments.length;
var i__37848__auto___41679 = (0);
while(true){
if((i__37848__auto___41679 < len__37847__auto___41678)){
args__37854__auto__.push((arguments[i__37848__auto___41679]));

var G__41680 = (i__37848__auto___41679 + (1));
i__37848__auto___41679 = G__41680;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});})(g__41620__auto___41677))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41620__auto___41677){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41620__auto___41677),args);
});})(g__41620__auto___41677))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__41620__auto___41677){
return (function (seq41659){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41659));
});})(g__41620__auto___41677))
;


var g__41620__auto___41681 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__41620__auto___41681){
return (function cljs$spec$impl$gen$list(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41682 = arguments.length;
var i__37848__auto___41683 = (0);
while(true){
if((i__37848__auto___41683 < len__37847__auto___41682)){
args__37854__auto__.push((arguments[i__37848__auto___41683]));

var G__41684 = (i__37848__auto___41683 + (1));
i__37848__auto___41683 = G__41684;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});})(g__41620__auto___41681))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41620__auto___41681){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41620__auto___41681),args);
});})(g__41620__auto___41681))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__41620__auto___41681){
return (function (seq41660){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41660));
});})(g__41620__auto___41681))
;


var g__41620__auto___41685 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__41620__auto___41685){
return (function cljs$spec$impl$gen$map(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41686 = arguments.length;
var i__37848__auto___41687 = (0);
while(true){
if((i__37848__auto___41687 < len__37847__auto___41686)){
args__37854__auto__.push((arguments[i__37848__auto___41687]));

var G__41688 = (i__37848__auto___41687 + (1));
i__37848__auto___41687 = G__41688;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});})(g__41620__auto___41685))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41620__auto___41685){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41620__auto___41685),args);
});})(g__41620__auto___41685))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__41620__auto___41685){
return (function (seq41661){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41661));
});})(g__41620__auto___41685))
;


var g__41620__auto___41689 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__41620__auto___41689){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41690 = arguments.length;
var i__37848__auto___41691 = (0);
while(true){
if((i__37848__auto___41691 < len__37847__auto___41690)){
args__37854__auto__.push((arguments[i__37848__auto___41691]));

var G__41692 = (i__37848__auto___41691 + (1));
i__37848__auto___41691 = G__41692;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});})(g__41620__auto___41689))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41620__auto___41689){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41620__auto___41689),args);
});})(g__41620__auto___41689))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__41620__auto___41689){
return (function (seq41662){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41662));
});})(g__41620__auto___41689))
;


var g__41620__auto___41693 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__41620__auto___41693){
return (function cljs$spec$impl$gen$set(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41694 = arguments.length;
var i__37848__auto___41695 = (0);
while(true){
if((i__37848__auto___41695 < len__37847__auto___41694)){
args__37854__auto__.push((arguments[i__37848__auto___41695]));

var G__41696 = (i__37848__auto___41695 + (1));
i__37848__auto___41695 = G__41696;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});})(g__41620__auto___41693))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41620__auto___41693){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41620__auto___41693),args);
});})(g__41620__auto___41693))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__41620__auto___41693){
return (function (seq41663){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41663));
});})(g__41620__auto___41693))
;


var g__41620__auto___41697 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__41620__auto___41697){
return (function cljs$spec$impl$gen$vector(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41698 = arguments.length;
var i__37848__auto___41699 = (0);
while(true){
if((i__37848__auto___41699 < len__37847__auto___41698)){
args__37854__auto__.push((arguments[i__37848__auto___41699]));

var G__41700 = (i__37848__auto___41699 + (1));
i__37848__auto___41699 = G__41700;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});})(g__41620__auto___41697))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41620__auto___41697){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41620__auto___41697),args);
});})(g__41620__auto___41697))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__41620__auto___41697){
return (function (seq41664){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41664));
});})(g__41620__auto___41697))
;


var g__41620__auto___41701 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__41620__auto___41701){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41702 = arguments.length;
var i__37848__auto___41703 = (0);
while(true){
if((i__37848__auto___41703 < len__37847__auto___41702)){
args__37854__auto__.push((arguments[i__37848__auto___41703]));

var G__41704 = (i__37848__auto___41703 + (1));
i__37848__auto___41703 = G__41704;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});})(g__41620__auto___41701))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41620__auto___41701){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41620__auto___41701),args);
});})(g__41620__auto___41701))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__41620__auto___41701){
return (function (seq41665){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41665));
});})(g__41620__auto___41701))
;


var g__41620__auto___41705 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__41620__auto___41705){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41706 = arguments.length;
var i__37848__auto___41707 = (0);
while(true){
if((i__37848__auto___41707 < len__37847__auto___41706)){
args__37854__auto__.push((arguments[i__37848__auto___41707]));

var G__41708 = (i__37848__auto___41707 + (1));
i__37848__auto___41707 = G__41708;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});})(g__41620__auto___41705))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41620__auto___41705){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41620__auto___41705),args);
});})(g__41620__auto___41705))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__41620__auto___41705){
return (function (seq41666){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41666));
});})(g__41620__auto___41705))
;


var g__41620__auto___41709 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__41620__auto___41709){
return (function cljs$spec$impl$gen$elements(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41710 = arguments.length;
var i__37848__auto___41711 = (0);
while(true){
if((i__37848__auto___41711 < len__37847__auto___41710)){
args__37854__auto__.push((arguments[i__37848__auto___41711]));

var G__41712 = (i__37848__auto___41711 + (1));
i__37848__auto___41711 = G__41712;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});})(g__41620__auto___41709))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41620__auto___41709){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41620__auto___41709),args);
});})(g__41620__auto___41709))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__41620__auto___41709){
return (function (seq41667){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41667));
});})(g__41620__auto___41709))
;


var g__41620__auto___41713 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__41620__auto___41713){
return (function cljs$spec$impl$gen$bind(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41714 = arguments.length;
var i__37848__auto___41715 = (0);
while(true){
if((i__37848__auto___41715 < len__37847__auto___41714)){
args__37854__auto__.push((arguments[i__37848__auto___41715]));

var G__41716 = (i__37848__auto___41715 + (1));
i__37848__auto___41715 = G__41716;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});})(g__41620__auto___41713))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41620__auto___41713){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41620__auto___41713),args);
});})(g__41620__auto___41713))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__41620__auto___41713){
return (function (seq41668){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41668));
});})(g__41620__auto___41713))
;


var g__41620__auto___41717 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__41620__auto___41717){
return (function cljs$spec$impl$gen$choose(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41718 = arguments.length;
var i__37848__auto___41719 = (0);
while(true){
if((i__37848__auto___41719 < len__37847__auto___41718)){
args__37854__auto__.push((arguments[i__37848__auto___41719]));

var G__41720 = (i__37848__auto___41719 + (1));
i__37848__auto___41719 = G__41720;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});})(g__41620__auto___41717))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41620__auto___41717){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41620__auto___41717),args);
});})(g__41620__auto___41717))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__41620__auto___41717){
return (function (seq41669){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41669));
});})(g__41620__auto___41717))
;


var g__41620__auto___41721 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__41620__auto___41721){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41722 = arguments.length;
var i__37848__auto___41723 = (0);
while(true){
if((i__37848__auto___41723 < len__37847__auto___41722)){
args__37854__auto__.push((arguments[i__37848__auto___41723]));

var G__41724 = (i__37848__auto___41723 + (1));
i__37848__auto___41723 = G__41724;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});})(g__41620__auto___41721))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41620__auto___41721){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41620__auto___41721),args);
});})(g__41620__auto___41721))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__41620__auto___41721){
return (function (seq41670){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41670));
});})(g__41620__auto___41721))
;


var g__41620__auto___41725 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__41620__auto___41725){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41726 = arguments.length;
var i__37848__auto___41727 = (0);
while(true){
if((i__37848__auto___41727 < len__37847__auto___41726)){
args__37854__auto__.push((arguments[i__37848__auto___41727]));

var G__41728 = (i__37848__auto___41727 + (1));
i__37848__auto___41727 = G__41728;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});})(g__41620__auto___41725))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41620__auto___41725){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41620__auto___41725),args);
});})(g__41620__auto___41725))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__41620__auto___41725){
return (function (seq41671){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41671));
});})(g__41620__auto___41725))
;


var g__41620__auto___41729 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__41620__auto___41729){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41730 = arguments.length;
var i__37848__auto___41731 = (0);
while(true){
if((i__37848__auto___41731 < len__37847__auto___41730)){
args__37854__auto__.push((arguments[i__37848__auto___41731]));

var G__41732 = (i__37848__auto___41731 + (1));
i__37848__auto___41731 = G__41732;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});})(g__41620__auto___41729))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41620__auto___41729){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41620__auto___41729),args);
});})(g__41620__auto___41729))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__41620__auto___41729){
return (function (seq41672){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41672));
});})(g__41620__auto___41729))
;


var g__41620__auto___41733 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__41620__auto___41733){
return (function cljs$spec$impl$gen$sample(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41734 = arguments.length;
var i__37848__auto___41735 = (0);
while(true){
if((i__37848__auto___41735 < len__37847__auto___41734)){
args__37854__auto__.push((arguments[i__37848__auto___41735]));

var G__41736 = (i__37848__auto___41735 + (1));
i__37848__auto___41735 = G__41736;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});})(g__41620__auto___41733))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41620__auto___41733){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41620__auto___41733),args);
});})(g__41620__auto___41733))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__41620__auto___41733){
return (function (seq41673){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41673));
});})(g__41620__auto___41733))
;


var g__41620__auto___41737 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__41620__auto___41737){
return (function cljs$spec$impl$gen$return(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41738 = arguments.length;
var i__37848__auto___41739 = (0);
while(true){
if((i__37848__auto___41739 < len__37847__auto___41738)){
args__37854__auto__.push((arguments[i__37848__auto___41739]));

var G__41740 = (i__37848__auto___41739 + (1));
i__37848__auto___41739 = G__41740;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});})(g__41620__auto___41737))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41620__auto___41737){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41620__auto___41737),args);
});})(g__41620__auto___41737))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__41620__auto___41737){
return (function (seq41674){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41674));
});})(g__41620__auto___41737))
;


var g__41620__auto___41741 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__41620__auto___41741){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41742 = arguments.length;
var i__37848__auto___41743 = (0);
while(true){
if((i__37848__auto___41743 < len__37847__auto___41742)){
args__37854__auto__.push((arguments[i__37848__auto___41743]));

var G__41744 = (i__37848__auto___41743 + (1));
i__37848__auto___41743 = G__41744;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});})(g__41620__auto___41741))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41620__auto___41741){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41620__auto___41741),args);
});})(g__41620__auto___41741))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__41620__auto___41741){
return (function (seq41675){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41675));
});})(g__41620__auto___41741))
;


var g__41620__auto___41745 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__41620__auto___41745){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41746 = arguments.length;
var i__37848__auto___41747 = (0);
while(true){
if((i__37848__auto___41747 < len__37847__auto___41746)){
args__37854__auto__.push((arguments[i__37848__auto___41747]));

var G__41748 = (i__37848__auto___41747 + (1));
i__37848__auto___41747 = G__41748;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});})(g__41620__auto___41745))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41620__auto___41745){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41620__auto___41745),args);
});})(g__41620__auto___41745))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__41620__auto___41745){
return (function (seq41676){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41676));
});})(g__41620__auto___41745))
;

var g__41633__auto___41770 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__41633__auto___41770){
return (function cljs$spec$impl$gen$any(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41771 = arguments.length;
var i__37848__auto___41772 = (0);
while(true){
if((i__37848__auto___41772 < len__37847__auto___41771)){
args__37854__auto__.push((arguments[i__37848__auto___41772]));

var G__41773 = (i__37848__auto___41772 + (1));
i__37848__auto___41772 = G__41773;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});})(g__41633__auto___41770))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41633__auto___41770){
return (function (args){
return cljs.core.deref.call(null,g__41633__auto___41770);
});})(g__41633__auto___41770))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__41633__auto___41770){
return (function (seq41749){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41749));
});})(g__41633__auto___41770))
;


var g__41633__auto___41774 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__41633__auto___41774){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41775 = arguments.length;
var i__37848__auto___41776 = (0);
while(true){
if((i__37848__auto___41776 < len__37847__auto___41775)){
args__37854__auto__.push((arguments[i__37848__auto___41776]));

var G__41777 = (i__37848__auto___41776 + (1));
i__37848__auto___41776 = G__41777;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});})(g__41633__auto___41774))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41633__auto___41774){
return (function (args){
return cljs.core.deref.call(null,g__41633__auto___41774);
});})(g__41633__auto___41774))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__41633__auto___41774){
return (function (seq41750){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41750));
});})(g__41633__auto___41774))
;


var g__41633__auto___41778 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__41633__auto___41778){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41779 = arguments.length;
var i__37848__auto___41780 = (0);
while(true){
if((i__37848__auto___41780 < len__37847__auto___41779)){
args__37854__auto__.push((arguments[i__37848__auto___41780]));

var G__41781 = (i__37848__auto___41780 + (1));
i__37848__auto___41780 = G__41781;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});})(g__41633__auto___41778))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41633__auto___41778){
return (function (args){
return cljs.core.deref.call(null,g__41633__auto___41778);
});})(g__41633__auto___41778))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__41633__auto___41778){
return (function (seq41751){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41751));
});})(g__41633__auto___41778))
;


var g__41633__auto___41782 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__41633__auto___41782){
return (function cljs$spec$impl$gen$char(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41783 = arguments.length;
var i__37848__auto___41784 = (0);
while(true){
if((i__37848__auto___41784 < len__37847__auto___41783)){
args__37854__auto__.push((arguments[i__37848__auto___41784]));

var G__41785 = (i__37848__auto___41784 + (1));
i__37848__auto___41784 = G__41785;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});})(g__41633__auto___41782))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41633__auto___41782){
return (function (args){
return cljs.core.deref.call(null,g__41633__auto___41782);
});})(g__41633__auto___41782))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__41633__auto___41782){
return (function (seq41752){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41752));
});})(g__41633__auto___41782))
;


var g__41633__auto___41786 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__41633__auto___41786){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41787 = arguments.length;
var i__37848__auto___41788 = (0);
while(true){
if((i__37848__auto___41788 < len__37847__auto___41787)){
args__37854__auto__.push((arguments[i__37848__auto___41788]));

var G__41789 = (i__37848__auto___41788 + (1));
i__37848__auto___41788 = G__41789;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});})(g__41633__auto___41786))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41633__auto___41786){
return (function (args){
return cljs.core.deref.call(null,g__41633__auto___41786);
});})(g__41633__auto___41786))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__41633__auto___41786){
return (function (seq41753){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41753));
});})(g__41633__auto___41786))
;


var g__41633__auto___41790 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__41633__auto___41790){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41791 = arguments.length;
var i__37848__auto___41792 = (0);
while(true){
if((i__37848__auto___41792 < len__37847__auto___41791)){
args__37854__auto__.push((arguments[i__37848__auto___41792]));

var G__41793 = (i__37848__auto___41792 + (1));
i__37848__auto___41792 = G__41793;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});})(g__41633__auto___41790))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41633__auto___41790){
return (function (args){
return cljs.core.deref.call(null,g__41633__auto___41790);
});})(g__41633__auto___41790))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__41633__auto___41790){
return (function (seq41754){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41754));
});})(g__41633__auto___41790))
;


var g__41633__auto___41794 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__41633__auto___41794){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41795 = arguments.length;
var i__37848__auto___41796 = (0);
while(true){
if((i__37848__auto___41796 < len__37847__auto___41795)){
args__37854__auto__.push((arguments[i__37848__auto___41796]));

var G__41797 = (i__37848__auto___41796 + (1));
i__37848__auto___41796 = G__41797;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});})(g__41633__auto___41794))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41633__auto___41794){
return (function (args){
return cljs.core.deref.call(null,g__41633__auto___41794);
});})(g__41633__auto___41794))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__41633__auto___41794){
return (function (seq41755){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41755));
});})(g__41633__auto___41794))
;


var g__41633__auto___41798 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__41633__auto___41798){
return (function cljs$spec$impl$gen$double(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41799 = arguments.length;
var i__37848__auto___41800 = (0);
while(true){
if((i__37848__auto___41800 < len__37847__auto___41799)){
args__37854__auto__.push((arguments[i__37848__auto___41800]));

var G__41801 = (i__37848__auto___41800 + (1));
i__37848__auto___41800 = G__41801;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});})(g__41633__auto___41798))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41633__auto___41798){
return (function (args){
return cljs.core.deref.call(null,g__41633__auto___41798);
});})(g__41633__auto___41798))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__41633__auto___41798){
return (function (seq41756){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41756));
});})(g__41633__auto___41798))
;


var g__41633__auto___41802 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__41633__auto___41802){
return (function cljs$spec$impl$gen$int(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41803 = arguments.length;
var i__37848__auto___41804 = (0);
while(true){
if((i__37848__auto___41804 < len__37847__auto___41803)){
args__37854__auto__.push((arguments[i__37848__auto___41804]));

var G__41805 = (i__37848__auto___41804 + (1));
i__37848__auto___41804 = G__41805;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});})(g__41633__auto___41802))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41633__auto___41802){
return (function (args){
return cljs.core.deref.call(null,g__41633__auto___41802);
});})(g__41633__auto___41802))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__41633__auto___41802){
return (function (seq41757){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41757));
});})(g__41633__auto___41802))
;


var g__41633__auto___41806 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__41633__auto___41806){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41807 = arguments.length;
var i__37848__auto___41808 = (0);
while(true){
if((i__37848__auto___41808 < len__37847__auto___41807)){
args__37854__auto__.push((arguments[i__37848__auto___41808]));

var G__41809 = (i__37848__auto___41808 + (1));
i__37848__auto___41808 = G__41809;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});})(g__41633__auto___41806))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41633__auto___41806){
return (function (args){
return cljs.core.deref.call(null,g__41633__auto___41806);
});})(g__41633__auto___41806))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__41633__auto___41806){
return (function (seq41758){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41758));
});})(g__41633__auto___41806))
;


var g__41633__auto___41810 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__41633__auto___41810){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41811 = arguments.length;
var i__37848__auto___41812 = (0);
while(true){
if((i__37848__auto___41812 < len__37847__auto___41811)){
args__37854__auto__.push((arguments[i__37848__auto___41812]));

var G__41813 = (i__37848__auto___41812 + (1));
i__37848__auto___41812 = G__41813;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});})(g__41633__auto___41810))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41633__auto___41810){
return (function (args){
return cljs.core.deref.call(null,g__41633__auto___41810);
});})(g__41633__auto___41810))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__41633__auto___41810){
return (function (seq41759){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41759));
});})(g__41633__auto___41810))
;


var g__41633__auto___41814 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__41633__auto___41814){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41815 = arguments.length;
var i__37848__auto___41816 = (0);
while(true){
if((i__37848__auto___41816 < len__37847__auto___41815)){
args__37854__auto__.push((arguments[i__37848__auto___41816]));

var G__41817 = (i__37848__auto___41816 + (1));
i__37848__auto___41816 = G__41817;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});})(g__41633__auto___41814))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41633__auto___41814){
return (function (args){
return cljs.core.deref.call(null,g__41633__auto___41814);
});})(g__41633__auto___41814))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__41633__auto___41814){
return (function (seq41760){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41760));
});})(g__41633__auto___41814))
;


var g__41633__auto___41818 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__41633__auto___41818){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41819 = arguments.length;
var i__37848__auto___41820 = (0);
while(true){
if((i__37848__auto___41820 < len__37847__auto___41819)){
args__37854__auto__.push((arguments[i__37848__auto___41820]));

var G__41821 = (i__37848__auto___41820 + (1));
i__37848__auto___41820 = G__41821;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});})(g__41633__auto___41818))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41633__auto___41818){
return (function (args){
return cljs.core.deref.call(null,g__41633__auto___41818);
});})(g__41633__auto___41818))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__41633__auto___41818){
return (function (seq41761){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41761));
});})(g__41633__auto___41818))
;


var g__41633__auto___41822 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__41633__auto___41822){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41823 = arguments.length;
var i__37848__auto___41824 = (0);
while(true){
if((i__37848__auto___41824 < len__37847__auto___41823)){
args__37854__auto__.push((arguments[i__37848__auto___41824]));

var G__41825 = (i__37848__auto___41824 + (1));
i__37848__auto___41824 = G__41825;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});})(g__41633__auto___41822))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41633__auto___41822){
return (function (args){
return cljs.core.deref.call(null,g__41633__auto___41822);
});})(g__41633__auto___41822))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__41633__auto___41822){
return (function (seq41762){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41762));
});})(g__41633__auto___41822))
;


var g__41633__auto___41826 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__41633__auto___41826){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41827 = arguments.length;
var i__37848__auto___41828 = (0);
while(true){
if((i__37848__auto___41828 < len__37847__auto___41827)){
args__37854__auto__.push((arguments[i__37848__auto___41828]));

var G__41829 = (i__37848__auto___41828 + (1));
i__37848__auto___41828 = G__41829;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});})(g__41633__auto___41826))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41633__auto___41826){
return (function (args){
return cljs.core.deref.call(null,g__41633__auto___41826);
});})(g__41633__auto___41826))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__41633__auto___41826){
return (function (seq41763){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41763));
});})(g__41633__auto___41826))
;


var g__41633__auto___41830 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__41633__auto___41830){
return (function cljs$spec$impl$gen$string(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41831 = arguments.length;
var i__37848__auto___41832 = (0);
while(true){
if((i__37848__auto___41832 < len__37847__auto___41831)){
args__37854__auto__.push((arguments[i__37848__auto___41832]));

var G__41833 = (i__37848__auto___41832 + (1));
i__37848__auto___41832 = G__41833;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});})(g__41633__auto___41830))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41633__auto___41830){
return (function (args){
return cljs.core.deref.call(null,g__41633__auto___41830);
});})(g__41633__auto___41830))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__41633__auto___41830){
return (function (seq41764){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41764));
});})(g__41633__auto___41830))
;


var g__41633__auto___41834 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__41633__auto___41834){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41835 = arguments.length;
var i__37848__auto___41836 = (0);
while(true){
if((i__37848__auto___41836 < len__37847__auto___41835)){
args__37854__auto__.push((arguments[i__37848__auto___41836]));

var G__41837 = (i__37848__auto___41836 + (1));
i__37848__auto___41836 = G__41837;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});})(g__41633__auto___41834))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41633__auto___41834){
return (function (args){
return cljs.core.deref.call(null,g__41633__auto___41834);
});})(g__41633__auto___41834))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__41633__auto___41834){
return (function (seq41765){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41765));
});})(g__41633__auto___41834))
;


var g__41633__auto___41838 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__41633__auto___41838){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41839 = arguments.length;
var i__37848__auto___41840 = (0);
while(true){
if((i__37848__auto___41840 < len__37847__auto___41839)){
args__37854__auto__.push((arguments[i__37848__auto___41840]));

var G__41841 = (i__37848__auto___41840 + (1));
i__37848__auto___41840 = G__41841;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});})(g__41633__auto___41838))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41633__auto___41838){
return (function (args){
return cljs.core.deref.call(null,g__41633__auto___41838);
});})(g__41633__auto___41838))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__41633__auto___41838){
return (function (seq41766){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41766));
});})(g__41633__auto___41838))
;


var g__41633__auto___41842 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__41633__auto___41842){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41843 = arguments.length;
var i__37848__auto___41844 = (0);
while(true){
if((i__37848__auto___41844 < len__37847__auto___41843)){
args__37854__auto__.push((arguments[i__37848__auto___41844]));

var G__41845 = (i__37848__auto___41844 + (1));
i__37848__auto___41844 = G__41845;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});})(g__41633__auto___41842))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41633__auto___41842){
return (function (args){
return cljs.core.deref.call(null,g__41633__auto___41842);
});})(g__41633__auto___41842))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__41633__auto___41842){
return (function (seq41767){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41767));
});})(g__41633__auto___41842))
;


var g__41633__auto___41846 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__41633__auto___41846){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41847 = arguments.length;
var i__37848__auto___41848 = (0);
while(true){
if((i__37848__auto___41848 < len__37847__auto___41847)){
args__37854__auto__.push((arguments[i__37848__auto___41848]));

var G__41849 = (i__37848__auto___41848 + (1));
i__37848__auto___41848 = G__41849;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});})(g__41633__auto___41846))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41633__auto___41846){
return (function (args){
return cljs.core.deref.call(null,g__41633__auto___41846);
});})(g__41633__auto___41846))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__41633__auto___41846){
return (function (seq41768){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41768));
});})(g__41633__auto___41846))
;


var g__41633__auto___41850 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__41633__auto___41850){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41851 = arguments.length;
var i__37848__auto___41852 = (0);
while(true){
if((i__37848__auto___41852 < len__37847__auto___41851)){
args__37854__auto__.push((arguments[i__37848__auto___41852]));

var G__41853 = (i__37848__auto___41852 + (1));
i__37848__auto___41852 = G__41853;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});})(g__41633__auto___41850))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41633__auto___41850){
return (function (args){
return cljs.core.deref.call(null,g__41633__auto___41850);
});})(g__41633__auto___41850))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__41633__auto___41850){
return (function (seq41769){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41769));
});})(g__41633__auto___41850))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__37854__auto__ = [];
var len__37847__auto___41856 = arguments.length;
var i__37848__auto___41857 = (0);
while(true){
if((i__37848__auto___41857 < len__37847__auto___41856)){
args__37854__auto__.push((arguments[i__37848__auto___41857]));

var G__41858 = (i__37848__auto___41857 + (1));
i__37848__auto___41857 = G__41858;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__41854_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__41854_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq41855){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41855));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__41859_SHARP_){
return (new Date(p1__41859_SHARP_));
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