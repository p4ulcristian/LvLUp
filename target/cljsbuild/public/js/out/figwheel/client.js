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
var args54326 = [];
var len__37877__auto___54329 = arguments.length;
var i__37878__auto___54330 = (0);
while(true){
if((i__37878__auto___54330 < len__37877__auto___54329)){
args54326.push((arguments[i__37878__auto___54330]));

var G__54331 = (i__37878__auto___54330 + (1));
i__37878__auto___54330 = G__54331;
continue;
} else {
}
break;
}

var G__54328 = args54326.length;
switch (G__54328) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54326.length)].join('')));

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
var len__37877__auto___54334 = arguments.length;
var i__37878__auto___54335 = (0);
while(true){
if((i__37878__auto___54335 < len__37877__auto___54334)){
args__37884__auto__.push((arguments[i__37878__auto___54335]));

var G__54336 = (i__37878__auto___54335 + (1));
i__37878__auto___54335 = G__54336;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq54333){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54333));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__37884__auto__ = [];
var len__37877__auto___54338 = arguments.length;
var i__37878__auto___54339 = (0);
while(true){
if((i__37878__auto___54339 < len__37877__auto___54338)){
args__37884__auto__.push((arguments[i__37878__auto___54339]));

var G__54340 = (i__37878__auto___54339 + (1));
i__37878__auto___54339 = G__54340;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq54337){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54337));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__54341 = cljs.core._EQ_;
var expr__54342 = (function (){var or__36802__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e54345){if((e54345 instanceof Error)){
var e = e54345;
return false;
} else {
throw e54345;

}
}})();
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__54341.call(null,"true",expr__54342))){
return true;
} else {
if(cljs.core.truth_(pred__54341.call(null,"false",expr__54342))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__54342)].join('')));
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
}catch (e54347){if((e54347 instanceof Error)){
var e = e54347;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e54347;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__54348){
var map__54351 = p__54348;
var map__54351__$1 = ((((!((map__54351 == null)))?((((map__54351.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54351.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54351):map__54351);
var message = cljs.core.get.call(null,map__54351__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__54351__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__40731__auto___54513 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto___54513,ch){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto___54513,ch){
return (function (state_54482){
var state_val_54483 = (state_54482[(1)]);
if((state_val_54483 === (7))){
var inst_54478 = (state_54482[(2)]);
var state_54482__$1 = state_54482;
var statearr_54484_54514 = state_54482__$1;
(statearr_54484_54514[(2)] = inst_54478);

(statearr_54484_54514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54483 === (1))){
var state_54482__$1 = state_54482;
var statearr_54485_54515 = state_54482__$1;
(statearr_54485_54515[(2)] = null);

(statearr_54485_54515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54483 === (4))){
var inst_54435 = (state_54482[(7)]);
var inst_54435__$1 = (state_54482[(2)]);
var state_54482__$1 = (function (){var statearr_54486 = state_54482;
(statearr_54486[(7)] = inst_54435__$1);

return statearr_54486;
})();
if(cljs.core.truth_(inst_54435__$1)){
var statearr_54487_54516 = state_54482__$1;
(statearr_54487_54516[(1)] = (5));

} else {
var statearr_54488_54517 = state_54482__$1;
(statearr_54488_54517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54483 === (15))){
var inst_54442 = (state_54482[(8)]);
var inst_54457 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_54442);
var inst_54458 = cljs.core.first.call(null,inst_54457);
var inst_54459 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_54458);
var inst_54460 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_54459)].join('');
var inst_54461 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_54460);
var state_54482__$1 = state_54482;
var statearr_54489_54518 = state_54482__$1;
(statearr_54489_54518[(2)] = inst_54461);

(statearr_54489_54518[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54483 === (13))){
var inst_54466 = (state_54482[(2)]);
var state_54482__$1 = state_54482;
var statearr_54490_54519 = state_54482__$1;
(statearr_54490_54519[(2)] = inst_54466);

(statearr_54490_54519[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54483 === (6))){
var state_54482__$1 = state_54482;
var statearr_54491_54520 = state_54482__$1;
(statearr_54491_54520[(2)] = null);

(statearr_54491_54520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54483 === (17))){
var inst_54464 = (state_54482[(2)]);
var state_54482__$1 = state_54482;
var statearr_54492_54521 = state_54482__$1;
(statearr_54492_54521[(2)] = inst_54464);

(statearr_54492_54521[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54483 === (3))){
var inst_54480 = (state_54482[(2)]);
var state_54482__$1 = state_54482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54482__$1,inst_54480);
} else {
if((state_val_54483 === (12))){
var inst_54441 = (state_54482[(9)]);
var inst_54455 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_54441,opts);
var state_54482__$1 = state_54482;
if(cljs.core.truth_(inst_54455)){
var statearr_54493_54522 = state_54482__$1;
(statearr_54493_54522[(1)] = (15));

} else {
var statearr_54494_54523 = state_54482__$1;
(statearr_54494_54523[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54483 === (2))){
var state_54482__$1 = state_54482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54482__$1,(4),ch);
} else {
if((state_val_54483 === (11))){
var inst_54442 = (state_54482[(8)]);
var inst_54447 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54448 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_54442);
var inst_54449 = cljs.core.async.timeout.call(null,(1000));
var inst_54450 = [inst_54448,inst_54449];
var inst_54451 = (new cljs.core.PersistentVector(null,2,(5),inst_54447,inst_54450,null));
var state_54482__$1 = state_54482;
return cljs.core.async.ioc_alts_BANG_.call(null,state_54482__$1,(14),inst_54451);
} else {
if((state_val_54483 === (9))){
var inst_54442 = (state_54482[(8)]);
var inst_54468 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_54469 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_54442);
var inst_54470 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_54469);
var inst_54471 = [cljs.core.str("Not loading: "),cljs.core.str(inst_54470)].join('');
var inst_54472 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_54471);
var state_54482__$1 = (function (){var statearr_54495 = state_54482;
(statearr_54495[(10)] = inst_54468);

return statearr_54495;
})();
var statearr_54496_54524 = state_54482__$1;
(statearr_54496_54524[(2)] = inst_54472);

(statearr_54496_54524[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54483 === (5))){
var inst_54435 = (state_54482[(7)]);
var inst_54437 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_54438 = (new cljs.core.PersistentArrayMap(null,2,inst_54437,null));
var inst_54439 = (new cljs.core.PersistentHashSet(null,inst_54438,null));
var inst_54440 = figwheel.client.focus_msgs.call(null,inst_54439,inst_54435);
var inst_54441 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_54440);
var inst_54442 = cljs.core.first.call(null,inst_54440);
var inst_54443 = figwheel.client.autoload_QMARK_.call(null);
var state_54482__$1 = (function (){var statearr_54497 = state_54482;
(statearr_54497[(8)] = inst_54442);

(statearr_54497[(9)] = inst_54441);

return statearr_54497;
})();
if(cljs.core.truth_(inst_54443)){
var statearr_54498_54525 = state_54482__$1;
(statearr_54498_54525[(1)] = (8));

} else {
var statearr_54499_54526 = state_54482__$1;
(statearr_54499_54526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54483 === (14))){
var inst_54453 = (state_54482[(2)]);
var state_54482__$1 = state_54482;
var statearr_54500_54527 = state_54482__$1;
(statearr_54500_54527[(2)] = inst_54453);

(statearr_54500_54527[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54483 === (16))){
var state_54482__$1 = state_54482;
var statearr_54501_54528 = state_54482__$1;
(statearr_54501_54528[(2)] = null);

(statearr_54501_54528[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54483 === (10))){
var inst_54474 = (state_54482[(2)]);
var state_54482__$1 = (function (){var statearr_54502 = state_54482;
(statearr_54502[(11)] = inst_54474);

return statearr_54502;
})();
var statearr_54503_54529 = state_54482__$1;
(statearr_54503_54529[(2)] = null);

(statearr_54503_54529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54483 === (8))){
var inst_54441 = (state_54482[(9)]);
var inst_54445 = figwheel.client.reload_file_state_QMARK_.call(null,inst_54441,opts);
var state_54482__$1 = state_54482;
if(cljs.core.truth_(inst_54445)){
var statearr_54504_54530 = state_54482__$1;
(statearr_54504_54530[(1)] = (11));

} else {
var statearr_54505_54531 = state_54482__$1;
(statearr_54505_54531[(1)] = (12));

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
});})(c__40731__auto___54513,ch))
;
return ((function (switch__40619__auto__,c__40731__auto___54513,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__40620__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__40620__auto____0 = (function (){
var statearr_54509 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54509[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__40620__auto__);

(statearr_54509[(1)] = (1));

return statearr_54509;
});
var figwheel$client$file_reloader_plugin_$_state_machine__40620__auto____1 = (function (state_54482){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_54482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e54510){if((e54510 instanceof Object)){
var ex__40623__auto__ = e54510;
var statearr_54511_54532 = state_54482;
(statearr_54511_54532[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54533 = state_54482;
state_54482 = G__54533;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__40620__auto__ = function(state_54482){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__40620__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__40620__auto____1.call(this,state_54482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__40620__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__40620__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto___54513,ch))
})();
var state__40733__auto__ = (function (){var statearr_54512 = f__40732__auto__.call(null);
(statearr_54512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto___54513);

return statearr_54512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto___54513,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__54534_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__54534_SHARP_));
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
var base_path_54537 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_54537){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e54536){if((e54536 instanceof Error)){
var e = e54536;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_54537], null));
} else {
var e = e54536;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_54537))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__54538){
var map__54547 = p__54538;
var map__54547__$1 = ((((!((map__54547 == null)))?((((map__54547.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54547.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54547):map__54547);
var opts = map__54547__$1;
var build_id = cljs.core.get.call(null,map__54547__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__54547,map__54547__$1,opts,build_id){
return (function (p__54549){
var vec__54550 = p__54549;
var seq__54551 = cljs.core.seq.call(null,vec__54550);
var first__54552 = cljs.core.first.call(null,seq__54551);
var seq__54551__$1 = cljs.core.next.call(null,seq__54551);
var map__54553 = first__54552;
var map__54553__$1 = ((((!((map__54553 == null)))?((((map__54553.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54553.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54553):map__54553);
var msg = map__54553__$1;
var msg_name = cljs.core.get.call(null,map__54553__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54551__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__54550,seq__54551,first__54552,seq__54551__$1,map__54553,map__54553__$1,msg,msg_name,_,map__54547,map__54547__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__54550,seq__54551,first__54552,seq__54551__$1,map__54553,map__54553__$1,msg,msg_name,_,map__54547,map__54547__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__54547,map__54547__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__54561){
var vec__54562 = p__54561;
var seq__54563 = cljs.core.seq.call(null,vec__54562);
var first__54564 = cljs.core.first.call(null,seq__54563);
var seq__54563__$1 = cljs.core.next.call(null,seq__54563);
var map__54565 = first__54564;
var map__54565__$1 = ((((!((map__54565 == null)))?((((map__54565.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54565.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54565):map__54565);
var msg = map__54565__$1;
var msg_name = cljs.core.get.call(null,map__54565__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54563__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__54567){
var map__54579 = p__54567;
var map__54579__$1 = ((((!((map__54579 == null)))?((((map__54579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54579):map__54579);
var on_compile_warning = cljs.core.get.call(null,map__54579__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__54579__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__54579,map__54579__$1,on_compile_warning,on_compile_fail){
return (function (p__54581){
var vec__54582 = p__54581;
var seq__54583 = cljs.core.seq.call(null,vec__54582);
var first__54584 = cljs.core.first.call(null,seq__54583);
var seq__54583__$1 = cljs.core.next.call(null,seq__54583);
var map__54585 = first__54584;
var map__54585__$1 = ((((!((map__54585 == null)))?((((map__54585.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54585.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54585):map__54585);
var msg = map__54585__$1;
var msg_name = cljs.core.get.call(null,map__54585__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54583__$1;
var pred__54587 = cljs.core._EQ_;
var expr__54588 = msg_name;
if(cljs.core.truth_(pred__54587.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__54588))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__54587.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__54588))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__54579,map__54579__$1,on_compile_warning,on_compile_fail))
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
var c__40731__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto__,msg_hist,msg_names,msg){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto__,msg_hist,msg_names,msg){
return (function (state_54816){
var state_val_54817 = (state_54816[(1)]);
if((state_val_54817 === (7))){
var inst_54736 = (state_54816[(2)]);
var state_54816__$1 = state_54816;
if(cljs.core.truth_(inst_54736)){
var statearr_54818_54868 = state_54816__$1;
(statearr_54818_54868[(1)] = (8));

} else {
var statearr_54819_54869 = state_54816__$1;
(statearr_54819_54869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54817 === (20))){
var inst_54810 = (state_54816[(2)]);
var state_54816__$1 = state_54816;
var statearr_54820_54870 = state_54816__$1;
(statearr_54820_54870[(2)] = inst_54810);

(statearr_54820_54870[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54817 === (27))){
var inst_54806 = (state_54816[(2)]);
var state_54816__$1 = state_54816;
var statearr_54821_54871 = state_54816__$1;
(statearr_54821_54871[(2)] = inst_54806);

(statearr_54821_54871[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54817 === (1))){
var inst_54729 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_54816__$1 = state_54816;
if(cljs.core.truth_(inst_54729)){
var statearr_54822_54872 = state_54816__$1;
(statearr_54822_54872[(1)] = (2));

} else {
var statearr_54823_54873 = state_54816__$1;
(statearr_54823_54873[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54817 === (24))){
var inst_54808 = (state_54816[(2)]);
var state_54816__$1 = state_54816;
var statearr_54824_54874 = state_54816__$1;
(statearr_54824_54874[(2)] = inst_54808);

(statearr_54824_54874[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54817 === (4))){
var inst_54814 = (state_54816[(2)]);
var state_54816__$1 = state_54816;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54816__$1,inst_54814);
} else {
if((state_val_54817 === (15))){
var inst_54812 = (state_54816[(2)]);
var state_54816__$1 = state_54816;
var statearr_54825_54875 = state_54816__$1;
(statearr_54825_54875[(2)] = inst_54812);

(statearr_54825_54875[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54817 === (21))){
var inst_54765 = (state_54816[(2)]);
var inst_54766 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54767 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54766);
var state_54816__$1 = (function (){var statearr_54826 = state_54816;
(statearr_54826[(7)] = inst_54765);

return statearr_54826;
})();
var statearr_54827_54876 = state_54816__$1;
(statearr_54827_54876[(2)] = inst_54767);

(statearr_54827_54876[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54817 === (31))){
var inst_54795 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_54816__$1 = state_54816;
if(cljs.core.truth_(inst_54795)){
var statearr_54828_54877 = state_54816__$1;
(statearr_54828_54877[(1)] = (34));

} else {
var statearr_54829_54878 = state_54816__$1;
(statearr_54829_54878[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54817 === (32))){
var inst_54804 = (state_54816[(2)]);
var state_54816__$1 = state_54816;
var statearr_54830_54879 = state_54816__$1;
(statearr_54830_54879[(2)] = inst_54804);

(statearr_54830_54879[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54817 === (33))){
var inst_54791 = (state_54816[(2)]);
var inst_54792 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54793 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54792);
var state_54816__$1 = (function (){var statearr_54831 = state_54816;
(statearr_54831[(8)] = inst_54791);

return statearr_54831;
})();
var statearr_54832_54880 = state_54816__$1;
(statearr_54832_54880[(2)] = inst_54793);

(statearr_54832_54880[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54817 === (13))){
var inst_54750 = figwheel.client.heads_up.clear.call(null);
var state_54816__$1 = state_54816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54816__$1,(16),inst_54750);
} else {
if((state_val_54817 === (22))){
var inst_54771 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54772 = figwheel.client.heads_up.append_warning_message.call(null,inst_54771);
var state_54816__$1 = state_54816;
var statearr_54833_54881 = state_54816__$1;
(statearr_54833_54881[(2)] = inst_54772);

(statearr_54833_54881[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54817 === (36))){
var inst_54802 = (state_54816[(2)]);
var state_54816__$1 = state_54816;
var statearr_54834_54882 = state_54816__$1;
(statearr_54834_54882[(2)] = inst_54802);

(statearr_54834_54882[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54817 === (29))){
var inst_54782 = (state_54816[(2)]);
var inst_54783 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54784 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54783);
var state_54816__$1 = (function (){var statearr_54835 = state_54816;
(statearr_54835[(9)] = inst_54782);

return statearr_54835;
})();
var statearr_54836_54883 = state_54816__$1;
(statearr_54836_54883[(2)] = inst_54784);

(statearr_54836_54883[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54817 === (6))){
var inst_54731 = (state_54816[(10)]);
var state_54816__$1 = state_54816;
var statearr_54837_54884 = state_54816__$1;
(statearr_54837_54884[(2)] = inst_54731);

(statearr_54837_54884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54817 === (28))){
var inst_54778 = (state_54816[(2)]);
var inst_54779 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54780 = figwheel.client.heads_up.display_warning.call(null,inst_54779);
var state_54816__$1 = (function (){var statearr_54838 = state_54816;
(statearr_54838[(11)] = inst_54778);

return statearr_54838;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54816__$1,(29),inst_54780);
} else {
if((state_val_54817 === (25))){
var inst_54776 = figwheel.client.heads_up.clear.call(null);
var state_54816__$1 = state_54816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54816__$1,(28),inst_54776);
} else {
if((state_val_54817 === (34))){
var inst_54797 = figwheel.client.heads_up.flash_loaded.call(null);
var state_54816__$1 = state_54816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54816__$1,(37),inst_54797);
} else {
if((state_val_54817 === (17))){
var inst_54756 = (state_54816[(2)]);
var inst_54757 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54758 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54757);
var state_54816__$1 = (function (){var statearr_54839 = state_54816;
(statearr_54839[(12)] = inst_54756);

return statearr_54839;
})();
var statearr_54840_54885 = state_54816__$1;
(statearr_54840_54885[(2)] = inst_54758);

(statearr_54840_54885[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54817 === (3))){
var inst_54748 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_54816__$1 = state_54816;
if(cljs.core.truth_(inst_54748)){
var statearr_54841_54886 = state_54816__$1;
(statearr_54841_54886[(1)] = (13));

} else {
var statearr_54842_54887 = state_54816__$1;
(statearr_54842_54887[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54817 === (12))){
var inst_54744 = (state_54816[(2)]);
var state_54816__$1 = state_54816;
var statearr_54843_54888 = state_54816__$1;
(statearr_54843_54888[(2)] = inst_54744);

(statearr_54843_54888[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54817 === (2))){
var inst_54731 = (state_54816[(10)]);
var inst_54731__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_54816__$1 = (function (){var statearr_54844 = state_54816;
(statearr_54844[(10)] = inst_54731__$1);

return statearr_54844;
})();
if(cljs.core.truth_(inst_54731__$1)){
var statearr_54845_54889 = state_54816__$1;
(statearr_54845_54889[(1)] = (5));

} else {
var statearr_54846_54890 = state_54816__$1;
(statearr_54846_54890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54817 === (23))){
var inst_54774 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_54816__$1 = state_54816;
if(cljs.core.truth_(inst_54774)){
var statearr_54847_54891 = state_54816__$1;
(statearr_54847_54891[(1)] = (25));

} else {
var statearr_54848_54892 = state_54816__$1;
(statearr_54848_54892[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54817 === (35))){
var state_54816__$1 = state_54816;
var statearr_54849_54893 = state_54816__$1;
(statearr_54849_54893[(2)] = null);

(statearr_54849_54893[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54817 === (19))){
var inst_54769 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_54816__$1 = state_54816;
if(cljs.core.truth_(inst_54769)){
var statearr_54850_54894 = state_54816__$1;
(statearr_54850_54894[(1)] = (22));

} else {
var statearr_54851_54895 = state_54816__$1;
(statearr_54851_54895[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54817 === (11))){
var inst_54740 = (state_54816[(2)]);
var state_54816__$1 = state_54816;
var statearr_54852_54896 = state_54816__$1;
(statearr_54852_54896[(2)] = inst_54740);

(statearr_54852_54896[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54817 === (9))){
var inst_54742 = figwheel.client.heads_up.clear.call(null);
var state_54816__$1 = state_54816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54816__$1,(12),inst_54742);
} else {
if((state_val_54817 === (5))){
var inst_54733 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_54816__$1 = state_54816;
var statearr_54853_54897 = state_54816__$1;
(statearr_54853_54897[(2)] = inst_54733);

(statearr_54853_54897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54817 === (14))){
var inst_54760 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_54816__$1 = state_54816;
if(cljs.core.truth_(inst_54760)){
var statearr_54854_54898 = state_54816__$1;
(statearr_54854_54898[(1)] = (18));

} else {
var statearr_54855_54899 = state_54816__$1;
(statearr_54855_54899[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54817 === (26))){
var inst_54786 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_54816__$1 = state_54816;
if(cljs.core.truth_(inst_54786)){
var statearr_54856_54900 = state_54816__$1;
(statearr_54856_54900[(1)] = (30));

} else {
var statearr_54857_54901 = state_54816__$1;
(statearr_54857_54901[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54817 === (16))){
var inst_54752 = (state_54816[(2)]);
var inst_54753 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54754 = figwheel.client.heads_up.display_exception.call(null,inst_54753);
var state_54816__$1 = (function (){var statearr_54858 = state_54816;
(statearr_54858[(13)] = inst_54752);

return statearr_54858;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54816__$1,(17),inst_54754);
} else {
if((state_val_54817 === (30))){
var inst_54788 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54789 = figwheel.client.heads_up.display_warning.call(null,inst_54788);
var state_54816__$1 = state_54816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54816__$1,(33),inst_54789);
} else {
if((state_val_54817 === (10))){
var inst_54746 = (state_54816[(2)]);
var state_54816__$1 = state_54816;
var statearr_54859_54902 = state_54816__$1;
(statearr_54859_54902[(2)] = inst_54746);

(statearr_54859_54902[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54817 === (18))){
var inst_54762 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54763 = figwheel.client.heads_up.display_exception.call(null,inst_54762);
var state_54816__$1 = state_54816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54816__$1,(21),inst_54763);
} else {
if((state_val_54817 === (37))){
var inst_54799 = (state_54816[(2)]);
var state_54816__$1 = state_54816;
var statearr_54860_54903 = state_54816__$1;
(statearr_54860_54903[(2)] = inst_54799);

(statearr_54860_54903[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54817 === (8))){
var inst_54738 = figwheel.client.heads_up.flash_loaded.call(null);
var state_54816__$1 = state_54816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54816__$1,(11),inst_54738);
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
});})(c__40731__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__40619__auto__,c__40731__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40620__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40620__auto____0 = (function (){
var statearr_54864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54864[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40620__auto__);

(statearr_54864[(1)] = (1));

return statearr_54864;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40620__auto____1 = (function (state_54816){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_54816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e54865){if((e54865 instanceof Object)){
var ex__40623__auto__ = e54865;
var statearr_54866_54904 = state_54816;
(statearr_54866_54904[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54905 = state_54816;
state_54816 = G__54905;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40620__auto__ = function(state_54816){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40620__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40620__auto____1.call(this,state_54816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40620__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40620__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto__,msg_hist,msg_names,msg))
})();
var state__40733__auto__ = (function (){var statearr_54867 = f__40732__auto__.call(null);
(statearr_54867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto__);

return statearr_54867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto__,msg_hist,msg_names,msg))
);

return c__40731__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__40731__auto___54968 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto___54968,ch){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto___54968,ch){
return (function (state_54951){
var state_val_54952 = (state_54951[(1)]);
if((state_val_54952 === (1))){
var state_54951__$1 = state_54951;
var statearr_54953_54969 = state_54951__$1;
(statearr_54953_54969[(2)] = null);

(statearr_54953_54969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54952 === (2))){
var state_54951__$1 = state_54951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54951__$1,(4),ch);
} else {
if((state_val_54952 === (3))){
var inst_54949 = (state_54951[(2)]);
var state_54951__$1 = state_54951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54951__$1,inst_54949);
} else {
if((state_val_54952 === (4))){
var inst_54939 = (state_54951[(7)]);
var inst_54939__$1 = (state_54951[(2)]);
var state_54951__$1 = (function (){var statearr_54954 = state_54951;
(statearr_54954[(7)] = inst_54939__$1);

return statearr_54954;
})();
if(cljs.core.truth_(inst_54939__$1)){
var statearr_54955_54970 = state_54951__$1;
(statearr_54955_54970[(1)] = (5));

} else {
var statearr_54956_54971 = state_54951__$1;
(statearr_54956_54971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54952 === (5))){
var inst_54939 = (state_54951[(7)]);
var inst_54941 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_54939);
var state_54951__$1 = state_54951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54951__$1,(8),inst_54941);
} else {
if((state_val_54952 === (6))){
var state_54951__$1 = state_54951;
var statearr_54957_54972 = state_54951__$1;
(statearr_54957_54972[(2)] = null);

(statearr_54957_54972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54952 === (7))){
var inst_54947 = (state_54951[(2)]);
var state_54951__$1 = state_54951;
var statearr_54958_54973 = state_54951__$1;
(statearr_54958_54973[(2)] = inst_54947);

(statearr_54958_54973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54952 === (8))){
var inst_54943 = (state_54951[(2)]);
var state_54951__$1 = (function (){var statearr_54959 = state_54951;
(statearr_54959[(8)] = inst_54943);

return statearr_54959;
})();
var statearr_54960_54974 = state_54951__$1;
(statearr_54960_54974[(2)] = null);

(statearr_54960_54974[(1)] = (2));


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
});})(c__40731__auto___54968,ch))
;
return ((function (switch__40619__auto__,c__40731__auto___54968,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__40620__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__40620__auto____0 = (function (){
var statearr_54964 = [null,null,null,null,null,null,null,null,null];
(statearr_54964[(0)] = figwheel$client$heads_up_plugin_$_state_machine__40620__auto__);

(statearr_54964[(1)] = (1));

return statearr_54964;
});
var figwheel$client$heads_up_plugin_$_state_machine__40620__auto____1 = (function (state_54951){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_54951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e54965){if((e54965 instanceof Object)){
var ex__40623__auto__ = e54965;
var statearr_54966_54975 = state_54951;
(statearr_54966_54975[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54976 = state_54951;
state_54951 = G__54976;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__40620__auto__ = function(state_54951){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__40620__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__40620__auto____1.call(this,state_54951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__40620__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__40620__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto___54968,ch))
})();
var state__40733__auto__ = (function (){var statearr_54967 = f__40732__auto__.call(null);
(statearr_54967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto___54968);

return statearr_54967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto___54968,ch))
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
var c__40731__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto__){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto__){
return (function (state_54997){
var state_val_54998 = (state_54997[(1)]);
if((state_val_54998 === (1))){
var inst_54992 = cljs.core.async.timeout.call(null,(3000));
var state_54997__$1 = state_54997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54997__$1,(2),inst_54992);
} else {
if((state_val_54998 === (2))){
var inst_54994 = (state_54997[(2)]);
var inst_54995 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_54997__$1 = (function (){var statearr_54999 = state_54997;
(statearr_54999[(7)] = inst_54994);

return statearr_54999;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54997__$1,inst_54995);
} else {
return null;
}
}
});})(c__40731__auto__))
;
return ((function (switch__40619__auto__,c__40731__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__40620__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__40620__auto____0 = (function (){
var statearr_55003 = [null,null,null,null,null,null,null,null];
(statearr_55003[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__40620__auto__);

(statearr_55003[(1)] = (1));

return statearr_55003;
});
var figwheel$client$enforce_project_plugin_$_state_machine__40620__auto____1 = (function (state_54997){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_54997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e55004){if((e55004 instanceof Object)){
var ex__40623__auto__ = e55004;
var statearr_55005_55007 = state_54997;
(statearr_55005_55007[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55008 = state_54997;
state_54997 = G__55008;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__40620__auto__ = function(state_54997){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__40620__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__40620__auto____1.call(this,state_54997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__40620__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__40620__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto__))
})();
var state__40733__auto__ = (function (){var statearr_55006 = f__40732__auto__.call(null);
(statearr_55006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto__);

return statearr_55006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto__))
);

return c__40731__auto__;
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
var c__40731__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto__,figwheel_version,temp__4657__auto__){
return (function (state_55031){
var state_val_55032 = (state_55031[(1)]);
if((state_val_55032 === (1))){
var inst_55025 = cljs.core.async.timeout.call(null,(2000));
var state_55031__$1 = state_55031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55031__$1,(2),inst_55025);
} else {
if((state_val_55032 === (2))){
var inst_55027 = (state_55031[(2)]);
var inst_55028 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_55029 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_55028);
var state_55031__$1 = (function (){var statearr_55033 = state_55031;
(statearr_55033[(7)] = inst_55027);

return statearr_55033;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55031__$1,inst_55029);
} else {
return null;
}
}
});})(c__40731__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__40619__auto__,c__40731__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40620__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40620__auto____0 = (function (){
var statearr_55037 = [null,null,null,null,null,null,null,null];
(statearr_55037[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40620__auto__);

(statearr_55037[(1)] = (1));

return statearr_55037;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40620__auto____1 = (function (state_55031){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_55031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e55038){if((e55038 instanceof Object)){
var ex__40623__auto__ = e55038;
var statearr_55039_55041 = state_55031;
(statearr_55039_55041[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55042 = state_55031;
state_55031 = G__55042;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40620__auto__ = function(state_55031){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40620__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40620__auto____1.call(this,state_55031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40620__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40620__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto__,figwheel_version,temp__4657__auto__))
})();
var state__40733__auto__ = (function (){var statearr_55040 = f__40732__auto__.call(null);
(statearr_55040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto__);

return statearr_55040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto__,figwheel_version,temp__4657__auto__))
);

return c__40731__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__55043){
var map__55047 = p__55043;
var map__55047__$1 = ((((!((map__55047 == null)))?((((map__55047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55047):map__55047);
var file = cljs.core.get.call(null,map__55047__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__55047__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__55047__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__55049 = "";
var G__55049__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__55049),cljs.core.str("file "),cljs.core.str(file)].join(''):G__55049);
var G__55049__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__55049__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__55049__$1);
if(cljs.core.truth_((function (){var and__36790__auto__ = line;
if(cljs.core.truth_(and__36790__auto__)){
return column;
} else {
return and__36790__auto__;
}
})())){
return [cljs.core.str(G__55049__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__55049__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__55050){
var map__55057 = p__55050;
var map__55057__$1 = ((((!((map__55057 == null)))?((((map__55057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55057):map__55057);
var ed = map__55057__$1;
var formatted_exception = cljs.core.get.call(null,map__55057__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__55057__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__55057__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__55059_55063 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__55060_55064 = null;
var count__55061_55065 = (0);
var i__55062_55066 = (0);
while(true){
if((i__55062_55066 < count__55061_55065)){
var msg_55067 = cljs.core._nth.call(null,chunk__55060_55064,i__55062_55066);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_55067);

var G__55068 = seq__55059_55063;
var G__55069 = chunk__55060_55064;
var G__55070 = count__55061_55065;
var G__55071 = (i__55062_55066 + (1));
seq__55059_55063 = G__55068;
chunk__55060_55064 = G__55069;
count__55061_55065 = G__55070;
i__55062_55066 = G__55071;
continue;
} else {
var temp__4657__auto___55072 = cljs.core.seq.call(null,seq__55059_55063);
if(temp__4657__auto___55072){
var seq__55059_55073__$1 = temp__4657__auto___55072;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55059_55073__$1)){
var c__37613__auto___55074 = cljs.core.chunk_first.call(null,seq__55059_55073__$1);
var G__55075 = cljs.core.chunk_rest.call(null,seq__55059_55073__$1);
var G__55076 = c__37613__auto___55074;
var G__55077 = cljs.core.count.call(null,c__37613__auto___55074);
var G__55078 = (0);
seq__55059_55063 = G__55075;
chunk__55060_55064 = G__55076;
count__55061_55065 = G__55077;
i__55062_55066 = G__55078;
continue;
} else {
var msg_55079 = cljs.core.first.call(null,seq__55059_55073__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_55079);

var G__55080 = cljs.core.next.call(null,seq__55059_55073__$1);
var G__55081 = null;
var G__55082 = (0);
var G__55083 = (0);
seq__55059_55063 = G__55080;
chunk__55060_55064 = G__55081;
count__55061_55065 = G__55082;
i__55062_55066 = G__55083;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__55084){
var map__55087 = p__55084;
var map__55087__$1 = ((((!((map__55087 == null)))?((((map__55087.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55087.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55087):map__55087);
var w = map__55087__$1;
var message = cljs.core.get.call(null,map__55087__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__55099 = cljs.core.seq.call(null,plugins);
var chunk__55100 = null;
var count__55101 = (0);
var i__55102 = (0);
while(true){
if((i__55102 < count__55101)){
var vec__55103 = cljs.core._nth.call(null,chunk__55100,i__55102);
var k = cljs.core.nth.call(null,vec__55103,(0),null);
var plugin = cljs.core.nth.call(null,vec__55103,(1),null);
if(cljs.core.truth_(plugin)){
var pl_55109 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__55099,chunk__55100,count__55101,i__55102,pl_55109,vec__55103,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_55109.call(null,msg_hist);
});})(seq__55099,chunk__55100,count__55101,i__55102,pl_55109,vec__55103,k,plugin))
);
} else {
}

var G__55110 = seq__55099;
var G__55111 = chunk__55100;
var G__55112 = count__55101;
var G__55113 = (i__55102 + (1));
seq__55099 = G__55110;
chunk__55100 = G__55111;
count__55101 = G__55112;
i__55102 = G__55113;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__55099);
if(temp__4657__auto__){
var seq__55099__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55099__$1)){
var c__37613__auto__ = cljs.core.chunk_first.call(null,seq__55099__$1);
var G__55114 = cljs.core.chunk_rest.call(null,seq__55099__$1);
var G__55115 = c__37613__auto__;
var G__55116 = cljs.core.count.call(null,c__37613__auto__);
var G__55117 = (0);
seq__55099 = G__55114;
chunk__55100 = G__55115;
count__55101 = G__55116;
i__55102 = G__55117;
continue;
} else {
var vec__55106 = cljs.core.first.call(null,seq__55099__$1);
var k = cljs.core.nth.call(null,vec__55106,(0),null);
var plugin = cljs.core.nth.call(null,vec__55106,(1),null);
if(cljs.core.truth_(plugin)){
var pl_55118 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__55099,chunk__55100,count__55101,i__55102,pl_55118,vec__55106,k,plugin,seq__55099__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_55118.call(null,msg_hist);
});})(seq__55099,chunk__55100,count__55101,i__55102,pl_55118,vec__55106,k,plugin,seq__55099__$1,temp__4657__auto__))
);
} else {
}

var G__55119 = cljs.core.next.call(null,seq__55099__$1);
var G__55120 = null;
var G__55121 = (0);
var G__55122 = (0);
seq__55099 = G__55119;
chunk__55100 = G__55120;
count__55101 = G__55121;
i__55102 = G__55122;
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
var args55123 = [];
var len__37877__auto___55130 = arguments.length;
var i__37878__auto___55131 = (0);
while(true){
if((i__37878__auto___55131 < len__37877__auto___55130)){
args55123.push((arguments[i__37878__auto___55131]));

var G__55132 = (i__37878__auto___55131 + (1));
i__37878__auto___55131 = G__55132;
continue;
} else {
}
break;
}

var G__55125 = args55123.length;
switch (G__55125) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55123.length)].join('')));

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

var seq__55126_55134 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__55127_55135 = null;
var count__55128_55136 = (0);
var i__55129_55137 = (0);
while(true){
if((i__55129_55137 < count__55128_55136)){
var msg_55138 = cljs.core._nth.call(null,chunk__55127_55135,i__55129_55137);
figwheel.client.socket.handle_incoming_message.call(null,msg_55138);

var G__55139 = seq__55126_55134;
var G__55140 = chunk__55127_55135;
var G__55141 = count__55128_55136;
var G__55142 = (i__55129_55137 + (1));
seq__55126_55134 = G__55139;
chunk__55127_55135 = G__55140;
count__55128_55136 = G__55141;
i__55129_55137 = G__55142;
continue;
} else {
var temp__4657__auto___55143 = cljs.core.seq.call(null,seq__55126_55134);
if(temp__4657__auto___55143){
var seq__55126_55144__$1 = temp__4657__auto___55143;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55126_55144__$1)){
var c__37613__auto___55145 = cljs.core.chunk_first.call(null,seq__55126_55144__$1);
var G__55146 = cljs.core.chunk_rest.call(null,seq__55126_55144__$1);
var G__55147 = c__37613__auto___55145;
var G__55148 = cljs.core.count.call(null,c__37613__auto___55145);
var G__55149 = (0);
seq__55126_55134 = G__55146;
chunk__55127_55135 = G__55147;
count__55128_55136 = G__55148;
i__55129_55137 = G__55149;
continue;
} else {
var msg_55150 = cljs.core.first.call(null,seq__55126_55144__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_55150);

var G__55151 = cljs.core.next.call(null,seq__55126_55144__$1);
var G__55152 = null;
var G__55153 = (0);
var G__55154 = (0);
seq__55126_55134 = G__55151;
chunk__55127_55135 = G__55152;
count__55128_55136 = G__55153;
i__55129_55137 = G__55154;
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
var len__37877__auto___55159 = arguments.length;
var i__37878__auto___55160 = (0);
while(true){
if((i__37878__auto___55160 < len__37877__auto___55159)){
args__37884__auto__.push((arguments[i__37878__auto___55160]));

var G__55161 = (i__37878__auto___55160 + (1));
i__37878__auto___55160 = G__55161;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__55156){
var map__55157 = p__55156;
var map__55157__$1 = ((((!((map__55157 == null)))?((((map__55157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55157):map__55157);
var opts = map__55157__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq55155){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55155));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e55163){if((e55163 instanceof Error)){
var e = e55163;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e55163;

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
return (function (p__55167){
var map__55168 = p__55167;
var map__55168__$1 = ((((!((map__55168 == null)))?((((map__55168.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55168.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55168):map__55168);
var msg_name = cljs.core.get.call(null,map__55168__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map