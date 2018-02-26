// Compiled by ClojureScript 1.9.229 {}
goog.provide('taoensso.sente.packers.transit');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('taoensso.encore');
goog.require('cognitect.transit');
goog.require('taoensso.sente.interfaces');
/**
 * Returns thread-safe (fn [x-to-write])
 */
taoensso.sente.packers.transit.get_transit_writer_fn = taoensso.encore.memoize_.call(null,(function (fmt,opts){
var writer = cognitect.transit.writer.call(null,fmt,opts);
return ((function (writer){
return (function (x){
return cognitect.transit.write.call(null,writer,x);
});
;})(writer))
}));
/**
 * Returns thread-safe (fn [str-to-read])
 */
taoensso.sente.packers.transit.get_transit_reader_fn = taoensso.encore.memoize_.call(null,(function (fmt,opts){
var reader = cognitect.transit.reader.call(null,fmt,opts);
return ((function (reader){
return (function (s){
return cognitect.transit.read.call(null,reader,s);
});
;})(reader))
}));

/**
* @constructor
 * @implements {taoensso.sente.interfaces.IPacker}
*/
taoensso.sente.packers.transit.TransitPacker = (function (transit_fmt,writer_opts,reader_opts){
this.transit_fmt = transit_fmt;
this.writer_opts = writer_opts;
this.reader_opts = reader_opts;
})
taoensso.sente.packers.transit.TransitPacker.prototype.taoensso$sente$interfaces$IPacker$ = true;

taoensso.sente.packers.transit.TransitPacker.prototype.taoensso$sente$interfaces$IPacker$pack$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return taoensso.sente.packers.transit.get_transit_writer_fn.call(null,self__.transit_fmt,self__.writer_opts).call(null,x);
});

taoensso.sente.packers.transit.TransitPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return taoensso.sente.packers.transit.get_transit_reader_fn.call(null,self__.transit_fmt,self__.reader_opts).call(null,s);
});

taoensso.sente.packers.transit.TransitPacker.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transit-fmt","transit-fmt",913727703,null),new cljs.core.Symbol(null,"writer-opts","writer-opts",1122222818,null),new cljs.core.Symbol(null,"reader-opts","reader-opts",-1524615329,null)], null);
});

taoensso.sente.packers.transit.TransitPacker.cljs$lang$type = true;

taoensso.sente.packers.transit.TransitPacker.cljs$lang$ctorStr = "taoensso.sente.packers.transit/TransitPacker";

taoensso.sente.packers.transit.TransitPacker.cljs$lang$ctorPrWriter = (function (this__37378__auto__,writer__37379__auto__,opt__37380__auto__){
return cljs.core._write.call(null,writer__37379__auto__,"taoensso.sente.packers.transit/TransitPacker");
});

taoensso.sente.packers.transit.__GT_TransitPacker = (function taoensso$sente$packers$transit$__GT_TransitPacker(transit_fmt,writer_opts,reader_opts){
return (new taoensso.sente.packers.transit.TransitPacker(transit_fmt,writer_opts,reader_opts));
});

/**
 * Returns a new TransitPacker
 */
taoensso.sente.packers.transit.get_transit_packer = (function taoensso$sente$packers$transit$get_transit_packer(var_args){
var args38172 = [];
var len__37847__auto___38178 = arguments.length;
var i__37848__auto___38179 = (0);
while(true){
if((i__37848__auto___38179 < len__37847__auto___38178)){
args38172.push((arguments[i__37848__auto___38179]));

var G__38180 = (i__37848__auto___38179 + (1));
i__37848__auto___38179 = G__38180;
continue;
} else {
}
break;
}

var G__38174 = args38172.length;
switch (G__38174) {
case 0:
return taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38172.length)].join('')));

}
});

taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.sente.packers.transit.get_transit_packer.call(null,new cljs.core.Keyword(null,"json","json",1279968570),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$1 = (function (transit_fmt){
return taoensso.sente.packers.transit.get_transit_packer.call(null,transit_fmt,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$3 = (function (transit_fmt,writer_opts,reader_opts){
var e_38182 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"json","json",1279968570),null], null), null)),x);
}).call(null,transit_fmt)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e38175){if((e38175 instanceof Error)){
var e = e38175;
return e;
} else {
throw e38175;

}
}})();
if((e_38182 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente.packers.transit",null,"([:el #{:json}] transit-fmt)",transit_fmt,e_38182,null);
}

new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(cljs.core.map_QMARK_.call(null,writer_opts)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e38176){if((e38176 instanceof Error)){
var e = e38176;
return e;
} else {
throw e38176;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente.packers.transit",null,"(map? writer-opts)",writer_opts,e,null);
}
})(),(function (){var e = (function (){try{if(cljs.core.map_QMARK_.call(null,reader_opts)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e38177){if((e38177 instanceof Error)){
var e = e38177;
return e;
} else {
throw e38177;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente.packers.transit",null,"(map? reader-opts)",reader_opts,e,null);
}
})()], null);

return (new taoensso.sente.packers.transit.TransitPacker(transit_fmt,writer_opts,reader_opts));
});

taoensso.sente.packers.transit.get_transit_packer.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=transit.js.map