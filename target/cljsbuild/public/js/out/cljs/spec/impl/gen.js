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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__37410__auto__,writer__37411__auto__,opt__37412__auto__){
return cljs.core._write.call(null,writer__37411__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__37886__auto__ = [];
var len__37879__auto___52647 = arguments.length;
var i__37880__auto___52648 = (0);
while(true){
if((i__37880__auto___52648 < len__37879__auto___52647)){
args__37886__auto__.push((arguments[i__37880__auto___52648]));

var G__52649 = (i__37880__auto___52648 + (1));
i__37880__auto___52648 = G__52649;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq52646){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52646));
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
var args__37886__auto__ = [];
var len__37879__auto___52651 = arguments.length;
var i__37880__auto___52652 = (0);
while(true){
if((i__37880__auto___52652 < len__37879__auto___52651)){
args__37886__auto__.push((arguments[i__37880__auto___52652]));

var G__52653 = (i__37880__auto___52652 + (1));
i__37880__auto___52652 = G__52653;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq52650){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52650));
});

var g_QMARK__52654 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_52655 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__52654){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__52654))
,null));
var mkg_52656 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__52654,g_52655){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__52654,g_52655))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__52654,g_52655,mkg_52656){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__52654).call(null,x);
});})(g_QMARK__52654,g_52655,mkg_52656))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__52654,g_52655,mkg_52656){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_52656).call(null,gfn);
});})(g_QMARK__52654,g_52655,mkg_52656))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__52654,g_52655,mkg_52656){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_52655).call(null,generator);
});})(g_QMARK__52654,g_52655,mkg_52656))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__52618__auto___52675 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__52618__auto___52675){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52676 = arguments.length;
var i__37880__auto___52677 = (0);
while(true){
if((i__37880__auto___52677 < len__37879__auto___52676)){
args__37886__auto__.push((arguments[i__37880__auto___52677]));

var G__52678 = (i__37880__auto___52677 + (1));
i__37880__auto___52677 = G__52678;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});})(g__52618__auto___52675))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52618__auto___52675){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52618__auto___52675),args);
});})(g__52618__auto___52675))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__52618__auto___52675){
return (function (seq52657){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52657));
});})(g__52618__auto___52675))
;


var g__52618__auto___52679 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__52618__auto___52679){
return (function cljs$spec$impl$gen$list(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52680 = arguments.length;
var i__37880__auto___52681 = (0);
while(true){
if((i__37880__auto___52681 < len__37879__auto___52680)){
args__37886__auto__.push((arguments[i__37880__auto___52681]));

var G__52682 = (i__37880__auto___52681 + (1));
i__37880__auto___52681 = G__52682;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});})(g__52618__auto___52679))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52618__auto___52679){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52618__auto___52679),args);
});})(g__52618__auto___52679))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__52618__auto___52679){
return (function (seq52658){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52658));
});})(g__52618__auto___52679))
;


var g__52618__auto___52683 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__52618__auto___52683){
return (function cljs$spec$impl$gen$map(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52684 = arguments.length;
var i__37880__auto___52685 = (0);
while(true){
if((i__37880__auto___52685 < len__37879__auto___52684)){
args__37886__auto__.push((arguments[i__37880__auto___52685]));

var G__52686 = (i__37880__auto___52685 + (1));
i__37880__auto___52685 = G__52686;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});})(g__52618__auto___52683))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52618__auto___52683){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52618__auto___52683),args);
});})(g__52618__auto___52683))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__52618__auto___52683){
return (function (seq52659){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52659));
});})(g__52618__auto___52683))
;


var g__52618__auto___52687 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__52618__auto___52687){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52688 = arguments.length;
var i__37880__auto___52689 = (0);
while(true){
if((i__37880__auto___52689 < len__37879__auto___52688)){
args__37886__auto__.push((arguments[i__37880__auto___52689]));

var G__52690 = (i__37880__auto___52689 + (1));
i__37880__auto___52689 = G__52690;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});})(g__52618__auto___52687))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52618__auto___52687){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52618__auto___52687),args);
});})(g__52618__auto___52687))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__52618__auto___52687){
return (function (seq52660){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52660));
});})(g__52618__auto___52687))
;


var g__52618__auto___52691 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__52618__auto___52691){
return (function cljs$spec$impl$gen$set(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52692 = arguments.length;
var i__37880__auto___52693 = (0);
while(true){
if((i__37880__auto___52693 < len__37879__auto___52692)){
args__37886__auto__.push((arguments[i__37880__auto___52693]));

var G__52694 = (i__37880__auto___52693 + (1));
i__37880__auto___52693 = G__52694;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});})(g__52618__auto___52691))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52618__auto___52691){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52618__auto___52691),args);
});})(g__52618__auto___52691))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__52618__auto___52691){
return (function (seq52661){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52661));
});})(g__52618__auto___52691))
;


var g__52618__auto___52695 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__52618__auto___52695){
return (function cljs$spec$impl$gen$vector(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52696 = arguments.length;
var i__37880__auto___52697 = (0);
while(true){
if((i__37880__auto___52697 < len__37879__auto___52696)){
args__37886__auto__.push((arguments[i__37880__auto___52697]));

var G__52698 = (i__37880__auto___52697 + (1));
i__37880__auto___52697 = G__52698;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});})(g__52618__auto___52695))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52618__auto___52695){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52618__auto___52695),args);
});})(g__52618__auto___52695))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__52618__auto___52695){
return (function (seq52662){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52662));
});})(g__52618__auto___52695))
;


var g__52618__auto___52699 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__52618__auto___52699){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52700 = arguments.length;
var i__37880__auto___52701 = (0);
while(true){
if((i__37880__auto___52701 < len__37879__auto___52700)){
args__37886__auto__.push((arguments[i__37880__auto___52701]));

var G__52702 = (i__37880__auto___52701 + (1));
i__37880__auto___52701 = G__52702;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});})(g__52618__auto___52699))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52618__auto___52699){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52618__auto___52699),args);
});})(g__52618__auto___52699))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__52618__auto___52699){
return (function (seq52663){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52663));
});})(g__52618__auto___52699))
;


var g__52618__auto___52703 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__52618__auto___52703){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52704 = arguments.length;
var i__37880__auto___52705 = (0);
while(true){
if((i__37880__auto___52705 < len__37879__auto___52704)){
args__37886__auto__.push((arguments[i__37880__auto___52705]));

var G__52706 = (i__37880__auto___52705 + (1));
i__37880__auto___52705 = G__52706;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});})(g__52618__auto___52703))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52618__auto___52703){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52618__auto___52703),args);
});})(g__52618__auto___52703))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__52618__auto___52703){
return (function (seq52664){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52664));
});})(g__52618__auto___52703))
;


var g__52618__auto___52707 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__52618__auto___52707){
return (function cljs$spec$impl$gen$elements(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52708 = arguments.length;
var i__37880__auto___52709 = (0);
while(true){
if((i__37880__auto___52709 < len__37879__auto___52708)){
args__37886__auto__.push((arguments[i__37880__auto___52709]));

var G__52710 = (i__37880__auto___52709 + (1));
i__37880__auto___52709 = G__52710;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});})(g__52618__auto___52707))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52618__auto___52707){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52618__auto___52707),args);
});})(g__52618__auto___52707))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__52618__auto___52707){
return (function (seq52665){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52665));
});})(g__52618__auto___52707))
;


var g__52618__auto___52711 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__52618__auto___52711){
return (function cljs$spec$impl$gen$bind(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52712 = arguments.length;
var i__37880__auto___52713 = (0);
while(true){
if((i__37880__auto___52713 < len__37879__auto___52712)){
args__37886__auto__.push((arguments[i__37880__auto___52713]));

var G__52714 = (i__37880__auto___52713 + (1));
i__37880__auto___52713 = G__52714;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});})(g__52618__auto___52711))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52618__auto___52711){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52618__auto___52711),args);
});})(g__52618__auto___52711))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__52618__auto___52711){
return (function (seq52666){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52666));
});})(g__52618__auto___52711))
;


var g__52618__auto___52715 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__52618__auto___52715){
return (function cljs$spec$impl$gen$choose(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52716 = arguments.length;
var i__37880__auto___52717 = (0);
while(true){
if((i__37880__auto___52717 < len__37879__auto___52716)){
args__37886__auto__.push((arguments[i__37880__auto___52717]));

var G__52718 = (i__37880__auto___52717 + (1));
i__37880__auto___52717 = G__52718;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});})(g__52618__auto___52715))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52618__auto___52715){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52618__auto___52715),args);
});})(g__52618__auto___52715))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__52618__auto___52715){
return (function (seq52667){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52667));
});})(g__52618__auto___52715))
;


var g__52618__auto___52719 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__52618__auto___52719){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52720 = arguments.length;
var i__37880__auto___52721 = (0);
while(true){
if((i__37880__auto___52721 < len__37879__auto___52720)){
args__37886__auto__.push((arguments[i__37880__auto___52721]));

var G__52722 = (i__37880__auto___52721 + (1));
i__37880__auto___52721 = G__52722;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});})(g__52618__auto___52719))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52618__auto___52719){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52618__auto___52719),args);
});})(g__52618__auto___52719))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__52618__auto___52719){
return (function (seq52668){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52668));
});})(g__52618__auto___52719))
;


var g__52618__auto___52723 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__52618__auto___52723){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52724 = arguments.length;
var i__37880__auto___52725 = (0);
while(true){
if((i__37880__auto___52725 < len__37879__auto___52724)){
args__37886__auto__.push((arguments[i__37880__auto___52725]));

var G__52726 = (i__37880__auto___52725 + (1));
i__37880__auto___52725 = G__52726;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});})(g__52618__auto___52723))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52618__auto___52723){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52618__auto___52723),args);
});})(g__52618__auto___52723))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__52618__auto___52723){
return (function (seq52669){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52669));
});})(g__52618__auto___52723))
;


var g__52618__auto___52727 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__52618__auto___52727){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52728 = arguments.length;
var i__37880__auto___52729 = (0);
while(true){
if((i__37880__auto___52729 < len__37879__auto___52728)){
args__37886__auto__.push((arguments[i__37880__auto___52729]));

var G__52730 = (i__37880__auto___52729 + (1));
i__37880__auto___52729 = G__52730;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});})(g__52618__auto___52727))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52618__auto___52727){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52618__auto___52727),args);
});})(g__52618__auto___52727))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__52618__auto___52727){
return (function (seq52670){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52670));
});})(g__52618__auto___52727))
;


var g__52618__auto___52731 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__52618__auto___52731){
return (function cljs$spec$impl$gen$sample(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52732 = arguments.length;
var i__37880__auto___52733 = (0);
while(true){
if((i__37880__auto___52733 < len__37879__auto___52732)){
args__37886__auto__.push((arguments[i__37880__auto___52733]));

var G__52734 = (i__37880__auto___52733 + (1));
i__37880__auto___52733 = G__52734;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});})(g__52618__auto___52731))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52618__auto___52731){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52618__auto___52731),args);
});})(g__52618__auto___52731))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__52618__auto___52731){
return (function (seq52671){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52671));
});})(g__52618__auto___52731))
;


var g__52618__auto___52735 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__52618__auto___52735){
return (function cljs$spec$impl$gen$return(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52736 = arguments.length;
var i__37880__auto___52737 = (0);
while(true){
if((i__37880__auto___52737 < len__37879__auto___52736)){
args__37886__auto__.push((arguments[i__37880__auto___52737]));

var G__52738 = (i__37880__auto___52737 + (1));
i__37880__auto___52737 = G__52738;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});})(g__52618__auto___52735))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52618__auto___52735){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52618__auto___52735),args);
});})(g__52618__auto___52735))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__52618__auto___52735){
return (function (seq52672){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52672));
});})(g__52618__auto___52735))
;


var g__52618__auto___52739 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__52618__auto___52739){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52740 = arguments.length;
var i__37880__auto___52741 = (0);
while(true){
if((i__37880__auto___52741 < len__37879__auto___52740)){
args__37886__auto__.push((arguments[i__37880__auto___52741]));

var G__52742 = (i__37880__auto___52741 + (1));
i__37880__auto___52741 = G__52742;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});})(g__52618__auto___52739))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52618__auto___52739){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52618__auto___52739),args);
});})(g__52618__auto___52739))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__52618__auto___52739){
return (function (seq52673){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52673));
});})(g__52618__auto___52739))
;


var g__52618__auto___52743 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__52618__auto___52743){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52744 = arguments.length;
var i__37880__auto___52745 = (0);
while(true){
if((i__37880__auto___52745 < len__37879__auto___52744)){
args__37886__auto__.push((arguments[i__37880__auto___52745]));

var G__52746 = (i__37880__auto___52745 + (1));
i__37880__auto___52745 = G__52746;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});})(g__52618__auto___52743))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52618__auto___52743){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52618__auto___52743),args);
});})(g__52618__auto___52743))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__52618__auto___52743){
return (function (seq52674){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52674));
});})(g__52618__auto___52743))
;

var g__52631__auto___52768 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__52631__auto___52768){
return (function cljs$spec$impl$gen$any(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52769 = arguments.length;
var i__37880__auto___52770 = (0);
while(true){
if((i__37880__auto___52770 < len__37879__auto___52769)){
args__37886__auto__.push((arguments[i__37880__auto___52770]));

var G__52771 = (i__37880__auto___52770 + (1));
i__37880__auto___52770 = G__52771;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});})(g__52631__auto___52768))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52631__auto___52768){
return (function (args){
return cljs.core.deref.call(null,g__52631__auto___52768);
});})(g__52631__auto___52768))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__52631__auto___52768){
return (function (seq52747){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52747));
});})(g__52631__auto___52768))
;


var g__52631__auto___52772 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__52631__auto___52772){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52773 = arguments.length;
var i__37880__auto___52774 = (0);
while(true){
if((i__37880__auto___52774 < len__37879__auto___52773)){
args__37886__auto__.push((arguments[i__37880__auto___52774]));

var G__52775 = (i__37880__auto___52774 + (1));
i__37880__auto___52774 = G__52775;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});})(g__52631__auto___52772))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52631__auto___52772){
return (function (args){
return cljs.core.deref.call(null,g__52631__auto___52772);
});})(g__52631__auto___52772))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__52631__auto___52772){
return (function (seq52748){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52748));
});})(g__52631__auto___52772))
;


var g__52631__auto___52776 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__52631__auto___52776){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52777 = arguments.length;
var i__37880__auto___52778 = (0);
while(true){
if((i__37880__auto___52778 < len__37879__auto___52777)){
args__37886__auto__.push((arguments[i__37880__auto___52778]));

var G__52779 = (i__37880__auto___52778 + (1));
i__37880__auto___52778 = G__52779;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});})(g__52631__auto___52776))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52631__auto___52776){
return (function (args){
return cljs.core.deref.call(null,g__52631__auto___52776);
});})(g__52631__auto___52776))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__52631__auto___52776){
return (function (seq52749){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52749));
});})(g__52631__auto___52776))
;


var g__52631__auto___52780 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__52631__auto___52780){
return (function cljs$spec$impl$gen$char(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52781 = arguments.length;
var i__37880__auto___52782 = (0);
while(true){
if((i__37880__auto___52782 < len__37879__auto___52781)){
args__37886__auto__.push((arguments[i__37880__auto___52782]));

var G__52783 = (i__37880__auto___52782 + (1));
i__37880__auto___52782 = G__52783;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});})(g__52631__auto___52780))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52631__auto___52780){
return (function (args){
return cljs.core.deref.call(null,g__52631__auto___52780);
});})(g__52631__auto___52780))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__52631__auto___52780){
return (function (seq52750){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52750));
});})(g__52631__auto___52780))
;


var g__52631__auto___52784 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__52631__auto___52784){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52785 = arguments.length;
var i__37880__auto___52786 = (0);
while(true){
if((i__37880__auto___52786 < len__37879__auto___52785)){
args__37886__auto__.push((arguments[i__37880__auto___52786]));

var G__52787 = (i__37880__auto___52786 + (1));
i__37880__auto___52786 = G__52787;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});})(g__52631__auto___52784))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52631__auto___52784){
return (function (args){
return cljs.core.deref.call(null,g__52631__auto___52784);
});})(g__52631__auto___52784))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__52631__auto___52784){
return (function (seq52751){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52751));
});})(g__52631__auto___52784))
;


var g__52631__auto___52788 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__52631__auto___52788){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52789 = arguments.length;
var i__37880__auto___52790 = (0);
while(true){
if((i__37880__auto___52790 < len__37879__auto___52789)){
args__37886__auto__.push((arguments[i__37880__auto___52790]));

var G__52791 = (i__37880__auto___52790 + (1));
i__37880__auto___52790 = G__52791;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});})(g__52631__auto___52788))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52631__auto___52788){
return (function (args){
return cljs.core.deref.call(null,g__52631__auto___52788);
});})(g__52631__auto___52788))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__52631__auto___52788){
return (function (seq52752){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52752));
});})(g__52631__auto___52788))
;


var g__52631__auto___52792 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__52631__auto___52792){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52793 = arguments.length;
var i__37880__auto___52794 = (0);
while(true){
if((i__37880__auto___52794 < len__37879__auto___52793)){
args__37886__auto__.push((arguments[i__37880__auto___52794]));

var G__52795 = (i__37880__auto___52794 + (1));
i__37880__auto___52794 = G__52795;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});})(g__52631__auto___52792))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52631__auto___52792){
return (function (args){
return cljs.core.deref.call(null,g__52631__auto___52792);
});})(g__52631__auto___52792))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__52631__auto___52792){
return (function (seq52753){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52753));
});})(g__52631__auto___52792))
;


var g__52631__auto___52796 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__52631__auto___52796){
return (function cljs$spec$impl$gen$double(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52797 = arguments.length;
var i__37880__auto___52798 = (0);
while(true){
if((i__37880__auto___52798 < len__37879__auto___52797)){
args__37886__auto__.push((arguments[i__37880__auto___52798]));

var G__52799 = (i__37880__auto___52798 + (1));
i__37880__auto___52798 = G__52799;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});})(g__52631__auto___52796))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52631__auto___52796){
return (function (args){
return cljs.core.deref.call(null,g__52631__auto___52796);
});})(g__52631__auto___52796))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__52631__auto___52796){
return (function (seq52754){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52754));
});})(g__52631__auto___52796))
;


var g__52631__auto___52800 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__52631__auto___52800){
return (function cljs$spec$impl$gen$int(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52801 = arguments.length;
var i__37880__auto___52802 = (0);
while(true){
if((i__37880__auto___52802 < len__37879__auto___52801)){
args__37886__auto__.push((arguments[i__37880__auto___52802]));

var G__52803 = (i__37880__auto___52802 + (1));
i__37880__auto___52802 = G__52803;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});})(g__52631__auto___52800))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52631__auto___52800){
return (function (args){
return cljs.core.deref.call(null,g__52631__auto___52800);
});})(g__52631__auto___52800))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__52631__auto___52800){
return (function (seq52755){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52755));
});})(g__52631__auto___52800))
;


var g__52631__auto___52804 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__52631__auto___52804){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52805 = arguments.length;
var i__37880__auto___52806 = (0);
while(true){
if((i__37880__auto___52806 < len__37879__auto___52805)){
args__37886__auto__.push((arguments[i__37880__auto___52806]));

var G__52807 = (i__37880__auto___52806 + (1));
i__37880__auto___52806 = G__52807;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});})(g__52631__auto___52804))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52631__auto___52804){
return (function (args){
return cljs.core.deref.call(null,g__52631__auto___52804);
});})(g__52631__auto___52804))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__52631__auto___52804){
return (function (seq52756){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52756));
});})(g__52631__auto___52804))
;


var g__52631__auto___52808 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__52631__auto___52808){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52809 = arguments.length;
var i__37880__auto___52810 = (0);
while(true){
if((i__37880__auto___52810 < len__37879__auto___52809)){
args__37886__auto__.push((arguments[i__37880__auto___52810]));

var G__52811 = (i__37880__auto___52810 + (1));
i__37880__auto___52810 = G__52811;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});})(g__52631__auto___52808))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52631__auto___52808){
return (function (args){
return cljs.core.deref.call(null,g__52631__auto___52808);
});})(g__52631__auto___52808))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__52631__auto___52808){
return (function (seq52757){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52757));
});})(g__52631__auto___52808))
;


var g__52631__auto___52812 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__52631__auto___52812){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52813 = arguments.length;
var i__37880__auto___52814 = (0);
while(true){
if((i__37880__auto___52814 < len__37879__auto___52813)){
args__37886__auto__.push((arguments[i__37880__auto___52814]));

var G__52815 = (i__37880__auto___52814 + (1));
i__37880__auto___52814 = G__52815;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});})(g__52631__auto___52812))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52631__auto___52812){
return (function (args){
return cljs.core.deref.call(null,g__52631__auto___52812);
});})(g__52631__auto___52812))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__52631__auto___52812){
return (function (seq52758){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52758));
});})(g__52631__auto___52812))
;


var g__52631__auto___52816 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__52631__auto___52816){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52817 = arguments.length;
var i__37880__auto___52818 = (0);
while(true){
if((i__37880__auto___52818 < len__37879__auto___52817)){
args__37886__auto__.push((arguments[i__37880__auto___52818]));

var G__52819 = (i__37880__auto___52818 + (1));
i__37880__auto___52818 = G__52819;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});})(g__52631__auto___52816))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52631__auto___52816){
return (function (args){
return cljs.core.deref.call(null,g__52631__auto___52816);
});})(g__52631__auto___52816))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__52631__auto___52816){
return (function (seq52759){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52759));
});})(g__52631__auto___52816))
;


var g__52631__auto___52820 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__52631__auto___52820){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52821 = arguments.length;
var i__37880__auto___52822 = (0);
while(true){
if((i__37880__auto___52822 < len__37879__auto___52821)){
args__37886__auto__.push((arguments[i__37880__auto___52822]));

var G__52823 = (i__37880__auto___52822 + (1));
i__37880__auto___52822 = G__52823;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});})(g__52631__auto___52820))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52631__auto___52820){
return (function (args){
return cljs.core.deref.call(null,g__52631__auto___52820);
});})(g__52631__auto___52820))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__52631__auto___52820){
return (function (seq52760){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52760));
});})(g__52631__auto___52820))
;


var g__52631__auto___52824 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__52631__auto___52824){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52825 = arguments.length;
var i__37880__auto___52826 = (0);
while(true){
if((i__37880__auto___52826 < len__37879__auto___52825)){
args__37886__auto__.push((arguments[i__37880__auto___52826]));

var G__52827 = (i__37880__auto___52826 + (1));
i__37880__auto___52826 = G__52827;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});})(g__52631__auto___52824))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52631__auto___52824){
return (function (args){
return cljs.core.deref.call(null,g__52631__auto___52824);
});})(g__52631__auto___52824))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__52631__auto___52824){
return (function (seq52761){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52761));
});})(g__52631__auto___52824))
;


var g__52631__auto___52828 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__52631__auto___52828){
return (function cljs$spec$impl$gen$string(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52829 = arguments.length;
var i__37880__auto___52830 = (0);
while(true){
if((i__37880__auto___52830 < len__37879__auto___52829)){
args__37886__auto__.push((arguments[i__37880__auto___52830]));

var G__52831 = (i__37880__auto___52830 + (1));
i__37880__auto___52830 = G__52831;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});})(g__52631__auto___52828))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52631__auto___52828){
return (function (args){
return cljs.core.deref.call(null,g__52631__auto___52828);
});})(g__52631__auto___52828))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__52631__auto___52828){
return (function (seq52762){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52762));
});})(g__52631__auto___52828))
;


var g__52631__auto___52832 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__52631__auto___52832){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52833 = arguments.length;
var i__37880__auto___52834 = (0);
while(true){
if((i__37880__auto___52834 < len__37879__auto___52833)){
args__37886__auto__.push((arguments[i__37880__auto___52834]));

var G__52835 = (i__37880__auto___52834 + (1));
i__37880__auto___52834 = G__52835;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});})(g__52631__auto___52832))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52631__auto___52832){
return (function (args){
return cljs.core.deref.call(null,g__52631__auto___52832);
});})(g__52631__auto___52832))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__52631__auto___52832){
return (function (seq52763){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52763));
});})(g__52631__auto___52832))
;


var g__52631__auto___52836 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__52631__auto___52836){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52837 = arguments.length;
var i__37880__auto___52838 = (0);
while(true){
if((i__37880__auto___52838 < len__37879__auto___52837)){
args__37886__auto__.push((arguments[i__37880__auto___52838]));

var G__52839 = (i__37880__auto___52838 + (1));
i__37880__auto___52838 = G__52839;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});})(g__52631__auto___52836))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52631__auto___52836){
return (function (args){
return cljs.core.deref.call(null,g__52631__auto___52836);
});})(g__52631__auto___52836))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__52631__auto___52836){
return (function (seq52764){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52764));
});})(g__52631__auto___52836))
;


var g__52631__auto___52840 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__52631__auto___52840){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52841 = arguments.length;
var i__37880__auto___52842 = (0);
while(true){
if((i__37880__auto___52842 < len__37879__auto___52841)){
args__37886__auto__.push((arguments[i__37880__auto___52842]));

var G__52843 = (i__37880__auto___52842 + (1));
i__37880__auto___52842 = G__52843;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});})(g__52631__auto___52840))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52631__auto___52840){
return (function (args){
return cljs.core.deref.call(null,g__52631__auto___52840);
});})(g__52631__auto___52840))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__52631__auto___52840){
return (function (seq52765){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52765));
});})(g__52631__auto___52840))
;


var g__52631__auto___52844 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__52631__auto___52844){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52845 = arguments.length;
var i__37880__auto___52846 = (0);
while(true){
if((i__37880__auto___52846 < len__37879__auto___52845)){
args__37886__auto__.push((arguments[i__37880__auto___52846]));

var G__52847 = (i__37880__auto___52846 + (1));
i__37880__auto___52846 = G__52847;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});})(g__52631__auto___52844))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52631__auto___52844){
return (function (args){
return cljs.core.deref.call(null,g__52631__auto___52844);
});})(g__52631__auto___52844))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__52631__auto___52844){
return (function (seq52766){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52766));
});})(g__52631__auto___52844))
;


var g__52631__auto___52848 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__52631__auto___52848){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52849 = arguments.length;
var i__37880__auto___52850 = (0);
while(true){
if((i__37880__auto___52850 < len__37879__auto___52849)){
args__37886__auto__.push((arguments[i__37880__auto___52850]));

var G__52851 = (i__37880__auto___52850 + (1));
i__37880__auto___52850 = G__52851;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});})(g__52631__auto___52848))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52631__auto___52848){
return (function (args){
return cljs.core.deref.call(null,g__52631__auto___52848);
});})(g__52631__auto___52848))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__52631__auto___52848){
return (function (seq52767){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52767));
});})(g__52631__auto___52848))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__37886__auto__ = [];
var len__37879__auto___52854 = arguments.length;
var i__37880__auto___52855 = (0);
while(true){
if((i__37880__auto___52855 < len__37879__auto___52854)){
args__37886__auto__.push((arguments[i__37880__auto___52855]));

var G__52856 = (i__37880__auto___52855 + (1));
i__37880__auto___52855 = G__52856;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__52852_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__52852_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq52853){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52853));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__52857_SHARP_){
return (new Date(p1__52857_SHARP_));
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