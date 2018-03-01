// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__39772 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__39773 = null;
var count__39774 = (0);
var i__39775 = (0);
while(true){
if((i__39775 < count__39774)){
var vec__39776 = cljs.core._nth.call(null,chunk__39773,i__39775);
var effect_k = cljs.core.nth.call(null,vec__39776,(0),null);
var value = cljs.core.nth.call(null,vec__39776,(1),null);
var temp__4655__auto___39782 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___39782)){
var effect_fn_39783 = temp__4655__auto___39782;
effect_fn_39783.call(null,value);
} else {
}

var G__39784 = seq__39772;
var G__39785 = chunk__39773;
var G__39786 = count__39774;
var G__39787 = (i__39775 + (1));
seq__39772 = G__39784;
chunk__39773 = G__39785;
count__39774 = G__39786;
i__39775 = G__39787;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39772);
if(temp__4657__auto__){
var seq__39772__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39772__$1)){
var c__37569__auto__ = cljs.core.chunk_first.call(null,seq__39772__$1);
var G__39788 = cljs.core.chunk_rest.call(null,seq__39772__$1);
var G__39789 = c__37569__auto__;
var G__39790 = cljs.core.count.call(null,c__37569__auto__);
var G__39791 = (0);
seq__39772 = G__39788;
chunk__39773 = G__39789;
count__39774 = G__39790;
i__39775 = G__39791;
continue;
} else {
var vec__39779 = cljs.core.first.call(null,seq__39772__$1);
var effect_k = cljs.core.nth.call(null,vec__39779,(0),null);
var value = cljs.core.nth.call(null,vec__39779,(1),null);
var temp__4655__auto___39792 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___39792)){
var effect_fn_39793 = temp__4655__auto___39792;
effect_fn_39793.call(null,value);
} else {
}

var G__39794 = cljs.core.next.call(null,seq__39772__$1);
var G__39795 = null;
var G__39796 = (0);
var G__39797 = (0);
seq__39772 = G__39794;
chunk__39773 = G__39795;
count__39774 = G__39796;
i__39775 = G__39797;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__39798 = cljs.core.seq.call(null,value);
var chunk__39799 = null;
var count__39800 = (0);
var i__39801 = (0);
while(true){
if((i__39801 < count__39800)){
var map__39802 = cljs.core._nth.call(null,chunk__39799,i__39801);
var map__39802__$1 = ((((!((map__39802 == null)))?((((map__39802.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39802.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39802):map__39802);
var effect = map__39802__$1;
var ms = cljs.core.get.call(null,map__39802__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__39802__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__39798,chunk__39799,count__39800,i__39801,map__39802,map__39802__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__39798,chunk__39799,count__39800,i__39801,map__39802,map__39802__$1,effect,ms,dispatch))
,ms);
}

var G__39806 = seq__39798;
var G__39807 = chunk__39799;
var G__39808 = count__39800;
var G__39809 = (i__39801 + (1));
seq__39798 = G__39806;
chunk__39799 = G__39807;
count__39800 = G__39808;
i__39801 = G__39809;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39798);
if(temp__4657__auto__){
var seq__39798__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39798__$1)){
var c__37569__auto__ = cljs.core.chunk_first.call(null,seq__39798__$1);
var G__39810 = cljs.core.chunk_rest.call(null,seq__39798__$1);
var G__39811 = c__37569__auto__;
var G__39812 = cljs.core.count.call(null,c__37569__auto__);
var G__39813 = (0);
seq__39798 = G__39810;
chunk__39799 = G__39811;
count__39800 = G__39812;
i__39801 = G__39813;
continue;
} else {
var map__39804 = cljs.core.first.call(null,seq__39798__$1);
var map__39804__$1 = ((((!((map__39804 == null)))?((((map__39804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39804):map__39804);
var effect = map__39804__$1;
var ms = cljs.core.get.call(null,map__39804__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__39804__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__39798,chunk__39799,count__39800,i__39801,map__39804,map__39804__$1,effect,ms,dispatch,seq__39798__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__39798,chunk__39799,count__39800,i__39801,map__39804,map__39804__$1,effect,ms,dispatch,seq__39798__$1,temp__4657__auto__))
,ms);
}

var G__39814 = cljs.core.next.call(null,seq__39798__$1);
var G__39815 = null;
var G__39816 = (0);
var G__39817 = (0);
seq__39798 = G__39814;
chunk__39799 = G__39815;
count__39800 = G__39816;
i__39801 = G__39817;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
}

var seq__39818 = cljs.core.seq.call(null,value);
var chunk__39819 = null;
var count__39820 = (0);
var i__39821 = (0);
while(true){
if((i__39821 < count__39820)){
var event = cljs.core._nth.call(null,chunk__39819,i__39821);
re_frame.router.dispatch.call(null,event);

var G__39822 = seq__39818;
var G__39823 = chunk__39819;
var G__39824 = count__39820;
var G__39825 = (i__39821 + (1));
seq__39818 = G__39822;
chunk__39819 = G__39823;
count__39820 = G__39824;
i__39821 = G__39825;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39818);
if(temp__4657__auto__){
var seq__39818__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39818__$1)){
var c__37569__auto__ = cljs.core.chunk_first.call(null,seq__39818__$1);
var G__39826 = cljs.core.chunk_rest.call(null,seq__39818__$1);
var G__39827 = c__37569__auto__;
var G__39828 = cljs.core.count.call(null,c__37569__auto__);
var G__39829 = (0);
seq__39818 = G__39826;
chunk__39819 = G__39827;
count__39820 = G__39828;
i__39821 = G__39829;
continue;
} else {
var event = cljs.core.first.call(null,seq__39818__$1);
re_frame.router.dispatch.call(null,event);

var G__39830 = cljs.core.next.call(null,seq__39818__$1);
var G__39831 = null;
var G__39832 = (0);
var G__39833 = (0);
seq__39818 = G__39830;
chunk__39819 = G__39831;
count__39820 = G__39832;
i__39821 = G__39833;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__39834 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__39835 = null;
var count__39836 = (0);
var i__39837 = (0);
while(true){
if((i__39837 < count__39836)){
var event = cljs.core._nth.call(null,chunk__39835,i__39837);
clear_event.call(null,event);

var G__39838 = seq__39834;
var G__39839 = chunk__39835;
var G__39840 = count__39836;
var G__39841 = (i__39837 + (1));
seq__39834 = G__39838;
chunk__39835 = G__39839;
count__39836 = G__39840;
i__39837 = G__39841;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39834);
if(temp__4657__auto__){
var seq__39834__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39834__$1)){
var c__37569__auto__ = cljs.core.chunk_first.call(null,seq__39834__$1);
var G__39842 = cljs.core.chunk_rest.call(null,seq__39834__$1);
var G__39843 = c__37569__auto__;
var G__39844 = cljs.core.count.call(null,c__37569__auto__);
var G__39845 = (0);
seq__39834 = G__39842;
chunk__39835 = G__39843;
count__39836 = G__39844;
i__39837 = G__39845;
continue;
} else {
var event = cljs.core.first.call(null,seq__39834__$1);
clear_event.call(null,event);

var G__39846 = cljs.core.next.call(null,seq__39834__$1);
var G__39847 = null;
var G__39848 = (0);
var G__39849 = (0);
seq__39834 = G__39846;
chunk__39835 = G__39847;
count__39836 = G__39848;
i__39837 = G__39849;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map