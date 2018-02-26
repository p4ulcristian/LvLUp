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
var args41628 = [];
var len__37847__auto___41634 = arguments.length;
var i__37848__auto___41635 = (0);
while(true){
if((i__37848__auto___41635 < len__37847__auto___41634)){
args41628.push((arguments[i__37848__auto___41635]));

var G__41636 = (i__37848__auto___41635 + (1));
i__37848__auto___41635 = G__41636;
continue;
} else {
}
break;
}

var G__41630 = args41628.length;
switch (G__41630) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41628.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async41631 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41631 = (function (f,blockable,meta41632){
this.f = f;
this.blockable = blockable;
this.meta41632 = meta41632;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41633,meta41632__$1){
var self__ = this;
var _41633__$1 = this;
return (new cljs.core.async.t_cljs$core$async41631(self__.f,self__.blockable,meta41632__$1));
});

cljs.core.async.t_cljs$core$async41631.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41633){
var self__ = this;
var _41633__$1 = this;
return self__.meta41632;
});

cljs.core.async.t_cljs$core$async41631.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async41631.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async41631.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async41631.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async41631.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta41632","meta41632",585456116,null)], null);
});

cljs.core.async.t_cljs$core$async41631.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41631.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41631";

cljs.core.async.t_cljs$core$async41631.cljs$lang$ctorPrWriter = (function (this__37378__auto__,writer__37379__auto__,opt__37380__auto__){
return cljs.core._write.call(null,writer__37379__auto__,"cljs.core.async/t_cljs$core$async41631");
});

cljs.core.async.__GT_t_cljs$core$async41631 = (function cljs$core$async$__GT_t_cljs$core$async41631(f__$1,blockable__$1,meta41632){
return (new cljs.core.async.t_cljs$core$async41631(f__$1,blockable__$1,meta41632));
});

}

return (new cljs.core.async.t_cljs$core$async41631(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args41640 = [];
var len__37847__auto___41643 = arguments.length;
var i__37848__auto___41644 = (0);
while(true){
if((i__37848__auto___41644 < len__37847__auto___41643)){
args41640.push((arguments[i__37848__auto___41644]));

var G__41645 = (i__37848__auto___41644 + (1));
i__37848__auto___41644 = G__41645;
continue;
} else {
}
break;
}

var G__41642 = args41640.length;
switch (G__41642) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41640.length)].join('')));

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
var args41647 = [];
var len__37847__auto___41650 = arguments.length;
var i__37848__auto___41651 = (0);
while(true){
if((i__37848__auto___41651 < len__37847__auto___41650)){
args41647.push((arguments[i__37848__auto___41651]));

var G__41652 = (i__37848__auto___41651 + (1));
i__37848__auto___41651 = G__41652;
continue;
} else {
}
break;
}

var G__41649 = args41647.length;
switch (G__41649) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41647.length)].join('')));

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
var args41654 = [];
var len__37847__auto___41657 = arguments.length;
var i__37848__auto___41658 = (0);
while(true){
if((i__37848__auto___41658 < len__37847__auto___41657)){
args41654.push((arguments[i__37848__auto___41658]));

var G__41659 = (i__37848__auto___41658 + (1));
i__37848__auto___41658 = G__41659;
continue;
} else {
}
break;
}

var G__41656 = args41654.length;
switch (G__41656) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41654.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_41661 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_41661);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_41661,ret){
return (function (){
return fn1.call(null,val_41661);
});})(val_41661,ret))
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
var args41662 = [];
var len__37847__auto___41665 = arguments.length;
var i__37848__auto___41666 = (0);
while(true){
if((i__37848__auto___41666 < len__37847__auto___41665)){
args41662.push((arguments[i__37848__auto___41666]));

var G__41667 = (i__37848__auto___41666 + (1));
i__37848__auto___41666 = G__41667;
continue;
} else {
}
break;
}

var G__41664 = args41662.length;
switch (G__41664) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41662.length)].join('')));

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
var n__37687__auto___41669 = n;
var x_41670 = (0);
while(true){
if((x_41670 < n__37687__auto___41669)){
(a[x_41670] = (0));

var G__41671 = (x_41670 + (1));
x_41670 = G__41671;
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

var G__41672 = (i + (1));
i = G__41672;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async41676 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41676 = (function (alt_flag,flag,meta41677){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta41677 = meta41677;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_41678,meta41677__$1){
var self__ = this;
var _41678__$1 = this;
return (new cljs.core.async.t_cljs$core$async41676(self__.alt_flag,self__.flag,meta41677__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async41676.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_41678){
var self__ = this;
var _41678__$1 = this;
return self__.meta41677;
});})(flag))
;

cljs.core.async.t_cljs$core$async41676.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async41676.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async41676.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async41676.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async41676.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta41677","meta41677",1551744925,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async41676.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41676.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41676";

cljs.core.async.t_cljs$core$async41676.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__37378__auto__,writer__37379__auto__,opt__37380__auto__){
return cljs.core._write.call(null,writer__37379__auto__,"cljs.core.async/t_cljs$core$async41676");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async41676 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async41676(alt_flag__$1,flag__$1,meta41677){
return (new cljs.core.async.t_cljs$core$async41676(alt_flag__$1,flag__$1,meta41677));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async41676(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async41682 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41682 = (function (alt_handler,flag,cb,meta41683){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta41683 = meta41683;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41684,meta41683__$1){
var self__ = this;
var _41684__$1 = this;
return (new cljs.core.async.t_cljs$core$async41682(self__.alt_handler,self__.flag,self__.cb,meta41683__$1));
});

cljs.core.async.t_cljs$core$async41682.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41684){
var self__ = this;
var _41684__$1 = this;
return self__.meta41683;
});

cljs.core.async.t_cljs$core$async41682.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async41682.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async41682.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async41682.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async41682.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta41683","meta41683",-1958802341,null)], null);
});

cljs.core.async.t_cljs$core$async41682.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41682.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41682";

cljs.core.async.t_cljs$core$async41682.cljs$lang$ctorPrWriter = (function (this__37378__auto__,writer__37379__auto__,opt__37380__auto__){
return cljs.core._write.call(null,writer__37379__auto__,"cljs.core.async/t_cljs$core$async41682");
});

cljs.core.async.__GT_t_cljs$core$async41682 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async41682(alt_handler__$1,flag__$1,cb__$1,meta41683){
return (new cljs.core.async.t_cljs$core$async41682(alt_handler__$1,flag__$1,cb__$1,meta41683));
});

}

return (new cljs.core.async.t_cljs$core$async41682(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__41685_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41685_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__41686_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41686_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__36772__auto__ = wport;
if(cljs.core.truth_(or__36772__auto__)){
return or__36772__auto__;
} else {
return port;
}
})()], null));
} else {
var G__41687 = (i + (1));
i = G__41687;
continue;
}
} else {
return null;
}
break;
}
})();
var or__36772__auto__ = ret;
if(cljs.core.truth_(or__36772__auto__)){
return or__36772__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__36760__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__36760__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__36760__auto__;
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
var args__37854__auto__ = [];
var len__37847__auto___41693 = arguments.length;
var i__37848__auto___41694 = (0);
while(true){
if((i__37848__auto___41694 < len__37847__auto___41693)){
args__37854__auto__.push((arguments[i__37848__auto___41694]));

var G__41695 = (i__37848__auto___41694 + (1));
i__37848__auto___41694 = G__41695;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((1) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37855__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__41690){
var map__41691 = p__41690;
var map__41691__$1 = ((((!((map__41691 == null)))?((((map__41691.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41691.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41691):map__41691);
var opts = map__41691__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq41688){
var G__41689 = cljs.core.first.call(null,seq41688);
var seq41688__$1 = cljs.core.next.call(null,seq41688);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41689,seq41688__$1);
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
var args41696 = [];
var len__37847__auto___41746 = arguments.length;
var i__37848__auto___41747 = (0);
while(true){
if((i__37848__auto___41747 < len__37847__auto___41746)){
args41696.push((arguments[i__37848__auto___41747]));

var G__41748 = (i__37848__auto___41747 + (1));
i__37848__auto___41747 = G__41748;
continue;
} else {
}
break;
}

var G__41698 = args41696.length;
switch (G__41698) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41696.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__41583__auto___41750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41583__auto___41750){
return (function (){
var f__41584__auto__ = (function (){var switch__41471__auto__ = ((function (c__41583__auto___41750){
return (function (state_41722){
var state_val_41723 = (state_41722[(1)]);
if((state_val_41723 === (7))){
var inst_41718 = (state_41722[(2)]);
var state_41722__$1 = state_41722;
var statearr_41724_41751 = state_41722__$1;
(statearr_41724_41751[(2)] = inst_41718);

(statearr_41724_41751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41723 === (1))){
var state_41722__$1 = state_41722;
var statearr_41725_41752 = state_41722__$1;
(statearr_41725_41752[(2)] = null);

(statearr_41725_41752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41723 === (4))){
var inst_41701 = (state_41722[(7)]);
var inst_41701__$1 = (state_41722[(2)]);
var inst_41702 = (inst_41701__$1 == null);
var state_41722__$1 = (function (){var statearr_41726 = state_41722;
(statearr_41726[(7)] = inst_41701__$1);

return statearr_41726;
})();
if(cljs.core.truth_(inst_41702)){
var statearr_41727_41753 = state_41722__$1;
(statearr_41727_41753[(1)] = (5));

} else {
var statearr_41728_41754 = state_41722__$1;
(statearr_41728_41754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41723 === (13))){
var state_41722__$1 = state_41722;
var statearr_41729_41755 = state_41722__$1;
(statearr_41729_41755[(2)] = null);

(statearr_41729_41755[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41723 === (6))){
var inst_41701 = (state_41722[(7)]);
var state_41722__$1 = state_41722;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41722__$1,(11),to,inst_41701);
} else {
if((state_val_41723 === (3))){
var inst_41720 = (state_41722[(2)]);
var state_41722__$1 = state_41722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41722__$1,inst_41720);
} else {
if((state_val_41723 === (12))){
var state_41722__$1 = state_41722;
var statearr_41730_41756 = state_41722__$1;
(statearr_41730_41756[(2)] = null);

(statearr_41730_41756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41723 === (2))){
var state_41722__$1 = state_41722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41722__$1,(4),from);
} else {
if((state_val_41723 === (11))){
var inst_41711 = (state_41722[(2)]);
var state_41722__$1 = state_41722;
if(cljs.core.truth_(inst_41711)){
var statearr_41731_41757 = state_41722__$1;
(statearr_41731_41757[(1)] = (12));

} else {
var statearr_41732_41758 = state_41722__$1;
(statearr_41732_41758[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41723 === (9))){
var state_41722__$1 = state_41722;
var statearr_41733_41759 = state_41722__$1;
(statearr_41733_41759[(2)] = null);

(statearr_41733_41759[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41723 === (5))){
var state_41722__$1 = state_41722;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41734_41760 = state_41722__$1;
(statearr_41734_41760[(1)] = (8));

} else {
var statearr_41735_41761 = state_41722__$1;
(statearr_41735_41761[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41723 === (14))){
var inst_41716 = (state_41722[(2)]);
var state_41722__$1 = state_41722;
var statearr_41736_41762 = state_41722__$1;
(statearr_41736_41762[(2)] = inst_41716);

(statearr_41736_41762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41723 === (10))){
var inst_41708 = (state_41722[(2)]);
var state_41722__$1 = state_41722;
var statearr_41737_41763 = state_41722__$1;
(statearr_41737_41763[(2)] = inst_41708);

(statearr_41737_41763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41723 === (8))){
var inst_41705 = cljs.core.async.close_BANG_.call(null,to);
var state_41722__$1 = state_41722;
var statearr_41738_41764 = state_41722__$1;
(statearr_41738_41764[(2)] = inst_41705);

(statearr_41738_41764[(1)] = (10));


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
});})(c__41583__auto___41750))
;
return ((function (switch__41471__auto__,c__41583__auto___41750){
return (function() {
var cljs$core$async$state_machine__41472__auto__ = null;
var cljs$core$async$state_machine__41472__auto____0 = (function (){
var statearr_41742 = [null,null,null,null,null,null,null,null];
(statearr_41742[(0)] = cljs$core$async$state_machine__41472__auto__);

(statearr_41742[(1)] = (1));

return statearr_41742;
});
var cljs$core$async$state_machine__41472__auto____1 = (function (state_41722){
while(true){
var ret_value__41473__auto__ = (function (){try{while(true){
var result__41474__auto__ = switch__41471__auto__.call(null,state_41722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41474__auto__;
}
break;
}
}catch (e41743){if((e41743 instanceof Object)){
var ex__41475__auto__ = e41743;
var statearr_41744_41765 = state_41722;
(statearr_41744_41765[(5)] = ex__41475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41766 = state_41722;
state_41722 = G__41766;
continue;
} else {
return ret_value__41473__auto__;
}
break;
}
});
cljs$core$async$state_machine__41472__auto__ = function(state_41722){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41472__auto____1.call(this,state_41722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41472__auto____0;
cljs$core$async$state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41472__auto____1;
return cljs$core$async$state_machine__41472__auto__;
})()
;})(switch__41471__auto__,c__41583__auto___41750))
})();
var state__41585__auto__ = (function (){var statearr_41745 = f__41584__auto__.call(null);
(statearr_41745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41583__auto___41750);

return statearr_41745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41585__auto__);
});})(c__41583__auto___41750))
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
return (function (p__41954){
var vec__41955 = p__41954;
var v = cljs.core.nth.call(null,vec__41955,(0),null);
var p = cljs.core.nth.call(null,vec__41955,(1),null);
var job = vec__41955;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__41583__auto___42141 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41583__auto___42141,res,vec__41955,v,p,job,jobs,results){
return (function (){
var f__41584__auto__ = (function (){var switch__41471__auto__ = ((function (c__41583__auto___42141,res,vec__41955,v,p,job,jobs,results){
return (function (state_41962){
var state_val_41963 = (state_41962[(1)]);
if((state_val_41963 === (1))){
var state_41962__$1 = state_41962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41962__$1,(2),res,v);
} else {
if((state_val_41963 === (2))){
var inst_41959 = (state_41962[(2)]);
var inst_41960 = cljs.core.async.close_BANG_.call(null,res);
var state_41962__$1 = (function (){var statearr_41964 = state_41962;
(statearr_41964[(7)] = inst_41959);

return statearr_41964;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41962__$1,inst_41960);
} else {
return null;
}
}
});})(c__41583__auto___42141,res,vec__41955,v,p,job,jobs,results))
;
return ((function (switch__41471__auto__,c__41583__auto___42141,res,vec__41955,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41472__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41472__auto____0 = (function (){
var statearr_41968 = [null,null,null,null,null,null,null,null];
(statearr_41968[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41472__auto__);

(statearr_41968[(1)] = (1));

return statearr_41968;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41472__auto____1 = (function (state_41962){
while(true){
var ret_value__41473__auto__ = (function (){try{while(true){
var result__41474__auto__ = switch__41471__auto__.call(null,state_41962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41474__auto__;
}
break;
}
}catch (e41969){if((e41969 instanceof Object)){
var ex__41475__auto__ = e41969;
var statearr_41970_42142 = state_41962;
(statearr_41970_42142[(5)] = ex__41475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42143 = state_41962;
state_41962 = G__42143;
continue;
} else {
return ret_value__41473__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41472__auto__ = function(state_41962){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41472__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41472__auto____1.call(this,state_41962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41472__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41472__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41472__auto__;
})()
;})(switch__41471__auto__,c__41583__auto___42141,res,vec__41955,v,p,job,jobs,results))
})();
var state__41585__auto__ = (function (){var statearr_41971 = f__41584__auto__.call(null);
(statearr_41971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41583__auto___42141);

return statearr_41971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41585__auto__);
});})(c__41583__auto___42141,res,vec__41955,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__41972){
var vec__41973 = p__41972;
var v = cljs.core.nth.call(null,vec__41973,(0),null);
var p = cljs.core.nth.call(null,vec__41973,(1),null);
var job = vec__41973;
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
var n__37687__auto___42144 = n;
var __42145 = (0);
while(true){
if((__42145 < n__37687__auto___42144)){
var G__41976_42146 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__41976_42146) {
case "compute":
var c__41583__auto___42148 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42145,c__41583__auto___42148,G__41976_42146,n__37687__auto___42144,jobs,results,process,async){
return (function (){
var f__41584__auto__ = (function (){var switch__41471__auto__ = ((function (__42145,c__41583__auto___42148,G__41976_42146,n__37687__auto___42144,jobs,results,process,async){
return (function (state_41989){
var state_val_41990 = (state_41989[(1)]);
if((state_val_41990 === (1))){
var state_41989__$1 = state_41989;
var statearr_41991_42149 = state_41989__$1;
(statearr_41991_42149[(2)] = null);

(statearr_41991_42149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41990 === (2))){
var state_41989__$1 = state_41989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41989__$1,(4),jobs);
} else {
if((state_val_41990 === (3))){
var inst_41987 = (state_41989[(2)]);
var state_41989__$1 = state_41989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41989__$1,inst_41987);
} else {
if((state_val_41990 === (4))){
var inst_41979 = (state_41989[(2)]);
var inst_41980 = process.call(null,inst_41979);
var state_41989__$1 = state_41989;
if(cljs.core.truth_(inst_41980)){
var statearr_41992_42150 = state_41989__$1;
(statearr_41992_42150[(1)] = (5));

} else {
var statearr_41993_42151 = state_41989__$1;
(statearr_41993_42151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41990 === (5))){
var state_41989__$1 = state_41989;
var statearr_41994_42152 = state_41989__$1;
(statearr_41994_42152[(2)] = null);

(statearr_41994_42152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41990 === (6))){
var state_41989__$1 = state_41989;
var statearr_41995_42153 = state_41989__$1;
(statearr_41995_42153[(2)] = null);

(statearr_41995_42153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41990 === (7))){
var inst_41985 = (state_41989[(2)]);
var state_41989__$1 = state_41989;
var statearr_41996_42154 = state_41989__$1;
(statearr_41996_42154[(2)] = inst_41985);

(statearr_41996_42154[(1)] = (3));


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
});})(__42145,c__41583__auto___42148,G__41976_42146,n__37687__auto___42144,jobs,results,process,async))
;
return ((function (__42145,switch__41471__auto__,c__41583__auto___42148,G__41976_42146,n__37687__auto___42144,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41472__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41472__auto____0 = (function (){
var statearr_42000 = [null,null,null,null,null,null,null];
(statearr_42000[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41472__auto__);

(statearr_42000[(1)] = (1));

return statearr_42000;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41472__auto____1 = (function (state_41989){
while(true){
var ret_value__41473__auto__ = (function (){try{while(true){
var result__41474__auto__ = switch__41471__auto__.call(null,state_41989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41474__auto__;
}
break;
}
}catch (e42001){if((e42001 instanceof Object)){
var ex__41475__auto__ = e42001;
var statearr_42002_42155 = state_41989;
(statearr_42002_42155[(5)] = ex__41475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42156 = state_41989;
state_41989 = G__42156;
continue;
} else {
return ret_value__41473__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41472__auto__ = function(state_41989){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41472__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41472__auto____1.call(this,state_41989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41472__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41472__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41472__auto__;
})()
;})(__42145,switch__41471__auto__,c__41583__auto___42148,G__41976_42146,n__37687__auto___42144,jobs,results,process,async))
})();
var state__41585__auto__ = (function (){var statearr_42003 = f__41584__auto__.call(null);
(statearr_42003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41583__auto___42148);

return statearr_42003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41585__auto__);
});})(__42145,c__41583__auto___42148,G__41976_42146,n__37687__auto___42144,jobs,results,process,async))
);


break;
case "async":
var c__41583__auto___42157 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42145,c__41583__auto___42157,G__41976_42146,n__37687__auto___42144,jobs,results,process,async){
return (function (){
var f__41584__auto__ = (function (){var switch__41471__auto__ = ((function (__42145,c__41583__auto___42157,G__41976_42146,n__37687__auto___42144,jobs,results,process,async){
return (function (state_42016){
var state_val_42017 = (state_42016[(1)]);
if((state_val_42017 === (1))){
var state_42016__$1 = state_42016;
var statearr_42018_42158 = state_42016__$1;
(statearr_42018_42158[(2)] = null);

(statearr_42018_42158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42017 === (2))){
var state_42016__$1 = state_42016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42016__$1,(4),jobs);
} else {
if((state_val_42017 === (3))){
var inst_42014 = (state_42016[(2)]);
var state_42016__$1 = state_42016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42016__$1,inst_42014);
} else {
if((state_val_42017 === (4))){
var inst_42006 = (state_42016[(2)]);
var inst_42007 = async.call(null,inst_42006);
var state_42016__$1 = state_42016;
if(cljs.core.truth_(inst_42007)){
var statearr_42019_42159 = state_42016__$1;
(statearr_42019_42159[(1)] = (5));

} else {
var statearr_42020_42160 = state_42016__$1;
(statearr_42020_42160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42017 === (5))){
var state_42016__$1 = state_42016;
var statearr_42021_42161 = state_42016__$1;
(statearr_42021_42161[(2)] = null);

(statearr_42021_42161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42017 === (6))){
var state_42016__$1 = state_42016;
var statearr_42022_42162 = state_42016__$1;
(statearr_42022_42162[(2)] = null);

(statearr_42022_42162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42017 === (7))){
var inst_42012 = (state_42016[(2)]);
var state_42016__$1 = state_42016;
var statearr_42023_42163 = state_42016__$1;
(statearr_42023_42163[(2)] = inst_42012);

(statearr_42023_42163[(1)] = (3));


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
});})(__42145,c__41583__auto___42157,G__41976_42146,n__37687__auto___42144,jobs,results,process,async))
;
return ((function (__42145,switch__41471__auto__,c__41583__auto___42157,G__41976_42146,n__37687__auto___42144,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41472__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41472__auto____0 = (function (){
var statearr_42027 = [null,null,null,null,null,null,null];
(statearr_42027[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41472__auto__);

(statearr_42027[(1)] = (1));

return statearr_42027;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41472__auto____1 = (function (state_42016){
while(true){
var ret_value__41473__auto__ = (function (){try{while(true){
var result__41474__auto__ = switch__41471__auto__.call(null,state_42016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41474__auto__;
}
break;
}
}catch (e42028){if((e42028 instanceof Object)){
var ex__41475__auto__ = e42028;
var statearr_42029_42164 = state_42016;
(statearr_42029_42164[(5)] = ex__41475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42165 = state_42016;
state_42016 = G__42165;
continue;
} else {
return ret_value__41473__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41472__auto__ = function(state_42016){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41472__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41472__auto____1.call(this,state_42016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41472__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41472__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41472__auto__;
})()
;})(__42145,switch__41471__auto__,c__41583__auto___42157,G__41976_42146,n__37687__auto___42144,jobs,results,process,async))
})();
var state__41585__auto__ = (function (){var statearr_42030 = f__41584__auto__.call(null);
(statearr_42030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41583__auto___42157);

return statearr_42030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41585__auto__);
});})(__42145,c__41583__auto___42157,G__41976_42146,n__37687__auto___42144,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__42166 = (__42145 + (1));
__42145 = G__42166;
continue;
} else {
}
break;
}

var c__41583__auto___42167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41583__auto___42167,jobs,results,process,async){
return (function (){
var f__41584__auto__ = (function (){var switch__41471__auto__ = ((function (c__41583__auto___42167,jobs,results,process,async){
return (function (state_42052){
var state_val_42053 = (state_42052[(1)]);
if((state_val_42053 === (1))){
var state_42052__$1 = state_42052;
var statearr_42054_42168 = state_42052__$1;
(statearr_42054_42168[(2)] = null);

(statearr_42054_42168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42053 === (2))){
var state_42052__$1 = state_42052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42052__$1,(4),from);
} else {
if((state_val_42053 === (3))){
var inst_42050 = (state_42052[(2)]);
var state_42052__$1 = state_42052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42052__$1,inst_42050);
} else {
if((state_val_42053 === (4))){
var inst_42033 = (state_42052[(7)]);
var inst_42033__$1 = (state_42052[(2)]);
var inst_42034 = (inst_42033__$1 == null);
var state_42052__$1 = (function (){var statearr_42055 = state_42052;
(statearr_42055[(7)] = inst_42033__$1);

return statearr_42055;
})();
if(cljs.core.truth_(inst_42034)){
var statearr_42056_42169 = state_42052__$1;
(statearr_42056_42169[(1)] = (5));

} else {
var statearr_42057_42170 = state_42052__$1;
(statearr_42057_42170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42053 === (5))){
var inst_42036 = cljs.core.async.close_BANG_.call(null,jobs);
var state_42052__$1 = state_42052;
var statearr_42058_42171 = state_42052__$1;
(statearr_42058_42171[(2)] = inst_42036);

(statearr_42058_42171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42053 === (6))){
var inst_42033 = (state_42052[(7)]);
var inst_42038 = (state_42052[(8)]);
var inst_42038__$1 = cljs.core.async.chan.call(null,(1));
var inst_42039 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42040 = [inst_42033,inst_42038__$1];
var inst_42041 = (new cljs.core.PersistentVector(null,2,(5),inst_42039,inst_42040,null));
var state_42052__$1 = (function (){var statearr_42059 = state_42052;
(statearr_42059[(8)] = inst_42038__$1);

return statearr_42059;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42052__$1,(8),jobs,inst_42041);
} else {
if((state_val_42053 === (7))){
var inst_42048 = (state_42052[(2)]);
var state_42052__$1 = state_42052;
var statearr_42060_42172 = state_42052__$1;
(statearr_42060_42172[(2)] = inst_42048);

(statearr_42060_42172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42053 === (8))){
var inst_42038 = (state_42052[(8)]);
var inst_42043 = (state_42052[(2)]);
var state_42052__$1 = (function (){var statearr_42061 = state_42052;
(statearr_42061[(9)] = inst_42043);

return statearr_42061;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42052__$1,(9),results,inst_42038);
} else {
if((state_val_42053 === (9))){
var inst_42045 = (state_42052[(2)]);
var state_42052__$1 = (function (){var statearr_42062 = state_42052;
(statearr_42062[(10)] = inst_42045);

return statearr_42062;
})();
var statearr_42063_42173 = state_42052__$1;
(statearr_42063_42173[(2)] = null);

(statearr_42063_42173[(1)] = (2));


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
});})(c__41583__auto___42167,jobs,results,process,async))
;
return ((function (switch__41471__auto__,c__41583__auto___42167,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41472__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41472__auto____0 = (function (){
var statearr_42067 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42067[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41472__auto__);

(statearr_42067[(1)] = (1));

return statearr_42067;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41472__auto____1 = (function (state_42052){
while(true){
var ret_value__41473__auto__ = (function (){try{while(true){
var result__41474__auto__ = switch__41471__auto__.call(null,state_42052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41474__auto__;
}
break;
}
}catch (e42068){if((e42068 instanceof Object)){
var ex__41475__auto__ = e42068;
var statearr_42069_42174 = state_42052;
(statearr_42069_42174[(5)] = ex__41475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42175 = state_42052;
state_42052 = G__42175;
continue;
} else {
return ret_value__41473__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41472__auto__ = function(state_42052){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41472__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41472__auto____1.call(this,state_42052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41472__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41472__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41472__auto__;
})()
;})(switch__41471__auto__,c__41583__auto___42167,jobs,results,process,async))
})();
var state__41585__auto__ = (function (){var statearr_42070 = f__41584__auto__.call(null);
(statearr_42070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41583__auto___42167);

return statearr_42070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41585__auto__);
});})(c__41583__auto___42167,jobs,results,process,async))
);


var c__41583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41583__auto__,jobs,results,process,async){
return (function (){
var f__41584__auto__ = (function (){var switch__41471__auto__ = ((function (c__41583__auto__,jobs,results,process,async){
return (function (state_42108){
var state_val_42109 = (state_42108[(1)]);
if((state_val_42109 === (7))){
var inst_42104 = (state_42108[(2)]);
var state_42108__$1 = state_42108;
var statearr_42110_42176 = state_42108__$1;
(statearr_42110_42176[(2)] = inst_42104);

(statearr_42110_42176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42109 === (20))){
var state_42108__$1 = state_42108;
var statearr_42111_42177 = state_42108__$1;
(statearr_42111_42177[(2)] = null);

(statearr_42111_42177[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42109 === (1))){
var state_42108__$1 = state_42108;
var statearr_42112_42178 = state_42108__$1;
(statearr_42112_42178[(2)] = null);

(statearr_42112_42178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42109 === (4))){
var inst_42073 = (state_42108[(7)]);
var inst_42073__$1 = (state_42108[(2)]);
var inst_42074 = (inst_42073__$1 == null);
var state_42108__$1 = (function (){var statearr_42113 = state_42108;
(statearr_42113[(7)] = inst_42073__$1);

return statearr_42113;
})();
if(cljs.core.truth_(inst_42074)){
var statearr_42114_42179 = state_42108__$1;
(statearr_42114_42179[(1)] = (5));

} else {
var statearr_42115_42180 = state_42108__$1;
(statearr_42115_42180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42109 === (15))){
var inst_42086 = (state_42108[(8)]);
var state_42108__$1 = state_42108;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42108__$1,(18),to,inst_42086);
} else {
if((state_val_42109 === (21))){
var inst_42099 = (state_42108[(2)]);
var state_42108__$1 = state_42108;
var statearr_42116_42181 = state_42108__$1;
(statearr_42116_42181[(2)] = inst_42099);

(statearr_42116_42181[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42109 === (13))){
var inst_42101 = (state_42108[(2)]);
var state_42108__$1 = (function (){var statearr_42117 = state_42108;
(statearr_42117[(9)] = inst_42101);

return statearr_42117;
})();
var statearr_42118_42182 = state_42108__$1;
(statearr_42118_42182[(2)] = null);

(statearr_42118_42182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42109 === (6))){
var inst_42073 = (state_42108[(7)]);
var state_42108__$1 = state_42108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42108__$1,(11),inst_42073);
} else {
if((state_val_42109 === (17))){
var inst_42094 = (state_42108[(2)]);
var state_42108__$1 = state_42108;
if(cljs.core.truth_(inst_42094)){
var statearr_42119_42183 = state_42108__$1;
(statearr_42119_42183[(1)] = (19));

} else {
var statearr_42120_42184 = state_42108__$1;
(statearr_42120_42184[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42109 === (3))){
var inst_42106 = (state_42108[(2)]);
var state_42108__$1 = state_42108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42108__$1,inst_42106);
} else {
if((state_val_42109 === (12))){
var inst_42083 = (state_42108[(10)]);
var state_42108__$1 = state_42108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42108__$1,(14),inst_42083);
} else {
if((state_val_42109 === (2))){
var state_42108__$1 = state_42108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42108__$1,(4),results);
} else {
if((state_val_42109 === (19))){
var state_42108__$1 = state_42108;
var statearr_42121_42185 = state_42108__$1;
(statearr_42121_42185[(2)] = null);

(statearr_42121_42185[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42109 === (11))){
var inst_42083 = (state_42108[(2)]);
var state_42108__$1 = (function (){var statearr_42122 = state_42108;
(statearr_42122[(10)] = inst_42083);

return statearr_42122;
})();
var statearr_42123_42186 = state_42108__$1;
(statearr_42123_42186[(2)] = null);

(statearr_42123_42186[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42109 === (9))){
var state_42108__$1 = state_42108;
var statearr_42124_42187 = state_42108__$1;
(statearr_42124_42187[(2)] = null);

(statearr_42124_42187[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42109 === (5))){
var state_42108__$1 = state_42108;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42125_42188 = state_42108__$1;
(statearr_42125_42188[(1)] = (8));

} else {
var statearr_42126_42189 = state_42108__$1;
(statearr_42126_42189[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42109 === (14))){
var inst_42086 = (state_42108[(8)]);
var inst_42088 = (state_42108[(11)]);
var inst_42086__$1 = (state_42108[(2)]);
var inst_42087 = (inst_42086__$1 == null);
var inst_42088__$1 = cljs.core.not.call(null,inst_42087);
var state_42108__$1 = (function (){var statearr_42127 = state_42108;
(statearr_42127[(8)] = inst_42086__$1);

(statearr_42127[(11)] = inst_42088__$1);

return statearr_42127;
})();
if(inst_42088__$1){
var statearr_42128_42190 = state_42108__$1;
(statearr_42128_42190[(1)] = (15));

} else {
var statearr_42129_42191 = state_42108__$1;
(statearr_42129_42191[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42109 === (16))){
var inst_42088 = (state_42108[(11)]);
var state_42108__$1 = state_42108;
var statearr_42130_42192 = state_42108__$1;
(statearr_42130_42192[(2)] = inst_42088);

(statearr_42130_42192[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42109 === (10))){
var inst_42080 = (state_42108[(2)]);
var state_42108__$1 = state_42108;
var statearr_42131_42193 = state_42108__$1;
(statearr_42131_42193[(2)] = inst_42080);

(statearr_42131_42193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42109 === (18))){
var inst_42091 = (state_42108[(2)]);
var state_42108__$1 = state_42108;
var statearr_42132_42194 = state_42108__$1;
(statearr_42132_42194[(2)] = inst_42091);

(statearr_42132_42194[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42109 === (8))){
var inst_42077 = cljs.core.async.close_BANG_.call(null,to);
var state_42108__$1 = state_42108;
var statearr_42133_42195 = state_42108__$1;
(statearr_42133_42195[(2)] = inst_42077);

(statearr_42133_42195[(1)] = (10));


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
});})(c__41583__auto__,jobs,results,process,async))
;
return ((function (switch__41471__auto__,c__41583__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41472__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41472__auto____0 = (function (){
var statearr_42137 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42137[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41472__auto__);

(statearr_42137[(1)] = (1));

return statearr_42137;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41472__auto____1 = (function (state_42108){
while(true){
var ret_value__41473__auto__ = (function (){try{while(true){
var result__41474__auto__ = switch__41471__auto__.call(null,state_42108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41474__auto__;
}
break;
}
}catch (e42138){if((e42138 instanceof Object)){
var ex__41475__auto__ = e42138;
var statearr_42139_42196 = state_42108;
(statearr_42139_42196[(5)] = ex__41475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42197 = state_42108;
state_42108 = G__42197;
continue;
} else {
return ret_value__41473__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41472__auto__ = function(state_42108){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41472__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41472__auto____1.call(this,state_42108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41472__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41472__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41472__auto__;
})()
;})(switch__41471__auto__,c__41583__auto__,jobs,results,process,async))
})();
var state__41585__auto__ = (function (){var statearr_42140 = f__41584__auto__.call(null);
(statearr_42140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41583__auto__);

return statearr_42140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41585__auto__);
});})(c__41583__auto__,jobs,results,process,async))
);

return c__41583__auto__;
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
var args42198 = [];
var len__37847__auto___42201 = arguments.length;
var i__37848__auto___42202 = (0);
while(true){
if((i__37848__auto___42202 < len__37847__auto___42201)){
args42198.push((arguments[i__37848__auto___42202]));

var G__42203 = (i__37848__auto___42202 + (1));
i__37848__auto___42202 = G__42203;
continue;
} else {
}
break;
}

var G__42200 = args42198.length;
switch (G__42200) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42198.length)].join('')));

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
var args42205 = [];
var len__37847__auto___42208 = arguments.length;
var i__37848__auto___42209 = (0);
while(true){
if((i__37848__auto___42209 < len__37847__auto___42208)){
args42205.push((arguments[i__37848__auto___42209]));

var G__42210 = (i__37848__auto___42209 + (1));
i__37848__auto___42209 = G__42210;
continue;
} else {
}
break;
}

var G__42207 = args42205.length;
switch (G__42207) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42205.length)].join('')));

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
var args42212 = [];
var len__37847__auto___42265 = arguments.length;
var i__37848__auto___42266 = (0);
while(true){
if((i__37848__auto___42266 < len__37847__auto___42265)){
args42212.push((arguments[i__37848__auto___42266]));

var G__42267 = (i__37848__auto___42266 + (1));
i__37848__auto___42266 = G__42267;
continue;
} else {
}
break;
}

var G__42214 = args42212.length;
switch (G__42214) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42212.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__41583__auto___42269 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41583__auto___42269,tc,fc){
return (function (){
var f__41584__auto__ = (function (){var switch__41471__auto__ = ((function (c__41583__auto___42269,tc,fc){
return (function (state_42240){
var state_val_42241 = (state_42240[(1)]);
if((state_val_42241 === (7))){
var inst_42236 = (state_42240[(2)]);
var state_42240__$1 = state_42240;
var statearr_42242_42270 = state_42240__$1;
(statearr_42242_42270[(2)] = inst_42236);

(statearr_42242_42270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42241 === (1))){
var state_42240__$1 = state_42240;
var statearr_42243_42271 = state_42240__$1;
(statearr_42243_42271[(2)] = null);

(statearr_42243_42271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42241 === (4))){
var inst_42217 = (state_42240[(7)]);
var inst_42217__$1 = (state_42240[(2)]);
var inst_42218 = (inst_42217__$1 == null);
var state_42240__$1 = (function (){var statearr_42244 = state_42240;
(statearr_42244[(7)] = inst_42217__$1);

return statearr_42244;
})();
if(cljs.core.truth_(inst_42218)){
var statearr_42245_42272 = state_42240__$1;
(statearr_42245_42272[(1)] = (5));

} else {
var statearr_42246_42273 = state_42240__$1;
(statearr_42246_42273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42241 === (13))){
var state_42240__$1 = state_42240;
var statearr_42247_42274 = state_42240__$1;
(statearr_42247_42274[(2)] = null);

(statearr_42247_42274[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42241 === (6))){
var inst_42217 = (state_42240[(7)]);
var inst_42223 = p.call(null,inst_42217);
var state_42240__$1 = state_42240;
if(cljs.core.truth_(inst_42223)){
var statearr_42248_42275 = state_42240__$1;
(statearr_42248_42275[(1)] = (9));

} else {
var statearr_42249_42276 = state_42240__$1;
(statearr_42249_42276[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42241 === (3))){
var inst_42238 = (state_42240[(2)]);
var state_42240__$1 = state_42240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42240__$1,inst_42238);
} else {
if((state_val_42241 === (12))){
var state_42240__$1 = state_42240;
var statearr_42250_42277 = state_42240__$1;
(statearr_42250_42277[(2)] = null);

(statearr_42250_42277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42241 === (2))){
var state_42240__$1 = state_42240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42240__$1,(4),ch);
} else {
if((state_val_42241 === (11))){
var inst_42217 = (state_42240[(7)]);
var inst_42227 = (state_42240[(2)]);
var state_42240__$1 = state_42240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42240__$1,(8),inst_42227,inst_42217);
} else {
if((state_val_42241 === (9))){
var state_42240__$1 = state_42240;
var statearr_42251_42278 = state_42240__$1;
(statearr_42251_42278[(2)] = tc);

(statearr_42251_42278[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42241 === (5))){
var inst_42220 = cljs.core.async.close_BANG_.call(null,tc);
var inst_42221 = cljs.core.async.close_BANG_.call(null,fc);
var state_42240__$1 = (function (){var statearr_42252 = state_42240;
(statearr_42252[(8)] = inst_42220);

return statearr_42252;
})();
var statearr_42253_42279 = state_42240__$1;
(statearr_42253_42279[(2)] = inst_42221);

(statearr_42253_42279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42241 === (14))){
var inst_42234 = (state_42240[(2)]);
var state_42240__$1 = state_42240;
var statearr_42254_42280 = state_42240__$1;
(statearr_42254_42280[(2)] = inst_42234);

(statearr_42254_42280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42241 === (10))){
var state_42240__$1 = state_42240;
var statearr_42255_42281 = state_42240__$1;
(statearr_42255_42281[(2)] = fc);

(statearr_42255_42281[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42241 === (8))){
var inst_42229 = (state_42240[(2)]);
var state_42240__$1 = state_42240;
if(cljs.core.truth_(inst_42229)){
var statearr_42256_42282 = state_42240__$1;
(statearr_42256_42282[(1)] = (12));

} else {
var statearr_42257_42283 = state_42240__$1;
(statearr_42257_42283[(1)] = (13));

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
});})(c__41583__auto___42269,tc,fc))
;
return ((function (switch__41471__auto__,c__41583__auto___42269,tc,fc){
return (function() {
var cljs$core$async$state_machine__41472__auto__ = null;
var cljs$core$async$state_machine__41472__auto____0 = (function (){
var statearr_42261 = [null,null,null,null,null,null,null,null,null];
(statearr_42261[(0)] = cljs$core$async$state_machine__41472__auto__);

(statearr_42261[(1)] = (1));

return statearr_42261;
});
var cljs$core$async$state_machine__41472__auto____1 = (function (state_42240){
while(true){
var ret_value__41473__auto__ = (function (){try{while(true){
var result__41474__auto__ = switch__41471__auto__.call(null,state_42240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41474__auto__;
}
break;
}
}catch (e42262){if((e42262 instanceof Object)){
var ex__41475__auto__ = e42262;
var statearr_42263_42284 = state_42240;
(statearr_42263_42284[(5)] = ex__41475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42285 = state_42240;
state_42240 = G__42285;
continue;
} else {
return ret_value__41473__auto__;
}
break;
}
});
cljs$core$async$state_machine__41472__auto__ = function(state_42240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41472__auto____1.call(this,state_42240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41472__auto____0;
cljs$core$async$state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41472__auto____1;
return cljs$core$async$state_machine__41472__auto__;
})()
;})(switch__41471__auto__,c__41583__auto___42269,tc,fc))
})();
var state__41585__auto__ = (function (){var statearr_42264 = f__41584__auto__.call(null);
(statearr_42264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41583__auto___42269);

return statearr_42264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41585__auto__);
});})(c__41583__auto___42269,tc,fc))
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
var c__41583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41583__auto__){
return (function (){
var f__41584__auto__ = (function (){var switch__41471__auto__ = ((function (c__41583__auto__){
return (function (state_42349){
var state_val_42350 = (state_42349[(1)]);
if((state_val_42350 === (7))){
var inst_42345 = (state_42349[(2)]);
var state_42349__$1 = state_42349;
var statearr_42351_42372 = state_42349__$1;
(statearr_42351_42372[(2)] = inst_42345);

(statearr_42351_42372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42350 === (1))){
var inst_42329 = init;
var state_42349__$1 = (function (){var statearr_42352 = state_42349;
(statearr_42352[(7)] = inst_42329);

return statearr_42352;
})();
var statearr_42353_42373 = state_42349__$1;
(statearr_42353_42373[(2)] = null);

(statearr_42353_42373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42350 === (4))){
var inst_42332 = (state_42349[(8)]);
var inst_42332__$1 = (state_42349[(2)]);
var inst_42333 = (inst_42332__$1 == null);
var state_42349__$1 = (function (){var statearr_42354 = state_42349;
(statearr_42354[(8)] = inst_42332__$1);

return statearr_42354;
})();
if(cljs.core.truth_(inst_42333)){
var statearr_42355_42374 = state_42349__$1;
(statearr_42355_42374[(1)] = (5));

} else {
var statearr_42356_42375 = state_42349__$1;
(statearr_42356_42375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42350 === (6))){
var inst_42336 = (state_42349[(9)]);
var inst_42332 = (state_42349[(8)]);
var inst_42329 = (state_42349[(7)]);
var inst_42336__$1 = f.call(null,inst_42329,inst_42332);
var inst_42337 = cljs.core.reduced_QMARK_.call(null,inst_42336__$1);
var state_42349__$1 = (function (){var statearr_42357 = state_42349;
(statearr_42357[(9)] = inst_42336__$1);

return statearr_42357;
})();
if(inst_42337){
var statearr_42358_42376 = state_42349__$1;
(statearr_42358_42376[(1)] = (8));

} else {
var statearr_42359_42377 = state_42349__$1;
(statearr_42359_42377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42350 === (3))){
var inst_42347 = (state_42349[(2)]);
var state_42349__$1 = state_42349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42349__$1,inst_42347);
} else {
if((state_val_42350 === (2))){
var state_42349__$1 = state_42349;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42349__$1,(4),ch);
} else {
if((state_val_42350 === (9))){
var inst_42336 = (state_42349[(9)]);
var inst_42329 = inst_42336;
var state_42349__$1 = (function (){var statearr_42360 = state_42349;
(statearr_42360[(7)] = inst_42329);

return statearr_42360;
})();
var statearr_42361_42378 = state_42349__$1;
(statearr_42361_42378[(2)] = null);

(statearr_42361_42378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42350 === (5))){
var inst_42329 = (state_42349[(7)]);
var state_42349__$1 = state_42349;
var statearr_42362_42379 = state_42349__$1;
(statearr_42362_42379[(2)] = inst_42329);

(statearr_42362_42379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42350 === (10))){
var inst_42343 = (state_42349[(2)]);
var state_42349__$1 = state_42349;
var statearr_42363_42380 = state_42349__$1;
(statearr_42363_42380[(2)] = inst_42343);

(statearr_42363_42380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42350 === (8))){
var inst_42336 = (state_42349[(9)]);
var inst_42339 = cljs.core.deref.call(null,inst_42336);
var state_42349__$1 = state_42349;
var statearr_42364_42381 = state_42349__$1;
(statearr_42364_42381[(2)] = inst_42339);

(statearr_42364_42381[(1)] = (10));


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
});})(c__41583__auto__))
;
return ((function (switch__41471__auto__,c__41583__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__41472__auto__ = null;
var cljs$core$async$reduce_$_state_machine__41472__auto____0 = (function (){
var statearr_42368 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42368[(0)] = cljs$core$async$reduce_$_state_machine__41472__auto__);

(statearr_42368[(1)] = (1));

return statearr_42368;
});
var cljs$core$async$reduce_$_state_machine__41472__auto____1 = (function (state_42349){
while(true){
var ret_value__41473__auto__ = (function (){try{while(true){
var result__41474__auto__ = switch__41471__auto__.call(null,state_42349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41474__auto__;
}
break;
}
}catch (e42369){if((e42369 instanceof Object)){
var ex__41475__auto__ = e42369;
var statearr_42370_42382 = state_42349;
(statearr_42370_42382[(5)] = ex__41475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42383 = state_42349;
state_42349 = G__42383;
continue;
} else {
return ret_value__41473__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__41472__auto__ = function(state_42349){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__41472__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__41472__auto____1.call(this,state_42349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__41472__auto____0;
cljs$core$async$reduce_$_state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__41472__auto____1;
return cljs$core$async$reduce_$_state_machine__41472__auto__;
})()
;})(switch__41471__auto__,c__41583__auto__))
})();
var state__41585__auto__ = (function (){var statearr_42371 = f__41584__auto__.call(null);
(statearr_42371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41583__auto__);

return statearr_42371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41585__auto__);
});})(c__41583__auto__))
);

return c__41583__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__41583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41583__auto__,f__$1){
return (function (){
var f__41584__auto__ = (function (){var switch__41471__auto__ = ((function (c__41583__auto__,f__$1){
return (function (state_42403){
var state_val_42404 = (state_42403[(1)]);
if((state_val_42404 === (1))){
var inst_42398 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_42403__$1 = state_42403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42403__$1,(2),inst_42398);
} else {
if((state_val_42404 === (2))){
var inst_42400 = (state_42403[(2)]);
var inst_42401 = f__$1.call(null,inst_42400);
var state_42403__$1 = state_42403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42403__$1,inst_42401);
} else {
return null;
}
}
});})(c__41583__auto__,f__$1))
;
return ((function (switch__41471__auto__,c__41583__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__41472__auto__ = null;
var cljs$core$async$transduce_$_state_machine__41472__auto____0 = (function (){
var statearr_42408 = [null,null,null,null,null,null,null];
(statearr_42408[(0)] = cljs$core$async$transduce_$_state_machine__41472__auto__);

(statearr_42408[(1)] = (1));

return statearr_42408;
});
var cljs$core$async$transduce_$_state_machine__41472__auto____1 = (function (state_42403){
while(true){
var ret_value__41473__auto__ = (function (){try{while(true){
var result__41474__auto__ = switch__41471__auto__.call(null,state_42403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41474__auto__;
}
break;
}
}catch (e42409){if((e42409 instanceof Object)){
var ex__41475__auto__ = e42409;
var statearr_42410_42412 = state_42403;
(statearr_42410_42412[(5)] = ex__41475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42413 = state_42403;
state_42403 = G__42413;
continue;
} else {
return ret_value__41473__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__41472__auto__ = function(state_42403){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__41472__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__41472__auto____1.call(this,state_42403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__41472__auto____0;
cljs$core$async$transduce_$_state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__41472__auto____1;
return cljs$core$async$transduce_$_state_machine__41472__auto__;
})()
;})(switch__41471__auto__,c__41583__auto__,f__$1))
})();
var state__41585__auto__ = (function (){var statearr_42411 = f__41584__auto__.call(null);
(statearr_42411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41583__auto__);

return statearr_42411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41585__auto__);
});})(c__41583__auto__,f__$1))
);

return c__41583__auto__;
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
var args42414 = [];
var len__37847__auto___42466 = arguments.length;
var i__37848__auto___42467 = (0);
while(true){
if((i__37848__auto___42467 < len__37847__auto___42466)){
args42414.push((arguments[i__37848__auto___42467]));

var G__42468 = (i__37848__auto___42467 + (1));
i__37848__auto___42467 = G__42468;
continue;
} else {
}
break;
}

var G__42416 = args42414.length;
switch (G__42416) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42414.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__41583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41583__auto__){
return (function (){
var f__41584__auto__ = (function (){var switch__41471__auto__ = ((function (c__41583__auto__){
return (function (state_42441){
var state_val_42442 = (state_42441[(1)]);
if((state_val_42442 === (7))){
var inst_42423 = (state_42441[(2)]);
var state_42441__$1 = state_42441;
var statearr_42443_42470 = state_42441__$1;
(statearr_42443_42470[(2)] = inst_42423);

(statearr_42443_42470[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42442 === (1))){
var inst_42417 = cljs.core.seq.call(null,coll);
var inst_42418 = inst_42417;
var state_42441__$1 = (function (){var statearr_42444 = state_42441;
(statearr_42444[(7)] = inst_42418);

return statearr_42444;
})();
var statearr_42445_42471 = state_42441__$1;
(statearr_42445_42471[(2)] = null);

(statearr_42445_42471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42442 === (4))){
var inst_42418 = (state_42441[(7)]);
var inst_42421 = cljs.core.first.call(null,inst_42418);
var state_42441__$1 = state_42441;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42441__$1,(7),ch,inst_42421);
} else {
if((state_val_42442 === (13))){
var inst_42435 = (state_42441[(2)]);
var state_42441__$1 = state_42441;
var statearr_42446_42472 = state_42441__$1;
(statearr_42446_42472[(2)] = inst_42435);

(statearr_42446_42472[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42442 === (6))){
var inst_42426 = (state_42441[(2)]);
var state_42441__$1 = state_42441;
if(cljs.core.truth_(inst_42426)){
var statearr_42447_42473 = state_42441__$1;
(statearr_42447_42473[(1)] = (8));

} else {
var statearr_42448_42474 = state_42441__$1;
(statearr_42448_42474[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42442 === (3))){
var inst_42439 = (state_42441[(2)]);
var state_42441__$1 = state_42441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42441__$1,inst_42439);
} else {
if((state_val_42442 === (12))){
var state_42441__$1 = state_42441;
var statearr_42449_42475 = state_42441__$1;
(statearr_42449_42475[(2)] = null);

(statearr_42449_42475[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42442 === (2))){
var inst_42418 = (state_42441[(7)]);
var state_42441__$1 = state_42441;
if(cljs.core.truth_(inst_42418)){
var statearr_42450_42476 = state_42441__$1;
(statearr_42450_42476[(1)] = (4));

} else {
var statearr_42451_42477 = state_42441__$1;
(statearr_42451_42477[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42442 === (11))){
var inst_42432 = cljs.core.async.close_BANG_.call(null,ch);
var state_42441__$1 = state_42441;
var statearr_42452_42478 = state_42441__$1;
(statearr_42452_42478[(2)] = inst_42432);

(statearr_42452_42478[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42442 === (9))){
var state_42441__$1 = state_42441;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42453_42479 = state_42441__$1;
(statearr_42453_42479[(1)] = (11));

} else {
var statearr_42454_42480 = state_42441__$1;
(statearr_42454_42480[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42442 === (5))){
var inst_42418 = (state_42441[(7)]);
var state_42441__$1 = state_42441;
var statearr_42455_42481 = state_42441__$1;
(statearr_42455_42481[(2)] = inst_42418);

(statearr_42455_42481[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42442 === (10))){
var inst_42437 = (state_42441[(2)]);
var state_42441__$1 = state_42441;
var statearr_42456_42482 = state_42441__$1;
(statearr_42456_42482[(2)] = inst_42437);

(statearr_42456_42482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42442 === (8))){
var inst_42418 = (state_42441[(7)]);
var inst_42428 = cljs.core.next.call(null,inst_42418);
var inst_42418__$1 = inst_42428;
var state_42441__$1 = (function (){var statearr_42457 = state_42441;
(statearr_42457[(7)] = inst_42418__$1);

return statearr_42457;
})();
var statearr_42458_42483 = state_42441__$1;
(statearr_42458_42483[(2)] = null);

(statearr_42458_42483[(1)] = (2));


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
});})(c__41583__auto__))
;
return ((function (switch__41471__auto__,c__41583__auto__){
return (function() {
var cljs$core$async$state_machine__41472__auto__ = null;
var cljs$core$async$state_machine__41472__auto____0 = (function (){
var statearr_42462 = [null,null,null,null,null,null,null,null];
(statearr_42462[(0)] = cljs$core$async$state_machine__41472__auto__);

(statearr_42462[(1)] = (1));

return statearr_42462;
});
var cljs$core$async$state_machine__41472__auto____1 = (function (state_42441){
while(true){
var ret_value__41473__auto__ = (function (){try{while(true){
var result__41474__auto__ = switch__41471__auto__.call(null,state_42441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41474__auto__;
}
break;
}
}catch (e42463){if((e42463 instanceof Object)){
var ex__41475__auto__ = e42463;
var statearr_42464_42484 = state_42441;
(statearr_42464_42484[(5)] = ex__41475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42485 = state_42441;
state_42441 = G__42485;
continue;
} else {
return ret_value__41473__auto__;
}
break;
}
});
cljs$core$async$state_machine__41472__auto__ = function(state_42441){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41472__auto____1.call(this,state_42441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41472__auto____0;
cljs$core$async$state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41472__auto____1;
return cljs$core$async$state_machine__41472__auto__;
})()
;})(switch__41471__auto__,c__41583__auto__))
})();
var state__41585__auto__ = (function (){var statearr_42465 = f__41584__auto__.call(null);
(statearr_42465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41583__auto__);

return statearr_42465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41585__auto__);
});})(c__41583__auto__))
);

return c__41583__auto__;
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
var x__37435__auto__ = (((_ == null))?null:_);
var m__37436__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,_);
} else {
var m__37436__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,_);
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
var x__37435__auto__ = (((m == null))?null:m);
var m__37436__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__37436__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__37435__auto__ = (((m == null))?null:m);
var m__37436__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,m,ch);
} else {
var m__37436__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,m,ch);
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
var x__37435__auto__ = (((m == null))?null:m);
var m__37436__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,m);
} else {
var m__37436__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async42711 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42711 = (function (mult,ch,cs,meta42712){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta42712 = meta42712;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_42713,meta42712__$1){
var self__ = this;
var _42713__$1 = this;
return (new cljs.core.async.t_cljs$core$async42711(self__.mult,self__.ch,self__.cs,meta42712__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async42711.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_42713){
var self__ = this;
var _42713__$1 = this;
return self__.meta42712;
});})(cs))
;

cljs.core.async.t_cljs$core$async42711.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async42711.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async42711.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async42711.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42711.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42711.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42711.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta42712","meta42712",-893477324,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async42711.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42711.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42711";

cljs.core.async.t_cljs$core$async42711.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__37378__auto__,writer__37379__auto__,opt__37380__auto__){
return cljs.core._write.call(null,writer__37379__auto__,"cljs.core.async/t_cljs$core$async42711");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async42711 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async42711(mult__$1,ch__$1,cs__$1,meta42712){
return (new cljs.core.async.t_cljs$core$async42711(mult__$1,ch__$1,cs__$1,meta42712));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async42711(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__41583__auto___42936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41583__auto___42936,cs,m,dchan,dctr,done){
return (function (){
var f__41584__auto__ = (function (){var switch__41471__auto__ = ((function (c__41583__auto___42936,cs,m,dchan,dctr,done){
return (function (state_42848){
var state_val_42849 = (state_42848[(1)]);
if((state_val_42849 === (7))){
var inst_42844 = (state_42848[(2)]);
var state_42848__$1 = state_42848;
var statearr_42850_42937 = state_42848__$1;
(statearr_42850_42937[(2)] = inst_42844);

(statearr_42850_42937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (20))){
var inst_42747 = (state_42848[(7)]);
var inst_42759 = cljs.core.first.call(null,inst_42747);
var inst_42760 = cljs.core.nth.call(null,inst_42759,(0),null);
var inst_42761 = cljs.core.nth.call(null,inst_42759,(1),null);
var state_42848__$1 = (function (){var statearr_42851 = state_42848;
(statearr_42851[(8)] = inst_42760);

return statearr_42851;
})();
if(cljs.core.truth_(inst_42761)){
var statearr_42852_42938 = state_42848__$1;
(statearr_42852_42938[(1)] = (22));

} else {
var statearr_42853_42939 = state_42848__$1;
(statearr_42853_42939[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (27))){
var inst_42789 = (state_42848[(9)]);
var inst_42716 = (state_42848[(10)]);
var inst_42791 = (state_42848[(11)]);
var inst_42796 = (state_42848[(12)]);
var inst_42796__$1 = cljs.core._nth.call(null,inst_42789,inst_42791);
var inst_42797 = cljs.core.async.put_BANG_.call(null,inst_42796__$1,inst_42716,done);
var state_42848__$1 = (function (){var statearr_42854 = state_42848;
(statearr_42854[(12)] = inst_42796__$1);

return statearr_42854;
})();
if(cljs.core.truth_(inst_42797)){
var statearr_42855_42940 = state_42848__$1;
(statearr_42855_42940[(1)] = (30));

} else {
var statearr_42856_42941 = state_42848__$1;
(statearr_42856_42941[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (1))){
var state_42848__$1 = state_42848;
var statearr_42857_42942 = state_42848__$1;
(statearr_42857_42942[(2)] = null);

(statearr_42857_42942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (24))){
var inst_42747 = (state_42848[(7)]);
var inst_42766 = (state_42848[(2)]);
var inst_42767 = cljs.core.next.call(null,inst_42747);
var inst_42725 = inst_42767;
var inst_42726 = null;
var inst_42727 = (0);
var inst_42728 = (0);
var state_42848__$1 = (function (){var statearr_42858 = state_42848;
(statearr_42858[(13)] = inst_42725);

(statearr_42858[(14)] = inst_42726);

(statearr_42858[(15)] = inst_42728);

(statearr_42858[(16)] = inst_42766);

(statearr_42858[(17)] = inst_42727);

return statearr_42858;
})();
var statearr_42859_42943 = state_42848__$1;
(statearr_42859_42943[(2)] = null);

(statearr_42859_42943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (39))){
var state_42848__$1 = state_42848;
var statearr_42863_42944 = state_42848__$1;
(statearr_42863_42944[(2)] = null);

(statearr_42863_42944[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (4))){
var inst_42716 = (state_42848[(10)]);
var inst_42716__$1 = (state_42848[(2)]);
var inst_42717 = (inst_42716__$1 == null);
var state_42848__$1 = (function (){var statearr_42864 = state_42848;
(statearr_42864[(10)] = inst_42716__$1);

return statearr_42864;
})();
if(cljs.core.truth_(inst_42717)){
var statearr_42865_42945 = state_42848__$1;
(statearr_42865_42945[(1)] = (5));

} else {
var statearr_42866_42946 = state_42848__$1;
(statearr_42866_42946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (15))){
var inst_42725 = (state_42848[(13)]);
var inst_42726 = (state_42848[(14)]);
var inst_42728 = (state_42848[(15)]);
var inst_42727 = (state_42848[(17)]);
var inst_42743 = (state_42848[(2)]);
var inst_42744 = (inst_42728 + (1));
var tmp42860 = inst_42725;
var tmp42861 = inst_42726;
var tmp42862 = inst_42727;
var inst_42725__$1 = tmp42860;
var inst_42726__$1 = tmp42861;
var inst_42727__$1 = tmp42862;
var inst_42728__$1 = inst_42744;
var state_42848__$1 = (function (){var statearr_42867 = state_42848;
(statearr_42867[(18)] = inst_42743);

(statearr_42867[(13)] = inst_42725__$1);

(statearr_42867[(14)] = inst_42726__$1);

(statearr_42867[(15)] = inst_42728__$1);

(statearr_42867[(17)] = inst_42727__$1);

return statearr_42867;
})();
var statearr_42868_42947 = state_42848__$1;
(statearr_42868_42947[(2)] = null);

(statearr_42868_42947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (21))){
var inst_42770 = (state_42848[(2)]);
var state_42848__$1 = state_42848;
var statearr_42872_42948 = state_42848__$1;
(statearr_42872_42948[(2)] = inst_42770);

(statearr_42872_42948[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (31))){
var inst_42796 = (state_42848[(12)]);
var inst_42800 = done.call(null,null);
var inst_42801 = cljs.core.async.untap_STAR_.call(null,m,inst_42796);
var state_42848__$1 = (function (){var statearr_42873 = state_42848;
(statearr_42873[(19)] = inst_42800);

return statearr_42873;
})();
var statearr_42874_42949 = state_42848__$1;
(statearr_42874_42949[(2)] = inst_42801);

(statearr_42874_42949[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (32))){
var inst_42789 = (state_42848[(9)]);
var inst_42790 = (state_42848[(20)]);
var inst_42791 = (state_42848[(11)]);
var inst_42788 = (state_42848[(21)]);
var inst_42803 = (state_42848[(2)]);
var inst_42804 = (inst_42791 + (1));
var tmp42869 = inst_42789;
var tmp42870 = inst_42790;
var tmp42871 = inst_42788;
var inst_42788__$1 = tmp42871;
var inst_42789__$1 = tmp42869;
var inst_42790__$1 = tmp42870;
var inst_42791__$1 = inst_42804;
var state_42848__$1 = (function (){var statearr_42875 = state_42848;
(statearr_42875[(9)] = inst_42789__$1);

(statearr_42875[(20)] = inst_42790__$1);

(statearr_42875[(22)] = inst_42803);

(statearr_42875[(11)] = inst_42791__$1);

(statearr_42875[(21)] = inst_42788__$1);

return statearr_42875;
})();
var statearr_42876_42950 = state_42848__$1;
(statearr_42876_42950[(2)] = null);

(statearr_42876_42950[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (40))){
var inst_42816 = (state_42848[(23)]);
var inst_42820 = done.call(null,null);
var inst_42821 = cljs.core.async.untap_STAR_.call(null,m,inst_42816);
var state_42848__$1 = (function (){var statearr_42877 = state_42848;
(statearr_42877[(24)] = inst_42820);

return statearr_42877;
})();
var statearr_42878_42951 = state_42848__$1;
(statearr_42878_42951[(2)] = inst_42821);

(statearr_42878_42951[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (33))){
var inst_42807 = (state_42848[(25)]);
var inst_42809 = cljs.core.chunked_seq_QMARK_.call(null,inst_42807);
var state_42848__$1 = state_42848;
if(inst_42809){
var statearr_42879_42952 = state_42848__$1;
(statearr_42879_42952[(1)] = (36));

} else {
var statearr_42880_42953 = state_42848__$1;
(statearr_42880_42953[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (13))){
var inst_42737 = (state_42848[(26)]);
var inst_42740 = cljs.core.async.close_BANG_.call(null,inst_42737);
var state_42848__$1 = state_42848;
var statearr_42881_42954 = state_42848__$1;
(statearr_42881_42954[(2)] = inst_42740);

(statearr_42881_42954[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (22))){
var inst_42760 = (state_42848[(8)]);
var inst_42763 = cljs.core.async.close_BANG_.call(null,inst_42760);
var state_42848__$1 = state_42848;
var statearr_42882_42955 = state_42848__$1;
(statearr_42882_42955[(2)] = inst_42763);

(statearr_42882_42955[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (36))){
var inst_42807 = (state_42848[(25)]);
var inst_42811 = cljs.core.chunk_first.call(null,inst_42807);
var inst_42812 = cljs.core.chunk_rest.call(null,inst_42807);
var inst_42813 = cljs.core.count.call(null,inst_42811);
var inst_42788 = inst_42812;
var inst_42789 = inst_42811;
var inst_42790 = inst_42813;
var inst_42791 = (0);
var state_42848__$1 = (function (){var statearr_42883 = state_42848;
(statearr_42883[(9)] = inst_42789);

(statearr_42883[(20)] = inst_42790);

(statearr_42883[(11)] = inst_42791);

(statearr_42883[(21)] = inst_42788);

return statearr_42883;
})();
var statearr_42884_42956 = state_42848__$1;
(statearr_42884_42956[(2)] = null);

(statearr_42884_42956[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (41))){
var inst_42807 = (state_42848[(25)]);
var inst_42823 = (state_42848[(2)]);
var inst_42824 = cljs.core.next.call(null,inst_42807);
var inst_42788 = inst_42824;
var inst_42789 = null;
var inst_42790 = (0);
var inst_42791 = (0);
var state_42848__$1 = (function (){var statearr_42885 = state_42848;
(statearr_42885[(9)] = inst_42789);

(statearr_42885[(20)] = inst_42790);

(statearr_42885[(11)] = inst_42791);

(statearr_42885[(21)] = inst_42788);

(statearr_42885[(27)] = inst_42823);

return statearr_42885;
})();
var statearr_42886_42957 = state_42848__$1;
(statearr_42886_42957[(2)] = null);

(statearr_42886_42957[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (43))){
var state_42848__$1 = state_42848;
var statearr_42887_42958 = state_42848__$1;
(statearr_42887_42958[(2)] = null);

(statearr_42887_42958[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (29))){
var inst_42832 = (state_42848[(2)]);
var state_42848__$1 = state_42848;
var statearr_42888_42959 = state_42848__$1;
(statearr_42888_42959[(2)] = inst_42832);

(statearr_42888_42959[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (44))){
var inst_42841 = (state_42848[(2)]);
var state_42848__$1 = (function (){var statearr_42889 = state_42848;
(statearr_42889[(28)] = inst_42841);

return statearr_42889;
})();
var statearr_42890_42960 = state_42848__$1;
(statearr_42890_42960[(2)] = null);

(statearr_42890_42960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (6))){
var inst_42780 = (state_42848[(29)]);
var inst_42779 = cljs.core.deref.call(null,cs);
var inst_42780__$1 = cljs.core.keys.call(null,inst_42779);
var inst_42781 = cljs.core.count.call(null,inst_42780__$1);
var inst_42782 = cljs.core.reset_BANG_.call(null,dctr,inst_42781);
var inst_42787 = cljs.core.seq.call(null,inst_42780__$1);
var inst_42788 = inst_42787;
var inst_42789 = null;
var inst_42790 = (0);
var inst_42791 = (0);
var state_42848__$1 = (function (){var statearr_42891 = state_42848;
(statearr_42891[(9)] = inst_42789);

(statearr_42891[(20)] = inst_42790);

(statearr_42891[(29)] = inst_42780__$1);

(statearr_42891[(11)] = inst_42791);

(statearr_42891[(30)] = inst_42782);

(statearr_42891[(21)] = inst_42788);

return statearr_42891;
})();
var statearr_42892_42961 = state_42848__$1;
(statearr_42892_42961[(2)] = null);

(statearr_42892_42961[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (28))){
var inst_42807 = (state_42848[(25)]);
var inst_42788 = (state_42848[(21)]);
var inst_42807__$1 = cljs.core.seq.call(null,inst_42788);
var state_42848__$1 = (function (){var statearr_42893 = state_42848;
(statearr_42893[(25)] = inst_42807__$1);

return statearr_42893;
})();
if(inst_42807__$1){
var statearr_42894_42962 = state_42848__$1;
(statearr_42894_42962[(1)] = (33));

} else {
var statearr_42895_42963 = state_42848__$1;
(statearr_42895_42963[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (25))){
var inst_42790 = (state_42848[(20)]);
var inst_42791 = (state_42848[(11)]);
var inst_42793 = (inst_42791 < inst_42790);
var inst_42794 = inst_42793;
var state_42848__$1 = state_42848;
if(cljs.core.truth_(inst_42794)){
var statearr_42896_42964 = state_42848__$1;
(statearr_42896_42964[(1)] = (27));

} else {
var statearr_42897_42965 = state_42848__$1;
(statearr_42897_42965[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (34))){
var state_42848__$1 = state_42848;
var statearr_42898_42966 = state_42848__$1;
(statearr_42898_42966[(2)] = null);

(statearr_42898_42966[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (17))){
var state_42848__$1 = state_42848;
var statearr_42899_42967 = state_42848__$1;
(statearr_42899_42967[(2)] = null);

(statearr_42899_42967[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (3))){
var inst_42846 = (state_42848[(2)]);
var state_42848__$1 = state_42848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42848__$1,inst_42846);
} else {
if((state_val_42849 === (12))){
var inst_42775 = (state_42848[(2)]);
var state_42848__$1 = state_42848;
var statearr_42900_42968 = state_42848__$1;
(statearr_42900_42968[(2)] = inst_42775);

(statearr_42900_42968[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (2))){
var state_42848__$1 = state_42848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42848__$1,(4),ch);
} else {
if((state_val_42849 === (23))){
var state_42848__$1 = state_42848;
var statearr_42901_42969 = state_42848__$1;
(statearr_42901_42969[(2)] = null);

(statearr_42901_42969[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (35))){
var inst_42830 = (state_42848[(2)]);
var state_42848__$1 = state_42848;
var statearr_42902_42970 = state_42848__$1;
(statearr_42902_42970[(2)] = inst_42830);

(statearr_42902_42970[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (19))){
var inst_42747 = (state_42848[(7)]);
var inst_42751 = cljs.core.chunk_first.call(null,inst_42747);
var inst_42752 = cljs.core.chunk_rest.call(null,inst_42747);
var inst_42753 = cljs.core.count.call(null,inst_42751);
var inst_42725 = inst_42752;
var inst_42726 = inst_42751;
var inst_42727 = inst_42753;
var inst_42728 = (0);
var state_42848__$1 = (function (){var statearr_42903 = state_42848;
(statearr_42903[(13)] = inst_42725);

(statearr_42903[(14)] = inst_42726);

(statearr_42903[(15)] = inst_42728);

(statearr_42903[(17)] = inst_42727);

return statearr_42903;
})();
var statearr_42904_42971 = state_42848__$1;
(statearr_42904_42971[(2)] = null);

(statearr_42904_42971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (11))){
var inst_42725 = (state_42848[(13)]);
var inst_42747 = (state_42848[(7)]);
var inst_42747__$1 = cljs.core.seq.call(null,inst_42725);
var state_42848__$1 = (function (){var statearr_42905 = state_42848;
(statearr_42905[(7)] = inst_42747__$1);

return statearr_42905;
})();
if(inst_42747__$1){
var statearr_42906_42972 = state_42848__$1;
(statearr_42906_42972[(1)] = (16));

} else {
var statearr_42907_42973 = state_42848__$1;
(statearr_42907_42973[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (9))){
var inst_42777 = (state_42848[(2)]);
var state_42848__$1 = state_42848;
var statearr_42908_42974 = state_42848__$1;
(statearr_42908_42974[(2)] = inst_42777);

(statearr_42908_42974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (5))){
var inst_42723 = cljs.core.deref.call(null,cs);
var inst_42724 = cljs.core.seq.call(null,inst_42723);
var inst_42725 = inst_42724;
var inst_42726 = null;
var inst_42727 = (0);
var inst_42728 = (0);
var state_42848__$1 = (function (){var statearr_42909 = state_42848;
(statearr_42909[(13)] = inst_42725);

(statearr_42909[(14)] = inst_42726);

(statearr_42909[(15)] = inst_42728);

(statearr_42909[(17)] = inst_42727);

return statearr_42909;
})();
var statearr_42910_42975 = state_42848__$1;
(statearr_42910_42975[(2)] = null);

(statearr_42910_42975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (14))){
var state_42848__$1 = state_42848;
var statearr_42911_42976 = state_42848__$1;
(statearr_42911_42976[(2)] = null);

(statearr_42911_42976[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (45))){
var inst_42838 = (state_42848[(2)]);
var state_42848__$1 = state_42848;
var statearr_42912_42977 = state_42848__$1;
(statearr_42912_42977[(2)] = inst_42838);

(statearr_42912_42977[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (26))){
var inst_42780 = (state_42848[(29)]);
var inst_42834 = (state_42848[(2)]);
var inst_42835 = cljs.core.seq.call(null,inst_42780);
var state_42848__$1 = (function (){var statearr_42913 = state_42848;
(statearr_42913[(31)] = inst_42834);

return statearr_42913;
})();
if(inst_42835){
var statearr_42914_42978 = state_42848__$1;
(statearr_42914_42978[(1)] = (42));

} else {
var statearr_42915_42979 = state_42848__$1;
(statearr_42915_42979[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (16))){
var inst_42747 = (state_42848[(7)]);
var inst_42749 = cljs.core.chunked_seq_QMARK_.call(null,inst_42747);
var state_42848__$1 = state_42848;
if(inst_42749){
var statearr_42916_42980 = state_42848__$1;
(statearr_42916_42980[(1)] = (19));

} else {
var statearr_42917_42981 = state_42848__$1;
(statearr_42917_42981[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (38))){
var inst_42827 = (state_42848[(2)]);
var state_42848__$1 = state_42848;
var statearr_42918_42982 = state_42848__$1;
(statearr_42918_42982[(2)] = inst_42827);

(statearr_42918_42982[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (30))){
var state_42848__$1 = state_42848;
var statearr_42919_42983 = state_42848__$1;
(statearr_42919_42983[(2)] = null);

(statearr_42919_42983[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (10))){
var inst_42726 = (state_42848[(14)]);
var inst_42728 = (state_42848[(15)]);
var inst_42736 = cljs.core._nth.call(null,inst_42726,inst_42728);
var inst_42737 = cljs.core.nth.call(null,inst_42736,(0),null);
var inst_42738 = cljs.core.nth.call(null,inst_42736,(1),null);
var state_42848__$1 = (function (){var statearr_42920 = state_42848;
(statearr_42920[(26)] = inst_42737);

return statearr_42920;
})();
if(cljs.core.truth_(inst_42738)){
var statearr_42921_42984 = state_42848__$1;
(statearr_42921_42984[(1)] = (13));

} else {
var statearr_42922_42985 = state_42848__$1;
(statearr_42922_42985[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (18))){
var inst_42773 = (state_42848[(2)]);
var state_42848__$1 = state_42848;
var statearr_42923_42986 = state_42848__$1;
(statearr_42923_42986[(2)] = inst_42773);

(statearr_42923_42986[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (42))){
var state_42848__$1 = state_42848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42848__$1,(45),dchan);
} else {
if((state_val_42849 === (37))){
var inst_42816 = (state_42848[(23)]);
var inst_42807 = (state_42848[(25)]);
var inst_42716 = (state_42848[(10)]);
var inst_42816__$1 = cljs.core.first.call(null,inst_42807);
var inst_42817 = cljs.core.async.put_BANG_.call(null,inst_42816__$1,inst_42716,done);
var state_42848__$1 = (function (){var statearr_42924 = state_42848;
(statearr_42924[(23)] = inst_42816__$1);

return statearr_42924;
})();
if(cljs.core.truth_(inst_42817)){
var statearr_42925_42987 = state_42848__$1;
(statearr_42925_42987[(1)] = (39));

} else {
var statearr_42926_42988 = state_42848__$1;
(statearr_42926_42988[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42849 === (8))){
var inst_42728 = (state_42848[(15)]);
var inst_42727 = (state_42848[(17)]);
var inst_42730 = (inst_42728 < inst_42727);
var inst_42731 = inst_42730;
var state_42848__$1 = state_42848;
if(cljs.core.truth_(inst_42731)){
var statearr_42927_42989 = state_42848__$1;
(statearr_42927_42989[(1)] = (10));

} else {
var statearr_42928_42990 = state_42848__$1;
(statearr_42928_42990[(1)] = (11));

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
});})(c__41583__auto___42936,cs,m,dchan,dctr,done))
;
return ((function (switch__41471__auto__,c__41583__auto___42936,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__41472__auto__ = null;
var cljs$core$async$mult_$_state_machine__41472__auto____0 = (function (){
var statearr_42932 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42932[(0)] = cljs$core$async$mult_$_state_machine__41472__auto__);

(statearr_42932[(1)] = (1));

return statearr_42932;
});
var cljs$core$async$mult_$_state_machine__41472__auto____1 = (function (state_42848){
while(true){
var ret_value__41473__auto__ = (function (){try{while(true){
var result__41474__auto__ = switch__41471__auto__.call(null,state_42848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41474__auto__;
}
break;
}
}catch (e42933){if((e42933 instanceof Object)){
var ex__41475__auto__ = e42933;
var statearr_42934_42991 = state_42848;
(statearr_42934_42991[(5)] = ex__41475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42992 = state_42848;
state_42848 = G__42992;
continue;
} else {
return ret_value__41473__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__41472__auto__ = function(state_42848){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__41472__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__41472__auto____1.call(this,state_42848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__41472__auto____0;
cljs$core$async$mult_$_state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__41472__auto____1;
return cljs$core$async$mult_$_state_machine__41472__auto__;
})()
;})(switch__41471__auto__,c__41583__auto___42936,cs,m,dchan,dctr,done))
})();
var state__41585__auto__ = (function (){var statearr_42935 = f__41584__auto__.call(null);
(statearr_42935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41583__auto___42936);

return statearr_42935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41585__auto__);
});})(c__41583__auto___42936,cs,m,dchan,dctr,done))
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
var args42993 = [];
var len__37847__auto___42996 = arguments.length;
var i__37848__auto___42997 = (0);
while(true){
if((i__37848__auto___42997 < len__37847__auto___42996)){
args42993.push((arguments[i__37848__auto___42997]));

var G__42998 = (i__37848__auto___42997 + (1));
i__37848__auto___42997 = G__42998;
continue;
} else {
}
break;
}

var G__42995 = args42993.length;
switch (G__42995) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42993.length)].join('')));

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
var x__37435__auto__ = (((m == null))?null:m);
var m__37436__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,m,ch);
} else {
var m__37436__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,m,ch);
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
var x__37435__auto__ = (((m == null))?null:m);
var m__37436__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,m,ch);
} else {
var m__37436__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,m,ch);
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
var x__37435__auto__ = (((m == null))?null:m);
var m__37436__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,m);
} else {
var m__37436__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,m);
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
var x__37435__auto__ = (((m == null))?null:m);
var m__37436__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,m,state_map);
} else {
var m__37436__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,m,state_map);
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
var x__37435__auto__ = (((m == null))?null:m);
var m__37436__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,m,mode);
} else {
var m__37436__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__37854__auto__ = [];
var len__37847__auto___43010 = arguments.length;
var i__37848__auto___43011 = (0);
while(true){
if((i__37848__auto___43011 < len__37847__auto___43010)){
args__37854__auto__.push((arguments[i__37848__auto___43011]));

var G__43012 = (i__37848__auto___43011 + (1));
i__37848__auto___43011 = G__43012;
continue;
} else {
}
break;
}

var argseq__37855__auto__ = ((((3) < args__37854__auto__.length))?(new cljs.core.IndexedSeq(args__37854__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37855__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__43004){
var map__43005 = p__43004;
var map__43005__$1 = ((((!((map__43005 == null)))?((((map__43005.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43005.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43005):map__43005);
var opts = map__43005__$1;
var statearr_43007_43013 = state;
(statearr_43007_43013[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__43005,map__43005__$1,opts){
return (function (val){
var statearr_43008_43014 = state;
(statearr_43008_43014[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__43005,map__43005__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_43009_43015 = state;
(statearr_43009_43015[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq43000){
var G__43001 = cljs.core.first.call(null,seq43000);
var seq43000__$1 = cljs.core.next.call(null,seq43000);
var G__43002 = cljs.core.first.call(null,seq43000__$1);
var seq43000__$2 = cljs.core.next.call(null,seq43000__$1);
var G__43003 = cljs.core.first.call(null,seq43000__$2);
var seq43000__$3 = cljs.core.next.call(null,seq43000__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43001,G__43002,G__43003,seq43000__$3);
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
if(typeof cljs.core.async.t_cljs$core$async43181 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43181 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta43182){
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
this.meta43182 = meta43182;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43183,meta43182__$1){
var self__ = this;
var _43183__$1 = this;
return (new cljs.core.async.t_cljs$core$async43181(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta43182__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43181.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43183){
var self__ = this;
var _43183__$1 = this;
return self__.meta43182;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43181.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async43181.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43181.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async43181.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43181.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43181.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43181.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43181.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async43181.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta43182","meta43182",-1208130999,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43181.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43181.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43181";

cljs.core.async.t_cljs$core$async43181.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__37378__auto__,writer__37379__auto__,opt__37380__auto__){
return cljs.core._write.call(null,writer__37379__auto__,"cljs.core.async/t_cljs$core$async43181");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async43181 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async43181(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43182){
return (new cljs.core.async.t_cljs$core$async43181(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43182));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async43181(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41583__auto___43346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41583__auto___43346,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__41584__auto__ = (function (){var switch__41471__auto__ = ((function (c__41583__auto___43346,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_43283){
var state_val_43284 = (state_43283[(1)]);
if((state_val_43284 === (7))){
var inst_43199 = (state_43283[(2)]);
var state_43283__$1 = state_43283;
var statearr_43285_43347 = state_43283__$1;
(statearr_43285_43347[(2)] = inst_43199);

(statearr_43285_43347[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (20))){
var inst_43211 = (state_43283[(7)]);
var state_43283__$1 = state_43283;
var statearr_43286_43348 = state_43283__$1;
(statearr_43286_43348[(2)] = inst_43211);

(statearr_43286_43348[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (27))){
var state_43283__$1 = state_43283;
var statearr_43287_43349 = state_43283__$1;
(statearr_43287_43349[(2)] = null);

(statearr_43287_43349[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (1))){
var inst_43187 = (state_43283[(8)]);
var inst_43187__$1 = calc_state.call(null);
var inst_43189 = (inst_43187__$1 == null);
var inst_43190 = cljs.core.not.call(null,inst_43189);
var state_43283__$1 = (function (){var statearr_43288 = state_43283;
(statearr_43288[(8)] = inst_43187__$1);

return statearr_43288;
})();
if(inst_43190){
var statearr_43289_43350 = state_43283__$1;
(statearr_43289_43350[(1)] = (2));

} else {
var statearr_43290_43351 = state_43283__$1;
(statearr_43290_43351[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (24))){
var inst_43243 = (state_43283[(9)]);
var inst_43257 = (state_43283[(10)]);
var inst_43234 = (state_43283[(11)]);
var inst_43257__$1 = inst_43234.call(null,inst_43243);
var state_43283__$1 = (function (){var statearr_43291 = state_43283;
(statearr_43291[(10)] = inst_43257__$1);

return statearr_43291;
})();
if(cljs.core.truth_(inst_43257__$1)){
var statearr_43292_43352 = state_43283__$1;
(statearr_43292_43352[(1)] = (29));

} else {
var statearr_43293_43353 = state_43283__$1;
(statearr_43293_43353[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (4))){
var inst_43202 = (state_43283[(2)]);
var state_43283__$1 = state_43283;
if(cljs.core.truth_(inst_43202)){
var statearr_43294_43354 = state_43283__$1;
(statearr_43294_43354[(1)] = (8));

} else {
var statearr_43295_43355 = state_43283__$1;
(statearr_43295_43355[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (15))){
var inst_43228 = (state_43283[(2)]);
var state_43283__$1 = state_43283;
if(cljs.core.truth_(inst_43228)){
var statearr_43296_43356 = state_43283__$1;
(statearr_43296_43356[(1)] = (19));

} else {
var statearr_43297_43357 = state_43283__$1;
(statearr_43297_43357[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (21))){
var inst_43233 = (state_43283[(12)]);
var inst_43233__$1 = (state_43283[(2)]);
var inst_43234 = cljs.core.get.call(null,inst_43233__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43235 = cljs.core.get.call(null,inst_43233__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43236 = cljs.core.get.call(null,inst_43233__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_43283__$1 = (function (){var statearr_43298 = state_43283;
(statearr_43298[(11)] = inst_43234);

(statearr_43298[(12)] = inst_43233__$1);

(statearr_43298[(13)] = inst_43235);

return statearr_43298;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_43283__$1,(22),inst_43236);
} else {
if((state_val_43284 === (31))){
var inst_43265 = (state_43283[(2)]);
var state_43283__$1 = state_43283;
if(cljs.core.truth_(inst_43265)){
var statearr_43299_43358 = state_43283__$1;
(statearr_43299_43358[(1)] = (32));

} else {
var statearr_43300_43359 = state_43283__$1;
(statearr_43300_43359[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (32))){
var inst_43242 = (state_43283[(14)]);
var state_43283__$1 = state_43283;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43283__$1,(35),out,inst_43242);
} else {
if((state_val_43284 === (33))){
var inst_43233 = (state_43283[(12)]);
var inst_43211 = inst_43233;
var state_43283__$1 = (function (){var statearr_43301 = state_43283;
(statearr_43301[(7)] = inst_43211);

return statearr_43301;
})();
var statearr_43302_43360 = state_43283__$1;
(statearr_43302_43360[(2)] = null);

(statearr_43302_43360[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (13))){
var inst_43211 = (state_43283[(7)]);
var inst_43218 = inst_43211.cljs$lang$protocol_mask$partition0$;
var inst_43219 = (inst_43218 & (64));
var inst_43220 = inst_43211.cljs$core$ISeq$;
var inst_43221 = (inst_43219) || (inst_43220);
var state_43283__$1 = state_43283;
if(cljs.core.truth_(inst_43221)){
var statearr_43303_43361 = state_43283__$1;
(statearr_43303_43361[(1)] = (16));

} else {
var statearr_43304_43362 = state_43283__$1;
(statearr_43304_43362[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (22))){
var inst_43242 = (state_43283[(14)]);
var inst_43243 = (state_43283[(9)]);
var inst_43241 = (state_43283[(2)]);
var inst_43242__$1 = cljs.core.nth.call(null,inst_43241,(0),null);
var inst_43243__$1 = cljs.core.nth.call(null,inst_43241,(1),null);
var inst_43244 = (inst_43242__$1 == null);
var inst_43245 = cljs.core._EQ_.call(null,inst_43243__$1,change);
var inst_43246 = (inst_43244) || (inst_43245);
var state_43283__$1 = (function (){var statearr_43305 = state_43283;
(statearr_43305[(14)] = inst_43242__$1);

(statearr_43305[(9)] = inst_43243__$1);

return statearr_43305;
})();
if(cljs.core.truth_(inst_43246)){
var statearr_43306_43363 = state_43283__$1;
(statearr_43306_43363[(1)] = (23));

} else {
var statearr_43307_43364 = state_43283__$1;
(statearr_43307_43364[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (36))){
var inst_43233 = (state_43283[(12)]);
var inst_43211 = inst_43233;
var state_43283__$1 = (function (){var statearr_43308 = state_43283;
(statearr_43308[(7)] = inst_43211);

return statearr_43308;
})();
var statearr_43309_43365 = state_43283__$1;
(statearr_43309_43365[(2)] = null);

(statearr_43309_43365[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (29))){
var inst_43257 = (state_43283[(10)]);
var state_43283__$1 = state_43283;
var statearr_43310_43366 = state_43283__$1;
(statearr_43310_43366[(2)] = inst_43257);

(statearr_43310_43366[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (6))){
var state_43283__$1 = state_43283;
var statearr_43311_43367 = state_43283__$1;
(statearr_43311_43367[(2)] = false);

(statearr_43311_43367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (28))){
var inst_43253 = (state_43283[(2)]);
var inst_43254 = calc_state.call(null);
var inst_43211 = inst_43254;
var state_43283__$1 = (function (){var statearr_43312 = state_43283;
(statearr_43312[(7)] = inst_43211);

(statearr_43312[(15)] = inst_43253);

return statearr_43312;
})();
var statearr_43313_43368 = state_43283__$1;
(statearr_43313_43368[(2)] = null);

(statearr_43313_43368[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (25))){
var inst_43279 = (state_43283[(2)]);
var state_43283__$1 = state_43283;
var statearr_43314_43369 = state_43283__$1;
(statearr_43314_43369[(2)] = inst_43279);

(statearr_43314_43369[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (34))){
var inst_43277 = (state_43283[(2)]);
var state_43283__$1 = state_43283;
var statearr_43315_43370 = state_43283__$1;
(statearr_43315_43370[(2)] = inst_43277);

(statearr_43315_43370[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (17))){
var state_43283__$1 = state_43283;
var statearr_43316_43371 = state_43283__$1;
(statearr_43316_43371[(2)] = false);

(statearr_43316_43371[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (3))){
var state_43283__$1 = state_43283;
var statearr_43317_43372 = state_43283__$1;
(statearr_43317_43372[(2)] = false);

(statearr_43317_43372[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (12))){
var inst_43281 = (state_43283[(2)]);
var state_43283__$1 = state_43283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43283__$1,inst_43281);
} else {
if((state_val_43284 === (2))){
var inst_43187 = (state_43283[(8)]);
var inst_43192 = inst_43187.cljs$lang$protocol_mask$partition0$;
var inst_43193 = (inst_43192 & (64));
var inst_43194 = inst_43187.cljs$core$ISeq$;
var inst_43195 = (inst_43193) || (inst_43194);
var state_43283__$1 = state_43283;
if(cljs.core.truth_(inst_43195)){
var statearr_43318_43373 = state_43283__$1;
(statearr_43318_43373[(1)] = (5));

} else {
var statearr_43319_43374 = state_43283__$1;
(statearr_43319_43374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (23))){
var inst_43242 = (state_43283[(14)]);
var inst_43248 = (inst_43242 == null);
var state_43283__$1 = state_43283;
if(cljs.core.truth_(inst_43248)){
var statearr_43320_43375 = state_43283__$1;
(statearr_43320_43375[(1)] = (26));

} else {
var statearr_43321_43376 = state_43283__$1;
(statearr_43321_43376[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (35))){
var inst_43268 = (state_43283[(2)]);
var state_43283__$1 = state_43283;
if(cljs.core.truth_(inst_43268)){
var statearr_43322_43377 = state_43283__$1;
(statearr_43322_43377[(1)] = (36));

} else {
var statearr_43323_43378 = state_43283__$1;
(statearr_43323_43378[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (19))){
var inst_43211 = (state_43283[(7)]);
var inst_43230 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43211);
var state_43283__$1 = state_43283;
var statearr_43324_43379 = state_43283__$1;
(statearr_43324_43379[(2)] = inst_43230);

(statearr_43324_43379[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (11))){
var inst_43211 = (state_43283[(7)]);
var inst_43215 = (inst_43211 == null);
var inst_43216 = cljs.core.not.call(null,inst_43215);
var state_43283__$1 = state_43283;
if(inst_43216){
var statearr_43325_43380 = state_43283__$1;
(statearr_43325_43380[(1)] = (13));

} else {
var statearr_43326_43381 = state_43283__$1;
(statearr_43326_43381[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (9))){
var inst_43187 = (state_43283[(8)]);
var state_43283__$1 = state_43283;
var statearr_43327_43382 = state_43283__$1;
(statearr_43327_43382[(2)] = inst_43187);

(statearr_43327_43382[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (5))){
var state_43283__$1 = state_43283;
var statearr_43328_43383 = state_43283__$1;
(statearr_43328_43383[(2)] = true);

(statearr_43328_43383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (14))){
var state_43283__$1 = state_43283;
var statearr_43329_43384 = state_43283__$1;
(statearr_43329_43384[(2)] = false);

(statearr_43329_43384[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (26))){
var inst_43243 = (state_43283[(9)]);
var inst_43250 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_43243);
var state_43283__$1 = state_43283;
var statearr_43330_43385 = state_43283__$1;
(statearr_43330_43385[(2)] = inst_43250);

(statearr_43330_43385[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (16))){
var state_43283__$1 = state_43283;
var statearr_43331_43386 = state_43283__$1;
(statearr_43331_43386[(2)] = true);

(statearr_43331_43386[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (38))){
var inst_43273 = (state_43283[(2)]);
var state_43283__$1 = state_43283;
var statearr_43332_43387 = state_43283__$1;
(statearr_43332_43387[(2)] = inst_43273);

(statearr_43332_43387[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (30))){
var inst_43243 = (state_43283[(9)]);
var inst_43234 = (state_43283[(11)]);
var inst_43235 = (state_43283[(13)]);
var inst_43260 = cljs.core.empty_QMARK_.call(null,inst_43234);
var inst_43261 = inst_43235.call(null,inst_43243);
var inst_43262 = cljs.core.not.call(null,inst_43261);
var inst_43263 = (inst_43260) && (inst_43262);
var state_43283__$1 = state_43283;
var statearr_43333_43388 = state_43283__$1;
(statearr_43333_43388[(2)] = inst_43263);

(statearr_43333_43388[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (10))){
var inst_43187 = (state_43283[(8)]);
var inst_43207 = (state_43283[(2)]);
var inst_43208 = cljs.core.get.call(null,inst_43207,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43209 = cljs.core.get.call(null,inst_43207,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43210 = cljs.core.get.call(null,inst_43207,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_43211 = inst_43187;
var state_43283__$1 = (function (){var statearr_43334 = state_43283;
(statearr_43334[(16)] = inst_43209);

(statearr_43334[(7)] = inst_43211);

(statearr_43334[(17)] = inst_43208);

(statearr_43334[(18)] = inst_43210);

return statearr_43334;
})();
var statearr_43335_43389 = state_43283__$1;
(statearr_43335_43389[(2)] = null);

(statearr_43335_43389[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (18))){
var inst_43225 = (state_43283[(2)]);
var state_43283__$1 = state_43283;
var statearr_43336_43390 = state_43283__$1;
(statearr_43336_43390[(2)] = inst_43225);

(statearr_43336_43390[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (37))){
var state_43283__$1 = state_43283;
var statearr_43337_43391 = state_43283__$1;
(statearr_43337_43391[(2)] = null);

(statearr_43337_43391[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (8))){
var inst_43187 = (state_43283[(8)]);
var inst_43204 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43187);
var state_43283__$1 = state_43283;
var statearr_43338_43392 = state_43283__$1;
(statearr_43338_43392[(2)] = inst_43204);

(statearr_43338_43392[(1)] = (10));


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
});})(c__41583__auto___43346,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__41471__auto__,c__41583__auto___43346,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__41472__auto__ = null;
var cljs$core$async$mix_$_state_machine__41472__auto____0 = (function (){
var statearr_43342 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43342[(0)] = cljs$core$async$mix_$_state_machine__41472__auto__);

(statearr_43342[(1)] = (1));

return statearr_43342;
});
var cljs$core$async$mix_$_state_machine__41472__auto____1 = (function (state_43283){
while(true){
var ret_value__41473__auto__ = (function (){try{while(true){
var result__41474__auto__ = switch__41471__auto__.call(null,state_43283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41474__auto__;
}
break;
}
}catch (e43343){if((e43343 instanceof Object)){
var ex__41475__auto__ = e43343;
var statearr_43344_43393 = state_43283;
(statearr_43344_43393[(5)] = ex__41475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43394 = state_43283;
state_43283 = G__43394;
continue;
} else {
return ret_value__41473__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__41472__auto__ = function(state_43283){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__41472__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__41472__auto____1.call(this,state_43283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__41472__auto____0;
cljs$core$async$mix_$_state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__41472__auto____1;
return cljs$core$async$mix_$_state_machine__41472__auto__;
})()
;})(switch__41471__auto__,c__41583__auto___43346,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__41585__auto__ = (function (){var statearr_43345 = f__41584__auto__.call(null);
(statearr_43345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41583__auto___43346);

return statearr_43345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41585__auto__);
});})(c__41583__auto___43346,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__37435__auto__ = (((p == null))?null:p);
var m__37436__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__37436__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__37435__auto__ = (((p == null))?null:p);
var m__37436__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,p,v,ch);
} else {
var m__37436__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args43395 = [];
var len__37847__auto___43398 = arguments.length;
var i__37848__auto___43399 = (0);
while(true){
if((i__37848__auto___43399 < len__37847__auto___43398)){
args43395.push((arguments[i__37848__auto___43399]));

var G__43400 = (i__37848__auto___43399 + (1));
i__37848__auto___43399 = G__43400;
continue;
} else {
}
break;
}

var G__43397 = args43395.length;
switch (G__43397) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43395.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__37435__auto__ = (((p == null))?null:p);
var m__37436__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,p);
} else {
var m__37436__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,p);
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
var x__37435__auto__ = (((p == null))?null:p);
var m__37436__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__37435__auto__)]);
if(!((m__37436__auto__ == null))){
return m__37436__auto__.call(null,p,v);
} else {
var m__37436__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__37436__auto____$1 == null))){
return m__37436__auto____$1.call(null,p,v);
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
var args43403 = [];
var len__37847__auto___43528 = arguments.length;
var i__37848__auto___43529 = (0);
while(true){
if((i__37848__auto___43529 < len__37847__auto___43528)){
args43403.push((arguments[i__37848__auto___43529]));

var G__43530 = (i__37848__auto___43529 + (1));
i__37848__auto___43529 = G__43530;
continue;
} else {
}
break;
}

var G__43405 = args43403.length;
switch (G__43405) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43403.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__36772__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__36772__auto__)){
return or__36772__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__36772__auto__,mults){
return (function (p1__43402_SHARP_){
if(cljs.core.truth_(p1__43402_SHARP_.call(null,topic))){
return p1__43402_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__43402_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__36772__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async43406 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43406 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43407){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43407 = meta43407;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_43408,meta43407__$1){
var self__ = this;
var _43408__$1 = this;
return (new cljs.core.async.t_cljs$core$async43406(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43407__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43406.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_43408){
var self__ = this;
var _43408__$1 = this;
return self__.meta43407;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43406.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async43406.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43406.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async43406.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43406.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async43406.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43406.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43406.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta43407","meta43407",1745623798,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43406.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43406.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43406";

cljs.core.async.t_cljs$core$async43406.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__37378__auto__,writer__37379__auto__,opt__37380__auto__){
return cljs.core._write.call(null,writer__37379__auto__,"cljs.core.async/t_cljs$core$async43406");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async43406 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async43406(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43407){
return (new cljs.core.async.t_cljs$core$async43406(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43407));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async43406(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41583__auto___43532 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41583__auto___43532,mults,ensure_mult,p){
return (function (){
var f__41584__auto__ = (function (){var switch__41471__auto__ = ((function (c__41583__auto___43532,mults,ensure_mult,p){
return (function (state_43480){
var state_val_43481 = (state_43480[(1)]);
if((state_val_43481 === (7))){
var inst_43476 = (state_43480[(2)]);
var state_43480__$1 = state_43480;
var statearr_43482_43533 = state_43480__$1;
(statearr_43482_43533[(2)] = inst_43476);

(statearr_43482_43533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43481 === (20))){
var state_43480__$1 = state_43480;
var statearr_43483_43534 = state_43480__$1;
(statearr_43483_43534[(2)] = null);

(statearr_43483_43534[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43481 === (1))){
var state_43480__$1 = state_43480;
var statearr_43484_43535 = state_43480__$1;
(statearr_43484_43535[(2)] = null);

(statearr_43484_43535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43481 === (24))){
var inst_43459 = (state_43480[(7)]);
var inst_43468 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_43459);
var state_43480__$1 = state_43480;
var statearr_43485_43536 = state_43480__$1;
(statearr_43485_43536[(2)] = inst_43468);

(statearr_43485_43536[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43481 === (4))){
var inst_43411 = (state_43480[(8)]);
var inst_43411__$1 = (state_43480[(2)]);
var inst_43412 = (inst_43411__$1 == null);
var state_43480__$1 = (function (){var statearr_43486 = state_43480;
(statearr_43486[(8)] = inst_43411__$1);

return statearr_43486;
})();
if(cljs.core.truth_(inst_43412)){
var statearr_43487_43537 = state_43480__$1;
(statearr_43487_43537[(1)] = (5));

} else {
var statearr_43488_43538 = state_43480__$1;
(statearr_43488_43538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43481 === (15))){
var inst_43453 = (state_43480[(2)]);
var state_43480__$1 = state_43480;
var statearr_43489_43539 = state_43480__$1;
(statearr_43489_43539[(2)] = inst_43453);

(statearr_43489_43539[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43481 === (21))){
var inst_43473 = (state_43480[(2)]);
var state_43480__$1 = (function (){var statearr_43490 = state_43480;
(statearr_43490[(9)] = inst_43473);

return statearr_43490;
})();
var statearr_43491_43540 = state_43480__$1;
(statearr_43491_43540[(2)] = null);

(statearr_43491_43540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43481 === (13))){
var inst_43435 = (state_43480[(10)]);
var inst_43437 = cljs.core.chunked_seq_QMARK_.call(null,inst_43435);
var state_43480__$1 = state_43480;
if(inst_43437){
var statearr_43492_43541 = state_43480__$1;
(statearr_43492_43541[(1)] = (16));

} else {
var statearr_43493_43542 = state_43480__$1;
(statearr_43493_43542[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43481 === (22))){
var inst_43465 = (state_43480[(2)]);
var state_43480__$1 = state_43480;
if(cljs.core.truth_(inst_43465)){
var statearr_43494_43543 = state_43480__$1;
(statearr_43494_43543[(1)] = (23));

} else {
var statearr_43495_43544 = state_43480__$1;
(statearr_43495_43544[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43481 === (6))){
var inst_43461 = (state_43480[(11)]);
var inst_43459 = (state_43480[(7)]);
var inst_43411 = (state_43480[(8)]);
var inst_43459__$1 = topic_fn.call(null,inst_43411);
var inst_43460 = cljs.core.deref.call(null,mults);
var inst_43461__$1 = cljs.core.get.call(null,inst_43460,inst_43459__$1);
var state_43480__$1 = (function (){var statearr_43496 = state_43480;
(statearr_43496[(11)] = inst_43461__$1);

(statearr_43496[(7)] = inst_43459__$1);

return statearr_43496;
})();
if(cljs.core.truth_(inst_43461__$1)){
var statearr_43497_43545 = state_43480__$1;
(statearr_43497_43545[(1)] = (19));

} else {
var statearr_43498_43546 = state_43480__$1;
(statearr_43498_43546[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43481 === (25))){
var inst_43470 = (state_43480[(2)]);
var state_43480__$1 = state_43480;
var statearr_43499_43547 = state_43480__$1;
(statearr_43499_43547[(2)] = inst_43470);

(statearr_43499_43547[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43481 === (17))){
var inst_43435 = (state_43480[(10)]);
var inst_43444 = cljs.core.first.call(null,inst_43435);
var inst_43445 = cljs.core.async.muxch_STAR_.call(null,inst_43444);
var inst_43446 = cljs.core.async.close_BANG_.call(null,inst_43445);
var inst_43447 = cljs.core.next.call(null,inst_43435);
var inst_43421 = inst_43447;
var inst_43422 = null;
var inst_43423 = (0);
var inst_43424 = (0);
var state_43480__$1 = (function (){var statearr_43500 = state_43480;
(statearr_43500[(12)] = inst_43422);

(statearr_43500[(13)] = inst_43446);

(statearr_43500[(14)] = inst_43424);

(statearr_43500[(15)] = inst_43423);

(statearr_43500[(16)] = inst_43421);

return statearr_43500;
})();
var statearr_43501_43548 = state_43480__$1;
(statearr_43501_43548[(2)] = null);

(statearr_43501_43548[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43481 === (3))){
var inst_43478 = (state_43480[(2)]);
var state_43480__$1 = state_43480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43480__$1,inst_43478);
} else {
if((state_val_43481 === (12))){
var inst_43455 = (state_43480[(2)]);
var state_43480__$1 = state_43480;
var statearr_43502_43549 = state_43480__$1;
(statearr_43502_43549[(2)] = inst_43455);

(statearr_43502_43549[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43481 === (2))){
var state_43480__$1 = state_43480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43480__$1,(4),ch);
} else {
if((state_val_43481 === (23))){
var state_43480__$1 = state_43480;
var statearr_43503_43550 = state_43480__$1;
(statearr_43503_43550[(2)] = null);

(statearr_43503_43550[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43481 === (19))){
var inst_43461 = (state_43480[(11)]);
var inst_43411 = (state_43480[(8)]);
var inst_43463 = cljs.core.async.muxch_STAR_.call(null,inst_43461);
var state_43480__$1 = state_43480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43480__$1,(22),inst_43463,inst_43411);
} else {
if((state_val_43481 === (11))){
var inst_43435 = (state_43480[(10)]);
var inst_43421 = (state_43480[(16)]);
var inst_43435__$1 = cljs.core.seq.call(null,inst_43421);
var state_43480__$1 = (function (){var statearr_43504 = state_43480;
(statearr_43504[(10)] = inst_43435__$1);

return statearr_43504;
})();
if(inst_43435__$1){
var statearr_43505_43551 = state_43480__$1;
(statearr_43505_43551[(1)] = (13));

} else {
var statearr_43506_43552 = state_43480__$1;
(statearr_43506_43552[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43481 === (9))){
var inst_43457 = (state_43480[(2)]);
var state_43480__$1 = state_43480;
var statearr_43507_43553 = state_43480__$1;
(statearr_43507_43553[(2)] = inst_43457);

(statearr_43507_43553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43481 === (5))){
var inst_43418 = cljs.core.deref.call(null,mults);
var inst_43419 = cljs.core.vals.call(null,inst_43418);
var inst_43420 = cljs.core.seq.call(null,inst_43419);
var inst_43421 = inst_43420;
var inst_43422 = null;
var inst_43423 = (0);
var inst_43424 = (0);
var state_43480__$1 = (function (){var statearr_43508 = state_43480;
(statearr_43508[(12)] = inst_43422);

(statearr_43508[(14)] = inst_43424);

(statearr_43508[(15)] = inst_43423);

(statearr_43508[(16)] = inst_43421);

return statearr_43508;
})();
var statearr_43509_43554 = state_43480__$1;
(statearr_43509_43554[(2)] = null);

(statearr_43509_43554[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43481 === (14))){
var state_43480__$1 = state_43480;
var statearr_43513_43555 = state_43480__$1;
(statearr_43513_43555[(2)] = null);

(statearr_43513_43555[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43481 === (16))){
var inst_43435 = (state_43480[(10)]);
var inst_43439 = cljs.core.chunk_first.call(null,inst_43435);
var inst_43440 = cljs.core.chunk_rest.call(null,inst_43435);
var inst_43441 = cljs.core.count.call(null,inst_43439);
var inst_43421 = inst_43440;
var inst_43422 = inst_43439;
var inst_43423 = inst_43441;
var inst_43424 = (0);
var state_43480__$1 = (function (){var statearr_43514 = state_43480;
(statearr_43514[(12)] = inst_43422);

(statearr_43514[(14)] = inst_43424);

(statearr_43514[(15)] = inst_43423);

(statearr_43514[(16)] = inst_43421);

return statearr_43514;
})();
var statearr_43515_43556 = state_43480__$1;
(statearr_43515_43556[(2)] = null);

(statearr_43515_43556[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43481 === (10))){
var inst_43422 = (state_43480[(12)]);
var inst_43424 = (state_43480[(14)]);
var inst_43423 = (state_43480[(15)]);
var inst_43421 = (state_43480[(16)]);
var inst_43429 = cljs.core._nth.call(null,inst_43422,inst_43424);
var inst_43430 = cljs.core.async.muxch_STAR_.call(null,inst_43429);
var inst_43431 = cljs.core.async.close_BANG_.call(null,inst_43430);
var inst_43432 = (inst_43424 + (1));
var tmp43510 = inst_43422;
var tmp43511 = inst_43423;
var tmp43512 = inst_43421;
var inst_43421__$1 = tmp43512;
var inst_43422__$1 = tmp43510;
var inst_43423__$1 = tmp43511;
var inst_43424__$1 = inst_43432;
var state_43480__$1 = (function (){var statearr_43516 = state_43480;
(statearr_43516[(17)] = inst_43431);

(statearr_43516[(12)] = inst_43422__$1);

(statearr_43516[(14)] = inst_43424__$1);

(statearr_43516[(15)] = inst_43423__$1);

(statearr_43516[(16)] = inst_43421__$1);

return statearr_43516;
})();
var statearr_43517_43557 = state_43480__$1;
(statearr_43517_43557[(2)] = null);

(statearr_43517_43557[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43481 === (18))){
var inst_43450 = (state_43480[(2)]);
var state_43480__$1 = state_43480;
var statearr_43518_43558 = state_43480__$1;
(statearr_43518_43558[(2)] = inst_43450);

(statearr_43518_43558[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43481 === (8))){
var inst_43424 = (state_43480[(14)]);
var inst_43423 = (state_43480[(15)]);
var inst_43426 = (inst_43424 < inst_43423);
var inst_43427 = inst_43426;
var state_43480__$1 = state_43480;
if(cljs.core.truth_(inst_43427)){
var statearr_43519_43559 = state_43480__$1;
(statearr_43519_43559[(1)] = (10));

} else {
var statearr_43520_43560 = state_43480__$1;
(statearr_43520_43560[(1)] = (11));

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
});})(c__41583__auto___43532,mults,ensure_mult,p))
;
return ((function (switch__41471__auto__,c__41583__auto___43532,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__41472__auto__ = null;
var cljs$core$async$state_machine__41472__auto____0 = (function (){
var statearr_43524 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43524[(0)] = cljs$core$async$state_machine__41472__auto__);

(statearr_43524[(1)] = (1));

return statearr_43524;
});
var cljs$core$async$state_machine__41472__auto____1 = (function (state_43480){
while(true){
var ret_value__41473__auto__ = (function (){try{while(true){
var result__41474__auto__ = switch__41471__auto__.call(null,state_43480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41474__auto__;
}
break;
}
}catch (e43525){if((e43525 instanceof Object)){
var ex__41475__auto__ = e43525;
var statearr_43526_43561 = state_43480;
(statearr_43526_43561[(5)] = ex__41475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43562 = state_43480;
state_43480 = G__43562;
continue;
} else {
return ret_value__41473__auto__;
}
break;
}
});
cljs$core$async$state_machine__41472__auto__ = function(state_43480){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41472__auto____1.call(this,state_43480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41472__auto____0;
cljs$core$async$state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41472__auto____1;
return cljs$core$async$state_machine__41472__auto__;
})()
;})(switch__41471__auto__,c__41583__auto___43532,mults,ensure_mult,p))
})();
var state__41585__auto__ = (function (){var statearr_43527 = f__41584__auto__.call(null);
(statearr_43527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41583__auto___43532);

return statearr_43527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41585__auto__);
});})(c__41583__auto___43532,mults,ensure_mult,p))
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
var args43563 = [];
var len__37847__auto___43566 = arguments.length;
var i__37848__auto___43567 = (0);
while(true){
if((i__37848__auto___43567 < len__37847__auto___43566)){
args43563.push((arguments[i__37848__auto___43567]));

var G__43568 = (i__37848__auto___43567 + (1));
i__37848__auto___43567 = G__43568;
continue;
} else {
}
break;
}

var G__43565 = args43563.length;
switch (G__43565) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43563.length)].join('')));

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
var args43570 = [];
var len__37847__auto___43573 = arguments.length;
var i__37848__auto___43574 = (0);
while(true){
if((i__37848__auto___43574 < len__37847__auto___43573)){
args43570.push((arguments[i__37848__auto___43574]));

var G__43575 = (i__37848__auto___43574 + (1));
i__37848__auto___43574 = G__43575;
continue;
} else {
}
break;
}

var G__43572 = args43570.length;
switch (G__43572) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43570.length)].join('')));

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
var args43577 = [];
var len__37847__auto___43648 = arguments.length;
var i__37848__auto___43649 = (0);
while(true){
if((i__37848__auto___43649 < len__37847__auto___43648)){
args43577.push((arguments[i__37848__auto___43649]));

var G__43650 = (i__37848__auto___43649 + (1));
i__37848__auto___43649 = G__43650;
continue;
} else {
}
break;
}

var G__43579 = args43577.length;
switch (G__43579) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43577.length)].join('')));

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
var c__41583__auto___43652 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41583__auto___43652,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__41584__auto__ = (function (){var switch__41471__auto__ = ((function (c__41583__auto___43652,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_43618){
var state_val_43619 = (state_43618[(1)]);
if((state_val_43619 === (7))){
var state_43618__$1 = state_43618;
var statearr_43620_43653 = state_43618__$1;
(statearr_43620_43653[(2)] = null);

(statearr_43620_43653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43619 === (1))){
var state_43618__$1 = state_43618;
var statearr_43621_43654 = state_43618__$1;
(statearr_43621_43654[(2)] = null);

(statearr_43621_43654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43619 === (4))){
var inst_43582 = (state_43618[(7)]);
var inst_43584 = (inst_43582 < cnt);
var state_43618__$1 = state_43618;
if(cljs.core.truth_(inst_43584)){
var statearr_43622_43655 = state_43618__$1;
(statearr_43622_43655[(1)] = (6));

} else {
var statearr_43623_43656 = state_43618__$1;
(statearr_43623_43656[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43619 === (15))){
var inst_43614 = (state_43618[(2)]);
var state_43618__$1 = state_43618;
var statearr_43624_43657 = state_43618__$1;
(statearr_43624_43657[(2)] = inst_43614);

(statearr_43624_43657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43619 === (13))){
var inst_43607 = cljs.core.async.close_BANG_.call(null,out);
var state_43618__$1 = state_43618;
var statearr_43625_43658 = state_43618__$1;
(statearr_43625_43658[(2)] = inst_43607);

(statearr_43625_43658[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43619 === (6))){
var state_43618__$1 = state_43618;
var statearr_43626_43659 = state_43618__$1;
(statearr_43626_43659[(2)] = null);

(statearr_43626_43659[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43619 === (3))){
var inst_43616 = (state_43618[(2)]);
var state_43618__$1 = state_43618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43618__$1,inst_43616);
} else {
if((state_val_43619 === (12))){
var inst_43604 = (state_43618[(8)]);
var inst_43604__$1 = (state_43618[(2)]);
var inst_43605 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_43604__$1);
var state_43618__$1 = (function (){var statearr_43627 = state_43618;
(statearr_43627[(8)] = inst_43604__$1);

return statearr_43627;
})();
if(cljs.core.truth_(inst_43605)){
var statearr_43628_43660 = state_43618__$1;
(statearr_43628_43660[(1)] = (13));

} else {
var statearr_43629_43661 = state_43618__$1;
(statearr_43629_43661[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43619 === (2))){
var inst_43581 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_43582 = (0);
var state_43618__$1 = (function (){var statearr_43630 = state_43618;
(statearr_43630[(9)] = inst_43581);

(statearr_43630[(7)] = inst_43582);

return statearr_43630;
})();
var statearr_43631_43662 = state_43618__$1;
(statearr_43631_43662[(2)] = null);

(statearr_43631_43662[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43619 === (11))){
var inst_43582 = (state_43618[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43618,(10),Object,null,(9));
var inst_43591 = chs__$1.call(null,inst_43582);
var inst_43592 = done.call(null,inst_43582);
var inst_43593 = cljs.core.async.take_BANG_.call(null,inst_43591,inst_43592);
var state_43618__$1 = state_43618;
var statearr_43632_43663 = state_43618__$1;
(statearr_43632_43663[(2)] = inst_43593);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43618__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43619 === (9))){
var inst_43582 = (state_43618[(7)]);
var inst_43595 = (state_43618[(2)]);
var inst_43596 = (inst_43582 + (1));
var inst_43582__$1 = inst_43596;
var state_43618__$1 = (function (){var statearr_43633 = state_43618;
(statearr_43633[(10)] = inst_43595);

(statearr_43633[(7)] = inst_43582__$1);

return statearr_43633;
})();
var statearr_43634_43664 = state_43618__$1;
(statearr_43634_43664[(2)] = null);

(statearr_43634_43664[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43619 === (5))){
var inst_43602 = (state_43618[(2)]);
var state_43618__$1 = (function (){var statearr_43635 = state_43618;
(statearr_43635[(11)] = inst_43602);

return statearr_43635;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43618__$1,(12),dchan);
} else {
if((state_val_43619 === (14))){
var inst_43604 = (state_43618[(8)]);
var inst_43609 = cljs.core.apply.call(null,f,inst_43604);
var state_43618__$1 = state_43618;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43618__$1,(16),out,inst_43609);
} else {
if((state_val_43619 === (16))){
var inst_43611 = (state_43618[(2)]);
var state_43618__$1 = (function (){var statearr_43636 = state_43618;
(statearr_43636[(12)] = inst_43611);

return statearr_43636;
})();
var statearr_43637_43665 = state_43618__$1;
(statearr_43637_43665[(2)] = null);

(statearr_43637_43665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43619 === (10))){
var inst_43586 = (state_43618[(2)]);
var inst_43587 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_43618__$1 = (function (){var statearr_43638 = state_43618;
(statearr_43638[(13)] = inst_43586);

return statearr_43638;
})();
var statearr_43639_43666 = state_43618__$1;
(statearr_43639_43666[(2)] = inst_43587);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43618__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43619 === (8))){
var inst_43600 = (state_43618[(2)]);
var state_43618__$1 = state_43618;
var statearr_43640_43667 = state_43618__$1;
(statearr_43640_43667[(2)] = inst_43600);

(statearr_43640_43667[(1)] = (5));


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
});})(c__41583__auto___43652,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__41471__auto__,c__41583__auto___43652,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__41472__auto__ = null;
var cljs$core$async$state_machine__41472__auto____0 = (function (){
var statearr_43644 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43644[(0)] = cljs$core$async$state_machine__41472__auto__);

(statearr_43644[(1)] = (1));

return statearr_43644;
});
var cljs$core$async$state_machine__41472__auto____1 = (function (state_43618){
while(true){
var ret_value__41473__auto__ = (function (){try{while(true){
var result__41474__auto__ = switch__41471__auto__.call(null,state_43618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41474__auto__;
}
break;
}
}catch (e43645){if((e43645 instanceof Object)){
var ex__41475__auto__ = e43645;
var statearr_43646_43668 = state_43618;
(statearr_43646_43668[(5)] = ex__41475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43669 = state_43618;
state_43618 = G__43669;
continue;
} else {
return ret_value__41473__auto__;
}
break;
}
});
cljs$core$async$state_machine__41472__auto__ = function(state_43618){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41472__auto____1.call(this,state_43618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41472__auto____0;
cljs$core$async$state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41472__auto____1;
return cljs$core$async$state_machine__41472__auto__;
})()
;})(switch__41471__auto__,c__41583__auto___43652,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__41585__auto__ = (function (){var statearr_43647 = f__41584__auto__.call(null);
(statearr_43647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41583__auto___43652);

return statearr_43647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41585__auto__);
});})(c__41583__auto___43652,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args43671 = [];
var len__37847__auto___43729 = arguments.length;
var i__37848__auto___43730 = (0);
while(true){
if((i__37848__auto___43730 < len__37847__auto___43729)){
args43671.push((arguments[i__37848__auto___43730]));

var G__43731 = (i__37848__auto___43730 + (1));
i__37848__auto___43730 = G__43731;
continue;
} else {
}
break;
}

var G__43673 = args43671.length;
switch (G__43673) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43671.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41583__auto___43733 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41583__auto___43733,out){
return (function (){
var f__41584__auto__ = (function (){var switch__41471__auto__ = ((function (c__41583__auto___43733,out){
return (function (state_43705){
var state_val_43706 = (state_43705[(1)]);
if((state_val_43706 === (7))){
var inst_43685 = (state_43705[(7)]);
var inst_43684 = (state_43705[(8)]);
var inst_43684__$1 = (state_43705[(2)]);
var inst_43685__$1 = cljs.core.nth.call(null,inst_43684__$1,(0),null);
var inst_43686 = cljs.core.nth.call(null,inst_43684__$1,(1),null);
var inst_43687 = (inst_43685__$1 == null);
var state_43705__$1 = (function (){var statearr_43707 = state_43705;
(statearr_43707[(7)] = inst_43685__$1);

(statearr_43707[(9)] = inst_43686);

(statearr_43707[(8)] = inst_43684__$1);

return statearr_43707;
})();
if(cljs.core.truth_(inst_43687)){
var statearr_43708_43734 = state_43705__$1;
(statearr_43708_43734[(1)] = (8));

} else {
var statearr_43709_43735 = state_43705__$1;
(statearr_43709_43735[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43706 === (1))){
var inst_43674 = cljs.core.vec.call(null,chs);
var inst_43675 = inst_43674;
var state_43705__$1 = (function (){var statearr_43710 = state_43705;
(statearr_43710[(10)] = inst_43675);

return statearr_43710;
})();
var statearr_43711_43736 = state_43705__$1;
(statearr_43711_43736[(2)] = null);

(statearr_43711_43736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43706 === (4))){
var inst_43675 = (state_43705[(10)]);
var state_43705__$1 = state_43705;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43705__$1,(7),inst_43675);
} else {
if((state_val_43706 === (6))){
var inst_43701 = (state_43705[(2)]);
var state_43705__$1 = state_43705;
var statearr_43712_43737 = state_43705__$1;
(statearr_43712_43737[(2)] = inst_43701);

(statearr_43712_43737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43706 === (3))){
var inst_43703 = (state_43705[(2)]);
var state_43705__$1 = state_43705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43705__$1,inst_43703);
} else {
if((state_val_43706 === (2))){
var inst_43675 = (state_43705[(10)]);
var inst_43677 = cljs.core.count.call(null,inst_43675);
var inst_43678 = (inst_43677 > (0));
var state_43705__$1 = state_43705;
if(cljs.core.truth_(inst_43678)){
var statearr_43714_43738 = state_43705__$1;
(statearr_43714_43738[(1)] = (4));

} else {
var statearr_43715_43739 = state_43705__$1;
(statearr_43715_43739[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43706 === (11))){
var inst_43675 = (state_43705[(10)]);
var inst_43694 = (state_43705[(2)]);
var tmp43713 = inst_43675;
var inst_43675__$1 = tmp43713;
var state_43705__$1 = (function (){var statearr_43716 = state_43705;
(statearr_43716[(10)] = inst_43675__$1);

(statearr_43716[(11)] = inst_43694);

return statearr_43716;
})();
var statearr_43717_43740 = state_43705__$1;
(statearr_43717_43740[(2)] = null);

(statearr_43717_43740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43706 === (9))){
var inst_43685 = (state_43705[(7)]);
var state_43705__$1 = state_43705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43705__$1,(11),out,inst_43685);
} else {
if((state_val_43706 === (5))){
var inst_43699 = cljs.core.async.close_BANG_.call(null,out);
var state_43705__$1 = state_43705;
var statearr_43718_43741 = state_43705__$1;
(statearr_43718_43741[(2)] = inst_43699);

(statearr_43718_43741[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43706 === (10))){
var inst_43697 = (state_43705[(2)]);
var state_43705__$1 = state_43705;
var statearr_43719_43742 = state_43705__$1;
(statearr_43719_43742[(2)] = inst_43697);

(statearr_43719_43742[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43706 === (8))){
var inst_43685 = (state_43705[(7)]);
var inst_43675 = (state_43705[(10)]);
var inst_43686 = (state_43705[(9)]);
var inst_43684 = (state_43705[(8)]);
var inst_43689 = (function (){var cs = inst_43675;
var vec__43680 = inst_43684;
var v = inst_43685;
var c = inst_43686;
return ((function (cs,vec__43680,v,c,inst_43685,inst_43675,inst_43686,inst_43684,state_val_43706,c__41583__auto___43733,out){
return (function (p1__43670_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__43670_SHARP_);
});
;})(cs,vec__43680,v,c,inst_43685,inst_43675,inst_43686,inst_43684,state_val_43706,c__41583__auto___43733,out))
})();
var inst_43690 = cljs.core.filterv.call(null,inst_43689,inst_43675);
var inst_43675__$1 = inst_43690;
var state_43705__$1 = (function (){var statearr_43720 = state_43705;
(statearr_43720[(10)] = inst_43675__$1);

return statearr_43720;
})();
var statearr_43721_43743 = state_43705__$1;
(statearr_43721_43743[(2)] = null);

(statearr_43721_43743[(1)] = (2));


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
});})(c__41583__auto___43733,out))
;
return ((function (switch__41471__auto__,c__41583__auto___43733,out){
return (function() {
var cljs$core$async$state_machine__41472__auto__ = null;
var cljs$core$async$state_machine__41472__auto____0 = (function (){
var statearr_43725 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43725[(0)] = cljs$core$async$state_machine__41472__auto__);

(statearr_43725[(1)] = (1));

return statearr_43725;
});
var cljs$core$async$state_machine__41472__auto____1 = (function (state_43705){
while(true){
var ret_value__41473__auto__ = (function (){try{while(true){
var result__41474__auto__ = switch__41471__auto__.call(null,state_43705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41474__auto__;
}
break;
}
}catch (e43726){if((e43726 instanceof Object)){
var ex__41475__auto__ = e43726;
var statearr_43727_43744 = state_43705;
(statearr_43727_43744[(5)] = ex__41475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43745 = state_43705;
state_43705 = G__43745;
continue;
} else {
return ret_value__41473__auto__;
}
break;
}
});
cljs$core$async$state_machine__41472__auto__ = function(state_43705){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41472__auto____1.call(this,state_43705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41472__auto____0;
cljs$core$async$state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41472__auto____1;
return cljs$core$async$state_machine__41472__auto__;
})()
;})(switch__41471__auto__,c__41583__auto___43733,out))
})();
var state__41585__auto__ = (function (){var statearr_43728 = f__41584__auto__.call(null);
(statearr_43728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41583__auto___43733);

return statearr_43728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41585__auto__);
});})(c__41583__auto___43733,out))
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
var args43746 = [];
var len__37847__auto___43795 = arguments.length;
var i__37848__auto___43796 = (0);
while(true){
if((i__37848__auto___43796 < len__37847__auto___43795)){
args43746.push((arguments[i__37848__auto___43796]));

var G__43797 = (i__37848__auto___43796 + (1));
i__37848__auto___43796 = G__43797;
continue;
} else {
}
break;
}

var G__43748 = args43746.length;
switch (G__43748) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43746.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41583__auto___43799 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41583__auto___43799,out){
return (function (){
var f__41584__auto__ = (function (){var switch__41471__auto__ = ((function (c__41583__auto___43799,out){
return (function (state_43772){
var state_val_43773 = (state_43772[(1)]);
if((state_val_43773 === (7))){
var inst_43754 = (state_43772[(7)]);
var inst_43754__$1 = (state_43772[(2)]);
var inst_43755 = (inst_43754__$1 == null);
var inst_43756 = cljs.core.not.call(null,inst_43755);
var state_43772__$1 = (function (){var statearr_43774 = state_43772;
(statearr_43774[(7)] = inst_43754__$1);

return statearr_43774;
})();
if(inst_43756){
var statearr_43775_43800 = state_43772__$1;
(statearr_43775_43800[(1)] = (8));

} else {
var statearr_43776_43801 = state_43772__$1;
(statearr_43776_43801[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43773 === (1))){
var inst_43749 = (0);
var state_43772__$1 = (function (){var statearr_43777 = state_43772;
(statearr_43777[(8)] = inst_43749);

return statearr_43777;
})();
var statearr_43778_43802 = state_43772__$1;
(statearr_43778_43802[(2)] = null);

(statearr_43778_43802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43773 === (4))){
var state_43772__$1 = state_43772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43772__$1,(7),ch);
} else {
if((state_val_43773 === (6))){
var inst_43767 = (state_43772[(2)]);
var state_43772__$1 = state_43772;
var statearr_43779_43803 = state_43772__$1;
(statearr_43779_43803[(2)] = inst_43767);

(statearr_43779_43803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43773 === (3))){
var inst_43769 = (state_43772[(2)]);
var inst_43770 = cljs.core.async.close_BANG_.call(null,out);
var state_43772__$1 = (function (){var statearr_43780 = state_43772;
(statearr_43780[(9)] = inst_43769);

return statearr_43780;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43772__$1,inst_43770);
} else {
if((state_val_43773 === (2))){
var inst_43749 = (state_43772[(8)]);
var inst_43751 = (inst_43749 < n);
var state_43772__$1 = state_43772;
if(cljs.core.truth_(inst_43751)){
var statearr_43781_43804 = state_43772__$1;
(statearr_43781_43804[(1)] = (4));

} else {
var statearr_43782_43805 = state_43772__$1;
(statearr_43782_43805[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43773 === (11))){
var inst_43749 = (state_43772[(8)]);
var inst_43759 = (state_43772[(2)]);
var inst_43760 = (inst_43749 + (1));
var inst_43749__$1 = inst_43760;
var state_43772__$1 = (function (){var statearr_43783 = state_43772;
(statearr_43783[(8)] = inst_43749__$1);

(statearr_43783[(10)] = inst_43759);

return statearr_43783;
})();
var statearr_43784_43806 = state_43772__$1;
(statearr_43784_43806[(2)] = null);

(statearr_43784_43806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43773 === (9))){
var state_43772__$1 = state_43772;
var statearr_43785_43807 = state_43772__$1;
(statearr_43785_43807[(2)] = null);

(statearr_43785_43807[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43773 === (5))){
var state_43772__$1 = state_43772;
var statearr_43786_43808 = state_43772__$1;
(statearr_43786_43808[(2)] = null);

(statearr_43786_43808[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43773 === (10))){
var inst_43764 = (state_43772[(2)]);
var state_43772__$1 = state_43772;
var statearr_43787_43809 = state_43772__$1;
(statearr_43787_43809[(2)] = inst_43764);

(statearr_43787_43809[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43773 === (8))){
var inst_43754 = (state_43772[(7)]);
var state_43772__$1 = state_43772;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43772__$1,(11),out,inst_43754);
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
});})(c__41583__auto___43799,out))
;
return ((function (switch__41471__auto__,c__41583__auto___43799,out){
return (function() {
var cljs$core$async$state_machine__41472__auto__ = null;
var cljs$core$async$state_machine__41472__auto____0 = (function (){
var statearr_43791 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43791[(0)] = cljs$core$async$state_machine__41472__auto__);

(statearr_43791[(1)] = (1));

return statearr_43791;
});
var cljs$core$async$state_machine__41472__auto____1 = (function (state_43772){
while(true){
var ret_value__41473__auto__ = (function (){try{while(true){
var result__41474__auto__ = switch__41471__auto__.call(null,state_43772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41474__auto__;
}
break;
}
}catch (e43792){if((e43792 instanceof Object)){
var ex__41475__auto__ = e43792;
var statearr_43793_43810 = state_43772;
(statearr_43793_43810[(5)] = ex__41475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43811 = state_43772;
state_43772 = G__43811;
continue;
} else {
return ret_value__41473__auto__;
}
break;
}
});
cljs$core$async$state_machine__41472__auto__ = function(state_43772){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41472__auto____1.call(this,state_43772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41472__auto____0;
cljs$core$async$state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41472__auto____1;
return cljs$core$async$state_machine__41472__auto__;
})()
;})(switch__41471__auto__,c__41583__auto___43799,out))
})();
var state__41585__auto__ = (function (){var statearr_43794 = f__41584__auto__.call(null);
(statearr_43794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41583__auto___43799);

return statearr_43794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41585__auto__);
});})(c__41583__auto___43799,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async43819 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43819 = (function (map_LT_,f,ch,meta43820){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta43820 = meta43820;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43821,meta43820__$1){
var self__ = this;
var _43821__$1 = this;
return (new cljs.core.async.t_cljs$core$async43819(self__.map_LT_,self__.f,self__.ch,meta43820__$1));
});

cljs.core.async.t_cljs$core$async43819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43821){
var self__ = this;
var _43821__$1 = this;
return self__.meta43820;
});

cljs.core.async.t_cljs$core$async43819.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async43819.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43819.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43819.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async43819.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async43822 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43822 = (function (map_LT_,f,ch,meta43820,_,fn1,meta43823){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta43820 = meta43820;
this._ = _;
this.fn1 = fn1;
this.meta43823 = meta43823;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_43824,meta43823__$1){
var self__ = this;
var _43824__$1 = this;
return (new cljs.core.async.t_cljs$core$async43822(self__.map_LT_,self__.f,self__.ch,self__.meta43820,self__._,self__.fn1,meta43823__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async43822.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_43824){
var self__ = this;
var _43824__$1 = this;
return self__.meta43823;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43822.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async43822.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43822.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43822.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__43812_SHARP_){
return f1.call(null,(((p1__43812_SHARP_ == null))?null:self__.f.call(null,p1__43812_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async43822.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43820","meta43820",-2024076011,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43819","cljs.core.async/t_cljs$core$async43819",-790587339,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43823","meta43823",443703817,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43822.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43822.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43822";

cljs.core.async.t_cljs$core$async43822.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__37378__auto__,writer__37379__auto__,opt__37380__auto__){
return cljs.core._write.call(null,writer__37379__auto__,"cljs.core.async/t_cljs$core$async43822");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async43822 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43822(map_LT___$1,f__$1,ch__$1,meta43820__$1,___$2,fn1__$1,meta43823){
return (new cljs.core.async.t_cljs$core$async43822(map_LT___$1,f__$1,ch__$1,meta43820__$1,___$2,fn1__$1,meta43823));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async43822(self__.map_LT_,self__.f,self__.ch,self__.meta43820,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__36760__auto__ = ret;
if(cljs.core.truth_(and__36760__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__36760__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async43819.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async43819.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async43819.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43820","meta43820",-2024076011,null)], null);
});

cljs.core.async.t_cljs$core$async43819.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43819.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43819";

cljs.core.async.t_cljs$core$async43819.cljs$lang$ctorPrWriter = (function (this__37378__auto__,writer__37379__auto__,opt__37380__auto__){
return cljs.core._write.call(null,writer__37379__auto__,"cljs.core.async/t_cljs$core$async43819");
});

cljs.core.async.__GT_t_cljs$core$async43819 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43819(map_LT___$1,f__$1,ch__$1,meta43820){
return (new cljs.core.async.t_cljs$core$async43819(map_LT___$1,f__$1,ch__$1,meta43820));
});

}

return (new cljs.core.async.t_cljs$core$async43819(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async43828 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43828 = (function (map_GT_,f,ch,meta43829){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta43829 = meta43829;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43830,meta43829__$1){
var self__ = this;
var _43830__$1 = this;
return (new cljs.core.async.t_cljs$core$async43828(self__.map_GT_,self__.f,self__.ch,meta43829__$1));
});

cljs.core.async.t_cljs$core$async43828.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43830){
var self__ = this;
var _43830__$1 = this;
return self__.meta43829;
});

cljs.core.async.t_cljs$core$async43828.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async43828.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43828.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async43828.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43828.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async43828.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async43828.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43829","meta43829",1857531090,null)], null);
});

cljs.core.async.t_cljs$core$async43828.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43828.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43828";

cljs.core.async.t_cljs$core$async43828.cljs$lang$ctorPrWriter = (function (this__37378__auto__,writer__37379__auto__,opt__37380__auto__){
return cljs.core._write.call(null,writer__37379__auto__,"cljs.core.async/t_cljs$core$async43828");
});

cljs.core.async.__GT_t_cljs$core$async43828 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43828(map_GT___$1,f__$1,ch__$1,meta43829){
return (new cljs.core.async.t_cljs$core$async43828(map_GT___$1,f__$1,ch__$1,meta43829));
});

}

return (new cljs.core.async.t_cljs$core$async43828(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async43834 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43834 = (function (filter_GT_,p,ch,meta43835){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta43835 = meta43835;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43836,meta43835__$1){
var self__ = this;
var _43836__$1 = this;
return (new cljs.core.async.t_cljs$core$async43834(self__.filter_GT_,self__.p,self__.ch,meta43835__$1));
});

cljs.core.async.t_cljs$core$async43834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43836){
var self__ = this;
var _43836__$1 = this;
return self__.meta43835;
});

cljs.core.async.t_cljs$core$async43834.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async43834.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43834.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43834.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async43834.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43834.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async43834.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async43834.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43835","meta43835",809607743,null)], null);
});

cljs.core.async.t_cljs$core$async43834.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43834.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43834";

cljs.core.async.t_cljs$core$async43834.cljs$lang$ctorPrWriter = (function (this__37378__auto__,writer__37379__auto__,opt__37380__auto__){
return cljs.core._write.call(null,writer__37379__auto__,"cljs.core.async/t_cljs$core$async43834");
});

cljs.core.async.__GT_t_cljs$core$async43834 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43834(filter_GT___$1,p__$1,ch__$1,meta43835){
return (new cljs.core.async.t_cljs$core$async43834(filter_GT___$1,p__$1,ch__$1,meta43835));
});

}

return (new cljs.core.async.t_cljs$core$async43834(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args43837 = [];
var len__37847__auto___43881 = arguments.length;
var i__37848__auto___43882 = (0);
while(true){
if((i__37848__auto___43882 < len__37847__auto___43881)){
args43837.push((arguments[i__37848__auto___43882]));

var G__43883 = (i__37848__auto___43882 + (1));
i__37848__auto___43882 = G__43883;
continue;
} else {
}
break;
}

var G__43839 = args43837.length;
switch (G__43839) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43837.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41583__auto___43885 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41583__auto___43885,out){
return (function (){
var f__41584__auto__ = (function (){var switch__41471__auto__ = ((function (c__41583__auto___43885,out){
return (function (state_43860){
var state_val_43861 = (state_43860[(1)]);
if((state_val_43861 === (7))){
var inst_43856 = (state_43860[(2)]);
var state_43860__$1 = state_43860;
var statearr_43862_43886 = state_43860__$1;
(statearr_43862_43886[(2)] = inst_43856);

(statearr_43862_43886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43861 === (1))){
var state_43860__$1 = state_43860;
var statearr_43863_43887 = state_43860__$1;
(statearr_43863_43887[(2)] = null);

(statearr_43863_43887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43861 === (4))){
var inst_43842 = (state_43860[(7)]);
var inst_43842__$1 = (state_43860[(2)]);
var inst_43843 = (inst_43842__$1 == null);
var state_43860__$1 = (function (){var statearr_43864 = state_43860;
(statearr_43864[(7)] = inst_43842__$1);

return statearr_43864;
})();
if(cljs.core.truth_(inst_43843)){
var statearr_43865_43888 = state_43860__$1;
(statearr_43865_43888[(1)] = (5));

} else {
var statearr_43866_43889 = state_43860__$1;
(statearr_43866_43889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43861 === (6))){
var inst_43842 = (state_43860[(7)]);
var inst_43847 = p.call(null,inst_43842);
var state_43860__$1 = state_43860;
if(cljs.core.truth_(inst_43847)){
var statearr_43867_43890 = state_43860__$1;
(statearr_43867_43890[(1)] = (8));

} else {
var statearr_43868_43891 = state_43860__$1;
(statearr_43868_43891[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43861 === (3))){
var inst_43858 = (state_43860[(2)]);
var state_43860__$1 = state_43860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43860__$1,inst_43858);
} else {
if((state_val_43861 === (2))){
var state_43860__$1 = state_43860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43860__$1,(4),ch);
} else {
if((state_val_43861 === (11))){
var inst_43850 = (state_43860[(2)]);
var state_43860__$1 = state_43860;
var statearr_43869_43892 = state_43860__$1;
(statearr_43869_43892[(2)] = inst_43850);

(statearr_43869_43892[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43861 === (9))){
var state_43860__$1 = state_43860;
var statearr_43870_43893 = state_43860__$1;
(statearr_43870_43893[(2)] = null);

(statearr_43870_43893[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43861 === (5))){
var inst_43845 = cljs.core.async.close_BANG_.call(null,out);
var state_43860__$1 = state_43860;
var statearr_43871_43894 = state_43860__$1;
(statearr_43871_43894[(2)] = inst_43845);

(statearr_43871_43894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43861 === (10))){
var inst_43853 = (state_43860[(2)]);
var state_43860__$1 = (function (){var statearr_43872 = state_43860;
(statearr_43872[(8)] = inst_43853);

return statearr_43872;
})();
var statearr_43873_43895 = state_43860__$1;
(statearr_43873_43895[(2)] = null);

(statearr_43873_43895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43861 === (8))){
var inst_43842 = (state_43860[(7)]);
var state_43860__$1 = state_43860;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43860__$1,(11),out,inst_43842);
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
});})(c__41583__auto___43885,out))
;
return ((function (switch__41471__auto__,c__41583__auto___43885,out){
return (function() {
var cljs$core$async$state_machine__41472__auto__ = null;
var cljs$core$async$state_machine__41472__auto____0 = (function (){
var statearr_43877 = [null,null,null,null,null,null,null,null,null];
(statearr_43877[(0)] = cljs$core$async$state_machine__41472__auto__);

(statearr_43877[(1)] = (1));

return statearr_43877;
});
var cljs$core$async$state_machine__41472__auto____1 = (function (state_43860){
while(true){
var ret_value__41473__auto__ = (function (){try{while(true){
var result__41474__auto__ = switch__41471__auto__.call(null,state_43860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41474__auto__;
}
break;
}
}catch (e43878){if((e43878 instanceof Object)){
var ex__41475__auto__ = e43878;
var statearr_43879_43896 = state_43860;
(statearr_43879_43896[(5)] = ex__41475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43897 = state_43860;
state_43860 = G__43897;
continue;
} else {
return ret_value__41473__auto__;
}
break;
}
});
cljs$core$async$state_machine__41472__auto__ = function(state_43860){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41472__auto____1.call(this,state_43860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41472__auto____0;
cljs$core$async$state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41472__auto____1;
return cljs$core$async$state_machine__41472__auto__;
})()
;})(switch__41471__auto__,c__41583__auto___43885,out))
})();
var state__41585__auto__ = (function (){var statearr_43880 = f__41584__auto__.call(null);
(statearr_43880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41583__auto___43885);

return statearr_43880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41585__auto__);
});})(c__41583__auto___43885,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args43898 = [];
var len__37847__auto___43901 = arguments.length;
var i__37848__auto___43902 = (0);
while(true){
if((i__37848__auto___43902 < len__37847__auto___43901)){
args43898.push((arguments[i__37848__auto___43902]));

var G__43903 = (i__37848__auto___43902 + (1));
i__37848__auto___43902 = G__43903;
continue;
} else {
}
break;
}

var G__43900 = args43898.length;
switch (G__43900) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43898.length)].join('')));

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
var c__41583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41583__auto__){
return (function (){
var f__41584__auto__ = (function (){var switch__41471__auto__ = ((function (c__41583__auto__){
return (function (state_44070){
var state_val_44071 = (state_44070[(1)]);
if((state_val_44071 === (7))){
var inst_44066 = (state_44070[(2)]);
var state_44070__$1 = state_44070;
var statearr_44072_44113 = state_44070__$1;
(statearr_44072_44113[(2)] = inst_44066);

(statearr_44072_44113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44071 === (20))){
var inst_44036 = (state_44070[(7)]);
var inst_44047 = (state_44070[(2)]);
var inst_44048 = cljs.core.next.call(null,inst_44036);
var inst_44022 = inst_44048;
var inst_44023 = null;
var inst_44024 = (0);
var inst_44025 = (0);
var state_44070__$1 = (function (){var statearr_44073 = state_44070;
(statearr_44073[(8)] = inst_44025);

(statearr_44073[(9)] = inst_44024);

(statearr_44073[(10)] = inst_44023);

(statearr_44073[(11)] = inst_44022);

(statearr_44073[(12)] = inst_44047);

return statearr_44073;
})();
var statearr_44074_44114 = state_44070__$1;
(statearr_44074_44114[(2)] = null);

(statearr_44074_44114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44071 === (1))){
var state_44070__$1 = state_44070;
var statearr_44075_44115 = state_44070__$1;
(statearr_44075_44115[(2)] = null);

(statearr_44075_44115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44071 === (4))){
var inst_44011 = (state_44070[(13)]);
var inst_44011__$1 = (state_44070[(2)]);
var inst_44012 = (inst_44011__$1 == null);
var state_44070__$1 = (function (){var statearr_44076 = state_44070;
(statearr_44076[(13)] = inst_44011__$1);

return statearr_44076;
})();
if(cljs.core.truth_(inst_44012)){
var statearr_44077_44116 = state_44070__$1;
(statearr_44077_44116[(1)] = (5));

} else {
var statearr_44078_44117 = state_44070__$1;
(statearr_44078_44117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44071 === (15))){
var state_44070__$1 = state_44070;
var statearr_44082_44118 = state_44070__$1;
(statearr_44082_44118[(2)] = null);

(statearr_44082_44118[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44071 === (21))){
var state_44070__$1 = state_44070;
var statearr_44083_44119 = state_44070__$1;
(statearr_44083_44119[(2)] = null);

(statearr_44083_44119[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44071 === (13))){
var inst_44025 = (state_44070[(8)]);
var inst_44024 = (state_44070[(9)]);
var inst_44023 = (state_44070[(10)]);
var inst_44022 = (state_44070[(11)]);
var inst_44032 = (state_44070[(2)]);
var inst_44033 = (inst_44025 + (1));
var tmp44079 = inst_44024;
var tmp44080 = inst_44023;
var tmp44081 = inst_44022;
var inst_44022__$1 = tmp44081;
var inst_44023__$1 = tmp44080;
var inst_44024__$1 = tmp44079;
var inst_44025__$1 = inst_44033;
var state_44070__$1 = (function (){var statearr_44084 = state_44070;
(statearr_44084[(8)] = inst_44025__$1);

(statearr_44084[(9)] = inst_44024__$1);

(statearr_44084[(10)] = inst_44023__$1);

(statearr_44084[(11)] = inst_44022__$1);

(statearr_44084[(14)] = inst_44032);

return statearr_44084;
})();
var statearr_44085_44120 = state_44070__$1;
(statearr_44085_44120[(2)] = null);

(statearr_44085_44120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44071 === (22))){
var state_44070__$1 = state_44070;
var statearr_44086_44121 = state_44070__$1;
(statearr_44086_44121[(2)] = null);

(statearr_44086_44121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44071 === (6))){
var inst_44011 = (state_44070[(13)]);
var inst_44020 = f.call(null,inst_44011);
var inst_44021 = cljs.core.seq.call(null,inst_44020);
var inst_44022 = inst_44021;
var inst_44023 = null;
var inst_44024 = (0);
var inst_44025 = (0);
var state_44070__$1 = (function (){var statearr_44087 = state_44070;
(statearr_44087[(8)] = inst_44025);

(statearr_44087[(9)] = inst_44024);

(statearr_44087[(10)] = inst_44023);

(statearr_44087[(11)] = inst_44022);

return statearr_44087;
})();
var statearr_44088_44122 = state_44070__$1;
(statearr_44088_44122[(2)] = null);

(statearr_44088_44122[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44071 === (17))){
var inst_44036 = (state_44070[(7)]);
var inst_44040 = cljs.core.chunk_first.call(null,inst_44036);
var inst_44041 = cljs.core.chunk_rest.call(null,inst_44036);
var inst_44042 = cljs.core.count.call(null,inst_44040);
var inst_44022 = inst_44041;
var inst_44023 = inst_44040;
var inst_44024 = inst_44042;
var inst_44025 = (0);
var state_44070__$1 = (function (){var statearr_44089 = state_44070;
(statearr_44089[(8)] = inst_44025);

(statearr_44089[(9)] = inst_44024);

(statearr_44089[(10)] = inst_44023);

(statearr_44089[(11)] = inst_44022);

return statearr_44089;
})();
var statearr_44090_44123 = state_44070__$1;
(statearr_44090_44123[(2)] = null);

(statearr_44090_44123[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44071 === (3))){
var inst_44068 = (state_44070[(2)]);
var state_44070__$1 = state_44070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44070__$1,inst_44068);
} else {
if((state_val_44071 === (12))){
var inst_44056 = (state_44070[(2)]);
var state_44070__$1 = state_44070;
var statearr_44091_44124 = state_44070__$1;
(statearr_44091_44124[(2)] = inst_44056);

(statearr_44091_44124[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44071 === (2))){
var state_44070__$1 = state_44070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44070__$1,(4),in$);
} else {
if((state_val_44071 === (23))){
var inst_44064 = (state_44070[(2)]);
var state_44070__$1 = state_44070;
var statearr_44092_44125 = state_44070__$1;
(statearr_44092_44125[(2)] = inst_44064);

(statearr_44092_44125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44071 === (19))){
var inst_44051 = (state_44070[(2)]);
var state_44070__$1 = state_44070;
var statearr_44093_44126 = state_44070__$1;
(statearr_44093_44126[(2)] = inst_44051);

(statearr_44093_44126[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44071 === (11))){
var inst_44022 = (state_44070[(11)]);
var inst_44036 = (state_44070[(7)]);
var inst_44036__$1 = cljs.core.seq.call(null,inst_44022);
var state_44070__$1 = (function (){var statearr_44094 = state_44070;
(statearr_44094[(7)] = inst_44036__$1);

return statearr_44094;
})();
if(inst_44036__$1){
var statearr_44095_44127 = state_44070__$1;
(statearr_44095_44127[(1)] = (14));

} else {
var statearr_44096_44128 = state_44070__$1;
(statearr_44096_44128[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44071 === (9))){
var inst_44058 = (state_44070[(2)]);
var inst_44059 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_44070__$1 = (function (){var statearr_44097 = state_44070;
(statearr_44097[(15)] = inst_44058);

return statearr_44097;
})();
if(cljs.core.truth_(inst_44059)){
var statearr_44098_44129 = state_44070__$1;
(statearr_44098_44129[(1)] = (21));

} else {
var statearr_44099_44130 = state_44070__$1;
(statearr_44099_44130[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44071 === (5))){
var inst_44014 = cljs.core.async.close_BANG_.call(null,out);
var state_44070__$1 = state_44070;
var statearr_44100_44131 = state_44070__$1;
(statearr_44100_44131[(2)] = inst_44014);

(statearr_44100_44131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44071 === (14))){
var inst_44036 = (state_44070[(7)]);
var inst_44038 = cljs.core.chunked_seq_QMARK_.call(null,inst_44036);
var state_44070__$1 = state_44070;
if(inst_44038){
var statearr_44101_44132 = state_44070__$1;
(statearr_44101_44132[(1)] = (17));

} else {
var statearr_44102_44133 = state_44070__$1;
(statearr_44102_44133[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44071 === (16))){
var inst_44054 = (state_44070[(2)]);
var state_44070__$1 = state_44070;
var statearr_44103_44134 = state_44070__$1;
(statearr_44103_44134[(2)] = inst_44054);

(statearr_44103_44134[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44071 === (10))){
var inst_44025 = (state_44070[(8)]);
var inst_44023 = (state_44070[(10)]);
var inst_44030 = cljs.core._nth.call(null,inst_44023,inst_44025);
var state_44070__$1 = state_44070;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44070__$1,(13),out,inst_44030);
} else {
if((state_val_44071 === (18))){
var inst_44036 = (state_44070[(7)]);
var inst_44045 = cljs.core.first.call(null,inst_44036);
var state_44070__$1 = state_44070;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44070__$1,(20),out,inst_44045);
} else {
if((state_val_44071 === (8))){
var inst_44025 = (state_44070[(8)]);
var inst_44024 = (state_44070[(9)]);
var inst_44027 = (inst_44025 < inst_44024);
var inst_44028 = inst_44027;
var state_44070__$1 = state_44070;
if(cljs.core.truth_(inst_44028)){
var statearr_44104_44135 = state_44070__$1;
(statearr_44104_44135[(1)] = (10));

} else {
var statearr_44105_44136 = state_44070__$1;
(statearr_44105_44136[(1)] = (11));

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
});})(c__41583__auto__))
;
return ((function (switch__41471__auto__,c__41583__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__41472__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__41472__auto____0 = (function (){
var statearr_44109 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44109[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__41472__auto__);

(statearr_44109[(1)] = (1));

return statearr_44109;
});
var cljs$core$async$mapcat_STAR__$_state_machine__41472__auto____1 = (function (state_44070){
while(true){
var ret_value__41473__auto__ = (function (){try{while(true){
var result__41474__auto__ = switch__41471__auto__.call(null,state_44070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41474__auto__;
}
break;
}
}catch (e44110){if((e44110 instanceof Object)){
var ex__41475__auto__ = e44110;
var statearr_44111_44137 = state_44070;
(statearr_44111_44137[(5)] = ex__41475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44138 = state_44070;
state_44070 = G__44138;
continue;
} else {
return ret_value__41473__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__41472__auto__ = function(state_44070){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__41472__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__41472__auto____1.call(this,state_44070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__41472__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__41472__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__41472__auto__;
})()
;})(switch__41471__auto__,c__41583__auto__))
})();
var state__41585__auto__ = (function (){var statearr_44112 = f__41584__auto__.call(null);
(statearr_44112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41583__auto__);

return statearr_44112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41585__auto__);
});})(c__41583__auto__))
);

return c__41583__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args44139 = [];
var len__37847__auto___44142 = arguments.length;
var i__37848__auto___44143 = (0);
while(true){
if((i__37848__auto___44143 < len__37847__auto___44142)){
args44139.push((arguments[i__37848__auto___44143]));

var G__44144 = (i__37848__auto___44143 + (1));
i__37848__auto___44143 = G__44144;
continue;
} else {
}
break;
}

var G__44141 = args44139.length;
switch (G__44141) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44139.length)].join('')));

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
var args44146 = [];
var len__37847__auto___44149 = arguments.length;
var i__37848__auto___44150 = (0);
while(true){
if((i__37848__auto___44150 < len__37847__auto___44149)){
args44146.push((arguments[i__37848__auto___44150]));

var G__44151 = (i__37848__auto___44150 + (1));
i__37848__auto___44150 = G__44151;
continue;
} else {
}
break;
}

var G__44148 = args44146.length;
switch (G__44148) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44146.length)].join('')));

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
var args44153 = [];
var len__37847__auto___44204 = arguments.length;
var i__37848__auto___44205 = (0);
while(true){
if((i__37848__auto___44205 < len__37847__auto___44204)){
args44153.push((arguments[i__37848__auto___44205]));

var G__44206 = (i__37848__auto___44205 + (1));
i__37848__auto___44205 = G__44206;
continue;
} else {
}
break;
}

var G__44155 = args44153.length;
switch (G__44155) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44153.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41583__auto___44208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41583__auto___44208,out){
return (function (){
var f__41584__auto__ = (function (){var switch__41471__auto__ = ((function (c__41583__auto___44208,out){
return (function (state_44179){
var state_val_44180 = (state_44179[(1)]);
if((state_val_44180 === (7))){
var inst_44174 = (state_44179[(2)]);
var state_44179__$1 = state_44179;
var statearr_44181_44209 = state_44179__$1;
(statearr_44181_44209[(2)] = inst_44174);

(statearr_44181_44209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44180 === (1))){
var inst_44156 = null;
var state_44179__$1 = (function (){var statearr_44182 = state_44179;
(statearr_44182[(7)] = inst_44156);

return statearr_44182;
})();
var statearr_44183_44210 = state_44179__$1;
(statearr_44183_44210[(2)] = null);

(statearr_44183_44210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44180 === (4))){
var inst_44159 = (state_44179[(8)]);
var inst_44159__$1 = (state_44179[(2)]);
var inst_44160 = (inst_44159__$1 == null);
var inst_44161 = cljs.core.not.call(null,inst_44160);
var state_44179__$1 = (function (){var statearr_44184 = state_44179;
(statearr_44184[(8)] = inst_44159__$1);

return statearr_44184;
})();
if(inst_44161){
var statearr_44185_44211 = state_44179__$1;
(statearr_44185_44211[(1)] = (5));

} else {
var statearr_44186_44212 = state_44179__$1;
(statearr_44186_44212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44180 === (6))){
var state_44179__$1 = state_44179;
var statearr_44187_44213 = state_44179__$1;
(statearr_44187_44213[(2)] = null);

(statearr_44187_44213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44180 === (3))){
var inst_44176 = (state_44179[(2)]);
var inst_44177 = cljs.core.async.close_BANG_.call(null,out);
var state_44179__$1 = (function (){var statearr_44188 = state_44179;
(statearr_44188[(9)] = inst_44176);

return statearr_44188;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44179__$1,inst_44177);
} else {
if((state_val_44180 === (2))){
var state_44179__$1 = state_44179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44179__$1,(4),ch);
} else {
if((state_val_44180 === (11))){
var inst_44159 = (state_44179[(8)]);
var inst_44168 = (state_44179[(2)]);
var inst_44156 = inst_44159;
var state_44179__$1 = (function (){var statearr_44189 = state_44179;
(statearr_44189[(10)] = inst_44168);

(statearr_44189[(7)] = inst_44156);

return statearr_44189;
})();
var statearr_44190_44214 = state_44179__$1;
(statearr_44190_44214[(2)] = null);

(statearr_44190_44214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44180 === (9))){
var inst_44159 = (state_44179[(8)]);
var state_44179__$1 = state_44179;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44179__$1,(11),out,inst_44159);
} else {
if((state_val_44180 === (5))){
var inst_44159 = (state_44179[(8)]);
var inst_44156 = (state_44179[(7)]);
var inst_44163 = cljs.core._EQ_.call(null,inst_44159,inst_44156);
var state_44179__$1 = state_44179;
if(inst_44163){
var statearr_44192_44215 = state_44179__$1;
(statearr_44192_44215[(1)] = (8));

} else {
var statearr_44193_44216 = state_44179__$1;
(statearr_44193_44216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44180 === (10))){
var inst_44171 = (state_44179[(2)]);
var state_44179__$1 = state_44179;
var statearr_44194_44217 = state_44179__$1;
(statearr_44194_44217[(2)] = inst_44171);

(statearr_44194_44217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44180 === (8))){
var inst_44156 = (state_44179[(7)]);
var tmp44191 = inst_44156;
var inst_44156__$1 = tmp44191;
var state_44179__$1 = (function (){var statearr_44195 = state_44179;
(statearr_44195[(7)] = inst_44156__$1);

return statearr_44195;
})();
var statearr_44196_44218 = state_44179__$1;
(statearr_44196_44218[(2)] = null);

(statearr_44196_44218[(1)] = (2));


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
});})(c__41583__auto___44208,out))
;
return ((function (switch__41471__auto__,c__41583__auto___44208,out){
return (function() {
var cljs$core$async$state_machine__41472__auto__ = null;
var cljs$core$async$state_machine__41472__auto____0 = (function (){
var statearr_44200 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44200[(0)] = cljs$core$async$state_machine__41472__auto__);

(statearr_44200[(1)] = (1));

return statearr_44200;
});
var cljs$core$async$state_machine__41472__auto____1 = (function (state_44179){
while(true){
var ret_value__41473__auto__ = (function (){try{while(true){
var result__41474__auto__ = switch__41471__auto__.call(null,state_44179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41474__auto__;
}
break;
}
}catch (e44201){if((e44201 instanceof Object)){
var ex__41475__auto__ = e44201;
var statearr_44202_44219 = state_44179;
(statearr_44202_44219[(5)] = ex__41475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44220 = state_44179;
state_44179 = G__44220;
continue;
} else {
return ret_value__41473__auto__;
}
break;
}
});
cljs$core$async$state_machine__41472__auto__ = function(state_44179){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41472__auto____1.call(this,state_44179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41472__auto____0;
cljs$core$async$state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41472__auto____1;
return cljs$core$async$state_machine__41472__auto__;
})()
;})(switch__41471__auto__,c__41583__auto___44208,out))
})();
var state__41585__auto__ = (function (){var statearr_44203 = f__41584__auto__.call(null);
(statearr_44203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41583__auto___44208);

return statearr_44203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41585__auto__);
});})(c__41583__auto___44208,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args44221 = [];
var len__37847__auto___44291 = arguments.length;
var i__37848__auto___44292 = (0);
while(true){
if((i__37848__auto___44292 < len__37847__auto___44291)){
args44221.push((arguments[i__37848__auto___44292]));

var G__44293 = (i__37848__auto___44292 + (1));
i__37848__auto___44292 = G__44293;
continue;
} else {
}
break;
}

var G__44223 = args44221.length;
switch (G__44223) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44221.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41583__auto___44295 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41583__auto___44295,out){
return (function (){
var f__41584__auto__ = (function (){var switch__41471__auto__ = ((function (c__41583__auto___44295,out){
return (function (state_44261){
var state_val_44262 = (state_44261[(1)]);
if((state_val_44262 === (7))){
var inst_44257 = (state_44261[(2)]);
var state_44261__$1 = state_44261;
var statearr_44263_44296 = state_44261__$1;
(statearr_44263_44296[(2)] = inst_44257);

(statearr_44263_44296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44262 === (1))){
var inst_44224 = (new Array(n));
var inst_44225 = inst_44224;
var inst_44226 = (0);
var state_44261__$1 = (function (){var statearr_44264 = state_44261;
(statearr_44264[(7)] = inst_44225);

(statearr_44264[(8)] = inst_44226);

return statearr_44264;
})();
var statearr_44265_44297 = state_44261__$1;
(statearr_44265_44297[(2)] = null);

(statearr_44265_44297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44262 === (4))){
var inst_44229 = (state_44261[(9)]);
var inst_44229__$1 = (state_44261[(2)]);
var inst_44230 = (inst_44229__$1 == null);
var inst_44231 = cljs.core.not.call(null,inst_44230);
var state_44261__$1 = (function (){var statearr_44266 = state_44261;
(statearr_44266[(9)] = inst_44229__$1);

return statearr_44266;
})();
if(inst_44231){
var statearr_44267_44298 = state_44261__$1;
(statearr_44267_44298[(1)] = (5));

} else {
var statearr_44268_44299 = state_44261__$1;
(statearr_44268_44299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44262 === (15))){
var inst_44251 = (state_44261[(2)]);
var state_44261__$1 = state_44261;
var statearr_44269_44300 = state_44261__$1;
(statearr_44269_44300[(2)] = inst_44251);

(statearr_44269_44300[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44262 === (13))){
var state_44261__$1 = state_44261;
var statearr_44270_44301 = state_44261__$1;
(statearr_44270_44301[(2)] = null);

(statearr_44270_44301[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44262 === (6))){
var inst_44226 = (state_44261[(8)]);
var inst_44247 = (inst_44226 > (0));
var state_44261__$1 = state_44261;
if(cljs.core.truth_(inst_44247)){
var statearr_44271_44302 = state_44261__$1;
(statearr_44271_44302[(1)] = (12));

} else {
var statearr_44272_44303 = state_44261__$1;
(statearr_44272_44303[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44262 === (3))){
var inst_44259 = (state_44261[(2)]);
var state_44261__$1 = state_44261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44261__$1,inst_44259);
} else {
if((state_val_44262 === (12))){
var inst_44225 = (state_44261[(7)]);
var inst_44249 = cljs.core.vec.call(null,inst_44225);
var state_44261__$1 = state_44261;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44261__$1,(15),out,inst_44249);
} else {
if((state_val_44262 === (2))){
var state_44261__$1 = state_44261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44261__$1,(4),ch);
} else {
if((state_val_44262 === (11))){
var inst_44241 = (state_44261[(2)]);
var inst_44242 = (new Array(n));
var inst_44225 = inst_44242;
var inst_44226 = (0);
var state_44261__$1 = (function (){var statearr_44273 = state_44261;
(statearr_44273[(7)] = inst_44225);

(statearr_44273[(10)] = inst_44241);

(statearr_44273[(8)] = inst_44226);

return statearr_44273;
})();
var statearr_44274_44304 = state_44261__$1;
(statearr_44274_44304[(2)] = null);

(statearr_44274_44304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44262 === (9))){
var inst_44225 = (state_44261[(7)]);
var inst_44239 = cljs.core.vec.call(null,inst_44225);
var state_44261__$1 = state_44261;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44261__$1,(11),out,inst_44239);
} else {
if((state_val_44262 === (5))){
var inst_44229 = (state_44261[(9)]);
var inst_44225 = (state_44261[(7)]);
var inst_44226 = (state_44261[(8)]);
var inst_44234 = (state_44261[(11)]);
var inst_44233 = (inst_44225[inst_44226] = inst_44229);
var inst_44234__$1 = (inst_44226 + (1));
var inst_44235 = (inst_44234__$1 < n);
var state_44261__$1 = (function (){var statearr_44275 = state_44261;
(statearr_44275[(12)] = inst_44233);

(statearr_44275[(11)] = inst_44234__$1);

return statearr_44275;
})();
if(cljs.core.truth_(inst_44235)){
var statearr_44276_44305 = state_44261__$1;
(statearr_44276_44305[(1)] = (8));

} else {
var statearr_44277_44306 = state_44261__$1;
(statearr_44277_44306[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44262 === (14))){
var inst_44254 = (state_44261[(2)]);
var inst_44255 = cljs.core.async.close_BANG_.call(null,out);
var state_44261__$1 = (function (){var statearr_44279 = state_44261;
(statearr_44279[(13)] = inst_44254);

return statearr_44279;
})();
var statearr_44280_44307 = state_44261__$1;
(statearr_44280_44307[(2)] = inst_44255);

(statearr_44280_44307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44262 === (10))){
var inst_44245 = (state_44261[(2)]);
var state_44261__$1 = state_44261;
var statearr_44281_44308 = state_44261__$1;
(statearr_44281_44308[(2)] = inst_44245);

(statearr_44281_44308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44262 === (8))){
var inst_44225 = (state_44261[(7)]);
var inst_44234 = (state_44261[(11)]);
var tmp44278 = inst_44225;
var inst_44225__$1 = tmp44278;
var inst_44226 = inst_44234;
var state_44261__$1 = (function (){var statearr_44282 = state_44261;
(statearr_44282[(7)] = inst_44225__$1);

(statearr_44282[(8)] = inst_44226);

return statearr_44282;
})();
var statearr_44283_44309 = state_44261__$1;
(statearr_44283_44309[(2)] = null);

(statearr_44283_44309[(1)] = (2));


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
});})(c__41583__auto___44295,out))
;
return ((function (switch__41471__auto__,c__41583__auto___44295,out){
return (function() {
var cljs$core$async$state_machine__41472__auto__ = null;
var cljs$core$async$state_machine__41472__auto____0 = (function (){
var statearr_44287 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44287[(0)] = cljs$core$async$state_machine__41472__auto__);

(statearr_44287[(1)] = (1));

return statearr_44287;
});
var cljs$core$async$state_machine__41472__auto____1 = (function (state_44261){
while(true){
var ret_value__41473__auto__ = (function (){try{while(true){
var result__41474__auto__ = switch__41471__auto__.call(null,state_44261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41474__auto__;
}
break;
}
}catch (e44288){if((e44288 instanceof Object)){
var ex__41475__auto__ = e44288;
var statearr_44289_44310 = state_44261;
(statearr_44289_44310[(5)] = ex__41475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44311 = state_44261;
state_44261 = G__44311;
continue;
} else {
return ret_value__41473__auto__;
}
break;
}
});
cljs$core$async$state_machine__41472__auto__ = function(state_44261){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41472__auto____1.call(this,state_44261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41472__auto____0;
cljs$core$async$state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41472__auto____1;
return cljs$core$async$state_machine__41472__auto__;
})()
;})(switch__41471__auto__,c__41583__auto___44295,out))
})();
var state__41585__auto__ = (function (){var statearr_44290 = f__41584__auto__.call(null);
(statearr_44290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41583__auto___44295);

return statearr_44290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41585__auto__);
});})(c__41583__auto___44295,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args44312 = [];
var len__37847__auto___44386 = arguments.length;
var i__37848__auto___44387 = (0);
while(true){
if((i__37848__auto___44387 < len__37847__auto___44386)){
args44312.push((arguments[i__37848__auto___44387]));

var G__44388 = (i__37848__auto___44387 + (1));
i__37848__auto___44387 = G__44388;
continue;
} else {
}
break;
}

var G__44314 = args44312.length;
switch (G__44314) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44312.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41583__auto___44390 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41583__auto___44390,out){
return (function (){
var f__41584__auto__ = (function (){var switch__41471__auto__ = ((function (c__41583__auto___44390,out){
return (function (state_44356){
var state_val_44357 = (state_44356[(1)]);
if((state_val_44357 === (7))){
var inst_44352 = (state_44356[(2)]);
var state_44356__$1 = state_44356;
var statearr_44358_44391 = state_44356__$1;
(statearr_44358_44391[(2)] = inst_44352);

(statearr_44358_44391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44357 === (1))){
var inst_44315 = [];
var inst_44316 = inst_44315;
var inst_44317 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_44356__$1 = (function (){var statearr_44359 = state_44356;
(statearr_44359[(7)] = inst_44316);

(statearr_44359[(8)] = inst_44317);

return statearr_44359;
})();
var statearr_44360_44392 = state_44356__$1;
(statearr_44360_44392[(2)] = null);

(statearr_44360_44392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44357 === (4))){
var inst_44320 = (state_44356[(9)]);
var inst_44320__$1 = (state_44356[(2)]);
var inst_44321 = (inst_44320__$1 == null);
var inst_44322 = cljs.core.not.call(null,inst_44321);
var state_44356__$1 = (function (){var statearr_44361 = state_44356;
(statearr_44361[(9)] = inst_44320__$1);

return statearr_44361;
})();
if(inst_44322){
var statearr_44362_44393 = state_44356__$1;
(statearr_44362_44393[(1)] = (5));

} else {
var statearr_44363_44394 = state_44356__$1;
(statearr_44363_44394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44357 === (15))){
var inst_44346 = (state_44356[(2)]);
var state_44356__$1 = state_44356;
var statearr_44364_44395 = state_44356__$1;
(statearr_44364_44395[(2)] = inst_44346);

(statearr_44364_44395[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44357 === (13))){
var state_44356__$1 = state_44356;
var statearr_44365_44396 = state_44356__$1;
(statearr_44365_44396[(2)] = null);

(statearr_44365_44396[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44357 === (6))){
var inst_44316 = (state_44356[(7)]);
var inst_44341 = inst_44316.length;
var inst_44342 = (inst_44341 > (0));
var state_44356__$1 = state_44356;
if(cljs.core.truth_(inst_44342)){
var statearr_44366_44397 = state_44356__$1;
(statearr_44366_44397[(1)] = (12));

} else {
var statearr_44367_44398 = state_44356__$1;
(statearr_44367_44398[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44357 === (3))){
var inst_44354 = (state_44356[(2)]);
var state_44356__$1 = state_44356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44356__$1,inst_44354);
} else {
if((state_val_44357 === (12))){
var inst_44316 = (state_44356[(7)]);
var inst_44344 = cljs.core.vec.call(null,inst_44316);
var state_44356__$1 = state_44356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44356__$1,(15),out,inst_44344);
} else {
if((state_val_44357 === (2))){
var state_44356__$1 = state_44356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44356__$1,(4),ch);
} else {
if((state_val_44357 === (11))){
var inst_44320 = (state_44356[(9)]);
var inst_44324 = (state_44356[(10)]);
var inst_44334 = (state_44356[(2)]);
var inst_44335 = [];
var inst_44336 = inst_44335.push(inst_44320);
var inst_44316 = inst_44335;
var inst_44317 = inst_44324;
var state_44356__$1 = (function (){var statearr_44368 = state_44356;
(statearr_44368[(11)] = inst_44334);

(statearr_44368[(7)] = inst_44316);

(statearr_44368[(12)] = inst_44336);

(statearr_44368[(8)] = inst_44317);

return statearr_44368;
})();
var statearr_44369_44399 = state_44356__$1;
(statearr_44369_44399[(2)] = null);

(statearr_44369_44399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44357 === (9))){
var inst_44316 = (state_44356[(7)]);
var inst_44332 = cljs.core.vec.call(null,inst_44316);
var state_44356__$1 = state_44356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44356__$1,(11),out,inst_44332);
} else {
if((state_val_44357 === (5))){
var inst_44320 = (state_44356[(9)]);
var inst_44317 = (state_44356[(8)]);
var inst_44324 = (state_44356[(10)]);
var inst_44324__$1 = f.call(null,inst_44320);
var inst_44325 = cljs.core._EQ_.call(null,inst_44324__$1,inst_44317);
var inst_44326 = cljs.core.keyword_identical_QMARK_.call(null,inst_44317,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_44327 = (inst_44325) || (inst_44326);
var state_44356__$1 = (function (){var statearr_44370 = state_44356;
(statearr_44370[(10)] = inst_44324__$1);

return statearr_44370;
})();
if(cljs.core.truth_(inst_44327)){
var statearr_44371_44400 = state_44356__$1;
(statearr_44371_44400[(1)] = (8));

} else {
var statearr_44372_44401 = state_44356__$1;
(statearr_44372_44401[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44357 === (14))){
var inst_44349 = (state_44356[(2)]);
var inst_44350 = cljs.core.async.close_BANG_.call(null,out);
var state_44356__$1 = (function (){var statearr_44374 = state_44356;
(statearr_44374[(13)] = inst_44349);

return statearr_44374;
})();
var statearr_44375_44402 = state_44356__$1;
(statearr_44375_44402[(2)] = inst_44350);

(statearr_44375_44402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44357 === (10))){
var inst_44339 = (state_44356[(2)]);
var state_44356__$1 = state_44356;
var statearr_44376_44403 = state_44356__$1;
(statearr_44376_44403[(2)] = inst_44339);

(statearr_44376_44403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44357 === (8))){
var inst_44316 = (state_44356[(7)]);
var inst_44320 = (state_44356[(9)]);
var inst_44324 = (state_44356[(10)]);
var inst_44329 = inst_44316.push(inst_44320);
var tmp44373 = inst_44316;
var inst_44316__$1 = tmp44373;
var inst_44317 = inst_44324;
var state_44356__$1 = (function (){var statearr_44377 = state_44356;
(statearr_44377[(7)] = inst_44316__$1);

(statearr_44377[(14)] = inst_44329);

(statearr_44377[(8)] = inst_44317);

return statearr_44377;
})();
var statearr_44378_44404 = state_44356__$1;
(statearr_44378_44404[(2)] = null);

(statearr_44378_44404[(1)] = (2));


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
});})(c__41583__auto___44390,out))
;
return ((function (switch__41471__auto__,c__41583__auto___44390,out){
return (function() {
var cljs$core$async$state_machine__41472__auto__ = null;
var cljs$core$async$state_machine__41472__auto____0 = (function (){
var statearr_44382 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44382[(0)] = cljs$core$async$state_machine__41472__auto__);

(statearr_44382[(1)] = (1));

return statearr_44382;
});
var cljs$core$async$state_machine__41472__auto____1 = (function (state_44356){
while(true){
var ret_value__41473__auto__ = (function (){try{while(true){
var result__41474__auto__ = switch__41471__auto__.call(null,state_44356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41474__auto__;
}
break;
}
}catch (e44383){if((e44383 instanceof Object)){
var ex__41475__auto__ = e44383;
var statearr_44384_44405 = state_44356;
(statearr_44384_44405[(5)] = ex__41475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44406 = state_44356;
state_44356 = G__44406;
continue;
} else {
return ret_value__41473__auto__;
}
break;
}
});
cljs$core$async$state_machine__41472__auto__ = function(state_44356){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41472__auto____1.call(this,state_44356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41472__auto____0;
cljs$core$async$state_machine__41472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41472__auto____1;
return cljs$core$async$state_machine__41472__auto__;
})()
;})(switch__41471__auto__,c__41583__auto___44390,out))
})();
var state__41585__auto__ = (function (){var statearr_44385 = f__41584__auto__.call(null);
(statearr_44385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41583__auto___44390);

return statearr_44385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41585__auto__);
});})(c__41583__auto___44390,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map