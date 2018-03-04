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
var args__37885__auto__ = [];
var len__37878__auto___52592 = arguments.length;
var i__37879__auto___52593 = (0);
while(true){
if((i__37879__auto___52593 < len__37878__auto___52592)){
args__37885__auto__.push((arguments[i__37879__auto___52593]));

var G__52594 = (i__37879__auto___52593 + (1));
i__37879__auto___52593 = G__52594;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq52591){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52591));
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
var args__37885__auto__ = [];
var len__37878__auto___52596 = arguments.length;
var i__37879__auto___52597 = (0);
while(true){
if((i__37879__auto___52597 < len__37878__auto___52596)){
args__37885__auto__.push((arguments[i__37879__auto___52597]));

var G__52598 = (i__37879__auto___52597 + (1));
i__37879__auto___52597 = G__52598;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq52595){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52595));
});

var g_QMARK__52599 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_52600 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__52599){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__52599))
,null));
var mkg_52601 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__52599,g_52600){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__52599,g_52600))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__52599,g_52600,mkg_52601){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__52599).call(null,x);
});})(g_QMARK__52599,g_52600,mkg_52601))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__52599,g_52600,mkg_52601){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_52601).call(null,gfn);
});})(g_QMARK__52599,g_52600,mkg_52601))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__52599,g_52600,mkg_52601){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_52600).call(null,generator);
});})(g_QMARK__52599,g_52600,mkg_52601))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__52563__auto___52620 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__52563__auto___52620){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52621 = arguments.length;
var i__37879__auto___52622 = (0);
while(true){
if((i__37879__auto___52622 < len__37878__auto___52621)){
args__37885__auto__.push((arguments[i__37879__auto___52622]));

var G__52623 = (i__37879__auto___52622 + (1));
i__37879__auto___52622 = G__52623;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});})(g__52563__auto___52620))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52563__auto___52620){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52563__auto___52620),args);
});})(g__52563__auto___52620))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__52563__auto___52620){
return (function (seq52602){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52602));
});})(g__52563__auto___52620))
;


var g__52563__auto___52624 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__52563__auto___52624){
return (function cljs$spec$impl$gen$list(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52625 = arguments.length;
var i__37879__auto___52626 = (0);
while(true){
if((i__37879__auto___52626 < len__37878__auto___52625)){
args__37885__auto__.push((arguments[i__37879__auto___52626]));

var G__52627 = (i__37879__auto___52626 + (1));
i__37879__auto___52626 = G__52627;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});})(g__52563__auto___52624))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52563__auto___52624){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52563__auto___52624),args);
});})(g__52563__auto___52624))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__52563__auto___52624){
return (function (seq52603){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52603));
});})(g__52563__auto___52624))
;


var g__52563__auto___52628 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__52563__auto___52628){
return (function cljs$spec$impl$gen$map(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52629 = arguments.length;
var i__37879__auto___52630 = (0);
while(true){
if((i__37879__auto___52630 < len__37878__auto___52629)){
args__37885__auto__.push((arguments[i__37879__auto___52630]));

var G__52631 = (i__37879__auto___52630 + (1));
i__37879__auto___52630 = G__52631;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});})(g__52563__auto___52628))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52563__auto___52628){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52563__auto___52628),args);
});})(g__52563__auto___52628))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__52563__auto___52628){
return (function (seq52604){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52604));
});})(g__52563__auto___52628))
;


var g__52563__auto___52632 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__52563__auto___52632){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52633 = arguments.length;
var i__37879__auto___52634 = (0);
while(true){
if((i__37879__auto___52634 < len__37878__auto___52633)){
args__37885__auto__.push((arguments[i__37879__auto___52634]));

var G__52635 = (i__37879__auto___52634 + (1));
i__37879__auto___52634 = G__52635;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});})(g__52563__auto___52632))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52563__auto___52632){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52563__auto___52632),args);
});})(g__52563__auto___52632))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__52563__auto___52632){
return (function (seq52605){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52605));
});})(g__52563__auto___52632))
;


var g__52563__auto___52636 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__52563__auto___52636){
return (function cljs$spec$impl$gen$set(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52637 = arguments.length;
var i__37879__auto___52638 = (0);
while(true){
if((i__37879__auto___52638 < len__37878__auto___52637)){
args__37885__auto__.push((arguments[i__37879__auto___52638]));

var G__52639 = (i__37879__auto___52638 + (1));
i__37879__auto___52638 = G__52639;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});})(g__52563__auto___52636))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52563__auto___52636){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52563__auto___52636),args);
});})(g__52563__auto___52636))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__52563__auto___52636){
return (function (seq52606){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52606));
});})(g__52563__auto___52636))
;


var g__52563__auto___52640 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__52563__auto___52640){
return (function cljs$spec$impl$gen$vector(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52641 = arguments.length;
var i__37879__auto___52642 = (0);
while(true){
if((i__37879__auto___52642 < len__37878__auto___52641)){
args__37885__auto__.push((arguments[i__37879__auto___52642]));

var G__52643 = (i__37879__auto___52642 + (1));
i__37879__auto___52642 = G__52643;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});})(g__52563__auto___52640))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52563__auto___52640){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52563__auto___52640),args);
});})(g__52563__auto___52640))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__52563__auto___52640){
return (function (seq52607){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52607));
});})(g__52563__auto___52640))
;


var g__52563__auto___52644 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__52563__auto___52644){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52645 = arguments.length;
var i__37879__auto___52646 = (0);
while(true){
if((i__37879__auto___52646 < len__37878__auto___52645)){
args__37885__auto__.push((arguments[i__37879__auto___52646]));

var G__52647 = (i__37879__auto___52646 + (1));
i__37879__auto___52646 = G__52647;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});})(g__52563__auto___52644))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52563__auto___52644){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52563__auto___52644),args);
});})(g__52563__auto___52644))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__52563__auto___52644){
return (function (seq52608){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52608));
});})(g__52563__auto___52644))
;


var g__52563__auto___52648 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__52563__auto___52648){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52649 = arguments.length;
var i__37879__auto___52650 = (0);
while(true){
if((i__37879__auto___52650 < len__37878__auto___52649)){
args__37885__auto__.push((arguments[i__37879__auto___52650]));

var G__52651 = (i__37879__auto___52650 + (1));
i__37879__auto___52650 = G__52651;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});})(g__52563__auto___52648))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52563__auto___52648){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52563__auto___52648),args);
});})(g__52563__auto___52648))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__52563__auto___52648){
return (function (seq52609){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52609));
});})(g__52563__auto___52648))
;


var g__52563__auto___52652 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__52563__auto___52652){
return (function cljs$spec$impl$gen$elements(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52653 = arguments.length;
var i__37879__auto___52654 = (0);
while(true){
if((i__37879__auto___52654 < len__37878__auto___52653)){
args__37885__auto__.push((arguments[i__37879__auto___52654]));

var G__52655 = (i__37879__auto___52654 + (1));
i__37879__auto___52654 = G__52655;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});})(g__52563__auto___52652))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52563__auto___52652){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52563__auto___52652),args);
});})(g__52563__auto___52652))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__52563__auto___52652){
return (function (seq52610){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52610));
});})(g__52563__auto___52652))
;


var g__52563__auto___52656 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__52563__auto___52656){
return (function cljs$spec$impl$gen$bind(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52657 = arguments.length;
var i__37879__auto___52658 = (0);
while(true){
if((i__37879__auto___52658 < len__37878__auto___52657)){
args__37885__auto__.push((arguments[i__37879__auto___52658]));

var G__52659 = (i__37879__auto___52658 + (1));
i__37879__auto___52658 = G__52659;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});})(g__52563__auto___52656))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52563__auto___52656){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52563__auto___52656),args);
});})(g__52563__auto___52656))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__52563__auto___52656){
return (function (seq52611){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52611));
});})(g__52563__auto___52656))
;


var g__52563__auto___52660 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__52563__auto___52660){
return (function cljs$spec$impl$gen$choose(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52661 = arguments.length;
var i__37879__auto___52662 = (0);
while(true){
if((i__37879__auto___52662 < len__37878__auto___52661)){
args__37885__auto__.push((arguments[i__37879__auto___52662]));

var G__52663 = (i__37879__auto___52662 + (1));
i__37879__auto___52662 = G__52663;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});})(g__52563__auto___52660))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52563__auto___52660){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52563__auto___52660),args);
});})(g__52563__auto___52660))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__52563__auto___52660){
return (function (seq52612){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52612));
});})(g__52563__auto___52660))
;


var g__52563__auto___52664 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__52563__auto___52664){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52665 = arguments.length;
var i__37879__auto___52666 = (0);
while(true){
if((i__37879__auto___52666 < len__37878__auto___52665)){
args__37885__auto__.push((arguments[i__37879__auto___52666]));

var G__52667 = (i__37879__auto___52666 + (1));
i__37879__auto___52666 = G__52667;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});})(g__52563__auto___52664))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52563__auto___52664){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52563__auto___52664),args);
});})(g__52563__auto___52664))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__52563__auto___52664){
return (function (seq52613){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52613));
});})(g__52563__auto___52664))
;


var g__52563__auto___52668 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__52563__auto___52668){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52669 = arguments.length;
var i__37879__auto___52670 = (0);
while(true){
if((i__37879__auto___52670 < len__37878__auto___52669)){
args__37885__auto__.push((arguments[i__37879__auto___52670]));

var G__52671 = (i__37879__auto___52670 + (1));
i__37879__auto___52670 = G__52671;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});})(g__52563__auto___52668))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52563__auto___52668){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52563__auto___52668),args);
});})(g__52563__auto___52668))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__52563__auto___52668){
return (function (seq52614){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52614));
});})(g__52563__auto___52668))
;


var g__52563__auto___52672 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__52563__auto___52672){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52673 = arguments.length;
var i__37879__auto___52674 = (0);
while(true){
if((i__37879__auto___52674 < len__37878__auto___52673)){
args__37885__auto__.push((arguments[i__37879__auto___52674]));

var G__52675 = (i__37879__auto___52674 + (1));
i__37879__auto___52674 = G__52675;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});})(g__52563__auto___52672))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52563__auto___52672){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52563__auto___52672),args);
});})(g__52563__auto___52672))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__52563__auto___52672){
return (function (seq52615){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52615));
});})(g__52563__auto___52672))
;


var g__52563__auto___52676 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__52563__auto___52676){
return (function cljs$spec$impl$gen$sample(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52677 = arguments.length;
var i__37879__auto___52678 = (0);
while(true){
if((i__37879__auto___52678 < len__37878__auto___52677)){
args__37885__auto__.push((arguments[i__37879__auto___52678]));

var G__52679 = (i__37879__auto___52678 + (1));
i__37879__auto___52678 = G__52679;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});})(g__52563__auto___52676))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52563__auto___52676){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52563__auto___52676),args);
});})(g__52563__auto___52676))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__52563__auto___52676){
return (function (seq52616){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52616));
});})(g__52563__auto___52676))
;


var g__52563__auto___52680 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__52563__auto___52680){
return (function cljs$spec$impl$gen$return(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52681 = arguments.length;
var i__37879__auto___52682 = (0);
while(true){
if((i__37879__auto___52682 < len__37878__auto___52681)){
args__37885__auto__.push((arguments[i__37879__auto___52682]));

var G__52683 = (i__37879__auto___52682 + (1));
i__37879__auto___52682 = G__52683;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});})(g__52563__auto___52680))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52563__auto___52680){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52563__auto___52680),args);
});})(g__52563__auto___52680))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__52563__auto___52680){
return (function (seq52617){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52617));
});})(g__52563__auto___52680))
;


var g__52563__auto___52684 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__52563__auto___52684){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52685 = arguments.length;
var i__37879__auto___52686 = (0);
while(true){
if((i__37879__auto___52686 < len__37878__auto___52685)){
args__37885__auto__.push((arguments[i__37879__auto___52686]));

var G__52687 = (i__37879__auto___52686 + (1));
i__37879__auto___52686 = G__52687;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});})(g__52563__auto___52684))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52563__auto___52684){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52563__auto___52684),args);
});})(g__52563__auto___52684))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__52563__auto___52684){
return (function (seq52618){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52618));
});})(g__52563__auto___52684))
;


var g__52563__auto___52688 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__52563__auto___52688){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52689 = arguments.length;
var i__37879__auto___52690 = (0);
while(true){
if((i__37879__auto___52690 < len__37878__auto___52689)){
args__37885__auto__.push((arguments[i__37879__auto___52690]));

var G__52691 = (i__37879__auto___52690 + (1));
i__37879__auto___52690 = G__52691;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});})(g__52563__auto___52688))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52563__auto___52688){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52563__auto___52688),args);
});})(g__52563__auto___52688))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__52563__auto___52688){
return (function (seq52619){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52619));
});})(g__52563__auto___52688))
;

var g__52576__auto___52713 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__52576__auto___52713){
return (function cljs$spec$impl$gen$any(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52714 = arguments.length;
var i__37879__auto___52715 = (0);
while(true){
if((i__37879__auto___52715 < len__37878__auto___52714)){
args__37885__auto__.push((arguments[i__37879__auto___52715]));

var G__52716 = (i__37879__auto___52715 + (1));
i__37879__auto___52715 = G__52716;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});})(g__52576__auto___52713))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52576__auto___52713){
return (function (args){
return cljs.core.deref.call(null,g__52576__auto___52713);
});})(g__52576__auto___52713))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__52576__auto___52713){
return (function (seq52692){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52692));
});})(g__52576__auto___52713))
;


var g__52576__auto___52717 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__52576__auto___52717){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52718 = arguments.length;
var i__37879__auto___52719 = (0);
while(true){
if((i__37879__auto___52719 < len__37878__auto___52718)){
args__37885__auto__.push((arguments[i__37879__auto___52719]));

var G__52720 = (i__37879__auto___52719 + (1));
i__37879__auto___52719 = G__52720;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});})(g__52576__auto___52717))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52576__auto___52717){
return (function (args){
return cljs.core.deref.call(null,g__52576__auto___52717);
});})(g__52576__auto___52717))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__52576__auto___52717){
return (function (seq52693){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52693));
});})(g__52576__auto___52717))
;


var g__52576__auto___52721 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__52576__auto___52721){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52722 = arguments.length;
var i__37879__auto___52723 = (0);
while(true){
if((i__37879__auto___52723 < len__37878__auto___52722)){
args__37885__auto__.push((arguments[i__37879__auto___52723]));

var G__52724 = (i__37879__auto___52723 + (1));
i__37879__auto___52723 = G__52724;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});})(g__52576__auto___52721))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52576__auto___52721){
return (function (args){
return cljs.core.deref.call(null,g__52576__auto___52721);
});})(g__52576__auto___52721))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__52576__auto___52721){
return (function (seq52694){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52694));
});})(g__52576__auto___52721))
;


var g__52576__auto___52725 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__52576__auto___52725){
return (function cljs$spec$impl$gen$char(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52726 = arguments.length;
var i__37879__auto___52727 = (0);
while(true){
if((i__37879__auto___52727 < len__37878__auto___52726)){
args__37885__auto__.push((arguments[i__37879__auto___52727]));

var G__52728 = (i__37879__auto___52727 + (1));
i__37879__auto___52727 = G__52728;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});})(g__52576__auto___52725))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52576__auto___52725){
return (function (args){
return cljs.core.deref.call(null,g__52576__auto___52725);
});})(g__52576__auto___52725))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__52576__auto___52725){
return (function (seq52695){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52695));
});})(g__52576__auto___52725))
;


var g__52576__auto___52729 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__52576__auto___52729){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52730 = arguments.length;
var i__37879__auto___52731 = (0);
while(true){
if((i__37879__auto___52731 < len__37878__auto___52730)){
args__37885__auto__.push((arguments[i__37879__auto___52731]));

var G__52732 = (i__37879__auto___52731 + (1));
i__37879__auto___52731 = G__52732;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});})(g__52576__auto___52729))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52576__auto___52729){
return (function (args){
return cljs.core.deref.call(null,g__52576__auto___52729);
});})(g__52576__auto___52729))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__52576__auto___52729){
return (function (seq52696){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52696));
});})(g__52576__auto___52729))
;


var g__52576__auto___52733 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__52576__auto___52733){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52734 = arguments.length;
var i__37879__auto___52735 = (0);
while(true){
if((i__37879__auto___52735 < len__37878__auto___52734)){
args__37885__auto__.push((arguments[i__37879__auto___52735]));

var G__52736 = (i__37879__auto___52735 + (1));
i__37879__auto___52735 = G__52736;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});})(g__52576__auto___52733))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52576__auto___52733){
return (function (args){
return cljs.core.deref.call(null,g__52576__auto___52733);
});})(g__52576__auto___52733))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__52576__auto___52733){
return (function (seq52697){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52697));
});})(g__52576__auto___52733))
;


var g__52576__auto___52737 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__52576__auto___52737){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52738 = arguments.length;
var i__37879__auto___52739 = (0);
while(true){
if((i__37879__auto___52739 < len__37878__auto___52738)){
args__37885__auto__.push((arguments[i__37879__auto___52739]));

var G__52740 = (i__37879__auto___52739 + (1));
i__37879__auto___52739 = G__52740;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});})(g__52576__auto___52737))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52576__auto___52737){
return (function (args){
return cljs.core.deref.call(null,g__52576__auto___52737);
});})(g__52576__auto___52737))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__52576__auto___52737){
return (function (seq52698){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52698));
});})(g__52576__auto___52737))
;


var g__52576__auto___52741 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__52576__auto___52741){
return (function cljs$spec$impl$gen$double(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52742 = arguments.length;
var i__37879__auto___52743 = (0);
while(true){
if((i__37879__auto___52743 < len__37878__auto___52742)){
args__37885__auto__.push((arguments[i__37879__auto___52743]));

var G__52744 = (i__37879__auto___52743 + (1));
i__37879__auto___52743 = G__52744;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});})(g__52576__auto___52741))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52576__auto___52741){
return (function (args){
return cljs.core.deref.call(null,g__52576__auto___52741);
});})(g__52576__auto___52741))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__52576__auto___52741){
return (function (seq52699){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52699));
});})(g__52576__auto___52741))
;


var g__52576__auto___52745 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__52576__auto___52745){
return (function cljs$spec$impl$gen$int(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52746 = arguments.length;
var i__37879__auto___52747 = (0);
while(true){
if((i__37879__auto___52747 < len__37878__auto___52746)){
args__37885__auto__.push((arguments[i__37879__auto___52747]));

var G__52748 = (i__37879__auto___52747 + (1));
i__37879__auto___52747 = G__52748;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});})(g__52576__auto___52745))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52576__auto___52745){
return (function (args){
return cljs.core.deref.call(null,g__52576__auto___52745);
});})(g__52576__auto___52745))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__52576__auto___52745){
return (function (seq52700){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52700));
});})(g__52576__auto___52745))
;


var g__52576__auto___52749 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__52576__auto___52749){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52750 = arguments.length;
var i__37879__auto___52751 = (0);
while(true){
if((i__37879__auto___52751 < len__37878__auto___52750)){
args__37885__auto__.push((arguments[i__37879__auto___52751]));

var G__52752 = (i__37879__auto___52751 + (1));
i__37879__auto___52751 = G__52752;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});})(g__52576__auto___52749))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52576__auto___52749){
return (function (args){
return cljs.core.deref.call(null,g__52576__auto___52749);
});})(g__52576__auto___52749))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__52576__auto___52749){
return (function (seq52701){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52701));
});})(g__52576__auto___52749))
;


var g__52576__auto___52753 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__52576__auto___52753){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52754 = arguments.length;
var i__37879__auto___52755 = (0);
while(true){
if((i__37879__auto___52755 < len__37878__auto___52754)){
args__37885__auto__.push((arguments[i__37879__auto___52755]));

var G__52756 = (i__37879__auto___52755 + (1));
i__37879__auto___52755 = G__52756;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});})(g__52576__auto___52753))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52576__auto___52753){
return (function (args){
return cljs.core.deref.call(null,g__52576__auto___52753);
});})(g__52576__auto___52753))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__52576__auto___52753){
return (function (seq52702){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52702));
});})(g__52576__auto___52753))
;


var g__52576__auto___52757 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__52576__auto___52757){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52758 = arguments.length;
var i__37879__auto___52759 = (0);
while(true){
if((i__37879__auto___52759 < len__37878__auto___52758)){
args__37885__auto__.push((arguments[i__37879__auto___52759]));

var G__52760 = (i__37879__auto___52759 + (1));
i__37879__auto___52759 = G__52760;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});})(g__52576__auto___52757))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52576__auto___52757){
return (function (args){
return cljs.core.deref.call(null,g__52576__auto___52757);
});})(g__52576__auto___52757))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__52576__auto___52757){
return (function (seq52703){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52703));
});})(g__52576__auto___52757))
;


var g__52576__auto___52761 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__52576__auto___52761){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52762 = arguments.length;
var i__37879__auto___52763 = (0);
while(true){
if((i__37879__auto___52763 < len__37878__auto___52762)){
args__37885__auto__.push((arguments[i__37879__auto___52763]));

var G__52764 = (i__37879__auto___52763 + (1));
i__37879__auto___52763 = G__52764;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});})(g__52576__auto___52761))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52576__auto___52761){
return (function (args){
return cljs.core.deref.call(null,g__52576__auto___52761);
});})(g__52576__auto___52761))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__52576__auto___52761){
return (function (seq52704){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52704));
});})(g__52576__auto___52761))
;


var g__52576__auto___52765 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__52576__auto___52765){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52766 = arguments.length;
var i__37879__auto___52767 = (0);
while(true){
if((i__37879__auto___52767 < len__37878__auto___52766)){
args__37885__auto__.push((arguments[i__37879__auto___52767]));

var G__52768 = (i__37879__auto___52767 + (1));
i__37879__auto___52767 = G__52768;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});})(g__52576__auto___52765))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52576__auto___52765){
return (function (args){
return cljs.core.deref.call(null,g__52576__auto___52765);
});})(g__52576__auto___52765))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__52576__auto___52765){
return (function (seq52705){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52705));
});})(g__52576__auto___52765))
;


var g__52576__auto___52769 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__52576__auto___52769){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52770 = arguments.length;
var i__37879__auto___52771 = (0);
while(true){
if((i__37879__auto___52771 < len__37878__auto___52770)){
args__37885__auto__.push((arguments[i__37879__auto___52771]));

var G__52772 = (i__37879__auto___52771 + (1));
i__37879__auto___52771 = G__52772;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});})(g__52576__auto___52769))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52576__auto___52769){
return (function (args){
return cljs.core.deref.call(null,g__52576__auto___52769);
});})(g__52576__auto___52769))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__52576__auto___52769){
return (function (seq52706){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52706));
});})(g__52576__auto___52769))
;


var g__52576__auto___52773 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__52576__auto___52773){
return (function cljs$spec$impl$gen$string(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52774 = arguments.length;
var i__37879__auto___52775 = (0);
while(true){
if((i__37879__auto___52775 < len__37878__auto___52774)){
args__37885__auto__.push((arguments[i__37879__auto___52775]));

var G__52776 = (i__37879__auto___52775 + (1));
i__37879__auto___52775 = G__52776;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});})(g__52576__auto___52773))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52576__auto___52773){
return (function (args){
return cljs.core.deref.call(null,g__52576__auto___52773);
});})(g__52576__auto___52773))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__52576__auto___52773){
return (function (seq52707){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52707));
});})(g__52576__auto___52773))
;


var g__52576__auto___52777 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__52576__auto___52777){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52778 = arguments.length;
var i__37879__auto___52779 = (0);
while(true){
if((i__37879__auto___52779 < len__37878__auto___52778)){
args__37885__auto__.push((arguments[i__37879__auto___52779]));

var G__52780 = (i__37879__auto___52779 + (1));
i__37879__auto___52779 = G__52780;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});})(g__52576__auto___52777))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52576__auto___52777){
return (function (args){
return cljs.core.deref.call(null,g__52576__auto___52777);
});})(g__52576__auto___52777))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__52576__auto___52777){
return (function (seq52708){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52708));
});})(g__52576__auto___52777))
;


var g__52576__auto___52781 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__52576__auto___52781){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52782 = arguments.length;
var i__37879__auto___52783 = (0);
while(true){
if((i__37879__auto___52783 < len__37878__auto___52782)){
args__37885__auto__.push((arguments[i__37879__auto___52783]));

var G__52784 = (i__37879__auto___52783 + (1));
i__37879__auto___52783 = G__52784;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});})(g__52576__auto___52781))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52576__auto___52781){
return (function (args){
return cljs.core.deref.call(null,g__52576__auto___52781);
});})(g__52576__auto___52781))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__52576__auto___52781){
return (function (seq52709){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52709));
});})(g__52576__auto___52781))
;


var g__52576__auto___52785 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__52576__auto___52785){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52786 = arguments.length;
var i__37879__auto___52787 = (0);
while(true){
if((i__37879__auto___52787 < len__37878__auto___52786)){
args__37885__auto__.push((arguments[i__37879__auto___52787]));

var G__52788 = (i__37879__auto___52787 + (1));
i__37879__auto___52787 = G__52788;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});})(g__52576__auto___52785))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52576__auto___52785){
return (function (args){
return cljs.core.deref.call(null,g__52576__auto___52785);
});})(g__52576__auto___52785))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__52576__auto___52785){
return (function (seq52710){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52710));
});})(g__52576__auto___52785))
;


var g__52576__auto___52789 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__52576__auto___52789){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52790 = arguments.length;
var i__37879__auto___52791 = (0);
while(true){
if((i__37879__auto___52791 < len__37878__auto___52790)){
args__37885__auto__.push((arguments[i__37879__auto___52791]));

var G__52792 = (i__37879__auto___52791 + (1));
i__37879__auto___52791 = G__52792;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});})(g__52576__auto___52789))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52576__auto___52789){
return (function (args){
return cljs.core.deref.call(null,g__52576__auto___52789);
});})(g__52576__auto___52789))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__52576__auto___52789){
return (function (seq52711){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52711));
});})(g__52576__auto___52789))
;


var g__52576__auto___52793 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__52576__auto___52793){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52794 = arguments.length;
var i__37879__auto___52795 = (0);
while(true){
if((i__37879__auto___52795 < len__37878__auto___52794)){
args__37885__auto__.push((arguments[i__37879__auto___52795]));

var G__52796 = (i__37879__auto___52795 + (1));
i__37879__auto___52795 = G__52796;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});})(g__52576__auto___52793))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52576__auto___52793){
return (function (args){
return cljs.core.deref.call(null,g__52576__auto___52793);
});})(g__52576__auto___52793))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__52576__auto___52793){
return (function (seq52712){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52712));
});})(g__52576__auto___52793))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__37885__auto__ = [];
var len__37878__auto___52799 = arguments.length;
var i__37879__auto___52800 = (0);
while(true){
if((i__37879__auto___52800 < len__37878__auto___52799)){
args__37885__auto__.push((arguments[i__37879__auto___52800]));

var G__52801 = (i__37879__auto___52800 + (1));
i__37879__auto___52800 = G__52801;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__52797_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__52797_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq52798){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52798));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__52802_SHARP_){
return (new Date(p1__52802_SHARP_));
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