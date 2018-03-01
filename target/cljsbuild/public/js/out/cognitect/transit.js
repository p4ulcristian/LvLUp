// Compiled by ClojureScript 1.9.229 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__37944_37948 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__37945_37949 = null;
var count__37946_37950 = (0);
var i__37947_37951 = (0);
while(true){
if((i__37947_37951 < count__37946_37950)){
var k_37952 = cljs.core._nth.call(null,chunk__37945_37949,i__37947_37951);
var v_37953 = (b[k_37952]);
(a[k_37952] = v_37953);

var G__37954 = seq__37944_37948;
var G__37955 = chunk__37945_37949;
var G__37956 = count__37946_37950;
var G__37957 = (i__37947_37951 + (1));
seq__37944_37948 = G__37954;
chunk__37945_37949 = G__37955;
count__37946_37950 = G__37956;
i__37947_37951 = G__37957;
continue;
} else {
var temp__4657__auto___37958 = cljs.core.seq.call(null,seq__37944_37948);
if(temp__4657__auto___37958){
var seq__37944_37959__$1 = temp__4657__auto___37958;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37944_37959__$1)){
var c__37569__auto___37960 = cljs.core.chunk_first.call(null,seq__37944_37959__$1);
var G__37961 = cljs.core.chunk_rest.call(null,seq__37944_37959__$1);
var G__37962 = c__37569__auto___37960;
var G__37963 = cljs.core.count.call(null,c__37569__auto___37960);
var G__37964 = (0);
seq__37944_37948 = G__37961;
chunk__37945_37949 = G__37962;
count__37946_37950 = G__37963;
i__37947_37951 = G__37964;
continue;
} else {
var k_37965 = cljs.core.first.call(null,seq__37944_37959__$1);
var v_37966 = (b[k_37965]);
(a[k_37965] = v_37966);

var G__37967 = cljs.core.next.call(null,seq__37944_37959__$1);
var G__37968 = null;
var G__37969 = (0);
var G__37970 = (0);
seq__37944_37948 = G__37967;
chunk__37945_37949 = G__37968;
count__37946_37950 = G__37969;
i__37947_37951 = G__37970;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__37364__auto__,writer__37365__auto__,opt__37366__auto__){
return cljs.core._write.call(null,writer__37365__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__37364__auto__,writer__37365__auto__,opt__37366__auto__){
return cljs.core._write.call(null,writer__37365__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args37971 = [];
var len__37833__auto___37974 = arguments.length;
var i__37834__auto___37975 = (0);
while(true){
if((i__37834__auto___37975 < len__37833__auto___37974)){
args37971.push((arguments[i__37834__auto___37975]));

var G__37976 = (i__37834__auto___37975 + (1));
i__37834__auto___37975 = G__37976;
continue;
} else {
}
break;
}

var G__37973 = args37971.length;
switch (G__37973) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37971.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__37978 = (i + (2));
var G__37979 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__37978;
ret = G__37979;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__37364__auto__,writer__37365__auto__,opt__37366__auto__){
return cljs.core._write.call(null,writer__37365__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__37364__auto__,writer__37365__auto__,opt__37366__auto__){
return cljs.core._write.call(null,writer__37365__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__37980_37984 = cljs.core.seq.call(null,v);
var chunk__37981_37985 = null;
var count__37982_37986 = (0);
var i__37983_37987 = (0);
while(true){
if((i__37983_37987 < count__37982_37986)){
var x_37988 = cljs.core._nth.call(null,chunk__37981_37985,i__37983_37987);
ret.push(x_37988);

var G__37989 = seq__37980_37984;
var G__37990 = chunk__37981_37985;
var G__37991 = count__37982_37986;
var G__37992 = (i__37983_37987 + (1));
seq__37980_37984 = G__37989;
chunk__37981_37985 = G__37990;
count__37982_37986 = G__37991;
i__37983_37987 = G__37992;
continue;
} else {
var temp__4657__auto___37993 = cljs.core.seq.call(null,seq__37980_37984);
if(temp__4657__auto___37993){
var seq__37980_37994__$1 = temp__4657__auto___37993;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37980_37994__$1)){
var c__37569__auto___37995 = cljs.core.chunk_first.call(null,seq__37980_37994__$1);
var G__37996 = cljs.core.chunk_rest.call(null,seq__37980_37994__$1);
var G__37997 = c__37569__auto___37995;
var G__37998 = cljs.core.count.call(null,c__37569__auto___37995);
var G__37999 = (0);
seq__37980_37984 = G__37996;
chunk__37981_37985 = G__37997;
count__37982_37986 = G__37998;
i__37983_37987 = G__37999;
continue;
} else {
var x_38000 = cljs.core.first.call(null,seq__37980_37994__$1);
ret.push(x_38000);

var G__38001 = cljs.core.next.call(null,seq__37980_37994__$1);
var G__38002 = null;
var G__38003 = (0);
var G__38004 = (0);
seq__37980_37984 = G__38001;
chunk__37981_37985 = G__38002;
count__37982_37986 = G__38003;
i__37983_37987 = G__38004;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__37364__auto__,writer__37365__auto__,opt__37366__auto__){
return cljs.core._write.call(null,writer__37365__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__37364__auto__,writer__37365__auto__,opt__37366__auto__){
return cljs.core._write.call(null,writer__37365__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__38005_38009 = cljs.core.seq.call(null,v);
var chunk__38006_38010 = null;
var count__38007_38011 = (0);
var i__38008_38012 = (0);
while(true){
if((i__38008_38012 < count__38007_38011)){
var x_38013 = cljs.core._nth.call(null,chunk__38006_38010,i__38008_38012);
ret.push(x_38013);

var G__38014 = seq__38005_38009;
var G__38015 = chunk__38006_38010;
var G__38016 = count__38007_38011;
var G__38017 = (i__38008_38012 + (1));
seq__38005_38009 = G__38014;
chunk__38006_38010 = G__38015;
count__38007_38011 = G__38016;
i__38008_38012 = G__38017;
continue;
} else {
var temp__4657__auto___38018 = cljs.core.seq.call(null,seq__38005_38009);
if(temp__4657__auto___38018){
var seq__38005_38019__$1 = temp__4657__auto___38018;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38005_38019__$1)){
var c__37569__auto___38020 = cljs.core.chunk_first.call(null,seq__38005_38019__$1);
var G__38021 = cljs.core.chunk_rest.call(null,seq__38005_38019__$1);
var G__38022 = c__37569__auto___38020;
var G__38023 = cljs.core.count.call(null,c__37569__auto___38020);
var G__38024 = (0);
seq__38005_38009 = G__38021;
chunk__38006_38010 = G__38022;
count__38007_38011 = G__38023;
i__38008_38012 = G__38024;
continue;
} else {
var x_38025 = cljs.core.first.call(null,seq__38005_38019__$1);
ret.push(x_38025);

var G__38026 = cljs.core.next.call(null,seq__38005_38019__$1);
var G__38027 = null;
var G__38028 = (0);
var G__38029 = (0);
seq__38005_38009 = G__38026;
chunk__38006_38010 = G__38027;
count__38007_38011 = G__38028;
i__38008_38012 = G__38029;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__37364__auto__,writer__37365__auto__,opt__37366__auto__){
return cljs.core._write.call(null,writer__37365__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__38030_38034 = cljs.core.seq.call(null,v);
var chunk__38031_38035 = null;
var count__38032_38036 = (0);
var i__38033_38037 = (0);
while(true){
if((i__38033_38037 < count__38032_38036)){
var x_38038 = cljs.core._nth.call(null,chunk__38031_38035,i__38033_38037);
ret.push(x_38038);

var G__38039 = seq__38030_38034;
var G__38040 = chunk__38031_38035;
var G__38041 = count__38032_38036;
var G__38042 = (i__38033_38037 + (1));
seq__38030_38034 = G__38039;
chunk__38031_38035 = G__38040;
count__38032_38036 = G__38041;
i__38033_38037 = G__38042;
continue;
} else {
var temp__4657__auto___38043 = cljs.core.seq.call(null,seq__38030_38034);
if(temp__4657__auto___38043){
var seq__38030_38044__$1 = temp__4657__auto___38043;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38030_38044__$1)){
var c__37569__auto___38045 = cljs.core.chunk_first.call(null,seq__38030_38044__$1);
var G__38046 = cljs.core.chunk_rest.call(null,seq__38030_38044__$1);
var G__38047 = c__37569__auto___38045;
var G__38048 = cljs.core.count.call(null,c__37569__auto___38045);
var G__38049 = (0);
seq__38030_38034 = G__38046;
chunk__38031_38035 = G__38047;
count__38032_38036 = G__38048;
i__38033_38037 = G__38049;
continue;
} else {
var x_38050 = cljs.core.first.call(null,seq__38030_38044__$1);
ret.push(x_38050);

var G__38051 = cljs.core.next.call(null,seq__38030_38044__$1);
var G__38052 = null;
var G__38053 = (0);
var G__38054 = (0);
seq__38030_38034 = G__38051;
chunk__38031_38035 = G__38052;
count__38032_38036 = G__38053;
i__38033_38037 = G__38054;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__37364__auto__,writer__37365__auto__,opt__37366__auto__){
return cljs.core._write.call(null,writer__37365__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__37364__auto__,writer__37365__auto__,opt__37366__auto__){
return cljs.core._write.call(null,writer__37365__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args38055 = [];
var len__37833__auto___38070 = arguments.length;
var i__37834__auto___38071 = (0);
while(true){
if((i__37834__auto___38071 < len__37833__auto___38070)){
args38055.push((arguments[i__37834__auto___38071]));

var G__38072 = (i__37834__auto___38071 + (1));
i__37834__auto___38071 = G__38072;
continue;
} else {
}
break;
}

var G__38057 = args38055.length;
switch (G__38057) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38055.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__38058 = obj;
G__38058.push(kfn.call(null,k),vfn.call(null,v));

return G__38058;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x38059 = cljs.core.clone.call(null,handlers);
x38059.forEach = ((function (x38059,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__38060 = cljs.core.seq.call(null,coll);
var chunk__38061 = null;
var count__38062 = (0);
var i__38063 = (0);
while(true){
if((i__38063 < count__38062)){
var vec__38064 = cljs.core._nth.call(null,chunk__38061,i__38063);
var k = cljs.core.nth.call(null,vec__38064,(0),null);
var v = cljs.core.nth.call(null,vec__38064,(1),null);
f.call(null,v,k);

var G__38074 = seq__38060;
var G__38075 = chunk__38061;
var G__38076 = count__38062;
var G__38077 = (i__38063 + (1));
seq__38060 = G__38074;
chunk__38061 = G__38075;
count__38062 = G__38076;
i__38063 = G__38077;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38060);
if(temp__4657__auto__){
var seq__38060__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38060__$1)){
var c__37569__auto__ = cljs.core.chunk_first.call(null,seq__38060__$1);
var G__38078 = cljs.core.chunk_rest.call(null,seq__38060__$1);
var G__38079 = c__37569__auto__;
var G__38080 = cljs.core.count.call(null,c__37569__auto__);
var G__38081 = (0);
seq__38060 = G__38078;
chunk__38061 = G__38079;
count__38062 = G__38080;
i__38063 = G__38081;
continue;
} else {
var vec__38067 = cljs.core.first.call(null,seq__38060__$1);
var k = cljs.core.nth.call(null,vec__38067,(0),null);
var v = cljs.core.nth.call(null,vec__38067,(1),null);
f.call(null,v,k);

var G__38082 = cljs.core.next.call(null,seq__38060__$1);
var G__38083 = null;
var G__38084 = (0);
var G__38085 = (0);
seq__38060 = G__38082;
chunk__38061 = G__38083;
count__38062 = G__38084;
i__38063 = G__38085;
continue;
}
} else {
return null;
}
}
break;
}
});})(x38059,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x38059;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args38086 = [];
var len__37833__auto___38092 = arguments.length;
var i__37834__auto___38093 = (0);
while(true){
if((i__37834__auto___38093 < len__37833__auto___38092)){
args38086.push((arguments[i__37834__auto___38093]));

var G__38094 = (i__37834__auto___38093 + (1));
i__37834__auto___38093 = G__38094;
continue;
} else {
}
break;
}

var G__38088 = args38086.length;
switch (G__38088) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38086.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit38089 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit38089 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta38090){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta38090 = meta38090;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit38089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38091,meta38090__$1){
var self__ = this;
var _38091__$1 = this;
return (new cognitect.transit.t_cognitect$transit38089(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta38090__$1));
});

cognitect.transit.t_cognitect$transit38089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38091){
var self__ = this;
var _38091__$1 = this;
return self__.meta38090;
});

cognitect.transit.t_cognitect$transit38089.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit38089.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit38089.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit38089.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit38089.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta38090","meta38090",-1612900659,null)], null);
});

cognitect.transit.t_cognitect$transit38089.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit38089.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit38089";

cognitect.transit.t_cognitect$transit38089.cljs$lang$ctorPrWriter = (function (this__37364__auto__,writer__37365__auto__,opt__37366__auto__){
return cljs.core._write.call(null,writer__37365__auto__,"cognitect.transit/t_cognitect$transit38089");
});

cognitect.transit.__GT_t_cognitect$transit38089 = (function cognitect$transit$__GT_t_cognitect$transit38089(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta38090){
return (new cognitect.transit.t_cognitect$transit38089(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta38090));
});

}

return (new cognitect.transit.t_cognitect$transit38089(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__36758__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__36758__auto__)){
return or__36758__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map