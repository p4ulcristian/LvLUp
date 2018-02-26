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
var args44769 = [];
var len__37847__auto___44772 = arguments.length;
var i__37848__auto___44773 = (0);
while(true){
if((i__37848__auto___44773 < len__37847__auto___44772)){
args44769.push((arguments[i__37848__auto___44773]));

var G__44774 = (i__37848__auto___44773 + (1));
i__37848__auto___44773 = G__44774;
continue;
} else {
}
break;
}

var G__44771 = args44769.length;
switch (G__44771) {
case 1:
return jayq.core.$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44769.length)].join('')));

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
var or__36772__auto__ = this$__$1.slice(k,(k + (1)));
if(cljs.core.truth_(or__36772__auto__)){
return or__36772__auto__;
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
var G__44777 = null;
var G__44777__2 = (function (self__,k){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__44777__3 = (function (self__,k,not_found){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__44777 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__44777__2.call(this,self__,k);
case 3:
return G__44777__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44777.cljs$core$IFn$_invoke$arity$2 = G__44777__2;
G__44777.cljs$core$IFn$_invoke$arity$3 = G__44777__3;
return G__44777;
})()
;

jQuery.prototype.apply = (function (self__,args44776){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args44776)));
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
var args__37854__auto__ = [];
var len__37847__auto___44785 = arguments.length;
var i__37848__auto___44786 = (0);
while(true){
if((i__37848__auto___44786 < len__37847__auto___44785)){
args__37854__auto__.push((arguments[i__37848__auto___44786]));

var G__44787 = (i__37848__auto___44786 + (1));
i__37848__auto___44786 = G__44787;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((2) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((2)),(0),null)):null);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37855__auto__);
});

jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,props,p__44781){
var vec__44782 = p__44781;
var speed = cljs.core.nth.call(null,vec__44782,(0),null);
var on_finish = cljs.core.nth.call(null,vec__44782,(1),null);
return $elem.animate(cljs.core.clj__GT_js.call(null,props),speed,on_finish);
});

jayq.core.anim.cljs$lang$maxFixedArity = (2);

jayq.core.anim.cljs$lang$applyTo = (function (seq44778){
var G__44779 = cljs.core.first.call(null,seq44778);
var seq44778__$1 = cljs.core.next.call(null,seq44778);
var G__44780 = cljs.core.first.call(null,seq44778__$1);
var seq44778__$2 = cljs.core.next.call(null,seq44778__$1);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic(G__44779,G__44780,seq44778__$2);
});

jayq.core.text = (function jayq$core$text(var_args){
var args44788 = [];
var len__37847__auto___44791 = arguments.length;
var i__37848__auto___44792 = (0);
while(true){
if((i__37848__auto___44792 < len__37847__auto___44791)){
args44788.push((arguments[i__37848__auto___44792]));

var G__44793 = (i__37848__auto___44792 + (1));
i__37848__auto___44792 = G__44793;
continue;
} else {
}
break;
}

var G__44790 = args44788.length;
switch (G__44790) {
case 1:
return jayq.core.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44788.length)].join('')));

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
var args44795 = [];
var len__37847__auto___44798 = arguments.length;
var i__37848__auto___44799 = (0);
while(true){
if((i__37848__auto___44799 < len__37847__auto___44798)){
args44795.push((arguments[i__37848__auto___44799]));

var G__44800 = (i__37848__auto___44799 + (1));
i__37848__auto___44799 = G__44800;
continue;
} else {
}
break;
}

var G__44797 = args44795.length;
switch (G__44797) {
case 2:
return jayq.core.css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.css.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44795.length)].join('')));

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
var args44802 = [];
var len__37847__auto___44805 = arguments.length;
var i__37848__auto___44806 = (0);
while(true){
if((i__37848__auto___44806 < len__37847__auto___44805)){
args44802.push((arguments[i__37848__auto___44806]));

var G__44807 = (i__37848__auto___44806 + (1));
i__37848__auto___44806 = G__44807;
continue;
} else {
}
break;
}

var G__44804 = args44802.length;
switch (G__44804) {
case 3:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44802.length)].join('')));

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
var args44809 = [];
var len__37847__auto___44812 = arguments.length;
var i__37848__auto___44813 = (0);
while(true){
if((i__37848__auto___44813 < len__37847__auto___44812)){
args44809.push((arguments[i__37848__auto___44813]));

var G__44814 = (i__37848__auto___44813 + (1));
i__37848__auto___44813 = G__44814;
continue;
} else {
}
break;
}

var G__44811 = args44809.length;
switch (G__44811) {
case 3:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44809.length)].join('')));

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
var args44816 = [];
var len__37847__auto___44819 = arguments.length;
var i__37848__auto___44820 = (0);
while(true){
if((i__37848__auto___44820 < len__37847__auto___44819)){
args44816.push((arguments[i__37848__auto___44820]));

var G__44821 = (i__37848__auto___44820 + (1));
i__37848__auto___44820 = G__44821;
continue;
} else {
}
break;
}

var G__44818 = args44816.length;
switch (G__44818) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44816.length)].join('')));

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
var args44823 = [];
var len__37847__auto___44826 = arguments.length;
var i__37848__auto___44827 = (0);
while(true){
if((i__37848__auto___44827 < len__37847__auto___44826)){
args44823.push((arguments[i__37848__auto___44827]));

var G__44828 = (i__37848__auto___44827 + (1));
i__37848__auto___44827 = G__44828;
continue;
} else {
}
break;
}

var G__44825 = args44823.length;
switch (G__44825) {
case 1:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44823.length)].join('')));

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
var args44830 = [];
var len__37847__auto___44833 = arguments.length;
var i__37848__auto___44834 = (0);
while(true){
if((i__37848__auto___44834 < len__37847__auto___44833)){
args44830.push((arguments[i__37848__auto___44834]));

var G__44835 = (i__37848__auto___44834 + (1));
i__37848__auto___44834 = G__44835;
continue;
} else {
}
break;
}

var G__44832 = args44830.length;
switch (G__44832) {
case 2:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44830.length)].join('')));

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
var args__37854__auto__ = [];
var len__37847__auto___44843 = arguments.length;
var i__37848__auto___44844 = (0);
while(true){
if((i__37848__auto___44844 < len__37847__auto___44843)){
args__37854__auto__.push((arguments[i__37848__auto___44844]));

var G__44845 = (i__37848__auto___44844 + (1));
i__37848__auto___44844 = G__44845;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((1) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((1)),(0),null)):null);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37855__auto__);
});

jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__44839){
var vec__44840 = p__44839;
var speed = cljs.core.nth.call(null,vec__44840,(0),null);
var on_finish = cljs.core.nth.call(null,vec__44840,(1),null);
return $elem.hide(speed,on_finish);
});

jayq.core.hide.cljs$lang$maxFixedArity = (1);

jayq.core.hide.cljs$lang$applyTo = (function (seq44837){
var G__44838 = cljs.core.first.call(null,seq44837);
var seq44837__$1 = cljs.core.next.call(null,seq44837);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic(G__44838,seq44837__$1);
});

jayq.core.show = (function jayq$core$show(var_args){
var args__37854__auto__ = [];
var len__37847__auto___44852 = arguments.length;
var i__37848__auto___44853 = (0);
while(true){
if((i__37848__auto___44853 < len__37847__auto___44852)){
args__37854__auto__.push((arguments[i__37848__auto___44853]));

var G__44854 = (i__37848__auto___44853 + (1));
i__37848__auto___44853 = G__44854;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((1) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((1)),(0),null)):null);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37855__auto__);
});

jayq.core.show.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__44848){
var vec__44849 = p__44848;
var speed = cljs.core.nth.call(null,vec__44849,(0),null);
var on_finish = cljs.core.nth.call(null,vec__44849,(1),null);
return $elem.show(speed,on_finish);
});

jayq.core.show.cljs$lang$maxFixedArity = (1);

jayq.core.show.cljs$lang$applyTo = (function (seq44846){
var G__44847 = cljs.core.first.call(null,seq44846);
var seq44846__$1 = cljs.core.next.call(null,seq44846);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic(G__44847,seq44846__$1);
});

jayq.core.toggle = (function jayq$core$toggle(var_args){
var args__37854__auto__ = [];
var len__37847__auto___44861 = arguments.length;
var i__37848__auto___44862 = (0);
while(true){
if((i__37848__auto___44862 < len__37847__auto___44861)){
args__37854__auto__.push((arguments[i__37848__auto___44862]));

var G__44863 = (i__37848__auto___44862 + (1));
i__37848__auto___44862 = G__44863;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((1) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((1)),(0),null)):null);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37855__auto__);
});

jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__44857){
var vec__44858 = p__44857;
var speed = cljs.core.nth.call(null,vec__44858,(0),null);
var on_finish = cljs.core.nth.call(null,vec__44858,(1),null);
return $elem.toggle(speed,on_finish);
});

jayq.core.toggle.cljs$lang$maxFixedArity = (1);

jayq.core.toggle.cljs$lang$applyTo = (function (seq44855){
var G__44856 = cljs.core.first.call(null,seq44855);
var seq44855__$1 = cljs.core.next.call(null,seq44855);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic(G__44856,seq44855__$1);
});

jayq.core.fade_out = (function jayq$core$fade_out(var_args){
var args__37854__auto__ = [];
var len__37847__auto___44870 = arguments.length;
var i__37848__auto___44871 = (0);
while(true){
if((i__37848__auto___44871 < len__37847__auto___44870)){
args__37854__auto__.push((arguments[i__37848__auto___44871]));

var G__44872 = (i__37848__auto___44871 + (1));
i__37848__auto___44871 = G__44872;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((1) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((1)),(0),null)):null);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37855__auto__);
});

jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__44866){
var vec__44867 = p__44866;
var speed = cljs.core.nth.call(null,vec__44867,(0),null);
var on_finish = cljs.core.nth.call(null,vec__44867,(1),null);
return $elem.fadeOut(speed,on_finish);
});

jayq.core.fade_out.cljs$lang$maxFixedArity = (1);

jayq.core.fade_out.cljs$lang$applyTo = (function (seq44864){
var G__44865 = cljs.core.first.call(null,seq44864);
var seq44864__$1 = cljs.core.next.call(null,seq44864);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic(G__44865,seq44864__$1);
});

jayq.core.fade_in = (function jayq$core$fade_in(var_args){
var args__37854__auto__ = [];
var len__37847__auto___44879 = arguments.length;
var i__37848__auto___44880 = (0);
while(true){
if((i__37848__auto___44880 < len__37847__auto___44879)){
args__37854__auto__.push((arguments[i__37848__auto___44880]));

var G__44881 = (i__37848__auto___44880 + (1));
i__37848__auto___44880 = G__44881;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((1) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((1)),(0),null)):null);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37855__auto__);
});

jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__44875){
var vec__44876 = p__44875;
var speed = cljs.core.nth.call(null,vec__44876,(0),null);
var on_finish = cljs.core.nth.call(null,vec__44876,(1),null);
return $elem.fadeIn(speed,on_finish);
});

jayq.core.fade_in.cljs$lang$maxFixedArity = (1);

jayq.core.fade_in.cljs$lang$applyTo = (function (seq44873){
var G__44874 = cljs.core.first.call(null,seq44873);
var seq44873__$1 = cljs.core.next.call(null,seq44873);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic(G__44874,seq44873__$1);
});

jayq.core.slide_up = (function jayq$core$slide_up(var_args){
var args__37854__auto__ = [];
var len__37847__auto___44888 = arguments.length;
var i__37848__auto___44889 = (0);
while(true){
if((i__37848__auto___44889 < len__37847__auto___44888)){
args__37854__auto__.push((arguments[i__37848__auto___44889]));

var G__44890 = (i__37848__auto___44889 + (1));
i__37848__auto___44889 = G__44890;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((1) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((1)),(0),null)):null);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37855__auto__);
});

jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__44884){
var vec__44885 = p__44884;
var speed = cljs.core.nth.call(null,vec__44885,(0),null);
var on_finish = cljs.core.nth.call(null,vec__44885,(1),null);
return $elem.slideUp(speed,on_finish);
});

jayq.core.slide_up.cljs$lang$maxFixedArity = (1);

jayq.core.slide_up.cljs$lang$applyTo = (function (seq44882){
var G__44883 = cljs.core.first.call(null,seq44882);
var seq44882__$1 = cljs.core.next.call(null,seq44882);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic(G__44883,seq44882__$1);
});

jayq.core.slide_down = (function jayq$core$slide_down(var_args){
var args__37854__auto__ = [];
var len__37847__auto___44897 = arguments.length;
var i__37848__auto___44898 = (0);
while(true){
if((i__37848__auto___44898 < len__37847__auto___44897)){
args__37854__auto__.push((arguments[i__37848__auto___44898]));

var G__44899 = (i__37848__auto___44898 + (1));
i__37848__auto___44898 = G__44899;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((1) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((1)),(0),null)):null);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37855__auto__);
});

jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__44893){
var vec__44894 = p__44893;
var speed = cljs.core.nth.call(null,vec__44894,(0),null);
var on_finish = cljs.core.nth.call(null,vec__44894,(1),null);
return $elem.slideDown(speed,on_finish);
});

jayq.core.slide_down.cljs$lang$maxFixedArity = (1);

jayq.core.slide_down.cljs$lang$applyTo = (function (seq44891){
var G__44892 = cljs.core.first.call(null,seq44891);
var seq44891__$1 = cljs.core.next.call(null,seq44891);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic(G__44892,seq44891__$1);
});

jayq.core.siblings = (function jayq$core$siblings(var_args){
var args44900 = [];
var len__37847__auto___44903 = arguments.length;
var i__37848__auto___44904 = (0);
while(true){
if((i__37848__auto___44904 < len__37847__auto___44903)){
args44900.push((arguments[i__37848__auto___44904]));

var G__44905 = (i__37848__auto___44904 + (1));
i__37848__auto___44904 = G__44905;
continue;
} else {
}
break;
}

var G__44902 = args44900.length;
switch (G__44902) {
case 1:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44900.length)].join('')));

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
var args44907 = [];
var len__37847__auto___44910 = arguments.length;
var i__37848__auto___44911 = (0);
while(true){
if((i__37848__auto___44911 < len__37847__auto___44910)){
args44907.push((arguments[i__37848__auto___44911]));

var G__44912 = (i__37848__auto___44911 + (1));
i__37848__auto___44911 = G__44912;
continue;
} else {
}
break;
}

var G__44909 = args44907.length;
switch (G__44909) {
case 1:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44907.length)].join('')));

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
var args44914 = [];
var len__37847__auto___44917 = arguments.length;
var i__37848__auto___44918 = (0);
while(true){
if((i__37848__auto___44918 < len__37847__auto___44917)){
args44914.push((arguments[i__37848__auto___44918]));

var G__44919 = (i__37848__auto___44918 + (1));
i__37848__auto___44918 = G__44919;
continue;
} else {
}
break;
}

var G__44916 = args44914.length;
switch (G__44916) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44914.length)].join('')));

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
var args44921 = [];
var len__37847__auto___44924 = arguments.length;
var i__37848__auto___44925 = (0);
while(true){
if((i__37848__auto___44925 < len__37847__auto___44924)){
args44921.push((arguments[i__37848__auto___44925]));

var G__44926 = (i__37848__auto___44925 + (1));
i__37848__auto___44925 = G__44926;
continue;
} else {
}
break;
}

var G__44923 = args44921.length;
switch (G__44923) {
case 2:
return jayq.core.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44921.length)].join('')));

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
var args44928 = [];
var len__37847__auto___44931 = arguments.length;
var i__37848__auto___44932 = (0);
while(true){
if((i__37848__auto___44932 < len__37847__auto___44931)){
args44928.push((arguments[i__37848__auto___44932]));

var G__44933 = (i__37848__auto___44932 + (1));
i__37848__auto___44932 = G__44933;
continue;
} else {
}
break;
}

var G__44930 = args44928.length;
switch (G__44930) {
case 1:
return jayq.core.next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44928.length)].join('')));

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
var args44935 = [];
var len__37847__auto___44938 = arguments.length;
var i__37848__auto___44939 = (0);
while(true){
if((i__37848__auto___44939 < len__37847__auto___44938)){
args44935.push((arguments[i__37848__auto___44939]));

var G__44940 = (i__37848__auto___44939 + (1));
i__37848__auto___44939 = G__44940;
continue;
} else {
}
break;
}

var G__44937 = args44935.length;
switch (G__44937) {
case 1:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44935.length)].join('')));

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
var args44942 = [];
var len__37847__auto___44945 = arguments.length;
var i__37848__auto___44946 = (0);
while(true){
if((i__37848__auto___44946 < len__37847__auto___44945)){
args44942.push((arguments[i__37848__auto___44946]));

var G__44947 = (i__37848__auto___44946 + (1));
i__37848__auto___44946 = G__44947;
continue;
} else {
}
break;
}

var G__44944 = args44942.length;
switch (G__44944) {
case 1:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44942.length)].join('')));

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
var args44949 = [];
var len__37847__auto___44952 = arguments.length;
var i__37848__auto___44953 = (0);
while(true){
if((i__37848__auto___44953 < len__37847__auto___44952)){
args44949.push((arguments[i__37848__auto___44953]));

var G__44954 = (i__37848__auto___44953 + (1));
i__37848__auto___44953 = G__44954;
continue;
} else {
}
break;
}

var G__44951 = args44949.length;
switch (G__44951) {
case 1:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44949.length)].join('')));

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
var args44956 = [];
var len__37847__auto___44959 = arguments.length;
var i__37848__auto___44960 = (0);
while(true){
if((i__37848__auto___44960 < len__37847__auto___44959)){
args44956.push((arguments[i__37848__auto___44960]));

var G__44961 = (i__37848__auto___44960 + (1));
i__37848__auto___44960 = G__44961;
continue;
} else {
}
break;
}

var G__44958 = args44956.length;
switch (G__44958) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44956.length)].join('')));

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
var args44963 = [];
var len__37847__auto___44966 = arguments.length;
var i__37848__auto___44967 = (0);
while(true){
if((i__37848__auto___44967 < len__37847__auto___44966)){
args44963.push((arguments[i__37848__auto___44967]));

var G__44968 = (i__37848__auto___44967 + (1));
i__37848__auto___44967 = G__44968;
continue;
} else {
}
break;
}

var G__44965 = args44963.length;
switch (G__44965) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44963.length)].join('')));

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
var args__37854__auto__ = [];
var len__37847__auto___44977 = arguments.length;
var i__37848__auto___44978 = (0);
while(true){
if((i__37848__auto___44978 < len__37847__auto___44977)){
args__37854__auto__.push((arguments[i__37848__auto___44978]));

var G__44979 = (i__37848__auto___44978 + (1));
i__37848__auto___44978 = G__44979;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((2) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((2)),(0),null)):null);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37855__auto__);
});

jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,selector,p__44973){
var vec__44974 = p__44973;
var context = cljs.core.nth.call(null,vec__44974,(0),null);
return $elem.closest(jayq.core.__GT_selector.call(null,selector),context);
});

jayq.core.closest.cljs$lang$maxFixedArity = (2);

jayq.core.closest.cljs$lang$applyTo = (function (seq44970){
var G__44971 = cljs.core.first.call(null,seq44970);
var seq44970__$1 = cljs.core.next.call(null,seq44970);
var G__44972 = cljs.core.first.call(null,seq44970__$1);
var seq44970__$2 = cljs.core.next.call(null,seq44970__$1);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic(G__44971,G__44972,seq44970__$2);
});

jayq.core.clone = (function jayq$core$clone($elem){
return $elem.clone();
});
jayq.core.html = (function jayq$core$html(var_args){
var args44980 = [];
var len__37847__auto___44983 = arguments.length;
var i__37848__auto___44984 = (0);
while(true){
if((i__37848__auto___44984 < len__37847__auto___44983)){
args44980.push((arguments[i__37848__auto___44984]));

var G__44985 = (i__37848__auto___44984 + (1));
i__37848__auto___44984 = G__44985;
continue;
} else {
}
break;
}

var G__44982 = args44980.length;
switch (G__44982) {
case 2:
return jayq.core.html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44980.length)].join('')));

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
var args44987 = [];
var len__37847__auto___44990 = arguments.length;
var i__37848__auto___44991 = (0);
while(true){
if((i__37848__auto___44991 < len__37847__auto___44990)){
args44987.push((arguments[i__37848__auto___44991]));

var G__44992 = (i__37848__auto___44991 + (1));
i__37848__auto___44991 = G__44992;
continue;
} else {
}
break;
}

var G__44989 = args44987.length;
switch (G__44989) {
case 2:
return jayq.core.val.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.val.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44987.length)].join('')));

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
var args44994 = [];
var len__37847__auto___44997 = arguments.length;
var i__37848__auto___44998 = (0);
while(true){
if((i__37848__auto___44998 < len__37847__auto___44997)){
args44994.push((arguments[i__37848__auto___44998]));

var G__44999 = (i__37848__auto___44998 + (1));
i__37848__auto___44998 = G__44999;
continue;
} else {
}
break;
}

var G__44996 = args44994.length;
switch (G__44996) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44994.length)].join('')));

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
var args45001 = [];
var len__37847__auto___45004 = arguments.length;
var i__37848__auto___45005 = (0);
while(true){
if((i__37848__auto___45005 < len__37847__auto___45004)){
args45001.push((arguments[i__37848__auto___45005]));

var G__45006 = (i__37848__auto___45005 + (1));
i__37848__auto___45005 = G__45006;
continue;
} else {
}
break;
}

var G__45003 = args45001.length;
switch (G__45003) {
case 2:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45001.length)].join('')));

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
jayq.core.preprocess_request = (function jayq$core$preprocess_request(p__45010){
var map__45013 = p__45010;
var map__45013__$1 = ((((!((map__45013 == null)))?((((map__45013.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45013.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45013):map__45013);
var request = map__45013__$1;
var data = cljs.core.get.call(null,map__45013__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var contentType = cljs.core.get.call(null,map__45013__$1,new cljs.core.Keyword(null,"contentType","contentType",-1462509576));
var ct = jayq.core.__GT_content_type.call(null,contentType);
return ((function (ct,map__45013,map__45013__$1,request,data,contentType){
return (function (p1__45009_SHARP_){
if(cljs.core.truth_((function (){var and__36760__auto__ = ct;
if(cljs.core.truth_(and__36760__auto__)){
return jayq.core.clj_content_type_QMARK_.call(null,ct);
} else {
return and__36760__auto__;
}
})())){
return cljs.core.assoc.call(null,p1__45009_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.pr_str.call(null,data));
} else {
return p1__45009_SHARP_;
}
});})(ct,map__45013,map__45013__$1,request,data,contentType))
.call(null,((function (ct,map__45013,map__45013__$1,request,data,contentType){
return (function (p1__45008_SHARP_){
if(cljs.core.truth_(ct)){
return cljs.core.assoc.call(null,p1__45008_SHARP_,new cljs.core.Keyword(null,"contentType","contentType",-1462509576),ct);
} else {
return p1__45008_SHARP_;
}
});})(ct,map__45013,map__45013__$1,request,data,contentType))
.call(null,request));
});
jayq.core.__GT_ajax_settings = (function jayq$core$__GT_ajax_settings(request){
return cljs.core.clj__GT_js.call(null,jayq.core.preprocess_request.call(null,request));
});
jayq.core.ajax = (function jayq$core$ajax(var_args){
var args45015 = [];
var len__37847__auto___45018 = arguments.length;
var i__37848__auto___45019 = (0);
while(true){
if((i__37848__auto___45019 < len__37847__auto___45018)){
args45015.push((arguments[i__37848__auto___45019]));

var G__45020 = (i__37848__auto___45019 + (1));
i__37848__auto___45019 = G__45020;
continue;
} else {
}
break;
}

var G__45017 = args45015.length;
switch (G__45017) {
case 2:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45015.length)].join('')));

}
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$2 = (function (url,settings){
return jQuery.ajax(url,jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$1 = (function (settings){
return jQuery.ajax(jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$lang$maxFixedArity = 2;

jayq.core.xhr = (function jayq$core$xhr(p__45022,content,callback){
var vec__45026 = p__45022;
var method = cljs.core.nth.call(null,vec__45026,(0),null);
var uri = cljs.core.nth.call(null,vec__45026,(1),null);
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
var args__37854__auto__ = [];
var len__37847__auto___45036 = arguments.length;
var i__37848__auto___45037 = (0);
while(true){
if((i__37848__auto___45037 < len__37847__auto___45036)){
args__37854__auto__.push((arguments[i__37848__auto___45037]));

var G__45038 = (i__37848__auto___45037 + (1));
i__37848__auto___45037 = G__45038;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((2) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((2)),(0),null)):null);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37855__auto__);
});

jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,ev,p__45032){
var vec__45033 = p__45032;
var func = cljs.core.nth.call(null,vec__45033,(0),null);
return $elem.unbind(cljs.core.name.call(null,ev),func);
});

jayq.core.unbind.cljs$lang$maxFixedArity = (2);

jayq.core.unbind.cljs$lang$applyTo = (function (seq45029){
var G__45030 = cljs.core.first.call(null,seq45029);
var seq45029__$1 = cljs.core.next.call(null,seq45029);
var G__45031 = cljs.core.first.call(null,seq45029__$1);
var seq45029__$2 = cljs.core.next.call(null,seq45029__$1);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic(G__45030,G__45031,seq45029__$2);
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
var args__37854__auto__ = [];
var len__37847__auto___45046 = arguments.length;
var i__37848__auto___45047 = (0);
while(true){
if((i__37848__auto___45047 < len__37847__auto___45046)){
args__37854__auto__.push((arguments[i__37848__auto___45047]));

var G__45048 = (i__37848__auto___45047 + (1));
i__37848__auto___45047 = G__45048;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((2) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((2)),(0),null)):null);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37855__auto__);
});

jayq.core.on.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__45042){
var vec__45043 = p__45042;
var sel = cljs.core.nth.call(null,vec__45043,(0),null);
var data = cljs.core.nth.call(null,vec__45043,(1),null);
var handler = cljs.core.nth.call(null,vec__45043,(2),null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.on.cljs$lang$maxFixedArity = (2);

jayq.core.on.cljs$lang$applyTo = (function (seq45039){
var G__45040 = cljs.core.first.call(null,seq45039);
var seq45039__$1 = cljs.core.next.call(null,seq45039);
var G__45041 = cljs.core.first.call(null,seq45039__$1);
var seq45039__$2 = cljs.core.next.call(null,seq45039__$1);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic(G__45040,G__45041,seq45039__$2);
});

jayq.core.one = (function jayq$core$one(var_args){
var args__37854__auto__ = [];
var len__37847__auto___45056 = arguments.length;
var i__37848__auto___45057 = (0);
while(true){
if((i__37848__auto___45057 < len__37847__auto___45056)){
args__37854__auto__.push((arguments[i__37848__auto___45057]));

var G__45058 = (i__37848__auto___45057 + (1));
i__37848__auto___45057 = G__45058;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((2) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((2)),(0),null)):null);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37855__auto__);
});

jayq.core.one.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__45052){
var vec__45053 = p__45052;
var sel = cljs.core.nth.call(null,vec__45053,(0),null);
var data = cljs.core.nth.call(null,vec__45053,(1),null);
var handler = cljs.core.nth.call(null,vec__45053,(2),null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.one.cljs$lang$maxFixedArity = (2);

jayq.core.one.cljs$lang$applyTo = (function (seq45049){
var G__45050 = cljs.core.first.call(null,seq45049);
var seq45049__$1 = cljs.core.next.call(null,seq45049);
var G__45051 = cljs.core.first.call(null,seq45049__$1);
var seq45049__$2 = cljs.core.next.call(null,seq45049__$1);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic(G__45050,G__45051,seq45049__$2);
});

jayq.core.off = (function jayq$core$off(var_args){
var args__37854__auto__ = [];
var len__37847__auto___45066 = arguments.length;
var i__37848__auto___45067 = (0);
while(true){
if((i__37848__auto___45067 < len__37847__auto___45066)){
args__37854__auto__.push((arguments[i__37848__auto___45067]));

var G__45068 = (i__37848__auto___45067 + (1));
i__37848__auto___45067 = G__45068;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((2) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((2)),(0),null)):null);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37855__auto__);
});

jayq.core.off.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__45062){
var vec__45063 = p__45062;
var sel = cljs.core.nth.call(null,vec__45063,(0),null);
var handler = cljs.core.nth.call(null,vec__45063,(1),null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),handler);
});

jayq.core.off.cljs$lang$maxFixedArity = (2);

jayq.core.off.cljs$lang$applyTo = (function (seq45059){
var G__45060 = cljs.core.first.call(null,seq45059);
var seq45059__$1 = cljs.core.next.call(null,seq45059);
var G__45061 = cljs.core.first.call(null,seq45059__$1);
var seq45059__$2 = cljs.core.next.call(null,seq45059__$1);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic(G__45060,G__45061,seq45059__$2);
});

jayq.core.prevent = (function jayq$core$prevent(e){
return e.preventDefault();
});
jayq.core.height = (function jayq$core$height(var_args){
var args45069 = [];
var len__37847__auto___45072 = arguments.length;
var i__37848__auto___45073 = (0);
while(true){
if((i__37848__auto___45073 < len__37847__auto___45072)){
args45069.push((arguments[i__37848__auto___45073]));

var G__45074 = (i__37848__auto___45073 + (1));
i__37848__auto___45073 = G__45074;
continue;
} else {
}
break;
}

var G__45071 = args45069.length;
switch (G__45071) {
case 2:
return jayq.core.height.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.height.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45069.length)].join('')));

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
var args45076 = [];
var len__37847__auto___45079 = arguments.length;
var i__37848__auto___45080 = (0);
while(true){
if((i__37848__auto___45080 < len__37847__auto___45079)){
args45076.push((arguments[i__37848__auto___45080]));

var G__45081 = (i__37848__auto___45080 + (1));
i__37848__auto___45080 = G__45081;
continue;
} else {
}
break;
}

var G__45078 = args45076.length;
switch (G__45078) {
case 2:
return jayq.core.width.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.width.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45076.length)].join('')));

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
var args45083 = [];
var len__37847__auto___45086 = arguments.length;
var i__37848__auto___45087 = (0);
while(true){
if((i__37848__auto___45087 < len__37847__auto___45086)){
args45083.push((arguments[i__37848__auto___45087]));

var G__45088 = (i__37848__auto___45087 + (1));
i__37848__auto___45087 = G__45088;
continue;
} else {
}
break;
}

var G__45085 = args45083.length;
switch (G__45085) {
case 2:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45083.length)].join('')));

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
var args45090 = [];
var len__37847__auto___45093 = arguments.length;
var i__37848__auto___45094 = (0);
while(true){
if((i__37848__auto___45094 < len__37847__auto___45093)){
args45090.push((arguments[i__37848__auto___45094]));

var G__45095 = (i__37848__auto___45094 + (1));
i__37848__auto___45094 = G__45095;
continue;
} else {
}
break;
}

var G__45092 = args45090.length;
switch (G__45092) {
case 1:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45090.length)].join('')));

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
var args45097 = [];
var len__37847__auto___45100 = arguments.length;
var i__37848__auto___45101 = (0);
while(true){
if((i__37848__auto___45101 < len__37847__auto___45100)){
args45097.push((arguments[i__37848__auto___45101]));

var G__45102 = (i__37848__auto___45101 + (1));
i__37848__auto___45101 = G__45102;
continue;
} else {
}
break;
}

var G__45099 = args45097.length;
switch (G__45099) {
case 1:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45097.length)].join('')));

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
var args45104 = [];
var len__37847__auto___45107 = arguments.length;
var i__37848__auto___45108 = (0);
while(true){
if((i__37848__auto___45108 < len__37847__auto___45107)){
args45104.push((arguments[i__37848__auto___45108]));

var G__45109 = (i__37848__auto___45108 + (1));
i__37848__auto___45108 = G__45109;
continue;
} else {
}
break;
}

var G__45106 = args45104.length;
switch (G__45106) {
case 3:
return jayq.core.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.then.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45104.length)].join('')));

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
var args__37854__auto__ = [];
var len__37847__auto___45113 = arguments.length;
var i__37848__auto___45114 = (0);
while(true){
if((i__37848__auto___45114 < len__37847__auto___45113)){
args__37854__auto__.push((arguments[i__37848__auto___45114]));

var G__45115 = (i__37848__auto___45114 + (1));
i__37848__auto___45114 = G__45115;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((1) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((1)),(0),null)):null);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37855__auto__);
});

jayq.core.done.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.done.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.done.cljs$lang$maxFixedArity = (1);

jayq.core.done.cljs$lang$applyTo = (function (seq45111){
var G__45112 = cljs.core.first.call(null,seq45111);
var seq45111__$1 = cljs.core.next.call(null,seq45111);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic(G__45112,seq45111__$1);
});

jayq.core.fail = (function jayq$core$fail(var_args){
var args__37854__auto__ = [];
var len__37847__auto___45118 = arguments.length;
var i__37848__auto___45119 = (0);
while(true){
if((i__37848__auto___45119 < len__37847__auto___45118)){
args__37854__auto__.push((arguments[i__37848__auto___45119]));

var G__45120 = (i__37848__auto___45119 + (1));
i__37848__auto___45119 = G__45120;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((1) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((1)),(0),null)):null);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37855__auto__);
});

jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.fail.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.fail.cljs$lang$maxFixedArity = (1);

jayq.core.fail.cljs$lang$applyTo = (function (seq45116){
var G__45117 = cljs.core.first.call(null,seq45116);
var seq45116__$1 = cljs.core.next.call(null,seq45116);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__45117,seq45116__$1);
});

jayq.core.progress = (function jayq$core$progress(deferred,fns_args){
return deferred.progress(cljs.core.clj__GT_js.call(null,fns_args));
});
jayq.core.promise = (function jayq$core$promise(var_args){
var args45121 = [];
var len__37847__auto___45124 = arguments.length;
var i__37848__auto___45125 = (0);
while(true){
if((i__37848__auto___45125 < len__37847__auto___45124)){
args45121.push((arguments[i__37848__auto___45125]));

var G__45126 = (i__37848__auto___45125 + (1));
i__37848__auto___45125 = G__45126;
continue;
} else {
}
break;
}

var G__45123 = args45121.length;
switch (G__45123) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45121.length)].join('')));

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
var args__37854__auto__ = [];
var len__37847__auto___45130 = arguments.length;
var i__37848__auto___45131 = (0);
while(true){
if((i__37848__auto___45131 < len__37847__auto___45130)){
args__37854__auto__.push((arguments[i__37848__auto___45131]));

var G__45132 = (i__37848__auto___45131 + (1));
i__37848__auto___45131 = G__45132;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((1) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((1)),(0),null)):null);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37855__auto__);
});

jayq.core.always.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.always.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.always.cljs$lang$maxFixedArity = (1);

jayq.core.always.cljs$lang$applyTo = (function (seq45128){
var G__45129 = cljs.core.first.call(null,seq45128);
var seq45128__$1 = cljs.core.next.call(null,seq45128);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic(G__45129,seq45128__$1);
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
var args45133 = [];
var len__37847__auto___45136 = arguments.length;
var i__37848__auto___45137 = (0);
while(true){
if((i__37848__auto___45137 < len__37847__auto___45136)){
args45133.push((arguments[i__37848__auto___45137]));

var G__45138 = (i__37848__auto___45137 + (1));
i__37848__auto___45137 = G__45138;
continue;
} else {
}
break;
}

var G__45135 = args45133.length;
switch (G__45135) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45133.length)].join('')));

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