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
var args54332 = [];
var len__37879__auto___54335 = arguments.length;
var i__37880__auto___54336 = (0);
while(true){
if((i__37880__auto___54336 < len__37879__auto___54335)){
args54332.push((arguments[i__37880__auto___54336]));

var G__54337 = (i__37880__auto___54336 + (1));
i__37880__auto___54336 = G__54337;
continue;
} else {
}
break;
}

var G__54334 = args54332.length;
switch (G__54334) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54332.length)].join('')));

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
var len__37879__auto___54340 = arguments.length;
var i__37880__auto___54341 = (0);
while(true){
if((i__37880__auto___54341 < len__37879__auto___54340)){
args__37886__auto__.push((arguments[i__37880__auto___54341]));

var G__54342 = (i__37880__auto___54341 + (1));
i__37880__auto___54341 = G__54342;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq54339){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54339));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__37886__auto__ = [];
var len__37879__auto___54344 = arguments.length;
var i__37880__auto___54345 = (0);
while(true){
if((i__37880__auto___54345 < len__37879__auto___54344)){
args__37886__auto__.push((arguments[i__37880__auto___54345]));

var G__54346 = (i__37880__auto___54345 + (1));
i__37880__auto___54345 = G__54346;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq54343){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54343));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__54347 = cljs.core._EQ_;
var expr__54348 = (function (){var or__36804__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e54351){if((e54351 instanceof Error)){
var e = e54351;
return false;
} else {
throw e54351;

}
}})();
if(cljs.core.truth_(or__36804__auto__)){
return or__36804__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__54347.call(null,"true",expr__54348))){
return true;
} else {
if(cljs.core.truth_(pred__54347.call(null,"false",expr__54348))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__54348)].join('')));
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
}catch (e54353){if((e54353 instanceof Error)){
var e = e54353;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e54353;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__54354){
var map__54357 = p__54354;
var map__54357__$1 = ((((!((map__54357 == null)))?((((map__54357.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54357.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54357):map__54357);
var message = cljs.core.get.call(null,map__54357__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__54357__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__40682__auto___54519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40682__auto___54519,ch){
return (function (){
var f__40683__auto__ = (function (){var switch__40570__auto__ = ((function (c__40682__auto___54519,ch){
return (function (state_54488){
var state_val_54489 = (state_54488[(1)]);
if((state_val_54489 === (7))){
var inst_54484 = (state_54488[(2)]);
var state_54488__$1 = state_54488;
var statearr_54490_54520 = state_54488__$1;
(statearr_54490_54520[(2)] = inst_54484);

(statearr_54490_54520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54489 === (1))){
var state_54488__$1 = state_54488;
var statearr_54491_54521 = state_54488__$1;
(statearr_54491_54521[(2)] = null);

(statearr_54491_54521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54489 === (4))){
var inst_54441 = (state_54488[(7)]);
var inst_54441__$1 = (state_54488[(2)]);
var state_54488__$1 = (function (){var statearr_54492 = state_54488;
(statearr_54492[(7)] = inst_54441__$1);

return statearr_54492;
})();
if(cljs.core.truth_(inst_54441__$1)){
var statearr_54493_54522 = state_54488__$1;
(statearr_54493_54522[(1)] = (5));

} else {
var statearr_54494_54523 = state_54488__$1;
(statearr_54494_54523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54489 === (15))){
var inst_54448 = (state_54488[(8)]);
var inst_54463 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_54448);
var inst_54464 = cljs.core.first.call(null,inst_54463);
var inst_54465 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_54464);
var inst_54466 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_54465)].join('');
var inst_54467 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_54466);
var state_54488__$1 = state_54488;
var statearr_54495_54524 = state_54488__$1;
(statearr_54495_54524[(2)] = inst_54467);

(statearr_54495_54524[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54489 === (13))){
var inst_54472 = (state_54488[(2)]);
var state_54488__$1 = state_54488;
var statearr_54496_54525 = state_54488__$1;
(statearr_54496_54525[(2)] = inst_54472);

(statearr_54496_54525[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54489 === (6))){
var state_54488__$1 = state_54488;
var statearr_54497_54526 = state_54488__$1;
(statearr_54497_54526[(2)] = null);

(statearr_54497_54526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54489 === (17))){
var inst_54470 = (state_54488[(2)]);
var state_54488__$1 = state_54488;
var statearr_54498_54527 = state_54488__$1;
(statearr_54498_54527[(2)] = inst_54470);

(statearr_54498_54527[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54489 === (3))){
var inst_54486 = (state_54488[(2)]);
var state_54488__$1 = state_54488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54488__$1,inst_54486);
} else {
if((state_val_54489 === (12))){
var inst_54447 = (state_54488[(9)]);
var inst_54461 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_54447,opts);
var state_54488__$1 = state_54488;
if(cljs.core.truth_(inst_54461)){
var statearr_54499_54528 = state_54488__$1;
(statearr_54499_54528[(1)] = (15));

} else {
var statearr_54500_54529 = state_54488__$1;
(statearr_54500_54529[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54489 === (2))){
var state_54488__$1 = state_54488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54488__$1,(4),ch);
} else {
if((state_val_54489 === (11))){
var inst_54448 = (state_54488[(8)]);
var inst_54453 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54454 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_54448);
var inst_54455 = cljs.core.async.timeout.call(null,(1000));
var inst_54456 = [inst_54454,inst_54455];
var inst_54457 = (new cljs.core.PersistentVector(null,2,(5),inst_54453,inst_54456,null));
var state_54488__$1 = state_54488;
return cljs.core.async.ioc_alts_BANG_.call(null,state_54488__$1,(14),inst_54457);
} else {
if((state_val_54489 === (9))){
var inst_54448 = (state_54488[(8)]);
var inst_54474 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_54475 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_54448);
var inst_54476 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_54475);
var inst_54477 = [cljs.core.str("Not loading: "),cljs.core.str(inst_54476)].join('');
var inst_54478 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_54477);
var state_54488__$1 = (function (){var statearr_54501 = state_54488;
(statearr_54501[(10)] = inst_54474);

return statearr_54501;
})();
var statearr_54502_54530 = state_54488__$1;
(statearr_54502_54530[(2)] = inst_54478);

(statearr_54502_54530[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54489 === (5))){
var inst_54441 = (state_54488[(7)]);
var inst_54443 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_54444 = (new cljs.core.PersistentArrayMap(null,2,inst_54443,null));
var inst_54445 = (new cljs.core.PersistentHashSet(null,inst_54444,null));
var inst_54446 = figwheel.client.focus_msgs.call(null,inst_54445,inst_54441);
var inst_54447 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_54446);
var inst_54448 = cljs.core.first.call(null,inst_54446);
var inst_54449 = figwheel.client.autoload_QMARK_.call(null);
var state_54488__$1 = (function (){var statearr_54503 = state_54488;
(statearr_54503[(9)] = inst_54447);

(statearr_54503[(8)] = inst_54448);

return statearr_54503;
})();
if(cljs.core.truth_(inst_54449)){
var statearr_54504_54531 = state_54488__$1;
(statearr_54504_54531[(1)] = (8));

} else {
var statearr_54505_54532 = state_54488__$1;
(statearr_54505_54532[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54489 === (14))){
var inst_54459 = (state_54488[(2)]);
var state_54488__$1 = state_54488;
var statearr_54506_54533 = state_54488__$1;
(statearr_54506_54533[(2)] = inst_54459);

(statearr_54506_54533[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54489 === (16))){
var state_54488__$1 = state_54488;
var statearr_54507_54534 = state_54488__$1;
(statearr_54507_54534[(2)] = null);

(statearr_54507_54534[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54489 === (10))){
var inst_54480 = (state_54488[(2)]);
var state_54488__$1 = (function (){var statearr_54508 = state_54488;
(statearr_54508[(11)] = inst_54480);

return statearr_54508;
})();
var statearr_54509_54535 = state_54488__$1;
(statearr_54509_54535[(2)] = null);

(statearr_54509_54535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54489 === (8))){
var inst_54447 = (state_54488[(9)]);
var inst_54451 = figwheel.client.reload_file_state_QMARK_.call(null,inst_54447,opts);
var state_54488__$1 = state_54488;
if(cljs.core.truth_(inst_54451)){
var statearr_54510_54536 = state_54488__$1;
(statearr_54510_54536[(1)] = (11));

} else {
var statearr_54511_54537 = state_54488__$1;
(statearr_54511_54537[(1)] = (12));

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
});})(c__40682__auto___54519,ch))
;
return ((function (switch__40570__auto__,c__40682__auto___54519,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__40571__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__40571__auto____0 = (function (){
var statearr_54515 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54515[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__40571__auto__);

(statearr_54515[(1)] = (1));

return statearr_54515;
});
var figwheel$client$file_reloader_plugin_$_state_machine__40571__auto____1 = (function (state_54488){
while(true){
var ret_value__40572__auto__ = (function (){try{while(true){
var result__40573__auto__ = switch__40570__auto__.call(null,state_54488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40573__auto__;
}
break;
}
}catch (e54516){if((e54516 instanceof Object)){
var ex__40574__auto__ = e54516;
var statearr_54517_54538 = state_54488;
(statearr_54517_54538[(5)] = ex__40574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54539 = state_54488;
state_54488 = G__54539;
continue;
} else {
return ret_value__40572__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__40571__auto__ = function(state_54488){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__40571__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__40571__auto____1.call(this,state_54488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__40571__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__40571__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__40571__auto__;
})()
;})(switch__40570__auto__,c__40682__auto___54519,ch))
})();
var state__40684__auto__ = (function (){var statearr_54518 = f__40683__auto__.call(null);
(statearr_54518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40682__auto___54519);

return statearr_54518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40684__auto__);
});})(c__40682__auto___54519,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__54540_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__54540_SHARP_));
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
var base_path_54543 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_54543){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e54542){if((e54542 instanceof Error)){
var e = e54542;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_54543], null));
} else {
var e = e54542;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_54543))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__54544){
var map__54553 = p__54544;
var map__54553__$1 = ((((!((map__54553 == null)))?((((map__54553.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54553.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54553):map__54553);
var opts = map__54553__$1;
var build_id = cljs.core.get.call(null,map__54553__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__54553,map__54553__$1,opts,build_id){
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
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__54556,seq__54557,first__54558,seq__54557__$1,map__54559,map__54559__$1,msg,msg_name,_,map__54553,map__54553__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__54556,seq__54557,first__54558,seq__54557__$1,map__54559,map__54559__$1,msg,msg_name,_,map__54553,map__54553__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__54553,map__54553__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__54567){
var vec__54568 = p__54567;
var seq__54569 = cljs.core.seq.call(null,vec__54568);
var first__54570 = cljs.core.first.call(null,seq__54569);
var seq__54569__$1 = cljs.core.next.call(null,seq__54569);
var map__54571 = first__54570;
var map__54571__$1 = ((((!((map__54571 == null)))?((((map__54571.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54571.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54571):map__54571);
var msg = map__54571__$1;
var msg_name = cljs.core.get.call(null,map__54571__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54569__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__54573){
var map__54585 = p__54573;
var map__54585__$1 = ((((!((map__54585 == null)))?((((map__54585.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54585.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54585):map__54585);
var on_compile_warning = cljs.core.get.call(null,map__54585__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__54585__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__54585,map__54585__$1,on_compile_warning,on_compile_fail){
return (function (p__54587){
var vec__54588 = p__54587;
var seq__54589 = cljs.core.seq.call(null,vec__54588);
var first__54590 = cljs.core.first.call(null,seq__54589);
var seq__54589__$1 = cljs.core.next.call(null,seq__54589);
var map__54591 = first__54590;
var map__54591__$1 = ((((!((map__54591 == null)))?((((map__54591.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54591.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54591):map__54591);
var msg = map__54591__$1;
var msg_name = cljs.core.get.call(null,map__54591__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54589__$1;
var pred__54593 = cljs.core._EQ_;
var expr__54594 = msg_name;
if(cljs.core.truth_(pred__54593.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__54594))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__54593.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__54594))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__54585,map__54585__$1,on_compile_warning,on_compile_fail))
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
var c__40682__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40682__auto__,msg_hist,msg_names,msg){
return (function (){
var f__40683__auto__ = (function (){var switch__40570__auto__ = ((function (c__40682__auto__,msg_hist,msg_names,msg){
return (function (state_54822){
var state_val_54823 = (state_54822[(1)]);
if((state_val_54823 === (7))){
var inst_54742 = (state_54822[(2)]);
var state_54822__$1 = state_54822;
if(cljs.core.truth_(inst_54742)){
var statearr_54824_54874 = state_54822__$1;
(statearr_54824_54874[(1)] = (8));

} else {
var statearr_54825_54875 = state_54822__$1;
(statearr_54825_54875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54823 === (20))){
var inst_54816 = (state_54822[(2)]);
var state_54822__$1 = state_54822;
var statearr_54826_54876 = state_54822__$1;
(statearr_54826_54876[(2)] = inst_54816);

(statearr_54826_54876[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54823 === (27))){
var inst_54812 = (state_54822[(2)]);
var state_54822__$1 = state_54822;
var statearr_54827_54877 = state_54822__$1;
(statearr_54827_54877[(2)] = inst_54812);

(statearr_54827_54877[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54823 === (1))){
var inst_54735 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_54822__$1 = state_54822;
if(cljs.core.truth_(inst_54735)){
var statearr_54828_54878 = state_54822__$1;
(statearr_54828_54878[(1)] = (2));

} else {
var statearr_54829_54879 = state_54822__$1;
(statearr_54829_54879[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54823 === (24))){
var inst_54814 = (state_54822[(2)]);
var state_54822__$1 = state_54822;
var statearr_54830_54880 = state_54822__$1;
(statearr_54830_54880[(2)] = inst_54814);

(statearr_54830_54880[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54823 === (4))){
var inst_54820 = (state_54822[(2)]);
var state_54822__$1 = state_54822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54822__$1,inst_54820);
} else {
if((state_val_54823 === (15))){
var inst_54818 = (state_54822[(2)]);
var state_54822__$1 = state_54822;
var statearr_54831_54881 = state_54822__$1;
(statearr_54831_54881[(2)] = inst_54818);

(statearr_54831_54881[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54823 === (21))){
var inst_54771 = (state_54822[(2)]);
var inst_54772 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54773 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54772);
var state_54822__$1 = (function (){var statearr_54832 = state_54822;
(statearr_54832[(7)] = inst_54771);

return statearr_54832;
})();
var statearr_54833_54882 = state_54822__$1;
(statearr_54833_54882[(2)] = inst_54773);

(statearr_54833_54882[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54823 === (31))){
var inst_54801 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_54822__$1 = state_54822;
if(cljs.core.truth_(inst_54801)){
var statearr_54834_54883 = state_54822__$1;
(statearr_54834_54883[(1)] = (34));

} else {
var statearr_54835_54884 = state_54822__$1;
(statearr_54835_54884[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54823 === (32))){
var inst_54810 = (state_54822[(2)]);
var state_54822__$1 = state_54822;
var statearr_54836_54885 = state_54822__$1;
(statearr_54836_54885[(2)] = inst_54810);

(statearr_54836_54885[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54823 === (33))){
var inst_54797 = (state_54822[(2)]);
var inst_54798 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54799 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54798);
var state_54822__$1 = (function (){var statearr_54837 = state_54822;
(statearr_54837[(8)] = inst_54797);

return statearr_54837;
})();
var statearr_54838_54886 = state_54822__$1;
(statearr_54838_54886[(2)] = inst_54799);

(statearr_54838_54886[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54823 === (13))){
var inst_54756 = figwheel.client.heads_up.clear.call(null);
var state_54822__$1 = state_54822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54822__$1,(16),inst_54756);
} else {
if((state_val_54823 === (22))){
var inst_54777 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54778 = figwheel.client.heads_up.append_warning_message.call(null,inst_54777);
var state_54822__$1 = state_54822;
var statearr_54839_54887 = state_54822__$1;
(statearr_54839_54887[(2)] = inst_54778);

(statearr_54839_54887[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54823 === (36))){
var inst_54808 = (state_54822[(2)]);
var state_54822__$1 = state_54822;
var statearr_54840_54888 = state_54822__$1;
(statearr_54840_54888[(2)] = inst_54808);

(statearr_54840_54888[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54823 === (29))){
var inst_54788 = (state_54822[(2)]);
var inst_54789 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54790 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54789);
var state_54822__$1 = (function (){var statearr_54841 = state_54822;
(statearr_54841[(9)] = inst_54788);

return statearr_54841;
})();
var statearr_54842_54889 = state_54822__$1;
(statearr_54842_54889[(2)] = inst_54790);

(statearr_54842_54889[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54823 === (6))){
var inst_54737 = (state_54822[(10)]);
var state_54822__$1 = state_54822;
var statearr_54843_54890 = state_54822__$1;
(statearr_54843_54890[(2)] = inst_54737);

(statearr_54843_54890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54823 === (28))){
var inst_54784 = (state_54822[(2)]);
var inst_54785 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54786 = figwheel.client.heads_up.display_warning.call(null,inst_54785);
var state_54822__$1 = (function (){var statearr_54844 = state_54822;
(statearr_54844[(11)] = inst_54784);

return statearr_54844;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54822__$1,(29),inst_54786);
} else {
if((state_val_54823 === (25))){
var inst_54782 = figwheel.client.heads_up.clear.call(null);
var state_54822__$1 = state_54822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54822__$1,(28),inst_54782);
} else {
if((state_val_54823 === (34))){
var inst_54803 = figwheel.client.heads_up.flash_loaded.call(null);
var state_54822__$1 = state_54822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54822__$1,(37),inst_54803);
} else {
if((state_val_54823 === (17))){
var inst_54762 = (state_54822[(2)]);
var inst_54763 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54764 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54763);
var state_54822__$1 = (function (){var statearr_54845 = state_54822;
(statearr_54845[(12)] = inst_54762);

return statearr_54845;
})();
var statearr_54846_54891 = state_54822__$1;
(statearr_54846_54891[(2)] = inst_54764);

(statearr_54846_54891[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54823 === (3))){
var inst_54754 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_54822__$1 = state_54822;
if(cljs.core.truth_(inst_54754)){
var statearr_54847_54892 = state_54822__$1;
(statearr_54847_54892[(1)] = (13));

} else {
var statearr_54848_54893 = state_54822__$1;
(statearr_54848_54893[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54823 === (12))){
var inst_54750 = (state_54822[(2)]);
var state_54822__$1 = state_54822;
var statearr_54849_54894 = state_54822__$1;
(statearr_54849_54894[(2)] = inst_54750);

(statearr_54849_54894[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54823 === (2))){
var inst_54737 = (state_54822[(10)]);
var inst_54737__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_54822__$1 = (function (){var statearr_54850 = state_54822;
(statearr_54850[(10)] = inst_54737__$1);

return statearr_54850;
})();
if(cljs.core.truth_(inst_54737__$1)){
var statearr_54851_54895 = state_54822__$1;
(statearr_54851_54895[(1)] = (5));

} else {
var statearr_54852_54896 = state_54822__$1;
(statearr_54852_54896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54823 === (23))){
var inst_54780 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_54822__$1 = state_54822;
if(cljs.core.truth_(inst_54780)){
var statearr_54853_54897 = state_54822__$1;
(statearr_54853_54897[(1)] = (25));

} else {
var statearr_54854_54898 = state_54822__$1;
(statearr_54854_54898[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54823 === (35))){
var state_54822__$1 = state_54822;
var statearr_54855_54899 = state_54822__$1;
(statearr_54855_54899[(2)] = null);

(statearr_54855_54899[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54823 === (19))){
var inst_54775 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_54822__$1 = state_54822;
if(cljs.core.truth_(inst_54775)){
var statearr_54856_54900 = state_54822__$1;
(statearr_54856_54900[(1)] = (22));

} else {
var statearr_54857_54901 = state_54822__$1;
(statearr_54857_54901[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54823 === (11))){
var inst_54746 = (state_54822[(2)]);
var state_54822__$1 = state_54822;
var statearr_54858_54902 = state_54822__$1;
(statearr_54858_54902[(2)] = inst_54746);

(statearr_54858_54902[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54823 === (9))){
var inst_54748 = figwheel.client.heads_up.clear.call(null);
var state_54822__$1 = state_54822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54822__$1,(12),inst_54748);
} else {
if((state_val_54823 === (5))){
var inst_54739 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_54822__$1 = state_54822;
var statearr_54859_54903 = state_54822__$1;
(statearr_54859_54903[(2)] = inst_54739);

(statearr_54859_54903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54823 === (14))){
var inst_54766 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_54822__$1 = state_54822;
if(cljs.core.truth_(inst_54766)){
var statearr_54860_54904 = state_54822__$1;
(statearr_54860_54904[(1)] = (18));

} else {
var statearr_54861_54905 = state_54822__$1;
(statearr_54861_54905[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54823 === (26))){
var inst_54792 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_54822__$1 = state_54822;
if(cljs.core.truth_(inst_54792)){
var statearr_54862_54906 = state_54822__$1;
(statearr_54862_54906[(1)] = (30));

} else {
var statearr_54863_54907 = state_54822__$1;
(statearr_54863_54907[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54823 === (16))){
var inst_54758 = (state_54822[(2)]);
var inst_54759 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54760 = figwheel.client.heads_up.display_exception.call(null,inst_54759);
var state_54822__$1 = (function (){var statearr_54864 = state_54822;
(statearr_54864[(13)] = inst_54758);

return statearr_54864;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54822__$1,(17),inst_54760);
} else {
if((state_val_54823 === (30))){
var inst_54794 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54795 = figwheel.client.heads_up.display_warning.call(null,inst_54794);
var state_54822__$1 = state_54822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54822__$1,(33),inst_54795);
} else {
if((state_val_54823 === (10))){
var inst_54752 = (state_54822[(2)]);
var state_54822__$1 = state_54822;
var statearr_54865_54908 = state_54822__$1;
(statearr_54865_54908[(2)] = inst_54752);

(statearr_54865_54908[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54823 === (18))){
var inst_54768 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54769 = figwheel.client.heads_up.display_exception.call(null,inst_54768);
var state_54822__$1 = state_54822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54822__$1,(21),inst_54769);
} else {
if((state_val_54823 === (37))){
var inst_54805 = (state_54822[(2)]);
var state_54822__$1 = state_54822;
var statearr_54866_54909 = state_54822__$1;
(statearr_54866_54909[(2)] = inst_54805);

(statearr_54866_54909[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54823 === (8))){
var inst_54744 = figwheel.client.heads_up.flash_loaded.call(null);
var state_54822__$1 = state_54822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54822__$1,(11),inst_54744);
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
});})(c__40682__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__40570__auto__,c__40682__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40571__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40571__auto____0 = (function (){
var statearr_54870 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54870[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40571__auto__);

(statearr_54870[(1)] = (1));

return statearr_54870;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40571__auto____1 = (function (state_54822){
while(true){
var ret_value__40572__auto__ = (function (){try{while(true){
var result__40573__auto__ = switch__40570__auto__.call(null,state_54822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40573__auto__;
}
break;
}
}catch (e54871){if((e54871 instanceof Object)){
var ex__40574__auto__ = e54871;
var statearr_54872_54910 = state_54822;
(statearr_54872_54910[(5)] = ex__40574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54911 = state_54822;
state_54822 = G__54911;
continue;
} else {
return ret_value__40572__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40571__auto__ = function(state_54822){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40571__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40571__auto____1.call(this,state_54822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40571__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40571__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40571__auto__;
})()
;})(switch__40570__auto__,c__40682__auto__,msg_hist,msg_names,msg))
})();
var state__40684__auto__ = (function (){var statearr_54873 = f__40683__auto__.call(null);
(statearr_54873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40682__auto__);

return statearr_54873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40684__auto__);
});})(c__40682__auto__,msg_hist,msg_names,msg))
);

return c__40682__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__40682__auto___54974 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40682__auto___54974,ch){
return (function (){
var f__40683__auto__ = (function (){var switch__40570__auto__ = ((function (c__40682__auto___54974,ch){
return (function (state_54957){
var state_val_54958 = (state_54957[(1)]);
if((state_val_54958 === (1))){
var state_54957__$1 = state_54957;
var statearr_54959_54975 = state_54957__$1;
(statearr_54959_54975[(2)] = null);

(statearr_54959_54975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54958 === (2))){
var state_54957__$1 = state_54957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54957__$1,(4),ch);
} else {
if((state_val_54958 === (3))){
var inst_54955 = (state_54957[(2)]);
var state_54957__$1 = state_54957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54957__$1,inst_54955);
} else {
if((state_val_54958 === (4))){
var inst_54945 = (state_54957[(7)]);
var inst_54945__$1 = (state_54957[(2)]);
var state_54957__$1 = (function (){var statearr_54960 = state_54957;
(statearr_54960[(7)] = inst_54945__$1);

return statearr_54960;
})();
if(cljs.core.truth_(inst_54945__$1)){
var statearr_54961_54976 = state_54957__$1;
(statearr_54961_54976[(1)] = (5));

} else {
var statearr_54962_54977 = state_54957__$1;
(statearr_54962_54977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54958 === (5))){
var inst_54945 = (state_54957[(7)]);
var inst_54947 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_54945);
var state_54957__$1 = state_54957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54957__$1,(8),inst_54947);
} else {
if((state_val_54958 === (6))){
var state_54957__$1 = state_54957;
var statearr_54963_54978 = state_54957__$1;
(statearr_54963_54978[(2)] = null);

(statearr_54963_54978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54958 === (7))){
var inst_54953 = (state_54957[(2)]);
var state_54957__$1 = state_54957;
var statearr_54964_54979 = state_54957__$1;
(statearr_54964_54979[(2)] = inst_54953);

(statearr_54964_54979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54958 === (8))){
var inst_54949 = (state_54957[(2)]);
var state_54957__$1 = (function (){var statearr_54965 = state_54957;
(statearr_54965[(8)] = inst_54949);

return statearr_54965;
})();
var statearr_54966_54980 = state_54957__$1;
(statearr_54966_54980[(2)] = null);

(statearr_54966_54980[(1)] = (2));


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
});})(c__40682__auto___54974,ch))
;
return ((function (switch__40570__auto__,c__40682__auto___54974,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__40571__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__40571__auto____0 = (function (){
var statearr_54970 = [null,null,null,null,null,null,null,null,null];
(statearr_54970[(0)] = figwheel$client$heads_up_plugin_$_state_machine__40571__auto__);

(statearr_54970[(1)] = (1));

return statearr_54970;
});
var figwheel$client$heads_up_plugin_$_state_machine__40571__auto____1 = (function (state_54957){
while(true){
var ret_value__40572__auto__ = (function (){try{while(true){
var result__40573__auto__ = switch__40570__auto__.call(null,state_54957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40573__auto__;
}
break;
}
}catch (e54971){if((e54971 instanceof Object)){
var ex__40574__auto__ = e54971;
var statearr_54972_54981 = state_54957;
(statearr_54972_54981[(5)] = ex__40574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54982 = state_54957;
state_54957 = G__54982;
continue;
} else {
return ret_value__40572__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__40571__auto__ = function(state_54957){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__40571__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__40571__auto____1.call(this,state_54957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__40571__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__40571__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__40571__auto__;
})()
;})(switch__40570__auto__,c__40682__auto___54974,ch))
})();
var state__40684__auto__ = (function (){var statearr_54973 = f__40683__auto__.call(null);
(statearr_54973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40682__auto___54974);

return statearr_54973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40684__auto__);
});})(c__40682__auto___54974,ch))
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
var c__40682__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40682__auto__){
return (function (){
var f__40683__auto__ = (function (){var switch__40570__auto__ = ((function (c__40682__auto__){
return (function (state_55003){
var state_val_55004 = (state_55003[(1)]);
if((state_val_55004 === (1))){
var inst_54998 = cljs.core.async.timeout.call(null,(3000));
var state_55003__$1 = state_55003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55003__$1,(2),inst_54998);
} else {
if((state_val_55004 === (2))){
var inst_55000 = (state_55003[(2)]);
var inst_55001 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_55003__$1 = (function (){var statearr_55005 = state_55003;
(statearr_55005[(7)] = inst_55000);

return statearr_55005;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55003__$1,inst_55001);
} else {
return null;
}
}
});})(c__40682__auto__))
;
return ((function (switch__40570__auto__,c__40682__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__40571__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__40571__auto____0 = (function (){
var statearr_55009 = [null,null,null,null,null,null,null,null];
(statearr_55009[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__40571__auto__);

(statearr_55009[(1)] = (1));

return statearr_55009;
});
var figwheel$client$enforce_project_plugin_$_state_machine__40571__auto____1 = (function (state_55003){
while(true){
var ret_value__40572__auto__ = (function (){try{while(true){
var result__40573__auto__ = switch__40570__auto__.call(null,state_55003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40573__auto__;
}
break;
}
}catch (e55010){if((e55010 instanceof Object)){
var ex__40574__auto__ = e55010;
var statearr_55011_55013 = state_55003;
(statearr_55011_55013[(5)] = ex__40574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55014 = state_55003;
state_55003 = G__55014;
continue;
} else {
return ret_value__40572__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__40571__auto__ = function(state_55003){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__40571__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__40571__auto____1.call(this,state_55003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__40571__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__40571__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__40571__auto__;
})()
;})(switch__40570__auto__,c__40682__auto__))
})();
var state__40684__auto__ = (function (){var statearr_55012 = f__40683__auto__.call(null);
(statearr_55012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40682__auto__);

return statearr_55012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40684__auto__);
});})(c__40682__auto__))
);

return c__40682__auto__;
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
var c__40682__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40682__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__40683__auto__ = (function (){var switch__40570__auto__ = ((function (c__40682__auto__,figwheel_version,temp__4657__auto__){
return (function (state_55037){
var state_val_55038 = (state_55037[(1)]);
if((state_val_55038 === (1))){
var inst_55031 = cljs.core.async.timeout.call(null,(2000));
var state_55037__$1 = state_55037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55037__$1,(2),inst_55031);
} else {
if((state_val_55038 === (2))){
var inst_55033 = (state_55037[(2)]);
var inst_55034 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_55035 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_55034);
var state_55037__$1 = (function (){var statearr_55039 = state_55037;
(statearr_55039[(7)] = inst_55033);

return statearr_55039;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55037__$1,inst_55035);
} else {
return null;
}
}
});})(c__40682__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__40570__auto__,c__40682__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40571__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40571__auto____0 = (function (){
var statearr_55043 = [null,null,null,null,null,null,null,null];
(statearr_55043[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40571__auto__);

(statearr_55043[(1)] = (1));

return statearr_55043;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40571__auto____1 = (function (state_55037){
while(true){
var ret_value__40572__auto__ = (function (){try{while(true){
var result__40573__auto__ = switch__40570__auto__.call(null,state_55037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40573__auto__;
}
break;
}
}catch (e55044){if((e55044 instanceof Object)){
var ex__40574__auto__ = e55044;
var statearr_55045_55047 = state_55037;
(statearr_55045_55047[(5)] = ex__40574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55048 = state_55037;
state_55037 = G__55048;
continue;
} else {
return ret_value__40572__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40571__auto__ = function(state_55037){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40571__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40571__auto____1.call(this,state_55037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40571__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40571__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40571__auto__;
})()
;})(switch__40570__auto__,c__40682__auto__,figwheel_version,temp__4657__auto__))
})();
var state__40684__auto__ = (function (){var statearr_55046 = f__40683__auto__.call(null);
(statearr_55046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40682__auto__);

return statearr_55046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40684__auto__);
});})(c__40682__auto__,figwheel_version,temp__4657__auto__))
);

return c__40682__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__55049){
var map__55053 = p__55049;
var map__55053__$1 = ((((!((map__55053 == null)))?((((map__55053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55053):map__55053);
var file = cljs.core.get.call(null,map__55053__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__55053__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__55053__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__55055 = "";
var G__55055__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__55055),cljs.core.str("file "),cljs.core.str(file)].join(''):G__55055);
var G__55055__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__55055__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__55055__$1);
if(cljs.core.truth_((function (){var and__36792__auto__ = line;
if(cljs.core.truth_(and__36792__auto__)){
return column;
} else {
return and__36792__auto__;
}
})())){
return [cljs.core.str(G__55055__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__55055__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__55056){
var map__55063 = p__55056;
var map__55063__$1 = ((((!((map__55063 == null)))?((((map__55063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55063):map__55063);
var ed = map__55063__$1;
var formatted_exception = cljs.core.get.call(null,map__55063__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__55063__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__55063__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__55065_55069 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__55066_55070 = null;
var count__55067_55071 = (0);
var i__55068_55072 = (0);
while(true){
if((i__55068_55072 < count__55067_55071)){
var msg_55073 = cljs.core._nth.call(null,chunk__55066_55070,i__55068_55072);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_55073);

var G__55074 = seq__55065_55069;
var G__55075 = chunk__55066_55070;
var G__55076 = count__55067_55071;
var G__55077 = (i__55068_55072 + (1));
seq__55065_55069 = G__55074;
chunk__55066_55070 = G__55075;
count__55067_55071 = G__55076;
i__55068_55072 = G__55077;
continue;
} else {
var temp__4657__auto___55078 = cljs.core.seq.call(null,seq__55065_55069);
if(temp__4657__auto___55078){
var seq__55065_55079__$1 = temp__4657__auto___55078;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55065_55079__$1)){
var c__37615__auto___55080 = cljs.core.chunk_first.call(null,seq__55065_55079__$1);
var G__55081 = cljs.core.chunk_rest.call(null,seq__55065_55079__$1);
var G__55082 = c__37615__auto___55080;
var G__55083 = cljs.core.count.call(null,c__37615__auto___55080);
var G__55084 = (0);
seq__55065_55069 = G__55081;
chunk__55066_55070 = G__55082;
count__55067_55071 = G__55083;
i__55068_55072 = G__55084;
continue;
} else {
var msg_55085 = cljs.core.first.call(null,seq__55065_55079__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_55085);

var G__55086 = cljs.core.next.call(null,seq__55065_55079__$1);
var G__55087 = null;
var G__55088 = (0);
var G__55089 = (0);
seq__55065_55069 = G__55086;
chunk__55066_55070 = G__55087;
count__55067_55071 = G__55088;
i__55068_55072 = G__55089;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__55090){
var map__55093 = p__55090;
var map__55093__$1 = ((((!((map__55093 == null)))?((((map__55093.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55093.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55093):map__55093);
var w = map__55093__$1;
var message = cljs.core.get.call(null,map__55093__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__55105 = cljs.core.seq.call(null,plugins);
var chunk__55106 = null;
var count__55107 = (0);
var i__55108 = (0);
while(true){
if((i__55108 < count__55107)){
var vec__55109 = cljs.core._nth.call(null,chunk__55106,i__55108);
var k = cljs.core.nth.call(null,vec__55109,(0),null);
var plugin = cljs.core.nth.call(null,vec__55109,(1),null);
if(cljs.core.truth_(plugin)){
var pl_55115 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__55105,chunk__55106,count__55107,i__55108,pl_55115,vec__55109,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_55115.call(null,msg_hist);
});})(seq__55105,chunk__55106,count__55107,i__55108,pl_55115,vec__55109,k,plugin))
);
} else {
}

var G__55116 = seq__55105;
var G__55117 = chunk__55106;
var G__55118 = count__55107;
var G__55119 = (i__55108 + (1));
seq__55105 = G__55116;
chunk__55106 = G__55117;
count__55107 = G__55118;
i__55108 = G__55119;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__55105);
if(temp__4657__auto__){
var seq__55105__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55105__$1)){
var c__37615__auto__ = cljs.core.chunk_first.call(null,seq__55105__$1);
var G__55120 = cljs.core.chunk_rest.call(null,seq__55105__$1);
var G__55121 = c__37615__auto__;
var G__55122 = cljs.core.count.call(null,c__37615__auto__);
var G__55123 = (0);
seq__55105 = G__55120;
chunk__55106 = G__55121;
count__55107 = G__55122;
i__55108 = G__55123;
continue;
} else {
var vec__55112 = cljs.core.first.call(null,seq__55105__$1);
var k = cljs.core.nth.call(null,vec__55112,(0),null);
var plugin = cljs.core.nth.call(null,vec__55112,(1),null);
if(cljs.core.truth_(plugin)){
var pl_55124 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__55105,chunk__55106,count__55107,i__55108,pl_55124,vec__55112,k,plugin,seq__55105__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_55124.call(null,msg_hist);
});})(seq__55105,chunk__55106,count__55107,i__55108,pl_55124,vec__55112,k,plugin,seq__55105__$1,temp__4657__auto__))
);
} else {
}

var G__55125 = cljs.core.next.call(null,seq__55105__$1);
var G__55126 = null;
var G__55127 = (0);
var G__55128 = (0);
seq__55105 = G__55125;
chunk__55106 = G__55126;
count__55107 = G__55127;
i__55108 = G__55128;
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
var args55129 = [];
var len__37879__auto___55136 = arguments.length;
var i__37880__auto___55137 = (0);
while(true){
if((i__37880__auto___55137 < len__37879__auto___55136)){
args55129.push((arguments[i__37880__auto___55137]));

var G__55138 = (i__37880__auto___55137 + (1));
i__37880__auto___55137 = G__55138;
continue;
} else {
}
break;
}

var G__55131 = args55129.length;
switch (G__55131) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55129.length)].join('')));

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

var seq__55132_55140 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__55133_55141 = null;
var count__55134_55142 = (0);
var i__55135_55143 = (0);
while(true){
if((i__55135_55143 < count__55134_55142)){
var msg_55144 = cljs.core._nth.call(null,chunk__55133_55141,i__55135_55143);
figwheel.client.socket.handle_incoming_message.call(null,msg_55144);

var G__55145 = seq__55132_55140;
var G__55146 = chunk__55133_55141;
var G__55147 = count__55134_55142;
var G__55148 = (i__55135_55143 + (1));
seq__55132_55140 = G__55145;
chunk__55133_55141 = G__55146;
count__55134_55142 = G__55147;
i__55135_55143 = G__55148;
continue;
} else {
var temp__4657__auto___55149 = cljs.core.seq.call(null,seq__55132_55140);
if(temp__4657__auto___55149){
var seq__55132_55150__$1 = temp__4657__auto___55149;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55132_55150__$1)){
var c__37615__auto___55151 = cljs.core.chunk_first.call(null,seq__55132_55150__$1);
var G__55152 = cljs.core.chunk_rest.call(null,seq__55132_55150__$1);
var G__55153 = c__37615__auto___55151;
var G__55154 = cljs.core.count.call(null,c__37615__auto___55151);
var G__55155 = (0);
seq__55132_55140 = G__55152;
chunk__55133_55141 = G__55153;
count__55134_55142 = G__55154;
i__55135_55143 = G__55155;
continue;
} else {
var msg_55156 = cljs.core.first.call(null,seq__55132_55150__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_55156);

var G__55157 = cljs.core.next.call(null,seq__55132_55150__$1);
var G__55158 = null;
var G__55159 = (0);
var G__55160 = (0);
seq__55132_55140 = G__55157;
chunk__55133_55141 = G__55158;
count__55134_55142 = G__55159;
i__55135_55143 = G__55160;
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
var len__37879__auto___55165 = arguments.length;
var i__37880__auto___55166 = (0);
while(true){
if((i__37880__auto___55166 < len__37879__auto___55165)){
args__37886__auto__.push((arguments[i__37880__auto___55166]));

var G__55167 = (i__37880__auto___55166 + (1));
i__37880__auto___55166 = G__55167;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((0) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__37887__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__55162){
var map__55163 = p__55162;
var map__55163__$1 = ((((!((map__55163 == null)))?((((map__55163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55163):map__55163);
var opts = map__55163__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq55161){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55161));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e55169){if((e55169 instanceof Error)){
var e = e55169;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e55169;

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
return (function (p__55173){
var map__55174 = p__55173;
var map__55174__$1 = ((((!((map__55174 == null)))?((((map__55174.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55174.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55174):map__55174);
var msg_name = cljs.core.get.call(null,map__55174__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map