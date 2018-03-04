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
var args43639 = [];
var len__37878__auto___43642 = arguments.length;
var i__37879__auto___43643 = (0);
while(true){
if((i__37879__auto___43643 < len__37878__auto___43642)){
args43639.push((arguments[i__37879__auto___43643]));

var G__43644 = (i__37879__auto___43643 + (1));
i__37879__auto___43643 = G__43644;
continue;
} else {
}
break;
}

var G__43641 = args43639.length;
switch (G__43641) {
case 1:
return jayq.core.$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43639.length)].join('')));

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
var G__43647 = null;
var G__43647__2 = (function (self__,k){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__43647__3 = (function (self__,k,not_found){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__43647 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__43647__2.call(this,self__,k);
case 3:
return G__43647__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43647.cljs$core$IFn$_invoke$arity$2 = G__43647__2;
G__43647.cljs$core$IFn$_invoke$arity$3 = G__43647__3;
return G__43647;
})()
;

jQuery.prototype.apply = (function (self__,args43646){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args43646)));
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
var args__37885__auto__ = [];
var len__37878__auto___43655 = arguments.length;
var i__37879__auto___43656 = (0);
while(true){
if((i__37879__auto___43656 < len__37878__auto___43655)){
args__37885__auto__.push((arguments[i__37879__auto___43656]));

var G__43657 = (i__37879__auto___43656 + (1));
i__37879__auto___43656 = G__43657;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((2) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((2)),(0),null)):null);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37886__auto__);
});

jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,props,p__43651){
var vec__43652 = p__43651;
var speed = cljs.core.nth.call(null,vec__43652,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43652,(1),null);
return $elem.animate(cljs.core.clj__GT_js.call(null,props),speed,on_finish);
});

jayq.core.anim.cljs$lang$maxFixedArity = (2);

jayq.core.anim.cljs$lang$applyTo = (function (seq43648){
var G__43649 = cljs.core.first.call(null,seq43648);
var seq43648__$1 = cljs.core.next.call(null,seq43648);
var G__43650 = cljs.core.first.call(null,seq43648__$1);
var seq43648__$2 = cljs.core.next.call(null,seq43648__$1);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic(G__43649,G__43650,seq43648__$2);
});

jayq.core.text = (function jayq$core$text(var_args){
var args43658 = [];
var len__37878__auto___43661 = arguments.length;
var i__37879__auto___43662 = (0);
while(true){
if((i__37879__auto___43662 < len__37878__auto___43661)){
args43658.push((arguments[i__37879__auto___43662]));

var G__43663 = (i__37879__auto___43662 + (1));
i__37879__auto___43662 = G__43663;
continue;
} else {
}
break;
}

var G__43660 = args43658.length;
switch (G__43660) {
case 1:
return jayq.core.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43658.length)].join('')));

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
var args43665 = [];
var len__37878__auto___43668 = arguments.length;
var i__37879__auto___43669 = (0);
while(true){
if((i__37879__auto___43669 < len__37878__auto___43668)){
args43665.push((arguments[i__37879__auto___43669]));

var G__43670 = (i__37879__auto___43669 + (1));
i__37879__auto___43669 = G__43670;
continue;
} else {
}
break;
}

var G__43667 = args43665.length;
switch (G__43667) {
case 2:
return jayq.core.css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.css.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43665.length)].join('')));

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
var args43672 = [];
var len__37878__auto___43675 = arguments.length;
var i__37879__auto___43676 = (0);
while(true){
if((i__37879__auto___43676 < len__37878__auto___43675)){
args43672.push((arguments[i__37879__auto___43676]));

var G__43677 = (i__37879__auto___43676 + (1));
i__37879__auto___43676 = G__43677;
continue;
} else {
}
break;
}

var G__43674 = args43672.length;
switch (G__43674) {
case 3:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43672.length)].join('')));

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
var args43679 = [];
var len__37878__auto___43682 = arguments.length;
var i__37879__auto___43683 = (0);
while(true){
if((i__37879__auto___43683 < len__37878__auto___43682)){
args43679.push((arguments[i__37879__auto___43683]));

var G__43684 = (i__37879__auto___43683 + (1));
i__37879__auto___43683 = G__43684;
continue;
} else {
}
break;
}

var G__43681 = args43679.length;
switch (G__43681) {
case 3:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43679.length)].join('')));

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
var args43686 = [];
var len__37878__auto___43690 = arguments.length;
var i__37879__auto___43691 = (0);
while(true){
if((i__37879__auto___43691 < len__37878__auto___43690)){
args43686.push((arguments[i__37879__auto___43691]));

var G__43692 = (i__37879__auto___43691 + (1));
i__37879__auto___43691 = G__43692;
continue;
} else {
}
break;
}

var G__43688 = args43686.length;
switch (G__43688) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43686.length)].join('')));

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
var args43694 = [];
var len__37878__auto___43697 = arguments.length;
var i__37879__auto___43698 = (0);
while(true){
if((i__37879__auto___43698 < len__37878__auto___43697)){
args43694.push((arguments[i__37879__auto___43698]));

var G__43699 = (i__37879__auto___43698 + (1));
i__37879__auto___43698 = G__43699;
continue;
} else {
}
break;
}

var G__43696 = args43694.length;
switch (G__43696) {
case 1:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43694.length)].join('')));

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
var args43701 = [];
var len__37878__auto___43704 = arguments.length;
var i__37879__auto___43705 = (0);
while(true){
if((i__37879__auto___43705 < len__37878__auto___43704)){
args43701.push((arguments[i__37879__auto___43705]));

var G__43706 = (i__37879__auto___43705 + (1));
i__37879__auto___43705 = G__43706;
continue;
} else {
}
break;
}

var G__43703 = args43701.length;
switch (G__43703) {
case 2:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43701.length)].join('')));

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
var args__37885__auto__ = [];
var len__37878__auto___43714 = arguments.length;
var i__37879__auto___43715 = (0);
while(true){
if((i__37879__auto___43715 < len__37878__auto___43714)){
args__37885__auto__.push((arguments[i__37879__auto___43715]));

var G__43716 = (i__37879__auto___43715 + (1));
i__37879__auto___43715 = G__43716;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((1) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((1)),(0),null)):null);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37886__auto__);
});

jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43710){
var vec__43711 = p__43710;
var speed = cljs.core.nth.call(null,vec__43711,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43711,(1),null);
return $elem.hide(speed,on_finish);
});

jayq.core.hide.cljs$lang$maxFixedArity = (1);

jayq.core.hide.cljs$lang$applyTo = (function (seq43708){
var G__43709 = cljs.core.first.call(null,seq43708);
var seq43708__$1 = cljs.core.next.call(null,seq43708);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic(G__43709,seq43708__$1);
});

jayq.core.show = (function jayq$core$show(var_args){
var args__37885__auto__ = [];
var len__37878__auto___43723 = arguments.length;
var i__37879__auto___43724 = (0);
while(true){
if((i__37879__auto___43724 < len__37878__auto___43723)){
args__37885__auto__.push((arguments[i__37879__auto___43724]));

var G__43725 = (i__37879__auto___43724 + (1));
i__37879__auto___43724 = G__43725;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((1) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((1)),(0),null)):null);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37886__auto__);
});

jayq.core.show.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43719){
var vec__43720 = p__43719;
var speed = cljs.core.nth.call(null,vec__43720,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43720,(1),null);
return $elem.show(speed,on_finish);
});

jayq.core.show.cljs$lang$maxFixedArity = (1);

jayq.core.show.cljs$lang$applyTo = (function (seq43717){
var G__43718 = cljs.core.first.call(null,seq43717);
var seq43717__$1 = cljs.core.next.call(null,seq43717);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic(G__43718,seq43717__$1);
});

jayq.core.toggle = (function jayq$core$toggle(var_args){
var args__37885__auto__ = [];
var len__37878__auto___43732 = arguments.length;
var i__37879__auto___43733 = (0);
while(true){
if((i__37879__auto___43733 < len__37878__auto___43732)){
args__37885__auto__.push((arguments[i__37879__auto___43733]));

var G__43734 = (i__37879__auto___43733 + (1));
i__37879__auto___43733 = G__43734;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((1) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((1)),(0),null)):null);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37886__auto__);
});

jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43728){
var vec__43729 = p__43728;
var speed = cljs.core.nth.call(null,vec__43729,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43729,(1),null);
return $elem.toggle(speed,on_finish);
});

jayq.core.toggle.cljs$lang$maxFixedArity = (1);

jayq.core.toggle.cljs$lang$applyTo = (function (seq43726){
var G__43727 = cljs.core.first.call(null,seq43726);
var seq43726__$1 = cljs.core.next.call(null,seq43726);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic(G__43727,seq43726__$1);
});

jayq.core.fade_out = (function jayq$core$fade_out(var_args){
var args__37885__auto__ = [];
var len__37878__auto___43741 = arguments.length;
var i__37879__auto___43742 = (0);
while(true){
if((i__37879__auto___43742 < len__37878__auto___43741)){
args__37885__auto__.push((arguments[i__37879__auto___43742]));

var G__43743 = (i__37879__auto___43742 + (1));
i__37879__auto___43742 = G__43743;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((1) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((1)),(0),null)):null);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37886__auto__);
});

jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43737){
var vec__43738 = p__43737;
var speed = cljs.core.nth.call(null,vec__43738,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43738,(1),null);
return $elem.fadeOut(speed,on_finish);
});

jayq.core.fade_out.cljs$lang$maxFixedArity = (1);

jayq.core.fade_out.cljs$lang$applyTo = (function (seq43735){
var G__43736 = cljs.core.first.call(null,seq43735);
var seq43735__$1 = cljs.core.next.call(null,seq43735);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic(G__43736,seq43735__$1);
});

jayq.core.fade_in = (function jayq$core$fade_in(var_args){
var args__37885__auto__ = [];
var len__37878__auto___43750 = arguments.length;
var i__37879__auto___43751 = (0);
while(true){
if((i__37879__auto___43751 < len__37878__auto___43750)){
args__37885__auto__.push((arguments[i__37879__auto___43751]));

var G__43752 = (i__37879__auto___43751 + (1));
i__37879__auto___43751 = G__43752;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((1) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((1)),(0),null)):null);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37886__auto__);
});

jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43746){
var vec__43747 = p__43746;
var speed = cljs.core.nth.call(null,vec__43747,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43747,(1),null);
return $elem.fadeIn(speed,on_finish);
});

jayq.core.fade_in.cljs$lang$maxFixedArity = (1);

jayq.core.fade_in.cljs$lang$applyTo = (function (seq43744){
var G__43745 = cljs.core.first.call(null,seq43744);
var seq43744__$1 = cljs.core.next.call(null,seq43744);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic(G__43745,seq43744__$1);
});

jayq.core.slide_up = (function jayq$core$slide_up(var_args){
var args__37885__auto__ = [];
var len__37878__auto___43759 = arguments.length;
var i__37879__auto___43760 = (0);
while(true){
if((i__37879__auto___43760 < len__37878__auto___43759)){
args__37885__auto__.push((arguments[i__37879__auto___43760]));

var G__43761 = (i__37879__auto___43760 + (1));
i__37879__auto___43760 = G__43761;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((1) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((1)),(0),null)):null);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37886__auto__);
});

jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43755){
var vec__43756 = p__43755;
var speed = cljs.core.nth.call(null,vec__43756,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43756,(1),null);
return $elem.slideUp(speed,on_finish);
});

jayq.core.slide_up.cljs$lang$maxFixedArity = (1);

jayq.core.slide_up.cljs$lang$applyTo = (function (seq43753){
var G__43754 = cljs.core.first.call(null,seq43753);
var seq43753__$1 = cljs.core.next.call(null,seq43753);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic(G__43754,seq43753__$1);
});

jayq.core.slide_down = (function jayq$core$slide_down(var_args){
var args__37885__auto__ = [];
var len__37878__auto___43768 = arguments.length;
var i__37879__auto___43769 = (0);
while(true){
if((i__37879__auto___43769 < len__37878__auto___43768)){
args__37885__auto__.push((arguments[i__37879__auto___43769]));

var G__43770 = (i__37879__auto___43769 + (1));
i__37879__auto___43769 = G__43770;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((1) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((1)),(0),null)):null);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37886__auto__);
});

jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43764){
var vec__43765 = p__43764;
var speed = cljs.core.nth.call(null,vec__43765,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43765,(1),null);
return $elem.slideDown(speed,on_finish);
});

jayq.core.slide_down.cljs$lang$maxFixedArity = (1);

jayq.core.slide_down.cljs$lang$applyTo = (function (seq43762){
var G__43763 = cljs.core.first.call(null,seq43762);
var seq43762__$1 = cljs.core.next.call(null,seq43762);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic(G__43763,seq43762__$1);
});

jayq.core.siblings = (function jayq$core$siblings(var_args){
var args43771 = [];
var len__37878__auto___43774 = arguments.length;
var i__37879__auto___43775 = (0);
while(true){
if((i__37879__auto___43775 < len__37878__auto___43774)){
args43771.push((arguments[i__37879__auto___43775]));

var G__43776 = (i__37879__auto___43775 + (1));
i__37879__auto___43775 = G__43776;
continue;
} else {
}
break;
}

var G__43773 = args43771.length;
switch (G__43773) {
case 1:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43771.length)].join('')));

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
var args43778 = [];
var len__37878__auto___43781 = arguments.length;
var i__37879__auto___43782 = (0);
while(true){
if((i__37879__auto___43782 < len__37878__auto___43781)){
args43778.push((arguments[i__37879__auto___43782]));

var G__43783 = (i__37879__auto___43782 + (1));
i__37879__auto___43782 = G__43783;
continue;
} else {
}
break;
}

var G__43780 = args43778.length;
switch (G__43780) {
case 1:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43778.length)].join('')));

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
var args43785 = [];
var len__37878__auto___43788 = arguments.length;
var i__37879__auto___43789 = (0);
while(true){
if((i__37879__auto___43789 < len__37878__auto___43788)){
args43785.push((arguments[i__37879__auto___43789]));

var G__43790 = (i__37879__auto___43789 + (1));
i__37879__auto___43789 = G__43790;
continue;
} else {
}
break;
}

var G__43787 = args43785.length;
switch (G__43787) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43785.length)].join('')));

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
var args43792 = [];
var len__37878__auto___43795 = arguments.length;
var i__37879__auto___43796 = (0);
while(true){
if((i__37879__auto___43796 < len__37878__auto___43795)){
args43792.push((arguments[i__37879__auto___43796]));

var G__43797 = (i__37879__auto___43796 + (1));
i__37879__auto___43796 = G__43797;
continue;
} else {
}
break;
}

var G__43794 = args43792.length;
switch (G__43794) {
case 2:
return jayq.core.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43792.length)].join('')));

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
var args43799 = [];
var len__37878__auto___43802 = arguments.length;
var i__37879__auto___43803 = (0);
while(true){
if((i__37879__auto___43803 < len__37878__auto___43802)){
args43799.push((arguments[i__37879__auto___43803]));

var G__43804 = (i__37879__auto___43803 + (1));
i__37879__auto___43803 = G__43804;
continue;
} else {
}
break;
}

var G__43801 = args43799.length;
switch (G__43801) {
case 1:
return jayq.core.next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43799.length)].join('')));

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
var args43806 = [];
var len__37878__auto___43809 = arguments.length;
var i__37879__auto___43810 = (0);
while(true){
if((i__37879__auto___43810 < len__37878__auto___43809)){
args43806.push((arguments[i__37879__auto___43810]));

var G__43811 = (i__37879__auto___43810 + (1));
i__37879__auto___43810 = G__43811;
continue;
} else {
}
break;
}

var G__43808 = args43806.length;
switch (G__43808) {
case 1:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43806.length)].join('')));

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
var args43813 = [];
var len__37878__auto___43816 = arguments.length;
var i__37879__auto___43817 = (0);
while(true){
if((i__37879__auto___43817 < len__37878__auto___43816)){
args43813.push((arguments[i__37879__auto___43817]));

var G__43818 = (i__37879__auto___43817 + (1));
i__37879__auto___43817 = G__43818;
continue;
} else {
}
break;
}

var G__43815 = args43813.length;
switch (G__43815) {
case 1:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43813.length)].join('')));

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
var args43820 = [];
var len__37878__auto___43823 = arguments.length;
var i__37879__auto___43824 = (0);
while(true){
if((i__37879__auto___43824 < len__37878__auto___43823)){
args43820.push((arguments[i__37879__auto___43824]));

var G__43825 = (i__37879__auto___43824 + (1));
i__37879__auto___43824 = G__43825;
continue;
} else {
}
break;
}

var G__43822 = args43820.length;
switch (G__43822) {
case 1:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43820.length)].join('')));

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
var args43827 = [];
var len__37878__auto___43830 = arguments.length;
var i__37879__auto___43831 = (0);
while(true){
if((i__37879__auto___43831 < len__37878__auto___43830)){
args43827.push((arguments[i__37879__auto___43831]));

var G__43832 = (i__37879__auto___43831 + (1));
i__37879__auto___43831 = G__43832;
continue;
} else {
}
break;
}

var G__43829 = args43827.length;
switch (G__43829) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43827.length)].join('')));

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
var args43834 = [];
var len__37878__auto___43837 = arguments.length;
var i__37879__auto___43838 = (0);
while(true){
if((i__37879__auto___43838 < len__37878__auto___43837)){
args43834.push((arguments[i__37879__auto___43838]));

var G__43839 = (i__37879__auto___43838 + (1));
i__37879__auto___43838 = G__43839;
continue;
} else {
}
break;
}

var G__43836 = args43834.length;
switch (G__43836) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43834.length)].join('')));

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
var args__37885__auto__ = [];
var len__37878__auto___43848 = arguments.length;
var i__37879__auto___43849 = (0);
while(true){
if((i__37879__auto___43849 < len__37878__auto___43848)){
args__37885__auto__.push((arguments[i__37879__auto___43849]));

var G__43850 = (i__37879__auto___43849 + (1));
i__37879__auto___43849 = G__43850;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((2) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((2)),(0),null)):null);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37886__auto__);
});

jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,selector,p__43844){
var vec__43845 = p__43844;
var context = cljs.core.nth.call(null,vec__43845,(0),null);
return $elem.closest(jayq.core.__GT_selector.call(null,selector),context);
});

jayq.core.closest.cljs$lang$maxFixedArity = (2);

jayq.core.closest.cljs$lang$applyTo = (function (seq43841){
var G__43842 = cljs.core.first.call(null,seq43841);
var seq43841__$1 = cljs.core.next.call(null,seq43841);
var G__43843 = cljs.core.first.call(null,seq43841__$1);
var seq43841__$2 = cljs.core.next.call(null,seq43841__$1);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic(G__43842,G__43843,seq43841__$2);
});

jayq.core.clone = (function jayq$core$clone($elem){
return $elem.clone();
});
jayq.core.html = (function jayq$core$html(var_args){
var args43851 = [];
var len__37878__auto___43854 = arguments.length;
var i__37879__auto___43855 = (0);
while(true){
if((i__37879__auto___43855 < len__37878__auto___43854)){
args43851.push((arguments[i__37879__auto___43855]));

var G__43856 = (i__37879__auto___43855 + (1));
i__37879__auto___43855 = G__43856;
continue;
} else {
}
break;
}

var G__43853 = args43851.length;
switch (G__43853) {
case 2:
return jayq.core.html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43851.length)].join('')));

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
var args43858 = [];
var len__37878__auto___43861 = arguments.length;
var i__37879__auto___43862 = (0);
while(true){
if((i__37879__auto___43862 < len__37878__auto___43861)){
args43858.push((arguments[i__37879__auto___43862]));

var G__43863 = (i__37879__auto___43862 + (1));
i__37879__auto___43862 = G__43863;
continue;
} else {
}
break;
}

var G__43860 = args43858.length;
switch (G__43860) {
case 2:
return jayq.core.val.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.val.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43858.length)].join('')));

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
var args43865 = [];
var len__37878__auto___43868 = arguments.length;
var i__37879__auto___43869 = (0);
while(true){
if((i__37879__auto___43869 < len__37878__auto___43868)){
args43865.push((arguments[i__37879__auto___43869]));

var G__43870 = (i__37879__auto___43869 + (1));
i__37879__auto___43869 = G__43870;
continue;
} else {
}
break;
}

var G__43867 = args43865.length;
switch (G__43867) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43865.length)].join('')));

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
var args43872 = [];
var len__37878__auto___43875 = arguments.length;
var i__37879__auto___43876 = (0);
while(true){
if((i__37879__auto___43876 < len__37878__auto___43875)){
args43872.push((arguments[i__37879__auto___43876]));

var G__43877 = (i__37879__auto___43876 + (1));
i__37879__auto___43876 = G__43877;
continue;
} else {
}
break;
}

var G__43874 = args43872.length;
switch (G__43874) {
case 2:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43872.length)].join('')));

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
jayq.core.preprocess_request = (function jayq$core$preprocess_request(p__43881){
var map__43884 = p__43881;
var map__43884__$1 = ((((!((map__43884 == null)))?((((map__43884.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43884.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43884):map__43884);
var request = map__43884__$1;
var data = cljs.core.get.call(null,map__43884__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var contentType = cljs.core.get.call(null,map__43884__$1,new cljs.core.Keyword(null,"contentType","contentType",-1462509576));
var ct = jayq.core.__GT_content_type.call(null,contentType);
return ((function (ct,map__43884,map__43884__$1,request,data,contentType){
return (function (p1__43880_SHARP_){
if(cljs.core.truth_((function (){var and__36790__auto__ = ct;
if(cljs.core.truth_(and__36790__auto__)){
return jayq.core.clj_content_type_QMARK_.call(null,ct);
} else {
return and__36790__auto__;
}
})())){
return cljs.core.assoc.call(null,p1__43880_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.pr_str.call(null,data));
} else {
return p1__43880_SHARP_;
}
});})(ct,map__43884,map__43884__$1,request,data,contentType))
.call(null,((function (ct,map__43884,map__43884__$1,request,data,contentType){
return (function (p1__43879_SHARP_){
if(cljs.core.truth_(ct)){
return cljs.core.assoc.call(null,p1__43879_SHARP_,new cljs.core.Keyword(null,"contentType","contentType",-1462509576),ct);
} else {
return p1__43879_SHARP_;
}
});})(ct,map__43884,map__43884__$1,request,data,contentType))
.call(null,request));
});
jayq.core.__GT_ajax_settings = (function jayq$core$__GT_ajax_settings(request){
return cljs.core.clj__GT_js.call(null,jayq.core.preprocess_request.call(null,request));
});
jayq.core.ajax = (function jayq$core$ajax(var_args){
var args43886 = [];
var len__37878__auto___43889 = arguments.length;
var i__37879__auto___43890 = (0);
while(true){
if((i__37879__auto___43890 < len__37878__auto___43889)){
args43886.push((arguments[i__37879__auto___43890]));

var G__43891 = (i__37879__auto___43890 + (1));
i__37879__auto___43890 = G__43891;
continue;
} else {
}
break;
}

var G__43888 = args43886.length;
switch (G__43888) {
case 2:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43886.length)].join('')));

}
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$2 = (function (url,settings){
return jQuery.ajax(url,jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$1 = (function (settings){
return jQuery.ajax(jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$lang$maxFixedArity = 2;

jayq.core.xhr = (function jayq$core$xhr(p__43893,content,callback){
var vec__43897 = p__43893;
var method = cljs.core.nth.call(null,vec__43897,(0),null);
var uri = cljs.core.nth.call(null,vec__43897,(1),null);
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
var args__37885__auto__ = [];
var len__37878__auto___43907 = arguments.length;
var i__37879__auto___43908 = (0);
while(true){
if((i__37879__auto___43908 < len__37878__auto___43907)){
args__37885__auto__.push((arguments[i__37879__auto___43908]));

var G__43909 = (i__37879__auto___43908 + (1));
i__37879__auto___43908 = G__43909;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((2) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((2)),(0),null)):null);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37886__auto__);
});

jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,ev,p__43903){
var vec__43904 = p__43903;
var func = cljs.core.nth.call(null,vec__43904,(0),null);
return $elem.unbind(cljs.core.name.call(null,ev),func);
});

jayq.core.unbind.cljs$lang$maxFixedArity = (2);

jayq.core.unbind.cljs$lang$applyTo = (function (seq43900){
var G__43901 = cljs.core.first.call(null,seq43900);
var seq43900__$1 = cljs.core.next.call(null,seq43900);
var G__43902 = cljs.core.first.call(null,seq43900__$1);
var seq43900__$2 = cljs.core.next.call(null,seq43900__$1);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic(G__43901,G__43902,seq43900__$2);
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
var args__37885__auto__ = [];
var len__37878__auto___43917 = arguments.length;
var i__37879__auto___43918 = (0);
while(true){
if((i__37879__auto___43918 < len__37878__auto___43917)){
args__37885__auto__.push((arguments[i__37879__auto___43918]));

var G__43919 = (i__37879__auto___43918 + (1));
i__37879__auto___43918 = G__43919;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((2) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((2)),(0),null)):null);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37886__auto__);
});

jayq.core.on.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__43913){
var vec__43914 = p__43913;
var sel = cljs.core.nth.call(null,vec__43914,(0),null);
var data = cljs.core.nth.call(null,vec__43914,(1),null);
var handler = cljs.core.nth.call(null,vec__43914,(2),null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.on.cljs$lang$maxFixedArity = (2);

jayq.core.on.cljs$lang$applyTo = (function (seq43910){
var G__43911 = cljs.core.first.call(null,seq43910);
var seq43910__$1 = cljs.core.next.call(null,seq43910);
var G__43912 = cljs.core.first.call(null,seq43910__$1);
var seq43910__$2 = cljs.core.next.call(null,seq43910__$1);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic(G__43911,G__43912,seq43910__$2);
});

jayq.core.one = (function jayq$core$one(var_args){
var args__37885__auto__ = [];
var len__37878__auto___43927 = arguments.length;
var i__37879__auto___43928 = (0);
while(true){
if((i__37879__auto___43928 < len__37878__auto___43927)){
args__37885__auto__.push((arguments[i__37879__auto___43928]));

var G__43929 = (i__37879__auto___43928 + (1));
i__37879__auto___43928 = G__43929;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((2) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((2)),(0),null)):null);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37886__auto__);
});

jayq.core.one.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__43923){
var vec__43924 = p__43923;
var sel = cljs.core.nth.call(null,vec__43924,(0),null);
var data = cljs.core.nth.call(null,vec__43924,(1),null);
var handler = cljs.core.nth.call(null,vec__43924,(2),null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.one.cljs$lang$maxFixedArity = (2);

jayq.core.one.cljs$lang$applyTo = (function (seq43920){
var G__43921 = cljs.core.first.call(null,seq43920);
var seq43920__$1 = cljs.core.next.call(null,seq43920);
var G__43922 = cljs.core.first.call(null,seq43920__$1);
var seq43920__$2 = cljs.core.next.call(null,seq43920__$1);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic(G__43921,G__43922,seq43920__$2);
});

jayq.core.off = (function jayq$core$off(var_args){
var args__37885__auto__ = [];
var len__37878__auto___43937 = arguments.length;
var i__37879__auto___43938 = (0);
while(true){
if((i__37879__auto___43938 < len__37878__auto___43937)){
args__37885__auto__.push((arguments[i__37879__auto___43938]));

var G__43939 = (i__37879__auto___43938 + (1));
i__37879__auto___43938 = G__43939;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((2) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((2)),(0),null)):null);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37886__auto__);
});

jayq.core.off.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__43933){
var vec__43934 = p__43933;
var sel = cljs.core.nth.call(null,vec__43934,(0),null);
var handler = cljs.core.nth.call(null,vec__43934,(1),null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),handler);
});

jayq.core.off.cljs$lang$maxFixedArity = (2);

jayq.core.off.cljs$lang$applyTo = (function (seq43930){
var G__43931 = cljs.core.first.call(null,seq43930);
var seq43930__$1 = cljs.core.next.call(null,seq43930);
var G__43932 = cljs.core.first.call(null,seq43930__$1);
var seq43930__$2 = cljs.core.next.call(null,seq43930__$1);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic(G__43931,G__43932,seq43930__$2);
});

jayq.core.prevent = (function jayq$core$prevent(e){
return e.preventDefault();
});
jayq.core.height = (function jayq$core$height(var_args){
var args43940 = [];
var len__37878__auto___43943 = arguments.length;
var i__37879__auto___43944 = (0);
while(true){
if((i__37879__auto___43944 < len__37878__auto___43943)){
args43940.push((arguments[i__37879__auto___43944]));

var G__43945 = (i__37879__auto___43944 + (1));
i__37879__auto___43944 = G__43945;
continue;
} else {
}
break;
}

var G__43942 = args43940.length;
switch (G__43942) {
case 2:
return jayq.core.height.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.height.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43940.length)].join('')));

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
var args43947 = [];
var len__37878__auto___43950 = arguments.length;
var i__37879__auto___43951 = (0);
while(true){
if((i__37879__auto___43951 < len__37878__auto___43950)){
args43947.push((arguments[i__37879__auto___43951]));

var G__43952 = (i__37879__auto___43951 + (1));
i__37879__auto___43951 = G__43952;
continue;
} else {
}
break;
}

var G__43949 = args43947.length;
switch (G__43949) {
case 2:
return jayq.core.width.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.width.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43947.length)].join('')));

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
var args43954 = [];
var len__37878__auto___43957 = arguments.length;
var i__37879__auto___43958 = (0);
while(true){
if((i__37879__auto___43958 < len__37878__auto___43957)){
args43954.push((arguments[i__37879__auto___43958]));

var G__43959 = (i__37879__auto___43958 + (1));
i__37879__auto___43958 = G__43959;
continue;
} else {
}
break;
}

var G__43956 = args43954.length;
switch (G__43956) {
case 2:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43954.length)].join('')));

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
var args43961 = [];
var len__37878__auto___43964 = arguments.length;
var i__37879__auto___43965 = (0);
while(true){
if((i__37879__auto___43965 < len__37878__auto___43964)){
args43961.push((arguments[i__37879__auto___43965]));

var G__43966 = (i__37879__auto___43965 + (1));
i__37879__auto___43965 = G__43966;
continue;
} else {
}
break;
}

var G__43963 = args43961.length;
switch (G__43963) {
case 1:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43961.length)].join('')));

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
var args43968 = [];
var len__37878__auto___43971 = arguments.length;
var i__37879__auto___43972 = (0);
while(true){
if((i__37879__auto___43972 < len__37878__auto___43971)){
args43968.push((arguments[i__37879__auto___43972]));

var G__43973 = (i__37879__auto___43972 + (1));
i__37879__auto___43972 = G__43973;
continue;
} else {
}
break;
}

var G__43970 = args43968.length;
switch (G__43970) {
case 1:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43968.length)].join('')));

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
var args43975 = [];
var len__37878__auto___43978 = arguments.length;
var i__37879__auto___43979 = (0);
while(true){
if((i__37879__auto___43979 < len__37878__auto___43978)){
args43975.push((arguments[i__37879__auto___43979]));

var G__43980 = (i__37879__auto___43979 + (1));
i__37879__auto___43979 = G__43980;
continue;
} else {
}
break;
}

var G__43977 = args43975.length;
switch (G__43977) {
case 3:
return jayq.core.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.then.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43975.length)].join('')));

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
var args__37885__auto__ = [];
var len__37878__auto___43984 = arguments.length;
var i__37879__auto___43985 = (0);
while(true){
if((i__37879__auto___43985 < len__37878__auto___43984)){
args__37885__auto__.push((arguments[i__37879__auto___43985]));

var G__43986 = (i__37879__auto___43985 + (1));
i__37879__auto___43985 = G__43986;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((1) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((1)),(0),null)):null);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37886__auto__);
});

jayq.core.done.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.done.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.done.cljs$lang$maxFixedArity = (1);

jayq.core.done.cljs$lang$applyTo = (function (seq43982){
var G__43983 = cljs.core.first.call(null,seq43982);
var seq43982__$1 = cljs.core.next.call(null,seq43982);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic(G__43983,seq43982__$1);
});

jayq.core.fail = (function jayq$core$fail(var_args){
var args__37885__auto__ = [];
var len__37878__auto___43989 = arguments.length;
var i__37879__auto___43990 = (0);
while(true){
if((i__37879__auto___43990 < len__37878__auto___43989)){
args__37885__auto__.push((arguments[i__37879__auto___43990]));

var G__43991 = (i__37879__auto___43990 + (1));
i__37879__auto___43990 = G__43991;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((1) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((1)),(0),null)):null);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37886__auto__);
});

jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.fail.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.fail.cljs$lang$maxFixedArity = (1);

jayq.core.fail.cljs$lang$applyTo = (function (seq43987){
var G__43988 = cljs.core.first.call(null,seq43987);
var seq43987__$1 = cljs.core.next.call(null,seq43987);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__43988,seq43987__$1);
});

jayq.core.progress = (function jayq$core$progress(deferred,fns_args){
return deferred.progress(cljs.core.clj__GT_js.call(null,fns_args));
});
jayq.core.promise = (function jayq$core$promise(var_args){
var args43992 = [];
var len__37878__auto___43995 = arguments.length;
var i__37879__auto___43996 = (0);
while(true){
if((i__37879__auto___43996 < len__37878__auto___43995)){
args43992.push((arguments[i__37879__auto___43996]));

var G__43997 = (i__37879__auto___43996 + (1));
i__37879__auto___43996 = G__43997;
continue;
} else {
}
break;
}

var G__43994 = args43992.length;
switch (G__43994) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43992.length)].join('')));

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
var args__37885__auto__ = [];
var len__37878__auto___44001 = arguments.length;
var i__37879__auto___44002 = (0);
while(true){
if((i__37879__auto___44002 < len__37878__auto___44001)){
args__37885__auto__.push((arguments[i__37879__auto___44002]));

var G__44003 = (i__37879__auto___44002 + (1));
i__37879__auto___44002 = G__44003;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((1) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((1)),(0),null)):null);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37886__auto__);
});

jayq.core.always.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.always.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.always.cljs$lang$maxFixedArity = (1);

jayq.core.always.cljs$lang$applyTo = (function (seq43999){
var G__44000 = cljs.core.first.call(null,seq43999);
var seq43999__$1 = cljs.core.next.call(null,seq43999);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic(G__44000,seq43999__$1);
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
var args44004 = [];
var len__37878__auto___44007 = arguments.length;
var i__37879__auto___44008 = (0);
while(true){
if((i__37879__auto___44008 < len__37878__auto___44007)){
args44004.push((arguments[i__37879__auto___44008]));

var G__44009 = (i__37879__auto___44008 + (1));
i__37879__auto___44008 = G__44009;
continue;
} else {
}
break;
}

var G__44006 = args44004.length;
switch (G__44006) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44004.length)].join('')));

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