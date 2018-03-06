// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args54274 = [];
var len__37877__auto___54277 = arguments.length;
var i__37878__auto___54278 = (0);
while(true){
if((i__37878__auto___54278 < len__37877__auto___54277)){
args54274.push((arguments[i__37878__auto___54278]));

var G__54279 = (i__37878__auto___54278 + (1));
i__37878__auto___54278 = G__54279;
continue;
} else {
}
break;
}

var G__54276 = args54274.length;
switch (G__54276) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54274.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__37884__auto__ = [];
var len__37877__auto___54282 = arguments.length;
var i__37878__auto___54283 = (0);
while(true){
if((i__37878__auto___54283 < len__37877__auto___54282)){
args__37884__auto__.push((arguments[i__37878__auto___54283]));

var G__54284 = (i__37878__auto___54283 + (1));
i__37878__auto___54283 = G__54284;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq54281){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54281));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__37884__auto__ = [];
var len__37877__auto___54286 = arguments.length;
var i__37878__auto___54287 = (0);
while(true){
if((i__37878__auto___54287 < len__37877__auto___54286)){
args__37884__auto__.push((arguments[i__37878__auto___54287]));

var G__54288 = (i__37878__auto___54287 + (1));
i__37878__auto___54287 = G__54288;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq54285){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54285));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__54289 = cljs.core._EQ_;
var expr__54290 = (function (){var or__36802__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e54293){if((e54293 instanceof Error)){
var e = e54293;
return false;
} else {
throw e54293;

}
}})();
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__54289.call(null,"true",expr__54290))){
return true;
} else {
if(cljs.core.truth_(pred__54289.call(null,"false",expr__54290))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__54290)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e54295){if((e54295 instanceof Error)){
var e = e54295;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e54295;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__54296){
var map__54299 = p__54296;
var map__54299__$1 = ((((!((map__54299 == null)))?((((map__54299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54299):map__54299);
var message = cljs.core.get.call(null,map__54299__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__54299__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__36802__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__36790__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__36790__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__36790__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__40679__auto___54461 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40679__auto___54461,ch){
return (function (){
var f__40680__auto__ = (function (){var switch__40567__auto__ = ((function (c__40679__auto___54461,ch){
return (function (state_54430){
var state_val_54431 = (state_54430[(1)]);
if((state_val_54431 === (7))){
var inst_54426 = (state_54430[(2)]);
var state_54430__$1 = state_54430;
var statearr_54432_54462 = state_54430__$1;
(statearr_54432_54462[(2)] = inst_54426);

(statearr_54432_54462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54431 === (1))){
var state_54430__$1 = state_54430;
var statearr_54433_54463 = state_54430__$1;
(statearr_54433_54463[(2)] = null);

(statearr_54433_54463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54431 === (4))){
var inst_54383 = (state_54430[(7)]);
var inst_54383__$1 = (state_54430[(2)]);
var state_54430__$1 = (function (){var statearr_54434 = state_54430;
(statearr_54434[(7)] = inst_54383__$1);

return statearr_54434;
})();
if(cljs.core.truth_(inst_54383__$1)){
var statearr_54435_54464 = state_54430__$1;
(statearr_54435_54464[(1)] = (5));

} else {
var statearr_54436_54465 = state_54430__$1;
(statearr_54436_54465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54431 === (15))){
var inst_54390 = (state_54430[(8)]);
var inst_54405 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_54390);
var inst_54406 = cljs.core.first.call(null,inst_54405);
var inst_54407 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_54406);
var inst_54408 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_54407)].join('');
var inst_54409 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_54408);
var state_54430__$1 = state_54430;
var statearr_54437_54466 = state_54430__$1;
(statearr_54437_54466[(2)] = inst_54409);

(statearr_54437_54466[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54431 === (13))){
var inst_54414 = (state_54430[(2)]);
var state_54430__$1 = state_54430;
var statearr_54438_54467 = state_54430__$1;
(statearr_54438_54467[(2)] = inst_54414);

(statearr_54438_54467[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54431 === (6))){
var state_54430__$1 = state_54430;
var statearr_54439_54468 = state_54430__$1;
(statearr_54439_54468[(2)] = null);

(statearr_54439_54468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54431 === (17))){
var inst_54412 = (state_54430[(2)]);
var state_54430__$1 = state_54430;
var statearr_54440_54469 = state_54430__$1;
(statearr_54440_54469[(2)] = inst_54412);

(statearr_54440_54469[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54431 === (3))){
var inst_54428 = (state_54430[(2)]);
var state_54430__$1 = state_54430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54430__$1,inst_54428);
} else {
if((state_val_54431 === (12))){
var inst_54389 = (state_54430[(9)]);
var inst_54403 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_54389,opts);
var state_54430__$1 = state_54430;
if(cljs.core.truth_(inst_54403)){
var statearr_54441_54470 = state_54430__$1;
(statearr_54441_54470[(1)] = (15));

} else {
var statearr_54442_54471 = state_54430__$1;
(statearr_54442_54471[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54431 === (2))){
var state_54430__$1 = state_54430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54430__$1,(4),ch);
} else {
if((state_val_54431 === (11))){
var inst_54390 = (state_54430[(8)]);
var inst_54395 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54396 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_54390);
var inst_54397 = cljs.core.async.timeout.call(null,(1000));
var inst_54398 = [inst_54396,inst_54397];
var inst_54399 = (new cljs.core.PersistentVector(null,2,(5),inst_54395,inst_54398,null));
var state_54430__$1 = state_54430;
return cljs.core.async.ioc_alts_BANG_.call(null,state_54430__$1,(14),inst_54399);
} else {
if((state_val_54431 === (9))){
var inst_54390 = (state_54430[(8)]);
var inst_54416 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_54417 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_54390);
var inst_54418 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_54417);
var inst_54419 = [cljs.core.str("Not loading: "),cljs.core.str(inst_54418)].join('');
var inst_54420 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_54419);
var state_54430__$1 = (function (){var statearr_54443 = state_54430;
(statearr_54443[(10)] = inst_54416);

return statearr_54443;
})();
var statearr_54444_54472 = state_54430__$1;
(statearr_54444_54472[(2)] = inst_54420);

(statearr_54444_54472[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54431 === (5))){
var inst_54383 = (state_54430[(7)]);
var inst_54385 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_54386 = (new cljs.core.PersistentArrayMap(null,2,inst_54385,null));
var inst_54387 = (new cljs.core.PersistentHashSet(null,inst_54386,null));
var inst_54388 = figwheel.client.focus_msgs.call(null,inst_54387,inst_54383);
var inst_54389 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_54388);
var inst_54390 = cljs.core.first.call(null,inst_54388);
var inst_54391 = figwheel.client.autoload_QMARK_.call(null);
var state_54430__$1 = (function (){var statearr_54445 = state_54430;
(statearr_54445[(8)] = inst_54390);

(statearr_54445[(9)] = inst_54389);

return statearr_54445;
})();
if(cljs.core.truth_(inst_54391)){
var statearr_54446_54473 = state_54430__$1;
(statearr_54446_54473[(1)] = (8));

} else {
var statearr_54447_54474 = state_54430__$1;
(statearr_54447_54474[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54431 === (14))){
var inst_54401 = (state_54430[(2)]);
var state_54430__$1 = state_54430;
var statearr_54448_54475 = state_54430__$1;
(statearr_54448_54475[(2)] = inst_54401);

(statearr_54448_54475[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54431 === (16))){
var state_54430__$1 = state_54430;
var statearr_54449_54476 = state_54430__$1;
(statearr_54449_54476[(2)] = null);

(statearr_54449_54476[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54431 === (10))){
var inst_54422 = (state_54430[(2)]);
var state_54430__$1 = (function (){var statearr_54450 = state_54430;
(statearr_54450[(11)] = inst_54422);

return statearr_54450;
})();
var statearr_54451_54477 = state_54430__$1;
(statearr_54451_54477[(2)] = null);

(statearr_54451_54477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54431 === (8))){
var inst_54389 = (state_54430[(9)]);
var inst_54393 = figwheel.client.reload_file_state_QMARK_.call(null,inst_54389,opts);
var state_54430__$1 = state_54430;
if(cljs.core.truth_(inst_54393)){
var statearr_54452_54478 = state_54430__$1;
(statearr_54452_54478[(1)] = (11));

} else {
var statearr_54453_54479 = state_54430__$1;
(statearr_54453_54479[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40679__auto___54461,ch))
;
return ((function (switch__40567__auto__,c__40679__auto___54461,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__40568__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__40568__auto____0 = (function (){
var statearr_54457 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54457[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__40568__auto__);

(statearr_54457[(1)] = (1));

return statearr_54457;
});
var figwheel$client$file_reloader_plugin_$_state_machine__40568__auto____1 = (function (state_54430){
while(true){
var ret_value__40569__auto__ = (function (){try{while(true){
var result__40570__auto__ = switch__40567__auto__.call(null,state_54430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40570__auto__;
}
break;
}
}catch (e54458){if((e54458 instanceof Object)){
var ex__40571__auto__ = e54458;
var statearr_54459_54480 = state_54430;
(statearr_54459_54480[(5)] = ex__40571__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54481 = state_54430;
state_54430 = G__54481;
continue;
} else {
return ret_value__40569__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__40568__auto__ = function(state_54430){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__40568__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__40568__auto____1.call(this,state_54430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__40568__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__40568__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__40568__auto__;
})()
;})(switch__40567__auto__,c__40679__auto___54461,ch))
})();
var state__40681__auto__ = (function (){var statearr_54460 = f__40680__auto__.call(null);
(statearr_54460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40679__auto___54461);

return statearr_54460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40681__auto__);
});})(c__40679__auto___54461,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__54482_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__54482_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_54485 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_54485){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e54484){if((e54484 instanceof Error)){
var e = e54484;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_54485], null));
} else {
var e = e54484;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_54485))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__54486){
var map__54495 = p__54486;
var map__54495__$1 = ((((!((map__54495 == null)))?((((map__54495.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54495.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54495):map__54495);
var opts = map__54495__$1;
var build_id = cljs.core.get.call(null,map__54495__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__54495,map__54495__$1,opts,build_id){
return (function (p__54497){
var vec__54498 = p__54497;
var seq__54499 = cljs.core.seq.call(null,vec__54498);
var first__54500 = cljs.core.first.call(null,seq__54499);
var seq__54499__$1 = cljs.core.next.call(null,seq__54499);
var map__54501 = first__54500;
var map__54501__$1 = ((((!((map__54501 == null)))?((((map__54501.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54501.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54501):map__54501);
var msg = map__54501__$1;
var msg_name = cljs.core.get.call(null,map__54501__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54499__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__54498,seq__54499,first__54500,seq__54499__$1,map__54501,map__54501__$1,msg,msg_name,_,map__54495,map__54495__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__54498,seq__54499,first__54500,seq__54499__$1,map__54501,map__54501__$1,msg,msg_name,_,map__54495,map__54495__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__54495,map__54495__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__54509){
var vec__54510 = p__54509;
var seq__54511 = cljs.core.seq.call(null,vec__54510);
var first__54512 = cljs.core.first.call(null,seq__54511);
var seq__54511__$1 = cljs.core.next.call(null,seq__54511);
var map__54513 = first__54512;
var map__54513__$1 = ((((!((map__54513 == null)))?((((map__54513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54513):map__54513);
var msg = map__54513__$1;
var msg_name = cljs.core.get.call(null,map__54513__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54511__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__54515){
var map__54527 = p__54515;
var map__54527__$1 = ((((!((map__54527 == null)))?((((map__54527.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54527.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54527):map__54527);
var on_compile_warning = cljs.core.get.call(null,map__54527__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__54527__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__54527,map__54527__$1,on_compile_warning,on_compile_fail){
return (function (p__54529){
var vec__54530 = p__54529;
var seq__54531 = cljs.core.seq.call(null,vec__54530);
var first__54532 = cljs.core.first.call(null,seq__54531);
var seq__54531__$1 = cljs.core.next.call(null,seq__54531);
var map__54533 = first__54532;
var map__54533__$1 = ((((!((map__54533 == null)))?((((map__54533.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54533.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54533):map__54533);
var msg = map__54533__$1;
var msg_name = cljs.core.get.call(null,map__54533__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54531__$1;
var pred__54535 = cljs.core._EQ_;
var expr__54536 = msg_name;
if(cljs.core.truth_(pred__54535.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__54536))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__54535.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__54536))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__54527,map__54527__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__40679__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40679__auto__,msg_hist,msg_names,msg){
return (function (){
var f__40680__auto__ = (function (){var switch__40567__auto__ = ((function (c__40679__auto__,msg_hist,msg_names,msg){
return (function (state_54764){
var state_val_54765 = (state_54764[(1)]);
if((state_val_54765 === (7))){
var inst_54684 = (state_54764[(2)]);
var state_54764__$1 = state_54764;
if(cljs.core.truth_(inst_54684)){
var statearr_54766_54816 = state_54764__$1;
(statearr_54766_54816[(1)] = (8));

} else {
var statearr_54767_54817 = state_54764__$1;
(statearr_54767_54817[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54765 === (20))){
var inst_54758 = (state_54764[(2)]);
var state_54764__$1 = state_54764;
var statearr_54768_54818 = state_54764__$1;
(statearr_54768_54818[(2)] = inst_54758);

(statearr_54768_54818[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54765 === (27))){
var inst_54754 = (state_54764[(2)]);
var state_54764__$1 = state_54764;
var statearr_54769_54819 = state_54764__$1;
(statearr_54769_54819[(2)] = inst_54754);

(statearr_54769_54819[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54765 === (1))){
var inst_54677 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_54764__$1 = state_54764;
if(cljs.core.truth_(inst_54677)){
var statearr_54770_54820 = state_54764__$1;
(statearr_54770_54820[(1)] = (2));

} else {
var statearr_54771_54821 = state_54764__$1;
(statearr_54771_54821[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54765 === (24))){
var inst_54756 = (state_54764[(2)]);
var state_54764__$1 = state_54764;
var statearr_54772_54822 = state_54764__$1;
(statearr_54772_54822[(2)] = inst_54756);

(statearr_54772_54822[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54765 === (4))){
var inst_54762 = (state_54764[(2)]);
var state_54764__$1 = state_54764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54764__$1,inst_54762);
} else {
if((state_val_54765 === (15))){
var inst_54760 = (state_54764[(2)]);
var state_54764__$1 = state_54764;
var statearr_54773_54823 = state_54764__$1;
(statearr_54773_54823[(2)] = inst_54760);

(statearr_54773_54823[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54765 === (21))){
var inst_54713 = (state_54764[(2)]);
var inst_54714 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54715 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54714);
var state_54764__$1 = (function (){var statearr_54774 = state_54764;
(statearr_54774[(7)] = inst_54713);

return statearr_54774;
})();
var statearr_54775_54824 = state_54764__$1;
(statearr_54775_54824[(2)] = inst_54715);

(statearr_54775_54824[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54765 === (31))){
var inst_54743 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_54764__$1 = state_54764;
if(cljs.core.truth_(inst_54743)){
var statearr_54776_54825 = state_54764__$1;
(statearr_54776_54825[(1)] = (34));

} else {
var statearr_54777_54826 = state_54764__$1;
(statearr_54777_54826[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54765 === (32))){
var inst_54752 = (state_54764[(2)]);
var state_54764__$1 = state_54764;
var statearr_54778_54827 = state_54764__$1;
(statearr_54778_54827[(2)] = inst_54752);

(statearr_54778_54827[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54765 === (33))){
var inst_54739 = (state_54764[(2)]);
var inst_54740 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54741 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54740);
var state_54764__$1 = (function (){var statearr_54779 = state_54764;
(statearr_54779[(8)] = inst_54739);

return statearr_54779;
})();
var statearr_54780_54828 = state_54764__$1;
(statearr_54780_54828[(2)] = inst_54741);

(statearr_54780_54828[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54765 === (13))){
var inst_54698 = figwheel.client.heads_up.clear.call(null);
var state_54764__$1 = state_54764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54764__$1,(16),inst_54698);
} else {
if((state_val_54765 === (22))){
var inst_54719 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54720 = figwheel.client.heads_up.append_warning_message.call(null,inst_54719);
var state_54764__$1 = state_54764;
var statearr_54781_54829 = state_54764__$1;
(statearr_54781_54829[(2)] = inst_54720);

(statearr_54781_54829[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54765 === (36))){
var inst_54750 = (state_54764[(2)]);
var state_54764__$1 = state_54764;
var statearr_54782_54830 = state_54764__$1;
(statearr_54782_54830[(2)] = inst_54750);

(statearr_54782_54830[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54765 === (29))){
var inst_54730 = (state_54764[(2)]);
var inst_54731 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54732 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54731);
var state_54764__$1 = (function (){var statearr_54783 = state_54764;
(statearr_54783[(9)] = inst_54730);

return statearr_54783;
})();
var statearr_54784_54831 = state_54764__$1;
(statearr_54784_54831[(2)] = inst_54732);

(statearr_54784_54831[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54765 === (6))){
var inst_54679 = (state_54764[(10)]);
var state_54764__$1 = state_54764;
var statearr_54785_54832 = state_54764__$1;
(statearr_54785_54832[(2)] = inst_54679);

(statearr_54785_54832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54765 === (28))){
var inst_54726 = (state_54764[(2)]);
var inst_54727 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54728 = figwheel.client.heads_up.display_warning.call(null,inst_54727);
var state_54764__$1 = (function (){var statearr_54786 = state_54764;
(statearr_54786[(11)] = inst_54726);

return statearr_54786;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54764__$1,(29),inst_54728);
} else {
if((state_val_54765 === (25))){
var inst_54724 = figwheel.client.heads_up.clear.call(null);
var state_54764__$1 = state_54764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54764__$1,(28),inst_54724);
} else {
if((state_val_54765 === (34))){
var inst_54745 = figwheel.client.heads_up.flash_loaded.call(null);
var state_54764__$1 = state_54764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54764__$1,(37),inst_54745);
} else {
if((state_val_54765 === (17))){
var inst_54704 = (state_54764[(2)]);
var inst_54705 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54706 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54705);
var state_54764__$1 = (function (){var statearr_54787 = state_54764;
(statearr_54787[(12)] = inst_54704);

return statearr_54787;
})();
var statearr_54788_54833 = state_54764__$1;
(statearr_54788_54833[(2)] = inst_54706);

(statearr_54788_54833[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54765 === (3))){
var inst_54696 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_54764__$1 = state_54764;
if(cljs.core.truth_(inst_54696)){
var statearr_54789_54834 = state_54764__$1;
(statearr_54789_54834[(1)] = (13));

} else {
var statearr_54790_54835 = state_54764__$1;
(statearr_54790_54835[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54765 === (12))){
var inst_54692 = (state_54764[(2)]);
var state_54764__$1 = state_54764;
var statearr_54791_54836 = state_54764__$1;
(statearr_54791_54836[(2)] = inst_54692);

(statearr_54791_54836[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54765 === (2))){
var inst_54679 = (state_54764[(10)]);
var inst_54679__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_54764__$1 = (function (){var statearr_54792 = state_54764;
(statearr_54792[(10)] = inst_54679__$1);

return statearr_54792;
})();
if(cljs.core.truth_(inst_54679__$1)){
var statearr_54793_54837 = state_54764__$1;
(statearr_54793_54837[(1)] = (5));

} else {
var statearr_54794_54838 = state_54764__$1;
(statearr_54794_54838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54765 === (23))){
var inst_54722 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_54764__$1 = state_54764;
if(cljs.core.truth_(inst_54722)){
var statearr_54795_54839 = state_54764__$1;
(statearr_54795_54839[(1)] = (25));

} else {
var statearr_54796_54840 = state_54764__$1;
(statearr_54796_54840[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54765 === (35))){
var state_54764__$1 = state_54764;
var statearr_54797_54841 = state_54764__$1;
(statearr_54797_54841[(2)] = null);

(statearr_54797_54841[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54765 === (19))){
var inst_54717 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_54764__$1 = state_54764;
if(cljs.core.truth_(inst_54717)){
var statearr_54798_54842 = state_54764__$1;
(statearr_54798_54842[(1)] = (22));

} else {
var statearr_54799_54843 = state_54764__$1;
(statearr_54799_54843[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54765 === (11))){
var inst_54688 = (state_54764[(2)]);
var state_54764__$1 = state_54764;
var statearr_54800_54844 = state_54764__$1;
(statearr_54800_54844[(2)] = inst_54688);

(statearr_54800_54844[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54765 === (9))){
var inst_54690 = figwheel.client.heads_up.clear.call(null);
var state_54764__$1 = state_54764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54764__$1,(12),inst_54690);
} else {
if((state_val_54765 === (5))){
var inst_54681 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_54764__$1 = state_54764;
var statearr_54801_54845 = state_54764__$1;
(statearr_54801_54845[(2)] = inst_54681);

(statearr_54801_54845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54765 === (14))){
var inst_54708 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_54764__$1 = state_54764;
if(cljs.core.truth_(inst_54708)){
var statearr_54802_54846 = state_54764__$1;
(statearr_54802_54846[(1)] = (18));

} else {
var statearr_54803_54847 = state_54764__$1;
(statearr_54803_54847[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54765 === (26))){
var inst_54734 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_54764__$1 = state_54764;
if(cljs.core.truth_(inst_54734)){
var statearr_54804_54848 = state_54764__$1;
(statearr_54804_54848[(1)] = (30));

} else {
var statearr_54805_54849 = state_54764__$1;
(statearr_54805_54849[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54765 === (16))){
var inst_54700 = (state_54764[(2)]);
var inst_54701 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54702 = figwheel.client.heads_up.display_exception.call(null,inst_54701);
var state_54764__$1 = (function (){var statearr_54806 = state_54764;
(statearr_54806[(13)] = inst_54700);

return statearr_54806;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54764__$1,(17),inst_54702);
} else {
if((state_val_54765 === (30))){
var inst_54736 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54737 = figwheel.client.heads_up.display_warning.call(null,inst_54736);
var state_54764__$1 = state_54764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54764__$1,(33),inst_54737);
} else {
if((state_val_54765 === (10))){
var inst_54694 = (state_54764[(2)]);
var state_54764__$1 = state_54764;
var statearr_54807_54850 = state_54764__$1;
(statearr_54807_54850[(2)] = inst_54694);

(statearr_54807_54850[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54765 === (18))){
var inst_54710 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54711 = figwheel.client.heads_up.display_exception.call(null,inst_54710);
var state_54764__$1 = state_54764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54764__$1,(21),inst_54711);
} else {
if((state_val_54765 === (37))){
var inst_54747 = (state_54764[(2)]);
var state_54764__$1 = state_54764;
var statearr_54808_54851 = state_54764__$1;
(statearr_54808_54851[(2)] = inst_54747);

(statearr_54808_54851[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54765 === (8))){
var inst_54686 = figwheel.client.heads_up.flash_loaded.call(null);
var state_54764__$1 = state_54764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54764__$1,(11),inst_54686);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40679__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__40567__auto__,c__40679__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40568__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40568__auto____0 = (function (){
var statearr_54812 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54812[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40568__auto__);

(statearr_54812[(1)] = (1));

return statearr_54812;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40568__auto____1 = (function (state_54764){
while(true){
var ret_value__40569__auto__ = (function (){try{while(true){
var result__40570__auto__ = switch__40567__auto__.call(null,state_54764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40570__auto__;
}
break;
}
}catch (e54813){if((e54813 instanceof Object)){
var ex__40571__auto__ = e54813;
var statearr_54814_54852 = state_54764;
(statearr_54814_54852[(5)] = ex__40571__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54853 = state_54764;
state_54764 = G__54853;
continue;
} else {
return ret_value__40569__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40568__auto__ = function(state_54764){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40568__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40568__auto____1.call(this,state_54764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40568__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40568__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40568__auto__;
})()
;})(switch__40567__auto__,c__40679__auto__,msg_hist,msg_names,msg))
})();
var state__40681__auto__ = (function (){var statearr_54815 = f__40680__auto__.call(null);
(statearr_54815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40679__auto__);

return statearr_54815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40681__auto__);
});})(c__40679__auto__,msg_hist,msg_names,msg))
);

return c__40679__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__40679__auto___54916 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40679__auto___54916,ch){
return (function (){
var f__40680__auto__ = (function (){var switch__40567__auto__ = ((function (c__40679__auto___54916,ch){
return (function (state_54899){
var state_val_54900 = (state_54899[(1)]);
if((state_val_54900 === (1))){
var state_54899__$1 = state_54899;
var statearr_54901_54917 = state_54899__$1;
(statearr_54901_54917[(2)] = null);

(statearr_54901_54917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54900 === (2))){
var state_54899__$1 = state_54899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54899__$1,(4),ch);
} else {
if((state_val_54900 === (3))){
var inst_54897 = (state_54899[(2)]);
var state_54899__$1 = state_54899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54899__$1,inst_54897);
} else {
if((state_val_54900 === (4))){
var inst_54887 = (state_54899[(7)]);
var inst_54887__$1 = (state_54899[(2)]);
var state_54899__$1 = (function (){var statearr_54902 = state_54899;
(statearr_54902[(7)] = inst_54887__$1);

return statearr_54902;
})();
if(cljs.core.truth_(inst_54887__$1)){
var statearr_54903_54918 = state_54899__$1;
(statearr_54903_54918[(1)] = (5));

} else {
var statearr_54904_54919 = state_54899__$1;
(statearr_54904_54919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54900 === (5))){
var inst_54887 = (state_54899[(7)]);
var inst_54889 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_54887);
var state_54899__$1 = state_54899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54899__$1,(8),inst_54889);
} else {
if((state_val_54900 === (6))){
var state_54899__$1 = state_54899;
var statearr_54905_54920 = state_54899__$1;
(statearr_54905_54920[(2)] = null);

(statearr_54905_54920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54900 === (7))){
var inst_54895 = (state_54899[(2)]);
var state_54899__$1 = state_54899;
var statearr_54906_54921 = state_54899__$1;
(statearr_54906_54921[(2)] = inst_54895);

(statearr_54906_54921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54900 === (8))){
var inst_54891 = (state_54899[(2)]);
var state_54899__$1 = (function (){var statearr_54907 = state_54899;
(statearr_54907[(8)] = inst_54891);

return statearr_54907;
})();
var statearr_54908_54922 = state_54899__$1;
(statearr_54908_54922[(2)] = null);

(statearr_54908_54922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__40679__auto___54916,ch))
;
return ((function (switch__40567__auto__,c__40679__auto___54916,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__40568__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__40568__auto____0 = (function (){
var statearr_54912 = [null,null,null,null,null,null,null,null,null];
(statearr_54912[(0)] = figwheel$client$heads_up_plugin_$_state_machine__40568__auto__);

(statearr_54912[(1)] = (1));

return statearr_54912;
});
var figwheel$client$heads_up_plugin_$_state_machine__40568__auto____1 = (function (state_54899){
while(true){
var ret_value__40569__auto__ = (function (){try{while(true){
var result__40570__auto__ = switch__40567__auto__.call(null,state_54899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40570__auto__;
}
break;
}
}catch (e54913){if((e54913 instanceof Object)){
var ex__40571__auto__ = e54913;
var statearr_54914_54923 = state_54899;
(statearr_54914_54923[(5)] = ex__40571__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54924 = state_54899;
state_54899 = G__54924;
continue;
} else {
return ret_value__40569__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__40568__auto__ = function(state_54899){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__40568__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__40568__auto____1.call(this,state_54899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__40568__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__40568__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__40568__auto__;
})()
;})(switch__40567__auto__,c__40679__auto___54916,ch))
})();
var state__40681__auto__ = (function (){var statearr_54915 = f__40680__auto__.call(null);
(statearr_54915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40679__auto___54916);

return statearr_54915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40681__auto__);
});})(c__40679__auto___54916,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__40679__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40679__auto__){
return (function (){
var f__40680__auto__ = (function (){var switch__40567__auto__ = ((function (c__40679__auto__){
return (function (state_54945){
var state_val_54946 = (state_54945[(1)]);
if((state_val_54946 === (1))){
var inst_54940 = cljs.core.async.timeout.call(null,(3000));
var state_54945__$1 = state_54945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54945__$1,(2),inst_54940);
} else {
if((state_val_54946 === (2))){
var inst_54942 = (state_54945[(2)]);
var inst_54943 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_54945__$1 = (function (){var statearr_54947 = state_54945;
(statearr_54947[(7)] = inst_54942);

return statearr_54947;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54945__$1,inst_54943);
} else {
return null;
}
}
});})(c__40679__auto__))
;
return ((function (switch__40567__auto__,c__40679__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__40568__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__40568__auto____0 = (function (){
var statearr_54951 = [null,null,null,null,null,null,null,null];
(statearr_54951[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__40568__auto__);

(statearr_54951[(1)] = (1));

return statearr_54951;
});
var figwheel$client$enforce_project_plugin_$_state_machine__40568__auto____1 = (function (state_54945){
while(true){
var ret_value__40569__auto__ = (function (){try{while(true){
var result__40570__auto__ = switch__40567__auto__.call(null,state_54945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40570__auto__;
}
break;
}
}catch (e54952){if((e54952 instanceof Object)){
var ex__40571__auto__ = e54952;
var statearr_54953_54955 = state_54945;
(statearr_54953_54955[(5)] = ex__40571__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54956 = state_54945;
state_54945 = G__54956;
continue;
} else {
return ret_value__40569__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__40568__auto__ = function(state_54945){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__40568__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__40568__auto____1.call(this,state_54945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__40568__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__40568__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__40568__auto__;
})()
;})(switch__40567__auto__,c__40679__auto__))
})();
var state__40681__auto__ = (function (){var statearr_54954 = f__40680__auto__.call(null);
(statearr_54954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40679__auto__);

return statearr_54954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40681__auto__);
});})(c__40679__auto__))
);

return c__40679__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__40679__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40679__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__40680__auto__ = (function (){var switch__40567__auto__ = ((function (c__40679__auto__,figwheel_version,temp__4657__auto__){
return (function (state_54979){
var state_val_54980 = (state_54979[(1)]);
if((state_val_54980 === (1))){
var inst_54973 = cljs.core.async.timeout.call(null,(2000));
var state_54979__$1 = state_54979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54979__$1,(2),inst_54973);
} else {
if((state_val_54980 === (2))){
var inst_54975 = (state_54979[(2)]);
var inst_54976 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_54977 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_54976);
var state_54979__$1 = (function (){var statearr_54981 = state_54979;
(statearr_54981[(7)] = inst_54975);

return statearr_54981;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54979__$1,inst_54977);
} else {
return null;
}
}
});})(c__40679__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__40567__auto__,c__40679__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40568__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40568__auto____0 = (function (){
var statearr_54985 = [null,null,null,null,null,null,null,null];
(statearr_54985[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40568__auto__);

(statearr_54985[(1)] = (1));

return statearr_54985;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40568__auto____1 = (function (state_54979){
while(true){
var ret_value__40569__auto__ = (function (){try{while(true){
var result__40570__auto__ = switch__40567__auto__.call(null,state_54979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40570__auto__;
}
break;
}
}catch (e54986){if((e54986 instanceof Object)){
var ex__40571__auto__ = e54986;
var statearr_54987_54989 = state_54979;
(statearr_54987_54989[(5)] = ex__40571__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54990 = state_54979;
state_54979 = G__54990;
continue;
} else {
return ret_value__40569__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40568__auto__ = function(state_54979){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40568__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40568__auto____1.call(this,state_54979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40568__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40568__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40568__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40568__auto__;
})()
;})(switch__40567__auto__,c__40679__auto__,figwheel_version,temp__4657__auto__))
})();
var state__40681__auto__ = (function (){var statearr_54988 = f__40680__auto__.call(null);
(statearr_54988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40679__auto__);

return statearr_54988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40681__auto__);
});})(c__40679__auto__,figwheel_version,temp__4657__auto__))
);

return c__40679__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__54991){
var map__54995 = p__54991;
var map__54995__$1 = ((((!((map__54995 == null)))?((((map__54995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54995):map__54995);
var file = cljs.core.get.call(null,map__54995__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__54995__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__54995__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__54997 = "";
var G__54997__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__54997),cljs.core.str("file "),cljs.core.str(file)].join(''):G__54997);
var G__54997__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__54997__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__54997__$1);
if(cljs.core.truth_((function (){var and__36790__auto__ = line;
if(cljs.core.truth_(and__36790__auto__)){
return column;
} else {
return and__36790__auto__;
}
})())){
return [cljs.core.str(G__54997__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__54997__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__54998){
var map__55005 = p__54998;
var map__55005__$1 = ((((!((map__55005 == null)))?((((map__55005.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55005.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55005):map__55005);
var ed = map__55005__$1;
var formatted_exception = cljs.core.get.call(null,map__55005__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__55005__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__55005__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__55007_55011 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__55008_55012 = null;
var count__55009_55013 = (0);
var i__55010_55014 = (0);
while(true){
if((i__55010_55014 < count__55009_55013)){
var msg_55015 = cljs.core._nth.call(null,chunk__55008_55012,i__55010_55014);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_55015);

var G__55016 = seq__55007_55011;
var G__55017 = chunk__55008_55012;
var G__55018 = count__55009_55013;
var G__55019 = (i__55010_55014 + (1));
seq__55007_55011 = G__55016;
chunk__55008_55012 = G__55017;
count__55009_55013 = G__55018;
i__55010_55014 = G__55019;
continue;
} else {
var temp__4657__auto___55020 = cljs.core.seq.call(null,seq__55007_55011);
if(temp__4657__auto___55020){
var seq__55007_55021__$1 = temp__4657__auto___55020;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55007_55021__$1)){
var c__37613__auto___55022 = cljs.core.chunk_first.call(null,seq__55007_55021__$1);
var G__55023 = cljs.core.chunk_rest.call(null,seq__55007_55021__$1);
var G__55024 = c__37613__auto___55022;
var G__55025 = cljs.core.count.call(null,c__37613__auto___55022);
var G__55026 = (0);
seq__55007_55011 = G__55023;
chunk__55008_55012 = G__55024;
count__55009_55013 = G__55025;
i__55010_55014 = G__55026;
continue;
} else {
var msg_55027 = cljs.core.first.call(null,seq__55007_55021__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_55027);

var G__55028 = cljs.core.next.call(null,seq__55007_55021__$1);
var G__55029 = null;
var G__55030 = (0);
var G__55031 = (0);
seq__55007_55011 = G__55028;
chunk__55008_55012 = G__55029;
count__55009_55013 = G__55030;
i__55010_55014 = G__55031;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__55032){
var map__55035 = p__55032;
var map__55035__$1 = ((((!((map__55035 == null)))?((((map__55035.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55035.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55035):map__55035);
var w = map__55035__$1;
var message = cljs.core.get.call(null,map__55035__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__36790__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__36790__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__36790__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__55047 = cljs.core.seq.call(null,plugins);
var chunk__55048 = null;
var count__55049 = (0);
var i__55050 = (0);
while(true){
if((i__55050 < count__55049)){
var vec__55051 = cljs.core._nth.call(null,chunk__55048,i__55050);
var k = cljs.core.nth.call(null,vec__55051,(0),null);
var plugin = cljs.core.nth.call(null,vec__55051,(1),null);
if(cljs.core.truth_(plugin)){
var pl_55057 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__55047,chunk__55048,count__55049,i__55050,pl_55057,vec__55051,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_55057.call(null,msg_hist);
});})(seq__55047,chunk__55048,count__55049,i__55050,pl_55057,vec__55051,k,plugin))
);
} else {
}

var G__55058 = seq__55047;
var G__55059 = chunk__55048;
var G__55060 = count__55049;
var G__55061 = (i__55050 + (1));
seq__55047 = G__55058;
chunk__55048 = G__55059;
count__55049 = G__55060;
i__55050 = G__55061;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__55047);
if(temp__4657__auto__){
var seq__55047__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55047__$1)){
var c__37613__auto__ = cljs.core.chunk_first.call(null,seq__55047__$1);
var G__55062 = cljs.core.chunk_rest.call(null,seq__55047__$1);
var G__55063 = c__37613__auto__;
var G__55064 = cljs.core.count.call(null,c__37613__auto__);
var G__55065 = (0);
seq__55047 = G__55062;
chunk__55048 = G__55063;
count__55049 = G__55064;
i__55050 = G__55065;
continue;
} else {
var vec__55054 = cljs.core.first.call(null,seq__55047__$1);
var k = cljs.core.nth.call(null,vec__55054,(0),null);
var plugin = cljs.core.nth.call(null,vec__55054,(1),null);
if(cljs.core.truth_(plugin)){
var pl_55066 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__55047,chunk__55048,count__55049,i__55050,pl_55066,vec__55054,k,plugin,seq__55047__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_55066.call(null,msg_hist);
});})(seq__55047,chunk__55048,count__55049,i__55050,pl_55066,vec__55054,k,plugin,seq__55047__$1,temp__4657__auto__))
);
} else {
}

var G__55067 = cljs.core.next.call(null,seq__55047__$1);
var G__55068 = null;
var G__55069 = (0);
var G__55070 = (0);
seq__55047 = G__55067;
chunk__55048 = G__55068;
count__55049 = G__55069;
i__55050 = G__55070;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args55071 = [];
var len__37877__auto___55078 = arguments.length;
var i__37878__auto___55079 = (0);
while(true){
if((i__37878__auto___55079 < len__37877__auto___55078)){
args55071.push((arguments[i__37878__auto___55079]));

var G__55080 = (i__37878__auto___55079 + (1));
i__37878__auto___55079 = G__55080;
continue;
} else {
}
break;
}

var G__55073 = args55071.length;
switch (G__55073) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55071.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__55074_55082 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__55075_55083 = null;
var count__55076_55084 = (0);
var i__55077_55085 = (0);
while(true){
if((i__55077_55085 < count__55076_55084)){
var msg_55086 = cljs.core._nth.call(null,chunk__55075_55083,i__55077_55085);
figwheel.client.socket.handle_incoming_message.call(null,msg_55086);

var G__55087 = seq__55074_55082;
var G__55088 = chunk__55075_55083;
var G__55089 = count__55076_55084;
var G__55090 = (i__55077_55085 + (1));
seq__55074_55082 = G__55087;
chunk__55075_55083 = G__55088;
count__55076_55084 = G__55089;
i__55077_55085 = G__55090;
continue;
} else {
var temp__4657__auto___55091 = cljs.core.seq.call(null,seq__55074_55082);
if(temp__4657__auto___55091){
var seq__55074_55092__$1 = temp__4657__auto___55091;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55074_55092__$1)){
var c__37613__auto___55093 = cljs.core.chunk_first.call(null,seq__55074_55092__$1);
var G__55094 = cljs.core.chunk_rest.call(null,seq__55074_55092__$1);
var G__55095 = c__37613__auto___55093;
var G__55096 = cljs.core.count.call(null,c__37613__auto___55093);
var G__55097 = (0);
seq__55074_55082 = G__55094;
chunk__55075_55083 = G__55095;
count__55076_55084 = G__55096;
i__55077_55085 = G__55097;
continue;
} else {
var msg_55098 = cljs.core.first.call(null,seq__55074_55092__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_55098);

var G__55099 = cljs.core.next.call(null,seq__55074_55092__$1);
var G__55100 = null;
var G__55101 = (0);
var G__55102 = (0);
seq__55074_55082 = G__55099;
chunk__55075_55083 = G__55100;
count__55076_55084 = G__55101;
i__55077_55085 = G__55102;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__37884__auto__ = [];
var len__37877__auto___55107 = arguments.length;
var i__37878__auto___55108 = (0);
while(true){
if((i__37878__auto___55108 < len__37877__auto___55107)){
args__37884__auto__.push((arguments[i__37878__auto___55108]));

var G__55109 = (i__37878__auto___55108 + (1));
i__37878__auto___55108 = G__55109;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__55104){
var map__55105 = p__55104;
var map__55105__$1 = ((((!((map__55105 == null)))?((((map__55105.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55105.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55105):map__55105);
var opts = map__55105__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq55103){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55103));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e55111){if((e55111 instanceof Error)){
var e = e55111;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e55111;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__55115){
var map__55116 = p__55115;
var map__55116__$1 = ((((!((map__55116 == null)))?((((map__55116.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55116.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55116):map__55116);
var msg_name = cljs.core.get.call(null,map__55116__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map