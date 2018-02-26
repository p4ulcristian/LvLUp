// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs_time.core');
goog.require('cljs.core');
goog.require('cljs_time.internal.core');
goog.require('clojure.string');
goog.require('goog.date.Interval');
goog.require('goog.date');
goog.require('goog.date.Date');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
cljs_time.core.deprecated = (function cljs_time$core$deprecated(message){
return cljs.core.println.call(null,"DEPRECATION WARNING: ",message);
});
/**
 * **Note:** Equality in goog.date.* (and also with plain
 * javascript dates) is not the same as in Joda/clj-time. Two date
 * objects representing the same instant in time in goog.date.* are not
 * equal.
 * 
 * If you need to test for equality use either `cljs-time.core/=`, or
 * optionally you can require the `cljs-time.extend` namespace which will
 * extend the goog.date.* datatypes, so that clojure.core/= works as
 * expected.
 */
cljs_time.core._EQ_ = cljs_time.internal.core._EQ_;

/**
 * Interface for various date time functions
 * @interface
 */
cljs_time.core.DateTimeProtocol = function(){};

/**
 * Return the year component of the given date/time.
 */
cljs_time.core.year = (function cljs_time$core$year(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$year$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$year$arity$1(this$);
} else {
var x__37435__auto__ = (((this$ == null))?null:this$);
var m__37436__auto__ = (cljs_time.core.year[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,this$);
} else {
var m__37436__auto____$1 = (cljs_time.core.year["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.year",this$);
}
}
}
});

/**
 * Return the month component of the given date/time.
 */
cljs_time.core.month = (function cljs_time$core$month(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$month$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$month$arity$1(this$);
} else {
var x__37435__auto__ = (((this$ == null))?null:this$);
var m__37436__auto__ = (cljs_time.core.month[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,this$);
} else {
var m__37436__auto____$1 = (cljs_time.core.month["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.month",this$);
}
}
}
});

/**
 * Return the day of month component of the given date/time.
 */
cljs_time.core.day = (function cljs_time$core$day(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$day$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$day$arity$1(this$);
} else {
var x__37435__auto__ = (((this$ == null))?null:this$);
var m__37436__auto__ = (cljs_time.core.day[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,this$);
} else {
var m__37436__auto____$1 = (cljs_time.core.day["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.day",this$);
}
}
}
});

/**
 * Return the day of week component of the given date/time. Monday is 1 and Sunday is 7
 */
cljs_time.core.day_of_week = (function cljs_time$core$day_of_week(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1(this$);
} else {
var x__37435__auto__ = (((this$ == null))?null:this$);
var m__37436__auto__ = (cljs_time.core.day_of_week[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,this$);
} else {
var m__37436__auto____$1 = (cljs_time.core.day_of_week["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.day-of-week",this$);
}
}
}
});

/**
 * Return the hour of day component of the given date/time. A time of 12:01am will have an hour component of 0.
 */
cljs_time.core.hour = (function cljs_time$core$hour(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$hour$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$hour$arity$1(this$);
} else {
var x__37435__auto__ = (((this$ == null))?null:this$);
var m__37436__auto__ = (cljs_time.core.hour[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,this$);
} else {
var m__37436__auto____$1 = (cljs_time.core.hour["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.hour",this$);
}
}
}
});

/**
 * Return the minute of hour component of the given date/time.
 */
cljs_time.core.minute = (function cljs_time$core$minute(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$minute$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$minute$arity$1(this$);
} else {
var x__37435__auto__ = (((this$ == null))?null:this$);
var m__37436__auto__ = (cljs_time.core.minute[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,this$);
} else {
var m__37436__auto____$1 = (cljs_time.core.minute["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.minute",this$);
}
}
}
});

/**
 * Return the second of minute component of the given date/time.
 */
cljs_time.core.sec = (function cljs_time$core$sec(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$sec$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$sec$arity$1(this$);
} else {
var x__37435__auto__ = (((this$ == null))?null:this$);
var m__37436__auto__ = (cljs_time.core.sec[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,this$);
} else {
var m__37436__auto____$1 = (cljs_time.core.sec["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.sec",this$);
}
}
}
});

/**
 * Return the second of minute component of the given date/time.
 */
cljs_time.core.second = (function cljs_time$core$second(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$second$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$second$arity$1(this$);
} else {
var x__37435__auto__ = (((this$ == null))?null:this$);
var m__37436__auto__ = (cljs_time.core.second[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,this$);
} else {
var m__37436__auto____$1 = (cljs_time.core.second["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.second",this$);
}
}
}
});

/**
 * Return the millisecond of second component of the given date/time.
 */
cljs_time.core.milli = (function cljs_time$core$milli(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$milli$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$milli$arity$1(this$);
} else {
var x__37435__auto__ = (((this$ == null))?null:this$);
var m__37436__auto__ = (cljs_time.core.milli[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,this$);
} else {
var m__37436__auto____$1 = (cljs_time.core.milli["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.milli",this$);
}
}
}
});

/**
 * Returns true if DateTime 'this' is strictly equal to date/time 'that'.
 */
cljs_time.core.equal_QMARK_ = (function cljs_time$core$equal_QMARK_(this$,that){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2(this$,that);
} else {
var x__37435__auto__ = (((this$ == null))?null:this$);
var m__37436__auto__ = (cljs_time.core.equal_QMARK_[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,this$,that);
} else {
var m__37436__auto____$1 = (cljs_time.core.equal_QMARK_["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,this$,that);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.equal?",this$);
}
}
}
});

/**
 * Returns true if DateTime 'this' is strictly after date/time 'that'.
 */
cljs_time.core.after_QMARK_ = (function cljs_time$core$after_QMARK_(this$,that){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2(this$,that);
} else {
var x__37435__auto__ = (((this$ == null))?null:this$);
var m__37436__auto__ = (cljs_time.core.after_QMARK_[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,this$,that);
} else {
var m__37436__auto____$1 = (cljs_time.core.after_QMARK_["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,this$,that);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.after?",this$);
}
}
}
});

/**
 * Returns true if DateTime 'this' is strictly before date/time 'that'.
 */
cljs_time.core.before_QMARK_ = (function cljs_time$core$before_QMARK_(this$,that){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2(this$,that);
} else {
var x__37435__auto__ = (((this$ == null))?null:this$);
var m__37436__auto__ = (cljs_time.core.before_QMARK_[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,this$,that);
} else {
var m__37436__auto____$1 = (cljs_time.core.before_QMARK_["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,this$,that);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.before?",this$);
}
}
}
});

/**
 * Returns a new date/time corresponding to the given date/time moved forwards by the given Period(s).
 */
cljs_time.core.plus_ = (function cljs_time$core$plus_(this$,period){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$plus_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$plus_$arity$2(this$,period);
} else {
var x__37435__auto__ = (((this$ == null))?null:this$);
var m__37436__auto__ = (cljs_time.core.plus_[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,this$,period);
} else {
var m__37436__auto____$1 = (cljs_time.core.plus_["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,this$,period);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.plus-",this$);
}
}
}
});

/**
 * Returns a new date/time corresponding to the given date/time moved backwards by the given Period(s).
 */
cljs_time.core.minus_ = (function cljs_time$core$minus_(this$,period){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$minus_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$minus_$arity$2(this$,period);
} else {
var x__37435__auto__ = (((this$ == null))?null:this$);
var m__37436__auto__ = (cljs_time.core.minus_[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,this$,period);
} else {
var m__37436__auto____$1 = (cljs_time.core.minus_["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,this$,period);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.minus-",this$);
}
}
}
});

/**
 * Returns the first day of the month
 */
cljs_time.core.first_day_of_the_month_ = (function cljs_time$core$first_day_of_the_month_(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1(this$);
} else {
var x__37435__auto__ = (((this$ == null))?null:this$);
var m__37436__auto__ = (cljs_time.core.first_day_of_the_month_[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,this$);
} else {
var m__37436__auto____$1 = (cljs_time.core.first_day_of_the_month_["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.first-day-of-the-month-",this$);
}
}
}
});

/**
 * Returns the last day of the month
 */
cljs_time.core.last_day_of_the_month_ = (function cljs_time$core$last_day_of_the_month_(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1(this$);
} else {
var x__37435__auto__ = (((this$ == null))?null:this$);
var m__37436__auto__ = (cljs_time.core.last_day_of_the_month_[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,this$);
} else {
var m__37436__auto____$1 = (cljs_time.core.last_day_of_the_month_["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.last-day-of-the-month-",this$);
}
}
}
});

/**
 * Returs the number of weeks in the year
 */
cljs_time.core.week_number_of_year = (function cljs_time$core$week_number_of_year(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1(this$);
} else {
var x__37435__auto__ = (((this$ == null))?null:this$);
var m__37436__auto__ = (cljs_time.core.week_number_of_year[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,this$);
} else {
var m__37436__auto____$1 = (cljs_time.core.week_number_of_year["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.week-number-of-year",this$);
}
}
}
});


/**
 * Interface for in-<time unit> functions
 * @interface
 */
cljs_time.core.InTimeUnitProtocol = function(){};

/**
 * Return the time in milliseconds.
 */
cljs_time.core.in_millis = (function cljs_time$core$in_millis(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1(this$);
} else {
var x__37435__auto__ = (((this$ == null))?null:this$);
var m__37436__auto__ = (cljs_time.core.in_millis[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,this$);
} else {
var m__37436__auto____$1 = (cljs_time.core.in_millis["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-millis",this$);
}
}
}
});

/**
 * Return the time in seconds.
 */
cljs_time.core.in_seconds = (function cljs_time$core$in_seconds(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1(this$);
} else {
var x__37435__auto__ = (((this$ == null))?null:this$);
var m__37436__auto__ = (cljs_time.core.in_seconds[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,this$);
} else {
var m__37436__auto____$1 = (cljs_time.core.in_seconds["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-seconds",this$);
}
}
}
});

/**
 * Return the time in minutes.
 */
cljs_time.core.in_minutes = (function cljs_time$core$in_minutes(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1(this$);
} else {
var x__37435__auto__ = (((this$ == null))?null:this$);
var m__37436__auto__ = (cljs_time.core.in_minutes[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,this$);
} else {
var m__37436__auto____$1 = (cljs_time.core.in_minutes["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-minutes",this$);
}
}
}
});

/**
 * Return the time in hours.
 */
cljs_time.core.in_hours = (function cljs_time$core$in_hours(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1(this$);
} else {
var x__37435__auto__ = (((this$ == null))?null:this$);
var m__37436__auto__ = (cljs_time.core.in_hours[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,this$);
} else {
var m__37436__auto____$1 = (cljs_time.core.in_hours["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-hours",this$);
}
}
}
});

/**
 * Return the time in days.
 */
cljs_time.core.in_days = (function cljs_time$core$in_days(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1(this$);
} else {
var x__37435__auto__ = (((this$ == null))?null:this$);
var m__37436__auto__ = (cljs_time.core.in_days[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,this$);
} else {
var m__37436__auto____$1 = (cljs_time.core.in_days["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-days",this$);
}
}
}
});

/**
 * Return the time in weeks
 */
cljs_time.core.in_weeks = (function cljs_time$core$in_weeks(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1(this$);
} else {
var x__37435__auto__ = (((this$ == null))?null:this$);
var m__37436__auto__ = (cljs_time.core.in_weeks[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,this$);
} else {
var m__37436__auto____$1 = (cljs_time.core.in_weeks["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-weeks",this$);
}
}
}
});

/**
 * Return the time in months
 */
cljs_time.core.in_months = (function cljs_time$core$in_months(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1(this$);
} else {
var x__37435__auto__ = (((this$ == null))?null:this$);
var m__37436__auto__ = (cljs_time.core.in_months[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,this$);
} else {
var m__37436__auto____$1 = (cljs_time.core.in_months["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-months",this$);
}
}
}
});

/**
 * Return the time in years
 */
cljs_time.core.in_years = (function cljs_time$core$in_years(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1(this$);
} else {
var x__37435__auto__ = (((this$ == null))?null:this$);
var m__37436__auto__ = (cljs_time.core.in_years[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,this$);
} else {
var m__37436__auto____$1 = (cljs_time.core.in_years["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-years",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs_time.core.Interval = (function (start,end,__meta,__extmap,__hash){
this.start = start;
this.end = end;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__37394__auto__,k__37395__auto__){
var self__ = this;
var this__37394__auto____$1 = this;
return cljs.core._lookup.call(null,this__37394__auto____$1,k__37395__auto__,null);
});

cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__37396__auto__,k44441,else__37397__auto__){
var self__ = this;
var this__37396__auto____$1 = this;
var G__44443 = (((k44441 instanceof cljs.core.Keyword))?k44441.fqn:null);
switch (G__44443) {
case "start":
return self__.start;

break;
case "end":
return self__.end;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k44441,else__37397__auto__);

}
});

cljs_time.core.Interval.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__37408__auto__,writer__37409__auto__,opts__37410__auto__){
var self__ = this;
var this__37408__auto____$1 = this;
var pr_pair__37411__auto__ = ((function (this__37408__auto____$1){
return (function (keyval__37412__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__37409__auto__,cljs.core.pr_writer,""," ","",opts__37410__auto__,keyval__37412__auto__);
});})(this__37408__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__37409__auto__,pr_pair__37411__auto__,"#cljs-time.core.Interval{",", ","}",opts__37410__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end","end",-268185958),self__.end],null))], null),self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IIterable$ = true;

cljs_time.core.Interval.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44440){
var self__ = this;
var G__44440__$1 = this;
return (new cljs.core.RecordIter((0),G__44440__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"end","end",-268185958)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

cljs_time.core.Interval.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__37392__auto__){
var self__ = this;
var this__37392__auto____$1 = this;
return self__.__meta;
});

cljs_time.core.Interval.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__37388__auto__){
var self__ = this;
var this__37388__auto____$1 = this;
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,self__.__extmap,self__.__hash));
});

cljs_time.core.Interval.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__37398__auto__){
var self__ = this;
var this__37398__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__37389__auto__){
var self__ = this;
var this__37389__auto____$1 = this;
var h__37207__auto__ = self__.__hash;
if(!((h__37207__auto__ == null))){
return h__37207__auto__;
} else {
var h__37207__auto____$1 = cljs.core.hash_imap.call(null,this__37389__auto____$1);
self__.__hash = h__37207__auto____$1;

return h__37207__auto____$1;
}
});

cljs_time.core.Interval.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__37390__auto__,other__37391__auto__){
var self__ = this;
var this__37390__auto____$1 = this;
if(cljs.core.truth_((function (){var and__36760__auto__ = other__37391__auto__;
if(cljs.core.truth_(and__36760__auto__)){
var and__36760__auto____$1 = (this__37390__auto____$1.constructor === other__37391__auto__.constructor);
if(and__36760__auto____$1){
return cljs.core.equiv_map.call(null,this__37390__auto____$1,other__37391__auto__);
} else {
return and__36760__auto____$1;
}
} else {
return and__36760__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs_time.core.Interval.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__37403__auto__,k__37404__auto__){
var self__ = this;
var this__37403__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"end","end",-268185958),null], null), null),k__37404__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__37403__auto____$1),self__.__meta),k__37404__auto__);
} else {
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__37404__auto__)),null));
}
});

cljs_time.core.Interval.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__37401__auto__,k__37402__auto__,G__44440){
var self__ = this;
var this__37401__auto____$1 = this;
var pred__44444 = cljs.core.keyword_identical_QMARK_;
var expr__44445 = k__37402__auto__;
if(cljs.core.truth_(pred__44444.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__44445))){
return (new cljs_time.core.Interval(G__44440,self__.end,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44444.call(null,new cljs.core.Keyword(null,"end","end",-268185958),expr__44445))){
return (new cljs_time.core.Interval(self__.start,G__44440,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__37402__auto__,G__44440),null));
}
}
});

cljs_time.core.Interval.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__37406__auto__){
var self__ = this;
var this__37406__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end","end",-268185958),self__.end],null))], null),self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__37393__auto__,G__44440){
var self__ = this;
var this__37393__auto____$1 = this;
return (new cljs_time.core.Interval(self__.start,self__.end,G__44440,self__.__extmap,self__.__hash));
});

cljs_time.core.Interval.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__37399__auto__,entry__37400__auto__){
var self__ = this;
var this__37399__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__37400__auto__)){
return cljs.core._assoc.call(null,this__37399__auto____$1,cljs.core._nth.call(null,entry__37400__auto__,(0)),cljs.core._nth.call(null,entry__37400__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__37399__auto____$1,entry__37400__auto__);
}
});

cljs_time.core.Interval.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null)], null);
});

cljs_time.core.Interval.cljs$lang$type = true;

cljs_time.core.Interval.cljs$lang$ctorPrSeq = (function (this__37428__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs-time.core/Interval");
});

cljs_time.core.Interval.cljs$lang$ctorPrWriter = (function (this__37428__auto__,writer__37429__auto__){
return cljs.core._write.call(null,writer__37429__auto__,"cljs-time.core/Interval");
});

cljs_time.core.__GT_Interval = (function cljs_time$core$__GT_Interval(start,end){
return (new cljs_time.core.Interval(start,end,null,null,null));
});

cljs_time.core.map__GT_Interval = (function cljs_time$core$map__GT_Interval(G__44442){
return (new cljs_time.core.Interval(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__44442),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(G__44442),null,cljs.core.dissoc.call(null,G__44442,new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"end","end",-268185958)),null));
});

/**
 * Returns an Interval representing the span between the two given DateTime.
 *   Note that intervals are closed on the left and open on the right.
 */
cljs_time.core.interval = (function cljs_time$core$interval(start,end){
if((start.getTime() <= end.getTime())){
} else {
throw (new Error("Assert failed: (<= (.getTime start) (.getTime end))"));
}

return cljs_time.core.__GT_Interval.call(null,start,end);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs_time.core.Period = (function (years,months,weeks,days,hours,minutes,seconds,millis,__meta,__extmap,__hash){
this.years = years;
this.months = months;
this.weeks = weeks;
this.days = days;
this.hours = hours;
this.minutes = minutes;
this.seconds = seconds;
this.millis = millis;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__37394__auto__,k__37395__auto__){
var self__ = this;
var this__37394__auto____$1 = this;
return cljs.core._lookup.call(null,this__37394__auto____$1,k__37395__auto__,null);
});

cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__37396__auto__,k44449,else__37397__auto__){
var self__ = this;
var this__37396__auto____$1 = this;
var G__44451 = (((k44449 instanceof cljs.core.Keyword))?k44449.fqn:null);
switch (G__44451) {
case "years":
return self__.years;

break;
case "months":
return self__.months;

break;
case "weeks":
return self__.weeks;

break;
case "days":
return self__.days;

break;
case "hours":
return self__.hours;

break;
case "minutes":
return self__.minutes;

break;
case "seconds":
return self__.seconds;

break;
case "millis":
return self__.millis;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k44449,else__37397__auto__);

}
});

cljs_time.core.Period.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__37408__auto__,writer__37409__auto__,opts__37410__auto__){
var self__ = this;
var this__37408__auto____$1 = this;
var pr_pair__37411__auto__ = ((function (this__37408__auto____$1){
return (function (keyval__37412__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__37409__auto__,cljs.core.pr_writer,""," ","",opts__37410__auto__,keyval__37412__auto__);
});})(this__37408__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__37409__auto__,pr_pair__37411__auto__,"#cljs-time.core.Period{",", ","}",opts__37410__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"years","years",-1298579689),self__.years],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"months","months",-45571637),self__.months],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"weeks","weeks",1844596125),self__.weeks],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"days","days",-1394072564),self__.days],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hours","hours",58380855),self__.hours],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"minutes","minutes",1319166394),self__.minutes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seconds","seconds",-445266194),self__.seconds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"millis","millis",-1338288387),self__.millis],null))], null),self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IIterable$ = true;

cljs_time.core.Period.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44448){
var self__ = this;
var G__44448__$1 = this;
return (new cljs.core.RecordIter((0),G__44448__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"years","years",-1298579689),new cljs.core.Keyword(null,"months","months",-45571637),new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"millis","millis",-1338288387)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

cljs_time.core.Period.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__37392__auto__){
var self__ = this;
var this__37392__auto____$1 = this;
return self__.__meta;
});

cljs_time.core.Period.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__37388__auto__){
var self__ = this;
var this__37388__auto____$1 = this;
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,self__.__hash));
});

cljs_time.core.Period.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__37398__auto__){
var self__ = this;
var this__37398__auto____$1 = this;
return (8 + cljs.core.count.call(null,self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__37389__auto__){
var self__ = this;
var this__37389__auto____$1 = this;
var h__37207__auto__ = self__.__hash;
if(!((h__37207__auto__ == null))){
return h__37207__auto__;
} else {
var h__37207__auto____$1 = cljs.core.hash_imap.call(null,this__37389__auto____$1);
self__.__hash = h__37207__auto____$1;

return h__37207__auto____$1;
}
});

cljs_time.core.Period.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__37390__auto__,other__37391__auto__){
var self__ = this;
var this__37390__auto____$1 = this;
if(cljs.core.truth_((function (){var and__36760__auto__ = other__37391__auto__;
if(cljs.core.truth_(and__36760__auto__)){
var and__36760__auto____$1 = (this__37390__auto____$1.constructor === other__37391__auto__.constructor);
if(and__36760__auto____$1){
return cljs.core.equiv_map.call(null,this__37390__auto____$1,other__37391__auto__);
} else {
return and__36760__auto____$1;
}
} else {
return and__36760__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs_time.core.Period.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__37403__auto__,k__37404__auto__){
var self__ = this;
var this__37403__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null,new cljs.core.Keyword(null,"millis","millis",-1338288387),null], null), null),k__37404__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__37403__auto____$1),self__.__meta),k__37404__auto__);
} else {
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__37404__auto__)),null));
}
});

cljs_time.core.Period.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__37401__auto__,k__37402__auto__,G__44448){
var self__ = this;
var this__37401__auto____$1 = this;
var pred__44452 = cljs.core.keyword_identical_QMARK_;
var expr__44453 = k__37402__auto__;
if(cljs.core.truth_(pred__44452.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),expr__44453))){
return (new cljs_time.core.Period(G__44448,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44452.call(null,new cljs.core.Keyword(null,"months","months",-45571637),expr__44453))){
return (new cljs_time.core.Period(self__.years,G__44448,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44452.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),expr__44453))){
return (new cljs_time.core.Period(self__.years,self__.months,G__44448,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44452.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),expr__44453))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,G__44448,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44452.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),expr__44453))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,G__44448,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44452.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),expr__44453))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,G__44448,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44452.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),expr__44453))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,G__44448,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44452.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),expr__44453))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,G__44448,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__37402__auto__,G__44448),null));
}
}
}
}
}
}
}
}
});

cljs_time.core.Period.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__37406__auto__){
var self__ = this;
var this__37406__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"years","years",-1298579689),self__.years],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"months","months",-45571637),self__.months],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"weeks","weeks",1844596125),self__.weeks],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"days","days",-1394072564),self__.days],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hours","hours",58380855),self__.hours],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"minutes","minutes",1319166394),self__.minutes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seconds","seconds",-445266194),self__.seconds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"millis","millis",-1338288387),self__.millis],null))], null),self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__37393__auto__,G__44448){
var self__ = this;
var this__37393__auto____$1 = this;
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,G__44448,self__.__extmap,self__.__hash));
});

cljs_time.core.Period.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__37399__auto__,entry__37400__auto__){
var self__ = this;
var this__37399__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__37400__auto__)){
return cljs.core._assoc.call(null,this__37399__auto____$1,cljs.core._nth.call(null,entry__37400__auto__,(0)),cljs.core._nth.call(null,entry__37400__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__37399__auto____$1,entry__37400__auto__);
}
});

cljs_time.core.Period.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"years","years",341951838,null),new cljs.core.Symbol(null,"months","months",1594959890,null),new cljs.core.Symbol(null,"weeks","weeks",-809839644,null),new cljs.core.Symbol(null,"days","days",246458963,null),new cljs.core.Symbol(null,"hours","hours",1698912382,null),new cljs.core.Symbol(null,"minutes","minutes",-1335269375,null),new cljs.core.Symbol(null,"seconds","seconds",1195265333,null),new cljs.core.Symbol(null,"millis","millis",302243140,null)], null);
});

cljs_time.core.Period.cljs$lang$type = true;

cljs_time.core.Period.cljs$lang$ctorPrSeq = (function (this__37428__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs-time.core/Period");
});

cljs_time.core.Period.cljs$lang$ctorPrWriter = (function (this__37428__auto__,writer__37429__auto__){
return cljs.core._write.call(null,writer__37429__auto__,"cljs-time.core/Period");
});

cljs_time.core.__GT_Period = (function cljs_time$core$__GT_Period(years,months,weeks,days,hours,minutes,seconds,millis){
return (new cljs_time.core.Period(years,months,weeks,days,hours,minutes,seconds,millis,null,null,null));
});

cljs_time.core.map__GT_Period = (function cljs_time$core$map__GT_Period(G__44450){
return (new cljs_time.core.Period(new cljs.core.Keyword(null,"years","years",-1298579689).cljs$core$IFn$_invoke$arity$1(G__44450),new cljs.core.Keyword(null,"months","months",-45571637).cljs$core$IFn$_invoke$arity$1(G__44450),new cljs.core.Keyword(null,"weeks","weeks",1844596125).cljs$core$IFn$_invoke$arity$1(G__44450),new cljs.core.Keyword(null,"days","days",-1394072564).cljs$core$IFn$_invoke$arity$1(G__44450),new cljs.core.Keyword(null,"hours","hours",58380855).cljs$core$IFn$_invoke$arity$1(G__44450),new cljs.core.Keyword(null,"minutes","minutes",1319166394).cljs$core$IFn$_invoke$arity$1(G__44450),new cljs.core.Keyword(null,"seconds","seconds",-445266194).cljs$core$IFn$_invoke$arity$1(G__44450),new cljs.core.Keyword(null,"millis","millis",-1338288387).cljs$core$IFn$_invoke$arity$1(G__44450),null,cljs.core.dissoc.call(null,G__44450,new cljs.core.Keyword(null,"years","years",-1298579689),new cljs.core.Keyword(null,"months","months",-45571637),new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"millis","millis",-1338288387)),null));
});

cljs_time.core.period = (function cljs_time$core$period(var_args){
var args44456 = [];
var len__37847__auto___44462 = arguments.length;
var i__37848__auto___44463 = (0);
while(true){
if((i__37848__auto___44463 < len__37847__auto___44462)){
args44456.push((arguments[i__37848__auto___44463]));

var G__44464 = (i__37848__auto___44463 + (1));
i__37848__auto___44463 = G__44464;
continue;
} else {
}
break;
}

var G__44461 = args44456.length;
switch (G__44461) {
case 2:
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__37866__auto__ = (new cljs.core.IndexedSeq(args44456.slice((2)),(0),null));
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37866__auto__);

}
});

cljs_time.core.period.cljs$core$IFn$_invoke$arity$2 = (function (period,value){
return cljs_time.core.map__GT_Period.call(null,cljs.core.PersistentArrayMap.fromArray([period,value], true, false));
});

cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic = (function (p1,v1,kvs){
return cljs.core.apply.call(null,cljs.core.assoc,cljs_time.core.period.call(null,p1,v1),kvs);
});

cljs_time.core.period.cljs$lang$applyTo = (function (seq44457){
var G__44458 = cljs.core.first.call(null,seq44457);
var seq44457__$1 = cljs.core.next.call(null,seq44457);
var G__44459 = cljs.core.first.call(null,seq44457__$1);
var seq44457__$2 = cljs.core.next.call(null,seq44457__$1);
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic(G__44458,G__44459,seq44457__$2);
});

cljs_time.core.period.cljs$lang$maxFixedArity = (2);

cljs_time.core.period_fns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"millis","millis",-1338288387),(function (date,op,value){
var ms = op.call(null,date.getTime(),value);
var G__44466 = date;
G__44466.setTime(ms);

return G__44466;
}),new cljs.core.Keyword(null,"weeks","weeks",1844596125),(function (date,op,value){
var days = op.call(null,(0),(value * (7)));
var G__44467 = date;
G__44467.add((new goog.date.Interval(goog.date.Interval.DAYS,days)));

return G__44467;
})], null);
cljs_time.core.periods = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"seconds","seconds",-445266194),goog.date.Interval.SECONDS,new cljs.core.Keyword(null,"minutes","minutes",1319166394),goog.date.Interval.MINUTES,new cljs.core.Keyword(null,"hours","hours",58380855),goog.date.Interval.HOURS,new cljs.core.Keyword(null,"days","days",-1394072564),goog.date.Interval.DAYS,new cljs.core.Keyword(null,"months","months",-45571637),goog.date.Interval.MONTHS,new cljs.core.Keyword(null,"years","years",-1298579689),goog.date.Interval.YEARS], null);
cljs_time.core.period_fn = (function cljs_time$core$period_fn(p){
return (function (operator,date){
var date_SINGLEQUOTE_ = date.clone();
var __GT_goog_interval = ((function (date_SINGLEQUOTE_){
return (function (op,interval,value){
if(cljs.core.truth_((function (){var and__36760__auto__ = interval;
if(cljs.core.truth_(and__36760__auto__)){
return value;
} else {
return and__36760__auto__;
}
})())){
return (new goog.date.Interval(interval,op.call(null,(0),value)));
} else {
return null;
}
});})(date_SINGLEQUOTE_))
;
var seq__44478_44488 = cljs.core.seq.call(null,p);
var chunk__44479_44489 = null;
var count__44480_44490 = (0);
var i__44481_44491 = (0);
while(true){
if((i__44481_44491 < count__44480_44490)){
var vec__44482_44492 = cljs.core._nth.call(null,chunk__44479_44489,i__44481_44491);
var k_44493 = cljs.core.nth.call(null,vec__44482_44492,(0),null);
var v_44494 = cljs.core.nth.call(null,vec__44482_44492,(1),null);
var temp__4655__auto___44495 = cljs_time.core.periods.call(null,k_44493);
if(cljs.core.truth_(temp__4655__auto___44495)){
var period_44496 = temp__4655__auto___44495;
var temp__4657__auto___44497 = __GT_goog_interval.call(null,operator,period_44496,v_44494);
if(cljs.core.truth_(temp__4657__auto___44497)){
var i_44498 = temp__4657__auto___44497;
date_SINGLEQUOTE_.add(i_44498);
} else {
}
} else {
var temp__4657__auto___44499 = cljs_time.core.period_fns.call(null,k_44493);
if(cljs.core.truth_(temp__4657__auto___44499)){
var f_44500 = temp__4657__auto___44499;
f_44500.call(null,date_SINGLEQUOTE_,operator,v_44494);
} else {
}
}

var G__44501 = seq__44478_44488;
var G__44502 = chunk__44479_44489;
var G__44503 = count__44480_44490;
var G__44504 = (i__44481_44491 + (1));
seq__44478_44488 = G__44501;
chunk__44479_44489 = G__44502;
count__44480_44490 = G__44503;
i__44481_44491 = G__44504;
continue;
} else {
var temp__4657__auto___44505 = cljs.core.seq.call(null,seq__44478_44488);
if(temp__4657__auto___44505){
var seq__44478_44506__$1 = temp__4657__auto___44505;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44478_44506__$1)){
var c__37583__auto___44507 = cljs.core.chunk_first.call(null,seq__44478_44506__$1);
var G__44508 = cljs.core.chunk_rest.call(null,seq__44478_44506__$1);
var G__44509 = c__37583__auto___44507;
var G__44510 = cljs.core.count.call(null,c__37583__auto___44507);
var G__44511 = (0);
seq__44478_44488 = G__44508;
chunk__44479_44489 = G__44509;
count__44480_44490 = G__44510;
i__44481_44491 = G__44511;
continue;
} else {
var vec__44485_44512 = cljs.core.first.call(null,seq__44478_44506__$1);
var k_44513 = cljs.core.nth.call(null,vec__44485_44512,(0),null);
var v_44514 = cljs.core.nth.call(null,vec__44485_44512,(1),null);
var temp__4655__auto___44515 = cljs_time.core.periods.call(null,k_44513);
if(cljs.core.truth_(temp__4655__auto___44515)){
var period_44516 = temp__4655__auto___44515;
var temp__4657__auto___44517__$1 = __GT_goog_interval.call(null,operator,period_44516,v_44514);
if(cljs.core.truth_(temp__4657__auto___44517__$1)){
var i_44518 = temp__4657__auto___44517__$1;
date_SINGLEQUOTE_.add(i_44518);
} else {
}
} else {
var temp__4657__auto___44519__$1 = cljs_time.core.period_fns.call(null,k_44513);
if(cljs.core.truth_(temp__4657__auto___44519__$1)){
var f_44520 = temp__4657__auto___44519__$1;
f_44520.call(null,date_SINGLEQUOTE_,operator,v_44514);
} else {
}
}

var G__44521 = cljs.core.next.call(null,seq__44478_44506__$1);
var G__44522 = null;
var G__44523 = (0);
var G__44524 = (0);
seq__44478_44488 = G__44521;
chunk__44479_44489 = G__44522;
count__44480_44490 = G__44523;
i__44481_44491 = G__44524;
continue;
}
} else {
}
}
break;
}

return date_SINGLEQUOTE_;
});
});
cljs_time.core.compare_local_dates = (function cljs_time$core$compare_local_dates(o,other){
var yo = o.getYear();
var yother = other.getYear();
var dayo = o.getDayOfYear();
var dayother = other.getDayOfYear();
if(cljs.core.not_EQ_.call(null,yo,yother)){
return (yo - yother);
} else {
if(cljs.core.not_EQ_.call(null,dayo,dayother)){
return (dayo - dayother);
} else {
return (0);

}
}
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$ = true;

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_(cljs_time.core._EQ_.call(null,d,(0)))){
return (7);
} else {
return d;
}
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getHours();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMinutes();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getSeconds();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMilliseconds();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() === that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._,this$__$1);
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.UtcDateTime(this$__$1.getYear(),this$__$1.getMonth(),(1),(0),(0),(0),(0)));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_.call(null,(new goog.date.UtcDateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),(1)));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1 = (function (this$){
var this$__$1 = this;
return goog.date.getWeekNumber(this$__$1.getYear(),this$__$1.getMonth(),this$__$1.getDate());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$ = true;

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_(cljs_time.core._EQ_.call(null,d,(0)))){
return (7);
} else {
return d;
}
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getHours();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMinutes();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getSeconds();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMilliseconds();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() === that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._,this$__$1);
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.DateTime(this$__$1.getYear(),this$__$1.getMonth(),(1),(0),(0),(0),(0)));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_.call(null,(new goog.date.DateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),(1)));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1 = (function (this$){
var this$__$1 = this;
return goog.date.getWeekNumber(this$__$1.getYear(),this$__$1.getMonth(),this$__$1.getDate());
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$ = true;

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_(cljs_time.core._EQ_.call(null,d,(0)))){
return (7);
} else {
return d;
}
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return this$__$1.equals(that);
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (cljs_time.core.compare_local_dates.call(null,this$__$1,that) > (0));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (cljs_time.core.compare_local_dates.call(null,this$__$1,that) < (0));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._,this$__$1);
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.Date(this$__$1.getYear(),this$__$1.getMonth(),(1)));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_.call(null,(new goog.date.Date(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1))),cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),(1)));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1 = (function (this$){
var this$__$1 = this;
return goog.date.getWeekNumber(this$__$1.getYear(),this$__$1.getMonth(),this$__$1.getDate());
});
cljs_time.core.utc = ({"id": "UTC", "std_offset": (0), "names": new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["UTC"], null), "transitions": cljs.core.PersistentVector.EMPTY});
cljs_time.core.default_ms_fn = (function cljs_time$core$default_ms_fn(){
return (function (){
return (new goog.date.UtcDateTime()).getTime();
});
});
cljs_time.core.offset_ms_fn = (function cljs_time$core$offset_ms_fn(offset){
return (function (){
return ((new goog.date.UtcDateTime()).getTime() + offset);
});
});
cljs_time.core.static_ms_fn = (function cljs_time$core$static_ms_fn(ms){
return (function (){
return ms;
});
});
cljs_time.core._STAR_ms_fn_STAR_ = cljs_time.core.default_ms_fn.call(null);
/**
 * Returns a DateTime for the current instant in the UTC time zone.
 */
cljs_time.core.now = (function cljs_time$core$now(){
var G__44526 = (new goog.date.UtcDateTime());
G__44526.setTime(cljs_time.core._STAR_ms_fn_STAR_.call(null));

return G__44526;
});
/**
 * Returns a local DateTime for the current instant without date or time zone
 *   in the current time zone.
 */
cljs_time.core.time_now = (function cljs_time$core$time_now(){
var G__44528 = (new goog.date.DateTime());
G__44528.setTime(cljs_time.core._STAR_ms_fn_STAR_.call(null));

return G__44528;
});
cljs_time.core.at_midnight = (function cljs_time$core$at_midnight(datetime){
var datetime__$1 = datetime.clone();
var G__44530 = datetime__$1;
G__44530.setHours((0));

G__44530.setMinutes((0));

G__44530.setSeconds((0));

G__44530.setMilliseconds((0));

return G__44530;
});
/**
 * Returns a DateTime for today at midnight in the UTC time zone.
 */
cljs_time.core.today_at_midnight = (function cljs_time$core$today_at_midnight(){
return cljs_time.core.at_midnight.call(null,cljs_time.core.now.call(null));
});
/**
 * Returns a DateTime for the begining of the Unix epoch in the UTC time zone.
 */
cljs_time.core.epoch = (function cljs_time$core$epoch(){
var G__44532 = (new goog.date.UtcDateTime());
G__44532.setTime((0));

return G__44532;
});
/**
 * Constructs and returns a new DateTime at midnight in UTC.
 * 
 *   Specify the year, month of year, day of month. Note that month and day are
 *   1-indexed. Any number of least-significant components can be ommited, in
 *   which case they will default to 1.
 */
cljs_time.core.date_midnight = (function cljs_time$core$date_midnight(var_args){
var args44533 = [];
var len__37847__auto___44536 = arguments.length;
var i__37848__auto___44537 = (0);
while(true){
if((i__37848__auto___44537 < len__37847__auto___44536)){
args44533.push((arguments[i__37848__auto___44537]));

var G__44538 = (i__37848__auto___44537 + (1));
i__37848__auto___44537 = G__44538;
continue;
} else {
}
break;
}

var G__44535 = args44533.length;
switch (G__44535) {
case 1:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44533.length)].join('')));

}
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.date_midnight.call(null,year,(1),(1));
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.date_midnight.call(null,year,month,(1));
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return (new goog.date.UtcDateTime(year,(month - (1)),day));
});

cljs_time.core.date_midnight.cljs$lang$maxFixedArity = 3;

/**
 * Constructs and returns a new DateTime in UTC.
 * 
 *   Specify the year, month of year, day of month, hour of day, minute if hour,
 *   second of minute, and millisecond of second. Note that month and day are
 *   1-indexed while hour, second, minute, and millis are 0-indexed.
 * 
 *   Any number of least-significant components can be ommited, in which case
 *   they will default to 1 or 0 as appropriate.
 */
cljs_time.core.date_time = (function cljs_time$core$date_time(var_args){
var args44540 = [];
var len__37847__auto___44543 = arguments.length;
var i__37848__auto___44544 = (0);
while(true){
if((i__37848__auto___44544 < len__37847__auto___44543)){
args44540.push((arguments[i__37848__auto___44544]));

var G__44545 = (i__37848__auto___44544 + (1));
i__37848__auto___44544 = G__44545;
continue;
} else {
}
break;
}

var G__44542 = args44540.length;
switch (G__44542) {
case 1:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44540.length)].join('')));

}
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.date_time.call(null,year,(1),(1),(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.date_time.call(null,year,month,(1),(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return cljs_time.core.date_time.call(null,year,month,day,(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$4 = (function (year,month,day,hour){
return cljs_time.core.date_time.call(null,year,month,day,hour,(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$5 = (function (year,month,day,hour,minute){
return cljs_time.core.date_time.call(null,year,month,day,hour,minute,(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$6 = (function (year,month,day,hour,minute,second){
return cljs_time.core.date_time.call(null,year,month,day,hour,minute,second,(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7 = (function (year,month,day,hour,minute,second,millis){
return (new goog.date.UtcDateTime(year,(month - (1)),day,hour,minute,second,millis));
});

cljs_time.core.date_time.cljs$lang$maxFixedArity = 7;

/**
 * Constructs and returns a new local DateTime.
 * Specify the year, month of year, day of month, hour of day, minute of hour,
 * second of minute, and millisecond of second. Note that month and day are
 * 1-indexed while hour, second, minute, and millis are 0-indexed.
 * Any number of least-significant components can be ommited, in which case
 * they will default to 1 or 0 as appropriate.
 */
cljs_time.core.local_date_time = (function cljs_time$core$local_date_time(var_args){
var args44547 = [];
var len__37847__auto___44550 = arguments.length;
var i__37848__auto___44551 = (0);
while(true){
if((i__37848__auto___44551 < len__37847__auto___44550)){
args44547.push((arguments[i__37848__auto___44551]));

var G__44552 = (i__37848__auto___44551 + (1));
i__37848__auto___44551 = G__44552;
continue;
} else {
}
break;
}

var G__44549 = args44547.length;
switch (G__44549) {
case 1:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44547.length)].join('')));

}
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.local_date_time.call(null,year,(1),(1),(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.local_date_time.call(null,year,month,(1),(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return cljs_time.core.local_date_time.call(null,year,month,day,(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$4 = (function (year,month,day,hour){
return cljs_time.core.local_date_time.call(null,year,month,day,hour,(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$5 = (function (year,month,day,hour,minute){
return cljs_time.core.local_date_time.call(null,year,month,day,hour,minute,(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$6 = (function (year,month,day,hour,minute,second){
return cljs_time.core.local_date_time.call(null,year,month,day,hour,minute,second,(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7 = (function (year,month,day,hour,minute,second,millis){
return (new goog.date.DateTime(year,(month - (1)),day,hour,minute,second,millis));
});

cljs_time.core.local_date_time.cljs$lang$maxFixedArity = 7;

/**
 * Constructs and returns a new goog.date.Date in the local timezone.
 * Specify the year, month, and day.
 */
cljs_time.core.local_date = (function cljs_time$core$local_date(year,month,day){
return (new goog.date.Date(year,(month - (1)),day));
});
/**
 * Constructs and returns a new goog.date.Date representing today in the local timezone.
 */
cljs_time.core.today = (function cljs_time$core$today(){
return (new goog.date.Date((new Date(cljs_time.core._STAR_ms_fn_STAR_.call(null)))));
});
/**
 * Returns a timezone map for the given offset, specified either in hours or
 *   hours and minutes.
 */
cljs_time.core.time_zone_for_offset = (function cljs_time$core$time_zone_for_offset(var_args){
var args44554 = [];
var len__37847__auto___44557 = arguments.length;
var i__37848__auto___44558 = (0);
while(true){
if((i__37848__auto___44558 < len__37847__auto___44557)){
args44554.push((arguments[i__37848__auto___44558]));

var G__44559 = (i__37848__auto___44558 + (1));
i__37848__auto___44558 = G__44559;
continue;
} else {
}
break;
}

var G__44556 = args44554.length;
switch (G__44556) {
case 1:
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44554.length)].join('')));

}
});

cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$1 = (function (hours){
return cljs_time.core.time_zone_for_offset.call(null,hours,null);
});

cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
var sign = (((hours < (0)))?new cljs.core.Keyword(null,"-","-",-2112348439):new cljs.core.Keyword(null,"+","+",1913524883));
var fmt = [cljs.core.str("UTC%s%02d"),cljs.core.str((cljs.core.truth_(minutes)?":%02d":null))].join('');
var hours__$1 = (((hours < (0)))?((-1) * hours):hours);
var tz_name = (cljs.core.truth_(minutes)?cljs_time.internal.core.format.call(null,fmt,cljs.core.name.call(null,sign),hours__$1,minutes):cljs_time.internal.core.format.call(null,fmt,cljs.core.name.call(null,sign),hours__$1));
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),tz_name,new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sign,hours__$1,(function (){var or__36772__auto__ = minutes;
if(cljs.core.truth_(or__36772__auto__)){
return or__36772__auto__;
} else {
return (0);
}
})(),(0)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),"-",new cljs.core.Keyword(null,"names","names",-1943074658),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tz_name], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("cljs-time.core","time-zone","cljs-time.core/time-zone",751963705)], null));
});

cljs_time.core.time_zone_for_offset.cljs$lang$maxFixedArity = 2;

/**
 * Returns the default timezone map for the current environment.
 */
cljs_time.core.default_time_zone = (function cljs_time$core$default_time_zone(){
var offset = (function (){var G__44562 = (new goog.date.DateTime());
G__44562.setTime(cljs_time.core._STAR_ms_fn_STAR_.call(null));

return G__44562;
})().getTimezoneOffset();
var hours = (((-1) * offset) / (60));
return cljs_time.core.time_zone_for_offset.call(null,(hours | (0)),cljs.core.mod.call(null,hours,(1)));
});
/**
 * Assuming `dt` is in the UTC timezone, returns a DateTime
 *   corresponding to the same absolute instant in time as the given
 *   DateTime, but with calendar fields corresponding to the default
 *   (local) timezone.
 */
cljs_time.core.to_default_time_zone = (function cljs_time$core$to_default_time_zone(dt){
return (new goog.date.DateTime(dt));
});
/**
 * Assuming `dt` is in the Local timezone, returns a UtcDateTime
 *   corresponding to the same absolute instant in time as the given
 *   DateTime, but with calendar fields corresponding to the UTC
 *   timezone.
 */
cljs_time.core.to_utc_time_zone = (function cljs_time$core$to_utc_time_zone(dt){
return goog.date.UtcDateTime.fromTimestamp(dt.getTime());
});
/**
 * Assuming `dt` is in the UTC timezone, returns a DateTime
 *   corresponding to the same point in calendar time as the given
 *   DateTime, but for a correspondingly different absolute instant in
 *   time in the default (local) timezone.
 * 
 *   Note: This implementation uses the ECMAScript 5.1 implementation which
 *   trades some historical daylight savings transition accuracy for simplicity.
 *   see http://es5.github.io/#x15.9.1.8
 *   
 */
cljs_time.core.from_default_time_zone = (function cljs_time$core$from_default_time_zone(dt){
return (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate(),dt.getHours(),dt.getMinutes(),dt.getSeconds(),dt.getMilliseconds()));
});
/**
 * Assuming `dt` is in the local timezone, returns a UtcDateTime
 *   corresponding to the same point in calendar time as the given
 *   DateTime, but for a correspondingly different absolute instant in
 *   time in the UTC timezone.
 * 
 *   Note: This implementation uses the ECMAScript 5.1 implementation which
 *   trades some historical daylight savings transition accuracy for simplicity.
 *   see http://es5.github.io/#x15.9.1.8
 *   
 */
cljs_time.core.from_utc_time_zone = (function cljs_time$core$from_utc_time_zone(dt){
var year = dt.getYear();
var month = dt.getMonth();
var date = dt.getDate();
if(cljs.core.truth_(cljs_time.core._EQ_.call(null,goog.date.Date,cljs.core.type.call(null,dt)))){
return (new goog.date.UtcDateTime(year,month,date));
} else {
return (new goog.date.UtcDateTime(year,month,date,dt.getHours(),dt.getMinutes(),dt.getSeconds(),dt.getMilliseconds()));
}
});
/**
 * Given a number, returns a Period representing that many years.
 *   Without an argument, returns a Period representing only years.
 */
cljs_time.core.years = (function cljs_time$core$years(var_args){
var args44563 = [];
var len__37847__auto___44566 = arguments.length;
var i__37848__auto___44567 = (0);
while(true){
if((i__37848__auto___44567 < len__37847__auto___44566)){
args44563.push((arguments[i__37848__auto___44567]));

var G__44568 = (i__37848__auto___44567 + (1));
i__37848__auto___44567 = G__44568;
continue;
} else {
}
break;
}

var G__44565 = args44563.length;
switch (G__44565) {
case 0:
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44563.length)].join('')));

}
});

cljs_time.core.years.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.years.call(null,null);
});

cljs_time.core.years.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),n);
});

cljs_time.core.years.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many months.
 *   Without an argument, returns a Period representing only months.
 */
cljs_time.core.months = (function cljs_time$core$months(var_args){
var args44570 = [];
var len__37847__auto___44573 = arguments.length;
var i__37848__auto___44574 = (0);
while(true){
if((i__37848__auto___44574 < len__37847__auto___44573)){
args44570.push((arguments[i__37848__auto___44574]));

var G__44575 = (i__37848__auto___44574 + (1));
i__37848__auto___44574 = G__44575;
continue;
} else {
}
break;
}

var G__44572 = args44570.length;
switch (G__44572) {
case 0:
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44570.length)].join('')));

}
});

cljs_time.core.months.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.months.call(null,null);
});

cljs_time.core.months.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"months","months",-45571637),n);
});

cljs_time.core.months.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many weeks.
 *   Without an argument, returns a Period representing only weeks.
 */
cljs_time.core.weeks = (function cljs_time$core$weeks(var_args){
var args44577 = [];
var len__37847__auto___44580 = arguments.length;
var i__37848__auto___44581 = (0);
while(true){
if((i__37848__auto___44581 < len__37847__auto___44580)){
args44577.push((arguments[i__37848__auto___44581]));

var G__44582 = (i__37848__auto___44581 + (1));
i__37848__auto___44581 = G__44582;
continue;
} else {
}
break;
}

var G__44579 = args44577.length;
switch (G__44579) {
case 0:
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44577.length)].join('')));

}
});

cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.weeks.call(null,null);
});

cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),n);
});

cljs_time.core.weeks.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many days.
 *   Without an argument, returns a Period representing only days.
 */
cljs_time.core.days = (function cljs_time$core$days(var_args){
var args44584 = [];
var len__37847__auto___44587 = arguments.length;
var i__37848__auto___44588 = (0);
while(true){
if((i__37848__auto___44588 < len__37847__auto___44587)){
args44584.push((arguments[i__37848__auto___44588]));

var G__44589 = (i__37848__auto___44588 + (1));
i__37848__auto___44588 = G__44589;
continue;
} else {
}
break;
}

var G__44586 = args44584.length;
switch (G__44586) {
case 0:
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44584.length)].join('')));

}
});

cljs_time.core.days.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.days.call(null,null);
});

cljs_time.core.days.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),n);
});

cljs_time.core.days.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many hours.
 *   Without an argument, returns a Period representing only hours.
 */
cljs_time.core.hours = (function cljs_time$core$hours(var_args){
var args44591 = [];
var len__37847__auto___44594 = arguments.length;
var i__37848__auto___44595 = (0);
while(true){
if((i__37848__auto___44595 < len__37847__auto___44594)){
args44591.push((arguments[i__37848__auto___44595]));

var G__44596 = (i__37848__auto___44595 + (1));
i__37848__auto___44595 = G__44596;
continue;
} else {
}
break;
}

var G__44593 = args44591.length;
switch (G__44593) {
case 0:
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44591.length)].join('')));

}
});

cljs_time.core.hours.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.hours.call(null,null);
});

cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),n);
});

cljs_time.core.hours.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many minutes.
 *   Without an argument, returns a Period representing only minutes.
 */
cljs_time.core.minutes = (function cljs_time$core$minutes(var_args){
var args44598 = [];
var len__37847__auto___44601 = arguments.length;
var i__37848__auto___44602 = (0);
while(true){
if((i__37848__auto___44602 < len__37847__auto___44601)){
args44598.push((arguments[i__37848__auto___44602]));

var G__44603 = (i__37848__auto___44602 + (1));
i__37848__auto___44602 = G__44603;
continue;
} else {
}
break;
}

var G__44600 = args44598.length;
switch (G__44600) {
case 0:
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44598.length)].join('')));

}
});

cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.minutes.call(null,null);
});

cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),n);
});

cljs_time.core.minutes.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many seconds.
 *   Without an argument, returns a Period representing only seconds.
 */
cljs_time.core.seconds = (function cljs_time$core$seconds(var_args){
var args44605 = [];
var len__37847__auto___44608 = arguments.length;
var i__37848__auto___44609 = (0);
while(true){
if((i__37848__auto___44609 < len__37847__auto___44608)){
args44605.push((arguments[i__37848__auto___44609]));

var G__44610 = (i__37848__auto___44609 + (1));
i__37848__auto___44609 = G__44610;
continue;
} else {
}
break;
}

var G__44607 = args44605.length;
switch (G__44607) {
case 0:
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44605.length)].join('')));

}
});

cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.seconds.call(null,null);
});

cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),n);
});

cljs_time.core.seconds.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many milliseconds.
 *   Without an argument, returns a Period representing only milliseconds.
 */
cljs_time.core.millis = (function cljs_time$core$millis(var_args){
var args44612 = [];
var len__37847__auto___44615 = arguments.length;
var i__37848__auto___44616 = (0);
while(true){
if((i__37848__auto___44616 < len__37847__auto___44615)){
args44612.push((arguments[i__37848__auto___44616]));

var G__44617 = (i__37848__auto___44616 + (1));
i__37848__auto___44616 = G__44617;
continue;
} else {
}
break;
}

var G__44614 = args44612.length;
switch (G__44614) {
case 0:
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44612.length)].join('')));

}
});

cljs_time.core.millis.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.millis.call(null,null);
});

cljs_time.core.millis.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),n);
});

cljs_time.core.millis.cljs$lang$maxFixedArity = 1;

/**
 * Returns a new date/time corresponding to the given date/time moved
 *   forwards by the given Period(s).
 */
cljs_time.core.plus = (function cljs_time$core$plus(var_args){
var args44619 = [];
var len__37847__auto___44625 = arguments.length;
var i__37848__auto___44626 = (0);
while(true){
if((i__37848__auto___44626 < len__37847__auto___44625)){
args44619.push((arguments[i__37848__auto___44626]));

var G__44627 = (i__37848__auto___44626 + (1));
i__37848__auto___44626 = G__44627;
continue;
} else {
}
break;
}

var G__44624 = args44619.length;
switch (G__44624) {
case 2:
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__37866__auto__ = (new cljs.core.IndexedSeq(args44619.slice((2)),(0),null));
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37866__auto__);

}
});

cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2 = (function (dt,p){
return cljs_time.core.plus_.call(null,dt,p);
});

cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic = (function (dt,p,ps){
return cljs.core.reduce.call(null,cljs_time.core.plus_,cljs_time.core.plus_.call(null,dt,p),ps);
});

cljs_time.core.plus.cljs$lang$applyTo = (function (seq44620){
var G__44621 = cljs.core.first.call(null,seq44620);
var seq44620__$1 = cljs.core.next.call(null,seq44620);
var G__44622 = cljs.core.first.call(null,seq44620__$1);
var seq44620__$2 = cljs.core.next.call(null,seq44620__$1);
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic(G__44621,G__44622,seq44620__$2);
});

cljs_time.core.plus.cljs$lang$maxFixedArity = (2);

/**
 * Returns a new date/time object corresponding to the given date/time
 *   moved backwards by the given Period(s).
 */
cljs_time.core.minus = (function cljs_time$core$minus(var_args){
var args44629 = [];
var len__37847__auto___44635 = arguments.length;
var i__37848__auto___44636 = (0);
while(true){
if((i__37848__auto___44636 < len__37847__auto___44635)){
args44629.push((arguments[i__37848__auto___44636]));

var G__44637 = (i__37848__auto___44636 + (1));
i__37848__auto___44636 = G__44637;
continue;
} else {
}
break;
}

var G__44634 = args44629.length;
switch (G__44634) {
case 2:
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__37866__auto__ = (new cljs.core.IndexedSeq(args44629.slice((2)),(0),null));
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37866__auto__);

}
});

cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2 = (function (dt,p){
return cljs_time.core.minus_.call(null,dt,p);
});

cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic = (function (dt,p,ps){
return cljs.core.reduce.call(null,cljs_time.core.minus_,cljs_time.core.minus_.call(null,dt,p),ps);
});

cljs_time.core.minus.cljs$lang$applyTo = (function (seq44630){
var G__44631 = cljs.core.first.call(null,seq44630);
var seq44630__$1 = cljs.core.next.call(null,seq44630);
var G__44632 = cljs.core.first.call(null,seq44630__$1);
var seq44630__$2 = cljs.core.next.call(null,seq44630__$1);
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic(G__44631,G__44632,seq44630__$2);
});

cljs_time.core.minus.cljs$lang$maxFixedArity = (2);

/**
 * Returns a DateTime a supplied period before the present.
 * 
 *   e.g. `(-> 5 years ago)`
 */
cljs_time.core.ago = (function cljs_time$core$ago(period){
return cljs_time.core.minus.call(null,cljs_time.core.now.call(null),period);
});
/**
 * Returns a DateTime for yesterday relative to now
 */
cljs_time.core.yesterday = (function cljs_time$core$yesterday(){
return cljs_time.core.ago.call(null,cljs_time.core.days.call(null,(1)));
});
/**
 * Returns a DateTime a supplied period after the present.
 *   e.g. `(-> 30 minutes from-now)`
 */
cljs_time.core.from_now = (function cljs_time$core$from_now(period){
return cljs_time.core.plus.call(null,cljs_time.core.now.call(null),period);
});
/**
 * Returns the earliest of the supplied DateTimes
 */
cljs_time.core.earliest = (function cljs_time$core$earliest(var_args){
var args44639 = [];
var len__37847__auto___44642 = arguments.length;
var i__37848__auto___44643 = (0);
while(true){
if((i__37848__auto___44643 < len__37847__auto___44642)){
args44639.push((arguments[i__37848__auto___44643]));

var G__44644 = (i__37848__auto___44643 + (1));
i__37848__auto___44643 = G__44644;
continue;
} else {
}
break;
}

var G__44641 = args44639.length;
switch (G__44641) {
case 2:
return cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44639.length)].join('')));

}
});

cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$2 = (function (dt1,dt2){
if(cljs.core.truth_(cljs_time.core.before_QMARK_.call(null,dt1,dt2))){
return dt1;
} else {
return dt2;
}
});

cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$1 = (function (dts){
return cljs.core.reduce.call(null,cljs_time.core.earliest,dts);
});

cljs_time.core.earliest.cljs$lang$maxFixedArity = 2;

/**
 * Returns the latest of the supplied DateTimes
 */
cljs_time.core.latest = (function cljs_time$core$latest(var_args){
var args44646 = [];
var len__37847__auto___44649 = arguments.length;
var i__37848__auto___44650 = (0);
while(true){
if((i__37848__auto___44650 < len__37847__auto___44649)){
args44646.push((arguments[i__37848__auto___44650]));

var G__44651 = (i__37848__auto___44650 + (1));
i__37848__auto___44650 = G__44651;
continue;
} else {
}
break;
}

var G__44648 = args44646.length;
switch (G__44648) {
case 2:
return cljs_time.core.latest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.core.latest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44646.length)].join('')));

}
});

cljs_time.core.latest.cljs$core$IFn$_invoke$arity$2 = (function (dt1,dt2){
if(cljs.core.truth_(cljs_time.core.after_QMARK_.call(null,dt1,dt2))){
return dt1;
} else {
return dt2;
}
});

cljs_time.core.latest.cljs$core$IFn$_invoke$arity$1 = (function (dts){
return cljs.core.reduce.call(null,cljs_time.core.latest,dts);
});

cljs_time.core.latest.cljs$lang$maxFixedArity = 2;

/**
 * Returns the start DateTime of an Interval.
 */
cljs_time.core.start = (function cljs_time$core$start(in$){
return new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(in$);
});
/**
 * Returns the end DateTime of an Interval.
 */
cljs_time.core.end = (function cljs_time$core$end(in$){
return new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(in$);
});
/**
 * Returns an Interval with an end DateTime the specified Period after the end
 *   of the given Interval
 */
cljs_time.core.extend = (function cljs_time$core$extend(var_args){
var args__37854__auto__ = [];
var len__37847__auto___44655 = arguments.length;
var i__37848__auto___44656 = (0);
while(true){
if((i__37848__auto___44656 < len__37847__auto___44655)){
args__37854__auto__.push((arguments[i__37848__auto___44656]));

var G__44657 = (i__37848__auto___44656 + (1));
i__37848__auto___44656 = G__44657;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((1) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((1)),(0),null)):null);
return cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37855__auto__);
});

cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic = (function (in$,by){
return cljs.core.assoc.call(null,in$,new cljs.core.Keyword(null,"end","end",-268185958),cljs.core.apply.call(null,cljs_time.core.plus,cljs_time.core.end.call(null,in$),by));
});

cljs_time.core.extend.cljs$lang$maxFixedArity = (1);

cljs_time.core.extend.cljs$lang$applyTo = (function (seq44653){
var G__44654 = cljs.core.first.call(null,seq44653);
var seq44653__$1 = cljs.core.next.call(null,seq44653);
return cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic(G__44654,seq44653__$1);
});

cljs_time.core.month_range = (function cljs_time$core$month_range(p__44660){
var map__44663 = p__44660;
var map__44663__$1 = ((((!((map__44663 == null)))?((((map__44663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44663):map__44663);
var start = cljs.core.get.call(null,map__44663__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__44663__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return cljs.core.take_while.call(null,((function (map__44663,map__44663__$1,start,end){
return (function (p1__44659_SHARP_){
return cljs.core.not.call(null,cljs_time.core.after_QMARK_.call(null,p1__44659_SHARP_,end));
});})(map__44663,map__44663__$1,start,end))
,cljs.core.map.call(null,((function (map__44663,map__44663__$1,start,end){
return (function (p1__44658_SHARP_){
return cljs_time.core.plus.call(null,start,cljs_time.core.months.call(null,(p1__44658_SHARP_ + (1))));
});})(map__44663,map__44663__$1,start,end))
,cljs.core.range.call(null)));
});
cljs_time.core.total_days_in_whole_months = (function cljs_time$core$total_days_in_whole_months(interval){
return cljs.core.map.call(null,(function (p1__44665_SHARP_){
return p1__44665_SHARP_.getNumberOfDaysInMonth();
}),cljs_time.core.month_range.call(null,interval));
});
/**
 * Returns the number of months in the given Interval.
 * 
 *   For example, the interval 2nd Jan 2012 midnight to 2nd Feb 2012 midnight,
 *   returns 1 month.
 * 
 *   Likewise, 29th Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
 * 
 *   But also, 31st Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
 * 
 *   And, 28th Dec 2012 midnight to 28th Feb 2013 midnight returns 2 months.
 */
cljs_time.core.in_months_ = (function cljs_time$core$in_months_(p__44666){
var map__44669 = p__44666;
var map__44669__$1 = ((((!((map__44669 == null)))?((((map__44669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44669):map__44669);
var interval = map__44669__$1;
var start = cljs.core.get.call(null,map__44669__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__44669__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return cljs.core.count.call(null,cljs_time.core.total_days_in_whole_months.call(null,interval));
});
/**
 * Returns the number of standard years in the given Interval.
 */
cljs_time.core.in_years_ = (function cljs_time$core$in_years_(p__44671){
var map__44674 = p__44671;
var map__44674__$1 = ((((!((map__44674 == null)))?((((map__44674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44674):map__44674);
var start = cljs.core.get.call(null,map__44674__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__44674__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var sm = cljs_time.core.month.call(null,start);
var sd = cljs_time.core.day.call(null,start);
var em = cljs_time.core.month.call(null,end);
var ed = cljs_time.core.day.call(null,end);
var d1 = (cljs.core.truth_((function (){var and__36760__auto__ = cljs_time.core._EQ_.call(null,sm,(2));
if(cljs.core.truth_(and__36760__auto__)){
var and__36760__auto____$1 = cljs_time.core._EQ_.call(null,sd,(29));
if(cljs.core.truth_(and__36760__auto____$1)){
var and__36760__auto____$2 = cljs_time.core._EQ_.call(null,em,(2));
if(cljs.core.truth_(and__36760__auto____$2)){
return cljs_time.core._EQ_.call(null,ed,(28));
} else {
return and__36760__auto____$2;
}
} else {
return and__36760__auto____$1;
}
} else {
return and__36760__auto__;
}
})())?(0):(cljs.core.truth_(cljs_time.core.before_QMARK_.call(null,cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),sm,sd),cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),em,ed)))?(0):(cljs.core.truth_(cljs_time.core.after_QMARK_.call(null,cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),sm,sd),cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),em,ed)))?(1):(0)
)));
return ((cljs_time.core.year.call(null,end) - cljs_time.core.year.call(null,start)) - d1);
});
cljs_time.core.conversion_error = (function cljs_time$core$conversion_error(from,to){
var from__$1 = clojure.string.capitalize.call(null,cljs.core.name.call(null,from));
var to__$1 = cljs.core.name.call(null,to);
throw cljs.core.ex_info.call(null,cljs_time.internal.core.format.call(null,"%s cannot be converted to %s",from__$1,to__$1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"unsupported-operation","unsupported-operation",1890540953)], null));
});
cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$ = true;

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__44676){
var map__44677 = p__44676;
var map__44677__$1 = ((((!((map__44677 == null)))?((((map__44677.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44677.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44677):map__44677);
var millis = cljs.core.get.call(null,map__44677__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds = cljs.core.get.call(null,map__44677__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes = cljs.core.get.call(null,map__44677__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours = cljs.core.get.call(null,map__44677__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days = cljs.core.get.call(null,map__44677__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks = cljs.core.get.call(null,map__44677__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months = cljs.core.get.call(null,map__44677__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years = cljs.core.get.call(null,map__44677__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var map__44679 = this;
var map__44679__$1 = ((((!((map__44679 == null)))?((((map__44679.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44679.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44679):map__44679);
var millis__$1 = cljs.core.get.call(null,map__44679__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds__$1 = cljs.core.get.call(null,map__44679__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes__$1 = cljs.core.get.call(null,map__44679__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours__$1 = cljs.core.get.call(null,map__44679__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days__$1 = cljs.core.get.call(null,map__44679__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks__$1 = cljs.core.get.call(null,map__44679__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months__$1 = cljs.core.get.call(null,map__44679__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years__$1 = cljs.core.get.call(null,map__44679__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
if(cljs.core.truth_(months__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"months","months",-45571637),new cljs.core.Keyword(null,"millis","millis",-1338288387));
} else {
if(cljs.core.truth_(years__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),new cljs.core.Keyword(null,"millis","millis",-1338288387));
} else {
return (((((millis__$1 + (seconds__$1 * (1000))) + ((minutes__$1 * (60)) * (1000))) + (((hours__$1 * (60)) * (60)) * (1000))) + ((((days__$1 * (24)) * (60)) * (60)) * (1000))) + (((((weeks__$1 * (7)) * (24)) * (60)) * (60)) * (1000)));

}
}
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_millis.call(null,this$__$1) / (1000)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_seconds.call(null,this$__$1) / (60)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_minutes.call(null,this$__$1) / (60)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_hours.call(null,this$__$1) / (24)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_days.call(null,this$__$1) / (7)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 = (function (p__44681){
var map__44682 = p__44681;
var map__44682__$1 = ((((!((map__44682 == null)))?((((map__44682.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44682.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44682):map__44682);
var millis = cljs.core.get.call(null,map__44682__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds = cljs.core.get.call(null,map__44682__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes = cljs.core.get.call(null,map__44682__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours = cljs.core.get.call(null,map__44682__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days = cljs.core.get.call(null,map__44682__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks = cljs.core.get.call(null,map__44682__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months = cljs.core.get.call(null,map__44682__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years = cljs.core.get.call(null,map__44682__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var map__44684 = this;
var map__44684__$1 = ((((!((map__44684 == null)))?((((map__44684.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44684.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44684):map__44684);
var millis__$1 = cljs.core.get.call(null,map__44684__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds__$1 = cljs.core.get.call(null,map__44684__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes__$1 = cljs.core.get.call(null,map__44684__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours__$1 = cljs.core.get.call(null,map__44684__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days__$1 = cljs.core.get.call(null,map__44684__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks__$1 = cljs.core.get.call(null,map__44684__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months__$1 = cljs.core.get.call(null,map__44684__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years__$1 = cljs.core.get.call(null,map__44684__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
if(cljs.core.truth_(millis__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(seconds__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(minutes__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(hours__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(days__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(weeks__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(months__$1)){
return (months__$1 + ((function (){var or__36772__auto__ = years__$1;
if(cljs.core.truth_(or__36772__auto__)){
return or__36772__auto__;
} else {
return (0);
}
})() * (12)));
} else {
if(cljs.core.truth_(years__$1)){
return (years__$1 * (12));
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
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 = (function (p__44686){
var map__44687 = p__44686;
var map__44687__$1 = ((((!((map__44687 == null)))?((((map__44687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44687):map__44687);
var millis = cljs.core.get.call(null,map__44687__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds = cljs.core.get.call(null,map__44687__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes = cljs.core.get.call(null,map__44687__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours = cljs.core.get.call(null,map__44687__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days = cljs.core.get.call(null,map__44687__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks = cljs.core.get.call(null,map__44687__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months = cljs.core.get.call(null,map__44687__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years = cljs.core.get.call(null,map__44687__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var map__44689 = this;
var map__44689__$1 = ((((!((map__44689 == null)))?((((map__44689.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44689.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44689):map__44689);
var millis__$1 = cljs.core.get.call(null,map__44689__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds__$1 = cljs.core.get.call(null,map__44689__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes__$1 = cljs.core.get.call(null,map__44689__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours__$1 = cljs.core.get.call(null,map__44689__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days__$1 = cljs.core.get.call(null,map__44689__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks__$1 = cljs.core.get.call(null,map__44689__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months__$1 = cljs.core.get.call(null,map__44689__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years__$1 = cljs.core.get.call(null,map__44689__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
if(cljs.core.truth_(millis__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(seconds__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(minutes__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(hours__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(days__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(weeks__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(months__$1)){
return (((months__$1 / (12)) + years__$1) | (0));
} else {
if(cljs.core.truth_(years__$1)){
return years__$1;
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
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$ = true;

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__44691){
var map__44692 = p__44691;
var map__44692__$1 = ((((!((map__44692 == null)))?((((map__44692.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44692.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44692):map__44692);
var start = cljs.core.get.call(null,map__44692__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__44692__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var map__44694 = this;
var map__44694__$1 = ((((!((map__44694 == null)))?((((map__44694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44694):map__44694);
var start__$1 = cljs.core.get.call(null,map__44694__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end__$1 = cljs.core.get.call(null,map__44694__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return (end__$1.getTime() - start__$1.getTime());
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_millis.call(null,this$__$1) / (1000)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_seconds.call(null,this$__$1) / (60)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_minutes.call(null,this$__$1) / (60)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_hours.call(null,this$__$1) / (24)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_days.call(null,this$__$1) / (7)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.in_months_.call(null,this$__$1);
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.in_years_.call(null,this$__$1);
});
/**
 * With 2 arguments: Returns true if the given Interval contains the given
 *   DateTime. Note that if the DateTime is exactly equal to the
 *   end of the interval, this function returns false.
 * 
 *   With 3 arguments: Returns true if the start DateTime is
 *   equal to or before and the end DateTime is equal to or after the test
 *   DateTime.
 */
cljs_time.core.within_QMARK_ = (function cljs_time$core$within_QMARK_(var_args){
var args44696 = [];
var len__37847__auto___44702 = arguments.length;
var i__37848__auto___44703 = (0);
while(true){
if((i__37848__auto___44703 < len__37847__auto___44702)){
args44696.push((arguments[i__37848__auto___44703]));

var G__44704 = (i__37848__auto___44703 + (1));
i__37848__auto___44703 = G__44704;
continue;
} else {
}
break;
}

var G__44698 = args44696.length;
switch (G__44698) {
case 2:
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44696.length)].join('')));

}
});

cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__44699,date){
var map__44700 = p__44699;
var map__44700__$1 = ((((!((map__44700 == null)))?((((map__44700.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44700.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44700):map__44700);
var start = cljs.core.get.call(null,map__44700__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__44700__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return cljs_time.core.within_QMARK_.call(null,start,end,date);
});

cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (start,end,date){
var or__36772__auto__ = cljs_time.core._EQ_.call(null,start,date);
if(cljs.core.truth_(or__36772__auto__)){
return or__36772__auto__;
} else {
var and__36760__auto__ = cljs_time.core.before_QMARK_.call(null,start,date);
if(cljs.core.truth_(and__36760__auto__)){
return cljs_time.core.after_QMARK_.call(null,end,date);
} else {
return and__36760__auto__;
}
}
});

cljs_time.core.within_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * With 2 arguments: Returns true of the two given Intervals overlap.
 *   Note that intervals that satisfy abuts? do not satisfy overlaps?
 * 
 *   With 4 arguments: Returns true if the range specified by start-a and end-a
 *   overlaps with the range specified by start-b and end-b.
 */
cljs_time.core.overlaps_QMARK_ = (function cljs_time$core$overlaps_QMARK_(var_args){
var args44706 = [];
var len__37847__auto___44715 = arguments.length;
var i__37848__auto___44716 = (0);
while(true){
if((i__37848__auto___44716 < len__37847__auto___44715)){
args44706.push((arguments[i__37848__auto___44716]));

var G__44717 = (i__37848__auto___44716 + (1));
i__37848__auto___44716 = G__44717;
continue;
} else {
}
break;
}

var G__44708 = args44706.length;
switch (G__44708) {
case 2:
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44706.length)].join('')));

}
});

cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__44709,p__44710){
var map__44711 = p__44709;
var map__44711__$1 = ((((!((map__44711 == null)))?((((map__44711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44711):map__44711);
var start_a = cljs.core.get.call(null,map__44711__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_a = cljs.core.get.call(null,map__44711__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var map__44712 = p__44710;
var map__44712__$1 = ((((!((map__44712 == null)))?((((map__44712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44712):map__44712);
var start_b = cljs.core.get.call(null,map__44712__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_b = cljs.core.get.call(null,map__44712__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var and__36760__auto__ = cljs.core.not.call(null,(function (){var or__36772__auto__ = cljs_time.core._EQ_.call(null,start_a,end_b);
if(cljs.core.truth_(or__36772__auto__)){
return or__36772__auto__;
} else {
return cljs_time.core._EQ_.call(null,end_a,start_b);
}
})());
if(and__36760__auto__){
return cljs_time.core.overlaps_QMARK_.call(null,start_a,end_a,start_b,end_b);
} else {
return and__36760__auto__;
}
});

cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (start_a,end_a,start_b,end_b){
var or__36772__auto__ = (function (){var and__36760__auto__ = cljs_time.core.before_QMARK_.call(null,start_b,end_a);
if(cljs.core.truth_(and__36760__auto__)){
return cljs_time.core.after_QMARK_.call(null,end_b,start_a);
} else {
return and__36760__auto__;
}
})();
if(cljs.core.truth_(or__36772__auto__)){
return or__36772__auto__;
} else {
var or__36772__auto____$1 = (function (){var and__36760__auto__ = cljs_time.core.after_QMARK_.call(null,end_b,start_a);
if(cljs.core.truth_(and__36760__auto__)){
return cljs_time.core.before_QMARK_.call(null,start_b,end_a);
} else {
return and__36760__auto__;
}
})();
if(cljs.core.truth_(or__36772__auto____$1)){
return or__36772__auto____$1;
} else {
var or__36772__auto____$2 = cljs_time.core._EQ_.call(null,start_a,end_b);
if(cljs.core.truth_(or__36772__auto____$2)){
return or__36772__auto____$2;
} else {
return cljs_time.core._EQ_.call(null,start_b,end_a);
}
}
}
});

cljs_time.core.overlaps_QMARK_.cljs$lang$maxFixedArity = 4;

/**
 * Returns an Interval representing the overlap of the specified Intervals.
 *  Returns nil if the Intervals do not overlap.
 *  The first argument must not be nil.
 *  If the second argument is nil then the overlap of the first argument
 *  and a zero duration interval with both start and end times equal to the
 *  current time is returned.
 */
cljs_time.core.overlap = (function cljs_time$core$overlap(i_a,i_b){
if((i_b == null)){
var n = cljs_time.core.now.call(null);
return cljs_time$core$overlap.call(null,i_a,cljs_time.core.interval.call(null,n,n));
} else {
if(cljs.core.truth_(cljs_time.core.overlaps_QMARK_.call(null,i_a,i_b))){
return cljs_time.core.interval.call(null,cljs_time.core.latest.call(null,cljs_time.core.start.call(null,i_a),cljs_time.core.start.call(null,i_b)),cljs_time.core.earliest.call(null,cljs_time.core.end.call(null,i_a),cljs_time.core.end.call(null,i_b)));
} else {
return null;

}
}
});
/**
 * Returns true if Interval a abuts b, i.e. then end of a is exactly the
 *   beginning of b.
 */
cljs_time.core.abuts_QMARK_ = (function cljs_time$core$abuts_QMARK_(p__44719,p__44720){
var map__44725 = p__44719;
var map__44725__$1 = ((((!((map__44725 == null)))?((((map__44725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44725):map__44725);
var start_a = cljs.core.get.call(null,map__44725__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_a = cljs.core.get.call(null,map__44725__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var map__44726 = p__44720;
var map__44726__$1 = ((((!((map__44726 == null)))?((((map__44726.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44726.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44726):map__44726);
var start_b = cljs.core.get.call(null,map__44726__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_b = cljs.core.get.call(null,map__44726__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var or__36772__auto__ = cljs_time.core._EQ_.call(null,start_a,end_b);
if(cljs.core.truth_(or__36772__auto__)){
return or__36772__auto__;
} else {
return cljs_time.core._EQ_.call(null,end_a,start_b);
}
});
cljs_time.core.date_QMARK_ = (function cljs_time$core$date_QMARK_(x){
if(!((x == null))){
if((false) || (x.cljs_time$core$DateTimeProtocol$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs_time.core.DateTimeProtocol,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs_time.core.DateTimeProtocol,x);
}
});
cljs_time.core.interval_QMARK_ = (function cljs_time$core$interval_QMARK_(x){
return (x instanceof cljs_time.core.Interval);
});
cljs_time.core.period_QMARK_ = (function cljs_time$core$period_QMARK_(x){
return (x instanceof cljs_time.core.Period);
});
cljs_time.core.period_type_QMARK_ = (function cljs_time$core$period_type_QMARK_(type,x){
var and__36760__auto__ = cljs_time.core.period_QMARK_.call(null,x);
if(cljs.core.truth_(and__36760__auto__)){
return cljs.core.contains_QMARK_.call(null,x,type);
} else {
return and__36760__auto__;
}
});
/**
 * Returns true if the given value is an instance of Years
 */
cljs_time.core.years_QMARK_ = (function cljs_time$core$years_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),val);
});
/**
 * Returns true if the given value is an instance of Months
 */
cljs_time.core.months_QMARK_ = (function cljs_time$core$months_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"months","months",-45571637),val);
});
/**
 * Returns true if the given value is an instance of Weeks
 */
cljs_time.core.weeks_QMARK_ = (function cljs_time$core$weeks_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),val);
});
/**
 * Returns true if the given value is an instance of Days
 */
cljs_time.core.days_QMARK_ = (function cljs_time$core$days_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),val);
});
/**
 * Returns true if the given value is an instance of Hours
 */
cljs_time.core.hours_QMARK_ = (function cljs_time$core$hours_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),val);
});
/**
 * Returns true if the given value is an instance of Minutes
 */
cljs_time.core.minutes_QMARK_ = (function cljs_time$core$minutes_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),val);
});
/**
 * Returns true if the given value is an instance of Seconds
 */
cljs_time.core.seconds_QMARK_ = (function cljs_time$core$seconds_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),val);
});
cljs_time.core.mins_ago = (function cljs_time$core$mins_ago(d){
return cljs_time.core.in_minutes.call(null,cljs_time.core.interval.call(null,d,cljs_time.core.now.call(null)));
});
cljs_time.core.last_day_of_the_month = (function cljs_time$core$last_day_of_the_month(var_args){
var args44731 = [];
var len__37847__auto___44734 = arguments.length;
var i__37848__auto___44735 = (0);
while(true){
if((i__37848__auto___44735 < len__37847__auto___44734)){
args44731.push((arguments[i__37848__auto___44735]));

var G__44736 = (i__37848__auto___44735 + (1));
i__37848__auto___44735 = G__44736;
continue;
} else {
}
break;
}

var G__44733 = args44731.length;
switch (G__44733) {
case 1:
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44731.length)].join('')));

}
});

cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.last_day_of_the_month_.call(null,dt);
});

cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.last_day_of_the_month_.call(null,cljs_time.core.date_time.call(null,year,month));
});

cljs_time.core.last_day_of_the_month.cljs$lang$maxFixedArity = 2;

cljs_time.core.number_of_days_in_the_month = (function cljs_time$core$number_of_days_in_the_month(var_args){
var args44738 = [];
var len__37847__auto___44741 = arguments.length;
var i__37848__auto___44742 = (0);
while(true){
if((i__37848__auto___44742 < len__37847__auto___44741)){
args44738.push((arguments[i__37848__auto___44742]));

var G__44743 = (i__37848__auto___44742 + (1));
i__37848__auto___44742 = G__44743;
continue;
} else {
}
break;
}

var G__44740 = args44738.length;
switch (G__44740) {
case 1:
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44738.length)].join('')));

}
});

cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.number_of_days_in_the_month.call(null,cljs_time.core.year.call(null,dt),cljs_time.core.month.call(null,dt));
});

cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.last_day_of_the_month.call(null,year,month).getDate();
});

cljs_time.core.number_of_days_in_the_month.cljs$lang$maxFixedArity = 2;

cljs_time.core.first_day_of_the_month = (function cljs_time$core$first_day_of_the_month(var_args){
var args44745 = [];
var len__37847__auto___44748 = arguments.length;
var i__37848__auto___44749 = (0);
while(true){
if((i__37848__auto___44749 < len__37847__auto___44748)){
args44745.push((arguments[i__37848__auto___44749]));

var G__44750 = (i__37848__auto___44749 + (1));
i__37848__auto___44749 = G__44750;
continue;
} else {
}
break;
}

var G__44747 = args44745.length;
switch (G__44747) {
case 1:
return cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44745.length)].join('')));

}
});

cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.first_day_of_the_month_.call(null,dt);
});

cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.first_day_of_the_month_.call(null,cljs_time.core.date_time.call(null,year,month));
});

cljs_time.core.first_day_of_the_month.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
cljs_time.core.IToPeriod = function(){};

cljs_time.core.__GT_period = (function cljs_time$core$__GT_period(obj){
if((!((obj == null))) && (!((obj.cljs_time$core$IToPeriod$__GT_period$arity$1 == null)))){
return obj.cljs_time$core$IToPeriod$__GT_period$arity$1(obj);
} else {
var x__37435__auto__ = (((obj == null))?null:obj);
var m__37436__auto__ = (cljs_time.core.__GT_period[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,obj);
} else {
var m__37436__auto____$1 = (cljs_time.core.__GT_period["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,obj);
} else {
throw cljs.core.missing_protocol.call(null,"IToPeriod.->period",obj);
}
}
}
});

cljs_time.core.Interval.prototype.cljs_time$core$IToPeriod$ = true;

cljs_time.core.Interval.prototype.cljs_time$core$IToPeriod$__GT_period$arity$1 = (function (p__44752){
var map__44753 = p__44752;
var map__44753__$1 = ((((!((map__44753 == null)))?((((map__44753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44753):map__44753);
var interval = map__44753__$1;
var start = cljs.core.get.call(null,map__44753__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__44753__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var map__44755 = this;
var map__44755__$1 = ((((!((map__44755 == null)))?((((map__44755.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44755.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44755):map__44755);
var interval__$1 = map__44755__$1;
var start__$1 = cljs.core.get.call(null,map__44755__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end__$1 = cljs.core.get.call(null,map__44755__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var years = cljs_time.core.in_years.call(null,interval__$1);
var start_year = cljs_time.core.year.call(null,start__$1);
var leap_years = cljs.core.count.call(null,cljs.core.remove.call(null,cljs.core.false_QMARK_,cljs.core.map.call(null,cljs_time.internal.core.leap_year_QMARK_,cljs.core.range.call(null,start_year,(start_year + years)))));
var start_month = cljs_time.core.month.call(null,start__$1);
var days_in_months = cljs_time.core.total_days_in_whole_months.call(null,interval__$1);
var months = (cljs.core.count.call(null,days_in_months) - (years * (12)));
var days_to_remove = cljs.core.reduce.call(null,cljs.core._PLUS_,days_in_months);
var days = (cljs_time.core.in_days.call(null,interval__$1) - days_to_remove);
var hours_to_remove = ((24) * (days + days_to_remove));
var hours = (cljs_time.core.in_hours.call(null,interval__$1) - hours_to_remove);
var minutes_to_remove = ((60) * (hours + hours_to_remove));
var minutes = (cljs_time.core.in_minutes.call(null,interval__$1) - minutes_to_remove);
var seconds_to_remove = ((60) * (minutes + minutes_to_remove));
var seconds = (cljs_time.core.in_seconds.call(null,interval__$1) - seconds_to_remove);
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),years,new cljs.core.Keyword(null,"months","months",-45571637),months,new cljs.core.Keyword(null,"days","days",-1394072564),days,new cljs.core.Keyword(null,"hours","hours",58380855),hours,new cljs.core.Keyword(null,"minutes","minutes",1319166394),minutes,new cljs.core.Keyword(null,"seconds","seconds",-445266194),seconds,new cljs.core.Keyword(null,"millis","millis",-1338288387),(cljs_time.core.in_millis.call(null,interval__$1) - ((1000) * (seconds + seconds_to_remove))));
});

cljs_time.core.Period.prototype.cljs_time$core$IToPeriod$ = true;

cljs_time.core.Period.prototype.cljs_time$core$IToPeriod$__GT_period$arity$1 = (function (period){
var period__$1 = this;
return period__$1;
});
cljs_time.core.today_at = (function cljs_time$core$today_at(var_args){
var args44757 = [];
var len__37847__auto___44761 = arguments.length;
var i__37848__auto___44762 = (0);
while(true){
if((i__37848__auto___44762 < len__37847__auto___44761)){
args44757.push((arguments[i__37848__auto___44762]));

var G__44763 = (i__37848__auto___44762 + (1));
i__37848__auto___44762 = G__44763;
continue;
} else {
}
break;
}

var G__44759 = args44757.length;
switch (G__44759) {
case 4:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44757.length)].join('')));

}
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$4 = (function (hours,minutes,seconds,millis){
var G__44760 = (new goog.date.UtcDateTime());
G__44760.setHours(hours);

G__44760.setMinutes(minutes);

G__44760.setSeconds(seconds);

G__44760.setMilliseconds(millis);

return G__44760;
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$3 = (function (hours,minutes,seconds){
return cljs_time.core.today_at.call(null,hours,minutes,seconds,(0));
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
return cljs_time.core.today_at.call(null,hours,minutes,(0));
});

cljs_time.core.today_at.cljs$lang$maxFixedArity = 4;

cljs_time.core.do_at_STAR_ = (function cljs_time$core$do_at_STAR_(base_date_time,body_fn){
var _STAR_ms_fn_STAR_44766 = cljs_time.core._STAR_ms_fn_STAR_;
cljs_time.core._STAR_ms_fn_STAR_ = cljs_time.core.static_ms_fn.call(null,base_date_time.getTime());

try{return body_fn.call(null);
}finally {cljs_time.core._STAR_ms_fn_STAR_ = _STAR_ms_fn_STAR_44766;
}});
/**
 * Floors the given date-time dt to the given time unit dt-fn,
 *  e.g. (floor (now) hour) returns (now) for all units
 *  up to and including the hour
 */
cljs_time.core.floor = (function cljs_time$core$floor(dt,dt_fn){
var dt_fns = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_time.core.year,cljs_time.core.month,cljs_time.core.day,cljs_time.core.hour,cljs_time.core.minute,cljs_time.core.second,cljs_time.core.milli], null);
return cljs.core.apply.call(null,cljs_time.core.date_time,cljs.core.map.call(null,cljs.core.apply,cljs.core.concat.call(null,cljs.core.take_while.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,dt_fn),dt_fns),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dt_fn], null)),cljs.core.repeat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dt], null))));
});

//# sourceMappingURL=core.js.map