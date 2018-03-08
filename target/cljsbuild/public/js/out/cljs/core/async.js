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
var args40698 = [];
var len__37851__auto___40704 = arguments.length;
var i__37852__auto___40705 = (0);
while(true){
if((i__37852__auto___40705 < len__37851__auto___40704)){
args40698.push((arguments[i__37852__auto___40705]));

var G__40706 = (i__37852__auto___40705 + (1));
i__37852__auto___40705 = G__40706;
continue;
} else {
}
break;
}

var G__40700 = args40698.length;
switch (G__40700) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40698.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async40701 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40701 = (function (f,blockable,meta40702){
this.f = f;
this.blockable = blockable;
this.meta40702 = meta40702;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40703,meta40702__$1){
var self__ = this;
var _40703__$1 = this;
return (new cljs.core.async.t_cljs$core$async40701(self__.f,self__.blockable,meta40702__$1));
});

cljs.core.async.t_cljs$core$async40701.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40703){
var self__ = this;
var _40703__$1 = this;
return self__.meta40702;
});

cljs.core.async.t_cljs$core$async40701.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async40701.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40701.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async40701.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async40701.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta40702","meta40702",1320818640,null)], null);
});

cljs.core.async.t_cljs$core$async40701.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40701.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40701";

cljs.core.async.t_cljs$core$async40701.cljs$lang$ctorPrWriter = (function (this__37382__auto__,writer__37383__auto__,opt__37384__auto__){
return cljs.core._write.call(null,writer__37383__auto__,"cljs.core.async/t_cljs$core$async40701");
});

cljs.core.async.__GT_t_cljs$core$async40701 = (function cljs$core$async$__GT_t_cljs$core$async40701(f__$1,blockable__$1,meta40702){
return (new cljs.core.async.t_cljs$core$async40701(f__$1,blockable__$1,meta40702));
});

}

return (new cljs.core.async.t_cljs$core$async40701(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args40710 = [];
var len__37851__auto___40713 = arguments.length;
var i__37852__auto___40714 = (0);
while(true){
if((i__37852__auto___40714 < len__37851__auto___40713)){
args40710.push((arguments[i__37852__auto___40714]));

var G__40715 = (i__37852__auto___40714 + (1));
i__37852__auto___40714 = G__40715;
continue;
} else {
}
break;
}

var G__40712 = args40710.length;
switch (G__40712) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40710.length)].join('')));

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
var args40717 = [];
var len__37851__auto___40720 = arguments.length;
var i__37852__auto___40721 = (0);
while(true){
if((i__37852__auto___40721 < len__37851__auto___40720)){
args40717.push((arguments[i__37852__auto___40721]));

var G__40722 = (i__37852__auto___40721 + (1));
i__37852__auto___40721 = G__40722;
continue;
} else {
}
break;
}

var G__40719 = args40717.length;
switch (G__40719) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40717.length)].join('')));

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
var args40724 = [];
var len__37851__auto___40727 = arguments.length;
var i__37852__auto___40728 = (0);
while(true){
if((i__37852__auto___40728 < len__37851__auto___40727)){
args40724.push((arguments[i__37852__auto___40728]));

var G__40729 = (i__37852__auto___40728 + (1));
i__37852__auto___40728 = G__40729;
continue;
} else {
}
break;
}

var G__40726 = args40724.length;
switch (G__40726) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40724.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_40731 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_40731);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_40731,ret){
return (function (){
return fn1.call(null,val_40731);
});})(val_40731,ret))
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
var args40732 = [];
var len__37851__auto___40735 = arguments.length;
var i__37852__auto___40736 = (0);
while(true){
if((i__37852__auto___40736 < len__37851__auto___40735)){
args40732.push((arguments[i__37852__auto___40736]));

var G__40737 = (i__37852__auto___40736 + (1));
i__37852__auto___40736 = G__40737;
continue;
} else {
}
break;
}

var G__40734 = args40732.length;
switch (G__40734) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40732.length)].join('')));

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
var n__37691__auto___40739 = n;
var x_40740 = (0);
while(true){
if((x_40740 < n__37691__auto___40739)){
(a[x_40740] = (0));

var G__40741 = (x_40740 + (1));
x_40740 = G__40741;
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

var G__40742 = (i + (1));
i = G__40742;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async40746 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40746 = (function (alt_flag,flag,meta40747){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta40747 = meta40747;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_40748,meta40747__$1){
var self__ = this;
var _40748__$1 = this;
return (new cljs.core.async.t_cljs$core$async40746(self__.alt_flag,self__.flag,meta40747__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async40746.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_40748){
var self__ = this;
var _40748__$1 = this;
return self__.meta40747;
});})(flag))
;

cljs.core.async.t_cljs$core$async40746.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async40746.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async40746.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40746.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40746.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta40747","meta40747",-1672040646,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async40746.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40746.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40746";

cljs.core.async.t_cljs$core$async40746.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__37382__auto__,writer__37383__auto__,opt__37384__auto__){
return cljs.core._write.call(null,writer__37383__auto__,"cljs.core.async/t_cljs$core$async40746");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async40746 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async40746(alt_flag__$1,flag__$1,meta40747){
return (new cljs.core.async.t_cljs$core$async40746(alt_flag__$1,flag__$1,meta40747));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async40746(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async40752 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40752 = (function (alt_handler,flag,cb,meta40753){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta40753 = meta40753;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40754,meta40753__$1){
var self__ = this;
var _40754__$1 = this;
return (new cljs.core.async.t_cljs$core$async40752(self__.alt_handler,self__.flag,self__.cb,meta40753__$1));
});

cljs.core.async.t_cljs$core$async40752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40754){
var self__ = this;
var _40754__$1 = this;
return self__.meta40753;
});

cljs.core.async.t_cljs$core$async40752.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async40752.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async40752.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40752.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async40752.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta40753","meta40753",-2019747110,null)], null);
});

cljs.core.async.t_cljs$core$async40752.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40752.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40752";

cljs.core.async.t_cljs$core$async40752.cljs$lang$ctorPrWriter = (function (this__37382__auto__,writer__37383__auto__,opt__37384__auto__){
return cljs.core._write.call(null,writer__37383__auto__,"cljs.core.async/t_cljs$core$async40752");
});

cljs.core.async.__GT_t_cljs$core$async40752 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async40752(alt_handler__$1,flag__$1,cb__$1,meta40753){
return (new cljs.core.async.t_cljs$core$async40752(alt_handler__$1,flag__$1,cb__$1,meta40753));
});

}

return (new cljs.core.async.t_cljs$core$async40752(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__40755_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40755_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40756_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40756_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__36776__auto__ = wport;
if(cljs.core.truth_(or__36776__auto__)){
return or__36776__auto__;
} else {
return port;
}
})()], null));
} else {
var G__40757 = (i + (1));
i = G__40757;
continue;
}
} else {
return null;
}
break;
}
})();
var or__36776__auto__ = ret;
if(cljs.core.truth_(or__36776__auto__)){
return or__36776__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__36764__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__36764__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__36764__auto__;
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
var args__37858__auto__ = [];
var len__37851__auto___40763 = arguments.length;
var i__37852__auto___40764 = (0);
while(true){
if((i__37852__auto___40764 < len__37851__auto___40763)){
args__37858__auto__.push((arguments[i__37852__auto___40764]));

var G__40765 = (i__37852__auto___40764 + (1));
i__37852__auto___40764 = G__40765;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((1) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37859__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__40760){
var map__40761 = p__40760;
var map__40761__$1 = ((((!((map__40761 == null)))?((((map__40761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40761):map__40761);
var opts = map__40761__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq40758){
var G__40759 = cljs.core.first.call(null,seq40758);
var seq40758__$1 = cljs.core.next.call(null,seq40758);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40759,seq40758__$1);
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
var args40766 = [];
var len__37851__auto___40816 = arguments.length;
var i__37852__auto___40817 = (0);
while(true){
if((i__37852__auto___40817 < len__37851__auto___40816)){
args40766.push((arguments[i__37852__auto___40817]));

var G__40818 = (i__37852__auto___40817 + (1));
i__37852__auto___40817 = G__40818;
continue;
} else {
}
break;
}

var G__40768 = args40766.length;
switch (G__40768) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40766.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__40653__auto___40820 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40653__auto___40820){
return (function (){
var f__40654__auto__ = (function (){var switch__40541__auto__ = ((function (c__40653__auto___40820){
return (function (state_40792){
var state_val_40793 = (state_40792[(1)]);
if((state_val_40793 === (7))){
var inst_40788 = (state_40792[(2)]);
var state_40792__$1 = state_40792;
var statearr_40794_40821 = state_40792__$1;
(statearr_40794_40821[(2)] = inst_40788);

(statearr_40794_40821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40793 === (1))){
var state_40792__$1 = state_40792;
var statearr_40795_40822 = state_40792__$1;
(statearr_40795_40822[(2)] = null);

(statearr_40795_40822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40793 === (4))){
var inst_40771 = (state_40792[(7)]);
var inst_40771__$1 = (state_40792[(2)]);
var inst_40772 = (inst_40771__$1 == null);
var state_40792__$1 = (function (){var statearr_40796 = state_40792;
(statearr_40796[(7)] = inst_40771__$1);

return statearr_40796;
})();
if(cljs.core.truth_(inst_40772)){
var statearr_40797_40823 = state_40792__$1;
(statearr_40797_40823[(1)] = (5));

} else {
var statearr_40798_40824 = state_40792__$1;
(statearr_40798_40824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40793 === (13))){
var state_40792__$1 = state_40792;
var statearr_40799_40825 = state_40792__$1;
(statearr_40799_40825[(2)] = null);

(statearr_40799_40825[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40793 === (6))){
var inst_40771 = (state_40792[(7)]);
var state_40792__$1 = state_40792;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40792__$1,(11),to,inst_40771);
} else {
if((state_val_40793 === (3))){
var inst_40790 = (state_40792[(2)]);
var state_40792__$1 = state_40792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40792__$1,inst_40790);
} else {
if((state_val_40793 === (12))){
var state_40792__$1 = state_40792;
var statearr_40800_40826 = state_40792__$1;
(statearr_40800_40826[(2)] = null);

(statearr_40800_40826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40793 === (2))){
var state_40792__$1 = state_40792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40792__$1,(4),from);
} else {
if((state_val_40793 === (11))){
var inst_40781 = (state_40792[(2)]);
var state_40792__$1 = state_40792;
if(cljs.core.truth_(inst_40781)){
var statearr_40801_40827 = state_40792__$1;
(statearr_40801_40827[(1)] = (12));

} else {
var statearr_40802_40828 = state_40792__$1;
(statearr_40802_40828[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40793 === (9))){
var state_40792__$1 = state_40792;
var statearr_40803_40829 = state_40792__$1;
(statearr_40803_40829[(2)] = null);

(statearr_40803_40829[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40793 === (5))){
var state_40792__$1 = state_40792;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40804_40830 = state_40792__$1;
(statearr_40804_40830[(1)] = (8));

} else {
var statearr_40805_40831 = state_40792__$1;
(statearr_40805_40831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40793 === (14))){
var inst_40786 = (state_40792[(2)]);
var state_40792__$1 = state_40792;
var statearr_40806_40832 = state_40792__$1;
(statearr_40806_40832[(2)] = inst_40786);

(statearr_40806_40832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40793 === (10))){
var inst_40778 = (state_40792[(2)]);
var state_40792__$1 = state_40792;
var statearr_40807_40833 = state_40792__$1;
(statearr_40807_40833[(2)] = inst_40778);

(statearr_40807_40833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40793 === (8))){
var inst_40775 = cljs.core.async.close_BANG_.call(null,to);
var state_40792__$1 = state_40792;
var statearr_40808_40834 = state_40792__$1;
(statearr_40808_40834[(2)] = inst_40775);

(statearr_40808_40834[(1)] = (10));


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
});})(c__40653__auto___40820))
;
return ((function (switch__40541__auto__,c__40653__auto___40820){
return (function() {
var cljs$core$async$state_machine__40542__auto__ = null;
var cljs$core$async$state_machine__40542__auto____0 = (function (){
var statearr_40812 = [null,null,null,null,null,null,null,null];
(statearr_40812[(0)] = cljs$core$async$state_machine__40542__auto__);

(statearr_40812[(1)] = (1));

return statearr_40812;
});
var cljs$core$async$state_machine__40542__auto____1 = (function (state_40792){
while(true){
var ret_value__40543__auto__ = (function (){try{while(true){
var result__40544__auto__ = switch__40541__auto__.call(null,state_40792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40544__auto__;
}
break;
}
}catch (e40813){if((e40813 instanceof Object)){
var ex__40545__auto__ = e40813;
var statearr_40814_40835 = state_40792;
(statearr_40814_40835[(5)] = ex__40545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40836 = state_40792;
state_40792 = G__40836;
continue;
} else {
return ret_value__40543__auto__;
}
break;
}
});
cljs$core$async$state_machine__40542__auto__ = function(state_40792){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40542__auto____1.call(this,state_40792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40542__auto____0;
cljs$core$async$state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40542__auto____1;
return cljs$core$async$state_machine__40542__auto__;
})()
;})(switch__40541__auto__,c__40653__auto___40820))
})();
var state__40655__auto__ = (function (){var statearr_40815 = f__40654__auto__.call(null);
(statearr_40815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40653__auto___40820);

return statearr_40815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40655__auto__);
});})(c__40653__auto___40820))
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
return (function (p__41024){
var vec__41025 = p__41024;
var v = cljs.core.nth.call(null,vec__41025,(0),null);
var p = cljs.core.nth.call(null,vec__41025,(1),null);
var job = vec__41025;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__40653__auto___41211 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40653__auto___41211,res,vec__41025,v,p,job,jobs,results){
return (function (){
var f__40654__auto__ = (function (){var switch__40541__auto__ = ((function (c__40653__auto___41211,res,vec__41025,v,p,job,jobs,results){
return (function (state_41032){
var state_val_41033 = (state_41032[(1)]);
if((state_val_41033 === (1))){
var state_41032__$1 = state_41032;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41032__$1,(2),res,v);
} else {
if((state_val_41033 === (2))){
var inst_41029 = (state_41032[(2)]);
var inst_41030 = cljs.core.async.close_BANG_.call(null,res);
var state_41032__$1 = (function (){var statearr_41034 = state_41032;
(statearr_41034[(7)] = inst_41029);

return statearr_41034;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41032__$1,inst_41030);
} else {
return null;
}
}
});})(c__40653__auto___41211,res,vec__41025,v,p,job,jobs,results))
;
return ((function (switch__40541__auto__,c__40653__auto___41211,res,vec__41025,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40542__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40542__auto____0 = (function (){
var statearr_41038 = [null,null,null,null,null,null,null,null];
(statearr_41038[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40542__auto__);

(statearr_41038[(1)] = (1));

return statearr_41038;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40542__auto____1 = (function (state_41032){
while(true){
var ret_value__40543__auto__ = (function (){try{while(true){
var result__40544__auto__ = switch__40541__auto__.call(null,state_41032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40544__auto__;
}
break;
}
}catch (e41039){if((e41039 instanceof Object)){
var ex__40545__auto__ = e41039;
var statearr_41040_41212 = state_41032;
(statearr_41040_41212[(5)] = ex__40545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41213 = state_41032;
state_41032 = G__41213;
continue;
} else {
return ret_value__40543__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40542__auto__ = function(state_41032){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40542__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40542__auto____1.call(this,state_41032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40542__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40542__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40542__auto__;
})()
;})(switch__40541__auto__,c__40653__auto___41211,res,vec__41025,v,p,job,jobs,results))
})();
var state__40655__auto__ = (function (){var statearr_41041 = f__40654__auto__.call(null);
(statearr_41041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40653__auto___41211);

return statearr_41041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40655__auto__);
});})(c__40653__auto___41211,res,vec__41025,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__41042){
var vec__41043 = p__41042;
var v = cljs.core.nth.call(null,vec__41043,(0),null);
var p = cljs.core.nth.call(null,vec__41043,(1),null);
var job = vec__41043;
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
var n__37691__auto___41214 = n;
var __41215 = (0);
while(true){
if((__41215 < n__37691__auto___41214)){
var G__41046_41216 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__41046_41216) {
case "compute":
var c__40653__auto___41218 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41215,c__40653__auto___41218,G__41046_41216,n__37691__auto___41214,jobs,results,process,async){
return (function (){
var f__40654__auto__ = (function (){var switch__40541__auto__ = ((function (__41215,c__40653__auto___41218,G__41046_41216,n__37691__auto___41214,jobs,results,process,async){
return (function (state_41059){
var state_val_41060 = (state_41059[(1)]);
if((state_val_41060 === (1))){
var state_41059__$1 = state_41059;
var statearr_41061_41219 = state_41059__$1;
(statearr_41061_41219[(2)] = null);

(statearr_41061_41219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41060 === (2))){
var state_41059__$1 = state_41059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41059__$1,(4),jobs);
} else {
if((state_val_41060 === (3))){
var inst_41057 = (state_41059[(2)]);
var state_41059__$1 = state_41059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41059__$1,inst_41057);
} else {
if((state_val_41060 === (4))){
var inst_41049 = (state_41059[(2)]);
var inst_41050 = process.call(null,inst_41049);
var state_41059__$1 = state_41059;
if(cljs.core.truth_(inst_41050)){
var statearr_41062_41220 = state_41059__$1;
(statearr_41062_41220[(1)] = (5));

} else {
var statearr_41063_41221 = state_41059__$1;
(statearr_41063_41221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41060 === (5))){
var state_41059__$1 = state_41059;
var statearr_41064_41222 = state_41059__$1;
(statearr_41064_41222[(2)] = null);

(statearr_41064_41222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41060 === (6))){
var state_41059__$1 = state_41059;
var statearr_41065_41223 = state_41059__$1;
(statearr_41065_41223[(2)] = null);

(statearr_41065_41223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41060 === (7))){
var inst_41055 = (state_41059[(2)]);
var state_41059__$1 = state_41059;
var statearr_41066_41224 = state_41059__$1;
(statearr_41066_41224[(2)] = inst_41055);

(statearr_41066_41224[(1)] = (3));


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
});})(__41215,c__40653__auto___41218,G__41046_41216,n__37691__auto___41214,jobs,results,process,async))
;
return ((function (__41215,switch__40541__auto__,c__40653__auto___41218,G__41046_41216,n__37691__auto___41214,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40542__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40542__auto____0 = (function (){
var statearr_41070 = [null,null,null,null,null,null,null];
(statearr_41070[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40542__auto__);

(statearr_41070[(1)] = (1));

return statearr_41070;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40542__auto____1 = (function (state_41059){
while(true){
var ret_value__40543__auto__ = (function (){try{while(true){
var result__40544__auto__ = switch__40541__auto__.call(null,state_41059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40544__auto__;
}
break;
}
}catch (e41071){if((e41071 instanceof Object)){
var ex__40545__auto__ = e41071;
var statearr_41072_41225 = state_41059;
(statearr_41072_41225[(5)] = ex__40545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41226 = state_41059;
state_41059 = G__41226;
continue;
} else {
return ret_value__40543__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40542__auto__ = function(state_41059){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40542__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40542__auto____1.call(this,state_41059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40542__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40542__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40542__auto__;
})()
;})(__41215,switch__40541__auto__,c__40653__auto___41218,G__41046_41216,n__37691__auto___41214,jobs,results,process,async))
})();
var state__40655__auto__ = (function (){var statearr_41073 = f__40654__auto__.call(null);
(statearr_41073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40653__auto___41218);

return statearr_41073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40655__auto__);
});})(__41215,c__40653__auto___41218,G__41046_41216,n__37691__auto___41214,jobs,results,process,async))
);


break;
case "async":
var c__40653__auto___41227 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41215,c__40653__auto___41227,G__41046_41216,n__37691__auto___41214,jobs,results,process,async){
return (function (){
var f__40654__auto__ = (function (){var switch__40541__auto__ = ((function (__41215,c__40653__auto___41227,G__41046_41216,n__37691__auto___41214,jobs,results,process,async){
return (function (state_41086){
var state_val_41087 = (state_41086[(1)]);
if((state_val_41087 === (1))){
var state_41086__$1 = state_41086;
var statearr_41088_41228 = state_41086__$1;
(statearr_41088_41228[(2)] = null);

(statearr_41088_41228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41087 === (2))){
var state_41086__$1 = state_41086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41086__$1,(4),jobs);
} else {
if((state_val_41087 === (3))){
var inst_41084 = (state_41086[(2)]);
var state_41086__$1 = state_41086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41086__$1,inst_41084);
} else {
if((state_val_41087 === (4))){
var inst_41076 = (state_41086[(2)]);
var inst_41077 = async.call(null,inst_41076);
var state_41086__$1 = state_41086;
if(cljs.core.truth_(inst_41077)){
var statearr_41089_41229 = state_41086__$1;
(statearr_41089_41229[(1)] = (5));

} else {
var statearr_41090_41230 = state_41086__$1;
(statearr_41090_41230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41087 === (5))){
var state_41086__$1 = state_41086;
var statearr_41091_41231 = state_41086__$1;
(statearr_41091_41231[(2)] = null);

(statearr_41091_41231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41087 === (6))){
var state_41086__$1 = state_41086;
var statearr_41092_41232 = state_41086__$1;
(statearr_41092_41232[(2)] = null);

(statearr_41092_41232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41087 === (7))){
var inst_41082 = (state_41086[(2)]);
var state_41086__$1 = state_41086;
var statearr_41093_41233 = state_41086__$1;
(statearr_41093_41233[(2)] = inst_41082);

(statearr_41093_41233[(1)] = (3));


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
});})(__41215,c__40653__auto___41227,G__41046_41216,n__37691__auto___41214,jobs,results,process,async))
;
return ((function (__41215,switch__40541__auto__,c__40653__auto___41227,G__41046_41216,n__37691__auto___41214,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40542__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40542__auto____0 = (function (){
var statearr_41097 = [null,null,null,null,null,null,null];
(statearr_41097[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40542__auto__);

(statearr_41097[(1)] = (1));

return statearr_41097;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40542__auto____1 = (function (state_41086){
while(true){
var ret_value__40543__auto__ = (function (){try{while(true){
var result__40544__auto__ = switch__40541__auto__.call(null,state_41086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40544__auto__;
}
break;
}
}catch (e41098){if((e41098 instanceof Object)){
var ex__40545__auto__ = e41098;
var statearr_41099_41234 = state_41086;
(statearr_41099_41234[(5)] = ex__40545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41235 = state_41086;
state_41086 = G__41235;
continue;
} else {
return ret_value__40543__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40542__auto__ = function(state_41086){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40542__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40542__auto____1.call(this,state_41086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40542__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40542__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40542__auto__;
})()
;})(__41215,switch__40541__auto__,c__40653__auto___41227,G__41046_41216,n__37691__auto___41214,jobs,results,process,async))
})();
var state__40655__auto__ = (function (){var statearr_41100 = f__40654__auto__.call(null);
(statearr_41100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40653__auto___41227);

return statearr_41100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40655__auto__);
});})(__41215,c__40653__auto___41227,G__41046_41216,n__37691__auto___41214,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__41236 = (__41215 + (1));
__41215 = G__41236;
continue;
} else {
}
break;
}

var c__40653__auto___41237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40653__auto___41237,jobs,results,process,async){
return (function (){
var f__40654__auto__ = (function (){var switch__40541__auto__ = ((function (c__40653__auto___41237,jobs,results,process,async){
return (function (state_41122){
var state_val_41123 = (state_41122[(1)]);
if((state_val_41123 === (1))){
var state_41122__$1 = state_41122;
var statearr_41124_41238 = state_41122__$1;
(statearr_41124_41238[(2)] = null);

(statearr_41124_41238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41123 === (2))){
var state_41122__$1 = state_41122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41122__$1,(4),from);
} else {
if((state_val_41123 === (3))){
var inst_41120 = (state_41122[(2)]);
var state_41122__$1 = state_41122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41122__$1,inst_41120);
} else {
if((state_val_41123 === (4))){
var inst_41103 = (state_41122[(7)]);
var inst_41103__$1 = (state_41122[(2)]);
var inst_41104 = (inst_41103__$1 == null);
var state_41122__$1 = (function (){var statearr_41125 = state_41122;
(statearr_41125[(7)] = inst_41103__$1);

return statearr_41125;
})();
if(cljs.core.truth_(inst_41104)){
var statearr_41126_41239 = state_41122__$1;
(statearr_41126_41239[(1)] = (5));

} else {
var statearr_41127_41240 = state_41122__$1;
(statearr_41127_41240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41123 === (5))){
var inst_41106 = cljs.core.async.close_BANG_.call(null,jobs);
var state_41122__$1 = state_41122;
var statearr_41128_41241 = state_41122__$1;
(statearr_41128_41241[(2)] = inst_41106);

(statearr_41128_41241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41123 === (6))){
var inst_41103 = (state_41122[(7)]);
var inst_41108 = (state_41122[(8)]);
var inst_41108__$1 = cljs.core.async.chan.call(null,(1));
var inst_41109 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41110 = [inst_41103,inst_41108__$1];
var inst_41111 = (new cljs.core.PersistentVector(null,2,(5),inst_41109,inst_41110,null));
var state_41122__$1 = (function (){var statearr_41129 = state_41122;
(statearr_41129[(8)] = inst_41108__$1);

return statearr_41129;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41122__$1,(8),jobs,inst_41111);
} else {
if((state_val_41123 === (7))){
var inst_41118 = (state_41122[(2)]);
var state_41122__$1 = state_41122;
var statearr_41130_41242 = state_41122__$1;
(statearr_41130_41242[(2)] = inst_41118);

(statearr_41130_41242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41123 === (8))){
var inst_41108 = (state_41122[(8)]);
var inst_41113 = (state_41122[(2)]);
var state_41122__$1 = (function (){var statearr_41131 = state_41122;
(statearr_41131[(9)] = inst_41113);

return statearr_41131;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41122__$1,(9),results,inst_41108);
} else {
if((state_val_41123 === (9))){
var inst_41115 = (state_41122[(2)]);
var state_41122__$1 = (function (){var statearr_41132 = state_41122;
(statearr_41132[(10)] = inst_41115);

return statearr_41132;
})();
var statearr_41133_41243 = state_41122__$1;
(statearr_41133_41243[(2)] = null);

(statearr_41133_41243[(1)] = (2));


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
});})(c__40653__auto___41237,jobs,results,process,async))
;
return ((function (switch__40541__auto__,c__40653__auto___41237,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40542__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40542__auto____0 = (function (){
var statearr_41137 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41137[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40542__auto__);

(statearr_41137[(1)] = (1));

return statearr_41137;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40542__auto____1 = (function (state_41122){
while(true){
var ret_value__40543__auto__ = (function (){try{while(true){
var result__40544__auto__ = switch__40541__auto__.call(null,state_41122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40544__auto__;
}
break;
}
}catch (e41138){if((e41138 instanceof Object)){
var ex__40545__auto__ = e41138;
var statearr_41139_41244 = state_41122;
(statearr_41139_41244[(5)] = ex__40545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41245 = state_41122;
state_41122 = G__41245;
continue;
} else {
return ret_value__40543__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40542__auto__ = function(state_41122){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40542__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40542__auto____1.call(this,state_41122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40542__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40542__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40542__auto__;
})()
;})(switch__40541__auto__,c__40653__auto___41237,jobs,results,process,async))
})();
var state__40655__auto__ = (function (){var statearr_41140 = f__40654__auto__.call(null);
(statearr_41140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40653__auto___41237);

return statearr_41140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40655__auto__);
});})(c__40653__auto___41237,jobs,results,process,async))
);


var c__40653__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40653__auto__,jobs,results,process,async){
return (function (){
var f__40654__auto__ = (function (){var switch__40541__auto__ = ((function (c__40653__auto__,jobs,results,process,async){
return (function (state_41178){
var state_val_41179 = (state_41178[(1)]);
if((state_val_41179 === (7))){
var inst_41174 = (state_41178[(2)]);
var state_41178__$1 = state_41178;
var statearr_41180_41246 = state_41178__$1;
(statearr_41180_41246[(2)] = inst_41174);

(statearr_41180_41246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41179 === (20))){
var state_41178__$1 = state_41178;
var statearr_41181_41247 = state_41178__$1;
(statearr_41181_41247[(2)] = null);

(statearr_41181_41247[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41179 === (1))){
var state_41178__$1 = state_41178;
var statearr_41182_41248 = state_41178__$1;
(statearr_41182_41248[(2)] = null);

(statearr_41182_41248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41179 === (4))){
var inst_41143 = (state_41178[(7)]);
var inst_41143__$1 = (state_41178[(2)]);
var inst_41144 = (inst_41143__$1 == null);
var state_41178__$1 = (function (){var statearr_41183 = state_41178;
(statearr_41183[(7)] = inst_41143__$1);

return statearr_41183;
})();
if(cljs.core.truth_(inst_41144)){
var statearr_41184_41249 = state_41178__$1;
(statearr_41184_41249[(1)] = (5));

} else {
var statearr_41185_41250 = state_41178__$1;
(statearr_41185_41250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41179 === (15))){
var inst_41156 = (state_41178[(8)]);
var state_41178__$1 = state_41178;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41178__$1,(18),to,inst_41156);
} else {
if((state_val_41179 === (21))){
var inst_41169 = (state_41178[(2)]);
var state_41178__$1 = state_41178;
var statearr_41186_41251 = state_41178__$1;
(statearr_41186_41251[(2)] = inst_41169);

(statearr_41186_41251[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41179 === (13))){
var inst_41171 = (state_41178[(2)]);
var state_41178__$1 = (function (){var statearr_41187 = state_41178;
(statearr_41187[(9)] = inst_41171);

return statearr_41187;
})();
var statearr_41188_41252 = state_41178__$1;
(statearr_41188_41252[(2)] = null);

(statearr_41188_41252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41179 === (6))){
var inst_41143 = (state_41178[(7)]);
var state_41178__$1 = state_41178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41178__$1,(11),inst_41143);
} else {
if((state_val_41179 === (17))){
var inst_41164 = (state_41178[(2)]);
var state_41178__$1 = state_41178;
if(cljs.core.truth_(inst_41164)){
var statearr_41189_41253 = state_41178__$1;
(statearr_41189_41253[(1)] = (19));

} else {
var statearr_41190_41254 = state_41178__$1;
(statearr_41190_41254[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41179 === (3))){
var inst_41176 = (state_41178[(2)]);
var state_41178__$1 = state_41178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41178__$1,inst_41176);
} else {
if((state_val_41179 === (12))){
var inst_41153 = (state_41178[(10)]);
var state_41178__$1 = state_41178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41178__$1,(14),inst_41153);
} else {
if((state_val_41179 === (2))){
var state_41178__$1 = state_41178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41178__$1,(4),results);
} else {
if((state_val_41179 === (19))){
var state_41178__$1 = state_41178;
var statearr_41191_41255 = state_41178__$1;
(statearr_41191_41255[(2)] = null);

(statearr_41191_41255[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41179 === (11))){
var inst_41153 = (state_41178[(2)]);
var state_41178__$1 = (function (){var statearr_41192 = state_41178;
(statearr_41192[(10)] = inst_41153);

return statearr_41192;
})();
var statearr_41193_41256 = state_41178__$1;
(statearr_41193_41256[(2)] = null);

(statearr_41193_41256[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41179 === (9))){
var state_41178__$1 = state_41178;
var statearr_41194_41257 = state_41178__$1;
(statearr_41194_41257[(2)] = null);

(statearr_41194_41257[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41179 === (5))){
var state_41178__$1 = state_41178;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41195_41258 = state_41178__$1;
(statearr_41195_41258[(1)] = (8));

} else {
var statearr_41196_41259 = state_41178__$1;
(statearr_41196_41259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41179 === (14))){
var inst_41156 = (state_41178[(8)]);
var inst_41158 = (state_41178[(11)]);
var inst_41156__$1 = (state_41178[(2)]);
var inst_41157 = (inst_41156__$1 == null);
var inst_41158__$1 = cljs.core.not.call(null,inst_41157);
var state_41178__$1 = (function (){var statearr_41197 = state_41178;
(statearr_41197[(8)] = inst_41156__$1);

(statearr_41197[(11)] = inst_41158__$1);

return statearr_41197;
})();
if(inst_41158__$1){
var statearr_41198_41260 = state_41178__$1;
(statearr_41198_41260[(1)] = (15));

} else {
var statearr_41199_41261 = state_41178__$1;
(statearr_41199_41261[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41179 === (16))){
var inst_41158 = (state_41178[(11)]);
var state_41178__$1 = state_41178;
var statearr_41200_41262 = state_41178__$1;
(statearr_41200_41262[(2)] = inst_41158);

(statearr_41200_41262[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41179 === (10))){
var inst_41150 = (state_41178[(2)]);
var state_41178__$1 = state_41178;
var statearr_41201_41263 = state_41178__$1;
(statearr_41201_41263[(2)] = inst_41150);

(statearr_41201_41263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41179 === (18))){
var inst_41161 = (state_41178[(2)]);
var state_41178__$1 = state_41178;
var statearr_41202_41264 = state_41178__$1;
(statearr_41202_41264[(2)] = inst_41161);

(statearr_41202_41264[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41179 === (8))){
var inst_41147 = cljs.core.async.close_BANG_.call(null,to);
var state_41178__$1 = state_41178;
var statearr_41203_41265 = state_41178__$1;
(statearr_41203_41265[(2)] = inst_41147);

(statearr_41203_41265[(1)] = (10));


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
});})(c__40653__auto__,jobs,results,process,async))
;
return ((function (switch__40541__auto__,c__40653__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40542__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40542__auto____0 = (function (){
var statearr_41207 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41207[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40542__auto__);

(statearr_41207[(1)] = (1));

return statearr_41207;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40542__auto____1 = (function (state_41178){
while(true){
var ret_value__40543__auto__ = (function (){try{while(true){
var result__40544__auto__ = switch__40541__auto__.call(null,state_41178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40544__auto__;
}
break;
}
}catch (e41208){if((e41208 instanceof Object)){
var ex__40545__auto__ = e41208;
var statearr_41209_41266 = state_41178;
(statearr_41209_41266[(5)] = ex__40545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41267 = state_41178;
state_41178 = G__41267;
continue;
} else {
return ret_value__40543__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40542__auto__ = function(state_41178){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40542__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40542__auto____1.call(this,state_41178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40542__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40542__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40542__auto__;
})()
;})(switch__40541__auto__,c__40653__auto__,jobs,results,process,async))
})();
var state__40655__auto__ = (function (){var statearr_41210 = f__40654__auto__.call(null);
(statearr_41210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40653__auto__);

return statearr_41210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40655__auto__);
});})(c__40653__auto__,jobs,results,process,async))
);

return c__40653__auto__;
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
var args41268 = [];
var len__37851__auto___41271 = arguments.length;
var i__37852__auto___41272 = (0);
while(true){
if((i__37852__auto___41272 < len__37851__auto___41271)){
args41268.push((arguments[i__37852__auto___41272]));

var G__41273 = (i__37852__auto___41272 + (1));
i__37852__auto___41272 = G__41273;
continue;
} else {
}
break;
}

var G__41270 = args41268.length;
switch (G__41270) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41268.length)].join('')));

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
var args41275 = [];
var len__37851__auto___41278 = arguments.length;
var i__37852__auto___41279 = (0);
while(true){
if((i__37852__auto___41279 < len__37851__auto___41278)){
args41275.push((arguments[i__37852__auto___41279]));

var G__41280 = (i__37852__auto___41279 + (1));
i__37852__auto___41279 = G__41280;
continue;
} else {
}
break;
}

var G__41277 = args41275.length;
switch (G__41277) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41275.length)].join('')));

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
var args41282 = [];
var len__37851__auto___41335 = arguments.length;
var i__37852__auto___41336 = (0);
while(true){
if((i__37852__auto___41336 < len__37851__auto___41335)){
args41282.push((arguments[i__37852__auto___41336]));

var G__41337 = (i__37852__auto___41336 + (1));
i__37852__auto___41336 = G__41337;
continue;
} else {
}
break;
}

var G__41284 = args41282.length;
switch (G__41284) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41282.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__40653__auto___41339 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40653__auto___41339,tc,fc){
return (function (){
var f__40654__auto__ = (function (){var switch__40541__auto__ = ((function (c__40653__auto___41339,tc,fc){
return (function (state_41310){
var state_val_41311 = (state_41310[(1)]);
if((state_val_41311 === (7))){
var inst_41306 = (state_41310[(2)]);
var state_41310__$1 = state_41310;
var statearr_41312_41340 = state_41310__$1;
(statearr_41312_41340[(2)] = inst_41306);

(statearr_41312_41340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41311 === (1))){
var state_41310__$1 = state_41310;
var statearr_41313_41341 = state_41310__$1;
(statearr_41313_41341[(2)] = null);

(statearr_41313_41341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41311 === (4))){
var inst_41287 = (state_41310[(7)]);
var inst_41287__$1 = (state_41310[(2)]);
var inst_41288 = (inst_41287__$1 == null);
var state_41310__$1 = (function (){var statearr_41314 = state_41310;
(statearr_41314[(7)] = inst_41287__$1);

return statearr_41314;
})();
if(cljs.core.truth_(inst_41288)){
var statearr_41315_41342 = state_41310__$1;
(statearr_41315_41342[(1)] = (5));

} else {
var statearr_41316_41343 = state_41310__$1;
(statearr_41316_41343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41311 === (13))){
var state_41310__$1 = state_41310;
var statearr_41317_41344 = state_41310__$1;
(statearr_41317_41344[(2)] = null);

(statearr_41317_41344[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41311 === (6))){
var inst_41287 = (state_41310[(7)]);
var inst_41293 = p.call(null,inst_41287);
var state_41310__$1 = state_41310;
if(cljs.core.truth_(inst_41293)){
var statearr_41318_41345 = state_41310__$1;
(statearr_41318_41345[(1)] = (9));

} else {
var statearr_41319_41346 = state_41310__$1;
(statearr_41319_41346[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41311 === (3))){
var inst_41308 = (state_41310[(2)]);
var state_41310__$1 = state_41310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41310__$1,inst_41308);
} else {
if((state_val_41311 === (12))){
var state_41310__$1 = state_41310;
var statearr_41320_41347 = state_41310__$1;
(statearr_41320_41347[(2)] = null);

(statearr_41320_41347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41311 === (2))){
var state_41310__$1 = state_41310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41310__$1,(4),ch);
} else {
if((state_val_41311 === (11))){
var inst_41287 = (state_41310[(7)]);
var inst_41297 = (state_41310[(2)]);
var state_41310__$1 = state_41310;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41310__$1,(8),inst_41297,inst_41287);
} else {
if((state_val_41311 === (9))){
var state_41310__$1 = state_41310;
var statearr_41321_41348 = state_41310__$1;
(statearr_41321_41348[(2)] = tc);

(statearr_41321_41348[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41311 === (5))){
var inst_41290 = cljs.core.async.close_BANG_.call(null,tc);
var inst_41291 = cljs.core.async.close_BANG_.call(null,fc);
var state_41310__$1 = (function (){var statearr_41322 = state_41310;
(statearr_41322[(8)] = inst_41290);

return statearr_41322;
})();
var statearr_41323_41349 = state_41310__$1;
(statearr_41323_41349[(2)] = inst_41291);

(statearr_41323_41349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41311 === (14))){
var inst_41304 = (state_41310[(2)]);
var state_41310__$1 = state_41310;
var statearr_41324_41350 = state_41310__$1;
(statearr_41324_41350[(2)] = inst_41304);

(statearr_41324_41350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41311 === (10))){
var state_41310__$1 = state_41310;
var statearr_41325_41351 = state_41310__$1;
(statearr_41325_41351[(2)] = fc);

(statearr_41325_41351[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41311 === (8))){
var inst_41299 = (state_41310[(2)]);
var state_41310__$1 = state_41310;
if(cljs.core.truth_(inst_41299)){
var statearr_41326_41352 = state_41310__$1;
(statearr_41326_41352[(1)] = (12));

} else {
var statearr_41327_41353 = state_41310__$1;
(statearr_41327_41353[(1)] = (13));

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
});})(c__40653__auto___41339,tc,fc))
;
return ((function (switch__40541__auto__,c__40653__auto___41339,tc,fc){
return (function() {
var cljs$core$async$state_machine__40542__auto__ = null;
var cljs$core$async$state_machine__40542__auto____0 = (function (){
var statearr_41331 = [null,null,null,null,null,null,null,null,null];
(statearr_41331[(0)] = cljs$core$async$state_machine__40542__auto__);

(statearr_41331[(1)] = (1));

return statearr_41331;
});
var cljs$core$async$state_machine__40542__auto____1 = (function (state_41310){
while(true){
var ret_value__40543__auto__ = (function (){try{while(true){
var result__40544__auto__ = switch__40541__auto__.call(null,state_41310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40544__auto__;
}
break;
}
}catch (e41332){if((e41332 instanceof Object)){
var ex__40545__auto__ = e41332;
var statearr_41333_41354 = state_41310;
(statearr_41333_41354[(5)] = ex__40545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41355 = state_41310;
state_41310 = G__41355;
continue;
} else {
return ret_value__40543__auto__;
}
break;
}
});
cljs$core$async$state_machine__40542__auto__ = function(state_41310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40542__auto____1.call(this,state_41310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40542__auto____0;
cljs$core$async$state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40542__auto____1;
return cljs$core$async$state_machine__40542__auto__;
})()
;})(switch__40541__auto__,c__40653__auto___41339,tc,fc))
})();
var state__40655__auto__ = (function (){var statearr_41334 = f__40654__auto__.call(null);
(statearr_41334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40653__auto___41339);

return statearr_41334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40655__auto__);
});})(c__40653__auto___41339,tc,fc))
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
var c__40653__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40653__auto__){
return (function (){
var f__40654__auto__ = (function (){var switch__40541__auto__ = ((function (c__40653__auto__){
return (function (state_41419){
var state_val_41420 = (state_41419[(1)]);
if((state_val_41420 === (7))){
var inst_41415 = (state_41419[(2)]);
var state_41419__$1 = state_41419;
var statearr_41421_41442 = state_41419__$1;
(statearr_41421_41442[(2)] = inst_41415);

(statearr_41421_41442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41420 === (1))){
var inst_41399 = init;
var state_41419__$1 = (function (){var statearr_41422 = state_41419;
(statearr_41422[(7)] = inst_41399);

return statearr_41422;
})();
var statearr_41423_41443 = state_41419__$1;
(statearr_41423_41443[(2)] = null);

(statearr_41423_41443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41420 === (4))){
var inst_41402 = (state_41419[(8)]);
var inst_41402__$1 = (state_41419[(2)]);
var inst_41403 = (inst_41402__$1 == null);
var state_41419__$1 = (function (){var statearr_41424 = state_41419;
(statearr_41424[(8)] = inst_41402__$1);

return statearr_41424;
})();
if(cljs.core.truth_(inst_41403)){
var statearr_41425_41444 = state_41419__$1;
(statearr_41425_41444[(1)] = (5));

} else {
var statearr_41426_41445 = state_41419__$1;
(statearr_41426_41445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41420 === (6))){
var inst_41399 = (state_41419[(7)]);
var inst_41402 = (state_41419[(8)]);
var inst_41406 = (state_41419[(9)]);
var inst_41406__$1 = f.call(null,inst_41399,inst_41402);
var inst_41407 = cljs.core.reduced_QMARK_.call(null,inst_41406__$1);
var state_41419__$1 = (function (){var statearr_41427 = state_41419;
(statearr_41427[(9)] = inst_41406__$1);

return statearr_41427;
})();
if(inst_41407){
var statearr_41428_41446 = state_41419__$1;
(statearr_41428_41446[(1)] = (8));

} else {
var statearr_41429_41447 = state_41419__$1;
(statearr_41429_41447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41420 === (3))){
var inst_41417 = (state_41419[(2)]);
var state_41419__$1 = state_41419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41419__$1,inst_41417);
} else {
if((state_val_41420 === (2))){
var state_41419__$1 = state_41419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41419__$1,(4),ch);
} else {
if((state_val_41420 === (9))){
var inst_41406 = (state_41419[(9)]);
var inst_41399 = inst_41406;
var state_41419__$1 = (function (){var statearr_41430 = state_41419;
(statearr_41430[(7)] = inst_41399);

return statearr_41430;
})();
var statearr_41431_41448 = state_41419__$1;
(statearr_41431_41448[(2)] = null);

(statearr_41431_41448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41420 === (5))){
var inst_41399 = (state_41419[(7)]);
var state_41419__$1 = state_41419;
var statearr_41432_41449 = state_41419__$1;
(statearr_41432_41449[(2)] = inst_41399);

(statearr_41432_41449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41420 === (10))){
var inst_41413 = (state_41419[(2)]);
var state_41419__$1 = state_41419;
var statearr_41433_41450 = state_41419__$1;
(statearr_41433_41450[(2)] = inst_41413);

(statearr_41433_41450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41420 === (8))){
var inst_41406 = (state_41419[(9)]);
var inst_41409 = cljs.core.deref.call(null,inst_41406);
var state_41419__$1 = state_41419;
var statearr_41434_41451 = state_41419__$1;
(statearr_41434_41451[(2)] = inst_41409);

(statearr_41434_41451[(1)] = (10));


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
});})(c__40653__auto__))
;
return ((function (switch__40541__auto__,c__40653__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__40542__auto__ = null;
var cljs$core$async$reduce_$_state_machine__40542__auto____0 = (function (){
var statearr_41438 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41438[(0)] = cljs$core$async$reduce_$_state_machine__40542__auto__);

(statearr_41438[(1)] = (1));

return statearr_41438;
});
var cljs$core$async$reduce_$_state_machine__40542__auto____1 = (function (state_41419){
while(true){
var ret_value__40543__auto__ = (function (){try{while(true){
var result__40544__auto__ = switch__40541__auto__.call(null,state_41419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40544__auto__;
}
break;
}
}catch (e41439){if((e41439 instanceof Object)){
var ex__40545__auto__ = e41439;
var statearr_41440_41452 = state_41419;
(statearr_41440_41452[(5)] = ex__40545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41453 = state_41419;
state_41419 = G__41453;
continue;
} else {
return ret_value__40543__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__40542__auto__ = function(state_41419){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__40542__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__40542__auto____1.call(this,state_41419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__40542__auto____0;
cljs$core$async$reduce_$_state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__40542__auto____1;
return cljs$core$async$reduce_$_state_machine__40542__auto__;
})()
;})(switch__40541__auto__,c__40653__auto__))
})();
var state__40655__auto__ = (function (){var statearr_41441 = f__40654__auto__.call(null);
(statearr_41441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40653__auto__);

return statearr_41441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40655__auto__);
});})(c__40653__auto__))
);

return c__40653__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__40653__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40653__auto__,f__$1){
return (function (){
var f__40654__auto__ = (function (){var switch__40541__auto__ = ((function (c__40653__auto__,f__$1){
return (function (state_41473){
var state_val_41474 = (state_41473[(1)]);
if((state_val_41474 === (1))){
var inst_41468 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_41473__$1 = state_41473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41473__$1,(2),inst_41468);
} else {
if((state_val_41474 === (2))){
var inst_41470 = (state_41473[(2)]);
var inst_41471 = f__$1.call(null,inst_41470);
var state_41473__$1 = state_41473;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41473__$1,inst_41471);
} else {
return null;
}
}
});})(c__40653__auto__,f__$1))
;
return ((function (switch__40541__auto__,c__40653__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__40542__auto__ = null;
var cljs$core$async$transduce_$_state_machine__40542__auto____0 = (function (){
var statearr_41478 = [null,null,null,null,null,null,null];
(statearr_41478[(0)] = cljs$core$async$transduce_$_state_machine__40542__auto__);

(statearr_41478[(1)] = (1));

return statearr_41478;
});
var cljs$core$async$transduce_$_state_machine__40542__auto____1 = (function (state_41473){
while(true){
var ret_value__40543__auto__ = (function (){try{while(true){
var result__40544__auto__ = switch__40541__auto__.call(null,state_41473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40544__auto__;
}
break;
}
}catch (e41479){if((e41479 instanceof Object)){
var ex__40545__auto__ = e41479;
var statearr_41480_41482 = state_41473;
(statearr_41480_41482[(5)] = ex__40545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41483 = state_41473;
state_41473 = G__41483;
continue;
} else {
return ret_value__40543__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__40542__auto__ = function(state_41473){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__40542__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__40542__auto____1.call(this,state_41473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__40542__auto____0;
cljs$core$async$transduce_$_state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__40542__auto____1;
return cljs$core$async$transduce_$_state_machine__40542__auto__;
})()
;})(switch__40541__auto__,c__40653__auto__,f__$1))
})();
var state__40655__auto__ = (function (){var statearr_41481 = f__40654__auto__.call(null);
(statearr_41481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40653__auto__);

return statearr_41481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40655__auto__);
});})(c__40653__auto__,f__$1))
);

return c__40653__auto__;
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
var args41484 = [];
var len__37851__auto___41536 = arguments.length;
var i__37852__auto___41537 = (0);
while(true){
if((i__37852__auto___41537 < len__37851__auto___41536)){
args41484.push((arguments[i__37852__auto___41537]));

var G__41538 = (i__37852__auto___41537 + (1));
i__37852__auto___41537 = G__41538;
continue;
} else {
}
break;
}

var G__41486 = args41484.length;
switch (G__41486) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41484.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__40653__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40653__auto__){
return (function (){
var f__40654__auto__ = (function (){var switch__40541__auto__ = ((function (c__40653__auto__){
return (function (state_41511){
var state_val_41512 = (state_41511[(1)]);
if((state_val_41512 === (7))){
var inst_41493 = (state_41511[(2)]);
var state_41511__$1 = state_41511;
var statearr_41513_41540 = state_41511__$1;
(statearr_41513_41540[(2)] = inst_41493);

(statearr_41513_41540[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (1))){
var inst_41487 = cljs.core.seq.call(null,coll);
var inst_41488 = inst_41487;
var state_41511__$1 = (function (){var statearr_41514 = state_41511;
(statearr_41514[(7)] = inst_41488);

return statearr_41514;
})();
var statearr_41515_41541 = state_41511__$1;
(statearr_41515_41541[(2)] = null);

(statearr_41515_41541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (4))){
var inst_41488 = (state_41511[(7)]);
var inst_41491 = cljs.core.first.call(null,inst_41488);
var state_41511__$1 = state_41511;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41511__$1,(7),ch,inst_41491);
} else {
if((state_val_41512 === (13))){
var inst_41505 = (state_41511[(2)]);
var state_41511__$1 = state_41511;
var statearr_41516_41542 = state_41511__$1;
(statearr_41516_41542[(2)] = inst_41505);

(statearr_41516_41542[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (6))){
var inst_41496 = (state_41511[(2)]);
var state_41511__$1 = state_41511;
if(cljs.core.truth_(inst_41496)){
var statearr_41517_41543 = state_41511__$1;
(statearr_41517_41543[(1)] = (8));

} else {
var statearr_41518_41544 = state_41511__$1;
(statearr_41518_41544[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (3))){
var inst_41509 = (state_41511[(2)]);
var state_41511__$1 = state_41511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41511__$1,inst_41509);
} else {
if((state_val_41512 === (12))){
var state_41511__$1 = state_41511;
var statearr_41519_41545 = state_41511__$1;
(statearr_41519_41545[(2)] = null);

(statearr_41519_41545[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (2))){
var inst_41488 = (state_41511[(7)]);
var state_41511__$1 = state_41511;
if(cljs.core.truth_(inst_41488)){
var statearr_41520_41546 = state_41511__$1;
(statearr_41520_41546[(1)] = (4));

} else {
var statearr_41521_41547 = state_41511__$1;
(statearr_41521_41547[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (11))){
var inst_41502 = cljs.core.async.close_BANG_.call(null,ch);
var state_41511__$1 = state_41511;
var statearr_41522_41548 = state_41511__$1;
(statearr_41522_41548[(2)] = inst_41502);

(statearr_41522_41548[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (9))){
var state_41511__$1 = state_41511;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41523_41549 = state_41511__$1;
(statearr_41523_41549[(1)] = (11));

} else {
var statearr_41524_41550 = state_41511__$1;
(statearr_41524_41550[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (5))){
var inst_41488 = (state_41511[(7)]);
var state_41511__$1 = state_41511;
var statearr_41525_41551 = state_41511__$1;
(statearr_41525_41551[(2)] = inst_41488);

(statearr_41525_41551[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (10))){
var inst_41507 = (state_41511[(2)]);
var state_41511__$1 = state_41511;
var statearr_41526_41552 = state_41511__$1;
(statearr_41526_41552[(2)] = inst_41507);

(statearr_41526_41552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (8))){
var inst_41488 = (state_41511[(7)]);
var inst_41498 = cljs.core.next.call(null,inst_41488);
var inst_41488__$1 = inst_41498;
var state_41511__$1 = (function (){var statearr_41527 = state_41511;
(statearr_41527[(7)] = inst_41488__$1);

return statearr_41527;
})();
var statearr_41528_41553 = state_41511__$1;
(statearr_41528_41553[(2)] = null);

(statearr_41528_41553[(1)] = (2));


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
});})(c__40653__auto__))
;
return ((function (switch__40541__auto__,c__40653__auto__){
return (function() {
var cljs$core$async$state_machine__40542__auto__ = null;
var cljs$core$async$state_machine__40542__auto____0 = (function (){
var statearr_41532 = [null,null,null,null,null,null,null,null];
(statearr_41532[(0)] = cljs$core$async$state_machine__40542__auto__);

(statearr_41532[(1)] = (1));

return statearr_41532;
});
var cljs$core$async$state_machine__40542__auto____1 = (function (state_41511){
while(true){
var ret_value__40543__auto__ = (function (){try{while(true){
var result__40544__auto__ = switch__40541__auto__.call(null,state_41511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40544__auto__;
}
break;
}
}catch (e41533){if((e41533 instanceof Object)){
var ex__40545__auto__ = e41533;
var statearr_41534_41554 = state_41511;
(statearr_41534_41554[(5)] = ex__40545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41555 = state_41511;
state_41511 = G__41555;
continue;
} else {
return ret_value__40543__auto__;
}
break;
}
});
cljs$core$async$state_machine__40542__auto__ = function(state_41511){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40542__auto____1.call(this,state_41511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40542__auto____0;
cljs$core$async$state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40542__auto____1;
return cljs$core$async$state_machine__40542__auto__;
})()
;})(switch__40541__auto__,c__40653__auto__))
})();
var state__40655__auto__ = (function (){var statearr_41535 = f__40654__auto__.call(null);
(statearr_41535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40653__auto__);

return statearr_41535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40655__auto__);
});})(c__40653__auto__))
);

return c__40653__auto__;
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
var x__37439__auto__ = (((_ == null))?null:_);
var m__37440__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__37439__auto__)]);
if(!((m__37440__auto__ == null))){
return m__37440__auto__.call(null,_);
} else {
var m__37440__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__37440__auto____$1 == null))){
return m__37440__auto____$1.call(null,_);
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
var x__37439__auto__ = (((m == null))?null:m);
var m__37440__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__37439__auto__)]);
if(!((m__37440__auto__ == null))){
return m__37440__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__37440__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__37440__auto____$1 == null))){
return m__37440__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__37439__auto__ = (((m == null))?null:m);
var m__37440__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__37439__auto__)]);
if(!((m__37440__auto__ == null))){
return m__37440__auto__.call(null,m,ch);
} else {
var m__37440__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__37440__auto____$1 == null))){
return m__37440__auto____$1.call(null,m,ch);
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
var x__37439__auto__ = (((m == null))?null:m);
var m__37440__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__37439__auto__)]);
if(!((m__37440__auto__ == null))){
return m__37440__auto__.call(null,m);
} else {
var m__37440__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__37440__auto____$1 == null))){
return m__37440__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async41781 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41781 = (function (mult,ch,cs,meta41782){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta41782 = meta41782;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_41783,meta41782__$1){
var self__ = this;
var _41783__$1 = this;
return (new cljs.core.async.t_cljs$core$async41781(self__.mult,self__.ch,self__.cs,meta41782__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async41781.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_41783){
var self__ = this;
var _41783__$1 = this;
return self__.meta41782;
});})(cs))
;

cljs.core.async.t_cljs$core$async41781.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async41781.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async41781.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async41781.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41781.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41781.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41781.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta41782","meta41782",-952847354,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async41781.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41781.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41781";

cljs.core.async.t_cljs$core$async41781.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__37382__auto__,writer__37383__auto__,opt__37384__auto__){
return cljs.core._write.call(null,writer__37383__auto__,"cljs.core.async/t_cljs$core$async41781");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async41781 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async41781(mult__$1,ch__$1,cs__$1,meta41782){
return (new cljs.core.async.t_cljs$core$async41781(mult__$1,ch__$1,cs__$1,meta41782));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async41781(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__40653__auto___42006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40653__auto___42006,cs,m,dchan,dctr,done){
return (function (){
var f__40654__auto__ = (function (){var switch__40541__auto__ = ((function (c__40653__auto___42006,cs,m,dchan,dctr,done){
return (function (state_41918){
var state_val_41919 = (state_41918[(1)]);
if((state_val_41919 === (7))){
var inst_41914 = (state_41918[(2)]);
var state_41918__$1 = state_41918;
var statearr_41920_42007 = state_41918__$1;
(statearr_41920_42007[(2)] = inst_41914);

(statearr_41920_42007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (20))){
var inst_41817 = (state_41918[(7)]);
var inst_41829 = cljs.core.first.call(null,inst_41817);
var inst_41830 = cljs.core.nth.call(null,inst_41829,(0),null);
var inst_41831 = cljs.core.nth.call(null,inst_41829,(1),null);
var state_41918__$1 = (function (){var statearr_41921 = state_41918;
(statearr_41921[(8)] = inst_41830);

return statearr_41921;
})();
if(cljs.core.truth_(inst_41831)){
var statearr_41922_42008 = state_41918__$1;
(statearr_41922_42008[(1)] = (22));

} else {
var statearr_41923_42009 = state_41918__$1;
(statearr_41923_42009[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (27))){
var inst_41866 = (state_41918[(9)]);
var inst_41786 = (state_41918[(10)]);
var inst_41859 = (state_41918[(11)]);
var inst_41861 = (state_41918[(12)]);
var inst_41866__$1 = cljs.core._nth.call(null,inst_41859,inst_41861);
var inst_41867 = cljs.core.async.put_BANG_.call(null,inst_41866__$1,inst_41786,done);
var state_41918__$1 = (function (){var statearr_41924 = state_41918;
(statearr_41924[(9)] = inst_41866__$1);

return statearr_41924;
})();
if(cljs.core.truth_(inst_41867)){
var statearr_41925_42010 = state_41918__$1;
(statearr_41925_42010[(1)] = (30));

} else {
var statearr_41926_42011 = state_41918__$1;
(statearr_41926_42011[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (1))){
var state_41918__$1 = state_41918;
var statearr_41927_42012 = state_41918__$1;
(statearr_41927_42012[(2)] = null);

(statearr_41927_42012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (24))){
var inst_41817 = (state_41918[(7)]);
var inst_41836 = (state_41918[(2)]);
var inst_41837 = cljs.core.next.call(null,inst_41817);
var inst_41795 = inst_41837;
var inst_41796 = null;
var inst_41797 = (0);
var inst_41798 = (0);
var state_41918__$1 = (function (){var statearr_41928 = state_41918;
(statearr_41928[(13)] = inst_41836);

(statearr_41928[(14)] = inst_41797);

(statearr_41928[(15)] = inst_41798);

(statearr_41928[(16)] = inst_41795);

(statearr_41928[(17)] = inst_41796);

return statearr_41928;
})();
var statearr_41929_42013 = state_41918__$1;
(statearr_41929_42013[(2)] = null);

(statearr_41929_42013[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (39))){
var state_41918__$1 = state_41918;
var statearr_41933_42014 = state_41918__$1;
(statearr_41933_42014[(2)] = null);

(statearr_41933_42014[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (4))){
var inst_41786 = (state_41918[(10)]);
var inst_41786__$1 = (state_41918[(2)]);
var inst_41787 = (inst_41786__$1 == null);
var state_41918__$1 = (function (){var statearr_41934 = state_41918;
(statearr_41934[(10)] = inst_41786__$1);

return statearr_41934;
})();
if(cljs.core.truth_(inst_41787)){
var statearr_41935_42015 = state_41918__$1;
(statearr_41935_42015[(1)] = (5));

} else {
var statearr_41936_42016 = state_41918__$1;
(statearr_41936_42016[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (15))){
var inst_41797 = (state_41918[(14)]);
var inst_41798 = (state_41918[(15)]);
var inst_41795 = (state_41918[(16)]);
var inst_41796 = (state_41918[(17)]);
var inst_41813 = (state_41918[(2)]);
var inst_41814 = (inst_41798 + (1));
var tmp41930 = inst_41797;
var tmp41931 = inst_41795;
var tmp41932 = inst_41796;
var inst_41795__$1 = tmp41931;
var inst_41796__$1 = tmp41932;
var inst_41797__$1 = tmp41930;
var inst_41798__$1 = inst_41814;
var state_41918__$1 = (function (){var statearr_41937 = state_41918;
(statearr_41937[(18)] = inst_41813);

(statearr_41937[(14)] = inst_41797__$1);

(statearr_41937[(15)] = inst_41798__$1);

(statearr_41937[(16)] = inst_41795__$1);

(statearr_41937[(17)] = inst_41796__$1);

return statearr_41937;
})();
var statearr_41938_42017 = state_41918__$1;
(statearr_41938_42017[(2)] = null);

(statearr_41938_42017[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (21))){
var inst_41840 = (state_41918[(2)]);
var state_41918__$1 = state_41918;
var statearr_41942_42018 = state_41918__$1;
(statearr_41942_42018[(2)] = inst_41840);

(statearr_41942_42018[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (31))){
var inst_41866 = (state_41918[(9)]);
var inst_41870 = done.call(null,null);
var inst_41871 = cljs.core.async.untap_STAR_.call(null,m,inst_41866);
var state_41918__$1 = (function (){var statearr_41943 = state_41918;
(statearr_41943[(19)] = inst_41870);

return statearr_41943;
})();
var statearr_41944_42019 = state_41918__$1;
(statearr_41944_42019[(2)] = inst_41871);

(statearr_41944_42019[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (32))){
var inst_41860 = (state_41918[(20)]);
var inst_41859 = (state_41918[(11)]);
var inst_41861 = (state_41918[(12)]);
var inst_41858 = (state_41918[(21)]);
var inst_41873 = (state_41918[(2)]);
var inst_41874 = (inst_41861 + (1));
var tmp41939 = inst_41860;
var tmp41940 = inst_41859;
var tmp41941 = inst_41858;
var inst_41858__$1 = tmp41941;
var inst_41859__$1 = tmp41940;
var inst_41860__$1 = tmp41939;
var inst_41861__$1 = inst_41874;
var state_41918__$1 = (function (){var statearr_41945 = state_41918;
(statearr_41945[(20)] = inst_41860__$1);

(statearr_41945[(22)] = inst_41873);

(statearr_41945[(11)] = inst_41859__$1);

(statearr_41945[(12)] = inst_41861__$1);

(statearr_41945[(21)] = inst_41858__$1);

return statearr_41945;
})();
var statearr_41946_42020 = state_41918__$1;
(statearr_41946_42020[(2)] = null);

(statearr_41946_42020[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (40))){
var inst_41886 = (state_41918[(23)]);
var inst_41890 = done.call(null,null);
var inst_41891 = cljs.core.async.untap_STAR_.call(null,m,inst_41886);
var state_41918__$1 = (function (){var statearr_41947 = state_41918;
(statearr_41947[(24)] = inst_41890);

return statearr_41947;
})();
var statearr_41948_42021 = state_41918__$1;
(statearr_41948_42021[(2)] = inst_41891);

(statearr_41948_42021[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (33))){
var inst_41877 = (state_41918[(25)]);
var inst_41879 = cljs.core.chunked_seq_QMARK_.call(null,inst_41877);
var state_41918__$1 = state_41918;
if(inst_41879){
var statearr_41949_42022 = state_41918__$1;
(statearr_41949_42022[(1)] = (36));

} else {
var statearr_41950_42023 = state_41918__$1;
(statearr_41950_42023[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (13))){
var inst_41807 = (state_41918[(26)]);
var inst_41810 = cljs.core.async.close_BANG_.call(null,inst_41807);
var state_41918__$1 = state_41918;
var statearr_41951_42024 = state_41918__$1;
(statearr_41951_42024[(2)] = inst_41810);

(statearr_41951_42024[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (22))){
var inst_41830 = (state_41918[(8)]);
var inst_41833 = cljs.core.async.close_BANG_.call(null,inst_41830);
var state_41918__$1 = state_41918;
var statearr_41952_42025 = state_41918__$1;
(statearr_41952_42025[(2)] = inst_41833);

(statearr_41952_42025[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (36))){
var inst_41877 = (state_41918[(25)]);
var inst_41881 = cljs.core.chunk_first.call(null,inst_41877);
var inst_41882 = cljs.core.chunk_rest.call(null,inst_41877);
var inst_41883 = cljs.core.count.call(null,inst_41881);
var inst_41858 = inst_41882;
var inst_41859 = inst_41881;
var inst_41860 = inst_41883;
var inst_41861 = (0);
var state_41918__$1 = (function (){var statearr_41953 = state_41918;
(statearr_41953[(20)] = inst_41860);

(statearr_41953[(11)] = inst_41859);

(statearr_41953[(12)] = inst_41861);

(statearr_41953[(21)] = inst_41858);

return statearr_41953;
})();
var statearr_41954_42026 = state_41918__$1;
(statearr_41954_42026[(2)] = null);

(statearr_41954_42026[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (41))){
var inst_41877 = (state_41918[(25)]);
var inst_41893 = (state_41918[(2)]);
var inst_41894 = cljs.core.next.call(null,inst_41877);
var inst_41858 = inst_41894;
var inst_41859 = null;
var inst_41860 = (0);
var inst_41861 = (0);
var state_41918__$1 = (function (){var statearr_41955 = state_41918;
(statearr_41955[(20)] = inst_41860);

(statearr_41955[(27)] = inst_41893);

(statearr_41955[(11)] = inst_41859);

(statearr_41955[(12)] = inst_41861);

(statearr_41955[(21)] = inst_41858);

return statearr_41955;
})();
var statearr_41956_42027 = state_41918__$1;
(statearr_41956_42027[(2)] = null);

(statearr_41956_42027[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (43))){
var state_41918__$1 = state_41918;
var statearr_41957_42028 = state_41918__$1;
(statearr_41957_42028[(2)] = null);

(statearr_41957_42028[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (29))){
var inst_41902 = (state_41918[(2)]);
var state_41918__$1 = state_41918;
var statearr_41958_42029 = state_41918__$1;
(statearr_41958_42029[(2)] = inst_41902);

(statearr_41958_42029[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (44))){
var inst_41911 = (state_41918[(2)]);
var state_41918__$1 = (function (){var statearr_41959 = state_41918;
(statearr_41959[(28)] = inst_41911);

return statearr_41959;
})();
var statearr_41960_42030 = state_41918__$1;
(statearr_41960_42030[(2)] = null);

(statearr_41960_42030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (6))){
var inst_41850 = (state_41918[(29)]);
var inst_41849 = cljs.core.deref.call(null,cs);
var inst_41850__$1 = cljs.core.keys.call(null,inst_41849);
var inst_41851 = cljs.core.count.call(null,inst_41850__$1);
var inst_41852 = cljs.core.reset_BANG_.call(null,dctr,inst_41851);
var inst_41857 = cljs.core.seq.call(null,inst_41850__$1);
var inst_41858 = inst_41857;
var inst_41859 = null;
var inst_41860 = (0);
var inst_41861 = (0);
var state_41918__$1 = (function (){var statearr_41961 = state_41918;
(statearr_41961[(20)] = inst_41860);

(statearr_41961[(30)] = inst_41852);

(statearr_41961[(11)] = inst_41859);

(statearr_41961[(12)] = inst_41861);

(statearr_41961[(21)] = inst_41858);

(statearr_41961[(29)] = inst_41850__$1);

return statearr_41961;
})();
var statearr_41962_42031 = state_41918__$1;
(statearr_41962_42031[(2)] = null);

(statearr_41962_42031[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (28))){
var inst_41877 = (state_41918[(25)]);
var inst_41858 = (state_41918[(21)]);
var inst_41877__$1 = cljs.core.seq.call(null,inst_41858);
var state_41918__$1 = (function (){var statearr_41963 = state_41918;
(statearr_41963[(25)] = inst_41877__$1);

return statearr_41963;
})();
if(inst_41877__$1){
var statearr_41964_42032 = state_41918__$1;
(statearr_41964_42032[(1)] = (33));

} else {
var statearr_41965_42033 = state_41918__$1;
(statearr_41965_42033[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (25))){
var inst_41860 = (state_41918[(20)]);
var inst_41861 = (state_41918[(12)]);
var inst_41863 = (inst_41861 < inst_41860);
var inst_41864 = inst_41863;
var state_41918__$1 = state_41918;
if(cljs.core.truth_(inst_41864)){
var statearr_41966_42034 = state_41918__$1;
(statearr_41966_42034[(1)] = (27));

} else {
var statearr_41967_42035 = state_41918__$1;
(statearr_41967_42035[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (34))){
var state_41918__$1 = state_41918;
var statearr_41968_42036 = state_41918__$1;
(statearr_41968_42036[(2)] = null);

(statearr_41968_42036[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (17))){
var state_41918__$1 = state_41918;
var statearr_41969_42037 = state_41918__$1;
(statearr_41969_42037[(2)] = null);

(statearr_41969_42037[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (3))){
var inst_41916 = (state_41918[(2)]);
var state_41918__$1 = state_41918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41918__$1,inst_41916);
} else {
if((state_val_41919 === (12))){
var inst_41845 = (state_41918[(2)]);
var state_41918__$1 = state_41918;
var statearr_41970_42038 = state_41918__$1;
(statearr_41970_42038[(2)] = inst_41845);

(statearr_41970_42038[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (2))){
var state_41918__$1 = state_41918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41918__$1,(4),ch);
} else {
if((state_val_41919 === (23))){
var state_41918__$1 = state_41918;
var statearr_41971_42039 = state_41918__$1;
(statearr_41971_42039[(2)] = null);

(statearr_41971_42039[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (35))){
var inst_41900 = (state_41918[(2)]);
var state_41918__$1 = state_41918;
var statearr_41972_42040 = state_41918__$1;
(statearr_41972_42040[(2)] = inst_41900);

(statearr_41972_42040[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (19))){
var inst_41817 = (state_41918[(7)]);
var inst_41821 = cljs.core.chunk_first.call(null,inst_41817);
var inst_41822 = cljs.core.chunk_rest.call(null,inst_41817);
var inst_41823 = cljs.core.count.call(null,inst_41821);
var inst_41795 = inst_41822;
var inst_41796 = inst_41821;
var inst_41797 = inst_41823;
var inst_41798 = (0);
var state_41918__$1 = (function (){var statearr_41973 = state_41918;
(statearr_41973[(14)] = inst_41797);

(statearr_41973[(15)] = inst_41798);

(statearr_41973[(16)] = inst_41795);

(statearr_41973[(17)] = inst_41796);

return statearr_41973;
})();
var statearr_41974_42041 = state_41918__$1;
(statearr_41974_42041[(2)] = null);

(statearr_41974_42041[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (11))){
var inst_41817 = (state_41918[(7)]);
var inst_41795 = (state_41918[(16)]);
var inst_41817__$1 = cljs.core.seq.call(null,inst_41795);
var state_41918__$1 = (function (){var statearr_41975 = state_41918;
(statearr_41975[(7)] = inst_41817__$1);

return statearr_41975;
})();
if(inst_41817__$1){
var statearr_41976_42042 = state_41918__$1;
(statearr_41976_42042[(1)] = (16));

} else {
var statearr_41977_42043 = state_41918__$1;
(statearr_41977_42043[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (9))){
var inst_41847 = (state_41918[(2)]);
var state_41918__$1 = state_41918;
var statearr_41978_42044 = state_41918__$1;
(statearr_41978_42044[(2)] = inst_41847);

(statearr_41978_42044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (5))){
var inst_41793 = cljs.core.deref.call(null,cs);
var inst_41794 = cljs.core.seq.call(null,inst_41793);
var inst_41795 = inst_41794;
var inst_41796 = null;
var inst_41797 = (0);
var inst_41798 = (0);
var state_41918__$1 = (function (){var statearr_41979 = state_41918;
(statearr_41979[(14)] = inst_41797);

(statearr_41979[(15)] = inst_41798);

(statearr_41979[(16)] = inst_41795);

(statearr_41979[(17)] = inst_41796);

return statearr_41979;
})();
var statearr_41980_42045 = state_41918__$1;
(statearr_41980_42045[(2)] = null);

(statearr_41980_42045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (14))){
var state_41918__$1 = state_41918;
var statearr_41981_42046 = state_41918__$1;
(statearr_41981_42046[(2)] = null);

(statearr_41981_42046[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (45))){
var inst_41908 = (state_41918[(2)]);
var state_41918__$1 = state_41918;
var statearr_41982_42047 = state_41918__$1;
(statearr_41982_42047[(2)] = inst_41908);

(statearr_41982_42047[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (26))){
var inst_41850 = (state_41918[(29)]);
var inst_41904 = (state_41918[(2)]);
var inst_41905 = cljs.core.seq.call(null,inst_41850);
var state_41918__$1 = (function (){var statearr_41983 = state_41918;
(statearr_41983[(31)] = inst_41904);

return statearr_41983;
})();
if(inst_41905){
var statearr_41984_42048 = state_41918__$1;
(statearr_41984_42048[(1)] = (42));

} else {
var statearr_41985_42049 = state_41918__$1;
(statearr_41985_42049[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (16))){
var inst_41817 = (state_41918[(7)]);
var inst_41819 = cljs.core.chunked_seq_QMARK_.call(null,inst_41817);
var state_41918__$1 = state_41918;
if(inst_41819){
var statearr_41986_42050 = state_41918__$1;
(statearr_41986_42050[(1)] = (19));

} else {
var statearr_41987_42051 = state_41918__$1;
(statearr_41987_42051[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (38))){
var inst_41897 = (state_41918[(2)]);
var state_41918__$1 = state_41918;
var statearr_41988_42052 = state_41918__$1;
(statearr_41988_42052[(2)] = inst_41897);

(statearr_41988_42052[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (30))){
var state_41918__$1 = state_41918;
var statearr_41989_42053 = state_41918__$1;
(statearr_41989_42053[(2)] = null);

(statearr_41989_42053[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (10))){
var inst_41798 = (state_41918[(15)]);
var inst_41796 = (state_41918[(17)]);
var inst_41806 = cljs.core._nth.call(null,inst_41796,inst_41798);
var inst_41807 = cljs.core.nth.call(null,inst_41806,(0),null);
var inst_41808 = cljs.core.nth.call(null,inst_41806,(1),null);
var state_41918__$1 = (function (){var statearr_41990 = state_41918;
(statearr_41990[(26)] = inst_41807);

return statearr_41990;
})();
if(cljs.core.truth_(inst_41808)){
var statearr_41991_42054 = state_41918__$1;
(statearr_41991_42054[(1)] = (13));

} else {
var statearr_41992_42055 = state_41918__$1;
(statearr_41992_42055[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (18))){
var inst_41843 = (state_41918[(2)]);
var state_41918__$1 = state_41918;
var statearr_41993_42056 = state_41918__$1;
(statearr_41993_42056[(2)] = inst_41843);

(statearr_41993_42056[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (42))){
var state_41918__$1 = state_41918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41918__$1,(45),dchan);
} else {
if((state_val_41919 === (37))){
var inst_41877 = (state_41918[(25)]);
var inst_41786 = (state_41918[(10)]);
var inst_41886 = (state_41918[(23)]);
var inst_41886__$1 = cljs.core.first.call(null,inst_41877);
var inst_41887 = cljs.core.async.put_BANG_.call(null,inst_41886__$1,inst_41786,done);
var state_41918__$1 = (function (){var statearr_41994 = state_41918;
(statearr_41994[(23)] = inst_41886__$1);

return statearr_41994;
})();
if(cljs.core.truth_(inst_41887)){
var statearr_41995_42057 = state_41918__$1;
(statearr_41995_42057[(1)] = (39));

} else {
var statearr_41996_42058 = state_41918__$1;
(statearr_41996_42058[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (8))){
var inst_41797 = (state_41918[(14)]);
var inst_41798 = (state_41918[(15)]);
var inst_41800 = (inst_41798 < inst_41797);
var inst_41801 = inst_41800;
var state_41918__$1 = state_41918;
if(cljs.core.truth_(inst_41801)){
var statearr_41997_42059 = state_41918__$1;
(statearr_41997_42059[(1)] = (10));

} else {
var statearr_41998_42060 = state_41918__$1;
(statearr_41998_42060[(1)] = (11));

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
});})(c__40653__auto___42006,cs,m,dchan,dctr,done))
;
return ((function (switch__40541__auto__,c__40653__auto___42006,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__40542__auto__ = null;
var cljs$core$async$mult_$_state_machine__40542__auto____0 = (function (){
var statearr_42002 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42002[(0)] = cljs$core$async$mult_$_state_machine__40542__auto__);

(statearr_42002[(1)] = (1));

return statearr_42002;
});
var cljs$core$async$mult_$_state_machine__40542__auto____1 = (function (state_41918){
while(true){
var ret_value__40543__auto__ = (function (){try{while(true){
var result__40544__auto__ = switch__40541__auto__.call(null,state_41918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40544__auto__;
}
break;
}
}catch (e42003){if((e42003 instanceof Object)){
var ex__40545__auto__ = e42003;
var statearr_42004_42061 = state_41918;
(statearr_42004_42061[(5)] = ex__40545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42062 = state_41918;
state_41918 = G__42062;
continue;
} else {
return ret_value__40543__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__40542__auto__ = function(state_41918){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__40542__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__40542__auto____1.call(this,state_41918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__40542__auto____0;
cljs$core$async$mult_$_state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__40542__auto____1;
return cljs$core$async$mult_$_state_machine__40542__auto__;
})()
;})(switch__40541__auto__,c__40653__auto___42006,cs,m,dchan,dctr,done))
})();
var state__40655__auto__ = (function (){var statearr_42005 = f__40654__auto__.call(null);
(statearr_42005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40653__auto___42006);

return statearr_42005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40655__auto__);
});})(c__40653__auto___42006,cs,m,dchan,dctr,done))
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
var args42063 = [];
var len__37851__auto___42066 = arguments.length;
var i__37852__auto___42067 = (0);
while(true){
if((i__37852__auto___42067 < len__37851__auto___42066)){
args42063.push((arguments[i__37852__auto___42067]));

var G__42068 = (i__37852__auto___42067 + (1));
i__37852__auto___42067 = G__42068;
continue;
} else {
}
break;
}

var G__42065 = args42063.length;
switch (G__42065) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42063.length)].join('')));

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
var x__37439__auto__ = (((m == null))?null:m);
var m__37440__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__37439__auto__)]);
if(!((m__37440__auto__ == null))){
return m__37440__auto__.call(null,m,ch);
} else {
var m__37440__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__37440__auto____$1 == null))){
return m__37440__auto____$1.call(null,m,ch);
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
var x__37439__auto__ = (((m == null))?null:m);
var m__37440__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__37439__auto__)]);
if(!((m__37440__auto__ == null))){
return m__37440__auto__.call(null,m,ch);
} else {
var m__37440__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__37440__auto____$1 == null))){
return m__37440__auto____$1.call(null,m,ch);
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
var x__37439__auto__ = (((m == null))?null:m);
var m__37440__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__37439__auto__)]);
if(!((m__37440__auto__ == null))){
return m__37440__auto__.call(null,m);
} else {
var m__37440__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__37440__auto____$1 == null))){
return m__37440__auto____$1.call(null,m);
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
var x__37439__auto__ = (((m == null))?null:m);
var m__37440__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__37439__auto__)]);
if(!((m__37440__auto__ == null))){
return m__37440__auto__.call(null,m,state_map);
} else {
var m__37440__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__37440__auto____$1 == null))){
return m__37440__auto____$1.call(null,m,state_map);
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
var x__37439__auto__ = (((m == null))?null:m);
var m__37440__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__37439__auto__)]);
if(!((m__37440__auto__ == null))){
return m__37440__auto__.call(null,m,mode);
} else {
var m__37440__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__37440__auto____$1 == null))){
return m__37440__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__37858__auto__ = [];
var len__37851__auto___42080 = arguments.length;
var i__37852__auto___42081 = (0);
while(true){
if((i__37852__auto___42081 < len__37851__auto___42080)){
args__37858__auto__.push((arguments[i__37852__auto___42081]));

var G__42082 = (i__37852__auto___42081 + (1));
i__37852__auto___42081 = G__42082;
continue;
} else {
}
break;
}

var argseq__37859__auto__ = ((((3) < args__37858__auto__.length))?(new cljs.core.IndexedSeq(args__37858__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37859__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__42074){
var map__42075 = p__42074;
var map__42075__$1 = ((((!((map__42075 == null)))?((((map__42075.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42075.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42075):map__42075);
var opts = map__42075__$1;
var statearr_42077_42083 = state;
(statearr_42077_42083[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__42075,map__42075__$1,opts){
return (function (val){
var statearr_42078_42084 = state;
(statearr_42078_42084[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__42075,map__42075__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_42079_42085 = state;
(statearr_42079_42085[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq42070){
var G__42071 = cljs.core.first.call(null,seq42070);
var seq42070__$1 = cljs.core.next.call(null,seq42070);
var G__42072 = cljs.core.first.call(null,seq42070__$1);
var seq42070__$2 = cljs.core.next.call(null,seq42070__$1);
var G__42073 = cljs.core.first.call(null,seq42070__$2);
var seq42070__$3 = cljs.core.next.call(null,seq42070__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42071,G__42072,G__42073,seq42070__$3);
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
if(typeof cljs.core.async.t_cljs$core$async42251 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42251 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta42252){
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
this.meta42252 = meta42252;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42253,meta42252__$1){
var self__ = this;
var _42253__$1 = this;
return (new cljs.core.async.t_cljs$core$async42251(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta42252__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42251.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42253){
var self__ = this;
var _42253__$1 = this;
return self__.meta42252;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42251.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async42251.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42251.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async42251.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42251.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42251.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42251.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42251.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async42251.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta42252","meta42252",1367668491,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42251.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42251.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42251";

cljs.core.async.t_cljs$core$async42251.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__37382__auto__,writer__37383__auto__,opt__37384__auto__){
return cljs.core._write.call(null,writer__37383__auto__,"cljs.core.async/t_cljs$core$async42251");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async42251 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async42251(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42252){
return (new cljs.core.async.t_cljs$core$async42251(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42252));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async42251(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40653__auto___42416 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40653__auto___42416,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__40654__auto__ = (function (){var switch__40541__auto__ = ((function (c__40653__auto___42416,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_42353){
var state_val_42354 = (state_42353[(1)]);
if((state_val_42354 === (7))){
var inst_42269 = (state_42353[(2)]);
var state_42353__$1 = state_42353;
var statearr_42355_42417 = state_42353__$1;
(statearr_42355_42417[(2)] = inst_42269);

(statearr_42355_42417[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (20))){
var inst_42281 = (state_42353[(7)]);
var state_42353__$1 = state_42353;
var statearr_42356_42418 = state_42353__$1;
(statearr_42356_42418[(2)] = inst_42281);

(statearr_42356_42418[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (27))){
var state_42353__$1 = state_42353;
var statearr_42357_42419 = state_42353__$1;
(statearr_42357_42419[(2)] = null);

(statearr_42357_42419[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (1))){
var inst_42257 = (state_42353[(8)]);
var inst_42257__$1 = calc_state.call(null);
var inst_42259 = (inst_42257__$1 == null);
var inst_42260 = cljs.core.not.call(null,inst_42259);
var state_42353__$1 = (function (){var statearr_42358 = state_42353;
(statearr_42358[(8)] = inst_42257__$1);

return statearr_42358;
})();
if(inst_42260){
var statearr_42359_42420 = state_42353__$1;
(statearr_42359_42420[(1)] = (2));

} else {
var statearr_42360_42421 = state_42353__$1;
(statearr_42360_42421[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (24))){
var inst_42313 = (state_42353[(9)]);
var inst_42304 = (state_42353[(10)]);
var inst_42327 = (state_42353[(11)]);
var inst_42327__$1 = inst_42304.call(null,inst_42313);
var state_42353__$1 = (function (){var statearr_42361 = state_42353;
(statearr_42361[(11)] = inst_42327__$1);

return statearr_42361;
})();
if(cljs.core.truth_(inst_42327__$1)){
var statearr_42362_42422 = state_42353__$1;
(statearr_42362_42422[(1)] = (29));

} else {
var statearr_42363_42423 = state_42353__$1;
(statearr_42363_42423[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (4))){
var inst_42272 = (state_42353[(2)]);
var state_42353__$1 = state_42353;
if(cljs.core.truth_(inst_42272)){
var statearr_42364_42424 = state_42353__$1;
(statearr_42364_42424[(1)] = (8));

} else {
var statearr_42365_42425 = state_42353__$1;
(statearr_42365_42425[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (15))){
var inst_42298 = (state_42353[(2)]);
var state_42353__$1 = state_42353;
if(cljs.core.truth_(inst_42298)){
var statearr_42366_42426 = state_42353__$1;
(statearr_42366_42426[(1)] = (19));

} else {
var statearr_42367_42427 = state_42353__$1;
(statearr_42367_42427[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (21))){
var inst_42303 = (state_42353[(12)]);
var inst_42303__$1 = (state_42353[(2)]);
var inst_42304 = cljs.core.get.call(null,inst_42303__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42305 = cljs.core.get.call(null,inst_42303__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42306 = cljs.core.get.call(null,inst_42303__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_42353__$1 = (function (){var statearr_42368 = state_42353;
(statearr_42368[(10)] = inst_42304);

(statearr_42368[(13)] = inst_42305);

(statearr_42368[(12)] = inst_42303__$1);

return statearr_42368;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_42353__$1,(22),inst_42306);
} else {
if((state_val_42354 === (31))){
var inst_42335 = (state_42353[(2)]);
var state_42353__$1 = state_42353;
if(cljs.core.truth_(inst_42335)){
var statearr_42369_42428 = state_42353__$1;
(statearr_42369_42428[(1)] = (32));

} else {
var statearr_42370_42429 = state_42353__$1;
(statearr_42370_42429[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (32))){
var inst_42312 = (state_42353[(14)]);
var state_42353__$1 = state_42353;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42353__$1,(35),out,inst_42312);
} else {
if((state_val_42354 === (33))){
var inst_42303 = (state_42353[(12)]);
var inst_42281 = inst_42303;
var state_42353__$1 = (function (){var statearr_42371 = state_42353;
(statearr_42371[(7)] = inst_42281);

return statearr_42371;
})();
var statearr_42372_42430 = state_42353__$1;
(statearr_42372_42430[(2)] = null);

(statearr_42372_42430[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (13))){
var inst_42281 = (state_42353[(7)]);
var inst_42288 = inst_42281.cljs$lang$protocol_mask$partition0$;
var inst_42289 = (inst_42288 & (64));
var inst_42290 = inst_42281.cljs$core$ISeq$;
var inst_42291 = (inst_42289) || (inst_42290);
var state_42353__$1 = state_42353;
if(cljs.core.truth_(inst_42291)){
var statearr_42373_42431 = state_42353__$1;
(statearr_42373_42431[(1)] = (16));

} else {
var statearr_42374_42432 = state_42353__$1;
(statearr_42374_42432[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (22))){
var inst_42313 = (state_42353[(9)]);
var inst_42312 = (state_42353[(14)]);
var inst_42311 = (state_42353[(2)]);
var inst_42312__$1 = cljs.core.nth.call(null,inst_42311,(0),null);
var inst_42313__$1 = cljs.core.nth.call(null,inst_42311,(1),null);
var inst_42314 = (inst_42312__$1 == null);
var inst_42315 = cljs.core._EQ_.call(null,inst_42313__$1,change);
var inst_42316 = (inst_42314) || (inst_42315);
var state_42353__$1 = (function (){var statearr_42375 = state_42353;
(statearr_42375[(9)] = inst_42313__$1);

(statearr_42375[(14)] = inst_42312__$1);

return statearr_42375;
})();
if(cljs.core.truth_(inst_42316)){
var statearr_42376_42433 = state_42353__$1;
(statearr_42376_42433[(1)] = (23));

} else {
var statearr_42377_42434 = state_42353__$1;
(statearr_42377_42434[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (36))){
var inst_42303 = (state_42353[(12)]);
var inst_42281 = inst_42303;
var state_42353__$1 = (function (){var statearr_42378 = state_42353;
(statearr_42378[(7)] = inst_42281);

return statearr_42378;
})();
var statearr_42379_42435 = state_42353__$1;
(statearr_42379_42435[(2)] = null);

(statearr_42379_42435[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (29))){
var inst_42327 = (state_42353[(11)]);
var state_42353__$1 = state_42353;
var statearr_42380_42436 = state_42353__$1;
(statearr_42380_42436[(2)] = inst_42327);

(statearr_42380_42436[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (6))){
var state_42353__$1 = state_42353;
var statearr_42381_42437 = state_42353__$1;
(statearr_42381_42437[(2)] = false);

(statearr_42381_42437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (28))){
var inst_42323 = (state_42353[(2)]);
var inst_42324 = calc_state.call(null);
var inst_42281 = inst_42324;
var state_42353__$1 = (function (){var statearr_42382 = state_42353;
(statearr_42382[(7)] = inst_42281);

(statearr_42382[(15)] = inst_42323);

return statearr_42382;
})();
var statearr_42383_42438 = state_42353__$1;
(statearr_42383_42438[(2)] = null);

(statearr_42383_42438[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (25))){
var inst_42349 = (state_42353[(2)]);
var state_42353__$1 = state_42353;
var statearr_42384_42439 = state_42353__$1;
(statearr_42384_42439[(2)] = inst_42349);

(statearr_42384_42439[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (34))){
var inst_42347 = (state_42353[(2)]);
var state_42353__$1 = state_42353;
var statearr_42385_42440 = state_42353__$1;
(statearr_42385_42440[(2)] = inst_42347);

(statearr_42385_42440[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (17))){
var state_42353__$1 = state_42353;
var statearr_42386_42441 = state_42353__$1;
(statearr_42386_42441[(2)] = false);

(statearr_42386_42441[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (3))){
var state_42353__$1 = state_42353;
var statearr_42387_42442 = state_42353__$1;
(statearr_42387_42442[(2)] = false);

(statearr_42387_42442[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (12))){
var inst_42351 = (state_42353[(2)]);
var state_42353__$1 = state_42353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42353__$1,inst_42351);
} else {
if((state_val_42354 === (2))){
var inst_42257 = (state_42353[(8)]);
var inst_42262 = inst_42257.cljs$lang$protocol_mask$partition0$;
var inst_42263 = (inst_42262 & (64));
var inst_42264 = inst_42257.cljs$core$ISeq$;
var inst_42265 = (inst_42263) || (inst_42264);
var state_42353__$1 = state_42353;
if(cljs.core.truth_(inst_42265)){
var statearr_42388_42443 = state_42353__$1;
(statearr_42388_42443[(1)] = (5));

} else {
var statearr_42389_42444 = state_42353__$1;
(statearr_42389_42444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (23))){
var inst_42312 = (state_42353[(14)]);
var inst_42318 = (inst_42312 == null);
var state_42353__$1 = state_42353;
if(cljs.core.truth_(inst_42318)){
var statearr_42390_42445 = state_42353__$1;
(statearr_42390_42445[(1)] = (26));

} else {
var statearr_42391_42446 = state_42353__$1;
(statearr_42391_42446[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (35))){
var inst_42338 = (state_42353[(2)]);
var state_42353__$1 = state_42353;
if(cljs.core.truth_(inst_42338)){
var statearr_42392_42447 = state_42353__$1;
(statearr_42392_42447[(1)] = (36));

} else {
var statearr_42393_42448 = state_42353__$1;
(statearr_42393_42448[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (19))){
var inst_42281 = (state_42353[(7)]);
var inst_42300 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42281);
var state_42353__$1 = state_42353;
var statearr_42394_42449 = state_42353__$1;
(statearr_42394_42449[(2)] = inst_42300);

(statearr_42394_42449[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (11))){
var inst_42281 = (state_42353[(7)]);
var inst_42285 = (inst_42281 == null);
var inst_42286 = cljs.core.not.call(null,inst_42285);
var state_42353__$1 = state_42353;
if(inst_42286){
var statearr_42395_42450 = state_42353__$1;
(statearr_42395_42450[(1)] = (13));

} else {
var statearr_42396_42451 = state_42353__$1;
(statearr_42396_42451[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (9))){
var inst_42257 = (state_42353[(8)]);
var state_42353__$1 = state_42353;
var statearr_42397_42452 = state_42353__$1;
(statearr_42397_42452[(2)] = inst_42257);

(statearr_42397_42452[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (5))){
var state_42353__$1 = state_42353;
var statearr_42398_42453 = state_42353__$1;
(statearr_42398_42453[(2)] = true);

(statearr_42398_42453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (14))){
var state_42353__$1 = state_42353;
var statearr_42399_42454 = state_42353__$1;
(statearr_42399_42454[(2)] = false);

(statearr_42399_42454[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (26))){
var inst_42313 = (state_42353[(9)]);
var inst_42320 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_42313);
var state_42353__$1 = state_42353;
var statearr_42400_42455 = state_42353__$1;
(statearr_42400_42455[(2)] = inst_42320);

(statearr_42400_42455[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (16))){
var state_42353__$1 = state_42353;
var statearr_42401_42456 = state_42353__$1;
(statearr_42401_42456[(2)] = true);

(statearr_42401_42456[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (38))){
var inst_42343 = (state_42353[(2)]);
var state_42353__$1 = state_42353;
var statearr_42402_42457 = state_42353__$1;
(statearr_42402_42457[(2)] = inst_42343);

(statearr_42402_42457[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (30))){
var inst_42313 = (state_42353[(9)]);
var inst_42304 = (state_42353[(10)]);
var inst_42305 = (state_42353[(13)]);
var inst_42330 = cljs.core.empty_QMARK_.call(null,inst_42304);
var inst_42331 = inst_42305.call(null,inst_42313);
var inst_42332 = cljs.core.not.call(null,inst_42331);
var inst_42333 = (inst_42330) && (inst_42332);
var state_42353__$1 = state_42353;
var statearr_42403_42458 = state_42353__$1;
(statearr_42403_42458[(2)] = inst_42333);

(statearr_42403_42458[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (10))){
var inst_42257 = (state_42353[(8)]);
var inst_42277 = (state_42353[(2)]);
var inst_42278 = cljs.core.get.call(null,inst_42277,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42279 = cljs.core.get.call(null,inst_42277,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42280 = cljs.core.get.call(null,inst_42277,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_42281 = inst_42257;
var state_42353__$1 = (function (){var statearr_42404 = state_42353;
(statearr_42404[(7)] = inst_42281);

(statearr_42404[(16)] = inst_42278);

(statearr_42404[(17)] = inst_42279);

(statearr_42404[(18)] = inst_42280);

return statearr_42404;
})();
var statearr_42405_42459 = state_42353__$1;
(statearr_42405_42459[(2)] = null);

(statearr_42405_42459[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (18))){
var inst_42295 = (state_42353[(2)]);
var state_42353__$1 = state_42353;
var statearr_42406_42460 = state_42353__$1;
(statearr_42406_42460[(2)] = inst_42295);

(statearr_42406_42460[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (37))){
var state_42353__$1 = state_42353;
var statearr_42407_42461 = state_42353__$1;
(statearr_42407_42461[(2)] = null);

(statearr_42407_42461[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (8))){
var inst_42257 = (state_42353[(8)]);
var inst_42274 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42257);
var state_42353__$1 = state_42353;
var statearr_42408_42462 = state_42353__$1;
(statearr_42408_42462[(2)] = inst_42274);

(statearr_42408_42462[(1)] = (10));


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
});})(c__40653__auto___42416,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__40541__auto__,c__40653__auto___42416,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__40542__auto__ = null;
var cljs$core$async$mix_$_state_machine__40542__auto____0 = (function (){
var statearr_42412 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42412[(0)] = cljs$core$async$mix_$_state_machine__40542__auto__);

(statearr_42412[(1)] = (1));

return statearr_42412;
});
var cljs$core$async$mix_$_state_machine__40542__auto____1 = (function (state_42353){
while(true){
var ret_value__40543__auto__ = (function (){try{while(true){
var result__40544__auto__ = switch__40541__auto__.call(null,state_42353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40544__auto__;
}
break;
}
}catch (e42413){if((e42413 instanceof Object)){
var ex__40545__auto__ = e42413;
var statearr_42414_42463 = state_42353;
(statearr_42414_42463[(5)] = ex__40545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42464 = state_42353;
state_42353 = G__42464;
continue;
} else {
return ret_value__40543__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__40542__auto__ = function(state_42353){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__40542__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__40542__auto____1.call(this,state_42353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__40542__auto____0;
cljs$core$async$mix_$_state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__40542__auto____1;
return cljs$core$async$mix_$_state_machine__40542__auto__;
})()
;})(switch__40541__auto__,c__40653__auto___42416,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__40655__auto__ = (function (){var statearr_42415 = f__40654__auto__.call(null);
(statearr_42415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40653__auto___42416);

return statearr_42415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40655__auto__);
});})(c__40653__auto___42416,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__37439__auto__ = (((p == null))?null:p);
var m__37440__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__37439__auto__)]);
if(!((m__37440__auto__ == null))){
return m__37440__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__37440__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__37440__auto____$1 == null))){
return m__37440__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__37439__auto__ = (((p == null))?null:p);
var m__37440__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__37439__auto__)]);
if(!((m__37440__auto__ == null))){
return m__37440__auto__.call(null,p,v,ch);
} else {
var m__37440__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__37440__auto____$1 == null))){
return m__37440__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args42465 = [];
var len__37851__auto___42468 = arguments.length;
var i__37852__auto___42469 = (0);
while(true){
if((i__37852__auto___42469 < len__37851__auto___42468)){
args42465.push((arguments[i__37852__auto___42469]));

var G__42470 = (i__37852__auto___42469 + (1));
i__37852__auto___42469 = G__42470;
continue;
} else {
}
break;
}

var G__42467 = args42465.length;
switch (G__42467) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42465.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__37439__auto__ = (((p == null))?null:p);
var m__37440__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__37439__auto__)]);
if(!((m__37440__auto__ == null))){
return m__37440__auto__.call(null,p);
} else {
var m__37440__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__37440__auto____$1 == null))){
return m__37440__auto____$1.call(null,p);
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
var x__37439__auto__ = (((p == null))?null:p);
var m__37440__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__37439__auto__)]);
if(!((m__37440__auto__ == null))){
return m__37440__auto__.call(null,p,v);
} else {
var m__37440__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__37440__auto____$1 == null))){
return m__37440__auto____$1.call(null,p,v);
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
var args42473 = [];
var len__37851__auto___42598 = arguments.length;
var i__37852__auto___42599 = (0);
while(true){
if((i__37852__auto___42599 < len__37851__auto___42598)){
args42473.push((arguments[i__37852__auto___42599]));

var G__42600 = (i__37852__auto___42599 + (1));
i__37852__auto___42599 = G__42600;
continue;
} else {
}
break;
}

var G__42475 = args42473.length;
switch (G__42475) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42473.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__36776__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__36776__auto__)){
return or__36776__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__36776__auto__,mults){
return (function (p1__42472_SHARP_){
if(cljs.core.truth_(p1__42472_SHARP_.call(null,topic))){
return p1__42472_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__42472_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__36776__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async42476 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42476 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta42477){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta42477 = meta42477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_42478,meta42477__$1){
var self__ = this;
var _42478__$1 = this;
return (new cljs.core.async.t_cljs$core$async42476(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta42477__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42476.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_42478){
var self__ = this;
var _42478__$1 = this;
return self__.meta42477;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42476.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async42476.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42476.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async42476.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42476.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async42476.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42476.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42476.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta42477","meta42477",-455090477,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42476.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42476.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42476";

cljs.core.async.t_cljs$core$async42476.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__37382__auto__,writer__37383__auto__,opt__37384__auto__){
return cljs.core._write.call(null,writer__37383__auto__,"cljs.core.async/t_cljs$core$async42476");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async42476 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async42476(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42477){
return (new cljs.core.async.t_cljs$core$async42476(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42477));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async42476(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40653__auto___42602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40653__auto___42602,mults,ensure_mult,p){
return (function (){
var f__40654__auto__ = (function (){var switch__40541__auto__ = ((function (c__40653__auto___42602,mults,ensure_mult,p){
return (function (state_42550){
var state_val_42551 = (state_42550[(1)]);
if((state_val_42551 === (7))){
var inst_42546 = (state_42550[(2)]);
var state_42550__$1 = state_42550;
var statearr_42552_42603 = state_42550__$1;
(statearr_42552_42603[(2)] = inst_42546);

(statearr_42552_42603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (20))){
var state_42550__$1 = state_42550;
var statearr_42553_42604 = state_42550__$1;
(statearr_42553_42604[(2)] = null);

(statearr_42553_42604[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (1))){
var state_42550__$1 = state_42550;
var statearr_42554_42605 = state_42550__$1;
(statearr_42554_42605[(2)] = null);

(statearr_42554_42605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (24))){
var inst_42529 = (state_42550[(7)]);
var inst_42538 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_42529);
var state_42550__$1 = state_42550;
var statearr_42555_42606 = state_42550__$1;
(statearr_42555_42606[(2)] = inst_42538);

(statearr_42555_42606[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (4))){
var inst_42481 = (state_42550[(8)]);
var inst_42481__$1 = (state_42550[(2)]);
var inst_42482 = (inst_42481__$1 == null);
var state_42550__$1 = (function (){var statearr_42556 = state_42550;
(statearr_42556[(8)] = inst_42481__$1);

return statearr_42556;
})();
if(cljs.core.truth_(inst_42482)){
var statearr_42557_42607 = state_42550__$1;
(statearr_42557_42607[(1)] = (5));

} else {
var statearr_42558_42608 = state_42550__$1;
(statearr_42558_42608[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (15))){
var inst_42523 = (state_42550[(2)]);
var state_42550__$1 = state_42550;
var statearr_42559_42609 = state_42550__$1;
(statearr_42559_42609[(2)] = inst_42523);

(statearr_42559_42609[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (21))){
var inst_42543 = (state_42550[(2)]);
var state_42550__$1 = (function (){var statearr_42560 = state_42550;
(statearr_42560[(9)] = inst_42543);

return statearr_42560;
})();
var statearr_42561_42610 = state_42550__$1;
(statearr_42561_42610[(2)] = null);

(statearr_42561_42610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (13))){
var inst_42505 = (state_42550[(10)]);
var inst_42507 = cljs.core.chunked_seq_QMARK_.call(null,inst_42505);
var state_42550__$1 = state_42550;
if(inst_42507){
var statearr_42562_42611 = state_42550__$1;
(statearr_42562_42611[(1)] = (16));

} else {
var statearr_42563_42612 = state_42550__$1;
(statearr_42563_42612[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (22))){
var inst_42535 = (state_42550[(2)]);
var state_42550__$1 = state_42550;
if(cljs.core.truth_(inst_42535)){
var statearr_42564_42613 = state_42550__$1;
(statearr_42564_42613[(1)] = (23));

} else {
var statearr_42565_42614 = state_42550__$1;
(statearr_42565_42614[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (6))){
var inst_42531 = (state_42550[(11)]);
var inst_42481 = (state_42550[(8)]);
var inst_42529 = (state_42550[(7)]);
var inst_42529__$1 = topic_fn.call(null,inst_42481);
var inst_42530 = cljs.core.deref.call(null,mults);
var inst_42531__$1 = cljs.core.get.call(null,inst_42530,inst_42529__$1);
var state_42550__$1 = (function (){var statearr_42566 = state_42550;
(statearr_42566[(11)] = inst_42531__$1);

(statearr_42566[(7)] = inst_42529__$1);

return statearr_42566;
})();
if(cljs.core.truth_(inst_42531__$1)){
var statearr_42567_42615 = state_42550__$1;
(statearr_42567_42615[(1)] = (19));

} else {
var statearr_42568_42616 = state_42550__$1;
(statearr_42568_42616[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (25))){
var inst_42540 = (state_42550[(2)]);
var state_42550__$1 = state_42550;
var statearr_42569_42617 = state_42550__$1;
(statearr_42569_42617[(2)] = inst_42540);

(statearr_42569_42617[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (17))){
var inst_42505 = (state_42550[(10)]);
var inst_42514 = cljs.core.first.call(null,inst_42505);
var inst_42515 = cljs.core.async.muxch_STAR_.call(null,inst_42514);
var inst_42516 = cljs.core.async.close_BANG_.call(null,inst_42515);
var inst_42517 = cljs.core.next.call(null,inst_42505);
var inst_42491 = inst_42517;
var inst_42492 = null;
var inst_42493 = (0);
var inst_42494 = (0);
var state_42550__$1 = (function (){var statearr_42570 = state_42550;
(statearr_42570[(12)] = inst_42491);

(statearr_42570[(13)] = inst_42494);

(statearr_42570[(14)] = inst_42492);

(statearr_42570[(15)] = inst_42493);

(statearr_42570[(16)] = inst_42516);

return statearr_42570;
})();
var statearr_42571_42618 = state_42550__$1;
(statearr_42571_42618[(2)] = null);

(statearr_42571_42618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (3))){
var inst_42548 = (state_42550[(2)]);
var state_42550__$1 = state_42550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42550__$1,inst_42548);
} else {
if((state_val_42551 === (12))){
var inst_42525 = (state_42550[(2)]);
var state_42550__$1 = state_42550;
var statearr_42572_42619 = state_42550__$1;
(statearr_42572_42619[(2)] = inst_42525);

(statearr_42572_42619[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (2))){
var state_42550__$1 = state_42550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42550__$1,(4),ch);
} else {
if((state_val_42551 === (23))){
var state_42550__$1 = state_42550;
var statearr_42573_42620 = state_42550__$1;
(statearr_42573_42620[(2)] = null);

(statearr_42573_42620[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (19))){
var inst_42531 = (state_42550[(11)]);
var inst_42481 = (state_42550[(8)]);
var inst_42533 = cljs.core.async.muxch_STAR_.call(null,inst_42531);
var state_42550__$1 = state_42550;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42550__$1,(22),inst_42533,inst_42481);
} else {
if((state_val_42551 === (11))){
var inst_42491 = (state_42550[(12)]);
var inst_42505 = (state_42550[(10)]);
var inst_42505__$1 = cljs.core.seq.call(null,inst_42491);
var state_42550__$1 = (function (){var statearr_42574 = state_42550;
(statearr_42574[(10)] = inst_42505__$1);

return statearr_42574;
})();
if(inst_42505__$1){
var statearr_42575_42621 = state_42550__$1;
(statearr_42575_42621[(1)] = (13));

} else {
var statearr_42576_42622 = state_42550__$1;
(statearr_42576_42622[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (9))){
var inst_42527 = (state_42550[(2)]);
var state_42550__$1 = state_42550;
var statearr_42577_42623 = state_42550__$1;
(statearr_42577_42623[(2)] = inst_42527);

(statearr_42577_42623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (5))){
var inst_42488 = cljs.core.deref.call(null,mults);
var inst_42489 = cljs.core.vals.call(null,inst_42488);
var inst_42490 = cljs.core.seq.call(null,inst_42489);
var inst_42491 = inst_42490;
var inst_42492 = null;
var inst_42493 = (0);
var inst_42494 = (0);
var state_42550__$1 = (function (){var statearr_42578 = state_42550;
(statearr_42578[(12)] = inst_42491);

(statearr_42578[(13)] = inst_42494);

(statearr_42578[(14)] = inst_42492);

(statearr_42578[(15)] = inst_42493);

return statearr_42578;
})();
var statearr_42579_42624 = state_42550__$1;
(statearr_42579_42624[(2)] = null);

(statearr_42579_42624[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (14))){
var state_42550__$1 = state_42550;
var statearr_42583_42625 = state_42550__$1;
(statearr_42583_42625[(2)] = null);

(statearr_42583_42625[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (16))){
var inst_42505 = (state_42550[(10)]);
var inst_42509 = cljs.core.chunk_first.call(null,inst_42505);
var inst_42510 = cljs.core.chunk_rest.call(null,inst_42505);
var inst_42511 = cljs.core.count.call(null,inst_42509);
var inst_42491 = inst_42510;
var inst_42492 = inst_42509;
var inst_42493 = inst_42511;
var inst_42494 = (0);
var state_42550__$1 = (function (){var statearr_42584 = state_42550;
(statearr_42584[(12)] = inst_42491);

(statearr_42584[(13)] = inst_42494);

(statearr_42584[(14)] = inst_42492);

(statearr_42584[(15)] = inst_42493);

return statearr_42584;
})();
var statearr_42585_42626 = state_42550__$1;
(statearr_42585_42626[(2)] = null);

(statearr_42585_42626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (10))){
var inst_42491 = (state_42550[(12)]);
var inst_42494 = (state_42550[(13)]);
var inst_42492 = (state_42550[(14)]);
var inst_42493 = (state_42550[(15)]);
var inst_42499 = cljs.core._nth.call(null,inst_42492,inst_42494);
var inst_42500 = cljs.core.async.muxch_STAR_.call(null,inst_42499);
var inst_42501 = cljs.core.async.close_BANG_.call(null,inst_42500);
var inst_42502 = (inst_42494 + (1));
var tmp42580 = inst_42491;
var tmp42581 = inst_42492;
var tmp42582 = inst_42493;
var inst_42491__$1 = tmp42580;
var inst_42492__$1 = tmp42581;
var inst_42493__$1 = tmp42582;
var inst_42494__$1 = inst_42502;
var state_42550__$1 = (function (){var statearr_42586 = state_42550;
(statearr_42586[(12)] = inst_42491__$1);

(statearr_42586[(13)] = inst_42494__$1);

(statearr_42586[(14)] = inst_42492__$1);

(statearr_42586[(15)] = inst_42493__$1);

(statearr_42586[(17)] = inst_42501);

return statearr_42586;
})();
var statearr_42587_42627 = state_42550__$1;
(statearr_42587_42627[(2)] = null);

(statearr_42587_42627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (18))){
var inst_42520 = (state_42550[(2)]);
var state_42550__$1 = state_42550;
var statearr_42588_42628 = state_42550__$1;
(statearr_42588_42628[(2)] = inst_42520);

(statearr_42588_42628[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (8))){
var inst_42494 = (state_42550[(13)]);
var inst_42493 = (state_42550[(15)]);
var inst_42496 = (inst_42494 < inst_42493);
var inst_42497 = inst_42496;
var state_42550__$1 = state_42550;
if(cljs.core.truth_(inst_42497)){
var statearr_42589_42629 = state_42550__$1;
(statearr_42589_42629[(1)] = (10));

} else {
var statearr_42590_42630 = state_42550__$1;
(statearr_42590_42630[(1)] = (11));

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
});})(c__40653__auto___42602,mults,ensure_mult,p))
;
return ((function (switch__40541__auto__,c__40653__auto___42602,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__40542__auto__ = null;
var cljs$core$async$state_machine__40542__auto____0 = (function (){
var statearr_42594 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42594[(0)] = cljs$core$async$state_machine__40542__auto__);

(statearr_42594[(1)] = (1));

return statearr_42594;
});
var cljs$core$async$state_machine__40542__auto____1 = (function (state_42550){
while(true){
var ret_value__40543__auto__ = (function (){try{while(true){
var result__40544__auto__ = switch__40541__auto__.call(null,state_42550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40544__auto__;
}
break;
}
}catch (e42595){if((e42595 instanceof Object)){
var ex__40545__auto__ = e42595;
var statearr_42596_42631 = state_42550;
(statearr_42596_42631[(5)] = ex__40545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42632 = state_42550;
state_42550 = G__42632;
continue;
} else {
return ret_value__40543__auto__;
}
break;
}
});
cljs$core$async$state_machine__40542__auto__ = function(state_42550){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40542__auto____1.call(this,state_42550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40542__auto____0;
cljs$core$async$state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40542__auto____1;
return cljs$core$async$state_machine__40542__auto__;
})()
;})(switch__40541__auto__,c__40653__auto___42602,mults,ensure_mult,p))
})();
var state__40655__auto__ = (function (){var statearr_42597 = f__40654__auto__.call(null);
(statearr_42597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40653__auto___42602);

return statearr_42597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40655__auto__);
});})(c__40653__auto___42602,mults,ensure_mult,p))
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
var args42633 = [];
var len__37851__auto___42636 = arguments.length;
var i__37852__auto___42637 = (0);
while(true){
if((i__37852__auto___42637 < len__37851__auto___42636)){
args42633.push((arguments[i__37852__auto___42637]));

var G__42638 = (i__37852__auto___42637 + (1));
i__37852__auto___42637 = G__42638;
continue;
} else {
}
break;
}

var G__42635 = args42633.length;
switch (G__42635) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42633.length)].join('')));

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
var args42640 = [];
var len__37851__auto___42643 = arguments.length;
var i__37852__auto___42644 = (0);
while(true){
if((i__37852__auto___42644 < len__37851__auto___42643)){
args42640.push((arguments[i__37852__auto___42644]));

var G__42645 = (i__37852__auto___42644 + (1));
i__37852__auto___42644 = G__42645;
continue;
} else {
}
break;
}

var G__42642 = args42640.length;
switch (G__42642) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42640.length)].join('')));

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
var args42647 = [];
var len__37851__auto___42718 = arguments.length;
var i__37852__auto___42719 = (0);
while(true){
if((i__37852__auto___42719 < len__37851__auto___42718)){
args42647.push((arguments[i__37852__auto___42719]));

var G__42720 = (i__37852__auto___42719 + (1));
i__37852__auto___42719 = G__42720;
continue;
} else {
}
break;
}

var G__42649 = args42647.length;
switch (G__42649) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42647.length)].join('')));

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
var c__40653__auto___42722 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40653__auto___42722,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__40654__auto__ = (function (){var switch__40541__auto__ = ((function (c__40653__auto___42722,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_42688){
var state_val_42689 = (state_42688[(1)]);
if((state_val_42689 === (7))){
var state_42688__$1 = state_42688;
var statearr_42690_42723 = state_42688__$1;
(statearr_42690_42723[(2)] = null);

(statearr_42690_42723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42689 === (1))){
var state_42688__$1 = state_42688;
var statearr_42691_42724 = state_42688__$1;
(statearr_42691_42724[(2)] = null);

(statearr_42691_42724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42689 === (4))){
var inst_42652 = (state_42688[(7)]);
var inst_42654 = (inst_42652 < cnt);
var state_42688__$1 = state_42688;
if(cljs.core.truth_(inst_42654)){
var statearr_42692_42725 = state_42688__$1;
(statearr_42692_42725[(1)] = (6));

} else {
var statearr_42693_42726 = state_42688__$1;
(statearr_42693_42726[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42689 === (15))){
var inst_42684 = (state_42688[(2)]);
var state_42688__$1 = state_42688;
var statearr_42694_42727 = state_42688__$1;
(statearr_42694_42727[(2)] = inst_42684);

(statearr_42694_42727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42689 === (13))){
var inst_42677 = cljs.core.async.close_BANG_.call(null,out);
var state_42688__$1 = state_42688;
var statearr_42695_42728 = state_42688__$1;
(statearr_42695_42728[(2)] = inst_42677);

(statearr_42695_42728[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42689 === (6))){
var state_42688__$1 = state_42688;
var statearr_42696_42729 = state_42688__$1;
(statearr_42696_42729[(2)] = null);

(statearr_42696_42729[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42689 === (3))){
var inst_42686 = (state_42688[(2)]);
var state_42688__$1 = state_42688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42688__$1,inst_42686);
} else {
if((state_val_42689 === (12))){
var inst_42674 = (state_42688[(8)]);
var inst_42674__$1 = (state_42688[(2)]);
var inst_42675 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_42674__$1);
var state_42688__$1 = (function (){var statearr_42697 = state_42688;
(statearr_42697[(8)] = inst_42674__$1);

return statearr_42697;
})();
if(cljs.core.truth_(inst_42675)){
var statearr_42698_42730 = state_42688__$1;
(statearr_42698_42730[(1)] = (13));

} else {
var statearr_42699_42731 = state_42688__$1;
(statearr_42699_42731[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42689 === (2))){
var inst_42651 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_42652 = (0);
var state_42688__$1 = (function (){var statearr_42700 = state_42688;
(statearr_42700[(7)] = inst_42652);

(statearr_42700[(9)] = inst_42651);

return statearr_42700;
})();
var statearr_42701_42732 = state_42688__$1;
(statearr_42701_42732[(2)] = null);

(statearr_42701_42732[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42689 === (11))){
var inst_42652 = (state_42688[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42688,(10),Object,null,(9));
var inst_42661 = chs__$1.call(null,inst_42652);
var inst_42662 = done.call(null,inst_42652);
var inst_42663 = cljs.core.async.take_BANG_.call(null,inst_42661,inst_42662);
var state_42688__$1 = state_42688;
var statearr_42702_42733 = state_42688__$1;
(statearr_42702_42733[(2)] = inst_42663);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42688__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42689 === (9))){
var inst_42652 = (state_42688[(7)]);
var inst_42665 = (state_42688[(2)]);
var inst_42666 = (inst_42652 + (1));
var inst_42652__$1 = inst_42666;
var state_42688__$1 = (function (){var statearr_42703 = state_42688;
(statearr_42703[(7)] = inst_42652__$1);

(statearr_42703[(10)] = inst_42665);

return statearr_42703;
})();
var statearr_42704_42734 = state_42688__$1;
(statearr_42704_42734[(2)] = null);

(statearr_42704_42734[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42689 === (5))){
var inst_42672 = (state_42688[(2)]);
var state_42688__$1 = (function (){var statearr_42705 = state_42688;
(statearr_42705[(11)] = inst_42672);

return statearr_42705;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42688__$1,(12),dchan);
} else {
if((state_val_42689 === (14))){
var inst_42674 = (state_42688[(8)]);
var inst_42679 = cljs.core.apply.call(null,f,inst_42674);
var state_42688__$1 = state_42688;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42688__$1,(16),out,inst_42679);
} else {
if((state_val_42689 === (16))){
var inst_42681 = (state_42688[(2)]);
var state_42688__$1 = (function (){var statearr_42706 = state_42688;
(statearr_42706[(12)] = inst_42681);

return statearr_42706;
})();
var statearr_42707_42735 = state_42688__$1;
(statearr_42707_42735[(2)] = null);

(statearr_42707_42735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42689 === (10))){
var inst_42656 = (state_42688[(2)]);
var inst_42657 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_42688__$1 = (function (){var statearr_42708 = state_42688;
(statearr_42708[(13)] = inst_42656);

return statearr_42708;
})();
var statearr_42709_42736 = state_42688__$1;
(statearr_42709_42736[(2)] = inst_42657);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42688__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42689 === (8))){
var inst_42670 = (state_42688[(2)]);
var state_42688__$1 = state_42688;
var statearr_42710_42737 = state_42688__$1;
(statearr_42710_42737[(2)] = inst_42670);

(statearr_42710_42737[(1)] = (5));


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
});})(c__40653__auto___42722,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__40541__auto__,c__40653__auto___42722,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__40542__auto__ = null;
var cljs$core$async$state_machine__40542__auto____0 = (function (){
var statearr_42714 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42714[(0)] = cljs$core$async$state_machine__40542__auto__);

(statearr_42714[(1)] = (1));

return statearr_42714;
});
var cljs$core$async$state_machine__40542__auto____1 = (function (state_42688){
while(true){
var ret_value__40543__auto__ = (function (){try{while(true){
var result__40544__auto__ = switch__40541__auto__.call(null,state_42688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40544__auto__;
}
break;
}
}catch (e42715){if((e42715 instanceof Object)){
var ex__40545__auto__ = e42715;
var statearr_42716_42738 = state_42688;
(statearr_42716_42738[(5)] = ex__40545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42739 = state_42688;
state_42688 = G__42739;
continue;
} else {
return ret_value__40543__auto__;
}
break;
}
});
cljs$core$async$state_machine__40542__auto__ = function(state_42688){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40542__auto____1.call(this,state_42688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40542__auto____0;
cljs$core$async$state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40542__auto____1;
return cljs$core$async$state_machine__40542__auto__;
})()
;})(switch__40541__auto__,c__40653__auto___42722,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__40655__auto__ = (function (){var statearr_42717 = f__40654__auto__.call(null);
(statearr_42717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40653__auto___42722);

return statearr_42717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40655__auto__);
});})(c__40653__auto___42722,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args42741 = [];
var len__37851__auto___42799 = arguments.length;
var i__37852__auto___42800 = (0);
while(true){
if((i__37852__auto___42800 < len__37851__auto___42799)){
args42741.push((arguments[i__37852__auto___42800]));

var G__42801 = (i__37852__auto___42800 + (1));
i__37852__auto___42800 = G__42801;
continue;
} else {
}
break;
}

var G__42743 = args42741.length;
switch (G__42743) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42741.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40653__auto___42803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40653__auto___42803,out){
return (function (){
var f__40654__auto__ = (function (){var switch__40541__auto__ = ((function (c__40653__auto___42803,out){
return (function (state_42775){
var state_val_42776 = (state_42775[(1)]);
if((state_val_42776 === (7))){
var inst_42755 = (state_42775[(7)]);
var inst_42754 = (state_42775[(8)]);
var inst_42754__$1 = (state_42775[(2)]);
var inst_42755__$1 = cljs.core.nth.call(null,inst_42754__$1,(0),null);
var inst_42756 = cljs.core.nth.call(null,inst_42754__$1,(1),null);
var inst_42757 = (inst_42755__$1 == null);
var state_42775__$1 = (function (){var statearr_42777 = state_42775;
(statearr_42777[(7)] = inst_42755__$1);

(statearr_42777[(9)] = inst_42756);

(statearr_42777[(8)] = inst_42754__$1);

return statearr_42777;
})();
if(cljs.core.truth_(inst_42757)){
var statearr_42778_42804 = state_42775__$1;
(statearr_42778_42804[(1)] = (8));

} else {
var statearr_42779_42805 = state_42775__$1;
(statearr_42779_42805[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42776 === (1))){
var inst_42744 = cljs.core.vec.call(null,chs);
var inst_42745 = inst_42744;
var state_42775__$1 = (function (){var statearr_42780 = state_42775;
(statearr_42780[(10)] = inst_42745);

return statearr_42780;
})();
var statearr_42781_42806 = state_42775__$1;
(statearr_42781_42806[(2)] = null);

(statearr_42781_42806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42776 === (4))){
var inst_42745 = (state_42775[(10)]);
var state_42775__$1 = state_42775;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42775__$1,(7),inst_42745);
} else {
if((state_val_42776 === (6))){
var inst_42771 = (state_42775[(2)]);
var state_42775__$1 = state_42775;
var statearr_42782_42807 = state_42775__$1;
(statearr_42782_42807[(2)] = inst_42771);

(statearr_42782_42807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42776 === (3))){
var inst_42773 = (state_42775[(2)]);
var state_42775__$1 = state_42775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42775__$1,inst_42773);
} else {
if((state_val_42776 === (2))){
var inst_42745 = (state_42775[(10)]);
var inst_42747 = cljs.core.count.call(null,inst_42745);
var inst_42748 = (inst_42747 > (0));
var state_42775__$1 = state_42775;
if(cljs.core.truth_(inst_42748)){
var statearr_42784_42808 = state_42775__$1;
(statearr_42784_42808[(1)] = (4));

} else {
var statearr_42785_42809 = state_42775__$1;
(statearr_42785_42809[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42776 === (11))){
var inst_42745 = (state_42775[(10)]);
var inst_42764 = (state_42775[(2)]);
var tmp42783 = inst_42745;
var inst_42745__$1 = tmp42783;
var state_42775__$1 = (function (){var statearr_42786 = state_42775;
(statearr_42786[(11)] = inst_42764);

(statearr_42786[(10)] = inst_42745__$1);

return statearr_42786;
})();
var statearr_42787_42810 = state_42775__$1;
(statearr_42787_42810[(2)] = null);

(statearr_42787_42810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42776 === (9))){
var inst_42755 = (state_42775[(7)]);
var state_42775__$1 = state_42775;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42775__$1,(11),out,inst_42755);
} else {
if((state_val_42776 === (5))){
var inst_42769 = cljs.core.async.close_BANG_.call(null,out);
var state_42775__$1 = state_42775;
var statearr_42788_42811 = state_42775__$1;
(statearr_42788_42811[(2)] = inst_42769);

(statearr_42788_42811[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42776 === (10))){
var inst_42767 = (state_42775[(2)]);
var state_42775__$1 = state_42775;
var statearr_42789_42812 = state_42775__$1;
(statearr_42789_42812[(2)] = inst_42767);

(statearr_42789_42812[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42776 === (8))){
var inst_42755 = (state_42775[(7)]);
var inst_42745 = (state_42775[(10)]);
var inst_42756 = (state_42775[(9)]);
var inst_42754 = (state_42775[(8)]);
var inst_42759 = (function (){var cs = inst_42745;
var vec__42750 = inst_42754;
var v = inst_42755;
var c = inst_42756;
return ((function (cs,vec__42750,v,c,inst_42755,inst_42745,inst_42756,inst_42754,state_val_42776,c__40653__auto___42803,out){
return (function (p1__42740_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__42740_SHARP_);
});
;})(cs,vec__42750,v,c,inst_42755,inst_42745,inst_42756,inst_42754,state_val_42776,c__40653__auto___42803,out))
})();
var inst_42760 = cljs.core.filterv.call(null,inst_42759,inst_42745);
var inst_42745__$1 = inst_42760;
var state_42775__$1 = (function (){var statearr_42790 = state_42775;
(statearr_42790[(10)] = inst_42745__$1);

return statearr_42790;
})();
var statearr_42791_42813 = state_42775__$1;
(statearr_42791_42813[(2)] = null);

(statearr_42791_42813[(1)] = (2));


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
});})(c__40653__auto___42803,out))
;
return ((function (switch__40541__auto__,c__40653__auto___42803,out){
return (function() {
var cljs$core$async$state_machine__40542__auto__ = null;
var cljs$core$async$state_machine__40542__auto____0 = (function (){
var statearr_42795 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42795[(0)] = cljs$core$async$state_machine__40542__auto__);

(statearr_42795[(1)] = (1));

return statearr_42795;
});
var cljs$core$async$state_machine__40542__auto____1 = (function (state_42775){
while(true){
var ret_value__40543__auto__ = (function (){try{while(true){
var result__40544__auto__ = switch__40541__auto__.call(null,state_42775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40544__auto__;
}
break;
}
}catch (e42796){if((e42796 instanceof Object)){
var ex__40545__auto__ = e42796;
var statearr_42797_42814 = state_42775;
(statearr_42797_42814[(5)] = ex__40545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42815 = state_42775;
state_42775 = G__42815;
continue;
} else {
return ret_value__40543__auto__;
}
break;
}
});
cljs$core$async$state_machine__40542__auto__ = function(state_42775){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40542__auto____1.call(this,state_42775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40542__auto____0;
cljs$core$async$state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40542__auto____1;
return cljs$core$async$state_machine__40542__auto__;
})()
;})(switch__40541__auto__,c__40653__auto___42803,out))
})();
var state__40655__auto__ = (function (){var statearr_42798 = f__40654__auto__.call(null);
(statearr_42798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40653__auto___42803);

return statearr_42798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40655__auto__);
});})(c__40653__auto___42803,out))
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
var args42816 = [];
var len__37851__auto___42865 = arguments.length;
var i__37852__auto___42866 = (0);
while(true){
if((i__37852__auto___42866 < len__37851__auto___42865)){
args42816.push((arguments[i__37852__auto___42866]));

var G__42867 = (i__37852__auto___42866 + (1));
i__37852__auto___42866 = G__42867;
continue;
} else {
}
break;
}

var G__42818 = args42816.length;
switch (G__42818) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42816.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40653__auto___42869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40653__auto___42869,out){
return (function (){
var f__40654__auto__ = (function (){var switch__40541__auto__ = ((function (c__40653__auto___42869,out){
return (function (state_42842){
var state_val_42843 = (state_42842[(1)]);
if((state_val_42843 === (7))){
var inst_42824 = (state_42842[(7)]);
var inst_42824__$1 = (state_42842[(2)]);
var inst_42825 = (inst_42824__$1 == null);
var inst_42826 = cljs.core.not.call(null,inst_42825);
var state_42842__$1 = (function (){var statearr_42844 = state_42842;
(statearr_42844[(7)] = inst_42824__$1);

return statearr_42844;
})();
if(inst_42826){
var statearr_42845_42870 = state_42842__$1;
(statearr_42845_42870[(1)] = (8));

} else {
var statearr_42846_42871 = state_42842__$1;
(statearr_42846_42871[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42843 === (1))){
var inst_42819 = (0);
var state_42842__$1 = (function (){var statearr_42847 = state_42842;
(statearr_42847[(8)] = inst_42819);

return statearr_42847;
})();
var statearr_42848_42872 = state_42842__$1;
(statearr_42848_42872[(2)] = null);

(statearr_42848_42872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42843 === (4))){
var state_42842__$1 = state_42842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42842__$1,(7),ch);
} else {
if((state_val_42843 === (6))){
var inst_42837 = (state_42842[(2)]);
var state_42842__$1 = state_42842;
var statearr_42849_42873 = state_42842__$1;
(statearr_42849_42873[(2)] = inst_42837);

(statearr_42849_42873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42843 === (3))){
var inst_42839 = (state_42842[(2)]);
var inst_42840 = cljs.core.async.close_BANG_.call(null,out);
var state_42842__$1 = (function (){var statearr_42850 = state_42842;
(statearr_42850[(9)] = inst_42839);

return statearr_42850;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42842__$1,inst_42840);
} else {
if((state_val_42843 === (2))){
var inst_42819 = (state_42842[(8)]);
var inst_42821 = (inst_42819 < n);
var state_42842__$1 = state_42842;
if(cljs.core.truth_(inst_42821)){
var statearr_42851_42874 = state_42842__$1;
(statearr_42851_42874[(1)] = (4));

} else {
var statearr_42852_42875 = state_42842__$1;
(statearr_42852_42875[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42843 === (11))){
var inst_42819 = (state_42842[(8)]);
var inst_42829 = (state_42842[(2)]);
var inst_42830 = (inst_42819 + (1));
var inst_42819__$1 = inst_42830;
var state_42842__$1 = (function (){var statearr_42853 = state_42842;
(statearr_42853[(10)] = inst_42829);

(statearr_42853[(8)] = inst_42819__$1);

return statearr_42853;
})();
var statearr_42854_42876 = state_42842__$1;
(statearr_42854_42876[(2)] = null);

(statearr_42854_42876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42843 === (9))){
var state_42842__$1 = state_42842;
var statearr_42855_42877 = state_42842__$1;
(statearr_42855_42877[(2)] = null);

(statearr_42855_42877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42843 === (5))){
var state_42842__$1 = state_42842;
var statearr_42856_42878 = state_42842__$1;
(statearr_42856_42878[(2)] = null);

(statearr_42856_42878[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42843 === (10))){
var inst_42834 = (state_42842[(2)]);
var state_42842__$1 = state_42842;
var statearr_42857_42879 = state_42842__$1;
(statearr_42857_42879[(2)] = inst_42834);

(statearr_42857_42879[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42843 === (8))){
var inst_42824 = (state_42842[(7)]);
var state_42842__$1 = state_42842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42842__$1,(11),out,inst_42824);
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
});})(c__40653__auto___42869,out))
;
return ((function (switch__40541__auto__,c__40653__auto___42869,out){
return (function() {
var cljs$core$async$state_machine__40542__auto__ = null;
var cljs$core$async$state_machine__40542__auto____0 = (function (){
var statearr_42861 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42861[(0)] = cljs$core$async$state_machine__40542__auto__);

(statearr_42861[(1)] = (1));

return statearr_42861;
});
var cljs$core$async$state_machine__40542__auto____1 = (function (state_42842){
while(true){
var ret_value__40543__auto__ = (function (){try{while(true){
var result__40544__auto__ = switch__40541__auto__.call(null,state_42842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40544__auto__;
}
break;
}
}catch (e42862){if((e42862 instanceof Object)){
var ex__40545__auto__ = e42862;
var statearr_42863_42880 = state_42842;
(statearr_42863_42880[(5)] = ex__40545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42881 = state_42842;
state_42842 = G__42881;
continue;
} else {
return ret_value__40543__auto__;
}
break;
}
});
cljs$core$async$state_machine__40542__auto__ = function(state_42842){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40542__auto____1.call(this,state_42842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40542__auto____0;
cljs$core$async$state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40542__auto____1;
return cljs$core$async$state_machine__40542__auto__;
})()
;})(switch__40541__auto__,c__40653__auto___42869,out))
})();
var state__40655__auto__ = (function (){var statearr_42864 = f__40654__auto__.call(null);
(statearr_42864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40653__auto___42869);

return statearr_42864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40655__auto__);
});})(c__40653__auto___42869,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42889 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42889 = (function (map_LT_,f,ch,meta42890){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta42890 = meta42890;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42891,meta42890__$1){
var self__ = this;
var _42891__$1 = this;
return (new cljs.core.async.t_cljs$core$async42889(self__.map_LT_,self__.f,self__.ch,meta42890__$1));
});

cljs.core.async.t_cljs$core$async42889.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42891){
var self__ = this;
var _42891__$1 = this;
return self__.meta42890;
});

cljs.core.async.t_cljs$core$async42889.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async42889.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42889.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42889.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async42889.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async42892 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42892 = (function (map_LT_,f,ch,meta42890,_,fn1,meta42893){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta42890 = meta42890;
this._ = _;
this.fn1 = fn1;
this.meta42893 = meta42893;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_42894,meta42893__$1){
var self__ = this;
var _42894__$1 = this;
return (new cljs.core.async.t_cljs$core$async42892(self__.map_LT_,self__.f,self__.ch,self__.meta42890,self__._,self__.fn1,meta42893__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async42892.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_42894){
var self__ = this;
var _42894__$1 = this;
return self__.meta42893;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42892.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async42892.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42892.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42892.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__42882_SHARP_){
return f1.call(null,(((p1__42882_SHARP_ == null))?null:self__.f.call(null,p1__42882_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async42892.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42890","meta42890",-446027559,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async42889","cljs.core.async/t_cljs$core$async42889",486874051,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta42893","meta42893",-1990497006,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42892.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42892.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42892";

cljs.core.async.t_cljs$core$async42892.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__37382__auto__,writer__37383__auto__,opt__37384__auto__){
return cljs.core._write.call(null,writer__37383__auto__,"cljs.core.async/t_cljs$core$async42892");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async42892 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42892(map_LT___$1,f__$1,ch__$1,meta42890__$1,___$2,fn1__$1,meta42893){
return (new cljs.core.async.t_cljs$core$async42892(map_LT___$1,f__$1,ch__$1,meta42890__$1,___$2,fn1__$1,meta42893));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async42892(self__.map_LT_,self__.f,self__.ch,self__.meta42890,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__36764__auto__ = ret;
if(cljs.core.truth_(and__36764__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__36764__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async42889.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async42889.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async42889.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42890","meta42890",-446027559,null)], null);
});

cljs.core.async.t_cljs$core$async42889.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42889.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42889";

cljs.core.async.t_cljs$core$async42889.cljs$lang$ctorPrWriter = (function (this__37382__auto__,writer__37383__auto__,opt__37384__auto__){
return cljs.core._write.call(null,writer__37383__auto__,"cljs.core.async/t_cljs$core$async42889");
});

cljs.core.async.__GT_t_cljs$core$async42889 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42889(map_LT___$1,f__$1,ch__$1,meta42890){
return (new cljs.core.async.t_cljs$core$async42889(map_LT___$1,f__$1,ch__$1,meta42890));
});

}

return (new cljs.core.async.t_cljs$core$async42889(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42898 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42898 = (function (map_GT_,f,ch,meta42899){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta42899 = meta42899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42900,meta42899__$1){
var self__ = this;
var _42900__$1 = this;
return (new cljs.core.async.t_cljs$core$async42898(self__.map_GT_,self__.f,self__.ch,meta42899__$1));
});

cljs.core.async.t_cljs$core$async42898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42900){
var self__ = this;
var _42900__$1 = this;
return self__.meta42899;
});

cljs.core.async.t_cljs$core$async42898.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async42898.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42898.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async42898.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42898.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async42898.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async42898.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42899","meta42899",-434882936,null)], null);
});

cljs.core.async.t_cljs$core$async42898.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42898.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42898";

cljs.core.async.t_cljs$core$async42898.cljs$lang$ctorPrWriter = (function (this__37382__auto__,writer__37383__auto__,opt__37384__auto__){
return cljs.core._write.call(null,writer__37383__auto__,"cljs.core.async/t_cljs$core$async42898");
});

cljs.core.async.__GT_t_cljs$core$async42898 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async42898(map_GT___$1,f__$1,ch__$1,meta42899){
return (new cljs.core.async.t_cljs$core$async42898(map_GT___$1,f__$1,ch__$1,meta42899));
});

}

return (new cljs.core.async.t_cljs$core$async42898(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async42904 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42904 = (function (filter_GT_,p,ch,meta42905){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta42905 = meta42905;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42906,meta42905__$1){
var self__ = this;
var _42906__$1 = this;
return (new cljs.core.async.t_cljs$core$async42904(self__.filter_GT_,self__.p,self__.ch,meta42905__$1));
});

cljs.core.async.t_cljs$core$async42904.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42906){
var self__ = this;
var _42906__$1 = this;
return self__.meta42905;
});

cljs.core.async.t_cljs$core$async42904.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async42904.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42904.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42904.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async42904.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42904.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async42904.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async42904.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42905","meta42905",1103084261,null)], null);
});

cljs.core.async.t_cljs$core$async42904.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42904.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42904";

cljs.core.async.t_cljs$core$async42904.cljs$lang$ctorPrWriter = (function (this__37382__auto__,writer__37383__auto__,opt__37384__auto__){
return cljs.core._write.call(null,writer__37383__auto__,"cljs.core.async/t_cljs$core$async42904");
});

cljs.core.async.__GT_t_cljs$core$async42904 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async42904(filter_GT___$1,p__$1,ch__$1,meta42905){
return (new cljs.core.async.t_cljs$core$async42904(filter_GT___$1,p__$1,ch__$1,meta42905));
});

}

return (new cljs.core.async.t_cljs$core$async42904(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args42907 = [];
var len__37851__auto___42951 = arguments.length;
var i__37852__auto___42952 = (0);
while(true){
if((i__37852__auto___42952 < len__37851__auto___42951)){
args42907.push((arguments[i__37852__auto___42952]));

var G__42953 = (i__37852__auto___42952 + (1));
i__37852__auto___42952 = G__42953;
continue;
} else {
}
break;
}

var G__42909 = args42907.length;
switch (G__42909) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42907.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40653__auto___42955 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40653__auto___42955,out){
return (function (){
var f__40654__auto__ = (function (){var switch__40541__auto__ = ((function (c__40653__auto___42955,out){
return (function (state_42930){
var state_val_42931 = (state_42930[(1)]);
if((state_val_42931 === (7))){
var inst_42926 = (state_42930[(2)]);
var state_42930__$1 = state_42930;
var statearr_42932_42956 = state_42930__$1;
(statearr_42932_42956[(2)] = inst_42926);

(statearr_42932_42956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42931 === (1))){
var state_42930__$1 = state_42930;
var statearr_42933_42957 = state_42930__$1;
(statearr_42933_42957[(2)] = null);

(statearr_42933_42957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42931 === (4))){
var inst_42912 = (state_42930[(7)]);
var inst_42912__$1 = (state_42930[(2)]);
var inst_42913 = (inst_42912__$1 == null);
var state_42930__$1 = (function (){var statearr_42934 = state_42930;
(statearr_42934[(7)] = inst_42912__$1);

return statearr_42934;
})();
if(cljs.core.truth_(inst_42913)){
var statearr_42935_42958 = state_42930__$1;
(statearr_42935_42958[(1)] = (5));

} else {
var statearr_42936_42959 = state_42930__$1;
(statearr_42936_42959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42931 === (6))){
var inst_42912 = (state_42930[(7)]);
var inst_42917 = p.call(null,inst_42912);
var state_42930__$1 = state_42930;
if(cljs.core.truth_(inst_42917)){
var statearr_42937_42960 = state_42930__$1;
(statearr_42937_42960[(1)] = (8));

} else {
var statearr_42938_42961 = state_42930__$1;
(statearr_42938_42961[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42931 === (3))){
var inst_42928 = (state_42930[(2)]);
var state_42930__$1 = state_42930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42930__$1,inst_42928);
} else {
if((state_val_42931 === (2))){
var state_42930__$1 = state_42930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42930__$1,(4),ch);
} else {
if((state_val_42931 === (11))){
var inst_42920 = (state_42930[(2)]);
var state_42930__$1 = state_42930;
var statearr_42939_42962 = state_42930__$1;
(statearr_42939_42962[(2)] = inst_42920);

(statearr_42939_42962[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42931 === (9))){
var state_42930__$1 = state_42930;
var statearr_42940_42963 = state_42930__$1;
(statearr_42940_42963[(2)] = null);

(statearr_42940_42963[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42931 === (5))){
var inst_42915 = cljs.core.async.close_BANG_.call(null,out);
var state_42930__$1 = state_42930;
var statearr_42941_42964 = state_42930__$1;
(statearr_42941_42964[(2)] = inst_42915);

(statearr_42941_42964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42931 === (10))){
var inst_42923 = (state_42930[(2)]);
var state_42930__$1 = (function (){var statearr_42942 = state_42930;
(statearr_42942[(8)] = inst_42923);

return statearr_42942;
})();
var statearr_42943_42965 = state_42930__$1;
(statearr_42943_42965[(2)] = null);

(statearr_42943_42965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42931 === (8))){
var inst_42912 = (state_42930[(7)]);
var state_42930__$1 = state_42930;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42930__$1,(11),out,inst_42912);
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
});})(c__40653__auto___42955,out))
;
return ((function (switch__40541__auto__,c__40653__auto___42955,out){
return (function() {
var cljs$core$async$state_machine__40542__auto__ = null;
var cljs$core$async$state_machine__40542__auto____0 = (function (){
var statearr_42947 = [null,null,null,null,null,null,null,null,null];
(statearr_42947[(0)] = cljs$core$async$state_machine__40542__auto__);

(statearr_42947[(1)] = (1));

return statearr_42947;
});
var cljs$core$async$state_machine__40542__auto____1 = (function (state_42930){
while(true){
var ret_value__40543__auto__ = (function (){try{while(true){
var result__40544__auto__ = switch__40541__auto__.call(null,state_42930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40544__auto__;
}
break;
}
}catch (e42948){if((e42948 instanceof Object)){
var ex__40545__auto__ = e42948;
var statearr_42949_42966 = state_42930;
(statearr_42949_42966[(5)] = ex__40545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42967 = state_42930;
state_42930 = G__42967;
continue;
} else {
return ret_value__40543__auto__;
}
break;
}
});
cljs$core$async$state_machine__40542__auto__ = function(state_42930){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40542__auto____1.call(this,state_42930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40542__auto____0;
cljs$core$async$state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40542__auto____1;
return cljs$core$async$state_machine__40542__auto__;
})()
;})(switch__40541__auto__,c__40653__auto___42955,out))
})();
var state__40655__auto__ = (function (){var statearr_42950 = f__40654__auto__.call(null);
(statearr_42950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40653__auto___42955);

return statearr_42950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40655__auto__);
});})(c__40653__auto___42955,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args42968 = [];
var len__37851__auto___42971 = arguments.length;
var i__37852__auto___42972 = (0);
while(true){
if((i__37852__auto___42972 < len__37851__auto___42971)){
args42968.push((arguments[i__37852__auto___42972]));

var G__42973 = (i__37852__auto___42972 + (1));
i__37852__auto___42972 = G__42973;
continue;
} else {
}
break;
}

var G__42970 = args42968.length;
switch (G__42970) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42968.length)].join('')));

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
var c__40653__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40653__auto__){
return (function (){
var f__40654__auto__ = (function (){var switch__40541__auto__ = ((function (c__40653__auto__){
return (function (state_43140){
var state_val_43141 = (state_43140[(1)]);
if((state_val_43141 === (7))){
var inst_43136 = (state_43140[(2)]);
var state_43140__$1 = state_43140;
var statearr_43142_43183 = state_43140__$1;
(statearr_43142_43183[(2)] = inst_43136);

(statearr_43142_43183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43141 === (20))){
var inst_43106 = (state_43140[(7)]);
var inst_43117 = (state_43140[(2)]);
var inst_43118 = cljs.core.next.call(null,inst_43106);
var inst_43092 = inst_43118;
var inst_43093 = null;
var inst_43094 = (0);
var inst_43095 = (0);
var state_43140__$1 = (function (){var statearr_43143 = state_43140;
(statearr_43143[(8)] = inst_43117);

(statearr_43143[(9)] = inst_43095);

(statearr_43143[(10)] = inst_43093);

(statearr_43143[(11)] = inst_43094);

(statearr_43143[(12)] = inst_43092);

return statearr_43143;
})();
var statearr_43144_43184 = state_43140__$1;
(statearr_43144_43184[(2)] = null);

(statearr_43144_43184[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43141 === (1))){
var state_43140__$1 = state_43140;
var statearr_43145_43185 = state_43140__$1;
(statearr_43145_43185[(2)] = null);

(statearr_43145_43185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43141 === (4))){
var inst_43081 = (state_43140[(13)]);
var inst_43081__$1 = (state_43140[(2)]);
var inst_43082 = (inst_43081__$1 == null);
var state_43140__$1 = (function (){var statearr_43146 = state_43140;
(statearr_43146[(13)] = inst_43081__$1);

return statearr_43146;
})();
if(cljs.core.truth_(inst_43082)){
var statearr_43147_43186 = state_43140__$1;
(statearr_43147_43186[(1)] = (5));

} else {
var statearr_43148_43187 = state_43140__$1;
(statearr_43148_43187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43141 === (15))){
var state_43140__$1 = state_43140;
var statearr_43152_43188 = state_43140__$1;
(statearr_43152_43188[(2)] = null);

(statearr_43152_43188[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43141 === (21))){
var state_43140__$1 = state_43140;
var statearr_43153_43189 = state_43140__$1;
(statearr_43153_43189[(2)] = null);

(statearr_43153_43189[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43141 === (13))){
var inst_43095 = (state_43140[(9)]);
var inst_43093 = (state_43140[(10)]);
var inst_43094 = (state_43140[(11)]);
var inst_43092 = (state_43140[(12)]);
var inst_43102 = (state_43140[(2)]);
var inst_43103 = (inst_43095 + (1));
var tmp43149 = inst_43093;
var tmp43150 = inst_43094;
var tmp43151 = inst_43092;
var inst_43092__$1 = tmp43151;
var inst_43093__$1 = tmp43149;
var inst_43094__$1 = tmp43150;
var inst_43095__$1 = inst_43103;
var state_43140__$1 = (function (){var statearr_43154 = state_43140;
(statearr_43154[(9)] = inst_43095__$1);

(statearr_43154[(10)] = inst_43093__$1);

(statearr_43154[(11)] = inst_43094__$1);

(statearr_43154[(12)] = inst_43092__$1);

(statearr_43154[(14)] = inst_43102);

return statearr_43154;
})();
var statearr_43155_43190 = state_43140__$1;
(statearr_43155_43190[(2)] = null);

(statearr_43155_43190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43141 === (22))){
var state_43140__$1 = state_43140;
var statearr_43156_43191 = state_43140__$1;
(statearr_43156_43191[(2)] = null);

(statearr_43156_43191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43141 === (6))){
var inst_43081 = (state_43140[(13)]);
var inst_43090 = f.call(null,inst_43081);
var inst_43091 = cljs.core.seq.call(null,inst_43090);
var inst_43092 = inst_43091;
var inst_43093 = null;
var inst_43094 = (0);
var inst_43095 = (0);
var state_43140__$1 = (function (){var statearr_43157 = state_43140;
(statearr_43157[(9)] = inst_43095);

(statearr_43157[(10)] = inst_43093);

(statearr_43157[(11)] = inst_43094);

(statearr_43157[(12)] = inst_43092);

return statearr_43157;
})();
var statearr_43158_43192 = state_43140__$1;
(statearr_43158_43192[(2)] = null);

(statearr_43158_43192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43141 === (17))){
var inst_43106 = (state_43140[(7)]);
var inst_43110 = cljs.core.chunk_first.call(null,inst_43106);
var inst_43111 = cljs.core.chunk_rest.call(null,inst_43106);
var inst_43112 = cljs.core.count.call(null,inst_43110);
var inst_43092 = inst_43111;
var inst_43093 = inst_43110;
var inst_43094 = inst_43112;
var inst_43095 = (0);
var state_43140__$1 = (function (){var statearr_43159 = state_43140;
(statearr_43159[(9)] = inst_43095);

(statearr_43159[(10)] = inst_43093);

(statearr_43159[(11)] = inst_43094);

(statearr_43159[(12)] = inst_43092);

return statearr_43159;
})();
var statearr_43160_43193 = state_43140__$1;
(statearr_43160_43193[(2)] = null);

(statearr_43160_43193[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43141 === (3))){
var inst_43138 = (state_43140[(2)]);
var state_43140__$1 = state_43140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43140__$1,inst_43138);
} else {
if((state_val_43141 === (12))){
var inst_43126 = (state_43140[(2)]);
var state_43140__$1 = state_43140;
var statearr_43161_43194 = state_43140__$1;
(statearr_43161_43194[(2)] = inst_43126);

(statearr_43161_43194[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43141 === (2))){
var state_43140__$1 = state_43140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43140__$1,(4),in$);
} else {
if((state_val_43141 === (23))){
var inst_43134 = (state_43140[(2)]);
var state_43140__$1 = state_43140;
var statearr_43162_43195 = state_43140__$1;
(statearr_43162_43195[(2)] = inst_43134);

(statearr_43162_43195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43141 === (19))){
var inst_43121 = (state_43140[(2)]);
var state_43140__$1 = state_43140;
var statearr_43163_43196 = state_43140__$1;
(statearr_43163_43196[(2)] = inst_43121);

(statearr_43163_43196[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43141 === (11))){
var inst_43106 = (state_43140[(7)]);
var inst_43092 = (state_43140[(12)]);
var inst_43106__$1 = cljs.core.seq.call(null,inst_43092);
var state_43140__$1 = (function (){var statearr_43164 = state_43140;
(statearr_43164[(7)] = inst_43106__$1);

return statearr_43164;
})();
if(inst_43106__$1){
var statearr_43165_43197 = state_43140__$1;
(statearr_43165_43197[(1)] = (14));

} else {
var statearr_43166_43198 = state_43140__$1;
(statearr_43166_43198[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43141 === (9))){
var inst_43128 = (state_43140[(2)]);
var inst_43129 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_43140__$1 = (function (){var statearr_43167 = state_43140;
(statearr_43167[(15)] = inst_43128);

return statearr_43167;
})();
if(cljs.core.truth_(inst_43129)){
var statearr_43168_43199 = state_43140__$1;
(statearr_43168_43199[(1)] = (21));

} else {
var statearr_43169_43200 = state_43140__$1;
(statearr_43169_43200[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43141 === (5))){
var inst_43084 = cljs.core.async.close_BANG_.call(null,out);
var state_43140__$1 = state_43140;
var statearr_43170_43201 = state_43140__$1;
(statearr_43170_43201[(2)] = inst_43084);

(statearr_43170_43201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43141 === (14))){
var inst_43106 = (state_43140[(7)]);
var inst_43108 = cljs.core.chunked_seq_QMARK_.call(null,inst_43106);
var state_43140__$1 = state_43140;
if(inst_43108){
var statearr_43171_43202 = state_43140__$1;
(statearr_43171_43202[(1)] = (17));

} else {
var statearr_43172_43203 = state_43140__$1;
(statearr_43172_43203[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43141 === (16))){
var inst_43124 = (state_43140[(2)]);
var state_43140__$1 = state_43140;
var statearr_43173_43204 = state_43140__$1;
(statearr_43173_43204[(2)] = inst_43124);

(statearr_43173_43204[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43141 === (10))){
var inst_43095 = (state_43140[(9)]);
var inst_43093 = (state_43140[(10)]);
var inst_43100 = cljs.core._nth.call(null,inst_43093,inst_43095);
var state_43140__$1 = state_43140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43140__$1,(13),out,inst_43100);
} else {
if((state_val_43141 === (18))){
var inst_43106 = (state_43140[(7)]);
var inst_43115 = cljs.core.first.call(null,inst_43106);
var state_43140__$1 = state_43140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43140__$1,(20),out,inst_43115);
} else {
if((state_val_43141 === (8))){
var inst_43095 = (state_43140[(9)]);
var inst_43094 = (state_43140[(11)]);
var inst_43097 = (inst_43095 < inst_43094);
var inst_43098 = inst_43097;
var state_43140__$1 = state_43140;
if(cljs.core.truth_(inst_43098)){
var statearr_43174_43205 = state_43140__$1;
(statearr_43174_43205[(1)] = (10));

} else {
var statearr_43175_43206 = state_43140__$1;
(statearr_43175_43206[(1)] = (11));

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
});})(c__40653__auto__))
;
return ((function (switch__40541__auto__,c__40653__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__40542__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__40542__auto____0 = (function (){
var statearr_43179 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43179[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__40542__auto__);

(statearr_43179[(1)] = (1));

return statearr_43179;
});
var cljs$core$async$mapcat_STAR__$_state_machine__40542__auto____1 = (function (state_43140){
while(true){
var ret_value__40543__auto__ = (function (){try{while(true){
var result__40544__auto__ = switch__40541__auto__.call(null,state_43140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40544__auto__;
}
break;
}
}catch (e43180){if((e43180 instanceof Object)){
var ex__40545__auto__ = e43180;
var statearr_43181_43207 = state_43140;
(statearr_43181_43207[(5)] = ex__40545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43208 = state_43140;
state_43140 = G__43208;
continue;
} else {
return ret_value__40543__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__40542__auto__ = function(state_43140){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__40542__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__40542__auto____1.call(this,state_43140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__40542__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__40542__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__40542__auto__;
})()
;})(switch__40541__auto__,c__40653__auto__))
})();
var state__40655__auto__ = (function (){var statearr_43182 = f__40654__auto__.call(null);
(statearr_43182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40653__auto__);

return statearr_43182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40655__auto__);
});})(c__40653__auto__))
);

return c__40653__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args43209 = [];
var len__37851__auto___43212 = arguments.length;
var i__37852__auto___43213 = (0);
while(true){
if((i__37852__auto___43213 < len__37851__auto___43212)){
args43209.push((arguments[i__37852__auto___43213]));

var G__43214 = (i__37852__auto___43213 + (1));
i__37852__auto___43213 = G__43214;
continue;
} else {
}
break;
}

var G__43211 = args43209.length;
switch (G__43211) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43209.length)].join('')));

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
var args43216 = [];
var len__37851__auto___43219 = arguments.length;
var i__37852__auto___43220 = (0);
while(true){
if((i__37852__auto___43220 < len__37851__auto___43219)){
args43216.push((arguments[i__37852__auto___43220]));

var G__43221 = (i__37852__auto___43220 + (1));
i__37852__auto___43220 = G__43221;
continue;
} else {
}
break;
}

var G__43218 = args43216.length;
switch (G__43218) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43216.length)].join('')));

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
var args43223 = [];
var len__37851__auto___43274 = arguments.length;
var i__37852__auto___43275 = (0);
while(true){
if((i__37852__auto___43275 < len__37851__auto___43274)){
args43223.push((arguments[i__37852__auto___43275]));

var G__43276 = (i__37852__auto___43275 + (1));
i__37852__auto___43275 = G__43276;
continue;
} else {
}
break;
}

var G__43225 = args43223.length;
switch (G__43225) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43223.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40653__auto___43278 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40653__auto___43278,out){
return (function (){
var f__40654__auto__ = (function (){var switch__40541__auto__ = ((function (c__40653__auto___43278,out){
return (function (state_43249){
var state_val_43250 = (state_43249[(1)]);
if((state_val_43250 === (7))){
var inst_43244 = (state_43249[(2)]);
var state_43249__$1 = state_43249;
var statearr_43251_43279 = state_43249__$1;
(statearr_43251_43279[(2)] = inst_43244);

(statearr_43251_43279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43250 === (1))){
var inst_43226 = null;
var state_43249__$1 = (function (){var statearr_43252 = state_43249;
(statearr_43252[(7)] = inst_43226);

return statearr_43252;
})();
var statearr_43253_43280 = state_43249__$1;
(statearr_43253_43280[(2)] = null);

(statearr_43253_43280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43250 === (4))){
var inst_43229 = (state_43249[(8)]);
var inst_43229__$1 = (state_43249[(2)]);
var inst_43230 = (inst_43229__$1 == null);
var inst_43231 = cljs.core.not.call(null,inst_43230);
var state_43249__$1 = (function (){var statearr_43254 = state_43249;
(statearr_43254[(8)] = inst_43229__$1);

return statearr_43254;
})();
if(inst_43231){
var statearr_43255_43281 = state_43249__$1;
(statearr_43255_43281[(1)] = (5));

} else {
var statearr_43256_43282 = state_43249__$1;
(statearr_43256_43282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43250 === (6))){
var state_43249__$1 = state_43249;
var statearr_43257_43283 = state_43249__$1;
(statearr_43257_43283[(2)] = null);

(statearr_43257_43283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43250 === (3))){
var inst_43246 = (state_43249[(2)]);
var inst_43247 = cljs.core.async.close_BANG_.call(null,out);
var state_43249__$1 = (function (){var statearr_43258 = state_43249;
(statearr_43258[(9)] = inst_43246);

return statearr_43258;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43249__$1,inst_43247);
} else {
if((state_val_43250 === (2))){
var state_43249__$1 = state_43249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43249__$1,(4),ch);
} else {
if((state_val_43250 === (11))){
var inst_43229 = (state_43249[(8)]);
var inst_43238 = (state_43249[(2)]);
var inst_43226 = inst_43229;
var state_43249__$1 = (function (){var statearr_43259 = state_43249;
(statearr_43259[(7)] = inst_43226);

(statearr_43259[(10)] = inst_43238);

return statearr_43259;
})();
var statearr_43260_43284 = state_43249__$1;
(statearr_43260_43284[(2)] = null);

(statearr_43260_43284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43250 === (9))){
var inst_43229 = (state_43249[(8)]);
var state_43249__$1 = state_43249;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43249__$1,(11),out,inst_43229);
} else {
if((state_val_43250 === (5))){
var inst_43226 = (state_43249[(7)]);
var inst_43229 = (state_43249[(8)]);
var inst_43233 = cljs.core._EQ_.call(null,inst_43229,inst_43226);
var state_43249__$1 = state_43249;
if(inst_43233){
var statearr_43262_43285 = state_43249__$1;
(statearr_43262_43285[(1)] = (8));

} else {
var statearr_43263_43286 = state_43249__$1;
(statearr_43263_43286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43250 === (10))){
var inst_43241 = (state_43249[(2)]);
var state_43249__$1 = state_43249;
var statearr_43264_43287 = state_43249__$1;
(statearr_43264_43287[(2)] = inst_43241);

(statearr_43264_43287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43250 === (8))){
var inst_43226 = (state_43249[(7)]);
var tmp43261 = inst_43226;
var inst_43226__$1 = tmp43261;
var state_43249__$1 = (function (){var statearr_43265 = state_43249;
(statearr_43265[(7)] = inst_43226__$1);

return statearr_43265;
})();
var statearr_43266_43288 = state_43249__$1;
(statearr_43266_43288[(2)] = null);

(statearr_43266_43288[(1)] = (2));


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
});})(c__40653__auto___43278,out))
;
return ((function (switch__40541__auto__,c__40653__auto___43278,out){
return (function() {
var cljs$core$async$state_machine__40542__auto__ = null;
var cljs$core$async$state_machine__40542__auto____0 = (function (){
var statearr_43270 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43270[(0)] = cljs$core$async$state_machine__40542__auto__);

(statearr_43270[(1)] = (1));

return statearr_43270;
});
var cljs$core$async$state_machine__40542__auto____1 = (function (state_43249){
while(true){
var ret_value__40543__auto__ = (function (){try{while(true){
var result__40544__auto__ = switch__40541__auto__.call(null,state_43249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40544__auto__;
}
break;
}
}catch (e43271){if((e43271 instanceof Object)){
var ex__40545__auto__ = e43271;
var statearr_43272_43289 = state_43249;
(statearr_43272_43289[(5)] = ex__40545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43290 = state_43249;
state_43249 = G__43290;
continue;
} else {
return ret_value__40543__auto__;
}
break;
}
});
cljs$core$async$state_machine__40542__auto__ = function(state_43249){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40542__auto____1.call(this,state_43249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40542__auto____0;
cljs$core$async$state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40542__auto____1;
return cljs$core$async$state_machine__40542__auto__;
})()
;})(switch__40541__auto__,c__40653__auto___43278,out))
})();
var state__40655__auto__ = (function (){var statearr_43273 = f__40654__auto__.call(null);
(statearr_43273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40653__auto___43278);

return statearr_43273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40655__auto__);
});})(c__40653__auto___43278,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args43291 = [];
var len__37851__auto___43361 = arguments.length;
var i__37852__auto___43362 = (0);
while(true){
if((i__37852__auto___43362 < len__37851__auto___43361)){
args43291.push((arguments[i__37852__auto___43362]));

var G__43363 = (i__37852__auto___43362 + (1));
i__37852__auto___43362 = G__43363;
continue;
} else {
}
break;
}

var G__43293 = args43291.length;
switch (G__43293) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43291.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40653__auto___43365 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40653__auto___43365,out){
return (function (){
var f__40654__auto__ = (function (){var switch__40541__auto__ = ((function (c__40653__auto___43365,out){
return (function (state_43331){
var state_val_43332 = (state_43331[(1)]);
if((state_val_43332 === (7))){
var inst_43327 = (state_43331[(2)]);
var state_43331__$1 = state_43331;
var statearr_43333_43366 = state_43331__$1;
(statearr_43333_43366[(2)] = inst_43327);

(statearr_43333_43366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43332 === (1))){
var inst_43294 = (new Array(n));
var inst_43295 = inst_43294;
var inst_43296 = (0);
var state_43331__$1 = (function (){var statearr_43334 = state_43331;
(statearr_43334[(7)] = inst_43296);

(statearr_43334[(8)] = inst_43295);

return statearr_43334;
})();
var statearr_43335_43367 = state_43331__$1;
(statearr_43335_43367[(2)] = null);

(statearr_43335_43367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43332 === (4))){
var inst_43299 = (state_43331[(9)]);
var inst_43299__$1 = (state_43331[(2)]);
var inst_43300 = (inst_43299__$1 == null);
var inst_43301 = cljs.core.not.call(null,inst_43300);
var state_43331__$1 = (function (){var statearr_43336 = state_43331;
(statearr_43336[(9)] = inst_43299__$1);

return statearr_43336;
})();
if(inst_43301){
var statearr_43337_43368 = state_43331__$1;
(statearr_43337_43368[(1)] = (5));

} else {
var statearr_43338_43369 = state_43331__$1;
(statearr_43338_43369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43332 === (15))){
var inst_43321 = (state_43331[(2)]);
var state_43331__$1 = state_43331;
var statearr_43339_43370 = state_43331__$1;
(statearr_43339_43370[(2)] = inst_43321);

(statearr_43339_43370[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43332 === (13))){
var state_43331__$1 = state_43331;
var statearr_43340_43371 = state_43331__$1;
(statearr_43340_43371[(2)] = null);

(statearr_43340_43371[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43332 === (6))){
var inst_43296 = (state_43331[(7)]);
var inst_43317 = (inst_43296 > (0));
var state_43331__$1 = state_43331;
if(cljs.core.truth_(inst_43317)){
var statearr_43341_43372 = state_43331__$1;
(statearr_43341_43372[(1)] = (12));

} else {
var statearr_43342_43373 = state_43331__$1;
(statearr_43342_43373[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43332 === (3))){
var inst_43329 = (state_43331[(2)]);
var state_43331__$1 = state_43331;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43331__$1,inst_43329);
} else {
if((state_val_43332 === (12))){
var inst_43295 = (state_43331[(8)]);
var inst_43319 = cljs.core.vec.call(null,inst_43295);
var state_43331__$1 = state_43331;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43331__$1,(15),out,inst_43319);
} else {
if((state_val_43332 === (2))){
var state_43331__$1 = state_43331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43331__$1,(4),ch);
} else {
if((state_val_43332 === (11))){
var inst_43311 = (state_43331[(2)]);
var inst_43312 = (new Array(n));
var inst_43295 = inst_43312;
var inst_43296 = (0);
var state_43331__$1 = (function (){var statearr_43343 = state_43331;
(statearr_43343[(7)] = inst_43296);

(statearr_43343[(10)] = inst_43311);

(statearr_43343[(8)] = inst_43295);

return statearr_43343;
})();
var statearr_43344_43374 = state_43331__$1;
(statearr_43344_43374[(2)] = null);

(statearr_43344_43374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43332 === (9))){
var inst_43295 = (state_43331[(8)]);
var inst_43309 = cljs.core.vec.call(null,inst_43295);
var state_43331__$1 = state_43331;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43331__$1,(11),out,inst_43309);
} else {
if((state_val_43332 === (5))){
var inst_43299 = (state_43331[(9)]);
var inst_43296 = (state_43331[(7)]);
var inst_43295 = (state_43331[(8)]);
var inst_43304 = (state_43331[(11)]);
var inst_43303 = (inst_43295[inst_43296] = inst_43299);
var inst_43304__$1 = (inst_43296 + (1));
var inst_43305 = (inst_43304__$1 < n);
var state_43331__$1 = (function (){var statearr_43345 = state_43331;
(statearr_43345[(12)] = inst_43303);

(statearr_43345[(11)] = inst_43304__$1);

return statearr_43345;
})();
if(cljs.core.truth_(inst_43305)){
var statearr_43346_43375 = state_43331__$1;
(statearr_43346_43375[(1)] = (8));

} else {
var statearr_43347_43376 = state_43331__$1;
(statearr_43347_43376[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43332 === (14))){
var inst_43324 = (state_43331[(2)]);
var inst_43325 = cljs.core.async.close_BANG_.call(null,out);
var state_43331__$1 = (function (){var statearr_43349 = state_43331;
(statearr_43349[(13)] = inst_43324);

return statearr_43349;
})();
var statearr_43350_43377 = state_43331__$1;
(statearr_43350_43377[(2)] = inst_43325);

(statearr_43350_43377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43332 === (10))){
var inst_43315 = (state_43331[(2)]);
var state_43331__$1 = state_43331;
var statearr_43351_43378 = state_43331__$1;
(statearr_43351_43378[(2)] = inst_43315);

(statearr_43351_43378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43332 === (8))){
var inst_43295 = (state_43331[(8)]);
var inst_43304 = (state_43331[(11)]);
var tmp43348 = inst_43295;
var inst_43295__$1 = tmp43348;
var inst_43296 = inst_43304;
var state_43331__$1 = (function (){var statearr_43352 = state_43331;
(statearr_43352[(7)] = inst_43296);

(statearr_43352[(8)] = inst_43295__$1);

return statearr_43352;
})();
var statearr_43353_43379 = state_43331__$1;
(statearr_43353_43379[(2)] = null);

(statearr_43353_43379[(1)] = (2));


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
});})(c__40653__auto___43365,out))
;
return ((function (switch__40541__auto__,c__40653__auto___43365,out){
return (function() {
var cljs$core$async$state_machine__40542__auto__ = null;
var cljs$core$async$state_machine__40542__auto____0 = (function (){
var statearr_43357 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43357[(0)] = cljs$core$async$state_machine__40542__auto__);

(statearr_43357[(1)] = (1));

return statearr_43357;
});
var cljs$core$async$state_machine__40542__auto____1 = (function (state_43331){
while(true){
var ret_value__40543__auto__ = (function (){try{while(true){
var result__40544__auto__ = switch__40541__auto__.call(null,state_43331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40544__auto__;
}
break;
}
}catch (e43358){if((e43358 instanceof Object)){
var ex__40545__auto__ = e43358;
var statearr_43359_43380 = state_43331;
(statearr_43359_43380[(5)] = ex__40545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43381 = state_43331;
state_43331 = G__43381;
continue;
} else {
return ret_value__40543__auto__;
}
break;
}
});
cljs$core$async$state_machine__40542__auto__ = function(state_43331){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40542__auto____1.call(this,state_43331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40542__auto____0;
cljs$core$async$state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40542__auto____1;
return cljs$core$async$state_machine__40542__auto__;
})()
;})(switch__40541__auto__,c__40653__auto___43365,out))
})();
var state__40655__auto__ = (function (){var statearr_43360 = f__40654__auto__.call(null);
(statearr_43360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40653__auto___43365);

return statearr_43360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40655__auto__);
});})(c__40653__auto___43365,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args43382 = [];
var len__37851__auto___43456 = arguments.length;
var i__37852__auto___43457 = (0);
while(true){
if((i__37852__auto___43457 < len__37851__auto___43456)){
args43382.push((arguments[i__37852__auto___43457]));

var G__43458 = (i__37852__auto___43457 + (1));
i__37852__auto___43457 = G__43458;
continue;
} else {
}
break;
}

var G__43384 = args43382.length;
switch (G__43384) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43382.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40653__auto___43460 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40653__auto___43460,out){
return (function (){
var f__40654__auto__ = (function (){var switch__40541__auto__ = ((function (c__40653__auto___43460,out){
return (function (state_43426){
var state_val_43427 = (state_43426[(1)]);
if((state_val_43427 === (7))){
var inst_43422 = (state_43426[(2)]);
var state_43426__$1 = state_43426;
var statearr_43428_43461 = state_43426__$1;
(statearr_43428_43461[(2)] = inst_43422);

(statearr_43428_43461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43427 === (1))){
var inst_43385 = [];
var inst_43386 = inst_43385;
var inst_43387 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_43426__$1 = (function (){var statearr_43429 = state_43426;
(statearr_43429[(7)] = inst_43387);

(statearr_43429[(8)] = inst_43386);

return statearr_43429;
})();
var statearr_43430_43462 = state_43426__$1;
(statearr_43430_43462[(2)] = null);

(statearr_43430_43462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43427 === (4))){
var inst_43390 = (state_43426[(9)]);
var inst_43390__$1 = (state_43426[(2)]);
var inst_43391 = (inst_43390__$1 == null);
var inst_43392 = cljs.core.not.call(null,inst_43391);
var state_43426__$1 = (function (){var statearr_43431 = state_43426;
(statearr_43431[(9)] = inst_43390__$1);

return statearr_43431;
})();
if(inst_43392){
var statearr_43432_43463 = state_43426__$1;
(statearr_43432_43463[(1)] = (5));

} else {
var statearr_43433_43464 = state_43426__$1;
(statearr_43433_43464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43427 === (15))){
var inst_43416 = (state_43426[(2)]);
var state_43426__$1 = state_43426;
var statearr_43434_43465 = state_43426__$1;
(statearr_43434_43465[(2)] = inst_43416);

(statearr_43434_43465[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43427 === (13))){
var state_43426__$1 = state_43426;
var statearr_43435_43466 = state_43426__$1;
(statearr_43435_43466[(2)] = null);

(statearr_43435_43466[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43427 === (6))){
var inst_43386 = (state_43426[(8)]);
var inst_43411 = inst_43386.length;
var inst_43412 = (inst_43411 > (0));
var state_43426__$1 = state_43426;
if(cljs.core.truth_(inst_43412)){
var statearr_43436_43467 = state_43426__$1;
(statearr_43436_43467[(1)] = (12));

} else {
var statearr_43437_43468 = state_43426__$1;
(statearr_43437_43468[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43427 === (3))){
var inst_43424 = (state_43426[(2)]);
var state_43426__$1 = state_43426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43426__$1,inst_43424);
} else {
if((state_val_43427 === (12))){
var inst_43386 = (state_43426[(8)]);
var inst_43414 = cljs.core.vec.call(null,inst_43386);
var state_43426__$1 = state_43426;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43426__$1,(15),out,inst_43414);
} else {
if((state_val_43427 === (2))){
var state_43426__$1 = state_43426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43426__$1,(4),ch);
} else {
if((state_val_43427 === (11))){
var inst_43394 = (state_43426[(10)]);
var inst_43390 = (state_43426[(9)]);
var inst_43404 = (state_43426[(2)]);
var inst_43405 = [];
var inst_43406 = inst_43405.push(inst_43390);
var inst_43386 = inst_43405;
var inst_43387 = inst_43394;
var state_43426__$1 = (function (){var statearr_43438 = state_43426;
(statearr_43438[(11)] = inst_43404);

(statearr_43438[(12)] = inst_43406);

(statearr_43438[(7)] = inst_43387);

(statearr_43438[(8)] = inst_43386);

return statearr_43438;
})();
var statearr_43439_43469 = state_43426__$1;
(statearr_43439_43469[(2)] = null);

(statearr_43439_43469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43427 === (9))){
var inst_43386 = (state_43426[(8)]);
var inst_43402 = cljs.core.vec.call(null,inst_43386);
var state_43426__$1 = state_43426;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43426__$1,(11),out,inst_43402);
} else {
if((state_val_43427 === (5))){
var inst_43394 = (state_43426[(10)]);
var inst_43390 = (state_43426[(9)]);
var inst_43387 = (state_43426[(7)]);
var inst_43394__$1 = f.call(null,inst_43390);
var inst_43395 = cljs.core._EQ_.call(null,inst_43394__$1,inst_43387);
var inst_43396 = cljs.core.keyword_identical_QMARK_.call(null,inst_43387,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_43397 = (inst_43395) || (inst_43396);
var state_43426__$1 = (function (){var statearr_43440 = state_43426;
(statearr_43440[(10)] = inst_43394__$1);

return statearr_43440;
})();
if(cljs.core.truth_(inst_43397)){
var statearr_43441_43470 = state_43426__$1;
(statearr_43441_43470[(1)] = (8));

} else {
var statearr_43442_43471 = state_43426__$1;
(statearr_43442_43471[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43427 === (14))){
var inst_43419 = (state_43426[(2)]);
var inst_43420 = cljs.core.async.close_BANG_.call(null,out);
var state_43426__$1 = (function (){var statearr_43444 = state_43426;
(statearr_43444[(13)] = inst_43419);

return statearr_43444;
})();
var statearr_43445_43472 = state_43426__$1;
(statearr_43445_43472[(2)] = inst_43420);

(statearr_43445_43472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43427 === (10))){
var inst_43409 = (state_43426[(2)]);
var state_43426__$1 = state_43426;
var statearr_43446_43473 = state_43426__$1;
(statearr_43446_43473[(2)] = inst_43409);

(statearr_43446_43473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43427 === (8))){
var inst_43394 = (state_43426[(10)]);
var inst_43390 = (state_43426[(9)]);
var inst_43386 = (state_43426[(8)]);
var inst_43399 = inst_43386.push(inst_43390);
var tmp43443 = inst_43386;
var inst_43386__$1 = tmp43443;
var inst_43387 = inst_43394;
var state_43426__$1 = (function (){var statearr_43447 = state_43426;
(statearr_43447[(7)] = inst_43387);

(statearr_43447[(14)] = inst_43399);

(statearr_43447[(8)] = inst_43386__$1);

return statearr_43447;
})();
var statearr_43448_43474 = state_43426__$1;
(statearr_43448_43474[(2)] = null);

(statearr_43448_43474[(1)] = (2));


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
});})(c__40653__auto___43460,out))
;
return ((function (switch__40541__auto__,c__40653__auto___43460,out){
return (function() {
var cljs$core$async$state_machine__40542__auto__ = null;
var cljs$core$async$state_machine__40542__auto____0 = (function (){
var statearr_43452 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43452[(0)] = cljs$core$async$state_machine__40542__auto__);

(statearr_43452[(1)] = (1));

return statearr_43452;
});
var cljs$core$async$state_machine__40542__auto____1 = (function (state_43426){
while(true){
var ret_value__40543__auto__ = (function (){try{while(true){
var result__40544__auto__ = switch__40541__auto__.call(null,state_43426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40544__auto__;
}
break;
}
}catch (e43453){if((e43453 instanceof Object)){
var ex__40545__auto__ = e43453;
var statearr_43454_43475 = state_43426;
(statearr_43454_43475[(5)] = ex__40545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43476 = state_43426;
state_43426 = G__43476;
continue;
} else {
return ret_value__40543__auto__;
}
break;
}
});
cljs$core$async$state_machine__40542__auto__ = function(state_43426){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40542__auto____1.call(this,state_43426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40542__auto____0;
cljs$core$async$state_machine__40542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40542__auto____1;
return cljs$core$async$state_machine__40542__auto__;
})()
;})(switch__40541__auto__,c__40653__auto___43460,out))
})();
var state__40655__auto__ = (function (){var statearr_43455 = f__40654__auto__.call(null);
(statearr_43455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40653__auto___43460);

return statearr_43455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40655__auto__);
});})(c__40653__auto___43460,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map