// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args40727 = [];
var len__37879__auto___40733 = arguments.length;
var i__37880__auto___40734 = (0);
while(true){
if((i__37880__auto___40734 < len__37879__auto___40733)){
args40727.push((arguments[i__37880__auto___40734]));

var G__40735 = (i__37880__auto___40734 + (1));
i__37880__auto___40734 = G__40735;
continue;
} else {
}
break;
}

var G__40729 = args40727.length;
switch (G__40729) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40727.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async40730 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40730 = (function (f,blockable,meta40731){
this.f = f;
this.blockable = blockable;
this.meta40731 = meta40731;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40732,meta40731__$1){
var self__ = this;
var _40732__$1 = this;
return (new cljs.core.async.t_cljs$core$async40730(self__.f,self__.blockable,meta40731__$1));
});

cljs.core.async.t_cljs$core$async40730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40732){
var self__ = this;
var _40732__$1 = this;
return self__.meta40731;
});

cljs.core.async.t_cljs$core$async40730.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async40730.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40730.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async40730.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async40730.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta40731","meta40731",-333178104,null)], null);
});

cljs.core.async.t_cljs$core$async40730.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40730.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40730";

cljs.core.async.t_cljs$core$async40730.cljs$lang$ctorPrWriter = (function (this__37410__auto__,writer__37411__auto__,opt__37412__auto__){
return cljs.core._write.call(null,writer__37411__auto__,"cljs.core.async/t_cljs$core$async40730");
});

cljs.core.async.__GT_t_cljs$core$async40730 = (function cljs$core$async$__GT_t_cljs$core$async40730(f__$1,blockable__$1,meta40731){
return (new cljs.core.async.t_cljs$core$async40730(f__$1,blockable__$1,meta40731));
});

}

return (new cljs.core.async.t_cljs$core$async40730(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args40739 = [];
var len__37879__auto___40742 = arguments.length;
var i__37880__auto___40743 = (0);
while(true){
if((i__37880__auto___40743 < len__37879__auto___40742)){
args40739.push((arguments[i__37880__auto___40743]));

var G__40744 = (i__37880__auto___40743 + (1));
i__37880__auto___40743 = G__40744;
continue;
} else {
}
break;
}

var G__40741 = args40739.length;
switch (G__40741) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40739.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args40746 = [];
var len__37879__auto___40749 = arguments.length;
var i__37880__auto___40750 = (0);
while(true){
if((i__37880__auto___40750 < len__37879__auto___40749)){
args40746.push((arguments[i__37880__auto___40750]));

var G__40751 = (i__37880__auto___40750 + (1));
i__37880__auto___40750 = G__40751;
continue;
} else {
}
break;
}

var G__40748 = args40746.length;
switch (G__40748) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40746.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args40753 = [];
var len__37879__auto___40756 = arguments.length;
var i__37880__auto___40757 = (0);
while(true){
if((i__37880__auto___40757 < len__37879__auto___40756)){
args40753.push((arguments[i__37880__auto___40757]));

var G__40758 = (i__37880__auto___40757 + (1));
i__37880__auto___40757 = G__40758;
continue;
} else {
}
break;
}

var G__40755 = args40753.length;
switch (G__40755) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40753.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_40760 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_40760);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_40760,ret){
return (function (){
return fn1.call(null,val_40760);
});})(val_40760,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args40761 = [];
var len__37879__auto___40764 = arguments.length;
var i__37880__auto___40765 = (0);
while(true){
if((i__37880__auto___40765 < len__37879__auto___40764)){
args40761.push((arguments[i__37880__auto___40765]));

var G__40766 = (i__37880__auto___40765 + (1));
i__37880__auto___40765 = G__40766;
continue;
} else {
}
break;
}

var G__40763 = args40761.length;
switch (G__40763) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40761.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__37719__auto___40768 = n;
var x_40769 = (0);
while(true){
if((x_40769 < n__37719__auto___40768)){
(a[x_40769] = (0));

var G__40770 = (x_40769 + (1));
x_40769 = G__40770;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__40771 = (i + (1));
i = G__40771;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async40775 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40775 = (function (alt_flag,flag,meta40776){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta40776 = meta40776;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_40777,meta40776__$1){
var self__ = this;
var _40777__$1 = this;
return (new cljs.core.async.t_cljs$core$async40775(self__.alt_flag,self__.flag,meta40776__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async40775.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_40777){
var self__ = this;
var _40777__$1 = this;
return self__.meta40776;
});})(flag))
;

cljs.core.async.t_cljs$core$async40775.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async40775.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async40775.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40775.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40775.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta40776","meta40776",536123879,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async40775.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40775.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40775";

cljs.core.async.t_cljs$core$async40775.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__37410__auto__,writer__37411__auto__,opt__37412__auto__){
return cljs.core._write.call(null,writer__37411__auto__,"cljs.core.async/t_cljs$core$async40775");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async40775 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async40775(alt_flag__$1,flag__$1,meta40776){
return (new cljs.core.async.t_cljs$core$async40775(alt_flag__$1,flag__$1,meta40776));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async40775(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async40781 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40781 = (function (alt_handler,flag,cb,meta40782){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta40782 = meta40782;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40783,meta40782__$1){
var self__ = this;
var _40783__$1 = this;
return (new cljs.core.async.t_cljs$core$async40781(self__.alt_handler,self__.flag,self__.cb,meta40782__$1));
});

cljs.core.async.t_cljs$core$async40781.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40783){
var self__ = this;
var _40783__$1 = this;
return self__.meta40782;
});

cljs.core.async.t_cljs$core$async40781.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async40781.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async40781.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40781.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async40781.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta40782","meta40782",318825570,null)], null);
});

cljs.core.async.t_cljs$core$async40781.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40781.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40781";

cljs.core.async.t_cljs$core$async40781.cljs$lang$ctorPrWriter = (function (this__37410__auto__,writer__37411__auto__,opt__37412__auto__){
return cljs.core._write.call(null,writer__37411__auto__,"cljs.core.async/t_cljs$core$async40781");
});

cljs.core.async.__GT_t_cljs$core$async40781 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async40781(alt_handler__$1,flag__$1,cb__$1,meta40782){
return (new cljs.core.async.t_cljs$core$async40781(alt_handler__$1,flag__$1,cb__$1,meta40782));
});

}

return (new cljs.core.async.t_cljs$core$async40781(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40784_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40784_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40785_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40785_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__36804__auto__ = wport;
if(cljs.core.truth_(or__36804__auto__)){
return or__36804__auto__;
} else {
return port;
}
})()], null));
} else {
var G__40786 = (i + (1));
i = G__40786;
continue;
}
} else {
return null;
}
break;
}
})();
var or__36804__auto__ = ret;
if(cljs.core.truth_(or__36804__auto__)){
return or__36804__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__36792__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__36792__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__36792__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__37886__auto__ = [];
var len__37879__auto___40792 = arguments.length;
var i__37880__auto___40793 = (0);
while(true){
if((i__37880__auto___40793 < len__37879__auto___40792)){
args__37886__auto__.push((arguments[i__37880__auto___40793]));

var G__40794 = (i__37880__auto___40793 + (1));
i__37880__auto___40793 = G__40794;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((1) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37887__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__40789){
var map__40790 = p__40789;
var map__40790__$1 = ((((!((map__40790 == null)))?((((map__40790.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40790.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40790):map__40790);
var opts = map__40790__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq40787){
var G__40788 = cljs.core.first.call(null,seq40787);
var seq40787__$1 = cljs.core.next.call(null,seq40787);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40788,seq40787__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args40795 = [];
var len__37879__auto___40845 = arguments.length;
var i__37880__auto___40846 = (0);
while(true){
if((i__37880__auto___40846 < len__37879__auto___40845)){
args40795.push((arguments[i__37880__auto___40846]));

var G__40847 = (i__37880__auto___40846 + (1));
i__37880__auto___40846 = G__40847;
continue;
} else {
}
break;
}

var G__40797 = args40795.length;
switch (G__40797) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40795.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__40682__auto___40849 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40682__auto___40849){
return (function (){
var f__40683__auto__ = (function (){var switch__40570__auto__ = ((function (c__40682__auto___40849){
return (function (state_40821){
var state_val_40822 = (state_40821[(1)]);
if((state_val_40822 === (7))){
var inst_40817 = (state_40821[(2)]);
var state_40821__$1 = state_40821;
var statearr_40823_40850 = state_40821__$1;
(statearr_40823_40850[(2)] = inst_40817);

(statearr_40823_40850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40822 === (1))){
var state_40821__$1 = state_40821;
var statearr_40824_40851 = state_40821__$1;
(statearr_40824_40851[(2)] = null);

(statearr_40824_40851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40822 === (4))){
var inst_40800 = (state_40821[(7)]);
var inst_40800__$1 = (state_40821[(2)]);
var inst_40801 = (inst_40800__$1 == null);
var state_40821__$1 = (function (){var statearr_40825 = state_40821;
(statearr_40825[(7)] = inst_40800__$1);

return statearr_40825;
})();
if(cljs.core.truth_(inst_40801)){
var statearr_40826_40852 = state_40821__$1;
(statearr_40826_40852[(1)] = (5));

} else {
var statearr_40827_40853 = state_40821__$1;
(statearr_40827_40853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40822 === (13))){
var state_40821__$1 = state_40821;
var statearr_40828_40854 = state_40821__$1;
(statearr_40828_40854[(2)] = null);

(statearr_40828_40854[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40822 === (6))){
var inst_40800 = (state_40821[(7)]);
var state_40821__$1 = state_40821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40821__$1,(11),to,inst_40800);
} else {
if((state_val_40822 === (3))){
var inst_40819 = (state_40821[(2)]);
var state_40821__$1 = state_40821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40821__$1,inst_40819);
} else {
if((state_val_40822 === (12))){
var state_40821__$1 = state_40821;
var statearr_40829_40855 = state_40821__$1;
(statearr_40829_40855[(2)] = null);

(statearr_40829_40855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40822 === (2))){
var state_40821__$1 = state_40821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40821__$1,(4),from);
} else {
if((state_val_40822 === (11))){
var inst_40810 = (state_40821[(2)]);
var state_40821__$1 = state_40821;
if(cljs.core.truth_(inst_40810)){
var statearr_40830_40856 = state_40821__$1;
(statearr_40830_40856[(1)] = (12));

} else {
var statearr_40831_40857 = state_40821__$1;
(statearr_40831_40857[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40822 === (9))){
var state_40821__$1 = state_40821;
var statearr_40832_40858 = state_40821__$1;
(statearr_40832_40858[(2)] = null);

(statearr_40832_40858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40822 === (5))){
var state_40821__$1 = state_40821;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40833_40859 = state_40821__$1;
(statearr_40833_40859[(1)] = (8));

} else {
var statearr_40834_40860 = state_40821__$1;
(statearr_40834_40860[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40822 === (14))){
var inst_40815 = (state_40821[(2)]);
var state_40821__$1 = state_40821;
var statearr_40835_40861 = state_40821__$1;
(statearr_40835_40861[(2)] = inst_40815);

(statearr_40835_40861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40822 === (10))){
var inst_40807 = (state_40821[(2)]);
var state_40821__$1 = state_40821;
var statearr_40836_40862 = state_40821__$1;
(statearr_40836_40862[(2)] = inst_40807);

(statearr_40836_40862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40822 === (8))){
var inst_40804 = cljs.core.async.close_BANG_.call(null,to);
var state_40821__$1 = state_40821;
var statearr_40837_40863 = state_40821__$1;
(statearr_40837_40863[(2)] = inst_40804);

(statearr_40837_40863[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});})(c__40682__auto___40849))
;
return ((function (switch__40570__auto__,c__40682__auto___40849){
return (function() {
var cljs$core$async$state_machine__40571__auto__ = null;
var cljs$core$async$state_machine__40571__auto____0 = (function (){
var statearr_40841 = [null,null,null,null,null,null,null,null];
(statearr_40841[(0)] = cljs$core$async$state_machine__40571__auto__);

(statearr_40841[(1)] = (1));

return statearr_40841;
});
var cljs$core$async$state_machine__40571__auto____1 = (function (state_40821){
while(true){
var ret_value__40572__auto__ = (function (){try{while(true){
var result__40573__auto__ = switch__40570__auto__.call(null,state_40821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40573__auto__;
}
break;
}
}catch (e40842){if((e40842 instanceof Object)){
var ex__40574__auto__ = e40842;
var statearr_40843_40864 = state_40821;
(statearr_40843_40864[(5)] = ex__40574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40865 = state_40821;
state_40821 = G__40865;
continue;
} else {
return ret_value__40572__auto__;
}
break;
}
});
cljs$core$async$state_machine__40571__auto__ = function(state_40821){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40571__auto____1.call(this,state_40821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40571__auto____0;
cljs$core$async$state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40571__auto____1;
return cljs$core$async$state_machine__40571__auto__;
})()
;})(switch__40570__auto__,c__40682__auto___40849))
})();
var state__40684__auto__ = (function (){var statearr_40844 = f__40683__auto__.call(null);
(statearr_40844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40682__auto___40849);

return statearr_40844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40684__auto__);
});})(c__40682__auto___40849))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__41053){
var vec__41054 = p__41053;
var v = cljs.core.nth.call(null,vec__41054,(0),null);
var p = cljs.core.nth.call(null,vec__41054,(1),null);
var job = vec__41054;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__40682__auto___41240 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40682__auto___41240,res,vec__41054,v,p,job,jobs,results){
return (function (){
var f__40683__auto__ = (function (){var switch__40570__auto__ = ((function (c__40682__auto___41240,res,vec__41054,v,p,job,jobs,results){
return (function (state_41061){
var state_val_41062 = (state_41061[(1)]);
if((state_val_41062 === (1))){
var state_41061__$1 = state_41061;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41061__$1,(2),res,v);
} else {
if((state_val_41062 === (2))){
var inst_41058 = (state_41061[(2)]);
var inst_41059 = cljs.core.async.close_BANG_.call(null,res);
var state_41061__$1 = (function (){var statearr_41063 = state_41061;
(statearr_41063[(7)] = inst_41058);

return statearr_41063;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41061__$1,inst_41059);
} else {
return null;
}
}
});})(c__40682__auto___41240,res,vec__41054,v,p,job,jobs,results))
;
return ((function (switch__40570__auto__,c__40682__auto___41240,res,vec__41054,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40571__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40571__auto____0 = (function (){
var statearr_41067 = [null,null,null,null,null,null,null,null];
(statearr_41067[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40571__auto__);

(statearr_41067[(1)] = (1));

return statearr_41067;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40571__auto____1 = (function (state_41061){
while(true){
var ret_value__40572__auto__ = (function (){try{while(true){
var result__40573__auto__ = switch__40570__auto__.call(null,state_41061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40573__auto__;
}
break;
}
}catch (e41068){if((e41068 instanceof Object)){
var ex__40574__auto__ = e41068;
var statearr_41069_41241 = state_41061;
(statearr_41069_41241[(5)] = ex__40574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41242 = state_41061;
state_41061 = G__41242;
continue;
} else {
return ret_value__40572__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40571__auto__ = function(state_41061){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40571__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40571__auto____1.call(this,state_41061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40571__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40571__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40571__auto__;
})()
;})(switch__40570__auto__,c__40682__auto___41240,res,vec__41054,v,p,job,jobs,results))
})();
var state__40684__auto__ = (function (){var statearr_41070 = f__40683__auto__.call(null);
(statearr_41070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40682__auto___41240);

return statearr_41070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40684__auto__);
});})(c__40682__auto___41240,res,vec__41054,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__41071){
var vec__41072 = p__41071;
var v = cljs.core.nth.call(null,vec__41072,(0),null);
var p = cljs.core.nth.call(null,vec__41072,(1),null);
var job = vec__41072;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__37719__auto___41243 = n;
var __41244 = (0);
while(true){
if((__41244 < n__37719__auto___41243)){
var G__41075_41245 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__41075_41245) {
case "compute":
var c__40682__auto___41247 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41244,c__40682__auto___41247,G__41075_41245,n__37719__auto___41243,jobs,results,process,async){
return (function (){
var f__40683__auto__ = (function (){var switch__40570__auto__ = ((function (__41244,c__40682__auto___41247,G__41075_41245,n__37719__auto___41243,jobs,results,process,async){
return (function (state_41088){
var state_val_41089 = (state_41088[(1)]);
if((state_val_41089 === (1))){
var state_41088__$1 = state_41088;
var statearr_41090_41248 = state_41088__$1;
(statearr_41090_41248[(2)] = null);

(statearr_41090_41248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41089 === (2))){
var state_41088__$1 = state_41088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41088__$1,(4),jobs);
} else {
if((state_val_41089 === (3))){
var inst_41086 = (state_41088[(2)]);
var state_41088__$1 = state_41088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41088__$1,inst_41086);
} else {
if((state_val_41089 === (4))){
var inst_41078 = (state_41088[(2)]);
var inst_41079 = process.call(null,inst_41078);
var state_41088__$1 = state_41088;
if(cljs.core.truth_(inst_41079)){
var statearr_41091_41249 = state_41088__$1;
(statearr_41091_41249[(1)] = (5));

} else {
var statearr_41092_41250 = state_41088__$1;
(statearr_41092_41250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41089 === (5))){
var state_41088__$1 = state_41088;
var statearr_41093_41251 = state_41088__$1;
(statearr_41093_41251[(2)] = null);

(statearr_41093_41251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41089 === (6))){
var state_41088__$1 = state_41088;
var statearr_41094_41252 = state_41088__$1;
(statearr_41094_41252[(2)] = null);

(statearr_41094_41252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41089 === (7))){
var inst_41084 = (state_41088[(2)]);
var state_41088__$1 = state_41088;
var statearr_41095_41253 = state_41088__$1;
(statearr_41095_41253[(2)] = inst_41084);

(statearr_41095_41253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__41244,c__40682__auto___41247,G__41075_41245,n__37719__auto___41243,jobs,results,process,async))
;
return ((function (__41244,switch__40570__auto__,c__40682__auto___41247,G__41075_41245,n__37719__auto___41243,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40571__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40571__auto____0 = (function (){
var statearr_41099 = [null,null,null,null,null,null,null];
(statearr_41099[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40571__auto__);

(statearr_41099[(1)] = (1));

return statearr_41099;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40571__auto____1 = (function (state_41088){
while(true){
var ret_value__40572__auto__ = (function (){try{while(true){
var result__40573__auto__ = switch__40570__auto__.call(null,state_41088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40573__auto__;
}
break;
}
}catch (e41100){if((e41100 instanceof Object)){
var ex__40574__auto__ = e41100;
var statearr_41101_41254 = state_41088;
(statearr_41101_41254[(5)] = ex__40574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41255 = state_41088;
state_41088 = G__41255;
continue;
} else {
return ret_value__40572__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40571__auto__ = function(state_41088){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40571__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40571__auto____1.call(this,state_41088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40571__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40571__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40571__auto__;
})()
;})(__41244,switch__40570__auto__,c__40682__auto___41247,G__41075_41245,n__37719__auto___41243,jobs,results,process,async))
})();
var state__40684__auto__ = (function (){var statearr_41102 = f__40683__auto__.call(null);
(statearr_41102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40682__auto___41247);

return statearr_41102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40684__auto__);
});})(__41244,c__40682__auto___41247,G__41075_41245,n__37719__auto___41243,jobs,results,process,async))
);


break;
case "async":
var c__40682__auto___41256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41244,c__40682__auto___41256,G__41075_41245,n__37719__auto___41243,jobs,results,process,async){
return (function (){
var f__40683__auto__ = (function (){var switch__40570__auto__ = ((function (__41244,c__40682__auto___41256,G__41075_41245,n__37719__auto___41243,jobs,results,process,async){
return (function (state_41115){
var state_val_41116 = (state_41115[(1)]);
if((state_val_41116 === (1))){
var state_41115__$1 = state_41115;
var statearr_41117_41257 = state_41115__$1;
(statearr_41117_41257[(2)] = null);

(statearr_41117_41257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41116 === (2))){
var state_41115__$1 = state_41115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41115__$1,(4),jobs);
} else {
if((state_val_41116 === (3))){
var inst_41113 = (state_41115[(2)]);
var state_41115__$1 = state_41115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41115__$1,inst_41113);
} else {
if((state_val_41116 === (4))){
var inst_41105 = (state_41115[(2)]);
var inst_41106 = async.call(null,inst_41105);
var state_41115__$1 = state_41115;
if(cljs.core.truth_(inst_41106)){
var statearr_41118_41258 = state_41115__$1;
(statearr_41118_41258[(1)] = (5));

} else {
var statearr_41119_41259 = state_41115__$1;
(statearr_41119_41259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41116 === (5))){
var state_41115__$1 = state_41115;
var statearr_41120_41260 = state_41115__$1;
(statearr_41120_41260[(2)] = null);

(statearr_41120_41260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41116 === (6))){
var state_41115__$1 = state_41115;
var statearr_41121_41261 = state_41115__$1;
(statearr_41121_41261[(2)] = null);

(statearr_41121_41261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41116 === (7))){
var inst_41111 = (state_41115[(2)]);
var state_41115__$1 = state_41115;
var statearr_41122_41262 = state_41115__$1;
(statearr_41122_41262[(2)] = inst_41111);

(statearr_41122_41262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__41244,c__40682__auto___41256,G__41075_41245,n__37719__auto___41243,jobs,results,process,async))
;
return ((function (__41244,switch__40570__auto__,c__40682__auto___41256,G__41075_41245,n__37719__auto___41243,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40571__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40571__auto____0 = (function (){
var statearr_41126 = [null,null,null,null,null,null,null];
(statearr_41126[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40571__auto__);

(statearr_41126[(1)] = (1));

return statearr_41126;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40571__auto____1 = (function (state_41115){
while(true){
var ret_value__40572__auto__ = (function (){try{while(true){
var result__40573__auto__ = switch__40570__auto__.call(null,state_41115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40573__auto__;
}
break;
}
}catch (e41127){if((e41127 instanceof Object)){
var ex__40574__auto__ = e41127;
var statearr_41128_41263 = state_41115;
(statearr_41128_41263[(5)] = ex__40574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41264 = state_41115;
state_41115 = G__41264;
continue;
} else {
return ret_value__40572__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40571__auto__ = function(state_41115){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40571__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40571__auto____1.call(this,state_41115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40571__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40571__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40571__auto__;
})()
;})(__41244,switch__40570__auto__,c__40682__auto___41256,G__41075_41245,n__37719__auto___41243,jobs,results,process,async))
})();
var state__40684__auto__ = (function (){var statearr_41129 = f__40683__auto__.call(null);
(statearr_41129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40682__auto___41256);

return statearr_41129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40684__auto__);
});})(__41244,c__40682__auto___41256,G__41075_41245,n__37719__auto___41243,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__41265 = (__41244 + (1));
__41244 = G__41265;
continue;
} else {
}
break;
}

var c__40682__auto___41266 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40682__auto___41266,jobs,results,process,async){
return (function (){
var f__40683__auto__ = (function (){var switch__40570__auto__ = ((function (c__40682__auto___41266,jobs,results,process,async){
return (function (state_41151){
var state_val_41152 = (state_41151[(1)]);
if((state_val_41152 === (1))){
var state_41151__$1 = state_41151;
var statearr_41153_41267 = state_41151__$1;
(statearr_41153_41267[(2)] = null);

(statearr_41153_41267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41152 === (2))){
var state_41151__$1 = state_41151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41151__$1,(4),from);
} else {
if((state_val_41152 === (3))){
var inst_41149 = (state_41151[(2)]);
var state_41151__$1 = state_41151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41151__$1,inst_41149);
} else {
if((state_val_41152 === (4))){
var inst_41132 = (state_41151[(7)]);
var inst_41132__$1 = (state_41151[(2)]);
var inst_41133 = (inst_41132__$1 == null);
var state_41151__$1 = (function (){var statearr_41154 = state_41151;
(statearr_41154[(7)] = inst_41132__$1);

return statearr_41154;
})();
if(cljs.core.truth_(inst_41133)){
var statearr_41155_41268 = state_41151__$1;
(statearr_41155_41268[(1)] = (5));

} else {
var statearr_41156_41269 = state_41151__$1;
(statearr_41156_41269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41152 === (5))){
var inst_41135 = cljs.core.async.close_BANG_.call(null,jobs);
var state_41151__$1 = state_41151;
var statearr_41157_41270 = state_41151__$1;
(statearr_41157_41270[(2)] = inst_41135);

(statearr_41157_41270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41152 === (6))){
var inst_41132 = (state_41151[(7)]);
var inst_41137 = (state_41151[(8)]);
var inst_41137__$1 = cljs.core.async.chan.call(null,(1));
var inst_41138 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41139 = [inst_41132,inst_41137__$1];
var inst_41140 = (new cljs.core.PersistentVector(null,2,(5),inst_41138,inst_41139,null));
var state_41151__$1 = (function (){var statearr_41158 = state_41151;
(statearr_41158[(8)] = inst_41137__$1);

return statearr_41158;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41151__$1,(8),jobs,inst_41140);
} else {
if((state_val_41152 === (7))){
var inst_41147 = (state_41151[(2)]);
var state_41151__$1 = state_41151;
var statearr_41159_41271 = state_41151__$1;
(statearr_41159_41271[(2)] = inst_41147);

(statearr_41159_41271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41152 === (8))){
var inst_41137 = (state_41151[(8)]);
var inst_41142 = (state_41151[(2)]);
var state_41151__$1 = (function (){var statearr_41160 = state_41151;
(statearr_41160[(9)] = inst_41142);

return statearr_41160;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41151__$1,(9),results,inst_41137);
} else {
if((state_val_41152 === (9))){
var inst_41144 = (state_41151[(2)]);
var state_41151__$1 = (function (){var statearr_41161 = state_41151;
(statearr_41161[(10)] = inst_41144);

return statearr_41161;
})();
var statearr_41162_41272 = state_41151__$1;
(statearr_41162_41272[(2)] = null);

(statearr_41162_41272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
});})(c__40682__auto___41266,jobs,results,process,async))
;
return ((function (switch__40570__auto__,c__40682__auto___41266,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40571__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40571__auto____0 = (function (){
var statearr_41166 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41166[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40571__auto__);

(statearr_41166[(1)] = (1));

return statearr_41166;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40571__auto____1 = (function (state_41151){
while(true){
var ret_value__40572__auto__ = (function (){try{while(true){
var result__40573__auto__ = switch__40570__auto__.call(null,state_41151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40573__auto__;
}
break;
}
}catch (e41167){if((e41167 instanceof Object)){
var ex__40574__auto__ = e41167;
var statearr_41168_41273 = state_41151;
(statearr_41168_41273[(5)] = ex__40574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41274 = state_41151;
state_41151 = G__41274;
continue;
} else {
return ret_value__40572__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40571__auto__ = function(state_41151){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40571__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40571__auto____1.call(this,state_41151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40571__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40571__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40571__auto__;
})()
;})(switch__40570__auto__,c__40682__auto___41266,jobs,results,process,async))
})();
var state__40684__auto__ = (function (){var statearr_41169 = f__40683__auto__.call(null);
(statearr_41169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40682__auto___41266);

return statearr_41169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40684__auto__);
});})(c__40682__auto___41266,jobs,results,process,async))
);


var c__40682__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40682__auto__,jobs,results,process,async){
return (function (){
var f__40683__auto__ = (function (){var switch__40570__auto__ = ((function (c__40682__auto__,jobs,results,process,async){
return (function (state_41207){
var state_val_41208 = (state_41207[(1)]);
if((state_val_41208 === (7))){
var inst_41203 = (state_41207[(2)]);
var state_41207__$1 = state_41207;
var statearr_41209_41275 = state_41207__$1;
(statearr_41209_41275[(2)] = inst_41203);

(statearr_41209_41275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41208 === (20))){
var state_41207__$1 = state_41207;
var statearr_41210_41276 = state_41207__$1;
(statearr_41210_41276[(2)] = null);

(statearr_41210_41276[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41208 === (1))){
var state_41207__$1 = state_41207;
var statearr_41211_41277 = state_41207__$1;
(statearr_41211_41277[(2)] = null);

(statearr_41211_41277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41208 === (4))){
var inst_41172 = (state_41207[(7)]);
var inst_41172__$1 = (state_41207[(2)]);
var inst_41173 = (inst_41172__$1 == null);
var state_41207__$1 = (function (){var statearr_41212 = state_41207;
(statearr_41212[(7)] = inst_41172__$1);

return statearr_41212;
})();
if(cljs.core.truth_(inst_41173)){
var statearr_41213_41278 = state_41207__$1;
(statearr_41213_41278[(1)] = (5));

} else {
var statearr_41214_41279 = state_41207__$1;
(statearr_41214_41279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41208 === (15))){
var inst_41185 = (state_41207[(8)]);
var state_41207__$1 = state_41207;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41207__$1,(18),to,inst_41185);
} else {
if((state_val_41208 === (21))){
var inst_41198 = (state_41207[(2)]);
var state_41207__$1 = state_41207;
var statearr_41215_41280 = state_41207__$1;
(statearr_41215_41280[(2)] = inst_41198);

(statearr_41215_41280[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41208 === (13))){
var inst_41200 = (state_41207[(2)]);
var state_41207__$1 = (function (){var statearr_41216 = state_41207;
(statearr_41216[(9)] = inst_41200);

return statearr_41216;
})();
var statearr_41217_41281 = state_41207__$1;
(statearr_41217_41281[(2)] = null);

(statearr_41217_41281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41208 === (6))){
var inst_41172 = (state_41207[(7)]);
var state_41207__$1 = state_41207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41207__$1,(11),inst_41172);
} else {
if((state_val_41208 === (17))){
var inst_41193 = (state_41207[(2)]);
var state_41207__$1 = state_41207;
if(cljs.core.truth_(inst_41193)){
var statearr_41218_41282 = state_41207__$1;
(statearr_41218_41282[(1)] = (19));

} else {
var statearr_41219_41283 = state_41207__$1;
(statearr_41219_41283[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41208 === (3))){
var inst_41205 = (state_41207[(2)]);
var state_41207__$1 = state_41207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41207__$1,inst_41205);
} else {
if((state_val_41208 === (12))){
var inst_41182 = (state_41207[(10)]);
var state_41207__$1 = state_41207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41207__$1,(14),inst_41182);
} else {
if((state_val_41208 === (2))){
var state_41207__$1 = state_41207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41207__$1,(4),results);
} else {
if((state_val_41208 === (19))){
var state_41207__$1 = state_41207;
var statearr_41220_41284 = state_41207__$1;
(statearr_41220_41284[(2)] = null);

(statearr_41220_41284[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41208 === (11))){
var inst_41182 = (state_41207[(2)]);
var state_41207__$1 = (function (){var statearr_41221 = state_41207;
(statearr_41221[(10)] = inst_41182);

return statearr_41221;
})();
var statearr_41222_41285 = state_41207__$1;
(statearr_41222_41285[(2)] = null);

(statearr_41222_41285[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41208 === (9))){
var state_41207__$1 = state_41207;
var statearr_41223_41286 = state_41207__$1;
(statearr_41223_41286[(2)] = null);

(statearr_41223_41286[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41208 === (5))){
var state_41207__$1 = state_41207;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41224_41287 = state_41207__$1;
(statearr_41224_41287[(1)] = (8));

} else {
var statearr_41225_41288 = state_41207__$1;
(statearr_41225_41288[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41208 === (14))){
var inst_41187 = (state_41207[(11)]);
var inst_41185 = (state_41207[(8)]);
var inst_41185__$1 = (state_41207[(2)]);
var inst_41186 = (inst_41185__$1 == null);
var inst_41187__$1 = cljs.core.not.call(null,inst_41186);
var state_41207__$1 = (function (){var statearr_41226 = state_41207;
(statearr_41226[(11)] = inst_41187__$1);

(statearr_41226[(8)] = inst_41185__$1);

return statearr_41226;
})();
if(inst_41187__$1){
var statearr_41227_41289 = state_41207__$1;
(statearr_41227_41289[(1)] = (15));

} else {
var statearr_41228_41290 = state_41207__$1;
(statearr_41228_41290[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41208 === (16))){
var inst_41187 = (state_41207[(11)]);
var state_41207__$1 = state_41207;
var statearr_41229_41291 = state_41207__$1;
(statearr_41229_41291[(2)] = inst_41187);

(statearr_41229_41291[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41208 === (10))){
var inst_41179 = (state_41207[(2)]);
var state_41207__$1 = state_41207;
var statearr_41230_41292 = state_41207__$1;
(statearr_41230_41292[(2)] = inst_41179);

(statearr_41230_41292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41208 === (18))){
var inst_41190 = (state_41207[(2)]);
var state_41207__$1 = state_41207;
var statearr_41231_41293 = state_41207__$1;
(statearr_41231_41293[(2)] = inst_41190);

(statearr_41231_41293[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41208 === (8))){
var inst_41176 = cljs.core.async.close_BANG_.call(null,to);
var state_41207__$1 = state_41207;
var statearr_41232_41294 = state_41207__$1;
(statearr_41232_41294[(2)] = inst_41176);

(statearr_41232_41294[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40682__auto__,jobs,results,process,async))
;
return ((function (switch__40570__auto__,c__40682__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40571__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40571__auto____0 = (function (){
var statearr_41236 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41236[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40571__auto__);

(statearr_41236[(1)] = (1));

return statearr_41236;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40571__auto____1 = (function (state_41207){
while(true){
var ret_value__40572__auto__ = (function (){try{while(true){
var result__40573__auto__ = switch__40570__auto__.call(null,state_41207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40573__auto__;
}
break;
}
}catch (e41237){if((e41237 instanceof Object)){
var ex__40574__auto__ = e41237;
var statearr_41238_41295 = state_41207;
(statearr_41238_41295[(5)] = ex__40574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41296 = state_41207;
state_41207 = G__41296;
continue;
} else {
return ret_value__40572__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40571__auto__ = function(state_41207){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40571__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40571__auto____1.call(this,state_41207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40571__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40571__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40571__auto__;
})()
;})(switch__40570__auto__,c__40682__auto__,jobs,results,process,async))
})();
var state__40684__auto__ = (function (){var statearr_41239 = f__40683__auto__.call(null);
(statearr_41239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40682__auto__);

return statearr_41239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40684__auto__);
});})(c__40682__auto__,jobs,results,process,async))
);

return c__40682__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args41297 = [];
var len__37879__auto___41300 = arguments.length;
var i__37880__auto___41301 = (0);
while(true){
if((i__37880__auto___41301 < len__37879__auto___41300)){
args41297.push((arguments[i__37880__auto___41301]));

var G__41302 = (i__37880__auto___41301 + (1));
i__37880__auto___41301 = G__41302;
continue;
} else {
}
break;
}

var G__41299 = args41297.length;
switch (G__41299) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41297.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args41304 = [];
var len__37879__auto___41307 = arguments.length;
var i__37880__auto___41308 = (0);
while(true){
if((i__37880__auto___41308 < len__37879__auto___41307)){
args41304.push((arguments[i__37880__auto___41308]));

var G__41309 = (i__37880__auto___41308 + (1));
i__37880__auto___41308 = G__41309;
continue;
} else {
}
break;
}

var G__41306 = args41304.length;
switch (G__41306) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41304.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args41311 = [];
var len__37879__auto___41364 = arguments.length;
var i__37880__auto___41365 = (0);
while(true){
if((i__37880__auto___41365 < len__37879__auto___41364)){
args41311.push((arguments[i__37880__auto___41365]));

var G__41366 = (i__37880__auto___41365 + (1));
i__37880__auto___41365 = G__41366;
continue;
} else {
}
break;
}

var G__41313 = args41311.length;
switch (G__41313) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41311.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__40682__auto___41368 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40682__auto___41368,tc,fc){
return (function (){
var f__40683__auto__ = (function (){var switch__40570__auto__ = ((function (c__40682__auto___41368,tc,fc){
return (function (state_41339){
var state_val_41340 = (state_41339[(1)]);
if((state_val_41340 === (7))){
var inst_41335 = (state_41339[(2)]);
var state_41339__$1 = state_41339;
var statearr_41341_41369 = state_41339__$1;
(statearr_41341_41369[(2)] = inst_41335);

(statearr_41341_41369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41340 === (1))){
var state_41339__$1 = state_41339;
var statearr_41342_41370 = state_41339__$1;
(statearr_41342_41370[(2)] = null);

(statearr_41342_41370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41340 === (4))){
var inst_41316 = (state_41339[(7)]);
var inst_41316__$1 = (state_41339[(2)]);
var inst_41317 = (inst_41316__$1 == null);
var state_41339__$1 = (function (){var statearr_41343 = state_41339;
(statearr_41343[(7)] = inst_41316__$1);

return statearr_41343;
})();
if(cljs.core.truth_(inst_41317)){
var statearr_41344_41371 = state_41339__$1;
(statearr_41344_41371[(1)] = (5));

} else {
var statearr_41345_41372 = state_41339__$1;
(statearr_41345_41372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41340 === (13))){
var state_41339__$1 = state_41339;
var statearr_41346_41373 = state_41339__$1;
(statearr_41346_41373[(2)] = null);

(statearr_41346_41373[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41340 === (6))){
var inst_41316 = (state_41339[(7)]);
var inst_41322 = p.call(null,inst_41316);
var state_41339__$1 = state_41339;
if(cljs.core.truth_(inst_41322)){
var statearr_41347_41374 = state_41339__$1;
(statearr_41347_41374[(1)] = (9));

} else {
var statearr_41348_41375 = state_41339__$1;
(statearr_41348_41375[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41340 === (3))){
var inst_41337 = (state_41339[(2)]);
var state_41339__$1 = state_41339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41339__$1,inst_41337);
} else {
if((state_val_41340 === (12))){
var state_41339__$1 = state_41339;
var statearr_41349_41376 = state_41339__$1;
(statearr_41349_41376[(2)] = null);

(statearr_41349_41376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41340 === (2))){
var state_41339__$1 = state_41339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41339__$1,(4),ch);
} else {
if((state_val_41340 === (11))){
var inst_41316 = (state_41339[(7)]);
var inst_41326 = (state_41339[(2)]);
var state_41339__$1 = state_41339;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41339__$1,(8),inst_41326,inst_41316);
} else {
if((state_val_41340 === (9))){
var state_41339__$1 = state_41339;
var statearr_41350_41377 = state_41339__$1;
(statearr_41350_41377[(2)] = tc);

(statearr_41350_41377[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41340 === (5))){
var inst_41319 = cljs.core.async.close_BANG_.call(null,tc);
var inst_41320 = cljs.core.async.close_BANG_.call(null,fc);
var state_41339__$1 = (function (){var statearr_41351 = state_41339;
(statearr_41351[(8)] = inst_41319);

return statearr_41351;
})();
var statearr_41352_41378 = state_41339__$1;
(statearr_41352_41378[(2)] = inst_41320);

(statearr_41352_41378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41340 === (14))){
var inst_41333 = (state_41339[(2)]);
var state_41339__$1 = state_41339;
var statearr_41353_41379 = state_41339__$1;
(statearr_41353_41379[(2)] = inst_41333);

(statearr_41353_41379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41340 === (10))){
var state_41339__$1 = state_41339;
var statearr_41354_41380 = state_41339__$1;
(statearr_41354_41380[(2)] = fc);

(statearr_41354_41380[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41340 === (8))){
var inst_41328 = (state_41339[(2)]);
var state_41339__$1 = state_41339;
if(cljs.core.truth_(inst_41328)){
var statearr_41355_41381 = state_41339__$1;
(statearr_41355_41381[(1)] = (12));

} else {
var statearr_41356_41382 = state_41339__$1;
(statearr_41356_41382[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});})(c__40682__auto___41368,tc,fc))
;
return ((function (switch__40570__auto__,c__40682__auto___41368,tc,fc){
return (function() {
var cljs$core$async$state_machine__40571__auto__ = null;
var cljs$core$async$state_machine__40571__auto____0 = (function (){
var statearr_41360 = [null,null,null,null,null,null,null,null,null];
(statearr_41360[(0)] = cljs$core$async$state_machine__40571__auto__);

(statearr_41360[(1)] = (1));

return statearr_41360;
});
var cljs$core$async$state_machine__40571__auto____1 = (function (state_41339){
while(true){
var ret_value__40572__auto__ = (function (){try{while(true){
var result__40573__auto__ = switch__40570__auto__.call(null,state_41339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40573__auto__;
}
break;
}
}catch (e41361){if((e41361 instanceof Object)){
var ex__40574__auto__ = e41361;
var statearr_41362_41383 = state_41339;
(statearr_41362_41383[(5)] = ex__40574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41384 = state_41339;
state_41339 = G__41384;
continue;
} else {
return ret_value__40572__auto__;
}
break;
}
});
cljs$core$async$state_machine__40571__auto__ = function(state_41339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40571__auto____1.call(this,state_41339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40571__auto____0;
cljs$core$async$state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40571__auto____1;
return cljs$core$async$state_machine__40571__auto__;
})()
;})(switch__40570__auto__,c__40682__auto___41368,tc,fc))
})();
var state__40684__auto__ = (function (){var statearr_41363 = f__40683__auto__.call(null);
(statearr_41363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40682__auto___41368);

return statearr_41363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40684__auto__);
});})(c__40682__auto___41368,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__40682__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40682__auto__){
return (function (){
var f__40683__auto__ = (function (){var switch__40570__auto__ = ((function (c__40682__auto__){
return (function (state_41448){
var state_val_41449 = (state_41448[(1)]);
if((state_val_41449 === (7))){
var inst_41444 = (state_41448[(2)]);
var state_41448__$1 = state_41448;
var statearr_41450_41471 = state_41448__$1;
(statearr_41450_41471[(2)] = inst_41444);

(statearr_41450_41471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41449 === (1))){
var inst_41428 = init;
var state_41448__$1 = (function (){var statearr_41451 = state_41448;
(statearr_41451[(7)] = inst_41428);

return statearr_41451;
})();
var statearr_41452_41477 = state_41448__$1;
(statearr_41452_41477[(2)] = null);

(statearr_41452_41477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41449 === (4))){
var inst_41431 = (state_41448[(8)]);
var inst_41431__$1 = (state_41448[(2)]);
var inst_41432 = (inst_41431__$1 == null);
var state_41448__$1 = (function (){var statearr_41453 = state_41448;
(statearr_41453[(8)] = inst_41431__$1);

return statearr_41453;
})();
if(cljs.core.truth_(inst_41432)){
var statearr_41454_41481 = state_41448__$1;
(statearr_41454_41481[(1)] = (5));

} else {
var statearr_41455_41483 = state_41448__$1;
(statearr_41455_41483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41449 === (6))){
var inst_41428 = (state_41448[(7)]);
var inst_41435 = (state_41448[(9)]);
var inst_41431 = (state_41448[(8)]);
var inst_41435__$1 = f.call(null,inst_41428,inst_41431);
var inst_41436 = cljs.core.reduced_QMARK_.call(null,inst_41435__$1);
var state_41448__$1 = (function (){var statearr_41456 = state_41448;
(statearr_41456[(9)] = inst_41435__$1);

return statearr_41456;
})();
if(inst_41436){
var statearr_41457_41490 = state_41448__$1;
(statearr_41457_41490[(1)] = (8));

} else {
var statearr_41458_41492 = state_41448__$1;
(statearr_41458_41492[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41449 === (3))){
var inst_41446 = (state_41448[(2)]);
var state_41448__$1 = state_41448;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41448__$1,inst_41446);
} else {
if((state_val_41449 === (2))){
var state_41448__$1 = state_41448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41448__$1,(4),ch);
} else {
if((state_val_41449 === (9))){
var inst_41435 = (state_41448[(9)]);
var inst_41428 = inst_41435;
var state_41448__$1 = (function (){var statearr_41459 = state_41448;
(statearr_41459[(7)] = inst_41428);

return statearr_41459;
})();
var statearr_41460_41502 = state_41448__$1;
(statearr_41460_41502[(2)] = null);

(statearr_41460_41502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41449 === (5))){
var inst_41428 = (state_41448[(7)]);
var state_41448__$1 = state_41448;
var statearr_41461_41506 = state_41448__$1;
(statearr_41461_41506[(2)] = inst_41428);

(statearr_41461_41506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41449 === (10))){
var inst_41442 = (state_41448[(2)]);
var state_41448__$1 = state_41448;
var statearr_41462_41509 = state_41448__$1;
(statearr_41462_41509[(2)] = inst_41442);

(statearr_41462_41509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41449 === (8))){
var inst_41435 = (state_41448[(9)]);
var inst_41438 = cljs.core.deref.call(null,inst_41435);
var state_41448__$1 = state_41448;
var statearr_41463_41519 = state_41448__$1;
(statearr_41463_41519[(2)] = inst_41438);

(statearr_41463_41519[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
});})(c__40682__auto__))
;
return ((function (switch__40570__auto__,c__40682__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__40571__auto__ = null;
var cljs$core$async$reduce_$_state_machine__40571__auto____0 = (function (){
var statearr_41467 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41467[(0)] = cljs$core$async$reduce_$_state_machine__40571__auto__);

(statearr_41467[(1)] = (1));

return statearr_41467;
});
var cljs$core$async$reduce_$_state_machine__40571__auto____1 = (function (state_41448){
while(true){
var ret_value__40572__auto__ = (function (){try{while(true){
var result__40573__auto__ = switch__40570__auto__.call(null,state_41448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40573__auto__;
}
break;
}
}catch (e41468){if((e41468 instanceof Object)){
var ex__40574__auto__ = e41468;
var statearr_41469_41531 = state_41448;
(statearr_41469_41531[(5)] = ex__40574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41532 = state_41448;
state_41448 = G__41532;
continue;
} else {
return ret_value__40572__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__40571__auto__ = function(state_41448){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__40571__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__40571__auto____1.call(this,state_41448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__40571__auto____0;
cljs$core$async$reduce_$_state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__40571__auto____1;
return cljs$core$async$reduce_$_state_machine__40571__auto__;
})()
;})(switch__40570__auto__,c__40682__auto__))
})();
var state__40684__auto__ = (function (){var statearr_41470 = f__40683__auto__.call(null);
(statearr_41470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40682__auto__);

return statearr_41470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40684__auto__);
});})(c__40682__auto__))
);

return c__40682__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__40682__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40682__auto__,f__$1){
return (function (){
var f__40683__auto__ = (function (){var switch__40570__auto__ = ((function (c__40682__auto__,f__$1){
return (function (state_41552){
var state_val_41553 = (state_41552[(1)]);
if((state_val_41553 === (1))){
var inst_41547 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_41552__$1 = state_41552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41552__$1,(2),inst_41547);
} else {
if((state_val_41553 === (2))){
var inst_41549 = (state_41552[(2)]);
var inst_41550 = f__$1.call(null,inst_41549);
var state_41552__$1 = state_41552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41552__$1,inst_41550);
} else {
return null;
}
}
});})(c__40682__auto__,f__$1))
;
return ((function (switch__40570__auto__,c__40682__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__40571__auto__ = null;
var cljs$core$async$transduce_$_state_machine__40571__auto____0 = (function (){
var statearr_41557 = [null,null,null,null,null,null,null];
(statearr_41557[(0)] = cljs$core$async$transduce_$_state_machine__40571__auto__);

(statearr_41557[(1)] = (1));

return statearr_41557;
});
var cljs$core$async$transduce_$_state_machine__40571__auto____1 = (function (state_41552){
while(true){
var ret_value__40572__auto__ = (function (){try{while(true){
var result__40573__auto__ = switch__40570__auto__.call(null,state_41552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40573__auto__;
}
break;
}
}catch (e41558){if((e41558 instanceof Object)){
var ex__40574__auto__ = e41558;
var statearr_41559_41561 = state_41552;
(statearr_41559_41561[(5)] = ex__40574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41562 = state_41552;
state_41552 = G__41562;
continue;
} else {
return ret_value__40572__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__40571__auto__ = function(state_41552){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__40571__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__40571__auto____1.call(this,state_41552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__40571__auto____0;
cljs$core$async$transduce_$_state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__40571__auto____1;
return cljs$core$async$transduce_$_state_machine__40571__auto__;
})()
;})(switch__40570__auto__,c__40682__auto__,f__$1))
})();
var state__40684__auto__ = (function (){var statearr_41560 = f__40683__auto__.call(null);
(statearr_41560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40682__auto__);

return statearr_41560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40684__auto__);
});})(c__40682__auto__,f__$1))
);

return c__40682__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args41563 = [];
var len__37879__auto___41615 = arguments.length;
var i__37880__auto___41616 = (0);
while(true){
if((i__37880__auto___41616 < len__37879__auto___41615)){
args41563.push((arguments[i__37880__auto___41616]));

var G__41617 = (i__37880__auto___41616 + (1));
i__37880__auto___41616 = G__41617;
continue;
} else {
}
break;
}

var G__41565 = args41563.length;
switch (G__41565) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41563.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__40682__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40682__auto__){
return (function (){
var f__40683__auto__ = (function (){var switch__40570__auto__ = ((function (c__40682__auto__){
return (function (state_41590){
var state_val_41591 = (state_41590[(1)]);
if((state_val_41591 === (7))){
var inst_41572 = (state_41590[(2)]);
var state_41590__$1 = state_41590;
var statearr_41592_41619 = state_41590__$1;
(statearr_41592_41619[(2)] = inst_41572);

(statearr_41592_41619[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41591 === (1))){
var inst_41566 = cljs.core.seq.call(null,coll);
var inst_41567 = inst_41566;
var state_41590__$1 = (function (){var statearr_41593 = state_41590;
(statearr_41593[(7)] = inst_41567);

return statearr_41593;
})();
var statearr_41594_41620 = state_41590__$1;
(statearr_41594_41620[(2)] = null);

(statearr_41594_41620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41591 === (4))){
var inst_41567 = (state_41590[(7)]);
var inst_41570 = cljs.core.first.call(null,inst_41567);
var state_41590__$1 = state_41590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41590__$1,(7),ch,inst_41570);
} else {
if((state_val_41591 === (13))){
var inst_41584 = (state_41590[(2)]);
var state_41590__$1 = state_41590;
var statearr_41595_41621 = state_41590__$1;
(statearr_41595_41621[(2)] = inst_41584);

(statearr_41595_41621[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41591 === (6))){
var inst_41575 = (state_41590[(2)]);
var state_41590__$1 = state_41590;
if(cljs.core.truth_(inst_41575)){
var statearr_41596_41622 = state_41590__$1;
(statearr_41596_41622[(1)] = (8));

} else {
var statearr_41597_41623 = state_41590__$1;
(statearr_41597_41623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41591 === (3))){
var inst_41588 = (state_41590[(2)]);
var state_41590__$1 = state_41590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41590__$1,inst_41588);
} else {
if((state_val_41591 === (12))){
var state_41590__$1 = state_41590;
var statearr_41598_41624 = state_41590__$1;
(statearr_41598_41624[(2)] = null);

(statearr_41598_41624[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41591 === (2))){
var inst_41567 = (state_41590[(7)]);
var state_41590__$1 = state_41590;
if(cljs.core.truth_(inst_41567)){
var statearr_41599_41625 = state_41590__$1;
(statearr_41599_41625[(1)] = (4));

} else {
var statearr_41600_41626 = state_41590__$1;
(statearr_41600_41626[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41591 === (11))){
var inst_41581 = cljs.core.async.close_BANG_.call(null,ch);
var state_41590__$1 = state_41590;
var statearr_41601_41627 = state_41590__$1;
(statearr_41601_41627[(2)] = inst_41581);

(statearr_41601_41627[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41591 === (9))){
var state_41590__$1 = state_41590;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41602_41628 = state_41590__$1;
(statearr_41602_41628[(1)] = (11));

} else {
var statearr_41603_41629 = state_41590__$1;
(statearr_41603_41629[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41591 === (5))){
var inst_41567 = (state_41590[(7)]);
var state_41590__$1 = state_41590;
var statearr_41604_41630 = state_41590__$1;
(statearr_41604_41630[(2)] = inst_41567);

(statearr_41604_41630[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41591 === (10))){
var inst_41586 = (state_41590[(2)]);
var state_41590__$1 = state_41590;
var statearr_41605_41631 = state_41590__$1;
(statearr_41605_41631[(2)] = inst_41586);

(statearr_41605_41631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41591 === (8))){
var inst_41567 = (state_41590[(7)]);
var inst_41577 = cljs.core.next.call(null,inst_41567);
var inst_41567__$1 = inst_41577;
var state_41590__$1 = (function (){var statearr_41606 = state_41590;
(statearr_41606[(7)] = inst_41567__$1);

return statearr_41606;
})();
var statearr_41607_41632 = state_41590__$1;
(statearr_41607_41632[(2)] = null);

(statearr_41607_41632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
});})(c__40682__auto__))
;
return ((function (switch__40570__auto__,c__40682__auto__){
return (function() {
var cljs$core$async$state_machine__40571__auto__ = null;
var cljs$core$async$state_machine__40571__auto____0 = (function (){
var statearr_41611 = [null,null,null,null,null,null,null,null];
(statearr_41611[(0)] = cljs$core$async$state_machine__40571__auto__);

(statearr_41611[(1)] = (1));

return statearr_41611;
});
var cljs$core$async$state_machine__40571__auto____1 = (function (state_41590){
while(true){
var ret_value__40572__auto__ = (function (){try{while(true){
var result__40573__auto__ = switch__40570__auto__.call(null,state_41590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40573__auto__;
}
break;
}
}catch (e41612){if((e41612 instanceof Object)){
var ex__40574__auto__ = e41612;
var statearr_41613_41633 = state_41590;
(statearr_41613_41633[(5)] = ex__40574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41634 = state_41590;
state_41590 = G__41634;
continue;
} else {
return ret_value__40572__auto__;
}
break;
}
});
cljs$core$async$state_machine__40571__auto__ = function(state_41590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40571__auto____1.call(this,state_41590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40571__auto____0;
cljs$core$async$state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40571__auto____1;
return cljs$core$async$state_machine__40571__auto__;
})()
;})(switch__40570__auto__,c__40682__auto__))
})();
var state__40684__auto__ = (function (){var statearr_41614 = f__40683__auto__.call(null);
(statearr_41614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40682__auto__);

return statearr_41614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40684__auto__);
});})(c__40682__auto__))
);

return c__40682__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__37467__auto__ = (((_ == null))?null:_);
var m__37468__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__37467__auto__)]);
if(!((m__37468__auto__ == null))){
return m__37468__auto__.call(null,_);
} else {
var m__37468__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__37468__auto____$1 == null))){
return m__37468__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__37467__auto__ = (((m == null))?null:m);
var m__37468__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__37467__auto__)]);
if(!((m__37468__auto__ == null))){
return m__37468__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__37468__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__37468__auto____$1 == null))){
return m__37468__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__37467__auto__ = (((m == null))?null:m);
var m__37468__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__37467__auto__)]);
if(!((m__37468__auto__ == null))){
return m__37468__auto__.call(null,m,ch);
} else {
var m__37468__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__37468__auto____$1 == null))){
return m__37468__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__37467__auto__ = (((m == null))?null:m);
var m__37468__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__37467__auto__)]);
if(!((m__37468__auto__ == null))){
return m__37468__auto__.call(null,m);
} else {
var m__37468__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__37468__auto____$1 == null))){
return m__37468__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async41860 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41860 = (function (mult,ch,cs,meta41861){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta41861 = meta41861;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_41862,meta41861__$1){
var self__ = this;
var _41862__$1 = this;
return (new cljs.core.async.t_cljs$core$async41860(self__.mult,self__.ch,self__.cs,meta41861__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async41860.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_41862){
var self__ = this;
var _41862__$1 = this;
return self__.meta41861;
});})(cs))
;

cljs.core.async.t_cljs$core$async41860.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async41860.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async41860.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async41860.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41860.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41860.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41860.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta41861","meta41861",-1063960854,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async41860.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41860.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41860";

cljs.core.async.t_cljs$core$async41860.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__37410__auto__,writer__37411__auto__,opt__37412__auto__){
return cljs.core._write.call(null,writer__37411__auto__,"cljs.core.async/t_cljs$core$async41860");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async41860 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async41860(mult__$1,ch__$1,cs__$1,meta41861){
return (new cljs.core.async.t_cljs$core$async41860(mult__$1,ch__$1,cs__$1,meta41861));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async41860(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__40682__auto___42085 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40682__auto___42085,cs,m,dchan,dctr,done){
return (function (){
var f__40683__auto__ = (function (){var switch__40570__auto__ = ((function (c__40682__auto___42085,cs,m,dchan,dctr,done){
return (function (state_41997){
var state_val_41998 = (state_41997[(1)]);
if((state_val_41998 === (7))){
var inst_41993 = (state_41997[(2)]);
var state_41997__$1 = state_41997;
var statearr_41999_42086 = state_41997__$1;
(statearr_41999_42086[(2)] = inst_41993);

(statearr_41999_42086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (20))){
var inst_41896 = (state_41997[(7)]);
var inst_41908 = cljs.core.first.call(null,inst_41896);
var inst_41909 = cljs.core.nth.call(null,inst_41908,(0),null);
var inst_41910 = cljs.core.nth.call(null,inst_41908,(1),null);
var state_41997__$1 = (function (){var statearr_42000 = state_41997;
(statearr_42000[(8)] = inst_41909);

return statearr_42000;
})();
if(cljs.core.truth_(inst_41910)){
var statearr_42001_42087 = state_41997__$1;
(statearr_42001_42087[(1)] = (22));

} else {
var statearr_42002_42088 = state_41997__$1;
(statearr_42002_42088[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (27))){
var inst_41865 = (state_41997[(9)]);
var inst_41938 = (state_41997[(10)]);
var inst_41945 = (state_41997[(11)]);
var inst_41940 = (state_41997[(12)]);
var inst_41945__$1 = cljs.core._nth.call(null,inst_41938,inst_41940);
var inst_41946 = cljs.core.async.put_BANG_.call(null,inst_41945__$1,inst_41865,done);
var state_41997__$1 = (function (){var statearr_42003 = state_41997;
(statearr_42003[(11)] = inst_41945__$1);

return statearr_42003;
})();
if(cljs.core.truth_(inst_41946)){
var statearr_42004_42089 = state_41997__$1;
(statearr_42004_42089[(1)] = (30));

} else {
var statearr_42005_42090 = state_41997__$1;
(statearr_42005_42090[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (1))){
var state_41997__$1 = state_41997;
var statearr_42006_42091 = state_41997__$1;
(statearr_42006_42091[(2)] = null);

(statearr_42006_42091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (24))){
var inst_41896 = (state_41997[(7)]);
var inst_41915 = (state_41997[(2)]);
var inst_41916 = cljs.core.next.call(null,inst_41896);
var inst_41874 = inst_41916;
var inst_41875 = null;
var inst_41876 = (0);
var inst_41877 = (0);
var state_41997__$1 = (function (){var statearr_42007 = state_41997;
(statearr_42007[(13)] = inst_41877);

(statearr_42007[(14)] = inst_41915);

(statearr_42007[(15)] = inst_41876);

(statearr_42007[(16)] = inst_41875);

(statearr_42007[(17)] = inst_41874);

return statearr_42007;
})();
var statearr_42008_42092 = state_41997__$1;
(statearr_42008_42092[(2)] = null);

(statearr_42008_42092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (39))){
var state_41997__$1 = state_41997;
var statearr_42012_42093 = state_41997__$1;
(statearr_42012_42093[(2)] = null);

(statearr_42012_42093[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (4))){
var inst_41865 = (state_41997[(9)]);
var inst_41865__$1 = (state_41997[(2)]);
var inst_41866 = (inst_41865__$1 == null);
var state_41997__$1 = (function (){var statearr_42013 = state_41997;
(statearr_42013[(9)] = inst_41865__$1);

return statearr_42013;
})();
if(cljs.core.truth_(inst_41866)){
var statearr_42014_42094 = state_41997__$1;
(statearr_42014_42094[(1)] = (5));

} else {
var statearr_42015_42095 = state_41997__$1;
(statearr_42015_42095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (15))){
var inst_41877 = (state_41997[(13)]);
var inst_41876 = (state_41997[(15)]);
var inst_41875 = (state_41997[(16)]);
var inst_41874 = (state_41997[(17)]);
var inst_41892 = (state_41997[(2)]);
var inst_41893 = (inst_41877 + (1));
var tmp42009 = inst_41876;
var tmp42010 = inst_41875;
var tmp42011 = inst_41874;
var inst_41874__$1 = tmp42011;
var inst_41875__$1 = tmp42010;
var inst_41876__$1 = tmp42009;
var inst_41877__$1 = inst_41893;
var state_41997__$1 = (function (){var statearr_42016 = state_41997;
(statearr_42016[(13)] = inst_41877__$1);

(statearr_42016[(18)] = inst_41892);

(statearr_42016[(15)] = inst_41876__$1);

(statearr_42016[(16)] = inst_41875__$1);

(statearr_42016[(17)] = inst_41874__$1);

return statearr_42016;
})();
var statearr_42017_42096 = state_41997__$1;
(statearr_42017_42096[(2)] = null);

(statearr_42017_42096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (21))){
var inst_41919 = (state_41997[(2)]);
var state_41997__$1 = state_41997;
var statearr_42021_42097 = state_41997__$1;
(statearr_42021_42097[(2)] = inst_41919);

(statearr_42021_42097[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (31))){
var inst_41945 = (state_41997[(11)]);
var inst_41949 = done.call(null,null);
var inst_41950 = cljs.core.async.untap_STAR_.call(null,m,inst_41945);
var state_41997__$1 = (function (){var statearr_42022 = state_41997;
(statearr_42022[(19)] = inst_41949);

return statearr_42022;
})();
var statearr_42023_42098 = state_41997__$1;
(statearr_42023_42098[(2)] = inst_41950);

(statearr_42023_42098[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (32))){
var inst_41938 = (state_41997[(10)]);
var inst_41940 = (state_41997[(12)]);
var inst_41937 = (state_41997[(20)]);
var inst_41939 = (state_41997[(21)]);
var inst_41952 = (state_41997[(2)]);
var inst_41953 = (inst_41940 + (1));
var tmp42018 = inst_41938;
var tmp42019 = inst_41937;
var tmp42020 = inst_41939;
var inst_41937__$1 = tmp42019;
var inst_41938__$1 = tmp42018;
var inst_41939__$1 = tmp42020;
var inst_41940__$1 = inst_41953;
var state_41997__$1 = (function (){var statearr_42024 = state_41997;
(statearr_42024[(22)] = inst_41952);

(statearr_42024[(10)] = inst_41938__$1);

(statearr_42024[(12)] = inst_41940__$1);

(statearr_42024[(20)] = inst_41937__$1);

(statearr_42024[(21)] = inst_41939__$1);

return statearr_42024;
})();
var statearr_42025_42099 = state_41997__$1;
(statearr_42025_42099[(2)] = null);

(statearr_42025_42099[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (40))){
var inst_41965 = (state_41997[(23)]);
var inst_41969 = done.call(null,null);
var inst_41970 = cljs.core.async.untap_STAR_.call(null,m,inst_41965);
var state_41997__$1 = (function (){var statearr_42026 = state_41997;
(statearr_42026[(24)] = inst_41969);

return statearr_42026;
})();
var statearr_42027_42100 = state_41997__$1;
(statearr_42027_42100[(2)] = inst_41970);

(statearr_42027_42100[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (33))){
var inst_41956 = (state_41997[(25)]);
var inst_41958 = cljs.core.chunked_seq_QMARK_.call(null,inst_41956);
var state_41997__$1 = state_41997;
if(inst_41958){
var statearr_42028_42101 = state_41997__$1;
(statearr_42028_42101[(1)] = (36));

} else {
var statearr_42029_42102 = state_41997__$1;
(statearr_42029_42102[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (13))){
var inst_41886 = (state_41997[(26)]);
var inst_41889 = cljs.core.async.close_BANG_.call(null,inst_41886);
var state_41997__$1 = state_41997;
var statearr_42030_42103 = state_41997__$1;
(statearr_42030_42103[(2)] = inst_41889);

(statearr_42030_42103[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (22))){
var inst_41909 = (state_41997[(8)]);
var inst_41912 = cljs.core.async.close_BANG_.call(null,inst_41909);
var state_41997__$1 = state_41997;
var statearr_42031_42104 = state_41997__$1;
(statearr_42031_42104[(2)] = inst_41912);

(statearr_42031_42104[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (36))){
var inst_41956 = (state_41997[(25)]);
var inst_41960 = cljs.core.chunk_first.call(null,inst_41956);
var inst_41961 = cljs.core.chunk_rest.call(null,inst_41956);
var inst_41962 = cljs.core.count.call(null,inst_41960);
var inst_41937 = inst_41961;
var inst_41938 = inst_41960;
var inst_41939 = inst_41962;
var inst_41940 = (0);
var state_41997__$1 = (function (){var statearr_42032 = state_41997;
(statearr_42032[(10)] = inst_41938);

(statearr_42032[(12)] = inst_41940);

(statearr_42032[(20)] = inst_41937);

(statearr_42032[(21)] = inst_41939);

return statearr_42032;
})();
var statearr_42033_42105 = state_41997__$1;
(statearr_42033_42105[(2)] = null);

(statearr_42033_42105[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (41))){
var inst_41956 = (state_41997[(25)]);
var inst_41972 = (state_41997[(2)]);
var inst_41973 = cljs.core.next.call(null,inst_41956);
var inst_41937 = inst_41973;
var inst_41938 = null;
var inst_41939 = (0);
var inst_41940 = (0);
var state_41997__$1 = (function (){var statearr_42034 = state_41997;
(statearr_42034[(10)] = inst_41938);

(statearr_42034[(12)] = inst_41940);

(statearr_42034[(20)] = inst_41937);

(statearr_42034[(27)] = inst_41972);

(statearr_42034[(21)] = inst_41939);

return statearr_42034;
})();
var statearr_42035_42106 = state_41997__$1;
(statearr_42035_42106[(2)] = null);

(statearr_42035_42106[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (43))){
var state_41997__$1 = state_41997;
var statearr_42036_42107 = state_41997__$1;
(statearr_42036_42107[(2)] = null);

(statearr_42036_42107[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (29))){
var inst_41981 = (state_41997[(2)]);
var state_41997__$1 = state_41997;
var statearr_42037_42108 = state_41997__$1;
(statearr_42037_42108[(2)] = inst_41981);

(statearr_42037_42108[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (44))){
var inst_41990 = (state_41997[(2)]);
var state_41997__$1 = (function (){var statearr_42038 = state_41997;
(statearr_42038[(28)] = inst_41990);

return statearr_42038;
})();
var statearr_42039_42109 = state_41997__$1;
(statearr_42039_42109[(2)] = null);

(statearr_42039_42109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (6))){
var inst_41929 = (state_41997[(29)]);
var inst_41928 = cljs.core.deref.call(null,cs);
var inst_41929__$1 = cljs.core.keys.call(null,inst_41928);
var inst_41930 = cljs.core.count.call(null,inst_41929__$1);
var inst_41931 = cljs.core.reset_BANG_.call(null,dctr,inst_41930);
var inst_41936 = cljs.core.seq.call(null,inst_41929__$1);
var inst_41937 = inst_41936;
var inst_41938 = null;
var inst_41939 = (0);
var inst_41940 = (0);
var state_41997__$1 = (function (){var statearr_42040 = state_41997;
(statearr_42040[(29)] = inst_41929__$1);

(statearr_42040[(10)] = inst_41938);

(statearr_42040[(12)] = inst_41940);

(statearr_42040[(20)] = inst_41937);

(statearr_42040[(30)] = inst_41931);

(statearr_42040[(21)] = inst_41939);

return statearr_42040;
})();
var statearr_42041_42110 = state_41997__$1;
(statearr_42041_42110[(2)] = null);

(statearr_42041_42110[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (28))){
var inst_41937 = (state_41997[(20)]);
var inst_41956 = (state_41997[(25)]);
var inst_41956__$1 = cljs.core.seq.call(null,inst_41937);
var state_41997__$1 = (function (){var statearr_42042 = state_41997;
(statearr_42042[(25)] = inst_41956__$1);

return statearr_42042;
})();
if(inst_41956__$1){
var statearr_42043_42111 = state_41997__$1;
(statearr_42043_42111[(1)] = (33));

} else {
var statearr_42044_42112 = state_41997__$1;
(statearr_42044_42112[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (25))){
var inst_41940 = (state_41997[(12)]);
var inst_41939 = (state_41997[(21)]);
var inst_41942 = (inst_41940 < inst_41939);
var inst_41943 = inst_41942;
var state_41997__$1 = state_41997;
if(cljs.core.truth_(inst_41943)){
var statearr_42045_42113 = state_41997__$1;
(statearr_42045_42113[(1)] = (27));

} else {
var statearr_42046_42114 = state_41997__$1;
(statearr_42046_42114[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (34))){
var state_41997__$1 = state_41997;
var statearr_42047_42115 = state_41997__$1;
(statearr_42047_42115[(2)] = null);

(statearr_42047_42115[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (17))){
var state_41997__$1 = state_41997;
var statearr_42048_42116 = state_41997__$1;
(statearr_42048_42116[(2)] = null);

(statearr_42048_42116[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (3))){
var inst_41995 = (state_41997[(2)]);
var state_41997__$1 = state_41997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41997__$1,inst_41995);
} else {
if((state_val_41998 === (12))){
var inst_41924 = (state_41997[(2)]);
var state_41997__$1 = state_41997;
var statearr_42049_42117 = state_41997__$1;
(statearr_42049_42117[(2)] = inst_41924);

(statearr_42049_42117[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (2))){
var state_41997__$1 = state_41997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41997__$1,(4),ch);
} else {
if((state_val_41998 === (23))){
var state_41997__$1 = state_41997;
var statearr_42050_42118 = state_41997__$1;
(statearr_42050_42118[(2)] = null);

(statearr_42050_42118[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (35))){
var inst_41979 = (state_41997[(2)]);
var state_41997__$1 = state_41997;
var statearr_42051_42119 = state_41997__$1;
(statearr_42051_42119[(2)] = inst_41979);

(statearr_42051_42119[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (19))){
var inst_41896 = (state_41997[(7)]);
var inst_41900 = cljs.core.chunk_first.call(null,inst_41896);
var inst_41901 = cljs.core.chunk_rest.call(null,inst_41896);
var inst_41902 = cljs.core.count.call(null,inst_41900);
var inst_41874 = inst_41901;
var inst_41875 = inst_41900;
var inst_41876 = inst_41902;
var inst_41877 = (0);
var state_41997__$1 = (function (){var statearr_42052 = state_41997;
(statearr_42052[(13)] = inst_41877);

(statearr_42052[(15)] = inst_41876);

(statearr_42052[(16)] = inst_41875);

(statearr_42052[(17)] = inst_41874);

return statearr_42052;
})();
var statearr_42053_42120 = state_41997__$1;
(statearr_42053_42120[(2)] = null);

(statearr_42053_42120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (11))){
var inst_41896 = (state_41997[(7)]);
var inst_41874 = (state_41997[(17)]);
var inst_41896__$1 = cljs.core.seq.call(null,inst_41874);
var state_41997__$1 = (function (){var statearr_42054 = state_41997;
(statearr_42054[(7)] = inst_41896__$1);

return statearr_42054;
})();
if(inst_41896__$1){
var statearr_42055_42121 = state_41997__$1;
(statearr_42055_42121[(1)] = (16));

} else {
var statearr_42056_42122 = state_41997__$1;
(statearr_42056_42122[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (9))){
var inst_41926 = (state_41997[(2)]);
var state_41997__$1 = state_41997;
var statearr_42057_42123 = state_41997__$1;
(statearr_42057_42123[(2)] = inst_41926);

(statearr_42057_42123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (5))){
var inst_41872 = cljs.core.deref.call(null,cs);
var inst_41873 = cljs.core.seq.call(null,inst_41872);
var inst_41874 = inst_41873;
var inst_41875 = null;
var inst_41876 = (0);
var inst_41877 = (0);
var state_41997__$1 = (function (){var statearr_42058 = state_41997;
(statearr_42058[(13)] = inst_41877);

(statearr_42058[(15)] = inst_41876);

(statearr_42058[(16)] = inst_41875);

(statearr_42058[(17)] = inst_41874);

return statearr_42058;
})();
var statearr_42059_42124 = state_41997__$1;
(statearr_42059_42124[(2)] = null);

(statearr_42059_42124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (14))){
var state_41997__$1 = state_41997;
var statearr_42060_42125 = state_41997__$1;
(statearr_42060_42125[(2)] = null);

(statearr_42060_42125[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (45))){
var inst_41987 = (state_41997[(2)]);
var state_41997__$1 = state_41997;
var statearr_42061_42126 = state_41997__$1;
(statearr_42061_42126[(2)] = inst_41987);

(statearr_42061_42126[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (26))){
var inst_41929 = (state_41997[(29)]);
var inst_41983 = (state_41997[(2)]);
var inst_41984 = cljs.core.seq.call(null,inst_41929);
var state_41997__$1 = (function (){var statearr_42062 = state_41997;
(statearr_42062[(31)] = inst_41983);

return statearr_42062;
})();
if(inst_41984){
var statearr_42063_42127 = state_41997__$1;
(statearr_42063_42127[(1)] = (42));

} else {
var statearr_42064_42128 = state_41997__$1;
(statearr_42064_42128[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (16))){
var inst_41896 = (state_41997[(7)]);
var inst_41898 = cljs.core.chunked_seq_QMARK_.call(null,inst_41896);
var state_41997__$1 = state_41997;
if(inst_41898){
var statearr_42065_42129 = state_41997__$1;
(statearr_42065_42129[(1)] = (19));

} else {
var statearr_42066_42130 = state_41997__$1;
(statearr_42066_42130[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (38))){
var inst_41976 = (state_41997[(2)]);
var state_41997__$1 = state_41997;
var statearr_42067_42131 = state_41997__$1;
(statearr_42067_42131[(2)] = inst_41976);

(statearr_42067_42131[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (30))){
var state_41997__$1 = state_41997;
var statearr_42068_42132 = state_41997__$1;
(statearr_42068_42132[(2)] = null);

(statearr_42068_42132[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (10))){
var inst_41877 = (state_41997[(13)]);
var inst_41875 = (state_41997[(16)]);
var inst_41885 = cljs.core._nth.call(null,inst_41875,inst_41877);
var inst_41886 = cljs.core.nth.call(null,inst_41885,(0),null);
var inst_41887 = cljs.core.nth.call(null,inst_41885,(1),null);
var state_41997__$1 = (function (){var statearr_42069 = state_41997;
(statearr_42069[(26)] = inst_41886);

return statearr_42069;
})();
if(cljs.core.truth_(inst_41887)){
var statearr_42070_42133 = state_41997__$1;
(statearr_42070_42133[(1)] = (13));

} else {
var statearr_42071_42134 = state_41997__$1;
(statearr_42071_42134[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (18))){
var inst_41922 = (state_41997[(2)]);
var state_41997__$1 = state_41997;
var statearr_42072_42135 = state_41997__$1;
(statearr_42072_42135[(2)] = inst_41922);

(statearr_42072_42135[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (42))){
var state_41997__$1 = state_41997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41997__$1,(45),dchan);
} else {
if((state_val_41998 === (37))){
var inst_41865 = (state_41997[(9)]);
var inst_41965 = (state_41997[(23)]);
var inst_41956 = (state_41997[(25)]);
var inst_41965__$1 = cljs.core.first.call(null,inst_41956);
var inst_41966 = cljs.core.async.put_BANG_.call(null,inst_41965__$1,inst_41865,done);
var state_41997__$1 = (function (){var statearr_42073 = state_41997;
(statearr_42073[(23)] = inst_41965__$1);

return statearr_42073;
})();
if(cljs.core.truth_(inst_41966)){
var statearr_42074_42136 = state_41997__$1;
(statearr_42074_42136[(1)] = (39));

} else {
var statearr_42075_42137 = state_41997__$1;
(statearr_42075_42137[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (8))){
var inst_41877 = (state_41997[(13)]);
var inst_41876 = (state_41997[(15)]);
var inst_41879 = (inst_41877 < inst_41876);
var inst_41880 = inst_41879;
var state_41997__$1 = state_41997;
if(cljs.core.truth_(inst_41880)){
var statearr_42076_42138 = state_41997__$1;
(statearr_42076_42138[(1)] = (10));

} else {
var statearr_42077_42139 = state_41997__$1;
(statearr_42077_42139[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40682__auto___42085,cs,m,dchan,dctr,done))
;
return ((function (switch__40570__auto__,c__40682__auto___42085,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__40571__auto__ = null;
var cljs$core$async$mult_$_state_machine__40571__auto____0 = (function (){
var statearr_42081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42081[(0)] = cljs$core$async$mult_$_state_machine__40571__auto__);

(statearr_42081[(1)] = (1));

return statearr_42081;
});
var cljs$core$async$mult_$_state_machine__40571__auto____1 = (function (state_41997){
while(true){
var ret_value__40572__auto__ = (function (){try{while(true){
var result__40573__auto__ = switch__40570__auto__.call(null,state_41997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40573__auto__;
}
break;
}
}catch (e42082){if((e42082 instanceof Object)){
var ex__40574__auto__ = e42082;
var statearr_42083_42140 = state_41997;
(statearr_42083_42140[(5)] = ex__40574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42141 = state_41997;
state_41997 = G__42141;
continue;
} else {
return ret_value__40572__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__40571__auto__ = function(state_41997){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__40571__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__40571__auto____1.call(this,state_41997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__40571__auto____0;
cljs$core$async$mult_$_state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__40571__auto____1;
return cljs$core$async$mult_$_state_machine__40571__auto__;
})()
;})(switch__40570__auto__,c__40682__auto___42085,cs,m,dchan,dctr,done))
})();
var state__40684__auto__ = (function (){var statearr_42084 = f__40683__auto__.call(null);
(statearr_42084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40682__auto___42085);

return statearr_42084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40684__auto__);
});})(c__40682__auto___42085,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args42142 = [];
var len__37879__auto___42145 = arguments.length;
var i__37880__auto___42146 = (0);
while(true){
if((i__37880__auto___42146 < len__37879__auto___42145)){
args42142.push((arguments[i__37880__auto___42146]));

var G__42147 = (i__37880__auto___42146 + (1));
i__37880__auto___42146 = G__42147;
continue;
} else {
}
break;
}

var G__42144 = args42142.length;
switch (G__42144) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42142.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__37467__auto__ = (((m == null))?null:m);
var m__37468__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__37467__auto__)]);
if(!((m__37468__auto__ == null))){
return m__37468__auto__.call(null,m,ch);
} else {
var m__37468__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__37468__auto____$1 == null))){
return m__37468__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__37467__auto__ = (((m == null))?null:m);
var m__37468__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__37467__auto__)]);
if(!((m__37468__auto__ == null))){
return m__37468__auto__.call(null,m,ch);
} else {
var m__37468__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__37468__auto____$1 == null))){
return m__37468__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__37467__auto__ = (((m == null))?null:m);
var m__37468__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__37467__auto__)]);
if(!((m__37468__auto__ == null))){
return m__37468__auto__.call(null,m);
} else {
var m__37468__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__37468__auto____$1 == null))){
return m__37468__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__37467__auto__ = (((m == null))?null:m);
var m__37468__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__37467__auto__)]);
if(!((m__37468__auto__ == null))){
return m__37468__auto__.call(null,m,state_map);
} else {
var m__37468__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__37468__auto____$1 == null))){
return m__37468__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__37467__auto__ = (((m == null))?null:m);
var m__37468__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__37467__auto__)]);
if(!((m__37468__auto__ == null))){
return m__37468__auto__.call(null,m,mode);
} else {
var m__37468__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__37468__auto____$1 == null))){
return m__37468__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__37886__auto__ = [];
var len__37879__auto___42159 = arguments.length;
var i__37880__auto___42160 = (0);
while(true){
if((i__37880__auto___42160 < len__37879__auto___42159)){
args__37886__auto__.push((arguments[i__37880__auto___42160]));

var G__42161 = (i__37880__auto___42160 + (1));
i__37880__auto___42160 = G__42161;
continue;
} else {
}
break;
}

var argseq__37887__auto__ = ((((3) < args__37886__auto__.length))?(new cljs.core.IndexedSeq(args__37886__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37887__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__42153){
var map__42154 = p__42153;
var map__42154__$1 = ((((!((map__42154 == null)))?((((map__42154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42154):map__42154);
var opts = map__42154__$1;
var statearr_42156_42162 = state;
(statearr_42156_42162[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__42154,map__42154__$1,opts){
return (function (val){
var statearr_42157_42163 = state;
(statearr_42157_42163[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__42154,map__42154__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_42158_42164 = state;
(statearr_42158_42164[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq42149){
var G__42150 = cljs.core.first.call(null,seq42149);
var seq42149__$1 = cljs.core.next.call(null,seq42149);
var G__42151 = cljs.core.first.call(null,seq42149__$1);
var seq42149__$2 = cljs.core.next.call(null,seq42149__$1);
var G__42152 = cljs.core.first.call(null,seq42149__$2);
var seq42149__$3 = cljs.core.next.call(null,seq42149__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42150,G__42151,G__42152,seq42149__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async42330 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42330 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta42331){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta42331 = meta42331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42332,meta42331__$1){
var self__ = this;
var _42332__$1 = this;
return (new cljs.core.async.t_cljs$core$async42330(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta42331__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42330.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42332){
var self__ = this;
var _42332__$1 = this;
return self__.meta42331;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42330.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async42330.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42330.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async42330.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42330.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42330.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42330.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42330.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42330.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta42331","meta42331",-24502437,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42330.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42330.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42330";

cljs.core.async.t_cljs$core$async42330.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__37410__auto__,writer__37411__auto__,opt__37412__auto__){
return cljs.core._write.call(null,writer__37411__auto__,"cljs.core.async/t_cljs$core$async42330");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async42330 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async42330(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42331){
return (new cljs.core.async.t_cljs$core$async42330(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42331));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async42330(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40682__auto___42495 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40682__auto___42495,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__40683__auto__ = (function (){var switch__40570__auto__ = ((function (c__40682__auto___42495,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_42432){
var state_val_42433 = (state_42432[(1)]);
if((state_val_42433 === (7))){
var inst_42348 = (state_42432[(2)]);
var state_42432__$1 = state_42432;
var statearr_42434_42496 = state_42432__$1;
(statearr_42434_42496[(2)] = inst_42348);

(statearr_42434_42496[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (20))){
var inst_42360 = (state_42432[(7)]);
var state_42432__$1 = state_42432;
var statearr_42435_42497 = state_42432__$1;
(statearr_42435_42497[(2)] = inst_42360);

(statearr_42435_42497[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (27))){
var state_42432__$1 = state_42432;
var statearr_42436_42498 = state_42432__$1;
(statearr_42436_42498[(2)] = null);

(statearr_42436_42498[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (1))){
var inst_42336 = (state_42432[(8)]);
var inst_42336__$1 = calc_state.call(null);
var inst_42338 = (inst_42336__$1 == null);
var inst_42339 = cljs.core.not.call(null,inst_42338);
var state_42432__$1 = (function (){var statearr_42437 = state_42432;
(statearr_42437[(8)] = inst_42336__$1);

return statearr_42437;
})();
if(inst_42339){
var statearr_42438_42499 = state_42432__$1;
(statearr_42438_42499[(1)] = (2));

} else {
var statearr_42439_42500 = state_42432__$1;
(statearr_42439_42500[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (24))){
var inst_42406 = (state_42432[(9)]);
var inst_42383 = (state_42432[(10)]);
var inst_42392 = (state_42432[(11)]);
var inst_42406__$1 = inst_42383.call(null,inst_42392);
var state_42432__$1 = (function (){var statearr_42440 = state_42432;
(statearr_42440[(9)] = inst_42406__$1);

return statearr_42440;
})();
if(cljs.core.truth_(inst_42406__$1)){
var statearr_42441_42501 = state_42432__$1;
(statearr_42441_42501[(1)] = (29));

} else {
var statearr_42442_42502 = state_42432__$1;
(statearr_42442_42502[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (4))){
var inst_42351 = (state_42432[(2)]);
var state_42432__$1 = state_42432;
if(cljs.core.truth_(inst_42351)){
var statearr_42443_42503 = state_42432__$1;
(statearr_42443_42503[(1)] = (8));

} else {
var statearr_42444_42504 = state_42432__$1;
(statearr_42444_42504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (15))){
var inst_42377 = (state_42432[(2)]);
var state_42432__$1 = state_42432;
if(cljs.core.truth_(inst_42377)){
var statearr_42445_42505 = state_42432__$1;
(statearr_42445_42505[(1)] = (19));

} else {
var statearr_42446_42506 = state_42432__$1;
(statearr_42446_42506[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (21))){
var inst_42382 = (state_42432[(12)]);
var inst_42382__$1 = (state_42432[(2)]);
var inst_42383 = cljs.core.get.call(null,inst_42382__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42384 = cljs.core.get.call(null,inst_42382__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42385 = cljs.core.get.call(null,inst_42382__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_42432__$1 = (function (){var statearr_42447 = state_42432;
(statearr_42447[(13)] = inst_42384);

(statearr_42447[(12)] = inst_42382__$1);

(statearr_42447[(10)] = inst_42383);

return statearr_42447;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_42432__$1,(22),inst_42385);
} else {
if((state_val_42433 === (31))){
var inst_42414 = (state_42432[(2)]);
var state_42432__$1 = state_42432;
if(cljs.core.truth_(inst_42414)){
var statearr_42448_42507 = state_42432__$1;
(statearr_42448_42507[(1)] = (32));

} else {
var statearr_42449_42508 = state_42432__$1;
(statearr_42449_42508[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (32))){
var inst_42391 = (state_42432[(14)]);
var state_42432__$1 = state_42432;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42432__$1,(35),out,inst_42391);
} else {
if((state_val_42433 === (33))){
var inst_42382 = (state_42432[(12)]);
var inst_42360 = inst_42382;
var state_42432__$1 = (function (){var statearr_42450 = state_42432;
(statearr_42450[(7)] = inst_42360);

return statearr_42450;
})();
var statearr_42451_42509 = state_42432__$1;
(statearr_42451_42509[(2)] = null);

(statearr_42451_42509[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (13))){
var inst_42360 = (state_42432[(7)]);
var inst_42367 = inst_42360.cljs$lang$protocol_mask$partition0$;
var inst_42368 = (inst_42367 & (64));
var inst_42369 = inst_42360.cljs$core$ISeq$;
var inst_42370 = (inst_42368) || (inst_42369);
var state_42432__$1 = state_42432;
if(cljs.core.truth_(inst_42370)){
var statearr_42452_42510 = state_42432__$1;
(statearr_42452_42510[(1)] = (16));

} else {
var statearr_42453_42511 = state_42432__$1;
(statearr_42453_42511[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (22))){
var inst_42391 = (state_42432[(14)]);
var inst_42392 = (state_42432[(11)]);
var inst_42390 = (state_42432[(2)]);
var inst_42391__$1 = cljs.core.nth.call(null,inst_42390,(0),null);
var inst_42392__$1 = cljs.core.nth.call(null,inst_42390,(1),null);
var inst_42393 = (inst_42391__$1 == null);
var inst_42394 = cljs.core._EQ_.call(null,inst_42392__$1,change);
var inst_42395 = (inst_42393) || (inst_42394);
var state_42432__$1 = (function (){var statearr_42454 = state_42432;
(statearr_42454[(14)] = inst_42391__$1);

(statearr_42454[(11)] = inst_42392__$1);

return statearr_42454;
})();
if(cljs.core.truth_(inst_42395)){
var statearr_42455_42512 = state_42432__$1;
(statearr_42455_42512[(1)] = (23));

} else {
var statearr_42456_42513 = state_42432__$1;
(statearr_42456_42513[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (36))){
var inst_42382 = (state_42432[(12)]);
var inst_42360 = inst_42382;
var state_42432__$1 = (function (){var statearr_42457 = state_42432;
(statearr_42457[(7)] = inst_42360);

return statearr_42457;
})();
var statearr_42458_42514 = state_42432__$1;
(statearr_42458_42514[(2)] = null);

(statearr_42458_42514[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (29))){
var inst_42406 = (state_42432[(9)]);
var state_42432__$1 = state_42432;
var statearr_42459_42515 = state_42432__$1;
(statearr_42459_42515[(2)] = inst_42406);

(statearr_42459_42515[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (6))){
var state_42432__$1 = state_42432;
var statearr_42460_42516 = state_42432__$1;
(statearr_42460_42516[(2)] = false);

(statearr_42460_42516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (28))){
var inst_42402 = (state_42432[(2)]);
var inst_42403 = calc_state.call(null);
var inst_42360 = inst_42403;
var state_42432__$1 = (function (){var statearr_42461 = state_42432;
(statearr_42461[(7)] = inst_42360);

(statearr_42461[(15)] = inst_42402);

return statearr_42461;
})();
var statearr_42462_42517 = state_42432__$1;
(statearr_42462_42517[(2)] = null);

(statearr_42462_42517[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (25))){
var inst_42428 = (state_42432[(2)]);
var state_42432__$1 = state_42432;
var statearr_42463_42518 = state_42432__$1;
(statearr_42463_42518[(2)] = inst_42428);

(statearr_42463_42518[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (34))){
var inst_42426 = (state_42432[(2)]);
var state_42432__$1 = state_42432;
var statearr_42464_42519 = state_42432__$1;
(statearr_42464_42519[(2)] = inst_42426);

(statearr_42464_42519[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (17))){
var state_42432__$1 = state_42432;
var statearr_42465_42520 = state_42432__$1;
(statearr_42465_42520[(2)] = false);

(statearr_42465_42520[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (3))){
var state_42432__$1 = state_42432;
var statearr_42466_42521 = state_42432__$1;
(statearr_42466_42521[(2)] = false);

(statearr_42466_42521[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (12))){
var inst_42430 = (state_42432[(2)]);
var state_42432__$1 = state_42432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42432__$1,inst_42430);
} else {
if((state_val_42433 === (2))){
var inst_42336 = (state_42432[(8)]);
var inst_42341 = inst_42336.cljs$lang$protocol_mask$partition0$;
var inst_42342 = (inst_42341 & (64));
var inst_42343 = inst_42336.cljs$core$ISeq$;
var inst_42344 = (inst_42342) || (inst_42343);
var state_42432__$1 = state_42432;
if(cljs.core.truth_(inst_42344)){
var statearr_42467_42522 = state_42432__$1;
(statearr_42467_42522[(1)] = (5));

} else {
var statearr_42468_42523 = state_42432__$1;
(statearr_42468_42523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (23))){
var inst_42391 = (state_42432[(14)]);
var inst_42397 = (inst_42391 == null);
var state_42432__$1 = state_42432;
if(cljs.core.truth_(inst_42397)){
var statearr_42469_42524 = state_42432__$1;
(statearr_42469_42524[(1)] = (26));

} else {
var statearr_42470_42525 = state_42432__$1;
(statearr_42470_42525[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (35))){
var inst_42417 = (state_42432[(2)]);
var state_42432__$1 = state_42432;
if(cljs.core.truth_(inst_42417)){
var statearr_42471_42526 = state_42432__$1;
(statearr_42471_42526[(1)] = (36));

} else {
var statearr_42472_42527 = state_42432__$1;
(statearr_42472_42527[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (19))){
var inst_42360 = (state_42432[(7)]);
var inst_42379 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42360);
var state_42432__$1 = state_42432;
var statearr_42473_42528 = state_42432__$1;
(statearr_42473_42528[(2)] = inst_42379);

(statearr_42473_42528[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (11))){
var inst_42360 = (state_42432[(7)]);
var inst_42364 = (inst_42360 == null);
var inst_42365 = cljs.core.not.call(null,inst_42364);
var state_42432__$1 = state_42432;
if(inst_42365){
var statearr_42474_42529 = state_42432__$1;
(statearr_42474_42529[(1)] = (13));

} else {
var statearr_42475_42530 = state_42432__$1;
(statearr_42475_42530[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (9))){
var inst_42336 = (state_42432[(8)]);
var state_42432__$1 = state_42432;
var statearr_42476_42531 = state_42432__$1;
(statearr_42476_42531[(2)] = inst_42336);

(statearr_42476_42531[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (5))){
var state_42432__$1 = state_42432;
var statearr_42477_42532 = state_42432__$1;
(statearr_42477_42532[(2)] = true);

(statearr_42477_42532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (14))){
var state_42432__$1 = state_42432;
var statearr_42478_42533 = state_42432__$1;
(statearr_42478_42533[(2)] = false);

(statearr_42478_42533[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (26))){
var inst_42392 = (state_42432[(11)]);
var inst_42399 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_42392);
var state_42432__$1 = state_42432;
var statearr_42479_42534 = state_42432__$1;
(statearr_42479_42534[(2)] = inst_42399);

(statearr_42479_42534[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (16))){
var state_42432__$1 = state_42432;
var statearr_42480_42535 = state_42432__$1;
(statearr_42480_42535[(2)] = true);

(statearr_42480_42535[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (38))){
var inst_42422 = (state_42432[(2)]);
var state_42432__$1 = state_42432;
var statearr_42481_42536 = state_42432__$1;
(statearr_42481_42536[(2)] = inst_42422);

(statearr_42481_42536[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (30))){
var inst_42384 = (state_42432[(13)]);
var inst_42383 = (state_42432[(10)]);
var inst_42392 = (state_42432[(11)]);
var inst_42409 = cljs.core.empty_QMARK_.call(null,inst_42383);
var inst_42410 = inst_42384.call(null,inst_42392);
var inst_42411 = cljs.core.not.call(null,inst_42410);
var inst_42412 = (inst_42409) && (inst_42411);
var state_42432__$1 = state_42432;
var statearr_42482_42537 = state_42432__$1;
(statearr_42482_42537[(2)] = inst_42412);

(statearr_42482_42537[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (10))){
var inst_42336 = (state_42432[(8)]);
var inst_42356 = (state_42432[(2)]);
var inst_42357 = cljs.core.get.call(null,inst_42356,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42358 = cljs.core.get.call(null,inst_42356,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42359 = cljs.core.get.call(null,inst_42356,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_42360 = inst_42336;
var state_42432__$1 = (function (){var statearr_42483 = state_42432;
(statearr_42483[(16)] = inst_42359);

(statearr_42483[(17)] = inst_42358);

(statearr_42483[(7)] = inst_42360);

(statearr_42483[(18)] = inst_42357);

return statearr_42483;
})();
var statearr_42484_42538 = state_42432__$1;
(statearr_42484_42538[(2)] = null);

(statearr_42484_42538[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (18))){
var inst_42374 = (state_42432[(2)]);
var state_42432__$1 = state_42432;
var statearr_42485_42539 = state_42432__$1;
(statearr_42485_42539[(2)] = inst_42374);

(statearr_42485_42539[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (37))){
var state_42432__$1 = state_42432;
var statearr_42486_42540 = state_42432__$1;
(statearr_42486_42540[(2)] = null);

(statearr_42486_42540[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (8))){
var inst_42336 = (state_42432[(8)]);
var inst_42353 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42336);
var state_42432__$1 = state_42432;
var statearr_42487_42541 = state_42432__$1;
(statearr_42487_42541[(2)] = inst_42353);

(statearr_42487_42541[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40682__auto___42495,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__40570__auto__,c__40682__auto___42495,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__40571__auto__ = null;
var cljs$core$async$mix_$_state_machine__40571__auto____0 = (function (){
var statearr_42491 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42491[(0)] = cljs$core$async$mix_$_state_machine__40571__auto__);

(statearr_42491[(1)] = (1));

return statearr_42491;
});
var cljs$core$async$mix_$_state_machine__40571__auto____1 = (function (state_42432){
while(true){
var ret_value__40572__auto__ = (function (){try{while(true){
var result__40573__auto__ = switch__40570__auto__.call(null,state_42432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40573__auto__;
}
break;
}
}catch (e42492){if((e42492 instanceof Object)){
var ex__40574__auto__ = e42492;
var statearr_42493_42542 = state_42432;
(statearr_42493_42542[(5)] = ex__40574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42543 = state_42432;
state_42432 = G__42543;
continue;
} else {
return ret_value__40572__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__40571__auto__ = function(state_42432){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__40571__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__40571__auto____1.call(this,state_42432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__40571__auto____0;
cljs$core$async$mix_$_state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__40571__auto____1;
return cljs$core$async$mix_$_state_machine__40571__auto__;
})()
;})(switch__40570__auto__,c__40682__auto___42495,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__40684__auto__ = (function (){var statearr_42494 = f__40683__auto__.call(null);
(statearr_42494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40682__auto___42495);

return statearr_42494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40684__auto__);
});})(c__40682__auto___42495,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__37467__auto__ = (((p == null))?null:p);
var m__37468__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__37467__auto__)]);
if(!((m__37468__auto__ == null))){
return m__37468__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__37468__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__37468__auto____$1 == null))){
return m__37468__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__37467__auto__ = (((p == null))?null:p);
var m__37468__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__37467__auto__)]);
if(!((m__37468__auto__ == null))){
return m__37468__auto__.call(null,p,v,ch);
} else {
var m__37468__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__37468__auto____$1 == null))){
return m__37468__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args42544 = [];
var len__37879__auto___42547 = arguments.length;
var i__37880__auto___42548 = (0);
while(true){
if((i__37880__auto___42548 < len__37879__auto___42547)){
args42544.push((arguments[i__37880__auto___42548]));

var G__42549 = (i__37880__auto___42548 + (1));
i__37880__auto___42548 = G__42549;
continue;
} else {
}
break;
}

var G__42546 = args42544.length;
switch (G__42546) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42544.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__37467__auto__ = (((p == null))?null:p);
var m__37468__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__37467__auto__)]);
if(!((m__37468__auto__ == null))){
return m__37468__auto__.call(null,p);
} else {
var m__37468__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__37468__auto____$1 == null))){
return m__37468__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__37467__auto__ = (((p == null))?null:p);
var m__37468__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__37467__auto__)]);
if(!((m__37468__auto__ == null))){
return m__37468__auto__.call(null,p,v);
} else {
var m__37468__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__37468__auto____$1 == null))){
return m__37468__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args42552 = [];
var len__37879__auto___42677 = arguments.length;
var i__37880__auto___42678 = (0);
while(true){
if((i__37880__auto___42678 < len__37879__auto___42677)){
args42552.push((arguments[i__37880__auto___42678]));

var G__42679 = (i__37880__auto___42678 + (1));
i__37880__auto___42678 = G__42679;
continue;
} else {
}
break;
}

var G__42554 = args42552.length;
switch (G__42554) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42552.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__36804__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__36804__auto__)){
return or__36804__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__36804__auto__,mults){
return (function (p1__42551_SHARP_){
if(cljs.core.truth_(p1__42551_SHARP_.call(null,topic))){
return p1__42551_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__42551_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__36804__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async42555 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42555 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta42556){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta42556 = meta42556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_42557,meta42556__$1){
var self__ = this;
var _42557__$1 = this;
return (new cljs.core.async.t_cljs$core$async42555(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta42556__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42555.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_42557){
var self__ = this;
var _42557__$1 = this;
return self__.meta42556;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42555.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async42555.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42555.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async42555.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42555.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42555.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42555.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42555.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta42556","meta42556",404976566,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42555.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42555.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42555";

cljs.core.async.t_cljs$core$async42555.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__37410__auto__,writer__37411__auto__,opt__37412__auto__){
return cljs.core._write.call(null,writer__37411__auto__,"cljs.core.async/t_cljs$core$async42555");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async42555 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async42555(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42556){
return (new cljs.core.async.t_cljs$core$async42555(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42556));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async42555(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40682__auto___42681 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40682__auto___42681,mults,ensure_mult,p){
return (function (){
var f__40683__auto__ = (function (){var switch__40570__auto__ = ((function (c__40682__auto___42681,mults,ensure_mult,p){
return (function (state_42629){
var state_val_42630 = (state_42629[(1)]);
if((state_val_42630 === (7))){
var inst_42625 = (state_42629[(2)]);
var state_42629__$1 = state_42629;
var statearr_42631_42682 = state_42629__$1;
(statearr_42631_42682[(2)] = inst_42625);

(statearr_42631_42682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42630 === (20))){
var state_42629__$1 = state_42629;
var statearr_42632_42683 = state_42629__$1;
(statearr_42632_42683[(2)] = null);

(statearr_42632_42683[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42630 === (1))){
var state_42629__$1 = state_42629;
var statearr_42633_42684 = state_42629__$1;
(statearr_42633_42684[(2)] = null);

(statearr_42633_42684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42630 === (24))){
var inst_42608 = (state_42629[(7)]);
var inst_42617 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_42608);
var state_42629__$1 = state_42629;
var statearr_42634_42685 = state_42629__$1;
(statearr_42634_42685[(2)] = inst_42617);

(statearr_42634_42685[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42630 === (4))){
var inst_42560 = (state_42629[(8)]);
var inst_42560__$1 = (state_42629[(2)]);
var inst_42561 = (inst_42560__$1 == null);
var state_42629__$1 = (function (){var statearr_42635 = state_42629;
(statearr_42635[(8)] = inst_42560__$1);

return statearr_42635;
})();
if(cljs.core.truth_(inst_42561)){
var statearr_42636_42686 = state_42629__$1;
(statearr_42636_42686[(1)] = (5));

} else {
var statearr_42637_42687 = state_42629__$1;
(statearr_42637_42687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42630 === (15))){
var inst_42602 = (state_42629[(2)]);
var state_42629__$1 = state_42629;
var statearr_42638_42688 = state_42629__$1;
(statearr_42638_42688[(2)] = inst_42602);

(statearr_42638_42688[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42630 === (21))){
var inst_42622 = (state_42629[(2)]);
var state_42629__$1 = (function (){var statearr_42639 = state_42629;
(statearr_42639[(9)] = inst_42622);

return statearr_42639;
})();
var statearr_42640_42689 = state_42629__$1;
(statearr_42640_42689[(2)] = null);

(statearr_42640_42689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42630 === (13))){
var inst_42584 = (state_42629[(10)]);
var inst_42586 = cljs.core.chunked_seq_QMARK_.call(null,inst_42584);
var state_42629__$1 = state_42629;
if(inst_42586){
var statearr_42641_42690 = state_42629__$1;
(statearr_42641_42690[(1)] = (16));

} else {
var statearr_42642_42691 = state_42629__$1;
(statearr_42642_42691[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42630 === (22))){
var inst_42614 = (state_42629[(2)]);
var state_42629__$1 = state_42629;
if(cljs.core.truth_(inst_42614)){
var statearr_42643_42692 = state_42629__$1;
(statearr_42643_42692[(1)] = (23));

} else {
var statearr_42644_42693 = state_42629__$1;
(statearr_42644_42693[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42630 === (6))){
var inst_42610 = (state_42629[(11)]);
var inst_42560 = (state_42629[(8)]);
var inst_42608 = (state_42629[(7)]);
var inst_42608__$1 = topic_fn.call(null,inst_42560);
var inst_42609 = cljs.core.deref.call(null,mults);
var inst_42610__$1 = cljs.core.get.call(null,inst_42609,inst_42608__$1);
var state_42629__$1 = (function (){var statearr_42645 = state_42629;
(statearr_42645[(11)] = inst_42610__$1);

(statearr_42645[(7)] = inst_42608__$1);

return statearr_42645;
})();
if(cljs.core.truth_(inst_42610__$1)){
var statearr_42646_42694 = state_42629__$1;
(statearr_42646_42694[(1)] = (19));

} else {
var statearr_42647_42695 = state_42629__$1;
(statearr_42647_42695[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42630 === (25))){
var inst_42619 = (state_42629[(2)]);
var state_42629__$1 = state_42629;
var statearr_42648_42696 = state_42629__$1;
(statearr_42648_42696[(2)] = inst_42619);

(statearr_42648_42696[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42630 === (17))){
var inst_42584 = (state_42629[(10)]);
var inst_42593 = cljs.core.first.call(null,inst_42584);
var inst_42594 = cljs.core.async.muxch_STAR_.call(null,inst_42593);
var inst_42595 = cljs.core.async.close_BANG_.call(null,inst_42594);
var inst_42596 = cljs.core.next.call(null,inst_42584);
var inst_42570 = inst_42596;
var inst_42571 = null;
var inst_42572 = (0);
var inst_42573 = (0);
var state_42629__$1 = (function (){var statearr_42649 = state_42629;
(statearr_42649[(12)] = inst_42571);

(statearr_42649[(13)] = inst_42570);

(statearr_42649[(14)] = inst_42572);

(statearr_42649[(15)] = inst_42595);

(statearr_42649[(16)] = inst_42573);

return statearr_42649;
})();
var statearr_42650_42697 = state_42629__$1;
(statearr_42650_42697[(2)] = null);

(statearr_42650_42697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42630 === (3))){
var inst_42627 = (state_42629[(2)]);
var state_42629__$1 = state_42629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42629__$1,inst_42627);
} else {
if((state_val_42630 === (12))){
var inst_42604 = (state_42629[(2)]);
var state_42629__$1 = state_42629;
var statearr_42651_42698 = state_42629__$1;
(statearr_42651_42698[(2)] = inst_42604);

(statearr_42651_42698[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42630 === (2))){
var state_42629__$1 = state_42629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42629__$1,(4),ch);
} else {
if((state_val_42630 === (23))){
var state_42629__$1 = state_42629;
var statearr_42652_42699 = state_42629__$1;
(statearr_42652_42699[(2)] = null);

(statearr_42652_42699[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42630 === (19))){
var inst_42610 = (state_42629[(11)]);
var inst_42560 = (state_42629[(8)]);
var inst_42612 = cljs.core.async.muxch_STAR_.call(null,inst_42610);
var state_42629__$1 = state_42629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42629__$1,(22),inst_42612,inst_42560);
} else {
if((state_val_42630 === (11))){
var inst_42570 = (state_42629[(13)]);
var inst_42584 = (state_42629[(10)]);
var inst_42584__$1 = cljs.core.seq.call(null,inst_42570);
var state_42629__$1 = (function (){var statearr_42653 = state_42629;
(statearr_42653[(10)] = inst_42584__$1);

return statearr_42653;
})();
if(inst_42584__$1){
var statearr_42654_42700 = state_42629__$1;
(statearr_42654_42700[(1)] = (13));

} else {
var statearr_42655_42701 = state_42629__$1;
(statearr_42655_42701[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42630 === (9))){
var inst_42606 = (state_42629[(2)]);
var state_42629__$1 = state_42629;
var statearr_42656_42702 = state_42629__$1;
(statearr_42656_42702[(2)] = inst_42606);

(statearr_42656_42702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42630 === (5))){
var inst_42567 = cljs.core.deref.call(null,mults);
var inst_42568 = cljs.core.vals.call(null,inst_42567);
var inst_42569 = cljs.core.seq.call(null,inst_42568);
var inst_42570 = inst_42569;
var inst_42571 = null;
var inst_42572 = (0);
var inst_42573 = (0);
var state_42629__$1 = (function (){var statearr_42657 = state_42629;
(statearr_42657[(12)] = inst_42571);

(statearr_42657[(13)] = inst_42570);

(statearr_42657[(14)] = inst_42572);

(statearr_42657[(16)] = inst_42573);

return statearr_42657;
})();
var statearr_42658_42703 = state_42629__$1;
(statearr_42658_42703[(2)] = null);

(statearr_42658_42703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42630 === (14))){
var state_42629__$1 = state_42629;
var statearr_42662_42704 = state_42629__$1;
(statearr_42662_42704[(2)] = null);

(statearr_42662_42704[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42630 === (16))){
var inst_42584 = (state_42629[(10)]);
var inst_42588 = cljs.core.chunk_first.call(null,inst_42584);
var inst_42589 = cljs.core.chunk_rest.call(null,inst_42584);
var inst_42590 = cljs.core.count.call(null,inst_42588);
var inst_42570 = inst_42589;
var inst_42571 = inst_42588;
var inst_42572 = inst_42590;
var inst_42573 = (0);
var state_42629__$1 = (function (){var statearr_42663 = state_42629;
(statearr_42663[(12)] = inst_42571);

(statearr_42663[(13)] = inst_42570);

(statearr_42663[(14)] = inst_42572);

(statearr_42663[(16)] = inst_42573);

return statearr_42663;
})();
var statearr_42664_42705 = state_42629__$1;
(statearr_42664_42705[(2)] = null);

(statearr_42664_42705[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42630 === (10))){
var inst_42571 = (state_42629[(12)]);
var inst_42570 = (state_42629[(13)]);
var inst_42572 = (state_42629[(14)]);
var inst_42573 = (state_42629[(16)]);
var inst_42578 = cljs.core._nth.call(null,inst_42571,inst_42573);
var inst_42579 = cljs.core.async.muxch_STAR_.call(null,inst_42578);
var inst_42580 = cljs.core.async.close_BANG_.call(null,inst_42579);
var inst_42581 = (inst_42573 + (1));
var tmp42659 = inst_42571;
var tmp42660 = inst_42570;
var tmp42661 = inst_42572;
var inst_42570__$1 = tmp42660;
var inst_42571__$1 = tmp42659;
var inst_42572__$1 = tmp42661;
var inst_42573__$1 = inst_42581;
var state_42629__$1 = (function (){var statearr_42665 = state_42629;
(statearr_42665[(12)] = inst_42571__$1);

(statearr_42665[(13)] = inst_42570__$1);

(statearr_42665[(14)] = inst_42572__$1);

(statearr_42665[(17)] = inst_42580);

(statearr_42665[(16)] = inst_42573__$1);

return statearr_42665;
})();
var statearr_42666_42706 = state_42629__$1;
(statearr_42666_42706[(2)] = null);

(statearr_42666_42706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42630 === (18))){
var inst_42599 = (state_42629[(2)]);
var state_42629__$1 = state_42629;
var statearr_42667_42707 = state_42629__$1;
(statearr_42667_42707[(2)] = inst_42599);

(statearr_42667_42707[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42630 === (8))){
var inst_42572 = (state_42629[(14)]);
var inst_42573 = (state_42629[(16)]);
var inst_42575 = (inst_42573 < inst_42572);
var inst_42576 = inst_42575;
var state_42629__$1 = state_42629;
if(cljs.core.truth_(inst_42576)){
var statearr_42668_42708 = state_42629__$1;
(statearr_42668_42708[(1)] = (10));

} else {
var statearr_42669_42709 = state_42629__$1;
(statearr_42669_42709[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40682__auto___42681,mults,ensure_mult,p))
;
return ((function (switch__40570__auto__,c__40682__auto___42681,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__40571__auto__ = null;
var cljs$core$async$state_machine__40571__auto____0 = (function (){
var statearr_42673 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42673[(0)] = cljs$core$async$state_machine__40571__auto__);

(statearr_42673[(1)] = (1));

return statearr_42673;
});
var cljs$core$async$state_machine__40571__auto____1 = (function (state_42629){
while(true){
var ret_value__40572__auto__ = (function (){try{while(true){
var result__40573__auto__ = switch__40570__auto__.call(null,state_42629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40573__auto__;
}
break;
}
}catch (e42674){if((e42674 instanceof Object)){
var ex__40574__auto__ = e42674;
var statearr_42675_42710 = state_42629;
(statearr_42675_42710[(5)] = ex__40574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42711 = state_42629;
state_42629 = G__42711;
continue;
} else {
return ret_value__40572__auto__;
}
break;
}
});
cljs$core$async$state_machine__40571__auto__ = function(state_42629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40571__auto____1.call(this,state_42629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40571__auto____0;
cljs$core$async$state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40571__auto____1;
return cljs$core$async$state_machine__40571__auto__;
})()
;})(switch__40570__auto__,c__40682__auto___42681,mults,ensure_mult,p))
})();
var state__40684__auto__ = (function (){var statearr_42676 = f__40683__auto__.call(null);
(statearr_42676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40682__auto___42681);

return statearr_42676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40684__auto__);
});})(c__40682__auto___42681,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args42712 = [];
var len__37879__auto___42715 = arguments.length;
var i__37880__auto___42716 = (0);
while(true){
if((i__37880__auto___42716 < len__37879__auto___42715)){
args42712.push((arguments[i__37880__auto___42716]));

var G__42717 = (i__37880__auto___42716 + (1));
i__37880__auto___42716 = G__42717;
continue;
} else {
}
break;
}

var G__42714 = args42712.length;
switch (G__42714) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42712.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args42719 = [];
var len__37879__auto___42722 = arguments.length;
var i__37880__auto___42723 = (0);
while(true){
if((i__37880__auto___42723 < len__37879__auto___42722)){
args42719.push((arguments[i__37880__auto___42723]));

var G__42724 = (i__37880__auto___42723 + (1));
i__37880__auto___42723 = G__42724;
continue;
} else {
}
break;
}

var G__42721 = args42719.length;
switch (G__42721) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42719.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args42726 = [];
var len__37879__auto___42797 = arguments.length;
var i__37880__auto___42798 = (0);
while(true){
if((i__37880__auto___42798 < len__37879__auto___42797)){
args42726.push((arguments[i__37880__auto___42798]));

var G__42799 = (i__37880__auto___42798 + (1));
i__37880__auto___42798 = G__42799;
continue;
} else {
}
break;
}

var G__42728 = args42726.length;
switch (G__42728) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42726.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__40682__auto___42801 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40682__auto___42801,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__40683__auto__ = (function (){var switch__40570__auto__ = ((function (c__40682__auto___42801,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_42767){
var state_val_42768 = (state_42767[(1)]);
if((state_val_42768 === (7))){
var state_42767__$1 = state_42767;
var statearr_42769_42802 = state_42767__$1;
(statearr_42769_42802[(2)] = null);

(statearr_42769_42802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42768 === (1))){
var state_42767__$1 = state_42767;
var statearr_42770_42803 = state_42767__$1;
(statearr_42770_42803[(2)] = null);

(statearr_42770_42803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42768 === (4))){
var inst_42731 = (state_42767[(7)]);
var inst_42733 = (inst_42731 < cnt);
var state_42767__$1 = state_42767;
if(cljs.core.truth_(inst_42733)){
var statearr_42771_42804 = state_42767__$1;
(statearr_42771_42804[(1)] = (6));

} else {
var statearr_42772_42805 = state_42767__$1;
(statearr_42772_42805[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42768 === (15))){
var inst_42763 = (state_42767[(2)]);
var state_42767__$1 = state_42767;
var statearr_42773_42806 = state_42767__$1;
(statearr_42773_42806[(2)] = inst_42763);

(statearr_42773_42806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42768 === (13))){
var inst_42756 = cljs.core.async.close_BANG_.call(null,out);
var state_42767__$1 = state_42767;
var statearr_42774_42807 = state_42767__$1;
(statearr_42774_42807[(2)] = inst_42756);

(statearr_42774_42807[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42768 === (6))){
var state_42767__$1 = state_42767;
var statearr_42775_42808 = state_42767__$1;
(statearr_42775_42808[(2)] = null);

(statearr_42775_42808[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42768 === (3))){
var inst_42765 = (state_42767[(2)]);
var state_42767__$1 = state_42767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42767__$1,inst_42765);
} else {
if((state_val_42768 === (12))){
var inst_42753 = (state_42767[(8)]);
var inst_42753__$1 = (state_42767[(2)]);
var inst_42754 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_42753__$1);
var state_42767__$1 = (function (){var statearr_42776 = state_42767;
(statearr_42776[(8)] = inst_42753__$1);

return statearr_42776;
})();
if(cljs.core.truth_(inst_42754)){
var statearr_42777_42809 = state_42767__$1;
(statearr_42777_42809[(1)] = (13));

} else {
var statearr_42778_42810 = state_42767__$1;
(statearr_42778_42810[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42768 === (2))){
var inst_42730 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_42731 = (0);
var state_42767__$1 = (function (){var statearr_42779 = state_42767;
(statearr_42779[(9)] = inst_42730);

(statearr_42779[(7)] = inst_42731);

return statearr_42779;
})();
var statearr_42780_42811 = state_42767__$1;
(statearr_42780_42811[(2)] = null);

(statearr_42780_42811[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42768 === (11))){
var inst_42731 = (state_42767[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42767,(10),Object,null,(9));
var inst_42740 = chs__$1.call(null,inst_42731);
var inst_42741 = done.call(null,inst_42731);
var inst_42742 = cljs.core.async.take_BANG_.call(null,inst_42740,inst_42741);
var state_42767__$1 = state_42767;
var statearr_42781_42812 = state_42767__$1;
(statearr_42781_42812[(2)] = inst_42742);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42767__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42768 === (9))){
var inst_42731 = (state_42767[(7)]);
var inst_42744 = (state_42767[(2)]);
var inst_42745 = (inst_42731 + (1));
var inst_42731__$1 = inst_42745;
var state_42767__$1 = (function (){var statearr_42782 = state_42767;
(statearr_42782[(10)] = inst_42744);

(statearr_42782[(7)] = inst_42731__$1);

return statearr_42782;
})();
var statearr_42783_42813 = state_42767__$1;
(statearr_42783_42813[(2)] = null);

(statearr_42783_42813[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42768 === (5))){
var inst_42751 = (state_42767[(2)]);
var state_42767__$1 = (function (){var statearr_42784 = state_42767;
(statearr_42784[(11)] = inst_42751);

return statearr_42784;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42767__$1,(12),dchan);
} else {
if((state_val_42768 === (14))){
var inst_42753 = (state_42767[(8)]);
var inst_42758 = cljs.core.apply.call(null,f,inst_42753);
var state_42767__$1 = state_42767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42767__$1,(16),out,inst_42758);
} else {
if((state_val_42768 === (16))){
var inst_42760 = (state_42767[(2)]);
var state_42767__$1 = (function (){var statearr_42785 = state_42767;
(statearr_42785[(12)] = inst_42760);

return statearr_42785;
})();
var statearr_42786_42814 = state_42767__$1;
(statearr_42786_42814[(2)] = null);

(statearr_42786_42814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42768 === (10))){
var inst_42735 = (state_42767[(2)]);
var inst_42736 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_42767__$1 = (function (){var statearr_42787 = state_42767;
(statearr_42787[(13)] = inst_42735);

return statearr_42787;
})();
var statearr_42788_42815 = state_42767__$1;
(statearr_42788_42815[(2)] = inst_42736);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42767__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42768 === (8))){
var inst_42749 = (state_42767[(2)]);
var state_42767__$1 = state_42767;
var statearr_42789_42816 = state_42767__$1;
(statearr_42789_42816[(2)] = inst_42749);

(statearr_42789_42816[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
});})(c__40682__auto___42801,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__40570__auto__,c__40682__auto___42801,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__40571__auto__ = null;
var cljs$core$async$state_machine__40571__auto____0 = (function (){
var statearr_42793 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42793[(0)] = cljs$core$async$state_machine__40571__auto__);

(statearr_42793[(1)] = (1));

return statearr_42793;
});
var cljs$core$async$state_machine__40571__auto____1 = (function (state_42767){
while(true){
var ret_value__40572__auto__ = (function (){try{while(true){
var result__40573__auto__ = switch__40570__auto__.call(null,state_42767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40573__auto__;
}
break;
}
}catch (e42794){if((e42794 instanceof Object)){
var ex__40574__auto__ = e42794;
var statearr_42795_42817 = state_42767;
(statearr_42795_42817[(5)] = ex__40574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42818 = state_42767;
state_42767 = G__42818;
continue;
} else {
return ret_value__40572__auto__;
}
break;
}
});
cljs$core$async$state_machine__40571__auto__ = function(state_42767){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40571__auto____1.call(this,state_42767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40571__auto____0;
cljs$core$async$state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40571__auto____1;
return cljs$core$async$state_machine__40571__auto__;
})()
;})(switch__40570__auto__,c__40682__auto___42801,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__40684__auto__ = (function (){var statearr_42796 = f__40683__auto__.call(null);
(statearr_42796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40682__auto___42801);

return statearr_42796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40684__auto__);
});})(c__40682__auto___42801,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args42820 = [];
var len__37879__auto___42878 = arguments.length;
var i__37880__auto___42879 = (0);
while(true){
if((i__37880__auto___42879 < len__37879__auto___42878)){
args42820.push((arguments[i__37880__auto___42879]));

var G__42880 = (i__37880__auto___42879 + (1));
i__37880__auto___42879 = G__42880;
continue;
} else {
}
break;
}

var G__42822 = args42820.length;
switch (G__42822) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42820.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40682__auto___42882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40682__auto___42882,out){
return (function (){
var f__40683__auto__ = (function (){var switch__40570__auto__ = ((function (c__40682__auto___42882,out){
return (function (state_42854){
var state_val_42855 = (state_42854[(1)]);
if((state_val_42855 === (7))){
var inst_42834 = (state_42854[(7)]);
var inst_42833 = (state_42854[(8)]);
var inst_42833__$1 = (state_42854[(2)]);
var inst_42834__$1 = cljs.core.nth.call(null,inst_42833__$1,(0),null);
var inst_42835 = cljs.core.nth.call(null,inst_42833__$1,(1),null);
var inst_42836 = (inst_42834__$1 == null);
var state_42854__$1 = (function (){var statearr_42856 = state_42854;
(statearr_42856[(7)] = inst_42834__$1);

(statearr_42856[(8)] = inst_42833__$1);

(statearr_42856[(9)] = inst_42835);

return statearr_42856;
})();
if(cljs.core.truth_(inst_42836)){
var statearr_42857_42883 = state_42854__$1;
(statearr_42857_42883[(1)] = (8));

} else {
var statearr_42858_42884 = state_42854__$1;
(statearr_42858_42884[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42855 === (1))){
var inst_42823 = cljs.core.vec.call(null,chs);
var inst_42824 = inst_42823;
var state_42854__$1 = (function (){var statearr_42859 = state_42854;
(statearr_42859[(10)] = inst_42824);

return statearr_42859;
})();
var statearr_42860_42885 = state_42854__$1;
(statearr_42860_42885[(2)] = null);

(statearr_42860_42885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42855 === (4))){
var inst_42824 = (state_42854[(10)]);
var state_42854__$1 = state_42854;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42854__$1,(7),inst_42824);
} else {
if((state_val_42855 === (6))){
var inst_42850 = (state_42854[(2)]);
var state_42854__$1 = state_42854;
var statearr_42861_42886 = state_42854__$1;
(statearr_42861_42886[(2)] = inst_42850);

(statearr_42861_42886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42855 === (3))){
var inst_42852 = (state_42854[(2)]);
var state_42854__$1 = state_42854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42854__$1,inst_42852);
} else {
if((state_val_42855 === (2))){
var inst_42824 = (state_42854[(10)]);
var inst_42826 = cljs.core.count.call(null,inst_42824);
var inst_42827 = (inst_42826 > (0));
var state_42854__$1 = state_42854;
if(cljs.core.truth_(inst_42827)){
var statearr_42863_42887 = state_42854__$1;
(statearr_42863_42887[(1)] = (4));

} else {
var statearr_42864_42888 = state_42854__$1;
(statearr_42864_42888[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42855 === (11))){
var inst_42824 = (state_42854[(10)]);
var inst_42843 = (state_42854[(2)]);
var tmp42862 = inst_42824;
var inst_42824__$1 = tmp42862;
var state_42854__$1 = (function (){var statearr_42865 = state_42854;
(statearr_42865[(10)] = inst_42824__$1);

(statearr_42865[(11)] = inst_42843);

return statearr_42865;
})();
var statearr_42866_42889 = state_42854__$1;
(statearr_42866_42889[(2)] = null);

(statearr_42866_42889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42855 === (9))){
var inst_42834 = (state_42854[(7)]);
var state_42854__$1 = state_42854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42854__$1,(11),out,inst_42834);
} else {
if((state_val_42855 === (5))){
var inst_42848 = cljs.core.async.close_BANG_.call(null,out);
var state_42854__$1 = state_42854;
var statearr_42867_42890 = state_42854__$1;
(statearr_42867_42890[(2)] = inst_42848);

(statearr_42867_42890[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42855 === (10))){
var inst_42846 = (state_42854[(2)]);
var state_42854__$1 = state_42854;
var statearr_42868_42891 = state_42854__$1;
(statearr_42868_42891[(2)] = inst_42846);

(statearr_42868_42891[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42855 === (8))){
var inst_42834 = (state_42854[(7)]);
var inst_42833 = (state_42854[(8)]);
var inst_42824 = (state_42854[(10)]);
var inst_42835 = (state_42854[(9)]);
var inst_42838 = (function (){var cs = inst_42824;
var vec__42829 = inst_42833;
var v = inst_42834;
var c = inst_42835;
return ((function (cs,vec__42829,v,c,inst_42834,inst_42833,inst_42824,inst_42835,state_val_42855,c__40682__auto___42882,out){
return (function (p1__42819_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__42819_SHARP_);
});
;})(cs,vec__42829,v,c,inst_42834,inst_42833,inst_42824,inst_42835,state_val_42855,c__40682__auto___42882,out))
})();
var inst_42839 = cljs.core.filterv.call(null,inst_42838,inst_42824);
var inst_42824__$1 = inst_42839;
var state_42854__$1 = (function (){var statearr_42869 = state_42854;
(statearr_42869[(10)] = inst_42824__$1);

return statearr_42869;
})();
var statearr_42870_42892 = state_42854__$1;
(statearr_42870_42892[(2)] = null);

(statearr_42870_42892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
});})(c__40682__auto___42882,out))
;
return ((function (switch__40570__auto__,c__40682__auto___42882,out){
return (function() {
var cljs$core$async$state_machine__40571__auto__ = null;
var cljs$core$async$state_machine__40571__auto____0 = (function (){
var statearr_42874 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42874[(0)] = cljs$core$async$state_machine__40571__auto__);

(statearr_42874[(1)] = (1));

return statearr_42874;
});
var cljs$core$async$state_machine__40571__auto____1 = (function (state_42854){
while(true){
var ret_value__40572__auto__ = (function (){try{while(true){
var result__40573__auto__ = switch__40570__auto__.call(null,state_42854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40573__auto__;
}
break;
}
}catch (e42875){if((e42875 instanceof Object)){
var ex__40574__auto__ = e42875;
var statearr_42876_42893 = state_42854;
(statearr_42876_42893[(5)] = ex__40574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42894 = state_42854;
state_42854 = G__42894;
continue;
} else {
return ret_value__40572__auto__;
}
break;
}
});
cljs$core$async$state_machine__40571__auto__ = function(state_42854){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40571__auto____1.call(this,state_42854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40571__auto____0;
cljs$core$async$state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40571__auto____1;
return cljs$core$async$state_machine__40571__auto__;
})()
;})(switch__40570__auto__,c__40682__auto___42882,out))
})();
var state__40684__auto__ = (function (){var statearr_42877 = f__40683__auto__.call(null);
(statearr_42877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40682__auto___42882);

return statearr_42877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40684__auto__);
});})(c__40682__auto___42882,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args42895 = [];
var len__37879__auto___42944 = arguments.length;
var i__37880__auto___42945 = (0);
while(true){
if((i__37880__auto___42945 < len__37879__auto___42944)){
args42895.push((arguments[i__37880__auto___42945]));

var G__42946 = (i__37880__auto___42945 + (1));
i__37880__auto___42945 = G__42946;
continue;
} else {
}
break;
}

var G__42897 = args42895.length;
switch (G__42897) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42895.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40682__auto___42948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40682__auto___42948,out){
return (function (){
var f__40683__auto__ = (function (){var switch__40570__auto__ = ((function (c__40682__auto___42948,out){
return (function (state_42921){
var state_val_42922 = (state_42921[(1)]);
if((state_val_42922 === (7))){
var inst_42903 = (state_42921[(7)]);
var inst_42903__$1 = (state_42921[(2)]);
var inst_42904 = (inst_42903__$1 == null);
var inst_42905 = cljs.core.not.call(null,inst_42904);
var state_42921__$1 = (function (){var statearr_42923 = state_42921;
(statearr_42923[(7)] = inst_42903__$1);

return statearr_42923;
})();
if(inst_42905){
var statearr_42924_42949 = state_42921__$1;
(statearr_42924_42949[(1)] = (8));

} else {
var statearr_42925_42950 = state_42921__$1;
(statearr_42925_42950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42922 === (1))){
var inst_42898 = (0);
var state_42921__$1 = (function (){var statearr_42926 = state_42921;
(statearr_42926[(8)] = inst_42898);

return statearr_42926;
})();
var statearr_42927_42951 = state_42921__$1;
(statearr_42927_42951[(2)] = null);

(statearr_42927_42951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42922 === (4))){
var state_42921__$1 = state_42921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42921__$1,(7),ch);
} else {
if((state_val_42922 === (6))){
var inst_42916 = (state_42921[(2)]);
var state_42921__$1 = state_42921;
var statearr_42928_42952 = state_42921__$1;
(statearr_42928_42952[(2)] = inst_42916);

(statearr_42928_42952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42922 === (3))){
var inst_42918 = (state_42921[(2)]);
var inst_42919 = cljs.core.async.close_BANG_.call(null,out);
var state_42921__$1 = (function (){var statearr_42929 = state_42921;
(statearr_42929[(9)] = inst_42918);

return statearr_42929;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42921__$1,inst_42919);
} else {
if((state_val_42922 === (2))){
var inst_42898 = (state_42921[(8)]);
var inst_42900 = (inst_42898 < n);
var state_42921__$1 = state_42921;
if(cljs.core.truth_(inst_42900)){
var statearr_42930_42953 = state_42921__$1;
(statearr_42930_42953[(1)] = (4));

} else {
var statearr_42931_42954 = state_42921__$1;
(statearr_42931_42954[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42922 === (11))){
var inst_42898 = (state_42921[(8)]);
var inst_42908 = (state_42921[(2)]);
var inst_42909 = (inst_42898 + (1));
var inst_42898__$1 = inst_42909;
var state_42921__$1 = (function (){var statearr_42932 = state_42921;
(statearr_42932[(8)] = inst_42898__$1);

(statearr_42932[(10)] = inst_42908);

return statearr_42932;
})();
var statearr_42933_42955 = state_42921__$1;
(statearr_42933_42955[(2)] = null);

(statearr_42933_42955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42922 === (9))){
var state_42921__$1 = state_42921;
var statearr_42934_42956 = state_42921__$1;
(statearr_42934_42956[(2)] = null);

(statearr_42934_42956[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42922 === (5))){
var state_42921__$1 = state_42921;
var statearr_42935_42957 = state_42921__$1;
(statearr_42935_42957[(2)] = null);

(statearr_42935_42957[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42922 === (10))){
var inst_42913 = (state_42921[(2)]);
var state_42921__$1 = state_42921;
var statearr_42936_42958 = state_42921__$1;
(statearr_42936_42958[(2)] = inst_42913);

(statearr_42936_42958[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42922 === (8))){
var inst_42903 = (state_42921[(7)]);
var state_42921__$1 = state_42921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42921__$1,(11),out,inst_42903);
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
}
}
}
});})(c__40682__auto___42948,out))
;
return ((function (switch__40570__auto__,c__40682__auto___42948,out){
return (function() {
var cljs$core$async$state_machine__40571__auto__ = null;
var cljs$core$async$state_machine__40571__auto____0 = (function (){
var statearr_42940 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42940[(0)] = cljs$core$async$state_machine__40571__auto__);

(statearr_42940[(1)] = (1));

return statearr_42940;
});
var cljs$core$async$state_machine__40571__auto____1 = (function (state_42921){
while(true){
var ret_value__40572__auto__ = (function (){try{while(true){
var result__40573__auto__ = switch__40570__auto__.call(null,state_42921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40573__auto__;
}
break;
}
}catch (e42941){if((e42941 instanceof Object)){
var ex__40574__auto__ = e42941;
var statearr_42942_42959 = state_42921;
(statearr_42942_42959[(5)] = ex__40574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42960 = state_42921;
state_42921 = G__42960;
continue;
} else {
return ret_value__40572__auto__;
}
break;
}
});
cljs$core$async$state_machine__40571__auto__ = function(state_42921){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40571__auto____1.call(this,state_42921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40571__auto____0;
cljs$core$async$state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40571__auto____1;
return cljs$core$async$state_machine__40571__auto__;
})()
;})(switch__40570__auto__,c__40682__auto___42948,out))
})();
var state__40684__auto__ = (function (){var statearr_42943 = f__40683__auto__.call(null);
(statearr_42943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40682__auto___42948);

return statearr_42943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40684__auto__);
});})(c__40682__auto___42948,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42968 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42968 = (function (map_LT_,f,ch,meta42969){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta42969 = meta42969;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42970,meta42969__$1){
var self__ = this;
var _42970__$1 = this;
return (new cljs.core.async.t_cljs$core$async42968(self__.map_LT_,self__.f,self__.ch,meta42969__$1));
});

cljs.core.async.t_cljs$core$async42968.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42970){
var self__ = this;
var _42970__$1 = this;
return self__.meta42969;
});

cljs.core.async.t_cljs$core$async42968.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async42968.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42968.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42968.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async42968.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async42971 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42971 = (function (map_LT_,f,ch,meta42969,_,fn1,meta42972){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta42969 = meta42969;
this._ = _;
this.fn1 = fn1;
this.meta42972 = meta42972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_42973,meta42972__$1){
var self__ = this;
var _42973__$1 = this;
return (new cljs.core.async.t_cljs$core$async42971(self__.map_LT_,self__.f,self__.ch,self__.meta42969,self__._,self__.fn1,meta42972__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async42971.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_42973){
var self__ = this;
var _42973__$1 = this;
return self__.meta42972;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42971.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async42971.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42971.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42971.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__42961_SHARP_){
return f1.call(null,(((p1__42961_SHARP_ == null))?null:self__.f.call(null,p1__42961_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async42971.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42969","meta42969",1981982470,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async42968","cljs.core.async/t_cljs$core$async42968",-1688664571,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta42972","meta42972",1491666999,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42971.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42971.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42971";

cljs.core.async.t_cljs$core$async42971.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__37410__auto__,writer__37411__auto__,opt__37412__auto__){
return cljs.core._write.call(null,writer__37411__auto__,"cljs.core.async/t_cljs$core$async42971");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async42971 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42971(map_LT___$1,f__$1,ch__$1,meta42969__$1,___$2,fn1__$1,meta42972){
return (new cljs.core.async.t_cljs$core$async42971(map_LT___$1,f__$1,ch__$1,meta42969__$1,___$2,fn1__$1,meta42972));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async42971(self__.map_LT_,self__.f,self__.ch,self__.meta42969,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__36792__auto__ = ret;
if(cljs.core.truth_(and__36792__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__36792__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async42968.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async42968.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async42968.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42969","meta42969",1981982470,null)], null);
});

cljs.core.async.t_cljs$core$async42968.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42968.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42968";

cljs.core.async.t_cljs$core$async42968.cljs$lang$ctorPrWriter = (function (this__37410__auto__,writer__37411__auto__,opt__37412__auto__){
return cljs.core._write.call(null,writer__37411__auto__,"cljs.core.async/t_cljs$core$async42968");
});

cljs.core.async.__GT_t_cljs$core$async42968 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42968(map_LT___$1,f__$1,ch__$1,meta42969){
return (new cljs.core.async.t_cljs$core$async42968(map_LT___$1,f__$1,ch__$1,meta42969));
});

}

return (new cljs.core.async.t_cljs$core$async42968(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42977 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42977 = (function (map_GT_,f,ch,meta42978){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta42978 = meta42978;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42979,meta42978__$1){
var self__ = this;
var _42979__$1 = this;
return (new cljs.core.async.t_cljs$core$async42977(self__.map_GT_,self__.f,self__.ch,meta42978__$1));
});

cljs.core.async.t_cljs$core$async42977.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42979){
var self__ = this;
var _42979__$1 = this;
return self__.meta42978;
});

cljs.core.async.t_cljs$core$async42977.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async42977.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42977.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async42977.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42977.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async42977.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async42977.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42978","meta42978",1092610751,null)], null);
});

cljs.core.async.t_cljs$core$async42977.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42977.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42977";

cljs.core.async.t_cljs$core$async42977.cljs$lang$ctorPrWriter = (function (this__37410__auto__,writer__37411__auto__,opt__37412__auto__){
return cljs.core._write.call(null,writer__37411__auto__,"cljs.core.async/t_cljs$core$async42977");
});

cljs.core.async.__GT_t_cljs$core$async42977 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async42977(map_GT___$1,f__$1,ch__$1,meta42978){
return (new cljs.core.async.t_cljs$core$async42977(map_GT___$1,f__$1,ch__$1,meta42978));
});

}

return (new cljs.core.async.t_cljs$core$async42977(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async42983 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42983 = (function (filter_GT_,p,ch,meta42984){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta42984 = meta42984;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42985,meta42984__$1){
var self__ = this;
var _42985__$1 = this;
return (new cljs.core.async.t_cljs$core$async42983(self__.filter_GT_,self__.p,self__.ch,meta42984__$1));
});

cljs.core.async.t_cljs$core$async42983.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42985){
var self__ = this;
var _42985__$1 = this;
return self__.meta42984;
});

cljs.core.async.t_cljs$core$async42983.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async42983.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42983.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42983.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async42983.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42983.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async42983.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async42983.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42984","meta42984",-222984692,null)], null);
});

cljs.core.async.t_cljs$core$async42983.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42983.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42983";

cljs.core.async.t_cljs$core$async42983.cljs$lang$ctorPrWriter = (function (this__37410__auto__,writer__37411__auto__,opt__37412__auto__){
return cljs.core._write.call(null,writer__37411__auto__,"cljs.core.async/t_cljs$core$async42983");
});

cljs.core.async.__GT_t_cljs$core$async42983 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async42983(filter_GT___$1,p__$1,ch__$1,meta42984){
return (new cljs.core.async.t_cljs$core$async42983(filter_GT___$1,p__$1,ch__$1,meta42984));
});

}

return (new cljs.core.async.t_cljs$core$async42983(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args42986 = [];
var len__37879__auto___43030 = arguments.length;
var i__37880__auto___43031 = (0);
while(true){
if((i__37880__auto___43031 < len__37879__auto___43030)){
args42986.push((arguments[i__37880__auto___43031]));

var G__43032 = (i__37880__auto___43031 + (1));
i__37880__auto___43031 = G__43032;
continue;
} else {
}
break;
}

var G__42988 = args42986.length;
switch (G__42988) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42986.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40682__auto___43034 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40682__auto___43034,out){
return (function (){
var f__40683__auto__ = (function (){var switch__40570__auto__ = ((function (c__40682__auto___43034,out){
return (function (state_43009){
var state_val_43010 = (state_43009[(1)]);
if((state_val_43010 === (7))){
var inst_43005 = (state_43009[(2)]);
var state_43009__$1 = state_43009;
var statearr_43011_43035 = state_43009__$1;
(statearr_43011_43035[(2)] = inst_43005);

(statearr_43011_43035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43010 === (1))){
var state_43009__$1 = state_43009;
var statearr_43012_43036 = state_43009__$1;
(statearr_43012_43036[(2)] = null);

(statearr_43012_43036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43010 === (4))){
var inst_42991 = (state_43009[(7)]);
var inst_42991__$1 = (state_43009[(2)]);
var inst_42992 = (inst_42991__$1 == null);
var state_43009__$1 = (function (){var statearr_43013 = state_43009;
(statearr_43013[(7)] = inst_42991__$1);

return statearr_43013;
})();
if(cljs.core.truth_(inst_42992)){
var statearr_43014_43037 = state_43009__$1;
(statearr_43014_43037[(1)] = (5));

} else {
var statearr_43015_43038 = state_43009__$1;
(statearr_43015_43038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43010 === (6))){
var inst_42991 = (state_43009[(7)]);
var inst_42996 = p.call(null,inst_42991);
var state_43009__$1 = state_43009;
if(cljs.core.truth_(inst_42996)){
var statearr_43016_43039 = state_43009__$1;
(statearr_43016_43039[(1)] = (8));

} else {
var statearr_43017_43040 = state_43009__$1;
(statearr_43017_43040[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43010 === (3))){
var inst_43007 = (state_43009[(2)]);
var state_43009__$1 = state_43009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43009__$1,inst_43007);
} else {
if((state_val_43010 === (2))){
var state_43009__$1 = state_43009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43009__$1,(4),ch);
} else {
if((state_val_43010 === (11))){
var inst_42999 = (state_43009[(2)]);
var state_43009__$1 = state_43009;
var statearr_43018_43041 = state_43009__$1;
(statearr_43018_43041[(2)] = inst_42999);

(statearr_43018_43041[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43010 === (9))){
var state_43009__$1 = state_43009;
var statearr_43019_43042 = state_43009__$1;
(statearr_43019_43042[(2)] = null);

(statearr_43019_43042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43010 === (5))){
var inst_42994 = cljs.core.async.close_BANG_.call(null,out);
var state_43009__$1 = state_43009;
var statearr_43020_43043 = state_43009__$1;
(statearr_43020_43043[(2)] = inst_42994);

(statearr_43020_43043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43010 === (10))){
var inst_43002 = (state_43009[(2)]);
var state_43009__$1 = (function (){var statearr_43021 = state_43009;
(statearr_43021[(8)] = inst_43002);

return statearr_43021;
})();
var statearr_43022_43044 = state_43009__$1;
(statearr_43022_43044[(2)] = null);

(statearr_43022_43044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43010 === (8))){
var inst_42991 = (state_43009[(7)]);
var state_43009__$1 = state_43009;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43009__$1,(11),out,inst_42991);
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
}
}
}
});})(c__40682__auto___43034,out))
;
return ((function (switch__40570__auto__,c__40682__auto___43034,out){
return (function() {
var cljs$core$async$state_machine__40571__auto__ = null;
var cljs$core$async$state_machine__40571__auto____0 = (function (){
var statearr_43026 = [null,null,null,null,null,null,null,null,null];
(statearr_43026[(0)] = cljs$core$async$state_machine__40571__auto__);

(statearr_43026[(1)] = (1));

return statearr_43026;
});
var cljs$core$async$state_machine__40571__auto____1 = (function (state_43009){
while(true){
var ret_value__40572__auto__ = (function (){try{while(true){
var result__40573__auto__ = switch__40570__auto__.call(null,state_43009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40573__auto__;
}
break;
}
}catch (e43027){if((e43027 instanceof Object)){
var ex__40574__auto__ = e43027;
var statearr_43028_43045 = state_43009;
(statearr_43028_43045[(5)] = ex__40574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43046 = state_43009;
state_43009 = G__43046;
continue;
} else {
return ret_value__40572__auto__;
}
break;
}
});
cljs$core$async$state_machine__40571__auto__ = function(state_43009){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40571__auto____1.call(this,state_43009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40571__auto____0;
cljs$core$async$state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40571__auto____1;
return cljs$core$async$state_machine__40571__auto__;
})()
;})(switch__40570__auto__,c__40682__auto___43034,out))
})();
var state__40684__auto__ = (function (){var statearr_43029 = f__40683__auto__.call(null);
(statearr_43029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40682__auto___43034);

return statearr_43029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40684__auto__);
});})(c__40682__auto___43034,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args43047 = [];
var len__37879__auto___43050 = arguments.length;
var i__37880__auto___43051 = (0);
while(true){
if((i__37880__auto___43051 < len__37879__auto___43050)){
args43047.push((arguments[i__37880__auto___43051]));

var G__43052 = (i__37880__auto___43051 + (1));
i__37880__auto___43051 = G__43052;
continue;
} else {
}
break;
}

var G__43049 = args43047.length;
switch (G__43049) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43047.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__40682__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40682__auto__){
return (function (){
var f__40683__auto__ = (function (){var switch__40570__auto__ = ((function (c__40682__auto__){
return (function (state_43219){
var state_val_43220 = (state_43219[(1)]);
if((state_val_43220 === (7))){
var inst_43215 = (state_43219[(2)]);
var state_43219__$1 = state_43219;
var statearr_43221_43262 = state_43219__$1;
(statearr_43221_43262[(2)] = inst_43215);

(statearr_43221_43262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43220 === (20))){
var inst_43185 = (state_43219[(7)]);
var inst_43196 = (state_43219[(2)]);
var inst_43197 = cljs.core.next.call(null,inst_43185);
var inst_43171 = inst_43197;
var inst_43172 = null;
var inst_43173 = (0);
var inst_43174 = (0);
var state_43219__$1 = (function (){var statearr_43222 = state_43219;
(statearr_43222[(8)] = inst_43173);

(statearr_43222[(9)] = inst_43172);

(statearr_43222[(10)] = inst_43171);

(statearr_43222[(11)] = inst_43174);

(statearr_43222[(12)] = inst_43196);

return statearr_43222;
})();
var statearr_43223_43263 = state_43219__$1;
(statearr_43223_43263[(2)] = null);

(statearr_43223_43263[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43220 === (1))){
var state_43219__$1 = state_43219;
var statearr_43224_43264 = state_43219__$1;
(statearr_43224_43264[(2)] = null);

(statearr_43224_43264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43220 === (4))){
var inst_43160 = (state_43219[(13)]);
var inst_43160__$1 = (state_43219[(2)]);
var inst_43161 = (inst_43160__$1 == null);
var state_43219__$1 = (function (){var statearr_43225 = state_43219;
(statearr_43225[(13)] = inst_43160__$1);

return statearr_43225;
})();
if(cljs.core.truth_(inst_43161)){
var statearr_43226_43265 = state_43219__$1;
(statearr_43226_43265[(1)] = (5));

} else {
var statearr_43227_43266 = state_43219__$1;
(statearr_43227_43266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43220 === (15))){
var state_43219__$1 = state_43219;
var statearr_43231_43267 = state_43219__$1;
(statearr_43231_43267[(2)] = null);

(statearr_43231_43267[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43220 === (21))){
var state_43219__$1 = state_43219;
var statearr_43232_43268 = state_43219__$1;
(statearr_43232_43268[(2)] = null);

(statearr_43232_43268[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43220 === (13))){
var inst_43173 = (state_43219[(8)]);
var inst_43172 = (state_43219[(9)]);
var inst_43171 = (state_43219[(10)]);
var inst_43174 = (state_43219[(11)]);
var inst_43181 = (state_43219[(2)]);
var inst_43182 = (inst_43174 + (1));
var tmp43228 = inst_43173;
var tmp43229 = inst_43172;
var tmp43230 = inst_43171;
var inst_43171__$1 = tmp43230;
var inst_43172__$1 = tmp43229;
var inst_43173__$1 = tmp43228;
var inst_43174__$1 = inst_43182;
var state_43219__$1 = (function (){var statearr_43233 = state_43219;
(statearr_43233[(8)] = inst_43173__$1);

(statearr_43233[(9)] = inst_43172__$1);

(statearr_43233[(10)] = inst_43171__$1);

(statearr_43233[(11)] = inst_43174__$1);

(statearr_43233[(14)] = inst_43181);

return statearr_43233;
})();
var statearr_43234_43269 = state_43219__$1;
(statearr_43234_43269[(2)] = null);

(statearr_43234_43269[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43220 === (22))){
var state_43219__$1 = state_43219;
var statearr_43235_43270 = state_43219__$1;
(statearr_43235_43270[(2)] = null);

(statearr_43235_43270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43220 === (6))){
var inst_43160 = (state_43219[(13)]);
var inst_43169 = f.call(null,inst_43160);
var inst_43170 = cljs.core.seq.call(null,inst_43169);
var inst_43171 = inst_43170;
var inst_43172 = null;
var inst_43173 = (0);
var inst_43174 = (0);
var state_43219__$1 = (function (){var statearr_43236 = state_43219;
(statearr_43236[(8)] = inst_43173);

(statearr_43236[(9)] = inst_43172);

(statearr_43236[(10)] = inst_43171);

(statearr_43236[(11)] = inst_43174);

return statearr_43236;
})();
var statearr_43237_43271 = state_43219__$1;
(statearr_43237_43271[(2)] = null);

(statearr_43237_43271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43220 === (17))){
var inst_43185 = (state_43219[(7)]);
var inst_43189 = cljs.core.chunk_first.call(null,inst_43185);
var inst_43190 = cljs.core.chunk_rest.call(null,inst_43185);
var inst_43191 = cljs.core.count.call(null,inst_43189);
var inst_43171 = inst_43190;
var inst_43172 = inst_43189;
var inst_43173 = inst_43191;
var inst_43174 = (0);
var state_43219__$1 = (function (){var statearr_43238 = state_43219;
(statearr_43238[(8)] = inst_43173);

(statearr_43238[(9)] = inst_43172);

(statearr_43238[(10)] = inst_43171);

(statearr_43238[(11)] = inst_43174);

return statearr_43238;
})();
var statearr_43239_43272 = state_43219__$1;
(statearr_43239_43272[(2)] = null);

(statearr_43239_43272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43220 === (3))){
var inst_43217 = (state_43219[(2)]);
var state_43219__$1 = state_43219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43219__$1,inst_43217);
} else {
if((state_val_43220 === (12))){
var inst_43205 = (state_43219[(2)]);
var state_43219__$1 = state_43219;
var statearr_43240_43273 = state_43219__$1;
(statearr_43240_43273[(2)] = inst_43205);

(statearr_43240_43273[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43220 === (2))){
var state_43219__$1 = state_43219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43219__$1,(4),in$);
} else {
if((state_val_43220 === (23))){
var inst_43213 = (state_43219[(2)]);
var state_43219__$1 = state_43219;
var statearr_43241_43274 = state_43219__$1;
(statearr_43241_43274[(2)] = inst_43213);

(statearr_43241_43274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43220 === (19))){
var inst_43200 = (state_43219[(2)]);
var state_43219__$1 = state_43219;
var statearr_43242_43275 = state_43219__$1;
(statearr_43242_43275[(2)] = inst_43200);

(statearr_43242_43275[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43220 === (11))){
var inst_43171 = (state_43219[(10)]);
var inst_43185 = (state_43219[(7)]);
var inst_43185__$1 = cljs.core.seq.call(null,inst_43171);
var state_43219__$1 = (function (){var statearr_43243 = state_43219;
(statearr_43243[(7)] = inst_43185__$1);

return statearr_43243;
})();
if(inst_43185__$1){
var statearr_43244_43276 = state_43219__$1;
(statearr_43244_43276[(1)] = (14));

} else {
var statearr_43245_43277 = state_43219__$1;
(statearr_43245_43277[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43220 === (9))){
var inst_43207 = (state_43219[(2)]);
var inst_43208 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_43219__$1 = (function (){var statearr_43246 = state_43219;
(statearr_43246[(15)] = inst_43207);

return statearr_43246;
})();
if(cljs.core.truth_(inst_43208)){
var statearr_43247_43278 = state_43219__$1;
(statearr_43247_43278[(1)] = (21));

} else {
var statearr_43248_43279 = state_43219__$1;
(statearr_43248_43279[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43220 === (5))){
var inst_43163 = cljs.core.async.close_BANG_.call(null,out);
var state_43219__$1 = state_43219;
var statearr_43249_43280 = state_43219__$1;
(statearr_43249_43280[(2)] = inst_43163);

(statearr_43249_43280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43220 === (14))){
var inst_43185 = (state_43219[(7)]);
var inst_43187 = cljs.core.chunked_seq_QMARK_.call(null,inst_43185);
var state_43219__$1 = state_43219;
if(inst_43187){
var statearr_43250_43281 = state_43219__$1;
(statearr_43250_43281[(1)] = (17));

} else {
var statearr_43251_43282 = state_43219__$1;
(statearr_43251_43282[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43220 === (16))){
var inst_43203 = (state_43219[(2)]);
var state_43219__$1 = state_43219;
var statearr_43252_43283 = state_43219__$1;
(statearr_43252_43283[(2)] = inst_43203);

(statearr_43252_43283[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43220 === (10))){
var inst_43172 = (state_43219[(9)]);
var inst_43174 = (state_43219[(11)]);
var inst_43179 = cljs.core._nth.call(null,inst_43172,inst_43174);
var state_43219__$1 = state_43219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43219__$1,(13),out,inst_43179);
} else {
if((state_val_43220 === (18))){
var inst_43185 = (state_43219[(7)]);
var inst_43194 = cljs.core.first.call(null,inst_43185);
var state_43219__$1 = state_43219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43219__$1,(20),out,inst_43194);
} else {
if((state_val_43220 === (8))){
var inst_43173 = (state_43219[(8)]);
var inst_43174 = (state_43219[(11)]);
var inst_43176 = (inst_43174 < inst_43173);
var inst_43177 = inst_43176;
var state_43219__$1 = state_43219;
if(cljs.core.truth_(inst_43177)){
var statearr_43253_43284 = state_43219__$1;
(statearr_43253_43284[(1)] = (10));

} else {
var statearr_43254_43285 = state_43219__$1;
(statearr_43254_43285[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40682__auto__))
;
return ((function (switch__40570__auto__,c__40682__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__40571__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__40571__auto____0 = (function (){
var statearr_43258 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43258[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__40571__auto__);

(statearr_43258[(1)] = (1));

return statearr_43258;
});
var cljs$core$async$mapcat_STAR__$_state_machine__40571__auto____1 = (function (state_43219){
while(true){
var ret_value__40572__auto__ = (function (){try{while(true){
var result__40573__auto__ = switch__40570__auto__.call(null,state_43219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40573__auto__;
}
break;
}
}catch (e43259){if((e43259 instanceof Object)){
var ex__40574__auto__ = e43259;
var statearr_43260_43286 = state_43219;
(statearr_43260_43286[(5)] = ex__40574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43287 = state_43219;
state_43219 = G__43287;
continue;
} else {
return ret_value__40572__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__40571__auto__ = function(state_43219){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__40571__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__40571__auto____1.call(this,state_43219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__40571__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__40571__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__40571__auto__;
})()
;})(switch__40570__auto__,c__40682__auto__))
})();
var state__40684__auto__ = (function (){var statearr_43261 = f__40683__auto__.call(null);
(statearr_43261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40682__auto__);

return statearr_43261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40684__auto__);
});})(c__40682__auto__))
);

return c__40682__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args43288 = [];
var len__37879__auto___43291 = arguments.length;
var i__37880__auto___43292 = (0);
while(true){
if((i__37880__auto___43292 < len__37879__auto___43291)){
args43288.push((arguments[i__37880__auto___43292]));

var G__43293 = (i__37880__auto___43292 + (1));
i__37880__auto___43292 = G__43293;
continue;
} else {
}
break;
}

var G__43290 = args43288.length;
switch (G__43290) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43288.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args43295 = [];
var len__37879__auto___43298 = arguments.length;
var i__37880__auto___43299 = (0);
while(true){
if((i__37880__auto___43299 < len__37879__auto___43298)){
args43295.push((arguments[i__37880__auto___43299]));

var G__43300 = (i__37880__auto___43299 + (1));
i__37880__auto___43299 = G__43300;
continue;
} else {
}
break;
}

var G__43297 = args43295.length;
switch (G__43297) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43295.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args43302 = [];
var len__37879__auto___43353 = arguments.length;
var i__37880__auto___43354 = (0);
while(true){
if((i__37880__auto___43354 < len__37879__auto___43353)){
args43302.push((arguments[i__37880__auto___43354]));

var G__43355 = (i__37880__auto___43354 + (1));
i__37880__auto___43354 = G__43355;
continue;
} else {
}
break;
}

var G__43304 = args43302.length;
switch (G__43304) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43302.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40682__auto___43357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40682__auto___43357,out){
return (function (){
var f__40683__auto__ = (function (){var switch__40570__auto__ = ((function (c__40682__auto___43357,out){
return (function (state_43328){
var state_val_43329 = (state_43328[(1)]);
if((state_val_43329 === (7))){
var inst_43323 = (state_43328[(2)]);
var state_43328__$1 = state_43328;
var statearr_43330_43358 = state_43328__$1;
(statearr_43330_43358[(2)] = inst_43323);

(statearr_43330_43358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43329 === (1))){
var inst_43305 = null;
var state_43328__$1 = (function (){var statearr_43331 = state_43328;
(statearr_43331[(7)] = inst_43305);

return statearr_43331;
})();
var statearr_43332_43359 = state_43328__$1;
(statearr_43332_43359[(2)] = null);

(statearr_43332_43359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43329 === (4))){
var inst_43308 = (state_43328[(8)]);
var inst_43308__$1 = (state_43328[(2)]);
var inst_43309 = (inst_43308__$1 == null);
var inst_43310 = cljs.core.not.call(null,inst_43309);
var state_43328__$1 = (function (){var statearr_43333 = state_43328;
(statearr_43333[(8)] = inst_43308__$1);

return statearr_43333;
})();
if(inst_43310){
var statearr_43334_43360 = state_43328__$1;
(statearr_43334_43360[(1)] = (5));

} else {
var statearr_43335_43361 = state_43328__$1;
(statearr_43335_43361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43329 === (6))){
var state_43328__$1 = state_43328;
var statearr_43336_43362 = state_43328__$1;
(statearr_43336_43362[(2)] = null);

(statearr_43336_43362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43329 === (3))){
var inst_43325 = (state_43328[(2)]);
var inst_43326 = cljs.core.async.close_BANG_.call(null,out);
var state_43328__$1 = (function (){var statearr_43337 = state_43328;
(statearr_43337[(9)] = inst_43325);

return statearr_43337;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43328__$1,inst_43326);
} else {
if((state_val_43329 === (2))){
var state_43328__$1 = state_43328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43328__$1,(4),ch);
} else {
if((state_val_43329 === (11))){
var inst_43308 = (state_43328[(8)]);
var inst_43317 = (state_43328[(2)]);
var inst_43305 = inst_43308;
var state_43328__$1 = (function (){var statearr_43338 = state_43328;
(statearr_43338[(10)] = inst_43317);

(statearr_43338[(7)] = inst_43305);

return statearr_43338;
})();
var statearr_43339_43363 = state_43328__$1;
(statearr_43339_43363[(2)] = null);

(statearr_43339_43363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43329 === (9))){
var inst_43308 = (state_43328[(8)]);
var state_43328__$1 = state_43328;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43328__$1,(11),out,inst_43308);
} else {
if((state_val_43329 === (5))){
var inst_43305 = (state_43328[(7)]);
var inst_43308 = (state_43328[(8)]);
var inst_43312 = cljs.core._EQ_.call(null,inst_43308,inst_43305);
var state_43328__$1 = state_43328;
if(inst_43312){
var statearr_43341_43364 = state_43328__$1;
(statearr_43341_43364[(1)] = (8));

} else {
var statearr_43342_43365 = state_43328__$1;
(statearr_43342_43365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43329 === (10))){
var inst_43320 = (state_43328[(2)]);
var state_43328__$1 = state_43328;
var statearr_43343_43366 = state_43328__$1;
(statearr_43343_43366[(2)] = inst_43320);

(statearr_43343_43366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43329 === (8))){
var inst_43305 = (state_43328[(7)]);
var tmp43340 = inst_43305;
var inst_43305__$1 = tmp43340;
var state_43328__$1 = (function (){var statearr_43344 = state_43328;
(statearr_43344[(7)] = inst_43305__$1);

return statearr_43344;
})();
var statearr_43345_43367 = state_43328__$1;
(statearr_43345_43367[(2)] = null);

(statearr_43345_43367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
});})(c__40682__auto___43357,out))
;
return ((function (switch__40570__auto__,c__40682__auto___43357,out){
return (function() {
var cljs$core$async$state_machine__40571__auto__ = null;
var cljs$core$async$state_machine__40571__auto____0 = (function (){
var statearr_43349 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43349[(0)] = cljs$core$async$state_machine__40571__auto__);

(statearr_43349[(1)] = (1));

return statearr_43349;
});
var cljs$core$async$state_machine__40571__auto____1 = (function (state_43328){
while(true){
var ret_value__40572__auto__ = (function (){try{while(true){
var result__40573__auto__ = switch__40570__auto__.call(null,state_43328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40573__auto__;
}
break;
}
}catch (e43350){if((e43350 instanceof Object)){
var ex__40574__auto__ = e43350;
var statearr_43351_43368 = state_43328;
(statearr_43351_43368[(5)] = ex__40574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43369 = state_43328;
state_43328 = G__43369;
continue;
} else {
return ret_value__40572__auto__;
}
break;
}
});
cljs$core$async$state_machine__40571__auto__ = function(state_43328){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40571__auto____1.call(this,state_43328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40571__auto____0;
cljs$core$async$state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40571__auto____1;
return cljs$core$async$state_machine__40571__auto__;
})()
;})(switch__40570__auto__,c__40682__auto___43357,out))
})();
var state__40684__auto__ = (function (){var statearr_43352 = f__40683__auto__.call(null);
(statearr_43352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40682__auto___43357);

return statearr_43352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40684__auto__);
});})(c__40682__auto___43357,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args43370 = [];
var len__37879__auto___43440 = arguments.length;
var i__37880__auto___43441 = (0);
while(true){
if((i__37880__auto___43441 < len__37879__auto___43440)){
args43370.push((arguments[i__37880__auto___43441]));

var G__43442 = (i__37880__auto___43441 + (1));
i__37880__auto___43441 = G__43442;
continue;
} else {
}
break;
}

var G__43372 = args43370.length;
switch (G__43372) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43370.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40682__auto___43444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40682__auto___43444,out){
return (function (){
var f__40683__auto__ = (function (){var switch__40570__auto__ = ((function (c__40682__auto___43444,out){
return (function (state_43410){
var state_val_43411 = (state_43410[(1)]);
if((state_val_43411 === (7))){
var inst_43406 = (state_43410[(2)]);
var state_43410__$1 = state_43410;
var statearr_43412_43445 = state_43410__$1;
(statearr_43412_43445[(2)] = inst_43406);

(statearr_43412_43445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (1))){
var inst_43373 = (new Array(n));
var inst_43374 = inst_43373;
var inst_43375 = (0);
var state_43410__$1 = (function (){var statearr_43413 = state_43410;
(statearr_43413[(7)] = inst_43375);

(statearr_43413[(8)] = inst_43374);

return statearr_43413;
})();
var statearr_43414_43446 = state_43410__$1;
(statearr_43414_43446[(2)] = null);

(statearr_43414_43446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (4))){
var inst_43378 = (state_43410[(9)]);
var inst_43378__$1 = (state_43410[(2)]);
var inst_43379 = (inst_43378__$1 == null);
var inst_43380 = cljs.core.not.call(null,inst_43379);
var state_43410__$1 = (function (){var statearr_43415 = state_43410;
(statearr_43415[(9)] = inst_43378__$1);

return statearr_43415;
})();
if(inst_43380){
var statearr_43416_43447 = state_43410__$1;
(statearr_43416_43447[(1)] = (5));

} else {
var statearr_43417_43448 = state_43410__$1;
(statearr_43417_43448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (15))){
var inst_43400 = (state_43410[(2)]);
var state_43410__$1 = state_43410;
var statearr_43418_43449 = state_43410__$1;
(statearr_43418_43449[(2)] = inst_43400);

(statearr_43418_43449[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (13))){
var state_43410__$1 = state_43410;
var statearr_43419_43450 = state_43410__$1;
(statearr_43419_43450[(2)] = null);

(statearr_43419_43450[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (6))){
var inst_43375 = (state_43410[(7)]);
var inst_43396 = (inst_43375 > (0));
var state_43410__$1 = state_43410;
if(cljs.core.truth_(inst_43396)){
var statearr_43420_43451 = state_43410__$1;
(statearr_43420_43451[(1)] = (12));

} else {
var statearr_43421_43452 = state_43410__$1;
(statearr_43421_43452[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (3))){
var inst_43408 = (state_43410[(2)]);
var state_43410__$1 = state_43410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43410__$1,inst_43408);
} else {
if((state_val_43411 === (12))){
var inst_43374 = (state_43410[(8)]);
var inst_43398 = cljs.core.vec.call(null,inst_43374);
var state_43410__$1 = state_43410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43410__$1,(15),out,inst_43398);
} else {
if((state_val_43411 === (2))){
var state_43410__$1 = state_43410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43410__$1,(4),ch);
} else {
if((state_val_43411 === (11))){
var inst_43390 = (state_43410[(2)]);
var inst_43391 = (new Array(n));
var inst_43374 = inst_43391;
var inst_43375 = (0);
var state_43410__$1 = (function (){var statearr_43422 = state_43410;
(statearr_43422[(10)] = inst_43390);

(statearr_43422[(7)] = inst_43375);

(statearr_43422[(8)] = inst_43374);

return statearr_43422;
})();
var statearr_43423_43453 = state_43410__$1;
(statearr_43423_43453[(2)] = null);

(statearr_43423_43453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (9))){
var inst_43374 = (state_43410[(8)]);
var inst_43388 = cljs.core.vec.call(null,inst_43374);
var state_43410__$1 = state_43410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43410__$1,(11),out,inst_43388);
} else {
if((state_val_43411 === (5))){
var inst_43378 = (state_43410[(9)]);
var inst_43375 = (state_43410[(7)]);
var inst_43374 = (state_43410[(8)]);
var inst_43383 = (state_43410[(11)]);
var inst_43382 = (inst_43374[inst_43375] = inst_43378);
var inst_43383__$1 = (inst_43375 + (1));
var inst_43384 = (inst_43383__$1 < n);
var state_43410__$1 = (function (){var statearr_43424 = state_43410;
(statearr_43424[(11)] = inst_43383__$1);

(statearr_43424[(12)] = inst_43382);

return statearr_43424;
})();
if(cljs.core.truth_(inst_43384)){
var statearr_43425_43454 = state_43410__$1;
(statearr_43425_43454[(1)] = (8));

} else {
var statearr_43426_43455 = state_43410__$1;
(statearr_43426_43455[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (14))){
var inst_43403 = (state_43410[(2)]);
var inst_43404 = cljs.core.async.close_BANG_.call(null,out);
var state_43410__$1 = (function (){var statearr_43428 = state_43410;
(statearr_43428[(13)] = inst_43403);

return statearr_43428;
})();
var statearr_43429_43456 = state_43410__$1;
(statearr_43429_43456[(2)] = inst_43404);

(statearr_43429_43456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (10))){
var inst_43394 = (state_43410[(2)]);
var state_43410__$1 = state_43410;
var statearr_43430_43457 = state_43410__$1;
(statearr_43430_43457[(2)] = inst_43394);

(statearr_43430_43457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (8))){
var inst_43374 = (state_43410[(8)]);
var inst_43383 = (state_43410[(11)]);
var tmp43427 = inst_43374;
var inst_43374__$1 = tmp43427;
var inst_43375 = inst_43383;
var state_43410__$1 = (function (){var statearr_43431 = state_43410;
(statearr_43431[(7)] = inst_43375);

(statearr_43431[(8)] = inst_43374__$1);

return statearr_43431;
})();
var statearr_43432_43458 = state_43410__$1;
(statearr_43432_43458[(2)] = null);

(statearr_43432_43458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
});})(c__40682__auto___43444,out))
;
return ((function (switch__40570__auto__,c__40682__auto___43444,out){
return (function() {
var cljs$core$async$state_machine__40571__auto__ = null;
var cljs$core$async$state_machine__40571__auto____0 = (function (){
var statearr_43436 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43436[(0)] = cljs$core$async$state_machine__40571__auto__);

(statearr_43436[(1)] = (1));

return statearr_43436;
});
var cljs$core$async$state_machine__40571__auto____1 = (function (state_43410){
while(true){
var ret_value__40572__auto__ = (function (){try{while(true){
var result__40573__auto__ = switch__40570__auto__.call(null,state_43410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40573__auto__;
}
break;
}
}catch (e43437){if((e43437 instanceof Object)){
var ex__40574__auto__ = e43437;
var statearr_43438_43459 = state_43410;
(statearr_43438_43459[(5)] = ex__40574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43460 = state_43410;
state_43410 = G__43460;
continue;
} else {
return ret_value__40572__auto__;
}
break;
}
});
cljs$core$async$state_machine__40571__auto__ = function(state_43410){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40571__auto____1.call(this,state_43410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40571__auto____0;
cljs$core$async$state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40571__auto____1;
return cljs$core$async$state_machine__40571__auto__;
})()
;})(switch__40570__auto__,c__40682__auto___43444,out))
})();
var state__40684__auto__ = (function (){var statearr_43439 = f__40683__auto__.call(null);
(statearr_43439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40682__auto___43444);

return statearr_43439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40684__auto__);
});})(c__40682__auto___43444,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args43461 = [];
var len__37879__auto___43535 = arguments.length;
var i__37880__auto___43536 = (0);
while(true){
if((i__37880__auto___43536 < len__37879__auto___43535)){
args43461.push((arguments[i__37880__auto___43536]));

var G__43537 = (i__37880__auto___43536 + (1));
i__37880__auto___43536 = G__43537;
continue;
} else {
}
break;
}

var G__43463 = args43461.length;
switch (G__43463) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43461.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40682__auto___43539 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40682__auto___43539,out){
return (function (){
var f__40683__auto__ = (function (){var switch__40570__auto__ = ((function (c__40682__auto___43539,out){
return (function (state_43505){
var state_val_43506 = (state_43505[(1)]);
if((state_val_43506 === (7))){
var inst_43501 = (state_43505[(2)]);
var state_43505__$1 = state_43505;
var statearr_43507_43540 = state_43505__$1;
(statearr_43507_43540[(2)] = inst_43501);

(statearr_43507_43540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43506 === (1))){
var inst_43464 = [];
var inst_43465 = inst_43464;
var inst_43466 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_43505__$1 = (function (){var statearr_43508 = state_43505;
(statearr_43508[(7)] = inst_43465);

(statearr_43508[(8)] = inst_43466);

return statearr_43508;
})();
var statearr_43509_43541 = state_43505__$1;
(statearr_43509_43541[(2)] = null);

(statearr_43509_43541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43506 === (4))){
var inst_43469 = (state_43505[(9)]);
var inst_43469__$1 = (state_43505[(2)]);
var inst_43470 = (inst_43469__$1 == null);
var inst_43471 = cljs.core.not.call(null,inst_43470);
var state_43505__$1 = (function (){var statearr_43510 = state_43505;
(statearr_43510[(9)] = inst_43469__$1);

return statearr_43510;
})();
if(inst_43471){
var statearr_43511_43542 = state_43505__$1;
(statearr_43511_43542[(1)] = (5));

} else {
var statearr_43512_43543 = state_43505__$1;
(statearr_43512_43543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43506 === (15))){
var inst_43495 = (state_43505[(2)]);
var state_43505__$1 = state_43505;
var statearr_43513_43544 = state_43505__$1;
(statearr_43513_43544[(2)] = inst_43495);

(statearr_43513_43544[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43506 === (13))){
var state_43505__$1 = state_43505;
var statearr_43514_43545 = state_43505__$1;
(statearr_43514_43545[(2)] = null);

(statearr_43514_43545[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43506 === (6))){
var inst_43465 = (state_43505[(7)]);
var inst_43490 = inst_43465.length;
var inst_43491 = (inst_43490 > (0));
var state_43505__$1 = state_43505;
if(cljs.core.truth_(inst_43491)){
var statearr_43515_43546 = state_43505__$1;
(statearr_43515_43546[(1)] = (12));

} else {
var statearr_43516_43547 = state_43505__$1;
(statearr_43516_43547[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43506 === (3))){
var inst_43503 = (state_43505[(2)]);
var state_43505__$1 = state_43505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43505__$1,inst_43503);
} else {
if((state_val_43506 === (12))){
var inst_43465 = (state_43505[(7)]);
var inst_43493 = cljs.core.vec.call(null,inst_43465);
var state_43505__$1 = state_43505;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43505__$1,(15),out,inst_43493);
} else {
if((state_val_43506 === (2))){
var state_43505__$1 = state_43505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43505__$1,(4),ch);
} else {
if((state_val_43506 === (11))){
var inst_43473 = (state_43505[(10)]);
var inst_43469 = (state_43505[(9)]);
var inst_43483 = (state_43505[(2)]);
var inst_43484 = [];
var inst_43485 = inst_43484.push(inst_43469);
var inst_43465 = inst_43484;
var inst_43466 = inst_43473;
var state_43505__$1 = (function (){var statearr_43517 = state_43505;
(statearr_43517[(7)] = inst_43465);

(statearr_43517[(11)] = inst_43483);

(statearr_43517[(8)] = inst_43466);

(statearr_43517[(12)] = inst_43485);

return statearr_43517;
})();
var statearr_43518_43548 = state_43505__$1;
(statearr_43518_43548[(2)] = null);

(statearr_43518_43548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43506 === (9))){
var inst_43465 = (state_43505[(7)]);
var inst_43481 = cljs.core.vec.call(null,inst_43465);
var state_43505__$1 = state_43505;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43505__$1,(11),out,inst_43481);
} else {
if((state_val_43506 === (5))){
var inst_43473 = (state_43505[(10)]);
var inst_43469 = (state_43505[(9)]);
var inst_43466 = (state_43505[(8)]);
var inst_43473__$1 = f.call(null,inst_43469);
var inst_43474 = cljs.core._EQ_.call(null,inst_43473__$1,inst_43466);
var inst_43475 = cljs.core.keyword_identical_QMARK_.call(null,inst_43466,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_43476 = (inst_43474) || (inst_43475);
var state_43505__$1 = (function (){var statearr_43519 = state_43505;
(statearr_43519[(10)] = inst_43473__$1);

return statearr_43519;
})();
if(cljs.core.truth_(inst_43476)){
var statearr_43520_43549 = state_43505__$1;
(statearr_43520_43549[(1)] = (8));

} else {
var statearr_43521_43550 = state_43505__$1;
(statearr_43521_43550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43506 === (14))){
var inst_43498 = (state_43505[(2)]);
var inst_43499 = cljs.core.async.close_BANG_.call(null,out);
var state_43505__$1 = (function (){var statearr_43523 = state_43505;
(statearr_43523[(13)] = inst_43498);

return statearr_43523;
})();
var statearr_43524_43551 = state_43505__$1;
(statearr_43524_43551[(2)] = inst_43499);

(statearr_43524_43551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43506 === (10))){
var inst_43488 = (state_43505[(2)]);
var state_43505__$1 = state_43505;
var statearr_43525_43552 = state_43505__$1;
(statearr_43525_43552[(2)] = inst_43488);

(statearr_43525_43552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43506 === (8))){
var inst_43473 = (state_43505[(10)]);
var inst_43465 = (state_43505[(7)]);
var inst_43469 = (state_43505[(9)]);
var inst_43478 = inst_43465.push(inst_43469);
var tmp43522 = inst_43465;
var inst_43465__$1 = tmp43522;
var inst_43466 = inst_43473;
var state_43505__$1 = (function (){var statearr_43526 = state_43505;
(statearr_43526[(7)] = inst_43465__$1);

(statearr_43526[(14)] = inst_43478);

(statearr_43526[(8)] = inst_43466);

return statearr_43526;
})();
var statearr_43527_43553 = state_43505__$1;
(statearr_43527_43553[(2)] = null);

(statearr_43527_43553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
});})(c__40682__auto___43539,out))
;
return ((function (switch__40570__auto__,c__40682__auto___43539,out){
return (function() {
var cljs$core$async$state_machine__40571__auto__ = null;
var cljs$core$async$state_machine__40571__auto____0 = (function (){
var statearr_43531 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43531[(0)] = cljs$core$async$state_machine__40571__auto__);

(statearr_43531[(1)] = (1));

return statearr_43531;
});
var cljs$core$async$state_machine__40571__auto____1 = (function (state_43505){
while(true){
var ret_value__40572__auto__ = (function (){try{while(true){
var result__40573__auto__ = switch__40570__auto__.call(null,state_43505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40573__auto__;
}
break;
}
}catch (e43532){if((e43532 instanceof Object)){
var ex__40574__auto__ = e43532;
var statearr_43533_43554 = state_43505;
(statearr_43533_43554[(5)] = ex__40574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43555 = state_43505;
state_43505 = G__43555;
continue;
} else {
return ret_value__40572__auto__;
}
break;
}
});
cljs$core$async$state_machine__40571__auto__ = function(state_43505){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40571__auto____1.call(this,state_43505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40571__auto____0;
cljs$core$async$state_machine__40571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40571__auto____1;
return cljs$core$async$state_machine__40571__auto__;
})()
;})(switch__40570__auto__,c__40682__auto___43539,out))
})();
var state__40684__auto__ = (function (){var statearr_43534 = f__40683__auto__.call(null);
(statearr_43534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40682__auto___43539);

return statearr_43534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40684__auto__);
});})(c__40682__auto___43539,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map