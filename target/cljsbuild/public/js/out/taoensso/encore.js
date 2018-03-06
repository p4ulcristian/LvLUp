// Compiled by ClojureScript 1.9.229 {}
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('goog.net.XhrIoPool');
goog.require('goog.events');
goog.require('clojure.set');
goog.require('cljs.test');
goog.require('cljs.tools.reader.edn');
goog.require('taoensso.truss');
goog.require('goog.net.XhrIo');
goog.require('goog.Uri.QueryData');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.string.StringBuffer');
goog.require('goog.net.EventType');
goog.require('goog.structs');
goog.require('goog.string.format');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');
taoensso.encore.encore_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(84),(2)], null);
taoensso.encore.get_dynamic_assertion_data = (function taoensso$encore$get_dynamic_assertion_data(){
return taoensso.truss.get_dynamic_assertion_data.call(null);
});
/**
 * Given a symbol and args, returns [<name-with-attrs-meta> <args>] with
 *   support for `defn` style `?docstring` and `?attrs-map`.
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(var_args){
var args47205 = [];
var len__37877__auto___47214 = arguments.length;
var i__37878__auto___47215 = (0);
while(true){
if((i__37878__auto___47215 < len__37877__auto___47214)){
args47205.push((arguments[i__37878__auto___47215]));

var G__47216 = (i__37878__auto___47215 + (1));
i__37878__auto___47215 = G__47216;
continue;
} else {
}
break;
}

var G__47207 = args47205.length;
switch (G__47207) {
case 2:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47205.length)].join('')));

}
});

taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2 = (function (sym,args){
return taoensso.encore.name_with_attrs.call(null,sym,args,null);
});

taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3 = (function (sym,args,attrs_merge){
var vec__47208 = (((typeof cljs.core.first.call(null,args) === 'string') && (cljs.core.next.call(null,args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args),cljs.core.next.call(null,args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,args], null));
var _QMARK_docstring = cljs.core.nth.call(null,vec__47208,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__47208,(1),null);
var vec__47211 = (((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__$1))) && (cljs.core.next.call(null,args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__$1),cljs.core.next.call(null,args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__$1], null));
var attrs = cljs.core.nth.call(null,vec__47211,(0),null);
var args__$2 = cljs.core.nth.call(null,vec__47211,(1),null);
var attrs__$1 = (cljs.core.truth_(_QMARK_docstring)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"doc","doc",1913296891),_QMARK_docstring):attrs);
var attrs__$2 = (cljs.core.truth_(cljs.core.meta.call(null,sym))?cljs.core.conj.call(null,cljs.core.meta.call(null,sym),attrs__$1):attrs__$1);
var attrs__$3 = cljs.core.conj.call(null,attrs__$2,attrs_merge);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,sym,attrs__$3),args__$2], null);
});

taoensso.encore.name_with_attrs.cljs$lang$maxFixedArity = 3;

taoensso.encore._core_merge = cljs.core.merge;
taoensso.encore._core_update_in = cljs.core.update_in;


/**
 * Attempts to pave over differences in:
 *  `clojure.edn/read-string`, `clojure.tools.edn/read-string`,
 *  `cljs.reader/read-string`, `cljs.tools.reader/read-string`.
 * `cljs.reader` in particular can be a pain.
 */
taoensso.encore.read_edn = (function taoensso$encore$read_edn(var_args){
var args47218 = [];
var len__37877__auto___47221 = arguments.length;
var i__37878__auto___47222 = (0);
while(true){
if((i__37878__auto___47222 < len__37877__auto___47221)){
args47218.push((arguments[i__37878__auto___47222]));

var G__47223 = (i__37878__auto___47222 + (1));
i__37878__auto___47222 = G__47223;
continue;
} else {
}
break;
}

var G__47220 = args47218.length;
switch (G__47220) {
case 1:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47218.length)].join('')));

}
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1 = (function (s){
return taoensso.encore.read_edn.call(null,null,s);
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if(((s == null)) || ((s === ""))){
return null;
} else {
if(typeof s === 'string'){
var readers = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"readers","readers",-2118263030),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var default$ = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var readers__$1 = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,readers,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399)))?taoensso.encore.map_keys.call(null,cljs.core.symbol,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_)):readers);
var default$__$1 = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,default$,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399)))?cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_):default$);
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"readers","readers",-2118263030),readers__$1,new cljs.core.Keyword(null,"default","default",-1987822328),default$__$1);
return cljs.tools.reader.edn.read_string.call(null,opts__$1,s);
} else {
throw cljs.core.ex_info.call(null,"`read-edn` attempt against non-nil, non-string arg",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),s,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,s)], null));
}
}
});

taoensso.encore.read_edn.cljs$lang$maxFixedArity = 2;

/**
 * Prints arg to an edn string readable with `read-edn`.
 */
taoensso.encore.pr_edn = (function taoensso$encore$pr_edn(var_args){
var args47225 = [];
var len__37877__auto___47230 = arguments.length;
var i__37878__auto___47231 = (0);
while(true){
if((i__37878__auto___47231 < len__37877__auto___47230)){
args47225.push((arguments[i__37878__auto___47231]));

var G__47232 = (i__37878__auto___47231 + (1));
i__37878__auto___47231 = G__47232;
continue;
} else {
}
break;
}

var G__47227 = args47225.length;
switch (G__47227) {
case 1:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47225.length)].join('')));

}
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.pr_edn.call(null,null,x);
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2 = (function (_opts,x){
var _STAR_print_level_STAR_47228 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_47229 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = null;

cljs.core._STAR_print_length_STAR_ = null;

try{return cljs.core.pr_str.call(null,x);
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_47229;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_47228;
}});

taoensso.encore.pr_edn.cljs$lang$maxFixedArity = 2;

/**
 * Returns data map iff `x` is an error of any type on platform.
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var b2__31771__auto__ = (function (){var or__36802__auto__ = cljs.core.ex_data.call(null,x);
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
if((x instanceof Error)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}
})();
if(cljs.core.truth_(b2__31771__auto__)){
var data_map = b2__31771__auto__;
return cljs.core.conj.call(null,(function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"err-type","err-type",-116717722),cljs.core.type.call(null,err),new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684),err.message,new cljs.core.Keyword(null,"err-cause","err-cause",897008749),err.cause], null);
})(),data_map);
} else {
return null;
}
});
taoensso.encore.some_QMARK_ = (function taoensso$encore$some_QMARK_(x){
if((x == null)){
return false;
} else {
return true;
}
});

taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || (typeof x === 'string');
});

taoensso.encore.ident_QMARK_ = (function taoensso$encore$ident_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol));
});

taoensso.encore.boolean_QMARK_ = (function taoensso$encore$boolean_QMARK_(x){
return (x === true) || (x === false);
});

taoensso.encore.indexed_QMARK_ = (function taoensso$encore$indexed_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (16))) || (x.cljs$core$IIndexed$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,x);
}
});

taoensso.encore.named_QMARK_ = (function taoensso$encore$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || (x.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.editable_QMARK_ = (function taoensso$encore$editable_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4))) || (x.cljs$core$IEditableCollection$)){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.derefable_QMARK_ = (function taoensso$encore$derefable_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});

taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});

taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});

taoensso.encore.lazy_seq_QMARK_ = (function taoensso$encore$lazy_seq_QMARK_(x){
return (x instanceof cljs.core.LazySeq);
});

taoensso.encore.re_pattern_QMARK_ = (function taoensso$encore$re_pattern_QMARK_(x){
return (x instanceof RegExp);
});

taoensso.encore.simple_ident_QMARK_ = (function taoensso$encore$simple_ident_QMARK_(x){
return (taoensso.encore.ident_QMARK_.call(null,x)) && ((cljs.core.namespace.call(null,x) == null));
});

taoensso.encore.qualified_ident_QMARK_ = (function taoensso$encore$qualified_ident_QMARK_(x){
var and__36790__auto__ = taoensso.encore.ident_QMARK_.call(null,x);
if(and__36790__auto__){
var and__36790__auto____$1 = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(and__36790__auto____$1)){
return true;
} else {
return and__36790__auto____$1;
}
} else {
return and__36790__auto__;
}
});

taoensso.encore.simple_symbol_QMARK_ = (function taoensso$encore$simple_symbol_QMARK_(x){
return ((x instanceof cljs.core.Symbol)) && ((cljs.core.namespace.call(null,x) == null));
});

taoensso.encore.qualified_symbol_QMARK_ = (function taoensso$encore$qualified_symbol_QMARK_(x){
var and__36790__auto__ = (x instanceof cljs.core.Symbol);
if(and__36790__auto__){
var and__36790__auto____$1 = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(and__36790__auto____$1)){
return true;
} else {
return and__36790__auto____$1;
}
} else {
return and__36790__auto__;
}
});

taoensso.encore.simple_keyword_QMARK_ = (function taoensso$encore$simple_keyword_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) && ((cljs.core.namespace.call(null,x) == null));
});

taoensso.encore.qualified_keyword_QMARK_ = (function taoensso$encore$qualified_keyword_QMARK_(x){
var and__36790__auto__ = (x instanceof cljs.core.Keyword);
if(and__36790__auto__){
var and__36790__auto____$1 = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(and__36790__auto____$1)){
return true;
} else {
return and__36790__auto____$1;
}
} else {
return and__36790__auto__;
}
});

taoensso.encore.nempty_str_QMARK_ = (function taoensso$encore$nempty_str_QMARK_(x){
return (typeof x === 'string') && (!(cljs.core._EQ_.call(null,x,"")));
});

taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
return (typeof x === 'string') && (!(clojure.string.blank_QMARK_.call(null,x)));
});

taoensso.encore.nblank_QMARK_ = (function taoensso$encore$nblank_QMARK_(x){
return !(clojure.string.blank_QMARK_.call(null,x));
});

taoensso.encore.vec2_QMARK_ = (function taoensso$encore$vec2_QMARK_(x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),(2)));
});

taoensso.encore.vec3_QMARK_ = (function taoensso$encore$vec3_QMARK_(x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),(3)));
});
taoensso.encore.nneg_QMARK_ = (function taoensso$encore$nneg_QMARK_(x){
return !((x < (0)));
});

taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return cljs.core._EQ_.call(null,x,(0));
});

taoensso.encore.regular_num_QMARK_ = (function taoensso$encore$regular_num_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity)));
});

taoensso.encore.float_QMARK_ = (function taoensso$encore$float_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity))) && (!((parseFloat(x) === parseInt(x,(10)))));
});

taoensso.encore.int_QMARK_ = (function taoensso$encore$int_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity))) && ((parseFloat(x) === parseInt(x,(10))));
});

taoensso.encore.nat_num_QMARK_ = (function taoensso$encore$nat_num_QMARK_(x){
return (typeof x === 'number') && (!((x < (0))));
});

taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return (typeof x === 'number') && ((x > (0)));
});

taoensso.encore.neg_num_QMARK_ = (function taoensso$encore$neg_num_QMARK_(x){
return (typeof x === 'number') && ((x < (0)));
});

taoensso.encore.nat_int_QMARK_ = (function taoensso$encore$nat_int_QMARK_(x){
return (taoensso.encore.int_QMARK_.call(null,x)) && (!((x < (0))));
});

taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
return (taoensso.encore.int_QMARK_.call(null,x)) && ((x > (0)));
});

taoensso.encore.neg_int_QMARK_ = (function taoensso$encore$neg_int_QMARK_(x){
return (taoensso.encore.int_QMARK_.call(null,x)) && ((x < (0)));
});

taoensso.encore.nat_float_QMARK_ = (function taoensso$encore$nat_float_QMARK_(x){
return (taoensso.encore.float_QMARK_.call(null,x)) && (!((x < (0))));
});

taoensso.encore.pos_float_QMARK_ = (function taoensso$encore$pos_float_QMARK_(x){
return (taoensso.encore.float_QMARK_.call(null,x)) && ((x > (0)));
});

taoensso.encore.neg_float_QMARK_ = (function taoensso$encore$neg_float_QMARK_(x){
return (taoensso.encore.float_QMARK_.call(null,x)) && ((x < (0)));
});

taoensso.encore.udt_QMARK_ = (function taoensso$encore$udt_QMARK_(x){
return (taoensso.encore.int_QMARK_.call(null,x)) && (!((x < (0))));
});

taoensso.encore.pval_QMARK_ = (function taoensso$encore$pval_QMARK_(x){
var and__36790__auto__ = typeof x === 'number';
if(and__36790__auto__){
var n = x;
return ((n >= 0.0)) && ((n <= 1.0));
} else {
return and__36790__auto__;
}
});
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
taoensso.encore.kw_identical_QMARK_ = cljs.core.keyword_identical_QMARK_;
taoensso.encore.as__QMARK_nzero = (function taoensso$encore$as__QMARK_nzero(x){
if(typeof x === 'number'){
if((x === (0))){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nblank = (function taoensso$encore$as__QMARK_nblank(x){
if(typeof x === 'string'){
if(clojure.string.blank_QMARK_.call(null,x)){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_kw = (function taoensso$encore$as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.call(null,x);
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_name = (function taoensso$encore$as__QMARK_name(x){
if(taoensso.encore.named_QMARK_.call(null,x)){
return cljs.core.name.call(null,x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_qname = (function taoensso$encore$as__QMARK_qname(x){
if(taoensso.encore.named_QMARK_.call(null,x)){
var n = cljs.core.name.call(null,x);
var b2__31771__auto__ = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(b2__31771__auto__)){
var ns = b2__31771__auto__;
return [cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(n)].join('');
} else {
return n;
}
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_nempty_str = (function taoensso$encore$as__QMARK_nempty_str(x){
if(typeof x === 'string'){
if(cljs.core._EQ_.call(null,x,"")){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_int = (function taoensso$encore$as__QMARK_int(x){
if(typeof x === 'number'){
return cljs.core.long$.call(null,x);
} else {
if(typeof x === 'string'){
var x__$1 = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_float = (function taoensso$encore$as__QMARK_float(x){
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_udt = (function taoensso$encore$as__QMARK_udt(x){
var b2__31771__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(b2__31771__auto__)){
var n = b2__31771__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nat_int = (function taoensso$encore$as__QMARK_nat_int(x){
var b2__31771__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(b2__31771__auto__)){
var n = b2__31771__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_int = (function taoensso$encore$as__QMARK_pos_int(x){
var b2__31771__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(b2__31771__auto__)){
var n = b2__31771__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nat_float = (function taoensso$encore$as__QMARK_nat_float(x){
var b2__31771__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(b2__31771__auto__)){
var n = b2__31771__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_float = (function taoensso$encore$as__QMARK_pos_float(x){
var b2__31771__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(b2__31771__auto__)){
var n = b2__31771__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pval = (function taoensso$encore$as__QMARK_pval(x){
var b2__31771__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(b2__31771__auto__)){
var f = b2__31771__auto__;
if((f > 1.0)){
return 1.0;
} else {
if((f < 0.0)){
return 0.0;
} else {
return f;
}
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_bool = (function taoensso$encore$as__QMARK_bool(x){
if((x == null)){
return null;
} else {
if((x === true) || (x === false)){
return x;
} else {
if((cljs.core._EQ_.call(null,x,(0))) || (cljs.core._EQ_.call(null,x,"false")) || (cljs.core._EQ_.call(null,x,"FALSE")) || (cljs.core._EQ_.call(null,x,"0"))){
return false;
} else {
if((cljs.core._EQ_.call(null,x,(1))) || (cljs.core._EQ_.call(null,x,"true")) || (cljs.core._EQ_.call(null,x,"TRUE")) || (cljs.core._EQ_.call(null,x,"1"))){
return true;
} else {
return null;
}
}
}
}
});

taoensso.encore.as__QMARK_email = (function taoensso$encore$as__QMARK_email(_QMARK_s){
if(cljs.core.truth_(_QMARK_s)){
return cljs.core.re_find.call(null,/^[^\s@]+@[^\s@]+\.\S*[^\.]$/,clojure.string.trim.call(null,_QMARK_s));
} else {
return null;
}
});

taoensso.encore.as__QMARK_nemail = (function taoensso$encore$as__QMARK_nemail(_QMARK_s){
var b2__31771__auto__ = taoensso.encore.as__QMARK_email.call(null,_QMARK_s);
if(cljs.core.truth_(b2__31771__auto__)){
var email = b2__31771__auto__;
return clojure.string.lower_case.call(null,email);
} else {
return null;
}
});

taoensso.encore.try_pred = (function taoensso$encore$try_pred(pred,x){
try{return pred.call(null,x);
}catch (e47243){if((e47243 instanceof Error)){
var _ = e47243;
return false;
} else {
throw e47243;

}
}});
taoensso.encore.when_QMARK_ = (function taoensso$encore$when_QMARK_(pred,x){
if(cljs.core.truth_(taoensso.encore.try_pred.call(null,pred,x))){
return x;
} else {
return null;
}
});
/**
 * Cheaper `have!` that provides less diagnostic info.
 */
taoensso.encore.is_BANG_ = (function taoensso$encore$is_BANG_(var_args){
var args47244 = [];
var len__37877__auto___47247 = arguments.length;
var i__37878__auto___47248 = (0);
while(true){
if((i__37878__auto___47248 < len__37877__auto___47247)){
args47244.push((arguments[i__37878__auto___47248]));

var G__47249 = (i__37878__auto___47248 + (1));
i__37878__auto___47248 = G__47249;
continue;
} else {
}
break;
}

var G__47246 = args47244.length;
switch (G__47246) {
case 1:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47244.length)].join('')));

}
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.is_BANG_.call(null,cljs.core.identity,x,null);
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return taoensso.encore.is_BANG_.call(null,cljs.core.identity,x,null);
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,fail__QMARK_data){
if(cljs.core.truth_(taoensso.encore.try_pred.call(null,pred,x))){
return x;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("`is!` "),cljs.core.str([cljs.core.str(pred)].join('')),cljs.core.str(" failure against arg: "),cljs.core.str(cljs.core.pr_str.call(null,x))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x),new cljs.core.Keyword(null,"fail-?data","fail-?data",1702764975),fail__QMARK_data], null));
}
});

taoensso.encore.is_BANG_.cljs$lang$maxFixedArity = 3;

taoensso.encore._as_throw = (function taoensso$encore$_as_throw(as_name,x){
throw cljs.core.ex_info.call(null,[cljs.core.str("`as-"),cljs.core.str(cljs.core.name.call(null,as_name)),cljs.core.str("` failed against: `"),cljs.core.str(cljs.core.pr_str.call(null,x)),cljs.core.str("`")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
});
taoensso.encore.as_nzero = (function taoensso$encore$as_nzero(x){
var or__36802__auto__ = taoensso.encore.as__QMARK_nzero.call(null,x);
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nzero","nzero",2053173656),x);
}
});

taoensso.encore.as_nblank = (function taoensso$encore$as_nblank(x){
var or__36802__auto__ = taoensso.encore.as__QMARK_nblank.call(null,x);
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nblank","nblank",626815585),x);
}
});

taoensso.encore.as_nempty_str = (function taoensso$encore$as_nempty_str(x){
var or__36802__auto__ = taoensso.encore.as__QMARK_nempty_str.call(null,x);
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nempty-str","nempty-str",-215700100),x);
}
});

taoensso.encore.as_kw = (function taoensso$encore$as_kw(x){
var or__36802__auto__ = taoensso.encore.as__QMARK_kw.call(null,x);
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"kw","kw",1158308175),x);
}
});

taoensso.encore.as_name = (function taoensso$encore$as_name(x){
var or__36802__auto__ = taoensso.encore.as__QMARK_name.call(null,x);
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"name","name",1843675177),x);
}
});

taoensso.encore.as_qname = (function taoensso$encore$as_qname(x){
var or__36802__auto__ = taoensso.encore.as__QMARK_qname.call(null,x);
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"qname","qname",-1983612179),x);
}
});

taoensso.encore.as_email = (function taoensso$encore$as_email(x){
var or__36802__auto__ = taoensso.encore.as__QMARK_email.call(null,x);
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"email","email",1415816706),x);
}
});

taoensso.encore.as_nemail = (function taoensso$encore$as_nemail(x){
var or__36802__auto__ = taoensso.encore.as__QMARK_nemail.call(null,x);
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nemail","nemail",318708381),x);
}
});

taoensso.encore.as_udt = (function taoensso$encore$as_udt(x){
var or__36802__auto__ = taoensso.encore.as__QMARK_udt.call(null,x);
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"udt","udt",2011712751),x);
}
});

taoensso.encore.as_int = (function taoensso$encore$as_int(x){
var or__36802__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"int","int",-1741416922),x);
}
});

taoensso.encore.as_nat_int = (function taoensso$encore$as_nat_int(x){
var or__36802__auto__ = taoensso.encore.as__QMARK_nat_int.call(null,x);
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nat-int","nat-int",313429715),x);
}
});

taoensso.encore.as_pos_int = (function taoensso$encore$as_pos_int(x){
var or__36802__auto__ = taoensso.encore.as__QMARK_pos_int.call(null,x);
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"pos-int","pos-int",15030207),x);
}
});

taoensso.encore.as_float = (function taoensso$encore$as_float(x){
var or__36802__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"float","float",-1732389368),x);
}
});

taoensso.encore.as_nat_float = (function taoensso$encore$as_nat_float(x){
var or__36802__auto__ = taoensso.encore.as__QMARK_nat_float.call(null,x);
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nat-float","nat-float",-371030973),x);
}
});

taoensso.encore.as_pos_float = (function taoensso$encore$as_pos_float(x){
var or__36802__auto__ = taoensso.encore.as__QMARK_pos_float.call(null,x);
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"pos-float","pos-float",-715200084),x);
}
});

taoensso.encore.as_pval = (function taoensso$encore$as_pval(x){
var or__36802__auto__ = taoensso.encore.as__QMARK_pval.call(null,x);
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"pval","pval",-274256857),x);
}
});

taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){
var _QMARK_b = taoensso.encore.as__QMARK_bool.call(null,x);
if((_QMARK_b == null)){
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"bool","bool",1444635321),x);
} else {
return _QMARK_b;
}
});
taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.call(null,taoensso.encore.as_qname.call(null,k),/[\.\/]/);
});
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(var_args){
var args47251 = [];
var len__37877__auto___47254 = arguments.length;
var i__37878__auto___47255 = (0);
while(true){
if((i__37878__auto___47255 < len__37877__auto___47254)){
args47251.push((arguments[i__37878__auto___47255]));

var G__47256 = (i__37878__auto___47255 + (1));
i__37878__auto___47255 = G__47256;
continue;
} else {
}
break;
}

var G__47253 = args47251.length;
switch (G__47253) {
case 1:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47251.length)].join('')));

}
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1 = (function (ks){
return taoensso.encore.merge_keywords.call(null,ks,false);
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2 = (function (ks,omit_slash_QMARK_){
if(cljs.core.seq.call(null,ks)){
var parts = cljs.core.reduce.call(null,(function (acc,in$){
if((in$ == null)){
return acc;
} else {
return cljs.core.reduce.call(null,cljs.core.conj,acc,taoensso.encore.explode_keyword.call(null,in$));
}
}),cljs.core.PersistentVector.EMPTY,ks);
if(cljs.core.seq.call(null,parts)){
if(cljs.core.truth_(omit_slash_QMARK_)){
return cljs.core.keyword.call(null,clojure.string.join.call(null,".",parts));
} else {
var ppop = cljs.core.pop.call(null,parts);
return cljs.core.keyword.call(null,((cljs.core.seq.call(null,ppop))?clojure.string.join.call(null,".",ppop):null),cljs.core.peek.call(null,parts));
}
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = 2;

/**
 * As `core/preserving-reduced`.
 */
taoensso.encore.preserve_reduced = (function taoensso$encore$preserve_reduced(rf){
return (function (acc,in$){
var result = rf.call(null,acc,in$);
if(cljs.core.reduced_QMARK_.call(null,result)){
return cljs.core.reduced.call(null,result);
} else {
return result;
}
});
});
/**
 * Like `reduce-kv` but takes a flat sequence of kv pairs.
 */
taoensso.encore.reduce_kvs = (function taoensso$encore$reduce_kvs(rf,init,kvs){
return cljs.core.transduce.call(null,cljs.core.partition_all.call(null,(2)),cljs.core.completing.call(null,(function (acc,p__47264){
var vec__47265 = p__47264;
var k = cljs.core.nth.call(null,vec__47265,(0),null);
var v = cljs.core.nth.call(null,vec__47265,(1),null);
return rf.call(null,acc,k,v);
})),init,kvs);
});
taoensso.encore.reduce_n = (function taoensso$encore$reduce_n(rf,init,n){
return cljs.core.reduce.call(null,rf,init,cljs.core.range.call(null,n));
});
/**
 * Like `reduce` but takes (rf [acc idx in]) with idx as in `map-indexed`.
 */
taoensso.encore.reduce_indexed = (function taoensso$encore$reduce_indexed(rf,init,coll){
var i = cljs.core.volatile_BANG_.call(null,(-1));
return cljs.core.reduce.call(null,((function (i){
return (function (acc,in$){
return rf.call(null,acc,cljs.core._vreset_BANG_.call(null,i,(cljs.core._deref.call(null,i) + (1))),in$);
});})(i))
,init,coll);
});
/**
 * Like `reduce-kv` but for JavaScript objects.
 */
taoensso.encore.reduce_obj = (function taoensso$encore$reduce_obj(f,init,o){
return cljs.core.reduce.call(null,(function (acc,k){
return f.call(null,acc,k,goog.object.get(o,k,null));
}),init,cljs.core.js_keys.call(null,o));
});
taoensso.encore.run_BANG_ = (function taoensso$encore$run_BANG_(proc,coll){
cljs.core.reduce.call(null,(function (p1__47269_SHARP_,p2__47268_SHARP_){
return proc.call(null,p2__47268_SHARP_);
}),null,coll);

return null;
});

taoensso.encore.run_kv_BANG_ = (function taoensso$encore$run_kv_BANG_(proc,m){
cljs.core.reduce_kv.call(null,(function (p1__47272_SHARP_,p2__47270_SHARP_,p3__47271_SHARP_){
return proc.call(null,p2__47270_SHARP_,p3__47271_SHARP_);
}),null,m);

return null;
});

taoensso.encore.run_kvs_BANG_ = (function taoensso$encore$run_kvs_BANG_(proc,kvs){
taoensso.encore.reduce_kvs.call(null,(function (p1__47275_SHARP_,p2__47273_SHARP_,p3__47274_SHARP_){
return proc.call(null,p2__47273_SHARP_,p3__47274_SHARP_);
}),null,kvs);

return null;
});

taoensso.encore.run_obj_BANG_ = (function taoensso$encore$run_obj_BANG_(proc,obj){
taoensso.encore.reduce_obj.call(null,(function (p1__47278_SHARP_,p2__47276_SHARP_,p3__47277_SHARP_){
return proc.call(null,p2__47276_SHARP_,p3__47277_SHARP_);
}),null,obj);

return null;
});
taoensso.encore.rsome = (function taoensso$encore$rsome(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
var b2__31771__auto__ = pred.call(null,in$);
if(cljs.core.truth_(b2__31771__auto__)){
var p = b2__31771__auto__;
return cljs.core.reduced.call(null,p);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rsome_kv = (function taoensso$encore$rsome_kv(pred,coll){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
var b2__31771__auto__ = pred.call(null,k,v);
if(cljs.core.truth_(b2__31771__auto__)){
var p = b2__31771__auto__;
return cljs.core.reduced.call(null,p);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rfirst = (function taoensso$encore$rfirst(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return cljs.core.reduced.call(null,in$);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rfirst_kv = (function taoensso$encore$rfirst_kv(pred,coll){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return cljs.core.reduced.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
} else {
return null;
}
}),null,coll);
});

taoensso.encore.revery_QMARK_ = (function taoensso$encore$revery_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return true;
} else {
return cljs.core.reduced.call(null,false);
}
}),true,coll);
});

taoensso.encore.revery_kv_QMARK_ = (function taoensso$encore$revery_kv_QMARK_(pred,coll){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return true;
} else {
return cljs.core.reduced.call(null,false);
}
}),true,coll);
});

taoensso.encore.revery = (function taoensso$encore$revery(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return coll;
} else {
return cljs.core.reduced.call(null,null);
}
}),coll,coll);
});

taoensso.encore.revery_kv = (function taoensso$encore$revery_kv(pred,coll){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return coll;
} else {
return cljs.core.reduced.call(null,null);
}
}),coll,coll);
});
/**
 * Returns a new stateful index fn that returns: 0, 1, 2, ...
 */
taoensso.encore.idx_fn = (function taoensso$encore$idx_fn(){
var idx_ = cljs.core.atom.call(null,(-1));
return ((function (idx_){
return (function (){
return cljs.core.swap_BANG_.call(null,idx_,cljs.core.inc);
});
;})(idx_))
});
taoensso.encore.max_long = (9007199254740991);
taoensso.encore.min_long = (-9007199254740991);
taoensso.encore.approx_EQ__EQ_ = (function taoensso$encore$approx_EQ__EQ_(var_args){
var args47280 = [];
var len__37877__auto___47283 = arguments.length;
var i__37878__auto___47284 = (0);
while(true){
if((i__37878__auto___47284 < len__37877__auto___47283)){
args47280.push((arguments[i__37878__auto___47284]));

var G__47285 = (i__37878__auto___47284 + (1));
i__37878__auto___47284 = G__47285;
continue;
} else {
}
break;
}

var G__47282 = args47280.length;
switch (G__47282) {
case 2:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47280.length)].join('')));

}
});

taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (Math.abs((x - y)) < 0.001);
});

taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (signf,x,y){
return (Math.abs((x - y)) < signf);
});

taoensso.encore.approx_EQ__EQ_.cljs$lang$maxFixedArity = 3;

taoensso.encore.clamp = (function taoensso$encore$clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
return Math.pow(n,exp);
});
taoensso.encore.abs = (function taoensso$encore$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
taoensso.encore.round_STAR_ = (function taoensso$encore$round_STAR_(var_args){
var args47287 = [];
var len__37877__auto___47291 = arguments.length;
var i__37878__auto___47292 = (0);
while(true){
if((i__37878__auto___47292 < len__37877__auto___47291)){
args47287.push((arguments[i__37878__auto___47292]));

var G__47293 = (i__37878__auto___47292 + (1));
i__37878__auto___47292 = G__47293;
continue;
} else {
}
break;
}

var G__47289 = args47287.length;
switch (G__47289) {
case 1:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47287.length)].join('')));

}
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (n){
return taoensso.encore.round_STAR_.call(null,new cljs.core.Keyword(null,"round","round",2009433328),null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,n){
return taoensso.encore.round_STAR_.call(null,type,null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,nplaces,n){
var n__$1 = n;
var modifier = (cljs.core.truth_(nplaces)?Math.pow(10.0,nplaces):null);
var n_STAR_ = (cljs.core.truth_(modifier)?(n__$1 * modifier):n__$1);
var rounded = (function (){var G__47290 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__47290) {
case "round":
return Math.round(n_STAR_);

break;
case "floor":
return Math.floor(n_STAR_);

break;
case "ceil":
return Math.ceil(n_STAR_);

break;
case "trunc":
return cljs.core.long$.call(null,n_STAR_);

break;
default:
throw cljs.core.ex_info.call(null,"Unrecognized round type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"given","given",716253602),type], null));

}
})();
if(cljs.core.truth_(modifier)){
return (rounded / modifier);
} else {
return cljs.core.long$.call(null,rounded);
}
});

taoensso.encore.round_STAR_.cljs$lang$maxFixedArity = 3;

taoensso.encore.round0 = (function taoensso$encore$round0(n){
return Math.round(n);
});

taoensso.encore.round1 = (function taoensso$encore$round1(n){
return (Math.round((n * 10.0)) / 10.0);
});

taoensso.encore.round2 = (function taoensso$encore$round2(n){
return (Math.round((n * 100.0)) / 100.0);
});
/**
 * Returns binary exponential backoff value for n<=36.
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(var_args){
var args47296 = [];
var len__37877__auto___47302 = arguments.length;
var i__37878__auto___47303 = (0);
while(true){
if((i__37878__auto___47303 < len__37877__auto___47302)){
args47296.push((arguments[i__37878__auto___47303]));

var G__47304 = (i__37878__auto___47303 + (1));
i__37878__auto___47303 = G__47304;
continue;
} else {
}
break;
}

var G__47298 = args47296.length;
switch (G__47298) {
case 1:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47296.length)].join('')));

}
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1 = (function (n_attempt){
return taoensso.encore.exp_backoff.call(null,n_attempt,null);
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2 = (function (n_attempt,p__47299){
var map__47300 = p__47299;
var map__47300__$1 = ((((!((map__47300 == null)))?((((map__47300.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47300.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47300):map__47300);
var min = cljs.core.get.call(null,map__47300__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.call(null,map__47300__$1,new cljs.core.Keyword(null,"max","max",61366548));
var factor = cljs.core.get.call(null,map__47300__$1,new cljs.core.Keyword(null,"factor","factor",-2103172748),(1000));
var n = (((n_attempt > (36)))?(36):n_attempt);
var b = Math.pow((2),n);
var t = cljs.core.long$.call(null,(((b + cljs.core.rand.call(null,b)) * 0.5) * factor));
var t__$1 = cljs.core.long$.call(null,(cljs.core.truth_(min)?(((t < min))?min:t):t));
var t__$2 = cljs.core.long$.call(null,(cljs.core.truth_(max)?(((t__$1 > max))?max:t__$1):t__$1));
return t__$2;
});

taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = 2;

taoensso.encore.node_target_QMARK_ = cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs");
taoensso.encore.js__QMARK_win = ((typeof window !== 'undefined')?window:null);
/**
 * Like `force` for refs.
 */
taoensso.encore.force_ref = (function taoensso$encore$force_ref(x){
if(taoensso.encore.derefable_QMARK_.call(null,x)){
return cljs.core.deref.call(null,x);
} else {
return x;
}
});
taoensso.encore.merge_meta = (function taoensso$encore$merge_meta(x,m){
return cljs.core.with_meta.call(null,x,taoensso.encore.merge.call(null,cljs.core.meta.call(null,x),m));
});
taoensso.encore.without_meta = (function taoensso$encore$without_meta(x){
if(cljs.core.truth_(cljs.core.meta.call(null,x))){
return cljs.core.with_meta.call(null,x,null);
} else {
return x;
}
});
taoensso.encore.some_EQ_ = (function taoensso$encore$some_EQ_(var_args){
var args47307 = [];
var len__37877__auto___47313 = arguments.length;
var i__37878__auto___47314 = (0);
while(true){
if((i__37878__auto___47314 < len__37877__auto___47313)){
args47307.push((arguments[i__37878__auto___47314]));

var G__47315 = (i__37878__auto___47314 + (1));
i__37878__auto___47314 = G__47315;
continue;
} else {
}
break;
}

var G__47312 = args47307.length;
switch (G__47312) {
case 2:
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__37896__auto__ = (new cljs.core.IndexedSeq(args47307.slice((2)),(0),null));
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37896__auto__);

}
});

taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (taoensso.encore.some_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,x,y));
});

taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__36790__auto__ = taoensso.encore.some_QMARK_.call(null,x);
if(and__36790__auto__){
var and__36790__auto____$1 = cljs.core._EQ_.call(null,x,y);
if(and__36790__auto____$1){
return taoensso.encore.revery_QMARK_.call(null,((function (and__36790__auto____$1,and__36790__auto__){
return (function (p1__47306_SHARP_){
return cljs.core._EQ_.call(null,p1__47306_SHARP_,x);
});})(and__36790__auto____$1,and__36790__auto__))
,more);
} else {
return and__36790__auto____$1;
}
} else {
return and__36790__auto__;
}
});

taoensso.encore.some_EQ_.cljs$lang$applyTo = (function (seq47308){
var G__47309 = cljs.core.first.call(null,seq47308);
var seq47308__$1 = cljs.core.next.call(null,seq47308);
var G__47310 = cljs.core.first.call(null,seq47308__$1);
var seq47308__$2 = cljs.core.next.call(null,seq47308__$1);
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__47309,G__47310,seq47308__$2);
});

taoensso.encore.some_EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Returns first non-nil arg, or nil.
 */
taoensso.encore.nnil = (function taoensso$encore$nnil(var_args){
var args47317 = [];
var len__37877__auto___47324 = arguments.length;
var i__37878__auto___47325 = (0);
while(true){
if((i__37878__auto___47325 < len__37877__auto___47324)){
args47317.push((arguments[i__37878__auto___47325]));

var G__47326 = (i__37878__auto___47325 + (1));
i__37878__auto___47325 = G__47326;
continue;
} else {
}
break;
}

var G__47323 = args47317.length;
switch (G__47323) {
case 0:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__37896__auto__ = (new cljs.core.IndexedSeq(args47317.slice((3)),(0),null));
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37896__auto__);

}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if((x == null)){
return y;
} else {
return x;
}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
if((x == null)){
if((y == null)){
return z;
} else {
return y;
}
} else {
return x;
}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,z,more){
if((x == null)){
if((y == null)){
if((z == null)){
return taoensso.encore.rfirst.call(null,taoensso.encore.some_QMARK_,more);
} else {
return z;
}
} else {
return y;
}
} else {
return x;
}
});

taoensso.encore.nnil.cljs$lang$applyTo = (function (seq47318){
var G__47319 = cljs.core.first.call(null,seq47318);
var seq47318__$1 = cljs.core.next.call(null,seq47318);
var G__47320 = cljs.core.first.call(null,seq47318__$1);
var seq47318__$2 = cljs.core.next.call(null,seq47318__$1);
var G__47321 = cljs.core.first.call(null,seq47318__$2);
var seq47318__$3 = cljs.core.next.call(null,seq47318__$2);
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic(G__47319,G__47320,G__47321,seq47318__$3);
});

taoensso.encore.nnil.cljs$lang$maxFixedArity = (3);

taoensso.encore.parse_version = (function taoensso$encore$parse_version(x){
var vec__47331 = clojure.string.split.call(null,[cljs.core.str(x)].join(''),/-/,(2));
var s_version = cljs.core.nth.call(null,vec__47331,(0),null);
var _QMARK_s_qualifier = cljs.core.nth.call(null,vec__47331,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"version","version",425292698),(function (){var b2__31771__auto__ = cljs.core.re_seq.call(null,/\d+/,s_version);
if(cljs.core.truth_(b2__31771__auto__)){
var s = b2__31771__auto__;
return cljs.core.mapv.call(null,taoensso.encore.as__QMARK_int,s);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"qualifier","qualifier",125841738),(function (){var b2__31771__auto__ = _QMARK_s_qualifier;
if(cljs.core.truth_(b2__31771__auto__)){
var s = b2__31771__auto__;
return clojure.string.lower_case.call(null,s);
} else {
return null;
}
})()], null);
});
/**
 * Version check for dependency conflicts, etc.
 */
taoensso.encore.assert_min_encore_version = (function taoensso$encore$assert_min_encore_version(min_version){
var vec__47344 = taoensso.encore.encore_version;
var xc = cljs.core.nth.call(null,vec__47344,(0),null);
var yc = cljs.core.nth.call(null,vec__47344,(1),null);
var zc = cljs.core.nth.call(null,vec__47344,(2),null);
var vec__47347 = ((cljs.core.vector_QMARK_.call(null,min_version))?min_version:new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(taoensso.encore.parse_version.call(null,min_version)));
var xm = cljs.core.nth.call(null,vec__47347,(0),null);
var ym = cljs.core.nth.call(null,vec__47347,(1),null);
var zm = cljs.core.nth.call(null,vec__47347,(2),null);
var vec__47350 = cljs.core.mapv.call(null,((function (vec__47344,xc,yc,zc,vec__47347,xm,ym,zm){
return (function (p1__47334_SHARP_){
var or__36802__auto__ = p1__47334_SHARP_;
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return (0);
}
});})(vec__47344,xc,yc,zc,vec__47347,xm,ym,zm))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm,ym,zm], null));
var xm__$1 = cljs.core.nth.call(null,vec__47350,(0),null);
var ym__$1 = cljs.core.nth.call(null,vec__47350,(1),null);
var zm__$1 = cljs.core.nth.call(null,vec__47350,(2),null);
if(((xc > xm__$1)) || ((cljs.core._EQ_.call(null,xc,xm__$1)) && (((yc > ym__$1)) || ((cljs.core._EQ_.call(null,yc,ym__$1)) && ((zc >= zm__$1)))))){
return null;
} else {
throw cljs.core.ex_info.call(null,"Insufficient `com.taoensso/encore` version, you may have a dependency conflict: see http://goo.gl/qBbLvC for solutions.",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-version","min-version",-1697197126),clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm__$1,ym__$1,zm__$1], null)),new cljs.core.Keyword(null,"your-version","your-version",-351781765),clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xc,yc,zc], null))], null));
}
});
taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a PersistentQueue.
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var args47353 = [];
var len__37877__auto___47356 = arguments.length;
var i__37878__auto___47357 = (0);
while(true){
if((i__37878__auto___47357 < len__37877__auto___47356)){
args47353.push((arguments[i__37878__auto___47357]));

var G__47358 = (i__37878__auto___47357 + (1));
i__37878__auto___47357 = G__47358;
continue;
} else {
}
break;
}

var G__47355 = args47353.length;
switch (G__47355) {
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47353.length)].join('')));

}
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.call(null,taoensso.encore.queue.call(null),coll);
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
});

taoensso.encore.queue.cljs$lang$maxFixedArity = 1;

taoensso.encore.queue_STAR_ = (function taoensso$encore$queue_STAR_(var_args){
var args__37884__auto__ = [];
var len__37877__auto___47361 = arguments.length;
var i__37878__auto___47362 = (0);
while(true){
if((i__37878__auto___47362 < len__37877__auto___47361)){
args__37884__auto__.push((arguments[i__37878__auto___47362]));

var G__47363 = (i__37878__auto___47362 + (1));
i__37878__auto___47362 = G__47363;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});

taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.call(null,items);
});

taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0);

taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq47360){
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47360));
});

taoensso.encore.vec_STAR_ = cljs.core.vec;

taoensso.encore.set_STAR_ = cljs.core.set;
/**
 * Like `get` for JS objects, Ref. https://goo.gl/eze8hY.
 */
taoensso.encore.oget = (function taoensso$encore$oget(var_args){
var args47364 = [];
var len__37877__auto___47367 = arguments.length;
var i__37878__auto___47368 = (0);
while(true){
if((i__37878__auto___47368 < len__37877__auto___47367)){
args47364.push((arguments[i__37878__auto___47368]));

var G__47369 = (i__37878__auto___47368 + (1));
i__37878__auto___47368 = G__47369;
continue;
} else {
}
break;
}

var G__47366 = args47364.length;
switch (G__47366) {
case 2:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47364.length)].join('')));

}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
return goog.object.get(o,k,null);
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3 = (function (o,k,not_found){
return goog.object.get(o,k,not_found);
});

taoensso.encore.oget.cljs$lang$maxFixedArity = 3;

var sentinel_47376 = {};
/**
 * Like `get-in` for JS objects.
 */
taoensso.encore.oget_in = ((function (sentinel_47376){
return (function taoensso$encore$oget_in(var_args){
var args47373 = [];
var len__37877__auto___47377 = arguments.length;
var i__37878__auto___47378 = (0);
while(true){
if((i__37878__auto___47378 < len__37877__auto___47377)){
args47373.push((arguments[i__37878__auto___47378]));

var G__47379 = (i__37878__auto___47378 + (1));
i__37878__auto___47378 = G__47379;
continue;
} else {
}
break;
}

var G__47375 = args47373.length;
switch (G__47375) {
case 2:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47373.length)].join('')));

}
});})(sentinel_47376))
;

taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2 = ((function (sentinel_47376){
return (function (o,ks){
return taoensso.encore.oget_in.call(null,o,ks,null);
});})(sentinel_47376))
;

taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3 = ((function (sentinel_47376){
return (function (o,ks,not_found){
var o__$1 = o;
var ks__$1 = cljs.core.seq.call(null,ks);
while(true){
if(ks__$1){
var o__$2 = goog.object.get(o__$1,cljs.core.first.call(null,ks__$1),sentinel_47376);
if((o__$2 === sentinel_47376)){
return not_found;
} else {
var G__47381 = o__$2;
var G__47382 = cljs.core.next.call(null,ks__$1);
o__$1 = G__47381;
ks__$1 = G__47382;
continue;
}
} else {
return o__$1;
}
break;
}
});})(sentinel_47376))
;

taoensso.encore.oget_in.cljs$lang$maxFixedArity = 3;

/**
 * Conjoins each non-nil value.
 */
taoensso.encore.conj_some = (function taoensso$encore$conj_some(var_args){
var args47383 = [];
var len__37877__auto___47395 = arguments.length;
var i__37878__auto___47396 = (0);
while(true){
if((i__37878__auto___47396 < len__37877__auto___47395)){
args47383.push((arguments[i__37878__auto___47396]));

var G__47397 = (i__37878__auto___47396 + (1));
i__37878__auto___47396 = G__47397;
continue;
} else {
}
break;
}

var G__47388 = args47383.length;
switch (G__47388) {
case 0:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__37896__auto__ = (new cljs.core.IndexedSeq(args47383.slice((2)),(0),null));
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37896__auto__);

}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if((x == null)){
return coll;
} else {
return cljs.core.conj.call(null,coll,x);
}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.call(null,taoensso.encore.conj_some,taoensso.encore.conj_some.call(null,coll,x),more);
});

taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq47384){
var G__47385 = cljs.core.first.call(null,seq47384);
var seq47384__$1 = cljs.core.next.call(null,seq47384);
var G__47386 = cljs.core.first.call(null,seq47384__$1);
var seq47384__$2 = cljs.core.next.call(null,seq47384__$1);
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic(G__47385,G__47386,seq47384__$2);
});

taoensso.encore.conj_some.cljs$lang$maxFixedArity = (2);


/**
 * Conjoins each truthy value.
 */
taoensso.encore.conj_when = (function taoensso$encore$conj_when(var_args){
var args47389 = [];
var len__37877__auto___47399 = arguments.length;
var i__37878__auto___47400 = (0);
while(true){
if((i__37878__auto___47400 < len__37877__auto___47399)){
args47389.push((arguments[i__37878__auto___47400]));

var G__47401 = (i__37878__auto___47400 + (1));
i__37878__auto___47400 = G__47401;
continue;
} else {
}
break;
}

var G__47394 = args47389.length;
switch (G__47394) {
case 0:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__37896__auto__ = (new cljs.core.IndexedSeq(args47389.slice((2)),(0),null));
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37896__auto__);

}
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.call(null,coll,x);
} else {
return coll;
}
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.call(null,taoensso.encore.conj_when,taoensso.encore.conj_when.call(null,coll,x),more);
});

taoensso.encore.conj_when.cljs$lang$applyTo = (function (seq47390){
var G__47391 = cljs.core.first.call(null,seq47390);
var seq47390__$1 = cljs.core.next.call(null,seq47390);
var G__47392 = cljs.core.first.call(null,seq47390__$1);
var seq47390__$2 = cljs.core.next.call(null,seq47390__$1);
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__47391,G__47392,seq47390__$2);
});

taoensso.encore.conj_when.cljs$lang$maxFixedArity = (2);

/**
 * Assocs each kv iff its value is not nil.
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var args47403 = [];
var len__37877__auto___47417 = arguments.length;
var i__37878__auto___47418 = (0);
while(true){
if((i__37878__auto___47418 < len__37877__auto___47417)){
args47403.push((arguments[i__37878__auto___47418]));

var G__47419 = (i__37878__auto___47418 + (1));
i__37878__auto___47418 = G__47419;
continue;
} else {
}
break;
}

var G__47409 = args47403.length;
switch (G__47409) {
case 3:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__37896__auto__ = (new cljs.core.IndexedSeq(args47403.slice((3)),(0),null));
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37896__auto__);

}
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
} else {
return cljs.core.assoc.call(null,m,k,v);
}
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs.call(null,(function (acc,k__$1,v__$1){
return taoensso.encore.assoc_some.call(null,acc,k__$1,v__$1);
}),taoensso.encore.assoc_some.call(null,m,k,v),kvs);
});

taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq47404){
var G__47405 = cljs.core.first.call(null,seq47404);
var seq47404__$1 = cljs.core.next.call(null,seq47404);
var G__47406 = cljs.core.first.call(null,seq47404__$1);
var seq47404__$2 = cljs.core.next.call(null,seq47404__$1);
var G__47407 = cljs.core.first.call(null,seq47404__$2);
var seq47404__$3 = cljs.core.next.call(null,seq47404__$2);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__47405,G__47406,G__47407,seq47404__$3);
});

taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (3);


/**
 * Assocs each kv iff its val is truthy.
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var args47410 = [];
var len__37877__auto___47421 = arguments.length;
var i__37878__auto___47422 = (0);
while(true){
if((i__37878__auto___47422 < len__37877__auto___47421)){
args47410.push((arguments[i__37878__auto___47422]));

var G__47423 = (i__37878__auto___47422 + (1));
i__37878__auto___47422 = G__47423;
continue;
} else {
}
break;
}

var G__47416 = args47410.length;
switch (G__47416) {
case 3:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__37896__auto__ = (new cljs.core.IndexedSeq(args47410.slice((3)),(0),null));
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37896__auto__);

}
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.call(null,m,k,v);
} else {
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
}
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs.call(null,(function (acc,k__$1,v__$1){
return taoensso.encore.assoc_when.call(null,acc,k__$1,v__$1);
}),taoensso.encore.assoc_when.call(null,m,k,v),kvs);
});

taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq47411){
var G__47412 = cljs.core.first.call(null,seq47411);
var seq47411__$1 = cljs.core.next.call(null,seq47411);
var G__47413 = cljs.core.first.call(null,seq47411__$1);
var seq47411__$2 = cljs.core.next.call(null,seq47411__$1);
var G__47414 = cljs.core.first.call(null,seq47411__$2);
var seq47411__$3 = cljs.core.next.call(null,seq47411__$2);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__47412,G__47413,G__47414,seq47411__$3);
});

taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (3);

/**
 * Like `subvec` but never throws (snaps to valid start and end indexes).
 */
taoensso.encore.get_subvec = (function taoensso$encore$get_subvec(var_args){
var args47425 = [];
var len__37877__auto___47428 = arguments.length;
var i__37878__auto___47429 = (0);
while(true){
if((i__37878__auto___47429 < len__37877__auto___47428)){
args47425.push((arguments[i__37878__auto___47429]));

var G__47430 = (i__37878__auto___47429 + (1));
i__37878__auto___47429 = G__47430;
continue;
} else {
}
break;
}

var G__47427 = args47425.length;
switch (G__47427) {
case 2:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47425.length)].join('')));

}
});

taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.count.call(null,v);
if((start__$1 >= vlen)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.call(null,v,start__$1,vlen);
}
});

taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3 = (function (v,start,end){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.long$.call(null,cljs.core.count.call(null,v));
var end__$1 = (((end > vlen))?vlen:end);
if((start__$1 >= end__$1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.call(null,v,start__$1,end__$1);
}
});

taoensso.encore.get_subvec.cljs$lang$maxFixedArity = 3;

/**
 * Like `get-subvec` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of vector.
 */
taoensso.encore.get_subvector = (function taoensso$encore$get_subvector(var_args){
var args47432 = [];
var len__37877__auto___47435 = arguments.length;
var i__37878__auto___47436 = (0);
while(true){
if((i__37878__auto___47436 < len__37877__auto___47435)){
args47432.push((arguments[i__37878__auto___47436]));

var G__47437 = (i__37878__auto___47436 + (1));
i__37878__auto___47436 = G__47437;
continue;
} else {
}
break;
}

var G__47434 = args47432.length;
switch (G__47434) {
case 2:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47432.length)].join('')));

}
});

taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var vlen = cljs.core.count.call(null,v);
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
return cljs.core.subvec.call(null,v,start__$2,vlen);
} else {
if((start >= vlen)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.call(null,v,start,vlen);
}
}
});

taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3 = (function (v,start,length){
if((length <= (0))){
return cljs.core.PersistentVector.EMPTY;
} else {
var vlen = cljs.core.long$.call(null,cljs.core.count.call(null,v));
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
var end = (start__$2 + length);
var end__$1 = (((end > vlen))?vlen:end);
return cljs.core.subvec.call(null,v,start__$2,end__$1);
} else {
var end = (start + length);
var end__$1 = (((end > vlen))?vlen:end);
if((start >= end__$1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.call(null,v,start,end__$1);
}
}
}
});

taoensso.encore.get_subvector.cljs$lang$maxFixedArity = 3;

taoensso.encore.vnext = (function taoensso$encore$vnext(v){
if((cljs.core.count.call(null,v) > (1))){
return cljs.core.subvec.call(null,v,(1));
} else {
return null;
}
});
taoensso.encore.vsplit_last = (function taoensso$encore$vsplit_last(v){
var c = cljs.core.count.call(null,v);
if((c > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((c > (1)))?cljs.core.pop.call(null,v):null),cljs.core.peek.call(null,v)], null);
} else {
return null;
}
});
taoensso.encore.vsplit_first = (function taoensso$encore$vsplit_first(v){
var c = cljs.core.count.call(null,v);
if((c > (0))){
var vec__47442 = v;
var v1 = cljs.core.nth.call(null,vec__47442,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,(((c > (1)))?cljs.core.subvec.call(null,v,(1)):null)], null);
} else {
return null;
}
});
/**
 * Faster (f (vec (butlast xs)) (last x)).
 */
taoensso.encore.fsplit_last = (function taoensso$encore$fsplit_last(f,xs){
var butlast = cljs.core.PersistentVector.EMPTY;
var xs__$1 = xs;
while(true){
var vec__47448 = xs__$1;
var seq__47449 = cljs.core.seq.call(null,vec__47448);
var first__47450 = cljs.core.first.call(null,seq__47449);
var seq__47449__$1 = cljs.core.next.call(null,seq__47449);
var x1 = first__47450;
var xn = seq__47449__$1;
if(xn){
var G__47451 = cljs.core.conj.call(null,butlast,x1);
var G__47452 = xn;
butlast = G__47451;
xs__$1 = G__47452;
continue;
} else {
return f.call(null,butlast,x1);
}
break;
}
});
taoensso.encore.takev = (function taoensso$encore$takev(n,coll){
if(cljs.core.vector_QMARK_.call(null,coll)){
return taoensso.encore.get_subvector.call(null,coll,(0),n);
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,n),coll);
}
});
taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.call(null,taoensso.encore.set_STAR_.call(null,x),null);
});
taoensso.encore.distinct_elements_QMARK_ = (function taoensso$encore$distinct_elements_QMARK_(x){
return (cljs.core.set_QMARK_.call(null,x)) || (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,taoensso.encore.set_STAR_.call(null,x))));
});
/**
 * (seq-kvs {:a :A}) => (:a :A).
 */
taoensso.encore.seq_kvs = cljs.core.partial.call(null,cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but calls `seq-kvs` on final arg.
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(var_args){
var args__37884__auto__ = [];
var len__37877__auto___47455 = arguments.length;
var i__37878__auto___47456 = (0);
while(true){
if((i__37878__auto___47456 < len__37877__auto___47455)){
args__37884__auto__.push((arguments[i__37878__auto___47456]));

var G__47457 = (i__37878__auto___47456 + (1));
i__37878__auto___47456 = G__47457;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,f,taoensso.encore.fsplit_last.call(null,(function (xs,lx){
return cljs.core.concat.call(null,xs,taoensso.encore.seq_kvs.call(null,lx));
}),args));
});

taoensso.encore.mapply.cljs$lang$maxFixedArity = (1);

taoensso.encore.mapply.cljs$lang$applyTo = (function (seq47453){
var G__47454 = cljs.core.first.call(null,seq47453);
var seq47453__$1 = cljs.core.next.call(null,seq47453);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic(G__47454,seq47453__$1);
});

/**
 * Like `into` but supports multiple "from"s.
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var args47458 = [];
var len__37877__auto___47464 = arguments.length;
var i__37878__auto___47465 = (0);
while(true){
if((i__37878__auto___47465 < len__37877__auto___47464)){
args47458.push((arguments[i__37878__auto___47465]));

var G__47466 = (i__37878__auto___47465 + (1));
i__37878__auto___47465 = G__47466;
continue;
} else {
}
break;
}

var G__47463 = args47458.length;
switch (G__47463) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__37896__auto__ = (new cljs.core.IndexedSeq(args47458.slice((2)),(0),null));
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37896__auto__);

}
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.call(null,to,from);
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (acc,in$){
return cljs.core.reduce.call(null,cljs.core.conj_BANG_,acc,in$);
}),cljs.core.transient$.call(null,to),cljs.core.cons.call(null,from,more)));
});

taoensso.encore.into_all.cljs$lang$applyTo = (function (seq47459){
var G__47460 = cljs.core.first.call(null,seq47459);
var seq47459__$1 = cljs.core.next.call(null,seq47459);
var G__47461 = cljs.core.first.call(null,seq47459__$1);
var seq47459__$2 = cljs.core.next.call(null,seq47459__$1);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic(G__47460,G__47461,seq47459__$2);
});

taoensso.encore.into_all.cljs$lang$maxFixedArity = (2);

/**
 * Like `repeatedly` but faster and `conj`s items into given collection.
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if(((n > (10))) && (taoensso.encore.editable_QMARK_.call(null,coll))){
return cljs.core.persistent_BANG_.call(null,taoensso.encore.reduce_n.call(null,(function (acc,_){
return cljs.core.conj_BANG_.call(null,acc,f.call(null));
}),cljs.core.transient$.call(null,coll),n));
} else {
return taoensso.encore.reduce_n.call(null,(function (acc,_){
return cljs.core.conj.call(null,acc,f.call(null));
}),coll,n);
}
});
taoensso.encore.into_BANG_ = (function taoensso$encore$into_BANG_(var_args){
var args47468 = [];
var len__37877__auto___47471 = arguments.length;
var i__37878__auto___47472 = (0);
while(true){
if((i__37878__auto___47472 < len__37877__auto___47471)){
args47468.push((arguments[i__37878__auto___47472]));

var G__47473 = (i__37878__auto___47472 + (1));
i__37878__auto___47472 = G__47473;
continue;
} else {
}
break;
}

var G__47470 = args47468.length;
switch (G__47470) {
case 2:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47468.length)].join('')));

}
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.reduce.call(null,cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (to,xform,from){
return cljs.core.transduce.call(null,xform,cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$lang$maxFixedArity = 3;

taoensso.encore.xdistinct = (function taoensso$encore$xdistinct(var_args){
var args47475 = [];
var len__37877__auto___47478 = arguments.length;
var i__37878__auto___47479 = (0);
while(true){
if((i__37878__auto___47479 < len__37877__auto___47478)){
args47475.push((arguments[i__37878__auto___47479]));

var G__47480 = (i__37878__auto___47479 + (1));
i__37878__auto___47479 = G__47480;
continue;
} else {
}
break;
}

var G__47477 = args47475.length;
switch (G__47477) {
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47475.length)].join('')));

}
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.distinct.call(null);
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (function (rf){
var seen_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return ((function (seen_){
return (function() {
var G__47482 = null;
var G__47482__0 = (function (){
return rf.call(null);
});
var G__47482__1 = (function (acc){
return rf.call(null,acc);
});
var G__47482__2 = (function (acc,input){
var k = keyfn.call(null,input);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen_),k)){
return acc;
} else {
cljs.core._vreset_BANG_.call(null,seen_,cljs.core.conj.call(null,cljs.core._deref.call(null,seen_),k));

return rf.call(null,acc,input);
}
});
G__47482 = function(acc,input){
switch(arguments.length){
case 0:
return G__47482__0.call(this);
case 1:
return G__47482__1.call(this,acc);
case 2:
return G__47482__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47482.cljs$core$IFn$_invoke$arity$0 = G__47482__0;
G__47482.cljs$core$IFn$_invoke$arity$1 = G__47482__1;
G__47482.cljs$core$IFn$_invoke$arity$2 = G__47482__2;
return G__47482;
})()
;})(seen_))
});
});

taoensso.encore.xdistinct.cljs$lang$maxFixedArity = 1;

taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc.call(null,m__$1,k,f.call(null,v));
}),m,m);
}
});

taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc.call(null,m__$1,f.call(null,k),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
});

taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,k))){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});

taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});

taoensso.encore.remove_keys = (function taoensso$encore$remove_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,k))){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});

taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});
taoensso.encore.ks_EQ_ = (function taoensso$encore$ks_EQ_(ks,m){
return cljs.core._EQ_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});

taoensso.encore.ks_LT__EQ_ = (function taoensso$encore$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});

taoensso.encore.ks_GT__EQ_ = (function taoensso$encore$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});

taoensso.encore.ks_nnil_QMARK_ = (function taoensso$encore$ks_nnil_QMARK_(ks,m){
return taoensso.encore.revery_QMARK_.call(null,(function (p1__47483_SHARP_){
return taoensso.encore.some_QMARK_.call(null,cljs.core.get.call(null,m,p1__47483_SHARP_));
}),ks);
});
/**
 * Like `core/update-in` but resolves an ambiguity with empty `ks`,
 *   adds support for `not-found`, `:swap/dissoc` vals.
 */
taoensso.encore.update_in = (function taoensso$encore$update_in(var_args){
var args47484 = [];
var len__37877__auto___47487 = arguments.length;
var i__37878__auto___47488 = (0);
while(true){
if((i__37878__auto___47488 < len__37877__auto___47487)){
args47484.push((arguments[i__37878__auto___47488]));

var G__47489 = (i__37878__auto___47488 + (1));
i__37878__auto___47488 = G__47489;
continue;
} else {
}
break;
}

var G__47486 = args47484.length;
switch (G__47486) {
case 3:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47484.length)].join('')));

}
});

taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,f){
return taoensso.encore.update_in.call(null,m,ks,null,f);
});

taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4 = (function (m,ks,not_found,f){
var b2__31771__auto__ = cljs.core.seq.call(null,ks);
if(b2__31771__auto__){
var ks_seq = b2__31771__auto__;
var k = cljs.core.nth.call(null,ks,(0));
var b2__31771__auto____$1 = cljs.core.next.call(null,ks_seq);
if(b2__31771__auto____$1){
var ks__$1 = b2__31771__auto____$1;
return cljs.core.assoc.call(null,m,k,taoensso.encore.update_in.call(null,cljs.core.get.call(null,m,k),ks__$1,not_found,f));
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
return cljs.core.dissoc.call(null,m,k);
} else {
var v = f.call(null,cljs.core.get.call(null,m,k,not_found));
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,v,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
return cljs.core.dissoc.call(null,m,k);
} else {
return cljs.core.assoc.call(null,m,k,v);
}
}
}
} else {
return f.call(null,m);
}
});

taoensso.encore.update_in.cljs$lang$maxFixedArity = 4;

taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(var_args){
var args47491 = [];
var len__37877__auto___47494 = arguments.length;
var i__37878__auto___47495 = (0);
while(true){
if((i__37878__auto___47495 < len__37877__auto___47494)){
args47491.push((arguments[i__37878__auto___47495]));

var G__47496 = (i__37878__auto___47495 + (1));
i__37878__auto___47495 = G__47496;
continue;
} else {
}
break;
}

var G__47493 = args47491.length;
switch (G__47493) {
case 3:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47491.length)].join('')));

}
});

taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (coll,ks,k){
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,coll,ks),k);
});

taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (coll,ks){
if(cljs.core.seq.call(null,ks)){
return taoensso.encore.fsplit_last.call(null,(function (ks__$1,lk){
return taoensso.encore.contains_in_QMARK_.call(null,coll,ks__$1,lk);
}),ks);
} else {
return false;
}
});

taoensso.encore.contains_in_QMARK_.cljs$lang$maxFixedArity = 3;

taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(var_args){
var args47498 = [];
var len__37877__auto___47505 = arguments.length;
var i__37878__auto___47506 = (0);
while(true){
if((i__37878__auto___47506 < len__37877__auto___47505)){
args47498.push((arguments[i__37878__auto___47506]));

var G__47507 = (i__37878__auto___47506 + (1));
i__37878__auto___47506 = G__47507;
continue;
} else {
}
break;
}

var G__47504 = args47498.length;
switch (G__47504) {
case 3:
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__37896__auto__ = (new cljs.core.IndexedSeq(args47498.slice((3)),(0),null));
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37896__auto__);

}
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,dissoc_k){
return taoensso.encore.update_in.call(null,m,ks,null,(function (m__$1){
return cljs.core.dissoc.call(null,m__$1,dissoc_k);
}));
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_k,more){
return taoensso.encore.update_in.call(null,m,ks,null,(function (m__$1){
return cljs.core.apply.call(null,cljs.core.dissoc,m__$1,dissoc_k,more);
}));
});

taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq47499){
var G__47500 = cljs.core.first.call(null,seq47499);
var seq47499__$1 = cljs.core.next.call(null,seq47499);
var G__47501 = cljs.core.first.call(null,seq47499__$1);
var seq47499__$2 = cljs.core.next.call(null,seq47499__$1);
var G__47502 = cljs.core.first.call(null,seq47499__$2);
var seq47499__$3 = cljs.core.next.call(null,seq47499__$2);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic(G__47500,G__47501,G__47502,seq47499__$3);
});

taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (3);

/**
 * Greedy version of `interleave`.
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var args47509 = [];
var len__37877__auto___47515 = arguments.length;
var i__37878__auto___47516 = (0);
while(true){
if((i__37878__auto___47516 < len__37877__auto___47515)){
args47509.push((arguments[i__37878__auto___47516]));

var G__47517 = (i__37878__auto___47516 + (1));
i__37878__auto___47516 = G__47517;
continue;
} else {
}
break;
}

var G__47514 = args47509.length;
switch (G__47514) {
case 0:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__37896__auto__ = (new cljs.core.IndexedSeq(args47509.slice((2)),(0),null));
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37896__auto__);

}
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
if((s1) && (s2)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),taoensso.encore.interleave_all.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1)));
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,taoensso.encore.interleave_all,cljs.core.map.call(null,cljs.core.rest,ss)));
}),null,null));
});

taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq47510){
var G__47511 = cljs.core.first.call(null,seq47510);
var seq47510__$1 = cljs.core.next.call(null,seq47510);
var G__47512 = cljs.core.first.call(null,seq47510__$1);
var seq47510__$2 = cljs.core.next.call(null,seq47510__$1);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__47511,G__47512,seq47510__$2);
});

taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2);

taoensso.encore.vinterleave_all = (function taoensso$encore$vinterleave_all(c1,c2){
var v = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
while(true){
if((s1) && (s2)){
var G__47519 = cljs.core.conj_BANG_.call(null,cljs.core.conj_BANG_.call(null,v,cljs.core.first.call(null,s1)),cljs.core.first.call(null,s2));
var G__47520 = cljs.core.next.call(null,s1);
var G__47521 = cljs.core.next.call(null,s2);
v = G__47519;
s1 = G__47520;
s2 = G__47521;
continue;
} else {
if(s1){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core.conj_BANG_,v,s1));
} else {
if(s2){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core.conj_BANG_,v,s2));
} else {
return cljs.core.persistent_BANG_.call(null,v);
}
}
}
break;
}
});
var not_found_47524 = {};
taoensso.encore._merge_with = ((function (not_found_47524){
return (function taoensso$encore$_merge_with(nest_QMARK_,f,maps){
return cljs.core.reduce.call(null,((function (not_found_47524){
return (function (acc,in$){
if((in$ == null)){
return acc;
} else {
return cljs.core.reduce_kv.call(null,((function (not_found_47524){
return (function taoensso$encore$_merge_with_$_rf2(acc__$1,k,rv){
var lv = cljs.core.get.call(null,acc__$1,k,not_found_47524);
if((lv === not_found_47524)){
return cljs.core.assoc.call(null,acc__$1,k,rv);
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,rv,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
return cljs.core.dissoc.call(null,acc__$1,k);
} else {
if(cljs.core.truth_((function (){var and__36790__auto__ = nest_QMARK_;
if(cljs.core.truth_(and__36790__auto__)){
return (cljs.core.map_QMARK_.call(null,rv)) && (cljs.core.map_QMARK_.call(null,lv));
} else {
return and__36790__auto__;
}
})())){
return cljs.core.assoc.call(null,acc__$1,k,cljs.core.reduce_kv.call(null,taoensso$encore$_merge_with_$_rf2,lv,rv));
} else {
var new_rv = f.call(null,lv,rv);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,new_rv,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
return cljs.core.dissoc.call(null,acc__$1,k);
} else {
return cljs.core.assoc.call(null,acc__$1,k,new_rv);
}
}
}
}
});})(not_found_47524))
,(function (){var or__36802__auto__ = acc;
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),in$);
}
});})(not_found_47524))
,null,maps);
});})(not_found_47524))
;
/**
 * Like `core/merge` but faster, supports `:swap/dissoc` rvals.
 */
taoensso.encore.merge = (function taoensso$encore$merge(var_args){
var args__37884__auto__ = [];
var len__37877__auto___47531 = arguments.length;
var i__37878__auto___47532 = (0);
while(true){
if((i__37878__auto___47532 < len__37877__auto___47531)){
args__37884__auto__.push((arguments[i__37878__auto___47532]));

var G__47533 = (i__37878__auto___47532 + (1));
i__37878__auto___47532 = G__47533;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});

taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return taoensso.encore._merge_with.call(null,false,(function (x,y){
return y;
}),maps);
});

taoensso.encore.merge.cljs$lang$maxFixedArity = (0);

taoensso.encore.merge.cljs$lang$applyTo = (function (seq47525){
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47525));
});


/**
 * Like `core/merge-with` but faster, supports `:swap/dissoc` rvals.
 */
taoensso.encore.merge_with = (function taoensso$encore$merge_with(var_args){
var args__37884__auto__ = [];
var len__37877__auto___47534 = arguments.length;
var i__37878__auto___47535 = (0);
while(true){
if((i__37878__auto___47535 < len__37877__auto___47534)){
args__37884__auto__.push((arguments[i__37878__auto___47535]));

var G__47536 = (i__37878__auto___47535 + (1));
i__37878__auto___47535 = G__47536;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return taoensso.encore._merge_with.call(null,false,f,maps);
});

taoensso.encore.merge_with.cljs$lang$maxFixedArity = (1);

taoensso.encore.merge_with.cljs$lang$applyTo = (function (seq47526){
var G__47527 = cljs.core.first.call(null,seq47526);
var seq47526__$1 = cljs.core.next.call(null,seq47526);
return taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic(G__47527,seq47526__$1);
});


/**
 * Like `merge` but does nested merging.
 */
taoensso.encore.nested_merge = (function taoensso$encore$nested_merge(var_args){
var args__37884__auto__ = [];
var len__37877__auto___47537 = arguments.length;
var i__37878__auto___47538 = (0);
while(true){
if((i__37878__auto___47538 < len__37877__auto___47537)){
args__37884__auto__.push((arguments[i__37878__auto___47538]));

var G__47539 = (i__37878__auto___47538 + (1));
i__37878__auto___47538 = G__47539;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});

taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return taoensso.encore._merge_with.call(null,new cljs.core.Keyword(null,"nest","nest",-314993663),(function (x,y){
return y;
}),maps);
});

taoensso.encore.nested_merge.cljs$lang$maxFixedArity = (0);

taoensso.encore.nested_merge.cljs$lang$applyTo = (function (seq47528){
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47528));
});


/**
 * Like `merge-with` but does nested merging.
 */
taoensso.encore.nested_merge_with = (function taoensso$encore$nested_merge_with(var_args){
var args__37884__auto__ = [];
var len__37877__auto___47540 = arguments.length;
var i__37878__auto___47541 = (0);
while(true){
if((i__37878__auto___47541 < len__37877__auto___47540)){
args__37884__auto__.push((arguments[i__37878__auto___47541]));

var G__47542 = (i__37878__auto___47541 + (1));
i__37878__auto___47541 = G__47542;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return taoensso.encore._merge_with.call(null,new cljs.core.Keyword(null,"nest","nest",-314993663),f,maps);
});

taoensso.encore.nested_merge_with.cljs$lang$maxFixedArity = (1);

taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq47529){
var G__47530 = cljs.core.first.call(null,seq47529);
var seq47529__$1 = cljs.core.next.call(null,seq47529);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic(G__47530,seq47529__$1);
});


/**
* @constructor
*/
taoensso.encore.Swapped = (function (newv,returnv){
this.newv = newv;
this.returnv = returnv;
})

taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newv","newv",-238403387,null),new cljs.core.Symbol(null,"returnv","returnv",-1488668972,null)], null);
});

taoensso.encore.Swapped.cljs$lang$type = true;

taoensso.encore.Swapped.cljs$lang$ctorStr = "taoensso.encore/Swapped";

taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"taoensso.encore/Swapped");
});

taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(newv,returnv){
return (new taoensso.encore.Swapped(newv,returnv));
});


taoensso.encore.swapped_QMARK_ = (function taoensso$encore$swapped_QMARK_(x){
return (x instanceof taoensso.encore.Swapped);
});

taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val));
});

taoensso.encore.swapped_vec = (function taoensso$encore$swapped_vec(x){
if((x instanceof taoensso.encore.Swapped)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x.newv,x.returnv], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});

taoensso.encore.atom_tag = new cljs.core.Symbol(null,"clojure.lang.IAtom","clojure.lang.IAtom",2048990995,null);
/**
 * Used internally by memoization utils.
 */
taoensso.encore._swap_val_BANG_ = (function taoensso$encore$_swap_val_BANG_(atom_,k,f){
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var v1 = f.call(null,cljs.core.get.call(null,m0,k));
var m1 = cljs.core.assoc.call(null,m0,k,v1);
if((function (){
cljs.core.reset_BANG_.call(null,atom_,m1);

return true;
})()
){
return v1;
} else {
continue;
}
break;
}
});
taoensso.encore._swap_k0_BANG_ = (function taoensso$encore$_swap_k0_BANG_(return$,atom_,f){
while(true){
var v0 = cljs.core.deref.call(null,atom_);
var s1 = f.call(null,v0);
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
if((function (){
cljs.core.reset_BANG_.call(null,atom_,v1);

return true;
})()
){
if(sw_QMARK_){
return s1.returnv;
} else {
return return$.call(null,v0,v1);
}
} else {
continue;
}
break;
}
});

taoensso.encore._reset_k0_BANG_ = (function taoensso$encore$_reset_k0_BANG_(return$,atom_,v1){
while(true){
var v0 = cljs.core.deref.call(null,atom_);
if((function (){
cljs.core.reset_BANG_.call(null,atom_,v1);

return true;
})()
){
return return$.call(null,v0,v1);
} else {
continue;
}
break;
}
});

taoensso.encore._swap_k1_BANG_ = (function taoensso$encore$_swap_k1_BANG_(return$,atom_,k,not_found,f){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var m1 = cljs.core.dissoc.call(null,m0,k);
if((function (){
cljs.core.reset_BANG_.call(null,atom_,m1);

return true;
})()
){
return return$.call(null,cljs.core.get.call(null,m0,k,not_found),new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782));
} else {
continue;
}
break;
}
} else {
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var v0 = cljs.core.get.call(null,m0,k,not_found);
var s1 = f.call(null,v0);
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
var m1 = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,v1,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))?cljs.core.dissoc.call(null,m0,k):cljs.core.assoc.call(null,m0,k,v1));
if((function (){
cljs.core.reset_BANG_.call(null,atom_,m1);

return true;
})()
){
if(sw_QMARK_){
return s1.returnv;
} else {
return return$.call(null,v0,v1);
}
} else {
continue;
}
break;
}
}
});

taoensso.encore._reset_k1_BANG_ = (function taoensso$encore$_reset_k1_BANG_(return$,atom_,k,not_found,v1){
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var m1 = cljs.core.assoc.call(null,m0,k,v1);
if((function (){
cljs.core.reset_BANG_.call(null,atom_,m1);

return true;
})()
){
return return$.call(null,cljs.core.get.call(null,m0,k,not_found),v1);
} else {
continue;
}
break;
}
});

taoensso.encore._swap_kn_BANG_ = (function taoensso$encore$_swap_kn_BANG_(return$,atom_,ks,not_found,f){
var b2__31771__auto__ = cljs.core.seq.call(null,ks);
if(b2__31771__auto__){
var ks_seq = b2__31771__auto__;
if(cljs.core.next.call(null,ks_seq)){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var m1 = taoensso.encore.fsplit_last.call(null,((function (m0,ks_seq,b2__31771__auto__){
return (function (ks__$1,lk){
return taoensso.encore.dissoc_in.call(null,m0,ks__$1,lk);
});})(m0,ks_seq,b2__31771__auto__))
,ks);
if((function (){
cljs.core.reset_BANG_.call(null,atom_,m1);

return true;
})()
){
return return$.call(null,cljs.core.get_in.call(null,m0,ks,not_found),new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782));
} else {
continue;
}
break;
}
} else {
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var v0 = cljs.core.get_in.call(null,m0,ks,not_found);
var s1 = f.call(null,v0);
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
var m1 = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,v1,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))?taoensso.encore.fsplit_last.call(null,((function (m0,v0,s1,sw_QMARK_,v1,ks_seq,b2__31771__auto__){
return (function (ks__$1,lk){
return taoensso.encore.dissoc_in.call(null,m0,ks__$1,lk);
});})(m0,v0,s1,sw_QMARK_,v1,ks_seq,b2__31771__auto__))
,ks):cljs.core.assoc_in.call(null,m0,ks,v1));
if((function (){
cljs.core.reset_BANG_.call(null,atom_,m1);

return true;
})()
){
if(sw_QMARK_){
return s1.returnv;
} else {
return return$.call(null,v0,v1);
}
} else {
continue;
}
break;
}
}
} else {
return taoensso.encore._swap_k1_BANG_.call(null,return$,atom_,cljs.core.nth.call(null,ks,(0)),not_found,f);
}
} else {
return taoensso.encore._swap_k0_BANG_.call(null,return$,atom_,f);
}
});

taoensso.encore._reset_kn_BANG_ = (function taoensso$encore$_reset_kn_BANG_(return$,atom_,ks,not_found,v1){
var b2__31771__auto__ = cljs.core.seq.call(null,ks);
if(b2__31771__auto__){
var ks_seq = b2__31771__auto__;
if(cljs.core.next.call(null,ks_seq)){
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var m1 = cljs.core.assoc_in.call(null,m0,ks,v1);
if((function (){
cljs.core.reset_BANG_.call(null,atom_,m1);

return true;
})()
){
return return$.call(null,cljs.core.get_in.call(null,m0,ks,not_found),v1);
} else {
continue;
}
break;
}
} else {
return taoensso.encore._reset_k1_BANG_.call(null,return$,atom_,cljs.core.nth.call(null,ks,(0)),not_found,v1);
}
} else {
return taoensso.encore._reset_k0_BANG_.call(null,return$,atom_,v1);
}
});
var return_47546 = (function (v0,v1){
return v1;
});
/**
 * Low-level util, returns <new-key-val> or <swapped-return-val>.
 */
taoensso.encore.swap_val_BANG_ = ((function (return_47546){
return (function taoensso$encore$swap_val_BANG_(var_args){
var args47543 = [];
var len__37877__auto___47547 = arguments.length;
var i__37878__auto___47548 = (0);
while(true){
if((i__37878__auto___47548 < len__37877__auto___47547)){
args47543.push((arguments[i__37878__auto___47548]));

var G__47549 = (i__37878__auto___47548 + (1));
i__37878__auto___47548 = G__47549;
continue;
} else {
}
break;
}

var G__47545 = args47543.length;
switch (G__47545) {
case 3:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47543.length)].join('')));

}
});})(return_47546))
;

taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_47546){
return (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_.call(null,return_47546,atom_,k,null,f);
});})(return_47546))
;

taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_47546){
return (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_.call(null,return_47546,atom_,k,not_found,f);
});})(return_47546))
;

taoensso.encore.swap_val_BANG_.cljs$lang$maxFixedArity = 4;

var return_47554 = (function (v0,v1){
return v0;
});
/**
 * Low-level util, returns <old-key-val>.
 */
taoensso.encore.reset_val_BANG_ = ((function (return_47554){
return (function taoensso$encore$reset_val_BANG_(var_args){
var args47551 = [];
var len__37877__auto___47555 = arguments.length;
var i__37878__auto___47556 = (0);
while(true){
if((i__37878__auto___47556 < len__37877__auto___47555)){
args47551.push((arguments[i__37878__auto___47556]));

var G__47557 = (i__37878__auto___47556 + (1));
i__37878__auto___47556 = G__47557;
continue;
} else {
}
break;
}

var G__47553 = args47551.length;
switch (G__47553) {
case 3:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47551.length)].join('')));

}
});})(return_47554))
;

taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_47554){
return (function (atom_,k,val){
return taoensso.encore._reset_k1_BANG_.call(null,return_47554,atom_,k,null,val);
});})(return_47554))
;

taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_47554){
return (function (atom_,k,not_found,val){
return taoensso.encore._reset_k1_BANG_.call(null,return_47554,atom_,k,not_found,val);
});})(return_47554))
;

taoensso.encore.reset_val_BANG_.cljs$lang$maxFixedArity = 4;

var return_47562 = (function (v0,v1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,v1], null);
});
/**
 * Low-level util, returns [<old-key-val> <new-key-val>].
 */
taoensso.encore.swap_val_BANG__STAR_ = ((function (return_47562){
return (function taoensso$encore$swap_val_BANG__STAR_(var_args){
var args47559 = [];
var len__37877__auto___47563 = arguments.length;
var i__37878__auto___47564 = (0);
while(true){
if((i__37878__auto___47564 < len__37877__auto___47563)){
args47559.push((arguments[i__37878__auto___47564]));

var G__47565 = (i__37878__auto___47564 + (1));
i__37878__auto___47564 = G__47565;
continue;
} else {
}
break;
}

var G__47561 = args47559.length;
switch (G__47561) {
case 3:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47559.length)].join('')));

}
});})(return_47562))
;

taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = ((function (return_47562){
return (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_.call(null,return_47562,atom_,k,null,f);
});})(return_47562))
;

taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = ((function (return_47562){
return (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_.call(null,return_47562,atom_,k,not_found,f);
});})(return_47562))
;

taoensso.encore.swap_val_BANG__STAR_.cljs$lang$maxFixedArity = 4;

/**
 * Removes and returns value mapped to key.
 */
taoensso.encore.pull_val_BANG_ = (function taoensso$encore$pull_val_BANG_(var_args){
var args47567 = [];
var len__37877__auto___47573 = arguments.length;
var i__37878__auto___47574 = (0);
while(true){
if((i__37878__auto___47574 < len__37877__auto___47573)){
args47567.push((arguments[i__37878__auto___47574]));

var G__47575 = (i__37878__auto___47574 + (1));
i__37878__auto___47574 = G__47575;
continue;
} else {
}
break;
}

var G__47569 = args47567.length;
switch (G__47569) {
case 2:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47567.length)].join('')));

}
});

taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,k){
return taoensso.encore.pull_val_BANG_.call(null,atom_,k,null);
});

taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,not_found){
var vec__47570 = taoensso.encore.swap_val_BANG__STAR_.call(null,atom_,k,not_found,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782));
var v0 = cljs.core.nth.call(null,vec__47570,(0),null);
return v0;
});

taoensso.encore.pull_val_BANG_.cljs$lang$maxFixedArity = 3;

var not_found_47579 = {};
/**
 * Maps value to key and returns true iff the mapped value changed or
 *  was created.
 */
taoensso.encore.reset_val_BANG__QMARK_ = ((function (not_found_47579){
return (function taoensso$encore$reset_val_BANG__QMARK_(atom_,k,new_val){
var v0 = taoensso.encore.reset_val_BANG_.call(null,atom_,k,not_found_47579,new_val);
if(cljs.core._EQ_.call(null,v0,new_val)){
return false;
} else {
return true;
}
});})(not_found_47579))
;
var return_47583 = (function (v0,v1){
return v1;
});
/**
 * Like `swap!` but supports `update-in` semantics,
 *  returns <new-key-val> or <swapped-return-val>.
 */
taoensso.encore.swap_in_BANG_ = ((function (return_47583){
return (function taoensso$encore$swap_in_BANG_(var_args){
var args47580 = [];
var len__37877__auto___47584 = arguments.length;
var i__37878__auto___47585 = (0);
while(true){
if((i__37878__auto___47585 < len__37877__auto___47584)){
args47580.push((arguments[i__37878__auto___47585]));

var G__47586 = (i__37878__auto___47585 + (1));
i__37878__auto___47585 = G__47586;
continue;
} else {
}
break;
}

var G__47582 = args47580.length;
switch (G__47582) {
case 2:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47580.length)].join('')));

}
});})(return_47583))
;

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2 = ((function (return_47583){
return (function (atom_,f){
return taoensso.encore._swap_k0_BANG_.call(null,return_47583,atom_,f);
});})(return_47583))
;

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_47583){
return (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_.call(null,return_47583,atom_,ks,null,f);
});})(return_47583))
;

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_47583){
return (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_.call(null,return_47583,atom_,ks,not_found,f);
});})(return_47583))
;

taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = 4;

var return_47591 = (function (v0,v1){
return v0;
});
/**
 * Like `reset!` but supports `update-in` semantics,
 *  returns <old-key-val>.
 */
taoensso.encore.reset_in_BANG_ = ((function (return_47591){
return (function taoensso$encore$reset_in_BANG_(var_args){
var args47588 = [];
var len__37877__auto___47592 = arguments.length;
var i__37878__auto___47593 = (0);
while(true){
if((i__37878__auto___47593 < len__37877__auto___47592)){
args47588.push((arguments[i__37878__auto___47593]));

var G__47594 = (i__37878__auto___47593 + (1));
i__37878__auto___47593 = G__47594;
continue;
} else {
}
break;
}

var G__47590 = args47588.length;
switch (G__47590) {
case 2:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47588.length)].join('')));

}
});})(return_47591))
;

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2 = ((function (return_47591){
return (function (atom_,val){
return taoensso.encore._reset_k0_BANG_.call(null,return_47591,atom_,val);
});})(return_47591))
;

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_47591){
return (function (atom_,ks,val){
return taoensso.encore._reset_kn_BANG_.call(null,return_47591,atom_,ks,null,val);
});})(return_47591))
;

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_47591){
return (function (atom_,ks,not_found,val){
return taoensso.encore._reset_kn_BANG_.call(null,return_47591,atom_,ks,not_found,val);
});})(return_47591))
;

taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = 4;

var return_47599 = (function (v0,v1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,v1], null);
});
/**
 * Like `swap!` but supports `update-in` semantics,
 *  returns [<old-key-val> <new-key-val>].
 */
taoensso.encore.swap_in_BANG__STAR_ = ((function (return_47599){
return (function taoensso$encore$swap_in_BANG__STAR_(var_args){
var args47596 = [];
var len__37877__auto___47600 = arguments.length;
var i__37878__auto___47601 = (0);
while(true){
if((i__37878__auto___47601 < len__37877__auto___47600)){
args47596.push((arguments[i__37878__auto___47601]));

var G__47602 = (i__37878__auto___47601 + (1));
i__37878__auto___47601 = G__47602;
continue;
} else {
}
break;
}

var G__47598 = args47596.length;
switch (G__47598) {
case 2:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47596.length)].join('')));

}
});})(return_47599))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2 = ((function (return_47599){
return (function (atom_,f){
return taoensso.encore._swap_k0_BANG_.call(null,return_47599,atom_,f);
});})(return_47599))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = ((function (return_47599){
return (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_.call(null,return_47599,atom_,ks,null,f);
});})(return_47599))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = ((function (return_47599){
return (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_.call(null,return_47599,atom_,ks,not_found,f);
});})(return_47599))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$lang$maxFixedArity = 4;

taoensso.encore.now_dt = (function taoensso$encore$now_dt(){
return (new Date());
});

taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return (new Date()).getTime();
});

/**
 * Uses window context as epoch, Ref. http://goo.gl/mWZWnR
 */
taoensso.encore.now_nano = (function (){var b2__31771__auto__ = taoensso.encore.oget.call(null,taoensso.encore.js__QMARK_win,"performance");
if(cljs.core.truth_(b2__31771__auto__)){
var perf = b2__31771__auto__;
var b2__31771__auto____$1 = (function (){var or__36802__auto__ = taoensso.encore.oget.call(null,perf,"now");
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
var or__36802__auto____$1 = taoensso.encore.oget.call(null,perf,"mozNow");
if(cljs.core.truth_(or__36802__auto____$1)){
return or__36802__auto____$1;
} else {
var or__36802__auto____$2 = taoensso.encore.oget.call(null,perf,"msNow");
if(cljs.core.truth_(or__36802__auto____$2)){
return or__36802__auto____$2;
} else {
var or__36802__auto____$3 = taoensso.encore.oget.call(null,perf,"oNow");
if(cljs.core.truth_(or__36802__auto____$3)){
return or__36802__auto____$3;
} else {
return taoensso.encore.oget.call(null,perf,"webkitNow");
}
}
}
}
})();
if(cljs.core.truth_(b2__31771__auto____$1)){
var f = b2__31771__auto____$1;
return ((function (f,b2__31771__auto____$1,perf,b2__31771__auto__){
return (function (){
return ((1000000) * cljs.core.long$.call(null,f.call(perf)));
});
;})(f,b2__31771__auto____$1,perf,b2__31771__auto__))
} else {
return ((function (b2__31771__auto____$1,perf,b2__31771__auto__){
return (function (){
return ((1000000) * (new Date()).getTime());
});
;})(b2__31771__auto____$1,perf,b2__31771__auto__))
}
} else {
return ((function (b2__31771__auto__){
return (function (){
return ((1000000) * (new Date()).getTime());
});
;})(b2__31771__auto__))
}
})();
/**
 * Like `core/memoize` but faster, non-racy, and supports invalidation.
 */
taoensso.encore.memoize_ = (function taoensso$encore$memoize_(f){
var cache_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
var get_sentinel = {};
return ((function (cache_,get_sentinel){
return (function() { 
var G__47608__delegate = function (xs){
var x1 = cljs.core.first.call(null,xs);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,x1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
var xn = cljs.core.next.call(null,xs);
var x2 = cljs.core.first.call(null,xn);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,x2,new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.vreset_BANG_.call(null,cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core._vreset_BANG_.call(null,cache_,cljs.core.dissoc.call(null,cljs.core._deref.call(null,cache_),xn));
}

return null;
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,x1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133)))){
var xn = cljs.core.next.call(null,xs);
var v = cljs.core.apply.call(null,f,xn);
cljs.core._vreset_BANG_.call(null,cache_,cljs.core.assoc.call(null,cljs.core._deref.call(null,cache_),xn,v));

return v;
} else {
var v = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),xs,get_sentinel);
if((v === get_sentinel)){
var v__$1 = cljs.core.apply.call(null,f,xs);
cljs.core._vreset_BANG_.call(null,cache_,cljs.core.assoc.call(null,cljs.core._deref.call(null,cache_),xs,v__$1));

return v__$1;
} else {
return v;
}
}
}
};
var G__47608 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__47609__i = 0, G__47609__a = new Array(arguments.length -  0);
while (G__47609__i < G__47609__a.length) {G__47609__a[G__47609__i] = arguments[G__47609__i + 0]; ++G__47609__i;}
  xs = new cljs.core.IndexedSeq(G__47609__a,0);
} 
return G__47608__delegate.call(this,xs);};
G__47608.cljs$lang$maxFixedArity = 0;
G__47608.cljs$lang$applyTo = (function (arglist__47610){
var xs = cljs.core.seq(arglist__47610);
return G__47608__delegate(xs);
});
G__47608.cljs$core$IFn$_invoke$arity$variadic = G__47608__delegate;
return G__47608;
})()
;
;})(cache_,get_sentinel))
});
/**
 * Like `memoize` but only caches the fn's most recent call.
 *   Great for Reactjs render op caching on mobile devices, etc.
 */
taoensso.encore.memoize_last = (function taoensso$encore$memoize_last(f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__47611__delegate = function (args){
return cljs.core.deref.call(null,(function (){var or__36802__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args);
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,cache_,((function (or__36802__auto__,cache_){
return (function (cache){
if(cljs.core.truth_(cljs.core.get.call(null,cache,args))){
return cache;
} else {
return cljs.core.PersistentArrayMap.fromArray([args,(new cljs.core.Delay(((function (or__36802__auto__,cache_){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(or__36802__auto__,cache_))
,null))], true, false);
}
});})(or__36802__auto__,cache_))
),args);
}
})());
};
var G__47611 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47612__i = 0, G__47612__a = new Array(arguments.length -  0);
while (G__47612__i < G__47612__a.length) {G__47612__a[G__47612__i] = arguments[G__47612__i + 0]; ++G__47612__i;}
  args = new cljs.core.IndexedSeq(G__47612__a,0);
} 
return G__47611__delegate.call(this,args);};
G__47611.cljs$lang$maxFixedArity = 0;
G__47611.cljs$lang$applyTo = (function (arglist__47613){
var args = cljs.core.seq(arglist__47613);
return G__47611__delegate(args);
});
G__47611.cljs$core$IFn$_invoke$arity$variadic = G__47611__delegate;
return G__47611;
})()
;
;})(cache_))
});

/**
* @constructor
*/
taoensso.encore.SimpleCacheEntry = (function (delay,udt){
this.delay = delay;
this.udt = udt;
})

taoensso.encore.SimpleCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"delay","delay",1066306308,null),cljs.core.with_meta(new cljs.core.Symbol(null,"udt","udt",-642723018,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

taoensso.encore.SimpleCacheEntry.cljs$lang$type = true;

taoensso.encore.SimpleCacheEntry.cljs$lang$ctorStr = "taoensso.encore/SimpleCacheEntry";

taoensso.encore.SimpleCacheEntry.cljs$lang$ctorPrWriter = (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"taoensso.encore/SimpleCacheEntry");
});

taoensso.encore.__GT_SimpleCacheEntry = (function taoensso$encore$__GT_SimpleCacheEntry(delay,udt){
return (new taoensso.encore.SimpleCacheEntry(delay,udt));
});


/**
* @constructor
*/
taoensso.encore.TickedCacheEntry = (function (delay,udt,tick_lru,tick_lfu){
this.delay = delay;
this.udt = udt;
this.tick_lru = tick_lru;
this.tick_lfu = tick_lfu;
})

taoensso.encore.TickedCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"delay","delay",1066306308,null),cljs.core.with_meta(new cljs.core.Symbol(null,"udt","udt",-642723018,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tick-lru","tick-lru",1625824877,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tick-lfu","tick-lfu",-1976905322,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

taoensso.encore.TickedCacheEntry.cljs$lang$type = true;

taoensso.encore.TickedCacheEntry.cljs$lang$ctorStr = "taoensso.encore/TickedCacheEntry";

taoensso.encore.TickedCacheEntry.cljs$lang$ctorPrWriter = (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"taoensso.encore/TickedCacheEntry");
});

taoensso.encore.__GT_TickedCacheEntry = (function taoensso$encore$__GT_TickedCacheEntry(delay,udt,tick_lru,tick_lfu){
return (new taoensso.encore.TickedCacheEntry(delay,udt,tick_lru,tick_lfu));
});

/**
 * Like `core/memoize` but:
 *  * Often faster, depending on opts.
 *  * Prevents race conditions on writes.
 *  * Supports auto invalidation & gc with `ttl-ms` opt.
 *  * Supports cache size limit & gc with `cache-size` opt.
 *  * Supports invalidation by prepending args with `:mem/del` or `:mem/fresh`.
 */
taoensso.encore.memoize_STAR_ = (function taoensso$encore$memoize_STAR_(var_args){
var args47614 = [];
var len__37877__auto___47619 = arguments.length;
var i__37878__auto___47620 = (0);
while(true){
if((i__37878__auto___47620 < len__37877__auto___47619)){
args47614.push((arguments[i__37878__auto___47620]));

var G__47621 = (i__37878__auto___47620 + (1));
i__37878__auto___47620 = G__47621;
continue;
} else {
}
break;
}

var G__47616 = args47614.length;
switch (G__47616) {
case 1:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47614.length)].join('')));

}
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return taoensso.encore.memoize_.call(null,f);
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
var e_47623 = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,ttl_ms)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e47617){if((e47617 instanceof Error)){
var e = e47617;
return e;
} else {
throw e47617;

}
}})();
if((e_47623 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(pos-int? ttl-ms)",ttl_ms,e_47623,null);
}

var cache_ = cljs.core.atom.call(null,null);
var latch_ = cljs.core.atom.call(null,null);
var ttl_ms__$1 = cljs.core.long$.call(null,ttl_ms);
return ((function (cache_,latch_,ttl_ms__$1){
return (function() { 
var G__47624__delegate = function (args){
var a1 = cljs.core.first.call(null,args);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
var argn = cljs.core.next.call(null,args);
var a2 = cljs.core.first.call(null,argn);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,a2,new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache_,null);
} else {
cljs.core.swap_BANG_.call(null,cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var instant = (new Date()).getTime();
if((Math.random() <= 6.25E-5)){
var latch_47625 = null;
if((function (){
cljs.core.reset_BANG_.call(null,latch_,latch_47625);

return true;
})()
){
cljs.core.swap_BANG_.call(null,cache_,((function (latch_47625,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (latch_47625,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (acc,k,e){
if(((instant - e.udt) > ttl_ms__$1)){
return cljs.core.dissoc_BANG_.call(null,acc,k);
} else {
return acc;
}
});})(latch_47625,instant,a1,cache_,latch_,ttl_ms__$1))
,cljs.core.transient$.call(null,(function (){var or__36802__auto__ = m;
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
});})(latch_47625,instant,a1,cache_,latch_,ttl_ms__$1))
);
} else {
}
} else {
}

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next.call(null,args):args);
var e = taoensso.encore._swap_val_BANG_.call(null,cache_,args__$1,((function (fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (_QMARK_e){
if(cljs.core.truth_((function (){var or__36802__auto__ = (_QMARK_e == null);
if(or__36802__auto__){
return or__36802__auto__;
} else {
var or__36802__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__36802__auto____$1)){
return or__36802__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.SimpleCacheEntry((new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1))
,null)),instant));
} else {
return _QMARK_e;
}
});})(fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1))
);
return cljs.core.deref.call(null,e.delay);
}
};
var G__47624 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47626__i = 0, G__47626__a = new Array(arguments.length -  0);
while (G__47626__i < G__47626__a.length) {G__47626__a[G__47626__i] = arguments[G__47626__i + 0]; ++G__47626__i;}
  args = new cljs.core.IndexedSeq(G__47626__a,0);
} 
return G__47624__delegate.call(this,args);};
G__47624.cljs$lang$maxFixedArity = 0;
G__47624.cljs$lang$applyTo = (function (arglist__47627){
var args = cljs.core.seq(arglist__47627);
return G__47624__delegate(args);
});
G__47624.cljs$core$IFn$_invoke$arity$variadic = G__47624__delegate;
return G__47624;
})()
;
;})(cache_,latch_,ttl_ms__$1))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
if(cljs.core.truth_((function (x){
var or__36802__auto__ = (x == null);
if(or__36802__auto__){
return or__36802__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.pos_int_QMARK_).call(null,x);
}
}).call(null,ttl_ms))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"([:or nil? pos-int?] ttl-ms)",ttl_ms,null,null);
}

var e_47628 = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,cache_size)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e47618){if((e47618 instanceof Error)){
var e = e47618;
return e;
} else {
throw e47618;

}
}})();
if((e_47628 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(pos-int? cache-size)",cache_size,e_47628,null);
}

var tick_ = cljs.core.atom.call(null,(0));
var cache_ = cljs.core.atom.call(null,null);
var latch_ = cljs.core.atom.call(null,null);
var ttl_ms__$1 = cljs.core.long$.call(null,(function (){var or__36802__auto__ = ttl_ms;
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return (0);
}
})());
var ttl_ms_QMARK_ = !((ttl_ms__$1 === (0)));
var cache_size__$1 = cljs.core.long$.call(null,cache_size);
return ((function (tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function() { 
var G__47629__delegate = function (args){
var a1 = cljs.core.first.call(null,args);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
var argn = cljs.core.next.call(null,args);
var a2 = cljs.core.first.call(null,argn);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,a2,new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache_,null);
} else {
cljs.core.swap_BANG_.call(null,cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var instant = ((ttl_ms_QMARK_)?(new Date()).getTime():(0));
if((Math.random() <= 6.25E-5)){
var latch_47630 = null;
if((function (){
cljs.core.reset_BANG_.call(null,latch_,latch_47630);

return true;
})()
){
if(ttl_ms_QMARK_){
cljs.core.swap_BANG_.call(null,cache_,((function (latch_47630,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (latch_47630,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (acc,k,e){
if(((instant - e.udt) > ttl_ms__$1)){
return cljs.core.dissoc_BANG_.call(null,acc,k);
} else {
return acc;
}
});})(latch_47630,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,cljs.core.transient$.call(null,(function (){var or__36802__auto__ = m;
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
});})(latch_47630,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
} else {
}

var snapshot_47631 = cljs.core.deref.call(null,cache_);
var n_to_gc_47632 = (cljs.core.count.call(null,snapshot_47631) - cache_size__$1);
if((n_to_gc_47632 > (64))){
var ks_to_gc_47633 = taoensso.encore.top.call(null,n_to_gc_47632,((function (snapshot_47631,n_to_gc_47632,latch_47630,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (k){
var e = cljs.core.get.call(null,snapshot_47631,k);
return (e.tick_lru + e.tick_lfu);
});})(snapshot_47631,n_to_gc_47632,latch_47630,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,cljs.core.keys.call(null,snapshot_47631));
cljs.core.swap_BANG_.call(null,cache_,((function (ks_to_gc_47633,snapshot_47631,n_to_gc_47632,latch_47630,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (ks_to_gc_47633,snapshot_47631,n_to_gc_47632,latch_47630,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
});})(ks_to_gc_47633,snapshot_47631,n_to_gc_47632,latch_47630,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,cljs.core.transient$.call(null,(function (){var or__36802__auto__ = m;
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),ks_to_gc_47633));
});})(ks_to_gc_47633,snapshot_47631,n_to_gc_47632,latch_47630,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
} else {
}
} else {
}
} else {
}

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next.call(null,args):args);
var tick = cljs.core.swap_BANG_.call(null,tick_,((function (fresh_QMARK_,args__$1,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (n){
return (n + (1));
});})(fresh_QMARK_,args__$1,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
var e = taoensso.encore._swap_val_BANG_.call(null,cache_,args__$1,((function (fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (_QMARK_e){
if(cljs.core.truth_((function (){var or__36802__auto__ = (_QMARK_e == null);
if(or__36802__auto__){
return or__36802__auto__;
} else {
var or__36802__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__36802__auto____$1)){
return or__36802__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.TickedCacheEntry((new cljs.core.Delay(((function (fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,null)),instant,tick,(1)));
} else {
var e = _QMARK_e;
return (new taoensso.encore.TickedCacheEntry(e.delay,e.udt,tick,(e.tick_lfu + (1))));
}
});})(fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
return cljs.core.deref.call(null,e.delay);
}
};
var G__47629 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47634__i = 0, G__47634__a = new Array(arguments.length -  0);
while (G__47634__i < G__47634__a.length) {G__47634__a[G__47634__i] = arguments[G__47634__i + 0]; ++G__47634__i;}
  args = new cljs.core.IndexedSeq(G__47634__a,0);
} 
return G__47629__delegate.call(this,args);};
G__47629.cljs$lang$maxFixedArity = 0;
G__47629.cljs$lang$applyTo = (function (arglist__47635){
var args = cljs.core.seq(arglist__47635);
return G__47629__delegate(args);
});
G__47629.cljs$core$IFn$_invoke$arity$variadic = G__47629__delegate;
return G__47629;
})()
;
;})(tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
});

taoensso.encore.memoize_STAR_.cljs$lang$maxFixedArity = 3;


/**
* @constructor
*/
taoensso.encore.LimitSpec = (function (n,ms){
this.n = n;
this.ms = ms;
})

taoensso.encore.LimitSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"ms","ms",487821794,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

taoensso.encore.LimitSpec.cljs$lang$type = true;

taoensso.encore.LimitSpec.cljs$lang$ctorStr = "taoensso.encore/LimitSpec";

taoensso.encore.LimitSpec.cljs$lang$ctorPrWriter = (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"taoensso.encore/LimitSpec");
});

taoensso.encore.__GT_LimitSpec = (function taoensso$encore$__GT_LimitSpec(n,ms){
return (new taoensso.encore.LimitSpec(n,ms));
});


/**
* @constructor
*/
taoensso.encore.LimitEntry = (function (n,udt0){
this.n = n;
this.udt0 = udt0;
})

taoensso.encore.LimitEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"udt0","udt0",-969222777,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

taoensso.encore.LimitEntry.cljs$lang$type = true;

taoensso.encore.LimitEntry.cljs$lang$ctorStr = "taoensso.encore/LimitEntry";

taoensso.encore.LimitEntry.cljs$lang$ctorPrWriter = (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"taoensso.encore/LimitEntry");
});

taoensso.encore.__GT_LimitEntry = (function taoensso$encore$__GT_LimitEntry(n,udt0){
return (new taoensso.encore.LimitEntry(n,udt0));
});


/**
* @constructor
*/
taoensso.encore.LimitHits = (function (m,worst_sid,worst_ms){
this.m = m;
this.worst_sid = worst_sid;
this.worst_ms = worst_ms;
})

taoensso.encore.LimitHits.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"worst-sid","worst-sid",1427291395,null),cljs.core.with_meta(new cljs.core.Symbol(null,"worst-ms","worst-ms",1541498579,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

taoensso.encore.LimitHits.cljs$lang$type = true;

taoensso.encore.LimitHits.cljs$lang$ctorStr = "taoensso.encore/LimitHits";

taoensso.encore.LimitHits.cljs$lang$ctorPrWriter = (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"taoensso.encore/LimitHits");
});

taoensso.encore.__GT_LimitHits = (function taoensso$encore$__GT_LimitHits(m,worst_sid,worst_ms){
return (new taoensso.encore.LimitHits(m,worst_sid,worst_ms));
});

var limit_spec_47654 = (function (n,ms){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,n)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e47636){if((e47636 instanceof Error)){
var e = e47636;
return e;
} else {
throw e47636;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(pos-int? n)",n,e,null);
}
})(),(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,ms)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e47637){if((e47637 instanceof Error)){
var e = e47637;
return e;
} else {
throw e47637;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(pos-int? ms)",ms,e,null);
}
})()], null);

return (new taoensso.encore.LimitSpec(n,ms));
});
taoensso.encore.coerce_limit_specs = ((function (limit_spec_47654){
return (function taoensso$encore$coerce_limit_specs(x){
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.reduce_kv.call(null,((function (limit_spec_47654){
return (function (acc,sid,p__47646){
var vec__47647 = p__47646;
var n = cljs.core.nth.call(null,vec__47647,(0),null);
var ms = cljs.core.nth.call(null,vec__47647,(1),null);
return cljs.core.assoc.call(null,acc,sid,limit_spec_47654.call(null,n,ms));
});})(limit_spec_47654))
,cljs.core.PersistentArrayMap.EMPTY,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
var i = cljs.core.volatile_BANG_.call(null,(-1));
return cljs.core.reduce.call(null,((function (i,limit_spec_47654){
return (function (acc,p__47650){
var vec__47651 = p__47650;
var n = cljs.core.nth.call(null,vec__47651,(0),null);
var ms = cljs.core.nth.call(null,vec__47651,(1),null);
var _QMARK_id = cljs.core.nth.call(null,vec__47651,(2),null);
return cljs.core.assoc.call(null,acc,(function (){var or__36802__auto__ = _QMARK_id;
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return cljs.core._vreset_BANG_.call(null,i,((function (or__36802__auto__,vec__47651,n,ms,_QMARK_id,i,limit_spec_47654){
return (function (i__$1){
return (i__$1 + (1));
});})(or__36802__auto__,vec__47651,n,ms,_QMARK_id,i,limit_spec_47654))
.call(null,cljs.core._deref.call(null,i)));
}
})(),limit_spec_47654.call(null,n,ms));
});})(i,limit_spec_47654))
,cljs.core.PersistentArrayMap.EMPTY,x);
} else {
throw cljs.core.ex_info.call(null,"No matching `encore/cond!` clause",cljs.core.PersistentArrayMap.EMPTY);
}
}
});})(limit_spec_47654))
;
/**
 * Experimental. Like `limiter` but returns [<limiter> <state_>].
 */
taoensso.encore.limiter_STAR_ = (function taoensso$encore$limiter_STAR_(specs){
if(cljs.core.empty_QMARK_.call(null,specs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.constantly.call(null,null)], null);
} else {
var latch_ = cljs.core.atom.call(null,null);
var reqs_ = cljs.core.atom.call(null,null);
var specs__$1 = taoensso.encore.coerce_limit_specs.call(null,specs);
var f1 = ((function (latch_,reqs_,specs__$1){
return (function (rid,peek_QMARK_){
var instant = (new Date()).getTime();
if((cljs.core.not.call(null,peek_QMARK_)) && ((Math.random() <= 6.25E-5))){
var latch_47655 = null;
if((function (){
cljs.core.reset_BANG_.call(null,latch_,latch_47655);

return true;
})()
){
cljs.core.swap_BANG_.call(null,reqs_,((function (latch_47655,instant,latch_,reqs_,specs__$1){
return (function (reqs){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (latch_47655,instant,latch_,reqs_,specs__$1){
return (function (acc,rid__$1,entries){
var new_entries = cljs.core.reduce_kv.call(null,((function (latch_47655,instant,latch_,reqs_,specs__$1){
return (function (acc__$1,sid,e){
var b2__31771__auto__ = cljs.core.get.call(null,specs__$1,sid);
if(cljs.core.truth_(b2__31771__auto__)){
var s = b2__31771__auto__;
if((instant >= (e.udt0 + s.ms))){
return cljs.core.dissoc.call(null,acc__$1,sid);
} else {
return acc__$1;
}
} else {
return cljs.core.dissoc.call(null,acc__$1,sid);
}
});})(latch_47655,instant,latch_,reqs_,specs__$1))
,entries,entries);
if(cljs.core.empty_QMARK_.call(null,new_entries)){
return cljs.core.dissoc_BANG_.call(null,acc,rid__$1);
} else {
return cljs.core.assoc_BANG_.call(null,acc,rid__$1,new_entries);
}
});})(latch_47655,instant,latch_,reqs_,specs__$1))
,cljs.core.transient$.call(null,(function (){var or__36802__auto__ = reqs;
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),reqs));
});})(latch_47655,instant,latch_,reqs_,specs__$1))
);
} else {
}
} else {
}

while(true){
var reqs = cljs.core.deref.call(null,reqs_);
var entries = cljs.core.get.call(null,reqs,rid);
var _QMARK_hits = (((entries == null))?null:cljs.core.reduce_kv.call(null,((function (reqs,entries,instant,latch_,reqs_,specs__$1){
return (function (acc,sid,e){
var b2__31771__auto__ = cljs.core.get.call(null,specs__$1,sid);
if(cljs.core.truth_(b2__31771__auto__)){
var s = b2__31771__auto__;
if((e.n < s.n)){
return acc;
} else {
var tdelta = ((e.udt0 + s.ms) - instant);
if((tdelta <= (0))){
return acc;
} else {
if((acc == null)){
return (new taoensso.encore.LimitHits(cljs.core.PersistentArrayMap.fromArray([sid,tdelta], true, false),sid,tdelta));
} else {
if((tdelta > acc.worst_ms)){
return (new taoensso.encore.LimitHits(cljs.core.assoc.call(null,acc.m,sid,tdelta),sid,tdelta));
} else {
return (new taoensso.encore.LimitHits(cljs.core.assoc.call(null,acc.m,sid,tdelta),acc.worst_sid,acc.worst_ms));
}
}
}
}
} else {
return acc;
}
});})(reqs,entries,instant,latch_,reqs_,specs__$1))
,null,entries));
if(cljs.core.truth_((function (){var or__36802__auto__ = peek_QMARK_;
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return _QMARK_hits;
}
})())){
var b2__31771__auto__ = _QMARK_hits;
if(cljs.core.truth_(b2__31771__auto__)){
var h = b2__31771__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h.worst_sid,h.worst_ms,h.m], null);
} else {
return null;
}
} else {
var b2__31771__auto__ = cljs.core.deref.call(null,latch_);
if(cljs.core.truth_(b2__31771__auto__)){
var l = b2__31771__auto__;
return null;
} else {
var new_entries = cljs.core.reduce_kv.call(null,((function (b2__31771__auto__,reqs,entries,_QMARK_hits,instant,latch_,reqs_,specs__$1){
return (function (acc,sid,s){
return cljs.core.assoc.call(null,acc,sid,(function (){var b2__31771__auto____$1 = cljs.core.get.call(null,entries,sid);
if(cljs.core.truth_(b2__31771__auto____$1)){
var e = b2__31771__auto____$1;
var udt0 = e.udt0;
if((instant >= (udt0 + s.ms))){
return (new taoensso.encore.LimitEntry((1),instant));
} else {
return (new taoensso.encore.LimitEntry((e.n + (1)),udt0));
}
} else {
return (new taoensso.encore.LimitEntry((1),instant));
}
})());
});})(b2__31771__auto__,reqs,entries,_QMARK_hits,instant,latch_,reqs_,specs__$1))
,entries,specs__$1);
if((function (){
cljs.core.reset_BANG_.call(null,reqs_,cljs.core.assoc.call(null,reqs,rid,new_entries));

return true;
})()
){
return null;
} else {
continue;
}
}
}
break;
}
});})(latch_,reqs_,specs__$1))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reqs_,((function (latch_,reqs_,specs__$1,f1){
return (function() {
var taoensso$encore$limiter_STAR__$_check_limits_BANG_ = null;
var taoensso$encore$limiter_STAR__$_check_limits_BANG___0 = (function (){
return f1.call(null,null,false);
});
var taoensso$encore$limiter_STAR__$_check_limits_BANG___1 = (function (req_id){
return f1.call(null,req_id,false);
});
var taoensso$encore$limiter_STAR__$_check_limits_BANG___2 = (function (cmd,req_id){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cmd,new cljs.core.Keyword("rl","reset","rl/reset",-800926172)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,req_id,new cljs.core.Keyword("rl","all","rl/all",892118056)))){
cljs.core.reset_BANG_.call(null,reqs_,null);
} else {
cljs.core.swap_BANG_.call(null,reqs_,cljs.core.dissoc,req_id);
}

return null;
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cmd,new cljs.core.Keyword("rl","peek","rl/peek",-291391771)))){
return f1.call(null,req_id,true);
} else {
throw cljs.core.ex_info.call(null,"Unrecognized rate limiter command",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),cmd,new cljs.core.Keyword(null,"req-id","req-id",-471642231),req_id], null));
}
}
});
taoensso$encore$limiter_STAR__$_check_limits_BANG_ = function(cmd,req_id){
switch(arguments.length){
case 0:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___0.call(this);
case 1:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___1.call(this,cmd);
case 2:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___2.call(this,cmd,req_id);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$limiter_STAR__$_check_limits_BANG___0;
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$limiter_STAR__$_check_limits_BANG___1;
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$limiter_STAR__$_check_limits_BANG___2;
return taoensso$encore$limiter_STAR__$_check_limits_BANG_;
})()
;})(latch_,reqs_,specs__$1,f1))
], null);
}
});
/**
 * Takes {<spec-id> [<n-max-reqs> <msecs-window>]}, and returns a rate
 *   limiter (fn check-limits! [req-id]) -> nil (all limits pass), or
 *   [<worst-spec-id> <worst-backoff-msecs> {<spec-id> <backoff-msecs>}].
 * 
 *   Limiter fn commands:
 *  :rl/peek  <req-id> - Check limits w/o side effects.
 *  :rl/reset <req-id> - Reset all limits for given req-id.
 */
taoensso.encore.limiter = (function taoensso$encore$limiter(specs){
var vec__47659 = taoensso.encore.limiter_STAR_.call(null,specs);
var _ = cljs.core.nth.call(null,vec__47659,(0),null);
var f = cljs.core.nth.call(null,vec__47659,(1),null);
return f;
});
taoensso.encore.str_builder_QMARK_ = (function taoensso$encore$str_builder_QMARK_(x){
return (x instanceof goog.string.StringBuffer);
});
/**
 * For cross-platform string building
 */
taoensso.encore.str_builder = (function() {
var taoensso$encore$str_builder = null;
var taoensso$encore$str_builder__0 = (function (){
return (new goog.string.StringBuffer());
});
var taoensso$encore$str_builder__1 = (function (s_init){
return (new goog.string.StringBuffer(s_init));
});
taoensso$encore$str_builder = function(s_init){
switch(arguments.length){
case 0:
return taoensso$encore$str_builder__0.call(this);
case 1:
return taoensso$encore$str_builder__1.call(this,s_init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_builder__0;
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_builder__1;
return taoensso$encore$str_builder;
})()
;
/**
 * For cross-platform string building
 */
taoensso.encore.sb_append = (function taoensso$encore$sb_append(var_args){
var args47662 = [];
var len__37877__auto___47668 = arguments.length;
var i__37878__auto___47669 = (0);
while(true){
if((i__37878__auto___47669 < len__37877__auto___47668)){
args47662.push((arguments[i__37878__auto___47669]));

var G__47670 = (i__37878__auto___47669 + (1));
i__37878__auto___47669 = G__47670;
continue;
} else {
}
break;
}

var G__47667 = args47662.length;
switch (G__47667) {
case 2:
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__37896__auto__ = (new cljs.core.IndexedSeq(args47662.slice((2)),(0),null));
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37896__auto__);

}
});

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2 = (function (str_builder,s){
return str_builder.append(s);
});

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic = (function (str_builder,s,more){
taoensso.encore.sb_append.call(null,str_builder,s);

return cljs.core.reduce.call(null,(function (acc,in$){
return taoensso.encore.sb_append.call(null,acc,in$);
}),str_builder,more);
});

taoensso.encore.sb_append.cljs$lang$applyTo = (function (seq47663){
var G__47664 = cljs.core.first.call(null,seq47663);
var seq47663__$1 = cljs.core.next.call(null,seq47663);
var G__47665 = cljs.core.first.call(null,seq47663__$1);
var seq47663__$2 = cljs.core.next.call(null,seq47663__$1);
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic(G__47664,G__47665,seq47663__$2);
});

taoensso.encore.sb_append.cljs$lang$maxFixedArity = (2);

/**
 * String builder reducing fn
 */
taoensso.encore.str_rf = (function() {
var taoensso$encore$str_rf = null;
var taoensso$encore$str_rf__0 = (function (){
return taoensso.encore.str_builder.call(null);
});
var taoensso$encore$str_rf__1 = (function (acc){
if(taoensso.encore.str_builder_QMARK_.call(null,acc)){
return acc;
} else {
return taoensso.encore.str_builder.call(null,[cljs.core.str(acc)].join(''));
}
});
var taoensso$encore$str_rf__2 = (function (acc,in$){
return taoensso.encore.sb_append.call(null,((taoensso.encore.str_builder_QMARK_.call(null,acc))?acc:taoensso.encore.str_builder.call(null,[cljs.core.str(acc)].join(''))),[cljs.core.str(in$)].join(''));
});
taoensso$encore$str_rf = function(acc,in$){
switch(arguments.length){
case 0:
return taoensso$encore$str_rf__0.call(this);
case 1:
return taoensso$encore$str_rf__1.call(this,acc);
case 2:
return taoensso$encore$str_rf__2.call(this,acc,in$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_rf__0;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_rf__1;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$str_rf__2;
return taoensso$encore$str_rf;
})()
;
/**
 * Faster, transducer-based generalization of `clojure.string/join` with `xform`
 *  support
 */
taoensso.encore.str_join = (function taoensso$encore$str_join(var_args){
var args47672 = [];
var len__37877__auto___47675 = arguments.length;
var i__37878__auto___47676 = (0);
while(true){
if((i__37878__auto___47676 < len__37877__auto___47675)){
args47672.push((arguments[i__37878__auto___47676]));

var G__47677 = (i__37878__auto___47676 + (1));
i__37878__auto___47676 = G__47677;
continue;
} else {
}
break;
}

var G__47674 = args47672.length;
switch (G__47674) {
case 1:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47672.length)].join('')));

}
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.str_join.call(null,null,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return taoensso.encore.str_join.call(null,separator,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3 = (function (separator,xform,coll){
if(cljs.core.truth_((function (){var and__36790__auto__ = separator;
if(cljs.core.truth_(and__36790__auto__)){
return cljs.core.not_EQ_.call(null,separator,"");
} else {
return and__36790__auto__;
}
})())){
var sep_xform = cljs.core.interpose.call(null,separator);
var str_rf_STAR_ = cljs.core.completing.call(null,taoensso.encore.str_rf,cljs.core.str);
if(cljs.core.truth_(xform)){
return cljs.core.transduce.call(null,cljs.core.comp.call(null,xform,sep_xform),str_rf_STAR_,coll);
} else {
return cljs.core.transduce.call(null,sep_xform,str_rf_STAR_,coll);
}
} else {
if(cljs.core.truth_(xform)){
return cljs.core.transduce.call(null,xform,cljs.core.completing.call(null,taoensso.encore.str_rf,cljs.core.str),coll);
} else {
return [cljs.core.str(cljs.core.reduce.call(null,taoensso.encore.str_rf,coll))].join('');
}
}
});

taoensso.encore.str_join.cljs$lang$maxFixedArity = 3;

taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
taoensso.encore.str__QMARK_index = (function taoensso$encore$str__QMARK_index(var_args){
var args47679 = [];
var len__37877__auto___47682 = arguments.length;
var i__37878__auto___47683 = (0);
while(true){
if((i__37878__auto___47683 < len__37877__auto___47682)){
args47679.push((arguments[i__37878__auto___47683]));

var G__47684 = (i__37878__auto___47683 + (1));
i__37878__auto___47683 = G__47684;
continue;
} else {
}
break;
}

var G__47681 = args47679.length;
switch (G__47681) {
case 2:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47679.length)].join('')));

}
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2 = (function (s,substr){
return taoensso.encore.str__QMARK_index.call(null,s,substr,(0),false);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3 = (function (s,substr,start_idx){
return taoensso.encore.str__QMARK_index.call(null,s,substr,start_idx,false);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4 = (function (s,substr,start_idx,last_QMARK_){
var result = (cljs.core.truth_(last_QMARK_)?s.lastIndexOf(substr,start_idx):s.indexOf(substr,start_idx));
if(cljs.core.not_EQ_.call(null,result,(-1))){
return result;
} else {
return null;
}
});

taoensso.encore.str__QMARK_index.cljs$lang$maxFixedArity = 4;

/**
 * Like `subs` but provides consistent clj/s behaviour and never throws
 *   (snaps to valid start and end indexes).
 */
taoensso.encore.get_substr = (function taoensso$encore$get_substr(var_args){
var args47686 = [];
var len__37877__auto___47689 = arguments.length;
var i__37878__auto___47690 = (0);
while(true){
if((i__37878__auto___47690 < len__37877__auto___47689)){
args47686.push((arguments[i__37878__auto___47690]));

var G__47691 = (i__37878__auto___47690 + (1));
i__37878__auto___47690 = G__47691;
continue;
} else {
}
break;
}

var G__47688 = args47686.length;
switch (G__47688) {
case 2:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47686.length)].join('')));

}
});

taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return s.substring(start);
});

taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3 = (function (s,start,end){
if((start >= end)){
return "";
} else {
return s.substring(start,end);
}
});

taoensso.encore.get_substr.cljs$lang$maxFixedArity = 3;

/**
 * Like `get-substr` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of string.
 */
taoensso.encore.get_substring = (function taoensso$encore$get_substring(var_args){
var args47693 = [];
var len__37877__auto___47696 = arguments.length;
var i__37878__auto___47697 = (0);
while(true){
if((i__37878__auto___47697 < len__37877__auto___47696)){
args47693.push((arguments[i__37878__auto___47697]));

var G__47698 = (i__37878__auto___47697 + (1));
i__37878__auto___47697 = G__47698;
continue;
} else {
}
break;
}

var G__47695 = args47693.length;
switch (G__47695) {
case 2:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47693.length)].join('')));

}
});

taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return taoensso.encore.as__QMARK_nempty_str.call(null,s.substr(start));
});

taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3 = (function (s,start,length){
return taoensso.encore.as__QMARK_nempty_str.call(null,s.substr(start,length));
});

taoensso.encore.get_substring.cljs$lang$maxFixedArity = 3;

/**
 * Like `str/replace` but provides consistent clj/s behaviour.
 * 
 *   Workaround for http://dev.clojure.org/jira/browse/CLJS-794,
 *               http://dev.clojure.org/jira/browse/CLJS-911.
 * 
 *   Note that ClojureScript 1.7.145 introduced a partial fix for CLJS-911.
 *   A full fix could unfortunately not be introduced w/o breaking compatibility
 *   with the previously incorrect behaviour. CLJS-794 also remains unresolved.
 */
taoensso.encore.str_replace = (function taoensso$encore$str_replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if((match instanceof RegExp)){
var flags = [cljs.core.str("g"),cljs.core.str((cljs.core.truth_(match.ignoreCase)?"i":null)),cljs.core.str((cljs.core.truth_(match.multiline)?"m":null))].join('');
var replacement__$1 = ((typeof replacement === 'string')?replacement:((function (flags){
return (function() { 
var G__47700__delegate = function (args){
return replacement.call(null,cljs.core.vec.call(null,args));
};
var G__47700 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47701__i = 0, G__47701__a = new Array(arguments.length -  0);
while (G__47701__i < G__47701__a.length) {G__47701__a[G__47701__i] = arguments[G__47701__i + 0]; ++G__47701__i;}
  args = new cljs.core.IndexedSeq(G__47701__a,0);
} 
return G__47700__delegate.call(this,args);};
G__47700.cljs$lang$maxFixedArity = 0;
G__47700.cljs$lang$applyTo = (function (arglist__47702){
var args = cljs.core.seq(arglist__47702);
return G__47700__delegate(args);
});
G__47700.cljs$core$IFn$_invoke$arity$variadic = G__47700__delegate;
return G__47700;
})()
;})(flags))
);
return s.replace((new RegExp(match.source,flags)),replacement__$1);
} else {
throw [cljs.core.str("Invalid match arg: "),cljs.core.str(match)].join('');
}
}
});
/**
 * nil/undefined -> "nil"
 */
taoensso.encore.nil__GT_str = (function taoensso$encore$nil__GT_str(x){
if(((void 0 === x)) || ((x == null))){
return "nil";
} else {
return x;
}
});

taoensso.encore.format_STAR_ = (function taoensso$encore$format_STAR_(fmt,args){
var fmt__$1 = (function (){var or__36802__auto__ = fmt;
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return "";
}
})();
var args__$1 = cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,args);
return cljs.core.apply.call(null,goog.string.format,fmt__$1,args__$1);
});

/**
 * Like `core/format` but:
 *    * Returns "" when fmt is nil rather than throwing an NPE.
 *    * Formats nil as "nil" rather than "null".
 *    * Provides ClojureScript support via goog.string.format (this has fewer
 *      formatting options than Clojure's `format`!).
 */
taoensso.encore.format = (function taoensso$encore$format(var_args){
var args__37884__auto__ = [];
var len__37877__auto___47705 = arguments.length;
var i__37878__auto___47706 = (0);
while(true){
if((i__37878__auto___47706 < len__37877__auto___47705)){
args__37884__auto__.push((arguments[i__37878__auto___47706]));

var G__47707 = (i__37878__auto___47706 + (1));
i__37878__auto___47706 = G__47707;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return taoensso.encore.format_STAR_.call(null,fmt,args);
});

taoensso.encore.format.cljs$lang$maxFixedArity = (1);

taoensso.encore.format.cljs$lang$applyTo = (function (seq47703){
var G__47704 = cljs.core.first.call(null,seq47703);
var seq47703__$1 = cljs.core.next.call(null,seq47703);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(G__47704,seq47703__$1);
});

/**
 * Like `string/join` but skips duplicate separators.
 */
taoensso.encore.str_join_once = (function taoensso$encore$str_join_once(separator,coll){
var sep = separator;
if(clojure.string.blank_QMARK_.call(null,sep)){
return [cljs.core.str(cljs.core.reduce.call(null,taoensso.encore.str_rf,"",coll))].join('');
} else {
var acc_ends_with_sep_QMARK__ = cljs.core.volatile_BANG_.call(null,false);
var acc_empty_QMARK__ = cljs.core.volatile_BANG_.call(null,true);
return [cljs.core.str(cljs.core.reduce.call(null,((function (acc_ends_with_sep_QMARK__,acc_empty_QMARK__,sep){
return (function (acc,in$){
var in$__$1 = [cljs.core.str(in$)].join('');
var in_empty_QMARK_ = cljs.core._EQ_.call(null,in$__$1,"");
var in_starts_with_sep_QMARK_ = taoensso.encore.str_starts_with_QMARK_.call(null,in$__$1,sep);
var in_ends_with_sep_QMARK_ = taoensso.encore.str_ends_with_QMARK_.call(null,in$__$1,sep);
var acc_ends_with_sep_QMARK_ = cljs.core.deref.call(null,acc_ends_with_sep_QMARK__);
var acc_empty_QMARK_ = cljs.core.deref.call(null,acc_empty_QMARK__);
cljs.core.vreset_BANG_.call(null,acc_ends_with_sep_QMARK__,in_ends_with_sep_QMARK_);

if(cljs.core.truth_(acc_empty_QMARK_)){
cljs.core.vreset_BANG_.call(null,acc_empty_QMARK__,in_empty_QMARK_);
} else {
}

if(cljs.core.truth_(acc_ends_with_sep_QMARK_)){
if(in_starts_with_sep_QMARK_){
return taoensso.encore.sb_append.call(null,acc,in$__$1.substring((1)));
} else {
return taoensso.encore.sb_append.call(null,acc,in$__$1);
}
} else {
if(in_starts_with_sep_QMARK_){
return taoensso.encore.sb_append.call(null,acc,in$__$1);
} else {
if(cljs.core.truth_((function (){var or__36802__auto__ = acc_empty_QMARK_;
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return in_empty_QMARK_;
}
})())){
return taoensso.encore.sb_append.call(null,acc,in$__$1);
} else {
taoensso.encore.sb_append.call(null,acc,sep);

return taoensso.encore.sb_append.call(null,acc,in$__$1);
}
}
}
});})(acc_ends_with_sep_QMARK__,acc_empty_QMARK__,sep))
,taoensso.encore.str_builder.call(null),coll))].join('');
}
});
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__37884__auto__ = [];
var len__37877__auto___47709 = arguments.length;
var i__37878__auto___47710 = (0);
while(true){
if((i__37878__auto___47710 < len__37877__auto___47709)){
args__37884__auto__.push((arguments[i__37878__auto___47710]));

var G__47711 = (i__37878__auto___47710 + (1));
i__37878__auto___47710 = G__47711;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});

taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return taoensso.encore.str_join_once.call(null,"/",parts);
});

taoensso.encore.path.cljs$lang$maxFixedArity = (0);

taoensso.encore.path.cljs$lang$applyTo = (function (seq47708){
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47708));
});

/**
 * Converts all word breaks of any form and length (including line breaks of any
 *   form, tabs, spaces, etc.) to a single regular space.
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace.call(null,[cljs.core.str(s)].join(''),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(clojure.string.blank_QMARK_.call(null,s)){
return (0);
} else {
return cljs.core.count.call(null,clojure.string.split.call(null,s,/\s+/));
}
});
/**
 * Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".
 *   Ref. http://www.ietf.org/rfc/rfc4122.txt,
 *     https://gist.github.com/franks42/4159427
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(var_args){
var args47712 = [];
var len__37877__auto___47715 = arguments.length;
var i__37878__auto___47716 = (0);
while(true){
if((i__37878__auto___47716 < len__37877__auto___47715)){
args47712.push((arguments[i__37878__auto___47716]));

var G__47717 = (i__37878__auto___47716 + (1));
i__37878__auto___47716 = G__47717;
continue;
} else {
}
break;
}

var G__47714 = args47712.length;
switch (G__47714) {
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47712.length)].join('')));

}
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_length){
return taoensso.encore.get_substring.call(null,taoensso.encore.uuid_str.call(null),(0),max_length);
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
var hex = (function (){
return cljs.core.rand_int.call(null,(16)).toString((16));
});
var rhex = ((8) | ((3) & cljs.core.rand_int.call(null,(16)))).toString((16));
return [cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str("4"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(rhex),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null))].join('');
});

taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1;

/**
 * Simple Hiccup-like string templating to complement Tempura.
 */
taoensso.encore.into_str = (function taoensso$encore$into_str(var_args){
var args__37884__auto__ = [];
var len__37877__auto___47720 = arguments.length;
var i__37878__auto___47721 = (0);
while(true){
if((i__37878__auto___47721 < len__37877__auto___47720)){
args__37884__auto__.push((arguments[i__37878__auto___47721]));

var G__47722 = (i__37878__auto___47721 + (1));
i__37878__auto___47721 = G__47722;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});

taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return [cljs.core.str(cljs.core.reduce.call(null,(function taoensso$encore$rf(acc,in$){
if(cljs.core.sequential_QMARK_.call(null,in$)){
return cljs.core.reduce.call(null,taoensso$encore$rf,acc,in$);
} else {
return taoensso.encore.sb_append.call(null,acc,[cljs.core.str(in$)].join(''));
}
}),taoensso.encore.str_builder.call(null),xs))].join('');
});

taoensso.encore.into_str.cljs$lang$maxFixedArity = (0);

taoensso.encore.into_str.cljs$lang$applyTo = (function (seq47719){
return taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47719));
});

/**
 * Reverse comparator.
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare.call(null,y,x);
});
var sentinel_47731 = {};
var nil__GT_sentinel_47732 = ((function (sentinel_47731){
return (function (x){
if((x == null)){
return sentinel_47731;
} else {
return x;
}
});})(sentinel_47731))
;
var sentinel__GT_nil_47733 = ((function (sentinel_47731,nil__GT_sentinel_47732){
return (function (x){
if((x === sentinel_47731)){
return null;
} else {
return x;
}
});})(sentinel_47731,nil__GT_sentinel_47732))
;
/**
 * Conjoins the top `n` items from `coll` of N items into `to` in
 *  O(N.logn) time. For comparsion, (take n (sort-by ...)) is O(N.logN).
 */
taoensso.encore.top_into = ((function (sentinel_47731,nil__GT_sentinel_47732,sentinel__GT_nil_47733){
return (function taoensso$encore$top_into(var_args){
var args47725 = [];
var len__37877__auto___47734 = arguments.length;
var i__37878__auto___47735 = (0);
while(true){
if((i__37878__auto___47735 < len__37877__auto___47734)){
args47725.push((arguments[i__37878__auto___47735]));

var G__47736 = (i__37878__auto___47735 + (1));
i__37878__auto___47735 = G__47736;
continue;
} else {
}
break;
}

var G__47727 = args47725.length;
switch (G__47727) {
case 3:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47725.length)].join('')));

}
});})(sentinel_47731,nil__GT_sentinel_47732,sentinel__GT_nil_47733))
;

taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3 = ((function (sentinel_47731,nil__GT_sentinel_47732,sentinel__GT_nil_47733){
return (function (to,n,coll){
return taoensso.encore.top_into.call(null,to,n,cljs.core.identity,cljs.core.compare,coll);
});})(sentinel_47731,nil__GT_sentinel_47732,sentinel__GT_nil_47733))
;

taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4 = ((function (sentinel_47731,nil__GT_sentinel_47732,sentinel__GT_nil_47733){
return (function (to,n,keyfn,coll){
return taoensso.encore.top_into.call(null,to,n,keyfn,cljs.core.compare,coll);
});})(sentinel_47731,nil__GT_sentinel_47732,sentinel__GT_nil_47733))
;

taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5 = ((function (sentinel_47731,nil__GT_sentinel_47732,sentinel__GT_nil_47733){
return (function (to,n,keyfn,cmp,coll){
var coll_size = cljs.core.count.call(null,coll);
var n__$1 = cljs.core.long$.call(null,(function (){var x__37140__auto__ = coll_size;
var y__37141__auto__ = cljs.core.long$.call(null,n);
return ((x__37140__auto__ < y__37141__auto__) ? x__37140__auto__ : y__37141__auto__);
})());
if((n__$1 > (0))){
return cljs.core.into.call(null,to,cljs.core.take.call(null,n__$1),cljs.core.sort_by.call(null,keyfn,cmp,coll));
} else {
return to;
}
});})(sentinel_47731,nil__GT_sentinel_47732,sentinel__GT_nil_47733))
;

taoensso.encore.top_into.cljs$lang$maxFixedArity = 5;


/**
 * Returns a sorted vector of the top `n` items from `coll` of N items
 *  in O(N.logn) time. For comparison, (take n (sort-by ...)) is O(N.logN).
 */
taoensso.encore.top = ((function (sentinel_47731,nil__GT_sentinel_47732,sentinel__GT_nil_47733){
return (function taoensso$encore$top(var_args){
var args47728 = [];
var len__37877__auto___47738 = arguments.length;
var i__37878__auto___47739 = (0);
while(true){
if((i__37878__auto___47739 < len__37877__auto___47738)){
args47728.push((arguments[i__37878__auto___47739]));

var G__47740 = (i__37878__auto___47739 + (1));
i__37878__auto___47739 = G__47740;
continue;
} else {
}
break;
}

var G__47730 = args47728.length;
switch (G__47730) {
case 2:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47728.length)].join('')));

}
});})(sentinel_47731,nil__GT_sentinel_47732,sentinel__GT_nil_47733))
;

taoensso.encore.top.cljs$core$IFn$_invoke$arity$2 = ((function (sentinel_47731,nil__GT_sentinel_47732,sentinel__GT_nil_47733){
return (function (n,coll){
return taoensso.encore.top_into.call(null,cljs.core.PersistentVector.EMPTY,n,cljs.core.identity,cljs.core.compare,coll);
});})(sentinel_47731,nil__GT_sentinel_47732,sentinel__GT_nil_47733))
;

taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 = ((function (sentinel_47731,nil__GT_sentinel_47732,sentinel__GT_nil_47733){
return (function (n,keyfn,coll){
return taoensso.encore.top_into.call(null,cljs.core.PersistentVector.EMPTY,n,keyfn,cljs.core.compare,coll);
});})(sentinel_47731,nil__GT_sentinel_47732,sentinel__GT_nil_47733))
;

taoensso.encore.top.cljs$core$IFn$_invoke$arity$4 = ((function (sentinel_47731,nil__GT_sentinel_47732,sentinel__GT_nil_47733){
return (function (n,keyfn,cmp,coll){
return taoensso.encore.top_into.call(null,cljs.core.PersistentVector.EMPTY,n,keyfn,cmp,coll);
});})(sentinel_47731,nil__GT_sentinel_47732,sentinel__GT_nil_47733))
;

taoensso.encore.top.cljs$lang$maxFixedArity = 4;

taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return (cljs.core.long$.call(null,secs) * (1000));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot.call(null,cljs.core.long$.call(null,ms),(1000));
});
/**
 * Returns ~number of milliseconds in period defined by given args.
 */
taoensso.encore.ms = (function taoensso$encore$ms(var_args){
var args__37884__auto__ = [];
var len__37877__auto___47758 = arguments.length;
var i__37878__auto___47759 = (0);
while(true){
if((i__37878__auto___47759 < len__37877__auto___47758)){
args__37884__auto__.push((arguments[i__37878__auto___47759]));

var G__47760 = (i__37878__auto___47759 + (1));
i__37878__auto___47759 = G__47760;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});

taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__47755){
var map__47756 = p__47755;
var map__47756__$1 = ((((!((map__47756 == null)))?((((map__47756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47756):map__47756);
var opts = map__47756__$1;
var years = cljs.core.get.call(null,map__47756__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var months = cljs.core.get.call(null,map__47756__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var weeks = cljs.core.get.call(null,map__47756__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var days = cljs.core.get.call(null,map__47756__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.call(null,map__47756__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var mins = cljs.core.get.call(null,map__47756__$1,new cljs.core.Keyword(null,"mins","mins",467369676));
var secs = cljs.core.get.call(null,map__47756__$1,new cljs.core.Keyword(null,"secs","secs",1532330091));
var msecs = cljs.core.get.call(null,map__47756__$1,new cljs.core.Keyword(null,"msecs","msecs",1711980553));
var ms = cljs.core.get.call(null,map__47756__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
taoensso.truss.impl.revery_QMARK_.call(null,((function (map__47756,map__47756__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms){
return (function (__in){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null).call(null,__in))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(#{:msecs :secs :months :days :mins :hours :years :ms :weeks} __in)",__in,null,null);
}
});})(map__47756,map__47756__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms))
,cljs.core.keys.call(null,opts));

return taoensso.encore.round0.call(null,(((((((((cljs.core.truth_(years)?(years * (31536000000)):0.0) + (cljs.core.truth_(months)?(months * 2.551392E9):0.0)) + (cljs.core.truth_(weeks)?(weeks * (604800000)):0.0)) + (cljs.core.truth_(days)?(days * (86400000)):0.0)) + (cljs.core.truth_(hours)?(hours * (3600000)):0.0)) + (cljs.core.truth_(mins)?(mins * (60000)):0.0)) + (cljs.core.truth_(secs)?(secs * (1000)):0.0)) + (cljs.core.truth_(msecs)?msecs:0.0)) + (cljs.core.truth_(ms)?ms:0.0)));
});

taoensso.encore.ms.cljs$lang$maxFixedArity = (0);

taoensso.encore.ms.cljs$lang$applyTo = (function (seq47754){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47754));
});

taoensso.encore.secs = cljs.core.comp.call(null,taoensso.encore.ms__GT_secs,taoensso.encore.ms);
taoensso.encore.console_log = ((typeof console !== 'undefined')?(function() { 
var G__47771__delegate = function (xs){
var b2__31771__auto__ = console.log;
if(cljs.core.truth_(b2__31771__auto__)){
var f = b2__31771__auto__;
return f.apply(console,cljs.core.into_array.call(null,xs));
} else {
return null;
}
};
var G__47771 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__47772__i = 0, G__47772__a = new Array(arguments.length -  0);
while (G__47772__i < G__47772__a.length) {G__47772__a[G__47772__i] = arguments[G__47772__i + 0]; ++G__47772__i;}
  xs = new cljs.core.IndexedSeq(G__47772__a,0);
} 
return G__47771__delegate.call(this,xs);};
G__47771.cljs$lang$maxFixedArity = 0;
G__47771.cljs$lang$applyTo = (function (arglist__47773){
var xs = cljs.core.seq(arglist__47773);
return G__47771__delegate(xs);
});
G__47771.cljs$core$IFn$_invoke$arity$variadic = G__47771__delegate;
return G__47771;
})()
:(function() { 
var G__47774__delegate = function (xs){
return null;
};
var G__47774 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__47775__i = 0, G__47775__a = new Array(arguments.length -  0);
while (G__47775__i < G__47775__a.length) {G__47775__a[G__47775__i] = arguments[G__47775__i + 0]; ++G__47775__i;}
  xs = new cljs.core.IndexedSeq(G__47775__a,0);
} 
return G__47774__delegate.call(this,xs);};
G__47774.cljs$lang$maxFixedArity = 0;
G__47774.cljs$lang$applyTo = (function (arglist__47776){
var xs = cljs.core.seq(arglist__47776);
return G__47774__delegate(xs);
});
G__47774.cljs$core$IFn$_invoke$arity$variadic = G__47774__delegate;
return G__47774;
})()
);

taoensso.encore.log = taoensso.encore.console_log;

taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__37884__auto__ = [];
var len__37877__auto___47777 = arguments.length;
var i__37878__auto___47778 = (0);
while(true){
if((i__37878__auto___47778 < len__37877__auto___47777)){
args__37884__auto__.push((arguments[i__37878__auto___47778]));

var G__47779 = (i__37878__auto___47778 + (1));
i__37878__auto___47778 = G__47779;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});

taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log.call(null,taoensso.encore.str_join.call(null," ",cljs.core.map.call(null,taoensso.encore.nil__GT_str),xs));
});

taoensso.encore.logp.cljs$lang$maxFixedArity = (0);

taoensso.encore.logp.cljs$lang$applyTo = (function (seq47765){
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47765));
});


taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__37884__auto__ = [];
var len__37877__auto___47780 = arguments.length;
var i__37878__auto___47781 = (0);
while(true){
if((i__37878__auto___47781 < len__37877__auto___47780)){
args__37884__auto__.push((arguments[i__37878__auto___47781]));

var G__47782 = (i__37878__auto___47781 + (1));
i__37878__auto___47781 = G__47782;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});

taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return alert(taoensso.encore.str_join.call(null," ",cljs.core.map.call(null,taoensso.encore.nil__GT_str),xs));
});

taoensso.encore.sayp.cljs$lang$maxFixedArity = (0);

taoensso.encore.sayp.cljs$lang$applyTo = (function (seq47766){
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47766));
});


taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__37884__auto__ = [];
var len__37877__auto___47783 = arguments.length;
var i__37878__auto___47784 = (0);
while(true){
if((i__37878__auto___47784 < len__37877__auto___47783)){
args__37884__auto__.push((arguments[i__37878__auto___47784]));

var G__47785 = (i__37878__auto___47784 + (1));
i__37878__auto___47784 = G__47785;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return taoensso.encore.console_log.call(null,taoensso.encore.format_STAR_.call(null,fmt,xs));
});

taoensso.encore.logf.cljs$lang$maxFixedArity = (1);

taoensso.encore.logf.cljs$lang$applyTo = (function (seq47767){
var G__47768 = cljs.core.first.call(null,seq47767);
var seq47767__$1 = cljs.core.next.call(null,seq47767);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic(G__47768,seq47767__$1);
});


taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__37884__auto__ = [];
var len__37877__auto___47786 = arguments.length;
var i__37878__auto___47787 = (0);
while(true){
if((i__37878__auto___47787 < len__37877__auto___47786)){
args__37884__auto__.push((arguments[i__37878__auto___47787]));

var G__47788 = (i__37878__auto___47787 + (1));
i__37878__auto___47787 = G__47788;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return alert(taoensso.encore.format_STAR_.call(null,fmt,xs));
});

taoensso.encore.sayf.cljs$lang$maxFixedArity = (1);

taoensso.encore.sayf.cljs$lang$applyTo = (function (seq47769){
var G__47770 = cljs.core.first.call(null,seq47769);
var seq47769__$1 = cljs.core.next.call(null,seq47769);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic(G__47770,seq47769__$1);
});

/**
 * Returns `js/window`'s current location as a map.
 */
taoensso.encore.get_win_loc = (function taoensso$encore$get_win_loc(){
var b2__31771__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(b2__31771__auto__)){
var js_win = b2__31771__auto__;
var b2__31771__auto____$1 = js_win.location;
if(cljs.core.truth_(b2__31771__auto____$1)){
var loc = b2__31771__auto____$1;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"href","href",-793805698),loc.href,new cljs.core.Keyword(null,"protocol","protocol",652470118),loc.protocol,new cljs.core.Keyword(null,"hostname","hostname",2105669933),loc.hostname,new cljs.core.Keyword(null,"host","host",-1558485167),loc.host,new cljs.core.Keyword(null,"pathname","pathname",-1420497528),loc.pathname,new cljs.core.Keyword(null,"search","search",1564939822),loc.search,new cljs.core.Keyword(null,"hash","hash",-13781596),loc.hash], null);
} else {
return null;
}
} else {
return null;
}
});
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));

/**
 * Returns an immediately available XhrIo instance, or nil. The instance must
 *  be released back to pool manually.
 */
taoensso.encore.get_pooled_xhr_BANG_ = (function taoensso$encore$get_pooled_xhr_BANG_(){
var result = cljs.core.deref.call(null,taoensso.encore.xhr_pool_).getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});

taoensso.encore.js_form_data_QMARK_ = ((typeof FormData !== 'undefined')?(function (x){
return (x instanceof FormData);
}):(function (x){
return null;
}));

taoensso.encore.js_file_QMARK_ = ((typeof File !== 'undefined')?(function (x){
return (x instanceof File);
}):(function (x){
return null;
}));

/**
 * Returns [<uri> <?data>]
 */
taoensso.encore.coerce_xhr_params = (function (){var url_encode = (function() {
var taoensso$encore$url_encode = null;
var taoensso$encore$url_encode__1 = (function (params){
if(cljs.core.seq.call(null,params)){
return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
} else {
return null;
}
});
var taoensso$encore$url_encode__2 = (function (uri,params){
var qstr = taoensso$encore$url_encode.call(null,params);
var uri_with_query = ((clojure.string.blank_QMARK_.call(null,qstr))?uri:[cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(qstr)].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri_with_query,null], null);
});
taoensso$encore$url_encode = function(uri,params){
switch(arguments.length){
case 1:
return taoensso$encore$url_encode__1.call(this,uri);
case 2:
return taoensso$encore$url_encode__2.call(this,uri,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$url_encode__1;
taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$url_encode__2;
return taoensso$encore$url_encode;
})()
;
var adaptive_encode = ((function (url_encode){
return (function (uri,params){
if(cljs.core.truth_(taoensso.encore.js_form_data_QMARK_.call(null,params))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,params], null);
} else {
var e_47801 = (function (){try{if(cljs.core.map_QMARK_.call(null,params)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e47789){if((e47789 instanceof Error)){
var e = e47789;
return e;
} else {
throw e47789;

}
}})();
if((e_47801 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(map? params)",params,e_47801,null);
}

if(cljs.core.truth_((function (){var and__36790__auto__ = typeof FormData !== 'undefined';
if(and__36790__auto__){
return taoensso.encore.rsome.call(null,taoensso.encore.js_file_QMARK_,cljs.core.vals.call(null,params));
} else {
return and__36790__auto__;
}
})())){
var form_data = (new FormData());
var seq__47790_47802 = cljs.core.seq.call(null,params);
var chunk__47791_47803 = null;
var count__47792_47804 = (0);
var i__47793_47805 = (0);
while(true){
if((i__47793_47805 < count__47792_47804)){
var vec__47794_47806 = cljs.core._nth.call(null,chunk__47791_47803,i__47793_47805);
var k_47807 = cljs.core.nth.call(null,vec__47794_47806,(0),null);
var v_47808 = cljs.core.nth.call(null,vec__47794_47806,(1),null);
form_data.append(cljs.core.name.call(null,k_47807),v_47808);

var G__47809 = seq__47790_47802;
var G__47810 = chunk__47791_47803;
var G__47811 = count__47792_47804;
var G__47812 = (i__47793_47805 + (1));
seq__47790_47802 = G__47809;
chunk__47791_47803 = G__47810;
count__47792_47804 = G__47811;
i__47793_47805 = G__47812;
continue;
} else {
var temp__4657__auto___47813 = cljs.core.seq.call(null,seq__47790_47802);
if(temp__4657__auto___47813){
var seq__47790_47814__$1 = temp__4657__auto___47813;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47790_47814__$1)){
var c__37613__auto___47815 = cljs.core.chunk_first.call(null,seq__47790_47814__$1);
var G__47816 = cljs.core.chunk_rest.call(null,seq__47790_47814__$1);
var G__47817 = c__37613__auto___47815;
var G__47818 = cljs.core.count.call(null,c__37613__auto___47815);
var G__47819 = (0);
seq__47790_47802 = G__47816;
chunk__47791_47803 = G__47817;
count__47792_47804 = G__47818;
i__47793_47805 = G__47819;
continue;
} else {
var vec__47797_47820 = cljs.core.first.call(null,seq__47790_47814__$1);
var k_47821 = cljs.core.nth.call(null,vec__47797_47820,(0),null);
var v_47822 = cljs.core.nth.call(null,vec__47797_47820,(1),null);
form_data.append(cljs.core.name.call(null,k_47821),v_47822);

var G__47823 = cljs.core.next.call(null,seq__47790_47814__$1);
var G__47824 = null;
var G__47825 = (0);
var G__47826 = (0);
seq__47790_47802 = G__47823;
chunk__47791_47803 = G__47824;
count__47792_47804 = G__47825;
i__47793_47805 = G__47826;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,form_data], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,url_encode.call(null,params)], null);
}
}
});})(url_encode))
;
return ((function (url_encode,adaptive_encode){
return (function (uri,method,params){
if(cljs.core.truth_(((function (url_encode,adaptive_encode){
return (function (x){
var or__36802__auto__ = (x == null);
if(or__36802__auto__){
return or__36802__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,x);
}
});})(url_encode,adaptive_encode))
.call(null,params))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"([:or nil? map?] params)",params,null,null);
}

var G__47800 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__47800) {
case "get":
return url_encode.call(null,uri,params);

break;
case "post":
return adaptive_encode.call(null,uri,params);

break;
case "put":
return adaptive_encode.call(null,uri,params);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
});
;})(url_encode,adaptive_encode))
})();
/**
 * Alpha, subject to change. Simple, lightweight Ajax via Google Closure.
 *   Returns the resulting XhrIo[1] instance, or nil.
 * 
 *   (ajax-lite "/my-post-route"
 *  {:method     :post
 *   :params     {:username "Rich Hickey" :type "Awesome"}
 *   :headers    {"Foo" "Bar"}
 *   :resp-type  :text
 *   :timeout-ms 7000
 *   :with-credentials? false ; Enable if using CORS (requires xhr v2+)
 *  }
 *  (fn async-callback-fn [resp-map]
 *    (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
 *      ;; ?status - e/o #{nil 200 404 ...}, non-nil iff server responded
 *      ;; ?error  - e/o #{nil <http-error-status-code> <exception> :timeout
 *                         :abort :http-error :exception :xhr-pool-depleted}
 *      (js/alert (str "Ajax response: " resp-map)))))
 * 
 *   [1] Ref. https://developers.google.com/closure/library/docs/xhrio
 */
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__47829,callback_fn){
var map__47848 = p__47829;
var map__47848__$1 = ((((!((map__47848 == null)))?((((map__47848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47848):map__47848);
var opts = map__47848__$1;
var method = cljs.core.get.call(null,map__47848__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var params = cljs.core.get.call(null,map__47848__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__47848__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout_ms = cljs.core.get.call(null,map__47848__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(10000));
var resp_type = cljs.core.get.call(null,map__47848__$1,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"auto","auto",-566279492));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__47848__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
if(cljs.core.truth_(((function (map__47848,map__47848__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (x){
var or__36802__auto__ = (x == null);
if(or__36802__auto__){
return or__36802__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.nat_int_QMARK_).call(null,x);
}
});})(map__47848,map__47848__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
.call(null,timeout_ms))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"([:or nil? nat-int?] timeout-ms)",timeout_ms,null,null);
}

var b2__31771__auto__ = taoensso.encore.get_pooled_xhr_BANG_.call(null);
if(cljs.core.truth_(b2__31771__auto__)){
var xhr = b2__31771__auto__;
try{var timeout_ms__$1 = (function (){var or__36802__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return timeout_ms;
}
})();
var xhr_method = (function (){var G__47854 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__47854) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
case "put":
return "PUT";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
})();
var vec__47851 = taoensso.encore.coerce_xhr_params.call(null,uri,method,params);
var xhr_uri = cljs.core.nth.call(null,vec__47851,(0),null);
var xhr__QMARK_data = cljs.core.nth.call(null,vec__47851,(1),null);
var xhr_headers = (function (){var headers__$1 = taoensso.encore.map_keys.call(null,((function (timeout_ms__$1,xhr_method,vec__47851,xhr_uri,xhr__QMARK_data,xhr,b2__31771__auto__,map__47848,map__47848__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (p1__47828_SHARP_){
return clojure.string.lower_case.call(null,cljs.core.name.call(null,p1__47828_SHARP_));
});})(timeout_ms__$1,xhr_method,vec__47851,xhr_uri,xhr__QMARK_data,xhr,b2__31771__auto__,map__47848,map__47848__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
,headers);
var headers__$2 = taoensso.encore.assoc_some.call(null,headers__$1,"x-requested-with",cljs.core.get.call(null,headers__$1,"x-requested-with","XMLHTTPRequest"));
return cljs.core.clj__GT_js.call(null,headers__$2);
})();
var G__47855_47867 = xhr;
goog.events.listenOnce(G__47855_47867,goog.net.EventType.READY,((function (G__47855_47867,timeout_ms__$1,xhr_method,vec__47851,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__31771__auto__,map__47848,map__47848__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (_){
return cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);
});})(G__47855_47867,timeout_ms__$1,xhr_method,vec__47851,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__31771__auto__,map__47848,map__47848__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
);

goog.events.listenOnce(G__47855_47867,goog.net.EventType.COMPLETE,((function (G__47855_47867,timeout_ms__$1,xhr_method,vec__47851,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__31771__auto__,map__47848,map__47848__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function taoensso$encore$ajax_lite_$_wrapped_callback_fn(resp){
var success_QMARK_ = xhr.isSuccess();
var _status = xhr.getStatus();
var vec__47861 = ((cljs.core.not_EQ_.call(null,_status,(-1)))?(function (){var _QMARK_content_type = xhr.getResponseHeader("content-type");
var _QMARK_content = (function (){var resp_type__$1 = ((cljs.core.not_EQ_.call(null,resp_type,new cljs.core.Keyword(null,"auto","auto",-566279492)))?resp_type:(((_QMARK_content_type == null))?new cljs.core.Keyword(null,"text","text",-1790561697):(function (){var cts = clojure.string.lower_case.call(null,[cljs.core.str(_QMARK_content_type)].join(''));
var match_QMARK_ = ((function (cts,_QMARK_content_type,success_QMARK_,_status,G__47855_47867,timeout_ms__$1,xhr_method,vec__47851,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__31771__auto__,map__47848,map__47848__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (s){
return taoensso.encore.str_contains_QMARK_.call(null,cts,s);
});})(cts,_QMARK_content_type,success_QMARK_,_status,G__47855_47867,timeout_ms__$1,xhr_method,vec__47851,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__31771__auto__,map__47848,map__47848__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
if(cljs.core.truth_(match_QMARK_.call(null,"/edn"))){
return new cljs.core.Keyword(null,"edn","edn",1317840885);
} else {
if(cljs.core.truth_(match_QMARK_.call(null,"/json"))){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
if(cljs.core.truth_(match_QMARK_.call(null,"/xml"))){
return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);
}
}
}
})()));
try{var G__47865 = (((resp_type__$1 instanceof cljs.core.Keyword))?resp_type__$1.fqn:null);
switch (G__47865) {
case "edn":
return taoensso.encore.read_edn.call(null,xhr.getResponseText());

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "text":
return xhr.getResponseText();

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(resp_type__$1)].join('')));

}
}catch (e47864){if((e47864 instanceof Error)){
var _e = e47864;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ajax","bad-response-type","ajax/bad-response-type",789441015),resp_type__$1,new cljs.core.Keyword("ajax","resp-as-text","ajax/resp-as-text",141416819),xhr.getResponseText()], null);
} else {
throw e47864;

}
}})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_status,_QMARK_content_type,_QMARK_content], null);
})():null);
var _QMARK_status = cljs.core.nth.call(null,vec__47861,(0),null);
var _QMARK_content_type = cljs.core.nth.call(null,vec__47861,(1),null);
var _QMARK_content = cljs.core.nth.call(null,vec__47861,(2),null);
return callback_fn.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"raw-resp","raw-resp",-1924342506),resp,new cljs.core.Keyword(null,"xhr","xhr",-177710851),xhr,new cljs.core.Keyword(null,"success?","success?",-122854052),success_QMARK_,new cljs.core.Keyword(null,"?status","?status",938730360),_QMARK_status,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049),_QMARK_content_type,new cljs.core.Keyword(null,"?content","?content",1697782054),_QMARK_content,new cljs.core.Keyword(null,"?error","?error",1070752222),(cljs.core.truth_(success_QMARK_)?null:(cljs.core.truth_(_QMARK_status)?_QMARK_status:cljs.core.get.call(null,cljs.core.PersistentArrayMap.fromArray([goog.net.ErrorCode.NO_ERROR,null,goog.net.ErrorCode.EXCEPTION,new cljs.core.Keyword(null,"exception","exception",-335277064),goog.net.ErrorCode.HTTP_ERROR,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),goog.net.ErrorCode.ABORT,new cljs.core.Keyword(null,"abort","abort",521193198),goog.net.ErrorCode.TIMEOUT,new cljs.core.Keyword(null,"timeout","timeout",-318625318)], true, false),xhr.getLastErrorCode(),new cljs.core.Keyword(null,"unknown","unknown",-935977881))))], null));
});})(G__47855_47867,timeout_ms__$1,xhr_method,vec__47851,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__31771__auto__,map__47848,map__47848__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
);


var b2__31771__auto___47869__$1 = new cljs.core.Keyword(null,"progress-fn","progress-fn",-1146547855).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(b2__31771__auto___47869__$1)){
var pf_47870 = b2__31771__auto___47869__$1;
goog.events.listen(xhr,goog.net.EventType.PROGRESS,((function (pf_47870,b2__31771__auto___47869__$1,timeout_ms__$1,xhr_method,vec__47851,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__31771__auto__,map__47848,map__47848__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__36790__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__36790__auto__)){
return cljs.core.not_EQ_.call(null,total,(0));
} else {
return and__36790__auto__;
}
})())?(loaded / total):null);
return pf_47870.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"?ratio","?ratio",-1275760831),_QMARK_ratio,new cljs.core.Keyword(null,"length-computable?","length-computable?",1915473276),length_computable_QMARK_,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),loaded,new cljs.core.Keyword(null,"total","total",1916810418),total,new cljs.core.Keyword(null,"ev","ev",-406827324),ev], null));
});})(pf_47870,b2__31771__auto___47869__$1,timeout_ms__$1,xhr_method,vec__47851,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__31771__auto__,map__47848,map__47848__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
);
} else {
}

xhr.setTimeoutInterval((function (){var or__36802__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return (0);
}
})());

if(cljs.core.truth_(with_credentials_QMARK_)){
xhr.setWithCredentials(true);
} else {
}

xhr.send(xhr_uri,xhr_method,xhr__QMARK_data,xhr_headers);

return xhr;
}catch (e47850){if((e47850 instanceof Error)){
var e = e47850;
cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);

callback_fn.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),e], null));

return null;
} else {
throw e47850;

}
}} else {
callback_fn.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),new cljs.core.Keyword(null,"xhr-pool-depleted","xhr-pool-depleted",-1812092376)], null));

return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_encode = (function taoensso$encore$url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,encodeURIComponent([cljs.core.str(s)].join(''),s),"*","%2A"),"'","%27");
} else {
return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_decode = (function taoensso$encore$url_decode(var_args){
var args__37884__auto__ = [];
var len__37877__auto___47877 = arguments.length;
var i__37878__auto___47878 = (0);
while(true){
if((i__37878__auto___47878 < len__37877__auto___47877)){
args__37884__auto__.push((arguments[i__37878__auto___47878]));

var G__47879 = (i__37878__auto___47878 + (1));
i__37878__auto___47878 = G__47879;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__47873){
var vec__47874 = p__47873;
var encoding = cljs.core.nth.call(null,vec__47874,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});

taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1);

taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq47871){
var G__47872 = cljs.core.first.call(null,seq47871);
var seq47871__$1 = cljs.core.next.call(null,seq47871);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__47872,seq47871__$1);
});

taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [cljs.core.str(taoensso.encore.url_encode.call(null,taoensso.encore.as_qname.call(null,k))),cljs.core.str("="),cljs.core.str(taoensso.encore.url_encode.call(null,(function (){var or__36802__auto__ = taoensso.encore.as__QMARK_qname.call(null,v);
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return [cljs.core.str(v)].join('');
}
})()))].join('');
});
var join = ((function (param){
return (function (strs){
return clojure.string.join.call(null,"&",strs);
});})(param))
;
if(cljs.core.empty_QMARK_.call(null,m)){
return "";
} else {
return join.call(null,(function (){var iter__37582__auto__ = ((function (param,join){
return (function taoensso$encore$format_query_string_$_iter__47896(s__47897){
return (new cljs.core.LazySeq(null,((function (param,join){
return (function (){
var s__47897__$1 = s__47897;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__47897__$1);
if(temp__4657__auto__){
var s__47897__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47897__$2)){
var c__37580__auto__ = cljs.core.chunk_first.call(null,s__47897__$2);
var size__37581__auto__ = cljs.core.count.call(null,c__37580__auto__);
var b__47899 = cljs.core.chunk_buffer.call(null,size__37581__auto__);
if((function (){var i__47898 = (0);
while(true){
if((i__47898 < size__37581__auto__)){
var vec__47906 = cljs.core._nth.call(null,c__37580__auto__,i__47898);
var k = cljs.core.nth.call(null,vec__47906,(0),null);
var v = cljs.core.nth.call(null,vec__47906,(1),null);
if(taoensso.encore.some_QMARK_.call(null,v)){
cljs.core.chunk_append.call(null,b__47899,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__36802__auto__ = cljs.core.seq.call(null,v);
if(or__36802__auto__){
return or__36802__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)));

var G__47912 = (i__47898 + (1));
i__47898 = G__47912;
continue;
} else {
var G__47913 = (i__47898 + (1));
i__47898 = G__47913;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47899),taoensso$encore$format_query_string_$_iter__47896.call(null,cljs.core.chunk_rest.call(null,s__47897__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47899),null);
}
} else {
var vec__47909 = cljs.core.first.call(null,s__47897__$2);
var k = cljs.core.nth.call(null,vec__47909,(0),null);
var v = cljs.core.nth.call(null,vec__47909,(1),null);
if(taoensso.encore.some_QMARK_.call(null,v)){
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__36802__auto__ = cljs.core.seq.call(null,v);
if(or__36802__auto__){
return or__36802__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)),taoensso$encore$format_query_string_$_iter__47896.call(null,cljs.core.rest.call(null,s__47897__$2)));
} else {
var G__47914 = cljs.core.rest.call(null,s__47897__$2);
s__47897__$1 = G__47914;
continue;
}
}
} else {
return null;
}
break;
}
});})(param,join))
,null,null));
});})(param,join))
;
return iter__37582__auto__.call(null,m);
})());
}
});
taoensso.encore.assoc_conj = (function taoensso$encore$assoc_conj(m,k,v){
return cljs.core.assoc.call(null,m,k,(function (){var b2__31771__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(b2__31771__auto__)){
var cur = b2__31771__auto__;
if(cljs.core.vector_QMARK_.call(null,cur)){
return cljs.core.conj.call(null,cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
 * Based on `ring-codec/form-decode`.
 */
taoensso.encore.parse_query_params = (function taoensso$encore$parse_query_params(var_args){
var args__37884__auto__ = [];
var len__37877__auto___47924 = arguments.length;
var i__37878__auto___47925 = (0);
while(true){
if((i__37878__auto___47925 < len__37877__auto___47924)){
args__37884__auto__.push((arguments[i__37878__auto___47925]));

var G__47926 = (i__37878__auto___47925 + (1));
i__37878__auto___47925 = G__47926;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__47917){
var vec__47918 = p__47917;
var keywordize_QMARK_ = cljs.core.nth.call(null,vec__47918,(0),null);
var encoding = cljs.core.nth.call(null,vec__47918,(1),null);
if((clojure.string.blank_QMARK_.call(null,s)) || (!(taoensso.encore.str_contains_QMARK_.call(null,s,"=")))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var s__$1 = ((taoensso.encore.str_starts_with_QMARK_.call(null,s,"?"))?cljs.core.subs.call(null,s,(1)):s);
var m = cljs.core.reduce.call(null,((function (s__$1,vec__47918,keywordize_QMARK_,encoding){
return (function (m,param){
var b2__31771__auto__ = clojure.string.split.call(null,param,/=/,(2));
if(cljs.core.truth_(b2__31771__auto__)){
var vec__47921 = b2__31771__auto__;
var k = cljs.core.nth.call(null,vec__47921,(0),null);
var v = cljs.core.nth.call(null,vec__47921,(1),null);
return taoensso.encore.assoc_conj.call(null,m,taoensso.encore.url_decode.call(null,k,encoding),taoensso.encore.url_decode.call(null,v,encoding));
} else {
return m;
}
});})(s__$1,vec__47918,keywordize_QMARK_,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,s__$1,/&/));
if(cljs.core.truth_(keywordize_QMARK_)){
return taoensso.encore.map_keys.call(null,cljs.core.keyword,m);
} else {
return m;
}
}
});

taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1);

taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq47915){
var G__47916 = cljs.core.first.call(null,seq47915);
var seq47915__$1 = cljs.core.next.call(null,seq47915);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic(G__47916,seq47915__$1);
});

taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__47930 = clojure.string.split.call(null,[cljs.core.str(url)].join(''),/\?/,(2));
var url__$1 = cljs.core.nth.call(null,vec__47930,(0),null);
var _QMARK_qstr = cljs.core.nth.call(null,vec__47930,(1),null);
var qmap = taoensso.encore.merge.call(null,(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.map_keys.call(null,cljs.core.keyword,taoensso.encore.parse_query_params.call(null,_QMARK_qstr)):null),taoensso.encore.map_keys.call(null,cljs.core.keyword,m));
var _QMARK_qstr__$1 = taoensso.encore.as__QMARK_nblank.call(null,taoensso.encore.format_query_string.call(null,qmap));
var b2__31771__auto__ = _QMARK_qstr__$1;
if(cljs.core.truth_(b2__31771__auto__)){
var qstr = b2__31771__auto__;
return [cljs.core.str(url__$1),cljs.core.str("?"),cljs.core.str(qstr)].join('');
} else {
return url__$1;
}
});
taoensso.encore._new_stubfn_ = (function taoensso$encore$_new_stubfn_(name){
return cljs.core.volatile_BANG_.call(null,(function() { 
var G__47933__delegate = function (args){
throw cljs.core.ex_info.call(null,"Attempting to call uninitialized stub fn",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stub","stub",1339145807),name,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
};
var G__47933 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47934__i = 0, G__47934__a = new Array(arguments.length -  0);
while (G__47934__i < G__47934__a.length) {G__47934__a[G__47934__i] = arguments[G__47934__i + 0]; ++G__47934__i;}
  args = new cljs.core.IndexedSeq(G__47934__a,0);
} 
return G__47933__delegate.call(this,args);};
G__47933.cljs$lang$maxFixedArity = 0;
G__47933.cljs$lang$applyTo = (function (arglist__47935){
var args = cljs.core.seq(arglist__47935);
return G__47933__delegate(args);
});
G__47933.cljs$core$IFn$_invoke$arity$variadic = G__47933__delegate;
return G__47933;
})()
);
});

taoensso.encore._assert_unstub_val = (function taoensso$encore$_assert_unstub_val(f){
if(cljs.core.fn_QMARK_.call(null,f)){
return f;
} else {
throw cljs.core.ex_info.call(null,"Unstub value must be a fn",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),f,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,f)], null));
}
});
/**
 * Returns (fn [?ns]) -> truthy.
 */
taoensso.encore.compile_ns_filter = (function (){var compile1 = (function (x){
if(taoensso.encore.re_pattern_QMARK_.call(null,x)){
return (function (ns_str){
return cljs.core.re_find.call(null,x,ns_str);
});
} else {
if(typeof x === 'string'){
if(taoensso.encore.str_contains_QMARK_.call(null,x,"*")){
var re = cljs.core.re_pattern.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str("^"),cljs.core.str(x),cljs.core.str("$")].join(''),".","\\."),"*","(.*)"));
return ((function (re){
return (function (ns_str){
return cljs.core.re_find.call(null,re,ns_str);
});
;})(re))
} else {
return (function (ns_str){
return cljs.core._EQ_.call(null,ns_str,x);
});
}
} else {
throw cljs.core.ex_info.call(null,"Unexpected ns-pattern type",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}
}
});
return ((function (compile1){
return (function() {
var taoensso$encore$self = null;
var taoensso$encore$self__1 = (function (ns_pattern){
var x = ns_pattern;
if(cljs.core.map_QMARK_.call(null,x)){
return taoensso$encore$self.call(null,new cljs.core.Keyword(null,"whitelist","whitelist",-979294437).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"blacklist","blacklist",1248093170).cljs$core$IFn$_invoke$arity$1(x));
} else {
if((cljs.core.vector_QMARK_.call(null,x)) || (cljs.core.set_QMARK_.call(null,x))){
return taoensso$encore$self.call(null,x,null);
} else {
if(cljs.core._EQ_.call(null,x,"*")){
return ((function (x,compile1){
return (function (_QMARK_ns){
return true;
});
;})(x,compile1))
} else {
var match_QMARK_ = compile1.call(null,x);
return ((function (match_QMARK_,x,compile1){
return (function (_QMARK_ns){
if(cljs.core.truth_(match_QMARK_.call(null,[cljs.core.str(_QMARK_ns)].join('')))){
return true;
} else {
return null;
}
});
;})(match_QMARK_,x,compile1))
}
}
}
});
var taoensso$encore$self__2 = (function (whitelist,blacklist){
var white = ((cljs.core.seq.call(null,whitelist))?(function (){var match_fns = cljs.core.mapv.call(null,compile1,whitelist);
var vec__47944 = match_fns;
var seq__47945 = cljs.core.seq.call(null,vec__47944);
var first__47946 = cljs.core.first.call(null,seq__47945);
var seq__47945__$1 = cljs.core.next.call(null,seq__47945);
var m1 = first__47946;
var mn = seq__47945__$1;
if(mn){
return ((function (match_fns,vec__47944,seq__47945,first__47946,seq__47945__$1,m1,mn,compile1){
return (function (ns_str){
return taoensso.encore.rsome.call(null,((function (match_fns,vec__47944,seq__47945,first__47946,seq__47945__$1,m1,mn,compile1){
return (function (p1__47936_SHARP_){
return p1__47936_SHARP_.call(null,ns_str);
});})(match_fns,vec__47944,seq__47945,first__47946,seq__47945__$1,m1,mn,compile1))
,match_fns);
});
;})(match_fns,vec__47944,seq__47945,first__47946,seq__47945__$1,m1,mn,compile1))
} else {
return ((function (match_fns,vec__47944,seq__47945,first__47946,seq__47945__$1,m1,mn,compile1){
return (function (ns_str){
return m1.call(null,ns_str);
});
;})(match_fns,vec__47944,seq__47945,first__47946,seq__47945__$1,m1,mn,compile1))
}
})():null);
var black = ((cljs.core.seq.call(null,blacklist))?(function (){var match_fns = cljs.core.mapv.call(null,compile1,blacklist);
var vec__47947 = match_fns;
var seq__47948 = cljs.core.seq.call(null,vec__47947);
var first__47949 = cljs.core.first.call(null,seq__47948);
var seq__47948__$1 = cljs.core.next.call(null,seq__47948);
var m1 = first__47949;
var mn = seq__47948__$1;
if(mn){
return ((function (match_fns,vec__47947,seq__47948,first__47949,seq__47948__$1,m1,mn,white,compile1){
return (function (ns_str){
return cljs.core.not.call(null,taoensso.encore.rsome.call(null,((function (match_fns,vec__47947,seq__47948,first__47949,seq__47948__$1,m1,mn,white,compile1){
return (function (p1__47937_SHARP_){
return p1__47937_SHARP_.call(null,ns_str);
});})(match_fns,vec__47947,seq__47948,first__47949,seq__47948__$1,m1,mn,white,compile1))
,match_fns));
});
;})(match_fns,vec__47947,seq__47948,first__47949,seq__47948__$1,m1,mn,white,compile1))
} else {
return ((function (match_fns,vec__47947,seq__47948,first__47949,seq__47948__$1,m1,mn,white,compile1){
return (function (ns_str){
return cljs.core.not.call(null,m1.call(null,ns_str));
});
;})(match_fns,vec__47947,seq__47948,first__47949,seq__47948__$1,m1,mn,white,compile1))
}
})():null);
if(cljs.core.truth_((function (){var and__36790__auto__ = white;
if(cljs.core.truth_(and__36790__auto__)){
return black;
} else {
return and__36790__auto__;
}
})())){
return ((function (white,black,compile1){
return (function (_QMARK_ns){
var ns_str = [cljs.core.str(_QMARK_ns)].join('');
if(cljs.core.truth_(white.call(null,ns_str))){
if(cljs.core.truth_(black.call(null,ns_str))){
return true;
} else {
return null;
}
} else {
return null;
}
});
;})(white,black,compile1))
} else {
if(cljs.core.truth_(white)){
return ((function (white,black,compile1){
return (function (_QMARK_ns){
if(cljs.core.truth_(white.call(null,[cljs.core.str(_QMARK_ns)].join('')))){
return true;
} else {
return null;
}
});
;})(white,black,compile1))
} else {
if(cljs.core.truth_(black)){
return ((function (white,black,compile1){
return (function (_QMARK_ns){
if(cljs.core.truth_(black.call(null,[cljs.core.str(_QMARK_ns)].join('')))){
return true;
} else {
return null;
}
});
;})(white,black,compile1))
} else {
return ((function (white,black,compile1){
return (function (_QMARK_ns){
return true;
});
;})(white,black,compile1))
}
}
}
});
taoensso$encore$self = function(whitelist,blacklist){
switch(arguments.length){
case 1:
return taoensso$encore$self__1.call(this,whitelist);
case 2:
return taoensso$encore$self__2.call(this,whitelist,blacklist);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$self.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$self__1;
taoensso$encore$self.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$self__2;
return taoensso$encore$self;
})()
;})(compile1))
})();

/**
 * @interface
 */
taoensso.encore.ITimeoutImpl = function(){};

taoensso.encore._schedule_timeout = (function taoensso$encore$_schedule_timeout(_,msecs,f){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 == null)))){
return _.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3(_,msecs,f);
} else {
var x__37465__auto__ = (((_ == null))?null:_);
var m__37466__auto__ = (taoensso.encore._schedule_timeout[goog.typeOf(x__37465__auto__)]);
if(!((m__37466__auto__ == null))){
return m__37466__auto__.call(null,_,msecs,f);
} else {
var m__37466__auto____$1 = (taoensso.encore._schedule_timeout["_"]);
if(!((m__37466__auto____$1 == null))){
return m__37466__auto____$1.call(null,_,msecs,f);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutImpl.-schedule-timeout",_);
}
}
}
});



/**
* @constructor
 * @implements {taoensso.encore.ITimeoutImpl}
*/
taoensso.encore.DefaultTimeoutImpl = (function (){
})
taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$ = true;

taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 = (function (_,msecs,f){
var self__ = this;
var ___$1 = this;
return window.setTimeout(f,msecs);
});

taoensso.encore.DefaultTimeoutImpl.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.DefaultTimeoutImpl.cljs$lang$type = true;

taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorStr = "taoensso.encore/DefaultTimeoutImpl";

taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorPrWriter = (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"taoensso.encore/DefaultTimeoutImpl");
});

taoensso.encore.__GT_DefaultTimeoutImpl = (function taoensso$encore$__GT_DefaultTimeoutImpl(){
return (new taoensso.encore.DefaultTimeoutImpl());
});


if(typeof taoensso.encore.default_timeout_impl_ !== 'undefined'){
} else {
/**
 * Simple one-timeout timeout implementation provided by platform timer.
 *  O(logn) add, O(1) cancel, O(1) tick. Fns must be non-blocking or cheap.
 *  Similar efficiency to core.async timers (binary heap vs DelayQueue).
 */
taoensso.encore.default_timeout_impl_ = (new cljs.core.Delay((function (){
return (new taoensso.encore.DefaultTimeoutImpl());
}),null));
}

taoensso.encore._tout_pending = {};

taoensso.encore._tout_cancelled = {};

taoensso.encore.tout_result = (function taoensso$encore$tout_result(result_){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,result_,taoensso.encore._tout_pending))){
return new cljs.core.Keyword("timeout","pending","timeout/pending",-1523854352);
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,result_,taoensso.encore._tout_cancelled))){
return new cljs.core.Keyword("timeout","cancelled","timeout/cancelled",1188007279);
} else {
return cljs.core.deref.call(null,result_);
}
}
});

/**
 * @interface
 */
taoensso.encore.ITimeoutFuture = function(){};

/**
 * Returns a map of timeout's public state.
 */
taoensso.encore.tf_state = (function taoensso$encore$tf_state(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_state$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_state$arity$1(_);
} else {
var x__37465__auto__ = (((_ == null))?null:_);
var m__37466__auto__ = (taoensso.encore.tf_state[goog.typeOf(x__37465__auto__)]);
if(!((m__37466__auto__ == null))){
return m__37466__auto__.call(null,_);
} else {
var m__37466__auto____$1 = (taoensso.encore.tf_state["_"]);
if(!((m__37466__auto____$1 == null))){
return m__37466__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-state",_);
}
}
}
});

/**
 * Returns :timeout/pending, :timeout/cancelled, or the timeout's completed result.
 */
taoensso.encore.tf_poll = (function taoensso$encore$tf_poll(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_poll$arity$1(_);
} else {
var x__37465__auto__ = (((_ == null))?null:_);
var m__37466__auto__ = (taoensso.encore.tf_poll[goog.typeOf(x__37465__auto__)]);
if(!((m__37466__auto__ == null))){
return m__37466__auto__.call(null,_);
} else {
var m__37466__auto____$1 = (taoensso.encore.tf_poll["_"]);
if(!((m__37466__auto____$1 == null))){
return m__37466__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-poll",_);
}
}
}
});

/**
 * Returns true iff the timeout is not pending (i.e. has a completed result or is cancelled).
 */
taoensso.encore.tf_done_QMARK_ = (function taoensso$encore$tf_done_QMARK_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1(_);
} else {
var x__37465__auto__ = (((_ == null))?null:_);
var m__37466__auto__ = (taoensso.encore.tf_done_QMARK_[goog.typeOf(x__37465__auto__)]);
if(!((m__37466__auto__ == null))){
return m__37466__auto__.call(null,_);
} else {
var m__37466__auto____$1 = (taoensso.encore.tf_done_QMARK_["_"]);
if(!((m__37466__auto____$1 == null))){
return m__37466__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-done?",_);
}
}
}
});

/**
 * Returns true iff the timeout is pending.
 */
taoensso.encore.tf_pending_QMARK_ = (function taoensso$encore$tf_pending_QMARK_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1(_);
} else {
var x__37465__auto__ = (((_ == null))?null:_);
var m__37466__auto__ = (taoensso.encore.tf_pending_QMARK_[goog.typeOf(x__37465__auto__)]);
if(!((m__37466__auto__ == null))){
return m__37466__auto__.call(null,_);
} else {
var m__37466__auto____$1 = (taoensso.encore.tf_pending_QMARK_["_"]);
if(!((m__37466__auto____$1 == null))){
return m__37466__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-pending?",_);
}
}
}
});

/**
 * Returns true iff the timeout is cancelled.
 */
taoensso.encore.tf_cancelled_QMARK_ = (function taoensso$encore$tf_cancelled_QMARK_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1(_);
} else {
var x__37465__auto__ = (((_ == null))?null:_);
var m__37466__auto__ = (taoensso.encore.tf_cancelled_QMARK_[goog.typeOf(x__37465__auto__)]);
if(!((m__37466__auto__ == null))){
return m__37466__auto__.call(null,_);
} else {
var m__37466__auto____$1 = (taoensso.encore.tf_cancelled_QMARK_["_"]);
if(!((m__37466__auto____$1 == null))){
return m__37466__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-cancelled?",_);
}
}
}
});

/**
 * Returns true iff the timeout was successfully cancelled (i.e. was previously pending).
 */
taoensso.encore.tf_cancel_BANG_ = (function taoensso$encore$tf_cancel_BANG_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1(_);
} else {
var x__37465__auto__ = (((_ == null))?null:_);
var m__37466__auto__ = (taoensso.encore.tf_cancel_BANG_[goog.typeOf(x__37465__auto__)]);
if(!((m__37466__auto__ == null))){
return m__37466__auto__.call(null,_);
} else {
var m__37466__auto____$1 = (taoensso.encore.tf_cancel_BANG_["_"]);
if(!((m__37466__auto____$1 == null))){
return m__37466__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-cancel!",_);
}
}
}
});


/**
* @constructor
 * @implements {taoensso.encore.ITimeoutFuture}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.TimeoutFuture = (function (f,result__,udt){
this.f = f;
this.result__ = result__;
this.udt = udt;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$ = true;

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.f,new cljs.core.Keyword(null,"udt","udt",2011712751),self__.udt], null);
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.encore.tout_result.call(null,cljs.core.deref.call(null,self__.result__));
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.deref.call(null,self__.result__),taoensso.encore._tout_pending));
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.deref.call(null,self__.result__),taoensso.encore._tout_pending);
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.deref.call(null,self__.result__),taoensso.encore._tout_cancelled);
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.compare_and_set_BANG_.call(null,self__.result__,taoensso.encore._tout_pending,taoensso.encore._tout_cancelled);
});

taoensso.encore.TimeoutFuture.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return taoensso.encore.tf_done_QMARK_.call(null,t__$1);
});

taoensso.encore.TimeoutFuture.prototype.cljs$core$IDeref$_deref$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return taoensso.encore.tf_poll.call(null,t__$1);
});

taoensso.encore.TimeoutFuture.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"result__","result__",1529131748,null),new cljs.core.Symbol(null,"udt","udt",-642723018,null)], null);
});

taoensso.encore.TimeoutFuture.cljs$lang$type = true;

taoensso.encore.TimeoutFuture.cljs$lang$ctorStr = "taoensso.encore/TimeoutFuture";

taoensso.encore.TimeoutFuture.cljs$lang$ctorPrWriter = (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"taoensso.encore/TimeoutFuture");
});

taoensso.encore.__GT_TimeoutFuture = (function taoensso$encore$__GT_TimeoutFuture(f,result__,udt){
return (new taoensso.encore.TimeoutFuture(f,result__,udt));
});

taoensso.encore.timeout_future_QMARK_ = (function taoensso$encore$timeout_future_QMARK_(x){
return (x instanceof taoensso.encore.TimeoutFuture);
});
/**
 * Alpha, subject to change.
 *   Returns a TimeoutFuture that will execute `f` after given msecs.
 * 
 *   Does NOT do any automatic binding conveyance.
 * 
 *   Performance depends on the provided timer implementation (`impl_`).
 *   The default implementation offers O(logn) add, O(1) cancel, O(1) tick.
 * 
 *   See `ITimeoutImpl` for extending to arbitrary timer implementations.
 */
taoensso.encore.call_after_timeout = (function taoensso$encore$call_after_timeout(var_args){
var args47954 = [];
var len__37877__auto___47957 = arguments.length;
var i__37878__auto___47958 = (0);
while(true){
if((i__37878__auto___47958 < len__37877__auto___47957)){
args47954.push((arguments[i__37878__auto___47958]));

var G__47959 = (i__37878__auto___47958 + (1));
i__37878__auto___47958 = G__47959;
continue;
} else {
}
break;
}

var G__47956 = args47954.length;
switch (G__47956) {
case 2:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47954.length)].join('')));

}
});

taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2 = (function (msecs,f){
return taoensso.encore.call_after_timeout.call(null,taoensso.encore.default_timeout_impl_,msecs,f);
});

taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3 = (function (impl_,msecs,f){
var msecs__$1 = cljs.core.long$.call(null,msecs);
var udt = ((new Date()).getTime() + msecs__$1);
var result__ = cljs.core.atom.call(null,taoensso.encore._tout_pending);
var cas_f = ((function (msecs__$1,udt,result__){
return (function (){
var result_ = (new cljs.core.Delay(((function (msecs__$1,udt,result__){
return (function (){
return f.call(null);
});})(msecs__$1,udt,result__))
,null));
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,result__,taoensso.encore._tout_pending,result_))){
return cljs.core.deref.call(null,result_);
} else {
return null;
}
});})(msecs__$1,udt,result__))
;
var impl_47961 = cljs.core.force.call(null,impl_);
taoensso.encore._schedule_timeout.call(null,impl_47961,msecs__$1,cas_f);

return (new taoensso.encore.TimeoutFuture(f,result__,udt));
});

taoensso.encore.call_after_timeout.cljs$lang$maxFixedArity = 3;

taoensso.encore.fixture_map__GT_fn = (function taoensso$encore$fixture_map__GT_fn(p__47963){
var map__47966 = p__47963;
var map__47966__$1 = ((((!((map__47966 == null)))?((((map__47966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47966):map__47966);
var before = cljs.core.get.call(null,map__47966__$1,new cljs.core.Keyword(null,"before","before",-1633692388),new cljs.core.Symbol(null,"do","do",1686842252,null));
var after = cljs.core.get.call(null,map__47966__$1,new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.Symbol(null,"do","do",1686842252,null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__37636__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__47962__auto__","f__47962__auto__",185103097,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37636__auto__);
})(),(function (){var x__37636__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37636__auto__ = before;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37636__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37636__auto__);
})(),(function (){var x__37636__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__47962__auto__","f__47962__auto__",185103097,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37636__auto__);
})(),(function (){var x__37636__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37636__auto__ = after;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37636__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37636__auto__);
})())));
});
taoensso.encore.get_window_location = taoensso.encore.get_win_loc;

taoensso.encore.backport_run_BANG_ = taoensso.encore.run_BANG_;

taoensso.encore.fq_name = taoensso.encore.as_qname;

taoensso.encore.qname = taoensso.encore.as_qname;

taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;

taoensso.encore.merge_deep = taoensso.encore.nested_merge;

taoensso.encore.parse_bool = taoensso.encore.as__QMARK_bool;

taoensso.encore.parse_int = taoensso.encore.as__QMARK_int;

taoensso.encore.parse_float = taoensso.encore.as__QMARK_float;

taoensso.encore.swapped_STAR_ = taoensso.encore.swapped;

taoensso.encore.memoize_a0_ = taoensso.encore.memoize_;

taoensso.encore.memoize_a1_ = taoensso.encore.memoize_;

taoensso.encore.a0_memoize_ = taoensso.encore.memoize_;

taoensso.encore.a1_memoize_ = taoensso.encore.memoize_;

taoensso.encore.memoize_1 = taoensso.encore.memoize_last;

taoensso.encore.memoize1 = taoensso.encore.memoize_last;

taoensso.encore.nnil_QMARK_ = taoensso.encore.some_QMARK_;

taoensso.encore.nneg_num_QMARK_ = taoensso.encore.nat_num_QMARK_;

taoensso.encore.nneg_int_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.nneg_float_QMARK_ = taoensso.encore.nat_float_QMARK_;

taoensso.encore.uint_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.pint_QMARK_ = taoensso.encore.pos_int_QMARK_;

taoensso.encore.nnil_EQ_ = taoensso.encore.some_EQ_;

taoensso.encore.as__QMARK_uint = taoensso.encore.as__QMARK_nat_int;

taoensso.encore.as__QMARK_pint = taoensso.encore.as__QMARK_pos_int;

taoensso.encore.as__QMARK_ufloat = taoensso.encore.as__QMARK_nat_float;

taoensso.encore.as__QMARK_pfloat = taoensso.encore.as__QMARK_pos_float;

taoensso.encore.as_uint = taoensso.encore.as_nat_int;

taoensso.encore.as_pint = taoensso.encore.as_pos_int;

taoensso.encore.as_ufloat = taoensso.encore.as_nat_float;

taoensso.encore.as_pfloat = taoensso.encore.as_pos_float;

taoensso.encore.run_BANG__STAR_ = taoensso.encore.run_BANG_;

taoensso.encore.every = taoensso.encore.revery;

taoensso.encore._QMARK_subvec_LT_idx = cljs.core.comp.call(null,cljs.core.not_empty,taoensso.encore.get_subvec);

taoensso.encore._QMARK_subvec_LT_len = cljs.core.comp.call(null,cljs.core.not_empty,taoensso.encore.get_subvector);

taoensso.encore._QMARK_substr_LT_idx = cljs.core.comp.call(null,taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substr);

taoensso.encore._QMARK_substr_LT_len = cljs.core.comp.call(null,taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substring);

taoensso.encore.dswap_BANG_ = taoensso.encore.swap_in_BANG__STAR_;

taoensso.encore.nano_time = taoensso.encore.now_nano;

taoensso.encore.swap_BANG__STAR_ = taoensso.encore.swap_in_BANG__STAR_;

taoensso.encore._swap_cache_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore._unswapped = taoensso.encore.swapped_vec;

taoensso.encore._vswapped = taoensso.encore.swapped_vec;

taoensso.encore._swap_k_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore.update_in_STAR_ = taoensso.encore.update_in;

taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});

taoensso.encore.spaced_str_with_nils = (function taoensso$encore$spaced_str_with_nils(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,xs));
});

taoensso.encore.spaced_str = (function taoensso$encore$spaced_str(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.undefined__GT_nil,xs));
});

taoensso.encore.round = (function taoensso$encore$round(var_args){
var args__37884__auto__ = [];
var len__37877__auto___48100 = arguments.length;
var i__37878__auto___48101 = (0);
while(true){
if((i__37878__auto___48101 < len__37877__auto___48100)){
args__37884__auto__.push((arguments[i__37878__auto___48101]));

var G__48102 = (i__37878__auto___48101 + (1));
i__37878__auto___48101 = G__48102;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__47979){
var vec__47980 = p__47979;
var type = cljs.core.nth.call(null,vec__47980,(0),null);
var nplaces = cljs.core.nth.call(null,vec__47980,(1),null);
return taoensso.encore.round_STAR_.call(null,(function (){var or__36802__auto__ = type;
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})(),nplaces,n);
});

taoensso.encore.round.cljs$lang$maxFixedArity = (1);

taoensso.encore.round.cljs$lang$applyTo = (function (seq47977){
var G__47978 = cljs.core.first.call(null,seq47977);
var seq47977__$1 = cljs.core.next.call(null,seq47977);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic(G__47978,seq47977__$1);
});


taoensso.encore.approx_EQ_ = (function taoensso$encore$approx_EQ_(var_args){
var args47983 = [];
var len__37877__auto___48103 = arguments.length;
var i__37878__auto___48104 = (0);
while(true){
if((i__37878__auto___48104 < len__37877__auto___48103)){
args47983.push((arguments[i__37878__auto___48104]));

var G__48105 = (i__37878__auto___48104 + (1));
i__37878__auto___48104 = G__48105;
continue;
} else {
}
break;
}

var G__47985 = args47983.length;
switch (G__47985) {
case 2:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47983.length)].join('')));

}
});

taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return taoensso.encore.approx_EQ__EQ_.call(null,x,y);
});

taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,signf){
return taoensso.encore.approx_EQ__EQ_.call(null,signf,x,y);
});

taoensso.encore.approx_EQ_.cljs$lang$maxFixedArity = 3;


taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__37884__auto__ = [];
var len__37877__auto___48107 = arguments.length;
var i__37878__auto___48108 = (0);
while(true){
if((i__37878__auto___48108 < len__37877__auto___48107)){
args__37884__auto__.push((arguments[i__37878__auto___48108]));

var G__48109 = (i__37878__auto___48108 + (1));
i__37878__auto___48108 = G__48109;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (sep,coll){
return taoensso.encore.str_join_once.call(null,sep,coll);
});

taoensso.encore.join_once.cljs$lang$maxFixedArity = (1);

taoensso.encore.join_once.cljs$lang$applyTo = (function (seq47986){
var G__47987 = cljs.core.first.call(null,seq47986);
var seq47986__$1 = cljs.core.next.call(null,seq47986);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic(G__47987,seq47986__$1);
});


taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_.call(null,ks,m);
});

taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_.call(null,ks,m);
});

taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_.call(null,ks,m);
});

taoensso.encore.keys_EQ_nnil_QMARK_ = (function taoensso$encore$keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_.call(null,ks,m);
});

/**
 * Deprecated, prefer `limiter`
 */
taoensso.encore.rate_limiter_STAR_ = (function taoensso$encore$rate_limiter_STAR_(specs){
var ids_QMARK_ = taoensso.encore.rsome.call(null,(function (p__47995){
var vec__47996 = p__47995;
var _ = cljs.core.nth.call(null,vec__47996,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__47996,(1),null);
var id = cljs.core.nth.call(null,vec__47996,(2),null);
return id;
}),specs);
var lfn = taoensso.encore.limiter.call(null,specs);
return ((function (ids_QMARK_,lfn){
return (function() { 
var G__48110__delegate = function (args){
var b2__31771__auto__ = cljs.core.apply.call(null,lfn,args);
if(cljs.core.truth_(b2__31771__auto__)){
var vec__47999 = b2__31771__auto__;
var worst_sid = cljs.core.nth.call(null,vec__47999,(0),null);
var backoff_ms = cljs.core.nth.call(null,vec__47999,(1),null);
if(cljs.core.truth_(ids_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [backoff_ms,worst_sid], null);
} else {
return backoff_ms;
}
} else {
return null;
}
};
var G__48110 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48111__i = 0, G__48111__a = new Array(arguments.length -  0);
while (G__48111__i < G__48111__a.length) {G__48111__a[G__48111__i] = arguments[G__48111__i + 0]; ++G__48111__i;}
  args = new cljs.core.IndexedSeq(G__48111__a,0);
} 
return G__48110__delegate.call(this,args);};
G__48110.cljs$lang$maxFixedArity = 0;
G__48110.cljs$lang$applyTo = (function (arglist__48112){
var args = cljs.core.seq(arglist__48112);
return G__48110__delegate(args);
});
G__48110.cljs$core$IFn$_invoke$arity$variadic = G__48110__delegate;
return G__48110;
})()
;
;})(ids_QMARK_,lfn))
});

taoensso.encore.rate_limit = (function taoensso$encore$rate_limit(specs,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,specs);
return ((function (rl){
return (function() { 
var G__48113__delegate = function (args){
var b2__31771__auto__ = rl.call(null);
if(cljs.core.truth_(b2__31771__auto__)){
var backoff = b2__31771__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,backoff], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null),null], null);
}
};
var G__48113 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48114__i = 0, G__48114__a = new Array(arguments.length -  0);
while (G__48114__i < G__48114__a.length) {G__48114__a[G__48114__i] = arguments[G__48114__i + 0]; ++G__48114__i;}
  args = new cljs.core.IndexedSeq(G__48114__a,0);
} 
return G__48113__delegate.call(this,args);};
G__48113.cljs$lang$maxFixedArity = 0;
G__48113.cljs$lang$applyTo = (function (arglist__48115){
var args = cljs.core.seq(arglist__48115);
return G__48113__delegate(args);
});
G__48113.cljs$core$IFn$_invoke$arity$variadic = G__48113__delegate;
return G__48113;
})()
;
;})(rl))
});

taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(ncalls_limit,window_ms){
return taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
});

taoensso.encore.rate_limited = (function taoensso$encore$rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
return ((function (rl){
return (function() { 
var G__48116__delegate = function (args){
var b2__31771__auto__ = rl.call(null);
if(cljs.core.truth_(b2__31771__auto__)){
var backoff_ms = b2__31771__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backoff-ms","backoff-ms",1679281507),backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),f.call(null)], null);
}
};
var G__48116 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48117__i = 0, G__48117__a = new Array(arguments.length -  0);
while (G__48117__i < G__48117__a.length) {G__48117__a[G__48117__i] = arguments[G__48117__i + 0]; ++G__48117__i;}
  args = new cljs.core.IndexedSeq(G__48117__a,0);
} 
return G__48116__delegate.call(this,args);};
G__48116.cljs$lang$maxFixedArity = 0;
G__48116.cljs$lang$applyTo = (function (arglist__48118){
var args = cljs.core.seq(arglist__48118);
return G__48116__delegate(args);
});
G__48116.cljs$core$IFn$_invoke$arity$variadic = G__48116__delegate;
return G__48116;
})()
;
;})(rl))
});

taoensso.encore.logging_level = cljs.core.atom.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596));

taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__37884__auto__ = [];
var len__37877__auto___48119 = arguments.length;
var i__37878__auto___48120 = (0);
while(true){
if((i__37878__auto___48120 < len__37877__auto___48119)){
args__37884__auto__.push((arguments[i__37878__auto___48120]));

var G__48121 = (i__37878__auto___48120 + (1));
i__37878__auto___48120 = G__48121;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__48004){
var vec__48005 = p__48004;
var nattempt = cljs.core.nth.call(null,vec__48005,(0),null);
var b2__31771__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(b2__31771__auto__)){
var js_win = b2__31771__auto__;
return js_win.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__36802__auto__ = nattempt;
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return (0);
}
})()));
} else {
return null;
}
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq48002){
var G__48003 = cljs.core.first.call(null,seq48002);
var seq48002__$1 = cljs.core.next.call(null,seq48002);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48003,seq48002__$1);
});


if(typeof taoensso.encore._STAR_log_level_STAR_ !== 'undefined'){
} else {
/**
 * DEPRECATED
 */
taoensso.encore._STAR_log_level_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596);
}

taoensso.encore.log_QMARK_ = (function (){var __GT_n = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"trace","trace",-1082747415),(1),new cljs.core.Keyword(null,"debug","debug",-1608172596),(2),new cljs.core.Keyword(null,"info","info",-317069002),(3),new cljs.core.Keyword(null,"warn","warn",-436710552),(4),new cljs.core.Keyword(null,"error","error",-978969032),(5),new cljs.core.Keyword(null,"fatal","fatal",1874419888),(6),new cljs.core.Keyword(null,"report","report",1394055010),(7)], null);
return ((function (__GT_n){
return (function (level){
return (__GT_n.call(null,level) >= __GT_n.call(null,taoensso.encore._STAR_log_level_STAR_));
});
;})(__GT_n))
})();

taoensso.encore.tracef = (function taoensso$encore$tracef(var_args){
var args__37884__auto__ = [];
var len__37877__auto___48122 = arguments.length;
var i__37878__auto___48123 = (0);
while(true){
if((i__37878__auto___48123 < len__37877__auto___48122)){
args__37884__auto__.push((arguments[i__37878__auto___48123]));

var G__48124 = (i__37878__auto___48123 + (1));
i__37878__auto___48123 = G__48124;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.tracef.cljs$lang$maxFixedArity = (1);

taoensso.encore.tracef.cljs$lang$applyTo = (function (seq48008){
var G__48009 = cljs.core.first.call(null,seq48008);
var seq48008__$1 = cljs.core.next.call(null,seq48008);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic(G__48009,seq48008__$1);
});


taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
var args__37884__auto__ = [];
var len__37877__auto___48125 = arguments.length;
var i__37878__auto___48126 = (0);
while(true){
if((i__37878__auto___48126 < len__37877__auto___48125)){
args__37884__auto__.push((arguments[i__37878__auto___48126]));

var G__48127 = (i__37878__auto___48126 + (1));
i__37878__auto___48126 = G__48127;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.debugf.cljs$lang$maxFixedArity = (1);

taoensso.encore.debugf.cljs$lang$applyTo = (function (seq48010){
var G__48011 = cljs.core.first.call(null,seq48010);
var seq48010__$1 = cljs.core.next.call(null,seq48010);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic(G__48011,seq48010__$1);
});


taoensso.encore.infof = (function taoensso$encore$infof(var_args){
var args__37884__auto__ = [];
var len__37877__auto___48128 = arguments.length;
var i__37878__auto___48129 = (0);
while(true){
if((i__37878__auto___48129 < len__37877__auto___48128)){
args__37884__auto__.push((arguments[i__37878__auto___48129]));

var G__48130 = (i__37878__auto___48129 + (1));
i__37878__auto___48129 = G__48130;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"info","info",-317069002)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.infof.cljs$lang$maxFixedArity = (1);

taoensso.encore.infof.cljs$lang$applyTo = (function (seq48012){
var G__48013 = cljs.core.first.call(null,seq48012);
var seq48012__$1 = cljs.core.next.call(null,seq48012);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic(G__48013,seq48012__$1);
});


taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
var args__37884__auto__ = [];
var len__37877__auto___48131 = arguments.length;
var i__37878__auto___48132 = (0);
while(true){
if((i__37878__auto___48132 < len__37877__auto___48131)){
args__37884__auto__.push((arguments[i__37878__auto___48132]));

var G__48133 = (i__37878__auto___48132 + (1));
i__37878__auto___48132 = G__48133;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("WARN: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.warnf.cljs$lang$maxFixedArity = (1);

taoensso.encore.warnf.cljs$lang$applyTo = (function (seq48014){
var G__48015 = cljs.core.first.call(null,seq48014);
var seq48014__$1 = cljs.core.next.call(null,seq48014);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic(G__48015,seq48014__$1);
});


taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
var args__37884__auto__ = [];
var len__37877__auto___48134 = arguments.length;
var i__37878__auto___48135 = (0);
while(true){
if((i__37878__auto___48135 < len__37877__auto___48134)){
args__37884__auto__.push((arguments[i__37878__auto___48135]));

var G__48136 = (i__37878__auto___48135 + (1));
i__37878__auto___48135 = G__48136;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"error","error",-978969032)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("ERROR: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.errorf.cljs$lang$maxFixedArity = (1);

taoensso.encore.errorf.cljs$lang$applyTo = (function (seq48016){
var G__48017 = cljs.core.first.call(null,seq48016);
var seq48016__$1 = cljs.core.next.call(null,seq48016);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic(G__48017,seq48016__$1);
});


taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
var args__37884__auto__ = [];
var len__37877__auto___48137 = arguments.length;
var i__37878__auto___48138 = (0);
while(true){
if((i__37878__auto___48138 < len__37877__auto___48137)){
args__37884__auto__.push((arguments[i__37878__auto___48138]));

var G__48139 = (i__37878__auto___48138 + (1));
i__37878__auto___48138 = G__48139;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"fatal","fatal",1874419888)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("FATAL: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1);

taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq48018){
var G__48019 = cljs.core.first.call(null,seq48018);
var seq48018__$1 = cljs.core.next.call(null,seq48018);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic(G__48019,seq48018__$1);
});


taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
var args__37884__auto__ = [];
var len__37877__auto___48140 = arguments.length;
var i__37878__auto___48141 = (0);
while(true){
if((i__37878__auto___48141 < len__37877__auto___48140)){
args__37884__auto__.push((arguments[i__37878__auto___48141]));

var G__48142 = (i__37878__auto___48141 + (1));
i__37878__auto___48141 = G__48142;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"report","report",1394055010)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.reportf.cljs$lang$maxFixedArity = (1);

taoensso.encore.reportf.cljs$lang$applyTo = (function (seq48020){
var G__48021 = cljs.core.first.call(null,seq48020);
var seq48020__$1 = cljs.core.next.call(null,seq48020);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic(G__48021,seq48020__$1);
});


taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__37884__auto__ = [];
var len__37877__auto___48143 = arguments.length;
var i__37878__auto___48144 = (0);
while(true){
if((i__37878__auto___48144 < len__37877__auto___48143)){
args__37884__auto__.push((arguments[i__37878__auto___48144]));

var G__48145 = (i__37878__auto___48144 + (1));
i__37878__auto___48144 = G__48145;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__48024){
var vec__48025 = p__48024;
var _QMARK_comparator = cljs.core.nth.call(null,vec__48025,(0),null);
var comparator = (function (){var or__36802__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__48025,_QMARK_comparator){
return (function (p1__47968_SHARP_,p2__47969_SHARP_){
if((comparator.call(null,p1__47968_SHARP_,p2__47969_SHARP_) > (0))){
return p2__47969_SHARP_;
} else {
return p1__47968_SHARP_;
}
});})(comparator,vec__48025,_QMARK_comparator))
,coll);
});

taoensso.encore.greatest.cljs$lang$maxFixedArity = (1);

taoensso.encore.greatest.cljs$lang$applyTo = (function (seq48022){
var G__48023 = cljs.core.first.call(null,seq48022);
var seq48022__$1 = cljs.core.next.call(null,seq48022);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic(G__48023,seq48022__$1);
});


taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__37884__auto__ = [];
var len__37877__auto___48146 = arguments.length;
var i__37878__auto___48147 = (0);
while(true){
if((i__37878__auto___48147 < len__37877__auto___48146)){
args__37884__auto__.push((arguments[i__37878__auto___48147]));

var G__48148 = (i__37878__auto___48147 + (1));
i__37878__auto___48147 = G__48148;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__48030){
var vec__48031 = p__48030;
var _QMARK_comparator = cljs.core.nth.call(null,vec__48031,(0),null);
var comparator = (function (){var or__36802__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__48031,_QMARK_comparator){
return (function (p1__47970_SHARP_,p2__47971_SHARP_){
if((comparator.call(null,p1__47970_SHARP_,p2__47971_SHARP_) < (0))){
return p2__47971_SHARP_;
} else {
return p1__47970_SHARP_;
}
});})(comparator,vec__48031,_QMARK_comparator))
,coll);
});

taoensso.encore.least.cljs$lang$maxFixedArity = (1);

taoensso.encore.least.cljs$lang$applyTo = (function (seq48028){
var G__48029 = cljs.core.first.call(null,seq48028);
var seq48028__$1 = cljs.core.next.call(null,seq48028);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic(G__48029,seq48028__$1);
});


/**
 * Ref. http://goo.gl/0GzRuz
 */
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__36802__auto__ = x;
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__48046,seen__$1){
while(true){
var vec__48047 = p__48046;
var v = cljs.core.nth.call(null,vec__48047,(0),null);
var xs__$1 = vec__48047;
var b2__31771__auto__ = cljs.core.seq.call(null,xs__$1);
if(b2__31771__auto__){
var s = b2__31771__auto__;
var v_STAR_ = keyfn.call(null,v);
if(cljs.core.contains_QMARK_.call(null,seen__$1,v_STAR_)){
var G__48149 = cljs.core.rest.call(null,s);
var G__48150 = seen__$1;
p__48046 = G__48149;
seen__$1 = G__48150;
continue;
} else {
return cljs.core.cons.call(null,v,taoensso$encore$distinct_by_$_step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinctv = (function taoensso$encore$distinctv(var_args){
var args48050 = [];
var len__37877__auto___48151 = arguments.length;
var i__37878__auto___48152 = (0);
while(true){
if((i__37878__auto___48152 < len__37877__auto___48151)){
args48050.push((arguments[i__37878__auto___48152]));

var G__48153 = (i__37878__auto___48152 + (1));
i__37878__auto___48152 = G__48153;
continue;
} else {
}
break;
}

var G__48052 = args48050.length;
switch (G__48052) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48050.length)].join('')));

}
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.distinctv.call(null,cljs.core.identity,coll);
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
var tr = cljs.core.reduce.call(null,(function (p__48053,in$){
var vec__48054 = p__48053;
var v = cljs.core.nth.call(null,vec__48054,(0),null);
var seen = cljs.core.nth.call(null,vec__48054,(1),null);
var in_STAR_ = keyfn.call(null,in$);
if(cljs.core.contains_QMARK_.call(null,seen,in_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in_STAR_)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll);
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,tr,(0)));
});

taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2;


/**
 * Deprecated, prefer `reduce-kv`
 */
taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){
if(cljs.core.truth_(m)){
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf);
var kf__$1 = (((kf == null))?((function (vf__$1){
return (function (k,_){
return k;
});})(vf__$1))
:(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?((function (vf__$1){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vf__$1))
:kf));
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (vf__$1,kf__$1){
return (function (m__$1,k,v){
return cljs.core.assoc_BANG_.call(null,m__$1,kf__$1.call(null,k,v),vf__$1.call(null,k,v));
});})(vf__$1,kf__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `reduce-kvs`
 */
taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__37884__auto__ = [];
var len__37877__auto___48155 = arguments.length;
var i__37878__auto___48156 = (0);
while(true){
if((i__37878__auto___48156 < len__37877__auto___48155)){
args__37884__auto__.push((arguments[i__37878__auto___48156]));

var G__48157 = (i__37878__auto___48156 + (1));
i__37878__auto___48156 = G__48157;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__48059){
var vec__48060 = p__48059;
var kf = cljs.core.nth.call(null,vec__48060,(0),null);
var vf = cljs.core.nth.call(null,vec__48060,(1),null);
if(cljs.core.empty_QMARK_.call(null,kvs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?((function (vec__48060,kf,vf){
return (function (_,v){
return v;
});})(vec__48060,kf,vf))
:vf);
var kf__$1 = (((kf == null))?((function (vf__$1,vec__48060,kf,vf){
return (function (k,_){
return k;
});})(vf__$1,vec__48060,kf,vf))
:(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?((function (vf__$1,vec__48060,kf,vf){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vf__$1,vec__48060,kf,vf))
:kf));
return cljs.core.persistent_BANG_.call(null,taoensso.encore.reduce_kvs.call(null,((function (vf__$1,kf__$1,vec__48060,kf,vf){
return (function (m,k,v){
return cljs.core.assoc_BANG_.call(null,m,kf__$1.call(null,k,v),vf__$1.call(null,k,v));
});})(vf__$1,kf__$1,vec__48060,kf,vf))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),kvs));
}
});

taoensso.encore.as_map.cljs$lang$maxFixedArity = (1);

taoensso.encore.as_map.cljs$lang$applyTo = (function (seq48057){
var G__48058 = cljs.core.first.call(null,seq48057);
var seq48057__$1 = cljs.core.next.call(null,seq48057);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic(G__48058,seq48057__$1);
});


taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
return taoensso.encore.map_keys.call(null,cljs.core.keyword,m);
});

taoensso.encore.removev = (function taoensso$encore$removev(pred,coll){
return cljs.core.filterv.call(null,cljs.core.complement.call(null,pred),coll);
});

taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),n));
});

taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__37884__auto__ = [];
var len__37877__auto___48158 = arguments.length;
var i__37878__auto___48159 = (0);
while(true){
if((i__37878__auto___48159 < len__37877__auto___48158)){
args__37884__auto__.push((arguments[i__37878__auto___48159]));

var G__48160 = (i__37878__auto___48159 + (1));
i__37878__auto___48159 = G__48160;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((2) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((2)),(0),null)):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37885__auto__);
});

taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.truth_(cache)){
return cljs.core.deref.call(null,taoensso.encore._swap_val_BANG_.call(null,cache,args,(function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,f,args);
}),null));
}
})));
} else {
return cljs.core.apply.call(null,f,args);
}
});

taoensso.encore.memoized.cljs$lang$maxFixedArity = (2);

taoensso.encore.memoized.cljs$lang$applyTo = (function (seq48063){
var G__48064 = cljs.core.first.call(null,seq48063);
var seq48063__$1 = cljs.core.next.call(null,seq48063);
var G__48065 = cljs.core.first.call(null,seq48063__$1);
var seq48063__$2 = cljs.core.next.call(null,seq48063__$1);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic(G__48064,G__48065,seq48063__$2);
});


taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__37140__auto__ = signed_idx;
var y__37141__auto__ = max_idx;
return ((x__37140__auto__ < y__37141__auto__) ? x__37140__auto__ : y__37141__auto__);
} else {
var x__37133__auto__ = (0);
var y__37134__auto__ = (signed_idx + max_idx);
return ((x__37133__auto__ > y__37134__auto__) ? x__37133__auto__ : y__37134__auto__);
}
});


taoensso.encore.sub_indexes = (function taoensso$encore$sub_indexes(var_args){
var args__37884__auto__ = [];
var len__37877__auto___48161 = arguments.length;
var i__37878__auto___48162 = (0);
while(true){
if((i__37878__auto___48162 < len__37877__auto___48161)){
args__37884__auto__.push((arguments[i__37878__auto___48162]));

var G__48163 = (i__37878__auto___48162 + (1));
i__37878__auto___48162 = G__48163;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((2) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((2)),(0),null)):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37885__auto__);
});

taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__48069){
var map__48070 = p__48069;
var map__48070__$1 = ((((!((map__48070 == null)))?((((map__48070.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48070.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48070):map__48070);
var max_len = cljs.core.get.call(null,map__48070__$1,new cljs.core.Keyword(null,"max-len","max-len",-18846016));
var end_idx = cljs.core.get.call(null,map__48070__$1,new cljs.core.Keyword(null,"end-idx","end-idx",-85750788));
var start_idx__$1 = start_idx;
var xlen = cljs.core.count.call(null,x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx.call(null,start_idx__$1,xlen);
var end_idx_STAR_ = cljs.core.long$.call(null,(cljs.core.truth_(max_len)?(function (){var n1__32161__auto__ = (start_idx_STAR_ + max_len);
var n2__32162__auto__ = xlen;
if((n1__32161__auto__ > n2__32162__auto__)){
return n2__32162__auto__;
} else {
return n1__32161__auto__;
}
})():(cljs.core.truth_(end_idx)?(taoensso.encore.translate_signed_idx.call(null,end_idx,xlen) + (1)):xlen)));
if((start_idx_STAR_ > end_idx_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_idx_STAR_,end_idx_STAR_], null);
}
});

taoensso.encore.sub_indexes.cljs$lang$maxFixedArity = (2);

taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq48066){
var G__48067 = cljs.core.first.call(null,seq48066);
var seq48066__$1 = cljs.core.next.call(null,seq48066);
var G__48068 = cljs.core.first.call(null,seq48066__$1);
var seq48066__$2 = cljs.core.next.call(null,seq48066__$1);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(G__48067,G__48068,seq48066__$2);
});


/**
 * Deprecated, prefer `get-substr` or `get-substring`
 */
taoensso.encore.substr = (function taoensso$encore$substr(var_args){
var args__37884__auto__ = [];
var len__37877__auto___48164 = arguments.length;
var i__37878__auto___48165 = (0);
while(true){
if((i__37878__auto___48165 < len__37877__auto___48164)){
args__37884__auto__.push((arguments[i__37878__auto___48165]));

var G__48166 = (i__37878__auto___48165 + (1));
i__37878__auto___48165 = G__48166;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((2) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((2)),(0),null)):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37885__auto__);
});

taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__48075){
var vec__48076 = p__48075;
var _QMARK_max_len = cljs.core.nth.call(null,vec__48076,(0),null);
var vec__48079 = taoensso.encore.sub_indexes.call(null,s,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__48079,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__48079,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.substr.cljs$lang$maxFixedArity = (2);

taoensso.encore.substr.cljs$lang$applyTo = (function (seq48072){
var G__48073 = cljs.core.first.call(null,seq48072);
var seq48072__$1 = cljs.core.next.call(null,seq48072);
var G__48074 = cljs.core.first.call(null,seq48072__$1);
var seq48072__$2 = cljs.core.next.call(null,seq48072__$1);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic(G__48073,G__48074,seq48072__$2);
});



/**
 * Deprecated, prefer `get-subvec` or `get-subvector`
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
var args__37884__auto__ = [];
var len__37877__auto___48167 = arguments.length;
var i__37878__auto___48168 = (0);
while(true){
if((i__37878__auto___48168 < len__37877__auto___48167)){
args__37884__auto__.push((arguments[i__37878__auto___48168]));

var G__48169 = (i__37878__auto___48168 + (1));
i__37878__auto___48168 = G__48169;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((2) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((2)),(0),null)):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37885__auto__);
});

taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__48085){
var vec__48086 = p__48085;
var _QMARK_max_len = cljs.core.nth.call(null,vec__48086,(0),null);
var vec__48089 = taoensso.encore.sub_indexes.call(null,v,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__48089,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__48089,(1),null);
return cljs.core.subvec.call(null,v,start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2);

taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq48082){
var G__48083 = cljs.core.first.call(null,seq48082);
var seq48082__$1 = cljs.core.next.call(null,seq48082);
var G__48084 = cljs.core.first.call(null,seq48082__$1);
var seq48082__$2 = cljs.core.next.call(null,seq48082__$1);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__48083,G__48084,seq48082__$2);
});


taoensso.encore.sentinel = {};

taoensso.encore.sentinel_QMARK_ = (function taoensso$encore$sentinel_QMARK_(x){
return (x === taoensso.encore.sentinel);
});

taoensso.encore.nil__GT_sentinel = (function taoensso$encore$nil__GT_sentinel(x){
if((x == null)){
return taoensso.encore.sentinel;
} else {
return x;
}
});

taoensso.encore.sentinel__GT_nil = (function taoensso$encore$sentinel__GT_nil(x){
if(cljs.core.truth_(taoensso.encore.sentinel_QMARK_.call(null,x))){
return null;
} else {
return x;
}
});

taoensso.encore.singleton_QMARK_ = (function taoensso$encore$singleton_QMARK_(coll){
if(cljs.core.counted_QMARK_.call(null,coll)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),(1));
} else {
return cljs.core.not.call(null,cljs.core.next.call(null,coll));
}
});

taoensso.encore.__GT__QMARK_singleton = (function taoensso$encore$__GT__QMARK_singleton(coll){
if(cljs.core.truth_(taoensso.encore.singleton_QMARK_.call(null,coll))){
var vec__48097 = coll;
var c1 = cljs.core.nth.call(null,vec__48097,(0),null);
return c1;
} else {
return null;
}
});

taoensso.encore.__GT_vec = (function taoensso$encore$__GT_vec(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
if(cljs.core.sequential_QMARK_.call(null,x)){
return cljs.core.vec.call(null,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
}
});

taoensso.encore.fzipmap = (function taoensso$encore$fzipmap(ks,vs){
var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq.call(null,ks);
var vs__$1 = cljs.core.seq.call(null,vs);
while(true){
if((ks__$1) && (vs__$1)){
var G__48170 = cljs.core.assoc_BANG_.call(null,m,cljs.core.first.call(null,ks__$1),cljs.core.first.call(null,vs__$1));
var G__48171 = cljs.core.next.call(null,ks__$1);
var G__48172 = cljs.core.next.call(null,vs__$1);
m = G__48170;
ks__$1 = G__48171;
vs__$1 = G__48172;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,m);
}
break;
}
});

taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});

taoensso.encore.remove_kvs = (function taoensso$encore$remove_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});

taoensso.encore.replace_in = (function taoensso$encore$replace_in(var_args){
var args__37884__auto__ = [];
var len__37877__auto___48173 = arguments.length;
var i__37878__auto___48174 = (0);
while(true){
if((i__37878__auto___48174 < len__37877__auto___48173)){
args__37884__auto__.push((arguments[i__37878__auto___48174]));

var G__48175 = (i__37878__auto___48174 + (1));
i__37878__auto___48174 = G__48175;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return cljs.core.reduce.call(null,(function (m__$1,_QMARK_op){
if(cljs.core.truth_(_QMARK_op)){
var vec__47974 = _QMARK_op;
var type = cljs.core.nth.call(null,vec__47974,(0),null);
var ks = cljs.core.nth.call(null,vec__47974,(1),null);
var valf = cljs.core.nth.call(null,vec__47974,(2),null);
var f = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"reset","reset",-800929946)))?((function (vec__47974,type,ks,valf){
return (function (_){
return valf;
});})(vec__47974,type,ks,valf))
:valf);
return taoensso.encore.update_in.call(null,m__$1,ks,null,f);
} else {
return m__$1;
}
}),m,ops);
});

taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1);

taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq47972){
var G__47973 = cljs.core.first.call(null,seq47972);
var seq47972__$1 = cljs.core.next.call(null,seq47972);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__47973,seq47972__$1);
});


//# sourceMappingURL=encore.js.map