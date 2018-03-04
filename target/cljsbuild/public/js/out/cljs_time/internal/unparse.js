// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs_time.internal.unparse');
goog.require('cljs.core');
goog.require('cljs_time.internal.core');
goog.require('cljs_time.internal.parse');
goog.require('goog.date');
goog.require('goog.date.Date');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
goog.require('goog.date.Interval');
cljs_time.internal.unparse.unparse_period = (function cljs_time$internal$unparse$unparse_period(s,d,num,min,max){
var n = cljs_time.internal.core.zero_pad.call(null,num,min);
var c = cljs.core.count.call(null,n);
var n__$1 = cljs.core.subs.call(null,n,(c - max));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(s),cljs.core.str(n__$1)].join(''),d], null);
});
cljs_time.internal.unparse.unparse_millis = (function cljs_time$internal$unparse$unparse_millis(var_args){
var args50264 = [];
var len__37878__auto___50267 = arguments.length;
var i__37879__auto___50268 = (0);
while(true){
if((i__37879__auto___50268 < len__37878__auto___50267)){
args50264.push((arguments[i__37879__auto___50268]));

var G__50269 = (i__37879__auto___50268 + (1));
i__37879__auto___50268 = G__50269;
continue;
} else {
}
break;
}

var G__50266 = args50264.length;
switch (G__50266) {
case 1:
return cljs_time.internal.unparse.unparse_millis.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_millis.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50264.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_millis.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_millis.call(null,min,min);
});

cljs_time.internal.unparse.unparse_millis.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period.call(null,s,d,d.getMilliseconds(),min,max);
});
});

cljs_time.internal.unparse.unparse_millis.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_seconds = (function cljs_time$internal$unparse$unparse_seconds(var_args){
var args50271 = [];
var len__37878__auto___50274 = arguments.length;
var i__37879__auto___50275 = (0);
while(true){
if((i__37879__auto___50275 < len__37878__auto___50274)){
args50271.push((arguments[i__37879__auto___50275]));

var G__50276 = (i__37879__auto___50275 + (1));
i__37879__auto___50275 = G__50276;
continue;
} else {
}
break;
}

var G__50273 = args50271.length;
switch (G__50273) {
case 1:
return cljs_time.internal.unparse.unparse_seconds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_seconds.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50271.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_seconds.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_seconds.call(null,min,min);
});

cljs_time.internal.unparse.unparse_seconds.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period.call(null,s,d,d.getSeconds(),min,max);
});
});

cljs_time.internal.unparse.unparse_seconds.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_minutes = (function cljs_time$internal$unparse$unparse_minutes(var_args){
var args50278 = [];
var len__37878__auto___50281 = arguments.length;
var i__37879__auto___50282 = (0);
while(true){
if((i__37879__auto___50282 < len__37878__auto___50281)){
args50278.push((arguments[i__37879__auto___50282]));

var G__50283 = (i__37879__auto___50282 + (1));
i__37879__auto___50282 = G__50283;
continue;
} else {
}
break;
}

var G__50280 = args50278.length;
switch (G__50280) {
case 1:
return cljs_time.internal.unparse.unparse_minutes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_minutes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50278.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_minutes.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_minutes.call(null,min,min);
});

cljs_time.internal.unparse.unparse_minutes.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period.call(null,s,d,d.getMinutes(),min,max);
});
});

cljs_time.internal.unparse.unparse_minutes.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_hours = (function cljs_time$internal$unparse$unparse_hours(var_args){
var args50285 = [];
var len__37878__auto___50288 = arguments.length;
var i__37879__auto___50289 = (0);
while(true){
if((i__37879__auto___50289 < len__37878__auto___50288)){
args50285.push((arguments[i__37879__auto___50289]));

var G__50290 = (i__37879__auto___50289 + (1));
i__37879__auto___50289 = G__50290;
continue;
} else {
}
break;
}

var G__50287 = args50285.length;
switch (G__50287) {
case 1:
return cljs_time.internal.unparse.unparse_hours.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_hours.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50285.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_hours.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_hours.call(null,min,min);
});

cljs_time.internal.unparse.unparse_hours.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
var hr = cljs.core.mod.call(null,d.getHours(),(12));
var hours = (((hr === (0)))?(12):hr);
return cljs_time.internal.unparse.unparse_period.call(null,s,d,hours,min,max);
});
});

cljs_time.internal.unparse.unparse_hours.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_HOURS = (function cljs_time$internal$unparse$unparse_HOURS(var_args){
var args50292 = [];
var len__37878__auto___50295 = arguments.length;
var i__37879__auto___50296 = (0);
while(true){
if((i__37879__auto___50296 < len__37878__auto___50295)){
args50292.push((arguments[i__37879__auto___50296]));

var G__50297 = (i__37879__auto___50296 + (1));
i__37879__auto___50296 = G__50297;
continue;
} else {
}
break;
}

var G__50294 = args50292.length;
switch (G__50294) {
case 1:
return cljs_time.internal.unparse.unparse_HOURS.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_HOURS.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50292.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_HOURS.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_HOURS.call(null,min,min);
});

cljs_time.internal.unparse.unparse_HOURS.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period.call(null,s,d,d.getHours(),min,max);
});
});

cljs_time.internal.unparse.unparse_HOURS.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_day = (function cljs_time$internal$unparse$unparse_day(var_args){
var args50299 = [];
var len__37878__auto___50302 = arguments.length;
var i__37879__auto___50303 = (0);
while(true){
if((i__37879__auto___50303 < len__37878__auto___50302)){
args50299.push((arguments[i__37879__auto___50303]));

var G__50304 = (i__37879__auto___50303 + (1));
i__37879__auto___50303 = G__50304;
continue;
} else {
}
break;
}

var G__50301 = args50299.length;
switch (G__50301) {
case 1:
return cljs_time.internal.unparse.unparse_day.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_day.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50299.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_day.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_day.call(null,min,min);
});

cljs_time.internal.unparse.unparse_day.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period.call(null,s,d,d.getDate(),min,max);
});
});

cljs_time.internal.unparse.unparse_day.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_day_of_year = (function cljs_time$internal$unparse$unparse_day_of_year(var_args){
var args50306 = [];
var len__37878__auto___50309 = arguments.length;
var i__37879__auto___50310 = (0);
while(true){
if((i__37879__auto___50310 < len__37878__auto___50309)){
args50306.push((arguments[i__37879__auto___50310]));

var G__50311 = (i__37879__auto___50310 + (1));
i__37879__auto___50310 = G__50311;
continue;
} else {
}
break;
}

var G__50308 = args50306.length;
switch (G__50308) {
case 1:
return cljs_time.internal.unparse.unparse_day_of_year.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_day_of_year.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50306.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_day_of_year.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_day.call(null,min,min);
});

cljs_time.internal.unparse.unparse_day_of_year.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period.call(null,s,d,d.getDate(),min,max);
});
});

cljs_time.internal.unparse.unparse_day_of_year.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_month = (function cljs_time$internal$unparse$unparse_month(var_args){
var args50313 = [];
var len__37878__auto___50316 = arguments.length;
var i__37879__auto___50317 = (0);
while(true){
if((i__37879__auto___50317 < len__37878__auto___50316)){
args50313.push((arguments[i__37879__auto___50317]));

var G__50318 = (i__37879__auto___50317 + (1));
i__37879__auto___50317 = G__50318;
continue;
} else {
}
break;
}

var G__50315 = args50313.length;
switch (G__50315) {
case 1:
return cljs_time.internal.unparse.unparse_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50313.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_month.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_month.call(null,min,min);
});

cljs_time.internal.unparse.unparse_month.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period.call(null,s,d,(d.getMonth() + (1)),min,max);
});
});

cljs_time.internal.unparse.unparse_month.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_year = (function cljs_time$internal$unparse$unparse_year(var_args){
var args50320 = [];
var len__37878__auto___50323 = arguments.length;
var i__37879__auto___50324 = (0);
while(true){
if((i__37879__auto___50324 < len__37878__auto___50323)){
args50320.push((arguments[i__37879__auto___50324]));

var G__50325 = (i__37879__auto___50324 + (1));
i__37879__auto___50324 = G__50325;
continue;
} else {
}
break;
}

var G__50322 = args50320.length;
switch (G__50322) {
case 1:
return cljs_time.internal.unparse.unparse_year.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_year.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50320.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_year.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_year.call(null,min,min);
});

cljs_time.internal.unparse.unparse_year.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period.call(null,s,d,d.getYear(),min,max);
});
});

cljs_time.internal.unparse.unparse_year.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_quoted = (function cljs_time$internal$unparse$unparse_quoted(quoted){
return (function (s,d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.str,s,quoted),d], null);
});
});
cljs_time.internal.unparse.unparse_period_name = (function cljs_time$internal$unparse$unparse_period_name(s,d,n,periods,short_QMARK_){
var periods__$1 = cljs.core.vec.call(null,(function (){var G__50329 = periods;
if(cljs.core.truth_(short_QMARK_)){
return cljs.core.map.call(null,((function (G__50329){
return (function (p1__50327_SHARP_){
return cljs.core.subs.call(null,p1__50327_SHARP_,(0),(3));
});})(G__50329))
,G__50329);
} else {
return G__50329;
}
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(s),cljs.core.str(periods__$1.call(null,n))].join(''),d], null);
});
cljs_time.internal.unparse.unparse_month_name = (function cljs_time$internal$unparse$unparse_month_name(short_QMARK_){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period_name.call(null,s,d,d.getMonth(),cljs_time.internal.core.months,short_QMARK_);
});
});
cljs_time.internal.unparse.unparse_day_name = (function cljs_time$internal$unparse$unparse_day_name(short_QMARK_){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period_name.call(null,s,d,d.getDay(),cljs_time.internal.core.days,short_QMARK_);
});
});
cljs_time.internal.unparse.unparse_weekyear = (function cljs_time$internal$unparse$unparse_weekyear(var_args){
var args50330 = [];
var len__37878__auto___50333 = arguments.length;
var i__37879__auto___50334 = (0);
while(true){
if((i__37879__auto___50334 < len__37878__auto___50333)){
args50330.push((arguments[i__37879__auto___50334]));

var G__50335 = (i__37879__auto___50334 + (1));
i__37879__auto___50334 = G__50335;
continue;
} else {
}
break;
}

var G__50332 = args50330.length;
switch (G__50332) {
case 1:
return cljs_time.internal.unparse.unparse_weekyear.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_weekyear.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50330.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_weekyear.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_weekyear.call(null,min,min);
});

cljs_time.internal.unparse.unparse_weekyear.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
var year = d.getYear();
var month = d.getMonth();
var day = d.getDate();
var january = cljs.core._EQ_.call(null,month,(0));
var december = cljs.core._EQ_.call(null,month,(11));
var week_number = goog.date.getWeekNumber(year,month,day);
var weekyear = (((january) && ((week_number >= (52))))?(year - (1)):(((december) && (cljs.core._EQ_.call(null,week_number,(1))))?(year + (1)):year
));
return cljs_time.internal.unparse.unparse_period.call(null,s,d,weekyear,min,max);
});
});

cljs_time.internal.unparse.unparse_weekyear.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_weekyear_week = (function cljs_time$internal$unparse$unparse_weekyear_week(var_args){
var args50337 = [];
var len__37878__auto___50340 = arguments.length;
var i__37879__auto___50341 = (0);
while(true){
if((i__37879__auto___50341 < len__37878__auto___50340)){
args50337.push((arguments[i__37879__auto___50341]));

var G__50342 = (i__37879__auto___50341 + (1));
i__37879__auto___50341 = G__50342;
continue;
} else {
}
break;
}

var G__50339 = args50337.length;
switch (G__50339) {
case 1:
return cljs_time.internal.unparse.unparse_weekyear_week.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_weekyear_week.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50337.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_weekyear_week.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_weekyear_week.call(null,min,min);
});

cljs_time.internal.unparse.unparse_weekyear_week.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
var year = d.getYear();
var month = d.getMonth();
var day = d.getDate();
return cljs_time.internal.unparse.unparse_period.call(null,s,d,goog.date.getWeekNumber(year,month,day),min,max);
});
});

cljs_time.internal.unparse.unparse_weekyear_week.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_meridiem = (function cljs_time$internal$unparse$unparse_meridiem(capitalize_QMARK_){
return (function (s,d){
var hours = d.getHours();
var meridiem = (cljs.core.truth_(capitalize_QMARK_)?(((hours < (12)))?"AM":"PM"):(((hours < (12)))?"am":"pm"));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(s),cljs.core.str(meridiem)].join(''),d], null);
});
});
cljs_time.internal.unparse.unparse_timezone = (function cljs_time$internal$unparse$unparse_timezone(){
return (function (s,d){
if((d instanceof goog.date.UtcDateTime)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(s),cljs.core.str(d.getTimezoneOffsetString())].join(''),d], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,d], null);
}
});
});
cljs_time.internal.unparse.unparse_ordinal_suffix = (function cljs_time$internal$unparse$unparse_ordinal_suffix(getter){
return (function (s,d){
var n = getter.call(null,d);
var o = (function (){var G__50345 = n;
switch (G__50345) {
case (1):
return "st";

break;
case (2):
return "nd";

break;
case (3):
return "rd";

break;
case (21):
return "st";

break;
case (22):
return "nd";

break;
case (23):
return "rd";

break;
case (31):
return "st";

break;
default:
return "th";

}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(s),cljs.core.str(o)].join(''),d], null);
});
});
cljs_time.internal.unparse.lookup = (function cljs_time$internal$unparse$lookup(p__50347){
var vec__50352 = p__50347;
var t = cljs.core.nth.call(null,vec__50352,(0),null);
var pattern = cljs.core.nth.call(null,vec__50352,(1),null);
if(cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"token","token",-1211463215))){
var G__50355 = pattern;
switch (G__50355) {
case "S":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"millis","millis",-1338288387),(1),(2)], null);

break;
case "SSS":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"millis","millis",-1338288387),(3),(3)], null);

break;
case "s":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seconds","seconds",-445266194),(1),(2)], null);

break;
case "ss":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seconds","seconds",-445266194),(2),(2)], null);

break;
case "m":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minutes","minutes",1319166394),(1),(2)], null);

break;
case "mm":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minutes","minutes",1319166394),(2),(2)], null);

break;
case "h":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hours","hours",58380855),(1),(2)], null);

break;
case "hh":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hours","hours",58380855),(2),(2)], null);

break;
case "H":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"HOURS","HOURS",-1611068963),(1),(2)], null);

break;
case "HH":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"HOURS","HOURS",-1611068963),(2),(2)], null);

break;
case "d":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day","day",-274800446),(1),(2)], null);

break;
case "dd":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day","day",-274800446),(2),(2)], null);

break;
case "D":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day","day",-274800446),(1),(3)], null);

break;
case "DD":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day","day",-274800446),(2),(3)], null);

break;
case "DDD":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day","day",-274800446),(3),(3)], null);

break;
case "M":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month","month",-1960248533),(1),(2)], null);

break;
case "MM":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month","month",-1960248533),(2),(2)], null);

break;
case "MMM":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month-name","month-name",-605509534),true], null);

break;
case "MMMM":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month-name","month-name",-605509534),false], null);

break;
case "y":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),(1),(4)], null);

break;
case "yy":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),(2),(2)], null);

break;
case "yyyy":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),(4),(4)], null);

break;
case "Y":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),(1),(4)], null);

break;
case "YY":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),(2),(2)], null);

break;
case "YYYY":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),(4),(4)], null);

break;
case "x":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekyear","weekyear",-74064500),(1),(4)], null);

break;
case "xx":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekyear","weekyear",-74064500),(2),(2)], null);

break;
case "xxxx":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekyear","weekyear",-74064500),(4),(4)], null);

break;
case "w":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekyear-week","weekyear-week",795291571),(1),(2)], null);

break;
case "ww":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekyear-week","weekyear-week",795291571),(2),(2)], null);

break;
case "E":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day-name","day-name",1806125744),true], null);

break;
case "EEE":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day-name","day-name",1806125744),true], null);

break;
case "EEEE":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day-name","day-name",1806125744),false], null);

break;
case "a":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meridiem","meridiem",1668960617),false], null);

break;
case "A":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meridiem","meridiem",1668960617),true], null);

break;
case "Z":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timezone","timezone",1831928099)], null);

break;
case "ZZ":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timezone","timezone",1831928099)], null);

break;
case "o":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ordinal-suffix","ordinal-suffix",-1311843199)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(pattern)].join('')));

}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quoted","quoted",2117344952),pattern], null);
}
});
cljs_time.internal.unparse.lookup_getter = (function cljs_time$internal$unparse$lookup_getter(key){
var G__50366 = (((key instanceof cljs.core.Keyword))?key.fqn:null);
switch (G__50366) {
case "millis":
return ((function (G__50366){
return (function (p1__50357_SHARP_){
return p1__50357_SHARP_.getMilliseconds();
});
;})(G__50366))

break;
case "seconds":
return ((function (G__50366){
return (function (p1__50358_SHARP_){
return p1__50358_SHARP_.getSeconds();
});
;})(G__50366))

break;
case "minutes":
return ((function (G__50366){
return (function (p1__50359_SHARP_){
return p1__50359_SHARP_.getMinutes();
});
;})(G__50366))

break;
case "hours":
return ((function (G__50366){
return (function (p1__50360_SHARP_){
return p1__50360_SHARP_.getHours();
});
;})(G__50366))

break;
case "HOURS":
return ((function (G__50366){
return (function (p1__50361_SHARP_){
return p1__50361_SHARP_.getHours();
});
;})(G__50366))

break;
case "day":
return ((function (G__50366){
return (function (p1__50362_SHARP_){
return p1__50362_SHARP_.getDate();
});
;})(G__50366))

break;
case "month":
return ((function (G__50366){
return (function (p1__50363_SHARP_){
return p1__50363_SHARP_.getMonth();
});
;})(G__50366))

break;
case "year":
return ((function (G__50366){
return (function (p1__50364_SHARP_){
return p1__50364_SHARP_.getYear();
});
;})(G__50366))

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(key)].join('')));

}
});
cljs_time.internal.unparse.lookup_fn = (function cljs_time$internal$unparse$lookup_fn(syntax_list,i,p__50368){
var vec__50376 = p__50368;
var seq__50377 = cljs.core.seq.call(null,vec__50376);
var first__50378 = cljs.core.first.call(null,seq__50377);
var seq__50377__$1 = cljs.core.next.call(null,seq__50377);
var key = first__50378;
var args = seq__50377__$1;
var G__50379 = (((key instanceof cljs.core.Keyword))?key.fqn:null);
switch (G__50379) {
case "ordinal-suffix":
var vec__50380 = syntax_list.call(null,(i - (1)));
var k = cljs.core.nth.call(null,vec__50380,(0),null);
return cljs_time.internal.unparse.unparse_ordinal_suffix.call(null,cljs_time.internal.unparse.lookup_getter.call(null,k));

break;
case "month-name":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_month_name,args);

break;
case "day":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_day,args);

break;
case "timezone":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_timezone,args);

break;
case "meridiem":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_meridiem,args);

break;
case "month":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_month,args);

break;
case "weekyear":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_weekyear,args);

break;
case "seconds":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_seconds,args);

break;
case "day-name":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_day_name,args);

break;
case "year":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_year,args);

break;
case "weekyear-week":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_weekyear_week,args);

break;
case "hours":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_hours,args);

break;
case "quoted":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_quoted,args);

break;
case "minutes":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_minutes,args);

break;
case "HOURS":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_HOURS,args);

break;
case "millis":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_millis,args);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(key)].join('')));

}
});
cljs_time.internal.unparse.unparse = (function cljs_time$internal$unparse$unparse(pattern,value){
var syn_list = cljs.core.mapv.call(null,cljs_time.internal.unparse.lookup,cljs_time.internal.parse.read_pattern.call(null,pattern));
var d = value;
var G__50400 = cljs.core.map_indexed.call(null,cljs.core.partial.call(null,cljs_time.internal.unparse.lookup_fn,syn_list),syn_list);
var vec__50401 = G__50400;
var seq__50402 = cljs.core.seq.call(null,vec__50401);
var first__50403 = cljs.core.first.call(null,seq__50402);
var seq__50402__$1 = cljs.core.next.call(null,seq__50402);
var unparser = first__50403;
var more = seq__50402__$1;
var s = "";
var d__$1 = d;
var G__50400__$1 = G__50400;
var s__$1 = s;
while(true){
var d__$2 = d__$1;
var vec__50404 = G__50400__$1;
var seq__50405 = cljs.core.seq.call(null,vec__50404);
var first__50406 = cljs.core.first.call(null,seq__50405);
var seq__50405__$1 = cljs.core.next.call(null,seq__50405);
var unparser__$1 = first__50406;
var more__$1 = seq__50405__$1;
var s__$2 = s__$1;
if((unparser__$1 == null)){
return s__$2;
} else {
var vec__50407 = unparser__$1.call(null,s__$2,d__$2);
var s__$3 = cljs.core.nth.call(null,vec__50407,(0),null);
var d__$3 = cljs.core.nth.call(null,vec__50407,(1),null);
var G__50410 = d__$3;
var G__50411 = more__$1;
var G__50412 = s__$3;
d__$1 = G__50410;
G__50400__$1 = G__50411;
s__$1 = G__50412;
continue;
}
break;
}
});

//# sourceMappingURL=unparse.js.map