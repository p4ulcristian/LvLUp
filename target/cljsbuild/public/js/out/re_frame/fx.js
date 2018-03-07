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
var seq__39052 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__39053 = null;
var count__39054 = (0);
var i__39055 = (0);
while(true){
if((i__39055 < count__39054)){
var vec__39056 = cljs.core._nth.call(null,chunk__39053,i__39055);
var effect_k = cljs.core.nth.call(null,vec__39056,(0),null);
var value = cljs.core.nth.call(null,vec__39056,(1),null);
var temp__4655__auto___39062 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___39062)){
var effect_fn_39063 = temp__4655__auto___39062;
effect_fn_39063.call(null,value);
} else {
}

var G__39064 = seq__39052;
var G__39065 = chunk__39053;
var G__39066 = count__39054;
var G__39067 = (i__39055 + (1));
seq__39052 = G__39064;
chunk__39053 = G__39065;
count__39054 = G__39066;
i__39055 = G__39067;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39052);
if(temp__4657__auto__){
var seq__39052__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39052__$1)){
var c__37615__auto__ = cljs.core.chunk_first.call(null,seq__39052__$1);
var G__39068 = cljs.core.chunk_rest.call(null,seq__39052__$1);
var G__39069 = c__37615__auto__;
var G__39070 = cljs.core.count.call(null,c__37615__auto__);
var G__39071 = (0);
seq__39052 = G__39068;
chunk__39053 = G__39069;
count__39054 = G__39070;
i__39055 = G__39071;
continue;
} else {
var vec__39059 = cljs.core.first.call(null,seq__39052__$1);
var effect_k = cljs.core.nth.call(null,vec__39059,(0),null);
var value = cljs.core.nth.call(null,vec__39059,(1),null);
var temp__4655__auto___39072 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___39072)){
var effect_fn_39073 = temp__4655__auto___39072;
effect_fn_39073.call(null,value);
} else {
}

var G__39074 = cljs.core.next.call(null,seq__39052__$1);
var G__39075 = null;
var G__39076 = (0);
var G__39077 = (0);
seq__39052 = G__39074;
chunk__39053 = G__39075;
count__39054 = G__39076;
i__39055 = G__39077;
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
var seq__39078 = cljs.core.seq.call(null,value);
var chunk__39079 = null;
var count__39080 = (0);
var i__39081 = (0);
while(true){
if((i__39081 < count__39080)){
var map__39082 = cljs.core._nth.call(null,chunk__39079,i__39081);
var map__39082__$1 = ((((!((map__39082 == null)))?((((map__39082.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39082.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39082):map__39082);
var effect = map__39082__$1;
var ms = cljs.core.get.call(null,map__39082__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__39082__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__39078,chunk__39079,count__39080,i__39081,map__39082,map__39082__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__39078,chunk__39079,count__39080,i__39081,map__39082,map__39082__$1,effect,ms,dispatch))
,ms);
}

var G__39086 = seq__39078;
var G__39087 = chunk__39079;
var G__39088 = count__39080;
var G__39089 = (i__39081 + (1));
seq__39078 = G__39086;
chunk__39079 = G__39087;
count__39080 = G__39088;
i__39081 = G__39089;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39078);
if(temp__4657__auto__){
var seq__39078__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39078__$1)){
var c__37615__auto__ = cljs.core.chunk_first.call(null,seq__39078__$1);
var G__39090 = cljs.core.chunk_rest.call(null,seq__39078__$1);
var G__39091 = c__37615__auto__;
var G__39092 = cljs.core.count.call(null,c__37615__auto__);
var G__39093 = (0);
seq__39078 = G__39090;
chunk__39079 = G__39091;
count__39080 = G__39092;
i__39081 = G__39093;
continue;
} else {
var map__39084 = cljs.core.first.call(null,seq__39078__$1);
var map__39084__$1 = ((((!((map__39084 == null)))?((((map__39084.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39084.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39084):map__39084);
var effect = map__39084__$1;
var ms = cljs.core.get.call(null,map__39084__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__39084__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__39078,chunk__39079,count__39080,i__39081,map__39084,map__39084__$1,effect,ms,dispatch,seq__39078__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__39078,chunk__39079,count__39080,i__39081,map__39084,map__39084__$1,effect,ms,dispatch,seq__39078__$1,temp__4657__auto__))
,ms);
}

var G__39094 = cljs.core.next.call(null,seq__39078__$1);
var G__39095 = null;
var G__39096 = (0);
var G__39097 = (0);
seq__39078 = G__39094;
chunk__39079 = G__39095;
count__39080 = G__39096;
i__39081 = G__39097;
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

var seq__39098 = cljs.core.seq.call(null,value);
var chunk__39099 = null;
var count__39100 = (0);
var i__39101 = (0);
while(true){
if((i__39101 < count__39100)){
var event = cljs.core._nth.call(null,chunk__39099,i__39101);
re_frame.router.dispatch.call(null,event);

var G__39102 = seq__39098;
var G__39103 = chunk__39099;
var G__39104 = count__39100;
var G__39105 = (i__39101 + (1));
seq__39098 = G__39102;
chunk__39099 = G__39103;
count__39100 = G__39104;
i__39101 = G__39105;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39098);
if(temp__4657__auto__){
var seq__39098__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39098__$1)){
var c__37615__auto__ = cljs.core.chunk_first.call(null,seq__39098__$1);
var G__39106 = cljs.core.chunk_rest.call(null,seq__39098__$1);
var G__39107 = c__37615__auto__;
var G__39108 = cljs.core.count.call(null,c__37615__auto__);
var G__39109 = (0);
seq__39098 = G__39106;
chunk__39099 = G__39107;
count__39100 = G__39108;
i__39101 = G__39109;
continue;
} else {
var event = cljs.core.first.call(null,seq__39098__$1);
re_frame.router.dispatch.call(null,event);

var G__39110 = cljs.core.next.call(null,seq__39098__$1);
var G__39111 = null;
var G__39112 = (0);
var G__39113 = (0);
seq__39098 = G__39110;
chunk__39099 = G__39111;
count__39100 = G__39112;
i__39101 = G__39113;
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
var seq__39114 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__39115 = null;
var count__39116 = (0);
var i__39117 = (0);
while(true){
if((i__39117 < count__39116)){
var event = cljs.core._nth.call(null,chunk__39115,i__39117);
clear_event.call(null,event);

var G__39118 = seq__39114;
var G__39119 = chunk__39115;
var G__39120 = count__39116;
var G__39121 = (i__39117 + (1));
seq__39114 = G__39118;
chunk__39115 = G__39119;
count__39116 = G__39120;
i__39117 = G__39121;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39114);
if(temp__4657__auto__){
var seq__39114__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39114__$1)){
var c__37615__auto__ = cljs.core.chunk_first.call(null,seq__39114__$1);
var G__39122 = cljs.core.chunk_rest.call(null,seq__39114__$1);
var G__39123 = c__37615__auto__;
var G__39124 = cljs.core.count.call(null,c__37615__auto__);
var G__39125 = (0);
seq__39114 = G__39122;
chunk__39115 = G__39123;
count__39116 = G__39124;
i__39117 = G__39125;
continue;
} else {
var event = cljs.core.first.call(null,seq__39114__$1);
clear_event.call(null,event);

var G__39126 = cljs.core.next.call(null,seq__39114__$1);
var G__39127 = null;
var G__39128 = (0);
var G__39129 = (0);
seq__39114 = G__39126;
chunk__39115 = G__39127;
count__39116 = G__39128;
i__39117 = G__39129;
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