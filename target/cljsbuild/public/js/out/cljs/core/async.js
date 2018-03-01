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
var args41665 = [];
var len__37833__auto___41671 = arguments.length;
var i__37834__auto___41672 = (0);
while(true){
if((i__37834__auto___41672 < len__37833__auto___41671)){
args41665.push((arguments[i__37834__auto___41672]));

var G__41673 = (i__37834__auto___41672 + (1));
i__37834__auto___41672 = G__41673;
continue;
} else {
}
break;
}

var G__41667 = args41665.length;
switch (G__41667) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41665.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async41668 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41668 = (function (f,blockable,meta41669){
this.f = f;
this.blockable = blockable;
this.meta41669 = meta41669;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41670,meta41669__$1){
var self__ = this;
var _41670__$1 = this;
return (new cljs.core.async.t_cljs$core$async41668(self__.f,self__.blockable,meta41669__$1));
});

cljs.core.async.t_cljs$core$async41668.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41670){
var self__ = this;
var _41670__$1 = this;
return self__.meta41669;
});

cljs.core.async.t_cljs$core$async41668.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async41668.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async41668.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async41668.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async41668.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta41669","meta41669",1261490300,null)], null);
});

cljs.core.async.t_cljs$core$async41668.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41668.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41668";

cljs.core.async.t_cljs$core$async41668.cljs$lang$ctorPrWriter = (function (this__37364__auto__,writer__37365__auto__,opt__37366__auto__){
return cljs.core._write.call(null,writer__37365__auto__,"cljs.core.async/t_cljs$core$async41668");
});

cljs.core.async.__GT_t_cljs$core$async41668 = (function cljs$core$async$__GT_t_cljs$core$async41668(f__$1,blockable__$1,meta41669){
return (new cljs.core.async.t_cljs$core$async41668(f__$1,blockable__$1,meta41669));
});

}

return (new cljs.core.async.t_cljs$core$async41668(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args41677 = [];
var len__37833__auto___41680 = arguments.length;
var i__37834__auto___41681 = (0);
while(true){
if((i__37834__auto___41681 < len__37833__auto___41680)){
args41677.push((arguments[i__37834__auto___41681]));

var G__41682 = (i__37834__auto___41681 + (1));
i__37834__auto___41681 = G__41682;
continue;
} else {
}
break;
}

var G__41679 = args41677.length;
switch (G__41679) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41677.length)].join('')));

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
var args41684 = [];
var len__37833__auto___41687 = arguments.length;
var i__37834__auto___41688 = (0);
while(true){
if((i__37834__auto___41688 < len__37833__auto___41687)){
args41684.push((arguments[i__37834__auto___41688]));

var G__41689 = (i__37834__auto___41688 + (1));
i__37834__auto___41688 = G__41689;
continue;
} else {
}
break;
}

var G__41686 = args41684.length;
switch (G__41686) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41684.length)].join('')));

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
var args41691 = [];
var len__37833__auto___41694 = arguments.length;
var i__37834__auto___41695 = (0);
while(true){
if((i__37834__auto___41695 < len__37833__auto___41694)){
args41691.push((arguments[i__37834__auto___41695]));

var G__41696 = (i__37834__auto___41695 + (1));
i__37834__auto___41695 = G__41696;
continue;
} else {
}
break;
}

var G__41693 = args41691.length;
switch (G__41693) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41691.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_41698 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_41698);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_41698,ret){
return (function (){
return fn1.call(null,val_41698);
});})(val_41698,ret))
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
var args41699 = [];
var len__37833__auto___41702 = arguments.length;
var i__37834__auto___41703 = (0);
while(true){
if((i__37834__auto___41703 < len__37833__auto___41702)){
args41699.push((arguments[i__37834__auto___41703]));

var G__41704 = (i__37834__auto___41703 + (1));
i__37834__auto___41703 = G__41704;
continue;
} else {
}
break;
}

var G__41701 = args41699.length;
switch (G__41701) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41699.length)].join('')));

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
var n__37673__auto___41706 = n;
var x_41707 = (0);
while(true){
if((x_41707 < n__37673__auto___41706)){
(a[x_41707] = (0));

var G__41708 = (x_41707 + (1));
x_41707 = G__41708;
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

var G__41709 = (i + (1));
i = G__41709;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async41713 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41713 = (function (alt_flag,flag,meta41714){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta41714 = meta41714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_41715,meta41714__$1){
var self__ = this;
var _41715__$1 = this;
return (new cljs.core.async.t_cljs$core$async41713(self__.alt_flag,self__.flag,meta41714__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async41713.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_41715){
var self__ = this;
var _41715__$1 = this;
return self__.meta41714;
});})(flag))
;

cljs.core.async.t_cljs$core$async41713.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async41713.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async41713.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async41713.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async41713.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta41714","meta41714",103162830,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async41713.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41713.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41713";

cljs.core.async.t_cljs$core$async41713.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__37364__auto__,writer__37365__auto__,opt__37366__auto__){
return cljs.core._write.call(null,writer__37365__auto__,"cljs.core.async/t_cljs$core$async41713");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async41713 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async41713(alt_flag__$1,flag__$1,meta41714){
return (new cljs.core.async.t_cljs$core$async41713(alt_flag__$1,flag__$1,meta41714));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async41713(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async41719 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41719 = (function (alt_handler,flag,cb,meta41720){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta41720 = meta41720;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41721,meta41720__$1){
var self__ = this;
var _41721__$1 = this;
return (new cljs.core.async.t_cljs$core$async41719(self__.alt_handler,self__.flag,self__.cb,meta41720__$1));
});

cljs.core.async.t_cljs$core$async41719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41721){
var self__ = this;
var _41721__$1 = this;
return self__.meta41720;
});

cljs.core.async.t_cljs$core$async41719.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async41719.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async41719.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async41719.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async41719.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta41720","meta41720",-338949751,null)], null);
});

cljs.core.async.t_cljs$core$async41719.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41719.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41719";

cljs.core.async.t_cljs$core$async41719.cljs$lang$ctorPrWriter = (function (this__37364__auto__,writer__37365__auto__,opt__37366__auto__){
return cljs.core._write.call(null,writer__37365__auto__,"cljs.core.async/t_cljs$core$async41719");
});

cljs.core.async.__GT_t_cljs$core$async41719 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async41719(alt_handler__$1,flag__$1,cb__$1,meta41720){
return (new cljs.core.async.t_cljs$core$async41719(alt_handler__$1,flag__$1,cb__$1,meta41720));
});

}

return (new cljs.core.async.t_cljs$core$async41719(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__41722_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41722_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__41723_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41723_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__36758__auto__ = wport;
if(cljs.core.truth_(or__36758__auto__)){
return or__36758__auto__;
} else {
return port;
}
})()], null));
} else {
var G__41724 = (i + (1));
i = G__41724;
continue;
}
} else {
return null;
}
break;
}
})();
var or__36758__auto__ = ret;
if(cljs.core.truth_(or__36758__auto__)){
return or__36758__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__36746__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__36746__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__36746__auto__;
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
var args__37840__auto__ = [];
var len__37833__auto___41730 = arguments.length;
var i__37834__auto___41731 = (0);
while(true){
if((i__37834__auto___41731 < len__37833__auto___41730)){
args__37840__auto__.push((arguments[i__37834__auto___41731]));

var G__41732 = (i__37834__auto___41731 + (1));
i__37834__auto___41731 = G__41732;
continue;
} else {
}
break;
}

var argseq__37841__auto__ = ((((1) < args__37840__auto__.length))?(new cljs.core.IndexedSeq(args__37840__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37841__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__41727){
var map__41728 = p__41727;
var map__41728__$1 = ((((!((map__41728 == null)))?((((map__41728.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41728.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41728):map__41728);
var opts = map__41728__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq41725){
var G__41726 = cljs.core.first.call(null,seq41725);
var seq41725__$1 = cljs.core.next.call(null,seq41725);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41726,seq41725__$1);
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
var args41733 = [];
var len__37833__auto___41783 = arguments.length;
var i__37834__auto___41784 = (0);
while(true){
if((i__37834__auto___41784 < len__37833__auto___41783)){
args41733.push((arguments[i__37834__auto___41784]));

var G__41785 = (i__37834__auto___41784 + (1));
i__37834__auto___41784 = G__41785;
continue;
} else {
}
break;
}

var G__41735 = args41733.length;
switch (G__41735) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41733.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__41620__auto___41787 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto___41787){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto___41787){
return (function (state_41759){
var state_val_41760 = (state_41759[(1)]);
if((state_val_41760 === (7))){
var inst_41755 = (state_41759[(2)]);
var state_41759__$1 = state_41759;
var statearr_41761_41788 = state_41759__$1;
(statearr_41761_41788[(2)] = inst_41755);

(statearr_41761_41788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41760 === (1))){
var state_41759__$1 = state_41759;
var statearr_41762_41789 = state_41759__$1;
(statearr_41762_41789[(2)] = null);

(statearr_41762_41789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41760 === (4))){
var inst_41738 = (state_41759[(7)]);
var inst_41738__$1 = (state_41759[(2)]);
var inst_41739 = (inst_41738__$1 == null);
var state_41759__$1 = (function (){var statearr_41763 = state_41759;
(statearr_41763[(7)] = inst_41738__$1);

return statearr_41763;
})();
if(cljs.core.truth_(inst_41739)){
var statearr_41764_41790 = state_41759__$1;
(statearr_41764_41790[(1)] = (5));

} else {
var statearr_41765_41791 = state_41759__$1;
(statearr_41765_41791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41760 === (13))){
var state_41759__$1 = state_41759;
var statearr_41766_41792 = state_41759__$1;
(statearr_41766_41792[(2)] = null);

(statearr_41766_41792[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41760 === (6))){
var inst_41738 = (state_41759[(7)]);
var state_41759__$1 = state_41759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41759__$1,(11),to,inst_41738);
} else {
if((state_val_41760 === (3))){
var inst_41757 = (state_41759[(2)]);
var state_41759__$1 = state_41759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41759__$1,inst_41757);
} else {
if((state_val_41760 === (12))){
var state_41759__$1 = state_41759;
var statearr_41767_41793 = state_41759__$1;
(statearr_41767_41793[(2)] = null);

(statearr_41767_41793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41760 === (2))){
var state_41759__$1 = state_41759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41759__$1,(4),from);
} else {
if((state_val_41760 === (11))){
var inst_41748 = (state_41759[(2)]);
var state_41759__$1 = state_41759;
if(cljs.core.truth_(inst_41748)){
var statearr_41768_41794 = state_41759__$1;
(statearr_41768_41794[(1)] = (12));

} else {
var statearr_41769_41795 = state_41759__$1;
(statearr_41769_41795[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41760 === (9))){
var state_41759__$1 = state_41759;
var statearr_41770_41796 = state_41759__$1;
(statearr_41770_41796[(2)] = null);

(statearr_41770_41796[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41760 === (5))){
var state_41759__$1 = state_41759;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41771_41797 = state_41759__$1;
(statearr_41771_41797[(1)] = (8));

} else {
var statearr_41772_41798 = state_41759__$1;
(statearr_41772_41798[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41760 === (14))){
var inst_41753 = (state_41759[(2)]);
var state_41759__$1 = state_41759;
var statearr_41773_41799 = state_41759__$1;
(statearr_41773_41799[(2)] = inst_41753);

(statearr_41773_41799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41760 === (10))){
var inst_41745 = (state_41759[(2)]);
var state_41759__$1 = state_41759;
var statearr_41774_41800 = state_41759__$1;
(statearr_41774_41800[(2)] = inst_41745);

(statearr_41774_41800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41760 === (8))){
var inst_41742 = cljs.core.async.close_BANG_.call(null,to);
var state_41759__$1 = state_41759;
var statearr_41775_41801 = state_41759__$1;
(statearr_41775_41801[(2)] = inst_41742);

(statearr_41775_41801[(1)] = (10));


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
});})(c__41620__auto___41787))
;
return ((function (switch__41458__auto__,c__41620__auto___41787){
return (function() {
var cljs$core$async$state_machine__41459__auto__ = null;
var cljs$core$async$state_machine__41459__auto____0 = (function (){
var statearr_41779 = [null,null,null,null,null,null,null,null];
(statearr_41779[(0)] = cljs$core$async$state_machine__41459__auto__);

(statearr_41779[(1)] = (1));

return statearr_41779;
});
var cljs$core$async$state_machine__41459__auto____1 = (function (state_41759){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_41759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e41780){if((e41780 instanceof Object)){
var ex__41462__auto__ = e41780;
var statearr_41781_41802 = state_41759;
(statearr_41781_41802[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41803 = state_41759;
state_41759 = G__41803;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
cljs$core$async$state_machine__41459__auto__ = function(state_41759){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41459__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41459__auto____1.call(this,state_41759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41459__auto____0;
cljs$core$async$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41459__auto____1;
return cljs$core$async$state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto___41787))
})();
var state__41622__auto__ = (function (){var statearr_41782 = f__41621__auto__.call(null);
(statearr_41782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto___41787);

return statearr_41782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto___41787))
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
return (function (p__41991){
var vec__41992 = p__41991;
var v = cljs.core.nth.call(null,vec__41992,(0),null);
var p = cljs.core.nth.call(null,vec__41992,(1),null);
var job = vec__41992;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__41620__auto___42178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto___42178,res,vec__41992,v,p,job,jobs,results){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto___42178,res,vec__41992,v,p,job,jobs,results){
return (function (state_41999){
var state_val_42000 = (state_41999[(1)]);
if((state_val_42000 === (1))){
var state_41999__$1 = state_41999;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41999__$1,(2),res,v);
} else {
if((state_val_42000 === (2))){
var inst_41996 = (state_41999[(2)]);
var inst_41997 = cljs.core.async.close_BANG_.call(null,res);
var state_41999__$1 = (function (){var statearr_42001 = state_41999;
(statearr_42001[(7)] = inst_41996);

return statearr_42001;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41999__$1,inst_41997);
} else {
return null;
}
}
});})(c__41620__auto___42178,res,vec__41992,v,p,job,jobs,results))
;
return ((function (switch__41458__auto__,c__41620__auto___42178,res,vec__41992,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41459__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41459__auto____0 = (function (){
var statearr_42005 = [null,null,null,null,null,null,null,null];
(statearr_42005[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41459__auto__);

(statearr_42005[(1)] = (1));

return statearr_42005;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41459__auto____1 = (function (state_41999){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_41999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e42006){if((e42006 instanceof Object)){
var ex__41462__auto__ = e42006;
var statearr_42007_42179 = state_41999;
(statearr_42007_42179[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42180 = state_41999;
state_41999 = G__42180;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41459__auto__ = function(state_41999){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41459__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41459__auto____1.call(this,state_41999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41459__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41459__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto___42178,res,vec__41992,v,p,job,jobs,results))
})();
var state__41622__auto__ = (function (){var statearr_42008 = f__41621__auto__.call(null);
(statearr_42008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto___42178);

return statearr_42008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto___42178,res,vec__41992,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__42009){
var vec__42010 = p__42009;
var v = cljs.core.nth.call(null,vec__42010,(0),null);
var p = cljs.core.nth.call(null,vec__42010,(1),null);
var job = vec__42010;
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
var n__37673__auto___42181 = n;
var __42182 = (0);
while(true){
if((__42182 < n__37673__auto___42181)){
var G__42013_42183 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__42013_42183) {
case "compute":
var c__41620__auto___42185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42182,c__41620__auto___42185,G__42013_42183,n__37673__auto___42181,jobs,results,process,async){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (__42182,c__41620__auto___42185,G__42013_42183,n__37673__auto___42181,jobs,results,process,async){
return (function (state_42026){
var state_val_42027 = (state_42026[(1)]);
if((state_val_42027 === (1))){
var state_42026__$1 = state_42026;
var statearr_42028_42186 = state_42026__$1;
(statearr_42028_42186[(2)] = null);

(statearr_42028_42186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42027 === (2))){
var state_42026__$1 = state_42026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42026__$1,(4),jobs);
} else {
if((state_val_42027 === (3))){
var inst_42024 = (state_42026[(2)]);
var state_42026__$1 = state_42026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42026__$1,inst_42024);
} else {
if((state_val_42027 === (4))){
var inst_42016 = (state_42026[(2)]);
var inst_42017 = process.call(null,inst_42016);
var state_42026__$1 = state_42026;
if(cljs.core.truth_(inst_42017)){
var statearr_42029_42187 = state_42026__$1;
(statearr_42029_42187[(1)] = (5));

} else {
var statearr_42030_42188 = state_42026__$1;
(statearr_42030_42188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42027 === (5))){
var state_42026__$1 = state_42026;
var statearr_42031_42189 = state_42026__$1;
(statearr_42031_42189[(2)] = null);

(statearr_42031_42189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42027 === (6))){
var state_42026__$1 = state_42026;
var statearr_42032_42190 = state_42026__$1;
(statearr_42032_42190[(2)] = null);

(statearr_42032_42190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42027 === (7))){
var inst_42022 = (state_42026[(2)]);
var state_42026__$1 = state_42026;
var statearr_42033_42191 = state_42026__$1;
(statearr_42033_42191[(2)] = inst_42022);

(statearr_42033_42191[(1)] = (3));


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
});})(__42182,c__41620__auto___42185,G__42013_42183,n__37673__auto___42181,jobs,results,process,async))
;
return ((function (__42182,switch__41458__auto__,c__41620__auto___42185,G__42013_42183,n__37673__auto___42181,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41459__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41459__auto____0 = (function (){
var statearr_42037 = [null,null,null,null,null,null,null];
(statearr_42037[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41459__auto__);

(statearr_42037[(1)] = (1));

return statearr_42037;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41459__auto____1 = (function (state_42026){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_42026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e42038){if((e42038 instanceof Object)){
var ex__41462__auto__ = e42038;
var statearr_42039_42192 = state_42026;
(statearr_42039_42192[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42193 = state_42026;
state_42026 = G__42193;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41459__auto__ = function(state_42026){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41459__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41459__auto____1.call(this,state_42026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41459__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41459__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41459__auto__;
})()
;})(__42182,switch__41458__auto__,c__41620__auto___42185,G__42013_42183,n__37673__auto___42181,jobs,results,process,async))
})();
var state__41622__auto__ = (function (){var statearr_42040 = f__41621__auto__.call(null);
(statearr_42040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto___42185);

return statearr_42040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(__42182,c__41620__auto___42185,G__42013_42183,n__37673__auto___42181,jobs,results,process,async))
);


break;
case "async":
var c__41620__auto___42194 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42182,c__41620__auto___42194,G__42013_42183,n__37673__auto___42181,jobs,results,process,async){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (__42182,c__41620__auto___42194,G__42013_42183,n__37673__auto___42181,jobs,results,process,async){
return (function (state_42053){
var state_val_42054 = (state_42053[(1)]);
if((state_val_42054 === (1))){
var state_42053__$1 = state_42053;
var statearr_42055_42195 = state_42053__$1;
(statearr_42055_42195[(2)] = null);

(statearr_42055_42195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42054 === (2))){
var state_42053__$1 = state_42053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42053__$1,(4),jobs);
} else {
if((state_val_42054 === (3))){
var inst_42051 = (state_42053[(2)]);
var state_42053__$1 = state_42053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42053__$1,inst_42051);
} else {
if((state_val_42054 === (4))){
var inst_42043 = (state_42053[(2)]);
var inst_42044 = async.call(null,inst_42043);
var state_42053__$1 = state_42053;
if(cljs.core.truth_(inst_42044)){
var statearr_42056_42196 = state_42053__$1;
(statearr_42056_42196[(1)] = (5));

} else {
var statearr_42057_42197 = state_42053__$1;
(statearr_42057_42197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42054 === (5))){
var state_42053__$1 = state_42053;
var statearr_42058_42198 = state_42053__$1;
(statearr_42058_42198[(2)] = null);

(statearr_42058_42198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42054 === (6))){
var state_42053__$1 = state_42053;
var statearr_42059_42199 = state_42053__$1;
(statearr_42059_42199[(2)] = null);

(statearr_42059_42199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42054 === (7))){
var inst_42049 = (state_42053[(2)]);
var state_42053__$1 = state_42053;
var statearr_42060_42200 = state_42053__$1;
(statearr_42060_42200[(2)] = inst_42049);

(statearr_42060_42200[(1)] = (3));


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
});})(__42182,c__41620__auto___42194,G__42013_42183,n__37673__auto___42181,jobs,results,process,async))
;
return ((function (__42182,switch__41458__auto__,c__41620__auto___42194,G__42013_42183,n__37673__auto___42181,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41459__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41459__auto____0 = (function (){
var statearr_42064 = [null,null,null,null,null,null,null];
(statearr_42064[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41459__auto__);

(statearr_42064[(1)] = (1));

return statearr_42064;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41459__auto____1 = (function (state_42053){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_42053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e42065){if((e42065 instanceof Object)){
var ex__41462__auto__ = e42065;
var statearr_42066_42201 = state_42053;
(statearr_42066_42201[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42202 = state_42053;
state_42053 = G__42202;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41459__auto__ = function(state_42053){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41459__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41459__auto____1.call(this,state_42053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41459__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41459__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41459__auto__;
})()
;})(__42182,switch__41458__auto__,c__41620__auto___42194,G__42013_42183,n__37673__auto___42181,jobs,results,process,async))
})();
var state__41622__auto__ = (function (){var statearr_42067 = f__41621__auto__.call(null);
(statearr_42067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto___42194);

return statearr_42067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(__42182,c__41620__auto___42194,G__42013_42183,n__37673__auto___42181,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__42203 = (__42182 + (1));
__42182 = G__42203;
continue;
} else {
}
break;
}

var c__41620__auto___42204 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto___42204,jobs,results,process,async){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto___42204,jobs,results,process,async){
return (function (state_42089){
var state_val_42090 = (state_42089[(1)]);
if((state_val_42090 === (1))){
var state_42089__$1 = state_42089;
var statearr_42091_42205 = state_42089__$1;
(statearr_42091_42205[(2)] = null);

(statearr_42091_42205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42090 === (2))){
var state_42089__$1 = state_42089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42089__$1,(4),from);
} else {
if((state_val_42090 === (3))){
var inst_42087 = (state_42089[(2)]);
var state_42089__$1 = state_42089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42089__$1,inst_42087);
} else {
if((state_val_42090 === (4))){
var inst_42070 = (state_42089[(7)]);
var inst_42070__$1 = (state_42089[(2)]);
var inst_42071 = (inst_42070__$1 == null);
var state_42089__$1 = (function (){var statearr_42092 = state_42089;
(statearr_42092[(7)] = inst_42070__$1);

return statearr_42092;
})();
if(cljs.core.truth_(inst_42071)){
var statearr_42093_42206 = state_42089__$1;
(statearr_42093_42206[(1)] = (5));

} else {
var statearr_42094_42207 = state_42089__$1;
(statearr_42094_42207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42090 === (5))){
var inst_42073 = cljs.core.async.close_BANG_.call(null,jobs);
var state_42089__$1 = state_42089;
var statearr_42095_42208 = state_42089__$1;
(statearr_42095_42208[(2)] = inst_42073);

(statearr_42095_42208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42090 === (6))){
var inst_42070 = (state_42089[(7)]);
var inst_42075 = (state_42089[(8)]);
var inst_42075__$1 = cljs.core.async.chan.call(null,(1));
var inst_42076 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42077 = [inst_42070,inst_42075__$1];
var inst_42078 = (new cljs.core.PersistentVector(null,2,(5),inst_42076,inst_42077,null));
var state_42089__$1 = (function (){var statearr_42096 = state_42089;
(statearr_42096[(8)] = inst_42075__$1);

return statearr_42096;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42089__$1,(8),jobs,inst_42078);
} else {
if((state_val_42090 === (7))){
var inst_42085 = (state_42089[(2)]);
var state_42089__$1 = state_42089;
var statearr_42097_42209 = state_42089__$1;
(statearr_42097_42209[(2)] = inst_42085);

(statearr_42097_42209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42090 === (8))){
var inst_42075 = (state_42089[(8)]);
var inst_42080 = (state_42089[(2)]);
var state_42089__$1 = (function (){var statearr_42098 = state_42089;
(statearr_42098[(9)] = inst_42080);

return statearr_42098;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42089__$1,(9),results,inst_42075);
} else {
if((state_val_42090 === (9))){
var inst_42082 = (state_42089[(2)]);
var state_42089__$1 = (function (){var statearr_42099 = state_42089;
(statearr_42099[(10)] = inst_42082);

return statearr_42099;
})();
var statearr_42100_42210 = state_42089__$1;
(statearr_42100_42210[(2)] = null);

(statearr_42100_42210[(1)] = (2));


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
});})(c__41620__auto___42204,jobs,results,process,async))
;
return ((function (switch__41458__auto__,c__41620__auto___42204,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41459__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41459__auto____0 = (function (){
var statearr_42104 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42104[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41459__auto__);

(statearr_42104[(1)] = (1));

return statearr_42104;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41459__auto____1 = (function (state_42089){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_42089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e42105){if((e42105 instanceof Object)){
var ex__41462__auto__ = e42105;
var statearr_42106_42211 = state_42089;
(statearr_42106_42211[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42212 = state_42089;
state_42089 = G__42212;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41459__auto__ = function(state_42089){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41459__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41459__auto____1.call(this,state_42089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41459__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41459__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto___42204,jobs,results,process,async))
})();
var state__41622__auto__ = (function (){var statearr_42107 = f__41621__auto__.call(null);
(statearr_42107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto___42204);

return statearr_42107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto___42204,jobs,results,process,async))
);


var c__41620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto__,jobs,results,process,async){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto__,jobs,results,process,async){
return (function (state_42145){
var state_val_42146 = (state_42145[(1)]);
if((state_val_42146 === (7))){
var inst_42141 = (state_42145[(2)]);
var state_42145__$1 = state_42145;
var statearr_42147_42213 = state_42145__$1;
(statearr_42147_42213[(2)] = inst_42141);

(statearr_42147_42213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42146 === (20))){
var state_42145__$1 = state_42145;
var statearr_42148_42214 = state_42145__$1;
(statearr_42148_42214[(2)] = null);

(statearr_42148_42214[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42146 === (1))){
var state_42145__$1 = state_42145;
var statearr_42149_42215 = state_42145__$1;
(statearr_42149_42215[(2)] = null);

(statearr_42149_42215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42146 === (4))){
var inst_42110 = (state_42145[(7)]);
var inst_42110__$1 = (state_42145[(2)]);
var inst_42111 = (inst_42110__$1 == null);
var state_42145__$1 = (function (){var statearr_42150 = state_42145;
(statearr_42150[(7)] = inst_42110__$1);

return statearr_42150;
})();
if(cljs.core.truth_(inst_42111)){
var statearr_42151_42216 = state_42145__$1;
(statearr_42151_42216[(1)] = (5));

} else {
var statearr_42152_42217 = state_42145__$1;
(statearr_42152_42217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42146 === (15))){
var inst_42123 = (state_42145[(8)]);
var state_42145__$1 = state_42145;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42145__$1,(18),to,inst_42123);
} else {
if((state_val_42146 === (21))){
var inst_42136 = (state_42145[(2)]);
var state_42145__$1 = state_42145;
var statearr_42153_42218 = state_42145__$1;
(statearr_42153_42218[(2)] = inst_42136);

(statearr_42153_42218[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42146 === (13))){
var inst_42138 = (state_42145[(2)]);
var state_42145__$1 = (function (){var statearr_42154 = state_42145;
(statearr_42154[(9)] = inst_42138);

return statearr_42154;
})();
var statearr_42155_42219 = state_42145__$1;
(statearr_42155_42219[(2)] = null);

(statearr_42155_42219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42146 === (6))){
var inst_42110 = (state_42145[(7)]);
var state_42145__$1 = state_42145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42145__$1,(11),inst_42110);
} else {
if((state_val_42146 === (17))){
var inst_42131 = (state_42145[(2)]);
var state_42145__$1 = state_42145;
if(cljs.core.truth_(inst_42131)){
var statearr_42156_42220 = state_42145__$1;
(statearr_42156_42220[(1)] = (19));

} else {
var statearr_42157_42221 = state_42145__$1;
(statearr_42157_42221[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42146 === (3))){
var inst_42143 = (state_42145[(2)]);
var state_42145__$1 = state_42145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42145__$1,inst_42143);
} else {
if((state_val_42146 === (12))){
var inst_42120 = (state_42145[(10)]);
var state_42145__$1 = state_42145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42145__$1,(14),inst_42120);
} else {
if((state_val_42146 === (2))){
var state_42145__$1 = state_42145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42145__$1,(4),results);
} else {
if((state_val_42146 === (19))){
var state_42145__$1 = state_42145;
var statearr_42158_42222 = state_42145__$1;
(statearr_42158_42222[(2)] = null);

(statearr_42158_42222[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42146 === (11))){
var inst_42120 = (state_42145[(2)]);
var state_42145__$1 = (function (){var statearr_42159 = state_42145;
(statearr_42159[(10)] = inst_42120);

return statearr_42159;
})();
var statearr_42160_42223 = state_42145__$1;
(statearr_42160_42223[(2)] = null);

(statearr_42160_42223[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42146 === (9))){
var state_42145__$1 = state_42145;
var statearr_42161_42224 = state_42145__$1;
(statearr_42161_42224[(2)] = null);

(statearr_42161_42224[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42146 === (5))){
var state_42145__$1 = state_42145;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42162_42225 = state_42145__$1;
(statearr_42162_42225[(1)] = (8));

} else {
var statearr_42163_42226 = state_42145__$1;
(statearr_42163_42226[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42146 === (14))){
var inst_42123 = (state_42145[(8)]);
var inst_42125 = (state_42145[(11)]);
var inst_42123__$1 = (state_42145[(2)]);
var inst_42124 = (inst_42123__$1 == null);
var inst_42125__$1 = cljs.core.not.call(null,inst_42124);
var state_42145__$1 = (function (){var statearr_42164 = state_42145;
(statearr_42164[(8)] = inst_42123__$1);

(statearr_42164[(11)] = inst_42125__$1);

return statearr_42164;
})();
if(inst_42125__$1){
var statearr_42165_42227 = state_42145__$1;
(statearr_42165_42227[(1)] = (15));

} else {
var statearr_42166_42228 = state_42145__$1;
(statearr_42166_42228[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42146 === (16))){
var inst_42125 = (state_42145[(11)]);
var state_42145__$1 = state_42145;
var statearr_42167_42229 = state_42145__$1;
(statearr_42167_42229[(2)] = inst_42125);

(statearr_42167_42229[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42146 === (10))){
var inst_42117 = (state_42145[(2)]);
var state_42145__$1 = state_42145;
var statearr_42168_42230 = state_42145__$1;
(statearr_42168_42230[(2)] = inst_42117);

(statearr_42168_42230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42146 === (18))){
var inst_42128 = (state_42145[(2)]);
var state_42145__$1 = state_42145;
var statearr_42169_42231 = state_42145__$1;
(statearr_42169_42231[(2)] = inst_42128);

(statearr_42169_42231[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42146 === (8))){
var inst_42114 = cljs.core.async.close_BANG_.call(null,to);
var state_42145__$1 = state_42145;
var statearr_42170_42232 = state_42145__$1;
(statearr_42170_42232[(2)] = inst_42114);

(statearr_42170_42232[(1)] = (10));


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
});})(c__41620__auto__,jobs,results,process,async))
;
return ((function (switch__41458__auto__,c__41620__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41459__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41459__auto____0 = (function (){
var statearr_42174 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42174[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41459__auto__);

(statearr_42174[(1)] = (1));

return statearr_42174;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41459__auto____1 = (function (state_42145){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_42145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e42175){if((e42175 instanceof Object)){
var ex__41462__auto__ = e42175;
var statearr_42176_42233 = state_42145;
(statearr_42176_42233[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42234 = state_42145;
state_42145 = G__42234;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41459__auto__ = function(state_42145){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41459__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41459__auto____1.call(this,state_42145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41459__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41459__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto__,jobs,results,process,async))
})();
var state__41622__auto__ = (function (){var statearr_42177 = f__41621__auto__.call(null);
(statearr_42177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto__);

return statearr_42177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto__,jobs,results,process,async))
);

return c__41620__auto__;
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
var args42235 = [];
var len__37833__auto___42238 = arguments.length;
var i__37834__auto___42239 = (0);
while(true){
if((i__37834__auto___42239 < len__37833__auto___42238)){
args42235.push((arguments[i__37834__auto___42239]));

var G__42240 = (i__37834__auto___42239 + (1));
i__37834__auto___42239 = G__42240;
continue;
} else {
}
break;
}

var G__42237 = args42235.length;
switch (G__42237) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42235.length)].join('')));

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
var args42242 = [];
var len__37833__auto___42245 = arguments.length;
var i__37834__auto___42246 = (0);
while(true){
if((i__37834__auto___42246 < len__37833__auto___42245)){
args42242.push((arguments[i__37834__auto___42246]));

var G__42247 = (i__37834__auto___42246 + (1));
i__37834__auto___42246 = G__42247;
continue;
} else {
}
break;
}

var G__42244 = args42242.length;
switch (G__42244) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42242.length)].join('')));

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
var args42249 = [];
var len__37833__auto___42302 = arguments.length;
var i__37834__auto___42303 = (0);
while(true){
if((i__37834__auto___42303 < len__37833__auto___42302)){
args42249.push((arguments[i__37834__auto___42303]));

var G__42304 = (i__37834__auto___42303 + (1));
i__37834__auto___42303 = G__42304;
continue;
} else {
}
break;
}

var G__42251 = args42249.length;
switch (G__42251) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42249.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__41620__auto___42306 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto___42306,tc,fc){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto___42306,tc,fc){
return (function (state_42277){
var state_val_42278 = (state_42277[(1)]);
if((state_val_42278 === (7))){
var inst_42273 = (state_42277[(2)]);
var state_42277__$1 = state_42277;
var statearr_42279_42307 = state_42277__$1;
(statearr_42279_42307[(2)] = inst_42273);

(statearr_42279_42307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42278 === (1))){
var state_42277__$1 = state_42277;
var statearr_42280_42308 = state_42277__$1;
(statearr_42280_42308[(2)] = null);

(statearr_42280_42308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42278 === (4))){
var inst_42254 = (state_42277[(7)]);
var inst_42254__$1 = (state_42277[(2)]);
var inst_42255 = (inst_42254__$1 == null);
var state_42277__$1 = (function (){var statearr_42281 = state_42277;
(statearr_42281[(7)] = inst_42254__$1);

return statearr_42281;
})();
if(cljs.core.truth_(inst_42255)){
var statearr_42282_42309 = state_42277__$1;
(statearr_42282_42309[(1)] = (5));

} else {
var statearr_42283_42310 = state_42277__$1;
(statearr_42283_42310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42278 === (13))){
var state_42277__$1 = state_42277;
var statearr_42284_42311 = state_42277__$1;
(statearr_42284_42311[(2)] = null);

(statearr_42284_42311[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42278 === (6))){
var inst_42254 = (state_42277[(7)]);
var inst_42260 = p.call(null,inst_42254);
var state_42277__$1 = state_42277;
if(cljs.core.truth_(inst_42260)){
var statearr_42285_42312 = state_42277__$1;
(statearr_42285_42312[(1)] = (9));

} else {
var statearr_42286_42313 = state_42277__$1;
(statearr_42286_42313[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42278 === (3))){
var inst_42275 = (state_42277[(2)]);
var state_42277__$1 = state_42277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42277__$1,inst_42275);
} else {
if((state_val_42278 === (12))){
var state_42277__$1 = state_42277;
var statearr_42287_42314 = state_42277__$1;
(statearr_42287_42314[(2)] = null);

(statearr_42287_42314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42278 === (2))){
var state_42277__$1 = state_42277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42277__$1,(4),ch);
} else {
if((state_val_42278 === (11))){
var inst_42254 = (state_42277[(7)]);
var inst_42264 = (state_42277[(2)]);
var state_42277__$1 = state_42277;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42277__$1,(8),inst_42264,inst_42254);
} else {
if((state_val_42278 === (9))){
var state_42277__$1 = state_42277;
var statearr_42288_42315 = state_42277__$1;
(statearr_42288_42315[(2)] = tc);

(statearr_42288_42315[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42278 === (5))){
var inst_42257 = cljs.core.async.close_BANG_.call(null,tc);
var inst_42258 = cljs.core.async.close_BANG_.call(null,fc);
var state_42277__$1 = (function (){var statearr_42289 = state_42277;
(statearr_42289[(8)] = inst_42257);

return statearr_42289;
})();
var statearr_42290_42316 = state_42277__$1;
(statearr_42290_42316[(2)] = inst_42258);

(statearr_42290_42316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42278 === (14))){
var inst_42271 = (state_42277[(2)]);
var state_42277__$1 = state_42277;
var statearr_42291_42317 = state_42277__$1;
(statearr_42291_42317[(2)] = inst_42271);

(statearr_42291_42317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42278 === (10))){
var state_42277__$1 = state_42277;
var statearr_42292_42318 = state_42277__$1;
(statearr_42292_42318[(2)] = fc);

(statearr_42292_42318[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42278 === (8))){
var inst_42266 = (state_42277[(2)]);
var state_42277__$1 = state_42277;
if(cljs.core.truth_(inst_42266)){
var statearr_42293_42319 = state_42277__$1;
(statearr_42293_42319[(1)] = (12));

} else {
var statearr_42294_42320 = state_42277__$1;
(statearr_42294_42320[(1)] = (13));

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
});})(c__41620__auto___42306,tc,fc))
;
return ((function (switch__41458__auto__,c__41620__auto___42306,tc,fc){
return (function() {
var cljs$core$async$state_machine__41459__auto__ = null;
var cljs$core$async$state_machine__41459__auto____0 = (function (){
var statearr_42298 = [null,null,null,null,null,null,null,null,null];
(statearr_42298[(0)] = cljs$core$async$state_machine__41459__auto__);

(statearr_42298[(1)] = (1));

return statearr_42298;
});
var cljs$core$async$state_machine__41459__auto____1 = (function (state_42277){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_42277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e42299){if((e42299 instanceof Object)){
var ex__41462__auto__ = e42299;
var statearr_42300_42321 = state_42277;
(statearr_42300_42321[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42322 = state_42277;
state_42277 = G__42322;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
cljs$core$async$state_machine__41459__auto__ = function(state_42277){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41459__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41459__auto____1.call(this,state_42277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41459__auto____0;
cljs$core$async$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41459__auto____1;
return cljs$core$async$state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto___42306,tc,fc))
})();
var state__41622__auto__ = (function (){var statearr_42301 = f__41621__auto__.call(null);
(statearr_42301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto___42306);

return statearr_42301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto___42306,tc,fc))
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
var c__41620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto__){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto__){
return (function (state_42386){
var state_val_42387 = (state_42386[(1)]);
if((state_val_42387 === (7))){
var inst_42382 = (state_42386[(2)]);
var state_42386__$1 = state_42386;
var statearr_42388_42409 = state_42386__$1;
(statearr_42388_42409[(2)] = inst_42382);

(statearr_42388_42409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42387 === (1))){
var inst_42366 = init;
var state_42386__$1 = (function (){var statearr_42389 = state_42386;
(statearr_42389[(7)] = inst_42366);

return statearr_42389;
})();
var statearr_42390_42410 = state_42386__$1;
(statearr_42390_42410[(2)] = null);

(statearr_42390_42410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42387 === (4))){
var inst_42369 = (state_42386[(8)]);
var inst_42369__$1 = (state_42386[(2)]);
var inst_42370 = (inst_42369__$1 == null);
var state_42386__$1 = (function (){var statearr_42391 = state_42386;
(statearr_42391[(8)] = inst_42369__$1);

return statearr_42391;
})();
if(cljs.core.truth_(inst_42370)){
var statearr_42392_42411 = state_42386__$1;
(statearr_42392_42411[(1)] = (5));

} else {
var statearr_42393_42412 = state_42386__$1;
(statearr_42393_42412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42387 === (6))){
var inst_42366 = (state_42386[(7)]);
var inst_42369 = (state_42386[(8)]);
var inst_42373 = (state_42386[(9)]);
var inst_42373__$1 = f.call(null,inst_42366,inst_42369);
var inst_42374 = cljs.core.reduced_QMARK_.call(null,inst_42373__$1);
var state_42386__$1 = (function (){var statearr_42394 = state_42386;
(statearr_42394[(9)] = inst_42373__$1);

return statearr_42394;
})();
if(inst_42374){
var statearr_42395_42413 = state_42386__$1;
(statearr_42395_42413[(1)] = (8));

} else {
var statearr_42396_42414 = state_42386__$1;
(statearr_42396_42414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42387 === (3))){
var inst_42384 = (state_42386[(2)]);
var state_42386__$1 = state_42386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42386__$1,inst_42384);
} else {
if((state_val_42387 === (2))){
var state_42386__$1 = state_42386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42386__$1,(4),ch);
} else {
if((state_val_42387 === (9))){
var inst_42373 = (state_42386[(9)]);
var inst_42366 = inst_42373;
var state_42386__$1 = (function (){var statearr_42397 = state_42386;
(statearr_42397[(7)] = inst_42366);

return statearr_42397;
})();
var statearr_42398_42415 = state_42386__$1;
(statearr_42398_42415[(2)] = null);

(statearr_42398_42415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42387 === (5))){
var inst_42366 = (state_42386[(7)]);
var state_42386__$1 = state_42386;
var statearr_42399_42416 = state_42386__$1;
(statearr_42399_42416[(2)] = inst_42366);

(statearr_42399_42416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42387 === (10))){
var inst_42380 = (state_42386[(2)]);
var state_42386__$1 = state_42386;
var statearr_42400_42417 = state_42386__$1;
(statearr_42400_42417[(2)] = inst_42380);

(statearr_42400_42417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42387 === (8))){
var inst_42373 = (state_42386[(9)]);
var inst_42376 = cljs.core.deref.call(null,inst_42373);
var state_42386__$1 = state_42386;
var statearr_42401_42418 = state_42386__$1;
(statearr_42401_42418[(2)] = inst_42376);

(statearr_42401_42418[(1)] = (10));


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
});})(c__41620__auto__))
;
return ((function (switch__41458__auto__,c__41620__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__41459__auto__ = null;
var cljs$core$async$reduce_$_state_machine__41459__auto____0 = (function (){
var statearr_42405 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42405[(0)] = cljs$core$async$reduce_$_state_machine__41459__auto__);

(statearr_42405[(1)] = (1));

return statearr_42405;
});
var cljs$core$async$reduce_$_state_machine__41459__auto____1 = (function (state_42386){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_42386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e42406){if((e42406 instanceof Object)){
var ex__41462__auto__ = e42406;
var statearr_42407_42419 = state_42386;
(statearr_42407_42419[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42420 = state_42386;
state_42386 = G__42420;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__41459__auto__ = function(state_42386){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__41459__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__41459__auto____1.call(this,state_42386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__41459__auto____0;
cljs$core$async$reduce_$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__41459__auto____1;
return cljs$core$async$reduce_$_state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto__))
})();
var state__41622__auto__ = (function (){var statearr_42408 = f__41621__auto__.call(null);
(statearr_42408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto__);

return statearr_42408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto__))
);

return c__41620__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__41620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto__,f__$1){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto__,f__$1){
return (function (state_42440){
var state_val_42441 = (state_42440[(1)]);
if((state_val_42441 === (1))){
var inst_42435 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_42440__$1 = state_42440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42440__$1,(2),inst_42435);
} else {
if((state_val_42441 === (2))){
var inst_42437 = (state_42440[(2)]);
var inst_42438 = f__$1.call(null,inst_42437);
var state_42440__$1 = state_42440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42440__$1,inst_42438);
} else {
return null;
}
}
});})(c__41620__auto__,f__$1))
;
return ((function (switch__41458__auto__,c__41620__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__41459__auto__ = null;
var cljs$core$async$transduce_$_state_machine__41459__auto____0 = (function (){
var statearr_42445 = [null,null,null,null,null,null,null];
(statearr_42445[(0)] = cljs$core$async$transduce_$_state_machine__41459__auto__);

(statearr_42445[(1)] = (1));

return statearr_42445;
});
var cljs$core$async$transduce_$_state_machine__41459__auto____1 = (function (state_42440){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_42440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e42446){if((e42446 instanceof Object)){
var ex__41462__auto__ = e42446;
var statearr_42447_42449 = state_42440;
(statearr_42447_42449[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42450 = state_42440;
state_42440 = G__42450;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__41459__auto__ = function(state_42440){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__41459__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__41459__auto____1.call(this,state_42440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__41459__auto____0;
cljs$core$async$transduce_$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__41459__auto____1;
return cljs$core$async$transduce_$_state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto__,f__$1))
})();
var state__41622__auto__ = (function (){var statearr_42448 = f__41621__auto__.call(null);
(statearr_42448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto__);

return statearr_42448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto__,f__$1))
);

return c__41620__auto__;
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
var args42451 = [];
var len__37833__auto___42503 = arguments.length;
var i__37834__auto___42504 = (0);
while(true){
if((i__37834__auto___42504 < len__37833__auto___42503)){
args42451.push((arguments[i__37834__auto___42504]));

var G__42505 = (i__37834__auto___42504 + (1));
i__37834__auto___42504 = G__42505;
continue;
} else {
}
break;
}

var G__42453 = args42451.length;
switch (G__42453) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42451.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__41620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto__){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto__){
return (function (state_42478){
var state_val_42479 = (state_42478[(1)]);
if((state_val_42479 === (7))){
var inst_42460 = (state_42478[(2)]);
var state_42478__$1 = state_42478;
var statearr_42480_42507 = state_42478__$1;
(statearr_42480_42507[(2)] = inst_42460);

(statearr_42480_42507[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42479 === (1))){
var inst_42454 = cljs.core.seq.call(null,coll);
var inst_42455 = inst_42454;
var state_42478__$1 = (function (){var statearr_42481 = state_42478;
(statearr_42481[(7)] = inst_42455);

return statearr_42481;
})();
var statearr_42482_42508 = state_42478__$1;
(statearr_42482_42508[(2)] = null);

(statearr_42482_42508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42479 === (4))){
var inst_42455 = (state_42478[(7)]);
var inst_42458 = cljs.core.first.call(null,inst_42455);
var state_42478__$1 = state_42478;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42478__$1,(7),ch,inst_42458);
} else {
if((state_val_42479 === (13))){
var inst_42472 = (state_42478[(2)]);
var state_42478__$1 = state_42478;
var statearr_42483_42509 = state_42478__$1;
(statearr_42483_42509[(2)] = inst_42472);

(statearr_42483_42509[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42479 === (6))){
var inst_42463 = (state_42478[(2)]);
var state_42478__$1 = state_42478;
if(cljs.core.truth_(inst_42463)){
var statearr_42484_42510 = state_42478__$1;
(statearr_42484_42510[(1)] = (8));

} else {
var statearr_42485_42511 = state_42478__$1;
(statearr_42485_42511[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42479 === (3))){
var inst_42476 = (state_42478[(2)]);
var state_42478__$1 = state_42478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42478__$1,inst_42476);
} else {
if((state_val_42479 === (12))){
var state_42478__$1 = state_42478;
var statearr_42486_42512 = state_42478__$1;
(statearr_42486_42512[(2)] = null);

(statearr_42486_42512[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42479 === (2))){
var inst_42455 = (state_42478[(7)]);
var state_42478__$1 = state_42478;
if(cljs.core.truth_(inst_42455)){
var statearr_42487_42513 = state_42478__$1;
(statearr_42487_42513[(1)] = (4));

} else {
var statearr_42488_42514 = state_42478__$1;
(statearr_42488_42514[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42479 === (11))){
var inst_42469 = cljs.core.async.close_BANG_.call(null,ch);
var state_42478__$1 = state_42478;
var statearr_42489_42515 = state_42478__$1;
(statearr_42489_42515[(2)] = inst_42469);

(statearr_42489_42515[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42479 === (9))){
var state_42478__$1 = state_42478;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42490_42516 = state_42478__$1;
(statearr_42490_42516[(1)] = (11));

} else {
var statearr_42491_42517 = state_42478__$1;
(statearr_42491_42517[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42479 === (5))){
var inst_42455 = (state_42478[(7)]);
var state_42478__$1 = state_42478;
var statearr_42492_42518 = state_42478__$1;
(statearr_42492_42518[(2)] = inst_42455);

(statearr_42492_42518[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42479 === (10))){
var inst_42474 = (state_42478[(2)]);
var state_42478__$1 = state_42478;
var statearr_42493_42519 = state_42478__$1;
(statearr_42493_42519[(2)] = inst_42474);

(statearr_42493_42519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42479 === (8))){
var inst_42455 = (state_42478[(7)]);
var inst_42465 = cljs.core.next.call(null,inst_42455);
var inst_42455__$1 = inst_42465;
var state_42478__$1 = (function (){var statearr_42494 = state_42478;
(statearr_42494[(7)] = inst_42455__$1);

return statearr_42494;
})();
var statearr_42495_42520 = state_42478__$1;
(statearr_42495_42520[(2)] = null);

(statearr_42495_42520[(1)] = (2));


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
});})(c__41620__auto__))
;
return ((function (switch__41458__auto__,c__41620__auto__){
return (function() {
var cljs$core$async$state_machine__41459__auto__ = null;
var cljs$core$async$state_machine__41459__auto____0 = (function (){
var statearr_42499 = [null,null,null,null,null,null,null,null];
(statearr_42499[(0)] = cljs$core$async$state_machine__41459__auto__);

(statearr_42499[(1)] = (1));

return statearr_42499;
});
var cljs$core$async$state_machine__41459__auto____1 = (function (state_42478){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_42478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e42500){if((e42500 instanceof Object)){
var ex__41462__auto__ = e42500;
var statearr_42501_42521 = state_42478;
(statearr_42501_42521[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42522 = state_42478;
state_42478 = G__42522;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
cljs$core$async$state_machine__41459__auto__ = function(state_42478){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41459__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41459__auto____1.call(this,state_42478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41459__auto____0;
cljs$core$async$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41459__auto____1;
return cljs$core$async$state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto__))
})();
var state__41622__auto__ = (function (){var statearr_42502 = f__41621__auto__.call(null);
(statearr_42502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto__);

return statearr_42502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto__))
);

return c__41620__auto__;
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
var x__37421__auto__ = (((_ == null))?null:_);
var m__37422__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__37421__auto__)]);
if(!((m__37422__auto__ == null))){
return m__37422__auto__.call(null,_);
} else {
var m__37422__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__37422__auto____$1 == null))){
return m__37422__auto____$1.call(null,_);
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
var x__37421__auto__ = (((m == null))?null:m);
var m__37422__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__37421__auto__)]);
if(!((m__37422__auto__ == null))){
return m__37422__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__37422__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__37422__auto____$1 == null))){
return m__37422__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__37421__auto__ = (((m == null))?null:m);
var m__37422__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__37421__auto__)]);
if(!((m__37422__auto__ == null))){
return m__37422__auto__.call(null,m,ch);
} else {
var m__37422__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__37422__auto____$1 == null))){
return m__37422__auto____$1.call(null,m,ch);
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
var x__37421__auto__ = (((m == null))?null:m);
var m__37422__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__37421__auto__)]);
if(!((m__37422__auto__ == null))){
return m__37422__auto__.call(null,m);
} else {
var m__37422__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__37422__auto____$1 == null))){
return m__37422__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async42748 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42748 = (function (mult,ch,cs,meta42749){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta42749 = meta42749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_42750,meta42749__$1){
var self__ = this;
var _42750__$1 = this;
return (new cljs.core.async.t_cljs$core$async42748(self__.mult,self__.ch,self__.cs,meta42749__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async42748.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_42750){
var self__ = this;
var _42750__$1 = this;
return self__.meta42749;
});})(cs))
;

cljs.core.async.t_cljs$core$async42748.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async42748.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async42748.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async42748.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42748.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42748.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42748.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta42749","meta42749",1452229747,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async42748.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42748.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42748";

cljs.core.async.t_cljs$core$async42748.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__37364__auto__,writer__37365__auto__,opt__37366__auto__){
return cljs.core._write.call(null,writer__37365__auto__,"cljs.core.async/t_cljs$core$async42748");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async42748 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async42748(mult__$1,ch__$1,cs__$1,meta42749){
return (new cljs.core.async.t_cljs$core$async42748(mult__$1,ch__$1,cs__$1,meta42749));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async42748(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__41620__auto___42973 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto___42973,cs,m,dchan,dctr,done){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto___42973,cs,m,dchan,dctr,done){
return (function (state_42885){
var state_val_42886 = (state_42885[(1)]);
if((state_val_42886 === (7))){
var inst_42881 = (state_42885[(2)]);
var state_42885__$1 = state_42885;
var statearr_42887_42974 = state_42885__$1;
(statearr_42887_42974[(2)] = inst_42881);

(statearr_42887_42974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (20))){
var inst_42784 = (state_42885[(7)]);
var inst_42796 = cljs.core.first.call(null,inst_42784);
var inst_42797 = cljs.core.nth.call(null,inst_42796,(0),null);
var inst_42798 = cljs.core.nth.call(null,inst_42796,(1),null);
var state_42885__$1 = (function (){var statearr_42888 = state_42885;
(statearr_42888[(8)] = inst_42797);

return statearr_42888;
})();
if(cljs.core.truth_(inst_42798)){
var statearr_42889_42975 = state_42885__$1;
(statearr_42889_42975[(1)] = (22));

} else {
var statearr_42890_42976 = state_42885__$1;
(statearr_42890_42976[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (27))){
var inst_42826 = (state_42885[(9)]);
var inst_42828 = (state_42885[(10)]);
var inst_42833 = (state_42885[(11)]);
var inst_42753 = (state_42885[(12)]);
var inst_42833__$1 = cljs.core._nth.call(null,inst_42826,inst_42828);
var inst_42834 = cljs.core.async.put_BANG_.call(null,inst_42833__$1,inst_42753,done);
var state_42885__$1 = (function (){var statearr_42891 = state_42885;
(statearr_42891[(11)] = inst_42833__$1);

return statearr_42891;
})();
if(cljs.core.truth_(inst_42834)){
var statearr_42892_42977 = state_42885__$1;
(statearr_42892_42977[(1)] = (30));

} else {
var statearr_42893_42978 = state_42885__$1;
(statearr_42893_42978[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (1))){
var state_42885__$1 = state_42885;
var statearr_42894_42979 = state_42885__$1;
(statearr_42894_42979[(2)] = null);

(statearr_42894_42979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (24))){
var inst_42784 = (state_42885[(7)]);
var inst_42803 = (state_42885[(2)]);
var inst_42804 = cljs.core.next.call(null,inst_42784);
var inst_42762 = inst_42804;
var inst_42763 = null;
var inst_42764 = (0);
var inst_42765 = (0);
var state_42885__$1 = (function (){var statearr_42895 = state_42885;
(statearr_42895[(13)] = inst_42762);

(statearr_42895[(14)] = inst_42803);

(statearr_42895[(15)] = inst_42763);

(statearr_42895[(16)] = inst_42764);

(statearr_42895[(17)] = inst_42765);

return statearr_42895;
})();
var statearr_42896_42980 = state_42885__$1;
(statearr_42896_42980[(2)] = null);

(statearr_42896_42980[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (39))){
var state_42885__$1 = state_42885;
var statearr_42900_42981 = state_42885__$1;
(statearr_42900_42981[(2)] = null);

(statearr_42900_42981[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (4))){
var inst_42753 = (state_42885[(12)]);
var inst_42753__$1 = (state_42885[(2)]);
var inst_42754 = (inst_42753__$1 == null);
var state_42885__$1 = (function (){var statearr_42901 = state_42885;
(statearr_42901[(12)] = inst_42753__$1);

return statearr_42901;
})();
if(cljs.core.truth_(inst_42754)){
var statearr_42902_42982 = state_42885__$1;
(statearr_42902_42982[(1)] = (5));

} else {
var statearr_42903_42983 = state_42885__$1;
(statearr_42903_42983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (15))){
var inst_42762 = (state_42885[(13)]);
var inst_42763 = (state_42885[(15)]);
var inst_42764 = (state_42885[(16)]);
var inst_42765 = (state_42885[(17)]);
var inst_42780 = (state_42885[(2)]);
var inst_42781 = (inst_42765 + (1));
var tmp42897 = inst_42762;
var tmp42898 = inst_42763;
var tmp42899 = inst_42764;
var inst_42762__$1 = tmp42897;
var inst_42763__$1 = tmp42898;
var inst_42764__$1 = tmp42899;
var inst_42765__$1 = inst_42781;
var state_42885__$1 = (function (){var statearr_42904 = state_42885;
(statearr_42904[(13)] = inst_42762__$1);

(statearr_42904[(18)] = inst_42780);

(statearr_42904[(15)] = inst_42763__$1);

(statearr_42904[(16)] = inst_42764__$1);

(statearr_42904[(17)] = inst_42765__$1);

return statearr_42904;
})();
var statearr_42905_42984 = state_42885__$1;
(statearr_42905_42984[(2)] = null);

(statearr_42905_42984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (21))){
var inst_42807 = (state_42885[(2)]);
var state_42885__$1 = state_42885;
var statearr_42909_42985 = state_42885__$1;
(statearr_42909_42985[(2)] = inst_42807);

(statearr_42909_42985[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (31))){
var inst_42833 = (state_42885[(11)]);
var inst_42837 = done.call(null,null);
var inst_42838 = cljs.core.async.untap_STAR_.call(null,m,inst_42833);
var state_42885__$1 = (function (){var statearr_42910 = state_42885;
(statearr_42910[(19)] = inst_42837);

return statearr_42910;
})();
var statearr_42911_42986 = state_42885__$1;
(statearr_42911_42986[(2)] = inst_42838);

(statearr_42911_42986[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (32))){
var inst_42826 = (state_42885[(9)]);
var inst_42828 = (state_42885[(10)]);
var inst_42827 = (state_42885[(20)]);
var inst_42825 = (state_42885[(21)]);
var inst_42840 = (state_42885[(2)]);
var inst_42841 = (inst_42828 + (1));
var tmp42906 = inst_42826;
var tmp42907 = inst_42827;
var tmp42908 = inst_42825;
var inst_42825__$1 = tmp42908;
var inst_42826__$1 = tmp42906;
var inst_42827__$1 = tmp42907;
var inst_42828__$1 = inst_42841;
var state_42885__$1 = (function (){var statearr_42912 = state_42885;
(statearr_42912[(9)] = inst_42826__$1);

(statearr_42912[(10)] = inst_42828__$1);

(statearr_42912[(20)] = inst_42827__$1);

(statearr_42912[(22)] = inst_42840);

(statearr_42912[(21)] = inst_42825__$1);

return statearr_42912;
})();
var statearr_42913_42987 = state_42885__$1;
(statearr_42913_42987[(2)] = null);

(statearr_42913_42987[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (40))){
var inst_42853 = (state_42885[(23)]);
var inst_42857 = done.call(null,null);
var inst_42858 = cljs.core.async.untap_STAR_.call(null,m,inst_42853);
var state_42885__$1 = (function (){var statearr_42914 = state_42885;
(statearr_42914[(24)] = inst_42857);

return statearr_42914;
})();
var statearr_42915_42988 = state_42885__$1;
(statearr_42915_42988[(2)] = inst_42858);

(statearr_42915_42988[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (33))){
var inst_42844 = (state_42885[(25)]);
var inst_42846 = cljs.core.chunked_seq_QMARK_.call(null,inst_42844);
var state_42885__$1 = state_42885;
if(inst_42846){
var statearr_42916_42989 = state_42885__$1;
(statearr_42916_42989[(1)] = (36));

} else {
var statearr_42917_42990 = state_42885__$1;
(statearr_42917_42990[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (13))){
var inst_42774 = (state_42885[(26)]);
var inst_42777 = cljs.core.async.close_BANG_.call(null,inst_42774);
var state_42885__$1 = state_42885;
var statearr_42918_42991 = state_42885__$1;
(statearr_42918_42991[(2)] = inst_42777);

(statearr_42918_42991[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (22))){
var inst_42797 = (state_42885[(8)]);
var inst_42800 = cljs.core.async.close_BANG_.call(null,inst_42797);
var state_42885__$1 = state_42885;
var statearr_42919_42992 = state_42885__$1;
(statearr_42919_42992[(2)] = inst_42800);

(statearr_42919_42992[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (36))){
var inst_42844 = (state_42885[(25)]);
var inst_42848 = cljs.core.chunk_first.call(null,inst_42844);
var inst_42849 = cljs.core.chunk_rest.call(null,inst_42844);
var inst_42850 = cljs.core.count.call(null,inst_42848);
var inst_42825 = inst_42849;
var inst_42826 = inst_42848;
var inst_42827 = inst_42850;
var inst_42828 = (0);
var state_42885__$1 = (function (){var statearr_42920 = state_42885;
(statearr_42920[(9)] = inst_42826);

(statearr_42920[(10)] = inst_42828);

(statearr_42920[(20)] = inst_42827);

(statearr_42920[(21)] = inst_42825);

return statearr_42920;
})();
var statearr_42921_42993 = state_42885__$1;
(statearr_42921_42993[(2)] = null);

(statearr_42921_42993[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (41))){
var inst_42844 = (state_42885[(25)]);
var inst_42860 = (state_42885[(2)]);
var inst_42861 = cljs.core.next.call(null,inst_42844);
var inst_42825 = inst_42861;
var inst_42826 = null;
var inst_42827 = (0);
var inst_42828 = (0);
var state_42885__$1 = (function (){var statearr_42922 = state_42885;
(statearr_42922[(9)] = inst_42826);

(statearr_42922[(10)] = inst_42828);

(statearr_42922[(27)] = inst_42860);

(statearr_42922[(20)] = inst_42827);

(statearr_42922[(21)] = inst_42825);

return statearr_42922;
})();
var statearr_42923_42994 = state_42885__$1;
(statearr_42923_42994[(2)] = null);

(statearr_42923_42994[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (43))){
var state_42885__$1 = state_42885;
var statearr_42924_42995 = state_42885__$1;
(statearr_42924_42995[(2)] = null);

(statearr_42924_42995[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (29))){
var inst_42869 = (state_42885[(2)]);
var state_42885__$1 = state_42885;
var statearr_42925_42996 = state_42885__$1;
(statearr_42925_42996[(2)] = inst_42869);

(statearr_42925_42996[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (44))){
var inst_42878 = (state_42885[(2)]);
var state_42885__$1 = (function (){var statearr_42926 = state_42885;
(statearr_42926[(28)] = inst_42878);

return statearr_42926;
})();
var statearr_42927_42997 = state_42885__$1;
(statearr_42927_42997[(2)] = null);

(statearr_42927_42997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (6))){
var inst_42817 = (state_42885[(29)]);
var inst_42816 = cljs.core.deref.call(null,cs);
var inst_42817__$1 = cljs.core.keys.call(null,inst_42816);
var inst_42818 = cljs.core.count.call(null,inst_42817__$1);
var inst_42819 = cljs.core.reset_BANG_.call(null,dctr,inst_42818);
var inst_42824 = cljs.core.seq.call(null,inst_42817__$1);
var inst_42825 = inst_42824;
var inst_42826 = null;
var inst_42827 = (0);
var inst_42828 = (0);
var state_42885__$1 = (function (){var statearr_42928 = state_42885;
(statearr_42928[(9)] = inst_42826);

(statearr_42928[(29)] = inst_42817__$1);

(statearr_42928[(10)] = inst_42828);

(statearr_42928[(20)] = inst_42827);

(statearr_42928[(21)] = inst_42825);

(statearr_42928[(30)] = inst_42819);

return statearr_42928;
})();
var statearr_42929_42998 = state_42885__$1;
(statearr_42929_42998[(2)] = null);

(statearr_42929_42998[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (28))){
var inst_42825 = (state_42885[(21)]);
var inst_42844 = (state_42885[(25)]);
var inst_42844__$1 = cljs.core.seq.call(null,inst_42825);
var state_42885__$1 = (function (){var statearr_42930 = state_42885;
(statearr_42930[(25)] = inst_42844__$1);

return statearr_42930;
})();
if(inst_42844__$1){
var statearr_42931_42999 = state_42885__$1;
(statearr_42931_42999[(1)] = (33));

} else {
var statearr_42932_43000 = state_42885__$1;
(statearr_42932_43000[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (25))){
var inst_42828 = (state_42885[(10)]);
var inst_42827 = (state_42885[(20)]);
var inst_42830 = (inst_42828 < inst_42827);
var inst_42831 = inst_42830;
var state_42885__$1 = state_42885;
if(cljs.core.truth_(inst_42831)){
var statearr_42933_43001 = state_42885__$1;
(statearr_42933_43001[(1)] = (27));

} else {
var statearr_42934_43002 = state_42885__$1;
(statearr_42934_43002[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (34))){
var state_42885__$1 = state_42885;
var statearr_42935_43003 = state_42885__$1;
(statearr_42935_43003[(2)] = null);

(statearr_42935_43003[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (17))){
var state_42885__$1 = state_42885;
var statearr_42936_43004 = state_42885__$1;
(statearr_42936_43004[(2)] = null);

(statearr_42936_43004[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (3))){
var inst_42883 = (state_42885[(2)]);
var state_42885__$1 = state_42885;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42885__$1,inst_42883);
} else {
if((state_val_42886 === (12))){
var inst_42812 = (state_42885[(2)]);
var state_42885__$1 = state_42885;
var statearr_42937_43005 = state_42885__$1;
(statearr_42937_43005[(2)] = inst_42812);

(statearr_42937_43005[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (2))){
var state_42885__$1 = state_42885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42885__$1,(4),ch);
} else {
if((state_val_42886 === (23))){
var state_42885__$1 = state_42885;
var statearr_42938_43006 = state_42885__$1;
(statearr_42938_43006[(2)] = null);

(statearr_42938_43006[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (35))){
var inst_42867 = (state_42885[(2)]);
var state_42885__$1 = state_42885;
var statearr_42939_43007 = state_42885__$1;
(statearr_42939_43007[(2)] = inst_42867);

(statearr_42939_43007[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (19))){
var inst_42784 = (state_42885[(7)]);
var inst_42788 = cljs.core.chunk_first.call(null,inst_42784);
var inst_42789 = cljs.core.chunk_rest.call(null,inst_42784);
var inst_42790 = cljs.core.count.call(null,inst_42788);
var inst_42762 = inst_42789;
var inst_42763 = inst_42788;
var inst_42764 = inst_42790;
var inst_42765 = (0);
var state_42885__$1 = (function (){var statearr_42940 = state_42885;
(statearr_42940[(13)] = inst_42762);

(statearr_42940[(15)] = inst_42763);

(statearr_42940[(16)] = inst_42764);

(statearr_42940[(17)] = inst_42765);

return statearr_42940;
})();
var statearr_42941_43008 = state_42885__$1;
(statearr_42941_43008[(2)] = null);

(statearr_42941_43008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (11))){
var inst_42762 = (state_42885[(13)]);
var inst_42784 = (state_42885[(7)]);
var inst_42784__$1 = cljs.core.seq.call(null,inst_42762);
var state_42885__$1 = (function (){var statearr_42942 = state_42885;
(statearr_42942[(7)] = inst_42784__$1);

return statearr_42942;
})();
if(inst_42784__$1){
var statearr_42943_43009 = state_42885__$1;
(statearr_42943_43009[(1)] = (16));

} else {
var statearr_42944_43010 = state_42885__$1;
(statearr_42944_43010[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (9))){
var inst_42814 = (state_42885[(2)]);
var state_42885__$1 = state_42885;
var statearr_42945_43011 = state_42885__$1;
(statearr_42945_43011[(2)] = inst_42814);

(statearr_42945_43011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (5))){
var inst_42760 = cljs.core.deref.call(null,cs);
var inst_42761 = cljs.core.seq.call(null,inst_42760);
var inst_42762 = inst_42761;
var inst_42763 = null;
var inst_42764 = (0);
var inst_42765 = (0);
var state_42885__$1 = (function (){var statearr_42946 = state_42885;
(statearr_42946[(13)] = inst_42762);

(statearr_42946[(15)] = inst_42763);

(statearr_42946[(16)] = inst_42764);

(statearr_42946[(17)] = inst_42765);

return statearr_42946;
})();
var statearr_42947_43012 = state_42885__$1;
(statearr_42947_43012[(2)] = null);

(statearr_42947_43012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (14))){
var state_42885__$1 = state_42885;
var statearr_42948_43013 = state_42885__$1;
(statearr_42948_43013[(2)] = null);

(statearr_42948_43013[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (45))){
var inst_42875 = (state_42885[(2)]);
var state_42885__$1 = state_42885;
var statearr_42949_43014 = state_42885__$1;
(statearr_42949_43014[(2)] = inst_42875);

(statearr_42949_43014[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (26))){
var inst_42817 = (state_42885[(29)]);
var inst_42871 = (state_42885[(2)]);
var inst_42872 = cljs.core.seq.call(null,inst_42817);
var state_42885__$1 = (function (){var statearr_42950 = state_42885;
(statearr_42950[(31)] = inst_42871);

return statearr_42950;
})();
if(inst_42872){
var statearr_42951_43015 = state_42885__$1;
(statearr_42951_43015[(1)] = (42));

} else {
var statearr_42952_43016 = state_42885__$1;
(statearr_42952_43016[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (16))){
var inst_42784 = (state_42885[(7)]);
var inst_42786 = cljs.core.chunked_seq_QMARK_.call(null,inst_42784);
var state_42885__$1 = state_42885;
if(inst_42786){
var statearr_42953_43017 = state_42885__$1;
(statearr_42953_43017[(1)] = (19));

} else {
var statearr_42954_43018 = state_42885__$1;
(statearr_42954_43018[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (38))){
var inst_42864 = (state_42885[(2)]);
var state_42885__$1 = state_42885;
var statearr_42955_43019 = state_42885__$1;
(statearr_42955_43019[(2)] = inst_42864);

(statearr_42955_43019[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (30))){
var state_42885__$1 = state_42885;
var statearr_42956_43020 = state_42885__$1;
(statearr_42956_43020[(2)] = null);

(statearr_42956_43020[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (10))){
var inst_42763 = (state_42885[(15)]);
var inst_42765 = (state_42885[(17)]);
var inst_42773 = cljs.core._nth.call(null,inst_42763,inst_42765);
var inst_42774 = cljs.core.nth.call(null,inst_42773,(0),null);
var inst_42775 = cljs.core.nth.call(null,inst_42773,(1),null);
var state_42885__$1 = (function (){var statearr_42957 = state_42885;
(statearr_42957[(26)] = inst_42774);

return statearr_42957;
})();
if(cljs.core.truth_(inst_42775)){
var statearr_42958_43021 = state_42885__$1;
(statearr_42958_43021[(1)] = (13));

} else {
var statearr_42959_43022 = state_42885__$1;
(statearr_42959_43022[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (18))){
var inst_42810 = (state_42885[(2)]);
var state_42885__$1 = state_42885;
var statearr_42960_43023 = state_42885__$1;
(statearr_42960_43023[(2)] = inst_42810);

(statearr_42960_43023[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (42))){
var state_42885__$1 = state_42885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42885__$1,(45),dchan);
} else {
if((state_val_42886 === (37))){
var inst_42753 = (state_42885[(12)]);
var inst_42853 = (state_42885[(23)]);
var inst_42844 = (state_42885[(25)]);
var inst_42853__$1 = cljs.core.first.call(null,inst_42844);
var inst_42854 = cljs.core.async.put_BANG_.call(null,inst_42853__$1,inst_42753,done);
var state_42885__$1 = (function (){var statearr_42961 = state_42885;
(statearr_42961[(23)] = inst_42853__$1);

return statearr_42961;
})();
if(cljs.core.truth_(inst_42854)){
var statearr_42962_43024 = state_42885__$1;
(statearr_42962_43024[(1)] = (39));

} else {
var statearr_42963_43025 = state_42885__$1;
(statearr_42963_43025[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42886 === (8))){
var inst_42764 = (state_42885[(16)]);
var inst_42765 = (state_42885[(17)]);
var inst_42767 = (inst_42765 < inst_42764);
var inst_42768 = inst_42767;
var state_42885__$1 = state_42885;
if(cljs.core.truth_(inst_42768)){
var statearr_42964_43026 = state_42885__$1;
(statearr_42964_43026[(1)] = (10));

} else {
var statearr_42965_43027 = state_42885__$1;
(statearr_42965_43027[(1)] = (11));

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
});})(c__41620__auto___42973,cs,m,dchan,dctr,done))
;
return ((function (switch__41458__auto__,c__41620__auto___42973,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__41459__auto__ = null;
var cljs$core$async$mult_$_state_machine__41459__auto____0 = (function (){
var statearr_42969 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42969[(0)] = cljs$core$async$mult_$_state_machine__41459__auto__);

(statearr_42969[(1)] = (1));

return statearr_42969;
});
var cljs$core$async$mult_$_state_machine__41459__auto____1 = (function (state_42885){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_42885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e42970){if((e42970 instanceof Object)){
var ex__41462__auto__ = e42970;
var statearr_42971_43028 = state_42885;
(statearr_42971_43028[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43029 = state_42885;
state_42885 = G__43029;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__41459__auto__ = function(state_42885){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__41459__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__41459__auto____1.call(this,state_42885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__41459__auto____0;
cljs$core$async$mult_$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__41459__auto____1;
return cljs$core$async$mult_$_state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto___42973,cs,m,dchan,dctr,done))
})();
var state__41622__auto__ = (function (){var statearr_42972 = f__41621__auto__.call(null);
(statearr_42972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto___42973);

return statearr_42972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto___42973,cs,m,dchan,dctr,done))
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
var args43030 = [];
var len__37833__auto___43033 = arguments.length;
var i__37834__auto___43034 = (0);
while(true){
if((i__37834__auto___43034 < len__37833__auto___43033)){
args43030.push((arguments[i__37834__auto___43034]));

var G__43035 = (i__37834__auto___43034 + (1));
i__37834__auto___43034 = G__43035;
continue;
} else {
}
break;
}

var G__43032 = args43030.length;
switch (G__43032) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43030.length)].join('')));

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
var x__37421__auto__ = (((m == null))?null:m);
var m__37422__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__37421__auto__)]);
if(!((m__37422__auto__ == null))){
return m__37422__auto__.call(null,m,ch);
} else {
var m__37422__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__37422__auto____$1 == null))){
return m__37422__auto____$1.call(null,m,ch);
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
var x__37421__auto__ = (((m == null))?null:m);
var m__37422__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__37421__auto__)]);
if(!((m__37422__auto__ == null))){
return m__37422__auto__.call(null,m,ch);
} else {
var m__37422__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__37422__auto____$1 == null))){
return m__37422__auto____$1.call(null,m,ch);
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
var x__37421__auto__ = (((m == null))?null:m);
var m__37422__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__37421__auto__)]);
if(!((m__37422__auto__ == null))){
return m__37422__auto__.call(null,m);
} else {
var m__37422__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__37422__auto____$1 == null))){
return m__37422__auto____$1.call(null,m);
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
var x__37421__auto__ = (((m == null))?null:m);
var m__37422__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__37421__auto__)]);
if(!((m__37422__auto__ == null))){
return m__37422__auto__.call(null,m,state_map);
} else {
var m__37422__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__37422__auto____$1 == null))){
return m__37422__auto____$1.call(null,m,state_map);
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
var x__37421__auto__ = (((m == null))?null:m);
var m__37422__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__37421__auto__)]);
if(!((m__37422__auto__ == null))){
return m__37422__auto__.call(null,m,mode);
} else {
var m__37422__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__37422__auto____$1 == null))){
return m__37422__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__37840__auto__ = [];
var len__37833__auto___43047 = arguments.length;
var i__37834__auto___43048 = (0);
while(true){
if((i__37834__auto___43048 < len__37833__auto___43047)){
args__37840__auto__.push((arguments[i__37834__auto___43048]));

var G__43049 = (i__37834__auto___43048 + (1));
i__37834__auto___43048 = G__43049;
continue;
} else {
}
break;
}

var argseq__37841__auto__ = ((((3) < args__37840__auto__.length))?(new cljs.core.IndexedSeq(args__37840__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37841__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__43041){
var map__43042 = p__43041;
var map__43042__$1 = ((((!((map__43042 == null)))?((((map__43042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43042):map__43042);
var opts = map__43042__$1;
var statearr_43044_43050 = state;
(statearr_43044_43050[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__43042,map__43042__$1,opts){
return (function (val){
var statearr_43045_43051 = state;
(statearr_43045_43051[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__43042,map__43042__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_43046_43052 = state;
(statearr_43046_43052[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq43037){
var G__43038 = cljs.core.first.call(null,seq43037);
var seq43037__$1 = cljs.core.next.call(null,seq43037);
var G__43039 = cljs.core.first.call(null,seq43037__$1);
var seq43037__$2 = cljs.core.next.call(null,seq43037__$1);
var G__43040 = cljs.core.first.call(null,seq43037__$2);
var seq43037__$3 = cljs.core.next.call(null,seq43037__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43038,G__43039,G__43040,seq43037__$3);
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
if(typeof cljs.core.async.t_cljs$core$async43218 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43218 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta43219){
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
this.meta43219 = meta43219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43220,meta43219__$1){
var self__ = this;
var _43220__$1 = this;
return (new cljs.core.async.t_cljs$core$async43218(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta43219__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43218.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43220){
var self__ = this;
var _43220__$1 = this;
return self__.meta43219;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43218.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async43218.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43218.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async43218.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43218.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43218.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43218.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43218.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async43218.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta43219","meta43219",-1054698198,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43218.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43218.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43218";

cljs.core.async.t_cljs$core$async43218.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__37364__auto__,writer__37365__auto__,opt__37366__auto__){
return cljs.core._write.call(null,writer__37365__auto__,"cljs.core.async/t_cljs$core$async43218");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async43218 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async43218(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43219){
return (new cljs.core.async.t_cljs$core$async43218(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43219));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async43218(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41620__auto___43383 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto___43383,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto___43383,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_43320){
var state_val_43321 = (state_43320[(1)]);
if((state_val_43321 === (7))){
var inst_43236 = (state_43320[(2)]);
var state_43320__$1 = state_43320;
var statearr_43322_43384 = state_43320__$1;
(statearr_43322_43384[(2)] = inst_43236);

(statearr_43322_43384[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43321 === (20))){
var inst_43248 = (state_43320[(7)]);
var state_43320__$1 = state_43320;
var statearr_43323_43385 = state_43320__$1;
(statearr_43323_43385[(2)] = inst_43248);

(statearr_43323_43385[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43321 === (27))){
var state_43320__$1 = state_43320;
var statearr_43324_43386 = state_43320__$1;
(statearr_43324_43386[(2)] = null);

(statearr_43324_43386[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43321 === (1))){
var inst_43224 = (state_43320[(8)]);
var inst_43224__$1 = calc_state.call(null);
var inst_43226 = (inst_43224__$1 == null);
var inst_43227 = cljs.core.not.call(null,inst_43226);
var state_43320__$1 = (function (){var statearr_43325 = state_43320;
(statearr_43325[(8)] = inst_43224__$1);

return statearr_43325;
})();
if(inst_43227){
var statearr_43326_43387 = state_43320__$1;
(statearr_43326_43387[(1)] = (2));

} else {
var statearr_43327_43388 = state_43320__$1;
(statearr_43327_43388[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43321 === (24))){
var inst_43294 = (state_43320[(9)]);
var inst_43271 = (state_43320[(10)]);
var inst_43280 = (state_43320[(11)]);
var inst_43294__$1 = inst_43271.call(null,inst_43280);
var state_43320__$1 = (function (){var statearr_43328 = state_43320;
(statearr_43328[(9)] = inst_43294__$1);

return statearr_43328;
})();
if(cljs.core.truth_(inst_43294__$1)){
var statearr_43329_43389 = state_43320__$1;
(statearr_43329_43389[(1)] = (29));

} else {
var statearr_43330_43390 = state_43320__$1;
(statearr_43330_43390[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43321 === (4))){
var inst_43239 = (state_43320[(2)]);
var state_43320__$1 = state_43320;
if(cljs.core.truth_(inst_43239)){
var statearr_43331_43391 = state_43320__$1;
(statearr_43331_43391[(1)] = (8));

} else {
var statearr_43332_43392 = state_43320__$1;
(statearr_43332_43392[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43321 === (15))){
var inst_43265 = (state_43320[(2)]);
var state_43320__$1 = state_43320;
if(cljs.core.truth_(inst_43265)){
var statearr_43333_43393 = state_43320__$1;
(statearr_43333_43393[(1)] = (19));

} else {
var statearr_43334_43394 = state_43320__$1;
(statearr_43334_43394[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43321 === (21))){
var inst_43270 = (state_43320[(12)]);
var inst_43270__$1 = (state_43320[(2)]);
var inst_43271 = cljs.core.get.call(null,inst_43270__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43272 = cljs.core.get.call(null,inst_43270__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43273 = cljs.core.get.call(null,inst_43270__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_43320__$1 = (function (){var statearr_43335 = state_43320;
(statearr_43335[(13)] = inst_43272);

(statearr_43335[(10)] = inst_43271);

(statearr_43335[(12)] = inst_43270__$1);

return statearr_43335;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_43320__$1,(22),inst_43273);
} else {
if((state_val_43321 === (31))){
var inst_43302 = (state_43320[(2)]);
var state_43320__$1 = state_43320;
if(cljs.core.truth_(inst_43302)){
var statearr_43336_43395 = state_43320__$1;
(statearr_43336_43395[(1)] = (32));

} else {
var statearr_43337_43396 = state_43320__$1;
(statearr_43337_43396[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43321 === (32))){
var inst_43279 = (state_43320[(14)]);
var state_43320__$1 = state_43320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43320__$1,(35),out,inst_43279);
} else {
if((state_val_43321 === (33))){
var inst_43270 = (state_43320[(12)]);
var inst_43248 = inst_43270;
var state_43320__$1 = (function (){var statearr_43338 = state_43320;
(statearr_43338[(7)] = inst_43248);

return statearr_43338;
})();
var statearr_43339_43397 = state_43320__$1;
(statearr_43339_43397[(2)] = null);

(statearr_43339_43397[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43321 === (13))){
var inst_43248 = (state_43320[(7)]);
var inst_43255 = inst_43248.cljs$lang$protocol_mask$partition0$;
var inst_43256 = (inst_43255 & (64));
var inst_43257 = inst_43248.cljs$core$ISeq$;
var inst_43258 = (inst_43256) || (inst_43257);
var state_43320__$1 = state_43320;
if(cljs.core.truth_(inst_43258)){
var statearr_43340_43398 = state_43320__$1;
(statearr_43340_43398[(1)] = (16));

} else {
var statearr_43341_43399 = state_43320__$1;
(statearr_43341_43399[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43321 === (22))){
var inst_43280 = (state_43320[(11)]);
var inst_43279 = (state_43320[(14)]);
var inst_43278 = (state_43320[(2)]);
var inst_43279__$1 = cljs.core.nth.call(null,inst_43278,(0),null);
var inst_43280__$1 = cljs.core.nth.call(null,inst_43278,(1),null);
var inst_43281 = (inst_43279__$1 == null);
var inst_43282 = cljs.core._EQ_.call(null,inst_43280__$1,change);
var inst_43283 = (inst_43281) || (inst_43282);
var state_43320__$1 = (function (){var statearr_43342 = state_43320;
(statearr_43342[(11)] = inst_43280__$1);

(statearr_43342[(14)] = inst_43279__$1);

return statearr_43342;
})();
if(cljs.core.truth_(inst_43283)){
var statearr_43343_43400 = state_43320__$1;
(statearr_43343_43400[(1)] = (23));

} else {
var statearr_43344_43401 = state_43320__$1;
(statearr_43344_43401[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43321 === (36))){
var inst_43270 = (state_43320[(12)]);
var inst_43248 = inst_43270;
var state_43320__$1 = (function (){var statearr_43345 = state_43320;
(statearr_43345[(7)] = inst_43248);

return statearr_43345;
})();
var statearr_43346_43402 = state_43320__$1;
(statearr_43346_43402[(2)] = null);

(statearr_43346_43402[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43321 === (29))){
var inst_43294 = (state_43320[(9)]);
var state_43320__$1 = state_43320;
var statearr_43347_43403 = state_43320__$1;
(statearr_43347_43403[(2)] = inst_43294);

(statearr_43347_43403[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43321 === (6))){
var state_43320__$1 = state_43320;
var statearr_43348_43404 = state_43320__$1;
(statearr_43348_43404[(2)] = false);

(statearr_43348_43404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43321 === (28))){
var inst_43290 = (state_43320[(2)]);
var inst_43291 = calc_state.call(null);
var inst_43248 = inst_43291;
var state_43320__$1 = (function (){var statearr_43349 = state_43320;
(statearr_43349[(15)] = inst_43290);

(statearr_43349[(7)] = inst_43248);

return statearr_43349;
})();
var statearr_43350_43405 = state_43320__$1;
(statearr_43350_43405[(2)] = null);

(statearr_43350_43405[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43321 === (25))){
var inst_43316 = (state_43320[(2)]);
var state_43320__$1 = state_43320;
var statearr_43351_43406 = state_43320__$1;
(statearr_43351_43406[(2)] = inst_43316);

(statearr_43351_43406[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43321 === (34))){
var inst_43314 = (state_43320[(2)]);
var state_43320__$1 = state_43320;
var statearr_43352_43407 = state_43320__$1;
(statearr_43352_43407[(2)] = inst_43314);

(statearr_43352_43407[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43321 === (17))){
var state_43320__$1 = state_43320;
var statearr_43353_43408 = state_43320__$1;
(statearr_43353_43408[(2)] = false);

(statearr_43353_43408[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43321 === (3))){
var state_43320__$1 = state_43320;
var statearr_43354_43409 = state_43320__$1;
(statearr_43354_43409[(2)] = false);

(statearr_43354_43409[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43321 === (12))){
var inst_43318 = (state_43320[(2)]);
var state_43320__$1 = state_43320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43320__$1,inst_43318);
} else {
if((state_val_43321 === (2))){
var inst_43224 = (state_43320[(8)]);
var inst_43229 = inst_43224.cljs$lang$protocol_mask$partition0$;
var inst_43230 = (inst_43229 & (64));
var inst_43231 = inst_43224.cljs$core$ISeq$;
var inst_43232 = (inst_43230) || (inst_43231);
var state_43320__$1 = state_43320;
if(cljs.core.truth_(inst_43232)){
var statearr_43355_43410 = state_43320__$1;
(statearr_43355_43410[(1)] = (5));

} else {
var statearr_43356_43411 = state_43320__$1;
(statearr_43356_43411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43321 === (23))){
var inst_43279 = (state_43320[(14)]);
var inst_43285 = (inst_43279 == null);
var state_43320__$1 = state_43320;
if(cljs.core.truth_(inst_43285)){
var statearr_43357_43412 = state_43320__$1;
(statearr_43357_43412[(1)] = (26));

} else {
var statearr_43358_43413 = state_43320__$1;
(statearr_43358_43413[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43321 === (35))){
var inst_43305 = (state_43320[(2)]);
var state_43320__$1 = state_43320;
if(cljs.core.truth_(inst_43305)){
var statearr_43359_43414 = state_43320__$1;
(statearr_43359_43414[(1)] = (36));

} else {
var statearr_43360_43415 = state_43320__$1;
(statearr_43360_43415[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43321 === (19))){
var inst_43248 = (state_43320[(7)]);
var inst_43267 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43248);
var state_43320__$1 = state_43320;
var statearr_43361_43416 = state_43320__$1;
(statearr_43361_43416[(2)] = inst_43267);

(statearr_43361_43416[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43321 === (11))){
var inst_43248 = (state_43320[(7)]);
var inst_43252 = (inst_43248 == null);
var inst_43253 = cljs.core.not.call(null,inst_43252);
var state_43320__$1 = state_43320;
if(inst_43253){
var statearr_43362_43417 = state_43320__$1;
(statearr_43362_43417[(1)] = (13));

} else {
var statearr_43363_43418 = state_43320__$1;
(statearr_43363_43418[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43321 === (9))){
var inst_43224 = (state_43320[(8)]);
var state_43320__$1 = state_43320;
var statearr_43364_43419 = state_43320__$1;
(statearr_43364_43419[(2)] = inst_43224);

(statearr_43364_43419[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43321 === (5))){
var state_43320__$1 = state_43320;
var statearr_43365_43420 = state_43320__$1;
(statearr_43365_43420[(2)] = true);

(statearr_43365_43420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43321 === (14))){
var state_43320__$1 = state_43320;
var statearr_43366_43421 = state_43320__$1;
(statearr_43366_43421[(2)] = false);

(statearr_43366_43421[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43321 === (26))){
var inst_43280 = (state_43320[(11)]);
var inst_43287 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_43280);
var state_43320__$1 = state_43320;
var statearr_43367_43422 = state_43320__$1;
(statearr_43367_43422[(2)] = inst_43287);

(statearr_43367_43422[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43321 === (16))){
var state_43320__$1 = state_43320;
var statearr_43368_43423 = state_43320__$1;
(statearr_43368_43423[(2)] = true);

(statearr_43368_43423[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43321 === (38))){
var inst_43310 = (state_43320[(2)]);
var state_43320__$1 = state_43320;
var statearr_43369_43424 = state_43320__$1;
(statearr_43369_43424[(2)] = inst_43310);

(statearr_43369_43424[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43321 === (30))){
var inst_43272 = (state_43320[(13)]);
var inst_43271 = (state_43320[(10)]);
var inst_43280 = (state_43320[(11)]);
var inst_43297 = cljs.core.empty_QMARK_.call(null,inst_43271);
var inst_43298 = inst_43272.call(null,inst_43280);
var inst_43299 = cljs.core.not.call(null,inst_43298);
var inst_43300 = (inst_43297) && (inst_43299);
var state_43320__$1 = state_43320;
var statearr_43370_43425 = state_43320__$1;
(statearr_43370_43425[(2)] = inst_43300);

(statearr_43370_43425[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43321 === (10))){
var inst_43224 = (state_43320[(8)]);
var inst_43244 = (state_43320[(2)]);
var inst_43245 = cljs.core.get.call(null,inst_43244,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43246 = cljs.core.get.call(null,inst_43244,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43247 = cljs.core.get.call(null,inst_43244,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_43248 = inst_43224;
var state_43320__$1 = (function (){var statearr_43371 = state_43320;
(statearr_43371[(16)] = inst_43246);

(statearr_43371[(17)] = inst_43245);

(statearr_43371[(18)] = inst_43247);

(statearr_43371[(7)] = inst_43248);

return statearr_43371;
})();
var statearr_43372_43426 = state_43320__$1;
(statearr_43372_43426[(2)] = null);

(statearr_43372_43426[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43321 === (18))){
var inst_43262 = (state_43320[(2)]);
var state_43320__$1 = state_43320;
var statearr_43373_43427 = state_43320__$1;
(statearr_43373_43427[(2)] = inst_43262);

(statearr_43373_43427[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43321 === (37))){
var state_43320__$1 = state_43320;
var statearr_43374_43428 = state_43320__$1;
(statearr_43374_43428[(2)] = null);

(statearr_43374_43428[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43321 === (8))){
var inst_43224 = (state_43320[(8)]);
var inst_43241 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43224);
var state_43320__$1 = state_43320;
var statearr_43375_43429 = state_43320__$1;
(statearr_43375_43429[(2)] = inst_43241);

(statearr_43375_43429[(1)] = (10));


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
});})(c__41620__auto___43383,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__41458__auto__,c__41620__auto___43383,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__41459__auto__ = null;
var cljs$core$async$mix_$_state_machine__41459__auto____0 = (function (){
var statearr_43379 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43379[(0)] = cljs$core$async$mix_$_state_machine__41459__auto__);

(statearr_43379[(1)] = (1));

return statearr_43379;
});
var cljs$core$async$mix_$_state_machine__41459__auto____1 = (function (state_43320){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_43320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e43380){if((e43380 instanceof Object)){
var ex__41462__auto__ = e43380;
var statearr_43381_43430 = state_43320;
(statearr_43381_43430[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43431 = state_43320;
state_43320 = G__43431;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__41459__auto__ = function(state_43320){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__41459__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__41459__auto____1.call(this,state_43320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__41459__auto____0;
cljs$core$async$mix_$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__41459__auto____1;
return cljs$core$async$mix_$_state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto___43383,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__41622__auto__ = (function (){var statearr_43382 = f__41621__auto__.call(null);
(statearr_43382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto___43383);

return statearr_43382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto___43383,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__37421__auto__ = (((p == null))?null:p);
var m__37422__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__37421__auto__)]);
if(!((m__37422__auto__ == null))){
return m__37422__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__37422__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__37422__auto____$1 == null))){
return m__37422__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__37421__auto__ = (((p == null))?null:p);
var m__37422__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__37421__auto__)]);
if(!((m__37422__auto__ == null))){
return m__37422__auto__.call(null,p,v,ch);
} else {
var m__37422__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__37422__auto____$1 == null))){
return m__37422__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args43432 = [];
var len__37833__auto___43435 = arguments.length;
var i__37834__auto___43436 = (0);
while(true){
if((i__37834__auto___43436 < len__37833__auto___43435)){
args43432.push((arguments[i__37834__auto___43436]));

var G__43437 = (i__37834__auto___43436 + (1));
i__37834__auto___43436 = G__43437;
continue;
} else {
}
break;
}

var G__43434 = args43432.length;
switch (G__43434) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43432.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__37421__auto__ = (((p == null))?null:p);
var m__37422__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__37421__auto__)]);
if(!((m__37422__auto__ == null))){
return m__37422__auto__.call(null,p);
} else {
var m__37422__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__37422__auto____$1 == null))){
return m__37422__auto____$1.call(null,p);
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
var x__37421__auto__ = (((p == null))?null:p);
var m__37422__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__37421__auto__)]);
if(!((m__37422__auto__ == null))){
return m__37422__auto__.call(null,p,v);
} else {
var m__37422__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__37422__auto____$1 == null))){
return m__37422__auto____$1.call(null,p,v);
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
var args43440 = [];
var len__37833__auto___43565 = arguments.length;
var i__37834__auto___43566 = (0);
while(true){
if((i__37834__auto___43566 < len__37833__auto___43565)){
args43440.push((arguments[i__37834__auto___43566]));

var G__43567 = (i__37834__auto___43566 + (1));
i__37834__auto___43566 = G__43567;
continue;
} else {
}
break;
}

var G__43442 = args43440.length;
switch (G__43442) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43440.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__36758__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__36758__auto__)){
return or__36758__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__36758__auto__,mults){
return (function (p1__43439_SHARP_){
if(cljs.core.truth_(p1__43439_SHARP_.call(null,topic))){
return p1__43439_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__43439_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__36758__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async43443 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43443 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43444){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43444 = meta43444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_43445,meta43444__$1){
var self__ = this;
var _43445__$1 = this;
return (new cljs.core.async.t_cljs$core$async43443(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43444__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43443.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_43445){
var self__ = this;
var _43445__$1 = this;
return self__.meta43444;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43443.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async43443.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43443.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async43443.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43443.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async43443.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43443.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43443.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta43444","meta43444",1897522729,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43443.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43443.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43443";

cljs.core.async.t_cljs$core$async43443.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__37364__auto__,writer__37365__auto__,opt__37366__auto__){
return cljs.core._write.call(null,writer__37365__auto__,"cljs.core.async/t_cljs$core$async43443");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async43443 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async43443(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43444){
return (new cljs.core.async.t_cljs$core$async43443(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43444));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async43443(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41620__auto___43569 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto___43569,mults,ensure_mult,p){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto___43569,mults,ensure_mult,p){
return (function (state_43517){
var state_val_43518 = (state_43517[(1)]);
if((state_val_43518 === (7))){
var inst_43513 = (state_43517[(2)]);
var state_43517__$1 = state_43517;
var statearr_43519_43570 = state_43517__$1;
(statearr_43519_43570[(2)] = inst_43513);

(statearr_43519_43570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43518 === (20))){
var state_43517__$1 = state_43517;
var statearr_43520_43571 = state_43517__$1;
(statearr_43520_43571[(2)] = null);

(statearr_43520_43571[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43518 === (1))){
var state_43517__$1 = state_43517;
var statearr_43521_43572 = state_43517__$1;
(statearr_43521_43572[(2)] = null);

(statearr_43521_43572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43518 === (24))){
var inst_43496 = (state_43517[(7)]);
var inst_43505 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_43496);
var state_43517__$1 = state_43517;
var statearr_43522_43573 = state_43517__$1;
(statearr_43522_43573[(2)] = inst_43505);

(statearr_43522_43573[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43518 === (4))){
var inst_43448 = (state_43517[(8)]);
var inst_43448__$1 = (state_43517[(2)]);
var inst_43449 = (inst_43448__$1 == null);
var state_43517__$1 = (function (){var statearr_43523 = state_43517;
(statearr_43523[(8)] = inst_43448__$1);

return statearr_43523;
})();
if(cljs.core.truth_(inst_43449)){
var statearr_43524_43574 = state_43517__$1;
(statearr_43524_43574[(1)] = (5));

} else {
var statearr_43525_43575 = state_43517__$1;
(statearr_43525_43575[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43518 === (15))){
var inst_43490 = (state_43517[(2)]);
var state_43517__$1 = state_43517;
var statearr_43526_43576 = state_43517__$1;
(statearr_43526_43576[(2)] = inst_43490);

(statearr_43526_43576[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43518 === (21))){
var inst_43510 = (state_43517[(2)]);
var state_43517__$1 = (function (){var statearr_43527 = state_43517;
(statearr_43527[(9)] = inst_43510);

return statearr_43527;
})();
var statearr_43528_43577 = state_43517__$1;
(statearr_43528_43577[(2)] = null);

(statearr_43528_43577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43518 === (13))){
var inst_43472 = (state_43517[(10)]);
var inst_43474 = cljs.core.chunked_seq_QMARK_.call(null,inst_43472);
var state_43517__$1 = state_43517;
if(inst_43474){
var statearr_43529_43578 = state_43517__$1;
(statearr_43529_43578[(1)] = (16));

} else {
var statearr_43530_43579 = state_43517__$1;
(statearr_43530_43579[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43518 === (22))){
var inst_43502 = (state_43517[(2)]);
var state_43517__$1 = state_43517;
if(cljs.core.truth_(inst_43502)){
var statearr_43531_43580 = state_43517__$1;
(statearr_43531_43580[(1)] = (23));

} else {
var statearr_43532_43581 = state_43517__$1;
(statearr_43532_43581[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43518 === (6))){
var inst_43448 = (state_43517[(8)]);
var inst_43496 = (state_43517[(7)]);
var inst_43498 = (state_43517[(11)]);
var inst_43496__$1 = topic_fn.call(null,inst_43448);
var inst_43497 = cljs.core.deref.call(null,mults);
var inst_43498__$1 = cljs.core.get.call(null,inst_43497,inst_43496__$1);
var state_43517__$1 = (function (){var statearr_43533 = state_43517;
(statearr_43533[(7)] = inst_43496__$1);

(statearr_43533[(11)] = inst_43498__$1);

return statearr_43533;
})();
if(cljs.core.truth_(inst_43498__$1)){
var statearr_43534_43582 = state_43517__$1;
(statearr_43534_43582[(1)] = (19));

} else {
var statearr_43535_43583 = state_43517__$1;
(statearr_43535_43583[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43518 === (25))){
var inst_43507 = (state_43517[(2)]);
var state_43517__$1 = state_43517;
var statearr_43536_43584 = state_43517__$1;
(statearr_43536_43584[(2)] = inst_43507);

(statearr_43536_43584[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43518 === (17))){
var inst_43472 = (state_43517[(10)]);
var inst_43481 = cljs.core.first.call(null,inst_43472);
var inst_43482 = cljs.core.async.muxch_STAR_.call(null,inst_43481);
var inst_43483 = cljs.core.async.close_BANG_.call(null,inst_43482);
var inst_43484 = cljs.core.next.call(null,inst_43472);
var inst_43458 = inst_43484;
var inst_43459 = null;
var inst_43460 = (0);
var inst_43461 = (0);
var state_43517__$1 = (function (){var statearr_43537 = state_43517;
(statearr_43537[(12)] = inst_43461);

(statearr_43537[(13)] = inst_43459);

(statearr_43537[(14)] = inst_43458);

(statearr_43537[(15)] = inst_43483);

(statearr_43537[(16)] = inst_43460);

return statearr_43537;
})();
var statearr_43538_43585 = state_43517__$1;
(statearr_43538_43585[(2)] = null);

(statearr_43538_43585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43518 === (3))){
var inst_43515 = (state_43517[(2)]);
var state_43517__$1 = state_43517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43517__$1,inst_43515);
} else {
if((state_val_43518 === (12))){
var inst_43492 = (state_43517[(2)]);
var state_43517__$1 = state_43517;
var statearr_43539_43586 = state_43517__$1;
(statearr_43539_43586[(2)] = inst_43492);

(statearr_43539_43586[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43518 === (2))){
var state_43517__$1 = state_43517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43517__$1,(4),ch);
} else {
if((state_val_43518 === (23))){
var state_43517__$1 = state_43517;
var statearr_43540_43587 = state_43517__$1;
(statearr_43540_43587[(2)] = null);

(statearr_43540_43587[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43518 === (19))){
var inst_43448 = (state_43517[(8)]);
var inst_43498 = (state_43517[(11)]);
var inst_43500 = cljs.core.async.muxch_STAR_.call(null,inst_43498);
var state_43517__$1 = state_43517;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43517__$1,(22),inst_43500,inst_43448);
} else {
if((state_val_43518 === (11))){
var inst_43472 = (state_43517[(10)]);
var inst_43458 = (state_43517[(14)]);
var inst_43472__$1 = cljs.core.seq.call(null,inst_43458);
var state_43517__$1 = (function (){var statearr_43541 = state_43517;
(statearr_43541[(10)] = inst_43472__$1);

return statearr_43541;
})();
if(inst_43472__$1){
var statearr_43542_43588 = state_43517__$1;
(statearr_43542_43588[(1)] = (13));

} else {
var statearr_43543_43589 = state_43517__$1;
(statearr_43543_43589[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43518 === (9))){
var inst_43494 = (state_43517[(2)]);
var state_43517__$1 = state_43517;
var statearr_43544_43590 = state_43517__$1;
(statearr_43544_43590[(2)] = inst_43494);

(statearr_43544_43590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43518 === (5))){
var inst_43455 = cljs.core.deref.call(null,mults);
var inst_43456 = cljs.core.vals.call(null,inst_43455);
var inst_43457 = cljs.core.seq.call(null,inst_43456);
var inst_43458 = inst_43457;
var inst_43459 = null;
var inst_43460 = (0);
var inst_43461 = (0);
var state_43517__$1 = (function (){var statearr_43545 = state_43517;
(statearr_43545[(12)] = inst_43461);

(statearr_43545[(13)] = inst_43459);

(statearr_43545[(14)] = inst_43458);

(statearr_43545[(16)] = inst_43460);

return statearr_43545;
})();
var statearr_43546_43591 = state_43517__$1;
(statearr_43546_43591[(2)] = null);

(statearr_43546_43591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43518 === (14))){
var state_43517__$1 = state_43517;
var statearr_43550_43592 = state_43517__$1;
(statearr_43550_43592[(2)] = null);

(statearr_43550_43592[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43518 === (16))){
var inst_43472 = (state_43517[(10)]);
var inst_43476 = cljs.core.chunk_first.call(null,inst_43472);
var inst_43477 = cljs.core.chunk_rest.call(null,inst_43472);
var inst_43478 = cljs.core.count.call(null,inst_43476);
var inst_43458 = inst_43477;
var inst_43459 = inst_43476;
var inst_43460 = inst_43478;
var inst_43461 = (0);
var state_43517__$1 = (function (){var statearr_43551 = state_43517;
(statearr_43551[(12)] = inst_43461);

(statearr_43551[(13)] = inst_43459);

(statearr_43551[(14)] = inst_43458);

(statearr_43551[(16)] = inst_43460);

return statearr_43551;
})();
var statearr_43552_43593 = state_43517__$1;
(statearr_43552_43593[(2)] = null);

(statearr_43552_43593[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43518 === (10))){
var inst_43461 = (state_43517[(12)]);
var inst_43459 = (state_43517[(13)]);
var inst_43458 = (state_43517[(14)]);
var inst_43460 = (state_43517[(16)]);
var inst_43466 = cljs.core._nth.call(null,inst_43459,inst_43461);
var inst_43467 = cljs.core.async.muxch_STAR_.call(null,inst_43466);
var inst_43468 = cljs.core.async.close_BANG_.call(null,inst_43467);
var inst_43469 = (inst_43461 + (1));
var tmp43547 = inst_43459;
var tmp43548 = inst_43458;
var tmp43549 = inst_43460;
var inst_43458__$1 = tmp43548;
var inst_43459__$1 = tmp43547;
var inst_43460__$1 = tmp43549;
var inst_43461__$1 = inst_43469;
var state_43517__$1 = (function (){var statearr_43553 = state_43517;
(statearr_43553[(12)] = inst_43461__$1);

(statearr_43553[(13)] = inst_43459__$1);

(statearr_43553[(14)] = inst_43458__$1);

(statearr_43553[(17)] = inst_43468);

(statearr_43553[(16)] = inst_43460__$1);

return statearr_43553;
})();
var statearr_43554_43594 = state_43517__$1;
(statearr_43554_43594[(2)] = null);

(statearr_43554_43594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43518 === (18))){
var inst_43487 = (state_43517[(2)]);
var state_43517__$1 = state_43517;
var statearr_43555_43595 = state_43517__$1;
(statearr_43555_43595[(2)] = inst_43487);

(statearr_43555_43595[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43518 === (8))){
var inst_43461 = (state_43517[(12)]);
var inst_43460 = (state_43517[(16)]);
var inst_43463 = (inst_43461 < inst_43460);
var inst_43464 = inst_43463;
var state_43517__$1 = state_43517;
if(cljs.core.truth_(inst_43464)){
var statearr_43556_43596 = state_43517__$1;
(statearr_43556_43596[(1)] = (10));

} else {
var statearr_43557_43597 = state_43517__$1;
(statearr_43557_43597[(1)] = (11));

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
});})(c__41620__auto___43569,mults,ensure_mult,p))
;
return ((function (switch__41458__auto__,c__41620__auto___43569,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__41459__auto__ = null;
var cljs$core$async$state_machine__41459__auto____0 = (function (){
var statearr_43561 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43561[(0)] = cljs$core$async$state_machine__41459__auto__);

(statearr_43561[(1)] = (1));

return statearr_43561;
});
var cljs$core$async$state_machine__41459__auto____1 = (function (state_43517){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_43517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e43562){if((e43562 instanceof Object)){
var ex__41462__auto__ = e43562;
var statearr_43563_43598 = state_43517;
(statearr_43563_43598[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43599 = state_43517;
state_43517 = G__43599;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
cljs$core$async$state_machine__41459__auto__ = function(state_43517){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41459__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41459__auto____1.call(this,state_43517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41459__auto____0;
cljs$core$async$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41459__auto____1;
return cljs$core$async$state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto___43569,mults,ensure_mult,p))
})();
var state__41622__auto__ = (function (){var statearr_43564 = f__41621__auto__.call(null);
(statearr_43564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto___43569);

return statearr_43564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto___43569,mults,ensure_mult,p))
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
var args43600 = [];
var len__37833__auto___43603 = arguments.length;
var i__37834__auto___43604 = (0);
while(true){
if((i__37834__auto___43604 < len__37833__auto___43603)){
args43600.push((arguments[i__37834__auto___43604]));

var G__43605 = (i__37834__auto___43604 + (1));
i__37834__auto___43604 = G__43605;
continue;
} else {
}
break;
}

var G__43602 = args43600.length;
switch (G__43602) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43600.length)].join('')));

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
var args43607 = [];
var len__37833__auto___43610 = arguments.length;
var i__37834__auto___43611 = (0);
while(true){
if((i__37834__auto___43611 < len__37833__auto___43610)){
args43607.push((arguments[i__37834__auto___43611]));

var G__43612 = (i__37834__auto___43611 + (1));
i__37834__auto___43611 = G__43612;
continue;
} else {
}
break;
}

var G__43609 = args43607.length;
switch (G__43609) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43607.length)].join('')));

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
var args43614 = [];
var len__37833__auto___43685 = arguments.length;
var i__37834__auto___43686 = (0);
while(true){
if((i__37834__auto___43686 < len__37833__auto___43685)){
args43614.push((arguments[i__37834__auto___43686]));

var G__43687 = (i__37834__auto___43686 + (1));
i__37834__auto___43686 = G__43687;
continue;
} else {
}
break;
}

var G__43616 = args43614.length;
switch (G__43616) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43614.length)].join('')));

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
var c__41620__auto___43689 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto___43689,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto___43689,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_43655){
var state_val_43656 = (state_43655[(1)]);
if((state_val_43656 === (7))){
var state_43655__$1 = state_43655;
var statearr_43657_43690 = state_43655__$1;
(statearr_43657_43690[(2)] = null);

(statearr_43657_43690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43656 === (1))){
var state_43655__$1 = state_43655;
var statearr_43658_43691 = state_43655__$1;
(statearr_43658_43691[(2)] = null);

(statearr_43658_43691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43656 === (4))){
var inst_43619 = (state_43655[(7)]);
var inst_43621 = (inst_43619 < cnt);
var state_43655__$1 = state_43655;
if(cljs.core.truth_(inst_43621)){
var statearr_43659_43692 = state_43655__$1;
(statearr_43659_43692[(1)] = (6));

} else {
var statearr_43660_43693 = state_43655__$1;
(statearr_43660_43693[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43656 === (15))){
var inst_43651 = (state_43655[(2)]);
var state_43655__$1 = state_43655;
var statearr_43661_43694 = state_43655__$1;
(statearr_43661_43694[(2)] = inst_43651);

(statearr_43661_43694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43656 === (13))){
var inst_43644 = cljs.core.async.close_BANG_.call(null,out);
var state_43655__$1 = state_43655;
var statearr_43662_43695 = state_43655__$1;
(statearr_43662_43695[(2)] = inst_43644);

(statearr_43662_43695[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43656 === (6))){
var state_43655__$1 = state_43655;
var statearr_43663_43696 = state_43655__$1;
(statearr_43663_43696[(2)] = null);

(statearr_43663_43696[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43656 === (3))){
var inst_43653 = (state_43655[(2)]);
var state_43655__$1 = state_43655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43655__$1,inst_43653);
} else {
if((state_val_43656 === (12))){
var inst_43641 = (state_43655[(8)]);
var inst_43641__$1 = (state_43655[(2)]);
var inst_43642 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_43641__$1);
var state_43655__$1 = (function (){var statearr_43664 = state_43655;
(statearr_43664[(8)] = inst_43641__$1);

return statearr_43664;
})();
if(cljs.core.truth_(inst_43642)){
var statearr_43665_43697 = state_43655__$1;
(statearr_43665_43697[(1)] = (13));

} else {
var statearr_43666_43698 = state_43655__$1;
(statearr_43666_43698[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43656 === (2))){
var inst_43618 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_43619 = (0);
var state_43655__$1 = (function (){var statearr_43667 = state_43655;
(statearr_43667[(7)] = inst_43619);

(statearr_43667[(9)] = inst_43618);

return statearr_43667;
})();
var statearr_43668_43699 = state_43655__$1;
(statearr_43668_43699[(2)] = null);

(statearr_43668_43699[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43656 === (11))){
var inst_43619 = (state_43655[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43655,(10),Object,null,(9));
var inst_43628 = chs__$1.call(null,inst_43619);
var inst_43629 = done.call(null,inst_43619);
var inst_43630 = cljs.core.async.take_BANG_.call(null,inst_43628,inst_43629);
var state_43655__$1 = state_43655;
var statearr_43669_43700 = state_43655__$1;
(statearr_43669_43700[(2)] = inst_43630);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43655__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43656 === (9))){
var inst_43619 = (state_43655[(7)]);
var inst_43632 = (state_43655[(2)]);
var inst_43633 = (inst_43619 + (1));
var inst_43619__$1 = inst_43633;
var state_43655__$1 = (function (){var statearr_43670 = state_43655;
(statearr_43670[(7)] = inst_43619__$1);

(statearr_43670[(10)] = inst_43632);

return statearr_43670;
})();
var statearr_43671_43701 = state_43655__$1;
(statearr_43671_43701[(2)] = null);

(statearr_43671_43701[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43656 === (5))){
var inst_43639 = (state_43655[(2)]);
var state_43655__$1 = (function (){var statearr_43672 = state_43655;
(statearr_43672[(11)] = inst_43639);

return statearr_43672;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43655__$1,(12),dchan);
} else {
if((state_val_43656 === (14))){
var inst_43641 = (state_43655[(8)]);
var inst_43646 = cljs.core.apply.call(null,f,inst_43641);
var state_43655__$1 = state_43655;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43655__$1,(16),out,inst_43646);
} else {
if((state_val_43656 === (16))){
var inst_43648 = (state_43655[(2)]);
var state_43655__$1 = (function (){var statearr_43673 = state_43655;
(statearr_43673[(12)] = inst_43648);

return statearr_43673;
})();
var statearr_43674_43702 = state_43655__$1;
(statearr_43674_43702[(2)] = null);

(statearr_43674_43702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43656 === (10))){
var inst_43623 = (state_43655[(2)]);
var inst_43624 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_43655__$1 = (function (){var statearr_43675 = state_43655;
(statearr_43675[(13)] = inst_43623);

return statearr_43675;
})();
var statearr_43676_43703 = state_43655__$1;
(statearr_43676_43703[(2)] = inst_43624);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43655__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43656 === (8))){
var inst_43637 = (state_43655[(2)]);
var state_43655__$1 = state_43655;
var statearr_43677_43704 = state_43655__$1;
(statearr_43677_43704[(2)] = inst_43637);

(statearr_43677_43704[(1)] = (5));


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
});})(c__41620__auto___43689,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__41458__auto__,c__41620__auto___43689,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__41459__auto__ = null;
var cljs$core$async$state_machine__41459__auto____0 = (function (){
var statearr_43681 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43681[(0)] = cljs$core$async$state_machine__41459__auto__);

(statearr_43681[(1)] = (1));

return statearr_43681;
});
var cljs$core$async$state_machine__41459__auto____1 = (function (state_43655){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_43655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e43682){if((e43682 instanceof Object)){
var ex__41462__auto__ = e43682;
var statearr_43683_43705 = state_43655;
(statearr_43683_43705[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43706 = state_43655;
state_43655 = G__43706;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
cljs$core$async$state_machine__41459__auto__ = function(state_43655){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41459__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41459__auto____1.call(this,state_43655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41459__auto____0;
cljs$core$async$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41459__auto____1;
return cljs$core$async$state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto___43689,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__41622__auto__ = (function (){var statearr_43684 = f__41621__auto__.call(null);
(statearr_43684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto___43689);

return statearr_43684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto___43689,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args43708 = [];
var len__37833__auto___43766 = arguments.length;
var i__37834__auto___43767 = (0);
while(true){
if((i__37834__auto___43767 < len__37833__auto___43766)){
args43708.push((arguments[i__37834__auto___43767]));

var G__43768 = (i__37834__auto___43767 + (1));
i__37834__auto___43767 = G__43768;
continue;
} else {
}
break;
}

var G__43710 = args43708.length;
switch (G__43710) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43708.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41620__auto___43770 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto___43770,out){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto___43770,out){
return (function (state_43742){
var state_val_43743 = (state_43742[(1)]);
if((state_val_43743 === (7))){
var inst_43722 = (state_43742[(7)]);
var inst_43721 = (state_43742[(8)]);
var inst_43721__$1 = (state_43742[(2)]);
var inst_43722__$1 = cljs.core.nth.call(null,inst_43721__$1,(0),null);
var inst_43723 = cljs.core.nth.call(null,inst_43721__$1,(1),null);
var inst_43724 = (inst_43722__$1 == null);
var state_43742__$1 = (function (){var statearr_43744 = state_43742;
(statearr_43744[(7)] = inst_43722__$1);

(statearr_43744[(8)] = inst_43721__$1);

(statearr_43744[(9)] = inst_43723);

return statearr_43744;
})();
if(cljs.core.truth_(inst_43724)){
var statearr_43745_43771 = state_43742__$1;
(statearr_43745_43771[(1)] = (8));

} else {
var statearr_43746_43772 = state_43742__$1;
(statearr_43746_43772[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43743 === (1))){
var inst_43711 = cljs.core.vec.call(null,chs);
var inst_43712 = inst_43711;
var state_43742__$1 = (function (){var statearr_43747 = state_43742;
(statearr_43747[(10)] = inst_43712);

return statearr_43747;
})();
var statearr_43748_43773 = state_43742__$1;
(statearr_43748_43773[(2)] = null);

(statearr_43748_43773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43743 === (4))){
var inst_43712 = (state_43742[(10)]);
var state_43742__$1 = state_43742;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43742__$1,(7),inst_43712);
} else {
if((state_val_43743 === (6))){
var inst_43738 = (state_43742[(2)]);
var state_43742__$1 = state_43742;
var statearr_43749_43774 = state_43742__$1;
(statearr_43749_43774[(2)] = inst_43738);

(statearr_43749_43774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43743 === (3))){
var inst_43740 = (state_43742[(2)]);
var state_43742__$1 = state_43742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43742__$1,inst_43740);
} else {
if((state_val_43743 === (2))){
var inst_43712 = (state_43742[(10)]);
var inst_43714 = cljs.core.count.call(null,inst_43712);
var inst_43715 = (inst_43714 > (0));
var state_43742__$1 = state_43742;
if(cljs.core.truth_(inst_43715)){
var statearr_43751_43775 = state_43742__$1;
(statearr_43751_43775[(1)] = (4));

} else {
var statearr_43752_43776 = state_43742__$1;
(statearr_43752_43776[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43743 === (11))){
var inst_43712 = (state_43742[(10)]);
var inst_43731 = (state_43742[(2)]);
var tmp43750 = inst_43712;
var inst_43712__$1 = tmp43750;
var state_43742__$1 = (function (){var statearr_43753 = state_43742;
(statearr_43753[(10)] = inst_43712__$1);

(statearr_43753[(11)] = inst_43731);

return statearr_43753;
})();
var statearr_43754_43777 = state_43742__$1;
(statearr_43754_43777[(2)] = null);

(statearr_43754_43777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43743 === (9))){
var inst_43722 = (state_43742[(7)]);
var state_43742__$1 = state_43742;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43742__$1,(11),out,inst_43722);
} else {
if((state_val_43743 === (5))){
var inst_43736 = cljs.core.async.close_BANG_.call(null,out);
var state_43742__$1 = state_43742;
var statearr_43755_43778 = state_43742__$1;
(statearr_43755_43778[(2)] = inst_43736);

(statearr_43755_43778[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43743 === (10))){
var inst_43734 = (state_43742[(2)]);
var state_43742__$1 = state_43742;
var statearr_43756_43779 = state_43742__$1;
(statearr_43756_43779[(2)] = inst_43734);

(statearr_43756_43779[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43743 === (8))){
var inst_43722 = (state_43742[(7)]);
var inst_43712 = (state_43742[(10)]);
var inst_43721 = (state_43742[(8)]);
var inst_43723 = (state_43742[(9)]);
var inst_43726 = (function (){var cs = inst_43712;
var vec__43717 = inst_43721;
var v = inst_43722;
var c = inst_43723;
return ((function (cs,vec__43717,v,c,inst_43722,inst_43712,inst_43721,inst_43723,state_val_43743,c__41620__auto___43770,out){
return (function (p1__43707_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__43707_SHARP_);
});
;})(cs,vec__43717,v,c,inst_43722,inst_43712,inst_43721,inst_43723,state_val_43743,c__41620__auto___43770,out))
})();
var inst_43727 = cljs.core.filterv.call(null,inst_43726,inst_43712);
var inst_43712__$1 = inst_43727;
var state_43742__$1 = (function (){var statearr_43757 = state_43742;
(statearr_43757[(10)] = inst_43712__$1);

return statearr_43757;
})();
var statearr_43758_43780 = state_43742__$1;
(statearr_43758_43780[(2)] = null);

(statearr_43758_43780[(1)] = (2));


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
});})(c__41620__auto___43770,out))
;
return ((function (switch__41458__auto__,c__41620__auto___43770,out){
return (function() {
var cljs$core$async$state_machine__41459__auto__ = null;
var cljs$core$async$state_machine__41459__auto____0 = (function (){
var statearr_43762 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43762[(0)] = cljs$core$async$state_machine__41459__auto__);

(statearr_43762[(1)] = (1));

return statearr_43762;
});
var cljs$core$async$state_machine__41459__auto____1 = (function (state_43742){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_43742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e43763){if((e43763 instanceof Object)){
var ex__41462__auto__ = e43763;
var statearr_43764_43781 = state_43742;
(statearr_43764_43781[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43782 = state_43742;
state_43742 = G__43782;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
cljs$core$async$state_machine__41459__auto__ = function(state_43742){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41459__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41459__auto____1.call(this,state_43742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41459__auto____0;
cljs$core$async$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41459__auto____1;
return cljs$core$async$state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto___43770,out))
})();
var state__41622__auto__ = (function (){var statearr_43765 = f__41621__auto__.call(null);
(statearr_43765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto___43770);

return statearr_43765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto___43770,out))
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
var args43783 = [];
var len__37833__auto___43832 = arguments.length;
var i__37834__auto___43833 = (0);
while(true){
if((i__37834__auto___43833 < len__37833__auto___43832)){
args43783.push((arguments[i__37834__auto___43833]));

var G__43834 = (i__37834__auto___43833 + (1));
i__37834__auto___43833 = G__43834;
continue;
} else {
}
break;
}

var G__43785 = args43783.length;
switch (G__43785) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43783.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41620__auto___43836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto___43836,out){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto___43836,out){
return (function (state_43809){
var state_val_43810 = (state_43809[(1)]);
if((state_val_43810 === (7))){
var inst_43791 = (state_43809[(7)]);
var inst_43791__$1 = (state_43809[(2)]);
var inst_43792 = (inst_43791__$1 == null);
var inst_43793 = cljs.core.not.call(null,inst_43792);
var state_43809__$1 = (function (){var statearr_43811 = state_43809;
(statearr_43811[(7)] = inst_43791__$1);

return statearr_43811;
})();
if(inst_43793){
var statearr_43812_43837 = state_43809__$1;
(statearr_43812_43837[(1)] = (8));

} else {
var statearr_43813_43838 = state_43809__$1;
(statearr_43813_43838[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43810 === (1))){
var inst_43786 = (0);
var state_43809__$1 = (function (){var statearr_43814 = state_43809;
(statearr_43814[(8)] = inst_43786);

return statearr_43814;
})();
var statearr_43815_43839 = state_43809__$1;
(statearr_43815_43839[(2)] = null);

(statearr_43815_43839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43810 === (4))){
var state_43809__$1 = state_43809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43809__$1,(7),ch);
} else {
if((state_val_43810 === (6))){
var inst_43804 = (state_43809[(2)]);
var state_43809__$1 = state_43809;
var statearr_43816_43840 = state_43809__$1;
(statearr_43816_43840[(2)] = inst_43804);

(statearr_43816_43840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43810 === (3))){
var inst_43806 = (state_43809[(2)]);
var inst_43807 = cljs.core.async.close_BANG_.call(null,out);
var state_43809__$1 = (function (){var statearr_43817 = state_43809;
(statearr_43817[(9)] = inst_43806);

return statearr_43817;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43809__$1,inst_43807);
} else {
if((state_val_43810 === (2))){
var inst_43786 = (state_43809[(8)]);
var inst_43788 = (inst_43786 < n);
var state_43809__$1 = state_43809;
if(cljs.core.truth_(inst_43788)){
var statearr_43818_43841 = state_43809__$1;
(statearr_43818_43841[(1)] = (4));

} else {
var statearr_43819_43842 = state_43809__$1;
(statearr_43819_43842[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43810 === (11))){
var inst_43786 = (state_43809[(8)]);
var inst_43796 = (state_43809[(2)]);
var inst_43797 = (inst_43786 + (1));
var inst_43786__$1 = inst_43797;
var state_43809__$1 = (function (){var statearr_43820 = state_43809;
(statearr_43820[(10)] = inst_43796);

(statearr_43820[(8)] = inst_43786__$1);

return statearr_43820;
})();
var statearr_43821_43843 = state_43809__$1;
(statearr_43821_43843[(2)] = null);

(statearr_43821_43843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43810 === (9))){
var state_43809__$1 = state_43809;
var statearr_43822_43844 = state_43809__$1;
(statearr_43822_43844[(2)] = null);

(statearr_43822_43844[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43810 === (5))){
var state_43809__$1 = state_43809;
var statearr_43823_43845 = state_43809__$1;
(statearr_43823_43845[(2)] = null);

(statearr_43823_43845[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43810 === (10))){
var inst_43801 = (state_43809[(2)]);
var state_43809__$1 = state_43809;
var statearr_43824_43846 = state_43809__$1;
(statearr_43824_43846[(2)] = inst_43801);

(statearr_43824_43846[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43810 === (8))){
var inst_43791 = (state_43809[(7)]);
var state_43809__$1 = state_43809;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43809__$1,(11),out,inst_43791);
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
});})(c__41620__auto___43836,out))
;
return ((function (switch__41458__auto__,c__41620__auto___43836,out){
return (function() {
var cljs$core$async$state_machine__41459__auto__ = null;
var cljs$core$async$state_machine__41459__auto____0 = (function (){
var statearr_43828 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43828[(0)] = cljs$core$async$state_machine__41459__auto__);

(statearr_43828[(1)] = (1));

return statearr_43828;
});
var cljs$core$async$state_machine__41459__auto____1 = (function (state_43809){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_43809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e43829){if((e43829 instanceof Object)){
var ex__41462__auto__ = e43829;
var statearr_43830_43847 = state_43809;
(statearr_43830_43847[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43848 = state_43809;
state_43809 = G__43848;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
cljs$core$async$state_machine__41459__auto__ = function(state_43809){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41459__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41459__auto____1.call(this,state_43809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41459__auto____0;
cljs$core$async$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41459__auto____1;
return cljs$core$async$state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto___43836,out))
})();
var state__41622__auto__ = (function (){var statearr_43831 = f__41621__auto__.call(null);
(statearr_43831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto___43836);

return statearr_43831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto___43836,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async43856 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43856 = (function (map_LT_,f,ch,meta43857){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta43857 = meta43857;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43858,meta43857__$1){
var self__ = this;
var _43858__$1 = this;
return (new cljs.core.async.t_cljs$core$async43856(self__.map_LT_,self__.f,self__.ch,meta43857__$1));
});

cljs.core.async.t_cljs$core$async43856.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43858){
var self__ = this;
var _43858__$1 = this;
return self__.meta43857;
});

cljs.core.async.t_cljs$core$async43856.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async43856.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43856.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43856.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async43856.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async43859 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43859 = (function (map_LT_,f,ch,meta43857,_,fn1,meta43860){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta43857 = meta43857;
this._ = _;
this.fn1 = fn1;
this.meta43860 = meta43860;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_43861,meta43860__$1){
var self__ = this;
var _43861__$1 = this;
return (new cljs.core.async.t_cljs$core$async43859(self__.map_LT_,self__.f,self__.ch,self__.meta43857,self__._,self__.fn1,meta43860__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async43859.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_43861){
var self__ = this;
var _43861__$1 = this;
return self__.meta43860;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43859.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async43859.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43859.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43859.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__43849_SHARP_){
return f1.call(null,(((p1__43849_SHARP_ == null))?null:self__.f.call(null,p1__43849_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async43859.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43857","meta43857",-1988356681,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43856","cljs.core.async/t_cljs$core$async43856",1570284455,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43860","meta43860",932510866,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43859.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43859.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43859";

cljs.core.async.t_cljs$core$async43859.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__37364__auto__,writer__37365__auto__,opt__37366__auto__){
return cljs.core._write.call(null,writer__37365__auto__,"cljs.core.async/t_cljs$core$async43859");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async43859 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43859(map_LT___$1,f__$1,ch__$1,meta43857__$1,___$2,fn1__$1,meta43860){
return (new cljs.core.async.t_cljs$core$async43859(map_LT___$1,f__$1,ch__$1,meta43857__$1,___$2,fn1__$1,meta43860));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async43859(self__.map_LT_,self__.f,self__.ch,self__.meta43857,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__36746__auto__ = ret;
if(cljs.core.truth_(and__36746__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__36746__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async43856.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async43856.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async43856.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43857","meta43857",-1988356681,null)], null);
});

cljs.core.async.t_cljs$core$async43856.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43856.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43856";

cljs.core.async.t_cljs$core$async43856.cljs$lang$ctorPrWriter = (function (this__37364__auto__,writer__37365__auto__,opt__37366__auto__){
return cljs.core._write.call(null,writer__37365__auto__,"cljs.core.async/t_cljs$core$async43856");
});

cljs.core.async.__GT_t_cljs$core$async43856 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43856(map_LT___$1,f__$1,ch__$1,meta43857){
return (new cljs.core.async.t_cljs$core$async43856(map_LT___$1,f__$1,ch__$1,meta43857));
});

}

return (new cljs.core.async.t_cljs$core$async43856(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async43865 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43865 = (function (map_GT_,f,ch,meta43866){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta43866 = meta43866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43867,meta43866__$1){
var self__ = this;
var _43867__$1 = this;
return (new cljs.core.async.t_cljs$core$async43865(self__.map_GT_,self__.f,self__.ch,meta43866__$1));
});

cljs.core.async.t_cljs$core$async43865.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43867){
var self__ = this;
var _43867__$1 = this;
return self__.meta43866;
});

cljs.core.async.t_cljs$core$async43865.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async43865.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43865.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async43865.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43865.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async43865.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async43865.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43866","meta43866",133816263,null)], null);
});

cljs.core.async.t_cljs$core$async43865.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43865.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43865";

cljs.core.async.t_cljs$core$async43865.cljs$lang$ctorPrWriter = (function (this__37364__auto__,writer__37365__auto__,opt__37366__auto__){
return cljs.core._write.call(null,writer__37365__auto__,"cljs.core.async/t_cljs$core$async43865");
});

cljs.core.async.__GT_t_cljs$core$async43865 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43865(map_GT___$1,f__$1,ch__$1,meta43866){
return (new cljs.core.async.t_cljs$core$async43865(map_GT___$1,f__$1,ch__$1,meta43866));
});

}

return (new cljs.core.async.t_cljs$core$async43865(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async43871 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43871 = (function (filter_GT_,p,ch,meta43872){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta43872 = meta43872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43873,meta43872__$1){
var self__ = this;
var _43873__$1 = this;
return (new cljs.core.async.t_cljs$core$async43871(self__.filter_GT_,self__.p,self__.ch,meta43872__$1));
});

cljs.core.async.t_cljs$core$async43871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43873){
var self__ = this;
var _43873__$1 = this;
return self__.meta43872;
});

cljs.core.async.t_cljs$core$async43871.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async43871.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43871.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43871.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async43871.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43871.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async43871.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async43871.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43872","meta43872",-265212869,null)], null);
});

cljs.core.async.t_cljs$core$async43871.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43871.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43871";

cljs.core.async.t_cljs$core$async43871.cljs$lang$ctorPrWriter = (function (this__37364__auto__,writer__37365__auto__,opt__37366__auto__){
return cljs.core._write.call(null,writer__37365__auto__,"cljs.core.async/t_cljs$core$async43871");
});

cljs.core.async.__GT_t_cljs$core$async43871 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43871(filter_GT___$1,p__$1,ch__$1,meta43872){
return (new cljs.core.async.t_cljs$core$async43871(filter_GT___$1,p__$1,ch__$1,meta43872));
});

}

return (new cljs.core.async.t_cljs$core$async43871(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args43874 = [];
var len__37833__auto___43918 = arguments.length;
var i__37834__auto___43919 = (0);
while(true){
if((i__37834__auto___43919 < len__37833__auto___43918)){
args43874.push((arguments[i__37834__auto___43919]));

var G__43920 = (i__37834__auto___43919 + (1));
i__37834__auto___43919 = G__43920;
continue;
} else {
}
break;
}

var G__43876 = args43874.length;
switch (G__43876) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43874.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41620__auto___43922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto___43922,out){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto___43922,out){
return (function (state_43897){
var state_val_43898 = (state_43897[(1)]);
if((state_val_43898 === (7))){
var inst_43893 = (state_43897[(2)]);
var state_43897__$1 = state_43897;
var statearr_43899_43923 = state_43897__$1;
(statearr_43899_43923[(2)] = inst_43893);

(statearr_43899_43923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43898 === (1))){
var state_43897__$1 = state_43897;
var statearr_43900_43924 = state_43897__$1;
(statearr_43900_43924[(2)] = null);

(statearr_43900_43924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43898 === (4))){
var inst_43879 = (state_43897[(7)]);
var inst_43879__$1 = (state_43897[(2)]);
var inst_43880 = (inst_43879__$1 == null);
var state_43897__$1 = (function (){var statearr_43901 = state_43897;
(statearr_43901[(7)] = inst_43879__$1);

return statearr_43901;
})();
if(cljs.core.truth_(inst_43880)){
var statearr_43902_43925 = state_43897__$1;
(statearr_43902_43925[(1)] = (5));

} else {
var statearr_43903_43926 = state_43897__$1;
(statearr_43903_43926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43898 === (6))){
var inst_43879 = (state_43897[(7)]);
var inst_43884 = p.call(null,inst_43879);
var state_43897__$1 = state_43897;
if(cljs.core.truth_(inst_43884)){
var statearr_43904_43927 = state_43897__$1;
(statearr_43904_43927[(1)] = (8));

} else {
var statearr_43905_43928 = state_43897__$1;
(statearr_43905_43928[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43898 === (3))){
var inst_43895 = (state_43897[(2)]);
var state_43897__$1 = state_43897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43897__$1,inst_43895);
} else {
if((state_val_43898 === (2))){
var state_43897__$1 = state_43897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43897__$1,(4),ch);
} else {
if((state_val_43898 === (11))){
var inst_43887 = (state_43897[(2)]);
var state_43897__$1 = state_43897;
var statearr_43906_43929 = state_43897__$1;
(statearr_43906_43929[(2)] = inst_43887);

(statearr_43906_43929[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43898 === (9))){
var state_43897__$1 = state_43897;
var statearr_43907_43930 = state_43897__$1;
(statearr_43907_43930[(2)] = null);

(statearr_43907_43930[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43898 === (5))){
var inst_43882 = cljs.core.async.close_BANG_.call(null,out);
var state_43897__$1 = state_43897;
var statearr_43908_43931 = state_43897__$1;
(statearr_43908_43931[(2)] = inst_43882);

(statearr_43908_43931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43898 === (10))){
var inst_43890 = (state_43897[(2)]);
var state_43897__$1 = (function (){var statearr_43909 = state_43897;
(statearr_43909[(8)] = inst_43890);

return statearr_43909;
})();
var statearr_43910_43932 = state_43897__$1;
(statearr_43910_43932[(2)] = null);

(statearr_43910_43932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43898 === (8))){
var inst_43879 = (state_43897[(7)]);
var state_43897__$1 = state_43897;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43897__$1,(11),out,inst_43879);
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
});})(c__41620__auto___43922,out))
;
return ((function (switch__41458__auto__,c__41620__auto___43922,out){
return (function() {
var cljs$core$async$state_machine__41459__auto__ = null;
var cljs$core$async$state_machine__41459__auto____0 = (function (){
var statearr_43914 = [null,null,null,null,null,null,null,null,null];
(statearr_43914[(0)] = cljs$core$async$state_machine__41459__auto__);

(statearr_43914[(1)] = (1));

return statearr_43914;
});
var cljs$core$async$state_machine__41459__auto____1 = (function (state_43897){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_43897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e43915){if((e43915 instanceof Object)){
var ex__41462__auto__ = e43915;
var statearr_43916_43933 = state_43897;
(statearr_43916_43933[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43934 = state_43897;
state_43897 = G__43934;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
cljs$core$async$state_machine__41459__auto__ = function(state_43897){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41459__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41459__auto____1.call(this,state_43897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41459__auto____0;
cljs$core$async$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41459__auto____1;
return cljs$core$async$state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto___43922,out))
})();
var state__41622__auto__ = (function (){var statearr_43917 = f__41621__auto__.call(null);
(statearr_43917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto___43922);

return statearr_43917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto___43922,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args43935 = [];
var len__37833__auto___43938 = arguments.length;
var i__37834__auto___43939 = (0);
while(true){
if((i__37834__auto___43939 < len__37833__auto___43938)){
args43935.push((arguments[i__37834__auto___43939]));

var G__43940 = (i__37834__auto___43939 + (1));
i__37834__auto___43939 = G__43940;
continue;
} else {
}
break;
}

var G__43937 = args43935.length;
switch (G__43937) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43935.length)].join('')));

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
var c__41620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto__){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto__){
return (function (state_44107){
var state_val_44108 = (state_44107[(1)]);
if((state_val_44108 === (7))){
var inst_44103 = (state_44107[(2)]);
var state_44107__$1 = state_44107;
var statearr_44109_44150 = state_44107__$1;
(statearr_44109_44150[(2)] = inst_44103);

(statearr_44109_44150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44108 === (20))){
var inst_44073 = (state_44107[(7)]);
var inst_44084 = (state_44107[(2)]);
var inst_44085 = cljs.core.next.call(null,inst_44073);
var inst_44059 = inst_44085;
var inst_44060 = null;
var inst_44061 = (0);
var inst_44062 = (0);
var state_44107__$1 = (function (){var statearr_44110 = state_44107;
(statearr_44110[(8)] = inst_44059);

(statearr_44110[(9)] = inst_44061);

(statearr_44110[(10)] = inst_44084);

(statearr_44110[(11)] = inst_44062);

(statearr_44110[(12)] = inst_44060);

return statearr_44110;
})();
var statearr_44111_44151 = state_44107__$1;
(statearr_44111_44151[(2)] = null);

(statearr_44111_44151[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44108 === (1))){
var state_44107__$1 = state_44107;
var statearr_44112_44152 = state_44107__$1;
(statearr_44112_44152[(2)] = null);

(statearr_44112_44152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44108 === (4))){
var inst_44048 = (state_44107[(13)]);
var inst_44048__$1 = (state_44107[(2)]);
var inst_44049 = (inst_44048__$1 == null);
var state_44107__$1 = (function (){var statearr_44113 = state_44107;
(statearr_44113[(13)] = inst_44048__$1);

return statearr_44113;
})();
if(cljs.core.truth_(inst_44049)){
var statearr_44114_44153 = state_44107__$1;
(statearr_44114_44153[(1)] = (5));

} else {
var statearr_44115_44154 = state_44107__$1;
(statearr_44115_44154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44108 === (15))){
var state_44107__$1 = state_44107;
var statearr_44119_44155 = state_44107__$1;
(statearr_44119_44155[(2)] = null);

(statearr_44119_44155[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44108 === (21))){
var state_44107__$1 = state_44107;
var statearr_44120_44156 = state_44107__$1;
(statearr_44120_44156[(2)] = null);

(statearr_44120_44156[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44108 === (13))){
var inst_44059 = (state_44107[(8)]);
var inst_44061 = (state_44107[(9)]);
var inst_44062 = (state_44107[(11)]);
var inst_44060 = (state_44107[(12)]);
var inst_44069 = (state_44107[(2)]);
var inst_44070 = (inst_44062 + (1));
var tmp44116 = inst_44059;
var tmp44117 = inst_44061;
var tmp44118 = inst_44060;
var inst_44059__$1 = tmp44116;
var inst_44060__$1 = tmp44118;
var inst_44061__$1 = tmp44117;
var inst_44062__$1 = inst_44070;
var state_44107__$1 = (function (){var statearr_44121 = state_44107;
(statearr_44121[(8)] = inst_44059__$1);

(statearr_44121[(9)] = inst_44061__$1);

(statearr_44121[(11)] = inst_44062__$1);

(statearr_44121[(12)] = inst_44060__$1);

(statearr_44121[(14)] = inst_44069);

return statearr_44121;
})();
var statearr_44122_44157 = state_44107__$1;
(statearr_44122_44157[(2)] = null);

(statearr_44122_44157[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44108 === (22))){
var state_44107__$1 = state_44107;
var statearr_44123_44158 = state_44107__$1;
(statearr_44123_44158[(2)] = null);

(statearr_44123_44158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44108 === (6))){
var inst_44048 = (state_44107[(13)]);
var inst_44057 = f.call(null,inst_44048);
var inst_44058 = cljs.core.seq.call(null,inst_44057);
var inst_44059 = inst_44058;
var inst_44060 = null;
var inst_44061 = (0);
var inst_44062 = (0);
var state_44107__$1 = (function (){var statearr_44124 = state_44107;
(statearr_44124[(8)] = inst_44059);

(statearr_44124[(9)] = inst_44061);

(statearr_44124[(11)] = inst_44062);

(statearr_44124[(12)] = inst_44060);

return statearr_44124;
})();
var statearr_44125_44159 = state_44107__$1;
(statearr_44125_44159[(2)] = null);

(statearr_44125_44159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44108 === (17))){
var inst_44073 = (state_44107[(7)]);
var inst_44077 = cljs.core.chunk_first.call(null,inst_44073);
var inst_44078 = cljs.core.chunk_rest.call(null,inst_44073);
var inst_44079 = cljs.core.count.call(null,inst_44077);
var inst_44059 = inst_44078;
var inst_44060 = inst_44077;
var inst_44061 = inst_44079;
var inst_44062 = (0);
var state_44107__$1 = (function (){var statearr_44126 = state_44107;
(statearr_44126[(8)] = inst_44059);

(statearr_44126[(9)] = inst_44061);

(statearr_44126[(11)] = inst_44062);

(statearr_44126[(12)] = inst_44060);

return statearr_44126;
})();
var statearr_44127_44160 = state_44107__$1;
(statearr_44127_44160[(2)] = null);

(statearr_44127_44160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44108 === (3))){
var inst_44105 = (state_44107[(2)]);
var state_44107__$1 = state_44107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44107__$1,inst_44105);
} else {
if((state_val_44108 === (12))){
var inst_44093 = (state_44107[(2)]);
var state_44107__$1 = state_44107;
var statearr_44128_44161 = state_44107__$1;
(statearr_44128_44161[(2)] = inst_44093);

(statearr_44128_44161[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44108 === (2))){
var state_44107__$1 = state_44107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44107__$1,(4),in$);
} else {
if((state_val_44108 === (23))){
var inst_44101 = (state_44107[(2)]);
var state_44107__$1 = state_44107;
var statearr_44129_44162 = state_44107__$1;
(statearr_44129_44162[(2)] = inst_44101);

(statearr_44129_44162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44108 === (19))){
var inst_44088 = (state_44107[(2)]);
var state_44107__$1 = state_44107;
var statearr_44130_44163 = state_44107__$1;
(statearr_44130_44163[(2)] = inst_44088);

(statearr_44130_44163[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44108 === (11))){
var inst_44059 = (state_44107[(8)]);
var inst_44073 = (state_44107[(7)]);
var inst_44073__$1 = cljs.core.seq.call(null,inst_44059);
var state_44107__$1 = (function (){var statearr_44131 = state_44107;
(statearr_44131[(7)] = inst_44073__$1);

return statearr_44131;
})();
if(inst_44073__$1){
var statearr_44132_44164 = state_44107__$1;
(statearr_44132_44164[(1)] = (14));

} else {
var statearr_44133_44165 = state_44107__$1;
(statearr_44133_44165[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44108 === (9))){
var inst_44095 = (state_44107[(2)]);
var inst_44096 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_44107__$1 = (function (){var statearr_44134 = state_44107;
(statearr_44134[(15)] = inst_44095);

return statearr_44134;
})();
if(cljs.core.truth_(inst_44096)){
var statearr_44135_44166 = state_44107__$1;
(statearr_44135_44166[(1)] = (21));

} else {
var statearr_44136_44167 = state_44107__$1;
(statearr_44136_44167[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44108 === (5))){
var inst_44051 = cljs.core.async.close_BANG_.call(null,out);
var state_44107__$1 = state_44107;
var statearr_44137_44168 = state_44107__$1;
(statearr_44137_44168[(2)] = inst_44051);

(statearr_44137_44168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44108 === (14))){
var inst_44073 = (state_44107[(7)]);
var inst_44075 = cljs.core.chunked_seq_QMARK_.call(null,inst_44073);
var state_44107__$1 = state_44107;
if(inst_44075){
var statearr_44138_44169 = state_44107__$1;
(statearr_44138_44169[(1)] = (17));

} else {
var statearr_44139_44170 = state_44107__$1;
(statearr_44139_44170[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44108 === (16))){
var inst_44091 = (state_44107[(2)]);
var state_44107__$1 = state_44107;
var statearr_44140_44171 = state_44107__$1;
(statearr_44140_44171[(2)] = inst_44091);

(statearr_44140_44171[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44108 === (10))){
var inst_44062 = (state_44107[(11)]);
var inst_44060 = (state_44107[(12)]);
var inst_44067 = cljs.core._nth.call(null,inst_44060,inst_44062);
var state_44107__$1 = state_44107;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44107__$1,(13),out,inst_44067);
} else {
if((state_val_44108 === (18))){
var inst_44073 = (state_44107[(7)]);
var inst_44082 = cljs.core.first.call(null,inst_44073);
var state_44107__$1 = state_44107;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44107__$1,(20),out,inst_44082);
} else {
if((state_val_44108 === (8))){
var inst_44061 = (state_44107[(9)]);
var inst_44062 = (state_44107[(11)]);
var inst_44064 = (inst_44062 < inst_44061);
var inst_44065 = inst_44064;
var state_44107__$1 = state_44107;
if(cljs.core.truth_(inst_44065)){
var statearr_44141_44172 = state_44107__$1;
(statearr_44141_44172[(1)] = (10));

} else {
var statearr_44142_44173 = state_44107__$1;
(statearr_44142_44173[(1)] = (11));

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
});})(c__41620__auto__))
;
return ((function (switch__41458__auto__,c__41620__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__41459__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__41459__auto____0 = (function (){
var statearr_44146 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44146[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__41459__auto__);

(statearr_44146[(1)] = (1));

return statearr_44146;
});
var cljs$core$async$mapcat_STAR__$_state_machine__41459__auto____1 = (function (state_44107){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_44107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e44147){if((e44147 instanceof Object)){
var ex__41462__auto__ = e44147;
var statearr_44148_44174 = state_44107;
(statearr_44148_44174[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44175 = state_44107;
state_44107 = G__44175;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__41459__auto__ = function(state_44107){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__41459__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__41459__auto____1.call(this,state_44107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__41459__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__41459__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto__))
})();
var state__41622__auto__ = (function (){var statearr_44149 = f__41621__auto__.call(null);
(statearr_44149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto__);

return statearr_44149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto__))
);

return c__41620__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args44176 = [];
var len__37833__auto___44179 = arguments.length;
var i__37834__auto___44180 = (0);
while(true){
if((i__37834__auto___44180 < len__37833__auto___44179)){
args44176.push((arguments[i__37834__auto___44180]));

var G__44181 = (i__37834__auto___44180 + (1));
i__37834__auto___44180 = G__44181;
continue;
} else {
}
break;
}

var G__44178 = args44176.length;
switch (G__44178) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44176.length)].join('')));

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
var args44183 = [];
var len__37833__auto___44186 = arguments.length;
var i__37834__auto___44187 = (0);
while(true){
if((i__37834__auto___44187 < len__37833__auto___44186)){
args44183.push((arguments[i__37834__auto___44187]));

var G__44188 = (i__37834__auto___44187 + (1));
i__37834__auto___44187 = G__44188;
continue;
} else {
}
break;
}

var G__44185 = args44183.length;
switch (G__44185) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44183.length)].join('')));

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
var args44190 = [];
var len__37833__auto___44241 = arguments.length;
var i__37834__auto___44242 = (0);
while(true){
if((i__37834__auto___44242 < len__37833__auto___44241)){
args44190.push((arguments[i__37834__auto___44242]));

var G__44243 = (i__37834__auto___44242 + (1));
i__37834__auto___44242 = G__44243;
continue;
} else {
}
break;
}

var G__44192 = args44190.length;
switch (G__44192) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44190.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41620__auto___44245 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto___44245,out){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto___44245,out){
return (function (state_44216){
var state_val_44217 = (state_44216[(1)]);
if((state_val_44217 === (7))){
var inst_44211 = (state_44216[(2)]);
var state_44216__$1 = state_44216;
var statearr_44218_44246 = state_44216__$1;
(statearr_44218_44246[(2)] = inst_44211);

(statearr_44218_44246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44217 === (1))){
var inst_44193 = null;
var state_44216__$1 = (function (){var statearr_44219 = state_44216;
(statearr_44219[(7)] = inst_44193);

return statearr_44219;
})();
var statearr_44220_44247 = state_44216__$1;
(statearr_44220_44247[(2)] = null);

(statearr_44220_44247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44217 === (4))){
var inst_44196 = (state_44216[(8)]);
var inst_44196__$1 = (state_44216[(2)]);
var inst_44197 = (inst_44196__$1 == null);
var inst_44198 = cljs.core.not.call(null,inst_44197);
var state_44216__$1 = (function (){var statearr_44221 = state_44216;
(statearr_44221[(8)] = inst_44196__$1);

return statearr_44221;
})();
if(inst_44198){
var statearr_44222_44248 = state_44216__$1;
(statearr_44222_44248[(1)] = (5));

} else {
var statearr_44223_44249 = state_44216__$1;
(statearr_44223_44249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44217 === (6))){
var state_44216__$1 = state_44216;
var statearr_44224_44250 = state_44216__$1;
(statearr_44224_44250[(2)] = null);

(statearr_44224_44250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44217 === (3))){
var inst_44213 = (state_44216[(2)]);
var inst_44214 = cljs.core.async.close_BANG_.call(null,out);
var state_44216__$1 = (function (){var statearr_44225 = state_44216;
(statearr_44225[(9)] = inst_44213);

return statearr_44225;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44216__$1,inst_44214);
} else {
if((state_val_44217 === (2))){
var state_44216__$1 = state_44216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44216__$1,(4),ch);
} else {
if((state_val_44217 === (11))){
var inst_44196 = (state_44216[(8)]);
var inst_44205 = (state_44216[(2)]);
var inst_44193 = inst_44196;
var state_44216__$1 = (function (){var statearr_44226 = state_44216;
(statearr_44226[(7)] = inst_44193);

(statearr_44226[(10)] = inst_44205);

return statearr_44226;
})();
var statearr_44227_44251 = state_44216__$1;
(statearr_44227_44251[(2)] = null);

(statearr_44227_44251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44217 === (9))){
var inst_44196 = (state_44216[(8)]);
var state_44216__$1 = state_44216;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44216__$1,(11),out,inst_44196);
} else {
if((state_val_44217 === (5))){
var inst_44193 = (state_44216[(7)]);
var inst_44196 = (state_44216[(8)]);
var inst_44200 = cljs.core._EQ_.call(null,inst_44196,inst_44193);
var state_44216__$1 = state_44216;
if(inst_44200){
var statearr_44229_44252 = state_44216__$1;
(statearr_44229_44252[(1)] = (8));

} else {
var statearr_44230_44253 = state_44216__$1;
(statearr_44230_44253[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44217 === (10))){
var inst_44208 = (state_44216[(2)]);
var state_44216__$1 = state_44216;
var statearr_44231_44254 = state_44216__$1;
(statearr_44231_44254[(2)] = inst_44208);

(statearr_44231_44254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44217 === (8))){
var inst_44193 = (state_44216[(7)]);
var tmp44228 = inst_44193;
var inst_44193__$1 = tmp44228;
var state_44216__$1 = (function (){var statearr_44232 = state_44216;
(statearr_44232[(7)] = inst_44193__$1);

return statearr_44232;
})();
var statearr_44233_44255 = state_44216__$1;
(statearr_44233_44255[(2)] = null);

(statearr_44233_44255[(1)] = (2));


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
});})(c__41620__auto___44245,out))
;
return ((function (switch__41458__auto__,c__41620__auto___44245,out){
return (function() {
var cljs$core$async$state_machine__41459__auto__ = null;
var cljs$core$async$state_machine__41459__auto____0 = (function (){
var statearr_44237 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44237[(0)] = cljs$core$async$state_machine__41459__auto__);

(statearr_44237[(1)] = (1));

return statearr_44237;
});
var cljs$core$async$state_machine__41459__auto____1 = (function (state_44216){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_44216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e44238){if((e44238 instanceof Object)){
var ex__41462__auto__ = e44238;
var statearr_44239_44256 = state_44216;
(statearr_44239_44256[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44257 = state_44216;
state_44216 = G__44257;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
cljs$core$async$state_machine__41459__auto__ = function(state_44216){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41459__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41459__auto____1.call(this,state_44216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41459__auto____0;
cljs$core$async$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41459__auto____1;
return cljs$core$async$state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto___44245,out))
})();
var state__41622__auto__ = (function (){var statearr_44240 = f__41621__auto__.call(null);
(statearr_44240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto___44245);

return statearr_44240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto___44245,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args44258 = [];
var len__37833__auto___44328 = arguments.length;
var i__37834__auto___44329 = (0);
while(true){
if((i__37834__auto___44329 < len__37833__auto___44328)){
args44258.push((arguments[i__37834__auto___44329]));

var G__44330 = (i__37834__auto___44329 + (1));
i__37834__auto___44329 = G__44330;
continue;
} else {
}
break;
}

var G__44260 = args44258.length;
switch (G__44260) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44258.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41620__auto___44332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto___44332,out){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto___44332,out){
return (function (state_44298){
var state_val_44299 = (state_44298[(1)]);
if((state_val_44299 === (7))){
var inst_44294 = (state_44298[(2)]);
var state_44298__$1 = state_44298;
var statearr_44300_44333 = state_44298__$1;
(statearr_44300_44333[(2)] = inst_44294);

(statearr_44300_44333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44299 === (1))){
var inst_44261 = (new Array(n));
var inst_44262 = inst_44261;
var inst_44263 = (0);
var state_44298__$1 = (function (){var statearr_44301 = state_44298;
(statearr_44301[(7)] = inst_44263);

(statearr_44301[(8)] = inst_44262);

return statearr_44301;
})();
var statearr_44302_44334 = state_44298__$1;
(statearr_44302_44334[(2)] = null);

(statearr_44302_44334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44299 === (4))){
var inst_44266 = (state_44298[(9)]);
var inst_44266__$1 = (state_44298[(2)]);
var inst_44267 = (inst_44266__$1 == null);
var inst_44268 = cljs.core.not.call(null,inst_44267);
var state_44298__$1 = (function (){var statearr_44303 = state_44298;
(statearr_44303[(9)] = inst_44266__$1);

return statearr_44303;
})();
if(inst_44268){
var statearr_44304_44335 = state_44298__$1;
(statearr_44304_44335[(1)] = (5));

} else {
var statearr_44305_44336 = state_44298__$1;
(statearr_44305_44336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44299 === (15))){
var inst_44288 = (state_44298[(2)]);
var state_44298__$1 = state_44298;
var statearr_44306_44337 = state_44298__$1;
(statearr_44306_44337[(2)] = inst_44288);

(statearr_44306_44337[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44299 === (13))){
var state_44298__$1 = state_44298;
var statearr_44307_44338 = state_44298__$1;
(statearr_44307_44338[(2)] = null);

(statearr_44307_44338[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44299 === (6))){
var inst_44263 = (state_44298[(7)]);
var inst_44284 = (inst_44263 > (0));
var state_44298__$1 = state_44298;
if(cljs.core.truth_(inst_44284)){
var statearr_44308_44339 = state_44298__$1;
(statearr_44308_44339[(1)] = (12));

} else {
var statearr_44309_44340 = state_44298__$1;
(statearr_44309_44340[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44299 === (3))){
var inst_44296 = (state_44298[(2)]);
var state_44298__$1 = state_44298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44298__$1,inst_44296);
} else {
if((state_val_44299 === (12))){
var inst_44262 = (state_44298[(8)]);
var inst_44286 = cljs.core.vec.call(null,inst_44262);
var state_44298__$1 = state_44298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44298__$1,(15),out,inst_44286);
} else {
if((state_val_44299 === (2))){
var state_44298__$1 = state_44298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44298__$1,(4),ch);
} else {
if((state_val_44299 === (11))){
var inst_44278 = (state_44298[(2)]);
var inst_44279 = (new Array(n));
var inst_44262 = inst_44279;
var inst_44263 = (0);
var state_44298__$1 = (function (){var statearr_44310 = state_44298;
(statearr_44310[(7)] = inst_44263);

(statearr_44310[(10)] = inst_44278);

(statearr_44310[(8)] = inst_44262);

return statearr_44310;
})();
var statearr_44311_44341 = state_44298__$1;
(statearr_44311_44341[(2)] = null);

(statearr_44311_44341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44299 === (9))){
var inst_44262 = (state_44298[(8)]);
var inst_44276 = cljs.core.vec.call(null,inst_44262);
var state_44298__$1 = state_44298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44298__$1,(11),out,inst_44276);
} else {
if((state_val_44299 === (5))){
var inst_44263 = (state_44298[(7)]);
var inst_44271 = (state_44298[(11)]);
var inst_44262 = (state_44298[(8)]);
var inst_44266 = (state_44298[(9)]);
var inst_44270 = (inst_44262[inst_44263] = inst_44266);
var inst_44271__$1 = (inst_44263 + (1));
var inst_44272 = (inst_44271__$1 < n);
var state_44298__$1 = (function (){var statearr_44312 = state_44298;
(statearr_44312[(11)] = inst_44271__$1);

(statearr_44312[(12)] = inst_44270);

return statearr_44312;
})();
if(cljs.core.truth_(inst_44272)){
var statearr_44313_44342 = state_44298__$1;
(statearr_44313_44342[(1)] = (8));

} else {
var statearr_44314_44343 = state_44298__$1;
(statearr_44314_44343[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44299 === (14))){
var inst_44291 = (state_44298[(2)]);
var inst_44292 = cljs.core.async.close_BANG_.call(null,out);
var state_44298__$1 = (function (){var statearr_44316 = state_44298;
(statearr_44316[(13)] = inst_44291);

return statearr_44316;
})();
var statearr_44317_44344 = state_44298__$1;
(statearr_44317_44344[(2)] = inst_44292);

(statearr_44317_44344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44299 === (10))){
var inst_44282 = (state_44298[(2)]);
var state_44298__$1 = state_44298;
var statearr_44318_44345 = state_44298__$1;
(statearr_44318_44345[(2)] = inst_44282);

(statearr_44318_44345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44299 === (8))){
var inst_44271 = (state_44298[(11)]);
var inst_44262 = (state_44298[(8)]);
var tmp44315 = inst_44262;
var inst_44262__$1 = tmp44315;
var inst_44263 = inst_44271;
var state_44298__$1 = (function (){var statearr_44319 = state_44298;
(statearr_44319[(7)] = inst_44263);

(statearr_44319[(8)] = inst_44262__$1);

return statearr_44319;
})();
var statearr_44320_44346 = state_44298__$1;
(statearr_44320_44346[(2)] = null);

(statearr_44320_44346[(1)] = (2));


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
});})(c__41620__auto___44332,out))
;
return ((function (switch__41458__auto__,c__41620__auto___44332,out){
return (function() {
var cljs$core$async$state_machine__41459__auto__ = null;
var cljs$core$async$state_machine__41459__auto____0 = (function (){
var statearr_44324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44324[(0)] = cljs$core$async$state_machine__41459__auto__);

(statearr_44324[(1)] = (1));

return statearr_44324;
});
var cljs$core$async$state_machine__41459__auto____1 = (function (state_44298){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_44298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e44325){if((e44325 instanceof Object)){
var ex__41462__auto__ = e44325;
var statearr_44326_44347 = state_44298;
(statearr_44326_44347[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44348 = state_44298;
state_44298 = G__44348;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
cljs$core$async$state_machine__41459__auto__ = function(state_44298){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41459__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41459__auto____1.call(this,state_44298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41459__auto____0;
cljs$core$async$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41459__auto____1;
return cljs$core$async$state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto___44332,out))
})();
var state__41622__auto__ = (function (){var statearr_44327 = f__41621__auto__.call(null);
(statearr_44327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto___44332);

return statearr_44327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto___44332,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args44349 = [];
var len__37833__auto___44423 = arguments.length;
var i__37834__auto___44424 = (0);
while(true){
if((i__37834__auto___44424 < len__37833__auto___44423)){
args44349.push((arguments[i__37834__auto___44424]));

var G__44425 = (i__37834__auto___44424 + (1));
i__37834__auto___44424 = G__44425;
continue;
} else {
}
break;
}

var G__44351 = args44349.length;
switch (G__44351) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44349.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41620__auto___44427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41620__auto___44427,out){
return (function (){
var f__41621__auto__ = (function (){var switch__41458__auto__ = ((function (c__41620__auto___44427,out){
return (function (state_44393){
var state_val_44394 = (state_44393[(1)]);
if((state_val_44394 === (7))){
var inst_44389 = (state_44393[(2)]);
var state_44393__$1 = state_44393;
var statearr_44395_44428 = state_44393__$1;
(statearr_44395_44428[(2)] = inst_44389);

(statearr_44395_44428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44394 === (1))){
var inst_44352 = [];
var inst_44353 = inst_44352;
var inst_44354 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_44393__$1 = (function (){var statearr_44396 = state_44393;
(statearr_44396[(7)] = inst_44354);

(statearr_44396[(8)] = inst_44353);

return statearr_44396;
})();
var statearr_44397_44429 = state_44393__$1;
(statearr_44397_44429[(2)] = null);

(statearr_44397_44429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44394 === (4))){
var inst_44357 = (state_44393[(9)]);
var inst_44357__$1 = (state_44393[(2)]);
var inst_44358 = (inst_44357__$1 == null);
var inst_44359 = cljs.core.not.call(null,inst_44358);
var state_44393__$1 = (function (){var statearr_44398 = state_44393;
(statearr_44398[(9)] = inst_44357__$1);

return statearr_44398;
})();
if(inst_44359){
var statearr_44399_44430 = state_44393__$1;
(statearr_44399_44430[(1)] = (5));

} else {
var statearr_44400_44431 = state_44393__$1;
(statearr_44400_44431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44394 === (15))){
var inst_44383 = (state_44393[(2)]);
var state_44393__$1 = state_44393;
var statearr_44401_44432 = state_44393__$1;
(statearr_44401_44432[(2)] = inst_44383);

(statearr_44401_44432[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44394 === (13))){
var state_44393__$1 = state_44393;
var statearr_44402_44433 = state_44393__$1;
(statearr_44402_44433[(2)] = null);

(statearr_44402_44433[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44394 === (6))){
var inst_44353 = (state_44393[(8)]);
var inst_44378 = inst_44353.length;
var inst_44379 = (inst_44378 > (0));
var state_44393__$1 = state_44393;
if(cljs.core.truth_(inst_44379)){
var statearr_44403_44434 = state_44393__$1;
(statearr_44403_44434[(1)] = (12));

} else {
var statearr_44404_44435 = state_44393__$1;
(statearr_44404_44435[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44394 === (3))){
var inst_44391 = (state_44393[(2)]);
var state_44393__$1 = state_44393;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44393__$1,inst_44391);
} else {
if((state_val_44394 === (12))){
var inst_44353 = (state_44393[(8)]);
var inst_44381 = cljs.core.vec.call(null,inst_44353);
var state_44393__$1 = state_44393;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44393__$1,(15),out,inst_44381);
} else {
if((state_val_44394 === (2))){
var state_44393__$1 = state_44393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44393__$1,(4),ch);
} else {
if((state_val_44394 === (11))){
var inst_44361 = (state_44393[(10)]);
var inst_44357 = (state_44393[(9)]);
var inst_44371 = (state_44393[(2)]);
var inst_44372 = [];
var inst_44373 = inst_44372.push(inst_44357);
var inst_44353 = inst_44372;
var inst_44354 = inst_44361;
var state_44393__$1 = (function (){var statearr_44405 = state_44393;
(statearr_44405[(7)] = inst_44354);

(statearr_44405[(8)] = inst_44353);

(statearr_44405[(11)] = inst_44371);

(statearr_44405[(12)] = inst_44373);

return statearr_44405;
})();
var statearr_44406_44436 = state_44393__$1;
(statearr_44406_44436[(2)] = null);

(statearr_44406_44436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44394 === (9))){
var inst_44353 = (state_44393[(8)]);
var inst_44369 = cljs.core.vec.call(null,inst_44353);
var state_44393__$1 = state_44393;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44393__$1,(11),out,inst_44369);
} else {
if((state_val_44394 === (5))){
var inst_44354 = (state_44393[(7)]);
var inst_44361 = (state_44393[(10)]);
var inst_44357 = (state_44393[(9)]);
var inst_44361__$1 = f.call(null,inst_44357);
var inst_44362 = cljs.core._EQ_.call(null,inst_44361__$1,inst_44354);
var inst_44363 = cljs.core.keyword_identical_QMARK_.call(null,inst_44354,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_44364 = (inst_44362) || (inst_44363);
var state_44393__$1 = (function (){var statearr_44407 = state_44393;
(statearr_44407[(10)] = inst_44361__$1);

return statearr_44407;
})();
if(cljs.core.truth_(inst_44364)){
var statearr_44408_44437 = state_44393__$1;
(statearr_44408_44437[(1)] = (8));

} else {
var statearr_44409_44438 = state_44393__$1;
(statearr_44409_44438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44394 === (14))){
var inst_44386 = (state_44393[(2)]);
var inst_44387 = cljs.core.async.close_BANG_.call(null,out);
var state_44393__$1 = (function (){var statearr_44411 = state_44393;
(statearr_44411[(13)] = inst_44386);

return statearr_44411;
})();
var statearr_44412_44439 = state_44393__$1;
(statearr_44412_44439[(2)] = inst_44387);

(statearr_44412_44439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44394 === (10))){
var inst_44376 = (state_44393[(2)]);
var state_44393__$1 = state_44393;
var statearr_44413_44440 = state_44393__$1;
(statearr_44413_44440[(2)] = inst_44376);

(statearr_44413_44440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44394 === (8))){
var inst_44353 = (state_44393[(8)]);
var inst_44361 = (state_44393[(10)]);
var inst_44357 = (state_44393[(9)]);
var inst_44366 = inst_44353.push(inst_44357);
var tmp44410 = inst_44353;
var inst_44353__$1 = tmp44410;
var inst_44354 = inst_44361;
var state_44393__$1 = (function (){var statearr_44414 = state_44393;
(statearr_44414[(7)] = inst_44354);

(statearr_44414[(8)] = inst_44353__$1);

(statearr_44414[(14)] = inst_44366);

return statearr_44414;
})();
var statearr_44415_44441 = state_44393__$1;
(statearr_44415_44441[(2)] = null);

(statearr_44415_44441[(1)] = (2));


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
});})(c__41620__auto___44427,out))
;
return ((function (switch__41458__auto__,c__41620__auto___44427,out){
return (function() {
var cljs$core$async$state_machine__41459__auto__ = null;
var cljs$core$async$state_machine__41459__auto____0 = (function (){
var statearr_44419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44419[(0)] = cljs$core$async$state_machine__41459__auto__);

(statearr_44419[(1)] = (1));

return statearr_44419;
});
var cljs$core$async$state_machine__41459__auto____1 = (function (state_44393){
while(true){
var ret_value__41460__auto__ = (function (){try{while(true){
var result__41461__auto__ = switch__41458__auto__.call(null,state_44393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41461__auto__;
}
break;
}
}catch (e44420){if((e44420 instanceof Object)){
var ex__41462__auto__ = e44420;
var statearr_44421_44442 = state_44393;
(statearr_44421_44442[(5)] = ex__41462__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44443 = state_44393;
state_44393 = G__44443;
continue;
} else {
return ret_value__41460__auto__;
}
break;
}
});
cljs$core$async$state_machine__41459__auto__ = function(state_44393){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41459__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41459__auto____1.call(this,state_44393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41459__auto____0;
cljs$core$async$state_machine__41459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41459__auto____1;
return cljs$core$async$state_machine__41459__auto__;
})()
;})(switch__41458__auto__,c__41620__auto___44427,out))
})();
var state__41622__auto__ = (function (){var statearr_44422 = f__41621__auto__.call(null);
(statearr_44422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41620__auto___44427);

return statearr_44422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41622__auto__);
});})(c__41620__auto___44427,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map