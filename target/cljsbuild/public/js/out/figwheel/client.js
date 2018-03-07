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
var args54331 = [];
var len__37879__auto___54334 = arguments.length;
var i__37880__auto___54335 = (0);
while(true){
if((i__37880__auto___54335 < len__37879__auto___54334)){
args54331.push((arguments[i__37880__auto___54335]));

var G__54336 = (i__37880__auto___54335 + (1));
i__37880__auto___54335 = G__54336;
continue;
} else {
}
break;
}

var G__54333 = args54331.length;
switch (G__54333) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54331.length)].join('')));

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
var args__37886__auto__ = [];
var len__37879__auto___54339 = arguments.length;
var i__37880__auto___54340 = (0);
while(true){
if((i__37880__auto___54340 < len__37879__auto___54339)){
args__37886__auto__.push((arguments[i__37880__auto___54340]));

var G__54341 = (i__37880__auto___54340 + (1));
i__37880__auto___54340 = G__54341;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq54338){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54338));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__37886__auto__ = [];
var len__37879__auto___54343 = arguments.length;
var i__37880__auto___54344 = (0);
while(true){
if((i__37880__auto___54344 < len__37879__auto___54343)){
args__37886__auto__.push((arguments[i__37880__auto___54344]));

var G__54345 = (i__37880__auto___54344 + (1));
i__37880__auto___54344 = G__54345;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq54342){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54342));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__54346 = cljs.core._EQ_;
var expr__54347 = (function (){var or__36804__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e54350){if((e54350 instanceof Error)){
var e = e54350;
return false;
} else {
throw e54350;

}
}})();
if(cljs.core.truth_(or__36804__auto__)){
return or__36804__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__54346.call(null,"true",expr__54347))){
return true;
} else {
if(cljs.core.truth_(pred__54346.call(null,"false",expr__54347))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__54347)].join('')));
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
}catch (e54352){if((e54352 instanceof Error)){
var e = e54352;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e54352;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__54353){
var map__54356 = p__54353;
var map__54356__$1 = ((((!((map__54356 == null)))?((((map__54356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54356):map__54356);
var message = cljs.core.get.call(null,map__54356__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__54356__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__36804__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__36804__auto__)){
return or__36804__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__36792__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__36792__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__36792__auto__;
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
var c__40731__auto___54518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto___54518,ch){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto___54518,ch){
return (function (state_54487){
var state_val_54488 = (state_54487[(1)]);
if((state_val_54488 === (7))){
var inst_54483 = (state_54487[(2)]);
var state_54487__$1 = state_54487;
var statearr_54489_54519 = state_54487__$1;
(statearr_54489_54519[(2)] = inst_54483);

(statearr_54489_54519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54488 === (1))){
var state_54487__$1 = state_54487;
var statearr_54490_54520 = state_54487__$1;
(statearr_54490_54520[(2)] = null);

(statearr_54490_54520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54488 === (4))){
var inst_54440 = (state_54487[(7)]);
var inst_54440__$1 = (state_54487[(2)]);
var state_54487__$1 = (function (){var statearr_54491 = state_54487;
(statearr_54491[(7)] = inst_54440__$1);

return statearr_54491;
})();
if(cljs.core.truth_(inst_54440__$1)){
var statearr_54492_54521 = state_54487__$1;
(statearr_54492_54521[(1)] = (5));

} else {
var statearr_54493_54522 = state_54487__$1;
(statearr_54493_54522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54488 === (15))){
var inst_54447 = (state_54487[(8)]);
var inst_54462 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_54447);
var inst_54463 = cljs.core.first.call(null,inst_54462);
var inst_54464 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_54463);
var inst_54465 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_54464)].join('');
var inst_54466 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_54465);
var state_54487__$1 = state_54487;
var statearr_54494_54523 = state_54487__$1;
(statearr_54494_54523[(2)] = inst_54466);

(statearr_54494_54523[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54488 === (13))){
var inst_54471 = (state_54487[(2)]);
var state_54487__$1 = state_54487;
var statearr_54495_54524 = state_54487__$1;
(statearr_54495_54524[(2)] = inst_54471);

(statearr_54495_54524[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54488 === (6))){
var state_54487__$1 = state_54487;
var statearr_54496_54525 = state_54487__$1;
(statearr_54496_54525[(2)] = null);

(statearr_54496_54525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54488 === (17))){
var inst_54469 = (state_54487[(2)]);
var state_54487__$1 = state_54487;
var statearr_54497_54526 = state_54487__$1;
(statearr_54497_54526[(2)] = inst_54469);

(statearr_54497_54526[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54488 === (3))){
var inst_54485 = (state_54487[(2)]);
var state_54487__$1 = state_54487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54487__$1,inst_54485);
} else {
if((state_val_54488 === (12))){
var inst_54446 = (state_54487[(9)]);
var inst_54460 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_54446,opts);
var state_54487__$1 = state_54487;
if(cljs.core.truth_(inst_54460)){
var statearr_54498_54527 = state_54487__$1;
(statearr_54498_54527[(1)] = (15));

} else {
var statearr_54499_54528 = state_54487__$1;
(statearr_54499_54528[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54488 === (2))){
var state_54487__$1 = state_54487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54487__$1,(4),ch);
} else {
if((state_val_54488 === (11))){
var inst_54447 = (state_54487[(8)]);
var inst_54452 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54453 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_54447);
var inst_54454 = cljs.core.async.timeout.call(null,(1000));
var inst_54455 = [inst_54453,inst_54454];
var inst_54456 = (new cljs.core.PersistentVector(null,2,(5),inst_54452,inst_54455,null));
var state_54487__$1 = state_54487;
return cljs.core.async.ioc_alts_BANG_.call(null,state_54487__$1,(14),inst_54456);
} else {
if((state_val_54488 === (9))){
var inst_54447 = (state_54487[(8)]);
var inst_54473 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_54474 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_54447);
var inst_54475 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_54474);
var inst_54476 = [cljs.core.str("Not loading: "),cljs.core.str(inst_54475)].join('');
var inst_54477 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_54476);
var state_54487__$1 = (function (){var statearr_54500 = state_54487;
(statearr_54500[(10)] = inst_54473);

return statearr_54500;
})();
var statearr_54501_54529 = state_54487__$1;
(statearr_54501_54529[(2)] = inst_54477);

(statearr_54501_54529[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54488 === (5))){
var inst_54440 = (state_54487[(7)]);
var inst_54442 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_54443 = (new cljs.core.PersistentArrayMap(null,2,inst_54442,null));
var inst_54444 = (new cljs.core.PersistentHashSet(null,inst_54443,null));
var inst_54445 = figwheel.client.focus_msgs.call(null,inst_54444,inst_54440);
var inst_54446 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_54445);
var inst_54447 = cljs.core.first.call(null,inst_54445);
var inst_54448 = figwheel.client.autoload_QMARK_.call(null);
var state_54487__$1 = (function (){var statearr_54502 = state_54487;
(statearr_54502[(8)] = inst_54447);

(statearr_54502[(9)] = inst_54446);

return statearr_54502;
})();
if(cljs.core.truth_(inst_54448)){
var statearr_54503_54530 = state_54487__$1;
(statearr_54503_54530[(1)] = (8));

} else {
var statearr_54504_54531 = state_54487__$1;
(statearr_54504_54531[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54488 === (14))){
var inst_54458 = (state_54487[(2)]);
var state_54487__$1 = state_54487;
var statearr_54505_54532 = state_54487__$1;
(statearr_54505_54532[(2)] = inst_54458);

(statearr_54505_54532[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54488 === (16))){
var state_54487__$1 = state_54487;
var statearr_54506_54533 = state_54487__$1;
(statearr_54506_54533[(2)] = null);

(statearr_54506_54533[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54488 === (10))){
var inst_54479 = (state_54487[(2)]);
var state_54487__$1 = (function (){var statearr_54507 = state_54487;
(statearr_54507[(11)] = inst_54479);

return statearr_54507;
})();
var statearr_54508_54534 = state_54487__$1;
(statearr_54508_54534[(2)] = null);

(statearr_54508_54534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54488 === (8))){
var inst_54446 = (state_54487[(9)]);
var inst_54450 = figwheel.client.reload_file_state_QMARK_.call(null,inst_54446,opts);
var state_54487__$1 = state_54487;
if(cljs.core.truth_(inst_54450)){
var statearr_54509_54535 = state_54487__$1;
(statearr_54509_54535[(1)] = (11));

} else {
var statearr_54510_54536 = state_54487__$1;
(statearr_54510_54536[(1)] = (12));

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
});})(c__40731__auto___54518,ch))
;
return ((function (switch__40619__auto__,c__40731__auto___54518,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__40620__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__40620__auto____0 = (function (){
var statearr_54514 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54514[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__40620__auto__);

(statearr_54514[(1)] = (1));

return statearr_54514;
});
var figwheel$client$file_reloader_plugin_$_state_machine__40620__auto____1 = (function (state_54487){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_54487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e54515){if((e54515 instanceof Object)){
var ex__40623__auto__ = e54515;
var statearr_54516_54537 = state_54487;
(statearr_54516_54537[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54538 = state_54487;
state_54487 = G__54538;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__40620__auto__ = function(state_54487){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__40620__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__40620__auto____1.call(this,state_54487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__40620__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__40620__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto___54518,ch))
})();
var state__40733__auto__ = (function (){var statearr_54517 = f__40732__auto__.call(null);
(statearr_54517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto___54518);

return statearr_54517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto___54518,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__54539_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__54539_SHARP_));
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
var base_path_54542 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_54542){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e54541){if((e54541 instanceof Error)){
var e = e54541;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_54542], null));
} else {
var e = e54541;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_54542))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__54543){
var map__54552 = p__54543;
var map__54552__$1 = ((((!((map__54552 == null)))?((((map__54552.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54552.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54552):map__54552);
var opts = map__54552__$1;
var build_id = cljs.core.get.call(null,map__54552__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__54552,map__54552__$1,opts,build_id){
return (function (p__54554){
var vec__54555 = p__54554;
var seq__54556 = cljs.core.seq.call(null,vec__54555);
var first__54557 = cljs.core.first.call(null,seq__54556);
var seq__54556__$1 = cljs.core.next.call(null,seq__54556);
var map__54558 = first__54557;
var map__54558__$1 = ((((!((map__54558 == null)))?((((map__54558.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54558.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54558):map__54558);
var msg = map__54558__$1;
var msg_name = cljs.core.get.call(null,map__54558__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54556__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__54555,seq__54556,first__54557,seq__54556__$1,map__54558,map__54558__$1,msg,msg_name,_,map__54552,map__54552__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__54555,seq__54556,first__54557,seq__54556__$1,map__54558,map__54558__$1,msg,msg_name,_,map__54552,map__54552__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__54552,map__54552__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__54566){
var vec__54567 = p__54566;
var seq__54568 = cljs.core.seq.call(null,vec__54567);
var first__54569 = cljs.core.first.call(null,seq__54568);
var seq__54568__$1 = cljs.core.next.call(null,seq__54568);
var map__54570 = first__54569;
var map__54570__$1 = ((((!((map__54570 == null)))?((((map__54570.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54570.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54570):map__54570);
var msg = map__54570__$1;
var msg_name = cljs.core.get.call(null,map__54570__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54568__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__54572){
var map__54584 = p__54572;
var map__54584__$1 = ((((!((map__54584 == null)))?((((map__54584.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54584.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54584):map__54584);
var on_compile_warning = cljs.core.get.call(null,map__54584__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__54584__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__54584,map__54584__$1,on_compile_warning,on_compile_fail){
return (function (p__54586){
var vec__54587 = p__54586;
var seq__54588 = cljs.core.seq.call(null,vec__54587);
var first__54589 = cljs.core.first.call(null,seq__54588);
var seq__54588__$1 = cljs.core.next.call(null,seq__54588);
var map__54590 = first__54589;
var map__54590__$1 = ((((!((map__54590 == null)))?((((map__54590.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54590.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54590):map__54590);
var msg = map__54590__$1;
var msg_name = cljs.core.get.call(null,map__54590__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54588__$1;
var pred__54592 = cljs.core._EQ_;
var expr__54593 = msg_name;
if(cljs.core.truth_(pred__54592.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__54593))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__54592.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__54593))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__54584,map__54584__$1,on_compile_warning,on_compile_fail))
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
return (function (state_54821){
var state_val_54822 = (state_54821[(1)]);
if((state_val_54822 === (7))){
var inst_54741 = (state_54821[(2)]);
var state_54821__$1 = state_54821;
if(cljs.core.truth_(inst_54741)){
var statearr_54823_54873 = state_54821__$1;
(statearr_54823_54873[(1)] = (8));

} else {
var statearr_54824_54874 = state_54821__$1;
(statearr_54824_54874[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54822 === (20))){
var inst_54815 = (state_54821[(2)]);
var state_54821__$1 = state_54821;
var statearr_54825_54875 = state_54821__$1;
(statearr_54825_54875[(2)] = inst_54815);

(statearr_54825_54875[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54822 === (27))){
var inst_54811 = (state_54821[(2)]);
var state_54821__$1 = state_54821;
var statearr_54826_54876 = state_54821__$1;
(statearr_54826_54876[(2)] = inst_54811);

(statearr_54826_54876[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54822 === (1))){
var inst_54734 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_54821__$1 = state_54821;
if(cljs.core.truth_(inst_54734)){
var statearr_54827_54877 = state_54821__$1;
(statearr_54827_54877[(1)] = (2));

} else {
var statearr_54828_54878 = state_54821__$1;
(statearr_54828_54878[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54822 === (24))){
var inst_54813 = (state_54821[(2)]);
var state_54821__$1 = state_54821;
var statearr_54829_54879 = state_54821__$1;
(statearr_54829_54879[(2)] = inst_54813);

(statearr_54829_54879[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54822 === (4))){
var inst_54819 = (state_54821[(2)]);
var state_54821__$1 = state_54821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54821__$1,inst_54819);
} else {
if((state_val_54822 === (15))){
var inst_54817 = (state_54821[(2)]);
var state_54821__$1 = state_54821;
var statearr_54830_54880 = state_54821__$1;
(statearr_54830_54880[(2)] = inst_54817);

(statearr_54830_54880[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54822 === (21))){
var inst_54770 = (state_54821[(2)]);
var inst_54771 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54772 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54771);
var state_54821__$1 = (function (){var statearr_54831 = state_54821;
(statearr_54831[(7)] = inst_54770);

return statearr_54831;
})();
var statearr_54832_54881 = state_54821__$1;
(statearr_54832_54881[(2)] = inst_54772);

(statearr_54832_54881[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54822 === (31))){
var inst_54800 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_54821__$1 = state_54821;
if(cljs.core.truth_(inst_54800)){
var statearr_54833_54882 = state_54821__$1;
(statearr_54833_54882[(1)] = (34));

} else {
var statearr_54834_54883 = state_54821__$1;
(statearr_54834_54883[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54822 === (32))){
var inst_54809 = (state_54821[(2)]);
var state_54821__$1 = state_54821;
var statearr_54835_54884 = state_54821__$1;
(statearr_54835_54884[(2)] = inst_54809);

(statearr_54835_54884[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54822 === (33))){
var inst_54796 = (state_54821[(2)]);
var inst_54797 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54798 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54797);
var state_54821__$1 = (function (){var statearr_54836 = state_54821;
(statearr_54836[(8)] = inst_54796);

return statearr_54836;
})();
var statearr_54837_54885 = state_54821__$1;
(statearr_54837_54885[(2)] = inst_54798);

(statearr_54837_54885[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54822 === (13))){
var inst_54755 = figwheel.client.heads_up.clear.call(null);
var state_54821__$1 = state_54821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54821__$1,(16),inst_54755);
} else {
if((state_val_54822 === (22))){
var inst_54776 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54777 = figwheel.client.heads_up.append_warning_message.call(null,inst_54776);
var state_54821__$1 = state_54821;
var statearr_54838_54886 = state_54821__$1;
(statearr_54838_54886[(2)] = inst_54777);

(statearr_54838_54886[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54822 === (36))){
var inst_54807 = (state_54821[(2)]);
var state_54821__$1 = state_54821;
var statearr_54839_54887 = state_54821__$1;
(statearr_54839_54887[(2)] = inst_54807);

(statearr_54839_54887[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54822 === (29))){
var inst_54787 = (state_54821[(2)]);
var inst_54788 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54789 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54788);
var state_54821__$1 = (function (){var statearr_54840 = state_54821;
(statearr_54840[(9)] = inst_54787);

return statearr_54840;
})();
var statearr_54841_54888 = state_54821__$1;
(statearr_54841_54888[(2)] = inst_54789);

(statearr_54841_54888[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54822 === (6))){
var inst_54736 = (state_54821[(10)]);
var state_54821__$1 = state_54821;
var statearr_54842_54889 = state_54821__$1;
(statearr_54842_54889[(2)] = inst_54736);

(statearr_54842_54889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54822 === (28))){
var inst_54783 = (state_54821[(2)]);
var inst_54784 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54785 = figwheel.client.heads_up.display_warning.call(null,inst_54784);
var state_54821__$1 = (function (){var statearr_54843 = state_54821;
(statearr_54843[(11)] = inst_54783);

return statearr_54843;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54821__$1,(29),inst_54785);
} else {
if((state_val_54822 === (25))){
var inst_54781 = figwheel.client.heads_up.clear.call(null);
var state_54821__$1 = state_54821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54821__$1,(28),inst_54781);
} else {
if((state_val_54822 === (34))){
var inst_54802 = figwheel.client.heads_up.flash_loaded.call(null);
var state_54821__$1 = state_54821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54821__$1,(37),inst_54802);
} else {
if((state_val_54822 === (17))){
var inst_54761 = (state_54821[(2)]);
var inst_54762 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54763 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54762);
var state_54821__$1 = (function (){var statearr_54844 = state_54821;
(statearr_54844[(12)] = inst_54761);

return statearr_54844;
})();
var statearr_54845_54890 = state_54821__$1;
(statearr_54845_54890[(2)] = inst_54763);

(statearr_54845_54890[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54822 === (3))){
var inst_54753 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_54821__$1 = state_54821;
if(cljs.core.truth_(inst_54753)){
var statearr_54846_54891 = state_54821__$1;
(statearr_54846_54891[(1)] = (13));

} else {
var statearr_54847_54892 = state_54821__$1;
(statearr_54847_54892[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54822 === (12))){
var inst_54749 = (state_54821[(2)]);
var state_54821__$1 = state_54821;
var statearr_54848_54893 = state_54821__$1;
(statearr_54848_54893[(2)] = inst_54749);

(statearr_54848_54893[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54822 === (2))){
var inst_54736 = (state_54821[(10)]);
var inst_54736__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_54821__$1 = (function (){var statearr_54849 = state_54821;
(statearr_54849[(10)] = inst_54736__$1);

return statearr_54849;
})();
if(cljs.core.truth_(inst_54736__$1)){
var statearr_54850_54894 = state_54821__$1;
(statearr_54850_54894[(1)] = (5));

} else {
var statearr_54851_54895 = state_54821__$1;
(statearr_54851_54895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54822 === (23))){
var inst_54779 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_54821__$1 = state_54821;
if(cljs.core.truth_(inst_54779)){
var statearr_54852_54896 = state_54821__$1;
(statearr_54852_54896[(1)] = (25));

} else {
var statearr_54853_54897 = state_54821__$1;
(statearr_54853_54897[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54822 === (35))){
var state_54821__$1 = state_54821;
var statearr_54854_54898 = state_54821__$1;
(statearr_54854_54898[(2)] = null);

(statearr_54854_54898[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54822 === (19))){
var inst_54774 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_54821__$1 = state_54821;
if(cljs.core.truth_(inst_54774)){
var statearr_54855_54899 = state_54821__$1;
(statearr_54855_54899[(1)] = (22));

} else {
var statearr_54856_54900 = state_54821__$1;
(statearr_54856_54900[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54822 === (11))){
var inst_54745 = (state_54821[(2)]);
var state_54821__$1 = state_54821;
var statearr_54857_54901 = state_54821__$1;
(statearr_54857_54901[(2)] = inst_54745);

(statearr_54857_54901[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54822 === (9))){
var inst_54747 = figwheel.client.heads_up.clear.call(null);
var state_54821__$1 = state_54821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54821__$1,(12),inst_54747);
} else {
if((state_val_54822 === (5))){
var inst_54738 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_54821__$1 = state_54821;
var statearr_54858_54902 = state_54821__$1;
(statearr_54858_54902[(2)] = inst_54738);

(statearr_54858_54902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54822 === (14))){
var inst_54765 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_54821__$1 = state_54821;
if(cljs.core.truth_(inst_54765)){
var statearr_54859_54903 = state_54821__$1;
(statearr_54859_54903[(1)] = (18));

} else {
var statearr_54860_54904 = state_54821__$1;
(statearr_54860_54904[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54822 === (26))){
var inst_54791 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_54821__$1 = state_54821;
if(cljs.core.truth_(inst_54791)){
var statearr_54861_54905 = state_54821__$1;
(statearr_54861_54905[(1)] = (30));

} else {
var statearr_54862_54906 = state_54821__$1;
(statearr_54862_54906[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54822 === (16))){
var inst_54757 = (state_54821[(2)]);
var inst_54758 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54759 = figwheel.client.heads_up.display_exception.call(null,inst_54758);
var state_54821__$1 = (function (){var statearr_54863 = state_54821;
(statearr_54863[(13)] = inst_54757);

return statearr_54863;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54821__$1,(17),inst_54759);
} else {
if((state_val_54822 === (30))){
var inst_54793 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54794 = figwheel.client.heads_up.display_warning.call(null,inst_54793);
var state_54821__$1 = state_54821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54821__$1,(33),inst_54794);
} else {
if((state_val_54822 === (10))){
var inst_54751 = (state_54821[(2)]);
var state_54821__$1 = state_54821;
var statearr_54864_54907 = state_54821__$1;
(statearr_54864_54907[(2)] = inst_54751);

(statearr_54864_54907[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54822 === (18))){
var inst_54767 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54768 = figwheel.client.heads_up.display_exception.call(null,inst_54767);
var state_54821__$1 = state_54821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54821__$1,(21),inst_54768);
} else {
if((state_val_54822 === (37))){
var inst_54804 = (state_54821[(2)]);
var state_54821__$1 = state_54821;
var statearr_54865_54908 = state_54821__$1;
(statearr_54865_54908[(2)] = inst_54804);

(statearr_54865_54908[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54822 === (8))){
var inst_54743 = figwheel.client.heads_up.flash_loaded.call(null);
var state_54821__$1 = state_54821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54821__$1,(11),inst_54743);
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
var statearr_54869 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54869[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40620__auto__);

(statearr_54869[(1)] = (1));

return statearr_54869;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40620__auto____1 = (function (state_54821){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_54821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e54870){if((e54870 instanceof Object)){
var ex__40623__auto__ = e54870;
var statearr_54871_54909 = state_54821;
(statearr_54871_54909[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54910 = state_54821;
state_54821 = G__54910;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40620__auto__ = function(state_54821){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40620__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40620__auto____1.call(this,state_54821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40620__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40620__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto__,msg_hist,msg_names,msg))
})();
var state__40733__auto__ = (function (){var statearr_54872 = f__40732__auto__.call(null);
(statearr_54872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto__);

return statearr_54872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto__,msg_hist,msg_names,msg))
);

return c__40731__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__40731__auto___54973 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40731__auto___54973,ch){
return (function (){
var f__40732__auto__ = (function (){var switch__40619__auto__ = ((function (c__40731__auto___54973,ch){
return (function (state_54956){
var state_val_54957 = (state_54956[(1)]);
if((state_val_54957 === (1))){
var state_54956__$1 = state_54956;
var statearr_54958_54974 = state_54956__$1;
(statearr_54958_54974[(2)] = null);

(statearr_54958_54974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54957 === (2))){
var state_54956__$1 = state_54956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54956__$1,(4),ch);
} else {
if((state_val_54957 === (3))){
var inst_54954 = (state_54956[(2)]);
var state_54956__$1 = state_54956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54956__$1,inst_54954);
} else {
if((state_val_54957 === (4))){
var inst_54944 = (state_54956[(7)]);
var inst_54944__$1 = (state_54956[(2)]);
var state_54956__$1 = (function (){var statearr_54959 = state_54956;
(statearr_54959[(7)] = inst_54944__$1);

return statearr_54959;
})();
if(cljs.core.truth_(inst_54944__$1)){
var statearr_54960_54975 = state_54956__$1;
(statearr_54960_54975[(1)] = (5));

} else {
var statearr_54961_54976 = state_54956__$1;
(statearr_54961_54976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54957 === (5))){
var inst_54944 = (state_54956[(7)]);
var inst_54946 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_54944);
var state_54956__$1 = state_54956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54956__$1,(8),inst_54946);
} else {
if((state_val_54957 === (6))){
var state_54956__$1 = state_54956;
var statearr_54962_54977 = state_54956__$1;
(statearr_54962_54977[(2)] = null);

(statearr_54962_54977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54957 === (7))){
var inst_54952 = (state_54956[(2)]);
var state_54956__$1 = state_54956;
var statearr_54963_54978 = state_54956__$1;
(statearr_54963_54978[(2)] = inst_54952);

(statearr_54963_54978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54957 === (8))){
var inst_54948 = (state_54956[(2)]);
var state_54956__$1 = (function (){var statearr_54964 = state_54956;
(statearr_54964[(8)] = inst_54948);

return statearr_54964;
})();
var statearr_54965_54979 = state_54956__$1;
(statearr_54965_54979[(2)] = null);

(statearr_54965_54979[(1)] = (2));


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
});})(c__40731__auto___54973,ch))
;
return ((function (switch__40619__auto__,c__40731__auto___54973,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__40620__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__40620__auto____0 = (function (){
var statearr_54969 = [null,null,null,null,null,null,null,null,null];
(statearr_54969[(0)] = figwheel$client$heads_up_plugin_$_state_machine__40620__auto__);

(statearr_54969[(1)] = (1));

return statearr_54969;
});
var figwheel$client$heads_up_plugin_$_state_machine__40620__auto____1 = (function (state_54956){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_54956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e54970){if((e54970 instanceof Object)){
var ex__40623__auto__ = e54970;
var statearr_54971_54980 = state_54956;
(statearr_54971_54980[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54981 = state_54956;
state_54956 = G__54981;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__40620__auto__ = function(state_54956){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__40620__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__40620__auto____1.call(this,state_54956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__40620__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__40620__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto___54973,ch))
})();
var state__40733__auto__ = (function (){var statearr_54972 = f__40732__auto__.call(null);
(statearr_54972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto___54973);

return statearr_54972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40733__auto__);
});})(c__40731__auto___54973,ch))
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
return (function (state_55002){
var state_val_55003 = (state_55002[(1)]);
if((state_val_55003 === (1))){
var inst_54997 = cljs.core.async.timeout.call(null,(3000));
var state_55002__$1 = state_55002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55002__$1,(2),inst_54997);
} else {
if((state_val_55003 === (2))){
var inst_54999 = (state_55002[(2)]);
var inst_55000 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_55002__$1 = (function (){var statearr_55004 = state_55002;
(statearr_55004[(7)] = inst_54999);

return statearr_55004;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55002__$1,inst_55000);
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
var statearr_55008 = [null,null,null,null,null,null,null,null];
(statearr_55008[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__40620__auto__);

(statearr_55008[(1)] = (1));

return statearr_55008;
});
var figwheel$client$enforce_project_plugin_$_state_machine__40620__auto____1 = (function (state_55002){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_55002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e55009){if((e55009 instanceof Object)){
var ex__40623__auto__ = e55009;
var statearr_55010_55012 = state_55002;
(statearr_55010_55012[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55013 = state_55002;
state_55002 = G__55013;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__40620__auto__ = function(state_55002){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__40620__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__40620__auto____1.call(this,state_55002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__40620__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__40620__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto__))
})();
var state__40733__auto__ = (function (){var statearr_55011 = f__40732__auto__.call(null);
(statearr_55011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto__);

return statearr_55011;
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
return (function (state_55036){
var state_val_55037 = (state_55036[(1)]);
if((state_val_55037 === (1))){
var inst_55030 = cljs.core.async.timeout.call(null,(2000));
var state_55036__$1 = state_55036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55036__$1,(2),inst_55030);
} else {
if((state_val_55037 === (2))){
var inst_55032 = (state_55036[(2)]);
var inst_55033 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_55034 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_55033);
var state_55036__$1 = (function (){var statearr_55038 = state_55036;
(statearr_55038[(7)] = inst_55032);

return statearr_55038;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55036__$1,inst_55034);
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
var statearr_55042 = [null,null,null,null,null,null,null,null];
(statearr_55042[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40620__auto__);

(statearr_55042[(1)] = (1));

return statearr_55042;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40620__auto____1 = (function (state_55036){
while(true){
var ret_value__40621__auto__ = (function (){try{while(true){
var result__40622__auto__ = switch__40619__auto__.call(null,state_55036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40622__auto__;
}
break;
}
}catch (e55043){if((e55043 instanceof Object)){
var ex__40623__auto__ = e55043;
var statearr_55044_55046 = state_55036;
(statearr_55044_55046[(5)] = ex__40623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55047 = state_55036;
state_55036 = G__55047;
continue;
} else {
return ret_value__40621__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40620__auto__ = function(state_55036){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40620__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40620__auto____1.call(this,state_55036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40620__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40620__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40620__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40620__auto__;
})()
;})(switch__40619__auto__,c__40731__auto__,figwheel_version,temp__4657__auto__))
})();
var state__40733__auto__ = (function (){var statearr_55045 = f__40732__auto__.call(null);
(statearr_55045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40731__auto__);

return statearr_55045;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__55048){
var map__55052 = p__55048;
var map__55052__$1 = ((((!((map__55052 == null)))?((((map__55052.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55052.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55052):map__55052);
var file = cljs.core.get.call(null,map__55052__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__55052__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__55052__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__55054 = "";
var G__55054__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__55054),cljs.core.str("file "),cljs.core.str(file)].join(''):G__55054);
var G__55054__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__55054__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__55054__$1);
if(cljs.core.truth_((function (){var and__36792__auto__ = line;
if(cljs.core.truth_(and__36792__auto__)){
return column;
} else {
return and__36792__auto__;
}
})())){
return [cljs.core.str(G__55054__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__55054__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__55055){
var map__55062 = p__55055;
var map__55062__$1 = ((((!((map__55062 == null)))?((((map__55062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55062):map__55062);
var ed = map__55062__$1;
var formatted_exception = cljs.core.get.call(null,map__55062__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__55062__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__55062__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__55064_55068 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__55065_55069 = null;
var count__55066_55070 = (0);
var i__55067_55071 = (0);
while(true){
if((i__55067_55071 < count__55066_55070)){
var msg_55072 = cljs.core._nth.call(null,chunk__55065_55069,i__55067_55071);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_55072);

var G__55073 = seq__55064_55068;
var G__55074 = chunk__55065_55069;
var G__55075 = count__55066_55070;
var G__55076 = (i__55067_55071 + (1));
seq__55064_55068 = G__55073;
chunk__55065_55069 = G__55074;
count__55066_55070 = G__55075;
i__55067_55071 = G__55076;
continue;
} else {
var temp__4657__auto___55077 = cljs.core.seq.call(null,seq__55064_55068);
if(temp__4657__auto___55077){
var seq__55064_55078__$1 = temp__4657__auto___55077;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55064_55078__$1)){
var c__37615__auto___55079 = cljs.core.chunk_first.call(null,seq__55064_55078__$1);
var G__55080 = cljs.core.chunk_rest.call(null,seq__55064_55078__$1);
var G__55081 = c__37615__auto___55079;
var G__55082 = cljs.core.count.call(null,c__37615__auto___55079);
var G__55083 = (0);
seq__55064_55068 = G__55080;
chunk__55065_55069 = G__55081;
count__55066_55070 = G__55082;
i__55067_55071 = G__55083;
continue;
} else {
var msg_55084 = cljs.core.first.call(null,seq__55064_55078__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_55084);

var G__55085 = cljs.core.next.call(null,seq__55064_55078__$1);
var G__55086 = null;
var G__55087 = (0);
var G__55088 = (0);
seq__55064_55068 = G__55085;
chunk__55065_55069 = G__55086;
count__55066_55070 = G__55087;
i__55067_55071 = G__55088;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__55089){
var map__55092 = p__55089;
var map__55092__$1 = ((((!((map__55092 == null)))?((((map__55092.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55092.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55092):map__55092);
var w = map__55092__$1;
var message = cljs.core.get.call(null,map__55092__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__36792__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__36792__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__36792__auto__;
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
var seq__55104 = cljs.core.seq.call(null,plugins);
var chunk__55105 = null;
var count__55106 = (0);
var i__55107 = (0);
while(true){
if((i__55107 < count__55106)){
var vec__55108 = cljs.core._nth.call(null,chunk__55105,i__55107);
var k = cljs.core.nth.call(null,vec__55108,(0),null);
var plugin = cljs.core.nth.call(null,vec__55108,(1),null);
if(cljs.core.truth_(plugin)){
var pl_55114 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__55104,chunk__55105,count__55106,i__55107,pl_55114,vec__55108,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_55114.call(null,msg_hist);
});})(seq__55104,chunk__55105,count__55106,i__55107,pl_55114,vec__55108,k,plugin))
);
} else {
}

var G__55115 = seq__55104;
var G__55116 = chunk__55105;
var G__55117 = count__55106;
var G__55118 = (i__55107 + (1));
seq__55104 = G__55115;
chunk__55105 = G__55116;
count__55106 = G__55117;
i__55107 = G__55118;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__55104);
if(temp__4657__auto__){
var seq__55104__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55104__$1)){
var c__37615__auto__ = cljs.core.chunk_first.call(null,seq__55104__$1);
var G__55119 = cljs.core.chunk_rest.call(null,seq__55104__$1);
var G__55120 = c__37615__auto__;
var G__55121 = cljs.core.count.call(null,c__37615__auto__);
var G__55122 = (0);
seq__55104 = G__55119;
chunk__55105 = G__55120;
count__55106 = G__55121;
i__55107 = G__55122;
continue;
} else {
var vec__55111 = cljs.core.first.call(null,seq__55104__$1);
var k = cljs.core.nth.call(null,vec__55111,(0),null);
var plugin = cljs.core.nth.call(null,vec__55111,(1),null);
if(cljs.core.truth_(plugin)){
var pl_55123 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__55104,chunk__55105,count__55106,i__55107,pl_55123,vec__55111,k,plugin,seq__55104__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_55123.call(null,msg_hist);
});})(seq__55104,chunk__55105,count__55106,i__55107,pl_55123,vec__55111,k,plugin,seq__55104__$1,temp__4657__auto__))
);
} else {
}

var G__55124 = cljs.core.next.call(null,seq__55104__$1);
var G__55125 = null;
var G__55126 = (0);
var G__55127 = (0);
seq__55104 = G__55124;
chunk__55105 = G__55125;
count__55106 = G__55126;
i__55107 = G__55127;
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
var args55128 = [];
var len__37879__auto___55135 = arguments.length;
var i__37880__auto___55136 = (0);
while(true){
if((i__37880__auto___55136 < len__37879__auto___55135)){
args55128.push((arguments[i__37880__auto___55136]));

var G__55137 = (i__37880__auto___55136 + (1));
i__37880__auto___55136 = G__55137;
continue;
} else {
}
break;
}

var G__55130 = args55128.length;
switch (G__55130) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55128.length)].join('')));

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

var seq__55131_55139 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__55132_55140 = null;
var count__55133_55141 = (0);
var i__55134_55142 = (0);
while(true){
if((i__55134_55142 < count__55133_55141)){
var msg_55143 = cljs.core._nth.call(null,chunk__55132_55140,i__55134_55142);
figwheel.client.socket.handle_incoming_message.call(null,msg_55143);

var G__55144 = seq__55131_55139;
var G__55145 = chunk__55132_55140;
var G__55146 = count__55133_55141;
var G__55147 = (i__55134_55142 + (1));
seq__55131_55139 = G__55144;
chunk__55132_55140 = G__55145;
count__55133_55141 = G__55146;
i__55134_55142 = G__55147;
continue;
} else {
var temp__4657__auto___55148 = cljs.core.seq.call(null,seq__55131_55139);
if(temp__4657__auto___55148){
var seq__55131_55149__$1 = temp__4657__auto___55148;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55131_55149__$1)){
var c__37615__auto___55150 = cljs.core.chunk_first.call(null,seq__55131_55149__$1);
var G__55151 = cljs.core.chunk_rest.call(null,seq__55131_55149__$1);
var G__55152 = c__37615__auto___55150;
var G__55153 = cljs.core.count.call(null,c__37615__auto___55150);
var G__55154 = (0);
seq__55131_55139 = G__55151;
chunk__55132_55140 = G__55152;
count__55133_55141 = G__55153;
i__55134_55142 = G__55154;
continue;
} else {
var msg_55155 = cljs.core.first.call(null,seq__55131_55149__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_55155);

var G__55156 = cljs.core.next.call(null,seq__55131_55149__$1);
var G__55157 = null;
var G__55158 = (0);
var G__55159 = (0);
seq__55131_55139 = G__55156;
chunk__55132_55140 = G__55157;
count__55133_55141 = G__55158;
i__55134_55142 = G__55159;
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
var args__37886__auto__ = [];
var len__37879__auto___55164 = arguments.length;
var i__37880__auto___55165 = (0);
while(true){
if((i__37880__auto___55165 < len__37879__auto___55164)){
args__37886__auto__.push((arguments[i__37880__auto___55165]));

var G__55166 = (i__37880__auto___55165 + (1));
i__37880__auto___55165 = G__55166;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__55161){
var map__55162 = p__55161;
var map__55162__$1 = ((((!((map__55162 == null)))?((((map__55162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55162):map__55162);
var opts = map__55162__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq55160){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55160));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e55168){if((e55168 instanceof Error)){
var e = e55168;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e55168;

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
return (function (p__55172){
var map__55173 = p__55172;
var map__55173__$1 = ((((!((map__55173 == null)))?((((map__55173.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55173.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55173):map__55173);
var msg_name = cljs.core.get.call(null,map__55173__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map