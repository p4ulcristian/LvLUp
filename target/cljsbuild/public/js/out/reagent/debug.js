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
var G__38863__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__38863 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38864__i = 0, G__38864__a = new Array(arguments.length -  0);
while (G__38864__i < G__38864__a.length) {G__38864__a[G__38864__i] = arguments[G__38864__i + 0]; ++G__38864__i;}
  args = new cljs.core.IndexedSeq(G__38864__a,0);
} 
return G__38863__delegate.call(this,args);};
G__38863.cljs$lang$maxFixedArity = 0;
G__38863.cljs$lang$applyTo = (function (arglist__38865){
var args = cljs.core.seq(arglist__38865);
return G__38863__delegate(args);
});
G__38863.cljs$core$IFn$_invoke$arity$variadic = G__38863__delegate;
return G__38863;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__38866__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__38866 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38867__i = 0, G__38867__a = new Array(arguments.length -  0);
while (G__38867__i < G__38867__a.length) {G__38867__a[G__38867__i] = arguments[G__38867__i + 0]; ++G__38867__i;}
  args = new cljs.core.IndexedSeq(G__38867__a,0);
} 
return G__38866__delegate.call(this,args);};
G__38866.cljs$lang$maxFixedArity = 0;
G__38866.cljs$lang$applyTo = (function (arglist__38868){
var args = cljs.core.seq(arglist__38868);
return G__38866__delegate(args);
});
G__38866.cljs$core$IFn$_invoke$arity$variadic = G__38866__delegate;
return G__38866;
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