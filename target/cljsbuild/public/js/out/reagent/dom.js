// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__36776__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__36776__auto__)){
return or__36776__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_38469 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_38469){
return (function (){
var _STAR_always_update_STAR_38470 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_38470;
}});})(_STAR_always_update_STAR_38469))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_38469;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args38471 = [];
var len__37851__auto___38474 = arguments.length;
var i__37852__auto___38475 = (0);
while(true){
if((i__37852__auto___38475 < len__37851__auto___38474)){
args38471.push((arguments[i__37852__auto___38475]));

var G__38476 = (i__37852__auto___38475 + (1));
i__37852__auto___38475 = G__38476;
continue;
} else {
}
break;
}

var G__38473 = args38471.length;
switch (G__38473) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38471.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__38482_38486 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__38483_38487 = null;
var count__38484_38488 = (0);
var i__38485_38489 = (0);
while(true){
if((i__38485_38489 < count__38484_38488)){
var v_38490 = cljs.core._nth.call(null,chunk__38483_38487,i__38485_38489);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_38490);

var G__38491 = seq__38482_38486;
var G__38492 = chunk__38483_38487;
var G__38493 = count__38484_38488;
var G__38494 = (i__38485_38489 + (1));
seq__38482_38486 = G__38491;
chunk__38483_38487 = G__38492;
count__38484_38488 = G__38493;
i__38485_38489 = G__38494;
continue;
} else {
var temp__4657__auto___38495 = cljs.core.seq.call(null,seq__38482_38486);
if(temp__4657__auto___38495){
var seq__38482_38496__$1 = temp__4657__auto___38495;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38482_38496__$1)){
var c__37587__auto___38497 = cljs.core.chunk_first.call(null,seq__38482_38496__$1);
var G__38498 = cljs.core.chunk_rest.call(null,seq__38482_38496__$1);
var G__38499 = c__37587__auto___38497;
var G__38500 = cljs.core.count.call(null,c__37587__auto___38497);
var G__38501 = (0);
seq__38482_38486 = G__38498;
chunk__38483_38487 = G__38499;
count__38484_38488 = G__38500;
i__38485_38489 = G__38501;
continue;
} else {
var v_38502 = cljs.core.first.call(null,seq__38482_38496__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_38502);

var G__38503 = cljs.core.next.call(null,seq__38482_38496__$1);
var G__38504 = null;
var G__38505 = (0);
var G__38506 = (0);
seq__38482_38486 = G__38503;
chunk__38483_38487 = G__38504;
count__38484_38488 = G__38505;
i__38485_38489 = G__38506;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map