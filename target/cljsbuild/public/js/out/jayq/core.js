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
var args43691 = [];
var len__37879__auto___43694 = arguments.length;
var i__37880__auto___43695 = (0);
while(true){
if((i__37880__auto___43695 < len__37879__auto___43694)){
args43691.push((arguments[i__37880__auto___43695]));

var G__43696 = (i__37880__auto___43695 + (1));
i__37880__auto___43695 = G__43696;
continue;
} else {
}
break;
}

var G__43693 = args43691.length;
switch (G__43693) {
case 1:
return jayq.core.$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43691.length)].join('')));

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
var or__36804__auto__ = this$__$1.slice(k,(k + (1)));
if(cljs.core.truth_(or__36804__auto__)){
return or__36804__auto__;
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
var G__43699 = null;
var G__43699__2 = (function (self__,k){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__43699__3 = (function (self__,k,not_found){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__43699 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__43699__2.call(this,self__,k);
case 3:
return G__43699__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43699.cljs$core$IFn$_invoke$arity$2 = G__43699__2;
G__43699.cljs$core$IFn$_invoke$arity$3 = G__43699__3;
return G__43699;
})()
;

jQuery.prototype.apply = (function (self__,args43698){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args43698)));
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
var args__37886__auto__ = [];
var len__37879__auto___43707 = arguments.length;
var i__37880__auto___43708 = (0);
while(true){
if((i__37880__auto___43708 < len__37879__auto___43707)){
args__37886__auto__.push((arguments[i__37880__auto___43708]));

var G__43709 = (i__37880__auto___43708 + (1));
i__37880__auto___43708 = G__43709;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((2) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((2)),(0),null)):null);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37887__auto__);
});

jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,props,p__43703){
var vec__43704 = p__43703;
var speed = cljs.core.nth.call(null,vec__43704,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43704,(1),null);
return $elem.animate(cljs.core.clj__GT_js.call(null,props),speed,on_finish);
});

jayq.core.anim.cljs$lang$maxFixedArity = (2);

jayq.core.anim.cljs$lang$applyTo = (function (seq43700){
var G__43701 = cljs.core.first.call(null,seq43700);
var seq43700__$1 = cljs.core.next.call(null,seq43700);
var G__43702 = cljs.core.first.call(null,seq43700__$1);
var seq43700__$2 = cljs.core.next.call(null,seq43700__$1);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic(G__43701,G__43702,seq43700__$2);
});

jayq.core.text = (function jayq$core$text(var_args){
var args43710 = [];
var len__37879__auto___43713 = arguments.length;
var i__37880__auto___43714 = (0);
while(true){
if((i__37880__auto___43714 < len__37879__auto___43713)){
args43710.push((arguments[i__37880__auto___43714]));

var G__43715 = (i__37880__auto___43714 + (1));
i__37880__auto___43714 = G__43715;
continue;
} else {
}
break;
}

var G__43712 = args43710.length;
switch (G__43712) {
case 1:
return jayq.core.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43710.length)].join('')));

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
var args43717 = [];
var len__37879__auto___43720 = arguments.length;
var i__37880__auto___43721 = (0);
while(true){
if((i__37880__auto___43721 < len__37879__auto___43720)){
args43717.push((arguments[i__37880__auto___43721]));

var G__43722 = (i__37880__auto___43721 + (1));
i__37880__auto___43721 = G__43722;
continue;
} else {
}
break;
}

var G__43719 = args43717.length;
switch (G__43719) {
case 2:
return jayq.core.css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.css.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43717.length)].join('')));

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
var args43724 = [];
var len__37879__auto___43727 = arguments.length;
var i__37880__auto___43728 = (0);
while(true){
if((i__37880__auto___43728 < len__37879__auto___43727)){
args43724.push((arguments[i__37880__auto___43728]));

var G__43729 = (i__37880__auto___43728 + (1));
i__37880__auto___43728 = G__43729;
continue;
} else {
}
break;
}

var G__43726 = args43724.length;
switch (G__43726) {
case 3:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43724.length)].join('')));

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
var args43731 = [];
var len__37879__auto___43734 = arguments.length;
var i__37880__auto___43735 = (0);
while(true){
if((i__37880__auto___43735 < len__37879__auto___43734)){
args43731.push((arguments[i__37880__auto___43735]));

var G__43736 = (i__37880__auto___43735 + (1));
i__37880__auto___43735 = G__43736;
continue;
} else {
}
break;
}

var G__43733 = args43731.length;
switch (G__43733) {
case 3:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43731.length)].join('')));

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
var args43738 = [];
var len__37879__auto___43741 = arguments.length;
var i__37880__auto___43742 = (0);
while(true){
if((i__37880__auto___43742 < len__37879__auto___43741)){
args43738.push((arguments[i__37880__auto___43742]));

var G__43743 = (i__37880__auto___43742 + (1));
i__37880__auto___43742 = G__43743;
continue;
} else {
}
break;
}

var G__43740 = args43738.length;
switch (G__43740) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43738.length)].join('')));

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
var args43745 = [];
var len__37879__auto___43748 = arguments.length;
var i__37880__auto___43749 = (0);
while(true){
if((i__37880__auto___43749 < len__37879__auto___43748)){
args43745.push((arguments[i__37880__auto___43749]));

var G__43750 = (i__37880__auto___43749 + (1));
i__37880__auto___43749 = G__43750;
continue;
} else {
}
break;
}

var G__43747 = args43745.length;
switch (G__43747) {
case 1:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43745.length)].join('')));

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
var args43752 = [];
var len__37879__auto___43755 = arguments.length;
var i__37880__auto___43756 = (0);
while(true){
if((i__37880__auto___43756 < len__37879__auto___43755)){
args43752.push((arguments[i__37880__auto___43756]));

var G__43757 = (i__37880__auto___43756 + (1));
i__37880__auto___43756 = G__43757;
continue;
} else {
}
break;
}

var G__43754 = args43752.length;
switch (G__43754) {
case 2:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43752.length)].join('')));

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
var args__37886__auto__ = [];
var len__37879__auto___43765 = arguments.length;
var i__37880__auto___43766 = (0);
while(true){
if((i__37880__auto___43766 < len__37879__auto___43765)){
args__37886__auto__.push((arguments[i__37880__auto___43766]));

var G__43767 = (i__37880__auto___43766 + (1));
i__37880__auto___43766 = G__43767;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((1) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((1)),(0),null)):null);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37887__auto__);
});

jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43761){
var vec__43762 = p__43761;
var speed = cljs.core.nth.call(null,vec__43762,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43762,(1),null);
return $elem.hide(speed,on_finish);
});

jayq.core.hide.cljs$lang$maxFixedArity = (1);

jayq.core.hide.cljs$lang$applyTo = (function (seq43759){
var G__43760 = cljs.core.first.call(null,seq43759);
var seq43759__$1 = cljs.core.next.call(null,seq43759);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic(G__43760,seq43759__$1);
});

jayq.core.show = (function jayq$core$show(var_args){
var args__37886__auto__ = [];
var len__37879__auto___43774 = arguments.length;
var i__37880__auto___43775 = (0);
while(true){
if((i__37880__auto___43775 < len__37879__auto___43774)){
args__37886__auto__.push((arguments[i__37880__auto___43775]));

var G__43776 = (i__37880__auto___43775 + (1));
i__37880__auto___43775 = G__43776;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((1) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((1)),(0),null)):null);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37887__auto__);
});

jayq.core.show.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43770){
var vec__43771 = p__43770;
var speed = cljs.core.nth.call(null,vec__43771,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43771,(1),null);
return $elem.show(speed,on_finish);
});

jayq.core.show.cljs$lang$maxFixedArity = (1);

jayq.core.show.cljs$lang$applyTo = (function (seq43768){
var G__43769 = cljs.core.first.call(null,seq43768);
var seq43768__$1 = cljs.core.next.call(null,seq43768);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic(G__43769,seq43768__$1);
});

jayq.core.toggle = (function jayq$core$toggle(var_args){
var args__37886__auto__ = [];
var len__37879__auto___43783 = arguments.length;
var i__37880__auto___43784 = (0);
while(true){
if((i__37880__auto___43784 < len__37879__auto___43783)){
args__37886__auto__.push((arguments[i__37880__auto___43784]));

var G__43785 = (i__37880__auto___43784 + (1));
i__37880__auto___43784 = G__43785;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((1) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((1)),(0),null)):null);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37887__auto__);
});

jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43779){
var vec__43780 = p__43779;
var speed = cljs.core.nth.call(null,vec__43780,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43780,(1),null);
return $elem.toggle(speed,on_finish);
});

jayq.core.toggle.cljs$lang$maxFixedArity = (1);

jayq.core.toggle.cljs$lang$applyTo = (function (seq43777){
var G__43778 = cljs.core.first.call(null,seq43777);
var seq43777__$1 = cljs.core.next.call(null,seq43777);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic(G__43778,seq43777__$1);
});

jayq.core.fade_out = (function jayq$core$fade_out(var_args){
var args__37886__auto__ = [];
var len__37879__auto___43792 = arguments.length;
var i__37880__auto___43793 = (0);
while(true){
if((i__37880__auto___43793 < len__37879__auto___43792)){
args__37886__auto__.push((arguments[i__37880__auto___43793]));

var G__43794 = (i__37880__auto___43793 + (1));
i__37880__auto___43793 = G__43794;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((1) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((1)),(0),null)):null);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37887__auto__);
});

jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43788){
var vec__43789 = p__43788;
var speed = cljs.core.nth.call(null,vec__43789,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43789,(1),null);
return $elem.fadeOut(speed,on_finish);
});

jayq.core.fade_out.cljs$lang$maxFixedArity = (1);

jayq.core.fade_out.cljs$lang$applyTo = (function (seq43786){
var G__43787 = cljs.core.first.call(null,seq43786);
var seq43786__$1 = cljs.core.next.call(null,seq43786);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic(G__43787,seq43786__$1);
});

jayq.core.fade_in = (function jayq$core$fade_in(var_args){
var args__37886__auto__ = [];
var len__37879__auto___43801 = arguments.length;
var i__37880__auto___43802 = (0);
while(true){
if((i__37880__auto___43802 < len__37879__auto___43801)){
args__37886__auto__.push((arguments[i__37880__auto___43802]));

var G__43803 = (i__37880__auto___43802 + (1));
i__37880__auto___43802 = G__43803;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((1) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((1)),(0),null)):null);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37887__auto__);
});

jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43797){
var vec__43798 = p__43797;
var speed = cljs.core.nth.call(null,vec__43798,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43798,(1),null);
return $elem.fadeIn(speed,on_finish);
});

jayq.core.fade_in.cljs$lang$maxFixedArity = (1);

jayq.core.fade_in.cljs$lang$applyTo = (function (seq43795){
var G__43796 = cljs.core.first.call(null,seq43795);
var seq43795__$1 = cljs.core.next.call(null,seq43795);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic(G__43796,seq43795__$1);
});

jayq.core.slide_up = (function jayq$core$slide_up(var_args){
var args__37886__auto__ = [];
var len__37879__auto___43810 = arguments.length;
var i__37880__auto___43811 = (0);
while(true){
if((i__37880__auto___43811 < len__37879__auto___43810)){
args__37886__auto__.push((arguments[i__37880__auto___43811]));

var G__43812 = (i__37880__auto___43811 + (1));
i__37880__auto___43811 = G__43812;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((1) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((1)),(0),null)):null);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37887__auto__);
});

jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43806){
var vec__43807 = p__43806;
var speed = cljs.core.nth.call(null,vec__43807,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43807,(1),null);
return $elem.slideUp(speed,on_finish);
});

jayq.core.slide_up.cljs$lang$maxFixedArity = (1);

jayq.core.slide_up.cljs$lang$applyTo = (function (seq43804){
var G__43805 = cljs.core.first.call(null,seq43804);
var seq43804__$1 = cljs.core.next.call(null,seq43804);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic(G__43805,seq43804__$1);
});

jayq.core.slide_down = (function jayq$core$slide_down(var_args){
var args__37886__auto__ = [];
var len__37879__auto___43819 = arguments.length;
var i__37880__auto___43820 = (0);
while(true){
if((i__37880__auto___43820 < len__37879__auto___43819)){
args__37886__auto__.push((arguments[i__37880__auto___43820]));

var G__43821 = (i__37880__auto___43820 + (1));
i__37880__auto___43820 = G__43821;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((1) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((1)),(0),null)):null);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37887__auto__);
});

jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43815){
var vec__43816 = p__43815;
var speed = cljs.core.nth.call(null,vec__43816,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43816,(1),null);
return $elem.slideDown(speed,on_finish);
});

jayq.core.slide_down.cljs$lang$maxFixedArity = (1);

jayq.core.slide_down.cljs$lang$applyTo = (function (seq43813){
var G__43814 = cljs.core.first.call(null,seq43813);
var seq43813__$1 = cljs.core.next.call(null,seq43813);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic(G__43814,seq43813__$1);
});

jayq.core.siblings = (function jayq$core$siblings(var_args){
var args43822 = [];
var len__37879__auto___43825 = arguments.length;
var i__37880__auto___43826 = (0);
while(true){
if((i__37880__auto___43826 < len__37879__auto___43825)){
args43822.push((arguments[i__37880__auto___43826]));

var G__43827 = (i__37880__auto___43826 + (1));
i__37880__auto___43826 = G__43827;
continue;
} else {
}
break;
}

var G__43824 = args43822.length;
switch (G__43824) {
case 1:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43822.length)].join('')));

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
var args43829 = [];
var len__37879__auto___43832 = arguments.length;
var i__37880__auto___43833 = (0);
while(true){
if((i__37880__auto___43833 < len__37879__auto___43832)){
args43829.push((arguments[i__37880__auto___43833]));

var G__43834 = (i__37880__auto___43833 + (1));
i__37880__auto___43833 = G__43834;
continue;
} else {
}
break;
}

var G__43831 = args43829.length;
switch (G__43831) {
case 1:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43829.length)].join('')));

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
var args43836 = [];
var len__37879__auto___43839 = arguments.length;
var i__37880__auto___43840 = (0);
while(true){
if((i__37880__auto___43840 < len__37879__auto___43839)){
args43836.push((arguments[i__37880__auto___43840]));

var G__43841 = (i__37880__auto___43840 + (1));
i__37880__auto___43840 = G__43841;
continue;
} else {
}
break;
}

var G__43838 = args43836.length;
switch (G__43838) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43836.length)].join('')));

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
var args43843 = [];
var len__37879__auto___43846 = arguments.length;
var i__37880__auto___43847 = (0);
while(true){
if((i__37880__auto___43847 < len__37879__auto___43846)){
args43843.push((arguments[i__37880__auto___43847]));

var G__43848 = (i__37880__auto___43847 + (1));
i__37880__auto___43847 = G__43848;
continue;
} else {
}
break;
}

var G__43845 = args43843.length;
switch (G__43845) {
case 2:
return jayq.core.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43843.length)].join('')));

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
var args43850 = [];
var len__37879__auto___43853 = arguments.length;
var i__37880__auto___43854 = (0);
while(true){
if((i__37880__auto___43854 < len__37879__auto___43853)){
args43850.push((arguments[i__37880__auto___43854]));

var G__43855 = (i__37880__auto___43854 + (1));
i__37880__auto___43854 = G__43855;
continue;
} else {
}
break;
}

var G__43852 = args43850.length;
switch (G__43852) {
case 1:
return jayq.core.next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43850.length)].join('')));

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
var args43857 = [];
var len__37879__auto___43860 = arguments.length;
var i__37880__auto___43861 = (0);
while(true){
if((i__37880__auto___43861 < len__37879__auto___43860)){
args43857.push((arguments[i__37880__auto___43861]));

var G__43862 = (i__37880__auto___43861 + (1));
i__37880__auto___43861 = G__43862;
continue;
} else {
}
break;
}

var G__43859 = args43857.length;
switch (G__43859) {
case 1:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43857.length)].join('')));

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
var args43864 = [];
var len__37879__auto___43867 = arguments.length;
var i__37880__auto___43868 = (0);
while(true){
if((i__37880__auto___43868 < len__37879__auto___43867)){
args43864.push((arguments[i__37880__auto___43868]));

var G__43869 = (i__37880__auto___43868 + (1));
i__37880__auto___43868 = G__43869;
continue;
} else {
}
break;
}

var G__43866 = args43864.length;
switch (G__43866) {
case 1:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43864.length)].join('')));

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
var args43871 = [];
var len__37879__auto___43874 = arguments.length;
var i__37880__auto___43875 = (0);
while(true){
if((i__37880__auto___43875 < len__37879__auto___43874)){
args43871.push((arguments[i__37880__auto___43875]));

var G__43876 = (i__37880__auto___43875 + (1));
i__37880__auto___43875 = G__43876;
continue;
} else {
}
break;
}

var G__43873 = args43871.length;
switch (G__43873) {
case 1:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43871.length)].join('')));

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
var args43878 = [];
var len__37879__auto___43881 = arguments.length;
var i__37880__auto___43882 = (0);
while(true){
if((i__37880__auto___43882 < len__37879__auto___43881)){
args43878.push((arguments[i__37880__auto___43882]));

var G__43883 = (i__37880__auto___43882 + (1));
i__37880__auto___43882 = G__43883;
continue;
} else {
}
break;
}

var G__43880 = args43878.length;
switch (G__43880) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43878.length)].join('')));

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
var args43885 = [];
var len__37879__auto___43888 = arguments.length;
var i__37880__auto___43889 = (0);
while(true){
if((i__37880__auto___43889 < len__37879__auto___43888)){
args43885.push((arguments[i__37880__auto___43889]));

var G__43890 = (i__37880__auto___43889 + (1));
i__37880__auto___43889 = G__43890;
continue;
} else {
}
break;
}

var G__43887 = args43885.length;
switch (G__43887) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43885.length)].join('')));

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
var args__37886__auto__ = [];
var len__37879__auto___43899 = arguments.length;
var i__37880__auto___43900 = (0);
while(true){
if((i__37880__auto___43900 < len__37879__auto___43899)){
args__37886__auto__.push((arguments[i__37880__auto___43900]));

var G__43901 = (i__37880__auto___43900 + (1));
i__37880__auto___43900 = G__43901;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((2) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((2)),(0),null)):null);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37887__auto__);
});

jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,selector,p__43895){
var vec__43896 = p__43895;
var context = cljs.core.nth.call(null,vec__43896,(0),null);
return $elem.closest(jayq.core.__GT_selector.call(null,selector),context);
});

jayq.core.closest.cljs$lang$maxFixedArity = (2);

jayq.core.closest.cljs$lang$applyTo = (function (seq43892){
var G__43893 = cljs.core.first.call(null,seq43892);
var seq43892__$1 = cljs.core.next.call(null,seq43892);
var G__43894 = cljs.core.first.call(null,seq43892__$1);
var seq43892__$2 = cljs.core.next.call(null,seq43892__$1);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic(G__43893,G__43894,seq43892__$2);
});

jayq.core.clone = (function jayq$core$clone($elem){
return $elem.clone();
});
jayq.core.html = (function jayq$core$html(var_args){
var args43902 = [];
var len__37879__auto___43905 = arguments.length;
var i__37880__auto___43906 = (0);
while(true){
if((i__37880__auto___43906 < len__37879__auto___43905)){
args43902.push((arguments[i__37880__auto___43906]));

var G__43907 = (i__37880__auto___43906 + (1));
i__37880__auto___43906 = G__43907;
continue;
} else {
}
break;
}

var G__43904 = args43902.length;
switch (G__43904) {
case 2:
return jayq.core.html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43902.length)].join('')));

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
var args43909 = [];
var len__37879__auto___43912 = arguments.length;
var i__37880__auto___43913 = (0);
while(true){
if((i__37880__auto___43913 < len__37879__auto___43912)){
args43909.push((arguments[i__37880__auto___43913]));

var G__43914 = (i__37880__auto___43913 + (1));
i__37880__auto___43913 = G__43914;
continue;
} else {
}
break;
}

var G__43911 = args43909.length;
switch (G__43911) {
case 2:
return jayq.core.val.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.val.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43909.length)].join('')));

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
var args43916 = [];
var len__37879__auto___43919 = arguments.length;
var i__37880__auto___43920 = (0);
while(true){
if((i__37880__auto___43920 < len__37879__auto___43919)){
args43916.push((arguments[i__37880__auto___43920]));

var G__43921 = (i__37880__auto___43920 + (1));
i__37880__auto___43920 = G__43921;
continue;
} else {
}
break;
}

var G__43918 = args43916.length;
switch (G__43918) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43916.length)].join('')));

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
var args43923 = [];
var len__37879__auto___43926 = arguments.length;
var i__37880__auto___43927 = (0);
while(true){
if((i__37880__auto___43927 < len__37879__auto___43926)){
args43923.push((arguments[i__37880__auto___43927]));

var G__43928 = (i__37880__auto___43927 + (1));
i__37880__auto___43927 = G__43928;
continue;
} else {
}
break;
}

var G__43925 = args43923.length;
switch (G__43925) {
case 2:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43923.length)].join('')));

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
jayq.core.preprocess_request = (function jayq$core$preprocess_request(p__43932){
var map__43935 = p__43932;
var map__43935__$1 = ((((!((map__43935 == null)))?((((map__43935.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43935.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43935):map__43935);
var request = map__43935__$1;
var data = cljs.core.get.call(null,map__43935__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var contentType = cljs.core.get.call(null,map__43935__$1,new cljs.core.Keyword(null,"contentType","contentType",-1462509576));
var ct = jayq.core.__GT_content_type.call(null,contentType);
return ((function (ct,map__43935,map__43935__$1,request,data,contentType){
return (function (p1__43931_SHARP_){
if(cljs.core.truth_((function (){var and__36792__auto__ = ct;
if(cljs.core.truth_(and__36792__auto__)){
return jayq.core.clj_content_type_QMARK_.call(null,ct);
} else {
return and__36792__auto__;
}
})())){
return cljs.core.assoc.call(null,p1__43931_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.pr_str.call(null,data));
} else {
return p1__43931_SHARP_;
}
});})(ct,map__43935,map__43935__$1,request,data,contentType))
.call(null,((function (ct,map__43935,map__43935__$1,request,data,contentType){
return (function (p1__43930_SHARP_){
if(cljs.core.truth_(ct)){
return cljs.core.assoc.call(null,p1__43930_SHARP_,new cljs.core.Keyword(null,"contentType","contentType",-1462509576),ct);
} else {
return p1__43930_SHARP_;
}
});})(ct,map__43935,map__43935__$1,request,data,contentType))
.call(null,request));
});
jayq.core.__GT_ajax_settings = (function jayq$core$__GT_ajax_settings(request){
return cljs.core.clj__GT_js.call(null,jayq.core.preprocess_request.call(null,request));
});
jayq.core.ajax = (function jayq$core$ajax(var_args){
var args43937 = [];
var len__37879__auto___43940 = arguments.length;
var i__37880__auto___43941 = (0);
while(true){
if((i__37880__auto___43941 < len__37879__auto___43940)){
args43937.push((arguments[i__37880__auto___43941]));

var G__43942 = (i__37880__auto___43941 + (1));
i__37880__auto___43941 = G__43942;
continue;
} else {
}
break;
}

var G__43939 = args43937.length;
switch (G__43939) {
case 2:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43937.length)].join('')));

}
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$2 = (function (url,settings){
return jQuery.ajax(url,jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$1 = (function (settings){
return jQuery.ajax(jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$lang$maxFixedArity = 2;

jayq.core.xhr = (function jayq$core$xhr(p__43944,content,callback){
var vec__43948 = p__43944;
var method = cljs.core.nth.call(null,vec__43948,(0),null);
var uri = cljs.core.nth.call(null,vec__43948,(1),null);
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
var args__37886__auto__ = [];
var len__37879__auto___43958 = arguments.length;
var i__37880__auto___43959 = (0);
while(true){
if((i__37880__auto___43959 < len__37879__auto___43958)){
args__37886__auto__.push((arguments[i__37880__auto___43959]));

var G__43960 = (i__37880__auto___43959 + (1));
i__37880__auto___43959 = G__43960;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((2) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((2)),(0),null)):null);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37887__auto__);
});

jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,ev,p__43954){
var vec__43955 = p__43954;
var func = cljs.core.nth.call(null,vec__43955,(0),null);
return $elem.unbind(cljs.core.name.call(null,ev),func);
});

jayq.core.unbind.cljs$lang$maxFixedArity = (2);

jayq.core.unbind.cljs$lang$applyTo = (function (seq43951){
var G__43952 = cljs.core.first.call(null,seq43951);
var seq43951__$1 = cljs.core.next.call(null,seq43951);
var G__43953 = cljs.core.first.call(null,seq43951__$1);
var seq43951__$2 = cljs.core.next.call(null,seq43951__$1);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic(G__43952,G__43953,seq43951__$2);
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
var args__37886__auto__ = [];
var len__37879__auto___43968 = arguments.length;
var i__37880__auto___43969 = (0);
while(true){
if((i__37880__auto___43969 < len__37879__auto___43968)){
args__37886__auto__.push((arguments[i__37880__auto___43969]));

var G__43970 = (i__37880__auto___43969 + (1));
i__37880__auto___43969 = G__43970;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((2) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((2)),(0),null)):null);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37887__auto__);
});

jayq.core.on.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__43964){
var vec__43965 = p__43964;
var sel = cljs.core.nth.call(null,vec__43965,(0),null);
var data = cljs.core.nth.call(null,vec__43965,(1),null);
var handler = cljs.core.nth.call(null,vec__43965,(2),null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.on.cljs$lang$maxFixedArity = (2);

jayq.core.on.cljs$lang$applyTo = (function (seq43961){
var G__43962 = cljs.core.first.call(null,seq43961);
var seq43961__$1 = cljs.core.next.call(null,seq43961);
var G__43963 = cljs.core.first.call(null,seq43961__$1);
var seq43961__$2 = cljs.core.next.call(null,seq43961__$1);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic(G__43962,G__43963,seq43961__$2);
});

jayq.core.one = (function jayq$core$one(var_args){
var args__37886__auto__ = [];
var len__37879__auto___43978 = arguments.length;
var i__37880__auto___43979 = (0);
while(true){
if((i__37880__auto___43979 < len__37879__auto___43978)){
args__37886__auto__.push((arguments[i__37880__auto___43979]));

var G__43980 = (i__37880__auto___43979 + (1));
i__37880__auto___43979 = G__43980;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((2) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((2)),(0),null)):null);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37887__auto__);
});

jayq.core.one.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__43974){
var vec__43975 = p__43974;
var sel = cljs.core.nth.call(null,vec__43975,(0),null);
var data = cljs.core.nth.call(null,vec__43975,(1),null);
var handler = cljs.core.nth.call(null,vec__43975,(2),null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.one.cljs$lang$maxFixedArity = (2);

jayq.core.one.cljs$lang$applyTo = (function (seq43971){
var G__43972 = cljs.core.first.call(null,seq43971);
var seq43971__$1 = cljs.core.next.call(null,seq43971);
var G__43973 = cljs.core.first.call(null,seq43971__$1);
var seq43971__$2 = cljs.core.next.call(null,seq43971__$1);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic(G__43972,G__43973,seq43971__$2);
});

jayq.core.off = (function jayq$core$off(var_args){
var args__37886__auto__ = [];
var len__37879__auto___43988 = arguments.length;
var i__37880__auto___43989 = (0);
while(true){
if((i__37880__auto___43989 < len__37879__auto___43988)){
args__37886__auto__.push((arguments[i__37880__auto___43989]));

var G__43990 = (i__37880__auto___43989 + (1));
i__37880__auto___43989 = G__43990;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((2) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((2)),(0),null)):null);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37887__auto__);
});

jayq.core.off.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__43984){
var vec__43985 = p__43984;
var sel = cljs.core.nth.call(null,vec__43985,(0),null);
var handler = cljs.core.nth.call(null,vec__43985,(1),null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),handler);
});

jayq.core.off.cljs$lang$maxFixedArity = (2);

jayq.core.off.cljs$lang$applyTo = (function (seq43981){
var G__43982 = cljs.core.first.call(null,seq43981);
var seq43981__$1 = cljs.core.next.call(null,seq43981);
var G__43983 = cljs.core.first.call(null,seq43981__$1);
var seq43981__$2 = cljs.core.next.call(null,seq43981__$1);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic(G__43982,G__43983,seq43981__$2);
});

jayq.core.prevent = (function jayq$core$prevent(e){
return e.preventDefault();
});
jayq.core.height = (function jayq$core$height(var_args){
var args43991 = [];
var len__37879__auto___43994 = arguments.length;
var i__37880__auto___43995 = (0);
while(true){
if((i__37880__auto___43995 < len__37879__auto___43994)){
args43991.push((arguments[i__37880__auto___43995]));

var G__43996 = (i__37880__auto___43995 + (1));
i__37880__auto___43995 = G__43996;
continue;
} else {
}
break;
}

var G__43993 = args43991.length;
switch (G__43993) {
case 2:
return jayq.core.height.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.height.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43991.length)].join('')));

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
var args43998 = [];
var len__37879__auto___44001 = arguments.length;
var i__37880__auto___44002 = (0);
while(true){
if((i__37880__auto___44002 < len__37879__auto___44001)){
args43998.push((arguments[i__37880__auto___44002]));

var G__44003 = (i__37880__auto___44002 + (1));
i__37880__auto___44002 = G__44003;
continue;
} else {
}
break;
}

var G__44000 = args43998.length;
switch (G__44000) {
case 2:
return jayq.core.width.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.width.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43998.length)].join('')));

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
var args44005 = [];
var len__37879__auto___44008 = arguments.length;
var i__37880__auto___44009 = (0);
while(true){
if((i__37880__auto___44009 < len__37879__auto___44008)){
args44005.push((arguments[i__37880__auto___44009]));

var G__44010 = (i__37880__auto___44009 + (1));
i__37880__auto___44009 = G__44010;
continue;
} else {
}
break;
}

var G__44007 = args44005.length;
switch (G__44007) {
case 2:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44005.length)].join('')));

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
var args44012 = [];
var len__37879__auto___44015 = arguments.length;
var i__37880__auto___44016 = (0);
while(true){
if((i__37880__auto___44016 < len__37879__auto___44015)){
args44012.push((arguments[i__37880__auto___44016]));

var G__44017 = (i__37880__auto___44016 + (1));
i__37880__auto___44016 = G__44017;
continue;
} else {
}
break;
}

var G__44014 = args44012.length;
switch (G__44014) {
case 1:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44012.length)].join('')));

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
var args44019 = [];
var len__37879__auto___44022 = arguments.length;
var i__37880__auto___44023 = (0);
while(true){
if((i__37880__auto___44023 < len__37879__auto___44022)){
args44019.push((arguments[i__37880__auto___44023]));

var G__44024 = (i__37880__auto___44023 + (1));
i__37880__auto___44023 = G__44024;
continue;
} else {
}
break;
}

var G__44021 = args44019.length;
switch (G__44021) {
case 1:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44019.length)].join('')));

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
var args44026 = [];
var len__37879__auto___44029 = arguments.length;
var i__37880__auto___44030 = (0);
while(true){
if((i__37880__auto___44030 < len__37879__auto___44029)){
args44026.push((arguments[i__37880__auto___44030]));

var G__44031 = (i__37880__auto___44030 + (1));
i__37880__auto___44030 = G__44031;
continue;
} else {
}
break;
}

var G__44028 = args44026.length;
switch (G__44028) {
case 3:
return jayq.core.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.then.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44026.length)].join('')));

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
var args__37886__auto__ = [];
var len__37879__auto___44035 = arguments.length;
var i__37880__auto___44036 = (0);
while(true){
if((i__37880__auto___44036 < len__37879__auto___44035)){
args__37886__auto__.push((arguments[i__37880__auto___44036]));

var G__44037 = (i__37880__auto___44036 + (1));
i__37880__auto___44036 = G__44037;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((1) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((1)),(0),null)):null);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37887__auto__);
});

jayq.core.done.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.done.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.done.cljs$lang$maxFixedArity = (1);

jayq.core.done.cljs$lang$applyTo = (function (seq44033){
var G__44034 = cljs.core.first.call(null,seq44033);
var seq44033__$1 = cljs.core.next.call(null,seq44033);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic(G__44034,seq44033__$1);
});

jayq.core.fail = (function jayq$core$fail(var_args){
var args__37886__auto__ = [];
var len__37879__auto___44040 = arguments.length;
var i__37880__auto___44041 = (0);
while(true){
if((i__37880__auto___44041 < len__37879__auto___44040)){
args__37886__auto__.push((arguments[i__37880__auto___44041]));

var G__44042 = (i__37880__auto___44041 + (1));
i__37880__auto___44041 = G__44042;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((1) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((1)),(0),null)):null);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37887__auto__);
});

jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.fail.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.fail.cljs$lang$maxFixedArity = (1);

jayq.core.fail.cljs$lang$applyTo = (function (seq44038){
var G__44039 = cljs.core.first.call(null,seq44038);
var seq44038__$1 = cljs.core.next.call(null,seq44038);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__44039,seq44038__$1);
});

jayq.core.progress = (function jayq$core$progress(deferred,fns_args){
return deferred.progress(cljs.core.clj__GT_js.call(null,fns_args));
});
jayq.core.promise = (function jayq$core$promise(var_args){
var args44043 = [];
var len__37879__auto___44046 = arguments.length;
var i__37880__auto___44047 = (0);
while(true){
if((i__37880__auto___44047 < len__37879__auto___44046)){
args44043.push((arguments[i__37880__auto___44047]));

var G__44048 = (i__37880__auto___44047 + (1));
i__37880__auto___44047 = G__44048;
continue;
} else {
}
break;
}

var G__44045 = args44043.length;
switch (G__44045) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44043.length)].join('')));

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
var args__37886__auto__ = [];
var len__37879__auto___44052 = arguments.length;
var i__37880__auto___44053 = (0);
while(true){
if((i__37880__auto___44053 < len__37879__auto___44052)){
args__37886__auto__.push((arguments[i__37880__auto___44053]));

var G__44054 = (i__37880__auto___44053 + (1));
i__37880__auto___44053 = G__44054;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((1) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((1)),(0),null)):null);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37887__auto__);
});

jayq.core.always.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.always.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.always.cljs$lang$maxFixedArity = (1);

jayq.core.always.cljs$lang$applyTo = (function (seq44050){
var G__44051 = cljs.core.first.call(null,seq44050);
var seq44050__$1 = cljs.core.next.call(null,seq44050);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic(G__44051,seq44050__$1);
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
var args44055 = [];
var len__37879__auto___44058 = arguments.length;
var i__37880__auto___44059 = (0);
while(true){
if((i__37880__auto___44059 < len__37879__auto___44058)){
args44055.push((arguments[i__37880__auto___44059]));

var G__44060 = (i__37880__auto___44059 + (1));
i__37880__auto___44059 = G__44060;
continue;
} else {
}
break;
}

var G__44057 = args44055.length;
switch (G__44057) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44055.length)].join('')));

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