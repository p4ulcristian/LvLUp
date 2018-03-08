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
var args43612 = [];
var len__37851__auto___43615 = arguments.length;
var i__37852__auto___43616 = (0);
while(true){
if((i__37852__auto___43616 < len__37851__auto___43615)){
args43612.push((arguments[i__37852__auto___43616]));

var G__43617 = (i__37852__auto___43616 + (1));
i__37852__auto___43616 = G__43617;
continue;
} else {
}
break;
}

var G__43614 = args43612.length;
switch (G__43614) {
case 1:
return jayq.core.$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43612.length)].join('')));

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
var or__36776__auto__ = this$__$1.slice(k,(k + (1)));
if(cljs.core.truth_(or__36776__auto__)){
return or__36776__auto__;
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
var G__43620 = null;
var G__43620__2 = (function (self__,k){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__43620__3 = (function (self__,k,not_found){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__43620 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__43620__2.call(this,self__,k);
case 3:
return G__43620__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43620.cljs$core$IFn$_invoke$arity$2 = G__43620__2;
G__43620.cljs$core$IFn$_invoke$arity$3 = G__43620__3;
return G__43620;
})()
;

jQuery.prototype.apply = (function (self__,args43619){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args43619)));
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
var args__37858__auto__ = [];
var len__37851__auto___43628 = arguments.length;
var i__37852__auto___43629 = (0);
while(true){
if((i__37852__auto___43629 < len__37851__auto___43628)){
args__37858__auto__.push((arguments[i__37852__auto___43629]));

var G__43630 = (i__37852__auto___43629 + (1));
i__37852__auto___43629 = G__43630;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((2) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((2)),(0),null)):null);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37859__auto__);
});

jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,props,p__43624){
var vec__43625 = p__43624;
var speed = cljs.core.nth.call(null,vec__43625,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43625,(1),null);
return $elem.animate(cljs.core.clj__GT_js.call(null,props),speed,on_finish);
});

jayq.core.anim.cljs$lang$maxFixedArity = (2);

jayq.core.anim.cljs$lang$applyTo = (function (seq43621){
var G__43622 = cljs.core.first.call(null,seq43621);
var seq43621__$1 = cljs.core.next.call(null,seq43621);
var G__43623 = cljs.core.first.call(null,seq43621__$1);
var seq43621__$2 = cljs.core.next.call(null,seq43621__$1);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic(G__43622,G__43623,seq43621__$2);
});

jayq.core.text = (function jayq$core$text(var_args){
var args43631 = [];
var len__37851__auto___43634 = arguments.length;
var i__37852__auto___43635 = (0);
while(true){
if((i__37852__auto___43635 < len__37851__auto___43634)){
args43631.push((arguments[i__37852__auto___43635]));

var G__43636 = (i__37852__auto___43635 + (1));
i__37852__auto___43635 = G__43636;
continue;
} else {
}
break;
}

var G__43633 = args43631.length;
switch (G__43633) {
case 1:
return jayq.core.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43631.length)].join('')));

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
var args43638 = [];
var len__37851__auto___43641 = arguments.length;
var i__37852__auto___43642 = (0);
while(true){
if((i__37852__auto___43642 < len__37851__auto___43641)){
args43638.push((arguments[i__37852__auto___43642]));

var G__43643 = (i__37852__auto___43642 + (1));
i__37852__auto___43642 = G__43643;
continue;
} else {
}
break;
}

var G__43640 = args43638.length;
switch (G__43640) {
case 2:
return jayq.core.css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.css.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43638.length)].join('')));

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
var args43645 = [];
var len__37851__auto___43648 = arguments.length;
var i__37852__auto___43649 = (0);
while(true){
if((i__37852__auto___43649 < len__37851__auto___43648)){
args43645.push((arguments[i__37852__auto___43649]));

var G__43650 = (i__37852__auto___43649 + (1));
i__37852__auto___43649 = G__43650;
continue;
} else {
}
break;
}

var G__43647 = args43645.length;
switch (G__43647) {
case 3:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43645.length)].join('')));

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
var args43652 = [];
var len__37851__auto___43655 = arguments.length;
var i__37852__auto___43656 = (0);
while(true){
if((i__37852__auto___43656 < len__37851__auto___43655)){
args43652.push((arguments[i__37852__auto___43656]));

var G__43657 = (i__37852__auto___43656 + (1));
i__37852__auto___43656 = G__43657;
continue;
} else {
}
break;
}

var G__43654 = args43652.length;
switch (G__43654) {
case 3:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43652.length)].join('')));

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
var args43659 = [];
var len__37851__auto___43662 = arguments.length;
var i__37852__auto___43663 = (0);
while(true){
if((i__37852__auto___43663 < len__37851__auto___43662)){
args43659.push((arguments[i__37852__auto___43663]));

var G__43664 = (i__37852__auto___43663 + (1));
i__37852__auto___43663 = G__43664;
continue;
} else {
}
break;
}

var G__43661 = args43659.length;
switch (G__43661) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43659.length)].join('')));

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
var args43666 = [];
var len__37851__auto___43669 = arguments.length;
var i__37852__auto___43670 = (0);
while(true){
if((i__37852__auto___43670 < len__37851__auto___43669)){
args43666.push((arguments[i__37852__auto___43670]));

var G__43671 = (i__37852__auto___43670 + (1));
i__37852__auto___43670 = G__43671;
continue;
} else {
}
break;
}

var G__43668 = args43666.length;
switch (G__43668) {
case 1:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43666.length)].join('')));

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
var args43673 = [];
var len__37851__auto___43676 = arguments.length;
var i__37852__auto___43677 = (0);
while(true){
if((i__37852__auto___43677 < len__37851__auto___43676)){
args43673.push((arguments[i__37852__auto___43677]));

var G__43678 = (i__37852__auto___43677 + (1));
i__37852__auto___43677 = G__43678;
continue;
} else {
}
break;
}

var G__43675 = args43673.length;
switch (G__43675) {
case 2:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43673.length)].join('')));

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
var args__37858__auto__ = [];
var len__37851__auto___43686 = arguments.length;
var i__37852__auto___43687 = (0);
while(true){
if((i__37852__auto___43687 < len__37851__auto___43686)){
args__37858__auto__.push((arguments[i__37852__auto___43687]));

var G__43688 = (i__37852__auto___43687 + (1));
i__37852__auto___43687 = G__43688;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((1) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((1)),(0),null)):null);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37859__auto__);
});

jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43682){
var vec__43683 = p__43682;
var speed = cljs.core.nth.call(null,vec__43683,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43683,(1),null);
return $elem.hide(speed,on_finish);
});

jayq.core.hide.cljs$lang$maxFixedArity = (1);

jayq.core.hide.cljs$lang$applyTo = (function (seq43680){
var G__43681 = cljs.core.first.call(null,seq43680);
var seq43680__$1 = cljs.core.next.call(null,seq43680);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic(G__43681,seq43680__$1);
});

jayq.core.show = (function jayq$core$show(var_args){
var args__37858__auto__ = [];
var len__37851__auto___43695 = arguments.length;
var i__37852__auto___43696 = (0);
while(true){
if((i__37852__auto___43696 < len__37851__auto___43695)){
args__37858__auto__.push((arguments[i__37852__auto___43696]));

var G__43697 = (i__37852__auto___43696 + (1));
i__37852__auto___43696 = G__43697;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((1) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((1)),(0),null)):null);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37859__auto__);
});

jayq.core.show.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43691){
var vec__43692 = p__43691;
var speed = cljs.core.nth.call(null,vec__43692,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43692,(1),null);
return $elem.show(speed,on_finish);
});

jayq.core.show.cljs$lang$maxFixedArity = (1);

jayq.core.show.cljs$lang$applyTo = (function (seq43689){
var G__43690 = cljs.core.first.call(null,seq43689);
var seq43689__$1 = cljs.core.next.call(null,seq43689);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic(G__43690,seq43689__$1);
});

jayq.core.toggle = (function jayq$core$toggle(var_args){
var args__37858__auto__ = [];
var len__37851__auto___43704 = arguments.length;
var i__37852__auto___43705 = (0);
while(true){
if((i__37852__auto___43705 < len__37851__auto___43704)){
args__37858__auto__.push((arguments[i__37852__auto___43705]));

var G__43706 = (i__37852__auto___43705 + (1));
i__37852__auto___43705 = G__43706;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((1) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((1)),(0),null)):null);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37859__auto__);
});

jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43700){
var vec__43701 = p__43700;
var speed = cljs.core.nth.call(null,vec__43701,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43701,(1),null);
return $elem.toggle(speed,on_finish);
});

jayq.core.toggle.cljs$lang$maxFixedArity = (1);

jayq.core.toggle.cljs$lang$applyTo = (function (seq43698){
var G__43699 = cljs.core.first.call(null,seq43698);
var seq43698__$1 = cljs.core.next.call(null,seq43698);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic(G__43699,seq43698__$1);
});

jayq.core.fade_out = (function jayq$core$fade_out(var_args){
var args__37858__auto__ = [];
var len__37851__auto___43713 = arguments.length;
var i__37852__auto___43714 = (0);
while(true){
if((i__37852__auto___43714 < len__37851__auto___43713)){
args__37858__auto__.push((arguments[i__37852__auto___43714]));

var G__43715 = (i__37852__auto___43714 + (1));
i__37852__auto___43714 = G__43715;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((1) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((1)),(0),null)):null);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37859__auto__);
});

jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43709){
var vec__43710 = p__43709;
var speed = cljs.core.nth.call(null,vec__43710,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43710,(1),null);
return $elem.fadeOut(speed,on_finish);
});

jayq.core.fade_out.cljs$lang$maxFixedArity = (1);

jayq.core.fade_out.cljs$lang$applyTo = (function (seq43707){
var G__43708 = cljs.core.first.call(null,seq43707);
var seq43707__$1 = cljs.core.next.call(null,seq43707);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic(G__43708,seq43707__$1);
});

jayq.core.fade_in = (function jayq$core$fade_in(var_args){
var args__37858__auto__ = [];
var len__37851__auto___43722 = arguments.length;
var i__37852__auto___43723 = (0);
while(true){
if((i__37852__auto___43723 < len__37851__auto___43722)){
args__37858__auto__.push((arguments[i__37852__auto___43723]));

var G__43724 = (i__37852__auto___43723 + (1));
i__37852__auto___43723 = G__43724;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((1) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((1)),(0),null)):null);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37859__auto__);
});

jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43718){
var vec__43719 = p__43718;
var speed = cljs.core.nth.call(null,vec__43719,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43719,(1),null);
return $elem.fadeIn(speed,on_finish);
});

jayq.core.fade_in.cljs$lang$maxFixedArity = (1);

jayq.core.fade_in.cljs$lang$applyTo = (function (seq43716){
var G__43717 = cljs.core.first.call(null,seq43716);
var seq43716__$1 = cljs.core.next.call(null,seq43716);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic(G__43717,seq43716__$1);
});

jayq.core.slide_up = (function jayq$core$slide_up(var_args){
var args__37858__auto__ = [];
var len__37851__auto___43731 = arguments.length;
var i__37852__auto___43732 = (0);
while(true){
if((i__37852__auto___43732 < len__37851__auto___43731)){
args__37858__auto__.push((arguments[i__37852__auto___43732]));

var G__43733 = (i__37852__auto___43732 + (1));
i__37852__auto___43732 = G__43733;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((1) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((1)),(0),null)):null);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37859__auto__);
});

jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43727){
var vec__43728 = p__43727;
var speed = cljs.core.nth.call(null,vec__43728,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43728,(1),null);
return $elem.slideUp(speed,on_finish);
});

jayq.core.slide_up.cljs$lang$maxFixedArity = (1);

jayq.core.slide_up.cljs$lang$applyTo = (function (seq43725){
var G__43726 = cljs.core.first.call(null,seq43725);
var seq43725__$1 = cljs.core.next.call(null,seq43725);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic(G__43726,seq43725__$1);
});

jayq.core.slide_down = (function jayq$core$slide_down(var_args){
var args__37858__auto__ = [];
var len__37851__auto___43740 = arguments.length;
var i__37852__auto___43741 = (0);
while(true){
if((i__37852__auto___43741 < len__37851__auto___43740)){
args__37858__auto__.push((arguments[i__37852__auto___43741]));

var G__43742 = (i__37852__auto___43741 + (1));
i__37852__auto___43741 = G__43742;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((1) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((1)),(0),null)):null);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37859__auto__);
});

jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43736){
var vec__43737 = p__43736;
var speed = cljs.core.nth.call(null,vec__43737,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43737,(1),null);
return $elem.slideDown(speed,on_finish);
});

jayq.core.slide_down.cljs$lang$maxFixedArity = (1);

jayq.core.slide_down.cljs$lang$applyTo = (function (seq43734){
var G__43735 = cljs.core.first.call(null,seq43734);
var seq43734__$1 = cljs.core.next.call(null,seq43734);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic(G__43735,seq43734__$1);
});

jayq.core.siblings = (function jayq$core$siblings(var_args){
var args43743 = [];
var len__37851__auto___43746 = arguments.length;
var i__37852__auto___43747 = (0);
while(true){
if((i__37852__auto___43747 < len__37851__auto___43746)){
args43743.push((arguments[i__37852__auto___43747]));

var G__43748 = (i__37852__auto___43747 + (1));
i__37852__auto___43747 = G__43748;
continue;
} else {
}
break;
}

var G__43745 = args43743.length;
switch (G__43745) {
case 1:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43743.length)].join('')));

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
var args43750 = [];
var len__37851__auto___43753 = arguments.length;
var i__37852__auto___43754 = (0);
while(true){
if((i__37852__auto___43754 < len__37851__auto___43753)){
args43750.push((arguments[i__37852__auto___43754]));

var G__43755 = (i__37852__auto___43754 + (1));
i__37852__auto___43754 = G__43755;
continue;
} else {
}
break;
}

var G__43752 = args43750.length;
switch (G__43752) {
case 1:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43750.length)].join('')));

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
var args43757 = [];
var len__37851__auto___43760 = arguments.length;
var i__37852__auto___43761 = (0);
while(true){
if((i__37852__auto___43761 < len__37851__auto___43760)){
args43757.push((arguments[i__37852__auto___43761]));

var G__43762 = (i__37852__auto___43761 + (1));
i__37852__auto___43761 = G__43762;
continue;
} else {
}
break;
}

var G__43759 = args43757.length;
switch (G__43759) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43757.length)].join('')));

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
var args43764 = [];
var len__37851__auto___43767 = arguments.length;
var i__37852__auto___43768 = (0);
while(true){
if((i__37852__auto___43768 < len__37851__auto___43767)){
args43764.push((arguments[i__37852__auto___43768]));

var G__43769 = (i__37852__auto___43768 + (1));
i__37852__auto___43768 = G__43769;
continue;
} else {
}
break;
}

var G__43766 = args43764.length;
switch (G__43766) {
case 2:
return jayq.core.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43764.length)].join('')));

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
var args43771 = [];
var len__37851__auto___43774 = arguments.length;
var i__37852__auto___43775 = (0);
while(true){
if((i__37852__auto___43775 < len__37851__auto___43774)){
args43771.push((arguments[i__37852__auto___43775]));

var G__43776 = (i__37852__auto___43775 + (1));
i__37852__auto___43775 = G__43776;
continue;
} else {
}
break;
}

var G__43773 = args43771.length;
switch (G__43773) {
case 1:
return jayq.core.next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43771.length)].join('')));

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
var args43778 = [];
var len__37851__auto___43781 = arguments.length;
var i__37852__auto___43782 = (0);
while(true){
if((i__37852__auto___43782 < len__37851__auto___43781)){
args43778.push((arguments[i__37852__auto___43782]));

var G__43783 = (i__37852__auto___43782 + (1));
i__37852__auto___43782 = G__43783;
continue;
} else {
}
break;
}

var G__43780 = args43778.length;
switch (G__43780) {
case 1:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43778.length)].join('')));

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
var args43785 = [];
var len__37851__auto___43788 = arguments.length;
var i__37852__auto___43789 = (0);
while(true){
if((i__37852__auto___43789 < len__37851__auto___43788)){
args43785.push((arguments[i__37852__auto___43789]));

var G__43790 = (i__37852__auto___43789 + (1));
i__37852__auto___43789 = G__43790;
continue;
} else {
}
break;
}

var G__43787 = args43785.length;
switch (G__43787) {
case 1:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43785.length)].join('')));

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
var args43792 = [];
var len__37851__auto___43795 = arguments.length;
var i__37852__auto___43796 = (0);
while(true){
if((i__37852__auto___43796 < len__37851__auto___43795)){
args43792.push((arguments[i__37852__auto___43796]));

var G__43797 = (i__37852__auto___43796 + (1));
i__37852__auto___43796 = G__43797;
continue;
} else {
}
break;
}

var G__43794 = args43792.length;
switch (G__43794) {
case 1:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43792.length)].join('')));

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
var args43799 = [];
var len__37851__auto___43802 = arguments.length;
var i__37852__auto___43803 = (0);
while(true){
if((i__37852__auto___43803 < len__37851__auto___43802)){
args43799.push((arguments[i__37852__auto___43803]));

var G__43804 = (i__37852__auto___43803 + (1));
i__37852__auto___43803 = G__43804;
continue;
} else {
}
break;
}

var G__43801 = args43799.length;
switch (G__43801) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43799.length)].join('')));

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
var args43806 = [];
var len__37851__auto___43809 = arguments.length;
var i__37852__auto___43810 = (0);
while(true){
if((i__37852__auto___43810 < len__37851__auto___43809)){
args43806.push((arguments[i__37852__auto___43810]));

var G__43811 = (i__37852__auto___43810 + (1));
i__37852__auto___43810 = G__43811;
continue;
} else {
}
break;
}

var G__43808 = args43806.length;
switch (G__43808) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43806.length)].join('')));

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
var args__37858__auto__ = [];
var len__37851__auto___43820 = arguments.length;
var i__37852__auto___43821 = (0);
while(true){
if((i__37852__auto___43821 < len__37851__auto___43820)){
args__37858__auto__.push((arguments[i__37852__auto___43821]));

var G__43822 = (i__37852__auto___43821 + (1));
i__37852__auto___43821 = G__43822;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((2) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((2)),(0),null)):null);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37859__auto__);
});

jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,selector,p__43816){
var vec__43817 = p__43816;
var context = cljs.core.nth.call(null,vec__43817,(0),null);
return $elem.closest(jayq.core.__GT_selector.call(null,selector),context);
});

jayq.core.closest.cljs$lang$maxFixedArity = (2);

jayq.core.closest.cljs$lang$applyTo = (function (seq43813){
var G__43814 = cljs.core.first.call(null,seq43813);
var seq43813__$1 = cljs.core.next.call(null,seq43813);
var G__43815 = cljs.core.first.call(null,seq43813__$1);
var seq43813__$2 = cljs.core.next.call(null,seq43813__$1);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic(G__43814,G__43815,seq43813__$2);
});

jayq.core.clone = (function jayq$core$clone($elem){
return $elem.clone();
});
jayq.core.html = (function jayq$core$html(var_args){
var args43823 = [];
var len__37851__auto___43826 = arguments.length;
var i__37852__auto___43827 = (0);
while(true){
if((i__37852__auto___43827 < len__37851__auto___43826)){
args43823.push((arguments[i__37852__auto___43827]));

var G__43828 = (i__37852__auto___43827 + (1));
i__37852__auto___43827 = G__43828;
continue;
} else {
}
break;
}

var G__43825 = args43823.length;
switch (G__43825) {
case 2:
return jayq.core.html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43823.length)].join('')));

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
var args43830 = [];
var len__37851__auto___43833 = arguments.length;
var i__37852__auto___43834 = (0);
while(true){
if((i__37852__auto___43834 < len__37851__auto___43833)){
args43830.push((arguments[i__37852__auto___43834]));

var G__43835 = (i__37852__auto___43834 + (1));
i__37852__auto___43834 = G__43835;
continue;
} else {
}
break;
}

var G__43832 = args43830.length;
switch (G__43832) {
case 2:
return jayq.core.val.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.val.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43830.length)].join('')));

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
var args43837 = [];
var len__37851__auto___43840 = arguments.length;
var i__37852__auto___43841 = (0);
while(true){
if((i__37852__auto___43841 < len__37851__auto___43840)){
args43837.push((arguments[i__37852__auto___43841]));

var G__43842 = (i__37852__auto___43841 + (1));
i__37852__auto___43841 = G__43842;
continue;
} else {
}
break;
}

var G__43839 = args43837.length;
switch (G__43839) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43837.length)].join('')));

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
var args43844 = [];
var len__37851__auto___43847 = arguments.length;
var i__37852__auto___43848 = (0);
while(true){
if((i__37852__auto___43848 < len__37851__auto___43847)){
args43844.push((arguments[i__37852__auto___43848]));

var G__43849 = (i__37852__auto___43848 + (1));
i__37852__auto___43848 = G__43849;
continue;
} else {
}
break;
}

var G__43846 = args43844.length;
switch (G__43846) {
case 2:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43844.length)].join('')));

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
jayq.core.preprocess_request = (function jayq$core$preprocess_request(p__43853){
var map__43856 = p__43853;
var map__43856__$1 = ((((!((map__43856 == null)))?((((map__43856.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43856.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43856):map__43856);
var request = map__43856__$1;
var data = cljs.core.get.call(null,map__43856__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var contentType = cljs.core.get.call(null,map__43856__$1,new cljs.core.Keyword(null,"contentType","contentType",-1462509576));
var ct = jayq.core.__GT_content_type.call(null,contentType);
return ((function (ct,map__43856,map__43856__$1,request,data,contentType){
return (function (p1__43852_SHARP_){
if(cljs.core.truth_((function (){var and__36764__auto__ = ct;
if(cljs.core.truth_(and__36764__auto__)){
return jayq.core.clj_content_type_QMARK_.call(null,ct);
} else {
return and__36764__auto__;
}
})())){
return cljs.core.assoc.call(null,p1__43852_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.pr_str.call(null,data));
} else {
return p1__43852_SHARP_;
}
});})(ct,map__43856,map__43856__$1,request,data,contentType))
.call(null,((function (ct,map__43856,map__43856__$1,request,data,contentType){
return (function (p1__43851_SHARP_){
if(cljs.core.truth_(ct)){
return cljs.core.assoc.call(null,p1__43851_SHARP_,new cljs.core.Keyword(null,"contentType","contentType",-1462509576),ct);
} else {
return p1__43851_SHARP_;
}
});})(ct,map__43856,map__43856__$1,request,data,contentType))
.call(null,request));
});
jayq.core.__GT_ajax_settings = (function jayq$core$__GT_ajax_settings(request){
return cljs.core.clj__GT_js.call(null,jayq.core.preprocess_request.call(null,request));
});
jayq.core.ajax = (function jayq$core$ajax(var_args){
var args43858 = [];
var len__37851__auto___43861 = arguments.length;
var i__37852__auto___43862 = (0);
while(true){
if((i__37852__auto___43862 < len__37851__auto___43861)){
args43858.push((arguments[i__37852__auto___43862]));

var G__43863 = (i__37852__auto___43862 + (1));
i__37852__auto___43862 = G__43863;
continue;
} else {
}
break;
}

var G__43860 = args43858.length;
switch (G__43860) {
case 2:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43858.length)].join('')));

}
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$2 = (function (url,settings){
return jQuery.ajax(url,jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$1 = (function (settings){
return jQuery.ajax(jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$lang$maxFixedArity = 2;

jayq.core.xhr = (function jayq$core$xhr(p__43865,content,callback){
var vec__43869 = p__43865;
var method = cljs.core.nth.call(null,vec__43869,(0),null);
var uri = cljs.core.nth.call(null,vec__43869,(1),null);
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
var args__37858__auto__ = [];
var len__37851__auto___43879 = arguments.length;
var i__37852__auto___43880 = (0);
while(true){
if((i__37852__auto___43880 < len__37851__auto___43879)){
args__37858__auto__.push((arguments[i__37852__auto___43880]));

var G__43881 = (i__37852__auto___43880 + (1));
i__37852__auto___43880 = G__43881;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((2) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((2)),(0),null)):null);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37859__auto__);
});

jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,ev,p__43875){
var vec__43876 = p__43875;
var func = cljs.core.nth.call(null,vec__43876,(0),null);
return $elem.unbind(cljs.core.name.call(null,ev),func);
});

jayq.core.unbind.cljs$lang$maxFixedArity = (2);

jayq.core.unbind.cljs$lang$applyTo = (function (seq43872){
var G__43873 = cljs.core.first.call(null,seq43872);
var seq43872__$1 = cljs.core.next.call(null,seq43872);
var G__43874 = cljs.core.first.call(null,seq43872__$1);
var seq43872__$2 = cljs.core.next.call(null,seq43872__$1);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic(G__43873,G__43874,seq43872__$2);
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
var args__37858__auto__ = [];
var len__37851__auto___43889 = arguments.length;
var i__37852__auto___43890 = (0);
while(true){
if((i__37852__auto___43890 < len__37851__auto___43889)){
args__37858__auto__.push((arguments[i__37852__auto___43890]));

var G__43891 = (i__37852__auto___43890 + (1));
i__37852__auto___43890 = G__43891;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((2) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((2)),(0),null)):null);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37859__auto__);
});

jayq.core.on.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__43885){
var vec__43886 = p__43885;
var sel = cljs.core.nth.call(null,vec__43886,(0),null);
var data = cljs.core.nth.call(null,vec__43886,(1),null);
var handler = cljs.core.nth.call(null,vec__43886,(2),null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.on.cljs$lang$maxFixedArity = (2);

jayq.core.on.cljs$lang$applyTo = (function (seq43882){
var G__43883 = cljs.core.first.call(null,seq43882);
var seq43882__$1 = cljs.core.next.call(null,seq43882);
var G__43884 = cljs.core.first.call(null,seq43882__$1);
var seq43882__$2 = cljs.core.next.call(null,seq43882__$1);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic(G__43883,G__43884,seq43882__$2);
});

jayq.core.one = (function jayq$core$one(var_args){
var args__37858__auto__ = [];
var len__37851__auto___43899 = arguments.length;
var i__37852__auto___43900 = (0);
while(true){
if((i__37852__auto___43900 < len__37851__auto___43899)){
args__37858__auto__.push((arguments[i__37852__auto___43900]));

var G__43901 = (i__37852__auto___43900 + (1));
i__37852__auto___43900 = G__43901;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((2) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((2)),(0),null)):null);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37859__auto__);
});

jayq.core.one.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__43895){
var vec__43896 = p__43895;
var sel = cljs.core.nth.call(null,vec__43896,(0),null);
var data = cljs.core.nth.call(null,vec__43896,(1),null);
var handler = cljs.core.nth.call(null,vec__43896,(2),null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.one.cljs$lang$maxFixedArity = (2);

jayq.core.one.cljs$lang$applyTo = (function (seq43892){
var G__43893 = cljs.core.first.call(null,seq43892);
var seq43892__$1 = cljs.core.next.call(null,seq43892);
var G__43894 = cljs.core.first.call(null,seq43892__$1);
var seq43892__$2 = cljs.core.next.call(null,seq43892__$1);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic(G__43893,G__43894,seq43892__$2);
});

jayq.core.off = (function jayq$core$off(var_args){
var args__37858__auto__ = [];
var len__37851__auto___43909 = arguments.length;
var i__37852__auto___43910 = (0);
while(true){
if((i__37852__auto___43910 < len__37851__auto___43909)){
args__37858__auto__.push((arguments[i__37852__auto___43910]));

var G__43911 = (i__37852__auto___43910 + (1));
i__37852__auto___43910 = G__43911;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((2) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((2)),(0),null)):null);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37859__auto__);
});

jayq.core.off.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__43905){
var vec__43906 = p__43905;
var sel = cljs.core.nth.call(null,vec__43906,(0),null);
var handler = cljs.core.nth.call(null,vec__43906,(1),null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),handler);
});

jayq.core.off.cljs$lang$maxFixedArity = (2);

jayq.core.off.cljs$lang$applyTo = (function (seq43902){
var G__43903 = cljs.core.first.call(null,seq43902);
var seq43902__$1 = cljs.core.next.call(null,seq43902);
var G__43904 = cljs.core.first.call(null,seq43902__$1);
var seq43902__$2 = cljs.core.next.call(null,seq43902__$1);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic(G__43903,G__43904,seq43902__$2);
});

jayq.core.prevent = (function jayq$core$prevent(e){
return e.preventDefault();
});
jayq.core.height = (function jayq$core$height(var_args){
var args43912 = [];
var len__37851__auto___43915 = arguments.length;
var i__37852__auto___43916 = (0);
while(true){
if((i__37852__auto___43916 < len__37851__auto___43915)){
args43912.push((arguments[i__37852__auto___43916]));

var G__43917 = (i__37852__auto___43916 + (1));
i__37852__auto___43916 = G__43917;
continue;
} else {
}
break;
}

var G__43914 = args43912.length;
switch (G__43914) {
case 2:
return jayq.core.height.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.height.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43912.length)].join('')));

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
var args43919 = [];
var len__37851__auto___43922 = arguments.length;
var i__37852__auto___43923 = (0);
while(true){
if((i__37852__auto___43923 < len__37851__auto___43922)){
args43919.push((arguments[i__37852__auto___43923]));

var G__43924 = (i__37852__auto___43923 + (1));
i__37852__auto___43923 = G__43924;
continue;
} else {
}
break;
}

var G__43921 = args43919.length;
switch (G__43921) {
case 2:
return jayq.core.width.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.width.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43919.length)].join('')));

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
var args43926 = [];
var len__37851__auto___43929 = arguments.length;
var i__37852__auto___43930 = (0);
while(true){
if((i__37852__auto___43930 < len__37851__auto___43929)){
args43926.push((arguments[i__37852__auto___43930]));

var G__43931 = (i__37852__auto___43930 + (1));
i__37852__auto___43930 = G__43931;
continue;
} else {
}
break;
}

var G__43928 = args43926.length;
switch (G__43928) {
case 2:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43926.length)].join('')));

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
var args43933 = [];
var len__37851__auto___43936 = arguments.length;
var i__37852__auto___43937 = (0);
while(true){
if((i__37852__auto___43937 < len__37851__auto___43936)){
args43933.push((arguments[i__37852__auto___43937]));

var G__43938 = (i__37852__auto___43937 + (1));
i__37852__auto___43937 = G__43938;
continue;
} else {
}
break;
}

var G__43935 = args43933.length;
switch (G__43935) {
case 1:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43933.length)].join('')));

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
var args43940 = [];
var len__37851__auto___43943 = arguments.length;
var i__37852__auto___43944 = (0);
while(true){
if((i__37852__auto___43944 < len__37851__auto___43943)){
args43940.push((arguments[i__37852__auto___43944]));

var G__43945 = (i__37852__auto___43944 + (1));
i__37852__auto___43944 = G__43945;
continue;
} else {
}
break;
}

var G__43942 = args43940.length;
switch (G__43942) {
case 1:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43940.length)].join('')));

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
var args43947 = [];
var len__37851__auto___43950 = arguments.length;
var i__37852__auto___43951 = (0);
while(true){
if((i__37852__auto___43951 < len__37851__auto___43950)){
args43947.push((arguments[i__37852__auto___43951]));

var G__43952 = (i__37852__auto___43951 + (1));
i__37852__auto___43951 = G__43952;
continue;
} else {
}
break;
}

var G__43949 = args43947.length;
switch (G__43949) {
case 3:
return jayq.core.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.then.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43947.length)].join('')));

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
var args__37858__auto__ = [];
var len__37851__auto___43956 = arguments.length;
var i__37852__auto___43957 = (0);
while(true){
if((i__37852__auto___43957 < len__37851__auto___43956)){
args__37858__auto__.push((arguments[i__37852__auto___43957]));

var G__43958 = (i__37852__auto___43957 + (1));
i__37852__auto___43957 = G__43958;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((1) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((1)),(0),null)):null);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37859__auto__);
});

jayq.core.done.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.done.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.done.cljs$lang$maxFixedArity = (1);

jayq.core.done.cljs$lang$applyTo = (function (seq43954){
var G__43955 = cljs.core.first.call(null,seq43954);
var seq43954__$1 = cljs.core.next.call(null,seq43954);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic(G__43955,seq43954__$1);
});

jayq.core.fail = (function jayq$core$fail(var_args){
var args__37858__auto__ = [];
var len__37851__auto___43961 = arguments.length;
var i__37852__auto___43962 = (0);
while(true){
if((i__37852__auto___43962 < len__37851__auto___43961)){
args__37858__auto__.push((arguments[i__37852__auto___43962]));

var G__43963 = (i__37852__auto___43962 + (1));
i__37852__auto___43962 = G__43963;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((1) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((1)),(0),null)):null);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37859__auto__);
});

jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.fail.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.fail.cljs$lang$maxFixedArity = (1);

jayq.core.fail.cljs$lang$applyTo = (function (seq43959){
var G__43960 = cljs.core.first.call(null,seq43959);
var seq43959__$1 = cljs.core.next.call(null,seq43959);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__43960,seq43959__$1);
});

jayq.core.progress = (function jayq$core$progress(deferred,fns_args){
return deferred.progress(cljs.core.clj__GT_js.call(null,fns_args));
});
jayq.core.promise = (function jayq$core$promise(var_args){
var args43964 = [];
var len__37851__auto___43967 = arguments.length;
var i__37852__auto___43968 = (0);
while(true){
if((i__37852__auto___43968 < len__37851__auto___43967)){
args43964.push((arguments[i__37852__auto___43968]));

var G__43969 = (i__37852__auto___43968 + (1));
i__37852__auto___43968 = G__43969;
continue;
} else {
}
break;
}

var G__43966 = args43964.length;
switch (G__43966) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43964.length)].join('')));

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
var args__37858__auto__ = [];
var len__37851__auto___43973 = arguments.length;
var i__37852__auto___43974 = (0);
while(true){
if((i__37852__auto___43974 < len__37851__auto___43973)){
args__37858__auto__.push((arguments[i__37852__auto___43974]));

var G__43975 = (i__37852__auto___43974 + (1));
i__37852__auto___43974 = G__43975;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((1) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((1)),(0),null)):null);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37859__auto__);
});

jayq.core.always.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.always.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.always.cljs$lang$maxFixedArity = (1);

jayq.core.always.cljs$lang$applyTo = (function (seq43971){
var G__43972 = cljs.core.first.call(null,seq43971);
var seq43971__$1 = cljs.core.next.call(null,seq43971);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic(G__43972,seq43971__$1);
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
var args43976 = [];
var len__37851__auto___43979 = arguments.length;
var i__37852__auto___43980 = (0);
while(true){
if((i__37852__auto___43980 < len__37851__auto___43979)){
args43976.push((arguments[i__37852__auto___43980]));

var G__43981 = (i__37852__auto___43980 + (1));
i__37852__auto___43980 = G__43981;
continue;
} else {
}
break;
}

var G__43978 = args43976.length;
switch (G__43978) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43976.length)].join('')));

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