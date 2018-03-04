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
var args43690 = [];
var len__37877__auto___43693 = arguments.length;
var i__37878__auto___43694 = (0);
while(true){
if((i__37878__auto___43694 < len__37877__auto___43693)){
args43690.push((arguments[i__37878__auto___43694]));

var G__43695 = (i__37878__auto___43694 + (1));
i__37878__auto___43694 = G__43695;
continue;
} else {
}
break;
}

var G__43692 = args43690.length;
switch (G__43692) {
case 1:
return jayq.core.$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43690.length)].join('')));

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
var or__36802__auto__ = this$__$1.slice(k,(k + (1)));
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
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
var G__43698 = null;
var G__43698__2 = (function (self__,k){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__43698__3 = (function (self__,k,not_found){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__43698 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__43698__2.call(this,self__,k);
case 3:
return G__43698__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43698.cljs$core$IFn$_invoke$arity$2 = G__43698__2;
G__43698.cljs$core$IFn$_invoke$arity$3 = G__43698__3;
return G__43698;
})()
;

jQuery.prototype.apply = (function (self__,args43697){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args43697)));
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
var args__37884__auto__ = [];
var len__37877__auto___43706 = arguments.length;
var i__37878__auto___43707 = (0);
while(true){
if((i__37878__auto___43707 < len__37877__auto___43706)){
args__37884__auto__.push((arguments[i__37878__auto___43707]));

var G__43708 = (i__37878__auto___43707 + (1));
i__37878__auto___43707 = G__43708;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((2) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((2)),(0),null)):null);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37885__auto__);
});

jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,props,p__43702){
var vec__43703 = p__43702;
var speed = cljs.core.nth.call(null,vec__43703,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43703,(1),null);
return $elem.animate(cljs.core.clj__GT_js.call(null,props),speed,on_finish);
});

jayq.core.anim.cljs$lang$maxFixedArity = (2);

jayq.core.anim.cljs$lang$applyTo = (function (seq43699){
var G__43700 = cljs.core.first.call(null,seq43699);
var seq43699__$1 = cljs.core.next.call(null,seq43699);
var G__43701 = cljs.core.first.call(null,seq43699__$1);
var seq43699__$2 = cljs.core.next.call(null,seq43699__$1);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic(G__43700,G__43701,seq43699__$2);
});

jayq.core.text = (function jayq$core$text(var_args){
var args43709 = [];
var len__37877__auto___43712 = arguments.length;
var i__37878__auto___43713 = (0);
while(true){
if((i__37878__auto___43713 < len__37877__auto___43712)){
args43709.push((arguments[i__37878__auto___43713]));

var G__43714 = (i__37878__auto___43713 + (1));
i__37878__auto___43713 = G__43714;
continue;
} else {
}
break;
}

var G__43711 = args43709.length;
switch (G__43711) {
case 1:
return jayq.core.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43709.length)].join('')));

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
var args43716 = [];
var len__37877__auto___43719 = arguments.length;
var i__37878__auto___43720 = (0);
while(true){
if((i__37878__auto___43720 < len__37877__auto___43719)){
args43716.push((arguments[i__37878__auto___43720]));

var G__43721 = (i__37878__auto___43720 + (1));
i__37878__auto___43720 = G__43721;
continue;
} else {
}
break;
}

var G__43718 = args43716.length;
switch (G__43718) {
case 2:
return jayq.core.css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.css.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43716.length)].join('')));

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
var args43723 = [];
var len__37877__auto___43726 = arguments.length;
var i__37878__auto___43727 = (0);
while(true){
if((i__37878__auto___43727 < len__37877__auto___43726)){
args43723.push((arguments[i__37878__auto___43727]));

var G__43728 = (i__37878__auto___43727 + (1));
i__37878__auto___43727 = G__43728;
continue;
} else {
}
break;
}

var G__43725 = args43723.length;
switch (G__43725) {
case 3:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43723.length)].join('')));

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
var args43730 = [];
var len__37877__auto___43733 = arguments.length;
var i__37878__auto___43734 = (0);
while(true){
if((i__37878__auto___43734 < len__37877__auto___43733)){
args43730.push((arguments[i__37878__auto___43734]));

var G__43735 = (i__37878__auto___43734 + (1));
i__37878__auto___43734 = G__43735;
continue;
} else {
}
break;
}

var G__43732 = args43730.length;
switch (G__43732) {
case 3:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43730.length)].join('')));

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
var args43737 = [];
var len__37877__auto___43740 = arguments.length;
var i__37878__auto___43741 = (0);
while(true){
if((i__37878__auto___43741 < len__37877__auto___43740)){
args43737.push((arguments[i__37878__auto___43741]));

var G__43742 = (i__37878__auto___43741 + (1));
i__37878__auto___43741 = G__43742;
continue;
} else {
}
break;
}

var G__43739 = args43737.length;
switch (G__43739) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43737.length)].join('')));

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
var args43744 = [];
var len__37877__auto___43747 = arguments.length;
var i__37878__auto___43748 = (0);
while(true){
if((i__37878__auto___43748 < len__37877__auto___43747)){
args43744.push((arguments[i__37878__auto___43748]));

var G__43749 = (i__37878__auto___43748 + (1));
i__37878__auto___43748 = G__43749;
continue;
} else {
}
break;
}

var G__43746 = args43744.length;
switch (G__43746) {
case 1:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43744.length)].join('')));

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
var args43751 = [];
var len__37877__auto___43754 = arguments.length;
var i__37878__auto___43755 = (0);
while(true){
if((i__37878__auto___43755 < len__37877__auto___43754)){
args43751.push((arguments[i__37878__auto___43755]));

var G__43756 = (i__37878__auto___43755 + (1));
i__37878__auto___43755 = G__43756;
continue;
} else {
}
break;
}

var G__43753 = args43751.length;
switch (G__43753) {
case 2:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43751.length)].join('')));

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
var args__37884__auto__ = [];
var len__37877__auto___43764 = arguments.length;
var i__37878__auto___43765 = (0);
while(true){
if((i__37878__auto___43765 < len__37877__auto___43764)){
args__37884__auto__.push((arguments[i__37878__auto___43765]));

var G__43766 = (i__37878__auto___43765 + (1));
i__37878__auto___43765 = G__43766;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43760){
var vec__43761 = p__43760;
var speed = cljs.core.nth.call(null,vec__43761,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43761,(1),null);
return $elem.hide(speed,on_finish);
});

jayq.core.hide.cljs$lang$maxFixedArity = (1);

jayq.core.hide.cljs$lang$applyTo = (function (seq43758){
var G__43759 = cljs.core.first.call(null,seq43758);
var seq43758__$1 = cljs.core.next.call(null,seq43758);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic(G__43759,seq43758__$1);
});

jayq.core.show = (function jayq$core$show(var_args){
var args__37884__auto__ = [];
var len__37877__auto___43773 = arguments.length;
var i__37878__auto___43774 = (0);
while(true){
if((i__37878__auto___43774 < len__37877__auto___43773)){
args__37884__auto__.push((arguments[i__37878__auto___43774]));

var G__43775 = (i__37878__auto___43774 + (1));
i__37878__auto___43774 = G__43775;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

jayq.core.show.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43769){
var vec__43770 = p__43769;
var speed = cljs.core.nth.call(null,vec__43770,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43770,(1),null);
return $elem.show(speed,on_finish);
});

jayq.core.show.cljs$lang$maxFixedArity = (1);

jayq.core.show.cljs$lang$applyTo = (function (seq43767){
var G__43768 = cljs.core.first.call(null,seq43767);
var seq43767__$1 = cljs.core.next.call(null,seq43767);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic(G__43768,seq43767__$1);
});

jayq.core.toggle = (function jayq$core$toggle(var_args){
var args__37884__auto__ = [];
var len__37877__auto___43782 = arguments.length;
var i__37878__auto___43783 = (0);
while(true){
if((i__37878__auto___43783 < len__37877__auto___43782)){
args__37884__auto__.push((arguments[i__37878__auto___43783]));

var G__43784 = (i__37878__auto___43783 + (1));
i__37878__auto___43783 = G__43784;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43778){
var vec__43779 = p__43778;
var speed = cljs.core.nth.call(null,vec__43779,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43779,(1),null);
return $elem.toggle(speed,on_finish);
});

jayq.core.toggle.cljs$lang$maxFixedArity = (1);

jayq.core.toggle.cljs$lang$applyTo = (function (seq43776){
var G__43777 = cljs.core.first.call(null,seq43776);
var seq43776__$1 = cljs.core.next.call(null,seq43776);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic(G__43777,seq43776__$1);
});

jayq.core.fade_out = (function jayq$core$fade_out(var_args){
var args__37884__auto__ = [];
var len__37877__auto___43791 = arguments.length;
var i__37878__auto___43792 = (0);
while(true){
if((i__37878__auto___43792 < len__37877__auto___43791)){
args__37884__auto__.push((arguments[i__37878__auto___43792]));

var G__43793 = (i__37878__auto___43792 + (1));
i__37878__auto___43792 = G__43793;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43787){
var vec__43788 = p__43787;
var speed = cljs.core.nth.call(null,vec__43788,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43788,(1),null);
return $elem.fadeOut(speed,on_finish);
});

jayq.core.fade_out.cljs$lang$maxFixedArity = (1);

jayq.core.fade_out.cljs$lang$applyTo = (function (seq43785){
var G__43786 = cljs.core.first.call(null,seq43785);
var seq43785__$1 = cljs.core.next.call(null,seq43785);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic(G__43786,seq43785__$1);
});

jayq.core.fade_in = (function jayq$core$fade_in(var_args){
var args__37884__auto__ = [];
var len__37877__auto___43800 = arguments.length;
var i__37878__auto___43801 = (0);
while(true){
if((i__37878__auto___43801 < len__37877__auto___43800)){
args__37884__auto__.push((arguments[i__37878__auto___43801]));

var G__43802 = (i__37878__auto___43801 + (1));
i__37878__auto___43801 = G__43802;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43796){
var vec__43797 = p__43796;
var speed = cljs.core.nth.call(null,vec__43797,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43797,(1),null);
return $elem.fadeIn(speed,on_finish);
});

jayq.core.fade_in.cljs$lang$maxFixedArity = (1);

jayq.core.fade_in.cljs$lang$applyTo = (function (seq43794){
var G__43795 = cljs.core.first.call(null,seq43794);
var seq43794__$1 = cljs.core.next.call(null,seq43794);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic(G__43795,seq43794__$1);
});

jayq.core.slide_up = (function jayq$core$slide_up(var_args){
var args__37884__auto__ = [];
var len__37877__auto___43809 = arguments.length;
var i__37878__auto___43810 = (0);
while(true){
if((i__37878__auto___43810 < len__37877__auto___43809)){
args__37884__auto__.push((arguments[i__37878__auto___43810]));

var G__43811 = (i__37878__auto___43810 + (1));
i__37878__auto___43810 = G__43811;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43805){
var vec__43806 = p__43805;
var speed = cljs.core.nth.call(null,vec__43806,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43806,(1),null);
return $elem.slideUp(speed,on_finish);
});

jayq.core.slide_up.cljs$lang$maxFixedArity = (1);

jayq.core.slide_up.cljs$lang$applyTo = (function (seq43803){
var G__43804 = cljs.core.first.call(null,seq43803);
var seq43803__$1 = cljs.core.next.call(null,seq43803);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic(G__43804,seq43803__$1);
});

jayq.core.slide_down = (function jayq$core$slide_down(var_args){
var args__37884__auto__ = [];
var len__37877__auto___43818 = arguments.length;
var i__37878__auto___43819 = (0);
while(true){
if((i__37878__auto___43819 < len__37877__auto___43818)){
args__37884__auto__.push((arguments[i__37878__auto___43819]));

var G__43820 = (i__37878__auto___43819 + (1));
i__37878__auto___43819 = G__43820;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43814){
var vec__43815 = p__43814;
var speed = cljs.core.nth.call(null,vec__43815,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43815,(1),null);
return $elem.slideDown(speed,on_finish);
});

jayq.core.slide_down.cljs$lang$maxFixedArity = (1);

jayq.core.slide_down.cljs$lang$applyTo = (function (seq43812){
var G__43813 = cljs.core.first.call(null,seq43812);
var seq43812__$1 = cljs.core.next.call(null,seq43812);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic(G__43813,seq43812__$1);
});

jayq.core.siblings = (function jayq$core$siblings(var_args){
var args43821 = [];
var len__37877__auto___43824 = arguments.length;
var i__37878__auto___43825 = (0);
while(true){
if((i__37878__auto___43825 < len__37877__auto___43824)){
args43821.push((arguments[i__37878__auto___43825]));

var G__43826 = (i__37878__auto___43825 + (1));
i__37878__auto___43825 = G__43826;
continue;
} else {
}
break;
}

var G__43823 = args43821.length;
switch (G__43823) {
case 1:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43821.length)].join('')));

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
var args43828 = [];
var len__37877__auto___43831 = arguments.length;
var i__37878__auto___43832 = (0);
while(true){
if((i__37878__auto___43832 < len__37877__auto___43831)){
args43828.push((arguments[i__37878__auto___43832]));

var G__43833 = (i__37878__auto___43832 + (1));
i__37878__auto___43832 = G__43833;
continue;
} else {
}
break;
}

var G__43830 = args43828.length;
switch (G__43830) {
case 1:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43828.length)].join('')));

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
var args43835 = [];
var len__37877__auto___43838 = arguments.length;
var i__37878__auto___43839 = (0);
while(true){
if((i__37878__auto___43839 < len__37877__auto___43838)){
args43835.push((arguments[i__37878__auto___43839]));

var G__43840 = (i__37878__auto___43839 + (1));
i__37878__auto___43839 = G__43840;
continue;
} else {
}
break;
}

var G__43837 = args43835.length;
switch (G__43837) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43835.length)].join('')));

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
var args43842 = [];
var len__37877__auto___43845 = arguments.length;
var i__37878__auto___43846 = (0);
while(true){
if((i__37878__auto___43846 < len__37877__auto___43845)){
args43842.push((arguments[i__37878__auto___43846]));

var G__43847 = (i__37878__auto___43846 + (1));
i__37878__auto___43846 = G__43847;
continue;
} else {
}
break;
}

var G__43844 = args43842.length;
switch (G__43844) {
case 2:
return jayq.core.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43842.length)].join('')));

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
var args43849 = [];
var len__37877__auto___43852 = arguments.length;
var i__37878__auto___43853 = (0);
while(true){
if((i__37878__auto___43853 < len__37877__auto___43852)){
args43849.push((arguments[i__37878__auto___43853]));

var G__43854 = (i__37878__auto___43853 + (1));
i__37878__auto___43853 = G__43854;
continue;
} else {
}
break;
}

var G__43851 = args43849.length;
switch (G__43851) {
case 1:
return jayq.core.next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43849.length)].join('')));

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
var args43856 = [];
var len__37877__auto___43859 = arguments.length;
var i__37878__auto___43860 = (0);
while(true){
if((i__37878__auto___43860 < len__37877__auto___43859)){
args43856.push((arguments[i__37878__auto___43860]));

var G__43861 = (i__37878__auto___43860 + (1));
i__37878__auto___43860 = G__43861;
continue;
} else {
}
break;
}

var G__43858 = args43856.length;
switch (G__43858) {
case 1:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43856.length)].join('')));

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
var args43863 = [];
var len__37877__auto___43866 = arguments.length;
var i__37878__auto___43867 = (0);
while(true){
if((i__37878__auto___43867 < len__37877__auto___43866)){
args43863.push((arguments[i__37878__auto___43867]));

var G__43868 = (i__37878__auto___43867 + (1));
i__37878__auto___43867 = G__43868;
continue;
} else {
}
break;
}

var G__43865 = args43863.length;
switch (G__43865) {
case 1:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43863.length)].join('')));

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
var args43870 = [];
var len__37877__auto___43873 = arguments.length;
var i__37878__auto___43874 = (0);
while(true){
if((i__37878__auto___43874 < len__37877__auto___43873)){
args43870.push((arguments[i__37878__auto___43874]));

var G__43875 = (i__37878__auto___43874 + (1));
i__37878__auto___43874 = G__43875;
continue;
} else {
}
break;
}

var G__43872 = args43870.length;
switch (G__43872) {
case 1:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43870.length)].join('')));

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
var args43877 = [];
var len__37877__auto___43880 = arguments.length;
var i__37878__auto___43881 = (0);
while(true){
if((i__37878__auto___43881 < len__37877__auto___43880)){
args43877.push((arguments[i__37878__auto___43881]));

var G__43882 = (i__37878__auto___43881 + (1));
i__37878__auto___43881 = G__43882;
continue;
} else {
}
break;
}

var G__43879 = args43877.length;
switch (G__43879) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43877.length)].join('')));

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
var args43884 = [];
var len__37877__auto___43887 = arguments.length;
var i__37878__auto___43888 = (0);
while(true){
if((i__37878__auto___43888 < len__37877__auto___43887)){
args43884.push((arguments[i__37878__auto___43888]));

var G__43889 = (i__37878__auto___43888 + (1));
i__37878__auto___43888 = G__43889;
continue;
} else {
}
break;
}

var G__43886 = args43884.length;
switch (G__43886) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43884.length)].join('')));

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
var args__37884__auto__ = [];
var len__37877__auto___43898 = arguments.length;
var i__37878__auto___43899 = (0);
while(true){
if((i__37878__auto___43899 < len__37877__auto___43898)){
args__37884__auto__.push((arguments[i__37878__auto___43899]));

var G__43900 = (i__37878__auto___43899 + (1));
i__37878__auto___43899 = G__43900;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((2) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((2)),(0),null)):null);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37885__auto__);
});

jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,selector,p__43894){
var vec__43895 = p__43894;
var context = cljs.core.nth.call(null,vec__43895,(0),null);
return $elem.closest(jayq.core.__GT_selector.call(null,selector),context);
});

jayq.core.closest.cljs$lang$maxFixedArity = (2);

jayq.core.closest.cljs$lang$applyTo = (function (seq43891){
var G__43892 = cljs.core.first.call(null,seq43891);
var seq43891__$1 = cljs.core.next.call(null,seq43891);
var G__43893 = cljs.core.first.call(null,seq43891__$1);
var seq43891__$2 = cljs.core.next.call(null,seq43891__$1);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic(G__43892,G__43893,seq43891__$2);
});

jayq.core.clone = (function jayq$core$clone($elem){
return $elem.clone();
});
jayq.core.html = (function jayq$core$html(var_args){
var args43901 = [];
var len__37877__auto___43904 = arguments.length;
var i__37878__auto___43905 = (0);
while(true){
if((i__37878__auto___43905 < len__37877__auto___43904)){
args43901.push((arguments[i__37878__auto___43905]));

var G__43906 = (i__37878__auto___43905 + (1));
i__37878__auto___43905 = G__43906;
continue;
} else {
}
break;
}

var G__43903 = args43901.length;
switch (G__43903) {
case 2:
return jayq.core.html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43901.length)].join('')));

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
var args43908 = [];
var len__37877__auto___43911 = arguments.length;
var i__37878__auto___43912 = (0);
while(true){
if((i__37878__auto___43912 < len__37877__auto___43911)){
args43908.push((arguments[i__37878__auto___43912]));

var G__43913 = (i__37878__auto___43912 + (1));
i__37878__auto___43912 = G__43913;
continue;
} else {
}
break;
}

var G__43910 = args43908.length;
switch (G__43910) {
case 2:
return jayq.core.val.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.val.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43908.length)].join('')));

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
var args43915 = [];
var len__37877__auto___43918 = arguments.length;
var i__37878__auto___43919 = (0);
while(true){
if((i__37878__auto___43919 < len__37877__auto___43918)){
args43915.push((arguments[i__37878__auto___43919]));

var G__43920 = (i__37878__auto___43919 + (1));
i__37878__auto___43919 = G__43920;
continue;
} else {
}
break;
}

var G__43917 = args43915.length;
switch (G__43917) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43915.length)].join('')));

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
var args43922 = [];
var len__37877__auto___43925 = arguments.length;
var i__37878__auto___43926 = (0);
while(true){
if((i__37878__auto___43926 < len__37877__auto___43925)){
args43922.push((arguments[i__37878__auto___43926]));

var G__43927 = (i__37878__auto___43926 + (1));
i__37878__auto___43926 = G__43927;
continue;
} else {
}
break;
}

var G__43924 = args43922.length;
switch (G__43924) {
case 2:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43922.length)].join('')));

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
jayq.core.preprocess_request = (function jayq$core$preprocess_request(p__43931){
var map__43934 = p__43931;
var map__43934__$1 = ((((!((map__43934 == null)))?((((map__43934.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43934.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43934):map__43934);
var request = map__43934__$1;
var data = cljs.core.get.call(null,map__43934__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var contentType = cljs.core.get.call(null,map__43934__$1,new cljs.core.Keyword(null,"contentType","contentType",-1462509576));
var ct = jayq.core.__GT_content_type.call(null,contentType);
return ((function (ct,map__43934,map__43934__$1,request,data,contentType){
return (function (p1__43930_SHARP_){
if(cljs.core.truth_((function (){var and__36790__auto__ = ct;
if(cljs.core.truth_(and__36790__auto__)){
return jayq.core.clj_content_type_QMARK_.call(null,ct);
} else {
return and__36790__auto__;
}
})())){
return cljs.core.assoc.call(null,p1__43930_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.pr_str.call(null,data));
} else {
return p1__43930_SHARP_;
}
});})(ct,map__43934,map__43934__$1,request,data,contentType))
.call(null,((function (ct,map__43934,map__43934__$1,request,data,contentType){
return (function (p1__43929_SHARP_){
if(cljs.core.truth_(ct)){
return cljs.core.assoc.call(null,p1__43929_SHARP_,new cljs.core.Keyword(null,"contentType","contentType",-1462509576),ct);
} else {
return p1__43929_SHARP_;
}
});})(ct,map__43934,map__43934__$1,request,data,contentType))
.call(null,request));
});
jayq.core.__GT_ajax_settings = (function jayq$core$__GT_ajax_settings(request){
return cljs.core.clj__GT_js.call(null,jayq.core.preprocess_request.call(null,request));
});
jayq.core.ajax = (function jayq$core$ajax(var_args){
var args43936 = [];
var len__37877__auto___43939 = arguments.length;
var i__37878__auto___43940 = (0);
while(true){
if((i__37878__auto___43940 < len__37877__auto___43939)){
args43936.push((arguments[i__37878__auto___43940]));

var G__43941 = (i__37878__auto___43940 + (1));
i__37878__auto___43940 = G__43941;
continue;
} else {
}
break;
}

var G__43938 = args43936.length;
switch (G__43938) {
case 2:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43936.length)].join('')));

}
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$2 = (function (url,settings){
return jQuery.ajax(url,jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$1 = (function (settings){
return jQuery.ajax(jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$lang$maxFixedArity = 2;

jayq.core.xhr = (function jayq$core$xhr(p__43943,content,callback){
var vec__43947 = p__43943;
var method = cljs.core.nth.call(null,vec__43947,(0),null);
var uri = cljs.core.nth.call(null,vec__43947,(1),null);
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
var args__37884__auto__ = [];
var len__37877__auto___43957 = arguments.length;
var i__37878__auto___43958 = (0);
while(true){
if((i__37878__auto___43958 < len__37877__auto___43957)){
args__37884__auto__.push((arguments[i__37878__auto___43958]));

var G__43959 = (i__37878__auto___43958 + (1));
i__37878__auto___43958 = G__43959;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((2) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((2)),(0),null)):null);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37885__auto__);
});

jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,ev,p__43953){
var vec__43954 = p__43953;
var func = cljs.core.nth.call(null,vec__43954,(0),null);
return $elem.unbind(cljs.core.name.call(null,ev),func);
});

jayq.core.unbind.cljs$lang$maxFixedArity = (2);

jayq.core.unbind.cljs$lang$applyTo = (function (seq43950){
var G__43951 = cljs.core.first.call(null,seq43950);
var seq43950__$1 = cljs.core.next.call(null,seq43950);
var G__43952 = cljs.core.first.call(null,seq43950__$1);
var seq43950__$2 = cljs.core.next.call(null,seq43950__$1);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic(G__43951,G__43952,seq43950__$2);
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
var args__37884__auto__ = [];
var len__37877__auto___43967 = arguments.length;
var i__37878__auto___43968 = (0);
while(true){
if((i__37878__auto___43968 < len__37877__auto___43967)){
args__37884__auto__.push((arguments[i__37878__auto___43968]));

var G__43969 = (i__37878__auto___43968 + (1));
i__37878__auto___43968 = G__43969;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((2) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((2)),(0),null)):null);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37885__auto__);
});

jayq.core.on.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__43963){
var vec__43964 = p__43963;
var sel = cljs.core.nth.call(null,vec__43964,(0),null);
var data = cljs.core.nth.call(null,vec__43964,(1),null);
var handler = cljs.core.nth.call(null,vec__43964,(2),null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.on.cljs$lang$maxFixedArity = (2);

jayq.core.on.cljs$lang$applyTo = (function (seq43960){
var G__43961 = cljs.core.first.call(null,seq43960);
var seq43960__$1 = cljs.core.next.call(null,seq43960);
var G__43962 = cljs.core.first.call(null,seq43960__$1);
var seq43960__$2 = cljs.core.next.call(null,seq43960__$1);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic(G__43961,G__43962,seq43960__$2);
});

jayq.core.one = (function jayq$core$one(var_args){
var args__37884__auto__ = [];
var len__37877__auto___43977 = arguments.length;
var i__37878__auto___43978 = (0);
while(true){
if((i__37878__auto___43978 < len__37877__auto___43977)){
args__37884__auto__.push((arguments[i__37878__auto___43978]));

var G__43979 = (i__37878__auto___43978 + (1));
i__37878__auto___43978 = G__43979;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((2) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((2)),(0),null)):null);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37885__auto__);
});

jayq.core.one.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__43973){
var vec__43974 = p__43973;
var sel = cljs.core.nth.call(null,vec__43974,(0),null);
var data = cljs.core.nth.call(null,vec__43974,(1),null);
var handler = cljs.core.nth.call(null,vec__43974,(2),null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.one.cljs$lang$maxFixedArity = (2);

jayq.core.one.cljs$lang$applyTo = (function (seq43970){
var G__43971 = cljs.core.first.call(null,seq43970);
var seq43970__$1 = cljs.core.next.call(null,seq43970);
var G__43972 = cljs.core.first.call(null,seq43970__$1);
var seq43970__$2 = cljs.core.next.call(null,seq43970__$1);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic(G__43971,G__43972,seq43970__$2);
});

jayq.core.off = (function jayq$core$off(var_args){
var args__37884__auto__ = [];
var len__37877__auto___43987 = arguments.length;
var i__37878__auto___43988 = (0);
while(true){
if((i__37878__auto___43988 < len__37877__auto___43987)){
args__37884__auto__.push((arguments[i__37878__auto___43988]));

var G__43989 = (i__37878__auto___43988 + (1));
i__37878__auto___43988 = G__43989;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((2) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((2)),(0),null)):null);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37885__auto__);
});

jayq.core.off.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__43983){
var vec__43984 = p__43983;
var sel = cljs.core.nth.call(null,vec__43984,(0),null);
var handler = cljs.core.nth.call(null,vec__43984,(1),null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),handler);
});

jayq.core.off.cljs$lang$maxFixedArity = (2);

jayq.core.off.cljs$lang$applyTo = (function (seq43980){
var G__43981 = cljs.core.first.call(null,seq43980);
var seq43980__$1 = cljs.core.next.call(null,seq43980);
var G__43982 = cljs.core.first.call(null,seq43980__$1);
var seq43980__$2 = cljs.core.next.call(null,seq43980__$1);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic(G__43981,G__43982,seq43980__$2);
});

jayq.core.prevent = (function jayq$core$prevent(e){
return e.preventDefault();
});
jayq.core.height = (function jayq$core$height(var_args){
var args43990 = [];
var len__37877__auto___43993 = arguments.length;
var i__37878__auto___43994 = (0);
while(true){
if((i__37878__auto___43994 < len__37877__auto___43993)){
args43990.push((arguments[i__37878__auto___43994]));

var G__43995 = (i__37878__auto___43994 + (1));
i__37878__auto___43994 = G__43995;
continue;
} else {
}
break;
}

var G__43992 = args43990.length;
switch (G__43992) {
case 2:
return jayq.core.height.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.height.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43990.length)].join('')));

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
var args43997 = [];
var len__37877__auto___44000 = arguments.length;
var i__37878__auto___44001 = (0);
while(true){
if((i__37878__auto___44001 < len__37877__auto___44000)){
args43997.push((arguments[i__37878__auto___44001]));

var G__44002 = (i__37878__auto___44001 + (1));
i__37878__auto___44001 = G__44002;
continue;
} else {
}
break;
}

var G__43999 = args43997.length;
switch (G__43999) {
case 2:
return jayq.core.width.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.width.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43997.length)].join('')));

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
var args44004 = [];
var len__37877__auto___44007 = arguments.length;
var i__37878__auto___44008 = (0);
while(true){
if((i__37878__auto___44008 < len__37877__auto___44007)){
args44004.push((arguments[i__37878__auto___44008]));

var G__44009 = (i__37878__auto___44008 + (1));
i__37878__auto___44008 = G__44009;
continue;
} else {
}
break;
}

var G__44006 = args44004.length;
switch (G__44006) {
case 2:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44004.length)].join('')));

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
var args44011 = [];
var len__37877__auto___44014 = arguments.length;
var i__37878__auto___44015 = (0);
while(true){
if((i__37878__auto___44015 < len__37877__auto___44014)){
args44011.push((arguments[i__37878__auto___44015]));

var G__44016 = (i__37878__auto___44015 + (1));
i__37878__auto___44015 = G__44016;
continue;
} else {
}
break;
}

var G__44013 = args44011.length;
switch (G__44013) {
case 1:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44011.length)].join('')));

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
var args44018 = [];
var len__37877__auto___44021 = arguments.length;
var i__37878__auto___44022 = (0);
while(true){
if((i__37878__auto___44022 < len__37877__auto___44021)){
args44018.push((arguments[i__37878__auto___44022]));

var G__44023 = (i__37878__auto___44022 + (1));
i__37878__auto___44022 = G__44023;
continue;
} else {
}
break;
}

var G__44020 = args44018.length;
switch (G__44020) {
case 1:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44018.length)].join('')));

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
var args44025 = [];
var len__37877__auto___44028 = arguments.length;
var i__37878__auto___44029 = (0);
while(true){
if((i__37878__auto___44029 < len__37877__auto___44028)){
args44025.push((arguments[i__37878__auto___44029]));

var G__44030 = (i__37878__auto___44029 + (1));
i__37878__auto___44029 = G__44030;
continue;
} else {
}
break;
}

var G__44027 = args44025.length;
switch (G__44027) {
case 3:
return jayq.core.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.then.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44025.length)].join('')));

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
var args__37884__auto__ = [];
var len__37877__auto___44034 = arguments.length;
var i__37878__auto___44035 = (0);
while(true){
if((i__37878__auto___44035 < len__37877__auto___44034)){
args__37884__auto__.push((arguments[i__37878__auto___44035]));

var G__44036 = (i__37878__auto___44035 + (1));
i__37878__auto___44035 = G__44036;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

jayq.core.done.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.done.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.done.cljs$lang$maxFixedArity = (1);

jayq.core.done.cljs$lang$applyTo = (function (seq44032){
var G__44033 = cljs.core.first.call(null,seq44032);
var seq44032__$1 = cljs.core.next.call(null,seq44032);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic(G__44033,seq44032__$1);
});

jayq.core.fail = (function jayq$core$fail(var_args){
var args__37884__auto__ = [];
var len__37877__auto___44039 = arguments.length;
var i__37878__auto___44040 = (0);
while(true){
if((i__37878__auto___44040 < len__37877__auto___44039)){
args__37884__auto__.push((arguments[i__37878__auto___44040]));

var G__44041 = (i__37878__auto___44040 + (1));
i__37878__auto___44040 = G__44041;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.fail.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.fail.cljs$lang$maxFixedArity = (1);

jayq.core.fail.cljs$lang$applyTo = (function (seq44037){
var G__44038 = cljs.core.first.call(null,seq44037);
var seq44037__$1 = cljs.core.next.call(null,seq44037);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__44038,seq44037__$1);
});

jayq.core.progress = (function jayq$core$progress(deferred,fns_args){
return deferred.progress(cljs.core.clj__GT_js.call(null,fns_args));
});
jayq.core.promise = (function jayq$core$promise(var_args){
var args44042 = [];
var len__37877__auto___44045 = arguments.length;
var i__37878__auto___44046 = (0);
while(true){
if((i__37878__auto___44046 < len__37877__auto___44045)){
args44042.push((arguments[i__37878__auto___44046]));

var G__44047 = (i__37878__auto___44046 + (1));
i__37878__auto___44046 = G__44047;
continue;
} else {
}
break;
}

var G__44044 = args44042.length;
switch (G__44044) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44042.length)].join('')));

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
var args__37884__auto__ = [];
var len__37877__auto___44051 = arguments.length;
var i__37878__auto___44052 = (0);
while(true){
if((i__37878__auto___44052 < len__37877__auto___44051)){
args__37884__auto__.push((arguments[i__37878__auto___44052]));

var G__44053 = (i__37878__auto___44052 + (1));
i__37878__auto___44052 = G__44053;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

jayq.core.always.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.always.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.always.cljs$lang$maxFixedArity = (1);

jayq.core.always.cljs$lang$applyTo = (function (seq44049){
var G__44050 = cljs.core.first.call(null,seq44049);
var seq44049__$1 = cljs.core.next.call(null,seq44049);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic(G__44050,seq44049__$1);
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
var args44054 = [];
var len__37877__auto___44057 = arguments.length;
var i__37878__auto___44058 = (0);
while(true){
if((i__37878__auto___44058 < len__37877__auto___44057)){
args44054.push((arguments[i__37878__auto___44058]));

var G__44059 = (i__37878__auto___44058 + (1));
i__37878__auto___44058 = G__44059;
continue;
} else {
}
break;
}

var G__44056 = args44054.length;
switch (G__44056) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44054.length)].join('')));

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