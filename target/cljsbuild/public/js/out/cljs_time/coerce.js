// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs_time.coerce');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('goog.date.UtcDateTime');

/**
 * @interface
 */
cljs_time.coerce.ICoerce = function(){};

/**
 * Convert `obj` to a goog.date.DateTime instance.
 */
cljs_time.coerce.to_date_time = (function cljs_time$coerce$to_date_time(obj){
if((!((obj == null))) && (!((obj.cljs_time$coerce$ICoerce$to_date_time$arity$1 == null)))){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
var x__37467__auto__ = (((obj == null))?null:obj);
var m__37468__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__37467__auto__)]);
if(!((m__37468__auto__ == null))){
return m__37468__auto__.call(null,obj);
} else {
var m__37468__auto____$1 = (cljs_time.coerce.to_date_time["_"]);
if(!((m__37468__auto____$1 == null))){
return m__37468__auto____$1.call(null,obj);
} else {
throw cljs.core.missing_protocol.call(null,"ICoerce.to-date-time",obj);
}
}
}
});

/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.from_long = (function cljs_time$coerce$from_long(millis){
var G__50585 = millis;
if((G__50585 == null)){
return null;
} else {
return goog.date.UtcDateTime.fromTimestamp.call(null,G__50585);
}
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first.call(null,(function (){var iter__37584__auto__ = (function cljs_time$coerce$from_string_$_iter__50594(s__50595){
return (new cljs.core.LazySeq(null,(function (){
var s__50595__$1 = s__50595;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__50595__$1);
if(temp__4657__auto__){
var s__50595__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50595__$2)){
var c__37582__auto__ = cljs.core.chunk_first.call(null,s__50595__$2);
var size__37583__auto__ = cljs.core.count.call(null,c__37582__auto__);
var b__50597 = cljs.core.chunk_buffer.call(null,size__37583__auto__);
if((function (){var i__50596 = (0);
while(true){
if((i__50596 < size__37583__auto__)){
var f = cljs.core._nth.call(null,c__37582__auto__,i__50596);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e50600){if((e50600 instanceof Error)){
var _ = e50600;
return null;
} else {
throw e50600;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append.call(null,b__50597,d);

var G__50602 = (i__50596 + (1));
i__50596 = G__50602;
continue;
} else {
var G__50603 = (i__50596 + (1));
i__50596 = G__50603;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50597),cljs_time$coerce$from_string_$_iter__50594.call(null,cljs.core.chunk_rest.call(null,s__50595__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50597),null);
}
} else {
var f = cljs.core.first.call(null,s__50595__$2);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e50601){if((e50601 instanceof Error)){
var _ = e50601;
return null;
} else {
throw e50601;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons.call(null,d,cljs_time$coerce$from_string_$_iter__50594.call(null,cljs.core.rest.call(null,s__50595__$2)));
} else {
var G__50604 = cljs.core.rest.call(null,s__50595__$2);
s__50595__$1 = G__50604;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__37584__auto__.call(null,cljs.core.vals.call(null,cljs_time.format.formatters));
})());
} else {
return null;
}
});
/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   js Date object.
 */
cljs_time.coerce.from_date = (function cljs_time$coerce$from_date(date){
var G__50606 = date;
var G__50606__$1 = (((G__50606 == null))?null:G__50606.getTime());
if((G__50606__$1 == null)){
return null;
} else {
return cljs_time.coerce.from_long.call(null,G__50606__$1);
}
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__50608 = obj;
var G__50608__$1 = (((G__50608 == null))?null:cljs_time.coerce.to_date_time.call(null,G__50608));
if((G__50608__$1 == null)){
return null;
} else {
return G__50608__$1.getTime();
}
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var millis = cljs_time.coerce.to_long.call(null,obj);
var and__36792__auto__ = millis;
if(cljs.core.truth_(and__36792__auto__)){
return cljs.core.quot.call(null,millis,(1000));
} else {
return and__36792__auto__;
}
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var G__50610 = obj;
var G__50610__$1 = (((G__50610 == null))?null:cljs_time.coerce.to_date_time.call(null,G__50610));
var G__50610__$2 = (((G__50610__$1 == null))?null:G__50610__$1.getTime());
if((G__50610__$2 == null)){
return null;
} else {
return (new Date(G__50610__$2));
}
});
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__50612 = obj;
var G__50612__$1 = (((G__50612 == null))?null:cljs_time.coerce.to_date_time.call(null,G__50612));
if((G__50612__$1 == null)){
return null;
} else {
return cljs_time.format.unparse.call(null,new cljs.core.Keyword(null,"date-time","date-time",177938180).cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__50612__$1);
}
});
/**
 * Convert `obj` to a goog.date.Date instance
 */
cljs_time.coerce.to_local_date = (function cljs_time$coerce$to_local_date(obj){
if(cljs.core.truth_(obj)){
if(cljs.core._EQ_.call(null,goog.date.Date,cljs.core.type.call(null,obj))){
return obj;
} else {
var temp__4655__auto__ = cljs_time.coerce.to_date_time.call(null,obj);
if(cljs.core.truth_(temp__4655__auto__)){
var dt = temp__4655__auto__;
return (new goog.date.Date(dt.getYear(),dt.getMonth(),dt.getDate()));
} else {
return null;
}
}
} else {
return null;
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance
 */
cljs_time.coerce.to_local_date_time = (function cljs_time$coerce$to_local_date_time(obj){
if(cljs.core.truth_(obj)){
var temp__4655__auto__ = cljs_time.coerce.to_date_time.call(null,obj);
if(cljs.core.truth_(temp__4655__auto__)){
var dt = temp__4655__auto__;
var G__50614 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__50614.setHours(dt.getHours());

G__50614.setMinutes(dt.getMinutes());

G__50614.setSeconds(dt.getSeconds());

G__50614.setMilliseconds(dt.getMilliseconds());

return G__50614;
} else {
return null;
}
} else {
return null;
}
});
(cljs_time.coerce.ICoerce["null"] = true);

(cljs_time.coerce.to_date_time["null"] = (function (_){
return null;
}));

Date.prototype.cljs_time$coerce$ICoerce$ = true;

Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date.call(null,date__$1);
});

goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = true;

goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){
var local_date__$1 = this;
if(cljs.core.truth_(local_date__$1)){
return cljs_time.core.to_utc_time_zone.call(null,local_date__$1);
} else {
return null;
}
});

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = true;

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){
var local_date_time__$1 = this;
if(cljs.core.truth_(local_date_time__$1)){
return cljs_time.core.to_utc_time_zone.call(null,local_date_time__$1);
} else {
return null;
}
});

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = true;

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return date_time__$1;
});

(cljs_time.coerce.ICoerce["number"] = true);

(cljs_time.coerce.to_date_time["number"] = (function (long$){
return cljs_time.coerce.from_long.call(null,long$);
}));

(cljs_time.coerce.ICoerce["string"] = true);

(cljs_time.coerce.to_date_time["string"] = (function (string){
return cljs_time.coerce.from_string.call(null,string);
}));

//# sourceMappingURL=coerce.js.map