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
var seq__44068_44072 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__44069_44073 = null;
var count__44070_44074 = (0);
var i__44071_44075 = (0);
while(true){
if((i__44071_44075 < count__44070_44074)){
var k_44076 = cljs.core._nth.call(null,chunk__44069_44073,i__44071_44075);
var v_44077 = (b[k_44076]);
(a[k_44076] = v_44077);

var G__44078 = seq__44068_44072;
var G__44079 = chunk__44069_44073;
var G__44080 = count__44070_44074;
var G__44081 = (i__44071_44075 + (1));
seq__44068_44072 = G__44078;
chunk__44069_44073 = G__44079;
count__44070_44074 = G__44080;
i__44071_44075 = G__44081;
continue;
} else {
var temp__4657__auto___44082 = cljs.core.seq.call(null,seq__44068_44072);
if(temp__4657__auto___44082){
var seq__44068_44083__$1 = temp__4657__auto___44082;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44068_44083__$1)){
var c__37613__auto___44084 = cljs.core.chunk_first.call(null,seq__44068_44083__$1);
var G__44085 = cljs.core.chunk_rest.call(null,seq__44068_44083__$1);
var G__44086 = c__37613__auto___44084;
var G__44087 = cljs.core.count.call(null,c__37613__auto___44084);
var G__44088 = (0);
seq__44068_44072 = G__44085;
chunk__44069_44073 = G__44086;
count__44070_44074 = G__44087;
i__44071_44075 = G__44088;
continue;
} else {
var k_44089 = cljs.core.first.call(null,seq__44068_44083__$1);
var v_44090 = (b[k_44089]);
(a[k_44089] = v_44090);

var G__44091 = cljs.core.next.call(null,seq__44068_44083__$1);
var G__44092 = null;
var G__44093 = (0);
var G__44094 = (0);
seq__44068_44072 = G__44091;
chunk__44069_44073 = G__44092;
count__44070_44074 = G__44093;
i__44071_44075 = G__44094;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"cognitect.transit/VectorBuilder");
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
var args44095 = [];
var len__37877__auto___44098 = arguments.length;
var i__37878__auto___44099 = (0);
while(true){
if((i__37878__auto___44099 < len__37877__auto___44098)){
args44095.push((arguments[i__37878__auto___44099]));

var G__44100 = (i__37878__auto___44099 + (1));
i__37878__auto___44099 = G__44100;
continue;
} else {
}
break;
}

var G__44097 = args44095.length;
switch (G__44097) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44095.length)].join('')));

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
var G__44102 = (i + (2));
var G__44103 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__44102;
ret = G__44103;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"cognitect.transit/SymbolHandler");
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
var seq__44104_44108 = cljs.core.seq.call(null,v);
var chunk__44105_44109 = null;
var count__44106_44110 = (0);
var i__44107_44111 = (0);
while(true){
if((i__44107_44111 < count__44106_44110)){
var x_44112 = cljs.core._nth.call(null,chunk__44105_44109,i__44107_44111);
ret.push(x_44112);

var G__44113 = seq__44104_44108;
var G__44114 = chunk__44105_44109;
var G__44115 = count__44106_44110;
var G__44116 = (i__44107_44111 + (1));
seq__44104_44108 = G__44113;
chunk__44105_44109 = G__44114;
count__44106_44110 = G__44115;
i__44107_44111 = G__44116;
continue;
} else {
var temp__4657__auto___44117 = cljs.core.seq.call(null,seq__44104_44108);
if(temp__4657__auto___44117){
var seq__44104_44118__$1 = temp__4657__auto___44117;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44104_44118__$1)){
var c__37613__auto___44119 = cljs.core.chunk_first.call(null,seq__44104_44118__$1);
var G__44120 = cljs.core.chunk_rest.call(null,seq__44104_44118__$1);
var G__44121 = c__37613__auto___44119;
var G__44122 = cljs.core.count.call(null,c__37613__auto___44119);
var G__44123 = (0);
seq__44104_44108 = G__44120;
chunk__44105_44109 = G__44121;
count__44106_44110 = G__44122;
i__44107_44111 = G__44123;
continue;
} else {
var x_44124 = cljs.core.first.call(null,seq__44104_44118__$1);
ret.push(x_44124);

var G__44125 = cljs.core.next.call(null,seq__44104_44118__$1);
var G__44126 = null;
var G__44127 = (0);
var G__44128 = (0);
seq__44104_44108 = G__44125;
chunk__44105_44109 = G__44126;
count__44106_44110 = G__44127;
i__44107_44111 = G__44128;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"cognitect.transit/MapHandler");
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
var seq__44129_44133 = cljs.core.seq.call(null,v);
var chunk__44130_44134 = null;
var count__44131_44135 = (0);
var i__44132_44136 = (0);
while(true){
if((i__44132_44136 < count__44131_44135)){
var x_44137 = cljs.core._nth.call(null,chunk__44130_44134,i__44132_44136);
ret.push(x_44137);

var G__44138 = seq__44129_44133;
var G__44139 = chunk__44130_44134;
var G__44140 = count__44131_44135;
var G__44141 = (i__44132_44136 + (1));
seq__44129_44133 = G__44138;
chunk__44130_44134 = G__44139;
count__44131_44135 = G__44140;
i__44132_44136 = G__44141;
continue;
} else {
var temp__4657__auto___44142 = cljs.core.seq.call(null,seq__44129_44133);
if(temp__4657__auto___44142){
var seq__44129_44143__$1 = temp__4657__auto___44142;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44129_44143__$1)){
var c__37613__auto___44144 = cljs.core.chunk_first.call(null,seq__44129_44143__$1);
var G__44145 = cljs.core.chunk_rest.call(null,seq__44129_44143__$1);
var G__44146 = c__37613__auto___44144;
var G__44147 = cljs.core.count.call(null,c__37613__auto___44144);
var G__44148 = (0);
seq__44129_44133 = G__44145;
chunk__44130_44134 = G__44146;
count__44131_44135 = G__44147;
i__44132_44136 = G__44148;
continue;
} else {
var x_44149 = cljs.core.first.call(null,seq__44129_44143__$1);
ret.push(x_44149);

var G__44150 = cljs.core.next.call(null,seq__44129_44143__$1);
var G__44151 = null;
var G__44152 = (0);
var G__44153 = (0);
seq__44129_44133 = G__44150;
chunk__44130_44134 = G__44151;
count__44131_44135 = G__44152;
i__44132_44136 = G__44153;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"cognitect.transit/SetHandler");
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
var seq__44154_44158 = cljs.core.seq.call(null,v);
var chunk__44155_44159 = null;
var count__44156_44160 = (0);
var i__44157_44161 = (0);
while(true){
if((i__44157_44161 < count__44156_44160)){
var x_44162 = cljs.core._nth.call(null,chunk__44155_44159,i__44157_44161);
ret.push(x_44162);

var G__44163 = seq__44154_44158;
var G__44164 = chunk__44155_44159;
var G__44165 = count__44156_44160;
var G__44166 = (i__44157_44161 + (1));
seq__44154_44158 = G__44163;
chunk__44155_44159 = G__44164;
count__44156_44160 = G__44165;
i__44157_44161 = G__44166;
continue;
} else {
var temp__4657__auto___44167 = cljs.core.seq.call(null,seq__44154_44158);
if(temp__4657__auto___44167){
var seq__44154_44168__$1 = temp__4657__auto___44167;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44154_44168__$1)){
var c__37613__auto___44169 = cljs.core.chunk_first.call(null,seq__44154_44168__$1);
var G__44170 = cljs.core.chunk_rest.call(null,seq__44154_44168__$1);
var G__44171 = c__37613__auto___44169;
var G__44172 = cljs.core.count.call(null,c__37613__auto___44169);
var G__44173 = (0);
seq__44154_44158 = G__44170;
chunk__44155_44159 = G__44171;
count__44156_44160 = G__44172;
i__44157_44161 = G__44173;
continue;
} else {
var x_44174 = cljs.core.first.call(null,seq__44154_44168__$1);
ret.push(x_44174);

var G__44175 = cljs.core.next.call(null,seq__44154_44168__$1);
var G__44176 = null;
var G__44177 = (0);
var G__44178 = (0);
seq__44154_44158 = G__44175;
chunk__44155_44159 = G__44176;
count__44156_44160 = G__44177;
i__44157_44161 = G__44178;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"cognitect.transit/UUIDHandler");
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
var args44179 = [];
var len__37877__auto___44194 = arguments.length;
var i__37878__auto___44195 = (0);
while(true){
if((i__37878__auto___44195 < len__37877__auto___44194)){
args44179.push((arguments[i__37878__auto___44195]));

var G__44196 = (i__37878__auto___44195 + (1));
i__37878__auto___44195 = G__44196;
continue;
} else {
}
break;
}

var G__44181 = args44179.length;
switch (G__44181) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44179.length)].join('')));

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
var G__44182 = obj;
G__44182.push(kfn.call(null,k),vfn.call(null,v));

return G__44182;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x44183 = cljs.core.clone.call(null,handlers);
x44183.forEach = ((function (x44183,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__44184 = cljs.core.seq.call(null,coll);
var chunk__44185 = null;
var count__44186 = (0);
var i__44187 = (0);
while(true){
if((i__44187 < count__44186)){
var vec__44188 = cljs.core._nth.call(null,chunk__44185,i__44187);
var k = cljs.core.nth.call(null,vec__44188,(0),null);
var v = cljs.core.nth.call(null,vec__44188,(1),null);
f.call(null,v,k);

var G__44198 = seq__44184;
var G__44199 = chunk__44185;
var G__44200 = count__44186;
var G__44201 = (i__44187 + (1));
seq__44184 = G__44198;
chunk__44185 = G__44199;
count__44186 = G__44200;
i__44187 = G__44201;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44184);
if(temp__4657__auto__){
var seq__44184__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44184__$1)){
var c__37613__auto__ = cljs.core.chunk_first.call(null,seq__44184__$1);
var G__44202 = cljs.core.chunk_rest.call(null,seq__44184__$1);
var G__44203 = c__37613__auto__;
var G__44204 = cljs.core.count.call(null,c__37613__auto__);
var G__44205 = (0);
seq__44184 = G__44202;
chunk__44185 = G__44203;
count__44186 = G__44204;
i__44187 = G__44205;
continue;
} else {
var vec__44191 = cljs.core.first.call(null,seq__44184__$1);
var k = cljs.core.nth.call(null,vec__44191,(0),null);
var v = cljs.core.nth.call(null,vec__44191,(1),null);
f.call(null,v,k);

var G__44206 = cljs.core.next.call(null,seq__44184__$1);
var G__44207 = null;
var G__44208 = (0);
var G__44209 = (0);
seq__44184 = G__44206;
chunk__44185 = G__44207;
count__44186 = G__44208;
i__44187 = G__44209;
continue;
}
} else {
return null;
}
}
break;
}
});})(x44183,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x44183;
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
var args44210 = [];
var len__37877__auto___44216 = arguments.length;
var i__37878__auto___44217 = (0);
while(true){
if((i__37878__auto___44217 < len__37877__auto___44216)){
args44210.push((arguments[i__37878__auto___44217]));

var G__44218 = (i__37878__auto___44217 + (1));
i__37878__auto___44217 = G__44218;
continue;
} else {
}
break;
}

var G__44212 = args44210.length;
switch (G__44212) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44210.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit44213 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit44213 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta44214){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta44214 = meta44214;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit44213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44215,meta44214__$1){
var self__ = this;
var _44215__$1 = this;
return (new cognitect.transit.t_cognitect$transit44213(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta44214__$1));
});

cognitect.transit.t_cognitect$transit44213.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44215){
var self__ = this;
var _44215__$1 = this;
return self__.meta44214;
});

cognitect.transit.t_cognitect$transit44213.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit44213.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit44213.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit44213.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit44213.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta44214","meta44214",-2123347516,null)], null);
});

cognitect.transit.t_cognitect$transit44213.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit44213.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit44213";

cognitect.transit.t_cognitect$transit44213.cljs$lang$ctorPrWriter = (function (this__37408__auto__,writer__37409__auto__,opt__37410__auto__){
return cljs.core._write.call(null,writer__37409__auto__,"cognitect.transit/t_cognitect$transit44213");
});

cognitect.transit.__GT_t_cognitect$transit44213 = (function cognitect$transit$__GT_t_cognitect$transit44213(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta44214){
return (new cognitect.transit.t_cognitect$transit44213(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta44214));
});

}

return (new cognitect.transit.t_cognitect$transit44213(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__36802__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__36802__auto__)){
return or__36802__auto__;
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