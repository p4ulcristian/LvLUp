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
var G__38043__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__38043 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38044__i = 0, G__38044__a = new Array(arguments.length -  0);
while (G__38044__i < G__38044__a.length) {G__38044__a[G__38044__i] = arguments[G__38044__i + 0]; ++G__38044__i;}
  args = new cljs.core.IndexedSeq(G__38044__a,0);
} 
return G__38043__delegate.call(this,args);};
G__38043.cljs$lang$maxFixedArity = 0;
G__38043.cljs$lang$applyTo = (function (arglist__38045){
var args = cljs.core.seq(arglist__38045);
return G__38043__delegate(args);
});
G__38043.cljs$core$IFn$_invoke$arity$variadic = G__38043__delegate;
return G__38043;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__38046__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__38046 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38047__i = 0, G__38047__a = new Array(arguments.length -  0);
while (G__38047__i < G__38047__a.length) {G__38047__a[G__38047__i] = arguments[G__38047__i + 0]; ++G__38047__i;}
  args = new cljs.core.IndexedSeq(G__38047__a,0);
} 
return G__38046__delegate.call(this,args);};
G__38046.cljs$lang$maxFixedArity = 0;
G__38046.cljs$lang$applyTo = (function (arglist__38048){
var args = cljs.core.seq(arglist__38048);
return G__38046__delegate(args);
});
G__38046.cljs$core$IFn$_invoke$arity$variadic = G__38046__delegate;
return G__38046;
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