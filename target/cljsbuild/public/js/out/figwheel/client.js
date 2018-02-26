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
var args43333 = [];
var len__37847__auto___43336 = arguments.length;
var i__37848__auto___43337 = (0);
while(true){
if((i__37848__auto___43337 < len__37847__auto___43336)){
args43333.push((arguments[i__37848__auto___43337]));

var G__43338 = (i__37848__auto___43337 + (1));
i__37848__auto___43337 = G__43338;
continue;
} else {
}
break;
}

var G__43335 = args43333.length;
switch (G__43335) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43333.length)].join('')));

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
var args__37854__auto__ = [];
var len__37847__auto___43341 = arguments.length;
var i__37848__auto___43342 = (0);
while(true){
if((i__37848__auto___43342 < len__37847__auto___43341)){
args__37854__auto__.push((arguments[i__37848__auto___43342]));

var G__43343 = (i__37848__auto___43342 + (1));
i__37848__auto___43342 = G__43343;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq43340){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43340));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__37854__auto__ = [];
var len__37847__auto___43345 = arguments.length;
var i__37848__auto___43346 = (0);
while(true){
if((i__37848__auto___43346 < len__37847__auto___43345)){
args__37854__auto__.push((arguments[i__37848__auto___43346]));

var G__43347 = (i__37848__auto___43346 + (1));
i__37848__auto___43346 = G__43347;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq43344){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43344));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__43348 = cljs.core._EQ_;
var expr__43349 = (function (){var or__36772__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e43352){if((e43352 instanceof Error)){
var e = e43352;
return false;
} else {
throw e43352;

}
}})();
if(cljs.core.truth_(or__36772__auto__)){
return or__36772__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__43348.call(null,"true",expr__43349))){
return true;
} else {
if(cljs.core.truth_(pred__43348.call(null,"false",expr__43349))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__43349)].join('')));
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
}catch (e43354){if((e43354 instanceof Error)){
var e = e43354;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e43354;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__43355){
var map__43358 = p__43355;
var map__43358__$1 = ((((!((map__43358 == null)))?((((map__43358.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43358.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43358):map__43358);
var message = cljs.core.get.call(null,map__43358__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__43358__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__36772__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__36772__auto__)){
return or__36772__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__36760__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__36760__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__36760__auto__;
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
var c__39382__auto___43520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39382__auto___43520,ch){
return (function (){
var f__39383__auto__ = (function (){var switch__39361__auto__ = ((function (c__39382__auto___43520,ch){
return (function (state_43489){
var state_val_43490 = (state_43489[(1)]);
if((state_val_43490 === (7))){
var inst_43485 = (state_43489[(2)]);
var state_43489__$1 = state_43489;
var statearr_43491_43521 = state_43489__$1;
(statearr_43491_43521[(2)] = inst_43485);

(statearr_43491_43521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43490 === (1))){
var state_43489__$1 = state_43489;
var statearr_43492_43522 = state_43489__$1;
(statearr_43492_43522[(2)] = null);

(statearr_43492_43522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43490 === (4))){
var inst_43442 = (state_43489[(7)]);
var inst_43442__$1 = (state_43489[(2)]);
var state_43489__$1 = (function (){var statearr_43493 = state_43489;
(statearr_43493[(7)] = inst_43442__$1);

return statearr_43493;
})();
if(cljs.core.truth_(inst_43442__$1)){
var statearr_43494_43523 = state_43489__$1;
(statearr_43494_43523[(1)] = (5));

} else {
var statearr_43495_43524 = state_43489__$1;
(statearr_43495_43524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43490 === (15))){
var inst_43449 = (state_43489[(8)]);
var inst_43464 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_43449);
var inst_43465 = cljs.core.first.call(null,inst_43464);
var inst_43466 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_43465);
var inst_43467 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_43466)].join('');
var inst_43468 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_43467);
var state_43489__$1 = state_43489;
var statearr_43496_43525 = state_43489__$1;
(statearr_43496_43525[(2)] = inst_43468);

(statearr_43496_43525[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43490 === (13))){
var inst_43473 = (state_43489[(2)]);
var state_43489__$1 = state_43489;
var statearr_43497_43526 = state_43489__$1;
(statearr_43497_43526[(2)] = inst_43473);

(statearr_43497_43526[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43490 === (6))){
var state_43489__$1 = state_43489;
var statearr_43498_43527 = state_43489__$1;
(statearr_43498_43527[(2)] = null);

(statearr_43498_43527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43490 === (17))){
var inst_43471 = (state_43489[(2)]);
var state_43489__$1 = state_43489;
var statearr_43499_43528 = state_43489__$1;
(statearr_43499_43528[(2)] = inst_43471);

(statearr_43499_43528[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43490 === (3))){
var inst_43487 = (state_43489[(2)]);
var state_43489__$1 = state_43489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43489__$1,inst_43487);
} else {
if((state_val_43490 === (12))){
var inst_43448 = (state_43489[(9)]);
var inst_43462 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_43448,opts);
var state_43489__$1 = state_43489;
if(cljs.core.truth_(inst_43462)){
var statearr_43500_43529 = state_43489__$1;
(statearr_43500_43529[(1)] = (15));

} else {
var statearr_43501_43530 = state_43489__$1;
(statearr_43501_43530[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43490 === (2))){
var state_43489__$1 = state_43489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43489__$1,(4),ch);
} else {
if((state_val_43490 === (11))){
var inst_43449 = (state_43489[(8)]);
var inst_43454 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43455 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_43449);
var inst_43456 = cljs.core.async.timeout.call(null,(1000));
var inst_43457 = [inst_43455,inst_43456];
var inst_43458 = (new cljs.core.PersistentVector(null,2,(5),inst_43454,inst_43457,null));
var state_43489__$1 = state_43489;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43489__$1,(14),inst_43458);
} else {
if((state_val_43490 === (9))){
var inst_43449 = (state_43489[(8)]);
var inst_43475 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_43476 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_43449);
var inst_43477 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_43476);
var inst_43478 = [cljs.core.str("Not loading: "),cljs.core.str(inst_43477)].join('');
var inst_43479 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_43478);
var state_43489__$1 = (function (){var statearr_43502 = state_43489;
(statearr_43502[(10)] = inst_43475);

return statearr_43502;
})();
var statearr_43503_43531 = state_43489__$1;
(statearr_43503_43531[(2)] = inst_43479);

(statearr_43503_43531[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43490 === (5))){
var inst_43442 = (state_43489[(7)]);
var inst_43444 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_43445 = (new cljs.core.PersistentArrayMap(null,2,inst_43444,null));
var inst_43446 = (new cljs.core.PersistentHashSet(null,inst_43445,null));
var inst_43447 = figwheel.client.focus_msgs.call(null,inst_43446,inst_43442);
var inst_43448 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_43447);
var inst_43449 = cljs.core.first.call(null,inst_43447);
var inst_43450 = figwheel.client.autoload_QMARK_.call(null);
var state_43489__$1 = (function (){var statearr_43504 = state_43489;
(statearr_43504[(9)] = inst_43448);

(statearr_43504[(8)] = inst_43449);

return statearr_43504;
})();
if(cljs.core.truth_(inst_43450)){
var statearr_43505_43532 = state_43489__$1;
(statearr_43505_43532[(1)] = (8));

} else {
var statearr_43506_43533 = state_43489__$1;
(statearr_43506_43533[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43490 === (14))){
var inst_43460 = (state_43489[(2)]);
var state_43489__$1 = state_43489;
var statearr_43507_43534 = state_43489__$1;
(statearr_43507_43534[(2)] = inst_43460);

(statearr_43507_43534[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43490 === (16))){
var state_43489__$1 = state_43489;
var statearr_43508_43535 = state_43489__$1;
(statearr_43508_43535[(2)] = null);

(statearr_43508_43535[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43490 === (10))){
var inst_43481 = (state_43489[(2)]);
var state_43489__$1 = (function (){var statearr_43509 = state_43489;
(statearr_43509[(11)] = inst_43481);

return statearr_43509;
})();
var statearr_43510_43536 = state_43489__$1;
(statearr_43510_43536[(2)] = null);

(statearr_43510_43536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43490 === (8))){
var inst_43448 = (state_43489[(9)]);
var inst_43452 = figwheel.client.reload_file_state_QMARK_.call(null,inst_43448,opts);
var state_43489__$1 = state_43489;
if(cljs.core.truth_(inst_43452)){
var statearr_43511_43537 = state_43489__$1;
(statearr_43511_43537[(1)] = (11));

} else {
var statearr_43512_43538 = state_43489__$1;
(statearr_43512_43538[(1)] = (12));

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
});})(c__39382__auto___43520,ch))
;
return ((function (switch__39361__auto__,c__39382__auto___43520,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__39362__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__39362__auto____0 = (function (){
var statearr_43516 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43516[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__39362__auto__);

(statearr_43516[(1)] = (1));

return statearr_43516;
});
var figwheel$client$file_reloader_plugin_$_state_machine__39362__auto____1 = (function (state_43489){
while(true){
var ret_value__39363__auto__ = (function (){try{while(true){
var result__39364__auto__ = switch__39361__auto__.call(null,state_43489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39364__auto__;
}
break;
}
}catch (e43517){if((e43517 instanceof Object)){
var ex__39365__auto__ = e43517;
var statearr_43518_43539 = state_43489;
(statearr_43518_43539[(5)] = ex__39365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43540 = state_43489;
state_43489 = G__43540;
continue;
} else {
return ret_value__39363__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__39362__auto__ = function(state_43489){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__39362__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__39362__auto____1.call(this,state_43489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__39362__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__39362__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__39362__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__39362__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__39362__auto__;
})()
;})(switch__39361__auto__,c__39382__auto___43520,ch))
})();
var state__39384__auto__ = (function (){var statearr_43519 = f__39383__auto__.call(null);
(statearr_43519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39382__auto___43520);

return statearr_43519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39384__auto__);
});})(c__39382__auto___43520,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__43541_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__43541_SHARP_));
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
var base_path_43544 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_43544){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e43543){if((e43543 instanceof Error)){
var e = e43543;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_43544], null));
} else {
var e = e43543;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_43544))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__43545){
var map__43554 = p__43545;
var map__43554__$1 = ((((!((map__43554 == null)))?((((map__43554.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43554.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43554):map__43554);
var opts = map__43554__$1;
var build_id = cljs.core.get.call(null,map__43554__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__43554,map__43554__$1,opts,build_id){
return (function (p__43556){
var vec__43557 = p__43556;
var seq__43558 = cljs.core.seq.call(null,vec__43557);
var first__43559 = cljs.core.first.call(null,seq__43558);
var seq__43558__$1 = cljs.core.next.call(null,seq__43558);
var map__43560 = first__43559;
var map__43560__$1 = ((((!((map__43560 == null)))?((((map__43560.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43560.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43560):map__43560);
var msg = map__43560__$1;
var msg_name = cljs.core.get.call(null,map__43560__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43558__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__43557,seq__43558,first__43559,seq__43558__$1,map__43560,map__43560__$1,msg,msg_name,_,map__43554,map__43554__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__43557,seq__43558,first__43559,seq__43558__$1,map__43560,map__43560__$1,msg,msg_name,_,map__43554,map__43554__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__43554,map__43554__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__43568){
var vec__43569 = p__43568;
var seq__43570 = cljs.core.seq.call(null,vec__43569);
var first__43571 = cljs.core.first.call(null,seq__43570);
var seq__43570__$1 = cljs.core.next.call(null,seq__43570);
var map__43572 = first__43571;
var map__43572__$1 = ((((!((map__43572 == null)))?((((map__43572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43572):map__43572);
var msg = map__43572__$1;
var msg_name = cljs.core.get.call(null,map__43572__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43570__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__43574){
var map__43586 = p__43574;
var map__43586__$1 = ((((!((map__43586 == null)))?((((map__43586.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43586.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43586):map__43586);
var on_compile_warning = cljs.core.get.call(null,map__43586__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__43586__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__43586,map__43586__$1,on_compile_warning,on_compile_fail){
return (function (p__43588){
var vec__43589 = p__43588;
var seq__43590 = cljs.core.seq.call(null,vec__43589);
var first__43591 = cljs.core.first.call(null,seq__43590);
var seq__43590__$1 = cljs.core.next.call(null,seq__43590);
var map__43592 = first__43591;
var map__43592__$1 = ((((!((map__43592 == null)))?((((map__43592.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43592.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43592):map__43592);
var msg = map__43592__$1;
var msg_name = cljs.core.get.call(null,map__43592__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43590__$1;
var pred__43594 = cljs.core._EQ_;
var expr__43595 = msg_name;
if(cljs.core.truth_(pred__43594.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__43595))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__43594.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__43595))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__43586,map__43586__$1,on_compile_warning,on_compile_fail))
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
var c__39382__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39382__auto__,msg_hist,msg_names,msg){
return (function (){
var f__39383__auto__ = (function (){var switch__39361__auto__ = ((function (c__39382__auto__,msg_hist,msg_names,msg){
return (function (state_43823){
var state_val_43824 = (state_43823[(1)]);
if((state_val_43824 === (7))){
var inst_43743 = (state_43823[(2)]);
var state_43823__$1 = state_43823;
if(cljs.core.truth_(inst_43743)){
var statearr_43825_43875 = state_43823__$1;
(statearr_43825_43875[(1)] = (8));

} else {
var statearr_43826_43876 = state_43823__$1;
(statearr_43826_43876[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (20))){
var inst_43817 = (state_43823[(2)]);
var state_43823__$1 = state_43823;
var statearr_43827_43877 = state_43823__$1;
(statearr_43827_43877[(2)] = inst_43817);

(statearr_43827_43877[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (27))){
var inst_43813 = (state_43823[(2)]);
var state_43823__$1 = state_43823;
var statearr_43828_43878 = state_43823__$1;
(statearr_43828_43878[(2)] = inst_43813);

(statearr_43828_43878[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (1))){
var inst_43736 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_43823__$1 = state_43823;
if(cljs.core.truth_(inst_43736)){
var statearr_43829_43879 = state_43823__$1;
(statearr_43829_43879[(1)] = (2));

} else {
var statearr_43830_43880 = state_43823__$1;
(statearr_43830_43880[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (24))){
var inst_43815 = (state_43823[(2)]);
var state_43823__$1 = state_43823;
var statearr_43831_43881 = state_43823__$1;
(statearr_43831_43881[(2)] = inst_43815);

(statearr_43831_43881[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (4))){
var inst_43821 = (state_43823[(2)]);
var state_43823__$1 = state_43823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43823__$1,inst_43821);
} else {
if((state_val_43824 === (15))){
var inst_43819 = (state_43823[(2)]);
var state_43823__$1 = state_43823;
var statearr_43832_43882 = state_43823__$1;
(statearr_43832_43882[(2)] = inst_43819);

(statearr_43832_43882[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (21))){
var inst_43772 = (state_43823[(2)]);
var inst_43773 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43774 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43773);
var state_43823__$1 = (function (){var statearr_43833 = state_43823;
(statearr_43833[(7)] = inst_43772);

return statearr_43833;
})();
var statearr_43834_43883 = state_43823__$1;
(statearr_43834_43883[(2)] = inst_43774);

(statearr_43834_43883[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (31))){
var inst_43802 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_43823__$1 = state_43823;
if(cljs.core.truth_(inst_43802)){
var statearr_43835_43884 = state_43823__$1;
(statearr_43835_43884[(1)] = (34));

} else {
var statearr_43836_43885 = state_43823__$1;
(statearr_43836_43885[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (32))){
var inst_43811 = (state_43823[(2)]);
var state_43823__$1 = state_43823;
var statearr_43837_43886 = state_43823__$1;
(statearr_43837_43886[(2)] = inst_43811);

(statearr_43837_43886[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (33))){
var inst_43798 = (state_43823[(2)]);
var inst_43799 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43800 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43799);
var state_43823__$1 = (function (){var statearr_43838 = state_43823;
(statearr_43838[(8)] = inst_43798);

return statearr_43838;
})();
var statearr_43839_43887 = state_43823__$1;
(statearr_43839_43887[(2)] = inst_43800);

(statearr_43839_43887[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (13))){
var inst_43757 = figwheel.client.heads_up.clear.call(null);
var state_43823__$1 = state_43823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43823__$1,(16),inst_43757);
} else {
if((state_val_43824 === (22))){
var inst_43778 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43779 = figwheel.client.heads_up.append_warning_message.call(null,inst_43778);
var state_43823__$1 = state_43823;
var statearr_43840_43888 = state_43823__$1;
(statearr_43840_43888[(2)] = inst_43779);

(statearr_43840_43888[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (36))){
var inst_43809 = (state_43823[(2)]);
var state_43823__$1 = state_43823;
var statearr_43841_43889 = state_43823__$1;
(statearr_43841_43889[(2)] = inst_43809);

(statearr_43841_43889[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (29))){
var inst_43789 = (state_43823[(2)]);
var inst_43790 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43791 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43790);
var state_43823__$1 = (function (){var statearr_43842 = state_43823;
(statearr_43842[(9)] = inst_43789);

return statearr_43842;
})();
var statearr_43843_43890 = state_43823__$1;
(statearr_43843_43890[(2)] = inst_43791);

(statearr_43843_43890[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (6))){
var inst_43738 = (state_43823[(10)]);
var state_43823__$1 = state_43823;
var statearr_43844_43891 = state_43823__$1;
(statearr_43844_43891[(2)] = inst_43738);

(statearr_43844_43891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (28))){
var inst_43785 = (state_43823[(2)]);
var inst_43786 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43787 = figwheel.client.heads_up.display_warning.call(null,inst_43786);
var state_43823__$1 = (function (){var statearr_43845 = state_43823;
(statearr_43845[(11)] = inst_43785);

return statearr_43845;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43823__$1,(29),inst_43787);
} else {
if((state_val_43824 === (25))){
var inst_43783 = figwheel.client.heads_up.clear.call(null);
var state_43823__$1 = state_43823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43823__$1,(28),inst_43783);
} else {
if((state_val_43824 === (34))){
var inst_43804 = figwheel.client.heads_up.flash_loaded.call(null);
var state_43823__$1 = state_43823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43823__$1,(37),inst_43804);
} else {
if((state_val_43824 === (17))){
var inst_43763 = (state_43823[(2)]);
var inst_43764 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43765 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43764);
var state_43823__$1 = (function (){var statearr_43846 = state_43823;
(statearr_43846[(12)] = inst_43763);

return statearr_43846;
})();
var statearr_43847_43892 = state_43823__$1;
(statearr_43847_43892[(2)] = inst_43765);

(statearr_43847_43892[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (3))){
var inst_43755 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_43823__$1 = state_43823;
if(cljs.core.truth_(inst_43755)){
var statearr_43848_43893 = state_43823__$1;
(statearr_43848_43893[(1)] = (13));

} else {
var statearr_43849_43894 = state_43823__$1;
(statearr_43849_43894[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (12))){
var inst_43751 = (state_43823[(2)]);
var state_43823__$1 = state_43823;
var statearr_43850_43895 = state_43823__$1;
(statearr_43850_43895[(2)] = inst_43751);

(statearr_43850_43895[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (2))){
var inst_43738 = (state_43823[(10)]);
var inst_43738__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_43823__$1 = (function (){var statearr_43851 = state_43823;
(statearr_43851[(10)] = inst_43738__$1);

return statearr_43851;
})();
if(cljs.core.truth_(inst_43738__$1)){
var statearr_43852_43896 = state_43823__$1;
(statearr_43852_43896[(1)] = (5));

} else {
var statearr_43853_43897 = state_43823__$1;
(statearr_43853_43897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (23))){
var inst_43781 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_43823__$1 = state_43823;
if(cljs.core.truth_(inst_43781)){
var statearr_43854_43898 = state_43823__$1;
(statearr_43854_43898[(1)] = (25));

} else {
var statearr_43855_43899 = state_43823__$1;
(statearr_43855_43899[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (35))){
var state_43823__$1 = state_43823;
var statearr_43856_43900 = state_43823__$1;
(statearr_43856_43900[(2)] = null);

(statearr_43856_43900[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (19))){
var inst_43776 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_43823__$1 = state_43823;
if(cljs.core.truth_(inst_43776)){
var statearr_43857_43901 = state_43823__$1;
(statearr_43857_43901[(1)] = (22));

} else {
var statearr_43858_43902 = state_43823__$1;
(statearr_43858_43902[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (11))){
var inst_43747 = (state_43823[(2)]);
var state_43823__$1 = state_43823;
var statearr_43859_43903 = state_43823__$1;
(statearr_43859_43903[(2)] = inst_43747);

(statearr_43859_43903[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (9))){
var inst_43749 = figwheel.client.heads_up.clear.call(null);
var state_43823__$1 = state_43823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43823__$1,(12),inst_43749);
} else {
if((state_val_43824 === (5))){
var inst_43740 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_43823__$1 = state_43823;
var statearr_43860_43904 = state_43823__$1;
(statearr_43860_43904[(2)] = inst_43740);

(statearr_43860_43904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (14))){
var inst_43767 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_43823__$1 = state_43823;
if(cljs.core.truth_(inst_43767)){
var statearr_43861_43905 = state_43823__$1;
(statearr_43861_43905[(1)] = (18));

} else {
var statearr_43862_43906 = state_43823__$1;
(statearr_43862_43906[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (26))){
var inst_43793 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_43823__$1 = state_43823;
if(cljs.core.truth_(inst_43793)){
var statearr_43863_43907 = state_43823__$1;
(statearr_43863_43907[(1)] = (30));

} else {
var statearr_43864_43908 = state_43823__$1;
(statearr_43864_43908[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (16))){
var inst_43759 = (state_43823[(2)]);
var inst_43760 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43761 = figwheel.client.heads_up.display_exception.call(null,inst_43760);
var state_43823__$1 = (function (){var statearr_43865 = state_43823;
(statearr_43865[(13)] = inst_43759);

return statearr_43865;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43823__$1,(17),inst_43761);
} else {
if((state_val_43824 === (30))){
var inst_43795 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43796 = figwheel.client.heads_up.display_warning.call(null,inst_43795);
var state_43823__$1 = state_43823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43823__$1,(33),inst_43796);
} else {
if((state_val_43824 === (10))){
var inst_43753 = (state_43823[(2)]);
var state_43823__$1 = state_43823;
var statearr_43866_43909 = state_43823__$1;
(statearr_43866_43909[(2)] = inst_43753);

(statearr_43866_43909[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (18))){
var inst_43769 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43770 = figwheel.client.heads_up.display_exception.call(null,inst_43769);
var state_43823__$1 = state_43823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43823__$1,(21),inst_43770);
} else {
if((state_val_43824 === (37))){
var inst_43806 = (state_43823[(2)]);
var state_43823__$1 = state_43823;
var statearr_43867_43910 = state_43823__$1;
(statearr_43867_43910[(2)] = inst_43806);

(statearr_43867_43910[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (8))){
var inst_43745 = figwheel.client.heads_up.flash_loaded.call(null);
var state_43823__$1 = state_43823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43823__$1,(11),inst_43745);
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
});})(c__39382__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__39361__auto__,c__39382__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39362__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39362__auto____0 = (function (){
var statearr_43871 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43871[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39362__auto__);

(statearr_43871[(1)] = (1));

return statearr_43871;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39362__auto____1 = (function (state_43823){
while(true){
var ret_value__39363__auto__ = (function (){try{while(true){
var result__39364__auto__ = switch__39361__auto__.call(null,state_43823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39364__auto__;
}
break;
}
}catch (e43872){if((e43872 instanceof Object)){
var ex__39365__auto__ = e43872;
var statearr_43873_43911 = state_43823;
(statearr_43873_43911[(5)] = ex__39365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43912 = state_43823;
state_43823 = G__43912;
continue;
} else {
return ret_value__39363__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39362__auto__ = function(state_43823){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39362__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39362__auto____1.call(this,state_43823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39362__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39362__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39362__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39362__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39362__auto__;
})()
;})(switch__39361__auto__,c__39382__auto__,msg_hist,msg_names,msg))
})();
var state__39384__auto__ = (function (){var statearr_43874 = f__39383__auto__.call(null);
(statearr_43874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39382__auto__);

return statearr_43874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39384__auto__);
});})(c__39382__auto__,msg_hist,msg_names,msg))
);

return c__39382__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__39382__auto___43975 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39382__auto___43975,ch){
return (function (){
var f__39383__auto__ = (function (){var switch__39361__auto__ = ((function (c__39382__auto___43975,ch){
return (function (state_43958){
var state_val_43959 = (state_43958[(1)]);
if((state_val_43959 === (1))){
var state_43958__$1 = state_43958;
var statearr_43960_43976 = state_43958__$1;
(statearr_43960_43976[(2)] = null);

(statearr_43960_43976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43959 === (2))){
var state_43958__$1 = state_43958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43958__$1,(4),ch);
} else {
if((state_val_43959 === (3))){
var inst_43956 = (state_43958[(2)]);
var state_43958__$1 = state_43958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43958__$1,inst_43956);
} else {
if((state_val_43959 === (4))){
var inst_43946 = (state_43958[(7)]);
var inst_43946__$1 = (state_43958[(2)]);
var state_43958__$1 = (function (){var statearr_43961 = state_43958;
(statearr_43961[(7)] = inst_43946__$1);

return statearr_43961;
})();
if(cljs.core.truth_(inst_43946__$1)){
var statearr_43962_43977 = state_43958__$1;
(statearr_43962_43977[(1)] = (5));

} else {
var statearr_43963_43978 = state_43958__$1;
(statearr_43963_43978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43959 === (5))){
var inst_43946 = (state_43958[(7)]);
var inst_43948 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_43946);
var state_43958__$1 = state_43958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43958__$1,(8),inst_43948);
} else {
if((state_val_43959 === (6))){
var state_43958__$1 = state_43958;
var statearr_43964_43979 = state_43958__$1;
(statearr_43964_43979[(2)] = null);

(statearr_43964_43979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43959 === (7))){
var inst_43954 = (state_43958[(2)]);
var state_43958__$1 = state_43958;
var statearr_43965_43980 = state_43958__$1;
(statearr_43965_43980[(2)] = inst_43954);

(statearr_43965_43980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43959 === (8))){
var inst_43950 = (state_43958[(2)]);
var state_43958__$1 = (function (){var statearr_43966 = state_43958;
(statearr_43966[(8)] = inst_43950);

return statearr_43966;
})();
var statearr_43967_43981 = state_43958__$1;
(statearr_43967_43981[(2)] = null);

(statearr_43967_43981[(1)] = (2));


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
});})(c__39382__auto___43975,ch))
;
return ((function (switch__39361__auto__,c__39382__auto___43975,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__39362__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__39362__auto____0 = (function (){
var statearr_43971 = [null,null,null,null,null,null,null,null,null];
(statearr_43971[(0)] = figwheel$client$heads_up_plugin_$_state_machine__39362__auto__);

(statearr_43971[(1)] = (1));

return statearr_43971;
});
var figwheel$client$heads_up_plugin_$_state_machine__39362__auto____1 = (function (state_43958){
while(true){
var ret_value__39363__auto__ = (function (){try{while(true){
var result__39364__auto__ = switch__39361__auto__.call(null,state_43958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39364__auto__;
}
break;
}
}catch (e43972){if((e43972 instanceof Object)){
var ex__39365__auto__ = e43972;
var statearr_43973_43982 = state_43958;
(statearr_43973_43982[(5)] = ex__39365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43983 = state_43958;
state_43958 = G__43983;
continue;
} else {
return ret_value__39363__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__39362__auto__ = function(state_43958){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__39362__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__39362__auto____1.call(this,state_43958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__39362__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__39362__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__39362__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__39362__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__39362__auto__;
})()
;})(switch__39361__auto__,c__39382__auto___43975,ch))
})();
var state__39384__auto__ = (function (){var statearr_43974 = f__39383__auto__.call(null);
(statearr_43974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39382__auto___43975);

return statearr_43974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39384__auto__);
});})(c__39382__auto___43975,ch))
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
var c__39382__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39382__auto__){
return (function (){
var f__39383__auto__ = (function (){var switch__39361__auto__ = ((function (c__39382__auto__){
return (function (state_44004){
var state_val_44005 = (state_44004[(1)]);
if((state_val_44005 === (1))){
var inst_43999 = cljs.core.async.timeout.call(null,(3000));
var state_44004__$1 = state_44004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44004__$1,(2),inst_43999);
} else {
if((state_val_44005 === (2))){
var inst_44001 = (state_44004[(2)]);
var inst_44002 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_44004__$1 = (function (){var statearr_44006 = state_44004;
(statearr_44006[(7)] = inst_44001);

return statearr_44006;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44004__$1,inst_44002);
} else {
return null;
}
}
});})(c__39382__auto__))
;
return ((function (switch__39361__auto__,c__39382__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__39362__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__39362__auto____0 = (function (){
var statearr_44010 = [null,null,null,null,null,null,null,null];
(statearr_44010[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__39362__auto__);

(statearr_44010[(1)] = (1));

return statearr_44010;
});
var figwheel$client$enforce_project_plugin_$_state_machine__39362__auto____1 = (function (state_44004){
while(true){
var ret_value__39363__auto__ = (function (){try{while(true){
var result__39364__auto__ = switch__39361__auto__.call(null,state_44004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39364__auto__;
}
break;
}
}catch (e44011){if((e44011 instanceof Object)){
var ex__39365__auto__ = e44011;
var statearr_44012_44014 = state_44004;
(statearr_44012_44014[(5)] = ex__39365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44015 = state_44004;
state_44004 = G__44015;
continue;
} else {
return ret_value__39363__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__39362__auto__ = function(state_44004){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__39362__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__39362__auto____1.call(this,state_44004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__39362__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__39362__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__39362__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__39362__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__39362__auto__;
})()
;})(switch__39361__auto__,c__39382__auto__))
})();
var state__39384__auto__ = (function (){var statearr_44013 = f__39383__auto__.call(null);
(statearr_44013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39382__auto__);

return statearr_44013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39384__auto__);
});})(c__39382__auto__))
);

return c__39382__auto__;
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
var c__39382__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39382__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__39383__auto__ = (function (){var switch__39361__auto__ = ((function (c__39382__auto__,figwheel_version,temp__4657__auto__){
return (function (state_44038){
var state_val_44039 = (state_44038[(1)]);
if((state_val_44039 === (1))){
var inst_44032 = cljs.core.async.timeout.call(null,(2000));
var state_44038__$1 = state_44038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44038__$1,(2),inst_44032);
} else {
if((state_val_44039 === (2))){
var inst_44034 = (state_44038[(2)]);
var inst_44035 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_44036 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_44035);
var state_44038__$1 = (function (){var statearr_44040 = state_44038;
(statearr_44040[(7)] = inst_44034);

return statearr_44040;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44038__$1,inst_44036);
} else {
return null;
}
}
});})(c__39382__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__39361__auto__,c__39382__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39362__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39362__auto____0 = (function (){
var statearr_44044 = [null,null,null,null,null,null,null,null];
(statearr_44044[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39362__auto__);

(statearr_44044[(1)] = (1));

return statearr_44044;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39362__auto____1 = (function (state_44038){
while(true){
var ret_value__39363__auto__ = (function (){try{while(true){
var result__39364__auto__ = switch__39361__auto__.call(null,state_44038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39364__auto__;
}
break;
}
}catch (e44045){if((e44045 instanceof Object)){
var ex__39365__auto__ = e44045;
var statearr_44046_44048 = state_44038;
(statearr_44046_44048[(5)] = ex__39365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44049 = state_44038;
state_44038 = G__44049;
continue;
} else {
return ret_value__39363__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39362__auto__ = function(state_44038){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39362__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39362__auto____1.call(this,state_44038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39362__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39362__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39362__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39362__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39362__auto__;
})()
;})(switch__39361__auto__,c__39382__auto__,figwheel_version,temp__4657__auto__))
})();
var state__39384__auto__ = (function (){var statearr_44047 = f__39383__auto__.call(null);
(statearr_44047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39382__auto__);

return statearr_44047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39384__auto__);
});})(c__39382__auto__,figwheel_version,temp__4657__auto__))
);

return c__39382__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__44050){
var map__44054 = p__44050;
var map__44054__$1 = ((((!((map__44054 == null)))?((((map__44054.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44054.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44054):map__44054);
var file = cljs.core.get.call(null,map__44054__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__44054__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__44054__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__44056 = "";
var G__44056__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__44056),cljs.core.str("file "),cljs.core.str(file)].join(''):G__44056);
var G__44056__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__44056__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__44056__$1);
if(cljs.core.truth_((function (){var and__36760__auto__ = line;
if(cljs.core.truth_(and__36760__auto__)){
return column;
} else {
return and__36760__auto__;
}
})())){
return [cljs.core.str(G__44056__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__44056__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__44057){
var map__44064 = p__44057;
var map__44064__$1 = ((((!((map__44064 == null)))?((((map__44064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44064):map__44064);
var ed = map__44064__$1;
var formatted_exception = cljs.core.get.call(null,map__44064__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__44064__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__44064__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__44066_44070 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__44067_44071 = null;
var count__44068_44072 = (0);
var i__44069_44073 = (0);
while(true){
if((i__44069_44073 < count__44068_44072)){
var msg_44074 = cljs.core._nth.call(null,chunk__44067_44071,i__44069_44073);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_44074);

var G__44075 = seq__44066_44070;
var G__44076 = chunk__44067_44071;
var G__44077 = count__44068_44072;
var G__44078 = (i__44069_44073 + (1));
seq__44066_44070 = G__44075;
chunk__44067_44071 = G__44076;
count__44068_44072 = G__44077;
i__44069_44073 = G__44078;
continue;
} else {
var temp__4657__auto___44079 = cljs.core.seq.call(null,seq__44066_44070);
if(temp__4657__auto___44079){
var seq__44066_44080__$1 = temp__4657__auto___44079;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44066_44080__$1)){
var c__37583__auto___44081 = cljs.core.chunk_first.call(null,seq__44066_44080__$1);
var G__44082 = cljs.core.chunk_rest.call(null,seq__44066_44080__$1);
var G__44083 = c__37583__auto___44081;
var G__44084 = cljs.core.count.call(null,c__37583__auto___44081);
var G__44085 = (0);
seq__44066_44070 = G__44082;
chunk__44067_44071 = G__44083;
count__44068_44072 = G__44084;
i__44069_44073 = G__44085;
continue;
} else {
var msg_44086 = cljs.core.first.call(null,seq__44066_44080__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_44086);

var G__44087 = cljs.core.next.call(null,seq__44066_44080__$1);
var G__44088 = null;
var G__44089 = (0);
var G__44090 = (0);
seq__44066_44070 = G__44087;
chunk__44067_44071 = G__44088;
count__44068_44072 = G__44089;
i__44069_44073 = G__44090;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__44091){
var map__44094 = p__44091;
var map__44094__$1 = ((((!((map__44094 == null)))?((((map__44094.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44094.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44094):map__44094);
var w = map__44094__$1;
var message = cljs.core.get.call(null,map__44094__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__36760__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__36760__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__36760__auto__;
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
var seq__44106 = cljs.core.seq.call(null,plugins);
var chunk__44107 = null;
var count__44108 = (0);
var i__44109 = (0);
while(true){
if((i__44109 < count__44108)){
var vec__44110 = cljs.core._nth.call(null,chunk__44107,i__44109);
var k = cljs.core.nth.call(null,vec__44110,(0),null);
var plugin = cljs.core.nth.call(null,vec__44110,(1),null);
if(cljs.core.truth_(plugin)){
var pl_44116 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__44106,chunk__44107,count__44108,i__44109,pl_44116,vec__44110,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_44116.call(null,msg_hist);
});})(seq__44106,chunk__44107,count__44108,i__44109,pl_44116,vec__44110,k,plugin))
);
} else {
}

var G__44117 = seq__44106;
var G__44118 = chunk__44107;
var G__44119 = count__44108;
var G__44120 = (i__44109 + (1));
seq__44106 = G__44117;
chunk__44107 = G__44118;
count__44108 = G__44119;
i__44109 = G__44120;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44106);
if(temp__4657__auto__){
var seq__44106__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44106__$1)){
var c__37583__auto__ = cljs.core.chunk_first.call(null,seq__44106__$1);
var G__44121 = cljs.core.chunk_rest.call(null,seq__44106__$1);
var G__44122 = c__37583__auto__;
var G__44123 = cljs.core.count.call(null,c__37583__auto__);
var G__44124 = (0);
seq__44106 = G__44121;
chunk__44107 = G__44122;
count__44108 = G__44123;
i__44109 = G__44124;
continue;
} else {
var vec__44113 = cljs.core.first.call(null,seq__44106__$1);
var k = cljs.core.nth.call(null,vec__44113,(0),null);
var plugin = cljs.core.nth.call(null,vec__44113,(1),null);
if(cljs.core.truth_(plugin)){
var pl_44125 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__44106,chunk__44107,count__44108,i__44109,pl_44125,vec__44113,k,plugin,seq__44106__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_44125.call(null,msg_hist);
});})(seq__44106,chunk__44107,count__44108,i__44109,pl_44125,vec__44113,k,plugin,seq__44106__$1,temp__4657__auto__))
);
} else {
}

var G__44126 = cljs.core.next.call(null,seq__44106__$1);
var G__44127 = null;
var G__44128 = (0);
var G__44129 = (0);
seq__44106 = G__44126;
chunk__44107 = G__44127;
count__44108 = G__44128;
i__44109 = G__44129;
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
var args44130 = [];
var len__37847__auto___44137 = arguments.length;
var i__37848__auto___44138 = (0);
while(true){
if((i__37848__auto___44138 < len__37847__auto___44137)){
args44130.push((arguments[i__37848__auto___44138]));

var G__44139 = (i__37848__auto___44138 + (1));
i__37848__auto___44138 = G__44139;
continue;
} else {
}
break;
}

var G__44132 = args44130.length;
switch (G__44132) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44130.length)].join('')));

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

var seq__44133_44141 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__44134_44142 = null;
var count__44135_44143 = (0);
var i__44136_44144 = (0);
while(true){
if((i__44136_44144 < count__44135_44143)){
var msg_44145 = cljs.core._nth.call(null,chunk__44134_44142,i__44136_44144);
figwheel.client.socket.handle_incoming_message.call(null,msg_44145);

var G__44146 = seq__44133_44141;
var G__44147 = chunk__44134_44142;
var G__44148 = count__44135_44143;
var G__44149 = (i__44136_44144 + (1));
seq__44133_44141 = G__44146;
chunk__44134_44142 = G__44147;
count__44135_44143 = G__44148;
i__44136_44144 = G__44149;
continue;
} else {
var temp__4657__auto___44150 = cljs.core.seq.call(null,seq__44133_44141);
if(temp__4657__auto___44150){
var seq__44133_44151__$1 = temp__4657__auto___44150;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44133_44151__$1)){
var c__37583__auto___44152 = cljs.core.chunk_first.call(null,seq__44133_44151__$1);
var G__44153 = cljs.core.chunk_rest.call(null,seq__44133_44151__$1);
var G__44154 = c__37583__auto___44152;
var G__44155 = cljs.core.count.call(null,c__37583__auto___44152);
var G__44156 = (0);
seq__44133_44141 = G__44153;
chunk__44134_44142 = G__44154;
count__44135_44143 = G__44155;
i__44136_44144 = G__44156;
continue;
} else {
var msg_44157 = cljs.core.first.call(null,seq__44133_44151__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_44157);

var G__44158 = cljs.core.next.call(null,seq__44133_44151__$1);
var G__44159 = null;
var G__44160 = (0);
var G__44161 = (0);
seq__44133_44141 = G__44158;
chunk__44134_44142 = G__44159;
count__44135_44143 = G__44160;
i__44136_44144 = G__44161;
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
var args__37854__auto__ = [];
var len__37847__auto___44166 = arguments.length;
var i__37848__auto___44167 = (0);
while(true){
if((i__37848__auto___44167 < len__37847__auto___44166)){
args__37854__auto__.push((arguments[i__37848__auto___44167]));

var G__44168 = (i__37848__auto___44167 + (1));
i__37848__auto___44167 = G__44168;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((0) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__37855__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__44163){
var map__44164 = p__44163;
var map__44164__$1 = ((((!((map__44164 == null)))?((((map__44164.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44164.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44164):map__44164);
var opts = map__44164__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq44162){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44162));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e44170){if((e44170 instanceof Error)){
var e = e44170;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e44170;

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
return (function (p__44174){
var map__44175 = p__44174;
var map__44175__$1 = ((((!((map__44175 == null)))?((((map__44175.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44175.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44175):map__44175);
var msg_name = cljs.core.get.call(null,map__44175__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map