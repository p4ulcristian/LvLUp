// Compiled by ClojureScript 1.9.229 {}
goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
jayq.core.crate_meta = (function jayq$core$crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function jayq$core$__GT_selector(sel){
if(typeof sel === 'string'){
return sel;
} else {
if(cljs.core.fn_QMARK_.call(null,sel)){
var temp__4655__auto__ = jayq.core.crate_meta.call(null,sel);
if(cljs.core.truth_(temp__4655__auto__)){
var cm = temp__4655__auto__;
return [cljs.core.str("[crateGroup="),cljs.core.str(cm),cljs.core.str("]")].join('');
} else {
return sel;
}
} else {
if((sel instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,sel);
} else {
return sel;

}
}
}
});
jayq.core.$ = (function jayq$core$$(var_args){
var args44446 = [];
var len__37833__auto___44449 = arguments.length;
var i__37834__auto___44450 = (0);
while(true){
if((i__37834__auto___44450 < len__37833__auto___44449)){
args44446.push((arguments[i__37834__auto___44450]));

var G__44451 = (i__37834__auto___44450 + (1));
i__37834__auto___44450 = G__44451;
continue;
} else {
}
break;
}

var G__44448 = args44446.length;
switch (G__44448) {
case 1:
return jayq.core.$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44446.length)].join('')));

}
});

jayq.core.$.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return jQuery(jayq.core.__GT_selector.call(null,sel));
});

jayq.core.$.cljs$core$IFn$_invoke$arity$2 = (function (sel,context){
return jQuery(jayq.core.__GT_selector.call(null,sel),context);
});

jayq.core.$.cljs$lang$maxFixedArity = 2;

jQuery.prototype.cljs$core$ISeqable$ = true;

jQuery.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(this$__$1.get((0)))){
return this$__$1;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ISeq$ = true;

jQuery.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.get((0));
});

jQuery.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this$__$1 = this;
if((cljs.core.count.call(null,this$__$1) > (1))){
return this$__$1.slice((1));
} else {
return cljs.core.List.EMPTY;
}
});

jQuery.prototype.cljs$core$ICounted$ = true;

jQuery.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.length;
});

jQuery.prototype.cljs$core$IIndexed$ = true;

jQuery.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
return null;
}
});

jQuery.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
if((void 0 === not_found)){
return null;
} else {
return not_found;
}
}
});

jQuery.prototype.cljs$core$ISequential$ = true;

jQuery.prototype.cljs$core$ILookup$ = true;

jQuery.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var this$__$1 = this;
var or__36758__auto__ = this$__$1.slice(k,(k + (1)));
if(cljs.core.truth_(or__36758__auto__)){
return or__36758__auto__;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,k,not_found);
});

jQuery.prototype.cljs$core$IReduce$ = true;

jQuery.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f);
});

jQuery.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f,start);
});

jQuery.prototype.cljs$core$IFn$ = true;

jQuery.prototype.call = (function() {
var G__44454 = null;
var G__44454__2 = (function (self__,k){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__44454__3 = (function (self__,k,not_found){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__44454 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__44454__2.call(this,self__,k);
case 3:
return G__44454__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44454.cljs$core$IFn$_invoke$arity$2 = G__44454__2;
G__44454.cljs$core$IFn$_invoke$arity$3 = G__44454__3;
return G__44454;
})()
;

jQuery.prototype.apply = (function (self__,args44453){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args44453)));
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});
jayq.core.anim = (function jayq$core$anim(var_args){
var args__37840__auto__ = [];
var len__37833__auto___44462 = arguments.length;
var i__37834__auto___44463 = (0);
while(true){
if((i__37834__auto___44463 < len__37833__auto___44462)){
args__37840__auto__.push((arguments[i__37834__auto___44463]));

var G__44464 = (i__37834__auto___44463 + (1));
i__37834__auto___44463 = G__44464;
continue;
} else {
}
break;
}

var argseq__37841__auto__ = ((((2) < args__37840__auto__.length))?(new cljs.core.IndexedSeq(args__37840__auto__.slice((2)),(0),null)):null);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37841__auto__);
});

jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,props,p__44458){
var vec__44459 = p__44458;
var speed = cljs.core.nth.call(null,vec__44459,(0),null);
var on_finish = cljs.core.nth.call(null,vec__44459,(1),null);
return $elem.animate(cljs.core.clj__GT_js.call(null,props),speed,on_finish);
});

jayq.core.anim.cljs$lang$maxFixedArity = (2);

jayq.core.anim.cljs$lang$applyTo = (function (seq44455){
var G__44456 = cljs.core.first.call(null,seq44455);
var seq44455__$1 = cljs.core.next.call(null,seq44455);
var G__44457 = cljs.core.first.call(null,seq44455__$1);
var seq44455__$2 = cljs.core.next.call(null,seq44455__$1);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic(G__44456,G__44457,seq44455__$2);
});

jayq.core.text = (function jayq$core$text(var_args){
var args44465 = [];
var len__37833__auto___44468 = arguments.length;
var i__37834__auto___44469 = (0);
while(true){
if((i__37834__auto___44469 < len__37833__auto___44468)){
args44465.push((arguments[i__37834__auto___44469]));

var G__44470 = (i__37834__auto___44469 + (1));
i__37834__auto___44469 = G__44470;
continue;
} else {
}
break;
}

var G__44467 = args44465.length;
switch (G__44467) {
case 1:
return jayq.core.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44465.length)].join('')));

}
});

jayq.core.text.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.text();
});

jayq.core.text.cljs$core$IFn$_invoke$arity$2 = (function ($elem,txt){
return $elem.text(txt);
});

jayq.core.text.cljs$lang$maxFixedArity = 2;

jayq.core.css = (function jayq$core$css(var_args){
var args44472 = [];
var len__37833__auto___44475 = arguments.length;
var i__37834__auto___44476 = (0);
while(true){
if((i__37834__auto___44476 < len__37833__auto___44475)){
args44472.push((arguments[i__37834__auto___44476]));

var G__44477 = (i__37834__auto___44476 + (1));
i__37834__auto___44476 = G__44477;
continue;
} else {
}
break;
}

var G__44474 = args44472.length;
switch (G__44474) {
case 2:
return jayq.core.css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.css.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44472.length)].join('')));

}
});

jayq.core.css.cljs$core$IFn$_invoke$arity$2 = (function ($elem,opts){
return $elem.css(cljs.core.clj__GT_js.call(null,opts));
});

jayq.core.css.cljs$core$IFn$_invoke$arity$3 = (function ($elem,p,v){
return $elem.css(cljs.core.name.call(null,p),v);
});

jayq.core.css.cljs$lang$maxFixedArity = 3;

jayq.core.attr = (function jayq$core$attr(var_args){
var args44479 = [];
var len__37833__auto___44482 = arguments.length;
var i__37834__auto___44483 = (0);
while(true){
if((i__37834__auto___44483 < len__37833__auto___44482)){
args44479.push((arguments[i__37834__auto___44483]));

var G__44484 = (i__37834__auto___44483 + (1));
i__37834__auto___44483 = G__44484;
continue;
} else {
}
break;
}

var G__44481 = args44479.length;
switch (G__44481) {
case 3:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44479.length)].join('')));

}
});

jayq.core.attr.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.attr(cljs.core.name.call(null,n),v);
});

jayq.core.attr.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.attr(cljs.core.clj__GT_js.call(null,x));
});

jayq.core.attr.cljs$lang$maxFixedArity = 3;

jayq.core.prop = (function jayq$core$prop(var_args){
var args44486 = [];
var len__37833__auto___44489 = arguments.length;
var i__37834__auto___44490 = (0);
while(true){
if((i__37834__auto___44490 < len__37833__auto___44489)){
args44486.push((arguments[i__37834__auto___44490]));

var G__44491 = (i__37834__auto___44490 + (1));
i__37834__auto___44490 = G__44491;
continue;
} else {
}
break;
}

var G__44488 = args44486.length;
switch (G__44488) {
case 3:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44486.length)].join('')));

}
});

jayq.core.prop.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.prop(cljs.core.name.call(null,n),v);
});

jayq.core.prop.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.prop(cljs.core.clj__GT_js.call(null,x));
});

jayq.core.prop.cljs$lang$maxFixedArity = 3;

jayq.core.remove_attr = (function jayq$core$remove_attr($elem,a){
return $elem.removeAttr(cljs.core.name.call(null,a));
});
jayq.core.remove_prop = (function jayq$core$remove_prop($elem,a){
return $elem.removeProp(cljs.core.name.call(null,a));
});
jayq.core.data = (function jayq$core$data(var_args){
var args44493 = [];
var len__37833__auto___44496 = arguments.length;
var i__37834__auto___44497 = (0);
while(true){
if((i__37834__auto___44497 < len__37833__auto___44496)){
args44493.push((arguments[i__37834__auto___44497]));

var G__44498 = (i__37834__auto___44497 + (1));
i__37834__auto___44497 = G__44498;
continue;
} else {
}
break;
}

var G__44495 = args44493.length;
switch (G__44495) {
case 1:
return jayq.core.data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44493.length)].join('')));

}
});

jayq.core.data.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.data();
});

jayq.core.data.cljs$core$IFn$_invoke$arity$2 = (function ($elem,k){
return $elem.data(cljs.core.clj__GT_js.call(null,k));
});

jayq.core.data.cljs$core$IFn$_invoke$arity$3 = (function ($elem,k,v){
return $elem.data(cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));
});

jayq.core.data.cljs$lang$maxFixedArity = 3;

jayq.core.add_class = (function jayq$core$add_class($elem,cl){
return $elem.addClass(cljs.core.name.call(null,cl));
});
jayq.core.remove_class = (function jayq$core$remove_class(var_args){
var args44500 = [];
var len__37833__auto___44503 = arguments.length;
var i__37834__auto___44504 = (0);
while(true){
if((i__37834__auto___44504 < len__37833__auto___44503)){
args44500.push((arguments[i__37834__auto___44504]));

var G__44505 = (i__37834__auto___44504 + (1));
i__37834__auto___44504 = G__44505;
continue;
} else {
}
break;
}

var G__44502 = args44500.length;
switch (G__44502) {
case 1:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44500.length)].join('')));

}
});

jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.removeClass();
});

jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.removeClass(cljs.core.name.call(null,cl));
});

jayq.core.remove_class.cljs$lang$maxFixedArity = 2;

jayq.core.toggle_class = (function jayq$core$toggle_class(var_args){
var args44507 = [];
var len__37833__auto___44510 = arguments.length;
var i__37834__auto___44511 = (0);
while(true){
if((i__37834__auto___44511 < len__37833__auto___44510)){
args44507.push((arguments[i__37834__auto___44511]));

var G__44512 = (i__37834__auto___44511 + (1));
i__37834__auto___44511 = G__44512;
continue;
} else {
}
break;
}

var G__44509 = args44507.length;
switch (G__44509) {
case 2:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44507.length)].join('')));

}
});

jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.toggleClass(cljs.core.name.call(null,cl));
});

jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function ($elem,cl,switch$){
return $elem.toggleClass(cljs.core.name.call(null,cl),cljs.core.boolean$.call(null,switch$));
});

jayq.core.toggle_class.cljs$lang$maxFixedArity = 3;

jayq.core.has_class = (function jayq$core$has_class($elem,cl){
return $elem.hasClass(cljs.core.name.call(null,cl));
});
jayq.core.is = (function jayq$core$is($elem,selector){
return $elem.is(jayq.core.__GT_selector.call(null,selector));
});
jayq.core.after = (function jayq$core$after($elem,content){
return $elem.after(content);
});
jayq.core.before = (function jayq$core$before($elem,content){
return $elem.before(content);
});
jayq.core.append = (function jayq$core$append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function jayq$core$prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.append_to = (function jayq$core$append_to($elem,target){
return $elem.appendTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.prepend_to = (function jayq$core$prepend_to($elem,target){
return $elem.prependTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_before = (function jayq$core$insert_before($elem,target){
return $elem.insertBefore(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_after = (function jayq$core$insert_after($elem,target){
return $elem.insertAfter(jayq.core.__GT_selector.call(null,target));
});
jayq.core.replace_with = (function jayq$core$replace_with($elem,content){
return $elem.replaceWith(content);
});
jayq.core.remove = (function jayq$core$remove($elem){
return $elem.remove();
});
jayq.core.hide = (function jayq$core$hide(var_args){
var args__37840__auto__ = [];
var len__37833__auto___44520 = arguments.length;
var i__37834__auto___44521 = (0);
while(true){
if((i__37834__auto___44521 < len__37833__auto___44520)){
args__37840__auto__.push((arguments[i__37834__auto___44521]));

var G__44522 = (i__37834__auto___44521 + (1));
i__37834__auto___44521 = G__44522;
continue;
} else {
}
break;
}

var argseq__37841__auto__ = ((((1) < args__37840__auto__.length))?(new cljs.core.IndexedSeq(args__37840__auto__.slice((1)),(0),null)):null);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37841__auto__);
});

jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__44516){
var vec__44517 = p__44516;
var speed = cljs.core.nth.call(null,vec__44517,(0),null);
var on_finish = cljs.core.nth.call(null,vec__44517,(1),null);
return $elem.hide(speed,on_finish);
});

jayq.core.hide.cljs$lang$maxFixedArity = (1);

jayq.core.hide.cljs$lang$applyTo = (function (seq44514){
var G__44515 = cljs.core.first.call(null,seq44514);
var seq44514__$1 = cljs.core.next.call(null,seq44514);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic(G__44515,seq44514__$1);
});

jayq.core.show = (function jayq$core$show(var_args){
var args__37840__auto__ = [];
var len__37833__auto___44529 = arguments.length;
var i__37834__auto___44530 = (0);
while(true){
if((i__37834__auto___44530 < len__37833__auto___44529)){
args__37840__auto__.push((arguments[i__37834__auto___44530]));

var G__44531 = (i__37834__auto___44530 + (1));
i__37834__auto___44530 = G__44531;
continue;
} else {
}
break;
}

var argseq__37841__auto__ = ((((1) < args__37840__auto__.length))?(new cljs.core.IndexedSeq(args__37840__auto__.slice((1)),(0),null)):null);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37841__auto__);
});

jayq.core.show.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__44525){
var vec__44526 = p__44525;
var speed = cljs.core.nth.call(null,vec__44526,(0),null);
var on_finish = cljs.core.nth.call(null,vec__44526,(1),null);
return $elem.show(speed,on_finish);
});

jayq.core.show.cljs$lang$maxFixedArity = (1);

jayq.core.show.cljs$lang$applyTo = (function (seq44523){
var G__44524 = cljs.core.first.call(null,seq44523);
var seq44523__$1 = cljs.core.next.call(null,seq44523);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic(G__44524,seq44523__$1);
});

jayq.core.toggle = (function jayq$core$toggle(var_args){
var args__37840__auto__ = [];
var len__37833__auto___44538 = arguments.length;
var i__37834__auto___44539 = (0);
while(true){
if((i__37834__auto___44539 < len__37833__auto___44538)){
args__37840__auto__.push((arguments[i__37834__auto___44539]));

var G__44540 = (i__37834__auto___44539 + (1));
i__37834__auto___44539 = G__44540;
continue;
} else {
}
break;
}

var argseq__37841__auto__ = ((((1) < args__37840__auto__.length))?(new cljs.core.IndexedSeq(args__37840__auto__.slice((1)),(0),null)):null);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37841__auto__);
});

jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__44534){
var vec__44535 = p__44534;
var speed = cljs.core.nth.call(null,vec__44535,(0),null);
var on_finish = cljs.core.nth.call(null,vec__44535,(1),null);
return $elem.toggle(speed,on_finish);
});

jayq.core.toggle.cljs$lang$maxFixedArity = (1);

jayq.core.toggle.cljs$lang$applyTo = (function (seq44532){
var G__44533 = cljs.core.first.call(null,seq44532);
var seq44532__$1 = cljs.core.next.call(null,seq44532);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic(G__44533,seq44532__$1);
});

jayq.core.fade_out = (function jayq$core$fade_out(var_args){
var args__37840__auto__ = [];
var len__37833__auto___44547 = arguments.length;
var i__37834__auto___44548 = (0);
while(true){
if((i__37834__auto___44548 < len__37833__auto___44547)){
args__37840__auto__.push((arguments[i__37834__auto___44548]));

var G__44549 = (i__37834__auto___44548 + (1));
i__37834__auto___44548 = G__44549;
continue;
} else {
}
break;
}

var argseq__37841__auto__ = ((((1) < args__37840__auto__.length))?(new cljs.core.IndexedSeq(args__37840__auto__.slice((1)),(0),null)):null);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37841__auto__);
});

jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__44543){
var vec__44544 = p__44543;
var speed = cljs.core.nth.call(null,vec__44544,(0),null);
var on_finish = cljs.core.nth.call(null,vec__44544,(1),null);
return $elem.fadeOut(speed,on_finish);
});

jayq.core.fade_out.cljs$lang$maxFixedArity = (1);

jayq.core.fade_out.cljs$lang$applyTo = (function (seq44541){
var G__44542 = cljs.core.first.call(null,seq44541);
var seq44541__$1 = cljs.core.next.call(null,seq44541);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic(G__44542,seq44541__$1);
});

jayq.core.fade_in = (function jayq$core$fade_in(var_args){
var args__37840__auto__ = [];
var len__37833__auto___44556 = arguments.length;
var i__37834__auto___44557 = (0);
while(true){
if((i__37834__auto___44557 < len__37833__auto___44556)){
args__37840__auto__.push((arguments[i__37834__auto___44557]));

var G__44558 = (i__37834__auto___44557 + (1));
i__37834__auto___44557 = G__44558;
continue;
} else {
}
break;
}

var argseq__37841__auto__ = ((((1) < args__37840__auto__.length))?(new cljs.core.IndexedSeq(args__37840__auto__.slice((1)),(0),null)):null);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37841__auto__);
});

jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__44552){
var vec__44553 = p__44552;
var speed = cljs.core.nth.call(null,vec__44553,(0),null);
var on_finish = cljs.core.nth.call(null,vec__44553,(1),null);
return $elem.fadeIn(speed,on_finish);
});

jayq.core.fade_in.cljs$lang$maxFixedArity = (1);

jayq.core.fade_in.cljs$lang$applyTo = (function (seq44550){
var G__44551 = cljs.core.first.call(null,seq44550);
var seq44550__$1 = cljs.core.next.call(null,seq44550);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic(G__44551,seq44550__$1);
});

jayq.core.slide_up = (function jayq$core$slide_up(var_args){
var args__37840__auto__ = [];
var len__37833__auto___44565 = arguments.length;
var i__37834__auto___44566 = (0);
while(true){
if((i__37834__auto___44566 < len__37833__auto___44565)){
args__37840__auto__.push((arguments[i__37834__auto___44566]));

var G__44567 = (i__37834__auto___44566 + (1));
i__37834__auto___44566 = G__44567;
continue;
} else {
}
break;
}

var argseq__37841__auto__ = ((((1) < args__37840__auto__.length))?(new cljs.core.IndexedSeq(args__37840__auto__.slice((1)),(0),null)):null);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37841__auto__);
});

jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__44561){
var vec__44562 = p__44561;
var speed = cljs.core.nth.call(null,vec__44562,(0),null);
var on_finish = cljs.core.nth.call(null,vec__44562,(1),null);
return $elem.slideUp(speed,on_finish);
});

jayq.core.slide_up.cljs$lang$maxFixedArity = (1);

jayq.core.slide_up.cljs$lang$applyTo = (function (seq44559){
var G__44560 = cljs.core.first.call(null,seq44559);
var seq44559__$1 = cljs.core.next.call(null,seq44559);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic(G__44560,seq44559__$1);
});

jayq.core.slide_down = (function jayq$core$slide_down(var_args){
var args__37840__auto__ = [];
var len__37833__auto___44574 = arguments.length;
var i__37834__auto___44575 = (0);
while(true){
if((i__37834__auto___44575 < len__37833__auto___44574)){
args__37840__auto__.push((arguments[i__37834__auto___44575]));

var G__44576 = (i__37834__auto___44575 + (1));
i__37834__auto___44575 = G__44576;
continue;
} else {
}
break;
}

var argseq__37841__auto__ = ((((1) < args__37840__auto__.length))?(new cljs.core.IndexedSeq(args__37840__auto__.slice((1)),(0),null)):null);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37841__auto__);
});

jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__44570){
var vec__44571 = p__44570;
var speed = cljs.core.nth.call(null,vec__44571,(0),null);
var on_finish = cljs.core.nth.call(null,vec__44571,(1),null);
return $elem.slideDown(speed,on_finish);
});

jayq.core.slide_down.cljs$lang$maxFixedArity = (1);

jayq.core.slide_down.cljs$lang$applyTo = (function (seq44568){
var G__44569 = cljs.core.first.call(null,seq44568);
var seq44568__$1 = cljs.core.next.call(null,seq44568);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic(G__44569,seq44568__$1);
});

jayq.core.siblings = (function jayq$core$siblings(var_args){
var args44577 = [];
var len__37833__auto___44580 = arguments.length;
var i__37834__auto___44581 = (0);
while(true){
if((i__37834__auto___44581 < len__37833__auto___44580)){
args44577.push((arguments[i__37834__auto___44581]));

var G__44582 = (i__37834__auto___44581 + (1));
i__37834__auto___44581 = G__44582;
continue;
} else {
}
break;
}

var G__44579 = args44577.length;
switch (G__44579) {
case 1:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44577.length)].join('')));

}
});

jayq.core.siblings.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.siblings();
});

jayq.core.siblings.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.siblings(cljs.core.name.call(null,selector));
});

jayq.core.siblings.cljs$lang$maxFixedArity = 2;

jayq.core.parent = (function jayq$core$parent($elem){
return $elem.parent();
});
jayq.core.parents = (function jayq$core$parents(var_args){
var args44584 = [];
var len__37833__auto___44587 = arguments.length;
var i__37834__auto___44588 = (0);
while(true){
if((i__37834__auto___44588 < len__37833__auto___44587)){
args44584.push((arguments[i__37834__auto___44588]));

var G__44589 = (i__37834__auto___44588 + (1));
i__37834__auto___44588 = G__44589;
continue;
} else {
}
break;
}

var G__44586 = args44584.length;
switch (G__44586) {
case 1:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44584.length)].join('')));

}
});

jayq.core.parents.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parents();
});

jayq.core.parents.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parents(cljs.core.name.call(null,selector));
});

jayq.core.parents.cljs$lang$maxFixedArity = 2;

jayq.core.parents_until = (function jayq$core$parents_until(var_args){
var args44591 = [];
var len__37833__auto___44594 = arguments.length;
var i__37834__auto___44595 = (0);
while(true){
if((i__37834__auto___44595 < len__37833__auto___44594)){
args44591.push((arguments[i__37834__auto___44595]));

var G__44596 = (i__37834__auto___44595 + (1));
i__37834__auto___44595 = G__44596;
continue;
} else {
}
break;
}

var G__44593 = args44591.length;
switch (G__44593) {
case 1:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44591.length)].join('')));

}
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parentsUntil();
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.parents_until.cljs$lang$maxFixedArity = 3;

jayq.core.children = (function jayq$core$children(var_args){
var args44598 = [];
var len__37833__auto___44601 = arguments.length;
var i__37834__auto___44602 = (0);
while(true){
if((i__37834__auto___44602 < len__37833__auto___44601)){
args44598.push((arguments[i__37834__auto___44602]));

var G__44603 = (i__37834__auto___44602 + (1));
i__37834__auto___44602 = G__44603;
continue;
} else {
}
break;
}

var G__44600 = args44598.length;
switch (G__44600) {
case 2:
return jayq.core.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44598.length)].join('')));

}
});

jayq.core.children.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.children(cljs.core.name.call(null,selector));
});

jayq.core.children.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.children();
});

jayq.core.children.cljs$lang$maxFixedArity = 2;

jayq.core.next = (function jayq$core$next(var_args){
var args44605 = [];
var len__37833__auto___44608 = arguments.length;
var i__37834__auto___44609 = (0);
while(true){
if((i__37834__auto___44609 < len__37833__auto___44608)){
args44605.push((arguments[i__37834__auto___44609]));

var G__44610 = (i__37834__auto___44609 + (1));
i__37834__auto___44609 = G__44610;
continue;
} else {
}
break;
}

var G__44607 = args44605.length;
switch (G__44607) {
case 1:
return jayq.core.next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44605.length)].join('')));

}
});

jayq.core.next.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.next();
});

jayq.core.next.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.next(cljs.core.name.call(null,selector));
});

jayq.core.next.cljs$lang$maxFixedArity = 2;

jayq.core.prev = (function jayq$core$prev(var_args){
var args44612 = [];
var len__37833__auto___44615 = arguments.length;
var i__37834__auto___44616 = (0);
while(true){
if((i__37834__auto___44616 < len__37833__auto___44615)){
args44612.push((arguments[i__37834__auto___44616]));

var G__44617 = (i__37834__auto___44616 + (1));
i__37834__auto___44616 = G__44617;
continue;
} else {
}
break;
}

var G__44614 = args44612.length;
switch (G__44614) {
case 1:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44612.length)].join('')));

}
});

jayq.core.prev.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prev();
});

jayq.core.prev.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prev(cljs.core.name.call(null,selector));
});

jayq.core.prev.cljs$lang$maxFixedArity = 2;

jayq.core.next_all = (function jayq$core$next_all(var_args){
var args44619 = [];
var len__37833__auto___44622 = arguments.length;
var i__37834__auto___44623 = (0);
while(true){
if((i__37834__auto___44623 < len__37833__auto___44622)){
args44619.push((arguments[i__37834__auto___44623]));

var G__44624 = (i__37834__auto___44623 + (1));
i__37834__auto___44623 = G__44624;
continue;
} else {
}
break;
}

var G__44621 = args44619.length;
switch (G__44621) {
case 1:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44619.length)].join('')));

}
});

jayq.core.next_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextAll();
});

jayq.core.next_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextAll(cljs.core.name.call(null,selector));
});

jayq.core.next_all.cljs$lang$maxFixedArity = 2;

jayq.core.prev_all = (function jayq$core$prev_all(var_args){
var args44626 = [];
var len__37833__auto___44629 = arguments.length;
var i__37834__auto___44630 = (0);
while(true){
if((i__37834__auto___44630 < len__37833__auto___44629)){
args44626.push((arguments[i__37834__auto___44630]));

var G__44631 = (i__37834__auto___44630 + (1));
i__37834__auto___44630 = G__44631;
continue;
} else {
}
break;
}

var G__44628 = args44626.length;
switch (G__44628) {
case 1:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44626.length)].join('')));

}
});

jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevAll();
});

jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevAll(cljs.core.name.call(null,selector));
});

jayq.core.prev_all.cljs$lang$maxFixedArity = 2;

jayq.core.next_until = (function jayq$core$next_until(var_args){
var args44633 = [];
var len__37833__auto___44636 = arguments.length;
var i__37834__auto___44637 = (0);
while(true){
if((i__37834__auto___44637 < len__37833__auto___44636)){
args44633.push((arguments[i__37834__auto___44637]));

var G__44638 = (i__37834__auto___44637 + (1));
i__37834__auto___44637 = G__44638;
continue;
} else {
}
break;
}

var G__44635 = args44633.length;
switch (G__44635) {
case 1:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44633.length)].join('')));

}
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextUntil();
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.next_until.cljs$lang$maxFixedArity = 3;

jayq.core.prev_until = (function jayq$core$prev_until(var_args){
var args44640 = [];
var len__37833__auto___44643 = arguments.length;
var i__37834__auto___44644 = (0);
while(true){
if((i__37834__auto___44644 < len__37833__auto___44643)){
args44640.push((arguments[i__37834__auto___44644]));

var G__44645 = (i__37834__auto___44644 + (1));
i__37834__auto___44644 = G__44645;
continue;
} else {
}
break;
}

var G__44642 = args44640.length;
switch (G__44642) {
case 1:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44640.length)].join('')));

}
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevUntil();
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.prev_until.cljs$lang$maxFixedArity = 3;

jayq.core.find = (function jayq$core$find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
jayq.core.closest = (function jayq$core$closest(var_args){
var args__37840__auto__ = [];
var len__37833__auto___44654 = arguments.length;
var i__37834__auto___44655 = (0);
while(true){
if((i__37834__auto___44655 < len__37833__auto___44654)){
args__37840__auto__.push((arguments[i__37834__auto___44655]));

var G__44656 = (i__37834__auto___44655 + (1));
i__37834__auto___44655 = G__44656;
continue;
} else {
}
break;
}

var argseq__37841__auto__ = ((((2) < args__37840__auto__.length))?(new cljs.core.IndexedSeq(args__37840__auto__.slice((2)),(0),null)):null);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37841__auto__);
});

jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,selector,p__44650){
var vec__44651 = p__44650;
var context = cljs.core.nth.call(null,vec__44651,(0),null);
return $elem.closest(jayq.core.__GT_selector.call(null,selector),context);
});

jayq.core.closest.cljs$lang$maxFixedArity = (2);

jayq.core.closest.cljs$lang$applyTo = (function (seq44647){
var G__44648 = cljs.core.first.call(null,seq44647);
var seq44647__$1 = cljs.core.next.call(null,seq44647);
var G__44649 = cljs.core.first.call(null,seq44647__$1);
var seq44647__$2 = cljs.core.next.call(null,seq44647__$1);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic(G__44648,G__44649,seq44647__$2);
});

jayq.core.clone = (function jayq$core$clone($elem){
return $elem.clone();
});
jayq.core.html = (function jayq$core$html(var_args){
var args44657 = [];
var len__37833__auto___44660 = arguments.length;
var i__37834__auto___44661 = (0);
while(true){
if((i__37834__auto___44661 < len__37833__auto___44660)){
args44657.push((arguments[i__37834__auto___44661]));

var G__44662 = (i__37834__auto___44661 + (1));
i__37834__auto___44661 = G__44662;
continue;
} else {
}
break;
}

var G__44659 = args44657.length;
switch (G__44659) {
case 2:
return jayq.core.html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44657.length)].join('')));

}
});

jayq.core.html.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.html(v);
});

jayq.core.html.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.html();
});

jayq.core.html.cljs$lang$maxFixedArity = 2;

jayq.core.inner = jayq.core.html;
jayq.core.empty = (function jayq$core$empty($elem){
return $elem.empty();
});
jayq.core.val = (function jayq$core$val(var_args){
var args44664 = [];
var len__37833__auto___44667 = arguments.length;
var i__37834__auto___44668 = (0);
while(true){
if((i__37834__auto___44668 < len__37833__auto___44667)){
args44664.push((arguments[i__37834__auto___44668]));

var G__44669 = (i__37834__auto___44668 + (1));
i__37834__auto___44668 = G__44669;
continue;
} else {
}
break;
}

var G__44666 = args44664.length;
switch (G__44666) {
case 2:
return jayq.core.val.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.val.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44664.length)].join('')));

}
});

jayq.core.val.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.val(v);
});

jayq.core.val.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.val();
});

jayq.core.val.cljs$lang$maxFixedArity = 2;

jayq.core.serialize = (function jayq$core$serialize($elem){
return $elem.serialize();
});
jayq.core.queue = (function jayq$core$queue(var_args){
var args44671 = [];
var len__37833__auto___44674 = arguments.length;
var i__37834__auto___44675 = (0);
while(true){
if((i__37834__auto___44675 < len__37833__auto___44674)){
args44671.push((arguments[i__37834__auto___44675]));

var G__44676 = (i__37834__auto___44675 + (1));
i__37834__auto___44675 = G__44676;
continue;
} else {
}
break;
}

var G__44673 = args44671.length;
switch (G__44673) {
case 3:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44671.length)].join('')));

}
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$3 = (function ($elem,x,y){
return $elem.queue(x,y);
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.queue(x);
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.queue();
});

jayq.core.queue.cljs$lang$maxFixedArity = 3;

jayq.core.dequeue = (function jayq$core$dequeue(var_args){
var args44678 = [];
var len__37833__auto___44681 = arguments.length;
var i__37834__auto___44682 = (0);
while(true){
if((i__37834__auto___44682 < len__37833__auto___44681)){
args44678.push((arguments[i__37834__auto___44682]));

var G__44683 = (i__37834__auto___44682 + (1));
i__37834__auto___44682 = G__44683;
continue;
} else {
}
break;
}

var G__44680 = args44678.length;
switch (G__44680) {
case 2:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44678.length)].join('')));

}
});

jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,queue_name){
return $elem.dequeue(queue_name);
});

jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.dequeue();
});

jayq.core.dequeue.cljs$lang$maxFixedArity = 2;

jayq.core.document_ready = (function jayq$core$document_ready(func){
return jayq.core.$.call(null,document).ready(func);
});
jayq.core.mimetype_converter = (function jayq$core$mimetype_converter(s){
return cljs.reader.read_string.call(null,[cljs.core.str(s)].join(''));
});
jQuery.ajaxSetup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"accepts","accepts",1429714104),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edn","edn",1317840885),"application/edn, text/edn",new cljs.core.Keyword(null,"clojure","clojure",438975815),"application/clojure, text/clojure"], null),new cljs.core.Keyword(null,"contents","contents",-1567174023),new cljs.core.PersistentArrayMap(null, 1, ["clojure",/edn|clojure/], null),new cljs.core.Keyword(null,"converters","converters",195533259),new cljs.core.PersistentArrayMap(null, 2, ["text edn",jayq.core.mimetype_converter,"text clojure",jayq.core.mimetype_converter], null)], null)));
jayq.core.clj_content_type_QMARK_ = (function jayq$core$clj_content_type_QMARK_(x){
return cljs.core.re_find.call(null,/^(text|application)\/(clojure|edn)/,x);
});
jayq.core.__GT_content_type = (function jayq$core$__GT_content_type(ct){
if(typeof ct === 'string'){
return ct;
} else {
if((ct instanceof cljs.core.Keyword)){
return cljs.core.subs.call(null,[cljs.core.str(ct)].join(''),(1));
} else {
return null;
}
}
});
jayq.core.preprocess_request = (function jayq$core$preprocess_request(p__44687){
var map__44690 = p__44687;
var map__44690__$1 = ((((!((map__44690 == null)))?((((map__44690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44690):map__44690);
var request = map__44690__$1;
var data = cljs.core.get.call(null,map__44690__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var contentType = cljs.core.get.call(null,map__44690__$1,new cljs.core.Keyword(null,"contentType","contentType",-1462509576));
var ct = jayq.core.__GT_content_type.call(null,contentType);
return ((function (ct,map__44690,map__44690__$1,request,data,contentType){
return (function (p1__44686_SHARP_){
if(cljs.core.truth_((function (){var and__36746__auto__ = ct;
if(cljs.core.truth_(and__36746__auto__)){
return jayq.core.clj_content_type_QMARK_.call(null,ct);
} else {
return and__36746__auto__;
}
})())){
return cljs.core.assoc.call(null,p1__44686_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.pr_str.call(null,data));
} else {
return p1__44686_SHARP_;
}
});})(ct,map__44690,map__44690__$1,request,data,contentType))
.call(null,((function (ct,map__44690,map__44690__$1,request,data,contentType){
return (function (p1__44685_SHARP_){
if(cljs.core.truth_(ct)){
return cljs.core.assoc.call(null,p1__44685_SHARP_,new cljs.core.Keyword(null,"contentType","contentType",-1462509576),ct);
} else {
return p1__44685_SHARP_;
}
});})(ct,map__44690,map__44690__$1,request,data,contentType))
.call(null,request));
});
jayq.core.__GT_ajax_settings = (function jayq$core$__GT_ajax_settings(request){
return cljs.core.clj__GT_js.call(null,jayq.core.preprocess_request.call(null,request));
});
jayq.core.ajax = (function jayq$core$ajax(var_args){
var args44692 = [];
var len__37833__auto___44695 = arguments.length;
var i__37834__auto___44696 = (0);
while(true){
if((i__37834__auto___44696 < len__37833__auto___44695)){
args44692.push((arguments[i__37834__auto___44696]));

var G__44697 = (i__37834__auto___44696 + (1));
i__37834__auto___44696 = G__44697;
continue;
} else {
}
break;
}

var G__44694 = args44692.length;
switch (G__44694) {
case 2:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44692.length)].join('')));

}
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$2 = (function (url,settings){
return jQuery.ajax(url,jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$1 = (function (settings){
return jQuery.ajax(jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$lang$maxFixedArity = 2;

jayq.core.xhr = (function jayq$core$xhr(p__44699,content,callback){
var vec__44703 = p__44699;
var method = cljs.core.nth.call(null,vec__44703,(0),null);
var uri = cljs.core.nth.call(null,vec__44703,(1),null);
var params = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),clojure.string.upper_case.call(null,cljs.core.name.call(null,method)),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.clj__GT_js.call(null,content),new cljs.core.Keyword(null,"success","success",1890645906),callback], null));
return jQuery.ajax(uri,params);
});
/**
 * Reads clojure data from element content (preferably a script tag with type=edn/clojure)
 */
jayq.core.read = (function jayq$core$read($elem){
return cljs.reader.read_string.call(null,jayq.core.html.call(null,$elem));
});
jayq.core.$contains = jQuery.contains;
jayq.core.bind = (function jayq$core$bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
jayq.core.unbind = (function jayq$core$unbind(var_args){
var args__37840__auto__ = [];
var len__37833__auto___44713 = arguments.length;
var i__37834__auto___44714 = (0);
while(true){
if((i__37834__auto___44714 < len__37833__auto___44713)){
args__37840__auto__.push((arguments[i__37834__auto___44714]));

var G__44715 = (i__37834__auto___44714 + (1));
i__37834__auto___44714 = G__44715;
continue;
} else {
}
break;
}

var argseq__37841__auto__ = ((((2) < args__37840__auto__.length))?(new cljs.core.IndexedSeq(args__37840__auto__.slice((2)),(0),null)):null);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37841__auto__);
});

jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,ev,p__44709){
var vec__44710 = p__44709;
var func = cljs.core.nth.call(null,vec__44710,(0),null);
return $elem.unbind(cljs.core.name.call(null,ev),func);
});

jayq.core.unbind.cljs$lang$maxFixedArity = (2);

jayq.core.unbind.cljs$lang$applyTo = (function (seq44706){
var G__44707 = cljs.core.first.call(null,seq44706);
var seq44706__$1 = cljs.core.next.call(null,seq44706);
var G__44708 = cljs.core.first.call(null,seq44706__$1);
var seq44706__$2 = cljs.core.next.call(null,seq44706__$1);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic(G__44707,G__44708,seq44706__$2);
});

jayq.core.trigger = (function jayq$core$trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function jayq$core$delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.__GT_event = (function jayq$core$__GT_event(e){
if(cljs.core.coll_QMARK_.call(null,e)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.name,e));
} else {
return cljs.core.clj__GT_js.call(null,e);
}
});
jayq.core.on = (function jayq$core$on(var_args){
var args__37840__auto__ = [];
var len__37833__auto___44723 = arguments.length;
var i__37834__auto___44724 = (0);
while(true){
if((i__37834__auto___44724 < len__37833__auto___44723)){
args__37840__auto__.push((arguments[i__37834__auto___44724]));

var G__44725 = (i__37834__auto___44724 + (1));
i__37834__auto___44724 = G__44725;
continue;
} else {
}
break;
}

var argseq__37841__auto__ = ((((2) < args__37840__auto__.length))?(new cljs.core.IndexedSeq(args__37840__auto__.slice((2)),(0),null)):null);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37841__auto__);
});

jayq.core.on.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__44719){
var vec__44720 = p__44719;
var sel = cljs.core.nth.call(null,vec__44720,(0),null);
var data = cljs.core.nth.call(null,vec__44720,(1),null);
var handler = cljs.core.nth.call(null,vec__44720,(2),null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.on.cljs$lang$maxFixedArity = (2);

jayq.core.on.cljs$lang$applyTo = (function (seq44716){
var G__44717 = cljs.core.first.call(null,seq44716);
var seq44716__$1 = cljs.core.next.call(null,seq44716);
var G__44718 = cljs.core.first.call(null,seq44716__$1);
var seq44716__$2 = cljs.core.next.call(null,seq44716__$1);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic(G__44717,G__44718,seq44716__$2);
});

jayq.core.one = (function jayq$core$one(var_args){
var args__37840__auto__ = [];
var len__37833__auto___44733 = arguments.length;
var i__37834__auto___44734 = (0);
while(true){
if((i__37834__auto___44734 < len__37833__auto___44733)){
args__37840__auto__.push((arguments[i__37834__auto___44734]));

var G__44735 = (i__37834__auto___44734 + (1));
i__37834__auto___44734 = G__44735;
continue;
} else {
}
break;
}

var argseq__37841__auto__ = ((((2) < args__37840__auto__.length))?(new cljs.core.IndexedSeq(args__37840__auto__.slice((2)),(0),null)):null);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37841__auto__);
});

jayq.core.one.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__44729){
var vec__44730 = p__44729;
var sel = cljs.core.nth.call(null,vec__44730,(0),null);
var data = cljs.core.nth.call(null,vec__44730,(1),null);
var handler = cljs.core.nth.call(null,vec__44730,(2),null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.one.cljs$lang$maxFixedArity = (2);

jayq.core.one.cljs$lang$applyTo = (function (seq44726){
var G__44727 = cljs.core.first.call(null,seq44726);
var seq44726__$1 = cljs.core.next.call(null,seq44726);
var G__44728 = cljs.core.first.call(null,seq44726__$1);
var seq44726__$2 = cljs.core.next.call(null,seq44726__$1);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic(G__44727,G__44728,seq44726__$2);
});

jayq.core.off = (function jayq$core$off(var_args){
var args__37840__auto__ = [];
var len__37833__auto___44743 = arguments.length;
var i__37834__auto___44744 = (0);
while(true){
if((i__37834__auto___44744 < len__37833__auto___44743)){
args__37840__auto__.push((arguments[i__37834__auto___44744]));

var G__44745 = (i__37834__auto___44744 + (1));
i__37834__auto___44744 = G__44745;
continue;
} else {
}
break;
}

var argseq__37841__auto__ = ((((2) < args__37840__auto__.length))?(new cljs.core.IndexedSeq(args__37840__auto__.slice((2)),(0),null)):null);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37841__auto__);
});

jayq.core.off.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__44739){
var vec__44740 = p__44739;
var sel = cljs.core.nth.call(null,vec__44740,(0),null);
var handler = cljs.core.nth.call(null,vec__44740,(1),null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),handler);
});

jayq.core.off.cljs$lang$maxFixedArity = (2);

jayq.core.off.cljs$lang$applyTo = (function (seq44736){
var G__44737 = cljs.core.first.call(null,seq44736);
var seq44736__$1 = cljs.core.next.call(null,seq44736);
var G__44738 = cljs.core.first.call(null,seq44736__$1);
var seq44736__$2 = cljs.core.next.call(null,seq44736__$1);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic(G__44737,G__44738,seq44736__$2);
});

jayq.core.prevent = (function jayq$core$prevent(e){
return e.preventDefault();
});
jayq.core.height = (function jayq$core$height(var_args){
var args44746 = [];
var len__37833__auto___44749 = arguments.length;
var i__37834__auto___44750 = (0);
while(true){
if((i__37834__auto___44750 < len__37833__auto___44749)){
args44746.push((arguments[i__37834__auto___44750]));

var G__44751 = (i__37834__auto___44750 + (1));
i__37834__auto___44750 = G__44751;
continue;
} else {
}
break;
}

var G__44748 = args44746.length;
switch (G__44748) {
case 2:
return jayq.core.height.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.height.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44746.length)].join('')));

}
});

jayq.core.height.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.height(x);
});

jayq.core.height.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.height();
});

jayq.core.height.cljs$lang$maxFixedArity = 2;

jayq.core.width = (function jayq$core$width(var_args){
var args44753 = [];
var len__37833__auto___44756 = arguments.length;
var i__37834__auto___44757 = (0);
while(true){
if((i__37834__auto___44757 < len__37833__auto___44756)){
args44753.push((arguments[i__37834__auto___44757]));

var G__44758 = (i__37834__auto___44757 + (1));
i__37834__auto___44757 = G__44758;
continue;
} else {
}
break;
}

var G__44755 = args44753.length;
switch (G__44755) {
case 2:
return jayq.core.width.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.width.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44753.length)].join('')));

}
});

jayq.core.width.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.width(x);
});

jayq.core.width.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.width();
});

jayq.core.width.cljs$lang$maxFixedArity = 2;

jayq.core.inner_height = (function jayq$core$inner_height($elem){
return $elem.innerHeight();
});
jayq.core.inner_width = (function jayq$core$inner_width($elem){
return $elem.innerWidth();
});
jayq.core.outer_height = (function jayq$core$outer_height($elem){
return $elem.outerHeight();
});
jayq.core.outer_width = (function jayq$core$outer_width($elem){
return $elem.outerWidth();
});
jayq.core.offset = (function jayq$core$offset(var_args){
var args44760 = [];
var len__37833__auto___44763 = arguments.length;
var i__37834__auto___44764 = (0);
while(true){
if((i__37834__auto___44764 < len__37833__auto___44763)){
args44760.push((arguments[i__37834__auto___44764]));

var G__44765 = (i__37834__auto___44764 + (1));
i__37834__auto___44764 = G__44765;
continue;
} else {
}
break;
}

var G__44762 = args44760.length;
switch (G__44762) {
case 2:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44760.length)].join('')));

}
});

jayq.core.offset.cljs$core$IFn$_invoke$arity$2 = (function ($elem,coords){
return cljs.core.clj__GT_js.call(null,coords).offset();
});

jayq.core.offset.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return cljs.core.js__GT_clj.call(null,$elem.offset(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});

jayq.core.offset.cljs$lang$maxFixedArity = 2;

jayq.core.offset_parent = (function jayq$core$offset_parent($elem){
return $elem.offsetParent();
});
jayq.core.position = (function jayq$core$position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
jayq.core.scroll_left = (function jayq$core$scroll_left(var_args){
var args44767 = [];
var len__37833__auto___44770 = arguments.length;
var i__37834__auto___44771 = (0);
while(true){
if((i__37834__auto___44771 < len__37833__auto___44770)){
args44767.push((arguments[i__37834__auto___44771]));

var G__44772 = (i__37834__auto___44771 + (1));
i__37834__auto___44771 = G__44772;
continue;
} else {
}
break;
}

var G__44769 = args44767.length;
switch (G__44769) {
case 1:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44767.length)].join('')));

}
});

jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollLeft();
});

jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollLeft(x);
});

jayq.core.scroll_left.cljs$lang$maxFixedArity = 2;

jayq.core.scroll_top = (function jayq$core$scroll_top(var_args){
var args44774 = [];
var len__37833__auto___44777 = arguments.length;
var i__37834__auto___44778 = (0);
while(true){
if((i__37834__auto___44778 < len__37833__auto___44777)){
args44774.push((arguments[i__37834__auto___44778]));

var G__44779 = (i__37834__auto___44778 + (1));
i__37834__auto___44778 = G__44779;
continue;
} else {
}
break;
}

var G__44776 = args44774.length;
switch (G__44776) {
case 1:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44774.length)].join('')));

}
});

jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollTop();
});

jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollTop(x);
});

jayq.core.scroll_top.cljs$lang$maxFixedArity = 2;

jayq.core.$deferred = jQuery.Deferred;
jayq.core.$when = jQuery.when;
jayq.core.then = (function jayq$core$then(var_args){
var args44781 = [];
var len__37833__auto___44784 = arguments.length;
var i__37834__auto___44785 = (0);
while(true){
if((i__37834__auto___44785 < len__37833__auto___44784)){
args44781.push((arguments[i__37834__auto___44785]));

var G__44786 = (i__37834__auto___44785 + (1));
i__37834__auto___44785 = G__44786;
continue;
} else {
}
break;
}

var G__44783 = args44781.length;
switch (G__44783) {
case 3:
return jayq.core.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.then.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44781.length)].join('')));

}
});

jayq.core.then.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_fn,fail_fn){
return deferred.then(cljs.core.clj__GT_js.call(null,done_fn),cljs.core.clj__GT_js.call(null,fail_fn));
});

jayq.core.then.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_fn,fail_fn,progress_fn){
return deferred.then(cljs.core.clj__GT_js.call(null,done_fn),cljs.core.clj__GT_js.call(null,fail_fn),cljs.core.clj__GT_js.call(null,progress_fn));
});

jayq.core.then.cljs$lang$maxFixedArity = 4;

jayq.core.done = (function jayq$core$done(var_args){
var args__37840__auto__ = [];
var len__37833__auto___44790 = arguments.length;
var i__37834__auto___44791 = (0);
while(true){
if((i__37834__auto___44791 < len__37833__auto___44790)){
args__37840__auto__.push((arguments[i__37834__auto___44791]));

var G__44792 = (i__37834__auto___44791 + (1));
i__37834__auto___44791 = G__44792;
continue;
} else {
}
break;
}

var argseq__37841__auto__ = ((((1) < args__37840__auto__.length))?(new cljs.core.IndexedSeq(args__37840__auto__.slice((1)),(0),null)):null);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37841__auto__);
});

jayq.core.done.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.done.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.done.cljs$lang$maxFixedArity = (1);

jayq.core.done.cljs$lang$applyTo = (function (seq44788){
var G__44789 = cljs.core.first.call(null,seq44788);
var seq44788__$1 = cljs.core.next.call(null,seq44788);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic(G__44789,seq44788__$1);
});

jayq.core.fail = (function jayq$core$fail(var_args){
var args__37840__auto__ = [];
var len__37833__auto___44795 = arguments.length;
var i__37834__auto___44796 = (0);
while(true){
if((i__37834__auto___44796 < len__37833__auto___44795)){
args__37840__auto__.push((arguments[i__37834__auto___44796]));

var G__44797 = (i__37834__auto___44796 + (1));
i__37834__auto___44796 = G__44797;
continue;
} else {
}
break;
}

var argseq__37841__auto__ = ((((1) < args__37840__auto__.length))?(new cljs.core.IndexedSeq(args__37840__auto__.slice((1)),(0),null)):null);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37841__auto__);
});

jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.fail.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.fail.cljs$lang$maxFixedArity = (1);

jayq.core.fail.cljs$lang$applyTo = (function (seq44793){
var G__44794 = cljs.core.first.call(null,seq44793);
var seq44793__$1 = cljs.core.next.call(null,seq44793);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__44794,seq44793__$1);
});

jayq.core.progress = (function jayq$core$progress(deferred,fns_args){
return deferred.progress(cljs.core.clj__GT_js.call(null,fns_args));
});
jayq.core.promise = (function jayq$core$promise(var_args){
var args44798 = [];
var len__37833__auto___44801 = arguments.length;
var i__37834__auto___44802 = (0);
while(true){
if((i__37834__auto___44802 < len__37833__auto___44801)){
args44798.push((arguments[i__37834__auto___44802]));

var G__44803 = (i__37834__auto___44802 + (1));
i__37834__auto___44802 = G__44803;
continue;
} else {
}
break;
}

var G__44800 = args44798.length;
switch (G__44800) {
case 1:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44798.length)].join('')));

}
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$1 = (function (deferred){
return deferred.promise();
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$2 = (function (deferred,type){
return deferred.promise(type);
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$3 = (function (deferred,type,target){
return deferred.promise(type,target);
});

jayq.core.promise.cljs$lang$maxFixedArity = 3;

jayq.core.always = (function jayq$core$always(var_args){
var args__37840__auto__ = [];
var len__37833__auto___44807 = arguments.length;
var i__37834__auto___44808 = (0);
while(true){
if((i__37834__auto___44808 < len__37833__auto___44807)){
args__37840__auto__.push((arguments[i__37834__auto___44808]));

var G__44809 = (i__37834__auto___44808 + (1));
i__37834__auto___44808 = G__44809;
continue;
} else {
}
break;
}

var argseq__37841__auto__ = ((((1) < args__37840__auto__.length))?(new cljs.core.IndexedSeq(args__37840__auto__.slice((1)),(0),null)):null);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37841__auto__);
});

jayq.core.always.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.always.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.always.cljs$lang$maxFixedArity = (1);

jayq.core.always.cljs$lang$applyTo = (function (seq44805){
var G__44806 = cljs.core.first.call(null,seq44805);
var seq44805__$1 = cljs.core.next.call(null,seq44805);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic(G__44806,seq44805__$1);
});

jayq.core.reject = (function jayq$core$reject(deferred,args){
return deferred.reject(args);
});
jayq.core.reject_with = (function jayq$core$reject_with(deferred,context,args){
return deferred.rejectWith(context,args);
});
jayq.core.notify = (function jayq$core$notify(deferred,args){
return deferred.notify(args);
});
jayq.core.notify_with = (function jayq$core$notify_with(deferred,context,args){
return deferred.notifyWith(context,args);
});
jayq.core.resolve = (function jayq$core$resolve(deferred,args){
return deferred.resolve(args);
});
jayq.core.resolve_with = (function jayq$core$resolve_with(deferred,context,args){
return deferred.resolveWith(context,args);
});
jayq.core.pipe = (function jayq$core$pipe(var_args){
var args44810 = [];
var len__37833__auto___44813 = arguments.length;
var i__37834__auto___44814 = (0);
while(true){
if((i__37834__auto___44814 < len__37833__auto___44813)){
args44810.push((arguments[i__37834__auto___44814]));

var G__44815 = (i__37834__auto___44814 + (1));
i__37834__auto___44814 = G__44815;
continue;
} else {
}
break;
}

var G__44812 = args44810.length;
switch (G__44812) {
case 2:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44810.length)].join('')));

}
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$2 = (function (deferred,done_filter){
return deferred.pipe(done_filter);
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_filter,fail_filter){
return deferred.pipe(done_filter,fail_filter);
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_filter,fail_filter,progress_filter){
return deferred.pipe(done_filter,fail_filter,progress_filter);
});

jayq.core.pipe.cljs$lang$maxFixedArity = 4;

jayq.core.state = (function jayq$core$state(deferred){
return cljs.core.keyword.call(null,deferred.state());
});
jayq.core.deferred_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return","return",-1891502105),jayq.core.$when,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (x,f){
var dfd = jayq.core.$deferred.call(null);
jayq.core.done.call(null,x,((function (dfd){
return (function (v){
return jayq.core.done.call(null,f.call(null,v),cljs.core.partial.call(null,jayq.core.resolve,dfd));
});})(dfd))
);

return jayq.core.promise.call(null,dfd);
}),new cljs.core.Keyword(null,"zero","zero",-858964576),cljs.core.identity], null);
jayq.core.ajax_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return","return",-1891502105),cljs.core.identity,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (x,f){
return jayq.core.done.call(null,jayq.core.ajax.call(null,x),f);
}),new cljs.core.Keyword(null,"zero","zero",-858964576),cljs.core.identity], null);

//# sourceMappingURL=core.js.map