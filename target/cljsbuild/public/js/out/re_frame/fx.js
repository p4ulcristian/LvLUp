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
var seq__39785 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__39786 = null;
var count__39787 = (0);
var i__39788 = (0);
while(true){
if((i__39788 < count__39787)){
var vec__39789 = cljs.core._nth.call(null,chunk__39786,i__39788);
var effect_k = cljs.core.nth.call(null,vec__39789,(0),null);
var value = cljs.core.nth.call(null,vec__39789,(1),null);
var temp__4655__auto___39795 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___39795)){
var effect_fn_39796 = temp__4655__auto___39795;
effect_fn_39796.call(null,value);
} else {
}

var G__39797 = seq__39785;
var G__39798 = chunk__39786;
var G__39799 = count__39787;
var G__39800 = (i__39788 + (1));
seq__39785 = G__39797;
chunk__39786 = G__39798;
count__39787 = G__39799;
i__39788 = G__39800;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39785);
if(temp__4657__auto__){
var seq__39785__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39785__$1)){
var c__37583__auto__ = cljs.core.chunk_first.call(null,seq__39785__$1);
var G__39801 = cljs.core.chunk_rest.call(null,seq__39785__$1);
var G__39802 = c__37583__auto__;
var G__39803 = cljs.core.count.call(null,c__37583__auto__);
var G__39804 = (0);
seq__39785 = G__39801;
chunk__39786 = G__39802;
count__39787 = G__39803;
i__39788 = G__39804;
continue;
} else {
var vec__39792 = cljs.core.first.call(null,seq__39785__$1);
var effect_k = cljs.core.nth.call(null,vec__39792,(0),null);
var value = cljs.core.nth.call(null,vec__39792,(1),null);
var temp__4655__auto___39805 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___39805)){
var effect_fn_39806 = temp__4655__auto___39805;
effect_fn_39806.call(null,value);
} else {
}

var G__39807 = cljs.core.next.call(null,seq__39785__$1);
var G__39808 = null;
var G__39809 = (0);
var G__39810 = (0);
seq__39785 = G__39807;
chunk__39786 = G__39808;
count__39787 = G__39809;
i__39788 = G__39810;
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
var seq__39811 = cljs.core.seq.call(null,value);
var chunk__39812 = null;
var count__39813 = (0);
var i__39814 = (0);
while(true){
if((i__39814 < count__39813)){
var map__39815 = cljs.core._nth.call(null,chunk__39812,i__39814);
var map__39815__$1 = ((((!((map__39815 == null)))?((((map__39815.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39815.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39815):map__39815);
var effect = map__39815__$1;
var ms = cljs.core.get.call(null,map__39815__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__39815__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__39811,chunk__39812,count__39813,i__39814,map__39815,map__39815__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__39811,chunk__39812,count__39813,i__39814,map__39815,map__39815__$1,effect,ms,dispatch))
,ms);
}

var G__39819 = seq__39811;
var G__39820 = chunk__39812;
var G__39821 = count__39813;
var G__39822 = (i__39814 + (1));
seq__39811 = G__39819;
chunk__39812 = G__39820;
count__39813 = G__39821;
i__39814 = G__39822;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39811);
if(temp__4657__auto__){
var seq__39811__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39811__$1)){
var c__37583__auto__ = cljs.core.chunk_first.call(null,seq__39811__$1);
var G__39823 = cljs.core.chunk_rest.call(null,seq__39811__$1);
var G__39824 = c__37583__auto__;
var G__39825 = cljs.core.count.call(null,c__37583__auto__);
var G__39826 = (0);
seq__39811 = G__39823;
chunk__39812 = G__39824;
count__39813 = G__39825;
i__39814 = G__39826;
continue;
} else {
var map__39817 = cljs.core.first.call(null,seq__39811__$1);
var map__39817__$1 = ((((!((map__39817 == null)))?((((map__39817.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39817.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39817):map__39817);
var effect = map__39817__$1;
var ms = cljs.core.get.call(null,map__39817__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__39817__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__39811,chunk__39812,count__39813,i__39814,map__39817,map__39817__$1,effect,ms,dispatch,seq__39811__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__39811,chunk__39812,count__39813,i__39814,map__39817,map__39817__$1,effect,ms,dispatch,seq__39811__$1,temp__4657__auto__))
,ms);
}

var G__39827 = cljs.core.next.call(null,seq__39811__$1);
var G__39828 = null;
var G__39829 = (0);
var G__39830 = (0);
seq__39811 = G__39827;
chunk__39812 = G__39828;
count__39813 = G__39829;
i__39814 = G__39830;
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

var seq__39831 = cljs.core.seq.call(null,value);
var chunk__39832 = null;
var count__39833 = (0);
var i__39834 = (0);
while(true){
if((i__39834 < count__39833)){
var event = cljs.core._nth.call(null,chunk__39832,i__39834);
re_frame.router.dispatch.call(null,event);

var G__39835 = seq__39831;
var G__39836 = chunk__39832;
var G__39837 = count__39833;
var G__39838 = (i__39834 + (1));
seq__39831 = G__39835;
chunk__39832 = G__39836;
count__39833 = G__39837;
i__39834 = G__39838;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39831);
if(temp__4657__auto__){
var seq__39831__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39831__$1)){
var c__37583__auto__ = cljs.core.chunk_first.call(null,seq__39831__$1);
var G__39839 = cljs.core.chunk_rest.call(null,seq__39831__$1);
var G__39840 = c__37583__auto__;
var G__39841 = cljs.core.count.call(null,c__37583__auto__);
var G__39842 = (0);
seq__39831 = G__39839;
chunk__39832 = G__39840;
count__39833 = G__39841;
i__39834 = G__39842;
continue;
} else {
var event = cljs.core.first.call(null,seq__39831__$1);
re_frame.router.dispatch.call(null,event);

var G__39843 = cljs.core.next.call(null,seq__39831__$1);
var G__39844 = null;
var G__39845 = (0);
var G__39846 = (0);
seq__39831 = G__39843;
chunk__39832 = G__39844;
count__39833 = G__39845;
i__39834 = G__39846;
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
var seq__39847 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__39848 = null;
var count__39849 = (0);
var i__39850 = (0);
while(true){
if((i__39850 < count__39849)){
var event = cljs.core._nth.call(null,chunk__39848,i__39850);
clear_event.call(null,event);

var G__39851 = seq__39847;
var G__39852 = chunk__39848;
var G__39853 = count__39849;
var G__39854 = (i__39850 + (1));
seq__39847 = G__39851;
chunk__39848 = G__39852;
count__39849 = G__39853;
i__39850 = G__39854;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39847);
if(temp__4657__auto__){
var seq__39847__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39847__$1)){
var c__37583__auto__ = cljs.core.chunk_first.call(null,seq__39847__$1);
var G__39855 = cljs.core.chunk_rest.call(null,seq__39847__$1);
var G__39856 = c__37583__auto__;
var G__39857 = cljs.core.count.call(null,c__37583__auto__);
var G__39858 = (0);
seq__39847 = G__39855;
chunk__39848 = G__39856;
count__39849 = G__39857;
i__39850 = G__39858;
continue;
} else {
var event = cljs.core.first.call(null,seq__39847__$1);
clear_event.call(null,event);

var G__39859 = cljs.core.next.call(null,seq__39847__$1);
var G__39860 = null;
var G__39861 = (0);
var G__39862 = (0);
seq__39847 = G__39859;
chunk__39848 = G__39860;
count__39849 = G__39861;
i__39850 = G__39862;
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