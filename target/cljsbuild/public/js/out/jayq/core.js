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
var args43638 = [];
var len__37877__auto___43641 = arguments.length;
var i__37878__auto___43642 = (0);
while(true){
if((i__37878__auto___43642 < len__37877__auto___43641)){
args43638.push((arguments[i__37878__auto___43642]));

var G__43643 = (i__37878__auto___43642 + (1));
i__37878__auto___43642 = G__43643;
continue;
} else {
}
break;
}

var G__43640 = args43638.length;
switch (G__43640) {
case 1:
return jayq.core.$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43638.length)].join('')));

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
var G__43646 = null;
var G__43646__2 = (function (self__,k){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__43646__3 = (function (self__,k,not_found){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__43646 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__43646__2.call(this,self__,k);
case 3:
return G__43646__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43646.cljs$core$IFn$_invoke$arity$2 = G__43646__2;
G__43646.cljs$core$IFn$_invoke$arity$3 = G__43646__3;
return G__43646;
})()
;

jQuery.prototype.apply = (function (self__,args43645){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args43645)));
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
var len__37877__auto___43654 = arguments.length;
var i__37878__auto___43655 = (0);
while(true){
if((i__37878__auto___43655 < len__37877__auto___43654)){
args__37884__auto__.push((arguments[i__37878__auto___43655]));

var G__43656 = (i__37878__auto___43655 + (1));
i__37878__auto___43655 = G__43656;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((2) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((2)),(0),null)):null);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37885__auto__);
});

jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,props,p__43650){
var vec__43651 = p__43650;
var speed = cljs.core.nth.call(null,vec__43651,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43651,(1),null);
return $elem.animate(cljs.core.clj__GT_js.call(null,props),speed,on_finish);
});

jayq.core.anim.cljs$lang$maxFixedArity = (2);

jayq.core.anim.cljs$lang$applyTo = (function (seq43647){
var G__43648 = cljs.core.first.call(null,seq43647);
var seq43647__$1 = cljs.core.next.call(null,seq43647);
var G__43649 = cljs.core.first.call(null,seq43647__$1);
var seq43647__$2 = cljs.core.next.call(null,seq43647__$1);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic(G__43648,G__43649,seq43647__$2);
});

jayq.core.text = (function jayq$core$text(var_args){
var args43657 = [];
var len__37877__auto___43660 = arguments.length;
var i__37878__auto___43661 = (0);
while(true){
if((i__37878__auto___43661 < len__37877__auto___43660)){
args43657.push((arguments[i__37878__auto___43661]));

var G__43662 = (i__37878__auto___43661 + (1));
i__37878__auto___43661 = G__43662;
continue;
} else {
}
break;
}

var G__43659 = args43657.length;
switch (G__43659) {
case 1:
return jayq.core.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43657.length)].join('')));

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
var args43664 = [];
var len__37877__auto___43667 = arguments.length;
var i__37878__auto___43668 = (0);
while(true){
if((i__37878__auto___43668 < len__37877__auto___43667)){
args43664.push((arguments[i__37878__auto___43668]));

var G__43669 = (i__37878__auto___43668 + (1));
i__37878__auto___43668 = G__43669;
continue;
} else {
}
break;
}

var G__43666 = args43664.length;
switch (G__43666) {
case 2:
return jayq.core.css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.css.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43664.length)].join('')));

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
var args43671 = [];
var len__37877__auto___43674 = arguments.length;
var i__37878__auto___43675 = (0);
while(true){
if((i__37878__auto___43675 < len__37877__auto___43674)){
args43671.push((arguments[i__37878__auto___43675]));

var G__43676 = (i__37878__auto___43675 + (1));
i__37878__auto___43675 = G__43676;
continue;
} else {
}
break;
}

var G__43673 = args43671.length;
switch (G__43673) {
case 3:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43671.length)].join('')));

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
var args43678 = [];
var len__37877__auto___43681 = arguments.length;
var i__37878__auto___43682 = (0);
while(true){
if((i__37878__auto___43682 < len__37877__auto___43681)){
args43678.push((arguments[i__37878__auto___43682]));

var G__43683 = (i__37878__auto___43682 + (1));
i__37878__auto___43682 = G__43683;
continue;
} else {
}
break;
}

var G__43680 = args43678.length;
switch (G__43680) {
case 3:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43678.length)].join('')));

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
var args43685 = [];
var len__37877__auto___43688 = arguments.length;
var i__37878__auto___43689 = (0);
while(true){
if((i__37878__auto___43689 < len__37877__auto___43688)){
args43685.push((arguments[i__37878__auto___43689]));

var G__43690 = (i__37878__auto___43689 + (1));
i__37878__auto___43689 = G__43690;
continue;
} else {
}
break;
}

var G__43687 = args43685.length;
switch (G__43687) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43685.length)].join('')));

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
var args43692 = [];
var len__37877__auto___43695 = arguments.length;
var i__37878__auto___43696 = (0);
while(true){
if((i__37878__auto___43696 < len__37877__auto___43695)){
args43692.push((arguments[i__37878__auto___43696]));

var G__43697 = (i__37878__auto___43696 + (1));
i__37878__auto___43696 = G__43697;
continue;
} else {
}
break;
}

var G__43694 = args43692.length;
switch (G__43694) {
case 1:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43692.length)].join('')));

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
var args43699 = [];
var len__37877__auto___43702 = arguments.length;
var i__37878__auto___43703 = (0);
while(true){
if((i__37878__auto___43703 < len__37877__auto___43702)){
args43699.push((arguments[i__37878__auto___43703]));

var G__43704 = (i__37878__auto___43703 + (1));
i__37878__auto___43703 = G__43704;
continue;
} else {
}
break;
}

var G__43701 = args43699.length;
switch (G__43701) {
case 2:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43699.length)].join('')));

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
var len__37877__auto___43712 = arguments.length;
var i__37878__auto___43713 = (0);
while(true){
if((i__37878__auto___43713 < len__37877__auto___43712)){
args__37884__auto__.push((arguments[i__37878__auto___43713]));

var G__43714 = (i__37878__auto___43713 + (1));
i__37878__auto___43713 = G__43714;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43708){
var vec__43709 = p__43708;
var speed = cljs.core.nth.call(null,vec__43709,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43709,(1),null);
return $elem.hide(speed,on_finish);
});

jayq.core.hide.cljs$lang$maxFixedArity = (1);

jayq.core.hide.cljs$lang$applyTo = (function (seq43706){
var G__43707 = cljs.core.first.call(null,seq43706);
var seq43706__$1 = cljs.core.next.call(null,seq43706);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic(G__43707,seq43706__$1);
});

jayq.core.show = (function jayq$core$show(var_args){
var args__37884__auto__ = [];
var len__37877__auto___43721 = arguments.length;
var i__37878__auto___43722 = (0);
while(true){
if((i__37878__auto___43722 < len__37877__auto___43721)){
args__37884__auto__.push((arguments[i__37878__auto___43722]));

var G__43723 = (i__37878__auto___43722 + (1));
i__37878__auto___43722 = G__43723;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

jayq.core.show.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43717){
var vec__43718 = p__43717;
var speed = cljs.core.nth.call(null,vec__43718,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43718,(1),null);
return $elem.show(speed,on_finish);
});

jayq.core.show.cljs$lang$maxFixedArity = (1);

jayq.core.show.cljs$lang$applyTo = (function (seq43715){
var G__43716 = cljs.core.first.call(null,seq43715);
var seq43715__$1 = cljs.core.next.call(null,seq43715);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic(G__43716,seq43715__$1);
});

jayq.core.toggle = (function jayq$core$toggle(var_args){
var args__37884__auto__ = [];
var len__37877__auto___43730 = arguments.length;
var i__37878__auto___43731 = (0);
while(true){
if((i__37878__auto___43731 < len__37877__auto___43730)){
args__37884__auto__.push((arguments[i__37878__auto___43731]));

var G__43732 = (i__37878__auto___43731 + (1));
i__37878__auto___43731 = G__43732;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43726){
var vec__43727 = p__43726;
var speed = cljs.core.nth.call(null,vec__43727,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43727,(1),null);
return $elem.toggle(speed,on_finish);
});

jayq.core.toggle.cljs$lang$maxFixedArity = (1);

jayq.core.toggle.cljs$lang$applyTo = (function (seq43724){
var G__43725 = cljs.core.first.call(null,seq43724);
var seq43724__$1 = cljs.core.next.call(null,seq43724);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic(G__43725,seq43724__$1);
});

jayq.core.fade_out = (function jayq$core$fade_out(var_args){
var args__37884__auto__ = [];
var len__37877__auto___43739 = arguments.length;
var i__37878__auto___43740 = (0);
while(true){
if((i__37878__auto___43740 < len__37877__auto___43739)){
args__37884__auto__.push((arguments[i__37878__auto___43740]));

var G__43741 = (i__37878__auto___43740 + (1));
i__37878__auto___43740 = G__43741;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43735){
var vec__43736 = p__43735;
var speed = cljs.core.nth.call(null,vec__43736,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43736,(1),null);
return $elem.fadeOut(speed,on_finish);
});

jayq.core.fade_out.cljs$lang$maxFixedArity = (1);

jayq.core.fade_out.cljs$lang$applyTo = (function (seq43733){
var G__43734 = cljs.core.first.call(null,seq43733);
var seq43733__$1 = cljs.core.next.call(null,seq43733);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic(G__43734,seq43733__$1);
});

jayq.core.fade_in = (function jayq$core$fade_in(var_args){
var args__37884__auto__ = [];
var len__37877__auto___43748 = arguments.length;
var i__37878__auto___43749 = (0);
while(true){
if((i__37878__auto___43749 < len__37877__auto___43748)){
args__37884__auto__.push((arguments[i__37878__auto___43749]));

var G__43750 = (i__37878__auto___43749 + (1));
i__37878__auto___43749 = G__43750;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43744){
var vec__43745 = p__43744;
var speed = cljs.core.nth.call(null,vec__43745,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43745,(1),null);
return $elem.fadeIn(speed,on_finish);
});

jayq.core.fade_in.cljs$lang$maxFixedArity = (1);

jayq.core.fade_in.cljs$lang$applyTo = (function (seq43742){
var G__43743 = cljs.core.first.call(null,seq43742);
var seq43742__$1 = cljs.core.next.call(null,seq43742);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic(G__43743,seq43742__$1);
});

jayq.core.slide_up = (function jayq$core$slide_up(var_args){
var args__37884__auto__ = [];
var len__37877__auto___43757 = arguments.length;
var i__37878__auto___43758 = (0);
while(true){
if((i__37878__auto___43758 < len__37877__auto___43757)){
args__37884__auto__.push((arguments[i__37878__auto___43758]));

var G__43759 = (i__37878__auto___43758 + (1));
i__37878__auto___43758 = G__43759;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43753){
var vec__43754 = p__43753;
var speed = cljs.core.nth.call(null,vec__43754,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43754,(1),null);
return $elem.slideUp(speed,on_finish);
});

jayq.core.slide_up.cljs$lang$maxFixedArity = (1);

jayq.core.slide_up.cljs$lang$applyTo = (function (seq43751){
var G__43752 = cljs.core.first.call(null,seq43751);
var seq43751__$1 = cljs.core.next.call(null,seq43751);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic(G__43752,seq43751__$1);
});

jayq.core.slide_down = (function jayq$core$slide_down(var_args){
var args__37884__auto__ = [];
var len__37877__auto___43766 = arguments.length;
var i__37878__auto___43767 = (0);
while(true){
if((i__37878__auto___43767 < len__37877__auto___43766)){
args__37884__auto__.push((arguments[i__37878__auto___43767]));

var G__43768 = (i__37878__auto___43767 + (1));
i__37878__auto___43767 = G__43768;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43762){
var vec__43763 = p__43762;
var speed = cljs.core.nth.call(null,vec__43763,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43763,(1),null);
return $elem.slideDown(speed,on_finish);
});

jayq.core.slide_down.cljs$lang$maxFixedArity = (1);

jayq.core.slide_down.cljs$lang$applyTo = (function (seq43760){
var G__43761 = cljs.core.first.call(null,seq43760);
var seq43760__$1 = cljs.core.next.call(null,seq43760);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic(G__43761,seq43760__$1);
});

jayq.core.siblings = (function jayq$core$siblings(var_args){
var args43769 = [];
var len__37877__auto___43772 = arguments.length;
var i__37878__auto___43773 = (0);
while(true){
if((i__37878__auto___43773 < len__37877__auto___43772)){
args43769.push((arguments[i__37878__auto___43773]));

var G__43774 = (i__37878__auto___43773 + (1));
i__37878__auto___43773 = G__43774;
continue;
} else {
}
break;
}

var G__43771 = args43769.length;
switch (G__43771) {
case 1:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43769.length)].join('')));

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
var args43776 = [];
var len__37877__auto___43779 = arguments.length;
var i__37878__auto___43780 = (0);
while(true){
if((i__37878__auto___43780 < len__37877__auto___43779)){
args43776.push((arguments[i__37878__auto___43780]));

var G__43781 = (i__37878__auto___43780 + (1));
i__37878__auto___43780 = G__43781;
continue;
} else {
}
break;
}

var G__43778 = args43776.length;
switch (G__43778) {
case 1:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43776.length)].join('')));

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
var args43783 = [];
var len__37877__auto___43786 = arguments.length;
var i__37878__auto___43787 = (0);
while(true){
if((i__37878__auto___43787 < len__37877__auto___43786)){
args43783.push((arguments[i__37878__auto___43787]));

var G__43788 = (i__37878__auto___43787 + (1));
i__37878__auto___43787 = G__43788;
continue;
} else {
}
break;
}

var G__43785 = args43783.length;
switch (G__43785) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43783.length)].join('')));

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
var args43790 = [];
var len__37877__auto___43793 = arguments.length;
var i__37878__auto___43794 = (0);
while(true){
if((i__37878__auto___43794 < len__37877__auto___43793)){
args43790.push((arguments[i__37878__auto___43794]));

var G__43795 = (i__37878__auto___43794 + (1));
i__37878__auto___43794 = G__43795;
continue;
} else {
}
break;
}

var G__43792 = args43790.length;
switch (G__43792) {
case 2:
return jayq.core.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43790.length)].join('')));

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
var args43797 = [];
var len__37877__auto___43800 = arguments.length;
var i__37878__auto___43801 = (0);
while(true){
if((i__37878__auto___43801 < len__37877__auto___43800)){
args43797.push((arguments[i__37878__auto___43801]));

var G__43802 = (i__37878__auto___43801 + (1));
i__37878__auto___43801 = G__43802;
continue;
} else {
}
break;
}

var G__43799 = args43797.length;
switch (G__43799) {
case 1:
return jayq.core.next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43797.length)].join('')));

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
var args43804 = [];
var len__37877__auto___43807 = arguments.length;
var i__37878__auto___43808 = (0);
while(true){
if((i__37878__auto___43808 < len__37877__auto___43807)){
args43804.push((arguments[i__37878__auto___43808]));

var G__43809 = (i__37878__auto___43808 + (1));
i__37878__auto___43808 = G__43809;
continue;
} else {
}
break;
}

var G__43806 = args43804.length;
switch (G__43806) {
case 1:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43804.length)].join('')));

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
var args43811 = [];
var len__37877__auto___43814 = arguments.length;
var i__37878__auto___43815 = (0);
while(true){
if((i__37878__auto___43815 < len__37877__auto___43814)){
args43811.push((arguments[i__37878__auto___43815]));

var G__43816 = (i__37878__auto___43815 + (1));
i__37878__auto___43815 = G__43816;
continue;
} else {
}
break;
}

var G__43813 = args43811.length;
switch (G__43813) {
case 1:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43811.length)].join('')));

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
var args43818 = [];
var len__37877__auto___43821 = arguments.length;
var i__37878__auto___43822 = (0);
while(true){
if((i__37878__auto___43822 < len__37877__auto___43821)){
args43818.push((arguments[i__37878__auto___43822]));

var G__43823 = (i__37878__auto___43822 + (1));
i__37878__auto___43822 = G__43823;
continue;
} else {
}
break;
}

var G__43820 = args43818.length;
switch (G__43820) {
case 1:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43818.length)].join('')));

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
var args43825 = [];
var len__37877__auto___43828 = arguments.length;
var i__37878__auto___43829 = (0);
while(true){
if((i__37878__auto___43829 < len__37877__auto___43828)){
args43825.push((arguments[i__37878__auto___43829]));

var G__43830 = (i__37878__auto___43829 + (1));
i__37878__auto___43829 = G__43830;
continue;
} else {
}
break;
}

var G__43827 = args43825.length;
switch (G__43827) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43825.length)].join('')));

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
var args43832 = [];
var len__37877__auto___43835 = arguments.length;
var i__37878__auto___43836 = (0);
while(true){
if((i__37878__auto___43836 < len__37877__auto___43835)){
args43832.push((arguments[i__37878__auto___43836]));

var G__43837 = (i__37878__auto___43836 + (1));
i__37878__auto___43836 = G__43837;
continue;
} else {
}
break;
}

var G__43834 = args43832.length;
switch (G__43834) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43832.length)].join('')));

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
var len__37877__auto___43846 = arguments.length;
var i__37878__auto___43847 = (0);
while(true){
if((i__37878__auto___43847 < len__37877__auto___43846)){
args__37884__auto__.push((arguments[i__37878__auto___43847]));

var G__43848 = (i__37878__auto___43847 + (1));
i__37878__auto___43847 = G__43848;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((2) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((2)),(0),null)):null);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37885__auto__);
});

jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,selector,p__43842){
var vec__43843 = p__43842;
var context = cljs.core.nth.call(null,vec__43843,(0),null);
return $elem.closest(jayq.core.__GT_selector.call(null,selector),context);
});

jayq.core.closest.cljs$lang$maxFixedArity = (2);

jayq.core.closest.cljs$lang$applyTo = (function (seq43839){
var G__43840 = cljs.core.first.call(null,seq43839);
var seq43839__$1 = cljs.core.next.call(null,seq43839);
var G__43841 = cljs.core.first.call(null,seq43839__$1);
var seq43839__$2 = cljs.core.next.call(null,seq43839__$1);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic(G__43840,G__43841,seq43839__$2);
});

jayq.core.clone = (function jayq$core$clone($elem){
return $elem.clone();
});
jayq.core.html = (function jayq$core$html(var_args){
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
case 2:
return jayq.core.html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43849.length)].join('')));

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
case 2:
return jayq.core.val.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.val.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43856.length)].join('')));

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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43863.length)].join('')));

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
case 2:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43870.length)].join('')));

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
jayq.core.preprocess_request = (function jayq$core$preprocess_request(p__43879){
var map__43882 = p__43879;
var map__43882__$1 = ((((!((map__43882 == null)))?((((map__43882.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43882.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43882):map__43882);
var request = map__43882__$1;
var data = cljs.core.get.call(null,map__43882__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var contentType = cljs.core.get.call(null,map__43882__$1,new cljs.core.Keyword(null,"contentType","contentType",-1462509576));
var ct = jayq.core.__GT_content_type.call(null,contentType);
return ((function (ct,map__43882,map__43882__$1,request,data,contentType){
return (function (p1__43878_SHARP_){
if(cljs.core.truth_((function (){var and__36790__auto__ = ct;
if(cljs.core.truth_(and__36790__auto__)){
return jayq.core.clj_content_type_QMARK_.call(null,ct);
} else {
return and__36790__auto__;
}
})())){
return cljs.core.assoc.call(null,p1__43878_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.pr_str.call(null,data));
} else {
return p1__43878_SHARP_;
}
});})(ct,map__43882,map__43882__$1,request,data,contentType))
.call(null,((function (ct,map__43882,map__43882__$1,request,data,contentType){
return (function (p1__43877_SHARP_){
if(cljs.core.truth_(ct)){
return cljs.core.assoc.call(null,p1__43877_SHARP_,new cljs.core.Keyword(null,"contentType","contentType",-1462509576),ct);
} else {
return p1__43877_SHARP_;
}
});})(ct,map__43882,map__43882__$1,request,data,contentType))
.call(null,request));
});
jayq.core.__GT_ajax_settings = (function jayq$core$__GT_ajax_settings(request){
return cljs.core.clj__GT_js.call(null,jayq.core.preprocess_request.call(null,request));
});
jayq.core.ajax = (function jayq$core$ajax(var_args){
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
case 2:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43884.length)].join('')));

}
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$2 = (function (url,settings){
return jQuery.ajax(url,jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$1 = (function (settings){
return jQuery.ajax(jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$lang$maxFixedArity = 2;

jayq.core.xhr = (function jayq$core$xhr(p__43891,content,callback){
var vec__43895 = p__43891;
var method = cljs.core.nth.call(null,vec__43895,(0),null);
var uri = cljs.core.nth.call(null,vec__43895,(1),null);
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
var len__37877__auto___43905 = arguments.length;
var i__37878__auto___43906 = (0);
while(true){
if((i__37878__auto___43906 < len__37877__auto___43905)){
args__37884__auto__.push((arguments[i__37878__auto___43906]));

var G__43907 = (i__37878__auto___43906 + (1));
i__37878__auto___43906 = G__43907;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((2) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((2)),(0),null)):null);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37885__auto__);
});

jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,ev,p__43901){
var vec__43902 = p__43901;
var func = cljs.core.nth.call(null,vec__43902,(0),null);
return $elem.unbind(cljs.core.name.call(null,ev),func);
});

jayq.core.unbind.cljs$lang$maxFixedArity = (2);

jayq.core.unbind.cljs$lang$applyTo = (function (seq43898){
var G__43899 = cljs.core.first.call(null,seq43898);
var seq43898__$1 = cljs.core.next.call(null,seq43898);
var G__43900 = cljs.core.first.call(null,seq43898__$1);
var seq43898__$2 = cljs.core.next.call(null,seq43898__$1);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic(G__43899,G__43900,seq43898__$2);
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
var len__37877__auto___43915 = arguments.length;
var i__37878__auto___43916 = (0);
while(true){
if((i__37878__auto___43916 < len__37877__auto___43915)){
args__37884__auto__.push((arguments[i__37878__auto___43916]));

var G__43917 = (i__37878__auto___43916 + (1));
i__37878__auto___43916 = G__43917;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((2) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((2)),(0),null)):null);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37885__auto__);
});

jayq.core.on.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__43911){
var vec__43912 = p__43911;
var sel = cljs.core.nth.call(null,vec__43912,(0),null);
var data = cljs.core.nth.call(null,vec__43912,(1),null);
var handler = cljs.core.nth.call(null,vec__43912,(2),null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.on.cljs$lang$maxFixedArity = (2);

jayq.core.on.cljs$lang$applyTo = (function (seq43908){
var G__43909 = cljs.core.first.call(null,seq43908);
var seq43908__$1 = cljs.core.next.call(null,seq43908);
var G__43910 = cljs.core.first.call(null,seq43908__$1);
var seq43908__$2 = cljs.core.next.call(null,seq43908__$1);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic(G__43909,G__43910,seq43908__$2);
});

jayq.core.one = (function jayq$core$one(var_args){
var args__37884__auto__ = [];
var len__37877__auto___43925 = arguments.length;
var i__37878__auto___43926 = (0);
while(true){
if((i__37878__auto___43926 < len__37877__auto___43925)){
args__37884__auto__.push((arguments[i__37878__auto___43926]));

var G__43927 = (i__37878__auto___43926 + (1));
i__37878__auto___43926 = G__43927;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((2) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((2)),(0),null)):null);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37885__auto__);
});

jayq.core.one.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__43921){
var vec__43922 = p__43921;
var sel = cljs.core.nth.call(null,vec__43922,(0),null);
var data = cljs.core.nth.call(null,vec__43922,(1),null);
var handler = cljs.core.nth.call(null,vec__43922,(2),null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.one.cljs$lang$maxFixedArity = (2);

jayq.core.one.cljs$lang$applyTo = (function (seq43918){
var G__43919 = cljs.core.first.call(null,seq43918);
var seq43918__$1 = cljs.core.next.call(null,seq43918);
var G__43920 = cljs.core.first.call(null,seq43918__$1);
var seq43918__$2 = cljs.core.next.call(null,seq43918__$1);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic(G__43919,G__43920,seq43918__$2);
});

jayq.core.off = (function jayq$core$off(var_args){
var args__37884__auto__ = [];
var len__37877__auto___43935 = arguments.length;
var i__37878__auto___43936 = (0);
while(true){
if((i__37878__auto___43936 < len__37877__auto___43935)){
args__37884__auto__.push((arguments[i__37878__auto___43936]));

var G__43937 = (i__37878__auto___43936 + (1));
i__37878__auto___43936 = G__43937;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((2) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((2)),(0),null)):null);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37885__auto__);
});

jayq.core.off.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__43931){
var vec__43932 = p__43931;
var sel = cljs.core.nth.call(null,vec__43932,(0),null);
var handler = cljs.core.nth.call(null,vec__43932,(1),null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),handler);
});

jayq.core.off.cljs$lang$maxFixedArity = (2);

jayq.core.off.cljs$lang$applyTo = (function (seq43928){
var G__43929 = cljs.core.first.call(null,seq43928);
var seq43928__$1 = cljs.core.next.call(null,seq43928);
var G__43930 = cljs.core.first.call(null,seq43928__$1);
var seq43928__$2 = cljs.core.next.call(null,seq43928__$1);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic(G__43929,G__43930,seq43928__$2);
});

jayq.core.prevent = (function jayq$core$prevent(e){
return e.preventDefault();
});
jayq.core.height = (function jayq$core$height(var_args){
var args43938 = [];
var len__37877__auto___43941 = arguments.length;
var i__37878__auto___43942 = (0);
while(true){
if((i__37878__auto___43942 < len__37877__auto___43941)){
args43938.push((arguments[i__37878__auto___43942]));

var G__43943 = (i__37878__auto___43942 + (1));
i__37878__auto___43942 = G__43943;
continue;
} else {
}
break;
}

var G__43940 = args43938.length;
switch (G__43940) {
case 2:
return jayq.core.height.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.height.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43938.length)].join('')));

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
var args43945 = [];
var len__37877__auto___43948 = arguments.length;
var i__37878__auto___43949 = (0);
while(true){
if((i__37878__auto___43949 < len__37877__auto___43948)){
args43945.push((arguments[i__37878__auto___43949]));

var G__43950 = (i__37878__auto___43949 + (1));
i__37878__auto___43949 = G__43950;
continue;
} else {
}
break;
}

var G__43947 = args43945.length;
switch (G__43947) {
case 2:
return jayq.core.width.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.width.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43945.length)].join('')));

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
var args43952 = [];
var len__37877__auto___43955 = arguments.length;
var i__37878__auto___43956 = (0);
while(true){
if((i__37878__auto___43956 < len__37877__auto___43955)){
args43952.push((arguments[i__37878__auto___43956]));

var G__43957 = (i__37878__auto___43956 + (1));
i__37878__auto___43956 = G__43957;
continue;
} else {
}
break;
}

var G__43954 = args43952.length;
switch (G__43954) {
case 2:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43952.length)].join('')));

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
var args43959 = [];
var len__37877__auto___43962 = arguments.length;
var i__37878__auto___43963 = (0);
while(true){
if((i__37878__auto___43963 < len__37877__auto___43962)){
args43959.push((arguments[i__37878__auto___43963]));

var G__43964 = (i__37878__auto___43963 + (1));
i__37878__auto___43963 = G__43964;
continue;
} else {
}
break;
}

var G__43961 = args43959.length;
switch (G__43961) {
case 1:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43959.length)].join('')));

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
var args43966 = [];
var len__37877__auto___43969 = arguments.length;
var i__37878__auto___43970 = (0);
while(true){
if((i__37878__auto___43970 < len__37877__auto___43969)){
args43966.push((arguments[i__37878__auto___43970]));

var G__43971 = (i__37878__auto___43970 + (1));
i__37878__auto___43970 = G__43971;
continue;
} else {
}
break;
}

var G__43968 = args43966.length;
switch (G__43968) {
case 1:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43966.length)].join('')));

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
var args43973 = [];
var len__37877__auto___43976 = arguments.length;
var i__37878__auto___43977 = (0);
while(true){
if((i__37878__auto___43977 < len__37877__auto___43976)){
args43973.push((arguments[i__37878__auto___43977]));

var G__43978 = (i__37878__auto___43977 + (1));
i__37878__auto___43977 = G__43978;
continue;
} else {
}
break;
}

var G__43975 = args43973.length;
switch (G__43975) {
case 3:
return jayq.core.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.then.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43973.length)].join('')));

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
var len__37877__auto___43982 = arguments.length;
var i__37878__auto___43983 = (0);
while(true){
if((i__37878__auto___43983 < len__37877__auto___43982)){
args__37884__auto__.push((arguments[i__37878__auto___43983]));

var G__43984 = (i__37878__auto___43983 + (1));
i__37878__auto___43983 = G__43984;
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

jayq.core.done.cljs$lang$applyTo = (function (seq43980){
var G__43981 = cljs.core.first.call(null,seq43980);
var seq43980__$1 = cljs.core.next.call(null,seq43980);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic(G__43981,seq43980__$1);
});

jayq.core.fail = (function jayq$core$fail(var_args){
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

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.fail.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.fail.cljs$lang$maxFixedArity = (1);

jayq.core.fail.cljs$lang$applyTo = (function (seq43985){
var G__43986 = cljs.core.first.call(null,seq43985);
var seq43985__$1 = cljs.core.next.call(null,seq43985);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__43986,seq43985__$1);
});

jayq.core.progress = (function jayq$core$progress(deferred,fns_args){
return deferred.progress(cljs.core.clj__GT_js.call(null,fns_args));
});
jayq.core.promise = (function jayq$core$promise(var_args){
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43990.length)].join('')));

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
var len__37877__auto___43999 = arguments.length;
var i__37878__auto___44000 = (0);
while(true){
if((i__37878__auto___44000 < len__37877__auto___43999)){
args__37884__auto__.push((arguments[i__37878__auto___44000]));

var G__44001 = (i__37878__auto___44000 + (1));
i__37878__auto___44000 = G__44001;
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

jayq.core.always.cljs$lang$applyTo = (function (seq43997){
var G__43998 = cljs.core.first.call(null,seq43997);
var seq43997__$1 = cljs.core.next.call(null,seq43997);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic(G__43998,seq43997__$1);
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
var args44002 = [];
var len__37877__auto___44005 = arguments.length;
var i__37878__auto___44006 = (0);
while(true){
if((i__37878__auto___44006 < len__37877__auto___44005)){
args44002.push((arguments[i__37878__auto___44006]));

var G__44007 = (i__37878__auto___44006 + (1));
i__37878__auto___44006 = G__44007;
continue;
} else {
}
break;
}

var G__44004 = args44002.length;
switch (G__44004) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44002.length)].join('')));

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