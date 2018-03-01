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
var args54320 = [];
var len__37833__auto___54323 = arguments.length;
var i__37834__auto___54324 = (0);
while(true){
if((i__37834__auto___54324 < len__37833__auto___54323)){
args54320.push((arguments[i__37834__auto___54324]));

var G__54325 = (i__37834__auto___54324 + (1));
i__37834__auto___54324 = G__54325;
continue;
} else {
}
break;
}

var G__54322 = args54320.length;
switch (G__54322) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54320.length)].join('')));

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
var args__37840__auto__ = [];
var len__37833__auto___54328 = arguments.length;
var i__37834__auto___54329 = (0);
while(true){
if((i__37834__auto___54329 < len__37833__auto___54328)){
args__37840__auto__.push((arguments[i__37834__auto___54329]));

var G__54330 = (i__37834__auto___54329 + (1));
i__37834__auto___54329 = G__54330;
continue;
} else {
}
break;
}

var argseq__37841__auto__ = ((((0) < args__37840__auto__.length))?(new cljs.core.IndexedSeq(args__37840__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__37841__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq54327){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54327));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__37840__auto__ = [];
var len__37833__auto___54332 = arguments.length;
var i__37834__auto___54333 = (0);
while(true){
if((i__37834__auto___54333 < len__37833__auto___54332)){
args__37840__auto__.push((arguments[i__37834__auto___54333]));

var G__54334 = (i__37834__auto___54333 + (1));
i__37834__auto___54333 = G__54334;
continue;
} else {
}
break;
}

var argseq__37841__auto__ = ((((0) < args__37840__auto__.length))?(new cljs.core.IndexedSeq(args__37840__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__37841__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq54331){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54331));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__54335 = cljs.core._EQ_;
var expr__54336 = (function (){var or__36758__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e54339){if((e54339 instanceof Error)){
var e = e54339;
return false;
} else {
throw e54339;

}
}})();
if(cljs.core.truth_(or__36758__auto__)){
return or__36758__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__54335.call(null,"true",expr__54336))){
return true;
} else {
if(cljs.core.truth_(pred__54335.call(null,"false",expr__54336))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__54336)].join('')));
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
}catch (e54341){if((e54341 instanceof Error)){
var e = e54341;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e54341;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__54342){
var map__54345 = p__54342;
var map__54345__$1 = ((((!((map__54345 == null)))?((((map__54345.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54345.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54345):map__54345);
var message = cljs.core.get.call(null,map__54345__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__54345__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__36758__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__36758__auto__)){
return or__36758__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__36746__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__36746__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__36746__auto__;
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
var c__41620__auto___54507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto___54507,ch){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto___54507,ch){
return (function (state_54476){
var state_val_54477 = (state_54476[(1)]);
if((state_val_54477 === (7))){
var inst_54472 = (state_54476[(2)]);
var state_54476__$1 = state_54476;
var statearr_54478_54508 = state_54476__$1;
(statearr_54478_54508[(2)] = inst_54472);

(statearr_54478_54508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54477 === (1))){
var state_54476__$1 = state_54476;
var statearr_54479_54509 = state_54476__$1;
(statearr_54479_54509[(2)] = null);

(statearr_54479_54509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54477 === (4))){
var inst_54429 = (state_54476[(7)]);
var inst_54429__$1 = (state_54476[(2)]);
var state_54476__$1 = (function (){var statearr_54480 = state_54476;
(statearr_54480[(7)] = inst_54429__$1);

return statearr_54480;
})();
if(cljs.core.truth_(inst_54429__$1)){
var statearr_54481_54510 = state_54476__$1;
(statearr_54481_54510[(1)] = (5));

} else {
var statearr_54482_54511 = state_54476__$1;
(statearr_54482_54511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54477 === (15))){
var inst_54436 = (state_54476[(8)]);
var inst_54451 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_54436);
var inst_54452 = cljs.core.first.call(null,inst_54451);
var inst_54453 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_54452);
var inst_54454 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_54453)].join('');
var inst_54455 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_54454);
var state_54476__$1 = state_54476;
var statearr_54483_54512 = state_54476__$1;
(statearr_54483_54512[(2)] = inst_54455);

(statearr_54483_54512[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54477 === (13))){
var inst_54460 = (state_54476[(2)]);
var state_54476__$1 = state_54476;
var statearr_54484_54513 = state_54476__$1;
(statearr_54484_54513[(2)] = inst_54460);

(statearr_54484_54513[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54477 === (6))){
var state_54476__$1 = state_54476;
var statearr_54485_54514 = state_54476__$1;
(statearr_54485_54514[(2)] = null);

(statearr_54485_54514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54477 === (17))){
var inst_54458 = (state_54476[(2)]);
var state_54476__$1 = state_54476;
var statearr_54486_54515 = state_54476__$1;
(statearr_54486_54515[(2)] = inst_54458);

(statearr_54486_54515[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54477 === (3))){
var inst_54474 = (state_54476[(2)]);
var state_54476__$1 = state_54476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54476__$1,inst_54474);
} else {
if((state_val_54477 === (12))){
var inst_54435 = (state_54476[(9)]);
var inst_54449 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_54435,opts);
var state_54476__$1 = state_54476;
if(cljs.core.truth_(inst_54449)){
var statearr_54487_54516 = state_54476__$1;
(statearr_54487_54516[(1)] = (15));

} else {
var statearr_54488_54517 = state_54476__$1;
(statearr_54488_54517[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54477 === (2))){
var state_54476__$1 = state_54476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54476__$1,(4),ch);
} else {
if((state_val_54477 === (11))){
var inst_54436 = (state_54476[(8)]);
var inst_54441 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54442 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_54436);
var inst_54443 = cljs.core.async.timeout.call(null,(1000));
var inst_54444 = [inst_54442,inst_54443];
var inst_54445 = (new cljs.core.PersistentVector(null,2,(5),inst_54441,inst_54444,null));
var state_54476__$1 = state_54476;
return cljs.core.async.ioc_alts_BANG_.call(null,state_54476__$1,(14),inst_54445);
} else {
if((state_val_54477 === (9))){
var inst_54436 = (state_54476[(8)]);
var inst_54462 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_54463 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_54436);
var inst_54464 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_54463);
var inst_54465 = [cljs.core.str("Not loading: "),cljs.core.str(inst_54464)].join('');
var inst_54466 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_54465);
var state_54476__$1 = (function (){var statearr_54489 = state_54476;
(statearr_54489[(10)] = inst_54462);

return statearr_54489;
})();
var statearr_54490_54518 = state_54476__$1;
(statearr_54490_54518[(2)] = inst_54466);

(statearr_54490_54518[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54477 === (5))){
var inst_54429 = (state_54476[(7)]);
var inst_54431 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_54432 = (new cljs.core.PersistentArrayMap(null,2,inst_54431,null));
var inst_54433 = (new cljs.core.PersistentHashSet(null,inst_54432,null));
var inst_54434 = figwheel.client.focus_msgs.call(null,inst_54433,inst_54429);
var inst_54435 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_54434);
var inst_54436 = cljs.core.first.call(null,inst_54434);
var inst_54437 = figwheel.client.autoload_QMARK_.call(null);
var state_54476__$1 = (function (){var statearr_54491 = state_54476;
(statearr_54491[(8)] = inst_54436);

(statearr_54491[(9)] = inst_54435);

return statearr_54491;
})();
if(cljs.core.truth_(inst_54437)){
var statearr_54492_54519 = state_54476__$1;
(statearr_54492_54519[(1)] = (8));

} else {
var statearr_54493_54520 = state_54476__$1;
(statearr_54493_54520[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54477 === (14))){
var inst_54447 = (state_54476[(2)]);
var state_54476__$1 = state_54476;
var statearr_54494_54521 = state_54476__$1;
(statearr_54494_54521[(2)] = inst_54447);

(statearr_54494_54521[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54477 === (16))){
var state_54476__$1 = state_54476;
var statearr_54495_54522 = state_54476__$1;
(statearr_54495_54522[(2)] = null);

(statearr_54495_54522[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54477 === (10))){
var inst_54468 = (state_54476[(2)]);
var state_54476__$1 = (function (){var statearr_54496 = state_54476;
(statearr_54496[(11)] = inst_54468);

return statearr_54496;
})();
var statearr_54497_54523 = state_54476__$1;
(statearr_54497_54523[(2)] = null);

(statearr_54497_54523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54477 === (8))){
var inst_54435 = (state_54476[(9)]);
var inst_54439 = figwheel.client.reload_file_state_QMARK_.call(null,inst_54435,opts);
var state_54476__$1 = state_54476;
if(cljs.core.truth_(inst_54439)){
var statearr_54498_54524 = state_54476__$1;
(statearr_54498_54524[(1)] = (11));

} else {
var statearr_54499_54525 = state_54476__$1;
(statearr_54499_54525[(1)] = (12));

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
});})(c__41620__auto___54507,ch))
;
return ((function (switch__41458__auto__,c__41620__auto___54507,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__41459__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__41459__auto____0 = (function (){
var statearr_54503 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54503[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__41459__auto__);

(statearr_54503[(1)] = (1));

return statearr_54503;
});
var figwheel$client$file_reloader_plugin_$_state_machine__41459__auto____1 = (function (state_54476){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_54476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e54504){if((e54504 instanceof Object)){
var ex__41462__auto__ = e54504;
var statearr_54505_54526 = state_54476;
(statearr_54505_54526[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54527 = state_54476;
state_54476 = G__54527;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__41459__auto__ = function(state_54476){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__41459__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__41459__auto____1.call(this,state_54476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__41459__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__41459__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto___54507,ch))
})();
var state__41622__auto__ = (function (){var statearr_54506 = f__41621__auto__.call(null);
(statearr_54506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto___54507);

return statearr_54506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto___54507,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__54528_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__54528_SHARP_));
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
var base_path_54531 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_54531){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e54530){if((e54530 instanceof Error)){
var e = e54530;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_54531], null));
} else {
var e = e54530;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_54531))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__54532){
var map__54541 = p__54532;
var map__54541__$1 = ((((!((map__54541 == null)))?((((map__54541.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54541.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54541):map__54541);
var opts = map__54541__$1;
var build_id = cljs.core.get.call(null,map__54541__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__54541,map__54541__$1,opts,build_id){
return (function (p__54543){
var vec__54544 = p__54543;
var seq__54545 = cljs.core.seq.call(null,vec__54544);
var first__54546 = cljs.core.first.call(null,seq__54545);
var seq__54545__$1 = cljs.core.next.call(null,seq__54545);
var map__54547 = first__54546;
var map__54547__$1 = ((((!((map__54547 == null)))?((((map__54547.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54547.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54547):map__54547);
var msg = map__54547__$1;
var msg_name = cljs.core.get.call(null,map__54547__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54545__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__54544,seq__54545,first__54546,seq__54545__$1,map__54547,map__54547__$1,msg,msg_name,_,map__54541,map__54541__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__54544,seq__54545,first__54546,seq__54545__$1,map__54547,map__54547__$1,msg,msg_name,_,map__54541,map__54541__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__54541,map__54541__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__54555){
var vec__54556 = p__54555;
var seq__54557 = cljs.core.seq.call(null,vec__54556);
var first__54558 = cljs.core.first.call(null,seq__54557);
var seq__54557__$1 = cljs.core.next.call(null,seq__54557);
var map__54559 = first__54558;
var map__54559__$1 = ((((!((map__54559 == null)))?((((map__54559.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54559.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54559):map__54559);
var msg = map__54559__$1;
var msg_name = cljs.core.get.call(null,map__54559__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54557__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__54561){
var map__54573 = p__54561;
var map__54573__$1 = ((((!((map__54573 == null)))?((((map__54573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54573):map__54573);
var on_compile_warning = cljs.core.get.call(null,map__54573__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__54573__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__54573,map__54573__$1,on_compile_warning,on_compile_fail){
return (function (p__54575){
var vec__54576 = p__54575;
var seq__54577 = cljs.core.seq.call(null,vec__54576);
var first__54578 = cljs.core.first.call(null,seq__54577);
var seq__54577__$1 = cljs.core.next.call(null,seq__54577);
var map__54579 = first__54578;
var map__54579__$1 = ((((!((map__54579 == null)))?((((map__54579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54579):map__54579);
var msg = map__54579__$1;
var msg_name = cljs.core.get.call(null,map__54579__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54577__$1;
var pred__54581 = cljs.core._EQ_;
var expr__54582 = msg_name;
if(cljs.core.truth_(pred__54581.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__54582))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__54581.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__54582))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__54573,map__54573__$1,on_compile_warning,on_compile_fail))
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
var c__41620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto__,msg_hist,msg_names,msg){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto__,msg_hist,msg_names,msg){
return (function (state_54810){
var state_val_54811 = (state_54810[(1)]);
if((state_val_54811 === (7))){
var inst_54730 = (state_54810[(2)]);
var state_54810__$1 = state_54810;
if(cljs.core.truth_(inst_54730)){
var statearr_54812_54862 = state_54810__$1;
(statearr_54812_54862[(1)] = (8));

} else {
var statearr_54813_54863 = state_54810__$1;
(statearr_54813_54863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54811 === (20))){
var inst_54804 = (state_54810[(2)]);
var state_54810__$1 = state_54810;
var statearr_54814_54864 = state_54810__$1;
(statearr_54814_54864[(2)] = inst_54804);

(statearr_54814_54864[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54811 === (27))){
var inst_54800 = (state_54810[(2)]);
var state_54810__$1 = state_54810;
var statearr_54815_54865 = state_54810__$1;
(statearr_54815_54865[(2)] = inst_54800);

(statearr_54815_54865[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54811 === (1))){
var inst_54723 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_54810__$1 = state_54810;
if(cljs.core.truth_(inst_54723)){
var statearr_54816_54866 = state_54810__$1;
(statearr_54816_54866[(1)] = (2));

} else {
var statearr_54817_54867 = state_54810__$1;
(statearr_54817_54867[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54811 === (24))){
var inst_54802 = (state_54810[(2)]);
var state_54810__$1 = state_54810;
var statearr_54818_54868 = state_54810__$1;
(statearr_54818_54868[(2)] = inst_54802);

(statearr_54818_54868[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54811 === (4))){
var inst_54808 = (state_54810[(2)]);
var state_54810__$1 = state_54810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54810__$1,inst_54808);
} else {
if((state_val_54811 === (15))){
var inst_54806 = (state_54810[(2)]);
var state_54810__$1 = state_54810;
var statearr_54819_54869 = state_54810__$1;
(statearr_54819_54869[(2)] = inst_54806);

(statearr_54819_54869[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54811 === (21))){
var inst_54759 = (state_54810[(2)]);
var inst_54760 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54761 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54760);
var state_54810__$1 = (function (){var statearr_54820 = state_54810;
(statearr_54820[(7)] = inst_54759);

return statearr_54820;
})();
var statearr_54821_54870 = state_54810__$1;
(statearr_54821_54870[(2)] = inst_54761);

(statearr_54821_54870[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54811 === (31))){
var inst_54789 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_54810__$1 = state_54810;
if(cljs.core.truth_(inst_54789)){
var statearr_54822_54871 = state_54810__$1;
(statearr_54822_54871[(1)] = (34));

} else {
var statearr_54823_54872 = state_54810__$1;
(statearr_54823_54872[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54811 === (32))){
var inst_54798 = (state_54810[(2)]);
var state_54810__$1 = state_54810;
var statearr_54824_54873 = state_54810__$1;
(statearr_54824_54873[(2)] = inst_54798);

(statearr_54824_54873[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54811 === (33))){
var inst_54785 = (state_54810[(2)]);
var inst_54786 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54787 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54786);
var state_54810__$1 = (function (){var statearr_54825 = state_54810;
(statearr_54825[(8)] = inst_54785);

return statearr_54825;
})();
var statearr_54826_54874 = state_54810__$1;
(statearr_54826_54874[(2)] = inst_54787);

(statearr_54826_54874[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54811 === (13))){
var inst_54744 = figwheel.client.heads_up.clear.call(null);
var state_54810__$1 = state_54810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54810__$1,(16),inst_54744);
} else {
if((state_val_54811 === (22))){
var inst_54765 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54766 = figwheel.client.heads_up.append_warning_message.call(null,inst_54765);
var state_54810__$1 = state_54810;
var statearr_54827_54875 = state_54810__$1;
(statearr_54827_54875[(2)] = inst_54766);

(statearr_54827_54875[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54811 === (36))){
var inst_54796 = (state_54810[(2)]);
var state_54810__$1 = state_54810;
var statearr_54828_54876 = state_54810__$1;
(statearr_54828_54876[(2)] = inst_54796);

(statearr_54828_54876[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54811 === (29))){
var inst_54776 = (state_54810[(2)]);
var inst_54777 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54778 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54777);
var state_54810__$1 = (function (){var statearr_54829 = state_54810;
(statearr_54829[(9)] = inst_54776);

return statearr_54829;
})();
var statearr_54830_54877 = state_54810__$1;
(statearr_54830_54877[(2)] = inst_54778);

(statearr_54830_54877[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54811 === (6))){
var inst_54725 = (state_54810[(10)]);
var state_54810__$1 = state_54810;
var statearr_54831_54878 = state_54810__$1;
(statearr_54831_54878[(2)] = inst_54725);

(statearr_54831_54878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54811 === (28))){
var inst_54772 = (state_54810[(2)]);
var inst_54773 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54774 = figwheel.client.heads_up.display_warning.call(null,inst_54773);
var state_54810__$1 = (function (){var statearr_54832 = state_54810;
(statearr_54832[(11)] = inst_54772);

return statearr_54832;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54810__$1,(29),inst_54774);
} else {
if((state_val_54811 === (25))){
var inst_54770 = figwheel.client.heads_up.clear.call(null);
var state_54810__$1 = state_54810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54810__$1,(28),inst_54770);
} else {
if((state_val_54811 === (34))){
var inst_54791 = figwheel.client.heads_up.flash_loaded.call(null);
var state_54810__$1 = state_54810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54810__$1,(37),inst_54791);
} else {
if((state_val_54811 === (17))){
var inst_54750 = (state_54810[(2)]);
var inst_54751 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54752 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54751);
var state_54810__$1 = (function (){var statearr_54833 = state_54810;
(statearr_54833[(12)] = inst_54750);

return statearr_54833;
})();
var statearr_54834_54879 = state_54810__$1;
(statearr_54834_54879[(2)] = inst_54752);

(statearr_54834_54879[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54811 === (3))){
var inst_54742 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_54810__$1 = state_54810;
if(cljs.core.truth_(inst_54742)){
var statearr_54835_54880 = state_54810__$1;
(statearr_54835_54880[(1)] = (13));

} else {
var statearr_54836_54881 = state_54810__$1;
(statearr_54836_54881[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54811 === (12))){
var inst_54738 = (state_54810[(2)]);
var state_54810__$1 = state_54810;
var statearr_54837_54882 = state_54810__$1;
(statearr_54837_54882[(2)] = inst_54738);

(statearr_54837_54882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54811 === (2))){
var inst_54725 = (state_54810[(10)]);
var inst_54725__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_54810__$1 = (function (){var statearr_54838 = state_54810;
(statearr_54838[(10)] = inst_54725__$1);

return statearr_54838;
})();
if(cljs.core.truth_(inst_54725__$1)){
var statearr_54839_54883 = state_54810__$1;
(statearr_54839_54883[(1)] = (5));

} else {
var statearr_54840_54884 = state_54810__$1;
(statearr_54840_54884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54811 === (23))){
var inst_54768 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_54810__$1 = state_54810;
if(cljs.core.truth_(inst_54768)){
var statearr_54841_54885 = state_54810__$1;
(statearr_54841_54885[(1)] = (25));

} else {
var statearr_54842_54886 = state_54810__$1;
(statearr_54842_54886[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54811 === (35))){
var state_54810__$1 = state_54810;
var statearr_54843_54887 = state_54810__$1;
(statearr_54843_54887[(2)] = null);

(statearr_54843_54887[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54811 === (19))){
var inst_54763 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_54810__$1 = state_54810;
if(cljs.core.truth_(inst_54763)){
var statearr_54844_54888 = state_54810__$1;
(statearr_54844_54888[(1)] = (22));

} else {
var statearr_54845_54889 = state_54810__$1;
(statearr_54845_54889[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54811 === (11))){
var inst_54734 = (state_54810[(2)]);
var state_54810__$1 = state_54810;
var statearr_54846_54890 = state_54810__$1;
(statearr_54846_54890[(2)] = inst_54734);

(statearr_54846_54890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54811 === (9))){
var inst_54736 = figwheel.client.heads_up.clear.call(null);
var state_54810__$1 = state_54810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54810__$1,(12),inst_54736);
} else {
if((state_val_54811 === (5))){
var inst_54727 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_54810__$1 = state_54810;
var statearr_54847_54891 = state_54810__$1;
(statearr_54847_54891[(2)] = inst_54727);

(statearr_54847_54891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54811 === (14))){
var inst_54754 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_54810__$1 = state_54810;
if(cljs.core.truth_(inst_54754)){
var statearr_54848_54892 = state_54810__$1;
(statearr_54848_54892[(1)] = (18));

} else {
var statearr_54849_54893 = state_54810__$1;
(statearr_54849_54893[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54811 === (26))){
var inst_54780 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_54810__$1 = state_54810;
if(cljs.core.truth_(inst_54780)){
var statearr_54850_54894 = state_54810__$1;
(statearr_54850_54894[(1)] = (30));

} else {
var statearr_54851_54895 = state_54810__$1;
(statearr_54851_54895[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54811 === (16))){
var inst_54746 = (state_54810[(2)]);
var inst_54747 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54748 = figwheel.client.heads_up.display_exception.call(null,inst_54747);
var state_54810__$1 = (function (){var statearr_54852 = state_54810;
(statearr_54852[(13)] = inst_54746);

return statearr_54852;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54810__$1,(17),inst_54748);
} else {
if((state_val_54811 === (30))){
var inst_54782 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54783 = figwheel.client.heads_up.display_warning.call(null,inst_54782);
var state_54810__$1 = state_54810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54810__$1,(33),inst_54783);
} else {
if((state_val_54811 === (10))){
var inst_54740 = (state_54810[(2)]);
var state_54810__$1 = state_54810;
var statearr_54853_54896 = state_54810__$1;
(statearr_54853_54896[(2)] = inst_54740);

(statearr_54853_54896[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54811 === (18))){
var inst_54756 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54757 = figwheel.client.heads_up.display_exception.call(null,inst_54756);
var state_54810__$1 = state_54810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54810__$1,(21),inst_54757);
} else {
if((state_val_54811 === (37))){
var inst_54793 = (state_54810[(2)]);
var state_54810__$1 = state_54810;
var statearr_54854_54897 = state_54810__$1;
(statearr_54854_54897[(2)] = inst_54793);

(statearr_54854_54897[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54811 === (8))){
var inst_54732 = figwheel.client.heads_up.flash_loaded.call(null);
var state_54810__$1 = state_54810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54810__$1,(11),inst_54732);
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
});})(c__41620__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__41458__auto__,c__41620__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41459__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41459__auto____0 = (function (){
var statearr_54858 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54858[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41459__auto__);

(statearr_54858[(1)] = (1));

return statearr_54858;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41459__auto____1 = (function (state_54810){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_54810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e54859){if((e54859 instanceof Object)){
var ex__41462__auto__ = e54859;
var statearr_54860_54898 = state_54810;
(statearr_54860_54898[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54899 = state_54810;
state_54810 = G__54899;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41459__auto__ = function(state_54810){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41459__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41459__auto____1.call(this,state_54810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41459__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41459__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto__,msg_hist,msg_names,msg))
})();
var state__41622__auto__ = (function (){var statearr_54861 = f__41621__auto__.call(null);
(statearr_54861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto__);

return statearr_54861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto__,msg_hist,msg_names,msg))
);

return c__41620__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__41620__auto___54962 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto___54962,ch){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto___54962,ch){
return (function (state_54945){
var state_val_54946 = (state_54945[(1)]);
if((state_val_54946 === (1))){
var state_54945__$1 = state_54945;
var statearr_54947_54963 = state_54945__$1;
(statearr_54947_54963[(2)] = null);

(statearr_54947_54963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54946 === (2))){
var state_54945__$1 = state_54945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54945__$1,(4),ch);
} else {
if((state_val_54946 === (3))){
var inst_54943 = (state_54945[(2)]);
var state_54945__$1 = state_54945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54945__$1,inst_54943);
} else {
if((state_val_54946 === (4))){
var inst_54933 = (state_54945[(7)]);
var inst_54933__$1 = (state_54945[(2)]);
var state_54945__$1 = (function (){var statearr_54948 = state_54945;
(statearr_54948[(7)] = inst_54933__$1);

return statearr_54948;
})();
if(cljs.core.truth_(inst_54933__$1)){
var statearr_54949_54964 = state_54945__$1;
(statearr_54949_54964[(1)] = (5));

} else {
var statearr_54950_54965 = state_54945__$1;
(statearr_54950_54965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54946 === (5))){
var inst_54933 = (state_54945[(7)]);
var inst_54935 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_54933);
var state_54945__$1 = state_54945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54945__$1,(8),inst_54935);
} else {
if((state_val_54946 === (6))){
var state_54945__$1 = state_54945;
var statearr_54951_54966 = state_54945__$1;
(statearr_54951_54966[(2)] = null);

(statearr_54951_54966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54946 === (7))){
var inst_54941 = (state_54945[(2)]);
var state_54945__$1 = state_54945;
var statearr_54952_54967 = state_54945__$1;
(statearr_54952_54967[(2)] = inst_54941);

(statearr_54952_54967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54946 === (8))){
var inst_54937 = (state_54945[(2)]);
var state_54945__$1 = (function (){var statearr_54953 = state_54945;
(statearr_54953[(8)] = inst_54937);

return statearr_54953;
})();
var statearr_54954_54968 = state_54945__$1;
(statearr_54954_54968[(2)] = null);

(statearr_54954_54968[(1)] = (2));


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
});})(c__41620__auto___54962,ch))
;
return ((function (switch__41458__auto__,c__41620__auto___54962,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__41459__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__41459__auto____0 = (function (){
var statearr_54958 = [null,null,null,null,null,null,null,null,null];
(statearr_54958[(0)] = figwheel$client$heads_up_plugin_$_state_machine__41459__auto__);

(statearr_54958[(1)] = (1));

return statearr_54958;
});
var figwheel$client$heads_up_plugin_$_state_machine__41459__auto____1 = (function (state_54945){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_54945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e54959){if((e54959 instanceof Object)){
var ex__41462__auto__ = e54959;
var statearr_54960_54969 = state_54945;
(statearr_54960_54969[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54970 = state_54945;
state_54945 = G__54970;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__41459__auto__ = function(state_54945){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__41459__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__41459__auto____1.call(this,state_54945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__41459__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__41459__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto___54962,ch))
})();
var state__41622__auto__ = (function (){var statearr_54961 = f__41621__auto__.call(null);
(statearr_54961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto___54962);

return statearr_54961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto___54962,ch))
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
var c__41620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto__){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto__){
return (function (state_54991){
var state_val_54992 = (state_54991[(1)]);
if((state_val_54992 === (1))){
var inst_54986 = cljs.core.async.timeout.call(null,(3000));
var state_54991__$1 = state_54991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54991__$1,(2),inst_54986);
} else {
if((state_val_54992 === (2))){
var inst_54988 = (state_54991[(2)]);
var inst_54989 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_54991__$1 = (function (){var statearr_54993 = state_54991;
(statearr_54993[(7)] = inst_54988);

return statearr_54993;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54991__$1,inst_54989);
} else {
return null;
}
}
});})(c__41620__auto__))
;
return ((function (switch__41458__auto__,c__41620__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__41459__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__41459__auto____0 = (function (){
var statearr_54997 = [null,null,null,null,null,null,null,null];
(statearr_54997[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__41459__auto__);

(statearr_54997[(1)] = (1));

return statearr_54997;
});
var figwheel$client$enforce_project_plugin_$_state_machine__41459__auto____1 = (function (state_54991){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_54991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e54998){if((e54998 instanceof Object)){
var ex__41462__auto__ = e54998;
var statearr_54999_55001 = state_54991;
(statearr_54999_55001[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55002 = state_54991;
state_54991 = G__55002;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__41459__auto__ = function(state_54991){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__41459__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__41459__auto____1.call(this,state_54991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__41459__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__41459__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto__))
})();
var state__41622__auto__ = (function (){var statearr_55000 = f__41621__auto__.call(null);
(statearr_55000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto__);

return statearr_55000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto__))
);

return c__41620__auto__;
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
var c__41620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto__,figwheel_version,temp__4657__auto__){
return (function (state_55025){
var state_val_55026 = (state_55025[(1)]);
if((state_val_55026 === (1))){
var inst_55019 = cljs.core.async.timeout.call(null,(2000));
var state_55025__$1 = state_55025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55025__$1,(2),inst_55019);
} else {
if((state_val_55026 === (2))){
var inst_55021 = (state_55025[(2)]);
var inst_55022 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_55023 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_55022);
var state_55025__$1 = (function (){var statearr_55027 = state_55025;
(statearr_55027[(7)] = inst_55021);

return statearr_55027;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55025__$1,inst_55023);
} else {
return null;
}
}
});})(c__41620__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__41458__auto__,c__41620__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41459__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41459__auto____0 = (function (){
var statearr_55031 = [null,null,null,null,null,null,null,null];
(statearr_55031[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41459__auto__);

(statearr_55031[(1)] = (1));

return statearr_55031;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41459__auto____1 = (function (state_55025){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_55025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e55032){if((e55032 instanceof Object)){
var ex__41462__auto__ = e55032;
var statearr_55033_55035 = state_55025;
(statearr_55033_55035[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55036 = state_55025;
state_55025 = G__55036;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41459__auto__ = function(state_55025){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41459__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41459__auto____1.call(this,state_55025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41459__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41459__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto__,figwheel_version,temp__4657__auto__))
})();
var state__41622__auto__ = (function (){var statearr_55034 = f__41621__auto__.call(null);
(statearr_55034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto__);

return statearr_55034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto__,figwheel_version,temp__4657__auto__))
);

return c__41620__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__55037){
var map__55041 = p__55037;
var map__55041__$1 = ((((!((map__55041 == null)))?((((map__55041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55041):map__55041);
var file = cljs.core.get.call(null,map__55041__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__55041__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__55041__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__55043 = "";
var G__55043__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__55043),cljs.core.str("file "),cljs.core.str(file)].join(''):G__55043);
var G__55043__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__55043__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__55043__$1);
if(cljs.core.truth_((function (){var and__36746__auto__ = line;
if(cljs.core.truth_(and__36746__auto__)){
return column;
} else {
return and__36746__auto__;
}
})())){
return [cljs.core.str(G__55043__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__55043__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__55044){
var map__55051 = p__55044;
var map__55051__$1 = ((((!((map__55051 == null)))?((((map__55051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55051):map__55051);
var ed = map__55051__$1;
var formatted_exception = cljs.core.get.call(null,map__55051__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__55051__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__55051__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__55053_55057 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__55054_55058 = null;
var count__55055_55059 = (0);
var i__55056_55060 = (0);
while(true){
if((i__55056_55060 < count__55055_55059)){
var msg_55061 = cljs.core._nth.call(null,chunk__55054_55058,i__55056_55060);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_55061);

var G__55062 = seq__55053_55057;
var G__55063 = chunk__55054_55058;
var G__55064 = count__55055_55059;
var G__55065 = (i__55056_55060 + (1));
seq__55053_55057 = G__55062;
chunk__55054_55058 = G__55063;
count__55055_55059 = G__55064;
i__55056_55060 = G__55065;
continue;
} else {
var temp__4657__auto___55066 = cljs.core.seq.call(null,seq__55053_55057);
if(temp__4657__auto___55066){
var seq__55053_55067__$1 = temp__4657__auto___55066;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55053_55067__$1)){
var c__37569__auto___55068 = cljs.core.chunk_first.call(null,seq__55053_55067__$1);
var G__55069 = cljs.core.chunk_rest.call(null,seq__55053_55067__$1);
var G__55070 = c__37569__auto___55068;
var G__55071 = cljs.core.count.call(null,c__37569__auto___55068);
var G__55072 = (0);
seq__55053_55057 = G__55069;
chunk__55054_55058 = G__55070;
count__55055_55059 = G__55071;
i__55056_55060 = G__55072;
continue;
} else {
var msg_55073 = cljs.core.first.call(null,seq__55053_55067__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_55073);

var G__55074 = cljs.core.next.call(null,seq__55053_55067__$1);
var G__55075 = null;
var G__55076 = (0);
var G__55077 = (0);
seq__55053_55057 = G__55074;
chunk__55054_55058 = G__55075;
count__55055_55059 = G__55076;
i__55056_55060 = G__55077;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__55078){
var map__55081 = p__55078;
var map__55081__$1 = ((((!((map__55081 == null)))?((((map__55081.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55081.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55081):map__55081);
var w = map__55081__$1;
var message = cljs.core.get.call(null,map__55081__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__36746__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__36746__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__36746__auto__;
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
var seq__55093 = cljs.core.seq.call(null,plugins);
var chunk__55094 = null;
var count__55095 = (0);
var i__55096 = (0);
while(true){
if((i__55096 < count__55095)){
var vec__55097 = cljs.core._nth.call(null,chunk__55094,i__55096);
var k = cljs.core.nth.call(null,vec__55097,(0),null);
var plugin = cljs.core.nth.call(null,vec__55097,(1),null);
if(cljs.core.truth_(plugin)){
var pl_55103 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__55093,chunk__55094,count__55095,i__55096,pl_55103,vec__55097,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_55103.call(null,msg_hist);
});})(seq__55093,chunk__55094,count__55095,i__55096,pl_55103,vec__55097,k,plugin))
);
} else {
}

var G__55104 = seq__55093;
var G__55105 = chunk__55094;
var G__55106 = count__55095;
var G__55107 = (i__55096 + (1));
seq__55093 = G__55104;
chunk__55094 = G__55105;
count__55095 = G__55106;
i__55096 = G__55107;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__55093);
if(temp__4657__auto__){
var seq__55093__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55093__$1)){
var c__37569__auto__ = cljs.core.chunk_first.call(null,seq__55093__$1);
var G__55108 = cljs.core.chunk_rest.call(null,seq__55093__$1);
var G__55109 = c__37569__auto__;
var G__55110 = cljs.core.count.call(null,c__37569__auto__);
var G__55111 = (0);
seq__55093 = G__55108;
chunk__55094 = G__55109;
count__55095 = G__55110;
i__55096 = G__55111;
continue;
} else {
var vec__55100 = cljs.core.first.call(null,seq__55093__$1);
var k = cljs.core.nth.call(null,vec__55100,(0),null);
var plugin = cljs.core.nth.call(null,vec__55100,(1),null);
if(cljs.core.truth_(plugin)){
var pl_55112 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__55093,chunk__55094,count__55095,i__55096,pl_55112,vec__55100,k,plugin,seq__55093__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_55112.call(null,msg_hist);
});})(seq__55093,chunk__55094,count__55095,i__55096,pl_55112,vec__55100,k,plugin,seq__55093__$1,temp__4657__auto__))
);
} else {
}

var G__55113 = cljs.core.next.call(null,seq__55093__$1);
var G__55114 = null;
var G__55115 = (0);
var G__55116 = (0);
seq__55093 = G__55113;
chunk__55094 = G__55114;
count__55095 = G__55115;
i__55096 = G__55116;
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
var args55117 = [];
var len__37833__auto___55124 = arguments.length;
var i__37834__auto___55125 = (0);
while(true){
if((i__37834__auto___55125 < len__37833__auto___55124)){
args55117.push((arguments[i__37834__auto___55125]));

var G__55126 = (i__37834__auto___55125 + (1));
i__37834__auto___55125 = G__55126;
continue;
} else {
}
break;
}

var G__55119 = args55117.length;
switch (G__55119) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55117.length)].join('')));

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

var seq__55120_55128 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__55121_55129 = null;
var count__55122_55130 = (0);
var i__55123_55131 = (0);
while(true){
if((i__55123_55131 < count__55122_55130)){
var msg_55132 = cljs.core._nth.call(null,chunk__55121_55129,i__55123_55131);
figwheel.client.socket.handle_incoming_message.call(null,msg_55132);

var G__55133 = seq__55120_55128;
var G__55134 = chunk__55121_55129;
var G__55135 = count__55122_55130;
var G__55136 = (i__55123_55131 + (1));
seq__55120_55128 = G__55133;
chunk__55121_55129 = G__55134;
count__55122_55130 = G__55135;
i__55123_55131 = G__55136;
continue;
} else {
var temp__4657__auto___55137 = cljs.core.seq.call(null,seq__55120_55128);
if(temp__4657__auto___55137){
var seq__55120_55138__$1 = temp__4657__auto___55137;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55120_55138__$1)){
var c__37569__auto___55139 = cljs.core.chunk_first.call(null,seq__55120_55138__$1);
var G__55140 = cljs.core.chunk_rest.call(null,seq__55120_55138__$1);
var G__55141 = c__37569__auto___55139;
var G__55142 = cljs.core.count.call(null,c__37569__auto___55139);
var G__55143 = (0);
seq__55120_55128 = G__55140;
chunk__55121_55129 = G__55141;
count__55122_55130 = G__55142;
i__55123_55131 = G__55143;
continue;
} else {
var msg_55144 = cljs.core.first.call(null,seq__55120_55138__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_55144);

var G__55145 = cljs.core.next.call(null,seq__55120_55138__$1);
var G__55146 = null;
var G__55147 = (0);
var G__55148 = (0);
seq__55120_55128 = G__55145;
chunk__55121_55129 = G__55146;
count__55122_55130 = G__55147;
i__55123_55131 = G__55148;
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
var args__37840__auto__ = [];
var len__37833__auto___55153 = arguments.length;
var i__37834__auto___55154 = (0);
while(true){
if((i__37834__auto___55154 < len__37833__auto___55153)){
args__37840__auto__.push((arguments[i__37834__auto___55154]));

var G__55155 = (i__37834__auto___55154 + (1));
i__37834__auto___55154 = G__55155;
continue;
} else {
}
break;
}

var argseq__37841__auto__ = ((((0) < args__37840__auto__.length))?(new cljs.core.IndexedSeq(args__37840__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__37841__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__55150){
var map__55151 = p__55150;
var map__55151__$1 = ((((!((map__55151 == null)))?((((map__55151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55151):map__55151);
var opts = map__55151__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq55149){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55149));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e55157){if((e55157 instanceof Error)){
var e = e55157;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e55157;

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
return (function (p__55161){
var map__55162 = p__55161;
var map__55162__$1 = ((((!((map__55162 == null)))?((((map__55162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55162):map__55162);
var msg_name = cljs.core.get.call(null,map__55162__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map