// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs_time.internal.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
cljs_time.internal.core.months = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["January","February","March","April","May","June","July","August","September","October","November","December"], null);
cljs_time.internal.core.days = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], null);
cljs_time.internal.core.abbreviate = (function cljs_time$internal$core$abbreviate(n,s){
return cljs.core.subs.call(null,s,(0),n);
});
cljs_time.internal.core._EQ_ = (function cljs_time$internal$core$_EQ_(var_args){
var args__37884__auto__ = [];
var len__37877__auto___49684 = arguments.length;
var i__37878__auto___49685 = (0);
while(true){
if((i__37878__auto___49685 < len__37877__auto___49684)){
args__37884__auto__.push((arguments[i__37878__auto___49685]));

var G__49686 = (i__37878__auto___49685 + (1));
i__37878__auto___49685 = G__49686;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((0) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((0)),(0),null)):null);
return cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(argseq__37885__auto__);
});

cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.every_QMARK_.call(null,(function (p1__49681_SHARP_){
return (p1__49681_SHARP_ instanceof goog.date.Date);
}),args)){
return cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,(function (p1__49682_SHARP_){
return p1__49682_SHARP_.getTime();
}),args));
} else {
return cljs.core.apply.call(null,cljs.core._EQ_,args);

}
});

cljs_time.internal.core._EQ_.cljs$lang$maxFixedArity = (0);

cljs_time.internal.core._EQ_.cljs$lang$applyTo = (function (seq49683){
return cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49683));
});

cljs_time.internal.core.leap_year_QMARK_ = (function cljs_time$internal$core$leap_year_QMARK_(y){
if((cljs.core.mod.call(null,y,(400)) === (0))){
return true;
} else {
if((cljs.core.mod.call(null,y,(100)) === (0))){
return false;
} else {
if((cljs.core.mod.call(null,y,(4)) === (0))){
return true;
} else {
return false;

}
}
}
});
cljs_time.internal.core.days_in_month = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
cljs_time.internal.core.corrected_dim = (function cljs_time$internal$core$corrected_dim(month){
return cljs_time.internal.core.days_in_month.call(null,(cljs.core.truth_(cljs_time.internal.core._EQ_.call(null,month,(1)))?(11):(month - (1))));
});
cljs_time.internal.core.year_corrected_dim = (function cljs_time$internal$core$year_corrected_dim(year,month){
var G__49688 = cljs_time.internal.core.corrected_dim.call(null,month);
if(cljs.core.truth_((function (){var and__36790__auto__ = cljs_time.internal.core.leap_year_QMARK_.call(null,year);
if(cljs.core.truth_(and__36790__auto__)){
return cljs_time.internal.core._EQ_.call(null,month,(2));
} else {
return and__36790__auto__;
}
})())){
return (G__49688 + (1));
} else {
return G__49688;
}
});
cljs_time.internal.core.valid_date_QMARK_ = (function cljs_time$internal$core$valid_date_QMARK_(p__49689){
var map__49693 = p__49689;
var map__49693__$1 = ((((!((map__49693 == null)))?((((map__49693.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49693.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49693):map__49693);
var d = map__49693__$1;
var years = cljs.core.get.call(null,map__49693__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var months = cljs.core.get.call(null,map__49693__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var days = cljs.core.get.call(null,map__49693__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.call(null,map__49693__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var minutes = cljs.core.get.call(null,map__49693__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var seconds = cljs.core.get.call(null,map__49693__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var millis = cljs.core.get.call(null,map__49693__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var months_QMARK_ = (cljs.core.truth_(months)?(((1) <= months)) && ((months <= (12))):null);
var dim = (cljs.core.truth_(years)?(function (){var and__36790__auto__ = months;
if(cljs.core.truth_(and__36790__auto__)){
var and__36790__auto____$1 = months_QMARK_;
if(cljs.core.truth_(and__36790__auto____$1)){
return cljs_time.internal.core.year_corrected_dim.call(null,years,months);
} else {
return and__36790__auto____$1;
}
} else {
return and__36790__auto__;
}
})():(function (){var and__36790__auto__ = months;
if(cljs.core.truth_(and__36790__auto__)){
var and__36790__auto____$1 = months_QMARK_;
if(cljs.core.truth_(and__36790__auto____$1)){
return cljs_time.internal.core.corrected_dim.call(null,months);
} else {
return and__36790__auto____$1;
}
} else {
return and__36790__auto__;
}
})());
var days_QMARK_ = (cljs.core.truth_(days)?(cljs.core.truth_(dim)?(((1) <= days)) && ((days <= dim)):(((1) <= days)) && ((days <= (31)))):null);
var hours_QMARK_ = (cljs.core.truth_(hours)?(((0) <= hours)) && ((hours <= (23))):null);
var minutes_QMARK_ = (cljs.core.truth_(minutes)?(((0) <= minutes)) && ((minutes <= (59))):null);
var seconds_QMARK_ = (cljs.core.truth_(seconds)?(((0) <= seconds)) && ((seconds <= (60))):null);
var millis_QMARK_ = (cljs.core.truth_(millis)?(((0) <= millis)) && ((millis <= (999))):null);
if(cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [months_QMARK_,days_QMARK_,hours_QMARK_,minutes_QMARK_,seconds_QMARK_,millis_QMARK_], null)))){
return d;
} else {
throw cljs.core.ex_info.call(null,"Date is not valid",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"invalid-date","invalid-date",2030506573),new cljs.core.Keyword(null,"date","date",-1463434462),d,new cljs.core.Keyword(null,"errors","errors",-908790718),(function (){var G__49695 = cljs.core.PersistentArrayMap.EMPTY;
var G__49695__$1 = ((months_QMARK_ === false)?cljs.core.assoc.call(null,G__49695,new cljs.core.Keyword(null,"months","months",-45571637),months):G__49695);
var G__49695__$2 = ((days_QMARK_ === false)?cljs.core.assoc.call(null,G__49695__$1,new cljs.core.Keyword(null,"days","days",-1394072564),days):G__49695__$1);
var G__49695__$3 = ((hours_QMARK_ === false)?cljs.core.assoc.call(null,G__49695__$2,new cljs.core.Keyword(null,"hours","hours",58380855),hours):G__49695__$2);
var G__49695__$4 = ((minutes_QMARK_ === false)?cljs.core.assoc.call(null,G__49695__$3,new cljs.core.Keyword(null,"minutes","minutes",1319166394),minutes):G__49695__$3);
var G__49695__$5 = ((seconds_QMARK_ === false)?cljs.core.assoc.call(null,G__49695__$4,new cljs.core.Keyword(null,"seconds","seconds",-445266194),seconds):G__49695__$4);
if(millis_QMARK_ === false){
return cljs.core.assoc.call(null,G__49695__$5,new cljs.core.Keyword(null,"millis","millis",-1338288387),millis);
} else {
return G__49695__$5;
}
})()], null));
}
});
cljs_time.internal.core.index_of = (function cljs_time$internal$core$index_of(coll,x){
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__49697_SHARP_,p2__49696_SHARP_){
if(cljs.core.truth_(cljs_time.internal.core._EQ_.call(null,p2__49696_SHARP_,x))){
return p1__49697_SHARP_;
} else {
return null;
}
}),coll));
});
/**
 * Formats a string using goog.string.format.
 */
cljs_time.internal.core.format = (function cljs_time$internal$core$format(var_args){
var args__37884__auto__ = [];
var len__37877__auto___49700 = arguments.length;
var i__37878__auto___49701 = (0);
while(true){
if((i__37878__auto___49701 < len__37877__auto___49700)){
args__37884__auto__.push((arguments[i__37878__auto___49701]));

var G__49702 = (i__37878__auto___49701 + (1));
i__37878__auto___49701 = G__49702;
continue;
} else {
}
break;
}

var argseq__37885__auto__ = ((((1) < args__37884__auto__.length))?(new cljs.core.IndexedSeq(args__37884__auto__.slice((1)),(0),null)):null);
return cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37885__auto__);
});

cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
var args__$1 = cljs.core.map.call(null,(function (x){
if(((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol))){
return [cljs.core.str(x)].join('');
} else {
return x;
}
}),args);
return cljs.core.apply.call(null,goog.string.format,fmt,args__$1);
});

cljs_time.internal.core.format.cljs$lang$maxFixedArity = (1);

cljs_time.internal.core.format.cljs$lang$applyTo = (function (seq49698){
var G__49699 = cljs.core.first.call(null,seq49698);
var seq49698__$1 = cljs.core.next.call(null,seq49698);
return cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic(G__49699,seq49698__$1);
});

/**
 * Remove the need to pull in gstring/format code in advanced compilation
 */
cljs_time.internal.core.zero_pad = (function cljs_time$internal$core$zero_pad(var_args){
var args49703 = [];
var len__37877__auto___49706 = arguments.length;
var i__37878__auto___49707 = (0);
while(true){
if((i__37878__auto___49707 < len__37877__auto___49706)){
args49703.push((arguments[i__37878__auto___49707]));

var G__49708 = (i__37878__auto___49707 + (1));
i__37878__auto___49707 = G__49708;
continue;
} else {
}
break;
}

var G__49705 = args49703.length;
switch (G__49705) {
case 1:
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49703.length)].join('')));

}
});

cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1 = (function (n){
if((((0) <= n)) && ((n <= (9)))){
return [cljs.core.str("0"),cljs.core.str(n)].join('');
} else {
return [cljs.core.str(n)].join('');
}
});

cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$2 = (function (n,zeros){
if((zeros < (1))){
return [cljs.core.str(n)].join('');
} else {
return [cljs.core.str(clojure.string.join.call(null,cljs.core.take.call(null,(zeros - cljs.core.count.call(null,[cljs.core.str(n)].join(''))),cljs.core.repeat.call(null,"0")))),cljs.core.str(n)].join('');
}
});

cljs_time.internal.core.zero_pad.cljs$lang$maxFixedArity = 2;

cljs_time.internal.core.multiplied_by = (function cljs_time$internal$core$multiplied_by(period,scalar){
var scale_fn = (function cljs_time$internal$core$multiplied_by_$_scale_fn(field){
if(cljs.core.truth_(field)){
return (field * scalar);
} else {
return null;
}
});
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,period,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"millis","millis",-1338288387)], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seconds","seconds",-445266194)], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minutes","minutes",1319166394)], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hours","hours",58380855)], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"days","days",-1394072564)], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weeks","weeks",1844596125)], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"months","months",-45571637)], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"years","years",-1298579689)], null),scale_fn);
});

//# sourceMappingURL=core.js.map