// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__38044__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__38044 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38045__i = 0, G__38045__a = new Array(arguments.length -  0);
while (G__38045__i < G__38045__a.length) {G__38045__a[G__38045__i] = arguments[G__38045__i + 0]; ++G__38045__i;}
  args = new cljs.core.IndexedSeq(G__38045__a,0);
} 
return G__38044__delegate.call(this,args);};
G__38044.cljs$lang$maxFixedArity = 0;
G__38044.cljs$lang$applyTo = (function (arglist__38046){
var args = cljs.core.seq(arglist__38046);
return G__38044__delegate(args);
});
G__38044.cljs$core$IFn$_invoke$arity$variadic = G__38044__delegate;
return G__38044;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__38047__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__38047 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38048__i = 0, G__38048__a = new Array(arguments.length -  0);
while (G__38048__i < G__38048__a.length) {G__38048__a[G__38048__i] = arguments[G__38048__i + 0]; ++G__38048__i;}
  args = new cljs.core.IndexedSeq(G__38048__a,0);
} 
return G__38047__delegate.call(this,args);};
G__38047.cljs$lang$maxFixedArity = 0;
G__38047.cljs$lang$applyTo = (function (arglist__38049){
var args = cljs.core.seq(arglist__38049);
return G__38047__delegate(args);
});
G__38047.cljs$core$IFn$_invoke$arity$variadic = G__38047__delegate;
return G__38047;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map