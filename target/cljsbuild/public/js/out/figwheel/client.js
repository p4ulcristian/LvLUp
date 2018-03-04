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
var args54276 = [];
var len__37878__auto___54279 = arguments.length;
var i__37879__auto___54280 = (0);
while(true){
if((i__37879__auto___54280 < len__37878__auto___54279)){
args54276.push((arguments[i__37879__auto___54280]));

var G__54281 = (i__37879__auto___54280 + (1));
i__37879__auto___54280 = G__54281;
continue;
} else {
}
break;
}

var G__54278 = args54276.length;
switch (G__54278) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54276.length)].join('')));

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
var args__37885__auto__ = [];
var len__37878__auto___54284 = arguments.length;
var i__37879__auto___54285 = (0);
while(true){
if((i__37879__auto___54285 < len__37878__auto___54284)){
args__37885__auto__.push((arguments[i__37879__auto___54285]));

var G__54286 = (i__37879__auto___54285 + (1));
i__37879__auto___54285 = G__54286;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq54283){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54283));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__37885__auto__ = [];
var len__37878__auto___54288 = arguments.length;
var i__37879__auto___54289 = (0);
while(true){
if((i__37879__auto___54289 < len__37878__auto___54288)){
args__37885__auto__.push((arguments[i__37879__auto___54289]));

var G__54290 = (i__37879__auto___54289 + (1));
i__37879__auto___54289 = G__54290;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq54287){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54287));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__54291 = cljs.core._EQ_;
var expr__54292 = (function (){var or__36802__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e54295){if((e54295 instanceof Error)){
var e = e54295;
return false;
} else {
throw e54295;

}
}})();
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__54291.call(null,"true",expr__54292))){
return true;
} else {
if(cljs.core.truth_(pred__54291.call(null,"false",expr__54292))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__54292)].join('')));
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
}catch (e54297){if((e54297 instanceof Error)){
var e = e54297;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e54297;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__54298){
var map__54301 = p__54298;
var map__54301__$1 = ((((!((map__54301 == null)))?((((map__54301.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54301.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54301):map__54301);
var message = cljs.core.get.call(null,map__54301__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__54301__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__40680__auto___54463 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40680__auto___54463,ch){
return (function (){
var f__40681__auto__ = (function (){var switch__40568__auto__ = ((function (c__40680__auto___54463,ch){
return (function (state_54432){
var state_val_54433 = (state_54432[(1)]);
if((state_val_54433 === (7))){
var inst_54428 = (state_54432[(2)]);
var state_54432__$1 = state_54432;
var statearr_54434_54464 = state_54432__$1;
(statearr_54434_54464[(2)] = inst_54428);

(statearr_54434_54464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54433 === (1))){
var state_54432__$1 = state_54432;
var statearr_54435_54465 = state_54432__$1;
(statearr_54435_54465[(2)] = null);

(statearr_54435_54465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54433 === (4))){
var inst_54385 = (state_54432[(7)]);
var inst_54385__$1 = (state_54432[(2)]);
var state_54432__$1 = (function (){var statearr_54436 = state_54432;
(statearr_54436[(7)] = inst_54385__$1);

return statearr_54436;
})();
if(cljs.core.truth_(inst_54385__$1)){
var statearr_54437_54466 = state_54432__$1;
(statearr_54437_54466[(1)] = (5));

} else {
var statearr_54438_54467 = state_54432__$1;
(statearr_54438_54467[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54433 === (15))){
var inst_54392 = (state_54432[(8)]);
var inst_54407 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_54392);
var inst_54408 = cljs.core.first.call(null,inst_54407);
var inst_54409 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_54408);
var inst_54410 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_54409)].join('');
var inst_54411 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_54410);
var state_54432__$1 = state_54432;
var statearr_54439_54468 = state_54432__$1;
(statearr_54439_54468[(2)] = inst_54411);

(statearr_54439_54468[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54433 === (13))){
var inst_54416 = (state_54432[(2)]);
var state_54432__$1 = state_54432;
var statearr_54440_54469 = state_54432__$1;
(statearr_54440_54469[(2)] = inst_54416);

(statearr_54440_54469[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54433 === (6))){
var state_54432__$1 = state_54432;
var statearr_54441_54470 = state_54432__$1;
(statearr_54441_54470[(2)] = null);

(statearr_54441_54470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54433 === (17))){
var inst_54414 = (state_54432[(2)]);
var state_54432__$1 = state_54432;
var statearr_54442_54471 = state_54432__$1;
(statearr_54442_54471[(2)] = inst_54414);

(statearr_54442_54471[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54433 === (3))){
var inst_54430 = (state_54432[(2)]);
var state_54432__$1 = state_54432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54432__$1,inst_54430);
} else {
if((state_val_54433 === (12))){
var inst_54391 = (state_54432[(9)]);
var inst_54405 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_54391,opts);
var state_54432__$1 = state_54432;
if(cljs.core.truth_(inst_54405)){
var statearr_54443_54472 = state_54432__$1;
(statearr_54443_54472[(1)] = (15));

} else {
var statearr_54444_54473 = state_54432__$1;
(statearr_54444_54473[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54433 === (2))){
var state_54432__$1 = state_54432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54432__$1,(4),ch);
} else {
if((state_val_54433 === (11))){
var inst_54392 = (state_54432[(8)]);
var inst_54397 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54398 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_54392);
var inst_54399 = cljs.core.async.timeout.call(null,(1000));
var inst_54400 = [inst_54398,inst_54399];
var inst_54401 = (new cljs.core.PersistentVector(null,2,(5),inst_54397,inst_54400,null));
var state_54432__$1 = state_54432;
return cljs.core.async.ioc_alts_BANG_.call(null,state_54432__$1,(14),inst_54401);
} else {
if((state_val_54433 === (9))){
var inst_54392 = (state_54432[(8)]);
var inst_54418 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_54419 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_54392);
var inst_54420 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_54419);
var inst_54421 = [cljs.core.str("Not loading: "),cljs.core.str(inst_54420)].join('');
var inst_54422 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_54421);
var state_54432__$1 = (function (){var statearr_54445 = state_54432;
(statearr_54445[(10)] = inst_54418);

return statearr_54445;
})();
var statearr_54446_54474 = state_54432__$1;
(statearr_54446_54474[(2)] = inst_54422);

(statearr_54446_54474[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54433 === (5))){
var inst_54385 = (state_54432[(7)]);
var inst_54387 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_54388 = (new cljs.core.PersistentArrayMap(null,2,inst_54387,null));
var inst_54389 = (new cljs.core.PersistentHashSet(null,inst_54388,null));
var inst_54390 = figwheel.client.focus_msgs.call(null,inst_54389,inst_54385);
var inst_54391 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_54390);
var inst_54392 = cljs.core.first.call(null,inst_54390);
var inst_54393 = figwheel.client.autoload_QMARK_.call(null);
var state_54432__$1 = (function (){var statearr_54447 = state_54432;
(statearr_54447[(9)] = inst_54391);

(statearr_54447[(8)] = inst_54392);

return statearr_54447;
})();
if(cljs.core.truth_(inst_54393)){
var statearr_54448_54475 = state_54432__$1;
(statearr_54448_54475[(1)] = (8));

} else {
var statearr_54449_54476 = state_54432__$1;
(statearr_54449_54476[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54433 === (14))){
var inst_54403 = (state_54432[(2)]);
var state_54432__$1 = state_54432;
var statearr_54450_54477 = state_54432__$1;
(statearr_54450_54477[(2)] = inst_54403);

(statearr_54450_54477[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54433 === (16))){
var state_54432__$1 = state_54432;
var statearr_54451_54478 = state_54432__$1;
(statearr_54451_54478[(2)] = null);

(statearr_54451_54478[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54433 === (10))){
var inst_54424 = (state_54432[(2)]);
var state_54432__$1 = (function (){var statearr_54452 = state_54432;
(statearr_54452[(11)] = inst_54424);

return statearr_54452;
})();
var statearr_54453_54479 = state_54432__$1;
(statearr_54453_54479[(2)] = null);

(statearr_54453_54479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54433 === (8))){
var inst_54391 = (state_54432[(9)]);
var inst_54395 = figwheel.client.reload_file_state_QMARK_.call(null,inst_54391,opts);
var state_54432__$1 = state_54432;
if(cljs.core.truth_(inst_54395)){
var statearr_54454_54480 = state_54432__$1;
(statearr_54454_54480[(1)] = (11));

} else {
var statearr_54455_54481 = state_54432__$1;
(statearr_54455_54481[(1)] = (12));

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
});})(c__40680__auto___54463,ch))
;
return ((function (switch__40568__auto__,c__40680__auto___54463,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__40569__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__40569__auto____0 = (function (){
var statearr_54459 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54459[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__40569__auto__);

(statearr_54459[(1)] = (1));

return statearr_54459;
});
var figwheel$client$file_reloader_plugin_$_state_machine__40569__auto____1 = (function (state_54432){
while(true){
var ret_value__40570__auto__ = (function (){try{while(true){
var result__40571__auto__ = switch__40568__auto__.call(null,state_54432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40571__auto__;
}
break;
}
}catch (e54460){if((e54460 instanceof Object)){
var ex__40572__auto__ = e54460;
var statearr_54461_54482 = state_54432;
(statearr_54461_54482[(5)] = ex__40572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54483 = state_54432;
state_54432 = G__54483;
continue;
} else {
return ret_value__40570__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__40569__auto__ = function(state_54432){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__40569__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__40569__auto____1.call(this,state_54432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__40569__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__40569__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__40569__auto__;
})()
;})(switch__40568__auto__,c__40680__auto___54463,ch))
})();
var state__40682__auto__ = (function (){var statearr_54462 = f__40681__auto__.call(null);
(statearr_54462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40680__auto___54463);

return statearr_54462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40682__auto__);
});})(c__40680__auto___54463,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__54484_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__54484_SHARP_));
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
var base_path_54487 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_54487){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e54486){if((e54486 instanceof Error)){
var e = e54486;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_54487], null));
} else {
var e = e54486;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_54487))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__54488){
var map__54497 = p__54488;
var map__54497__$1 = ((((!((map__54497 == null)))?((((map__54497.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54497.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54497):map__54497);
var opts = map__54497__$1;
var build_id = cljs.core.get.call(null,map__54497__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__54497,map__54497__$1,opts,build_id){
return (function (p__54499){
var vec__54500 = p__54499;
var seq__54501 = cljs.core.seq.call(null,vec__54500);
var first__54502 = cljs.core.first.call(null,seq__54501);
var seq__54501__$1 = cljs.core.next.call(null,seq__54501);
var map__54503 = first__54502;
var map__54503__$1 = ((((!((map__54503 == null)))?((((map__54503.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54503.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54503):map__54503);
var msg = map__54503__$1;
var msg_name = cljs.core.get.call(null,map__54503__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54501__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__54500,seq__54501,first__54502,seq__54501__$1,map__54503,map__54503__$1,msg,msg_name,_,map__54497,map__54497__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__54500,seq__54501,first__54502,seq__54501__$1,map__54503,map__54503__$1,msg,msg_name,_,map__54497,map__54497__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__54497,map__54497__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__54511){
var vec__54512 = p__54511;
var seq__54513 = cljs.core.seq.call(null,vec__54512);
var first__54514 = cljs.core.first.call(null,seq__54513);
var seq__54513__$1 = cljs.core.next.call(null,seq__54513);
var map__54515 = first__54514;
var map__54515__$1 = ((((!((map__54515 == null)))?((((map__54515.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54515.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54515):map__54515);
var msg = map__54515__$1;
var msg_name = cljs.core.get.call(null,map__54515__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54513__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__54517){
var map__54529 = p__54517;
var map__54529__$1 = ((((!((map__54529 == null)))?((((map__54529.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54529.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54529):map__54529);
var on_compile_warning = cljs.core.get.call(null,map__54529__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__54529__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__54529,map__54529__$1,on_compile_warning,on_compile_fail){
return (function (p__54531){
var vec__54532 = p__54531;
var seq__54533 = cljs.core.seq.call(null,vec__54532);
var first__54534 = cljs.core.first.call(null,seq__54533);
var seq__54533__$1 = cljs.core.next.call(null,seq__54533);
var map__54535 = first__54534;
var map__54535__$1 = ((((!((map__54535 == null)))?((((map__54535.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54535.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54535):map__54535);
var msg = map__54535__$1;
var msg_name = cljs.core.get.call(null,map__54535__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54533__$1;
var pred__54537 = cljs.core._EQ_;
var expr__54538 = msg_name;
if(cljs.core.truth_(pred__54537.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__54538))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__54537.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__54538))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__54529,map__54529__$1,on_compile_warning,on_compile_fail))
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
var c__40680__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40680__auto__,msg_hist,msg_names,msg){
return (function (){
var f__40681__auto__ = (function (){var switch__40568__auto__ = ((function (c__40680__auto__,msg_hist,msg_names,msg){
return (function (state_54766){
var state_val_54767 = (state_54766[(1)]);
if((state_val_54767 === (7))){
var inst_54686 = (state_54766[(2)]);
var state_54766__$1 = state_54766;
if(cljs.core.truth_(inst_54686)){
var statearr_54768_54818 = state_54766__$1;
(statearr_54768_54818[(1)] = (8));

} else {
var statearr_54769_54819 = state_54766__$1;
(statearr_54769_54819[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54767 === (20))){
var inst_54760 = (state_54766[(2)]);
var state_54766__$1 = state_54766;
var statearr_54770_54820 = state_54766__$1;
(statearr_54770_54820[(2)] = inst_54760);

(statearr_54770_54820[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54767 === (27))){
var inst_54756 = (state_54766[(2)]);
var state_54766__$1 = state_54766;
var statearr_54771_54821 = state_54766__$1;
(statearr_54771_54821[(2)] = inst_54756);

(statearr_54771_54821[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54767 === (1))){
var inst_54679 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_54766__$1 = state_54766;
if(cljs.core.truth_(inst_54679)){
var statearr_54772_54822 = state_54766__$1;
(statearr_54772_54822[(1)] = (2));

} else {
var statearr_54773_54823 = state_54766__$1;
(statearr_54773_54823[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54767 === (24))){
var inst_54758 = (state_54766[(2)]);
var state_54766__$1 = state_54766;
var statearr_54774_54824 = state_54766__$1;
(statearr_54774_54824[(2)] = inst_54758);

(statearr_54774_54824[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54767 === (4))){
var inst_54764 = (state_54766[(2)]);
var state_54766__$1 = state_54766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54766__$1,inst_54764);
} else {
if((state_val_54767 === (15))){
var inst_54762 = (state_54766[(2)]);
var state_54766__$1 = state_54766;
var statearr_54775_54825 = state_54766__$1;
(statearr_54775_54825[(2)] = inst_54762);

(statearr_54775_54825[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54767 === (21))){
var inst_54715 = (state_54766[(2)]);
var inst_54716 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54717 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54716);
var state_54766__$1 = (function (){var statearr_54776 = state_54766;
(statearr_54776[(7)] = inst_54715);

return statearr_54776;
})();
var statearr_54777_54826 = state_54766__$1;
(statearr_54777_54826[(2)] = inst_54717);

(statearr_54777_54826[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54767 === (31))){
var inst_54745 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_54766__$1 = state_54766;
if(cljs.core.truth_(inst_54745)){
var statearr_54778_54827 = state_54766__$1;
(statearr_54778_54827[(1)] = (34));

} else {
var statearr_54779_54828 = state_54766__$1;
(statearr_54779_54828[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54767 === (32))){
var inst_54754 = (state_54766[(2)]);
var state_54766__$1 = state_54766;
var statearr_54780_54829 = state_54766__$1;
(statearr_54780_54829[(2)] = inst_54754);

(statearr_54780_54829[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54767 === (33))){
var inst_54741 = (state_54766[(2)]);
var inst_54742 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54743 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54742);
var state_54766__$1 = (function (){var statearr_54781 = state_54766;
(statearr_54781[(8)] = inst_54741);

return statearr_54781;
})();
var statearr_54782_54830 = state_54766__$1;
(statearr_54782_54830[(2)] = inst_54743);

(statearr_54782_54830[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54767 === (13))){
var inst_54700 = figwheel.client.heads_up.clear.call(null);
var state_54766__$1 = state_54766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54766__$1,(16),inst_54700);
} else {
if((state_val_54767 === (22))){
var inst_54721 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54722 = figwheel.client.heads_up.append_warning_message.call(null,inst_54721);
var state_54766__$1 = state_54766;
var statearr_54783_54831 = state_54766__$1;
(statearr_54783_54831[(2)] = inst_54722);

(statearr_54783_54831[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54767 === (36))){
var inst_54752 = (state_54766[(2)]);
var state_54766__$1 = state_54766;
var statearr_54784_54832 = state_54766__$1;
(statearr_54784_54832[(2)] = inst_54752);

(statearr_54784_54832[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54767 === (29))){
var inst_54732 = (state_54766[(2)]);
var inst_54733 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54734 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54733);
var state_54766__$1 = (function (){var statearr_54785 = state_54766;
(statearr_54785[(9)] = inst_54732);

return statearr_54785;
})();
var statearr_54786_54833 = state_54766__$1;
(statearr_54786_54833[(2)] = inst_54734);

(statearr_54786_54833[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54767 === (6))){
var inst_54681 = (state_54766[(10)]);
var state_54766__$1 = state_54766;
var statearr_54787_54834 = state_54766__$1;
(statearr_54787_54834[(2)] = inst_54681);

(statearr_54787_54834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54767 === (28))){
var inst_54728 = (state_54766[(2)]);
var inst_54729 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54730 = figwheel.client.heads_up.display_warning.call(null,inst_54729);
var state_54766__$1 = (function (){var statearr_54788 = state_54766;
(statearr_54788[(11)] = inst_54728);

return statearr_54788;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54766__$1,(29),inst_54730);
} else {
if((state_val_54767 === (25))){
var inst_54726 = figwheel.client.heads_up.clear.call(null);
var state_54766__$1 = state_54766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54766__$1,(28),inst_54726);
} else {
if((state_val_54767 === (34))){
var inst_54747 = figwheel.client.heads_up.flash_loaded.call(null);
var state_54766__$1 = state_54766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54766__$1,(37),inst_54747);
} else {
if((state_val_54767 === (17))){
var inst_54706 = (state_54766[(2)]);
var inst_54707 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54708 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54707);
var state_54766__$1 = (function (){var statearr_54789 = state_54766;
(statearr_54789[(12)] = inst_54706);

return statearr_54789;
})();
var statearr_54790_54835 = state_54766__$1;
(statearr_54790_54835[(2)] = inst_54708);

(statearr_54790_54835[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54767 === (3))){
var inst_54698 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_54766__$1 = state_54766;
if(cljs.core.truth_(inst_54698)){
var statearr_54791_54836 = state_54766__$1;
(statearr_54791_54836[(1)] = (13));

} else {
var statearr_54792_54837 = state_54766__$1;
(statearr_54792_54837[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54767 === (12))){
var inst_54694 = (state_54766[(2)]);
var state_54766__$1 = state_54766;
var statearr_54793_54838 = state_54766__$1;
(statearr_54793_54838[(2)] = inst_54694);

(statearr_54793_54838[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54767 === (2))){
var inst_54681 = (state_54766[(10)]);
var inst_54681__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_54766__$1 = (function (){var statearr_54794 = state_54766;
(statearr_54794[(10)] = inst_54681__$1);

return statearr_54794;
})();
if(cljs.core.truth_(inst_54681__$1)){
var statearr_54795_54839 = state_54766__$1;
(statearr_54795_54839[(1)] = (5));

} else {
var statearr_54796_54840 = state_54766__$1;
(statearr_54796_54840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54767 === (23))){
var inst_54724 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_54766__$1 = state_54766;
if(cljs.core.truth_(inst_54724)){
var statearr_54797_54841 = state_54766__$1;
(statearr_54797_54841[(1)] = (25));

} else {
var statearr_54798_54842 = state_54766__$1;
(statearr_54798_54842[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54767 === (35))){
var state_54766__$1 = state_54766;
var statearr_54799_54843 = state_54766__$1;
(statearr_54799_54843[(2)] = null);

(statearr_54799_54843[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54767 === (19))){
var inst_54719 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_54766__$1 = state_54766;
if(cljs.core.truth_(inst_54719)){
var statearr_54800_54844 = state_54766__$1;
(statearr_54800_54844[(1)] = (22));

} else {
var statearr_54801_54845 = state_54766__$1;
(statearr_54801_54845[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54767 === (11))){
var inst_54690 = (state_54766[(2)]);
var state_54766__$1 = state_54766;
var statearr_54802_54846 = state_54766__$1;
(statearr_54802_54846[(2)] = inst_54690);

(statearr_54802_54846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54767 === (9))){
var inst_54692 = figwheel.client.heads_up.clear.call(null);
var state_54766__$1 = state_54766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54766__$1,(12),inst_54692);
} else {
if((state_val_54767 === (5))){
var inst_54683 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_54766__$1 = state_54766;
var statearr_54803_54847 = state_54766__$1;
(statearr_54803_54847[(2)] = inst_54683);

(statearr_54803_54847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54767 === (14))){
var inst_54710 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_54766__$1 = state_54766;
if(cljs.core.truth_(inst_54710)){
var statearr_54804_54848 = state_54766__$1;
(statearr_54804_54848[(1)] = (18));

} else {
var statearr_54805_54849 = state_54766__$1;
(statearr_54805_54849[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54767 === (26))){
var inst_54736 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_54766__$1 = state_54766;
if(cljs.core.truth_(inst_54736)){
var statearr_54806_54850 = state_54766__$1;
(statearr_54806_54850[(1)] = (30));

} else {
var statearr_54807_54851 = state_54766__$1;
(statearr_54807_54851[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54767 === (16))){
var inst_54702 = (state_54766[(2)]);
var inst_54703 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54704 = figwheel.client.heads_up.display_exception.call(null,inst_54703);
var state_54766__$1 = (function (){var statearr_54808 = state_54766;
(statearr_54808[(13)] = inst_54702);

return statearr_54808;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54766__$1,(17),inst_54704);
} else {
if((state_val_54767 === (30))){
var inst_54738 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54739 = figwheel.client.heads_up.display_warning.call(null,inst_54738);
var state_54766__$1 = state_54766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54766__$1,(33),inst_54739);
} else {
if((state_val_54767 === (10))){
var inst_54696 = (state_54766[(2)]);
var state_54766__$1 = state_54766;
var statearr_54809_54852 = state_54766__$1;
(statearr_54809_54852[(2)] = inst_54696);

(statearr_54809_54852[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54767 === (18))){
var inst_54712 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54713 = figwheel.client.heads_up.display_exception.call(null,inst_54712);
var state_54766__$1 = state_54766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54766__$1,(21),inst_54713);
} else {
if((state_val_54767 === (37))){
var inst_54749 = (state_54766[(2)]);
var state_54766__$1 = state_54766;
var statearr_54810_54853 = state_54766__$1;
(statearr_54810_54853[(2)] = inst_54749);

(statearr_54810_54853[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54767 === (8))){
var inst_54688 = figwheel.client.heads_up.flash_loaded.call(null);
var state_54766__$1 = state_54766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54766__$1,(11),inst_54688);
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
});})(c__40680__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__40568__auto__,c__40680__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40569__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40569__auto____0 = (function (){
var statearr_54814 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54814[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40569__auto__);

(statearr_54814[(1)] = (1));

return statearr_54814;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40569__auto____1 = (function (state_54766){
while(true){
var ret_value__40570__auto__ = (function (){try{while(true){
var result__40571__auto__ = switch__40568__auto__.call(null,state_54766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40571__auto__;
}
break;
}
}catch (e54815){if((e54815 instanceof Object)){
var ex__40572__auto__ = e54815;
var statearr_54816_54854 = state_54766;
(statearr_54816_54854[(5)] = ex__40572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54855 = state_54766;
state_54766 = G__54855;
continue;
} else {
return ret_value__40570__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40569__auto__ = function(state_54766){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40569__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40569__auto____1.call(this,state_54766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40569__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40569__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40569__auto__;
})()
;})(switch__40568__auto__,c__40680__auto__,msg_hist,msg_names,msg))
})();
var state__40682__auto__ = (function (){var statearr_54817 = f__40681__auto__.call(null);
(statearr_54817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40680__auto__);

return statearr_54817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40682__auto__);
});})(c__40680__auto__,msg_hist,msg_names,msg))
);

return c__40680__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__40680__auto___54918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40680__auto___54918,ch){
return (function (){
var f__40681__auto__ = (function (){var switch__40568__auto__ = ((function (c__40680__auto___54918,ch){
return (function (state_54901){
var state_val_54902 = (state_54901[(1)]);
if((state_val_54902 === (1))){
var state_54901__$1 = state_54901;
var statearr_54903_54919 = state_54901__$1;
(statearr_54903_54919[(2)] = null);

(statearr_54903_54919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54902 === (2))){
var state_54901__$1 = state_54901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54901__$1,(4),ch);
} else {
if((state_val_54902 === (3))){
var inst_54899 = (state_54901[(2)]);
var state_54901__$1 = state_54901;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54901__$1,inst_54899);
} else {
if((state_val_54902 === (4))){
var inst_54889 = (state_54901[(7)]);
var inst_54889__$1 = (state_54901[(2)]);
var state_54901__$1 = (function (){var statearr_54904 = state_54901;
(statearr_54904[(7)] = inst_54889__$1);

return statearr_54904;
})();
if(cljs.core.truth_(inst_54889__$1)){
var statearr_54905_54920 = state_54901__$1;
(statearr_54905_54920[(1)] = (5));

} else {
var statearr_54906_54921 = state_54901__$1;
(statearr_54906_54921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54902 === (5))){
var inst_54889 = (state_54901[(7)]);
var inst_54891 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_54889);
var state_54901__$1 = state_54901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54901__$1,(8),inst_54891);
} else {
if((state_val_54902 === (6))){
var state_54901__$1 = state_54901;
var statearr_54907_54922 = state_54901__$1;
(statearr_54907_54922[(2)] = null);

(statearr_54907_54922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54902 === (7))){
var inst_54897 = (state_54901[(2)]);
var state_54901__$1 = state_54901;
var statearr_54908_54923 = state_54901__$1;
(statearr_54908_54923[(2)] = inst_54897);

(statearr_54908_54923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54902 === (8))){
var inst_54893 = (state_54901[(2)]);
var state_54901__$1 = (function (){var statearr_54909 = state_54901;
(statearr_54909[(8)] = inst_54893);

return statearr_54909;
})();
var statearr_54910_54924 = state_54901__$1;
(statearr_54910_54924[(2)] = null);

(statearr_54910_54924[(1)] = (2));


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
});})(c__40680__auto___54918,ch))
;
return ((function (switch__40568__auto__,c__40680__auto___54918,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__40569__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__40569__auto____0 = (function (){
var statearr_54914 = [null,null,null,null,null,null,null,null,null];
(statearr_54914[(0)] = figwheel$client$heads_up_plugin_$_state_machine__40569__auto__);

(statearr_54914[(1)] = (1));

return statearr_54914;
});
var figwheel$client$heads_up_plugin_$_state_machine__40569__auto____1 = (function (state_54901){
while(true){
var ret_value__40570__auto__ = (function (){try{while(true){
var result__40571__auto__ = switch__40568__auto__.call(null,state_54901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40571__auto__;
}
break;
}
}catch (e54915){if((e54915 instanceof Object)){
var ex__40572__auto__ = e54915;
var statearr_54916_54925 = state_54901;
(statearr_54916_54925[(5)] = ex__40572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54926 = state_54901;
state_54901 = G__54926;
continue;
} else {
return ret_value__40570__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__40569__auto__ = function(state_54901){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__40569__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__40569__auto____1.call(this,state_54901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__40569__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__40569__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__40569__auto__;
})()
;})(switch__40568__auto__,c__40680__auto___54918,ch))
})();
var state__40682__auto__ = (function (){var statearr_54917 = f__40681__auto__.call(null);
(statearr_54917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40680__auto___54918);

return statearr_54917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40682__auto__);
});})(c__40680__auto___54918,ch))
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
var c__40680__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40680__auto__){
return (function (){
var f__40681__auto__ = (function (){var switch__40568__auto__ = ((function (c__40680__auto__){
return (function (state_54947){
var state_val_54948 = (state_54947[(1)]);
if((state_val_54948 === (1))){
var inst_54942 = cljs.core.async.timeout.call(null,(3000));
var state_54947__$1 = state_54947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54947__$1,(2),inst_54942);
} else {
if((state_val_54948 === (2))){
var inst_54944 = (state_54947[(2)]);
var inst_54945 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_54947__$1 = (function (){var statearr_54949 = state_54947;
(statearr_54949[(7)] = inst_54944);

return statearr_54949;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54947__$1,inst_54945);
} else {
return null;
}
}
});})(c__40680__auto__))
;
return ((function (switch__40568__auto__,c__40680__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__40569__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__40569__auto____0 = (function (){
var statearr_54953 = [null,null,null,null,null,null,null,null];
(statearr_54953[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__40569__auto__);

(statearr_54953[(1)] = (1));

return statearr_54953;
});
var figwheel$client$enforce_project_plugin_$_state_machine__40569__auto____1 = (function (state_54947){
while(true){
var ret_value__40570__auto__ = (function (){try{while(true){
var result__40571__auto__ = switch__40568__auto__.call(null,state_54947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40571__auto__;
}
break;
}
}catch (e54954){if((e54954 instanceof Object)){
var ex__40572__auto__ = e54954;
var statearr_54955_54957 = state_54947;
(statearr_54955_54957[(5)] = ex__40572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54958 = state_54947;
state_54947 = G__54958;
continue;
} else {
return ret_value__40570__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__40569__auto__ = function(state_54947){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__40569__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__40569__auto____1.call(this,state_54947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__40569__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__40569__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__40569__auto__;
})()
;})(switch__40568__auto__,c__40680__auto__))
})();
var state__40682__auto__ = (function (){var statearr_54956 = f__40681__auto__.call(null);
(statearr_54956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40680__auto__);

return statearr_54956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40682__auto__);
});})(c__40680__auto__))
);

return c__40680__auto__;
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
var c__40680__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40680__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__40681__auto__ = (function (){var switch__40568__auto__ = ((function (c__40680__auto__,figwheel_version,temp__4657__auto__){
return (function (state_54981){
var state_val_54982 = (state_54981[(1)]);
if((state_val_54982 === (1))){
var inst_54975 = cljs.core.async.timeout.call(null,(2000));
var state_54981__$1 = state_54981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54981__$1,(2),inst_54975);
} else {
if((state_val_54982 === (2))){
var inst_54977 = (state_54981[(2)]);
var inst_54978 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_54979 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_54978);
var state_54981__$1 = (function (){var statearr_54983 = state_54981;
(statearr_54983[(7)] = inst_54977);

return statearr_54983;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54981__$1,inst_54979);
} else {
return null;
}
}
});})(c__40680__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__40568__auto__,c__40680__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40569__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40569__auto____0 = (function (){
var statearr_54987 = [null,null,null,null,null,null,null,null];
(statearr_54987[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40569__auto__);

(statearr_54987[(1)] = (1));

return statearr_54987;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40569__auto____1 = (function (state_54981){
while(true){
var ret_value__40570__auto__ = (function (){try{while(true){
var result__40571__auto__ = switch__40568__auto__.call(null,state_54981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40571__auto__;
}
break;
}
}catch (e54988){if((e54988 instanceof Object)){
var ex__40572__auto__ = e54988;
var statearr_54989_54991 = state_54981;
(statearr_54989_54991[(5)] = ex__40572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54992 = state_54981;
state_54981 = G__54992;
continue;
} else {
return ret_value__40570__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40569__auto__ = function(state_54981){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40569__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40569__auto____1.call(this,state_54981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40569__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40569__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40569__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40569__auto__;
})()
;})(switch__40568__auto__,c__40680__auto__,figwheel_version,temp__4657__auto__))
})();
var state__40682__auto__ = (function (){var statearr_54990 = f__40681__auto__.call(null);
(statearr_54990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40680__auto__);

return statearr_54990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40682__auto__);
});})(c__40680__auto__,figwheel_version,temp__4657__auto__))
);

return c__40680__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__54993){
var map__54997 = p__54993;
var map__54997__$1 = ((((!((map__54997 == null)))?((((map__54997.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54997.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54997):map__54997);
var file = cljs.core.get.call(null,map__54997__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__54997__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__54997__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__54999 = "";
var G__54999__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__54999),cljs.core.str("file "),cljs.core.str(file)].join(''):G__54999);
var G__54999__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__54999__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__54999__$1);
if(cljs.core.truth_((function (){var and__36790__auto__ = line;
if(cljs.core.truth_(and__36790__auto__)){
return column;
} else {
return and__36790__auto__;
}
})())){
return [cljs.core.str(G__54999__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__54999__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__55000){
var map__55007 = p__55000;
var map__55007__$1 = ((((!((map__55007 == null)))?((((map__55007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55007):map__55007);
var ed = map__55007__$1;
var formatted_exception = cljs.core.get.call(null,map__55007__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__55007__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__55007__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__55009_55013 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__55010_55014 = null;
var count__55011_55015 = (0);
var i__55012_55016 = (0);
while(true){
if((i__55012_55016 < count__55011_55015)){
var msg_55017 = cljs.core._nth.call(null,chunk__55010_55014,i__55012_55016);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_55017);

var G__55018 = seq__55009_55013;
var G__55019 = chunk__55010_55014;
var G__55020 = count__55011_55015;
var G__55021 = (i__55012_55016 + (1));
seq__55009_55013 = G__55018;
chunk__55010_55014 = G__55019;
count__55011_55015 = G__55020;
i__55012_55016 = G__55021;
continue;
} else {
var temp__4657__auto___55022 = cljs.core.seq.call(null,seq__55009_55013);
if(temp__4657__auto___55022){
var seq__55009_55023__$1 = temp__4657__auto___55022;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55009_55023__$1)){
var c__37613__auto___55024 = cljs.core.chunk_first.call(null,seq__55009_55023__$1);
var G__55025 = cljs.core.chunk_rest.call(null,seq__55009_55023__$1);
var G__55026 = c__37613__auto___55024;
var G__55027 = cljs.core.count.call(null,c__37613__auto___55024);
var G__55028 = (0);
seq__55009_55013 = G__55025;
chunk__55010_55014 = G__55026;
count__55011_55015 = G__55027;
i__55012_55016 = G__55028;
continue;
} else {
var msg_55029 = cljs.core.first.call(null,seq__55009_55023__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_55029);

var G__55030 = cljs.core.next.call(null,seq__55009_55023__$1);
var G__55031 = null;
var G__55032 = (0);
var G__55033 = (0);
seq__55009_55013 = G__55030;
chunk__55010_55014 = G__55031;
count__55011_55015 = G__55032;
i__55012_55016 = G__55033;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__55034){
var map__55037 = p__55034;
var map__55037__$1 = ((((!((map__55037 == null)))?((((map__55037.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55037.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55037):map__55037);
var w = map__55037__$1;
var message = cljs.core.get.call(null,map__55037__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__55049 = cljs.core.seq.call(null,plugins);
var chunk__55050 = null;
var count__55051 = (0);
var i__55052 = (0);
while(true){
if((i__55052 < count__55051)){
var vec__55053 = cljs.core._nth.call(null,chunk__55050,i__55052);
var k = cljs.core.nth.call(null,vec__55053,(0),null);
var plugin = cljs.core.nth.call(null,vec__55053,(1),null);
if(cljs.core.truth_(plugin)){
var pl_55059 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__55049,chunk__55050,count__55051,i__55052,pl_55059,vec__55053,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_55059.call(null,msg_hist);
});})(seq__55049,chunk__55050,count__55051,i__55052,pl_55059,vec__55053,k,plugin))
);
} else {
}

var G__55060 = seq__55049;
var G__55061 = chunk__55050;
var G__55062 = count__55051;
var G__55063 = (i__55052 + (1));
seq__55049 = G__55060;
chunk__55050 = G__55061;
count__55051 = G__55062;
i__55052 = G__55063;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__55049);
if(temp__4657__auto__){
var seq__55049__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55049__$1)){
var c__37613__auto__ = cljs.core.chunk_first.call(null,seq__55049__$1);
var G__55064 = cljs.core.chunk_rest.call(null,seq__55049__$1);
var G__55065 = c__37613__auto__;
var G__55066 = cljs.core.count.call(null,c__37613__auto__);
var G__55067 = (0);
seq__55049 = G__55064;
chunk__55050 = G__55065;
count__55051 = G__55066;
i__55052 = G__55067;
continue;
} else {
var vec__55056 = cljs.core.first.call(null,seq__55049__$1);
var k = cljs.core.nth.call(null,vec__55056,(0),null);
var plugin = cljs.core.nth.call(null,vec__55056,(1),null);
if(cljs.core.truth_(plugin)){
var pl_55068 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__55049,chunk__55050,count__55051,i__55052,pl_55068,vec__55056,k,plugin,seq__55049__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_55068.call(null,msg_hist);
});})(seq__55049,chunk__55050,count__55051,i__55052,pl_55068,vec__55056,k,plugin,seq__55049__$1,temp__4657__auto__))
);
} else {
}

var G__55069 = cljs.core.next.call(null,seq__55049__$1);
var G__55070 = null;
var G__55071 = (0);
var G__55072 = (0);
seq__55049 = G__55069;
chunk__55050 = G__55070;
count__55051 = G__55071;
i__55052 = G__55072;
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
var args55073 = [];
var len__37878__auto___55080 = arguments.length;
var i__37879__auto___55081 = (0);
while(true){
if((i__37879__auto___55081 < len__37878__auto___55080)){
args55073.push((arguments[i__37879__auto___55081]));

var G__55082 = (i__37879__auto___55081 + (1));
i__37879__auto___55081 = G__55082;
continue;
} else {
}
break;
}

var G__55075 = args55073.length;
switch (G__55075) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55073.length)].join('')));

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

var seq__55076_55084 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__55077_55085 = null;
var count__55078_55086 = (0);
var i__55079_55087 = (0);
while(true){
if((i__55079_55087 < count__55078_55086)){
var msg_55088 = cljs.core._nth.call(null,chunk__55077_55085,i__55079_55087);
figwheel.client.socket.handle_incoming_message.call(null,msg_55088);

var G__55089 = seq__55076_55084;
var G__55090 = chunk__55077_55085;
var G__55091 = count__55078_55086;
var G__55092 = (i__55079_55087 + (1));
seq__55076_55084 = G__55089;
chunk__55077_55085 = G__55090;
count__55078_55086 = G__55091;
i__55079_55087 = G__55092;
continue;
} else {
var temp__4657__auto___55093 = cljs.core.seq.call(null,seq__55076_55084);
if(temp__4657__auto___55093){
var seq__55076_55094__$1 = temp__4657__auto___55093;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55076_55094__$1)){
var c__37613__auto___55095 = cljs.core.chunk_first.call(null,seq__55076_55094__$1);
var G__55096 = cljs.core.chunk_rest.call(null,seq__55076_55094__$1);
var G__55097 = c__37613__auto___55095;
var G__55098 = cljs.core.count.call(null,c__37613__auto___55095);
var G__55099 = (0);
seq__55076_55084 = G__55096;
chunk__55077_55085 = G__55097;
count__55078_55086 = G__55098;
i__55079_55087 = G__55099;
continue;
} else {
var msg_55100 = cljs.core.first.call(null,seq__55076_55094__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_55100);

var G__55101 = cljs.core.next.call(null,seq__55076_55094__$1);
var G__55102 = null;
var G__55103 = (0);
var G__55104 = (0);
seq__55076_55084 = G__55101;
chunk__55077_55085 = G__55102;
count__55078_55086 = G__55103;
i__55079_55087 = G__55104;
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
var args__37885__auto__ = [];
var len__37878__auto___55109 = arguments.length;
var i__37879__auto___55110 = (0);
while(true){
if((i__37879__auto___55110 < len__37878__auto___55109)){
args__37885__auto__.push((arguments[i__37879__auto___55110]));

var G__55111 = (i__37879__auto___55110 + (1));
i__37879__auto___55110 = G__55111;
continue;
} else {
}
break;
}

var argseq__37886__auto__ = ((((0) < args__37885__auto__.length))?(new cljs.core.IndexedSeq(args__37885__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__37886__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__55106){
var map__55107 = p__55106;
var map__55107__$1 = ((((!((map__55107 == null)))?((((map__55107.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55107.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55107):map__55107);
var opts = map__55107__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq55105){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55105));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e55113){if((e55113 instanceof Error)){
var e = e55113;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e55113;

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
return (function (p__55117){
var map__55118 = p__55117;
var map__55118__$1 = ((((!((map__55118 == null)))?((((map__55118.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55118.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55118):map__55118);
var msg_name = cljs.core.get.call(null,map__55118__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map