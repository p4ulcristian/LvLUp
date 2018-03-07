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
var seq__48862_48866 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__48863_48867 = null;
var count__48864_48868 = (0);
var i__48865_48869 = (0);
while(true){
if((i__48865_48869 < count__48864_48868)){
var k_48870 = cljs.core._nth.call(null,chunk__48863_48867,i__48865_48869);
var v_48871 = (b[k_48870]);
(a[k_48870] = v_48871);

var G__48872 = seq__48862_48866;
var G__48873 = chunk__48863_48867;
var G__48874 = count__48864_48868;
var G__48875 = (i__48865_48869 + (1));
seq__48862_48866 = G__48872;
chunk__48863_48867 = G__48873;
count__48864_48868 = G__48874;
i__48865_48869 = G__48875;
continue;
} else {
var temp__4657__auto___48876 = cljs.core.seq.call(null,seq__48862_48866);
if(temp__4657__auto___48876){
var seq__48862_48877__$1 = temp__4657__auto___48876;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48862_48877__$1)){
var c__37615__auto___48878 = cljs.core.chunk_first.call(null,seq__48862_48877__$1);
var G__48879 = cljs.core.chunk_rest.call(null,seq__48862_48877__$1);
var G__48880 = c__37615__auto___48878;
var G__48881 = cljs.core.count.call(null,c__37615__auto___48878);
var G__48882 = (0);
seq__48862_48866 = G__48879;
chunk__48863_48867 = G__48880;
count__48864_48868 = G__48881;
i__48865_48869 = G__48882;
continue;
} else {
var k_48883 = cljs.core.first.call(null,seq__48862_48877__$1);
var v_48884 = (b[k_48883]);
(a[k_48883] = v_48884);

var G__48885 = cljs.core.next.call(null,seq__48862_48877__$1);
var G__48886 = null;
var G__48887 = (0);
var G__48888 = (0);
seq__48862_48866 = G__48885;
chunk__48863_48867 = G__48886;
count__48864_48868 = G__48887;
i__48865_48869 = G__48888;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__37410__auto__,writer__37411__auto__,opt__37412__auto__){
return cljs.core._write.call(null,writer__37411__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__37410__auto__,writer__37411__auto__,opt__37412__auto__){
return cljs.core._write.call(null,writer__37411__auto__,"cognitect.transit/VectorBuilder");
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
var args48889 = [];
var len__37879__auto___48892 = arguments.length;
var i__37880__auto___48893 = (0);
while(true){
if((i__37880__auto___48893 < len__37879__auto___48892)){
args48889.push((arguments[i__37880__auto___48893]));

var G__48894 = (i__37880__auto___48893 + (1));
i__37880__auto___48893 = G__48894;
continue;
} else {
}
break;
}

var G__48891 = args48889.length;
switch (G__48891) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48889.length)].join('')));

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
var G__48896 = (i + (2));
var G__48897 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__48896;
ret = G__48897;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__37410__auto__,writer__37411__auto__,opt__37412__auto__){
return cljs.core._write.call(null,writer__37411__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__37410__auto__,writer__37411__auto__,opt__37412__auto__){
return cljs.core._write.call(null,writer__37411__auto__,"cognitect.transit/SymbolHandler");
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
var seq__48898_48902 = cljs.core.seq.call(null,v);
var chunk__48899_48903 = null;
var count__48900_48904 = (0);
var i__48901_48905 = (0);
while(true){
if((i__48901_48905 < count__48900_48904)){
var x_48906 = cljs.core._nth.call(null,chunk__48899_48903,i__48901_48905);
ret.push(x_48906);

var G__48907 = seq__48898_48902;
var G__48908 = chunk__48899_48903;
var G__48909 = count__48900_48904;
var G__48910 = (i__48901_48905 + (1));
seq__48898_48902 = G__48907;
chunk__48899_48903 = G__48908;
count__48900_48904 = G__48909;
i__48901_48905 = G__48910;
continue;
} else {
var temp__4657__auto___48911 = cljs.core.seq.call(null,seq__48898_48902);
if(temp__4657__auto___48911){
var seq__48898_48912__$1 = temp__4657__auto___48911;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48898_48912__$1)){
var c__37615__auto___48913 = cljs.core.chunk_first.call(null,seq__48898_48912__$1);
var G__48914 = cljs.core.chunk_rest.call(null,seq__48898_48912__$1);
var G__48915 = c__37615__auto___48913;
var G__48916 = cljs.core.count.call(null,c__37615__auto___48913);
var G__48917 = (0);
seq__48898_48902 = G__48914;
chunk__48899_48903 = G__48915;
count__48900_48904 = G__48916;
i__48901_48905 = G__48917;
continue;
} else {
var x_48918 = cljs.core.first.call(null,seq__48898_48912__$1);
ret.push(x_48918);

var G__48919 = cljs.core.next.call(null,seq__48898_48912__$1);
var G__48920 = null;
var G__48921 = (0);
var G__48922 = (0);
seq__48898_48902 = G__48919;
chunk__48899_48903 = G__48920;
count__48900_48904 = G__48921;
i__48901_48905 = G__48922;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__37410__auto__,writer__37411__auto__,opt__37412__auto__){
return cljs.core._write.call(null,writer__37411__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__37410__auto__,writer__37411__auto__,opt__37412__auto__){
return cljs.core._write.call(null,writer__37411__auto__,"cognitect.transit/MapHandler");
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
var seq__48923_48927 = cljs.core.seq.call(null,v);
var chunk__48924_48928 = null;
var count__48925_48929 = (0);
var i__48926_48930 = (0);
while(true){
if((i__48926_48930 < count__48925_48929)){
var x_48931 = cljs.core._nth.call(null,chunk__48924_48928,i__48926_48930);
ret.push(x_48931);

var G__48932 = seq__48923_48927;
var G__48933 = chunk__48924_48928;
var G__48934 = count__48925_48929;
var G__48935 = (i__48926_48930 + (1));
seq__48923_48927 = G__48932;
chunk__48924_48928 = G__48933;
count__48925_48929 = G__48934;
i__48926_48930 = G__48935;
continue;
} else {
var temp__4657__auto___48936 = cljs.core.seq.call(null,seq__48923_48927);
if(temp__4657__auto___48936){
var seq__48923_48937__$1 = temp__4657__auto___48936;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48923_48937__$1)){
var c__37615__auto___48938 = cljs.core.chunk_first.call(null,seq__48923_48937__$1);
var G__48939 = cljs.core.chunk_rest.call(null,seq__48923_48937__$1);
var G__48940 = c__37615__auto___48938;
var G__48941 = cljs.core.count.call(null,c__37615__auto___48938);
var G__48942 = (0);
seq__48923_48927 = G__48939;
chunk__48924_48928 = G__48940;
count__48925_48929 = G__48941;
i__48926_48930 = G__48942;
continue;
} else {
var x_48943 = cljs.core.first.call(null,seq__48923_48937__$1);
ret.push(x_48943);

var G__48944 = cljs.core.next.call(null,seq__48923_48937__$1);
var G__48945 = null;
var G__48946 = (0);
var G__48947 = (0);
seq__48923_48927 = G__48944;
chunk__48924_48928 = G__48945;
count__48925_48929 = G__48946;
i__48926_48930 = G__48947;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__37410__auto__,writer__37411__auto__,opt__37412__auto__){
return cljs.core._write.call(null,writer__37411__auto__,"cognitect.transit/SetHandler");
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
var seq__48948_48952 = cljs.core.seq.call(null,v);
var chunk__48949_48953 = null;
var count__48950_48954 = (0);
var i__48951_48955 = (0);
while(true){
if((i__48951_48955 < count__48950_48954)){
var x_48956 = cljs.core._nth.call(null,chunk__48949_48953,i__48951_48955);
ret.push(x_48956);

var G__48957 = seq__48948_48952;
var G__48958 = chunk__48949_48953;
var G__48959 = count__48950_48954;
var G__48960 = (i__48951_48955 + (1));
seq__48948_48952 = G__48957;
chunk__48949_48953 = G__48958;
count__48950_48954 = G__48959;
i__48951_48955 = G__48960;
continue;
} else {
var temp__4657__auto___48961 = cljs.core.seq.call(null,seq__48948_48952);
if(temp__4657__auto___48961){
var seq__48948_48962__$1 = temp__4657__auto___48961;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48948_48962__$1)){
var c__37615__auto___48963 = cljs.core.chunk_first.call(null,seq__48948_48962__$1);
var G__48964 = cljs.core.chunk_rest.call(null,seq__48948_48962__$1);
var G__48965 = c__37615__auto___48963;
var G__48966 = cljs.core.count.call(null,c__37615__auto___48963);
var G__48967 = (0);
seq__48948_48952 = G__48964;
chunk__48949_48953 = G__48965;
count__48950_48954 = G__48966;
i__48951_48955 = G__48967;
continue;
} else {
var x_48968 = cljs.core.first.call(null,seq__48948_48962__$1);
ret.push(x_48968);

var G__48969 = cljs.core.next.call(null,seq__48948_48962__$1);
var G__48970 = null;
var G__48971 = (0);
var G__48972 = (0);
seq__48948_48952 = G__48969;
chunk__48949_48953 = G__48970;
count__48950_48954 = G__48971;
i__48951_48955 = G__48972;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__37410__auto__,writer__37411__auto__,opt__37412__auto__){
return cljs.core._write.call(null,writer__37411__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__37410__auto__,writer__37411__auto__,opt__37412__auto__){
return cljs.core._write.call(null,writer__37411__auto__,"cognitect.transit/UUIDHandler");
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
var args48973 = [];
var len__37879__auto___48988 = arguments.length;
var i__37880__auto___48989 = (0);
while(true){
if((i__37880__auto___48989 < len__37879__auto___48988)){
args48973.push((arguments[i__37880__auto___48989]));

var G__48990 = (i__37880__auto___48989 + (1));
i__37880__auto___48989 = G__48990;
continue;
} else {
}
break;
}

var G__48975 = args48973.length;
switch (G__48975) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48973.length)].join('')));

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
var G__48976 = obj;
G__48976.push(kfn.call(null,k),vfn.call(null,v));

return G__48976;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x48977 = cljs.core.clone.call(null,handlers);
x48977.forEach = ((function (x48977,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__48978 = cljs.core.seq.call(null,coll);
var chunk__48979 = null;
var count__48980 = (0);
var i__48981 = (0);
while(true){
if((i__48981 < count__48980)){
var vec__48982 = cljs.core._nth.call(null,chunk__48979,i__48981);
var k = cljs.core.nth.call(null,vec__48982,(0),null);
var v = cljs.core.nth.call(null,vec__48982,(1),null);
f.call(null,v,k);

var G__48992 = seq__48978;
var G__48993 = chunk__48979;
var G__48994 = count__48980;
var G__48995 = (i__48981 + (1));
seq__48978 = G__48992;
chunk__48979 = G__48993;
count__48980 = G__48994;
i__48981 = G__48995;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__48978);
if(temp__4657__auto__){
var seq__48978__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48978__$1)){
var c__37615__auto__ = cljs.core.chunk_first.call(null,seq__48978__$1);
var G__48996 = cljs.core.chunk_rest.call(null,seq__48978__$1);
var G__48997 = c__37615__auto__;
var G__48998 = cljs.core.count.call(null,c__37615__auto__);
var G__48999 = (0);
seq__48978 = G__48996;
chunk__48979 = G__48997;
count__48980 = G__48998;
i__48981 = G__48999;
continue;
} else {
var vec__48985 = cljs.core.first.call(null,seq__48978__$1);
var k = cljs.core.nth.call(null,vec__48985,(0),null);
var v = cljs.core.nth.call(null,vec__48985,(1),null);
f.call(null,v,k);

var G__49000 = cljs.core.next.call(null,seq__48978__$1);
var G__49001 = null;
var G__49002 = (0);
var G__49003 = (0);
seq__48978 = G__49000;
chunk__48979 = G__49001;
count__48980 = G__49002;
i__48981 = G__49003;
continue;
}
} else {
return null;
}
}
break;
}
});})(x48977,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x48977;
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
var args49004 = [];
var len__37879__auto___49010 = arguments.length;
var i__37880__auto___49011 = (0);
while(true){
if((i__37880__auto___49011 < len__37879__auto___49010)){
args49004.push((arguments[i__37880__auto___49011]));

var G__49012 = (i__37880__auto___49011 + (1));
i__37880__auto___49011 = G__49012;
continue;
} else {
}
break;
}

var G__49006 = args49004.length;
switch (G__49006) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49004.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit49007 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit49007 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta49008){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta49008 = meta49008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit49007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49009,meta49008__$1){
var self__ = this;
var _49009__$1 = this;
return (new cognitect.transit.t_cognitect$transit49007(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta49008__$1));
});

cognitect.transit.t_cognitect$transit49007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49009){
var self__ = this;
var _49009__$1 = this;
return self__.meta49008;
});

cognitect.transit.t_cognitect$transit49007.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit49007.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit49007.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit49007.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit49007.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta49008","meta49008",45564514,null)], null);
});

cognitect.transit.t_cognitect$transit49007.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit49007.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit49007";

cognitect.transit.t_cognitect$transit49007.cljs$lang$ctorPrWriter = (function (this__37410__auto__,writer__37411__auto__,opt__37412__auto__){
return cljs.core._write.call(null,writer__37411__auto__,"cognitect.transit/t_cognitect$transit49007");
});

cognitect.transit.__GT_t_cognitect$transit49007 = (function cognitect$transit$__GT_t_cognitect$transit49007(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta49008){
return (new cognitect.transit.t_cognitect$transit49007(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta49008));
});

}

return (new cognitect.transit.t_cognitect$transit49007(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__36804__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__36804__auto__)){
return or__36804__auto__;
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