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
var G__38877__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__38877 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38878__i = 0, G__38878__a = new Array(arguments.length -  0);
while (G__38878__i < G__38878__a.length) {G__38878__a[G__38878__i] = arguments[G__38878__i + 0]; ++G__38878__i;}
  args = new cljs.core.IndexedSeq(G__38878__a,0);
} 
return G__38877__delegate.call(this,args);};
G__38877.cljs$lang$maxFixedArity = 0;
G__38877.cljs$lang$applyTo = (function (arglist__38879){
var args = cljs.core.seq(arglist__38879);
return G__38877__delegate(args);
});
G__38877.cljs$core$IFn$_invoke$arity$variadic = G__38877__delegate;
return G__38877;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__38880__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__38880 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38881__i = 0, G__38881__a = new Array(arguments.length -  0);
while (G__38881__i < G__38881__a.length) {G__38881__a[G__38881__i] = arguments[G__38881__i + 0]; ++G__38881__i;}
  args = new cljs.core.IndexedSeq(G__38881__a,0);
} 
return G__38880__delegate.call(this,args);};
G__38880.cljs$lang$maxFixedArity = 0;
G__38880.cljs$lang$applyTo = (function (arglist__38882){
var args = cljs.core.seq(arglist__38882);
return G__38880__delegate(args);
});
G__38880.cljs$core$IFn$_invoke$arity$variadic = G__38880__delegate;
return G__38880;
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