// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs_time.format');
goog.require('cljs.core');
goog.require('cljs_time.internal.parse');
goog.require('cljs_time.internal.core');
goog.require('cljs_time.internal.unparse');
goog.require('goog.date.duration');
goog.require('cljs_time.core');
goog.require('clojure.set');
cljs_time.format.months = cljs_time.internal.core.months;
cljs_time.format.days = cljs_time.internal.core.days;
cljs_time.format.skip_timezone_formatter = (function cljs_time$format$skip_timezone_formatter(){
return new cljs.core.PersistentArrayMap(null, 2, ["Z",cljs.core.constantly.call(null,""),"ZZ",cljs.core.constantly.call(null,"")], null);
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
cljs_time.format.Formatter = (function (format_str,overrides,default_year,timezone,__meta,__extmap,__hash){
this.format_str = format_str;
this.overrides = overrides;
this.default_year = default_year;
this.timezone = timezone;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs_time.format.Formatter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__37424__auto__,k__37425__auto__){
var self__ = this;
var this__37424__auto____$1 = this;
return cljs.core._lookup.call(null,this__37424__auto____$1,k__37425__auto__,null);
});

cljs_time.format.Formatter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__37426__auto__,k50466,else__37427__auto__){
var self__ = this;
var this__37426__auto____$1 = this;
var G__50468 = (((k50466 instanceof cljs.core.Keyword))?k50466.fqn:null);
switch (G__50468) {
case "format-str":
return self__.format_str;

break;
case "overrides":
return self__.overrides;

break;
case "default-year":
return self__.default_year;

break;
case "timezone":
return self__.timezone;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k50466,else__37427__auto__);

}
});

cljs_time.format.Formatter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__37438__auto__,writer__37439__auto__,opts__37440__auto__){
var self__ = this;
var this__37438__auto____$1 = this;
var pr_pair__37441__auto__ = ((function (this__37438__auto____$1){
return (function (keyval__37442__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__37439__auto__,cljs.core.pr_writer,""," ","",opts__37440__auto__,keyval__37442__auto__);
});})(this__37438__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__37439__auto__,pr_pair__37441__auto__,"#cljs-time.format.Formatter{",", ","}",opts__37440__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"format-str","format-str",695206156),self__.format_str],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"overrides","overrides",1738628867),self__.overrides],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"default-year","default-year",1658037695),self__.default_year],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timezone","timezone",1831928099),self__.timezone],null))], null),self__.__extmap));
});

cljs_time.format.Formatter.prototype.cljs$core$IIterable$ = true;

cljs_time.format.Formatter.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50465){
var self__ = this;
var G__50465__$1 = this;
return (new cljs.core.RecordIter((0),G__50465__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"format-str","format-str",695206156),new cljs.core.Keyword(null,"overrides","overrides",1738628867),new cljs.core.Keyword(null,"default-year","default-year",1658037695),new cljs.core.Keyword(null,"timezone","timezone",1831928099)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

cljs_time.format.Formatter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__37422__auto__){
var self__ = this;
var this__37422__auto____$1 = this;
return self__.__meta;
});

cljs_time.format.Formatter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__37418__auto__){
var self__ = this;
var this__37418__auto____$1 = this;
return (new cljs_time.format.Formatter(self__.format_str,self__.overrides,self__.default_year,self__.timezone,self__.__meta,self__.__extmap,self__.__hash));
});

cljs_time.format.Formatter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__37428__auto__){
var self__ = this;
var this__37428__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs_time.format.Formatter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__37419__auto__){
var self__ = this;
var this__37419__auto____$1 = this;
var h__37237__auto__ = self__.__hash;
if(!((h__37237__auto__ == null))){
return h__37237__auto__;
} else {
var h__37237__auto____$1 = cljs.core.hash_imap.call(null,this__37419__auto____$1);
self__.__hash = h__37237__auto____$1;

return h__37237__auto____$1;
}
});

cljs_time.format.Formatter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__37420__auto__,other__37421__auto__){
var self__ = this;
var this__37420__auto____$1 = this;
if(cljs.core.truth_((function (){var and__36790__auto__ = other__37421__auto__;
if(cljs.core.truth_(and__36790__auto__)){
var and__36790__auto____$1 = (this__37420__auto____$1.constructor === other__37421__auto__.constructor);
if(and__36790__auto____$1){
return cljs.core.equiv_map.call(null,this__37420__auto____$1,other__37421__auto__);
} else {
return and__36790__auto____$1;
}
} else {
return and__36790__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs_time.format.Formatter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__37433__auto__,k__37434__auto__){
var self__ = this;
var this__37433__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"timezone","timezone",1831928099),null,new cljs.core.Keyword(null,"overrides","overrides",1738628867),null,new cljs.core.Keyword(null,"format-str","format-str",695206156),null,new cljs.core.Keyword(null,"default-year","default-year",1658037695),null], null), null),k__37434__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__37433__auto____$1),self__.__meta),k__37434__auto__);
} else {
return (new cljs_time.format.Formatter(self__.format_str,self__.overrides,self__.default_year,self__.timezone,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__37434__auto__)),null));
}
});

cljs_time.format.Formatter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__37431__auto__,k__37432__auto__,G__50465){
var self__ = this;
var this__37431__auto____$1 = this;
var pred__50469 = cljs.core.keyword_identical_QMARK_;
var expr__50470 = k__37432__auto__;
if(cljs.core.truth_(pred__50469.call(null,new cljs.core.Keyword(null,"format-str","format-str",695206156),expr__50470))){
return (new cljs_time.format.Formatter(G__50465,self__.overrides,self__.default_year,self__.timezone,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50469.call(null,new cljs.core.Keyword(null,"overrides","overrides",1738628867),expr__50470))){
return (new cljs_time.format.Formatter(self__.format_str,G__50465,self__.default_year,self__.timezone,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50469.call(null,new cljs.core.Keyword(null,"default-year","default-year",1658037695),expr__50470))){
return (new cljs_time.format.Formatter(self__.format_str,self__.overrides,G__50465,self__.timezone,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50469.call(null,new cljs.core.Keyword(null,"timezone","timezone",1831928099),expr__50470))){
return (new cljs_time.format.Formatter(self__.format_str,self__.overrides,self__.default_year,G__50465,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.format.Formatter(self__.format_str,self__.overrides,self__.default_year,self__.timezone,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__37432__auto__,G__50465),null));
}
}
}
}
});

cljs_time.format.Formatter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__37436__auto__){
var self__ = this;
var this__37436__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"format-str","format-str",695206156),self__.format_str],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"overrides","overrides",1738628867),self__.overrides],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"default-year","default-year",1658037695),self__.default_year],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timezone","timezone",1831928099),self__.timezone],null))], null),self__.__extmap));
});

cljs_time.format.Formatter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__37423__auto__,G__50465){
var self__ = this;
var this__37423__auto____$1 = this;
return (new cljs_time.format.Formatter(self__.format_str,self__.overrides,self__.default_year,self__.timezone,G__50465,self__.__extmap,self__.__hash));
});

cljs_time.format.Formatter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__37429__auto__,entry__37430__auto__){
var self__ = this;
var this__37429__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__37430__auto__)){
return cljs.core._assoc.call(null,this__37429__auto____$1,cljs.core._nth.call(null,entry__37430__auto__,(0)),cljs.core._nth.call(null,entry__37430__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__37429__auto____$1,entry__37430__auto__);
}
});

cljs_time.format.Formatter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"format-str","format-str",-1959229613,null),new cljs.core.Symbol(null,"overrides","overrides",-915806902,null),new cljs.core.Symbol(null,"default-year","default-year",-996398074,null),new cljs.core.Symbol(null,"timezone","timezone",-822507670,null)], null);
});

cljs_time.format.Formatter.cljs$lang$type = true;

cljs_time.format.Formatter.cljs$lang$ctorPrSeq = (function (this__37458__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs-time.format/Formatter");
});

cljs_time.format.Formatter.cljs$lang$ctorPrWriter = (function (this__37458__auto__,writer__37459__auto__){
return cljs.core._write.call(null,writer__37459__auto__,"cljs-time.format/Formatter");
});

cljs_time.format.__GT_Formatter = (function cljs_time$format$__GT_Formatter(format_str,overrides,default_year,timezone){
return (new cljs_time.format.Formatter(format_str,overrides,default_year,timezone,null,null,null));
});

cljs_time.format.map__GT_Formatter = (function cljs_time$format$map__GT_Formatter(G__50467){
return (new cljs_time.format.Formatter(new cljs.core.Keyword(null,"format-str","format-str",695206156).cljs$core$IFn$_invoke$arity$1(G__50467),new cljs.core.Keyword(null,"overrides","overrides",1738628867).cljs$core$IFn$_invoke$arity$1(G__50467),new cljs.core.Keyword(null,"default-year","default-year",1658037695).cljs$core$IFn$_invoke$arity$1(G__50467),new cljs.core.Keyword(null,"timezone","timezone",1831928099).cljs$core$IFn$_invoke$arity$1(G__50467),null,cljs.core.dissoc.call(null,G__50467,new cljs.core.Keyword(null,"format-str","format-str",695206156),new cljs.core.Keyword(null,"overrides","overrides",1738628867),new cljs.core.Keyword(null,"default-year","default-year",1658037695),new cljs.core.Keyword(null,"timezone","timezone",1831928099)),null));
});

cljs_time.format.formatter = (function cljs_time$format$formatter(var_args){
var args50473 = [];
var len__37877__auto___50476 = arguments.length;
var i__37878__auto___50477 = (0);
while(true){
if((i__37878__auto___50477 < len__37877__auto___50476)){
args50473.push((arguments[i__37878__auto___50477]));

var G__50478 = (i__37878__auto___50477 + (1));
i__37878__auto___50477 = G__50478;
continue;
} else {
}
break;
}

var G__50475 = args50473.length;
switch (G__50475) {
case 1:
return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50473.length)].join('')));

}
});

cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1 = (function (fmts){
return cljs_time.format.formatter.call(null,fmts,cljs_time.core.utc);
});

cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$2 = (function (fmts,dtz){
return cljs_time.format.map__GT_Formatter.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"format-str","format-str",695206156),fmts,new cljs.core.Keyword(null,"timezone","timezone",1831928099),dtz], null));
});

cljs_time.format.formatter.cljs$lang$maxFixedArity = 2;

cljs_time.format.formatter_local = (function cljs_time$format$formatter_local(fmts){
return cljs_time.format.map__GT_Formatter.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"format-str","format-str",695206156),fmts,new cljs.core.Keyword(null,"overrides","overrides",1738628867),cljs_time.format.skip_timezone_formatter.call(null)], null));
});
/**
 * Return a copy of a formatter that uses the given default year.
 */
cljs_time.format.with_default_year = (function cljs_time$format$with_default_year(f,default_year){
return cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"default-year","default-year",1658037695),default_year);
});
cljs_time.format.not_implemented = (function cljs_time$format$not_implemented(sym){
return (function (){
throw ({"name": new cljs.core.Keyword(null,"not-implemented","not-implemented",1918806714), "message": cljs_time.internal.core.format.call(null,"%s not implemented yet",cljs.core.name.call(null,sym))});
});
});
/**
 * **Note: not all formatters have been implemented yet.**
 * 
 *   Map of ISO 8601 and a single RFC 822 formatters that can be used
 *   for parsing and, in most cases, printing.
 *   
 *   Note: due to current implementation limitations, timezone information
 *   cannot be kept. Although the correct offset will be applied to UTC
 *   time if supplied.
 * 
 *   The pattern syntax is mostly compatible with java.text.SimpleDateFormat -
 *   time zone names cannot be parsed and a few more symbols are supported. All
 *   ASCII letters are reserved as pattern letters, which are defined as follows:
 * 
 * ```
 *  Symbol  Meaning                      Presentation  Examples
 *  ------  -------                      ------------  -------
 *  G       era                          text          AD
 *  C       century of era (>=0)         number        20
 *  Y       year of era (>=0)            year          1996
 * 
 *  x       weekyear                     year          1996
 *  w       week of weekyear             number        27
 *  e       day of week                  number        2
 *  E       day of week                  text          Tuesday; Tue
 * 
 *  y       year                         year          1996
 *  D       day of year                  number        189
 *  M       month of year                month         July; Jul; 07
 *  d       day of month                 number        10
 * 
 *  a       halfday of day               text          PM
 *  K       hour of halfday (0~11)       number        0
 *  h       clockhour of halfday (1~12)  number        12
 * 
 *  H       hour of day (0~23)           number        0
 *  k       clockhour of day (1~24)      number        24
 *  m       minute of hour               number        30
 *  s       second of minute             number        55
 *  S       fraction of second           number        978
 *  a       meridiem                     text          am; pm
 *  A       meridiem                     text          AM; PM
 * 
 *  z       time zone                    text          Pacific Standard Time; PST
 *  Z       time zone offset/id          zone          -0800; -08:00; America/Los_Angeles
 * 
 *  '       escape for text              delimiter
 *  ''      single quote                 literal       '
 * 
 *  cljs-time additions:
 *  ------  -------                      ------------  -------
 *  Symbol  Meaning                      Presentation  Examples
 *  ------  -------                      ------------  -------
 *  o       ordinal suffix               text          st nd rd th (E.G., 1st, 2nd, 3rd, 4th)
 * ```
 * 
 *   The count of pattern letters determine the format.
 * 
 *   **Text:** If the number of pattern letters is 4 or more, the full form is used;
 *   otherwise a short or abbreviated form is used if available.
 * 
 *   **Number:** The minimum number of digits. Shorter numbers are zero-padded to this
 *   amount.
 * 
 *   **Year:** Numeric presentation for year and weekyear fields are handled
 *   specially. For example, if the count of `y` is 2, the year will be displayed
 *   as the zero-based year of the century, which is two digits.
 * 
 *   **Month:** 3 or over, use text, otherwise use number.
 * 
 *   **Zone:** `Z` outputs offset without a colon, `ZZ` outputs the offset with a
 *   colon, `ZZZ` or more outputs the zone id.
 * 
 *   **Zone names:** Time zone names ('z') cannot be parsed.
 * 
 *   Any characters in the pattern that are not in the ranges of `['a'..'z']` and
 *   `['A'..'Z']` will be treated as quoted text. For instance, characters like `:`,
 *   `.`, `<space>`, `#` and `?` will appear in the resulting time text even they are
 *   not embraced within single quotes.
 */
cljs_time.format.formatters = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"date-element-parser","date-element-parser",2072167040),new cljs.core.Keyword(null,"hour-minute","hour-minute",-1164421312),new cljs.core.Keyword(null,"t-time","t-time",-42016318),new cljs.core.Keyword(null,"basic-ordinal-date","basic-ordinal-date",243220162),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"hour","hour",-555989214),new cljs.core.Keyword(null,"time-no-ms","time-no-ms",870271683),new cljs.core.Keyword(null,"weekyear-week-day","weekyear-week-day",-740233533),new cljs.core.Keyword(null,"week-date-time","week-date-time",540228836),new cljs.core.Keyword(null,"date-hour-minute-second-fraction","date-hour-minute-second-fraction",1937143076),new cljs.core.Keyword(null,"basic-date-time","basic-date-time",1525413604),new cljs.core.Keyword(null,"date-time","date-time",177938180),new cljs.core.Keyword(null,"basic-time-no-ms","basic-time-no-ms",-1720654076),new cljs.core.Keyword(null,"date-parser","date-parser",-981534587),new cljs.core.Keyword(null,"basic-week-date","basic-week-date",1775847845),new cljs.core.Keyword(null,"basic-t-time-no-ms","basic-t-time-no-ms",-424650106),new cljs.core.Keyword(null,"local-time","local-time",-1873195290),new cljs.core.Keyword(null,"date-time-no-ms","date-time-no-ms",1655953671),new cljs.core.Keyword(null,"year-month-day","year-month-day",-415594169),new cljs.core.Keyword(null,"date-opt-time","date-opt-time",-1507102105),new cljs.core.Keyword(null,"rfc822","rfc822",-404628697),new cljs.core.Keyword(null,"date-hour-minute-second-ms","date-hour-minute-second-ms",-425334775),new cljs.core.Keyword(null,"basic-ordinal-date-time","basic-ordinal-date-time",1054564521),new cljs.core.Keyword(null,"ordinal-date","ordinal-date",-77899447),new cljs.core.Keyword(null,"hour-minute-second-fraction","hour-minute-second-fraction",-1253038551),new cljs.core.Keyword(null,"date-hour-minute","date-hour-minute",1629918346),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"basic-week-date-time","basic-week-date-time",-502077622),new cljs.core.Keyword(null,"weekyear","weekyear",-74064500),new cljs.core.Keyword(null,"basic-time","basic-time",-923134899),new cljs.core.Keyword(null,"hour-minute-second","hour-minute-second",-1906654770),new cljs.core.Keyword(null,"ordinal-date-time","ordinal-date-time",-1386753458),new cljs.core.Keyword(null,"ordinal-date-time-no-ms","ordinal-date-time-no-ms",-1539005490),new cljs.core.Keyword(null,"hour-minute-second-ms","hour-minute-second-ms",1209749775),new cljs.core.Keyword(null,"time-parser","time-parser",-1636511536),new cljs.core.Keyword(null,"date-time-parser","date-time-parser",-656147568),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"t-time-no-ms","t-time-no-ms",990689905),new cljs.core.Keyword(null,"basic-week-date-time-no-ms","basic-week-date-time-no-ms",-2043113679),new cljs.core.Keyword(null,"basic-date","basic-date",1566551506),new cljs.core.Keyword(null,"weekyear-week","weekyear-week",795291571),new cljs.core.Keyword(null,"local-date","local-date",1829761428),new cljs.core.Keyword(null,"basic-ordinal-date-time-no-ms","basic-ordinal-date-time-no-ms",-395135436),new cljs.core.Keyword(null,"year-month","year-month",735283381),new cljs.core.Keyword(null,"local-date-opt-time","local-date-opt-time",1178432599),new cljs.core.Keyword(null,"week-date","week-date",-1176745129),new cljs.core.Keyword(null,"date-hour","date-hour",-344234471),new cljs.core.Keyword(null,"time-element-parser","time-element-parser",-2042883205),new cljs.core.Keyword(null,"date-hour-minute-second","date-hour-minute-second",-1565419364),new cljs.core.Keyword(null,"week-date-time-no-ms","week-date-time-no-ms",-1226853060),new cljs.core.Keyword(null,"basic-date-time-no-ms","basic-date-time-no-ms",-899402179),new cljs.core.Keyword(null,"mysql","mysql",-1431590210),new cljs.core.Keyword(null,"basic-t-time","basic-t-time",191791391)],[cljs_time.format.not_implemented.call(null,new cljs.core.Symbol(null,"dateElementParser","dateElementParser",984800945,null)),cljs_time.format.formatter.call(null,"HH:mm"),cljs_time.format.formatter.call(null,"'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.call(null,"yyyyDDD"),cljs_time.format.formatter.call(null,"yyyy-MM-dd"),cljs_time.format.formatter.call(null,"HH"),cljs_time.format.formatter.call(null,"HH:mm:ssZZ"),cljs_time.format.formatter.call(null,"xxxx-'W'ww-e"),cljs_time.format.formatter.call(null,"xxxx-'W'ww-e'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.call(null,"yyyy-MM-dd'T'HH:mm:ss.SSS"),cljs_time.format.formatter.call(null,"yyyyMMdd'T'HHmmss.SSSZ"),cljs_time.format.formatter.call(null,"yyyy-MM-dd'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.call(null,"HHmmssZ"),cljs_time.format.not_implemented.call(null,new cljs.core.Symbol(null,"dateParser","dateParser",-1248418930,null)),cljs_time.format.formatter.call(null,"xxxx'W'wwe"),cljs_time.format.formatter.call(null,"'T'HHmmssZ"),cljs_time.format.not_implemented.call(null,new cljs.core.Symbol(null,"localTimeParser","localTimeParser",-1738135328,null)),cljs_time.format.formatter.call(null,"yyyy-MM-dd'T'HH:mm:ssZZ"),cljs_time.format.formatter.call(null,"yyyy-MM-dd"),cljs_time.format.not_implemented.call(null,new cljs.core.Symbol(null,"dateOptionalTimeParser","dateOptionalTimeParser",1783230854,null)),cljs_time.format.formatter.call(null,"EEE, dd MMM yyyy HH:mm:ss Z"),cljs_time.format.formatter.call(null,"yyyy-MM-dd'T'HH:mm:ss.SSS"),cljs_time.format.formatter.call(null,"yyyyDDD'T'HHmmss.SSSZ"),cljs_time.format.formatter.call(null,"yyyy-DDD"),cljs_time.format.formatter.call(null,"HH:mm:ss.SSS"),cljs_time.format.formatter.call(null,"yyyy-MM-dd'T'HH:mm"),cljs_time.format.formatter.call(null,"HH:mm:ss.SSSZZ"),cljs_time.format.formatter.call(null,"xxxx'W'wwe'T'HHmmss.SSSZ"),cljs_time.format.formatter.call(null,"xxxx"),cljs_time.format.formatter.call(null,"HHmmss.SSSZ"),cljs_time.format.formatter.call(null,"HH:mm:ss"),cljs_time.format.formatter.call(null,"yyyy-DDD'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.call(null,"yyyy-DDD'T'HH:mm:ssZZ"),cljs_time.format.formatter.call(null,"HH:mm:ss.SSS"),cljs_time.format.formatter.call(null,new cljs.core.Symbol(null,"timeParser","timeParser",1585048034,null)),cljs_time.format.not_implemented.call(null,new cljs.core.Symbol(null,"dateTimeParser","dateTimeParser",-1493718282,null)),cljs_time.format.formatter.call(null,"yyyy"),cljs_time.format.formatter.call(null,"'T'HH:mm:ssZZ"),cljs_time.format.formatter.call(null,"xxxx'W'wwe'T'HHmmssZ"),cljs_time.format.formatter.call(null,"yyyyMMdd"),cljs_time.format.formatter.call(null,"xxxx-'W'ww"),cljs_time.format.not_implemented.call(null,new cljs.core.Symbol(null,"localDateParser","localDateParser",477820077,null)),cljs_time.format.formatter.call(null,"yyyyDDD'T'HHmmssZ"),cljs_time.format.formatter.call(null,"yyyy-MM"),cljs_time.format.not_implemented.call(null,new cljs.core.Symbol(null,"localDateOptionalTimeParser","localDateOptionalTimeParser",435955537,null)),cljs_time.format.formatter.call(null,"xxxx-'W'ww-e"),cljs_time.format.formatter.call(null,"yyyy-MM-dd'T'HH"),cljs_time.format.not_implemented.call(null,new cljs.core.Symbol(null,"timeElementParser","timeElementParser",302132553,null)),cljs_time.format.formatter.call(null,"yyyy-MM-dd'T'HH:mm:ss"),cljs_time.format.formatter.call(null,"xxxx-'W'ww-e'T'HH:mm:ssZZ"),cljs_time.format.formatter.call(null,"yyyyMMdd'T'HHmmssZ"),cljs_time.format.formatter.call(null,"yyyy-MM-dd HH:mm:ss"),cljs_time.format.formatter.call(null,"'T'HHmmss.SSSZ")]);
cljs_time.format.parsers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"date-element-parser","date-element-parser",2072167040),null,new cljs.core.Keyword(null,"date-parser","date-parser",-981534587),null,new cljs.core.Keyword(null,"local-time","local-time",-1873195290),null,new cljs.core.Keyword(null,"date-opt-time","date-opt-time",-1507102105),null,new cljs.core.Keyword(null,"time-parser","time-parser",-1636511536),null,new cljs.core.Keyword(null,"date-time-parser","date-time-parser",-656147568),null,new cljs.core.Keyword(null,"local-date","local-date",1829761428),null,new cljs.core.Keyword(null,"local-date-opt-time","local-date-opt-time",1178432599),null,new cljs.core.Keyword(null,"time-element-parser","time-element-parser",-2042883205),null], null), null);
cljs_time.format.printers = clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs_time.format.formatters)),cljs_time.format.parsers);
/**
 * Returns a DateTime instance in the UTC time zone obtained by parsing the
 *   given string according to the given formatter.
 */
cljs_time.format.parse = (function cljs_time$format$parse(var_args){
var args50480 = [];
var len__37877__auto___50491 = arguments.length;
var i__37878__auto___50492 = (0);
while(true){
if((i__37878__auto___50492 < len__37877__auto___50491)){
args50480.push((arguments[i__37878__auto___50492]));

var G__50493 = (i__37878__auto___50492 + (1));
i__37878__auto___50492 = G__50493;
continue;
} else {
}
break;
}

var G__50482 = args50480.length;
switch (G__50482) {
case 2:
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50480.length)].join('')));

}
});

cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2 = (function (fmt,s){
return cljs_time.internal.parse.compile.call(null,new cljs.core.Keyword(null,"goog.date.UtcDateTime","goog.date.UtcDateTime",731790075),fmt,cljs_time.internal.parse.parse.call(null,new cljs.core.Keyword(null,"format-str","format-str",695206156).cljs$core$IFn$_invoke$arity$1(fmt),s));
});

cljs_time.format.parse.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.core.first.call(null,(function (){var iter__37582__auto__ = (function cljs_time$format$iter__50483(s__50484){
return (new cljs.core.LazySeq(null,(function (){
var s__50484__$1 = s__50484;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__50484__$1);
if(temp__4657__auto__){
var s__50484__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50484__$2)){
var c__37580__auto__ = cljs.core.chunk_first.call(null,s__50484__$2);
var size__37581__auto__ = cljs.core.count.call(null,c__37580__auto__);
var b__50486 = cljs.core.chunk_buffer.call(null,size__37581__auto__);
if((function (){var i__50485 = (0);
while(true){
if((i__50485 < size__37581__auto__)){
var f = cljs.core._nth.call(null,c__37580__auto__,i__50485);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e50489){var _ = e50489;
return null;
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append.call(null,b__50486,d);

var G__50495 = (i__50485 + (1));
i__50485 = G__50495;
continue;
} else {
var G__50496 = (i__50485 + (1));
i__50485 = G__50496;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50486),cljs_time$format$iter__50483.call(null,cljs.core.chunk_rest.call(null,s__50484__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50486),null);
}
} else {
var f = cljs.core.first.call(null,s__50484__$2);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e50490){var _ = e50490;
return null;
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons.call(null,d,cljs_time$format$iter__50483.call(null,cljs.core.rest.call(null,s__50484__$2)));
} else {
var G__50497 = cljs.core.rest.call(null,s__50484__$2);
s__50484__$1 = G__50497;
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
return iter__37582__auto__.call(null,cljs.core.vals.call(null,cljs_time.format.formatters));
})());
});

cljs_time.format.parse.cljs$lang$maxFixedArity = 2;

/**
 * Returns a local DateTime instance obtained by parsing the
 *   given string according to the given formatter.
 */
cljs_time.format.parse_local = (function cljs_time$format$parse_local(var_args){
var args50498 = [];
var len__37877__auto___50509 = arguments.length;
var i__37878__auto___50510 = (0);
while(true){
if((i__37878__auto___50510 < len__37877__auto___50509)){
args50498.push((arguments[i__37878__auto___50510]));

var G__50511 = (i__37878__auto___50510 + (1));
i__37878__auto___50510 = G__50511;
continue;
} else {
}
break;
}

var G__50500 = args50498.length;
switch (G__50500) {
case 2:
return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50498.length)].join('')));

}
});

cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2 = (function (fmt,s){
return cljs_time.internal.parse.compile.call(null,new cljs.core.Keyword(null,"goog.date.DateTime","goog.date.DateTime",515178675),fmt,cljs_time.internal.parse.parse.call(null,new cljs.core.Keyword(null,"format-str","format-str",695206156).cljs$core$IFn$_invoke$arity$1(fmt),s));
});

cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.core.first.call(null,(function (){var iter__37582__auto__ = (function cljs_time$format$iter__50501(s__50502){
return (new cljs.core.LazySeq(null,(function (){
var s__50502__$1 = s__50502;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__50502__$1);
if(temp__4657__auto__){
var s__50502__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50502__$2)){
var c__37580__auto__ = cljs.core.chunk_first.call(null,s__50502__$2);
var size__37581__auto__ = cljs.core.count.call(null,c__37580__auto__);
var b__50504 = cljs.core.chunk_buffer.call(null,size__37581__auto__);
if((function (){var i__50503 = (0);
while(true){
if((i__50503 < size__37581__auto__)){
var f = cljs.core._nth.call(null,c__37580__auto__,i__50503);
var d = (function (){try{return cljs_time.format.parse_local.call(null,f,s);
}catch (e50507){if((e50507 instanceof Error)){
var _ = e50507;
return null;
} else {
throw e50507;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append.call(null,b__50504,d);

var G__50513 = (i__50503 + (1));
i__50503 = G__50513;
continue;
} else {
var G__50514 = (i__50503 + (1));
i__50503 = G__50514;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50504),cljs_time$format$iter__50501.call(null,cljs.core.chunk_rest.call(null,s__50502__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50504),null);
}
} else {
var f = cljs.core.first.call(null,s__50502__$2);
var d = (function (){try{return cljs_time.format.parse_local.call(null,f,s);
}catch (e50508){if((e50508 instanceof Error)){
var _ = e50508;
return null;
} else {
throw e50508;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons.call(null,d,cljs_time$format$iter__50501.call(null,cljs.core.rest.call(null,s__50502__$2)));
} else {
var G__50515 = cljs.core.rest.call(null,s__50502__$2);
s__50502__$1 = G__50515;
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
return iter__37582__auto__.call(null,cljs.core.vals.call(null,cljs_time.format.formatters));
})());
});

cljs_time.format.parse_local.cljs$lang$maxFixedArity = 2;

/**
 * Returns a local Date instance obtained by parsing the
 *   given string according to the given formatter.
 */
cljs_time.format.parse_local_date = (function cljs_time$format$parse_local_date(var_args){
var args50516 = [];
var len__37877__auto___50527 = arguments.length;
var i__37878__auto___50528 = (0);
while(true){
if((i__37878__auto___50528 < len__37877__auto___50527)){
args50516.push((arguments[i__37878__auto___50528]));

var G__50529 = (i__37878__auto___50528 + (1));
i__37878__auto___50528 = G__50529;
continue;
} else {
}
break;
}

var G__50518 = args50516.length;
switch (G__50518) {
case 2:
return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50516.length)].join('')));

}
});

cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2 = (function (fmt,s){
return cljs_time.internal.parse.compile.call(null,new cljs.core.Keyword(null,"goog.date.Date","goog.date.Date",1041074644),fmt,cljs_time.internal.parse.parse.call(null,new cljs.core.Keyword(null,"format-str","format-str",695206156).cljs$core$IFn$_invoke$arity$1(fmt),s));
});

cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.core.first.call(null,(function (){var iter__37582__auto__ = (function cljs_time$format$iter__50519(s__50520){
return (new cljs.core.LazySeq(null,(function (){
var s__50520__$1 = s__50520;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__50520__$1);
if(temp__4657__auto__){
var s__50520__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50520__$2)){
var c__37580__auto__ = cljs.core.chunk_first.call(null,s__50520__$2);
var size__37581__auto__ = cljs.core.count.call(null,c__37580__auto__);
var b__50522 = cljs.core.chunk_buffer.call(null,size__37581__auto__);
if((function (){var i__50521 = (0);
while(true){
if((i__50521 < size__37581__auto__)){
var f = cljs.core._nth.call(null,c__37580__auto__,i__50521);
var d = (function (){try{return cljs_time.format.parse_local_date.call(null,f,s);
}catch (e50525){if((e50525 instanceof Error)){
var _ = e50525;
return null;
} else {
throw e50525;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append.call(null,b__50522,d);

var G__50531 = (i__50521 + (1));
i__50521 = G__50531;
continue;
} else {
var G__50532 = (i__50521 + (1));
i__50521 = G__50532;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50522),cljs_time$format$iter__50519.call(null,cljs.core.chunk_rest.call(null,s__50520__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50522),null);
}
} else {
var f = cljs.core.first.call(null,s__50520__$2);
var d = (function (){try{return cljs_time.format.parse_local_date.call(null,f,s);
}catch (e50526){if((e50526 instanceof Error)){
var _ = e50526;
return null;
} else {
throw e50526;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons.call(null,d,cljs_time$format$iter__50519.call(null,cljs.core.rest.call(null,s__50520__$2)));
} else {
var G__50533 = cljs.core.rest.call(null,s__50520__$2);
s__50520__$1 = G__50533;
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
return iter__37582__auto__.call(null,cljs.core.vals.call(null,cljs_time.format.formatters));
})());
});

cljs_time.format.parse_local_date.cljs$lang$maxFixedArity = 2;

/**
 * Returns a string representing the given DateTime instance in UTC and in the
 * form determined by the given formatter.
 */
cljs_time.format.unparse = (function cljs_time$format$unparse(p__50534,dt){
var map__50537 = p__50534;
var map__50537__$1 = ((((!((map__50537 == null)))?((((map__50537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50537):map__50537);
var format_str = cljs.core.get.call(null,map__50537__$1,new cljs.core.Keyword(null,"format-str","format-str",695206156));
var formatters = cljs.core.get.call(null,map__50537__$1,new cljs.core.Keyword(null,"formatters","formatters",-1875637118));
if(!((dt == null))){
} else {
throw (new Error("Assert failed: (not (nil? dt))"));
}

if((dt instanceof goog.date.Date)){
} else {
throw (new Error("Assert failed: (instance? goog.date.Date dt)"));
}

return cljs_time.internal.unparse.unparse.call(null,format_str,dt);
});
/**
 * Returns a string representing the given local DateTime instance in the
 *   form determined by the given formatter.
 */
cljs_time.format.unparse_local = (function cljs_time$format$unparse_local(p__50539,dt){
var map__50542 = p__50539;
var map__50542__$1 = ((((!((map__50542 == null)))?((((map__50542.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50542.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50542):map__50542);
var fmt = map__50542__$1;
var format_str = cljs.core.get.call(null,map__50542__$1,new cljs.core.Keyword(null,"format-str","format-str",695206156));
var formatters = cljs.core.get.call(null,map__50542__$1,new cljs.core.Keyword(null,"formatters","formatters",-1875637118));
if(!((dt == null))){
} else {
throw (new Error("Assert failed: (not (nil? dt))"));
}

if((dt instanceof goog.date.DateTime)){
} else {
throw (new Error("Assert failed: (instance? goog.date.DateTime dt)"));
}

return cljs_time.format.unparse.call(null,cljs.core.assoc.call(null,fmt,new cljs.core.Keyword(null,"overrides","overrides",1738628867),cljs_time.format.skip_timezone_formatter.call(null)),dt);
});
/**
 * Returns a string representing the given local Date instance in the form
 *   determined by the given formatter.
 */
cljs_time.format.unparse_local_date = (function cljs_time$format$unparse_local_date(p__50544,dt){
var map__50547 = p__50544;
var map__50547__$1 = ((((!((map__50547 == null)))?((((map__50547.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50547.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50547):map__50547);
var fmt = map__50547__$1;
var format_str = cljs.core.get.call(null,map__50547__$1,new cljs.core.Keyword(null,"format-str","format-str",695206156));
var formatters = cljs.core.get.call(null,map__50547__$1,new cljs.core.Keyword(null,"formatters","formatters",-1875637118));
if(!((dt == null))){
} else {
throw (new Error("Assert failed: (not (nil? dt))"));
}

if((dt instanceof goog.date.Date)){
} else {
throw (new Error("Assert failed: (instance? goog.date.Date dt)"));
}

return cljs_time.format.unparse.call(null,cljs.core.assoc.call(null,fmt,new cljs.core.Keyword(null,"overrides","overrides",1738628867),cljs_time.format.skip_timezone_formatter.call(null)),dt);
});
/**
 * Shows how a given DateTime, or by default the current time, would be
 * formatted with each of the available printing formatters.
 */
cljs_time.format.show_formatters = (function cljs_time$format$show_formatters(var_args){
var args50549 = [];
var len__37877__auto___50556 = arguments.length;
var i__37878__auto___50557 = (0);
while(true){
if((i__37878__auto___50557 < len__37877__auto___50556)){
args50549.push((arguments[i__37878__auto___50557]));

var G__50558 = (i__37878__auto___50557 + (1));
i__37878__auto___50557 = G__50558;
continue;
} else {
}
break;
}

var G__50551 = args50549.length;
switch (G__50551) {
case 0:
return cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50549.length)].join('')));

}
});

cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.format.show_formatters.call(null,cljs_time.core.now.call(null));
});

cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$1 = (function (dt){
var seq__50552 = cljs.core.seq.call(null,cljs.core.sort.call(null,cljs_time.format.printers));
var chunk__50553 = null;
var count__50554 = (0);
var i__50555 = (0);
while(true){
if((i__50555 < count__50554)){
var p = cljs.core._nth.call(null,chunk__50553,i__50555);
var fmt_50560 = cljs_time.format.formatters.call(null,p);
cljs.core.print.call(null,cljs_time.internal.core.format.call(null,"%-40s%s\n",p,cljs_time.format.unparse.call(null,fmt_50560,dt)));

var G__50561 = seq__50552;
var G__50562 = chunk__50553;
var G__50563 = count__50554;
var G__50564 = (i__50555 + (1));
seq__50552 = G__50561;
chunk__50553 = G__50562;
count__50554 = G__50563;
i__50555 = G__50564;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50552);
if(temp__4657__auto__){
var seq__50552__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50552__$1)){
var c__37613__auto__ = cljs.core.chunk_first.call(null,seq__50552__$1);
var G__50565 = cljs.core.chunk_rest.call(null,seq__50552__$1);
var G__50566 = c__37613__auto__;
var G__50567 = cljs.core.count.call(null,c__37613__auto__);
var G__50568 = (0);
seq__50552 = G__50565;
chunk__50553 = G__50566;
count__50554 = G__50567;
i__50555 = G__50568;
continue;
} else {
var p = cljs.core.first.call(null,seq__50552__$1);
var fmt_50569 = cljs_time.format.formatters.call(null,p);
cljs.core.print.call(null,cljs_time.internal.core.format.call(null,"%-40s%s\n",p,cljs_time.format.unparse.call(null,fmt_50569,dt)));

var G__50570 = cljs.core.next.call(null,seq__50552__$1);
var G__50571 = null;
var G__50572 = (0);
var G__50573 = (0);
seq__50552 = G__50570;
chunk__50553 = G__50571;
count__50554 = G__50572;
i__50555 = G__50573;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs_time.format.show_formatters.cljs$lang$maxFixedArity = 1;


/**
 * @interface
 */
cljs_time.format.Mappable = function(){};

/**
 * Returns a map representation of the given instant.
 *                        It will contain the following keys: :years, :months,
 *                        :days, :hours, :minutes and :seconds.
 */
cljs_time.format.instant__GT_map = (function cljs_time$format$instant__GT_map(instant){
if((!((instant == null))) && (!((instant.cljs_time$format$Mappable$instant__GT_map$arity$1 == null)))){
return instant.cljs_time$format$Mappable$instant__GT_map$arity$1(instant);
} else {
var x__37465__auto__ = (((instant == null))?null:instant);
var m__37466__auto__ = (cljs_time.format.instant__GT_map[goog.typeOf(x__37465__auto__)]);
if(!((m__37466__auto__ == null))){
return m__37466__auto__.call(null,instant);
} else {
var m__37466__auto____$1 = (cljs_time.format.instant__GT_map["_"]);
if(!((m__37466__auto____$1 == null))){
return m__37466__auto____$1.call(null,instant);
} else {
throw cljs.core.missing_protocol.call(null,"Mappable.instant->map",instant);
}
}
}
});

/**
 * Accepts a Period or Interval and outputs an absolute duration time
 *   in form of "1 day", "2 hours", "20 minutes", "2 days 1 hour
 *   15 minutes" etc.
 */
cljs_time.format.unparse_duration = (function cljs_time$format$unparse_duration(duration){
return goog.date.duration.format(cljs_time.core.in_millis.call(null,duration));
});
cljs_time.format.to_map = (function cljs_time$format$to_map(years,months,days,hours,minutes,seconds,millis){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"years","years",-1298579689),years,new cljs.core.Keyword(null,"months","months",-45571637),months,new cljs.core.Keyword(null,"days","days",-1394072564),days,new cljs.core.Keyword(null,"hours","hours",58380855),hours,new cljs.core.Keyword(null,"minutes","minutes",1319166394),minutes,new cljs.core.Keyword(null,"seconds","seconds",-445266194),seconds,new cljs.core.Keyword(null,"millis","millis",-1338288387),millis], null);
});
goog.date.UtcDateTime.prototype.cljs_time$format$Mappable$ = true;

goog.date.UtcDateTime.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (dt){
var dt__$1 = this;
return cljs_time.format.to_map.call(null,dt__$1.getYear(),(dt__$1.getMonth() + (1)),dt__$1.getDate(),dt__$1.getHours(),dt__$1.getMinutes(),dt__$1.getSeconds(),dt__$1.getMilliseconds());
});

cljs_time.core.Period.prototype.cljs_time$format$Mappable$ = true;

cljs_time.core.Period.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
return cljs_time.core.__GT_period.call(null,m__$1);
});

cljs_time.core.Interval.prototype.cljs_time$format$Mappable$ = true;

cljs_time.core.Interval.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
return cljs_time.core.__GT_period.call(null,m__$1);
});

cljs.core.PersistentArrayMap.prototype.cljs_time$format$Mappable$ = true;

cljs.core.PersistentArrayMap.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
var G__50574 = (((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,m__$1)) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,m__$1)).fqn:null);
switch (G__50574) {
case "cljs-time.core/period":
return m__$1;

break;
case "cljs-time.core/interval":
return cljs_time.core.__GT_period.call(null,m__$1);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,m__$1)))].join('')));

}
});

//# sourceMappingURL=format.js.map