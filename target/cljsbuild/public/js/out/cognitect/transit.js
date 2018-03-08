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
var seq__48834_48838 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__48835_48839 = null;
var count__48836_48840 = (0);
var i__48837_48841 = (0);
while(true){
if((i__48837_48841 < count__48836_48840)){
var k_48842 = cljs.core._nth.call(null,chunk__48835_48839,i__48837_48841);
var v_48843 = (b[k_48842]);
(a[k_48842] = v_48843);

var G__48844 = seq__48834_48838;
var G__48845 = chunk__48835_48839;
var G__48846 = count__48836_48840;
var G__48847 = (i__48837_48841 + (1));
seq__48834_48838 = G__48844;
chunk__48835_48839 = G__48845;
count__48836_48840 = G__48846;
i__48837_48841 = G__48847;
continue;
} else {
var temp__4657__auto___48848 = cljs.core.seq.call(null,seq__48834_48838);
if(temp__4657__auto___48848){
var seq__48834_48849__$1 = temp__4657__auto___48848;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48834_48849__$1)){
var c__37587__auto___48850 = cljs.core.chunk_first.call(null,seq__48834_48849__$1);
var G__48851 = cljs.core.chunk_rest.call(null,seq__48834_48849__$1);
var G__48852 = c__37587__auto___48850;
var G__48853 = cljs.core.count.call(null,c__37587__auto___48850);
var G__48854 = (0);
seq__48834_48838 = G__48851;
chunk__48835_48839 = G__48852;
count__48836_48840 = G__48853;
i__48837_48841 = G__48854;
continue;
} else {
var k_48855 = cljs.core.first.call(null,seq__48834_48849__$1);
var v_48856 = (b[k_48855]);
(a[k_48855] = v_48856);

var G__48857 = cljs.core.next.call(null,seq__48834_48849__$1);
var G__48858 = null;
var G__48859 = (0);
var G__48860 = (0);
seq__48834_48838 = G__48857;
chunk__48835_48839 = G__48858;
count__48836_48840 = G__48859;
i__48837_48841 = G__48860;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__37382__auto__,writer__37383__auto__,opt__37384__auto__){
return cljs.core._write.call(null,writer__37383__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__37382__auto__,writer__37383__auto__,opt__37384__auto__){
return cljs.core._write.call(null,writer__37383__auto__,"cognitect.transit/VectorBuilder");
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
var args48861 = [];
var len__37851__auto___48864 = arguments.length;
var i__37852__auto___48865 = (0);
while(true){
if((i__37852__auto___48865 < len__37851__auto___48864)){
args48861.push((arguments[i__37852__auto___48865]));

var G__48866 = (i__37852__auto___48865 + (1));
i__37852__auto___48865 = G__48866;
continue;
} else {
}
break;
}

var G__48863 = args48861.length;
switch (G__48863) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48861.length)].join('')));

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
var G__48868 = (i + (2));
var G__48869 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__48868;
ret = G__48869;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__37382__auto__,writer__37383__auto__,opt__37384__auto__){
return cljs.core._write.call(null,writer__37383__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__37382__auto__,writer__37383__auto__,opt__37384__auto__){
return cljs.core._write.call(null,writer__37383__auto__,"cognitect.transit/SymbolHandler");
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
var seq__48870_48874 = cljs.core.seq.call(null,v);
var chunk__48871_48875 = null;
var count__48872_48876 = (0);
var i__48873_48877 = (0);
while(true){
if((i__48873_48877 < count__48872_48876)){
var x_48878 = cljs.core._nth.call(null,chunk__48871_48875,i__48873_48877);
ret.push(x_48878);

var G__48879 = seq__48870_48874;
var G__48880 = chunk__48871_48875;
var G__48881 = count__48872_48876;
var G__48882 = (i__48873_48877 + (1));
seq__48870_48874 = G__48879;
chunk__48871_48875 = G__48880;
count__48872_48876 = G__48881;
i__48873_48877 = G__48882;
continue;
} else {
var temp__4657__auto___48883 = cljs.core.seq.call(null,seq__48870_48874);
if(temp__4657__auto___48883){
var seq__48870_48884__$1 = temp__4657__auto___48883;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48870_48884__$1)){
var c__37587__auto___48885 = cljs.core.chunk_first.call(null,seq__48870_48884__$1);
var G__48886 = cljs.core.chunk_rest.call(null,seq__48870_48884__$1);
var G__48887 = c__37587__auto___48885;
var G__48888 = cljs.core.count.call(null,c__37587__auto___48885);
var G__48889 = (0);
seq__48870_48874 = G__48886;
chunk__48871_48875 = G__48887;
count__48872_48876 = G__48888;
i__48873_48877 = G__48889;
continue;
} else {
var x_48890 = cljs.core.first.call(null,seq__48870_48884__$1);
ret.push(x_48890);

var G__48891 = cljs.core.next.call(null,seq__48870_48884__$1);
var G__48892 = null;
var G__48893 = (0);
var G__48894 = (0);
seq__48870_48874 = G__48891;
chunk__48871_48875 = G__48892;
count__48872_48876 = G__48893;
i__48873_48877 = G__48894;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__37382__auto__,writer__37383__auto__,opt__37384__auto__){
return cljs.core._write.call(null,writer__37383__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__37382__auto__,writer__37383__auto__,opt__37384__auto__){
return cljs.core._write.call(null,writer__37383__auto__,"cognitect.transit/MapHandler");
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
var seq__48895_48899 = cljs.core.seq.call(null,v);
var chunk__48896_48900 = null;
var count__48897_48901 = (0);
var i__48898_48902 = (0);
while(true){
if((i__48898_48902 < count__48897_48901)){
var x_48903 = cljs.core._nth.call(null,chunk__48896_48900,i__48898_48902);
ret.push(x_48903);

var G__48904 = seq__48895_48899;
var G__48905 = chunk__48896_48900;
var G__48906 = count__48897_48901;
var G__48907 = (i__48898_48902 + (1));
seq__48895_48899 = G__48904;
chunk__48896_48900 = G__48905;
count__48897_48901 = G__48906;
i__48898_48902 = G__48907;
continue;
} else {
var temp__4657__auto___48908 = cljs.core.seq.call(null,seq__48895_48899);
if(temp__4657__auto___48908){
var seq__48895_48909__$1 = temp__4657__auto___48908;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48895_48909__$1)){
var c__37587__auto___48910 = cljs.core.chunk_first.call(null,seq__48895_48909__$1);
var G__48911 = cljs.core.chunk_rest.call(null,seq__48895_48909__$1);
var G__48912 = c__37587__auto___48910;
var G__48913 = cljs.core.count.call(null,c__37587__auto___48910);
var G__48914 = (0);
seq__48895_48899 = G__48911;
chunk__48896_48900 = G__48912;
count__48897_48901 = G__48913;
i__48898_48902 = G__48914;
continue;
} else {
var x_48915 = cljs.core.first.call(null,seq__48895_48909__$1);
ret.push(x_48915);

var G__48916 = cljs.core.next.call(null,seq__48895_48909__$1);
var G__48917 = null;
var G__48918 = (0);
var G__48919 = (0);
seq__48895_48899 = G__48916;
chunk__48896_48900 = G__48917;
count__48897_48901 = G__48918;
i__48898_48902 = G__48919;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__37382__auto__,writer__37383__auto__,opt__37384__auto__){
return cljs.core._write.call(null,writer__37383__auto__,"cognitect.transit/SetHandler");
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
var seq__48920_48924 = cljs.core.seq.call(null,v);
var chunk__48921_48925 = null;
var count__48922_48926 = (0);
var i__48923_48927 = (0);
while(true){
if((i__48923_48927 < count__48922_48926)){
var x_48928 = cljs.core._nth.call(null,chunk__48921_48925,i__48923_48927);
ret.push(x_48928);

var G__48929 = seq__48920_48924;
var G__48930 = chunk__48921_48925;
var G__48931 = count__48922_48926;
var G__48932 = (i__48923_48927 + (1));
seq__48920_48924 = G__48929;
chunk__48921_48925 = G__48930;
count__48922_48926 = G__48931;
i__48923_48927 = G__48932;
continue;
} else {
var temp__4657__auto___48933 = cljs.core.seq.call(null,seq__48920_48924);
if(temp__4657__auto___48933){
var seq__48920_48934__$1 = temp__4657__auto___48933;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48920_48934__$1)){
var c__37587__auto___48935 = cljs.core.chunk_first.call(null,seq__48920_48934__$1);
var G__48936 = cljs.core.chunk_rest.call(null,seq__48920_48934__$1);
var G__48937 = c__37587__auto___48935;
var G__48938 = cljs.core.count.call(null,c__37587__auto___48935);
var G__48939 = (0);
seq__48920_48924 = G__48936;
chunk__48921_48925 = G__48937;
count__48922_48926 = G__48938;
i__48923_48927 = G__48939;
continue;
} else {
var x_48940 = cljs.core.first.call(null,seq__48920_48934__$1);
ret.push(x_48940);

var G__48941 = cljs.core.next.call(null,seq__48920_48934__$1);
var G__48942 = null;
var G__48943 = (0);
var G__48944 = (0);
seq__48920_48924 = G__48941;
chunk__48921_48925 = G__48942;
count__48922_48926 = G__48943;
i__48923_48927 = G__48944;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__37382__auto__,writer__37383__auto__,opt__37384__auto__){
return cljs.core._write.call(null,writer__37383__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__37382__auto__,writer__37383__auto__,opt__37384__auto__){
return cljs.core._write.call(null,writer__37383__auto__,"cognitect.transit/UUIDHandler");
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
var args48945 = [];
var len__37851__auto___48960 = arguments.length;
var i__37852__auto___48961 = (0);
while(true){
if((i__37852__auto___48961 < len__37851__auto___48960)){
args48945.push((arguments[i__37852__auto___48961]));

var G__48962 = (i__37852__auto___48961 + (1));
i__37852__auto___48961 = G__48962;
continue;
} else {
}
break;
}

var G__48947 = args48945.length;
switch (G__48947) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48945.length)].join('')));

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
var G__48948 = obj;
G__48948.push(kfn.call(null,k),vfn.call(null,v));

return G__48948;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x48949 = cljs.core.clone.call(null,handlers);
x48949.forEach = ((function (x48949,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__48950 = cljs.core.seq.call(null,coll);
var chunk__48951 = null;
var count__48952 = (0);
var i__48953 = (0);
while(true){
if((i__48953 < count__48952)){
var vec__48954 = cljs.core._nth.call(null,chunk__48951,i__48953);
var k = cljs.core.nth.call(null,vec__48954,(0),null);
var v = cljs.core.nth.call(null,vec__48954,(1),null);
f.call(null,v,k);

var G__48964 = seq__48950;
var G__48965 = chunk__48951;
var G__48966 = count__48952;
var G__48967 = (i__48953 + (1));
seq__48950 = G__48964;
chunk__48951 = G__48965;
count__48952 = G__48966;
i__48953 = G__48967;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__48950);
if(temp__4657__auto__){
var seq__48950__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48950__$1)){
var c__37587__auto__ = cljs.core.chunk_first.call(null,seq__48950__$1);
var G__48968 = cljs.core.chunk_rest.call(null,seq__48950__$1);
var G__48969 = c__37587__auto__;
var G__48970 = cljs.core.count.call(null,c__37587__auto__);
var G__48971 = (0);
seq__48950 = G__48968;
chunk__48951 = G__48969;
count__48952 = G__48970;
i__48953 = G__48971;
continue;
} else {
var vec__48957 = cljs.core.first.call(null,seq__48950__$1);
var k = cljs.core.nth.call(null,vec__48957,(0),null);
var v = cljs.core.nth.call(null,vec__48957,(1),null);
f.call(null,v,k);

var G__48972 = cljs.core.next.call(null,seq__48950__$1);
var G__48973 = null;
var G__48974 = (0);
var G__48975 = (0);
seq__48950 = G__48972;
chunk__48951 = G__48973;
count__48952 = G__48974;
i__48953 = G__48975;
continue;
}
} else {
return null;
}
}
break;
}
});})(x48949,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x48949;
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
var args48976 = [];
var len__37851__auto___48982 = arguments.length;
var i__37852__auto___48983 = (0);
while(true){
if((i__37852__auto___48983 < len__37851__auto___48982)){
args48976.push((arguments[i__37852__auto___48983]));

var G__48984 = (i__37852__auto___48983 + (1));
i__37852__auto___48983 = G__48984;
continue;
} else {
}
break;
}

var G__48978 = args48976.length;
switch (G__48978) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48976.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit48979 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit48979 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta48980){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta48980 = meta48980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit48979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48981,meta48980__$1){
var self__ = this;
var _48981__$1 = this;
return (new cognitect.transit.t_cognitect$transit48979(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta48980__$1));
});

cognitect.transit.t_cognitect$transit48979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48981){
var self__ = this;
var _48981__$1 = this;
return self__.meta48980;
});

cognitect.transit.t_cognitect$transit48979.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit48979.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit48979.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit48979.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit48979.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta48980","meta48980",289431379,null)], null);
});

cognitect.transit.t_cognitect$transit48979.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit48979.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit48979";

cognitect.transit.t_cognitect$transit48979.cljs$lang$ctorPrWriter = (function (this__37382__auto__,writer__37383__auto__,opt__37384__auto__){
return cljs.core._write.call(null,writer__37383__auto__,"cognitect.transit/t_cognitect$transit48979");
});

cognitect.transit.__GT_t_cognitect$transit48979 = (function cognitect$transit$__GT_t_cognitect$transit48979(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta48980){
return (new cognitect.transit.t_cognitect$transit48979(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta48980));
});

}

return (new cognitect.transit.t_cognitect$transit48979(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__36776__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__36776__auto__)){
return or__36776__auto__;
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