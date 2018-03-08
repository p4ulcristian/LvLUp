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
var args54423 = [];
var len__37851__auto___54426 = arguments.length;
var i__37852__auto___54427 = (0);
while(true){
if((i__37852__auto___54427 < len__37851__auto___54426)){
args54423.push((arguments[i__37852__auto___54427]));

var G__54428 = (i__37852__auto___54427 + (1));
i__37852__auto___54427 = G__54428;
continue;
} else {
}
break;
}

var G__54425 = args54423.length;
switch (G__54425) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54423.length)].join('')));

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
var args__37858__auto__ = [];
var len__37851__auto___54431 = arguments.length;
var i__37852__auto___54432 = (0);
while(true){
if((i__37852__auto___54432 < len__37851__auto___54431)){
args__37858__auto__.push((arguments[i__37852__auto___54432]));

var G__54433 = (i__37852__auto___54432 + (1));
i__37852__auto___54432 = G__54433;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq54430){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54430));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__37858__auto__ = [];
var len__37851__auto___54435 = arguments.length;
var i__37852__auto___54436 = (0);
while(true){
if((i__37852__auto___54436 < len__37851__auto___54435)){
args__37858__auto__.push((arguments[i__37852__auto___54436]));

var G__54437 = (i__37852__auto___54436 + (1));
i__37852__auto___54436 = G__54437;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq54434){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54434));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__54438 = cljs.core._EQ_;
var expr__54439 = (function (){var or__36776__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e54442){if((e54442 instanceof Error)){
var e = e54442;
return false;
} else {
throw e54442;

}
}})();
if(cljs.core.truth_(or__36776__auto__)){
return or__36776__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__54438.call(null,"true",expr__54439))){
return true;
} else {
if(cljs.core.truth_(pred__54438.call(null,"false",expr__54439))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__54439)].join('')));
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
}catch (e54444){if((e54444 instanceof Error)){
var e = e54444;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e54444;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__54445){
var map__54448 = p__54445;
var map__54448__$1 = ((((!((map__54448 == null)))?((((map__54448.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54448.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54448):map__54448);
var message = cljs.core.get.call(null,map__54448__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__54448__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__36776__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__36776__auto__)){
return or__36776__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__36764__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__36764__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__36764__auto__;
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
var c__40653__auto___54610 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40653__auto___54610,ch){
return (function (){
var f__40654__auto__ = (function (){var switch__40541__auto__ = ((function (c__40653__auto___54610,ch){
return (function (state_54579){
var state_val_54580 = (state_54579[(1)]);
if((state_val_54580 === (7))){
var inst_54575 = (state_54579[(2)]);
var state_54579__$1 = state_54579;
var statearr_54581_54611 = state_54579__$1;
(statearr_54581_54611[(2)] = inst_54575);

(statearr_54581_54611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54580 === (1))){
var state_54579__$1 = state_54579;
var statearr_54582_54612 = state_54579__$1;
(statearr_54582_54612[(2)] = null);

(statearr_54582_54612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54580 === (4))){
var inst_54532 = (state_54579[(7)]);
var inst_54532__$1 = (state_54579[(2)]);
var state_54579__$1 = (function (){var statearr_54583 = state_54579;
(statearr_54583[(7)] = inst_54532__$1);

return statearr_54583;
})();
if(cljs.core.truth_(inst_54532__$1)){
var statearr_54584_54613 = state_54579__$1;
(statearr_54584_54613[(1)] = (5));

} else {
var statearr_54585_54614 = state_54579__$1;
(statearr_54585_54614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54580 === (15))){
var inst_54539 = (state_54579[(8)]);
var inst_54554 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_54539);
var inst_54555 = cljs.core.first.call(null,inst_54554);
var inst_54556 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_54555);
var inst_54557 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_54556)].join('');
var inst_54558 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_54557);
var state_54579__$1 = state_54579;
var statearr_54586_54615 = state_54579__$1;
(statearr_54586_54615[(2)] = inst_54558);

(statearr_54586_54615[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54580 === (13))){
var inst_54563 = (state_54579[(2)]);
var state_54579__$1 = state_54579;
var statearr_54587_54616 = state_54579__$1;
(statearr_54587_54616[(2)] = inst_54563);

(statearr_54587_54616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54580 === (6))){
var state_54579__$1 = state_54579;
var statearr_54588_54617 = state_54579__$1;
(statearr_54588_54617[(2)] = null);

(statearr_54588_54617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54580 === (17))){
var inst_54561 = (state_54579[(2)]);
var state_54579__$1 = state_54579;
var statearr_54589_54618 = state_54579__$1;
(statearr_54589_54618[(2)] = inst_54561);

(statearr_54589_54618[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54580 === (3))){
var inst_54577 = (state_54579[(2)]);
var state_54579__$1 = state_54579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54579__$1,inst_54577);
} else {
if((state_val_54580 === (12))){
var inst_54538 = (state_54579[(9)]);
var inst_54552 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_54538,opts);
var state_54579__$1 = state_54579;
if(cljs.core.truth_(inst_54552)){
var statearr_54590_54619 = state_54579__$1;
(statearr_54590_54619[(1)] = (15));

} else {
var statearr_54591_54620 = state_54579__$1;
(statearr_54591_54620[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54580 === (2))){
var state_54579__$1 = state_54579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54579__$1,(4),ch);
} else {
if((state_val_54580 === (11))){
var inst_54539 = (state_54579[(8)]);
var inst_54544 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54545 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_54539);
var inst_54546 = cljs.core.async.timeout.call(null,(1000));
var inst_54547 = [inst_54545,inst_54546];
var inst_54548 = (new cljs.core.PersistentVector(null,2,(5),inst_54544,inst_54547,null));
var state_54579__$1 = state_54579;
return cljs.core.async.ioc_alts_BANG_.call(null,state_54579__$1,(14),inst_54548);
} else {
if((state_val_54580 === (9))){
var inst_54539 = (state_54579[(8)]);
var inst_54565 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_54566 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_54539);
var inst_54567 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_54566);
var inst_54568 = [cljs.core.str("Not loading: "),cljs.core.str(inst_54567)].join('');
var inst_54569 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_54568);
var state_54579__$1 = (function (){var statearr_54592 = state_54579;
(statearr_54592[(10)] = inst_54565);

return statearr_54592;
})();
var statearr_54593_54621 = state_54579__$1;
(statearr_54593_54621[(2)] = inst_54569);

(statearr_54593_54621[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54580 === (5))){
var inst_54532 = (state_54579[(7)]);
var inst_54534 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_54535 = (new cljs.core.PersistentArrayMap(null,2,inst_54534,null));
var inst_54536 = (new cljs.core.PersistentHashSet(null,inst_54535,null));
var inst_54537 = figwheel.client.focus_msgs.call(null,inst_54536,inst_54532);
var inst_54538 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_54537);
var inst_54539 = cljs.core.first.call(null,inst_54537);
var inst_54540 = figwheel.client.autoload_QMARK_.call(null);
var state_54579__$1 = (function (){var statearr_54594 = state_54579;
(statearr_54594[(8)] = inst_54539);

(statearr_54594[(9)] = inst_54538);

return statearr_54594;
})();
if(cljs.core.truth_(inst_54540)){
var statearr_54595_54622 = state_54579__$1;
(statearr_54595_54622[(1)] = (8));

} else {
var statearr_54596_54623 = state_54579__$1;
(statearr_54596_54623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54580 === (14))){
var inst_54550 = (state_54579[(2)]);
var state_54579__$1 = state_54579;
var statearr_54597_54624 = state_54579__$1;
(statearr_54597_54624[(2)] = inst_54550);

(statearr_54597_54624[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54580 === (16))){
var state_54579__$1 = state_54579;
var statearr_54598_54625 = state_54579__$1;
(statearr_54598_54625[(2)] = null);

(statearr_54598_54625[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54580 === (10))){
var inst_54571 = (state_54579[(2)]);
var state_54579__$1 = (function (){var statearr_54599 = state_54579;
(statearr_54599[(11)] = inst_54571);

return statearr_54599;
})();
var statearr_54600_54626 = state_54579__$1;
(statearr_54600_54626[(2)] = null);

(statearr_54600_54626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54580 === (8))){
var inst_54538 = (state_54579[(9)]);
var inst_54542 = figwheel.client.reload_file_state_QMARK_.call(null,inst_54538,opts);
var state_54579__$1 = state_54579;
if(cljs.core.truth_(inst_54542)){
var statearr_54601_54627 = state_54579__$1;
(statearr_54601_54627[(1)] = (11));

} else {
var statearr_54602_54628 = state_54579__$1;
(statearr_54602_54628[(1)] = (12));

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
});})(c__40653__auto___54610,ch))
;
return ((function (switch__40541__auto__,c__40653__auto___54610,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__40542__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__40542__auto____0 = (function (){
var statearr_54606 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54606[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__40542__auto__);

(statearr_54606[(1)] = (1));

return statearr_54606;
});
var figwheel$client$file_reloader_plugin_$_state_machine__40542__auto____1 = (function (state_54579){
while(true){
var ret_value__40543__auto__ = (function (){try{while(true){
var result__40544__auto__ = switch__40541__auto__.call(null,state_54579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40544__auto__;
}
break;
}
}catch (e54607){if((e54607 instanceof Object)){
var ex__40545__auto__ = e54607;
var statearr_54608_54629 = state_54579;
(statearr_54608_54629[(5)] = ex__40545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54630 = state_54579;
state_54579 = G__54630;
continue;
} else {
return ret_value__40543__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__40542__auto__ = function(state_54579){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__40542__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__40542__auto____1.call(this,state_54579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__40542__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__40542__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__40542__auto__;
})()
;})(switch__40541__auto__,c__40653__auto___54610,ch))
})();
var state__40655__auto__ = (function (){var statearr_54609 = f__40654__auto__.call(null);
(statearr_54609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40653__auto___54610);

return statearr_54609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40655__auto__);
});})(c__40653__auto___54610,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__54631_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__54631_SHARP_));
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
var base_path_54634 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_54634){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e54633){if((e54633 instanceof Error)){
var e = e54633;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_54634], null));
} else {
var e = e54633;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_54634))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__54635){
var map__54644 = p__54635;
var map__54644__$1 = ((((!((map__54644 == null)))?((((map__54644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54644):map__54644);
var opts = map__54644__$1;
var build_id = cljs.core.get.call(null,map__54644__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__54644,map__54644__$1,opts,build_id){
return (function (p__54646){
var vec__54647 = p__54646;
var seq__54648 = cljs.core.seq.call(null,vec__54647);
var first__54649 = cljs.core.first.call(null,seq__54648);
var seq__54648__$1 = cljs.core.next.call(null,seq__54648);
var map__54650 = first__54649;
var map__54650__$1 = ((((!((map__54650 == null)))?((((map__54650.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54650.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54650):map__54650);
var msg = map__54650__$1;
var msg_name = cljs.core.get.call(null,map__54650__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54648__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__54647,seq__54648,first__54649,seq__54648__$1,map__54650,map__54650__$1,msg,msg_name,_,map__54644,map__54644__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__54647,seq__54648,first__54649,seq__54648__$1,map__54650,map__54650__$1,msg,msg_name,_,map__54644,map__54644__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__54644,map__54644__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__54658){
var vec__54659 = p__54658;
var seq__54660 = cljs.core.seq.call(null,vec__54659);
var first__54661 = cljs.core.first.call(null,seq__54660);
var seq__54660__$1 = cljs.core.next.call(null,seq__54660);
var map__54662 = first__54661;
var map__54662__$1 = ((((!((map__54662 == null)))?((((map__54662.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54662.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54662):map__54662);
var msg = map__54662__$1;
var msg_name = cljs.core.get.call(null,map__54662__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54660__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__54664){
var map__54676 = p__54664;
var map__54676__$1 = ((((!((map__54676 == null)))?((((map__54676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54676):map__54676);
var on_compile_warning = cljs.core.get.call(null,map__54676__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__54676__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__54676,map__54676__$1,on_compile_warning,on_compile_fail){
return (function (p__54678){
var vec__54679 = p__54678;
var seq__54680 = cljs.core.seq.call(null,vec__54679);
var first__54681 = cljs.core.first.call(null,seq__54680);
var seq__54680__$1 = cljs.core.next.call(null,seq__54680);
var map__54682 = first__54681;
var map__54682__$1 = ((((!((map__54682 == null)))?((((map__54682.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54682.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54682):map__54682);
var msg = map__54682__$1;
var msg_name = cljs.core.get.call(null,map__54682__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54680__$1;
var pred__54684 = cljs.core._EQ_;
var expr__54685 = msg_name;
if(cljs.core.truth_(pred__54684.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__54685))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__54684.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__54685))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__54676,map__54676__$1,on_compile_warning,on_compile_fail))
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
var c__40653__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40653__auto__,msg_hist,msg_names,msg){
return (function (){
var f__40654__auto__ = (function (){var switch__40541__auto__ = ((function (c__40653__auto__,msg_hist,msg_names,msg){
return (function (state_54913){
var state_val_54914 = (state_54913[(1)]);
if((state_val_54914 === (7))){
var inst_54833 = (state_54913[(2)]);
var state_54913__$1 = state_54913;
if(cljs.core.truth_(inst_54833)){
var statearr_54915_54965 = state_54913__$1;
(statearr_54915_54965[(1)] = (8));

} else {
var statearr_54916_54966 = state_54913__$1;
(statearr_54916_54966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54914 === (20))){
var inst_54907 = (state_54913[(2)]);
var state_54913__$1 = state_54913;
var statearr_54917_54967 = state_54913__$1;
(statearr_54917_54967[(2)] = inst_54907);

(statearr_54917_54967[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54914 === (27))){
var inst_54903 = (state_54913[(2)]);
var state_54913__$1 = state_54913;
var statearr_54918_54968 = state_54913__$1;
(statearr_54918_54968[(2)] = inst_54903);

(statearr_54918_54968[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54914 === (1))){
var inst_54826 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_54913__$1 = state_54913;
if(cljs.core.truth_(inst_54826)){
var statearr_54919_54969 = state_54913__$1;
(statearr_54919_54969[(1)] = (2));

} else {
var statearr_54920_54970 = state_54913__$1;
(statearr_54920_54970[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54914 === (24))){
var inst_54905 = (state_54913[(2)]);
var state_54913__$1 = state_54913;
var statearr_54921_54971 = state_54913__$1;
(statearr_54921_54971[(2)] = inst_54905);

(statearr_54921_54971[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54914 === (4))){
var inst_54911 = (state_54913[(2)]);
var state_54913__$1 = state_54913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54913__$1,inst_54911);
} else {
if((state_val_54914 === (15))){
var inst_54909 = (state_54913[(2)]);
var state_54913__$1 = state_54913;
var statearr_54922_54972 = state_54913__$1;
(statearr_54922_54972[(2)] = inst_54909);

(statearr_54922_54972[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54914 === (21))){
var inst_54862 = (state_54913[(2)]);
var inst_54863 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54864 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54863);
var state_54913__$1 = (function (){var statearr_54923 = state_54913;
(statearr_54923[(7)] = inst_54862);

return statearr_54923;
})();
var statearr_54924_54973 = state_54913__$1;
(statearr_54924_54973[(2)] = inst_54864);

(statearr_54924_54973[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54914 === (31))){
var inst_54892 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_54913__$1 = state_54913;
if(cljs.core.truth_(inst_54892)){
var statearr_54925_54974 = state_54913__$1;
(statearr_54925_54974[(1)] = (34));

} else {
var statearr_54926_54975 = state_54913__$1;
(statearr_54926_54975[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54914 === (32))){
var inst_54901 = (state_54913[(2)]);
var state_54913__$1 = state_54913;
var statearr_54927_54976 = state_54913__$1;
(statearr_54927_54976[(2)] = inst_54901);

(statearr_54927_54976[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54914 === (33))){
var inst_54888 = (state_54913[(2)]);
var inst_54889 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54890 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54889);
var state_54913__$1 = (function (){var statearr_54928 = state_54913;
(statearr_54928[(8)] = inst_54888);

return statearr_54928;
})();
var statearr_54929_54977 = state_54913__$1;
(statearr_54929_54977[(2)] = inst_54890);

(statearr_54929_54977[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54914 === (13))){
var inst_54847 = figwheel.client.heads_up.clear.call(null);
var state_54913__$1 = state_54913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54913__$1,(16),inst_54847);
} else {
if((state_val_54914 === (22))){
var inst_54868 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54869 = figwheel.client.heads_up.append_warning_message.call(null,inst_54868);
var state_54913__$1 = state_54913;
var statearr_54930_54978 = state_54913__$1;
(statearr_54930_54978[(2)] = inst_54869);

(statearr_54930_54978[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54914 === (36))){
var inst_54899 = (state_54913[(2)]);
var state_54913__$1 = state_54913;
var statearr_54931_54979 = state_54913__$1;
(statearr_54931_54979[(2)] = inst_54899);

(statearr_54931_54979[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54914 === (29))){
var inst_54879 = (state_54913[(2)]);
var inst_54880 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54881 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54880);
var state_54913__$1 = (function (){var statearr_54932 = state_54913;
(statearr_54932[(9)] = inst_54879);

return statearr_54932;
})();
var statearr_54933_54980 = state_54913__$1;
(statearr_54933_54980[(2)] = inst_54881);

(statearr_54933_54980[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54914 === (6))){
var inst_54828 = (state_54913[(10)]);
var state_54913__$1 = state_54913;
var statearr_54934_54981 = state_54913__$1;
(statearr_54934_54981[(2)] = inst_54828);

(statearr_54934_54981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54914 === (28))){
var inst_54875 = (state_54913[(2)]);
var inst_54876 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54877 = figwheel.client.heads_up.display_warning.call(null,inst_54876);
var state_54913__$1 = (function (){var statearr_54935 = state_54913;
(statearr_54935[(11)] = inst_54875);

return statearr_54935;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54913__$1,(29),inst_54877);
} else {
if((state_val_54914 === (25))){
var inst_54873 = figwheel.client.heads_up.clear.call(null);
var state_54913__$1 = state_54913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54913__$1,(28),inst_54873);
} else {
if((state_val_54914 === (34))){
var inst_54894 = figwheel.client.heads_up.flash_loaded.call(null);
var state_54913__$1 = state_54913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54913__$1,(37),inst_54894);
} else {
if((state_val_54914 === (17))){
var inst_54853 = (state_54913[(2)]);
var inst_54854 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54855 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54854);
var state_54913__$1 = (function (){var statearr_54936 = state_54913;
(statearr_54936[(12)] = inst_54853);

return statearr_54936;
})();
var statearr_54937_54982 = state_54913__$1;
(statearr_54937_54982[(2)] = inst_54855);

(statearr_54937_54982[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54914 === (3))){
var inst_54845 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_54913__$1 = state_54913;
if(cljs.core.truth_(inst_54845)){
var statearr_54938_54983 = state_54913__$1;
(statearr_54938_54983[(1)] = (13));

} else {
var statearr_54939_54984 = state_54913__$1;
(statearr_54939_54984[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54914 === (12))){
var inst_54841 = (state_54913[(2)]);
var state_54913__$1 = state_54913;
var statearr_54940_54985 = state_54913__$1;
(statearr_54940_54985[(2)] = inst_54841);

(statearr_54940_54985[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54914 === (2))){
var inst_54828 = (state_54913[(10)]);
var inst_54828__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_54913__$1 = (function (){var statearr_54941 = state_54913;
(statearr_54941[(10)] = inst_54828__$1);

return statearr_54941;
})();
if(cljs.core.truth_(inst_54828__$1)){
var statearr_54942_54986 = state_54913__$1;
(statearr_54942_54986[(1)] = (5));

} else {
var statearr_54943_54987 = state_54913__$1;
(statearr_54943_54987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54914 === (23))){
var inst_54871 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_54913__$1 = state_54913;
if(cljs.core.truth_(inst_54871)){
var statearr_54944_54988 = state_54913__$1;
(statearr_54944_54988[(1)] = (25));

} else {
var statearr_54945_54989 = state_54913__$1;
(statearr_54945_54989[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54914 === (35))){
var state_54913__$1 = state_54913;
var statearr_54946_54990 = state_54913__$1;
(statearr_54946_54990[(2)] = null);

(statearr_54946_54990[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54914 === (19))){
var inst_54866 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_54913__$1 = state_54913;
if(cljs.core.truth_(inst_54866)){
var statearr_54947_54991 = state_54913__$1;
(statearr_54947_54991[(1)] = (22));

} else {
var statearr_54948_54992 = state_54913__$1;
(statearr_54948_54992[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54914 === (11))){
var inst_54837 = (state_54913[(2)]);
var state_54913__$1 = state_54913;
var statearr_54949_54993 = state_54913__$1;
(statearr_54949_54993[(2)] = inst_54837);

(statearr_54949_54993[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54914 === (9))){
var inst_54839 = figwheel.client.heads_up.clear.call(null);
var state_54913__$1 = state_54913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54913__$1,(12),inst_54839);
} else {
if((state_val_54914 === (5))){
var inst_54830 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_54913__$1 = state_54913;
var statearr_54950_54994 = state_54913__$1;
(statearr_54950_54994[(2)] = inst_54830);

(statearr_54950_54994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54914 === (14))){
var inst_54857 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_54913__$1 = state_54913;
if(cljs.core.truth_(inst_54857)){
var statearr_54951_54995 = state_54913__$1;
(statearr_54951_54995[(1)] = (18));

} else {
var statearr_54952_54996 = state_54913__$1;
(statearr_54952_54996[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54914 === (26))){
var inst_54883 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_54913__$1 = state_54913;
if(cljs.core.truth_(inst_54883)){
var statearr_54953_54997 = state_54913__$1;
(statearr_54953_54997[(1)] = (30));

} else {
var statearr_54954_54998 = state_54913__$1;
(statearr_54954_54998[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54914 === (16))){
var inst_54849 = (state_54913[(2)]);
var inst_54850 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54851 = figwheel.client.heads_up.display_exception.call(null,inst_54850);
var state_54913__$1 = (function (){var statearr_54955 = state_54913;
(statearr_54955[(13)] = inst_54849);

return statearr_54955;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54913__$1,(17),inst_54851);
} else {
if((state_val_54914 === (30))){
var inst_54885 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54886 = figwheel.client.heads_up.display_warning.call(null,inst_54885);
var state_54913__$1 = state_54913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54913__$1,(33),inst_54886);
} else {
if((state_val_54914 === (10))){
var inst_54843 = (state_54913[(2)]);
var state_54913__$1 = state_54913;
var statearr_54956_54999 = state_54913__$1;
(statearr_54956_54999[(2)] = inst_54843);

(statearr_54956_54999[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54914 === (18))){
var inst_54859 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54860 = figwheel.client.heads_up.display_exception.call(null,inst_54859);
var state_54913__$1 = state_54913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54913__$1,(21),inst_54860);
} else {
if((state_val_54914 === (37))){
var inst_54896 = (state_54913[(2)]);
var state_54913__$1 = state_54913;
var statearr_54957_55000 = state_54913__$1;
(statearr_54957_55000[(2)] = inst_54896);

(statearr_54957_55000[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54914 === (8))){
var inst_54835 = figwheel.client.heads_up.flash_loaded.call(null);
var state_54913__$1 = state_54913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54913__$1,(11),inst_54835);
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
});})(c__40653__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__40541__auto__,c__40653__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40542__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40542__auto____0 = (function (){
var statearr_54961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54961[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40542__auto__);

(statearr_54961[(1)] = (1));

return statearr_54961;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40542__auto____1 = (function (state_54913){
while(true){
var ret_value__40543__auto__ = (function (){try{while(true){
var result__40544__auto__ = switch__40541__auto__.call(null,state_54913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40544__auto__;
}
break;
}
}catch (e54962){if((e54962 instanceof Object)){
var ex__40545__auto__ = e54962;
var statearr_54963_55001 = state_54913;
(statearr_54963_55001[(5)] = ex__40545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55002 = state_54913;
state_54913 = G__55002;
continue;
} else {
return ret_value__40543__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40542__auto__ = function(state_54913){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40542__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40542__auto____1.call(this,state_54913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40542__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40542__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40542__auto__;
})()
;})(switch__40541__auto__,c__40653__auto__,msg_hist,msg_names,msg))
})();
var state__40655__auto__ = (function (){var statearr_54964 = f__40654__auto__.call(null);
(statearr_54964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40653__auto__);

return statearr_54964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40655__auto__);
});})(c__40653__auto__,msg_hist,msg_names,msg))
);

return c__40653__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__40653__auto___55065 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40653__auto___55065,ch){
return (function (){
var f__40654__auto__ = (function (){var switch__40541__auto__ = ((function (c__40653__auto___55065,ch){
return (function (state_55048){
var state_val_55049 = (state_55048[(1)]);
if((state_val_55049 === (1))){
var state_55048__$1 = state_55048;
var statearr_55050_55066 = state_55048__$1;
(statearr_55050_55066[(2)] = null);

(statearr_55050_55066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55049 === (2))){
var state_55048__$1 = state_55048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55048__$1,(4),ch);
} else {
if((state_val_55049 === (3))){
var inst_55046 = (state_55048[(2)]);
var state_55048__$1 = state_55048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55048__$1,inst_55046);
} else {
if((state_val_55049 === (4))){
var inst_55036 = (state_55048[(7)]);
var inst_55036__$1 = (state_55048[(2)]);
var state_55048__$1 = (function (){var statearr_55051 = state_55048;
(statearr_55051[(7)] = inst_55036__$1);

return statearr_55051;
})();
if(cljs.core.truth_(inst_55036__$1)){
var statearr_55052_55067 = state_55048__$1;
(statearr_55052_55067[(1)] = (5));

} else {
var statearr_55053_55068 = state_55048__$1;
(statearr_55053_55068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55049 === (5))){
var inst_55036 = (state_55048[(7)]);
var inst_55038 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_55036);
var state_55048__$1 = state_55048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55048__$1,(8),inst_55038);
} else {
if((state_val_55049 === (6))){
var state_55048__$1 = state_55048;
var statearr_55054_55069 = state_55048__$1;
(statearr_55054_55069[(2)] = null);

(statearr_55054_55069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55049 === (7))){
var inst_55044 = (state_55048[(2)]);
var state_55048__$1 = state_55048;
var statearr_55055_55070 = state_55048__$1;
(statearr_55055_55070[(2)] = inst_55044);

(statearr_55055_55070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55049 === (8))){
var inst_55040 = (state_55048[(2)]);
var state_55048__$1 = (function (){var statearr_55056 = state_55048;
(statearr_55056[(8)] = inst_55040);

return statearr_55056;
})();
var statearr_55057_55071 = state_55048__$1;
(statearr_55057_55071[(2)] = null);

(statearr_55057_55071[(1)] = (2));


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
});})(c__40653__auto___55065,ch))
;
return ((function (switch__40541__auto__,c__40653__auto___55065,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__40542__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__40542__auto____0 = (function (){
var statearr_55061 = [null,null,null,null,null,null,null,null,null];
(statearr_55061[(0)] = figwheel$client$heads_up_plugin_$_state_machine__40542__auto__);

(statearr_55061[(1)] = (1));

return statearr_55061;
});
var figwheel$client$heads_up_plugin_$_state_machine__40542__auto____1 = (function (state_55048){
while(true){
var ret_value__40543__auto__ = (function (){try{while(true){
var result__40544__auto__ = switch__40541__auto__.call(null,state_55048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40544__auto__;
}
break;
}
}catch (e55062){if((e55062 instanceof Object)){
var ex__40545__auto__ = e55062;
var statearr_55063_55072 = state_55048;
(statearr_55063_55072[(5)] = ex__40545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55073 = state_55048;
state_55048 = G__55073;
continue;
} else {
return ret_value__40543__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__40542__auto__ = function(state_55048){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__40542__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__40542__auto____1.call(this,state_55048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__40542__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__40542__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__40542__auto__;
})()
;})(switch__40541__auto__,c__40653__auto___55065,ch))
})();
var state__40655__auto__ = (function (){var statearr_55064 = f__40654__auto__.call(null);
(statearr_55064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40653__auto___55065);

return statearr_55064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40655__auto__);
});})(c__40653__auto___55065,ch))
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
var c__40653__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40653__auto__){
return (function (){
var f__40654__auto__ = (function (){var switch__40541__auto__ = ((function (c__40653__auto__){
return (function (state_55094){
var state_val_55095 = (state_55094[(1)]);
if((state_val_55095 === (1))){
var inst_55089 = cljs.core.async.timeout.call(null,(3000));
var state_55094__$1 = state_55094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55094__$1,(2),inst_55089);
} else {
if((state_val_55095 === (2))){
var inst_55091 = (state_55094[(2)]);
var inst_55092 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_55094__$1 = (function (){var statearr_55096 = state_55094;
(statearr_55096[(7)] = inst_55091);

return statearr_55096;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55094__$1,inst_55092);
} else {
return null;
}
}
});})(c__40653__auto__))
;
return ((function (switch__40541__auto__,c__40653__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__40542__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__40542__auto____0 = (function (){
var statearr_55100 = [null,null,null,null,null,null,null,null];
(statearr_55100[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__40542__auto__);

(statearr_55100[(1)] = (1));

return statearr_55100;
});
var figwheel$client$enforce_project_plugin_$_state_machine__40542__auto____1 = (function (state_55094){
while(true){
var ret_value__40543__auto__ = (function (){try{while(true){
var result__40544__auto__ = switch__40541__auto__.call(null,state_55094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40544__auto__;
}
break;
}
}catch (e55101){if((e55101 instanceof Object)){
var ex__40545__auto__ = e55101;
var statearr_55102_55104 = state_55094;
(statearr_55102_55104[(5)] = ex__40545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55105 = state_55094;
state_55094 = G__55105;
continue;
} else {
return ret_value__40543__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__40542__auto__ = function(state_55094){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__40542__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__40542__auto____1.call(this,state_55094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__40542__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__40542__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__40542__auto__;
})()
;})(switch__40541__auto__,c__40653__auto__))
})();
var state__40655__auto__ = (function (){var statearr_55103 = f__40654__auto__.call(null);
(statearr_55103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40653__auto__);

return statearr_55103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40655__auto__);
});})(c__40653__auto__))
);

return c__40653__auto__;
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
var c__40653__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40653__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__40654__auto__ = (function (){var switch__40541__auto__ = ((function (c__40653__auto__,figwheel_version,temp__4657__auto__){
return (function (state_55128){
var state_val_55129 = (state_55128[(1)]);
if((state_val_55129 === (1))){
var inst_55122 = cljs.core.async.timeout.call(null,(2000));
var state_55128__$1 = state_55128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55128__$1,(2),inst_55122);
} else {
if((state_val_55129 === (2))){
var inst_55124 = (state_55128[(2)]);
var inst_55125 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_55126 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_55125);
var state_55128__$1 = (function (){var statearr_55130 = state_55128;
(statearr_55130[(7)] = inst_55124);

return statearr_55130;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55128__$1,inst_55126);
} else {
return null;
}
}
});})(c__40653__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__40541__auto__,c__40653__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40542__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40542__auto____0 = (function (){
var statearr_55134 = [null,null,null,null,null,null,null,null];
(statearr_55134[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40542__auto__);

(statearr_55134[(1)] = (1));

return statearr_55134;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40542__auto____1 = (function (state_55128){
while(true){
var ret_value__40543__auto__ = (function (){try{while(true){
var result__40544__auto__ = switch__40541__auto__.call(null,state_55128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40544__auto__;
}
break;
}
}catch (e55135){if((e55135 instanceof Object)){
var ex__40545__auto__ = e55135;
var statearr_55136_55138 = state_55128;
(statearr_55136_55138[(5)] = ex__40545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55139 = state_55128;
state_55128 = G__55139;
continue;
} else {
return ret_value__40543__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40542__auto__ = function(state_55128){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40542__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40542__auto____1.call(this,state_55128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40542__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40542__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40542__auto__;
})()
;})(switch__40541__auto__,c__40653__auto__,figwheel_version,temp__4657__auto__))
})();
var state__40655__auto__ = (function (){var statearr_55137 = f__40654__auto__.call(null);
(statearr_55137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40653__auto__);

return statearr_55137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40655__auto__);
});})(c__40653__auto__,figwheel_version,temp__4657__auto__))
);

return c__40653__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__55140){
var map__55144 = p__55140;
var map__55144__$1 = ((((!((map__55144 == null)))?((((map__55144.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55144.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55144):map__55144);
var file = cljs.core.get.call(null,map__55144__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__55144__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__55144__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__55146 = "";
var G__55146__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__55146),cljs.core.str("file "),cljs.core.str(file)].join(''):G__55146);
var G__55146__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__55146__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__55146__$1);
if(cljs.core.truth_((function (){var and__36764__auto__ = line;
if(cljs.core.truth_(and__36764__auto__)){
return column;
} else {
return and__36764__auto__;
}
})())){
return [cljs.core.str(G__55146__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__55146__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__55147){
var map__55154 = p__55147;
var map__55154__$1 = ((((!((map__55154 == null)))?((((map__55154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55154):map__55154);
var ed = map__55154__$1;
var formatted_exception = cljs.core.get.call(null,map__55154__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__55154__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__55154__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__55156_55160 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__55157_55161 = null;
var count__55158_55162 = (0);
var i__55159_55163 = (0);
while(true){
if((i__55159_55163 < count__55158_55162)){
var msg_55164 = cljs.core._nth.call(null,chunk__55157_55161,i__55159_55163);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_55164);

var G__55165 = seq__55156_55160;
var G__55166 = chunk__55157_55161;
var G__55167 = count__55158_55162;
var G__55168 = (i__55159_55163 + (1));
seq__55156_55160 = G__55165;
chunk__55157_55161 = G__55166;
count__55158_55162 = G__55167;
i__55159_55163 = G__55168;
continue;
} else {
var temp__4657__auto___55169 = cljs.core.seq.call(null,seq__55156_55160);
if(temp__4657__auto___55169){
var seq__55156_55170__$1 = temp__4657__auto___55169;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55156_55170__$1)){
var c__37587__auto___55171 = cljs.core.chunk_first.call(null,seq__55156_55170__$1);
var G__55172 = cljs.core.chunk_rest.call(null,seq__55156_55170__$1);
var G__55173 = c__37587__auto___55171;
var G__55174 = cljs.core.count.call(null,c__37587__auto___55171);
var G__55175 = (0);
seq__55156_55160 = G__55172;
chunk__55157_55161 = G__55173;
count__55158_55162 = G__55174;
i__55159_55163 = G__55175;
continue;
} else {
var msg_55176 = cljs.core.first.call(null,seq__55156_55170__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_55176);

var G__55177 = cljs.core.next.call(null,seq__55156_55170__$1);
var G__55178 = null;
var G__55179 = (0);
var G__55180 = (0);
seq__55156_55160 = G__55177;
chunk__55157_55161 = G__55178;
count__55158_55162 = G__55179;
i__55159_55163 = G__55180;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__55181){
var map__55184 = p__55181;
var map__55184__$1 = ((((!((map__55184 == null)))?((((map__55184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55184):map__55184);
var w = map__55184__$1;
var message = cljs.core.get.call(null,map__55184__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__36764__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__36764__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__36764__auto__;
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
var seq__55196 = cljs.core.seq.call(null,plugins);
var chunk__55197 = null;
var count__55198 = (0);
var i__55199 = (0);
while(true){
if((i__55199 < count__55198)){
var vec__55200 = cljs.core._nth.call(null,chunk__55197,i__55199);
var k = cljs.core.nth.call(null,vec__55200,(0),null);
var plugin = cljs.core.nth.call(null,vec__55200,(1),null);
if(cljs.core.truth_(plugin)){
var pl_55206 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__55196,chunk__55197,count__55198,i__55199,pl_55206,vec__55200,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_55206.call(null,msg_hist);
});})(seq__55196,chunk__55197,count__55198,i__55199,pl_55206,vec__55200,k,plugin))
);
} else {
}

var G__55207 = seq__55196;
var G__55208 = chunk__55197;
var G__55209 = count__55198;
var G__55210 = (i__55199 + (1));
seq__55196 = G__55207;
chunk__55197 = G__55208;
count__55198 = G__55209;
i__55199 = G__55210;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__55196);
if(temp__4657__auto__){
var seq__55196__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55196__$1)){
var c__37587__auto__ = cljs.core.chunk_first.call(null,seq__55196__$1);
var G__55211 = cljs.core.chunk_rest.call(null,seq__55196__$1);
var G__55212 = c__37587__auto__;
var G__55213 = cljs.core.count.call(null,c__37587__auto__);
var G__55214 = (0);
seq__55196 = G__55211;
chunk__55197 = G__55212;
count__55198 = G__55213;
i__55199 = G__55214;
continue;
} else {
var vec__55203 = cljs.core.first.call(null,seq__55196__$1);
var k = cljs.core.nth.call(null,vec__55203,(0),null);
var plugin = cljs.core.nth.call(null,vec__55203,(1),null);
if(cljs.core.truth_(plugin)){
var pl_55215 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__55196,chunk__55197,count__55198,i__55199,pl_55215,vec__55203,k,plugin,seq__55196__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_55215.call(null,msg_hist);
});})(seq__55196,chunk__55197,count__55198,i__55199,pl_55215,vec__55203,k,plugin,seq__55196__$1,temp__4657__auto__))
);
} else {
}

var G__55216 = cljs.core.next.call(null,seq__55196__$1);
var G__55217 = null;
var G__55218 = (0);
var G__55219 = (0);
seq__55196 = G__55216;
chunk__55197 = G__55217;
count__55198 = G__55218;
i__55199 = G__55219;
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
var args55220 = [];
var len__37851__auto___55227 = arguments.length;
var i__37852__auto___55228 = (0);
while(true){
if((i__37852__auto___55228 < len__37851__auto___55227)){
args55220.push((arguments[i__37852__auto___55228]));

var G__55229 = (i__37852__auto___55228 + (1));
i__37852__auto___55228 = G__55229;
continue;
} else {
}
break;
}

var G__55222 = args55220.length;
switch (G__55222) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55220.length)].join('')));

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

var seq__55223_55231 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__55224_55232 = null;
var count__55225_55233 = (0);
var i__55226_55234 = (0);
while(true){
if((i__55226_55234 < count__55225_55233)){
var msg_55235 = cljs.core._nth.call(null,chunk__55224_55232,i__55226_55234);
figwheel.client.socket.handle_incoming_message.call(null,msg_55235);

var G__55236 = seq__55223_55231;
var G__55237 = chunk__55224_55232;
var G__55238 = count__55225_55233;
var G__55239 = (i__55226_55234 + (1));
seq__55223_55231 = G__55236;
chunk__55224_55232 = G__55237;
count__55225_55233 = G__55238;
i__55226_55234 = G__55239;
continue;
} else {
var temp__4657__auto___55240 = cljs.core.seq.call(null,seq__55223_55231);
if(temp__4657__auto___55240){
var seq__55223_55241__$1 = temp__4657__auto___55240;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55223_55241__$1)){
var c__37587__auto___55242 = cljs.core.chunk_first.call(null,seq__55223_55241__$1);
var G__55243 = cljs.core.chunk_rest.call(null,seq__55223_55241__$1);
var G__55244 = c__37587__auto___55242;
var G__55245 = cljs.core.count.call(null,c__37587__auto___55242);
var G__55246 = (0);
seq__55223_55231 = G__55243;
chunk__55224_55232 = G__55244;
count__55225_55233 = G__55245;
i__55226_55234 = G__55246;
continue;
} else {
var msg_55247 = cljs.core.first.call(null,seq__55223_55241__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_55247);

var G__55248 = cljs.core.next.call(null,seq__55223_55241__$1);
var G__55249 = null;
var G__55250 = (0);
var G__55251 = (0);
seq__55223_55231 = G__55248;
chunk__55224_55232 = G__55249;
count__55225_55233 = G__55250;
i__55226_55234 = G__55251;
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
var args__37858__auto__ = [];
var len__37851__auto___55256 = arguments.length;
var i__37852__auto___55257 = (0);
while(true){
if((i__37852__auto___55257 < len__37851__auto___55256)){
args__37858__auto__.push((arguments[i__37852__auto___55257]));

var G__55258 = (i__37852__auto___55257 + (1));
i__37852__auto___55257 = G__55258;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((0) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__37859__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__55253){
var map__55254 = p__55253;
var map__55254__$1 = ((((!((map__55254 == null)))?((((map__55254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55254):map__55254);
var opts = map__55254__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq55252){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55252));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e55260){if((e55260 instanceof Error)){
var e = e55260;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e55260;

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
return (function (p__55264){
var map__55265 = p__55264;
var map__55265__$1 = ((((!((map__55265 == null)))?((((map__55265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55265):map__55265);
var msg_name = cljs.core.get.call(null,map__55265__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map